# Template: Brightsmile (Astro Template)

## Purpose

Brightsmile is a single-page dental clinic landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Brightsmile" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Brightsmile" — dental clinic template
  (source: https://colorlib.com/wp/template/brightsmile/).
- **Demo DOM analyzed:** https://brightsmile-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/brightsmile/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`brightsmile-template-1771943701965.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (About, Services, Team, Why Us,
  Testimonials, Pricing, Blog, Contact) → Hero ("Your Smile Deserves the
  Best Care") → Services ("Comprehensive Dental Care" + General
  Dentistry, Cosmetic Dentistry, Dental Implants, Orthodontics, Teeth
  Whitening, Emergency Care) → Team → Why Us → Testimonials → Pricing →
  Footer.
- **Design tokens extracted from the DOM:**
  - Light theme with **yellow** accents (`yellow-400`).
  - Font: **"Plus Jakarta Sans"** (Google Fonts).
  - Rounded cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/brightsmile-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Brightsmile lives in `apps/brightsmile` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Brightsmile", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Brightsmile page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Brightsmile" and links to About, Services, and Contact
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
- **THEN** it SHALL contain a heading "Comprehensive Dental Care"
- **AND** it SHALL show at least six service cards with titles (General Dentistry, Cosmetic Dentistry, Dental Implants, Orthodontics, Teeth Whitening, Emergency Care) and blurbs

### Requirement: Team section

The system SHALL render a team section with doctor profile cards.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show at least three doctor cards with names and roles

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

- **GIVEN** the Brightsmile app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Brightsmile — Astro Template"
