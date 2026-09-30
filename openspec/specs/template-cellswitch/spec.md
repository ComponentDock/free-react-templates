# Template: Cellswitch (Table)

## Purpose

Cellswitch is a white-page data-table showcase page with custom checkboxes
and iOS-style toggle switches in the free-react-templates monorepo. It is
an original React recreation of the ColorLib free "Css Table 17" template
(source: https://colorlib.com/wp/template/css-table-17/ — a single-page
data-table snippet: WHITE page, borderless table, BLACK normal-case header
labels, faint-gray `#777` weight-300 cells with `#b3b3b3` sub-blurbs,
BLUE links, odd-row stripe tint, a checkbox column with a select-all
header control, and the SIGNATURE iOS-style toggle switches (green
`#4cd964` when on) in every Name cell — no navbar, no imagery, no
framework) built under a DIFFERENT name (Cellswitch — the table cell with
an iOS switch; single lowercase word), per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `css-table-17`
- **Source:** https://colorlib.com/wp/template/css-table-17/
  (links `preview.colorlib.com/theme/bootstrap/css-table-17/`)
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-17/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-17/**
  (HTTP 200, 8,633 bytes, `<title>Table #7</title>`). Implementers must
  use the `bootstrap/` path — do not re-derive the slug-only URL.
- **Preview CSS:** `css/style.css?v=f68519b2` (12,148 bytes) — a single
  self-contained sheet ("Every style this snippet uses, and nothing
  else. No framework, no build step."). It first reverts Bootstrap-reboot
  base styles (`all: revert` on common elements), then styles from browser
  defaults: reboot block, `@font-face` Roboto 300/400 (self-hosted woff2),
  `.cl-container` (Bootstrap-like responsive container 540/720/960/1140px),
  `.cl-table` + `.cl-table-responsive` + `.cl-table-striped` (odd-row tint
  `rgba(0,0,0,0.05)`), `.content` (7rem vertical padding), the
  `.custom-table` overrides (borderless black header, `#777`/300 cells,
  `#b3b3b3` sub-blurb), the **iOS-switch component** (`.cl-custom-control.
  ios-switch` — see tokens), the **custom checkbox component** (`.control`
  / `.control__indicator` — see tokens), and an `@media print` block
  (`@page { size: a3 }`, thead `table-header-group`, `tr` page-break-inside
  avoid, body/container `min-width: 992px !important` — PRINT-ONLY; on
  screen the layout stays responsive). Note: the sheet reverts ALL base
  styles on common elements first — in Tailwind this is unnecessary
  (Tailwind's preflight is already the base).
- **Scripts (source):** `js/snippet.js?v=6c1448f7` (1,017 bytes, no
  jQuery, no framework) — TWO behaviors, verified on the live DOM 2026-09-30:
  - `CHECK_ALL`: the header `<input class="js-check-all">` (inside the
    first `th`) on change sets `.checked` on EVERY
    `.control--checkbox input[type="checkbox"]` (all row checkboxes) and
    toggles class `active` on each checkbox's closest `<tr>`.
  - `CHECK_ROWS`: every `.control--checkbox input[type="checkbox"]` on
    change toggles class `active` on its closest `<tr>`.
  - **CRITICAL:** the stylesheet contains **NO `.active` rule and NO row
    hover rule** — the `active` class is toggled by the JS but NEVER
    styled (same trap as css-table-14/15). Checked rows look identical to
    unchecked rows except for the checkbox/switch state itself. Do NOT
    invent row-highlight styling. REIMPLEMENT only the checkbox state
    (select-all → all row checkboxes; per-row toggle) in React state.
  - The iOS switches are PURE CSS + native checkboxes (input hidden via
    `display: none`, styled via `:checked ~ .ios-switch-control-indicator`)
    — the snippet.js does NOT touch them. They are independent React
    state per row.
- **Icons:** the checkbox checkmark uses the `icomoon` glyph font
  (`@font-face icomoon` → `../fonts/icomoon-subset.woff2`, glyph
  `\e5ca` rendered white inside the checked indicator). NEVER copy the
  font — use a lucide `Check` icon or an inline SVG checkmark.
- **Fonts:** Roboto — load **Google Fonts `<link>` (300, 400; 500 for the
  h2)** in `index.html` (the preview self-hosts Roboto 300/400 via
  @font-face woff2; weights used: 300 = body + table cells + sub-blurb,
  500 = h2 per the reboot block).
- **Assets:** none — the source page has no images. No picsum needed.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/css-table-17.jpg
  (AVIF data despite the .jpg extension — HTTP 200, 25,992 bytes, 1200×972;
  visually analyzed 2026-09-30 after AVIF→PNG conversion; matches the
  live preview — WHITE page, dark "Table #7" heading top-left, table with
  a checkbox column, black bold normal-case header labels, blue name
  links + blue "Details" links, green iOS switches ON in rows 1/2/5/6 and
  OFF (white track) in rows 3/4/7, faint-gray striped odd rows, all row
  checkboxes unchecked).
- **TEMPLATES.md:** "## Table (25)" section, line 2876
  (`- [ ] **Css Table 17**`). Slug `css-table-17` appears exactly ONCE in
  TEMPLATES.md.
- **Naming check:** "cellswitch" collides with nothing in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, or TEMPLATES.md content (verified
  2026-09-30 — zero hits across all pools; fits the sibling naming idiom
  gridline / gridspan / rowcard / rowglow / gridpane / nightgrid).

## Design tokens

(extracted from the live preview stylesheet `css/style.css` and verified
against the screenshot; CSS values are canonical)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | Google Fonts 300/400/500; body 16px/**300**/1.5, color `#212529` |
| Page background | `#fff` | WHITE page (NOT dark — unlike Nightgrid `css-table-16`) |
| Heading | `h2 { font-size: 20px }`, reboot weight 500, color inherits `#212529` (dark ink) | `.cl-mb-5` → `margin-bottom: 3rem`; "Table #7" or paraphrase |
| Table header labels | color **`#000`**, default bold weight (reboot `th` bolder ≈500), **normal case** (NO text-transform, NO letter-spacing — unlike css-table-16's uppercase), `padding-bottom: 30px`, borderless (`border-top: none; border-bottom: none !important`) | `.custom-table thead tr, .custom-table thead th` — 7 header cells: checkbox · Order · Name · Occupation · Contact · Education · EMPTY |
| Table body text | `#777`, `font-weight: 300` | `.custom-table tbody th, .custom-table tbody td`; `padding: 20px` top/bottom + `0.75rem` horizontal, `vertical-align: top`, `border: none`, `transition: .3s all ease` |
| Occupation sub-blurb | `#b3b3b3`, `font-weight: 300`, 80% font-size | `.custom-table tbody ... small` — `cl-d-block` (`display: block !important`); "Far far away, behind the word mountains" under each occupation |
| Links (name + Details) | default reboot link blue **`#007bff`**, hover `#0056b3`, **NO underline** | `a, a:hover { text-decoration: none !important }`, `a { transition: .3s all ease }`. The `.more` Details class has **NO dedicated rule in this sheet** — Details links are plain blue links (NOT uppercase, NOT letter-spaced, NOT faint — differs from css-table-16 Nightgrid) |
| Checkbox unchecked | 20×20px, `border-radius: 4px`, `border: 2px solid #ccc`, transparent background | `.control__indicator` — the native input is visually hidden (`position: absolute; z-index: -1; opacity: 0`) |
| Checkbox hover/focus | indicator border → `#007bff` | `.control:hover input ~ .control__indicator` / `:focus` |
| Checkbox checked | indicator `border: 2px solid #007bff; background: #007bff` + WHITE checkmark glyph (source icomoon `\e5ca` — replace with lucide Check / inline SVG) | `.control input:checked ~ .control__indicator` + `:after` `display: block; color: #fff`, centered via `translate(-50%, -52%)` |
| Checkbox disabled | bg `#e6e6e6` opacity 0.6 border `#ccc`; disabled+checked bg `#007bff` opacity .2 | `.control input:disabled ...` — not exercised in the live DOM; implement only if cheap |
| iOS switch — track | 32×20px, `border-radius: 16px`, `background: #fff`, `border: 2px solid #ddd`, `margin: 0 10px`, `top: 4px`, `transition: .3s` | `.ios-switch-control-indicator` — OFF state = white pill with light-gray border |
| iOS switch — knob | 16×16px circle, `background: #fff`, `border-radius: 16px`, `box-shadow: 0 0 2px #aaa, 0 2px 5px #999`, left position | `::after` pseudo-element |
| iOS switch — ON (signature) | track `border: 10px solid #4cd964` (the thick green border IS the green track), knob slides right (`top: -8px; left: 4px`) | `--color: #4cd964` (iOS green) on `.ios-switch`; input `display: none` — pure CSS `:checked` styling |
| iOS switch — active-press | knob `width: 20px` while pressed | `:active ~ ... ::after` |
| iOS switch — disabled | indicator `opacity: .4` | not exercised in live DOM |
| Striped odd rows | `rgba(0, 0, 0, 0.05)` background on odd `tbody` rows | `.cl-table-striped tbody tr:nth-of-type(odd)` — subtle gray bands on rows 1/3/5/7; the live table carries `cl-table-striped` |
| Container | max-width `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like responsive container) |
| Table | `width: 100%; min-width: 900px` (`.custom-table`); cell `padding: 0.75rem` horizontal + 20px top/bottom; `vertical-align: top`; `border-collapse: collapse`; NO borders in the custom table (thead borderless, tbody `border: none`) | |
| Responsive wrapper | `display: block; width: 100%; overflow-x: auto` | `.cl-table-responsive` — horizontal scroll below the 900px min-width |
| Content area | `padding: 7rem 0` | `.content` — generous whitespace above/below the table |
| Row hover | **NONE** — the stylesheet has NO `tbody tr:hover` rule and NO `.active` rule | the `.3s all ease` transitions exist but nothing changes color on row hover; the checkbox `:hover` (blue border) and switch `:active` are the only interactive color changes |
| Print block | `@media print { @page { size: a3 }; thead { display: table-header-group }; tr { page-break-inside: avoid }; h2 { orphans: 3; widows: 3; page-break-after: avoid }; body, .cl-container { min-width: 992px !important }; .cl-table { border-collapse: collapse !important }; td, th { background-color: #fff !important } }` | print-orientation only — do NOT apply the 992px min-width on screen |

## Section structure (from the live DOM)

The source preview is a SINGLE-VIEW snippet page — one heading + one
white data table with controls. Section order (1:1):

1. **Page shell** — WHITE background `#fff`, Roboto throughout (body
   weight 300); `.content` wraps everything with `7rem` vertical padding;
   `.cl-container` centers the content (1140px max-width desktop, 15px
   gutters, responsive down to 540px).
2. **Heading** — `<h2 class="cl-mb-5">Table #7</h2>` — 20px, weight 500,
   dark ink `#212529`, 3rem margin-bottom, rendered on the WHITE page
   ABOVE the table. (Text may be paraphrased, e.g. "Table #7" kept or
   "Toggle Table" — same kind of short label.)
3. **Responsive wrapper** — `.cl-table-responsive` — `display: block;
   width: 100%; overflow-x: auto` around the table only.
4. **Data table** —
   - `<table class="cl-table cl-table-striped custom-table">` —
     `min-width: 900px`, `width: 100%`, `border-collapse: collapse`;
     the `cl-table-striped` class applies the odd-row tint.
   - **thead (borderless, BLACK normal-case labels):** **7 columns** —
     (1) `<th scope="col">` containing the select-all checkbox
     `<label class="control control--checkbox"><input class="js-check-all"/>`
     `<div class="control__indicator"/></label>`; (2) `Order`; (3) `Name`;
     (4) `Occupation`; (5) `Contact`; (6) `Education`; (7) EMPTY 7th
     header cell (the Details column). Header cells: color `#000`,
     default bold weight, normal case, `padding-bottom: 30px`,
     `scope="col"`, borderless.
   - **tbody:** **7 data rows** (NO spacer rows, NO row-cards, NO radius
     — rows sit directly on the white page; odd rows carry the
     `rgba(0,0,0,0.05)` stripe tint; each row = 7 `td` cells); the source
     puts a stray `scope="row"` attribute on the FIRST `<tr>` only —
     invalid HTML, browsers ignore it; use proper `td`s.
   - **Cell 1 (checkbox):** `<label class="control control--checkbox">`
     + hidden `<input type="checkbox">` + `.control__indicator` div —
     ALL 7 row checkboxes are UNCHECKED in the live DOM.
   - **Cell 2 (Order):** plain 4-digit text, `#777`/300.
   - **Cell 3 (Name) — SIGNATURE:** `<td class="cl-pl-0">` containing
     `<div class="cl-d-flex cl-align-items-center">` with an
     **iOS switch** (`<label class="cl-custom-control ios-switch">` +
     `<input class="ios-switch-control-input">` + `<span
     .ios-switch-control-indicator"/>`) followed by the name as an
     `<a href="#">` blue link. Switch states in the live DOM: rows 1
     (1392 James Yates), 2 (4616 Matthew Wasil), 5 (4616 Matthew Wasil),
     6 (9841 Sampson Murphy) = **checked (green ON)**; rows 3 (9841
     Sampson Murphy), 4 (9548 Gaspar Semenov), 7 (9548 Gaspar Semenov) =
     **unchecked (white OFF)**. The switch has `margin: 0 10px` to the
     right of the name link... i.e. switch LEFT of the link, vertically
     centered (`cl-align-items-center`).
   - **Cell 4 (Occupation):** occupation title + a block-level small
     blurb underneath: "Far far away, behind the word mountains" —
     `#b3b3b3`, weight 300, 80% size. Same blurb text in every row.
   - **Cell 5 (Contact):** +CC-formatted phone number, `#777`/300.
   - **Cell 6 (Education):** school name, `#777`/300.
   - **Cell 7 (Details):** `<a href="#" class="more">Details</a>` —
     plain blue `#007bff` link, NO underline, no special `.more`
     styling in this stylesheet (unlike css-table-16).
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
     (the source JS also toggles an `active` class on rows — never
     styled, so visually only the checkboxes change).
   - **Row checkboxes:** each toggles its own checked state.
   - **iOS switches:** each row's switch toggles green ON / white OFF
     (pure CSS in the source; React state controls the `checked` prop).
   - NO row-hover color treatment exists — do not add one.
6. **Component Dock attribution footer** — the source snippet page has
   NO footer, but the monorepo mandates that every template's footer
   links `https://www.componentdock.com/` (branded "Component Dock").
   Add a MINIMAL attribution line (e.g. "Made with Component Dock" →
   https://www.componentdock.com/) below the table area. Zero ColorLib
   references anywhere in the app.

## Sibling context (for implementers)

This is the seventh "CSS Table" variant prepped in this monorepo; the
sources are near-identical snippet pages — do NOT copy tokens across:

- **Gridline** (ColorLib `css-table-11`, "Table #1"): WHITE page,
  borderless header, plain `#dee2e6` row separators, custom checkboxes +
  select-all (shares the checkbox machinery with this template), NO
  hover tint, NO sub-blurb, NO iOS switches.
- **Rowglow** (ColorLib `css-table-12`, "Table #2"): light-GRAY page
  `#efefef`, rows separated by whitespace; signature = rows turn fully
  WHITE on hover (no radius, no shadow).
- **Gridspan** (ColorLib `css-table-13`, "Table #3"): white page,
  `#dee2e6` separators, blue-tinted hover/active rows with 1px
  `#007bff` hairlines, `#b3b3b3` sub-blurb.
- **Rowcard** (ColorLib `css-table-14`, "Table #4"): gray page
  `#efefef`, WHITE rounded row-cards (radius 7px) separated by 10px
  transparent gaps, hover shadow lift, blue name links; checked state
  visible ONLY on the checkbox (no `.active` rule — same trap here).
- **Gridpane** (ColorLib `css-table-15`, "Table #5"): WHITE page +
  rounded GRAY panel `#efefef` wrapping the table, uppercase 12px
  letter-spaced header labels on the gray, white row-cards with gaps,
  checked rows dim to `opacity: .4`.
- **Nightgrid** (ColorLib `css-table-16`, "Table #6"): the ONLY DARK
  variant — plum-charcoal page `#3c373e`, white UPPERCASE 11px header
  labels, faint `rgba(255,255,255,0.3)` links, yellow `#fdd114` hover.
- **Cellswitch** (this spec, ColorLib `css-table-17`, "Table #7"): the
  ONLY variant with **iOS-style toggle switches** (green `#4cd964` ON)
  in the Name column — THE signature. White page like Gridline, but
  header labels are BLACK `#000` normal-case (Gridline: dark-ink
  default weight), links are plain blue `#007bff` with NO `.more`
  styling on Details (Nightgrid: faint/uppercase/yellow-hover), and the
  checkbox column shares the select-all machinery with Gridline/Rowcard/
  Gridpane. The stylesheet styles NO row hover and NO `.active` class —
  the only color changes are the checkbox states and the switch
  on/off. Distinguish from Gridline by the iOS switches + the 7-column
  layout (Gridline has no switch, no Name-cell flex row).

## Requirements

### Requirement: Page shell and heading render

The system SHALL render a white page shell with Roboto typography and a
short dark h2 heading above the table.

#### Scenario: Shell renders

- **GIVEN** the user visits the Cellswitch home page
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
- **THEN** an h2 heading labeled "Table #7" (or a paraphrase of the same
  short label) SHALL display at font-size 20px, font-weight 500,
  dark ink color (default `#212529`, NOT white)
- **AND** it SHALL have about 3rem margin-bottom above the table
- **AND** it SHALL render on the white page background

### Requirement: Data table renders with 7 columns and controls

The system SHALL render a seven-column data table whose body cells read
as faint gray text on the white page, with a checkbox column (select-all
in the header), an iOS switch + name link in the Name column, a sub-blurb
under each occupation, and a Details link in the last column.

#### Scenario: Table wrapper and base

- **GIVEN** the page shell is visible
- **THEN** a responsive wrapper (display block, overflow-x auto) SHALL
  hold a table with width 100% and min-width 900px
- **AND** the table SHALL use `border-collapse: collapse`
- **AND** NO cell borders SHALL be rendered anywhere in the custom table
  (thead borderless, tbody cells `border: none`)

#### Scenario: Header labels render

- **GIVEN** the table is visible
- **THEN** the header row SHALL list seven columns: a checkbox cell
  (select-all control), "Order", "Name", "Occupation", "Contact",
  "Education", and an EMPTY seventh header cell (the Details column has
  no label)
- **AND** each header cell SHALL use `scope="col"`
- **AND** the header labels SHALL render at default bold weight, color
  `#000` (black), **normal case** (NO uppercase, NO letter-spacing)
- **AND** the header cells SHALL have `padding-bottom: 30px` and NO top
  or bottom border (borderless thead sitting directly on the white page)

#### Scenario: Body rows render faint on the white page

- **GIVEN** the table is visible
- **THEN** seven body data rows SHALL display (the source duplicates its
  4 unique rows to fill 7 — rows 5–7 repeat rows 2–4; same KIND of
  demo data)
- **AND** each row SHALL contain seven `td` cells: checkbox, order
  number, name (switch + link), occupation (+ sub-blurb), contact
  number, education, details (link)
- **AND** body cell text SHALL be `#777` at font-weight 300
- **AND** cell padding SHALL be 20px vertical + 0.75rem horizontal with
  vertical-align top
- **AND** rows SHALL sit directly on the white page with NO row-cards,
  NO border-radius, NO spacer rows, and NO hover shadow
- **AND** the stray `scope="row"` attribute on the first source `<tr>`
  SHALL be omitted (invalid HTML; body cells are plain `td`s)

#### Scenario: Odd rows carry the subtle stripe tint

- **GIVEN** the table is visible
- **THEN** odd-numbered body rows (1st, 3rd, 5th, 7th) SHALL have a
  background tint of `rgba(0,0,0,0.05)` (subtle gray bands)
- **AND** even-numbered rows SHALL have NO background tint (white page
  shows through)

#### Scenario: Occupation sub-blurb renders

- **GIVEN** the body rows render
- **THEN** each Occupation cell SHALL contain the occupation title and,
  beneath it, a block-level small blurb in `#b3b3b3` at font-weight 300
  and 80% font-size
- **AND** the blurb text SHALL be the same kind of placeholder sentence in
  every row (e.g. "Far far away, behind the word mountains" or a
  paraphrase of equal length)

#### Scenario: Name cell renders switch + link

- **GIVEN** the body rows render
- **THEN** each Name cell SHALL contain an iOS-style toggle switch
  positioned LEFT of the name link, vertically centered with about 10px
  margin
- **AND** the name SHALL be an anchor link colored `#007bff` (blue) with
  no underline
- **AND** the switch OFF state SHALL render as a white pill track
  (32×20px, radius 16px, 2px `#ddd` border) with a white 16px knob on
  the LEFT
- **AND** the switch ON state SHALL render as a green track (`#4cd964`
  — implemented as the 10px solid green border treatment or equivalent
  visual) with the knob slid to the RIGHT
- **AND** the initial switch states SHALL match the source: rows 1, 2,
  5, 6 ON (green); rows 3, 4, 7 OFF (white) — or the same KIND of
  mixed on/off distribution

#### Scenario: Details links render plain blue

- **GIVEN** the body rows render
- **THEN** each Details cell (seventh column) SHALL be an anchor link
  with the text "Details" (or a same-kind label), colored `#007bff`
  (blue), NO underline, NO uppercase, NO letter-spacing — the source's
  `.more` class has no styling rule in this template
- **AND** all links (name + details) SHALL have a 0.3s ease color
  transition and never show an underline (default OR hover); hover MAY
  darken to `#0056b3` per the reboot link rule

#### Scenario: Content fidelity

- **GIVEN** the body rows render
- **THEN** the rows SHALL contain the same KIND of demo data as the
  source: 4-digit order ids, person names, design/dev occupations,
  +CC-formatted phone numbers, school names, and a Details link per row
- **AND** exact strings MAY be paraphrased while keeping the same
  structure
- **AND** the duplicate-row pattern (rows 5–7 repeating 2–4) MAY be
  kept or reduced — same KIND either way

### Requirement: Checkboxes render with custom styling and select-all

The system SHALL render custom-styled checkboxes (a checkbox column with
a select-all header control) and reimplement the select-all behavior in
React state — with NO invented row-highlight styling.

#### Scenario: Checkbox visual states

- **GIVEN** the table is visible
- **THEN** every row SHALL have a checkbox in the first cell, and the
  header's first cell SHALL have the select-all checkbox
- **AND** an unchecked checkbox SHALL render as a 20×20px square,
  border-radius 4px, 2px solid `#ccc` border, transparent background
- **AND** the native input SHALL be visually hidden (not the browser
  default checkbox)
- **AND** on hover/focus the indicator border SHALL turn `#007bff`
- **AND** a checked checkbox SHALL render as a `#007bff` filled square
  with a WHITE checkmark icon (lucide Check or inline SVG — the source
  uses an icomoon glyph, which must NOT be copied)
- **AND** all row checkboxes SHALL start UNCHECKED (matching the live
  source DOM)

#### Scenario: Select-all toggles every row checkbox

- **GIVEN** the table is visible with all checkboxes unchecked
- **WHEN** the user checks the header select-all checkbox
- **THEN** every row checkbox SHALL become checked
- **WHEN** the user unchecks the header select-all checkbox
- **THEN** every row checkbox SHALL become unchecked
- **AND** the header checkbox's checked state SHALL be reflected in its
  visual indicator (blue fill + white check)

#### Scenario: Row checkbox toggles independently

- **GIVEN** the table is visible
- **WHEN** the user checks a row checkbox
- **THEN** ONLY that row's checkbox SHALL become checked
- **AND** the header select-all checkbox SHALL NOT auto-check (the
  source JS does not sync the header box from row state)
- **WHEN** the user unchecks it
- **THEN** that row's checkbox SHALL return to unchecked

#### Scenario: No invented active-row styling

- **GIVEN** any checkbox is checked
- **THEN** the row's background, text color, and layout SHALL NOT change
  (the source stylesheet contains NO `.active` rule and NO row hover
  rule — the JS toggles an `active` class that is never styled; only the
  checkbox/switch state itself changes visually)

### Requirement: iOS switches toggle green/white per row

The system SHALL render an iOS-style toggle switch in each Name cell and
allow toggling between the green ON and white OFF states.

#### Scenario: Switch toggles on click

- **GIVEN** the table is visible
- **WHEN** the user clicks (or activates via keyboard) a row's switch
- **THEN** the switch SHALL toggle between ON (green `#4cd964` track,
  knob right) and OFF (white track, 2px `#ddd` border, knob left)
- **AND** toggling one row's switch SHALL NOT affect any other row's
  switch or any checkbox state
- **AND** the switch SHALL be reachable and activatable by keyboard
  (it is a styled native checkbox/checkbox-role control in the source)

### Requirement: Responsive table behavior

The system SHALL keep the white table usable on narrow viewports via
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
  headers (body cells are plain `td`s — omit the source's stray
  `scope="row"` on the first `<tr>`)
- **AND** the heading hierarchy SHALL contain a single h2
- **AND** the select-all and row checkboxes SHALL be real checkbox
  inputs associated with their labels (visually hidden input + label,
  per the source pattern)
- **AND** each switch SHALL be a checkbox-role control inside its label
- **AND** all interactive elements SHALL be keyboard reachable with
  visible focus states (checkbox blue-border focus, switch focus)
- **AND** the demo data SHALL render as real table content (not
  presentational divs)

## Verification checklist

- [ ] Roboto 300/400/500 loaded via Google Fonts `<link>` in `index.html`
- [ ] `@theme` tokens: `--color-page: #fff`, `--color-ink: #212529`,
      `--color-header: #000`, `--color-muted: #777`,
      `--color-blurb: #b3b3b3`, `--color-link: #007bff`,
      `--color-link-hover: #0056b3`, `--color-stripe: rgba(0,0,0,0.05)`,
      `--color-switch-on: #4cd964`, `--color-checkbox-border: #ccc`,
      `--color-switch-border: #ddd`
- [ ] Page shell: white `#fff` background, Roboto weight 300, content
      area `7rem` vertical padding, centered container max-width 1140px /
      15px gutters (540/720/960px breakpoints)
- [ ] Heading "Table #7" (or paraphrase) — 20px / weight 500 / dark ink
      `#212529` (NOT white), 3rem margin-bottom, on the white page above
      the table
- [ ] Responsive wrapper (`overflow-x-auto`) around the table;
      `min-width: 900px`; `border-collapse: collapse`; NO cell borders
- [ ] Header labels: default bold weight / `#000` / NORMAL CASE (no
      uppercase, no letter-spacing), `padding-bottom: 30px`, borderless
      thead, 7 columns (checkbox cell, Order, Name, Occupation, Contact,
      Education, EMPTY 7th cell), `scope="col"`
- [ ] Seven body rows; cell text `#777` at weight 300; 20px vertical +
      0.75rem horizontal cell padding; NO row-cards, radius, gaps, or
      hover shadows; stray `scope="row"` on `<tr>` omitted
- [ ] Odd rows tinted `rgba(0,0,0,0.05)` (stripe class on the table);
      even rows untinted
- [ ] Occupation cells include the block-level `#b3b3b3` / 300 / 80%
      sub-blurb
- [ ] Name cells: iOS switch LEFT of a blue `#007bff` no-underline name
      link, vertically centered, 10px switch margin; switch OFF = white
      pill + 2px `#ddd` border + knob left; ON = green `#4cd964` track +
      knob right; initial states rows 1/2/5/6 ON, 3/4/7 OFF (or same
      KIND of mix)
- [ ] Details links: plain blue `#007bff`, no underline, no uppercase,
      no letter-spacing (the `.more` class has NO rule in this template)
- [ ] Checkboxes: visually hidden native input + 20×20px / radius 4px /
      2px `#ccc` indicator; hover/focus border `#007bff`; checked =
      `#007bff` fill + WHITE checkmark (lucide Check / inline SVG —
      NEVER the icomoon font); all row checkboxes start unchecked
- [ ] Select-all: header checkbox checks/unchecks ALL row checkboxes via
      React state; row checkbox toggles independently; header box does
      NOT auto-sync from row state
- [ ] NO `.active` row styling anywhere (source styles the class never);
      checked rows differ ONLY by checkbox/switch state
- [ ] Switches toggle ON/OFF per row via React state; independent rows;
      keyboard reachable
- [ ] Responsive: horizontal scroll below 900px; layout intact; the
      print-only 992px min-width NOT applied on screen
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh cellswitch`; PR
      `feat/template-cellswitch` with source slug + preview URL (the
      `bootstrap/` path) + tokens in the description
