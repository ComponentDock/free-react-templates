# Template: Makeupartist (Makeup Artist Portfolio)

## Purpose

Makeupartist is a single-page makeup-artist portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Makeup Artist" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark makeup-artist page: a header with logo + nav (Home,
About, Services, Shop, Pages, Works, Blog, Contact), a hero ("the center of
attention."), a "Professional makeup" section with four service types
(Daily makeup, Wedding makeup, Event makeup, Creative Makeup), a services
band with artist cards (Danielle Benton, Dani Alves), a "Makeup artist
tips" blog row (Tips From Makeup Artists You've Never Heard, Everything I
Learned From A Professional Makeup Artist, 10 Makeup-Artist Tips That
Surprised (and Delighted) Us), a "Beauty products" shop grid (Leather
shopper bag), a "20% discount" CTA band with "Get a quote", and a footer
with Address / Phone / Email and "Follow us on @makeupartist". Makeupartist
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Makeup Artist" — free makeup artist website
  template (source: https://colorlib.com/wp/template/makeupartist/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/makeupartist/`
  (HTTP 200, 32.5KB) + stylesheet `css/style.css` (63.2KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`makeupartist-colorlib-template.jpg`) confirms the visual design (dark
  maroon + pink accents).
- **Section order (1:1):**
  1. Header (`header`): logo + nav (Home, About, Services, Shop, Pages,
     Works, Blog, Contact).
  2. Hero: "the center of attention." headline.
  3. About (`about spad`): "Professional makeup" + 4 service types (Daily
     makeup, Wedding makeup, Event makeup, Creative Makeup).
  4. Services (`services set-bg spad`): artist cards (Danielle Benton,
     Dani Alves).
  5. Blog (`latest-blog spad`): "Makeup artist tips" + 3 post cards (Tips
     From Makeup Artists You've Never Heard, Everything I Learned From A
     Professional Makeup Artist, 10 Makeup-Artist Tips That Surprised (and
     Delighted) Us).
  6. Shop (`beauty-products spad`): "Beauty products" + product grid
     (Leather shopper bag).
  7. CTA (`callto`): "20% discount" band + "Get a quote" button.
  8. Footer (`footer`): Address / Phone / Email + "Follow us on
     @makeupartist".
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#e65783** (pink — accents, buttons, headings) on dark
    maroon **#200204** / **#111111** backgrounds; light **#f8f2f2**
    sections; white text.
  - Font: **"Spartan"** (sans — headings/body) + "Mattings Regular"
    (display) via Google Fonts.
  - Buttons: `primary-btn` pink filled.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo + headline;
  about with 4 service types; services band with artist cards; blog cards
  with seeded photos; shop grid with seeded photo tiles; CTA band; footer
  with contact columns; all images picsum-seeded
  (`picsum.photos/seed/makeupartist-N/w/h`); Google Fonts via `<link>`.

Makeupartist lives in `apps/makeupartist` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Makeupartist", a "Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Makeupartist page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Makeupartist" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Welcome hero

The system SHALL render a full-width hero section with a headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a headline (e.g. "the center of attention.")

### Requirement: Professional makeup

The system SHALL render a "Professional makeup" section with four service
types.

#### Scenario: Service types

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "Professional makeup"
- **AND** it SHALL render four service types (Daily makeup, Wedding makeup, Event makeup, Creative Makeup)

### Requirement: Artist cards

The system SHALL render a services band with at least two artist cards.

#### Scenario: Artist content

- **GIVEN** the page is rendered
- **WHEN** the services band is displayed
- **THEN** it SHALL render at least two artist cards (Danielle Benton, Dani Alves)

### Requirement: Makeup artist tips

The system SHALL render a "Makeup artist tips" section with at least three
post cards.

#### Scenario: Tips content

- **GIVEN** the page is rendered
- **WHEN** the tips section is displayed
- **THEN** it SHALL show the heading "Makeup artist tips"
- **AND** it SHALL render at least three post cards

### Requirement: Beauty products

The system SHALL render a "Beauty products" section with at least four
product tiles.

#### Scenario: Product grid

- **GIVEN** the page is rendered
- **WHEN** the beauty products section is displayed
- **THEN** it SHALL show the heading "Beauty products"
- **AND** it SHALL render at least four product tiles

### Requirement: Discount CTA

The system SHALL render a discount CTA band with a quote button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show a discount offer (e.g. "20% discount")
- **AND** it SHALL show a "Get a quote" button

### Requirement: Footer

The system SHALL render a footer with contact details and a social handle.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show contact details (Address, Phone, Email)
- **AND** it SHALL show a social handle (e.g. "Follow us on @makeupartist")
