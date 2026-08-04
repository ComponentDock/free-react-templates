# Template: Dogger (Dog Care Landing — Hero, Love & Care Rows, Trainers, Pricing, FAQ, Testimonials, Gallery, Blog, Services, Contact)

## Purpose

Dogger is a single-page dog-care landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Dogger"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, sage-green dog-care landing: a light hero with a dog
illustration, a "Love & Care" alternating feature rows block, an about section,
a trainers row on a brand-green background, a three-tier pricing table, an FAQ
accordion, customer testimonials with green quote cards, a photo gallery, a
blog row, six service cards, a contact form, and a dark footer. Dogger
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Dogger" — dog website template
  (source: https://colorlib.com/wp/template/dogger/).
- **Live demo DOM analyzed:** `https://preview.colorlib.com/theme/dogger/`
  (HTTP 200; full rendered DOM + `css/style.css` (28KB) + `bootstrap.min.css`
  extracted). The TEMPLATES.md screenshot (`dogger-free-template.jpg`) is the
  visual reference; the design below is reconstructed from the DOM structure
  and CSS tokens.
- **Section order (1:1):**
  1. Sticky navbar (`site-navbar js-sticky-header`): brand "dogger" + links
     Home, About, Trainers, Pricing, FAQ, Testimonials, Gallery, Blog,
     Services, Contact (active/hover = brand `#a2c0be`; sticky state white bg).
  2. Hero (`site-blocks-cover overflow-hidden bg-light`, full viewport height,
     min 600px): h1 "We Care For Your Dog" (4rem, black) + subtitle "We always
     try to provide your dog the best services." + dog illustration on the
     right (`dogger_img_1.png`).
  3. Welcome block (`site-section`): paw icon + h2 "Welcome to Dogger Pet
     Care" + blind-text paragraph; then 3 alternating image/text rows
     (`hover-1-wrap`): "Love & Care", "Fearsome", "Beautiful" — each with an
     image, h2, paragraph, and a "Read More" `.btn-primary` button.
  4. About (`site-section`, `#about-section`): h2 "About Us" + `.lead`
     paragraph + muted paragraph + video thumbnail image
     (`dogger_img_big_1.jpg`).
  5. Trainers (`site-section bg-primary trainers`, `#trainers-section`):
     h2 "Our Trainers" (heading `#405a58` on brand bg) + 3 trainer cards:
     Jessica White, Valerie Elash, Alicia Jones.
  6. Pricing (`site-section`, `#pricing-section`): h2 "Pricing Table" + 3
     brand-green columns (`bg-primary p-3 p-md-5`): Basic $47, Premium $250,
     Professional $850 — each with 5 feature lines and a "Buy Now" button.
  7. FAQ (`site-section`, `#faq-section`): h2 "Frequently Ask Questions" +
     accordion (circle toggle, brand fill when open) with 4 questions:
     "Should I stop letting my dog sleep with me at night?", "Is it okay to
     dress up your dog?", "Why do dogs like belly rubs so much?", "Is a warm
     dry nose a sign of illness in dogs?".
  8. Testimonials (`site-section bg-light block-13`, `#testimonials-section`):
     h2 "Happy Customers" + 4 quote cards (`block-testimony-1`, brand-green
     blockquote, Vollkorn italic) from Ricky Fisher, Ken Davis, Mellisa
     Griffin, Robert Steward.
  9. Gallery (`site-section`, `#gallery-section`): h2 "Photo Gallery" + 6
     photos (`dogger_img_sm_1..6`).
  10. Blog (`site-section`, `#blog-section`): h2 "Dogger Blog" + 4 post cards
      (post-meta date "April 17, 2019", h3 title, excerpt, "Read more"). The
      preview repeats one placeholder title 4×; Dogger uses 4 distinct
      paraphrased dog-care titles.
  11. Services (`site-section`, `#services-section`): h2 "Our Services" + 6
      service cards: Dog Checkup, Dog Dermatology, For Strong Teeth, Dog First
      Aid, Dog Dryer, Expert Veterinarian.
  12. Contact (`#contact-section`): h2 "Contact Form" + form (first name, last
      name, email, subject, message textarea) + "Send Message" `.btn-dark`;
      h2 "Contact Us" + address (Melbourne St, South Birbane 4101 Austraila),
      phone +(000) 123 4567 89, email info@yourdomain.com.
  13. Footer (`site-footer`, bg `#333333`): "About Us" blurb, "Quick Links"
      (About Us, Trainers, Services, Testimonials, Contact Us), "Follow Us"
      social icons, "Subscribe Newsletter" input + Send button, copyright line.
- **Design tokens extracted from `css/style.css` + `bootstrap.min.css`:**
  - Brand color: **#a2c0be** (sage green) — `--primary`, `.btn-primary`,
    navbar active/hover, `hover-1` overlay, accordion open circle, testimonial
    blockquote bg, trainers + pricing section bg.
  - On-brand text: body `#567876`, headings `#405a58`.
  - Light section background: **#f8f9fa** (`bg-light`, bootstrap `!important`).
  - Footer: **#333333** background, body text `#737373`, links `#999999`
    (hover white), headings white.
  - Hero h1: 4rem `#000`; hero subtitle: `#999999`, 1.2rem, weight 300.
  - Font: **"Open Sans"** (body + headings) via Google Fonts; **"Vollkorn"**
    serif italic for testimonial blockquotes.
  - Buttons: `.btn` radius 30px, padding 10px 30px; `.btn-primary` brand bg →
    hover `#000`; `.btn-dark` for form submit.
  - Forms: `.form-control` height 43px, radius 5px, focus border `#a2c0be`;
    contact form fields border transparent.
  - Section padding: `2.5em 0` mobile / `5em 0` desktop; footer `4em 0` /
    `8em 0` desktop.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/dogger-<n>/<w>/<h>`); icons → lucide-react (PawPrint,
  ChevronDown, Mail, MapPin, Phone, ArrowRight, HeartPulse, Stethoscope,
  Syringe, Wind, ShieldCheck, CalendarDays); brand social icons → inline SVG;
  Open Sans + Vollkorn via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome. FAQ accordion is a lightweight React accordion
  (aria-expanded, chevron rotate). Blog titles paraphrased. Footer credit
  paraphrased ("All rights reserved", no ColorLib attribution copied).

Dogger lives in `apps/dogger` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "dogger",
links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Dogger page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "dogger" and links to Home,
  About, Trainers, Pricing, FAQ, Testimonials, Gallery, Blog, Services, and
  Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-height hero with a level-1 heading, a subtitle,
and a dog illustration image.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We Care For Your Dog"
- **AND** it SHALL show the subtitle "We always try to provide your dog the
  best services."
- **AND** it SHALL render a dog image with an empty alt attribute

### Requirement: Welcome and feature rows

The system SHALL render a welcome block with a heading and three alternating
image/text feature rows, each with a heading, paragraph, and a "Read More"
button.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL contain a heading "Welcome to Dogger Pet Care"
- **AND** it SHALL show the feature rows "Love & Care", "Fearsome", and
  "Beautiful"
- **AND** each feature row SHALL have a "Read More" button

### Requirement: About section

The system SHALL render an about section with a heading, lead paragraph, muted
paragraph, and a video thumbnail image.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "About Us"
- **AND** it SHALL show an image and the paragraphs

### Requirement: Trainers section

The system SHALL render a trainers section on the brand background with a
heading and three trainer cards, each with a photo and a name.

#### Scenario: Trainers content

- **GIVEN** the page is rendered
- **WHEN** the trainers section is displayed
- **THEN** it SHALL contain a heading "Our Trainers"
- **AND** it SHALL show the trainers "Jessica White", "Valerie Elash", and
  "Alicia Jones"

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and three pricing
cards, each with a plan name, price, feature list, and a "Buy Now" button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Pricing Table"
- **AND** it SHALL show the plans "Basic", "Premium", and "Professional" with
  their prices
- **AND** each plan SHALL have a "Buy Now" button

### Requirement: FAQ accordion

The system SHALL render an FAQ section with a heading and an accordion of
questions; opening one question reveals its answer.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Ask Questions"
- **AND** it SHALL list the four dog-care questions

#### Scenario: Accordion expand and collapse

- **GIVEN** the FAQ accordion is displayed
- **WHEN** the user activates a question
- **THEN** its answer SHALL become visible and the toggle SHALL reflect the
  open state
- **AND** activating the same question again SHALL hide the answer

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and four quote
cards, each with a quote and an author name.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Happy Customers"
- **AND** it SHALL show quotes attributed to "Ricky Fisher", "Ken Davis",
  "Mellisa Griffin", and "Robert Steward"

### Requirement: Gallery section

The system SHALL render a gallery section with a heading and six photos.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a heading "Photo Gallery"
- **AND** it SHALL render six images

### Requirement: Blog section

The system SHALL render a blog section with a heading and four post cards,
each with a date, title, excerpt, and a "Read more" button.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Dogger Blog"
- **AND** it SHALL show the post "5 Things You Need To Know About Dog Massage"
  with a "Read more" button

### Requirement: Services section

The system SHALL render a services section with a heading and six service
cards, each with an icon, a title, and a short description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Services"
- **AND** it SHALL show the services "Dog Checkup", "Dog Dermatology", "For
  Strong Teeth", "Dog First Aid", "Dog Dryer", and "Expert Veterinarian"

### Requirement: Contact section

The system SHALL render a contact section with a heading, a working form
(first name, last name, email, subject, message, submit), and contact details.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain the headings "Contact Form" and "Contact Us"
- **AND** it SHALL render labeled fields for first name, last name, email,
  subject, and message
- **AND** it SHALL show a "Send Message" submit button and contact details
  (address, phone, email)

#### Scenario: Submitting the contact form

- **GIVEN** the contact form is displayed
- **WHEN** the user fills the fields and submits the form
- **THEN** the form SHALL submit without a page reload and the fields SHALL
  be cleared

### Requirement: Footer

The system SHALL render a footer with an about blurb, quick links, social
icons, a newsletter subscribe input with a Send button, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "About Us" blurb, a "Quick Links" column, a
  "Follow Us" column with social links, and a "Subscribe Newsletter" input
  with a Send button
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Dogger app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Dogger — Dog Care Template"
