# Template: Choosy (Multiselect Dropdown with Live Search)

## Purpose

Choosy is a single-page multiselect dropdown component in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 10" free template (source:
https://colorlib.com/wp/template/multiselect-10/), built under a
DIFFERENT name (**Choosy**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery snippet: a single centered
section (`ftco-section`) with a heading and a custom multiselect dropdown
component. The dropdown has a toggle button showing a label (e.g.
"States") and a quantity badge ("Any" or a count), a search input for
live filtering, and a scrollable checkbox list of items (US states).
Font Awesome 4.7 icons (chevron-down, checkbox glyphs) and Google Fonts
Lato are used.

**Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-10/
(Note: alternate URL pattern — ColorLib listing page at
https://colorlib.com/wp/template/multiselect-10/ references this.)

**Design tokens extracted from preview CSS (css/style.css):**

| Token              | Value                                              |
| ------------------ | -------------------------------------------------- |
| Font family        | "Lato", sans-serif (weights 300, 400, 700)         |
| Brand / accent     | `#ff5959` (coral red)                              |
| Page background    | `#f8f9fd` (light bluish gray)                      |
| Text color         | `gray` (body), `#000` (headings)                   |
| Link color         | `#ff5959`                                          |
| Dropdown bg        | `#fff` (white)                                     |
| Dropdown radius    | `5px`                                              |
| Dropdown shadow    | `0px 10px 30px -4px rgba(0,0,0,0.15)`             |
| Button padding     | `15px 20px`                                        |
| Button label color | `gray`, font-weight 700                            |
| Quantity color     | `#ff5959`, font-weight 700                         |
| Search input bg    | `rgba(0,0,0,0.05)`, border-radius 4px, no border  |
| Checkbox checked   | `#ff5959` (FontAwesome \f14a glyph)               |
| Section padding    | `7em 0`                                            |
| Heading size       | `28px`, weight 400, color `#000`                   |
| Icons              | FontAwesome 4.7 (chevron-down for toggle)          |
| Dropdown list max  | `max-height: 200px`, `overflow-y: auto`            |

**Visual design (from TEMPLATES.md screenshot — AVIF format, could not
be rendered):** The preview URL (bootstrap/multiselect-10/) shows a clean
minimal page with light bluish-gray background. A centered heading
"Multiselect #10" sits above a single white rounded card. Inside the card
is a dropdown button with "States (Any)" label and a chevron icon. Clicking
opens a panel with a search input and a scrollable list of US states with
custom checkboxes (unchecked = light gray square glyph, checked = coral red
filled square). The design is component-focused — a single reusable UI
element centered on a neutral background.

## Design tokens (React / Tailwind mapping)

```css
/* @theme tokens for Tailwind CSS 4 */
--color-brand: #ff5959;
--color-page-bg: #f8f9fd;
--font-family-body: "Lato", sans-serif;
--radius-dropdown: 5px;
--shadow-dropdown: 0px 10px 30px -4px rgba(0, 0, 0, 0.15);
--color-search-bg: rgba(0, 0, 0, 0.05);
```

## Requirements

### Requirement: Page layout

The app SHALL render a single full-viewport section with a centered content
area containing a heading and the multiselect dropdown component.

#### Scenario: Page structure

- **GIVEN** the Choosy app is rendered
- **THEN** the page background SHALL be `#f8f9fd`
- **AND** the font family SHALL be "Lato", sans-serif
- **AND** a centered heading reading "Multiselect #10" (28px, black,
  weight 400) SHALL be visible
- **AND** a single dropdown component SHALL be centered below the heading
  in a `col-md-5` equivalent column (max-width ~41.67% of container)

### Requirement: Dropdown toggle button

The dropdown SHALL have a clickable button that shows the current state and
a chevron icon, and toggles the dropdown list open/closed.

#### Scenario: Initial state

- **GIVEN** the Choosy app is rendered with no items selected
- **THEN** the toggle button SHALL display the label text (e.g. "States")
  in gray bold alongside a quantity badge showing "(Any)" in coral red
  `#ff5959`
- **AND** a Font Awesome chevron-down icon (or lucide ChevronDown) SHALL
  be visible at the right of the button
- **AND** the dropdown list SHALL be hidden (closed)

#### Scenario: Toggle open/close

- **GIVEN** the dropdown list is closed
- **WHEN** the user clicks the toggle button
- **THEN** the dropdown list SHALL become visible below the button
- **AND** the button SHALL remain visible above the list
- **WHEN** the user clicks the toggle button again
- **THEN** the dropdown list SHALL close (hide)

#### Scenario: Dropdown styling

- **GIVEN** the dropdown container is rendered
- **THEN** it SHALL have a white background, `border-radius: 5px`, and
  a box shadow of `0px 10px 30px -4px rgba(0,0,0,0.15)`
- **AND** the toggle button SHALL have `padding: 15px 20px` with full
  width

### Requirement: Search / live filtering

The open dropdown list SHALL include a search input that filters items
in real time.

#### Scenario: Search input presence

- **GIVEN** the dropdown list is open
- **THEN** a search input with placeholder text (e.g. "Search states")
  SHALL be visible at the top of the list
- **AND** the search input SHALL have a light gray background
  (`rgba(0,0,0,0.05)`) with 4px border-radius and no visible border

#### Scenario: Filtering behavior

- **GIVEN** the dropdown list is open and the search input is empty
- **THEN** all items SHALL be visible
- **WHEN** the user types a search query into the input
- **THEN** only items whose label contains the query (case-insensitive)
  SHALL be visible
- **AND** items that do not match SHALL be hidden
- **WHEN** the user clears the search input
- **THEN** all items SHALL become visible again

#### Scenario: Search does not affect selection

- **GIVEN** the user has selected 3 items and types a search query that
  filters to 2 visible items
- **THEN** the 3 selected items SHALL remain selected (checked) in the
  full list
- **AND** the quantity badge SHALL still show 3 (not the filtered count)

### Requirement: Checkbox list

The dropdown list SHALL contain a scrollable list of items with custom
styled checkboxes.

#### Scenario: Item rendering

- **GIVEN** the dropdown list is open
- **THEN** a vertical list of items SHALL be visible below the search input
- **AND** each item SHALL have a custom checkbox (unchecked = light gray
  square glyph, checked = coral red `#ff5959` filled square)
- **AND** the list SHALL scroll vertically when items overflow
  (`max-height: 200px`, `overflow-y: auto`)
- **AND** the default items SHALL be US state names (matching the source
  template's "States" theme)

#### Scenario: Selection toggle

- **GIVEN** an item is unchecked
- **WHEN** the user clicks the item (or its checkbox)
- **THEN** the checkbox SHALL toggle to checked (coral red glyph)
- **AND** the quantity badge SHALL update to reflect the new count
- **WHEN** the user clicks the item again
- **THEN** the checkbox SHALL toggle back to unchecked
- **AND** the quantity badge SHALL decrement

#### Scenario: Select-all / deselect-all via "Any"

- **GIVEN** the dropdown is open with some items selected
- **WHEN** the user clicks "Any" (or the quantity badge acts as a
  toggle)
- **THEN** all items SHALL be deselected and the badge SHALL show "Any"
- **OR** the badge click behavior SHALL match the source's behavior for
  resetting selection

### Requirement: Quantity badge

The toggle button SHALL display a dynamic quantity indicator showing either
"Any" (no selection) or the count of selected items.

#### Scenario: Badge states

- **GIVEN** no items are selected
- **THEN** the badge SHALL show "(Any)" in coral red
- **WHEN** one or more items are selected
- **THEN** the badge SHALL show "(N)" where N is the count of selected
  items, in coral red `#ff5959`, font-weight 700

### Requirement: Accessibility

The dropdown component SHALL be keyboard-accessible and screen-reader
friendly.

#### Scenario: Keyboard interaction

- **GIVEN** the toggle button is focused
- **WHEN** the user presses Enter or Space
- **THEN** the dropdown list SHALL toggle open/closed
- **AND** when opening, focus SHALL move to the search input
- **AND** when the user presses Escape
- **THEN** the dropdown list SHALL close and focus SHALL return to the
  toggle button

#### Scenario: ARIA attributes

- **GIVEN** the dropdown is rendered
- **THEN** the toggle button SHALL have `aria-expanded` reflecting
  open/closed state
- **AND** `aria-haspopup="listbox"` or equivalent SHALL be set
- **AND** the dropdown list SHALL have an `aria-label` or
  `aria-labelledby` referencing the toggle button
- **AND** each checkbox item SHALL have an accessible label (the state
  name)

### Requirement: Responsive behavior

The layout SHALL be responsive and work on mobile viewports.

#### Scenario: Mobile layout

- **GIVEN** the viewport is 375px wide
- **THEN** the heading and dropdown SHALL stack vertically and take full
  width
- **AND** the dropdown shall still function correctly (toggle, search,
  select)

### Requirement: Footer attribution

The template footer MUST link to https://www.componentdock.com/ and be
branded as "Component Dock".

#### Scenario: Footer link

- **GIVEN** the Choosy app is rendered
- **THEN** a footer section SHALL be visible at the bottom of the page
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` with text referencing "Component Dock"
- **AND** the footer SHALL NOT contain any reference to ColorLib

## Verification checklist

- [ ] Page renders with `#f8f9fd` background and Lato font
- [ ] Heading "Multiselect #10" is centered at 28px
- [ ] Dropdown container has white bg, 5px radius, shadow
- [ ] Toggle button shows label + "(Any)" badge + chevron icon
- [ ] Clicking toggle opens/closes the dropdown list
- [ ] Search input filters items in real time (case-insensitive)
- [ ] Checkbox list shows US states with custom coral-red checked state
- [ ] Selecting items updates the quantity badge count
- [ ] List scrolls at 200px max-height
- [ ] Keyboard: Enter/Space toggles, Escape closes
- [ ] ARIA: expanded state, popup role, accessible labels
- [ ] Mobile: full-width stacked layout at 375px
- [ ] Footer links to componentdock.com, no ColorLib references
- [ ] No ColorLib references in any app source files
