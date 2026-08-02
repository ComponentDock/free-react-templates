# Template: Unapp (App Landing Page)

## Purpose

Unapp is a single-page app/template-builder landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Unapp" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Unapp" — app / template-builder landing page
  (source: https://colorlib.com/wp/template/unapp/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/unapp/
  (HTTP 200, full rendered DOM + `css/style.css` (38KB) extracted).
  The TEMPLATES.md screenshot (`unapp-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, Works, Services, Blog, About,
  Shop, Contact) → Hero ("Take on your biggest projects and goals with
  Unapp's high quality features" + Get premium) → Feature tiles (Automatic
  Backup Data, Page Builder, Create your own template) → Split
  ("Collaborate with your design team in a new way" + Real template
  creation) → Steps (Start collaborating / Finish template creation) →
  Stats (satisfaction, preset options, response time) → Blog ("News from
  our Blog" + Building the Mention Sales Application on Unapp x3) → Trust
  ("Already trusted by over 10,000 users") → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#499bea`** with **indigo `#798eea`** and **green
    `#4aca85`** accents.
  - Dark text `#303133`.
  - Fonts: **"Nunito"** + **"Poppins"** (Google Fonts).
  - Blue rounded buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/unapp-<n>/<w>/<h>`); icons → lucide-react; no assets
  copied.

Unapp lives in `apps/unapp` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Unapp",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Unapp page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Unapp" and links to Home, Works, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Get
premium" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Take on your biggest projects and goals with Unapp's high quality features"
- **AND** it SHALL show a "Get premium" button

### Requirement: Feature tiles

The system SHALL render three feature tiles: "Automatic Backup Data", "Page
Builder", and "Create your own template", each with a blurb.

#### Scenario: Feature tiles content

- **GIVEN** the page is rendered
- **WHEN** the feature tiles are displayed
- **THEN** it SHALL show tiles titled "Automatic Backup Data", "Page Builder", and "Create your own template"

### Requirement: Split section

The system SHALL render a split section with the heading "Collaborate with
your design team in a new way" and a "Real template creation" feature.

#### Scenario: Split content

- **GIVEN** the page is rendered
- **WHEN** the split section is displayed
- **THEN** it SHALL contain the heading "Collaborate with your design team in a new way"
- **AND** it SHALL show a "Real template creation" feature with a blurb

### Requirement: Blog section

The system SHALL render a blog section with a heading and at least three
post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "News from our Blog"
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

- **GIVEN** the Unapp app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Unapp — App Landing Template"
