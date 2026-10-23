# Template: CartNova (E-commerce / Fashion Shop)

## Purpose

Recreation of ColorLib **Karma** — a fashion/e-commerce single-page template with product carousels, exclusive deal countdown, and brand showcase.

- **ColorLib source:** [karma](https://colorlib.com/wp/template/karma/)
- **Live preview:** https://preview.colorlib.com/theme/karma/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `cartnova` (apps/cartnova, @free-react-templates/cartnova)

## Design Tokens (extracted from preview stylesheet)

### Colors

| Token | Hex | Usage |
|---|---|---|
| Brand Primary | `#ffba00` (amber) | Button gradient start, accent highlights |
| Brand Secondary | `#ff6c00` (orange) | Button gradient end |
| Button Gradient | `linear-gradient(90deg, #ffba00, #ff6c00)` | primary-btn, add-to-bag, CTA buttons, active states |
| Text Dark | `#222222` | Headings, product titles, nav links |
| Text Muted | `#777777` | Body text, descriptions |
| Background Light | `#f9f9ff` | Section backgrounds (alternating light) |
| Background White | `#ffffff` | Card backgrounds, main bg |
| Accent Teal | `#4cd3e3` | Secondary icon accent, feature highlights |
| Accent Blue | `#38a4ff` | Tertiary accent |

### Typography

| Element | Font | Weight |
|---|---|---|
| Headings | Poppins, sans-serif | 600–700 |
| Body | Roboto, sans-serif | 400 |

### Buttons & Shapes

- **Primary button:** pill shape (border-radius: 50px), gradient background, white text, no border
- **Small buttons:** border-radius: 20px (category area)
- **Card elements:** border-radius: 3px (tight corners)
- **Hover:** gradient inverted (270deg) or same gradient maintained

### Section Backgrounds

- Banner: product hero image (full-width, no solid bg)
- Features: transparent on `#f9f9ff` section_gap
- Category area: image overlays with dark gradient
- Exclusive deal: solid dark (inferred from contrast)
- Brand area: white/light
- Footer: white

## Section Order (from live preview)

1. **Header** — sticky navbar, logo, nav links (Home, Shop dropdown, Blog dropdown, Pages dropdown, Contact), cart icon, search toggle
2. **Banner** — full-screen carousel slider, product hero image left, heading "Nike New Collection!" + add-to-bag CTA right
3. **Features** — 4-column row: Free Delivery, Return Policy, Coupon Code, 24/7 Service (each with icon + heading + description)
4. **Category** — asymmetric grid: 2 tall + 2 small category cards with overlay titles ("Sneaker for Sports", etc.)
5. **Product Carousel** — tabbed (Latest / Best Seller / Featured), owl-carousel of product cards with image, name, price, wishlist icon
6. **Exclusive Deal** — split layout: left side countdown timer (Days/Hours/Mins/Secs) + "Shop Now" CTA; right side product image
7. **Brand Logos** — horizontal row of 5 partner/brand logos
8. **Related Products** — carousel of related product cards (similar to section 5)
9. **Footer** — 4 columns: About Us text, Newsletter email form, Instagram feed grid (8 images), Follow Us social icons; footer-bottom copyright

## Requirements

### Header

#### Scenario: Sticky header displays logo, nav links, cart, and search

- **GIVEN** the user visits the homepage
- **THEN** the header is visible with logo on the left
- **AND** nav links include Home, Shop, Blog, Pages, Contact
- **AND** a cart icon and search toggle are on the right

#### Scenario: Header remains sticky on scroll

- **GIVEN** the user scrolls down past the banner
- **THEN** the header stays fixed at the top of the viewport

### Banner

#### Scenario: Hero banner shows product heading and CTA

- **GIVEN** the user views the banner section
- **THEN** a heading "New Collection!" is visible
- **AND** an "Add to Bag" CTA button is displayed
- **AND** a product hero image is shown

#### Scenario: Banner auto-rotates slides

- **GIVEN** the user waits on the banner
- **THEN** slides transition automatically with carousel behavior

### Features

#### Scenario: Four feature cards display service highlights

- **GIVEN** the user views the features section
- **THEN** 4 feature cards are displayed in a row
- **AND** each card has an icon, heading, and description
- **AND** headings are: Free Delivery, Return Policy, Coupon Code, 24/7 Service

### Category

#### Scenario: Category grid shows product categories with overlays

- **GIVEN** the user views the category section
- **THEN** an asymmetric grid of 4 category cards is displayed
- **AND** each card has a background image with overlay text

### Product Carousel

#### Scenario: Tabbed product carousel shows products

- **GIVEN** the user views the products section
- **THEN** tabs for Latest, Best Seller, and Featured are displayed
- **AND** products render as cards with image, name, price, and wishlist icon

#### Scenario: Clicking a tab switches product list

- **GIVEN** the user clicks the "Best Seller" tab
- **THEN** the product list updates to show best seller items

### Exclusive Deal

#### Scenario: Countdown timer shows deal expiry

- **GIVEN** the user views the exclusive deal section
- **THEN** a countdown timer displays Days, Hours, Minutes, Seconds
- **AND** a "Shop Now" CTA button is shown
- **AND** a product image is displayed alongside

### Brand Logos

#### Scenario: Partner brand logos are displayed

- **GIVEN** the user views the brand section
- **THEN** 5 brand logo images are shown in a horizontal row

### Related Products

#### Scenario: Related products carousel displays items

- **GIVEN** the user views the related products section
- **THEN** a carousel of product cards is shown
- **AND** each card has an image, name, price, and wishlist icon

### Footer

#### Scenario: Footer has 4 columns with newsletter and social

- **GIVEN** the user scrolls to the footer
- **THEN** an "About Us" text column is visible
- **AND** a newsletter email input with submit button is present
- **AND** an Instagram image grid (8 thumbnails) is displayed
- **AND** social media icons (Facebook, Twitter, etc.) are shown
- **AND** a "Component Dock" attribution link is in the footer-bottom

## Verification checklist

- [ ] Spec covers every section in the correct order
- [ ] Design tokens (colors, fonts, radii) match the original
- [ ] All Gherkin scenarios have a matching test
- [ ] Section structure matches the live preview DOM
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer includes Component Dock link
- [ ] Placeholder images use `https://picsum.photos/seed/cartnova-<n>/<w>/<h>`
- [ ] Google Fonts loaded via index.html link (Poppins + Roboto)
- [ ] Buttons use amber-to-orange gradient with pill shape (radius 50px)
- [ ] Header — the header is visible with logo on the left
- [ ] Banner — a heading "New Collection!" is visible
- [ ] Features — 4 feature cards are displayed in a row
- [ ] Category — an asymmetric grid of 4 category cards is displayed
- [ ] Product Carousel — tabs for Latest, Best Seller, and Featured are displayed
- [ ] Exclusive Deal — a countdown timer displays Days, Hours, Minutes, Seconds
- [ ] Brand Logos — 5 brand logo images are shown in a horizontal row
- [ ] Related Products — a carousel of product cards is shown
