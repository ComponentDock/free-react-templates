# Template: Fortis (Bootstrap / Web Design Agency)

## Purpose

Fortis is a single-page web-design-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Mighty" website template (source:
https://colorlib.com/wp/template/mighty/), built under a DIFFERENT name
(Fortis — Latin for "strong, mighty", a semantic echo of the source name
without reusing it; single lowercase word, no collision with `apps/`,
`openspec/specs/` or `docs/templates/` — verified 2026-08-11) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-11): the live preview
> `https://preview.colorlib.com/theme/mighty/` is REACHABLE (curl verified,
> HTTP 200, ~21 KB HTML) and was analyzed for this prep; the stylesheet
> `css/style.css` (~23 KB) plus the customized `css/bootstrap.min.css` were
> fetched and token-extracted. The TEMPLATES.md screenshot
> (`mighty-free-template.jpg`, 1200×946, viewed in browser) matches the live
> DOM section-for-section.

## Design reference (replication findings)

- **Original:** ColorLib "Mighty" — page title "Mighty &mdash; Website
  Template by Colorlib" (template page
  `https://colorlib.com/wp/template/mighty/`). Category in TEMPLATES.md:
  **Bootstrap (216)**, item at line 452 (`- [ ]`, NOT shipped anywhere).
  The recreation brands itself **Fortis** but keeps the same section
  structure, copy kinds and token palette.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/mighty/` (HTTP 200, ~21 KB). Modern
  minimal agency layout with a hamburger-only navigation (no inline desktop
  link bar), 8 `<div class="site-section">` blocks + footer:
  1. `div.site-mobile-menu.site-navbar-target` — **off-canvas menu**
     (header with close `icon-close2` toggler + empty `.site-mobile-menu-body`
     filled at runtime by JS cloning `ul.js-clone-nav`); links Home / About /
     Work / Journal / Contact.
  2. `header.site-navbar.site-navbar-target` — **fixed/absolute top navbar**
     (`position: absolute; top: 0; width: 100%; padding: 1rem`; `z-index:
1999`): `col-3` brand `a.site-logo.font-weight-bold` "Mighty." (white,
     1.7rem); `col-9 text-right` a hamburger toggler `span.icon-menu.h3` +
     the (hidden) `nav.site-navigation` containing `ul.site-menu.main-menu
.js-clone-nav` (Home/About/Work/Journal/Contact, links white, hover +
     `.active` green `#01d28e`). **Sticky state** (`.sticky-wrapper
