# Template: Crossline (Table)

## Purpose

Crossline is a six-table weekly-schedule showcase page with crosshair
row/column hover highlighting, in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free
"Table With Vertical Horizontal Highlight" template (source:
https://colorlib.com/wp/template/table-with-vertical-horizontal-highlight/
— a single-page HTML snippet whose own `<title>`/README call it
"Table V03": a gray full-viewport canvas, six stacked 8-column weekly
schedule tables, each a different color treatment, where hovering ANY
cell cross-highlights its entire row, its entire column, and the exact
cell at three strengths — no navbar, no framework), built under a
DIFFERENT name (Crossline — "crossing lines"; the vertical column line
crosses the horizontal row line at the hovered cell; single lowercase
word), per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

- **Source slug:** `table-with-vertical-horizontal-highlight`
- **Source:** https://colorlib.com/wp/template/table-with-vertical-horizontal-highlight/
  (HTTP 200, 109,258 bytes, verified 2026-10-01)
- **Preview — UNREACHABLE (verified 2026-10-01):** BOTH
  https://preview.colorlib.com/theme/table-with-vertical-horizontal-highlight/
  AND the sibling `bootstrap/` path
  https://preview.colorlib.com/theme/bootstrap/table-with-vertical-horizontal-highlight/
  return **HTTP 404 "Not Found"** (unlike table-04…10 which live under
  the `bootstrap/` path). This snippet is NOT served on the preview
  host at either location.
