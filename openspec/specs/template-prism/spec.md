# Template: Prism (App Landing Page)

## Purpose

Prism is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Appli"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Appli" — app landing / personalization platform
  (source: https://colorlib.com/wp/template/appli/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/appli/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (55KB) extracted).
  The TEMPLATES.md screenshot (`appli-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and CSS
  tokens.
- **Section order (1:1):** Navbar (Home, Features, About, FAQ, Blog,
  Contact + Log in) → Hero ("Stay connected together in your own business
  network" + Get Started Now) → Split ("Finally focus on my marketing
  strategy and delegate") → Services (6 tiles: Design & creatives,
  Telecommunication, Restaurant, Programing, Architecture) → Split ("You
  have the power to personalize your website coding." + See how it work) →
  Split ("Personalized experiences are proven to increase conversions" +
  See how it work) → Testimonials (Amazing customer review: Robart Brown) →
  CTA ("Start finding your dream job" + Browse Job) → Footer (Our solutions,
  Company, Support, social, copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#404DFF`** — buttons, accents.
  - Dark navy `#1f2b7b`; light section backgrounds `#f9f9ff`, `#f0e9ff`.
  - Fonts: **"Raleway"** + **"Muli"** (Google Fonts).
  - Blue rounded buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/prism-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Prism lives in `apps/prism` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Prism",
anchor links to the page's sections, a "Log in" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Prism page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Prism" and links to Home, Features, About, FAQ, and Contact
- **AND** the navbar SHALL show a "Log in" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
"Get Started Now" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Stay connected together in your own business network"
- **AND** it SHALL show a supporting blurb and a "Get Started Now" button

### Requirement: Split sections

The system SHALL render at least two alternating text/image splits, each with
a heading, a blurb, and a "See how it work" button.

#### Scenario: Split content

- **GIVEN** the page is rendered
- **WHEN** a split section is displayed
- **THEN** it SHALL contain a heading and a blurb
- **AND** it SHALL show a "See how it work" button

### Requirement: Services section

The system SHALL render a services section with at least five tiles, each
with an icon, a title, and a description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show at least five service tiles, each with an icon, a title, and a description

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading, a customer
quote, and the customer's name.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Amazing customer review"
- **AND** it SHALL show a customer quote and the name "Robart Brown"

### Requirement: Call-to-action section

The system SHALL render a CTA section with a heading, a blurb, and a "Browse
Job" button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Start finding your dream job"
- **AND** it SHALL show a blurb and a "Browse Job" button

### Requirement: Footer

The system SHALL render a footer with an about blurb, link columns, social
links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Prism" and an about blurb
- **AND** it SHALL show link columns for solutions, company, and support
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Prism app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Prism — App Landing Template"
