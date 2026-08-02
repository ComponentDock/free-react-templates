# Template: Barberkraft (Astro Template)

## Purpose

Barberkraft is a single-page barbershop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Barberkraft" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Barberkraft" — barbershop template
  (source: https://colorlib.com/wp/template/barberkraft/).
- **Demo DOM analyzed:** https://barberkraft-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/barberkraft/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`barberkraft-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  Tailwind classes.
- **Section order (1:1):** Navbar (About, Services, Barbers, Pricing,
  Blog, Contact, Book Now) → Hero ("Crafting Style, Building Confidence" +
  Book Your Appointment) → Services ("Our Service Menu" + Haircuts:
  Classic Haircut, Skin Fade, Buzz Cut, Long Hair Cut) → Barbers → Pricing
  → Footer.
- **Design tokens extracted from the DOM:**
  - Dark theme with **amber** accents (`amber-400`).
  - Font: **"Space Grotesk"** (Google Fonts).
  - Rounded cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/barberkraft-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Barberkraft lives in `apps/barberkraft` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Barberkraft", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Barberkraft page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Barberkraft" and links to About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Book
Your Appointment" CTA.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "Book Your Appointment" button

### Requirement: Services section

The system SHALL render a services section with a heading and at least four
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Service Menu"
- **AND** it SHALL show at least four service cards (Classic Haircut, Skin Fade, Buzz Cut, Long Hair Cut) with prices

### Requirement: Barbers section

The system SHALL render a barbers section with barber profile cards.

#### Scenario: Barbers content

- **GIVEN** the page is rendered
- **WHEN** the barbers section is displayed
- **THEN** it SHALL show at least three barber cards with names and roles

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

- **GIVEN** the Barberkraft app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Barberkraft — Astro Template"
