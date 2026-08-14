# Template: Clover (Bootstrap Accordion / UI Component)

## Purpose

Clover is a free single-page UI-component template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Accordion 06"
free template (source: https://colorlib.com/wp/template/accordion-06/), built
under a DIFFERENT name (**Clover** — a single-word green-plant brand word
fitting the monorepo naming mandate and the green accent color — never reuse
the ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a minimal, component-focused page: a centered dark heading
"Accordion #06" above ONE white accordion card with **three** Q&A panels —
"How to manage account?" (open by default), "How to become Pro", and "How to
create an account?" — each body a single lorem paragraph. The signature
visual is the **state-colored 60×60 square icon on the RIGHT of every
header**: **green `#37c46f` with a white PLUS when collapsed, blue `#3da1e3`
with a white MINUS when open** (ionicons `add`/`remove` glyphs swapped via the
`.collapsed` class — NOT chevrons like Accordion 05/Kelp). The open panel's
body is near-white `rgba(0,0,0,0.02)` (NOT colored — unlike Kelp's solid teal
body). Clover recreates that structure 1:1 with matching layout, colors,
typography, and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Accordion 06" is FORBIDDEN as the
> app name. **Clover** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` (verified
> 2026-08-14). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 06". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 644). The `accordion-06` slug appears
  exactly once (no dup rows to mark). Free single-page accordion / UI
  component template.
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-06/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-06/`
  (HTTP 200, 10.8KB HTML; same `/bac/` subpath pattern as Accordion 01–05).
  Stylesheets: `css/style.css` (221.9KB = bootstrap + custom tokens, shared
  across the whole `bac` accordion series — the relevant custom rules live at
  lines ~8220–8290) and the IonIcons 4.5.6 CDN (`ionicons.min.css` — the
  header plus/minus glyphs are ionicons via custom `.fa:before` rules).
  NO Google Fonts link in the HTML — `"Poppins", Arial, sans-serif` is
  declared on `body` in style.css (load via Google Fonts `<link>` in
  `index.html`). NO flaticon.css, NO images anywhere — pure component page.
- **Visual design (screenshot `accordion-06.jpg`, 1200×972, browser-verified
  2026-08-14, cross-checked against the live render):** near-white page
  (`#fafafa`); centered black heading "Accordion #06"; ONE white card (SQUARE
  corners — `border-radius: 0`, soft shadow `0px 10px 24px -11px
rgba(0,0,0,0.27)`); three white header rows, each with the question title on
  the LEFT and a **square 60×60 icon container on the RIGHT** (white 20px
  glyph): **closed = green `#37c46f` square + white PLUS; open = blue
  `#3da1e3` square + white MINUS**. Open panel body = very light gray
  `rgba(0,0,0,0.02)` with the lorem paragraph. Note: the TEMPLATES.md
  screenshot happens to show panel 2 ("How to become Pro") expanded, while
  the LIVE DOM default is panel 1 ("How to manage account?") expanded
  (`aria-expanded="true"`, `collapse show`) — the live DOM is authoritative
  for the default state; visually both states are identical in styling.

### Section order (1:1 from live DOM)

1. **Page heading** — `section.ftco-section` (padding 7em 0) → `container` →
   `row` → `col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
   "Accordion #06" (28px, `#000`, centered; `mb-5` = 3rem bottom margin,
   `pb-md-4` extra padding-bottom on md+).
2. **Accordion card** — `row.justify-content-center` → `col-md-7.col-lg-6`
   (centered column: 58.3% width at md, 50% at lg, full width below md) →
   `div#accordion.myaccordion.w-100` (bg `#fff`, `border-radius: 0`,
   `overflow: hidden`, `box-shadow: 0px 10px 24px -11px rgba(0,0,0,0.27)`,
   `margin: 0 auto`). Three `.card` panels stacked (no borders, transparent
   card bg).
3. **Panel 1 — "How to manage account?"** (OPEN by default) — header button
   `class="d-flex pl-4 align-items-center justify-content-between btn
btn-link"` (`aria-expanded="true"`, NOT `collapsed`): left
   `div.heading.d-flex.align-items-center` → `h3.mb-0` question title (16px);
   right `div.icon.d-flex.align-items-center.justify-content-center`
   (60×60, blue `#3da1e3`, white 20px glyph `ion-ios-remove` = MINUS). Body
   `div.card-body.p-4` = ONE paragraph: "Far far away, behind the word
   mountains, far from the countries Vokalia and Consonantia, there live the
   blind texts. Separated they live in Bookmarksgrove right at the coast of
   the Semantics, a large language ocean."
4. **Panel 2 — "How to become Pro"** (COLLAPSED) — header `aria-expanded=
"false"` + class `collapsed`; icon square green `#37c46f`, glyph
   `ion-ios-add` = PLUS. Body `div.card-body.p-4` = the SAME lorem paragraph.
5. **Panel 3 — "How to create an account?"** (COLLAPSED) — identical header
   structure to panel 2 (green + PLUS); body = the SAME lorem paragraph.
6. **Footer** — NONE in the original. Add the mandatory muted Component Dock
   attribution footer (repo convention):
   `https://www.componentdock.com/`.

- **JS behaviors (original):** Bootstrap collapse with `data-parent="#accordion"`
  → only ONE panel open at a time; `data-toggle="collapse"` toggles
  `aria-expanded` + the `.collapsed` class; the glyph swaps via
  `[data-toggle="collapse"] .fa:before { content: "\f1fc" }` (open → MINUS,
  = ion-ios-remove) vs `[data-toggle="collapse"].collapsed .fa:before
{ content: "\f102" }` (closed → PLUS, = ion-ios-add) — verified against the
  ionicons 4.5.6 CSS. Recreate with React state (`openIndex`, default `0`),
  icon glyph derived from the open state. 0.3s transition on the open state
  (with a `prefers-reduced-motion` guard in the original).

## Design tokens (verified from live stylesheet `css/style.css`)

- **Accent colors (STATE-DEPENDENT — the signature of this variant):**
  - `#37c46f` (green) — icon square background when the panel is COLLAPSED.
  - `#3da1e3` (blue) — icon square background when the panel is OPEN
    (`button[aria-expanded="true"] .icon { background: #3da1e3 !important; }`).
  - White glyph (20px) in both states (`[aria-expanded="true"] .fa` and
    `.btn .icon i` are both white).
- **Page:** `body` `background: #fafafa`, text `color: gray`; font
  **Poppins**, `font-size: 15px`, `line-height: 1.8`, weight normal;
  headings `color: #000` (weight 400, Poppins, line-height 1.5).
- **Card:** `.myaccordion` bg `#fff`, `border-radius: 0` (SQUARE), shadow
  `0px 10px 24px -11px rgba(0,0,0,0.27)` (NOTE: tighter/darker than
  Accordion 05/Kelp's `0 10px 29px -16px rgba(0,0,0,0.12)`), `overflow:
hidden`; card borders none; header separators `border-bottom: 1px solid
rgba(0,0,0,0.05)`.
- **Headers:** `.btn` full width, `color: #000`, `font-size: 18px`,
  `border-radius: 0 !important`, `border: none`, `letter-spacing: 0`,
  padding `0` — real spacing from utilities: **`pl-4` ONLY** (1.5rem left;
  NO `pr-4` — the icon square sits flush against the card's right edge via
  `justify-content-between`). `button[aria-expanded="true"]` → `color: #000
!important` (black title in BOTH states — the state signal is the icon
  square, NOT the title color); `button[aria-expanded="false"]` →
  `background-color: #fff` (all headers white). `.heading` wrapper
  `position: relative; z-index: 0; font-weight: 300`; title `h3` 16px,
  left-aligned, margin-bottom 0.
- **Icon container:** `.icon` 60×60, **no border-radius (square)**, glyph
  span 20px white. Closed = `#37c46f` green, open = `#3da1e3` blue (see
  accent colors). Glyphs — closed = `\f102` = ion-ios-**add** (plus),
  open = `\f1fc` = ion-ios-**remove** (minus) (verified against ionicons
  4.5.6 CSS: `.ion-ios-add:before{content:"\f102"}`,
  `.ion-ios-remove:before{content:"\f1fc"}`).
- **Open panel body:** `.card-body` bg `rgba(0,0,0,0.02)` (very light gray —
  NOT colored, unlike Accordion 05/Kelp's solid teal), `margin-bottom: 1px`
  (hairline white gap below the body), `p-4` padding (1.5rem); paragraph text
  inherits the body gray (`color: gray`). The white-on-teal `.card-body ul`
  rules in the shared stylesheet are LEFTOVERS from the list-style variant
  (Accordion 05) and do NOT apply here — bodies are plain `<p>` paragraphs.
- **Spacing:** `ftco-section` 7em vertical padding; heading `mb-5`
  (`pb-md-4`); accordion column `col-md-7 col-lg-6` centered
  (`justify-content-center`); container 1140px; header row height driven by
  the 60px icon square.

## Requirements

### Requirement: Centered page heading

The system SHALL render a centered black "Accordion #06" heading at the top
of the page above the accordion card.

#### Scenario: Heading display

- **GIVEN** the Clover page is rendered
- **WHEN** the page top is displayed
- **THEN** the heading "Accordion #06" SHALL be centered, black, 28px, with
  a 3rem bottom margin (section padding 7em top/bottom on the wrapper)

### Requirement: Single accordion card with three Q&A panels

The system SHALL render one white card (square corners, soft shadow,
centered ~50% width on desktop) containing exactly three accordion panels,
each with a question title on the left and a 60×60 square icon container on
the right.

#### Scenario: Card layout

- **GIVEN** the Clover page is rendered
- **WHEN** the accordion card is displayed
- **THEN** the card SHALL be white with square corners
  (`border-radius: 0`), a shadow `0px 10px 24px -11px rgba(0,0,0,0.27)`, and
  centered at ~50% width on desktop (full width below md)
- **AND** it SHALL contain three panels titled "How to manage account?",
  "How to become Pro" and "How to create an account?", each with the title
  on the left (`pl-4`) and a square 60×60 icon container flush on the right
  edge (white 20px glyph)

#### Scenario: Collapsed icon is a green plus

- **GIVEN** the Clover page is rendered
- **WHEN** a collapsed panel's header is displayed
- **THEN** its icon square SHALL be green `#37c46f` with a white PLUS glyph

### Requirement: First panel open by default

The system SHALL render the "How to manage account?" panel expanded on first
load, with its icon square blue and showing a minus; the other two panels
SHALL be collapsed with green plus icons.

#### Scenario: Default state

- **GIVEN** the Clover page is rendered
- **WHEN** the page first loads
- **THEN** the "How to manage account?" panel SHALL be expanded (body
  visible) and the other two panels SHALL be collapsed
- **AND** the expanded header SHALL show a blue `#3da1e3` square with a
  white MINUS glyph while the collapsed headers SHALL show green `#37c46f`
  squares with white PLUS glyphs

### Requirement: Paragraph bodies on light gray

The system SHALL render each panel body as a single lorem paragraph on a
very light gray background (`rgba(0,0,0,0.02)`), padded 1.5rem.

#### Scenario: Body content

- **GIVEN** any Clover panel is expanded
- **WHEN** its body is displayed
- **THEN** the body SHALL show one paragraph of lorem-style text ("Far far
  away, behind the word mountains...") in gray on a `rgba(0,0,0,0.02)`
  background with 1.5rem padding and a 1px bottom gap

### Requirement: Panel toggling with single-open behavior and icon state flip

The system SHALL toggle panels on header click, keeping at most one panel
open at a time, flipping each header's icon between green+plus (collapsed)
and blue+minus (open), and SHALL expose proper ARIA state.

#### Scenario: Open another panel

- **GIVEN** the "How to manage account?" panel is open
- **WHEN** the "How to become Pro" header is clicked
- **THEN** the first panel SHALL collapse and the "How to become Pro" panel
  SHALL expand (its paragraph body appears)
- **AND** the clicked header's icon SHALL flip from green-plus to
  blue-minus and the previously open header's icon SHALL flip back to
  green-plus

#### Scenario: Accessibility state

- **GIVEN** the Clover page is rendered
- **WHEN** the headers are inspected
- **THEN** each header SHALL be a `<button>` with `aria-expanded` and
  `aria-controls`, and each panel body SHALL be a region labelled by its
  header
- **AND** clicking the open panel's header SHALL collapse it (closing all
  panels)

### Requirement: Component Dock footer

The system SHALL render a footer linking to Component Dock (repo mandate;
the original has no footer).

#### Scenario: Footer attribution

- **GIVEN** the Clover page is rendered
- **WHEN** the page bottom is displayed
- **THEN** a muted footer SHALL link `https://www.componentdock.com/`
  ("Component Dock" attribution)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-clover`
- [ ] `scripts/verify-app.sh clover` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Accordion
      #06" → single white square-corner card (How to manage account? open /
      How to become Pro collapsed / How to create an account? collapsed) →
      Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#37c46f` green
      (collapsed icon), `#3da1e3` blue (open icon), `#fafafa` page,
      `#ffffff` card, square corners (radius 0), shadow `0px 10px 24px -11px
    rgba(0,0,0,0.27)`, `rgba(0,0,0,0.05)` header separators,
      `rgba(0,0,0,0.02)` body background
- [ ] Fonts: Poppins via Google Fonts `<link>` in `index.html` (body 15px /
      1.8), title "Clover — Accordion #06 Reimagined"
- [ ] NO images anywhere (pure component page) — no picsum needed
- [ ] Icons from lucide-react: `Plus` (collapsed), `Minus` (open) — both
      exist in lucide-react (probe every export with `typeof` before use);
      NO chevrons, NO icon substitution needed (unlike Kelp)
- [ ] Icon square: 60×60, square (no radius), flush RIGHT of header (pl-4
      only, `justify-content-between`), white 20px glyph, green `#37c46f`
      when collapsed → blue `#3da1e3` when open
- [ ] Single-open accordion via `openIndex` state (default 0), icon glyph
      flips with state; header buttons have `aria-expanded`/`aria-controls`,
      panel bodies `role="region"` + `aria-labelledby`
- [ ] Forms/interactions: none (all rows are presentational)
- [ ] Mobile nav: none (single page, no navbar)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the single "Accordion 06" row, line
      644, Bootstrap Accordions)
- [ ] PR description must list: source template (ColorLib Accordion 06), the
      REAL preview URL (`preview.colorlib.com/theme/bac/accordion-06/` — the
      default URL 404s), design tokens, the green-plus/blue-minus icon state
      behavior, screenshot-vs-live-DOM default-panel note (screenshot shows
      panel 2 open; live DOM default is panel 1)
