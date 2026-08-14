# Template: Wavelength (Radio Station)

## Purpose

Wavelength is a single-page radio-station website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Radios" design (see TEMPLATES.md — line 483, first unchecked
item whose prep did not exist on main), built under the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, modern, photo-driven radio station homepage: a
transparent navbar overlaid on a full-viewport hero photo (logo left, menu
right, hamburger on mobile), a centered hero with the uppercase headline
"Listen — On-Air Now", a short intro line, and a circular lime-green audio
play button (an HTML `<audio controls>` player styled into a pill), then a
negative-margin band of four show cards (photo + lime-green boxed title +
black boxed schedule), a "Weekly Radio Program" section with a retro
two-column layout (one tall card + two stacked cards), a light-gray
testimonial carousel ("Love By Our Listeners", 6 white slides with circular
avatars and bar-style pagination), a photo-background "Subscribe" band with
an email input + green Subscribe button, an "Our DJs" grid of 6 team cards
(photo with green hover overlay revealing name/role/socials), a light-gray
"News & Events" section with 3 white post cards, a solid lime-green social
icon band (6 icons), and a dark gray footer (About / Navigations + Follow
Us / Watch Live Streaming with a circular play button, copyright bar).
Wavelength recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Radios" — free radio station HTML template
  (source: https://colorlib.com/wp/template/radios/). Single-page homepage
  with subpages (DJs, Schedule, Podcasts, Events, Contact) linked from the
  nav; the recreation ships the homepage only (nav links are anchors/#
  placeholders unless noted).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/radios/`
  (HTTP 200, 36KB) + stylesheets `css/style.css` (242KB),
  `css/swiper-bundle.min.css` (Swiper carousel), `css/glightbox.min.css`
  (video lightbox), `css/aos.css` (scroll animations), and
  `fonts/icomoon/style.css` (custom icon font). The rendered DOM is the
  reference below; the TEMPLATES.md screenshot (`radios-free-template.jpg`,
  1200×946) confirms the visual design: a person with dark hair wearing
  white over-ear headphones resting on a soft rose-pink surface fills the
  hero, with white "Radios." logo top-left, small white nav links
  top-right, centered white uppercase "LISTEN — ON-AIR NOW" headline, and a
  large circular play button with a thick lime-green border in the hero
  center; below, four photo cards whose titles sit in bright lime-green
  boxes with white text and black schedule boxes underneath — a fresh,
  energetic, media-focused aesthetic built on a lime-green (#7cbd1e) accent.
- **Section order (1:1) from the preview DOM:**
  1. `div.site-wrap` → `div.site-navbar.mt-4` (navbar): `.container.py-1` >
     `.row.align-items-center`: `.col-8.col-md-8.col-lg-4` → `.site-logo.mb-0`
     `a.text-white.h2.mb-0` = `<strong>Radios<span class="text-primary">.</span></strong>`
     (logo wordmark white, green period); `.col-4.col-md-4.col-lg-8` →
     `nav.site-navigation.text-end`: `.d-inline-block.d-lg-none` hamburger
     `button.site-menu-toggle.js-menu-toggle.text-white` (icon-menu, aria-
     label "Open navigation menu", aria-expanded) + `ul.site-menu.js-clone-nav
.d-none.d-lg-block` with 6 links: Home (index.html), DJs (dj.html),
     Schedule (schedule.html), Podcasts (podcasts.html), Events
     (events.html), Contact (contact.html). Desktop menu items: inline-block,
     padding 10px 5px, links padding 10px 10px, letter-spacing .05em, color
     rgba(255,255,255,0.6), hover #fff; the `.active` link is #fff.
  2. `div.site-mobile-menu` (fixed off-canvas panel): `.site-mobile-menu-
header` with `.site-mobile-menu-close` button + `.site-mobile-menu-body`
     containing a clone of the nav (hamburger toggles it).
  3. `div.site-blocks-cover.overlay` (hero; inline bg `images/hero_bg_3.jpg`,
     data-aos="fade"): `.container` > `.row.align-items-center.justify-content-
center` > `.col-md-7.text-center` (data-aos="fade-up" delay 400):
     `h1` "Listen &mdash; On-Air Now" (white, 1.5rem → 2.5rem ≥768px,
     weight 700, letter-spacing .1em, uppercase); `p.mb-4` > `span.small`
     lorem intro; `#playerContainer` (margin-top 30px, flex centered) >
     `<audio controls class="hero-audio-player">` (source: an external mp3)
     — width 100%, max-width 400px, height 50px, border-radius 25px; the
     audio controls panel is rgba(255,255,255,0.9) with a lime-green
     circular play button. Hero min-height 600px / height calc(100vh), with
     `:before` overlay `rgba(0,0,0,0.4)`.
  4. `div.pb-5` (style `margin-top: -100px` — overlaps the hero bottom) >
     `div.container-fluid` > `div.row.g-0`: 4 × `div.col-md-6.col-lg-3`
     (data-aos fade-up, delays 100/200/300/400), each `a.unit-9` (height
     300px, overflow hidden): `div.image` (inline bg `images/img_1..4.jpg`,
     cover, scale 1.05 → 1 on hover) + `div.unit-9-content` (absolute,
     top 50%, translateY(-50%) → -65% on hover): `h2` show title
     ("Art Gossip", "Good Morning Show", "Blues Radio", "Classic Songs") in
     the lime-green padded box (inline bg #7cbd1e, box-shadow 10px 0 0 /
     0px 0 0 #7cbd1e, white 20px, padding 5px 0, padding-left 10px) +
     `span` schedule ("Friday 1:00pm &mdash; 2:30pm") in the black padded
     box (inline bg #000, same box-shadow trick, white 11px, letter-spacing
     .15em, uppercase, padding 4px 0, padding-left 10px).
  5. `div.site-section` (white bg) > `.container` (data-aos fade-up):
     `.row` → `div.site-section-heading.text-center.mb-5.w-border.col-md-6
.mx-auto`: `h2.mb-5` "Weekly Radio Program" (20px, letter-spacing .2em,
     uppercase; `.w-border` = 70px × 2px #7cbd1e underline, centered) + `p`
     lorem; then `div.site-block-retro.d-block.d-md-flex`:
     - `a.col1.unit-9.no-height` (width 48%, data-aos delay 100; image
       `images/img_2.jpg` height 300px): `h2` "Classic Songs For Classic
       People" (green box) + `span` "Friday 1:00pm — 2:30pm" (black box).
     - `div.col2.ms-auto` (width 48%): two stacked `a.unit-9.no-height`
       (`col2-row1`, `col2-row2`; each height 200px, `margin-bottom: 8%`
       between; images `images/img_3.jpg`, `images/img_1.jpg`): same green-
       box title + black-box schedule content.
  6. `div.site-section.bg-light.block-13` > `.container` (data-aos fade-up):
     `.row` → same `site-section-heading` pattern, `h2.mb-5` "Love By Our
     Listeners" + lorem `p`; then `div.nonloop-block-13.swiper` >
     `div.swiper-wrapper` with 6 `div.swiper-slide.text-center.p-3.p-md-5
.bg-white` slides, each: `div.mb-4` → `img.w-50.mx-auto.img-fluid
.rounded-circle` (person_1..6.jpg, circular avatar); `div` → `h3.fw-
light.h5` name ("Megan Smith", "Brooke Cagle", "Philip Martin",
     "Steven Ericson", "Nathan Dumlao", "Brook Smith") + `p.font-italic`
     quoted lorem testimonial. Below: `div.swiper-pagination` — bullets are
     28px × 4px bars, border-radius 0, background #cccccc, active #7cbd1e.
  7. `div.site-blocks-cover.overlay.inner-page-cover.subscribe` (inline bg
     `images/hero_bg_4.jpg`, min-height 600px / height calc(30vh), same
     rgba(0,0,0,0.4) overlay): `.container` > `.row.align-items-center
.justify-content-center.text-center` > `div.col-md-6` (data-aos fade-up
     delay 100): `h2` "Subscribe" (20px, letter-spacing .1em, uppercase,
     weight 300, white), `p.mb-5` lorem, `form.site-block-subscribe` >
     `div.input-group.mb-3`: `input.form-control.border-secondary.text-white
.bg-transparent` (placeholder "Enter your email", height 60px, weight
     300, white text, white placeholder at 0.5 opacity italic) +
     `button.btn.btn-primary#button-addon2` "Subscribe" (lime bg, black
     text, padding 0 20px).
  8. `div.site-section` > `.container` (data-aos fade-up): `.row` →
     `site-section-heading` `h2.mb-5` "Our DJs" + lorem `p`; then `.row` of
     6 × `div.col-md-6.col-lg-4.mb-5` (delays 100..600), each
     `div.team-member` (relative, overflow hidden, width 100%): `img.img-
fluid` (person_1..6.jpg, scale 1 → 1.1 on hover) + `div.text`
     (absolute centered, white, opacity 0/translateY(-30%) → visible
     translateY(-50%) on hover; `:before` green overlay rgba(124,189,30,0.8)
     appears on hover): `h2.mb-2.fw-light.h4` name ("Megan Smith", "Brooke
     Cagle", "Philip Martin", "Steven Ericson", "Nathan Dumlao", "Brooke
     Cagle") + `span.d-block.mb-2` role ("Creative Director") + social icon
     row.
  9. `div.site-section.bg-light` > `.container` (data-aos fade-up): `.row` →
     `site-section-heading` `h2.mb-5` "News &amp; Events" + lorem `p`;
     then `.row` of 3 × `div.col-md-6.col-lg-4` (delays 100/200/300), each:
     `a` → `img.img-fluid` (img_4.jpg / img_2.jpg / img_3.jpg) + `div.p-4
.bg-white`: `span.d-block.text-secondary.small.text-uppercase` "Jan
     20th, 2032" + `h2.h5.text-black.mb-3` > `a` "Art Gossip by Mike
     Charles" + `p` lorem. (Cards are `post-entry`-style: 1px #e6e6e6
     border, 4px radius, image zooms to scale 1.2 on hover.)
  10. `div.bg-primary` (solid lime band, data-aos fade) > `.container` >
      `.row`: 6 × `a.col-2.text-center.py-4.social-icon.d-block` with
      aria-labels "Follow us on Facebook / Twitter / Instagram / LinkedIn /
      Pinterest / Subscribe on YouTube", each `span.icon-* .text-white`
      (icomoon font icons, 20px; hover: color #ffc107, background #6ea71b).
  11. `footer.site-footer` (background #333333, padding 4em 0 → 7em 0
      ≥768px) > `.container` > `.row`:
      - `div.col-lg-4`: `div.mb-5`: `h3.footer-heading.mb-4` "About Radios"
        (14px, uppercase, letter-spacing .1em, white, 40px × 2px #7cbd1e
        underline `:before`) + `p` lorem (color #737373).
      - `div.col-lg-4.mb-5.mb-lg-0`: `div.row.mb-5`: `div.col-md-12` →
        `h3.footer-heading.mb-4` "Navigations"; `div.col-md-6.col-lg-6` →
        `ul.list-unstyled`: Home, DJs, News, Top 20 of the week; second
        col: About Us, Privacy Policy, Contact Us, Membership; then
        `div.row`: `div.col-md-12` → `h3.footer-heading.mb-4` "Follow Us" +
        social icon row.
      - `div.col-lg-4.mb-5.mb-lg-0`: `div.mb-5`: `h3.footer-heading.mb-4`
        "Watch Live Streaming" + `div.block-16` > `figure`: `img.img-fluid
.rounded` (img_1.jpg) + `a.play-button.glightbox` (70px white
        circle, lime icon-play glyph) linking to a Vimeo staff-pick video.
      - `div.row.pt-5.mt-5.text-center` > `div.col-md-12`: copyright bar
        "Copyright © [year] All rights reserved | This template is made
        with [heart] by Colorlib" → replace with the repo-standard footer
        credit.
- **Design tokens extracted from `css/style.css` + inline styles:**
  - Brand color: **#7cbd1e** (lime green) — the single accent, used for:
    logo period, hero audio play button, unit-9 title boxes (+10px box-
    shadow padding trick), section-heading 70×2px underline, swiper active
    pagination bar, `.btn-primary` background (text #000; hover bg
    #90c740), footer-heading 40×2px underline, team hover overlay
    rgba(124,189,30,0.8), social icon hover bg #6ea71b, play-button icon.
  - Fonts: **system-ui sans-serif stack** (Bootstrap default: system-ui,
    -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; body 1rem,
    line-height 1.7, weight 400, color #4d4d4d). No Google Fonts — the
    design is pure system sans; keep the repo default stack. Uppercase +
    letter-spacing drives the look: hero h1 1.5→2.5rem/700/.1em, section
    headings 20px/.2em, footer headings 14px/.1em, unit-9 schedule 11px/
    .15em.
  - Colors: **#fff** (hero text, logo, nav active link, card backgrounds,
    play circle); **#000** (unit-9 schedule boxes, selection bg, btn text);
    **#333333** (footer bg); **#737373** (footer body text); **#b3b3b3**
    (footer links); **#a6a6a6** (post date); **#cccccc** (swiper bullets);
    **#4d4d4d** (body text); **#f8f9fa** (bg-light sections); **#e6e6e6**
    (post card border); **#ffc107** (social icon hover color);
    **rgba(0,0,0,0.4)** (hero/subscribe overlay);
    **rgba(255,255,255,0.9)** (audio controls panel);
    **rgba(255,255,255,0.5)** (subscribe input placeholder);
    **rgba(255,255,255,0.6)** (nav link idle).
  - Buttons: `.btn-primary` — bg #7cbd1e, text #000, hover bg #90c740
    (Bootstrap default radius ~0.375rem, uppercase not required); subscribe
    button padding 0 20px; audio play button is a 25px-radius pill (50px
    tall, max-width 400px) with a lime circular play control.
  - Shapes: hero audio player border-radius 25px; team/avatar images
    rounded-circle; post cards 4px radius, 1px #e6e6e6 border, image zoom
    scale 1.2 on hover; swiper pagination = 28×4px bars (radius 0);
    play-button 70px circle; unit-9 titles/schedules are inline "padded"
    boxes (background + 10px horizontal box-shadow) — the signature
    typographic device.
  - Section backgrounds: hero = full-bleed photo + rgba(0,0,0,0.4);
    subscribe band = photo (30vh) + same overlay; weekly program + DJs =
    white; testimonials + news = #f8f9fa (bg-light); social band = solid
    #7cbd1e; footer = #333333.
  - Spacing: hero min-height 600px / 100vh; show-card band pulled up over
    the hero with `margin-top: -100px`; unit-9 cards 300px tall (retro
    col1 same, col2 cards 200px, 8% gap); section heading mb-5; footer
    padding 4em/7em 0; social icons py-4 col-2 each.
- **Recreation decisions:**
  - Navbar is a transparent overlay on the hero (matches original);
    desktop shows the 6-link menu, mobile shows the hamburger + off-canvas
    panel. The original's subpage links (dj.html, schedule.html, etc.)
    become `#` anchors on the single page (only the homepage is
    recreated).
  - Hero audio: render a real `<audio controls>` element styled to the
    pill (25px radius, white panel, lime play button) exactly like the
    original's `hero-audio-player`; no external mp3 needed — can omit the
    `src` or point at a placeholder (note the choice in the PR).
  - Swiper testimonial carousel: implement a simple auto-advancing
    carousel with the 6 slides + bar-style pagination (28×4px, active
    lime); no new dependency (hand-rolled or packages/ui if available).
  - AOS scroll animations (fade-up with staggered delays) are approximated
    with Tailwind transition utilities or omitted — note the choice.
  - Brand/social icons (facebook, twitter, instagram, linkedin, pinterest,
    youtube, play, menu, close) as lucide-react icons (repo convention;
    icomoon font is not copyable). Note lucide-react has no brand icons —
    use inline SVGs per repo convention.
  - All photos picsum-seeded (`picsum.photos/seed/wavelength-N/w/h`) —
    hero bg, 4 show cards, retro cards, 6 DJ portraits, 6 testimonial
    avatars, 3 news images, live-stream thumbnail. Hero + subscribe band
    use subject-verified picsum IDs (453 live-band stage photo for the
    hero, 1027 moody portrait for the subscribe band) per the
    seed-screening method.
  - Logo: text wordmark "Wavelength" in white with a lime-green trailing
    period (matches "Radios.").
  - Testimonial names/roles and fake contact data from the original are
    kept as placeholder content (same kind of content).
- **Fidelity rules honored:** section structure + order 1:1; design tokens
  (lime #7cbd1e accent, black/white padded boxes, uppercase letter-spaced
  headings, system sans stack) matched; layout matched (negative-margin
  card band, retro 2-column block, 6-DJ grid, 3-card news row, 6-icon
  social band, 3-column footer); no ColorLib assets copied; text
  paraphrased with the same kind of content.

Wavelength lives in `apps/wavelength` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn) where they fit.

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar overlaid on the hero with a
logo, desktop menu, and a mobile hamburger.

#### Scenario: Navbar content

- **GIVEN** the Wavelength page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Wavelength" in white type with a
  lime-green trailing period on the left
- **AND** it SHALL show the uppercase desktop menu links Home, DJs,
  Schedule, Podcasts, Events, and Contact in muted white on the right

#### Scenario: Mobile menu

- **GIVEN** the navbar is displayed on a narrow viewport
- **WHEN** the user activates the hamburger button
- **THEN** an off-canvas menu SHALL open with the same six nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero with audio player

The system SHALL render a full-viewport photo hero with a headline, intro
line, and a styled audio player.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-viewport photo background darkened by a
  ~40% black overlay
- **AND** it SHALL show the headline "Listen — On-Air Now" in white,
  uppercase, weight-700 type with wide letter-spacing (1.5rem on mobile,
  2.5rem on desktop)
- **AND** it SHALL show a short intro paragraph
- **AND** it SHALL show an HTML audio element styled as a ~400px-wide,
  50px-tall white pill with a lime-green circular play button

### Requirement: Show cards band

The system SHALL render a row of four photo cards pulled up over the hero,
each with a lime-boxed title and a black-boxed schedule.

#### Scenario: Show card content

- **GIVEN** the page is rendered
- **WHEN** the show band is displayed
- **THEN** it SHALL overlap the bottom of the hero (negative top margin)
- **AND** it SHALL show four equal-width photo cards titled "Art Gossip",
  "Good Morning Show", "Blues Radio", and "Classic Songs"
- **AND** each card SHALL show its title in a lime-green (#7cbd1e) padded
  inline box with white text
- **AND** each card SHALL show the schedule "Friday 1:00pm — 2:30pm" in a
  black padded inline box with small uppercase white text
- **AND** hovering a card SHALL zoom its photo slightly and lift the
  caption

### Requirement: Weekly Radio Program

The system SHALL render a retro two-column program block: one tall card on
the left and two stacked cards on the right.

#### Scenario: Retro block content

- **GIVEN** the page is rendered
- **WHEN** the Weekly Radio Program section is displayed
- **THEN** it SHALL show the uppercase heading "Weekly Radio Program" with
  a centered 70px lime underline
- **AND** it SHALL show a ~300px-tall left card and two ~200px-tall
  stacked right cards, each with a photo
- **AND** each card SHALL show the title "Classic Songs For Classic
  People" in a lime box and the schedule "Friday 1:00pm — 2:30pm" in a
  black box
- **AND** on narrow viewports the columns SHALL stack vertically

### Requirement: Testimonial carousel

The system SHALL render a light-gray testimonial section with a carousel of
six white slides and bar-style pagination.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the "Love By Our Listeners" section is displayed
- **THEN** it SHALL show the uppercase heading with a centered lime
  underline
- **AND** it SHALL show one testimonial slide at a time on a white card
  with a circular avatar photo, the listener's name, and an italic quoted
  testimonial
- **AND** it SHALL show bar-style pagination dots (28×4px, active dot
  lime-green)
- **AND** the carousel SHALL advance automatically or via pagination

### Requirement: Subscribe band

The system SHALL render a photo-background subscribe band with an email
input and a lime Subscribe button.

#### Scenario: Subscribe form

- **GIVEN** the page is rendered
- **WHEN** the Subscribe section is displayed
- **THEN** it SHALL show a ~30vh photo band darkened by a 40% black
  overlay
- **AND** it SHALL show the uppercase light-weight heading "Subscribe"
- **AND** it SHALL show an email text input with a white italic
  placeholder and a lime "Subscribe" button beside it

### Requirement: DJ team grid

The system SHALL render a grid of six DJ cards whose photos reveal a green
overlay with name, role, and social icons on hover.

#### Scenario: DJ card content

- **GIVEN** the page is rendered
- **WHEN** the "Our DJs" section is displayed
- **THEN** it SHALL show the uppercase heading with a centered lime
  underline
- **AND** it SHALL show six cards in a 3-column grid, each with a portrait
  photo
- **AND** hovering or focusing a card SHALL reveal a lime-green
  (rgba(124,189,30,0.8)) overlay with the DJ's name, role, and social
  icons in white

### Requirement: News & Events

The system SHALL render a light-gray section with three white post cards,
each with an image, date, title, and excerpt.

#### Scenario: News card content

- **GIVEN** the page is rendered
- **WHEN** the "News & Events" section is displayed
- **THEN** it SHALL show the uppercase heading with a centered lime
  underline
- **AND** it SHALL show three cards, each with a photo, a small uppercase
  date line ("Jan 20th, 2032"), a bold title link ("Art Gossip by Mike
  Charles"), and a body excerpt
- **AND** hovering a card SHALL zoom its image

### Requirement: Social band

The system SHALL render a solid lime-green band with six social icon links.

#### Scenario: Social icons

- **GIVEN** the page is rendered
- **WHEN** the social band is displayed
- **THEN** it SHALL show a lime-green (#7cbd1e) background with six
  equally spaced white social icons (facebook, twitter, instagram,
  linkedin, pinterest, youtube), each an accessible link
- **AND** hovering an icon SHALL tint it yellow (#ffc107)

### Requirement: Footer

The system SHALL render a dark gray footer with About, Navigations, Follow
Us, and Watch Live Streaming columns plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a #333333 background
- **AND** it SHALL show an "About Wavelength" column with a paragraph in
  muted gray (#737373)
- **AND** it SHALL show a "Navigations" column with two link lists (Home,
  DJs, News, Top 20 of the week / About Us, Privacy Policy, Contact Us,
  Membership) and a "Follow Us" heading with social icons
- **AND** it SHALL show a "Watch Live Streaming" column with a rounded
  video thumbnail and a 70px white circular play button with a lime icon
- **AND** each column heading SHALL be uppercase 14px white with a 40px
  lime underline
- **AND** it SHALL show a copyright bar with the repo-standard footer
  credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Wavelength app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar, hero, show cards, weekly program,
  testimonials, subscribe, DJ grid, news, social band, and footer inside
  the main landmark in the original's order
- **AND** the document title SHALL be "Wavelength — Radio Station"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- wavelength` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (navbar → hero + audio →
      show cards band → weekly program → testimonials → subscribe → DJ
      grid → news → social band → footer).
- [ ] Design tokens applied: lime #7cbd1e brand accent (logo period, audio
      play button, section underlines, btn-primary, social band),
      system-ui sans stack, uppercase letter-spaced headings (hero 2.5rem/
      700/.1em, section 20px/.2em, footer 14px/.1em), padded lime/black
      inline boxes on unit-9 cards, footer #333333, body #4d4d4d, muted
      #737373/#b3b3b3/#a6a6a6, bg-light #f8f9fa sections, rgba(0,0,0,0.4)
      hero overlays, swiper bars 28×4px radius 0 active lime.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Radios), preview URL, tokens,
      renames, and the icon-substitution note (lucide/inline SVG for
      icomoon).
