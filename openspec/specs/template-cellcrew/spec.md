# Template: Cellcrew (Table)

## Purpose

Cellcrew is a light data-table showcase page with a custom-checkbox
select-all system and an overlapping circular-avatar "crew" column in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Css Table 19" template (source:
https://colorlib.com/wp/template/css-table-19/ — a single-page data-table
snippet: WHITE page `#fff`, dark ink `#212529` heading + bold dark header
labels, `#777` weight-300 cells separated by thin `#dee2e6` hairlines,
`#b3b3b3` sub-blurbs, BLUE checkbox states, a REAL active/hover row
highlight — `.active` rows (and hover) tint to `rgba(0,0,0,0.03)` with
`#bfbfbf` top/bottom hairlines — and the SIGNATURE headerless 6th column
of overlapping CIRCULAR avatar clusters — no navbar, no framework) built
under a DIFFERENT name (Cellcrew — "cell" for the table cells, matching
the sibling idiom cellgrid/cellswitch; "crew" for the avatar-crew
clusters in the support column; single lowercase word), per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `css-table-19`
- **Source:** https://colorlib.com/wp/template/css-table-19/
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-19/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-19/**
  (HTTP 200, 9,915 bytes, `<title>Table #9</title>`). Implementers must
  use the `bootstrap/` path — do not re-derive the slug-only URL.
- **Preview CSS:** `css/style.css?v=61f5c8ec` (11,771 bytes) — a single
  self-contained sheet ("Every style this snippet uses, and nothing
  else. No framework, no build step."). It reverts Bootstrap-reboot base
  styles (`all: revert` on common elements), then styles from browser
  defaults: reboot block, `@font-face` Roboto 300/400 (self-hosted woff2),
  `.cl-container` (Bootstrap-like responsive container 540/720/960/1140px),
  `.cl-table` + `.cl-table-responsive` (NOTE: NO `.cl-table-striped`
  class — NO zebra tint; and the base `.cl-table th/td` border-top rule
  is KEPT for tbody cells — see tokens), `.content` (7rem vertical
  padding), the `.custom-table` overrides (borderless thead, `#777`
  weight-300 cells, active/hover tint + hairlines, `.persons` avatar
  cluster component), the custom checkbox component (`.control` /
  `.control__indicator`), and an `@media print` block (A3 page, print
  min-widths — PRINT-ONLY; on screen the layout stays responsive).
- **Scripts (source):** `js/snippet.js?v=aba81c02` (1,000 bytes, no
  jQuery, no framework) — TWO behaviors, verified on the live DOM
  2026-09-30 (IDENTICAL machinery to css-table-17/18):
  - `CHECK_ALL`: the header `<input class="js-check-all">` (inside the
    first `th`) on change sets `.checked` on EVERY
    `th input[type="checkbox"]` (header box + ALL row checkboxes — row
    checkboxes live inside `<th scope="row">` cells) and toggles class
    `active` on each checkbox's closest `<tr>`.
  - `CHECK_ROWS`: every `th[scope="row"] input[type="checkbox"]` on
    change toggles class `active` on its closest `<tr>`.
  - **CRITICAL — `.active` AND row hover ARE STYLED here** (subtly):
    `.custom-table tbody tr.active th/td, ... tr:hover th/td { background:
    rgba(0, 0, 0, 0.03) }` plus 1px `#bfbfbf` hairlines top/bottom via
    `tr th:before/:after, tr td:before/:after` pseudo-elements
    (`opacity: 0; visibility: hidden` normally → `1; visible` on
    hover/active). Checked/hovered rows VISIBLY tint light-gray. This is
    NOT the css-table-17 "never styled" trap — the highlight is real (just
    fainter than Cellgrid's `#2e2e36`).
- **Icons:** the checkbox checkmark uses the `icomoon` glyph font
  (`@font-face icomoon` → `../fonts/icomoon-subset.woff2`, glyph
  `\e5ca` rendered white inside the checked indicator). NEVER copy the
  font — use a lucide `Check` icon or an inline SVG checkmark.
- **Fonts:** Roboto — load **Google Fonts `<link>` (300, 400; 500 for the
  h2)** in `index.html` (the preview self-hosts Roboto 300/400 via
  @font-face woff2; reboot gives h2 weight 500; body override is 300).
- **Assets:** the source page has FIVE avatar images
  (`images/person_1.jpg` … `person_5.jpg`) — circular crew portraits.
  NEVER copy them — use `https://picsum.photos/seed/cellcrew-<n>/72/72`
  (n = 1..5, deterministic per template) rendered as ~36px circles.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/css-table-19.jpg
  (AVIF data despite the .jpg extension — HTTP 200, 28,277 bytes,
  1200×972; visually analyzed 2026-09-30 after AVIF→PNG conversion;
  matches the live preview — WHITE page, dark "Table #9" heading
  top-left, 5-column header (checkbox · Order · Sales · Description ·
  Support) over 6 body columns, light-gray active-row bands on the
  CHECKED rows 1/2/3/6, unchecked rows white with gray-bordered
  checkboxes, thin `#dee2e6` row separators, overlapping circular avatar
  clusters in the headerless 6th column — 5 avatars in rows 1/4, 3 in
  rows 2/5, 2 in rows 3/6).
- **TEMPLATES.md:** "## Table (25)" section, line 2878
  (`- [ ] **Css Table 19**`). Slug `css-table-19` appears exactly ONCE in
  TEMPLATES.md.
- **Naming check:** "cellcrew" collides with NOTHING in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, or TEMPLATES.md content (verified
  2026-09-30 — zero hits across all pools; fits the sibling naming idiom
  gridline / gridspan / rowcard / rowglow / gridpane / nightgrid /
  cellswitch / cellgrid).

## Design tokens

(extracted from the live preview stylesheet `css/style.css` and verified
against the screenshot; CSS values are canonical)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | Google Fonts 300/400/500; body 16px/**300**/1.5, color `#212529` (reboot) |
| Page background | `#fff` WHITE | the body override at the bottom of the sheet — the LIGHT sibling of Cellgrid's charcoal |
| Heading | `h2 { font-size: 20px }`, reboot weight 500, color **`#212529` (DEFAULT DARK INK — NOT white)**, `.cl-mb-5` → `margin-bottom: 3rem` | "Table #9" or paraphrase, rendered on the white page ABOVE the table |
| Table header labels | color **`#212529`** (inherited body ink — thead carries no color override), default **bold** weight (browser default for `th`; the reboot block does not reset it), **normal case** (NO text-transform, NO letter-spacing), borderless (`thead th { border-top: none; border-bottom: none !important }`) | `.custom-table thead tr, .custom-table thead th` — 5 header cells: checkbox · Order · Sales · Description · Support |
| Table body text | `#777`, `font-weight: 300` | `.custom-table tbody th, .custom-table tbody td`; `padding: 20px` top/bottom + `0.75rem` horizontal, `vertical-align: top`, `transition: .3s all ease` |
| Row separators (SIGNATURE vs Cellgrid) | `border-top: 1px solid #dee2e6` KEPT on tbody `th/td` | the base `.cl-table th, .cl-table td` rule sets this; the `.custom-table tbody` rule does **NOT** set `border: none` — rows are separated by thin `#dee2e6` hairlines (Cellgrid REMOVED borders; this variant keeps them) |
| Row background (normal) | transparent (white page shows through) — NO background override on normal rows | `.custom-table tbody tr th, td` carry no `background` outside hover/active |
| Row background (active/hover — SIGNATURE) | `rgba(0, 0, 0, 0.03)` + 1px `#bfbfbf` hairlines top/bottom | `.custom-table tbody tr.active th/td, ... tr:hover th/td { background: rgba(0,0,0,0.03) }`; the hairlines come from `tr th/td :before/:after` pseudo-elements (`content: ""; height: 1px; background: #bfbfbf; opacity: 0; visibility: hidden` normally → `opacity: 1; visibility: visible` on hover/active; `top: -1px` for :before, `bottom: -1px` for :after). Subtler than Cellgrid's `#2e2e36` shift but REAL — checked/hovered rows visibly read as light-gray bands |
| Occupation/Sales sub-blurb | `#b3b3b3`, `font-weight: 300`, 80% font-size | `.custom-table tbody ... small` + `.cl-d-block` (`display: block !important`); "Far far away, behind the word mountains" under each sales pitch |
| Avatar cluster — `.persons` (SIGNATURE) | `ul.persons { padding: 0; margin: 0 }`; `li { padding: 0; margin: 0 0 0 -15px; list-style: none; display: inline-block }` (negative left margin on EVERY li — overlaps each avatar onto the previous by 15px); `li a { display: inline-block; width: 36px }`; `li a img { border-radius: 50%; max-width: 100% }` | circular ~36px portraits, overlapping right-to-left (each next avatar steps ~21px: 36 − 15). Avatar counts per row in the source: **5, 3, 2** (rows 4–6 repeat 1–3) |
| Avatar links (global) | `a { color: #007bff }`, `a:hover { color: #0056b3 }`, `transition: .3s all ease`; `a, a:hover { text-decoration: none !important }` | the ONLY anchors in the page are the avatar wrappers (no visible text links elsewhere) — color is invisible on images; keep no-underline |
| Checkbox unchecked | 20×20px, `border-radius: 4px`, `border: 2px solid #ccc` (LIGHT gray — like Cellswitch, NOT Cellgrid's dark `#3f3f47`), transparent background | `.control__indicator` — the native input is visually hidden (`position: absolute; z-index: -1; opacity: 0`) |
| Checkbox hover/focus | indicator border → `#007bff` | `.control:hover input ~ .control__indicator` / `:focus` |
| Checkbox checked | indicator `border: 2px solid #007bff; background: #007bff` + WHITE checkmark glyph (source icomoon `\e5ca` — replace with lucide Check / inline SVG), centered `translate(-50%, -52%)` | `.control input:checked ~ .control__indicator(:after)` |
| Checkbox disabled | bg `#e6e6e6` opacity 0.6 border `#ccc`; disabled+checked bg `#007bff` opacity .2 | `.control input:disabled ...` — not exercised in the live DOM; implement only if cheap |
| Container | max-width `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like responsive container) |
| Table | `width: 100%; min-width: 900px` (`.custom-table`); cell `padding: 0.75rem` horizontal + 20px top/bottom; `vertical-align: top`; `border-collapse: collapse`; thead borderless; tbody cells KEEP the 1px `#dee2e6` top border | |
| Responsive wrapper | `display: block; width: 100%; overflow-x: auto` | `.cl-table-responsive` — horizontal scroll below the 900px min-width |
| Content area | `padding: 7rem 0` | `.content` — generous whitespace above/below the table |
| Print block | `@media print { @page { size: a3 }; thead { display: table-header-group }; tr, img { page-break-inside: avoid }; h2 { orphans: 3; widows: 3; page-break-after: avoid }; body, .cl-container { min-width: 992px !important }; .cl-table { border-collapse: collapse !important }; td, th { background-color: #fff !important } }` | print-orientation only — do NOT apply the 992px min-width on screen |

## Section structure (from the live DOM)

The source preview is a SINGLE-VIEW snippet page — one heading + one
light data table with checkboxes and an avatar-crew column. Section
order (1:1):

1. **Page shell** — WHITE background `#fff`, Roboto throughout (body
   weight 300, ink `#212529`); `.content` wraps everything with `7rem`
   vertical padding; `.cl-container` centers the content (1140px
   max-width desktop, 15px gutters, responsive down to 540px).
2. **Heading** — `<h2 class="cl-mb-5">Table #9</h2>` — 20px, weight 500,
   DARK INK `#212529` (NOT white — this is the light variant), 3rem
   margin-bottom, rendered on the white page ABOVE the table. (Text may
   be paraphrased — same kind of short label.)
3. **Responsive wrapper** — `.cl-table-responsive` — `display: block;
   width: 100%; overflow-x: auto` around the table only.
4. **Data table** —
   - `<table class="cl-table custom-table">` — `min-width: 900px`,
     `width: 100%`, `border-collapse: collapse`. NO
     `cl-table-striped` class — there is NO zebra striping.
   - **thead (borderless, DARK bold normal-case labels): FIVE columns**
     — (1) `<th scope="col">` containing the select-all checkbox
     `<label class="control control--checkbox"><input class="js-check-all"/>`
     `<div class="control__indicator"/></label>`; (2) `Order`; (3)
     `Sales`; (4) `Description`; (5) `Support`. Header cells: color
     `#212529`, default bold weight, normal case, borderless.
   - **tbody: SIX data rows — but SIX BODY CELLS vs FIVE HEADERS (source
     quirk, reproduce 1:1):** each row has (1) `<th scope="row">`
     checkbox cell, (2) Order td, (3) Sales td, (4) Description td
     (+ small sub-blurb), (5) Support td (phone number), (6) **avatar
     cluster td (`<ul class="persons">`) — the 6th column has NO header
     label** (the browser renders a 6th unlabeled column; keep it
     unlabeled, same KIND of structure). Rows are separated by the
     1px `#dee2e6` top borders (NO spacer rows in this variant — unlike
     Cellgrid's 3px gaps).
   - **Cell 1 (checkbox) — a `<th scope="row">`:** contains
     `<label class="control control--checkbox">` + hidden `<input
     type="checkbox">` + `.control__indicator` div — ALL 6 row
     checkboxes + the header select-all are UNCHECKED in the live DOM,
     and NO row carries the `active` class.
   - **Cell 2 (Order):** plain 4-digit text, `#777`/300.
   - **Cell 3 (Sales):** sales-pitch title, `#777`/300 (e.g. "Sales
     Pitch - 2019", "Social Media Planner", "Website Agreement").
   - **Cell 4 (Description):** description sentence + a block-level small
     blurb underneath: "Far far away, behind the word mountains" —
     `#b3b3b3`, weight 300, 80% size. Same blurb text in every row.
   - **Cell 5 (Support):** +CC-formatted phone number, `#777`/300.
   - **Cell 6 (avatar cluster — headerless):** `<ul class="persons">`
     with circular overlapping portraits (see tokens). Avatar counts in
     the source: **5 / 3 / 2** (rows 4–6 repeat rows 1–3).
   - There is NO 7th Details column, NO iOS switches, NO name links in
     this variant.
   - **Demo data (same KIND of content; paraphrase OK):** 3 unique rows
     DUPLICATED to make 6 (rows 4–6 repeat rows 1–3): 4-digit order
     numbers (1392 / 4616 / 9841), sales-pitch titles (Sales Pitch -
     2019 / Social Media Planner / Website Agreement), the same
     description blurb in every row, +CC phone numbers (+63 983 0962 971
     / +02 020 3994 929 / +01 352 1125 0192), avatar clusters 5/3/2.
5. **Interactive controls (React state, NOT pure CSS)** —
   - **Select-all:** the header checkbox toggles ALL 6 row checkboxes
     AND the `active` highlight on every row (checked → tinted band,
     unchecked → normal).
   - **Row checkboxes:** each toggles its own checked state AND its own
     row's `active` highlight (bg `rgba(0,0,0,0.03)` + `#bfbfbf`
     hairlines top/bottom).
   - **Hover:** hovering any data row gives the SAME visual treatment
     as `active` (tint + hairlines).
   - **Initial state:** all checkboxes unchecked, all rows normal (white
     bg, `#777` text) — per the live DOM. The screenshot shows rows
     1/2/3/6 checked + tinted, which is the POST-CLICK interaction
     state, not the initial load.
6. **Component Dock attribution footer** — the source snippet page has
   NO footer, but the monorepo mandates that every template's footer
   links `https://www.componentdock.com/` (branded "Component Dock").
   Add a MINIMAL attribution line below the table area. Zero ColorLib
   references anywhere in the app.

## Sibling context (for implementers)

This is the ninth "CSS Table" variant prepped in this monorepo; the
sources are near-identical snippet pages — do NOT copy tokens across:

- **Gridline** (ColorLib `css-table-11`, "Table #1"): WHITE page,
  borderless header, plain `#dee2e6` row separators, custom checkboxes +
  select-all (shares the checkbox machinery), NO hover tint, NO
  `.active` styling, no sub-blurb, no avatars.
- **Rowglow** (ColorLib `css-table-12`, "Table #2"): light-GRAY page
  `#efefef`, rows separated by whitespace; signature = rows turn fully
  WHITE on hover (no radius, no shadow).
- **Gridspan** (ColorLib `css-table-13`, "Table #3"): white page,
  `#dee2e6` separators, blue-tinted hover/active rows with 1px
  `#007bff` hairlines, `#b3b3b3` sub-blurb.
- **Rowcard** (ColorLib `css-table-14`, "Table #4"): gray page
  `#efefef`, WHITE rounded row-cards (radius 7px) separated by 10px
  transparent gaps, hover shadow lift, blue name links; checked state
  visible ONLY on the checkbox (`.active` NEVER styled).
- **Gridpane** (ColorLib `css-table-15`, "Table #5"): WHITE page +
  rounded GRAY panel `#efefef` wrapping the table, uppercase 12px
  letter-spaced header labels on the gray, white row-cards with gaps,
  checked rows dim to `opacity: .4`.
- **Nightgrid** (ColorLib `css-table-16`, "Table #6"): dark plum-charcoal
  page `#3c373e`, white UPPERCASE 11px header labels, faint
  `rgba(255,255,255,0.3)` links, yellow `#fdd114` hover.
- **Cellswitch** (ColorLib `css-table-17`, "Table #7"): WHITE page,
  BLACK normal-case header labels, plain blue `#007bff` name + Details
  links, iOS green `#4cd964` toggle switches in the Name column,
  checkbox column + select-all, `#ccc` checkbox borders (SAME as
  Cellcrew), NO row hover and NO `.active` styling (the class is toggled
  but NEVER styled). 7 columns (has a Details column). NO avatars.
- **Cellgrid** (ColorLib `css-table-18`, "Table #8"): the DARK variant —
  charcoal `#19191d` page, dark `#25252b` rows separated by 3px
  transparent spacer gaps, WHITE normal-case header labels, gray
  `#b3b3b3` name links, DARK `#3f3f47` checkbox borders, **`.active` +
  hover highlight IS STYLED** — checked/hovered rows shift to `#2e2e36`
  with WHITE text (dramatic), 6 columns (NO Details column), first body
  cell is `<th scope="row">`, NO avatars, NO zebra striping, borders
  REMOVED on cells.
- **Cellcrew** (this spec, ColorLib `css-table-19`, "Table #9"): the
  LIGHT counterpart — WHITE `#fff` page, dark ink `#212529` heading +
  bold dark normal-case header labels (5 labels), `#777`/300 cells with
  **1px `#dee2e6` row separators KEPT** (borders NOT removed — unlike
  Cellgrid), **REAL but SUBTLE active/hover highlight** (`rgba(0,0,0,
  0.03)` tint + `#bfbfbf` hairlines — the checked rows read as
  light-gray bands, unlike Cellswitch/Rowcard where `.active` was never
  styled), `#ccc` LIGHT checkbox borders (Cellgrid: dark `#3f3f47`),
  `#b3b3b3` sub-blurb, **SIGNATURE headerless 6th column of overlapping
  circular avatar clusters** (`ul.persons`, 36px circles, -15px
  overlap — the ONLY css-table variant with imagery), 6 body columns vs
  5 header labels (source quirk), 6 rows (3 unique ×2), NO Details
  column, NO iOS switches, NO name links. Distinguish from Gridline by:
  the avatar column, sub-blurb, active/hover tint, and 6-vs-5 column
  quirk. Distinguish from Cellgrid by: light page, kept `#dee2e6`
  borders, subtle tint vs dramatic shift, `#ccc` vs `#3f3f47`
  checkbox borders, avatars.

## Requirements

### Requirement: Page shell and heading render

The system SHALL render a WHITE page shell with Roboto typography and a
short DARK h2 heading above the table.

#### Scenario: Shell renders

- **GIVEN** the user visits the Cellcrew home page
- **THEN** the page background SHALL be `#fff` (white)
- **AND** the font family SHALL be Roboto (Google Fonts weights 300, 400,
  500 loaded)
- **AND** the body font-weight SHALL be 300 with color `#212529`
- **AND** the content area SHALL have about 7rem vertical padding
- **AND** a centered container (max-width 1140px at desktop, 15px side
  padding; 540/720/960px at smaller breakpoints) SHALL hold the page
  content

#### Scenario: Heading renders

- **GIVEN** the page shell is visible
- **THEN** an h2 heading labeled "Table #9" (or a paraphrase of the same
  short label) SHALL display at font-size 20px, font-weight 500, color
  **DARK INK `#212529`** (NOT white — this is the light variant)
- **AND** it SHALL have about 3rem margin-bottom above the table
- **AND** it SHALL render on the white `#fff` page background

### Requirement: Data table renders with 5 header labels, 6 body columns, and kept row separators

The system SHALL render a light data table whose `#777` weight-300 cells
read on white, separated by thin `#dee2e6` hairlines, with a checkbox
column (select-all in the header), a sub-blurb under each description,
and the headerless 6th avatar-cluster column.

#### Scenario: Table wrapper and base

- **GIVEN** the page shell is visible
- **THEN** a responsive wrapper (display block, overflow-x auto) SHALL
  hold a table with width 100% and min-width 900px
- **AND** the table SHALL use `border-collapse: collapse`
- **AND** thead cells SHALL have NO top or bottom border (borderless
  header)
- **AND** tbody cells SHALL KEEP the base `border-top: 1px solid
  #dee2e6` (rows separated by thin gray hairlines — borders are NOT
  removed in this variant, unlike Cellgrid)
- **AND** the table SHALL NOT carry any zebra/stripe class (there is NO
  striping in this variant)
- **AND** there SHALL be NO spacer rows (rows are contiguous, separated
  only by the 1px `#dee2e6` borders — unlike Cellgrid's 3px gaps)

#### Scenario: Header labels render

- **GIVEN** the table is visible
- **THEN** the header row SHALL list FIVE columns: a checkbox cell
  (select-all control), "Order", "Sales", "Description", and "Support"
- **AND** each header cell SHALL use `scope="col"`
- **AND** the header labels SHALL render at default bold weight, color
  **DARK INK `#212529`**, **normal case** (NO uppercase, NO
  letter-spacing)
- **AND** the header cells SHALL have NO top or bottom border

#### Scenario: Body rows render with six cells (headerless avatar column)

- **GIVEN** the table is visible
- **THEN** six body data rows SHALL display (the source duplicates its
  3 unique rows to fill 6 — rows 4–6 repeat rows 1–3; same KIND of demo
  data)
- **AND** each row SHALL contain SIX body cells: a checkbox cell
  (`<th scope="row">`), order number, sales-pitch title, description
  (+ sub-blurb), phone number, avatar cluster
- **AND** the 6th (avatar) column SHALL have NO header label (the
  source's 5-label/6-body-cell mismatch — reproduce 1:1)
- **AND** body cell text SHALL be `#777` at font-weight 300
- **AND** cell padding SHALL be 20px vertical + 0.75rem horizontal with
  vertical-align top
- **AND** normal (non-active, non-hovered) rows SHALL render on the
  white page (transparent cell backgrounds) with the 1px `#dee2e6` top
  border on each cell
- **AND** the rows SHALL be contiguous (NO spacer rows, NO gaps)

#### Scenario: Description sub-blurb renders

- **GIVEN** the body rows render
- **THEN** each Description cell SHALL contain the description sentence
  and, beneath it, a block-level small blurb in `#b3b3b3` at
  font-weight 300 and 80% font-size
- **AND** the blurb text SHALL be the same kind of placeholder sentence
  in every row (e.g. "Far far away, behind the word mountains" or a
  paraphrase of equal length)

#### Scenario: Avatar cluster renders (SIGNATURE)

- **GIVEN** the body rows render
- **THEN** each row's 6th cell SHALL contain an unstyled-list cluster
  of circular portraits (`ul`/`li`, list-style none, padding/margin 0)
- **AND** each avatar SHALL render as a circle (~36px wide,
  `border-radius: 50%`) via a wrapper link of width 36px
- **AND** avatars SHALL overlap each other by 15px (negative left
  margin on each `li` — each next avatar steps ~21px)
- **AND** the avatar counts per row SHALL be 5 / 3 / 2 for the three
  unique rows (rows 4–6 repeating 1–3; paraphrase-OK)
- **AND** the avatar images SHALL be deterministic placeholders
  (`https://picsum.photos/seed/cellcrew-<n>/72/72`, n = 1..5) — the
  source's own images SHALL NOT be copied
- **AND** the avatars SHALL have NO visible text and NO underline

#### Scenario: Content fidelity

- **GIVEN** the body rows render
- **THEN** the rows SHALL contain the same KIND of demo data as the
  source: 4-digit order ids, sales-pitch titles, the shared description
  blurb, +CC-formatted phone numbers, avatar clusters
- **AND** exact strings MAY be paraphrased while keeping the same
  structure
- **AND** the duplicate-row pattern (rows 4–6 repeating 1–3) MAY be
  kept or reduced — same KIND either way
- **AND** there SHALL be NO Details column, NO iOS switches, and NO
  name links (this variant ends at the avatar cluster)

### Requirement: Checkboxes render with custom styling, select-all, and active-row highlight

The system SHALL render custom-styled checkboxes (a checkbox column
with a select-all header control) and reimplement the select-all and
per-row toggle behavior in React state — with the `active` row highlight
(this stylesheet styles it — the checked-row highlight IS part of the
design, subtly).

#### Scenario: Checkbox visual states

- **GIVEN** the table is visible
- **THEN** every data row SHALL have a checkbox in its first cell (a
  `<th scope="row">` cell), and the header's first cell SHALL have the
  select-all checkbox
- **AND** an unchecked checkbox SHALL render as a 20×20px square,
  border-radius 4px, 2px solid `#ccc` border (LIGHT gray — like
  Cellswitch, NOT Cellgrid's dark `#3f3f47`), transparent background
- **AND** the native input SHALL be visually hidden (not the browser
  default checkbox)
- **AND** on hover/focus the indicator border SHALL turn `#007bff`
- **AND** a checked checkbox SHALL render as a `#007bff` filled square
  with a WHITE checkmark icon (lucide Check or inline SVG — the source
  uses an icomoon glyph, which must NOT be copied)
- **AND** all row checkboxes and the header select-all SHALL start
  UNCHECKED (matching the live source DOM)

#### Scenario: Select-all toggles every row checkbox AND highlights every row

- **GIVEN** the table is visible with all checkboxes unchecked
- **WHEN** the user checks the header select-all checkbox
- **THEN** every row checkbox SHALL become checked
- **AND** every data row SHALL show the active highlight: background
  `rgba(0, 0, 0, 0.03)` (light-gray band) + 1px `#bfbfbf` hairlines
  top/bottom
- **WHEN** the user unchecks the header select-all checkbox
- **THEN** every row checkbox SHALL become unchecked
- **AND** every data row SHALL return to its normal look (transparent
  background on white, `#777` text, `#dee2e6` separators)
- **AND** the header checkbox's checked state SHALL be reflected in its
  visual indicator (blue fill + white check)

#### Scenario: Row checkbox toggles its own state and highlight

- **GIVEN** the table is visible with all checkboxes unchecked
- **WHEN** the user checks a row checkbox
- **THEN** that row's checkbox SHALL become checked
- **AND** that row SHALL show the active highlight (bg
  `rgba(0,0,0,0.03)` + `#bfbfbf` hairlines)
- **AND** NO other row's checkbox or highlight SHALL change
- **AND** the header select-all checkbox SHALL NOT auto-check (the
  source JS does not sync the header box from row state)
- **WHEN** the user unchecks it
- **THEN** that row's checkbox SHALL return to unchecked
- **AND** that row SHALL return to its normal look

#### Scenario: Hover gives the active treatment

- **GIVEN** the table is visible
- **WHEN** the user hovers over a data row
- **THEN** that row SHALL show the same visual treatment as active:
  background `rgba(0, 0, 0, 0.03)` + 1px `#bfbfbf` hairlines top/bottom
- **WHEN** the pointer leaves the row
- **THEN** the row SHALL return to its prior state (normal, or active
  if its checkbox is checked — hover must not clear the checked
  highlight)

### Requirement: Responsive table behavior

The system SHALL keep the light table usable on narrow viewports via
horizontal scrolling inside the wrapper.

#### Scenario: Narrow viewport scrolls horizontally

- **GIVEN** the viewport is narrower than the table min-width (900px)
- **THEN** the table SHALL scroll horizontally within its wrapper
- **AND** the page layout (heading, container padding, footer) SHALL
  stay intact
- **AND** no horizontal overflow SHALL escape the wrapper
- **AND** the print-only `min-width: 992px` body rule from the source
  SHALL NOT be applied on screen

### Requirement: Component Dock attribution footer

The system SHALL include the monorepo-mandated Component Dock
attribution link and SHALL NOT reference ColorLib anywhere in the app.

#### Scenario: Attribution present

- **GIVEN** the page footer area is rendered
- **THEN** a minimal attribution line SHALL link
  https://www.componentdock.com/ branded "Component Dock"
- **AND** NO ColorLib attribution or links SHALL appear anywhere in the
  page

### Requirement: Accessibility (global semantics)

The system SHALL render real table semantics, labeled controls, and
reachable interactive elements.

#### Scenario: Table and page semantics

- **GIVEN** the page is rendered
- **THEN** the table SHALL use thead/tbody with th `scope="col"` on
  headers and th `scope="row"` on the checkbox cells (the source
  pattern)
- **AND** the heading hierarchy SHALL contain a single h2
- **AND** the select-all and row checkboxes SHALL be real checkbox
  inputs associated with their labels (visually hidden input + label,
  per the source pattern)
- **AND** all interactive elements SHALL be keyboard reachable with
  visible focus states (checkbox blue-border focus)
- **AND** the active highlight SHALL be reflected in programmatic state
  (checked rows are the checked state — not color alone)
- **AND** the avatar cluster images SHALL have meaningful alt text (or
  empty alt if decorative) and SHALL be keyboard-safe (the wrappers are
  `#` links — keep them focusable but non-disruptive)
- **AND** the demo data SHALL render as real table content (not
  presentational divs)

## Verification checklist

- [ ] Roboto 300/400/500 loaded via Google Fonts `<link>` in `index.html`
- [ ] `@theme` tokens: `--color-page: #fff`, `--color-heading: #212529`,
      `--color-header: #212529`, `--color-muted: #777`,
      `--color-blurb: #b3b3b3`, `--color-separator: #dee2e6`,
      `--color-hairline: #bfbfbf`, `--color-row-active: rgba(0,0,0,0.03)`,
      `--color-checkbox: #007bff`, `--color-checkbox-border: #ccc`;
      keep the `injectUiSource()` vite pattern
- [ ] Page shell: WHITE `#fff` background, Roboto weight 300, content
      area `7rem` vertical padding, centered container max-width 1140px
      / 15px gutters (540/720/960px breakpoints)
- [ ] Heading "Table #9" (or paraphrase) — 20px / weight 500 / DARK INK
      `#212529` (NOT white), 3rem margin-bottom, on the white page above
      the table
- [ ] Responsive wrapper (`overflow-x-auto`) around the table;
      `min-width: 900px`; `border-collapse: collapse`; thead borderless;
      tbody cells KEEP 1px `#dee2e6` top borders; NO stripe/zebra class;
      NO spacer rows
- [ ] Header labels: bold weight / `#212529` dark ink / NORMAL CASE
      (no uppercase, no letter-spacing), borderless thead, FIVE columns
      (checkbox cell, Order, Sales, Description, Support),
      `scope="col"`
- [ ] Six data rows with SIX cells each; cell text `#777` at weight 300;
      20px vertical + 0.75rem horizontal cell padding; normal rows
      transparent (white page shows), 1px `#dee2e6` separator; contiguous
      rows (no gaps)
- [ ] Description cells include the block-level `#b3b3b3` / 300 / 80%
      sub-blurb
- [ ] Avatar cluster (SIGNATURE): headerless 6th column; circular ~36px
      portraits (`picsum.photos/seed/cellcrew-<n>/72/72`, NEVER the
      source images); 15px overlap per avatar; counts 5/3/2 per unique
      row; no underline, no text
- [ ] Checkboxes: visually hidden native input + 20×20px / radius 4px /
      2px `#ccc` indicator (LIGHT border); hover/focus border `#007bff`;
      checked = `#007bff` fill + WHITE checkmark (lucide Check / inline
      SVG — NEVER the icomoon font); all row checkboxes + select-all
      start unchecked
- [ ] Select-all: header checkbox checks/unchecks ALL row checkboxes AND
      toggles the active highlight on every row via React state
- [ ] Active/hover highlight (THE signature): checked rows + hovered
      rows tint to `rgba(0,0,0,0.03)` with 1px `#bfbfbf` hairlines
      top/bottom; unchecked+unhovered rows return to white/`#777` with
      `#dee2e6` separators; hover must not clear a checked row's
      highlight; row checkbox toggles ONLY its own row; header box does
      NOT auto-sync from row state
- [ ] Responsive: horizontal scroll below 900px; layout intact; the
      print-only 992px min-width NOT applied on screen
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh cellcrew`; PR
      `feat/template-cellcrew` with source slug `css-table-19` + the
      `bootstrap/` preview path + tokens in the description
