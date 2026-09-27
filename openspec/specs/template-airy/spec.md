# Template: Airy (Business Agency)

## Purpose

Airy is a multi-section business/agency landing page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Whitespace" design
(see TEMPLATES.md), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a professional business/agency site with a dark hero,
services section, animated counters, project gallery, testimonials carousel,
pricing plans, and a dark footer. Airy follows the same structure and uses
Google Fonts (Poppins), picsum.photos placeholders, and lucide-react icons.

Airy lives in `apps/airy` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the brand name "Airy",
links to all sections (Home, About, Work, Pricing, Blog, Contact), and a
mobile hamburger menu toggle.

#### Scenario: Desktop navbar

- **GIVEN** the Airy page is rendered on a desktop viewport
- **WHEN** the page loads
- **THEN** the navbar SHALL display the brand "Airy" and all six navigation links
- **AND** the hamburger menu button SHALL be hidden

#### Scenario: Mobile navbar toggle

- **GIVEN** the Airy page is rendered on a mobile viewport
- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu SHALL become visible
- **AND** clicking a nav link SHALL close the mobile menu

### Requirement: Hero section

The system SHALL render a full-width hero section with a split layout: text
on the left (subheading, headline, description, CTA button) and an image
on the right.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL display the subheading "Welcome"
- **AND** the hero SHALL display the headline "We Help to Build You the Product"
- **AND** the hero SHALL display a "Get in touch" CTA button linking to #contact

### Requirement: About section

The system SHALL render an about section with a split layout: a services list
on the left and an image on the right.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the about section SHALL display the heading "What We Can Do for You"
- **AND** it SHALL list three services: Market Research, Financial Services, Online Marketing

### Requirement: Services grid

The system SHALL render a 4-column services grid with icons, titles, and
descriptions.

#### Scenario: Services display

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** the services grid SHALL display four items: Business Strategy, Data Analysis, Graphic Design, Creative
- **AND** each item SHALL have an icon, a title, and a description

### Requirement: Counter section

The system SHALL render a dark-background counter section with animated
stat counters.

#### Scenario: Counter stats

- **GIVEN** the counter section is rendered
- **WHEN** the page loads
- **THEN** the counter section SHALL display the heading "Interesting Facts"
- **AND** it SHALL show four stats: 2000 Done Works, 300 Happy Customers, 100 Coffee, 1000 Work Hours

### Requirement: Projects gallery

The system SHALL render a project gallery with image cards in a masonry-style
grid, each with hover overlay showing title and category.

#### Scenario: Projects display

- **GIVEN** the projects section is rendered
- **WHEN** the page loads
- **THEN** the projects section SHALL display the heading "Recent Projects"
- **AND** it SHALL render nine project cards

### Requirement: Testimonials carousel

The system SHALL render an auto-rotating testimonials carousel with avatar,
quote, name, and role.

#### Scenario: Testimonials content

- **GIVEN** the testimony section is rendered
- **WHEN** the page loads
- **THEN** the testimony section SHALL display the heading "What Our Clients Say"
- **AND** it SHALL show the first testimonial with name, role, and quote
- **AND** navigation buttons SHALL allow cycling through testimonials

### Requirement: Pricing section

The system SHALL render a 4-column pricing grid with plan names, prices,
feature lists, and CTA buttons.

#### Scenario: Pricing display

- **GIVEN** the pricing section is rendered
- **WHEN** the page loads
- **THEN** the pricing section SHALL display four plans: Free ($0), Startup ($19), Premium ($49), Pro ($99)
- **AND** each plan SHALL have a feature list and a "Get Started" button

### Requirement: Footer

The system SHALL render a dark-background footer with brand description,
useful links, quick links, contact information, and a Component Dock
attribution link.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL display the brand name "Airy"
- **AND** it SHALL link to https://www.componentdock.com/ branded as "Component Dock"
- **AND** it SHALL show social media icons, navigation links, and contact info
