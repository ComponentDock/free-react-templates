# Template: Flexure (Table)

## Purpose

Flexure is a pale-periwinkle employee-directory table whose SIGNATURE is
pure-CSS RESPONSIVE REFLOW driven by per-cell `data-title` attributes: at
viewport widths above 768px it renders as a 4-column div-based grid (Full
Name · Age · Job Title · Location) — periwinkle `#6c7ae0` header band on a
white rounded card over a SOLID pale-periwinkle `#c4d3f6` page; at
viewports of 768px and below the header band collapses and every row
REFLOWS into a stacked block whose values each gain an UPPERCASE bold
label injected via CSS `:before { content: attr(data-title) }`. It is an
original React recreation of the ColorLib free "Responsive Table V2"
template (source:
https://colorlib.com/wp/template/responsive-table-v2/ — a single-page
div-table snippet: SOLID `#c4d3f6` page (NOT a gradient), Poppins Regular
+ Bold, div-based `display:table` structure, no navbar, no framework, NO
JavaScript at all) built under a DIFFERENT name (Flexure — flexure is the
state of being bent/flexible: the div-table flexes from a rigid desktop
grid into stacked mobile blocks as the viewport narrows; single lowercase
word), per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source slug:** `responsive-table-v2`
- **Source:** https://colorlib.com/wp/template/responsive-table-v2/ (page
  title: "Responsive Table V2 - Free HTML/CSS Table Template 2026 -
  Colorlib"; meta description: "HTML5 & CSS3 based table example that can be
  used as a template for your website. Works with Bootstrap 4, 5 and 6, or
  on its own.")
- **Preview — UNREACHABLE (verified 2026-09-30):** the slug-only URL
  https://preview.colorlib.com/theme/responsive-table-v2/ returns **HTTP 404
  "Not Found"** (9-byte body), and the bootstrap-path variant
  https://preview.colorlib.com/theme/bootstrap/responsive-table-v2/ ALSO
  returns **HTTP 404** (same as its V1 sibling Pliancy / responsive-table-v1
  and Headlock / fixed-header-table — the bootstrap/ path works only for the
  css-table-12..20 family; do not assume). The source page offers a ZIP
  download —
  https://preview.colorlib.com/downloads/free/responsive-table-v2.zip
  (HTTP 200, 105,542 bytes) — which was extracted and analyzed; this is the
  AUTHORITATIVE reference (HTML + CSS + two fonts, no JS at all).
- **Source ZIP contents:** `index.html` (3,807 bytes — the full
  single-page div-table markup), `css/style.css` (6,050 bytes — single
  self-contained sheet, "Every style this snippet uses, and nothing else.
  No framework, no build step."), `fonts/Poppins-Regular.woff2` +
  `fonts/Poppins-Bold.woff2` (TWO font faces — unlike V1's single Open Sans
  Regular), `images/icons/favicon.ico`, `README.md` (1,262 bytes — title
  "**Table V02**" is correct this time, but the "What's inside" section
  still lists `js/snippet.js` — STALE template text: **NO JavaScript file
  ships in the ZIP** (no `js/` folder at all); the responsive behavior is
  100% CSS `@media` + `:before` + `attr()`).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Table_Responsive_v2.jpg
  (HTTP 200, 66,205 bytes, 1366×939 — visually analyzed 2026-09-30). The
  screenshot shows the DESKTOP mode: a white rounded table card centered on
  a SOLID pale-periwinkle page (CSS canonical `#c4d3f6`), periwinkle header
  band (CSS canonical `#6c7ae0`) with white regular-weight labels Full Name
  · Age · Job Title · Location, 8 employee rows in gray text on white with
  thin light-gray row separators, and one row showing the pale-lavender
  hover tint (CSS canonical `#ececff`) with a pointer cursor. The
  screenshot's data snapshot differs from the ZIP markup (screenshot has
  Tyler Reyes / Adam Henderson / Louis Smith where the ZIP repeats Vincent
  Williamson / Joseph Smith) — the ZIP markup is canonical; replicate the
  ZIP's verbatim dataset (see Design tokens).
- **TEMPLATES.md:** "## Table (25)" section, line 2883
  (`- [ ] **Responsive Table V2**`). Slug `responsive-table-v2` appears
  exactly ONCE in TEMPLATES.md (verified 2026-09-30).
