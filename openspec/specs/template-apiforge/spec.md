# Template: Apiforge (Astro Template)

## Purpose

Apiforge is a single-page API platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Apiforge" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Apiforge" — API platform template
  (source: https://colorlib.com/wp/template/apiforge/).
- **Demo DOM analyzed:** https://apiforge-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/apiforge/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`apiforge-template-1771944059634.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (Products, Pricing, About, Blog,
  Contact, Get API Key) → Hero ("Ship Better APIs Faster" + CTA) →
  Features ("Everything You Need to Ship APIs" + API Gateway, Rate
  Limiting, Authentication, Analytics Dashboard, Webhook Management, SDK
  Generation) → Pricing → Docs → Footer.
- **Design tokens extracted from the DOM:**
  - Dark theme with gray surfaces; **green** accents (`green-400`,
    `green-500`).
  - Font: **"Outfit"** (Google Fonts).
  - Rounded cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/apiforge-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Apiforge lives in `apps/apiforge` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Apiforge",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Apiforge page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Apiforge" and links to Products, Pricing, and Contact
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
- **THEN** it SHALL contain a heading "Everything You Need to Ship APIs"
- **AND** it SHALL show at least six feature cards with titles (API Gateway, Rate Limiting, Authentication, Analytics Dashboard, Webhook Management, SDK Generation) and blurbs

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

- **GIVEN** the Apiforge app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Apiforge — Astro Template"
