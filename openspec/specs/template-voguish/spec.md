# Template: Voguish (E-Commerce / Fashion Store)

## Purpose

Voguish is a single-page fashion e-commerce storefront template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Persuit" fashion store template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Persuit" — fashion e-commerce store template,
  E-Commerce / Fashion category
  (source: https://colorlib.com/wp/template/persuit/).
- **Preview URL:** `https://preview.colorlib.com/theme/persuit/` — HTTP 200,
  full rendered DOM fetched with curl. Page title: "Persuit", Bootstrap-based
  layout with Revolution Slider, Owl Carousel, and Isotope filtering.
  Stylesheets: `css/font-awesome.min.css`, `css/bootstrap.min.css`,
  `css/style.css` (main, ~25 KB), `css/responsive.css`. Fonts are
  **"Montserrat"** (sans-serif, headings/bold) + **"Poppins"** (sans-serif,
  body 13px/26px) + **"Playfair Display"** (serif, accent) + **"Lato"**
  (sans-serif) via Google Fonts.
- **Screenshot:** `persuit-free-template.jpg` — fashion e-commerce store
  showing a clean white layout with a red accent color, hero slider with
  summer collection imagery, product carousels, category listings, blog cards,
  and a multi-column footer.
- **Visual design (from DOM + CSS tokens + screenshot):** Clean, bright
  e-commerce aesthetic. White/light-gray backgrounds with sharp red (`#d91522`)
  accent. Top header bar with language/currency selectors, search, phone/email
  contact info, social icons, user/cart icons. Below: Bootstrap navbar with
  logo, categories dropdown, and navigation links. Full-width hero slider with
  fashion imagery and "Best Summer Collection" CTA. Feature promo cards with
  hover overlays. Product carousels with compare/cart/wishlist actions. Category
  listing (Men, Women, Accessories) with images. Filtered featured products
  with sidebar. Blog cards. 5-column footer with about, info, service, extras,
  and account links. Square buttons (0px border-radius) throughout.
- **Structure (1:1, index page):**
  1. **Top Header Area** (`.header_top_area`, white bg, `padding-bottom: 50px`):
     - Left (`.top_header_left`): language selector dropdown, currency selector
       dropdown, search input with magnifier button.
     - Center (`.top_header_middle`): phone icon + "Call Us: +84 987 654 321",
       email icon + "Email: support@yourdomain.com", centered logo image.
     - Right (`.top_right_header`): social icon list (Facebook, Twitter,
       Pinterest, Instagram, YouTube), user icon, shopping bag icon, cart
       total dropdown.
  2. **Shop Header / Navbar** (`.shop_header_area`): Bootstrap navbar (light
     bg), logo left, collapse menu with: Categories dropdown, Home dropdown
     (6 variants: Simple, Carousel, Full Width, Parallax, Boxed, Fixed),
     Pages dropdown (Compare, Checkout, Register, Track, Login, 404), Shop
     dropdown (12 product/category pages), Blog link, Lookbook link, Contact
     link.
  3. **Hero Slider Area** (`.main_slider_area`): Revolution Slider with 2
     slides, each containing: full-width background photo, "2017" text image
     (Montserrat bold), "Best Summer Collection" heading (48px), "read more"
     CTA button (`.checkout_btn`, red bg `#d91522`, white text, `padding:
     0 40px`, `line-height: 48px`, 0px radius).
  4. **Feature Add Area** (`.feature_add_area`, `container`): 3-column grid
     layout —
     - Left (col-5): large promo card with hover overlay ("Best Summer
       Collection" + "Shop Now" arrow link), "Sale" badge (red bg, white text,
       `border-radius: 50%`).
     - Center (col-4): medium promo card with hover overlay, "10% off" badge.
     - Right (col-3): small promo card (image only, no overlay).
  5. **Our Latest Products** (`.our_latest_product`): Section title "Our Latest
     Product" + Owl Carousel with product pairs per slide. Each product card:
     image, compare icon (`.icon_piechart`), "Add To Cart" button, wishlist
     icon (`.icon_heart_alt`), product name, price (with strikethrough for
     discounted). Products: Womens Libero ($45.50→$40), Oxford Shirt ($85.50),
     Travel Bags ($45.50→$40), High Heel ($130.50→$110), Summer Dress ($45.05),
     Fossil Watch ($250), Nike Shoes ($130→$110), Ricky Shirt ($45.05).
  6. **Feature Big Add Area** (`.feature_big_add_area`): 2 equal-width promo
     cards with hover overlays — "Best Summer Collection" + "Shop Now" CTA,
     white text overlay on hover (`.white_add .f_add_hover .add_btn { color:
     #fff }`).
  7. **Product Listing / Categories** (`.product_listing_area`): 3-column
     layout, each with text links (category name + subcategory list) and a
     category image. Categories: Men, Women, Accessories. Subcategories:
     Down Jackets, Hoodies, Suits, Jeans, Casual Pants, Sunglass.
  8. **Featured Products** (`.feature_product_area`): 2-column layout —
     - Left (col-3): sidebar with "Featured Products" title + 4 media items
       (thumbnail + name + price: Oxford Shirt $45.05, Puffer Jacket $45.05,
       Leather Bag $45.05, Casual Shoes $45.05).
     - Right (col-9): filter tabs (men's, Woman, Shoes, Bags) + Owl Carousel
       of filtered products with badges (Sale/New/-10%) and prices.
  9. **From The Blog** (`.from_blog_area`): Section title "From The Blog"
     (centered with red underline) + 3 blog cards — each with image, category
     label ("fashion"), excerpt text, date (21.09.2017).
  10. **Footer** (`.footer_area`): 5-column layout with top border (`1px solid
      #cccccc`) —
      - Col 1: About widget (logo image + description + social icons:
        Facebook, Twitter, Pinterest, Instagram, YouTube)
      - Col 2: Information links (About us, Delivery info, Terms & Conditions,
        Help Center, Returns & Refunds)
      - Col 3: Customer Service links (My account, Order History, Wish List,
        Newsletter, Contact Us)
      - Col 4: Extras links (Brands, Gift Vouchers, Affiliates, Specials)
      - Col 5: My Account links (My account, Order History, Wish List,
        Newsletter)
      - Copyright bar: "© [year] All rights reserved" with Colorlib attribution
        (replaced with Component Dock link in recreation).

- **Design tokens extracted from `css/style.css`:**
  - Primary brand color **`#d91522`** (red — used for CTA buttons, hover
    states, section title underlines, active nav borders, badge backgrounds,
    filter active states). Appears in: `.checkout_btn`, `.add_btn:hover`,
    `.c_main_title h2:before`, `.nav-link.active`, `.sale` badge, pagination
    active.
  - Heading text **`#29263a`** (dark navy, slider headings), **`#0b1033`**
    (dark navy, section titles like `single_c_title`).
  - Body text: **`#000`** (headings, nav), **`#333`** / **`#333333`**
    (secondary), **`#666666`** (muted), **`#999999`** (subtle).
  - Backgrounds: **`#fff`** (white, default), **`#f0f0f0`** / **`#f3f3f3`**
    (light gray sections), **`#ebebeb`** (feature add bg).
  - Borders: **`#e5e5e5`** (input borders, dividers), **`#cccccc`**
    (footer borders, lighter dividers).
  - Fonts: **"Poppins"** (sans-serif, body 13px/26px, all UI text, nav,
    product cards) + **"Montserrat"** (sans-serif, bold headings, slider
    hero text) + **"Playfair Display"** (serif, accent headings) + **"Lato"**
    (sans-serif, fallback) via Google Fonts.
  - Buttons: `.checkout_btn` — `padding: 0 40px`, `line-height: 48px`,
    `background: #d91522`, white text, `border: none`, `border-radius: 0px`,
    transition 300ms. `.add_btn` — 16px Poppins bold, black text, red hover.
    `.add_cart_btn` — outlined style in product cards.
  - Badges: `.sale` — red `#d91522` bg, white text, `border-radius: 50%`
    (circular). `.off` / `.new` / `.discount` — similar circular badge
    treatment.
  - Section rhythm: top header `padding-bottom: 50px`; content max-width
    `1200px` (`.container`); sections `.p_100` (100px vertical padding) or
    `.p_80` (80px); footer `padding: 60px 0` (widgets) + `16.5px 0`
    (copyright).
  - All border-radius: **`0px`** (sharp square edges throughout — buttons,
    inputs, cards).

- **Recreation decisions:** product/category photos → seeded picsum
  placeholders (`picsum.photos/seed/voguish-<n>/<w>/<h>`); icons →
  lucide-react (brand social icons as inline SVG); fonts via Google Fonts
  `<link>` (Poppins + Montserrat primary); brand red `#d91522` in `@theme`;
  repo-standard Navbar chrome (site name + dark-mode toggle) + Footer; hero
  slider simplified to CSS-based carousel (no Revolution Slider dependency);
  product carousel simplified to CSS/JS carousel; no assets copied.

Voguish lives in `apps/voguish` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Top header bar

The system SHALL render a top header bar with contact info, search, social
links, and user/cart actions.

#### Scenario: Header content

- **GIVEN** the Voguish page is rendered
- **WHEN** the page loads
- **THEN** the top header SHALL show phone number ("+84 987 654 321") and
  email ("support@yourdomain.com") with icons
- **AND** the site logo SHALL be centered in the header
- **AND** social media icon links (Facebook, Twitter, Pinterest, Instagram)
  SHALL be visible on the right
- **AND** a search input SHALL be visible on the left

### Requirement: Navigation bar

The system SHALL render a navigation bar below the header with categorized
dropdown menus.

#### Scenario: Navigation links

- **GIVEN** the navbar is displayed
- **WHEN** the page loads
- **THEN** the navbar SHALL show links: Home, Pages, Shop, Blog, Lookbook,
  Contact
- **AND** the site logo SHALL be displayed on the left of the navbar
- **AND** a "Categories" dropdown selector SHALL be present

### Requirement: Hero slider

The system SHALL render a full-width hero slider with fashion imagery and a
CTA button.

#### Scenario: Slider content

- **GIVEN** the hero slider is displayed
- **WHEN** the page loads
- **THEN** it SHALL show a large background image
- **AND** the heading "Best Summer Collection" SHALL be visible
- **AND** a "read more" CTA button (red `#d91522` background) SHALL be
  displayed

#### Scenario: Slider interaction

- **GIVEN** the hero slider has multiple slides
- **WHEN** the user activates navigation (dots or auto-advance)
- **THEN** the visible slide SHALL transition to the next slide

### Requirement: Feature promo cards

The system SHALL render a set of feature promo cards with hover overlays.

#### Scenario: Promo card layout

- **GIVEN** the feature add area is displayed
- **WHEN** the page loads
- **THEN** it SHALL show a 3-column layout with promo images
- **AND** the first card SHALL show a "Sale" badge (red, circular)
- **AND** the second card SHALL show a "10% off" badge
- **AND** hovering a card SHALL reveal overlay text "Best Summer Collection"
  with a "Shop Now" link

### Requirement: Latest products carousel

The system SHALL render a product carousel with product cards showing images,
names, prices, and action icons.

#### Scenario: Product cards

- **GIVEN** the latest products section is displayed
- **WHEN** the page loads
- **THEN** the section title "Our Latest Product" SHALL be visible
- **AND** at least 6 product cards SHALL be rendered in a carousel
- **AND** each product card SHALL show a product image, name, and price
- **AND** each product card SHALL have compare, add-to-cart, and wishlist
  action buttons

#### Scenario: Discounted prices

- **GIVEN** a product card with a discounted price is displayed
- **WHEN** the price is shown
- **THEN** the original price SHALL be shown with a strikethrough
- **AND** the discounted price SHALL be shown beside it

### Requirement: Big feature promo cards

The system SHALL render two large side-by-side promo cards with hover
overlays.

#### Scenario: Promo layout

- **GIVEN** the big feature add area is displayed
- **WHEN** the page loads
- **THEN** two equal-width promo cards SHALL be shown in a 2-column layout
- **AND** hovering either card SHALL reveal white text overlay with
  "Best Summer Collection" heading and "Shop Now" CTA

### Requirement: Category listing

The system SHALL render a product category listing with three categories.

#### Scenario: Category display

- **GIVEN** the product listing area is displayed
- **WHEN** the page loads
- **THEN** three category columns SHALL be shown (Men, Women, Accessories)
- **AND** each category SHALL display a list of subcategory links (Down
  Jackets, Hoodies, Suits, Jeans, Casual Pants, Sunglass)
- **AND** each category SHALL show a category image alongside the links

### Requirement: Featured products with filter

The system SHALL render featured products with a sidebar list and a filterable
carousel.

#### Scenario: Featured sidebar

- **GIVEN** the featured products area is displayed
- **WHEN** the page loads
- **THEN** a left sidebar SHALL show the title "Featured Products" and 4
  product items (thumbnail + name + price)

#### Scenario: Filterable products

- **GIVEN** the featured products area is displayed
- **WHEN** the page loads
- **THEN** a right panel SHALL show filter tabs (men's, Woman, Shoes, Bags)
- **AND** a product carousel SHALL be displayed with products showing badges
  (Sale, New, -10%)

### Requirement: Blog section

The system SHALL render a "From The Blog" section with blog post cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** the page loads
- **THEN** the section title "From The Blog" SHALL be visible (centered,
  with a red underline accent)
- **AND** 3 blog cards SHALL be displayed in a row
- **AND** each blog card SHALL show an image, category label ("fashion"),
  excerpt text, and date

### Requirement: Footer

The system SHALL render a multi-column footer with links and social icons.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** the footer SHALL show 5 columns: About (logo + description +
  social icons), Information, Customer Service, Extras, My Account
- **AND** each link column SHALL show at least 4 navigation links
- **AND** a copyright bar SHALL be shown at the bottom with "Component Dock"
  attribution

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Voguish app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Top Header in the banner landmark,
  all sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Voguish — Fashion Store"

## Verification checklist

- [ ] `apps/voguish` exists with package name `@free-react-templates/voguish`
- [ ] `vite.config.ts` registers `injectUiSource()` (see docs/conventions.md)
- [ ] Fonts Poppins + Montserrat loaded via Google Fonts `<link>` in index.html
- [ ] Brand red `#d91522` defined in `@theme`
- [ ] Section order matches the reference 1:1 (top header → navbar → hero
  slider → feature promo cards (3-col with badges) → latest products carousel
  → big promo cards (2-col) → category listing (3-col) → featured products
  with filter tabs → blog section → footer (5-col))
- [ ] All buttons use 0px border-radius (sharp square edges)
- [ ] Per-app gate passes: `scripts/verify-app.sh voguish` (typecheck + lint
  + 100% coverage tests + build)
- [ ] Full gate passes on merge (CI `npm run gate`), nightly sweep green
- [ ] TEMPLATES.md: mark Persuit item `[~]` → `[x]` + Surge URL + homepage
  after merge
- [ ] `npm run readme:status` regenerates README Templates status table
  after merge
- [ ] PR description states: source template (ColorLib Persuit), preview URL,
  design tokens, what differs (rename, picsum placeholders)
