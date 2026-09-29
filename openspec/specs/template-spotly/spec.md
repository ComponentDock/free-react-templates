# Spotly — Travel Services Search Form

Recreation of ColorLib Search 16 (https://colorlib.com/wp/template/colorlib-search-16/)

## Purpose

A modern, responsive travel services search form template with a full-page hero and centered search card containing fields for destination, travel dates, and guests. Clean, minimal design with a warm amber color palette.

## Requirements

### Requirement: Search Form Functionality

The search form SHALL display destination input, check-in date, check-out date, guests counter, and search button.

#### Scenario: Default state

- **WHEN** the page loads
- **THEN** the destination input shows placeholder "City, country, or region"
- **AND** the check-in and check-out date inputs are empty
- **AND** the guests field shows "2 Guests"

#### Scenario: Guest increment

- **WHEN** the user clicks the "+" button
- **THEN** the guest count increases by 1

#### Scenario: Guest decrement

- **WHEN** the user clicks the "−" button
- **THEN** the guest count decreases by 1

#### Scenario: Guest minimum

- **WHEN** the guest count is 1 and the user clicks "−"
- **THEN** the guest count remains at 1

#### Scenario: Form submission

- **WHEN** the user submits the form
- **THEN** the page does not reload

### Requirement: Navigation

The navbar SHALL display a logo, navigation links, and a CTA button.

#### Scenario: Navigation links

- **WHEN** the page loads
- **THEN** the navbar shows "Destinations", "Deals", and "About" links
- **AND** a "Book Now" button is visible

### Requirement: Footer

The footer SHALL display copyright text and a Component Dock link.

#### Scenario: Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

#### Scenario: Copyright

- **WHEN** the page loads
- **THEN** the footer shows copyright text including "Spotly"

### Requirement: Document Title

The page SHALL set the document title on mount.

#### Scenario: Title set

- **WHEN** the page loads
- **THEN** the document title is "Spotly — Travel Services Search"
