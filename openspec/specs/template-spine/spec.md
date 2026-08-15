# Template: Spine (Book Shop)

## Purpose

Spine is a single-page book-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Abcbook" template
(source: https://colorlib.com/wp/template/abcbook/), built under a
DIFFERENT name (**Spine** — a book's spine; single lowercase word, no
collision with `apps/`, `openspec/specs/` or `docs/templates/` — verified
2026-08-16), per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript. The page is a bookstore
landing: a full-height background-image hero slider, a "Best Selling Books
Ever" carousel of book cards, a red "Featured This Week" split-card
carousel, a tab-filtered "Latest Published items" book grid, two
red image CTA banners, a "Join Newsletter" subscribe band, and a
pink category footer. Brand look: **vivid red `#FF1616`** on pale pink
`#FEF4F4` / white, Playfair Display serif headings + Roboto body, and
pill-shaped (fully rounded) buttons everywhere.

## Design reference (replication findings)

- **Original:** ColorLib "Abcbook" — a Bootstrap 5 book-shop template in
  the "Bootstrap 5 (89)" series. TEMPLATES.md has ONE copy (line 547), the
  FIRST unprepped item in the checklist. Title of the live page: "Book
  Shop".
- **Preview DOM analyzed (LIVE, fetched via curl AND rendered in a
  browser):** `https://preview.colorlib.com/theme/abcbook/` (HTTP 200,
  88,736 bytes HTML). Stylesheets: `assets/css/bootstrap.min.css` (Bootstrap
  5), `owl.carousel.min.css` (LOADED but UNUSED — the home page's
  carousels are slick, not owl), `slicknav.css` (mobile menu), `animate.min.css`
  (data-animation hero captions), `price_rangs.css` (price-range widget —
  unused on the home page), `magnific-popup.css` (lightbox — unused on home),
  `fontawesome-all.min.css` + `themify-icons.css` (icon fonts — stars,
  search, socials, chevrons, back-to-top), `slick.css` (the carousel engine:
  hero slider + best-selling + featured), `nice-select.css` (unused on
  home), and `assets/css/style.css` (91,551 bytes, the template
  stylesheet — 201 `@media` blocks, fully responsive at Bootstrap
  breakpoints 575/576–767/768–991/992–1199/1200+). JS: jquery 1.12.4,
  popper, bootstrap.min.js (tabs), slick (carousels), plus the template's
  own script which wires `data-background` → inline background-image and
  `data-animation` → animate.css classes. Fonts via Google Fonts `@import`
  in `style.css`: **Playfair Display** (400…) + **Roboto**.
- **Visual design (from live browser render + CSS tokens + the
  TEMPLATES.md screenshot `abcbook-free-template.jpg`):** warm, literary
  bookstore aesthetic. Body background is white; the "Best Selling Books
  Ever" section and the footer wrapper sit on pale pink **`#FEF4F4`**
  (`section-bg`); every primary CTA, the prices, the active filter tab,
  the search icon and the cart-count badge are vivid red **`#FF1616`**.
  Headings are Playfair Display (near-black `#1a1a1a`, serif, high
  contrast); body/UI text is Roboto 16px. Hero = a dark atmospheric book
  photo (night-lit library study with a glowing orb — screenshot shows an
  open book with a golden light) under a narrow centered caption column:
  a small white pill tag, a large white serif H1, and a red pill "Browse
  Store" button; white carousel dots sit at the bottom. Book cards are
  white on the pink band: cover image, serif title, grey author, gold
  star rating + "(120 Review)", red `$50` price. "Featured This Week" is a
  pair of split cards — cover on the left, **solid red** panel on the
  right with white serif title/price and a white-outline pill "View
  Details". Two CTA banners ("The History of Phipino", "Wilma Mumduya")
  are red-on-image cards with white 32px serif headings. The subscribe
  band is a background image with a pink `#FEF4F4` band peeking behind
  its bottom 45% and a white pill input + red pill "Subscribe" button.
  The screenshot (1200×946) matches the live render; its hero slide shows
  slightly different copy (tag "Independent Fiction", button "Browse
  Book") and different carousel covers (Sin Eater, Independent Woman,
  Queen Bee, Moon Dance, Very Nice, Evanesce) — the live DOM is
  authoritative (all three hero slides render the SAME copy: "Science
  Fiction" / "The History of Phipino" / "Browse Store"; the screenshot
  was captured at different carousel positions and/or an older demo
  build).
- **Structure (1:1, section order — all verified in the live DOM):**
  1. **Header.** `header-top`: logo (logo.png) + search form
     `form-box` (530px wide, placeholder "Search book by author or
     publisher", red search icon) + right cluster: "FAQ", "Track Order",
     cart icon with red count badge "0", red pill "Sign in" button.
     `header-bottom` (sticky): logo2 + centered desktop nav
     (`d-none d-lg-block`, `main-menu`): **Home, Categories, About,
     Pages (dropdown submenu: login, Cart, Checkout, book Details, Blog
     Details, Element), Blog, Contect** — NOTE the source typo "Contect"
     (live DOM); the official screenshot renders "Contact"; the
     recreation SHALL render "Contact" (documented divergence — see
     below). Mobile: slicknav-generated collapsible menu
     (`d-block d-lg-none`).
  2. **Hero slider** (`slider-area` → `slider-active dot-style`):
     THREE `single-slider slider-height slider-bg1/2/3` slides, each
     580px tall with a different cover background image
     (`h1_hero1.jpg`/`2`/`3`), centered content in a narrow column
     (`col-xxl-4`): `<span>` pill tag **"Science Fiction"** (white pill,
     dark text), `<h1>` **"The History&lt;br&gt; of Phipino"** (white
     Playfair 60px on xl), `<a class="btn hero-btn">Browse Store</a>`
     (red pill, 29px 45px). ALL THREE slides carry identical copy (ColorLib
     demo quirk — reproduce as-is). Slick dots (white; active dot = 23px
     ring, 2px white border) at bottom: 28px. Optional back-to-top
     floating button exists on the page (fixed, bottom-right).
  3. **Best Selling Books Ever** (`div.best-selling.section-bg` — pale
     pink `#FEF4F4`, padding 95px top / 100px bottom): centered
     `section-tittle` H2 (Playfair 30px 700) then the `selling-active`
     slick carousel (prev/next arrow buttons, absolute, top 50%) of EIGHT
     `properties` book cards: white `properties-card` → `properties-img`
     (cover, full-width) + `properties-caption` (padding 14px 20px 2px):
     title h3 a 20px 700 (hover → red), author p `#9498A7` 14px, footer
     row (flex, space-between): star rating (4 full + 1 half star, gold
     `#FF5700`) + "(120 Review)" grey, and price `$50` in red `#FF1616`
     22px 500. All eight cards repeat the same demo content ("Moon
     Dance" / "J. R Rain" / $50 / (120 Review)) with different covers —
     reproduce the repetition as-is (demo quirk).
  4. **Featured This Week** (`div.services-area2.top-padding` — 120px
     top padding): row with `section-tittle` H2 "Featured This Week"
     (left) + "View All" `browse-btn` (right: `#1a1a1a` 16px 500 with a
     2px `#EEE1E0` underline 11px below; hover → red + letter-spacing
     1px). Below, the `services-active` slick carousel of TWO identical
     `single-services` split cards: left `features-img` (cover,
     best-books1.jpg), right `features-caption` on a **solid red
     `#FF1616`** panel (padding 29px 20px 29px 80px): publisher logo
     (logo.svg), H3 "The Rage of Dragons" (white Playfair 40px 400),
     "By Evan Winter" (white 14px), price "$50.00" (white 32px 500),
     star rating (WHITE stars 16px) + "(120 Review)", and a
     `border-btn` "View Details" (white outline pill, radius 30px,
     padding 17px 39px, transparent bg, white text; hover → text red).
     Both slides identical (demo quirk).
  5. **Latest Published items** (`section.our-client.section-padding` —
     120px/120px, white bg): header row — `section-tittle` H2 "Latest
     Published items" (left) + `nav-button` tab list (right, `float:
right`): pill filter tabs **All / Horror / Thriller / Science
     Fiction / History** (16px `#454E6D`, padding 7px 24px, 1px
     `#EEE1E0` border, radius 20px; ACTIVE tab = red `#FF1616` bg +
     white text, transparent border) — Bootstrap 5 tabs
     (`data-bs-toggle="tab"`, `role="tablist"`). Tab content: five
     `tab-pane` grids (`col-xl-2 col-lg-3 col-md-4 col-sm-6` — 6 across
     on xl), each pane with FIVE `properties` book cards (same card
     anatomy as best-selling, `properties-caption2` variant: 1px
     `#EEE1E0` border, no top border). All five tabs × five cards repeat
     "Moon Dance" (demo quirk). Below the grid: centered red-outline
     pill "Browse More" (`border-btn border-btn2`, 1px `#FF1616`
     border + `#FF1616` text, radius 30px; hover fills red/white).
  6. **CTA banners** (`section` → two `div.wantToWork-area.w-padding2`
     halves, `data-background="wants-bg1.jpg"` / `wants-bg2.jpg` —
     background images set via JS; height 188px, flex space-between,
     white text): left banner H2 **"The History&lt;br&gt; of Phipino"**
     (white Playfair 32px 400) + `btn wantToWork-btn` "View Details"
     (red pill); right banner H2 **"Wilma Mumduya"** + same button.
     `mb-30` between.
  7. **Subscribe** (`section.subscribe-area`): `subscribe-caption
text-center subscribe-padding section-img2-bg` on background image
     `section-bg1.jpg` (via data-background), padding 75px 0; the
     section's `::after` paints a **pale pink `#FEF4F4` band, height
     45%, bottom, z-index -1** (behind the image's lower half). Centered
     narrow column: H3 "Join Newsletter" (white Playfair 40px 400), p
     (grey `#9498A7` 16px, Lorem text), form: white pill email input
     (radius 25px, height 50px, width ~39%, text `#232F55`, placeholder
     "Enter your email") + red pill "Subscribe" button (radius 25px,
     height 50px, width ~21%, `#FF1616` bg, white 16px 500).
  8. **Footer** (`footer.footer-wrappper.section-bg` — pale pink
     `#FEF4F4`; `footer-area.footer-padding` 100px/60px): four columns —
     (a) `col-xl-3`: footer logo (logo2_footer.png), blurb p ("Get the
     breathing space now, and we'll extend your term at the other end
     year for go."), `footer-social` four 40px circle icon links
     (facebook / instagram / linkedin / youtube; grey `#9498A7` with 1px
     border, hover → red bg + white); (b) `col-xl-2` h4 "Book Category"
     (Roboto `#232F55` 17px 700, mb 40px) + links History, Horror -
     Thriller, Love Stories, Science Fiction, Business; (c) `col-xl-2`
     EMPTY h4 (`&nbsp;`) + links Biography, Astrology, Digital
     Marketing, Software Development, Ecommerce; (d) `col-xl-2` h4
     "Site Map" + Home, About Us, FAQs, Blog, Contact. `footer-bottom`
     bar (padding-top 45px): centered copyright line — the source's
     "…made with ♥ by Colorlib" link SHALL be replaced by the mandatory
     monorepo Component Dock credit (footer MUST link
     https://www.componentdock.com/).
- **Images:** 46 `<img>` on the page (logo, cart icon, logo.svg publisher
  mark, footer logo, hero backgrounds, ~8 + ~25 book covers + 2 feature
  covers). All replaced with seeded picsum placeholders
  (`https://picsum.photos/seed/spine-<n>/<w>/<h>`) per replication.md —
  NEVER copy the source assets. Cover aspect: portrait books
  (~1:1.5); feature covers similar; logo.png ≈ small wordmark (text
  "Spine" suffices); logo2_footer.png same.
- **Icons (font-based in source → lucide-react):** `ti-search` → `Search`
  (red, 22px); `fa-star` / `fa-star-half-alt` → `Star` (filled) /
  `StarHalf` (gold `#FF5700`; white inside the red featured panel);
  cart.svg → `ShoppingCart`; `fab fa-facebook/instagram/linkedin-in/
youtube` → lucide `Facebook`, `Instagram`, `Linkedin`, `Youtube`;
  slick arrows → `ChevronLeft` / `ChevronRight`; back-to-top
  `fa-level-up-alt` → `ArrowUp` (optional floating button, fixed
  bottom-right).
- **Carousels:** hero slider = slick fade/auto with dots; best-selling +
  featured = slick with arrows. The recreation MAY implement each as a
  simple scrollable/fadeable row with arrow buttons (monorepo has no
  slick dependency; do NOT add one unless necessary) — keep the
  visual contract: windowed view, arrows, dots on hero, active dot =
  ring.
- **Mobile behavior:** fully responsive (201 media queries, Bootstrap
  breakpoints). Key adaptations: hero H1 shrinks 60 → 50 → 35px and the
  caption column narrows; desktop nav hidden below lg, slicknav mobile
  menu shown; form-box width 530 → 430 → 360 → 347 → 262/289px;
  subscribe input/button widths collapse to 90% stacked (button
  `margin-left: 0`); single-services padding 80px → 40px → 20px;
  wantToWork-area stacks on md+ (two half columns on xl, stacked below);
  book grid 6 → 3 → 2 → 1 columns; tabs wrap with `margin-bottom: 10px`.
  The monorepo recreation uses its standard hamburger mobile menu
  (slicknav has no React equivalent).
- **Screenshot:** `abcbook-free-template.jpg` (1200×946, viewed in
  browser) — pale-pink/white bookshop page; header with search bar, FAQ /
  Track Order links and a red "Sign In" button; hero = dark library photo,
  white pill tag, large white serif headline, red pill button, carousel
  dots; pink "Best Selling Books Ever" band with six book covers and gold
  stars; red prices on every card. Matches the live render + CSS tokens;
  only the hero-slide copy and carousel covers differ (see above).
- **Source quirks to document in the PR (do NOT reproduce):**
  `aria-labelledby` free tab markup is fine (Bootstrap tabs), but the
  demo's `nav-tabs` lacks `aria-selected` sync issues — recreation SHALL
  implement accessible tabs (`role="tablist"/"tab"/"tabpanel"`,
  `aria-selected`, keyboard arrow navigation optional). The nav typo
  "Contect" SHALL be fixed to "Contact" (documented divergence — the
  official screenshot spells it correctly). "Pages" dropdown submenu
  labels are lowercase in the DOM ("login", "book Details", "Element") —
  normalize to sentence case in the recreation.

## Design tokens (from the reference)

| Token              | Value                                                                                                                                                                                                                                                                   | Source                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Brand primary      | **`#FF1616`** (vivid red) — the `.btn` background (global override), prices, active filter tab, search icon, cart badge, footer-social hover, "View All" hover, border-btn2 outline. White `#fff` on it everywhere                                                      | `style.css` (.btn, .nav-tabs .active, .price span…)                                    |
| Section background | **`#FEF4F4`** (pale pink) — `.section-bg` (Best Selling band + footer wrapper) and the subscribe `::after` band (45% height, bottom). Body/other sections: white                                                                                                        | `.section-bg`, `.subscribe-area::after`                                                |
| Headings           | Playfair Display (serif), `#1a1a1a`, weight 500 base / 700 for `section-tittle`; `section-tittle h2` = **30px, weight 700, line-height 1.4, margin-bottom 22px**; hero H1 = **60px white weight 400** (50px lg, 35px below); featured H3 = 40px white 400 (24px small)  | `h1–h3`, `.section-tittle h2`, `.slider-area .hero-caption h1`, `.features-caption h3` |
| Body font          | Roboto 16px; muted `#9498A7` (authors, review counts, placeholders, footer social, subscribe p); secondary `#454E6D` (footer links, inactive tab text, footer text); dark blue `#232F55` (footer h4, subscribe input text); card borders `#EEE1E0`                      | `body`, component rules                                                                |
| Hero tag pill      | White bg, `#1a1a1a` 14px weight 300, padding 6px 17px, **radius 17px**, mb 20px                                                                                                                                                                                         | `.hero-caption span`                                                                   |
| Primary button     | `.btn` global: **`#FF1616` bg, white 16px weight 500, padding 22px 32px, `border-radius: 35px` (pill), border 0, Roboto**; variant paddings: `.hero-btn` 29px 45px, `.header-btn` 25px 34px, `.wantToWork-btn` (float left, mt 6px)                                     | `.btn`, `.hero-btn`, `.header-btn`                                                     |
| Outline button     | `.border-btn`: 1px solid `#fff`, transparent bg, white text, **radius 30px**, padding 17px 39px, 16px 500, letter-spacing 1px; hover text → `#FF1616`. `.border-btn2` (Browse More): 1px `#FF1616` border + text, radius 30px                                           | `.border-btn`, `.border-btn2`                                                          |
| Text link          | `.browse-btn` ("View All"): `#1a1a1a` 16px 500, 2px `#EEE1E0` underline 11px below via `::before`; hover → `#FF1616` + letter-spacing 1px                                                                                                                               | `.browse-btn`                                                                          |
| Book card          | White `properties-card`; caption padding 14px 20px 2px; title 20px 700 (hover → red); author `#9498A7` 14px; rating stars **`#FF5700`** (gold, 4 + half); review `#9498A7`; price **`#FF1616` 22px 500**; `caption2` variant adds 1px `#EEE1E0` border (no top)         | `.properties-card`, `.properties-caption` rules                                        |
| Featured card      | Split: `single-services` **solid `#FF1616`** panel, padding 29px 20px 29px 80px (40px/20px small), flex; caption H3 40px white 400, author 14px white, price 32px 500 white, stars WHITE 16px, `border-btn` white outline                                               | `.single-services`, `.features-caption` rules                                          |
| Filter tabs        | Inactive: `#454E6D` 16px, padding 7px 24px, 1px `#EEE1E0` border, radius 20px; ACTIVE: `#FF1616` bg + white, transparent border                                                                                                                                         | `.nav-button .nav-tabs .nav-link(.active)`                                             |
| CTA banners        | `wantToWork-area`: bg image (wants-bg1/2.jpg), height 188px, padding 40px 50px, white H2 32px 400 (mb 10px), red pill `btn` "View Details"                                                                                                                              | `.wantToWork-area`                                                                     |
| Subscribe          | Caption on bg image `section-bg1.jpg` (padding 75px 0) + `#FEF4F4` band behind bottom 45%; H3 white 40px 400; input: white, radius 25px, height 50px, width 39% (90% mobile), text `#232F55`; button: `#FF1616`, radius 25px, height 50px, width 21% (90% mobile, ml 0) | `.subscribe-area`, `.subscribe-caption` rules                                          |
| Search box         | Width 530px (430/360/347/262 responsive), input: 1px `rgba(35,47,85,.15)` border, radius 30px, height 50px, padding 10px 20px, placeholder `#9498A7`; search icon `#FF1616` 22px                                                                                        | `.form-box` rules                                                                      |
| Cart badge         | Red circle: 24px, `#FF1616` bg, white 12px "0", radius 30px, offset -8px top/right of the cart icon                                                                                                                                                                     | `.shopping-card::before`                                                               |
| Footer             | Wrapper `#FEF4F4`; h4 Roboto `#232F55` 17px 700 mb 40px; links `#454E6D` 14px; social 40px circles, 1px border, `#9498A7`, hover red bg + white; bottom bar padding-top 45px, centered                                                                                  | `.footer-tittle`, `.footer-social`, `.footer-bottom`                                   |
| Hero dots          | Slick dots, bottom 28px; active dot = 23px circle with 2px white border ring (radius 50%)                                                                                                                                                                               | `.dot-style .slick-dots`                                                               |
| Icons              | lucide: `Search`, `Star`/`StarHalf`, `ShoppingCart`, `Facebook`, `Instagram`, `Linkedin`, `Youtube`, `ChevronLeft`/`ChevronRight`, `ArrowUp` (back-to-top)                                                                                                              | preview HTML icon classes → lucide mapping                                             |

## Requirements

### Requirement: Page composition

The system SHALL render the full single-page bookshop landing with every
section in the reference order, inside a main landmark, with a document
title.

#### Scenario: Full page render

- **GIVEN** the Spine app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render, in order: header, hero slider, Best
  Selling Books Ever, Featured This Week, Latest Published items, two CTA
  banners, Join Newsletter subscribe band, and footer
- **AND** the document title SHALL be "Spine — Book Shop"
- **AND** the page SHALL NOT reference ColorLib anywhere in app code
  (comments included)

### Requirement: Header

The system SHALL render the two-row header: top utility row (logo, search,
FAQ / Track Order, cart, Sign in) and the sticky main nav row.

#### Scenario: Header top row

- **GIVEN** the page is rendered
- **WHEN** the header loads
- **THEN** a logo SHALL appear at the left (recreation: brand wordmark
  "Spine")
- **AND** a search input SHALL appear next to it with placeholder "Search
  book by author or publisher", a 30px-radius pill border, and a red
  `#FF1616` search icon (lucide `Search`) inside it
- **AND** the right cluster SHALL show, in order: "FAQ", "Track Order",
  a cart icon (lucide `ShoppingCart`) with a red circular badge "0"
  (24px, `#FF1616` bg, white 12px), and a red pill "Sign in" button
  (`#FF1616`, white 16px, radius 35px, padding ~25px 34px)

#### Scenario: Header bottom nav

- **GIVEN** the header is rendered on a desktop viewport (≥ 992px)
- **THEN** a centered nav SHALL show: Home, Categories, About, **Pages**
  (with a dropdown submenu: Login, Cart, Checkout, Book Details, Blog
  Details, Element), Blog, and **Contact**
- **AND** the source DOM's misspelling "Contect" SHALL be rendered as
  "Contact" (documented divergence — the official screenshot spells it
  correctly)
- **AND** the nav SHALL be hidden below 992px in favor of a hamburger
  mobile menu (the monorepo standard — replaces slicknav)

### Requirement: Hero slider

The system SHALL render the full-width 580px hero slider with three
identical slides, each with a dark background image, the pill tag, the
serif headline (with the source's `<br>` line break), the red Browse Store
button, and white carousel dots.

#### Scenario: Hero slide content

- **GIVEN** the hero slider is rendered
- **THEN** the slider SHALL contain three slides, each 580px tall with a
  DIFFERENT cover background image (seeded picsum, `background-size:
cover`, centered)
- **AND** each slide SHALL show, centered in a narrow column: a white
  pill tag "Science Fiction" (white bg, `#1a1a1a` 14px weight 300,
  padding 6px 17px, radius 17px), the H1 "The History of Phipino"
  (white Playfair, 60px on xl / 50px lg / 35px small, weight 400) with
  the line break between "History" and "of Phipino", and a red pill
  "Browse Store" button (radius 35px, padding 29px 45px)
- **AND** all three slides SHALL carry identical copy (source demo
  quirk — reproduce as-is, do NOT invent different slide text)

#### Scenario: Slider behavior and dots

- **GIVEN** the hero slider is rendered
- **WHEN** the slider cycles or the user activates a dot
- **THEN** exactly one slide SHALL be visible at a time, with white dots
  at the bottom (bottom ~28px) reflecting the active slide
- **AND** the active dot SHALL be a 23px ring (2px white border circle);
  inactive dots smaller/solid
- **AND** the slides SHALL auto-advance (slick default) — auto-play is
  acceptable; manual dot navigation MUST work

### Requirement: Best Selling Books Ever

The system SHALL render the pale-pink best-selling band with a centered
serif section title and a horizontally scrollable row of eight book cards
with arrow buttons.

#### Scenario: Section header

- **GIVEN** the Best Selling section is rendered
- **THEN** its background SHALL be pale pink `#FEF4F4`
- **AND** a centered H2 "Best Selling Books Ever" SHALL show (Playfair,
  30px, weight 700, margin-bottom 22px; section vertical padding ~95px
  top / 100px bottom)

#### Scenario: Book cards

- **GIVEN** the carousel row is rendered
- **THEN** eight book cards SHALL be present, each: a portrait cover
  image (seeded picsum), the title "Moon Dance" (20px 700 `#1a1a1a`,
  hover → `#FF1616`), the author "J. R Rain" (`#9498A7` 14px), a rating
  of four filled gold stars + one half star (lucide `Star`/`StarHalf`,
  `#FF5700`), "(120 Review)" (`#9498A7`), and the price "$50" in red
  `#FF1616` 22px weight 500
- **AND** the caption area SHALL be white with padding 14px 20px 2px and
  a card footer row (flex, space-between) holding rating+reviews on the
  left and price on the right
- **AND** the eight cards SHALL repeat the same demo content (source
  quirk — reproduce; only cover seeds differ)
- **AND** left/right arrow buttons (lucide `ChevronLeft`/`ChevronRight`,
  absolute, vertically centered) SHALL scroll the row by one window

### Requirement: Featured This Week

The system SHALL render the red split-card featured carousel with the
"Featured This Week" title row and a "View All" text link.

#### Scenario: Title row

- **GIVEN** the Featured section is rendered
- **THEN** an H2 "Featured This Week" SHALL appear at the left (Playfair
  30px 700) and a "View All" link at the right: `#1a1a1a` 16px 500 with a
  2px `#EEE1E0` underline 11px below; hover → `#FF1616` + letter-spacing
  1px
- **AND** the section SHALL have 120px top padding on a white background

#### Scenario: Red split cards

- **GIVEN** the featured carousel is rendered
- **THEN** two cards SHALL be present, each split horizontally: a cover
  image on the left and a **solid red `#FF1616`** panel on the right
  (padding 29px 20px 29px 80px on desktop, 40px/20px on smaller) with a
  publisher mark (recreation: small "Spine" wordmark or the seeded logo),
  the H3 "The Rage of Dragons" (white Playfair 40px 400, 24px small),
  "By Evan Winter" (white 14px), the price "$50.00" (white 32px 500), a
  WHITE star rating (16px) + "(120 Review)", and a white-outline pill
  "View Details" button (1px white border, transparent bg, white text,
  radius 30px, padding 17px 39px; hover → text `#FF1616`)
- **AND** both cards SHALL repeat the same content (source quirk)
- **AND** the row SHALL be horizontally scrollable with arrow buttons

### Requirement: Latest Published items

The system SHALL render the tab-filtered book grid: title row, five
category tabs, five tab panels of book cards, and a red-outline Browse
More button.

#### Scenario: Title row and tabs

- **GIVEN** the Latest Published section is rendered (white bg, 120px
  vertical padding)
- **THEN** an H2 "Latest Published items" SHALL appear at the left
- **AND** five pill tabs SHALL appear at the right (wrap on small
  screens): **All, Horror, Thriller, Science Fiction, History** — each
  16px `#454E6D`, padding 7px 24px, 1px `#EEE1E0` border, radius 20px,
  margin-right 8px
- **AND** the ACTIVE tab SHALL be solid red `#FF1616` with white text
  and a transparent border; "All" SHALL be active on load

#### Scenario: Tab panels

- **GIVEN** a tab is activated
- **THEN** its panel SHALL show five book cards in a responsive grid
  (6 across on xl, 3 on lg, 2 on md, 1–2 on sm), each card with the same
  anatomy as Best Selling plus the `caption2` treatment (1px `#EEE1E0`
  border, no top border)
- **AND** switching tabs SHALL swap the visible panel (accessible tabs:
  `role="tablist"` / `tab` / `tabpanel`, `aria-selected` on the active
  tab, keyboard activation with Enter/Space)
- **AND** all five panels SHALL repeat the same "Moon Dance" card content
  (source quirk — only cover seeds differ)

#### Scenario: Browse More button

- **GIVEN** the section is rendered
- **THEN** a centered "Browse More" button SHALL appear below the grid:
  red outline pill (`border-btn2`: 1px `#FF1616` border, `#FF1616` text,
  radius 30px, padding 17px 39px; hover fills `#FF1616` with white text)

### Requirement: CTA banners

The system SHALL render the two promotional banner cards below the grid.

#### Scenario: Banner cards

- **GIVEN** the CTA section is rendered
- **THEN** two banner cards SHALL be present side by side (stacked below
  lg), each ~188px tall on a cover background image (seeded picsum,
  `background-size: 100% 100%`), with white content: left banner H2 "The
  History of Phipino" (line break preserved; white Playfair 32px 400,
  margin-bottom 10px) and right banner H2 "Wilma Mumduya"
- **AND** each banner SHALL show a red pill "View Details" button
  (`btn`: `#FF1616` bg, white, radius 35px) at its right side (flex,
  space-between)
- **AND** the banners SHALL have ~30px bottom margin

### Requirement: Subscribe newsletter

The system SHALL render the Join Newsletter band: background image, pink
band behind the lower half, white serif heading, grey copy, and the pill
email form.

#### Scenario: Subscribe band

- **GIVEN** the subscribe section is rendered
- **THEN** the caption SHALL sit on a cover background image (seeded
  picsum) with 75px vertical padding, with a pale pink `#FEF4F4` band
  behind the bottom 45% of the section (z-index behind the image)
- **AND** a centered H3 "Join Newsletter" SHALL show (white Playfair 40px
  400, margin-bottom 22px) above grey 16px copy (`#9498A7`)
- **AND** a form SHALL show: a white pill email input (radius 25px,
  height 50px, width ~39% desktop / 90% mobile, text `#232F55`,
  placeholder "Enter your email") and a red pill "Subscribe" button
  (`#FF1616` bg, white 16px 500, radius 25px, height 50px, width ~21%
  desktop / 90% mobile, stacked with no left margin on mobile)
- **AND** submitting the form SHALL prevent default and SHALL NOT
  navigate (no backend; a submitted state or no-op is acceptable per
  monorepo form conventions)

### Requirement: Footer

The system SHALL render the four-column pink footer with the mandatory
Component Dock credit.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **THEN** the footer wrapper SHALL be pale pink `#FEF4F4` with 100px top
  / 60px bottom padding
- **AND** column 1 SHALL show the footer logo ("Spine" wordmark), a short
  blurb paragraph, and four 40px circular social icon links (lucide
  Facebook, Instagram, Linkedin, Youtube; grey `#9498A7`, 1px border;
  hover → `#FF1616` bg + white)
- **AND** column 2 SHALL show h4 "Book Category" (Roboto `#232F55` 17px
  700, margin-bottom 40px) with links History, Horror - Thriller, Love
  Stories, Science Fiction, Business
- **AND** column 3 SHALL show the same h4 treatment (empty heading is
  acceptable) with links Biography, Astrology, Digital Marketing,
  Software Development, Ecommerce
- **AND** column 4 SHALL show h4 "Site Map" with links Home, About Us,
  FAQs, Blog, Contact
- **AND** all footer links SHALL be `#454E6D` 14px

#### Scenario: Copyright bar

- **GIVEN** the footer bottom bar is rendered (padding-top 45px, centered)
- **THEN** it SHALL show the copyright line with the current year
- **AND** the credit SHALL link to `https://www.componentdock.com/`
  branded as "Component Dock" (mandatory monorepo footer rule — replaces
  the source's Colorlib credit; NO ColorLib reference anywhere)

### Requirement: Mobile behavior

The system SHALL reproduce the source's responsive behavior at Bootstrap
breakpoints.

#### Scenario: Responsive adaptations

- **GIVEN** the page is rendered on a narrow viewport
- **THEN** the hero H1 SHALL shrink (60px → 50px → 35px) and the caption
  column SHALL narrow
- **AND** the desktop nav SHALL be replaced by a hamburger menu
- **AND** the search box SHALL shrink (530px → ~262px on small phones)
- **AND** the CTA banners and the book grid SHALL stack/reflow
  (6 → 3 → 2 → 1 columns)
- **AND** the subscribe input and button SHALL stack at 90% width

### Requirement: Accessibility

The system SHALL expose semantic structure and accessible interactive
controls.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **THEN** the page SHALL use one `main` landmark for the page content
- **AND** the filter tabs SHALL be exposed as a tablist with
  `role="tab"`/`aria-selected` and labelled tabpanels
- **AND** every button and nav link SHALL be keyboard-focusable and
  activated with Enter/Space
- **AND** carousel arrow buttons SHALL carry aria-labels ("Previous
  slide"/"Next slide" or equivalent)
- **AND** the nav SHALL expose the current page state where applicable
  (monorepo standard header)

### Requirement: Footer link policy

The footer SHALL contain a link to https://www.componentdock.com/.

#### Scenario: Component Dock link

- **GIVEN** the page is rendered
- **WHEN** the footer area loads
- **THEN** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-spine`
- [ ] Document title "Spine — Book Shop"; NO ColorLib references in app
      code; footer links https://www.componentdock.com/ ("Component Dock")
- [ ] Header: logo + search pill (placeholder "Search book by author or
      publisher", red `Search` icon) + FAQ / Track Order + cart icon with
      red "0" badge + red pill "Sign in"; sticky nav Home, Categories,
      About, Pages (dropdown), Blog, Contact (NOT the source's "Contect")
- [ ] Hero: 3 identical slides, 580px, distinct cover backgrounds,
      white pill tag "Science Fiction", white Playfair H1 "The History of
      Phipino" with the `<br>`, red pill "Browse Store" (29px 45px);
      dots with 23px ring active dot; auto-advance + dot navigation
- [ ] Best Selling: `#FEF4F4` band, centered H2 30px 700, 8 cards
      (cover + "Moon Dance" 20px 700 + "J. R Rain" + 4½ gold stars
      `#FF5700` + "(120 Review)" + red "$50" 22px 500), arrows scroll
- [ ] Featured: H2 + "View All" (2px `#EEE1E0` underline, hover red);
      2 split cards — cover left, solid `#FF1616` right panel with white
      40px H3 "The Rage of Dragons", "By Evan Winter", "$50.00" white
      32px, white stars, white-outline pill "View Details" (radius 30px)
- [ ] Latest Published: H2 + tabs All / Horror / Thriller / Science
      Fiction / History (pill, 1px `#EEE1E0`, radius 20px; active red
      `#FF1616`); 5 panels × 5 cards (caption2 border), accessible tab
      semantics; centered red-outline "Browse More" pill
- [ ] CTA banners: two 188px image cards — "The History of Phipino" +
      "Wilma Mumduya", white Playfair 32px, red pill "View Details"
- [ ] Subscribe: image bg + `#FEF4F4` bottom band, white H3 "Join
      Newsletter" 40px, grey p, white pill input (radius 25) + red pill
      "Subscribe" (radius 25); submit prevents default
- [ ] Footer: `#FEF4F4` wrapper, 4 columns (logo/blurb/social circles,
      Book Category, categories 2, Site Map), h4 `#232F55` 17px 700,
      links `#454E6D`; bottom copyright bar with Component Dock credit
- [ ] Responsive: hero H1 60→35px, hamburger menu <992px, search 530→262px,
      banners stack, grid 6→1 cols, subscribe stacked 90%; lucide icons
      (Search, Star/StarHalf, ShoppingCart, socials, chevrons)
- [ ] 100% coverage; per-app gate passes; PR description states: source
      template (ColorLib Abcbook), preview URL
      (`https://preview.colorlib.com/theme/abcbook/`), design tokens
      (`#FF1616`, `#FEF4F4`, Playfair Display + Roboto, pill buttons),
      source quirks (identical hero slides, repeated "Moon Dance" cards,
      "Contect" typo fixed), what differs (renames, lucide icons, seeded
      picsum placeholders, accessible tabs/buttons, Component Dock footer)
