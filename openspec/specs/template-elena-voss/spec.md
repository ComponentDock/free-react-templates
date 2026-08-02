# Template: Elena Voss (Astro Template)

## Purpose

Elena Voss is a single-page photographer portfolio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Elena Voss" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Elena Voss" — photographer portfolio template
  (source: https://colorlib.com/wp/template/elena-voss/).
- **Demo DOM analyzed:** https://elenavoss-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/elena-voss/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`elenavoss-template-1771943801609.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (Portfolio, About, Services,
  Testimonials, Pricing, Blog, Gallery, Contact) → Hero ("Capturing
  Moments That Last Forever") → Selected Work ("Selected Work" + Golden
  Hour Ceremony, Studio Portrait, Mountain Dawn, Fashion Editorial, Coastal
  Vows, Environmental Portrait) → About → Services → Testimonials →
  Pricing → Footer.
- **Design tokens extracted from the DOM:**
  - Light theme with neutral surfaces.
  - Fonts: **"Fraunces"** (display) + **"DM Sans"** (body) via Google
    Fonts.
  - Rounded cards, elegant serif headings.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/elenavoss-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Elena Voss lives in `apps/elena-voss` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Elena
Voss", anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Elena Voss page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Elena Voss" and links to Portfolio, About, and Contact
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

### Requirement: Selected work section

The system SHALL render a selected work section with a heading and at least
six work cards.

#### Scenario: Selected work content

- **GIVEN** the page is rendered
- **WHEN** the selected work section is displayed
- **THEN** it SHALL contain a heading "Selected Work"
- **AND** it SHALL show at least six work cards with titles (Golden Hour Ceremony, Studio Portrait, Mountain Dawn, Fashion Editorial, Coastal Vows, Environmental Portrait)

### Requirement: Services section

The system SHALL render a services section with at least three service
cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show at least three service cards with titles and blurbs

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

- **GIVEN** the Elena Voss app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Elena Voss — Astro Template"
