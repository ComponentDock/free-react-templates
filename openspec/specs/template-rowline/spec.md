# Template: Rowline (Table)

## Purpose

Rowline is a cart-style line-item data-table page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Table 06" template (source:
https://colorlib.com/wp/template/table-06/ — a single-page snippet:
light blue-gray page `#f8f9fd`, centered h2 "Table #06" + centered h3
"Table Accordion", one wide 7-column cart table with a **sage-green
`#99b19c` header bar** — the signature token of this entry — white
card-style rows on the blue-gray canvas, each row a sage checkbox +
100×80px product thumbnail + product name over a small gray blurb +
unit price + a small bordered quantity input + line total + a small red
× remove button; no navbar, no JS, no framework), built under a
DIFFERENT name (Rowline — the row-based line items of the cart table;
single lowercase word), per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

- **Source slug:** `table-06`
- **Source:** https://colorlib.com/wp/template/table-06/
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-06/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-06/**
  (HTTP 200, 10,103 bytes, HTML `<title>Table 06</title>`). Implementers
  must use the `bootstrap/` path — do not re-derive the slug-only URL.
  (Same non-standard layout as css-table-11/12/16, table-01, table-02,
  table-03, table-04, table-05 — Gridline, Nightgrid, Gridkit, Rowdeck,
  Domkit, Gridmark, Statusline.)
- **Preview CSS:** the DOM references `css/style.css?v=86fd68ee`
  (relative to the `bootstrap/` preview path). ⚠️ The correct full URL
  is
  **https://preview.colorlib.com/theme/bootstrap/table-06/css/style.css?v=86fd68ee**
  — note the `table-06/` segment BEFORE `css/` (resolving the bare
  `bootstrap/css/style.css` path 404s). Verified fetchable at prep time
  (2026-09-30): **HTTP 200, 13,348 bytes**, a single self-contained
  sheet ("Every style this snippet uses, and nothing else. No
  framework, no build step."). **All design tokens in this spec were
  captured directly from that stylesheet — CSS values are canonical;
  implementers do NOT need to re-fetch it.** (Sheet anatomy:
  Bootstrap-reboot `all: revert` block → box-sizing/print shims →
  `.fa`/`.cl-icon` icon rules → HTML element defaults (body reboot font
  stack, table border-collapse) → `.cl-container` responsive container
  → `.cl-row`/`.cl-col-md-*` grid → `.cl-table` base + thead rules →
  `.cl-alert`/`.cl-close` card + dismiss rules → `.checkbox-wrap`
  custom-checkbox rules → `.cl-form-control`/`.cl-input-group` form
  rules → utilities (`.cl-border-bottom-0`, `.cl-justify-content-center`,
  `.cl-text-center`, `.cl-mb-4`) → print rules → final override block:
  Poppins `#f8f9fd` body, 400-weight headings, `.ftco-section` 7em
  padding, 28px heading, `.table-wrap` scroll, min-width-1000px shadowed
  table, **sage `#99b19c` `.thead-primary` bar**, white 30px cells,
  product thumbnails, close spans, quantity inputs, custom checkbox
  glyphs → FontAwesome subset @font-face.)
- **Scripts (source):** NONE — the preview page loads ZERO `<script>`
  tags (verified 2026-09-30 on the live DOM). Every interactive control
  (checkboxes, quantity inputs, remove buttons) is inert markup on the
  source; line totals are static text. In the React recreation these
  SHALL be real interactive elements: checkboxes toggle, quantity
  inputs are editable and recompute the row's line total, remove
  buttons delete the row from React state (documented divergence — the
  source controls are inert only because its snippet ships no JS; a
  functional cart demo is the monorepo pattern for data-table
  templates, keeps tests meaningful, and preserves the source's visual
  design exactly).
- **Fonts:** **Poppins** — load Google Fonts `<link>` with weights
  **400, 500, 700** in `index.html`. The final `body` rule sets
  `font-family: "Poppins", Arial, sans-serif` (body 16px /
  line-height 1.8 / weight 400). Weight **500** is required: thead
  header cells and the checkbox labels set font-weight 500 explicitly.
  Weight **700** is the `.cl-close` button chrome (font-size 1.5rem,
  weight 700 — though its visible × span overrides size/color). ⚠️ The
  preview's own head has **NO Google Fonts link** — Poppins is declared
  in CSS but never loaded there (falls back to Arial); the only
  @font-face rules are a FontAwesome subset. The recreation SHALL load
  Poppins properly.
- **Assets:** the source page references **4 product thumbnails**
  `images/product-1.png` … `images/product-4.png` (sneaker product
  shots on white), rendered as 100×80px background-image boxes
  (`background-size: cover; background-position: center`); row 5
  reuses `product-1.png`. The recreation SHALL NOT copy them — use
  deterministic placeholders:
  `https://picsum.photos/seed/rowline-<n>/200/160` (n = 1…5; 200×160
  sources for retina, displayed at 100×80), same cover treatment.
- **Icons:** the source uses Font Awesome `fa-close` (the × remove
  glyph, rendered 12px `#dc3545` via the inner span) and Font Awesome
  `fa-square-o`/`fa-check-square` checkbox glyphs (20px,
  `rgba(0,0,0,0.1)` unchecked / `#99b19c` checked, via
  `.checkmark:after` content codes `\f0c8`/`\f14a`). The recreation
  uses `lucide-react` `X` for remove, and `Square`/`SquareCheck` (or a
  custom styled control) at those tokens for checkboxes.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-06.jpg
  (served as a real **JPEG**, 1200×972 — unlike table-05's AVIF-disguise;
  visually analyzed 2026-09-30; matches the live preview: light
  blue-gray page, centered "Table #06" heading over centered "Table
  Accordion" subheading, white table card with soft shadow, solid
  sage-green header bar with white column labels, white rows with faint
  gaps, sage checked checkbox on row 1, light-gray unchecked squares on
  rows 2–5, small product thumbnails, small bordered quantity boxes with
  values 2/1/1/1/1, small red × per row).
- **TEMPLATES.md:** "## Table (25)" section (line 2868) — line 2889
  (`- [ ] **Table 06**`). Slug `table-06` appears exactly ONCE in
  TEMPLATES.md.
- **Naming check:** "rowline" collides with nothing in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, or any bold name in
  TEMPLATES.md (case/space-insensitive check verified 2026-09-30);
  reads naturally for the row-based line items of the cart table.
  (Distinct from the existing `gridline` spec — different slug, no
  folder collision.)

## Design tokens

(Canonical values captured 2026-09-30 directly from the live
stylesheet `https://preview.colorlib.com/theme/bootstrap/table-06/css/style.css?v=86fd68ee`
— HTTP 200, 13,348 bytes. CSS values are canonical over the
screenshot.)

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", Arial, sans-serif` | final `body` rule; Google Fonts link **400 + 500 + 700**. FontAwesome @font-face exists only for the checkbox/× glyphs — ignore beyond that |
| Body text | font-size 16px, line-height 1.8, font-weight 400, color `gray` (= #808080), background **`#f8f9fd`** | the light blue-gray canvas (same as Statusline/table-05; Gridmark/table-04 was pure white — sibling values differ per entry) |
| Heading h2/h3/h5 | Poppins, font-weight **400**, line-height 1.5, color `#000` | final rule overrides the reboot's 500 (same gotcha as css-table-12 / table-01…05); computed h2/h3 = 400 |
| Heading `.heading-section` | font-size **28px**, color `#000`, centered | single h2 "Table #06" |
| Subheading `h3.cl-h5` | font-size **1.25rem** (20px), weight 400, color `#000`, margin-bottom **1.5rem** (`.cl-mb-4`), text-center | "Table Accordion" — UNIQUE to table-06 vs siblings (Statusline had only one heading) |
| Heading wrapper | `.cl-col-md-6` (50% width @768+, `flex: 0 0 50%; max-width: 50%`), text-center, `.cl-mb-4` = **margin-bottom 1.5rem** | ⚠️ 1.5rem here vs Statusline's `.cl-mb-5` 3rem — siblings differ |
| Section padding | `.ftco-section { padding: 7em 0 }` | generous whitespace above/below content |
| Container | `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like) |
| Table wrapper | `.table-wrap { overflow-x: scroll }` | horizontal scroll below the min-width |
| Table `.cl-table` (final) | `width: 100%; min-width: 1000px !important`; color `#212529`; **box-shadow `0px 5px 12px -12px rgba(0,0,0,0.29)`**; margin-bottom 1rem | border-collapse **collapse** (reboot default); table background is white via its cells |
| Header row `thead.thead-primary` | background **`#99b19c`** (sage/olive green) | **the signature token of table-06** — the ONLY css-table entry with a fully colored header bar (Domkit purple / Rowdeck charcoal / Statusline lavender-underline white differ) |
| Header cells `thead th` | **border none**, padding **30px**, font-size **13px**, font-weight **500**, color **`#fff`**, vertical-align bottom | ⚠️ **13px** — smaller than body cells (14px); white labels on sage |
| Header contrast | white 13px on `#99b19c` ≈ **2.3:1** (computed from the token) | below WCAG AA for normal text — the recreation keeps the source tokens for fidelity; labels SHALL remain real, `scope="col"` text (documented contrast limitation) |
| Body row quirk | `.cl-table tbody tr { margin-bottom: 10px }` + `tbody td { border-bottom: 4px solid #f8f9fd }` | the 4px separator is the **same color as the page** — reads as a gap between white rows |
| Body `tbody td` | **border none**, padding **30px**, font-size **14px**, background **`#fff`**, vertical-align middle | cells inherit table color `#212529` |
| Last-row override | `.cl-border-bottom-0 { border-bottom: 0 !important }` applied to **all 7 cells of row 5** | source marks the final row explicitly |
| Row card `tr.cl-alert` | position relative; padding `0.75rem 1.25rem`; margin-bottom 1rem; border `1px solid transparent`; border-radius `0.25rem` | every body row carries the alert-card rule; with collapse + white cells the rounded corners are visually subtle — the screenshot shows white bands + faint gaps; match the screenshot |
| Product cell `.email span` | display block (name line at body 14px, `#212529`) | "Sneakers Shoes 2020 For Men" on all 5 rows in the source |
| Blurb `.email span:last-child` | display block; font-size **12px**; color **`rgba(0,0,0,0.3)`** | "Fugiat voluptates quasi nemo, ipsa perferendis" on all 5 rows |
| Product thumbnail `td .img` | **100×80px**, `background-size: cover; background-position: center` | source `images/product-1…4.png` (row 5 reuses product-1) → `picsum.photos/seed/rowline-<n>/200/160` |
| Price / total cells | plain td text, 14px, `#212529` | unit price and static line total ("$44.99" … "$89.98") |
| Quantity cell `td.quantity` | **width 10%** | contains `.cl-input-group` + one input |
| Quantity input | `<input type="text" name="quantity" class="quantity cl-form-control input-number" min="1" max="100">` — values **2, 1, 1, 1, 1** | single bordered input (no ± steppers in the DOM); `.cl-form-control` focus ring: border-color **`#80bdff`**, box-shadow **`0 0 0 0.2rem rgba(0,123,255,0.25)`** |
| Remove button `.cl-close` | float right; font-size **1.5rem**; font-weight **700**; color `#000`; text-shadow `0 1px 0 #fff`; opacity **.5**; hover/focus opacity **.75** | button resets: padding 0, background transparent, border 0, appearance none |
| Remove × span | font-size **12px**; color **`#dc3545`** (red); `aria-hidden="true"` | the SPAN wins visually — small red ×, not a large black one; lucide `X` at 12px `#dc3545` |
| Remove button semantics | source: `<button type="button" class="cl-close" aria-label="Close">` (no `data-dismiss` on this entry) | keep `aria-label` (accessible name); React state removal instead of inert markup |
| Checkbox label `.checkbox-wrap` | display block; position relative; cursor pointer; font-size 16px; font-weight **500**; user-select none | wraps a REAL input |
| Checkbox input | position absolute; **opacity 0**; height 0; width 0 (visually hidden but focusable — NOT display:none) | keyboard-testable; keeps native checked semantics |
| Checkbox glyph `.checkmark:after` | content FontAwesome `\f0c8` (empty square); color **`rgba(0,0,0,0.1)`**; font-size **20px**; margin-top **-14px**; transition **0.3s** (`prefers-reduced-motion: reduce` → none) | unchecked = light-gray square |
| Checkbox checked | content `\f14a` (check-square); color **`#99b19c`** (`.checkbox-primary` overrides the base `rgba(0,0,0,0.2)`) | **sage accent** — matches the header bar |
| Default checkbox state | **row 1 `checked`; rows 2–5 unchecked** (verified in live DOM) | replicate exactly |
| Print rules | thead `table-header-group`, tr/img `break-inside: avoid`, body/container `min-width: 992px`, cells forced white, `@page { size: a3 }` | minor; not required for parity |
| Row data (canonical) | 1. Sneakers Shoes 2020 For Men · Fugiat voluptates quasi nemo, ipsa perferendis · **$44.99** · qty **2** · **$89.98** · **checked** (product-1) — 2. same name/blurb · **$30.99** · qty 1 · $30.99 (product-2) — 3. · **$35.50** · 1 · $35.50 (product-3) — 4. · **$76.99** · 1 · $76.99 (product-4) — 5. · **$40.00** · 1 · $40.00 (product-1 reused, borderless) | same KIND of content may be paraphrased; keep structure (name + blurb + unit price + qty + line total) |
| Table columns (thead) | 7: `[checkbox]` · `[thumbnail]` · `Product` · `Price` · `Quantity` · `total` · `[remove]` — th[0], th[1], th[6] are EMPTY in the source; "total" is lowercase in the source | label only the middle 4 with `scope="col"` |

## Requirements

### Requirement: Page shell and headings render

The template SHALL render a light blue-gray page shell (background
`#f8f9fd`, Poppins everywhere with body text at font-weight 400,
line-height 1.8, color gray, content area with about 7em vertical
padding) centered in a responsive container (max-width 1140px at
desktop with 15px side padding; 540/720/960px at smaller breakpoints),
with a single h2 heading "Table #06" at font-size 28px, font-weight
400, color `#000`, centered (wrapper column 50% wide at ≥768px with
about 1.5rem margin-bottom), and below it a single h3 subheading
"Table Accordion" at font-size 1.25rem, font-weight 400, color `#000`,
centered, with about 1.5rem margin-bottom.

#### Scenario: Shell renders

- **GIVEN** the user visits the Rowline home page
- **THEN** the page background is `#f8f9fd` (light blue-gray)
- **AND** the font family is Poppins (Google Fonts weights 400/500/700
  loaded)
- **AND** the body text renders at font-size 16px, line-height 1.8,
  font-weight 400, color gray
- **AND** the content area has about 7em vertical padding

#### Scenario: Headings render

- **GIVEN** the page shell is rendered
- **THEN** exactly one h2 heading reads "Table #06" at font-size 28px,
  font-weight 400 (NOT the reboot's 500), color `#000`, centered
- **AND** exactly one h3 heading reads "Table Accordion" at
  font-size 1.25rem, font-weight 400, color `#000`, centered, with
  about 1.5rem margin-bottom
- **AND** the h2's wrapper column is centered, about 50% wide at
  ≥768px, with about 1.5rem margin-bottom

### Requirement: Table wrapper and table shell render

The template SHALL render the table inside a horizontally scrollable
wrapper; the table SHALL be width 100% with min-width 1000px, color
`#212529`, box-shadow `0px 5px 12px -12px rgba(0,0,0,0.29)`,
border-collapse collapse, and effective white background (via white
cells).

#### Scenario: Table shell renders

- **GIVEN** the subheading area is rendered
- **THEN** a wrapper with horizontal overflow exists below the table
- **AND** the table has min-width 1000px and the soft drop shadow
- **AND** the table content color is `#212529`

### Requirement: Header row renders with the sage bar and source column structure

The table SHALL render a thead row of SEVEN th cells: an empty first
column (checkbox), an empty second column (thumbnail), then labeled
columns "Product", "Price", "Quantity", "total" (lowercase in the
source — keep), then an empty seventh column (remove). The header row
SHALL carry the sage-green background `#99b19c`; header cells SHALL
render at font-size 13px, font-weight 500, color `#fff`, padding 30px,
no borders, vertical-align bottom. Labeled headers SHALL use
`scope="col"`.

#### Scenario: Header row renders

- **GIVEN** the table shell is rendered
- **THEN** the thead contains seven th cells in order: empty, empty,
  "Product", "Price", "Quantity", "total", empty
- **AND** the header row background is the sage green `#99b19c`
- **AND** header text renders at 13px / weight 500 / white on the sage
  bar
- **AND** "Product", "Price", "Quantity", and "total" carry
  scope="col"

### Requirement: Body rows render the canonical cart data

The table SHALL render exactly 5 body rows, each with 7 cells in
order: checkbox cell, thumbnail cell, product cell (name + blurb),
unit-price cell, quantity cell, line-total cell, remove-button cell.
The canonical data is:

1. Sneakers Shoes 2020 For Men · Fugiat voluptates quasi nemo, ipsa
   perferendis · $44.99 · qty 2 · $89.98 (checkbox default-checked;
   thumbnail product-1)
2. same name/blurb · $30.99 · qty 1 · $30.99 (product-2)
3. same name/blurb · $35.50 · qty 1 · $35.50 (product-3)
4. same name/blurb · $76.99 · qty 1 · $76.99 (product-4)
5. same name/blurb · $40.00 · qty 1 · $40.00 (product-1 reused)

Copy MAY be paraphrased but SHALL keep the same kind of content
(product name + short blurb + unit price + quantity + line total);
row 5's cells SHALL carry no bottom border; body cells SHALL render at
14px on white with 30px padding, vertical middle, no borders.

#### Scenario: Rows render

- **GIVEN** the table is rendered
- **THEN** tbody contains 5 rows with the canonical names, blurbs,
  prices, quantities, and totals above (or same-kind paraphrases)
- **AND** each row has 7 cells in the source order
- **AND** cells render at 14px, background #fff, padding 30px,
  vertical middle, no borders
- **AND** the last row's cells have no bottom border

### Requirement: Product cell shows thumbnail and stacked name/blurb

Each product cell SHALL contain a 100×80px thumbnail (background-image
cover, center) and a stacked text block: the product name at body size
in `#212529`, and below it the blurb at 12px in `rgba(0,0,0,0.3)`.
Thumbnails SHALL use deterministic placeholder images (picsum seed
rowline-<n>), never source assets.

#### Scenario: Product cell renders

- **GIVEN** a body row is rendered
- **THEN** the thumbnail cell shows a 100×80 background-image box
- **AND** the name line renders above the blurb line in the product
  cell
- **AND** the blurb renders at 12px in rgba(0,0,0,0.3)
- **AND** thumbnails come from picsum.photos seeds (rowline-1…5), not
  copied source images

### Requirement: Quantity inputs are editable and recompute line totals

Each quantity cell SHALL render a real, editable text input (source:
`type="text" name="quantity" min="1" max="100"`) defaulting to the
canonical values (2, 1, 1, 1, 1) in a bordered single-control input
group at 10% column width. Editing the quantity SHALL recompute that
row's line total as unit price × quantity, formatted as currency
(row 1: 44.99 × 2 = $89.98 by default). Values below 1 or above 100
SHALL be clamped to the source's min/max. The input SHALL show the
Bootstrap-style focus ring (border-color `#80bdff`, box-shadow
`0 0 0 0.2rem rgba(0,123,255,0.25)`). (Documented divergence — the
source ships no JS; totals are static text there. Recomputation is the
meaningful cart interaction the monorepo pattern calls for and does
not alter the visual design.)

#### Scenario: Quantity defaults render

- **GIVEN** the body rows are rendered
- **THEN** each row shows a bordered quantity input with the canonical
  value (2, 1, 1, 1, 1)
- **AND** each row's line total shows the canonical value
- **AND** inputs carry min=1 and max=100

#### Scenario: Editing quantity recomputes the total

- **GIVEN** the table is rendered
- **WHEN** the user changes row 3's quantity from 1 to 4
- **THEN** row 3's line total updates to unit price × 4
- **AND** other rows' totals are unchanged
- **WHEN** the user enters 0 or 101
- **THEN** the value clamps to 1 or 100 and the total follows

### Requirement: Checkboxes toggle with the sage glyph

Each row's checkbox SHALL be a real, focusable `<input type="checkbox">`
(visually hidden via opacity 0 — not display:none) inside a clickable
label, with a 20px square glyph: unchecked light gray
`rgba(0,0,0,0.1)`, checked sage `#99b19c`. Row 1 SHALL default to
checked; rows 2–5 unchecked. Toggling SHALL update the glyph with a
0.3s transition that disables under `prefers-reduced-motion: reduce`.
Each checkbox SHALL have an accessible name identifying its row product
(the source label has no text — the recreation adds one).

#### Scenario: Checkbox default state renders

- **GIVEN** the page loads
- **THEN** row 1's checkbox is checked with the sage glyph
- **AND** rows 2–5 checkboxes are unchecked with light-gray glyphs
- **AND** every checkbox is a real input, keyboard-focusable

#### Scenario: Checkbox toggles

- **GIVEN** a user clicks or keyboard-toggles an unchecked checkbox
- **THEN** its glyph switches to the sage check-square
- **AND** toggling back restores the light-gray empty square
- **AND** the transition is disabled under prefers-reduced-motion

### Requirement: Remove buttons remove rows

Each row SHALL end with a remove button (source: `.cl-close` with
aria-label "Close") rendering a small 12px `#dc3545` × icon
(lucide X), right-aligned, with the button chrome at opacity .5
hovering/focusing to .75. Clicking the button SHALL remove that row
from the table via React state (documented divergence — the source
button is inert because its snippet ships no JS). The button SHALL be
keyboard-reachable with its accessible name preserved.

#### Scenario: Remove button renders

- **GIVEN** a body row is rendered
- **THEN** its last cell contains a button with an accessible name
- **AND** the × icon renders at 12px in #dc3545
- **AND** the button chrome sits at opacity .5

#### Scenario: Remove button removes the row

- **GIVEN** the table shows 5 rows
- **WHEN** the user activates a row's remove button
- **THEN** that row disappears from the table
- **AND** the remaining rows keep their data, thumbnails, and
  checkboxes

### Requirement: Row card styling and separators

Body rows SHALL render as white bands on the `#f8f9fd` page: cells
white with 30px padding; a 4px `#f8f9fd` bottom separator between
rows (same color as the page — reads as a gap) plus about 10px row
margin; the last row SHALL have no separator. The source's
`tr.cl-alert` rule (transparent 1px border, 0.25rem radius, 0.75rem
1.25rem padding) SHALL be approximated so the rendered result matches
the screenshot (white bands with faint gaps under the sage header) —
exact border-collapse rendering of tr radius is browser-dependent;
visual parity with the screenshot is the acceptance bar.

#### Scenario: Row separators render

- **GIVEN** multiple rows are rendered
- **THEN** rows read as separate white bands with faint gaps between
  them
- **AND** the last row has no bottom separator
- **AND** the overall look matches the reference screenshot

### Requirement: Horizontal-scroll behavior below the min-width

The table SHALL remain horizontally scrollable within its wrapper
below the 1000px min-width while the rest of the page layout stays
intact.

#### Scenario: Narrow viewport scrolls horizontally

- **GIVEN** the viewport is narrower than the table min-width (1000px)
- **THEN** the table scrolls horizontally within its wrapper
- **AND** the page layout (headings, container padding, footer) stays
  intact
- **AND** no horizontal overflow escapes the wrapper

### Requirement: Component Dock attribution footer

The source page has NO footer — only the single content section. The
template SHALL nevertheless render a minimal footer attribution line
linking https://www.componentdock.com/ branded "Component Dock"
(documented addition per the monorepo rule), and NO ColorLib
attribution or links anywhere in the page.

#### Scenario: Attribution present

- **GIVEN** the page footer area is rendered
- **THEN** a minimal attribution line links https://www.componentdock.com/
  branded "Component Dock"
- **AND** NO ColorLib attribution or links appear anywhere in the page

### Requirement: Accessibility (global semantics)

The template SHALL use real table semantics (thead/tbody; th
scope="col" on Product, Price, Quantity, total) and a correct heading
hierarchy (one h2, then one h3). Checkboxes SHALL have accessible
names identifying their row product; remove buttons SHALL keep their
accessible names; prices, quantities, and totals render as real text
(not images). The white-on-sage header labels (~2.3:1 contrast at the
source tokens) are a documented fidelity limitation — keep the source
colors, keep labels as real scoped text.

#### Scenario: Table and page semantics

- **GIVEN** the page is rendered
- **THEN** the table uses thead/tbody with th scope="col" on Product,
  Price, Quantity, and total
- **AND** the heading hierarchy is one h2 followed by one h3
- **AND** the cart data renders as real table content (not
  presentational divs)
- **AND** every checkbox, quantity input, and remove button is
  keyboard-reachable with an accessible name
- **AND** the sage header bar, quantity focus rings, and 12px blurb
  text render at the source tokens

## Verification checklist

- [ ] Poppins 400/500/700 loaded via Google Fonts `<link>` in
      `index.html`
- [ ] `@theme` tokens: `--color-page: #f8f9fd`, `--color-ink: #212529`,
      `--color-heading: #000`, `--color-sage: #99b19c`,
      `--color-danger: #dc3545`, `--color-subtext: rgba(0,0,0,0.3)`,
      `--color-uncheck: rgba(0,0,0,0.1)`,
      `--color-shadow: rgba(0,0,0,0.29)`,
      `--color-focus-border: #80bdff`,
      `--color-focus-ring: rgba(0,123,255,0.25)`
- [ ] Page shell: `#f8f9fd` background, body weight 400 / line-height
      1.8 / color gray, content area `7em` vertical padding, centered
      container max-width 1140px / 15px gutters (540/720/960px
      breakpoints)
- [ ] Headings: h2 "Table #06" — 28px / font-weight 400 / `#000`,
      centered, wrapper ~50% @768+ with 1.5rem margin-bottom; h3
      "Table Accordion" — 1.25rem / weight 400 / `#000`, centered,
      1.5rem margin-bottom
- [ ] Table: `min-width: 1000px` inside an `overflow-x-auto` wrapper;
      color #212529, shadow `0 5px 12px -12px rgba(0,0,0,0.29)`,
      border-collapse collapse; thead: 7 th (empty · empty · Product ·
      Price · Quantity · total · empty) on the sage `#99b19c` bar,
      13px / weight 500 / white, 30px padding, no borders,
      scope="col" on the 4 labeled columns
- [ ] Body: 5 rows × 7 cells with canonical data (row 1 qty 2 /
      $89.98 checked; rows 2–5 qty 1; "total" lowercase in header);
      cells 14px / white / 30px padding / vertical middle / no
      borders; 4px `#f8f9fd` row separators + ~10px margin; last row
      no bottom border
- [ ] Product cells: 100×80 picsum thumbnails (seed rowline-1…5,
      /200/160 sources), name line above 12px `rgba(0,0,0,0.3)` blurb
- [ ] Quantity: real editable inputs (text, min 1, max 100, defaults
      2/1/1/1/1) at 10% column width; editing recomputes the line
      total (unit price × qty, currency-formatted); focus ring
      `#80bdff` + `0 0 0 0.2rem rgba(0,123,255,0.25)`
- [ ] Checkboxes: real focusable inputs (opacity-0, not
      display-none), 20px glyphs (unchecked `rgba(0,0,0,0.1)`, checked
      `#99b19c`), row 1 default-checked, accessible names per product,
      0.3s transition with reduced-motion off
- [ ] Remove buttons: per-row, accessible name, lucide X 12px
      `#dc3545`, chrome opacity .5 → .75 hover/focus, clicking removes
      the row via React state
- [ ] Responsive: table scrolls in wrapper below 1000px; layout
      intact at narrow viewports
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references
      anywhere in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh rowline`; PR
      `feat/template-rowline` with source slug + preview URL
      (`bootstrap/` path) + tokens in the description
