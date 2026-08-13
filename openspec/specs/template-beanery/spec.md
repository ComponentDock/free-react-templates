# Template: Beanery (Coffee Shop / Boutique Cafe Template)

## Purpose

Beanery is a single-page coffee-shop / boutique-cafe website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Decoffee" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Decoffee" — boutique coffee shop / cafe website
  (Bootstrap 5 + slick slider + owl carousel + slicknav + animate +
  magnific-popup + nice-select; fonts Chivo + Shippori Mincho via Google
  Fonts `@import` in `style.css`).
  (source: https://colorlib.com/wp/template/decoffee/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/decoffee/
  (HTTP 200, ~34 KB HTML fetched + `assets/css/style.css` ~64 KB parsed;
  live DOM structure extracted from the HTML, screenshot reviewed).
- **Screenshot analyzed:** `decoffee-colorlib-template.jpg` (1200×946,
  downloaded + viewed in browser): split-screen layout — dark navy/charcoal
  vertical sidebar on the left (logo "De Coffee / EST. 1985", vertical
  links HOME / ABOUT US / MENU / GALLERY / BLOGS / CONTACT US, an outlined
  "Order Online" button, phone + address, Facebook/Instagram/LinkedIn icons)
  and a large lifestyle hero photo on the right (sunny outdoor patio with
  wicker chairs, wooden tables, greenery) with a white serif headline
  "Handmade 'Cookies' and Coffee Delights" (the word "Cookies" in quotes is
  rust/terracotta) and a solid terracotta rectangular "OUR MENU" button.
  Below: cream `#F6F1EA` about section with serif headline + hours list,
  a menu section, a services band, gallery images, testimonial, and a cream
  footer. Overall aesthetic: warm, inviting, artisanal boutique cafe — cream
  - terracotta copper `#C46B48` + deep navy `#202738`, serif (Shippori
    Mincho) headlines over Chivo sans body, square buttons, split dark-sidebar
    layout.
- **Section order (1:1, from the DOM of the home page):**
  1. Header — fixed LEFT SIDEBAR (`div.menu-body`, `position:fixed; left:0;
width:300px; background:#202738; padding:30px 45px 10px`, border-right
     `1px solid #545454`): logo image (`assets/img/logo/logo.png`, coffee-cup
     logo + "De Coffee" + "EST. 1985" in the screenshot); nav `ul.off-can-
menu` — Home / About Us / Menu / Gallery / Blog (dropdown with Blog /
     Blog Details / Elements) / Contact us — links 14px uppercase
     `#C3D4E4`, centered; `div.menu-footer`: `a.btn_01 mb-30` "Order
     Online" (outline button), `p` phone "+10 (88) 237 3782", `p` address
     "88/A, Green lane, Monaka CA 92032", `div.sidebar-social` with
     Facebook / Instagram / LinkedIn icons. KEY RESPONSIVE BEHAVIOR: sidebar
     is fixed and VISIBLE on screens ≥1600px; below 1600px it is translated
     off-canvas (`transform:translateX(-100%)` in `@media (max-width:
1600px)`) and the hamburger (`div.off-canvas-menu.menu-bar`, three
     `<span>` lines, `d-block d-xxl-none`) opens it as a drawer
     (`div.close-icon-menu` close button). (The off-canvas drawer is the
     SAME `menu-body` element in the source — one component with two modes.)
  2. Hero (`section.slider-area`, bg `#1E1E1E`; `div.slider-active` slick
     wrapper): ONE slide `div.single-slider.slider-height.hero-overly.
slider-bg1.d-flex.align-items-center` — `slider-height` = 900px,
     `background-size:cover; center center`, bg image `h1_hero1.jpg`;
     `div.hero-overly::before` full-size dark overlay (`z-index:-1`);
     content row `offset-xxl-1 col-xxl-5`; `div.hero-caption`: `h1` 69px
     600 white Shippori Mincho line-height 1.1 margin-bottom 40px —
     "Handmade <span>\"Cookies\"</span> and Coffee Delights" with the
     `span` colored `#C46B48`; `p` 20px 300 white margin-bottom 41px
     (Consectetur adipiscing elit...); `a.btn_1.hero-btn` "Our Menu"
     (padding 21px 51px).
  3. About (`section.about-area.section-padding`, bg `#F6F1EA` cream):
     `div.row`: left `offset-xxl-1 col-xxl-6` `div.about-caption` —
     `div.section-tittle.mb-25`: `h2` 44px 600 Shippori Mincho `#202738`
     "A boutique and fun cafe that brought together coffee cultures of the
     whole world in California." + `p` 16px 400 `#636363`; `div.singneture
.mt-40` signature image (`singneture.png`); right `offset-xl-1
col-xxl-4` — THREE info blocks `div.support-caption.mb-50` >
     `div.single-info` > `div.contents`: `h4` (Hours / Dinner / Lunch) + `p`
     "Monday & Sunday" + `span` "11:00 am – 4:00 am" (source repeats the
     same times for all three — recreate with sensible distinct hours);
     `div.about-shape.d-none.d-lg-block` decorative line-drawing image
     (absolute right 0, bottom 90px); after the row: `div.compay-img.fix`
     in `container-fluid p-0` — full-width image `section-full.jpg`
     (`img.w-100`).
  4. Our Menu (`section.our-menu.section-padding`): centered
     `div.section-tittle.mb-50.text-center` — `h2` "Our Menu" + `p`
     (Duis congue sapien...); row `justify-content-between` with THREE
     columns `col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6` (first has
     `offset-xxl-1`): each column = `div.small-tittle` `h4` 24px 700
     `#C46B48` (Coffee / Drinks / Fast Food) + FIVE `div.menu-items`
     (source repeats the same 5 dish names + `($5)` price in every column —
     recreate 3 columns × 5 distinct coffee-shop items): `div.menu-left` >
     `div.menu-tittle` `h4` 17px Chivo `#636363` (name + dotted leader
     "………………" + `span` price 18px 700 `#C46B48`, e.g. "Proin risus erat
     …………………… ($5)") + `div.menu` `p` 16px 300 `#636363` (description,
     source: "Sed ultrices nisl velit"); `div.menu-shape.d-none.d-md-block`
     decorative image (absolute left 320px, top 44px).
  5. Services (`section.our-services-area.section-padding.section-img-bg2`,
     `data-background="assets/img/gallery/section-bg1.jpg"` — full-bleed
     background IMAGE band; `section-img-bg2` = cover + no-repeat): row
     `justify-content-between` with FOUR cards `col-xl-3 col-xxl-2 col-lg-4
col-md-4 col-sm-6` (first `offset-xxl-1`): `div.single-services1.
text-center.mb-30`: `div.services-ion` (svg icon
     `assets/img/icon/services1..4.svg`, margin-bottom 19px) +
     `div.services-cap` `p` 18px 300 WHITE margin-bottom 24px (source: same
     "Nulla nec tortor vitae eros..." blurb on all four — recreate 4
     distinct service blurbs).
  6. Gallery (`div.gallery-area`, `margin-top:-295px` — pulls the gallery
     UP over the bottom of the services band): container row of FOUR
     `div.single-gallery.mb-25` images (`img.img-fluid`): cols `col-lg-6
offset-xl-1` / `col-lg-5` / `col-lg-5 offset-xl-1` / `col-lg-6` (a
     staggered 2+2 arrangement): `gallery1.jpg` / `gallery2.jpg` /
     `gallery3.jpg` / `gallery4.jpg` (coffee/cafe photos).
  7. Testimonials (`section.testimonial-area.testimonial-padding`,
     padding-top 56px / bottom 86px): centered `div.section-tittle.mb-50.
text-center` — `h2` "Love from Customers"; `div.h1-testimonial-active`
     slick carousel with TWO `div.single-testimonial.text-center`:
     `div.testimonial-caption`: `div.testimonial-top-cap` (quote icon
     `img`, margin-bottom 30px) + `p` quote ("The types of tea are white
     tea, green tea..."); `div.testimonial-founder.d-flex.align-items-center.
justify-content-center`: `div.founder-img` (portrait `founder-img.png`)
     - `div.founder-text`: `span` "Poppa Cherry" 14px 600 `#C46B48` Chivo +
       `p` "Designer at Colorlib" `#74706B` 500. Slick arrows: 35px circular
       outline buttons, absolute top 50% left 0 (prev) / right 0 (next) —
       `button.slick-arrow` radius 50% bg none, line-height 40px.
  8. Instagram band (`div.location-house.fix`, `padding-left:300px` — the
     band sits to the RIGHT of the fixed sidebar): `container-fluid p-0` >
     `div.instagram-active.owl-carousel` with FIVE `div.single-instagram`
     images (`instra1..4.jpg` with instra2 repeated) + `a.insta-btn`
     "@da_coffee98" — 2px solid `#C46B48` border, `background:#fff`,
     color `#C46B48`, Shippori Mincho.
  9. Footer (`div.footer-wrapper.gray-bg`, bg `#F6F1EA` — `.footer-wrapper`
     rule wins over `.gray-bg` in the cascade): `div.footer-area.
footer-padding` container row `justify-content-between align-items-
center`:
     - col `offset-xl-1 offset-xxl-2 col-xl-3`: `div.footer-tittle.
text-center.mb-50` `h4` 20px Chivo 400 `#202738` "Contact Us" +
       phone link "+10 (88) 237 3782" + address "88/A, Green lane, Monaka
       CA 92032" + `div.footer-social.pt-30` (circular social icons, color
       `#202738`, bg rgba(255,255,255,0.06), radius 50%, margin-right
       15px).
     - col `col-xl-4`: `div.single-footer-caption.mb-50` (border-left +
       border-right `1px solid rgba(125,96,84,0.2)`, padding 0 20px):
       `div.single-footer-caption.text-center.mb-20` > `div.footer-logo.
mb-15` (logo image) + brand blurb `p` (Duis congue sapien...).
     - col `col-xl-2`: `div.footer-tittle.text-center.mb-50` `h4`
       "Navigation" + links About Us / Menu / Gallery / Contact.
     - Bottom bar `div.footer-bottom-area` > `div.footer-border` >
       `div.footer-copy-right.text-center` `p` 14px `#928888` line-height 2
       — copyright line → Component Dock credit (repo rule, NOT ColorLib).
- **Design tokens extracted from the preview CSS (`assets/css/style.css`):**
  - Primary brand **copper `#C46B48`** (36 uses): hero `span` "Cookies",
    `.small-tittle` h4 (Coffee/Drinks/Fast Food), menu price `span` 18px
    700, `.founder-text span` name, `.insta-btn` border + text,
    `.btn_1` bg (solid copper button), `.btn_01` border + hover bg,
    `.btn_1:hover` text, `.menu-tittle h4` hover (transition .4s).
  - Secondary **golden amber `#D6A04C`** (22 uses): warm accent for
    hovers/decorative details (pair with copper in hover states).
  - Deep navy **`#202738`** (8 uses): sidebar `.menu-body` bg, `.section-
tittle h2` color, `.footer-tittle h4` color, `.footer-social a` color.
  - Sidebar link **`#C3D4E4`** (pale blue-grey, 14px uppercase, centered);
    sidebar border `#545454`.
  - Cream **`#F6F1EA`** (`.about-area` + `.footer-wrapper` bg); pale
    lavender **`#f9f9ff`** (27 uses — light section/alt backgrounds);
    services band = background IMAGE with white text; hero bg image with
    `hero-overly::before` dark overlay; `.slider-area` fallback `#1E1E1E`.
  - Text: body gray **`#636363`** (menu names, paragraphs), `#74706B`
    (founder role), `#928888` (copyright), white on dark/photo surfaces.
  - Fonts: body **"Chivo"** sans-serif (300/400/700/900 — menu-tittle h4
    17px, footer-tittle h4 20px 400, founder-text span 14px 600, nav
    links 14px uppercase); headings **"Shippori Mincho"** serif (400–800 —
    `.section-tittle h2` 44px 600 `#202738`, `.hero-caption h1` 69px 600
    white line-height 1.1, `.insta-btn`). Google Fonts loaded via
    `@import url("https://fonts.googleapis.com/css2?family=Chivo:wght@300;
400;700;900&family=Shippori+Mincho:wght@400;500;600;700;800&
display=swap")` in `style.css` — recreate with `<link>` in
    `index.html`.
  - Buttons: **square, border-radius 0**. `.btn_1` solid copper bg, white
    uppercase 15px 400, padding 14px 24px, line-height 15px, hover →
    transparent bg + copper text; `.btn_1.hero-btn` padding 21px 51px;
    `.btn_01` outline (1px copper border, transparent bg, white 16px 500,
    padding 14px 32px), hover → solid copper bg; `.insta-btn` 2px copper
    border, white bg, copper text, Shippori Mincho.
  - Signature motifs: SPLIT LAYOUT (dark 300px fixed left sidebar + content
    offset; sidebar slides off-canvas <1600px with hamburger/close drawer
    controls); full-width image bands (about `section-full.jpg`, services
    bg image); gallery pulled up over the services band with negative
    margin (-295px); menu items with dotted leaders + copper `($price)`
    spans; slick circular arrow buttons on the testimonial carousel;
    owl-carousel instagram strip offset right (`padding-left:300px`);
    section rhythm = `section-padding` 120px top/bottom.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/beanery-<n>/<w>/<h>`; screen seeds for cafe/patio/
  coffee/people subjects — verify each seed renders a cafe-appropriate
  scene before pinning); icons → lucide-react (Menu, X, Phone, MapPin,
  Clock, Coffee, UtensilsCrossed, Quote, ChevronDown, Instagram, Facebook,
  Linkedin — probe every export; brand icons Facebook/Instagram/LinkedIn
  are NOT in lucide-react → inline SVG simple-icons paths); Shippori Mincho
  - Chivo via Google Fonts `<link>` in `index.html`; brand copper
    `#C46B48` + amber `#D6A04C` + navy `#202738` + cream `#F6F1EA` in
    `@theme`; no asset/CSS/font-file copying. Demo copy paraphrased but same
    kinds (cafe intro, hours blocks, 3-column menu with dotted-leader price
    rows, service blurbs, gallery, testimonials, instagram strip, footer).
    Source repetition cleaned up: distinct menu items per column (15 total),
    distinct hours per block (source repeats "11:00 am – 4:00 am" and
    "Monday & Sunday" everywhere), distinct service blurbs, 2-3 distinct
    testimonial people (source repeats "Poppa Cherry / Designer at
    Colorlib"). "Order Online" button can be a link (no backend).

Beanery lives in `apps/beanery` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn) plus the repo-standard
Navbar/Footer chrome (adapted to the fixed dark sidebar header and the
cream 3-column footer).

## Requirements

### Requirement: Sidebar header

The system SHALL render a dark fixed left sidebar with the site logo, nav
links, an order button, contact info, and social icons, which collapses
into an off-canvas drawer on smaller screens.

#### Scenario: Sidebar content

- **GIVEN** the Beanery page is rendered on a wide viewport
- **WHEN** the page loads
- **THEN** a dark fixed sidebar SHALL show on the left with the site logo and tagline
- **AND** the sidebar SHALL show links HOME, ABOUT US, MENU, GALLERY, BLOG, and CONTACT US
- **AND** the sidebar SHALL show an "Order Online" outlined button, a phone number, an address, and social icons

#### Scenario: Mobile off-canvas menu

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user activates the hamburger toggle
- **THEN** the sidebar SHALL slide in as an off-canvas drawer with the same links and content
- **AND** a close control SHALL dismiss the drawer

### Requirement: Hero section

The system SHALL render a full-height hero with a background photo, dark
overlay, serif headline with a colored accent span, subtext, and a solid
copper call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "Handmade \"Cookies\" and Coffee Delights" with the quoted word "Cookies" in the brand copper color
- **AND** it SHALL show a subtext paragraph and a solid copper "Our Menu" button

### Requirement: About section

The system SHALL render a cream about section with a serif headline,
paragraph, signature image, and three hours blocks, followed by a
full-width image.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the headline "A boutique and fun cafe that brought together coffee cultures of the whole world in California." with a paragraph and a signature image
- **AND** it SHALL show three info blocks titled "Hours", "Dinner", and "Lunch", each with days and opening hours
- **AND** a full-width image SHALL appear below the text

### Requirement: Menu section

The system SHALL render a centered menu section with three category
columns, each containing five items with dotted-leader names, prices, and
descriptions.

#### Scenario: Menu content

- **GIVEN** the page is rendered
- **WHEN** the menu section is displayed
- **THEN** it SHALL show the heading "Our Menu" with a subtitle
- **AND** it SHALL show three categories titled "Coffee", "Drinks", and "Fast Food"
- **AND** each category SHALL list five items, each with a name, a price in the brand copper color, and a description

### Requirement: Services band

The system SHALL render a background-image band with four centered service
cards, each with an icon and white descriptive text.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services band is displayed
- **THEN** it SHALL show four service cards with icons
- **AND** each card SHALL show a white service description

### Requirement: Gallery

The system SHALL render a staggered gallery of four coffee-shop photos
pulled up over the services band.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery is displayed
- **THEN** it SHALL show four cafe/coffee images arranged in a staggered two-row layout

### Requirement: Testimonials

The system SHALL render a testimonial carousel with quotes, founder
photos, names, and roles.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Love from Customers"
- **AND** it SHALL show at least two testimonials, each with a quote, a portrait, a name, and a role

#### Scenario: Carousel navigation

- **GIVEN** the testimonial carousel is displayed
- **WHEN** the user activates a navigation control
- **THEN** the carousel SHALL advance to the next testimonial

### Requirement: Instagram band

The system SHALL render an instagram strip offset to the right of the
sidebar with several square photos and an "@handle" outline button.

#### Scenario: Instagram content

- **GIVEN** the page is rendered
- **WHEN** the instagram band is displayed
- **THEN** it SHALL show at least four square cafe photos
- **AND** it SHALL show an outline button with an instagram handle

### Requirement: Footer

The system SHALL render a cream footer with a contact column, a brand
column with social icons, a navigation column, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a "Contact Us" column with a phone number and an address
- **AND** a brand column with the logo, a blurb, and circular social icons
- **AND** a "Navigation" column with links About Us, Menu, Gallery, and Contact
- **AND** the footer SHALL show a copyright bar linking to Component Dock (https://www.componentdock.com/)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Beanery app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the sidebar header, hero, about, menu, services, gallery, testimonials, instagram band, and footer in order
- **AND** the document title SHALL be "Beanery — Decoffee Template"

## Verification checklist

- [ ] `openspec/specs/template-beanery/spec.md` present with the REAL
      section list (sidebar header → hero → about → menu → services →
      gallery → testimonials → instagram band → footer).
- [ ] Design tokens above (copper `#C46B48` + amber `#D6A04C`, navy
      `#202738`, cream `#F6F1EA`, `#C3D4E4` sidebar links, `#f9f9ff`
      light surfaces, Chivo + Shippori Mincho, square copper/outline
      buttons, dotted-leader menu prices, split sidebar layout, negative-
      margin gallery overlap, offset instagram strip) captured in the spec.
- [ ] `docs/templates/beanery/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh
    beanery`, PR lists source (ColorLib Decoffee), preview URL, tokens,
      and what differs.
