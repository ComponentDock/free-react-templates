# Template: Bolster (Business Consulting)

## Purpose

Bolster is a single-page business-consulting / business-loans landing page
template in the free-react-templates monorepo. It is an original React
recreation of the ColorLib free "Victor" design (see TEMPLATES.md — listed in
the Bootstrap 5 (89) category at line 635, with a duplicate row in the
Business (365) category at line 1219; both rows `- [ ]`), built under a
DIFFERENT name — **Bolster** (a support / strengthen-themed word; single
lowercase word, no collision with `apps/`, `openspec/specs/`,
`docs/templates/` or TEMPLATES.md — verified 2026-08-14) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a modern business/SaaS consulting landing page: a transparent
navbar (Home · About · Services · Portfolio · Blog dropdown · Contact) with a
phone number and a "Get Free Consultant" white button, a 900px photo hero
("Get the help you need, every step of the way" + "Get Started"), a 3-column
client value-prop row with circular avatars (Happier customers / Faster
growth / Connected workflow), a split "Flexible support to suit your business
needs" section with a 4-item accordion, a light-grey services band
("Improved Digital Experience") with two icon service cards, a photo
testimonial band ("I love that I was able to open a café ..." — Barb Dwyer,
CEO of Victor), a "Handpicked by Victor" 2-slide feature carousel, a
"Professional who works to help with your business" CTA split, and a navy
gradient 4-column footer with a copyright strip. Bolster recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

> NOTE (prep-stream 2026-08-14): the official preview
> `https://preview.colorlib.com/theme/victor/` is LIVE — fetched HTTP 200
> (~29.8 KB HTML + `assets/css/style.css` ~64 KB, curl-verified) and analyzed
> for this prep. The index page is a one-page layout (the nav links to
> about.html / services.html / portfolio.html / blog.html / contact.html
> sub-pages — see Design reference; the recreation is a single-page landing,
> so those links become anchor/placeholder links). The TEMPLATES.md
> screenshot (`victor-free-template.jpg`, 1200×946) was also viewed in a
> browser and matches the live render's navy + orange + white palette (its
> hero is an older split variant — solid navy left half + man-on-couch photo
> right; the live CSS renders a full-bleed photo hero with the caption
> column on the left; the live DOM/CSS is the structural authority).

## Design reference (replication findings)

