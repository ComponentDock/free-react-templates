# Template: Portlight (Hotel Reservation)

## Purpose

Recreation of ColorLib "Harbor Lights" hotel reservation template.

- Source slug: `harbor-lights`
- Source URL: https://colorlib.com/wp/template/harbor-lights/
- Preview URL: https://preview.colorlib.com/theme/harborlights/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- Category: Hotel / Resort / Reservation

## Requirements

### Requirement: Navbar displays brand and navigation links

The navbar SHALL display the brand name "Portlight" and navigation links: Home, Our Rooms, Restaurant, About Us, Contact.

#### Scenario: Navbar renders on desktop

- **WHEN** the page loads
- **THEN** the navbar shows "Portlight" brand text
- **AND** all five navigation links are visible with correct hrefs (#home, #rooms, #restaurant, #about, #contact)

#### Scenario: Navbar toggles mobile menu

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** clicking a link closes the menu

#### Scenario: Navbar scrolls to solid background

- **WHEN** the user scrolls past 50px
- **THEN** the navbar background changes from transparent to solid dark

### Requirement: Hero section displays hotel message with carousel

The hero SHALL display a full-width image slider with hotel heading text and carousel navigation dots.

#### Scenario: Hero renders heading

- **WHEN** the page loads
- **THEN** the heading "Hotel for the whole family, all year round." is visible
- **AND** the subtitle "More than a hotel... an experience" is visible

#### Scenario: Hero carousel switches slides

- **WHEN** the user clicks carousel dot 2
- **THEN** the heading changes to "Your perfect getaway awaits you here."

### Requirement: Booking bar provides reservation form

The booking bar SHALL display check-in date, check-out date, room type, and guest count fields with a "Check Availability" button.

#### Scenario: Booking bar renders form fields

- **WHEN** the page loads
- **THEN** check-in date, check-out date, room, and guests fields are visible
- **AND** the room dropdown has options: Suite, Deluxe, Superior, King Room
- **AND** the guests dropdown has options: 1 Adult, 2 Adults, Family

#### Scenario: Booking bar allows room selection

- **WHEN** the user selects "Deluxe" from the room dropdown
- **THEN** the room field shows "Deluxe"

### Requirement: About section describes the hotel

The about section SHALL display hotel description with an image and "Reserve Your Room Now" CTA.

#### Scenario: About renders hotel info

- **WHEN** the page loads
- **THEN** the heading "Harbor Lights Hotel & Resort" is visible
- **AND** the subheading "It feels like staying in your own home." is visible
- **AND** a "Reserve Your Room Now" link points to #rooms

### Requirement: Services section shows hotel amenities

The services section SHALL display 5 service cards: Friendly Service, Get Breakfast, Transfer Services, Suites & Spa, Cozy Rooms.

#### Scenario: Services renders all cards

- **WHEN** the page loads
- **THEN** all 5 service headings are visible with descriptions

### Requirement: Testimonials carousel shows customer reviews

The testimonials section SHALL display a carousel of customer quotes with navigation.

#### Scenario: Testimonials renders first review

- **WHEN** the page loads
- **THEN** the first testimonial by "Gerald Hodson" is shown

#### Scenario: Testimonials navigates forward

- **WHEN** the user clicks the next button
- **THEN** the testimonial changes to "Karen Spencer"

#### Scenario: Testimonials wraps from last to first

- **WHEN** on the last testimonial and the user clicks next
- **THEN** it wraps back to the first testimonial

#### Scenario: Testimonials wraps from first to last

- **WHEN** on the first testimonial and the user clicks previous
- **THEN** it wraps to the last testimonial

### Requirement: Rooms section displays room cards with pricing

The rooms section SHALL display 4 room cards (King Room, Suite, Deluxe, Superior) with prices.

#### Scenario: Rooms renders all cards

- **WHEN** the page loads
- **THEN** all 4 room names and prices ($120.00, $200.00, $160.00, $140.00) are visible

### Requirement: Restaurant section shows menu items

The restaurant section SHALL display menu items with names, prices, and a "View All Menu" link.

#### Scenario: Restaurant renders menu

- **WHEN** the page loads
- **THEN** menu items "Grilled Crab with Onion" ($20.00), "Lobster Thermidor" ($35.00), "Grilled Salmon" ($25.00), "Wagyu Steak" ($45.00) are visible
- **AND** a "View All Menu" link is present

### Requirement: Blog section shows recent posts

The blog section SHALL display 3 blog post cards with dates and titles.

#### Scenario: Blog renders posts

- **WHEN** the page loads
- **THEN** 3 articles are visible with dates and titles

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock" and display contact information.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** a "Component Dock" link points to https://www.componentdock.com/

#### Scenario: Footer renders contact info

- **WHEN** the page loads
- **THEN** address, phone (+2 392 3929 210), and email (info@yourdomain.com) are visible
