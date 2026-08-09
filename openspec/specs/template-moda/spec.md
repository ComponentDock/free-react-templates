# Template: Moda (E-commerce / Fashion)

## Purpose

Moda is a single-page fashion e-commerce landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Shopper" website template design
(source: https://colorlib.com/wp/template/shopper/, slug `shopper`), built
under a DIFFERENT name (Moda — "fashion" in Italian/Spanish, evoking a
clothing brand) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Shopper" — free fashion/lifestyle e-commerce
  website template. Official description per ColorLib: an e-commerce
  template for fashion and lifestyle stores (product grid, categories,
  sale countdown, testimonials, newsletter). The official preview page
  `https://preview.colorlib.com/theme/shopper/` returns **404 "Not Found"**,
  but the ColorLib preview hub (`preview.colorlib.com/assets/js/products.js`)
  maps the slug to a REACHABLE Cloudflare Pages demo:
  **`https://shopper-colorlib.pages.dev/`** — the current official Astro
  rebuild of the same design (title "Luxe - Modern Fashion & Lifestyle").
  All DOM structure, copy, and tokens below are extracted from that live
  demo (real values, not approximations), cross-checked against the
  TEMPLATES.md screenshot (`shopper-template-1770211205661.jpg`, AVIF
  2400×1892, converted and visually analyzed — matches the demo's
  above-the-fold 1:1: same announcement bar, same LUXE wordmark + shopping
  bag logo, same nav, same hero photo/headline/CTAs/stats).
- **Visual design (screenshot + live demo):** clean, modern, minimalist
  fashion e-commerce. Fuchsia/magenta brand accent on a white + gray base.
  Thin solid fuchsia announcement bar on top; sticky white header (logo
  left, centered nav, icon cluster right); full-bleed hero photo of a
  boutique clothing store interior with a left-to-right dark gradient
  overlay (text readable on the left), big white bold headline with the
  accent word in light fuchsia, two CTAs, a stats row and two floating
  trust chips; then a 4-column trust bar; a featured-products grid of 8
  portrait product cards (badge, category label, title, star rating, price
  with strikethrough old price, color swatch dots, Add to Cart); a
  Shop-by-Category grid of 6 image cards; a New Arrivals row; a fuchsia
  gradient Season Sale section with a live countdown timer and 4 sale
  cards; 3 testimonial cards + a trust row; a dark newsletter section with
  a 4-feature row; and a light footer with a mini newsletter, 3 link
  columns and a payment-icons bottom bar. The demo also supports **dark
  mode** (a "Toggle dark mode" header icon flips `dark:` variants).
- **Section order (1:1 from the live demo DOM):**
  1. **Announcement bar** (`bg-primary-600 py-2 text-center text-sm
font-medium text-white`): "Free shipping on orders over $100 | Use
     code **LUXE20** for 20% off" (code in `font-bold`).
  2. **Header** (`sticky top-0 z-40 border-b border-gray-100 bg-white/95
backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95`): brand =
     wordmark "LUXE" + shopping-bag icon (recreated as text + lucide icon);
     centered nav — Shop, Categories, New Arrivals, Sale, About; right
     icon cluster — Search, Toggle dark mode, Account, Cart (with count
     badge); mobile: hamburger ("Toggle menu" aria-label) expanding the
     same links + My Account; pressing Escape closes the mobile menu.
  3. **Hero** (`relative min-h-[90vh] overflow-hidden`): full-bleed fashion
     store photo (`object-cover`) + overlay `bg-gradient-to-r
from-gray-900/90 via-gray-900/70 to-gray-900/40`; content
     `max-w-2xl` left-aligned: pill badge (white/10, `rounded-full`,
     backdrop-blur) "Spring/Summer 2032 Collection"; H1
     (`font-display text-5xl sm:text-6xl lg:text-7xl font-bold
tracking-tight text-white`) "Elevate Your **Everyday** Style" with
     "Everyday" in `text-primary-400`; subtext (`text-lg text-gray-300`):
     "Discover curated collections of premium fashion and lifestyle
     products. Timeless designs crafted for the modern individual."; CTA
     row: primary "Shop Collection" (`rounded-lg bg-primary-600 px-8 py-4
font-semibold text-white hover:bg-primary-700 hover:shadow-lg
hover:shadow-primary-500/25`) + secondary "Browse Categories"
     (`rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm
hover:border-white/50 hover:bg-white/20`); stats row: "50K+ Happy
     Customers", "4.9 Average Rating", "500+ Premium Products"; two
     floating trust chips bottom-right (Free Shipping, Secure Checkout);
     bottom-center animated "Scroll" indicator.
  4. **Trust bar** (`border-y border-gray-200 bg-white py-12`): 4 columns
     with icon + title + sub — Free Shipping ("on all orders over $100.
     Express delivery available."), Secure Payment ("processed securely
     with SSL encryption."), Easy Returns ("30-day return policy. No
     questions asked, hassle-free returns."), 24/7 Support ("available
     around the clock to assist you.").
  5. **Featured Products** (`bg-white py-16 lg:py-24`): heading "Featured
     Products" + sub "Discover our handpicked selection of trending items"
     - "View All Products" link; grid `mt-12 grid gap-6 sm:grid-cols-2
lg:grid-cols-4` of 8 product cards (card root `group relative`):
       portrait image (`relative aspect-[3/4]`), overlay badge top-left
       ("New", "Bestseller", or "-25%" discount in orange accent),
       category label, title, star icon + rating (e.g. 4.8), price row
       (`mt-2 flex items-center gap-2`) with strikethrough old price
       (`$399` → `$299` when discounted), 3 color-swatch dots (e.g. Charcoal
       `#36454F`, Camel `#C19A6B`, Navy `#1e3a5f`), "Add to Cart" button.
  6. **Shop by Category** (`bg-gray-50 py-16 lg:py-24`): heading + sub
     "Explore our curated collections…"; 6 category cards (image, name,
     product count "124 Products", "Shop Now" link): Clothing (124),
     Accessories (86), Footwear (52), Bags (38), Jewelry (64), Watches
     (28).
  7. **Just Dropped / New Arrivals** (`bg-gray-50`): heading "Just
     Dropped" + sub "New Arrivals — Fresh styles added to our collection"
     - "See All New" link; 4 new-arrival product cards (Cashmere Crewneck
       Sweater, Minimalist Leather Sneakers, Printed Silk Scarf, Suede
       Chelsea Boots).
  8. **Season Sale** (`relative overflow-hidden bg-gradient-to-br
from-primary-600 to-primary-800 py-16 lg:py-24`): "Limited Time
     Offer" label, "Season Sale" heading, "Up to 50% off on selected
     items", "Shop All Sale" CTA; **live countdown timer** (`#sale-countdown`,
     4 boxes `rounded-xl bg-white/20 font-display`, h-16 w-16) showing
     Days : Hours : Minutes : Seconds; 4 sale product cards with discount
     badges (-25%, -18%, -17%, -19%) and strikethrough prices.
  9. **Testimonials** (`bg-white py-16 lg:py-24`): heading "What Our
     Customers Say" + sub "Join thousands of satisfied customers who love
     shopping with us"; 3 quote cards (5-star row, quote text, name +
     location e.g. "Alexandra Chen, Los Angeles, CA", "Verified" badge);
     trust row beneath: Trustpilot, SSL Secured, Verified Reviews.
  10. **Newsletter** (`relative overflow-hidden bg-gray-900 py-16 lg:py-24`):
      "Get 20% Off Your First Order" heading, sub "Sign up for our
      newsletter and receive exclusive offers, early access to new
      collections, and style inspiration.", email input + "Subscribe"
      button, consent line "By subscribing, you agree to our Privacy
      Policy and consent to receive updates."; 4-feature row: Exclusive
      Offers, New Arrivals First, Free Returns, Style Tips.
  11. **Footer** (`bg-gray-50 dark:bg-gray-900`): mini newsletter block
      ("Join Our Newsletter — Get 15% off your first order…" + email +
      Subscribe), brand blurb ("Discover curated collections of premium
      fashion, accessories, and lifestyle products."), 3 link columns —
      Shop (Clothing, Accessories, Footwear, Bags, Jewelry, Sale), Help
      (FAQ, Shipping & Returns, Size Guide, Contact Us, Track Order),
      About (Our Story, Sustainability, Careers, Press); bottom bar:
      "© 2026 Moda. All rights reserved." + Privacy + Terms + payment
      icons (VISA, AMEX).
- **Design tokens (extracted from the live demo's CSS
  `/_astro/Base.Dc8UlFQE.css` — real values):**
  - Brand **primary = fuchsia `#C026D3`** (primary-600: announcement bar,
    primary CTAs, sale-section gradient `from-primary-600 to-primary-800`,
    icon-chip backgrounds) with scale: 50 `#fdf4ff`, 100 `#fae8ff`, 200
    `#f5d0fe`, 400 `#e879f9` (hero accent word), 500 `#d946ef`, 600
    `#c026d3`, 700 `#a21caf` (button hover), 800 `#86198f`, 900 `#701a75`.
  - Accent **orange = `#F97316`** (accent-500; sale/discount badges),
    accent-400 `#fb923c`, accent-200 `#fed7aa`, accent-900 `#7c2d12`.
  - Neutrals: white `#fff`; gray-50 (light sections, footer), gray-100
    (header border), gray-200 (trust-bar borders), gray-300 (hero subtext,
    swatch borders), gray-600 (secondary text, ratings), gray-900 (dark
    newsletter section + hero overlay base), gray-950 (dark-mode page bg).
  - Fonts: **Outfit** (`--font-display`, headings/logo/countdown digits)
    - **Inter** (`--font-sans`, body) via Google Fonts `<link>`.
  - Buttons: primary CTA `rounded-lg`, `bg-primary-600`, white semibold,
    `px-8 py-4`, hover `bg-primary-700` + `shadow-primary-500/25`; hero
    secondary = translucent glass (`bg-white/10 border-2 border-white/30
backdrop-blur-sm`); pill badges `rounded-full` (hero badge, trust
    chips). NOTE: the TEMPLATES.md screenshot shows pill (fully rounded)
    hero CTAs; the current live rebuild uses `rounded-lg` — match the live
    rebuild (authoritative rendered reference).
  - Cards: portrait images `aspect-[3/4]`, `rounded-xl`/`rounded-2xl`
    imagery, product grid `grid gap-6 sm:grid-cols-2 lg:grid-cols-4`,
    category grid 3-col → responsive; section rhythm `py-16 lg:py-24`,
    container `mx-auto max-w-7xl px-4 lg:px-8`.
  - Hero: `min-h-[90vh]` full-bleed image + `bg-gradient-to-r
from-gray-900/90 via-gray-900/70 to-gray-900/40` overlay; headline
    `text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/moda-<n>/<w>/<h>`; hero 1920×1080, products 800×1000
  (3:4), categories 600×400); icons → lucide-react (ShoppingBag for the
  logo mark, Search, Moon/Sun for the dark toggle, User, Heart, ShoppingCart,
  Star, Truck, Lock/ShieldCheck, RotateCcw/RefreshCcw, Headphones/Headset,
  ArrowRight, Menu, X, ChevronDown — VERIFY exports; social/payment brand
  icons (VISA/AMEX) as inline SVG text chips, do NOT add dependencies);
  fonts via Google Fonts `<link>` (Outfit 400–700 + Inter 400–700); dark
  mode = `dark:` variants + toggle flipping `.dark` on
  `document.documentElement`, persisted via `window.localStorage` (Keyhaven
  pattern — jsdom 30 has no localStorage, use the in-memory Storage
  polyfill in `src/test/setup.ts`); countdown = client-side timer to a
  fixed future date (initial values like 02:14:36:48, ticking down);
  newsletter forms = client-side validation with inline success state (no
  backend); "View All Products"/"See All New"/"Shop All Sale"/"Browse
  Categories" link to inert anchors or `#` placeholders (single-page
  landing per repo convention; source is a multipage shop).

