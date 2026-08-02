# Template: Academix (Astro Template)

## Purpose

Academix is a single-page education/e-learning landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Academix" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Academix" — education template
  (source: https://colorlib.com/wp/template/academix/).
- **Demo DOM analyzed:** https://academix-colorlib.pages.dev/
  (HTTP 200; the classic preview URL `https://preview.colorlib.com/theme/academix/`
  returns 404 — the template's live demo is hosted on Cloudflare Pages per
  the ColorLib preview portal).
  The TEMPLATES.md screenshot (`academix-template-1770211029932.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (Courses, Categories, Instructors,
  Pricing, About, Sign in, Get Started) → Hero ("Forge Your Future with
  Expert-Led Courses" + CTA) → Course cards ("Complete Machine Learning &
  AI Bootcamp") → Categories ("Browse by Category" + Software
  Engineering, Creative Design, Digital Marketing, Data & Analytics,
  Cloud & DevOps, Leadership & Management, Cybersecurity) → Instructors →
  Pricing → Footer.
- **Design tokens extracted from the DOM:**
  - Light theme with `gray` neutrals; dark-mode aware (`dark:` classes);
    accent category colors (`red`, `pink`, `cyan`, `violet` tiles).
  - Fonts: **"DM Sans"** (body) + **"Space Grotesk"** (display) via
    Google Fonts.
  - Rounded cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/academix-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Academix lives in `apps/academix` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Academix",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Academix page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Academix" and links to Courses, Categories, and Pricing
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

### Requirement: Course cards

The system SHALL render a course listing with at least three course cards.

#### Scenario: Course cards content

- **GIVEN** the page is rendered
- **WHEN** the courses section is displayed
- **THEN** it SHALL show at least three course cards with titles, blurbs, and prices

### Requirement: Categories section

The system SHALL render a categories section with a heading and at least six
category cards.

#### Scenario: Categories content

- **GIVEN** the page is rendered
- **WHEN** the categories section is displayed
- **THEN** it SHALL contain a heading "Browse by Category"
- **AND** it SHALL show at least six category cards (Software Engineering, Creative Design, Digital Marketing, Data & Analytics, Cloud & DevOps, Cybersecurity)

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

- **GIVEN** the Academix app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Academix — Astro Template"
