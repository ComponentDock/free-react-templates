# Affiance — research + design notes (replication)

Recreation of ColorLib **"Twohearts"** → app `apps/affiance`, template name
**affiance**. Section order: **header (transparent over hero) → hero → countdown
→ about bride & groom → love story timeline → greetings → family & friends →
when & where → invitation/RSVP → gallery → footer**. The signature element is
the **brand-pink `#d291bc` countdown bar pulled up `-50px` over the hero's bottom
edge**, its first cell the darker `#cb7fb1` "Save the Day" script cell; the
display face is **Rochester** (script) over **Source Sans Pro** body.

## Reference availability

| Reference | Status |
| --- | --- |
| Source page `https://colorlib.com/wp/template/twohearts/` | HTTP 200 |
| Live preview `https://preview.colorlib.com/theme/twohearts/` | **HTTP 200**, 34,593 B, `<title>Twohearts - Free Bootstrap 4 Template by Colorlib</title>` |
| Preview HTML stability (re-checked 2026-10-12) | 🔎 the **raw page digest is request-unstable** — the preview host injects a `<style media="print">` `@font-face` block and reorders its rules per request (3 fetches → 3 digests at an identical **34,593 B**). ⚠️ The raw **byte count is request-signature-dependent too** (re-measured 2026-10-12): the host also appends an extra **361 B** Cloudflare Insights beacon `<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js/…">` before `</body>` for some client signatures, so a fetch whose headers differ from a plain `curl -sS <url>` sees **34,954 B** — cite **neither** a raw hash **nor** the raw size. Canonical handle (strip the injected block **and** the beacon script): **25,054 B**, sha256 `9b1cea7a0a66111f431f741bfeb593e2c0f050ec0f61b4c38e25d5577ca9a0a5`, byte-identical across `curl -sS`, `curl -A <chrome UA>` and `urllib` with a Chrome UA (3 profiles × 3 fetches); a client that additionally sends `Accept`/`Accept-Language` gets a further **416 B** Cloudflare first-party Google-tag script (`google_tags_first_party` / `/s9cc/`) that this handle does not strip — state the measurement basis (`curl -sS`) next to any such number |
| `css/style.css` | **HTTP 200**, 67,294 B, sha256 `892b1f4a01d30757357ea8ccc9ff093ff3a454eedc98ed2ee2d7c5f4218798e3` |
| `js/main.js` (+ jQuery, bootstrap, owl.carousel, stellar, waypoints, magnific-popup, animateNumber, easing) | HTTP 200 |
| TEMPLATES.md screenshot `twohearts-free-template.jpg` | HTTP 200, **AVIF** (87,689 B, 1200 × 946) → converted to PNG and inspected |
| Google Fonts `Rochester`, `Source+Sans+Pro` | HTTP 200 (probe with a real browser UA) |

## Key CSS tokens (from `css/style.css`)

- **Brand:** `.ftco-footer { background: #d291bc }`; `.btn.btn-primary
  { background: #d291bc; border: 1px solid #d291bc; color: #fff }`;
  `.heading-section .subheading { color: #d291bc; border: 1px dashed #d291bc;
  letter-spacing: 2px; text-transform: uppercase; font-weight: 900; padding: 0
  10px }`; subheadings and script headings are `#d291bc`. Gallery hover wash is
  `#d291bc` (`.gallery:after`).
- **Countdown:** `#timer { background: #d291bc; margin-top: -50px;
  border-radius: 4px; box-shadow: 0px 10px 32px -19px rgba(0,0,0,.15) }`;
  `.time { width: 20%; font-size: 40px; font-weight: 600; color: #fff;
  border-left: 1px solid rgba(255,255,255,.05); font-family: "Rochester",
  cursive }`; `.time-2 { background: #cb7fb1 }` (the "Save the Day" cell).
- **Hero:** `.herowrap .overlay { background: rgba(0,0,0,.4) }`;
  `.herowrap .text h1 { font-family: "Rochester", cursive; font-size: 8vw;
  color: #fff }`; `.herowrap .text .subheading { font-size: 14px; font-weight:
  900; text-transform: uppercase; color: #d291bc; letter-spacing: 7px;
  background: #fff; padding: 8px 15px; border-radius: 2px }`.
- **Bride/groom photos:** `.bride-groom .img { width: 400px; height: 400px;
  margin: 0 auto; border: 15px solid #f0d9e8 }` (100 % width below `md`).
