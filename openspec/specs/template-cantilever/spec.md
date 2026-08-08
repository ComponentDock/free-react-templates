# Template: Cantilever (Architecture Template)

## Purpose

Cantilever is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Maxitechture" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Maxitechture" — architecture template
  (source: https://colorlib.com/wp/template/maxitechture/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/maxitechture/
  (HTTP 200, full rendered DOM + `css/style.css` extracted; screenshot
  `maxitechture-free-template.jpg` is the visual reference).
- **Section order (1:1):** Navbar (Home, About, Work, Services, Blog,
  Contact) → Hero ("Precise concept design for stylish living" + Get
  Started) → Welcome/About ("Welcome to Maxitecture" + "Precise concept
  design for unique stylish living alone" + More About Us) → Services
  ("What we offer to our clients" + Architecture, Interior Design, Concept
  Design) → Projects ("Our Recent Completed Projects" + Nest Protect
  gallery) → Testimonials ("What Customer Say About Us" + Mark Alviro
  Wiens carousel) → Client logos strip → Blog ("Recent From Our Blog" +
  post cards with Travel/Life style tags) → Footer (About Me, Newsletter,
  Follow Me).
- **Design tokens extracted from `style.css`:**
  - Primary **lime `#a7cb00`** (45 refs — buttons, accents, tags); dark
    `#222222` (42 refs); body text `#777777` (20 refs).
  - Light section backgrounds `#f9f9ff`; white content cards.
  - Fonts: **"Roboto"** (body) + **"Heebo"** (display), Google Fonts via
    `<link>`.
  - Lime buttons with white text, rounded corners.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/cantilever-<n>/<w>/<h>`); icons → lucide-react;
  brand icons → inline SVG (BrandIcon); no assets copied. Newsletter form
  is a controlled form (demo only).

Cantilever lives in `apps/cantilever` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Cantilever", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Cantilever page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Cantilever" and links to Home, About, Work, Services, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the mobile menu
- **THEN** the menu SHALL list every nav link
- **AND** the user SHALL be able to close the menu

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Get
Started" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Precise concept design for stylish living"
- **AND** it SHALL show a "Get Started" button

### Requirement: Welcome (About) section

The system SHALL render a welcome section with a small eyebrow heading, a
headline, a sub-heading, and a "More About Us" button.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL show the eyebrow "Welcome to Cantilever"
- **AND** it SHALL show the headline "Precise concept design for stylish living"
- **AND** it SHALL show the sub-heading "Precise concept design for unique stylish living alone"
- **AND** it SHALL show a "More About Us" button

### Requirement: Services section

The system SHALL render a services section with a heading and at least
three service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What we offer to our clients"
- **AND** it SHALL show three service cards titled Architecture, Interior Design, and Concept Design, each with a blurb and a "View Details" link

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Our Recent Completed Projects"
- **AND** it SHALL show at least six project cards with images, captions, and "View Details" links

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and a
rotating quote carousel.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Customer Say About Us"
- **AND** it SHALL show a quote with an author name (Mark Alviro Wiens) and a star rating
- **AND** the user SHALL be able to navigate between quotes with previous/next controls and dots

### Requirement: Client logos section

The system SHALL render a client logos strip.

#### Scenario: Client logos content

- **GIVEN** the page is rendered
- **WHEN** the client logos section is displayed
- **THEN** it SHALL show at least four client logo names

### Requirement: Blog section

The system SHALL render a blog section with a heading and at least three
post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Recent From Our Blog"
- **AND** it SHALL show at least three post cards, each with a tag, a title, an excerpt, and a date

### Requirement: Footer

The system SHALL render a footer with an About Me column, a Newsletter
form, social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "About Me", "Newsletter", and "Follow Me" columns
- **AND** it SHALL show social links (Facebook, X, Instagram, LinkedIn)
- **AND** submitting the newsletter form SHALL clear the input without a page reload
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Cantilever app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Cantilever — Architecture Template"