- **Naming check:** "flexure" collides with NOTHING in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, TEMPLATES.md content, or any
  git-tracked file path (verified 2026-09-30 — zero hits across all pools;
  nearest flex-family names flexly / reflexly / flexpose / flexzone are
  already taken by other templates). Flexure fits the sibling naming idiom
  gridline / rowglow / gridspan / rowcard / gridpane / nightgrid /
  cellswitch / cellgrid / cellcrew / cellmate / fixstack / headlock /
  pliancy — an evocative single word describing the template's signature
  behavior (V1 = Pliancy "quality of being pliant"; V2 = Flexure "state of
  being flexible").

## Design tokens

(extracted from the source ZIP `css/style.css` — CSS values are canonical;
screenshot pixel-samples corroborate the solid periwinkle page, header
band, and hover tint)

| Token                        | Value                                                                                                                                        | Notes                                                                                                                                                                                                                                          |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Font family                  | Poppins — TWO faces: `Poppins-Regular` + `Poppins-Bold` (self-hosted woff2)                                                                  | Monorepo: Google Fonts `<link>` for Poppins **400 + 700** — NEVER copy the woff2 files. Base `html/body` rule is plain `sans-serif` (reboot remnants), but every cell uses Poppins                                                                   |
| Desktop body-cell font       | Poppins-Regular, **15px**, color `#666666`, `line-height: 1.2`, `font-weight: unset !important` → **400 regular**                          | `.cl-row .cell`                                                                                                                                                                                                                             |
| Desktop header-cell font     | Poppins-Regular, **18px**, color `#fff`, `line-height: 1.2`, `font-weight: unset !important` → **400 regular (NOT bold)**                  | `.cl-row.header .cell` — padding-top/bottom `19px`                                                                                                                                                                                          |
| Page background              | **SOLID `#c4d3f6`** (pale periwinkle / light blue-lavender) — **NOT a gradient** (unlike V1/Pliancy's 45deg gradient)                        | `.container-table100` — `min-height: 100vh`, flex, `align-items: center`, `justify-content: center`, `flex-wrap: wrap`, `padding: 33px 30px`. **NO small-viewport padding override** (V1 had a ≤576px rule — V2 has none)                    |
| Layout widths                | limiter `100%`; wrap **960px** (narrower than V1's 1170px), `border-radius: 10px`, `overflow: hidden`                                       | `.wrap-table100` — the card rounding lives on the WRAP, not the table; full-bleed page allowed (no 1366px limiter cap)                                                                                                                       |
| Table structure              | **DIV-based** (NO real `<table>` element): `.cl-table { display: table; width: 100% }` > `.cl-row { display: table-row; background: #fff }` > `.cell { display: table-cell }`                              | `.cl-table, .cl-row { width: 100% !important }`; `.cl-table { background-color: transparent }`; a dead `.cl-table .cl-table { background: #fff }` nested rule exists in the sheet (no nested table in the markup)                                                                 |
| Header row                   | `.cl-row.header`: background **`#6c7ae0`** (periwinkle-indigo), color `#fff`                                                                 | no fixed height (19px×2 padding + 18px text)                                                                                                                                                                                                |
| Zebra striping               | **NONE** — all body rows are white; row separation via `border-bottom: 1px solid #f2f2f2` on each cell                                       | unlike V1/Pliancy (which zebra-striped even rows `#f5f5f5`)                                                                                                                                                                                   |
| Column widths                | col1 **360px** (+`padding-left: 40px`), col2 **160px**, col3 **250px**, col4 **190px**                                                      | **ALL cells left-aligned — NO `text-align: right` anywhere** (unlike V1, whose cols 4–6 were right-aligned)                                                                                                                                   |
| Cell padding (desktop)       | `padding-top/bottom: 20px`, `border-bottom: 1px solid #f2f2f2`                                                                               | header cells: `padding-top/bottom: 19px` instead (no border)                                                                                                                                                                                  |
| Row hover                    | background **`#ececff`** (pale lavender), `cursor: pointer`                                                                                  | `.cl-row:hover` — **applies to ALL rows INCLUDING the header row**: `.cl-row:hover` (later in the sheet, equal specificity to `.cl-row.header) overrides the periwinkle band on hover — CSS canonical quirk, replicate                        |
| **SIGNATURE — responsive reflow** | `@media screen and (max-width: 768px)` (**768px, NOT V1's 992px**): `.cl-table { display: block }`; `.cl-row { display: block }` + `border-bottom: 1px solid #f2f2f2` + `padding: 30px 15px 18px 0`; header row `padding: 0; height: 0px`; header `.cell { display: none }`; body `.cell { display: block }` + `border: none` + `padding-left: 30px` + `padding-top/bottom: 16px` + font **18px** `#555555`; all widths `100% !important` | PURE CSS — the header vanishes and rows become separated stacked blocks. Body text **GROWS** 15px → 18px on mobile (opposite of V1, which shrank to 14px)                                                                                |
| Stacked label injection      | `.cl-row .cell:before { content: attr(data-title) }` — reads each cell's **`data-title` ATTRIBUTE** (NOT `nth-child` position like V1): `font-family: Poppins-Bold` (the BOLD FACE — the `font-weight: unset !important` does NOT stop a distinct bold-face @font-family from rendering), **12px**, color `#808080`, `line-height: 1.2`, `text-transform: uppercase`, `margin-bottom: 13px`, `min-width: 98px`, `display: block` | Labels stack ABOVE each value (block, not absolute — unlike V1's absolute side labels). Header labels at ≤768px are therefore FULL NAME / AGE / JOB TITLE / LOCATION (uppercase). Monorepo equivalent of the separate Poppins-Bold face: Poppins **700** (`font-bold`) |
| Body base (reboot remnant)   | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`, color `#212529`, bg `#fff`                     | Bootstrap-reboot remnants — invisible under the periwinkle container; Tailwind v4 preflight plays this role in the monorepo                                                                                                                 |
| box-shadow                   | **NONE anywhere in the stylesheet**                                                                                                          | do not add one (there is no artifact to explain — the card simply has no shadow)                                                                                                                                                              |
| Data                         | 4 columns × **8 rows**                                                                                                                       | employee directory: Full Name · Age · Job Title · Location. ZIP rows 7–8 DUPLICATE rows 1–2 exactly (Vincent Williamson, Joseph Smith) — a source quirk, REPLICATE it as-is                                                                 |

**Header labels:** Full Name · Age · Job Title · Location.

**Body data (verbatim from the source ZIP `index.html` — canonical, 8 rows):**

| #   | Full Name         | Age | Job Title           | Location        |
| --- | ----------------- | --- | ------------------- | --------------- |
| 1   | Vincent Williamson | 31  | iOS Developer       | Washington      |
| 2   | Joseph Smith      | 27  | Project Manager     | Somerville, MA  |
| 3   | Justin Black      | 26  | Front-End Developer | Los Angeles     |
| 4   | Sean Guzman       | 25  | Web Designer        | San Francisco   |
| 5   | Keith Carter      | 20  | Graphic Designer    | New York, NY    |
| 6   | Austin Medina     | 32  | Photographer        | New York        |
| 7   | Vincent Williamson | 31  | iOS Developer       | Washington      |
| 8   | Joseph Smith      | 27  | Project Manager     | Somerville, MA  |

(Rows 7–8 = rows 1–2 repeated — source quirk, replicate.)

## Requirements

### Requirement: Page shell renders

The system SHALL render a full-viewport page shell whose background is the
SOLID pale-periwinkle `#c4d3f6`, flex-centered on both axes, holding a
centered 960px rounded content column, with Poppins 400 + 700 loaded, and a
Component Dock footer.

#### Scenario: Shell renders

- **GIVEN** the user visits the Flexure home page
- **THEN** the page shell SHALL be `min-height: 100vh`, flex, centered
  horizontally and vertically, `flex-wrap: wrap`, with `33px` vertical /
  `30px` horizontal padding (NO small-viewport padding override — V2 has
  no ≤576px rule)
- **AND** the background SHALL be **SOLID `#c4d3f6`** (pale periwinkle) —
  NOT a gradient
- **AND** the content column SHALL be 960px wide, centered, with
  `border-radius: 10px` and `overflow: hidden` (the rounding lives on the
  column wrapper; full-bleed width allowed — no 1366px limiter cap)
- **AND** Poppins (Google Fonts weights **400 + 700**) SHALL be loaded and
  used for all table typography (the source self-hosts
  Poppins-Regular.woff2 + Poppins-Bold.woff2; the monorepo MUST load
  Poppins via a Google Fonts `<link>` — NEVER copy the woff2 files)

#### Scenario: Footer attribution renders

- **GIVEN** the page shell is visible
- **THEN** a footer SHALL link `https://www.componentdock.com/` branded as
  "Component Dock" (the source snippet has NO footer — this is the monorepo
  mandate)
- **AND** the app SHALL contain ZERO references to ColorLib or
  preview.colorlib.com anywhere (comments included)

### Requirement: Desktop grid renders

The system SHALL render a single 4-column employee grid as a white rounded
card: periwinkle header band with four white regular-weight labels, eight
body rows separated by thin borders, the source column geometry, and a
CSS-only row hover.

#### Scenario: Card and structure render

- **GIVEN** the viewport is wider than 768px
- **THEN** the grid SHALL render as ONE 4-column structure, `width: 100%`
  of the 960px column, white row backgrounds inside the rounded wrap
- **AND** the source is DIV-based (`display: table` / `table-row` /
  `table-cell` divs) — the implementation MAY mirror that div structure or
  use an equivalent (e.g. a semantic `<table>`) provided every visual
  token in this requirement matches
- **AND** the card SHALL have NO `box-shadow` (the stylesheet declares
  none)

#### Scenario: Header band renders

- **GIVEN** the grid card is visible
- **THEN** the header row SHALL have background `#6c7ae0`
  (periwinkle-indigo) with white text
- **AND** the four labels SHALL be Full Name · Age · Job Title · Location,
  Poppins Regular **400 (NOT bold)**, 18px, `line-height: 1.2`,
  `padding-top/bottom: 19px`
- **AND** all four columns SHALL be left-aligned

#### Scenario: Body rows and data render

- **GIVEN** the grid card is visible
- **THEN** the body SHALL render exactly 8 rows (the source's verbatim
  dataset: Vincent Williamson · Joseph Smith · Justin Black · Sean Guzman
  · Keith Carter · Austin Medina · then Vincent Williamson and Joseph
  Smith AGAIN — replicate the rows 7–8 = 1–2 duplicate quirk)
- **AND** every body cell SHALL be Poppins Regular 400, 15px, color
  `#666666`, `line-height: 1.2`, `padding-top/bottom: 20px`, with
  `border-bottom: 1px solid #f2f2f2`
- **AND** the columns SHALL be 360px (Full Name, `padding-left: 40px`) /
  160px (Age) / 250px (Job Title) / 190px (Location) — **all cells
  left-aligned; NO right-alignment anywhere**
- **AND** there SHALL be NO zebra striping (rows are white; separation is
  the `#f2f2f2` bottom borders only)
- **AND** on row hover the background SHALL become `#ececff` (pale
  lavender) and the cursor SHALL be `pointer` (CSS-only) — this hover
  SHALL apply to EVERY row **including the header band** (the source's
  `.cl-row:hover` rule is not scoped to body rows and overrides the
  periwinkle on hover — CSS canonical)

### Requirement: Responsive stacked mode (SIGNATURE)

The system SHALL reflow the grid into stacked blocks at viewport widths of
768px and below: the header band collapses and every cell value gains an
UPPERCASE bold label injected from its `data-title` attribute.

#### Scenario: Stacked mode activates at ≤768px

- **GIVEN** the viewport width is 768px or less
- **THEN** the grid container, rows, and all cells SHALL switch to
  `display: block`
- **AND** the header row SHALL collapse (`padding: 0`, `height: 0`) and
  its cells SHALL be hidden (`display: none`)
- **AND** every body row SHALL become a separated block with
  `border-bottom: 1px solid #f2f2f2` and `padding: 30px 15px 18px 0`
  (top / right / bottom / left)
- **AND** every body cell SHALL lose its border, get `padding-left: 30px`
  and `padding-top/bottom: 16px`, and its text SHALL grow to Poppins 400
  **18px** color `#555555` (larger than the 15px desktop text)
- **AND** every body cell SHALL display its column label via a `:before`
  pseudo-element with `content: attr(data-title)` — reading the cell's own
  `data-title` ATTRIBUTE (NOT `nth-child` position like V1) — styled
  Poppins **700 (bold face)**, **12px**, color `#808080`,
  `line-height: 1.2`, `text-transform: uppercase`, `margin-bottom: 13px`,
  `min-width: 98px`, `display: block` (labels sit ABOVE each value)
- **AND** the `data-title` values SHALL be "Full Name", "Age", "Job
  Title", "Location" (rendered uppercase by CSS)
- **AND** the grid container, rows, and cells SHALL all become
  `width: 100%`
- **AND** the row hover (`#ececff` + pointer) SHALL still apply in stacked
  mode (the source's hover rule is not breakpoint-scoped)

### Requirement: No interactivity beyond CSS hover

The system SHALL have NO JavaScript-driven behavior — the source ZIP ships
no JS file; the responsive reflow is pure CSS media queries + `attr()`.

#### Scenario: Zero handlers invariant

- **GIVEN** the page is visible at any viewport width
- **THEN** no state, event handlers, or client-side scripts SHALL drive
  grid behavior
- **AND** the only interaction SHALL be the CSS-only row hover
- **AND** resizing the viewport across the 768px boundary SHALL flip the
  grid between desktop mode and stacked mode with no scripting
- **AND** the breakpoint SHALL be exactly `max-width: 768px` (the source
  switches AT 768px inclusive — note Tailwind's `max-md:` variant stops at
  767.996px, so arbitrary `max-[768px]:` variants are required for exact
  fidelity)

## Verification checklist

- [ ] `openspec/specs/template-flexure/spec.md` exists on the PR branch and
      validates (`npx openspec validate flexure --type spec`)
- [ ] App folder `apps/flexure`, package `@free-react-templates/flexure`,
      `npm install` at root so the lockfile registers the workspace
- [ ] `homepage` = `https://flexure.free.componentdock.com`, `public/CNAME`
      = `flexure.free.componentdock.com`
- [ ] `index.html` loads Poppins **400 + 700** via Google Fonts `<link>`;
      NO copied woff2 files, NO ColorLib strings anywhere in the app
- [ ] Page shell: SOLID `bg-[#c4d3f6]` (NOT a gradient), flex-centered
      `min-h-screen`, padding 33px/30px (no ≤576px override), 960px
      centered column `rounded-[10px] overflow-hidden`
- [ ] Header band: `#6c7ae0`, white Full Name · Age · Job Title · Location,
      Poppins **font-normal** (400 — NOT bold) 18px, py 19px
- [ ] Body: 8 rows (incl. the rows 7–8 = 1–2 duplicate quirk), cells
      Poppins 400 15px `#666666`, py 20px, `border-b border-[#f2f2f2]`,
      columns 360(+40pad)/160/250/190px, ALL left-aligned, NO zebra
- [ ] Hover: `hover:bg-[#ececff] cursor-pointer` on EVERY row including the
      header band (CSS-canonical quirk)
- [ ] NO box-shadow anywhere
- [ ] Stacked mode at ≤768px (use arbitrary `max-[768px]:` variants —
      Tailwind's `max-md:` misses exactly-768px): rows block with
      `border-b` + `padding: 30px 15px 18px 0`, header row collapsed
      (`max-[768px]:h-0 max-[768px]:p-0` + cells `max-[768px]:hidden`),
      cells block `max-[768px]:border-0 max-[768px]:pl-[30px]
      max-[768px]:py-4` + text 18px `#555555`, `:before` labels via
      `data-title` + `before:content-[attr(data-title)] before:block
      before:font-bold before:text-xs before:text-[#808080]
      before:uppercase before:mb-[13px] before:min-w-[98px]` (Poppins 700 =
      the source's separate Poppins-Bold face), widths `max-[768px]:w-full`
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] Tests (TDD, 100% coverage on changed code) mirror the Gherkin
      scenarios; `scripts/verify-app.sh flexure` passes
- [ ] PR description records: source slug `responsive-table-v2`, preview
      UNREACHABLE (both paths 404; ZIP
      `preview.colorlib.com/downloads/free/responsive-table-v2.zip` was the
      reference), design tokens used, and what differs (new name Flexure;
      Poppins via Google Fonts instead of self-hosted woff2; zero images;
      Component Dock footer added)
