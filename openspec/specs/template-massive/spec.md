# Template: Massive (App Landing Page)

## Purpose

Massive is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Massive"
website template design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Massive" — Html5 app landing template
  (source: https://colorlib.com/wp/template/massive/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/massive/
  (HTTP 200, full rendered DOM + `style.css` (61KB) extracted).
  The TEMPLATES.md screenshot (`massive-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (SignUp, home, Features, App, Video,
  Screenshot, Team, Pricing, Contact) → Hero ("Welcome To Massive App
  Store." + Get App Now / Discover More) → Features ("welcome to app
  features" + Rapidiously monetize..., Premium Quality, Chat with love, 3d
  Display + Learn More) → App split ("all you want from app" + Awesome
  Beauty Camera, Live Chat Support, Retina Ready) → Video ("Description
  With Video" + Play The Video) → Work → Screenshots → Testimonials →
  Download → Team → Pricing → Contact → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **teal/cyan gradient `#00e2d9` → `#1193d4`** (with green/cyan
    accents `#81ee8e`, `#2deab6`, `#00d7f2`, `#00c9fd`).
  - Dark sections; sky-gray light sections (`sky-gray-bg`).
  - Fonts: **"Open Sans"** + **"Libre Baskerville"** (Google Fonts).
  - Gradient buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/massive-<n>/<w>/<h>`); icons → lucide-react; video
  button → styled play button; no assets copied.

Massive lives in `apps/massive` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Massive",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Massive page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Massive" and links to Home, Features, App, Video, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

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
- **THEN** it SHALL contain a level-1 heading "Welcome To Massive App Store."
- **AND** it SHALL show "Get App Now" and "Discover More" buttons

### Requirement: Features section

The system SHALL render a features section with a heading and four feature
tiles, each with an icon, a title, and a blurb.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "App Features"
- **AND** it SHALL show tiles titled "Premium Quality", "Chat with love", and "3d Display"

### Requirement: App split section

The system SHALL render an app split section with a heading and at least
three feature items.

#### Scenario: App split content

- **GIVEN** the page is rendered
- **WHEN** the app split section is displayed
- **THEN** it SHALL contain a heading "All you want from app"
- **AND** it SHALL show items titled "Awesome Beauty Camera", "Live Chat Support", and "Retina Ready"

### Requirement: Video section

The system SHALL render a video section with a heading and a play button.

#### Scenario: Video content

- **GIVEN** the page is rendered
- **WHEN** the video section is displayed
- **THEN** it SHALL contain a heading "Description With Video"
- **AND** it SHALL show a "Play The Video" button

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

- **GIVEN** the Massive app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Massive — App Landing Template"
