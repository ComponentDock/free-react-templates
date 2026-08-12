# Template: Roost (Real Estate Website)

## Purpose

Roost is a single-page real-estate agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Realtors" design (TEMPLATES.md line 485, first unchecked item
whose prep did not exist on main), built under the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a modern real-estate landing page: a transparent navbar
(logo left, menu right) over a full-width hero photo of a luxury living
room; the hero centers the listing price in brand green, a large white
headline ("Beautiful House In Australia"), the address with a location pin,
sq-ft/bed/bath stat icons, and a "Learn More" CTA; a lime-green search band
overlaps the hero bottom edge (tabs For Rent / For Sale + a grid of
dropdowns and text inputs with a black Submit button); then a services
section (black box with four icon services + an "About Us" column with
Mission/Vission items), a black "Latest Properties" carousel of listing
cards (image, sq-ft/bed/bath stats, price, address), an "Our Agents" team
grid with green-framed photos and circular social buttons, a green
testimonial carousel, a light-gray "Blog Posts" grid, and a black footer
(newsletter form, link column, about blurb, copyright bar). Roost recreates
that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Realtors" — free real-estate HTML template
  (source: https://colorlib.com/wp/template/realtors/). Single-page
  homepage with a subpage (property-single.html) linked from the property
  card images; the recreation ships the homepage only (nav links are `#`
  anchors/placeholders unless noted).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/realtors/`
  (HTTP 200, 32.5KB) + stylesheets `css/style.css` (26KB, the design
  source), plus `css/bootstrap.min.css`, `css/bootstrap-datepicker.css`,
  `css/jquery.fancybox.min.css`, `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `fonts/icomoon/style.css` (icon font),
  `fonts/flaticon/font/flaticon.css`, `css/aos.css`; scripts `js/main.js`
  (owl carousel config), jquery, bootstrap, sticky, animateNumber,
  fancybox, stellar (parallax), easing, datepicker, aos. The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`realtors-free-template.jpg`, 1200×946) confirms the visual design: a
  hero photo of a modern living-room interior (vaulted ceiling with exposed
  wooden beams, large window with natural light, grey sectional sofa,
  fireplace, framed artwork) under a transparent navbar with the white
  uppercase wordmark "REALTORS" left and white menu links right; centered
  over the hero: the price "$1,570,000" in bright lime green, the headline
  "Beautiful House In Australia" in large white type, the address
  "156/10 Spring Street, Harrison, ACT 2914" with a location-pin icon, the
  stats "2,611 Sq Ft. / 2 / 2", and a rectangular lime-green "Learn More"
  button; below the hero a solid vibrant lime-green band holds the tabs
  "For Rent" (active, darker green) / "For Sale" and a grid of white
  dropdowns + text inputs ("All Types", "Title", "Address", "Any
  Bedrooms", "Any Bathrooms", "Min Price", "Max Price") with a large black
  "Submit" button. The screenshot cuts off just below the search band —
  the properties/agents/testimonials/blog/footer sections are documented
  from the live DOM only. Aesthetic: minimalist, high-contrast — white,
  black, and a single olive-lime green accent (#91b029), DM Sans type.
  (Note: the screenshot address reads "Spring Street" while the DOM says
  "Sapling Street" — use the DOM copy.)
- **Section order (1:1) from the preview DOM:**
  1. `div#home-section.site-wrap` (root) > `div.site-mobile-menu
site-navbar-target` — off-canvas mobile menu: fixed right panel,
     width 300px, white bg, full-height, box-shadow -10px 0 20px -10px
     rgba(0,0,0,...), `transform: translateX(110%)` when closed; header row
     with a close button + body listing the same nav links. Toggled by the
     navbar hamburger (`span.icon-menu h3 text-white`).
  2. `header.site-navbar.site-navbar-target` (position absolute, top 0,
     width 100%, z-index 1999, padding 1rem; wrapped in
     `div.sticky-wrapper` for jquery.sticky) > `div.container` >
     `div.row.align-items-center.position-relative`:
     - `div.col-3` > `div.site-logo` > `a` — wordmark, font-size 1.7rem,
       text-transform uppercase, color #fff. The sticky state re-colors it
       (`.sticky-wrapper.is-sticky .site-logo a` green rule exists) — the
       navbar turns solid/white when stuck.
     - `div.col-9.text-right` > `nav.site-navigation.text-right.ml-auto
d-none.d-lg-block` > `ul.site-menu.main-menu`: 6 × `li` >
       `a`: **Home, Agents, Property, About, Blog, Contact**. Links:
       inline-block, margin 0 15px, padding 20px 0, color #fff; active
       (`li.active > a`) and hover → #91b029 (green). Hidden on <lg;
       hamburger + off-canvas menu instead.
  3. `div.ftco-blocks-cover-1` > `div.site-section-cover.overlay`
     (position relative, background-size cover / center, hero bg image
     `images/hero_1.jpg` — luxury living room; `data-stellar-background-ratio
=0.5` parallax on scroll) > `div.container` > `div.row.align-items-center
justify-content-center.text-center` > `div.col-md-7`:
     - price `p` — "$1,570,000" in brand green (#91b029) — the first
       line, then
     - `h1.mb-2` — "Beautiful House In Australia" — font-size 3rem (2rem
       on mobile), color #fff, line-height 1, weight 300 (DM Sans light).
     - `div.d-flex.media-38289.justify-content-around.mb-5` — stat row:
       3 × `div.sq|bed|bath.d-flex.align-items-center` — icon (icomoon:
       fullscreen-ish sq icon, bed, bath; rendered in green wrap-icon) +
       span "2911 Sq Ft." / "2" / "2". Stats text 13px, white.
     - `form` — hero search form (present in DOM; fields below in the
       filter band are the primary search UI) with a "Learn More" CTA
       button (`btn btn-primary` — green #91b029 per screenshot; the
       theme's primary). Address line sits above/below the stats with an
       `icon-room` green pin: "156/10 Sapling Street, Harrison, ACT 2914".
  4. `div.realestate-filter` (background #91b029; inner
     `div.realestate-filter-wrap` has `transform: translateY(-100%)`,
     z-index 6 — the band visually overlaps the hero's bottom edge) >
     `div.container`:
     - `div.realestate-filter-wrap.nav` — tab links: `a#rent-tab.active`
       "For Rent" (active: bg #91b029, white text) + `a#sale-tab` "For
       Sale" (idle: white bg, green text); padding 10px 20px, inline-block.
     - `div.realestate-tabpane.pb-5` (bg #91b029) > `div.container.tab-content`:
       - `div#for-rent.tab-pane.active` — search form (grid):
         - row 1: 3 × `div.col-md-4.form-group` — selects: **All Types**
           (options: All Types, Townhouses, Duplexes, Quadplexes,
           Condominiums), **Any Bedrooms** (Any, 0, 1, 2, 3+), **Any
           Bathrooms** (Any, 0, 1, 2, 3+).
         - row 2: 3 × `div.col-md-4.form-group` — selects: **Min Price**
           ($100, $200, $300, $400), **Max Price** ($25,000, $50,000,
           $75,000, $100,000, $100,000,000), input **"Title"** (placeholder).
         - row 3: `div.col-md-6.form-group` — input **"Address"**
           (placeholder) + `div.col-md-6` — submit
           `input.btn.btn-black.py-3.btn-block` value "Submit" (black
           button, full-width, taller via py-3).
       - `div#for-sale.tab-pane` — identical field set duplicated.
       - `.form-control`: height 55px, white bg, focus/active border
         #91b029.
  5. `div.site-section` (padding 2.5em 0 mobile / 5em 0 desktop) >
     `div.container` > `div.row.align-items-stretch`:
     - `div.col-lg-6` > `div.h-100.p-5.bg-black` — black box (padding
       3rem), inner row of 4 × `div.col-md-6.text-center.mb-4` >
       `div.service-38201`: `span` icon (icomoon/flaticon, font-size 3rem,
       color #91b029) + `h3` (15px, uppercase, white) + small caption
       text. Services: **Estate Insurance, Elegant Bathtub, Fresh Air,
       Estate Calculator** (each followed by a tiny "Estate Management"
       caption in the DOM — paraphrase as a one-line sub-caption).
     - `div.col-lg-5.ml-auto` — `h3.heading-29201` "About Us" + `p`
       ("Perspiciatis quidem harum provident repellat sint.") + 2 ×
       `div.service-39290.d-flex.align-items-start.mb-5`: `div.media-icon.mr-4`
       > `span` icon (font-size 4rem, color #91b029) + `div.text` > `h3`
       - `p`: **Mission** and **Vission** (sic — keep or fix the typo,
         note the choice) with lorem blurb.
  6. `div.site-section.bg-black.block-14` (black section) >
     `div.container` > `div.row.justify-content-center` > `div.col-md-6.text-center`:
     - `h3.heading-29201.text-center.text-white` "Latest Properties" + `p`
       ("Perspiciatis quidem, harum provident, repellat sint officia quos
       fugit tempora id deleniti.").
     - `div.owl-carousel.nonloop-block-14` (owl config: items 1 → 2
       (≥768px) → 3 (≥992px), loop true, autoplay true, nav hidden, dots
       centered, bottom -30px; 6 duplicate slides — the real set is the 3
       unique cards below) — 6 × `div.media-38289` property card (text
       white on black): `a.d-block` > `img.img-fluid` (images/img_1.jpg —
       listing photo); `div.text`: `div.d-flex.justify-content-between.mb-3`
       with `div.sq|bed|bath.d-flex.align-items-center` (13px white; icon
       in `.wrap-icon` green #91b029): "2911 Sq Ft." / "2." / "2"; `h3.mb-3`
       > `a` price link — **$570,000 / $1,570,000 / $980,000** (repeated);
       > `span.d-block.small.address.d-flex.align-items-center` — green
       > `icon-room.mr-3.text-primary` + "156/10 Sapling Street, Harrison,
       > ACT 2914" (color rgba(255,255,255,0.7)).
  7. `div.site-section` > `div.container` > `div.row.justify-content-center.mb-5`
     (heading) + `div.row` (cards):
     - heading block: `h3.heading-29201.text-center` "Our Agents" + `p`
       subtitle.
     - 3 × `div.col-md-4.mb-5.mb-md-0` > `div.person-29381`:
       `div.media-39912` (position relative, margin-bottom 20px) — agent
       photo; `:before` = decorative green frame: 2px solid #91b029
       border, top -20px, left -20px, height 100%, width 50% (offset
       frame behind the photo); `h3` name — **Josh Long, Melinda David,
       Jessica Soft**; `span` "4 Properties" / "10 Properties" / "18
       Properties"; `div.social-32913` — 3 × `a` 40px circles (bg #efefef,
       border-radius 50%, centered icon): facebook, twitter, instagram
       (icomoon → lucide/inline SVG).
  8. `div.site-section.bg-primary` (green #91b029 section) >
     `div.container.block-13` > `div.nonloop-block-13.owl-carousel` (owl:
     items 1, loop, autoplay, nav hidden, dots centered bottom -30px) — 3
     × `div.testimonial-38920.d-flex.align-items-start`: `div.pic.mr-4`
     (avatar photo) + `div`: `p` quote (lorem) + `h3.mb-4` name (20px,
     white) — **Josh Long, Jean Doe** (Jean Doe ×2) + `div.mt-4` >
     `span.meta` (uppercase, rgba(255,255,255,0.3)) — "Business Man" /
     "Business Woman".
  9. `div.site-section.bg-light` (bg #f6f5f5) > `div.container` >
     `div.row.justify-content-center.mb-5` (heading: `h3.heading-29201.
text-center` "Blog Posts" + `p` subtitle) + `div.row` — 3 ×
     `div.col-lg-4.col-md-6.mb-4` > `div.post-entry-1.h-100`: image +
     `div.post-entry-1-contents` (white bg, padding 20px): `div.meta`
     (13px, uppercase, letter-spacing .1em, color #ccc) — "July 17, 2019
     by Admin"; `h2` (22px, margin-bottom 20px) > `a` "Lorem ipsum dolor
     sit amet"; `p` excerpt. Hover: h2 link → green (#91b029).
  10. `footer.site-footer` (background #000, padding 4em 0 mobile / 8em 0
      desktop) > `div.container` > `div.row`:
      - `div.col-md-4`: `h3.text-white.h5.mb-3` "Subscribe" +
        `form.d-flex`: `input.form-control.mr-3` (placeholder "Enter your
        email") + `input.btn.btn-primary.text-white` value "Send Now".
      - `div.col-md-3.ml-auto`: `h3.text-white.h5.mb-3` "About Us" +
        `ul.list-unstyled.menu-arrow` — 5 links: About Us, Testimonials,
        Terms of Service, Privacy, Contact Us — each `li` padded-left 20px
        with a green `:before` arrow glyph (icomoon \e315, color #91b029).
      - `div.col-md-4`: `h3.text-white.h5.mb-3` "About" + `p` lorem
        blurb.
      - `div.row.pt-5.mt-5.text-center` > `div.col-md-12` >
        `div.border-top.pt-5`: copyright — "Copyright © [year] All rights
        reserved | This template is made with ♥ by Colorlib" → replace
        with the repo-standard footer credit.
- **Design tokens extracted from `css/style.css` (+ screenshot):**
  - Brand color: **#91b029** (olive-lime green) — the single accent:
    realestate-filter band + tabpane background, active filter tab,
    .btn-primary (Learn More / Send Now, per screenshot), hero price text,
    nav active + hover links, sticky logo color, service icons (3rem and
    4rem), sq/bed/bath wrap-icons, address pin (icon-room text-primary),
    heading-29201 top marker (70×2px bar), person photo frame (2px
    border), footer menu-arrow glyphs, form-control focus border, blog
    link hover, `.site-section.bg-primary` testimonial band. Put in
    `@theme` (e.g. `--color-brand`).
  - Fonts: **DM Sans** (Google font) — body AND headings. The preview
    HTML does not link Google Fonts (falls back to system stack); DM Sans
    is the intended typeface — load it via `<link>` in `index.html` per
    replication.md, or keep the repo default sans stack (note the choice).
    Headings: weight 300 (light), color #364d59 (base h1–h5 rule; note
    the dark-slate heading color), hero h1 white 3rem line-height 1;
    section headings `.heading-29201` 22px uppercase #000 with a 70×2px
    green top bar; service titles 15px uppercase white; testimonial names
    20px white; blog h2 22px; meta 13px uppercase letter-spacing .1em.
  - Colors: **#000** (footer bg, properties section bg, services black
    box, .btn-black submit, section-heading text); **#364d59** (default
    heading color, dark slate); **#fff** (text on dark/green, nav links,
    logo, form-control bg); **#f6f5f5** (blog section bg);
    **#efefef** (agent social circles); **#ccc** (blog meta);
    **rgba(255,255,255,0.7)** (property card address);
    **rgba(255,255,255,0.3)** (testimonial meta); **#91b029** as above.
  - Buttons: `.btn` padding 10px 20px; `.btn-black` bg #000 white text
    (Submit, rendered `py-3 btn-block` = tall full-width); `.btn-primary`
    green #91b029 white text (Learn More, Send Now — define explicitly,
    the theme overrides bootstrap's blue). No border-radius on buttons
    (sharp corners) — verify against screenshot (radius 0 / none).
  - Shapes: heading marker 70×2px green bar above section headings;
    person photo frame = 2px green border, top/left -20px offset, 50%
    width (behind the photo); social buttons 40px circles (#efefef);
    form-control height 55px; off-canvas mobile menu 300px; hero overlay
    full-bleed photo with parallax (0.5 ratio) — recreation can use a
    fixed/static bg.
  - Section backgrounds: hero = photo (living room) with dark overlay
    (text readable); filter band #91b029 overlapping the hero bottom;
    services row on white with a black p-5 box on the left; properties
    section #000; agents on white; testimonials #91b029; blog #f6f5f5;
    footer #000.
  - Spacing: navbar padding 1rem; nav links margin 0 15px, padding 20px
    0; hero cover full viewport-ish; filter wrap translateY(-100%);
    site-section padding 5em 0 desktop / 2.5em mobile; services black box
    p-5 (3rem); property card stats mb-3, h3 mb-3; person photo mb-20px;
    testimonial pic mr-4; footer padding 8em 0 desktop / 4em mobile, top
    row pt-5 mt-5, border-top.
- **Recreation decisions:**
  - Navbar: fixed/absolute transparent over the hero with white wordmark
    "ROOST" (uppercase) left and 6 links right (Home, Agents, Property,
    About, Blog, Contact); on scroll → sticky white bar with dark text
    and green active/hover (the original's sticky behavior); mobile:
    hamburger (icon-menu) opens a 300px right off-canvas panel with the
    same links + close button.
  - Hero: full-width living-room-style photo (picsum seed) with dark
    overlay; centered column: green price "$1,570,000" (or equivalent
    placeholder price), large white headline (3rem/2rem, light weight),
    address with green pin, sq-ft/bed/bath stat row (green icons, white
    13px labels), green "Learn More" button. Parallax → static background
    (note the choice).
  - Filter band: green #91b029 band overlapping the hero bottom (negative
    margin / translate); For Rent / For Sale pill tabs (active = solid
    green on white... actually active = green bg + white text, idle =
    white bg + green text); search grid: Type/Bedrooms/Bathrooms/Min
    Price/Max Price selects + Title/Address text inputs (55px tall, white)
    - black full-width Submit. Tab switch swaps the visible field set
      (simple state toggle; both panes hold identical fields — note the
      choice).
  - Services: left black box (p-5) with 2×2 icon services (green 3rem
    icons, 15px uppercase white titles, small captions); right column
    "About Us" heading + 2 icon rows (Mission / Vission — fix typo to
    "Vision" and note it) with 4rem green icons.
  - Properties: black section, centered "Latest Properties" heading +
    carousel of 3 unique listing cards (loop ~3s autoplay, dots): photo,
    sq-ft/bed/bath stats with green icons, price link ($570,000 /
    $1,570,000 / $980,000), green pin + address (white 70% opacity).
    Hand-rolled carousel with React state (no owl dependency).
  - Agents: 3 cards — photo with the offset 2px green frame (absolute
    positioned pseudo-element → a div), name, "N Properties" caption,
    and 3 circular social buttons (facebook/twitter/instagram → lucide /
    inline SVG).
  - Testimonials: green section, carousel of 3 (avatar + lorem quote +
    20px white name + uppercase meta "Business Man/Woman"), autoplay +
    dots.
  - Blog: light-gray section, 3 cards (image + white content box: uppercase
    meta "July 17, 2019 by Admin", 22px title link, excerpt; title hover →
    green).
  - Footer: black; Subscribe column (email input + green Send Now
    button), About Us link column (green arrow bullets), About blurb
    column, and the bottom copyright bar with the repo-standard credit
    (Colorlib credit replaced).
  - Icons: lucide-react + inline SVG brand icons (facebook, twitter,
    instagram, map-pin, bed, bath, maximize/square, menu, x) per repo
    convention (icomoon/flaticon fonts are not copyable).
  - All photos picsum-seeded (`picsum.photos/seed/roost-N/w/h`): hero
    (interior ~1600×900), 3 property listings, 3 agents, 3 blog thumbs.
  - Nav links + card links are `#` anchors on the single page.
- **Fidelity rules honored:** section structure + order 1:1; design
  tokens (green #91b029 accent, DM Sans, light 300 headings, uppercase
  section headings with 2px green top bar, sharp-corner buttons, 55px
  inputs, black/green/white contrast) matched; layout matched (overlapping
  filter band, 4-icon black service box + 2-icon about column, 3-col
  grids, carousels, black footer with 3 columns); no ColorLib assets
  copied; text paraphrased with the same kind of content.

Roost lives in `apps/roost` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn) where they fit.

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with a white
uppercase wordmark and six menu links, turning into a sticky bar on scroll
and an off-canvas panel on mobile.

#### Scenario: Navbar content

- **GIVEN** the Roost page is rendered
- **WHEN** the navbar is displayed at the top of the page
- **THEN** it SHALL show the wordmark "ROOST" in white uppercase
  sans-serif on the left
- **AND** it SHALL show the links Home, Agents, Property, About, Blog, and
  Contact in white on the right

#### Scenario: Active and hovered links

- **GIVEN** the navbar is displayed
- **WHEN** a link is the active page link or is hovered
- **THEN** the link text SHALL turn brand green (#91b029)

#### Scenario: Sticky navbar on scroll

- **GIVEN** the page is scrolled down
- **WHEN** the navbar enters its sticky state
- **THEN** it SHALL keep the wordmark and links visible with the active
  link in brand green

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user activates the hamburger control
- **THEN** a right-side off-canvas panel SHALL open listing the same six
  links with a close control
- **AND** activating the close control SHALL dismiss it

### Requirement: Hero

The system SHALL render a full-width hero with a listing price, headline,
address, property stats, and a call-to-action over a photo.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-width background photo with a dark overlay
- **AND** it SHALL show the price "$1,570,000" in brand green (#91b029)
- **AND** it SHALL show the headline "Beautiful House In Australia" in
  large white light-weight type (3rem desktop / 2rem mobile)
- **AND** it SHALL show the address "156/10 Sapling Street, Harrison, ACT
  2914" with a green location-pin icon
- **AND** it SHALL show the stats "2911 Sq Ft.", "2" beds, and "2" baths
  as 13px white labels with green icons
- **AND** it SHALL show a brand-green "Learn More" button

### Requirement: Property search filter

The system SHALL render a green search band overlapping the hero bottom
with Rent/Sale tabs and a property-search form.

#### Scenario: Filter tabs

- **GIVEN** the filter band is displayed
- **WHEN** the page loads
- **THEN** it SHALL show the tabs "For Rent" (active) and "For Sale"
  with the active tab on a solid green background and the idle tab on
  white with green text

#### Scenario: Search fields

- **GIVEN** the search form is displayed
- **WHEN** the active tab's pane renders
- **THEN** it SHALL show selects for Type (All Types, Townhouses,
  Duplexes, Quadplexes, Condominiums), Bedrooms (Any, 0, 1, 2, 3+),
  Bathrooms (Any, 0, 1, 2, 3+), Min Price ($100–$400), and Max Price
  ($25,000–$100,000,000)
- **AND** it SHALL show text inputs "Title" and "Address" with white
  55px-tall fields
- **AND** it SHALL show a black full-width "Submit" button

#### Scenario: Tab switching

- **GIVEN** both tabs are present
- **WHEN** the user activates "For Sale"
- **THEN** the For Sale pane SHALL become visible with the same field set
- **AND** the For Rent pane SHALL hide

### Requirement: Services section

The system SHALL render a services section with a black icon-service box
and an About column with two icon rows.

#### Scenario: Service boxes

- **GIVEN** the services section is displayed
- **WHEN** the left column renders
- **THEN** it SHALL show a black box with four services in a 2×2 grid —
  Estate Insurance, Elegant Bathtub, Fresh Air, and Estate Calculator —
  each with a 3rem green icon and a 15px uppercase white title

#### Scenario: About column

- **GIVEN** the services section is displayed
- **WHEN** the right column renders
- **THEN** it SHALL show the heading "About Us" with the green 70×2px top
  marker bar
- **AND** it SHALL show two icon rows — Mission and Vision — each with a
  4rem green icon, a title, and a short blurb

### Requirement: Latest properties carousel

The system SHALL render a black section with a carousel of three listing
cards.

#### Scenario: Property cards

- **GIVEN** the properties section is displayed
- **WHEN** a card renders
- **THEN** it SHALL show a listing photo, the stats "2911 Sq Ft.", "2"
  beds, and "2" baths (13px white labels, green icons), a price link
  ($570,000, $1,570,000, or $980,000), and the address "156/10 Sapling
  Street, Harrison, ACT 2914" with a green pin in 70%-opacity white

#### Scenario: Carousel behavior

- **GIVEN** the carousel is displayed
- **WHEN** the page is idle
- **THEN** the carousel SHALL auto-advance every ~3 seconds, cycling
  through the three cards with dots indicating the current card

### Requirement: Agents section

The system SHALL render an "Our Agents" grid of three agent cards with
green-framed photos and circular social buttons.

#### Scenario: Agent cards

- **GIVEN** the agents section is displayed
- **WHEN** the heading renders
- **THEN** it SHALL show the heading "Our Agents" with the green top
  marker bar
- **AND** it SHALL show three cards — Josh Long (4 Properties), Melinda
  David (10 Properties), and Jessica Soft (18 Properties) — each with a
  photo framed by a 2px green offset border on the top-left
- **AND** each card SHALL show three 40px circular social buttons
  (facebook, twitter, instagram) with a light-gray (#efefef) background

### Requirement: Testimonials carousel

The system SHALL render a green section with a carousel of three
testimonials.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is displayed
- **WHEN** a slide renders
- **THEN** it SHALL show an avatar, a quote, the name in 20px white type
  (Josh Long / Jean Doe), and an uppercase meta line ("Business Man" /
  "Business Woman") in 30%-opacity white
- **AND** the carousel SHALL auto-advance with dots

### Requirement: Blog section

The system SHALL render a light-gray "Blog Posts" grid of three post
cards.

#### Scenario: Post cards

- **GIVEN** the blog section is displayed
- **WHEN** a card renders
- **THEN** it SHALL show a thumbnail image and a white content box with an
  uppercase meta line ("July 17, 2019 by Admin", 13px, #ccc), a 22px
  title link, and an excerpt
- **AND** hovering the title SHALL turn it brand green

### Requirement: Footer

The system SHALL render a black footer with a newsletter form, a link
column, an about blurb, and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** the columns render
- **THEN** it SHALL show a "Subscribe" column with an email input and a
  brand-green "Send Now" button
- **AND** it SHALL show an "About Us" column with the links About Us,
  Testimonials, Terms of Service, Privacy, and Contact Us, each marked
  with a green arrow bullet
- **AND** it SHALL show an "About" column with a short blurb

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar renders
- **THEN** it SHALL show one centered line with the repo-standard footer
  credit above a top border

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Roost app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar, hero, filter, services,
  properties, agents, testimonials, blog, and footer inside the main
  landmark in the original's order
- **AND** the document title SHALL be "Roost — Real Estate Website"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- roost` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (navbar → hero → filter band
      → services → properties carousel → agents → testimonials → blog →
      footer).
- [ ] Design tokens applied: brand green #91b029 (filter band, tabs,
      buttons, price, nav active/hover, icons, heading marker, agent frame,
      footer arrows, focus borders), DM Sans (or repo default — note
      choice), light 300 headings (#364d59 base / #000 section headings /
      white on dark), 22px uppercase section headings with 70×2px green
      top bar, 55px form controls, sharp-corner buttons, black sections
      (properties, footer) and light-gray blog bg #f6f5f5.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Realtors), preview URL,
      tokens, renames, the icon-substitution note (lucide/inline SVG for
      icomoon/flaticon), the "Vission"→"Vision" typo fix, parallax→static
      choice, and the single-page anchor-links decision.
