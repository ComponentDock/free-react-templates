# Template: Mannequin (Fashion eCommerce Template)

## Purpose

Mannequin is a single-page fashion e-commerce store template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Coza Store" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Coza Store" — fashion e-commerce store site,
  "Coza Store | E-commerce Shop Template" (Bootstrap 5 + jQuery + Swiper
  - ShuffleJS, source: https://colorlib.com/wp/template/coza-store/).
    Appears THREE times in TEMPLATES.md (duplicate rows, all unchecked) —
    one implementation marks all three rows `[x]` with the same live URL.
    NOTE: the WP page slug is `coza-store` but the live preview theme slug
    is `cozastore` (no hyphen — confirmed via
    `preview.colorlib.com/assets/js/products.js`:
    `["cozastore","Coza Store","eCommerce",...]`).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/cozastore/
  (HTTP 200, ~57 KB HTML fetched; `css/main.css` ~67 KB + `css/util.css`
  ~173 KB parsed in full; plain `/theme/coza-store/` 404s).
- **Screenshot analyzed:** `cozastore-free-template.jpg` (1200x946, AVIF
  converted to PNG, viewed in browser) — black top utility bar with white
  "Free shipping for standard order over $100" text; white header with
  COZA STORE logo left, centered nav (Home, Shop with a NEW badge,
  Features, Blog, About, Contact) and search/user/cart icons right; hero
  photo of a male model in an all-black outfit crouching against an
  off-white textured wall, left-aligned text: small-caps label
  "Men Collection 2018" + serif headline "NEW ARRIVALS" (Playfair
  Display) + periwinkle `#717fe0` "SHOP NOW" pill button; below the fold
  a 3-card category row (Women "Spring 2019" — woman in black dress;
  Men "Spring 2018" — man in blazer; Accessories "New Trend" — black
  baseball cap). Overall: minimalist high-end fashion aesthetic — white
  space, editorial serif headlines, periwinkle accent.
- **Section order (1:1, from the DOM of the home page):**
  1. Topbar (`div.top-bar`, height 40px, bg `#222`): left
     "Free shipping for standard order over $100"; right links
     Help & FAQs, My Account, EN, USD.
  2. Sticky header (`div.wrap-menu-desktop`, position fixed top 40px,
     height 84px, transparent bg → solid on scroll): logo image left
     (text wordmark in recreation), centered `nav.limiter-menu-desktop`
     menu: Home (dropdown: Homepage 1, Homepage 2, Homepage 3), Shop,
     Features (small "hot" label badge), Blog, About, Contact; right
     `div.wrap-icon-header` icons (26px, cl2 `#333`, hover brand
     `#717fe0`): search (magnifying-glass), cart (cart-shopping with
     `data-notify` count badge), heart/account link.
  3. Hero slider (`section.section-slide > div.wrap-slick1 >
div.slick1`, 3 slides `div.item-slick1`, height
     `calc(100vh - 40px)`, background-image cover,
     `images/slide-01..03.jpg`): each slide has `div.container >
div.flex-col-l-m` left-aligned vertically centered content in 3
     animated layers (entrance animations, delays 0 / 800ms / 1600ms):
     `span.ltext-101 cl2` label (Poppins-Regular 28px) — "Women
     Collection 2030" / "Men New-Season" / "Men Collection 2030";
     `h2.ltext-201 cl2` (Playfair Display Bold 60px uppercase,
     line-height 1.1) — "NEW SEASON" / "Jackets & Coats" / "New
     arrivals"; `a` pill button "Shop Now" (`stext-101 cl0 size-101 bg1
bor1 hov-btn1`, see tokens). Prev/next arrow buttons
     (`arrow-slick1`, fa-caret-left/right icons) and pagination dots
     (`wrap-slick1-dots`, bottom 60px).
  4. Product section (`section.bg0 p-t-23 p-b-140`): heading "New
     arrivals"; filter buttons row (All Products active, Women, Men,
     Bag, Shoes, Watches — `stext-106 cl6 hov1 bor3`, active
     `how-active1`, ShuffleJS filtering by `.women/.men/.bag/.shoes/
.watches` classes); grid of 16 product cards `div.block2`
     (4 columns desktop): `div.block2-pic` image with hover overlay
     (quick view + wishlist hearts swap icon-heart-01/02) and an
     "Add to cart" pill that slides up from `bottom: -50px`; below the
     image `div.block2-txt`: product name (`stext-104`, 14px, link) +
     price (e.g. $16.64, $35.31, $25.50, $75.00, $34.75, $93.20,
     $52.66, $18.96, $25.85, $63.16, $18.49, $54.79, $86.85, $29.64)
     - wishlist heart; below the grid a "Load More" pill (`stext-101
cl5 size-103 bg2 bor1 hov-btn1`).
  5. Banner (`div.sec-banner bg0 p-t-80 p-b-50`): 3 `div.block1` cards
     (col-md-6 col-xl-4): full-width image (`images/banner-01..03.jpg`)
     with overlay link `block1-txt` top-left: `span.block1-name
ltext-102` (Poppins-Bold 28px, `#333`) — "Women" / "Men" /
     "Accessories" + `span.block1-info stext-102` (14px, `#555`) —
     "Spring 2030" / "Spring 2030" / "New Trend"; hover reveals a
     "Shop Now" link (`stext-101 cl0`).
  6. Footer (`footer.bg3 p-t-75 p-b-32`, bg `#222`): 4 columns
     (col-sm-6 col-lg-3), heading `h4.stext-301 cl0` (Montserrat Bold
     15px uppercase): Categories (Women, Men, Shoes, Watches); Help
     (Track Order, Returns, Shipping, FAQs); GET IN TOUCH (address "8th
     floor, 379 Hudson St, New York, NY 10018", phone (+1) 96 716 6879,
     social icons facebook / instagram / pinterest); Newsletter (email
     input with underline `wrap-input1 input1` + "Subscribe" pill
     `size-103 bg1 bor1 hov-btn2`). Column links `stext-107 cl7` (13px,
     `#b2b2b2`) hover brand. Bottom bar: copyright line — ColorLib
     credit REPLACED by the Component Dock credit line.
  7. Overlays (modals, implement as lightweight components): cart
     dropdown (3 items with thumbnails, Total $75.00, View Cart +
     Check Out buttons), search modal (white overlay + input), product
     quick-view modal (image, name, price, description, Size select
     S/M/L/XL, "Add to cart").
- **Design tokens extracted from the preview CSS (`css/main.css` +
  `css/util.css`):**
  - Brand periwinkle/indigo **`#717fe0`** (`.bg1`): hero "Shop Now"
    button bg, product "Add to cart" button bg, newsletter "Subscribe"
    button bg; icon hover `.hov-cl1:hover`; `.hov-btn2:hover` text;
    `.hov-btn3:hover` bg.
  - Ink **`#222`** (`.bg3`): footer bg AND topbar bg (`.top-bar`
    height 40px, `background-color: #222`); `.hov-btn1:hover` turns
    the pill buttons black (border + bg `#222`, text `#fff`).
  - Text scale (`.cl*`): `#fff` cl0 (buttons/hero text), `#333` cl2
    (hero labels + titles, icons), `#666` cl3 (body default),
    `#888` cl6 (filter buttons), `#b2b2b2` cl7 (footer links),
    `#555` cl8, `#222` cl5 (Load More text, section headings),
    `#999` cl4, `#1d1d1d` cl10, `#ccc` cl12, `#f9ba48` cl11 (gold
    accent, unused on home).
  - Surfaces: white body + product section `.bg0`; banner `#fff`;
    `#e6e6e6` `.bg2` (Load More pill); `#f2f2f2` `.bg6`;
    `#f3f3f3` `.bg8`; footer `#222` `.bg3`.
  - Fonts: **Poppins** (Regular/Medium/Bold) for body, nav, labels,
    product names, buttons (body default 15px `#666`; `.stext-101`
    Poppins-Medium 15px uppercase — button text; `.stext-104` 14px —
    product names; `.stext-106` 15px — filter buttons; `.stext-107`
    13px — footer links; `.ltext-101` Regular 28px — hero labels;
    `.ltext-105` Bold 50px — section heading; `.ltext-102` Bold 28px —
    banner names); **Playfair Display Bold** (`.ltext-201` 60px
    uppercase, hero h2); **Montserrat Bold** (`.stext-301` 15px
    uppercase, footer h4). All three via Google Fonts `<link>` — never
    copy font files.
  - Buttons: pill radius **`border-radius: 23px`** (`.bor1`; `.bor2`
    20px; `.bor4` 1px solid `#e6e6e6` radius 3px; `.bor3` bottom
    border transparent — filter underline). Sizes: `.size-101`
    min-width 161px height 46px (Shop Now / Add to cart);
    `.size-103` min-width 179px height 46px (Subscribe / Load More).
    States: `hov-btn1` hover → `#222` bg + `#fff` text (Shop Now, Add
    to cart, Load More); `hov-btn2` hover → `#fff` bg + `#717fe0`
    text (Subscribe); `hov-btn3` hover → `#717fe0` bg (unused on
    home); `.hov1:hover` color `#333` + border-color `#797979`
    (filter buttons underline hover); `.hov-cl1:hover` color
    `#717fe0` (icons, footer links).
  - Header: topbar `#222` 40px; nav bar fixed, height 84px, starts
    transparent over the hero (white text) and turns solid with shadow
    on scroll; icon font-size 26px; cart badge `::after` 12px white on
    brand bg.
  - Section rhythm: product section `p-t-23 p-b-140`; banner
    `p-t-80 p-b-50` with cards `p-b-30`; footer `p-t-75 p-b-32`,
    columns `p-b-50`, heading `p-b-30`, link rows `p-b-10`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/mannequin-<n>/<w>/<h>`); the hero slides and the
  3 banner cards are subject-critical fashion/lifestyle imagery — picsum
  has no fashion model photos, so use the seed-screening method
  (skill: seed-screening) to pick editorial/lifestyle seeds and
  paraphrase the slide labels if the available imagery does not match
  the model-based originals (document the deviation in the PR). Icons →
  lucide-react (Search, ShoppingCart, Heart, User, Menu, ChevronLeft,
  ChevronRight, X, Eye); brand icons (facebook/instagram/pinterest) are
  REMOVED from lucide-react — use inline SVG brand icons (simple-icons
  paths) per the replication skill. Playfair Display + Poppins +
  Montserrat via Google Fonts `<link>` in `index.html`. Brand
  `#717fe0` + ink `#222` in `@theme` so shared Button/ButtonLink
  `primary` resolves to the periwinkle pill. No asset/CSS/font-file
  copying. Demo copy paraphrased but same kinds (topbar message; nav
  labels; hero label + serif headline + Shop Now; filter buttons;
  16 product names + prices; banner category names + seasons; footer
  columns + newsletter form). The 3-slide hero slider, filter buttons
  (functional filtering of the product grid), hover "Add to cart"
  reveal, cart dropdown, search modal, and quick-view modal are
  implemented with accessible buttons/toggles (no ShuffleJS/Swiper
  dependencies — plain React state + CSS transitions). Footer copyright
  uses the Component Dock credit line, not ColorLib.

Mannequin lives in `apps/mannequin` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn) plus the repo-standard
Navbar/Footer chrome (adapted to the topbar + fixed transparent header
and the dark 4-column footer with the newsletter form).

