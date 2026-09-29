# Template: Flightseek (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search Form V20" — a flight search form widget
with from/to text inputs, date pickers, passenger selector dropdown, and a search
button, all overlaid on a full-viewport background image with a purple-to-blue
gradient card.

- **Source:** https://colorlib.com/wp/template/colorlib-search-20/
- **Live preview (archived):** https://colorlib.com/etc/searchf/colorlib-search-20/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the archived preview CSS (`css/style.css`) at
`https://colorlib.com/etc/searchf/colorlib-search-20/css/style.css`.

| Token                    | Value                                                                |
| ------------------------ | -------------------------------------------------------------------- |
| Font family              | `"Poppins", "Arial", "Helvetica Neue", sans-serif` (Google Fonts)   |
| Page background          | Full-viewport background image (`bg-img-03.jpg`), `center/cover`     |
| Card background gradient | `linear-gradient(to top, #3d2161 0%, #004d91 100%)` — purple to blue |
| Card opacity             | `0.9`                                                                |
| Card border-radius       | `10px`                                                               |
| Card padding (desktop)   | `60px 55px`                                                          |
| Card padding (mobile)    | `40px 30px`                                                          |
| Card max-width           | `900px`                                                              |
| Label color              | `#ffffff` (white)                                                    |
| Label font-size          | `18px`                                                               |
| Label font-weight        | `700` (bold)                                                         |
| Label text-transform     | `capitalize`                                                         |
| Label margin-bottom      | `12px`                                                               |
| Input font-size          | `18px`                                                               |
| Input padding            | `16.5px 20px`                                                        |
| Input placeholder color  | `#cccccc` (light gray)                                               |
| Button background        | `#ff4b5a` (coral-red)                                                |
| Button hover background  | `#eb3746` (darker red)                                               |
| Button text color        | `#ffffff` (white)                                                    |
| Button font-size         | `18px`                                                               |
| Button font-weight       | `700` (bold)                                                         |
| Button text-transform    | `uppercase`                                                          |
| Button border-radius     | `10px`                                                               |
| Button line-height       | `60px`                                                               |
| Button width             | `100%`                                                               |
| Quantity input width     | `55px`                                                               |
| Quantity input color     | `#555555`                                                            |
| Quantity input font-weight | `700`                                                              |
| Input icon color         | `#808080` (gray)                                                     |
| List room name color     | `#999999` (gray)                                                     |
| List room footer border  | `1px solid #e5e5e5`                                                  |
| Dropdown font-family     | `"Lato", "Arial", "Helvetica Neue", sans-serif`                      |
| Responsive breakpoint    | `767px` — card stacks vertically, full width                          |

## Visual description (from screenshot + archived preview)

A full-viewport section with a photographic background image (travel/flight
themed). Centered on the page is a translucent card with a purple-to-blue
gradient overlay (`#3d2161` → `#004d91`, 0.9 opacity) and `border-radius: 10px`.

The card contains a flight search form with a 2-column grid layout:

1. **Row 1:** "from" and "to" text inputs (placeholder: "City, Region or Airport")
2. **Row 2:** "Depart" and "Return" date pickers (native `<input type="date">`)
3. **Row 3:** "Passengers" dropdown selector (default: "1 Adult, 0 Children, 1 Room")
   with a `+` icon, plus a coral-red "search" button

Labels are white, bold, 18px, capitalized. Inputs have white backgrounds with
18px font. The search button is full-width coral-red (`#ff4b5a`) with rounded
corners (`10px`), white uppercase text, and hover darkens to `#eb3746`.

The passengers dropdown shows a room-based selector with adults/children counts
using +/- quantity controls, and an "Add room" link at the bottom.

On mobile (<767px), the card takes full width, columns stack vertically, and
padding adjusts.

## Requirements (Gherkin)

### Section: Background

```gherkin
Feature: Background
  Scenario: Full-viewport background image
    Given the page loads
    Then a full-viewport section is displayed
    And the section has a background image covering the entire viewport

  Scenario: Responsive background
    Given the page is viewed on a mobile device
    Then the background image scales to cover the viewport
    And the section maintains full viewport height
```

### Section: Search card

```gherkin
Feature: Search card
  Scenario: Card rendered
    Given the page loads
    Then a search card is displayed centered on the page
    And the card has a purple-to-blue gradient background (#3d2161 to #004d91)
    And the card has 0.9 opacity
    And the card has border-radius of 10px
    And the card has padding of 60px 55px on desktop

  Scenario: Card max-width
    Given the page loads
    Then the card has a maximum width of 900px
    And the card is horizontally centered

  Scenario: Card responsive
    Given the page is viewed on a screen narrower than 768px
    Then the card takes full width
    And the card padding reduces to 40px 30px
```

### Section: Form fields — From / To

