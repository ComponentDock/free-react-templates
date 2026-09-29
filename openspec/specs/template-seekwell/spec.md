# Template: Seekwell (Travel Search)

## Purpose

Recreation of ColorLib **Search 18** (travel search form with tabbed categories: Hotels, Car, Flight).

- **Source slug:** `colorlib-search-18`
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-search-18/ (404 at time of implementation — falling back to screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-18.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Page shell and background

The Seekwell page SHALL render a full-viewport container with a background photo and center a dark semi-transparent card on top.

#### Scenario: Page loads with correct title

- **WHEN** I visit the Seekwell page
- **THEN** the document title SHALL be "Seekwell — Travel Search"

#### Scenario: Background photo is displayed

- **WHEN** I visit the Seekwell page
- **THEN** the page background SHALL show a placeholder photo from picsum.photos

### Requirement: Tab navigation

The Seekwell page SHALL render three tabs: HOTELS, CAR, FLIGHT. The HOTELS tab SHALL be selected by default.

#### Scenario: Tab buttons render

- **WHEN** I visit the Seekwell page
- **THEN** I SHALL see three tab buttons: HOTELS, CAR, FLIGHT
- **AND** the HOTELS tab SHALL be selected by default

#### Scenario: Switching tabs

- **WHEN** I click the "CAR" tab
- **THEN** the "CAR" tab SHALL be selected
- **AND** the "HOTELS" tab SHALL no longer be selected

### Requirement: Search form fields

The Seekwell search form SHALL contain a Where text input, Check-In and Check-Out date inputs, a Travellers dropdown, and a SEARCH button.

#### Scenario: Where input renders

- **WHEN** I visit the Seekwell page
- **THEN** I SHALL see a "Where:" input with placeholder "City, region or specific hotel"

#### Scenario: Typing in the Where field

- **WHEN** I type "Paris" into the Where field
- **THEN** the Where field SHALL contain "Paris"

#### Scenario: Check-In date input renders

- **WHEN** I visit the Seekwell page
- **THEN** I SHALL see a "Check-In:" date input

#### Scenario: Setting check-in date

- **WHEN** I set the Check-In date to "2026-12-25"
- **THEN** the Check-In field SHALL show "2026-12-25"

#### Scenario: Check-Out date input renders

- **WHEN** I visit the Seekwell page
- **THEN** I SHALL see a "Check-Out:" date input

#### Scenario: Setting check-out date

- **WHEN** I set the Check-Out date to "2026-12-30"
- **THEN** the Check-Out field SHALL show "2026-12-30"

### Requirement: Travellers dropdown

The Travellers dropdown SHALL show "1 Adult, 0 Children, 1 Room" by default and SHALL open a list of options when clicked.

#### Scenario: Default travellers value

- **WHEN** I visit the Seekwell page
- **THEN** I SHALL see a "Travellers:" dropdown showing "1 Adult, 0 Children, 1 Room"

#### Scenario: Opening the dropdown

- **WHEN** I click the Travellers button
- **THEN** a dropdown SHALL appear with 4 options
- **AND** the button SHALL have aria-expanded set to true

#### Scenario: Selecting a traveller option

- **WHEN** I open the dropdown and select "2 Adults, 0 Children, 1 Room"
- **THEN** the dropdown SHALL close
- **AND** the Travellers button SHALL show "2 Adults, 0 Children, 1 Room"

### Requirement: Search button and form submission

The SEARCH button SHALL be visible and SHALL submit the form without page reload.

#### Scenario: Search button renders

- **WHEN** I visit the Seekwell page
- **THEN** I SHALL see a "SEARCH" button

#### Scenario: Form submission

- **WHEN** I click the SEARCH button
- **THEN** the form SHALL submit without page reload

### Requirement: Footer

The footer SHALL display a copyright line and a link to Component Dock.

#### Scenario: Footer renders

- **WHEN** I visit the Seekwell page
- **THEN** I SHALL see "Seekwell. All rights reserved." in the footer
- **AND** I SHALL see a "Component Dock" link pointing to https://www.componentdock.com/