.is-sticky`): navbar gets `background: #fff` + shadow `4px 0 20px -5px
rgba(0,0,0,0.2)`, logo link turns `#01d28e`, links turn `#000`.
  3. `.ftco-blocks-cover-1` > `div.site-section-cover.overlay` — **hero**,
     `background-image: url('images/hero_1.jpg')` + `:before` overlay
     `rgba(0,0,0,0.7)`; container height `calc(100vh - 196px)`, min-height
     677px (≤991px: `calc(70vh - 196px)`, min 600px); centered `col-md-7
text-center`: `h1.mb-4.text-white` "Mighty Web Design Agency" (3rem,
     white, weight 300, line-height 1; 2rem ≤991px), `p.mb-4` lorem (18px
     white), and a "Contact Us" button `a.btn.btn-primary.btn-outline-white
.py-3.px-5` — **pill outline button**: transparent bg, 2px white border,
     white text; hover → white bg + black text.
  4. `div.site-section` — **About split, 3 columns** (`row
align-items-center`): col-md-4: `h2.h4.mb-4` "About Us" + 2 lorem
     paragraphs + "Our works" button `a.btn.btn-primary.text-white.px-5`
     (solid green pill, white text); col-md-4: `img.img-fluid
src=images/about_1.jpg`; col-md-4: `h2.h4.mb-4` "Our expertise and
     skills" + FOUR `.progress-wrap.mb-4` bars: label + `span.ml-auto`
     percent on one line, then `.progress.rounded-0` (height 7px) with
     `.progress-bar` (bg `#01d28e`, width inline: Writing 55% / WordPress
     85% / Bootstrap 93% / jQuery 83%).
  5. `div.site-section.bg-light` (bg **`#f6f5f5`** — NOT Bootstrap's
     `#f8f9fa`) — **Services**: centered `h2.heading-29190` "Our Services"
     (40px-style heading with signature double underline: `:before` 80px×2px
     black bar at bottom:-6px, `:after` 50px×2px black bar at bottom:0, both
     centered) + FOUR `.service-29128.text-center` cards (`col-md-6
col-lg-3`): `span.wrap-icon` icon (source repeats `icon-desktop_mac`
     for all four — a source oversight; recreation may use one distinct
     lucide icon per service), `h3` 18px title (Web Design / Graphic Design /
     Web Apps / Ecommerce), lorem paragraph; card `background: #fff`,
     padding 20px, transition .3s, hover → shadow `0 4px 30px -5px
rgba(0,0,0,0.2)`.
  6. `div.site-section` — **Works gallery**: centered `h2.heading-29190`
     "Our Works" + SIX `.item.web` tiles (`col-md-6 col-lg-4 mb-4`): inner
     `a.item-wrap[data-fancybox="gal"]` (radius 4px, overflow hidden) with
     `span.icon-add` plus-icon overlay + `img.img-fluid` (img_1..6.jpg);
     hover → `:after` dark overlay `rgba(0,0,0,0.4)` + white plus icon
     scales in (scale 0→1, centered).
  7. `div.site-section.bg-light` — **Counters band**: FOUR `.fact-39281
.d-flex.align-items-center` (`col-md-6 col-lg-3`): `span.wrap-icon`
     40px icon (icon-smile-o, icon-coffee, icon-code, icon-desktop_mac) +
     `.text`: `span.d-block` number (83 / 3892 / 3,923,892 / 3892) +
     `span` label (Happy Clients / Cup of Coffee / Line of Codes / Project
     Finish).
  8. `div.site-section` — **See Our Studio**: centered `h2.heading-29190`
     "See Our Studio" + `col-md-8` centered video link `a.btn-video_38929`
     (fancybox → `https://vimeo.com/191947042`): `span` 70px circular play
     button (border 2px white, white `icon-play`, centered) over
     `img.img-fluid src=images/img_1.jpg` with `:before` overlay
     `rgba(0,0,0,0.2)`.
  9. `div.site-section.bg-light` — **Testimonials**: centered
     `h2.heading-29190` "Testimonials" + THREE columns (`col-lg-4 col-md-6`):
     `.person-pic-39219.mb-4` 70px circular photo (person_1..3.jpg),
     `blockquote.quote_39823` (18px, italic) lorem quote, `p` "&mdash; Chris
     Smith".
  10. `div.site-section.bg-white` — **Blog**: centered `h2.heading-29190`
      "Blog" + THREE `.post-entry-1.h-100` cards (`col-lg-4 col-md-6 mb-4`):
      image link (`img_1..3.jpg`) + `.post-entry-1-contents` (white bg,
      padding 20px): `h2` 22px title link "Lorem ipsum dolor sit amet"
      (black, hover green), `.meta` "July 17, 2019 <span>by</span> Admin"
      (color `#ccc`), excerpt paragraph.
  11. `footer.site-footer` — **background `#efefef`**, padding 4em 0 (8em
      ≥768px); layout: `col-lg-3` "About Me" (`h2.footer-heading.mb-3`, 16px
      black) + lorem paragraph (color `#777`); `col-lg-8.ml-auto` → inner
      `col-lg-6` "Quick Links" (About Us / Testimonials / Terms of Service /
      Privacy / Contact Us, `ul.list-unstyled`, links green `#01d28e`, hover
      black, 10px spacing) + inner `col-lg-6` "Connect"
      (`.social_29128.white.mb-5`: facebook / instagram / twitter — 50px
      circles, bg `rgba(1,210,142,0.2)`, centered icon) + "Newsletter"
      (`form.d-flex`: `input.form-control.mr-3` placeholder "Email" (height
      55px) + `input[type=submit].btn.btn-primary` value "Send"); bottom
      `div.border-top.pt-5`: copyright "Copyright &copy; <year> All rights
      reserved | This template is made with &#10084; by Colorlib"
      (recreation: own credit line, no Colorlib link).
- **Visual design (TEMPLATES.md screenshot `mighty-free-template.jpg`,
  1200×946, viewed in browser 2026-08-11 + live DOM):** clean modern agency
  aesthetic. Dark photo hero (workspace with laptop + big monitor + coffee
  cup, darkened overlay) with a centered bold white headline "Mighty Web
  Design Agency", a lorem line, and a ghost "Contact Us" pill button
  (transparent, white border). Hamburger menu top-right (white) — the nav is
  hamburger-only, no inline desktop links. Below: white About row (3
  columns: text + "Our works" solid green pill button, vertical desk photo,
  skills with vivid green progress bars), light-grey services row with 4
  white icon cards, white portfolio grid of 6 photos, light-grey counter
  band, white "See Our Studio" video block with a circular play button,
  light-grey testimonials row with circular headshots, white blog row, and
  a light-grey `#efefef` footer. Signature **seafoam/green `#01d28e`**
  accent on white/light-grey neutrals; clean sans-serif (Muli 300/400/700)
  typography.
