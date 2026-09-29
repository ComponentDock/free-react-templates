# Template: QuestBar (Search Form Component)

## Purpose

Recreation of ColorLib **Search Form Bar 05** — a standalone search form bar component with a category dropdown, text input, and search icon button.

- **Source slug:** `search-form-bar-05`
- **Preview URL:** https://preview.colorlib.com/theme/search-form-bar-05/ (currently 404)
- **Screenshot URL:** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-05.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Note:** Preview was unreachable at time of spec creation. Screenshot used as primary reference.

## Design Tokens

Extracted from screenshot analysis:

| Token | Value | Notes |
|-------|-------|-------|
| **Brand color** | `#4ecdc4` (teal/turquoise) | Used on dropdown button, search button |
| **Brand hover** | `#45b7aa` (darker teal) | Button hover state |
| **Background** | `#ffffff` (white) | Page background |
| **Input background** | `#ffffff` (white) | Search input field |
| **Text color** | `#333333` (dark gray) | Input placeholder, dropdown text |
| **Title color** | `#333333` | Page heading |
| **Font family** | `"Poppins", sans-serif` | Typical for ColorLib form templates |
| **Button radius** | `0` (square/flat edges) | Buttons have sharp corners |
| **Input border** | `1px solid #e0e0e0` | Subtle light gray border |
| **Shadow** | `0 2px 8px rgba(0,0,0,0.1)` | Subtle shadow on the form container |
| **Bar max-width** | ~`500px` | Centered on page |

## Component Structure

The search bar is a single horizontal form with three parts:
1. **Category dropdown button** — teal background, "ALL PRODUCT ↓" text, dropdown arrow icon
2. **Search text input** — white background, "Search..." placeholder, no border on left/right
3. **Search button** — teal background, white magnifying glass icon

The bar has a subtle box shadow and is centered on the page. The title "Search Form/Bar #05" appears above.

## Gherkin Scenarios

```gherkin
Feature: QuestBar search form component

  Background:
    Given the QuestBar component is rendered on the page

  Scenario: renders the search bar with all elements
    Then a category dropdown button should be visible with text "ALL PRODUCT"
    And a search input should be visible with placeholder "Search..."
    And a search submit button with a magnifying glass icon should be visible

  Scenario: renders the title
    Then a heading "QuestBar Search" should be visible above the search bar

  Scenario: category dropdown displays options on click
    Given the category dropdown button is visible
    When the user clicks the category dropdown button
    Then a dropdown menu should appear with category options
    And "All Product" should be one of the options

  Scenario: selecting a category updates the dropdown label
    Given the dropdown menu is open
    When the user selects "Electronics" from the dropdown
    Then the dropdown button should display "ELECTRONICS ↓"
    And the dropdown menu should close

  Scenario: typing in the search input
    When the user clicks the search input
    And the user types "wireless headphones"
    Then the search input should contain "wireless headphones"

  Scenario: submitting the search form
    Given the user has typed "laptop" in the search input
    When the user clicks the search button
    Then the form should submit with the query "laptop" and the selected category

  Scenario: submitting with empty search
    When the user clicks the search button without typing
    Then the form should submit with an empty query

  Scenario: keyboard submission
    Given the search input is focused
    When the user presses Enter
    Then the form should submit with the current input value

  Scenario: responsive layout on mobile
    Given the viewport width is 375px
    Then the search bar should stack vertically or remain horizontal within the viewport
    And all elements should be accessible and tappable
```

## Verification Checklist

- [ ] Component renders with teal brand color `#4ecdc4`
- [ ] Category dropdown shows "ALL PRODUCT ↓" by default
- [ ] Dropdown opens/closes on click, shows category list
- [ ] Selecting a category updates the button label
- [ ] Search input has "Search..." placeholder
- [ ] Search button has magnifying glass icon (from `lucide-react`)
- [ ] Form submits with category + query on button click
- [ ] Form submits on Enter key press
- [ ] Box shadow visible on the search bar container
- [ ] Centered on page with max-width constraint
- [ ] Responsive: works on mobile viewports
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] 100% test coverage (Vitest + Testing Library)
