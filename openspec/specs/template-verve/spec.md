# Template: Verve (App Landing Page)

## Purpose

Verve is a single-page services/portfolio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Racks" website template design
(https://colorlib.com/wp/template/racks/), built under a **different name**
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Racks" — Free Bootstrap 4 services template
  (source: https://colorlib.com/wp/template/racks/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/racks/
  (HTTP 200, full rendered DOM + `css/style.css` (68KB) extracted).
  The TEMPLATES.md screenshot (`racks-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Solution, Portfolio, Blog,
  Contact) → Hero ("I love to" + blurb + Watch Video) → Services ("Our
  Services — Racks provides a fully featured text services platform!" +
  Unlimited Features, Multiple Functions, Advanced Visualizations,
  Community & Supports) → CTA ("Turn every channel into a revenue channel
  and drive business growth" + View more details) → Works ("Recent Works" +
  Illustration, Application, Web Design) → Testimonials ("Customer Says —
  Our satisfied customer says" + Dennis Green as Marketing Manager /
  Interface Designer / UI Designer) → Counter ("Our achievements" + 3
  stats) → Blog ("Recent Blog" + 3 posts) → Footer (Company, Quick Links,
  Contact Information, Newsletter).
- **Design tokens extracted from `style.css`:**
  - Primary **cyan `#78d5ef`** (`.btn-primary` background, `.parallax-img`
    background) with dark `#212529` button text.
  - **Pink `#ee76ad`** accent (`.ftco-counter` background band).
  - Hero overlay **blue `#448ef6`** (`.slider-item .overlay`, opacity ~.99).
  - Service icons: circular 90px tinted pairs — `#eaf8fd`/`#78d5ef`,
    `#ebfdf4`/`#79efb4`, `#fce7f1`/`#ee76ad`, `#fdf2ea`/`#efac78`.
  - Dark text `#404044`, `#212529`; muted `#6c757d`.
  - Font: **"Work Sans"** (Google Fonts).
  - Subheadings: 12px uppercase, letterspaced, muted.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/verve-<n>/<w>/<h>`); icons → lucide-react; video
  button → styled play button; counter animation → static values; no
  assets copied.

Verve lives in `apps/verve` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Verve",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Verve page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Verve" and links to Home, Services, Portfolio, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
"Watch Video" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "I love to"
- **AND** it SHALL show a supporting blurb and a "Watch Video" button

### Requirement: Services section

The system SHALL render a services section with a heading and four service
cards, each with an icon, a title, and a blurb.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Verve provides a fully featured text services platform!"
- **AND** it SHALL show cards titled "Unlimited Features", "Multiple Functions", "Advanced Visualizations", and "Community & Supports"

### Requirement: Call-to-action band

The system SHALL render a cyan call-to-action band with a heading and a
"View more details" link.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain the heading "Turn every channel into a revenue channel and drive business growth"
- **AND** it SHALL show a "View more details" link

### Requirement: Works section

The system SHALL render a works section with a heading and at least three
project cards.

#### Scenario: Works content

- **GIVEN** the page is rendered
- **WHEN** the works section is displayed
- **THEN** it SHALL contain a heading "Recent Works"
- **AND** it SHALL show at least three project cards titled "Illustration", "Application", and "Web Design"

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading, quotes, and
reviewers.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Our satisfied customer says"
- **AND** it SHALL show three quotes from "Dennis Green" with the roles Marketing Manager, Interface Designer, and UI Designer

### Requirement: Achievements counter

The system SHALL render an achievements band with a heading and three stats.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the achievements band is displayed
- **THEN** it SHALL contain a heading "Our achievements"
- **AND** it SHALL show stats about customers satisfied, preset options, and response time

### Requirement: Blog section

The system SHALL render a blog section with a heading and three posts.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Recent Blog"
- **AND** it SHALL show three blog posts with titles and excerpts

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter form,
social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show Quick Links, Contact Information, and Newsletter columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

#### Scenario: Newsletter subscribe

- **GIVEN** the footer newsletter form is displayed
- **WHEN** the user enters an email address and presses Subscribe
- **THEN** the form SHALL submit without reloading and the input SHALL be cleared

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Verve app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Verve — App Landing Template"
