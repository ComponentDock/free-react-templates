# Template: Learnhub (Astro Template)

## Purpose

Learnhub is a single-page online-learning platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Learnhub" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Learnhub" — e-learning / online courses platform
  template (source: https://colorlib.com/wp/template/learnhub/).
- **Demo DOM analyzed:** https://learnhub-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/learnhub/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`learnhub-template-1770211181840.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: Courses, Categories, Instructors, Pricing, About + "Sign In" /
     "Get Started" buttons.
  2. Hero: "Learn Without Limits" + "View Pricing" + trust badges (4.8
     average rating, 30-day money-back guarantee, Lifetime access) + stats
     (50K+ Active Students, Expert Instructors, Quality Courses).
  3. Top Categories: 8 cards — Web Development (156 courses), Data Science,
     UI/UX Design (124 courses), Business, Digital Marketing, Mobile
     Development, Cloud & DevOps, Photography.
  4. Most Popular Courses: 4 course cards — The Complete Web Development
     Bootcamp 2032, Machine Learning A-Z: AI, Python & R, UI/UX Design: The
     Complete Guide, AWS Certified Solutions Architect 2032 (with
     BESTSELLER/55% OFF badges, hours, instructor).
  5. Why Learnify: "The Best Platform to Learn New Skills" — 4 cards
     (Learn at Your Pace, Expert Instructors, Hands-on Projects,
     Certificates).
  6. Instructors: "Learn From the Best" — 4 cards (Sarah Johnson — Google,
     Michael Chen — Netflix, Emily Rodriguez — Airbnb, David Kim — AWS).
  7. Testimonials: "What Our Students Say" — 3 quotes (Alex Thompson —
     Stripe, Data Scientist — Meta, Product Designer — Figma).
  8. Pricing: "Choose Your Learning Path" — 3 tiers (Free, Pro, Team) with
     billing toggle and guarantees.
  9. CTA: "Ready to Start Learning?" + "Browse Courses" ("No credit card
     required. 7-day free Pro trial. Cancel anytime.").
  10. Footer: Categories / Company / Support columns + copyright + cookie
      notice.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#6366f1** (indigo-500; scale #818cf8, #312e81,
    #1e1b4b) — primary buttons, accents, gradient hero.
  - Accent: emerald **#10b981** (success/ratings), amber #fbbf24
    (stars/badges), red #82181a (BESTSELLER badge).
  - Neutrals: white / gray / black (#101828); light surfaces with dark
    mode.
  - Fonts: **"Plus Jakarta Sans"** (display) + **"Inter"** (body) via
    Google Fonts.
  - Shapes: rounded-xl/2xl cards, pill buttons and badges.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/learnhub-<n>/<w>/<h>`); icons → lucide-react; Plus
  Jakarta Sans + Inter via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.

Learnhub lives in `apps/learnhub` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Learnhub", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Learnhub page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Learnhub" and links to
  Courses and Pricing
- **AND** the navbar SHALL show a "Get Started" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a call-to-action
button, and trust badges.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Learn Without Limits"
- **AND** it SHALL show a "View Pricing" button and trust badges

### Requirement: Categories section

The system SHALL render a categories section with at least six category
cards.

#### Scenario: Categories content

- **GIVEN** the page is rendered
- **WHEN** the categories section is displayed
- **THEN** it SHALL contain a heading "Explore Our Top Categories"
- **AND** it SHALL show cards for Web Development, Data Science, and UI/UX
  Design

### Requirement: Courses section

The system SHALL render a popular courses section with at least four course
cards.

#### Scenario: Courses content

- **GIVEN** the page is rendered
- **WHEN** the courses section is displayed
- **THEN** it SHALL contain a heading "Most Popular Courses"
- **AND** it SHALL show course cards including "The Complete Web Development
  Bootcamp"

### Requirement: Why-us section

The system SHALL render a value-proposition section with at least four
cards.

#### Scenario: Why-us content

- **GIVEN** the page is rendered
- **WHEN** the why-us section is displayed
- **THEN** it SHALL contain a heading "The Best Platform to Learn New
  Skills"
- **AND** it SHALL show cards for Learn at Your Pace and Expert Instructors

### Requirement: Instructors section

The system SHALL render an instructors section with at least four instructor
cards.

#### Scenario: Instructors content

- **GIVEN** the page is rendered
- **WHEN** the instructors section is displayed
- **THEN** it SHALL contain a heading "Learn From the Best"
- **AND** it SHALL show cards for Sarah Johnson and Michael Chen

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Students Say"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: Pricing section

The system SHALL render a pricing section with at least three tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Choose Your Learning Path"
- **AND** it SHALL show Free, Pro, and Team tiers

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and a browse button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Start Learning?"
- **AND** it SHALL show a "Browse Courses" button

### Requirement: Footer

The system SHALL render a footer with link columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Learnhub app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Learnhub — Learning Template"
