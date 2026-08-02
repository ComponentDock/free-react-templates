# Template: Stallion (Horse Club Landing)

## Purpose

Stallion is a single-page horse club & riding consultancy website template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Horse Club" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Horse Club" — horse club / riding consultancy
  (source: https://colorlib.com/wp/template/horse-club/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/horseclub/
  (HTTP 200; note the live-preview slug is `horseclub`, NOT `horse-club`).
  Full rendered DOM + `css/main.css` (51.9KB) extracted. The TEMPLATES.md
  screenshot (`horseclub-free-template.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):** Top bar (email + phone) → Navbar (Home, About,
  Service, Training, Events, Pricing, Blog, Contact) → Hero (full-screen
  photo + dark overlay, "Introducing Horse Club" kicker, "Inter relation
  Between Horse & Rider" h1, Book Consultancy CTA) → About-video (video
  thumbnail + play button, "Brand new app to blow your mind" kicker,
  "We've made a life that will change you" h1, Get Started Now) → Features
  (6 tiles: Expert Technicians, Professional Service, Great Support,
  Technical Skills, Highly Recommended, Positive Reviews) → Home-about
  (image + heading + text + Get Started Now) → Pricing (Choose the best plan
  that suits you: Basic £199, Economy £299, Premium £399, Enterprise £499,
  each with circular badge, feature list, Purchase) → Booking (testimonial
  carousel: Fannie Rowe, Hulda Sutton with star ratings + Appointment Form:
  name, email, phone, date & time, message) → Latest blog (Latest News from
  our Blog: 2 posts with image, title, excerpt, date) → Gallery (6 images
  with hover overlay) → Footer (About Us, Contact Us + phones, Newsletter
  with email input + subscribe, social icons, copyright).
- **Design tokens extracted from `css/main.css`:**
  - Primary **`#f6214b`** (pink-red) — `.primary-btn`, hover accents.
  - Gradient **`linear-gradient(0deg, #f45622 0%, #f53e54 100%)`** — top-bar
    accents, hero CTA, circular price badges, gallery hover overlay, booking
    submit button.
  - Font: **"Poppins", sans-serif** (Google Fonts).
  - Light section background `#f9f9ff` (pricing); dark text `#222222`;
    muted `#777777`; white cards with 5px radius.
  - Hero overlay rgba(0,0,0,.7); booking overlay rgba(0,0,0,.8).
  - Buttons: uppercase, white text; hover → transparent bg + white border.
  - Testimonial stars: orange.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/stallion-<n>/<w>/<h>`); icons → lucide-react; video →
  play-button thumbnail over a placeholder image (no external embed needed);
  forms prevent default (no backend); no assets copied.

Stallion lives in `apps/stallion` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Top bar

The system SHALL render a slim top bar above the navbar with an email address
and a phone number.

#### Scenario: Top bar content

- **GIVEN** the Stallion page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show an email address and a phone number

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Stallion",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Stallion page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Stallion" and links to Home, About, Services, Training, Events, Pricing, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-viewport hero over a background image with a
dark overlay, a kicker, a headline, and a "Book Consultancy" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a kicker "Introducing Stallion" and a level-1 heading "Inter relation Between Horse & Rider"
- **AND** it SHALL show a "Book Consultancy" button linking to the booking section

### Requirement: About-video section

The system SHALL render an about section with a video thumbnail and play
button on one side and a kicker, heading, paragraph, and "Get Started Now"
button on the other.

#### Scenario: About-video content

- **GIVEN** the page is rendered
- **WHEN** the about-video section is displayed
- **THEN** it SHALL contain a kicker "Brand new app to blow your mind" and a level-1 heading "We've made a life that will change you"
- **AND** it SHALL show a video thumbnail with a play button and a supporting paragraph
- **AND** it SHALL show a "Get Started Now" button

### Requirement: Features section

The system SHALL render a features strip with six tiles, each with an icon, a
title, and a short description.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show six tiles titled Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, and Positive Reviews
- **AND** each tile SHALL have an icon and a description

### Requirement: Home-about section

The system SHALL render an about section with an image on one side and a
kicker, heading, paragraph, and "Get Started Now" button on the other.

#### Scenario: Home-about content

- **GIVEN** the page is rendered
- **WHEN** the home-about section is displayed
- **THEN** it SHALL contain a heading "We've made a life that will change you" and an image
- **AND** it SHALL show a supporting paragraph and a "Get Started Now" button

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and four plan cards,
each with a circular number badge, plan name, feature list, price, and a
"Purchase" button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Choose the best plan that suits you"
- **AND** it SHALL show four plans: Basic (£199.00), Economy (£299.00), Premium (£399.00), and Enterprise (£499.00)
- **AND** each plan SHALL show a feature list and a "Purchase" button

### Requirement: Booking section

The system SHALL render a booking section over a background image with a dark
overlay, containing a testimonial carousel and an appointment form; submitting
the form SHALL NOT navigate away.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the booking section is displayed
- **THEN** it SHALL show customer testimonials with names (Fannie Rowe, Hulda Sutton) and five-star ratings

#### Scenario: Appointment form content

- **GIVEN** the booking section is displayed
- **WHEN** the appointment form is shown
- **THEN** it SHALL show labeled inputs for name, email, phone, and date & time, plus a message textarea
- **AND** it SHALL show a submit button

#### Scenario: Appointment form submit

- **GIVEN** the appointment form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (no backend)

### Requirement: Blog section

The system SHALL render a blog section with a heading and two post cards, each
with an image, a title, an excerpt, and a date.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Latest News from our Blog"
- **AND** it SHALL show two post cards, each with an image, a title, an excerpt, and a date

### Requirement: Gallery section

The system SHALL render a gallery of six images with a hover overlay on each.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show six gallery images
- **AND** hovering an image SHALL reveal an overlay with a caption

### Requirement: Footer

The system SHALL render a footer with About Us and Contact Us widgets, a
Newsletter widget with an email input and subscribe button, social links, and
a copyright line; submitting the newsletter SHALL NOT navigate away.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" blurb and a "Contact Us" widget with two phone numbers
- **AND** it SHALL show a "Newsletter" widget with an email input and a subscribe button
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (no backend)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Stallion app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Stallion — Horse Club Template"
