# Template: Velvet (Ecommerce)

## Purpose

Velvet is a single-page fashion ecommerce template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Essence" fashion ecommerce HTML template design (see
TEMPLATES.md, line 387 under **Bootstrap (216)** — duplicate row at line
1573 under **Ecommerce (56)**, same template, ONE app only; mark BOTH rows
`[x]` after merge), built under a different name ("Velvet" — a soft luxury
fabric, matching the source's "smart & elegant fashion e-commerce"
positioning) with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript (strict). No ColorLib references in app code — provenance lives
in this spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Essence" — free fashion ecommerce HTML template
  (source: https://colorlib.com/wp/template/essence/). Single page: a
  fixed header (text logo + mega-menu "Shop" nav with 3 collection columns
  - promo image + "Pages" dropdown + Blog + Contact; right side: search
    input, heart / user / cart icons with a blue count badge and an
    off-canvas cart drawer), a white hero (small uppercase brand line +
    big "New Collection" headline + blue "view collection" button + model
    photo on a subtle geometric pattern), a 3-tile category strip
    (CLOTHING / SHOES / ACCESSORIES on photos with a white wash), a
    full-width "Global Sale" CTA (photo bg, right-aligned "-60%" / "Global
    Sale" / "Buy Now"), a "Popular Products" section (4 product cards with
    hover image, favourite heart, offer/new badge, brand, name, price +
    struck old price, slide-up "Add to Cart"), a light brands strip (6
    logos on `#f5f7f9`), and a dark `#252525` footer (logo + Shop/Blog/
    Contact links, 6 support links, "Subscribe" underline-email form,
    social icons, copyright bar crediting **Component Dock** (replaces the
    source's Colorlib credit)).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/essence/`. DOM fetched
  (`/tmp/essence-preview.html`, 28,117 bytes, `<title>Essence - Fashion
Ecommerce Template</title>`) + stylesheets `css/core-style.css`
  (`/tmp/essence-core.css`, 56,707 bytes — the real token source;
  `style.css` is a 610-byte stub with just the template comment) +
  TEMPLATES.md screenshot (`essence-free-template.jpg`, AVIF 65,777
  bytes → viewed in browser at 1200×946).
- **Visual design (screenshot + live DOM):** minimalist clean fashion
  aesthetic on white — bold black "ESSENCE" text logo left; nav (Shop /
  Pages / Blog / Contact); right: a real search input ("Type for
  search") + heart / user / shopping-bag icons, the bag with a small
  BLUE count badge "3". Hero: mostly white with a subtle low-opacity
  geometric line/triangle pattern top-right, small uppercase brand line,
  large bold black "New Collection", a bright royal-blue rectangular
  "VIEW COLLECTION" button, and a model photo right (blonde woman,
  sunglasses, grey tee, jeans). Below: 3 square category tiles with
  photos (grey knitted sweater / light-blue suede boots / brown leather
  handbag) and bold black uppercase labels CLOTHING / SHOES /
  ACCESSORIES. The ONLY saturated accent in the whole design is royal
  blue `#0315ff` (buttons, badge, hovers) + pink `#dc0345` (hover
  state, sale badge, "-60%"). Sharp corners everywhere (border-radius 0)
  — no rounded buttons/cards. Copy is placeholder ("asoss" brand line,
  topshop/mango brands, 4 dress names, "$80.00" ×3, "$45.00" ×3 in the
  cart, cart subtotal $274.00 vs 3×$45 items — math doesn't add up) —
  paraphrase freely, FIX inconsistencies, keep the same kinds.
- **Carousel:** the product grid is an owl-carousel in the source
  (`.popular-products-slides`) — implement with React state or a static
  responsive grid (4 cards, wraps 2-up / 1-up below md; no sliding
  required for fidelity, but a simple state-indexed prev/next is
  acceptable). No other sliders on the page.
- **jQuery/Bootstrap plugins:** classy-nav (mega menu), Bootstrap grid,
  owl carousel, the right-side cart drawer + cart overlay — implement
  with React state: mega menu + dropdowns (hover/click), hamburger
  mobile nav, off-canvas cart drawer with overlay close.

## Design tokens (from `css/core-style.css` of the live preview)

- **Primary royal blue:** `#0315ff` — `.essence-btn` background, nav /
  category / product-name hover links, `.product-badge.new-badge`
  background, header icon count badge (`.favourite-area a span` etc.,
  Ubuntu 18px), footer link hovers.
- **Accent pink:** `#dc0345` — `.essence-btn:hover` background,
  `.product-badge.offer-badge` background, `.cta-area .cta-content h6`
  ("-60%", 24px), sale-price / hover accents.
- **Black ink:** `#000000` — hero h2 (60px, mb 50), CTA h2 (60px, mb
  50), `.product-badge` default background, product price `p` (Ubuntu
  700, 14px), category titles (30px weight 700).
- **Dark heading:** `#222222` — product name `h6` (mb 5).
- **Muted grey:** `#787878` — hero h6 (18px, mb 10), nav links (16px,
  hover `#000000`), product brand `span` (10px uppercase, weight 600,
  letter-spacing .75px, mb 15).
- **Faint grey:** `#aaaaaa` — struck-through old price `span` (line-
  through, mr 10); `#ccc` — favourite heart (`.favme`, 14px).
- **Light backgrounds:** `#f5f7f9` — `.brands-area` (padding 100px 5%);
  `#ebebeb` — header `border-left`/`border-bottom` dividers (search form
  border-left, header bottom border below 992px).
- **Footer dark:** `#252525` — `.footer_area` background, padding 70px 0
  60px.
- **Fonts:** Google **Poppins** (300/400/500/600/700) — body (14px,
  white bg, `margin-top: 85px` for the fixed header); **Ubuntu**
  (300/400/500/700) — headings, prices, badges, cart summary (13 rules).
  Source loads both via one `@import` in `core-style.css`; use Google
  Fonts `<link>`s in `index.html`.
- **Buttons (`.essence-btn`):** min-width 170px, height 50px,
  `line-height: 50px`, padding 0 40px, border-radius **0**, white 12px
  uppercase text, letter-spacing 1.5px, weight 600, bg `#0315ff`, hover
  bg `#dc0345` (white text stays). Full-width variant in product
  hover-content and cart checkout.
- **Header (`.header_area`, fixed, `body { margin-top: 85px }`):** logo
  left; `.classy-navbar` + `.header-meta` split 50/50; nav links 16px
  `#787878` hover `#000000`; meta icons 90px-wide blocks (50px mobile),
  icon max-width 20px, count badge span Ubuntu 18px `#0315ff`. Search
  form: 200px input, height 85px (40px mobile), white bg, no border,
  `border-left: 1px solid #ebebeb`, placeholder "Type for search".
- **Hero (`.welcome_area`, height 600px / 450px tablet / 350px mobile):**
  `bg-img` photo + light `background-overlay`; `.hero-content` (left):
  h6 "asoss" (18px `#787878`, mb 10) → h2 "New Collection" (60px `#000`,
  mb 50, 48px tablet / 30px mobile) → `.btn.essence-btn` "view
  collection" (lowercase in source markup, CSS uppercases it).
- **Category tiles (`.top_catagory_area.section-padding-80`):** 3 ×
  `.single_catagory_area` (height 240px / 180px tablet+mobile, mb 30
  below 576px), bg photo + `:after` white wash `rgba(255,255,255,0.6)`,
  centered `.catagory-content a`: 30px weight 700 uppercase black
  (20px / 18px responsive), hover → `#0315ff`. Tiles: Clothing / Shoes /
  Accessories.
- **CTA (`.cta-area .cta-content`, height 550px / 400px mobile, bg-img
  photo + overlay):** content right-aligned (`justify-content-end`),
  `.cta--text` padding-right 150px (50px tablet): h6 "-60%" (24px
  `#dc0345`, mb 10) → h2 "Global Sale" (60px `#000`, mb 50) → blue
  "Buy Now".
- **Popular Products (`.new_arrivals_area.section-padding-80`, white):**
  `.section-heading h2` "Popular Products" (30px, weight 600,
  capitalize, mb 50); `.popular-products-slides` (owl-carousel) of 4
  `.single-product-wrapper`: `.product-img` (main img + `.hover-img`
  swapped on hover) + `.product-favourite a.favme` heart (absolute, 25px
  tall, 45px wide, top 20px, `#ccc`) + `.product-badge` (height 25px,
  12px Ubuntu 700, padding 0 10px, black bg white text; `.offer-badge`
  → `#dc0345`, `.new-badge` → `#0315ff`); `.product-description` (pt
  25px): brand `span` (10px uppercase `#787878`) + `h6` name (link,
  `#222222`) + `p.product-price` (14px Ubuntu 700 `#000`; sale shows
  struck `#aaaaaa` old price + current price) + `.hover-content`
  (absolute, top -70px, left/right 20px, opacity 0 → visible on hover):
  full-width `.essence-btn` "Add to Cart". Products: topshop "Knot
  Front Mini Dress" $80.00; topshop "Poplin Displaced Wrap Dress"
  $80.00; mango "PETITE Crepe Wrap Mini Dress" $75.00 → $55.00
  (offer-badge -30%); mango "PETITE Belted Jumper Dress" $80.00
  (new-badge "New").
- **Brands (`.brands-area`, bg `#f5f7f9`, padding 100px 5% / 70px
  mobile, flex space-between, wraps 3-per-row mobile):** 6
  `.single-brands-logo` images (max-width 120px / 90px tablet / 80px
  mobile — grayscale logo images in source → replace with text
  wordmarks or inline SVG marks, never copied assets).
- **Footer (`.footer_area`, bg `#252525`, padding 70px 0 60px):**
  widget 1: `.footer-logo` + `.footer_menu` (flex row, 3 links: Shop /
  Blog / Contact, white); widget 2: `.footer_widget_menu` (6 links:
  Order Status / Payment Options / Shipping and Delivery / Guides /
  Privacy Policy / Terms of Use); `.footer_heading h6` "Subscribe" +
  `.subscribtion_form` (270px form): transparent input, no border,
  `border-bottom: 2px solid rgba(255,255,255,0.6)`, white text, 12px,
  height 35px, focus border → white; submit button 30×35px (icon, no
  border); `.footer_social_area` (white 16px icons, padding 0 10px);
  bottom `.row .col-md-12` copyright bar: "Copyright © <year> All
  rights reserved | This template is made with ♥ by **Component Dock**"
  → https://www.componentdock.com/ (replaces the source's Colorlib
  credit; NO ColorLib credit).
- **Off-canvas cart (`.right-side-cart-area` + `.cart-bg-overlay`):**
  opened by the bag icon; 3 `.single-cart-item`s (thumb + h6 title +
  "Size: S / Color: Red" meta + price) — items are all the same
  placeholder ("Mango / Button Through Strap Mini Dress / $45.00") —
  vary them; `.cart-amount-summary` (Summary h2 + 4-row table:
  subtotal $274.00 / delivery Free / discount -15% / total $232.00) +
  `.checkout-btn` full-width essence-btn "check out".
- **Placeholder images:** `https://picsum.photos/seed/velvet-<n>/<w>/<h>`.
  Slots: hero bg (wide, fashion/model subject), category 1–3 (fabric /
  clothing / shoes / bag subjects — subject-screen the seeds), CTA bg
  (wide), product 1–4 main + 1–4 hover (square-ish), cart thumb 1–3,
  brands 1–6 (small, grayscale-ish). Icons from `lucide-react` — NOTE:
  brand icons (Facebook/Instagram/Linkedin) are REMOVED from lucide —
  use inline SVG brand paths (simple-icons) or lucide alternatives
  (Heart, Search, User, ShoppingBag, Menu, X, ChevronDown, Mail,
  Send/ArrowRight, CreditCard, Package, Truck, RotateCcw, ShieldCheck).

## Requirements

### Requirement: Header — fixed bar with mega-menu nav and meta icons

The system SHALL render a fixed header (85px) with the brand wordmark on
the left; a nav (Shop with a mega menu of 3 collection columns, Pages
dropdown, Blog, Contact); and on the right a search input, a favourite
heart, a user icon, and a shopping-bag icon with a count badge that opens
an off-canvas cart drawer. On mobile the nav SHALL collapse behind a
hamburger toggle.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the header is inspected
- **THEN** it shows the brand, the nav entries (Shop first, then Pages,
  Blog, Contact), the search input with "Type for search" placeholder,
  and the heart / user / bag icons with the bag badge showing "3"

#### Scenario: Shop mega menu

- **GIVEN** the Shop nav entry is activated
- **WHEN** the mega menu opens
- **THEN** it shows the three collection columns (Women's, Men's, Kid's)
  each with their category links, plus a promo image

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** the nav links appear and can be closed again

#### Scenario: Cart drawer

- **GIVEN** the shopping-bag icon is activated
- **WHEN** the cart drawer opens
- **THEN** it shows the cart items, the summary rows (subtotal /
  delivery / discount / total), and a "check out" button, and closes via
  the overlay

### Requirement: Hero — New Collection

The system SHALL render a full-width hero (600px desktop, 350px mobile)
with a photo background under a light overlay, a small uppercase brand
line, a large "New Collection" headline, and a blue "view collection"
button.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** it is inspected
- **THEN** it shows the small brand line, the "New Collection" headline,
  and the blue "view collection" button

### Requirement: Category tiles

The system SHALL render three square category tiles (Clothing, Shoes,
Accessories), each with a photo background under a white wash and a bold
uppercase black label that turns blue on hover.

#### Scenario: Category tiles

- **GIVEN** the category strip is rendered
- **WHEN** it is inspected
- **THEN** it shows the three tiles labeled CLOTHING, SHOES, and
  ACCESSORIES in that order

#### Scenario: Category hover

- **GIVEN** the category strip is rendered
- **WHEN** a tile label is hovered
- **THEN** its color changes to the brand blue

### Requirement: Global Sale CTA

The system SHALL render a full-width CTA band with a photo background,
right-aligned content: a pink "-60%" eyebrow line, a large "Global Sale"
headline, and a blue "Buy Now" button.

#### Scenario: CTA content

- **GIVEN** the CTA band is rendered
- **WHEN** it is inspected
- **THEN** it shows "-60%", "Global Sale", and the blue "Buy Now"
  button, aligned to the right

### Requirement: Popular Products

The system SHALL render a "Popular Products" section with four product
cards; each card shows a photo (swapping to a hover image), a favourite
heart, an optional offer/new badge, the brand, the product name, the
price (with a struck-through old price on sale items), and an "Add to
Cart" button revealed on hover.

#### Scenario: Product cards

- **GIVEN** the Popular Products section is rendered
- **WHEN** the cards are inspected
- **THEN** four product cards are shown, each with brand, name, and
  price, and exactly one card has an offer badge and one a new badge

#### Scenario: Sale price display

- **GIVEN** the section is rendered
- **WHEN** the sale product card is inspected
- **THEN** it shows the struck-through old price next to the current
  price

#### Scenario: Add to Cart on hover

- **GIVEN** a product card is rendered
- **WHEN** the card is hovered
- **THEN** the "Add to Cart" button becomes visible over the image

### Requirement: Brands strip

The system SHALL render a light `#f5f7f9` strip with six brand
wordmarks/marks in a row (wrapping below md).

#### Scenario: Brands strip

- **GIVEN** the brands strip is rendered
- **WHEN** it is inspected
- **THEN** six distinct brand marks are shown on the light background

### Requirement: Footer

The system SHALL render a dark `#252525` footer with the logo and a
Shop / Blog / Contact menu, a six-link support widget, a "Subscribe"
underline-style email form with a submit button, social icons, and a
copyright bar crediting Component Dock (no ColorLib credit).

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the logo, the Shop / Blog / Contact links, the
  support links, the Subscribe form, the social icons, and the copyright
  bar linking to https://www.componentdock.com/

#### Scenario: Newsletter submit

- **GIVEN** the Subscribe form is rendered
- **WHEN** the user submits an email
- **THEN** the form confirms the subscription (success message replaces
  the input)

### Requirement: Composition

All sections SHALL appear in the source order on one page: header →
hero → category tiles → Global Sale CTA → Popular Products → brands
strip → footer.

#### Scenario: Section order

- **GIVEN** the full page is rendered
- **WHEN** the sections are enumerated top to bottom
- **THEN** the order is header, hero, categories, CTA, products, brands,
  footer

## Verification checklist

- [ ] Spec validated: `npm run spec:validate` passes for
      `template-velvet`
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #0315ff`,
      `--color-accent: #dc0345`, `--color-ink: #000000`,
      `--color-heading: #222222`, `--color-muted: #787878`,
      `--color-faint: #aaaaaa`, `--color-heart: #ccc`,
      `--color-soft: #f5f7f9`, `--color-line: #ebebeb`,
      `--color-footer: #252525`; Google Fonts `<link>`s in `index.html`:
      Poppins (300–700) + Ubuntu (300/400/500/700)
- [ ] Header: fixed 85px bar (body pt 85px); brand wordmark left; nav
      Shop (mega menu: Women's / Men's / Kid's collections + promo
      image) / Pages dropdown (Home, Shop, Product Details, Checkout,
      Blog, Single Blog, Regular Page, Contact) / Blog / Contact — 16px
      `#787878`, hover `#000`; right: search input (200px, white, no
      border, "Type for search") + heart / user / bag icons (90px
      blocks, badge Ubuntu 18px `#0315ff` "3"); mobile hamburger → nav
      toggle
- [ ] Cart drawer: off-canvas right panel + overlay close; 3 varied
      items (thumb + name + size/color + price), Summary (subtotal /
      delivery Free / discount -15% / total), full-width "check out"
      button
- [ ] Hero: 600px (350px mobile), photo bg + light overlay; h6 brand
      line (18px `#787878`), h2 "New Collection" (60px `#000`, 30px
      mobile), blue "view collection" essence-btn
- [ ] Categories: 3 tiles (240px / 180px), photo + white .6 wash,
      uppercase 30px bold black label, hover `#0315ff`; CLOTHING /
      SHOES / ACCESSORIES
- [ ] Global Sale CTA: 550px (400px mobile) photo bg, right-aligned,
      pink 24px "-60%", 60px "Global Sale", blue "Buy Now"
- [ ] Popular Products: 30px section heading (weight 600, mb 50); 4
      cards (2-up / 1-up below md): image + hover image, heart
      (`.favme`, `#ccc`), badge (offer `#dc0345` "-30%" / new
      `#0315ff` "New" / none), brand span (10px uppercase `#787878`),
      name h6 `#222222`, price 14px Ubuntu 700 `#000` (+ struck
      `#aaaaaa` old price), hover reveal of full-width "Add to Cart"
- [ ] Brands: `#f5f7f9` bg, 6 wordmarks (max-w 120px), 3-per-row
      mobile
- [ ] Footer: `#252525` bg, padding 70px 0 60px; logo + Shop/Blog/
      Contact; Order Status / Payment Options / Shipping and Delivery /
      Guides / Privacy Policy / Terms of Use; Subscribe heading +
      underline input (2px `rgba(255,255,255,0.6)` bottom border,
      focus white) + 30×35px submit; 5 social icons; copyright bar with
      Component Dock credit + no ColorLib credit
- [ ] Placeholder images via
      `https://picsum.photos/seed/velvet-<n>/<w>/<h>` (hero bg,
      category 1–3, CTA bg, product 1–4 main + hover, cart thumbs,
      brands 1–6) — subject-screen the fashion/clothing seeds; icons
      from `lucide-react` (brand socials as inline SVG — lucide removed
      brand icons)
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/essence/`), design tokens, diffs
      (name, placeholder images, React mega menu / cart drawer / mobile
      nav instead of classy-nav + Bootstrap, Component Dock footer
      credit); after merge mark BOTH TEMPLATES.md Essence rows `[x]`
      (lines 387 and 1573 — Bootstrap 216 / Ecommerce 56)
