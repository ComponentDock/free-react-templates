# Template: Facet (Architecture Template)

## Purpose

Facet is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Square" website template design (source:
https://colorlib.com/wp/template/square/), built under a different name
(**Facet**) with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Square" — architecture template
  (source: https://colorlib.com/wp/template/square/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/square/
  (HTTP 200, full rendered DOM + `css/style.css` extracted, 54 KB + 76 KB).
  The TEMPLATES.md screenshot (`square-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Projects, Team, Blog,
  Contact + "Request a quote") → Hero ("We have a passion in creating new
  and unique spaces" + "Travel to the any corner of the world, without
  going around in circles") → Services (Perfectly Design, Carefully
  Planned, Smartly Execute) → CTA ("Be Part of our Business" + "Request A
  Quote") → Stats ("Since we started work in 1980" + Years of experience,
  Project Done, Our Architect, Happy Customers) → Projects ("Our Projects"
  - Office Interior Design gallery) → Team ("Behind those Beautiful Works"
  - Lloyd Wilson, Rachel Parker, Ian Smith, Alicia Henderson, Jacob Bolton)
    → Blog ("Read Our Stories" + "Why Lead Generation is Key for Business
    Growth") → Contact ("Contact Us" + address/phone/email) → Footer (Links,
    Services, "Have a Questions?" + copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **green `#2e9e5b`** (55 refs — buttons, accents) +
    **yellow `#fdb72c`** (21 refs).
  - Dark `#000000`, `#212529`; light `#f8f9fa`.
  - Fonts: **"Rubik"** (display) + system sans (body).
  - Green buttons with white text; yellow hover accents.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/facet-<n>/<w>/<h>`); icons → lucide-react; brand
  icons → inline SVG (BrandIcon); Rubik via Google Fonts `<link>`; no
  assets copied.

Facet lives in `apps/facet` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Facet",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Facet page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Facet" and links to Home, About, Projects, Team, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, subtext, and
action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We have a passion in creating new and unique spaces"
- **AND** it SHALL show a "Request a quote" button

### Requirement: Services section

The system SHALL render a services section with at least three feature
cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show at least three feature cards (Perfectly Design, Carefully Planned, Smartly Execute) with blurbs

### Requirement: Call to action

The system SHALL render a call-to-action band with a "Request A Quote"
button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the call-to-action section is displayed
- **THEN** it SHALL show a "Be Part of our Business" heading
- **AND** it SHALL show a "Request A Quote" button

### Requirement: Stats section

The system SHALL render a stats section with a heading and counters.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats section is displayed
- **THEN** it SHALL show a heading "Since we started work in 1980"
- **AND** it SHALL show at least four stat counters (Years of experience, Project Done, Our Architect, Happy Customers)

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Our Projects"
- **AND** it SHALL show at least three project images with captions

### Requirement: Team section

The system SHALL render a team section with a heading and member cards.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show a heading "Behind those Beautiful Works"
- **AND** it SHALL show at least three team members with names (Lloyd Wilson, Rachel Parker, Ian Smith)

### Requirement: Blog section

The system SHALL render a blog section with a heading and blog post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show a heading "Read Our Stories"
- **AND** it SHALL show at least three blog posts with titles

### Requirement: Contact section

The system SHALL render a contact section with a heading and contact
details.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show a heading "Contact Us"
- **AND** it SHALL show contact details (address, phone, email)

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

- **GIVEN** the Facet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Facet — Architecture Template"
