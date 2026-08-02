# Template: Cloudnest (Astro Template)

## Purpose

Cloudnest is a single-page cloud platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Cloudnest" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Cloudnest" — cloud platform template
  (source: https://colorlib.com/wp/template/cloudnest/).
- **Demo DOM analyzed:** https://cloudnest-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/cloudnest/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`cloudnest-template-1771944017064.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (Products, Pricing, About, Blog,
  Contact, Get Started Free) → Hero ("Deploy at the Speed of Light" +
  CTA) → Features ("Everything You Need to Ship" + App Hosting, Managed
  Databases, Edge Functions, Object Storage, Container Registry, Load
  Balancing) → Pricing → Footer.
- **Design tokens extracted from the DOM:**
  - Dark theme with gray surfaces; **green** accents (`green-400`,
    `green-500`).
  - Font: **"DM Sans"** (Google Fonts).
  - Rounded cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/cloudnest-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Cloudnest lives in `apps/cloudnest` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Cloudnest", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Cloudnest page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Cloudnest" and links to Products, Pricing, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a blurb and a CTA button

### Requirement: Features section

The system SHALL render a features section with a heading and at least six
feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything You Need to Ship"
- **AND** it SHALL show at least six feature cards with titles (App Hosting, Managed Databases, Edge Functions, Object Storage, Container Registry, Load Balancing) and blurbs

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

- **GIVEN** the Cloudnest app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Cloudnest — Astro Template"
