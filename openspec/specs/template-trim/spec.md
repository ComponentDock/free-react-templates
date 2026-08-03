# Template: Trim (Hair Salon Landing)

## Purpose

Trim is a single-page hair-salon landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Trim"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a light salon page with tan/gold accents: a hero ("We will
make you stylish" + phone/address/hours), a welcome split ("Welcome to Trim
A Hair Salon"), an "Our Services" row (Haircuts & Styling, Beard Treatment,
Coloring Services, Beard Waxing), a dark "What We Do" band (Hair Style,
Trimming, Traditional Haircuts Mens, Hair Style for Womens), a "Plan &
Pricing" list (Men's Haircut, Children Haircut, Beard Cut, Women's
Haircut), a discount band ("Save up to 25% Off", All Services Discount),
an "Our Hair Stylist" team (Tom Smith, Mark Wilson, Patrick Jacobson, Ivan
Dorchsner), an "Our Shop" photo band, an "Our Gallery", a "Recent from
blog" row, and a footer with appointments, links, and a question column.
Trim recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Trim" — free hair salon website template
  (source: https://colorlib.com/wp/template/trim/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/trim/`
  (HTTP 200, 42.7KB) + stylesheet `css/style.css` (66.9KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`trim-free-template.jpg`) confirms the visual design (light sections,
  tan/gold accents, dark bands).
- **Section order (1:1):**
  1. Header: "Trim." logo + nav (Home, About, Services & Pricing, Gallery,
     Blog, Contact).
  2. Hero: "We will make you stylish" + contact strip (000 (123) 456 7890,
     198 West 21th Street, Open Monday-Friday).
  3. Welcome (`ftco-section`): "Welcome to Trim A Hair Salon" + copy.
  4. Services (`ftco-section`): "Our Services" + 4 icon cards (Haircuts &
     Styling, Beard Treatment, Coloring Services, Beard Waxing).
  5. What We Do (`ftco-bg-dark`): "What We Do" + 4 cards (Hair Style,
     Trimming, Traditional Haircuts Mens, Hair Style for Womens).
  6. Pricing (`ftco-section`): "Plan & Pricing" + priced rows (Men's
     Haircut, Children Haircut, Beard Cut, Women's Haircut).
  7. Discount band (`ftco-discount img`): "Save up to 25% Off" / "All
     Services Discount".
  8. Team (`ftco-section`): "Our Hair Stylist" + 4 member cards (Tom Smith,
     Mark Wilson, Patrick Jacobson, Ivan Dorchsner).
  9. Shop (`ftco-bg-dark`): "Our Shop" + photo tiles ("Shaves 01").
  10. Gallery (`ftco-section`): "Our Gallery" + photo tiles.
  11. Blog (`ftco-section`): "Recent from blog" + post cards ("Men's
      hairstyle for all face shapes").
  12. Footer: Appointments + About Us + Recent Blog + Services + "Have a
      Questions?" + social links.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ce9c6b** (tan/gold — accents, buttons) with brown
    **#785028** / dark **#1b1b1b** bands.
  - Font: **"Cookie"** (script display for the brand/hero) + **"Poppins"**
    (body) via Google Fonts.
  - Sections: light white/`#f8f9fa`; dark `ftco-bg-dark` bands.
  - Buttons: tan filled, uppercase.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo with the
  headline and contact strip; services with lucide icons; dark "What We Do"
  band; pricing as priced rows; discount band; team cards with initials
  avatars; shop/gallery with seeded photo tiles; blog cards with seeded
  photos; footer with appointment links and social icons; all images
  picsum-seeded (`picsum.photos/seed/trim-N/w/h`); Google Fonts via
  `<link>`.

Trim lives in `apps/trim` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Trim", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Trim page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Trim" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a level-1
headline, and a contact strip.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "We will make you stylish")
- **AND** it SHALL show a contact strip (phone, address, opening hours)

### Requirement: Services

The system SHALL render an "Our Services" section with at least four service
cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services"
- **AND** it SHALL render four service cards (Haircuts & Styling, Beard Treatment, Coloring Services, Beard Waxing)

### Requirement: What We Do

The system SHALL render a "What We Do" section with at least four cards.

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
- **AND** it SHALL render priced rows (e.g. Men's Haircut, Children Haircut, Beard Cut)

### Requirement: Hair stylist team

The system SHALL render an "Our Hair Stylist" section with at least four
member cards.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Hair Stylist"
- **AND** it SHALL render at least four member cards (Tom Smith, Mark Wilson, Patrick Jacobson, Ivan Dorchsner)

### Requirement: Footer

The system SHALL render a footer with the site name, appointment links, and
social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Trim" and appointment links
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Trim app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Trim — Hair Salon Template"
