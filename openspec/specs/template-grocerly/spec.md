# Template: Grocerly (Ecommerce / Food & Grocery)

## Purpose

Grocerly is a single-page ecommerce (fresh grocery / organic food store)
website template in the free-react-templates monorepo. It is an original
React recreation of the ColorLib "Ogani" free template (source:
https://colorlib.com/wp/template/ogani/), built under a DIFFERENT name
(**Grocerly** — a grocer + "-ly" brand word, fitting the monorepo naming
mandate — never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a green-accented grocery storefront: a light top bar
(email + free-shipping notice + language selector + Login), a white header
row (logo + nav with a Pages dropdown + wishlist/cart with live item total),
a hero row (green "All departments" category dropdown, search bar with
category select, phone block, and a photo banner "Vegetable 100% Organic"
with SHOP NOW CTA), a categories strip (5 photo cards), a "Featured
Product" section (filter tabs + 8-product grid with hover action icons), a
two-image banner band, a "Latest Products / Top Rated Products / Review
Products" three-column product list, a "From The Blog" section (3 post
cards), and a light-blue-gray footer (About column with address/phone/email,
Useful Links column, second links column, "Join Our Newsletter Now" form,
social icons, copyright bar). Grocerly recreates that structure 1:1 with
matching layout, colors, typography, and content kinds (no ColorLib assets
copied).

> NAMING NOTE: the ColorLib source name "Ogani" is FORBIDDEN as the app
> name. **Grocerly** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-12). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Ogani". Listed in TEMPLATES.md under **Bootstrap
  (216)** (line 468) — dup rows also at line 1114 (Business), line 1592
  (Ecommerce), line 1787 (Food Drinks); all four rows are `- [ ]` and no app
  ships it yet. Free grocery-store template (multi-page demo: index, shop,
  shop-details, shopping-cart, checkout, blog-details, blog, contact — the
  index page is the recreation target).
- **Live preview DOM — REACHABLE (verified 2026-08-12):**
  `https://preview.colorlib.com/theme/ogani/` returned HTTP 200 (49KB HTML);
  stylesheets `css/style.css` (56KB, the token source) + bootstrap /
  font-awesome / elegant-icons / nice-select / jquery-ui / owl.carousel /
  slicknav (vendors; the latter four are behavior-only). No Google Fonts
  link in the HTML — the body font `"Cairo", sans-serif` is declared in
  `style.css` (load via Google Fonts in `index.html`). Screenshot
  (`ogani-free-template.jpeg`, 1200×946, browser-verified 2026-08-12)
  confirms the aesthetic: white/light-gray layout, leafy-green `#7fad39`
  accents, photo hero with fresh vegetables.
- **Visual design (screenshot + live DOM):** clean light ecommerce layout.
  Screenshot shows the thin top bar (social icons, "Free Shipping", English
  language selector, Login), the white header (green "OGANI" logo left, nav
  Home/Shop/Pages/Blog/Contact center, heart + cart icons and phone right),
  the left "All departments" sidebar (Fresh Meat, Vegetables, Fruit & Nut
  Gifts, Fresh Berries, Ocean Foods, Fastfood…), a hero banner with fresh
  vegetables on a wooden surface and green "SHOP NOW" button, a 4-5 card
  category strip (Fresh Fruit / Dried Fruit / Vegetables / Drink Fruits),
  and a "Featured Product" grid with filter tabs (All, Oranges, Fresh Meat,
  Vegetables, Fastfood). Live DOM/CSS confirm the green brand color
  `#7fad39` on the departments header, search button, site/primary buttons,
  section-title underlines and category card text overlays.