## Requirements

### Requirement: Topbar and header

The system SHALL render a dark utility topbar and a fixed header with
the store wordmark, menu links, and icon buttons.

#### Scenario: Topbar content

- **GIVEN** the Mannequin page is rendered
- **WHEN** the page loads
- **THEN** a dark topbar SHALL show the text "Free shipping for standard order over $100"
- **AND** the topbar SHALL show links Help & FAQs, My Account, and USD

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the header is displayed
- **THEN** the header SHALL show the store name "Mannequin" as the brand
- **AND** the header SHALL show links Home, Shop, Features, Blog, About, and Contact
- **AND** the header SHALL show search, cart, and account icon buttons
- **AND** the cart icon SHALL show a count badge

### Requirement: Hero slider

The system SHALL render a full-viewport hero slider with three slides,
each with a background image, a label, a serif headline, and a Shop Now
pill button.

#### Scenario: Hero slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** the slider SHALL show three slides
- **AND** each slide SHALL show a small label, a large uppercase serif headline, and a "Shop Now" button with the periwinkle background and pill shape
- **AND** the first slide SHALL show the label "Women Collection 2030" and the headline "NEW SEASON"

#### Scenario: Slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user activates the next arrow or a pagination dot
- **THEN** the slider SHALL advance to the corresponding slide

