# Template: Mosh (App Landing Page)

## Purpose

Mosh is a single-page creative-business landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Mosh" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Mosh" — creative business template
  (source: https://colorlib.com/wp/template/mosh/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/mosh/
  (HTTP 200, full rendered DOM + `style.css` (33KB) extracted).
  The TEMPLATES.md screenshot (`mosh-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About Us, Services, Portfolio,
  Blog, Contact + Login / Register) → Hero ("A Clean and Modern Template" +
  Get your freebie template now!) → Numbered highlights (01. No1 in Sales!
  ... 06. Modern Design + Discover More) → Clients ("clients / All our
  clients love our work") → Services ("What you get if you start your
  business with us" + Development, Design, SEO) → Feature cards (No1 in
  Sales!, Documentation inside, Modern Design, Marketing Strategist) →
  Portfolio ("Our Work / See our Online Portfolio") → Workflow ("This is
  how we work on Projects" + numbered steps) → Call-to-action ("give us a
  shout / Are you Ready to have a Talk?" + Contact Us) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#4a7aec`** with light blue `#a2baff`.
  - Dark text `#211b31`, `#404551`; light gray backgrounds.
  - Font: **"Roboto"** (Google Fonts).
  - Blue buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/mosh-<n>/<w>/<h>`); icons → lucide-react; no assets
  copied.

Mosh lives in `apps/mosh` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Mosh",
anchor links to the page's sections, a "Login" link, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Mosh page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Mosh" and links to Home, About, Services, Portfolio, and Contact
- **AND** the navbar SHALL show a "Login" link and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Get your
freebie template now!" call-to-action.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "A Clean and Modern Template"
- **AND** it SHALL show a "Get your freebie template now!" call-to-action

### Requirement: Highlights section

The system SHALL render a highlights section with at least four numbered
items.

#### Scenario: Highlights content

- **GIVEN** the page is rendered
- **WHEN** the highlights section is displayed
- **THEN** it SHALL show numbered items including "No1 in Sales!", "Online Marketing", and "Modern Design"

### Requirement: Clients section

The system SHALL render a clients section with a heading and a row of client
logos.

#### Scenario: Clients content

- **GIVEN** the page is rendered
- **WHEN** the clients section is displayed
- **THEN** it SHALL contain a heading "All our clients love our work"
- **AND** it SHALL show at least four client logo images

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service items.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What you get if you start your business with us"
- **AND** it SHALL show services titled "Development", "Design", and "SEO"

### Requirement: Feature cards section

The system SHALL render a feature-cards section with at least three cards
titled with value propositions.

#### Scenario: Feature cards content

- **GIVEN** the page is rendered
- **WHEN** the feature cards section is displayed
- **THEN** it SHALL show cards titled "No1 in Sales!", "Documentation inside", and "Modern Design"

### Requirement: Portfolio section

The system SHALL render a portfolio section with a heading and a grid of
project cards.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL contain a heading "See our Online Portfolio"
- **AND** it SHALL show at least four project cards with images

### Requirement: Workflow section

The system SHALL render a workflow section with a heading and four steps.

#### Scenario: Workflow content

- **GIVEN** the page is rendered
- **WHEN** the workflow section is displayed
- **THEN** it SHALL contain a heading "This is how we work on Projects"
- **AND** it SHALL show four steps including "This is the first step"

### Requirement: Call-to-action section

The system SHALL render a call-to-action band with a heading and a "Contact
Us" button.

#### Scenario: Call-to-action content

- **GIVEN** the page is rendered
- **WHEN** the call-to-action section is displayed
- **THEN** it SHALL contain a heading "Are you Ready to have a Talk?"
- **AND** it SHALL show a "Contact Us" button

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

- **GIVEN** the Mosh app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Mosh — App Landing Template"
