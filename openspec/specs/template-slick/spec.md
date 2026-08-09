# Template: Slick (Barber Shop Landing)

## Purpose

Slick is a single-page barber-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Narosundar" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light barber page with red accents and a blue CTA: a
photo slider hero ("WE'RE THE LAST OF BREED."), an about split ("ABOUT Our
STORY"), a "OUR TOP PRICES" band with beard-treatment price rows, an "All
We Do for You" category band (For Hair / For Beard), a services row
(Stylish hair cut, Cut & hair style, Color & hair wash), an Instagram
tile strip, a "Customers Say About Us" testimonial band, and a dark footer
with contact info. Slick recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Narosundar" — free barber shop website template
  (source: https://colorlib.com/wp/template/narosundar/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/narosundar/`
  (HTTP 200, 34.2KB) + stylesheet `assets/css/style.css` (72.7KB). The
  rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`narosundar-colorlib-template.jpg`) confirms the visual design (light
  sections, red accents, blue CTA, dark footer).
- **Section order (1:1):**
  1. Header (`header-area`): logo + nav (Home, About, Service, Gallery,
     Blog, Blog Details, Elements, Contact) + "Free Quote" button.
  2. Hero slider (`slider-area`): "WE'RE THE LAST OF BREED." headline +
     CTA.
  3. About (`about-area section-padding`): "ABOUT Our STORY" heading + copy.
  4. Visit tailor (`visit-tailor-area`): "OUR TOP PRICES" + priced rows
     (Special Beard Treatment, Color your Beard, Wax your Beard).
  5. Categories (`categories-area section-img-bg2`): "All We Do for You" —
     For Hair / For Beard panels (Trim your Hair, Special Beard Treatment,
     Color your Beard, Wax your Beard).
  6. Services: 3 icon cards (Stylish hair cut, Cut & hair style, Color &
     hair wash).
  7. Instagram (`instagram-area`): photo tile strip.
  8. Testimonials (`customer-section section-padding`): "Customers Say
     About Us" + quotes.
  9. Footer (`footer-area footer-padding`): "Contact Info" + links +
     footer-bottom copyright.
- **Design tokens extracted from `assets/css/style.css`:**
  - Brand color: **#FB0000** (red — accents, headings, buttons) and
    **#2845BA** (blue — CTA button).
  - Light section backgrounds **#f9f9ff** / lavender **#f0e9ff**; dark
    bands **#150303**; footer dark.
  - Font: **"Chivo"** (sans headings/body) + **"Open Sans"** (body) via
    Google Fonts.
  - Buttons: red filled; "Free Quote" blue filled; uppercase.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo with the
  headline; about split; price rows in a dark band; categories with
  For Hair / For Beard panels; services with lucide icons; testimonial band;
  footer with contact info and social links; all images picsum-seeded
  (`picsum.photos/seed/slick-N/w/h`); Google Fonts via `<link>`.

Slick lives in `apps/slick` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Slick", a "Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Slick page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Slick" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a level-1
headline, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "WE'RE THE LAST OF BREED.")
- **AND** it SHALL show a call-to-action button

### Requirement: About section

The system SHALL render an about section with a heading and supporting copy.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading (e.g. "ABOUT Our STORY")
- **AND** it SHALL show at least one lead paragraph

### Requirement: Top prices

The system SHALL render a "OUR TOP PRICES" section with priced rows.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the prices section is displayed
- **THEN** it SHALL show the heading "OUR TOP PRICES"
- **AND** it SHALL render priced rows (e.g. Special Beard Treatment, Color your Beard, Wax your Beard)

### Requirement: Categories

The system SHALL render an "All We Do for You" section with For Hair / For
Beard panels.

#### Scenario: Category content

- **GIVEN** the page is rendered
- **WHEN** the categories section is displayed
- **THEN** it SHALL show the heading "All We Do for You"
- **AND** it SHALL show For Hair and For Beard panels with service lists

### Requirement: Services grid

The system SHALL render a services section with at least three service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL render three service cards (Stylish hair cut, Cut & hair style, Color & hair wash)

### Requirement: Testimonials

The system SHALL render a testimonials section with a heading, a quote, and an
author.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Customers Say About Us"
- **AND** it SHALL show a quote with an author name

### Requirement: Footer

The system SHALL render a footer with the site name, contact info, and social
links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Slick" and contact info
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Slick app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Slick — Barber Shop Template"
