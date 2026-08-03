# Template: Remake (Barber Shop Landing)

## Purpose

Remake is a single-page barber-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Remake" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light, warm barber page with rust-brown accents: a hero
("We Specialize In All Phase Of hair"), an about split ("We Are Artist,
Hair Is My Canvas"), an advance-feature row (Best Place, Best Equipment,
Modern Style, Expert Staff), a video band ("View Our Work"), an "Our
Services" row (Stylish Hair Cut, Cut & Hair Style, Color & Hair Wash), an
"Our Team" (Daniel Mateno, Julian Parsian), a three-tier "Pricing Plan"
(Basic $79.00 / Standard $89.00 / Ultimate $99.00), a testimonial slider
(Nihare Edersen), an "Our Blog" row, and a footer with links and a
newsletter form. Remake recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Remake" — free barber shop website template
  (source: https://colorlib.com/wp/template/remake/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/remake/`
  (HTTP 200, 27.3KB) + stylesheet `css/style.css` (33.7KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`remake-free-template.jpg`) confirms the visual design (light warm
  sections, rust-brown accents).
- **Section order (1:1):**
  1. Header: logo + nav (Home, About, Service, Pages, Pricing, Blog Page,
     Blog Details, Team, Contact).
  2. Hero: "We Specialize In All Phase Of hair" + CTA.
  3. About (`about-wrapper`): "About Us" / "We Are Artist, Hair Is My
     Canvas" + copy.
  4. Advance feature (`section-margin--large`): "Our Strength Is Your Smart
     beauty" + 4 icon cards (Best Place, Best Equipment, Modern Style,
     Expert Staff).
  5. Video band (`video-area`): "View Our Work".
  6. Services (`section-padding--large bg-soapstone`): "Our Services" + 3
     icon cards (Stylish Hair Cut, Cut & Hair Style, Color & Hair Wash).
  7. Team (`section-margin--large`): "Our Team" / "Experience Staff Change
     Your Look" + member cards (Daniel Mateno, Julian Parsian).
  8. Pricing (`pricing-relative`): "Pricing Plan" / "Choose Your Favorite
     Package" + 3 tiers (Basic Hair Cut $79.00, Standard Hair Cut $89.00,
     Ultimate Hair Cut $99.00).
  9. Testimonials: quote slider (Nihare Edersen).
  10. Blog (`section-margin--large`): "Our Blog" / "Read The Latest Hair
      Style News" + 3 post cards (Make The Most Of Your Locks, Chic They
      Work Any Occassion, Easy Hairstyles For GirlHair).
  11. Footer: Top Products, Quick Links, Features, Resources + Newsletter
      form.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#99513a** (rust brown — accents, buttons) + dark slate
    **#3a414e**.
  - Light warm backgrounds **#fff9f7** / soapstone `bg-soapstone`; tan
    **#E0CAC4**.
  - Font: **"Josefin Sans"** (headings) + **"Roboto Condensed"** (body) via
    Google Fonts.
  - Buttons: rust-brown filled, uppercase.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo with the
  headline; about split; feature cards with lucide icons; video band with a
  play button; services with lucide icons; team cards with initials
  avatars; pricing tiers with highlighted middle card; testimonial with
  initials avatar; blog cards with seeded photos; footer with newsletter
  form; all images picsum-seeded (`picsum.photos/seed/remake-N/w/h`);
  Google Fonts via `<link>`.

Remake lives in `apps/remake` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Remake", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Remake page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Remake" and a "Home" link pointing to the page root
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
- **THEN** it SHALL show a level-1 headline (e.g. "We Specialize In All Phase Of hair")
- **AND** it SHALL show a call-to-action button

### Requirement: About section

The system SHALL render an about section with a heading and supporting copy.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading (e.g. "We Are Artist, Hair Is My Canvas")
- **AND** it SHALL show at least one lead paragraph

### Requirement: Advance features

The system SHALL render an "Advance Feature" section with at least four icon
cards.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "Our Strength Is Your Smart beauty"
- **AND** it SHALL render four feature cards (Best Place, Best Equipment, Modern Style, Expert Staff)

### Requirement: Services grid

The system SHALL render an "Our Services" section with at least three service
cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services"
- **AND** it SHALL render three service cards (Stylish Hair Cut, Cut & Hair Style, Color & Hair Wash)

### Requirement: Team

The system SHALL render an "Our Team" section with at least two member cards.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Team"
- **AND** it SHALL render at least two member cards (e.g. Daniel Mateno, Julian Parsian)

### Requirement: Pricing plan

The system SHALL render a "Pricing Plan" section with three priced tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Pricing Plan"
- **AND** it SHALL render three tiers (Basic Hair Cut $79.00, Standard Hair Cut $89.00, Ultimate Hair Cut $99.00)

### Requirement: Footer

The system SHALL render a footer with the site name, quick links, a newsletter
form, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Remake" and quick links
- **AND** it SHALL show a newsletter form
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Remake app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Remake — Barber Shop Template"
