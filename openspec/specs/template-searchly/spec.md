# Template: Searchly (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search Form V13" — a standalone dropdown search
bar with a full-viewport hero background image, bold heading, and a multi-field
search form (what + where + search button).

- **Source:** https://colorlib.com/wp/template/colorlib-search-13/
- **Live preview (archived):** unreachable — https://preview.colorlib.com/theme/colorlib-search-13/ returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-13.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the screenshot (preview unreachable). Approximate values from visual inspection.

| Token               | Value                                                              |
| ------------------- | ------------------------------------------------------------------ |
| Font family         | System sans-serif (clean geometric sans, e.g. Poppins or similar)  |
| Page background     | Full-viewport hero background image (blue sky, Mediterranean terracotta building) |
| Background overlay  | Subtle dark overlay on hero image for text contrast                |
| Heading color       | `#ffffff` (white)                                                  |
| Heading font weight | 700 (bold)                                                         |
| Heading text transform | uppercase                                                        |
| Heading font size   | ~36–42px, centered                                                |
| Search bar background | `#ffffff` (white)                                                |
| Search bar radius   | 0px (sharp/square corners, no border-radius)                      |
| Search bar height   | ~60px                                                              |
| Search bar border   | None visible (or very subtle light gray)                           |
| Search bar shadow   | None visible (clean flat style)                                    |
| WHAT field label    | `#999` (gray), 12px, uppercase, Lato/sans-serif                   |
| WHAT field placeholder | `#bbb`, italic, 14px — "ex: food, service, bar, hotel"          |
| WHERE field label   | Same as WHAT label — `#999`, 12px, uppercase                      |
| WHERE field value   | `#333`, 14px — shows "1 adult"                                    |
| WHERE dropdown arrow| Chevron-down SVG, `#999`, 18×18                                   |
| Divider between fields | `1px solid #eee` (subtle vertical line)                        |
| SEARCH button background | `#ff4b5a` (coral-red)                                        |
| SEARCH button text  | `#ffffff` (white), 14px, uppercase, bold                          |
| SEARCH button radius| 0px (square, sharp corners)                                       |
| SEARCH button padding| ~16px 32px                                                        |
| Search bar max-width| ~800px                                                             |
| Search bar position | Vertically centered on hero, roughly 60% from top                  |

## Visual description (from screenshot)

A full-viewport hero section with a large background photograph (blue sky above
a terracotta/orange Mediterranean building with white balconies). Centered on
the hero: a bold white uppercase heading "QUICK FIND YOUR CITY". Below the
heading, horizontally centered, is a wide white search bar divided into three
sections:

1. **WHAT** — left section with gray uppercase label "WHAT" and italic placeholder
   "ex: food, service, bar, hotel"
2. **WHERE** — middle section with gray uppercase label "WHERE" showing "1 adult"
   with a small dropdown chevron icon
3. **SEARCH** — right section, a coral-red (#ff4b5a) square button with bold white
   uppercase "SEARCH" text

The search bar has sharp square corners (no border-radius), no visible shadow,
and is divided by subtle vertical lines between the fields. The overall design is
clean, minimal, and modern — a single-purpose search widget overlaid on a
photographic hero.

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

### Section: Heading

```gherkin
Feature: Heading
  Scenario: Heading displayed
    Given the page loads
    Then a bold white heading is visible
    And the heading text is uppercase
    And the heading reads "QUICK FIND YOUR CITY"
    And the heading is centered horizontally on the hero

  Scenario: Heading typography
    Given the page loads
    Then the heading uses a bold sans-serif font
    And the heading color is white (#ffffff)
    And the heading font size is approximately 36–42px
```

### Section: Search bar

```gherkin
Feature: Search bar
  Scenario: Search bar rendered
    Given the page loads
    Then a white search bar is displayed below the heading
    And the search bar is centered horizontally
    And the search bar has sharp square corners (no border-radius)
    And the search bar is approximately 800px wide

  Scenario: Search bar field layout
    Given the search bar is visible
    Then three sections are displayed side by side: WHAT, WHERE, SEARCH
    And the WHAT and WHERE sections are separated by a subtle vertical line
    And the WHERE and SEARCH sections are separated by a subtle vertical line

  Scenario: WHAT field
    Given the search bar is visible
    Then the WHAT section shows an uppercase label "WHAT" in gray
    And the WHAT section has placeholder text "ex: food, service, bar, hotel"
    And the WHAT field is a text input

  Scenario: Typing in WHAT field
    Given the search bar is visible
    When the user types "restaurant" into the WHAT input
    Then the input value is "restaurant"

  Scenario: WHERE field
    Given the search bar is visible
    Then the WHERE section shows an uppercase label "WHERE" in gray
    And the WHERE section displays "1 adult" as the current selection
    And a dropdown chevron icon is visible in the WHERE section

  Scenario: Changing WHERE selection
    Given the search bar is visible
    When the user opens the WHERE dropdown
    Then a list of guest count options is displayed
    When the user selects "2 adults"
    Then the WHERE section displays "2 adults"

  Scenario: SEARCH button
    Given the search bar is visible
    Then a coral-red button labeled "SEARCH" is displayed on the right
    And the button has white uppercase bold text
    And the button has sharp square corners (no border-radius)

  Scenario: Clicking SEARCH
    Given the search bar is visible
    And the user has entered "hotel" in the WHAT field
    And the WHERE field shows "1 adult"
    When the user clicks the SEARCH button
    Then the search action is triggered with the entered values
```

### Section: Responsive behavior

```gherkin
Feature: Responsive behavior
  Scenario: Mobile layout
    Given the page is viewed on a screen narrower than 768px
    Then the search bar stacks vertically
    And the WHAT, WHERE, and SEARCH sections each take full width
    And the heading font size reduces

  Scenario: Tablet layout
    Given the page is viewed on a screen between 768px and 1024px
    Then the search bar remains horizontal
    And the search bar width adapts to the viewport
```

## Verification checklist

- [ ] Full-viewport hero with background image and dark overlay
- [ ] Bold white uppercase heading "QUICK FIND YOUR CITY" centered
- [ ] White search bar with 3 sections: WHAT (text input), WHERE (dropdown), SEARCH (button)
- [ ] Sharp square corners on search bar and button (no border-radius)
- [ ] Coral-red (#ff4b5a) SEARCH button with white text
- [ ] Gray uppercase labels ("WHAT", "WHERE") with subtle placeholder text
- [ ] Vertical dividers between search bar sections
- [ ] WHERE dropdown shows "1 adult" default with chevron icon
- [ ] Responsive: stacks vertically on mobile (<768px)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] package.json name: @free-react-templates/searchly
- [ ] public/CNAME: searchly.free.componentdock.com
- [ ] 100% test coverage
- [ ] Specs validated with npm run spec:validate