Moda lives in `apps/moda` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Announcement bar

The system SHALL render a solid brand-colored announcement strip above the
header with a shipping promo and a promo code.

#### Scenario: Announcement content

- **GIVEN** the Moda page is rendered
- **WHEN** the page loads
- **THEN** an announcement bar SHALL appear above the header on the brand
  (fuchsia) background with white text
- **AND** it SHALL read "Free shipping on orders over $100 | Use code
  LUXE20 for 20% off" with the code LUXE20 in bold

### Requirement: Header with logo, nav, and icons

The system SHALL render a sticky header with a brand wordmark + shopping-bag
icon, centered navigation links, a right icon cluster, and a mobile menu.

#### Scenario: Header content

- **GIVEN** the Moda page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand name "Moda" with a
  shopping-bag icon as the logo
- **AND** the header SHALL show nav links Shop, Categories, New Arrivals,
  Sale, and About
- **AND** the header SHALL show icon controls for Search, dark-mode
  toggle, Account, and Cart
- **AND** the header SHALL stay visible at the top when the page scrolls
  (sticky)

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** a menu SHALL expand listing the nav links and My Account
- **AND** the button SHALL reflect the expanded state via `aria-expanded`
- **AND** the menu SHALL close when the user presses Escape or activates a
  link

#### Scenario: Dark mode toggle

