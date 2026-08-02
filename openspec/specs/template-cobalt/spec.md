# Template: Cobalt (App Landing Page)

## Purpose

Cobalt is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "AppLab"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "AppLab" — app landing page
  (source: https://colorlib.com/wp/template/applab/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/applab/
  (HTTP 200, full rendered DOM + `css/style.css` (155KB) extracted). The
  TEMPLATES.md screenshot (`applab-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and CSS
  tokens.
- **Section order (1:1):** Navbar (Home, Features, Pricing, Blog, Contact +
  Download) → Hero (Promote your app with applab + Get Start Now) → Feature
  split (Save your time to using applab) → Feature split (Manage team in
  One Place) → Feature split (All-powerful Pointing has no control) → How it
  works (01 Sign Up for free, 02 Make your profile, 03 Enjoy the app) →
  Features band (Features that give you real feel + Download Now) → Easy
  setup split (Easy setup and management) → Testimonials (Review from our
  regular users: Robert Smile) → Pricing (Unlock full Power: Basic $06,
  Team $06, Business $06) → CTA band (Get start from now and increase
  productivity) → Footer (Services, Useful Links, Downloads, social,
  copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#ff5e13`** — buttons, accents, highlights.
  - Font: **"Poppins", sans-serif** (Google Fonts).
  - Light section backgrounds `#f9f9ff`, `#f0e9ff`; dark text `#2C2C2C`;
    orange rounded buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/cobalt-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Cobalt lives in `apps/cobalt` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Cobalt",
anchor links to the page's sections, a "Download" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Cobalt page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Cobalt" and links to Home, Features, Pricing, and Contact
- **AND** the navbar SHALL show a "Download" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a subheadline, and
a "Get Start Now" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Promote your app with Cobalt"
- **AND** it SHALL show a supporting subheadline and a "Get Start Now" button

### Requirement: Feature split sections

The system SHALL render at least two alternating feature splits, each with a
two-line heading, an image, and a description.

#### Scenario: Feature split content

- **GIVEN** the page is rendered
- **WHEN** a feature split is displayed
- **THEN** it SHALL contain a heading, an image, and a description

### Requirement: How-it-works section

The system SHALL render three numbered steps (Sign Up for free, Make your
profile, Enjoy the app), each with a number, a title, and a description.

#### Scenario: Steps content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL show steps numbered 01, 02, and 03 titled Sign Up for free, Make your profile, and Enjoy the app
- **AND** each step SHALL have a description

### Requirement: Features band

The system SHALL render a features band with a heading, a blurb, and a
"Download Now" button.

#### Scenario: Features band content

- **GIVEN** the page is rendered
- **WHEN** the features band is displayed
- **THEN** it SHALL contain a heading "Features that give you real feel"
- **AND** it SHALL show a blurb and a "Download Now" button

### Requirement: Easy setup section

The system SHALL render an easy-setup split with a heading, three check
bullets, and a "Download Now" button.

#### Scenario: Easy setup content

- **GIVEN** the page is rendered
- **WHEN** the easy setup section is displayed
- **THEN** it SHALL contain a heading "Easy setup and management"
- **AND** it SHALL show at least three check bullets and a "Download Now" button

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading, a customer
quote, and the customer's name.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Review from our regular users"
- **AND** it SHALL show a customer quote and the name "Robert Smile"

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and three plans
(Basic, Team, Business), each with a price, a feature list, and a "Get Now"
button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Unlock full Power"
- **AND** it SHALL show three plans: Basic, Team, and Business, each with a price and a feature list
- **AND** each plan SHALL show a "Get Now" button

### Requirement: Call-to-action band

The system SHALL render a CTA band with a heading.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a heading "Get start from now and increase productivity"

### Requirement: Footer

The system SHALL render a footer with an about blurb, service links, useful
links, download links, social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Cobalt" and an about blurb
- **AND** it SHALL show service links, useful links, and download links
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Cobalt app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Cobalt — App Landing Template"
