# Template: Voyager (Travel Agency)

## Purpose

Voyager is a full-page travel agency website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Tour" travel
agency design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a multi-section travel agency landing page with a hero
slider, tabbed reservation search, service cards, destination cards, blog
entries, a promotional sale section, hotel recommendations, testimonials,
a country listing, newsletter signup, and a footer with brand and contact
information. Voyager follows the same section structure and adds the repo's
standard accessible patterns.

Voyager lives in `apps/voyager` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name "Voyager" and navigation links: Home, Tours (with dropdown: Destination, Cruises, Hotels, Booking), Hotels, Services, Blog, About, Contact.

#### Scenario: Navbar content

- **GIVEN** the Voyager page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Voyager" and all navigation links

#### Scenario: Tours dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the user hovers over the "Tours" link
- **THEN** a dropdown SHALL appear with Destination, Cruises, Hotels, and Booking links

#### Scenario: Mobile menu toggle

- **GIVEN** the navbar is rendered on a mobile viewport
- **WHEN** the user clicks the hamburger toggle button
- **THEN** the mobile navigation menu SHALL appear with all navigation links

### Requirement: Hero slider

The system SHALL render a full-width hero section with background images and centered text overlays.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL display a subtitle and heading text
- **AND** the hero SHALL have a dark overlay on the background image

### Requirement: Reservation search

The system SHALL render a tabbed reservation search form with Flight, Hotel, Car Rent, and Cruises tabs.

#### Scenario: Flight tab

- **GIVEN** the reservation section is rendered
- **WHEN** the Flight tab is active
- **THEN** the form SHALL show fields for Where, Check-in, Check-out, Guest, and a "Find Flights" button

#### Scenario: Hotel tab

- **GIVEN** the reservation section is rendered
- **WHEN** the user clicks the Hotel tab
- **THEN** the form SHALL show a "Book Now" label, Check-in, Check-out, Guest fields, and a "Find Hotel" button

#### Scenario: Car Rent tab

- **GIVEN** the reservation section is rendered
- **WHEN** the user clicks the Car Rent tab
- **THEN** the form SHALL show Where, Start Date, Return Date fields, and a "Find Car" button

#### Scenario: Cruises tab

- **GIVEN** the reservation section is rendered
- **WHEN** the user clicks the Cruises tab
- **THEN** the form SHALL show Where, Start Date, Categories fields, and a "Find Cruises" button

### Requirement: Services section

The system SHALL render a 4-column services section with icons and descriptions.

#### Scenario: Services content

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL display four service cards: Amazing Travel, Our Cruises, Book Your Trip, Nice Support
- **AND** each card SHALL have an icon, title, and description text

### Requirement: Popular destinations

The system SHALL render a grid of popular destination cards with images, star ratings, titles, cities, and prices.

#### Scenario: Destinations content

- **GIVEN** the popular destinations section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL display six destination cards with star ratings and prices

### Requirement: Recent blog

The system SHALL render a blog section with a featured image and three blog entries.

#### Scenario: Blog content

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL display a featured image and three blog entries with date, title, and category

### Requirement: Promotional sale

The system SHALL render a parallax promotional section with a discount offer and video placeholder.

#### Scenario: Sale content

- **GIVEN** the promo section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL display a percentage discount, "Book Now" and "Read more" buttons
- **AND** a video placeholder with a play button

### Requirement: Recommended hotels

The system SHALL render a grid of recommended hotel cards with images, prices, star ratings, names, locations, and descriptions.

#### Scenario: Hotels content

- **GIVEN** the recommended hotels section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL display four hotel cards with price badges and star ratings

### Requirement: Testimonials

The system SHALL render a testimonials section with guest quotes, avatars, names, and locations.

#### Scenario: Testimonials content

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL display three testimonials with avatar, name, location, and quoted text

### Requirement: Popular countries

The system SHALL render a split layout section with tour images and a country description with city links.

#### Scenario: Countries content

- **GIVEN** the popular countries section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL display four tour images with titles and prices
- **AND** a country description with a list of city links and a "View All Places" button

### Requirement: Newsletter signup

The system SHALL render a newsletter section with an email input and subscribe button.

#### Scenario: Newsletter content

- **GIVEN** the newsletter section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL display a heading, email input, and subscribe button

#### Scenario: Newsletter form submission

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits the form
- **THEN** the form submission SHALL be prevented (no page navigation)

### Requirement: Footer

The system SHALL render a footer with brand information, navigation links, contact details, and a link to Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL display brand name "Voyager", Book Now links, Top Deals links, Blog Post links, and Contact Information
- **AND** the footer SHALL link to https://www.componentdock.com/ branded as "Component Dock"

#### Scenario: No ColorLib attribution

- **GIVEN** the footer is rendered
- **WHEN** the user inspects the footer
- **THEN** the footer SHALL NOT contain any references to ColorLib
