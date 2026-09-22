# Template: Sovereign (Hotel Booking Landing)

## Purpose

Recreation of ColorLib's **The Palatin** — a modern hotel booking website template.

- **Source slug:** `the-palatin`
- **ColorLib URL:** https://colorlib.com/wp/template/the-palatin/
- **Preview URL:** https://preview.colorlib.com/theme/the-palatin/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Hospitality / Hotel Booking

## Requirements

### Requirement: Navbar navigation

The template SHALL display a fixed navigation bar with logo, links, and a Book Now CTA button.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads
- **THEN** the navbar displays the brand name "Sovereign" and navigation links for Home, About, Rooms, Amenities, Gallery, Contact, and Book Now

#### Scenario: Navbar becomes solid on scroll

- **WHEN** the user scrolls past 50 pixels
- **THEN** the navbar background changes from transparent to solid dark

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu button
- **THEN** the mobile navigation menu opens with all links visible

#### Scenario: Mobile menu closes on link click

- **WHEN** the user clicks a link in the mobile menu
- **THEN** the mobile menu closes

### Requirement: Hero section with booking form

The template SHALL display a full-width hero section with a background image, heading, and booking form.

#### Scenario: Hero displays heading and subheading

- **WHEN** the page loads
- **THEN** the hero section shows "Welcome to Sovereign Hotel" heading and descriptive subheading

#### Scenario: Booking form fields are present

- **WHEN** the hero section renders
- **THEN** a booking form row is visible with Check In, Check Out, Room Type, Guests inputs and a Check Availability button

#### Scenario: Form submission is prevented

- **WHEN** the user clicks Check Availability
- **THEN** the form submission is prevented (no page reload)

### Requirement: About section

The template SHALL display a two-column about section with heading, paragraph, and image.

#### Scenario: About section content

- **WHEN** the about section renders
- **THEN** it displays "About Our Hotel" heading, descriptive paragraph, and hotel lobby image

### Requirement: Rooms section

The template SHALL display a grid of room cards with images, names, descriptions, prices, and book buttons.

#### Scenario: All room cards render

- **WHEN** the rooms section renders
- **THEN** 4 room cards are displayed: Standard Room, Deluxe Room, Executive Suite, and Presidential Suite

#### Scenario: Room prices are displayed

- **WHEN** the rooms section renders
- **THEN** each room card shows its price per night

### Requirement: Amenities section

The template SHALL display a grid of amenity items with icons and descriptions on a dark background.

#### Scenario: All amenity items render

- **WHEN** the amenities section renders
- **THEN** 6 amenity items are displayed: Swimming Pool, Spa & Wellness, Restaurant, Fitness Center, Free Wi-Fi, Airport Transfer

### Requirement: Gallery section

The template SHALL display a responsive grid of hotel photos with hover overlay effects.

#### Scenario: Gallery images render

- **WHEN** the gallery section renders
- **THEN** 8 images are displayed in a grid layout with alt text

### Requirement: Testimonials section

The template SHALL display guest reviews with avatars, star ratings, names, roles, and quotes.

#### Scenario: All testimonials render

- **WHEN** the testimonials section renders
- **THEN** 3 guest reviews are displayed with 5-star ratings each

### Requirement: Booking CTA section

The template SHALL display a full-width call-to-action section with background image, heading, and booking button.

#### Scenario: Booking CTA content

- **WHEN** the booking CTA section renders
- **THEN** it displays "Book Your Stay Today" heading, descriptive text, and a Book Now button

### Requirement: Footer

The template SHALL display a multi-column footer with about text, quick links, contact info, social icons, and copyright.

#### Scenario: Footer columns render

- **WHEN** the footer renders
- **THEN** it displays About Sovereign text, Quick Links, and Contact Info columns

#### Scenario: Component Dock link is present

- **WHEN** the footer renders
- **THEN** a "More templates at Component Dock" link points to https://www.componentdock.com/

#### Scenario: Social icons render

- **WHEN** the footer renders
- **THEN** Facebook, Twitter, Instagram, and Pinterest social icons are displayed

### Requirement: Accessibility

All interactive elements SHALL have appropriate aria-labels and all images SHALL have alt text.

#### Scenario: Navigation accessibility

- **WHEN** the navbar renders
- **THEN** it has an aria-label "Main navigation" and the mobile toggle has aria-label and aria-expanded

#### Scenario: Image alt text

- **WHEN** any image renders
- **THEN** it has a descriptive alt attribute
