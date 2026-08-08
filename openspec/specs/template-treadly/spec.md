# Template: Treadly (E-commerce — Footwear / Sneaker Store)

## Purpose

Treadly is a single-page footwear / sneaker store landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Solestyle" website template design
(source: https://colorlib.com/wp/template/solestyle/), built under a
DIFFERENT name (Treadly — a playful nod to shoe treads) per the monorepo
naming mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-09): a stale prep existed at
> `openspec/specs/template-solestyle/` (plus `docs/templates/solestyle/`)
> using the FORBIDDEN ColorLib source name (folder == source slug); both
> were deleted and replaced by this fresh prep (new name Treadly), matching
> the Shieldguard→Coverly / Serenity→Hush / Saasify→Zenith precedent. The
> stale prep's research was re-verified against the live demo (fresh DOM +
> CSS fetch) and is recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Solestyle" — footwear / sneaker e-commerce
  landing template (source: https://colorlib.com/wp/template/solestyle/,
  "Astro" category). The demo's internal store brand is "Stride"
  (logo, promo code STRIDE20, "Join the Stride Club") — the recreation
  brands itself **Treadly** instead, but keeps the same section structure
  and copy kinds.
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/solestyle/`) returns 404; the
  ColorLib preview portal loads demos from `<slug>-colorlib.pages.dev`
  (confirmed via `preview.colorlib.com/assets/js/products.js`). Live demo
  fetched at `https://solestyle-colorlib.pages.dev/` (HTTP 200, ~93 KB
  HTML + `/_astro/Base.B5hAE-Ox.css` ~54 KB parsed for tokens). The
  TEMPLATES.md screenshot (`solestyle-template-1770211411401.jpg`, HTTP 200) matches the live demo (dark hero with an orange sneaker on a
  gradient pedestal, orange accents, product grid below).
- **Section order (1:1, from live demo DOM):**
  1. Top promo bar (dark): "Free shipping on orders over $75" + "Use
     code STRIDE20 for 20% off your first order".
  2. Navbar (sticky, white/95 blur, border-b): "Stride" logo (icon +
     wordmark), links Shop, Categories, New Arrivals, Sale, About;
     cart count badge + Wishlist + "My Account" icons; mobile hamburger.
  3. Hero (`bg-gray-950`): H1 "Step Into Your Best" (two lines), blurb,
     trust row (star rating 4.9, 300+ styles, free shipping, easy
     returns), buttons "Shop Now" (primary orange pill) + "Browse
     Categories" (outlined), hero sneaker image (orange running shoe on
     a light gradient disc).
  4. Shop by Category: heading + 6 category cards with image + name +
     item count + "Shop Now" link — Running 48, Sneakers 86, Basketball
     32, Casual 64, Boots 28, Sandals 24.
  5. Featured Collection: heading + 7 product cards (image, name, price,
     star rating, "Add to Cart" button): Velocity Runner Pro, Streetwise
     Classic, Court Dominator X, Trail Blazer GTX, Marathon Elite, Cloud
     9 Recovery, Court Legacy Low + "View All Featured" link.
  6. Service bar: 4 items (icon + title + blurb) — Free Shipping,
     60-Day Returns, Size Guarantee, Secure Checkout.
  7. New Arrivals: heading + 4 product cards (Court Dominator X, Summer
     Slide Sport, Marathon Elite, Cloud 9 Recovery) + "Shop New
     Arrivals" link.
  8. Testimonials (`bg-gray-950`): "What Our Customers Say" — 3 quote
     cards (avatar, stars, quote, name + role: Marathon Runner, Fitness
     Instructor, Sneaker Enthusiast) + stats row (500K+ pairs shipped,
     4.9/5 rating, 120+ brands, 98% recommend).
  9. App CTA (`bg-primary-600`): "Ready to Step Up Your Game?" +
     "Get 15% off your first order" + App Store / Google Play buttons
     (mobile mockup image).
  10. Newsletter: "Join the Stride Club" (→ "Join the Treadly Club") —
      "Get 15% off your first order" + email input + "Subscribe"
      button.
  11. Footer (`bg-gray-950`): brand + blurb + social icons, columns
      SHOP (New Arrivals, Sale, Categories, Gift Cards) / HELP (FAQ,
      Shipping & Returns, Size Guide, Contact Us, Track Order) / ABOUT
      (Our Story, Sustainability, Athletes, Careers, Store Locator),
      copyright + Privacy Policy / Terms of Service links.
  - Extras: skip-to-content link, mobile hamburger menu
    (`aria-expanded`), dark-mode toggle, scroll-reveal animations.
