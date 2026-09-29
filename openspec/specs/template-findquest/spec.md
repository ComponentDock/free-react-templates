# Template: FindQuest (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search Form V19" — a flight search template
featuring a full-viewport hero background with a gradient search card overlay.
The search form includes From/To location inputs, passenger count dropdown,
departure/return date pickers, and a green Search button.

- **Source:** https://colorlib.com/wp/template/colorlib-search-19/
- **Live preview:** unreachable — https://preview.colorlib.com/theme/colorlib-search-19/ returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-19.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the screenshot (preview unreachable). Approximate values from
visual inspection of the screenshot.

| Token               | Value                                                              |
| ------------------- | ------------------------------------------------------------------ |
| Font family         | System sans-serif (clean geometric sans, e.g. Inter or similar)    |
| Page background     | Full-viewport hero background image (coastal/ocean scene with palm trees, rocky cliffs) |
| Background overlay  | Subtle dark overlay on hero image for card contrast                |
| Search card background | Linear gradient: left-to-right blue (#5b7fd4) → purple (#9b6dd4) → pink/magenta (#c47dd4) |
| Card border radius  | ~8–12px (rounded corners on the card)                              |
| Card shadow         | None visible (clean flat style)                                    |
| Card padding        | ~24–32px                                                           |
| Card max-width      | ~700–800px                                                         |
| Card position       | Vertically centered on hero, roughly 50–60% from top              |
| Card opacity        | ~0.85–0.95 (slightly semi-transparent over the hero)              |
| Field labels        | `#ffffff` (white), 14px, bold, sans-serif                          |
| Input background    | `#ffffff` (white)                                                  |
| Input border        | None visible (clean white inputs)                                  |
| Input border radius | ~4px (slight rounding)                                             |
| Input placeholder   | `#999999` (gray), regular weight                                   |
| Input height        | ~44–48px                                                           |
| Button background   | `#44c767` (green)                                                  |
| Button text         | `#ffffff` (white), 14px, uppercase, bold                           |
| Button border radius| ~4px (matches input corners)                                       |
| Button padding      | ~12px 24px                                                         |
| Button text         | "SEARCH"                                                           |
| Field layout        | Two rows: Row 1 = From + To (equal width); Row 2 = Passengers + Depart + Return + Search button |
| Section spacing     | ~16px gap between rows and fields                                  |

## Visual description (from screenshot)

A full-viewport hero section with a dramatic coastal landscape photograph
(showing ocean waves crashing against rocky cliffs, palm trees on the left side).
Overlaid on the hero, centered both horizontally and vertically, is a search card
with a blue-to-purple-to-pink gradient background and slightly rounded corners.

The search form inside the card is laid out in two rows:

**Row 1 (top):**
- **From** — text input labeled "From" in white bold text, with placeholder
  "City, Region or Airport" in gray on white background
- **To** — text input labeled "To" in white bold text, with placeholder
  "City, Region or Airport" in gray on white background
- Both inputs are equal width and side by side

**Row 2 (bottom):**
- **Passengers** — dropdown labeled "Passengers" in white bold text, showing
  "1 Adult, 0 Children, 1 Room +" on white background
- **Depart** — date picker labeled "Depart" in white bold text, showing
  "mm/dd/yyyy" placeholder on white background
- **Return** — date picker labeled "Return" in white bold text, showing
  "mm/dd/yyyy" placeholder on white background
- **SEARCH** — green (#44c767) button with white uppercase bold text

The gradient card contrasts sharply against the dark coastal background, making
the form the clear focal point. The design is modern, clean, and travel-oriented.

## Requirements (Gherkin)

### Section: Hero background

```gherkin
Feature: Hero background
  Scenario: Full-viewport background image
    Given the page loads
    Then a full-viewport hero section is displayed
    And the hero has a background image filling the entire viewport
    And the hero has a subtle dark overlay for text contrast

  Scenario: Responsive background
    Given the page is viewed on a mobile device
    Then the background image scales to cover the viewport
    And the hero maintains full viewport height
```

### Section: Search card

```gherkin
Feature: Search card
  Scenario: Search card rendered
    Given the page loads
    Then a search card is displayed centered on the hero
    And the card has a blue-to-purple-to-pink gradient background
    And the card has rounded corners (~8–12px border-radius)
    And the card is approximately 700–800px wide

  Scenario: Card transparency
    Given the page loads
    Then the card is slightly semi-transparent (~0.85–0.95 opacity)
    And the hero background image is partially visible behind the card
```

### Section: From field

```gherkin
Feature: From field
  Scenario: From field rendered
    Given the page loads
    Then a "From" label is displayed in white bold text
    And a text input is displayed with placeholder "City, Region or Airport"
    And the input has a white background and slight border radius

  Scenario: Typing in From field
    Given the page is visible
    When the user types "New York" into the From input
    Then the input value is "New York"
```

### Section: To field

```gherkin
Feature: To field
  Scenario: To field rendered
    Given the page loads
    Then a "To" label is displayed in white bold text
    And a text input is displayed with placeholder "City, Region or Airport"
    And the input has a white background and slight border radius

  Scenario: Typing in To field
    Given the page is visible
    When the user types "London" into the To input
    Then the input value is "London"
```

### Section: Passengers field

```gherkin
Feature: Passengers field
  Scenario: Passengers field rendered
    Given the page loads
    Then a "Passengers" label is displayed in white bold text
    And a dropdown is displayed showing "1 Adult, 0 Children, 1 Room +"
    And the dropdown has a white background

  Scenario: Changing passenger count
    Given the page is visible
    When the user opens the Passengers dropdown
    Then a list of passenger options is displayed
    When the user selects "2 Adults, 1 Child, 1 Room"
    Then the dropdown displays "2 Adults, 1 Child, 1 Room"
```

### Section: Depart date picker

```gherkin
Feature: Depart date picker
  Scenario: Depart field rendered
    Given the page loads
    Then a "Depart" label is displayed in white bold text
    And a date picker is displayed with placeholder "mm/dd/yyyy"
    And the date picker has a white background and slight border radius

  Scenario: Selecting departure date
    Given the page is visible
    When the user clicks the Depart date picker
    Then a calendar popup is displayed
    When the user selects a date
    Then the Depart field displays the selected date in mm/dd/yyyy format
```

### Section: Return date picker

```gherkin
Feature: Return date picker
  Scenario: Return field rendered
    Given the page loads
    Then a "Return" label is displayed in white bold text
    And a date picker is displayed with placeholder "mm/dd/yyyy"
    And the date picker has a white background and slight border radius

  Scenario: Selecting return date
    Given the page is visible
    When the user clicks the Return date picker
    Then a calendar popup is displayed
    When the user selects a date
    Then the Return field displays the selected date in mm/dd/yyyy format
```

### Section: Search button

```gherkin
Feature: Search button
  Scenario: Search button rendered
    Given the page loads
    Then a green "SEARCH" button is displayed
    And the button has white uppercase bold text
    And the button has slight border radius (~4px)

  Scenario: Clicking Search
    Given the page is visible
    And the From field has "New York"
    And the To field has "London"
    When the user clicks the SEARCH button
    Then the search action is triggered with the entered values
```

### Section: Responsive behavior

```gherkin
Feature: Responsive behavior
  Scenario: Mobile layout
    Given the page is viewed on a screen narrower than 768px
    Then the search card stacks fields vertically
    And the From and To inputs each take full width
    And the Passengers, Depart, Return, and Search button stack vertically
    And the card width adapts to the viewport

  Scenario: Tablet layout
    Given the page is viewed on a screen between 768px and 1024px
    Then the search card remains horizontal
    And the card width adapts to the viewport
```

## Verification checklist

- [ ] Full-viewport hero with coastal background image and dark overlay
- [ ] Gradient search card (blue → purple → pink) centered on hero
- [ ] From field: white input with "City, Region or Airport" placeholder
- [ ] To field: white input with "City, Region or Airport" placeholder
- [ ] Passengers dropdown: shows "1 Adult, 0 Children, 1 Room +"
- [ ] Depart date picker: white input with "mm/dd/yyyy" placeholder
- [ ] Return date picker: white input with "mm/dd/yyyy" placeholder
- [ ] Green (#44c767) SEARCH button with white uppercase bold text
- [ ] Two-row layout: Row 1 = From + To; Row 2 = Passengers + Depart + Return + Search
- [ ] White bold labels on gradient background
- [ ] Rounded card corners (~8–12px)
- [ ] Slightly semi-transparent card over hero
- [ ] Responsive: stacks vertically on mobile (<768px)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] package.json name: @free-react-templates/findquest
- [ ] public/CNAME: findquest.free.componentdock.com
- [ ] 100% test coverage
- [ ] Specs validated with npm run spec:validate
