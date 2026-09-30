# Template: Rowspan (Table)

## Purpose

Rowspan is a static dark-theme data-table page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Table 07" template (source:
https://colorlib.com/wp/template/table-07/ — a single-page snippet:
dark charcoal page `#2b3035`, centered white h2 "Table #07", one
borderless 4-column dark data table (`#343a40`) with a solid header
band, 5 demo people rows separated by dark page-color gaps, no
navbar, no JS, no framework), built under a DIFFERENT name (Rowspan —
the row-span pun of the row-number column; single lowercase word),
per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source slug:** `table-07`
- **Source:** https://colorlib.com/wp/template/table-07/
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-10-01
  by direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-07/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-07/**
  (HTTP 200, 1,941 bytes, HTML `<title>Table 07</title>`). Implementers
  must use the `bootstrap/` path — do not re-derive the slug-only URL.
  (Same non-standard layout as table-01…06 and css-table-11/12/16.)
- **Preview CSS:** the DOM references `css/style.css?v=f1f9ad16`
  (relative to the `bootstrap/` preview path). ⚠️ The correct full URL
  is
  **https://preview.colorlib.com/theme/bootstrap/table-07/css/style.css?v=f1f9ad16**
  — note the `table-07/` segment BEFORE `css/` (resolving the bare
  `bootstrap/css/style.css` path 404s). Verified fetchable at prep time
  (2026-10-01): **HTTP 200, 8,744 bytes**, a single self-contained
  sheet ("Every style this snippet uses, and nothing else. No
  framework, no build step."). Cross-checked: byte-identical (same
  SHA-256) to `css/style.css` inside the source ZIP
  https://preview.colorlib.com/downloads/free/table-07.zip (HTTP 200,
  254,051 bytes). **All design tokens in this spec were captured
  directly from that stylesheet — CSS values are canonical;
  implementers do NOT need to re-fetch it.** (Sheet anatomy:
  Bootstrap-reboot `all: revert` block → box-sizing/print shims →
  `.cl-icon` icon rule → HTML element defaults (body reboot font
  stack, `table { border-collapse: collapse }`, `th { text-align:
  revert }` only) → Roboto `@font-face` 400/700 blocks →
  `.cl-container` responsive container → `.cl-row`/`.cl-col-md-*`
  grid → `.cl-table` base + bordered/hover/dark rules → utilities
  (`.cl-justify-content-center`, `.cl-text-center`, `.cl-mb-5`) →
  print rules → final override block: Poppins `#2b3035` body,
  400-weight headings, `.heading-section` 28px `#fff`, `.ftco-section`
  7em padding, `.table-wrap` scroll, min-width-1000px **dark `#343a40`
  table**, borderless 20px/30px cells separated by 3px/4px `#2b3035`
  gaps.)
- **Font gotcha:** the sheet DECLARES Roboto `@font-face` (400 + 700)
  but **no rule ever references Roboto** — the final `body` override
  sets `"Poppins", Arial, sans-serif`. Implementers load **Poppins
  400 + 700** via Google Fonts (400 = body/h2, 700 = th via UA default
  bold) and must NOT load Roboto.
- **Scripts (source):** NONE — the preview page loads ZERO `<script>`
  tags (verified 2026-10-01 on the live DOM). The ZIP README mentions
  a `js/snippet.js`, but no `js/` folder ships in the ZIP and the live
  page loads none. The only "interactivity" is the CSS row-hover
  highlight — reproduce it with Tailwind `group-hover` (a CSS effect,
  not JS).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-07.jpg
  — ⚠️ served as an **AVIF image 1200×972 despite the `.jpg`
  extension** (same quirk as table-05 — convert before analyzing).
  Analyzed 2026-10-01: dark charcoal canvas, centered white "Table
  #07" heading, one dark panel table with solid header band, white
  bold column labels (bold row numbers in column 1), rows visually
  separated by darker gaps — matches the stylesheet tokens exactly
  (CSS wins over the screenshot on any conflict).

## Design tokens

(Canonical values captured 2026-10-01 directly from the live
stylesheet `https://preview.colorlib.com/theme/bootstrap/table-07/css/style.css?v=f1f9ad16`
— HTTP 200, 8,744 bytes, byte-identical to the source ZIP's sheet.
CSS values are canonical over the screenshot.)

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", Arial, sans-serif` | final `body` rule; Google Fonts link **400 + 700**. The sheet's Roboto `@font-face` blocks are DECLARED BUT UNUSED — do not load Roboto |
| Body text | font-size 16px, line-height 1.8, font-weight 400, color `gray` (= #808080), background **`#2b3035`** (dark charcoal) | **the signature token of table-07** — the only css-table-family entry with a full dark page canvas (table-01…06 siblings are light `#f8f9fd`/white) |
| Heading h2 (final) | Poppins, font-weight **400**, line-height 1.5, color `#000` | final rule overrides the reboot's 500 (same gotcha as css-table-12 / table-01…06) |
| Heading `.heading-section` | font-size **28px**, color **`#fff`**, centered | the single h2 "Table #07" renders WHITE on the dark page (overrides h2's `#000`) |
| Section padding | `.ftco-section { padding: 7em 0 }` | generous whitespace above/below content |
| Container | `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like) |
| Heading wrapper | `.cl-col-md-6` (50% width @768+), text-center, `.cl-mb-5` = **margin-bottom 3rem** | ⚠️ **3rem here** vs table-06's `.cl-mb-4` 1.5rem — siblings differ |
| Table wrapper | `.table-wrap { overflow-x: scroll }` | horizontal scroll below the min-width |
| Table `.cl-table` (final) | `width: 100%; min-width: 1000px !important`; border-collapse **collapse** (reboot) | single table on the page |
| Dark table `.cl-table-dark` (final) | background **`#343a40`**, color **`#fff`**, border-color `#454d55` | ⚠️ earlier sheet rules (`#c6c8ca` / `#95999c`) are OVERRIDDEN by the final `.cl-table-dark` block — `#343a40` is canonical |
| Dark + bordered | `.cl-table-dark.cl-table-bordered { border: 0 }` | the source uses the `cl-table-bordered` class but the final rule kills the outer border — **no visible borders anywhere** |
| Header cells `thead th` (final) | **border none**, padding **20px 30px**, font-size **14px**, color **`#fff`**, border-bottom **4px solid `#2b3035`** | the 4px gap is the PAGE color — reads as a dark separation under the header band, not a border |
| th font-weight | **UA default bold (700)** | the revert block only reverts `th { text-align }` — font-weight is NEVER reverted; screenshot confirms bold labels + bold row numbers |
| Body cells `tbody th, tbody td` (final) | **border none**, padding **20px 30px**, border-bottom **3px solid `#2b3035`**, font-size **14px**, color `#fff` (inherited) | 3px page-color gap under each row |
| Row spacing | `.cl-table tbody tr { margin-bottom: 10px }` | rows read as separated dark bands with gaps |
| Row hover | `.cl-table-dark.cl-table-hover tbody tr:hover { color: #fff; background-color: rgba(255,255,255,0.075) }` | subtle white-7.5% highlight; Tailwind `group-hover:bg-[rgba(255,255,255,0.075)]` |
| Header contrast | white on `#343a40` ≈ **10:1** | WCAG AAA — clean token set, no contrast exceptions needed |
| Body text contrast | `gray` #808080 on `#2b3035` ≈ 3.4:1 | only matters for any stray body copy; the page is heading + table only |
| Table columns (thead) | 4: `#` · `First Name` · `Last Name` · `Email` | header th cells have NO `scope` in the source — the recreation SHALL add `scope="col"` (documented a11y improvement, same as siblings) |
| Row-number cells | `<th scope="row">1</th>` … `5` | **source already has `scope="row"`** — keep; bold white 14px |
| Canonical data | 1 Mark · Otto · markotto@email.com — 2 Jacob · Thornton · jacobthornton@email.com — 3 Larry · the Bird · larrybird@email.com — 4 John · Doe · johndoe@email.com — 5 Gary · Bird · garybird@email.com | same KIND of content may be paraphrased; keep 4 cells × 5 rows (name + name + email) |
| Print rules | thead `table-header-group`, cells forced white, `@page { size: a3 }`, body/container min-width 992px | minor; not required for parity |

## Requirements

### Requirement: Page shell and heading render

The template SHALL render a dark charcoal page shell (background
`#2b3035`, Poppins everywhere with body text at font-size 16px,
line-height 1.8, font-weight 400, color gray, content area with 7em
vertical padding) centered in a responsive container (max-width
1140px at desktop with 15px side padding; 540/720/960px at smaller
breakpoints), with a single h2 heading "Table #07" at font-size 28px,
font-weight 400 (NOT the reboot's 500), color **#fff**, centered,
with its wrapper column about 50% wide at ≥768px and 3rem
margin-bottom.

#### Scenario: Shell renders

- **GIVEN** the user visits the Rowspan home page
- **THEN** the page background is `#2b3035` (dark charcoal)
- **AND** the font family is Poppins (Google Fonts weights 400/700
  loaded; Roboto NOT loaded)
- **AND** the body text renders at font-size 16px, line-height 1.8,
  font-weight 400, color gray
- **AND** the content area has 7em vertical padding

#### Scenario: Headings render

- **GIVEN** the page shell is rendered
- **THEN** exactly one h2 heading reads "Table #07" at font-size 28px,
  font-weight 400 (NOT the reboot's 500), color `#fff`, centered
- **AND** the h2's wrapper column is centered, about 50% wide at
  ≥768px, with 3rem margin-bottom

### Requirement: Dark table shell renders

The template SHALL render the table inside a horizontally scrollable
wrapper; the table SHALL be width 100% with min-width 1000px,
border-collapse collapse, dark background `#343a40`, color `#fff`, and
NO visible borders (the source's bordered class is neutralized by the
final rule) — row separation is achieved with 3px/4px `#2b3035`
page-color bottom gaps, not cell borders.

#### Scenario: Table shell renders

- **GIVEN** the heading area is rendered
- **THEN** a wrapper with horizontal overflow exists below the heading
- **AND** the table has min-width 1000px and width 100%
- **AND** the table background is `#343a40` with white text
- **AND** no cell or outer borders are visible; rows are separated by
  page-color (`#2b3035`) gaps

### Requirement: Header row renders with the canonical column structure

The thead SHALL render one row of FOUR th cells in order: "#",
"First Name", "Last Name", "Email". Header cells SHALL render at
font-size 14px, font-weight bold (UA default — the source sheet never
reverts th weight), color `#fff`, padding 20px 30px, no borders,
border-bottom 4px solid `#2b3035`. All four header cells SHALL carry
`scope="col"` (monorepo a11y improvement — the source omits scope on
thead cells).

#### Scenario: Header row renders

- **GIVEN** the table shell is rendered
- **THEN** the thead contains four th cells in order: "#", "First
  Name", "Last Name", "Email"
- **AND** header text renders at 14px, bold, white on the `#343a40`
  band
- **AND** all four header cells carry `scope="col"`
- **AND** the header band is separated from the first row by a 4px
  `#2b3035` gap

### Requirement: Body rows render the canonical data

The tbody SHALL render exactly 5 body rows, each with 4 cells in
order: a row-number th with `scope="row"` plus three td cells. The
canonical data is:

1. 1 · Mark · Otto · markotto@email.com
2. 2 · Jacob · Thornton · jacobthornton@email.com
3. 3 · Larry · the Bird · larrybird@email.com
4. 4 · John · Doe · johndoe@email.com
5. 5 · Gary · Bird · garybird@email.com

Copy MAY be paraphrased but SHALL keep the same kind of content (first
name + last name + email per row); body cells SHALL render at 14px,
color `#fff`, padding 20px 30px, border-bottom 3px solid `#2b3035`,
no side/top borders; row-number th cells SHALL be bold and carry
`scope="row"`; rows SHALL be spaced by about 10px (margin/gap).

#### Scenario: Rows render

- **GIVEN** the table is rendered
- **THEN** tbody contains 5 rows with the canonical names and emails
  above (or same-kind paraphrases)
- **AND** each row has 4 cells: row-number th (scope="row", bold) +
  three td cells
- **AND** cells render at 14px, white, 20px/30px padding, with 3px
  `#2b3035` bottom gaps and about 10px row spacing

### Requirement: Row hover highlight

Hovering (or keyboard-focusing, if implemented) a body row SHALL
lighten that row's background with `rgba(255,255,255,0.075)` while
keeping the text color `#fff`. This is the ONLY interactivity the
source has — implement via CSS/Tailwind (`group-hover`), no JS state
required.

#### Scenario: Row hover lightens

- **GIVEN** the table renders with 5 rows
- **WHEN** the user hovers a body row
- **THEN** that row's background becomes `rgba(255,255,255,0.075)`
  and its text stays white

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

The table SHALL use semantic markup (`<table>`, `<thead>`, `<tbody>`,
`<th>`, `<td>`); thead cells SHALL carry `scope="col"`; row-number
cells SHALL carry `scope="row"`; the single visible heading SHALL be a
real heading element (h2, matching the source and sibling templates);
hover effects SHALL not remove text contrast.

#### Scenario: Table and page semantics

- **GIVEN** the page renders
- **THEN** the data table is a real `<table>` with `<thead>`/`<tbody>`
- **AND** every thead cell has `scope="col"` and every row-number
  cell has `scope="row"`
- **AND** exactly one heading element ("Table #07") exists on the page
- **AND** the hover highlight preserves white-on-dark contrast

## Verification checklist

- [ ] Poppins 400/700 loaded via Google Fonts `<link>` in
      `index.html` (Roboto NOT loaded — declared-but-unused in the
      source sheet)
- [ ] `@theme` tokens: `--color-page: #2b3035`,
      `--color-panel: #343a40`, `--color-ink: #fff`,
      `--color-heading: #fff`, `--color-muted: #808080`,
      `--color-gap: #2b3035`, `--color-rowhover: rgba(255,255,255,0.075)`
- [ ] Page shell: `#2b3035` background, body 16px / line-height 1.8 /
      weight 400 / color gray, content area `7em` vertical padding,
      centered container max-width 1140px / 15px gutters
      (540/720/960px breakpoints)
- [ ] Heading: single h2 "Table #07" — 28px / font-weight 400 /
      `#fff`, centered, wrapper ~50% @768+ with 3rem margin-bottom
- [ ] Table: `min-width: 1000px` inside an `overflow-x-auto` wrapper;
      background `#343a40`, white text, border-collapse collapse, no
      visible borders
- [ ] thead: 4 th (`#` · `First Name` · `Last Name` · `Email`) —
      14px / bold / white, 20px/30px padding, 4px `#2b3035` bottom
      gap, `scope="col"` on all four
- [ ] tbody: 5 rows with canonical data (Mark Otto / Jacob Thornton /
      Larry the Bird / John Doe / Gary Bird); row-number th bold with
      `scope="row"`; cells 14px / white / 20px/30px padding / 3px
      `#2b3035` bottom gap / ~10px row spacing
- [ ] Hover: `rgba(255,255,255,0.075)` row highlight via CSS/Tailwind
      (no JS required)
- [ ] Responsive: table scrolls in wrapper below 1000px; layout
      intact at narrow viewports
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references
      anywhere in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh rowspan`; PR
      `feat/template-rowspan` with source slug + preview URL
      (`bootstrap/` path) + tokens in the description