### Requirement: Product grid

The system SHALL render a "New arrivals" product section with category
filter buttons and a grid of product cards, each with a name, a price,
and an "Add to cart" action.

#### Scenario: Product section content

- **GIVEN** the page is rendered
- **WHEN** the product section is displayed
- **THEN** it SHALL show the heading "New arrivals"
- **AND** it SHALL show filter buttons All Products, Women, Men, Bag, Shoes, and Watches
- **AND** it SHALL show a grid of at least 12 product cards, each with a product name, a price, and an "Add to cart" button

#### Scenario: Category filtering

- **GIVEN** the product grid is displayed
- **WHEN** the user activates the Women filter button
- **THEN** the grid SHALL show only products tagged as women

#### Scenario: Product card hover

- **GIVEN** a product card is displayed
- **WHEN** the user hovers over the product image
- **THEN** an "Add to cart" button SHALL appear over the image
- **AND** quick-view and wishlist controls SHALL be visible

### Requirement: Category banner

The system SHALL render three image banner cards with a category name,
a season label, and a Shop Now link revealed on hover.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the banner section is displayed
- **THEN** it SHALL show three cards labeled Women, Men, and Accessories
- **AND** each card SHALL show a season label ("Spring 2030" or "New Trend")
- **AND** each card SHALL reveal a "Shop Now" link on hover

