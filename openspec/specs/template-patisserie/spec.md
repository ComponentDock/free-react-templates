# Template: Patisserie (Bakery Template)

## Purpose

Patisserie is a single-page dark bakery / cake shop website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Cakeshop" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Cakeshop" — free responsive Bootstrap bakery/cake
  shop website template (source: https://colorlib.com/wp/template/cakeshop/).
  TEMPLATES.md has TWO copies of this item (line 555 and line 1775 — mark
  BOTH `[x]` when done). Both rows use the correct screenshot
  (`cakeshop-colorlib-template.jpg`).
- **Demo DOM analyzed:** REACHABLE. `https://preview.colorlib.com/theme/cakeshop/`
  returns HTTP 200 (curl verified 2026-08-13, 29.2 KB HTML). Page title:
  "Cake | Template". This is a FULL-fidelity reference: section order, copy,
  buttons all taken from the live DOM. Token source: `assets/css/style.css`
  (69.5 KB; the preview is the "Schilers" family theme — the demo copy
  mentions "Schilers" in the About heading, keep the copy kind but the
  recreation brand is Patisserie).
- **Screenshot:** `cakeshop-colorlib-template.jpg` (1200×946, browser vision
  verified) — matches the live DOM: DARK theme (near-black `#0a0a0a` page
  background), muted gold `#E5BF4A` accent, white text. Screenshot shows (top
  to bottom): thin top bar (social icons left, "Call Us" right), centered
  gold script logo, centered uppercase white nav (HOME, CAKES, ABOUT, BLOG,
  CONTACT), full-width darkened cupcake hero photo with thin white serif
  headline "Healthy Made Delicious Cake" + rectangular gold "ORDER NOW"
  button (black text, sharp corners), then the dark About section with a
  centered heading + gold underline, and a split row (text left, round
  lattice-crust cake photo right). The screenshot cuts off at the About
  section; the rest of the page structure comes from the live DOM.
- **Visual design (from live preview + browser vision):** sophisticated dark
  bakery aesthetic. Page background near-black **`#0A0A0A`** (`.body-bg`),
  sticky header also `#0A0A0A`. The single accent is muted gold
  **`#E5BF4A`** (buttons, section-title rotated labels, the gold underline
  bar under headings, product hover "Add to cart" bar, blog date badge,
  footer widget h4s, hover states, star ratings). Text is white/`#DFDFDF`.
  Headings use the thin elegant display face **"Poiret One"** (cursive);
  body/nav use **"Jost"** (sans-serif). Buttons are SQUARE (border-radius 0):
  `.btn_1` = gold `#E5BF4A` bg, 1px solid `#2A2A2A` border, `#0A0A0A` text,
  uppercase 15px, padding 22px 41px; hover inverts to transparent bg + gold
  border + gold text. The hero CTA is the large `.hero-btn` (padding 35px
  55px). Section headings (`.section-tittle h2`) are 40px Poiret One in
  `#DFDFDF` with a 100px × 2px centered gold underline bar 29px below
  (`::before`), and each `.section-tittle` carries a ROTATED (-90deg) gold
  uppercase 14px label (letter-spacing .3em) floating at the left edge.
  The demo brands itself "Cakeshop"; the recreation uses the NEW name
  **Patisserie**.

- **Structure (1:1, section order — from the live DOM):**
  1. Header (`div.header-area`) — `div.header-top`: LEFT
     `div.header-info-left` (social icons `header-social`, white 16px, gold
     on hover with a rotateY(180deg) flip), RIGHT `div.header-info-right`
     "Call Us: +10 783 346 4378"; `div.header-bottom.header-sticky`:
     centered logo image (`assets/img/logo/logo.png` — recreated as a gold
     script-ish text wordmark "Patisserie"), centered
     `div.main-menu.d-none.d-lg-block.text-center` nav (uppercase white 15px
     Jost, padding 32px 7px, gold underline ::after animates on hover): Home
     / Cakes / About / Blog (li.has-children with `ul.submenu`: white
     dropdown, 170px, shadow, items Blog / Blog Details / Elements — dark
     `#2A2A2A` text, gold hover) / Contact; mobile `div.mobile_menu`
     (hamburger → slide-down menu). Sticky state bg `#0A0A0A`.
  2. Hero (`div.slider-area` — bg color `#F2F4F8` behind the slide) —
     `div.single-slider.slider-height.slider-bg1` (700px, cover background
     image `assets/img/hero/h1_hero1.jpg` — darkened cupcake photo):
     `div.hero-caption`: `span` white pill badge (white bg, `#2A2A2A` 14px
     text, radius 17px, padding 6px 17px), `h1` "Healthy Made Delicious
     Cake" (70px Poiret One WHITE, line-height 1.2), `p` white 22px/300,
     "Order Now" `a.btn_1.hero-btn` (gold square button, padding 35px 55px).
  3. About (`section.about-area.top-padding`) — centered
     `div.section-tittle.text-center.line.mb-70` (h2 "This is Schilers.
     Awesome Food Theme. Purchase it and eat Burgers." + gold underline);
     `div.row.align-items-center.section-overlay`: LEFT `div.about-caption`
     (h2 `section-tittle3` gold 24px — same headline, then TWO paragraphs of
     lorem), RIGHT `div.about-img` (round lattice-crust cake photo —
     placeholder `patisserie-about`).
  4. Latest Cakes (`div.latest-items-active` — slick carousel, NO section
     heading): FOUR `div.properties.pb-30 > div.properties-card` product
     cards: `div.properties-img` (photo; on hover an `div.img-cap` gold
     overlay bar appears: "Add to cart" `#E5BF4A` bg, `#0A0A0A` text,
     padding 14px 0), `div.properties-caption.properties-caption2` (h3 title:
     "Cashmere Tank + Bag" / "Delightful Lemon" / "Sweet Suprise" /
     "Cashmere Tank + Bag" — paraphrase to cake names), `div.properties-footer
     > div.price` (price "$98.00" in gold 20px, light weight). Carousel
arrows (`button.slick-arrow`) at mid-height sides.
  5. Video (`div.video-area > div.video-wrap.position-relative.section-bg2` —
     cover background `assets/img/gallery/video-bg.jpg`) — centered
     `div.video-icon > a.popup-video.btn-icon`: 100px white circle, gold
     play icon (lucide Play), animated gold pulse ring
     (`border: 100px solid rgba(229,191,74,0.2)`); hover → gold bg + white
     icon. YouTube link in the original — recreate as a decorative button.
  6. Testimonials (`section.customer-section.section-padding`) — centered
     `div.section-tittle.text-center.mb-50` h2 "Food Lover's Say"; THREE
     `div.col-lg-4.col-md-4.col-sm-6.p-0` columns: `div.single-cat.mb-30`
     (border-top 1px solid rgba(255,255,255,0.2)): `div.rating` FIVE gold
     stars (lucide Star), `div.cat-cap` quote (lorem), `div.cat-img`
     (avatar + author "Wilma Mumduya" — same author on all three).
  7. Blog (`div.h1-blog`) — header row
     `div.section-tittle.text-center.mb-90.d-flex.justify-content-between.flex-wrap.align-items-center`:
     h2 "Our Blogs" (left) + "More Blog" `a.btn_1` (right); TWO
     `div.col-xl-6` blog cards: image + gold date badge
     (`.blog_item_date` `#E5BF4A` bg, white text, radius 5px, overhangs the
     image bottom edge) + h3 title ("Tomato, black olive, feta & anchovy
     tart ulla mco laboris" — paraphrase) + meta + gold read link.
  8. Features (`div.single-services.mb-30.mr-10` / `.ml-10` — TWO alternating
     rows, NO section heading): each row = `div.features-img` (photo) +
     `div.features-caption` (h3 "Tomato, black olive, feta & anchovy tart
     ulla mco laboris" + paragraph + "Learn More" `a.browse-btn` — gold
     uppercase 14px/300 with a 2px gold underline below, hover letter-spacing
     grows). Rows flip: image left/text right, then text left/image right.
  9. Instagram (`div.instra` — "Follow us on Instagram" section): centered
     `div.section-tittle` h2 "Follow us on Instagram" + brand handle
     "Cakeshop" (recreate as "@patisserie" gold link); FOUR
     `div.col-lg-3.col-md-6.col-sm-6` cells: `div.instra-img.mb-30` square
     photos (`assets/img/gallery/instra1..4.jpg`).
  10. Footer (`div.footer-wrapper`) — `div.footer-area.footer-padding`
      (dark): `div.footer-menu` centered links (Home / Cakes / About / blog /
      Contact, white 15px, gold hover underline, bottom border
      `rgba(255,255,255,0.2)`, margin-bottom 80px); `div.row
justify-content-between`: (1) `div.single-footer-caption.mb-50` — about
      blurb + social icons (Instagram / Facebook / Twitter, gold hover);
      (2) `div.single-footer-caption.mb-30` — `div.footer-tittle` h4 gold
      "Location" + `p` "4736 Poe Lane, HOT SPRINGS, Montana-59845"; (3)
      `div.single-footer-caption.mb-50` — `div.footer-tittle` h4 gold
      "Contact" + phone "913-473-7000" + email "contact@cakeshop.com" (→
      contact@patisserie.example). `div.footer-bottom-area`:
      `div.footer-border` (border-top rgba(255,255,255,0.2), padding 40px 0)
      - `div.footer-copy-right` p: "Copyright © <year> All rights reserved |
        This template is made with ♥ by Colorlib" — recreation replaces the
        ColorLib credit with the mandatory **Component Dock** footer link
        (https://www.componentdock.com/) per repo conventions, and the
        "Cakeshop" brand becomes "Patisserie".

- **Design tokens (extracted from `assets/css/style.css`):**
  - Brand gold **`#E5BF4A`** — `.btn_1` bg, `.line::before` underline bar,
    section-tittle rotated labels, `section-tittle3` h2, price text, product
    hover "Add to cart" bar, video icon, star ratings, blog date badge,
    footer `footer-tittle` h4, `browse-btn` underline, nav/footer link hover
    (`#E5BF4A`), blog gradient link text.
  - Page/dark surfaces — body bg **`#0A0A0A`** (`.body-bg`), sticky header bg
    `#0A0A0A`, footer dark with white text, testimonial card top border
    `rgba(255,255,255,0.2)`, footer dividers `rgba(255,255,255,0.2)`.
  - Text — headings `#2A2A2A` on light / `#DFDFDF` on dark
    (`.section-tittle h2`), body copy `#545454` (Jost 16px, line-height 1.4),
    white headings/paragraphs in hero/footer.
  - Light surfaces — `#F2F4F8` (slider-area behind the hero photo),
    `#F9F9FF` / `#F0E9FF` / `#FBf9FF` appear in the shared stylesheet (other
    pages) — not used on this page.
  - Fonts — **"Poiret One"** (cursive) for h1–h6 and `.btn`; **"Jost"**
    (sans-serif) for body/nav (`@import` Google Fonts Jost 200–800 + Poiret
    One). Load via Google Fonts `<link>` in `index.html`.
  - Buttons (all border-radius 0): `.btn_1` = `#E5BF4A` bg + 1px solid
    `#2A2A2A` border + `#0A0A0A` text, uppercase 15px, padding 22px 41px;
    hover = transparent bg + gold border + gold text. `.hero-btn` = same but
    padding 35px 55px. `.browse-btn` = gold uppercase 14px/300 with 2px gold
    underline (`::before` width 100% bottom -11px), hover letter-spacing
    1px. `.btn_02` = transparent, 1px solid rgba(255,255,255,0.2) border,
    white text, padding 14px 36px (used in dark contexts). Video icon =
    100px circle white bg + gold icon, pulse ring `rgba(229,191,74,0.2)`.
  - Section rhythm — `section-padding` 120px 0 (100/70 responsive);
    `top-padding` 100px; `footer-padding` 99px top; `line::before` underline
    at bottom -29px; section-tittle labels rotated -90deg at left -36px.
  - Hero — `slider-height` 700px cover image; h1 70px Poiret One white
    (line-height 1.2, margin-bottom 41px); p white 22px/300; caption badge
    white pill (bg `#fff`, `#2A2A2A` 14px, radius 17px, padding 6px 17px).
  - Nav — links uppercase white 15px Jost padding 32px 7px, gold underline
    hover (`::after` 1px animating width 0→100%); dropdown white 170px,
    shadow `0 0 10px 3px rgba(0,0,0,0.05)`, items `#2A2A2A` 15px
    capitalize, gold hover.
  - Footer — `footer-tittle` h4 gold 24px Poiret One; links white 16px/300
    with underline on hover; copy 14px white with gold `i`/`a`.
  - Testimonials — 5 gold stars; card border-top `rgba(255,255,255,0.2)`.
  - Blog — date badge `#E5BF4A` bg white text radius 5px, overhangs image
    bottom (-10px/-20px offset).

- **Recreation decisions:** all photos → picsum placeholders (seeds
  `patisserie-<n>`; hero `patisserie-hero` must look bakery-ish — screen the
  seed, see pitfalls); the YouTube popup link → decorative circular play
  button; logo → gold script-style text wordmark "Patisserie"; fontawesome
  stars/social/play icons → lucide-react (Star, Play, Menu, Instagram,
  Facebook, Twitter, ShoppingBag); the slick carousel for Latest Cakes →
  implement as a horizontally scrollable/simple carousel (CSS scroll or a
  small state-driven carousel — no new dependency); footer ColorLib credit →
  mandatory Component Dock link; brand copy "Cakeshop" → "Patisserie",
  product names paraphrased to cake names, "Schilers" demo headline
  paraphrased to a bakery headline of the same kind.

Patisserie lives in `apps/patisserie` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Dark header with top bar, centered logo and nav

The system SHALL render a dark header with a top info bar, a centered logo
wordmark, a centered uppercase nav (one dropdown), and a mobile hamburger
menu.

#### Scenario: Header layout

- **GIVEN** the Patisserie page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show a top bar with social icons on the left and
  "Call Us: +10 783 346 4378" on the right
- **AND** a centered gold script-style wordmark "Patisserie" SHALL be shown
  below the top bar
- **AND** the centered nav SHALL show the links Home, Cakes, About, Blog,
  and Contact in white uppercase 15px text
- **AND** the header SHALL turn solid `#0A0A0A` when sticky/after scrolling

#### Scenario: Blog dropdown

- **GIVEN** the nav is displayed
- **WHEN** the user hovers or focuses the Blog link
- **THEN** a white dropdown SHALL open with the items Blog, Blog Details,
  and Elements
- **AND** dropdown items SHALL be `#2A2A2A` text that turns gold `#E5BF4A`
  on hover

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the page loads
- **THEN** the nav SHALL collapse behind a hamburger toggle that reveals the
  same links in a slide-down mobile menu

### Requirement: Full-width cupcake hero with gold CTA

The system SHALL render a 700px-tall hero with a cover photo background, a
white pill badge, a thin white display headline, white subcopy, and a large
square gold "Order Now" button.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the hero SHALL show a small white pill badge above the headline
- **AND** the headline "Healthy Made Delicious Cake" SHALL be shown in white
  70px Poiret One
- **AND** a white 22px subcopy line SHALL be shown below the headline
- **AND** a square gold "Order Now" button (gold bg, near-black text,
  uppercase, padding 35px 55px) SHALL be shown

### Requirement: About section with gold underline heading

The system SHALL render a dark About section with a centered heading carrying
a gold underline bar, a caption column with a gold h2 and two paragraphs, and
a round cake photo.

#### Scenario: About content

- **GIVEN** the About section is displayed
- **WHEN** the page loads
- **THEN** a centered 40px heading SHALL be shown with a 100px gold underline
  bar centered 29px below it
- **AND** the caption column SHALL show a gold 24px h2 and two paragraphs of
  copy
- **AND** a round cake photo SHALL be shown in the right column

### Requirement: Latest Cakes product carousel

The system SHALL render a carousel of four product cards, each with a photo,
a hover "Add to cart" gold bar, a title, and a gold price, with side arrows.

#### Scenario: Product cards

- **GIVEN** the Latest Cakes carousel is displayed
- **WHEN** the page loads
- **THEN** four product cards SHALL be shown, each with a photo, a cake name
  title, and a gold "$98.00" price
- **AND** hovering a card SHALL reveal a gold "Add to cart" bar over the
  photo (`#E5BF4A` bg, near-black text)
- **AND** side arrow controls SHALL be shown at mid-height for moving
  between cards

### Requirement: Video section with pulsing play button

The system SHALL render a full-width background-photo band with a centered
100px circular play button with a gold pulse ring.

#### Scenario: Video band

- **GIVEN** the video section is displayed
- **WHEN** the page loads
- **THEN** a full-width cover background photo SHALL be shown
- **AND** a centered 100px white circle with a gold play icon and a
  translucent gold pulse ring SHALL be shown on top
- **AND** hovering the circle SHALL fill it gold with a white icon

### Requirement: "Food Lover's Say" testimonial cards

The system SHALL render a centered "Food Lover's Say" heading and three
testimonial cards, each with five gold stars, a quote, an avatar, and the
author name.

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is displayed
- **WHEN** the page loads
- **THEN** the heading "Food Lover's Say" SHALL be shown centered
- **AND** three cards SHALL be shown in a row, each with five gold stars, a
  quote, a circular avatar, and the author name "Wilma Mumduya"

### Requirement: Our Blogs heading with two blog cards

The system SHALL render a "Our Blogs" heading with a "More Blog" button on
the right and two blog cards below, each with a photo, a gold date badge, a
title, meta, and a gold read link.

#### Scenario: Blog section content

- **GIVEN** the blog section is displayed
- **WHEN** the page loads
- **THEN** the heading "Our Blogs" SHALL be shown on the left and a gold
  square "More Blog" button on the right of the same row
- **AND** two blog cards SHALL be shown side by side, each with a photo, a
  gold date badge overhanging the photo's bottom edge, a title, meta text,
  and a gold "Read more"-style link

### Requirement: Alternating feature rows

The system SHALL render two alternating image/caption feature rows, each with
a photo, an h3 title, a paragraph, and a gold "Learn More" underline link.

#### Scenario: Feature rows

- **GIVEN** the features section is displayed
- **WHEN** the page loads
- **THEN** two rows SHALL be shown with the image on the right in the first
  row and on the left in the second row (alternating)
- **AND** each row SHALL show an h3 title, a paragraph, and a gold uppercase
  "Learn More" link with a 2px gold underline

### Requirement: Instagram grid with handle

The system SHALL render a "Follow us on Instagram" heading with the brand
handle and a four-column grid of four square photos.

#### Scenario: Instagram section content

- **GIVEN** the Instagram section is displayed
- **WHEN** the page loads
- **THEN** the heading "Follow us on Instagram" and a gold "@patisserie"
  handle SHALL be shown centered
- **AND** four square photos SHALL be shown in a four-column grid

### Requirement: Footer with links, widgets, and Component Dock credit

The system SHALL render a dark footer with centered menu links, an about
blurb with social icons, Location and Contact widgets, and a copyright bar
linking Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** the centered footer menu SHALL show Home, Cakes, About, Blog, and
  Contact links above a translucent divider
- **AND** the first column SHALL show an about blurb and Instagram, Facebook,
  and Twitter icons that turn gold on hover
- **AND** the Location widget SHALL show a gold "Location" heading with the
  address "4736 Poe Lane, HOT SPRINGS, Montana-59845"
- **AND** the Contact widget SHALL show a gold "Contact" heading with a phone
  number and an email address
- **AND** the copyright bar SHALL credit Component Dock with a link to
  https://www.componentdock.com/

### Requirement: Square gold button styling

The system SHALL style primary buttons as square gold blocks with
near-black uppercase text that invert to outline style on hover.

#### Scenario: Button appearance and hover

- **GIVEN** a primary gold button is displayed
- **WHEN** the page loads
- **THEN** the button SHALL have a `#E5BF4A` background, a 1px solid
  `#2A2A2A` border, `#0A0A0A` uppercase 15px text, padding 22px 41px, and
  zero border-radius
- **AND** on hover the button SHALL become transparent with a gold border
  and gold text

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Patisserie app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero, About, Latest Cakes,
  video, testimonials, blog, features, Instagram, and footer in order
- **AND** the document title SHALL be "Patisserie — Bakery Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/patisserie`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/patisserie`)
- [ ] Section order matches the reference 1:1 (header → hero → About → Latest Cakes → video → testimonials → blog → features → Instagram → footer)
- [ ] Design tokens in `@theme` (brand gold #E5BF4A, page dark #0A0A0A, Poiret One + Jost font stacks)
- [ ] Header: dark, top bar (social left + "Call Us" right), centered "Patisserie" gold wordmark, centered uppercase nav (Home/Cakes/About/Blog/Contact) with Blog dropdown, hamburger on mobile, `#0A0A0A` sticky bg
- [ ] Hero: 700px cover photo (darkened), white pill badge, 70px Poiret One white h1, white 22px subcopy, square gold "Order Now" (hero padding 35px 55px)
- [ ] About: centered 40px heading + 100px gold underline bar, gold 24px caption h2 + 2 paragraphs, round cake photo right
- [ ] Latest Cakes: 4 product cards (photo, title, gold price), hover gold "Add to cart" bar, side arrows
- [ ] Video: full-width bg photo + 100px white circle gold play icon + gold pulse ring, hover fills gold
- [ ] Testimonials: "Food Lover's Say", 3 cards (5 gold stars, quote, avatar, Wilma Mumduya)
- [ ] Blog: "Our Blogs" + "More Blog" button same row, 2 cards (photo, gold date badge, title, meta, gold link)
- [ ] Features: 2 alternating rows (image right / image left), h3 + paragraph + gold "Learn More" underline link
- [ ] Instagram: "Follow us on Instagram" + "@patisserie" handle + 4-col photo grid
- [ ] Footer: centered menu links + divider, about blurb + 3 social icons, Location + Contact gold-headed widgets, copyright bar links Component Dock
- [ ] Buttons: `#E5BF4A` square (radius 0), `#0A0A0A` uppercase text, 1px `#2A2A2A` border; hover → transparent + gold border/text
- [ ] Document title "Patisserie — Bakery Template"
- [ ] BOTH TEMPLATES.md rows marked `[x]` on completion: line 555 and line 1775
