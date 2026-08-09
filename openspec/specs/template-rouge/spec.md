# Template: Rouge (Beauty Salon Landing)

## Purpose

Rouge is a single-page beauty-salon landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Diva" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark, photo-driven beauty salon page with hot-pink
accents: a full-screen photo hero slider ("Be bold.Be beautiful."), an
intro band with a "Why Choose Us?" heading and stat counters, a six-card
services grid, a testimonials slider over a photo band, a brand-logo
carousel, and a photo-backed footer with an appointment form. Rouge
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Diva" — free beauty salon website template
  (source: https://colorlib.com/wp/template/diva/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/diva/`
  (HTTP 200, 14.8KB) + stylesheet `css/style.css` (26.8KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`diva-free-template.jpg`) confirms the visual design (dark photo bands,
  white text, hot-pink accents).
- **Section order (1:1):**
  1. Header (`header-section`, transparent over hero): "Rouge" logo + nav
     (Home, About Us, Services, News, Contact).
  2. Hero slider (`hero-section set-bg`, 2 photo slides): "Be bold.Be
     beautiful." headline + `site-btn sb-big` CTA + `site-btn sb-line`
     secondary CTA.
  3. Intro (`intro-section spad set-bg`, photo bg): "Why Choose Us?" heading
     - lead paragraph + stat counters (+3500, 12, +175, 56K).
  4. Services (`services-section spad set-bg`, white text): "Our Services"
     - 6 icon cards (Hair Dressing, Zen Massage, Manicure & Pedicure, Make
       Up, Tanning Bed, Spa Treatments).
  5. Testimonials (`testimonials-section set-bg`): "Client Testimonials" +
     quote slider (author: Maria Parker, photo `img/review-author.jpg`).
  6. Brands (`brands-section set-bg`): brand-logo carousel row.
  7. Footer (`footer-section set-bg`, photo bg): about widget ("In vitae
     nisi aliquam..."), Our Services link list (Manicure, Pedicure, Massage,
     Hair Dressing, Spa, Wedding Hair), contact widget, "Make an
     appointment" form (Submit), footer-bottom copyright.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#e22b63** (hot pink — buttons, accents, links).
  - Buttons: `.site-btn` white text, padding 12px 30px, min-width 145px;
    `.sb-line` transparent with pink text; `.sb-dark` black fill.
  - Font: **"Futura LT Bold"** / "Futura LT" for headings and body
    (commercial font — recreation substitutes a similar free Google Font,
    e.g. **Jost**, with Montserrat/Open Sans fallback).
  - Section backgrounds: all photo bands (`set-bg`) with dark treatment and
    white text; no light sections.
  - Text: white on photos; `#4a4a4a`/`#1e1e1e` dark text where used.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo with the
  headline; intro split with stat counters; services with lucide icons;
  testimonials with initials avatar; brands row recreated as styled text
  marks (no assets); footer with appointment form; all images
  picsum-seeded (`picsum.photos/seed/rouge-N/w/h`); Google Fonts via
  `<link>`.

Rouge lives in `apps/rouge` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Rouge", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Rouge page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Rouge" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a level-1
headline, and call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Be bold.Be beautiful.")
- **AND** it SHALL show a primary call-to-action button and a secondary outline button

### Requirement: Intro section with stats

The system SHALL render an intro section with a heading, supporting copy, and
stat counters.

#### Scenario: Intro content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show the heading "Why Choose Us?" and at least one lead paragraph
- **AND** it SHALL show stat counters (e.g. +3500, 56K)

### Requirement: Services grid

The system SHALL render a "Our Services" section with at least six service
cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services"
- **AND** it SHALL render six service cards (Hair Dressing, Zen Massage, Manicure & Pedicure, Make Up, Tanning Bed, Spa Treatments)

### Requirement: Testimonials

The system SHALL render a testimonials section with a heading, a quote, and an
author.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Client Testimonials"
- **AND** it SHALL show a quote with an author name (e.g. Maria Parker)

### Requirement: Footer

The system SHALL render a footer with the site name, quick links, an
appointment form, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Rouge" and quick links
- **AND** it SHALL show an appointment form (e.g. a "Make an appointment" input and Submit button)
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Rouge app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Rouge — Beauty Salon Template"
