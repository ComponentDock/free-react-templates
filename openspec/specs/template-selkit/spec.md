# Template: Selkit (Multi-Select Form)

## Purpose

Selkit is a single-page multi-select FORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Multiselect 16"
free template (source: https://colorlib.com/wp/template/multiselect-16/),
built under a DIFFERENT name (**Selkit**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap Select plugin (`bootstrap-select.min.js` +
jQuery 3.x + Bootstrap 4) rendered on a light-grey page: a centered
`col-md-5` container with a single `<select multiple>` element containing
50 US state options. The page title is "Multi Select #6". The design is
minimal — just a heading ("Multi-Select #6") and a functional multi-select
checkbox dropdown widget. The plugin replaces the native `<select>` with a
styled dropdown panel featuring a search box, checkboxes with check marks,
and "Select All" / "Deselect All" action buttons.

**WHAT MAKES SELKIT DISTINCT (signature behaviors):**

1. **Minimal single-section layout.** The entire page is a single content
   area with generous vertical padding (`7rem 0`), centered heading, and a
   moderate-width `col-md-5` column containing the multiselect widget. No
   navbar, no hero, no footer content (beyond the Component Dock
   attribution).
2. **Bootstrap Select plugin behavior.** The plugin transforms a
   `<select multiple>` into a button-triggered checkbox dropdown panel:
   - Button shows placeholder text "Nothing selected" (or selected items
     when checked), styled as a Bootstrap form-control with border,
     height, and radius inherited from Bootstrap 4.
   - Dropdown panel appears below with: a search input at the top,
     "Select All" / "Deselect All" action buttons, and a scrollable list
     of checkbox options with check marks on the right side.
   - Each option has a checkbox with the label text and a check-mark icon
     when selected.
   - The button text updates to reflect the selected items (comma-separated
     or count).
3. **Clean, utility-first styling.** Body uses Roboto font, light grey
   `#efefef` background, paragraph text `#b3b3b3`, minimal shadows.
   No gradients, no images, no decorative elements.
4. **Show-tick mode.** The plugin uses `.show-tick` class to display check
     marks next to selected options in the dropdown.

## Naming

The ColorLib source name "Multiselect 16" is FORBIDDEN as the app name.
**Selkit** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `selkit` in any). Source slug
+ preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 16" (page title: "Multi Select #6").
  Listed in TEMPLATES.md under **Multi-Select (7)** (section header line 835;
  the item at line 840 — `wp/template/multiselect-16/`).
- **Preview URL — REACHABLE (verified by direct fetch):** the naive
  `https://preview.colorlib.com/theme/multiselect-16/` returns 404; the
  REAL preview is the bootstrap path
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-16/`**
  (HTTP 200, `<title>Multi Select #6</title>`).
  Stylesheets: `css/bootstrap-select.min.css` (bootstrap-select v1.13.9
  plugin styling), `css/bootstrap.min.css` (Bootstrap 4), `css/style.css`
  (custom page styles), `fonts/icomoon/style.css` (icon font — replace
  with lucide). Scripts: `js/jquery-3.3.1.min.js`, `js/popper.min.js`,
  `js/bootstrap.min.js`, `js/bootstrap-select.min.js`, `js/main.js`.
  Fonts: Google Fonts Roboto (300/400) + Poppins (300/400/500) +
  Source Serif Pro (400/600) loaded via Cloudflare font optimization.
- **Live DOM structure (from the fetched HTML + CSS):**
  - `body` (Roboto, bg `#efefef`) → `div.content` (padding `7rem 0`) →
    `h2.text-center` ("Multi-Select #6", font-size 20px) →
    `div.container.text-left` → `div.row.justify-content-center` →
    `div.col-md-5` → `select.selectpicker.form-control[multiple]` with
    50 US state `<option>` elements.
  - The Bootstrap Select plugin transforms this `<select>` at runtime
    into: `div.bootstrap-select` → `button.dropdown-toggle` (form-control
    styled, showing "Nothing selected" placeholder, with caret) +
    `div.dropdown-menu` (containing `.bs-searchbox` search input,
    `.bs-actionsbox` with Select All/Deselect All buttons, and `ul.inner`
    with `li` elements each having a checkbox and `.check-mark` icon).

## Design tokens (extracted from fetched CSS)

| Token | Value | Source |
|-------|-------|--------|
| Body font | Roboto 300/400 | `css/style.css` body font-family |
| Page background | `#efefef` | `css/style.css` body background-color |
| Paragraph text | `#b3b3b3` | `css/style.css` p color |
| Heading text | `#333` (via Bootstrap h2) | Bootstrap + style.css |
| Button placeholder | `#999` | `css/bootstrap-select.min.css` .bs-placeholder |
| Button bg | White (Bootstrap default) | Bootstrap form-control |
| Button border | Bootstrap form-control default | Bootstrap 4 |
| Button height | Bootstrap form-control default | Bootstrap 4 |
| Button radius | Bootstrap form-control default | Bootstrap 4 |
| Dropdown shadow | Bootstrap .dropdown-menu shadow | Bootstrap 4 |
| Check-mark font-size | 12px | `css/style.css` .check-mark |
| Select-all / Deselect-all | Bootstrap btn-group buttons | bootstrap-select plugin |
| Search input | `.bs-searchbox .form-control` | bootstrap-select plugin |
| Heading font-size | 20px | `css/style.css` h2 |
| Content padding | 7rem 0 | `css/style.css` .content |
| Column width | col-md-5 (Bootstrap) | HTML structure |

## Gherkin requirements

### Requirement: Page layout

The system SHALL render a minimal single-section page with a light-grey
background and centered heading.

#### Scenario: Initial page render

- **GIVEN** the Selkit app is loaded
- **THEN** the page background SHALL be `#efefef`
- **AND** a heading "Multi-Select #6" SHALL be displayed centered
  in Roboto font at 20px
- **AND** the heading SHALL be wrapped in a content area with
  `7rem 0` vertical padding
- **AND** a single column container SHALL be centered below the heading
  with moderate width (col-md-5 equivalent)

### Requirement: Multi-select widget

The system SHALL provide a custom multi-select checkbox dropdown widget
using the Bootstrap Select pattern.

#### Scenario: Trigger button

- **GIVEN** the Selkit app is rendered with no selections
- **THEN** the trigger button SHALL display "Nothing selected" placeholder
  text in `#999` color
- **AND** the button SHALL be styled as a Bootstrap form-control
  (white bg, standard border, radius, height)
- **AND** the button SHALL have a caret icon on the right

#### Scenario: Dropdown panel

- **GIVEN** the trigger button is clicked
- **THEN** a dropdown panel SHALL appear below the button with:
  - A search input at the top (`.bs-searchbox`)
  - "Select All" and "Deselect All" action buttons (`.bs-actionsbox`)
  - A scrollable list of checkbox options with check marks on the right
- **WHEN** the user clicks outside the dropdown
- **THEN** the dropdown SHALL close

#### Scenario: Checkbox selection

- **GIVEN** the dropdown is open
- **WHEN** the user clicks a checkbox option
- **THEN** the option SHALL toggle its checked state
- **AND** a check mark SHALL appear on the right side of the selected option
- **AND** the trigger button text SHALL update to reflect the selected
  items (comma-separated names or count)

#### Scenario: Select All / Deselect All

- **GIVEN** the dropdown is open with no items selected
- **WHEN** the user clicks "Select All"
- **THEN** all checkboxes SHALL become checked
- **AND** the trigger button SHALL update to show the total count
- **WHEN** the user clicks "Deselect All"
- **THEN** all checkboxes SHALL become unchecked

#### Scenario: Search filtering

- **GIVEN** the dropdown is open
- **WHEN** the user types in the search input
- **THEN** the checkbox list SHALL filter to show only options matching
  the search text (case-insensitive substring match)
- **WHEN** the search input is cleared
- **THEN** all options SHALL be visible again

#### Scenario: 50 US state options

- **GIVEN** the Selkit app is rendered
- **THEN** the dropdown SHALL contain exactly 50 checkbox options
- **AND** the options SHALL be the 50 US states from Alabama (AL)
  through Wyoming (WY)

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics for the multi-select widget.

#### Scenario: Semantics

- **GIVEN** the Selkit app is rendered
- **THEN** the trigger button SHALL have `aria-haspopup` and
  `aria-expanded` attributes
- **AND** each checkbox option SHALL have a visible `<label>` associated
  via `htmlFor`
- **AND** the search input SHALL have an accessible label
- **AND** the heading SHALL use a semantic `<h2>` element
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements (button, checkboxes, search input)

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Selkit app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- selkit` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/bootstrap/multiselect-16/:
      light grey `#efefef` page, centered "Multi-Select #6" heading,
      moderate-width column with Bootstrap-styled trigger button,
      dropdown with search, Select All/Deselect All buttons, checkboxes
      with check marks.
- [ ] Behavior check: dropdown opens/closes on button click; checkboxes
      toggle with check marks; Select All/Deselect All works; search
      filters options; button text updates; clicking outside closes
      dropdown.
- [ ] Responsive check at 768px (column full-width, no overflow).
