# Template: Mercy (Charity / Non-profit)

## Purpose

Mercy is a single-page charity / non-profit website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Aid" design (see TEMPLATES.md, Bootstrap (216) category),
built under a DIFFERENT name — **Mercy** (a compassion/kindness term for the
children's-care charity design; single lowercase word, no collision with
`apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified
2026-08-11) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a clean charity landing page: a transparent dark navbar over
a full-height black-and-white photo hero with an uppercase white headline and
a black CTA button (plus a "Play video" link); a volunteer/donation band with
a photo + "We need volunteers in Africa" callout beside a dark panel with an
animated "$380,000" donation counter; a light-gray 4-card services row (Help
& Support, Adoption, Volunteering, Education); a centered "Let's build the
world without child abuse and neglect" heading with a circular-image causes
carousel (5 causes); a periwinkle-blue "Success Stories" testimonial
carousel; and a near-black 4-column footer with a copyright bar. Mercy
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

> NOTE (prep-stream 2026-08-11): the official preview
> `https://preview.colorlib.com/theme/aid/` is LIVE — fetched HTTP 200
> (~27.5 KB HTML + `css/style.css` ~69.5 KB + Bootstrap 4 + owl.carousel +
> AOS + jquery.animateNumber + magnific-popup + scrollax + stellar +
> ionicons/flaticon/icomoon icon fonts + google-map, curl-verified) and
> analyzed for this prep. The TEMPLATES.md screenshot
> (`aid-free-template.jpg`, 1200×946) was also viewed in a browser; it shows
> the transparent nav over the hero + the volunteer/donation band and cuts
> off mid-page, matching the live render (below-the-fold sections captured
> from the live DOM + CSS instead). Note: the screenshot's "search bar at top
> center" is a browser chrome artifact, NOT part of the template — the
> template has no search bar.

## Design reference (replication findings)

- **Original:** ColorLib "Aid" — free Bootstrap 4 charity / children's care
  & non-profit donation template (source: https://colorlib.com/wp/template/aid/).
  The recreation brands itself **Mercy** but keeps the same section
  structure, heading copy kinds, and card set.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/aid/` (HTTP 200, ~27.5 KB HTML +
  `css/style.css` ~69.5 KB; assets under `images/`). Page sections are
  `section`/`div` based; section order (1:1):
  1. **Navbar** — `nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark.ftco-navbar-light`:
     transparent over the hero (`.ftco-navbar-light { background: transparent
!important; position: absolute; top: 20px; left/right: 0; z-index: 3 }`):
     brand **"Aid."** (`a.navbar-brand`, 24px/900 white, the trailing `.`
     span in gold `#ffb400`); `ul.navbar-nav.ml-auto` links: **Home**
     (`.active`) · Who we are · Causes · Stories · Contact (white,
     `navbar-dark`); mobile: `button.navbar-toggler` "Menu" hamburger
     (`.oi.oi-menu`). Scrolled state `.scrolled`: `position: fixed`, white
     `#fff` background + box-shadow 0 0 10px rgba(0,0,0,.1), brand turns
     black `#000000`.
  2. **Hero** — `div.hero-wrap` (height 800px, background-image `images/bg_1.jpg`,
     `data-stellar-background-ratio="0.5"`; `.overlay` white, opacity .1):
     `.row.no-gutters.slider-text.align-items-center.justify-content-end`:
     - RIGHT `col-md-6.order-md-last`: `h1.mb-4` **"We can help to save the
       world"** (`.slider-text h1`: 54px/900/white, UPPERCASE via
       text-transform, letter-spacing 5px, line-height 1.2; 40px ≤991px) +
       `a.btn.btn-black.py-3.px-4` **"How Can I Help"**.
     - LEFT `col-md-6.d-none.d-md-block`: `.play-video.pb-5` popup-vimeo
       link — `.icon` ion-ios-play glyph + span.play **"Play video"**
       (screenshot shows vertical white "PLAY VIDEO" text with arrow icon on
       the left edge of the photo).
  3. **Volunteer + Donation** — `section.ftco-section.ftco-no-pt.ftco-no-pb.ftco-volunteer`:
     - LEFT `col-md-7.img-volunteer` (background-image `images/about.jpg`) >
       nested `row.no-gutters.justify-content-end` > `col-lg-7` > `.text.py-5`:
       `h2.mb-4` **"We need volunteers in Africa"** (`.ftco-volunteer .text
h2`: 50px/900/black, line-height 1.1) + paragraph (lorem) +
       `a.btn.btn-primary.py-3.px-4` **"Join now"** (gold).
     - RIGHT `col-md-5.d-flex.align-items-center.bg-black` (bg `#1e1e1e`) >
       `.about-text.py-5.pl-md-5`: `h2` **"Donation so far
       $<strong class="number" data-number="380000">0</strong>"**
       (`.about-text h2`: 50px/900/white, line-height 1.1; the number
       count-up-animates to 380,000 via jquery.animateNumber) + paragraph +
       `a.btn.btn-black.py-3.px-4` **"Donate now"**.
  4. **Services** — `section.services-section.py-5.py-md-0.bg-light`
     (bg `#f8f9fa`): `row.no-gutters.d-flex` of 4 ×
     `col-md-6.col-lg-3.d-flex.align-self-stretch` `.media.block-6.services.d-block`
     — `.icon` flaticon glyph (60px, `rgba(0,0,0,.2)`) + `.media-body` `h3.heading.mb-3`
     - `p`:
     * **Help & Support** — "203 Fake St. Mountain View, San Francisco,
       California, USA" (flaticon-charity)
     * **Adoption** — "A small river named Duden flows by their place and
       supplies." (flaticon-adoption)
     * **Volunteering** (`.active` card) — same lorem (flaticon-volunteer)
     * **Education** — same lorem (flaticon-open-book)
       Active/hover card: `.services.active { background: #ffb400; color:
#000000 }`.
  5. **Causes** — `section.ftco-section.ftco-causes`:
     - `.heading-section.text-center` (col-md-10): `h2.mb-4` **"Let's build
       the world without child abuse and neglect"** (50px/900) + lorem
       paragraph.
     - `.carousel-causes.owl-carousel` of 5 `.item` > `a.causes.text-center`:
       `.img` (200×200, `border-radius: 50%`, background-image
       `images/causes-1..5.jpg`) + `h2` (20px/900) —
       **Adoption, Fostering & Children Care** · **Disadvantages Young
       People** · **Meditation & Crisis Services** · **Providing Children
       Care and Education** · **Safeguarding & Consultancy Services**.
       Hover: `.causes:hover { margin-top: -10px }` (card lifts).
  6. **Testimony** — `section.testimony-section` (bg **`#6b76ff`**
     periwinkle blue): `row.ftco-animate.justify-content-center`:
     - LEFT `col-md-6.d-flex`: `.testimony-img` (background-image
       `images/testimony-img.png`).
     - RIGHT `col-md-6.py-5`: `.heading-section.heading-section-white` h2
       **"Success Stories"** + `.carousel-testimony.owl-carousel.ftco-owl` of
       4 `.item` > `.testimony-wrap.pb-4`: quote paragraph (lorem) + `.d-flex`:
       `.user-img` (80×80, `border-radius: 50%`, `images/person_1.jpg`) +
       `.pos.ml-3`: `p.name` **"Jeff Nucci"** (20px/800/white) +
       `span.position` **"Businessman"** (18px, `rgba(255,255,255,.8)`).
  7. **Footer** — `footer.ftco-footer.ftco-section` (bg **`#1e1e1e`**,
     padding 7em 0, font-size 16px): `row.mb-5` of 4 × `col-md`
     `.ftco-footer-widget.mb-4`:
     - **Brand column**: `h2.ftco-heading-2` **"Mercy."** + lorem paragraph +
       `ul.ftco-footer-social` — twitter, facebook, instagram icon links
       (inline SVG brand icons).
     - **Information**: links **Donation** · **Privacy** · **Terms
       Condition**.
     - **Links**: **Home** · **Who we are** · **Causes** · **Blog** ·
       **Contact**.
     - **Have a Questions?**: `.block-23` — address "203 Fake St. Mountain
       View, San Francisco, California, USA" (icon-map-marker) · phone
       "+2 392 3929 210" (icon-phone) · email "info@yourdomain.com"
       (icon-envelope).
       Footer links `rgba(255,255,255,.7)`; widget h2 white 24px/900.
       Copyright bar (`row` > `col-md-12.text-center`): **"Copyright ©<year>
       All rights reserved | made with ♥ by ColorLib"** (rephrase to Mercy).
  8. **Loader (optional)** — `#ftco-loader.show.fullscreen` overlay with an
     SVG circular spinner (stroke `#F96D00`). Recreate only if trivial (a
     brief loading state) or skip; it is a pre-hydration artifact in the
     source.
- **Visual design (TEMPLATES.md screenshot `aid-free-template.jpg`, 1200×946,
  viewed in browser 2026-08-11):** modern charity landing page built on
  high-contrast black-and-white documentary photography. Transparent navbar
  ("Aid." white logo top-left, white links top-right) over a full-bleed
  black-and-white hero photo (close-up of a man's face with hands over it —
  distress/empathy framing); large bold UPPERCASE white headline "WE CAN
  HELP TO SAVE THE WORLD" overlaid right with a black rectangular "How Can I
  Help" button below it and vertical "PLAY VIDEO" text on the left edge.
  Below the hero: white content band — left, a volunteer photo with bold
  black headline "We need volunteers in Africa" + "Join now" button; right,
  a DARK grey/black panel with large white "Donation so far $380,000" + a
  "Donate now" button. Monochrome palette (black/white/grey) with the
  template's gold `#ffb400` accent (buttons, active cards, brand dot) and
  the periwinkle-blue `#6b76ff` testimonial band below the fold. Clean modern
  sans-serif throughout (Nunito Sans). Screenshot cuts off after the
  volunteer/donation band; below-the-fold sections captured from the live
  DOM + CSS.

## Design tokens

From `css/style.css` (verified 2026-08-11):

- **Brand colors:**
  - `#ffb400` (gold/amber) — PRIMARY accent: all `a` link color + hover,
    `.btn.btn-primary` background/border, `.services.active` background,
    `.bg-primary`, brand trailing `.` span, `.slider-text`/nav active states.
  - `#000000` — `.btn.btn-black` background + 1px border (white text),
    `.ftco-volunteer .text h2` (headline black), scrolled-navbar brand.
  - `#1e1e1e` — dark near-black: `.bg-black` donation panel AND footer
    background (`.ftco-footer`).
  - `#6b76ff` — periwinkle blue: `.testimony-section` background.
  - `#f8f9fa` — light gray: `.bg-light` services section background.
  - `#fff` — hero headline, hero paragraph `rgba(255,255,255,.8)`, navbar
    brand/links (over hero), white-on-dark text, footer widget headings
    (24px/900 white), footer links `rgba(255,255,255,.7)`.
  - `#F96D00` — loader spinner stroke (orange, same family as brand gold).
  - `rgba(0,0,0,.2)` — services icon glyph color (gray, black at 20%).
- **Fonts:** body = `"Nunito Sans", Arial, sans-serif` — the template's
  single family (headings AND body; no separate display font). Load via
  Google Fonts `<link>` in `index.html`.
- **Type scale:** hero `h1` 54px/900/UPPERCASE/letter-spacing 5px/white
  (40px ≤991px); volunteer & donation `h2` 50px/900, line-height 1.1
  (black on photo, white on dark panel); `heading-section h2` (causes /
  success stories) 50px/900; `.causes h2` 20px/900; services `h3.heading`
  default h3 weight (bold); testimony `.name` 20px/800 white; `.position`
  18px `rgba(255,255,255,.8)`; footer `h2.ftco-heading-2` 24px/900 white;
  navbar brand 24px/900; body 16px.
- **Buttons:** `border-radius: 3px` (`.btn`; raw `button { border-radius: 0 }`
  is overridden by `.btn`), padding `py-3 px-4` = 1rem 1.5rem, uppercase
  NOT forced (buttons are Title Case in copy). `.btn.btn-primary`: gold
  `#ffb400` bg + white text + 1px gold border; hover → transparent bg, gold
  text (border stays gold). `.btn.btn-black`: black bg + 1px black border +
  white text; hover keeps black bg/white text. Focus: outline none.
- **Section backgrounds:** hero = full-bleed bg image + white overlay at
  opacity .1 (lighten); volunteer/donation band = white page bg with dark
  `#1e1e1e` right panel; services = `#f8f9fa`; causes = white; testimony =
  `#6b76ff`; footer = `#1e1e1e`.
- **Radius family:** 3px buttons; **circular** cause images (200×200,
  `border-radius: 50%`) and testimonial avatars (80×80, 50%); hero photo and
  volunteer photo are full-bleed square blocks (no radius). Navbar: flat.
- **Spacing rhythm:** hero 800px tall; volunteer `.text` py-5; donation
  `.about-text` py-5 pl-md-5; services section py-5 py-md-0 with equal-height
  cards (`align-self-stretch`); causes heading `pb-3`; footer padding 7em 0;
  footer widgets `mb-4`; copyright `text-center`.
- **Carousels (owl):** causes carousel 5 circular cards (`carousel-causes`);
  testimonial carousel 4 quotes (`carousel-testimony`) — both need prev/next
  arrows (owl default) and are autoplay-capable. Reuse one Carousel
  component with configurable slides/dots/arrows.
- **Count-up animation:** donation number animates 0 → 380,000
  (jquery.animateNumber) — recreate with a small hook (requestAnimationFrame
  or interval; must be testable with fake timers).
- **Icons:** ionicons/flaticon/icomoon glyphs in the source — recreate with
  lucide-react where available (Play for the video link, Heart for the
  copyright, MapPin/Phone/Mail for block-23); the flaticon service glyphs
  (charity/adoption/volunteer/open-book) and social brand icons
  (Twitter/Facebook/Instagram) are NOT in lucide-react — use inline SVG
  paths per the colorlib-template-replication skill.
- **Scroll effects (optional fidelity):** AOS reveal + scrollax parallax +
  stellar background parallax on hero/volunteer images + sticky navbar
  scroll state (transparent → fixed white). The navbar scroll-state is
  REQUIRED (visible behavior); AOS/parallax are optional enhancements.

## Requirements

### Requirement: Transparent navbar with scroll state

The system SHALL render a fixed-position dark navbar that is transparent
over the hero with a white "Mercy." brand (trailing dot in gold `#ffb400`)
and white links Home, Who we are, Causes, Stories, and Contact (Home
active). On scroll the navbar SHALL become fixed with a white background,
shadow, and black brand.

#### Scenario: Navbar links

- **GIVEN** the Mercy page is rendered
- **WHEN** the navbar is displayed
- **THEN** the brand "Mercy." SHALL be shown with the trailing dot in the
  brand gold
- **AND** links Home, Who we are, Causes, Stories, and Contact SHALL be
  present with Home active
- **AND** a mobile hamburger toggle SHALL be shown on small screens

#### Scenario: Scrolled state

- **GIVEN** the Mercy page is rendered
- **WHEN** the page is scrolled down
- **THEN** the navbar SHALL become fixed with a white background and a
  shadow
- **AND** the brand SHALL turn black

### Requirement: Full-height hero with CTA and video link

The system SHALL render an 800px-tall hero with a background photo (and a
subtle white overlay), a large UPPERCASE white headline "We can help to
save the world" on the right, a black "How Can I Help" button below it, and
a "Play video" link with a play icon on the left.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the hero is displayed
- **THEN** a full-width background image SHALL fill the 800px-tall hero
- **AND** the headline SHALL read "We can help to save the world" in large
  uppercase white letters with wide letter spacing
- **AND** a black "How Can I Help" button SHALL appear under the headline
- **AND** a "Play video" link with a play icon SHALL appear on the left

### Requirement: Volunteer callout and donation counter band

The system SHALL render a two-column band: on the left, a photo panel with
the black headline "We need volunteers in Africa", a paragraph, and a gold
"Join now" button; on the right, a dark (`#1e1e1e`) panel with the white
headline "Donation so far" showing an animated dollar amount that
counts up to $380,000, a paragraph, and a black "Donate now" button.

#### Scenario: Volunteer column

- **GIVEN** the volunteer/donation band is rendered
- **WHEN** the left column is inspected
- **THEN** a background photo SHALL be shown
- **AND** the headline SHALL read "We need volunteers in Africa" in bold
  black
- **AND** a gold "Join now" button SHALL be present

#### Scenario: Donation counter

- **GIVEN** the volunteer/donation band is rendered
- **WHEN** the right column is inspected
- **THEN** the column SHALL have the dark `#1e1e1e` background
- **AND** the headline SHALL read "Donation so far" with a dollar amount
- **AND** the amount SHALL animate (count up) to $380,000 when visible
- **AND** a black "Donate now" button SHALL be present

### Requirement: Services row (four equal cards)

The system SHALL render a light-gray (`#f8f9fa`) services row with four
equal-height cards — Help & Support, Adoption, Volunteering, Education —
each with an icon, a bold heading, and a short paragraph; the Volunteering
card SHALL be highlighted with the gold `#ffb400` background.

#### Scenario: Services cards

- **GIVEN** the services section is rendered
- **WHEN** the row is displayed
- **THEN** four equal-width cards SHALL be shown on large screens
- **AND** the cards SHALL be titled Help & Support, Adoption, Volunteering,
  and Education
- **AND** each card SHALL show an icon, a heading, and a paragraph
- **AND** the Volunteering card SHALL have the gold background (active
  state)

### Requirement: Causes heading and circular carousel

The system SHALL render a centered heading "Let's build the world without
child abuse and neglect" with a supporting paragraph, followed by a
carousel of five cause cards, each with a circular image and a title
(Adoption, Fostering & Children Care; Disadvantages Young People;
Meditation & Crisis Services; Providing Children Care and Education;
Safeguarding & Consultancy Services). Hovering a card SHALL lift it.

#### Scenario: Causes carousel

- **GIVEN** the causes section is rendered
- **WHEN** the section is displayed
- **THEN** the centered heading SHALL read "Let's build the world without
  child abuse and neglect"
- **AND** a carousel SHALL show five cause cards with prev/next controls
- **AND** each card SHALL display a circular image and a 20px bold title

#### Scenario: Card hover lift

- **GIVEN** a cause card is rendered
- **WHEN** the card is hovered
- **THEN** the card SHALL move up (negative top margin) to signal
  interactivity

### Requirement: Success Stories testimonial carousel

The system SHALL render a periwinkle-blue (`#6b76ff`) testimonial section
with the heading "Success Stories" and a carousel of four testimonials,
each showing a quote, a circular avatar, a name (e.g. "Jeff Nucci"), and a
position (e.g. "Businessman").

#### Scenario: Testimonials

- **GIVEN** the testimony section is rendered
- **WHEN** the section is displayed
- **THEN** the section SHALL have the `#6b76ff` background
- **AND** the heading SHALL read "Success Stories"
- **AND** a carousel SHALL show testimonials with prev/next controls
- **AND** each testimonial SHALL display a quote, a circular avatar, a
  name, and a position in white text

### Requirement: Four-column footer with copyright bar

The system SHALL render a near-black (`#1e1e1e`) footer with four columns:
a brand column ("Mercy." + paragraph + social icon links), an Information
column (Donation, Privacy, Terms Condition), a Links column (Home, Who we
are, Causes, Blog, Contact), and a "Have a Questions?" column (address,
phone, email). A centered copyright line SHALL appear at the bottom.

#### Scenario: Footer columns

- **GIVEN** the Mercy page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have the `#1e1e1e` background
- **AND** the brand column SHALL show "Mercy.", a paragraph, and social
  icon links
- **AND** an Information column SHALL list Donation, Privacy, and Terms
  Condition
- **AND** a Links column SHALL list Home, Who we are, Causes, Blog, and
  Contact
- **AND** a "Have a Questions?" column SHALL show an address, a phone
  number, and an email address
- **AND** a centered copyright line SHALL appear at the bottom

### Requirement: Design tokens and fidelity

The system SHALL implement the design tokens from the Design tokens
section: brand gold `#ffb400` in `@theme`, Nunito Sans via Google Fonts
`<link>` in `index.html`, 3px-radius buttons (gold primary with
transparent-hover, black secondary), circular cause images and avatars,
`#f8f9fa` services background, `#6b76ff` testimony background, `#1e1e1e`
donation panel + footer, the count-up donation amount, and the exact
section order (navbar → hero → volunteer/donation → services → causes →
testimony → footer).

#### Scenario: Token application

- **GIVEN** the Mercy app is implemented
- **WHEN** the stylesheet is inspected
- **THEN** the brand color `#ffb400` SHALL be defined as a theme token and
  used by links, primary buttons, the active services card, and the brand
  dot
- **AND** Nunito Sans SHALL be loaded via a Google Fonts link in
  `index.html`
- **AND** buttons SHALL use 3px radius, cause images and avatars SHALL be
  circular, and the section backgrounds SHALL match the token values

## Verification checklist

- [ ] `openspec/specs/template-mercy/spec.md` — Gherkin scenarios above map
      1:1 to vitest scenarios (one `describe` per component).
- [ ] `npm run spec:validate` passes for the new spec.
- [ ] Replication fidelity: section order 1:1 (navbar → hero → volunteer/
      donation band → services → causes carousel → success stories carousel
      → 4-column footer + copyright); tokens `#ffb400` / `#000000` /
      `#1e1e1e` / `#6b76ff` / `#f8f9fa`; Nunito Sans; 3px buttons; circular
      cause images + avatars; count-up donation amount ($380,000).
- [ ] Placeholder images: `https://picsum.photos/seed/mercy-<n>/<w>/<h>`
      (deterministic per template; black-and-white / humanitarian scenes
      preferred for the hero — check picsum seeds before commit).
- [ ] Icons from lucide-react (Play, MapPin, Phone, Mail, Heart); flaticon
      service glyphs + social brand icons (Twitter/Facebook/Instagram) as
      inline SVG paths (lucide removed brand icons).
- [ ] Two owl-equivalent carousels: causes (5 circular cards) + success
      stories (4 quotes) — reuse one Carousel component with configurable
      slides/arrows/autoplay; autoplay optional but must be testable (fake
      timers).
- [ ] Donation counter: count-up hook (0 → 380,000) triggered on view;
      test with fake timers + IntersectionObserver mock if used.
- [ ] Navbar scroll state: transparent-over-hero → fixed white on scroll
      (test via scroll event / state toggle; document the approach).
- [ ] Navbar links render in desktop AND mobile menus — use `getAllByRole`
      and index the mobile one last in tests.
- [ ] 100% coverage lines/functions/branches/statements; `scripts/
  verify-app.sh mercy` green; full gate via CI on merge.
- [ ] PR description: source template (ColorLib Aid), preview URL
      (`https://preview.colorlib.com/theme/aid/`), design tokens used,
      what differs (renames, placeholder images, paraphrased copy).
