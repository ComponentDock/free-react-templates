# Template: Barcut (Barber Shop Landing)

## Purpose

Barcut is a single-page barber-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Barcut" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark-accented barber landing page with a gold gradient CTA:
a full-screen photo carousel hero ("HairStyle is a Must Try Fashion"), an
about split ("We Believe that Interior beauty Lasts Long"), a four-card
services grid, a tabbed "Select Your Style" catalogue, a three-member barbers
team, a testimonial carousel over a dark photo band, three pricing packages
with the middle one highlighted in dark, a four-post blog row, and a black
footer with newsletter. Barcut recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Barcut" — barber shop website template
  (source: https://colorlib.com/wp/template/barcut/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barcut/`
  (HTTP 200, 42.3KB) + stylesheet `css/main.css` (76.2KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot
  (`barcut-free-template.jpg`, 1200x946) confirms the visual design (light
  sections, gold-gradient CTAs, dark pricing card, black footer).
- **Section order (1:1):**
  1. Header/navbar: "Barcut Salon" logo + nav (Home, About, Pricing, Barbers,
     Gallery, Services, Blog, Contact).
  2. Hero (`home-banner-area`, photo carousel, overlay): "HairStyle is a Must
     Try Fashion" headline + blurb + "Watch Intro Video" button.
  3. About (`about-area`): "We Believe that Interior beauty Lasts Long"
     heading + lead + "Learn More" button + bordered photo.
  4. Services (`service-area`): "What We Can Do for You" heading + 4 icon
     cards (Stylish Hair Cutting · Quality Gel Shave · Beard Trimming ·
     Executive Wash).
  5. Catalogue (`catalogue-area`, tabs): "Select Your Style" heading + tab
     menu (Shaveing …) with "View Gallery..." links per tab.
  6. Team (`team-area`): "We Have All Famous Barbers" heading + 3 member
     cards (Peter Baker · Nancy Holmes · Gavin Hansen) with role captions.
  7. Testimonials (`testimonials-area`, dark photo band): quote carousel with
     author name (Fanny Spencer).
  8. Pricing (`price-area`): "Choose Your Package" heading + 3 package cards
     (Basic Hair Cut & Shave $79.00 · Premium $89.00 · Luxury $99.00), each
     with 5 included items and an "Order Now" button; middle card highlighted
     (`single-price.active`, dark `#222`).
  9. Blog (`blog-area`): "Latest From Blog" heading + 4 post cards (date
     meta, title, excerpt).
  10. Footer (`footer-area`, black): About Me blurb + Newsletter
      ("Stay updated with our latest trends") + Follow Me social + copyright.
- **Design tokens extracted from `css/main.css`:**
  - Brand color: **#ba9236** (gold — accents, section highlights).
  - Primary button: linear-gradient `#ba9236 → #fdc136 → #ba9236`
    (`btn`/`primary-btn`); hover continues the gold family.
  - Text: `#777777` body on white/light (`#f9f9ff`, `#fafaff`) sections.
  - Font: **"Playfair Display"** (serif) for headings + **"Roboto"**
    (sans-serif) for body (Google Fonts).
  - Overlay: `rgba(0,0,0,0.3)` over hero/testimonial photo bands.
  - Footer: `#000000` background, light text.
  - Active pricing card: `background: #222` (dark highlight).
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero uses a seeded picsum photo with the
  headline; about split with bordered photo; services with lucide icons;
  catalogue as tabbed style list; team cards with initials avatars; pricing
  cards with item lists and a highlighted middle card; blog cards with seeded
  photos; newsletter input in the footer. All images picsum-seeded, icons
  lucide-react (no assets copied).

Barcut lives in `apps/barcut` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Barcut", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Barcut page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Barcut" and a "Home" link pointing to the page root
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
- **THEN** it SHALL show a level-1 headline (e.g. "HairStyle is a Must Try Fashion")
- **AND** it SHALL show a call-to-action button (e.g. "Watch Intro Video")

### Requirement: About split

The system SHALL render an about section with a heading, a lead paragraph,
and a "Learn More" button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "We Believe that Interior beauty Lasts Long"
- **AND** it SHALL show a "Learn More" button

### Requirement: Services grid

The system SHALL render a "What We Can Do for You" section with at least four
service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "What We Can Do for You"
- **AND** it SHALL render four service cards (Stylish Hair Cutting, Quality Gel Shave, Beard Trimming, Executive Wash)

### Requirement: Barbers team

The system SHALL render a "We Have All Famous Barbers" section with three
member cards with names and roles.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "We Have All Famous Barbers"
- **AND** it SHALL render three member cards with names and roles (e.g. Peter Baker, Nancy Holmes, Gavin Hansen)

### Requirement: Testimonials

The system SHALL render a testimonials section with at least one quote and
author name.

#### Scenario: Quote content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL render a quote with an author name

### Requirement: Pricing packages

The system SHALL render a "Choose Your Package" section with three pricing
cards, each with a price, an item list, and an "Order Now" button.

#### Scenario: Package cards

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Choose Your Package"
- **AND** it SHALL render three package cards with prices (e.g. $79.00, $89.00, $99.00), each with an "Order Now" button

### Requirement: Blog row

The system SHALL render a "Latest From Blog" section with at least three post
cards, each with a title and an excerpt.

#### Scenario: Post cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest From Blog"
- **AND** it SHALL render at least three post cards with titles and excerpts

### Requirement: Footer

The system SHALL render a footer with the site name, a short tagline, quick
links, a newsletter field, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Barcut" and quick links
- **AND** it SHALL show a newsletter input and social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Barcut app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Barcut — Barber Shop Template"
