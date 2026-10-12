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
| Google Fonts `Rochester`, `Source+Sans+Pro` | HTTP 200 (probe with a real browser UA) — the shipped link's axes are `Rochester` + `Source+Sans+Pro:wght@300;400;600;700;900` (the `900` faces the three `font-weight:900` eyebrow rules) |

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
- **Loader cover:** `#ftco-loader { position: fixed; width: 96px; height: 96px;
  left: 50%; top: 50%; transform: translate(-50%,-50%); background-color:
  rgba(255,255,255,.9); box-shadow: 0px 24px 64px rgba(0,0,0,.24) }` plus the
  fullscreen variant `#ftco-loader.fullscreen { padding: 0; left: 0; top: 0;
  width: 100%; height: 100%; transform: none; background-color: #fff;
  border-radius: 0; box-shadow: none }` — the source ships `class="show
  fullscreen"`, so the **`#fff` full-bleed cover wins**. Ring: `#ftco-loader
  .circular { animation: loader-rotate 2s linear infinite; left/top:
  calc(50% - 24px) }`; `#ftco-loader .path { stroke-dasharray: 1,200;
  animation: loader-dash 1.5s ease-in-out infinite; stroke-linecap: round }`.
  The SVG's inline strokes are `#eeeeee` (`path-bg`) and **`#F96D00`** (`path`)
  — the ring orange is the **only** place that hex appears in the theme.
- **Buttons/inputs:** `.btn { border-radius: .25rem }`; `.form-control {
  border: 1px solid #ced4da; border-radius: .25rem }`.

## Section-by-section fidelity notes

0. **Preloader overlay (pre-section)** — `#ftco-loader.show.fullscreen`, the
   page's first element: a full-screen `#fff` cover holding an inline 48 px SVG
   ring (two `r=22` `stroke-width:4` circles — `path-bg` `#eeeeee` under the
   animated `path` **`#F96D00`**). Keyframes: `loader-rotate` (`100% →
   rotate(360deg)`, `2s linear infinite`) and `loader-dash` (`stroke-dasharray
   1,200 → 89,200` with `stroke-dashoffset 0 → -35px → -136px`, `1.5s
   ease-in-out infinite`). `#ftco-loader.show{transition:opacity .4s ease-out,
   visibility 0s linear 0s; visibility:visible; opacity:1}`. `js/main.js` runs
   `loader()` immediately: a `setTimeout(…, 1)` that does
   `$('#ftco-loader').removeClass('show')` — so the cover fades out ~1 ms after
   hydration, not on `load`. Reproduce as a `Preloader` component (the repo
   already ships this pattern — e.g. `apps/clinica`, `apps/cassini`).
1. **Header** — transparent, floating over the hero. Bold uppercase white
   "TWOHEARTS" left; eight uppercase white links right. Anchors map to the
   section ids (`home`, `groom-bride`, `lovestory`, `greeting`, `people`,
   `when-where`, `rsvp`, `gallery`). Collapse to a toggled mobile menu.
2. **Hero** (`#home.jherowrap`, `js-fullheight`) — full-bleed couple photo,
   `rgba(0,0,0,.4)` overlay, and a **120 px `#d291bc` disc centred above the
   names** (`.herowrap .text .icon`, `margin:0 auto`) with an inset
   `1.4px dashed rgba(255,255,255,.3)` ring holding a **60 px white glyph: two
   interlocking rings + a diamond + a small heart** (`flaticon-diamond-ring` =
   `\uf100`), then the couple names in Rochester 8vw white and a white pill
   tagline (`letter-spacing:7px`, brand text).
3. **Countdown** (`.ftco-intro` `#timer`) — `#d291bc` bar, `-50px` overlap,
   radius 4 px, shadow, five 20 % cells, `#cb7fb1` first cell, four Rochester
   40 px white numbers, hairline dividers.
4. **About Bride & Groom** — dashed `#d291bc` subheading pill, script title, two
   alternating rows (groom then bride) with 400 × 400 photos wearing a 15 px
   `#f0d9e8` frame, script names + muted paragraphs. Each text block also paints
   the theme's **100 px `#d291bc` two-doves glyph** (`.bride-groom .text .icon
   span`, `flaticon-dove-1` = `\uf101`) as a `z-index:-1` decoration pinned to
   the block's bottom edge — `icon-left` on the right-hand block, `icon-right`
   on the left-hand one.
5. **Love Story** — parallax photo band, subheading + script title, four
   alternating timeline entries, 120 px circular photo badges with a dashed
   ring, dates and script headings. Every panel additionally paints a **120 px
   `rgba(255,255,255,.3)` two-doves glyph** (`.timeline-panel .icon span`,
   `top:20px`, `z-index:-1`, `left:20px` / `right:20px` by side; 80 px below
   `md`).
6. **Greetings** — `#f8f9fa` band, guest-message carousel: each white card (1 px
   `rgba(0,0,0,.02)` hairline, shadow `0 5px 21px -14px rgba(0,0,0,.14)`) has a
   **40 px `#d291bc` disc peeking above its top-left corner**
   (`.testimony-wrap .icon`, `top:-20px; left:20px; z-index:-1`) holding a
   **30 px white single-dove glyph** (`flaticon-dove` = `\uf105`), then an 80 px
   avatar photo in a 5 px `#f0d9e8` frame, a paragraph and a name (`#000`) +
   role (`#d291bc`); inactive items dimmed.
