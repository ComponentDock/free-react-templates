# Template: Rowdeck (Table)

## Purpose

Rowdeck is a card-style dismissible data-table showcase page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Table 02" template (source:
https://colorlib.com/wp/template/table-02/ — a single-page data-table
snippet: light blue-gray page, one centered heading, one wide data table
with a DARK CHARCOAL (`#343a40`) header bar and WHITE ROW CARDS floating
on the page background (10px gaps via `border-spacing: 0 10px`, subtle
per-row drop shadows, 0.25rem row radius), each row ending with a small
RED dismiss × — no navbar, no imagery, no framework, no JavaScript),
built under a DIFFERENT name (Rowdeck — the deck of floating table rows;
single lowercase word), per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `table-02`
- **Source:** https://colorlib.com/wp/template/table-02/
  (links `preview.colorlib.com/theme/bootstrap/table-02/`)
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-02/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-02/**
  (HTTP 200, 6,199 bytes, `<title>Table 02</title>`). Implementers must
  use the `bootstrap/` path — do not re-derive the slug-only URL. (Same
  non-standard layout as css-table-11/12/16, table-01, Gridline,
  Rowglow, Nightgrid, Gridkit.)
- **Preview CSS:** `css/style.css?v=8362951b` (9,178 bytes) — a single
  self-contained sheet ("Every style this snippet uses, and nothing
  else. No framework, no build step."). It first reverts
  Bootstrap-reboot base styles (`all: revert` on common elements), then
  styles everything from browser defaults: reboot block, `@font-face`
  Roboto 400/700 (self-hosted woff2 — fallback only; the final `body`
  rule switches to Poppins), `.cl-container` (Bootstrap-like responsive
  container), `.cl-table` (table base + final override:
  `border-collapse: separate; border-spacing: 0 10px; min-width:
  1000px` — the row-card signature), `.cl-thead-dark` (dark charcoal
  header), `.cl-alert` (row-card look: radius 0.25rem), `.cl-close`
  (dismiss × styling), `.ftco-section` (7em vertical padding),
  `.heading-section` (28px black h2), `.table-wrap`
  (`overflow-x: scroll`), `.cl-mb-5` / `.cl-text-center` /
  `.cl-justify-content-center` (3rem gap, centered heading), plus print
  rules.
- **Scripts (source):** NONE — the preview page loads ZERO `<script>`
  tags (verified 2026-09-30 on the live DOM). The row dismiss buttons
  carry Bootstrap `data-dismiss="alert"` / `role="alert"` markup but are
  **inert in the preview** (no Bootstrap JS is loaded). In the React
  recreation the dismiss button SHALL be functional (remove the row from
  state) — that is the evident intent of the markup — with a minimal
  empty-state line when every row is dismissed (monorepo convention for
  data-driven sections; the source has no empty state).
- **Icons:** the source inlines Font Awesome `fa-close` as an inline
  SVG (fill `currentColor`). Recreation: `lucide-react` `X` icon, red
  `#dc3545`, ~12px (the CSS renders the icon span at `font-size: 12px;
  color: #dc3545`).
- **Fonts:** **Poppins** — load Google Fonts `<link>` (weight 400) in
  `index.html`. The preview self-hosts Roboto 400/700 as @font-face
  fallbacks, but the final `body` rule sets `font-family: "Poppins",
  Arial, sans-serif`; body text renders at font-weight normal (400).
- **Assets:** none — the source page has no images. No picsum needed.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-02.jpg
  (served as AVIF despite the .jpg extension, 1200×972; visually
  analyzed 2026-09-30 after conversion; matches the live preview: light
  blue-gray page, centered "Table #02" heading, dark charcoal header
  bar, 5 white floating row cards with subtle shadows and small red ×
  buttons at the right edge of each row).
- **TEMPLATES.md:** "## Table (25)" section (line 2868) — line 2885
  (`- [ ] **Table 02**`). Slug `table-02` appears exactly ONCE in
  TEMPLATES.md.
- **Naming check:** "rowdeck" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30; repo-wide grep also clean);
  follows the established row/grid family (rowcard, rowglow, gridline,
  gridspan, gridpane, gridkit) and the `-deck` family (appdeck,
  navdeck, photodeck, skydeck, studydeck, swipedeck, wizdeck).

## Design tokens

(Canonical CSS values from the live preview stylesheet
`css/style.css?v=8362951b`, verified 2026-09-30; CSS values are
canonical.)

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", Arial, sans-serif` | final `body` rule; Google Fonts link (400). Roboto 400/700 @font-face rules exist as unused fallbacks — ignore them |
| Body text | font-size 16px, line-height 1.8, font-weight 400, color `gray`, background `#f8f9fd` | the **light blue-gray page** is the signature canvas (same as Gridkit) |
| Heading h2 | Poppins, font-weight **400**, line-height 1.5, color `#000` | explicit rule overrides the reboot's 500 (same gotcha as css-table-12 / table-01) |
| Heading `.heading-section` | font-size **28px**, color `#000`, centered | single h2 "Table #02" |
| Section padding | `.ftco-section { padding: 7em 0 }` | generous whitespace above/below content |
| Heading→table gap | `.cl-mb-5 { margin-bottom: 3rem !important }` + `.cl-text-center` | |
| Container | `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like) |
| Table wrapper | `overflow-x: scroll` | `.table-wrap` — horizontal scroll below the min-width |
| Table | `width: 100%; min-width: 1000px`; color `#212529`; **`border-collapse: separate; border-spacing: 0 10px`** | `.cl-table` final override — the vertical spacing between rows is REAL via border-spacing (NOT margins on tr). Tailwind: `border-separate border-spacing-y-[10px]` — do NOT use `border-collapse` (collapse kills the gaps AND the row shadows) |
| Header bar `.cl-thead-dark th` | background **`#343a40`** (dark charcoal), color `#fff`, border-color `#454d55` | the signature dark bar across the table top |
| Header th | border none, padding `30px`, font-size 14px, color `#fff`, **bold** (UA default — snippet never overrides th weight; author `font-bold` for determinism) | white labels on charcoal |
| Body tr | `margin-bottom: 10px` declared in source — **dead CSS** (tr margins don't apply; the real 10px gap comes from `border-spacing`) — do NOT reproduce as margin | |
| Body tr shadow | `box-shadow: 0px 5px 12px -12px rgba(0, 0, 0, 0.29)` | subtle drop shadow per row card (works on `tr` only with `border-separate`) |
| Row radius | `.cl-alert { border-radius: 0.25rem; border: 1px solid transparent }` (class on each `tr`) | rows render as softly rounded white cards; keep the 1px transparent border for parity of box model |
| Body th/td | border none, padding `30px`, font-size 14px, background **`#fff`** | white cells on the `#f8f9fd` page = floating cards |
| Row-number th (body) | UA default **bold** (snippet never reverts th font-weight), inherits `#212529` | first cell of each row: `<th scope="row">001</th>` … `005` |
| Close button `.cl-close` | float right, font-size 1.5rem, font-weight 700, color `#000`, `text-shadow: 0 1px 0 #fff`, opacity `.5`; hover/focus opacity `.75` | the × hit target (icon itself is overridden to 12px red) |
| Close icon (inner span) | font-size **12px**, color **`#dc3545`** (Bootstrap danger red) | lucide `X` at `#dc3545`, ~12px, in the recreation |
| Link color (global) | `#1089ff`, transition `.3s all ease` | no visible plain links in this snippet (only the close buttons); token kept for parity |
| Table columns | 5: `ID no.` · `First Name` · `Last Name` · `Email` · (empty actions column) | header of the 5th column is `&nbsp;` |
| Buttons / JS / other interactive | none besides the dismiss × per row | the source preview is inert; recreation makes × functional per Purpose |
| Print rules | thead `display: table-header-group`, tr `page-break-inside: avoid`, body/container `min-width: 992px` | minor; not required for parity |

## Requirements

### Requirement: Page shell and heading render

The template SHALL render a light blue-gray page shell (background
`#f8f9fd`, Poppins everywhere with body text at font-weight 400,
line-height 1.8, content area with about 7em vertical padding) centered
in a responsive container (max-width 1140px at desktop with 15px side
padding; 540/720/960px at smaller breakpoints), with a single h2 heading
"Table #02" at font-size 28px, font-weight 400, color `#000`, centered,
and about 3rem margin-bottom.

#### Scenario: Shell renders

- **GIVEN** the user visits the Rowdeck home page
- **THEN** the page background is #f8f9fd (light blue-gray)
- **AND** the font family is Poppins (Google Fonts weight 400 loaded)
- **AND** the body text renders at font-size 16px, line-height 1.8,
  font-weight 400, color gray
- **AND** the content area has about 7em vertical padding
- **AND** a centered container (max-width 1140px at desktop, 15px side
  padding; 540/720/960px at smaller breakpoints) holds the page content

#### Scenario: Heading renders

- **GIVEN** the page shell is visible
- **THEN** an h2 heading labeled "Table #02" is displayed at font-size
  28px, font-weight 400, color #000, horizontally centered
- **AND** it has about 3rem margin-bottom above the table

### Requirement: Data table renders with the source column structure

The template SHALL render a responsive data table (width 100%,
min-width 1000px, inside an overflow-x wrapper, `border-collapse:
separate` with `border-spacing: 0 10px`) with a DARK CHARCOAL header bar
(`#343a40`) of five columns ("ID no.", "First Name", "Last Name",
"Email", and an empty actions column; header cells at bold weight,
white 14px text, 30px padding, no borders) and five body rows. Each
body row SHALL start with a `<th scope="row">` ID cell (001–005, bold
at the UA default) followed by three `td` cells (first name, last name,
email) and a final `td` holding the dismiss button — body cell text
`#212529` at 14px with 30px padding on a **white** background, no cell
borders, no zebra striping, no vertical grid lines.

#### Scenario: Table columns and header bar

- **GIVEN** the table is visible
- **THEN** the header row is a solid #343a40 charcoal bar spanning the
  table
- **AND** the header lists five columns: "ID no.", "First Name",
  "Last Name", "Email", and an empty fifth (actions) column
- **AND** each header cell renders white 14px text at bold weight with
  30px padding and no borders
- **AND** the header text color is #fff on the #343a40 background

#### Scenario: Data rows render

- **GIVEN** the table is visible
- **THEN** five body rows are displayed
- **AND** each row contains a bold `<th scope="row">` ID cell (001–005)
  followed by three td cells: first name, last name, email address
- **AND** a fifth td holds the dismiss button
- **AND** body cell text is #212529 at 14px on white (#fff) background
- **AND** body cells have no borders and no zebra striping
- **AND** cell padding is 30px on all sides

#### Scenario: Content fidelity

- **GIVEN** the data rows render
- **THEN** the rows contain the same KIND of demo data as the source:
  zero-padded sequential ID numbers, person first/last names, and email
  addresses (the source uses Mark Otto / Jacob Thornton / Larry the Bird
  / John Doe / Gary Bird with matching `@email.com` addresses)
- **AND** exact strings may be paraphrased while keeping the same
  structure (ID + name + name + email per row)

### Requirement: Row-card visual signature (gaps, shadow, radius)

The template SHALL render each body row as a floating white card on the
light blue-gray page: real vertical gaps of 10px between rows (via
`border-spacing: 0 10px` on a `border-separate` table — NOT row
margins), a subtle drop shadow per row (`box-shadow: 0 5px 12px -12px
rgba(0, 0, 0, 0.29)`), and a soft 0.25rem corner radius on each row.
The table SHALL NOT use `border-collapse: collapse` (it would destroy
both the gaps and the row shadows).

#### Scenario: Row cards separate from the canvas

- **GIVEN** the table is visible on the #f8f9fd page
- **THEN** consecutive body rows are separated by a visible ~10px gap
  showing the page color between them
- **AND** each row renders as a white card with a subtle bottom-weighted
  shadow
- **AND** each row has slightly rounded corners (~0.25rem)
- **AND** the table uses border-separate semantics (Tailwind
  `border-separate border-spacing-y-[10px]`), not collapsed borders

### Requirement: Functional dismiss button per row

Each body row SHALL end with a dismiss button (icon-only, lucide `X`
icon at ~12px in `#dc3545`, `aria-label="Close"`, opacity 0.5 at rest,
0.75 on hover/focus) that removes its row from the table when activated.
When all rows have been dismissed, the template SHALL render a minimal
muted empty-state line in place of the table body (monorepo convention
for data-driven sections; the source preview is inert and has no empty
state).

#### Scenario: Dismissing a row

- **GIVEN** five rows are rendered
- **WHEN** the user activates the dismiss button on row "003"
- **THEN** row 003 is removed from the table
- **AND** the remaining four rows keep their order, gaps, shadows, and
  styling
- **AND** the button is a real `<button>` with an accessible name
  ("Close")

#### Scenario: Dismissing all rows

- **GIVEN** only one row remains
- **WHEN** the user activates its dismiss button
- **THEN** the table body is empty
- **AND** a minimal muted empty-state message is displayed (no invented
  imagery or CTAs)
- **AND** the header bar and page shell remain intact

### Requirement: Horizontal-scroll behavior below 1000px

The template SHALL keep the table horizontally scrollable within its
wrapper below the 1000px min-width while the rest of the page layout
stays intact.

#### Scenario: Narrow viewport scrolls horizontally

- **GIVEN** the viewport is narrower than the table min-width (1000px)
- **THEN** the table scrolls horizontally within its wrapper
- **AND** the page layout (heading, container padding, footer) stays
  intact
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
hierarchy; interactive dismiss controls SHALL be real buttons with
accessible names; decorative styling SHALL NOT be the only carrier of
meaning. The Bootstrap `role="alert"` on source rows SHALL NOT be
reproduced (live-region semantics do not belong on data-table rows —
the dismiss buttons carry the interaction instead).

#### Scenario: Table and page semantics

- **GIVEN** the page is rendered
- **THEN** the table uses thead/tbody with th scope="col" on header
  cells and th scope="row" on the ID cells
- **AND** the heading hierarchy contains a single h2
- **AND** the demo data is rendered as real table content (not
  presentational divs)
- **AND** every dismiss control is a `<button>` with `aria-label`
- **AND** no `role="alert"` appears on table rows
- **AND** the white-on-charcoal header contrast (#fff on #343a40) and
  the red icon (#dc3545 on #fff) are sufficient for their sizes

## Verification checklist

- [ ] Poppins 400 loaded via Google Fonts `<link>` in `index.html`
- [ ] `@theme` tokens: `--color-page: #f8f9fd`, `--color-header-dark:
      #343a40`, `--color-ink: #212529`, `--color-heading: #000`,
      `--color-surface: #fff`, `--color-danger: #dc3545`
- [ ] Page shell: `#f8f9fd` background, body weight 400 / line-height
      1.8, content area `7em` vertical padding, centered container
      max-width 1140px / 15px gutters (540/720/960px breakpoints)
- [ ] Heading "Table #02" — 28px / font-weight 400 / `#000`, centered,
      3rem margin-bottom
- [ ] Table: `min-width: 1000px` inside an `overflow-x-auto` wrapper;
      `border-separate` + `border-spacing-y-[10px]` (10px row gaps);
      charcoal `#343a40` thead (5 columns: ID no. · First Name · Last
      Name · Email · empty actions; white bold 14px labels, 30px
      padding); 5 white-body rows with bold `<th scope="row">` IDs
      001–005; body text `#212529` 14px on `#fff`, 30px padding; per-row
      `box-shadow: 0 5px 12px -12px rgba(0,0,0,0.29)`; ~0.25rem row
      radius; NO borders, NO zebra striping, NO collapsed borders
- [ ] Dismiss button per row: lucide `X`, ~12px, `#dc3545`,
      `aria-label="Close"`, opacity 0.5 → 0.75 hover/focus; clicking
      removes the row; empty-state line when all rows are gone
- [ ] Do NOT reproduce the source's dead `tbody tr { margin-bottom:
      10px }` (tr margins don't apply; border-spacing provides the gap)
- [ ] Do NOT add `role="alert"` to rows (source Bootstrap markup;
      inert in preview; a11y anti-pattern on tr)
- [ ] Responsive: horizontal scroll below 1000px; layout intact
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh rowdeck`; PR
      `feat/template-rowdeck` with source slug + preview URL + tokens in
      the description
