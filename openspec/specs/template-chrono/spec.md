# Template: Chrono (Ecommerce — Watch Store)

## Purpose

Chrono is a single-page watch-store eCommerce template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Timezone" watch store template design (see TEMPLATES.md, line
514 under **Bootstrap (216)** — duplicate rows at line 1607 under **Ecommerce
(56)** and line 1735 under **Fashion (43)**, same template, ONE app only),
built under a different name ("Chrono" — a chronograph/watch-brand word,
matching the source's timepiece-store positioning) with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

## Design reference (replication findings)

- **Original:** ColorLib "Timezone" — free watch store / eCommerce HTML
  template (source: https://colorlib.com/wp/template/timezone/). Single page:
  a white sticky header (logo "Time Zone." — "Time" black + "Zone" red — left,
  centered nav Home / shop / about / Latest (red "HOT"/"NEW" badge) / Blog /
  Pages / Contact, right cluster: search + user (login) + cart icons), a
  2-slide hero slider on a light-grey `#f0f0f2` background (left: 96px bold
  headline "Select Your New Perfect Style" + paragraph + dark "Shop Now"
  button; right: large watch photo with a red vertical stripe behind it),
  a "New Arrivals" product row (3 cards: photo, name, red price), a mosaic
  gallery (4 photo tiles: 2 big 690px + 2 small 330px, hover overlay +
  zoom), a "Popular Items" section (centered title + intro paragraph + 6
  product cards in a 3-col grid with hover "Add to cart" bar + heart icon,
  sort select, "View More Products" button below), a full-width video banner
  (background photo, 700px tall, centered round play button), a "Watch of
  Choice" feature (2 alternating image+text rows: 56px heading + paragraph +
  red "Show Watches" button), a red `#ea0000` shop-methods band (3 columns:
  Free Shipping Method / Secure Payment System / Returns — icons
  ti-package / ti-unlock / ti-reload), and a white footer (4 columns:
  about-brand blurb + Quick Links + New Products + Support, social icons
  twitter / facebook / behance / globe, copyright bar crediting Colorlib —
  replaced with a Component Dock link).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/timezone/`. DOM fetched
  (`/tmp/timezone-preview.html`, 31,629 bytes) + stylesheet
  `assets/css/style.css` (`/tmp/tz-style.css`, 81,058 bytes) + TEMPLATES.md
  screenshot (`timezone-free-template.jpg`, 1200×946, viewed in the browser).
- **Visual design (screenshot + live DOM + CSS):** clean, modern, minimalist
  luxury-watch-store aesthetic — white header and content sections over a
  light-grey `#f0f0f2` hero; vibrant red `#ff2020` accents (logo "Zone",
  "NEW" badge, product prices, hover states); dark `#4a4a4b` hero CTA;
  large bold Josefin Sans headings; sharp square (radius-0) buttons with a
  sliding-color hover sweep; product imagery is dark/neutral watch and
  accessory photos on white cards; a full red `#ea0000` band separates the
  feature rows from the footer. Source copy is placeholder/Lorem with typos
  ("aorem ixpsacdolor", "elitsf edasd") — paraphrase freely and fix typos,
  keep the same content kinds (nav links, hero headline + paragraph + CTA,
  product names + prices, section intros, footer widget links + blurb,
  shop-method titles).

## Design tokens (from `assets/css/style.css` of the live preview)

- **Brand red:** `#ff2020` — `.btn` background, nav hover, header-icon hover,
  `.single-new-pro .product-caption span` price color, `.popular-items`
  nav-tabs active underline (`#ff5757` variant), `#scrollUp` background,
  `.hero-btn::before` (hover sweep). 15 uses.
- **Dark charcoal:** `#4a4a4b` — `.hero-btn` background (hero CTA) and
  `.btn::before` hover sweep (dark slides over red).
- **Deep navy:** `#002d5b` — `.slider-active button:hover` (hero slider arrow
  hover background).
- **Method band red:** `#ea0000` — `.shop-method-area .method-wrapper`
  background (full-width red band with white icon/title/text).
- **Badge reds:** `#ff003c` (`.hot::before` nav "HOT" badge),
  `#f81f1f` (`.popular-img .img-cap` hover "Add to cart" bar).
- **Ink text:** `#141517` (nav links, Josefin Sans 600), `#000` (headings,
  `.section-tittle h2`, `.watch-details h2`), `#212025` (hero paragraph),
  `#444444` (product names h3, 700 24px), `#777` (body p, Roboto 16px).
- **Muted:** `#868c98` (footer blurb p), `#999999` / `#888888` (misc meta).
- **Light surfaces:** `#f0f0f2` (`.slide-bg` hero background), white `#fff`
  (header, sections, footer), `#f2f2f2` (sort select background).
