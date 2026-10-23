## Purpose

Snowline is a fashion e-commerce shop landing page recreated from the ColorLib "Winter" template. It showcases product categories, new arrivals with filtering, shipping features, an Instagram feed, and a newsletter footer.

## Design reference (replication findings)

- **Source:** ColorLib "Winter" — https://colorlib.com/wp/template/winter/
- **Source slug:** `winter`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/winter/ — **HTTP 200**, 27,405 B, fetched 2026-10-23 (page `<title>`: "winter"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/winter/css/style.css`, fetched 2026-10-23): brand `#2f7dfc`, `#ff3368`, `#415094`, `#4cd3e3`; dominant neutrals `#797979`, `#f9f9ff`, `#2a2a2a`; type Roboto, Roboto Condensed. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/winter-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/snowline` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Navbar with navigation and controls

The page SHALL display a sticky navigation bar with the Snowline logo, navigation links (Home, Shop, Pages, Blog, Contact), search icon, shopping bag icon, and a mobile hamburger menu.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the Snowline logo and all navigation links

#### Scenario: Mobile hamburger toggles menu

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens with all links visible

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero banner with call-to-action

The page SHALL display a hero section with a background image, "Winter Fashion" subtitle, "Fashion Collection 2024" heading, and a "Shop Now" call-to-action button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the user views the hero section
- **THEN** the subtitle "Winter Fashion", heading "Fashion Collection 2024", and "Shop Now" button are visible

### Requirement: Feature categories with hover overlays

The page SHALL display three product category images (Men, Women, Shoes) with hover overlays that reveal category labels.

#### Scenario: Three category cards render

- **WHEN** the user views the features section
- **THEN** three product category images are displayed in a row

### Requirement: New arrivals with filter tabs

The page SHALL display a product grid with filter tabs (All, Men, Women, Shoes) that filter the visible products.

#### Scenario: All products shown by default

- **WHEN** the user views the new arrivals section
- **THEN** all six products are displayed

#### Scenario: Filter tab shows matching products

- **WHEN** the user clicks the "Shoes" filter tab
- **THEN** only products tagged with "Shoes" are displayed

#### Scenario: All tab restores all products

- **WHEN** the user clicks the "All" filter tab after filtering
- **THEN** all six products are displayed again

#### Scenario: Product cards show rating and price

- **WHEN** the user views a product card
- **THEN** the star rating, price, category, and name are visible

### Requirement: Shipping info feature cards

The page SHALL display four feature cards (Free Shipping, Weekly Discount, Premium Quality, 24/7 Support) with icons and descriptions.

#### Scenario: Four shipping features render

- **WHEN** the user views the shipping info section
- **THEN** four feature cards with titles and descriptions are displayed

### Requirement: Instagram photo feed

The page SHALL display five Instagram-style photos in a grid with hover overlay.

#### Scenario: Five photos render

- **WHEN** the user views the Instagram feed section
- **THEN** five square photos are displayed in a row

### Requirement: Footer with newsletter and Component Dock link

The page SHALL display a footer with four columns (Category, Company, Address, Newsletter), social media icons, a newsletter signup form, and a copyright line linking to Component Dock.

#### Scenario: Footer columns render

- **WHEN** the user views the footer
- **THEN** Category, Company, Address, and Newsletter columns are displayed

#### Scenario: Newsletter form submits and resets

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the email input field is cleared

#### Scenario: Copyright links to Component Dock

- **WHEN** the user views the footer copyright
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is displayed

### Requirement: Responsive layout

The page SHALL be responsive, with elements stacking vertically on mobile viewports.

#### Scenario: Mobile layout stacks sections

- **WHEN** the page is viewed on a mobile viewport
- **THEN** navigation collapses to hamburger, feature cards stack vertically, and product grid shows one column

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/snowline/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/snowline/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
