# Template: Ironforge (Astro Template)

## Purpose

Ironforge is a single-page fitness/gym landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ironforge" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ironforge" — fitness center / gym website
  template (source: https://colorlib.com/wp/template/ironforge/).
- **Demo DOM analyzed:** https://ironforge-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/ironforge/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`ironforge-template-1771943626586.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: About, Programs, Schedule, Trainers, Pricing, Blog, Contact +
     "Join Now" button.
  2. Hero: "Push Beyond Your Limits" + "View Programs" / "Watch Demo"
     buttons + stats (5,000+ Members, 50+ Classes/Week, 15+ Expert
     Trainers, 24/7 Access).
  3. Training Programs: 6 cards — Strength Training, HIIT, Yoga &
     Flexibility, Boxing & MMA, CrossFit, Personal Training.
  4. This Week's Classes (schedule): Monday–Friday class timetable.
  5. Expert Trainers: 4 cards — Marcus Johnson (Strength & Conditioning,
     12 yrs), Sarah Chen (Yoga & Flexibility, 8 yrs), Diego Reyes (Boxing &
     MMA, 10 yrs), Emily Park (CrossFit & HIIT, 7 yrs).
  6. Choose Your Plan: 3 tiers — Basic, Pro, Elite (7-day free trial,
     monthly/annual billing).
  7. Real Results, Real People: testimonial quotes.
  8. Frequently Asked Questions: 5 questions (freeze membership, personal
     training, group classes, locker rooms, guests).
  9. CTA: "Your Transformation Starts Today" + "Talk to a Trainer" + "Join
     Now".
  10. Footer: Programs / Company / Support / Stay Updated (newsletter
      Subscribe) + copyright + cookie notice.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#ea580c** (orange-600; scale #f97316, #fb923c, #c2410c)
    — primary CTAs, accents, highlights.
  - Neutrals: white / gray (#e5e7eb, #d1d5db, #6b7280, #374151, #1f2937,
    #111827) / black; dark hero/footer.
  - Fonts: **"Space Grotesk"** (display) + **"DM Sans"** (body) via Google
    Fonts.
  - Shapes: rounded-lg/xl/2xl cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/ironforge-<n>/<w>/<h>`); icons → lucide-react; Space
  Grotesk + DM Sans via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.

Ironforge lives in `apps/ironforge` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Ironforge", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Ironforge page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Ironforge" and links to
  Programs, Schedule, and Pricing
- **AND** the navbar SHALL show a "Join Now" button and a dark-mode toggle
  button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, call-to-action
buttons, and gym stats.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Push Beyond Your Limits"
- **AND** it SHALL show "View Programs" and "Watch Demo" buttons and gym
  stats

### Requirement: Programs section

The system SHALL render a programs section with at least six program cards.

#### Scenario: Programs content

- **GIVEN** the page is rendered
- **WHEN** the programs section is displayed
- **THEN** it SHALL contain a heading "Training Programs for Every Goal"
- **AND** it SHALL show cards for Strength Training, HIIT, Yoga &
  Flexibility, Boxing & MMA, CrossFit, and Personal Training

### Requirement: Schedule section

The system SHALL render a weekly class schedule section.

#### Scenario: Schedule content

- **GIVEN** the page is rendered
- **WHEN** the schedule section is displayed
- **THEN** it SHALL contain a heading "This Week's Classes"
- **AND** it SHALL show class days including Monday and Friday

### Requirement: Trainers section

The system SHALL render a trainers section with at least four trainer cards.

#### Scenario: Trainers content

- **GIVEN** the page is rendered
- **WHEN** the trainers section is displayed
- **THEN** it SHALL contain a heading "Expert Trainers"
- **AND** it SHALL show cards for Marcus Johnson and Sarah Chen

### Requirement: Pricing section

The system SHALL render a pricing section with at least three tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Choose Your Plan"
- **AND** it SHALL show Basic, Pro, and Elite tiers

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Real Results, Real People"
- **AND** it SHALL show at least one testimonial quote

### Requirement: FAQ section

The system SHALL render an FAQ section with at least three questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Your Transformation Starts Today"
- **AND** it SHALL show a "Talk to a Trainer" button

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter signup, and
a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show a newsletter signup with a Subscribe button

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Ironforge app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Ironforge — Fitness Template"
