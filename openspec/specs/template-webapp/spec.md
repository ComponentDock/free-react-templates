# Template: WebApp (App Landing Page)

## Purpose

WebApp is a single-page software/web-app landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "WebApp" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "WebApp" — web app / software marketing template
  (source: https://colorlib.com/wp/template/webapp/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/webapp/
  (HTTP 200, full rendered DOM + `css/style.css` (60KB) extracted).
  The TEMPLATES.md screenshot (`webapp-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, Features, Money Saving, Powerful
  Apps, Efficient Support, Innovative Technologies, Corporate Solutions,
  Pricing, Blog, Contact) → Hero ("Boost Productivity with WebApp" + blurb +
  Try it for free) → Features ("The Features" + Powerful Apps, Strategic
  Partners, Business in Mind, Innovative Technologies, Many Features, Easy
  to use, Safe secure and reliable) → More Features ("More Features" +
  Strategic Partners, Business in Mind) → Testimonials ("What People Says"
  - User Collaboration, Mobile Integration, Smart Analytics) → Pricing →
    Blog → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#fd7e14`** (buttons, accents).
  - Light backgrounds `#f8f9fa`, `#dee2e6`.
  - Font: **"Open Sans"** (Google Fonts) + icomoon icons.
  - Orange buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/webapp-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

WebApp lives in `apps/webapp` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "WebApp",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the WebApp page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "WebApp" and links to Home, Features, Pricing, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
"Try it for free" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Boost Productivity with WebApp"
- **AND** it SHALL show a supporting blurb and a "Try it for free" button

### Requirement: Features section

The system SHALL render a features section with a heading and at least six
feature tiles.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "The Features"
- **AND** it SHALL show tiles titled "Powerful Apps", "Strategic Partners", "Business in Mind", and "Innovative Technologies"

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and at least
three feature/testimonial cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What People Says"
- **AND** it SHALL show cards titled "User Collaboration", "Mobile Integration", and "Smart Analytics"

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

- **GIVEN** the WebApp app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "WebApp — App Landing Template"
