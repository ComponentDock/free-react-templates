# Template: Sage (Dog Care Website)

## Purpose

Sage is a multi-section dog-care website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Dogger"
design (see TEMPLATES.md), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a calm sage-green dog-care landing page: hero with
booking CTA, three service cards (Love & Care, Fearsome, Beautiful), about,
trainers, a pricing table, an FAQ, customer testimonials, and a photo
gallery. Sage follows the same structure and adds the repo's standard
dark-mode toggle and accessible patterns. All imagery is recreated with
seeded placeholder images (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Dogger" — free dog-care website template
  (source: https://colorlib.com/wp/template/dogger/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/dogger/`
  (HTTP 200) + `css/style.css`.
- **Structure (1:1, section order):**
  1. Navbar — site name, section links, phone/CTA.
  2. Hero — "Welcome to Dogger Pet Care" headline, copy, "Get started" /
     "Book now" style CTA (sage primary buttons).
  3. Services — three cards: "Love & Care", "Fearsome", "Beautiful"
     (icon + title + copy).
  4. About Us — image + copy.
  5. Our Trainers — three trainer cards: Jessica White, Valerie Elash,
     Alicia Jones.
  6. Pricing Table — three plans: Basic, Premium, Professional (monthly
     price + features + CTA).
  7. Frequently Ask Questions — accordion of Q&As.
  8. Happy Customers — testimonial cards: Ricky Fisher, Ken Davis,
     Mellisa Griffin, Robert Steward.
  9. Photo Gallery — image grid.
  10. Footer — logo, about, link columns, social.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#a2c0be** (sage green — primary buttons/links) with dark
    teal text **#405a58**.
  - Text/background: **#405a58** (headings), **#999999**/**#b3b3b3**
    (muted), **#f8f9fa** (light sections).
  - Fonts: **"Vollkorn"** (serif display headings) + **"Open Sans"** (body)
    via Google Fonts.
  - Buttons: filled sage `btn-primary` (rounded).
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the header; sections recreated with Tailwind tokens
  (`--color-brand` = `#a2c0be`, sage/teal scale in `@theme`); placeholder
  images via `https://picsum.photos/seed/sage-<n>/<w>/<h>`; icons from
  lucide-react; social icons inline SVG; no assets copied.

Sage lives in `apps/sage` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Sage", links to
the main sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Sage page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Sage" and links to the main sections
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with the headline "Welcome to Dogger
Pet Care" (paraphrased as "Welcome to Sage Pet Care"), supporting copy, and a
primary CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading matching "Welcome to Sage Pet Care"
- **AND** it SHALL show a supporting paragraph and a primary CTA button

### Requirement: Services section

The system SHALL render a services section with three cards: Love & Care,
Fearsome, and Beautiful.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show cards for Love & Care, Fearsome, and Beautiful, each with an icon, title, and copy

### Requirement: About section

The system SHALL render an about section titled "About Us" with an image and
descriptive copy.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "About Us"
- **AND** it SHALL show an image with an accessible label and descriptive copy

### Requirement: Trainers section

The system SHALL render an "Our Trainers" section with three trainer cards
(Jessica White, Valerie Elash, Alicia Jones), each with a photo, name, and
role.

#### Scenario: Trainer cards

- **GIVEN** the page is rendered
- **WHEN** the trainers section is displayed
- **THEN** it SHALL show the heading "Our Trainers"
- **AND** it SHALL show the three trainer cards with names

### Requirement: Pricing section

The system SHALL render a "Pricing Table" section with three plans: Basic,
Premium, and Professional.

#### Scenario: Pricing plans

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Pricing Table"
- **AND** it SHALL show the Basic, Premium, and Professional plans with prices

### Requirement: FAQ section

The system SHALL render a "Frequently Ask Questions" section with at least
three expandable question items.

#### Scenario: FAQ items

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show the heading "Frequently Ask Questions"
- **AND** it SHALL show at least three question items with answers

### Requirement: Testimonials section

The system SHALL render a "Happy Customers" section with at least two
testimonial cards (name + quote).

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Happy Customers"
- **AND** it SHALL show testimonial cards with names

### Requirement: Photo gallery

The system SHALL render a "Photo Gallery" section with a grid of at least six
images.

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Photo Gallery"
- **AND** it SHALL show at least six gallery images

### Requirement: Footer

The system SHALL render a footer with the site name, a short about, link
columns, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Sage" and social links
- **AND** it SHALL show link columns

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Sage app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Sage — Dog Care Website Template"