- **Section order (1:1, verified from live DOM):** off-canvas mobile menu →
  navbar (logo + hamburger, sticky white on scroll) → hero (bg photo +
  dark overlay, centered h1 + lorem + outline Contact Us pill) → About
  3-col split (text + button, image, skills + 4 progress bars) → Services
  (bg-light, 4 icon cards) → Works (6-tile gallery with hover plus) →
  counters (bg-light, 4 icon stats) → See Our Studio (video block with
  play button) → Testimonials (bg-light, 3 quotes) → Blog (bg-white, 3 post
  cards) → footer (#efefef, 4 widget columns + copyright bar).
- **Design tokens extracted from the live CSS (`css/style.css` +
  `css/bootstrap.min.css`, verified 2026-08-11):**
  - Brand green: **`#01d28e`** — customized Bootstrap `.btn-primary`
    (`background-color: #01d28e; border-color: #01d28e; color: #fff`), so
    "Our works" and newsletter "Send" are solid green pills; `.progress-bar`
    bg; nav link hover + `.active`; sticky navbar logo; footer links;
    `.social_29128` circle bg `rgba(1,210,142,0.2)`; owl dots active (not
    used on index); `.by` hover underline; post title hover; `.subtitle`.
  - Buttons: `.btn` base — **`border-radius: 30px` (pill)**, padding
    `10px 20px`, `font-weight: bold`, no shadow/outline on focus; hero
    "Contact Us" uses `.btn-outline-white` (2px white border, transparent,
    white text; hover white bg + black text); "Our works" uses solid
    `.btn-primary` + `text-white`; hero button `py-3 px-5`.
  - Section backgrounds: `bg-light` = **`#f6f5f5`** (custom); blog section
    `bg-white`; footer **`#efefef`**; hero overlay `rgba(0,0,0,0.7)`.
  - Body: font **Muli** (`"Muli", -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, ...`; weights 400/700 via Google Fonts link),
    `line-height: 1.7`, `color: #364d59`, `font-weight: 300`, 1rem. A
    `.serif` utility (Hepta Slab) exists in the CSS but is NOT used on the
    index page — all headings render in Muli.
  - Headings: `h2.h4` in About ("About Us", "Our expertise and skills");
    `h2.heading-29190` (Services/Works/Studio/Testimonials/Blog): relative,
    padding-bottom 20px, margin-bottom 30px, centered, with double
    underline — `:after` 50px×2px black at bottom:0 and `:before` 80px×2px
    black at bottom:-6px (both `left: 50%; translateX(-50%)`).
  - Hero: `.site-section-cover h1` 3rem (2rem ≤991px), white, weight 300,
    line-height 1; `.site-section-cover p` 18px white; container
    `calc(100vh - 196px)` / min 677px (≤991px: `calc(70vh - 196px)` / min
    600px).
  - Navbar: absolute top, full width, `padding: 1rem` (≤991px: 3rem);
    logo 1.7rem bold white; sticky → white bg + shadow `4px 0 20px -5px
rgba(0,0,0,0.2)`, logo green, links black.
  - Cards: `.service-29128` white bg, padding 20px, hover shadow `0 4px
30px -5px rgba(0,0,0,0.2)`; `.post-entry-1-contents` white bg, padding
    20px, `h2` 22px; `.item` radius 4px, `a.item-wrap` radius 4px + hover
    overlay `rgba(0,0,0,0.4)` + white plus icon (scale 0→1);
    `.btn-video_38929` play circle 70px, 2px white border, white icon,
    `:before` overlay `rgba(0,0,0,0.2)`; `.person-pic-39219 img` 70px
    radius 50%; `.quote_39823 p` 18px italic; `.meta` color `#ccc`;
    `.fact-39281 .wrap-icon` 40px; form-control height 55px.
  - Footer: `#efefef` bg, padding 4em 0 (8em ≥768px), links `#01d28e`
    (hover black), paragraph `#777`, headings black 16px, social circles
    50px bg `rgba(1,210,142,0.2)`.
  - Section padding: `.site-section` 7rem 0 (3rem ≤991.98px).
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap/owl-carousel/fancybox dependency). The navbar is a
  fixed top bar with the brand left and a hamburger right that opens an
  off-canvas (or full-screen overlay) menu with the five links; on scroll it
  turns solid white with a shadow, the logo turns green `#01d28e` (source
  sticky behavior). The hero is a background photo + `rgba(0,0,0,0.7)`
  overlay with the centered headline and a ghost pill "Contact Us". Skills
  progress bars render the final width statically (source animates via
  JS/aos — optional animation with fake-timer-safe tests). The Works gallery
  is six tiles with a hover dark overlay + plus icon (fancybox lightbox is
  NOT recreated — tiles may link to `#` or be buttons). "See Our Studio" is
  an image with a centered circular play button (inert or
  `aria-label="Play video"` button — no Vimeo embed needed; may link to the
  source video URL or be a placeholder). Testimonials are three static
  columns (NOT an owl carousel — source renders 3 static cols on index).
  Placeholder images `picsum.photos/seed/fortis-<n>/<w>/<h>` (works ×6,
  studio, blog ×3); subject-critical slots pinned to verified picsum photos
  (hero workspace `picsum.photos/id/0/1920/1080` — MacBook + coffee desk
  matching the source hero_1.jpg; about desk flat-lay `id/180/800/1000`;
  testimonial headshots use the verified portrait IDs 1027 / 64 / 823 with
  paraphrased female author names — picsum has no male portraits); service
  icons via distinct
  `lucide-react` icons (source repeats desktop_mac ×4 — one per service is
  a documented improvement); social icons via inline SVG brand icons
  (lucide-react removed brand icons); document title "Fortis — Web Design
  Agency Template"; brand "Mighty." → "Fortis." everywhere; nav labels
  (Home/About/Work/Journal/Contact) and copy kinds kept 1:1, Lorem text may
  be paraphrased.

