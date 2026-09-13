## Purpose

Recreate the ColorLib "Plumber" plumbing services landing template as a React +
Tailwind CSS 4 + TypeScript single-page app under the name "Pipeflow". The
template serves as a plumber/service-company landing page with a hero,
services, features, counters, testimonials, video section, contact form,
and footer.

## Design Tokens (extracted from preview)

- **Font family:** Poppins (Google Fonts), weights 300–700
- **Brand color:** #f53f51 (vivid red/pink) — used for CTAs, accents, counters
- **Dark background:** #04091e (deep navy) — hero overlay, CTA section, footer
- **Light background:** #f9f9ff (off-white/lavender) — features, testimonials, inputs
- **Text colors:** #222 (headings), #777 (body)
- **Button shape:** pill/radius 50px, solid brand color, transparent on hover with white border
- **Section spacing:** 120px vertical padding (.section-gap)

## Requirements

### Requirement: Navbar with logo and navigation links

The template SHALL render a navigation bar with the logo "Pipeflow", and
navigation links (Home, Services, Features, Testimonials, Contact). The
navbar SHALL be sticky with a dark transparent background that becomes solid
on scroll.

#### Scenario: Desktop navigation renders all links

- **WHEN** the user views the page
- **THEN** the logo "Pipeflow" is visible
- **AND** links for Home, Services, Features, Testimonials, and Contact are present

#### Scenario: Mobile menu opens and closes

- **WHEN** the user clicks the hamburger menu button
- **THEN** a mobile navigation panel slides in from the left
- **AND** the same navigation links are visible
- **WHEN** the user clicks the close button or overlay
- **THEN** the mobile panel closes

### Requirement: Hero section with dark overlay and CTA

The template SHALL render a full-width hero section with a dark overlay
background, a heading "We're your plumber", descriptive text, and a
"Get Started" call-to-action button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the user views the page
- **THEN** the heading "We're your plumber" is visible
- **AND** a "Get Started" button is present

### Requirement: Quote/about section with split layout

The template SHALL render a two-column section with a heading on the left
containing highlighted words and descriptive text on the right.

#### Scenario: Quote section renders content

- **WHEN** the user scrolls to the quote section
- **THEN** a heading with "Plumbing" and "Nowhere" highlighted is visible
- **AND** descriptive paragraph text is present on the right

### Requirement: Services section with three service cards

The template SHALL render three service cards (Maintenance, Residential
Service, Commercial Service), each with an icon, heading, and description.

#### Scenario: All three services are displayed

- **WHEN** the user scrolls to the services section
- **THEN** headings for Maintenance, Residential Service, and Commercial Service are visible
- **AND** each service has an icon and description text

### Requirement: Features section with image and feature cards

The template SHALL render a split section with a background image on the
left and four feature cards on the right (Multiple Layouts, Clean Coding,
Endless Features, Fully Customizable), each with a heading and description.

#### Scenario: Features render with all four cards

- **WHEN** the user scrolls to the features section
- **THEN** the heading "Features That make us Unique" is visible
- **AND** four feature cards with headings are displayed

### Requirement: Counter/stats section with four statistics

The template SHALL render four counter cards showing statistics:
2536 Happy Clients, 6784 Total Projects, 1059 Cups Coffee, 12239 Tickets Submitted.

#### Scenario: All four counters render

- **WHEN** the user scrolls to the counter section
- **THEN** the numbers 2536, 6784, 1059, and 12239 are visible
- **AND** labels Happy Clients, Total Projects, Cups Coffee, Tickets Submitted are present

### Requirement: Video/promotional section with dark background

The template SHALL render a section with a dark background, a heading
"Explore ourselves in a new way", descriptive text, and a "Watch Video" link.

#### Scenario: Video section renders

- **WHEN** the user scrolls to the video section
- **THEN** the heading "Explore ourselves in a new way" is visible
- **AND** a "Watch Video" link is present

### Requirement: Call-to-action section

The template SHALL render a dark-background CTA section with a heading
"Got Impressed to our features", description text, and a "Get a free Quote"
button.

#### Scenario: CTA section renders

- **WHEN** the user scrolls to the CTA section
- **THEN** the heading "Got Impressed to our features" is visible
- **AND** a "Get a free Quote" button is present

### Requirement: Testimonials section with carousel

The template SHALL render a testimonials section with heading
"What our Client's Say about us", and three testimonial cards, each with
an avatar, quote text, author name "Mark Alviro Wiens", and title "CEO at Google".

#### Scenario: Testimonials render

- **WHEN** the user scrolls to the testimonials section
- **THEN** the heading "What our Client's Say about us" is visible
- **AND** three testimonial cards with author names are displayed

### Requirement: Contact section with form

The template SHALL render a contact section with a map area on the left
and a form on the right containing name input, email input, message
textarea, and a "Send Message" button.

#### Scenario: Contact form renders all fields

- **WHEN** the user scrolls to the contact section
- **THEN** a name input, email input, and message textarea are visible
- **AND** a "Send Message" button is present

#### Scenario: Contact form submission clears fields

- **WHEN** the user fills in the form and clicks "Send Message"
- **THEN** the form fields are cleared

### Requirement: Footer with columns, newsletter, social links, and Component Dock link

The template SHALL render a footer with "About Us" column, Newsletter
subscription, social links (Facebook, Twitter, Dribbble, Behance),
copyright text with the current year, and a link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders all columns and Component Dock link

- **WHEN** the user scrolls to the footer
- **THEN** the "About Us" heading is visible
- **AND** a Newsletter section with email input is present
- **AND** social media icons are visible
- **AND** the copyright line includes the current year
- **AND** a link to Component Dock (https://www.componentdock.com/) is present
