# Template: Modelo (Model Management Landing)

## Purpose

Modelo is a single-page model-management template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Modelo"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a dark model-agency page: a header with logo + nav (Home,
About us, Models, News, Contact), a hero ("Modelo.Model Management"), a
"See the Models." gallery, and a "Model of the week." spotlight. Modelo
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Modelo" — free model management website template
  (source: https://colorlib.com/wp/template/modelo/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/modelo/`
  (HTTP 200, 21.3KB) + stylesheet `styles/main_styles.css` (22.5KB). The
  rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`modelo-free-template.jpg`) confirms the visual design (dark page,
  purple accents).
- **Section order (1:1):**
  1. Header (`header`): logo + nav (Home, About us, Models, News,
     Contact).
  2. Hero: "Modelo.Model Management" headline.
  3. Models gallery: "See the Models." + model tiles.
  4. Spotlight: "Model of the week." feature.
  5. Footer (`footer`): brand + link columns.
- **Design tokens extracted from `styles/main_styles.css`:**
  - Brand color: **#690772** (purple — accents, highlights) on dark
    **#121212** backgrounds; white text; gray **#a4a4a4** secondary.
  - Font: Helvetica Neue LT Pro (Bd/Md) — recreated with a modern sans
    (e.g. "Poppins") via Google Fonts; "Roboto" fallback.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo + headline;
  models gallery with seeded photo tiles; spotlight feature; footer with
  link columns; all images picsum-seeded (`picsum.photos/seed/modelo-N/w/h`);
  Google Fonts via `<link>`.

Modelo lives in `apps/modelo` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Modelo", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Modelo page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Modelo" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Welcome hero

The system SHALL render a full-width hero section with a headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Modelo.Model Management")

### Requirement: Models gallery

The system SHALL render a "See the Models." gallery with at least six model
tiles.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the models gallery is displayed
- **THEN** it SHALL show the heading "See the Models."
- **AND** it SHALL render at least six model tiles

### Requirement: Model of the week

The system SHALL render a "Model of the week." spotlight section.

#### Scenario: Spotlight content

- **GIVEN** the page is rendered
- **WHEN** the spotlight section is displayed
- **THEN** it SHALL show the heading "Model of the week."

### Requirement: Footer

The system SHALL render a footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Modelo"
- **AND** it SHALL show link columns