- **Fonts (Google import in style.css):** `'Josefin Sans'` (200–700) for
  `h1`–`h6`, nav, buttons, prices, `.section-tittle h2`; `'Roboto'` (100–700)
  for body `p` and footer headings. (Playfair Display appears in sub-page
  styles only — the single-page homepage uses Josefin Sans + Roboto.)
- **Buttons:** `.btn` — SQUARE (`border-radius: 0px`), uppercase, Josefin
  Sans 600, 16px, `letter-spacing: 0.03em`, `padding: 30px 28px`, bg
  `#ff2020`, white text; `::before` overlay `#4a4a4b` scales in from the
  left on hover (cubic-bezier(0.5,1.6,0.4,0.7), 0.5s). `.hero-btn` — same but
  `padding: 25px 29px`, bg `#4a4a4b`, `::before` `#ff2020` (red sweep in).
- **Header (`.header-area .main-header.header-sticky`):** white, sticky
  (`position: fixed` + white bg + shadow on scroll), `padding: 0 120px`;
  `.main-menu ul li a` — 16px, Josefin Sans 600, `#141517`, `padding: 41px
21px`, hover `#ff2020`; `.header-right span` — 16px icons (search, user,
  cart), hover `#ff2020`; `.hot::before` — "HOT" badge, 10px, bg `#ff003c`,
  white, radius 8px, top right of the "Latest" item.
- **Hero (`.slider-area .slider-active`, 2 slides):** `.slide-bg` bg
  `#f0f0f2`; `.slider-height` min-height 980px (750/500/430 responsive);
  `.hero__caption h1` — 96px (60/50/35/33 responsive), 700, line-height 1.2,
  mb 26px; `.hero__caption p` — 17px, `#212025`, line-height 1.6, mb 60px,
  pr 50px; `.hero__btn` — the dark `.btn.hero-btn` "Shop Now". Right column:
  `.hero__img` watch photo (`.heartbeat` animation), offset left -104px on
  wide screens; a red vertical stripe sits behind the watch (visual from the
  screenshot). Slick arrows bottom-left area (`.slider-active button`,
  hover bg `#002d5b`).
- **Section titles (`.section-tittle`):** `h2` — `#000`, 48px (37/33
  responsive), 700, line-height 1, Josefin Sans; `margin-bottom: 70px`
  (`.mb-70`). Centered variant `.section-tittle.text-center` for Popular
  Items.
- **New products (`.new-product-area.section-padding30`):** padding-top 200px
  / bottom 170px; `.single-new-pro` — image (hover `transform: scale(1.04)`,
  0.4s), `.product-caption h3 a` — `#444444`, 700, 24px; price `span` —
  `#ff2020`, 18px, 500.
- **Gallery (`.gallery-area`):** `container-fluid p-0`; 4 `.single-gallery`
  tiles: 2 × `.big-img` (height 690px) + 2 × `.small-img` (height 330px);
  images as CSS `background-image` (cover); hover: overlay
  `rgba(1,10,28,0.3)` fades in + image scales from 1.06 → 1.
- **Popular items (`.popular-items.section-padding30`):** centered title +
  intro `p`; 6 `.single-popular-items` (3-col, `mb-50`): `.popular-img`
  (hover reveals `.img-cap` bar bg `#f81f1f` with "Add to cart") +
  `.favorit-items` heart icon (`#333333`, 30px) + `.popular-caption` (h3
  `#444444` 24px 700 + price `span` `#444444` 18px 500); sort `.nice-select`
  (bg `#f2f2f2`, radius 30px); `.room-btn.pt-70` "View More Products"
  button below (a `.btn`).
- **Video (`.video-area`):** full-width bg image (`sectin_bg1.png`, cover),
  height 700px, flex-centered `.play-btn` — round white circle with a play
  icon, hover bg `#fff` + red `#ff2020` icon/border.
- **Watch of Choice (`.watch-area.section-padding30`):** 2 rows, alternating
  `.choice-watch-img` (photo) and `.watch-details` (`.padding-130`):
  `.watch-details h2` — `#000`, 56px, 700, line-height 1, mb 40px; `p`
  paragraph; `.btn` "Show Watches" below.
- **Shop methods (`.shop-method-area .method-wrapper`, bg `#ea0000`):** 3
  `.single-method` columns (`padding: 43px 20px 0 45px`): icon (`ti-package`
  / `ti-unlock` / `ti-reload`, 40px, white) + `h6` title (white, Roboto 20px
  700, mb 12px) + `p` (white). DOM titles: "Free Shipping Method", "Secure
  Payment System", and a third whose title is duplicated in the DOM but whose
  icon is `ti-reload` — implement as a returns/refund-style third method
  (e.g. "Return & Exchange Policy") to match the icon.
