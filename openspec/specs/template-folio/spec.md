# Template: Folio (Author & Writer Portfolio)

## Purpose

Folio is a single-page author/writer portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Mellisa"
personal author template, built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is an elegant author portfolio with a full-viewport hero,
author bio, book gallery, statistics counter section, and dark footer. Folio
follows the same structure and adds the repo's standard dark-mode toggle and
accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Mellisa" — free author portfolio template
  (source: https://colorlib.com/wp/template/mellisa/).
- **Live demo DOM analyzed:** `https://preview.colorlib.com/theme/mellisa/`
  (HTTP 200) + its stylesheet `css/style.css`.
- **Structure (1:1, section order):**
  1. Fixed-top Navbar: brand "Folio", nav links (Home, About, Books, News, Contact), dark-mode toggle.
  2. Full-viewport Hero: dark overlay on background image, subtitle "Read This If You Want To Take Great Photographs", massive Playfair Display heading with author name.
  3. Intro quote section: centered play button icon + author quote.
  4. About section: 2-column layout — image left, bio text right with "See More Works" CTA button.
  5. Books/Projects section: "Our Books" heading, 4-column grid of 8 book cards with image overlays and category labels.
  6. Statistics counter: parallax background, "Technical Statistics" heading, 4 stat items (Happy Readers, Awards, Books, Projects).
  7. Dark Footer: site name, about widget, contact widget, social links, Component Dock credit.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ffa62b** (golden/amber — nav scroll bg, hover states, accents)
  - Heading font: **"Playfair Display"** (serif, weight 700 for h1)
  - Body/UI font: **"Poppins"** (sans-serif, weights 300-700)
  - Footer heading font: **"EB Garamond"** (serif)
  - Dark bg: **#161616** (footer)
  - Dark text: **#111111**
  - Overlay: semi-transparent dark
  - Button: rounded, brand-colored primary
- **Recreation decisions:** repo-standard Navbar (site name, Home link, dark-mode toggle) + Footer chrome; hero with Playfair Display name; about split layout; book gallery 4-column grid; stat counters; dark footer with Component Dock link.

Folio lives in `apps/folio` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed-top navigation bar with the site name "Folio",
navigation links (Home, About, Books, News, Contact), and a dark-mode toggle.

#### Scenario: Navbar content

- **GIVEN** the Folio page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Folio" and navigation links
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element

### Requirement: Hero section

The system SHALL render a full-viewport hero section with a dark overlay on a
background image, a subtitle, and a large author name heading.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a subtitle text and a level-1 heading with the author name
- **AND** the heading SHALL use Playfair Display serif font at large size

### Requirement: Intro quote section

The system SHALL render a centered intro section with a play icon and a quote.

#### Scenario: Intro content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show a play icon and a quoted text about the author

### Requirement: About section

The system SHALL render a 2-column about section with an image and bio text.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show an author image on one side and bio text on the other
- **AND** it SHALL show a "See More Works" call-to-action button

### Requirement: Books gallery

The system SHALL render a books/projects section with a heading and a grid of
book cards.

#### Scenario: Books grid

- **GIVEN** the page is rendered
- **WHEN** the books section is displayed
- **THEN** it SHALL show a section heading "Our Books" or similar
- **AND** it SHALL display a grid of book cards (at least 4) with titles and category labels
- **AND** each card SHALL have an image background with overlay

### Requirement: Statistics counter

The system SHALL render a statistics section with numbered counters.

#### Scenario: Stats display

- **GIVEN** the page is rendered
- **WHEN** the statistics section is displayed
- **THEN** it SHALL show at least 3 stat items with numbers and labels
- **AND** the section SHALL have a parallax background image

### Requirement: Footer

The system SHALL render a dark footer with site name, widgets, and a Component Dock link.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Folio" and a tagline
- **AND** it SHALL show social links
- **AND** it SHALL link to https://www.componentdock.com/

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Folio app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar, Hero, Intro, About, Books, Stats, and Footer
- **AND** the document title SHALL be "Folio — Author Portfolio Template"
