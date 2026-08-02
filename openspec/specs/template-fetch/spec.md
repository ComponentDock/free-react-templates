# Template: Fetch (Dog Care Landing)

## Purpose

Fetch is a single-page dog care website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Dogger"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Dogger" — free dog/pet care website template
  (source: https://colorlib.com/wp/template/dogger/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/dogger/ (HTTP 200;
  full rendered DOM + `css/style.css` extracted).
- **Section order (1:1):** Navbar → Hero ("We Care For Your Dog") → Welcome +
  3 icon tiles (Love & Care, Fearsome, Beautiful) → About Us → Our Trainers
  (3, sage background) → Pricing Table (Basic $47 / Premium $250 /
  Professional, "Buy Now") → FAQ (4 accordion items) → Happy Customers (4
  testimonials) → Photo Gallery (1 large + 6 small) → Dogger Blog (4 posts) →
  Our Services (6, SVG icons) → Contact (form: first/last name, email,
  subject, message; + Contact Us info) → Footer (About blurb, Quick Links,
  Follow Us, Newsletter, copyright).
- **Design tokens extracted from `css/style.css`:**
  - Sage primary `#a2c0be` (buttons, trainers section background, active
    states); button hover → black.
  - Dark teal `#405a58` (headings on sage) and `#567876` (text on sage).
  - Hero: black 900-weight uppercase h1 (4rem), gray `#999999` subtext, light
    `#f8f9fa` background.
  - Footer: `#333333` background, `#737373` body text, `#999999` links
    (white hover), white headings.
  - Fonts: Open Sans (headings + body) with Vollkorn serif accents (Google
    Fonts `<link>`).
  - Buttons: 43px tall, 4px radius, .8rem uppercase-ish text, 8px 20px
    padding.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/fetch-<n>/<w>/<h>`); feature/service icons →
  lucide-react; footer brand icons → inline SVG; forms prevent default (no
  backend); no assets copied.

Fetch lives in `apps/fetch` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Fetch", anchor
links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Fetch page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Fetch" and links to Home, About, Trainers, Pricing, FAQ, Testimonials, Gallery, Blog, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a light hero with a large headline, a supporting
subtext, and a dog photo placeholder.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We Care For Your Dog"
- **AND** it SHALL show the subtext about providing the best services
- **AND** it SHALL show a dog photo placeholder image

### Requirement: Welcome section with feature tiles

The system SHALL render a welcome section with a heading, a blurb, and three
feature tiles (Love & Care, Fearsome, Beautiful), each with an icon, a title,
and a short description.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL contain a level-2 heading "Welcome to Fetch Pet Care"
- **AND** it SHALL show three feature tiles titled Love & Care, Fearsome, and Beautiful
- **AND** each tile SHALL have an icon and a description

### Requirement: About section

The system SHALL render an "About Us" section with a heading and descriptive
copy.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a level-2 heading "About Us" and a descriptive paragraph

### Requirement: Trainers section

The system SHALL render a trainers section on a sage background with a heading
and three trainer cards, each with a photo placeholder, a name, a role, and a
short bio.

#### Scenario: Trainers content

- **GIVEN** the page is rendered
- **WHEN** the trainers section is displayed
- **THEN** it SHALL contain a level-2 heading "Our Trainers"
- **AND** it SHALL show three trainer cards named Jessica White, Valerie Elash, and Alicia Jones
- **AND** each card SHALL have a photo placeholder and a bio

### Requirement: Pricing section

The system SHALL render a pricing table with a heading and three plan cards
(Basic, Premium, Professional), each with a price, a list of features, and a
"Buy Now" button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a level-2 heading "Pricing Table"
- **AND** it SHALL show three plans named Basic, Premium, and Professional
- **AND** each plan SHALL show a price, feature list, and a "Buy Now" button

### Requirement: FAQ section

The system SHALL render a "Frequently Ask Questions" section with a heading and
at least four expandable questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a level-2 heading "Frequently Ask Questions"
- **AND** it SHALL show at least four questions as expandable items

#### Scenario: FAQ expand/collapse

- **GIVEN** an FAQ question is displayed
- **WHEN** the user activates the question button
- **THEN** the answer SHALL become visible
- **AND** activating the button again SHALL hide the answer

### Requirement: Testimonials section

The system SHALL render a "Happy Customers" section with a heading and at
least four testimonial cards, each with a quote and a customer name.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a level-2 heading "Happy Customers"
- **AND** it SHALL show four testimonials by Ricky Fisher, Ken Davis, Mellisa Griffin, and Robert Steward

### Requirement: Gallery section

The system SHALL render a "Photo Gallery" section with a heading and a grid of
dog photo placeholders.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a level-2 heading "Photo Gallery"
- **AND** it SHALL show at least seven photo placeholders in a grid

### Requirement: Blog section

The system SHALL render a "Dogger Blog"-style blog section with a heading and
four post cards, each with a title and a date.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a level-2 heading "Fetch Blog"
- **AND** it SHALL show four posts, each with a title and a publication date

### Requirement: Services section

The system SHALL render an "Our Services" section with a heading and six
service items, each with an icon, a title, and a description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a level-2 heading "Our Services"
- **AND** it SHALL show six services: Dog Checkup, Dog Dermatology, For Strong Teeth, Dog First Aid, Dog Dryer, and Expert Veterinarian
- **AND** each service SHALL have an icon and a description

### Requirement: Contact section

The system SHALL render a contact section with a form (first name, last name,
email, subject, message) and contact details (address, phone, email).

#### Scenario: Contact form content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a level-2 heading "Contact Form"
- **AND** it SHALL show labeled inputs for first name, last name, email, and subject, plus a message textarea
- **AND** it SHALL show a "Send Message" submit button

#### Scenario: Contact form submit

- **GIVEN** the contact form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (no backend)

#### Scenario: Contact details

- **GIVEN** the contact section is displayed
- **THEN** it SHALL show an address, a phone number, and an email address

### Requirement: Footer

The system SHALL render a dark footer with an about blurb, quick links, a
newsletter form, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Fetch" and an about blurb
- **AND** it SHALL show quick links (About, Trainers, Services, Testimonials, Contact)
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

#### Scenario: Newsletter submit

- **GIVEN** the footer newsletter form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (no backend)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Fetch app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Fetch — Dog Care Template"
