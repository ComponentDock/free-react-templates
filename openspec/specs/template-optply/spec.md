# Template: Optply (Multi-Select Form)

## Purpose

Optply is a single-page multi-select FORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Multiselect 15"
free template (source: https://colorlib.com/wp/template/multiselect-15/),
built under a DIFFERENT name (**Optply**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a jQuery multiselect plugin (`jquery.multiselect.js` +
jQuery 3.x + Bootstrap 4) rendered on a light-grey page: a centered
`col-md-5` container with a single `<select multiple>` element containing
50 US state options. The page title is "Multi Select #5". The design is
minimal — just a heading ("Multi-Select #5") and a functional multi-select
checkbox dropdown widget. The plugin replaces the native `<select>` with a
styled checkbox list inside a dropdown panel, with search filtering,
select-all, and three-column layout support.

**WHAT MAKES OPTPLY DISTINCT (signature behaviors):**

1. **Minimal single-section layout.** The entire page is a single content
   area with generous vertical padding (`7rem 0`), centered heading, and a
   moderate-width `col-md-5` column containing the multiselect widget. No
   navbar, no hero, no footer content (beyond the Component Dock
   attribution). The column is wider than the Picklist (col-md-3) sibling
   template — this is the key structural difference.
2. **jQuery multiselect plugin behavior.** The plugin transforms a
   `<select multiple>` into a button-triggered checkbox dropdown panel:
   - Button shows placeholder text "0 selected" (or count when items are
     checked), styled with white bg, light border, `#aaa` text, 4px radius,
     subtle shadow.
   - Dropdown panel appears below with: "select all" link, search input,
     and a scrollable checkbox list of options.
   - Each option has a checkbox with the label text.
   - "select all" / "deselect all" toggles are available.
   - The button text updates to reflect the count of selected items.
3. **Clean, utility-first styling.** Body uses Roboto font, light grey
   `#efefef` background, paragraph text `#b3b3b3`, minimal shadows
   (1px/2px/15px depending on state), 4px border-radius on all interactive
   elements. No gradients, no images, no decorative elements.
4. **Three-column layout class support.** The demo applies class `3col
   active` to the select element, suggesting the plugin supports
   rendering checkboxes in a 3-column grid (the CSS for this is in
   `jquery.multiselect.css`). The recreation should support this layout.
5. **Wider column (col-md-5).** Compared to Multiselect 14's col-md-3,
   this template uses col-md-5, giving the multiselect widget more
   horizontal space and a more prominent visual presence.

## Naming

The ColorLib source name "Multiselect 15" is FORBIDDEN as the app name.
**Optply** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `optply` in any). Source slug
+ preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 15" (page title: "Multi Select #5").
  Listed in TEMPLATES.md under **Multi-Select (7)** (section header line 835;
  the item at line 839 — `wp/template/multiselect-15/`).
- **Preview URL — REACHABLE (verified by direct fetch):** the naive
  `https://preview.colorlib.com/theme/multiselect-15/` returns 404; the
  REAL preview is the bootstrap path
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-15/`**
  (HTTP 200, `<title>Multi Select #5</title>`).
  Stylesheets: `css/jquery.multiselect.css` (plugin styling),
  `css/bootstrap.min.css` (Bootstrap 4), `css/style.css` (custom page
  styles), `fonts/icomoon/style.css` (icon font — replace with lucide).
  Scripts: `js/jquery-3.3.1.min.js`, `js/popper.min.js`,
  `js/bootstrap.min.js`, `js/jquery.multiselect.js`, `js/main.js`.
  Fonts: Google Fonts Roboto (300/400) + Poppins (300/400/500) +
  Source Serif Pro (400/600) loaded via Cloudflare font optimization.
- **Live DOM structure (from the fetched HTML + CSS):**
  - `body` (Roboto, bg `#efefef`, no custom body classes) → `div.content`
    (padding `7rem 0`) → `h2.text-center` ("Multi-Select #5", font-size
    20px) → `div.container.text-left` → `div.row.justify-content-center` →
    `div.col-md-5` → `select[name="basic[]"][multiple].3col.active.form-control`
    with 50 US state `<option>` elements.
  - The jQuery multiselect plugin transforms this `<select>` at runtime
    into: `div.ms-options-wrap` → `button` (showing "0 selected", white bg,
    border `1px solid #aaa`, height 40px, 4px radius, shadow
    `0 1px 1px 0 rgba(0,0,0,0.1)`) + `div.ms-options` (dropdown panel:
    border-radius 4px, shadow `0 15px 30px 0 rgba(0,0,0,0.1)`, padding
    20px, white bg, border-radius 4px).

## Design tokens (extracted from fetched CSS)

| Token | Value | Source |
|-------|-------|--------|
| Body font | Roboto 300/400 | `css/style.css` body font-family |
| Page background | `#efefef` | `css/style.css` body background-color |
| Paragraph text | `#b3b3b3` | `css/style.css` p color |
| Heading text | `#333` (via Bootstrap h2) | Bootstrap + style.css |
| Muted text | `#aaaaaa` | `css/jquery.multiselect.css` button color |
| Button background | `#ffffff` | `css/jquery.multiselect.css` button bg |
| Button border | `1px solid #aaa` | `css/jquery.multiselect.css` |
| Button height | 40px | `css/style.css` .ms-options-wrap > button |
| Button radius | 4px | `css/style.css` |
| Button shadow (rest) | `0 1px 1px 0 rgba(0,0,0,0.1)` | `css/style.css` |
| Button shadow (hover) | `0 2px 10px 0 rgba(0,0,0,0.1)` | `css/style.css` |
| Dropdown shadow | `0 15px 30px 0 rgba(0,0,0,0.1)` | `css/style.css` |
| Dropdown padding | 20px | `css/style.css` |
| Dropdown radius | 4px | `css/style.css` |
| Option hover bg | `#f7f7f7` | `css/style.css` |
| Option selected bg | `#e1f2fb` | `css/style.css` (light blue) |
| Select-all color | `#aaaaaa`, hover `#000` | `css/style.css` |
| Search border-bottom | `1px solid #efefef` | `css/style.css` |
| Heading font-size | 20px | `css/style.css` h2 |
| Content padding | 7rem 0 | `css/style.css` .content |
| Column width | col-md-5 (Bootstrap) | HTML structure |

## Gherkin requirements

### Requirement: Page layout

The system SHALL render a minimal single-section page with a light-grey
background and centered heading.

#### Scenario: Initial page render

- **GIVEN** the Optply app is loaded
- **THEN** the page background SHALL be `#efefef`
- **AND** a heading "Multi-Select #5" SHALL be displayed centered
  in Roboto font at 20px
- **AND** the heading SHALL be wrapped in a content area with
  `7rem 0` vertical padding
- **AND** a single column container SHALL be centered below the heading
  with a moderate width (wider than a narrow sidebar, appropriate for
  a form widget)

### Requirement: Multi-select widget

The system SHALL provide a custom multi-select checkbox dropdown widget.

#### Scenario: Trigger button

- **GIVEN** the Optply app is rendered with no selections
- **THEN** the trigger button SHALL display "0 selected" placeholder text
- **AND** the button SHALL have white background, border `1px solid #aaa`,
  height 40px, border-radius 4px
- **AND** the button SHALL have shadow `0 1px 1px 0 rgba(0,0,0,0.1)`
- **AND** the button text color SHALL be `#aaa` when no items are selected

#### Scenario: Dropdown panel

- **GIVEN** the trigger button is clicked
- **THEN** a dropdown panel SHALL appear below the button with:
  - White background, 4px border-radius, shadow
    `0 15px 30px 0 rgba(0,0,0,0.1)`
  - A "select all" link (uppercase, 11px, `#aaaaaa`, hover `#000`)
  - A search input (border-bottom `1px solid #efefef`)
  - A scrollable list of checkbox options with 5px vertical padding
- **WHEN** the user clicks outside the dropdown
- **THEN** the dropdown SHALL close

#### Scenario: Checkbox selection

- **GIVEN** the dropdown is open
- **WHEN** the user clicks a checkbox option
- **THEN** the option SHALL toggle its checked state
- **AND** the option label background SHALL change to `#e1f2fb` when
  selected (light blue highlight)
- **AND** the trigger button text SHALL update to reflect the count
  of selected items

#### Scenario: Select all

- **GIVEN** the dropdown is open with no items selected
- **WHEN** the user clicks "select all"
- **THEN** all checkboxes SHALL become checked
- **AND** the trigger button SHALL update to show the total count
- **WHEN** the user clicks "select all" again (or "deselect all")
- **THEN** all checkboxes SHALL become unchecked

#### Scenario: Search filtering

- **GIVEN** the dropdown is open
- **WHEN** the user types in the search input
- **THEN** the checkbox list SHALL filter to show only options matching
  the search text (case-insensitive substring match)
- **WHEN** the search input is cleared
- **THEN** all options SHALL be visible again

#### Scenario: 50 US state options

- **GIVEN** the Optply app is rendered
- **THEN** the dropdown SHALL contain exactly 50 checkbox options
- **AND** the options SHALL be the 50 US states from Alabama (AL)
  through Wyoming (WY)

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics for the multi-select widget.

#### Scenario: Semantics

- **GIVEN** the Optply app is rendered
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

- **GIVEN** the Optply app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- optply` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/bootstrap/multiselect-15/:
      light grey `#efefef` page, centered "Multi-Select #5" heading,
      moderate-width column with white trigger button (4px radius,
      "0 selected" placeholder), dropdown with checkboxes, search,
      select-all.
- [ ] Behavior check: dropdown opens/closes on button click; checkboxes
      toggle; select-all works; search filters options; button text
      updates with count; clicking outside closes dropdown.
- [ ] Responsive check at 768px (column full-width, no overflow).
