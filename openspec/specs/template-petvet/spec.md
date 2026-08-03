# Template: Petvet (Pet Care & Veterinary Website)

## Purpose

Petvet is a multi-section pet-care/veterinary website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Petvet" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a pink pet-care landing page: hero with a "The Kind
of Care Your Pets Deserve" headline, three intro services, a counter strip,
a services/about block, a groomers team, testimonials, affordable pricing
packages, blog updates, and a multi-column footer. Petvet follows the same
structure and adds the repo's standard dark-mode toggle and accessible
patterns. All imagery is recreated with seeded placeholder images (no assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Petvet" — free pet care/veterinary website template
  (source: https://colorlib.com/wp/template/petvet/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/petvet/`
  (HTTP 200) + `css/style.css` (HTTP 200, Bootstrap 4 based).
- **Structure (1:1, section order):**
  1. Navbar — Home, About, Groomers, Services, Blog, Pricing, Contact us +
     "Free Consultation" button.
  2. Hero (`hero-wrap`) — brand "Petvet Pet Care", h1 "The Kind of Care Your
     Pets Deserve", "Make An Appointment" button, phone 11-234-5678-9102.
  3. Intro (`bg-light`) — three service blocks: Veterinary Service, Pet
     Grooming, Pet Setting (icon + title + copy).
  4. Counters — stat strip.
  5. Services — h2 "We Are Best Agency For Your Pets" + "Make An
     Appointment" CTA.
  6. Groomers (`bg-light`) — h2 "Our Groomers"; four team cards: Lloyd
     Wilson, Rachel Parker, Ian Smith, Alicia Henderson.
  7. Testimonials — h2 "happy Customers Says"; quote cards.
  8. Pricing (`bg-light`) — h2 "Affordable Packages"; plans: Basic
     $49/mos, Personal $79/mos, Business $109/mos (5 Dog Walk, 3 Vet Visit,
     3 Pet Spa, Free Supports + "Get Started").
  9. Blog (`bg-light`) — h2 "Latest Blog Updates"; three posts (image,
     meta, title, excerpt, "Read more").
  10. Footer (`ftco-footer`) — brand "Petvet Pet Care" + blurb, Services /
      Links / "Have a Questions?" columns, bottom bar.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#fd4c82** (pink/rose — primary buttons, headings
    accents); accent green **#91c235** (secondary highlights).
  - Text/background: **#212529** (dark text), **#6c757d** (muted),
    **#f8f9fa** (`bg-light` sections), white sections.
  - Fonts: **"Roboto"** (body/headings) via Google Fonts.
  - Buttons: filled pink `btn` (rounded, uppercase).
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the header; sections recreated with Tailwind tokens
  (`--color-brand` = `#fd4c82`, pink scale in `@theme`); placeholder images
  via `https://picsum.photos/seed/petvet-<n>/<w>/<h>`; icons from
  lucide-react; consultation/appointment CTA links; social icons inline SVG;
  no assets copied.

Petvet lives in `apps/petvet` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Petvet", links
to the main sections, a "Free Consultation" button, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Petvet page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Petvet" and links to the main sections
- **AND** the navbar SHALL show a "Free Consultation" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with the headline "The Kind of Care
Your Pets Deserve", an appointment CTA, and a phone number.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading matching "The Kind of Care Your Pets Deserve"
- **AND** it SHALL show an appointment button and a phone number

### Requirement: Intro services section

The system SHALL render an intro services section with three blocks:
Veterinary Service, Pet Grooming, and Pet Setting.

#### Scenario: Intro service blocks

- **GIVEN** the page is rendered
- **WHEN** the intro services section is displayed
- **THEN** it SHALL show the three service blocks, each with an icon, title, and copy

### Requirement: Services section

The system SHALL render a services section titled "We Are Best Agency For
Your Pets" with a "Make An Appointment" call-to-action.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "We Are Best Agency For Your Pets"
- **AND** it SHALL show a "Make An Appointment" button

### Requirement: Groomers section

The system SHALL render an "Our Groomers" section with at least four team
cards, each with a photo, name, and role.

#### Scenario: Groomer cards

- **GIVEN** the page is rendered
- **WHEN** the groomers section is displayed
- **THEN** it SHALL show the heading "Our Groomers"
- **AND** it SHALL show at least four team member cards with names

### Requirement: Testimonials section

The system SHALL render a "happy Customers Says" section with at least two
testimonial cards.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "happy Customers Says"
- **AND** it SHALL show at least two testimonial cards with quotes and names

### Requirement: Pricing section

The system SHALL render an "Affordable Packages" section with three plans
(Basic, Personal, Business), each with a price and a feature list.

#### Scenario: Pricing plans

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Affordable Packages"
- **AND** it SHALL show the Basic, Personal, and Business plans with prices and feature lists

### Requirement: Blog section

The system SHALL render a blog section titled "Latest Blog Updates" with at
least three posts, each with a title and an excerpt.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest Blog Updates"
- **AND** it SHALL show at least three blog posts with titles

### Requirement: Footer

The system SHALL render a footer with the site name "Petvet", an about
blurb, link columns (Services, Links, Have a Questions?), and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Petvet" and an about blurb
- **AND** it SHALL show link columns and social links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Petvet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Petvet — Pet Care & Veterinary Website Template"