- **Original:** ColorLib "Victor" — free HTML5 business / consulting /
  business-loan template (source: https://colorlib.com/wp/template/victor/).
  The recreation brands itself **Bolster** but keeps the same section
  structure, heading copy kinds, and photo set.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/victor/` (HTTP 200, ~29.8 KB HTML +
  `assets/css/style.css` ~64 KB; Bootstrap 5 + owl.carousel + slick +
  slicknav + wow + magnific-popup + nice-select + counterup/waypoints;
  assets under `assets/img/` — `logo/logo.png`, `hero/hero-shape.jpg`,
  `gallery/client1..3.jpg`, `gallery/about.jpg`, `icon/services1.svg`,
  `icon/services2.svg`, `gallery/services-img.jpg`, `icon/message.svg`,
  `gallery/project-img.jpg`, `icon/logo.svg`, `gallery/about2.png`,
  `logo/logo2_footer.png`, hero photo `img/hero/h1_hero1.jpg`, testimonial
  band photo `gallery/section-bg1.jpg`). Page structure (1:1 order):
  1. **Header** — `header-area.header-transparent` (position absolute, top 0,
     z-index 9; box-shadow `0 10px 15px rgba(25,25,25,0.1)`) >
     `div.main-header.header-sticky` (padding 0 88px, container-fluid) >
     `div.menu-wrapper.d-flex.align-items-center.justify-content-between`:
     - LEFT `div.left-content.d-flex.align-items-center`: `div.logo` —
       `a` > `img.logo.png` (orange lightning bolt + "Victor" wordmark →
       lucide Zap + "Bolster" text).
     - CENTER `div.main-menu.d-none.d-lg-block` > `nav`: links **Home
       (index.html) · About (about.html) · Services (services.html) ·
       Portfolio (portfolio.html) · Blog (# dropdown: Blog · Blog Details ·
       Element) · Contact (contact.html)** — `ul.main-menu li a` white 18px
       500, padding 37px 5px, hover white (DM Sans).
     - RIGHT `div.buttons`: `a.header-btn.mr-25` **"+10 (56) 745 3095"**
       (white 18px 500 + orange phone icon `i`, hover rotates icon 15deg) ·
       `a.white-btn.header-btn2` **"Get Free Consultant"** (white bg, orange
       18px 500 text, radius 5px, padding 25px 36px; hover fills orange,
       text flips white).
     - Mobile: `div.mobile_menu.d-block.d-lg-none` (slicknav hamburger).
     - Sticky (`sticky-bar` class added on scroll): position fixed top 0,
       width 100%, NAVY GRADIENT bg (`linear-gradient(45deg,#454e6d,#232f55)`),
       shadow, padding 15px 50px; `.button-header` hidden; menu link padding
       30px 5px; fadeInDown animation.
  2. **Hero (slider)** — `div.slider-area.position-relative` >
     `div.single-sliders.slider-height.slider-bg1.d-flex.align-items-center`
     (height 900px, bg image `img/hero/h1_hero1.jpg` cover — a smiling
     bearded man working on a laptop on a couch) > container >
     `div.row.align-items-center`:
     - LEFT `col-xxl-5.col-xl-5.col-lg-5.col-md-6` > `div.hero-caption
.text-center`: `h1` **"Get the help you need, every step of the way"**
       (white DM Sans 67px 700 lh 1.2, mb 15px; 57px ≤1200px) · `p`
       **"Design better websites and spend less with Essentials."** (white
       24px 500, mb 44px, padding 0 36px) · `a.btn.hero-btn` **"Get
       Started"** (orange `#FF6D21` bg, white 20px 500 text, radius 5px,
       padding 33px 58px).
     - RIGHT `col-xl-5.col-lg-5.col-md-6` > `div.hero-shape` (absolute, top
       111px right 100px) > `img.hero-shape.jpg`.
     - Screenshot variant: split hero — solid navy left half with the
       caption, photo right, white semicircle bottom-left + orange dot
       pattern bottom-right (decorative; the live DOM only has the
       hero-shape image).
  3. **Our Client (value props)** — `div.our-client.border-bottom.top-padding`
     (padding-top 120px, border-bottom) > container > row: 3 ×
     `col-xl-4.col-lg-6.col-md-6.col-sm-12` > `div.client-single.mb-45`
     (flex, align-items-center): `blockquote` (margin-right 30px) >
     `img.client1..3.jpg` (circular avatar photo) + `div.client-say`:
     `h2` **"Happier customers" / "Faster growth" / "Connected workflow"**
     (26px 700 navy `#232F55`) + `p` **"Design better websites and spend
     less with Essentials."** (source repeats the SAME tagline 3× —
     paraphrase into 3 distinct supporting lines).
  4. **Project us (accordion split)** — `section.project-us.section-padding`
     (padding 120px 0) > container > `row.justify-content-center` >
     `col-xxl-9`: `div.section-tittle.text-center.mb-70`: `h2` **"Flexible
     support to suit your business needs"** (44px 700 navy, lh 1.4, mb 22px)
     · `p` business-loan paragraph (`#6A6063` 18px 400 lh 1.5) — then
     `row.align-items-center.justify-content-center`:
     - LEFT `offset-xl-1.col-xl-5.col-lg-6.col-md-10` >
       `div.project-right-cap` > `div.project-right-img` > `img.about.jpg`.
     - RIGHT `offset-xl-1.col-xl-5` > `div.project-caption` >
       `div.collapse-wrapper` > `div.accordion` (id accordionExample): 4 ×
       `div.accordion-item` (border 0, border-bottom 1px `#E8ECF1`):
       - **"Starts the automated process."** (closed) — body: "The automated
         process starts as soon as your clothes go into the machine. Duis
         cursus, mi quis viverra ornare."
       - **"The automated process starts."** (OPEN by default — class
         `accordion-collapse.collapse.show`).
       - **"Automated process starts."** (closed).
       - **"Process the automated magic."** (closed).
       - `button.accordion-button` = 20px 700 navy `#232F55`, padding 20px
         10px 21px 34px, radius 0, background none; `:focus` color
         `#FF6D21`; bodies repeat the SAME lorem 4× — paraphrase into 4
         distinct business-support Q&A pairs (keep one item open by default).
  5. **Services (gray band)** — `section.services-area.gray-bg.section-padding`
     (bg `#F8FAFC`, padding 120px 0) > container > `row.justify-content-between`:
     - LEFT `col-xl-8`: `div.section-tittle.section-tittle3` (mb-45): `h2`
       **"Improved Digital Experience"** + `p` business-loan paragraph;
       `div.row`: 2 × `col-lg-6.col-md-6.col-sm-6` > `div.single-cat.mb-50`
       (WHITE bg, radius 10px, padding 52px 50px, z-index 1):
       - `div.cat-icon` (mb 21px) > `img.services1.svg` / `services2.svg`
         (icon) + `div.cat-cap`: `h5` > `a` **"Design & Development"** (24px
         700 navy, mb 25px) + `ul` 3 bullets ("- Design better websites an
         spend." [typo — fix "and spend"] · "- We'll extend your term." ·
         "- Get the breathing space now.") + `a.browse-btn` **"Learn More"**
         (orange `#FF6D21` 16px 500, 2px orange underline `::before` 11px
         below, hover letter-spacing 1px).
       - SOURCE REPEATS the SAME card ("Design & Development" + identical
         bullets) 2× — paraphrase into 2 distinct service cards (e.g.
         Design & Development + Digital Marketing) with distinct bullets.
     - RIGHT `col-xl-3` > `img.services-banner` (services-img.jpg, width
       100%, radius 10px).
  6. **Testimonial band (Emergency care)** — `div.emargency-care.section-img-bg2`
     (bg photo `gallery/section-bg1.jpg` via `data-background` attr, cover,
     padding 100px 0) > container > `row.justify-content-end` >
     `col-xl-5.col-lg-6.col-md-9` > `div.single-emargency` (WHITE bg, radius
     10px, padding 65px 50px 65px 60px, margin-left 80px): `div.emargency-cap`:
     `div.cat-icon` (mb 25px) > `img.message.svg` + `p.emargenc-cap`
     **"I love that I was able to open a café and transform it into a place
     that makes people happy. A small business loan from Prospa was a big
     part of making that possible."** (20px, mb 37px) + `div.ceo-name`
     (inline-block): `span` **"- Barb Dwyer"** (orange `#FF6D21` 22px 700)
     - `p` **"CEO of Victor"** (16px 500 — brand becomes **"CEO of
       Bolster"**).
  7. **Handpicked features (carousel)** — `div.services-area2.section-padding`
     (padding 120px 0) > container > `row.justify-content-center` >
     `col-lg-8`: `div.section-tittle.mb-60.text-center`: `h2` **"Handpicked
     by Victor"** (→ "Handpicked by Bolster") + `p` loan paragraph; then
     `col-xl-10` > `div.services1-active` (SLICK carousel — prev/next arrows
     outside, color `rgba(32,69,112,0.3)`, hover `#FF6D21`): 2 ×
     `div.single-services2.mb-30` (d-flex) — row of `col-xl-6.p-0` × 2:
     - LEFT `div.features-img` > `img.project-img.jpg` (height 400px, width
       100%, margin-left 20px, radius `10px 0 0 10px`).
     - RIGHT `div.features-caption` (bg `#F8FAFC`, height 400px, padding 60px
       40px): `img.icon/logo.svg` (orange bolt) + `h3` **"Essentials helped
       us to increase our revenue by more."** (30px 700 navy) + `p`
       "The automated process starts as soon as your clothes go into the
       machine." + `a.browse-btn` **"View Project"**.
     - SOURCE REPEATS the SAME slide 2× — paraphrase into 2 distinct
       project case-study rows.
  8. **Support CTA** — `div.support-company-area.bottom-padding` (padding
     bottom 120px) > container > `row.align-items-center.justify-content-between`:
     - LEFT `col-xl-6.col-lg-6.col-md-10` > `div.right-caption`: `div.section-tittle`:
       `h2` **"Professional who works to help with your business."** + `p`
       loan paragraph + `a.btn.about-btn` **"Get Started"** (orange bg,
       radius 5px, padding 35px 65px).
     - RIGHT `col-xl-6.col-lg-6.col-md-10` > `div.support-location-img` >
       `img.about2.png` (width 100%).
  9. **Footer** — `footer.footer-wrappper` (NAVY GRADIENT bg
     `linear-gradient(45deg, #454e6d 0%, #232f55 100%)`) >
     `div.footer-area.footer-padding` (padding-top 80px) > container >
     `row.justify-content-between`:
     - **Brand col** (`col-xl-3.col-lg-5.col-md-4.col-sm-6`,
       `single-footer-caption.mb-50`): `div.footer-logo.mb-25` >
       `a` > `img.logo2_footer.png` (white "Bolster" wordmark + orange bolt)
       - `div.footer-pera` `p` **"Get the breathing space now, and we'll
         extend your term at the other end."** (`#A2A6B2` 16px lh 1.8, mb 21px)
       - `div.footer-social`: 4 social icon `a` (themify/fontawesome → inline
         SVG brand icons).
     - **Services** (`col-xl-2`, `footer-tittle` `h4` **"Services"** white
       17px 700, mb 40px) + `ul` 5 × `a` (`#A2A6B2` 16px, hover white +
       underline): **Design & Strategy · Product Design · Digital Marketing ·
       Software Development · Ecommerce**.
     - **Navigation** (`col-xl-2`, `h4` **"Navigation"**) + SAME 5 links
       duplicated in source — paraphrase into distinct nav links (e.g. Home
       · About · Services · Portfolio · Contact).
     - **Contact us** (`col-xl-3.col-lg-4.col-md-4.col-sm-6`, `h4` **"Contact
       us"**) + `ul.mb-20` 3 × `a` (#): **consulto98@gmail.com · 76/A, Green
       road, NYC · (80) 783 367-3904** (phone as PLAIN TEXT — no literal
       `tel:` URI anywhere in source, per the secret-scan redaction trap).
     - **Copyright bar** — `div.footer-bottom-area` > `div.footer-border`
       (padding-top 45px) > `row` > `div.footer-copy-right.text-center` `p`
       (14px `#A2A6B2` lh 2): "Copyright © All rights reserved | This
       template is made with ♥ by ColorLib" (heart `i` + link orange
       `#FF6D21`; ColorLib attribution → MUST be replaced by the Component
       Dock line: "Made with ♥ by [Component Dock](https://www.componentdock.com/)"
       — see conventions; keep the dynamic year via
       `new Date().getFullYear()`).
     - `a.back-top` scroll-to-top button.
- **Visual design (screenshot, 1200×946, viewed in browser):** modern
  professional business/SaaS consulting landing. Split hero: deep navy solid
  left (~60%) with the white headline "Get the help you need, every step of
  the way." + sub-headline + bright orange "Get Started" button; right side
  a photo of a smiling bearded man on a couch working on a laptop; white
  semi-circle bottom-left + orange dotted pattern bottom-right. Navbar
  (screenshot variant): white bg, orange bolt logo + "Victor", centered
  links Home/About/Services/Portfolio/Blog/Contact, phone number + orange
  "Get Free Consultant" button. Below: light-grey section with three
  value-prop columns with circular avatars ("Happier customers", "Faster
  growth", "Connected workflow"), then the white "Flexible support to suit
  your business needs" accordion section. Palette: deep navy `#232F55` /
  `#454e6d`, vibrant orange `#FF6D21`, white + light-grey `#F8FAFC` bands.
  DM Sans throughout. The live preview renders the transparent header over
  the full-bleed photo hero (white links) — the navy/orange/white tokens are
  identical in both.

## Design tokens

- Brand orange: `#FF6D21` (`--color-brand`) — primary `.btn` background,
  browse-btn text + underline, white-btn text/hover fill, header phone icon,
  accordion-button focus, slick arrow hover, testimonial ceo-name span,
  footer link/heart, logo bolt.
- Navy ink: `#232F55` (`--color-ink`) — all headings (h1–h6 base color),
  accordion-button text, cat-cap h5, features-caption h3; gradient partner
  `#454e6d`.
- Navy gradient: `linear-gradient(45deg, #454e6d 0%, #232f55 100%)`
  (`--color-footer`) — footer wrapper bg AND sticky header bg.
- Light band: `#F8FAFC` (`--color-surface`, `.gray-bg`) — services band,
  features-caption bg.
- Text: section-tittle `p` `#6A6063` 18px 400 lh 1.5 · footer text
  `#A2A6B2` 16px lh 1.8 (copyright 14px lh 2) · client bullets `#6A6063`.
- Accent neutrals: accordion border `#E8ECF1`; card white `#fff`; hero
  caption white text; slick arrow `rgba(32,69,112,0.3)`.
- Font: **DM Sans** 400/500/700 via Google Fonts `<link>` in `index.html`
  (source `@import` `fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700`).
- Headings: hero `h1` 67px 700 lh 1.2 white (57px ≤1200px); section-tittle
  `h2` 44px 700 navy lh 1.4 mb 22px (40px ≤1200px); client-say `h2` 26px
  700; cat-cap `h5`/`a` 24px 700 navy; features-caption `h3` 30px 700;
  accordion-button 20px 700 navy; footer-tittle `h4` 17px 700 white mb 40px.
- Buttons: radius **5px** everywhere; `.btn` = orange `#FF6D21` bg, white
  20px 500 text, padding 22px 32px; `.hero-btn` padding 33px 58px (hero),
  `.about-btn` padding 35px 65px (CTA); `.white-btn` = white bg + orange
  18px 500 text (header "Get Free Consultant"), hover: orange fill sweep
  (scaleX origin-0) + white text; `.browse-btn` = orange 16px 500 text with
  a 2px orange underline 11px below (`::before`), hover letter-spacing 1px.
- Cards: `.single-cat` white, radius 10px, padding 52px 50px (mb 50px);
  `.single-emargency` white, radius 10px, padding 65px 50px 65px 60px;
  `.features-img` radius `10px 0 0 10px`, height 400px; `.features-caption`
  `#F8FAFC`, height 400px, padding 60px 40px; `.services-banner` radius 10px.
- Header: transparent absolute top 0 z-9; links white 18px 500 padding 37px
  5px; sticky → fixed top, navy gradient, shadow, padding 15px 50px, hides
  the phone/consultant buttons.
- Section rhythm: photo hero (900px) → white (top-padding 120px) → white
  accordion (section-padding 120px) → gray `#F8FAFC` services → photo
  testimonial band (100px) → white feature carousel (120px) → white CTA
  (bottom-padding 120px) → navy gradient footer (padding-top 80px + border
  strip).
- Accordion: items border-0 with `border-bottom: 1px solid #E8ECF1`;
  buttons background none, radius 0, padding 20px 10px 21px 34px; SECOND
  item open by default; focus/active text orange.
- Client row: circular avatar photos (blockquote mr 30px), `h2` 26px 700
  navy, section has `border-bottom` + top-padding 120px.
- Misc: hero-shape decorative image absolute top 111px right 100px; slick
  carousel arrows outside the slide area; WOW/AOS-style fade-in scroll
  animations (use lightweight CSS/IntersectionObserver equivalents);
  back-top scroll-to-top button.

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar overlaying the hero with the
Bolster brand (orange bolt icon + "Bolster"), centered nav links (Home ·
About · Services · Portfolio · Blog · Contact), a phone number, and a white
"Get Free Consultant" button. The navbar SHALL switch to a fixed navy
gradient bar with a shadow once the page scrolls past the hero.

#### Scenario: Navbar content

- **GIVEN** the Bolster page is rendered
- **WHEN** the top of the page is inspected
- **THEN** the navbar SHALL show the brand "Bolster" with an orange bolt
  icon on the left
- **AND** the nav links Home, About, Services, Portfolio, Blog, Contact
  SHALL be present on desktop
- **AND** a phone number and a "Get Free Consultant" button SHALL be shown
  on the right on desktop
- **AND** a mobile menu toggle SHALL be available below the desktop
  breakpoint

#### Scenario: Scroll behavior

- **GIVEN** the Bolster page is rendered
- **WHEN** the page is scrolled past the hero
- **THEN** the navbar SHALL become fixed with a navy gradient background,
  a shadow, and reduced link padding

### Requirement: Hero

The system SHALL render a 900px-tall hero with a full-bleed photo background,
a left caption column (headline "Get the help you need, every step of the
way", sub-headline "Design better websites and spend less with Essentials."),
a large orange "Get Started" button, and a decorative hero-shape image on
the right.

#### Scenario: Hero content

- **GIVEN** the Bolster page is rendered
- **WHEN** the hero section is inspected
- **THEN** the hero SHALL be 900px tall with a photo background and the
  caption column on the left
- **AND** the headline SHALL read "Get the help you need, every step of the
  way"
- **AND** the sub-headline SHALL read "Design better websites and spend less
  with Essentials."
- **AND** an orange "Get Started" button SHALL be present

### Requirement: Client value props

The system SHALL render a white row with a bottom border and three value
props, each with a circular avatar photo and a title: "Happier customers",
"Faster growth", "Connected workflow", each with a distinct supporting
tagline.

#### Scenario: Value prop items

- **GIVEN** the Bolster page is rendered
- **WHEN** the client row is inspected
- **THEN** three value props SHALL be shown side by side on desktop
- **AND** each SHALL contain a circular avatar photo, one of the titles
  Happier customers / Faster growth / Connected workflow, and a distinct
  tagline

### Requirement: Accordion section

The system SHALL render a split section with the centered heading "Flexible
support to suit your business needs", a paragraph, an image on the left, and
a four-item accordion on the right (one item open by default). Each item
SHALL toggle open/closed, show a navy question and a paragraph answer, and
turn orange on focus.

#### Scenario: Accordion items

- **GIVEN** the Bolster page is rendered
- **WHEN** the accordion section is inspected
- **THEN** the heading SHALL read "Flexible support to suit your business
  needs"
- **AND** an image SHALL appear on the left of the accordion
- **AND** four accordion items SHALL be present, each with a distinct
  question and answer
- **AND** the second item SHALL be open by default
- **AND** clicking a closed item SHALL expand it and collapse the previously
  open one

### Requirement: Services band

The system SHALL render a light `#F8FAFC` band with the heading "Improved
Digital Experience", two white rounded service cards (each with an icon, a
distinct title, three bullets, and a "Learn More" link), and a banner image
on the right.

#### Scenario: Service cards

- **GIVEN** the Bolster page is rendered
- **WHEN** the services band is inspected
- **THEN** the heading SHALL read "Improved Digital Experience"
- **AND** two service cards SHALL appear side by side, each with an icon, a
  distinct title, three bullets, and an orange "Learn More" link with an
  underline
- **AND** a banner image SHALL appear to the right of the cards on desktop

### Requirement: Testimonial band

The system SHALL render a photo-background band with a white rounded card on
the right containing a message icon, a business-loan testimonial quote, and
a byline: orange name "- Barb Dwyer" and position "CEO of Bolster".

#### Scenario: Testimonial content

- **GIVEN** the Bolster page is rendered
- **WHEN** the testimonial band is inspected
- **THEN** the band SHALL have a photo background with the white card
  overlaid on the right
- **AND** the card SHALL show a message icon, a quote, the name "- Barb
  Dwyer" in orange, and the position "CEO of Bolster"

### Requirement: Feature carousel

The system SHALL render the "Handpicked by Bolster" section with a
two-slide carousel. Each slide SHALL pair a project photo (rounded on the
left edge) with a light caption panel (icon, distinct case-study title,
paragraph, "View Project" link), with prev/next arrows.

#### Scenario: Carousel slides

- **GIVEN** the Bolster page is rendered
- **WHEN** the feature carousel is inspected
- **THEN** the heading SHALL read "Handpicked by Bolster"
- **AND** two slides SHALL be navigable via prev/next arrows
- **AND** each slide SHALL contain a photo, an icon, a distinct title, a
  paragraph, and a "View Project" link

### Requirement: Support CTA

The system SHALL render a split CTA section with the heading "Professional
who works to help with your business.", a paragraph, a large orange "Get
Started" button on the left, and an image on the right.

#### Scenario: CTA content

- **GIVEN** the Bolster page is rendered
- **WHEN** the support CTA section is inspected
- **THEN** the heading SHALL read "Professional who works to help with your
  business."
- **AND** a large orange "Get Started" button SHALL be present on the left
- **AND** an image SHALL appear on the right on desktop

### Requirement: Footer

The system SHALL render a navy-gradient footer with four columns: brand
(logo + blurb + social icons), Services (5 links), Navigation (5 links),
Contact us (email, address, phone as plain text), plus a darker copyright
strip.

#### Scenario: Footer columns

- **GIVEN** the Bolster page is rendered
- **WHEN** the footer is inspected
- **THEN** the footer SHALL have a navy gradient background
- **AND** the brand column SHALL show the logo, a blurb, and social icons
- **AND** a Services column SHALL list five service links
- **AND** a Navigation column SHALL list five distinct nav links
- **AND** a "Contact us" column SHALL show an email, an address, and a
  phone number

#### Scenario: Copyright and attribution

- **GIVEN** the Bolster page is rendered
- **WHEN** the copyright bar is inspected
- **THEN** it SHALL show the current year and the words "All rights
  reserved"
- **AND** it SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock"
- **AND** no ColorLib reference SHALL appear anywhere in the app code

### Requirement: Design tokens and fidelity

The system SHALL implement the design tokens from the Design tokens
section: `#FF6D21` orange as the theme brand color, `#232F55` navy ink,
`#F8FAFC` light surface, the navy gradient `#454e6d → #232f55` for footer
and sticky header, DM Sans via Google Fonts `<link>` in `index.html`,
5px-radius buttons, and the exact section order (header → hero → client
props → accordion → services → testimonial → feature carousel → CTA →
footer).

#### Scenario: Token application

- **GIVEN** the Bolster app is implemented
- **WHEN** the stylesheet is inspected
- **THEN** the brand color `#FF6D21` SHALL be defined as a theme token and
  used by primary buttons, browse links, and accent text
- **AND** `#232F55` SHALL be used for headings
- **AND** the navy gradient SHALL be used for the footer and the sticky
  header
- **AND** DM Sans SHALL be loaded via Google Fonts links in `index.html`
- **AND** buttons SHALL have a 5px border radius
- **AND** the section order SHALL be: header → hero → client props →
  accordion → services → testimonial → feature carousel → CTA → footer

## Verification checklist

- [ ] `openspec/specs/template-bolster/spec.md` — Gherkin scenarios above
      map 1:1 to vitest scenarios (one `describe` per component).
- [ ] `npm run spec:validate` passes for the new spec.
- [ ] Replication fidelity: section order 1:1 (header → hero → client props →
      accordion → services → testimonial → feature carousel → CTA → footer);
      tokens `#FF6D21` / `#232F55` / `#454e6d` / `#F8FAFC`; navy gradient
      footer + sticky header; DM Sans font; 5px-radius buttons; 44px 700
      section h2s; 67px hero h1; orange browse-btn underline links.
- [ ] Placeholder images: `https://picsum.photos/seed/bolster-<n>/<w>/<h>`
      (deterministic per template). Subject-critical photos: hero (person at
      a laptop / working scene — screen seeds per the seed-screening method
      in the colorlib-template-replication skill), client avatars (3
      headshots), accordion-side image, services banner, testimonial band
      background, feature-slide project photos, CTA image.
- [ ] Icons: lucide-react (Zap, Phone, Menu, ChevronDown, ArrowRight,
      MessageSquareQuote or similar); social brand icons (X/Twitter,
      Facebook, Instagram, LinkedIn) as inline SVG paths (lucide removed
      brand icons — verify every import with the typeof probe).
- [ ] Source repetition paraphrased in the recreation: the 3 identical
      client taglines → distinct lines; the 4 near-identical accordion
      questions/bodies → distinct Q&A pairs; the 2 identical "Design &
      Development" service cards → distinct services with distinct bullets;
      the 2 identical feature slides → distinct case studies; the footer
      Navigation column (duplicate of Services) → distinct links.
- [ ] Source typo fixed silently: client bullet "Design better websites an
      spend." → "and spend"; brand mentions "Victor" → "Bolster"
      ("Handpicked by Victor" → "Handpicked by Bolster"; "CEO of Victor" →
      "CEO of Bolster").
- [ ] Sticky navbar: transparent over the hero → fixed navy gradient + shadow
      after scroll (scroll listener with cleanup).
- [ ] Accordion: one item open by default, click toggles, focus color orange.
- [ ] Carousel: two slides, prev/next arrows, testable index-based state.
- [ ] Footer MUST link `https://www.componentdock.com/` ("Component Dock")
      and MUST NOT reference ColorLib in any app file (provenance only in
      this spec / TEMPLATES.md / PR). Phone "(80) 783 367-3904" as plain
      text — NO literal `tel:` URI anywhere in source (secret-scan
      redaction trap; see replication skill).
- [ ] 100% coverage lines/functions/branches/statements;
      `scripts/verify-app.sh bolster` green; full gate via CI on merge.
- [ ] PR description: source template (ColorLib Victor), preview URL
      (`https://preview.colorlib.com/theme/victor/`), design tokens used,
      what differs (renames, placeholder images, paraphrased copy, fixed
      source typos).
