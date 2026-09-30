# Template: Pliancy (Table)

## Purpose

Pliancy is a gradient-page orders-table showcase whose SIGNATURE is pure-CSS
RESPONSIVE REFLOW: at viewport widths above 992px it renders as a 6-column
data table (Date · Order ID · Name · Price · Quantity · Total) in a white
rounded card on a vivid blue-violet→magenta diagonal gradient page; at
viewports of 992px and below the header row disappears and every body row
REFLOWS into a stacked label:value card (column labels injected via CSS
`td:before` pseudo-elements). It is an original React recreation of the
ColorLib free "Responsive Table V1" template (source:
https://colorlib.com/wp/template/responsive-table-v1/ — a single-page
data-table snippet: 45deg gradient page `#4158d0`→`#c850c0`, dark plum
header `#36304a`, zebra rows, Open Sans, no navbar, no framework, NO
JavaScript at all) built under a DIFFERENT name (Pliancy — pliancy is the
quality of being pliant, i.e. readily adapting shape: the table adapts from
a rigid 6-column grid into stacked cards as the viewport narrows; single
lowercase word), per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source slug:** `responsive-table-v1`
- **Source:** https://colorlib.com/wp/template/responsive-table-v1/ (page
  title: "Responsive Table V1 - Free HTML/CSS Table Template 2026 -
  Colorlib"; meta description: "HTML5 & CSS3 based table example that can be
  used as a template for your website. Works with Bootstrap 4, 5 and 6, or
  on its own.")
- **Preview — UNREACHABLE (verified 2026-09-30):** the slug-only URL
  https://preview.colorlib.com/theme/responsive-table-v1/ returns **HTTP 404
  "Not Found"** (9-byte body), and the bootstrap-path variant
  https://preview.colorlib.com/theme/bootstrap/responsive-table-v1/ ALSO
  returns **HTTP 404** (unlike the css-table-12..20 family, where the
  bootstrap/ path works — do not assume it does; same situation as Headlock
  / fixed-header-table). The source page offers a ZIP download —
  https://preview.colorlib.com/downloads/free/responsive-table-v1.zip
  (HTTP 200, 67,253 bytes) — which was extracted and analyzed; this is the
  AUTHORITATIVE reference (HTML + CSS + font, no JS at all).
- **Source ZIP contents:** `index.html` (5,095 bytes — the full
  single-table page), `css/style.css` (6,723 bytes — single self-contained
  sheet, "Every style this snippet uses, and nothing else. No framework, no
  build step."), `fonts/OpenSans-Regular.woff2` (60,412 bytes),
  `images/icons/favicon.ico` (32,038 bytes), `README.md` (1,262 bytes —
  title "**Table V01**", a STALE copy-pasted title from a sibling snippet;
  ignore it). **NO JavaScript file ships in the ZIP** (no `js/` folder at
  all) even though the README template text mentions `js/snippet.js` — the
  source has ZERO interactivity; the responsive behavior is 100% CSS
  (`@media` + `td:before`).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Table_Responsive_v1.jpg
  (HTTP 200, 115,908 bytes, 1366×939 — visually analyzed 2026-09-30). The
  screenshot shows the DESKTOP mode: a white rounded table card centered on
  a 45deg gradient (blue-violet `#4158d0` sampled at bottom-left → magenta
  `#c850c0` at top-right), dark plum header row with white regular-weight
  labels Date · Order ID · Name · Price · Quantity · Total, ~14 order rows
  with light-gray zebra striping on even rows, gray body text, and a
  pointer cursor visible over one row (the CSS hover affordance). The
  screenshot's data snapshot differs slightly from the ZIP markup (e.g.
  screenshot has iPhone X 256Gb Black $1199.00, Macbook $2999.00, unique
  order IDs 200398→200381) — the ZIP markup is canonical; replicate the
  ZIP's verbatim dataset (see Design tokens).
