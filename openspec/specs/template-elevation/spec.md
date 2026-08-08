# Template: Elevation (Architecture Template)

## Purpose

Elevation is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Buildarch" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Buildarch" — architecture template
  (source: https://colorlib.com/wp/template/buildarch/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/buildarch/
  (HTTP 200; `index.html` full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`buildarch-free-template.jpg`) shows the hero:
  a moody city-skyline photo behind a centered white content box with an
  offset white frame, black bold uppercase "PRECISE CONCEPT" headline, and a
  lime "Get Started" button; transparent navbar with white logo + white links.
- **Section order (1:1, from the live DOM):** Navbar (Home, About Us,
  Services, Pages dropdown, Blog, Contact) → Hero ("Precise concept" +
  blurb + Get Started) → Concept (left image, right black panel with
  "Precise concept design for stylish living") → Features (3× "Architecture"
  items + right image) → Fun Facts ("CAREER OVERVIEW" / "Quick Facts" +
  596 / 552 / 1009 / 435 counters) → Testimonials (Fanny Spencer quote,
  white card on photo background) → Recent Projects (4-image gallery with
  hover overlay + expand icon) → Clients Logo strip → Footer (centered
  Newsletter + email input, copyright, social icons).
- **Design tokens extracted from `css/style.css`:**
  - Primary **lime `#a7cb00`** (`.main_btn`, `.banner_btn` backgrounds,
    feature icons, link hovers).
  - Yellow `#f8b600` (secondary accent); star rating `#ffc000`.
  - Light background `#f9f9ff`; body text `#777777`; headings `#000`.
  - Footer background `#000410`.
  - Buttons: `padding: 0 40px`, `line-height: 48px`, `border: 1px solid
#a7cb00`, `border-radius: 5px`, white 14px/600 text; hover = transparent
    bg + lime text.
  - Fonts: **"Roboto"** (body + headings) with **"Heebo"** (base/display)
    from Google Fonts (`@import` in style.css).
  - Section titles: centered, eyebrow `<p>` uppercase with
    `letter-spacing: 2.4px` in `#777777`, `<h2>` 36px uppercase black.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/elevation-<n>/<w>/<h>`); icons → lucide-react +
  inline-SVG brand icons; no assets copied. Navbar carries the repo-standard
  dark-mode toggle.

Elevation lives in `apps/elevation` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Elevation",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Elevation page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Elevation" and links to Home, About Us, Services, and Projects
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Precise Concept"
- **AND** it SHALL show a blurb and a "Get Started" button

### Requirement: Concept section

The system SHALL render a concept section with an image and a text panel
containing a heading, a blurb, and a "More About Us" button.

#### Scenario: Concept content

- **GIVEN** the page is rendered
- **WHEN** the concept section is displayed
- **THEN** it SHALL show a heading "Precise Concept Design for Stylish Living"
- **AND** it SHALL show a blurb and a "More About Us" button

### Requirement: Features section

The system SHALL render a features section with at least three feature items,
each with an icon, a title, and a blurb.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show at least three items titled "Architecture"
- **AND** each item SHALL have a blurb

### Requirement: Fun facts section

The system SHALL render a fun facts band with a section title and at least
four stat counters.

#### Scenario: Fun facts content

- **GIVEN** the page is rendered
- **WHEN** the fun facts section is displayed
- **THEN** it SHALL show the heading "Quick Facts"
- **AND** it SHALL show counters 596, 552, 1009, and 435 with labels

### Requirement: Testimonials section

The system SHALL render a testimonial section with a quote, a star rating,
and an author.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show a quote and an author name "Fanny Spencer"

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Recent Projects"
- **AND** it SHALL show at least three project images with captions

### Requirement: Clients logo strip

The system SHALL render a client logo strip with at least four client names.

#### Scenario: Clients logo content

- **GIVEN** the page is rendered
- **WHEN** the clients logo section is displayed
- **THEN** it SHALL show at least four client names

### Requirement: Footer

The system SHALL render a footer with a newsletter form, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a newsletter heading, an email input, and a subscribe button
- **AND** it SHALL show social links (Facebook, X, LinkedIn, Instagram) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Elevation app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Elevation — Architecture Template"