- **Section order (1:1 from live DOM):**
  1. **Header** (`.header`, two rows) — Row 1 `.header__top` (bg `#f5f5f5`):
     left `header__top__left` "hello@colorlib.com" + "Free Shipping for all
     Order of $99" (with `|` separators); right `header__top__right`:
     language selector (English ▼ / Spanish), "Login" link, social icons
     (facebook, twitter, pinterest, instagram). Row 2 `.header__mid`
     (white): left `.header__logo` (image `img/logo.png` — recreate as a
     green text wordmark); center `.header__menu` nav ul: Home (active),
     Shop, Pages (dropdown: Shop Details, Shoping Cart, Check Out, Blog
     Details), Blog, Contact; right `.header__cart`: heart icon (count 1),
     shopping-bag icon (count 3), `header__cart__price` "item:
     $150.00". Mobile: `.humberger__open` hamburger + slicknav offcanvas.
  2. **Hero row** (`.hero`) — 3 columns under the header:
     - `col-lg-3` `.hero__categories`: green `.hero__categories__all`
       (bg `#7fad39`, white bold "All departments") + dropdown ul (11
       departments: Fresh Meat, Vegetables, Fruit & Nut Gifts, Fresh
       Berries, Ocean Foods, Butter & Eggs, Fastfood, Fresh Onion,
       Papayaya & Crisps, Oatmeal, Fresh Bananas).
     - `col-lg-6` `.hero__search`: input + category select ("All
       Categories") + green "SEARCH" button (`.site-btn`).
     - `col-lg-3` `.hero__phone`: phone icon + h5 "+65 11.188.888" +
       span "support 24/7 time".
  3. **Hero banner** (`.hero__item.set-bg`, bg `img/hero/banner.jpg`,
     height 431px, flex align-center, padding-left 75px) — `.hero__text`:
     span "FRUIT FRESH" (green), h2 "Vegetable" + "100% Organic" (`#1c1c1c`,
     bold), p "Free Pickup and Delivery Available" (`#6f6f6f`), green
     `.primary-btn` "SHOP NOW" (uppercase, letter-spacing 2px).
  4. **Categories** (`.categories`, owl-carousel slider) — 5 `.categories__item`
     photo cards (270px tall, `set-bg` `img/categories/cat-1..5.jpg`): h5
     link label centered at bottom 20px (18px `#1c1c1c` weight 700): Fresh
     Fruit, Dried Fruit, Vegetables, drink fruits, drink fruits.
  5. **Featured** (`.featured.spad`) — `.section-title` h2 "Featured
     Product" (`#1c1c1c` weight 700 + 4px × 80px green underline centered
     `#7fad39`); `.featured__controls` filter tabs: All (active), Oranges,
     Fresh Meat, Vegetables, Fastfood; grid of 8 `.featured__item` cards
     (`col-lg-3 col-md-4 col-sm-6`): `.featured__item__pic` (270px, bg
     image) with `.featured__item__pic__hover` ul (heart, retweet,
     shopping-cart icons — slide up from `bottom: -50px` to `20px` on
     hover, transition 0.5s) + `.featured__item__text`: h6 title link +
     h5 price `$30.00`.
  6. **Banner band** (`.banner`) — two side-by-side image banners
     (`col-lg-6` × 2, `img/banner/banner-1.jpg` + `banner-2.jpg`).
  7. **Latest products** (`.latest-product.spad`) — 3 columns
     (`col-lg-4 col-md-6`): `.latest-product__text` h4 headers "Latest
     Products" / "Top Rated Products" / "Review Products", each an
     owl-carousel slider of 2 slides × 3 `.latest-product__item` rows
     (small pic `img/latest-product/lp-1..3.jpg` + h6 title + span price
     `$30.00`).
  8. **From The Blog** (`.from-blog.spad`) — `.section-title` h2 "From The
     Blog"; 3 `.blog__item` cards (`col-lg-4 col-md-6`): `.blog__item__pic`
     (image, height 270px) with `.blog__item__pic__icon` (calendar icon +
     "May 4,2019" + comment icon + "5"), `.blog__item__text`: h5 title link
     ("Cooking tips make cooking simple" etc.), p excerpt (lorem).
  9. **Footer** (`.footer.spad`, bg `#F3F6FA`, padding-top 70px) — row of
     3 columns:
     - `col-lg-3` `.footer__about`: logo (wordmark), ul: "Address: 60-49
       Road 11378 New York", "Phone: +65 11.188.888", "Email:
       hello@colorlib.com" (16px `#1c1c1c`, line-height 36px).
     - `col-lg-4 offset-lg-1` `.footer__widget` "Useful Links" (h6 bold
       `#1c1c1c`): two ul lists — About Us, About Our Shop, Secure
       Shopping, Delivery infomation, Privacy Policy, Our Sitemap / Who We
       Are, Our Services, Projects, Contact, Innovation, Testimonials.
     - `col-lg-4` `.footer__widget` "Join Our Newsletter Now" (h6) + p
       "Get E-mail updates about our latest shop and special offers." +
       form (text input "Enter your mail" + green `.site-btn` "Subscribe")
       - `.footer__widget__social` (facebook, instagram, twitter icons).
     - `.footer__copyright` (border-top 1px `#ebebeb`, padding 15px 0,
       margin-top 20px): text 14px `#1c1c1c` "Copyright © All rights
       reserved | This template is made with ♥ by Colorlib" (use Grocerly
       - repo attribution) + payment icons right.
