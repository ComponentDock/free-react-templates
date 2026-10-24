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

<!-- role-rule-tokens: colorlib-search-18/typeface -->
**Role rule (measured 2026-10-25):** 1 rule(s) own typeface; strongest `body{font-family:"Lato", "Arial", "Helv}` — the design declares `Lato`; this prep states `Poppins`, which no rule that owns the body typeface declares. The sibling prep `seekwell` states the measured value.
<!-- /role-rule-tokens -->

## Requirements

### Feature: BookSpot — Travel Search Form

#### Scenario: Page loads with background image

- **GIVEN** the user navigates to the BookSpot page
- **THEN** a full-viewport background image is displayed
- **AND** a dark semi-transparent card is centered on the page

#### Scenario: Tab navigation between HOTELS, CAR, FLIGHT

- **GIVEN** the search card is visible
- **THEN** three tabs are displayed: "HOTELS", "CAR", "FLIGHT"
- **AND** the "HOTELS" tab is active by default (white, bold)
- **AND** the "CAR" and "FLIGHT" tabs are inactive (dimmed)
- **WHEN** the user clicks the "CAR" tab
- **THEN** the "CAR" tab becomes active and "HOTELS" becomes inactive
- **WHEN** the user clicks the "FLIGHT" tab
- **THEN** the "FLIGHT" tab becomes active and "CAR" becomes inactive

#### Scenario: Where field displays correctly

- **GIVEN** the HOTELS tab is active
- **THEN** a "Where:" label is displayed
- **AND** a text input with placeholder "City, region or specific hotel" is shown
- **AND** a magnifying glass icon is visible inside the input

#### Scenario: Check-In and Check-Out date fields

- **GIVEN** the HOTELS tab is active
- **THEN** "Check-In:" and "Check-Out:" labels are displayed side by side
- **AND** date picker inputs with placeholder "mm/dd/yyyy" are shown

#### Scenario: Travellers dropdown

- **GIVEN** the HOTELS tab is active
- **THEN** a "Travellers:" label is displayed
- **AND** a dropdown shows "1 Adult, 0 Children, 1 Room" by default

#### Scenario: Search button

- **GIVEN** the HOTELS tab is active
- **THEN** a purple "SEARCH" button is displayed on the right side
- **AND** the button text is uppercase and white

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile viewport (< 768px)
- **THEN** the card spans nearly full width with padding
- **AND** fields stack vertically instead of side-by-side

#### Scenario: Accessibility

- **GIVEN** the page is loaded
- **THEN** all form inputs have associated labels
- **AND** the search button has an accessible name
- **AND** tabs are keyboard-navigable with aria roles

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

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/searchf/colorlib-search-18/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#6c63ff` — nearest `#6c7ae0` (d=39)
<!-- live-palette-unverified:end -->
