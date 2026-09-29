# Flightly — Flight Search Form Template

Recreation of ColorLib "Colorlib Search 20" (https://colorlib.com/wp/template/colorlib-search-20/).

## Purpose

A full-screen flight search form hero template with a background image, dark overlay, centered heading, and a white card containing a multi-field search form (from, to, dates, passengers) with a branded search button.

## Requirements

### Requirement: Hero section with background image

The template SHALL display a full-viewport hero section with a background image and a semi-transparent dark overlay.

#### Scenario: Hero renders on page load

- **WHEN** the page loads
- **THEN** a full-screen hero section is visible
- **AND** a background image is displayed covering the full viewport

### Requirement: Search heading

The template SHALL display a prominent heading "Search Flights" in the hero section.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** a heading with text "Search Flights" is displayed
- **AND** the heading is white and centered

### Requirement: Search form card

The template SHALL provide a white card with rounded corners containing the flight search form.

#### Scenario: Card renders with correct styling

- **WHEN** the page loads
- **THEN** a white card is visible with border-radius of 10px
- **AND** the card is centered on the page

### Requirement: Flight search form fields

The template SHALL provide a search form containing From text input, To text input, Depart date input, Return date input, Passengers dropdown, and a Search button.

#### Scenario: Search form renders all fields

- **WHEN** the page loads
- **THEN** a text input with placeholder "City, Region or Airport" is present for From
- **AND** a text input with placeholder "City, Region or Airport" is present for To
- **AND** a Depart date input is present
- **AND** a Return date input is present
- **AND** a Passengers control is present

#### Scenario: User can type in From input

- **WHEN** the user types "New York" in the From input
- **THEN** the input value updates to "New York"

#### Scenario: User can type in To input

- **WHEN** the user types "London" in the To input
- **THEN** the input value updates to "London"

#### Scenario: User can set departure date

- **WHEN** the user enters a departure date
- **THEN** the date value updates

#### Scenario: User can set return date

- **WHEN** the user enters a return date
- **THEN** the date value updates

#### Scenario: Passengers controls

- **WHEN** the page loads
- **THEN** the passengers section shows "1 Adult, 0 Children"
- **WHEN** the user clicks the plus button for adults
- **THEN** the adult count increases to 2
- **WHEN** the user clicks the minus button for adults
- **THEN** the adult count decreases back to 1

#### Scenario: Form submission is handled

- **WHEN** the user clicks the Search button
- **THEN** the form submission is prevented (no page reload)

### Requirement: Footer with Component Dock link

The template SHALL display a footer with a link to componentdock.com branded as "Component Dock".

#### Scenario: Footer renders with link

- **WHEN** the page loads
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"
