## Purpose

Recreate the ColorLib Myhome real estate landing page as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Homeward".

## Requirements

### Requirement: Header with contact bar and navigation

The template SHALL display a purple top bar with phone, address, and email contact info, social links, and login/register. Below, a navigation bar with the "Homeward" logo, main navigation links, and a green "submit listing" button.

#### Scenario: Header renders contact information

- **WHEN** the page loads
- **THEN** the header displays phone number, address, and email in the top bar
- **AND** the navigation bar shows the "Homeward" logo
- **AND** navigation links for Home, About us, Listings, News, Contact are visible
- **AND** a "submit listing" button is displayed

### Requirement: Hero section with property showcase

The template SHALL display a full-width hero section with a property image background, property address title, and price tag overlay.

#### Scenario: Hero shows featured property

- **WHEN** the page loads
- **THEN** a hero section with a property image is visible
- **AND** the property address "1243 Main Avenue Left Town" is displayed
- **AND** a price tag "$ 482 900" is shown

### Requirement: Search bar for property filtering

The template SHALL display a search section with "Find your home" title, three input fields (property type, rooms, location), and a submit button.

#### Scenario: Search form is functional

- **WHEN** the search section renders
- **THEN** three input fields are visible with appropriate placeholders
- **AND** a "submit listing" button is present

### Requirement: Featured properties grid

The template SHALL display a 3-column grid of property cards, each with an image, tags (house/for sale or rent), price, address, and property specs (sqft, beds, baths, garages).

#### Scenario: Featured properties display correctly

- **WHEN** the featured section renders
- **THEN** three property cards are visible
- **AND** each card shows property tags, price, address, and specs

### Requirement: Map section with location selector

The template SHALL display a 7/5 split section with a map placeholder on the left and a location list with radio buttons on the right.

#### Scenario: Map section shows location options

- **WHEN** the map section renders
- **THEN** a map placeholder is visible
- **AND** location radio buttons for cities are displayed
- **AND** "Choose a location" heading is shown

### Requirement: Hot deal featured property

The template SHALL display a 6/6 split section with a property image on the left and detailed property information (price, title, description, agent info, specs) on the right.

#### Scenario: Hot deal section shows featured property

- **WHEN** the hot deal section renders
- **THEN** a property image is visible
- **AND** price, title, and description are displayed
- **AND** agent information with name is shown
- **AND** property specs (sqft, baths, beds, garages) are listed

### Requirement: Client testimonials section

The template SHALL display a 6/6 split section with a background image on the left and client testimonials with quotes on the right.

#### Scenario: Testimonials display client feedback

- **WHEN** the testimonials section renders
- **THEN** a background image is visible
- **AND** "Clients testimonials" heading is displayed
- **AND** client quotes and author names are shown

### Requirement: Footer with navigation and branding

The template SHALL display a 4-column footer with about section, contact info, useful links, property types, and a copyright bar linking to Component Dock.

#### Scenario: Footer contains required elements

- **WHEN** the footer renders
- **THEN** the "Homeward" logo is displayed
- **AND** social media links are present
- **AND** "Useful Links" and "Property Types" columns are visible
- **AND** the copyright bar links to https://www.componentdock.com/
