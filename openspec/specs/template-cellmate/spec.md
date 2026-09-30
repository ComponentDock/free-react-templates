# Template: Cellmate (Table)

## Purpose

Cellmate is a white-page data-table snippet whose SIGNATURE is an iOS-style
toggle-switch column that strikes rows out: switching a row ON dims the whole
row to `opacity: .4` and paints a RED 2px strike bar across the name — while
an independent checkbox column (select-all in the header) keeps plain
checkbox state with NO highlight linkage. Odd rows carry a faint zebra tint;
borders are removed from every body cell. It is an original React recreation
of the ColorLib free "Css Table 20" template (source:
https://colorlib.com/wp/template/css-table-20/ — a single-page data-table
snippet: WHITE page `#fff`, BLACK bold borderless header labels, `#777`
weight-300 cells on zebra-tinted odd rows, BLUE `#007bff` name links with
NO underline, GREEN `#4cd964` iOS toggle switches in a headerless 7th
column, checkbox column with select-all, `cl-active` rows dimmed to
`opacity: .4` with a RED `#dc3545` strike bar on the name — no navbar, no
framework, NO images at all) built under a DIFFERENT name (Cellmate — "cell"
for the table cells, matching the sibling idiom cellgrid/cellcrew/
cellswitch; "mate" for the switchable row states (a row is switched on or
off the active roster); single lowercase word), per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `css-table-20`
- **Source:** https://colorlib.com/wp/template/css-table-20/ (HTTP 200)
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-20/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-20/**
  (HTTP 200, 8,943 bytes). The page `<title>` reads **"Table #7"**
  (STALE — copy-pasted from the css-table-17/Cellswitch source page) but
  the `<h2>` inside the live DOM reads **"Table #10"**, which matches the
  TEMPLATES.md screenshot for slug `css-table-20` exactly (same 7 columns,
  same 7 rows, same toggle/strike states) — this IS the right preview.
  Implementers must use the `bootstrap/` path — do not re-derive the
  slug-only URL.
- **Preview CSS:** `css/style.css?v=06d35dc4` (12,590 bytes) — a single
  self-contained sheet (no framework, no build step). It reverts
  Bootstrap-reboot base styles (`all: revert` on common elements), then
  styles from browser defaults: reboot block, `@font-face` Roboto 300/400
  (self-hosted woff2) + icomoon checkmark glyph font,
  `.cl-container` (Bootstrap-like responsive container 540/720/960/1140px),
  `.cl-table` + `.cl-table-responsive` (**NOTE: the table DOES carry
  `.cl-table-striped` — odd rows get `rgba(0,0,0,0.05)` zebra tint, unlike
  css-table-19/Cellcrew; and `.custom-table tbody th/td { border: none }`
  REMOVES the base `#dee2e6` cell borders**), `.content` (7rem vertical
  padding), the `.custom-table` overrides (borderless BLACK header, `#777`
  weight-300 cells, `tr.cl-active { opacity: .4 }` + the red `.name:before`
  strike bar), the custom checkbox component (`.control` /
  `.control__indicator`), the iOS toggle switch component
  (`.cl-custom-control.ios-switch`), and an `@media print` block (A3 page,
  print min-widths — PRINT-ONLY; on screen the layout stays responsive).
- **Preview JS:** `js/snippet.js?v=c35330b0` (1,103 bytes, no jQuery, no
  framework) — TWO check-all groups + one check-rows group, verified on the
  live DOM 2026-09-30:
  - `CHECK_ALL[0]`: header checkbox `input.js-check-all` on change sets
    `.checked` on EVERY `.control--checkbox input[type="checkbox"]` on the
    page (header box + ALL row checkboxes) — **`row: null`: it does NOT
    touch switches and does NOT toggle any row highlight.**
  - `CHECK_ALL[1]`: header toggle `input.js-ios-switch-all` on change sets
    `.checked` on EVERY `.ios-switch input[type="checkbox"]` AND toggles
    class `cl-active` on each checkbox's closest `<tr>` — **the HEADER
    SWITCH is the select-all for the strike-out state.**
  - `CHECK_ROWS`: every `.ios-switch input[type="checkbox"]` on change
    toggles class `cl-active` on its closest `<tr>` (checked → add,
    unchecked → remove).
  - **CRITICAL — the highlight is SWITCH-driven, not checkbox-driven:**
    `.custom-table tbody tr.cl-active { opacity: .4 }` dims the whole row,
    and `.custom-table tbody tr.cl-active .name:before { opacity: 1;
    visibility: visible }` reveals a 2px RED `#dc3545` strike bar across
    the name. Row checkboxes have NO highlight effect at all. There is NO
    row-hover styling in this variant (no `tr:hover` rule exists — unlike
    css-table-19/Cellcrew where hover shared the active treatment).
- **Icons:** the checkbox checkmark uses the `icomoon` glyph font
  (`@font-face icomoon` → `../fonts/icomoon-subset.woff2`, glyph `\e5ca`
  rendered white inside the checked indicator). NEVER copy the font — use
  a lucide `Check` icon or an inline SVG checkmark. The toggle switch needs
  NO icon (pure CSS pill + knob).
- **Fonts:** Roboto — load **Google Fonts `<link>` (300, 400; 500 for the
  h2)** in `index.html` (the preview self-hosts Roboto 300/400 via
  @font-face woff2; reboot gives h2 weight 500; body rule is weight **400**
  — NOTE: unlike css-table-19 where the body override was 300, this
  variant's body is 400; the table CELLS override down to 300).
- **Assets:** NONE — this template has no images whatsoever (no avatars,
  no photos). No picsum placeholders required.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/css-table-20.jpg
  (AVIF data despite the .jpg extension — HTTP 200, 16,899 bytes,
  1200×972; visually analyzed 2026-09-30 after AVIF→PNG conversion; matches
  the live preview — WHITE page, dark "Table #10" heading top-left,
  7-column table (checkbox · Order · Name · Occupation · Contact ·
  Education · toggle), odd-row zebra tint, rows 1/2/5/6 dimmed with
  strikethrough names + GREEN toggles ON, rows 3/4/7 normal with blue name
  links + gray OFF toggles, checkbox column all empty gray-bordered
  squares, black bold header labels, generous whitespace, no footer in the
  source).
- **TEMPLATES.md:** "## Table (25)" section, line 2879
  (`- [ ] **Css Table 20**`). Slug `css-table-20` appears exactly ONCE in
  TEMPLATES.md (verified 2026-09-30).
- **Naming check:** "cellmate" collides with NOTHING in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, or TEMPLATES.md content (verified
  2026-09-30 — zero hits across all pools; fits the sibling naming idiom
  gridline / gridspan / rowcard / rowglow / gridpane / nightgrid /
  cellswitch / cellgrid / cellcrew).

## Design tokens

(extracted from the live preview stylesheet `css/style.css` and verified
against the screenshot; CSS values are canonical)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | Google Fonts 300/400/500; body 16px/**400**/1.5, color `#212529` (reboot) — NOTE body is 400 here, cells override to 300 |
| Page background | `#fff` WHITE | the body override — the LIGHT variant (Cellgrid is the dark sibling) |
| Heading | `h2 { font-size: 20px }`, reboot weight 500, color **`#212529` (DEFAULT DARK INK — inherited from body, no color override on h2)**, `.cl-mb-5` → `margin-bottom: 3rem` | "Table #10" or paraphrase, rendered on the white page ABOVE the table |
| Table header labels | color **`#000` BLACK** (`.custom-table thead tr, .custom-table thead th { color: #000 }` — darker than the `#212529` heading), default **bold** weight (browser default for `th`), **normal case** (NO text-transform, NO letter-spacing), borderless (`border-top: none; border-bottom: none !important`) | **SEVEN header cells:** checkbox-select-all th · Order · Name · Occupation · Contact · Education · header toggle-switch th |
| Table body text | `#777`, `font-weight: 300` | `.custom-table tbody th, .custom-table tbody td`; `padding: 20px` top/bottom + `0.75rem` horizontal, `vertical-align: top`, `transition: .3s all ease` |
| Row borders | **REMOVED** — `.custom-table tbody th, .custom-table tbody td { border: none }` | the base `.cl-table td { border-top: 1px solid #dee2e6 }` rule is OVERRIDDEN (specificity) — rows have NO hairlines (UNLIKE css-table-19/Cellcrew which KEEPS them); separation comes from the zebra tint only |
| Zebra striping (SIGNATURE vs Cellcrew) | table carries `.cl-table cl-table-striped custom-table`; `.cl-table-striped tbody tr:nth-of-type(odd) { background-color: rgba(0, 0, 0, 0.05) }` — ODD rows (1,3,5,7) faint gray | Cellcrew has NO striping; this variant does — do not copy tokens across |
| Name links | `#007bff` (reboot `a { color: #007bff }`), hover `#0056b3`; **NO underline** — the global `a, a:hover { text-decoration: none !important }` beats the `.name` line-through rule | `.custom-table tbody tr .name { text-decoration: line-through; position: relative; display: inline-block }` — the line-through is DEAD on normal rows (suppressed by the !important no-underline anchor rule); the VISIBLE strike comes only from the red :before bar on active rows |
| Active row (SIGNATURE) | `.custom-table tbody tr.cl-active { opacity: .4 }` (whole-row dim) + `.custom-table tbody tr.cl-active .name:before { opacity: 1; visibility: visible }` revealing a 2px RED strike bar | `.name:before { content: ""; height: 2px; top: 50%; position: absolute; left: 0; right: 0; background: #dc3545; opacity: 0; visibility: hidden }` — the strike bar sits at the vertical center of the name, full width of the name box. At row opacity .4 the red reads as a muted rose/gray strike (matches the screenshot). **driven by the iOS SWITCH, NOT the checkbox** |
| Row hover | **NONE** — no `tr:hover` rule exists in the stylesheet | unlike Cellcrew (hover shares the active treatment) — hovering a row changes NOTHING here |
| Sub-blurb | `#b3b3b3`, `font-weight: 300`, block-level (`small.cl-d-block` → `display: block !important`) | "Far far away, behind the word mountains" under each Occupation value; same blurb in every row |
| Checkbox unchecked | 20×20px, `border-radius: 4px`, `border: 2px solid #ccc` (LIGHT gray), transparent background | `.control__indicator` — the native input is visually hidden (`position: absolute; z-index: -1; opacity: 0`); wrapper `.control { display: block; position: relative; margin-bottom: 25px; font-size: 18px; cursor: pointer }` |
| Checkbox hover/focus | indicator border → `#007bff` | `.control:hover input ~ .control__indicator` / `:focus` |
| Checkbox checked | indicator `border: 2px solid #007bff; background: #007bff` + WHITE checkmark glyph (source icomoon `\e5ca` — replace with lucide Check / inline SVG), centered `translate(-50%, -52%)` | `.control input:checked ~ .control__indicator(:after)` |
| Checkbox disabled | bg `#e6e6e6` opacity 0.6 border `#ccc`; disabled+checked bg `#007bff` opacity .2 border `#007bff` | `.control input:disabled ...` — not exercised in the live DOM; implement only if cheap |
| iOS toggle switch (SIGNATURE) | `--color: #4cd964` GREEN; indicator: `display: inline-block; position: relative; margin: 0 10px; top: 4px; width: 32px; height: 20px; background: #fff; border-radius: 16px; border: 2px solid #ddd; transition: .3s` | `.cl-custom-control.ios-switch` — the track is a white 32×20 pill with a light-gray `#ddd` ring |
| Switch knob | `::after { content: ""; display: block; position: absolute; width: 16px; height: 16px; border-radius: 16px; top: 0; left: 0; background: #fff; box-shadow: 0 0 2px #aaa, 0 2px 5px #999; transition: .3s }` | 16px white circle with a soft double shadow, parked LEFT when off |
| Switch checked | indicator `border: 10px solid var(--color)` (the GREEN ring floods the track — the pill turns solid green) + knob `::after { top: -8px; left: 4px }` (knob parks RIGHT, offset to sit inside the green ring); `:active` pressed knob slides `left: 0` | the CSS-only toggle geometry — the input is `display: none` |
| Switch disabled | indicator `opacity: .4` | `.ios-switch-control-input:disabled ~ ...` |
| Header switch quirk | the header toggle's label carries inline `style="position: relative; top: 10px"` (source quirk — visually nudges the header switch down to align with the label row) | reproduce the offset via Tailwind (`relative top-2.5` ≈ 10px) or equivalent |
| Container | max-width `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like responsive container) |
| Table | `width: 100%; min-width: 900px`; cell `padding: 0.75rem` horizontal + 20px top/bottom; `vertical-align: top`; `border-collapse: collapse`; thead borderless; tbody cells borderless | `.custom-table` |
| Responsive wrapper | `display: block; width: 100%; overflow-x: auto` | `.cl-table-responsive` — horizontal scroll below the 900px min-width |
| Content area | `padding: 7rem 0` | `.content` — generous whitespace above/below the table |
| Print block | `@media print { @page { size: a3 }; thead { display: table-header-group }; tr { page-break-inside: avoid }; h2 { orphans: 3; widows: 3; page-break-after: avoid }; body, .cl-container { min-width: 992px !important }; .cl-table { border-collapse: collapse !important }; .cl-table td, .cl-table th { background-color: #fff !important } }` | print-orientation only — do NOT apply the 992px min-width on screen |

## Section structure (from the live DOM)

The source preview is a SINGLE-VIEW snippet page — one heading + one
zebra-striped data table with a checkbox column and an iOS toggle-switch
column. Section order (1:1):

1. **Page shell** — WHITE background `#fff`, Roboto throughout (body
   weight **400**, ink `#212529`); `.content` wraps everything with `7rem`
   vertical padding; `.cl-container` centers the content (1140px
   max-width desktop, 15px gutters, responsive down to 540px).
2. **Heading** — `<h2 class="cl-mb-5">Table #10</h2>` — 20px, weight 500,
   DARK INK `#212529` (inherited body color), 3rem margin-bottom, rendered
   on the white page ABOVE the table. (Text may be paraphrased — same
   kind of short label.)
3. **Responsive wrapper** — `.cl-table-responsive` — `display: block;
   width: 100%; overflow-x: auto` around the table only.
4. **Data table** —
   - `<table class="cl-table cl-table-striped custom-table">` —
     `min-width: 900px`, `width: 100%`, `border-collapse: collapse`.
     **ODD rows carry the `rgba(0,0,0,0.05)` zebra tint.**
   - **thead (borderless, BLACK bold normal-case labels): SEVEN header
     cells** — (1) `<th scope="col">` containing the select-all checkbox
     `<label class="control control--checkbox"><input class="js-check-all"/>`
     `<div class="control__indicator"/></label>`; (2) `Order`; (3)
     `Name`; (4) `Occupation`; (5) `Contact`; (6) `Education`; (7) a
     `<th scope="col">` containing the SELECT-ALL toggle switch
     `<label class="cl-custom-control ios-switch" style="position:
     relative; top: 10px"><input class="ios-switch-control-input
     js-ios-switch-all"><span class="ios-switch-control-indicator"/></label>`.
     Header cells: color `#000`, default bold weight, normal case,
     borderless.
   - **tbody: SEVEN data rows, SEVEN body cells each (header labels and
     body cells MATCH 7:7 — no headerless column quirk in this
     variant):** each row has (1) checkbox cell — note: a `<td>`, NOT a
     `<th scope="row">` (unlike Cellcrew), containing
     `<label class="control control--checkbox">` + hidden
     `<input type="checkbox">` + `.control__indicator` div; (2) Order td
     (4-digit text); (3) Name td (`class="cl-pl-0"` — padding-left
     removed — wrapping `<div class="cl-d-flex cl-align-items-center">`
     around `<a href="#" class="name">Person Name</a>`); (4) Occupation
     td (title + block `<small class="cl-d-block">` blurb "Far far away,
     behind the word mountains"); (5) Contact td (+CC phone); (6)
     Education td; (7) toggle-switch td
     (`<label class="cl-custom-control ios-switch"><input
     class="ios-switch-control-input"><span
     class="ios-switch-control-indicator"/></label>`).
   - **Zebra + borders:** odd rows tinted `rgba(0,0,0,0.05)`; ALL tbody
     cell borders REMOVED (`border: none`); thead borderless — rows are
     separated by the zebra tint alone (NO `#dee2e6` hairlines, NO
     spacer rows).
   - **Initial state in the live DOM (matches the screenshot):** rows
     1, 2, 5, 6 carry `class="cl-active"` AND a `checked` toggle switch
     (whole row dimmed to opacity .4, RED strike bar on the name, GREEN
     switch); rows 3, 4, 7 are normal (white/zebra, blue name links,
     gray OFF switches). ALL row checkboxes are UNCHECKED; the header
     checkbox and the header switch are BOTH unchecked.
   - **Demo data (same KIND of content; paraphrase OK):** 4 unique rows
     with row 5–7 repeating rows 2–4: order numbers 1392 / 4616 / 9841 /
     9548; names James Yates / Matthew Wasil / Sampson Murphy / Gaspar
     Semenov; occupations Web Designer / Graphic Designer / Mobile Dev /
     Illustrator (each with the shared "Far far away, behind the word
     mountains" blurb); +CC phones +63 983 0962 971 / +02 020 3994 929 /
     +01 352 1125 0192 / +92 020 3994 929; education NY University /
     London College / Senior High / College; switch states ON for rows
     1/2/5/6, OFF for 3/4/7.
5. **Interactive controls (React state, NOT pure CSS)** —
   - **Header checkbox (select-all for CHECKBOXES only):** toggles the
     checked state of the header box + every row checkbox. It does NOT
     touch the toggle switches and does NOT change any row's
     dim/strike state.
   - **Header toggle switch (select-all for the STRIKE state):** toggles
     the checked state of the header switch + every row switch, and
     toggles the active (dim + red strike) treatment on every row.
   - **Row toggle switch:** toggles its own checked state AND its own
     row's active treatment (dim `opacity: .4` + red strike bar). Switch
     ON ⇔ row struck.
   - **Row checkbox:** toggles ONLY its own checkbox visual state — NO
     highlight, NO switch change, NO header auto-sync.
   - **Hover:** NO row hover styling in this variant (unlike
     css-table-19) — hover changes nothing on rows; only checkboxes get
     a blue-border hover/focus and links shift to `#0056b3`.
   - **Initial state:** match the live DOM — switches ON + rows struck
     on rows 1/2/5/6, everything else normal; all checkboxes unchecked.
     (Keeping the screenshot's exact arrangement is the faithful choice;
     paraphrasing the data but keeping SOME struck rows preserves the
     design.)
6. **Component Dock attribution footer** — the source snippet page has
   NO footer, but the monorepo mandates that every template's footer
   links `https://www.componentdock.com/` (branded "Component Dock").
   Add a MINIMAL attribution line below the table area. Zero ColorLib
   references anywhere in the app.

## Sibling context (for implementers)

This is the tenth "CSS Table" variant prepped in this monorepo; the
sources are near-identical snippet pages — do NOT copy tokens across:

- **Gridline** (ColorLib `css-table-11`, "Table #1"): WHITE page,
  borderless header, plain `#dee2e6` row separators, custom checkboxes +
  select-all (shares the checkbox machinery), NO hover tint, NO
  `.active` styling, no sub-blurb, no switches.
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
  links, iOS green `#4cd964` toggle switches IN THE NAME COLUMN,
  checkbox column + select-all, `#ccc` checkbox borders (SAME as
  Cellmate), **`.active` NEVER styled** (the class is toggled but has
  zero visual effect), 7 columns WITH a Details column. Distinguish from
  Cellmate by: Cellmate's switches live in a dedicated 7th column (NO
  Details column), `.active` IS styled (dim + red strike — driven BY the
  switch), and odd rows are zebra-tinted.
- **Cellgrid** (ColorLib `css-table-18`, "Table #8"): the DARK variant —
  charcoal `#19191d` page, dark `#25252b` rows separated by 3px
  transparent spacer gaps, WHITE normal-case header labels, gray
  `#b3b3b3` name links, DARK `#3f3f47` checkbox borders, `.active` +
  hover highlight IS STYLED — checked/hovered rows shift to `#2e2e36`
  with WHITE text (dramatic), 6 columns, NO zebra striping.
- **Cellcrew** (ColorLib `css-table-19`, "Table #9"): WHITE page, dark
  ink `#212529` heading + bold `#212529` header labels (5 labels),
  `#777`/300 cells with **1px `#dee2e6` row separators KEPT**, real but
  subtle active/hover highlight (`rgba(0,0,0,0.03)` + `#bfbfbf`
  hairlines — driven by the CHECKBOX), signature headerless avatar
  cluster column, NO iOS switches, NO zebra striping. Distinguish from
  Cellmate by: Cellmate has switches (Cellcrew has avatars), zebra
  striping ON (Cellcrew: none), borders REMOVED (Cellcrew: kept),
  highlight = dim + red strike driven by the SWITCH (Cellcrew: tint +
  hairlines driven by the checkbox), BLACK `#000` headers (Cellcrew:
  `#212529`), and NO row hover anywhere (Cellcrew: hover shares the
  active treatment).
- **Cellmate** (this spec, ColorLib `css-table-20`, "Table #10"): the
  SWITCH-DRIVEN strike-out variant — see Design tokens and Section
  structure above. The quick distinguishers: green toggle switches in
  their own column, red strike bar + row dim when a switch is ON,
  zebra-tinted odd rows, borderless body cells, black header labels,
  no Details column, no avatars, no images at all, no hover states.

## Requirements

### Requirement: Page shell and heading render

The system SHALL render a WHITE page shell with Roboto typography and a
short DARK h2 heading above the table.

#### Scenario: Shell renders

- **GIVEN** the user visits the Cellmate home page
- **THEN** the page background SHALL be `#fff` (white)
- **AND** the font family SHALL be Roboto (Google Fonts weights 300, 400,
  500 loaded)
- **AND** the body font-weight SHALL be 400 with color `#212529` (NOTE:
  body 400 — the table cells override down to 300)
- **AND** the content area SHALL have about 7rem vertical padding
- **AND** a centered container (max-width 1140px at desktop, 15px side
  padding; 540/720/960px at smaller breakpoints) SHALL hold the page
  content

#### Scenario: Heading renders

- **GIVEN** the page shell is visible
- **THEN** an h2 heading labeled "Table #10" (or a paraphrase of the same
  short label) SHALL display at font-size 20px, font-weight 500, color
  **DARK INK `#212529`** (inherited body color — NOT white)
- **AND** it SHALL have about 3rem margin-bottom above the table
- **AND** it SHALL render on the white `#fff` page background

### Requirement: Data table renders with 7 header cells, zebra striping, and borderless body cells

The system SHALL render a light data table whose `#777` weight-300 cells
read on white with faint gray zebra tint on odd rows, bordered by NO
hairlines (borders removed), with a checkbox column (select-all in the
header) and a dedicated iOS toggle-switch column as the 7th column.

#### Scenario: Table wrapper and base

- **GIVEN** the page shell is visible
- **THEN** a responsive wrapper (display block, overflow-x auto) SHALL
  hold a table with width 100% and min-width 900px
- **AND** the table SHALL use `border-collapse: collapse`
- **AND** thead cells SHALL have NO top or bottom border (borderless
  header)
- **AND** tbody cells SHALL have NO borders (`.custom-table` removes the
  base `#dee2e6` cell borders — rows are NOT separated by hairlines,
  unlike css-table-19/Cellcrew)
- **AND** the table SHALL carry zebra striping: odd body rows
  (1st, 3rd, 5th, 7th) SHALL have background `rgba(0, 0, 0, 0.05)` and
  even rows transparent
- **AND** there SHALL be NO spacer rows (rows are contiguous)

#### Scenario: Header labels render

- **GIVEN** the table is visible
- **THEN** the header row SHALL list SEVEN cells: a checkbox cell
  (select-all control), "Order", "Name", "Occupation", "Contact",
  "Education", and a toggle-switch cell (select-all switch)
- **AND** each header cell SHALL use `scope="col"`
- **AND** the header labels SHALL render at default bold weight, color
  **`#000` BLACK** (the thead override — darker than the `#212529`
  heading), **normal case** (NO uppercase, NO letter-spacing)
- **AND** the header cells SHALL have NO top or bottom border
- **AND** the header toggle switch SHALL sit in the 7th header cell
  (the source nudges it down ~10px via `position: relative; top: 10px`
  to align with the label row)

#### Scenario: Body rows render with seven cells each

- **GIVEN** the table is visible
- **THEN** seven body data rows SHALL display (the source duplicates its
  4 unique rows to fill 7 — rows 5–7 repeat rows 2–4; same KIND of demo
  data)
- **AND** each row SHALL contain SEVEN body cells: a checkbox cell (a
  `<td>` — NOT a `<th scope="row">`, unlike Cellcrew), order number,
  name (link), occupation (+ sub-blurb), contact phone, education,
  toggle switch
- **AND** header labels and body cells SHALL match 7:7 (no headerless
  column quirk in this variant)
- **AND** body cell text SHALL be `#777` at font-weight 300
- **AND** cell padding SHALL be 20px vertical + 0.75rem horizontal with
  vertical-align top
- **AND** normal (non-active) rows SHALL render transparent (zebra tint
  on odd rows, white page on even rows) with NO cell borders
- **AND** the rows SHALL be contiguous (NO spacer rows, NO gaps)

#### Scenario: Name links render

- **GIVEN** the body rows render
- **THEN** each Name cell SHALL contain a link styled `#007bff` with
  hover `#0056b3`
- **AND** the links SHALL have NO underline and NO line-through on
  normal rows (the global `a, a:hover { text-decoration: none
  !important }` suppresses the source's `.name` line-through rule)
- **AND** the Name cell SHALL have padding-left removed (`cl-pl-0`) and
  its link SHALL sit in a vertically centered flex wrapper

#### Scenario: Occupation sub-blurb renders

- **GIVEN** the body rows render
- **THEN** each Occupation cell SHALL contain the occupation title and,
  beneath it, a block-level small blurb in `#b3b3b3` at font-weight 300
- **AND** the blurb text SHALL be the same kind of placeholder sentence
  in every row (e.g. "Far far away, behind the word mountains" or a
  paraphrase of equal length)

#### Scenario: Content fidelity

- **GIVEN** the body rows render
- **THEN** the rows SHALL contain the same KIND of demo data as the
  source: 4-digit order ids, person names, occupation titles + shared
  blurb, +CC-formatted phone numbers, education entries
- **AND** exact strings MAY be paraphrased while keeping the same
  structure
- **AND** the duplicate-row pattern (rows 5–7 repeating 2–4) MAY be
  kept or reduced — same KIND either way
- **AND** there SHALL be NO Details column and NO imagery (this variant
  has zero images — no avatars, no photos)

### Requirement: iOS toggle switches render with green pill styling

The system SHALL render iOS-style toggle switches (a select-all switch
in the header cell and one switch per data row) with the source's
white-pill / green-checked geometry.

#### Scenario: Switch visual states

- **GIVEN** the table is visible
- **THEN** every data row SHALL contain a toggle switch in its 7th cell,
  and the header's 7th cell SHALL contain the select-all switch
- **AND** the native switch input SHALL be visually hidden (not the
  browser default control)
- **AND** an UNCHECKED switch SHALL render as a 32×20px white pill,
  `border-radius: 16px`, 2px solid `#ddd` border, with a 16px white knob
  parked LEFT and carrying a soft shadow (`0 0 2px #aaa, 0 2px 5px
  #999`)
- **AND** a CHECKED switch SHALL render as a solid GREEN pill: the
  indicator border becomes 10px solid `#4cd964`, and the knob SHALL sit
  RIGHT (offset inside the green ring)
- **AND** the switch SHALL animate position/border over about .3s
- **AND** the switches SHALL have about 0 10px horizontal margin (the
  source spacing)
- **AND** the header select-all switch SHALL start UNCHECKED, while row
  switches MAY start in the live DOM arrangement (rows 1/2/5/6 ON,
  rows 3/4/7 OFF — the screenshot state) or an all-off arrangement; the
  switch ON ⇔ struck-row invariant SHALL hold either way

### Requirement: Checkboxes render with custom styling and an independent select-all

The system SHALL render custom-styled checkboxes (a checkbox column
with a select-all header control) whose behavior is INDEPENDENT of the
switch/strike state.

#### Scenario: Checkbox visual states

- **GIVEN** the table is visible
- **THEN** every data row SHALL have a checkbox in its first cell, and
  the header's first cell SHALL have the select-all checkbox
- **AND** an unchecked checkbox SHALL render as a 20×20px square,
  border-radius 4px, 2px solid `#ccc` border (LIGHT gray), transparent
  background
- **AND** the native input SHALL be visually hidden (not the browser
  default checkbox)
- **AND** on hover/focus the indicator border SHALL turn `#007bff`
- **AND** a checked checkbox SHALL render as a `#007bff` filled square
  with a WHITE checkmark icon (lucide Check or inline SVG — the source
  uses an icomoon glyph, which must NOT be copied)
- **AND** all row checkboxes and the header select-all SHALL start
  UNCHECKED (matching the live source DOM)

#### Scenario: Header checkbox select-all touches ONLY checkboxes

- **GIVEN** the table is visible with all checkboxes unchecked
- **WHEN** the user checks the header select-all checkbox
- **THEN** every row checkbox SHALL become checked
- **AND** the toggle switches SHALL NOT change
- **AND** NO row's dim/strike treatment SHALL change (checkbox state
  and strike state are INDEPENDENT systems in this template)
- **WHEN** the user unchecks the header select-all checkbox
- **THEN** every row checkbox SHALL become unchecked
- **AND** the header checkbox's checked state SHALL be reflected in its
  visual indicator (blue fill + white check)

#### Scenario: Row checkbox toggles only its own box

- **GIVEN** the table is visible
- **WHEN** the user checks a row checkbox
- **THEN** that row's checkbox SHALL become checked
- **AND** that row's switch SHALL NOT change
- **AND** that row's dim/strike treatment SHALL NOT change
- **AND** the header select-all checkbox SHALL NOT auto-check (the
  source JS does not sync the header box from row state)
- **WHEN** the user unchecks it
- **THEN** that row's checkbox SHALL return to unchecked with no other
  effect

### Requirement: Switch-driven row strike-out state (SIGNATURE)

The system SHALL implement the source's switch-driven active state in
React state: a row whose switch is ON is DIMMED and carries a RED strike
bar across its name; a row whose switch is OFF renders normal.

#### Scenario: Row switch toggles the strike-out state

- **GIVEN** the table is visible with a row whose switch is OFF
- **WHEN** the user clicks that row's toggle switch ON
- **THEN** the switch SHALL turn green (checked styling)
- **AND** the row SHALL dim to `opacity: .4` (whole row)
- **AND** the row's name SHALL show a RED `#dc3545` 2px strike bar
  across it (the `.name:before` treatment at the name's vertical center)
- **AND** NO other row SHALL change
- **WHEN** the user clicks the switch OFF
- **THEN** the switch SHALL return to the gray/white unchecked pill
- **AND** the row SHALL return to full opacity with no strike bar

#### Scenario: Header switch select-all strikes/unstrikes every row

- **GIVEN** the table is visible with the header switch OFF
- **WHEN** the user clicks the header select-all switch ON
- **THEN** the header switch AND every row switch SHALL turn checked
  (green)
- **AND** every data row SHALL show the strike-out treatment (dim
  opacity .4 + red name strike bar)
- **WHEN** the user clicks it OFF
- **THEN** every switch SHALL return to unchecked
- **AND** every row SHALL return to its normal look

#### Scenario: No row hover styling

- **GIVEN** the table is visible
- **WHEN** the user hovers over a data row
- **THEN** the row's appearance SHALL NOT change (this variant has NO
  row-hover treatment — unlike css-table-19/Cellcrew where hover shares
  the active highlight)
- **AND** only the checkboxes (blue border) and links (`#0056b3`)
  SHALL react to hover/focus

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
- **THEN** the table SHALL use thead/tbody with th `scope="col"` on all
  header cells (checkbox th, six label th, switch th)
- **AND** the heading hierarchy SHALL contain a single h2
- **AND** the select-all and row checkboxes SHALL be real checkbox
  inputs associated with their labels (visually hidden input + label,
  per the source pattern)
- **AND** the toggle switches SHALL be real checkbox inputs associated
  with their labels (visually hidden + label + custom indicator)
- **AND** all interactive elements SHALL be keyboard reachable with
  visible focus states (checkbox blue-border focus; switch focus ring
  or equivalent)
- **AND** the struck-row state SHALL be reflected in programmatic state
  (the switch's checked state — not color alone); a screen reader SHALL
  be able to distinguish checked switches from unchecked ones
- **AND** the demo data SHALL render as real table content (not
  presentational divs)

## Verification checklist

- [ ] Roboto 300/400/500 loaded via Google Fonts `<link>` in `index.html`
- [ ] `@theme` tokens: `--color-page: #fff`, `--color-heading: #212529`,
      `--color-header: #000`, `--color-muted: #777`, `--color-blurb:
      #b3b3b3`, `--color-stripe: rgba(0,0,0,0.05)`, `--color-link:
      #007bff`, `--color-link-hover: #0056b3`, `--color-checkbox:
      #007bff`, `--color-checkbox-border: #ccc`, `--color-switch:
      #4cd964`, `--color-switch-border: #ddd`, `--color-strike:
      #dc3545`; keep the `injectUiSource()` vite pattern
- [ ] Page shell: WHITE `#fff` background, Roboto weight **400**, content
      area `7rem` vertical padding, centered container max-width 1140px
      / 15px gutters (540/720/960px breakpoints)
- [ ] Heading "Table #10" (or paraphrase) — 20px / weight 500 / DARK INK
      `#212529` (NOT white), 3rem margin-bottom, on the white page above
      the table
- [ ] Responsive wrapper (`overflow-x-auto`) around the table;
      `min-width: 900px`; `border-collapse: collapse`; thead borderless;
      tbody cells **borderless** (`border: none` — NO `#dee2e6`
      hairlines); zebra striping ON: odd rows `rgba(0,0,0,0.05)`, even
      rows transparent; NO spacer rows
- [ ] Header labels: bold weight / `#000` BLACK / NORMAL CASE (no
      uppercase, no letter-spacing), borderless thead, SEVEN cells
      (checkbox, Order, Name, Occupation, Contact, Education,
      select-all switch), `scope="col"`; header switch nudged down ~10px
- [ ] Seven data rows with SEVEN cells each (checkbox cell is a `<td>`);
      cell text `#777` at weight 300; 20px vertical + 0.75rem
      horizontal cell padding; odd rows zebra-tinted, even rows
      transparent; contiguous rows (no gaps)
- [ ] Name links: `#007bff`, hover `#0056b3`, NO underline, NO
      line-through on normal rows; padding-left removed on the name
      cell; flex-centered link wrapper
- [ ] Occupation cells include the block-level `#b3b3b3` / 300
      sub-blurb
- [ ] Toggle switches (SIGNATURE): visually hidden checkbox input +
      32×20px white pill / radius 16px / 2px `#ddd` border; 16px white
      knob with soft shadow parked LEFT when off; checked = 10px solid
      `#4cd964` green ring + knob RIGHT; ~.3s transition; ~0 10px
      horizontal margin; NO icons inside the switch
- [ ] Checkboxes: visually hidden native input + 20×20px / radius 4px /
      2px `#ccc` indicator (LIGHT border); hover/focus border `#007bff`;
      checked = `#007bff` fill + WHITE checkmark (lucide Check / inline
      SVG — NEVER the icomoon font); all row checkboxes + select-all
      start unchecked
- [ ] Header checkbox select-all: checks/unchecks ALL row checkboxes via
      React state — switches and row strike state MUST NOT change
- [ ] Row checkbox: toggles ONLY its own box — no highlight, no switch
      change, no header auto-sync
- [ ] Switch-driven strike state (THE signature): header switch
      select-all toggles all switches + dims every row to `opacity: .4`
      + shows the RED `#dc3545` 2px strike bar on every name; row switch
      toggles only its own row (switch ON ⇔ row struck); switch OFF
      returns the row to full opacity with no strike
- [ ] NO row-hover styling (unlike Cellcrew — hovering rows changes
      nothing); checkbox hover/focus and link hover color only
- [ ] Initial state per the live DOM: switches ON + rows struck on rows
      1/2/5/6, rows 3/4/7 normal, all checkboxes unchecked, header
      controls unchecked (or an all-off arrangement that preserves the
      switch ⇔ strike invariant)
- [ ] Responsive: horizontal scroll below 900px; layout intact; the
      print-only 992px min-width NOT applied on screen
- [ ] ZERO images in this template (no avatars, no photos — no picsum
      needed)
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh cellmate`; PR
      `feat/template-cellmate` with source slug `css-table-20` + the
      `bootstrap/` preview path (and the stale `<title>Table #7</title>`
      caveat) + tokens in the description