- **TEMPLATES.md:** "## Table (25)" section, line 2882
  (`- [ ] **Responsive Table V1**`). Slug `responsive-table-v1` appears
  exactly ONCE in TEMPLATES.md (verified 2026-09-30).
- **Naming check:** "pliancy" collides with NOTHING in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, TEMPLATES.md content, or any
  git-tracked file path (verified 2026-09-30 — zero hits across all pools;
  fits the sibling naming idiom gridline / rowglow / gridspan / rowcard /
  gridpane / nightgrid / cellswitch / cellgrid / cellcrew / cellmate /
  fixstack / headlock — an evocative single word describing the template's
  signature behavior).

## Design tokens

(extracted from the source ZIP `css/style.css` — CSS values are canonical;
screenshot pixel-samples corroborate the gradient and header/zebra colors)

| Token                        | Value                                                                                                                                        | Notes                                                                                                                                                                                                                                       |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Font family                  | Open Sans (weight 400 ONLY)                                                                                                                  | Source self-hosts `OpenSans-Regular.woff2`. Monorepo: Google Fonts `<link>` for Open Sans **400** — NEVER copy the woff2 files. Base `html/body` rule is plain `sans-serif` (reboot), but every table cell uses Open Sans                                |
| Header label weight          | `font-weight: unset` → **400 regular**                                                                                                       | `.table100-head th { font-weight: unset }` — header labels are REGULAR weight, NOT bold (the sheet explicitly reverts the UA bold default). `tbody tr` carries the same `font-weight: unset`                                             |
| Page background              | `linear-gradient(45deg, #4158d0, #c850c0)`                                                                                                   | `.container-table100` — blue-violet → magenta DIAGONAL gradient (45deg = bottom-left → top-right), `min-height: 100vh`, flex-centered on both axes, `padding: 33px 30px`; `@media (max-width: 576px)` → `padding-left/right: 15px`              |
| Layout widths                | wrap `1170px`; limiter `100%`                                                                                                               | `.wrap-table100 { width: 1170px }`, `.limiter { width: 100%; margin: 0 auto }` (unlike headlock, NO 1366px limiter cap — the gradient page is full-bleed)                                                                                                  |
| Table card                   | white `#fff` background, `border-radius: 10px`, `overflow: hidden`, `width: 100%`, `border-collapse: collapse`                              | **NO `box-shadow` anywhere in the stylesheet** (CSS canonical — do not add one; the faint bottom-edge shading in the screenshot is a JPEG/contrast artifact, not a declared shadow)                                                                     |
| Header row                   | `height: 60px`, background `#36304a` (dark plum-charcoal)                                                                                    | `table thead tr`                                                                                                                                                                                                                                          |
| Header label                 | Open Sans 400, **18px**, color `#fff`, `line-height: 1.2`                                                                                    | `.table100-head th`                                                                                                                                                                                                                                        |
| Body row                     | `height: 50px`                                                                                                                               | `table tbody tr`                                                                                                                                                                                                                                           |
| Body cell                    | Open Sans 400, **15px**, color `#808080` (gray), `line-height: 1.2`                                                                          | `tbody tr`                                                                                                                                                                                                                                                  |
| Zebra striping               | even rows (`tr:nth-child(even)`) background `#f5f5f5`                                                                                        | odd rows stay white on the white card                                                                                                                                                                                                                       |
| Row hover                    | color `#555555`, background `#f5f5f5`, `cursor: pointer`                                                                                     | `tbody tr:hover` — CSS-only affordance; NO JavaScript                                                                                                                                                                                                       |
| Cell base                    | `padding-left: 8px`, `text-align: left`                                                                                                      | `table td, table th`                                                                                                                                                                                                                                        |
| Column widths                | col1 **260px** (+`padding-left: 40px`), col2 **160px**, col3 **245px**, col4 **110px**, col5 **170px**, col6 **222px** (+`padding-right: 62px`) | columns 4–6 (`column4/5/6`) are `text-align: right` (applies to BOTH `th` and `td`); columns 1–3 left                                                                                                                                              |
| **SIGNATURE — responsive reflow** | `@media screen and (max-width: 992px)`: `table { display: block }`; `table > *, tr, td, th { display: block }`; `thead { display: none }` | PURE CSS — the table becomes a stack of label:value cards: each `tbody tr` gets `height: auto; padding: 37px 0`; each `td` gets `padding-left: 40% !important; margin-bottom: 24px` (last td: 0); each `td:before` injects the column label via `content` — absolute, `width: 40%`, `left: 30px`, `top: 0`, Open Sans 400 **14px**, color `#999999`. Labels by `nth-child`: 1 "Date" · 2 "Order ID" · 3 "Name" · 4 "Price" · 5 "Quantity" · 6 "Total". Columns 4–6 switch to `text-align: left`; ALL columns `width: 100%`; `tbody tr` font-size **14px** |
| Small-viewport padding       | `@media (max-width: 576px)`: `.container-table100 { padding-left/right: 15px }`                                                              | the gradient page tightens its horizontal padding                                                                                                                                                                                                            |
| Body base (reboot remnant)   | color `#212529`, background `#fff`                                                                                                           | Bootstrap-reboot remnants in the sheet — invisible under the gradient container; Tailwind preflight plays this role in the monorepo                                                                                                                       |
| Data                         | 6 columns × **14 rows**                                                                                                                      | order log: Date · Order ID · Name · Price · Quantity · Total. ZIP rows 11–14 DUPLICATE rows 7–10 exactly (order IDs 200389/200388/200387/200386 reappear) — a source quirk, REPLICATE it as-is                                                                 |

