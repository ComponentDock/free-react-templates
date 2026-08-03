# Template: Petsitting (Pet Sitting Services Website)

## Purpose

Petsitting is a multi-section pet-sitting services website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Petsitting" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a green pet-care landing page: hero with a "Highest
Quality Care For Pets You'll Love" headline, three intro services, a "Why
Choose Us" strip, counters, an FAQ accordion, testimonials, a pricing table
with monthly/yearly toggle, a pet gallery, blog posts, a free consultation
form band, and a multi-column footer. Petsitting follows the same structure
and adds the repo's standard dark-mode toggle and accessible patterns. All
imagery is recreated with seeded placeholder images (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Petsitting" — free pet sitting services website
  template (source: https://colorlib.com/wp/template/petsitting/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/petsitting/`
  (HTTP 200) + `css/style.css` (HTTP 200, ~317 KB, Bootstrap 5 based).
- **Structure (1:1, section order):**
  1. Navbar — Home, About, Veterinarian, Services, Gallery, Pricing, Blog,
     Contact + "Get Started" button.
  2. Hero — h1 "Highest Quality Care For Pets You'll Love", copy, "Learn
     more" + "Get Started" buttons.
  3. Intro (`bg-light`) — three service blocks: Dog Walking, Pet Daycare,
     Pet Grooming (icon + title + copy).
  4. Why Choose Us — four features: Care Advices, Customer Supports,
     Emergency Services, Veterinary Help.
  5. Counters — stat strip.
  6. FAQ (`bg-light`) — h2 "Frequently Asks Questions"; accordion: How to
     train your pet dog?, How to manage your pets?, What is the best
     grooming for your pets?, What are those requirements for sitting pets?
  7. Testimonials — h2 "Happy Clients & Feedbacks"; quote cards.
  8. Pricing — h2 "Choose Your Plan"; Monthly/Yearly toggle (Save 20%);
     plans: Starter ($29/month — 3 Dog Walks per week, 1 Vet Check-up,
     Basic Grooming, Email Support, Pet Spa Access, Emergency support),
     Professional, Premium.
  9. Gallery — h2 "Pets Gallery"; images labelled by breed: Persian Cat,
     Pomeranian, Sphynx Cat, British Shorthair, Beagle, Pug.
  10. Blog — h2 "Latest news from our blog"; three posts (title, meta,
      excerpt).
  11. Appointment — h2 "Free Consultation"; booking form band (fields +
      submit).
  12. Footer — brand "Petsitting" + blurb, Latest News / Quick Links /
      "Have a Questions?" columns, bottom bar.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#00bd56** (green — primary buttons/accents) with accent
    blue **#207dff** (secondary links/highlights).
  - Text/background: **#212529** (dark text), **#f8f9fa** (`bg-light`
    sections), white sections.
  - Fonts: **"Montserrat"** (body + headings) via Google Fonts.
  - Buttons: filled green `btn` (rounded, uppercase).
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the header; sections recreated with Tailwind tokens
  (`--color-brand` = `#00bd56`, green scale in `@theme`); placeholder images
  via `https://picsum.photos/seed/petsitting-<n>/<w>/<h>`; icons from
  lucide-react; pricing monthly/yearly toggle as a stateful control;
  consultation form with client-side validation (zod); social icons inline
  SVG; no assets copied.

Petsitting lives in `apps/petsitting` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Petsitting",
links to the main sections, a "Get Started" button, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Petsitting page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Petsitting" and links to the main sections
- **AND** the navbar SHALL show a "Get Started" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with the headline "Highest Quality
Care For Pets You'll Love", supporting copy, and CTA buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading matching "Highest Quality Care For Pets You'll Love"
- **AND** it SHALL show a supporting paragraph and CTA buttons

### Requirement: Intro services section

The system SHALL render an intro services section with three blocks: Dog
Walking, Pet Daycare, and Pet Grooming.

#### Scenario: Intro service blocks

- **GIVEN** the page is rendered
- **WHEN** the intro services section is displayed
- **THEN** it SHALL show the three service blocks, each with an icon, title, and copy

### Requirement: Why-choose-us section

The system SHALL render a "Why Choose Us?" section with four features: Care
Advices, Customer Supports, Emergency Services, and Veterinary Help.

#### Scenario: Feature items

- **GIVEN** the page is rendered
- **WHEN** the why-choose-us section is displayed
- **THEN** it SHALL show the heading "Why Choose Us?"
- **AND** it SHALL show the four features with titles

### Requirement: FAQ section

The system SHALL render a "Frequently Asks Questions" section with at least
three expandable question items.

#### Scenario: FAQ items

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show the heading "Frequently Asks Questions"
- **AND** it SHALL show at least three question items with answers

### Requirement: Testimonials section

The system SHALL render a "Happy Clients & Feedbacks" section with at least
two testimonial cards.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Happy Clients & Feedbacks"
- **AND** it SHALL show at least two testimonial cards with quotes and names

### Requirement: Pricing section

The system SHALL render a "Choose Your Plan" section with three plans
(Starter, Professional, Premium), each with a price and a feature list.

#### Scenario: Pricing plans

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Choose Your Plan"
- **AND** it SHALL show the Starter, Professional, and Premium plans with prices and feature lists

#### Scenario: Billing toggle

- **GIVEN** the pricing section is displayed
- **WHEN** the user switches between monthly and yearly billing
- **THEN** the displayed plan prices SHALL update accordingly

### Requirement: Gallery section

The system SHALL render a "Pets Gallery" section with at least six images
labelled by breed (Persian Cat, Pomeranian, Sphynx Cat, British Shorthair,
Beagle, Pug).

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Pets Gallery"
- **AND** it SHALL show at least six gallery images with breed labels

### Requirement: Blog section

The system SHALL render a blog section titled "Latest news from our blog"
with at least three posts, each with a title and an excerpt.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest news from our blog"
- **AND** it SHALL show at least three blog posts with titles

### Requirement: Consultation section

The system SHALL render a "Free Consultation" section with a booking form
and a submit button.

#### Scenario: Consultation form

- **GIVEN** the page is rendered
- **WHEN** the consultation section is displayed
- **THEN** it SHALL show the heading "Free Consultation"
- **AND** it SHALL show a booking form with a submit button

### Requirement: Footer

The system SHALL render a footer with the site name "Petsitting", an about
blurb, link columns, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Petsitting" and an about blurb
- **AND** it SHALL show link columns and social links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Petsitting app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Petsitting — Pet Sitting Services Website Template"
