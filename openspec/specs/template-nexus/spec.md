# Template: Nexus (App Landing Page)

## Purpose

Nexus is a single-page SaaS landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Nexus"
website template design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Nexus" — SaaS software landing page
  (source: https://colorlib.com/wp/template/nexus/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/nexus/
  (HTTP 200, full rendered DOM + `css/style.css` (66KB) extracted).
  The TEMPLATES.md screenshot (`nexus-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Pages, Pricing,
  Blog, Contact + Free Trial) → Hero ("Mass People Oriented Software" + Get
  Started / Download) → How It Works ("How It work for you" + Stunning
  Visuals x3: Easy to use, Unlimited Colors, Unique Features) → CTA splits
  ("We've made a life that will change you" + Get Started Now x4) →
  Screenshots ("Unique Screens that work perfectly") → Pricing → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#3bacf0`** with **cyan `#62ddff`** and deep blue
    `#4dabff`; yellow `#f8b600` accent.
  - Dark sections `#222222`; light `#f9f9ff`.
  - Fonts: **"Heebo"** + **"Roboto"** (Google Fonts).
  - Blue buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/nexus-<n>/<w>/<h>`); icons → lucide-react; no assets
  copied.

Nexus lives in `apps/nexus` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Nexus",
anchor links to the page's sections, a "Free Trial" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Nexus page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Nexus" and links to Home, About, Services, Pricing, and Contact
- **AND** the navbar SHALL show a "Free Trial" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and two
buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Mass People Oriented Software"
- **AND** it SHALL show "Get Started" and "Download" buttons

### Requirement: How-it-works section

The system SHALL render a how-it-works section with a heading and three
feature tiles.

#### Scenario: How-it-works content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "How It work for you"
- **AND** it SHALL show tiles titled "Easy to use", "Unlimited Colors", and "Unique Features"

### Requirement: CTA splits

The system SHALL render at least two CTA splits with the heading "We've made
a life that will change you", a blurb, and a "Get Started Now" button.

#### Scenario: CTA split content

- **GIVEN** the page is rendered
- **WHEN** a CTA split is displayed
- **THEN** it SHALL contain the heading "We've made a life that will change you"
- **AND** it SHALL show a blurb and a "Get Started Now" button

### Requirement: Screenshots section

The system SHALL render a screenshots section with a heading and a row of
screenshot placeholder images.

#### Scenario: Screenshots content

- **GIVEN** the page is rendered
- **WHEN** the screenshots section is displayed
- **THEN** it SHALL contain a heading "Unique Screens that work perfectly"
- **AND** it SHALL show at least three screenshot placeholder images

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

- **GIVEN** the Nexus app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Nexus — App Landing Template"
