# Template: Whisker (Pet Care Services Landing)

## Purpose

Whisker is a single-page pet care services website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Petcare" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Petcare" — pet care services & animal clinic
  (source: https://colorlib.com/wp/template/petcare/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/petcare/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (63.5KB, minified)
  extracted). The TEMPLATES.md screenshot (`petcare-free-template.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens.
- **Section order (1:1):** Header (nav + phone) → Hero (We help to groom
  your pet / "We Care Your Pets." + Contact Now) → Services (Best Pet Care
  Services: Pet Boarding, Pet Treatment, Vaccinations) → About (354 happy
  clients, "We are commited for better service" + Read More) → Gallery (Pets
  Photo Gallery: 4 images with hover overlay) → Contact form (heading +
  Name/Phone/Email/message + submit) → Team (Our Team Mambers: Mike
  Janathon, Mike J Smith, Pule W Smith) → Testimonial (Margaret Lawson) →
  Blog (Our Recent Blog: 3 posts) → CTA (Any time you can call us!) →
  Footer (Company, Services, Get in Touch, social, copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **red `#ff2121`** — `.boxed-btn` border/text; hover fills red.
  - Service icon bubble `#ffedf2` bg with `#ff7474` icons (100px circle).
  - Footer widget headings `#012f5f` (navy); gallery hover overlay
    rgba(1,10,28,0.3); CTA heading `#fff` over a photo background.
  - Font: **"Muli"** (body/buttons) + Roboto (Google Fonts).
  - Buttons: uppercase, letter-spacing 3px, padding 18px 44px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/whisker-<n>/<w>/<h>`); icons → lucide-react; counter →
  static stat; forms prevent default (no backend); no assets copied.

Whisker lives in `apps/whisker` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Whisker",
anchor links to the page's sections, a phone number, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Whisker page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Whisker" and links to Home, About, Services, Gallery, Blog, and Contact
- **AND** the navbar SHALL show a phone number and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero over a background image with a
kicker, a headline, a blurb, and a "Contact Now" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a kicker "We help to groom your pet" and a level-1 heading "We Care Your Pets."
- **AND** it SHALL show a supporting blurb and a "Contact Now" button

### Requirement: Services section

The system SHALL render a services section with a kicker, a heading, and three
service cards, each with an icon, a title, and a description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a kicker "Our Professional Services" and a heading "Best Pet Care Services"
- **AND** it SHALL show three service cards titled Pet Boarding, Pet Treatment, and Vaccinations
- **AND** each card SHALL have an icon and a description

### Requirement: About section

The system SHALL render an about section with a stat counter, a heading, two
paragraphs, and a "Read More" button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the counter "354" and a heading "We are commited for better service"
- **AND** it SHALL show supporting paragraphs and a "Read More" button

### Requirement: Gallery section

The system SHALL render a gallery section with a kicker, a heading, and four
gallery images with hover captions.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a kicker "Our Recent Photos" and a heading "Pets Photo Gallery"
- **AND** it SHALL show four gallery images, each revealing a caption on hover

### Requirement: Contact form section

The system SHALL render a contact section with a heading and a form with name,
phone, and email inputs plus a message textarea and a submit button; submitting
SHALL NOT navigate away.

#### Scenario: Contact form content

- **GIVEN** the page is rendered
- **WHEN** the contact form section is displayed
- **THEN** it SHALL contain a level-2 heading
- **AND** it SHALL show labeled inputs for name, phone, and email, plus a message textarea and a submit button

#### Scenario: Contact form submit

- **GIVEN** the contact form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (no backend)

### Requirement: Team section

The system SHALL render a team section with a kicker, a heading, and three team
members, each with a photo, a name, and a role.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL contain a kicker "Our Professional members" and a heading "Our Team Mambers"
- **AND** it SHALL show three team members with names (Mike Janathon, Mike J Smith, Pule W Smith) and the role "Doctor"

### Requirement: Testimonial section

The system SHALL render a testimonial section with a customer quote and the
author's name and role.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show a customer quote and the author name "Margaret Lawson"

### Requirement: Blog section

The system SHALL render a blog section with a kicker, a heading, and three post
cards, each with a tag, a date, a title, an excerpt, and a "Read more" link.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a kicker "Oure recent news" and a heading "Our Recent Blog"
- **AND** it SHALL show three post cards, each with a tag, a date, a title, and a "Read more" link

### Requirement: Call-to-action section

The system SHALL render a call-to-action band with a heading, a blurb, and a
"Contact Us" button or phone number.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain the heading "Any time you can call us!"
- **AND** it SHALL show a contact button and a phone number

### Requirement: Footer

The system SHALL render a footer with an about blurb, link columns, contact
details, social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Whisker" and an about blurb
- **AND** it SHALL show Company links, Services links, and contact details (phone, email, address)
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Whisker app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Whisker — Pet Care Template"