Fortis lives in `apps/fortis` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Fixed navbar with brand, hamburger menu and sticky white state

The system SHALL render a fixed top navbar with the brand "Fortis." on the
left and a hamburger toggler on the right. Activating the toggler SHALL open
an off-canvas/full-screen menu with the links Home, About, Work, Journal and
Contact. When the page is scrolled, the navbar SHALL switch to a solid white
background with a subtle shadow, the brand SHALL turn green `#01d28e`, and
the menu links SHALL turn black.

#### Scenario: Navbar default state

- **GIVEN** the Fortis page is rendered on any viewport
- **WHEN** the page loads
- **THEN** a top navbar SHALL be shown with the brand "Fortis." on the left
- **AND** a hamburger toggler SHALL be shown on the right (the source shows
  NO inline desktop link bar — navigation is hamburger-only)
- **AND** the navbar SHALL be transparent over the hero with white brand and
  white toggler

#### Scenario: Off-canvas menu opens and closes

- **GIVEN** the navbar hamburger toggler is visible
- **WHEN** the user activates it
- **THEN** an off-canvas/full-screen menu SHALL open listing Home, About,
  Work, Journal and Contact
- **AND** the menu SHALL contain a close control
- **AND** activating the close control (or a link) SHALL close the menu

#### Scenario: Sticky scrolled navbar

- **GIVEN** the user scrolls the page down
- **WHEN** the navbar enters the sticky state
- **THEN** the navbar SHALL get a solid white background and a subtle shadow
  (source `4px 0 20px -5px rgba(0,0,0,0.2)`)
- **AND** the brand SHALL turn green `#01d28e`
- **AND** the menu links SHALL turn black

### Requirement: Full-height hero with photo background, headline and ghost CTA

The system SHALL render a hero section with a full-viewport-height photo
background darkened by a `rgba(0,0,0,0.7)` overlay, a centered white
headline "Fortis Web Design Agency", a short paragraph, and a ghost pill
button "Contact Us".

#### Scenario: Hero content

- **GIVEN** the Fortis page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL span near the full viewport height
- **AND** the hero SHALL use a background photo with a dark overlay
- **AND** a centered headline SHALL read "Fortis Web Design Agency" in
  large white light-weight type (source: 3rem, weight 300)
- **AND** a supporting paragraph SHALL follow
- **AND** a "Contact Us" button SHALL be shown below the paragraph, styled
  as a ghost pill (transparent background, white border, white text) with
  hover inverting to white background and black text

