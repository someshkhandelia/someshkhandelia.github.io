/* ==========================================================
   app.js — renders the whole page from content.js.
   You should not need to edit this file to change your site.
   ========================================================== */
(function () {
  "use strict";

  /* ---------- safe storage (never throws) ---------- */
  var mem = {};
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return mem[k] || null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { mem[k] = v; } }
  };

  /* ---------- state ---------- */
  var saved = store.get("lang");
  var browserDe = (navigator.language || "en").toLowerCase().indexOf("de") === 0;
  var lang = (saved === "en" || saved === "de") ? saved : (browserDe ? "de" : "en");
  var theme = store.get("theme") ||
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

  var t = function (o) { return !o ? "" : (typeof o === "string" ? o : (o[lang] || o.en || "")); };
  var esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- icons ---------- */
  var I = {
    sun:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.2A8.2 8.2 0 1 1 9.8 4a6.6 6.6 0 0 0 10.2 10.2z"/></svg>',
    pin:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10.5c0 5.2-8 12-8 12s-8-6.8-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10.3" r="2.8"/></svg>',
    dl:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11m0 0 4-4m-4 4-4-4M4 17.5v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.8" y="4.8" width="18.4" height="14.4" rx="2.2"/><path d="m3.4 6.4 8.6 6 8.6-6"/></svg>',
    out:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16 16 8M9.5 8H16v6.5"/></svg>',
    up:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5m0 0-6 6m6-6 6 6"/></svg>',
    img:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="2.4"/><circle cx="8.6" cy="10" r="1.7"/><path d="m3.6 17.4 4.9-4.6a2 2 0 0 1 2.7 0l5.4 5"/><path d="m14.6 14.9 1.8-1.7a2 2 0 0 1 2.7 0l1.5 1.4"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    gh:   '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 1.8a10.2 10.2 0 0 0-3.2 19.9c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-1-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.3 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.2 10.2 0 0 0 12 1.8z"/></svg>',
    li:   '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9.75h4v10.75H3zM9.5 9.75h3.83v1.47h.05a4.2 4.2 0 0 1 3.78-2.08c4.04 0 4.79 2.66 4.79 6.12v5.24h-4v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73h-4z"/></svg>',
    sch:  '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2 1 8.2l11 6.2 9-5.05v6.9h2V8.2zM5 13.1v4.2c0 1.9 3.1 3.9 7 3.9s7-2 7-3.9v-4.2l-7 3.95z"/></svg>',
    yt:   '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.75-1.77C18.3 5 12 5 12 5s-6.3 0-7.85.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.75 1.77C5.7 19 12 19 12 19s6.3 0 7.85-.43a2.5 2.5 0 0 0 1.75-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.1V8.9l5.2 3.1z"/></svg>',
    cf:   '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="2" y="9.5" width="5.2" height="11" rx="1.2"/><rect x="9.4" y="3.5" width="5.2" height="17" rx="1.2"/><rect x="16.8" y="7" width="5.2" height="13.5" rx="1.2"/></svg>'
  };

  /* ---------- renderers ---------- */
  function head(kicker, title, blurb) {
    return '<div class="sec-head rv">' +
      (kicker ? '<div class="sec-kicker">' + esc(kicker) + '</div>' : '') +
      '<h2>' + esc(title) + '</h2>' +
      (blurb ? '<p>' + esc(blurb) + '</p>' : '') + '</div>';
  }

  function renderNav() {
    var C = CONTENT, L = C.meta.links;
    var items = ["journey", "projects", "publications", "contact"].filter(function (k) {
      var arr = C[k];
      return !Array.isArray(arr) || arr.length > 0;
    });
    var links = items.map(function (k) {
      return '<a href="#' + k + '">' + esc(t(C.nav[k])) + '</a>';
    }).join("");

    $("#nav").innerHTML =
      '<div class="wrap nav-in">' +
        '<a class="brand" href="#top">' +
          '<span class="brand-mark">' + esc(C.meta.initials) + '</span>' +
          '<span class="brand-name">' + esc(C.meta.name) + '</span>' +
        '</a>' +
        '<nav class="nav-links" id="navLinks">' + links + '</nav>' +
        '<div class="nav-tools">' +
          '<button class="tbtn lang-btn" id="langBtn" title="' + esc(t(C.ui.langSwitch)) + '" aria-label="' + esc(t(C.ui.langSwitch)) + '">' +
            '<span class="' + (lang === "en" ? "on" : "off") + '">EN</span>' +
            '<span class="sep">/</span>' +
            '<span class="' + (lang === "de" ? "on" : "off") + '">DE</span>' +
          '</button>' +
          '<button class="tbtn" id="themeBtn" title="' + esc(t(theme === "dark" ? C.ui.themeLight : C.ui.themeDark)) + '" aria-label="' + esc(t(theme === "dark" ? C.ui.themeLight : C.ui.themeDark)) + '">' +
            (theme === "dark" ? I.sun : I.moon) +
          '</button>' +
          '<button class="tbtn nav-burger" id="burger" aria-label="Menu" aria-expanded="false">' + I.menu + '</button>' +
        '</div>' +
      '</div>';
  }

  function renderHero() {
    var C = CONTENT, H = C.hero, L = C.meta.links, cv = t(L.cv);
    var facts = (H.facts || []).map(function (f) {
      return '<div><div class="fact-k">' + esc(t(f.label)) + '</div><div class="fact-v">' + esc(t(f.value)) + '</div></div>';
    }).join("");

    var soc = "";
    if (L.github)   soc += '<a href="' + esc(L.github) + '" target="_blank" rel="noopener" aria-label="GitHub">' + I.gh + '</a>';
    if (L.linkedin) soc += '<a href="' + esc(L.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + I.li + '</a>';
    if (L.scholar)  soc += '<a href="' + esc(L.scholar) + '" target="_blank" rel="noopener" aria-label="Google Scholar">' + I.sch + '</a>';
    if (L.youtube)  soc += '<a href="' + esc(L.youtube) + '" target="_blank" rel="noopener" aria-label="YouTube">' + I.yt + '</a>';
    if (L.codeforces) soc += '<a href="' + esc(L.codeforces) + '" target="_blank" rel="noopener" aria-label="Codeforces">' + I.cf + '</a>';
    if (C.meta.email) soc += '<a href="mailto:' + esc(C.meta.email) + '" aria-label="Email">' + I.mail + '</a>';

    $("#hero").innerHTML =
      '<div class="wrap hero-grid">' +
        '<div class="rv">' +
          '<div class="hero-eyebrow">' + esc(t(H.eyebrow)) + '</div>' +
          '<h1>' + esc(t(H.headline)) + '</h1>' +
          '<p class="hero-intro">' + esc(t(H.intro)) + '</p>' +
          '<div class="cta-row">' +
            (cv ? '<a class="btn btn-primary" href="' + esc(cv) + '" download>' + I.dl + esc(t(H.ctaCv)) + '</a>' : '') +
            '<a class="btn btn-ghost" href="#contact">' + I.mail + esc(t(H.ctaContact)) + '</a>' +
            (soc ? '<div class="socials">' + soc + '</div>' : '') +
          '</div>' +
          (facts ? '<div class="facts">' + facts + '</div>' : '') +
        '</div>' +
      '</div>';
  }

  function renderJourney() {
    var C = CONTENT;
    var stages = C.journey.map(function (s) {
      var hl = (t(s.highlights) || []).map(function (h) { return '<li>' + esc(h) + '</li>'; }).join("");
      var chips = (s.tags || []).map(function (x) { return '<span class="chip">' + esc(x) + '</span>'; }).join("");
      var badge = s.type === "education" ? { en: "Education", de: "Ausbildung" }
                : s.type === "work" ? { en: "Work", de: "Beruf" }
                : { en: "Milestone", de: "Meilenstein" };
      var loc = s.location && s.location.name
        ? (s.location.maps
            ? '<a class="map-link" href="' + esc(s.location.maps) + '" target="_blank" rel="noopener">' + I.pin + esc(t(s.location.name)) + '</a>'
            : '<span class="map-link">' + I.pin + esc(t(s.location.name)) + '</span>')
        : "";

      return '<article class="stage rv" data-type="' + esc(s.type) + '">' +
        '<div class="stage-card">' +
          '<div class="stage-side">' +
            '<span class="period">' + esc(t(s.period)) + '</span>' +
            '<span class="badge">' + esc(t(badge)) + '</span>' +
            loc +
          '</div>' +
          '<div class="stage-main">' +
            '<h3>' + esc(t(s.role)) + '</h3>' +
            '<div class="stage-org">' + esc(s.org) + '</div>' +
            (t(s.story) ? '<p class="stage-story">' + esc(t(s.story)) + '</p>' : '') +
            (hl ? '<ul class="hl">' + hl + '</ul>' : '') +
            (chips ? '<div class="chips">' + chips + '</div>' : '') +
          '</div>' +
        '</div>' +
      '</article>';
    }).join("");

    var skills = (C.skills || []).map(function (g) {
      return '<div class="skill-col rv"><h4>' + esc(t(g.group)) + '</h4><div class="chips">' +
        g.items.map(function (x) { return '<span class="chip chip-plain">' + esc(x) + '</span>'; }).join("") +
        '</div></div>';
    }).join("");

    $("#journey").innerHTML = '<div class="wrap">' +
      head("01", t(C.journeyIntro.title), t(C.journeyIntro.blurb)) +
      '<div class="rail">' + stages + '</div>' +
      (skills ? '<h3 class="rv" style="margin:52px 0 16px;font-size:1.1rem">' + esc(t(C.skillsIntro.title)) + '</h3><div class="skills">' + skills + '</div>' : '') +
    '</div>';
  }

  function renderProjects() {
    var C = CONTENT;
    var cards = C.projects.map(function (p) {
      var chips = (p.tags || []).map(function (x) { return '<span class="chip chip-plain">' + esc(x) + '</span>'; }).join("");
      return '<article class="card rv">' +
        '<div class="card-body">' +
          '<div class="card-top"><h3>' + esc(t(p.title)) + '</h3><span class="card-year">' + esc(p.year) + '</span></div>' +
          '<p>' + esc(t(p.summary)) + '</p>' +
          '<div class="card-foot">' + (chips ? '<div class="chips">' + chips + '</div>' : '') +
            (p.link ? '<a class="link-out" href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(t(C.ui.visit)) + I.out + '</a>' : '') +
          '</div>' +
        '</div>' +
      '</article>';
    }).join("");

    $("#projects").innerHTML = '<div class="wrap">' +
      head("02", t(C.projectsIntro.title), t(C.projectsIntro.blurb)) +
      '<div class="grid">' + cards + '</div></div>';
  }

  function renderPublications() {
    var C = CONTENT;
    var sec = $("#publications");
    if (!sec) return;
    if (!C.publications || !C.publications.length) {
      sec.style.display = "none"; sec.innerHTML = ""; return;
    }
    sec.style.display = "";
    var rows = C.publications.map(function (p) {
      return '<div class="pub rv">' +
        '<div class="pub-year">' + esc(p.year) + '</div>' +
        '<div><h3>' + (p.link
            ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(t(p.title)) + '</a>'
            : esc(t(p.title))) + '</h3>' +
          (p.authors ? '<div class="pub-authors">' + esc(p.authors) + '</div>' : '') +
          (p.venue ? '<div class="pub-venue">' + esc(p.venue) + '</div>' : '') +
        '</div></div>';
    }).join("");

    sec.innerHTML = '<div class="wrap">' +
      head("03", t(C.publicationsIntro.title), "") +
      '<div class="pubs">' + rows + '</div></div>';
  }

  function renderContact() {
    var C = CONTENT, K = C.contact;
    $("#contact").innerHTML = '<div class="wrap">' +
      head("04", t(K.title), t(K.blurb)) +
      '<div class="contact-grid">' +
        '<div class="rv">' +
          '<p style="color:var(--fg-dim);font-size:.95rem">' + esc(t(K.orEmail)) + '</p>' +
          '<a class="mail-big" href="mailto:' + esc(C.meta.email) + '">' + I.mail + esc(C.meta.email) + '</a>' +
        '</div>' +
        '<form class="form rv" id="cform" novalidate>' +
          '<div class="field"><label for="f-name">' + esc(t(K.fields.name)) + '</label><input id="f-name" name="name" required></div>' +
          '<div class="field"><label for="f-mail">' + esc(t(K.fields.email)) + '</label><input id="f-mail" name="email" type="email" required></div>' +
          '<div class="field"><label for="f-msg">' + esc(t(K.fields.message)) + '</label><textarea id="f-msg" name="message" required></textarea></div>' +
          '<button class="btn btn-primary" type="submit" style="justify-self:start">' + I.mail + esc(t(K.fields.send)) + '</button>' +
          '<div class="form-note" id="fnote"></div>' +
        '</form>' +
      '</div></div>';
    wireForm();
  }

  function renderFooter() {
    var C = CONTENT;
    $("#foot").innerHTML = '<div class="wrap foot-in">' +
      '<p>© ' + new Date().getFullYear() + ' ' + esc(C.meta.name) + ' · ' + esc(t(C.footer.note)) + '</p>' +
      '<a class="to-top" href="#top">' + I.up + esc(t(C.ui.top)) + '</a></div>';
  }

  /* ---------- contact form ---------- */
  function wireForm() {
    var f = $("#cform"); if (!f) return;
    var note = $("#fnote"), K = CONTENT.contact;
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!f.checkValidity()) { f.reportValidity(); return; }
      var d = { name: f.name.value, email: f.email.value, message: f.message.value };
      if (K.formspree) {
        fetch(K.formspree, {
          method: "POST", body: new FormData(f), headers: { Accept: "application/json" }
        }).then(function (r) {
          if (r.ok) { note.textContent = t(K.fields.sent); note.className = "form-note ok"; f.reset(); }
          else throw 0;
        }).catch(function () { note.textContent = t(K.fields.error); note.className = "form-note"; });
      } else {
        window.location.href = "mailto:" + CONTENT.meta.email +
          "?subject=" + encodeURIComponent("Portfolio — " + d.name) +
          "&body=" + encodeURIComponent(d.message + "\n\n— " + d.name + " (" + d.email + ")");
        note.textContent = t(K.fields.sent); note.className = "form-note ok";
      }
    });
  }

  /* ---------- behaviours ---------- */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", theme);
    store.set("theme", theme);
  }

  function reveal() {
    var els = $$(".rv");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    els.forEach(function (e) { io.observe(e); });
  }

  function scrollspy() {
    var secs = ["journey", "projects", "publications", "contact"]
      .map(function (id) { return document.getElementById(id); }).filter(Boolean);
    var links = $$("#navLinks a");
    var onScroll = function () {
      $("#nav").classList.toggle("stuck", window.scrollY > 8);
      var cur = "", y = window.scrollY + 140;
      secs.forEach(function (s) { if (s.offsetTop <= y) cur = s.id; });
      links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + cur); });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function wireChrome() {
    $("#themeBtn").addEventListener("click", function () {
      theme = theme === "dark" ? "light" : "dark";
      applyTheme(); renderNav(); wireChrome(); scrollspy();
    });
    $("#langBtn").addEventListener("click", function () {
      lang = lang === "en" ? "de" : "en";
      store.set("lang", lang);
      renderAll();
    });
    var b = $("#burger"), nl = $("#navLinks");
    b.addEventListener("click", function () {
      var open = nl.classList.toggle("open");
      b.setAttribute("aria-expanded", String(open));
    });
    $$("#navLinks a").forEach(function (a) {
      a.addEventListener("click", function () { nl.classList.remove("open"); });
    });
  }

  /* ---------- boot ---------- */
  function renderAll() {
    document.documentElement.lang = lang;
    document.title = t(CONTENT.meta.tabTitle);
    renderNav(); renderHero(); renderJourney(); renderProjects();
    renderPublications(); renderContact(); renderFooter();
    wireChrome(); reveal(); scrollspy();
  }

  applyTheme();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderAll);
  else renderAll();
})();
