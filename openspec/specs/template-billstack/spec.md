# Template: Billstack (Table)

## Purpose

Billstack is an invoice-status data-table showcase page in the
free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Table 09" template (source:
https://colorlib.com/wp/template/table-09/ — a single-page snippet:
light warm-gray page `#fafafa`, centered black h2 heading "Table #09",
one wide 6-column invoice table — white card-style rows on the
canvas, odd rows shaded with a light `rgba(0,0,0,0.05)` stripe, all
8 demo rows carrying the same invoice data (1001 · Mark Otto · Japan ·
$3000 · $1200) and a colored Bootstrap-style status BUTTON in the last
column (green "Progress" / amber "Open" / red "On hold"); uppercase
13px header labels; soft card shadow under the table; no navbar, no
JS, no framework), built under a DIFFERENT name (Billstack — stacked
bill/invoice rows; single lowercase word), per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `table-09`
- **Source:** https://colorlib.com/wp/template/table-09/
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-10-01
  by direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-09/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-09/**
  (HTTP 200, 3,206 bytes, HTML `<title>Table 09</title>`). Implementers
  must use the `bootstrap/` path — do not re-derive the slug-only URL.
  (Same non-standard layout as table-01…08 and css-table-11/12/16.)
- **Preview CSS:** the DOM references `css/style.css?v=6a783924`
  (relative to the `bootstrap/` preview path). ⚠️ The correct full URL
  is
  **https://preview.colorlib.com/theme/bootstrap/table-09/css/style.css?v=6a783924**
  — note the `table-09/` segment BEFORE `css/`. Verified fetchable at
  prep time (2026-10-01): **HTTP 200, 12,619 bytes**, a single
  self-contained sheet ("Every style this snippet uses, and nothing
  else. No framework, no build step."). Cross-checked: byte-identical
  (same SHA-256
  `3235ade3c556323801330732a9783657ff837d70f5ba4b4276052d23c0201cf9`)
  to `css/style.css` inside the source ZIP
  https://preview.colorlib.com/downloads/free/table-09.zip (HTTP 200,
  254,645 bytes). **All design tokens in this spec were captured
  directly from that stylesheet — CSS values are canonical;
  implementers do NOT need to re-fetch it.** (Sheet anatomy:
  Bootstrap-reboot `all: revert` block → box-sizing/print shims →
  `.cl-icon` rule → Roboto `@font-face` 400/700 blocks → HTML element
  defaults (reboot body font stack, `table { border-collapse:
  collapse }`, `th { text-align: inherit }`) → `.cl-container`
  responsive container → `.cl-row`/`.cl-col-md-*` grid → `.cl-table`
  base + **`.cl-table-striped` odd-row rule** → `.cl-btn` base +
  success/warning/danger variants → utilities (`.cl-justify-content-
  center`, `.cl-mb-5`, `.cl-text-center`) → print rules → **final
  override block**: Poppins `#fafafa` body, `#1089ff` links, 400-weight
  h2, `.ftco-section` 7em padding, `.heading-section` 28px `#000`,
  `.table-wrap` scroll, min-width-1000px WHITE table with soft shadow,
  white thead band + uppercase 13px/400 labels, white tbody rows,
  14px `20px 30px` body cells, border none everywhere.)
- **Font gotchas:** (1) the sheet DECLARES Roboto `@font-face` (400 +
  700) but **no rule ever references Roboto** — the final `body`
  override sets `"Poppins", Arial, sans-serif`. Implementers load
  **Poppins 400 + 700** via Google Fonts (400 = body/h2/th-labels/
  buttons; 700 = row-header `th` "1001" cells, which render at the UA
  default bold — the sheet never reverts th font-weight, and the final
  override does NOT set it, unlike the thead labels which are
  explicitly 400). Must NOT load Roboto. (2) Tailwind v4 preflight
  resets h1–h6 sizing/weight and th weight — set heading size/weight
  and `font-bold` on row-header cells EXPLICITLY with utilities.
- **Scripts (source):** NONE — the live page loads ZERO `<script>`
  tags (verified 2026-10-01 on the live DOM), and the source ZIP
  contains NO `js/` directory (entries: `index.html`, `css/style.css`,
  Roboto woff2 fonts 100/300/400/700 latin & latin-ext, `README.md`).
  This template is entirely static. The status buttons are `<a
  href="#">` anchors styled as Bootstrap buttons — they navigate
  nowhere; the recreation SHALL render them as `<button type="button">`
  (monorepo a11y semantics; identical visuals).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-09.jpg
  — ⚠️ note: unlike table-05/07/08 this one is served as a **REAL JPEG
  1200×972** (JFIF, progressive) despite the `.jpg` extension — no
  AVIF conversion needed. Analyzed 2026-10-01: light warm-gray canvas
  `#fafafa`, centered black "Table #09" heading, one white table card
  with the soft shadow, uppercase gray-black header labels (INVOCE ·
  CUSTOMER · SHIP · PRICE · PRUCHASED PRICE · STATUS), 8 data rows —
  odd rows shaded light gray, even rows white; each row's first cell
  bold "1001"; Status column holds rounded-rect buttons: green
  "Progress" (white text), amber "Open" (dark text), red "On hold"
  (white text). Matches the stylesheet tokens exactly (CSS wins over
  the screenshot on any conflict).
- **TEMPLATES.md:** "## Table (25)" section at line 2868; item at
  line 2892; slug `table-09` appears exactly ONCE.
- **Name collision check:** "billstack" = 0 hits in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, and TEMPLATES.md bold names
  (case-insensitive), 2026-10-01. Distinct from existing tabular-
  adjacent names (gridkit, rowdeck, domkit, gridmark, statusline,
  rowline, rowspan, tabula, fixstack — "Billstack" ≠ "Fixstack":
  different prefix AND suffix).
- **Sibling context:** the 4th light-canvas sibling (page `#fafafa`
  — same canvas as Statusline/Rowline/Tabula's `#f8f9fd` family but a
  DIFFERENT hex; do NOT copy `#f8f9fd` here), the first of the
  "status BUTTON" table family (Rowdeck/Tabula are not; Statusline
  has pills+avatars, not Bootstrap buttons), zero interactivity (like
  Rowline/Rowspan — NOT like Tabula's JS accordion).

## Design tokens

(Canonical values captured 2026-10-01 directly from the live
stylesheet `https://preview.colorlib.com/theme/bootstrap/table-09/css/style.css?v=6a783924`
— HTTP 200, 12,619 bytes, byte-identical to the source ZIP's sheet.
CSS values are canonical over the screenshot.)

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", Arial, sans-serif` | final `body` rule; Google Fonts link **400 + 700**. The sheet's Roboto `@font-face` blocks are DECLARED BUT UNUSED — do not load Roboto |
| Body text | font-size 16px, line-height 1.8, font-weight 400, color `gray` (= #808080), background **`#fafafa`** (light warm-gray) | **light-canvas family** — ⚠️ `#fafafa` here vs `#f8f9fd` on table-05/06/08 — siblings differ; do NOT copy the blue-gray value |
| Heading h2 (final) | Poppins, font-weight **400**, line-height 1.5, color `#000` | final rule overrides the reboot's 500 (same gotcha as siblings); Tailwind preflight also resets h1–h6 — set size/weight explicitly |
| Heading `.heading-section` (h2) | font-size **28px**, color `#000`, centered | "Table #09" — stays BLACK |
| Subheading | **NONE** | ⚠️ unlike Tabula (table-08), this snippet has NO h3 subheading — exactly one h2 |
| Section padding | `.ftco-section { padding: 7em 0 }` | generous whitespace above/below content |
| Container | `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like) |
| Heading wrapper | `.cl-col-md-6` (50% width @768+), text-center, `.cl-mb-5` = **margin-bottom 3rem** | ⚠️ **3rem here** vs Tabula's `.cl-mb-4` 1.5rem — siblings differ |
| Table wrapper | `.table-wrap { overflow-x: scroll }` | horizontal scroll below the min-width |
| Table `.cl-table` (final) | `width: 100%; min-width: 1000px !important`; border-collapse **collapse** (reboot); box-shadow **`0px 5px 12px -12px rgba(0,0,0,0.29)`** | soft card shadow under the whole table (screenshot confirms) |
| Table text color | `.cl-table { color: #212529 }` | ALL cells inherit `#212529`; page-level body `gray` never reaches table text |
| Header cells `thead th` (final) | **border none**, padding **30px**, font-size **13px**, color **`#000`**, font-weight **400**, `text-transform: uppercase`, background `#fff` (thead tr) | ⚠️ **13px/400/uppercase** — differs from Tabula's 14px/bold; the final rule EXPLICITLY sets 400 (no UA-bold leak); labels render uppercase via CSS — source text is mixed-case |
| Header columns | 6: "Invoce" · "Customer" · "Ship" · "Price" · "Pruchased Price" · "Status" | ⚠️ **SOURCE TYPOS preserved:** "Invoce" (for Invoice) and "Pruchased Price" (for Purchased Price). The recreation MAY keep them verbatim (pixel parity) or fix them (documented micro-divergence) — same KIND of content either way; note the choice in the PR. Header th cells have NO `scope` in the source — the recreation SHALL add `scope="col"` (documented a11y improvement, same as siblings) |
| Data-row cells `tbody th, tbody td` (final) | **border none**, padding **20px 30px** (⚠️ 20px vertical vs thead's 30px), font-size **14px**, color `#212529` (inherited), vertical-align middle | no side/top borders anywhere — rows separate via STRIPES only, no rules |
| Row-header cells | `<th scope="row">1001</th>` × 8 | **source already has `scope="row"`** — keep; bold (UA default — set `font-bold` explicitly) 14px |
| Row striping | `.cl-table-striped tbody tr:nth-of-type(odd) { background-color: rgba(0, 0, 0, 0.05) }` + `.cl-table tbody tr { background: #fff }` | ⚠️ the striped rule has HIGHER specificity (`(0,2,2)` vs `(0,1,2)`) so it WINS on odd rows: **odd rows = `rgba(0,0,0,0.05)` light gray, even rows = `#fff`** (screenshot confirms: rows 1/3/5/7 shaded). No `.cl-table-hover` class on this table — NO row-hover treatment |
| Status buttons base `.cl-btn` | inline-block, font-weight 400, color `#212529`, transparent bg, `1px solid transparent` border, padding **`0.375rem 0.75rem`**, font-size **1rem** (16px), line-height 1.5, border-radius **`0.25rem`** (small rounding — Bootstrap buttons, NOT pills), transition **0.15s ease-in-out** (color/bg/border/shadow) | `prefers-reduced-motion: reduce` disables the transition; disabled opacity 0.65 |
| `.cl-btn-success` | color `#fff`, bg `#28a745`, border `#28a745`; hover bg `#218838` border `#1e7e34`; focus ring `rgba(72,180,97,0.5)` | "Progress" |
| `.cl-btn-warning` | color **`#212529`** (dark text!), bg `#ffc107`, border `#ffc107`; hover bg `#e0a800` border `#d39e00`; focus ring `rgba(222,170,12,0.5)` | "Open" — amber with DARK label |
| `.cl-btn-danger` | color `#fff`, bg `#dc3545`, border `#dc3545`; hover bg `#c82333` border `#bd2130`; focus ring `rgba(225,83,97,0.5)` | "On hold" |
| Links | `#1089ff`, transition `.3s all ease` | no content links inside the snippet; buttons override their own color per variant |
| Container/content width | table area = container 1140px @1200 minus 15px gutters; table min-width 1000px | screenshot: table spans the container width |
| Canonical data | 8 rows, ALL identical: row#th "1001" · "Mark Otto" · "Japan" · "$3000" · "$1200" · status button. Status SEQUENCE (top→bottom): Progress · Open · On hold · Progress · On hold · Open · Open · Progress | same KIND of content may be paraphrased; keep 6 cells × 8 rows + the status sequence |
| Buttons source markup | `<a href="#" class="cl-btn cl-btn-{success\|warning\|danger}">Label</a>` | recreation SHALL use `<button type="button">` (identical visuals, real semantics) |
| Print rules | thead `table-header-group`, cells forced white, `@page { size: a3 }` | minor; not required for parity |

## Requirements

### Requirement: Page shell and heading render

The template SHALL render a light warm-gray page shell (background
`#fafafa`, Poppins everywhere with body text at font-size 16px,
line-height 1.8, font-weight 400, color gray, content area with 7em
vertical padding) centered in a responsive container (max-width
1140px at desktop with 15px side padding; 540/720/960px at smaller
breakpoints), with ONE h2 heading "Table #09" at font-size 28px,
font-weight 400 (NOT the reboot's 500 — and NOT Tailwind preflight's
reset), color **#000**, centered, its wrapper column about 50% wide
at ≥768px with **3rem** margin-bottom. There SHALL be NO h3
subheading (unlike the table-08 sibling).

#### Scenario: Shell renders

- **GIVEN** the user visits the Billstack home page
- **THEN** the page background is `#fafafa` (light warm-gray)
- **AND** the font family is Poppins (Google Fonts weights 400/700
  loaded; Roboto NOT loaded)
- **AND** the body text renders at font-size 16px, line-height 1.8,
  font-weight 400, color gray
- **AND** the content area has 7em vertical padding

#### Scenario: Heading renders

- **GIVEN** the page shell is rendered
- **THEN** exactly one h2 heading reads "Table #09" at font-size 28px,
  font-weight 400 (NOT the reboot's 500), color `#000`, centered
- **AND** the h2's wrapper column is centered, about 50% wide at
  ≥768px, with **3rem** margin-bottom
- **AND** no h3 subheading exists

### Requirement: White table shell renders with card shadow

The template SHALL render the table inside a horizontally scrollable
wrapper; the table SHALL be width 100% with min-width 1000px,
border-collapse collapse, white row bands, and a soft card shadow
`0px 5px 12px -12px rgba(0,0,0,0.29)` (source value:
`rgba(0, 0, 0, 0.29)`). Cell text SHALL inherit `#212529` from the
table (not the page-level gray).

#### Scenario: Table shell renders

- **GIVEN** the heading area is rendered
- **THEN** a wrapper with horizontal overflow exists below the
  heading
- **AND** the table has min-width 1000px and width 100%
- **AND** the table carries the soft card shadow and renders white
  row bands with `#212529` cell text

### Requirement: Header row renders with the canonical column structure

The thead SHALL render one row of SIX th cells in order: "Invoce",
"Customer", "Ship", "Price", "Pruchased Price", "Status" (source
typos preserved — the recreation MAY fix "Invoce"→"Invoice" and
"Pruchased Price"→"Purchased Price" as a documented micro-divergence;
same KIND of content either way). Header cells SHALL render at
font-size **13px**, font-weight **400** (explicit — the final rule
sets 400, unlike siblings' bold headers), color `#000`,
`text-transform: uppercase` (CSS-driven; source text is mixed-case),
padding 30px, **no borders**, background `#fff`. All six header cells
SHALL carry `scope="col"` (monorepo a11y improvement — the source
omits scope on thead cells).

#### Scenario: Header row renders

- **GIVEN** the table shell is rendered
- **THEN** the thead contains six th cells in order: "Invoce",
  "Customer", "Ship", "Price", "Pruchased Price", "Status" (or the
  typo-fixed spellings)
- **AND** header text renders at 13px / weight 400 / `#000` /
  uppercase on the white band
- **AND** header cells have 30px padding and NO borders
- **AND** all six header cells carry `scope="col"`

### Requirement: Data rows render the canonical invoice data with striping

The tbody SHALL render exactly 8 data rows, each with 6 cells in
order: a row-number th with `scope="row"` plus four td cells plus a
status-button cell. The canonical data is identical on every row:

1. 1001 · Mark Otto · Japan · $3000 · $1200 · Progress
2. 1001 · Mark Otto · Japan · $3000 · $1200 · Open
3. 1001 · Mark Otto · Japan · $3000 · $1200 · On hold
4. 1001 · Mark Otto · Japan · $3000 · $1200 · Progress
5. 1001 · Mark Otto · Japan · $3000 · $1200 · On hold
6. 1001 · Mark Otto · Japan · $3000 · $1200 · Open
7. 1001 · Mark Otto · Japan · $3000 · $1200 · Open
8. 1001 · Mark Otto · Japan · $3000 · $1200 · Progress

Copy MAY be paraphrased but SHALL keep the same kind of content
(invoice# + customer + ship-to + price + purchased price + status per
row) and the status SEQUENCE above. Body cells SHALL render at 14px,
color `#212529`, padding `20px 30px`, border none; row-number th
cells SHALL be bold and carry `scope="row"`. Row backgrounds SHALL
follow the striping rule: **odd rows (1,3,5,7) `rgba(0,0,0,0.05)`,
even rows (2,4,6,8) `#fff`**. There SHALL be NO row-hover treatment
(the source table carries no hover class) and NO row separator
borders.

#### Scenario: Rows render

- **GIVEN** the table is rendered
- **THEN** tbody contains 8 rows with the canonical data above (or
  same-kind paraphrases) and the status sequence
- **AND** each row has 6 cells: row-number th (scope="row", bold) +
  customer + ship + price + purchased price + status button cell
- **AND** cells render at 14px / `#212529` / `20px 30px` padding /
  no borders
- **AND** odd rows are `rgba(0,0,0,0.05)` and even rows are `#fff`
- **AND** rows have no hover background change and no separator rules

### Requirement: Status buttons render the Bootstrap variant styling

Each row's Status cell SHALL render one status control —
`<button type="button">` (source uses `<a href="#">`; identical
visuals, real button semantics) — at font-size 1rem, line-height 1.5,
padding `0.375rem 0.75rem`, border-radius `0.25rem`, font-weight 400,
1px border, with variant styling per the canonical sequence:

- **Progress** → success: white text on `#28a745` (border `#28a745`);
  hover `#218838` / border `#1e7e34`
- **Open** → warning: **dark `#212529` text** on `#ffc107` (border
  `#ffc107`); hover `#e0a800` / border `#d39e00`
- **On hold** → danger: white text on `#dc3545` (border `#dc3545`);
  hover `#c82333` / border `#bd2130`

Buttons SHALL transition color/background/border in ~0.15s
ease-in-out; under `prefers-reduced-motion: reduce` the transition
SHALL be disabled. Each button SHALL show a focus-visible ring in its
variant's focus color (success `rgba(72,180,97,0.5)`, warning
`rgba(222,170,12,0.5)`, danger `rgba(225,83,97,0.5)` — or the
monorepo's standard focus-visible ring if simpler).

#### Scenario: Buttons render per variant

- **GIVEN** the table renders
- **THEN** each of the 8 rows has exactly one status button with the
  label from the canonical sequence (Progress/Open/On hold/...)
- **AND** Progress buttons are white-on-green `#28a745`
- **AND** Open buttons are dark-text-on-amber `#ffc107`
- **AND** On hold buttons are white-on-red `#dc3545`
- **AND** buttons are real `<button type="button">` elements with
  0.25rem radius and the specified padding/size

#### Scenario: Button hover and focus

- **GIVEN** the table renders
- **WHEN** the user hovers a Progress button
- **THEN** its background darkens toward `#218838`
- **AND** keyboard focus on any button shows a visible focus ring
- **AND** under reduced-motion the hover transition is disabled

### Requirement: Horizontal-scroll behavior below the min-width

On viewports narrower than the table's 1000px min-width, the wrapper
SHALL scroll horizontally without breaking the page layout; at
≥1000px the table fills the container width.

#### Scenario: Narrow viewport scrolls horizontally

- **GIVEN** the viewport is narrower than 1000px
- **THEN** the table wrapper scrolls horizontally
- **AND** the page shell (heading, container) remains intact

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
row-header cells SHALL carry `scope="row"`; status controls SHALL be
real buttons with accessible names equal to their labels; the page
SHALL have exactly one h2 (matching the source); heading sizes/weights
SHALL be set explicitly (Tailwind preflight resets h1–h6); row-header
th font-weight SHALL be set explicitly (`font-bold`); thead label
weight SHALL be set explicitly (`font-normal`); hover/focus states
SHALL preserve readable contrast.

#### Scenario: Table and page semantics

- **GIVEN** the page renders
- **THEN** the data table is a real `<table>` with `<thead>`/`<tbody>`
- **AND** every thead cell has `scope="col"` and every row-header
  cell has `scope="row"`
- **AND** exactly one h2 ("Table #09") exists and no h3
- **AND** each status control is a `<button>` whose accessible name
  is its label ("Progress", "Open", or "On hold")
- **AND** heading weight (400), header-label weight (400), and
  row-header weight (bold) render as designed

## Verification checklist

- [ ] Poppins 400/700 loaded via Google Fonts `<link>` in
      `index.html` (Roboto NOT loaded — declared-but-unused in the
      source sheet)
- [ ] `@theme` tokens: `--color-page: #fafafa`,
      `--color-heading: #000`, `--color-muted: #808080`,
      `--color-cell: #212529`, `--color-stripe: rgba(0,0,0,0.05)`,
      `--color-success: #28a745`, `--color-success-hover: #218838`,
      `--color-warning: #ffc107`, `--color-warning-hover: #e0a800`,
      `--color-danger: #dc3545`, `--color-danger-hover: #c82333`,
      `--color-cardshadow: rgba(0,0,0,0.29)`
- [ ] Page shell: `#fafafa` background, body 16px / line-height 1.8 /
      weight 400 / color gray, content area `7em` vertical padding,
      centered container max-width 1140px / 15px gutters
      (540/720/960px breakpoints)
- [ ] Heading: single h2 "Table #09" — 28px / font-weight 400 /
      `#000`, centered, wrapper ~50% @768+ with **3rem**
      margin-bottom; NO h3 subheading; weights/sizes set EXPLICITLY
      (Tailwind preflight resets h1–h6)
- [ ] Table: `min-width: 1000px` inside an `overflow-x-auto` wrapper;
      white row bands, `#212529` cell text, soft shadow
      `0 5px 12px -12px rgba(0,0,0,0.29)`, border-collapse collapse
- [ ] thead: 6 th ("Invoce" · "Customer" · "Ship" · "Price" ·
      "Pruchased Price" · "Status" — or typo-fixed spellings) —
      **13px / weight 400 (explicit) / `#000` / uppercase** / 30px
      padding / NO borders / white background / `scope="col"` on all
      six
- [ ] tbody: 8 rows with canonical invoice data + status sequence
      (Progress · Open · On hold · Progress · On hold · Open · Open ·
      Progress; paraphrase-allowed); row-header th bold with
      `scope="row"`; cells 14px / `#212529` / `20px 30px` padding /
      no borders; **odd rows `rgba(0,0,0,0.05)`, even rows `#fff`**;
      no row-hover treatment
- [ ] Status buttons: `<button type="button">` per row — 1rem /
      0.375rem 0.75rem padding / 0.25rem radius / 1px border;
      Progress = white on `#28a745` (hover `#218838`), Open = dark
      `#212529` on `#ffc107` (hover `#e0a800`), On hold = white on
      `#dc3545` (hover `#c82333`); 0.15s transitions, disabled under
      reduced-motion; visible focus rings
- [ ] Responsive: table scrolls in wrapper below 1000px; layout
      intact at narrow viewports
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references
      anywhere in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh billstack`; PR
      `feat/template-billstack` with source slug + preview URL
      (`bootstrap/` path) + tokens in the description
