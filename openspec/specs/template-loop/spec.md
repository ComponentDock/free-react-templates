# template-loop

## Purpose

Loop is a digital agency landing page template recreating the ColorLib "Repeat" design. It features a dark navy + coral palette, Comfortaa display font, service slider, stat counters, and a three-column footer with Component Dock branding.

## Requirements

### Requirement: Navbar renders all navigation links

The navbar SHALL display the "Loop" logo and desktop navigation links (Home, Services, Pricing, About, Contact Us). On mobile it SHALL show a hamburger toggle.

#### Scenario: Desktop nav renders all links

- **GIVEN** the Loop template is loaded on a desktop viewport
- **THEN** the navbar shows "Loop" logo
- **AND** desktop nav has Home, Services, Pricing, About, Contact Us links

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport is mobile
- **WHEN** I click the hamburger button
- **THEN** the mobile menu opens
- **AND** the button shows "Close menu"

### Requirement: Hero section displays headline and CTA

The hero section SHALL display a background image with dark overlay, the heading "We are pretty Awesome", descriptive subtext, and a "Our Services" CTA link.

#### Scenario: Hero renders heading and CTA

- **GIVEN** the Loop template is loaded
- **THEN** the hero shows heading "We are pretty Awesome"
- **AND** a "Our Services" link pointing to #services

### Requirement: About section shows company description

The about section SHALL display "About Us" subheading, a heading, an image, and descriptive text with a coral left border.

#### Scenario: About section renders all content

- **GIVEN** the Loop template is loaded
- **THEN** the about section shows "About Us" subheading
- **AND** a heading "We are here to help grow your business"
- **AND** an image and descriptive paragraphs

### Requirement: Services slider navigates between services

The services section SHALL display a service slider with 4 services (Web Design, Graphic Design, Web/Mobile Application, Brand Identity) and prev/next navigation.

#### Scenario: Services slider shows initial service

- **GIVEN** the services section is visible
- **THEN** "What We Offer" heading is shown
- **AND** the first service "Web Design" is displayed

#### Scenario: Next service navigation

- **WHEN** I click "Next service"
- **THEN** the displayed service changes to "Graphic Design"

#### Scenario: Previous service navigation

- **WHEN** I click "Previous service"
- **THEN** the previous service "Brand Identity" is shown

#### Scenario: Dot indicator navigation

- **WHEN** I click the third dot indicator
- **THEN** "Web/Mobile Application" is displayed

### Requirement: Stats section displays four counters

The stats section SHALL display four stat counters: Projects (230), Happy Clients (229), Leadership (8), Years Experience (15).

#### Scenario: Stats render all counters

- **GIVEN** the stats section is visible
- **THEN** it shows Projects: 230, Happy Clients: 229, Leadership: 8, Years Experience: 15

### Requirement: Media section shows heading and images

The media section SHALL display "Get anything done in one place" heading, description text, a CTA link, and two images.

#### Scenario: Media section renders all content

- **GIVEN** the media section is visible
- **THEN** heading "Get anything done in one place" is shown
- **AND** a "Our Services" link pointing to #contact
- **AND** two images are displayed

### Requirement: Footer contains contact info and Component Dock link

The footer SHALL display Contact info, Sources links, Links + social icons, and a copyright line with a Component Dock link.

#### Scenario: Footer renders all sections

- **GIVEN** the footer is visible
- **THEN** Contact section shows address, phone, email
- **AND** Sources section shows navigation links
- **AND** Links section shows social icons (Instagram, Twitter, Facebook, LinkedIn)
- **AND** copyright includes a link to componentdock.com

### Requirement: App renders all sections

The App component SHALL compose all sections in order: Navbar, Hero, About, Services, Stats, Media, Footer.

#### Scenario: All sections are present

- **GIVEN** the Loop template is loaded
- **THEN** all main sections are rendered in the correct order
