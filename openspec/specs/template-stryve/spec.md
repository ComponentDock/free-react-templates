# Template: Stryve (Health & Fitness / Gym)

## Purpose

Stryve is a bold, blue-accented gym landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Topgym"
template design, built under a DIFFERENT name (**Stryve** — a one-word gym
brand built from "strive"; single lowercase word, kebab-case-safe, no
collision with `apps/`, `openspec/specs/template-*`, `docs/templates/`, any
bold name in `TEMPLATES.md`, or any substring in the repository; verified with
`git grep -il stryve origin/main` = 0 hits and 0 hits in `TEMPLATES.md`) per
the monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript
(strict).

- **Source slug**: `topgym`
- **ColorLib page**: https://colorlib.com/wp/template/topgym/
- **Live preview**: https://preview.colorlib.com/theme/topgym/
  (HTTP 200, 49,595 B HTML + `css/style.css` 38,006 B + `js/main.js`
  4,210 B — all three fetched, parsed and rendered; the preview slug matches
  the TEMPLATES.md slug, no alias)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/topgym-free-template.jpg
  (AVIF, 1200×946, top fold inside a browser-chrome mock — decoded with PIL
  and inspected)
- **Package**: `@free-react-templates/stryve`
- **Deploy target**: `stryve.free.componentdock.com`

### Why this row needs a fresh build (prep-stream context)

`grep -c 'wp/template/topgym/' TEMPLATES.md` = **3** (lines 515, 1206 and
1883). All three rows are currently marked `[x]` and credit the `ironpulse`
app, but `openspec/specs/template-ironpulse/spec.md` names ColorLib
**Crossbody** as its source — `topgym` is therefore a false `[x]` (bucket 2,
APP-WRONG-DESIGN, in `docs/row-multiplicity.md`; measured exclusive-copy
evidence `row-excl / spec-excl` = `0 / 21` against the live bodies). The prep
stream writes the spec only: the implementer re-opens all THREE rows
`[x]` → `[ ]` on its `feat/template-stryve` branch before building, and marks
them `[x]` with `https://stryve.free.componentdock.com` after merge. Do not
touch `ironpulse`.

## Design reference (replication findings)

- **Original:** ColorLib "Topgym" — a single-page gym / fitness-club theme.
  Page title: `TopGym | Fitness HTML Template`. Signature look: a
  full-bleed gym photo hero under a **50%-black washed header band**, a
  centred square white wordmark between a split nav, a black vertical social
  rail pinned to the screen edge, **flat square electric-blue buttons**
  (`#233EDE`, zero radius), a **130px tight white headline** in a weight-500
  Roboto, an always-visible blue "+" tab on each trainer photo, a
  low-poly-blue patterned trainers band, a 4-up icon/photo features row whose
  88px blue circles overlap the photos above them, and a **3-card closing
  row** (bordered class list / blue-framed membership card / photo sign-up
  card) at a fixed 503px height.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/topgym/` —
  Bootstrap 4 + owl.carousel (hero slider) + slicknav (mobile menu) +
  magnific-popup (YouTube lightbox) + font-awesome; barfiller /
  circle-progress / counter scripts are loaded but are only exercised by the
  theme's OTHER pages. NOT Tailwind. Section order in the DOM:
  `header-section` → `search-bar-wrap` (full-screen search overlay) →
  `top-social` (5-icon rail) → `hero-slider` (3 `single-slide`) →
  `features-section` (3 `single-features`) → `services-section` (4
  `single-service` + "see all the services" button) → `trainer-section`
  (photo background, 3 `single-trainer`) → `upcoming-event-section` (3 cards:
  `upcoming-classes`, `membership-card`, `member-sign-up`) → `footer-section`
  (photo background).
- **Inner-page inventory (authoritative copy source for the invented
  single-page bands):** this is a multi-page theme and every sibling page is
  LIVE, HTTP 200 — `about-us.html` (47,929 B), `classes.html` (46,825 B),
  `elements.html` (51,113 B, the "Instructors" nav target), `blog.html`
  (44,533 B), `contact.html` (40,721 B). Their headings: about-us = "Who We
  Are", "We have the best Gym Trainers", "The best fitness facilities", "Why
  Choose us?", counters (Body building / Training / Fitness), "Testimonials"
  (Megan Smith, Michael Joe), "Join our gym now!"; classes = "Pilates", "Body
  Building", "Fitness", "Yoga", "Trx", "Spinning", "Get fitted", "Try
  Pilates", "Healthy Diet", "Meditation", "Diet Plan", "Grow Muscles", "25%
  Discount"; elements = buttons / accordions / milestones / loaders / icon
  boxes + the same feature trio; blog = dated post cards; contact = "Get in
  Touch".
- **Link / destination census (measured on the raw DOM):** **37** anchors —
  **25** are dead `href="#"`, **3** point at `./index.html` (wordmark, nav
  Home, footer Home), **5** at inner pages (`./about-us.html`,
  `./classes.html`, `./elements.html`, `./blog.html`, `./contact.html`), **3**
  at `https://www.youtube.com/watch?v=SEVuD_djKrU` (the hero play button opens
  it in a magnific-popup iframe), and **1** at `https://colorlib.com` (footer
  credit). The live rendered page reports 52 anchors / 30 dead `#` because
  owl.carousel clones the three slides.
