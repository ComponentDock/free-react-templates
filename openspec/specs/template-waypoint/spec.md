# Template: Waypoint (Search Form Bar)

Recreation of ColorLib "Colorlib Search Form V12" (https://colorlib.com/wp/template/colorlib-search-12/).

## Purpose

Waypoint is a hotel and travel search form template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Search Form
V12" template (source: https://colorlib.com/etc/searchf/colorlib-search-12/),
built under a DIFFERENT name (Waypoint — a travel/navigation concept; single
lowercase word, no collision with apps/ or existing specs) per the monorepo
naming mandate.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens

- Font heading: Poppins 700 (Google Fonts)
- Font body: Lato 400/700/900 (Google Fonts)
- Background: Full-viewport travel photo with cover/center positioning
- Form container: linear-gradient(rgba(79,172,254,0.8) 0%, rgba(0,242,254,0.8) 100%),
  border-radius 10px, max-width 940px, padding 50px 70px 80px
- Title: "Search Hotels" — Poppins, 36px, bold, #333
- Active tab: #002c71 (navy) background, white text, bottom triangle arrow
- Inactive tab: #fff background, #555 text
- Form inputs: white background, 60px height, 3px border-radius, left icon 48px wide
- Input labels: 11px, uppercase, 900 weight, #555
- Input text: 16px, #333
- Checkboxes: green accent, white label text, 11px uppercase bold
- Search button: #ff8300 (orange) background, white text, 900 weight, 50px height
- Search button hover: #e67600
- Footer: #002c71 (navy) background, white/70 text, Component Dock link

## Design reference (replication findings)

- **Source:** ColorLib "Colorlib Search Form V12" — https://colorlib.com/wp/template/colorlib-search-12/
- **Source slug:** `colorlib-search-12`
- **Preview URL analyzed:** https://colorlib.com/etc/searchf/colorlib-search-12/ — **HTTP 200**, 14,357 B, fetched 2026-10-23. The slug-only path `https://preview.colorlib.com/theme/colorlib-search-12/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://colorlib.com/etc/searchf/colorlib-search-12/css/style.css?v=9b36d97f`, fetched 2026-10-23): brand `#002c71`, `#ff8300`, `#e67600`; dominant neutrals `#808080`, `#333333`, `#f9f9f9`; type Lato, Poppins. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-12.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/waypoint` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Full-viewport hero with travel background image

The template SHALL display a full-viewport hero section with a background travel
photo (picsum.photos seed placeholder) using cover/center positioning.

#### Scenario: Background image renders

- **WHEN** the page loads
- **THEN** the hero section shows a full-viewport background image
- **AND** the form is centered within the hero

### Requirement: Search form with gradient overlay

The template SHALL display a centered search form with a blue-to-cyan gradient
background, 10px border-radius, and padding matching the original design.

#### Scenario: Form container renders

- **WHEN** the page loads
- **THEN** the search form is centered on screen
- **AND** the form has a gradient background from blue to cyan

### Requirement: Search Hotels heading

The template SHALL display a "Search Hotels" heading above the form fields.

#### Scenario: Heading renders

- **WHEN** the page loads
- **THEN** the form shows a heading "Search Hotels" in Poppins bold font

### Requirement: Travel type tabs

The template SHALL display 4 travel type tabs: HOTEL ONLY, HOTEL + FLIGHT,
HOTEL + FLIGHT + CAR, HOTEL + CAR. The active tab SHALL have a navy background
with a bottom triangle indicator.

#### Scenario: Default active tab

- **WHEN** the page loads
- **THEN** "HOTEL ONLY" is the active tab with navy background
- **AND** the other tabs show white background

#### Scenario: Tab selection changes active state

- **WHEN** the user clicks a different travel type tab
- **THEN** that tab becomes active (navy background)
- **AND** the previously active tab returns to white background

### Requirement: Destination input field

The template SHALL display a "GOING TO" destination input field with a location
pin icon and placeholder text "Destination, hotel name".

#### Scenario: Destination input renders

- **WHEN** the page loads
- **THEN** the destination input is visible with placeholder "Destination, hotel name"
- **AND** the label "GOING TO" is displayed above the input

### Requirement: Check-in and check-out date inputs

The template SHALL display two date inputs labeled "CHECK-IN" and "CHECK-OUT"
with calendar icons, arranged side by side.

#### Scenario: Date inputs render

- **WHEN** the page loads
- **THEN** the check-in and check-out date inputs are visible
- **AND** each has a calendar icon to its left

### Requirement: Travelers select dropdown

The template SHALL display a "TRAVELERS" select dropdown with options for
different traveler counts.

#### Scenario: Travelers dropdown renders

- **WHEN** the page loads
- **THEN** the travelers dropdown shows "1 adult" as default
- **AND** the user can select different options

### Requirement: Add a Flight and Add a Car checkboxes

The template SHALL display two checkboxes: "ADD A FLIGHT" (checked by default)
and "ADD A CAR" (unchecked by default).

#### Scenario: Checkboxes render with defaults

- **WHEN** the page loads
- **THEN** "Add a Flight" checkbox is checked
- **AND** "Add a Car" checkbox is unchecked

#### Scenario: Checkboxes toggle

- **WHEN** the user clicks a checkbox
- **THEN** the checkbox toggles state

### Requirement: Search button

The template SHALL display an orange "Search" button that submits the form.

#### Scenario: Search button renders

- **WHEN** the page loads
- **THEN** the "Search" button is visible with orange background

#### Scenario: Form submission

- **WHEN** the user clicks the Search button
- **THEN** the form submits without page navigation

### Requirement: Footer with Component Dock link

The template SHALL display a footer with the Component Dock brand link
(https://www.componentdock.com/) and copyright text.

#### Scenario: Footer renders

- **WHEN** the page loads
- **THEN** the footer shows "Component Dock" as a link to componentdock.com
- **AND** a copyright notice is displayed

### Requirement: Responsive layout

The template SHALL be responsive, stacking form fields vertically on mobile
devices.

#### Scenario: Mobile layout

- **WHEN** the viewport width is below 768px
- **THEN** the date and traveler inputs stack vertically
- **AND** the form padding reduces

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/waypoint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/waypoint/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
