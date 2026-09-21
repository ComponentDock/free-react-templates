# Template: Loanforge (Finance Lending Site)

## Purpose

Loanforge is a single-page finance/lending website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Loan" free template (source:
https://colorlib.com/wp/template/loan/), built under a DIFFERENT name
(**Loanforge**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap-based finance template with a hero slider,
about section, services grid with icons, support/why-choose section with
image + checklist, application/apply loan form, team grid, testimonial
slider, blog cards, and a four-column footer. The page uses a blue
(`#3589f1`) brand with dark navy (`#000a2d`) headings, "Rufina" serif
for accent text and "Rubik" sans-serif for body text.

## Naming

The ColorLib source name "Loan" is FORBIDDEN as the app name. **Loanforge**
is the new, original name — kebab-case, no collision with `apps/`,
`openspec/specs/`, or existing TEMPLATES.md entries (verified: zero hits
for `loanforge`). Source slug: `loan`, preview URL:
https://preview.colorlib.com/theme/loan/

## Design reference (replication findings)

- **Original:** ColorLib "Loan" (page title: "Finance HTML-5 Template").
  Single-page finance/lending template.
- **Live preview — REACHABLE (verified by curl fetch):**
  `https://preview.colorlib.com/theme/loan/` returns 200. Stylesheets:
  `assets/css/style.css` (main custom styles) + Bootstrap CSS + several
  plugin CSS (owl carousel, slicknav, flaticon, animate, magnific popup,
  nice-select, slick).
- **Live DOM structure (from fetched HTML):**

  **Section order (top to bottom):**
  1. **Header/Navbar** — transparent header with logo left, nav links
     (Home, About, Services, Blog with submenu, Contact) center-right,
     and a blue phone-number button (`+880.762.009.00`) far right.
     Sticky on scroll. Mobile hamburger menu.
  2. **Hero Slider** — full-width slider area with background image
     (`assets/img/hero/h1_hero.jpg`), dark overlay. Contains: subtitle
     "Achieve your financial goal", heading "Small Business Loans For
     Daily Expenses.", CTA button "Apply for Loan" (dark bg), and a
     hero image on the right. Slider-footer strip below: 4 caption items
     (clock/like/money icons + "Quick & Easy Loan Approvals" text) on a
     dark section-bg.
  3. **About Section** — two-column: left has "About Our Company" subtitle,
     heading "Building a Brighter financial Future & Good Support.",
     two paragraphs of lorem ipsum, and an "Apply for Loan" button.
     Right column has overlapping images (about1.png, about2.png) with
     a decorative layered effect. Light background (`#fff`).
  4. **Services Section** — dark background image (`section_bg02.jpg`),
     white text. Centered heading "High Performance Services For All
     Industries." with subtitle. 4-column grid of service cards: each
     has a flaticon icon, title (Business Loan, Commercial Loans,
     Construction Loans, Business Loan), and description paragraph.
     Cards have white background, icon circle at top.
  5. **Support/Why-Choose Section** — two-column: left has a large
     image (`single2.jpg`) with an overlaid badge "Since 1992". Right
     has heading "We Promise Sustainable Future For You.", subtitle
     "Why Choose Our Company", paragraph text, and 4 checked-item
     labels (custom checkbox styling with checkmark spans).
  6. **Application/Apply Form Section** — dark background image
     (`section_bg03.jpg`), white text. Heading "Easy Application
     Process For Any Types of Loan" with subtitle "Apply in Three
     Easy Steps". A horizontal form with: Select Amount dropdown,
     Duration Month dropdown, Return Amount input, and "Apply for
     Loan" submit button.
  7. **Team Section** — white background. Heading "Take a look to our
     professional team members." with subtitle "Our Loan Section Team
     Members". 4-column grid of team cards: each has a photo, social
     links overlay (facebook, twitter, globe), name, and role. All
     names are "Bruce Roberts" / "Volunteer leader" (placeholder).
  8. **Testimonial Section** — background color `#fbf9ff` (light
     lavender). Carousel of testimonials: each has a quote icon image,
     testimonial text, founder photo, founder name ("Jessya Inn"),
     and role ("Co Founder"). Slider dots below.
  9. **Blog Section** — white background. Heading "News from around
     the world selected by us." with subtitle. 2-column grid of blog
     cards: each has a large image, date, title link, and author/date
     text.
  10. **Footer** — dark background (`#000a2d` or very dark navy).
      Four columns: logo + tagline, Quick Links, New Products, Support
      links. Bottom bar: copyright text (Colorlib attribution — to be
      replaced with Component Dock), and social icons (twitter, facebook,
      globe, instagram). Back-to-top button.

- **Design tokens (extracted from style.css):**

| Token                | Value                            | Notes                                                         |
| -------------------- | -------------------------------- | ------------------------------------------------------------- |
| `--color-brand`      | `#3589f1`                        | Primary blue — buttons, links, section-tittle spans, slider   |
|                      |                                  | dots, header-btn bg, focus outlines                           |
| `--color-brand-dark` | `#2171d3`                        | Header-btn hover/active bg                                    |
| `--color-navy`       | `#000a2d`                        | Dark headings (section-tittle h2), default btn bg, hero-btn   |
|                      |                                  | bg, footer area bg                                            |
| `--color-orange`     | `#ff872d`                        | Accent color — hero-btn::before hover, active states          |
| `--color-text`       | `#635c5c`                        | Body text color (paragraphs, descriptions)                    |
| `--color-text-dim`   | `#7a8290`                        | Lighter text for subtexts                                     |
| `--color-white`      | `#fff`                           | Card backgrounds, text on dark backgrounds                    |
| `--color-bg-light`   | `#f7f7f7`                        | Light section backgrounds                                     |
| `--color-bg-lavender`| `#fbf9ff`                        | Testimonial section background                                |
| `--color-gold`       | `#dca73a`                        | Testimonial icon tint                                         |
| `--font-heading`     | 'Rufina', serif                  | Section subtitle spans, headings                              |
| `--font-body`        | 'Rubik', sans-serif              | Body text, buttons, general UI                                |
| `--btn-radius`       | `5px`                            | Standard button border-radius                                 |
| `--btn-radius-round` | `50%`                            | Slider dots, circular elements                                |
| `--hero-btn-radius`  | `0`                              | Hero button has sharp corners (no radius)                     |

## Requirements

### Requirement: Header / Navbar

The system SHALL render a transparent sticky header with logo, navigation
links, and a phone-number CTA button.

#### Scenario: Desktop header layout

- **GIVEN** the Loanforge app is rendered on a desktop viewport
- **THEN** the header SHALL display a logo on the left, navigation links
  (Home, About, Services, Blog, Contact) centered-right, and a blue
  phone-number button (`+880.762.009.00`) on the far right
- **AND** the header SHALL be transparent initially and gain a background
  on scroll (sticky behavior)
- **AND** the Blog nav item SHALL have a dropdown submenu (Blog, Blog
  Details, Element, Apply Now)

#### Scenario: Mobile header

- **GIVEN** the viewport is at or below 1024px
- **THEN** the nav links and phone button SHALL be hidden
- **AND** a hamburger menu button SHALL appear for mobile navigation

### Requirement: Hero Slider

The system SHALL render a full-width hero slider with background image,
overlay, headline, subtitle, CTA button, and hero illustration.

#### Scenario: Hero content

- **GIVEN** the Loanforge app is rendered
- **THEN** the hero area SHALL display a background image with dark
  overlay, the subtitle "Achieve your financial goal", the heading
  "Small Business Loans For Daily Expenses.", and an "Apply for Loan"
  CTA button (dark background `#0b1416`)
- **AND** a hero illustration SHALL appear on the right side

#### Scenario: Slider footer strip

- **GIVEN** the hero slider is visible
- **THEN** a dark footer strip SHALL render below the slider with 4
  feature highlights: an icon (clock, like, money), text "Quick & Easy
  Loan Approvals", and a decorative image on the left
- **AND** the strip SHALL use the dark section background

### Requirement: About Section

The system SHALL render a two-column about section with text content on
the left and overlapping images on the right.

#### Scenario: About content

- **GIVEN** the Loanforge app is rendered
- **THEN** the about section SHALL show the subtitle "About Our Company",
  heading "Building a Brighter financial Future & Good Support.", two
  paragraphs of descriptive text, and an "Apply for Loan" button
- **AND** the right column SHALL display two overlapping images creating
  a layered decorative effect

### Requirement: Services Section

The system SHALL render a services grid with a dark background, centered
heading, and 4 service cards.

#### Scenario: Services layout

- **GIVEN** the Loanforge app is rendered
- **THEN** the services section SHALL have a dark background image
- **AND** the heading "High Performance Services For All Industries."
  SHALL be centered with the subtitle "Services that we are providing"
- **AND** 4 service cards SHALL display in a row, each with an icon
  circle at top, service title, and description text
- **AND** the 4 services SHALL be: Business Loan, Commercial Loans,
  Construction Loans, Business Loan (matching the source)

### Requirement: Support / Why-Choose Section

The system SHALL render a two-column support section with an image +
badge on the left and checklist items on the right.

#### Scenario: Support content

- **GIVEN** the Loanforge app is rendered
- **THEN** the left column SHALL show a large image with a "Since 1992"
  overlaid badge
- **AND** the right column SHALL show the subtitle "Why Choose Our
  Company", heading "We Promise Sustainable Future For You.",
  descriptive paragraph, and 4 checked items with custom checkbox
  styling

### Requirement: Application / Apply Form

The system SHALL render a loan application form on a dark background.

#### Scenario: Application form layout

- **GIVEN** the Loanforge app is rendered
- **THEN** the application section SHALL have a dark background image
- **AND** the heading "Easy Application Process For Any Types of Loan"
  SHALL be centered with subtitle "Apply in Three Easy Steps"
- **AND** a horizontal form SHALL contain: Select Amount dropdown,
  Duration Month dropdown, Return Amount text input, and an "Apply
  for Loan" submit button

### Requirement: Team Section

The system SHALL render a team grid with photos, social links, names,
and roles.

#### Scenario: Team grid

- **GIVEN** the Loanforge app is rendered
- **THEN** the heading "Take a look to our professional team members."
  SHALL be centered with subtitle "Our Loan Section Team Members"
- **AND** 4 team cards SHALL display in a row, each with a photo,
  social links overlay (facebook, twitter, globe), name, and role
- **AND** placeholder names SHALL be used (source uses "Bruce Roberts"
  / "Volunteer leader" for all)

### Requirement: Testimonial Section

The system SHALL render a testimonial carousel with quotes, founder
info, and navigation dots.

#### Scenario: Testimonial display

- **GIVEN** the Loanforge app is rendered
- **THEN** the testimonial section SHALL have a light lavender
  background (`#fbf9ff`)
- **AND** each testimonial SHALL show a quote icon, testimonial text,
  founder photo, founder name, and role
- **AND** navigation dots SHALL allow switching between testimonials

### Requirement: Blog Section

The system SHALL render a blog grid with article cards.

#### Scenario: Blog cards

- **GIVEN** the Loanforge app is rendered
- **THEN** the heading "News from around the world selected by us."
  SHALL be centered with subtitle "News form our latest blog"
- **AND** 2 blog cards SHALL display in a row, each with a large image,
  date, title link, and author/date text

### Requirement: Footer

The system SHALL render a four-column footer with a bottom bar.

#### Scenario: Footer content

- **GIVEN** the Loanforge app is rendered
- **THEN** the footer SHALL have a dark background with 4 columns:
  logo + tagline, Quick Links, New Products, Support links
- **AND** the bottom bar SHALL include copyright text and social icons
  (twitter, facebook, globe, instagram)
- **AND** the Colorlib attribution SHALL be replaced with a link to
  https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Accessibility and Semantics

The system SHALL expose accessible semantics throughout.

#### Scenario: Semantics

- **GIVEN** the Loanforge app is rendered
- **THEN** the navbar SHALL use `<nav>` with semantic `<ul>`/`<li>` links
- **AND** all sections SHALL use semantic heading hierarchy (h1 for hero,
  h2 for section headings)
- **AND** form inputs SHALL have associated labels
- **AND** interactive elements SHALL have focus-visible rings
- **AND** images SHALL have alt text
- **AND** the slider SHALL have appropriate ARIA attributes for
  carousel semantics

## Verification checklist

- [ ] `npm run verify:app -- loanforge` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual match vs the live preview at
      https://preview.colorlib.com/theme/loan/: hero slider with dark
      overlay, about section with overlapping images, services grid on
      dark bg, support section with checklist, application form, team
      grid, testimonial carousel, blog cards, dark footer.
- [ ] Design tokens: brand blue `#3589f1`, dark navy `#000a2d`, heading
      font Rufina serif, body font Rubik sans-serif, button radius 5px.
- [ ] Responsive check at 768px (single-column layout, no overflow).
- [ ] No ColorLib references in any app file; footer links
      https://www.componentdock.com/.
