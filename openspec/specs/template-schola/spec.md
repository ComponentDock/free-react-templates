# Template: Schola (Education Landing)

## Purpose

Schola is a single-page education/e-learning landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Academix" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Academix" — education template
  (source: https://colorlib.com/wp/template/academix/).
- **Demo DOM analyzed:** https://academix-colorlib.pages.dev/
  (HTTP 200; the classic preview URL `https://preview.colorlib.com/theme/academix/`
  returns 404 — the template's live demo is hosted on Cloudflare Pages per
  the ColorLib preview portal). The TEMPLATES.md screenshot
  (`academix-template-1770211029932.jpg`) is the visual reference.
- **Section order (1:1, from the live demo DOM):**
  1. Navbar — geometric gradient logo mark + "SkillForge" wordmark (recreated
     as "Schola"), links: Courses, Categories, Instructors, Pricing, About;
     Sign in link, Get Started gradient CTA, dark-mode toggle, mobile menu.
  2. Hero — "New: AI & Machine Learning Track" badge, H1 "Forge Your Future
     with Expert-Led Courses", blurb, "Browse Courses" (gradient, glow) +
     "View Pricing" (outline) CTAs; right-side course-card visual with
     rating/bestseller/hours chips and a skill-progress bar; stats strip:
     100K+ Active Learners, 500+ Expert Courses, 95% Completion Rate,
     4.9 Average Rating.
  3. Categories — "Browse by Category" grid with 8 colored icon tiles:
     Software Engineering, Creative Design, Digital Marketing, Data &
     Analytics, Cloud & DevOps, Leadership & Management, Cybersecurity,
     Product Management.
  4. Featured Courses — 5 course cards (image, Bestseller/Sale badges, level
     badge, category, title, instructor, rating, price): Complete Machine
     Learning & AI Bootcamp, Advanced UI/UX Design Masterclass, Full-Stack
     React & Node.js Development, AWS Solutions Architect Professional, Data
     Science with Python: Complete Guide.
  5. Features — "Everything You Need to Succeed" + 6 tiles: Expert-Led
     Content, Hands-On Projects, Learn at Your Pace, Career Support,
     Community Access, Certificates.
  6. Instructors — "Learn from Industry Leaders" + 5 profile cards
     (Dr. Maya Chen, Marcus Thompson, Elena Rodriguez, James Okonkwo,
     Priya Sharma) with role, rating, and course count.
  7. Testimonials — "What Our Learners Say" + 4 quotes (David Park/Spotify,
     Sophie Williams/Airbnb, Ahmed Hassan/Tesla, Rachel Kim/Notion).
  8. Pricing — "Choose Your Learning Path" + Monthly/Yearly billing toggle
     (Save 25%) + 3 plans: Explorer (free), Professional ($39/mo, Most
     Popular), Enterprise ($79/mo); 30-day money-back note.
  9. CTA band — "Ready to Start Your Learning Journey?" + "Get Started Free"
     / "Browse Courses" + trust bullets (No credit card required, Cancel
     anytime, 30-day money-back guarantee).
  10. Footer — brand blurb, 4 link columns (Categories, Company, Support,
      Legal), social icons (X, LinkedIn, YouTube, Instagram), copyright.
- **Design tokens extracted from the DOM/CSS:**
  - Primary brand teal: hue-180 teal scale, primary-500 ≈ `#008574`
    (oklch(55% .14 180)); used for the logo gradient, CTA gradient, and
    active states.
  - Accent orange: accent-500 ≈ `#e65f2a` (oklch(65% .18 40)); used in the
    logo gradient, "Bestseller"/"Sale" badge accents, and the CTA glow.
  - Neutrals: Tailwind `gray` scale; light gray section bands
    (`bg-gray-100/50`) alternate with white; dark-mode aware (`dark:`
    classes) with `gray-950` dark surfaces.
  - Category tiles use distinct Tailwind colors (red, pink, cyan, violet,
    emerald, amber, blue, orange).
  - Fonts: **"DM Sans"** (body) + **"Space Grotesk"** (display) via Google
    Fonts `<link>`.
  - Rounded-2xl cards with `card-hover` lift, rounded-xl pill buttons,
    gradient CTA with blurred glow (`btn-glow`).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/schola-<n>/<w>/<h>`); icons → lucide-react (brand
  icons → inline SVG); no assets copied.

Schola lives in `apps/schola` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with a logo, anchor links to the
page's sections, a "Get Started" CTA, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Schola page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Schola" and links to Courses, Categories, Instructors, Pricing, and About
- **AND** the navbar SHALL show a "Get Started" CTA and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a badge, a headline, a blurb,
two CTA buttons, a course-card visual, and a stats strip.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Forge Your Future with Expert-Led Courses"
- **AND** it SHALL show a blurb, a "Browse Courses" CTA, and a "View Pricing" CTA
- **AND** it SHALL show a stats strip with "100K+" learners and "500+" expert courses

### Requirement: Categories section

The system SHALL render a categories section with a heading and at least six
category cards.

#### Scenario: Categories content

- **GIVEN** the page is rendered
- **WHEN** the categories section is displayed
- **THEN** it SHALL contain a heading "Browse by Category"
- **AND** it SHALL show at least six category cards including Software Engineering, Creative Design, Digital Marketing, Data & Analytics, Cloud & DevOps, and Cybersecurity

### Requirement: Featured courses

The system SHALL render a featured-courses section with at least three course
cards, each showing a title, category, instructor, rating, and price.

#### Scenario: Course cards content

- **GIVEN** the page is rendered
- **WHEN** the courses section is displayed
- **THEN** it SHALL contain a heading "Featured Courses"
- **AND** it SHALL show at least three course cards with titles, instructor names, ratings, and prices

### Requirement: Features section

The system SHALL render a features section with a heading and at least six
feature tiles.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything You Need to Succeed"
- **AND** it SHALL show at least six tiles including Expert-Led Content, Hands-On Projects, and Learn at Your Pace

### Requirement: Instructors section

The system SHALL render an instructors section with a heading and at least
four instructor profile cards.

#### Scenario: Instructors content

- **GIVEN** the page is rendered
- **WHEN** the instructors section is displayed
- **THEN** it SHALL contain a heading "Learn from Industry Leaders"
- **AND** it SHALL show at least four instructor cards with names and roles

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and at least
three learner quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Learners Say"
- **AND** it SHALL show at least three quotes attributed to named learners

### Requirement: Pricing section

The system SHALL render a pricing section with a billing-period toggle and
three plans.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Choose Your Learning Path"
- **AND** it SHALL show three plans: Explorer, Professional, and Enterprise

#### Scenario: Billing toggle

- **GIVEN** the pricing section is displayed
- **WHEN** the user switches the billing period to Yearly
- **THEN** the Professional plan SHALL show its yearly price

### Requirement: CTA band

The system SHALL render a call-to-action band with a headline and two CTA
buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a heading "Ready to Start Your Learning Journey?"
- **AND** it SHALL show "Get Started Free" and "Browse Courses" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Categories, Company, Support, Legal) and a copyright line
- **AND** it SHALL show social links (X, LinkedIn, YouTube, Instagram)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Schola app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Schola — Education Landing Template"