7. **Family & Friends** — subheading + script title, eight people cards with
   circular portraits and Groomsmen/Bridesmaid captions.
8. **When & Where** — `#f8f9fa` band, Ceremony + Reception columns, each topped
   by a **100 px white disc** (`.place .text .icon`, shadow
   `0 10px 32px -30px rgba(0,0,0,.75)`, `margin-bottom:10px`) holding a **50 px
   `#d291bc` glyph** — the **church** (`flaticon-church` = `\uf103`) on The
   Ceremony and the **wedding cake** (`flaticon-cake` = `\uf104`) on The
   Reception — then date, time, address, phone and a keyless-map **See Map**
   link.
9. **Invitation / RSVP** — fixed photo band + overlay, "Invitation" subheading +
   big script "Will You Attend?" title, form (Name, email, Guest select 1–5,
   Message, brand-pink "I am attending" submit), local-only confirmation.
10. **Gallery** — full-width no-gutter grid of ~300 px tiles, 4 columns desktop,
    hover/focus `#d291bc` wash at `opacity:.8` (`.gallery:after`) plus a **70 px
    white disc carrying a 50 px `#d291bc` two-doves glyph** (`.gallery .icon`,
    `opacity:0 → 1`) — the source paints `flaticon-dove-1` (`\uf101`), **not a
    plus glyph** — with a keyboard lightbox.
11. **Footer** — `#d291bc` band, wordmark + blurb + social row, three columns
    (Links · Services · Have a Questions?), white uppercase headings, copyright
    with a Component Dock link and the current year.

## Iconography census (verified on the live render, 2026-10-12k)

The theme loads **one icon font** (`css/flaticon.css` → `fonts/flaticon/font/Flaticon.*`,
`[class^="flaticon-"]:before { font-family: Flaticon }`) plus Font Awesome 4.7 from
the CDN. Every glyph below was read back from the rendered page
(`getComputedStyle(span, '::before').content` + the box/colour of its wrapper), and
`flaticon.css` maps `diamond-ring → \uf100`, `dove-1 → \uf101`, `bride → \uf102`,
`church → \uf103`, `cake → \uf104`, `dove → \uf105`.

| Source class | Codepoint | What it actually draws | Where (count) | Our recreation |
| --- | --- | --- | --- | --- |
| `flaticon-diamond-ring` | `\uf100` | two interlocking rings + a diamond + a small heart | hero badge (×1), 60 px white on the 120 px `#d291bc` disc | inline SVG `RingsBadge` (already in the prep) |
| `flaticon-dove-1` | `\uf101` | **pair of doves with hearts** — the theme's signature motif | bride/groom text blocks (×2, 100 px `#d291bc`), timeline panels (×4, 120 px `rgba(255,255,255,.3)`), all 8 gallery tiles (50 px `#d291bc` in the 70 px white disc) | inline SVG `DovesMark` (decorative, `aria-hidden`) |
| `flaticon-dove` | `\uf105` | single dove | greetings cards (×5 per slide set, 30 px white on the 40 px `#d291bc` disc) | inline SVG `DoveMark` or lucide `Bird` |
| `flaticon-church` | `\uf103` | chapel with a cross and a tree | When & Where · The Ceremony (50 px `#d291bc` in a 100 px white disc) | lucide `Church` |
| `flaticon-cake` | `\uf104` | three-tier wedding cake with a heart | When & Where · The Reception (same disc) | lucide `Cake` |
| `fa fa-chevron-down` | Font Awesome | chevron | RSVP Guest `<select>` (`17 px #d291bc`, `.select-wrap`) | lucide `ChevronDown` |
| `fa fa-map-marker` / `fa fa-phone` / `fa fa-paper-plane` | Font Awesome | pin / handset / paper plane | footer contact column (×1 each) | lucide `MapPin` / `Phone` / `Mail` |
| `fa fa-twitter` / `facebook` / `instagram`, `fa fa-check` | Font Awesome | social marks + tick | footer social row and link bullets | **inline SVG brand marks** with the platform name as the accessible name (lucide-react ships no brand icons — verified) + `Check` |
| `fa fa-heart` | Font Awesome | heart | the **ColorLib credit line only** — deliberately **not** reproduced (our copyright line links Component Dock) | — |

Placement/geometry (from the same session): hero badge 120 × 120 at `margin:0 auto`
**centred above the `h1`** (measured: badge centre 383 px vs `h1` centre 382 px — the
source is *not* top-left as an earlier draft of this file claimed); gallery disc
70 px, glyph 50 px; greetings disc 40 px at `top:-20px; left:20px`; place discs
100 px, glyph 50 px.

## Reuse & placeholders

- Reuse `packages/ui` (`Button`/`ButtonLink`, `cn()`) — no new dependencies.
- Photography via seeded picsum: `https://picsum.photos/seed/affiance-<n>/<w>/<h>`.
- The two-rings badge and the recurring two-doves motif are inline SVG
  (lucide-react icons where they fit: `Menu`, `X`, `ChevronDown`, `MapPin`,
  `Phone`, `Mail`, `ArrowUp`, plus `Church` and `Cake` for the When-&-Where
  discs — see the iconography census below).
- **No ColorLib asset is copied** — no `style.css`, no Bootstrap/jQuery/owl/
  stellar/magnific/animate bundles, no `images/bg_*.jpg` / `groom.jpg` /
  `bride.jpg` / `couple-*.jpg` / `person_*.jpg` / `gallery-*.jpg`.
