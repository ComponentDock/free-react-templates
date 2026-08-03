# Template: Barberz (Barber Shop Landing)

## Purpose

Barberz is a single-page barber-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Barberz" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, light barber landing page with red accents: a
full-screen photo hero ("More Than Just A Haircut"), a welcome split with a
"3 years in excellent service" badge, a services & pricing carousel, a "More
Hair Styles" photo grid, a photo "More Services" band, testimonials, a blog
row, a "Quality Haircut" CTA band, and a light footer with newsletter.
Barberz recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Barberz" — barber shop website template
  (source: https://colorlib.com/wp/template/barberz/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barberz/`
  (HTTP 200, 23.4KB) + stylesheet `css/style.css` (25KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot
  (`barberz-free-template.jpg`) confirms the visual design (light, red
  accents, photo hero).
- **Section order (1:1):**
  1. Header/navbar: "Barberz" logo + nav (Home, Services, Barber Shop,
     About, Blog, Contact).
  2. Hero (`site-section-cover overlay`, photo background, centered): "More
     Than Just A Haircut" headline + blurb + "Learn More" button.
  3. Welcome split (`site-section`): left image with "3 years in excellent
     service" badge; right "Welcome To Barberz!" heading + lead + "Learn
     More" button.
  4. Services & Pricing (`bg-light`): "Services & Pricing" heading + Prev/
     Next buttons + carousel of pricing cards (Haircut · Hair Styling · Hair
     Scalp Care) each with 5 price rows ($29.00, $10.00, $32.00, $23.00,
     $54.00).
  5. More Hair Styles (`site-section`): heading + 3 photo cards (Beard
     Shaving · Crew Cut · Beard Trim) with "$50.00 only" tags.
  6. More Services (`section-3`, photo background): "More Services" heading
     - 6 icon cards (Hair Cut · Facial & Body Care · Massages …).
  7. Testimonials (`bg-light`): "Our Top Client Says" + 3 quote cards (Mike
     Fisher · Jean Stanley · Katie Rose).
  8. Blog (`bg-white`): "Our Blog" + 3 post cards (image, title, meta, excerpt).
  9. CTA band (`section-3`, photo background): "Quality Haircut" heading +
     "Contact Us Now" button.
  10. Footer (`site-footer`, light): About Us blurb + Quick Links +
      Newsletter form + copyright bar.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#dc3545** (red — primary buttons, accents, links).
  - Text: dark gray on white/light (`#f8f9fa`) sections.
  - Font: **"DM Sans"** (Google Fonts) — body and headings.
  - Buttons: solid red `btn-primary`; Prev/Next circle buttons.
  - Section rhythm: light sections with photo backdrops for hero, More
    Services, and CTA bands.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero uses a seeded picsum photo with the
  headline; welcome split with a years-of-service badge; pricing cards with
  price rows; hair-style cards with seeded photos and price tags; services
  with lucide icons; testimonials with initials avatars; blog cards with
  seeded photos; newsletter input in the footer. All images picsum-seeded,
  icons lucide-react (no assets copied).

Barberz lives in `apps/barberz` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Barberz", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Barberz page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Barberz" and a "Home" link pointing to the page root
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
- **THEN** it SHALL show a level-1 headline (e.g. "More Than Just A Haircut")
- **AND** it SHALL show a "Learn More" button

### Requirement: Welcome split

The system SHALL render a welcome section with an image, a years-of-service
badge, and a heading.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL show the heading "Welcome To Barberz!"
- **AND** it SHALL show a years-of-service badge (e.g. "3 years in excellent service")

### Requirement: Services & Pricing

The system SHALL render a "Services & Pricing" section with at least two
pricing cards, each with priced items.

#### Scenario: Pricing cards

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Services & Pricing"
- **AND** it SHALL render at least two pricing cards (Haircut, Hair Styling), each with priced items

### Requirement: Hair styles

The system SHALL render a "More Hair Styles" section with three photo cards
with prices.

#### Scenario: Style cards

- **GIVEN** the page is rendered
- **WHEN** the hair styles section is displayed
- **THEN** it SHALL show the heading "More Hair Styles"
- **AND** it SHALL render three style cards (Beard Shaving, Crew Cut, Beard Trim) with prices

### Requirement: Testimonials

The system SHALL render an "Our Top Client Says" section with three quotes.

#### Scenario: Quote cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Our Top Client Says"
- **AND** it SHALL render three quotes with author names

### Requirement: Footer

The system SHALL render a footer with the site name, a short tagline, quick
links, a newsletter field, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Barberz" and quick links
- **AND** it SHALL show a newsletter input and social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Barberz app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Barberz — Barber Shop Template"
