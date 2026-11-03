// Génère un PDF (A5) pour chaque booklet du site, après `npx quartz build`.
// Les pages « booklet-*.html » de public/ sont imprimées avec Chrome headless
// dans public/booklets/<nom>.pdf. Ce script n'échoue jamais : si un PDF ne peut
// pas être créé, le site est quand même déployé.
import { readdirSync, mkdirSync, existsSync, createReadStream, statSync, readFileSync, writeFileSync, rmSync } from "node:fs"
import { join, basename, extname, relative, sep } from "node:path"
import { spawn, spawnSync } from "node:child_process"
import http from "node:http"
import { fileURLToPath } from "node:url"

// Mise en forme du PDF (page de garde, sommaire, réponses en fin de booklet)
const INJECT = readFileSync(join(fileURLToPath(new URL(".", import.meta.url)), "booklet-print.js"), "utf8")

const PUBLIC = "public"
const OUT = join(PUBLIC, "booklets")

function walk(dir) {
  let out = []
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out = out.concat(walk(p))
    else if (/^booklet-.*\.html$/i.test(e.name) && !/\.nxprint\.html$/i.test(e.name)) out.push(p)
  }
  return out
}

const candidates = [process.env.CHROME_PATH, "google-chrome", "google-chrome-stable", "chromium", "chromium-browser"].filter(Boolean)
const chrome = candidates.find((c) => spawnSync(c, ["--version"]).status === 0)
if (!chrome) {
  console.warn("Chrome introuvable : aucun PDF de booklet généré.")
  process.exit(0)
}
if (!existsSync(PUBLIC)) {
  console.warn("Dossier public/ absent : aucun PDF de booklet généré.")
  process.exit(0)
}

// ---- Glossaire DE → FR : tiré des alias des concepts et de 08-Glossaire ----
const VAULT = process.env.NEXUS_VAULT || "NEXUS"
const notes = new Map() // nom en minuscules → chemin
function walkMd(dir) {
  if (!existsSync(dir)) return
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) {
      if (!e.name.startsWith(".") && e.name.toLowerCase() !== "private") walkMd(p)
    } else if (e.name.endsWith(".md")) notes.set(e.name.slice(0, -3).toLowerCase(), p)
  }
}
walkMd(VAULT)
const read = (p) => {
  try {
    return readFileSync(p, "utf8").replace(/\r\n/g, "\n")
  } catch {
    return ""
  }
}
const linkName = (inner) => inner.split(/\\?\|/)[0].split("#")[0].trim()
function aliases(text) {
  const fm = text.match(/^---\n([\s\S]*?)\n---/)
  if (!fm) return []
  const m = fm[1].match(/^aliases:\n((?:[ \t]+-.*\n?)+)/m)
  if (!m) return []
  return [...m[1].matchAll(/-\s*"?([^"\n]*?)"?\s*$/gm)].map((x) => x[1].trim()).filter(Boolean)
}
function glossaryFor(htmlFile) {
  const slug = basename(htmlFile, ".html").toLowerCase()
  let booklet = null
  for (const [name, p] of notes) if (name.replace(/\s+/g, "-") === slug) booklet = p
  if (!booklet) return []
  const themes = [...read(booklet).matchAll(/!\[\[([^\]]+)\]\]/g)].map((m) => linkName(m[1]))
  const linked = new Set(themes.map((t) => t.toLowerCase()))
  for (const t of themes) {
    const p = notes.get(t.toLowerCase())
    if (!p) continue
    for (const m of read(p).matchAll(/(?<!!)\[\[([^\]]+)\]\]/g)) linked.add(linkName(m[1]).toLowerCase())
  }
  const out = new Map()
  for (const name of linked) {
    const p = notes.get(name)
    if (!p || !/0[23]-(Concepts|Themes)/.test(p)) continue
    const text = read(p)
    const de = aliases(text)[0]
    const title = (text.match(/^title:\s*"?(.*?)"?\s*$/m) || [])[1] || basename(p, ".md")
    // Garder le terme allemand (1er alias) ; écarter un alias anglais (tout en minuscules)
    const looksGerman = de && (/^[A-ZÄÖÜ]/.test(de) || /[äöüß]/i.test(de))
    if (looksGerman && de.toLowerCase() !== title.toLowerCase()) out.set(de.toLowerCase(), { de, fr: title })
  }
  // Lignes du glossaire général qui renvoient à une note du booklet
  const gtext = read(join(VAULT, "08-Glossaire", "index.md"))
  for (const line of gtext.split("\n")) {
    const c = line.split("|").map((x) => x.trim())
    if (c.length < 5 || !c[1] || /^-+$/.test(c[1]) || /^deutsch$/i.test(c[1])) continue
    const ref = (c[3].match(/\[\[([^\]]+)\]\]/) || [])[1]
    if (ref && linked.has(linkName(ref).toLowerCase()) && (/^[A-ZÄÖÜ]/.test(c[1]) || /[äöüß]/i.test(c[1])))
      out.set(c[1].toLowerCase(), { de: c[1], fr: c[2] })
  }
  return [...out.values()].sort((a, b) => a.de.localeCompare(b.de, "de"))
}

const pages = walk(PUBLIC)
mkdirSync(OUT, { recursive: true })

// Petit serveur local pour que la page s'affiche comme sur le site (scripts, polices).
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".webp": "image/webp", ".woff2": "font/woff2" }
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]).replace(/^\/+/, "")
  let f = join(PUBLIC, p)
  try {
    if (statSync(f).isDirectory()) f = join(f, "index.html")
  } catch {
    if (existsSync(f + ".html")) f = f + ".html"
  }
  if (!existsSync(f)) {
    res.writeHead(404)
    return res.end()
  }
  res.writeHead(200, { "Content-Type": types[extname(f).toLowerCase()] || "application/octet-stream" })
  createReadStream(f).pipe(res)
})
await new Promise((r) => server.listen(0, "127.0.0.1", r))
const port = server.address().port

function print(url, out) {
  return new Promise((resolve) => {
    const p = spawn(chrome, [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--no-pdf-header-footer",
      "--run-all-compositor-stages-before-draw",
      "--virtual-time-budget=20000",
      `--print-to-pdf=${out}`,
      url,
    ], { stdio: "inherit" })
    const t = setTimeout(() => p.kill("SIGKILL"), 120000)
    p.on("exit", (code) => {
      clearTimeout(t)
      resolve(code === 0 && existsSync(out))
    })
  })
}

let ok = 0
for (const page of pages) {
  const tmp = page.replace(/\.html$/i, ".nxprint.html")
  const html = readFileSync(page, "utf8")
  const gloss = JSON.stringify(glossaryFor(page)).replace(/</g, "\\u003c")
  writeFileSync(tmp, html.replace(/<\/body>/i, () => `<script>window.NX_GLOSSARY = ${gloss};</script><script>${INJECT}</script></body>`))
  const rel = relative(PUBLIC, tmp).split(sep).join("/")
  const out = join(OUT, basename(page).replace(/\.html$/i, ".pdf").toLowerCase())
  const good = await print(`http://127.0.0.1:${port}/${encodeURI(rel)}`, out)
  rmSync(tmp, { force: true })
  console.log(good ? `PDF créé : ${out}` : `Échec : ${page}`)
  if (good) ok++
}
server.close()
console.log(`${ok}/${pages.length} booklet(s) en PDF.`)
