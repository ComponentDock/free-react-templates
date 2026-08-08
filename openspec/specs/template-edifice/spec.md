# Template: Edifice (Construction Template)

## Purpose

Edifice is a single-page construction/building landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Construction" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Construction" — construction website template
  (source: https://colorlib.com/wp/template/construction/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/construction/
  (HTTP 200, full rendered DOM + `css/main.css` extracted). The TEMPLATES.md
  screenshot (`construction-free-construction-website-template.jpg`) was also
  reviewed visually: full-width banner hero with dark photo overlay and
  yellow accents, light sections, stat counters band.
- **Section order (1:1):** Navbar (logo + Home, Feature, Project, Service,
  Blog, Contact + phone) → Banner hero (eyebrow "Discover the Colorful
  World", h1 "Build Your Dream", blurb, "Discover Now" button) → Features
  (id `feature`, 3 "Building Drawings" cards) → Projects ("Alex Complex for
  residence" gallery of 6) → Facts band (stat counters 2536/6784/1059/2239)
  → Services ("Some Features that Made us Unique" + subline + 3 cards:
  Basic & Common Repairs, Brake Repairs & Services, Preventive Maintenance)
  → Testimonials ("Why we are the best", quote slider) → Latest Blog ("Latest
  From Blog", 3 post cards) → Footer (columns, social, copyright).
- **Design tokens extracted from `css/main.css`:**
  - Primary **yellow `#fab700`** (buttons, accents, overline labels);
    hover `#e6a500`.
  - Dark text `#222222`; light backgrounds `#f9f9ff`.
  - Font: **"Poppins"** (Google Fonts `<link>`).
  - Solid yellow buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/edifice-<n>/<w>/<h>`); icons → lucide-react; Poppins
  via Google Fonts; forms prevent default (no backend); yellow primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome; no
  assets copied.

Edifice lives in `apps/edifice` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Edifice",
anchor links to the page's sections, a phone number, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Edifice page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Edifice" and links to Home, Feature, Project, Service, Blog, and Contact
- **AND** the navbar SHALL show a phone number
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user opens the mobile menu
- **THEN** a menu with the same links SHALL be shown
- **AND** the user SHALL be able to close it (via the close button or by clicking a link)

### Requirement: Hero section

The system SHALL render a full-width banner hero with an eyebrow label, a
headline, a blurb, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the eyebrow "Discover the Colorful World"
- **AND** it SHALL contain a level-1 heading "Build Your Dream"
- **AND** it SHALL show a blurb
- **AND** it SHALL show a "Discover Now" primary button

### Requirement: Features section

The system SHALL render a features section with three feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show at least three cards titled "Building Drawings" with blurbs

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Alex Complex for residence"
- **AND** it SHALL show at least six project images with captions

### Requirement: Facts band

The system SHALL render a stats band with counters and labels.

#### Scenario: Facts content

- **GIVEN** the page is rendered
- **WHEN** the facts band is displayed
- **THEN** it SHALL show at least four stat counters (Projects Completed, Happy Clients, Expert Workers, Awards Won)

### Requirement: Services section

The system SHALL render a services section with a heading, a subline, and
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Some Features that Made us Unique"
- **AND** it SHALL show the subline "Who are in extremely love with eco friendly system."
- **AND** it SHALL show three service cards (Basic & Common Repairs, Brake Repairs & Services, Preventive Maintenance)

### Requirement: Testimonials section

The system SHALL render a testimonials section with a quote slider.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Why we are the best"
- **AND** it SHALL show one quote at a time with an author name
- **AND** the user SHALL be able to move to the next and previous quotes (wrapping around)

### Requirement: Blog section

The system SHALL render a latest-blog section with post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Latest From Blog"
- **AND** it SHALL show at least three post cards with titles and dates

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (Facebook, X, LinkedIn, Instagram)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Edifice app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Edifice — Construction Template"
