# Template: Mint (Architecture & Interior Design Template)

## Purpose

Mint is a single-page interior design landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Interior Design" website template design (source:
https://colorlib.com/wp/template/interior-design/), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Interior Design" — free interior decorating
  website template for architects and interior designers
  (https://colorlib.com/wp/template/interior-design/).
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/interiordesign/`
  (the preview slug is `interiordesign`, not `interior-design` — the latter
  returns 404; the prep notes recorded it as unreachable, but the real
  preview is HTTP 200 with the full rendered DOM + `css/style.css`
  extracted). Screenshot (`interiordesign-free-template.jpg`) viewed for the
  visual pass.
- **Section order (1:1):**
  1. Navbar: "Interior" logo + Home / About / Services / Projects / Blog /
     Contact links.
  2. Hero: "Experience Interior Design" headline + CTA button over a
     full-bleed interior photo with a teal overlay.
  3. Services: "What we offer" — Interior Architecture, Interior Design,
     Furniture cards.
  4. Why Us: FAQ-style numbered items ("What Should I Do If My Interior
     Broken?", "What Is Your Location?", "Robus Building", "What Is Your
     Main Services?").
  5. Testimonials: four quotes (Cloe Marena, Nathalie Channie, Will Turner,
     Nicolas Stainer).
  6. Works: Pool Decor, Seat Decor, Intuitive Idea, Decorations gallery.
  7. Blog Posts: "Architecture is ready to take the world to the next
     level" cards.
  8. Footer: Navigation + Recent News columns, social links, copyright.
- **Design tokens extracted from `css/style.css`:**
  - Primary **teal `#98ccd3`** (buttons, accents, overlays); dark
    `#212529` / `#343a40`; light `#edf0f5` / `#f8f9fa`.
  - Font: **"Nunito Sans"** (Google Fonts).
  - Teal buttons with dark text; rounded card corners; dark footer.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/mint-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Mint lives in `apps/mint` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Mint",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Mint page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Mint" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Experience Interior Design"
- **AND** it SHALL show a CTA button

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What we offer"
- **AND** it SHALL show at least three service cards with titles (Interior Architecture, Interior Design, Furniture) and blurbs

### Requirement: Why Us section

The system SHALL render a "Why Us" section with at least three numbered
FAQ items.

#### Scenario: Why Us content

- **GIVEN** the page is rendered
- **WHEN** the why-us section is displayed
- **THEN** it SHALL contain a heading "Why Us"
- **AND** it SHALL show at least three FAQ items with questions

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three client
quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Testimonials"
- **AND** it SHALL show at least three quotes with author names

### Requirement: Works section

The system SHALL render a works gallery with a heading and at least three
project images with captions.

#### Scenario: Works content

- **GIVEN** the page is rendered
- **WHEN** the works section is displayed
- **THEN** it SHALL show at least three project images with captions

### Requirement: Blog section

The system SHALL render a blog section with a heading and at least three
post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Our Blog Posts"
- **AND** it SHALL show at least three post cards with titles

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

- **GIVEN** the Mint app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Mint — Architecture & Interior Design Template"
