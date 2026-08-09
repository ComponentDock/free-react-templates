# Template: Taper (Barber Shop Landing)

## Purpose

Taper is a single-page barber-shop landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Brber"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation carries the NEW name "Taper"
(never the source name).

The original is a light barber landing page with tan/gold accents: a
full-screen dual-slide hero ("Our Hair Style make your look elegance"), an
about split with a "52 Years Of Experience" badge, a three-card services grid,
a four-member barbers team, a two-column pricing table with 12 services, a
photo gallery, a testimonial slider, a blog row, and a newsletter footer.
Taper recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Brber" — barber shop website template
  (source: https://colorlib.com/wp/template/brber/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/brber/`
  (HTTP 200, 38.1KB) + stylesheet `assets/css/style.css` (64.3KB). The
  rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`brber-free-template.jpg`) confirms the visual design (light sections, tan
  accents, photo hero).
- **Section order (1:1):**
  1. Header/navbar (`header-area header-transparent`): "Barber HTML-5
     Template" logo + nav (Home, About, Services, Portfolio, Blog, Blog
     Details, Element, Contact).
  2. Hero slider (`slider-area`, 2 photo slides): "Our Hair Style make your
     look elegance" / "Get More confident" headlines + "make an appointment
     now" button.
  3. About (`about-area`): "52 Years Of Experience In Hair cut!" heading +
     lead paragraphs ("Brook presents your services...").
  4. Services (`service-area`): "Professional Services — Our Best services
     that we offering to you" heading + 3 icon cards (Stylish Hair Cut · Body
     Massege · Breard Style) with blurbs.
  5. Team (`team-area`): "Professional Teams — Our award winner hair cut
     exparts for you" heading + 4 member cards (Guy C. Pulido · Steve L.
     Nolan · Edgar P. Mathis ×2) with roles (Master Barber · Color Expart).
  6. Pricing: "Our Best Pricing — We provide best price in the city!" heading
     - two-column price list (Styling $25 · Styling + Color $65 · Styling +
       Tint $65 · Semi-permanent wave $65 · Cut + Styling $63 · Cut + Styling +
     Color $100 · Cut + Styling + Tint $100 / Cut $25 · Shave $65 · Beard
     trim $65 · Cut + beard trim $65 · Cut + shave $63 · Clean up $100).
  7. Gallery (`gallery-area`): "our image gellary — some images from our
     barber shop" heading + 4 photo tiles.
  8. Testimonials: quote slider with author name (JONT NICOLIN KOOK).
  9. Blog (`home-blog-area`): "our recent news — Hipos and tricks from recent
     blog" heading + 2 post cards ("Footprints in Time is perfect House in
     Kurashiki", date meta "24 Now | Physics", "became a member »" link).
  10. Footer (`footer-area section-bg`): "Receive updates and latest news
      direct from Simply enter." + phone (+564 7885 3222) + email
      (youremail@gmail.com) + Location/Information/Explore link columns +
      newsletter form ("Subscribe now to get daily updates" + Send) +
      copyright.
- **Design tokens extracted from `assets/css/style.css`:**
  - Brand color: **#d19f68** (tan/gold — buttons, accents).
  - Buttons: `background: #d19f68`, font **Oswald**, uppercase, padding
    27px 44px, no radius.
  - Font: **"Oswald"** for headings/buttons + **"Poppins"**/"Open Sans" for
    body (Google Fonts).
  - Sections: white/light (`#f9f9ff`); footer `section-bg` photo band.
  - Text: dark gray body (`#999999`, `#7c7c7c`) on light sections.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero uses a seeded picsum photo with the
  headline; about split with years-of-experience badge; services with lucide
  icons; team cards with initials avatars; pricing as a two-column price
  list; gallery with seeded photo tiles; testimonial with initials avatar;
  blog cards with seeded photos; newsletter input in the footer. All images
  picsum-seeded, icons lucide-react (no assets copied).

Taper lives in `apps/taper` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Taper", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Taper page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Taper" and a "Home" link pointing to the page root
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
- **THEN** it SHALL show a level-1 headline (e.g. "Our Hair Style make your look elegance")
- **AND** it SHALL show a call-to-action button (e.g. "make an appointment now")

### Requirement: About section

The system SHALL render an about section with a heading and supporting copy.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading (e.g. "52 Years Of Experience In Hair cut!")
- **AND** it SHALL show at least one lead paragraph

### Requirement: Services grid

The system SHALL render a "Professional Services" section with at least three
service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Professional Services"
- **AND** it SHALL render three service cards (Stylish Hair Cut, Body Massege, Breard Style)

### Requirement: Barbers team

The system SHALL render a team section with at least three member cards with
names and roles.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL render at least three member cards with names (e.g. Guy C. Pulido, Steve L. Nolan, Edgar P. Mathis)
- **AND** each card SHALL show a role caption (e.g. Master Barber)

### Requirement: Pricing list

The system SHALL render a "Our Best Pricing" section with at least six priced
items.

#### Scenario: Price rows

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Our Best Pricing"
- **AND** it SHALL render priced items (e.g. Styling $25, Cut $25, Shave $65)

### Requirement: Gallery

The system SHALL render a gallery section with a heading and at least four
photo tiles.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "our image gellary"
- **AND** it SHALL render at least four photo tiles

### Requirement: Footer

The system SHALL render a footer with the site name, a short tagline, quick
links, a newsletter field, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Taper" and quick links
- **AND** it SHALL show a newsletter input and social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Taper app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Taper — Barber Shop Template"
