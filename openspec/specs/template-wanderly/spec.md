# Template: Wanderly (Travel / Tourism)

## Purpose

Wanderly is a single-page travel / tourism website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Passport" website template
(source: https://colorlib.com/wp/template/passport/ — "Passport — Free
Bootstrap 5 Website Template by Colorlib"), built under a DIFFERENT name
(Wanderly — "wander" plus the friendly "-ly" suffix matching the family
convention: Wingly, Drivly, Nestly, Bookly, Coastly, Restly, Sleeply,
Dozely, Soarly, Lodgely, Sneakly, Taply, Ascendly, Serverly, Framely,
Cargoly, Estately; single lowercase word, no collision with `apps/`,
`openspec/specs/` or `docs/templates/` — verified 2026-08-13), per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The source appears TWICE in TEMPLATES.md (dup-row trap): line 615
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one)
and line 2988 (**Travel (44)**) — both `- [ ]` rows of the SAME template.
ONE implementation covers both rows (mark all `[x]` with the same surge
URL at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Passport" — page title "Passport — Free
  Bootstrap 5 Website Template by Colorlib". Bootstrap 5 based
  (bootstrap.min.js + tiny-slider + AOS + glightbox + flatpickr +
  icomoon/flaticon icon fonts + custom `css/style.css` ~63 KB).
  The recreation brands itself **Wanderly** but keeps the same section
  structure, copy kinds and layout.
- **Live preview DOM analyzed (verified 2026-08-13):**
  `https://preview.colorlib.com/theme/passport/` — HTTP 200, ~29.5 KB
  HTML (REACHABLE — the preview is live, not a 404). Stylesheets:
  `css/style.css` (custom, ~63 KB — the template-specific tokens live
  here), `css/tiny-slider.css`, `css/aos.css`, `css/flatpickr.min.css`,
  `css/glightbox.min.css`, `fonts/icomoon/style.css`,
  `fonts/flaticon/font/flaticon.css`. Screenshot
  `passport-free-template.jpg` (viewed in browser) matches the live DOM
  (twilight Italian-Riviera coastal town hero photo → serif white
  headline + Watch Video play button → about/destinations/testimonials
  white content → orange CTA band → light-grey footer).
- **Section order (1:1, verified from live DOM):**
  1. **Header/navbar** (`div.site-nav`, absolute, top 0, z-index 9,
     full width, padding 20px 0, transparent over the hero):
     `div.site-navigation` — brand `a.logo` left ("Passport" wordmark,
     Playfair Display 24px white w700; recreation: "WANDERLY" text
     logo); `ul.site-menu` right: **Home** (active, `color: #fff`) ·
     **About us** · **Dropdown** (has-children hover dropdown, white bg,
     shadow `0 2px 10px -2px rgba(0,0,0,0.1)`, padding 20px 0, 14px
     black links: Menu One, Menu Two > Sub Menu One/Two/Three, Menu
     Three) · **Services** · **Blog**; then `li.cta-button` pill link
     **Contact Us** (padding 6px 20px, `border: 2px solid
rgba(255,255,255,0.2)`, color #fff, `border-radius: 30px`, hover
     bg `#fc8621`). Menu links 14px, `color: rgba(255,255,255,0.7)`,
     hover/active #fff. Mobile: `a.burger` hamburger toggler
     (d-lg-none, 3 white lines) opens off-canvas `div.site-mobile-menu`
     (site-navbar-target) with close button — recreation: standard
     mobile menu component.
  2. **Hero** (`div.hero.overlay`, inline `background-image:
url('images/hero_1.jpg')`, cover, center; height 100vh / min-height
     650px; `:before` overlay `rgba(0,0,0,0.35)`):
     - `div.col-lg-5` left — `h1.heading` **"It is Better to Travel
       Well Than to Arrive"** (Playfair Display, white, ~60px, w700,
       mb-5).
     - `a.play-button` (d-flex align-items-center, glightbox3): circular
       play icon + caption **"Watch Video"** (white, 20px / caption 16px)
       — opens a video lightbox (recreation: modal or link to a stock
       video).
     - `div.photo-info` bottom-left (absolute, bottom 20px, left 20px,
       white): circular icon (40px, `rgba(0,0,0,0.2)` bg, border-radius
       50%) + **"Vernazza, Italy — $500.00 / night"**.
  3. **About** (`div.section.section-2`, white, padding 7rem 0):
     `div.row.align-items-center` —
     - Left `div.col-lg-5`: `span.subheading` **"About Us"** (18px,
       uppercase, w700, `#fc8621`) + `h2.heading` **"Explore All
       Corners of The World With Us"** (Playfair, 46px, #000, w700,
       mb-3) + two lorem paragraphs (my-5) + `a.btn.btn-primary`
       **"Read more"**.
     - Right `div.col-lg-6`: 2×2 image grid (`div.row` of four
       `div.col-6.col-lg-6` cells, second row `mt-lg-5` offset):
       images `about_1.jpg`/`about_2.jpg`/`about_3.jpg`/`about_4.jpg`
       (travel photos — recreation: picsum placeholders).
  4. **Destinations** (`div.section.section-3`, white, padding 7rem 0):
     `span.subheading` **"What We Serve"** + `h2.heading` **"We
     Provide Top Destinations"** + lorem intro paragraph (row
     align-items-center justify-content-between, mb-5); then
     `div.destination-slider` (tiny-slider, `#destination-controls`
     prev/next SVG arrow buttons, black 2px strokes): FOUR
     `div.destination` cards, each:
     - `div.thumb` — image (`gal_1..4.jpg`, img-fluid).
     - `div.price` absolute bottom-right: **$430 / $560 / $490 / $490**
       (20px, `#fc8621`, white bg, padding 30px, shadow `0 15px 30px
0 rgba(0,0,0,0.1)`).
     - `h3` **"Enjoy the beauty of Maldives"** (Playfair, w700) +
       `span.meta` **"Maldives, Repbulic Maldives"** (note the source
       typo — fix to "Republic").
     - Card `mt-4` (narrower on mobile: col-6).
  5. **Testimonials + FAQ** (`div.section.bg-light`, bg `#f8f9fa`,
     padding 7rem 0):
     - Left `div.col-lg-5.me-auto.testimonial-wrap` —
       `span.subheading` **"Happy Customer"** + `h2.heading` **"Testimonials"**
       (mb-5); `div.wide-slider-testimonial` (tiny-slider, 3 `div.item`s,
       each `div.author`: 80px round avatar (person_1..3.jpg, border-radius
       50%, mb-4) + `h3` name 18px `#fc8621` (John Doe / James Woodland /
       Rob Smith) + `p.position` mb-5 ("CEO, Founder" / "Designer at
       Facebook" / "Product Designer at Twitter") + `div.quote` big `"`
       glyph + 18px black italic lorem (line-height 2, mb-30)).
     - Right `div.col-lg-6.mt-4.mt-lg-0` — `span.subheading` **"FAQ"** +
       `h2.heading` **"Frequently Asked Questions"** (mb-5);
       `div.custom-accordion` (Bootstrap accordion): FOUR `div.accordion-item`
       (border-radius 0, margin-bottom 0), each `button.btn-link` full
       width, padding 15px 0 15px 40px, text-left, 16px, `#000`,
       plus-icon (`:before` icomoon `\f067`) at left 15px; open item
       (`aria-expanded=true`) → bg `#fc8621`, white w700 text:
       "How to download and register?" / "How to create your paypal
       account?" / "How to link your paypal and bank account?" / "We
       are better than others?" + accordion-body answers (lorem).
  6. **Blog / Recent Posts** (`div.section`, white, padding 7rem 0):
     `span.subheading` **"Blog"** + `h2.heading` **"Recent Posts"**
     (mb-5); `div.row.align-items-stretch` of FOUR `div.media-entry`
     cards (`col-6 col-sm-6 col-md-6 col-lg-3`): image link
     (`gal_1..4.jpg` reused, img-fluid) + `div.bg-white.m-body`
     (padding 20px 20px 50px): `span.date` **"May 14, 2020"** (12px) +
     `h3` **"Far far away, behind the word mountains"** (16px, w700,
     #000, hover `#fc8621`) + lorem excerpt + `a.more` **"Read More"**
     (d-flex align-items-center, `#fc8621` label + right-arrow icon).
  7. **CTA band** (`div.py-5.bg-primary`, bg `#fc8621`): row — left
     `div.col-lg-7`: `h3.text-white` **"Begin your adventurous journey
     here."** (Playfair); right `div.col-lg-5.text-lg-end`:
     `a.btn.btn-outline-white` **"Get started"** (white 2px border,
     white text, hover → white bg + `#fc8621` text).
  8. **Footer** (`footer.site-footer`, bg `#efefef`, font-size 14px,
     color #888, padding 70px 0; links `#fc8621`): `div.row` —
     - `div.col-lg-4`: `div.widget` **About Wanderly.** (h3 16px #000
       w700 mb-30 + lorem paragraph) + `div.widget` **Connect**
       (6 circular social icon links, 30px, bg #777, radius 50%,
       white icons: facebook/twitter/instagram/linkedin/pinterest/dribbble
       — recreation: lucide icons).
     - `div.col-lg-2.ml-auto`: `div.widget` **Links** — About us ·
       Services · News · Careers · Contact.
     - `div.col-lg-2`: `div.widget` **Company** — About us · Services ·
       News · Careers · Contact.
     - `div.col-lg-3`: `div.widget` **Contact** — address "43 Raymouth
       Rd. Baltemoer, London 3910" + two phone rows "+1(123)-456-7890"
       - email "info@mydomain.com".
     - Copyright bar (`div.row.mt-5`, centered): "Copyright © All
       rights reserved | This template is made with ♥ by Colorlib" →
       recreation: "Made with Component Dock" line linking
       `https://www.componentdock.com/` (mandatory footer link).
- **Design tokens (from `css/style.css`, verified 2026-08-13):**
  - Brand orange **`#fc8621`** (`--bs-primary`) — subheading text,
    `.btn-primary` bg (black text), accordion open item bg (white bold
    text), destination price text, CTA band `bg-primary`, footer links,
    `Read More` arrows, social hover accent; btn hover `#fc9842`.
  - Cyan **`#29eafd`** (`--bs-secondary`) — secondary accent (sparingly
    used, Bootstrap default scope).
  - Light **`#f8f9fa`** (`--bs-light`) — testimonials/FAQ section bg.
  - Dark **`#212529`** (`--bs-dark`); pure **#000** headings (section
    `.heading` color #000).
  - Footer bg **`#efefef`**, text **#888**; social circle bg **#777**.
  - Hero overlay **`rgba(0,0,0,0.35)`**; play icon circle
    `rgba(0,0,0,0.2)`; destination price shadow
    `0 15px 30px 0 rgba(0,0,0,0.1)`.
  - Fonts: headings/logo **'Playfair Display', serif** (Google Fonts);
    body **'Open Sans', sans-serif** — load both via `<link>` in
    `index.html`.
  - `.subheading`: 18px, uppercase, w700, `#fc8621` (section eyebrow).
  - `.heading`: 46px #000 w700 (Playfair); hero h1 ~60px white.
  - Buttons: `.btn-primary` `#fc8621` bg / black text; nav CTA pill =
    2px `rgba(255,255,255,0.2)` border, radius 30px, hover orange;
    `.btn-outline-white` white border/text, hover white bg + orange
    text.
  - Section padding rhythm: `padding-top/bottom: 7rem` (`.section`);
    CTA band `py-5`.
- **Asset mapping (never copy assets):** hero_1.jpg, about_1..4.jpg,
  gal_1..4.jpg, person_1..3.jpg → `picsum.photos/seed/wanderly-<n>/<w>/<h>`
  (travel/landscape seeds); icomoon/flaticon icon fonts → `lucide-react`
  (play, plus, quote, arrow-right, phone, mail, map-pin, social icons);
  tiny-slider → lightweight React carousel (or CSS scroll-snap);
  glightbox → simple modal for the video.

## Requirements

### Requirement: Header navigation

- **GIVEN** the Wanderly page is loaded
- **WHEN** the user views the top of the page
- **THEN** the header SHALL show the WANDERLY wordmark left and nav
  links right: Home (active) · About us · Dropdown · Services · Blog,
  plus a pill-shaped **Contact Us** button
- **AND** the header SHALL be transparent over the hero with white
  links
- **AND** the Dropdown item SHALL open a white submenu on hover with
  the source's menu entries

#### Scenario: Dropdown submenu

- **GIVEN** the user hovers the Dropdown nav item
- **WHEN** the submenu appears
- **THEN** it SHALL list Menu One, Menu Two (with Sub Menu One/Two/
  Three), and Menu Three

#### Scenario: Mobile navigation

- **GIVEN** the Wanderly page is rendered on a viewport narrower than
  the desktop breakpoint
- **WHEN** the user taps the hamburger toggler
- **THEN** an off-canvas mobile menu SHALL open with the same links and
  a close button

### Requirement: Hero

- **GIVEN** the Wanderly page is loaded
- **WHEN** the user views the hero
- **THEN** a full-viewport travel photo with a dark overlay SHALL be
  shown behind the content
- **AND** the headline SHALL read **"It is Better to Travel Well Than
  to Arrive"** in a large white serif
- **AND** a **Watch Video** play button SHALL be present next to the
  headline
- **AND** a photo-info chip at the bottom-left SHALL read
  **"Vernazza, Italy — $500.00 / night"**

#### Scenario: Watch Video opens the video modal

- **GIVEN** the hero is displayed
- **WHEN** the user clicks Watch Video
- **THEN** a video modal SHALL open (embed/stock video) with a close
  control

### Requirement: About section

- **GIVEN** the user scrolls to the About section
- **WHEN** the section is displayed
- **THEN** an orange uppercase eyebrow **"About Us"** and the serif
  heading **"Explore All Corners of The World With Us"** SHALL appear
  on the left, with two paragraphs and an orange **Read more** button
- **AND** a 2×2 grid of travel photos SHALL appear on the right

#### Scenario: Read more button

- **GIVEN** the About section is displayed
- **WHEN** the user clicks the orange **Read more** button
- **THEN** the click SHALL NOT navigate away (dead-end link)

### Requirement: Destinations

- **GIVEN** the user scrolls to the Destinations section
- **WHEN** the section is displayed
- **THEN** the eyebrow **"What We Serve"** and heading **"We Provide
  Top Destinations"** SHALL appear above a horizontal destination
  carousel
- **AND** each destination card SHALL show a photo, an orange price
  badge ($430 / $560 / $490 / $490) on a white box at the bottom-right,
  a serif title ("Enjoy the beauty of Maldives") and a meta line
  ("Maldives, Republic Maldives")

#### Scenario: Destination carousel

- **GIVEN** the destinations carousel is displayed
- **WHEN** the user clicks the prev/next arrow controls
- **THEN** the visible destination cards SHALL advance accordingly

### Requirement: Testimonials + FAQ

- **GIVEN** the user scrolls to the light-grey testimonials section
- **WHEN** the section is displayed
- **THEN** the eyebrow **"Happy Customer"**, heading **"Testimonials"**
  and a testimonial carousel SHALL appear on the left, each item with a
  round avatar, orange name, position, and a quoted paragraph
- **AND** the right side SHALL show the eyebrow **"FAQ"**, heading
  **"Frequently Asked Questions"** and FOUR accordion items (How to
  download and register? / How to create your paypal account? / How to
  link your paypal and bank account? / We are better than others?)

#### Scenario: Accordion toggling

- **GIVEN** the FAQ accordion is displayed
- **WHEN** the user clicks a closed item
- **THEN** it SHALL expand to show its answer and highlight with an
  orange background and white bold text
- **AND** previously open items SHALL collapse

### Requirement: Recent Posts

- **GIVEN** the user scrolls to the blog section
- **WHEN** the section is displayed
- **THEN** the eyebrow **"Blog"**, heading **"Recent Posts"** and FOUR
  post cards SHALL appear, each with a photo, a date ("May 14, 2020"),
  a bold 16px title, an excerpt and a **Read More** link with an arrow

#### Scenario: Read More links

- **GIVEN** the Recent Posts section is displayed
- **WHEN** the user clicks any card title or Read More link
- **THEN** the click SHALL NOT navigate away (dead-end link)

### Requirement: CTA band

- **GIVEN** the user scrolls above the footer
- **WHEN** the CTA band is displayed
- **THEN** an orange band SHALL show the white serif headline **"Begin
  your adventurous journey here."** on the left and a white-outlined
  **Get started** button on the right

#### Scenario: Get started button

- **GIVEN** the CTA band is displayed
- **WHEN** the user clicks the **Get started** button
- **THEN** the click SHALL NOT navigate away (dead-end link)

### Requirement: Footer

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer is displayed
- **THEN** a light-grey footer SHALL show About + Connect (6 social
  icons), Links, Company and Contact widgets, and a centered copyright
  bar

#### Scenario: Component Dock link

- **GIVEN** the footer is displayed
- **WHEN** the user looks at the copyright bar
- **THEN** it SHALL link to `https://www.componentdock.com/` (branded
  "Component Dock") — mandatory footer link, no ColorLib references

### Requirement: Responsive layout

- **GIVEN** the Wanderly page is rendered on a small viewport
- **WHEN** the page is displayed
- **THEN** the header SHALL collapse into the hamburger menu
- **AND** the about grid, destination cards, testimonial/FAQ columns,
  blog cards and footer columns SHALL stack to single columns

#### Scenario: Stacked layout

- **GIVEN** the Wanderly page is rendered on a small viewport
- **WHEN** the page is displayed
- **THEN** all multi-column layouts SHALL stack to single columns
- **AND** the header SHALL collapse into the hamburger menu

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-wanderly`
- [ ] `scripts/verify-app.sh wanderly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with the live DOM): transparent header
      (WANDERLY wordmark · Home active / About us / Dropdown submenu /
      Services / Blog · Contact Us pill) → hero (travel photo + dark
      overlay, "It is Better to Travel Well Than to Arrive", Watch
      Video play button, Vernazza price chip) → About ("About Us" /
      "Explore All Corners of The World With Us", 2 paragraphs + Read
      more, 2×2 photo grid) → Destinations ("What We Serve" / "We
      Provide Top Destinations", 4 cards with orange price badges,
      prev/next arrows) → Testimonials + FAQ (bg-light: Happy Customer /
      Testimonials carousel left; FAQ accordion 4 items right) →
      Recent Posts (4 media-entry cards, date + title + Read More) →
      orange CTA band ("Begin your adventurous journey here." + Get
      started) → footer (#efefef, About + Connect / Links / Company /
      Contact + Component Dock copyright)
- [ ] Brand tokens in `@theme`: `#fc8621` orange (subheadings,
      btn-primary, accordion open bg, price badges, CTA band, footer
      links), `#f8f9fa` light section bg, `#efefef` footer bg, `#888`
      footer text, `#777` social circles — all via Tailwind classes
- [ ] Fonts: Playfair Display (headings, logo) + Open Sans (body) via
      Google Fonts `<link>`s in `index.html`
- [ ] Buttons: btn-primary `#fc8621` bg / black text; nav Contact Us
      pill (2px rgba(255,255,255,0.2) border, radius 30px); Get
      started = white outline; Read more = solid orange button
- [ ] Placeholder images via `picsum.photos/seed/wanderly-<n>/<w>/<h>`
      (landscape/travel seeds for hero, about grid, destination cards,
      avatars, blog cards), icons from lucide-react, no copied assets
- [ ] Brand renamed "Passport"/"Colorlib" → "Wanderly" everywhere;
      footer MUST link `https://www.componentdock.com/`; all links/forms
      dead-end without navigation
- [ ] Accordion is a real button-driven disclosure (aria-expanded,
      keyboard accessible); destination & testimonial carousels work
      with prev/next controls
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark BOTH `- [ ]` rows
      (line 615 Bootstrap 5, line 2988 Travel) `[x]` with the same
      surge URL + `npm run readme:status` (implementer)