### Requirement: About section with three columns

The system SHALL render an About section as three columns: text with the
heading "About Us", two paragraphs and a solid green "Our works" pill
button; a centered photo; and a "Our expertise and skills" column with four
progress bars (Writing 55%, WordPress 85%, Bootstrap 93%, jQuery 83%).

#### Scenario: About text column

- **GIVEN** the Fortis page is rendered
- **WHEN** the About section is displayed
- **THEN** the first column SHALL show the heading "About Us" and two
  agency paragraphs
- **AND** a "Our works" button SHALL be shown, styled as a solid green
  `#01d28e` pill with white text

#### Scenario: About image column

- **GIVEN** the About section is displayed
- **WHEN** the middle column renders
- **THEN** a single agency photo SHALL be shown (seeded placeholder)

#### Scenario: Skills and progress bars

- **GIVEN** the About section is displayed
- **WHEN** the third column renders
- **THEN** the heading SHALL read "Our expertise and skills"
- **AND** four progress bars SHALL be shown: Writing 55%, WordPress 85%,
  Bootstrap 93% and jQuery 83%
- **AND** each bar SHALL pair a label with its percentage and a green
  `#01d28e` fill at the matching width (7px tall, square corners)

### Requirement: Services section with four icon cards

The system SHALL render a light `#f6f5f5` services section with the heading
"Our Services" (centered, double-underline) and four white cards — Web
Design, Graphic Design, Web Apps, Ecommerce — each with an icon, a title and
a short description, gaining a soft shadow on hover.

#### Scenario: Service cards

- **GIVEN** the Fortis page is rendered
- **WHEN** the services section is displayed
- **THEN** the section SHALL use the light `#f6f5f5` background
- **AND** the centered heading SHALL read "Our Services" with the source's
  double-underline treatment
- **AND** four cards SHALL be shown side by side on desktop (2×2 on tablet)
- **AND** each card SHALL show an icon, an 18px title (Web Design, Graphic
  Design, Web Apps, Ecommerce) and a short description
- **AND** each card SHALL be white with a soft shadow on hover

### Requirement: Works gallery with six hoverable tiles

The system SHALL render a "Our Works" section with six photo tiles in a
responsive 3-column grid; hovering a tile SHALL reveal a dark overlay and a
centered white plus icon.

#### Scenario: Works tiles

- **GIVEN** the Fortis page is rendered
- **WHEN** the works section is displayed
- **THEN** the centered heading SHALL read "Our Works"
- **AND** six photo tiles SHALL be shown in a 3-column grid on desktop
  (2 per row on tablet)
- **AND** hovering a tile SHALL show a dark `rgba(0,0,0,0.4)` overlay with a
  white plus icon scaling in (source `icon-add`)

### Requirement: Counters band with four stats

The system SHALL render a light-background counters band with four
icon-plus-number stats: 83 Happy Clients, 3892 Cup of Coffee, 3,923,892
Line of Codes and 3892 Project Finish.

#### Scenario: Counter stats

- **GIVEN** the Fortis page is rendered
- **WHEN** the counters band is displayed
- **THEN** the band SHALL use the light `#f6f5f5` background
- **AND** four stats SHALL be shown side by side on desktop
- **AND** each stat SHALL show a 40px icon, a large number (83, 3892,
  3,923,892, 3892) and a label (Happy Clients, Cup of Coffee, Line of
  Codes, Project Finish)

### Requirement: See Our Studio video block

The system SHALL render a "See Our Studio" section with a centered image
and a circular play button (70px, white 2px border) overlaying it, with a
subtle dark veil.

#### Scenario: Studio video block

- **GIVEN** the Fortis page is rendered
- **WHEN** the studio section is displayed
- **THEN** the centered heading SHALL read "See Our Studio"
- **AND** a single centered image SHALL be shown
- **AND** a 70px circular play button SHALL be centered over the image with
  a 2px white border and a white play glyph
- **AND** a subtle dark veil SHALL cover the image

### Requirement: Testimonials section with three quotes

The system SHALL render a light-background testimonials section with the
heading "Testimonials" and three columns, each with a 70px circular headshot,
an italic quote and an attribution.

#### Scenario: Testimonial cards

- **GIVEN** the Fortis page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL use the light `#f6f5f5` background
- **AND** the centered heading SHALL read "Testimonials"
- **AND** three testimonial columns SHALL be shown side by side on desktop
- **AND** each SHALL show a circular headshot (70px), an italic quote and an
  attribution line (e.g. "— Chris Smith")