- **Footer (`.footer-area.footer-padding`, white):** padding-top 150px /
  bottom 120px; 4 columns: brand column (`.footer-logo` + `.footer-pera p`
  `#868c98` 16px line-height 1.8) + 3 `.footer-tittle` columns: "Quick Links"
  (About / Offers & Discounts / Get Coupon / Contact Us), "New Products"
  (Woman Cloth / Fashion Accessories / Man Accessories / Rubber made Toys),
  "Support" (Frequently Asked Questions / Terms & Conditions / Privacy Policy
  / Report a Payment Issue); `h4` — `#000`, 20px, Roboto 500, mb 29px.
  Copyright row: `.footer-copy-right` left + `.footer-social` right
  (twitter, facebook, behance, globe icons). Source credits Colorlib —
  replace with "This template is made with ♥ by **Component Dock**" linking
  https://www.componentdock.com/.
- **Mobile:** source uses slicknav (jQuery) for the mobile menu — implement a
  React hamburger toggle showing the nav links (desktop + mobile navs render
  duplicate links in the DOM — query with `getAllByRole` and index the mobile
  one last). Stack the new-product row (1-col), gallery tiles, popular grid
  (1–2 cols), watch rows, method band, and footer columns below `lg`.
- **Placeholder images:** picsum IDs (picsum has no watch photos — dark/neutral
  accessory-style shots screened by pixel metric + browser verify, 2026-08-15):
  hero = id/250 (vintage camera on piano, dark luxury) + id/460 (lantern, dark),
  new arrivals = id/160 (dark phone) + id/306 (lily on dark water) + id/60
  (dark desk), gallery = id/570 + id/267 + id/349 + id/620, popular = reuse of
  the dark product shots, watch of choice = id/250 + id/460. Icons from
  `lucide-react` (Search, User, ShoppingBag, Heart, Play, Package, CreditCard,
  RefreshCw, Menu, X, ChevronLeft, ChevronRight, Globe) + inline SVG brand
  icons (twitter/facebook/behance) in `BrandIcon.tsx`.

## Requirements

### Requirement: Header — logo, nav, icons, mobile menu

The system SHALL render a white sticky header with the brand logo on the
left, a centered nav (Home / Shop / About / Latest with a red badge / Blog /
Pages / Contact), and a right cluster with search, user, and cart icons. On
mobile a hamburger SHALL open a dropdown with the same nav links.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the top of the page is inspected
- **THEN** it shows the logo, the seven nav entries (Home first), and the
  search, user, and cart icons on the right

#### Scenario: Nav badge

- **GIVEN** the header is rendered
- **WHEN** the nav is inspected
- **THEN** the "Latest" link carries a small red badge (HOT/NEW) and links
  change color to the brand red on hover

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** a dropdown with the seven nav links appears and can be closed

### Requirement: Hero slider

The system SHALL render a 2-slide hero on a light-grey `#f0f0f2` background:
left column with a large bold headline ("Select Your New Perfect Style"), a
short paragraph, and a dark "Shop Now" button (red sweep on hover); right
column with a large watch photo (red vertical stripe behind it). Arrow
controls SHALL navigate between the slides.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is inspected
- **THEN** it shows the headline, the paragraph, the dark "Shop Now" button,
  and the watch image on the right

#### Scenario: Slide navigation

- **GIVEN** the hero slider is rendered
- **WHEN** the next/previous arrow is activated
- **THEN** the displayed slide changes

### Requirement: New Arrivals

The system SHALL render a "New Arrivals" section (black 48px section title)
with three product cards, each showing a product photo, a name, and a red
price, with the photo zooming slightly on hover.

#### Scenario: New product cards

- **GIVEN** the New Arrivals section is rendered
- **WHEN** the cards are inspected
- **THEN** it shows three cards, each with an image, a product name, and a
  red price

### Requirement: Gallery mosaic

The system SHALL render a mosaic gallery of four photo tiles (two large and
two small), each revealing a dark overlay on hover.

#### Scenario: Gallery tiles

- **GIVEN** the gallery section is rendered
- **WHEN** it is inspected
- **THEN** it shows four image tiles in the large/large/small/small mosaic
  layout

#### Scenario: Gallery hover

- **GIVEN** a gallery tile is rendered
- **WHEN** it is hovered
- **THEN** a dark overlay appears over the image

### Requirement: Popular Items