**Header labels:** Date · Order ID · Name · Price · Quantity · Total.

**Body data (verbatim from the source ZIP `index.html` — canonical, 14 rows):**

| #   | Date                | Order ID | Name                     | Price    | Quantity | Total    |
| --- | ------------------- | -------- | ------------------------ | -------- | -------- | -------- |
| 1   | 2017-09-29 01:22    | 200398   | iPhone X 64Gb Grey       | $999.00  | 1        | $999.00  |
| 2   | 2017-09-28 05:57    | 200397   | Samsung S8 Black         | $756.00  | 1        | $756.00  |
| 3   | 2017-09-26 05:57    | 200396   | Game Console Controller  | $22.00   | 2        | $44.00   |
| 4   | 2017-09-25 23:06    | 200392   | USB 3.0 Cable            | $10.00   | 3        | $30.00   |
| 5   | 2017-09-24 05:57    | 200391   | Smartwatch 4.0 LTE Wifi  | $199.00  | 6        | $1494.00 |
| 6   | 2017-09-23 05:57    | 200390   | Camera C430W 4k          | $699.00  | 1        | $699.00  |
| 7   | 2017-09-22 05:57    | 200389   | Macbook Pro Retina 2017  | $2199.00 | 1        | $2199.00 |
| 8   | 2017-09-21 05:57    | 200388   | Game Console Controller  | $999.00  | 1        | $999.00  |
| 9   | 2017-09-19 05:57    | 200387   | iPhone X 64Gb Grey       | $999.00  | 1        | $999.00  |
| 10  | 2017-09-18 05:57    | 200386   | iPhone X 64Gb Grey       | $999.00  | 1        | $999.00  |
| 11  | 2017-09-22 05:57    | 200389   | Macbook Pro Retina 2017  | $2199.00 | 1        | $2199.00 |
| 12  | 2017-09-21 05:57    | 200388   | Game Console Controller  | $999.00  | 1        | $999.00  |
| 13  | 2017-09-19 05:57    | 200387   | iPhone X 64Gb Grey       | $999.00  | 1        | $999.00  |
| 14  | 2017-09-18 05:57    | 200386   | iPhone X 64Gb Grey       | $999.00  | 1        | $999.00  |

(Rows 11–14 = rows 7–10 repeated — source quirk, replicate.)

## Requirements

### Requirement: Page shell renders