### Requirement: Blog section with three post cards

The system SHALL render a white blog section with the heading "Blog" and
three post cards, each with an image, a title link, a meta line (date ·
by Author) and an excerpt.

#### Scenario: Blog cards

- **GIVEN** the Fortis page is rendered
- **WHEN** the blog section is displayed
- **THEN** the section SHALL use the white background
- **AND** the centered heading SHALL read "Blog"
- **AND** three post cards SHALL be shown side by side on desktop
- **AND** each card SHALL show an image, a 22px title link (e.g. "Lorem
  ipsum dolor sit amet"), a meta line (e.g. "July 17, 2019 by Admin") and
  an excerpt paragraph

### Requirement: Light footer with four widget columns and copyright bar

The system SHALL render a light `#efefef` footer with four widget columns —
"About Me" text, "Quick Links", "Connect" social icons plus "Newsletter"
form — and a bottom copyright bar.

#### Scenario: Footer content

- **GIVEN** the Fortis page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL use the light `#efefef` background
- **AND** column one SHALL be headed "About Me" with a short paragraph
- **AND** column two SHALL be headed "Quick Links" listing About Us,
  Testimonials, Terms of Service, Privacy and Contact Us
- **AND** column three SHALL be headed "Connect" with three circular social
  icons (e.g. Facebook, Instagram, Twitter) on green-tinted circles
- **AND** a "Newsletter" form SHALL follow with an email input and a green
  "Send" pill button
- **AND** a bottom bar SHALL show the copyright line with the recreation
  credit

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-fortis`
- [ ] `scripts/verify-app.sh fortis` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with the source): navbar (brand "Fortis.",
      hamburger-only nav, off-canvas menu with Home/About/Work/Journal/
      Contact, sticky white + shadow + green logo on scroll) → hero
      (photo bg + `rgba(0,0,0,0.7)` overlay, centered "Fortis Web Design
      Agency" 3rem weight-300 white, lorem line, ghost pill "Contact Us"
      with white border, hover white bg + black text) → About 3-col split
      ("About Us" + 2 paragraphs + solid green "Our works" pill; centered
      photo; "Our expertise and skills" + 4 progress bars Writing 55% /
      WordPress 85% / Bootstrap 93% / jQuery 83% with `#01d28e` fills) →
      Services (`#f6f5f5` bg, heading-29190 "Our Services", 4 white icon
      cards Web Design/Graphic Design/Web Apps/Ecommerce, hover shadow) →
      Works ("Our Works", 6 tiles, hover dark overlay + white plus) →
      counters (`#f6f5f5` bg, 83 Happy Clients / 3892 Cup of Coffee /
      3,923,892 Line of Codes / 3892 Project Finish) → See Our Studio
      (centered image + 70px circular play button + dark veil) →
      Testimonials (`#f6f5f5` bg, 3 columns: 70px circular headshot, italic
      quote, "— Chris Smith") → Blog (white bg, 3 post cards: image, title
      link, meta "July 17, 2019 by Admin", excerpt) → footer `#efefef`
      (About Me / Quick Links / Connect social + Newsletter Send form +
      copyright bar)
- [ ] Brand color `#01d28e` (green) in `@theme` and used via Tailwind
      classes: solid pill buttons ("Our works", "Send"), progress-bar
      fills, nav hover/active link, sticky logo, footer links, social
      circle tint
- [ ] Light section bg `#f6f5f5` (NOT `#f8f9fa`); footer bg `#efefef`;
      hero overlay `rgba(0,0,0,0.7)`
- [ ] Muli 300/400/700 via Google Fonts `<link>` in `index.html` (body
      color `#364d59`, line-height 1.7, weight 300)
- [ ] Buttons: pill shape (`border-radius: 30px`), bold, padding ~10px
      20px; ghost outline button for hero "Contact Us"
- [ ] heading-29190 style: centered section headings with double underline
      (80px + 50px black bars)
- [ ] Works tile hover: dark overlay + white plus icon (scale-in); studio
      play button 70px circle white 2px border; testimonial headshots 70px
      circular; progress bars 7px tall square-corners
- [ ] Placeholder images via `picsum.photos/seed/fortis-<n>/<w>/<h>`;
      service icons from `lucide-react` (one distinct icon per service);
      social icons as inline SVG brand icons
- [ ] Document title "Fortis — Web Design Agency Template"; brand
      "Mighty." → "Fortis." everywhere
