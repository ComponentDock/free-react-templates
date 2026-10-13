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

## Requirements

### Hero Section

Feature: Hero section with search

#### Scenario: Full-bleed hero background image

- **GIVEN** the page loads
- **THEN** the hero section fills the viewport
- **AND** the hero displays a background image from picsum.photos

#### Scenario: Heading text is displayed

- **GIVEN** the hero section is visible
- **THEN** a heading "WHAT ARE YOU LOOKING FOR?" is shown
- **AND** the heading is white, uppercase, and bold

#### Scenario: Search bar is centered below heading

- **GIVEN** the hero section is visible
- **THEN** a search bar is displayed below the heading
- **AND** the search bar has a dark background
- **AND** the search bar spans a significant width (~60-70% viewport)

#### Scenario: Search input accepts text

- **GIVEN** the search bar is visible
- **WHEN** the user types in the search input
- **THEN** the typed text appears in the input field
- **AND** a placeholder "Type to search." is shown when empty

#### Scenario: Search icon is displayed

- **GIVEN** the search bar is visible
- **THEN** a magnifying glass icon is shown inside the search bar
- **AND** the icon is white

### Category Links

Feature: Category quick links

#### Scenario: Category links are shown below search bar

- **GIVEN** the hero section is visible
- **WHEN** the search bar is displayed
- **THEN** category links are shown below the search bar

#### Scenario: Category links content

- **GIVEN** the category links are visible
- **THEN** the links include "New Arrivals", "Ladies", "Mens", "Accessories", "Sale"
- **AND** each link is white text

#### Scenario: Category links are interactive

- **GIVEN** a category link is visible
- **WHEN** the user hovers over a category link
- **THEN** the link shows a hover state (opacity change or underline)

### Footer

Feature: Footer with attribution

#### Scenario: Footer is present

- **GIVEN** the page loads
- **THEN** a footer section is displayed at the bottom
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the footer is branded "Component Dock"

### Responsive

Feature: Responsive layout

#### Scenario: Mobile hero

- **GIVEN** the page loads on a mobile viewport (375px)
- **THEN** the hero section fills the viewport
- **AND** the heading is readable and appropriately sized
- **AND** the search bar spans near full width

#### Scenario: Desktop hero

- **GIVEN** the page loads on a desktop viewport (1280px)
- **THEN** the hero section fills the viewport
- **AND** the search bar is centered with constrained width

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
