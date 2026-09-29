# Template: QueryWell (Search Form)

## Purpose

Recreation of ColorLib "Search Form V5" (`colorlib-search-5`).
Preview URL: https://preview.colorlib.com/theme/colorlib-search-5/
Screenshot reference: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-5.jpg

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
Package: `@free-react-templates/querywell`.

## Design tokens

Extracted from screenshot analysis (preview unreachable; screenshot is sole reference):

| Token              | Value                     |
| ------------------ | ------------------------- |
| Background         | Full-bleed hero image     |
| Heading color      | `#FFFFFF` (white)         |
| Heading font       | Clean sans-serif, uppercase, bold (likely Poppins or similar) |
| Search bar bg      | `#1A1A1A` (near-black)   |
| Search bar radius  | 0 (square/flat)           |
| Search placeholder | `#AAAAAA` (light gray)    |
| Search icon color  | `#FFFFFF` (white)         |
| Category link color| `#FFFFFF` (white, slightly translucent) |
| Category link bg   | Semi-transparent dark     |
| Overall palette    | Muted earth tones in hero image, white text, dark search bar |
| Section bg         | Hero image (full viewport height, centered) |

## Requirements (Gherkin)

### Hero Section

```gherkin
Feature: Hero section with search

  Scenario: Full-bleed hero background image
    Given the page loads
    Then the hero section fills the viewport
    And the hero displays a background image from picsum.photos

  Scenario: Heading text is displayed
    Given the hero section is visible
    Then a heading "WHAT ARE YOU LOOKING FOR?" is shown
    And the heading is white, uppercase, and bold

  Scenario: Search bar is centered below heading
    Given the hero section is visible
    Then a search bar is displayed below the heading
    And the search bar has a dark background
    And the search bar spans a significant width (~60-70% viewport)

  Scenario: Search input accepts text
    Given the search bar is visible
    When the user types in the search input
    Then the typed text appears in the input field
    And a placeholder "Type to search." is shown when empty

  Scenario: Search icon is displayed
    Given the search bar is visible
    Then a magnifying glass icon is shown inside the search bar
    And the icon is white
```

### Category Links

```gherkin
Feature: Category quick links

  Scenario: Category links are shown below search bar
    Given the hero section is visible
    When the search bar is displayed
    Then category links are shown below the search bar

  Scenario: Category links content
    Given the category links are visible
    Then the links include "New Arrivals", "Ladies", "Mens", "Accessories", "Sale"
    And each link is white text

  Scenario: Category links are interactive
    Given a category link is visible
    When the user hovers over a category link
    Then the link shows a hover state (opacity change or underline)
```

### Footer

```gherkin
Feature: Footer with attribution

  Scenario: Footer is present
    Given the page loads
    Then a footer section is displayed at the bottom
    And the footer contains a link to https://www.componentdock.com/
    And the footer is branded "Component Dock"
```

### Responsive

```gherkin
Feature: Responsive layout

  Scenario: Mobile hero
    Given the page loads on a mobile viewport (375px)
    Then the hero section fills the viewport
    And the heading is readable and appropriately sized
    And the search bar spans near full width

  Scenario: Desktop hero
    Given the page loads on a desktop viewport (1280px)
    Then the hero section fills the viewport
    And the search bar is centered with constrained width
```

## Verification checklist

- [ ] Hero section renders with full-bleed background image
- [ ] Heading "WHAT ARE YOU LOOKING FOR?" displays white/uppercase/bold
- [ ] Search bar has dark background, flat corners, search icon
- [ ] Search input accepts typing, shows placeholder when empty
- [ ] Category links (New Arrivals, Ladies, Mens, Accessories, Sale) display below search
- [ ] Category links are interactive (hover state)
- [ ] Footer links to componentdock.com
- [ ] Responsive on mobile and desktop
- [ ] All tests pass with 100% coverage
- [ ] No references to ColorLib in app code
- [ ] Package name: `@free-react-templates/querywell`
- [ ] CNAME: `querywell.free.componentdock.com`
