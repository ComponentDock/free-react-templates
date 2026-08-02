# Template: Harvest (Farm & Organic Store Landing)

## Purpose

Harvest is a single-page farm services & organic food store website template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Famie" website template design (see TEMPLATES.md), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Famie — Farm Services & Organic Food Store"
  (source: https://colorlib.com/wp/template/farmie/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/farmie/ (HTTP 200;
  full rendered DOM + `style.css` extracted).
- **Section order (1:1):** Top bar (welcome + email + phone) → Navbar → Hero
  (bg image, "The hearth of the farm is the true center of our universe." +
  Contact Us) → Benefits (Best Services: Farm Experiences, 100% Natural, Farm
  Equipment, Organic food) → About Us → Journey (From Farm To Your Table:
  Grow, Harvest, Quality Check) → Services (What we do) → Featured Products
  (Hot Strawberry $17.99, Baked Breads $9.99, Prime Beef $59.99, Pure Honey
  $29.99→$19.99 Sale + Go to Store) → Newsletter (email + Subscribe) →
  Farming Practices → Testimonial (quote over photo) → Contact (Get In Touch
  With Us form: name, email, subject, message + Send Message) → News (2
  posts) → Trust badges (Certified Quality: USDA Organic, Non-GMO, Fair
  Trade, Eco-Friendly, Quality Assured) → Footer (about, address, quick
  links, recent news, social).
- **Design tokens extracted from `style.css`:**
  - Primary green `#77b122` (buttons, accents, highlights).
  - Dark `#303030` and gray `#707070` text; white / light-gray `#f8f9fa`
    section backgrounds.
  - Font Awesome icons in the original (replaced with lucide-react); Google
    Fonts family to confirm at implementation.
  - Buttons (`famie-btn`): green background, white uppercase text, small
    radius.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/harvest-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Harvest lives in `apps/harvest` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Top bar

The system SHALL render a slim top bar above the navbar with a welcome message,
an email address, and a phone number.

#### Scenario: Top bar content

- **GIVEN** the Harvest page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show a welcome message, an email address, and a phone number

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Harvest",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Harvest page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Harvest" and links to Home, About, Shop, News, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero over a background image with a
headline, a blurb, and a "Contact Us" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-2 heading "The hearth of the farm is the true center of our universe."
- **AND** it SHALL show a supporting blurb and a "Contact Us" button

### Requirement: Benefits section

The system SHALL render a "Best Services" benefits strip with four tiles (Farm
Experiences, 100% Natural, Farm Equipment, Organic food), each with an icon, a
title, and a short description.

#### Scenario: Benefits content

- **GIVEN** the page is rendered
- **WHEN** the benefits section is displayed
- **THEN** it SHALL contain a level-2 heading "Best Services"
- **AND** it SHALL show four benefit tiles titled Farm Experiences, 100% Natural, Farm Equipment, and Organic food
- **AND** each tile SHALL have an icon and a description

### Requirement: About section

The system SHALL render an "About Us" section with a small kicker and a
"Let Us Tell You Our Story" heading.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain an "About us" kicker and a heading "Let Us Tell You Our Story"

### Requirement: Journey section

The system SHALL render a "From Farm To Your Table" journey section with three
numbered steps (Grow, Harvest, Quality Check), each with a title and a
description.

#### Scenario: Journey content

- **GIVEN** the page is rendered
- **WHEN** the journey section is displayed
- **THEN** it SHALL contain a level-2 heading "Our Journey From Farm To Your Table"
- **AND** it SHALL show three steps titled Grow, Harvest, and Quality Check
- **AND** each step SHALL have a description

### Requirement: Services section

The system SHALL render a services section with a "What we do" kicker, a
heading, and service items with icons and descriptions.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a "What we do" kicker and the heading "Our Produce Is Mainstay For Us"
- **AND** it SHALL show service items, each with an icon and a description

### Requirement: Featured products section

The system SHALL render a "Featured Products" section with four product cards
(name, price, image placeholder) and a "Go to Store" button.

#### Scenario: Products content

- **GIVEN** the page is rendered
- **WHEN** the products section is displayed
- **THEN** it SHALL contain a level-2 heading "Featured Products"
- **AND** it SHALL show products named Hot Strawberry ($17.99), Baked Breads ($9.99), Prime Beef ($59.99), and Pure Honey (on sale from $29.99 to $19.99)
- **AND** it SHALL show a "Go to Store" button

### Requirement: Newsletter section

The system SHALL render a newsletter section with a blurb, an email input, and
a Subscribe button; submitting SHALL NOT navigate away.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL show an email input and a "Subscribe" button

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (no backend)

### Requirement: Farming practices section

The system SHALL render a "Farming Practices" section with a heading and
practice cards, each with a title and a description.

#### Scenario: Practices content

- **GIVEN** the page is rendered
- **WHEN** the farming practices section is displayed
- **THEN** it SHALL contain a heading "Farming Practices To Preserve Land & Water"
- **AND** it SHALL show practice cards, each with a title and a description

### Requirement: Testimonial section

The system SHALL render a testimonial section over a background image with a
single customer quote.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show a customer quote

### Requirement: Contact section

The system SHALL render a contact section with a "Get In Touch With Us"
heading, a form (name, email, subject, message), and a "Send Message" button;
submitting SHALL NOT navigate away.

#### Scenario: Contact form content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Get In Touch With Us"
- **AND** it SHALL show labeled inputs for name, email, and subject, plus a message textarea
- **AND** it SHALL show a "Send Message" submit button

#### Scenario: Contact form submit

- **GIVEN** the contact form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (no backend)

### Requirement: News section

The system SHALL render a news section with two post cards, each with a date,
an author, and a title.

#### Scenario: News content

- **GIVEN** the page is rendered
- **WHEN** the news section is displayed
- **THEN** it SHALL show two news posts, each with a date, an author, and a title

### Requirement: Trust badges section

The system SHALL render a "Certified Quality" section listing certifications
(USDA Organic, Non-GMO, Fair Trade, Eco-Friendly, Quality Assured).

#### Scenario: Certifications content

- **GIVEN** the page is rendered
- **WHEN** the trust badges section is displayed
- **THEN** it SHALL contain a heading "Our Certifications & Guarantees"
- **AND** it SHALL show badges for USDA Organic, Non-GMO, Fair Trade, Eco-Friendly, and Quality Assured

### Requirement: Footer

The system SHALL render a footer with an about blurb, address, contact details,
quick links, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Harvest" and an about blurb
- **AND** it SHALL show an address, an email, and a phone number
- **AND** it SHALL show quick links and social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Harvest app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Harvest — Farm & Organic Store Template"
