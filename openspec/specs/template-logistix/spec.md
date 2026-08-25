# Spec: Logistix (ColorLib Thelogistico)

Recreation of ColorLib Thelogistico (`https://colorlib.com/wp/template/thelogistico/`) as **Logistix**, a professional shipping and cargo transport landing page template.

## Purpose

Provide a free, production-ready React landing page for logistics and cargo transport companies, faithfully recreating the ColorLib Thelogistico design under the original name "Logistix" with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Brand color:** `#ff6600` (orange — from CSS `#f60` used on buttons, accents, hover states)
- **Surface gray:** `#f1fbff` (light blue-gray, used on CTA banner, blog, footer backgrounds)
- **Font families:** Roboto (body), Roboto Condensed (display headings) via Google Fonts
- **Header:** Black logo box with white text, red accent bar at top, nav links uppercase, orange phone CTA button
- **Footer:** Mandatory link to `https://www.componentdock.com/` ("Component Dock")

## Requirements

### Requirement 1: Navigation & Header

The template SHALL display a sticky header with a black logo box showing "Logistix", desktop navigation links (Home, About, Services, Blog, Contact), social media icons (Facebook, Instagram, LinkedIn), a phone CTA button, and a mobile hamburger menu toggle.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar SHALL display the "Logistix" logo, all five navigation links, social icons, and the phone number button

#### Scenario: Mobile menu toggles open and closed

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation panel SHALL appear with all navigation links
- **AND** clicking a link SHALL close the mobile menu

### Requirement 2: Hero Section

The template SHALL display a full-width hero with a dark background image and gradient overlay, left-aligned white text ("Welcome to Logistix", "A TRULY GLOBAL SERVICE PROVIDER", subtitle, "Explore Us" CTA), and a right-aligned "Get a quick offer" form with Truckload select, Commodity select, Distance input, and estimated cost display.

#### Scenario: Hero renders heading and CTA

- **WHEN** the hero section is rendered
- **THEN** it SHALL display the "Welcome to Logistix" label, the main heading, subtitle text, and an "Explore Us" call-to-action link

#### Scenario: Quick offer form displays all fields

- **WHEN** the hero form is rendered
- **THEN** it SHALL display Truckload select, Commodity select, Distance input, and estimated cost "$10,400.00"

### Requirement 3: Services Section

The template SHALL display a 4-column responsive grid of service cards: Air Freight, Ocean Freight, Road Transport, and Warehousing. Each card has an icon, title, description, and circular arrow link.

#### Scenario: All four services render

- **WHEN** the services section is rendered
- **THEN** it SHALL display all four service titles and their descriptions

### Requirement 4: About Us Section

The template SHALL display a 2-column split layout with an image on the left and content on the right, including an "About Us" label, heading, description paragraphs, and an accordion with "Road Transport" and "Sea Cargo" items.

#### Scenario: Accordion toggles on click

- **WHEN** the user clicks an accordion button
- **THEN** the corresponding content panel SHALL expand or collapse

### Requirement 5: Our Mission Section

The template SHALL display a dark-background 2-column split with a "Our Mission" label, blockquote, and "Learn More" outlined button on the left, and an image on the right.

#### Scenario: Mission section renders key elements

- **WHEN** the mission section is rendered
- **THEN** it SHALL display the "Our Mission" label, a blockquote, and a "Learn More" link

### Requirement 6: Projects Section

The template SHALL display a 2-column split with an image on the left and dark content on the right, including the heading "We give you complete control of your shipments" and numbered project cards.

#### Scenario: Project items render with numbers and links

- **WHEN** the projects section is rendered
- **THEN** it SHALL display numbered project items with titles, descriptions, and view links

### Requirement 7: CTA Banner

The template SHALL display a light gray-blue banner with "Need Help? Get Free quote!" heading, subtitle, and an orange "Learn More" button.

#### Scenario: CTA banner renders heading and button

- **WHEN** the CTA banner is rendered
- **THEN** it SHALL display the heading text and a "Learn More" link

### Requirement 8: Testimonial Section

The template SHALL display a dark-background 2-column split with "Client Testimonial" label, quote, founder avatar and name on the left, and a video placeholder with play button on the right.

#### Scenario: Testimonial renders quote and founder info

- **WHEN** the testimonial section is rendered
- **THEN** it SHALL display the testimonial quote, founder name "Graham Cracker", role, and a play video button

### Requirement 9: Blog Section

The template SHALL display a light gray-blue section with "Latest News" heading and a 3-column grid of blog post cards with images, dates, and titles.

#### Scenario: Blog posts render

- **WHEN** the blog section is rendered
- **THEN** it SHALL display three blog post cards with dates and titles

### Requirement 10: Brand Partners

The template SHALL display a horizontal row of partner brand names.

#### Scenario: Brand names render

- **WHEN** the brands section is rendered
- **THEN** it SHALL display all partner brand names

### Requirement 11: Footer

The template SHALL display a 5-column footer with logo, quick links, solutions, support, newsletter form with email input, social media icons, copyright line, and a mandatory Component Dock attribution link.

#### Scenario: Footer renders Component Dock link

- **WHEN** the footer is rendered
- **THEN** it SHALL contain a link to `https://www.componentdock.com/` with text "Component Dock"
