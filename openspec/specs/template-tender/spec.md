# Template: Tender (Veterinary Services Landing)

## Purpose

Tender is a single-page veterinary / pet care services website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Petvet" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Petvet" — veterinary / pet care services
  (source: https://colorlib.com/wp/template/petvet/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/petvet/
  (HTTP 200, full rendered DOM + `css/style.css` (79KB, Bootstrap-based)
  extracted). The TEMPLATES.md screenshot (`petvet-free-template.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Groomers, Services, Blog,
  Pricing, Contact us + Free Consultation) → Hero ("The Kind of Care Your
  Pets Deserve" + Make An Appointment + phone) → Intro tiles (Veterinary
  Service, Pet Grooming, Pet Setting) → About/counters (We Are Best Agency
  For Your Pets: Qualified Groomer, Over 20 Years of Experienced, Animal
  Lover, Best Pet Care) → Groomers (Our Groomers: Lloyd Wilson, Rachel
  Parker, Ian Smith, Alicia Henderson) → Testimonials (happy Customers
  Says) → Pricing (Affordable Packages: Basic $49, Personal $79, Business
  $109, Exclusive $109) → Blog (Latest Blog Updates: 3 posts) → Appointment
  (Make An Appointment form: first name, last name, phone, date, time,
  service select) → Footer (Services, Links, Have a Questions?, social,
  copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **pink `#fd4c82`** — links, navbar brand, social hover,
    primary buttons.
  - Secondary **lime green `#91c235`** — `.btn-secondary`, scrolled navbar
    brand.
  - Font: **Roboto** (Google Fonts).
  - Light section background `#f8f9fa`; white cards.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/tender-<n>/<w>/<h>`); icons → lucide-react; counters →
  static stats; forms prevent default (no backend); no assets copied.

Tender lives in `apps/tender` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Tender",
anchor links to the page's sections, a "Free Consultation" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Tender page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Tender" and links to Home, About, Groomers, Services, Blog, Pricing, and Contact
- **AND** the navbar SHALL show a "Free Consultation" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, a "Make An
Appointment" button, and a phone number.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "The Kind of Care Your Pets Deserve"
- **AND** it SHALL show a supporting blurb, a "Make An Appointment" button, and a phone number

### Requirement: Services tiles

The system SHALL render three service tiles (Veterinary Service, Pet
Grooming, Pet Setting), each with an icon, a title, a description, and a
"Read more" link.

#### Scenario: Services tiles content

- **GIVEN** the page is rendered
- **WHEN** the services tiles are displayed
- **THEN** it SHALL show tiles titled Veterinary Service, Pet Grooming, and Pet Setting
- **AND** each tile SHALL have an icon, a description, and a "Read more" link

### Requirement: About section

The system SHALL render an about section with a kicker, a heading, a blurb,
and four stats (Qualified Groomer, Over 20 Years of Experienced, Animal
Lover, Best Pet Care).

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "We Are Best Agency For Your Pets"
- **AND** it SHALL show the stats Qualified Groomer, Over 20 Years of Experienced, Animal Lover, and Best Pet Care

### Requirement: Groomers section

The system SHALL render a "Our Groomers" section with four team members, each
with a photo, a name, and a role.

#### Scenario: Groomers content

- **GIVEN** the page is rendered
- **WHEN** the groomers section is displayed
- **THEN** it SHALL contain a heading "Our Groomers"
- **AND** it SHALL show four team members named Lloyd Wilson, Rachel Parker, Ian Smith, and Alicia Henderson

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and at least one
customer quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "happy Customers Says"
- **AND** it SHALL show a customer quote

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and four plans (Basic,
Personal, Business, Exclusive), each with a price, a feature list, and a "Get
Started" button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Affordable Packages"
- **AND** it SHALL show four plans: Basic, Personal, Business, and Exclusive, each with a price and a feature list
- **AND** each plan SHALL show a "Get Started" button

### Requirement: Blog section

The system SHALL render a blog section with a heading and three post cards,
each with an image, a title, a date, and a "Read more" link.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Latest Blog Updates"
- **AND** it SHALL show three post cards, each with a title, a date, and a "Read more" link

### Requirement: Appointment section

The system SHALL render an appointment section with a "Make An Appointment"
heading and a form (first name, last name, phone, date, time, service select)
with a submit button; submitting SHALL NOT navigate away.

#### Scenario: Appointment form content

- **GIVEN** the page is rendered
- **WHEN** the appointment section is displayed
- **THEN** it SHALL contain a heading "Make An Appointment"
- **AND** it SHALL show labeled inputs for first name, last name, phone, date, and time, plus a service select and a submit button

#### Scenario: Appointment form submit

- **GIVEN** the appointment form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (no backend)

### Requirement: Footer

The system SHALL render a footer with an about blurb, service links, quick
links, contact details, social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Tender" and an about blurb
- **AND** it SHALL show service links, quick links, and contact details (address, phone, email)
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Tender app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Tender — Veterinary Template"
