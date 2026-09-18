# Template: Velour (E-Commerce / Fashion)

## Purpose

Velour is a multi-page e-commerce/fashion homepage in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Eiser" free template (source:
https://colorlib.com/wp/template/eiser/), built under a DIFFERENT name
(**Velour**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 4 men's fashion e-commerce homepage with:
top info bar → main nav (Home, Shop dropdown, Blog dropdown, Pages
dropdown, Contact + icon bar) → full-width hero banner with background
image → 4-column feature guarantee cards → 3-column featured product
grid with hover slide-in action icons → full-width offer/sale section
with background image → 2-column new product area (featured item left,
4-grid right) → 4-column inspired products grid → 3-column blog cards
→ dark navy footer with 5-column link/newsletter section + social icons.

**WHAT MAKES VELOUR DISTINCT (signature behaviors):**

1. **Full-viewport hero banner with image background.** The
   `.home_banner_area` has `min-height: 790px` and a `background-image`
   (`banner-bg.jpg`) covering center-bottom. White 52px Roboto bold
   headline with green `#71cd14` accent spans ("Show" / "Style"), plus
   a 18px Heebo 300 subtitle and a green `.main_btn` CTA. No slider —
   static single banner.
2. **Feature guarantee cards with icon + border.** Four columns of
   `.single-feature` cards: each has a `flaticon-*` icon, uppercase
   Heebo 15px heading, and short description. Cards have `border: 1px
   solid #eff2f3` and centered text. No background fill — transparent
   with border outline.
3. **Product cards with sliding action overlay.** `.single-product`
   items have a `.p_icon` overlay that slides up from
   `bottom: -100px` to `bottom: 0` on hover (green-tinted
   `rgba(113,205,20,0.4)` background). Contains three circular icon
   buttons (eye, heart, cart) — white circles that turn green on hover.
   Product bottom shows name + price (with optional strikethrough).
4. **Offer section with background image.** `.offer_area` uses a
   background image (`offer-bg.png`, centered, cover) with centered
   content: 24px light "all men's collection" heading, massive 100px
   bold "50% off" display, green CTA button, and "Limited Time Offer"
   subtitle. Falls back to `#f6f6f6` on mobile.
5. **New Product split layout.** Left column: a full-height
   `.new_product` block with grey `#f6f6f6` background, product image,
   price, and "Add to cart" button. Right column: 2×2 grid of smaller
   product cards with the same hover-overlay pattern. Asymmetric
   visual weight.
6. **Dark navy footer with newsletter.** `.footer-area` has
   `background: #0d0d1f`. Four narrow link columns (Top Products, Quick
   Links, Features, Resources) + a wider Newsletter column with email
   input + green Subscribe button. Bottom row: copyright left, social
   icons (Facebook, Twitter, Dribbble, Behance) right on
   `rgba(255,255,255,0.15)` circles that turn green on hover.

## Naming

The ColorLib source name "Eiser" is FORBIDDEN as the app name. **Velour**
is the new, original name — single lowercase word, kebab-case, no
collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `velour` in TEMPLATES.md, `ls
apps/`, `openspec/specs/`, `docs/templates/`). Source slug: `eiser`.
Preview URL: https://preview.colorlib.com/theme/eiser/

## Design reference (replication findings)

- **Original:** ColorLib "Eiser" (page title: "Eiser ecommerce"). Listed
  in TEMPLATES.md under the E-section at line 993. Source slug: `eiser`.
