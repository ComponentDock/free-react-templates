# Template: Arlo (Portfolio Template)

## Purpose

Arlo is a single-page portfolio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Alex Rivera" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Alex Rivera" — personal portfolio template
  (source: https://colorlib.com/wp/template/alex-rivera/).
- **Demo DOM analyzed:** https://alexrivera-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/alex-rivera/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`alexrivera-template-1771943723675.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (About, Skills, Projects, Experience,
  Contact) → Hero ("I design & build digital experiences") → About ("About
  Me") → Expertise ("My Expertise" + Frontend, Backend, Design) → Featured
  Work ("Featured Work" + E-commerce Platform, Design System, Analytics
  Dashboard, Mobile Fitness App) → Experience ("Career Journey") →
  Testimonials ("What Clients Say") → FAQ ("Frequently Asked Questions") →
  Contact ("Let's Work Together") → Footer.
- **Design tokens extracted from the DOM:**
  - Light theme with gray neutrals and **yellow** accents (`yellow-400`);
    dark-mode aware.
  - Fonts: **"Inter"** (body) + **"Space Grotesk"** (display) via Google
    Fonts.
  - Rounded cards, pill badges.
- **Recreation decisions:** no assets copied; icons → lucide-react
  (brand icons GitHub/X/LinkedIn → inline SVGs); Google Fonts via `<link>`;
  yellow accent in `@theme`.

Arlo lives in `apps/arlo` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Arlo",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Arlo page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Arlo" and links to About, Projects, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a blurb.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a blurb

### Requirement: About section

The system SHALL render an about section with a heading and at least two
paragraphs.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "About Me"
- **AND** it SHALL show at least two paragraphs of biography copy

### Requirement: Expertise section

The system SHALL render an expertise section with a heading and at least
three skill cards.

#### Scenario: Expertise content

- **GIVEN** the page is rendered
- **WHEN** the expertise section is displayed
- **THEN** it SHALL contain a heading "My Expertise"
- **AND** it SHALL show at least three skill cards (Frontend, Backend, Design) with blurbs

### Requirement: Featured work section

The system SHALL render a featured work section with a heading and at least
three project cards.

#### Scenario: Featured work content

- **GIVEN** the page is rendered
- **WHEN** the featured work section is displayed
- **THEN** it SHALL contain a heading "Featured Work"
- **AND** it SHALL show at least three project cards (E-commerce Platform, Design System, Analytics Dashboard) with titles and blurbs

### Requirement: Experience section

The system SHALL render a career timeline section with a heading and at
least three roles.

#### Scenario: Experience content

- **GIVEN** the page is rendered
- **WHEN** the experience section is displayed
- **THEN** it SHALL contain a heading "Career Journey"
- **AND** it SHALL show at least three roles with titles and companies

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and at least
three client quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Clients Say"
- **AND** it SHALL show at least three testimonials with names and roles

### Requirement: FAQ section

The system SHALL render an FAQ section with a heading and at least three
expandable questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three questions that expand to reveal answers

### Requirement: Contact section

The system SHALL render a contact section with a heading, contact details,
and a message form.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Let's Work Together"
- **AND** it SHALL show contact details and a form with name, email, and message fields

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

- **GIVEN** the Arlo app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Arlo — Portfolio Template"
