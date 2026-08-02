# Template: Interior Design (Architecture Template)

## Purpose

Interior Design is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Interior Design" website template design (see
TEMPLATES.md), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Interior Design" — free interior decorating
  website template for architects and interior designers
  (source: https://colorlib.com/wp/template/interior-design/).
- **Live preview UNREACHABLE:** `https://preview.colorlib.com/theme/interior-design/`
  returned HTTP 404. Per `docs/replication.md`, the design is reconstructed
  from the TEMPLATES.md screenshot (`interiordesign-free-template.jpg`,
  reachable) as the sole visual reference.
- **Design reference (from screenshot):** a classic interior-design
  marketing landing — top navigation with logo and menu links, a hero with
  a headline + CTA button over a light background, service/feature cards
  with icons, a project gallery, and a dark footer with link columns.
  Typical ColorLib architecture-landing layout with a warm accent color.
- **Recreation decisions:** standard landing structure (Navbar → Hero →
  Services → Projects → Footer); photos → seeded picsum placeholders
  (`picsum.photos/seed/interiordesign-<n>/<w>/<h>`); icons → lucide-react;
  forms prevent default (no backend); no assets copied.

Interior Design lives in `apps/interior-design` and uses shared components
from `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Interior
Design", anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Interior Design page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Interior Design" and links to Home, About, Services, and Contact
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
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a CTA button

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show at least three service cards with titles and blurbs

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show at least three project images with captions

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

- **GIVEN** the Interior Design app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Interior Design — Architecture Template"
