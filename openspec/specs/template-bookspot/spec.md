# Template: BookSpot (Search Form)

## Purpose

Recreation of ColorLib "Search Form Bar 18" as a standalone React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source template:** ColorLib Search Form Bar 18
- **Source slug:** `colorlib-search-18`
- **Source URL:** https://colorlib.com/wp/template/colorlib-search-18/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-search-18/ (404 at time of prep — screenshot used as primary reference)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-18.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Search Form — travel/hotel booking search card

## Design tokens (extracted from screenshot)

| Token | Value | Notes |
|-------|-------|-------|
| Background | Full-viewport beach sunset photo | Use `https://picsum.photos/seed/bookspot-beach/1920/1080` as placeholder |
| Card background | `rgba(20, 20, 35, 0.85)` — dark navy semi-transparent | Rounded corners (~8px), centered on viewport |
| Card width | ~55% viewport, max-width ~680px | |
| Tab text (active) | `#ffffff` white, bold, uppercase, letter-spacing ~1px | "HOTELS" tab |
| Tab text (inactive) | `rgba(255,255,255,0.6)` — dimmed white | "CAR", "FLIGHT" tabs |
| Input background | `#ffffff` white | Rounded corners (~4px), subtle border |
| Input text / placeholder | `#999999` gray placeholder, `#333333` dark input text | |
| Label text | `#ffffff` white, bold | "Where:", "Check-In:", "Check-Out:", "Travellers:" |
| Search button | `#6c63ff` purple-blue solid | Full-width on right half, rounded (~4px), white uppercase text "SEARCH" |
| Font family | `"Poppins", sans-serif` (inferred from ColorLib patterns) | Clean geometric sans-serif |
| Section background | None — single centered card on photo | No other sections (this is a single-section form template) |

## Gherkin requirements

### Feature: BookSpot — Travel Search Form

  Scenario: Page loads with background image
    Given the user navigates to the BookSpot page
    Then a full-viewport background image is displayed
    And a dark semi-transparent card is centered on the page

  Scenario: Tab navigation between HOTELS, CAR, FLIGHT
    Given the search card is visible
    Then three tabs are displayed: "HOTELS", "CAR", "FLIGHT"
    And the "HOTELS" tab is active by default (white, bold)
    And the "CAR" and "FLIGHT" tabs are inactive (dimmed)
    When the user clicks the "CAR" tab
    Then the "CAR" tab becomes active and "HOTELS" becomes inactive
    When the user clicks the "FLIGHT" tab
    Then the "FLIGHT" tab becomes active and "CAR" becomes inactive

  Scenario: Where field displays correctly
    Given the HOTELS tab is active
    Then a "Where:" label is displayed
    And a text input with placeholder "City, region or specific hotel" is shown
    And a magnifying glass icon is visible inside the input

  Scenario: Check-In and Check-Out date fields
    Given the HOTELS tab is active
    Then "Check-In:" and "Check-Out:" labels are displayed side by side
    And date picker inputs with placeholder "mm/dd/yyyy" are shown

  Scenario: Travellers dropdown
    Given the HOTELS tab is active
    Then a "Travellers:" label is displayed
    And a dropdown shows "1 Adult, 0 Children, 1 Room" by default

  Scenario: Search button
    Given the HOTELS tab is active
    Then a purple "SEARCH" button is displayed on the right side
    And the button text is uppercase and white

  Scenario: Responsive layout
    Given the user views the page on a mobile viewport (< 768px)
    Then the card spans nearly full width with padding
    And fields stack vertically instead of side-by-side

  Scenario: Accessibility
    Given the page is loaded
    Then all form inputs have associated labels
    And the search button has an accessible name
    And tabs are keyboard-navigable with aria roles

## Verification checklist

- [ ] Full-viewport background image renders
- [ ] Dark card is centered with correct opacity
- [ ] Three tabs render with correct active/inactive styling
- [ ] Tab switching updates active state
- [ ] Where input has search icon and correct placeholder
- [ ] Date inputs render side-by-side on desktop, stacked on mobile
- [ ] Travellers dropdown shows default value
- [ ] Search button has purple background, white uppercase text
- [ ] All form inputs have labels (accessibility)
- [ ] Responsive: card adapts to mobile viewport
- [ ] No references to ColorLib in app code
- [ ] Footer links to https://www.componentdock.com/
