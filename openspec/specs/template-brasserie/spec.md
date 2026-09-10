# Template: Brasserie (Premium Restaurant Landing)

## Purpose

Brasserie is a premium restaurant landing page — a faithful React recreation of
the ColorLib free "Caviar" template
(preview: https://preview.colorlib.com/theme/caviar/ — restaurant/food landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand red `#ff0000` (CTAs, accents, highlights), black backgrounds `#000000`, `#333333`
- White text on dark sections, dark text on light sections
- Typeface: Work Sans (headings) + Open Sans (body) via Google Fonts
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Brasserie lives in `apps/brasserie` and uses shared components from `packages/ui`
(cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a black navbar with the site name "Brasserie", section
links (Home, About, Menu, Awards, Testimonials, Reservation), and a hamburger
toggle that opens a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Brasserie" linking to `#home`
- **AND** it SHALL show links to Home, About, Menu, Awards, Testimonials, Reservation

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger button
- **THEN** the mobile menu SHALL become visible
- **AND** the button label SHALL change to "Close menu"

### Requirement: Hero section

The system SHALL render a hero section with a dark overlay on a background image,
the heading "Brasserie", subtitle "Premium Restaurant", and a "Reservation"
call-to-action button linking to the reservation section.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a heading "Brasserie"
- **AND** it SHALL show text "Premium Restaurant"
- **AND** it SHALL show a "Reservation" button linking to `#reservation`

### Requirement: About section

The system SHALL render an about section with two sub-sections: "Restaurant Style"
and "Our Chef", each with descriptive text and an image.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading "About Us"
- **AND** it SHALL show sub-headings "Restaurant Style" and "Our Chef"

### Requirement: Specials / Menu section

The system SHALL render a specials section with the heading "Our Specials", a
"View The Menu" CTA, and three dish cards showing name and price.

#### Scenario: Specials display

- **GIVEN** the page is rendered
- **WHEN** the specials section is displayed
- **THEN** it SHALL show a heading "Our Specials"
- **AND** it SHALL show a "View The Menu" link
- **AND** it SHALL show dishes with names and prices

### Requirement: Awards section

The system SHALL render an awards section with award cards showing icons, titles,
and descriptions.

#### Scenario: Awards display

- **GIVEN** the page is rendered
- **WHEN** the awards section is displayed
- **THEN** it SHALL show a heading "Awards"
- **AND** it SHALL show award entries

### Requirement: Testimonials section

The system SHALL render a testimonials section with testimonial cards showing
author name, role, and quote.

#### Scenario: Testimonials display

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a heading "Testimonials"
- **AND** it SHALL show testimonial authors Robert Jonson, Clara Hudson, Jane Black

### Requirement: Reservation section

The system SHALL render a reservation section with the heading "Reserve Your Desk"
and a "Book Now" CTA button.

#### Scenario: Reservation content

- **GIVEN** the page is rendered
- **WHEN** the reservation section is displayed
- **THEN** it SHALL show a heading "Reserve Your Desk"
- **AND** it SHALL show a "Book Now" button linking to `#reservation`

### Requirement: Footer with Component Dock link

The system SHALL render a footer with the brand name "Brasserie", copyright text,
and a link to `https://www.componentdock.com/` labeled "Component Dock".

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand name "Brasserie"
- **AND** it SHALL show a link to `https://www.componentdock.com/`
- **AND** the link text SHALL be "Component Dock"
