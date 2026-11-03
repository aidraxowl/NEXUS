// Mise en forme d'un booklet pour le PDF (injecté par scripts/booklets-pdf.mjs).
// Page de garde, sommaire, « Teste-toi d'abord » en tête de chapitre,
// réponses, glossaire DE → FR et pages de notes en fin de booklet.
(function () {
  var art = document.querySelector("article")
  if (!art) return
  document.body.classList.add("nx-booklet")

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]
    })
  }
  function hide(el) {
    if (el) el.classList.add("nx-hide")
  }
  // Éléments entre un titre de chapitre et le suivant
  function range(h, stop) {
    var out = []
    var el = h.nextElementSibling
    while (el && el !== stop) {
      out.push(el)
      el = el.nextElementSibling
    }
    return out
  }
  function findAll(els, sel) {
    var res = []
    els.forEach(function (el) {
      if (el.matches && el.matches(sel)) res.push(el)
      if (el.querySelectorAll) Array.prototype.push.apply(res, el.querySelectorAll(sel))
    })
    return res
  }

  // Chapitres : titres « ## n. … » du booklet (hors thèmes intégrés)
  var chapters = Array.prototype.filter.call(art.querySelectorAll("h2"), function (h) {
    return !h.closest(".transclude") && /^\s*\d+\./.test(h.textContent)
  })
  chapters.forEach(function (h) {
    h.classList.add("nx-chapter")
  })

  // Encadré d'information du booklet → page de garde
  var info = art.querySelector('.callout[data-callout="info"]')
  var label = info ? info.querySelector(".callout-title").textContent.trim() : document.title
  var course = label.replace(/^Booklet\s*[·:-]\s*/i, "")
  hide(info)

  // Sources : inutiles sur papier
  art.querySelectorAll(".transclude h2, .transclude h3").forEach(function (h) {
    if (/^\s*sources\s*$/i.test(h.textContent)) {
      hide(h)
      var n = h.nextElementSibling
      while (n && !/^H[1-3]$/.test(n.tagName)) {
        hide(n)
        n = n.nextElementSibling
      }
    }
  })

  // Questions : « Teste-toi d'abord » en tête de chapitre, réponses à la fin
  var answers = document.createElement("section")
  answers.className = "nx-answers"
  answers.innerHTML = "<h2 class='nx-chapter nx-end'>Réponses aux questions</h2>"
  var tocSubs = []
  chapters.forEach(function (h, ci) {
    var els = range(h, chapters[ci + 1])
    // Sous-parties pour le sommaire
    var subs = []
    findAll(els, "h2").forEach(function (s) {
      var tx = s.textContent.trim()
      if (!s.closest(".nx-hide") && !/^(pour réviser|sources)$/i.test(tx)) subs.push(tx)
    })
    tocSubs.push(subs)
    // Questions
    var qs = findAll(els, '.callout[data-callout="question"]')
    if (!qs.length) return
    findAll(els, "h3").forEach(function (t) {
      if (/^\s*questions de synth/i.test(t.textContent)) hide(t)
    })
    var box = document.createElement("div")
    box.className = "nx-pretest"
    var list = "<p class='nx-pretest-title'>Teste-toi d'abord</p><ol>"
    var block = document.createElement("div")
    block.className = "nx-ans-chapter"
    block.innerHTML = "<h3>" + esc(h.textContent.trim()) + "</h3>"
    qs.forEach(function (q, qi) {
      var num = ci + 1 + "." + (qi + 1)
      var title = q.querySelector(".callout-title")
      var content = q.querySelector(".callout-content")
      var t = title ? title.textContent.trim() : ""
      list += "<li><b>" + num + "</b> " + esc(t) + "</li>"
      var a = document.createElement("div")
      a.className = "nx-ans"
      a.innerHTML = "<p class='nx-ans-q'><b>" + num + "</b> " + esc(t) + "</p>"
      if (content) a.appendChild(content.cloneNode(true))
      block.appendChild(a)
      hide(q)
    })
    box.innerHTML =
      list + "</ol><p class='nx-pretest-hint'>Réponds de tête ou par écrit, puis lis le chapitre. Réponses en fin de booklet.</p>"
    h.parentNode.insertBefore(box, h.nextSibling)
    answers.appendChild(block)
  })
  var hasAnswers = !!answers.querySelector(".nx-ans")
  if (hasAnswers) art.appendChild(answers)

  // Glossaire DE → FR (fourni par le script de génération)
  var gl = window.NX_GLOSSARY || []
  if (gl.length) {
    var g = document.createElement("section")
    g.className = "nx-glossary"
    g.innerHTML =
      "<h2 class='nx-chapter nx-end'>Glossaire DE → FR</h2><table><thead><tr><th>Deutsch</th><th>Français</th></tr></thead><tbody>" +
      gl
        .map(function (e) {
          return "<tr><td>" + esc(e.de) + "</td><td>" + esc(e.fr) + "</td></tr>"
        })
        .join("") +
      "</tbody></table>"
    art.appendChild(g)
  }

  // Pages de notes
  var notes = document.createElement("section")
  notes.className = "nx-notes"
  notes.innerHTML =
    "<h2 class='nx-chapter nx-end'>Notes</h2>" + new Array(20).join("<div class='nx-line'></div>") +
    "<div class='nx-notes-p2'>" + new Array(24).join("<div class='nx-line'></div>") + "</div>"
  art.appendChild(notes)

  // Page de garde
  var built = new Date().toISOString().slice(0, 10)
  var cover = document.createElement("section")
  cover.className = "nx-cover"
  var iconLink = document.querySelector('link[rel="icon"]')
  var icon = iconLink ? iconLink.getAttribute("href") : ""
  cover.innerHTML =
    "<div class='nx-brand'>" + (icon ? "<img src='" + icon + "' alt=''>" : "") + "<span>NEXUS</span></div>" +
    "<div class='nx-band'><h1>" + esc(course) + "</h1><p>Booklet de révision</p></div>" +
    "<div class='nx-owner'><b>JUG</b><span>BSG26</span></div>" +
    "<div class='nx-foot'><span>" + chapters.length + " chapitres</span><b>généré le " + built + "</b></div>"

  // Sommaire
  var toc = document.createElement("section")
  toc.className = "nx-toc"
  var items = chapters.map(function (h, ci) {
    var m = h.textContent.trim().match(/^(\d+)\.\s*(.*)$/)
    var subs = tocSubs[ci] || []
    return (
      "<li><span class='nx-n'>" + (m ? m[1] : "") + "</span><div><b>" + esc(m ? m[2] : h.textContent) + "</b>" +
      (subs.length ? "<small>" + subs.map(esc).join(" · ") + "</small>" : "") + "</div></li>"
    )
  })
  if (hasAnswers) items.push("<li class='nx-toc-extra'><span class='nx-n'>R</span><div><b>Réponses aux questions</b></div></li>")
  if (gl.length) items.push("<li class='nx-toc-extra'><span class='nx-n'>G</span><div><b>Glossaire DE → FR</b></div></li>")
  items.push("<li class='nx-toc-extra'><span class='nx-n'>N</span><div><b>Notes</b></div></li>")
  toc.innerHTML = "<h2>Sommaire</h2><ol>" + items.join("") + "</ol>"
  art.insertBefore(toc, art.firstChild)
  art.insertBefore(cover, art.firstChild)
})()
