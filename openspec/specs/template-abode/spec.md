# Template: Abode (Architecture Template)

## Purpose

Abode is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Belara" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Belara" — architecture template
  (source: https://colorlib.com/wp/template/belara/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/belara/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (76KB) extracted).
  The TEMPLATES.md screenshot (`belara-colorlib-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects, Why Us,
  Contact) → Hero slider ("Homeownership never looked so affordable" +
  "Play Reel" video link + hero footer strip) → About ("About Us" +
  Learn More) → Services ("What We Do?" + Commercial Architecture Design /
  Residential Architecture Design / Architecture Design cards) → Projects
  ("Projects" + "Casa la perla nera residential interior design" + Learn
  More) → Why Us ("Curating a workplace that inspires all of us") →
  Footer (Quick Links, Services, Newsletter + social).
- **Design tokens extracted from `assets/css/style.css`:**
  - Primary **gold `#D6A04C`** (buttons, accents); `#415094` (deep
    purple-blue) secondary.
  - Light backgrounds `#f9f9ff`, `#f0e9ff`, `#E9E3D9`.
  - Fonts: **"Questrial"** (display) + **"Cabin"** (body).
  - Gold buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/belara-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Abode lives in `apps/abode` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Abode",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Abode page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Abode" and links to Home, About, Services, Projects, Why Us, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Play Reel"
video link.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "Play Reel" button and a location label

### Requirement: About section

The system SHALL render an about section with a heading and a "Learn More"
button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "About Us"
- **AND** it SHALL show a description and a "Learn More" button

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What We Do?"
- **AND** it SHALL show at least three service cards with titles (Commercial
  Architecture Design, Residential Architecture Design, Architecture
  Design) and blurbs

### Requirement: Projects section

The system SHALL render a projects section with a heading and a featured
project.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Projects"
- **AND** it SHALL show a featured project image with a title and a "Learn
  More" button

### Requirement: Why Us section

The system SHALL render a "Why Us" section with a heading and reasons.

#### Scenario: Why Us content

- **GIVEN** the page is rendered
- **WHEN** the why-us section is displayed
- **THEN** it SHALL contain a heading "Curating a workplace that inspires all of us"
- **AND** it SHALL show at least two reason items

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter form,
social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Quick Links, Services) and a newsletter form
- **AND** it SHALL show social links (Facebook, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Abode app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Abode — Architecture Template"

## Verification checklist

- [ ] `npm run spec:validate`
- [ ] `bash scripts/verify-app.sh abode` (typecheck + lint + 100% coverage tests + build)
- [ ] Screenshot review: sections, order, gold brand, Questrial/Cabin fonts