- **JS behaviors (original):** owl-carousel on categories slider +
  latest-product sliders (3×, autoplay, responsive); MixItUp filter on
  featured products (`data-filter` tabs); slicknav offcanvas mobile menu;
  `set-bg` data-attribute background injection; jquery-ui (price slider,
  shop page only); nice-select (custom selects). Recreate: featured tabs as
  React state filtering, category/latest sliders as static grids (or a
  minimal React carousel per repo conventions), mobile nav with
  `aria-expanded` toggle; hover action icons via CSS. All forms
  presentational (no backend).

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand color:** `#7fad39` (leafy green) — `.site-btn` / `.primary-btn`
  bg, `.hero__categories__all` bg, search button, hero "FRUIT FRESH" span,
  section-title h2 underline (4px × 80px), product hover icon hover bg,
  category slider nav dots. Do NOT use any other green.
- **Text:** headings/body `#1c1c1c` (67 uses — dominant ink), secondary
  body `#6f6f6f` (25 uses), borders `#ebebeb` / `#e1e1e1`, light fills
  `#f5f5f5` (top bar) / `#F3F6FA` (footer bg).
- **Fonts:** **Cairo** (body + headings, sans-serif; weights 400 / 700
  headings / 800 buttons) — load via Google Fonts `<link>` in `index.html`
  (original declares `font-family: "Cairo", sans-serif` on body + headings
  but loads the file via theme options; Google Fonts is the repo-standard
  substitute).
- **Buttons:** `.site-btn` — 14px, white, weight 800, `text-transform:
uppercase`, padding 13px 30px 12px, bg `#7fad39`, border none, radius 0.
  `.primary-btn` — 14px, white, weight 700, uppercase, `letter-spacing:
2px`, padding 10px 28px, bg `#7fad39`, radius 0 (square rectangles).
- **Section titles:** h2 `#1c1c1c` weight 700, centered, `margin-bottom:
50px` + green underline `:after` (4px tall, 80px wide, `bottom: -15px`).
- **Cards / section backgrounds:**
  - header top: bg `#f5f5f5`; header mid/logo/menu: white.
  - categories item: photo card 270px tall, label h5 18px `#1c1c1c` weight
    700 centered at bottom 20px.
  - product card: pic 270px, hover icon bar slides up (bottom -50px →
    20px, 0.5s ease); text h6 title + h5 price.
  - latest-product rows: small pic + h6 + span price (h4 column headers).
  - banner band: two image banners side by side.
  - blog card: pic 270px + icon chip (calendar/comment) + h5 title + p
    excerpt.
  - footer: bg `#F3F6FA`, padding-top 70px; text 16px `#1c1c1c`
    line-height 36px; copyright bar border-top `#ebebeb`, 14px.
- **Forms:** newsletter input (text, placeholder "Enter your mail") +
  green `.site-btn` "Subscribe"; search input + "All Categories" select +
  "SEARCH" button. Presentational only.
- **Spacing:** `.spad` vertical padding (80px top / 50px bottom class
  rhythm); hero banner height 431px; sections inside `container` (1140px).

## Requirements

### Requirement: Header with top bar, nav and cart

The system SHALL render the reference two-row header: a light top bar
(email + free-shipping notice left, language selector + Login + social
right), a white mid row (logo, nav with a Pages dropdown, cart with
wishlist/bag counts and item total), and a mobile hamburger toggle.

#### Scenario: Top bar layout

- **GIVEN** the Grocerly page is rendered
- **WHEN** the header is displayed
- **THEN** the top bar SHALL show "hello@colorlib.com" and "Free Shipping
  for all Order of $99" on the left (separated by `|`)
- **AND** a language selector (English ▼ / Spanish), a "Login" link and
  social icons (Facebook, Twitter, Pinterest, Instagram) SHALL sit on the
  right

#### Scenario: Main header row

- **GIVEN** the header is displayed
- **WHEN** the mid row is shown
- **THEN** a green text wordmark (recreating the logo image) SHALL sit on
  the left