- **GIVEN** the header is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the page SHALL switch between light and dark color schemes
- **AND** the choice SHALL persist across reloads (via
  `window.localStorage`)

### Requirement: Hero

The system SHALL render a full-height hero with a background photo, dark
gradient overlay, headline, two CTAs, a stats row, trust chips, and a scroll
indicator.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL show a full-bleed fashion-store photo with a
  dark left-to-right gradient overlay
- **AND** a pill badge SHALL read "Spring/Summer 2032 Collection"
- **AND** the headline SHALL read "Elevate Your Everyday Style" with
  "Everyday" in the brand accent color
- **AND** a subtext paragraph SHALL describe curated premium fashion
  collections

#### Scenario: Hero CTAs

- **GIVEN** the hero is displayed
- **WHEN** the user views the call-to-action row
- **THEN** a primary button "Shop Collection" SHALL use the brand color
  with a hover state
- **AND** a secondary button "Browse Categories" SHALL use a translucent
  glass style with a border

#### Scenario: Hero stats and trust chips

- **GIVEN** the hero is displayed
- **WHEN** the user views the bottom of the hero
- **THEN** a stats row SHALL show "50K+ Happy Customers", "4.9 Average
  Rating", and "500+ Premium Products"
- **AND** trust chips SHALL show "Free Shipping" and "Secure Checkout"
- **AND** a "Scroll" indicator SHALL be present at the bottom center

