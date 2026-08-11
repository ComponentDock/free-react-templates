# Template: Focal (Blog)

## Purpose

Focal is a single-page blog/magazine website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Revive" website template design (source:
https://colorlib.com/wp/template/revive/), built under a DIFFERENT name
(Focal — a photography-themed word — "focal length" — keeping the
"camera/lifestyle photography" spirit of "Revive" while being a new,
original name) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Revive" — photography/lifestyle blog website
  template (source: https://colorlib.com/wp/template/revive/, category
  "Blog (60)"). Template name: "Revive". NOTE: "Revive" appears TWICE in
  TEMPLATES.md (lines ~283 and ~2211, same source slug) — one
  recreation covers both rows.
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/revive/`) is REACHABLE (HTTP 200,
  ~45.8 KB HTML + `css/main.css` ~46.9 KB parsed for tokens; assets also
  load `css/bootstrap.css`, `css/owl.carousel.css`,
  `css/themify-icons.css`, `css/font-awesome.min.css`,
  `css/linearicons.css`, `css/nice-select.css`,
  `css/magnific-popup.css`). Structure below comes from the live preview
  DOM, which is authoritative.
- **Screenshot analyzed:** TEMPLATES.md screenshot
  (`revive-free-template-1.jpg`, 1200×946) loads fine and matches the
  live DOM: white header with the centered serif wordmark "REVIVE"
  (flanked by horizontal hairlines) and nav links left (Home · Category ·
  Archive) and right (Elements · Blog Detail · Contact); hero split into
  a solid dark-navy left column (vertical social rail of small circular
  icons) + large photography slide (snowman/vintage camera/dried
  botanicals still life) + narrower right photo; below the images a dark
  navy block with the white serif tagline "Make the world a better place
  with camera" and numbered slider dots (1–5) with arrows to the right;
  then a 2-column blog-card grid (photo cards) with a light-gray sidebar
  starting with the "Search Posts" widget and an "Instagram" thumbnail
  grid. Aesthetic: elegant, minimalist, editorial magazine; deep dark
  navy #13113a + white/#f9f9ff + photography; serif Playfair Display
  headings with Open Sans body.
- **Section order (1:1, from live preview DOM):**
  1. Header (`header.header-area`, white bg, `div.header-top` flex row):
     left `div.menu-left` links — Home (`.active`) · Category · Archive
     (Playfair Display, italic, bold, 14px, #000 → hover/active
     #13113a; hidden below 992px); center logo
     (`span.logo-outer > span.logo-inner > img.logo` — centered
     wordmark image with 1px #13113a horizontal hairlines flanking it:
     `logo-outer:before/:after` 120px wide at bottom, `logo-inner`
     lines 80px — implement as the wordmark "Focal" in Playfair Display
     bold with the flanking lines); right `nav.navbar` (navbar-toggler
     `lnr lnr-menu` for mobile + `div.collapse.menu-right`): `ul.navbar-nav`
     — Home · Category · Pages (dropdown `#navbardrop`: Elements · Blog
     Detail · Contact) · plus two `li.nav-item.hide-lg` links
     (mobile-only duplicates; nav-links are Playfair italic bold 14px
     #000, padding 38px 0, hover/active #13113a; dropdown links italic
     capitalized).
  2. Hero (`section.home-banner-area.relative`): `div.container-fluid`
     (padding-left 28% on desktop) with a `::before` pseudo-element =
     solid **#13113a** navy band, width 73%, height 100%, left 0,
     box-shadow `0 10px 30px rgba(153,153,153,0.3)` — the navy block
     behind the text. Inside: `div.owl-carousel.home-banner-owl` (4
     slides, `div.banner-img` each: full-width photo `img/banner/b1.jpg`
     / `b2.jpg` alternating + `div.text-wrapper` (max-width 700px,
     padding 40px 0, text-align left): `a > h1` white Playfair 36px —
     "Make the world a better place" <br> "with camera"). Slider chrome:
     `div.owl-dots` (absolute right 25% bottom 8%, numbered counters
     01/02/03/04 via CSS `counter-reset`, #13113a bold, active opacity 1)
     and `div.owl-nav` (prev/next arrows, absolute right 22% bottom 8%,
     hidden below 1300px). Left vertical rail `div.social-icons`
     (absolute top 56% left 17%, `transform: rotate(-90deg)`, hidden
     below 1200px): `ul` with 1px #828bb2 hairlines (80px) before/after,
     three circular 30px social buttons (fa facebook / twitter /
     pinterest — bg #424161, white icon, rotate(90deg) to counter the
     rail, hover → bg white + icon #13113a) + a `li.diffrent` text item
     "sharre now" (source typo — render as "Share Now"; 13px uppercase
     600 white).
  3. Blog posts (`section.blog-post-area.section-gap.relative`, padding
     130px 0): `div.container > div.row`: main `div.col-lg-8` with an
     inner `div.row` of `div.col-lg-6.col-md-6` cards — EIGHT
     `div.single-amenities` (bg #f9f9ff, margin-bottom 60px, hover →
     bg #fff + shadow `0 20px 30px rgba(0,35,71,0.1)`). Card:
     `div.amenities-thumb` (overflow hidden, `img.img-fluid.w-100`
     `img/blog-post/blog-post1..8.jpg`; hover white sweep overlay
     `::before` slides across: `left:110%` → `left:-130%`,
     rgba(255,255,255,0.4), 0.5s) + `div.amenities-details` (padding
     40px): `h5 > a` title (Playfair 18px lh 27px #13113a, e.g.
     "There's goting to be a musical about meghan" / "Forest responds to
     consultation smoking in al fresco." — paraphrase, keep the same
     kind of content), `div.amenities-meta.mb-10` (13px #706f87: `a`
     with ti-calendar icon + "20th Nov, 2018" and `a.ml-20` with
     ti-comment icon + "05"), excerpt `p` ("Creepeth green light appear
     let rule only you're divide and lights moving and isn't given
     creeping deep."), then `div.d-flex.justify-content-between.mt-20`:
     `a.blog-post-btn` "Read More" + ti-arrow-right (transparent,
     uppercase, 12px, 600, #13113a; arrow slides +10px right on hover;
     hover opacity 0.9) and `div.category > a` (ti-folder icon +
     "Travel", #706f87).
  4. Pagination (`nav.blog-pagination.justify-content-center.d-flex`,
     padding-top 10px, inside the col-lg-8 after the grid): `ul.pagination`
     of `li.page-item` — page links "01 02 03 04 09" (`.page-link`:
     transparent, padding 0.5rem, margin 0 2px, color #818bb3, no
     border; active/hover → bg #13113a, white, border-radius 40px pill).
  5. Sidebar (`div.widget-wrap`, `div.col-lg-4`, margin-top 80px on
     mobile): SIX `div.single-sidebar-widget` (padding 50px 30px, bg
     #f9f9ff, margin-bottom 30px):
     - Search (`div.search-widget`): `form.search-form` — input
       `input[type=text]` (80% width, height 40px, padding 11px 22px,
       border none, placeholder "Search Posts" #13113a 80% opacity) +
       `button` (20% width, white bg, fa-search icon, #13113a).
     - Instagram (`div.instafeed-widget`): `h4.instafeed-title`
       "Instagram" (20px 700 #13113a + 2px 80px #13113a underline
       `::after`); `ul.instafeed.d-flex.flex-wrap` — 3-column grid
       (li width 33%, `img` margin 5px) of SIX square photos
       (`img/blog/instagram/i1..6.jpg`).
     - Categories (`div.post-category-widget`): `h4.category-title`
       "Catgories" (source typo — render as "Categories"; same title
       style) + `ul.cat-list.mt-20` — FIVE `li` (white bg, padding
       13px 20px, margin-bottom 15px; `a.d-flex.justify-content-between`
       with name + count, 14px weight 300 #706f87; hover → bg #13113a,
       white text): Fashion 59 · Travel 09 · Lifestyle 24 · Shopping 44 ·
       Food 15.
     - Popular Posts (`div.popular-post-widget`): `h4.popular-title`
       "Popular Posts" (same title style, underline 80px) +
       `div.popular-post-list.mt-20`: FOUR `div.single-post-list`
       (margin-bottom 30px) — `div.thumb` (img) + `div.details`:
       `h6` title (16px lh 26px, hover #13113a, e.g. "Retro-electric
       1967 Ford Mustang revealed in Russia") + `p` "Mate Winston |
       Dec 15".
     - Newsletter (`div.newsletter-widget`): `h4.newsletter-title`
       "Newsletter" (same title style) + centered `p` + `div.col-autos`
       form: `input.form-control` (full width, height 50px, border-radius
       0, font-size 13px #13113a, placeholder "Subscribe") +
       `button.bbtns` "Subscribe" (bg #13113a, white, uppercase 12px
       500, padding 12px 20px, radius 0, hover opacity 0.9). (Source
       label "Subcribe" — fix to "Subscribe".)
     - Share this post (`div.share-widget`): `h4.share-title` "Share
       this post" (same title style) + `div.social-icons` — FOUR 50×50px
       square links (1px solid #706f87 border, #13113a 20px icons:
       ti-facebook / ti-twitter / ti-pinterest / ti-instagram; hover →
       bg #13113a, white).
  6. Footer (`footer.footer-area.section-gap`, bg **#000000**):
     `div.container > div.row` of four columns —
     - About Us (`col-lg-3 col-md-6 col-sm-6`): `h6` "About Us" (white
       18px 600, margin-bottom 25px) + lorem paragraph.
     - Newsletter (`col-lg-4 col-md-6 col-sm-6`): `h6` "Newsletter" +
       `p` "Stay update with our latest" + `form.form-inline`
       (`#mc_embed_signup`): `input.form-control` (80% width, border
       none, bg #191919, padding-left 20px, font-weight 300, uppercase
       12px placeholder "Enter Email" #555555) + `button.click-btn`
       (white bg, #13113a fa-long-arrow-right icon, radius 0).
     - Instagram Feed (`col-lg-4 col-md-4`): `h6` "Instragram Feed"
       (source typo — render as "Instagram Feed") + `ul.instafeed`
       4-column grid (li width 25%, img margin 5px) of EIGHT square
       photos (`img/instagram/i1..8.jpg`).
     - Follow Us (`col-lg-2 col-md-6 col-sm-6`): `h6` "Follow Us" +
       `p` "Let us be social" + `div.footer-social.d-flex` — FOUR brand
       icon links (fa facebook / twitter / dribbble / behance, color
       #555555, padding-right 25px, hover → white).
       Bottom `div.footer-bottom` (d-flex centered): `p.footer-text`
       copyright — "Copyright © All rights reserved | This template is
       made with by Colorlib" (source renders the heart as an inline
       colorlib link image; keep the same line, add ♥ per convention).
- **Design tokens extracted from `css/main.css` + preview DOM:**
  - Brand/ink: **#13113a** (dark navy) — all headings, `.primary-btn`
    bg, `.blog-post-btn` text, active/hover pagination pill, category
    list hover bg, newsletter `.bbtns` bg, share-widget icon hover bg,
    hero navy band (`container-fluid:before`), logo + widget-title
    underlines, `::selection` bg.
  - Body text: **#706f87** (14px weight 500 line-height 24px) — also
    card meta, category links, cat-list text.
  - Section/card background: **#f9f9ff** (blog cards, sidebar widgets);
    card hover bg **#fff** + shadow `0 20px 30px rgba(0,35,71,0.1)`.
  - Header: bg #fff; nav/left links #000 → hover/active #13113a
    (Playfair italic bold 14px).
  - Muted grays: **#818bb3** (pagination links), **#828bb2** (share
    widget borders/hairlines on hero rail).
  - Hero social circles: bg **#424161**, white icon; hover invert
    (white bg, #13113a icon). Rail hairlines #828bb2.
  - Footer: bg **#000000**; h6 **#fff** 18px 600; input bg **#191919**,
    placeholder **#555555** uppercase 12px; social icons #555555 →
    white hover.
  - Fonts: **"Playfair Display", serif** (weight 700) for all headings
    h1–h6 (color #13113a, lh 1.2) + logo + nav links (italic bold);
    **"Open Sans", sans-serif** for body (14px/500/24px), meta (13px),
    buttons (12px weight 600 uppercase). Google Fonts `<link>` for both.
  - Buttons: `.blog-post-btn` — transparent, uppercase 12px weight 600
    #13113a, border-radius 0; arrow icon slides right (+10px) on hover,
    opacity 0.9. `.primary-btn` — bg #13113a, white 12px, line-height
    50px, padding 0 38px, radius 0, hover shadow
    `0 10px 30px rgba(187,146,54,0.3)`. `.bbtns` — bg #13113a white
    uppercase 12px 500, padding 12px 20px, radius 0. `.click-btn` —
    white bg, #13113a icon, radius 0. All radius 0 (square) except the
    pagination pill (40px).
  - Pagination: `.page-link` transparent, padding 0.5rem, margin 0 2px,
    color #818bb3, border none; active/hover → bg #13113a, white,
    border-radius 40px.
  - Widgets: padding 50px 30px, bg #f9f9ff, margin-bottom 30px; titles
    20px 700 #13113a with `::after` underline (2px, 80px, #13113a,
    offset -100% right of the title).
  - Category list: `li` white bg, padding 13px 20px, margin-bottom 15px;
    hover → bg #13113a, white.
  - Share icons: 50×50 square, 1px solid #706f87 border, 20px #13113a
    icon; hover → bg #13113a, white.
  - Section spacing: `.section-gap` = padding 130px 0 (80px below
    992px); card margin-bottom 60px.

## Requirements

### Requirement: Header and navigation

The system SHALL render a white header with left links, a centered
wordmark logo with flanking hairlines, and a right nav menu (with a Pages
dropdown), collapsing to a toggle on mobile.

#### Scenario: Header content

- **GIVEN** the Focal page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL be white and full width
- **AND** it SHALL show the left links Home (active), Category, Archive
  (Playfair Display italic bold 14px, black, hover/active #13113a)
- **AND** it SHALL show the centered wordmark "Focal" (Playfair Display
  bold) flanked by two 1px #13113a horizontal hairlines (120px outer /
  80px inner)
- **AND** it SHALL show the right nav links Home, Category, Pages
  (dropdown) plus the mobile-only items Elements, Blog Detail, Contact
- **AND** the Pages dropdown SHALL open a menu with Elements, Blog
  Detail, Contact (italic capitalized links)

#### Scenario: Responsive menu

- **GIVEN** the header is rendered
- **WHEN** the viewport is narrow (mobile)
- **THEN** the left links SHALL be hidden
- **AND** the nav SHALL collapse behind a toggle button (accessible,
  aria-label/aria-expanded)
- **AND** activating the toggle SHALL open/close the mobile menu

### Requirement: Hero banner slider

The system SHALL render a full-width photo slider with a solid dark-navy
band, a white serif headline, numbered dots, arrows, and a rotated
vertical social rail.

#### Scenario: Hero layout and slides

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a solid #13113a navy band behind/over the left
  ~73% of the banner (with a soft shadow), covering the full height
- **AND** it SHALL show a slider of FOUR photo slides (full-width
  photography placeholders)
- **AND** each slide SHALL overlay the white Playfair headline "Make the
  world a better place" / "with camera" (36px, two lines, max-width
  700px, left-aligned)

#### Scenario: Slider controls

- **GIVEN** the hero slider is displayed
- **WHEN** the user looks at the bottom-right of the banner
- **THEN** numbered dot indicators (01/02/03/04, bold #13113a) SHALL be
  present with the active one emphasized
- **AND** prev/next arrow controls SHALL be present (hidden on narrow
  viewports)

#### Scenario: Vertical social rail

- **GIVEN** the hero is displayed on a wide viewport
- **WHEN** the user looks at the far left of the banner
- **THEN** a vertically rotated rail SHALL show three circular social
  buttons (Facebook, Twitter, Pinterest — 30px circles, bg #424161,
  white icons, hover inverts) and a "Share Now" label (uppercase 13px
  600 white), with 80px hairlines flanking the group
- **AND** the rail SHALL be hidden below ~1200px viewports

### Requirement: Blog post grid

The system SHALL render a 2-column grid of blog post cards (photo,
title, meta, excerpt, Read More, category) with hover effects.

#### Scenario: Card grid

- **GIVEN** the page is rendered
- **WHEN** the blog post section is displayed
- **THEN** it SHALL show EIGHT cards in a 2-column grid inside the main
  column (1 column on mobile)
- **AND** each card SHALL have a #f9f9ff background with 60px bottom
  margin
- **AND** on hover the card SHALL turn white with a soft shadow
  (0 20px 30px rgba(0,35,71,0.1)) and a white sweep SHALL slide across
  the photo

#### Scenario: Card content

- **GIVEN** a blog post card is displayed
- **WHEN** the card renders
- **THEN** it SHALL show a photo (picsum placeholder, alt text)
- **AND** it SHALL show an h5 title link (Playfair 18px #13113a, e.g.
  "There's goting to be a musical about meghan" — paraphrased)
- **AND** it SHALL show a meta row with a calendar icon + date ("20th
  Nov, 2018") and a comment icon + count ("05") in 13px #706f87
- **AND** it SHALL show an excerpt paragraph
- **AND** it SHALL show a "Read More" button (uppercase 12px 600
  #13113a, arrow icon that slides right on hover) on the left of the
  card footer
- **AND** it SHALL show a category link with a folder icon ("Travel",
  #706f87) on the right of the card footer

### Requirement: Pagination

The system SHALL render a centered numbered pagination with pill-shaped
active/hover states.

#### Scenario: Pagination behavior

- **GIVEN** the blog post section is displayed
- **WHEN** the user scrolls to below the cards
- **THEN** a pagination row SHALL show numbered links 01 02 03 04 09
  (transparent, #818bb3, margin 0 2px)
- **AND** the active page (and any hovered link) SHALL turn into a
  #13113a pill with white text (border-radius 40px)

### Requirement: Sidebar widgets

The system SHALL render a sidebar with six widgets: search, Instagram
grid, categories, popular posts, newsletter, and share.

#### Scenario: Widget container

- **GIVEN** the page is rendered
- **WHEN** the sidebar is displayed
- **THEN** it SHALL sit in the right column of the blog section (below
  the cards on mobile)
- **AND** each widget SHALL have a #f9f9ff background with 50px 30px
  padding and 30px bottom margin
- **AND** each widget title SHALL be 20px bold #13113a with a 2px 80px
  #13113a underline after it

#### Scenario: Search widget

- **GIVEN** the sidebar is displayed
- **WHEN** the search widget renders
- **THEN** it SHALL show a search input (placeholder "Search Posts")
  with a white search-icon button (80/20 split)

#### Scenario: Instagram widget

- **GIVEN** the sidebar is displayed
- **WHEN** the Instagram widget renders
- **THEN** it SHALL show the title "Instagram" and a 3-column grid of SIX
  square placeholder photos (5px gaps)

#### Scenario: Categories widget

- **GIVEN** the sidebar is displayed
- **WHEN** the Categories widget renders
- **THEN** it SHALL show the title "Categories" (source typo "Catgories"
  is fixed) and FIVE white list rows (name + count): Fashion 59 · Travel
  09 · Lifestyle 24 · Shopping 44 · Food 15
- **AND** hovering a row SHALL fill it #13113a with white text

#### Scenario: Popular Posts widget

- **GIVEN** the sidebar is displayed
- **WHEN** the Popular Posts widget renders
- **THEN** it SHALL show the title "Popular Posts" and FOUR rows, each
  with a thumbnail and an h6 title (16px, e.g. "Retro-electric 1967 Ford
  Mustang revealed in Russia") plus an author/date line ("Mate Winston |
  Dec 15")

#### Scenario: Newsletter widget

- **GIVEN** the sidebar is displayed
- **WHEN** the Newsletter widget renders
- **THEN** it SHALL show the title "Newsletter" with a centered
  description
- **AND** it SHALL show an email input and a "Subscribe" button (#13113a
  bg, white uppercase 12px, square)
- **AND** submitting the form SHALL show a success message

#### Scenario: Share widget

- **GIVEN** the sidebar is displayed
- **WHEN** the Share widget renders
- **THEN** it SHALL show the title "Share this post" and FOUR 50×50
  square social icon links (Facebook, Twitter, Pinterest, Instagram —
  1px #706f87 border, 20px #13113a icons)
- **AND** hovering an icon SHALL fill it #13113a with a white icon

### Requirement: Footer

The system SHALL render a black footer with four widget columns and a
copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a #000000 background
- **AND** it SHALL show an "About Us" column (white h6 + lorem
  paragraph)
- **AND** it SHALL show a "Newsletter" column with an email input
  (#191919 bg, uppercase placeholder "Enter Email") and a white arrow
  button
- **AND** it SHALL show an "Instagram Feed" column with a 4-column grid
  of EIGHT square placeholder photos
- **AND** it SHALL show a "Follow Us" column ("Let us be social") with
  four brand icon links (Facebook, Twitter, Dribbble, Behance — #555555,
  hover white)
- **AND** the bottom copyright bar SHALL read "Copyright © All rights
  reserved | This template is made with ♥ by Colorlib"

### Requirement: Page composition

The system SHALL compose all sections in the reference order on one page.

#### Scenario: Section order

- **GIVEN** the Focal page is rendered
- **WHEN** the user scrolls from top to bottom
- **THEN** the sections SHALL appear in this order: Header, Hero Slider,
  Blog Posts (with Sidebar), Pagination, Footer

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] Section order matches the reference 1:1 (Header → Hero Slider →
      Blog Posts + Sidebar → Pagination → Footer)
- [ ] Design tokens reproduced in Tailwind `@theme`: `--color-ink`
      #13113a (headings/brand), `--color-body` #706f87, `--color-card`
      #f9f9ff, `--color-page` #fff, `--color-muted` #818bb3,
      `--color-border` #828bb2, `--color-social` #424161, `--color-input`
      #191919, `--color-footer` #000000, `--color-footer-muted` #555555;
      fonts Playfair Display (700, headings/logo/nav italic) + Open Sans
      (body 14px/500, buttons 12px/600 uppercase) via Google Fonts
      `<link>` in `index.html`
- [ ] Header: white, left links (Home active / Category / Archive,
      Playfair italic bold), centered "Focal" wordmark with flanking
      hairlines, right nav (Home, Category, Pages dropdown with
      Elements/Blog Detail/Contact, mobile-only items), accessible
      mobile toggle with aria-expanded
- [ ] Hero: #13113a navy band (73% width, shadow), 4-slide photo
      slider, white Playfair h1 "Make the world a better place / with
      camera" (36px), numbered dots (01–04) + prev/next arrows at
      bottom-right, rotated vertical social rail (3 circular icons +
      "Share Now", hidden < 1200px)
- [ ] Blog grid: 8 cards × 2-col (1-col mobile), #f9f9ff → white +
      shadow on hover, photo sweep on hover, h5 title, meta (calendar +
      date, comment + count), excerpt, "Read More" button (arrow slides
      right), category link with folder icon
- [ ] Pagination: 01 02 03 04 09, active/hover #13113a pill
      (border-radius 40px)
- [ ] Sidebar: 6 widgets on #f9f9ff with 50px/30px padding — Search,
      Instagram (3-col × 6 photos), Categories (5 rows w/ counts, hover
      fill), Popular Posts (4 rows thumb + title + author/date),
      Newsletter (input + Subscribe button, success on submit), Share
      (4 square 50×50 icons)
- [ ] Footer: #000, About Us / Newsletter (input + arrow btn) /
      Instagram Feed (4-col × 8 photos) / Follow Us (4 brand icons),
      copyright bar
- [ ] All images are picsum placeholders (`picsum.photos/seed/focal-<n>/<w>/<h>`)
      with alt text; no ColorLib assets
- [ ] Icons from lucide-react (Calendar, MessageCircle, Folder,
      ArrowRight, Search, Mail, ArrowRight); brand icons (Facebook,
      Twitter, Pinterest, Dribbble, Behance, Instagram) as inline SVG
      per the replication skill — lucide has no brand icons
- [ ] Source typos fixed in recreation: "sharre now" → "Share Now",
      "Catgories" → "Categories", "Subcribe" → "Subscribe",
      "Instragram Feed" → "Instagram Feed"
- [ ] Tests: one `describe` per component, scenarios mirroring this
      spec; 100% coverage (lines/functions/branches/statements)
- [ ] `scripts/verify-app.sh focal` green (typecheck + lint + coverage +
      build)