- **Design tokens extracted from `Base.B5hAE-Ox.css` + DOM (verified
  2026-08-09):**
  - Brand color: **orange scale** — primary 500 `#f97316` (most
    frequent accent), 600 `#ea580c` (primary buttons / app CTA band),
    700 `#c2410c`, 800 `#9a3412`, 900 `#7c2d12`, 950 `#431407`; light
    400 `#fb923c`, 300 `#fed7aa`, 200 `#ffedd5`, 100 `#fff7ed`.
  - Neutrals: gray-950 `#030712` (hero, testimonials, footer), gray-100
    `#f3f4f6` (light section alternates), `#111827` (dark text / cards).
  - Fonts: **"Outfit"** (display, `--font-display`, weights 400–800) +
    **"Inter"** (body, `--font-sans`, weights 400–700) via Google Fonts.
  - Shapes: pill buttons (`border-radius: 3.4e38px` ≈ rounded-full),
    cards `rounded-xl`/`rounded-2xl`/`rounded-3xl` (0.75/1/1.5rem), sale
    badges, `--radius-lg` for smaller controls.
  - Section padding rhythm: `py-20 lg:py-28` (`py-24` on some sections).
  - Dark mode: class-based `.dark` on the document root (hero and dark
    sections are `bg-gray-950` in light mode already), toggle persists
    to localStorage.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/treadly-<n>/<w>/<h>`); icons → lucide-react
  (ShoppingCart, Heart, Truck, RotateCcw, Ruler, ShieldCheck, Star,
  Smartphone, Apple, Mail, Menu, ChevronRight); Outfit + Inter via
  Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome;
  brand text renames "Stride"→"Treadly" everywhere (logo, promo code →
  TREATLY20-style paraphrase, "Join the Treadly Club").

Treadly lives in `apps/treadly` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Promo bar

The system SHALL render a slim announcement bar above the navbar with a
free-shipping offer and a discount code.

#### Scenario: Promo bar content

- **GIVEN** the Treadly page is rendered
- **WHEN** the page loads
- **THEN** the promo bar SHALL show "Free shipping on orders over $75"
- **AND** it SHALL show a discount-code hint ("Use code ... for 20% off
  your first order")

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name
"Treadly", anchor/route links, a cart count, account icons, and a mobile
menu.

#### Scenario: Navbar content

- **GIVEN** the Treadly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Treadly" and links to
  Shop, Categories, New Arrivals, Sale, and About
- **AND** the navbar SHALL show a cart icon with a count badge, a
  Wishlist icon, and a "My Account" link

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** the mobile navigation menu SHALL expand and the button SHALL
  reflect the expanded state via `aria-expanded`

### Requirement: Hero section

The system SHALL render a dark hero with a headline, blurb, trust row,
two CTAs, and a featured sneaker image.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Step Into Your Best"
- **AND** it SHALL show a short blurb about premium footwear
- **AND** it SHALL show trust badges including a star rating, "300+
  styles", free shipping, and easy returns
- **AND** it SHALL show buttons "Shop Now" and "Browse Categories"
- **AND** it SHALL show a featured sneaker image

### Requirement: Shop by Category section

The system SHALL render a category grid with six category cards, each
with an image, name, item count, and link.

#### Scenario: Category cards

- **GIVEN** the page is rendered
- **WHEN** the Shop by Category section is displayed
- **THEN** it SHALL contain a heading "Shop by Category"
- **AND** it SHALL show cards for Running, Sneakers, Basketball, Casual,
  Boots, and Sandals
- **AND** each card SHALL show an image, a name, an item count, and a
  "Shop Now" link

### Requirement: Featured Collection section

The system SHALL render a featured products grid with at least six
product cards.

#### Scenario: Featured products

- **GIVEN** the page is rendered
- **WHEN** the Featured Collection section is displayed
- **THEN** it SHALL contain a heading "Featured Collection"
- **AND** it SHALL show product cards including Velocity Runner Pro,
  Streetwise Classic, Court Dominator X, Trail Blazer GTX, Marathon
  Elite, Cloud 9 Recovery, and Court Legacy Low
- **AND** each card SHALL show an image, a product name, a price, a star
  rating, and an "Add to Cart" button

### Requirement: Service bar

The system SHALL render a four-item service bar with icon, title, and
blurb for each item.

#### Scenario: Service items

- **GIVEN** the page is rendered
- **WHEN** the service bar is displayed
- **THEN** it SHALL show Free Shipping, 60-Day Returns, Size Guarantee,
  and Secure Checkout
- **AND** each item SHALL show an icon, a title, and a short blurb

### Requirement: New Arrivals section

The system SHALL render a New Arrivals product grid with four product
cards and a link.

#### Scenario: New arrivals products

- **GIVEN** the page is rendered
- **WHEN** the New Arrivals section is displayed
- **THEN** it SHALL contain a heading "New Arrivals"
- **AND** it SHALL show cards for Court Dominator X, Summer Slide Sport,
  Marathon Elite, and Cloud 9 Recovery
- **AND** it SHALL show a "Shop New Arrivals" link

### Requirement: Testimonials section

The system SHALL render a dark testimonials section with three quote
cards and a stats row.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Customers Say"
- **AND** it SHALL show three quote cards, each with an avatar, a star
  rating, a quote, and a name + role

#### Scenario: Stats row

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a stats row (e.g. pairs shipped, average
  rating, brands, recommend rate)

### Requirement: App CTA section

The system SHALL render an orange CTA band promoting the mobile app.

#### Scenario: App CTA content

- **GIVEN** the page is rendered
- **WHEN** the app CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Step Up Your Game?"
- **AND** it SHALL show a discount offer ("Get 15% off your first
  order")
- **AND** it SHALL show App Store and Google Play buttons and a phone
  mockup image

### Requirement: Newsletter section

The system SHALL render a newsletter signup with an offer, an email
input, and a subscribe button.

#### Scenario: Newsletter form

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL contain a heading "Join the Treadly Club"
- **AND** it SHALL show a discount offer and an email input with a
  "Subscribe" button

### Requirement: Footer

The system SHALL render a dark footer with brand blurb, link columns,
social icons, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "Treadly" brand, a blurb, and social icons
- **AND** it SHALL show Shop, Help, and About link columns
- **AND** it SHALL show a copyright line with Privacy Policy and Terms
  of Service links

### Requirement: Page chrome and accessibility

The system SHALL render standard page chrome: document title, landmarks,
and a dark-mode toggle.

#### Scenario: Document and landmarks

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** the Header SHALL be in the `banner` landmark, the main
  content in the `main` landmark, and the Footer in the `contentinfo`
  landmark
- **AND** the document title SHALL be "Treadly — Sneaker Store"

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root
  element
- **AND** the toggle SHALL reflect the current mode

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh treadly` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the demo 1:1 (promo bar, navbar, hero, shop
      by category, featured collection, service bar, new arrivals,
      testimonials, app CTA, newsletter, footer)
- [ ] Design tokens in `@theme`: brand orange `#ea580c` / `#f97316`
      (+ scale #fb923c, #fed7aa, #ffedd5, #fff7ed, #c2410c, #9a3412,
      #7c2d12, #431407), gray neutrals incl. #030712, #111827, #f3f4f6
- [ ] Fonts: Outfit (display) + Inter (body) via Google Fonts
- [ ] Buttons: pill (rounded-full) primary orange with white text;
      outlined secondary; cards rounded-xl/2xl/3xl; section padding
      py-20 lg:py-28
- [ ] Hero, testimonials, and footer on gray-950 (#030712); app CTA band
      on primary-600 (#ea580c)
- [ ] Dark mode: class-based `.dark`, toggle in navbar, persisted to
      localStorage
- [ ] Interactive behaviors: mobile menu (aria-expanded) — no extra
      dependencies
- [ ] Placeholder images seeded (`picsum.photos/seed/treadly-<n>/<w>/<h>`);
      no copied assets; brand renamed "Stride"→"Treadly" everywhere
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
