# Stayquest — Hotel Search Form Template

Recreation of ColorLib "Colorlib Search 2" (https://colorlib.com/wp/template/colorlib-search-2/).

## Purpose

A full-screen hotel search form hero template with a background image, dark overlay, centered heading, and a multi-field search bar (location, dates, guests) with a branded search button.

## Requirements

### Requirement: Hero section with background image

The template SHALL display a full-viewport hero section with a background image and a semi-transparent dark overlay.

#### Scenario: Hero renders on page load

- **WHEN** the page loads
- **THEN** a full-screen hero section is visible
- **AND** a background image is displayed covering the full viewport

### Requirement: Search heading

The template SHALL display a prominent heading "Search Hotel" in the hero section.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** a heading with text "Search Hotel" is displayed
- **AND** the heading is white and centered

### Requirement: Search form bar with fields

The template SHALL provide a search form bar containing a location text input, check-in date input, check-out date input, guest count dropdown, and a search button.

#### Scenario: Search form renders all fields

- **WHEN** the page loads
- **THEN** a text input with placeholder "What are you looking for?" is present
- **AND** a check-in date input is present
- **AND** a check-out date input is present
- **AND** a guest count dropdown is present with options 1-4 adults

#### Scenario: User can type in search input

- **WHEN** the user types "Beach Resort" in the search input
- **THEN** the input value updates to "Beach Resort"

#### Scenario: User can change guest count

- **WHEN** the user selects "3" from the guest dropdown
- **THEN** the dropdown value updates to "3"

#### Scenario: User can set dates

- **WHEN** the user enters a check-in date
- **THEN** the date value updates
- **WHEN** the user enters a check-out date
- **THEN** the date value updates

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
