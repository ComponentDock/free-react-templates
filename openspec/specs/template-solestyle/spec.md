# Template: Solestyle (Astro Template)

## Purpose

Solestyle is a single-page footwear / sneaker e-commerce landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Solestyle" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Solestyle" — footwear / sneaker store landing
  template (source: https://colorlib.com/wp/template/solestyle/).
- **Demo DOM analyzed:** https://solestyle-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.*.css` (54KB) extracted;
  `https://preview.colorlib.com/theme/solestyle/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`solestyle-template-1770211411401.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Sticky navbar (white/95 blur): "Stride" logo + links Shop,
     Categories, New Arrivals, Sale, About + cart count + Wishlist + "My
     Account"; category dropdown (Running, Sneakers, Boots); mobile nav.
  2. Hero (`bg-gray-950` dark): "Step Into Your Best" + "Shop Now" /
     "Browse Categories" buttons; trust badges (Average Rating, 300+
     Styles Available, Free Shipping orders over $75, Easy Returns 60-day
     guarantee).
  3. Shop by Category: 6 category cards (Running 48, Sneakers 86,
     Basketball 32, Casual 64, Boots 28, Sandals 24) + "Shop Now".
  4. Featured Collection: 7 product cards (Velocity Runner Pro, Streetwise
     Classic, Court Dominator X, Trail Blazer GTX, Marathon Elite, Cloud 9
     Recovery, Court Legacy Low) with category, rating, price, badges,
     "Add to Cart" + "View All Featured".
  5. Service bar (`border-y`): 4 perks — Free Shipping, 60-Day Returns,
     Size Guarantee, Secure Checkout.
  6. New Arrivals: 4 product cards (Court Dominator X, Summer Slide Sport,
     Marathon Elite, Cloud 9 Recovery) + "Shop New Arrivals".
  7. Testimonials (`bg-gray-950`): "What Our Customers Say" — 3 quotes
     (Marathon Runner, Fitness Instructor, Sneaker Enthusiast) + stats
     (Happy Customers, Average Rating, 5-Star Reviews, Would Recommend).
  8. App CTA (`bg-primary-600`): "Ready to Step Up Your Game?" — "Get 15%
     Off" + "Download Our App" (App Store / Google Play).
  9. Newsletter: "Join the Stride Club" — 15% off + subscribe form.
  10. Footer: brand blurb "Stride" + Shop / Help / About columns +
      copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **orange scale** — #f97316 (orange-500), #ea580c
    (orange-600 primary; #c2410c, #9a3412, #7c2d12, #431407 darker; #fb923c,
    #fed7aa, #ffedd5, #fff7ed lighter). App CTA band `bg-primary-600`; dark
    hero `bg-gray-950`.
  - Neutrals: gray scale — #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937, #111827, #030712.
  - Fonts: **"Outfit"** (display) + **"Inter"** (body) via Google Fonts.
  - Shapes: rounded product cards, pill buttons, sale badges (-18%,
    BESTSELLER, NEW); dark mode via dark:bg-gray-900/dark:bg-gray-950.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/solestyle-<n>/<w>/<h>`); icons → lucide-react (Truck,
  RotateCcw, Ruler, ShieldCheck, Star, ShoppingCart, Heart, ChevronRight,
  Sparkles, Mail, Smartphone, Apple); Outfit + Inter via Google Fonts;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.

Solestyle lives in `apps/solestyle` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Stride",
anchor links to the page's sections, a cart indicator, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Solestyle page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Stride" and links to
  Categories and New Arrivals
- **AND** the navbar SHALL show a cart indicator and a dark-mode toggle
  button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-screen hero with a headline and two
call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Step Into Your Best"
- **AND** it SHALL show "Shop Now" and "Browse Categories" buttons

### Requirement: Shop by category

The system SHALL render a category section with at least six categories.

#### Scenario: Categories content

- **GIVEN** the page is rendered
- **WHEN** the category section is displayed
- **THEN** it SHALL contain a heading "Shop by Category"
- **AND** it SHALL show categories for Running, Sneakers, Basketball, and
  Casual

### Requirement: Featured collection

The system SHALL render a featured collection section with product cards.

#### Scenario: Featured content

- **GIVEN** the page is rendered
- **WHEN** the featured section is displayed
- **THEN** it SHALL contain a heading "Featured Collection"
- **AND** it SHALL show at least four product cards with a name, price, and
  an "Add to Cart" button

### Requirement: Service perks

The system SHALL render a service bar with four perks.

#### Scenario: Perks content

- **GIVEN** the page is rendered
- **WHEN** the service bar is displayed
- **THEN** it SHALL show Free Shipping, 60-Day Returns, Size Guarantee, and
  Secure Checkout

### Requirement: New arrivals

The system SHALL render a new arrivals section with product cards.

#### Scenario: New arrivals content

- **GIVEN** the page is rendered
- **WHEN** the new arrivals section is displayed
- **THEN** it SHALL contain a heading "New Arrivals"
- **AND** it SHALL show at least four new product cards

### Requirement: Testimonials section

The system SHALL render a testimonials section with quotes and rating stats.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Customers Say"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: App call to action

The system SHALL render an app CTA with a discount offer and store buttons.

#### Scenario: App CTA content

- **GIVEN** the page is rendered
- **WHEN** the app CTA is displayed
- **THEN** it SHALL contain a heading "Ready to Step Up Your Game?"
- **AND** it SHALL show an app store and a Google Play button

### Requirement: Newsletter

The system SHALL render a newsletter section with a subscribe form.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL show a newsletter headline and a subscribe form with an
  email input and a "Subscribe" button

### Requirement: Footer

The system SHALL render a footer with link columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Shop, Help, About) and a copyright
  line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Solestyle app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Stride — Footwear Store Template"
