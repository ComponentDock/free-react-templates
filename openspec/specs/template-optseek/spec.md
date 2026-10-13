# Template: OptSeek (Form — Multiselect Dropdown with Live Search)

## Purpose

Recreation of ColorLib "Multiselect 10" — a free Bootstrap multiselect dropdown with live search functionality.

- **Source**: https://colorlib.com/wp/template/multiselect-10/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/multiselect-10/
- **Description**: A custom multiselect dropdown with a search/filter input, checkbox-based multi-selection, and a live quantity counter. Demonstrates a category-picker pattern (US states as demo data). Minimal centered layout: heading + single dropdown component.
- **Stack**: React 19 + Tailwind CSS 4 + TypeScript (Vite)

## Design tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `"Lato", Arial, sans-serif` | Body, headings (loaded via Cloudflare fonts) |
| Font weights | 300 (light), 400 (normal), 700 (bold) | Lato web font |
| Body font size | 14px | Dropdown container base |
| Brand / accent color | `#ff5959` (coral-red) | Quantity count, chevron icon, checked checkbox checkmark |
| Button/label color | `gray` | Dropdown label text |
| Heading color | `#000` (black) | Section heading |
| Heading font size | 28px | `.heading-section` |
| Background (page) | `#fff` (white) | Body and section background |
| Background (dropdown) | `#fff` (white) | Dropdown button and list |
| Search input background | `rgba(0, 0, 0, 0.05)` | Filter input field |
| Dropdown box-shadow | `0px 10px 30px -4px rgba(0, 0, 0, 0.15)` | Elevated card effect on dropdown |
| Dropdown border-radius | `5px` | Rounded corners on dropdown container |
| Search input border-radius | `4px` | Rounded corners on search field |
| Section padding | `7em 0` | `.ftco-section` vertical rhythm |
| Checkbox unchecked color | `rgba(0, 0, 0, 0.1)` | Empty checkbox outline (FontAwesome \f0c8) |
| Checkbox checked color | `#ff5959` | Checked checkbox (FontAwesome \f14a) |
| Font Awesome | 4.7.0 | Chevron icon, checkbox icons |

### Visual design notes (from TEMPLATES.md screenshot reference)

- Clean white background, vertically and horizontally centered content.
- Single heading "Multiselect #10" in bold black text, 28px.
- A single custom multiselect dropdown below the heading, centered in a `col-md-5`.
- Dropdown button: white background, shows "States" label + "(Any)" quantity counter + down chevron. Full-width with `15px 20px` padding.
- When opened: reveals a search input ("Search states") with light gray background, and a scrollable list (`max-height: 200px`) of US state checkboxes.
- Checkboxes are custom-styled using FontAwesome icons (unchecked: empty square, checked: filled coral-red square).
- Quantity counter updates live: shows "Any" when nothing selected, otherwise the count of selected items.
- Elevated card appearance via box-shadow on the dropdown container.
- Minimal, no navigation, no footer, no images — pure form component showcase.
- Responsive: dropdown column adjusts across breakpoints (col-md-5).

## Requirements

### Feature: Page renders with heading and dropdown

#### Scenario: Initial page load

- **GIVEN** the user visits the OptSeek page
- **THEN** a centered heading "OptSeek" is visible
- **THEN** a multiselect dropdown button is visible below the heading
- **THEN** the dropdown button displays "States" as the label
- **THEN** the dropdown button displays "(Any)" as the quantity indicator
- **THEN** a down-chevron icon is visible on the right side of the dropdown button

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile viewport (< 768px)
- **THEN** the heading is centered and full-width
- **THEN** the dropdown is centered and occupies available width
- **GIVEN** the user views the page on a desktop viewport (>= 992px)
- **THEN** the heading is centered
- **THEN** the dropdown is narrower (approximately 5/12 of container width)

### Feature: Dropdown toggle behavior

#### Scenario: Opening the dropdown

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks on the dropdown button
- **THEN** the dropdown list becomes visible
- **THEN** a search input with placeholder "Search states" is visible
- **THEN** a scrollable list of state options appears below the search input

#### Scenario: Closing the dropdown

- **GIVEN** the dropdown is open
- **WHEN** the user clicks on the dropdown button again
- **THEN** the dropdown list is hidden

### Feature: Search/filter functionality

#### Scenario: Filtering by typing

- **GIVEN** the dropdown is open
- **WHEN** the user types "cal" into the search input
- **THEN** only states containing "cal" (case-insensitive) are visible
- **THEN** states not matching the search are hidden

#### Scenario: Clearing the search

- **GIVEN** the user has typed "cal" into the search input
- **WHEN** the user clears the search input
- **THEN** all states are visible again

#### Scenario: No matching results

- **GIVEN** the dropdown is open
- **WHEN** the user types "xyz" into the search input
- **THEN** no states are visible in the list

### Feature: Multi-selection with checkboxes

#### Scenario: Selecting a single state

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the checkbox for "California"
- **THEN** "California" shows a coral-red checked checkbox
- **THEN** the quantity indicator updates to "(1)"

#### Scenario: Selecting multiple states

- **GIVEN** "California" is already selected
- **WHEN** the user clicks the checkbox for "New York"
- **THEN** both "California" and "New York" show checked checkboxes
- **THEN** the quantity indicator updates to "(2)"

#### Scenario: Deselecting a state

- **GIVEN** "California" and "New York" are selected
- **WHEN** the user clicks the checkbox for "California" again
- **THEN** "California" shows an unchecked checkbox
- **THEN** the quantity indicator updates to "(1)"

#### Scenario: Deselecting all states

- **GIVEN** "California" and "New York" are selected
- **WHEN** the user deselects all states
- **THEN** the quantity indicator shows "(Any)"

### Feature: Selection persists across search

#### Scenario: Selecting while searching

- **GIVEN** the dropdown is open
- **WHEN** the user types "cal" into the search input
- **AND** selects "California"
- **THEN** "California" is marked as selected
- **WHEN** the user clears the search input
- **THEN** "California" still shows as selected in the full list

### Feature: Accessibility

#### Scenario: Keyboard navigation

- **GIVEN** the dropdown is open
- **WHEN** the user navigates with keyboard
- **THEN** focus moves through the search input and checkbox items
- **THEN** checkboxes can be toggled with Space or Enter

#### Scenario: Screen reader support

- **GIVEN** the page loads
- **THEN** the dropdown button has an accessible label
- **THEN** each checkbox has an associated label (state name)
- **THEN** the quantity count is announced when it changes

## Verification checklist

- [ ] Page renders with centered heading and dropdown button
- [ ] Dropdown button shows "States" label and "(Any)" quantity
- [ ] Clicking the dropdown button toggles the list open/closed
- [ ] Search input filters the state list in real-time
- [ ] Clearing the search restores all items
- [ ] Checkboxes can be checked/unchecked with click
- [ ] Checked checkboxes show coral-red (#ff5959) checkmark
- [ ] Quantity counter updates on select/deselect
- [ ] "Any" is shown when zero items are selected
- [ ] Selections persist when search is used and cleared
- [ ] Dropdown list scrolls when items exceed max-height (200px)
- [ ] Dropdown has elevated box-shadow appearance
- [ ] Responsive layout works on mobile and desktop
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No references to ColorLib in app code
