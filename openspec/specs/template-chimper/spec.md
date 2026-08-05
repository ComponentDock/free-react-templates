# Template: Chimper (Web Agency Landing)

## Purpose

Chimper is a single-page web-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Chimper" website template design (see TEMPLATES.md), built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Chimper" — web agency website template
  (source: https://colorlib.com/wp/template/chimper/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/chimper/
  (HTTP 200 — full rendered DOM + `css/style.css` (22 KB) + Bootstrap 4
  theme `css/bootstrap.min.css` extracted). The TEMPLATES.md screenshot
  (`chimper-free-template.jpg`) matches this reconstruction.
- **Section order (1:1):**
  1. Top bar (`top-bar`, bottom border): "Phone: +1 292 3293 4238" ·
     "Email: info@yourdomain.com" · social icons (Facebook, Twitter,
     Instagram, LinkedIn).
  2. Navbar (`site-navbar`, white): logo "Chimper"; links Home, Work,
     Services (dropdown: Web Applications, WordPress Dev, Mobile
     Applications, eCommerce), About, Blog, Contact.
  3. Hero (`site-blocks-cover overlay`): full-viewport photo background
     with `rgba(0,0,0,.4)` overlay; H1 "We Are Expert in" + typed-words
     rotating ["Web Apps", "WordPress", "Mobile Apps"]; lead "We Make
     Beautiful Things"; "Hire Us" button.
  4. Welcome (`ft-feature-1`, black band): circular play button
     (brand `#0d0cb5`) + "Welcome To Chimper An Awward Winning Web Agency";
     feature photo; 4 service items — Web Design, Branding & Identity,
     Art Direction, Copywriting — each with a blurb and "Read More" link.
  5. Values (`site-section`): three numbered cards "01. Our Values",
     "02. Our Mission", "03. Our Philosophy" with a huge ghost number
     behind (8rem, weight 900, `#f2f4f5`).
  6. Featured Projects: heading with 100px brand underline; 3 hover-reveal
     media cards (Project Name 1 · Web Application, Project Name 2 ·
     Branding, Project Name 3 · Website; hover shows title + uppercase
     category over `rgba(0,0,0,.8)`); "Show All Works" button.
  7. Testimonials (`testimonial-wrap`): centered carousel of 4 quotes
     (John Smith, Christine Aguilar, Robert Spears, Bruce Rogers) with
     circular avatars; prev/next arrows + dots.
  8. Blog (`bg-light`): 3 cards (image, "Create Beautiful Website In Less
     Than An Hour", meta "Author • Jan 18, 2019 • News", excerpt,
     "Continue Reading...").
  9. CTA band (`bg-primary`): full-width "Hire Us & Let's Get Started".
  10. Footer (`site-footer`, `#333333`): About Us blurb, Features links
      (About Us, Services, Testimonials, Contact Us), Follow Us social
      circles, Subscribe Newsletter form (email input + "Send" button),
      copyright line.
- **Design tokens extracted from CSS:**
  - Primary brand **`#0d0cb5`** (deep indigo/navy) — `--primary` Bootstrap
    theme variable; buttons, active nav link, section-heading underline
    (100px × 3px), carousel dots, play button.
  - Font: **"Quicksand"** (Google Fonts; weights 300/400/500/700/900).
  - Buttons: pill shape (border-radius 30px); `btn-md` = padding 15px 30px,
    font-size 12px, uppercase, letter-spacing .1em.
  - Section headings: ~2.5rem (4rem on md+), brand underline centered.
  - Hero: min-height 100vh, photo bg + 40% black overlay; H1 white 3rem
    weight 400; subtext `rgba(255,255,255,.5)`.
  - Light section bg `#ccc` (bg-light); black band `#000`; footer `#333333`
    with text `#737373`, headings white, links `#999999` → white on hover.
  - Project cards: hover overlay `rgba(0,0,0,.8)`, image scale 1.05,
    title/category fade in.
  - Testimonial quote: italic, 1.5rem, max-width 800px centered; avatar
    circle 100px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/chimper-<n>/<w>/<h>`); icons → lucide-react
  (Smartphone, Puzzle, Paintbrush, MessageCircle for the services;
  Play for the video button) plus inline SVG brand icons (Facebook, X,
  Instagram, LinkedIn — brand icons were removed from lucide-react);
  font → Google Fonts Quicksand via `<link>`; no assets copied.

Chimper lives in `apps/chimper` and uses shared components from `packages/ui`
(ButtonLink) where the house pattern does.

## Requirements

### Requirement: Top bar

The system SHALL render a top utility bar above the navbar with contact
details and social links.

#### Scenario: Top bar content

- **GIVEN** the Chimper page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show "Phone: +1 292 3293 4238" and "Email: info@yourdomain.com"
- **AND** it SHALL show social links for Facebook, X, Instagram, and LinkedIn

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Chimper",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Chimper page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Chimper" and links to Home, Work, Services, About, Blog, and Contact
- **AND** the Services link SHALL expand a list of services (Web Applications, WordPress Dev, Mobile Applications, eCommerce)
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-viewport hero with a rotating headline and a
"Hire Us" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We Are Expert in" that cycles through "Web Apps", "WordPress", and "Mobile Apps"
- **AND** it SHALL show the lead line "We Make Beautiful Things"
- **AND** it SHALL show a "Hire Us" button

### Requirement: Welcome / services section

The system SHALL render a black welcome band with a play button, a welcome
heading, and four service items with icons, blurbs, and "Read More" links.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL contain a heading "Welcome To Chimper An Awward Winning Web Agency"
- **AND** it SHALL show service items "Web Design", "Branding & Identity", "Art Direction", and "Copywriting", each with a "Read More" link

### Requirement: Values section

The system SHALL render a values section with three numbered items.

#### Scenario: Values content

- **GIVEN** the page is rendered
- **WHEN** the values section is displayed
- **THEN** it SHALL show items numbered 01, 02, and 03 titled "Our Values", "Our Mission", and "Our Philosophy"

### Requirement: Featured projects section

The system SHALL render a featured projects section with a heading, three
project cards, and a "Show All Works" button.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the featured projects section is displayed
- **THEN** it SHALL contain a heading "Featured Projects"
- **AND** it SHALL show project cards titled "Project Name 1", "Project Name 2", and "Project Name 3" with categories "Web Application", "Branding", and "Website"
- **AND** it SHALL show a "Show All Works" button

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with four quotes and
navigation controls.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show quotes attributed to "John Smith", "Christine Aguilar", "Robert Spears", and "Bruce Rogers"

#### Scenario: Carousel navigation

- **GIVEN** the testimonials carousel is displayed
- **WHEN** the user presses the next/previous arrows or a dot
- **THEN** the visible quote SHALL change accordingly

### Requirement: Blog section

The system SHALL render a blog section with three article cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show three cards titled "Create Beautiful Website In Less Than An Hour"
- **AND** each card SHALL show an author, a date, a "News" category, and a "Continue Reading..." link

### Requirement: Call-to-action band

The system SHALL render a full-width brand-colored call-to-action band.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show "Hire Us & Let's Get Started"

### Requirement: Footer

The system SHALL render a footer with an about blurb, link columns, social
links, a newsletter form, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" blurb and a "Features" link column (About Us, Services, Testimonials, Contact Us)
- **AND** it SHALL show social links (Facebook, X, Instagram, LinkedIn)
- **AND** it SHALL show a newsletter form with an email input and a "Send" button
- **AND** it SHALL show a copyright line for "Chimper"

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Chimper app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar and navbar in the banner landmark, all sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Chimper — Web Agency Template"
