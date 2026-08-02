# Template: Forever Always (Astro Template)

## Purpose

Forever Always is a single-page wedding planner landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Forever Always" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Forever & Always" — wedding website/planner
  template (source: https://colorlib.com/wp/template/forever-always/).
- **Demo DOM analyzed:** https://foreveralways-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/forever-always/` returns
  404 — preview portal loads demos from `<slug>-colorlib.pages.dev` per
  `assets/js/products.js`). The TEMPLATES.md screenshot
  (`foreveralways-template-1771943944925.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: Services, Portfolio, About, Packages, Testimonials, Blog,
     Gallery, Contact.
  2. Hero: "Your Dream Wedding Begins Here".
  3. Our Services: 6 cards — Full Planning, Day-of Coordination, Design &
     Decor, Venue Selection, Catering & Cake, Entertainment.
  4. Our Portfolio: couple cards — Sarah & Michael, Emma & James, Olivia &
     William, Grace & Thomas, Isabella & Alexander, Charlotte & Benjamin.
  5. Venue Transformations (before/after gallery).
  6. Meet Your Planner (planner profile).
  7. Wedding Packages: Intimate, Classic, Grand.
  8. What Our Couples Say (testimonials).
  9. Frequently Asked Questions (accordion: booking advance, pricing
     structure, destination weddings, involvement, rain plan).
  10. "Let's Create Your Perfect Day" CTA.
  11. Footer: Services / Information / Connect / Stay Inspired (newsletter
      email input + Subscribe) + copyright.
- **Design tokens extracted from the DOM:**
  - Brand color: **#e11d48** (rose-600; scale rose-400/500/700/900) — CTA
    accents, links, highlights.
  - Neutrals: white / gray-100 / gray-300 / gray-500 / gray-700 / gray-800 /
    gray-900 / black; dark elegant sections.
  - Fonts: **"Playfair Display"** (display) + **"Lora"** (body) via Google
    Fonts.
  - Shapes: rounded-full buttons/inputs (pill newsletter input), rounded
    cards; FAQ accordion buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/forever-always-<n>/<w>/<h>`); icons → lucide-react;
  Playfair Display + Lora via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.

Forever Always lives in `apps/forever-always` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Forever
Always", anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Forever Always page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Forever Always" and links to Services, Portfolio, and Packages
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and call-to-action
buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Your Dream Wedding Begins Here"
- **AND** it SHALL show call-to-action buttons

### Requirement: Services section

The system SHALL render a services section with at least six service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Services"
- **AND** it SHALL show cards for Full Planning, Day-of Coordination, Design & Decor, Venue Selection, Catering & Cake, and Entertainment

### Requirement: Portfolio section

The system SHALL render a portfolio section with at least four couple cards.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL contain a heading "Our Portfolio"
- **AND** it SHALL show couple cards such as "Sarah & Michael"

### Requirement: Packages section

The system SHALL render a wedding packages section with at least three
package cards.

#### Scenario: Packages content

- **GIVEN** the page is rendered
- **WHEN** the packages section is displayed
- **THEN** it SHALL contain a heading "Wedding Packages"
- **AND** it SHALL show cards for Intimate, Classic, and Grand

### Requirement: FAQ section

The system SHALL render an FAQ section with at least three questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter signup, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show a newsletter signup with a Subscribe button

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Forever Always app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Forever Always — Wedding Template"