- **AND** nav links Home (active), Shop, Pages (dropdown: Shop Details,
  Shoping Cart, Check Out, Blog Details), Blog, Contact SHALL be centered
- **AND** the cart block SHALL show a wishlist count (1), a bag count (3)
  and the text "item: $150.00" on the right

#### Scenario: Mobile nav

- **GIVEN** the Grocerly page is rendered on a viewport <992px
- **WHEN** the header is displayed
- **THEN** the nav SHALL collapse behind a hamburger toggle
  (`aria-expanded` per repo accessibility conventions) opening an offcanvas
  menu with all links including the Pages sub-menu

### Requirement: Hero row with departments, search and phone

The system SHALL render the hero row: a green "All departments" dropdown
with 11 department links, a search bar with category select + SEARCH
button, and a phone block.

#### Scenario: Departments dropdown

- **GIVEN** the hero row is displayed
- **WHEN** the user views the page
- **THEN** a green "All departments" bar SHALL open a dropdown listing:
  Fresh Meat, Vegetables, Fruit & Nut Gifts, Fresh Berries, Ocean Foods,
  Butter & Eggs, Fastfood, Fresh Onion, Papayaya & Crisps, Oatmeal, Fresh
  Bananas

#### Scenario: Search and phone

- **GIVEN** the hero row is displayed
- **WHEN** the user views the page
- **THEN** a search input with an "All Categories" select and a green
  "SEARCH" button SHALL be present (presentational — no backend)
- **AND** a phone block SHALL show "+65 11.188.888" with "support 24/7
  time" below it

### Requirement: Hero banner

The system SHALL render the full-width photo banner (431px tall) with the
green eyebrow "FRUIT FRESH", a two-line headline, a support line and a
green SHOP NOW button.

#### Scenario: Banner content

- **GIVEN** the hero banner is displayed
- **WHEN** the user views the top of the page
- **THEN** the banner SHALL show a vegetable photo backdrop (seeded
  placeholder), a green uppercase span "FRUIT FRESH", an H2 "Vegetable /
  100% Organic" (dark `#1c1c1c`, bold), a gray line "Free Pickup and
  Delivery Available" and a green uppercase "SHOP NOW" button (letter-
  spacing 2px)

### Requirement: Categories strip

The system SHALL render a strip of five photo category cards (270px tall)
with centered bottom labels.

#### Scenario: Category cards

- **GIVEN** the categories section is displayed
- **WHEN** the user scrolls to it
- **THEN** five cards SHALL show seeded food photos with bottom-centered
  labels: Fresh Fruit, Dried Fruit, Vegetables, drink fruits, drink fruits
  (18px `#1c1c1c`, weight 700)

### Requirement: Featured products with filter tabs

The system SHALL render the "Featured Product" section: green-underlined
section title, filter tabs (All, Oranges, Fresh Meat, Vegetables,
Fastfood) and an 8-card product grid whose items filter by tab.

#### Scenario: Featured grid

- **GIVEN** the featured section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section title "Featured Product" SHALL be centered with the
  green 4px × 80px underline
- **AND** the filter tabs SHALL show All (active), Oranges, Fresh Meat,
  Vegetables, Fastfood
- **AND** an 8-card grid SHALL follow, each card with a 270px seeded
  product photo, an H6 title and an H5 price (e.g. "$30.00")

#### Scenario: Tab filtering

- **GIVEN** the featured grid is displayed
- **WHEN** the user clicks a filter tab
- **THEN** only products tagged with that category SHALL remain visible and
  the active tab SHALL be highlighted (All shows everything)

#### Scenario: Product hover actions

- **GIVEN** a featured product card is displayed
- **WHEN** the user hovers or focuses the card
- **THEN** a row of three action icons (wishlist, compare, add-to-cart)
  SHALL slide up over the photo (0.5s ease per reference)
- **AND** the reveal SHALL be keyboard-accessible (focus-within)

### Requirement: Banner band

The system SHALL render two side-by-side promotional image banners.

#### Scenario: Banner pair

- **GIVEN** the banner band is displayed
- **WHEN** the user scrolls to it
- **THEN** two seeded promotional images SHALL sit side by side (stacking
  on mobile)

### Requirement: Latest / Top Rated / Review product columns

The system SHALL render a three-column product list with headers "Latest
Products", "Top Rated Products" and "Review Products", each showing six
small product rows (pic + title + price).