The system SHALL render a full-viewport page shell whose background is the
45deg blue-violet→magenta diagonal gradient, flex-centered on both axes,
holding a centered 1170px content column, with Open Sans 400 loaded, and a
Component Dock footer.

#### Scenario: Shell renders

- **GIVEN** the user visits the Pliancy home page
- **THEN** the page shell SHALL be `min-height: 100vh`, flex, centered
  horizontally and vertically, with `33px` vertical / `30px` horizontal
  padding (at viewports ≤576px the horizontal padding SHALL tighten to
  `15px`)
- **AND** the background SHALL be `linear-gradient(45deg, #4158d0, #c850c0)`
  — blue-violet at the bottom-left rising to magenta at the top-right
- **AND** the content column SHALL be 1170px wide, centered, full-bleed
  width allowed (no 1366px limiter cap)
- **AND** Open Sans (Google Fonts weight 400 ONLY) SHALL be loaded and used
  for all table typography (the source self-hosts OpenSans-Regular.woff2;
  the monorepo MUST load Open Sans via a Google Fonts `<link>` — NEVER copy
  the woff2 files)

#### Scenario: Footer attribution renders

- **GIVEN** the page shell is visible
- **THEN** a footer SHALL link `https://www.componentdock.com/` branded as
  "Component Dock" (the source snippet has NO footer — this is the monorepo
  mandate)
- **AND** the app SHALL contain ZERO references to ColorLib or
  preview.colorlib.com anywhere (comments included)

### Requirement: Desktop data table renders

The system SHALL render a single orders table as a white rounded card: dark
plum header row with six white regular-weight labels, fourteen body rows
with zebra striping, the source column geometry, and a CSS-only row hover.

#### Scenario: Table card renders

- **GIVEN** the viewport is wider than 992px
- **THEN** the table SHALL render as ONE table element, `width: 100%` of
  the 1170px column, white background, `border-radius: 10px`,
  `overflow: hidden`, `border-collapse: collapse`
- **AND** the table SHALL have NO `box-shadow` (the stylesheet declares
  none — CSS is canonical)

#### Scenario: Header row renders

- **GIVEN** the table card is visible
- **THEN** the `thead` row SHALL be `height: 60px` with background
  `#36304a` (dark plum-charcoal)
- **AND** the six `th` labels SHALL be Date · Order ID · Name · Price ·
  Quantity · Total, Open Sans 400 (regular — NOT bold), 18px, color `#fff`,
  `line-height: 1.2`
- **AND** columns 4–6 header labels SHALL be `text-align: right`; columns
  1–3 left

#### Scenario: Body rows and data render

- **GIVEN** the table card is visible
- **THEN** the body SHALL render exactly 14 rows (the source's verbatim
  dataset: iPhone X 64Gb Grey $999.00 … rows 11–14 repeating rows 7–10 —
  replicate the duplicate-order-ID quirk)
- **AND** every body row SHALL be `height: 50px` with Open Sans 400 15px
  text in `#808080`, `line-height: 1.2`
- **AND** even rows (`tr:nth-child(even)`) SHALL have background `#f5f5f5`
  (zebra); odd rows stay white
- **AND** the columns SHALL be 260px (Date, `padding-left: 40px`) / 160px
  (Order ID) / 245px (Name) / 110px (Price, right) / 170px (Quantity,
  right) / 222px (Total, right, `padding-right: 62px`), all cells
  `padding-left: 8px` base
- **AND** on row hover the text SHALL turn `#555555`, the row background
  SHALL become `#f5f5f5`, and the cursor SHALL be `pointer` (CSS-only)

### Requirement: Responsive stacked mode (SIGNATURE)

The system SHALL reflow the table into stacked label:value cards at
viewport widths of 992px and below: the header row disappears and each
column value gains its label via a CSS pseudo-element.

#### Scenario: Stacked mode activates at ≤992px

- **GIVEN** the viewport width is 992px or less
- **THEN** the `table`, its rows, and all cells SHALL switch to
  `display: block` and the `thead` SHALL be hidden (`display: none`)
