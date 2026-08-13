# Template: Shoreline (Hotel / Resort)

## Purpose

Shoreline is a luxury beach-resort/hotel landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ocheandeview" website template (source:
https://colorlib.com/wp/template/ocheandeview/ — "Ocheandeview - Free
Bootstrap 5 Template by Colorlib", an ocean-view hotel theme), built under a
DIFFERENT name (Shoreline — the beach/ocean-edge concept of an ocean-view
resort; single lowercase word, no collision with `apps/`,
`openspec/specs/` or `docs/templates/` — verified 2026-08-13), per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The source appears TWO times in TEMPLATES.md (dup-row trap): line 610
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one)
and line 1920 (**Hotel (38)** category) — both `- [ ]` rows of the SAME
template. ONE implementation covers both rows (mark all `[x]` with the same
surge URL at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Ocheandeview" — page title "Hotel | Template".
  Luxury ocean-view resort one-pager: transparent header + full-screen hero
  photo, olive booking bar, video teaser, guest-quotes carousel, alternating
  about rows, full-width photo band, testimonials, instagram strip and a
  light footer. The recreation brands itself **Shoreline** but keeps the
  same section structure, copy kinds and layout.
- **Live preview DOM analyzed (verified 2026-08-13):**
  `https://preview.colorlib.com/theme/ocheandeview/` — HTTP 200, ~28 KB HTML
  (REACHABLE — the preview is live, not a 404). Stylesheets:
  `assets/css/style.css` (custom, ~110 KB — the template-specific tokens
  live here), plus bootstrap.min.css, owl.carousel.min.css, slicknav.css,
  gijgo.css (date picker), animate.min.css, magnific-popup.css,
  fontawesome-all.min.css, themify-icons.css, slick.css, nice-select.css.
  Screenshot `ocheandeview-colorlib-template.jpg` (1200×946, viewed in
  browser) matches the live DOM (transparent header + serif hero headline +
  olive booking bar visible in the shot).
- **Section order (1:1, verified from live DOM):**
  1. **Preloader** (`div.preloader` → `.preloader-circle` + `img.loder.png`): full-screen spinner/logo preloader.
  2. **Header** (`div.header-area.header-transparent` → `div.main-header` → `div.header-bottom`): LEFT `div.logo` — `img.logo.png` brand; RIGHT `div.header-right-btn` — `a.header-btn2` "Call Us: 10(88) 267 354" (desktop only) · `a.btn_1.header-btn` "Book Now" (btn_1 = sage `#B8B8A0` fill, white text, 16px 41px padding, hover inverts to white bg + sage text) · off-canvas hamburger (`div.off-canvas-menu.menu-bar`, two `span` lines). Full-screen off-canvas `div.menu-body` on open: `div.close-icon-menu` (×) + `nav.off-can-menu` links: **Home · Rooms · About · Gallery · Blog** (dropdown: Blog, Blog Details, Elements) **· Contact** + `div.sidebar-social`: phone "10 (78) 273 3563", email "info@ocheandeview.com", social icons. Sticky state: `.header-sticky.sticky-bar` bg `#0a0a0a`.
  3. **Hero slider** (`div.slider-area.hero-bg1.hero-overly` — bg image `img/hero/h1_hero.jpg`, cover, plus `.hero-overly::before` overlay `rgba(60,58,52,0.7)`; `.slider-height1` min-height 980px desktop): single slide `.single-slider.d-flex.align-items-center` → `div.hero-caption.pt-10`: `img.arrow-top.svg.bounce-animate` (bouncing down-arrow link) · `h1` "Ochean de View" (Cormorant Garamond, 144px, 500, white, line-height 1.3) · `p` "A chance to go offline and get in touch with nature." (white, 50px, weight 300). (Source has `hero-caption2` variants — 80px h2 — for alternate slides; static HTML ships one slide.)
  4. **Booking bar** (`div.booking` — solid bg `#85856D`): form row with FOUR fields, labels Cormorant Garamond 22px/600 white: **Check In** (date picker, `.date-pic` + `.boking-datepicker` — gijgo calendar) · **Check Out** (date picker) · **Guest** (`.select-form` nice-select: options "Number of guest" · Adult · Child · Older) · `div.search-form` CTA `a` "Check Availablity" (Raleway 600 20px, bg `#3C3A34`, white, full width, 70px tall, radius 0, search icon). Inputs: transparent, `border-bottom: 2px solid rgba(250,250,248,0.5)`, italic white placeholder, height 47px.
  5. **Videos / intro** (`div.videos.top-padding.section-bg` — bg `#FAFAF8`): row — LEFT `div.section-tittle.mb-50` `h2` "The shelter is the Outcome of the Dream"; RIGHT `div.section-tittle.mb-50` two paragraphs ("Broker ipsum dolor sit amet, consectetuer luxury elit. Carrara marble commodo ligula eget dolor cum sociis cozy penatibus et magnis." + "Ochean de View extends along a private, quiet and beautiful tropical beach. Stay away from the crowd and enjoy the beauty and lust of Cancun with us."). Below: `div.video-area.position-relative.section-img-bg2` (bg `img/gallery/video-bg.jpg`, height 650px) with centered `div.video-wrap` → `a.popup-video.btn-icon` (magnific-popup YouTube link) — white circle (`#fff`, 100px, radius 50%, play icon `#F04506`) + animated ripple ring (`::after` border 100px `rgba(255,255,255,0.3)`).
  6. **Clients testimonial** (`div.clients-testimonial.section-padding.fix` — bg `#ECECDC`): `div.clients-speech-active.dot-style` slick carousel of SIX `div.single-clients-speech` slides (room photo `img/gallery/rooms1.jpg` + quote; center slide scale(1), side slides scale(0.8)); white arrow buttons (`button.slick-arrow`, 116×68 white, gold `#c6a16e` chevron icons, hover bg `#AFAF9F`), dots below. Below the slider: `div.row.pt-35` with two columns — LEFT `div.section-tittle.mb-20` `h2` "Pampering Included"; RIGHT `div.section-tittle` paragraph "Ochean de View extends along a private, quiet and beautiful tropical beach. Stay away from the crowd and enjoy the beauty and lust."
  7. **About** (`section.about-area.section-bg.fix.section-padding` — bg `#FAFAF8`): heading `div.section-tittle.mb-50` `h2` "Joyful experiences for you and your family"; then THREE alternating `div.row.align-items-center.mb-70` rows (image left/caption right, then mirrored):
     - Row 1: `div.about-img` `img.about1.jpg` + `div.about-caption` (WHITE card overlapping the image, `left:-100px`, padding `76px 50px 41px 63px` desktop) `h2` "A world-class restaurant" + paragraph.
     - Row 2: `div.about-caption.about-caption2` `h2` "Swimming Pool" + paragraph + `div.about-img.about-img2` `img.about2.jpg`.
     - Row 3: `img.about3.jpg` + `div.about-caption` `h2` "Party Center" + paragraph.
       (Paragraph copy: "Ochean de View extends along a private, quiet and beautiful tropical beach. Stay away from the crowd and enjoy the beauty and lust." — repeated.)
  8. **Company strip** (`div.compay-img.fix` — `container-fluid.p-0`): full-width image band `img/gallery/section-full.jpg`.
  9. **Testimonial area** (`div.testimonial-area.testimonial-padding` — padding 100px/180px): centered `div.section-tittle.text-center.mb-80` `h2` "Hear what our past guests have to say"; `div.h1-testimonial-active.dot-style` carousel of THREE `div.single-testimonial`: `p` quote ("Aenean eget consectetur ante. Quisque sit amet sem id nulla tincidunt rhoncus. Sed iaculis tortor vitae nibh varius bibendum. Pellentesque a lectus consectetur.") + `div.testimonial-founder` (round `img.founder-img.png` + `span` name "Graham Cracker" + `p` "Designer at Colorlib"). Dots navigation.
  10. **Instagram** (`div.instagram-area.fix` — `container-fluid.p-0`): `div.instagram-active.owl-carousel` of FIVE `div.single-instagram` squares (`instra1.jpg`…`instra4.jpg`); hover: dark navy `#010a44` overlay at 30% opacity + white instagram icon.
  11. **Footer** (`footer.footer-area` — bg `#FAFAF8`): `div.footer-wrapper` → `container.footer-padding` row:
      - Col (xl-5): brand `img.logo2_footer.png` + `div.footer-pera` about paragraph ("Ochean de View extends along a private, quiet and beautiful tropical beach. Stay away from the crowd and enjoy the beauty and lust.").
      - Col (xl-2): `div.footer-tittle` `h4` "The Hotel" + links **Rooms · The Spa · Experiences · Offers · Contact** (Cormorant Garamond 24px/300, color `#686865`, underline on hover).
      - Col (xl-3): `div.footer-tittle` `h4` "10 (78) 273 3563" + link "info@ocheandeview.com" + `ul.footer-social` icons (instagram · facebook · linkedin-in).
      - `div.footer-bottom-area` → `div.footer-border` → `div.footer-copy-right.text-center`: "Copyright © <year> All rights reserved | This template is made with ❤ by Colorlib" (source credit — REPLACED per policy).
  12. **Scroll-up** (`div#back-top`): `a.wrapper` "Go to Top" with `div.arrows-container` (`.arrow.arrow-one` + `.arrow.arrow-two` chevrons).
- **Visual design (TEMPLATES.md screenshot `ocheandeview-colorlib-template.jpg`, 1200×946, viewed in browser 2026-08-13):** luxury hotel one-pager. Transparent header ("Ochean de View" logo left; "Call Us" + beige "Book Now" button + hamburger right) over a full-screen soft-focus photo of a hotel room (crisp white linens, dark wooden headboard, bedside lamp, sheer-curtained window — moody dark charcoal/wood tones). Centered huge elegant serif headline "Ochean de View" in white (high-contrast Didot/Bodoni-style — Cormorant Garamond) + lighter italic sans tagline "A chance to go offline and get in touch with nature." A solid earthy OLIVE/TAN bar (#85856D) at the bottom of the hero carries the booking fields (Check In / Check Out / Guest + dark "Check Availability" button). Below: stark white section with large serif heading "The shelter is the Outcome of the" + lorem-style copy, then the video band, cream (#ECECDC) quote carousel, alternating white about cards, full-width photo band, testimonials, instagram squares, and a light off-white footer.
- **Design tokens extracted from the live CSS (`assets/css/style.css`, verified 2026-08-13):**
  - Brand olive/sage: **`#85856D`** (50 uses) — the booking bar background, `.btn_01` outline (12px 44px padding, hover → `#B8B8A0` fill), `.btn_2` hover text color.
  - Primary button sage: **`#B8B8A0`** (41 uses) — `.btn` (Cormorant 18px/500, padding 22px 32px, radius 35px PILL, white text; `::before` coral `#ec583a` sweep on hover) and `.btn_1` (16px 41px padding, hover inverts to white bg + sage text) — the "Book Now" style.
  - Dark ink: **`#3C3A34`** (6 uses) — booking "Check Availablity" button bg (70px tall, Raleway 600 20px), hero overlay `rgba(60,58,52,0.7)`, sticky header `#0a0a0a`.
  - Off-white: **`#FAFAF8`** (3 uses) — `.section-bg` (Videos, About) and `.footer-area` background.
  - Cream: **`#ECECDC`** (1 use) — `.clients-testimonial` background (guest quotes band).
  - Text grays: **`#686865`** (6 uses — footer text, `.section-tittle p` 20px), `#656565` (about-caption paragraph 20px), `#212025` (about-caption pera-top/pera-bottom 16px).
  - Accent gold: **`#C6A16E`** (testimonial arrow chevrons), hover `#AFAF9F`; video play icon `#F04506` on a white circle; instagram hover overlay `#010a44`.
  - Fonts: **"Cormorant Garamond", serif** (display — hero h1 144px/500, `.section-tittle h2` 79px/500/line-height 1.1 (41/40/31/30px responsive), booking labels 22px/600, footer links 24px/300) and **"Raleway", sans-serif** (body + buttons — booking CTA 600/20px, footer paragraphs 18px/400). Both Google Fonts — add `<link>`s in `index.html`.
  - Buttons: `.btn` pill (radius 35px, sage fill, white text, hover coral sweep); `.btn_1` sage rect; `.btn_2` transparent white-outline (hero/slider, hover white bg + `#85856D` text); `.btn_01` sage outline rect. No rounded corners on booking fields (radius 0, bottom-border only).
  - Booking inputs: transparent, `border-bottom: 2px solid rgba(250,250,248,0.5)`, white italic placeholder, 47px tall.
  - About caption card: white bg, desktop `left:-100px` overlap, padding `76px 50px 41px 63px`.
  - Section rhythm: `.section-padding` = 120px 0 (70px mobile); `.top-padding` 120px; `.testimonial-padding` 100px/180px; `.video-area` height 650px (300px mobile); `.slider-height1` min-height 980px (420px mobile).
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap 5 layout (NO Bootstrap dependency); section order 1:1 as above; Cormorant Garamond + Raleway via Google Fonts `<link>`s in `index.html`; brand `#85856D` + `#B8B8A0` in `@theme` used via Tailwind classes, with `#3C3A34`, `#FAFAF8`, `#ECECDC`, `#686865`, gold `#C6A16E` tokens; images via seeded picsum placeholders (`picsum.photos/seed/shoreline-<n>/<w>/<h>` — hotel-room/beach subjects for hero + video-bg + about + rooms; screen the seeds per the skill's pixel-metric method for the hero), icons from lucide-react (calendar, users, search, play, chevron-left/right, instagram/facebook/linkedin as INLINE SVG brand icons — lucide-react removed brand icons); the source's slick/owl carousels (clients speech, testimonial, instagram) + gijgo date pickers + nice-select as client-side React state/components (accessible carousel + select patterns); the magnific-popup video link becomes a modal or an inert link with aria-label; copy may be paraphrased but keep the same kinds (headline + tagline + CTA; booking labels; video teaser paragraphs; about feature headings; quote + founder rows; footer widgets); brand "Ochean de View"/"Colorlib" → "Shoreline" everywhere including the footer credit; footer MUST link https://www.componentdock.com/ per policy; document title "Shoreline — Beachfront Hotel & Resort". Nav/CTA links are dead anchors (single landing page; "Rooms", "The Spa", etc. anchor to `#` harmlessly).

Shoreline lives in `apps/shoreline` (package `@free-react-templates/shoreline`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header

The system SHALL render a transparent-over-hero header with a logo, a phone
line, a Book Now button and an off-canvas mobile menu.

#### Scenario: Header brand and actions

- **GIVEN** the Shoreline page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand logo on the left
- **AND** the header SHALL show "Call Us: 10(88) 267 354" (desktop only)
- **AND** a sage "Book Now" button SHALL be shown
- **AND** a hamburger menu control SHALL be shown

#### Scenario: Off-canvas menu

- **GIVEN** the header is rendered
- **WHEN** the hamburger control is activated
- **THEN** a full-screen menu SHALL open with links Home, Rooms, About,
  Gallery, Blog (with a Blog Details/Elements submenu), Contact
- **AND** the menu SHALL show the contact phone and email plus social icons
- **AND** a close control SHALL close the menu

#### Scenario: Sticky header

- **GIVEN** the page is scrolled
- **WHEN** the header is observed after scrolling
- **THEN** it SHALL become sticky with a dark background (`#0a0a0a`)

### Requirement: Hero

The system SHALL render a full-height hero with a dark-overlaid photo, a
bouncing down-arrow, a large serif headline and a tagline.

#### Scenario: Hero content

- **GIVEN** the Shoreline page is rendered
- **WHEN** the hero section is inspected
- **THEN** a full-height background photo with a dark overlay (`rgba(60,58,52,0.7)`)
  SHALL be shown
- **AND** a bouncing down-arrow link SHALL be shown
- **AND** the headline "Shoreline" (or the brand name) SHALL be shown in
  large white serif type (~144px desktop)
- **AND** the tagline "A chance to go offline and get in touch with nature."
  SHALL be shown in lighter white type

### Requirement: Booking bar

The system SHALL render an olive booking bar with check-in, check-out, guest
fields and an availability button.

#### Scenario: Booking fields

- **GIVEN** the page is rendered
- **WHEN** the booking bar is inspected
- **THEN** the bar SHALL have the brand olive background (`#85856D`)
- **AND** it SHALL show labeled fields: Check In (date), Check Out (date),
  Guest (select with options Number of guest, Adult, Child, Older)
- **AND** the fields SHALL use transparent inputs with a 2px translucent
  bottom border and italic white placeholders

#### Scenario: Availability button

- **GIVEN** the booking bar is rendered
- **WHEN** the search button is inspected
- **THEN** a full-width dark button ("Check Availablity") SHALL be shown
  with a dark ink background (`#3C3A34`), white text and a search icon

### Requirement: Video teaser

The system SHALL render an off-white intro section with a heading, two
paragraphs and a full-width video band with a circular play button.

#### Scenario: Intro copy

- **GIVEN** the Video teaser section is rendered
- **WHEN** the section is inspected
- **THEN** the heading "The shelter is the Outcome of the Dream" SHALL be
  shown on the left
- **AND** two descriptive paragraphs SHALL be shown on the right

#### Scenario: Play button

- **GIVEN** the Video teaser section is rendered
- **WHEN** the video band is inspected
- **THEN** a full-width photo band SHALL be shown (height ~650px desktop)
- **AND** a centered circular white play button with an orange play icon
  SHALL be shown, with an animated ripple ring

### Requirement: Clients testimonial carousel

The system SHALL render a cream section with a room-photo quote carousel
and a "Pampering Included" intro row.

#### Scenario: Quote slider

- **GIVEN** the Clients testimonial section is rendered
- **WHEN** the section is inspected
- **THEN** the section SHALL have the cream background (`#ECECDC`)
- **AND** a carousel of quote cards (room photo + quote text) SHALL be shown
- **AND** white arrow buttons (prev/next) with gold chevrons SHALL navigate
  the carousel
- **AND** a dots indicator SHALL be shown

#### Scenario: Intro row

- **GIVEN** the Clients testimonial section is rendered
- **WHEN** the row below the slider is inspected
- **THEN** the heading "Pampering Included" SHALL be shown on the left
- **AND** a resort description paragraph SHALL be shown on the right

### Requirement: About rows

The system SHALL render an off-white About section with a heading and three
alternating photo/caption rows.

#### Scenario: About heading and rows

- **GIVEN** the About section is rendered
- **WHEN** the section is inspected
- **THEN** the heading "Joyful experiences for you and your family" SHALL
  be shown
- **AND** three alternating rows SHALL be shown, each with a photo on one
  side and a white caption card on the other (caption card overlapping the
  photo on desktop)
- **AND** the captions SHALL be: "A world-class restaurant", "Swimming
  Pool", "Party Center", each with a short paragraph

### Requirement: Company strip

The system SHALL render a full-width photo band between About and
Testimonials.

#### Scenario: Full-width band

- **GIVEN** the page is rendered
- **WHEN** the band between About and Testimonials is inspected
- **THEN** a full-bleed (edge-to-edge) photo band SHALL be shown

### Requirement: Testimonials

The system SHALL render a centered "Hear what our past guests have to say"
section with a founder testimonial carousel.

#### Scenario: Testimonial carousel

- **GIVEN** the Testimonials section is rendered
- **WHEN** the section is inspected
- **THEN** the centered heading "Hear what our past guests have to say"
  SHALL be shown
- **AND** a carousel of testimonial slides SHALL be shown, each with a
  quote, a round founder photo, a name and a role line
- **AND** a dots indicator SHALL navigate the slides

### Requirement: Instagram strip

The system SHALL render a full-bleed row of square instagram-style photos
with a hover overlay.

#### Scenario: Instagram tiles

- **GIVEN** the Instagram strip is rendered
- **WHEN** the strip is inspected
- **THEN** five square photos in a row SHALL be shown
- **AND** hovering a tile SHALL reveal a dark navy overlay with an
  instagram icon

### Requirement: Footer

The system SHALL render an off-white footer with a brand column, a hotel
links column, a contact column, social icons and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the Footer is rendered
- **WHEN** the footer is inspected
- **THEN** it SHALL have the off-white background (`#FAFAF8`)
- **AND** it SHALL show three columns: brand logo + about text; "The Hotel"
  heading with links Rooms, The Spa, Experiences, Offers, Contact; a
  contact column with a phone heading, an email link and social icons
  (instagram, facebook, linkedin)

#### Scenario: Copyright bar

- **GIVEN** the Footer is rendered
- **WHEN** the bottom bar is inspected
- **THEN** a centered copyright line SHALL be shown with a neutral credit
  (no ColorLib attribution; per policy the footer MUST link
  https://www.componentdock.com/)

### Requirement: Scroll-up control

The system SHALL render a "Go to Top" control with a double-chevron arrow.

#### Scenario: Scroll-up arrow

- **GIVEN** the page is rendered
- **WHEN** the bottom-right scroll-up control is inspected
- **THEN** an arrow control SHALL be shown that scrolls the page to the top
  when activated

## Verification checklist

- [ ] App `apps/shoreline` (package `@free-react-templates/shoreline`), 100%
      vitest coverage, per-app gate green (`scripts/verify-app.sh shoreline`)
- [ ] Section order 1:1 with the source: preloader → transparent header
      (logo, Call Us, Book Now, off-canvas menu) → hero (photo + overlay +
      bounce arrow + serif headline + tagline) → booking bar (`#85856D`:
      Check In / Check Out / Guest + dark Check Availablity button) →
      Video teaser ("The shelter is the Outcome of the Dream" + 2 paras +
      video band with circular play button) → Clients testimonial
      (`#ECECDC` quote carousel + "Pampering Included" row) → About
      ("Joyful experiences..." + 3 alternating photo/caption rows:
      restaurant / pool / party center) → full-width company strip →
      Testimonials ("Hear what our past guests have to say" + founder
      carousel) → Instagram strip (5 tiles) → off-white footer (brand /
      "The Hotel" links / contact + social) → scroll-up control
- [ ] Brand tokens in `@theme`: `#85856D` (olive brand), `#B8B8A0` (sage
      primary button), `#3C3A34` (dark ink), `#FAFAF8` (off-white sections + footer), `#ECECDC` (cream quotes band), `#686865` (muted text),
      `#C6A16E` (gold accent) — all via Tailwind classes
- [ ] Display font Cormorant Garamond + body font Raleway via Google Fonts
      `<link>`s in `index.html`; hero h1 ~144px, section h2 ~79px desktop
- [ ] Buttons: sage pill (`.btn` style, radius 35px), sage rect `btn_1`
      (Book Now), dark full-width booking CTA (70px, Raleway 600), video
      play = white circle + `#F04506` icon + ripple ring
- [ ] Placeholder images via `picsum.photos/seed/shoreline-<n>/<w>/<h>`
      (screen seeds: hero must be a moody hotel/beach photo that keeps
      white text readable under the `rgba(60,58,52,0.7)` overlay), icons
      from lucide-react (brand icons as inline SVG), no copied assets
- [ ] Brand renamed "Ochean de View"/"Colorlib" → "Shoreline" everywhere;
      copyright credit neutral; footer MUST link
      https://www.componentdock.com/; dead links (Book Now, nav, footer
      links, Check Availablity) anchor harmlessly
- [ ] Email link is mailto:, phone link computed at runtime from a spaced
      string (no literal tel: URI — toolchain redaction pitfall)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] jsdom 30: copy the MemoryStorage polyfill from
      apps/cura/src/test/setup.ts into the new app's setup if any
      localStorage use is introduced
- [ ] TEMPLATES.md bookkeeping at ship time: mark BOTH `- [ ]` rows
      (line 610 Bootstrap 5, line 1920 Hotel) `[x]` with the same surge URL + `npm run readme:status` (implementer)
