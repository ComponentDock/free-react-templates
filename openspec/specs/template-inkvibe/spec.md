# Template: Inkvibe (Tattoo Studio Landing)

## Purpose

Inkvibe is a multi-section tattoo studio landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Tattooz" tattoo studio design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original design is a dark-themed tattoo studio site with an orange accent,
featuring a hero slider, about section, services grid, portfolio gallery,
team profiles, pricing tiers, blog posts, and a full footer. Inkvibe follows
the same section structure and adds the repo's accessible patterns and
Component Dock branding.

Inkvibe lives in `apps/inkvibe` and uses shared components from `packages/ui`
(cn).

## Requirements

### Requirement: Navbar

The system SHALL render a sticky dark navigation bar with the brand name
"Inkvibe" and navigation links to all major sections.

#### Scenario: Navbar content

- **GIVEN** the Inkvibe page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand name "Inkvibe"
- **AND** the navbar SHALL show links for Home, About, Services, Portfolio, Team, Pricing, Blog, and Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user taps the hamburger button
- **THEN** the mobile navigation menu SHALL expand
- **AND** the toggle button SHALL show aria-expanded="true"
- **WHEN** the user taps a navigation link
- **THEN** the mobile menu SHALL close

### Requirement: Hero section

The system SHALL render a full-width hero section with a background image,
heading, subtext, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page loads
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the heading "We Provide Forever."
- **AND** it SHALL show descriptive subtext
- **AND** it SHALL show a CTA button linking to #portfolio

#### Scenario: Slide navigation

- **GIVEN** the hero section is displayed
- **WHEN** the user views the hero
- **THEN** previous and next slide buttons SHALL be visible

### Requirement: About section

The system SHALL render an about section with a heading, subheading, images,
and descriptive text.

#### Scenario: About content

- **GIVEN** the user scrolls to the About section
- **WHEN** the section is visible
- **THEN** it SHALL show the heading "About Us"
- **AND** it SHALL show the subheading "Our Tattoos Last Longer Than Most Marriages."
- **AND** it SHALL show at least one image and descriptive paragraphs

### Requirement: Services section

The system SHALL render a services section with 6 service cards in a responsive grid.

#### Scenario: Service cards

- **GIVEN** the user scrolls to the Services section
- **WHEN** the section is visible
- **THEN** it SHALL show 6 service cards: Tattooing, Tattoo Design, Tattoo Removal, Piercing, Laser Removal, Henna Design
- **AND** each card SHALL show an icon, title, and description

### Requirement: Portfolio section

The system SHALL render a portfolio section with a filterable gallery grid.

#### Scenario: Gallery display

- **GIVEN** the user scrolls to the Portfolio section
- **WHEN** the section loads
- **THEN** it SHALL show filter buttons for All, Tattooing, Design, and Removal
- **AND** it SHALL show gallery images in a grid

#### Scenario: Filtering

- **GIVEN** the gallery is displayed
- **WHEN** the user clicks a filter button
- **THEN** the gallery SHALL update to show only items matching that category

### Requirement: Team section

The system SHALL render a team section with 4 artist profile cards.

#### Scenario: Team members

- **GIVEN** the user scrolls to the Team section
- **WHEN** the section is visible
- **THEN** it SHALL show 4 team members with name, role, and avatar image
- **AND** each member card SHALL have social media icon links

### Requirement: Discount CTA

The system SHALL render a parallax discount call-to-action section.

#### Scenario: Discount content

- **GIVEN** the user scrolls to the discount section
- **WHEN** the section is visible
- **THEN** it SHALL show the heading "Get 30% Off Your Body Massage"
- **AND** it SHALL show a CTA button linking to #pricing

### Requirement: Pricing section

The system SHALL render a pricing section with 3 tiers.

#### Scenario: Pricing tiers

- **GIVEN** the user scrolls to the Pricing section
- **WHEN** the section is visible
- **THEN** it SHALL show 3 tiers: Silver ($52), Diamond ($125), Golden ($95)
- **AND** each tier SHALL show a price, feature list, and CTA button
- **AND** the Diamond tier SHALL be visually highlighted as featured

### Requirement: Book Now CTA

The system SHALL render a book-now call-to-action section.

#### Scenario: Book Now content

- **GIVEN** the user scrolls to the Book Now section
- **WHEN** the section is visible
- **THEN** it SHALL show the heading "Book Your Session"
- **AND** it SHALL show a CTA button linking to #contact

### Requirement: Blog section

The system SHALL render a blog section with 4 post cards.

#### Scenario: Blog posts

- **GIVEN** the user scrolls to the Blog section
- **WHEN** the section is visible
- **THEN** it SHALL show 4 blog post cards
- **AND** each card SHALL show a thumbnail image, title, date, and excerpt

### Requirement: Footer

The system SHALL render a 4-column footer with brand info, business hours,
quick links, and a newsletter form, plus a copyright line linking to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the page footer is displayed
- **WHEN** the user views the footer
- **THEN** it SHALL show the brand name "Inkvibe" and social media links
- **AND** it SHALL show business hours and contact information
- **AND** it SHALL show quick navigation links
- **AND** it SHALL show a newsletter email form

#### Scenario: Component Dock link

- **GIVEN** the footer copyright line is displayed
- **WHEN** the user reads the copyright
- **THEN** it SHALL contain a link to https://www.componentdock.com/ labeled "Component Dock"

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and set the document title.

#### Scenario: Page title

- **GIVEN** the Inkvibe page is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Inkvibe — Tattoo Studio Landing Template"

#### Scenario: Heading hierarchy

- **GIVEN** the page is rendered
- **WHEN** the DOM is inspected
- **THEN** the page SHALL have a level-1 heading (h1) in the hero section
- **AND** all section headings SHALL use level-2 (h2) or level-3 (h3) as appropriate
