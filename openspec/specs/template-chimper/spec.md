# Template: Chimper (App Landing Page)

## Purpose

Chimper is a single-page agency/marketing landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Chimper" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Chimper" — web agency website template
  (source: https://colorlib.com/wp/template/chimper/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/chimper/
  (HTTP 200, full rendered DOM + `css/style.css` (22KB) extracted).
  The TEMPLATES.md screenshot (`chimper-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Top bar (Phone: +1 292 3293 4238, Email:
  info@yourdomain.com) → Navbar (Home, Work, Services: Web Applications /
  WordPress Dev / Mobile Applications / eCommerce, About, Blog, Contact) →
  Hero ("We Are Expert in / We Make Beautiful Things" + Hire Us) →
  Welcome ("Welcome To Chimper An Awward Winning Web Agency" + 4 services:
  Web Design, Branding & Identity, Art Direction, Copywriting + Read More) →
  Values (01. Our Values / 02. Our Mission / 03. Our Philosophy) → Featured
  Projects (Project Name 1 Web Application, Project Name 2 Branding,
  Project Name 3 Website + Show All Works) → Testimonials (4 quotes: John
  Smith, Christine Aguilar, Robert Spears, Bruce Rogers) → Blog (Create
  Beautiful Website In Less Than An Hour — Ham Brook / James Phelps +
  Continue Reading...) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **indigo/navy `#0d0cb5`** (buttons, links, accents).
  - Light section backgrounds `#edf0f5`, `#f4f5f9`; dark text `#25262a`.
  - Font: **"Quicksand"** (Google Fonts).
  - Rounded indigo buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/chimper-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Chimper lives in `apps/chimper` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Chimper",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Chimper page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Chimper" and links to Home, Work, Services, About, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Hire Us"
button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We Are Expert in" and "We Make Beautiful Things"
- **AND** it SHALL show a "Hire Us" button

### Requirement: Services section

The system SHALL render a services section with a heading and four service
cards, each with an icon, a title, a blurb, and a "Read More" link.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Welcome To Chimper An Awward Winning Web Agency"
- **AND** it SHALL show cards titled "Web Design", "Branding & Identity", "Art Direction", and "Copywriting", each with a "Read More" link

### Requirement: Values section

The system SHALL render a values section with three numbered items.

#### Scenario: Values content

- **GIVEN** the page is rendered
- **WHEN** the values section is displayed
- **THEN** it SHALL show items numbered 01, 02, and 03 titled "Our Values", "Our Mission", and "Our Philosophy"

### Requirement: Featured projects section

The system SHALL render a featured projects section with a heading, three
project cards, and a "Show All Works" button.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the featured projects section is displayed
- **THEN** it SHALL contain a heading "Featured Projects"
- **AND** it SHALL show at least three project cards and a "Show All Works" button

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show quotes attributed to "John Smith", "Christine Aguilar", and "Robert Spears"

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

- **GIVEN** the Chimper app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Chimper — App Landing Template"