#### Scenario: Column content

- **GIVEN** the latest-product section is displayed
- **WHEN** the user scrolls to it
- **THEN** three columns SHALL show their h4 headers and six small product
  rows each (seeded thumb, H6 title, price span)

### Requirement: From The Blog

The system SHALL render the "From The Blog" section with three post cards
(photo, date + comment chip, title, excerpt).

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** the user scrolls to it
- **THEN** the green-underlined section title "From The Blog" SHALL be
  centered
- **AND** three cards SHALL follow, each with a 270px seeded photo, a
  date/comment chip (e.g. "May 4,2019" · "5"), an H5 title link (e.g.
  "Cooking tips make cooking simple") and a short excerpt paragraph

### Requirement: Footer

The system SHALL render the light footer (`#F3F6FA`) with the About column
(address/phone/email), a Useful Links widget (two link lists), a newsletter
form, social icons and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Grocerly page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** the About column SHALL show the wordmark and Address / Phone /
  Email lines (16px `#1c1c1c`, line-height 36px)
- **AND** the "Useful Links" widget SHALL list About Us, About Our Shop,
  Secure Shopping, Delivery information, Privacy Policy, Our Sitemap plus
  Who We Are, Our Services, Projects, Contact, Innovation, Testimonials
- **AND** the newsletter widget SHALL show "Join Our Newsletter Now", a
  support line, an email input and a green "Subscribe" button

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an invalid/empty email
- **THEN** the form SHALL show inline validation and SHALL NOT submit
  (presentational form — no backend calls)

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the user scrolls to the very bottom
- **THEN** a copyright bar SHALL sit below a 1px `#ebebeb` border-top with
  the site name + year + repo attribution (replacing the Colorlib credit)

### Requirement: Responsive behavior

The system SHALL adapt the header, hero row, grids and banners for mobile
viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Grocerly page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the nav SHALL collapse into the offcanvas hamburger menu, the
  hero search/phone blocks SHALL stack below the departments bar, and all
  grids (categories, featured, latest columns, blog, banner pair) SHALL
  collapse to one column

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-grocerly`
- [ ] `scripts/verify-app.sh grocerly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with reference): header (top bar email +
      free-shipping | language + Login + social; mid row wordmark + nav
      Home/Shop/Pages▾/Blog/Contact + cart counts + item total; mobile
      hamburger) → hero row (green All departments dropdown with 11 links +
      search bar + phone block) → hero banner (photo bg, FRUIT FRESH /
      Vegetable 100% Organic / Free Pickup and Delivery Available / SHOP
      NOW) → categories strip (5 photo cards) → Featured Product (title +
      tabs All/Oranges/Fresh Meat/Vegetables/Fastfood + 8 cards with hover
      action icons) → banner band (2 images) → Latest/Top Rated/Review
      columns (3 × 6 rows) → From The Blog (3 post cards) → footer
      (About / Useful Links ×2 lists / Newsletter form / social /
      copyright)
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#7fad39`
      brand, `#1c1c1c` ink, `#6f6f6f` secondary, `#f5f5f5` top bar,
      `#F3F6FA` footer, `#ebebeb` borders; square buttons (radius 0)
      uppercase, `.site-btn`-style 13px 30px padding weight 800 and
      `.primary-btn`-style letter-spacing 2px
- [ ] Fonts: Cairo (400/700/800) via Google Fonts `<link>` in
      `index.html`, title "Grocerly — Fresh Grocery Template"
- [ ] Photos = seeded picsum (`grocerly-hero`, `grocerly-cat-<n>` n 1..5,
      `grocerly-featured-<n>` n 1..8, `grocerly-banner-<n>` n 1..2,
      `grocerly-latest-<n>` n 1..3, `grocerly-blog-<n>` n 1..3) — screen
      seeds for subject (vegetables/fruit close-ups per screenshot) per
      repo seed screening; icons from lucide-react — no copied assets
- [ ] Featured tabs filter client-side (state); product hover icons slide
      up on hover AND focus-within
- [ ] Forms presentational with inline validation; no backend calls
- [ ] Mobile nav accessible (`aria-expanded` on hamburger toggle)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark ALL FOUR "Ogani" rows: line 468
      Bootstrap, line 1114 Business, line 1592 Ecommerce, line 1787 Food
      Drinks)
