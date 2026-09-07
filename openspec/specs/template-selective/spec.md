# Template: Selective (Multi-Select Form)

## Purpose

Recreation of ColorLib **Multiselect 10** — a clean, centered multi-select dropdown component with search and checkbox selection.

- **Source:** https://colorlib.com/wp/template/multiselect-10/
- **Preview (original):** https://preview.colorlib.com/theme/bootstrap/multiselect-10/
- **Source slug:** `multiselect-10`
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview's `css/style.css` (Bootstrap 4.3.1 base + custom styles):

| Token | Value | Source |
|-------|-------|--------|
| Font family | Lato (300, 400, 700 weights), Arial fallback | `@font-face` declarations |
| Body background | `#f8f9fd` (light blue-gray) | `body { background: #f8f9fd }` |
| Body text color | `gray` (`#808080`) | `body { color: gray }` |
| Link / accent color | `#ff5959` (coral red) | `a { color: #ff5959 }`, `.bg-primary` |
| Heading color | `#000` (black) | `h1, h2, h3... { color: #000 }` |
| Heading font-size | `28px` | `.heading-section { font-size: 28px }` |
| Section padding | `7em 0` | `.ftco-section { padding: 7em 0 }` |
| Dropdown container border-radius | `5px` | `.dropdown-container { border-radius: 5px }` |
| Dropdown container box-shadow | `0px 10px 30px -4px rgba(0,0,0,0.15)` | `.dropdown-container` |
| Dropdown button background | `#fff` (white) | `.dropdown-button { background: #fff }` |
| Dropdown button padding | `15px 20px` | `.dropdown-button { padding: 15px 20px }` |
| Dropdown label color | `gray` | `.dropdown-label { color: gray; font-weight: 700 }` |
| Dropdown quantity color | `#ff5959` | `.dropdown-quantity { color: #ff5959 }` |
| Chevron icon color | `#ff5959` | `.dropdown-button .fa { color: #ff5959 }` |
| Search input background | `rgba(0, 0, 0, 0.05)` | `input[type="search"] { background: rgba(0,0,0,0.05) }` |
| Search input border-radius | `4px` | `input[type="search"] { border-radius: 4px }` |
| Checkbox checked color | `#ff5959` | `.checkbox-wrap input:checked ~ .checkmark:after { color: #ff5959 }` |
| Checkbox unchecked color | `rgba(0, 0, 0, 0.1)` | `.checkmark:after { color: rgba(0,0,0,0.1) }` |
| Checkbox font-size | `20px` | `.checkmark:after { font-size: 20px }` |
| List max-height | `200px` with overflow-y scroll | `.dropdown-list ul { max-height: 200px }` |
| Container max-width | `1140px` (Bootstrap default) | Bootstrap `.container` |
| Transition | `0.3s all ease` on links | `a { transition: .3s all ease }` |

## Visual Design (from screenshot)

The original template shows a single centered section on a light blue-gray (`#f8f9fd`) background. A heading "Multiselect #10" sits above a clean white card with subtle shadow. The card contains a dropdown button showing "States (Any)" with a coral-red chevron icon on the right. Clicking expands a search input and a scrollable list of US states with custom checkboxes — checked items show coral-red checkmarks.

Layout: single centered column (Bootstrap `col-md-5`), vertically and horizontally centered in the viewport section. Minimalist, component-focused design — no hero imagery, no footer visible. The entire template is essentially one interactive component showcase.

## Gherkin Requirements

### Feature: Selective Multi-Select Component

```gherkin
Feature: Selective multi-select dropdown component
  As a user interacting with a form
  I want a searchable multi-select dropdown
  So I can efficiently select multiple options from a list

  Background:
    Given the Selective page is loaded

  Scenario: Page displays heading and dropdown
    Then I should see the heading "Multi-Select"
    And I should see a dropdown button

  Scenario: Dropdown shows initial state
    Then the dropdown label should read "States"
    And the dropdown quantity should show "(Any)"

  Scenario: Dropdown opens on click
    When I click the dropdown button
    Then a search input should be visible
    And a list of states should be visible

  Scenario: Dropdown closes on second click
    Given the dropdown is open
    When I click the dropdown button
    Then the search input should be hidden
    And the list should be hidden

  Scenario: Search filters the list
    Given the dropdown is open
    When I type "Cal" in the search input
    Then only "California" should be visible in the list

  Scenario: Search with no matches shows empty list
    Given the dropdown is open
    When I type "XYZ" in the search input
    Then no states should be visible in the list

  Scenario: Selecting an option updates the quantity
    Given the dropdown is open
    When I check "California"
    Then the quantity should show "(1)"

  Scenario: Selecting multiple options updates the quantity
    Given the dropdown is open
    When I check "California"
    And I check "Texas"
    Then the quantity should show "(2)"

  Scenario: Deselecting an option updates the quantity
    Given the dropdown is open
    And "California" is checked
    When I uncheck "California"
    Then the quantity should show "(Any)"

  Scenario: Visual styling matches design tokens
    Then the page background should be light blue-gray
    And the heading should be black
    And the dropdown should have white background
    And the dropdown should have rounded corners
    And the dropdown should have a subtle shadow
    And accent elements should be coral red

  Scenario: Search clears when dropdown closes
    Given the dropdown is open
    And I type "Cal" in the search input
    When I click the dropdown button
    And I click the dropdown button again
    Then the search input should show placeholder "Search states"
```

## Verification Checklist

- [ ] Heading renders centered on page
- [ ] Dropdown button shows label + "(Any)" quantity + chevron icon
- [ ] Click toggles dropdown open/closed
- [ ] Search input filters list in real-time
- [ ] Checkboxes use custom coral-red styling when checked
- [ ] Quantity counter updates on select/deselect
- [ ] "(Any)" shown when zero selections
- [ ] Dropdown list scrolls when > 8 items visible
- [ ] Background is `#f8f9fd`, accent is `#ff5959`
- [ ] Font is Lato (via Google Fonts)
- [ ] Component is centered in viewport section
- [ ] Footer links to Component Dock
