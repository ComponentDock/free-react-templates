# Template: Hipstyle (Barber Shop Landing)

## Purpose

Hipstyle is a single-page barber-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Hipstyle" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light barber page with red accents: a photo slider hero
("Feel like home" / "Good Look Guaranteed"), an about split, a
"Service Expectation" row (Stylish Hair Cut, Wedding Hair, Color & Hair
Wash), a features row (Best Equipment, Best Price, Fitness Equipment,
Fitness Training), an eight-item "Pricing Plan" list, a testimonial slider
(Mosan Cameron), a "Meet Our Artist" team (Adam Billiard, Fred Macyard,
Justin Stuard), a "Latest Style News" blog row, and a dark footer with
contact details and a newsletter form. Hipstyle recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Hipstyle" — free barber shop website template
  (source: https://colorlib.com/wp/template/hipstyle/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hipstyle/`
  (HTTP 200, 38.8KB) + stylesheet `css/style.css` (198.2KB). The rendered
  DOM is the reference below; the TEMPLATES.md screenshot
  (`hipstyle-free-template.jpg`) confirms the visual design (light sections,
  red accents, dark footer).
- **Section order (1:1):**
  1. Header: logo + nav (Home, About, Service, Blog, blog Single, blog
     pages, team, price, Elements, Contact).
  2. Hero slider: "Feel like home" / "Good Look Guaranteed" headlines +
     "Connect with your dream style" + "About us" CTA.
  3. About us: split with copy.
  4. Service Expectation: 3 icon cards (Stylish Hair Cut, Wedding Hair,
     Color & Hair Wash).
  5. Features: 4 icon cards (Best Equipment, Best Price, Fitness Equipment,
     Fitness Training).
  6. Pricing Plan: priced rows (Hair Cut, Hair Color, Hair Straight,
     Shampoo, Hair Wash, Hair Shave, Men's Facial, Wedding Style — $10.00).
  7. Testimonials: quote slider (Mosan Cameron, Executive of fedex).
  8. Meet Our Artist: 3 member cards (Adam Billiard, Fred Macyard, Justin
     Stuard).
  9. Latest Style News: 3 blog cards.
  10. Footer: About Us + Contact us (Los angeles, United States ·
      +44 6532 986 652) + Newsletter form + social links.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#f81c1c** (red — buttons, accents, hover) + coral
    **#f44a40**.
  - Light section backgrounds **#f9f9ff** / lavender **#f0e9ff**; footer
    dark **#30383b**.
  - Font: **"Rufina"** (serif headings) + **"Roboto"** (sans body) via
    Google Fonts.
  - Buttons: red filled, uppercase.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo with the
  headline; about split; services/features with lucide icons; pricing as
  priced rows; testimonials with initials avatar; team cards with initials
  avatars; blog cards with seeded photos; footer with newsletter form; all
  images picsum-seeded (`picsum.photos/seed/hipstyle-N/w/h`); Google Fonts
  via `<link>`.

Hipstyle lives in `apps/hipstyle` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Hipstyle",
a "Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Hipstyle page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Hipstyle" and a "Home" link pointing to the page root
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
- **THEN** it SHALL show a level-1 headline (e.g. "Good Look Guaranteed")
- **AND** it SHALL show a call-to-action button (e.g. "About us")

### Requirement: About section

The system SHALL render an about section with a heading and supporting copy.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "About us"
- **AND** it SHALL show at least one lead paragraph

### Requirement: Service expectations

The system SHALL render a "Service Expectation" section with at least three
service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the service section is displayed
- **THEN** it SHALL show the heading "Service Expectation"
- **AND** it SHALL render three service cards (Stylish Hair Cut, Wedding Hair, Color & Hair Wash)

### Requirement: Pricing plan

The system SHALL render a "Pricing Plan" section with priced rows.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Pricing Plan"
- **AND** it SHALL render priced rows (e.g. Hair Cut $10.00, Hair Color $10.00)

### Requirement: Artists team

The system SHALL render a "Meet Our Artist" section with at least three
member cards.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Meet Our Artist"
- **AND** it SHALL render at least three member cards (e.g. Adam Billiard, Fred Macyard, Justin Stuard)

### Requirement: Footer

The system SHALL render a footer with the site name, contact details, a
newsletter form, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Hipstyle" and contact details (e.g. phone number)
- **AND** it SHALL show a newsletter form
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Hipstyle app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Hipstyle — Barber Shop Template"