### Requirement: Footer

The system SHALL render a dark four-column footer with link columns, a
contact column, and a newsletter form, plus a copyright bar crediting
Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a Categories column with links Women, Men, Shoes, and Watches
- **AND** it SHALL show a Help column with links Track Order, Returns, Shipping, and FAQs
- **AND** it SHALL show a Get in Touch column with an address and social icons
- **AND** it SHALL show a Newsletter column with an email input and a "Subscribe" button

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is shown
- **THEN** it SHALL show the copyright text with a link to https://www.componentdock.com/

### Requirement: Cart and overlays

The system SHALL render a cart dropdown and a product quick-view modal
with size selection.

#### Scenario: Cart dropdown

- **GIVEN** the header is displayed
- **WHEN** the user activates the cart icon
- **THEN** a dropdown SHALL show cart items with names, quantities, and prices
- **AND** the dropdown SHALL show the total and View Cart and Check Out buttons

#### Scenario: Quick-view modal

- **GIVEN** a product card is displayed
- **WHEN** the user activates the quick-view control
- **THEN** a modal SHALL show the product image, name, price, description, and a size select with options S, M, L, and XL
- **AND** the modal SHALL show an "Add to cart" button

### Requirement: Page composition

The system SHALL render all sections in the source order.

#### Scenario: Full page render

- **GIVEN** the Mannequin page is rendered
- **WHEN** the page is scrolled from top to bottom
- **THEN** the sections SHALL appear in the order: topbar and header, hero slider, product grid, category banner, footer

## Verification checklist

- [ ] `openspec/specs/template-mannequin/spec.md` present with the REAL
      section list (topbar → sticky header → hero slider ×3 → product
      grid + filters → category banner ×3 → footer ×4 columns +
      overlays).
- [ ] Design tokens above (brand `#717fe0`, ink `#222`, cl-text scale,
      Poppins + Playfair Display + Montserrat fonts, pill buttons
      radius 23px, 40px topbar, fixed 84px header, section rhythm)
      captured in the spec.
- [ ] `docs/templates/mannequin/tasks.md` has the task outline + design
      notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh
    mannequin`, PR lists source (ColorLib Coza Store), preview URL,
      tokens, and what differs. All THREE TEMPLATES.md "Coza Store"
      rows get `[x]` + the same live URL when done.
