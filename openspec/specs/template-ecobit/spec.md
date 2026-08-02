# Template: Ecobit (App Landing Page)

## Purpose

Ecobit is a single-page app/business landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ecobit" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ecobit" — app / networking landing page
  (source: https://colorlib.com/wp/template/ecobit/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ecobit/
  (HTTP 200, full rendered DOM + `css/style.css` (160KB) extracted).
  The TEMPLATES.md screenshot (`ecobit-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, features, pricing, Blog, pages,
  Elements, Contact + sing up) → Hero ("Building Networks For People" +
  try for free) → Feature tiles (Fully Secured, Unique Design, A Volunteer)
  → Split ("Easy To Access Social Media" + learn more) → Split ("With
  efficiency to unlock more opportunities" + learn more) → Pricing ("Simple
  Pricing" + Standard $50.00 / Business $50.00 + Purchase Now) → Reviews →
  Subscribe → Clients → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#ff4800`** (buttons, accents).
  - Light section backgrounds `#f9f9ff`, `#f0e9ff`.
  - Fonts: **"Barlow Semi Condensed"** + **"Rajdhani"** (Google Fonts).
  - Orange buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/ecobit-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Ecobit lives in `apps/ecobit` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Ecobit",
anchor links to the page's sections, a "Sign up" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Ecobit page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Ecobit" and links to Home, Features, Pricing, and Contact
- **AND** the navbar SHALL show a "Sign up" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
"try for free" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Building Networks For People"
- **AND** it SHALL show a supporting blurb and a "try for free" button

### Requirement: Feature tiles

The system SHALL render three feature tiles: "Fully Secured", "Unique
Design", and "A Volunteer", each with an icon and a blurb.

#### Scenario: Feature tiles content

- **GIVEN** the page is rendered
- **WHEN** the feature tiles are displayed
- **THEN** it SHALL show tiles titled "Fully Secured", "Unique Design", and "A Volunteer"

### Requirement: Split sections

The system SHALL render two split sections with headings "Easy To Access
Social Media" and "With efficiency to unlock more opportunities", each with
a blurb and a "learn more" link.

#### Scenario: Split content

- **GIVEN** the page is rendered
- **WHEN** a split section is displayed
- **THEN** it SHALL contain one of the split headings
- **AND** it SHALL show a blurb and a "learn more" link

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and at least two
plans, each with a price and a purchase button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Simple Pricing"
- **AND** it SHALL show a "Standard" plan at $50.00/month and a "Business" plan, each with a feature list and a "Purchase Now" button

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

- **GIVEN** the Ecobit app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Ecobit — App Landing Template"
