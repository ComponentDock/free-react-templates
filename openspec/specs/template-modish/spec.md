# Template: Modish (Ecommerce — Fashion Store)

## Purpose

Modish is a single-page fashion e-commerce website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Divisima" design (see TEMPLATES.md — listed under Beauty,
Ecommerce, and Fashion sections; dup rows at lines 215/1569/1702, first
unchecked), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a classic fashion storefront with a black/white/hot-pink
identity: a two-tier header (white top bar: "Divisima" logo, a pill search
input "Search on divisima ....", a user panel "Sign In or Create Account" and
"Shopping Cart" with a pink count badge; a dark `#282828` navbar with Home /
Women / Men / Jewelry (pink "New" tag) / Shoes ▾ / Pages ▾ / Blog, pink
hover), a full-width darkened fashion-photo hero slider (2 slides: "New
Arrivals" eyebrow, 60px uppercase "DENIM JACKETS" headline, lorem, a
"DISCOVER" outline pill + "ADD TO CART" white pill, and a rotating pink
circular offer badge "from $29 SHOP NOW", with a 1/2 slide counter), a
3-column feature bar (Fast Secure Payments / Premium Products — middle column
pink / Free & fast Delivery), a "LATEST PRODUCTS" carousel of product cards
(photo, optional green "New"/pink "ON SALE" pill, bottom-right round white
add-to-cart + wishlist buttons that expand on hover, price + name), a "BROWSE
TOP SELLING PRODUCTS" section (8 uppercase grey filter pills + an 8-card
product grid + "LOAD MORE" button), a photo banner ("NEW" green tag, "New
Arrivals", 48px "STRIPED SHIRTS", pink "SHOP NOW" pill), and a dark `#282828`
footer (centered light logo, About widget with payment-card image, two
"Questions" link columns with dotted pink bullets, a latest-posts widget, a
contact widget with C./B./T./E. letter marks, a social strip of 7 brand links,
and a copyright bar). Modish recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Divisima" — free fashion e-commerce website template
  (source: https://colorlib.com/wp/template/divisima/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/divisima/`
  (HTTP 200, 25.2KB) + stylesheet `css/style.css` (39.5KB) plus
  `css/bootstrap.min.css`, `css/font-awesome.min.css`, `css/flaticon.css`,
  `css/slicknav.min.css`, `css/jquery-ui.min.css`, `css/owl.carousel.min.css`,
  `css/animate.css`. The rendered DOM is the reference below; the TEMPLATES.md
  screenshot (`divisima-free-template.jpg`, 1200×946) confirms the visual
  design: white background, black text/navbar, hot pink `#f51167` accents
  (hero price badge, center feature block, buttons, tags), Josefin Sans
  typography, uppercase bold headings, pill-shaped buttons and filter chips.
- **Section order (1:1):**
  1. `header-section` — `header-top` (white, padding 18px 0 14px):
     `site-logo` (img/logo.png "Divisima" → text logo "Modish"),
     `header-search-form` (pill input: height 44px, radius 50px, bg #f0f0f0,
     placeholder "Search on divisima ...." → "Search on modish ....", flaticon
     search button), `user-panel` with 2 `up-item`s: (a) profile icon + "Sign
     In or Create Account" links; (b) `shopping-card` (bag icon + span badge
     "0", bg #f51167, radius 30px) + "Shopping Cart" link. Then `main-navbar`
     (bg **#282828**): `main-menu` links white 16px, padding 17px 0,
     margin-right 50px — Home, Women, Men, Jewelry (with `.new` pill "New",
     bg #f51167), Shoes ▾ (sub-menu: Sneakers, Sandals, Formal Shoes, Boots,
     Flip Flops), Pages ▾ (Product Page, Category Page, Cart Page, Checkout
     Page, Contact Page), Blog. Hover link → **#f51167**; sub-menus are white
     220px dropdowns (shadow 2px 7px 20px rgba(0,0,0,0.05)).
  2. `hero-section` (padding-bottom 54px): `hero-slider` (owl carousel, 2
     `hs-item set-bg` slides, img/bg.jpg + img/bg-2.jpg — darkened fashion
     photos, height **720px**, content container padding-top 170px):
     `col-xl-6 col-lg-7 text-white` block with `span` "New Arrivals" (18px,
     uppercase, 600, letter-spacing 3px), `h2` "denim jackets" (60px,
     uppercase, 700), `p` lorem (18px, 300), then `a.site-btn.sb-line`
     "DISCOVER" + `a.site-btn.sb-white` "ADD TO CART". Right side: `offer-card
text-white` (absolute, right 0, top 226px, 162×162 circle, radius 50%,
     bg **#f51167**, rotated 45deg → 0 on slide-in, inner ring border 1px
     #f96790): `span` "from", `h2` "$29" (72px, 400), `p` "SHOP NOW"
     (uppercase). Below: `slide-num-holder` (white 24px 700, "1/2" with a
     rotated 1px divider line).
  3. `features-section` (container-fluid, 3 `col-md-4 p-0 feature`): each
     `feature-inner` (flex centered, padding 20px 25px) = `feature-icon`
     (img/icons/1.png…3.png) + `h2` (24px, uppercase): "Fast Secure Payments"
     (bg #f8f8f8), "Premium Products" (bg **#f51167**, white text), "Free &
     fast Delivery" (bg #f8f8f8).
  4. `top-letest-product-section` (padding 70px 0 60px): centered
     `section-title` `h2` "LATEST PRODUCTS" (36px, margin-bottom 70px);
     `product-slider` (owl carousel) of 6 `product-item`s, each: `pi-pic`
     (img/product/N.jpg; optional `tag-new` "New" pill bg #50e550 or
     `tag-sale` "ON SALE" pill bg #f51167, absolute top-right, radius 15px,
     10px 700 uppercase; `pi-links` bottom-right: `a.add-card` + `a.wishlist-btn`,
     round white 36×36 (radius 60px, shadow 1px 0 32px rgba(0,0,0,0.2)), bag +
     heart icons, add-card expands to 148px on hover revealing "ADD TO CART"
     label) + `pi-text` (h6 price "$35,00" right, bold #111111; p name 16px
     #111111: "Flamboyant Pink Top", "Black and White Stripes Dress", … —
     keep 3–4 distinct product names, paraphrase repeats).
  5. `product-filter-section` (padding-bottom 60px): centered `section-title`
     `h2` "BROWSE TOP SELLING PRODUCTS"; `ul.product-filter-menu` of 8 pills
     (12px, 700, uppercase, bg #ebebeb, padding 10px 34px, radius 31px): TOPS,
     JUMPSUITS, LINGERIE, JEANS, DRESSES, COATS, JUMPERS, LEGGINGS; then a
     `row` of 8 `col-lg-3 col-sm-6 product-item` (same card as above, some
     with `tag-new`/`tag-sale`); then `button.site-btn.sb-line.sb-dark`
     "LOAD MORE" centered (text-center pt-5).
  6. `banner-section`: `banner set-bg` (img/banner-bg.jpg, padding 50px 34px
     47px, margin-bottom 70px): `div.tag-new` "NEW" (bg #50e550, 24px 700,
     radius 80px, absolute top-right), `span` "New Arrivals" (18px, uppercase,
     600, letter-spacing 3px), `h2` "STRIPED SHIRTS" (48px, uppercase, 700,
     color #282828), `a.site-btn` "SHOP NOW" (pink pill).
  7. `footer-section` (bg **#282828**, padding-top 60px): centered
     `footer-logo` (logo-light.png → "Modish" white text logo, padding-bottom
     60px); 4 `col-lg-3 col-sm-6` widgets:
     - `about-widget`: h2 "About" (18px uppercase white, margin-bottom 45px) +
       paragraph (#8f8f8f) + payment cards image (img/cards.png — recreate as
       small icon row);
     - `about-widget`: h2 "Questions" + two `ul` columns — About Us, Track
       Orders, Returns, Jobs, Shipping, Blog / Partners, Bloggers, Support,
       Terms of Use, Press; links #8f8f8f 14px with 5px dotted circle bullets
       (#ec105a border), hover → white + filled dot;
     - `about-widget`: h2 "Questions" + `fw-latest-post-widget` with 2
       `lp-item`s (64×64 `lp-thumb` + `lp-content`: h6 title 14px 700
       uppercase #717171 opacity .25, span "Oct 21, 2018", a.readmore "Read
       More" #f51167): "what shoes to wear", "trends this year";
     - `contact-widget`: h2 "Questions" + 4 `con-info` rows: span letter "C."
       "B." "T." "E." (#f51167, float left) + p text — "Your Company Ltd",
       "1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX 68",
       "+53 345 7953 32453", "office@youremail.com".
       Then `social-links-warp` (border-top 2px #3b3535, padding 46px 0): 7
       `social-links` (instagram, google-plus, pinterest, facebook, twitter,
       youtube, tumblr) — icon 30px #d7d7d7 + label 12px 600 uppercase #9f9fa0;
       hover → brand colors (instagram #2F5D84, google-plus #E04B37, pinterest
       #CD212D, facebook #39599F, twitter #5abed6, youtube #D12227, tumblr
       #37475E) and label → white. Copyright bar: "Copyright © … All rights
       reserved | This template is made with ♥ by Colorlib" → replace with
       repo-standard footer credit.
- **Design tokens extracted from `css/style.css`:**
  - Font: **'Josefin Sans', sans-serif** (body; headings inherit, weight
    600/700, heavy uppercase usage).
  - Brand pink: **#f51167** — `.site-btn` bg, shopping-card badge, nav link
    hover, sub-menu hover, offer-card bg, middle feature column bg, `tag-sale`
    bg, banner site-btn, footer readmore links, contact letter marks, "New"
    nav tag.
  - Light pink ring: **#f96790** — offer-card inner border (1px, 10px inset).
  - Dark charcoal: **#282828** — main-navbar bg, banner h2 color, footer bg.
  - Near-black: **#111111** — headings, product price/name, sb-white text,
    filter menu link text.
  - Green: **#50e550** — "New"/"NEW" tags (product + banner).
  - Greys: #f0f0f0 (search input bg), #f8f8f8 (feature bg), #ebebeb (filter
    pill bg), #8f8f8f (footer text/links), #585858 (body p), #717171 (lp h6),
    #9f9fa0 (social labels), #d7d7d7 (social icons), #a4a4a4 (product slider
    arrows), #3b3535 (social warp border-top), #413a3a (`.sb-dark` bg),
    #ec105a (footer bullets).
  - Buttons `.site-btn`: inline-block, 14px, 600, uppercase, min-width 167px,
    padding 18px 47px 14px, **border-radius 50px (pill)**, bg #f51167, white
    text. Variants: `.sb-white` (bg #fff, color #111111), `.sb-line`
    (transparent, inset 0 0 0 1px #fff), `.sb-dark` (bg #413a3a),
    `.sb-dark.sb-line` (transparent, inset 0 0 0 1px #111111).
  - Tags: `.tag-new`/`.tag-sale` absolute top-right of product photo, 10px
    700 uppercase, radius 15px, width 42px (new = #50e550; sale = #f51167,
    min-width 65px); banner `.tag-new` 24px radius 80px padding 7px 16px 1px.
  - Pi-links: 36×36 round white buttons (radius 60px, shadow 1px 0 32px
    rgba(0,0,0,0.2)); add-card expands to 148px width on hover (label fades
    in after 0.3s).
  - Filter pills: 12px 700 uppercase, bg #ebebeb, padding 10px 34px, radius
    31px.
  - Spacing: header-top 18px 0 14px; hero slide height 720px (content pt
    170px); features padding 20px 25px; latest products 70px top / 60px
    bottom; section-title margin-bottom 70px; banner padding 50px 34px 47px +
    margin-bottom 70px; footer pt 60px, widget margin-bottom 70px, footer h2
    margin-bottom 45px; social-links-warp 46px 0; `.spad` = 105px top/bottom
    (page-level rhythm).
- **Recreation decisions:** repo-standard two-tier header (white top bar with
  "Modish" text logo, pill search input with icon, Sign In / Create Account
  links, Shopping Cart with pink count badge; dark #282828 navbar with links
  Home, Women, Men, Jewelry (+New), Shoes, Pages, Blog — flatten dropdowns or
  keep simple hover dropdowns; mobile hamburger menu); hero = full-width
  darkened fashion photo (picsum) or 2-slide crossfade slider, "New Arrivals"
  eyebrow + uppercase headline + lorem + DISCOVER (outline) + ADD TO CART
  (white) pills, pink circular offer badge "from $29 SHOP NOW" with ring, and
  a "1/2" slide counter; features = 3-column bar with the middle column pink;
  latest products = section title + horizontal carousel/grid of 6 product
  cards (photo, optional New/On Sale pill, round add-to-cart + wishlist
  buttons revealed on hover, price + name); top selling = 8 filter pills +
  8-card grid + LOAD MORE button; banner = photo band with green NEW tag +
  "STRIPED SHIRTS" + SHOP NOW pill; footer = dark #282828 with centered logo,
  About + payment icons, two Questions link columns, latest posts widget,
  contact widget, social strip with brand-color hover, copyright bar; all
  images picsum-seeded (`picsum.photos/seed/modish-N/w/h`); Google Fonts
  Josefin Sans via `<link>`; icons via lucide-react (Search, User, ShoppingBag,
  Heart, CreditCard, Truck, Lock, social brand icons per repo convention).
- **Multi-section dup rows:** Divisima appears at TEMPLATES.md lines 215
  (Beauty), 1569 (Ecommerce), 1702 (Fashion) — the first unchecked row is the
  claim; when shipping, mark all three `[x]` and skip stale unchecked dupes.

Modish lives in `apps/modish` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Header top bar

The system SHALL render a white header top bar with a logo, a search input,
and a user panel.

#### Scenario: Top bar content

- **GIVEN** the Modish page is rendered
- **WHEN** the header top bar is displayed
- **THEN** it SHALL show the site name "Modish" as a bold text logo on the left
- **AND** it SHALL show a rounded search input with placeholder "Search on
  modish ...." and a search icon button
- **AND** it SHALL show a "Sign In or Create Account" user link
- **AND** it SHALL show a "Shopping Cart" link with a pink count badge showing
  "0"

### Requirement: Navigation bar

The system SHALL render a dark navigation bar with primary links and a mobile
menu.

#### Scenario: Nav links

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the links Home, Women, Men, Jewelry, Shoes, Pages,
  and Blog in white uppercase-adjacent text on a dark (#282828) bar
- **AND** the Jewelry link SHALL carry a small pink "New" tag
- **AND** hovering a link SHALL color it brand pink (#f51167)

#### Scenario: Mobile menu

- **GIVEN** the navbar is displayed on a narrow viewport
- **WHEN** the user activates the hamburger button
- **THEN** a menu SHALL open with the nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero slider

The system SHALL render a full-width hero with a darkened photo slider, an
eyebrow, a headline, two call-to-action pills, and a circular offer badge.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the eyebrow "New Arrivals" in spaced uppercase
- **AND** it SHALL show the headline "DENIM JACKETS" in large (60px) uppercase
  type over the photo
- **AND** it SHALL show a short paragraph and two pill buttons: "DISCOVER"
  (outlined) and "ADD TO CART" (white)
- **AND** it SHALL show a pink circular offer badge with "from", "$29", and
  "SHOP NOW" on the right

#### Scenario: Slide navigation

- **GIVEN** the hero uses a photo slider
- **WHEN** the slider advances
- **THEN** the background photo SHALL change while the text and offer badge
  stay in place
- **AND** a "1/2" style slide counter SHALL reflect the current slide

### Requirement: Features bar

The system SHALL render a three-column feature bar with icons, the middle
column highlighted.

#### Scenario: Feature columns

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show three equal columns: "Fast Secure Payments",
  "Premium Products", and "Free & fast Delivery", each with an icon
- **AND** the middle "Premium Products" column SHALL have the pink (#f51167)
  background with white text

### Requirement: Latest products

The system SHALL render a "LATEST PRODUCTS" section with a heading and
product cards showing photo, price, name, and hover actions.

#### Scenario: Product cards

- **GIVEN** the page is rendered
- **WHEN** the latest products section is displayed
- **THEN** it SHALL show the heading "LATEST PRODUCTS"
- **AND** it SHALL show a row of product cards, each with a photo, a price
  (e.g. "$35.00") on the right, and a product name below
- **AND** some cards SHALL carry a "New" (green) or "ON SALE" (pink) pill tag

#### Scenario: Card hover actions

- **GIVEN** a product card is displayed
- **WHEN** the user hovers over the card photo
- **THEN** round white "add to cart" and "wishlist" buttons SHALL appear at
  the bottom right
- **AND** hovering the add-to-cart button SHALL expand it and reveal the "ADD
  TO CART" label

### Requirement: Top selling filter

The system SHALL render a "BROWSE TOP SELLING PRODUCTS" section with filter
pills, a product grid, and a load-more button.

#### Scenario: Filter and grid

- **GIVEN** the page is rendered
- **WHEN** the top selling section is displayed
- **THEN** it SHALL show the heading "BROWSE TOP SELLING PRODUCTS"
- **AND** it SHALL show uppercase filter pills TOPS, JUMPSUITS, LINGERIE,
  JEANS, DRESSES, COATS, JUMPERS, and LEGGINGS on grey (#ebebeb) rounded
  chips
- **AND** it SHALL show an 8-card product grid (same card anatomy as latest
  products)
- **AND** it SHALL show a "LOAD MORE" outlined dark button below the grid

#### Scenario: Filter interaction

- **GIVEN** the filter pills are displayed
- **WHEN** the user clicks a pill
- **THEN** the grid SHALL show only products of that category (or, for a
  static recreation, the active pill SHALL be visibly highlighted)

### Requirement: Promo banner

The system SHALL render a photo banner with a NEW tag, an eyebrow, a headline,
and a shop-now button.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the banner section is displayed
- **THEN** it SHALL show a full-width background photo with a green "NEW" tag
  at the top right
- **AND** it SHALL show the eyebrow "New Arrivals" and the headline "STRIPED
  SHIRTS" in large uppercase type
- **AND** it SHALL show a pink "SHOP NOW" pill button

### Requirement: Footer

The system SHALL render a dark footer with logo, About, Questions, latest
posts, contact, and social widgets plus a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a centered "Modish" logo
- **AND** it SHALL show an "About" widget with a description paragraph and a
  small payment-icons row
- **AND** it SHALL show "Questions" link columns (About Us, Track Orders,
  Returns, Jobs, Shipping, Blog / Partners, Bloggers, Support, Terms of Use,
  Press)
- **AND** it SHALL show a latest-posts widget with two posts (title, date,
  "Read More" in pink)
- **AND** it SHALL show a contact widget with C./B./T./E. letter marks and
  company, address, phone, and email lines
- **AND** it SHALL show a social strip with at least five social links whose
  icons turn brand-colored on hover
- **AND** it SHALL show a copyright bar with the repo-standard footer credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Modish app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, features, latest products,
  top selling, banner, and footer inside the main landmark in the original's
  order
- **AND** the document title SHALL be "Modish — Fashion Store"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- modish` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (header top bar → navbar → hero
      slider → features → latest products → top selling → banner → footer).
- [ ] Design tokens applied: brand pink #f51167 (buttons, badge, offer card,
      feature center, sale tag, hover states), #282828 (navbar/footer/banner
      h2), #111111 (headings/text), #50e550 (New tags), #f0f0f0/#f8f8f8/
      #ebebeb (inputs/features/filter pills), #8f8f8f footer text, Josefin
      Sans font, 50px-radius pill buttons, 31px-radius filter chips.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Divisima), preview URL, tokens,
      and renames.
