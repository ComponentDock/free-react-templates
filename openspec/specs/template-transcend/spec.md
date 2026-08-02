# Template: Transcend (App Landing Page)

## Purpose

Transcend is a single-page creative-studio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Transcend" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Transcend" — creative studio / digital experiences
  landing page (source: https://colorlib.com/wp/template/transcend/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/transcend/
  (HTTP 200, full rendered DOM + `css/main.css` (70KB) extracted).
  The TEMPLATES.md screenshot (`transcend-free-template-1.jpg`) is the
  visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens.
- **Section order (1:1):** Navbar (Transcend Studio + Home, About, Services,
  Works, Contact) → Hero ("Hello folks, we are Transcend Studio." + blurb +
  About / Services / Contact quick links + social + Scroll Down) → Who We
  Are ("Who We Are" + blurb + process: Define, Design, Build, Launch) →
  What We Do ("What We Do" + Brand Identity, Illustration, ...) → Works →
  Footer.
- **Design tokens extracted from `main.css`:**
  - Primary **magenta/pink `#cc147f`** (accents, buttons).
  - White/dark `#000` backgrounds; muted `#626262`.
  - Fonts: **"Domine"** (serif display) + **"Metropolis"** (sans body).
  - Pink accents with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/transcend-<n>/<w>/<h>`); icons → lucide-react;
  Domine/Metropolis approximated via Google Fonts (e.g. Domine + a modern
  sans); no assets copied.

Transcend lives in `apps/transcend` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Transcend",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Transcend page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Transcend" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and
quick links to About, Services, and Contact.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Hello folks, we are Transcend Studio."
- **AND** it SHALL show quick links for About, Services, and Contact

### Requirement: Who We Are section

The system SHALL render a "Who We Are" section with a heading, a blurb, and
four process steps: "Define", "Design", "Build", and "Launch".

#### Scenario: Who We Are content

- **GIVEN** the page is rendered
- **WHEN** the Who We Are section is displayed
- **THEN** it SHALL contain a heading "Who We Are"
- **AND** it SHALL show steps titled "Define", "Design", "Build", and "Launch" each with a blurb

### Requirement: What We Do section

The system SHALL render a "What We Do" section with a heading and at least
two service cards.

#### Scenario: What We Do content

- **GIVEN** the page is rendered
- **WHEN** the What We Do section is displayed
- **THEN** it SHALL contain a heading "What We Do"
- **AND** it SHALL show at least two service cards with titles and blurbs

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

- **GIVEN** the Transcend app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Transcend — App Landing Template"
