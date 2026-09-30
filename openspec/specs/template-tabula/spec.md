# Template: Tabula (Table)

## Purpose

Tabula is a collapsible-accordion data-table page in the
free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Table 08" template (source:
https://colorlib.com/wp/template/table-08/ — a single-page snippet:
light blue-gray page `#f8f9fd`, centered black h2 "Table #08" +
h3 subheading "Collapsible Table", one white 6-column product table
with a soft card shadow, 4 demo product rows, each row an accordion
trigger that expands a full-width gray detail panel — single-open
accordion behavior driven by a tiny vanilla-JS collapse engine; no
navbar, no framework), built under a DIFFERENT name (Tabula — Latin
for "table"; single lowercase word), per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `table-08`
- **Source:** https://colorlib.com/wp/template/table-08/
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-10-01
  by direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-08/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-08/**
  (HTTP 200, 4,462 bytes, HTML `<title>Table 08</title>`). Implementers
  must use the `bootstrap/` path — do not re-derive the slug-only URL.
  (Same non-standard layout as table-01…07 and css-table-11/12/16.)
- **Preview CSS:** the DOM references `css/style.css?v=ad6b6e2c`
  (relative to the `bootstrap/` preview path). ⚠️ The correct full URL
  is
  **https://preview.colorlib.com/theme/bootstrap/table-08/css/style.css?v=ad6b6e2c**
  — note the `table-08/` segment BEFORE `css/`. Verified fetchable at
  prep time (2026-10-01): **HTTP 200, 11,049 bytes**, a single
  self-contained sheet ("Every style this snippet uses, and nothing
  else. No framework, no build step."). Cross-checked: byte-identical
  (same SHA-256 `0486be162e260c7400d6262c1da91095290cef71c7e9aa1bc5e6212345af8e5a`)
  to `css/style.css` inside the source ZIP
  https://preview.colorlib.com/downloads/free/table-08.zip (HTTP 200,
  256,848 bytes). **All design tokens in this spec were captured
  directly from that stylesheet — CSS values are canonical;
  implementers do NOT need to re-fetch it.** (Sheet anatomy:
  Bootstrap-reboot `all: revert` block → box-sizing/print shims →
  `.cl-icon` rule → HTML element defaults (reboot body font stack,
  `table { border-collapse: collapse }`, `th { text-align: revert }`
  only) → Roboto `@font-face` 400/700 blocks → `.cl-container`
  responsive container → `.cl-row`/`.cl-col-md-*` grid → `.cl-table`
  base + bordered/hover rules → collapse/fade utility rules →
  `.cl-justify-content-center`/`.cl-mb-4`/`.cl-text-center` utilities
  → print rules → **final override block**: Poppins `#f8f9fd` body,
  400-weight headings, `.heading-section` 28px `#000`, `.ftco-section`
  7em padding, `.table-wrap` scroll, min-width-1000px WHITE table with
  soft shadow, white thead band + `#ececec` rules, then the
  accordion-specific rules: toggle-row backgrounds, `td.acc` panel
  `#f3f3f3`, green `.fa` arrows, FontAwesome `@font-face`.)
- **Font gotchas:** (1) the sheet DECLARES Roboto `@font-face` (400 +
  700) but **no rule ever references Roboto** — the final `body`
  override sets `"Poppins", Arial, sans-serif`. Implementers load
  **Poppins 400 + 700** via Google Fonts (400 = body/h2/h3; 700 =
  th via UA default bold) and must NOT load Roboto. (2) Tailwind v4
  preflight resets h1–h6 sizing/weight — set heading size/weight
  explicitly with utilities (h2: `text-[28px] font-normal`; h3:
  `text-xl font-normal`). (3) The sheet never reverts th
  font-weight (the revert block only touches `th { text-align }`), so
  header labels and row numbers render at the UA default **bold** —
  set `font-bold` explicitly on th cells for parity.
- **Scripts (source):** ⚠️ UNLIKE table-07 (zero scripts), this
  template IS interactive. The live page loads **ONE** script:
  `js/snippet.js?v=7636a493` (verified 2026-10-01 on the live DOM) —
  a 2,664-byte vanilla-JS Bootstrap-4-style collapse engine (no
  jQuery, no Bootstrap): clicking a `[data-toggle="collapse"]` row
  animates its detail panel's height (0.35s ease), flips the row's
  `.cl-collapsed` class + `aria-expanded`, and — via
  `data-parent="#accordion"` — **closes any other open panel**
  (single-open accordion). `prefers-reduced-motion` disables the
  transitions. The ZIP ships this file at `js/snippet.js`.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-08.jpg
  — ⚠️ served as an **AVIF image 1200×972 despite the `.jpg`
  extension** (same quirk as table-05/table-07 — convert before
  analyzing). Analyzed 2026-10-01: light blue-gray canvas `#f8f9fd`,
  centered black "Table #08" heading + "Collapsible Table"
  subheading, one white table card with soft shadow; header row white
  with bold black labels; **row 1 expanded** — its toggle band shaded
  light gray `#ececec` with a green up-arrow, followed by a full-width
  `#f3f3f3` detail panel with gray paragraph text; rows 2–4 collapsed
  — white bands with green down-arrows, separated by thin `#ececec`
  rules. Matches the stylesheet tokens exactly (CSS wins over the
  screenshot on any conflict).
- **TEMPLATES.md:** "## Table (25)" section at line 2868; item at
  line 2891; slug `table-08` appears exactly ONCE.
- **Name collision check:** "tabula" = 0 hits in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, and TEMPLATES.md (case-
  insensitive), 2026-10-01.

## Design tokens

(Canonical values captured 2026-10-01 directly from the live
stylesheet `https://preview.colorlib.com/theme/bootstrap/table-08/css/style.css?v=ad6b6e2c`
— HTTP 200, 11,049 bytes, byte-identical to the source ZIP's sheet.
CSS values are canonical over the screenshot.)

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", Arial, sans-serif` | final `body` rule; Google Fonts link **400 + 700**. The sheet's Roboto `@font-face` blocks are DECLARED BUT UNUSED — do not load Roboto |
| Body text | font-size 16px, line-height 1.8, font-weight 400, color `gray` (= #808080), background **`#f8f9fd`** (light blue-gray) | **light-canvas family** — same page color as table-05 (Statusline) and table-06 (Rowline); the opposite pole of table-07's dark `#2b3035` |
| Heading h2/h3 (final) | Poppins, font-weight **400**, line-height 1.5, color `#000` | final rule overrides the reboot's 500 (same gotcha as siblings); Tailwind preflight also resets h1–h6 — set size/weight explicitly |
| Heading `.heading-section` (h2) | font-size **28px**, color `#000`, centered | "Table #08" — stays BLACK (unlike table-07's white `#fff`) |
| Subheading h3 `.cl-h5` | font-size **1.25rem** (20px), color `#000`, weight 400 | "Collapsible Table" |
| Section padding | `.ftco-section { padding: 7em 0 }` | generous whitespace above/below content |
| Container | `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like) |
| Heading wrappers | `.cl-col-md-6` (50% width @768+), text-center, `.cl-mb-4` = **margin-bottom 1.5rem** | ⚠️ **1.5rem here** vs table-07's `.cl-mb-5` 3rem — siblings differ; BOTH the h2 wrapper and the h3 subheading use `.cl-mb-4` |
| Table wrapper | `.table-wrap { overflow-x: scroll }` | horizontal scroll below the min-width |
| Table `.cl-table` (final) | `width: 100%; min-width: 1000px !important`; border-collapse **collapse** (reboot); box-shadow **`0px 5px 12px -12px rgba(0,0,0,0.29)`**; transition 0.3s | soft card shadow under the whole table (screenshot confirms) |
| Table text color | `.cl-table { color: #212529 }` | ALL cells (incl. panel paragraphs) inherit `#212529`; page-level body `gray` never reaches table text |
| Header cells `thead th` (final) | **border none**, padding **30px**, font-size **14px**, color **`#000`**, border-bottom **2px solid `#ececec`**, background **`#fff`** | white header band with a light-gray underline |
| th font-weight | **UA default bold (700)** | the revert block only reverts `th { text-align }` — font-weight is NEVER reverted; screenshot confirms bold labels; set `font-bold` explicitly in Tailwind |
| Header columns | 6: `#` · `Product Name` · `Price` · `Quantity` · `Total` · (empty icon column — source uses `<th>&nbsp;</th>`) | header th cells have NO `scope` in the source — the recreation SHALL add `scope="col"` (documented a11y improvement, same as siblings) |
| Data-row cells `tbody th, tbody td` (final) | **border none**, padding **30px**, font-size **14px**, color `#212529` (inherited) | no side/top borders anywhere |
| Row-number cells | `<th scope="row">1</th>` … `4` | **source already has `scope="row"`** — keep; bold (UA default) 14px |
| Row separators | `.cl-table tbody tr { border-bottom: 2px solid #ececec }` + declared `margin-bottom: 10px` | ⚠️ under `border-collapse: collapse` row margins have no effect — the CANONICAL visual is the 2px `#ececec` rule under each row (screenshot confirms separator lines, not large gaps) |
| Row cursor | `.cl-table tbody tr { cursor: pointer }` | whole row is the click target |
| Toggle rows (open) | `[data-toggle="collapse"] { background: #ececec !important }` | the EXPANDED row's trigger band — light gray |
| Toggle rows (closed) | `[data-toggle="collapse"].cl-collapsed { background: #fff !important }` | collapsed rows are white |
| Toggle rows (closed hover) | `.cl-collapsed:hover { background: #ececec !important; border-bottom: 2px solid #ececec }` | hover shades closed rows gray |
| Row hover (base rule) | `.cl-table-hover tbody tr:hover { background-color: rgba(0,0,0,0.075) }` | the `!important` toggle rules above override it on trigger rows; net effect: **all trigger rows read `#ececec` when open OR hovered, `#fff` only when closed + unhovered** |
| Accordion panel `td.acc` | background **`#f3f3f3`**, border none, padding **30px**, font-size **14px** | the panel td spans **colspan=6** (all columns); one paragraph per panel |
| Panel row visibility | `.cl-collapse:not(.cl-show) { display: none }` | panels exist in the DOM always; only the open one renders |
| Icons `.fa` | font-size **12px**, color **`#28a745`** (green) | FontAwesome `\f062` arrow-up when open, `\f063` arrow-down when `.cl-collapsed`; 0.3s transition. **Recreate with lucide-react** (`ChevronUp` open / `ChevronDown` closed) — monorepo rule: no FontAwesome, icons from lucide-react |
| Links | `#1089ff` (0.3s ease) | no links inside the snippet itself |
| Container/content width | table area = container 1140px @1200 minus 15px gutters; table min-width 1000px | screenshot: table spans the container width |
| Collapse motion | height animation **0.35s ease** (Bootstrap-collapse pattern); `.fade` opacity 0.15s; `prefers-reduced-motion: reduce` disables both | React recreation: state machine + smooth height transition when motion allowed; instant under reduced-motion |
| Canonical data | 4 rows, each: row#th · "Laptop Technology AS2020" · "$200.00" · "2" · "$400.00" · icon cell. Panels: one lorem paragraph each | same KIND of content may be paraphrased; keep 6 cells × 4 rows + a panel per row |
| Print rules | thead `table-header-group`, cells forced white, `@page { size: a3 }` | minor; not required for parity |

## Requirements

### Requirement: Page shell and headings render

The template SHALL render a light blue-gray page shell (background
`#f8f9fd`, Poppins everywhere with body text at font-size 16px,
line-height 1.8, font-weight 400, color gray, content area with 7em
vertical padding) centered in a responsive container (max-width
1140px at desktop with 15px side padding; 540/720/960px at smaller
breakpoints), with an h2 heading "Table #08" at font-size 28px,
font-weight 400 (NOT the reboot's 500 — and NOT Tailwind preflight's
reset), color **#000**, centered, its wrapper column about 50% wide
at ≥768px with 1.5rem margin-bottom, followed by an h3 subheading
"Collapsible Table" at font-size 1.25rem (20px), font-weight 400,
color #000, centered, also with 1.5rem margin-bottom.

#### Scenario: Shell renders

- **GIVEN** the user visits the Tabula home page
- **THEN** the page background is `#f8f9fd` (light blue-gray)
- **AND** the font family is Poppins (Google Fonts weights 400/700
  loaded; Roboto NOT loaded)
- **AND** the body text renders at font-size 16px, line-height 1.8,
  font-weight 400, color gray
- **AND** the content area has 7em vertical padding

#### Scenario: Headings render

- **GIVEN** the page shell is rendered
- **THEN** exactly one h2 heading reads "Table #08" at font-size 28px,
  font-weight 400 (NOT the reboot's 500), color `#000`, centered
- **AND** the h2's wrapper column is centered, about 50% wide at
  ≥768px, with 1.5rem margin-bottom
- **AND** exactly one h3 subheading reads "Collapsible Table" at
  1.25rem / weight 400 / `#000`, centered, with 1.5rem margin-bottom

### Requirement: White table shell renders with card shadow

The template SHALL render the table inside a horizontally scrollable
wrapper; the table SHALL be width 100% with min-width 1000px,
border-collapse collapse, white row bands, and a soft card shadow
`0px 5px 12px -12px rgba(0,0,0,0,0.29)` (source value:
`rgba(0, 0, 0, 0.29)`). Row text SHALL inherit `#212529` from the
table (not the page-level gray).

#### Scenario: Table shell renders

- **GIVEN** the heading area is rendered
- **THEN** a wrapper with horizontal overflow exists below the
  subheading
- **AND** the table has min-width 1000px and width 100%
- **AND** the table carries the soft card shadow and renders white
  row bands with `#212529` cell text

### Requirement: Header row renders with the canonical column structure

The thead SHALL render one row of SIX th cells in order: "#",
"Product Name", "Price", "Quantity", "Total", and an empty icon
column (the source renders `<th>&nbsp;</th>` — the recreation MAY
use an empty th or `aria-label` the column "Details"). Header cells
SHALL render at font-size 14px, font-weight bold (UA default — the
source sheet never reverts th weight; set `font-bold` explicitly),
color `#000`, padding 30px, no side/top borders, border-bottom 2px
solid `#ececec`, background `#fff`. All six header cells SHALL carry
`scope="col"` (monorepo a11y improvement — the source omits scope on
thead cells).

#### Scenario: Header row renders

- **GIVEN** the table shell is rendered
- **THEN** the thead contains six th cells in order: "#", "Product
  Name", "Price", "Quantity", "Total", (empty icon column)
- **AND** header text renders at 14px, bold, black on the white band
- **AND** the header band has a 2px `#ececec` bottom rule
- **AND** all six header cells carry `scope="col"`

### Requirement: Data rows render the canonical product data

The tbody SHALL render exactly 4 product rows, each with 6 cells in
order: a row-number th with `scope="row"` plus four td cells plus an
icon cell. The canonical data is:

1. 1 · Laptop Technology AS2020 · $200.00 · 2 · $400.00 · icon
2. 2 · Laptop Technology AS2020 · $200.00 · 2 · $400.00 · icon
3. 3 · Laptop Technology AS2020 · $200.00 · 2 · $400.00 · icon
4. 4 · Laptop Technology AS2020 · $200.00 · 2 · $400.00 · icon

Copy MAY be paraphrased but SHALL keep the same kind of content
(product name + price + quantity + total per row); body cells SHALL
render at 14px, color `#212529`, padding 30px, border none, with a
2px `#ececec` bottom rule per row; row-number th cells SHALL be bold
and carry `scope="row"`; the whole row SHALL be a click target
(`cursor: pointer`).

#### Scenario: Rows render

- **GIVEN** the table is rendered
- **THEN** tbody contains 4 product rows with the canonical data
  above (or same-kind paraphrases)
- **AND** each row has 6 cells: row-number th (scope="row", bold) +
  product name + price + quantity + total + icon cell
- **AND** cells render at 14px / `#212529` / 30px padding / no cell
  borders, with a 2px `#ececec` rule under each row
- **AND** rows are click targets (pointer cursor)

### Requirement: Accordion detail panels render

Each product row SHALL be followed by a full-width detail panel row:
a single td spanning all 6 columns (colspan=6), background `#f3f3f3`,
padding 30px, font-size 14px, containing one descriptive paragraph
of the same kind as the source's lorem text (paraphrase allowed).
Panels SHALL exist for all 4 rows in the DOM; only the open row's
panel SHALL be visible (source: `.cl-collapse:not(.cl-show) {
display: none }`).

#### Scenario: Panels render

- **GIVEN** the data rows render
- **THEN** each product row is followed by a panel row whose td spans
  all 6 columns with background `#f3f3f3` and 30px padding
- **AND** each panel contains one paragraph (canonical lorem or
  same-kind paraphrase)
- **AND** only the currently open row's panel is visible

### Requirement: Collapsible single-open accordion behavior

Clicking a product row SHALL toggle its detail panel. The behavior
SHALL be a single-open accordion (source `data-parent="#accordion"`):
opening a row SHALL close any other open panel. The initial state
SHALL be row 1 open and rows 2–4 closed (matches the source DOM and
the screenshot). The open row's trigger band SHALL be shaded
`#ececec` with an up-arrow icon; closed rows SHALL be white
(`#fff`) with down-arrow icons; a closed row hovered SHALL shade
`#ececec`. The toggle SHALL update `aria-expanded` on the trigger
row and SHALL be operable by keyboard (Enter/Space on the focusable
trigger), with `aria-controls` wiring the trigger to its panel.

#### Scenario: Row 1 open initially

- **GIVEN** the page first renders
- **THEN** row 1's panel is visible and rows 2–4's panels are hidden
- **AND** row 1's trigger band is `#ececec` with an up-arrow icon
- **AND** rows 2–4 are white with down-arrow icons
- **AND** row 1's trigger has aria-expanded=true; rows 2–4 have
  aria-expanded=false

#### Scenario: Clicking a closed row opens it and closes the previous

- **GIVEN** row 1 is open
- **WHEN** the user clicks row 3 (or activates it via keyboard)
- **THEN** row 3's panel becomes visible
- **AND** row 1's panel is hidden (single-open — no two panels open
  at once)
- **AND** row 3's trigger band is `#ececec` with an up-arrow;
  row 1 returns to white with a down-arrow
- **AND** aria-expanded flips on both rows

#### Scenario: Clicking the open row closes it

- **GIVEN** row 3 is open
- **WHEN** the user clicks row 3 again
- **THEN** row 3's panel is hidden
- **AND** no panel is open; all trigger rows are white with
  down-arrows

#### Scenario: Hover shades closed rows

- **GIVEN** row 2 is closed
- **WHEN** the user hovers row 2
- **THEN** its trigger band background becomes `#ececec`

### Requirement: Expand/collapse motion

Panels SHALL animate open/closed with a height transition of about
0.35s ease when the user allows motion; under
`prefers-reduced-motion: reduce` the panels SHALL appear/disappear
without animation (source disables both `.fade` and `.cl-collapsing`
transitions). The exact animation technique (CSS grid-rows,
max-height, measured height) is the implementer's choice; the
single-open state machine and visual states are mandatory.

#### Scenario: Motion allowed

- **GIVEN** the user's system does not request reduced motion
- **WHEN** a panel opens or closes
- **THEN** the height animates smoothly (~0.35s ease)

#### Scenario: Reduced motion

- **GIVEN** the user's system requests reduced motion
- **WHEN** a panel opens or closes
- **THEN** it appears/disappears instantly (no transition)

### Requirement: Icons render as green lucide chevrons

The icon cell of each trigger row SHALL render a 12px chevron in
color `#28a745` (green): ChevronUp when the row is open,
ChevronDown when closed. Icons SHALL come from `lucide-react` (the
monorepo icon rule — the source uses FontAwesome `\f062`/`\f063`,
which the recreation does NOT reproduce) and SHALL be
`aria-hidden` (decorative; the row's aria-expanded carries the
state).

#### Scenario: Icons render

- **GIVEN** the table renders
- **THEN** each trigger row's icon cell contains a 12px chevron in
  `#28a745`
- **AND** open rows show ChevronUp, closed rows show ChevronDown
- **AND** every icon is aria-hidden

### Requirement: Horizontal-scroll behavior below the min-width

On viewports narrower than the table's 1000px min-width, the wrapper
SHALL scroll horizontally without breaking the page layout; at
≥1000px the table fills the container width.

#### Scenario: Narrow viewport scrolls horizontally

- **GIVEN** the viewport is narrower than 1000px
- **THEN** the table wrapper scrolls horizontally
- **AND** the page shell (headings, container) remains intact

### Requirement: Component Dock attribution footer

The app SHALL include a minimal footer linking
https://www.componentdock.com/ branded as "Component Dock" (monorepo
rule — the source snippet has no footer; documented divergence). The
app SHALL NOT reference ColorLib anywhere (comments included —
provenance lives only in this spec, TEMPLATES.md, and the PR).

#### Scenario: Attribution present

- **GIVEN** any page of the app
- **THEN** a footer link to https://www.componentdock.com/ exists
      ("Component Dock" branding)
- **AND** no file in the app contains "colorlib" (case-insensitive)

### Requirement: Accessibility (global semantics)

The table SHALL use semantic markup (`<table>`, `<thead>`,
`<tbody>`, `<th>`, `<td>`); thead cells SHALL carry `scope="col"`;
row-number cells SHALL carry `scope="row"`; trigger rows SHALL be
keyboard-operable with `aria-expanded` + `aria-controls` wiring to
their panels; the page SHALL have exactly one h2 and one h3 (matching
the source); heading sizes/weights SHALL be set explicitly (Tailwind
preflight resets h1–h6); th font-weight SHALL be set explicitly
(`font-bold`); hover/open backgrounds SHALL preserve readable
contrast.

#### Scenario: Table and page semantics

- **GIVEN** the page renders
- **THEN** the data table is a real `<table>` with `<thead>`/`<tbody>`
- **AND** every thead cell has `scope="col"` and every row-number
  cell has `scope="row"`
- **AND** exactly one h2 ("Table #08") and one h3 ("Collapsible
  Table") exist
- **AND** trigger rows are focusable and respond to Enter/Space with
  aria-expanded reflecting panel state
- **AND** heading and th weights render as designed (400 / bold)

## Verification checklist

- [ ] Poppins 400/700 loaded via Google Fonts `<link>` in
      `index.html` (Roboto NOT loaded — declared-but-unused in the
      source sheet)
- [ ] `@theme` tokens: `--color-page: #f8f9fd`,
      `--color-heading: #000`, `--color-muted: #808080`,
      `--color-cell: #212529`, `--color-rule: #ececec`,
      `--color-openrow: #ececec`, `--color-panel: #f3f3f3`,
      `--color-accent: #28a745`,
      `--color-cardshadow: rgba(0,0,0,0.29)`
- [ ] Page shell: `#f8f9fd` background, body 16px / line-height 1.8 /
      weight 400 / color gray, content area `7em` vertical padding,
      centered container max-width 1140px / 15px gutters
      (540/720/960px breakpoints)
- [ ] Headings: single h2 "Table #08" — 28px / font-weight 400 /
      `#000`, centered, wrapper ~50% @768+ with 1.5rem margin-bottom;
      single h3 "Collapsible Table" — 1.25rem / 400 / `#000`,
      centered, 1.5rem margin-bottom; weights/sizes set EXPLICITLY
      (Tailwind preflight resets h1–h6)
- [ ] Table: `min-width: 1000px` inside an `overflow-x-auto` wrapper;
      white row bands, `#212529` cell text, soft shadow
      `0 5px 12px -12px rgba(0,0,0,0.29)`, border-collapse collapse
- [ ] thead: 6 th (`#` · `Product Name` · `Price` · `Quantity` ·
      `Total` · empty icon column) — 14px / bold (explicit) / `#000`,
      30px padding, 2px `#ececec` bottom rule, white background,
      `scope="col"` on all six
- [ ] tbody: 4 product rows with canonical data (Laptop Technology
      AS2020 / $200.00 / 2 / $400.00, paraphrase-allowed); row-number
      th bold with `scope="row"`; cells 14px / `#212529` / 30px
      padding / no borders / 2px `#ececec` rule per row; pointer
      cursor on rows
- [ ] Panels: full-width colspan=6 `#f3f3f3` panels (30px padding)
      after each row, one paragraph each; only the open panel visible
- [ ] Accordion: initial state row 1 open / 2–4 closed; single-open
      (opening a row closes the other); clicking the open row closes
      it; aria-expanded + aria-controls wired; keyboard-operable
      triggers
- [ ] Toggle-row states: open band `#ececec` + ChevronUp; closed
      rows `#fff` + ChevronDown; closed hover → `#ececec`; icons
      12px `#28a745` from lucide-react, aria-hidden
- [ ] Motion: ~0.35s ease height animation when motion allowed;
      instant under `prefers-reduced-motion`
- [ ] Responsive: table scrolls in wrapper below 1000px; layout
      intact at narrow viewports
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references
      anywhere in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh tabula`; PR
      `feat/template-tabula` with source slug + preview URL
      (`bootstrap/` path) + tokens in the description
