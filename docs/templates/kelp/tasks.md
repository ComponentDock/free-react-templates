# Kelp (ColorLib Accordion 05) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Kelp** (NEW name —
> the ColorLib source keeps its name "Accordion 05"). Implementation ships on
> `feat/template-kelp` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 05" — free single-page accordion / UI
  component template (source: https://colorlib.com/wp/template/accordion-05/).
  TEMPLATES.md row: line 643 (**Bootstrap Accordions (20)**). The
  `accordion-05` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-05/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-05/`
  (HTTP 200, 12.2KB HTML; same `/bac/` subpath pattern as Accordion 01–04).
  Stylesheets: `css/style.css` (221.9KB = bootstrap + custom tokens), IonIcons
  4.5.6 CDN (header chevrons + row arrows are ionicons glyphs via custom
  `.fa:before` rules). NO Google Fonts link in the HTML — `"Poppins", Arial,
sans-serif` is declared on `body` (15px / 1.8, `background: #fafafa`,
  `color: gray`) — load Poppins via Google Fonts `<link>` in `index.html`.
  NO images anywhere — pure component page, no picsum seeds needed.
- **Visual design (screenshot `accordion-05.jpg`, 1200×972 AVIF → PNG,
  browser-verified 2026-08-14 + cross-checked on the LIVE render):** centered
  black heading "Accordion #05"; ONE white card with **square corners**
  (`border-radius: 0` — squarer than Stash's 5px) and a soft shadow; three
  WHITE header rows, each with a **square 60×60 teal `#75d6d1` icon
  container** + white 20px glyph on the left, black 18px title, chevron on
  the right (open = teal UP, collapsed = grey DOWN); the OPEN panel's body is
  a **solid teal block** with white rows. All headers are white in both
  states — the state signal is the chevron + the teal body, NOT the header
  background (unlike Accordion 04/Stash's gold gradient).
- **Structure observed (1:1):** `section.ftco-section` (padding 7em 0) →
  `container` → `col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
  "Accordion #05" (28px `#000`, mb-5 = 3rem) → `row.justify-content-center` →
  `col-md-7.col-lg-6` (centered: 58.3% @md, 50% @lg, full width below md) →
  `div#accordion.myaccordion.w-100` (white, `border-radius: 0`,
  `overflow: hidden`, shadow `0 10px 29px -16px rgba(0,0,0,0.12)`, margin
  auto) → **3** `.card` panels (border none, transparent bg). Header button =
  full-width `d-flex pr-4 align-items-center justify-content-between btn
btn-link` (18px, `#000`, radius 0, `border-bottom: 1px solid
rgba(0,0,0,0.05)`): left `div.heading.d-flex.align-items-center` →
  `div.icon` (60×60 square, bg `#75d6d1`, white 20px glyph span) + `h3.mb-0.ml-3`
  16px title; right `<i class="fa">` chevron (16px, `rgba(0,0,0,0.3)` closed;
  `#75d6d1` open).
  - Panel 1 "Manage" — icon `ion-ios-settings` (gear), **OPEN by default**
    (`aria-expanded="true"`, body `collapse show`), body `card-body.p-0` =
    `<ul>` of 3 `<li>` rows (`a.d-flex.justify-content-between
.align-items-center`, padding 15px 30px): `01 Account` / `02 Settings` /
    `03 Profile` — `<p><span>01</span> Account</p>` (span = number, weight
    300, `rgba(255,255,255,0.5)`, mr 10px; p = name weight 600
    `rgba(255,255,255,0.8)`) + right `i.ion-ios-arrow-forward`.
  - Panel 2 "Location" — icon `ion-ios-pin` (map pin), **collapsed** (`class
collapsed`, `aria-expanded="false"`), body `card-body.p-4` = ONE lorem
    paragraph ("Far far away, behind the word mountains, far from the
    countries Vokalia and Consonantia, there live the blind texts. Separated
    they live in Bookmarksgrove right at the coast of the Semantics, a large
    language ocean.") — NOT a list.
  - Panel 3 "Hobbies" — icon `ion-ios-basketball`, **collapsed**, body
    `card-body.p-0` = `<ul>` of 3 rows WITHOUT numbers: Playing Basketball /
    Playing Baseball / Running (+ right arrows).
  - `.card-body` global rule: bg `#75d6d1`, `margin-bottom: 1px` (hairline
    white gap below the open teal block), `color: rgba(255,255,255,0.8)`;
    `ul` padding 0 / margin 0; `li` list-style none,
    `border-bottom: 1px solid rgba(255,255,255,0.2555)`; `a i` white `.8`.
  - **Chevron glyph mapping (verified against ionicons 4.5.6 CSS):** open =
    `\f3d8` = `ion-ios-arrow-up`; collapsed = `\f3d0` = `ion-ios-arrow-down`;
    rows = `ion-ios-arrow-forward` (right).
  - **NO footer in the original** — add the mandatory Component Dock
    attribution footer (repo convention).
- **Design tokens:** page `#fafafa`; card `#fff` + radius 0 + shadow
  `0 10px 29px -16px rgba(0,0,0,0.12)`; **brand teal `#75d6d1`** (icon
  squares, open body bg, open chevron, link color); header title 18px
  `#000`; panel titles 16px; glyphs 20px white; chevron closed
  `rgba(0,0,0,0.3)`; header separators `rgba(0,0,0,0.05)`; row names
  `rgba(255,255,255,0.8)` weight 600; row numbers `rgba(255,255,255,0.5)`
  weight 300; row separators `rgba(255,255,255,0.2555)`; font **Poppins**
  15px / 1.8 (body), headings `#000` weight 400.
- **Design approach:** one centered card, three panels with square teal icon
  boxes + state chevrons. Fidelity is about the SQUARE icon containers, the
  WHITE headers in both states, the teal chevron flip (up/down), the open
  panel's solid teal body with white numbered rows, and the single-open
  behavior (Bootstrap `data-parent`). Default `openIndex = 0`. No images.
- **Copy:** keep the three titles' meaning (Manage / Location / Hobbies) and
  their row counts (3 each); paraphrase row names as needed (the original's
  "01 Account / 02 Settings / 03 Profile" and the three hobby rows are fine
  as-is; Location paragraph = one lorem block).
- **Icons (lucide-react, NO copied fonts):** `Settings` (Manage — source
  `ion-ios-settings`), `MapPin` (Location — `ion-ios-pin`), **`Volleyball`**
  (Hobbies — source `ion-ios-basketball`; **`Basketball` is UNDEFINED in
  lucide-react**, probed 2026-08-14 — Volleyball is the round-ball
  stand-in), `ChevronUp` / `ChevronDown` (header state), `ArrowRight` (row
  arrows). Probe every export with `typeof` before use.

## Implementation tasks

1. **Scaffold** — `apps/kelp` from the simplest existing app; rename
   package to `@free-react-templates/kelp`; register in root `package.json`
   workspaces + lockfile (implementer handles lockfile, prep never touches
   it). `public/CNAME` = `kelp.free.componentdock.com`, `"homepage"` =
   `https://kelp.free.componentdock.com`.
2. **Theme tokens** — add the teal family (`#75d6d1` brand), `#fafafa`
   page, `#ffffff` card, `#000000` text + the rgba tints
   (`rgba(0,0,0,0.3)` closed chevron, `rgba(0,0,0,0.05)` header
   separators, `rgba(255,255,255,0.8)` row names, `rgba(255,255,255,0.5)`
   row numbers, `rgba(255,255,255,0.2555)` row separators) to `@theme`;
   Poppins Google Fonts `<link>` in `index.html` (body 15px / 1.8); card
   shadow via Tailwind arbitrary value or token; square corners (no
   rounding anywhere).
3. **Components** (per section, TDD — tests first):
   - `Accordion` (or `KelpAccordion`) — core component: 3 panels from data
     (title, icon, bodyType: 'rows' | 'paragraph', rows?: {number?,
     name}[]), holds `openIndex` state (default 0, only one open, clicking
     the open header closes it), renders header buttons (full-width, 18px,
     `aria-expanded`/`aria-controls`) + bodies (`role="region"`,
     `aria-labelledby`). Header: square 60×60 `#75d6d1` icon box (white
     20px glyph) + 16px title left, `ChevronUp` (open, teal) /
     `ChevronDown` (closed, `rgba(0,0,0,0.3)`) right; white bg both
     states, `border-bottom: 1px solid rgba(0,0,0,0.05)`.
   - `RowList` — `<ul>` of rows: number span (300, white `.5`, 10px mr) +
     name (600, white `.8`) left, `ArrowRight` white right; rows
     `justify-between`, 15px 30px padding, hairline separators, on the
     `#75d6d1` panel bg. Render as static rows (the source's `href="#"`
     links go nowhere).
   - `ParagraphPanel` — `p-4` teal body with a single white `.8` lorem
     paragraph (Location).
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: centered heading "Accordion #05"
   → card → "Manage" (open, gear, numbered rows) → "Location" (pin,
   paragraph) → "Hobbies" (volleyball, unnumbered rows) → footer. Card
   column: centered ~50% on desktop (`md:max-w-xl lg:max-w-2xl mx-auto`
   equivalent of `col-md-7 col-lg-6`), full width below md.
5. **Verify** — `scripts/verify-app.sh kelp` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Accordion 05" row (line 643, Bootstrap
   Accordions) `[~]`→`[x]` + surge URL + `npm run readme:status`; PR
   description must list source template, the REAL preview URL
   (`preview.colorlib.com/theme/bac/accordion-05/` — note the `/bac/`
   subpath), design tokens, and the `Volleyball`-for-`Basketball` icon
   substitution.
