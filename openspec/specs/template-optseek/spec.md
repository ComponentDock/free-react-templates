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

### Requirement: Page renders with heading and dropdown

**Scenario: Initial page load**
- Given the user visits the OptSeek page
- Then a centered heading "OptSeek" is visible
- Then a multiselect dropdown button is visible below the heading
- Then the dropdown button displays "States" as the label
- Then the dropdown button displays "(Any)" as the quantity indicator
- Then a down-chevron icon is visible on the right side of the dropdown button

**Scenario: Responsive layout**
- Given the user views the page on a mobile viewport (< 768px)
- Then the heading is centered and full-width
- Then the dropdown is centered and occupies available width
- Given the user views the page on a desktop viewport (>= 992px)
- Then the heading is centered
- Then the dropdown is narrower (approximately 5/12 of container width)

### Requirement: Dropdown toggle behavior

**Scenario: Opening the dropdown**
- Given the dropdown is closed
- When the user clicks on the dropdown button
- Then the dropdown list becomes visible
- Then a search input with placeholder "Search states" is visible
- Then a scrollable list of state options appears below the search input

**Scenario: Closing the dropdown**
- Given the dropdown is open
- When the user clicks on the dropdown button again
- Then the dropdown list is hidden

### Requirement: Search/filter functionality

**Scenario: Filtering by typing**
- Given the dropdown is open
- When the user types "cal" into the search input
- Then only states containing "cal" (case-insensitive) are visible
- Then states not matching the search are hidden

**Scenario: Clearing the search**
- Given the user has typed "cal" into the search input
- When the user clears the search input
- Then all states are visible again

**Scenario: No matching results**
- Given the dropdown is open
- When the user types "xyz" into the search input
- Then no states are visible in the list

### Requirement: Multi-selection with checkboxes

**Scenario: Selecting a single state**
- Given the dropdown is open
- When the user clicks the checkbox for "California"
- Then "California" shows a coral-red checked checkbox
- Then the quantity indicator updates to "(1)"

**Scenario: Selecting multiple states**
- Given "California" is already selected
- When the user clicks the checkbox for "New York"
- Then both "California" and "New York" show checked checkboxes
- Then the quantity indicator updates to "(2)"

**Scenario: Deselecting a state**
- Given "California" and "New York" are selected
- When the user clicks the checkbox for "California" again
- Then "California" shows an unchecked checkbox
- Then the quantity indicator updates to "(1)"

**Scenario: Deselecting all states**
- Given "California" and "New York" are selected
- When the user deselects all states
- Then the quantity indicator shows "(Any)"

### Requirement: Selection persists across search

**Scenario: Selecting while searching**
- Given the dropdown is open
- When the user types "cal" into the search input
- And selects "California"
- Then "California" is marked as selected
- When the user clears the search input
- Then "California" still shows as selected in the full list

### Requirement: Accessibility

**Scenario: Keyboard navigation**
- Given the dropdown is open
- When the user navigates with keyboard
- Then focus moves through the search input and checkbox items
- Then checkboxes can be toggled with Space or Enter

**Scenario: Screen reader support**
- Given the page loads
- Then the dropdown button has an accessible label
- Then each checkbox has an associated label (state name)
- Then the quantity count is announced when it changes

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
