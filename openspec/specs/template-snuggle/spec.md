# Template: Snuggle (Pet Sitting Services Landing)

## Purpose

Snuggle is a single-page pet sitting & care services website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Petsitting" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Petsitting" — professional pet care services
  (source: https://colorlib.com/wp/template/petsitting/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/petsitting/
  (HTTP 200, full rendered DOM + `css/style.css` (317KB, Bootstrap-based)
  extracted). The TEMPLATES.md screenshot (`petsitting-free-template.jpg`)
  is the visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Veterinarian, Services,
  Gallery, Pricing, Blog, Contact) → Hero ("Highest Quality Care For Pets
  You'll Love" + Learn more) → Intro tiles (Dog Walking, Pet Daycare, Pet
  Grooming) → Why Choose Us (Care Advices, Customer Supports, Emergency
  Services, Veterinary Help) → Counters (Customer, Professionals, Products,
  Pets Hosted) → FAQ (Frequently Asks Questions: 4 Q&As) → Testimonials
  (Happy Clients & Feedbacks) → Pricing (Choose Your Plan: Starter $29,
  Professional $59, Premium $99, monthly/yearly toggle) → Gallery (Pets
  Gallery: 6 breeds) → Blog (Latest news from our blog: 3 posts) →
  Appointment (Free Consultation form: name, phone, service select, date,
  time, message) → Footer (Latest News, Quick Links, Have a Questions?,
  social, copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **green `#00bd56`** — `.btn-primary` bg; hover `#26c76f`.
  - Font: **"Montserrat", Arial, sans-serif** (Google Fonts).
  - Light section background `#f8f9fa`; white cards; blue `#207dff`
    secondary accent in parts of the demo.
  - Buttons: rounded, green bg, white/dark text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/snuggle-<n>/<w>/<h>`); icons → lucide-react; pricing
  toggle is client-side state; FAQ uses accessible disclosure; counters →
  static stats; forms prevent default (no backend); no assets copied.

Snuggle lives in `apps/snuggle` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Snuggle",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Snuggle page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Snuggle" and links to Home, About, Services, Gallery, Pricing, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Learn more"
button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Highest Quality Care For Pets You'll Love"
- **AND** it SHALL show a "Learn more" button linking to the about section

### Requirement: Services tiles

The system SHALL render three service tiles (Dog Walking, Pet Daycare, Pet
Grooming), each with an icon, a title, and a description.

#### Scenario: Services tiles content

- **GIVEN** the page is rendered
- **WHEN** the services tiles are displayed
- **THEN** it SHALL show tiles titled Dog Walking, Pet Daycare, and Pet Grooming
- **AND** each tile SHALL have an icon and a description

### Requirement: Why Choose Us section

The system SHALL render a "Why Choose Us?" section with four features, each
with an icon, a title, and a description.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the why-choose-us section is displayed
- **THEN** it SHALL contain a heading "Why Choose Us?"
- **AND** it SHALL show features titled Care Advices, Customer Supports, Emergency Services, and Veterinary Help

### Requirement: Counters section

The system SHALL render a counters strip with four stats: Customer,
Professionals, Products, and Pets Hosted.

#### Scenario: Counters content

- **GIVEN** the page is rendered
- **WHEN** the counters section is displayed
- **THEN** it SHALL show four counters labeled Customer, Professionals, Products, and Pets Hosted

### Requirement: FAQ section

The system SHALL render a "Frequently Asks Questions" section with at least
four questions, each expandable to reveal an answer.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asks Questions"
- **AND** it SHALL show questions including "How to train your pet dog?" and "How to manage your pets?"

#### Scenario: FAQ answer reveal

- **GIVEN** an FAQ question is displayed
- **WHEN** the user activates the question
- **THEN** its answer SHALL become visible

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and at least one
customer quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Happy Clients & Feedbacks"
- **AND** it SHALL show a customer quote

### Requirement: Pricing section

The system SHALL render a pricing section with a heading, a monthly/yearly
toggle, and three plans (Starter, Professional, Premium), each with a price, a
feature list, and a "Get Started" button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Choose Your Plan"
- **AND** it SHALL show three plans: Starter, Professional, and Premium, each with a price and a feature list
- **AND** each plan SHALL show a "Get Started" button

#### Scenario: Billing toggle

- **GIVEN** the pricing section is displayed
- **WHEN** the user switches the billing toggle
- **THEN** the displayed prices SHALL switch between monthly and yearly amounts

### Requirement: Gallery section

The system SHALL render a gallery section with a heading and six pet photos
with names.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a heading "Pets Gallery"
- **AND** it SHALL show six gallery items named Persian Cat, Pomeranian, Sphynx Cat, British Shorthair, Beagle, and Pug

### Requirement: Blog section

The system SHALL render a blog section with a heading and three post cards,
each with an image, a title, a date, an author, and a "Read more" link.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Latest news from our blog"
- **AND** it SHALL show three post cards, each with a title, a date, an author, and a "Read more" link

### Requirement: Appointment section

The system SHALL render an appointment section with a "Free Consultation"
heading and a form (name, phone, service select, date, time, message) with a
submit button; submitting SHALL NOT navigate away.

#### Scenario: Appointment form content

- **GIVEN** the page is rendered
- **WHEN** the appointment section is displayed
- **THEN** it SHALL contain a heading "Free Consultation"
- **AND** it SHALL show labeled inputs for name and phone, a service select, a date input, a time input, and a message textarea
- **AND** it SHALL show a submit button

#### Scenario: Appointment form submit

- **GIVEN** the appointment form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (no backend)

### Requirement: Footer

The system SHALL render a footer with an about blurb, recent news links, quick
links, contact details, social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Snuggle" and an about blurb
- **AND** it SHALL show quick links, recent news links, and contact details (address, phone, email)
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Snuggle app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Snuggle — Pet Sitting Template"