- **Live preview — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/eiser/` returns HTTP 200.
  Stylesheets: `css/bootstrap.css`, `css/style.css` (main custom
  styles, ~66KB minified), `css/responsive.css`, plus vendor CSS
  (owl-carousel, lightbox, nice-select, animate, jquery-ui, flaticon,
  themify-icons, linericon). Scripts: Bootstrap jQuery bundle + owl
  carousel + lightbox + nice-select + main.js.
- **Live DOM structure (from the fetched HTML + CSS):**
  - `header.header_area` → `.top_menu` (grey `#f6f6f6` bar: phone,
    email left; gift card, track order, Contact Us right; 11px Roboto
    uppercase) → `.main_menu` (white bg, full-width navbar: logo left,
    nav links center — Home, Shop dropdown, Blog dropdown, Pages
    dropdown, Contact; icon bar right — search, cart, user, heart).
    Nav links: 13px Heebo uppercase, `#2a2a2a`, active/hover turns
    `#71cd14`. Dropdown menus: white bg, items 45px line-height,
    hover fills green `#71cd14` with white text.
  - `section.home_banner_area` (min-height 790px, background-image
    cover center-bottom) → `.banner_inner` flex centered →
    `.banner_content`: `.sub` 14px white uppercase "men Collection";
    `h3` 52px Roboto 700 white with green accent spans; `h4` 18px
    Heebo 300 white subtitle; `.main_btn` green CTA.
  - `section.feature-area` → `.container` → 4 columns of
    `.single-feature`: icon (flaticon, 24px `#4a4a4a`) → `h3` 15px
    Heebo uppercase → `p` description. Border `1px solid #eff2f3`.
  - `section.feature_product_area` → title block (`.main_title`: 24px
    Heebo uppercase `#2a2a2a` with underline span) → 3 columns of
    `.single-product`: `.product-img` (overflow hidden, hover scales
    image 1.1×) with `.p_icon` overlay (slides up, green-tinted bg,
    3 circular icon buttons) + `.product-btm` (border, product name +
    price).
  - `section.offer_area` (background-image cover, fallback `#f6f6f6`)
    → centered `.offer_content`: 24px light "all men's collection" →
    100px bold "50% off" → green CTA → "Limited Time Offer" text.
  - `section.new_product_area` → title block → 2-col layout: left
    `.new_product` (grey bg, featured product image, price, "Add to
    cart" button) + right 2×2 grid of `.single-product` cards.
  - `section.inspired_product_area` → title block → 4×2 grid (8
    items) of `.single-product` cards with hover-overlay pattern.
  - `section.blog-area` → title block → 3 columns of `.single-blog`:
    `.thumb` image (hover scales 1.1×) → `.short_details` (meta: admin
    + comments; `h4` title; `p` excerpt; "Learn More →" link). Title
    hover turns green.
  - `footer.footer-area` (bg `#0d0d1f`, 120px padding) → 5 columns:
    Top Products, Quick Links, Features, Resources (link lists, 14px
    `#797979`, hover white) + Newsletter (email input, green Subscribe
    button). `.footer-bottom`: copyright left, social icons right
    (`rgba(255,255,255,0.15)` bg circles, hover green `#71cd14`).
- **Screenshot (from TEMPLATES.md):** Men's fashion e-commerce site
  with a large hero banner showing a male model, green accent color on
  buttons and highlights, product grids below, and a dark footer.
  Clean, modern e-commerce aesthetic.

## Design tokens

| Token                | Value                              | Notes                                                                   |
| -------------------- | ---------------------------------- | ----------------------------------------------------------------------- |
| `--color-brand`      | `#71cd14`                          | Bright green — buttons, active nav, accents, hover states, CTA         |
| `--color-heading`    | `#2a2a2a`                          | Headings (h1–h6), nav links, product names                              |
| `--color-body`       | `#797979`                          | Body text, descriptions, meta text, prices                              |
| `--color-secondary`  | `#4a4a4a`                          | Feature icons, top menu text, top menu links                            |
| `--color-bg-light`   | `#f6f6f6`                          | Top menu bg, new product area, offer fallback on mobile                 |
| `--color-footer`     | `#0d0d1f`                          | Footer background (dark navy)                                           |
| `--color-border`     | `#eff2f3`                          | Feature cards border, product bottom border                             |
| `--color-overlay`    | `rgba(113,205,20,0.4)`            | Product hover icon panel background (semi-transparent green)            |
| `--color-white`      | `#ffffff`                          | Banner text, nav bg, product bg                                         |
| `--font-heading`     | 'Heebo', sans-serif                | Google Fonts 400/500/700; used for h1–h6, nav links, feature titles     |
| `--font-body`        | 'Roboto', sans-serif               | Google Fonts 300/400/500; body 14px/24px, product names, form inputs    |
| `--btn-radius`       | `5px`                              | `.main_btn` border-radius (green CTA buttons)                           |
| `--btn-font`         | Roboto 12px 500 uppercase          | `.main_btn` text styling                                                |
| `--card-radius`      | `0` (sharp corners)                | Product cards and feature cards have no border-radius                   |
| `--section-gap`      | `120px` vertical padding           | `.section_gap` (80px on mobile)                                         |
| `--product-hover`    | image scale 1.1, p_icon slide-up   | Product image hover zoom + icon panel slide-up transition               |
| `--social-radius`    | `0` (square)                       | Footer social icon buttons — square with `rgba(255,255,255,0.15)` bg   |

## Requirements

### Requirement: Page shell

The system SHALL render the complete e-commerce homepage with header,
hero, product sections, and footer.

#### Scenario: Full page structure

- **GIVEN** the Velour app is rendered on a desktop viewport
- **THEN** the page SHALL render in this order:
  1. Top info bar (grey bg, phone/email left, links right)
  2. Main navigation (logo, nav links, icon bar)
  3. Hero banner (full-width background image, headline, CTA)
  4. Feature guarantee cards (4-column grid)
  5. Featured products (3-column grid with title)
  6. Offer/sale section (background image, large percentage text)
  7. New products (split layout: featured + 4-grid)
  8. Inspired products (4-column grid, 8 items)
  9. Blog posts (3-column cards)
  10. Footer (dark bg, 5-column links/newsletter, social icons)

#### Scenario: Responsive layout

- **GIVEN** a viewport at or below 768px
- **THEN** all multi-column grids SHALL stack to single column
- **AND** the nav SHALL collapse to a hamburger menu
- **AND** the hero banner SHALL maintain readability (text scales down)

### Requirement: Header

The header SHALL contain a top info bar and a main navigation bar with
dropdown menus and icon actions.

#### Scenario: Top info bar

- **GIVEN** the Velour app is rendered
- **THEN** a grey `#f6f6f6` bar SHALL display at the top
- **AND** it SHALL show contact info (phone, email) on the left
- **AND** utility links (gift card, track order, Contact Us) on the right
- **AND** text SHALL be 11px Roboto uppercase, `#4a4a4a`

#### Scenario: Main navigation

- **GIVEN** the Velour app is rendered
- **THEN** a white-background navigation bar SHALL render below the
  top bar
- **AND** it SHALL contain: logo (left), nav links (center: Home, Shop,
  Blog, Pages, Contact), icon bar (right: search, cart, user, heart)
- **AND** nav links SHALL be 13px Heebo uppercase, `#2a2a2a`
- **AND** active/hovered links SHALL turn `#71cd14` (green)
- **AND** dropdown menus SHALL appear on hover with white bg and items
  that fill green on hover

### Requirement: Hero banner

The hero SHALL display a full-width background image with centered
headline text and a green CTA button.

#### Scenario: Banner content

- **GIVEN** the hero banner is rendered
- **THEN** it SHALL have a background image covering the full section
  (min-height ~790px)
- **AND** it SHALL show a white uppercase subtitle ("men Collection"),
  a large 52px bold headline with green accent words ("Show Your
  Personal Style"), and a 18px subtitle
- **AND** a green `.main_btn` CTA ("View Collection") SHALL render
  below the text

#### Scenario: Banner button hover

- **GIVEN** the CTA button is rendered
- **WHEN** the user hovers the button
- **THEN** it SHALL transition to transparent bg with green text
  (border remains green)

### Requirement: Feature guarantee cards

Four feature cards SHALL display in a row with icon, title, and
description.

#### Scenario: Feature cards rendering

- **GIVEN** the feature section is rendered
- **THEN** four cards SHALL display in a 4-column grid
- **AND** each card SHALL have a centered icon, an uppercase Heebo
  heading, and a short description
- **AND** cards SHALL have `border: 1px solid #eff2f3` with no fill

### Requirement: Featured products

A product grid SHALL display with hover-activated action icons.

#### Scenario: Product cards

- **GIVEN** the featured products section is rendered
- **THEN** a section title ("featured product for women") SHALL appear
  with a green underline accent
- **AND** three product cards SHALL display in a row
- **AND** each card SHALL show: product image, product name, and price
  (with optional strikethrough for original price)

#### Scenario: Product hover overlay

- **GIVEN** a product card is rendered
- **WHEN** the user hovers the product image area
- **THEN** the image SHALL scale up slightly (1.1×)
- **AND** a green-tinted overlay panel SHALL slide up from the bottom
  containing three circular icon buttons (view, wishlist, cart)
- **AND** icon buttons SHALL be white circles that turn green on hover

### Requirement: Offer/sale section

A full-width offer section SHALL display with background image and large
promotional text.

#### Scenario: Offer content

- **GIVEN** the offer section is rendered
- **THEN** it SHALL have a background image (cover, centered)
- **AND** centered content SHALL show: "all men's collection" heading,
  "50% off" in massive 100px bold text, a green CTA button, and
  "Limited Time Offer" text

#### Scenario: Mobile fallback

- **GIVEN** a viewport at or below 991px
- **THEN** the offer section background SHALL fall back to solid
  `#f6f6f6` (no background image)

### Requirement: New products split layout

A split layout SHALL display a featured product on the left and a 2×2
product grid on the right.

#### Scenario: Split layout

- **GIVEN** the new products section is rendered
- **THEN** the left column SHALL show a grey `#f6f6f6` block with
  collection label, product name, large product image, price, and
  "Add to cart" button
- **AND** the right column SHALL show a 2×2 grid of smaller product
  cards with the same hover-overlay pattern as featured products

### Requirement: Inspired products grid

An 8-item product grid SHALL display in 4 columns.

#### Scenario: Inspired products

- **GIVEN** the inspired products section is rendered
- **THEN** a section title ("inspired products") SHALL appear
- **AND** 8 product cards SHALL display in a 4-column, 2-row grid
- **AND** each card SHALL have the same hover-overlay pattern as
  featured products

### Requirement: Blog posts

Three blog post cards SHALL display with image, meta, title, excerpt,
and link.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **THEN** a section title ("latest blog") SHALL appear
- **AND** three blog cards SHALL display in a 3-column grid
- **AND** each card SHALL have: thumbnail image, meta info (author +
  comment count), title, excerpt, and "Learn More →" link
- **AND** hovering a card SHALL scale the image and turn the title green

### Requirement: Footer

A dark navy footer SHALL display with link columns, newsletter signup,
and social icons.

#### Scenario: Footer layout

- **GIVEN** the footer is rendered
- **THEN** it SHALL have a dark navy `#0d0d1f` background
- **AND** it SHALL show four link columns (Top Products, Quick Links,
  Features, Resources) with 14px `#797979` links that turn white on
  hover
- **AND** a Newsletter column SHALL show an email input and green
  Subscribe button

#### Scenario: Footer bottom

- **GIVEN** the footer bottom row is rendered
- **THEN** a copyright line SHALL appear on the left
- **AND** social icons (Facebook, Twitter, Dribbble, Behance) SHALL
  appear on the right as square buttons with `rgba(255,255,255,0.15)`
  background that turns green on hover

#### Scenario: Component Dock credit

- **GIVEN** the Velour app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics.

#### Scenario: Semantics

- **GIVEN** the Velour app is rendered
- **THEN** the header SHALL use `<header>` with `<nav>` for navigation
- **AND** the main content SHALL use semantic section elements
- **AND** the footer SHALL use `<footer>`
- **AND** all interactive elements SHALL have visible focus rings
- **AND** dropdown toggles SHALL expose `aria-expanded`
- **AND** icon-only buttons SHALL have `aria-label`

## Verification checklist

- [ ] `npm run verify:app -- velour` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/eiser/: green `#71cd14`
      accents, Heebo/Roboto fonts, full-width hero banner, 4-column
      feature cards, product grids with hover overlay, offer section,
      dark navy footer.
- [ ] Behavior check: nav dropdowns open on hover/click, product hover
      shows sliding action panel, blog cards scale images on hover,
      newsletter form renders, footer links are interactive.
- [ ] Responsive check at 768px (stacked columns, hamburger nav, no
      horizontal overflow).
