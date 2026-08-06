# Template: Racks (App Landing Page)

## Purpose

Racks is a single-page services/portfolio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Racks" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Racks" — Free Bootstrap 4 services template
  (source: https://colorlib.com/wp/template/racks/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/racks/
  (HTTP 200, full rendered DOM + `css/style.css` (68KB) extracted).
  The TEMPLATES.md screenshot (`racks-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Solution, Portfolio, Blog,
  Contact) → Hero ("I love to" + blurb + Watch Video) → Services ("Our
  Services — Racks provides a fully featured text services platform!" +
  Unlimited Features, Multiple Functions, Advanced Visualizations,
  Community & Supports) → CTA ("Turn every channel into a revenue channel
  and drive business growth" + View more details) → Works ("Recent Works" +
  Illustration, Application, Web Design) → Testimonials ("Customer Says —
  Our satisfied customer says" + Dennis Green) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **cyan `#78d5ef`** with **pink `#ee76ad`** accent.
  - Dark text `#404044`, `#212529`; muted `#6c757d`.
  - Font: **"Work Sans"** (Google Fonts).
  - Cyan buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/racks-<n>/<w>/<h>`); icons → lucide-react; video
  button → styled play button; no assets copied.

Racks lives in `apps/racks` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Racks",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Racks page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Racks" and links to Home, About, Portfolio, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
"Watch Video" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "I love to"
- **AND** it SHALL show a supporting blurb and a "Watch Video" button

### Requirement: Services section

The system SHALL render a services section with a heading and four service
cards, each with an icon, a title, and a blurb.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Racks provides a fully featured text services platform!"
- **AND** it SHALL show cards titled "Unlimited Features", "Multiple Functions", "Advanced Visualizations", and "Community & Supports"

### Requirement: Works section

The system SHALL render a works section with a heading and at least three
project cards.

#### Scenario: Works content

- **GIVEN** the page is rendered
- **WHEN** the works section is displayed
- **THEN** it SHALL contain a heading "Recent Works"
- **AND** it SHALL show at least three project cards with titles and blurbs

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading, a quote, and
a reviewer.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Our satisfied customer says"
- **AND** it SHALL show a quote from "Dennis Green"

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

- **GIVEN** the Racks app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Racks — App Landing Template"
