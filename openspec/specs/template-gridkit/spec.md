# Template: Gridkit (Table)

## Purpose

Gridkit is a minimal data-table showcase page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Table 01"
template (source: https://colorlib.com/wp/template/table-01/ — a single-page
data-table snippet: light blue-gray page, one centered heading, one wide
responsive data table with a bright-blue header row and white body rows on
3px page-colored dividers; no navbar, no checkboxes, no imagery, no
framework, no JavaScript), built under a DIFFERENT name (Gridkit — a clean
table/grid toolkit; single lowercase word), per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `table-01`
- **Source:** https://colorlib.com/wp/template/table-01/
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-01/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-01/**
  (HTTP 200, 1,924 bytes, `<title>Table 01</title>`). Implementers must
  use the `bootstrap/` path — do not re-derive the slug-only URL. (Same
  non-standard layout as css-table-11/12, Gridline, Rowglow.)
- **Preview CSS:** `css/style.css?v=0efe9947` (7,469 bytes) — a single
  self-contained sheet ("Every style this snippet uses, and nothing else.
  No framework, no build step."). It first reverts Bootstrap-reboot base
  styles (`all: revert` on html/body/…/table elements), then styles from
  browser defaults: reboot block, `@font-face` Roboto 400/700 (self-hosted
  woff2 — fallback only; the final `body` rule explicitly switches to
  Poppins), `.cl-container` (Bootstrap-like responsive container),
  `.cl-table` (table base + final override: white bg, `min-width:
  1000px`), `.ftco-section` (7em vertical padding), `.heading-section`
  (28px black h2), `.table-wrap` (`overflow-x: scroll`), `.thead-primary`
  (the signature bright-blue header), `.cl-mb-5` / `.cl-text-center`
  (3rem gap, centered heading), plus print rules. NO checkbox/button/
  interactive styles — this snippet has no interactive controls.
- **Scripts (source):** none — the page has NO JavaScript at all.
- **Icons:** none — no icon font, no icon usage in the source.
- **Fonts:** **Poppins** — load Google Fonts `<link>` (weight 400) in
  `index.html`. The preview self-hosts Roboto 400/700 as @font-face
  fallbacks, but the final `body` rule sets `font-family: "Poppins",
  Arial, sans-serif`; body text renders at font-weight normal (400).
- **Assets:** none — the source page has no images. No picsum needed.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-01.jpg
  (served as AVIF, 1200×972; visually analyzed 2026-09-30; matches the
  live preview: light blue-gray page, centered "Table #01" heading,
  blue-header table with 5 sample rows).
- **TEMPLATES.md:** "## Table (25)" section (line 2868) — line 2884
  (`- [ ] **Table 01**`). Slug `table-01` appears exactly ONCE in
  TEMPLATES.md.
- **Naming check:** "gridkit" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30); follows the established
  `-kit` family (btnkit, dropkit, foldkit, pipekit, selkit, showkit,
  swatchkit, toolkit).

## Design tokens

(Canonical CSS values from the live preview stylesheet
`css/style.css?v=0efe9947`, verified 2026-09-30; CSS values are canonical.)

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", Arial, sans-serif` | final `body` rule; Google Fonts link (400). Roboto 400/700 @font-face rules exist as unused fallbacks — ignore them |
| Body text | font-size 16px, line-height 1.8, font-weight 400, color `gray`, background `#f8f9fd` | the **light blue-gray page** is the signature canvas |
| Heading h2 | Poppins, font-weight **400**, line-height 1.5, color `#000` | explicit rule overrides the reboot's 500 (same gotcha as css-table-12) |
| Heading `.heading-section` | font-size **28px**, color `#000`, centered | single h2 "Table #01" |
| Section padding | `.ftco-section { padding: 7em 0 }` | generous whitespace above/below content |
| Heading→table gap | `.cl-mb-5 { margin-bottom: 3rem !important }` + `.cl-text-center` | |
| Container | `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like) |
| Table wrapper | `overflow-x: scroll` | `.table-wrap` — horizontal scroll below the min-width |
| Table | `width: 100%; min-width: 1000px`; background `#fff`; color `#212529` | `.cl-table` (final override rule); `border-collapse: collapse` from reboot |
| Header row `.thead-primary` | background **`#1089ff`** (bright blue) | the signature — a solid blue bar across the table top |
| Header th | border none, padding `20px 30px`, font-size 14px, color `#fff`, **bold** (UA default — snippet never overrides th weight; author `font-bold` for determinism) | white labels on blue |
| Body tr | `margin-bottom: 10px` declared in source — **dead CSS** (table rows ignore margins); do not reproduce |
| Body th/td | border none, padding `20px 30px`, `border-bottom: 3px solid #f8f9fd`, font-size 14px, color `#212529` | the 3px dividers are the PAGE color on the white table — subtle light lines |
| Row-number th (body) | UA default **bold** (snippet never reverts th font-weight), inherits `#212529` | first cell of each row: `<th scope="row">1</th>` … `5` |
| Buttons / links / icons / JS | none | zero interactive controls in the source |
| Print rules | thead `display: table-header-group`, tr `page-break-inside: avoid`, body/container `min-width: 992px` | minor; not required for parity |

## Requirements

### Requirement: Page shell and heading render

The template SHALL render a light blue-gray page shell (background
`#f8f9fd`, Poppins everywhere with body text at font-weight 400, line-height
1.8, content area with about 7em vertical padding) centered in a responsive
container (max-width 1140px at desktop with 15px side padding;
540/720/960px at smaller breakpoints), with a single h2 heading
"Table #01" at font-size 28px, font-weight 400, color `#000`, centered,
and about 3rem margin-bottom.

#### Scenario: Shell renders

- **GIVEN** the user visits the Gridkit home page
- **THEN** the page background is #f8f9fd (light blue-gray)
- **AND** the font family is Poppins (Google Fonts weight 400 loaded)
- **AND** the body text renders at font-size 16px, line-height 1.8,
  font-weight 400, color gray
- **AND** the content area has about 7em vertical padding
- **AND** a centered container (max-width 1140px at desktop, 15px side
  padding; 540/720/960px at smaller breakpoints) holds the page content

#### Scenario: Heading renders

- **GIVEN** the page shell is visible
- **THEN** an h2 heading labeled "Table #01" is displayed at font-size
  28px, font-weight 400, color #000, horizontally centered
- **AND** it has about 3rem margin-bottom above the table

### Requirement: Data table renders with the source column structure

The template SHALL render a responsive data table (width 100%,
min-width 1000px, white background, border-collapse, inside an
overflow-x wrapper) with a bright-blue header row (`#1089ff`) of four
columns ("#", "First Name", "Last Name", "Email Address"; header cells
at bold weight, white 14px text, 20px 30px padding, no borders) and five
body rows. Each body row SHALL start with a `<th scope="row">` number cell
(1–5, bold at the UA default) followed by three `td` cells (first name,
last name, email address) — body cell text `#212529` at 14px with
20px 30px padding and a 3px bottom border in `#f8f9fd` (the page color,
creating the subtle row dividers on the white table). The table SHALL sit
on the white surface with no outer frame, no vertical grid lines, and no
zebra striping beyond the divider treatment.

#### Scenario: Table columns and header row

- **GIVEN** the table is visible
- **THEN** the header row is a solid #1089ff blue bar spanning the table
- **AND** the header lists four columns: "#", "First Name", "Last Name",
  "Email Address"
- **AND** each header cell renders white 14px text at bold weight with
  20px 30px padding and no borders
- **AND** the table background is #fff (white) inside its wrapper

#### Scenario: Data rows render

- **GIVEN** the table is visible
- **THEN** five body rows are displayed
- **AND** each row contains a bold `<th scope="row">` number cell (1–5)
  followed by three td cells: first name, last name, email address
- **AND** body cell text is #212529 at 14px
- **AND** body cells have no vertical grid lines; each row ends with a
  3px bottom border in #f8f9fd (page-colored divider on white)
- **AND** cell padding is 20px vertical, 30px horizontal

#### Scenario: Content fidelity

- **GIVEN** the data rows render
- **THEN** the rows contain the same KIND of demo data as the source:
  sequential row numbers, person first/last names, and email addresses
  (the source uses Mark Otto / Jacob Thornton / Larry the Bird / John
  Doe / Gary Bird with matching `@email.com` addresses)
- **AND** exact strings may be paraphrased while keeping the same
  structure (number + name + name + email per row)

### Requirement: Horizontal-scroll behavior below 1000px

The template SHALL keep the table horizontally scrollable within its
wrapper below the 1000px min-width while the rest of the page layout
stays intact.

#### Scenario: Narrow viewport scrolls horizontally

- **GIVEN** the viewport is narrower than the table min-width (1000px)
- **THEN** the table scrolls horizontally within its wrapper
- **AND** the page layout (heading, container padding, footer) stays intact
- **AND** no horizontal overflow escapes the wrapper

### Requirement: Component Dock attribution footer

The template SHALL render a minimal footer attribution line linking
https://www.componentdock.com/ branded "Component Dock", and NO ColorLib
attribution or links anywhere in the page.

#### Scenario: Attribution present

- **GIVEN** the page footer area is rendered
- **THEN** a minimal attribution line links https://www.componentdock.com/
  branded "Component Dock"
- **AND** NO ColorLib attribution or links appear anywhere in the page

### Requirement: Accessibility (global semantics)

The template SHALL use real table semantics and a correct heading
hierarchy; decorative styling SHALL NOT be the only carrier of meaning.

#### Scenario: Table and page semantics

- **GIVEN** the page is rendered
- **THEN** the table uses thead/tbody with th scope="col" on header
  cells and th scope="row" on the row-number cells
- **AND** the heading hierarchy contains a single h2
- **AND** the demo data is rendered as real table content (not
  presentational divs)
- **AND** the blue header contrast is sufficient for white 14px labels
  (#1089ff background vs #fff text)

## Verification checklist

- [x] Poppins 400 loaded via Google Fonts `<link>` in `index.html`
- [x] `@theme` tokens: `--color-page: #f8f9fd`, `--color-header-blue:
      #1089ff`, `--color-ink: #212529`, `--color-heading: #000`,
      `--color-surface: #fff`
- [x] Page shell: `#f8f9fd` background, body weight 400 / line-height
      1.8, content area `7em` vertical padding, centered container
      max-width 1140px / 15px gutters (540/720/960px breakpoints)
- [x] Heading "Table #01" — 28px / font-weight 400 / `#000`, centered,
      3rem margin-bottom
- [x] Table: `min-width: 1000px` inside an `overflow-x-auto` wrapper;
      white surface; bright-blue `#1089ff` thead (4 columns: # · First
      Name · Last Name · Email Address; white bold 14px labels, 20px 30px
      padding); 5 body rows with bold `<th scope="row">` numbers; body
      text `#212529` 14px; 3px `#f8f9fd` bottom dividers per row; NO
      vertical grid lines, NO zebra striping, NO outer frame
- [x] Responsive: horizontal scroll below 1000px; layout intact
- [x] Do NOT reproduce the source's dead `tbody tr { margin-bottom: 10px }`
      (table rows ignore margins)
- [x] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [x] 100% test coverage via `scripts/verify-app.sh gridkit`; PR
      `feat/template-gridkit` with source slug + preview URL + tokens in
      the description
