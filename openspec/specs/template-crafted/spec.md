# Template: Crafted (App Landing Page)

## Purpose

Crafted is a single-page creative-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Crafted" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Crafted" — creative agency website template
  (source: https://colorlib.com/wp/template/crafted/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/crafted/
  (HTTP 200, full rendered DOM + `css/main.css` (99KB) extracted).
  The TEMPLATES.md screenshot (`crafted-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Service, Projects, Team,
  Blog, Contact) → Hero ("We Are Crafted. Design & Development Service
  Provider." + More About Us / Watch Live Demo) → Brand strip → Services
  ("We Are Crafted. We Provide These Services to Our Customers" + Story
  Boarding x3) → About ("We Are Crafted. Some Info About Us" + stats: 500+
  Qualified Lawyer, 20,650+ Solved Cases, 2.5k+ Trusted Clients, 50+
  Achievements) → Portfolio ("Recent Portfolio Showcase" + Proper Guided
  Tour / Santorini Island Dream / Holiday and Fun Package + View all Works)
  → Team → Testimonials → CTA → Blog → Footer.
- **Design tokens extracted from `main.css`:**
  - Primary **blue `#4ba0f9`** with **yellow `#f8b600`** accent and cyan
    `#4cd3e3`.
  - Dark sections `#222222`; light `#f9f9ff`.
  - Fonts: **"Playfair Display"** (display) + **"Roboto"** (body).
  - Blue buttons with white text; yellow accents.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/crafted-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Crafted lives in `apps/crafted` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Crafted",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Crafted page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Crafted" and links to Home, About, Services, Projects, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

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
- **THEN** it SHALL contain a level-1 heading "We Are Crafted" and a design/development service line
- **AND** it SHALL show "More About Us" and "Watch Live Demo" buttons

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service tiles.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "We Provide These Services to Our Customers"
- **AND** it SHALL show at least three service tiles with titles and blurbs

### Requirement: About section with stats

The system SHALL render an about section with a heading and four stats.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "Some Info About Us"
- **AND** it SHALL show stats including "500+", "20,650+", "2.5k+", and "50+"

### Requirement: Portfolio section

The system SHALL render a portfolio section with a heading, at least three
project cards, and a "View all Works" button.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL contain a heading "Recent Portfolio Showcase"
- **AND** it SHALL show at least three project cards and a "View all Works" button

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

- **GIVEN** the Crafted app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Crafted — App Landing Template"
