# Template: Pamper (Pet Care & Adoption Landing)

## Purpose

Pamper is a single-page pet care & adoption website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Leopet" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Leopet" — pet care & adoption charity
  (source: https://colorlib.com/wp/template/leopet/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/leopet/
  (HTTP 200, full rendered DOM + `css/style.css` (155KB) extracted). The
  TEMPLATES.md screenshot (`leopet-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and CSS
  tokens.
- **Section order (1:1):** Top bar (phone + Become a Volunteer) → Navbar
  (Home, About, Services, Gallery, Blog, Contact) → Hero (Welcome to Leopet
  kicker, "Give your pet Best Care" h1, Our Services CTA) → About ("We care
  your pet As you care" + About Us) → Services (We Provide Best Services:
  Pet Surgeries, Pet Adoption, Pet Care) → Adopt counter ("We need your help
  Adopt Us" + 590+ Pets Available, 300+ Happy Clients + Browse Now) →
  Testimonials (3 quotes by Jon Miller) → Volunteer (Become a Volunteer / To
  help them + read more) → Footer (Subscribe Newsletter, Menu, contact,
  Address, Opening Hour, social, copyright).
- **Design tokens extracted from `css/style.css`:**
  - Primary **teal `#53C9BB`** — `.btn_1`, accents, section highlights.
  - Hover/accent **coral `#FF5B5B`** — `.btn_1:hover`.
  - Font: **"Quicksand", sans-serif** (Google Fonts).
  - Light section background `#fbf9ff`; white rounded cards.
  - Buttons: uppercase, white text on teal; hover flips to coral.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/pamper-<n>/<w>/<h>`); icons → lucide-react; counters →
  static stats; forms prevent default (no backend); no assets copied.

Pamper lives in `apps/pamper` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Top bar

The system SHALL render a slim top bar above the navbar with a phone number
and a "Become a Volunteer" button.

#### Scenario: Top bar content

- **GIVEN** the Pamper page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show a phone number and a "Become a Volunteer" button

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Pamper",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Pamper page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Pamper" and links to Home, About, Services, Gallery, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a kicker, a headline, and an
"Our Services" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a kicker "Welcome to Pamper" and a level-1 heading "Give your pet Best Care"
- **AND** it SHALL show an "Our Services" button linking to the services section

### Requirement: About section

The system SHALL render an about section with a heading, a paragraph, an
image, and an "About Us" button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a level-2 heading "We care your pet As you care" and an image
- **AND** it SHALL show a supporting paragraph and an "About Us" button

### Requirement: Services section

The system SHALL render a services section with a heading and three service
cards, each with an icon, a title, and a description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "We Provide Best Services"
- **AND** it SHALL show three service cards titled Pet Surgeries, Pet Adoption, and Pet Care
- **AND** each card SHALL have an icon and a description

### Requirement: Adopt counters section

The system SHALL render an adopt section with a heading, two stat counters
with labels, and a "Browse Now" button.

#### Scenario: Adopt content

- **GIVEN** the page is rendered
- **WHEN** the adopt section is displayed
- **THEN** it SHALL contain a heading "We need your help Adopt Us"
- **AND** it SHALL show the stats "590+ Pets Available" and "300+ Happy Clients"
- **AND** it SHALL show a "Browse Now" button

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one customer
quote and its author.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a customer quote and the author's name

### Requirement: Volunteer section

The system SHALL render a volunteer section with a heading, a paragraph, an
image, and a "read more" link.

#### Scenario: Volunteer content

- **GIVEN** the page is rendered
- **WHEN** the volunteer section is displayed
- **THEN** it SHALL contain a heading "Become a Volunteer" and an image
- **AND** it SHALL show a supporting paragraph and a "read more" link

### Requirement: Footer

The system SHALL render a footer with a newsletter widget, menu links,
contact details, an address, opening hours, social links, and a copyright
line; submitting the newsletter SHALL NOT navigate away.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a "Subscribe Newsletter" widget with an email input and a subscribe button
- **AND** it SHALL show menu links, a phone number, an email, an address, and opening hours
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (no backend)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Pamper app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Pamper — Pet Care Template"
