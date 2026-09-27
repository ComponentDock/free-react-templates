# Tidestone — Luxury Hotel / Residence Template

Recreation of ColorLib Seapalace (https://colorlib.com/wp/template/seapalace/)

## Purpose

Provide a free, production-ready React recreation of the Seapalace luxury hotel
template. The template showcases a high-end hotel/residence website with a hero
banner, booking form, room explorer, special facilities, testimonials, news,
and a dark footer with Component Dock branding.

## Requirements

### Requirement: Page loads with all sections

The page SHALL render all sections in the correct order: Navbar, Hero, BookingForm, Welcome, ExploreRooms, VideoSection, SpecialFacilities, Testimonials, NewsEvents, Footer.

#### Scenario: All sections are visible

- **WHEN** the page loads
- **THEN** the navbar is visible with "Tidestone" brand
- **AND** the hero section shows "Luxury is Personal"
- **AND** the booking form is visible
- **AND** the welcome section is visible
- **AND** the explore rooms section shows 3 room cards
- **AND** the video section is visible
- **AND** the special facilities section shows 3 feature cards
- **AND** the testimonials section is visible
- **AND** the news section shows 3 blog cards
- **AND** the footer contains a link to componentdock.com

### Requirement: Navigation links are present

The navbar SHALL display navigation links for Home, About, Properties, Gallery, Blog, Contact.

#### Scenario: Navigation links are rendered

- **WHEN** the page loads
- **THEN** the navbar contains links for Home, About, Properties, Gallery, Blog, Contact

### Requirement: Booking form has required fields

The booking form SHALL include a keywords input, selects for arrival/rooms/departure/adult/child, and a Check Availability button.

#### Scenario: Booking form fields are present

- **WHEN** the page loads
- **THEN** the booking form contains a keywords input
- **AND** the form contains selects for Arrival, Number of rooms, Departure, Adult, Child
- **AND** the form contains a "Check Availability" button

### Requirement: Room cards display pricing

The explore rooms section SHALL display 3 room cards with names and pricing.

#### Scenario: Room cards show correct data

- **WHEN** the page loads
- **THEN** "Classic Bed Room" is shown with price "$150.00"
- **AND** "Premium Room" is shown with price "$170.00"
- **AND** "Family Room" is shown with price "$190.00"

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer has Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text mentions "Component Dock"

### Requirement: Design tokens match the original

The template SHALL use the gold/amber brand color (#cca772), Playfair Display for headings, and Roboto for body text, matching the original ColorLib Seapalace design.

#### Scenario: Brand color is applied

- **WHEN** the page renders
- **THEN** the brand color #cca772 is used for CTAs and accent elements

### Requirement: Mobile navigation toggle

The navbar SHALL support a mobile toggle button that shows/hides the mobile menu.

#### Scenario: Mobile menu toggles

- **WHEN** the mobile toggle button is clicked
- **THEN** the mobile navigation menu becomes visible
- **AND** clicking a nav link closes the menu
