# Spec: Rivet — Construction Company Template

> Recreation of ColorLib "Construct" — https://colorlib.com/wp/template/construct/
> Preview: https://preview.colorlib.com/theme/construct/

## Purpose

Rivet is a construction company landing page template featuring a hero banner,
services grid, works gallery, company news, testimonials, and a 4-column footer.
The design uses Open Sans typography with a steel blue (#4a90d9) brand palette.

## Requirements

### Requirement: Navbar

The template SHALL display a sticky navigation bar with the brand name "Rivet", navigation links (Home, Services, Works, News, About, Contact), and a "Get A Quote" CTA button.

#### Scenario: Renders brand and nav links

- **WHEN** the page loads
- **THEN** the navbar displays "Rivet" as the brand name
- **AND** navigation links for Home, Services, Works, News, About, Contact are present

#### Scenario: Shows Get A Quote CTA

- **WHEN** the page loads
- **THEN** a "Get A Quote" button/link is visible in the navbar

#### Scenario: Mobile menu toggle

- **WHEN** the viewport is narrow (mobile)
- **THEN** a hamburger menu button is displayed
- **AND** clicking the button opens a mobile navigation panel

#### Scenario: Sticky on scroll

- **WHEN** the user scrolls down
- **THEN** the navbar becomes opaque with a background

### Requirement: Hero

The template SHALL display a full-width hero section with a background image, heading text, description, and a CTA button.

#### Scenario: Renders hero content

- **WHEN** the page loads
- **THEN** the heading "Creating A Brighter Future" is displayed
- **AND** a description paragraph is present
- **AND** a CTA button is visible

#### Scenario: Background image

- **WHEN** the page loads
- **THEN** the hero section has a background image

### Requirement: Banner CTA

The template SHALL display a banner section with a trust heading and a quote button.

#### Scenario: Renders banner content

- **WHEN** the page loads
- **THEN** the heading "Trusted Construction & Development Since 1889" is displayed
- **AND** a "Get A Quote" outline button is visible

### Requirement: Services

The template SHALL display a services section with a heading, 3 service cards, and a "View All Services" button.

#### Scenario: Renders services heading

- **WHEN** the page loads
- **THEN** the heading "Services" is displayed

#### Scenario: Renders service cards

- **WHEN** the page loads
- **THEN** 3 service cards are displayed: House Renovation, Construction Consultant, General Contracting
- **AND** each card has an icon, title, description, and "Learn More" button

#### Scenario: View All Services button

- **WHEN** the page loads
- **THEN** a "View All Services" button is visible

### Requirement: Recent Works

The template SHALL display a works gallery section with project thumbnails and hover overlays.

#### Scenario: Renders works heading

- **WHEN** the page loads
- **THEN** the heading "Recent Works" is displayed

#### Scenario: Renders work thumbnails

- **WHEN** the page loads
- **THEN** 3 project thumbnail images are displayed with overlay text

#### Scenario: View All Works button

- **WHEN** the page loads
- **THEN** a "View All Works" button is visible

### Requirement: Company News

The template SHALL display a news section with news cards on a light background.

#### Scenario: Renders news heading

- **WHEN** the page loads
- **THEN** the heading "Company News" is displayed

#### Scenario: Renders news cards

- **WHEN** the page loads
- **THEN** 3+ news cards are displayed with image, date, title, description, and "Read more" link

### Requirement: Testimonials

The template SHALL display a testimonials section with customer quotes.

#### Scenario: Renders testimonials heading

- **WHEN** the page loads
- **THEN** the heading "Testimonial" is displayed

#### Scenario: Renders testimonial cards

- **WHEN** the page loads
- **THEN** 2 testimonial cards are displayed with avatar, name, company, and blockquote

### Requirement: Footer

The template SHALL display a 4-column footer with brand info, contact details, quick links, social icons, and a Component Dock link.

#### Scenario: Renders footer columns

- **WHEN** the page loads
- **THEN** the footer displays brand name, contact info, quick links, and social icons

#### Scenario: Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: App composition

The template SHALL compose all sections in the correct order and set the document title.

#### Scenario: Section order

- **WHEN** the page loads
- **THEN** sections appear in order: Navbar, Hero, BannerCTA, Services, RecentWorks, CompanyNews, Testimonials, Footer

#### Scenario: Document title

- **WHEN** the page loads
- **THEN** the document title contains "Rivet"
