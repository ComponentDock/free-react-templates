# Template: Gloss (Makeup Artist Portfolio)

## Purpose

Gloss is a single-page makeup-artist portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Makeup Artist" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark makeup-artist page: a header with logo + nav (Home,
About, Services, Shop, Pages, Works, Blog, Contact) + social icons + "Get a
Quote", a hero ("Make your face the center of attention."), a "Professional
makeup" about section with four service types and prices (Daily makeup From
$20.0, Wedding makeup From $50.0, Event makeup From $30.0, Creative Makeup
From $70.0), a dark testimonials band with two client cards (Danielle
Benton, Dani Alves — Blogger/Client), a "Latest projects" gallery of
"Brown hair wave" tiles, a "Makeup artist tips" blog row (3 posts by Rosie
Chapman, Jun 15 2020), a "Beauty products" shop grid ("Palettes" category,
Leather shopper bag $49.00, Add to Cart / Keep an eye / Love this actions),
a "Book online for 20% discount" CTA with a "Get a quote" booking form
(Name, Number phone, Email, Choose services, Your message, Book services),
and a footer with Address / Phone / Email and "Follow us on @gloss". Gloss
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
     works, Blog, Contact) + social icons + "Get a Quote" button.
  2. Hero (`hero`): "Make your face the center of attention." headline +
     intro paragraph + "Contact us" button.
  3. About (`about spad`): "Best makeup services" / "Professional makeup" +
     4 service types with prices (Daily makeup From $20.0, Wedding makeup
     From $50.0, Event makeup From $30.0, Creative Makeup From $70.0).
  4. Services (`services set-bg spad`): "What clients say" + 2 client cards
     (Danielle Benton, Dani Alves — Blogger/Client, wedding-day quote).
  5. Projects (`works` gallery): "Latest projects" + 7 "Brown hair wave"
     photo tiles.
  6. Blog (`latest-blog spad`): "Makeup artist tips" + 3 post cards (Tips
     From Makeup Artists You've Never Heard, Everything I Learned From A
     Professional Makeup Artist, 10 Makeup-Artist Tips That Surprised (and
     Delighted) Us — Rosie Chapman, Jun 15, 2020).
  7. Shop (`beauty-products spad`): "Beauty products" + product grid
     (Palettes category, Leather shopper bag $49.00) with Add to Cart /
     Keep an eye / Love this hover actions + "VIEW ALL PRODUCTS" button.
  8. CTA (`callto`): "Book online for 20% discount" band + "Get a quote"
     form (Name, Number phone, Email, Choose services select, Your message
     textarea, Book services button).
  9. Footer (`footer`): Address / Phone / Email + "Follow us on @gloss" +
     social icons.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#e65783** (pink — accents, buttons, headings) on dark
    maroon **#200204** / **#111111** backgrounds; light **#f8f2f2**
    sections; muted **#888888**.
  - Font: **"Spartan"** (sans — headings/body) + "Mattings Regular"
    (display, not on Google Fonts — Playfair Display stands in) via Google
    Fonts.
  - Buttons: `primary-btn` pink filled, pill (`border-radius: 50px`),
    uppercase with letter-spacing.
- **Recreation decisions:** repo-standard Navbar (site name, section links,
  social icons, dark-mode toggle) + Footer chrome; hero = seeded picsum
  photo + headline; about with 4 service cards; dark testimonials band;
  projects gallery with seeded photo tiles; blog cards with seeded photos;
  shop grid with seeded photo tiles + hover actions; CTA band + booking
  form; footer with contact columns; all images picsum-seeded
  (`picsum.photos/seed/gloss-N/w/h`); Google Fonts via `<link>`.

Gloss lives in `apps/gloss` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Gloss", a
"Home" link, section links, social icons, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Gloss page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Gloss" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show section links (About, Services, Shop, Blog, Contact)
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
- **THEN** it SHALL show a headline (e.g. "Make your face the center of attention.")
- **AND** it SHALL show a "Contact us" button

### Requirement: Professional makeup

The system SHALL render a "Professional makeup" section with four service
types and their prices.

#### Scenario: Service types

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "Professional makeup"
- **AND** it SHALL render four service types (Daily makeup, Wedding makeup, Event makeup, Creative Makeup)

### Requirement: Client cards

The system SHALL render a services band with at least two client cards.

#### Scenario: Client content

- **GIVEN** the page is rendered
- **WHEN** the services band is displayed
- **THEN** it SHALL render at least two client cards (Danielle Benton, Dani Alves)

### Requirement: Latest projects

The system SHALL render a "Latest projects" gallery with at least six
photo tiles.

#### Scenario: Projects gallery

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show the heading "Latest projects"
- **AND** it SHALL render at least six project tiles

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
product tiles and a "View all products" button.

#### Scenario: Product grid

- **GIVEN** the page is rendered
- **WHEN** the beauty products section is displayed
- **THEN** it SHALL show the heading "Beauty products"
- **AND** it SHALL render at least four product tiles

### Requirement: Discount CTA

The system SHALL render a discount CTA band with a booking form.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show a discount offer (e.g. "20% discount")
- **AND** it SHALL show a "Get a quote" heading
- **AND** it SHALL show a "Book services" submit button

### Requirement: Footer

The system SHALL render a footer with contact details and a social handle.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show contact details (Address, Phone, Email)
- **AND** it SHALL show a social handle (e.g. "Follow us on @gloss")
