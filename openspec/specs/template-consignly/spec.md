# Template: Consignly (Logistics Company Template)

## Purpose

Consignly is a single-page logistics & freight company home-page template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Foundation2" template design (see TEMPLATES.md — appears 3×:
lines 583, 1019, 2958; all three rows point to the same source, one prep
covers all; verified with `grep -c 'wp/template/foundation2/'` = 3), built
under a DIFFERENT name (Consignly — freight consignment, per the monorepo
naming mandate) with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Foundation2" — logistics company template
  (source: https://colorlib.com/wp/template/foundation2/). Not to be
  confused with ColorLib "Foundation" (a charity template, already shipped
  in this repo as `benevol`).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/foundation2/
  (HTTP 200, ~32.5 KB HTML fetched + parsed; `css/style.css` ~47.7 KB parsed
  for tokens; vendor sheets: bootstrap 5 (bundled), tiny-slider, aos,
  glightbox; icon font `fonts/icomoon/style.css` for social/arrow/play
  glyphs; JS: bootstrap.bundle, tiny-slider, counter.js (count-up), aos.js,
  glightbox, navbar.js). Site is jQuery-free Bootstrap 5 + tiny-slider —
  NOT Tailwind.
- **Screenshot analyzed:** `foundation2-free-template.jpg` (1200×946,
  TEMPLATES.md line 583, verified via browser vision) — deep navy hero
  (`#0f1f3d`-looking, real tokens #070d59/#081158) with a low-opacity
  dot-matrix world map graphic, centered white Montserrat headline "Find
  logistic services", a search input with a bright cyan "Search" button, and
  a 4-metric counter row (# of Companies / Ship Freight / Air Freight /
  Sea Freight) below; three white service cards (Air/Sea/Land Freight with
  cyan icons) overlapping the hero bottom edge; then an About section
  (label + heading + paragraph + feature list left, warehouse photo right).
  Corporate, clean, modern B2B freight aesthetic: dark navy + cyan accent on
  white, professional and established.
- **Section order (1:1, from live preview DOM):**
  1. Navbar (`div.site-nav`, `position: absolute; top: 0; z-index: 9;
width: 100%`, padding 20px) — white Montserrat 700 24px logo link
     "Foundation" (`.logo`, color #fff) left; right `nav.site-navigation`
     links 14px, color `rgba(255,255,255,.7)`, padding 10px 15px, hover +
     active → #fff: Home, Dropdown ▾ (has-children: Menu One, Menu Two ▸
     with Sub Menu One / Sub Menu Two / Sub Menu Three, Menu Three; white
     dropdown panel `box-shadow 0 2px 10px -2px rgba(0,0,0,.1)`, padding
     20px 0, min-width 180px items, link hover → #081158), Services,
     About, Contact Us. Mobile: burger (`.burger`, white lines) toggling a
     300px white off-canvas panel from the right (`site-mobile-menu`,
     translateX(100%) → 0 with cubic-bezier 0.8s) with the same links,
     indented submenu + arrow-collapse toggles, close × control.
  2. Hero (`div.hero`, `background: #070d59; height: 100vh;
min-height: 600px; padding-top: 12rem; padding-bottom: 12rem`) — `div.map`
     absolute top 10% center, width 80%: dot-matrix world map image
     (`images/world-dotted-map.png` — recreate as an inline SVG dotted map,
     NOT the PNG asset). Centered col-lg-7: `h1.heading` 60px/700 Montserrat
     #fff "Find logistic services" (mb 0); `p.lead` 14px #fff (lorem copy);
     `form.form-search` (d-flex, mb-5): text input (placeholder "Your ZIP
     code or City. e.g. New York", borderless, 45px, bottom-border
     #2c3237, focus → #081158) + `button.btn.btn-primary` "Search" —
     styled `background: #00eaff; color: #081158; padding: 12px 30px`
     (cyan button, navy text). Below: `div.row.section-counter` of 4
     `div.counter-wrap` (col-lg-3): `span.number` 30px Montserrat 700 #fff
     with a 30×2px `#00eaff` underline (`:after`), + `span.caption`
     `rgba(255,255,255,.5)`: **2917 # of Companies**, **3918 # of Road
     Freight**, **38928 # of Air Freight**, **7192 # of Sea Freight**
     (count-up animation on scroll via counter.js).
  3. Services (`div.section.section-1`, `margin-top: -200px` — overlaps
     hero bottom; `padding-top/bottom: 7rem`) — 3 `div.feature.box-shadow
d-flex` cards (col-lg-4): `background: #fff; box-shadow: 0 15px 30px
0 rgba(0,0,0,.1); border-radius: 4px; padding: 30px; margin-bottom:
30px`; icon box (flex 0 0 80px, margin-right 20px) with svg icon
     (001-airplane.svg / 002-cargo-ship.svg / 003-truck.svg → lucide
     Plane/Ship/Truck in cyan #29eafd); text: `h3.heading` 16px/700 #000
     "Air Freight" / "Sea Freight" / "Land Freight", paragraph, and a
     `.more` link "Read more" — 11px/700 uppercase, letter-spacing .1rem,
     with a right arrow span in a 15px square that fills #081158 on hover.
  4. About (`div.section.pt-0`, white) — row `justify-content-between`:
     right col-lg-6 `order-lg-2`: `a.video-wrap.glightbox` — rounded image
     (`images/hero_bg_1.jpg` — warehouse photo, `img-fluid rounded`,
     links to a vimeo video) with a 50px circular play overlay
     (`rgba(0,0,0,.2)` bg, white play icon, grows to 60px on hover); left
     col-lg-5: `span.subheading` "Mission" (11px/700 uppercase,
     letter-spacing .1rem, #adb5bd), `h2.heading` "About Us" (#000),
     paragraph, then 2 `div.feature.d-flex.mb-5` rows: icon + `h3.heading`
     "Air Freight" / "Sea Freight" with blurbs.
  5. CTA band (`div.section.pt-0.bg-img.py-5.overlay`, bg image
     `images/hero_bg_1.jpg`, `background-attachment: fixed`, overlay
     `:before rgba(8,17,88,.8)`, 50vh / min-height 650px) — centered
     col-lg-7: `h2` #fff "Delivering Results for Industry Leaders"
     (45px/700 Montserrat, line-height 1.4), white paragraph, `a.btn
btn-primary` "Get started" (navy #081158 bg, white text, padding
     12px 30px, radius 4px).
  6. Testimonials + Why Choose Us (`div.section.bg-light` — #f8f9fa) —
     single row: left col-lg-5 `div.testimonial-slide-wrap`: `span.subheading`
     "Testimonials" + `h2.heading` "Happy Customer" + tiny-slider of 3
     `div.testimonial-slide`: `div.block-testimonial` — `span.author` img
     80px circle (person_1/2/3.jpg), `h3` 18px/700 #000 name + `div.position`
     14px role, `blockquote` 18px/line-height 2 #000 italic-ish quote.
     Slides: **John Doe — CEO, Founder**; **James Woodland — Designer at
     Facebook**; **Rob Smith — Product Designer at Twitter**. Dot nav
     (`tns-nav`: 7px circles #ccc → active/hover #081158) + prev/next
     square buttons (`#prevnext-testimonial`, 40px #efefef, radius 4px,
     #081158 icons, hover → #081158 bg / white icon). Right col-lg-6:
     `span.subheading` "Why Us" + `h2.heading` "Why Choose Us" (mb-5) +
     `div.custom-accordion` (#accordion_1) of 3 `div.accordion-item`
     (radius 0, `h2.mb-0` wrapping `button.btn.btn-link` — bold #000,
     padding 15px 0 15px 40px, plus icon at left 15px via icomoon
     `\e145`; hover bg #efefef; open state `[aria-expanded=true]` →
     `background: #081158; color: #fff; font-weight: 700` with a "—"
     minus glyph; `div.accordion-body` padding 20px): **Easily Find
     Logistics** (open by default), **Delivering Results for Industry
     Leaders**, **Fast and Secure Transportation** — each with a 1–2
     sentence lorem body.
  7. Blog (`div.section`, white) — `span.subheading` "News" + `h2.heading`
     "Latest News"; row of 4 `div.col-sm-6.col-md-6.col-lg-3.blog-entry`
     cards: `a.media-thumb` image (img_1/2/3.jpg — hover: `transform:
scale(1.07)` + `:after rgba(8,17,88,.8)` overlay), `h3.post-title`
     18px/700 #000 "Far far away, behind the word mountains", meta date
     "Aug 20, 2020", excerpt, "Read more" link (`.more` style).
  8. Footer (`div.site-footer`, `background: #efefef; color: #888; font-size:
14px; padding: 70px 0`) — row: widget 1 "About Foundation ." —
     brand + about paragraph; widget 2 "Connect" — 6 circular social links
     (30px, `background: #777`, white icomoon icon, radius 50%, hover →
     #0c1a87): instagram, twitter, facebook, linkedin, pinterest,
     dribbble; widget 3 "Links" + widget 4 "Company" — same link list
     (About us, Services, News, Careers, Contact, #777, hover #081158);
     widget 5 "Contact" — "43 Raymouth Rd. Baltemoer, London 3910", two
     phone numbers "+1(123)-456-7890", email "info@mydomain.com";
     copyright bar: "© <year> All rights reserved | This template is made
     with ❤ by Colorlib" → replaced by the Component Dock attribution link.
- **Design tokens extracted from the preview CSS (computed values verified
  in the stylesheet):**
  - Fonts: **"Montserrat", sans-serif** (headings, logo, counter numbers, 700) + **"Open Sans", sans-serif** (body, 14px/400).
  - Primary navy: **#081158** (`--bs-primary`, links, `.btn-primary`,
    accordion open bg, active dropdown item, testimonial dot active) —
    hover darker **#060e46** / **#070e4b**; link hover #060e46.
  - Hero navy: **#070d59** (hero bg); overlay `rgba(8,17,88,.8)` (CTA band
    - blog image hover).
  - Accent cyan: **#29eafd** (`--bs-secondary`, service icons) with hero
    button + counter underline **#00eaff**; hovers **#3eecfd** / **#49edfd**.
  - Ink: **#212529** (body text); muted **#6c757d**; label gray **#adb5bd**
    (subheadings 11px/700/uppercase/letter-spacing .1rem).
  - Light bands: **#f8f9fa** (testimonials/why-us), **#efefef** (footer,
    accordion hover, prev/next buttons).
  - Footer: **#efefef** bg, **#888** text, links **#777** (hover #081158),
    social circles #777 → hover **#0c1a87**.
  - Card: `border-radius: 4px`, `box-shadow: 0 15px 30px 0 rgba(0,0,0,.1)`;
    dropdown shadow `0 2px 10px -2px rgba(0,0,0,.1)`.
  - Buttons: `padding: 12px 30px; font-size: 14px; border-radius: 4px`
    (0.25rem); primary = navy bg / white text; hero Search = **#00eaff** bg
    / **#081158** text; no focus ring (`box-shadow: none`).
  - `.more` links: 11px/700 uppercase, letter-spacing .1rem, arrow square
    fills #081158 on hover.
  - Radii: 4px (cards/buttons), 50% (social circles, testimonial photos,
    play overlay).
- **Recreation decisions:** all photos → seeded picsum
  (`https://picsum.photos/seed/consignly-<n>/<w>/<h>`): about/video image
  consignly-1 (warehouse/cargo subject — screen with the seed-screening
  method from the replication skill), CTA bg consignly-2, testimonial
  avatars consignly-3..5 (verified person photos: 1027, 64, 823 from the
  skill's verified list), blog cards consignly-6..9; the dot-matrix world
  map → inline SVG dotted-world graphic (never the ColorLib PNG); service
  icons → lucide-react (Plane, Ship, Truck); other icons → lucide (Search,
  ArrowRight, Play, ChevronLeft, ChevronRight, Plus, Minus, Menu, X,
  Instagram, Twitter, Facebook, Linkedin — brand icons are inline SVG paths
  per the replication skill); fonts Montserrat + Open Sans via Google Fonts
  `<link>` in `index.html`; count-up counters → a scroll-triggered
  `useInView` + count-up hook (no deps); testimonial slider + accordion →
  state-based components (no deps); video-wrap play control → accessible
  button (aria-label) that opens a lightbox-style inline player (poster +
  sample video or modal) without new deps; nav dropdown + mobile off-canvas
  → state + aria-expanded; footer ColorLib credit → Component Dock
  attribution (`https://www.componentdock.com/`). Tokens #081158 / #070d59 /
  #00eaff / #29eafd / #212529 / #6c757d / #adb5bd / #f8f9fa / #efefef /
  #777 / #0c1a87 in `@theme`. Brand "Foundation" → "Consignly" everywhere
  (logo, document title).

Consignly lives in `apps/consignly` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with a white
logo, a desktop link menu with a dropdown, and a mobile off-canvas menu.

#### Scenario: Logo and desktop menu

- **GIVEN** the Consignly page is rendered at the top of the page
- **WHEN** the page loads
- **THEN** a transparent navbar SHALL overlay the hero with the white
  Montserrat 700 "Consignly" logo on the left
- **AND** 14px links in `rgba(255,255,255,.7)` SHALL render on the right:
  Home, Dropdown, Services, About, and Contact Us
- **AND** the active and hovered links SHALL turn white

#### Scenario: Dropdown submenu

- **GIVEN** the desktop menu is rendered
- **WHEN** the user activates the Dropdown link
- **THEN** a white dropdown panel SHALL open listing Menu One, Menu Two
  (with Sub Menu One, Sub Menu Two, Sub Menu Three), and Menu Three
- **AND** the trigger SHALL expose `aria-expanded` and close on outside
  click or Escape

#### Scenario: Mobile off-canvas menu

- **GIVEN** a narrow viewport
- **WHEN** the user opens the burger toggle
- **THEN** a white 300px off-canvas panel SHALL slide in from the right
  with the same links and the indented submenu
- **AND** a close control SHALL dismiss it, and choosing a link SHALL close
  it too

### Requirement: Hero

The system SHALL render a full-height navy hero with a dotted world map,
headline, search form, and a four-counter stats row.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL fill the viewport (min 600px) on the #070d59
  background
- **AND** a dot-matrix world map graphic SHALL render centered near the top
  at low opacity
- **AND** the centered 60px/700 white Montserrat headline "Find logistic
  services" SHALL render with a white lead paragraph below

#### Scenario: Search form

- **GIVEN** the hero search form is rendered
- **WHEN** the user submits it
- **THEN** the form SHALL contain a borderless input with the placeholder
  "Your ZIP code or City. e.g. New York" and a cyan "Search" button
  (bg #00eaff, text #081158, padding 12px 30px)
- **AND** submitting SHALL NOT reload the page

#### Scenario: Stats counters

- **GIVEN** the hero is rendered
- **WHEN** the counters scroll into view
- **THEN** four counters SHALL render — 2917 # of Companies, 3918 # of
  Road Freight, 38928 # of Air Freight, 7192 # of Sea Freight — each a
  white Montserrat 700 number (30px) with a 30×2px #00eaff underline and a
  `rgba(255,255,255,.5)` caption
- **AND** the numbers SHALL count up from 0 when they enter the viewport

### Requirement: Services

The system SHALL render three white service cards overlapping the hero
bottom edge with icon, title, blurb, and a Read more link.

#### Scenario: Services content

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** three cards SHALL overlap the hero bottom (negative top margin)
  in a responsive 3-column grid, white with `border-radius: 4px` and
  shadow `0 15px 30px 0 rgba(0,0,0,.1)`
- **AND** each card SHALL show a cyan icon (plane, ship, truck), a 16px
  bold title (Air Freight, Sea Freight, Land Freight), a paragraph, and an
  uppercase "Read more" link with an arrow that fills #081158 on hover

### Requirement: About

The system SHALL render a split About section with a video-wrap image on
one side and a Mission heading, copy, and two feature rows on the other.

#### Scenario: About content

- **GIVEN** the About section is rendered
- **WHEN** the page loads
- **THEN** the right half SHALL show a rounded photo with a circular play
  control overlay (white play icon, grows on hover) that is an accessible
  button
- **AND** the left half SHALL show the 11px uppercase "Mission" subheading,
  the "About Us" heading, a paragraph, and two icon + title feature rows:
  Air Freight (plane icon) and Sea Freight (ship icon)

### Requirement: CTA band

The system SHALL render a full-width photo band with a navy overlay, a
headline, copy, and a Get started button.

#### Scenario: CTA band content

- **GIVEN** the CTA band is rendered
- **WHEN** the page loads
- **THEN** a background photo (fixed attachment) SHALL render under the
  `rgba(8,17,88,.8)` overlay, ~50vh tall (min 650px)
- **AND** the centered white 45px/700 heading "Delivering Results for
  Industry Leaders" SHALL render with a white paragraph and a navy
  "Get started" button (bg #081158, white text)

### Requirement: Testimonials

The system SHALL render a "Happy Customer" testimonial slider with three
slides, dot pagination, and prev/next controls.

#### Scenario: Testimonial slider

- **GIVEN** the testimonials section is rendered on the #f8f9fa band
- **WHEN** the page loads
- **THEN** the 11px uppercase "Testimonials" subheading and "Happy
  Customer" heading SHALL render above a slider of three slides
- **AND** each slide SHALL show a circular 80px avatar, a bold 18px name
  and 14px role (John Doe — CEO, Founder; James Woodland — Designer at
  Facebook; Rob Smith — Product Designer at Twitter), and an 18px quote
- **AND** 7px dot pagination (active dot #081158) and prev/next square
  buttons (hover → #081158 bg, white icon) SHALL step through the slides

### Requirement: Why Choose Us

The system SHALL render a "Why Choose Us" block with a three-item
accordion on the same light band.

#### Scenario: Accordion content

- **GIVEN** the Why Choose Us block is rendered
- **WHEN** the page loads
- **THEN** the 11px uppercase "Why Us" subheading and "Why Choose Us"
  heading SHALL render beside the testimonials column
- **AND** an accordion SHALL list Easily Find Logistics (open by default),
  Delivering Results for Industry Leaders, and Fast and Secure
  Transportation, each with a body paragraph
- **AND** opening an item SHALL give it the #081158 background with white
  bold text and a minus glyph, while the plus glyph indicates closed items

### Requirement: Blog

The system SHALL render a "Latest News" section with four blog cards.

#### Scenario: Blog content

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** the 11px uppercase "News" subheading and "Latest News" heading
  SHALL render above a responsive 4-column grid of blog cards
- **AND** each card SHALL show a photo (zoom + navy overlay on hover), a
  bold 18px title, the date "Aug 20, 2020", an excerpt, and a Read more
  link

### Requirement: Footer

The system SHALL render a light-gray footer with about text, social
circles, link columns, contact info, and the Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have the #efefef background with #888 text and
  an "About Consignly" widget with an about paragraph
- **AND** six circular #777 social icon links (instagram, twitter,
  facebook, linkedin, pinterest, dribbble) SHALL render, darkening to
  #0c1a87 on hover
- **AND** "Links" and "Company" columns SHALL list About us, Services,
  News, Careers, Contact
- **AND** the "Contact" widget SHALL show the address "43 Raymouth Rd.
  Baltemoer, London 3910", two phone numbers, and "info@mydomain.com"
- **AND** the copyright bar SHALL carry the Component Dock attribution link
  (https://www.componentdock.com/)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper
landmarks and a document title.

#### Scenario: Full page render

- **GIVEN** the Consignly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar and hero in the banner
  landmark, the services, About, CTA band, testimonials, Why Choose Us, and
  blog sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Consignly — Logistics Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/consignly` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- consignly` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#081158, #070d59, #00eaff, #29eafd, #212529, #6c757d, #adb5bd, #f8f9fa, #efefef, #777, #0c1a87, Montserrat + Open Sans) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `consignly-<n>`, inline SVG dotted map, Google Fonts link, lucide + inline SVG brand icons only)
- [ ] Count-up counters, testimonial slider, and accordion implemented with client-side state, no new deps
- [ ] Hero search form submits without reload; video play control is an accessible button
- [ ] Dropdown + mobile off-canvas menu accessible (aria-expanded, Escape, outside click)
- [ ] Footer copyright bar carries the Component Dock attribution link
