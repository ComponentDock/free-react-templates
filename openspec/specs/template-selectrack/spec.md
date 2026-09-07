# Template: Selectrack (Form Component — Multiselect Dropdown)

## Purpose

Recreation of ColorLib **Multiselect 10** — a free Bootstrap multiselect
dropdown with live search. The original is a single-section form component
demo, not a full website template. We recreate it as a standalone React
component page.

- **ColorLib source:** https://colorlib.com/wp/template/multiselect-10/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-10/
- **Category:** Form Component / Multiselect with Live Search
- **Stack:** React 19 · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library

## Design Tokens (extracted from preview CSS)

| Token               | Value                            | Source class / rule                  |
|---------------------|----------------------------------|--------------------------------------|
| Font family         | `"Lato", Arial, sans-serif`      | `body { font-family: "Lato" ... }`   |
| Body background     | `#f8f9fd`                        | `body { background: #f8f9fd }`       |
| Body text color     | `gray` (#808080)                 | `body { color: gray }`               |
| Heading color       | `#000`                           | `h1,h2,... { color: #000 }`          |
| Heading font-weight | `400`                            | `h1,h2,... { font-weight: 400 }`     |
| Primary / accent    | `#ff5959` (coral-red)            | `.bg-primary`, `a { color: #ff5959 }`|
| Link color          | `#ff5959`                        | `a { color: #ff5959 }`              |
| Body font-size      | `16px`                           | `body { font-size: 16px }`           |
| Body line-height    | `1.8`                            | `body { line-height: 1.8 }`          |
| Section padding     | `7em 0`                          | `.ftco-section { padding: 7em 0 }`   |
| Dropdown bg         | `#fff`                           | `.dropdown-button { background: #fff }`|
| Dropdown border-radius | `5px`                         | `.dropdown-container { border-radius: 5px }`|
| Dropdown shadow     | `0px 10px 30px -4px rgba(0,0,0,0.15)` | `.dropdown-container { box-shadow }`|
| Button padding      | `15px 20px`                      | `.dropdown-button { padding: 15px 20px }`|
| Search input bg     | `rgba(0,0,0,0.05)`              | `.dropdown-list input[type="search"]` |
| Search border-radius| `4px`                            | `.dropdown-list input { border-radius: 4px }`|
| Checkbox checked    | `#ff5959`                        | `.checkbox-wrap input:checked ~ .checkmark:after { color: #ff5959 }`|

## Section Structure (from preview DOM)

1. **Section wrapper** (`ftco-section`): Full-page centered layout
2. **Title row**: "Multiselect #10" heading, centered
3. **Dropdown container**: A single multiselect dropdown component containing:
   - **Dropdown trigger button**: Label ("States") + quantity badge ("Any") + chevron icon
   - **Dropdown list** (hidden by default):
     - Search input (live filter placeholder: "Search states")
     - Checkbox list of US states (scrollable, max-height 200px)
4. **Footer** with Component Dock link (mandatory per AGENTS.md)

## Gherkin Requirements

### Feature: Multiselect Dropdown with Live Search

#### Scenario: Page renders with title and dropdown
- Given the page loads
- When the user views the page
- Then a heading "States" is visible
- And a dropdown trigger button is visible with label "States" and quantity "Any"
- And a chevron-down icon is visible on the trigger

#### Scenario: Dropdown opens on click
- Given the dropdown is closed
- When the user clicks the dropdown trigger button
- Then the dropdown list becomes visible
- And a search input with placeholder "Search states" is visible
- And a list of US state checkboxes is visible

#### Scenario: Dropdown closes on outside click
- Given the dropdown is open
- When the user clicks outside the dropdown
- Then the dropdown list becomes hidden

#### Scenario: Live search filters states
- Given the dropdown is open
- When the user types "Cal" in the search input
- Then only states containing "Cal" are visible (e.g. California)
- And states not matching are hidden

#### Scenario: Checkbox selection updates quantity
- Given the dropdown is open
- When the user checks "California"
- Then the quantity badge updates from "Any" to "1"
- When the user also checks "Texas"
- Then the quantity badge shows "2"

#### Scenario: Checkbox deselection
- Given "California" is checked
- When the user unchecks "California"
- Then the quantity decreases by 1

#### Scenario: Empty search shows no results
- Given the dropdown is open
- When the user types "xyz" in the search input
- Then no state checkboxes are visible

#### Scenario: Clearing search restores all states
- Given the dropdown shows filtered results for "Cal"
- When the user clears the search input
- Then all states are visible again

#### Scenario: Accessibility
- Given the page loads
- When the user navigates with keyboard
- Then the dropdown trigger is focusable
- And the search input is focusable
- And checkboxes are keyboard-accessible

## Verification Checklist

- [ ] Page renders centered layout with heading and dropdown on light gray (#f8f9fd) background
- [ ] Font is Lato (loaded via Google Fonts or system fallback)
- [ ] Primary accent color is coral-red (#ff5959) — used on links, quantity badge, checked checkboxes, chevron
- [ ] Dropdown container has 5px border-radius and subtle box-shadow
- [ ] Dropdown button has white background, gray label text, coral quantity text
- [ ] Search input has light background (rgba(0,0,0,0.05)), 4px border-radius
- [ ] Checkbox list scrolls at max-height 200px
- [ ] Checked checkbox displays coral-red checkmark (FontAwesome square-check icon)
- [ ] Live search filters state list in real-time
- [ ] Quantity badge updates on checkbox changes
- [ ] Dropdown opens/closes on trigger click
- [ ] Dropdown closes on outside click
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib anywhere in app code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds without errors
