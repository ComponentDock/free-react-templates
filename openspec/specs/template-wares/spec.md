# Template: Wares (Ecommerce)

## Purpose

Wares is a free e-commerce React template that recreates the ColorLib "E Shop" design. It provides a storefront layout with navbar, category navigation, hero banners, product sliders, daily deals with countdown, latest products, picked-for-you recommendations, and a dark footer with newsletter signup.

## Design reference (replication findings)

- **Source:** ColorLib "E Shop" — https://colorlib.com/wp/template/e-shop/
- **Source slug:** `e-shop`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/e-shop/ — **HTTP 200**, 59,705 B, fetched 2026-10-23 (page `<title>`: "E-SHOP HTML Template"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/e-shop/css/style.css`, fetched 2026-10-23): brand `#f8694a`, `#ffb656`; dominant neutrals `#dadada`, `#30323a`, `#f6f7f8`; type Hind. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/e-shop-free-ecommerce-website-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/wares` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Navbar with search and cart

The template SHALL display a sticky dark navbar with logo, search input, account icon, and cart icon with badge count.

#### Scenario: Navbar renders all elements

- **WHEN** the page loads
- **THEN** the logo "WARES" is visible
- **AND** a search input is present
- **AND** account and cart icon buttons are present
- **AND** the cart badge displays the item count

#### Scenario: Search input accepts text

- **WHEN** the user types into the search input
- **THEN** the input value updates with the typed text

### Requirement: Category navigation

The template SHALL display a horizontal category navigation bar below the navbar.

#### Scenario: Category links render

- **WHEN** the page loads
- **THEN** category links (Home, Hot Deals, Categories, etc.) are visible
- **AND** the navigation has an accessible landmark

### Requirement: Hero banners

The template SHALL display two side-by-side promotional banners.

#### Scenario: Banners render with content

- **WHEN** the page loads
- **THEN** the "New Collection" banner is visible with a Shop Now button
- **AND** the "Hot Deal" banner is visible with discount text and a Shop Now button

### Requirement: Product slider section

The template SHALL display a "New Product Collection" section with product cards.

#### Scenario: Product slider renders products

- **WHEN** the page loads
- **THEN** the section title "New Product Collection" is visible
- **AND** product cards display name, price, rating stars, and action buttons

#### Scenario: Product card displays pricing

- **WHEN** a product has an old price
- **THEN** both the current price and strikethrough old price are shown

#### Scenario: Product card hot badge

- **WHEN** a product is marked as hot
- **THEN** a "HOT" badge is displayed on the card

### Requirement: Deals of the day

The template SHALL display a "Deals Of The Day" section with a countdown timer and discounted products.

#### Scenario: Countdown timer renders

- **WHEN** the page loads
- **THEN** countdown units (Days, Hours, Mins, Secs) are displayed
- **AND** the timer counts down each second

#### Scenario: Timer stops at zero

- **WHEN** the countdown reaches zero seconds
- **THEN** no timer interval is created

#### Scenario: Deal products render

- **WHEN** the page loads
- **THEN** deal product cards with discounted prices are visible

### Requirement: Latest products

The template SHALL display a "Latest Products" grid section.

#### Scenario: Latest products render

- **WHEN** the page loads
- **THEN** the section title "Latest Products" is visible
- **AND** product cards are displayed in a grid

### Requirement: Picked for you

The template SHALL display a "Picked For You" recommendation grid.

#### Scenario: Picked products render

- **WHEN** the page loads
- **THEN** the section title "Picked For You" is visible
- **AND** recommended product cards are displayed

### Requirement: Footer with newsletter

The template SHALL display a dark footer with logo, social links, account/service links, newsletter signup, and Component Dock attribution.

#### Scenario: Footer renders all sections

- **WHEN** the page loads
- **THEN** the logo and tagline are visible
- **AND** social media icon links (Facebook, Twitter, Instagram) are present
- **AND** "My Account" section with links is visible
- **AND** "Customer Service" section with links is visible
- **AND** a newsletter email input and subscribe button are present
- **AND** the copyright line links to Component Dock

#### Scenario: Newsletter form prevents navigation

- **WHEN** the user clicks the subscribe button
- **THEN** the form submission is prevented (no page navigation)

#### Scenario: Newsletter accepts email input

- **WHEN** the user types an email address
- **THEN** the input value updates

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/wares/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/wares/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
