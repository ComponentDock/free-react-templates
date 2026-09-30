# Template: Cellgrid (Table)

## Purpose

Cellgrid is a dark data-table showcase page with custom checkboxes and
select-all row highlighting in the free-react-templates monorepo. It is
an original React recreation of the ColorLib free "Css Table 18" template
(source: https://colorlib.com/wp/template/css-table-18/ — a single-page
data-table snippet: CHARCOAL page `#19191d`, dark row cards `#25252b`
separated by thin 3px transparent spacer gaps, WHITE normal-case header
labels, faint-gray `#777` weight-300 cells with `#b3b3b3` sub-blurbs and
gray `#b3b3b3` name links, BLUE checkbox states, and the SIGNATURE
checked/active-row highlight — `.active` rows (and hover) shift to
`#2e2e36` with WHITE text and white links — no navbar, no imagery, no
framework) built under a DIFFERENT name (Cellgrid — the table cells form
a grid of dark rows; single lowercase word), per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `css-table-18`
- **Source:** https://colorlib.com/wp/template/css-table-18/
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-18/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-18/**
  (HTTP 200, 6,005 bytes, `<title>Table #8</title>`). Implementers must
  use the `bootstrap/` path — do not re-derive the slug-only URL.
- **Preview CSS:** `css/style.css?v=264e2b5b` (11,308 bytes) — a single
  self-contained sheet ("Every style this snippet uses, and nothing
  else. No framework, no build step."). It first reverts Bootstrap-reboot
  base styles (`all: revert` on common elements), then styles from browser
  defaults: reboot block, `@font-face` Roboto 300/400 (self-hosted woff2),
  `.cl-container` (Bootstrap-like responsive container 540/720/960/1140px),
  `.cl-table` + `.cl-table-responsive` (NOTE: NO `.cl-table-striped`
  class on this table — there is NO zebra tint), `.content` (7rem
  vertical padding), the `.custom-table` overrides (dark page/rows,
  active/hover row highlight, gray row links), the custom checkbox
  component (`.control` / `.control__indicator` — see tokens), and an
  `@media print` block (`@page { size: a3 }`, thead `table-header-group`,
  `tr` page-break-inside avoid, body/container `min-width: 992px !important`
  — PRINT-ONLY; on screen the layout stays responsive). Note: the sheet
  reverts ALL base styles on common elements first — in Tailwind this is
  unnecessary (Tailwind's preflight is already the base).
- **Scripts (source):** `js/snippet.js?v=7bf65063` (1,000 bytes, no
  jQuery, no framework) — TWO behaviors, verified on the live DOM
  2026-09-30:
  - `CHECK_ALL`: the header `<input class="js-check-all">` (inside the
    first `th`) on change sets `.checked` on EVERY
    `th input[type="checkbox"]` (the header box itself + ALL row
    checkboxes — the row checkboxes live inside `<th scope="row">`
    cells) and toggles class `active` on each checkbox's closest `<tr>`.
  - `CHECK_ROWS`: every `th[scope="row"] input[type="checkbox"]` on
    change toggles class `active` on its closest `<tr>`.
  - **CRITICAL — UNLIKE css-table-17 (Cellswitch):** this stylesheet
    styles the `.active` class AND row hover:
    `.custom-table tbody tr.active th/td, ... tr:hover th/td { color:
    #fff; background: #2e2e36 }` and `tr.active a / tr:hover a { color:
    #fff }`, plus a faint hover shadow
    (`0 2px 10px -5px rgba(0,0,0,0.1)` on `tr:not(.spacer):hover`).
    **Checked rows VISIBLY highlight** (white text on the lighter
    `#2e2e36` bg). REIMPLEMENT this in React state: a checked row (or
    hovered row) gets the `active` visual treatment. Do NOT copy the
    css-table-17 "never styled" trap — it does NOT apply here.
- **Icons:** the checkbox checkmark uses the `icomoon` glyph font
  (`@font-face icomoon` → `../fonts/icomoon-subset.woff2`, glyph
  `\e5ca` rendered white inside the checked indicator). NEVER copy the
  font — use a lucide `Check` icon or an inline SVG checkmark.
- **Fonts:** Roboto — load **Google Fonts `<link>` (300, 400; 500 for the
  h2)** in `index.html` (the preview self-hosts Roboto 300/400 via
  @font-face woff2; weights used: 300 = body + table cells + sub-blurb,
  500 = h2 per the reboot block).
- **Assets:** none — the source page has no images. No picsum needed.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/css-table-18.jpg
  (AVIF data despite the .jpg extension — HTTP 200, 30,799 bytes, 1200×972;
  visually analyzed 2026-09-30 after AVIF→PNG conversion; matches the
  live preview — charcoal page, white "Table #8" heading top-left,
  6-column table with dark `#25252b` rows separated by thin gaps,
  white header labels, gray body text, rows 2 & 5 shown CHECKED with the
  white-on-`#2e2e36` active highlight, all other checkboxes unchecked).
- **TEMPLATES.md:** "## Table (25)" section, line 2877
  (`- [ ] **Css Table 18**`). Slug `css-table-18` appears exactly ONCE in
  TEMPLATES.md.
- **Naming check:** "cellgrid" collides with nothing in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, or TEMPLATES.md content (verified
  2026-09-30 — zero hits across all pools; fits the sibling naming idiom
  gridline / gridspan / rowcard / rowglow / gridpane / nightgrid /
  cellswitch).

## Design tokens

(extracted from the live preview stylesheet `css/style.css` and verified
against the screenshot; CSS values are canonical)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | Google Fonts 300/400/500; body 16px/**300**/1.5, color `#212529` (reboot) |
| Page background | `#19191d` | DARK charcoal — darker than Nightgrid's plum `#3c373e` (css-table-16); the body override at the bottom of the sheet |
| Heading | `h2 { font-size: 20px }`, reboot weight 500, color **`#fff` (WHITE)**, `.cl-mb-5` → `margin-bottom: 3rem` | "Table #8" or paraphrase, rendered on the charcoal page ABOVE the table |
| Table header labels | color **`#fff` (WHITE)**, default bold weight (reboot `th` bolder ≈500), **normal case** (NO text-transform, NO letter-spacing), borderless (`thead th { border-top: none; border-bottom: none !important }`) | `.custom-table thead tr, .custom-table thead th` — 6 header cells: checkbox · Order · Name · Occupation · Contact · Education |
| Table body text | `#777`, `font-weight: 300` | `.custom-table tbody th, .custom-table tbody td`; `padding: 20px` top/bottom + `0.75rem` horizontal, `vertical-align: top`, `border: none`, `transition: .3s all ease` |
| Row background (normal) | `#25252b` | `.custom-table tbody tr th, ... td { background: #25252b }` — dark row cards on the darker page |
| Row background (active/hover — SIGNATURE) | `#2e2e36` + cell text `#fff` | `.custom-table tbody tr.active th/td, ... tr:hover th/td` — checked/hovered rows visibly lighten |
| Row link color (normal) | `#b3b3b3` (gray) | `.custom-table tbody tr th a, ... td a { color: #b3b3b3 }` — name links are GRAY, NOT blue (unlike Cellswitch's `#007bff`) |
| Row link color (active/hover) | `#fff` (white) | `tr.active a / tr:hover a` |
| Row hover shadow | `box-shadow: 0 2px 10px -5px rgba(0,0,0,0.1)` | on `tr:not(.spacer):hover` — faint; the bg/text shift is the primary hover effect. NOTE: per-cell backgrounds may paint over the tr shadow in collapsed tables — the visual difference is negligible |
| Row radius | `tr { border-radius: 7px; overflow: hidden }` BUT first/last child rules zero the left/right radii (`border-*-left/right-radius: 0px`) | NET visual (confirmed in screenshot): SQUARE-cornered rows. Faithfully reproduce OR render square rows directly — same visual |
| Spacer rows | 3px height, transparent background, `padding: 0 !important`, radius 0 | `.custom-table tbody tr.spacer td { colspan="100" }` — the SIGNATURE row gaps (thin darker stripes between dark rows) |
| Occupation sub-blurb | `#b3b3b3`, `font-weight: 300`, 80% font-size | `.custom-table tbody ... small` + `.cl-d-block` (`display: block !important`); "Far far away, behind the word mountains" under each occupation |
| Links (global) | `a { transition: .3s all ease }`, `a, a:hover { text-decoration: none !important }` — NO underline anywhere. Reboot's `a:hover { color: #0056b3; underline }` is overridden; row rules own link colors | There are NO links outside rows in this template |
| Checkbox unchecked | 20×20px, `border-radius: 4px`, `border: 2px solid #3f3f47` (DARK gray — NOT `#ccc`), transparent background | `.control__indicator` — the native input is visually hidden (`position: absolute; z-index: -1; opacity: 0`) |
| Checkbox hover/focus | indicator border → `#007bff` | `.control:hover input ~ .control__indicator` / `:focus` |
| Checkbox checked | indicator `border: 2px solid #007bff; background: #007bff` + WHITE checkmark glyph (source icomoon `\e5ca` — replace with lucide Check / inline SVG), centered `translate(-50%, -52%)` | `.control input:checked ~ .control__indicator(:after)` |
| Checkbox disabled | bg `#e6e6e6` opacity 0.6 border `#ccc`; disabled+checked bg `#007bff` opacity .2 | `.control input:disabled ...` — not exercised in the live DOM; implement only if cheap |
| Container | max-width `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like responsive container) |
| Table | `width: 100%; min-width: 900px` (`.custom-table`); cell `padding: 0.75rem` horizontal + 20px top/bottom; `vertical-align: top`; `border-collapse: collapse`; NO borders in the custom table (thead borderless, tbody `border: none`) | |
| Responsive wrapper | `display: block; width: 100%; overflow-x: auto` | `.cl-table-responsive` — horizontal scroll below the 900px min-width |
| Content area | `padding: 7rem 0` | `.content` — generous whitespace above/below the table |
| Print block | `@media print { @page { size: a3 }; thead { display: table-header-group }; tr { page-break-inside: avoid }; h2 { orphans: 3; widows: 3; page-break-after: avoid }; body, .cl-container { min-width: 992px !important }; .cl-table { border-collapse: collapse !important }; td, th { background-color: #fff !important } }` | print-orientation only — do NOT apply the 992px min-width on screen |

## Section structure (from the live DOM)

The source preview is a SINGLE-VIEW snippet page — one heading + one
dark data table with checkboxes. Section order (1:1):

1. **Page shell** — CHARCOAL background `#19191d`, Roboto throughout
   (body weight 300); `.content` wraps everything with `7rem` vertical
   padding; `.cl-container` centers the content (1140px max-width
   desktop, 15px gutters, responsive down to 540px).
2. **Heading** — `<h2 class="cl-mb-5">Table #8</h2>` — 20px, weight 500,
   WHITE `#fff`, 3rem margin-bottom, rendered on the charcoal page
   ABOVE the table. (Text may be paraphrased, e.g. "Table #8" kept or
   "Active Table" — same kind of short label.)
3. **Responsive wrapper** — `.cl-table-responsive.custom-table-responsive`
   — `display: block; width: 100%; overflow-x: auto` around the table only.
4. **Data table** —
   - `<table class="cl-table custom-table">` — `min-width: 900px`,
     `width: 100%`, `border-collapse: collapse`. NOTE: NO
     `cl-table-striped` class — there is NO zebra striping in this
     variant.
   - **thead (borderless, WHITE normal-case labels):** **6 columns** —
     (1) `<th scope="col">` containing the select-all checkbox
     `<label class="control control--checkbox"><input class="js-check-all"/>`
     `<div class="control__indicator"/></label>`; (2) `Order`; (3) `Name`;
     (4) `Occupation`; (5) `Contact`; (6) `Education`. Header cells:
     color `#fff`, default bold weight, normal case, borderless.
   - **tbody:** **7 data rows** separated by SPACER rows — after every
     data row a `<tr class="spacer"><td colspan="100"></td></tr>` (6
     spacers, 3px tall, transparent — they show the `#19191d` page
     between the `#25252b` rows). The source puts a stray `scope="row"`
     attribute on the FIRST `<tr>` only — invalid HTML, browsers ignore
     it; use proper markup.
   - **Cell 1 (checkbox) — a `<th scope="row">`, NOT a `td`:** contains
     `<label class="control control--checkbox">` + hidden `<input
     type="checkbox">` + `.control__indicator` div — ALL 7 row
     checkboxes + the header select-all are UNCHECKED in the live DOM,
     and NO row carries the `active` class in the live DOM.
   - **Cell 2 (Order):** plain 4-digit text, `#777`/300.
   - **Cell 3 (Name):** a plain `<a href="#">` name link colored
     `#b3b3b3` (gray) — NO iOS switches in this variant (that was
     css-table-17).
   - **Cell 4 (Occupation):** occupation title + a block-level small
     blurb underneath: "Far far away, behind the word mountains" —
     `#b3b3b3`, weight 300, 80% size. Same blurb text in every row.
   - **Cell 5 (Contact):** +CC-formatted phone number, `#777`/300.
   - **Cell 6 (Education):** school name, `#777`/300.
   - There is NO 7th Details column in this variant (unlike
     css-table-17).
   - **Demo data (same KIND of content; paraphrase OK):** 4 unique rows
     DUPLICATED to make 7 (rows 5–7 repeat rows 2–4 in the live DOM):
     4-digit order numbers (1392 / 4616 / 9841 / 9548), person names
     (James Yates / Matthew Wasil / Sampson Murphy / Gaspar Semenov),
     occupations (Web Designer / Graphic Designer / Mobile Dev /
     Illustrator), +CC phone numbers (+63 983 0962 971 / +02 020 3994 929
     / +01 352 1125 0192 / +92 020 3994 929), education (NY University /
     London College / Senior High / College).
5. **Interactive controls (React state, NOT pure CSS)** —
   - **Select-all:** the header checkbox toggles ALL 7 row checkboxes
     AND the `active` highlight on every row (checked → highlighted,
     unchecked → normal).
   - **Row checkboxes:** each toggles its own checked state AND its own
     row's `active` highlight (bg `#2e2e36`, white text/links).
   - **Hover:** hovering any data row gives the SAME visual treatment
     as `active` (bg `#2e2e36`, white text + white links, faint shadow).
   - **Initial state:** all checkboxes unchecked, all rows normal
     (`#25252b` bg, `#777` text) — per the live DOM. The screenshot
     shows rows 2 & 5 checked + highlighted, which is the POST-CLICK
     interaction state, not the initial load.
6. **Component Dock attribution footer** — the source snippet page has
   NO footer, but the monorepo mandates that every template's footer
   links `https://www.componentdock.com/` (branded "Component Dock").
   Add a MINIMAL attribution line (e.g. "Made with Component Dock" →
   https://www.componentdock.com/) below the table area. Zero ColorLib
   references anywhere in the app.

## Sibling context (for implementers)

This is the eighth "CSS Table" variant prepped in this monorepo; the
sources are near-identical snippet pages — do NOT copy tokens across:

- **Gridline** (ColorLib `css-table-11`, "Table #1"): WHITE page,
  borderless header, plain `#dee2e6` row separators, custom checkboxes +
  select-all (shares the checkbox machinery with this template), NO
  hover tint, NO `.active` styling, no sub-blurb.
- **Rowglow** (ColorLib `css-table-12`, "Table #2"): light-GRAY page
  `#efefef`, rows separated by whitespace; signature = rows turn fully
  WHITE on hover (no radius, no shadow).
- **Gridspan** (ColorLib `css-table-13`, "Table #3"): white page,
  `#dee2e6` separators, blue-tinted hover/active rows with 1px
  `#007bff` hairlines, `#b3b3b3` sub-blurb.
- **Rowcard** (ColorLib `css-table-14`, "Table #4"): gray page
  `#efefef`, WHITE rounded row-cards (radius 7px) separated by 10px
  transparent gaps, hover shadow lift, blue name links; checked state
  visible ONLY on the checkbox (`.active` NEVER styled — same trap as
  css-table-17).
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
  checkbox column + select-all, NO row hover and NO `.active` styling
  (the class is toggled but NEVER styled — visually only checkbox/switch
  states change). 7 columns (has a Details column).
- **Cellgrid** (this spec, ColorLib `css-table-18`, "Table #8"): the
  SECOND dark variant — charcoal `#19191d` page (darker/bluer than
  Nightgrid's plum `#3c373e`), dark `#25252b` rows separated by 3px
  transparent spacer gaps (Rowcard/Gridpane's gap idiom on dark),
  WHITE normal-case header labels, gray `#b3b3b3` name links (NOT blue),
  checkbox borders `#3f3f47` (dark, NOT `#ccc`), **`.active` + hover row
  highlight IS STYLED** — checked/hovered rows shift to `#2e2e36` with
  WHITE text and white links (the SIGNATURE; unlike Cellswitch/Rowcard
  where `.active` is never styled), 6 columns (NO Details column), first
  body cell is `<th scope="row">`, NO iOS switches, NO zebra striping.
  Distinguish from Nightgrid by: bluer/darker page, 3px row gaps (vs
  Nightgrid's contiguous rows), gray links (vs faint-white), blue
  checkbox states (vs yellow hover), uppercase headers in Nightgrid
  (this one is normal-case).

## Requirements

### Requirement: Page shell and heading render

The system SHALL render a charcoal page shell with Roboto typography and
a short WHITE h2 heading above the table.

#### Scenario: Shell renders

- **GIVEN** the user visits the Cellgrid home page
- **THEN** the page background SHALL be `#19191d` (dark charcoal)
- **AND** the font family SHALL be Roboto (Google Fonts weights 300, 400,
  500 loaded)
- **AND** the body font-weight SHALL be 300 with color `#212529` (the
  reboot default; row rules override per-cell colors)
- **AND** the content area SHALL have about 7rem vertical padding
- **AND** a centered container (max-width 1140px at desktop, 15px side
  padding; 540/720/960px at smaller breakpoints) SHALL hold the page
  content

#### Scenario: Heading renders

- **GIVEN** the page shell is visible
- **THEN** an h2 heading labeled "Table #8" (or a paraphrase of the same
  short label) SHALL display at font-size 20px, font-weight 500, color
  **WHITE `#fff`** (NOT dark ink — the heading sits on the charcoal page)
- **AND** it SHALL have about 3rem margin-bottom above the table
- **AND** it SHALL render on the charcoal `#19191d` page background

### Requirement: Data table renders with 6 columns and dark spacer-separated rows

The system SHALL render a six-column data table whose dark row cards
read as faint gray text on the charcoal page, separated by thin
transparent spacer gaps, with a checkbox column (select-all in the
header), a sub-blurb under each occupation, and gray name links.

#### Scenario: Table wrapper and base

- **GIVEN** the page shell is visible
- **THEN** a responsive wrapper (display block, overflow-x auto) SHALL
  hold a table with width 100% and min-width 900px
- **AND** the table SHALL use `border-collapse: collapse`
- **AND** NO cell borders SHALL be rendered anywhere in the custom table
  (thead borderless, tbody cells `border: none`)
- **AND** the table SHALL NOT carry any zebra/stripe class (there is NO
  striping in this variant)

#### Scenario: Header labels render

- **GIVEN** the table is visible
- **THEN** the header row SHALL list six columns: a checkbox cell
  (select-all control), "Order", "Name", "Occupation", "Contact", and
  "Education"
- **AND** each header cell SHALL use `scope="col"`
- **AND** the header labels SHALL render at default bold weight, color
  **WHITE `#fff`**, **normal case** (NO uppercase, NO letter-spacing)
- **AND** the header cells SHALL have NO top or bottom border
  (borderless thead sitting on the charcoal page)

#### Scenario: Dark rows render separated by spacer gaps

- **GIVEN** the table is visible
- **THEN** seven body data rows SHALL display (the source duplicates its
  4 unique rows to fill 7 — rows 5–7 repeat rows 2–4; same KIND of
  demo data)
- **AND** every data row SHALL be separated from the next by a 3px
  transparent spacer gap (6 spacers) that shows the charcoal page
  between rows
- **AND** each data row SHALL contain six cells: a checkbox cell
  (`<th scope="row">` in the source), order number, name link,
  occupation (+ sub-blurb), contact number, education
- **AND** each cell of a normal (non-active, non-hovered) row SHALL
  have background `#25252b`, `border: none`
- **AND** body cell text SHALL be `#777` at font-weight 300
- **AND** cell padding SHALL be 20px vertical + 0.75rem horizontal with
  vertical-align top
- **AND** rows SHALL render SQUARE-cornered (the source carries a 7px
  tr radius that its first/last-child rules zero out — net visual is
  square; render square directly or reproduce the CSS faithfully)
- **AND** the stray `scope="row"` attribute on the source's first `<tr>`
  SHALL be omitted (invalid HTML)

#### Scenario: Occupation sub-blurb renders

- **GIVEN** the body rows render
- **THEN** each Occupation cell SHALL contain the occupation title and,
  beneath it, a block-level small blurb in `#b3b3b3` at font-weight 300
  and 80% font-size
- **AND** the blurb text SHALL be the same kind of placeholder sentence
  in every row (e.g. "Far far away, behind the word mountains" or a
  paraphrase of equal length)

#### Scenario: Name links render gray

- **GIVEN** the body rows render
- **THEN** each Name cell SHALL be an anchor link colored `#b3b3b3`
  (gray — NOT blue, unlike the Cellswitch variant) with no underline
- **AND** there SHALL be NO toggle switches in the Name cells (this
  variant has none)
- **AND** links SHALL have a 0.3s ease transition and never show an
  underline (default OR hover)

#### Scenario: Content fidelity

- **GIVEN** the body rows render
- **THEN** the rows SHALL contain the same KIND of demo data as the
  source: 4-digit order ids, person names, design/dev occupations,
  +CC-formatted phone numbers, and school names
- **AND** exact strings MAY be paraphrased while keeping the same
  structure
- **AND** the duplicate-row pattern (rows 5–7 repeating 2–4) MAY be
  kept or reduced — same KIND either way
- **AND** there SHALL be NO Details/7th column (this variant ends at
  Education)

### Requirement: Checkboxes render with custom styling, select-all, and active-row highlight

The system SHALL render custom-styled checkboxes (a checkbox column
with a select-all header control) and reimplement the select-all and
per-row toggle behavior in React state — with the `active` row highlight
(this stylesheet styles it — the checked-row highlight IS part of the
design).

#### Scenario: Checkbox visual states

- **GIVEN** the table is visible
- **THEN** every data row SHALL have a checkbox in its first cell (a
  `<th scope="row">` cell), and the header's first cell SHALL have the
  select-all checkbox
- **AND** an unchecked checkbox SHALL render as a 20×20px square,
  border-radius 4px, 2px solid `#3f3f47` border (DARK gray — NOT
  `#ccc`), transparent background
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
  `#2e2e36`, cell text color `#fff`, name links `#fff` (white)
- **WHEN** the user unchecks the header select-all checkbox
- **THEN** every row checkbox SHALL become unchecked
- **AND** every data row SHALL return to its normal look (background
  `#25252b`, text `#777`, links `#b3b3b3`)
- **AND** the header checkbox's checked state SHALL be reflected in its
  visual indicator (blue fill + white check)

#### Scenario: Row checkbox toggles its own state and highlight

- **GIVEN** the table is visible with all checkboxes unchecked
- **WHEN** the user checks a row checkbox
- **THEN** that row's checkbox SHALL become checked
- **AND** that row SHALL show the active highlight (bg `#2e2e36`, white
  text + white links)
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
  background `#2e2e36`, cell text `#fff`, links `#fff`
- **AND** a faint shadow (`0 2px 10px -5px rgba(0,0,0,0.1)`) MAY render
  under the row (the source defines it; cell backgrounds may cover it —
  the bg/text shift is the required effect)
- **WHEN** the pointer leaves the row
- **THEN** the row SHALL return to its prior state (normal, or active
  if its checkbox is checked — hover must not clear the checked
  highlight)

### Requirement: Responsive table behavior

The system SHALL keep the dark table usable on narrow viewports via
horizontal scrolling inside the wrapper.

#### Scenario: Narrow viewport scrolls horizontally

- **GIVEN** the viewport is narrower than the table min-width (900px)
- **THEN** the table SHALL scroll horizontally within its wrapper
- **AND** the page layout (heading, container padding, footer) SHALL stay
  intact
- **AND** no horizontal overflow SHALL escape the wrapper
- **AND** the print-only `min-width: 992px` body rule from the source
  SHALL NOT be applied on screen

### Requirement: Component Dock attribution footer

The system SHALL include the monorepo-mandated Component Dock attribution
link and SHALL NOT reference ColorLib anywhere in the app.

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
  headers and th `scope="row"` on the checkbox cells (the source pattern
  — body row-header cells; the stray `scope="row"` on the first `<tr>`
  SHALL be omitted)
- **AND** the heading hierarchy SHALL contain a single h2
- **AND** the select-all and row checkboxes SHALL be real checkbox
  inputs associated with their labels (visually hidden input + label,
  per the source pattern)
- **AND** all interactive elements SHALL be keyboard reachable with
  visible focus states (checkbox blue-border focus)
- **AND** the active highlight SHALL be reflected in programmatic state
  (checked rows are the checked state — not color alone)
- **AND** the demo data SHALL render as real table content (not
  presentational divs)

## Verification checklist

- [ ] Roboto 300/400/500 loaded via Google Fonts `<link>` in `index.html`
- [ ] `@theme` tokens: `--color-page: #19191d`, `--color-row: #25252b`,
      `--color-row-active: #2e2e36`, `--color-heading: #fff`,
      `--color-header: #fff`, `--color-muted: #777`,
      `--color-blurb: #b3b3b3`, `--color-link: #b3b3b3`,
      `--color-link-active: #fff`, `--color-checkbox: #007bff`,
      `--color-checkbox-border: #3f3f47`; keep the `injectUiSource()`
      vite pattern
- [ ] Page shell: charcoal `#19191d` background, Roboto weight 300,
      content area `7rem` vertical padding, centered container max-width
      1140px / 15px gutters (540/720/960px breakpoints)
- [ ] Heading "Table #8" (or paraphrase) — 20px / weight 500 / WHITE
      `#fff` (NOT dark ink), 3rem margin-bottom, on the charcoal page
      above the table
- [ ] Responsive wrapper (`overflow-x-auto`) around the table;
      `min-width: 900px`; `border-collapse: collapse`; NO cell borders;
      NO stripe/zebra class anywhere
- [ ] Header labels: bold weight / `#fff` WHITE / NORMAL CASE (no
      uppercase, no letter-spacing), borderless thead, 6 columns
      (checkbox cell, Order, Name, Occupation, Contact, Education),
      `scope="col"`
- [ ] Seven data rows with 6 cells each; cell text `#777` at weight 300;
      20px vertical + 0.75rem horizontal cell padding; normal rows
      `#25252b` background, borderless; 3px transparent spacer gap
      between every row (6 spacers); rows render square-cornered; stray
      `scope="row"` on `<tr>` omitted
- [ ] Occupation cells include the block-level `#b3b3b3` / 300 / 80%
      sub-blurb
- [ ] Name cells: plain `#b3b3b3` gray no-underline links (NOT blue);
      NO switches; NO 7th Details column
- [ ] Checkboxes: visually hidden native input + 20×20px / radius 4px /
      2px `#3f3f47` indicator (dark border, NOT `#ccc`); hover/focus
      border `#007bff`; checked = `#007bff` fill + WHITE checkmark
      (lucide Check / inline SVG — NEVER the icomoon font); all row
      checkboxes + select-all start unchecked
- [ ] Select-all: header checkbox checks/unchecks ALL row checkboxes AND
      toggles the active highlight on every row via React state
- [ ] Active/hover highlight (THE signature): checked rows + hovered
      rows shift to `#2e2e36` background with WHITE `#fff` text and
      white links; unchecked+unhovered rows return to `#25252b` /
      `#777` / `#b3b3b3`; hover must not clear a checked row's
      highlight; row checkbox toggles ONLY its own row; header box does
      NOT auto-sync from row state
- [ ] Responsive: horizontal scroll below 900px; layout intact; the
      print-only 992px min-width NOT applied on screen
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh cellgrid`; PR
      `feat/template-cellgrid` with source slug + preview URL (the
      `bootstrap/` path) + tokens in the description
