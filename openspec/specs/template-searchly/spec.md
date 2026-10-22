# Template: Searchly (Search Form)
<!-- prep-status: shipped-as=scanbar -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-search-13` design this prep describes already
> ships as `apps/scanbar` (<https://scanbar.free.componentdock.com>).
> Do not scaffold `apps/searchly`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-scanbar/spec.md`.

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

## Requirements

### Section: Hero background

Feature: Hero background

#### Scenario: Full-viewport background image

- **GIVEN** the page loads
- **THEN** a full-viewport hero section is displayed
- **AND** the hero has a background image filling the entire viewport
- **AND** the hero has a subtle dark overlay for text contrast

#### Scenario: Responsive background

- **GIVEN** the page is viewed on a mobile device
- **THEN** the background image scales to cover the viewport
- **AND** the hero maintains full viewport height

### Section: Heading

Feature: Heading

#### Scenario: Heading displayed

- **GIVEN** the page loads
- **THEN** a bold white heading is visible
- **AND** the heading text is uppercase
- **AND** the heading reads "QUICK FIND YOUR CITY"
- **AND** the heading is centered horizontally on the hero

#### Scenario: Heading typography

- **GIVEN** the page loads
- **THEN** the heading uses a bold sans-serif font
- **AND** the heading color is white (#ffffff)
- **AND** the heading font size is approximately 36–42px

### Section: Search bar

Feature: Search bar

#### Scenario: Search bar rendered

- **GIVEN** the page loads
- **THEN** a white search bar is displayed below the heading
- **AND** the search bar is centered horizontally
- **AND** the search bar has sharp square corners (no border-radius)
- **AND** the search bar is approximately 800px wide

#### Scenario: Search bar field layout

- **GIVEN** the search bar is visible
- **THEN** three sections are displayed side by side: WHAT, WHERE, SEARCH
- **AND** the WHAT and WHERE sections are separated by a subtle vertical line
- **AND** the WHERE and SEARCH sections are separated by a subtle vertical line

#### Scenario: WHAT field

- **GIVEN** the search bar is visible
- **THEN** the WHAT section shows an uppercase label "WHAT" in gray
- **AND** the WHAT section has placeholder text "ex: food, service, bar, hotel"
- **AND** the WHAT field is a text input

#### Scenario: Typing in WHAT field

- **GIVEN** the search bar is visible
- **WHEN** the user types "restaurant" into the WHAT input
- **THEN** the input value is "restaurant"

#### Scenario: WHERE field

- **GIVEN** the search bar is visible
- **THEN** the WHERE section shows an uppercase label "WHERE" in gray
- **AND** the WHERE section displays "1 adult" as the current selection
- **AND** a dropdown chevron icon is visible in the WHERE section

#### Scenario: Changing WHERE selection

- **GIVEN** the search bar is visible
- **WHEN** the user opens the WHERE dropdown
- **THEN** a list of guest count options is displayed
- **WHEN** the user selects "2 adults"
- **THEN** the WHERE section displays "2 adults"

#### Scenario: SEARCH button

- **GIVEN** the search bar is visible
- **THEN** a coral-red button labeled "SEARCH" is displayed on the right
- **AND** the button has white uppercase bold text
- **AND** the button has sharp square corners (no border-radius)

#### Scenario: Clicking SEARCH

- **GIVEN** the search bar is visible
- **AND** the user has entered "hotel" in the WHAT field
- **AND** the WHERE field shows "1 adult"
- **WHEN** the user clicks the SEARCH button
- **THEN** the search action is triggered with the entered values

### Section: Responsive behavior

Feature: Responsive behavior

#### Scenario: Mobile layout

- **GIVEN** the page is viewed on a screen narrower than 768px
- **THEN** the search bar stacks vertically
- **AND** the WHAT, WHERE, and SEARCH sections each take full width
- **AND** the heading font size reduces

#### Scenario: Tablet layout

- **GIVEN** the page is viewed on a screen between 768px and 1024px
- **THEN** the search bar remains horizontal
- **AND** the search bar width adapts to the viewport

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
