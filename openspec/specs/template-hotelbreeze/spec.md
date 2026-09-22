---
name: hotelbreeze
description: Minimalist luxury hotel landing page with transparent navbar, full-width hero, booking bar, services, rooms, about, testimonials, and contact
template: colorlib-bright-hotel
source: https://preview.colorlib.com/theme/bright-hotel/
---

## Purpose

Recreation of ColorLib Bright Hotel (https://colorlib.com/wp/template/bright-hotel/) — a clean, minimal and sophisticated luxury hotel website template. The new name is "Hotelbreeze".

Preview: https://preview.colorlib.com/theme/bright-hotel/ (UNREACHABLE at prep time — 404). Screenshot analysis used as primary reference.

### Design Tokens

- Font: Poppins (Google Fonts) — light/regular/medium weights for clean, modern feel
- Primary brand color: #e74c3c (red — "CHECK AVAILABILITY" CTA button, accent)
- Secondary: #1a73e8 (blue — links, accents from CSS `--wpex-accent`)
- Body text: #26282b (dark gray, from `--wpex-body-color`)
- White text on hero: #ffffff
- Muted text: #999999, #888888
- Light backgrounds: #f5f5f5, #f8f8f8
- Hero overlay: rgba(0,0,0,0.4) (dark overlay on hero images)
- Button primary (CTA): #e74c3c bg, white text, border-radius: 0 (sharp/rectangular)
- Button secondary (hero): #ffffff bg, #222222 text, border-radius: 0 (sharp/rectangular)
- Navigation: transparent header, white text, logo left, links right
- Booking bar: white card, slightly elevated, overlapping hero bottom
- Section headings: uppercase, letter-spacing, underline accent
- Card border-radius: 0 (clean/rectangular aesthetic)
- Container max-width: 1140px

## Requirements

### Requirement: Transparent navigation bar

The page SHALL render a transparent header with the "Hotelbreeze" logo on the left and navigation links (Home, Rooms, Services, About Us, Blog, Contact) on the right, overlaid on the hero image.

#### Scenario: Navigation links are visible

- **WHEN** the page loads
- **THEN** links for Home, Rooms, Services, About Us, Blog, and Contact are visible

#### Scenario: Logo is present

- **WHEN** the page loads
- **THEN** the "Hotelbreeze" logo text is visible in the top-left

#### Scenario: Active link is highlighted

- **WHEN** the page loads
- **THEN** the "Home" link appears with a bottom underline indicator

### Requirement: Full-width hero section

The page SHALL render a full-width hero section with a background image (restaurant/dining setting), dark overlay, "WELCOME" subtitle with horizontal line, "Simple & Elegant" heading, and "LEARN MORE" CTA button. Left/right slider arrows shall be present.

#### Scenario: Welcome subtitle renders

- **WHEN** the page loads
- **THEN** a "WELCOME" subtitle with a horizontal line is visible in the hero

#### Scenario: Main heading renders

- **WHEN** the page loads
- **THEN** the heading "Simple & Elegant" is visible in white text

#### Scenario: Learn More button is present

- **WHEN** the page loads
- **THEN** a "LEARN MORE" button with white background is visible

#### Scenario: Slider navigation arrows

- **WHEN** the page loads
- **THEN** left and right arrow navigation controls are visible on the right side

### Requirement: Booking availability bar

The page SHALL render a white booking bar overlapping the bottom of the hero, containing Check In date picker, Check Out date picker, Adults dropdown (default 1), Children dropdown (default 1), and a red "CHECK AVAILABILITY" button.

#### Scenario: Check In field renders

- **WHEN** the page loads
- **THEN** a "Check In" date picker field is visible with a calendar icon

#### Scenario: Check Out field renders

- **WHEN** the page loads
- **THEN** a "Check Out" date picker field is visible with a calendar icon

#### Scenario: Adults dropdown renders

- **WHEN** the page loads
- **THEN** an "Adults" dropdown showing "1" is visible

#### Scenario: Children dropdown renders

- **WHEN** the page loads
- **THEN** a "Children" dropdown showing "1" is visible

#### Scenario: Check Availability button renders

- **WHEN** the page loads
- **THEN** a red "CHECK AVAILABILITY" button is visible

### Requirement: Services section

The page SHALL render a "Services" section with a section heading "SERVICES" (uppercase with underline accent) and service cards describing hotel offerings.

#### Scenario: Services heading renders

- **WHEN** the user scrolls to the services section
- **THEN** the heading "SERVICES" is visible with an underline accent

#### Scenario: Service cards render

- **WHEN** the user scrolls to the services section
- **THEN** at least 3 service cards are visible with icons, titles, and descriptions

### Requirement: Rooms section

The page SHALL render a "Rooms" section showcasing available room types with images, names, descriptions, and prices.

#### Scenario: Rooms heading renders

- **WHEN** the user scrolls to the rooms section
- **THEN** the heading "OUR ROOMS" or similar is visible

#### Scenario: Room cards render

- **WHEN** the user scrolls to the rooms section
- **THEN** at least 3 room cards are visible with images, room names, and pricing

### Requirement: About section

The page SHALL render an "About" section with a heading, description text, and supporting imagery or layout.

#### Scenario: About heading renders

- **WHEN** the user scrolls to the about section
- **THEN** an "ABOUT US" or similar heading is visible

### Requirement: Testimonials section

The page SHALL render a testimonials section with guest reviews, names, and ratings.

#### Scenario: Testimonials heading renders

- **WHEN** the user scrolls to the testimonials section
- **THEN** a "TESTIMONIALS" or similar heading is visible

#### Scenario: Testimonial content renders

- **WHEN** the user scrolls to the testimonials section
- **THEN** at least one testimonial with review text and guest name is visible

### Requirement: Contact section

The page SHALL render a contact section with contact information and/or a contact form.

#### Scenario: Contact heading renders

- **WHEN** the user scrolls to the contact section
- **THEN** a "CONTACT US" or similar heading is visible

### Requirement: Footer

The page SHALL render a footer with contact info, quick links, and a link to Component Dock (https://www.componentdock.com/).

#### Scenario: Footer renders

- **WHEN** the page loads
- **THEN** a footer section is visible at the bottom of the page

#### Scenario: Component Dock link in footer

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ is visible in the footer

## Verification checklist

- [ ] All sections from the original template are present (nav, hero, booking, services, rooms, about, testimonials, contact, footer)
- [ ] Section order matches the original
- [ ] Design tokens match: red CTA, white hero button, dark overlay, uppercase headings with underline
- [ ] Transparent navbar over hero image
- [ ] Booking bar overlaps hero bottom
- [ ] Fonts are Poppins (Google Fonts)
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] All interactive elements are accessible (labels, aria-labels)
- [ ] Responsive layout (mobile, tablet, desktop)
