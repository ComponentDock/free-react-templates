# Template: Picklist (Multi-Select Form)

## Purpose

Picklist is a single-page multi-select FORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Multiselect 14"
free template (source: https://colorlib.com/wp/template/multiselect-14/),
built under a DIFFERENT name (**Picklist**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a jQuery multiselect plugin (`jquery.multiselect.js` +
jQuery 3.x + Bootstrap 4) rendered on a light-grey page: a centered
`col-md-3` container with a single `<select multiple>` element containing
50 US state options. The page title is "Multi Select #4". The design is
minimal — just a heading ("Multi-Select #4") and a functional multi-select
checkbox dropdown widget. The plugin replaces the native `<select>` with a
styled checkbox list inside a dropdown panel, with search filtering,
select-all, and three-column layout support.

**WHAT MAKES PICKLIST DISTINCT (signature behaviors):**

1. **Minimal single-section layout.** The entire page is a single content
   area with generous vertical padding (`7rem 0`), centered heading, and a
   narrow `col-md-3` column containing the multiselect widget. No navbar,
   no hero, no footer content (beyond the Component Dock attribution).
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

## Naming

The ColorLib source name "Multiselect 14" is FORBIDDEN as the app name.
**Picklist** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `picklist` in any). Source slug
+ preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 14" (page title: "Multi Select #4").
  Listed in TEMPLATES.md under **Multi-Select (7)** (section header line 835;
  the item at line 838 — `wp/template/multiselect-14/`).
- **Preview URL — REACHABLE (verified by direct fetch):** the naive
  `https://preview.colorlib.com/theme/multiselect-14/` returns 404; the
  REAL preview is the bootstrap path
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-14/`**
  (HTTP 200, 18,443 bytes, `<title>Multi Select #4</title>`).
  Stylesheets: `css/jquery.multiselect.css` (2,669 bytes — plugin styling),
  `css/bootstrap.min.css` (Bootstrap 4), `css/style.css` (2,669 bytes —
  custom page styles), `fonts/icomoon/style.css` (icon font — replace with
  lucide). Scripts: `js/jquery-3.3.1.min.js`, `js/popper.min.js`,
  `js/bootstrap.min.js`, `js/jquery.multiselect.js`, `js/main.js`.
  Fonts: Google Fonts Roboto (300/400) + Poppins (300/400/500) +
  Source Serif Pro (400/600) loaded via Cloudflare font optimization.
- **Live DOM structure (from the fetched HTML + CSS):**
  - `body` (Roboto, bg `#efefef`, no custom body classes) → `div.content`
    (padding `7rem 0`) → `h2.text-center` ("Multi-Select #4", font-size
    20px) → `div.container.text-left` → `div.row.justify-content-center` →
    `div.col-md-3` → `select[name="basic[]"][multiple].3col.active.form-control`
    with 50 US state `<option>` elements.
  - The jQuery multiselect plugin transforms this `<select>` at runtime
    into: `div.ms-options-wrap` → `button` (showing "0 selected", white bg,
    border `1px solid #aaa`, height 40px, 4px radius, shadow
    `0 1px 1px 0 rgba(0,0,0,0.1)`) + `div.ms-options` (dropdown panel:
    border-radius 4px, shadow `0 15px 30px 0 rgba(0,0,0,0.1)`, padding
    20px, containing `.ms-selectall` link, `.ms-search` input, and
    `ul > li > label` checkbox list items).
- **Design tokens extracted from CSS:**

| Token                | Value                                    | Notes                                                              |
| -------------------- | ---------------------------------------- | ------------------------------------------------------------------ |
| `--color-page`       | `#efefef`                                | Light grey page background                                         |
| `--color-text`       | `#333`                                   | Default text (headings, selected button text)                      |
| `--color-text-dim`   | `#b3b3b3`                               | Paragraph text                                                     |
| `--color-text-muted` | `#aaa`                                   | Button placeholder text, select-all link, borders                  |
| `--color-border`     | `#aaa`                                   | Button border, search input border, option hover border            |
| `--color-hover-bg`   | `#efefef`                                | Option hover/selected background                                   |
| `--color-link-hover` | `#000`                                   | Select-all link hover color                                        |
| `--color-white`      | `#fff`                                   | Button bg, dropdown bg                                             |
| `--font-body`        | 'Roboto', sans-serif                     | Body font (Google Fonts 300/400); Poppins and Source Serif Pro also loaded |
| `--radius`           | `4px`                                    | Button, dropdown, option label border-radius                       |
| `--btn-height`       | `40px`                                   | Trigger button height                                              |
| `--shadow-btn`       | `0 1px 1px 0 rgba(0,0,0,0.1)`          | Button resting shadow                                              |
| `--shadow-btn-hover` | `0 2px 10px 0 rgba(0,0,0,0.1)`         | Button hover/active shadow                                         |
| `--shadow-dropdown`  | `0 15px 30px 0 rgba(0,0,0,0.1)`        | Dropdown panel shadow                                              |

- **Screenshot (`multiselect-14.jpg`):** viewed in browser — light grey
  `#efefef` full-page background; centered "Multi-Select #4" heading
  (20px, dark text); below it a narrow column containing the multiselect
  widget (white button with placeholder text and a down-chevron). The
  overall aesthetic is minimal, clean, utility-focused — a component demo
  page rather than a full landing page. **No imagery — NO picsum
  placeholders needed** (solid-color page, form-only).

## Requirements

### Requirement: Page shell

The system SHALL render a light grey page with a centered heading and a
narrow column containing the multi-select widget.

#### Scenario: Page layout

- **GIVEN** the Picklist app is rendered on a desktop viewport
- **THEN** the page background SHALL be `#efefef` (light grey)
- **AND** a centered heading "Multi-Select #4" SHALL render at 20px
- **AND** below the heading, a narrow column (max-width ~25% of container)
  SHALL contain the multi-select widget
- **AND** the page font SHALL be Roboto (300/400 from Google Fonts)

#### Scenario: Responsive layout

- **GIVEN** a viewport at or below 768px
- **THEN** the column SHALL widen to full width with appropriate padding
- **AND** no horizontal overflow SHALL occur

### Requirement: Multi-select widget

The system SHALL render a custom multi-select dropdown replacing the native
`<select multiple>` element, with checkbox selection, search filtering,
and select-all functionality.

#### Scenario: Trigger button

- **GIVEN** no items are selected
- **THEN** the trigger button SHALL display "0 selected" (or equivalent
  placeholder) in `#aaa` text on white background
- **AND** the button SHALL have height 40px, 4px border-radius,
  border `1px solid #aaa`, and shadow `0 1px 1px 0 rgba(0,0,0,0.1)`
- **WHEN** the user hovers the button
- **THEN** the shadow SHALL change to `0 2px 10px 0 rgba(0,0,0,0.1)`

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
- **AND** the option label background SHALL change to `#efefef` when
  selected (matching the page background for a subtle highlight)
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

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics for the multi-select widget.

#### Scenario: Semantics

- **GIVEN** the Picklist app is rendered
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

- **GIVEN** the Picklist app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- picklist` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/bootstrap/multiselect-14/:
      light grey `#efefef` page, centered "Multi-Select #4" heading,
      narrow column with white trigger button (4px radius, "0 selected"
      placeholder), dropdown with checkboxes, search, select-all.
- [ ] Behavior check: dropdown opens/closes on button click; checkboxes
      toggle; select-all works; search filters options; button text
      updates with count; clicking outside closes dropdown.
- [ ] Responsive check at 768px (column full-width, no overflow).
