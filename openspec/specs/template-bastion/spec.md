# Template: Bastion (Architecture Template)

## Purpose

Bastion is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Tough" website template (see TEMPLATES.md), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Tough" — architecture template
  (source: https://colorlib.com/wp/template/tough/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/tough/
  (HTTP 200, 36 KB rendered DOM + `css/style.css` extracted 2026-08-08).
  The TEMPLATES.md screenshot (`tough-free-template.jpg`, 1200×946) shows
  the older slider layout; the LIVE DOM is the authoritative reference
  (per docs/replication.md).
- **Section order (1:1):**
  1. Navbar: "Tough" wordmark + numbered links (01 Home, 02 About,
     03 Services, 04 Pricing, 05 Portfolio, 06 Blog, 07 Contact) +
     hamburger menu.
  2. Hero: `home-slider` carousel with FOUR slides — `#01 Exterior
Building`, `#02 American Building`, `#03 Louie's Residences`,
     `#04 Business Building` — dark image backgrounds with light overlay
     text (recreated as a keyboard-accessible slide deck with dots).
  3. Counter band: 4 stats (Finished Projects, Happy Customers, Working
     Hours, Cups of Coffee) + "Explore Further" CTA over a photo.
  4. Services: heading "Services" + FOUR cards (Interior Design, Concept
     Design, Residential Design, Hospitality Design) with icon tiles and
     "Learn More" links.
  5. Quote CTA band: "Get started" heading + "Request a quote" button on a
     dark background.
  6. Portfolio: heading "Portfolio" + intro blurb + EIGHT work items
     (Residence Work 01–08) in a grid.
  7. Testimonials: "Clients Says" + testimonial cards (e.g. Dennis Green,
     Architect) with quotes.
  8. Pricing: three plans (Basic Plan, Standard Plan, Premium Plan) each
     with "$29 per month" and a "Get started" CTA (Premium: "Request a
     Quote").
  9. Footer: "Contact Us" + email link + copyright line.
- **Design tokens extracted from `css/style.css`:**
  - Primary **mint green `#53d397`** / `#79efb4` (buttons, accents, hover).
  - Dark **`#1b212c`** (hero/footer backgrounds); `#4a5562` secondary.
  - Light `#f8f9fa` (section backgrounds); white cards.
  - Font: **"Montserrat"** (Google Fonts, 22 refs in style.css).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/bastion-<n>/<w>/<h>`); icons → lucide-react
  (house-plans → DraftingCompass, ideas → Lightbulb, modern-house →
  Home, skyline → Building2); Montserrat via Google Fonts `<link>`; mint
  primary in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer
  chrome. No ColorLib assets copied.

Bastion lives in `apps/bastion` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Bastion",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Bastion page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Bastion" and links to Home, About, Services, Pricing, Portfolio, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user presses the menu button
- **THEN** a mobile menu SHALL open with the same section links
- **AND** the user SHALL be able to close it

### Requirement: Hero slider

The system SHALL render a hero carousel with four slides and navigation
controls.

#### Scenario: Hero slides

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show slide 1 with the label "#01 Exterior Building"
- **AND** the slides SHALL advance to "#02 American Building", "#03 Louie's Residences", and "#04 Business Building" via next/dot controls

#### Scenario: Hero controls

- **GIVEN** the hero slider is displayed
- **WHEN** the user presses the next button or a dot
- **THEN** the visible slide SHALL change to the selected one

### Requirement: Counter band

The system SHALL render a stats band with four counters and an "Explore
Further" call to action.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL show the labels Finished Projects, Happy Customers, Working Hours, and Cups of Coffee
- **AND** it SHALL show an "Explore Further" button

### Requirement: Services section

The system SHALL render a services section with a heading and four service
cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Services"
- **AND** it SHALL show four service cards titled Interior Design, Concept Design, Residential Design, and Hospitality Design
- **AND** each card SHALL have a "Learn More" link

### Requirement: Quote call to action

The system SHALL render a quote band with a heading and a "Request a quote"
button.

#### Scenario: Quote content

- **GIVEN** the page is rendered
- **WHEN** the quote section is displayed
- **THEN** it SHALL show the heading "Get started"
- **AND** it SHALL show a "Request a quote" button

### Requirement: Portfolio section

The system SHALL render a portfolio section with a heading and eight work
items.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL contain a heading "Portfolio"
- **AND** it SHALL show eight work items (Residence Work 01–08)

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and client
quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Clients Says"
- **AND** it SHALL show at least one testimonial with an author name and role

### Requirement: Pricing section

The system SHALL render a pricing section with three plans.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show three plans: Basic Plan, Standard Plan, and Premium Plan
- **AND** each plan SHALL show a monthly price and a "Get started" button

### Requirement: Footer

The system SHALL render a footer with contact info, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a "Contact Us" heading, an email link, and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Bastion app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Bastion — Architecture Template"