### Requirement: Trust bar

The system SHALL render a four-column feature strip below the hero.

#### Scenario: Trust features

- **GIVEN** the page is rendered
- **WHEN** the trust bar is displayed
- **THEN** it SHALL show four features with icons: Free Shipping, Secure
  Payment, Easy Returns, and 24/7 Support
- **AND** each feature SHALL include a short supporting description

### Requirement: Featured products grid

The system SHALL render a "Featured Products" section with a heading, a
"View All Products" link, and an 8-card product grid.

#### Scenario: Section heading

- **GIVEN** the page is rendered
- **WHEN** the featured products section is displayed
- **THEN** the heading SHALL read "Featured Products" with the subtext
  "Discover our handpicked selection of trending items"
- **AND** a "View All Products" link SHALL be present

#### Scenario: Product cards

- **GIVEN** the featured products section is displayed
- **WHEN** a product card is inspected
- **THEN** it SHALL show a 3:4 portrait image, a badge ("New",
  "Bestseller", or a discount like "-25%"), a category label, a title, a
  star rating, and a price
- **AND** discounted products SHALL show the old price struck through next
  to the sale price
- **AND** the card SHALL show color-swatch dots and an "Add to Cart"
  button

### Requirement: Shop by category

The system SHALL render a "Shop by Category" section with six category
cards.

#### Scenario: Category cards

- **GIVEN** the page is rendered
- **WHEN** the category section is displayed
- **THEN** the heading SHALL read "Shop by Category" with an "Explore our
  curated collections…" subtext
- **AND** six category cards SHALL be shown: Clothing (124), Accessories
  (86), Footwear (52), Bags (38), Jewelry (64), and Watches (28)
- **AND** each card SHALL show an image, category name, product count, and
  a "Shop Now" link

### Requirement: New arrivals

The system SHALL render a "Just Dropped" new-arrivals row with four product
cards and a "See All New" link.

#### Scenario: New arrivals content

- **GIVEN** the page is rendered
- **WHEN** the new arrivals section is displayed
- **THEN** the heading SHALL read "Just Dropped" with the subtext "New
  Arrivals — Fresh styles added to our collection"
- **AND** a "See All New" link SHALL be present
- **AND** four new-arrival product cards SHALL be shown with New badges

### Requirement: Season sale with countdown

The system SHALL render a brand-gradient "Season Sale" section with a live
countdown timer and four sale product cards.

#### Scenario: Sale content

- **GIVEN** the page is rendered
- **WHEN** the sale section is displayed
- **THEN** the section SHALL use the brand gradient background with labels
  "Limited Time Offer", heading "Season Sale", and subtext "Up to 50% off
  on selected items"
- **AND** a "Shop All Sale" CTA SHALL be present

#### Scenario: Countdown timer

- **GIVEN** the sale section is displayed
- **WHEN** the page loads
- **THEN** a countdown SHALL show Days, Hours, Minutes, and Seconds boxes
- **AND** the seconds SHALL tick down every second until the sale deadline
  is reached

#### Scenario: Sale product cards

- **GIVEN** the sale section is displayed
- **WHEN** a sale card is inspected
- **THEN** it SHALL show a discount badge (e.g. -25%) and a strikethrough
  old price next to the sale price

### Requirement: Testimonials

