---
name: astra
description: Branding agency landing page — recreation of ColorLib Stellar
source: https://colorlib.com/wp/template/stellar/
preview: https://preview.colorlib.com/theme/stellar/
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
---

## Purpose

Recreation of ColorLib Stellar (https://colorlib.com/wp/template/stellar/) as "Astra" — a creative branding agency landing page with hero, about, services, portfolio, testimonials, clients, stats, contact, and footer sections.

## Requirements

### Requirement: Navbar with navigation and mobile menu

The template SHALL display a sticky navigation bar with logo "Astra" and links to Home, About, Services, Works, and Contact sections. The navbar SHALL toggle a mobile menu on hamburger click.

#### Scenario: Desktop navigation links

- **WHEN** the page loads
- **THEN** the navbar displays links for Home, About, Services, Works, and Contact

#### Scenario: Mobile menu toggle

- **WHEN** user clicks the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** clicking the close button closes it

### Requirement: Hero section with parallax background

The template SHALL display a full-viewport hero section with a dark overlay, headline text, CTA button, play video link, scroll link, and social sidebar.

#### Scenario: Hero content

- **WHEN** the hero section is visible
- **THEN** the headline reads "We provide creative solutions to turn your ideas into digital reality"
- **AND** a "More About Us" button links to #about
- **AND** social icons for Facebook, Twitter, Instagram, Behance, and Dribbble are displayed

### Requirement: About section with process grid

The template SHALL display an "About" section with subhead "01 Who We Are", heading, description, and a 2x2 grid of process cards (Planning, Branding, Implementation, Documentation).

#### Scenario: About content

- **WHEN** the About section is visible
- **THEN** the subhead shows "01 Who We Are"
- **AND** four process cards are displayed

### Requirement: Services section with dark background

The template SHALL display a "Services" section with dark background, subhead "02 What We Do", heading, and 6 service cards in a 3x2 grid.

#### Scenario: Services grid

- **WHEN** the Services section is visible
- **THEN** six service cards are displayed (Brand Identity, Illustration, Web Design, Product Strategy, UI/UX Design, Mobile Design)

### Requirement: Works section with portfolio and testimonials

The template SHALL display a "Works" section with light background, subhead "03 Recent Works", 8 portfolio items in a 4x2 grid, and a testimonials subsection with 3 testimonials.

#### Scenario: Portfolio grid

- **WHEN** the Works section is visible
- **THEN** eight portfolio items are displayed with images, titles, and categories

#### Scenario: Testimonials

- **WHEN** the Works section is visible
- **THEN** three testimonials are displayed with quotes, author names, and positions

### Requirement: Clients section with logo grid

The template SHALL display a "Clients" section with dark background, subhead "04 Selected Clients", heading, and 8 client logo placeholders in a 4x2 grid.

#### Scenario: Client logos

- **WHEN** the Clients section is visible
- **THEN** eight client placeholders are displayed

### Requirement: Stats section with counter values

The template SHALL display a stats row with 4 counter items: 213 Projects Completed, 179 Happy Clients, 35 Awards Received, 2319 Cups of Coffee.

#### Scenario: Stats display

- **WHEN** the Stats section is visible
- **THEN** four stat items are displayed with labels and numeric values

### Requirement: Contact section with form and info

The template SHALL display a "Contact" section with dark background, subhead "05 Get In Touch", address, social links, contact info, CTA button, and subscribe form.

#### Scenario: Contact form

- **WHEN** user enters a valid email and clicks Subscribe
- **THEN** a "Thanks for subscribing!" message is shown

#### Scenario: Empty email submission

- **WHEN** user submits the form with empty email
- **THEN** the form does not show the thanks message

### Requirement: Footer with Component Dock link

The template SHALL display a footer with copyright text and a link to https://www.componentdock.com/.

#### Scenario: Footer link

- **WHEN** the footer is visible
- **THEN** a link to https://www.componentdock.com/ is displayed with "Component Dock" text
