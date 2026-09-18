---
name: Seaview
description: >
  Recreates the ColorLib "Marimar" hotel template
  (https://colorlib.com/wp/template/marimar/) as a React 19 + Vite + Tailwind
  CSS 4 + TypeScript single-page hotel landing with parallax hero, booking form,
  room showcases, discover carousel, testimonials, and a branded footer.
---

## Purpose

Build a production-ready React recreation of the ColorLib Marimar hotel landing
template under the new name "Seaview". The original template is a luxury hotel
landing page with a parallax hero, booking form, room showcases, discover
carousel, testimonials, and a branded footer. The recreation preserves the
section structure, design tokens, and visual language while using original code,
placeholder images, and the Component Dock brand.

## Requirements

### Requirement: Navbar renders with navigation and CTA

The template SHALL display a fixed top navigation bar with the "Seaview" logo,
horizontal navigation links (Home, About, Rooms, News, Contact), and a
"Book Now" CTA button. A hamburger menu toggle SHALL appear on mobile devices.

#### Scenario: Desktop navbar shows all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the "Seaview" logo, all five navigation links, and the "Book Now" button are visible

#### Scenario: Mobile hamburger toggles menu overlay

- **WHEN** the user taps the hamburger button on mobile
- **THEN** a full-screen mobile menu overlay appears with the same navigation links

### Requirement: Hero section displays with parallax background

The template SHALL display a full-viewport hero section with a background image,
dark overlay, centered heading "Book Your Stay", subtitle text, and a "Book Now"
CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the "Book Your Stay" heading, subtitle paragraph, and "Book Now" button are visible

### Requirement: Booking form captures guest details

The template SHALL display a horizontal booking form with check-in date input,
check-out date input, adults dropdown (1-5), children dropdown (0-5), and a
"Book Now" submit button.

#### Scenario: Booking form shows all input fields

- **WHEN** the page loads
- **THEN** the check-in input, check-out input, adults select, children select, and submit button are visible

### Requirement: Intro section shows welcome and gallery

The template SHALL display a welcome section with a subtitle "Welcome", heading
"Amazing Hotel in front of the Sea", description paragraph, and a 4-column
image gallery with hover overlay "+ See More" on each image.

#### Scenario: Intro section renders heading and gallery

- **WHEN** the page loads
- **THEN** the "Welcome" subtitle, main heading, description, and 4 gallery images are visible

### Requirement: Rooms showcase displays two room options

The template SHALL display two alternating room showcase blocks. Each block
contains an image, section title, description, feature checklist with check
icons, price per night, and a "Book Now" button. The first block has image
left / content right; the second flips.

#### Scenario: Both rooms render with prices and features

- **WHEN** the page loads
- **THEN** "Luxury Double Suite" at $129/Night and "Luxury Single Room" at $89/Night are displayed with feature checklists

### Requirement: Discover section shows services

The template SHALL display a "Discover Seaview Hotel" section with a heading,
highlight paragraph, "Discover" button, and a 3-card grid of service images
(Weddings, Parties, Relax) with dark overlays and category headings.

#### Scenario: Discover section renders service cards

- **WHEN** the page loads
- **THEN** the "Discover Seaview Hotel" heading and three service cards (Weddings, Parties, Relax) are visible

### Requirement: Testimonials section displays client reviews

The template SHALL display a "Testimonials" section with a heading and 3
testimonial cards, each containing a quote, author image, author name, and
"Client" role label.

#### Scenario: Testimonials render with author info

- **WHEN** the page loads
- **THEN** the "Testimonials" heading and 3 testimonial cards with author names are visible

### Requirement: Footer shows contact info and Component Dock branding

The template SHALL display a footer with the "Seaview" logo, 3-column contact
info (Phone, Address, Email), a "More templates at Component Dock" link to
https://www.componentdock.com/, and a copyright line.

#### Scenario: Footer renders contact info and branded link

- **WHEN** the page loads
- **THEN** the Phone, Address, and Email contact details, the Component Dock link, and copyright text are visible
