# Template: Locks (Hair Salon Landing)

## Purpose

Locks is a single-page hair-salon landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Trim"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a salon page with tan/gold accents over a mostly light canvas
with black bands: a full-screen photo hero ("We will make you stylish" +
"Book an Appointment" pill button + circular video play button), a black
contact info bar (phone / address / opening hours) with a tan social strip,
a "Welcome to Trim A Hair Salon" intro, an "Our Services" 4-icon row
(Haircuts & Styling, Beard Treatment, Coloring Services, Beard Waxing), a
black "What We Do" band (Hair Style, Trimming, Traditional Haircuts Mens,
Hair Style for Womens), a "Plan & Pricing" priced-row list (Men's Haircut
$20, Children Haircut $29, Beard Cut $20, Women's Haircut $49.91), a photo
discount band ("Save up to 25% Off" / "All Services Discount"), an "Our Hair
Stylist" team row (Tom Smith, Mark Wilson, Patrick Jacobson, Ivan Dorchsner),
a black "Our Shop" band (Shaves 01, $150, Add to cart), an "Our Gallery"
grid, a dark photo stats band (Creative Makeup, Number of Awards, Happy
Clients, Piercing Done), a "Recent from blog" row, and a black footer with
About Us / Recent Blog / Services / "Have a Questions?" widgets. Locks
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Trim" — free hair salon website template
  (source: https://colorlib.com/wp/template/trim/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/trim/`
  (HTTP 200, 42.7KB) + stylesheet `css/style.css` (66.9KB). The rendered DOM
  and the TEMPLATES.md screenshot (`trim-free-template.jpg`) confirm the
  visual design: dark photo hero, white sections, pure-black bands
  (`ftco-bg-dark { background: #000 }`), tan accents.
- **Section order (1:1):**
  1. Header: "Trim." script logo + nav (Home, About, Services & Pricing,
     Gallery, Blog, Contact) — transparent over the hero.
  2. Hero (`ftco-intro`): "Created by Colorlib.com" kicker, H1 "We will make
     you stylish", pill "Book an Appointment" button, circular video play
     button on the right.
  3. Info bar (inside `ftco-intro`): black strip — phone "000 (123) 456
     7890", address "198 West 21th Street, Suite 721 New York NY 10016",
     "Open Monday-Friday 8:00am - 9:00pm" — plus a tan strip with white
     social icons (Twitter, Facebook, Instagram). The strip overlaps the
     hero bottom on desktop (`.ftco-intro { margin-top: -100px }`).
  4. Welcome (`ftco-section`): "Welcome to Trim A Hair Salon" + decorative
     divider + blind-text copy.
  5. Services (`ftco-section`): "Our Services" + 4 icon cards (Haircuts &
     Styling, Beard Treatment, Coloring Services, Beard Waxing).
  6. What We Do (`ftco-section ftco-bg-dark`): "What We Do" + 4 cards (Hair
     Style, Trimming, Traditional Haircuts Mens, Hair Style for Womens).
  7. Pricing (`ftco-section`): "Plan & Pricing" + priced rows (Men's Haircut
     $20.00, Children Haircut $29.00, Beard Cut $20.00, Women's Haircut
     $49.91).
  8. Discount band (`ftco-section ftco-discount img`, photo bg): "Save up to
     25% Off" / "All Services Discount" + copy + CTA.
  9. Team (`ftco-section`): "Our Hair Stylist" + 4 member cards (Tom Smith
     — Hair Specialist, Mark Wilson — Beard Specialist, Patrick Jacobson —
     Hair Stylist, Ivan Dorchsner).
  10. Shop (`ftco-section ftco-bg-dark`): "Our Shop" + 4 photo tiles
      ("Shaves 01", $150, "Add to cart").
  11. Gallery (`ftco-gallery`): "Our Gallery" + photo tiles.
  12. Counter band (`ftco-counter ftco-bg-dark img`, photo bg): 4 stats
      (Creative Makeup, Number of Awards, Happy Clients, Piercing Done).
  13. Blog (`ftco-section`): "Recent from blog" + post cards ("Men's
      hairstyle for all face shapes", Sept 10 2018, Admin).
  14. Footer (`ftco-footer`): About Us + Recent Blog + Services (Haircut,
      Hairstyle, Trimming, Shaving, Skin Care) + "Have a Questions?"
      (address, phone, email) + social links + copyright.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ce9c6b** (tan/gold — buttons `.btn.btn-primary
{ background: #ce9c6b; color: #fff }`, hover inverts to transparent bg +
    tan text; heading `span` accents).
  - Dark bands: **#000** (`ftco-bg-dark`, footer, hero photo).
  - Brown: **#785028** (secondary text accents).
  - Fonts: **"Cookie"** (script display — brand logo) + **"Poppins"** (body)
    via Google Fonts; headings are large sans-serif with the tan accent on a
    `span`.
  - Buttons: tan filled, pill shape, uppercase label.
- **Recreation decisions:** repo-standard Navbar (site name "Locks", Home
  link, dark-mode toggle) + Footer chrome; hero = seeded picsum photo with
  the headline, pill CTA and circular play button; black info bar with
  phone/address/hours + tan social strip (inline SVG brand icons — lucide
  removed brand glyphs); services with lucide icons; black "What We Do"
  band; pricing as priced rows; photo discount band; team cards with
  initials avatars; black shop band with photo tiles; gallery photo grid;
  dark photo stats band; blog cards with seeded photos; footer with widget
  columns and social icons; all images picsum-seeded
  (`picsum.photos/seed/locks-N/w/h`); Google Fonts via `<link>`.

Locks lives in `apps/locks` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Locks", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Locks page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Locks" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a level-1
headline, a call-to-action button, and a video play button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline ("We will make you stylish")
- **AND** it SHALL show a "Book an Appointment" button
- **AND** it SHALL show a circular play button with a "Play video" label

### Requirement: Info bar

The system SHALL render a contact info bar with phone, address, and opening
hours, plus social links.

#### Scenario: Info bar content

- **GIVEN** the page is rendered
- **WHEN** the info bar is displayed
- **THEN** it SHALL show a phone number, an address, and opening hours
- **AND** it SHALL show social links (X, Facebook, Instagram)

### Requirement: Welcome

The system SHALL render a "Welcome to Locks A Hair Salon" section with
introductory copy.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL show the heading "Welcome to Locks A Hair Salon"
- **AND** it SHALL show a paragraph of introductory copy

### Requirement: Services

The system SHALL render an "Our Services" section with at least four service
cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services"
- **AND** it SHALL render four service cards (Haircuts & Styling, Beard Treatment, Coloring Services, Beard Waxing)

### Requirement: What We Do

The system SHALL render a dark "What We Do" section with at least four cards.

#### Scenario: What We Do content

- **GIVEN** the page is rendered
- **WHEN** the What We Do section is displayed
- **THEN** it SHALL show the heading "What We Do"
- **AND** it SHALL render four cards (Hair Style, Trimming, Traditional Haircuts Mens, Hair Style for Womens)

### Requirement: Plan & Pricing

The system SHALL render a "Plan & Pricing" section with priced rows.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Plan & Pricing"
- **AND** it SHALL render priced rows (e.g. Men's Haircut, Children Haircut, Beard Cut, Women's Haircut)

### Requirement: Discount band

The system SHALL render a discount band with a headline and a call to action.

#### Scenario: Discount content

- **GIVEN** the page is rendered
- **WHEN** the discount band is displayed
- **THEN** it SHALL show the headline "Save up to 25% Off"
- **AND** it SHALL show the sub-heading "All Services Discount"

### Requirement: Hair stylist team

The system SHALL render an "Our Hair Stylist" section with at least four
member cards.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Hair Stylist"
- **AND** it SHALL render at least four member cards (Tom Smith, Mark Wilson, Patrick Jacobson, Ivan Dorchsner)

### Requirement: Shop

The system SHALL render a dark "Our Shop" section with photo tiles.

#### Scenario: Shop content

- **GIVEN** the page is rendered
- **WHEN** the shop section is displayed
- **THEN** it SHALL show the heading "Our Shop"
- **AND** it SHALL render photo tiles with a name, a price, and an "Add to cart" action

### Requirement: Gallery

The system SHALL render an "Our Gallery" section with photo tiles.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Our Gallery"
- **AND** it SHALL render at least four photo tiles

### Requirement: Stats counter band

The system SHALL render a dark stats band with four statistics.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the counter band is displayed
- **THEN** it SHALL render four statistics (Creative Makeup, Number of Awards, Happy Clients, Piercing Done)

### Requirement: Blog

The system SHALL render a "Recent from blog" section with post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent from blog"
- **AND** it SHALL render at least three post cards with a title and a date

### Requirement: Footer

The system SHALL render a footer with the site name, widget columns, and
social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Locks" and widget columns (About Us, Recent Blog, Services, Have a Questions?)
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Locks app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Locks — Hair Salon Template"
