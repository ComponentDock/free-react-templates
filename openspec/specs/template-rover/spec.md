# Template: Rover (Dog Care Landing)

## Purpose

Rover is a single-page dog care website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "DogLife"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "DogLife" — free dog/pet care website template
  (source: https://colorlib.com/wp/template/doglife/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/doglife/ (HTTP 200;
  full rendered DOM + `css/style.css` extracted).
- **Section order (1:1):** Navbar → Hero ("We Love Dogs" + "Get In Touch"
  button) → Welcome + 2 icon tiles (Happy Pets, Modern Equipment) + photos →
  Meet Jean Smith (featured veterinarian) → Pricing Table (Basic $50 /
  Premium / Professional, "Buy Now") → FAQ (4 accordion items) → Happy
  Customers (4 testimonials) → Blog (4 posts) → Our Services (6, icons) →
  Contact (form: first/last name, email, subject, message; + Contact Us
  info) → Footer (About blurb, Quick Links, Follow Us, Newsletter,
  copyright). No gallery section.
- **Design tokens extracted from `css/style.css`:**
  - Primary deep red `#9c2c2c` (buttons, active states, accents).
  - Hero: black uppercase 900-weight h1, gray `#999999` subtext, light
    `#f8f9fa` background.
  - Footer: `#333333` background, `#737373` body text, `#999999` links
    (white hover), white headings.
  - Fonts: Open Sans (headings + body) with Vollkorn serif accents (Google
    Fonts `<link>`).
  - Buttons: 43px tall, 4px radius, .8rem text, 8px 20px padding.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/rover-<n>/<w>/<h>`); feature/service icons →
  lucide-react; footer brand icons → inline SVG; forms prevent default (no
  backend); no assets copied.

Rover lives in `apps/rover` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Rover", anchor
links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Rover page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Rover" and links to Home, About, Doctor, Pricing, Blog, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a light hero with a large headline, a supporting
subtext, a "Get In Touch" button, and a dog photo placeholder.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We Love Dogs"
- **AND** it SHALL show a supporting subtext and a "Get In Touch" button
- **AND** it SHALL show a dog photo placeholder image

### Requirement: Welcome section with feature tiles

The system SHALL render a welcome section with a heading, a blurb, two feature
tiles (Happy Pets, Modern Equipment), each with an icon and description, and
two dog photo placeholders.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL contain a level-2 heading "Welcome To Our Website"
- **AND** it SHALL show two feature tiles titled Happy Pets and Modern Equipment
- **AND** each tile SHALL have an icon and a description
- **AND** it SHALL show two dog photo placeholders

### Requirement: Featured veterinarian section

The system SHALL render a trainer section on a light background featuring a
single veterinarian with a photo, name, role, and biography.

#### Scenario: Veterinarian content

- **GIVEN** the page is rendered
- **WHEN** the trainer section is displayed
- **THEN** it SHALL contain a heading naming the veterinarian (Jean Smith) and the role "Our Dog Veterinarian"
- **AND** it SHALL show a photo placeholder and a biography paragraph

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

### Requirement: Blog section

The system SHALL render a blog section with a heading and four post cards,
each with a title and a date.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a level-2 heading "Rover Blog"
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
- **THEN** it SHALL show the site name "Rover" and an about blurb
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

- **GIVEN** the Rover app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Rover — Dog Care Template"