The system SHALL render a testimonials section with three customer quote
cards and a trust row.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the heading SHALL read "What Our Customers Say"
- **AND** three quote cards SHALL show a 5-star rating, a quote, a
  customer name with location, and a "Verified" badge
- **AND** a trust row SHALL show Trustpilot, SSL Secured, and Verified
  Reviews

### Requirement: Newsletter section

The system SHALL render a dark newsletter section with an email form, a
consent line, and a four-feature row.

#### Scenario: Newsletter form

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** the heading SHALL read "Get 20% Off Your First Order"
- **AND** an email input and a "Subscribe" button SHALL be present
- **AND** a consent line SHALL mention the Privacy Policy

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an invalid email address
- **THEN** an inline error SHALL be shown and no success message SHALL
  appear
- **WHEN** the user submits a valid email address
- **THEN** a success message SHALL replace the form

#### Scenario: Newsletter features

- **GIVEN** the newsletter section is displayed
- **WHEN** the user views the feature row
- **THEN** four features SHALL be shown: Exclusive Offers, New Arrivals
  First, Free Returns, and Style Tips

### Requirement: Footer

The system SHALL render a footer with a mini newsletter, brand blurb, three
link columns, and a bottom bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** a mini newsletter block SHALL read "Join Our Newsletter" with
  "Get 15% off your first order…" and a Subscribe control
- **AND** a brand blurb SHALL describe curated fashion collections
- **AND** link columns SHALL cover Shop, Help, and About
- **AND** the bottom bar SHALL show "© 2026 Moda. All rights reserved."
  with Privacy and Terms links and payment icons (VISA, AMEX)

### Requirement: Page extras (repo standard)

The system SHALL provide a skip-to-content link, a back-to-top button, a
cookie banner, and scroll-reveal animations, and SHALL compose all sections
in a single page with proper landmarks and a document title.

#### Scenario: Skip to content

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** a "Skip to content" link SHALL be the first focusable element

#### Scenario: Back to top

- **GIVEN** the page is scrolled down
- **WHEN** the user presses the back-to-top button
- **THEN** the page SHALL scroll to the top

#### Scenario: Cookie banner

- **GIVEN** the page is rendered without a stored consent choice
- **WHEN** the user presses "Accept All" or "Decline"
- **THEN** the banner SHALL dismiss and the choice SHALL persist for the
  session

#### Scenario: Full page render

- **GIVEN** the Moda app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Moda — Fashion & Lifestyle"
- **AND** sections SHALL render in the exact order: Announcement → Header →
  Hero → Trust bar → Featured Products → Shop by Category → New Arrivals →
  Season Sale → Testimonials → Newsletter → Footer

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-moda`
- [ ] TDD: tests written before components, one `describe` per component,
      scenario `it` blocks mirroring the spec scenarios
- [ ] `scripts/verify-app.sh moda` passes (typecheck + lint + 100% coverage
      tests + build)
- [ ] Fidelity: section order 1:1 with the reference above (announcement →
      header → hero → trust bar → featured products → categories → new
      arrivals → sale countdown → testimonials → newsletter → footer);
      brand tokens from this spec (fuchsia `#C026D3` primary, orange
      `#F97316` accent, gray scale, Outfit + Inter fonts, `rounded-lg`
      CTAs, `aspect-[3/4]` product images) in `@theme`
- [ ] Official `preview.colorlib.com/theme/shopper/` returns 404; reference
      used = the reachable official Cloudflare Pages demo
      `https://shopper-colorlib.pages.dev/` (same design; content matches
      the TEMPLATES.md screenshot above-the-fold) — PR description must
      state this per docs/replication.md
- [ ] Dark mode present (live demo has a toggle + `dark:` variants),
      persisted via `window.localStorage` with the in-memory Storage
      polyfill in `src/test/setup.ts` (jsdom 30)
- [ ] Countdown timer ticks down (client-side, fixed future deadline);
      newsletter forms validate email with inline error/success states
- [ ] Images are picsum placeholders (never copied assets); logo recreated
      as text (never the source logo); icons from lucide-react (ShoppingBag,
      Search, Moon/Sun, User, Heart, ShoppingCart, Star, Truck, Lock, etc.
      — VERIFY exports); payment chips (VISA/AMEX) as inline SVG/text, no
      new dependencies
- [ ] PR description states: source template (ColorLib "Shopper", slug
      `shopper`), preview URL, design tokens used, renames (Moda,
      placeholder images), and the pages.dev-reference note
- [ ] After merge: `[~]` → `[x]` + surge URL + homepage in TEMPLATES.md,
      `npm run readme:status`
