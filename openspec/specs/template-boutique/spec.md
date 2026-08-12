# Template: Boutique (Ecommerce — Fashion Store)

## Purpose

Boutique is a single-page fashion eCommerce store template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Theplaza" eCommerce template design (see TEMPLATES.md, line 513
under **Bootstrap (216)** — duplicate rows at line 1606 under **Ecommerce
(56)** and line 1734 under **Fashion (43)**, same template, ONE app only),
built under a different name ("Boutique" — a fashion-boutique word, matching
the source's fashion-store positioning) with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib references in app code
— provenance lives in this spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Theplaza" — free eCommerce / fashion store HTML
  template (source: https://colorlib.com/wp/template/theplaza/). Single page:
  an absolutely-positioned header over the hero (logo left, centered nav
  HOME / WOMAN / MAN / LOOKBOOK / BLOG / CONTACT in white uppercase, cart
  icon with "2" badge + search icon right), a full-width hero slider (2
  slides, fashion-model background photo with a lavender/purple gradient
  treatment, "from $19.90" eyebrow, giant 110px uppercase white "2018 summer
  collection" headline, square dark "Shop NOW!" button, slider arrows/dots),
  a "pemium products" (source typo) intro slider (5 product cards: photo,
  optional NEW badge, hover-revealed name + $319.50 price + ADD TO CART), a
  featured promos row (2 large fashion photos with a 3px tan border and a
  big tan "SEE MORE" button straddling the bottom edge; diagonal "SUPER
  OFFER" / "25% SALE" banners baked into the images), a filterable product
  grid (tabs New arrivals / Recommended / Best sellers, 8 products in a 4-col
  grid with NEW/SALE badges, hover bar with quick view + save, name + price +
  ADD TO CART, "SEE MORE" button below), a "from the blog" section (3 post
  rows on a light `#f2f4f9` background: title + date/author meta + excerpt +
  Read More link), a dark footer-top (5 columns: about widget + "usefull
  Links" + Sitemap + Shipping & returns + Contact with address/phone/email),
  and a dark copyright bar (source credits Colorlib — replaced with a
  Component Dock link).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/theplaza/`. DOM fetched
  (`/tmp/theplaza-prep/theplaza.html`, 28,815 bytes) + stylesheet
  `css/style.css` (`/tmp/theplaza-prep/theplaza-style.css`, 34,017 bytes) +
  TEMPLATES.md screenshot (`theplaza-free-template.jpg`, viewed in the
  browser — the live page was also screenshotted via the browser).
- **Visual design (screenshot + live DOM + CSS):** modern, minimalist,
  editorial fashion aesthetic — lavender/purple-gradient hero photo of a
  model in a yellow tracksuit with geometric shapes, white uppercase
  display-type headline; stark white content sections; square (no-radius)
  dark `#414141` buttons; tan `#b09d81` accents (featured borders + featured
  SEE MORE buttons, outline-button hover); light-gray `#ebebeb` / `#f2f4f9`
  section backgrounds; dark `#282828` / `#222222` footer. Source copy is
  placeholder/Lorem with typos ("pemium products", "Sholder bag", "usefull
  Links") — paraphrase freely and fix typos, keep the same content kinds
  (nav links, hero eyebrow + title + CTA, product names + prices, blog
  titles + meta, footer widget links + contact copy).

## Design tokens (from `css/style.css` of the live preview)

- **Brand tan:** `#b09d81` — `.featured-item` 3px border, featured
  `.site-btn` background ("SEE MORE", uppercase, min-width 162px, padding
  23px 30px), `.site-btn.btn-line` hover background + border (white text).
- **Dark ink:** `#414141` — `.site-btn` background (primary button), `.pi-meta`
  hover bar background, `.btn-line` border + text, headings (`h1`–`h6`,
  29 uses). Near-black `#111111` / `#333` for dark accents.
- **Light surfaces:** `#ebebeb` (section backgrounds, 9 uses), `#f2f4f9`
  (`.blog-section`), `#f7f7f7` / `#f5f5f5` / `#ececec` (misc section
  backgrounds), white `#ffffff`.
- **Footer darks:** `.footer-top-section` `#282828` (padding-top 190px),
  `.footer-section` `#222222` (copyright bar), copyright text `#505050`.
- **Muted text:** `#909090` / `#7e7e7e` / `#b4b4b4` / `#949494` (`.readmore`).
- **Font:** `'Raleway', sans-serif` — **Raleway IS on Google Fonts**; load
  400/500/600/700 via `<link>` in `index.html` (no font files copied).
- **Buttons:** SQUARE (no `border-radius`). `.site-btn` — 14px, 500,
  `padding: 12px 30px`, `min-width: 138px`, bg `#414141`, white text,
  inline-block, centered. `.site-btn.btn-line` (outline variant) —
  transparent bg, `2px solid #414141`, `#414141` text, `padding: 12px 20px`;
  hover bg/border `#b09d81`, white text. Featured variant — bg `#b09d81`,
  uppercase, min-width 162px, padding 23px 30px.
- **Header (`.header-section`):** `position: absolute`, full-width, top 0,
  `z-index: 99`, `padding: 30px 33px 0`, transparent over the hero. `.site-logo`
  inline (square icon + wordmark). `.main-menu li a` — 14px, uppercase, 600,
  white, `padding: 8px 5px 0`. Right side: cart icon with a "2" badge +
  search icon. Mobile: hamburger (`nav-switch`). NOTE: the inner-page variant
  `.header-normal` has a purple gradient (`#f0f9ff → #aa7ad0 → #d07acd`) that
  is a template-builder artifact — the single-page preview uses the
  transparent header; do NOT port the gradient.
- **Hero (`.hero-section.set-bg`):** bg image `img/bg.jpg` (fashion model
  photo, purple/lavender treatment; use a subject-screened picsum seed),
  `background-size: cover`, top-center position. Slide content (`.hs-content`):
  `.price`-style small line "from $19.90", `h2` 110px, uppercase, white, 400,
  `line-height: 0.9`, `margin-bottom: 35px`; `.site-btn` "Shop NOW!" below.
  Owl-carousel with 2 slides → React state slider (arrows + dots).
- **Section titles (`.section-title`):** centered, `margin-bottom: 55px`;
  `h2` 30px uppercase 700; `p` 18px 500 (intro subtitle "We recommend").
- **Intro (`.intro-section.spad.pb-0`):** owl slider of 5 `.intro-item`
  cards (`padding: 30px 0`): `figure` image (hover scale transition) +
  optional `.bache` NEW badge + `.product-info` (opacity 0 → 1 on hover,
  `padding-top: 75px`, centered): h5 name + price + ADD TO CART.
- **Featured (`.featured-section.spad`):** 2 `.featured-item` (6/6 halves):
  full-width image, `border: 3px solid #b09d81`, absolute bottom-centered
  `.site-btn` "SEE MORE" (`bottom: -30px` — straddles the item's bottom
  edge). Promo banners ("SUPER OFFER", "25% SALE") are part of the images.
- **Products (`.product-section.spad`):** `.product-filter.controls` —
  centered tab list: New arrivals (`.new`) / Recommended (`all`, active) /
  Best sellers (`.best`). 8 `.product-item` (`col-lg-3 col-md-6`, 4-col
  grid, `margin-bottom: 95px`): `figure` image with dark hover overlay +
  `.pi-meta` absolute bottom bar (bg `#414141` — "quick view" + "save"
  actions) + `.product-info` (h6 name, price, one item with strikethrough
  "RRP 64.40" + ADD TO CART). "SEE MORE" `.site-btn` below the grid.
- **Blog (`.blog-section.spad`, bg `#f2f4f9`):** `.bgs-title` h4 "from the
  blog" — uppercase, 700, `margin-bottom: 85px`. 3 `.blog-item` rows:
  `.bi-thumb` image, `.bi-meta` ("July 02, 2018 | By maria deloreen"),
  `.bi-content` (h5 title + excerpt + `.readmore` link — 14px, `#949494`).
- **Footer top (`.footer-top-section.home-footer`, bg `#282828`,
  padding-top 190px):** 5 columns — `about-widget` (brand + blurb "Donec
  vitae purus nunc…") + 4 `footer-widget`s (col-lg-2 col-md-4 col-sm-6):
  h6 "usefull Links" (Partners / Bloggers / Support / Terms of Use / Press),
  h6 "Sitemap" (Partners / Bloggers / Support / Terms of Use / Press), h6
  "Shipping & returns" (About Us / Track Orders / Returns / Jobs / Shipping
  / Blog), h6 "Contact" (Your Company Ltd / 1481 Creekside Lane Avila Beach,
  CA 93424 / +53 345 7953 32453 / office@youremail.com — phone as PLAIN
  TEXT, no `tel:` literals).
- **Copyright bar (`.footer-section`, bg `#222222`, padding 12px):**
  centered: "Copyright © <year> All rights reserved | This template is made
  with ♥ by **Component Dock**" where "Component Dock" links
  https://www.componentdock.com/ (replacing the source's Colorlib credit).
- **Mobile:** source uses slicknav (jQuery) for the mobile menu — implement
  a React hamburger toggle in the header showing the nav links in a dark
  dropdown consistent with the hero/header. Stack the intro cards, featured
  halves, product grid (1/2-col), blog rows, and footer columns below `lg`
  (source uses col-md-6 / col-sm-6 / col-lg-2 breakpoints).
- **Placeholder images:** `https://picsum.photos/seed/boutique-<n>/<w>/<h>`.
  Subject-critical photos (hero fashion model bg; 5 intro products; 2
  featured promos; 8 grid products; 3 blog thumbs) MUST be screened per the
  seed-screening method (pixel metric + browser verify) — fashion/product
  shots are hard to source from picsum, so pick the closest credible seeds
  (fashion, clothing, accessories scenes), pin the verified seeds in the PR
  - this spec, and prefer color-matched flat-lay/product-style photos.
    Icons from `lucide-react` (ShoppingBag, Search, Menu, Eye, Heart, ArrowRight).

## Requirements

### Requirement: Header — logo, nav, cart, search

The system SHALL render an absolutely-positioned header (transparent,
full-width, top of page, z-index above the hero) containing a logo on the
left, a centered nav with the links HOME / WOMAN / MAN / LOOKBOOK / BLOG /
CONTACT (white, 14px, uppercase), and a right cluster with a shopping-bag
icon carrying a "2" badge and a search icon. On mobile a hamburger SHALL
open a dark dropdown menu with the same links.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the top of the page is inspected
- **THEN** it shows the logo, the six nav entries (HOME active by default),
  the cart icon with a "2" badge, and the search icon

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** a dark dropdown with the six nav links appears and can be closed

### Requirement: Hero slider

The system SHALL render a full-width hero (fashion-model background photo,
cover) with a slider of 2 slides, each showing a "from $19.90" eyebrow, a
giant (110px, uppercase, white, weight 400) "2018 summer collection"
headline, and a square dark "Shop NOW!" button. Arrow controls and dots
SHALL navigate between slides.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is inspected
- **THEN** it shows the eyebrow, the headline, and the Shop NOW! button over
  the background photo

#### Scenario: Slide navigation

- **GIVEN** the hero slider is rendered
- **WHEN** the next/previous arrow (or a dot) is activated
- **THEN** the displayed slide changes and the active dot updates

### Requirement: Intro recommended products

The system SHALL render a "Premium products" section (source has the typo
"pemium products" — fix it; 30px uppercase 700 h2, centered) with the
subtitle "We recommend" (18px) and a horizontal slider of 5 product cards.
Each card SHALL show a product photo (optional NEW badge), and on hover a
centered overlay with the product name, price ($319.50), and an ADD TO CART
link.

#### Scenario: Intro cards

- **GIVEN** the intro section is rendered
- **WHEN** the slider is inspected
- **THEN** it shows five product cards (Pink Sunglasses, Black Nighty,
  Yellow Shoulder Bag [NEW], Yellow Sunglasses, Black Shoulder Bag) with
  prices and ADD TO CART links

### Requirement: Featured promos

The system SHALL render two large featured promo panels side by side, each
with a fashion photo framed by a 3px tan (`#b09d81`) border and a big tan
uppercase "SEE MORE" button straddling the panel's bottom edge.

#### Scenario: Featured panels

- **GIVEN** the featured section is rendered
- **WHEN** it is inspected
- **THEN** it shows the two photo panels with tan borders and SEE MORE
  buttons overlapping the bottom edge

### Requirement: Product grid with filters

The system SHALL render a "product" section with a centered filter tab list
(New arrivals / Recommended [active] / Best sellers) and an 8-product grid
(4 columns on desktop). Each product card SHALL show a photo with a
NEW/SALE badge, a hover bar with quick-view and save actions, a name, a
price (one item shows a strikethrough RRP), and an ADD TO CART link. A
"SEE MORE" button SHALL sit below the grid.

#### Scenario: Filter tabs

- **GIVEN** the product grid is rendered
- **WHEN** a filter tab is activated
- **THEN** only the products matching that filter are shown and the active
  tab is highlighted

#### Scenario: Product cards

- **GIVEN** the product grid is rendered
- **WHEN** the cards are inspected
- **THEN** each card shows the image, badge, name, price, and ADD TO CART

### Requirement: Blog section

The system SHALL render a "From the blog" section (uppercase 700 heading)
on a light `#f2f4f9` background with three post rows, each showing a
thumbnail, a title, a date/author meta line, an excerpt, and a Read More
link.

#### Scenario: Blog posts

- **GIVEN** the blog section is rendered
- **WHEN** it is inspected
- **THEN** it shows three posts with thumbnail, title, meta, excerpt, and
  Read More link

### Requirement: Footer

The system SHALL render a dark (`#282828`) footer-top with five columns: an
about widget (brand + blurb), and "Useful Links", "Sitemap", "Shipping &
returns", and "Contact" link/contact columns (address, phone, email). A
darker (`#222222`) copyright bar SHALL read "Copyright © <year> All rights
reserved | This template is made with ♥ by **Component Dock**" where
"Component Dock" links https://www.componentdock.com/ (no Colorlib credit).

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the about widget and the four link/contact columns
  (Useful Links, Sitemap, Shipping & returns, Contact)

#### Scenario: Footer credit

- **GIVEN** the footer bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

## Verification checklist

- [ ] `openspec/specs/template-boutique/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/boutique`, package `@free-react-templates/boutique`, no
      ColorLib references in app code (grep for colorlib/Theplaza in apps/boutique)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh boutique`
- [ ] Section order matches the source: header → hero slider → intro products
      → featured promos → product grid → blog → footer-top → copyright bar
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #b09d81`,
      `--color-ink: #414141`, `--color-muted: #909090`, `--color-surface:
    #ebebeb`, `--color-blog: #f2f4f9`, `--color-footer: #282828`,
      `--color-footerbar: #222222`, `--color-paper: #ffffff`; Google Fonts
      `<link>` in `index.html`: Raleway (400/500/600/700)
- [ ] Header: absolute over hero, logo + nav (HOME / WOMAN / MAN / LOOKBOOK
      / BLOG / CONTACT) + cart icon "2" badge + search icon; mobile
      hamburger → dark dropdown
- [ ] Hero: cover bg photo, 2-slide slider, "from $19.90" eyebrow, 110px
      uppercase "2018 summer collection", square dark Shop NOW! button,
      arrows + dots
- [ ] Intro: "Premium products" (fix the source typo) + "We recommend",
      5-card slider with hover overlay (name / $319.50 / ADD TO CART) and a
      NEW badge on one card
- [ ] Featured: 2 photo panels, 3px `#b09d81` border, tan uppercase SEE MORE
      buttons straddling the bottom edge
- [ ] Product grid: tabs New arrivals / Recommended / Best sellers, 8 cards,
      NEW/SALE badges, hover bar (quick view + save), names + prices (one
      RRP strikethrough), ADD TO CART, SEE MORE below
- [ ] Blog: "From the blog" on `#f2f4f9`, 3 rows (thumb, title, meta,
      excerpt, Read More)
- [ ] Footer: `#282828` top with about + Useful Links / Sitemap / Shipping &
      returns / Contact columns; `#222222` copyright bar with Component Dock
      link; phone as plain text (NO `tel:` literals)
- [ ] Placeholder images via `https://picsum.photos/seed/boutique-<n>/<w>/<h>`,
      subject-screened (hero, 5 intro, 2 featured, 8 grid, 3 blog);
      icons from `lucide-react` (ShoppingBag, Search, Menu, Eye, Heart,
      ArrowRight)
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/theplaza/`), design tokens, diffs (name,
      placeholder images, React sliders instead of owl-carousel, React filter
      instead of mixitup, hamburger instead of slicknav, Component Dock
      footer credit)
