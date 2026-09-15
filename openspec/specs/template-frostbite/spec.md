# Template: Frostbite (E-Commerce Fashion Shop)

## Purpose

Frostbite is an e-commerce fashion shop template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Winter"
website template design (see TEMPLATES.md), built under the new name **Frostbite**
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Winter" — e-commerce fashion shop template
  (source: https://colorlib.com/wp/template/winter/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/winter/
  (HTTP 200, full rendered DOM + `css/style.css` (227KB) extracted).
  The TEMPLATES.md screenshot (`winter-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens. Note: the preview is a Bootstrap-based e-commerce shop page
  ("Winter Fashion Collection 2019").
- **Section order (1:1):** Navbar (logo + Home / Shop dropdown / Pages
  dropdown / blog dropdown / Contact / search icon) → Banner/Hero
  ("Winter Fashion" subtitle + "Fashion Collection 2019" heading + "shop
  now" CTA, full-width background image) → Feature grid (3 product
  category images: "shop for male" overlays with hover reveal) → New
  Arrivals (heading + filter tabs: all / men / women / shoes; 6 product
  cards in mixed widths, each with image, category, title, star rating,
  price, heart/bag icons) → Shipping Details (4 columns: Free Shipping,
  Return Policy, Secure Payment, 24/7 Support — each with icon + title +
  description) → Instagram Photo gallery (5 photo thumbnails in a flex
  row with Instagram icon overlays on hover) → Footer (4 columns: Category
  links, Company links, Address + contact, Newsletter signup form + social
  icons: Facebook, Twitter).
- **Design tokens extracted from `style.css`:**
  - Primary brand **blue `#2f7dfc`** (buttons, links, accents).
  - Body font: **"Roboto", sans-serif**; Headings: **"Roboto Condensed", sans-serif**.
  - Body background: `#f4f4f4` (light gray).
  - Banner background: `#dde5e8` with background image.
  - Button 1 (`.btn_1`): bg `#2f7dfc`, color `#fff`, **border-radius 50px** (pill shape), hover inverts to white bg + blue text.
  - Button 2 (`.btn_2`): bg `#fff`, color `#1e1e1e`, border-radius 4px, hover bg `#2f7dfc` + white text.
  - Section padding: `section_padding` class used on new_arrival, shipping_details.
  - Product cards: hover overlay with semi-transparent background, star rating icons, price, social icons (heart, bag).
  - Instagram gallery: flex row of 5 equal-width images, white background, Instagram icon overlay on hover.
  - Footer: bg `#000` (black), white text, 4-column layout, newsletter form with email input + submit button.
  - Filter tabs: `data-filter` based category filtering (all, men, women, shoes).
- **Recreation decisions:** this entry is recreated as an e-commerce fashion shop
  page (hero + feature grid + product catalog + shipping info + social gallery +
  footer), with placeholder product images via picsum.photos; no assets copied.
  The filter tabs are implemented as React state-based category filtering.

Frostbite lives in `apps/frostbite` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a responsive top navigation bar with the site name
"Frostbite" and navigation links.

#### Scenario: Navbar content

- **GIVEN** the Frostbite page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Frostbite"
- **AND** the navbar SHALL show links for Home, Shop, Pages, Blog, and Contact
- **AND** the navbar SHALL include a search icon

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger menu button
- **THEN** the navigation links SHALL expand/collapse

### Requirement: Hero / Banner section

The system SHALL render a full-width hero banner with a headline, subtitle,
and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a subtitle "Winter Fashion"
- **AND** it SHALL contain a heading "Fashion Collection 2019"
- **AND** it SHALL show a "shop now" button with pill shape (border-radius 50px)

#### Scenario: Hero background

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL have a background image with a light gray fallback (#dde5e8)

### Requirement: Feature / Category grid

The system SHALL render a 3-column grid of product category images with
hover overlays.

#### Scenario: Feature grid content

- **GIVEN** the page is rendered
- **WHEN** the feature section is displayed
- **THEN** it SHALL show 3 product category images side by side
- **AND** each image SHALL have a hover overlay with a "shop now" button

#### Scenario: Feature grid layout

- **GIVEN** the page is rendered
- **WHEN** the feature section is displayed
- **THEN** the 3 images SHALL be in a full-width row (container-fluid)

### Requirement: New Arrivals product grid

The system SHALL render a product grid with category filter tabs and 6
product cards.

#### Scenario: Filter tabs

- **GIVEN** the page is rendered
- **WHEN** the new arrivals section is displayed
- **THEN** it SHALL show filter tabs: "all", "men", "women", "shoes"
- **AND** the "all" tab SHALL be active by default

#### Scenario: Product cards

- **GIVEN** the page is rendered
- **WHEN** the new arrivals section is displayed
- **THEN** it SHALL show 6 product cards
- **AND** each card SHALL display a product image, category label, product title, star rating (5 stars), price, and heart/bag social icons

#### Scenario: Category filtering

- **GIVEN** the new arrivals section is displayed with "all" filter active
- **WHEN** the user clicks the "men" filter tab
- **THEN** only products tagged "men" SHALL be visible
- **AND** the "men" tab SHALL become active

### Requirement: Shipping details

The system SHALL render a 4-column shipping info section with icons and
descriptions.

#### Scenario: Shipping content

- **GIVEN** the page is rendered
- **WHEN** the shipping details section is displayed
- **THEN** it SHALL show 4 columns: Free Shipping, Return Policy, Secure
  Payment, and 24/7 Support
- **AND** each column SHALL have an icon, a title, and a description paragraph

### Requirement: Instagram photo gallery

The system SHALL render a gallery of 5 Instagram-style photos in a row.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the Instagram gallery is displayed
- **THEN** it SHALL show 5 photo thumbnails in a flex row
- **AND** each photo SHALL show an Instagram icon overlay on hover

### Requirement: Footer

The system SHALL render a footer with 4 columns, newsletter form, and
social links.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show 4 columns: Category (Male, Female, Shoes, Fashion),
  Company (About, News, FAQ, Contact), Address (address + phone + email),
  and Newsletter (email input + subscribe button)

#### Scenario: Footer social links

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show Facebook and Twitter social icon links

#### Scenario: Footer branding

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL include a link to https://www.componentdock.com/ labeled
  "Component Dock"

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Frostbite app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Frostbite — Fashion Shop Template"

## Verification checklist

- [ ] Navbar renders with site name and all navigation links
- [ ] Hero banner has headline, subtitle, and CTA with correct styling
- [ ] Feature grid shows 3 category images with hover overlays
- [ ] New arrivals shows 6 product cards with filter tabs
- [ ] Category filtering works (all / men / women / shoes)
- [ ] Shipping details shows 4 info columns with icons
- [ ] Instagram gallery shows 5 photos in a row
- [ ] Footer has 4 columns, newsletter form, and social links
- [ ] Footer links to Component Dock
- [ ] Brand color #2f7dfc is applied via Tailwind theme
- [ ] Pill-shaped buttons (border-radius 50px) used for CTAs
- [ ] Placeholder images from picsum.photos used (no asset copying)
- [ ] No ColorLib references in app code
- [ ] 100% test coverage maintained