- **AND** every `tbody` row SHALL become `height: auto` with `padding: 37px
  0` (a separated card block)
- **AND** every `td` SHALL get `padding-left: 40%` (values indented past
  the label column), `margin-bottom: 24px` (the LAST cell in each row: 0),
  `width: 100%`, and `text-align: left` — INCLUDING columns 4–6, which
  switch from right to left alignment
- **AND** every `td` SHALL display its column label via a `:before`
  pseudo-element with `content` set per position — 1: "Date", 2: "Order
  ID", 3: "Name", 4: "Price", 5: "Quantity", 6: "Total" — styled Open Sans
  400, 14px, color `#999999`, `line-height: 1.2`, absolutely positioned
  `left: 30px; top: 0; width: 40%`
- **AND** body row text in stacked mode SHALL be 14px (down from 15px)
- **AND** the zebra striping and row hover SHALL still apply in stacked
  mode (the source's `nth-child(even)` / `:hover` rules are not
  breakpoint-scoped)

### Requirement: No interactivity beyond CSS hover

The system SHALL have NO JavaScript-driven behavior — the source ZIP ships
no JS file; the responsive reflow is pure CSS media queries.

#### Scenario: Zero handlers invariant

- **GIVEN** the page is visible at any viewport width
- **THEN** no state, event handlers, or client-side scripts SHALL drive
  table behavior
- **AND** the only interaction SHALL be the CSS-only row hover
- **AND** resizing the viewport across the 992px boundary SHALL flip the
  table between desktop grid mode and stacked card mode with no scripting

## Verification checklist

- [ ] `openspec/specs/template-pliancy/spec.md` exists on the PR branch and
      validates (`npx openspec validate pliancy --type spec`)
- [ ] App folder `apps/pliancy`, package `@free-react-templates/pliancy`,
      `npm install` at root so the lockfile registers the workspace
- [ ] `homepage` = `https://pliancy.free.componentdock.com`, `public/CNAME`
      = `pliancy.free.componentdock.com`
- [ ] `index.html` loads Open Sans 400 via Google Fonts `<link>`; NO copied
      woff2 files, NO ColorLib strings anywhere in the app
- [ ] Page shell: `linear-gradient(45deg, #4158d0, #c850c0)`, flex-centered
      `min-height: 100vh`, padding 33px/30px (15px sides at ≤576px), 1170px
      centered column
- [ ] Table card: white, radius 10px, overflow hidden, NO box-shadow
- [ ] Header: `#36304a`, 60px, Open Sans 400 (NOT bold) 18px white labels
      Date · Order ID · Name · Price · Quantity · Total
- [ ] Body: 14 rows (incl. the rows 11–14 = 7–10 duplicate quirk), 50px,
      Open Sans 400 15px `#808080`, even rows `#f5f5f5`, hover → `#555555`
      / `#f5f5f5` / pointer
- [ ] Columns 260(+40 pad)/160/245/110r/170r/222r(+62 pad)px, cell
      `padding-left: 8px`
- [ ] Stacked mode at ≤992px: thead hidden, rows block (37px pad), tds
      `padding-left: 40%` + `margin-bottom: 24px` (last 0) + `width: 100%`
      + left-aligned, `:before` labels Date/Order ID/Name/Price/Quantity/
      Total (14px `#999`, absolute left 30px width 40%), body 14px —
      implemented with Tailwind arbitrary `max-[992px]:` variants (992px
      is NOT a default Tailwind breakpoint) or an equivalent custom
      breakpoint
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] Tests (TDD, 100% coverage on changed code) mirror the Gherkin
      scenarios; `scripts/verify-app.sh pliancy` passes
- [ ] PR description records: source slug `responsive-table-v1`, preview
      UNREACHABLE (both paths 404; ZIP
      `preview.colorlib.com/downloads/free/responsive-table-v1.zip` was the
      reference), design tokens used, and what differs (new name Pliancy;
      Open Sans via Google Fonts instead of self-hosted woff2; picsum
      placeholders not needed — zero images; Component Dock footer added)
