(function () {
  const W = window.WEDDING;
  const app = document.getElementById("app");

  const TABS = [
    { id: "ablauf", title: "Ablauf" },
    { id: "tipps", title: "Unternehmungen" },
    { id: "dresscode", title: "Dresscode" },
    { id: "brief", title: "Brief" },
  ];

  const RED = "#E63232";
  const BLACK = "#17191C";

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // "2026-12-04" → "04.12.26"
  const short = (iso) => { const [y, m, d] = iso.split("-"); return `${d}.${m}.${y.slice(2)}`; };

  // "Max und Eva" → MAX <und> EVA, with the "und" set in red
  const coupleHTML = () => esc(W.couple).replace(/ und /i, ' <span class="und">und</span> ');

  /* ── Bauhaus shapes, one per kind of place ── */
  const SHAPES = {
    Essen: `<circle cx="10" cy="10" r="9"/>`,
    Café: `<path d="M1 19V1a18 18 0 0 1 18 18Z"/>`,
    Kunst: `<rect x="2" y="2" width="16" height="16"/>`,
    Shop: `<path d="M10 0 20 10 10 20 0 10Z"/>`,
    Berg: `<path d="M0 19 7 7l3 4 4-8 6 16Z"/>`,
    Baden: `<path d="M0 16a10 10 0 0 1 20 0Z"/>`,
  };
  const shape = (kind, color, size) =>
    `<svg class="shape" width="${size}" height="${size}" viewBox="0 0 20 20" fill="${color}" aria-hidden="true">${SHAPES[kind] || SHAPES.Essen}</svg>`;

  /* ── Emblems: an abstract sign for each place ── */
  const EMBLEMS = {
    // Fernsehturm: black needle, red sphere
    berlin: `
      <rect x="57" y="8" width="6" height="112" fill="${BLACK}"/>
      <circle cx="60" cy="46" r="20" fill="${RED}"/>`,
    // Alpine ridge, sun and lake
    tegernsee: `
      <circle cx="30" cy="30" r="16" fill="${RED}"/>
      <path d="M2 98 30 60l12 14 26-48 16 24 8-10 26 58Z" fill="${BLACK}"/>
      <path d="M4 108h112v4H4zM28 118h64v2H28z" fill="${BLACK}"/>`,
  };
  const emblem = (ev, cls) =>
    `<svg class="${cls}" viewBox="0 0 120 120" aria-hidden="true">${EMBLEMS[ev.id] || `<circle cx="60" cy="60" r="40" fill="${RED}"/>`}</svg>`;

  // Which filter each kind of place belongs to
  const GROUPS = [
    { id: "alle", title: "Alle" },
    { id: "essen", title: "Essen & Trinken", kinds: ["Essen", "Café"] },
    { id: "aktiv", title: "Aktivitäten" },
  ];
  const groupOf = (t) => (GROUPS[1].kinds.includes(t.kind) ? "essen" : "aktiv");

  /* ── Boxy clothing icons (48×48, square corners only) ──
     fg = icon colour, bg = tile colour, ac = accent */
  const CLOTHES = {
    anzug: (fg, bg, ac) => `
      <path d="M10 12 20 8l4 12 4-12 10 4 2 30H8Z" fill="${fg}"/>
      <path d="M20 8h8l-4 12Z" fill="${bg}"/>
      <path d="M23 10h2l1 10-2 3-2-3Z" fill="${ac}"/>
      <path d="M30 24h5v2h-5Z" fill="${ac}"/>`,
    hemd: (fg, bg) => `
      <path d="M16 8h16l8 6-4 8-4-2v22H16V20l-4 2-4-8Z" fill="${fg}"/>
      <path d="M20 8h8l-4 6Z" fill="${bg}"/>
      <path d="M23 18h2v2h-2Zm0 6h2v2h-2Zm0 6h2v2h-2Z" fill="${bg}"/>`,
    kleid: (fg, bg) => `
      <path d="M18 6h3v6h6V6h3v10l10 26H8l10-26Z" fill="${fg}"/>
      <path d="M18 16h12v3H18Z" fill="${bg}"/>`,
    schuh: (fg, bg) => `
      <path d="M8 20h10v8l10 4h8l4 4v4H8Z" fill="${fg}"/>
      <path d="M8 40h32v3H8Z" fill="${bg}"/>
      <path d="M12 24h2v2h-2Z" fill="${bg}"/>`,
    hut: (fg, bg, ac) => `
      <path d="M14 16h20v14H14Z" fill="${fg}"/>
      <path d="M14 25h20v3H14Z" fill="${ac}"/>
      <path d="M4 30h40v4H4Z" fill="${fg}"/>`,
  };
  // pick a readable icon colour for each tile
  const isLight = (hex) => {
    const n = parseInt(hex.slice(1), 16);
    return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255) > 150;
  };
  // the garment wears the swatch colour; the tile behind it contrasts
  const tileFor = (hex) => (isLight(hex) ? BLACK : "#FAF8F3");
  const accentOn = (hex) => (["#E63232", "#BB090B"].includes(hex.toUpperCase()) ? BLACK : RED);

  const mapLink = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

  /* ── Home ── */
  function renderHome() {
    document.title = W.couple;
    app.innerHTML = `
      <section class="view home">
        <h1>${coupleHTML()}</h1>
        <nav class="dates" aria-label="Termin wählen">
          ${W.events.map((ev) => `
            <a class="date" href="#/${ev.id}">
              ${emblem(ev, "emblem")}
              <span class="num">${short(ev.date)}</span>
              <span class="caps">${esc(ev.city)}</span>
            </a>`).join("")}
        </nav>
      </section>`;
  }

  /* ── Event page ── */
  function renderEvent(ev, tabId) {
    const active = TABS.some((t) => t.id === tabId) ? tabId : "ablauf";
    document.title = `${short(ev.date)} · ${W.couple}`;

    app.innerHTML = `
      <section class="view">
        <div class="top caps">
          <a href="#/">← Termine</a>
          <a href="#/">${coupleHTML()}</a>
        </div>

        <header class="event-head">
          ${emblem(ev, "emblem large")}
          <p class="num">${short(ev.date)}</p>
          <p class="caps">${esc(ev.weekday)} · ${esc(ev.place)} · ${esc(ev.city)}</p>
        </header>

        <nav class="tabs" role="tablist" aria-label="Bereiche">
          ${TABS.map((t) => `
            <button class="tab caps" role="tab" id="tab-${t.id}" aria-controls="panel-${t.id}"
              aria-selected="${t.id === active}" tabindex="${t.id === active ? 0 : -1}" data-tab="${t.id}">${t.title}</button>`).join("")}
        </nav>

        <section class="panel" role="tabpanel" id="panel-ablauf" aria-labelledby="tab-ablauf" ${active !== "ablauf" ? "hidden" : ""}>
          <ol class="programme">
            ${ev.itinerary.map((i) => i.day ? `
              <li class="day caps">${esc(i.day)}</li>` : `
              <li>
                <span class="time">${esc(i.time)}</span>
                <div>
                  <div class="what">${esc(i.title)}</div>
                  ${i.note ? `<div class="note">${esc(i.note)}</div>` : ""}
                  ${i.map ? `<a class="caps gmaps" href="${mapLink(i.map)}" target="_blank" rel="noopener" aria-label="${esc(i.title)} in Google Maps öffnen">Maps ↗</a>` : ""}
                </div>
              </li>`).join("")}
          </ol>
        </section>

        <section class="panel" role="tabpanel" id="panel-tipps" aria-labelledby="tab-tipps" ${active !== "tipps" ? "hidden" : ""}>
          <div class="filters" role="group" aria-label="Filter">
            ${GROUPS.map((g, i) => `<button class="filter caps" aria-pressed="${i === 0}" data-group="${g.id}">${g.title}</button>`).join("")}
          </div>
          <div class="todo">
            <div class="map" id="map" aria-label="Karte"></div>
            <ul class="places">
              ${ev.todo.map((t, i) => `
                <li class="place" data-i="${i}" data-group="${groupOf(t)}">
                  <button class="pick" aria-pressed="false">
                    ${shape(t.kind, "currentColor", 12)}
                    <span class="body">
                      <span class="title">${esc(t.title)}</span>
                      ${t.note ? `<span class="note">${esc(t.note)}</span>` : ""}
                    </span>
                  </button>
                  <a class="caps gmaps" href="${mapLink(t.map || `${t.title}, ${ev.city}`)}" target="_blank" rel="noopener"
                    aria-label="${esc(t.title)} in Google Maps öffnen">Maps ↗</a>
                </li>`).join("")}
            </ul>
          </div>
        </section>

        <section class="panel" role="tabpanel" id="panel-dresscode" aria-labelledby="tab-dresscode" ${active !== "dresscode" ? "hidden" : ""}>
          <div class="swatches">
            ${ev.dresscode.colors.map((c) => `
              <figure class="swatch">
                <svg viewBox="0 0 48 48" style="background:${tileFor(c.hex)}" aria-hidden="true">
                  ${(CLOTHES[c.icon] || CLOTHES.hemd)(c.hex, tileFor(c.hex), accentOn(c.hex))}
                </svg>
                <figcaption>
                  <span class="caps">${esc(c.name)}</span>
                  <span class="hex">${esc(c.hex)}</span>
                </figcaption>
              </figure>`).join("")}
          </div>
          <div class="dress-text">
            ${ev.dresscode.text.map((p) => `<p>${esc(p)}</p>`).join("")}
            ${ev.dresscode.note ? `<p class="dress-note">${esc(ev.dresscode.note)}</p>` : ""}
          </div>

          <div class="check">
            <h3 class="caps">Outfit-Check</h3>
            <p>Mach ein Foto von deinem Outfit – wir prüfen, ob du den Ton triffst.</p>
            <label class="shot caps">
              <input type="file" accept="image/*" hidden>
              <span>Foto machen</span>
            </label>
            <p class="fine">Das Foto bleibt auf deinem Gerät. Nichts wird hochgeladen.</p>
            <div class="result" hidden aria-live="polite"></div>
          </div>
        </section>

        <section class="panel" role="tabpanel" id="panel-brief" aria-labelledby="tab-brief" ${active !== "brief" ? "hidden" : ""}>
          <article class="letter">
            <p class="greeting">${esc(ev.letter.greeting)}</p>
            ${ev.letter.body.map((p) => `<p>${esc(p)}</p>`).join("")}
            <p class="signoff">${esc(ev.letter.signoff)}</p>
            <p class="signature">${esc(ev.letter.signature)}</p>
            <svg class="mark" viewBox="0 0 60 20" aria-hidden="true">
              <circle cx="10" cy="10" r="10" fill="${RED}"/>
              <path d="M24 20a10 10 0 0 1 20 0Z" fill="${BLACK}"/>
              <rect x="48" y="8" width="12" height="12" fill="${BLACK}"/>
            </svg>
          </article>
        </section>
      </section>`;

    /* Tabs */
    const tabs = [...app.querySelectorAll(".tab")];
    const select = (tab, focus) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", on);
        t.tabIndex = on ? 0 : -1;
        app.querySelector(`#panel-${t.dataset.tab}`).hidden = !on;
      });
      if (focus) tab.focus();
      history.replaceState(null, "", `#/${ev.id}/${tab.dataset.tab}`);
      if (tab.dataset.tab === "tipps") initMap(ev);
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(tab));
      tab.addEventListener("keydown", (e) => {
        let j = null;
        if (e.key === "ArrowRight") j = (i + 1) % tabs.length;
        if (e.key === "ArrowLeft") j = (i - 1 + tabs.length) % tabs.length;
        if (j !== null) { e.preventDefault(); select(tabs[j], true); }
      });
    });

    if (active === "tipps") initMap(ev);
    initCheck(ev);
  }

  /* ── Outfit-Check: how much of the photo is white / cream / beige? ── */
  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, d = max - min;
    if (!d) return [0, 0, l];
    const s = d / (1 - Math.abs(2 * l - 1));
    let h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    return [(h * 60 + 360) % 360, s, l];
  }
  const TONES = {
    // white & light neutrals, or warm beige/sand tones
    hell: (h, s, l) => (s <= 0.15 && l >= 0.7) || (h >= 20 && h <= 60 && s <= 0.5 && l >= 0.55 && l <= 0.96),
    // black and near-black
    schwarz: (h, s, l) => l <= 0.2 || (l <= 0.3 && s <= 0.25),
  };
  let inTone = () => false;

  function analyze(img) {
    const w = 120, h = Math.max(1, Math.round((w * img.naturalHeight) / img.naturalWidth));
    const cv = document.createElement("canvas");
    cv.width = w; cv.height = h;
    const ctx = cv.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, w, h);
    // look at the middle of the picture, where the outfit usually is
    const x0 = Math.round(w * 0.2), y0 = Math.round(h * 0.1);
    const { data } = ctx.getImageData(x0, y0, Math.round(w * 0.6), Math.round(h * 0.85));
    let hit = 0, total = 0;
    const buckets = new Map();
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      total++;
      if (inTone(r, g, b)) hit++;
      const k = (r >> 5) * 64 + (g >> 5) * 8 + (b >> 5);
      const e = buckets.get(k) || { n: 0, r: 0, g: 0, b: 0 };
      e.n++; e.r += r; e.g += g; e.b += b;
      buckets.set(k, e);
    }
    const colors = [...buckets.values()]
      .sort((a, b) => b.n - a.n)
      .slice(0, 5)
      .map((e) => {
        const r = Math.round(e.r / e.n), g = Math.round(e.g / e.n), b = Math.round(e.b / e.n);
        return { css: `rgb(${r},${g},${b})`, ok: inTone(r, g, b) };
      });
    return { score: total ? hit / total : 0, colors };
  }

  function initCheck(ev) {
    const input = app.querySelector(".check input");
    const out = app.querySelector(".check .result");
    if (!input) return;
    const test = TONES[ev.dresscode.tone] || TONES.hell;
    inTone = (r, g, b) => test(...rgbToHsl(r, g, b));
    let lastUrl = null;
    input.addEventListener("change", () => {
      const file = input.files && input.files[0];
      if (!file) return;
      if (lastUrl) URL.revokeObjectURL(lastUrl);
      lastUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const { score, colors } = analyze(img);
        const pct = Math.round(score * 100);
        const pass = score >= 0.35;
        const pens = W.outfitCheck.penalties;
        const penalty = pens[Math.floor(Math.random() * pens.length)];
        out.hidden = false;
        out.innerHTML = `
          <img src="${lastUrl}" alt="Dein Outfit">
          <div class="chips">${colors.map((c) => `<span class="${c.ok ? "ok" : ""}" style="background:${c.css}"></span>`).join("")}</div>
          <div class="verdict ${pass ? "pass" : "fail"}">
            <span class="caps">${pass ? "Ton getroffen" : "Strafe"}</span>
            <strong>${pct} %</strong>
            <p>${pass ? "Sehr schön. Du darfst rein." : esc(penalty)}</p>
          </div>`;
        input.value = "";
        input.nextElementSibling.textContent = "Nochmal";
        out.scrollIntoView({ behavior: "smooth", block: "nearest" });
      };
      img.src = lastUrl;
    });
  }

  /* ── Map with every spot as a Bauhaus shape ── */
  let map = null;
  function initMap(ev) {
    const el = document.getElementById("map");
    if (!el || el.dataset.ready || !window.L) return;
    el.dataset.ready = "1";

    if (map) map.remove();
    map = L.map(el, { scrollWheelZoom: false });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    const icon = (t, on) =>
      L.divIcon({
        className: "pin" + (on ? " on" : ""),
        html: shape(t.kind, on ? BLACK : RED, on ? 28 : 20),
        iconSize: on ? [28, 28] : [20, 20],
      });

    const rows = [...app.querySelectorAll(".place")];
    let group = "alle";
    const visible = (i) => group === "alle" || groupOf(ev.todo[i]) === group;
    const bounds = () => L.latLngBounds(ev.todo.filter((_, i) => visible(i)).map((t) => [t.lat, t.lng]));
    let current = -1;

    const markers = ev.todo.map((t, i) =>
      L.marker([t.lat, t.lng], { icon: icon(t, false), title: t.title, riseOnHover: true })
        .addTo(map)
        .bindTooltip(esc(t.title), { direction: "top", offset: [0, -12], className: "tip" })
        .on("click", () => setActive(i, false))
    );

    function setActive(i, fly) {
      if (i === current) i = -1; // clicking the active spot again shows all
      if (current >= 0) markers[current].setIcon(icon(ev.todo[current], false)).setZIndexOffset(0);
      current = i;
      rows.forEach((r, j) => r.querySelector(".pick").setAttribute("aria-pressed", j === i));
      if (i < 0) return map.flyToBounds(bounds(), { padding: [40, 40], duration: 0.6, maxZoom: 15 });
      const t = ev.todo[i];
      markers[i].setIcon(icon(t, true)).setZIndexOffset(1000);
      if (fly) map.flyTo([t.lat, t.lng], Math.max(map.getZoom(), 15), { duration: 0.6 });
      else rows[i].scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    rows.forEach((r, i) => r.querySelector(".pick").addEventListener("click", () => setActive(i, true)));
    map.fitBounds(bounds(), { padding: [40, 40] });

    // Filters: Alle / Essen & Trinken / Aktivitäten
    const filters = [...app.querySelectorAll(".filter")];
    filters.forEach((f) =>
      f.addEventListener("click", () => {
        group = f.dataset.group;
        filters.forEach((b) => b.setAttribute("aria-pressed", b === f));
        ev.todo.forEach((_, i) => {
          rows[i].hidden = !visible(i);
          if (visible(i)) markers[i].addTo(map);
          else markers[i].remove();
        });
        current = -1;
        rows.forEach((r) => r.querySelector(".pick").setAttribute("aria-pressed", false));
        markers.forEach((m, i) => m.setIcon(icon(ev.todo[i], false)).setZIndexOffset(0));
        map.flyToBounds(bounds(), { padding: [40, 40], duration: 0.6, maxZoom: 15 });
      })
    );
  }

  /* ── Router (hash-based, works on GitHub Pages without config) ── */
  function route() {
    const [, eventId, tabId] = location.hash.replace(/^#/, "").split("/");
    const ev = W.events.find((e) => e.id === eventId);
    if (ev) renderEvent(ev, tabId);
    else renderHome();
    window.scrollTo({ top: 0 });
  }

  window.addEventListener("hashchange", route);
  route();
})();
