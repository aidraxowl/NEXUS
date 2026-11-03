// Génère un PDF (A5) pour chaque booklet du site, après `npx quartz build`.
// Les pages « booklet-*.html » de public/ sont imprimées avec Chrome headless
// dans public/booklets/<nom>.pdf. Ce script n'échoue jamais : si un PDF ne peut
// pas être créé, le site est quand même déployé.
import { readdirSync, mkdirSync, existsSync, createReadStream, statSync } from "node:fs"
import { join, basename, extname, relative, sep } from "node:path"
import { spawn, spawnSync } from "node:child_process"
import http from "node:http"

const PUBLIC = "public"
const OUT = join(PUBLIC, "booklets")

function walk(dir) {
  let out = []
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out = out.concat(walk(p))
    else if (/^booklet-.*\.html$/i.test(e.name)) out.push(p)
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
  const rel = relative(PUBLIC, page).split(sep).join("/").replace(/\.html$/i, "")
  const out = join(OUT, basename(page).replace(/\.html$/i, ".pdf").toLowerCase())
  const good = await print(`http://127.0.0.1:${port}/${encodeURI(rel)}`, out)
  console.log(good ? `PDF créé : ${out}` : `Échec : ${page}`)
  if (good) ok++
}
server.close()
console.log(`${ok}/${pages.length} booklet(s) en PDF.`)