- **Timeline badge:** `.timeline-badge { width: 120px; height: 120px;
  background-size/position cover/center }`; `.timeline-badge:after { inset:10px;
  border:1px dashed rgba(255,255,255,.5); border-radius:50% }`; `.timeline > li
  > .timeline-panel { width: 43% }`.
- **Sections:** `.ftco-section { padding: 7em 0 }`; `.bg-light { background:
  #f8f9fa }`; `.ftco-love { background-attachment: fixed }` (parallax).
- **Gallery:** `.gallery { width:100%; height:300px }`; `.gallery:after {
  background:#d291bc; opacity:0 }`; `.gallery .icon { width:70px; height:70px;
  background:#fff; border-radius:50% }`.
- **Footer:** `.ftco-footer { background:#d291bc; padding:7em 0; color:
  rgba(255,255,255,.9) }`; `.ftco-footer-widget h2 { color:#fff; font-size:20px;
  font-weight:700; text-transform:uppercase; margin-bottom:40px }`; links `#fff`.
- **Buttons/inputs:** `.btn { border-radius: .25rem }`; `.form-control {
  border: 1px solid #ced4da; border-radius: .25rem }`.

## Section-by-section fidelity notes

1. **Header** — transparent, floating over the hero. Bold uppercase white
   "TWOHEARTS" left; eight uppercase white links right. Anchors map to the
   section ids (`home`, `groom-bride`, `lovestory`, `greeting`, `people`,
   `when-where`, `rsvp`, `gallery`). Collapse to a toggled mobile menu.
2. **Hero** (`#home.jherowrap`, `js-fullheight`) — full-bleed couple photo,
   `rgba(0,0,0,.4)` overlay, round brand-pink two-rings badge, couple names in
   Rochester 8vw white, white pill tagline (`letter-spacing:7px`, brand text).
3. **Countdown** (`.ftco-intro` `#timer`) — `#d291bc` bar, `-50px` overlap,
   radius 4 px, shadow, five 20 % cells, `#cb7fb1` first cell, four Rochester
   40 px white numbers, hairline dividers.
4. **About Bride & Groom** — dashed `#d291bc` subheading pill, script title, two
   alternating rows (groom then bride) with 400 × 400 photos wearing a 15 px
   `#f0d9e8` frame, script names + muted paragraphs.
5. **Love Story** — parallax photo band, subheading + script title, four
   alternating timeline entries, 120 px circular photo badges with a dashed
   ring, dates and script headings.
6. **Greetings** — `#f8f9fa` band, guest-message carousel (avatar / paragraph /
   name + role), inactive items dimmed.
7. **Family & Friends** — subheading + script title, eight people cards with
   circular portraits and Groomsmen/Bridesmaid captions.
8. **When & Where** — `#f8f9fa` band, Ceremony + Reception columns with date,
   time, address, phone and a keyless-map **See Map** link.
9. **Invitation / RSVP** — fixed photo band + overlay, "Invitation" subheading +
   big script "Will You Attend?" title, form (Name, email, Guest select 1–5,
   Message, brand-pink "I am attending" submit), local-only confirmation.
10. **Gallery** — full-width no-gutter grid of ~300 px tiles, 4 columns desktop,
    hover/focus `#d291bc` wash + 70 px white plus circle, keyboard lightbox.
11. **Footer** — `#d291bc` band, wordmark + blurb + social row, three columns
    (Links · Services · Have a Questions?), white uppercase headings, copyright
    with a Component Dock link and the current year.

## Reuse & placeholders

- Reuse `packages/ui` (`Button`/`ButtonLink`, `cn()`) — no new dependencies.
- Photography via seeded picsum: `https://picsum.photos/seed/affiance-<n>/<w>/<h>`.
- The two-rings badge and the gallery plus glyph are inline SVG (lucide-react
  icons where they fit: `Menu`, `X`, `ChevronDown`, `Plus`, `MapPin`, `Phone`,
  `Mail`, `ArrowUp`).
- **No ColorLib asset is copied** — no `style.css`, no Bootstrap/jQuery/owl/
  stellar/magnific/animate bundles, no `images/bg_*.jpg` / `groom.jpg` /
  `bride.jpg` / `couple-*.jpg` / `person_*.jpg` / `gallery-*.jpg`.
