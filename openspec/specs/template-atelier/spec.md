# Template: Atelier (Astro Template)

## Purpose

Atelier is a single-page design studio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Atelier" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Atelier" — design studio template
  (source: https://colorlib.com/wp/template/atelier/).
- **Demo DOM analyzed:** https://atelier-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/atelier/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`atelier-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  Tailwind classes.
- **Section order (1:1):** Navbar (About, Portfolio, Services, Pricing,
  Blog, Contact, Book Consultation) → Hero ("Transforming Spaces Into
  Extraordinary Experiences") → Services ("Comprehensive Design Services"
  - Residential Design, Commercial Design, Hospitality Design, Color &
    Material Consulting, Space Planning, Renovation Management) → Portfolio
    → Pricing → Footer.
- **Design tokens extracted from the DOM:**
  - Light theme with neutral surfaces.
  - Fonts: **"DM Sans"** (body) + **"Playfair Display"** (display) via
    Google Fonts.
  - Rounded cards, elegant serif headings.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/atelier-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Atelier lives in `apps/atelier` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Atelier",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Atelier page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Atelier" and links to About, Portfolio, and Services
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a blurb.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a blurb

### Requirement: Services section

The system SHALL render a services section with a heading and at least six
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Comprehensive Design Services"
- **AND** it SHALL show at least six service cards with titles (Residential Design, Commercial Design, Hospitality Design, Color & Material Consulting, Space Planning, Renovation Management) and blurbs

### Requirement: Portfolio section

The system SHALL render a portfolio section with a project gallery.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show at least three project images with captions

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

- **GIVEN** the Atelier app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Atelier — Astro Template"