- **Render measurement (headless Chromium, 1440×1000 viewport):** document
  height **4,632px**; header **142px** (absolute, over the hero, with a
  `rgba(0,0,0,0.5)` wash via `::after`); hero slide **895px**; features band
  starts at y=1,153; `#212122` services band **1,535→2,311**; trainers band
  **2,311→3,287** (976px); the three 503px cards at **y=3,388**; footer
  **641px** (3,991→4,632). Body font resolves to `Roboto, sans-serif`
  (`document.fonts.check('500 130px Roboto')` = true). At 390×844 the header
  is 125px, the hero `h1` drops to 45px, the social rail is `display:none`
  and the page is 8,883px tall.
- **Screenshot note:** the TEMPLATES.md image is the top fold only, inside a
  browser-chrome mock, and it caught the slider on **slide 2** ("Be Fit.Top
  Trainer") rather than slide 1 — visible: dark treadmill-gym photo, grey
  washed header band with HOME / ABOUT US / CLASSES left of a white
  double-line boxed "TOP GYM" wordmark and INSTRUCTORS / NEWS / CONTACT plus a
  search glyph right, the black social rail with five dark-navy circles, the
  blue circular play button, the huge white headline, a flat blue READ MORE
  button, and three white dots with the active one ringed. The live render
  (same fold, slide 1) is "Be Fit.Top Gym" — everything in the fold is
  accounted for by the DOM/CSS below.
- **Copy:** all body copy in the preview is lorem ipsum ("Pellentesque dictum
  nisl in nibh…") and the section labels are two typos to keep or fix
  deliberately ("Upcomming Classes", and the services block labelled
  "Features" over the `h2` "Services"). Paraphrase into real gym copy
  (classes, coaches, memberships, timetables) while keeping the same _kind_ of
  content per block and the same headline skeleton.

## Design tokens (from preview stylesheet `style.css` + live computed styles)

- **Fonts:** one family only — `"Roboto", sans-serif` (`html, body`), served
  from the preview host's `/cf-fonts/s/roboto/5.2.10/…` woff2 set at weights
  **100/300/400/500/700/900**. Base `p` is **15px / line-height 1.6 /
  `#7b7b7b`**; `h1..h5` are `#111111`, weight 600, with
  `h1 70px · h2 36px · h3 30px · h4 24px · h5 18px` (each section overrides).
  Ship Roboto via a Google Fonts `<link>`
  (`family=Roboto:wght@300;400;500;700;900`, HTTP 200 verified).
- **Brand blue (primary):** `#233EDE` — 30 declarations: `primary-btn`
  background, section-label text, hero play button, feature icon circles,
  trainer "+" tab, subscribe button, membership-card frame, footer heart.
- **Ink / dark:** `#212122` (services band background, "See All"/trainer
  button, `.up-title` text), `#111111` (headings), `#353535` (feature `h5`).
- **Body / muted:** `#7b7b7b` (all paragraphs, class rows), `#E5E7F3` (2px
  border on the class-list card), `#fff` (dark-band text, menu, buttons).
- **Header wash:** `rgba(0, 0, 0, 0.5)` — the `::after` overlay of the
  absolutely positioned `header-section` (142px desktop / 125px ≤767).
- **Social rail:** panel `#000` (121×379px, `padding: 32px 0 19px`), each
  icon circle **48px, `background:#081624`, `border-radius:50%`**, 22px
  vertical gaps, white glyphs; `right: 0` above 1400px, flips to `left: 0`
  at `max-width:1400px`, `display:none` ≤991px.
- **Buttons (`.primary-btn`):** `display:inline-block; font-size:14px;
  font-weight:700; padding:20px 50px; color:#fff; background:#233EDE;
  letter-spacing:1.5px; text-transform:uppercase;` — **zero radius, no
  border, no hover state in the sheet**. Rendered 191×61px. Keep the square
  geometry; a subtle darken on hover is an allowed React-side nicety.
- **Section rhythm:** `.spad` = `padding-top:95px; padding-bottom:90px`;
  `.spad-2` = `100px/100px`; `.spad-3` = `96px/90px`; `.p-70` =
  `padding-top:70px` (services button row). `.section-title` =
  `margin-bottom: 84px` (60px ≤991), containing a `span` (**12px, weight 900,
  `letter-spacing: 6px`, UPPERCASE, `#233EDE`, `margin-bottom:10px`,
  `display:block`**) above an `h2` (**48px, weight 700, `letter-spacing:6px`,
  UPPERCASE, `#fff`**).
- **Hero:** `.single-slide` height **895px**, `padding-top: 343px`,
  `text-align:center`, background photo cover; play button **56px blue
  circle** (`#233EDE`, white glyph, `margin-bottom:17px`); `h1` **130px,
  weight 500, white, `margin-bottom:45px`**; `.primary-btn` beneath. Slides
  fade (`animateIn fadeIn` / `animateOut fadeOut`, `smartSpeed:1200`,
  `autoplay:true`, `loop:true`, `mouseDrag:false`, `nav:false`, `dots:true`);
  each element enters with `top:50px; opacity:0` → `top:0; opacity:1` at
  0.2s/0.4s/0.6s. Dots: **6px white circles, 22px apart**, the active dot
  ringed by a `3px solid #fff` 26px circle offset −10px; dots sit
  `bottom:30px`, centred.
- **Header:** `.main-menu` `padding-top:55px`; logo is an **85×85 image**,
  absolutely centred (`left:50%; margin-left:-42.5px; top:30px`); `ul`
  `text-align:right; margin-left:200px` with items **13px / weight 500 /
  UPPERCASE / white**, the first three floated left (40px / 20px gaps) and
  the 5th+6th carrying `margin-right:35px`; the search glyph is
  `margin-left:152px`.
- **Features:** 3 × `col-md-4`; photo on top, then a **88px `#233EDE`
  circle** pulling up over the photo (`margin-top:-34px`), `h5` **18px/700
  UPPERCASE `#353535` `letter-spacing:1.5px` `margin-bottom:22px`**, `p`
  **15px / 30px `#7b7b7b`**. Max-width 350px in a 1140px container
  (content 1110px after gutters).
- **Services:** band `#212122`; 4 × `col-lg-3`; icon image
  `margin-bottom:50px`; `h5` 18px/700 white UPPERCASE `letter-spacing:1.5px`;
  `p` **14.5px / 30px `#7b7b7b`**; centred "see all the services" button in a
  `p-70` row.
- **Trainers:** band on a photo (`trainer-bg.jpg` — a low-poly blue polygon
  pattern), `padding:125px 0 100px`; `section-title` `span` is **white** here;
  the "See All" button is `#212122` and absolutely placed
  (`right:0; bottom:13px`) inside the title block (relative at ≤767 with a
  50px top margin). Each card = full-width portrait + an **always-visible
  `#233EDE` tab** at `left:15px; top:0; padding:37px 40px` holding a white
  plus glyph (**no hover rule exists** — it is not a hover effect; padding
  drops to `14px 18px` ≤991). Name `18px/700` white UPPERCASE
  `letter-spacing:1.5px`; role is a block `span` at **15px/400, `opacity:0.6`,
  `letter-spacing:0`, `margin-top:5px`**; text block `padding-top:48px`.
- **Upcoming row (3 fixed 503px cards):**
  1. `upcoming-classes` — **`border: 2px solid #E5E7F3`**, `padding: 67px 45px
     45px`; `.up-title` = 12px/900 `letter-spacing:6px` `opacity:0.6` span
     over an 18px/700 UPPERCASE `h5`, `margin-bottom:45px`; six `li` rows at
     14px `#7b7b7b`, `margin-bottom:30px; margin-left:17px`, each with a
     stopwatch icon absolutely at `left:-25px` and the time floated right.
  2. `membership-card` — photo background framed by blue borders
     (`22px` top / `24px` left / `21px` bottom / `20px` right, all
     `#233EDE`), content `padding:47px 0 0 27px`; "25%" at **72px/700
     `#233EDE`** with a 15px/700 "Discount" suffix offset `margin-left:-9px`.
  3. `member-sign-up` — photo background, `padding: 67px 41px 0 45px`; white
     `up-title` span (`opacity:0.6`), white 15px/30px paragraph
     (`margin-bottom:42px`), then a **full-width** blue `primary-btn`.
  At ≤991 each card takes `margin-bottom:30px` and stacks.
- **Footer:** photo band, height **641px**, `padding-top:109px`, all content
  centred. Logo `margin-bottom:33px`; menu 13px UPPERCASE white with 37px
  gaps (`margin-bottom:86px`); `.subscribe-form` is **542px wide**
  (`450px` ≤767, `280px` ≤479) with a **73px-tall transparent input,
  `border:2px solid #fff`, italic 13px, `padding-left:28px`, UPPERCASE 60%-
  opacity placeholder**, and a **192×73px `#233EDE` button** absolutely
  pinned `right:0; bottom:0` (`width:100px` ≤479); social row
  `margin:52px 0 45px` with **60px** gaps; `footer-icon` strip
  `margin-bottom:32px`; copyright 13px `color:#fff; opacity:0.5` with an
  underlined link.
- **Shapes to preserve:** **zero-radius square buttons everywhere** (the
  page's whole character), 88px feature circles, 56px hero play circle, 48px
  navy rail circles, the 22/24/21/20px blue card frame, the 2px `#E5E7F3`
  hairline card, the 6px pagination dots with the 26px ring.
- **Breakpoints in the source:** `max-width:1400px` (rail flips left),
  `992–1199px` (nav margins 110/62px, sign-up button padding), `768–991px`
  (hero `h1` 105px, title block 60px, rail hidden, cards stack),
  `max-width:767px` (header 125px, `h1` 65px, `h2` 38px, features stack with
  50px gaps, `.spad` bottom 40px, subscribe 450px), `max-width:479px`
  (`h1` 45px, `h2` 30px, subscribe 280px / button 100px).

## Requirements

### Requirement: Header (split nav, centred wordmark, search overlay)

The header SHALL be 142px tall, absolutely positioned over the hero, and
painted with a `rgba(0,0,0,0.5)` wash. It SHALL place an 85×85 wordmark dead
centre, the links Home / About us / Classes to its left, Instructors / News /
Contact plus a search glyph to its right (13px, weight 500, UPPERCASE,
white), and it SHALL NOT change background on scroll (the source has no
scrolling header state). Activating the search glyph SHALL open a full-screen
`#073B4C` search overlay with an `h2` "Search", one text field and a
"Search" submit button, closable by an X control, the Escape key, or a valid
submit.

#### Scenario: Desktop header layout

- **GIVEN** the Stryve app is rendered at desktop width
- **WHEN** the page loads
- **THEN** the header SHALL render 142px tall over the hero with a 50% black wash
- **AND** the wordmark SHALL sit horizontally centred between the two nav groups
- **AND** the links SHALL read Home, About us, Classes, Instructors, News, Contact in UPPERCASE white 13px bold
- **AND** a search control SHALL render at the right end of the nav

#### Scenario: Search overlay

- **GIVEN** the header is rendered
- **WHEN** the user activates the search control
- **THEN** a full-screen search overlay SHALL appear with a "Search" heading and a text field
- **AND** activating the close control SHALL dismiss it
- **AND** submitting a non-empty query SHALL dismiss it without navigating

#### Scenario: Social rail

- **GIVEN** the viewport is wider than 991px
- **WHEN** the page loads
- **THEN** a black 121px-wide rail SHALL render on the right screen edge with five 48px navy circular social links
- **AND** the rail SHALL NOT render below 992px

#### Scenario: Mobile navigation

- **GIVEN** the viewport is narrower than 768px
- **WHEN** the page loads
- **THEN** the header SHALL be 125px tall with the wordmark left-aligned
- **AND** a burger control SHALL open a stacked menu panel with `aria-expanded` reflecting the state

### Requirement: Hero slider (3 slides)

The hero SHALL be a 895px-tall fade slider of three slides
(`padding-top: 343px`, centred), each a background photo holding a 56px blue
circular play control, an `h1` at 130px/weight 500 white, and a blue square
"Read More" button. Slides read "Be Fit.Top Gym", "Be Fit.Top Trainer",
"Be Fit.Top Body". Pagination SHALL be three 6px white dots centred 30px from
the bottom, the active dot ringed by a 26px white circle; dot activation
SHALL change slides and a 5-second autoplay SHALL advance them, with the
entry animation (rise + fade) running per slide.

#### Scenario: First slide

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the active slide SHALL show the `h1` "Be Fit.Top Gym" at 130px weight 500 in white
- **AND** SHALL show the blue circular play control above it and a "Read More" button below
- **AND** the play control SHALL have an accessible name

#### Scenario: Slide navigation and dots

- **GIVEN** the hero slider is showing slide 1
- **WHEN** the user activates the third dot
- **THEN** slide 3 SHALL become active and read "Be Fit.Top Body"
- **AND** the third dot SHALL be the one marked `aria-current`
- **AND** the first dot SHALL no longer be marked `aria-current`

#### Scenario: Play control

- **GIVEN** a slide is rendered
- **WHEN** the user activates the play control
- **THEN** a dialog SHALL open showing a poster frame and a close control
- **AND** no third-party embed SHALL be loaded before the user asks for it

### Requirement: Features row (3 cards with overlapping icon circles)

A 3-column row SHALL render three cards, each a photo followed by an 88px
`#233EDE` circle containing a white icon that pulls up 34px over the photo,
then an 18px UPPERCASE bold `#353535` title and a 15px/30px `#7b7b7b`
paragraph. Titles: Amazing Setting, Best Trainers, Diet Plans. The row SHALL
be 95px from the previous band and SHALL stack below the tablet breakpoint
with 50px gaps.

#### Scenario: Three feature cards

- **GIVEN** the features row is rendered
- **WHEN** the user scrolls to it
- **THEN** three cards SHALL render side by side on desktop
- **AND** each SHALL show a photo, an overlapping 88px blue icon circle, a UPPERCASE title and a paragraph
- **AND** the titles SHALL be Amazing Setting, Best Trainers, Diet Plans

### Requirement: Services band (dark, 4 items + see-all)

A `#212122` band SHALL open with the section-heading recipe — a 12px
letter-spaced `#233EDE` label "Features" over a 48px UPPERCASE white `h2`
"Services" — then four items in a 4-column row, each an icon,
an 18px UPPERCASE white title and a 14.5px/30px `#7b7b7b` paragraph, and
close with a centred blue "see all the services" button on a 70px top pad.
Services: Pilates, Free Lifting, Yoga, Spinning.

#### Scenario: Service items

- **GIVEN** the services band is rendered
- **WHEN** the user scrolls to it
- **THEN** the band SHALL render on `#212122`
- **AND** the label SHALL read "Features" and the heading "Services"
- **AND** four items SHALL render with the titles Pilates, Free Lifting, Yoga, Spinning
- **AND** a "see all the services" button SHALL render centred beneath them

### Requirement: Trainers band (photo background, 3 cards, plus tabs)

A band on a patterned photo background (`padding: 125px 0 100px`) SHALL show
a white section label "The Best" over the white `h2` "Trainers" with a dark
`#212122` "See All" button pinned to the right of the heading block (stacked
under it on small screens), then three cards: a full-width portrait, an
always-visible `#233EDE` tab at the photo's top-left holding a white plus
glyph, and a 48px-padded caption with the name (18px UPPERCASE bold white)
over the role ("Aerobics Instructor", 15px at 60% opacity). Trainers: Rachel
Smith, Micheal Williams, James Brown.

#### Scenario: Trainer cards

- **GIVEN** the trainers band is rendered
- **WHEN** the user scrolls to it
- **THEN** three trainer cards SHALL render over the patterned background
- **AND** each SHALL show a blue plus tab at the top-left of its photo
- **AND** the names SHALL read Rachel Smith, Micheal Williams, James Brown with the role "Aerobics Instructor"
- **AND** a "See All" button SHALL render on the dark `#212122` fill

### Requirement: Closing row (classes list, membership card, sign-up card)

A 3-column row SHALL render three 503px-tall cards: a class list framed by a
2px `#E5E7F3` hairline with a "Next / Upcomming Classes" head and six
stopwatch rows (Gym Fitness 11:00-12:00, Pilates 12:00-13:00, Spinning
13:00-14:00, Yoga 14:00-15:00, Gym Fitness 15:00-16:00, Pilates
16:00-17:00); a photo membership card framed by the 22/24/21/20px `#233EDE`
border with "Next / Membership Cards" and a 72px blue "25%" over a small
"Discount"; and a photo sign-up card with a white "New / Personal Trainer"
head, a white paragraph and a full-width blue "Sign up Now" button. Below the
tablet breakpoint the cards SHALL stack with 30px gaps.

#### Scenario: Class list

- **GIVEN** the closing row is rendered
- **WHEN** the user reads the first card
- **THEN** it SHALL show the span "Next" over the title "Upcomming Classes"
- **AND** six rows SHALL render, each with an icon, a class name and a time range
- **AND** the card SHALL carry a 2px `#E5E7F3` border

#### Scenario: Membership and sign-up cards

- **GIVEN** the closing row is rendered
- **WHEN** the user reads the second and third cards
- **THEN** the second SHALL show "25%" in `#233EDE` inside a blue-framed photo card
- **AND** the third SHALL show a white paragraph over a photo and a full-width blue "Sign up Now" button

### Requirement: Footer (logo, menu, subscribe, socials, attribution)

The footer SHALL be a 641px photo band with 109px top padding and centred
content: the wordmark, a six-link menu, a 542px-wide subscribe form (73px
transparent input with a 2px white border and an italic UPPERCASE
placeholder, plus a 192×73px blue "Sign Up" button pinned to its right edge),
five social links 60px apart, a decorative icon strip, and a 13px
half-opacity copyright line whose outbound link goes to
https://www.componentdock.com/ (branded "Component Dock") — the source's
ColorLib credit is REPLACED. Submitting an invalid or empty address SHALL
show an inline error and no success message; a valid address SHALL show an
inline confirmation.

#### Scenario: Subscribe form validation

- **GIVEN** the footer subscribe form is rendered
- **WHEN** the user submits an empty or malformed address
- **THEN** an inline error SHALL render and no confirmation SHALL appear
- **AND** when the address is valid an inline confirmation SHALL render

#### Scenario: Component Dock attribution

- **GIVEN** the footer bottom line
- **WHEN** the user inspects it
- **THEN** the line SHALL link to https://www.componentdock.com/ branded "Component Dock"
- **AND** no colorlib.com string SHALL appear anywhere under `apps/stryve`

### Requirement: Composition & interactions

The page SHALL render in this exact order: header (+ search overlay, social
rail) → hero slider → features → services → trainers → closing row →
footer. All interactivity (search overlay, burger panel, hero slider and its
autoplay, play dialog, subscribe validation) SHALL be client-side React state
derived per `docs/conventions.md` (no `set-state-in-effect` violations;
autoplay and animation state derive during render). Shared primitives SHALL
come from `packages/ui` (`Container`, `Button`/`ButtonLink`,
`SectionHeading` if present) with `cn()` for overrides.

#### Scenario: Section order

- **GIVEN** the Stryve app is rendered
- **WHEN** the page is inspected top to bottom
- **THEN** the sections SHALL appear in the order: header, hero slider, features, services, trainers, closing row, footer

#### Scenario: Documented deltas

- **GIVEN** the recreation is compared with the live preview
- **WHEN** the reviewer checks the documented deltas
- **THEN** the page SHALL omit the black full-screen preloader and the duplicate slicknav "MENU" bar the source renders over the hero at desktop width
- **AND** all inner-page links SHALL become in-page anchors or dead `#` links instead of navigating away

## Verification checklist

- [ ] Structure + order matches the preview 1:1 (header → hero slider →
      features → services → trainers → closing row → footer), with the
      search overlay and social rail attached to the header.
- [ ] Tokens in `@theme`: `--color-brand: #233EDE`, `--color-ink: #212122`,
      `--color-body: #7b7b7b`, `--color-hairline: #E5E7F3`; header wash
      `rgba(0,0,0,0.5)`; rail circles `#081624`; search overlay `#073B4C`.
- [ ] Buttons reproduce the square `primary-btn` recipe (14px/700 UPPERCASE,
      `padding:20px 50px`, `letter-spacing:1.5px`, **zero radius**, 191×61px)
      in blue and in the dark `#212122` trainer variant.
- [ ] Roboto (300–900) loaded once via a Google Fonts `<link>`; hero `h1` is
      130px/weight 500 on desktop, 105/65/45px down the breakpoints.
- [ ] Header: 142px (125px mobile), 50%-black wash, centred 85px wordmark,
      split nav, working search overlay, social rail on the right edge above
      991px and hidden below.
- [ ] Hero: 3 slides in the correct order with the 56px blue play control,
      three 6px dots (active ringed) and a 5s autoplay; `aria-current` tracks
      the active dot.
- [ ] Features: 3 cards with 88px `#233EDE` circles pulling 34px up over the
      photos, 18px UPPERCASE titles, 15px/30px copy.
- [ ] Services: `#212122` band, "Features"/"Services" heading recipe, four
      items with 50px icon spacing, centred "see all the services" button.
- [ ] Trainers: patterned photo band, white label, dark "See All" button
      placed right of the heading, three cards with always-visible blue plus
      tabs and 60%-opacity roles.
- [ ] Closing row: three 503px cards — hairline class list with six
      stopwatch rows, blue-framed 25% membership card, photo sign-up card
      with a full-width blue button; stacked with 30px gaps below `md`.
- [ ] Footer: 641px photo band, six-link menu, 542px subscribe form with the
      overlaid 192px blue button + inline validation, five social links,
      icon strip, and the Component Dock link on the copyright line.
- [ ] No `colorlib.com` / `preview.colorlib.com` string anywhere under
      `apps/stryve` (provenance lives here + TEMPLATES.md + the PR).
- [ ] Placeholder imagery uses
      `https://picsum.photos/seed/stryve-<n>/<w>/<h>` (hero ×3, features ×3,
      services icons ×4 are icon components, trainers ×3, membership card,
      sign-up card, footer band); icons from `lucide-react`, social glyphs as
      inline SVG (lucide has no brand marks).
- [ ] Documented deltas honoured: no full-screen preloader, no duplicate
      slicknav "MENU" bar, no inner-page navigation, no YouTube embed before
      the play control is activated.
- [ ] `public/CNAME` = `stryve.free.componentdock.com`;
      `"homepage"` = `https://stryve.free.componentdock.com`.
- [ ] Tests written first (TDD), 100% lines/functions/branches/statements,
      per-app gate green (`scripts/verify-app.sh stryve`), lockfile registers
      the workspace (`npm install` at the root).
- [ ] On the implementer's branch: all three TEMPLATES.md rows (lines 515,
      1206 and 1883) re-opened `[ ]` before the build, then `[x]` with
      `https://stryve.free.componentdock.com` after merge +
      `npm run readme:status`; the `ironpulse` app and its spec stay
      untouched.
