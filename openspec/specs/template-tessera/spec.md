# Template: Tessera (Architecture Firm Template)

## Purpose

Tessera is a single-page architecture firm website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Mosaic" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Mosaic" — architecture firm template
  (source: https://colorlib.com/wp/template/mosaic/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/mosaic/
  (HTTP 200, full rendered DOM + `css/style.css` extracted; screenshot
  `mosaic-free-template.jpg` used as the visual reference).
- **Section order (1:1):** Navbar (Mosaic brand + Home, About, Project,
  Services, Team, Blog, Contact) → Hero slider (2 slides: "Architecture
  Firm / We Love Modern Designs" and "Since - 2018 / We Create Amazing
  Architecture Designs", both with the Duden river copy + "View our works"
  button) → About ("About" eyebrow, "We are the best Interior, Exterior &
  Architecture Firm" + copy + read-more link, image left) → Counter band
  (Years of Experienced / Happy Clients / Finished Projects / Working Days)
  → Our Work Flow (Perfectly Design, Carefully Planned, Smartly Execute) →
  Services (Design, Industrial Design, Architecture Support, Renovation) →
  Featured Projects (filter tabs All Work / Interior / Exterior / Landscape
  - 8 project cards) → Testimony ("Our satisfied customer says" carousel,
    Garreth Smith — CEO) → Team ("Our Architect Team": John Wilson
    Co-Founder/CEO, David Smith Architect ×3) → Recent Blog (3 posts with
    date/admin/comments meta) → Clients (7 text logos) → Footer (brand blurb,
    Links + Services columns, Newsletter widget, copyright bar).
- **Design tokens extracted from `css/style.css`:**
  - Primary **blue `#0033c7`** (service icon circles — 26 refs); Bootstrap
    action blue `#007bff` (buttons, hover `#0069d9`); light blue tint
    `#e1e8ff`; text `#212529`; muted `#6c757d`; light `#f8f9fa`; footer
    background dark `#141313`.
  - Font: Poppins (Google Fonts link in `index.html`).
  - Hero: 750px tall, background image + dark overlay, centered text;
    subheading is uppercase with 2px letter-spacing; buttons are blue with
    rounded corners; services icons sit in 100px blue circles; section
    padding 7em (~py-28); footer is dark (`#141313`) with white headings.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/tessera-<n>/<w>/<h>`); icons → lucide-react
  (PencilRuler, Factory, HardHat, Hammer, PenTool, ClipboardList, Rocket,
  ChevronLeft/Right, Calendar, User, MessageSquare); brand icons → inline
  SVG (BrandIcon); no assets copied. The slider auto-advances (6s) with
  prev/next buttons and dot indicators. The project filter tabs are
  functional (All Work / Interior / Exterior / Landscape). Blog/Team/Contact
  nav links point to the page top (the original links to separate pages not
  part of this single-page recreation).

Tessera lives in `apps/tessera` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navbar with the site name "Tessera", anchor links
to the page's sections, a dark-mode toggle, and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Tessera page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Tessera"
- **AND** it SHALL show links to Home, About, Project, Services, Team,
  Blog, and Contact

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle label SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the mobile menu
- **THEN** the menu SHALL list every nav link
- **AND** the user SHALL be able to close the menu

### Requirement: Hero slider

The system SHALL render a two-slide hero slider that auto-advances and
supports manual navigation.

#### Scenario: First slide content

- **GIVEN** the page is rendered
- **WHEN** the hero loads
- **THEN** it SHALL show the subheading "Architecture Firm", the heading
  "We Love Modern Designs", a supporting paragraph, and a "View our works"
  button

#### Scenario: Second slide content

- **GIVEN** the first slide is displayed
- **WHEN** the user advances the slider
- **THEN** it SHALL show the subheading "Since - 2018" and the heading
  "We Create Amazing Architecture Designs"

#### Scenario: Slider navigation

- **GIVEN** any slide is displayed
- **WHEN** the user presses the next or previous button, or a dot indicator
- **THEN** the slider SHALL show the corresponding slide

### Requirement: About section

The system SHALL render an about section with an image, an "About" eyebrow,
a headline, a supporting paragraph, and a read-more link.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the eyebrow "About"
- **AND** it SHALL show the heading "We are the best Interior, Exterior &
  Architecture Firm"
- **AND** it SHALL show a read-more link

### Requirement: Stats band

The system SHALL render a stats band with four counters and labels.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show values for Years of Experience, Happy Clients,
  Finished Projects, and Working Days
- **AND** each stat SHALL carry its label

### Requirement: Work flow

The system SHALL render a work flow section with three steps.

#### Scenario: Work flow content

- **GIVEN** the page is rendered
- **WHEN** the work flow section is displayed
- **THEN** it SHALL show the heading "Our Work Flow"
- **AND** it SHALL show the steps "Perfectly Design", "Carefully Planned",
  and "Smartly Execute"

### Requirement: Services

The system SHALL render a services section with four services, each with an
icon and a description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services"
- **AND** it SHALL show the services Design, Industrial Design,
  Architecture Support, and Renovation

### Requirement: Featured projects

The system SHALL render a projects section with filter tabs and a grid of
eight project cards.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show the heading "Featured Projects"
- **AND** it SHALL show eight project cards, each with a title and a
  category

#### Scenario: Project filtering

- **GIVEN** the projects section is displayed
- **WHEN** the user presses the Exterior or Landscape filter tab
- **THEN** the grid SHALL show only projects of that category
- **AND** pressing "All Work" SHALL restore all eight projects

### Requirement: Testimonials

The system SHALL render a testimonials carousel with quotes and navigation.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Our satisfied customer says"
- **AND** it SHALL show a quote with the author "Garreth Smith" and a role

#### Scenario: Testimonials navigation

- **GIVEN** a testimonial is displayed
- **WHEN** the user advances the carousel
- **THEN** a different testimonial SHALL be displayed

### Requirement: Team

The system SHALL render a team section with three members.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Architect Team"
- **AND** it SHALL show the member "John Wilson" with the role
  "Co-Founder / CEO"
- **AND** it SHALL show at least two "David Smith" members with the role
  "Architect"

### Requirement: Blog

The system SHALL render a blog section with three recent posts.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Blog"
- **AND** it SHALL show three posts, each with a date, an author, a comment
  count, and a title

### Requirement: Clients

The system SHALL render a clients strip with seven client logos.

#### Scenario: Clients content

- **GIVEN** the page is rendered
- **WHEN** the clients section is displayed
- **THEN** it SHALL show the heading "Our Clients"
- **AND** it SHALL show seven client logo items

### Requirement: Footer

The system SHALL render a footer with a brand blurb, Links and Services
columns, a newsletter form, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand name "Tessera" and a blurb
- **AND** it SHALL show a "Links" column with Home, About, Services,
  Projects, and Contact
- **AND** it SHALL show a "Services" column with Architectural Design,
  Interior Design, Exterior Design, Lighting Design, and AutoCAD Service
- **AND** it SHALL show a "Newsletter" heading with an email form
- **AND** it SHALL show a copyright line

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an invalid email address
- **THEN** the form SHALL show an error message
- **AND** it SHALL NOT submit

#### Scenario: Newsletter success

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits a valid email address
- **THEN** the form SHALL show a success message

### Requirement: Page composition

The system SHALL compose all sections in a single page with landmarks and a
document title.

#### Scenario: Full page render

- **GIVEN** the Tessera app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the
  page sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Tessera — Architecture Template"
