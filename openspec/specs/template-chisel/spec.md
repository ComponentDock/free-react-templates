# Template: Chisel (Architecture Template)

## Purpose

Chisel is a single-page architecture firm website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Reshape" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Reshape" — architecture firm template
  (source: https://colorlib.com/wp/template/reshape/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/reshape/
  (HTTP 200, 27.6 KB rendered DOM, title "Reshape Free HTML Template by
  Colorlib"). Stylesheet `css/style.css` (34.8 KB, extracted) on a Bootstrap
  4 base; icomoon icon font; Google Fonts "Mulish" via cf-fonts in the head.
- **Screenshot:** `reshape-free-template.jpg` (TEMPLATES.md lines 119/1980) —
  verified live in a browser (vision): split hero with architectural photo
  right, stats band, 6-card services grid, portfolio slider, testimonials,
  blog cards, dark footer. Real page structure verified 1:1 from the DOM:
- **Section order (1:1):**
  1. Navbar: "Chisel." logo (blue dot) + Home, About us, Our services, How
     we work?, Portfolio, Contact us; transparent over hero.
  2. Hero: full-viewport split — left text (eyebrow paragraph + H1 "We are
     Chisel, and we shape buildings." with <strong> emphasis + "About us"
     blue button + "Our services" black button), right architectural photo.
  3. Stats band: dark strip with 4 counters — 1087 Number of Projects, 57
     Year of Experience, 670 Number of Employees, 900 Number of Clients.
  4. About: image + heading + two paragraphs + "About us" link.
  5. Services: "OUR SERVICES" eyebrow + H2 intro + 6 cards (icon circle +
     title + blurb + "Learn more"): Construction Consultation, House
     Renovation, Planning, Interior Design, Architecture, Installation
     Works.
  6. Portfolio: "PORTFOLIO" heading + image slider (4 project photos) with
     prev/next arrows + text slides (Project Title One..Four + "See Case
     Study" button).
  7. Testimonials: blockquote + author "James Anderson" + avatar.
  8. Blog Posts: 4 cards (image + title "Separated they live in" + meta
     "Aug 4, 2020 by Admin in Architect").
  9. Footer: dark `#222` with 4 columns (Home links, Practice Area,
     Services, Contact address/phone/email) + "Connect" social icons +
     black copyright bar.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#0779e4`** (buttons, active links, logo dot, social
    circles); hover `#0883f7`.
  - Secondary button: black `#000000` (hover `#0a0a0a`).
  - Text: ink `#000000`, muted `#aaa` (footer), `#6c757d` body.
  - Footer background `#222`; light section background `#f8f9fa`.
  - Font: **"Mulish", sans-serif** (Google Fonts `<link>`).
  - Buttons: `.btn.btn-primary` solid blue, white text; `.btn.btn-secondary`
    solid black, white text; `.more` underline link for "Learn more".
  - Section title: 2rem / 900 weight / black; eyebrow subtitle: 12px
    uppercase, letter-spacing .1rem, 700 weight.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/chisel-<n>/<w>/<h>`); icons → lucide-react (HardHat,
  PencilRuler, DraftingCompass, Ruler, Building2, Wrench for the 6
  services; ArrowLeft/ArrowRight for the portfolio slider); social brands →
  inline SVG BrandIcon (lucide-react dropped brand glyphs); Mulish via
  Google Fonts `<link>`; no assets copied.

Chisel lives in `apps/chisel` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Chisel"
(plus a blue dot), anchor links to the page's sections, a dark-mode toggle
button, and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Chisel page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Chisel" and links to Home,
  About us, Our services, Portfolio, and Contact us
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user opens the mobile menu
- **THEN** the menu SHALL list all section links
- **AND** the menu SHALL close when a link is chosen or the close button is
  pressed

### Requirement: Hero section

The system SHALL render a full-viewport hero with an eyebrow paragraph, a
level-1 heading, and two call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We are Chisel, and we shape
  buildings."
- **AND** it SHALL show an "About us" button and an "Our services" button

### Requirement: Stats band

The system SHALL render a dark stats band with four counters and labels.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show the values 1087, 57, 670, and 900
- **AND** it SHALL label them Number of Projects, Year of Experience,
  Number of Employees, and Number of Clients

### Requirement: About section

The system SHALL render an about section with an image, a heading, copy,
and a read-more link.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading and at least one paragraph of copy
- **AND** it SHALL show an "About us" link

### Requirement: Services section

The system SHALL render a services section with an eyebrow, an intro
heading, and six service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain an "OUR SERVICES" eyebrow and an intro heading
- **AND** it SHALL show six cards: Construction Consultation, House
  Renovation, Planning, Interior Design, Architecture, and Installation
  Works
- **AND** each card SHALL have a "Learn more" link

### Requirement: Portfolio section

The system SHALL render a portfolio section with a heading and a project
slider that advances with prev/next buttons.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL contain a "PORTFOLIO" heading and at least one project
  title with a "See Case Study" button
- **AND** it SHALL show prev/next slider controls

#### Scenario: Slider advances

- **GIVEN** the portfolio slider is displayed
- **WHEN** the user presses the next button
- **THEN** the visible project SHALL change

### Requirement: Testimonials section

The system SHALL render a testimonials section with a quote and an author.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a blockquote and the author name "James Anderson"

### Requirement: Blog section

The system SHALL render a blog section with four post cards, each with an
image, a title, and a meta line.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show four posts with headings
- **AND** each post SHALL show meta text with a date, an author, and a
  category

### Requirement: Footer

The system SHALL render a dark footer with link columns, contact details,
social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns, a contact block (address, phone,
  email), and social links (Facebook, X, Instagram, LinkedIn)
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Chisel app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Chisel — Architecture Template"

## Verification checklist

- [ ] `bash scripts/verify-app.sh chisel` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] `npm run spec:validate` passes
- [ ] TEMPLATES.md Reshape lines marked `[x]` with the Chisel surge URL
- [ ] `"homepage": "https://free-react-templates-chisel.surge.sh"` in
      `apps/chisel/package.json`
- [ ] `npm run readme:status` regenerates README with Chisel listed
