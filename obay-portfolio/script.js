(function () {
  "use strict";

  var EMAIL = "obayehabb@gmail.com";
  var IMG = "images/";

  /* ---------- WORK DATA ---------- */
  var SECTIONS = [
    { id: "work-masr360", n: "01", title: "Masr360", cols: 2,
      note: "A full rebrand: from a decorative serif wordmark to a warm brown and gold identity: a sun rising over the pyramids, with the Eye of Horus carried in the wordmark.",
      items: [
        { f: "masr360-rebrand.png", t: "Masr360 — Old & New", c: "Rebranding", r: "797/446", bg: "#fce1cf", w: 2 },
        { f: "masr360-logo.png", t: "Masr360 — Logo", c: "Rebranding", r: "797/447", bg: "#fce1cf" },
        { f: "masr360-wordmark.png", t: "Masr360 — Wordmark", c: "Rebranding", r: "798/445", bg: "#fce1cf" }
      ] },
    { id: "work-blutechnova", n: "02", title: "Blutechnova", cols: 4,
      note: "Brand and communication design for an Egyptian blue-innovation company: seasonal greetings, partner announcements and the BlueInvest Africa 2026 campaign.",
      items: [
        { f: "blutechnova-ramadan.jpg", t: "Ramadan Kareem", c: "Social media", r: "4/5", bg: "#1a1d4a" },
        { f: "blutechnova-travel-partner.jpg", t: "Travel Partner", c: "Social media", r: "4/5" },
        { f: "blutechnova-blueinvest.jpg", t: "Selected for BlueInvest Africa", c: "Social media", r: "4/5" },
        { f: "blutechnova-egyptair.jpg", t: "EgyptAir Official Carrier", c: "Social media", r: "4/5" }
      ] },
    { n: "03", title: "Social Media", cols: 3,
      note: "Posts and campaigns for events, communities and trips.",
      items: [
        { f: "tedx-mega-event.jpg", t: "TEDxECU — Our Mega Event", c: "Social media", r: "4/5" },
        { f: "tedx-yin-yang.jpg", t: "TEDxECU — Yin & Yang", c: "Social media", r: "4/5" },
        { f: "gdg-instructors.jpg", t: "GDG — Our Instructors", c: "Social media", r: "4/5" },
        { f: "wadi-degla-lantern.jpg", t: "Wadi Degla Trip — Lanterns", c: "Social media", r: "4/5" },
        { f: "wadi-degla-fire.jpg", t: "Wadi Degla Trip — Campfire", c: "Social media", r: "4/5" }
      ] },
    { n: "04", title: "Branding", note: "Identities built from a blank page.", cases: [
      { name: "Resta", text: "We plan, we run, you rest.", cols: 2, items: [
        { f: "resta-logo.jpg", t: "Resta", c: "Logo", r: "1063/650" }
      ] },
      { name: "Caffeine Canvas", text: "A coffee house where ideas get caffeinated: a faceless, beret-wearing mascot and a bold condensed wordmark, from the window to the cup.", cols: 3, items: [
        { f: "cc-window.jpg", t: "Caffeine Canvas — Window", c: "Branding", r: "4/5" },
        { f: "cc-espresso.jpg", t: "Caffeine Canvas — Espresso cup", c: "Branding", r: "4/5" },
        { f: "cc-set.jpg", t: "Caffeine Canvas — Applications", c: "Branding", r: "4/5" },
        { f: "cc-sign.jpg", t: "Caffeine Canvas — Sign", c: "Branding", r: "1156/1600" },
        { f: "cc-hand-cup.jpg", t: "Caffeine Canvas — Where ideas get caffeinated", c: "Branding", r: "3/2", w: 2 },
        { f: "cc-cups-pile.jpg", t: "Caffeine Canvas — Cups", c: "Branding", r: "2/1", w: 3 }
      ] }
    ] },
    { n: "05", title: "Rebranding", note: "Old and new, side by side.", cases: [
      { name: "Pets Hero", text: "A friendlier, sharper identity for a pet-care brand: paw-and-orbit mark, blue, lime and orange.", cols: 3, items: [
        { f: "pets-hero-old-new.png", t: "Pets Hero — Old & New", c: "Rebranding", r: "860/462", w: 2 },
        { f: "pets-hero-new.png", t: "Pets Hero — New logo", c: "Rebranding", r: "491/488" },
        { f: "pets-hero-box.jpg", t: "Pets Hero — Box", c: "Packaging", r: "1600/1065", w: 2 },
        { f: "pets-hero-poster.jpg", t: "Pets Hero — Poster", c: "Poster", r: "3/4" }
      ] },
      { name: "Lélena", text: "\u201CLélena\u2019s Gifts\u201D distilled into a script wordmark and a fine-jewelry identity.", cols: 3, items: [
        { f: "lelena-old-new.png", t: "Lélena — Old & New", c: "Rebranding", r: "741/336", w: 2 },
        { f: "lelena-monogram.jpg", t: "Lélena — Monogram", c: "Rebranding", r: "1/1" },
        { f: "lelena-wordmark.jpg", t: "Lélena — Wordmark", c: "Rebranding", r: "1/1" },
        { f: "lelena-her-heritage.jpg", t: "Her Heritage Unlocked", c: "Rebranding", r: "1/1", bg: "#d1cfc9" },
        { f: "lelena-map.jpg", t: "Lélena — Map", c: "Rebranding", r: "4/5" }
      ] },
      { name: "Dental Park Clinics", text: "A cleaner, calmer identity for a dental group.", cols: 2, items: [
        { f: "dental-park-old-new.png", t: "Dental Park — Old & New", c: "Rebranding", r: "1400/615", w: 2 }
      ] }
    ] }
  ];

  var ALL = [];
  var root = document.getElementById("work-root");

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }

  function plate(it) {
    var idx = ALL.length; ALL.push(it);
    var p = it.r.split("/"), num = (parseFloat(p[0]) / parseFloat(p[1])).toFixed(4);
    return '<figure class="plate reveal" style="--r:' + num + '" tabindex="0" role="button" data-i="' + idx + '" aria-label="' + esc(it.t) + '">' +
      '<div class="frame" style="aspect-ratio:' + it.r + ';' + (it.bg ? "--bg:" + it.bg : "") + '">' +
      '<img loading="lazy" src="' + IMG + it.f + '" alt="' + esc(it.t) + '"></div>' +
      '<figcaption><b>' + esc(it.t) + '</b><span>' + esc(it.c) + '</span></figcaption></figure>';
  }
  function grid(items, cols) {
    return '<div class="grid">' + items.map(plate).join("") + '</div>';
  }
  function sub(s) {
    return '<div class="sub reveal"' + (s.id ? ' id="' + s.id + '"' : "") + '><span class="n">' + s.n + '.</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.note || "") + '</p></div>';
  }

  var html = "";
  SECTIONS.forEach(function (s) {
    html += '<div class="block">' + sub(s);
    if (s.cases) {
      s.cases.forEach(function (c) {
        if (c.items.length === 1) {
          html += '<article class="case solo"><div class="solo-row"><div class="solo-media">' + plate(c.items[0]) + '</div><div class="case-head reveal"><h4>' + esc(c.name) + '</h4><p>' + esc(c.text) + '</p></div></div></article>';
        } else {
          html += '<article class="case"><div class="case-head reveal"><h4>' + esc(c.name) + '</h4><p>' + esc(c.text) + '</p></div>' + grid(c.items, c.cols) + '</article>';
        }
      });
    } else {
      html += grid(s.items, s.cols);
    }
    html += '</div>';
  });
  root.innerHTML = html;


  /* ---------- JUSTIFIED ROWS: every row has equal-height images that fill the width ---------- */
  function layoutGrids() {
    document.querySelectorAll("#work-root .grid").forEach(function (g) {
      var W = g.clientWidth; if (!W) return; g.classList.add("js");
      var gap = parseFloat(getComputedStyle(g).columnGap) || 14;
      var base = Math.max(130, Math.min(300, window.innerWidth * (window.innerWidth < 600 ? 0.52 : 0.19)));
      var ps = [].slice.call(g.children);
      var rs = ps.map(function (p) { return parseFloat(p.style.getPropertyValue("--r")); });

      function rowsFor(H) {
        var rows = [], row = [], sum = 0;
        rs.forEach(function (r, i) {
          row.push(i); sum += r;
          if (sum * H + gap * (row.length - 1) >= W) { rows.push({ idx: row, sum: sum, f: 1 }); row = []; sum = 0; }
        });
        if (row.length) rows.push({ idx: row, sum: sum, f: (sum * H + gap * (row.length - 1)) / W });
        return rows;
      }
      // try several target heights; pick the one that leaves the least empty space in the last row
      var best = null;
      for (var k = 0.8; k <= 1.4; k += 0.02) {
        var H = base * k, rows = rowsFor(H), last = rows[rows.length - 1], dev = 0;
        rows.forEach(function (row, ri) {
          var h = (W - gap * (row.idx.length - 1)) / row.sum;
          if (ri === rows.length - 1 && row.f < 0.6) h = H;
          dev += Math.abs(Math.log(h / base));
        });
        var score = (1 - last.f) * 4 + dev / rows.length * 1.5;
        if (!best || score < best.score) best = { score: score, rows: rows, H: H };
      }
      best.rows.forEach(function (row, ri) {
        var isLast = ri === best.rows.length - 1;
        var h = (W - gap * (row.idx.length - 1)) / row.sum;
        if (isLast && row.f < 0.6) h = best.H;
        row.idx.forEach(function (i) { ps[i].style.width = (rs[i] * h) + "px"; });
      });
    });
  }
  layoutGrids();
  var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(layoutGrids, 80); });
  window.addEventListener("load", layoutGrids);

  /* ---------- LIGHTBOX ---------- */
  var lb = document.getElementById("lb"), lbImg = document.getElementById("lbImg"),
      lbCount = document.getElementById("lbCount"), lbTitle = document.getElementById("lbTitle"),
      lbCat = document.getElementById("lbCat"), cur = 0, lastFocus = null;

  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function show(i) {
    cur = (i + ALL.length) % ALL.length;
    var it = ALL[cur];
    lbImg.innerHTML = '<img src="' + IMG + it.f + '" alt="' + esc(it.t) + '">';
    lbCount.textContent = pad(cur + 1) + " / " + pad(ALL.length);
    lbTitle.textContent = it.t; lbCat.textContent = it.c;
  }
  function openLB(i) {
    lastFocus = document.activeElement; show(i);
    lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
    document.getElementById("lbClose").focus();
  }
  function closeLB() {
    lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  root.addEventListener("click", function (e) {
    var p = e.target.closest(".plate"); if (p) openLB(+p.dataset.i);
  });
  root.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      var p = e.target.closest(".plate"); if (p) { e.preventDefault(); openLB(+p.dataset.i); }
    }
  });
  document.getElementById("lbClose").addEventListener("click", closeLB);
  document.getElementById("lbPrev").addEventListener("click", function () { show(cur - 1); });
  document.getElementById("lbNext").addEventListener("click", function () { show(cur + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLB(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLB();
    else if (e.key === "ArrowLeft") show(cur - 1);
    else if (e.key === "ArrowRight") show(cur + 1);
  });

  /* ---------- FALLBACKS ---------- */
  var portrait = document.getElementById("portrait"), pimg = document.getElementById("portraitImg");
  function noPortrait() { portrait.classList.remove("has-photo"); pimg.style.display = "none"; }
  function hasPortrait() { portrait.classList.add("has-photo"); }
  pimg.addEventListener("load", hasPortrait);
  if (pimg.complete && pimg.naturalWidth) hasPortrait();
  pimg.addEventListener("error", noPortrait);
  if (pimg.complete && !pimg.naturalWidth) noPortrait();

  document.querySelectorAll("img[data-fallback]").forEach(function (img) {
    function swap() {
      var s = document.createElement("span");
      s.className = "logo-text"; s.innerHTML = img.getAttribute("data-fallback");
      if (img.parentNode) img.parentNode.replaceChild(s, img);
    }
    img.addEventListener("error", swap);
    if (img.complete && !img.naturalWidth) swap();
  });


  /* ---------- MARQUEE STRIPS ---------- */
  document.querySelectorAll(".strip").forEach(function (el) {
    var unit = '<span class="t">' + esc(el.dataset.text) + '</span><svg viewBox="0 0 150 44" aria-hidden="true"><use href="#glyphs"/></svg>';
    var half = ""; for (var i = 0; i < 6; i++) half += unit;
    el.innerHTML = '<div class="track">' + half + half + '</div>';
  });

  /* ---------- NAV / PROGRESS / SPY ---------- */
  var nav = document.getElementById("nav"), bar = document.getElementById("progress");
  var ids = ["about", "clients", "work", "volunteering", "contact"];
  var links = {};
  document.querySelectorAll(".nav nav a[data-s]").forEach(function (a) { links[a.dataset.s] = a; });

  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    nav.classList.toggle("solid", y > 40);
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    var active = null, line = window.innerHeight * 0.35;
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) active = id;
    });
    Object.keys(links).forEach(function (k) { links[k].classList.toggle("on", k === active); });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* ---------- REVEAL ---------- */
  var rv = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    rv.forEach(function (el) { io.observe(el); });
  } else rv.forEach(function (el) { el.classList.add("in"); });

  /* ---------- COPY EMAIL ---------- */
  var cb = document.getElementById("copyMail");
  cb.addEventListener("click", function () {
    function done() { var t = cb.textContent; cb.textContent = "Copied ✓"; setTimeout(function () { cb.textContent = t; }, 2200); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(done, fallback);
    } else fallback();
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = EMAIL; document.body.appendChild(ta);
      ta.select(); try { document.execCommand("copy"); } catch (e) {} document.body.removeChild(ta); done();
    }
  });

  var mb = document.getElementById("menuBtn");
  function setMenu(o) { nav.classList.toggle("open", o); mb.setAttribute("aria-expanded", o); document.documentElement.classList.toggle("menu-open", o); }
  mb.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
  document.querySelectorAll(".nav nav a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });


  /* ---------- CONTACT BOX ---------- */
  var cm = document.getElementById("contactModal"), cf = document.getElementById("contactForm"),
      cmsg = document.getElementById("formMsg"), csend = document.getElementById("cmSend"),
      csent = document.getElementById("cmSent"), cLast = null;
  function openCM() {
    cLast = document.activeElement; cf.hidden = false; csent.hidden = true; cmsg.textContent = "";
    cm.classList.add("open"); cm.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
    setTimeout(function () { cf.elements.name.focus(); }, 120);
  }
  function closeCM() {
    cm.classList.remove("open"); cm.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
    if (cLast && cLast.focus) cLast.focus();
  }
  document.getElementById("openContact").addEventListener("click", openCM);
  document.getElementById("cmClose").addEventListener("click", closeCM);
  document.getElementById("cmDone").addEventListener("click", closeCM);
  cm.addEventListener("mousedown", function (e) { if (e.target === cm) closeCM(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && cm.classList.contains("open")) closeCM(); });

  cf.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = cf.elements, bad = false;
    ["name", "phone", "message"].forEach(function (k) {
      var ok = f[k].value.trim().length > (k === "message" ? 4 : k === "phone" ? 5 : 1);
      f[k].classList.toggle("bad", !ok); if (!ok) bad = true;
    });
    if (bad) { cmsg.textContent = "Please fill in your name, phone number and details."; return; }
    if (f._honey.value) return;
    cmsg.textContent = ""; csend.disabled = true; csend.textContent = "Sending…";
    var data = { name: f.name.value.trim(), phone: f.phone.value.trim(), message: f.message.value.trim(),
      _subject: "New message from your portfolio: " + f.name.value.trim(), _template: "table", _captcha: "false" };
    fetch("https://formsubmit.co/ajax/" + EMAIL, {
      method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(data)
    }).then(function (r) { return r.json().then(function (j) { if (!r.ok || j.success === "false" || j.success === false) throw new Error("fail"); }); })
      .then(function () { cf.hidden = true; csent.hidden = false; cf.reset(); })
      .catch(function () {
        var body = "Name: " + data.name + "\nPhone: " + data.phone + "\n\n" + data.message;
        cmsg.innerHTML = 'Could not send right now. <a href="mailto:' + EMAIL + '?subject=' + encodeURIComponent("Hello Obay") + '&body=' + encodeURIComponent(body) + '" style="text-decoration:underline">Send it from your email app instead</a>.';
      })
      .then(function () { csend.disabled = false; csend.textContent = "Send message"; });
  });
  ["name", "phone", "message"].forEach(function (k) { cf.elements[k].addEventListener("input", function () { this.classList.remove("bad"); }); });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
