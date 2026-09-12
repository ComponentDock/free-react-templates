# Spec: Doflo — Digital Agency Landing Template

## Purpose

Recreate ColorLib Dizzi as a React 19 + Vite + Tailwind CSS 4 + TypeScript
template named "Doflo". The original uses Open Sans font, green (#00d089) primary
color, and dark (#1a1a2e) footer. No ColorLib assets are copied; images use
picsum.photos placeholders, icons use lucide-react, and brand icons use inline SVGs.

**Source:** https://colorlib.com/wp/template/dizzi/
**Preview:** https://preview.colorlib.com/theme/dizzi/

## Design Tokens

| Token      | Value     | Usage                                                    |
| ---------- | --------- | -------------------------------------------------------- |
| brand-400  | #00d089   | Primary buttons, accents, banner background, CTA section |
| indigo-400 | #415094   | Service icons, secondary headings                        |
| gray-900   | #111827   | Headings, text                                           |
| gray-600   | #4b5563   | Body text                                                |
| gray-400   | #9ca3af   | Muted text, footer text                                  |
| bg-alt     | #f9f9ff   | Alternating section backgrounds                          |
| font       | Open Sans | All text (Google Fonts)                                  |

## Requirements

### Requirement: Page renders all sections in order

The application SHALL render Navbar, Banner, ClientLogos, About, Services,
Portfolio, Creative, Testimonials, CTA, and Footer in that order.

#### Scenario: All sections render on initial load

- **GIVEN** a user visits the Doflo page
- **THEN** the document title is "Doflo — Digital Agency Template"
- **AND** the navbar with "Doflo" logo is visible
- **AND** the banner heading reads "Digital and innovative idea"
- **AND** the about heading reads "Digital design and development company"
- **AND** the services section renders three cards
- **AND** the portfolio heading reads "Our Projects"
- **AND** the creative heading reads "We work hard and think creatively"
- **AND** the testimonials heading reads "What Our Clients Say"
- **AND** the CTA heading reads "create something awesome together"
- **AND** the footer renders with "Component Dock" link to https://www.componentdock.com/

### Requirement: Navbar navigation and mobile menu

The navbar SHALL display logo, navigation links, and social icons.
On mobile, the menu SHALL be toggled via a hamburger button.

#### Scenario: Desktop navigation links render

- **GIVEN** a user views the navbar
- **THEN** links for Home, About, Services, Portfolio, Testimonials, and Contact are visible

#### Scenario: Mobile menu toggles

- **GIVEN** a user clicks the mobile menu button
- **THEN** the close button appears
- **AND** clicking close restores the open button

#### Scenario: Mobile menu closes on link click

- **GIVEN** the mobile menu is open
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Banner hero section

The banner SHALL display the agency tagline and a call-to-action button.

#### Scenario: Banner renders heading and CTA

- **GIVEN** a user views the banner section
- **THEN** the heading reads "Digital and innovative idea"
- **AND** the subtitle reads "We are digital agency"
- **AND** an "Explore Work" button is visible

### Requirement: About Us section

The about section SHALL display the agency description and an explore button.

#### Scenario: About section renders content

- **GIVEN** a user views the about section
- **THEN** the heading reads "Digital design and development company"
- **AND** an "Explore Us" button is visible

### Requirement: Services section

The services section SHALL display three service cards with number, title,
description, and technology tags.

#### Scenario: Three services render

- **GIVEN** a user views the services section
- **THEN** "User experience design", "Web and App development", and
  "Digital and innovative marketing" headings are visible
- **AND** service numbers 01, 02, 03 are displayed
- **AND** technology tags like "Branding and Identity", "WordPress",
  "Lead Generation" are visible

### Requirement: Portfolio section with filter tabs

The portfolio section SHALL display project cards filterable by category.

#### Scenario: All projects visible by default

- **GIVEN** a user views the portfolio section
- **THEN** the heading reads "Our Projects"
- **AND** filter tabs All, Web Design, Mobile App, Web Development are visible
- **AND** 4 project images are displayed

#### Scenario: Filtering projects by category

- **WHEN** the user clicks the "Mobile App" filter tab
- **THEN** only 1 project image is displayed

#### Scenario: Resetting filter shows all projects

- **WHEN** the user clicks "All" after filtering
- **THEN** 4 project images are displayed again

### Requirement: Creative section

The creative section SHALL display an image and a heading with a CTA.

#### Scenario: Creative section renders

- **GIVEN** a user views the creative section
- **THEN** the heading reads "We work hard and think creatively"
- **AND** a "See How We Work" button is visible

### Requirement: Testimonials section

The testimonials section SHALL display client reviews with name, role, and quote.

#### Scenario: Testimonial cards render

- **GIVEN** a user views the testimonials section
- **THEN** the heading reads "What Our Clients Say"
- **AND** at least 2 testimonial cards are visible with name and role

### Requirement: CTA section

The CTA section SHALL display a call-to-action with three button links.

#### Scenario: CTA renders heading and links

- **GIVEN** a user views the CTA section
- **THEN** the heading reads "create something awesome together"
- **AND** links for "Discuss project", "Services", and "Contact" are visible

### Requirement: Footer with Component Dock credit

The footer SHALL display brand info, company links, resources, contact
locations, and a "Made with Component Dock" attribution link.

#### Scenario: Footer renders all columns

- **GIVEN** a user views the footer
- **THEN** the brand name "Doflo" is visible
- **AND** Company links (Media, Carrier, Testimonials, FAQ) are visible
- **AND** Resources links (UI Kit, WordPress Theme, Illustration) are visible
- **AND** contact locations London - UK and New York - USA are visible
- **AND** a "Component Dock" link points to https://www.componentdock.com/
