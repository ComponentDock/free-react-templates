# Marjoram (ColorLib Accordion 18) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Marjoram** (NEW name —
> the ColorLib source keeps its name "Accordion 18"). Implementation ships on
> `feat/template-marjoram` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 18" — free FAQ accordion demo
  (source: https://colorlib.com/wp/template/accordion-18/). TEMPLATES.md row:
  line 656 (**Bootstrap Accordions (20)**). The `accordion-18` slug appears
  exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):**
  `https://preview.colorlib.com/theme/bac/accordion-18/` (HTTP 200, 19.4KB
  HTML, `<title>Accordion #8</title>`). **The naive
  `https://preview.colorlib.com/theme/accordion-18/` returns 404** — the
  ColorLib template page's preview target is the `bac` bundle path. The `bac`
  bundle hosts 10 demos at URLs `accordion-11`…`accordion-20` with in-page
  headings "Bootstrap Accordion #1"…"#10" (URL number minus 10), so the
  "Accordion 18" catalog item renders the demo titled **"Bootstrap Accordion
  #8"** — replicate THAT design. Custom stylesheet:
  `css/style.css` (2.2KB per-demo; sibling `bac/css/style.css` 404s). Vendor
  sheets (bootstrap.min, owl.carousel.min, icomoon) NOT copied. Screenshot
  (`accordion-18.jpg`, 1200×972) browser-verified 2026-08-14 and matches:
  "Bootstrap Accordion #8" centered heading, three stacked items, WHITE page,
  green chevron chip on the open item (right edge), grey chips on closed
  items, first item open with lorem body. Minimal monochrome-plus-green FAQ
  aesthetic.
- **Structure observed (1:1) — 2 blocks:**
  1. `div.content` (padding 7rem 0) > container > `h2.my-5.text-center`
     "Bootstrap Accordion #8" (20px, centered, margin-y 3rem).
  2. `div.custom-accordion#accordion_1` — 3 `.accordion-item`:
     - "How to download and register?" — OPEN by default
       (`collapse show`, `aria-expanded="true"`).
     - "How to create your paypal account?" — closed.
     - "How to link your paypal and bank account?" — closed.
     - Item = `h2.mb-0` > `button.btn.btn-link` header + `div.collapse` >
       `div.accordion-body` (Bootstrap default lorem "Anim pariatur cliche
       reprehenderit…").
  3. No navbar / footer / images / forms in the original — single accordion
     block only (repo-standard Navbar + Footer chrome added in recreation).
- **Design tokens (from live `css/style.css`):**
  - Page bg **#fff**; font **Roboto** (300/400/500/600) via Google Fonts
    `<link>`; `p` weight 300, color **#b3b3b3**.
  - Brand green **#72c02c**: open chevron chip background + white chevron +
    active header label text. NO active box-shadow (Quorly has
    `0 1px 10px 0 rgba(0,0,0,0.1)` — Marjoram does NOT).
  - Item: bg **#f9f9f9**, margin-bottom 10px, **radius 0** (square), overflow
    hidden.
  - Header `.btn-link`: bg **#fff**, block, width 100%, padding 15px,
    **padding-left 0px** (no gutter — icon chip is at the RIGHT), left-aligned,
    color **#999**, radius 0.
  - Icon chip (`:before`): absolutely positioned **right: 0**, vertically
    centered; bg **#efefef** (collapsed) / **#72c02c** (expanded); padding
    1px 5px; font-size 18px; **border-radius 4px**; glyph icomoon `\e313`
    chevron-down / `\e316` chevron-up → lucide `ChevronDown`/`ChevronUp`;
    collapsed chevron inherits `#999`, expanded is `#fff`.
  - Answer `.accordion-body`: padding 20px, color **#888**; section heading
    h2 20px centered.
  - Section padding 7rem 0 (`.content`).
- **Behavior to recreate:** single-open accordion (data-parent semantics) via
  React state (open item id, first open); header buttons with
  `aria-expanded`/`aria-controls`; ChevronDown ↔ ChevronUp flip with chip
  color swap; no backend.
- **Icons → lucide-react:** `ChevronDown`, `ChevronUp` (accordion toggles —
  probe exports first, lucide renames icons silently); footer socials per
  repo pattern (inline SVG brand paths for GitHub/X/LinkedIn — lucide dropped
  brand icons).
- **Copy fidelity:** keep the three question titles verbatim; heading
  "Bootstrap Accordion #8" verbatim OR paraphrased to a short centered FAQ
  label (e.g. "Frequently Asked Questions") — copy-kind rule allows either;
  answer bodies = placeholder-style paragraph (Bootstrap lorem or equivalent).
- **Recreation decisions:** page = repo-standard Navbar (site name
  "Marjoram", Home link, dark-mode toggle) + centered accordion section +
  minimal Footer with Component Dock credit
  (`https://www.componentdock.com/`); Roboto via Google Fonts `<link>`; no
  images; no assets copied.
- **Sibling comparison (do NOT cross-contaminate tokens):** vs **Quorly**
  (accordion-17): page `#fff` vs `#efefef`, RIGHT-edge chevron chip vs LEFT
  plus/minus, `padding-left: 0` vs 40px, NO active shadow vs
  `0 1px 10px 0 rgba(0,0,0,0.1)`, heading "#8" vs "#7". vs **Tarragon**
  (accordion-16): radius 0 vs 40px pill, page `#fff` vs `#efefef`.

## Implementation tasks (for the implementer stream)

1. [ ] Copy the simplest existing single-page app (e.g. `apps/query`) as
       `apps/marjoram`; rename package to `@free-react-templates/marjoram` in
       package.json + vite config; `npm install` at root to register the
       workspace; set `public/CNAME` = `marjoram.free.componentdock.com` and
       `homepage` accordingly.
2. [ ] `src/index.css` — `@theme` tokens: brand `#72c02c`, page bg `#fff`,
       item bg `#f9f9f9`, chip bg `#efefef`, header text `#999`, answer text
       `#888`, answer para `#b3b3b3`; Roboto Google Fonts `<link>` in
       index.html (300/400/500/600). NO shadow tokens (differs from Quorly).
3. [ ] Components: `Navbar` (site name, Home link, dark-mode toggle) →
       `FaqSection` (centered heading + `FaqItem` list) → `Footer` (tagline,
       social links, Component Dock credit). `FaqItem`: white header bar
       (button, no left padding, ChevronDown/ChevronUp chip at right edge —
       4px radius, 1px 5px padding, 18px), `#f9f9f9` square answer panel,
       radius 0.
4. [ ] Accordion state: single open item id (first item open initially);
       clicking open header collapses it; clicking closed header swaps it.
       `aria-expanded` + `aria-controls` + `aria-labelledby` wiring.
5. [ ] Tests (TDD, 100% coverage): Navbar (links, dark toggle), FaqSection
       (heading, 3 items, first open, single-open swap, close-on-click,
       icon/chip flip), Footer (credit link), App composition (landmarks, doc
       title "Marjoram — FAQ"). jsdom note: copy the MemoryStorage polyfill
       from `apps/cura/src/test/setup.ts` if localStorage is needed.
6. [ ] Run `npm run verify:app -- marjoram` (typecheck → lint → vitest 100% →
       build) and fix until green.
7. [ ] Open PR `feat/template-marjoram` → merge immediately
       (`gh pr merge --squash --delete-branch`); after merge, mark TEMPLATES.md
       line 656 `[x]` + surge URL, `npm run readme:status`, push.
