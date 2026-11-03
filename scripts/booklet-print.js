(function () {
  var art = document.querySelector("article")
  if (!art) return
  document.body.classList.add("nx-booklet")
  // Chapitres : titres « ## n. … » du booklet (hors thèmes intégrés)
  var chapters = Array.prototype.filter.call(art.querySelectorAll("h2"), function (h) {
    return !h.closest(".transclude") && /^\s*\d+\./.test(h.textContent)
  })
  chapters.forEach(function (h) { h.classList.add("nx-chapter") })
  // Infos de la page de garde (encadré info du booklet)
  var info = art.querySelector('.callout[data-callout="info"]')
  var label = info ? info.querySelector(".callout-title").textContent.trim() : document.title
  var course = label.replace(/^Booklet\s*[·:-]\s*/i, "")
  if (info) info.classList.add("nx-hide")
  // Sources et liens « original » : inutiles sur papier
  art.querySelectorAll(".transclude h2, .transclude h3").forEach(function (h) {
    if (/^\s*sources\s*$/i.test(h.textContent)) {
      h.classList.add("nx-hide")
      var n = h.nextElementSibling
      while (n && !/^H[1-3]$/.test(n.tagName)) { n.classList.add("nx-hide"); n = n.nextElementSibling }
    }
  })
  // Questions : la question reste dans le chapitre, la réponse part à la fin
  var answers = document.createElement("section")
  answers.className = "nx-answers"
  answers.innerHTML = "<h2 class='nx-chapter'>Réponses aux questions</h2>"
  chapters.forEach(function (h, ci) {
    var stop = chapters[ci + 1]
    var qs = []
    var el = h.nextElementSibling
    while (el && el !== stop) {
      el.querySelectorAll && el.querySelectorAll('.callout[data-callout="question"]').forEach(function (q) { qs.push(q) })
      el = el.nextElementSibling
    }
    if (!qs.length) return
    var block = document.createElement("div")
    block.className = "nx-ans-chapter"
    block.innerHTML = "<h3>" + h.textContent.trim() + "</h3>"
    qs.forEach(function (q, qi) {
      var num = ci + 1 + "." + (qi + 1)
      var title = q.querySelector(".callout-title")
      var content = q.querySelector(".callout-content")
      var t = title ? title.textContent.trim() : ""
      var badge = document.createElement("span")
      badge.className = "nx-qnum"
      badge.textContent = num
      if (title) title.insertBefore(badge, title.firstChild)
      var a = document.createElement("div")
      a.className = "nx-ans"
      a.innerHTML = "<p class='nx-ans-q'><b>" + num + "</b> " + t + "</p>"
      if (content) { a.appendChild(content.cloneNode(true)); content.classList.add("nx-hide") }
      block.appendChild(a)
      q.classList.add("nx-question")
    })
    answers.appendChild(block)
  })
  if (answers.querySelector(".nx-ans")) art.appendChild(answers)
  // Page de garde
  var d = new Date()
  var built = d.toISOString().slice(0, 10)
  var cover = document.createElement("section")
  cover.className = "nx-cover"
  var iconLink = document.querySelector('link[rel="icon"]')
  var icon = iconLink ? iconLink.getAttribute("href") : ""
  cover.innerHTML =
    "<div class='nx-brand'>" + (icon ? "<img src='" + icon + "' alt=''>" : "") + "<span>NEXUS</span></div>" +
    "<div class='nx-band'><h1>" + course + "</h1><p>Booklet de révision</p></div>" +
    "<div class='nx-foot'><span>" + chapters.length + " chapitres · BSG26</span><b>généré le " + built + "</b></div>"
  // Sommaire
  var toc = document.createElement("section")
  toc.className = "nx-toc"
  var items = chapters.map(function (h) {
    var m = h.textContent.trim().match(/^(\d+)\.\s*(.*)$/)
    var subs = []
    var el = h.nextElementSibling
    var tr = el && el.classList && el.classList.contains("transclude") ? el : (el && el.querySelector ? el.querySelector(".transclude") : null)
    if (tr) tr.querySelectorAll("h2").forEach(function (s) {
      if (!s.classList.contains("nx-hide") && !/^pour réviser$/i.test(s.textContent.trim())) subs.push(s.textContent.trim())
    })
    return "<li><span class='nx-n'>" + (m ? m[1] : "") + "</span><div><b>" + (m ? m[2] : h.textContent) + "</b>" +
      (subs.length ? "<small>" + subs.join(" · ") + "</small>" : "") + "</div></li>"
  })
  if (answers.querySelector(".nx-ans")) items.push("<li class='nx-toc-extra'><span class='nx-n'>R</span><div><b>Réponses aux questions</b></div></li>")
  toc.innerHTML = "<h2>Sommaire</h2><ol>" + items.join("") + "</ol>"
  art.insertBefore(toc, art.firstChild)
  art.insertBefore(cover, art.firstChild)
})()
