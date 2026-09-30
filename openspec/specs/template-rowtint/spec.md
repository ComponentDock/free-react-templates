# Template: Rowtint (Table)

## Purpose

Rowtint is a solid-tint-row data-table showcase page in the
free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Table 10" template (source:
https://colorlib.com/wp/template/table-10/ — a single-page snippet:
light warm-gray page `#fafafa`, centered black h2 heading "Table #10",
one wide 6-column invoice table with a CHARCOAL dark header band
(white uppercase labels) and FIVE fully solid-colored data rows —
blue · green · amber · red · teal — all cells white text, every row
carrying the same invoice data (1001 · Mark Otto · Japan · $3000 ·
$1200) and a white edit (pencil-square) icon button in the last
column; soft card shadow under the table; no navbar, no JS, no
framework), built under a DIFFERENT name (Rowtint — "tinted rows";
each data row is a solid Bootstrap status tint; single lowercase
word), per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

- **Source slug:** `table-10`
- **Source:** https://colorlib.com/wp/template/table-10/
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-10-01
  by direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-10/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-10/**
  (HTTP 200, 7,267 bytes, HTML `<title>Table 10</title>`). Implementers
  must use the `bootstrap/` path — do not re-derive the slug-only URL.
  (Same non-standard layout as table-01…09 and css-table-11/12/16.)
- **Preview CSS:** the DOM references `css/style.css?v=c2c0bfef`
  (relative to the `bootstrap/` preview path). ⚠️ The correct full URL
  is
  **https://preview.colorlib.com/theme/bootstrap/table-10/css/style.css?v=c2c0bfef**
  — note the `table-10/` segment BEFORE `css/`. Verified fetchable at
  prep time (2026-10-01): **HTTP 200, 9,883 bytes**, a single
  self-contained sheet ("Every style this snippet uses, and nothing
  else. No framework, no build step."). Cross-checked: **LINE-
  IDENTICAL** (same rules; the live sheet merely has ONE extra
  trailing blank line at EOF, SHA-256s differ only by that:
  live `6dc0e91d…0cde` 9,883 B vs ZIP
  `b67dc830…d5d59` 9,882 B) to `css/style.css` inside the source ZIP
  https://preview.colorlib.com/downloads/free/table-10.zip (HTTP 200,
  254,886 bytes; entries: `table-10/index.html`,
  `table-10/css/style.css`, Roboto woff2 fonts 100/300/400/700 latin &
  latin-ext, `README.md` — **NO `js/` directory**). **All design
  tokens in this spec were captured directly from that stylesheet —
  CSS values are canonical; implementers do NOT need to re-fetch it.**
  (Sheet anatomy: `all: revert` host-page guard → box-sizing/print
  shims → Roboto `@font-face` 400/700 blocks → HTML element defaults
  (reboot body font stack, `table { border-collapse: collapse }`) →
  `.cl-container` responsive container → `.cl-row`/`.cl-col-md-*`
  grid → `.cl-table` base + **`.cl-table-dark` dark-table rules** →
  `.cl-bg-primary/success/info/warning/danger/dark` solid utilities →
  `.cl-justify-content-center`/`.cl-mb-5`/`.cl-text-center` utilities
  → print rules → **final override block**: Poppins `#fafafa` body,
  `#1089ff` links, 400-weight h2, `.cl-bg-primary` re-pointed to
  `#1089ff`, `.ftco-section` 7em padding, `.heading-section` 28px
  `#000`, `.table-wrap` scroll, min-width-1000px WHITE-text dark table
  with soft shadow, **white uppercase 13px/400 thead labels**,
  borderless 14px `20px 30px` body cells, white `.fa` edit icons.)
- **Font gotchas:** (1) the sheet DECLARES Roboto `@font-face` (400 +
  700) but **no rule ever references Roboto** — the final `body`
  override sets `"Poppins", Arial, sans-serif`. Implementers load
  **Poppins 400 + 700** via Google Fonts (400 = body/h2/thead labels/
  body cells; 700 = row-header `th` "1001" cells, which render at the
  UA default bold — the sheet never sets tbody-th font-weight and the
  final override does NOT set it either, so the bold LEAKS from the
  UA default; set `font-bold` explicitly in the recreation). Must NOT
  load Roboto. (2) Tailwind v4 preflight resets h1–h6 sizing/weight
  AND th weight — set heading size/weight and `font-bold` on
  row-header cells EXPLICITLY with utilities.
- **Scripts (source):** NONE — the live page loads ZERO `<script>`
  tags (verified 2026-10-01 on the live DOM), and the source ZIP's
  `index.html` contains no `<script>` either. This template is
  entirely static (like table-06/07/09 — NOT like table-08's JS
  accordion). The edit icons are `<a href="#">` anchors — they
  navigate nowhere; the recreation SHALL render them as
  `<button type="button">` (monorepo a11y semantics; identical
  visuals).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-10.jpg
  — ⚠️ note: served as a **REAL JPEG 1200×972** (JFIF, 59,627 bytes)
  despite the `.jpg` extension — no AVIF conversion needed. Analyzed
  2026-10-01 with vision: light warm-gray canvas `#fafafa`, centered
  black "Table #10" heading, ONE wide table — charcoal `#343a40`
  header band with white uppercase labels (INVOICE · CUSTOMER · SHIP ·
  PRICE · PRUCHASED PRICE · blank), then 5 solid colored rows in
  order: **blue `#1089ff` · green `#28a745` · amber `#ffc107` · red
  `#dc3545` · teal `#17a2b8`**, every cell white text, row-header
  "1001" bold white, small white pencil-in-square edit icon on the
  right of each row, soft shadow under the table, generous 7em
  whitespace above/below. Matches the stylesheet tokens exactly (CSS
  wins over the screenshot on any conflict).
- **TEMPLATES.md:** "## Table (25)" section at line 2868; item at
  line 2893; slug `table-10` appears exactly ONCE.
- **Name collision check:** "rowtint" = 0 hits in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, and TEMPLATES.md bold names
  (case-insensitive), 2026-10-01. Distinct from the existing Table-
  family names (gridkit, rowdeck, domkit, gridmark, statusline,
  rowline, rowspan, tabula, billstack — "Rowtint" shares the "row"
  rhythm with rowdeck/rowline/rowspan but its suffix "tint" is
  unique; also distinct from ColorLib source names "Table 10").
- **Sibling context:** the 2nd light-canvas sibling on the SAME
  `#fafafa` canvas as Billstack (table-09 — its nearest neighbor;
  same shell, heading, 3rem margin, 13px/400 headers, min-width,
  shadow, cell padding). DIFFERS from Billstack in exactly six ways:
  (1) `cl-table-dark` — **ALL cell text white** (Billstack cells are
  `#212529`), (2) rows are **solid color bands** in a fixed sequence
  (primary/success/warning/danger/info) instead of gray stripes,
  (3) thead band is **charcoal `#343a40` with white labels**
  (Billstack: white band, black labels), (4) last column = white
  edit-icon buttons instead of status buttons, (5) **5 rows** instead
  of 8, (6) 6th thead cell is **EMPTY** instead of "Status". Also
  unlike Tabula (table-08): zero interactivity (no JS accordion) and
  `#fafafa` canvas (Tabula uses `#f8f9fd`). Unlike Statusline
  (table-05): no pills/avatars and no blue-gray canvas.
- **⚠️ Known contrast divergence (documented, source-faithful):**
  white text on amber `#ffc107` is ≈1.9:1 — below WCAG AA (4.5:1).
  The source renders it anyway (row text color comes from
  `.cl-table-dark { color: #fff }`, not per-variant rules). This
  recreation keeps white for pixel parity; note the choice in the PR.
  (Billstack's warning BUTTON had dark `#212529` text — that was a
  `.cl-btn-warning` token; table-10's warning ROW has no such token.)

## Design tokens

(Canonical values captured 2026-10-01 directly from the live
stylesheet `https://preview.colorlib.com/theme/bootstrap/table-10/css/style.css?v=c2c0bfef`
— HTTP 200, 9,883 bytes, line-identical to the source ZIP's sheet.
CSS values are canonical over the screenshot.)

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", Arial, sans-serif` | final `body` rule; Google Fonts link **400 + 700**. The sheet's Roboto `@font-face` blocks are DECLARED BUT UNUSED — do not load Roboto |
| Body text | font-size 16px, line-height 1.8, font-weight 400, color `gray` (= #808080), background **`#fafafa`** (light warm-gray) | **light-canvas family** — same `#fafafa` as Billstack (table-09) ⚠️ NOT the `#f8f9fd` blue-gray of table-05/06/08 |
| Heading h2 (final) | Poppins, font-weight **400**, line-height 1.5, color `#000` | final rule overrides the reboot's 500 (same gotcha as siblings); Tailwind preflight also resets h1–h6 — set size/weight explicitly |
| Heading `.heading-section` (h2) | font-size **28px**, color `#000`, centered | "Table #10" — stays BLACK |
| Subheading | **NONE** | exactly one h2 on the page (same as Billstack; unlike Tabula's h3) |
| Section padding | `.ftco-section { padding: 7em 0 }` | generous whitespace above/below content |
| Container | `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like) |
| Heading wrapper | `.cl-col-md-6` (50% width @768+), text-center, `.cl-mb-5` = **margin-bottom 3rem** | same 3rem as Billstack |
| Table wrapper | `.table-wrap { overflow-x: scroll }` | horizontal scroll below the min-width |
| Table `.cl-table` (final) | `width: 100%; min-width: 1000px !important`; border-collapse **collapse** (reboot); box-shadow **`0px 5px 12px -12px rgba(0,0,0,0.29)`** | soft card shadow under the whole table (screenshot confirms) |
| **Table text color** | `.cl-table-dark { color: #fff; background-color: #343a40 }` | ⚠️ **KEY SIBLING DIFF:** the `cl-table-dark` color rule (later in the sheet, same specificity) WINS over the reboot's `.cl-table { color: #212529 }` → **ALL cells render WHITE text**. The table itself defaults to a `#343a40` dark background (overridden per-row by the tint classes below) |
| Header band `thead tr` | `cl-bg-dark` → `background-color: #343a40 !important` | charcoal band (NOT white like Billstack) |
| Header cells `thead th` (final) | **border none**, padding **20px 30px**, font-size **13px**, color **`#fff`**, font-weight **400**, `text-transform: uppercase` | **13px/400/WHITE/uppercase on charcoal** — differs from Billstack's black-on-white; the final rule EXPLICITLY sets 400 (no UA-bold leak); labels render uppercase via CSS — source text is mixed-case |
| Header columns | 6: "Invoce" · "Customer" · "Ship" · "Price" · "Pruchased Price" · **"" (EMPTY)** | ⚠️ **SOURCE TYPOS preserved:** "Invoce" and "Pruchased Price" (same typos as Billstack). The recreation MAY keep them verbatim (pixel parity) or fix them (documented micro-divergence). ⚠️ The **6th header cell is EMPTY** (`&nbsp;` in source) — it labels the edit-icon column; render it empty (or with a visually-hidden label for a11y — note choice). Header th cells have NO `scope` in the source — the recreation SHALL add `scope="col"` (documented a11y improvement, same as siblings) |
| **Row tint sequence** (5 rows, top→bottom) | 1. `cl-bg-primary` **`#1089ff`** (final override — ⚠️ NOT the reboot's `#007bff`); 2. `cl-bg-success` **`#28a745`**; 3. `cl-bg-warning` **`#ffc107`**; 4. `cl-bg-danger` **`#dc3545`**; 5. `cl-bg-info` **`#17a2b8`** | each class sets `background-color … !important` on the `<tr>`; text stays white (from `cl-table-dark`). The sheet also defines `a.cl-bg-*:hover` darker variants (`#0062cc`/`#1e7e34`/`#d39e00`/`#bd2130`/`#117a8b`) — but rows are `<tr>`, NOT links, so **NO row-hover treatment exists** (screenshot + CSS confirm) |
| Data-row cells `tbody th, tbody td` (final) | **border none**, padding **20px 30px**, font-size **14px**, color **`#fff`** (inherited from `cl-table-dark`), vertical-align middle | no borders anywhere — rows separate via solid color only |
| Row-header cells | `<th scope="row">1001</th>` × 5 | **source already has `scope="row"`** — keep; bold (UA default — set `font-bold` explicitly) 14px **white** |
| Edit icon (last cell) | `<a href="#"><i class="fa fa-edit"><svg class="cl-icon" viewBox="0 0 1792 1792">…</svg></i></a>` — inline SVG pencil-in-square (FontAwesome "fa-edit" path), `.cl-icon { height: 1em; width: auto; fill: currentColor; display: inline-block }`, `.cl-table tbody td .fa { color: #fff }` | white icon ≈14px (1em at 14px cell font). Recreation: `<button type="button" aria-label="Edit invoice 1001 …">` with **lucide `SquarePen`** (closest match to fa-edit's pencil-in-square; lucide-react has no brand icons but SquarePen ships with it), `text-white`, size `h-[1em] w-[1em]` or `size-3.5` |
| Links | `#1089ff`, transition `.3s all ease`; hover: no underline, no box-shadow | no content links inside the snippet; only the dead edit anchors (recreated as buttons) |
| Canonical data | 5 rows, ALL identical: row#th "1001" · "Mark Otto" · "Japan" · "$3000" · "$1200" · edit icon. Tint SEQUENCE (top→bottom): primary blue · success green · warning amber · danger red · info teal | same KIND of content may be paraphrased; keep 6 cells × 5 rows + the tint sequence |
| Edit-icon source markup | `<a href="#">…inline SVG…</a>` | recreation SHALL use `<button type="button">` with lucide `SquarePen` + `aria-label` (identical visuals, real semantics); MUST NOT inline-copy the FontAwesome SVG path (asset-copy rule) |
| Print rules | thead `table-header-group`, cells forced white, `@page { size: a3 }` | minor; not required for parity |

## Requirements

### Requirement: Page shell and heading render

The template SHALL render a light warm-gray page shell (background
`#fafafa`, Poppins everywhere with body text at font-size 16px,
line-height 1.8, font-weight 400, color gray, content area with 7em
vertical padding) centered in a responsive container (max-width
1140px at desktop with 15px side padding; 540/720/960px at smaller
breakpoints), with ONE h2 heading "Table #10" at font-size 28px,
font-weight 400 (NOT the reboot's 500 — and NOT Tailwind preflight's
reset), color **#000**, centered, its wrapper column about 50% wide
at ≥768px with **3rem** margin-bottom. There SHALL be NO h3
subheading.

#### Scenario: Shell renders

- **GIVEN** the user visits the Rowtint home page
- **THEN** the page background is `#fafafa` (light warm-gray)
- **AND** the font family is Poppins (Google Fonts weights 400/700
  loaded; Roboto NOT loaded)
- **AND** the body text renders at font-size 16px, line-height 1.8,
  font-weight 400, color gray
- **AND** the content area has 7em vertical padding

#### Scenario: Heading renders

- **GIVEN** the page shell is rendered
- **THEN** exactly one h2 heading reads "Table #10" at font-size 28px,
  font-weight 400 (NOT the reboot's 500), color `#000`, centered
- **AND** the h2's wrapper column is centered, about 50% wide at
  ≥768px, with **3rem** margin-bottom
- **AND** no h3 subheading exists

### Requirement: Dark table shell renders with white cell text and card shadow

The template SHALL render the table inside a horizontally scrollable
wrapper; the table SHALL be width 100% with min-width 1000px,
border-collapse collapse, a `#343a40` dark default background, **white
(`#fff`) cell text** (from the dark-table rule — NOT the reboot's
`#212529`), and a soft card shadow
`0px 5px 12px -12px rgba(0,0,0,0.29)` (source value:
`rgba(0, 0, 0, 0.29)`).

#### Scenario: Table shell renders

- **GIVEN** the heading area is rendered
- **THEN** a wrapper with horizontal overflow exists below the
  heading
- **AND** the table has min-width 1000px and width 100%
- **AND** the table carries the soft card shadow and renders cell
  text in white `#fff` (dark-table inheritance)

### Requirement: Header row renders with the canonical column structure

The thead SHALL render one row of SIX th cells in order: "Invoce",
"Customer", "Ship", "Price", "Pruchased Price", **"" (empty — the
edit-icon column has no label in the source; the recreation MAY add a
visually-hidden label like "Actions" for a11y — note the choice in
the PR)** (source typos preserved — the recreation MAY fix
"Invoce"→"Invoice" and "Pruchased Price"→"Purchased Price" as a
documented micro-divergence; same KIND of content either way). The
thead row SHALL have a solid charcoal background **`#343a40`**.
Header cells SHALL render at font-size **13px**, font-weight **400**
(explicit — the final rule sets 400), color **`#fff`** (white),
`text-transform: uppercase` (CSS-driven; source text is mixed-case),
padding **20px 30px**, **no borders**. All labeled header cells SHALL
carry `scope="col"` (monorepo a11y improvement — the source omits
scope on thead cells).

#### Scenario: Header row renders

- **GIVEN** the table shell is rendered
- **THEN** the thead contains six th cells in order: "Invoce",
  "Customer", "Ship", "Price", "Pruchased Price", "" (or the
  typo-fixed spellings / visually-hidden "Actions" label)
- **AND** the header band background is charcoal `#343a40`
- **AND** header text renders at 13px / weight 400 / `#fff` /
  uppercase on the charcoal band
- **AND** header cells have 20px 30px padding and NO borders
- **AND** all labeled header cells carry `scope="col"`

### Requirement: Data rows render the canonical invoice data with the solid tint sequence

The tbody SHALL render exactly 5 data rows, each with 6 cells in
order: a row-number th with `scope="row"` plus four td cells plus an
edit-icon cell. The canonical data is identical on every row:

1. 1001 · Mark Otto · Japan · $3000 · $1200 · edit icon (row bg:
   `#1089ff` blue)
2. 1001 · Mark Otto · Japan · $3000 · $1200 · edit icon (row bg:
   `#28a745` green)
3. 1001 · Mark Otto · Japan · $3000 · $1200 · edit icon (row bg:
   `#ffc107` amber)
4. 1001 · Mark Otto · Japan · $3000 · $1200 · edit icon (row bg:
   `#dc3545` red)
5. 1001 · Mark Otto · Japan · $3000 · $1200 · edit icon (row bg:
   `#17a2b8` teal)

Copy MAY be paraphrased but SHALL keep the same kind of content
(invoice# + customer + ship-to + price + purchased price + edit
action per row) and the tint SEQUENCE above. All cell text (including
the row-number th) SHALL render **white `#fff`** at 14px, padding
`20px 30px`, border none; row-number th cells SHALL be bold
(explicit `font-bold`) and carry `scope="row"`. Row backgrounds SHALL
follow the solid sequence in order (primary `#1089ff` — the FINAL
override value, NOT `#007bff` — success `#28a745`, warning
`#ffc107`, danger `#dc3545`, info `#17a2b8`). There SHALL be NO
row-hover treatment (rows are `<tr>` elements, not links — the
source's `a.cl-bg-*:hover` rules do not apply) and NO row separator
borders.

#### Scenario: Rows render

- **GIVEN** the table is rendered
- **THEN** tbody contains 5 rows with the canonical data above (or
  same-kind paraphrases) in the tint sequence
- **AND** each row has 6 cells: row-number th (scope="row", bold) +
  customer + ship + price + purchased price + edit-icon cell
- **AND** all cell text renders white `#fff` at 14px / `20px 30px`
  padding / no borders
- **AND** row backgrounds in order are `#1089ff`, `#28a745`,
  `#ffc107`, `#dc3545`, `#17a2b8`
- **AND** rows have no hover background change and no separator rules

### Requirement: Edit icon buttons render per row

Each row's last cell SHALL render exactly one edit control —
`<button type="button">` (source uses `<a href="#">`; identical
visuals, real button semantics) — with a lucide `SquarePen` icon
(pencil-in-square, closest match to the source's FontAwesome
"fa-edit" glyph), colored **white** (source: `.cl-table tbody td .fa
{ color: #fff }`), sized ≈1em (≈14px at the cell's 14px font), with
an accessible name identifying the row's invoice (e.g. "Edit invoice
1001"). The button SHALL NOT navigate or mutate data (source anchors
go nowhere). Buttons SHALL show a visible focus-visible ring
(monorepo standard ring is acceptable) and MAY add a subtle hover
opacity change (the source has no icon-hover treatment — any hover
effect is a documented micro-divergence).

#### Scenario: Edit buttons render

- **GIVEN** the table renders
- **THEN** each of the 5 rows has exactly one edit `<button>` with a
  white `SquarePen` icon ≈14px
- **AND** each button's accessible name identifies its invoice row
  (e.g. "Edit invoice 1001")
- **AND** activating a button navigates nowhere and mutates nothing

#### Scenario: Edit button focus

- **GIVEN** the table renders
- **WHEN** the user tabs to an edit button
- **THEN** a visible focus ring appears around the button

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
`<tbody>`, `<th>`, `<td>`); labeled thead cells SHALL carry
`scope="col"`; row-header cells SHALL carry `scope="row"`; edit
controls SHALL be real buttons with accessible names identifying
their invoice row; the page SHALL have exactly one h2 (matching the
source); heading sizes/weights SHALL be set explicitly (Tailwind
preflight resets h1–h6); row-header th font-weight SHALL be set
explicitly (`font-bold`); thead label weight SHALL be set explicitly
(`font-normal`); the empty 6th thead cell MAY carry a visually-hidden
label. Known contrast divergence (white on amber `#ffc107` ≈1.9:1)
SHALL be preserved for source fidelity and noted in the PR.

#### Scenario: Table and page semantics

- **GIVEN** the page renders
- **THEN** the data table is a real `<table>` with `<thead>`/`<tbody>`
- **AND** every labeled thead cell has `scope="col"` and every
  row-header cell has `scope="row"`
- **AND** exactly one h2 ("Table #10") exists and no h3
- **AND** each edit control is a `<button>` whose accessible name
  identifies its invoice row
- **AND** heading weight (400), header-label weight (400), and
  row-header weight (bold) render as designed

## Verification checklist

- [ ] Poppins 400/700 loaded via Google Fonts `<link>` in
      `index.html` (Roboto NOT loaded — declared-but-unused in the
      source sheet)
- [ ] `@theme` tokens: `--color-page: #fafafa`,
      `--color-heading: #000`, `--color-muted: #808080`,
      `--color-headerband: #343a40`, `--color-row-primary: #1089ff`,
      `--color-row-success: #28a745`, `--color-row-warning: #ffc107`,
      `--color-row-danger: #dc3545`, `--color-row-info: #17a2b8`,
      `--color-celltext: #fff`,
      `--color-cardshadow: rgba(0,0,0,0.29)`
- [ ] Page shell: `#fafafa` background, body 16px / line-height 1.8 /
      weight 400 / color gray, content area `7em` vertical padding,
      centered container max-width 1140px / 15px gutters
      (540/720/960px breakpoints)
- [ ] Heading: single h2 "Table #10" — 28px / font-weight 400 /
      `#000`, centered, wrapper ~50% @768+ with **3rem**
      margin-bottom; NO h3 subheading; weights/sizes set EXPLICITLY
      (Tailwind preflight resets h1–h6)
- [ ] Table: `min-width: 1000px` inside an `overflow-x-auto` wrapper;
      `#343a40` dark default bg, **white `#fff` cell text**, soft
      shadow `0 5px 12px -12px rgba(0,0,0,0.29)`, border-collapse
      collapse
- [ ] thead: 6 th ("Invoce" · "Customer" · "Ship" · "Price" ·
      "Pruchased Price" · "" — or typo-fixed / visually-hidden
      "Actions") on a **charcoal `#343a40` band** — **13px / weight
      400 (explicit) / `#fff` / uppercase** / `20px 30px` padding /
      NO borders / `scope="col"` on all labeled cells
- [ ] tbody: 5 rows with canonical invoice data + tint sequence
      (**`#1089ff` · `#28a745` · `#ffc107` · `#dc3545` ·
      `#17a2b8`** — primary uses the `#1089ff` final override, NOT
      `#007bff`); row-header th bold with `scope="row"`; all cell
      text white 14px / `20px 30px` padding / no borders; no
      row-hover treatment
- [ ] Edit buttons: `<button type="button">` per row with white lucide
      `SquarePen` icon ≈14px and row-identifying aria-label; no
      navigation on activation; visible focus ring
- [ ] Responsive: table scrolls in wrapper below 1000px; layout
      intact at narrow viewports
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references
      anywhere in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh rowtint`; PR
      `feat/template-rowtint` with source slug + preview URL
      (`bootstrap/` path) + tokens in the description
