# Template: The Barber (Barber Shop Landing)

## Purpose

The Barber is a single-page barber-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "The Barber" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light barber page with orange and gold accents: a hero
("Best Barber in your Town", "Experienced and Traditional Stylish Barber
Shop", Opening Hour panel), an "our service" row, an "Our Gallery" grid, a
video band ("Watch the Video How we Work?"), an "Our Cutter Masters" team
(Macau Wilium, Dan Jacky, Luka Luka, Rona Dana), a "How to Find Us" band
(Location, Call Us, Mail Us, Join With Us), and a dark footer with address,
navigation links, a newsletter form, and an appointment CTA. The Barber
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "The Barber" — free barber shop website template
  (source: https://colorlib.com/wp/template/the-barber/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/thebarber/`
  (HTTP 200, 34.9KB — the `the-barber` preview slug returns "Not Found",
  so the `thebarber` preview target hosts the rendered page) + stylesheet
  `css/style.css` (136.4KB). The rendered DOM is the reference below; the
  TEMPLATES.md screenshot (`thebarber-free-template.jpg`) confirms the
  visual design (light sections, orange/gold accents, dark footer).
- **Section order (1:1):**
  1. Header (`header-area`): logo + nav (home, About, service, blog, blog
     single-blog, pages, elements, Contact).
  2. Hero: "Best Barber in your Town" + "Experienced and Traditional
     Stylish Barber Shop" + "Opening Hour" panel.
  3. Services: "our service" + service cards.
  4. Gallery: "Our Gallery" + photo tiles.
  5. Video band: "Watch the Video How we Work?" + play button.
  6. Team: "Our Cutter Masters" + 4 member cards (Macau Wilium, Dan Jacky,
     Luka Luka, Rona Dana).
  7. Find us (`how to find us` band): Location, Call Us, Mail Us, Join With
     Us.
  8. Footer: address, Navigation, Newsletter form + "Make an Appointment"
     CTA + copyright.
- **Design tokens extracted from `css/style.css`:**
  - Brand colors: **#ff5e13** (orange) + **#BC9321** (gold) + dark brown
    **#4A3600**.
  - Light section backgrounds **#f9f9ff** / lavender **#f0e9ff**; footer
    dark brown.
  - Font: **"Playfair Display"** (serif headings) + **"Roboto"** (sans
    body) via Google Fonts.
  - Buttons: orange/gold filled, uppercase.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo with the
  headline and an Opening Hour panel; services with lucide icons; gallery
  with seeded photo tiles; video band with play button; team cards with
  initials avatars; find-us band with icon cards; footer with newsletter
  form; all images picsum-seeded
  (`picsum.photos/seed/the-barber-N/w/h`); Google Fonts via `<link>`.

The Barber lives in `apps/the-barber` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "The
Barber", a "Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the The Barber page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "The Barber" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a level-1
headline, and an opening-hours panel.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Best Barber in your Town")
- **AND** it SHALL show an "Opening Hour" panel

### Requirement: Services

The system SHALL render an "our service" section with at least three service
cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "our service"
- **AND** it SHALL render at least three service cards

### Requirement: Gallery

The system SHALL render an "Our Gallery" section with at least four photo
tiles.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Our Gallery"
- **AND** it SHALL render at least four photo tiles

### Requirement: Cutter masters team

The system SHALL render an "Our Cutter Masters" section with at least four
member cards.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Cutter Masters"
- **AND** it SHALL render at least four member cards (Macau Wilium, Dan Jacky, Luka Luka, Rona Dana)

### Requirement: How to Find Us

The system SHALL render a "How to Find Us" section with contact cards.

#### Scenario: Find-us content

- **GIVEN** the page is rendered
- **WHEN** the find-us section is displayed
- **THEN** it SHALL show the heading "How to Find Us"
- **AND** it SHALL show Location, Call Us, Mail Us, and Join With Us cards

### Requirement: Footer

The system SHALL render a footer with the site name, navigation links, a
newsletter form, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "The Barber" and navigation links
- **AND** it SHALL show a newsletter form
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the The Barber app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "The Barber — Barber Shop Template"
