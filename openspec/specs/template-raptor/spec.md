# Template: Raptor (App Landing Page)

## Purpose

Raptor is a single-page domain/hosting landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Raptor" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Raptor" — Free Bootstrap 4 domain & hosting
  template (source: https://colorlib.com/wp/template/raptor/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/raptor/
  (HTTP 200, full rendered DOM + `css/style.css` (71KB) extracted).
  The TEMPLATES.md screenshot (`raptor-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Domain, Hosting, Blog,
  Contact + Get started) → Hero ("Design. Development. Hosting." + Get
  started / Get domain) → Domain search ("Get A Domain Name — With FREE
  Email, DNS, Theft Protection, and other features" + .com 9.75, .net 9.90,
  .biz $8.95, .me $7.95) → Services ("Why choose us" + 100% Uptime
  Guarantee, Safe and Secured, Our Dedicated Support) → Pricing ("Pricing
  Plans — Our Best Pricing" + Free $0, ... + Get Started) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **teal `#2ebdc4`** with **green `#68e5b2`** accent.
  - Dark text `#3a4348`; muted `#6c757d`.
  - Fonts: **"Poppins"** + **"Work Sans"** (Google Fonts).
  - Teal buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/raptor-<n>/<w>/<h>`); icons → lucide-react; domain
  search form prevents default (no backend); no assets copied.

Raptor lives in `apps/raptor` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Raptor",
anchor links to the page's sections, a "Get started" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Raptor page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Raptor" and links to Home, Domain, Hosting, and Contact
- **AND** the navbar SHALL show a "Get started" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and two buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Design. Development. Hosting."
- **AND** it SHALL show "Get started" and "Get domain" buttons

### Requirement: Domain search section

The system SHALL render a domain search section with a heading, a search
form, and a list of domain extensions with prices.

#### Scenario: Domain search content

- **GIVEN** the page is rendered
- **WHEN** the domain search section is displayed
- **THEN** it SHALL contain a heading "Get A Domain Name"
- **AND** it SHALL show a search form and prices for .com, .net, .biz, and .me extensions

### Requirement: Services section

The system SHALL render a services section with a heading and three service
cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Why choose us"
- **AND** it SHALL show cards titled "100% Uptime Guarantee", "Safe and Secured", and "Our Dedicated Support"

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and at least one
plan with a price and a "Get Started" button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Our Best Pricing"
- **AND** it SHALL show a "Free" plan at $0 with features and a "Get Started" button

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Raptor app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Raptor — App Landing Template"
