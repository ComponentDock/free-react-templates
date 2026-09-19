# Template: Mercato (Ecommerce — Bootstrap)

## Purpose

Mercato is a single-page ecommerce/shopping website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Karma" ecommerce website template design (see TEMPLATES.md,
Ecommerce category, line 1585), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

## Design reference (replication findings)

- **Original:** ColorLib "Karma" — free ecommerce/online-shop HTML template
  (page `<title>` "Karma Shop"; source:
  https://colorlib.com/wp/template/karma/). Single page: sticky header
  (logo + Home/Shop/Blog/Pages/Contact nav + bag icon + search toggle),
  fullscreen product hero carousel ("Nike New Collection!" + "Add to Bag"),
  4-column features row (Free Delivery, Return Policy, 24/7 Support,
  Secure Payment), category image grid (2+1 / 1+2 layout), product carousel
  (Latest Products → Coming Products tabs, 8 cards per slide), exclusive
  deal countdown section (split: left countdown + CTA, right product slider),
  brand logos row, "Deals of the Week" related products grid (9 cards +
  sidebar promo), and a dark footer (About Us, Newsletter, Instagram Feed,
  Follow Us, copyright).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/karma/` (fetched to `/tmp/karma.html`,
  full HTML retrieved) plus stylesheet `css/main.css` (fetchable from the
  same base URL) and the TEMPLATES.md screenshot
  (`karma-free-template.jpg`, viewed in browser).
- **Visual design (screenshot + live DOM + CSS):** bold, modern ecommerce
  aesthetic with a warm yellow-to-orange gradient brand accent. The hero is
  a fullscreen product image carousel with left-aligned text and a circular
  "Add to Bag" button. Product cards have clean white backgrounds with
  price strikethroughs and hover-reveal action icons (bag, wishlist, compare,
  view more). The exclusive deal section uses a bold countdown timer on the
  left with a product carousel on the right. Footer is light grey. Overall
  feel: sporty, energetic, product-focused.

## Design tokens (from `css/main.css` of the live preview)

- **Brand gradient:** `linear-gradient(90deg, #ffba00 0%, #ff6c00 100%)` —
  yellow start `#ffba00`, orange end `#ff6c00`.
- **Body text:** `#777777` — paragraphs, feature descriptions, price
  strikethrough text, footer copy. Headings: `#222222` (Poppins, weight
  500). Page background: `#fff`.
- **Fonts:** `"Poppins", sans-serif` for headings (weight 500);
  `"Roboto", sans-serif` for body text (weight 400). Load via Google Fonts
  `<link>` in `index.html`.
- **Buttons:** pill shape (`border-radius: 50px`), white text, uppercase,
  brand gradient background, 0.3s transition.
- **Product cards:** white bg, hover reveals action icons with brand
  gradient, price with strikethrough.
- **Exclusive deal:** countdown timer (Days/Hours/Mins/Secs), heading,
  description, "Shop Now" primary button, product carousel on right.
- **Footer:** light grey, 4 columns (About Us, Newsletter, Instagram Feed,
  Follow Us), copyright with Component Dock link.

## Requirements

### Requirement: Navigation header

The template SHALL display a sticky header with logo, nav links, bag icon, and search toggle.

#### Scenario: Logo and nav links are visible

- **WHEN** the page loads
- **THEN** the "Mercato" wordmark is displayed in the header
- **AND** nav links "Home", "Shop", "Blog", "Pages", "Contact" are visible

#### Scenario: Shop dropdown shows sub-links on hover

- **WHEN** the user hovers over "Shop"
- **THEN** a dropdown appears with sub-links

#### Scenario: Search bar opens on toggle click

- **WHEN** the user clicks the search toggle
- **THEN** a full-width search input field appears

### Requirement: Hero product carousel

The template SHALL display a fullscreen hero section with product headline and CTA.

#### Scenario: Hero displays product headline and CTA

- **WHEN** the hero section is visible
- **THEN** a headline is displayed
- **AND** an "Add to Bag" button is visible

### Requirement: Features row

The template SHALL display 4 feature cards in a row.

#### Scenario: Four features are displayed

- **WHEN** the features section is visible
- **THEN** 4 feature cards are shown with icons, titles, and descriptions

### Requirement: Category image grid

The template SHALL display category cards in a grid layout.

#### Scenario: Category grid shows deal cards

- **WHEN** the category section is visible
- **THEN** category cards are displayed in a grid

### Requirement: Product carousel with tabs

The template SHALL display product cards with tab switching.

#### Scenario: Product section shows Latest Products by default

- **WHEN** the product carousel section is visible
- **THEN** product cards are shown

#### Scenario: Tabs switch between Latest and Coming products

- **WHEN** the user clicks "Coming Products"
- **THEN** the heading changes to "Coming Products"

### Requirement: Exclusive deal countdown

The template SHALL display a countdown timer with product overlay.

#### Scenario: Countdown timer displays days, hours, minutes, seconds

- **WHEN** the exclusive deal section is visible
- **THEN** a countdown timer with Days, Hours, Mins, Secs blocks is displayed
- **AND** a "Shop Now" primary button is visible

### Requirement: Brand logos row

The template SHALL display brand logo images.

#### Scenario: Brand logos are displayed

- **WHEN** the brand section is visible
- **THEN** 5 brand logo images are shown

### Requirement: Deals of the week

The template SHALL display related product cards.

#### Scenario: Related products are displayed

- **WHEN** the deals section is visible
- **THEN** the heading "Deals of the Week" is displayed
- **AND** related product cards with thumbnail, title, and price are shown

### Requirement: Footer with Component Dock link

The template SHALL display a footer with newsletter, social links, and copyright.

#### Scenario: Footer columns are displayed

- **WHEN** the footer is visible
- **THEN** About Us, Newsletter, Instagram Feed, and Follow Us columns are shown

#### Scenario: Footer copyright links to Component Dock

- **WHEN** the footer bottom bar is visible
- **THEN** "Made with ♥ by Component Dock" links to https://www.componentdock.com/

## Verification checklist

- [ ] All sections render in order: header → hero → features → category → products → exclusive deal → brands → deals of the week → footer
- [ ] Header sticky on scroll; dropdowns open on hover; search bar toggle works
- [ ] Hero is fullscreen with product image and CTA
- [ ] Product cards show all 4 hover action icons with brand gradient
- [ ] Countdown timer displays and counts down
- [ ] Footer has Component Dock link (not Colorlib)
- [ ] No ColorLib references anywhere in `apps/mercato/`
- [ ] CNAME: `mercato.free.componentdock.com`
- [ ] Homepage: `https://mercato.free.componentdock.com`
- [ ] Images: `https://picsum.photos/seed/mercato-<n>/<w>/<h>` (deterministic)
- [ ] `npm run test:coverage` passes at 100%
- [ ] `bash scripts/verify-app.sh mercato` passes
