# Template: Vendora (Fashion E-commerce Template)

## Purpose

Vendora is a single-page fashion e-commerce store landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Shopper" website template design
(source: https://colorlib.com/wp/template/shopper/), built under a DIFFERENT
name (Vendora) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-08): a stale prep existed at
> `openspec/specs/template-shopper/` using the FORBIDDEN ColorLib source
> name (folder == source slug); it was deleted and replaced by this fresh
> prep (new name Vendora), matching the Shieldguard→Coverly /
> Shieldnet→Aegis / Pipelineiq→Dealflow precedent. The stale prep's research
> was re-verified against the live demo (DOM + CSS re-parsed): section order,
> copy, and tokens below are from the live demo, not the stale prep.

## Design reference (replication findings)

- **Original:** ColorLib "Shopper" — fashion / e-commerce store landing
  template (source: https://colorlib.com/wp/template/shopper/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/shopper/`
  returns 404; the ColorLib preview portal hosts the demo at
  `https://shopper-colorlib.pages.dev/` (HTTP 200, ~110 KB HTML +
  `/_astro/Base.Dc8UlFQE.css` ~47 KB parsed for tokens — same
  `<slug>-colorlib.pages.dev` pattern as Dealflow/Coverly/Aegis; verified via
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`shopper-template-1770211205661.jpg`) is the visual reference and was
  viewed: the demo brand is "Luxe" (we recreate under the NEW name Vendora).
- **Section order (1:1, from live demo DOM):**
  1. Promo bar (thin solid **fuchsia/purple** strip above the header):
     "Free shipping on orders over $100 | Use code LUXE20 for 20% off".
  2. Sticky navbar (white/95 blur): logo (shopping-bag icon + site name) +
     links Shop, Categories, New Arrivals, Sale, About + search/account
     icons + cart indicator with count badge + dark-mode toggle; mobile
     hamburger drawer (duplicate links).
  3. Hero (`min-h-[90vh]`, full-bleed boutique/interior photography
     background, dark overlay): kicker tag "Spring/Summer 2022 Collection",
     H1 "Elevate Your **Everyday Style**" (tail word in primary color),
     blurb "Discover curated collections of premium fashion and lifestyle
     products...", CTAs "Shop Collection" (solid primary) + "Browse
     Categories" (dark), trust badges (Average Rating, 500+ Premium
     Products, Free Shipping on orders over $100, Secure Checkout),
     "SCROLL" indicator at bottom.
  4. Service bar (`border-y border-gray-200 bg-white py-12`): 4 perks —
     Free Shipping, Secure Payment, Easy Returns, 24/7 Support (icon + h3 +
     blurb each).
  5. Featured Products (`bg-white py-16 lg:py-24`): h2 "Featured Products",
     blurb, 8 product cards — Minimal Leather Jacket ($299, -25% badge),
     Cashmere Crewneck Sweater ($189, New), Aviator Sunglasses ($145),
     Minimalist Leather Sneakers ($165, Bestseller), Automatic Dress Watch
     ($495), Diamond Pendant Necklace ($350), Italian Wool Overcoat ($425,
     -19%), Performance Running Sneakers ($145, New) — each with category,
     rating, price (+ line-through compare-at where discounted), pill sale
     badge (red `-25%`, amber `Bestseller`, green `New`), "Add to Cart"
     button; "View All Products" link.
  6. Shop by Category (`bg-gray-50 py-16 lg:py-24`): h2 "Shop by Category",
     6 category cards — Clothing (124), Accessories (86), Footwear (52),
     Bags (38), Jewelry (64), Watches (28) — each with "Shop Now".
  7. New Arrivals (`bg-gray-50`): h2 "New Arrivals", 4 product cards —
     Cashmere Crewneck Sweater, Minimalist Leather Sneakers, Printed Silk
     Scarf, Suede Chelsea Boots — + "See All New".
  8. Season Sale (`relative overflow-hidden bg-gradient-to-br
from-primary-600 to-primary-800 py-16`): "Season Sale — Up to 50% off"
     - countdown (Days/Hours/Minutes) + 4 discounted products + "Shop All
       Sale".
  9. Testimonials (`bg-white py-16 lg:py-24`): h2 "What Our Customers Say",
     blurb, 3 quote cards — Alexandra Chen, Marcus Johnson, Sophie Williams.
  10. Newsletter band (`relative overflow-hidden bg-gray-900 py-16 lg:py-24`):
      "Get 20% Off Your First Order" + 4 benefit items (Exclusive Offers,
      New Arrivals First, Free Returns, Style Tips) + subscribe form.
  11. Footer: "Join Our Newsletter" (15% off) + subscribe form; brand blurb
      - Shop / Help / About link columns + copyright line.
