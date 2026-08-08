# Template: Girder (Architecture Template)

## Purpose

Girder is a single-page architecture/construction landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Constructed" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Constructed" — architecture template
  (source: https://colorlib.com/wp/template/constructed/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/constructed/
  (HTTP 200, full rendered DOM + `css/style.css` extracted). The TEMPLATES.md
  screenshot (`constructed-free-template.jpg`) was also reviewed visually:
  split hero (photo left, text right), red accents, white/light-gray
  backgrounds.
- **Section order (1:1):** Navbar (logo + Home, Projects, Services, About,
  Contact Us + phone) → Hero (split: photo + "We Are Constructed", blurb,
  "See our projects" + "Watch our video" buttons) → Services ("Our Services"
  - 6 cards: Pre-Construction Services, General Construction, Expert
    Engineer, Design Build, Modeling, Industrial) → Recent Projects (gallery of
    6 + "See all portfolio") → Testimonials ("People Says", 4 quotes) → CTA
    banner ("The road of success is always under construction") → Footer
    (columns, social, copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **red `#eb1c24`** (buttons, "Welcome" eyebrow, "Learn more"
    links); hover `#ee3e45`.
  - Bootstrap dark `#212529` headings/text on `#f8f9fa` / `#e9ecef` light
    backgrounds.
  - Font: **"Roboto"** body / **"Montserrat"** display, Bootstrap system
    sans stack.
  - Solid red buttons with white text; outlined button for "Watch our video".
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/girder-<n>/<w>/<h>`); icons → lucide-react; Roboto +
  Montserrat via Google Fonts `<link>`; red primary in `@theme`; repo-standard
  Navbar (dark-mode toggle) + Footer chrome; no assets copied.

Girder lives in `apps/girder` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Girder",
anchor links to the page's sections, a phone number, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Girder page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Girder" and links to Home, Projects, Services, About, and Contact
- **AND** the navbar SHALL show a phone number
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user opens the mobile menu
- **THEN** a menu with the same links SHALL be shown
- **AND** the user SHALL be able to close it

### Requirement: Hero section

The system SHALL render a full-width split hero with an image, a headline,
a blurb, and two call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We Are Girder"
- **AND** it SHALL show a blurb
- **AND** it SHALL show a "See our projects" primary button
- **AND** it SHALL show a "Watch our video" secondary button
- **AND** it SHALL show a decorative hero image

### Requirement: Services section

The system SHALL render a services section with a heading and at least six
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Services"
- **AND** it SHALL show at least six service cards with titles (Pre-Construction Services, General Construction, Expert Engineer, Design Build, Modeling, Industrial), blurbs, and "Learn more" links

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Recent Projects"
- **AND** it SHALL show at least six project images with captions
- **AND** it SHALL show a "See all portfolio" link

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and quote
cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "People Says"
- **AND** it SHALL show at least four quotes with attributed names

### Requirement: CTA banner

The system SHALL render a call-to-action banner between the testimonials and
the footer.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA banner is displayed
- **THEN** it SHALL contain the heading "The road of success is always under construction"
- **AND** it SHALL show a call-to-action button

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (Facebook, X, LinkedIn, Instagram)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Girder app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Girder — Architecture Template"
