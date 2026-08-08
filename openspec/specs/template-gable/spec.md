# Template: Gable (Architecture Template)

## Purpose

Gable is a single-page architecture landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Kd" website
template design (source: https://colorlib.com/wp/template/kd/), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Kd" — architecture template
  (https://colorlib.com/wp/template/kd/). Recreated as **Gable** (new original
  name — a gable is a defining element of architecture, evoking the
  gold-on-dark craft aesthetic; the ColorLib source name "Kd" is never reused).
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/kd/`
  (HTTP 200, full rendered DOM + `css/style.css` extracted; TEMPLATES.md
  screenshot `kd-free-template.jpg` used for the visual pass).
- **Section order (1:1):**
  1. Navbar: logo + Home / Project / About / Services / Blog / Contact links
     - social icons (the original renders this as a left aside; the repo
       convention is a top sticky navbar, kept here).
  2. Hero: "Architects with need a different design" headline + supporting
     paragraph (right-aligned intro on light background).
  3. About: "About KD Architecture" heading over a full-bleed photo
     (video-hero in the original) + stat counters (18 Years of Experienced,
     351 Happy Clients, 564 Finished Projects, 300 Working Days) + three
     feature cards: Perfectly Design (idea icon), Carefully Planned (compass
     icon), Smartly Execute (layers icon).
  4. Projects: gallery of six project cards (Home Interior Design, Office
     Interior Design, Apartment Design, Office Interior Design, Dining Table,
     Apartment Design) + a "View All Projects" button.
  5. Footer: dark, columns (About/socials, Links, Archives, Have a
     Questions?) + copyright.
- **Design tokens extracted from `css/style.css`:**
  - Primary **gold `#ccb78f`** (accents, links, icon chips); dark
    `#000000` / `#212529` (hero, footer); light `#f8f9fa` (section
    backgrounds); muted `#6c757d`.
  - Fonts: **"Work Sans"** (display) + **"Poppins"** (body) — Google Fonts.
  - Gold accents on dark; rounded icon chips; dark footer.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/gable-<n>/<w>/<h>`); icons → lucide-react (Lightbulb,
  Compass, Layers); Work Sans + Poppins via Google Fonts `<link>`; no assets
  copied; forms prevent default (no backend).

Gable lives in `apps/gable` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Gable",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Gable page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Gable" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and supporting copy.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Architects with need a different design"
- **AND** it SHALL show a supporting paragraph

### Requirement: About section

The system SHALL render an about section with a heading, stat counters, and
at least three feature cards.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "About Gable Architecture"
- **AND** it SHALL show at least three feature cards (Perfectly Design, Carefully Planned, Smartly Execute) with blurbs

#### Scenario: Stat counters

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show at least three counters with a number and a label

### Requirement: Projects section

The system SHALL render a projects section with a project gallery and a
"View All Projects" button.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show at least three project images with captions (Home Interior Design, Office Interior Design, Apartment Design)
- **AND** it SHALL show a "View All Projects" button

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

- **GIVEN** the Gable app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Gable — Architecture Template"