- **Design tokens extracted from live CSS (`Base.Dc8UlFQE.css`):**
  - Brand colors: **fuchsia scale** — `#d946ef` (fuchsia-500), `#c026d3`
    (fuchsia-600, PRIMARY), `#a21caf`, `#86198f`, `#701a75` (darker);
    lighter `#e879f9`, `#f0abfc`, `#f5d0fe`, `#fae8ff`, `#fdf4ff` (50–300
    tints). Sale band gradient `from-primary-600 to-primary-800`.
  - Accents: `#f97316` orange (sale/amber-500 badges), red-500 (`-25%`
    badges), green-500 (New badges).
  - Neutrals: gray scale — `#f3f4f6` (100), `#e5e7eb` (200), `#d1d5db`
    (300), `#9ca3af` (400), `#6b7280` (500), `#4b5563` (600), `#374151`
    (700), `#1f2937` (800), `#111827` (900) — newsletter band + footer use
    gray-900, dark sections gray-950.
  - Fonts: **"Outfit"** (display: headings, logo) + **"Inter"** (body) via
    Google Fonts (`fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700
&family=Outfit:wght@400;500;600;700`).
  - Shapes: rounded product cards (rounded-xl/2xl), pill sale badges
    (`rounded-full`), pill CTAs, `rounded-full` service icons; `border-y`
    service bar; dark mode via `dark:bg-gray-900`/`dark:bg-gray-950`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/vendora-<n>/<w>/<h>`); icons → lucide-react (ShoppingBag,
  Truck, ShieldCheck, RotateCcw, Headphones, Star, ShoppingCart, Heart, Clock,
  ChevronRight, Sparkles, Mail, Menu, Sun/Moon; brand icons as inline SVG);
  Outfit + Inter via Google Fonts; repo-standard Navbar (dark-mode toggle) +
  Footer chrome; brand color fuchsia-600 `#c026d3` in `@theme` as `primary`;
  promo-code copy adapted to the new brand (e.g. "code VENDORA20").

Vendora lives in `apps/vendora` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Promo bar

The system SHALL render a thin promotional strip above the navbar with a
shipping offer and a discount code.

#### Scenario: Promo bar content

- **GIVEN** the Vendora page is rendered
- **WHEN** the page loads
- **THEN** the top of the page SHALL show a promo bar with free-shipping
  copy and a discount-code mention

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name
"Vendora", anchor links to the page's sections, a cart indicator, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Vendora page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Vendora" and links to Shop,
  Categories, New Arrivals, Sale, and About
- **AND** the navbar SHALL show a cart indicator with a count badge and a
  dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-screen hero with a headline, two
call-to-action buttons, and trust badges.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading with the site's tagline and a
  highlighted word in the primary color
- **AND** it SHALL show "Shop Collection" and "Browse Categories" buttons
- **AND** it SHALL show trust badges (shipping, products, checkout)

### Requirement: Service perks

The system SHALL render a service bar with four perks.

#### Scenario: Perks content

- **GIVEN** the page is rendered
- **WHEN** the service bar is displayed
- **THEN** it SHALL show Free Shipping, Secure Payment, Easy Returns, and
  24/7 Support, each with an icon and short blurb

### Requirement: Featured products

The system SHALL render a featured products section with product cards.

#### Scenario: Featured products content

- **GIVEN** the page is rendered
- **WHEN** the featured products section is displayed
- **THEN** it SHALL contain a heading "Featured Products"
- **AND** it SHALL show at least four product cards with a name, price, and
  an "Add to Cart" button
- **AND** discounted products SHALL show a pill badge (e.g. -25%, Bestseller,
  New) and a compare-at price

### Requirement: Shop by category

The system SHALL render a category section with at least six categories.

#### Scenario: Categories content

- **GIVEN** the page is rendered
- **WHEN** the category section is displayed
- **THEN** it SHALL contain a heading "Shop by Category"
- **AND** it SHALL show categories for Clothing, Accessories, Footwear,
  Bags, Jewelry, and Watches with item counts and a "Shop Now" link

### Requirement: New arrivals

The system SHALL render a new arrivals section with product cards.

#### Scenario: New arrivals content

- **GIVEN** the page is rendered
- **WHEN** the new arrivals section is displayed
- **THEN** it SHALL contain a heading "New Arrivals"
- **AND** it SHALL show at least four new product cards and a "See All New"
  link

### Requirement: Season sale

The system SHALL render a sale section with a headline, a countdown, and
discounted products.

#### Scenario: Sale content

- **GIVEN** the page is rendered
- **WHEN** the sale section is displayed
- **THEN** it SHALL contain a heading about the season sale with a discount
  mention
- **AND** it SHALL show a countdown (Days/Hours/Minutes) and discounted
  product cards
- **AND** the section SHALL use a primary-gradient background

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Customers Say"
- **AND** it SHALL show at least three testimonial quotes with author names

### Requirement: Newsletter

The system SHALL render a newsletter section with a headline and a subscribe
form.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL show a newsletter headline and a subscribe form with an
  email input and a "Subscribe" button
- **AND** it SHALL list benefit items (Exclusive Offers, New Arrivals First,
  Free Returns, Style Tips)

### Requirement: Footer

The system SHALL render a footer with a newsletter prompt, link columns, and
a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a "Join Our Newsletter" prompt with a subscribe form
- **AND** it SHALL show link columns (Shop, Help, About) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Vendora app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Vendora — Fashion Store Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-vendora/`
- [ ] `scripts/verify-app.sh vendora` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Section order matches the live demo 1:1 (promo bar → navbar → hero →
      perks → featured → categories → arrivals → sale → testimonials →
      newsletter → footer)
- [ ] Brand color fuchsia-600 `#c026d3` in `@theme`; Outfit + Inter loaded
      via Google Fonts `<link>`
- [ ] Placeholder images use `picsum.photos/seed/vendora-<n>/<w>/<h>`; no
      copied assets
- [ ] PR description states: source template (ColorLib Shopper), preview URL
      (https://shopper-colorlib.pages.dev/), design tokens, and what differs
      (new name Vendora, placeholder images, adapted promo code)
