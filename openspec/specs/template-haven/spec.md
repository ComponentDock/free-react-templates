# Haven — Luxury Hotel Landing Template

> Recreation of ColorLib "Sona" (https://colorlib.com/wp/template/sona/)

## Purpose

A luxury hotel landing page with a hero section featuring a booking form,
an about section, a services grid, room cards with pricing, testimonials,
and a footer with contact info and newsletter signup. Built with React 19,
Tailwind CSS 4, and TypeScript.

Design tokens: Lora (serif headings) + Cabin (sans-serif body), warm gold
brand color #dfa974, dark heading text #19191a, muted body text #6b6b6b.

## Requirements

### Requirement: Navbar with navigation and booking CTA

The template SHALL render a sticky navbar with the brand name "Haven",
navigation links for Home, Rooms, About, Services, Testimonials, and
Contact, and a "Booking Now" call-to-action button. On mobile, the navbar
SHALL show a hamburger menu that toggles open/closed.

#### Scenario: Desktop navbar renders all navigation links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the brand name "Haven"
- **AND** navigation links for Home, Rooms, About, Services, Testimonials, Contact are visible
- **AND** a "Booking Now" button is visible

#### Scenario: Mobile menu toggles open and closed

- **WHEN** the user taps the hamburger menu button
- **THEN** the mobile navigation panel appears with all navigation links
- **AND** the button label changes to "Close menu"
- **WHEN** the user taps "Close menu"
- **THEN** the mobile navigation panel disappears

### Requirement: Hero section with booking form

The template SHALL render a hero section with a headline "Haven A Luxury Hotel",
a description paragraph, a "Discover Now" CTA link, and a booking form with
Check In, Check Out date inputs, Guests select, Room select, and a "Check
Availability" submit button.

#### Scenario: Hero displays headline and booking form

- **WHEN** the hero section renders
- **THEN** a heading with text "Haven A Luxury Hotel" is visible
- **AND** a "Discover Now" link is visible
- **AND** a booking form with Check In, Check Out, Guests, Room fields is visible
- **AND** a "Check Availability" button is visible

### Requirement: About section with hotel description

The template SHALL render an About section with a "About Us" label, a heading
about the hotel, two paragraphs of description, a "Read More" link, and two
placeholder images.

#### Scenario: About section renders all content

- **WHEN** the About section renders
- **THEN** a "About Us" label is visible
- **AND** a heading containing "Intercontinental" is visible
- **AND** a "Read More" link is visible
- **AND** two images from picsum.photos are visible

### Requirement: Services section with 6 service cards

The template SHALL render a Services section with a "What We Do" label,
a "Discover Our Services" heading, and 6 service cards (Travel Plan,
Catering Service, Babysitting, Laundry, Hire Driver, Bar & Drink), each
with an icon, title, and description.

#### Scenario: All six services are displayed

- **WHEN** the Services section renders
- **THEN** headings for Travel Plan, Catering Service, Babysitting, Laundry, Hire Driver, Bar & Drink are visible
- **AND** 6 description paragraphs are visible

### Requirement: Room cards with pricing

The template SHALL render 4 room cards (Double Room $199, Premium King Room
$159, Deluxe Room $198, Family Room $299), each with an image, room name,
price, specs table, and a "More Details" link.

#### Scenario: All four rooms render with correct prices

- **WHEN** the Rooms section renders
- **THEN** headings for Double Room, Premium King Room, Deluxe Room, Family Room are visible
- **AND** prices $199, $159, $198, $299 are visible
- **AND** 4 "More Details" links are visible

### Requirement: Testimonials section

The template SHALL render a Testimonials section with a "Testimonials" label,
a "What Customers Say?" heading, a customer quote, 5 star icons, and an
author name.

#### Scenario: Testimonial displays quote and author

- **WHEN** the Testimonials section renders
- **THEN** a "What Customers Say?" heading is visible
- **AND** a testimonial quote is visible
- **AND** 5 star rating icons are visible
- **AND** the author name "Alexander Vasquez" is visible

### Requirement: Footer with contact, newsletter, and Component Dock link

The template SHALL render a footer with the brand name, a description,
social links (Facebook, Twitter, Instagram, YouTube), contact information
(phone, email, address), a newsletter signup form, copyright with the
current year, and a link to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Footer renders all required content

- **WHEN** the Footer renders
- **THEN** the brand name "Haven" is visible
- **AND** social links for Facebook, Twitter, Instagram, YouTube are visible
- **AND** contact information (phone, email, address) is visible
- **AND** a newsletter form with email input and Subscribe button is visible
- **AND** a "Component Dock" link pointing to https://www.componentdock.com/ is visible
- **AND** the current year is displayed in the copyright
