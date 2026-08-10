# Template: Couture (Fashion Shop Landing)

## Purpose

Couture is a single-page fashion-shop template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Modist"
design (see TEMPLATES.md — line 225, Beauty section), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a black-and-pink fashion shop: a black navbar over a
full-height hero photo with a pink overlay panel ("Le Stylist" / "Wear Your
Dress" headline + vertical side texts), a "Trending" product grid (sale
badges + struck-through prices), a light intro band ("Modist Online Fashion
Shop"), an "Our Products" grid with "Add to cart" links, a "Summer Sale"
photo band, a "Testimony" quote band, a "Recent Blog" card row, a photo
counter band (Happy Customers / Branches / Partner / Awards), a services
section ("We want you to express yourself": Refund Policy, Premium
Packaging, Superior Quality), a "Subscribe to our Newsletter" band, and a
light footer with Menu / Help / "Have a Questions?" columns. Couture
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Modist" — free fashion shop website template
  (source: https://colorlib.com/wp/template/modist/). New name: **couture**
  (high fashion / dressmaking — a fashion-shop motif; single word, no
  collision with `ls apps/` or existing spec folders).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/modist/`
  (HTTP 200, ~43KB) + stylesheet `css/style.css` (~79KB). Page title "Modist
  - Free Bootstrap 4 Template by Colorlib". Section order observed in the
    rendered DOM:
  1. Navbar (`#ftco-navbar`, `ftco_navbar bg-dark`): logo "Modist" + nav
     (Home, Shop, About, Blog, Contact) + cart count.
  2. Hero (`div.hero-wrap.js-fullheight`): bg photo (`images/bg_1.jpg`),
     50%-width pink (`#f1b8c4`, opacity .6) overlay panel, vertical side
     texts "Modist - Time to get dress" / "Since - 1985"
     (`h3.v` — vertical writing-mode), `h1` "Le Stylist" + `h2` "Wear Your
     Dress".
  3. Trending (`ftco-section ftco-product`): "Trending" + 6 product tiles
     ("Young Woman Wearing Dress", $120.00; sale tiles show a 30% badge and
     struck-through $120.00 → $80.00).
  4. Intro band (`ftco-section ftco-no-pb ftco-no-pt bg-light`): "Modist
     Online Fashion Shop" + two paragraphs of lorem copy.
  5. Products (`ftco-section bg-light`): "Our Products" + 4 tiles with
     "Add to cart" links.
  6. Sale (`ftco-section ftco-section-more img`): photo band, 120px white
     "Summer Sale" heading.
  7. Testimony (`testimony-section bg-light`): "Testimony" + quote by
     "Roger Scott — Customer" (owl carousel of 5 slides in the original;
     rendered as one static quote here).
  8. Blog (`ftco-section`): "Recent Blog" + 3 cards ("Even the all-powerful
     Pointing has no control about the blind texts", meta "Dec 6, 2018 ·
     Admin · 3").
  9. Counter (`ftco-section ftco-counter img`): photo band with 4 animated
     counters — data targets 10000 Happy Customers / 100 Branches / 1000
     Partner / 100 Awards (rendered statically here).
  10. Services (`ftco-section bg-light ftco-services`): "We want you to
      express yourself" + 3 cards (Refund Policy, Premium Packaging,
      Superior Quality).
  11. Subscribe (`ftco-section-parallax`): "Subscribe to our Newsletter" +
      email input ("Enter email address") + "Subscribe" submit button.
  12. Footer (`ftco-footer bg-light`): brand + Menu (Shop, About, Journal,
      Contact Us) / Help (Shipping Information, Returns & Exchange, Terms &
      Conditions, Privacy Policy, FAQs) / "Have a Questions?" (address,
      phone, email) + copyright.
- **Design tokens extracted from `css/style.css`:**
  - Brand accent: **#f1b8c4** (pink — hero overlay panel, sale badges,
    nav hover) on black **#000000** / dark **#212529** text; light
    **#f8f9fa** (`bg-light`) section backgrounds; gray **#6c757d** body
    text; secondary light-blue **#78d5ef** (unused accents).
  - Fonts: **"Roboto Condensed"** (headings — hero h1 120px/700/uppercase,
    h2 20px uppercase letter-spacing 4px) + **"Lato"** / **"Work Sans"**
    (body) via Google Fonts `<link>`.
  - Buttons/links: flat text links (e.g. "Add to cart"), no rounded
    primary pills; the design's accent interactions are color hovers.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle, mobile menu) + Footer chrome; hero = seeded picsum
  fashion photo + pink overlay panel + vertical side texts; trending /
  products grids with seeded photo tiles, sale badges and struck-through
  prices; sale band; testimony band; blog cards with seeded photos; counter
  band; services with lucide icons; subscribe band with success-state form;
  footer with link columns; all images picsum-seeded
  (`picsum.photos/seed/couture-N/w/h`); Google Fonts via `<link>`.

Couture lives in `apps/couture` and uses shared utilities/components from
`packages/ui` (cn, Button, ButtonLink, Card, Badge).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Couture", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Couture page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Couture" and a "Home" link pointing to the page root
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
- **THEN** it SHALL show a level-1 headline (e.g. "Le Stylist")
- **AND** it SHALL show the sub-headline "Wear Your Dress"

### Requirement: Trending

The system SHALL render a "Trending" section with at least four product
tiles.

#### Scenario: Trending grid

- **GIVEN** the page is rendered
- **WHEN** the trending section is displayed
- **THEN** it SHALL show the heading "Trending"
- **AND** it SHALL render at least four product tiles with a title and price

#### Scenario: Sale tile pricing

- **GIVEN** a product tile is on sale
- **WHEN** the trending section is displayed
- **THEN** the tile SHALL show a sale badge and the discounted price

### Requirement: Our Products

The system SHALL render an "Our Products" section with at least four product
tiles.

#### Scenario: Product grid

- **GIVEN** the page is rendered
- **WHEN** the products section is displayed
- **THEN** it SHALL show the heading "Our Products"
- **AND** it SHALL render at least four product tiles
- **AND** each tile SHALL offer an "Add to cart" link

### Requirement: Summer Sale band

The system SHALL render a "Summer Sale" promo band.

#### Scenario: Sale content

- **GIVEN** the page is rendered
- **WHEN** the sale band is displayed
- **THEN** it SHALL show the heading "Summer Sale"

### Requirement: Testimony

The system SHALL render a testimony band with a customer quote.

#### Scenario: Testimony content

- **GIVEN** the page is rendered
- **WHEN** the testimony band is displayed
- **THEN** it SHALL show a quote and the customer name "Roger Scott"

### Requirement: Recent Blog

The system SHALL render a "Recent Blog" section with three post cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Blog"
- **AND** it SHALL render three post cards with a title and date

### Requirement: Services

The system SHALL render a services section with three cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "We want you to express yourself"
- **AND** it SHALL render three cards (Refund Policy, Premium Packaging, Superior Quality)

### Requirement: Subscribe band

The system SHALL render a newsletter subscribe band.

#### Scenario: Subscribe content

- **GIVEN** the page is rendered
- **WHEN** the subscribe band is displayed
- **THEN** it SHALL show the heading "Subscribe to our Newsletter"
- **AND** it SHALL show an email input and a "Subscribe" button

#### Scenario: Subscribe success

- **GIVEN** the user enters an email address
- **WHEN** the user submits the subscribe form
- **THEN** the form SHALL swap to a success message

### Requirement: Footer

The system SHALL render a footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Couture"
- **AND** it SHALL show link columns (Menu, Help)
