# Template: Sierra (App Landing Page)

## Purpose

Sierra is a single-page startup landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Sierra"
website template design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sierra" — startup / business landing template
  (source: https://colorlib.com/wp/template/sierra/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/sierra/
  (HTTP 200, full rendered DOM + `css/style.css` (51KB) extracted).
  The TEMPLATES.md screenshot (`sierra-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About Us, Services, Portfolio,
  Blog, Contact) → Hero ("Choose a powerful design for your Start-up" +
  Get your freebie template now! + Discover) → Features ("Discover the
  features — We are young but bold" + Brand Identity, Online Marketing,
  Social Media + Read More) → Testimonials ("They are the best" + Chriss
  Turner, CEO Enterprise) → Portfolio → Blog → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **purple `#9b8aff`** with **blue `#6ebdfe`** and dark navy
    `#0b1033`.
  - Muted text `#7c8d93`.
  - Fonts: **"Open Sans"** + **"Roboto"** (Google Fonts).
  - Purple buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sierra-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Sierra lives in `apps/sierra` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Sierra",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Sierra page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Sierra" and links to Home, About, Services, Portfolio, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
"Discover" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Choose a powerful design for your Start-up"
- **AND** it SHALL show a "Discover" button

### Requirement: Features section

The system SHALL render a features section with a heading and three feature
cards, each with a title, a blurb, and a "Read More" link.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Discover the features"
- **AND** it SHALL show cards titled "Brand Identity", "Online Marketing", and "Social Media" with "Read More" links

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading, a quote, and
a reviewer.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a quote attributed to "Chriss Turner", CEO Enterprise

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

- **GIVEN** the Sierra app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Sierra — App Landing Template"
