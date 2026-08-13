# Template: Shutterly (Photographer Template)

## Purpose

Shutterly is a photographer portfolio one-pager in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Josanclick"
template design (see TEMPLATES.md — appears 2×: lines 595 and 2454; both rows
point to the same source, one prep covers all; verified with
`grep -c 'wp/template/josanclick/'` = 2), built under a DIFFERENT name
(Shutterly — "shutter" + -ly, matching the project's naming pattern: Hiredly,
Shiply, Hoodly, Roadly, Lendly, Stayly) per the monorepo naming mandate (never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/josanclick/ (Bootstrap /
Photographer / Business categories; `<title>Photographer</title>`).
Preview URL: https://preview.colorlib.com/theme/josanclick/ (HTTP 200, ~32 KB
HTML fetched — the preview slug matches the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Josanclick" — a moody, monochrome photographer
  portfolio one-pager. Full-bleed hero photo slider with a dark cinematic
  gradient overlay and bottom-centered thin-uppercase captions; a white About
  section with a script (Poiret One) heading, a vertical photographer photo,
  and a large thin "08 Years of Experience" counter; a gap-free 3-column
  photo gallery with hover captions; a light `#F2F4F8` services row
  ("I do for you" — Event / Wedding / Family Photography cards with a photo
  above the title); a solid-black testimonial carousel; a white 3-card pricing
  row (black pill badge, big thin price, outline "Choose This Plan" button);
  a full-bleed Instagram image strip; and a solid `#1E1E1E` footer with a
  newsletter form. The brand is black `#0A0A0A` on white/light canvas with
  white-on-dark sections — no bright accent color. Headings use "Poiret One"
  (thin, elegant, looks like a handwritten script at 50px), body and nav are
  "Jost" sans-serif.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/josanclick/
  (HTTP 200, ~32 KB HTML; `assets/css/style.css` ~68 KB parsed for tokens).
  The page imports bootstrap.min, owl.carousel, slicknav, animate.min,
  magnific-popup, fontawesome, themify-icons, slick, nice-select — the site is
  jQuery + Bootstrap 4 + owl-carousel + slicknav + slick + counterup +
  waypoints + hover-direction-snake + wow, NOT Tailwind. All interactivity
  (hero slider, testimonial carousel, counters, instagram carousel, mobile
  menu, back-to-top) must be recreated client-side in React.
- **Screenshot note:** `josanclick-colorlib-template.jpg` (downloaded OK);
  the visual design was verified on the LIVE rendered preview in a browser
  (hero slide 1 "MIAMI LAKE" over a dusk lake photo with dark bottom gradient;
  transparent navbar "JOSANCLICK" + center links + right social icons;
  about photo of a photographer in a red jacket; gallery of 6 travel/landscape
  photos; pricing cards with black oval "Photography" badge). The live preview
  DOM + parsed stylesheet are the authoritative reference.

### Section structure (from the live DOM, top to bottom)

1. `header.header-area.header-transparent` > `div.main-header.header-sticky`:
   - `div.logo` left — "JOSANCLICK" text logo (recreate as "Shutterly" in
     white/`#0A0A0A` depending on header state).
   - `ul.main-menu` centered: Home (active), Portfolios, Services, About,
     Blog (dropdown: Blog, Blog Details, Elements), Contact — links white
     Jost 16px, padding 28px 7px; dropdown = white bg, `#0A0A0A` 15px links.
   - `div.header-info-right` — social icons (white, 16px, padding-left 19px).
   - Sticky state: header is transparent over the hero; sticky bar gets a
     solid background on scroll (verify visually; the reference CSS uses
     `.header-sticky.sticky-bar`).
   - Mobile: slicknav → client-side hamburger menu.
2. `div.slider-area` > `div.slider-active.dot-style` — hero slider, 3 slides
   (`div.single-slider.slider-height.hero-overly.slider-bg1/2/3`,
   `.slider-height` = 950px, cover, center):
   - Dark gradient overlay (`.hero-overly::before`): `linear-gradient(to
bottom, rgba(10,10,10,0.8) 0% … rgba(10,10,10,0.7) 100%)` — darkest at
     the top, keeps the bottom-center caption legible.
   - `div.hero-caption.text-center.mb-100`: `span` (white 20px/300, mb 10px)
     - `h1` (uppercase, 70px/400 white, line-height 1.1, mb 50px; 65px at
       medium width).
     * Slide 1: span "Nature Beauty" / h1 "Miami Lake"
     * Slide 2: span "Travel Shot" / h1 "Kayaking on Lakee"
     * Slide 3: span "Action Shot" / h1 "Electricity"
   - Prev/next arrows on the sides + dot navigation; scroll-down indicator.
3. `section.about-area.section-padding` (white bg) — 3 columns
   (`col-xxl-4 col-xl-4 col-lg-5` / `col-xxl-4 col-xl-4 col-lg-6` /
   `col-xxl-3 col-xl-4 col-lg-5`):
   - Left `div.about-caption`: `h2` "I Click Moment, that you love" (Poiret
     One 50px/300, line-height 1, mb 12px), `p` body (18px/400 `#656565`,
     line-height 1.5, lorem — paraphrase), `div.singneture.mt-40` (signature
     image → replace with a stylized SVG signature / cursive text).
   - Center `div.about-img`: vertical photo of a photographer crouching with
     a camera (picsum portrait seed).
   - Right `div.about-caption.about-caption2`: `div.experience` — big thin
     counter "08" (Poiret One, huge) + "Years of Experience" (`p` `#0A0A0A`
     20px/300), body text, italic quote ("A gray cat slinks past a wooden
     house. There's has something a little intimidating attempting to
     describe." — paraphrase), `a` "My Work" (border-btn outline style).
4. `div.gallery-area` — photo gallery, 6 tiles in a tight 3-column grid
   (`col-lg-4 col-md-4 col-sm-6 p-0` — no gaps, full-bleed strip):
   - `div.box.snake` (hover-direction snake effect) > `div.gallery-img.big-img`
     (565px tall, cover) + `div.overlay` > `div.overlay-content` (bottom
     center): `p` caption white 18px/300 (e.g. "Nature Beauty") + `h3`
     "Street Shot" (the demo repeats "Street Shot" on all 6 tiles —
     paraphrase into 6 distinct captions, same kind of content).
5. `section.home-blog.section-bg1` (bg `#F2F4F8`) — services row:
   - `div.section-tittle.section-tittle2.mb-50`: `h2` "I do for you" (Poiret
     One 40px) + `span` muted `#8F8F8F` 14px.
   - 3 × `div.single-blogs.mb-30` (col-lg-4): `div.blog-img.blog-img2` (photo,
     mb 25px) + `div.blogs-cap`: `span` `#74706B` (small meta, mb 11px) + `h5
a` "Event Photography" / "Wedding Photography" / "Family Photography"
     (`#0A0A0A` 30px/300, line-height 1.4) + `p` (lorem — paraphrase per
     card).
6. `div.testimonial-area.testimonial-padding` (bg `#0A0A0A` black):
   - `div.h1-testimonial-active` (carousel, 1 visible, prev/next arrows):
     `div.single-testimonial.text-center` > `div.testimonial-caption`:
     `h2` "Testimonial" (Poiret One, white) + `div.testimonial-top-cap` `p`
     (white quote, 20px+ — paraphrase) + `div.testimonial-founder`:
     `div.founder-img` (small round portrait) + `div.founder-text` `span`
     "Graham Cracker, Designer at Colorlib" (name 26px white + role — rename
     to a neutral name, no Colorlib reference in app code).
7. `section.pricing-card-area.section-padding` (white bg):
   - `div.section-tittle.mb-60.text-center`: `h2` "Choose a plan that suit
     you" (Poiret One 40px).
   - 3 × `div.single-card.text-center.mb-30` (col-xl-4): white card, border
     1px solid `#DBDBDB`, padding 30px 0, no radius:
     - `div.card-mid` (mb 33px, pb 8px, border-bottom 1px `#DBDBDB`): `span`
       pill badge — bg `#0A0A0A`, white text, radius 25px, padding 7px 21px,
       mb 13px (demo shows "Photography" on all three — vary the plan label:
       e.g. Portrait / Event / Wedding) + `h4` price " $ 400 USD " (`#0A0A0A`
       Jost 30px/400; demo repeats $400 on all three — vary the prices, keep
       the "$ X USD" structure).
     - `div.card-bottom` (padding 0 25px): `ul`/`li` 5 feature lines
       (lorem — paraphrase) + `a.border-btn` "Choose This Plan" (outline →
       fills `#071112` white on hover).
8. `div.instagram-area.fix` — full-bleed Instagram strip: `div.instagram-active`
   (owl-carousel) of square tiles (`div.single-instagram`, 6+ tiles, hover
   shows an icon/link). Recreate as a horizontally scrolling row of 6 square
   photos with hover overlay (client-side).
9. `footer.footer-area.footer-padding` (bg `#1E1E1E`):
   - `div.footer-wrapper` — 4 columns (col-xl-3 col-lg-4 / col-xl-2 / col-xl-2
     / col-xl-3 grid):
     - Widget 1: `div.footer-logo.mb-25` (brand "Shutterly") + `div.footer-pera`
       `p` (lorem — paraphrase) + social icons.
     - Widget 2 `div.footer-tittle` h4 "Navigation" (white 20px, mb 30px):
       Home, About, Services, Blog, Contact.
     - Widget 3 h4 "Contact": 87/A, Green lane, CA 6732; Real State;
       info@josanclick.com; +10 236 327 3782 (display strings only — compute
       any tel:/mailto: hrefs at runtime from spaced literals; see the
       tel-literal redaction pitfall).
     - Widget 4 h4 "Subscribe Newsletter" (white): `div.footer-form` >
       `div.mc_embed_signup` form — email input (placeholder "Enter your
       email") + "SUBSCRIBE" button (black `.btn` style) → success state.
   - `div.footer-bottom-area` > `div.footer-border`: `div.footer-copy-right`
     — "Copyright © All rights reserved | This template is made with ❤ by
     ColorLib" → recreate as "© 2026 Shutterly — Photographer · All rights
     reserved" + a mandatory Component Dock link
     (https://www.componentdock.com/, "Made with Component Dock") per
     conventions.
   - `a.back-top` "Go to Top" button (bottom-right, scroll-to-top).

### Content (for copy paraphrase)

- Header: brand "Shutterly"; Home (active), Portfolios, Services, About, Blog
  (Blog / Blog Details / Elements), Contact; social icons.
- Hero slides: ("Nature Beauty" / "Miami Lake"), ("Travel Shot" / "Kayaking
  on Lakee"), ("Action Shot" / "Electricity").
- About: "I Click Moment, that you love" + body lorem + signature; counter
  "08" / "Years of Experience"; quote; "My Work".
- Gallery: 6 photo tiles, captions (span + h3 — demo repeats "Street Shot";
  vary).
- Services: "I do for you"; Event Photography / Wedding Photography / Family
  Photography + blurbs.
- Testimonial: "Testimonial"; one quote + founder name/role.
- Pricing: "Choose a plan that suit you"; 3 cards (pill badge label, "$ X
  USD" price, 5 features, "Choose This Plan") — vary the 3 plans (demo
  repeats identical content).
- Footer: brand + pera + social; Navigation (Home, About, Services, Blog,
  Contact); Contact (87/A, Green lane, CA 6732 · Real State ·
  info@josanclick.com · +10 236 327 3782); Subscribe Newsletter
  (email + SUBSCRIBE); copyright bar + Component Dock link.

## Design tokens

| Token        | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Usage                                                                                                                                                                                                                                   |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ink          | `#0A0A0A`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | brand black: solid `.btn`, pricing pill badge, card h4 price, border-btn border/text, section h5 titles, testimonial-area bg, experience p, navbar dropdown links                                                                       |
| footer-bg    | `#1E1E1E`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | footer-area background                                                                                                                                                                                                                  |
| services-bg  | `#F2F4F8`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | services row (section-bg1) background                                                                                                                                                                                                   |
| paper        | `#FFFFFF`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | about / gallery / pricing / instagram backgrounds                                                                                                                                                                                       |
| body-text    | `#656565`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | about-caption paragraph (18px/400, line-height 1.5)                                                                                                                                                                                     |
| muted        | `#8F8F8F`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | section-tittle span (14px)                                                                                                                                                                                                              |
| meta-text    | `#74706B`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | blogs-cap span (service card meta, 11px mb)                                                                                                                                                                                             |
| card-border  | `#DBDBDB`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | pricing single-card border + card-mid bottom border                                                                                                                                                                                     |
| hover-fill   | `#071112`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | border-btn hover background (scaleY reveal, white text)                                                                                                                                                                                 |
| hero-overlay | `linear-gradient(to bottom, rgba(10,10,10,0.8) 0%, rgba(11,11,11,0.67) 3%, rgba(9,9,9,0.63) 4%, rgba(9,9,9,0.54) 6%, rgba(9,9,9,0.45) 8%, rgba(9,9,9,0.41) 9%, rgba(9,9,9,0.36) 10%, rgba(9,9,9,0.32) 11%, rgba(8,8,8,0.23) 13%, rgba(7,7,7,0.14) 15%, rgba(0,0,0,0.05) 17%, rgba(1,1,1,0) 18%, rgba(20,20,20,0.05) 39%, rgba(13,13,13,0.07) 48%, rgba(8,8,8,0.11) 66%, rgba(13,13,13,0.14) 78%, rgba(8,8,8,0.22) 81%, rgba(12,12,12,0.25) 82%, rgba(9,9,9,0.33) 85%, rgba(11,11,11,0.35) 86%, rgba(9,9,9,0.42) 89%, rgba(11,11,11,0.45) 90%, rgba(9,9,9,0.53) 93%, rgba(11,11,11,0.55) 94%, rgba(9,9,9,0.63) 97%, rgba(11,11,11,0.65) 98%, rgba(10,10,10,0.7) 100%)` | hero-slide overlay (`.hero-overly::before`), darkest at top — can be simplified to `linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.05) 18%, rgba(10,10,10,0.7))` but must stay dark at top + readable caption at bottom |
| font-display | "Poiret One" (Google Fonts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | section h2 titles (50px/300 → 40px → 30px responsive), hero h1 (70px/400 uppercase), `.btn` (18px), experience counter                                                                                                                  |
| font-body    | "Jost" (Google Fonts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | body 16px, nav links (16px, padding 28px 7px), card h4 price (30px), founder name                                                                                                                                                       |

Radii: buttons radius 0 (square — `.btn` and `.border-btn` are sharp);
pricing pill badge radius 25px; pricing cards no radius (border only).
Buttons:

- `.btn` (solid primary — hero? actually used for subscribe + general): bg
  `#0A0A0A`, Poiret One 18px/400, padding 22px 32px, white text, radius 0,
  hover = direction-aware fill (snake effect).
- `.border-btn` (outline — "My Work", "Choose This Plan"): 1px solid
  `#0A0A0A`, color `#0A0A0A`, bg none, 14px/400, letter-spacing 1px, padding
  11px 39px, radius 0, hover → bg `#071112` + white text (scaleY reveal).
  Spacing: section-padding default; hero caption mb-100 from bottom; gallery
  tiles 565px tall, no gaps; single-card padding 30px 0, card-bottom padding
  0 25px; footer widget h4 white 20px mb 30px; nav links margin 0 14px
  (12px at medium).

## Requirements

### Requirement: Header / Navigation

The system SHALL render a transparent top navigation bar with a brand, six
nav links (one with a dropdown), social icons, and a mobile hamburger menu.

#### Scenario: Brand and nav links

- **GIVEN** the Shutterly app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL sit at the top, transparent over the hero
- **AND** the brand SHALL read "Shutterly" on the left
- **AND** the nav SHALL contain Home (active), Portfolios, Services, About,
  Blog, Contact
- **AND** social icons SHALL be visible on the right

#### Scenario: Blog dropdown

- **GIVEN** the desktop nav is visible
- **WHEN** the user hovers/clicks "Blog"
- **THEN** a dropdown SHALL open with Blog, Blog Details, Elements (white
  panel, `#0A0A0A` links)

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user taps the hamburger toggle
- **THEN** a menu with the same nav links SHALL open
- **AND** the toggle SHALL be accessible (aria-expanded, aria-label)

### Requirement: Hero slider

The system SHALL render a full-height photo slider with three slides, each
with a dark gradient overlay, a caption (span + uppercase h1), arrows, and
dots.

#### Scenario: Slide content

- **GIVEN** the hero slider is rendered
- **WHEN** the user is at the top of the page
- **THEN** a 950px-high full-bleed slide SHALL show a cover photo with the
  dark gradient overlay
- **AND** the caption SHALL sit bottom-center with a small span (e.g.
  "Nature Beauty") above an uppercase h1 (e.g. "Miami Lake") in white
  Poiret One

#### Scenario: Slider navigation

- **GIVEN** the hero slider has 3 slides
- **WHEN** the user clicks an arrow or a dot
- **THEN** the visible slide SHALL change client-side
- **AND** the active dot SHALL be marked

### Requirement: About

The system SHALL render a three-column about section with a script heading,
paragraph, signature, a vertical photo, an experience counter, a quote, and
a "My Work" outline button.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls to it
- **THEN** the left column SHALL show the script heading "I Click Moment,
  that you love" (Poiret One), a paragraph, and a signature graphic
- **AND** the center column SHALL show a vertical photographer photo
- **AND** the right column SHALL show a large "08" counter with "Years of
  Experience", a body line, an italic quote, and a "My Work" outline button

### Requirement: Gallery

The system SHALL render a gap-free 3-column photo gallery of six tiles, each
with a hover overlay showing a caption.

#### Scenario: Gallery tiles

- **GIVEN** the gallery section is rendered
- **WHEN** the user scrolls to it
- **THEN** six photo tiles SHALL form a tight (no-gap) 3-column grid
- **AND** hovering a tile SHALL reveal an overlay caption (e.g. span
  "Nature Beauty" + heading "Street Shot")

### Requirement: Services

The system SHALL render a light `#F2F4F8` services section with the heading
"I do for you" and three photo cards (Event / Wedding / Family Photography).

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "I do for you"
- **AND** three cards SHALL each show a photo, a small meta line, an h5 title
  (Event Photography / Wedding Photography / Family Photography), and a
  blurb

### Requirement: Testimonial

The system SHALL render a black-background testimonial carousel with a
heading, one quote, and a founder (portrait + name/role).

#### Scenario: Testimonial content

- **GIVEN** the testimonial section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL have a `#0A0A0A` background with the heading
  "Testimonial"
- **AND** SHALL show a quote and a founder with portrait, name, and role
- **AND** SHALL be navigable with prev/next arrows (carousel)

### Requirement: Pricing

The system SHALL render three bordered pricing cards, each with a black pill
badge, a "$ X USD" price, five feature lines, and a "Choose This Plan"
outline button.

#### Scenario: Pricing cards

- **GIVEN** the pricing section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "Choose a plan that suit you"
- **AND** three cards SHALL show a black pill badge (plan label), a thin
  30px price ("$ X USD"), five features, and a "Choose This Plan" button
- **AND** hovering the button SHALL fill it `#071112` with white text

### Requirement: Instagram strip

The system SHALL render a full-bleed horizontal strip of square photo tiles
with hover links.

#### Scenario: Strip tiles

- **GIVEN** the instagram strip is rendered
- **WHEN** the user scrolls to it
- **THEN** a row of 6+ square photos SHALL scroll horizontally (client-side)

### Requirement: Footer

The system SHALL render a `#1E1E1E` footer with brand/pera/social,
Navigation links, Contact details, a Subscribe Newsletter form, a copyright
bar, a back-to-top button, and the mandatory Component Dock link.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** SHALL be brand + pera + social icons, "Navigation" (Home, About,
  Services, Blog, Contact), "Contact" (address, info@josanclick.com,
  +10 236 327 3782), and "Subscribe Newsletter" (email input + SUBSCRIBE
  button)

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is rendered
- **WHEN** the user enters an email and clicks "SUBSCRIBE"
- **THEN** the form SHALL show a success state (no backend)

#### Scenario: Copyright bar

- **GIVEN** the footer bottom bar
- **WHEN** rendered
- **THEN** SHALL show "© 2026 Shutterly — Photographer · All rights reserved"
- **AND** SHALL link https://www.componentdock.com/ ("Component Dock")
- **AND** a back-to-top button SHALL scroll to the top on click

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh shutterly`)
- [ ] Design tokens from this spec applied in `@theme` (ink `#0A0A0A`,
      footer-bg `#1E1E1E`, services-bg `#F2F4F8`, body-text `#656565`,
      muted `#8F8F8F`, meta-text `#74706B`, card-border `#DBDBDB`,
      hover-fill `#071112`)
- [ ] Poiret One + Jost loaded via Google Fonts `<link>` in index.html
- [ ] Section structure + order matches the live DOM 1:1 (header → hero
      slider → about → gallery → services → testimonial → pricing →
      instagram → footer)
- [ ] Placeholder images via `https://picsum.photos/seed/shutterly-<n>/<w>/<h>`
      (3 hero slides, about photo, 6 gallery tiles, 3 service photos,
      founder portrait, 6 instagram tiles); NO assets copied from ColorLib
- [ ] Icons from lucide-react or inline SVG (social icons; NO fontawesome /
      themify / flaticon). Verify every lucide export with the typeof probe —
      brand icons (Facebook/Instagram/LinkedIn/Youtube) are REMOVED from
      lucide-react; use inline SVG brand paths instead
- [ ] Interactivity client-side only: hero slider, testimonial + instagram
      carousels, counters, mobile menu, newsletter submit → success state
      (no owl-carousel/slicknav/slick/jquery)
- [ ] Contact phone/email rendered as display strings; any `tel:`/`mailto:`
      hrefs computed at runtime from spaced literals (tel-literal redaction
      pitfall — NEVER write `tel:+...` literals in source)
- [ ] Testimonial founder renamed (no "Colorlib" string in app code)
- [ ] Footer links Component Dock (https://www.componentdock.com/)
- [ ] No colorlib.com / preview.colorlib.com strings in any app file
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL (shutterly.free.componentdock.com) returns 200
