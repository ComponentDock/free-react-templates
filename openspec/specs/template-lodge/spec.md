# Template: Lodge (Hotel Landing)

## Purpose

Lodge is a single-page hotel landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Hotel"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a luxury hotel template with a hero slider, room availability
with booking form, facilities showcase, guestbook testimonials, Instagram
gallery, and a multi-column footer. Lodge recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Requirements

### Requirement: Page renders all sections

The Lodge page SHALL render a navbar, hero section, room availability section,
quote section, facilities section, guestbook section, Instagram gallery, and
footer with Component Dock link.

#### Scenario: All sections are visible

- **GIVEN** a user visits the Lodge page
- **THEN** they see a navbar with logo and navigation links
- **AND** they see a hero section with welcome text
- **AND** they see a room availability section with booking form
- **AND** they see a facilities section
- **AND** they see a guestbook/testimonials section
- **AND** they see an Instagram gallery section
- **AND** they see a footer with Component Dock link

### Requirement: Navbar navigation

The navbar SHALL provide navigation links that scroll to the corresponding
sections, with a dropdown for Facilities and a mobile-responsive menu.

#### Scenario: Desktop navigation

- **GIVEN** the navbar is visible on desktop
- **THEN** nav links are rendered (Home, About, Rooms, Facilities, News, Contact)
- **AND** the Facilities link has a dropdown with room types

#### Scenario: Mobile menu toggle

- **GIVEN** the navbar is visible on mobile
- **WHEN** the user taps the hamburger menu
- **THEN** the mobile menu opens
- **AND** tapping a link closes the menu

### Requirement: Room availability form

The room availability section SHALL display a room showcase with amenities and
a booking form with date pickers, guest counters, room type selector, and
a CHECK Availability button.

#### Scenario: Form displays room details

- **GIVEN** the room availability section is visible
- **THEN** the room name, price, and amenity icons are displayed

#### Scenario: User fills in booking form

- **WHEN** the user fills in check-in and check-out dates
- **AND** the user adjusts adults, children, and rooms counters
- **AND** the user selects a room type
- **AND** clicks the CHECK Availability button
- **THEN** the form accepts the input without errors

### Requirement: Facilities section displays correctly

The facilities section SHALL display facility cards with title, description,
and CTA button in an alternating image-text layout.

#### Scenario: Facility cards render

- **GIVEN** the facilities section is visible
- **THEN** facility cards show title, description, and CTA button
- **AND** images use seeded placeholder photos

### Requirement: Guestbook testimonials

The guestbook section SHALL display tabbed testimonials with star ratings,
dates, author photos, and quotes.

#### Scenario: Testimonial tabs

- **WHEN** the user clicks a testimonial tab dot
- **THEN** the corresponding testimonial is displayed
- **AND** star ratings are shown (gold for filled, gray for empty)

### Requirement: Instagram gallery

The Instagram section SHALL display a 4-column photo grid linking to Instagram.

#### Scenario: Photo grid renders

- **GIVEN** the Instagram section is visible
- **THEN** 4 room photos are displayed in a grid

### Requirement: Footer contains Component Dock link

The footer SHALL contain a link to https://www.componentdock.com/ branded as
"Component Dock", plus quick links, newsletter, and copyright.

#### Scenario: Component Dock link present

- **GIVEN** the footer is visible
- **THEN** it contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"
