# Template: Codex (Bookshop / Ecommerce Template)

## Purpose

Codex is a single-page bookshop/ecommerce website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Abcbook" website template design (source:
https://colorlib.com/wp/template/abcbook/, preview:
https://preview.colorlib.com/theme/abcbook/), built under a DIFFERENT name
(**Codex** — a codex is a bound ancient book, matching the source's bookstore
theme) per the monorepo naming mandate, with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

TEMPLATES.md has TWO copies of this item (lines 547 in `## Bootstrap 5 (89)`
and 1560 in `## Ecommerce (56)` — duplicate rows); ONE recreation (Codex)
covers both; the implementer marks BOTH rows `[x]`. NOTE: do NOT conflate
with the other bookshop-family ColorLib templates (Booker, Booksaw, Bookson,
Book Store, etc.) — they are SEPARATE templates with their own slugs.

## Design reference (replication findings)

- **Original:** ColorLib "Abcbook" — classic Colorlib Bootstrap 5 single-page
  bookshop template with a warm pale-pink palette, a red (`#FF1616`) brand
  accent, a photo hero slider, book card grids with tabs, two photo CTA
  cards, a newsletter band, and a light footer. Demo brands itself "ABC
  Book"; the recreation uses the NEW name **Codex**.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/abcbook/`
  (HTTP 200, 88,736 bytes HTML). `<title>` = "Book Shop". Master stylesheet
  `assets/css/style.css` (~91 KB, fully extracted for tokens); libs:
  bootstrap 5, owl.carousel, slick, slicknav, wow/animate, magnific-popup,
  nice-select, price_rangs, fontawesome, themify icons. Google Fonts import:
  Playfair Display (400–900) + Roboto (300–900).
- **CSS tokens (from style.css):**
  - Brand red: `#FF1616` — `.btn` background, `.btn_1`, tab `.nav-link.active`
    background, `.price span` (22px/500), `.subscribe-btn`, cart count bubble
    (`.shopping-card::before`), `.subscribe-caption span` label, author `p
span`, footer social hover, `.browse-btn:hover` letter-spacing accent.
    Button hover: `.btn::before` slides a `#cf0f0f` layer in (scaleX
    transition) — recreate as a hover fill/darken on the red pill.
  - Headings: `h1–h6` font-family "Playfair Display", color `#1a1a1a`,
    weight 500 (700 for section tittles / card titles). Section tittle `h2`:
    30px, weight 700, line-height 1.4, margin-bottom 22px; tittle `p`:
    `#6A6063`, 18px, weight 400.
  - Body: `p` font-family "Roboto", color `#301A22`, 16px, weight 300,
    line-height 1.6. Muted/author text: `#9498A7` 14px. Tab idle text:
    `#454E6D`; tab border `#EEE1E0`.
  - Rating stars `.rating i`: `#FF5700` (orange), 13px.
  - Light band `#FEF4F4` = `.section-bg` — used on `.best-selling`, footer
    wrapper, `.slider-area` background, and the `::before` band under
    subscribe. Cards on white (`#fff`); `.properties-caption2` bordered card
    variant with `border: 1px solid #EEE1E0` (border-top 0).
  - Fonts: Playfair Display (headings) + Roboto (body/buttons) via Google
    Fonts `<link>` in index.html.
  - Buttons `.btn`: background `#FF1616`, `border-radius: 35px` (pill),
    padding 22px 32px, white text 16px/500 Roboto, `border: 0`; `.hero-btn`
    variant padding 29px 45px; `.wantToWork-btn` / `.header-btn` same pill.
  - Tabs `.nav-tabs .nav-link`: 16px, `#454E6D`, padding 7px 24px, border
    1px solid `#EEE1E0`, `border-radius: 20px` (pill); active →
    background `#FF1616`, white text, transparent border. Nav has
    `padding-bottom: 40px`, floats right of the section tittle on desktop.
  - Hero: `.slider-height` 580px, bg images cover (`.slider-bg1/2/3`); area
    bg `#FEF4F4`. `.hero-caption` centered: label `span` 14px/300 `#1a1a1a`
    on white pill (`padding: 6px 17px`, `border-radius: 17px`); `h1` white
    60px/400 Playfair line-height 1.2; `.hero-btn` "Browse Store". Dots
    `.dot-style .slick-dots` bottom 28px — 7px white circles, active gets a
    23px white ring.
  - CTA cards `.wantToWork-area`: height 188px, bg image cover (via
    `data-background`), flex space-between; `h2` white 32px/400 Playfair;
    right-aligned `.btn.wantToWork-btn`.
  - Subscribe `.subscribe-area`: `::before` bottom band `#FEF4F4` (45%
    height); `.subscribe-caption` on bg image (`section-bg1.jpg`,
    `data-background`), padding 75px 0; `span` label uppercase 12px
    `#FF1616`; `h3` white 40px/400; input 50px tall, padding 15px 24px,
    `#232F55` text, `border-radius: 25px`, bg `#fff`; `.subscribe-btn`
    `#FF1616`, radius 25px, height 50px, 16px/500.
  - Search `.form-box`: position relative, width 530px (430/360 responsive),
    margin-left 38px; `input` + `.search-icon` (ti-search).
  - Book card `.properties-card`: bg `#fff`; `.properties-img img` width
    100%; caption padding 14px 20px 2px; title `h3 a` 20px/700 `#1a1a1a`;
    author `p` `#9498A7` 14px; footer flex row: `.review` (5 stars +
    "(120 Review)") left, `.price span` `#FF1616` 22px/500 right; card grid
    `col-xl-2 col-lg-3 col-md-4 col-sm-6`.
