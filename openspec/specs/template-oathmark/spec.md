# Template: Oathmark (Legal / Notary Services)

## Purpose

Oathmark is a single-page legal/notary services template — a React recreation
of the ColorLib free "Notary" template
(preview: https://preview.colorlib.com/theme/notary/ — legal/notary landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Brand green `#71bc42` (CTA buttons, accents), dark hero overlay `#364d59`
- Typeface: Playfair Display (headings) + Roboto (body) via Google Fonts
- Pill-shaped buttons, light section backgrounds `#f8f9fa`, peach accent `#fee2b3`
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Oathmark lives in `apps/oathmark` and uses shared components from `packages/ui`
(cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky white navbar with the brand name "Oathmark",
navigation links (Home, Practice Areas, Testimonials, About, Contact), a
Practice Areas dropdown with 6 legal practice areas, and a hamburger toggle
for mobile.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "Oathmark" linking to #home
- **AND** it SHALL show links to Home, Practice Areas, Testimonials, About, Contact

#### Scenario: Practice Areas dropdown

- **GIVEN** the page is rendered on desktop
- **WHEN** the user clicks the Practice Areas button
- **THEN** a dropdown SHALL appear with 6 practice areas: Bankruptcy Law, Business Law, Civil Rights Law, Criminal Law, Immigration Law, Family Law
- **AND** the dropdown SHALL have aria-expanded="true"

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user clicks the hamburger toggle
- **THEN** the mobile menu SHALL become visible
- **AND** clicking a mobile nav link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-width hero with a dark image overlay, a split
layout with headline and subtitle on the left, and an appointment booking
form on the right.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the headline "Notary Public & Legal Solutions"
- **AND** it SHALL display a form with Name, Email, and Date inputs
- **AND** it SHALL have a "Book Appointment" submit button

#### Scenario: Form submission

- **GIVEN** the hero form is visible
- **WHEN** the user fills in all fields and clicks "Book Appointment"
- **THEN** a confirmation message SHALL appear
- **AND** the form SHALL be replaced by the confirmation

### Requirement: Practice Areas section

The system SHALL render a light-background section with 6 practice area cards
in a 3-column grid, each with an icon, title, and description.

#### Scenario: Practice areas grid

- **GIVEN** the user scrolls to the Practice Areas section
- **WHEN** the section is visible
- **THEN** 6 practice area cards SHALL be displayed
- **AND** each card SHALL have an icon, title, and description

### Requirement: About section

The system SHALL render a two-column about section with attorney images on
the left and a headline, description, and CTA button on the right.

#### Scenario: About content

- **GIVEN** the user scrolls to the about section
- **WHEN** the section is visible
- **THEN** it SHALL show 2 attorney images
- **AND** it SHALL show a headline about legal solutions
- **AND** it SHALL have a "Book an appointment" button

### Requirement: Testimonials section

The system SHALL render a light-background section with 3 testimonial cards
showing avatar, name, role, and blockquote.

#### Scenario: Testimonials grid

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the section is visible
- **THEN** 3 testimonial cards SHALL be displayed
- **AND** each card SHALL show an avatar, author name, role, and quote

### Requirement: Legal Solutions section

The system SHALL render a three-column section with an image, text with
checklist, and an accordion FAQ.

#### Scenario: Legal solutions content

- **GIVEN** the user scrolls to the legal solutions section
- **WHEN** the section is visible
- **THEN** it SHALL show the heading "We Have Legal Solutions"
- **AND** it SHALL show a 3-item checklist

#### Scenario: Accordion FAQ

- **GIVEN** the accordion FAQ is visible
- **WHEN** the user clicks a FAQ item
- **THEN** that item SHALL expand and show its answer
- **AND** clicking the same item again SHALL collapse it
- **AND** clicking a different item SHALL expand it and collapse the previous one

### Requirement: Footer

The system SHALL render a dark-background footer with About Us text, social
icons, 4 link columns, and a copyright line linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer is displayed
- **THEN** it SHALL show "About Us" with social icons
- **AND** it SHALL show 4 link columns: Quick Links, Resources, Support, Company
- **AND** it SHALL link to https://www.componentdock.com/ branded as "Component Dock"