The system SHALL render a "Popular Items" section with a centered title, an
intro paragraph, a sort select, six product cards in a 3-column grid (each
with photo, hover "Add to cart" bar, heart icon, name, price), and a "View
More Products" button below the grid.

#### Scenario: Product grid

- **GIVEN** the Popular Items section is rendered
- **WHEN** the grid is inspected
- **THEN** it shows six product cards in a 3-column layout, each with a
  photo, name, and price

#### Scenario: Card hover

- **GIVEN** a popular product card is rendered
- **WHEN** it is hovered
- **THEN** a red "Add to cart" bar appears over the photo

#### Scenario: View more button

- **GIVEN** the Popular Items section is rendered
- **WHEN** the section bottom is inspected
- **THEN** a "View More Products" button sits below the grid

### Requirement: Video banner

The system SHALL render a full-width video section with a background photo
and a centered round play button.

#### Scenario: Video section

- **GIVEN** the page is rendered
- **WHEN** the video section is inspected
- **THEN** it shows the background photo with a centered circular play button

### Requirement: Watch of Choice

The system SHALL render a "Watch of Choice" feature section with two
alternating rows (image / text, then flipped), each showing a watch photo, a
56px heading, a paragraph, and a red "Show Watches" button.

#### Scenario: Feature rows

- **GIVEN** the Watch of Choice section is rendered
- **WHEN** it is inspected
- **THEN** it shows two rows alternating image and text, each with a
  heading, paragraph, and "Show Watches" button

### Requirement: Shop methods

The system SHALL render a full-width red `#ea0000` band with three columns,
each showing an icon, a title, and a short paragraph (Free Shipping Method,
Secure Payment System, Return & Exchange Policy).

#### Scenario: Method columns

- **GIVEN** the shop-methods band is rendered
- **WHEN** it is inspected
- **THEN** it shows three columns on the red background, each with an icon,
  a title, and a paragraph

### Requirement: Footer

The system SHALL render a white footer with four columns (about-brand blurb,
Quick Links, New Products, Support) and a copyright bar with social icons on
the right; the bar SHALL read "Copyright © <year> All rights reserved | This
template is made with ♥ by **Component Dock**" where "Component Dock" links
https://www.componentdock.com/ (no Colorlib credit).

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the brand blurb column and the three link columns
  (Quick Links, New Products, Support) with their link lists

#### Scenario: Footer credit

- **GIVEN** the footer bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

## Verification checklist

- [ ] `openspec/specs/template-chrono/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/chrono`, package `@free-react-templates/chrono`, no
      ColorLib references in app code (grep for colorlib/Timezone in apps/chrono)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh chrono`
- [ ] Section order matches the source: header → hero slider → New Arrivals →
      gallery mosaic → Popular Items → video banner → Watch of Choice →
      shop-methods band → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #ff2020`,
      `--color-herobtn: #4a4a4b`, `--color-navy: #002d5b`,
      `--color-band: #ea0000`, `--color-ink: #141517`, `--color-muted:
  #868c98`, `--color-herobg: #f0f0f2`, `--color-paper: #ffffff`; Google
      Fonts `<link>` in `index.html`: Josefin Sans (400/600/700) + Roboto
      (400/500/700)
- [ ] Header: white sticky, logo + 7 nav links (Latest with red badge) +
      search/user/cart icons; mobile hamburger → dropdown
- [ ] Hero: `#f0f0f2` bg, 2-slide slider, 96px headline, paragraph, dark
      Shop Now button (red hover sweep), watch image + red stripe, arrows
- [ ] New Arrivals: 48px black title + 3 cards (image, name, red price,
      hover zoom)
- [ ] Gallery: 4-tile mosaic (2 big 690px + 2 small 330px), hover dark
      overlay
- [ ] Popular Items: centered title + intro + sort select + 6 cards (3-col,
      hover "Add to cart" bar + heart icon) + "View More Products" button
- [ ] Video: full-width bg photo + centered round play button
- [ ] Watch of Choice: 2 alternating rows, 56px heading + paragraph + red
      "Show Watches" button
- [ ] Shop methods: full-width `#ea0000` band, 3 columns (Free Shipping /
      Secure Payment / Return & Exchange) with icons
- [ ] Footer: white, brand blurb + Quick Links / New Products / Support
      columns, social icons, copyright bar with Component Dock link
- [ ] Placeholder images via `https://picsum.photos/seed/chrono-<n>/<w>/<h>`,
      subject-screened (hero watch, 3 new arrivals, 4 gallery, 6 popular, 2
      watch-of-choice); icons from `lucide-react` + inline SVG brand icons
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/timezone/`), design tokens, diffs (name,
      placeholder images, React slider instead of slick/owl, hamburger
      instead of slicknav, Component Dock footer credit)