- **Screenshot:** `abcbook-free-template.jpg` (1200×946, viewed in browser)
  — white top bar with "ABC Book" logo (red open-book icon), search input
  ("Search book by author or publisher name."), FAQ / Track Order links and a
  red "Sign In" pill; nav row Home Categories About Pages Blog Contact; hero
  = dark atmospheric photo of a person holding a glowing golden orb, white
  serif headline "The History of Phipino", tag "Independent Fiction", red
  pill "Browse Books" button, carousel dots; below, "Best Selling Books
  Ever" serif title over pale-pink (`#FEF4F4`) band with a row of book cards
  (cover, title, author, yellow stars, "(120 Reviews)", red price "$50") and
  left/right carousel arrows. Warm, minimalist, curated-bookstore aesthetic;
  serif elegance + clean sans. Footer not visible in shot (from DOM: light
  `#FEF4F4` footer). Demo copy is placeholder (books repeat "Moon Dance" /
  "J. R Rain") — paraphrase into varied bookstore copy.
- **Section order (1:1, from live demo DOM):**
  1. `.main-header > .header-top` — white bar: `.logo` (image) left +
     `.form-box` search ("Search book by author or publisher" + ti-search
     icon); right: FAQ link, Track Order link, `.shopping-card` cart icon
     with red count bubble, `.btn.header-btn` "Sign in".
  2. `.header-bottom.header-sticky` — white sticky row: `.logo2` + centered
     `.main-menu` nav: Home, Categories, About, Pages (submenu: login, Cart,
     Checkout, book Details, Blog Details, Element), Blog, Contect [sic —
     recreate as "Contact"]. Mobile menu (slicknav) on <lg.
  3. `.slider-area` — `.slider-active.dot-style` hero carousel of THREE
     `.single-slider.slider-height.slider-bg1/2/3` (bg image cover, 580px):
     centered `.hero-caption`: pill label span "Science Fiction", `h1` "The
     History<br> of Phipino", `.btn.hero-btn` "Browse Store"; white dot
     indicators bottom.
  4. `.best-selling.section-bg` (bg `#FEF4F4`) — section tittle "Best
     Selling Books Ever" (text-center) + tab nav (All, Horror, Thriller,
     Science Fiction, History) + grid of SEVEN `.properties.pb-20` book
     cards (cover, title, author, 5 stars + "(120 Review)", red price,
     View Details link in `.properties-footer`).
  5. `.services-area2.top-padding` — "Featured This Week" tittle + right
     "View All" `.browse-btn` (underlined link, hover → `#FF1616` +
     letter-spacing) + TWO featured `.properties-card` (`.properties-caption2`
     bordered variant): big cover left, details right — title "The Rage of
     Dragons", "By Evan Winter", price `$50.00`, 5 stars + "(120 Review)",
     "View Details" pill.
  6. `section.our-client.section-padding.best-selling` — "Latest Published
     items" tittle + tab nav + grid of THIRTY `.properties.pb-30` book cards
     (same card anatomy; `properties-caption2` bordered variant) + centered
     "Browse More" `.browse-btn` link.
  7. `section` (container) — TWO `.wantToWork-area.w-padding2.mb-30` photo
     CTA cards side by side (bg images `wants-bg1.jpg` / `wants-bg2.jpg` via
     `data-background`): white `h2` ("The History of Phipino" / "Wilma
     Mumduya") + right-aligned "View Details" pill.
  8. `section.subscribe-area` — `.subscribe-caption` on bg image
     (`section-bg1.jpg`), text-center: "Join Newsletter" white `h3` +
     paragraph + inline form: email input (pill) + "Subscribe" red pill.
  9. `footer .footer-wrappper.section-bg` (bg `#FEF4F4`) — four columns:
     (a) `.footer-logo` + about blurb "Get the breathing space now, and
     we'll extend your term at the other end year for go." + `.footer-social`
     (4 icons); (b)+(c) "Book Category" link list split over two columns —
     History, Horror - Thriller, Love Stories, Science Fiction, Business /
     Biography, Astrology, Digital Marketing, Software Development,
     Ecommerce; (d) "Site Map" — Home, About Us, FAQs, Blog, Contact. Bottom
     bar: copyright "Copyright © <year> All rights reserved | This template
     is made with ♥ by Colorlib" → "© 2026 Codex. All rights reserved." +
     "More templates at Component Dock" link
     (https://www.componentdock.com/).
  - Extra fidelity notes: the source repeats the same book ("Moon Dance",
    "J. R Rain", $50, 120 Review) in every card — use a handful of distinct
    book titles/authors/prices for the same kind of content. "The History of
    Phipino" is the source's placeholder hero/CTA title — keep the same kind
    of copy (book-title headline). The "Latest Published items" section has
    5 tabs × 6 cards (30 cards); render the tabbed grid with ~6-8 cards per
    tab and switch on tab click.

## Requirements

### Requirement: Header top bar

The system SHALL render a white top bar with the brand logo, a search input
with a search icon, FAQ and Track Order links, a cart icon with a count
bubble, and a red "Sign in" pill button.

#### Scenario: Top bar content

- **GIVEN** the page is loaded
- **WHEN** the top bar renders
- **THEN** it SHALL show the brand logo on the left
- **AND** a search input with placeholder "Search book by author or
  publisher" and a search icon SHALL be present
- **AND** FAQ and Track Order links SHALL be present on the right
- **AND** a cart icon with a red count bubble SHALL be present
- **AND** a red "Sign in" pill button SHALL be present

### Requirement: Sticky navigation bar

The system SHALL render a white sticky nav row with the brand logo and the
navigation links Home, Categories, About, Pages, Blog, and Contact.

#### Scenario: Nav links

- **GIVEN** the page is loaded
- **THEN** the nav bar SHALL show the brand logo
- **AND** the nav SHALL contain the links Home, Categories, About, Pages,
  Blog, and Contact

#### Scenario: Pages dropdown

- **WHEN** the Pages nav item is activated
- **THEN** dropdown items Login, Cart, Checkout, Book Details, Blog Details,
  and Element SHALL be revealed

### Requirement: Hero slider

The system SHALL render a full-width hero carousel of three slides, each with
a background photo, a pill category label, a serif headline, a red "Browse
Store" pill button, and white dot indicators.

#### Scenario: Hero content

- **GIVEN** the page is loaded
- **THEN** the hero SHALL show a carousel with at least three slides
- **AND** each slide SHALL show a pill label (e.g. "Science Fiction"), a
  headline, and a "Browse Store" button
- **AND** dot indicators SHALL be visible at the bottom

#### Scenario: Carousel advances

- **WHEN** the next slide is activated
- **THEN** the visible slide SHALL change to the next background and caption

### Requirement: Best Selling Books section

The system SHALL render a "Best Selling Books Ever" section on a pale-pink
background with category tabs and a grid of book cards.

#### Scenario: Best selling content

- **GIVEN** the best selling section is visible
- **THEN** the heading "Best Selling Books Ever" SHALL be shown
- **AND** category tabs All, Horror, Thriller, Science Fiction, and History
  SHALL be shown, with All active by default
- **AND** at least six book cards SHALL render in a responsive grid
- **AND** each card SHALL show a cover image, a title, an author, a star
  rating, a review count, a red price, and a "View Details" link

#### Scenario: Tab switching

- **WHEN** a category tab is activated
- **THEN** the active tab SHALL render with a red background and white text
- **AND** the book grid SHALL show books of that category

### Requirement: Featured This Week section

The system SHALL render a "Featured This Week" section with a "View All"
link and two featured book cards, each with a cover image on one side and
title, author, price, rating, and a "View Details" button on the other.

#### Scenario: Featured content

- **GIVEN** the featured section is visible
- **THEN** the heading "Featured This Week" SHALL be shown
- **AND** a "View All" link SHALL be present
- **AND** exactly two featured cards SHALL render
- **AND** each card SHALL show a cover image, a title, an author line, a
  price, a star rating with review count, and a "View Details" button

### Requirement: Latest Published items section

The system SHALL render a "Latest Published items" section with category
tabs and a grid of book cards, followed by a "Browse More" link.

#### Scenario: Latest published content

- **GIVEN** the latest published section is visible
- **THEN** the heading "Latest Published items" SHALL be shown
- **AND** category tabs SHALL be shown
- **AND** at least six book cards SHALL render per active tab
- **AND** a "Browse More" link SHALL be shown below the grid

### Requirement: Photo CTA cards

The system SHALL render two side-by-side photo CTA cards, each with a
background photo, a white serif headline, and a "View Details" button.

#### Scenario: CTA card content

- **GIVEN** the CTA section is visible
- **THEN** exactly two CTA cards SHALL render side by side
- **AND** each card SHALL show a background photo, a white headline, and a
  "View Details" button

### Requirement: Newsletter subscribe

The system SHALL render a newsletter section with a background photo, a
"Join Newsletter" heading, a paragraph, an email input, and a "Subscribe"
button.

#### Scenario: Subscribe content

- **GIVEN** the subscribe section is visible
- **THEN** the heading "Join Newsletter" SHALL be shown
- **AND** a paragraph SHALL be shown
- **AND** an email input and a "Subscribe" button SHALL be present

### Requirement: Footer

The system SHALL render a light footer with an about blurb and social icons,
a Book Category link list, a Site Map link list, a copyright line, and a
Component Dock link.

#### Scenario: Footer content

- **GIVEN** the page is scrolled to the bottom
- **THEN** the footer SHALL show the brand logo and an about paragraph
- **AND** social icons SHALL be present
- **AND** a "Book Category" column SHALL list History, Horror - Thriller,
  Love Stories, Science Fiction, Business, Biography, Astrology, Digital
  Marketing, Software Development, and Ecommerce
- **AND** a "Site Map" column SHALL list Home, About Us, FAQs, Blog, and
  Contact
- **AND** the copyright line "© 2026 Codex. All rights reserved." SHALL be
  shown
- **AND** a link "More templates at Component Dock" pointing to
  https://www.componentdock.com/ SHALL be present

### Requirement: Full page composition

The system SHALL render all sections in the source's 1:1 order.

#### Scenario: Page section order

- **GIVEN** the page is loaded
- **THEN** the sections SHALL render in this order: header top bar, sticky
  nav, hero slider, best selling, featured this week, latest published,
  CTA cards, subscribe, footer

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec.
- [ ] App folder `apps/codex`, package `@free-react-templates/codex`; NO
      reference to ColorLib / "abcbook" source name in any app file
      (provenance lives only in this spec, TEMPLATES.md, and the PR).
- [ ] Footer links https://www.componentdock.com/ ("More templates at
      Component Dock").
- [ ] `public/CNAME` = `codex.free.componentdock.com`; `"homepage"` =
      https://codex.free.componentdock.com.
- [ ] Brand token `#FF1616` in `@theme`; Playfair Display + Roboto via
      Google Fonts `<link>` in index.html; pill buttons (radius 35px) with
      red bg; tabs pill 20px with red active state; light band `#FEF4F4`
      for best-selling + footer.
- [ ] All sections in the 1:1 order above; header = top bar (logo, search,
      FAQ/Track Order, cart bubble, Sign in) + sticky nav with Pages
      dropdown; hero = 3-slide carousel with dots; best selling = tabs +
      card grid on `#FEF4F4`; featured = 2 detail cards; latest published =
      tabs + grid + Browse More; CTA = 2 photo cards; subscribe = photo
      band + email form; footer light with Book Category / Site Map.
- [ ] Placeholder images via `https://picsum.photos/seed/codex-<n>/<w>/<h>`
      (hero bg ×3, book covers ×~10, featured ×2, CTA ×2, subscribe band,
      footer logo); icons from lucide-react or inline SVG brand icons (never
      copy source assets). Verify hero/CTA seed subjects visually before
      pinning.
- [ ] 100% coverage (lines/functions/branches/statements) via
      `npm run test:coverage`; typecheck, lint, build all green.
- [ ] Both TEMPLATES.md "Abcbook" rows (lines 547 and 1560) marked `[x]`
      with surge URL in bookkeeping.
