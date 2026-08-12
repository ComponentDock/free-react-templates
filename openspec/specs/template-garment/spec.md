# Template: Garment (Fashion Ecommerce Template)

## Purpose

Garment is a single-page fashion-ecommerce landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Essence" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Essence" — fashion ecommerce store template
  (source: https://colorlib.com/wp/template/essence/). NOTE: TEMPLATES.md
  lists "Essence" twice (dup rows, lines ~387 and ~1573); this spec covers
  both rows.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/essence/
  (HTTP 200, full rendered DOM + `css/core-style.css` + `style.css`
  extracted). The TEMPLATES.md screenshot (`essence-free-template.jpg`,
  1200×946, reviewed visually in the browser) confirms: clean minimalist
  boutique aesthetic — white background, black typography, royal-blue CTA
  buttons, hero split text/photo, 3 category tiles, red sale accents.
- **Section order (1:1):** Header (logo + nav Shop/Pages/Blog/Contact +
  search field + wishlist/account/cart icons with count badges + slide-out
  cart drawer) → Hero (600px, bg photo right, left text: style-code label,
  "New Collection", blue VIEW COLLECTION button) → Top categories (3 tiles:
  Clothing, Shoes, Accessories — photo, black uppercase label, white hover
  overlay) → CTA banner (bg photo, right-aligned: red "-60%", "Global Sale",
  Buy Now button) → Popular products (heading + 4 product cards: photo,
  badge, favourite heart, name, price, Add to Cart on hover) → Brands strip
  (light gray bg, brand logos) → Footer (dark; logo + Shop/Blog/Contact,
  Order Status/Payment Options/Shipping and Delivery/Guides/Privacy
  Policy/Terms of Use, Subscribe form, social icons, copyright).
- **Design tokens extracted from `css/core-style.css` (+ `style.css`):**
  - Primary **blue `#0315ff`** — `.essence-btn` background, "new" product
    badges, header count numbers (Ubuntu 18px bold).
  - Accent **red `#dc0345`** — button hover, "offer" product badges, sale
    price, CTA `-60%` label.
  - Black `#000000` — headings/hero h2, category labels, default product
    badge background; footer background **`#252525`**.
  - Gray text **`#787878`** — hero h6 label, search input, strike-through
    prices; light grays `#f5f7f9` (brands area bg, cart-button bg), `#ebebeb`
    (1px icon-column borders), `#f6f6f6`.
  - Fonts: body **"Poppins"**, sans-serif; headings h2/h3/h5/h6 and badge/
    price/count text **"Ubuntu"**, sans-serif (both Google Fonts).
  - `.essence-btn`: min-width 170px, height 50px, white text, `border-radius:
0` (square), uppercase, 12px, letter-spacing 1.5px, padding 0 40px, bg
    `#0315ff`, hover `#dc0345`.
  - Hero: height 600px (450/350 responsive), `bg-img background-overlay`;
    h6 18px `#787878`; h2 60px black (48/30 responsive).
  - Category tiles: 240px tall (180px responsive), image bg, hover overlay
    `rgba(255,255,255,0.6)`, label 30px bold uppercase black.
  - Product badges: 25px tall, Ubuntu 700 12px, padding 0 10px, top 20px
    left 20px; `.offer-badge` `#dc0345`, `.new-badge` `#0315ff`, default
    `#000000`. Product price: Ubuntu 24px bold `#dc0345`; sale strike-through
    `#787878`.
  - Brands area: bg `#f5f7f9`, padding 100px 5% (70px bottom when wrapped).
  - Footer: bg `#252525`, padding 70px 0 60px; menu links 16px
    `rgba(255,255,255,0.6)` hover `#ffffff`; social icons white.
  - Header meta: 90px-wide icon columns, 1px `#ebebeb` left border; search
    input 200×85px white (170×40 responsive), `#787878` text.
- **Recreation decisions:** photos → verified picsum photo refs
  (subject-screened per the seed-screening method — arbitrary `garment-<n>`
  seeds render random scenes, so the subject-critical slots use photos
  verified to be fashion/lifestyle-appropriate: hero
  `picsum.photos/id/64/1600/600` (woman in white top), CTA banner
  `picsum.photos/id/65/1600/700` (golden-field lifestyle), categories
  `id/338`, `id/1005`, `id/838` at 600x480, products `id/64|65|338|838` at
  400x500, cart thumbs `id/64/100/120`); icons → lucide-react (brand/
  social icons as inline SVG per repo rule — lucide-react has no brand
  icons); Poppins + Ubuntu via Google Fonts `<link>`; no assets copied.
  Copy text paraphrased but same content kinds (product names, prices,
  category names, footer link sets). Cart drawer is a static demo (counts
  and totals hard-coded, matching the original's demo state).

Garment lives in `apps/garment` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top header with the site name, a nav menu with
dropdowns, a search field, icon actions (wishlist, account, cart) with count
badges, and a dark-mode toggle button.

#### Scenario: Header content

- **GIVEN** the Garment page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Garment" on the left
- **AND** the header SHALL show nav links Shop, Pages, Blog, and Contact,
  with Shop and Pages exposing dropdown menus (e.g. Shop: Dresses, Blouses
  & Shirts, T-shirts, Rompers; Pages: Home, Product Details, Checkout,
  Regular Page)
- **AND** the header SHALL show a search input ("Type for search") and
  icon buttons for wishlist (heart), account (user), and cart (bag) with a
  count badge of 3
- **AND** the header SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Cart drawer

The system SHALL render a slide-out cart drawer from the header cart icon,
listing demo items with a totals summary.

#### Scenario: Cart drawer content

- **GIVEN** the Garment page is rendered
- **WHEN** the user activates the cart icon
- **THEN** a right-side cart drawer SHALL open with 3 demo line items, each
  showing a thumbnail, product name, size, color, and price (e.g. "Knot
  Front Mini Dress", Size S, Color Red, $45.00)
- **AND** the drawer SHALL show a summary with subtotal ($274.00), delivery
  (Free), discount (-15%), and total ($232.00)
- **AND** the drawer SHALL show a "check out" button

### Requirement: Hero section

The system SHALL render a full-width hero with a background photo, a left
text block, and a primary CTA button.

#### Scenario: Hero content

- **GIVEN** the Garment page is rendered
- **WHEN** the hero section loads
- **THEN** the hero SHALL show a background photo placeholder (seeded
  picsum) with a left-aligned text block
- **AND** the text block SHALL show a small gray label (e.g. "85055"), the
  headline "New Collection" in black, and a blue uppercase "View Collection"
  button

### Requirement: Category tiles

The system SHALL render three category tiles (Clothing, Shoes, Accessories)
with photo backgrounds and uppercase labels.

#### Scenario: Category tiles content

- **GIVEN** the Garment page is rendered
- **WHEN** the categories section is displayed
- **THEN** the section SHALL show 3 equal tiles with photo placeholders
- **AND** each tile SHALL show an uppercase black label (CLOTHING, SHOES,
  ACCESSORIES)
- **AND** each tile SHALL be a link to the corresponding shop category

### Requirement: CTA banner

The system SHALL render a promotional banner with a background photo and a
right-aligned call to action.

#### Scenario: CTA banner content

- **GIVEN** the Garment page is rendered
- **WHEN** the CTA banner is displayed
- **THEN** the banner SHALL show a background photo placeholder
- **AND** the banner SHALL show a red "-60%" label, a black "Global Sale"
  heading, and a blue "Buy Now" button on the right side

### Requirement: Popular products

The system SHALL render a "Popular Products" section with a grid of product
cards.

#### Scenario: Product cards

- **GIVEN** the Garment page is rendered
- **WHEN** the products section is displayed
- **THEN** the section SHALL have the heading "Popular Products"
- **AND** the section SHALL show 4 product cards, each with a photo
  placeholder, a favourite heart icon, the product name, and a price
- **AND** sale items SHALL show the old price struck through (e.g. $75.00)
  next to the red sale price (e.g. $55.00)
- **AND** badges SHALL render: red "offer" badge on sale items (e.g. -30%),
  blue "New" badge on new items, and no badge otherwise
- **AND** an "Add to Cart" button SHALL be available on each card (hover
  reveal on desktop)

### Requirement: Brands strip

The system SHALL render a light-gray strip of brand logos.

#### Scenario: Brands strip content

- **GIVEN** the Garment page is rendered
- **WHEN** the brands section is displayed
- **THEN** the section SHALL have a light gray background (`#f5f7f9`)
- **AND** the section SHALL show a row of at least 4 brand-name placeholders
  (e.g. Mango, Topshop)

### Requirement: Footer

The system SHALL render a dark footer with link columns, a subscribe form,
social icons, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the Garment page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a dark background (`#252525`)
- **AND** the footer SHALL show the site name plus links Shop, Blog, and
  Contact, and a second column with Order Status, Payment Options, Shipping
  and Delivery, Guides, Privacy Policy, and Terms of Use
- **AND** the footer SHALL show a "Subscribe" heading with an email input
  and a submit button
- **AND** the footer SHALL show 5 social icons (Facebook, Instagram,
  Twitter, Pinterest, YouTube)
- **AND** the footer SHALL show a copyright line

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `apps/garment` created from the section-rich landing app pattern
      (Aurora), package renamed to `@free-react-templates/garment`
- [ ] TDD: tests written first (red), then implementation (green)
- [ ] 100% coverage lines/functions/branches/statements (`npm run
  test:coverage -- --project apps/garment` or `scripts/verify-app.sh
  garment`)
- [ ] Brand blue `#0315ff` + accent red `#dc0345` in `@theme`; Poppins
      (body) + Ubuntu (headings) via Google Fonts link
- [ ] Square buttons (`border-radius: 0`, min-width 170px, uppercase,
      letter-spacing 1.5px) matching `.essence-btn`
- [ ] Section order matches the original 1:1 (see Design reference)
- [ ] Placeholder images via verified picsum photo refs (see Recreation
      decisions — subject-screened fashion/lifestyle photos, no assets
      copied); brand icons as inline SVG
- [ ] PR description: source template, preview URL, design tokens, what
      differs
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` for BOTH Essence rows + Surge
      URL (`free-react-templates-garment.surge.sh`) + homepage + `npm run
  readme:status`
