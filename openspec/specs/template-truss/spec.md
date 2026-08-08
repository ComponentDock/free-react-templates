# Template: Truss (Architecture Template)

## Purpose

Truss is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Kraft" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Kraft" — architecture template
  (source: https://colorlib.com/wp/template/kraft/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/kraft/
  (HTTP 200, full rendered DOM + `css/style.min.css` extracted). The
  TEMPLATES.md screenshot (`kraft-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, Services, Projects, About,
  Contact Us) → Hero ("Creates Smart Architecture." + INTRO label, stats
  25/159/298, overlapping photo stack) → Mission ("Architectures for
  Complex Projects") → Services ("Our Services" + Architect, Interior
  Design, Landscape Design, Consultancy — staggered 2×2 grid) →
  Testimonials (4-slide quote carousel, person avatars) → Projects
  ("Our Projects" + La Lega Stadium, France Building, 22 New Homes,
  Manage Center, Sports Hall — 3-column gallery with hover overlay) →
  Footer (About Truss. + Connect socials, Projects, Services, Contact +
  copyright).
- **Design tokens extracted from `css/style.min.css`:**
  - Primary **orange `#ff5200`** (buttons, links, active nav, stat
    numbers, logo dot); hover `#ff6014`.
  - Black `#000000` headings / white `#ffffff` sections; footer
    `background: #efefef`, muted text `#888`, subtext labels
    `#bfbfbf`.
  - Font: Bootstrap system sans stack (clean modern sans — recreated
    with Inter via Google Fonts).
  - Buttons: pill (30px radius), 11px bold uppercase, `#ff5200` fill;
    hero CTA is a 60×60 orange square with a white arrow.
  - Hero heading: 70px black bold; section headings 50px / 30px;
    small uppercase section labels (`subtext`): 11px `#bfbfbf` with
    wide letter-spacing.
  - Testimonial section background: `rgba(255,82,0,.02)` (very light
    orange tint).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/truss-<n>/<w>/<h>`); icons → lucide-react
  (+ inline SVG brand icons in the footer); Inter via Google Fonts; no
  assets copied. The nav "Dropdown" boilerplate menu is dropped in favor
  of the five meaningful anchor links.

Truss lives in `apps/truss` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Truss",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Truss page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Truss" and links to Home, Services, Projects, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, an intro label,
a call-to-action, and three stat counters.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Creates Smart Architecture."
- **AND** it SHALL show the INTRO label and a stat counter row with 25, 159, and 298

#### Scenario: Hero photo stack

- **GIVEN** the hero is displayed
- **WHEN** the user views the hero
- **THEN** it SHALL show two overlapping placeholder images

### Requirement: Mission section

The system SHALL render a mission section with a label, a heading, and a
read-more link.

#### Scenario: Mission content

- **GIVEN** the page is rendered
- **WHEN** the mission section is displayed
- **THEN** it SHALL contain a MISSION label and a heading "Architectures for Complex Projects"
- **AND** it SHALL show a blurb and a READ MORE link

### Requirement: Services section

The system SHALL render a services section with a heading and at least four
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Services"
- **AND** it SHALL show at least four service cards with titles (Architect, Interior Design, Landscape Design, Consultancy), blurbs, and READ MORE links

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with slide controls.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a quote, a person's name, and their role
- **AND** it SHALL provide controls to move between slides

#### Scenario: Slide navigation

- **GIVEN** the testimonials carousel is displayed
- **WHEN** the user presses the next control
- **THEN** a different slide SHALL be displayed

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Our Projects"
- **AND** it SHALL show at least three project images with captions including La Lega Stadium

### Requirement: Footer

The system SHALL render a footer with an about blurb, social links, link
columns, contact details, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Truss." blurb, social links (Facebook, X, LinkedIn, Instagram), a Projects column, a Services column, and contact details
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Truss app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Truss — Architecture Template"