```gherkin
Feature: From/To fields
  Scenario: From field rendered
    Given the page loads
    Then a "from" text input is displayed
    And the from input has placeholder "City, Region or Airport"
    And the from input has a white label "From" above it

  Scenario: To field rendered
    Given the page loads
    Then a "to" text input is displayed
    And the to input has placeholder "City, Region or Airport"
    And the to input has a white label "To" above it

  Scenario: From/To side by side
    Given the page is viewed on desktop
    Then the from and to fields are displayed side by side in a 2-column layout

  Scenario: Typing in From field
    Given the page loads
    When the user types "New York" into the from input
    Then the from input value is "New York"

  Scenario: Typing in To field
    Given the page loads
    When the user types "London" into the to input
    Then the to input value is "London"
```

### Section: Form fields — Depart / Return

```gherkin
Feature: Depart/Return fields
  Scenario: Depart date field rendered
    Given the page loads
    Then a "Depart" date picker is displayed
    And the depart field has a white label "Depart" above it

  Scenario: Return date field rendered
    Given the page loads
    Then a "Return" date picker is displayed
    And the return field has a white label "Return" above it

  Scenario: Depart/Return side by side
    Given the page is viewed on desktop
    Then the depart and return fields are displayed side by side in a 2-column layout

  Scenario: Selecting depart date
    Given the page loads
    When the user selects "2026-12-15" as the depart date
    Then the depart date field shows "2026-12-15"

  Scenario: Selecting return date
    Given the page loads
    When the user selects "2026-12-22" as the return date
    Then the return date field shows "2026-12-22"
```

### Section: Passengers selector

```gherkin
Feature: Passengers selector
  Scenario: Passengers field rendered
    Given the page loads
    Then a "Passengers" field is displayed
    And the passengers field shows "1 Adult, 0 Children, 1 Room" by default
    And the passengers field has a white label "Passengers" above it
    And a plus icon is visible next to the passengers field

  Scenario: Opening passengers dropdown
    Given the page loads
    When the user clicks the passengers field or plus icon
    Then a dropdown appears showing "Room 1" with Adults and Children counters

  Scenario: Increasing adults count
    Given the passengers dropdown is open
    When the user clicks the "+" button next to Adults
    Then the adults count increases by 1
    And the passengers field text updates to reflect the new count

  Scenario: Decreasing adults count
    Given the passengers dropdown is open
    And the adults count is 2
    When the user clicks the "-" button next to Adults
    Then the adults count decreases by 1

  Scenario: Increasing children count
    Given the passengers dropdown is open
    When the user clicks the "+" button next to Children
    Then the children count increases by 1

  Scenario: Add room link
    Given the passengers dropdown is open
    Then an "Add room" link is visible at the bottom of the dropdown
    And the "Add room" link is separated by a subtle border
```

### Section: Search button

```gherkin
Feature: Search button
  Scenario: Search button rendered
    Given the page loads
    Then a coral-red "search" button is displayed
    And the button has white uppercase text
    And the button has border-radius of 10px
    And the button takes full width of its column

  Scenario: Search button hover
    Given the search button is visible
    When the user hovers over the search button
    Then the button background darkens to #eb3746

  Scenario: Clicking search with all fields filled
    Given the from field has "New York"
    And the to field has "London"
    And the depart date is "2026-12-15"
    And the return date is "2026-12-22"
    When the user clicks the search button
    Then the search action is triggered with the entered values
```

### Section: Responsive behavior

```gherkin
Feature: Responsive behavior
  Scenario: Mobile layout
    Given the page is viewed on a screen narrower than 768px
    Then all form fields stack vertically (single column)
    And the search button takes full width
    And the card padding adjusts to 40px 30px

  Scenario: Tablet layout
    Given the page is viewed on a screen between 768px and 1024px
    Then the form fields remain in 2-column layout
    And the card width adapts to the viewport
```

## Verification checklist

- [ ] Full-viewport background image with travel/flight theme
- [ ] Centered card with purple-to-blue gradient (#3d2161 → #004d91) at 0.9 opacity
- [ ] Card border-radius: 10px, max-width: 900px
- [ ] "from" and "to" text inputs with "City, Region or Airport" placeholder
- [ ] "Depart" and "Return" native date pickers
- [ ] "Passengers" dropdown with adults/children counters and "Add room" link
- [ ] Coral-red (#ff4b5a) "search" button with white uppercase text, 10px radius
- [ ] Button hover darkens to #eb3746
- [ ] White bold labels (18px, capitalized) above each field
- [ ] 2-column grid layout on desktop, single column on mobile
- [ ] Responsive: card full-width on mobile (<768px), padding adjusts
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] package.json name: @free-react-templates/flightseek
- [ ] public/CNAME: flightseek.free.componentdock.com
- [ ] 100% test coverage
- [ ] Specs validated with npm run spec:validate
