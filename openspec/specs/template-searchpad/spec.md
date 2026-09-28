# Template: Searchpad (Search Form)

## Purpose

Recreation of ColorLib "Search 10" — a standalone advanced search form widget
with a keyword input bar and a panel of filter dropdowns.

- **Source:** https://colorlib.com/wp/template/colorlib-search-10/
- **Live preview (archived):** https://colorlib.com/etc/searchf/colorlib-search-10/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the original `css/style.css` at the archived preview URL.

| Token               | Value                                                              |
| ------------------- | ------------------------------------------------------------------ |
| Font family         | `'Lato', sans-serif` (Google Fonts)                                |
| Page background     | `#d9eff5` (light ice-blue)                                         |
| Search bar gradient | `linear-gradient(to right, #2c6dd5 0%, #2c6dd5 28%, #ff4b5a 91%, #ff4b5a 100%)` — blue (#2c6dd5) to coral-red (#ff4b5a) |
| Search bar text     | `#fff` (white), 18px                                               |
| Search bar height   | 70px                                                               |
| Search bar radius   | 34px (pill)                                                        |
| Search bar shadow   | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`                            |
| Search icon         | White SVG magnifying glass, 34×34, positioned right inside bar     |
| Advanced panel bg   | `#fff` (white)                                                     |
| Advanced panel radius| 10px                                                              |
| Advanced panel shadow| `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`                           |
| Advanced panel padding| 40px                                                             |
| "ADVANCED SEARCH" label| `#555`, 14px, uppercase, block, margin-bottom 26px               |
| Filter dropdown bg  | `#ccc` (gray)                                                      |
| Filter dropdown radius| 20px (pill)                                                     |
| Filter dropdown height| 40px                                                             |
| Filter dropdown text| `#fff` (white), 14px, Lato                                         |
| Filter dropdown arrow| Custom SVG chevron-down, `#999`, 18×18                            |
| Result count text   | `#999`, 14px; number span `#333`                                   |
| RESET button        | Transparent, `#666` text, no radius, 14px, hover → `#000`          |
| SEARCH button       | Same gradient as bar, `border-radius: 20px` (pill), 40px height, white text, shadow; hover reverses gradient (pink→blue) |
| Max form width      | 790px                                                              |
| Responsive breakpoint| 767px — dropdowns stack vertically, padding adjusts               |

## Visual description (from screenshot)

A full-viewport centered layout on a light ice-blue (#d9eff5) background.
At the top: a wide pill-shaped search bar with a blue-to-coral gradient,
white placeholder text "Type Keywords", and a white magnifying-glass icon
on the right. Below: a white rounded card labeled "ADVANCED SEARCH" with
a 3×2 grid of gray pill-shaped dropdown selectors (Accessories, Color, Size,
Sale, Time, Type). At the bottom of the card: "108 results" on the left,
a plain "RESET" text button and a gradient pill "SEARCH" button on the right.
Clean, minimal, single-purpose search widget — no navigation, no footer,
no other sections.

## Requirements (Gherkin)

### Section: Basic search bar

```gherkin
Feature: Basic search bar
  Scenario: Renders keyword input
    Given the page loads
    Then a search input with placeholder "Type Keywords" is visible
    And the input has a gradient background (blue to coral)
    And the input is 70px tall with pill shape (border-radius 34px)

  Scenario: Search icon displayed
    Given the page loads
    Then a magnifying-glass SVG icon is visible inside the search bar on the right

  Scenario: Typing keywords
    Given the search bar is visible
    When the user types "laptop" into the search input
    Then the input value is "laptop"
```

### Section: Advanced search panel

```gherkin
Feature: Advanced search panel
  Scenario: Panel visibility
    Given the page loads
    Then an "ADVANCED SEARCH" label is visible
    And a white card with rounded corners (10px) is displayed below the search bar

  Scenario: Filter dropdowns
    Given the advanced search panel is visible
    Then 6 filter dropdowns are displayed in a 3-column grid
    And each dropdown shows a default placeholder (Accessories, Color, Size, Sale, Time, Type)
    And each dropdown has a gray (#ccc) pill-shaped background with a chevron icon

  Scenario: Selecting a filter option
    Given the advanced search panel is visible
    When the user selects "Red" from the Color dropdown
    Then the Color dropdown displays "Red"

  Scenario: Reset button clears all filters
    Given the advanced search panel is visible
    And the user has selected values in some dropdowns
    When the user clicks the "RESET" button
    Then all dropdowns revert to their default placeholder values

  Scenario: Search button submits
    Given the advanced search panel is visible
    When the user clicks the "SEARCH" button
    Then a search action is triggered with the current keyword and filter values
```

### Section: Result count

```gherkin
Feature: Result count
  Scenario: Displays result count
    Given the page loads
    Then "108 results" text is visible at the bottom-left of the advanced panel
    And the number "108" is in dark text (#333)
    And the word "results" is in gray text (#999)
```

### Section: Responsive layout

```gherkin
Feature: Responsive layout
  Scenario: Mobile view stacks dropdowns
    Given the viewport width is less than 768px
    Then the filter dropdowns stack vertically (one per row)
    And the advanced panel padding adjusts to 40px 15px
    And the search bar padding adjusts for mobile
```

## Verification checklist

- [ ] Spec reviewed and approved
- [ ] All Gherkin scenarios have corresponding test files
- [ ] 100% line/function/branch/statement coverage
- [ ] Design tokens match the reference (colors, fonts, radii, shadows)
- [ ] Section order matches the original (search bar → advanced panel → result count)
- [ ] Responsive behavior at 767px breakpoint
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` contains `searchpad.free.componentdock.com`
- [ ] `homepage` in package.json set to `https://searchpad.free.componentdock.com`
- [ ] Spec folder: `openspec/specs/template-searchpad/`
- [ ] Docs folder: `docs/templates/searchpad/`