- **Reference actually used (better than the screenshot fallback):**
  the ColorLib page links the **source ZIP**
  https://preview.colorlib.com/downloads/free/table-with-vertical-horizontal-highlight.zip
  — **HTTP 200, 172,952 bytes** (verified 2026-10-01). Entries:
  `table-with-vertical-horizontal-highlight/index.html` (35,189 B),
  `css/style.css` (9,952 B, 557 lines, "Every style this snippet
  uses, and nothing else. No framework, no build step."),
  `js/snippet.js` (984 B, 22 lines, plain vanilla JS), fonts/
  `Montserrat-Regular.woff2` (80,900 B) + `Montserrat-Medium.woff2`
  (80,880 B), `images/icons/favicon.ico` (32,038 B), `README.md`
  (1,283 B — "Table V03 … A free HTML snippet from Colorlib … No
  jQuery, no Bootstrap, no build step, no CDN call"). **All DOM
  structure, data, and design tokens in this spec were captured
  directly from that ZIP — implementers do NOT need to re-fetch
  anything.** Per docs/replication.md, an unreachable preview falls
  back to the screenshot; here the ZIP is the actual downloadable
  source, so it (plus the screenshot) is the canonical reference.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-with-vertical-horizontal-highlight.jpg
  — ⚠️ served as a **REAL JPEG 1200×560** progressive JFIF (37,079
  bytes) despite the `.jpg` extension — no AVIF conversion needed.
  Analyzed 2026-10-01 with vision: mid-gray `#d1d1d1` canvas; the
  FIRST table (ver1) shown in its hover state — dark plum header band
  with white uppercase day labels, muted gray name/time cells, the
  hovered column (Tuesday) shaded light gray, the hovered row (Beverly
  Reid) shaded light gray, and the exact hovered cell solid indigo
  with white text. ⚠️ The screenshot's sample data DIFFERS from the
  ZIP's (screenshot: Lawrence Scott Mon = 2:00 PM, Beverly Reid Tue
  hover = "10:10 AM"; ZIP: Lawrence Scott Mon = "--", Beverly Reid
  Tue = 5:00 PM) — the ZIP data is canonical (it is the actual source
  download; the live preview is gone). The screenshot captures only
  the top table; the full page stacks all six.
- **Fonts (source):** `@font-face` Montserrat-Regular + Montserrat-Medium
  loaded from local woff2 files. The recreation MUST load **Montserrat
  400 + 500** via Google Fonts `<link>` in `index.html` (asset-copy
  rule — never ship the woff2 files). The sheet's reboot sets a system
  body stack, but every table cell explicitly overrides to Montserrat.
- **Source JS (the signature behavior):** `js/snippet.js` — vanilla
  IIFE, no jQuery. For EVERY cell with class `column100`: on
  `mouseover`, find the enclosing `<table data-vertable="verN">` and
  the cell's `data-column="columnN"`, then toggle class
  `hov-column-verN` on ALL cells (thead th + tbody td) sharing that
  column key in the table, and toggle `hov-column-head-verN` on that
  column's header cell; on `mouseout`, remove both. Row hover and
  exact-cell hover are PURE CSS (`:hover` on `tr` / `td`). So the
  crosshair has three strengths: exact cell (strongest accent),
  whole row (CSS), whole column (JS class). React translation:
  `hoveredColumn` state per table; cell `onMouseEnter` sets it; table
  wrapper `onMouseLeave` clears it; ver1–5 header cells render
  `hov-column-head-verN` while their column is hovered, ver6 header
  cells render plain `hov-column-ver6` (the sheet has NO
  `hov-column-head-ver6` rule — ver6's header cell joins the column
  highlight at the same translucent value).
- **No heading, no navbar, no footer in the source** — the six tables
  are the entire page body (zero `<h1>`–`<h6>`, zero `<header>`,
  `<nav>`, `<footer>`, zero links). The recreation adds ONLY the
  monorepo-required Component Dock footer (documented divergence).
- **TEMPLATES.md:** "## Table (25)" section at line 2868; item at
  line 2894; slug `table-with-vertical-horizontal-highlight` appears
  exactly ONCE.
- **Name collision check:** "crossline" = 0 hits in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, and TEMPLATES.md
  (case-insensitive), 2026-10-01. Distinct from the existing Table-
  family names (gridkit, rowdeck, domkit, gridmark, statusline,
  rowline, rowspan, tabula, billstack, rowtint, gridline, rowglow,
  gridspan, rowcard, gridpane, nightgrid, cellswitch, cellgrid,
  cellcrew, cellmate — "Crossline" is the only name evoking the
  column×row CROSSING that is this template's whole point) and from
  the ColorLib source name "Table With Vertical Horizontal Highlight".
- **Sibling context:** the ONLY multi-table page in the family (all
  siblings render exactly ONE table), the ONLY JS-interactive table
  on main (all others are static or CSS-only — Tabula's accordion is
  the nearest neighbor), the ONLY gradient-card table (ver6), and the
  ONLY table on a mid-gray `#d1d1d1` canvas (siblings use `#fafafa`,
  `#f8f9fd`, or blue-gray). Font is Montserrat (siblings: Poppins).

## Design tokens

(Canonical values captured 2026-10-01 directly from the source ZIP's
stylesheet `css/style.css` — 9,952 B, 557 lines — plus `js/snippet.js`
behavior. The preview host 404s, so the ZIP IS the canonical source;
CSS values are canonical over the screenshot.)

### Global (every table)

| Token                             | Value                                                                                                                                                                                                  | Notes                                                                                                                                                                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Font family (cells + headers)     | Montserrat — Regular **400** on `td`, Medium **500** on `th`                                                                                                                                           | source ships local woff2 named `Montserrat-Regular`/`Montserrat-Medium`; recreation loads **Google Fonts Montserrat 400 + 500** (asset rule — never copy woff2)       |
| Page canvas `.container-table100` | background **`#d1d1d1`** (mid-gray), `min-height: 100vh`, flex centered (`align-items: center; justify-content: center; flex-wrap: wrap`), padding **33px 30px**                                       | the ONLY page background in the family that is mid-gray — ⚠️ NOT `#fafafa`/`#f8f9fd`                                                                                  |
| Content wrap `.wrap-table100`     | source `width: 1300px`; recreation `max-width: 1300px; width: 100%`                                                                                                                                    | fixed-width in source (page-level horizontal scroll on narrow viewports); recreation wraps each table in `overflow-x-auto` instead (documented robustness divergence) |
| Table gap `.m-b-110`              | **margin-bottom: 110px** on ALL six table wrappers (source applies it to every `.table100`, including the last)                                                                                        | keep 110px after the last table too for parity                                                                                                                        |
| Table base                        | `width: 100%`, background **`#fff`** (ver6: `transparent`), border-radius **0** (ver6: **16px** + `overflow: hidden`)                                                                                  | white cards on gray, except the ver6 gradient card                                                                                                                    |
| Header cell `th`                  | Montserrat **500**, font-size **12px**, color **`#fff`**, line-height 1.4, `text-transform: uppercase`, padding **top 24px / bottom 20px**, padding-left 25px (265px column: 42px), padding-right 10px | source text is mixed-case ("Sunday"); CSS renders uppercase                                                                                                           |
| Body cell `td`                    | Montserrat **400**, font-size **14px**, color **`#808080`**, line-height 1.4, padding **top 18px / bottom 14px**, padding-left 25px (name column: 42px), padding-right 10px                            | `font-weight: unset` in source = inherit = normal; set `font-normal` EXPLICITLY (UA th default is bold)                                                               |
| Name column `.column100.column1`  | width **265px**, padding-left **42px**                                                                                                                                                                 | double-width first column (person names)                                                                                                                              |
| Day columns `.column100`          | width **130px** each, padding-left **25px**                                                                                                                                                            | Sunday…Saturday                                                                                                                                                       |

### Per-version treatments (ver1–ver6, top→bottom)

| Ver  | Header `th` bg                                 | Even-row stripe                                        | Row hover (tbody `tr:hover td`)                         | Column highlight (tbody, `hov-column-verN`)                                                                  | Column-head highlight (`hov-column-head-verN`)                                                 | Exact-cell hover (`td:hover`)                                                       |
| ---- | ---------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| ver1 | **`#36304a`** dark plum                        | —                                                      | bg **`#f2f2f2`**                                        | bg **`#f2f2f2`**                                                                                             | bg **`#484848`** `!important`                                                                  | bg **`#6c7ae0`** indigo, color **`#fff`**                                           |
| ver2 | **`#333333`** charcoal                         | bg **`#eaf8e6`** mint                                  | bg **`#83d160`** green, color **`#fff`**                | bg **`#83d160`**, color **`#fff`**                                                                           | bg **`#484848`** `!important`                                                                  | bg **`#57b846`** deeper green, color **`#fff`**                                     |
| ver3 | **`#6c7ae0`** indigo                           | — (+ tbody `tr` border-bottom **1px solid `#e5e5e5`**) | bg **`#fcebf5`** pale pink (color stays `#808080`)      | bg **`#fcebf5`**                                                                                             | bg **`#7b88e3`** lighter indigo `!important`                                                   | bg **`#e03e9c`** pink, color **`#fff`**                                             |
| ver4 | **`#fa4251`** coral red                        | —                                                      | color **`#fa4251`** only — ⚠️ NO background change      | bg **`#ffebed`** blush                                                                                       | bg **`#f95462`** `!important`                                                                  | bg **`#ffebed`**, color **`#fa4251`**                                               |
| ver5 | **`#002933`** dark teal                        | bg **`#e9faff`** ice                                   | color **`#fe3e64`** rose only — ⚠️ NO background change | color **`#fe3e64`** + `::before` overlay **border-left/right 1px solid `#f2f2f2`** (td `position: relative`) | bg **`#1a3f48`** `!important`, color **`#fe3e64`**                                             | color **`#fe3e64`** + `::before` overlay **border 1px solid `#fe3e64`** (all sides) |
| ver6 | **`rgba(255,255,255,0.32)`** translucent white | —                                                      | bg **`rgba(255,255,255,0.1)`**                          | bg **`rgba(255,255,255,0.1)`** (header cell TOO — joins the column highlight)                                | ⚠️ **NO `hov-column-head-ver6` rule exists** — the header cell renders plain `hov-column-ver6` | bg **`rgba(255,255,255,0.2)`**                                                      |

**ver6 card shell:** `.table100.ver6 { border-radius: 16px; overflow:
hidden; background: linear-gradient(-68deg, #ac32e4, #4801ff) }`
(fallback solid `#7918f2`); `.table100.ver6 table { background-color:
transparent }`; `.table100.ver6 td { color: #fff }` (Montserrat 14px
kept). The ONLY rounded/gradient table in the family.

### Canonical data (identical in all six tables, from the ZIP)

thead row: corner `<th>` **EMPTY** (recreation: visually-hidden
label, e.g. "Name") · Sunday · Monday · Tuesday · Wednesday ·
Thursday · Friday · Saturday (8 columns). tbody = 8 rows, name cell

- 7 time cells (`"--"` = empty slot):

1. Lawrence Scott — 8:00 AM · -- · -- · 8:00 AM · -- · 5:00 PM · 8:00 AM
2. Jane Medina — -- · 5:00 PM · 5:00 PM · -- · 9:00 AM · -- · --
3. Billy Mitchell — 9:00 AM · -- · -- · -- · -- · 2:00 PM · 8:00 AM
4. Beverly Reid — -- · 5:00 PM · 5:00 PM · -- · 9:00 AM · -- · --
5. Tiffany Wade — 8:00 AM · -- · -- · 8:00 AM · -- · 5:00 PM · 8:00 AM
6. Sean Adams — -- · 5:00 PM · 5:00 PM · -- · 9:00 AM · -- · --
7. Rachel Simpson — 9:00 AM · -- · -- · -- · -- · 2:00 PM · 8:00 AM
8. Mark Salazar — 8:00 AM · -- · -- · 8:00 AM · -- · 5:00 PM · 8:00 AM

Copy MAY be paraphrased but SHALL keep the same kind of content (8
staff × 7-day schedule, times or `--`, identical across all six
tables) and the 8×8 grid shape.

## Requirements

### Requirement: Page shell renders the gray canvas and centered 1300px wrap

The template SHALL render a full-viewport mid-gray page shell
(background `#d1d1d1`, min-height 100vh) with the content area flex-
centered both axes (align-items center, justify-content center) and
33px/30px vertical/horizontal padding, containing one content wrap
at `max-width: 1300px; width: 100%` (the source uses a fixed
1300px; the recreation adapts to narrow viewports — documented
divergence). There SHALL be NO navbar, NO page heading (zero
h1–h6 — the source has none), and NO other page chrome besides the
Component Dock footer required by the monorepo.

#### Scenario: Gray canvas renders

- **GIVEN** the user visits the Crossline home page
- **THEN** the page background is `#d1d1d1` (mid-gray) and fills at
  least the viewport height
- **AND** the content wrap is horizontally centered with max-width
  1300px and side padding 30px (vertical 33px)
- **AND** no h1–h6 heading and no navbar exist on the page

### Requirement: Six treatment tables render in order with canonical schedule data

The page SHALL render exactly SIX tables stacked top→bottom in ver1,
ver2, ver3, ver4, ver5, ver6 order, each wrapped in a block with
**110px** margin-bottom (applied after every table, including the
last). Every table SHALL contain the identical canonical dataset:
an 8-column thead (empty/visually-hidden corner cell + Sunday ·
Monday · Tuesday · Wednesday · Thursday · Friday · Saturday) and 8
tbody rows (name + 7 time cells, `"--"` for empty slots) as listed in
the Design tokens section. Copy MAY be paraphrased but SHALL keep the
same kind of content (8 staff × 7-day week, times or `--`, identical
across all six tables).

#### Scenario: Six tables in order

- **GIVEN** the page shell is rendered
- **THEN** exactly six `<table>` elements exist, ordered ver1 → ver6
- **AND** each table wrapper has 110px bottom margin
- **AND** every table has the same 8-column thead and 8×8 tbody grid
  of names + times/`--`

### Requirement: Table structure and typography render (Montserrat, uppercase headers, muted cells)

Each table SHALL use semantic markup (`<table>`, `<thead>`, `<tbody>`,
`<tr>`, `<th>`, `<td>`). Header cells SHALL render at Montserrat
weight **500**, font-size **12px**, color **`#fff`**, line-height
1.4, `text-transform: uppercase` (source text mixed-case), padding
top 24px / bottom 20px / left 25px (name column 42px) / right 10px,
and SHALL carry `scope="col"` (source omits scope — documented a11y
improvement). Body cells SHALL render at Montserrat weight **400**
(explicit — `font-weight: unset` in source inherits normal, and the
UA default for `th` is bold), font-size **14px**, color **`#808080`**,
line-height 1.4, padding top 18px / bottom 14px / left 25px (name
column 42px) / right 10px. The name column SHALL be 265px wide and
day columns 130px (min-widths; the table fills the 1300px wrap).
The name cell MAY render as `<th scope="row">` with `font-normal`
(identical visuals; documented a11y improvement over the source's
plain `<td>`). The corner header cell is EMPTY in the source; the
recreation SHALL carry a visually-hidden label (e.g. "Name").

#### Scenario: Typography renders

- **GIVEN** any table renders
- **THEN** header cells show uppercase day names at 12px / weight
  500 / `#fff` on the version's header color
- **AND** body cells show names and times at 14px / weight 400 /
  `#808080`
- **AND** header padding is 24px/20px top/bottom and body padding is
  18px/14px (left 25px, name column 42px, right 10px everywhere)

#### Scenario: Semantics

- **GIVEN** any table renders
- **THEN** every labeled header cell has `scope="col"`
- **AND** the corner cell has a visually-hidden accessible name
- **AND** (if upgraded) name cells are `<th scope="row">` with
  normal weight — visually identical to a plain td

### Requirement: ver1 — plum header, light-gray row/column, indigo cell

ver1 SHALL render: header cells background **`#36304a`** (dark plum)
with white text; body cells `#808080` on white; **no** stripe. Hover
states: hovered row cells background **`#f2f2f2`**; hovered column
body cells background **`#f2f2f2`**; hovered column's header cell
background **`#484848`** (the `!important` head treatment overrides
the column class that also lands on the th); exact hovered cell
background **`#6c7ae0`** (indigo) with color **`#fff`**. The indigo
cell hover is the state captured in the TEMPLATES.md screenshot.

#### Scenario: ver1 static + hover states

- **GIVEN** the ver1 table renders
- **THEN** its header band is `#36304a` with white uppercase labels
- **WHEN** the user hovers a body cell
- **THEN** that row's cells turn `#f2f2f2`, that column's body cells
  turn `#f2f2f2`, that column's header cell turns `#484848`, and the
  exact cell turns `#6c7ae0` with white text

### Requirement: ver2 — charcoal header, mint stripes, green row/column, deeper-green cell

ver2 SHALL render: header background **`#333333`**; even tbody rows
striped **`#eaf8e6`** (mint); hover states: row cells background
**`#83d160`** with **white** text; hovered column body cells
background **`#83d160`** white text; column header cell background
**`#484848`**; exact hovered cell background **`#57b846`** (deeper
green) white text.

#### Scenario: ver2 static + hover states

- **GIVEN** the ver2 table renders
- **THEN** its header band is `#333333` and even rows are striped
  `#eaf8e6`
- **WHEN** the user hovers a body cell
- **THEN** the row and the column turn `#83d160` with white text, the
  column header turns `#484848`, and the exact cell turns `#57b846`
  with white text

### Requirement: ver3 — indigo header, pink row/column, magenta cell, row borders

ver3 SHALL render: header background **`#6c7ae0`** (indigo); tbody
rows carry border-bottom **1px solid `#e5e5e5`** (the only table with
row separators). Hover states: row cells background **`#fcebf5`**
(pale pink, text stays `#808080`); hovered column body cells
background **`#fcebf5`**; column header cell background **`#7b88e3`**
(lighter indigo); exact hovered cell background **`#e03e9c`** (pink)
white text.

#### Scenario: ver3 static + hover states

- **GIVEN** the ver3 table renders
- **THEN** its header band is `#6c7ae0` and tbody rows have 1px
  `#e5e5e5` bottom borders
- **WHEN** the user hovers a body cell
- **THEN** the row and column turn `#fcebf5` (text unchanged), the
  column header turns `#7b88e3`, and the exact cell turns `#e03e9c`
  with white text

### Requirement: ver4 — coral header, text-only row hover, blush column, coral cell

ver4 SHALL render: header background **`#fa4251`** (coral red);
hover states: hovered row cells change **color only to `#fa4251`**
— ⚠️ NO background change on the row (unlike ver1–3); hovered column
body cells background **`#ffebed`** (blush); column header cell
background **`#f95462`**; exact hovered cell background **`#ffebed`**
with color **`#fa4251`**.

#### Scenario: ver4 static + hover states

- **GIVEN** the ver4 table renders
- **THEN** its header band is `#fa4251`
- **WHEN** the user hovers a body cell
- **THEN** the hovered row's cells recolor to `#fa4251` WITHOUT a
  background change, the column turns `#ffebed`, the column header
  turns `#f95462`, and the exact cell turns `#ffebed` with `#fa4251`
  text

### Requirement: ver5 — dark teal header, ice stripes, rose text treatment with border overlays

ver5 SHALL render: header background **`#002933`** (dark teal); even
tbody rows striped **`#e9faff`** (ice). Hover states: hovered row
cells change **color only to `#fe3e64`** (rose) — ⚠️ NO background
change; hovered column body cells recolor to **`#fe3e64`** and carry
a `::before`-style overlay with border-left/right **1px solid
`#f2f2f2`** (td `position: relative`; recreation MAY use
`border-x border-[#f2f2f2]` on highlighted cells — same visual);
column header cell background **`#1a3f48`** with color **`#fe3e64`**;
exact hovered cell recolors to **`#fe3e64`** with a 1px
**`#fe3e64`** border overlay on all sides (recreation MAY use a
`ring`/`border` utility — same visual).

#### Scenario: ver5 static + hover states

- **GIVEN** the ver5 table renders
- **THEN** its header band is `#002933` and even rows are striped
  `#e9faff`
- **WHEN** the user hovers a body cell
- **THEN** the hovered row recolors to `#fe3e64` without a background
  change, the column recolors to `#fe3e64` with 1px `#f2f2f2` side
  borders, the column header turns `#1a3f48` with `#fe3e64` text, and
  the exact cell recolors to `#fe3e64` with a 1px `#fe3e64` outline

### Requirement: ver6 — purple-blue gradient card, translucent white treatment, NO head highlight

ver6 SHALL render as a card: border-radius **16px**, `overflow:
hidden`, background **`linear-gradient(-68deg, #ac32e4, #4801ff)`**
(purple→blue; fallback solid `#7918f2`); the table background is
transparent (gradient shows through); body cells keep Montserrat
14px but color **`#fff`**; header cells background
**`rgba(255,255,255,0.32)`**. Hover states: hovered row cells
background **`rgba(255,255,255,0.1)`**; hovered column cells —
body AND header — background **`rgba(255,255,255,0.1)`** (⚠️ the
sheet has NO `hov-column-head-ver6` rule: the header cell joins the
plain column highlight, unlike ver1–5's distinct head treatment);
exact hovered cell background **`rgba(255,255,255,0.2)`**.

#### Scenario: ver6 static + hover states

- **GIVEN** the ver6 table renders
- **THEN** it is a 16px-rounded card with the `-68deg` purple-blue
  gradient, transparent table bg, white 14px cells, and
  `rgba(255,255,255,0.32)` header cells
- **WHEN** the user hovers a body cell
- **THEN** the row and the full column (header cell included) turn
  `rgba(255,255,255,0.1)` and the exact cell turns
  `rgba(255,255,255,0.2)`
- **AND** the column's header cell renders the PLAIN column value
  (no distinct head-highlight class exists for ver6)

### Requirement: Crosshair hover behavior highlights row, column, and cell

The template SHALL reproduce the source's three-strength crosshair on
pointer hover over ANY cell (header or body): (1) the whole row
highlights via CSS `:hover` (per-version row treatment); (2) the
whole column highlights via interaction state — hovering any cell
sets that table's hovered column to the cell's column key, applying
the per-version `hov-column-verN` class to every cell in that column
(and `hov-column-head-verN` to the header cell for ver1–5; ver6's
header cell gets only the plain column class); (3) the exact cell
gets the strongest per-version `:hover` treatment. Leaving the table
(wrapper `onMouseLeave`) SHALL clear the hovered column so all
column highlights disappear. The behavior SHALL be implemented in
React state (no copied JS; no framework in the app beyond React) and
SHALL work identically on all six tables independently (hovering
table 2 never affects table 1). This highlight is a pointer-only
cosmetic enhancement: cells are NOT focusable (no tabindex — the
source has no keyboard support, and 384 tab stops would harm
keyboard users); all data is fully readable without it.

#### Scenario: Crosshair engages on cell hover

- **GIVEN** the ver1 table renders
- **WHEN** the user hovers the cell at row "Beverly Reid" × column
  "Tuesday"
- **THEN** Beverly Reid's row highlights (row treatment), the whole
  Tuesday column highlights (column treatment), Tuesday's header
  cell highlights (head treatment), and that exact cell gets the
  strongest cell treatment
- **AND** the other five tables are unaffected

#### Scenario: Column highlight tracks the hovered cell

- **GIVEN** the user hovers a cell in column "Monday" of ver2
- **WHEN** the user moves to another cell in the SAME column without
  leaving the table
- **THEN** the Monday column highlight persists (same column key)
- **WHEN** the user moves to a cell in column "Friday"
- **THEN** Monday's highlight clears and Friday's applies

#### Scenario: Leaving the table clears the crosshair

- **GIVEN** a column highlight is active in ver3
- **WHEN** the pointer leaves the table wrapper
- **THEN** all column and head highlights clear (row/cell hover
  states end naturally with the pointer)

#### Scenario: Header-cell hover engages the column too

- **GIVEN** the ver4 table renders
- **WHEN** the user hovers the "Thursday" header cell
- **THEN** the Thursday column highlights (blush) and Thursday's
  header cell gets the head treatment (`#f95462`), matching the
  source's behavior of highlighting the column from header hover

### Requirement: Responsive horizontal scroll below natural table width

The tables' natural width (265px name column + 7×130px day columns +
paddings ≈ 1240px) may exceed narrow viewports. Each table SHALL sit
in an `overflow-x-auto` wrapper so narrow viewports scroll the table
horizontally without breaking the gray canvas or the 110px rhythm
(the source has no scroll wrapper — its 1300px wrap overflows at
page level; the recreation's per-table scroll is a documented
robustness divergence). At ≥1300px the tables fill the wrap width.

#### Scenario: Narrow viewport scrolls the table

- **GIVEN** the viewport is narrower than the tables' natural width
- **THEN** each table wrapper scrolls horizontally
- **AND** the gray canvas, spacing, and other tables remain intact

### Requirement: Component Dock attribution footer

The app SHALL include a minimal footer linking
https://www.componentdock.com/ branded as "Component Dock" (monorepo
rule — the source snippet has no footer; documented divergence; keep
it visually quiet: small muted text, e.g. 14px `#808080`). The app
SHALL NOT reference ColorLib anywhere (comments included — provenance
lives only in this spec, TEMPLATES.md, and the PR).

#### Scenario: Attribution present

- **GIVEN** any page of the app
- **THEN** a footer link to https://www.componentdock.com/ exists
  ("Component Dock" branding)
- **AND** no file in the app contains "colorlib" (case-insensitive)

### Requirement: Accessibility (global semantics)

The tables SHALL use semantic markup; labeled header cells SHALL
carry `scope="col"`; the corner cell SHALL have a visually-hidden
accessible name; name cells MAY be `<th scope="row">` with explicit
`font-normal` (documented improvement); header weight 500 and body
weight 400 SHALL be set EXPLICITLY (the source relies on
`font-weight: unset` inheriting normal — the UA default for `th` is
bold, and Tailwind preflight does not reset it); all text SHALL meet
readable contrast on its static background (hover states follow the
source values verbatim — e.g. `#808080` on `#f2f2f2` ver1 row hover
is a source-faithful choice); the hover crosshair is pointer-only
(no tabindex on data cells — documented choice, data fully readable
statically); exactly zero headings exist (source parity — the page's
accessible name comes from the document title).

#### Scenario: Table semantics

- **GIVEN** the page renders
- **THEN** every table is a real `<table>` with `<thead>`/`<tbody>`
- **AND** every labeled header cell has `scope="col"` and the corner
  cell has a visually-hidden name
- **AND** header cells render at weight 500 and body cells at weight
  400 (explicit, no UA-bold leak)
- **AND** no data cell is keyboard-focusable and no h1–h6 exists

## Verification checklist

- [ ] Montserrat **400 + 500** loaded via Google Fonts `<link>` in
      `index.html` (NO woff2 files shipped — asset rule)
- [ ] `@theme` tokens: `--color-canvas: #d1d1d1`,
      `--color-celltext: #808080`, `--color-headtext: #fff`,
      plus per-version header/hover/cell hexes (see token table):
      ver1 `#36304a`/`#f2f2f2`/`#484848`/`#6c7ae0`, ver2
      `#333333`/`#eaf8e6`/`#83d160`/`#57b846`/`#484848`, ver3
      `#6c7ae0`/`#fcebf5`/`#7b88e3`/`#e03e9c`/`#e5e5e5`, ver4
      `#fa4251`/`#ffebed`/`#f95462`, ver5 `#002933`/`#e9faff`/
      `#fe3e64`/`#1a3f48`/`#f2f2f2`, ver6 gradient `#ac32e4`→`#4801ff`
      (radius 16px, translucent whites)
- [ ] Page shell: `#d1d1d1` canvas, min-h-screen, flex-centered,
      padding 33px 30px, wrap max-w 1300px; zero headings, zero
      navbar
- [ ] Six tables ver1→ver6, each with 110px bottom margin (including
      after ver6); identical 8×8 canonical dataset in all six
- [ ] Typography: th 12px/500/uppercase/`#fff`/padding 24-20/25/10;
      td 14px/400/`#808080`/padding 18-14/25/10; name column 265px +
      42px left padding, day columns 130px; `scope="col"` on labeled
      headers; visually-hidden corner label; weights set explicitly
- [ ] ver1–ver6 hover treatments match the per-version token table
      exactly — including ver4/ver5's TEXT-ONLY row hover (no bg),
      ver5's border overlays, and ver6's **missing** head-highlight
      (header cell joins the plain column class)
- [ ] Crosshair: per-table `hoveredColumn` state; cell mouseenter
      sets, wrapper mouseleave clears; ver1–5 header cells get the
      head class while their column is hovered; six tables behave
      independently; no tabindex on cells
- [ ] ver6 card: 16px radius, `-68deg` gradient, transparent table,
      white cells, `rgba(255,255,255,0.32)` header
- [ ] Responsive: per-table `overflow-x-auto` wrappers below natural
      width; layout intact at narrow viewports
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references
      anywhere in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh crossline`
      (hover logic fully testable with `fireEvent.mouseOver`/
      `mouseLeave`; jsdom cannot compute styles — assert classes/
      structure, not computed colors); PR `feat/template-crossline`
      with source slug + ZIP/screenshot URLs + tokens in the
      description
