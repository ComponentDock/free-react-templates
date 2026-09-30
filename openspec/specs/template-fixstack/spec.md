# Template: Fixstack (Table)

## Purpose

Fixstack is a full-width data-table showcase page whose SIGNATURE is a
fixed first column: the "Employees" column is absolutely positioned
(white background, `z-index: 1000`) over a horizontally scrollable
second table, so the employee names stay visible while the remaining
columns scroll. The page sits on a vivid purple-to-pink vertical
gradient (`#c471f5` → `#fa71cd`) with a white table card centered in
the viewport. It is an original React recreation of the ColorLib free
"Fixed Column Table" template (source:
https://colorlib.com/wp/template/fixed-column-table/ — a single-page
data-table snippet: gradient page, white table card, two-table fixed
column layout, Roboto Medium/Bold, no navbar, no framework, no
interactivity) built under a DIFFERENT name (Fixstack — "fix" for the
fixed column, "stack" for the layered two-table stack; single lowercase
word), per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source slug:** `fixed-column-table`
- **Source:** https://colorlib.com/wp/template/fixed-column-table/
  (page title: "Fixed Column Table - Free HTML/CSS Table Template 2026 -
  Colorlib")
- **Preview — UNREACHABLE (verified 2026-09-30):** the slug-only URL
  https://preview.colorlib.com/theme/fixed-column-table/ returns **HTTP
  404**, and the bootstrap-path variant
  https://preview.colorlib.com/theme/bootstrap/fixed-column-table/ also
  returns **HTTP 404**. The source page offers a ZIP download
  (https://preview.colorlib.com/downloads/free/fixed-column-table.zip,
  HTTP 200, 139,594 bytes) which was extracted and analyzed — this is
  the authoritative reference (HTML + CSS + fonts, no JS at all).
- **Source ZIP contents:** `index.html` (5,315 bytes), `css/style.css`
  (5,895 bytes), `fonts/Roboto-Medium.woff2` (65,692 bytes),
  `fonts/Roboto-Bold.woff2` (64,816 bytes), `images/icons/favicon.ico`
  (32,038 bytes), `README.md` (1,261 bytes). **NO JavaScript file** —
  the source has zero interactivity.
- **Screenshot (TEMPLATES.md):** purple-to-pink gradient page, white
  table card centered, first column "EMPLOYEES" fixed over a
  horizontally scrollable area showing POSITION / START DATE / LAST
  ACTIVITY / CONTACTS (and more columns beyond the fold), 7 data rows,
  bold uppercase dark header labels, thin light-gray row separators,
  horizontal scrollbar visible at the bottom of the table.

## Design tokens

- **Page background:** vertical linear gradient bottom→top:
  `#fa71cd` (pink, bottom) → `#c471f5` (purple, top). In Tailwind:
  `bg-gradient-to-t from-[#fa71cd] to-[#c471f5]` or `@theme` tokens.
- **Table card:** white `#fff` background, centered in viewport.
- **Container:** `max-width: 1366px`, `min-height: 100vh`, flex
  center both axes, padding `33px 100px`.
- **Fonts:** self-hosted `Roboto-Medium` (body cells) and
  `Roboto-Bold` (header labels). In the monorepo: Google Fonts
  `<link>` for Roboto 500/700 — NEVER copy the woff2 files.
- **Header labels:** Roboto-Bold, 14px, `#333333`, `text-transform:
  uppercase`, `line-height: 1.4`, `font-weight: unset` (the
  `th,td { font-weight: unset }` rule means the font-face itself
  carries the weight).
- **Body cells:** Roboto-Medium, 15px, `line-height: 1.4`.
- **First-column cells (Employees):** `#666666` (darker gray).
- **Other-column cells:** `#999999` (lighter gray).
- **Row separators:** `border-bottom: 1px solid #f2f2f2` on every
  `tr` in `.table100.ver1`.
- **Fixed first column:** `.table100-firstcol` — `position: absolute`,
  `z-index: 1000`, `width: 310px`, `top: 0`, `left: 0`, white
  background. The first-column table has `width: 100%` and
  `padding-left: 40px` on `.column1`.
- **Scrollable area:** `.wrap-table100-nextcols` — `overflow: auto`,
  `padding-left: 310px` (offset for the fixed column), `padding-bottom:
  28px`. The second table uses `table-layout: fixed`.
- **Column widths:** column1=100% (fills the 310px fixed area),
  column2=225px, column3=205px, column4=195px, column5=235px,
  column6=170px, column7=330px, column8=305px. Total scrollable width
  ≈ 1,665px + 310px fixed.
- **Cell padding:** `th` = 21px top/bottom, `td` = 16px top/bottom,
  `padding-right: 10px` on all cells.
- **No checkboxes, no buttons, no links, no interactivity** — the
  source has no JavaScript. Purely a static visual table.

## Section structure (DOM order)

1. **Page shell** — `.limiter` gradient background fills the viewport;
   `.container-table100` centers the table card (flex, max-width
   1366px, min-height 100vh, padding 33px 100px).
2. **Table card** — `.wrap-table100` → `.table100.ver1` (white bg).
   Two child tables:
   - **Fixed first column** — `.table100-firstcol` (absolute, 310px,
     z-index 1000, white bg): single-column table with header "Employees"
     and 7 body rows (Brandon Green, Kathy Daniels, Elizabeth Alvarado,
     Michael Coleman, Jason Cox, Christian Perkins, Emily Wheeler).
   - **Scrollable columns** — `.wrap-table100-nextcols.js-pscroll`
     (overflow auto, padding-left 310px): 7-column table with headers
     Position / Start date / Last Activity / Contacts / Age / Address /
     Card No and 7 matching body rows.
3. **Footer** — none in the source. Monorepo rule mandates a minimal
   "Component Dock" attribution link (https://www.componentdock.com/).

## Interactive model

**None.** The source has no JavaScript, no checkboxes, no hover
effects, no click handlers. The only "interaction" is native horizontal
scrolling of `.wrap-table100-nextcols`, which reveals the hidden
columns while the first column stays fixed via absolute positioning.
The React recreation should be a static presentational component with
no state.

## Requirements

### Requirement: Page shell renders the gradient background

The system SHALL render a page shell with a vertical linear gradient
background from `#c471f5` (top, purple) to `#fa71cd` (bottom, pink)
that fills the full viewport height.

#### Scenario: Gradient fills the viewport
- **GIVEN** the app is loaded in a browser
- **WHEN** the page renders
- **THEN** the page background is a vertical linear gradient from
  `#c471f5` (top) to `#fa71cd` (bottom)
- **AND** the gradient fills the full viewport height

### Requirement: Table card is centered on the gradient

The system SHALL render the white table card horizontally and
vertically centered within a max-width 1366px container on the
gradient background.

#### Scenario: Card is horizontally and vertically centered
- **GIVEN** the page renders
- **WHEN** the table card is displayed
- **THEN** the card is horizontally centered within a max-width 1366px
  container
- **AND** the card is vertically centered in the viewport
- **AND** the card has a white `#fff` background

### Requirement: Fixed first column stays visible during horizontal scroll

The system SHALL render the first column ("Employees") as a separate
absolutely-positioned table (310px wide, z-index 1000, white
background) over a horizontally scrollable second table.

#### Scenario: First column is absolutely positioned over the scroll area
- **GIVEN** the table card renders
- **WHEN** the layout is computed
- **THEN** the first column ("Employees") is rendered as a separate
  table with `position: absolute`, `z-index: 1000`, `width: 310px`,
  white background, `top: 0`, `left: 0`
- **AND** the scrollable area has `padding-left: 310px` to offset the
  fixed column

#### Scenario: Scrolling reveals hidden columns without moving the first column
- **GIVEN** the table card renders with the fixed first column and the
  scrollable second table
- **WHEN** the user scrolls the scrollable area horizontally
- **THEN** the second table's columns scroll into view
- **AND** the first column remains in place (absolute positioning)

### Requirement: Header labels match the source design

The system SHALL render header labels in Roboto-Bold 14px `#333333`
uppercase with the exact column names from the source.

#### Scenario: Header styling
- **GIVEN** the table renders
- **WHEN** the header row is displayed
- **THEN** header labels use Roboto-Bold (font-weight 700), 14px,
  color `#333333`, uppercase text-transform, line-height 1.4
- **AND** the first-column header reads "Employees"
- **AND** the second-table headers read: Position, Start date, Last
  Activity, Contacts, Age, Address, Card No

### Requirement: Body cells match the source design

The system SHALL render body cells in Roboto-Medium 15px with
color `#666666` for the first column and `#999999` for the
scrollable columns.

#### Scenario: First-column body cells
- **GIVEN** the table renders
- **WHEN** the first column's body rows are displayed
- **THEN** cells use Roboto-Medium (font-weight 500), 15px,
  color `#666666`, line-height 1.4
- **AND** the cell values are: Brandon Green, Kathy Daniels, Elizabeth
  Alvarado, Michael Coleman, Jason Cox, Christian Perkins, Emily
  Wheeler

#### Scenario: Second-table body cells
- **GIVEN** the table renders
- **WHEN** the second table's body rows are displayed
- **THEN** cells use Roboto-Medium (font-weight 500), 15px,
  color `#999999`, line-height 1.4
- **AND** each row contains 7 cells matching the header columns

### Requirement: Row separators are thin light-gray lines

The system SHALL render a 1px solid `#f2f2f2` bottom border on
every table row.

#### Scenario: Row borders
- **GIVEN** the table renders
- **WHEN** body rows are displayed
- **THEN** every `tr` has `border-bottom: 1px solid #f2f2f2`
- **AND** there are no other row borders (no top border, no vertical
  borders between cells)

### Requirement: Column widths match the source layout

The system SHALL render the scrollable table with `table-layout:
fixed` and explicit column widths (225/205/195/235/170/330/305px)
that produce horizontal overflow on typical viewports.

#### Scenario: Fixed and scrollable column widths
- **GIVEN** the table renders
- **WHEN** the layout is computed
- **THEN** the first column area is 310px wide (fixed)
- **AND** the second table uses `table-layout: fixed` with column
  widths: Position 225px, Start date 205px, Last Activity 195px,
  Contacts 235px, Age 170px, Address 330px, Card No 305px
- **AND** the second table's total width exceeds the visible area,
  producing a horizontal scrollbar

### Requirement: Footer includes Component Dock attribution

The system SHALL render a footer with a link to
https://www.componentdock.com/ labeled "Component Dock" and no
ColorLib references anywhere in the app.

#### Scenario: Attribution link
- **GIVEN** the app renders
- **WHEN** the footer is displayed
- **THEN** it contains a link to https://www.componentdock.com/
  labeled "Component Dock"
- **AND** no ColorLib references appear anywhere in the app

## Verification checklist

- [ ] Gradient background: `#c471f5` → `#fa71cd` vertical, full viewport
- [ ] Table card: white, centered, max-width 1366px, min-height 100vh
- [ ] Fixed first column: absolute, 310px, z-index 1000, white bg
- [ ] Scrollable area: overflow auto, padding-left 310px
- [ ] Header: Roboto-Bold 14px `#333333` uppercase
- [ ] First-column body: Roboto-Medium 15px `#666666`
- [ ] Second-table body: Roboto-Medium 15px `#999999`
- [ ] Row separators: 1px `#f2f2f2` bottom border
- [ ] Column widths: 225/205/195/235/170/330/305px
- [ ] No interactivity (no state, no handlers)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Zero ColorLib references in app code
- [ ] `npm run spec:validate` passes
- [ ] `scripts/verify-app.sh fixstack` passes
