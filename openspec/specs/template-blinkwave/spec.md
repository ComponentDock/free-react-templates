---
name: blinkwave
description: Internet Service Provider landing template — recreation of ColorLib "Fastnet"
source: https://colorlib.com/wp/template/fastnet/
preview: https://preview.colorlib.com/theme/fastnet/
---

## Purpose

Recreate the ColorLib "Fastnet" ISP landing page as a React 19 + Tailwind CSS 4
template under the name "Blinkwave". The template showcases an internet service
provider with hero, about, services, pricing, zipcode availability check,
testimonials, blog, and footer sections.

## Requirements

### Requirement: All sections render correctly

The page SHALL display all 9 sections in order: Header, Hero, About, Services,
Pricing, CTA/Zipcode, Testimonials, Blog, Footer.

#### Scenario: Page loads with all sections

- **WHEN** a user visits the Blinkwave page
- **THEN** the header with navigation is visible
- **AND** the hero section shows the headline and CTA
- **AND** the about section shows company information
- **AND** the services section shows 4 feature cards
- **AND** the pricing section shows 3 plan cards
- **AND** the zipcode check form is present
- **AND** the testimonial section shows customer quotes
- **AND** the blog section shows 3 posts
- **AND** the footer contains a Component Dock link

### Requirement: Mobile navigation toggle works

The header SHALL support a mobile hamburger menu that opens and closes.

#### Scenario: Mobile menu toggle

- **WHEN** a user on a mobile viewport clicks the hamburger button
- **THEN** the mobile navigation menu opens
- **AND** clicking a navigation link closes the menu

### Requirement: Pricing cards display correct plans

The pricing section SHALL display three plans with names, prices, and features.

#### Scenario: Pricing information

- **WHEN** a user views the pricing section
- **THEN** Single Package is shown at $20.00/mo
- **AND** Half Package is shown at $25.00/mo
- **AND** Full Package is shown at $29.00/mo
- **AND** each card has a View Packages button

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Component Dock attribution

- **WHEN** a user scrolls to the footer
- **THEN** a link to https://www.componentdock.com/ is visible
- **AND** the link text contains "Component Dock"
