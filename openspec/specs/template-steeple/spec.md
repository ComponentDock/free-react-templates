# Template: Steeple (Church / Religious)

## Purpose

Steeple is a single-page church & religious community website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Re/born" design (see TEMPLATES.md — listed under Bootstrap, line
486, first unchecked item whose prep did not exist on main; the same slug also
appears as a duplicate at line 1302), built under the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, minimalist church landing page: a fixed white navbar
(light-grey inner bar, "Re/born" light-weight logo, uppercase nav links Home,
Sermons, Beliefs with a two-level dropdown — God, Humanity, Salvation, Churches
→ America/Europe/Asia/Africa — Events, About, Contact), a full-viewport hero
slider (two slides with atmospheric photos and centered white scripture-style
headlines: "For The Time Is At Hand" / "The Truth Will Set You Free" with bold
accent words), a light-grey "Latest Sermon" section (heading + a featured
sermon title "Thy Kingdom Come — by Pastor Edward Cane" + an audio player), an
"About Our Church" split section (photo with a yellow offset frame and a
circular play button, heading, sub-line, "Watch Video" link), a light-grey 2×2
feature grid (Our Mission, Testimonies, Listen To Our Sermons, Join Our Church
— each with icon, uppercase title, blurb, "Read More" link), a white "Recent
Events" carousel (repeating cards: Church Bible Study, Church Building
Accomplishments in January 2018, Learn How To Pray — each with photo, title,
date/byline, excerpt), a steel-blue quick-contact strip (Location, Service
Times, Get In Touch), and a slate-blue footer (About blurb + "Read More" pill
button, Quick Menu, Ministries, Social Icons, copyright bar). Steeple recreates
that structure section-for-section with matching layout, colors, typography,
and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Re/born" — free church/religious website template
  (source: https://colorlib.com/wp/template/reborn/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/reborn/`
  (HTTP 200, 27KB) + stylesheet `css/style.css` (24KB) plus `bootstrap.min.css`
  (primary button tokens), `owl.carousel.min.css`, `magnific-popup.css`,
  `aos.css`, `mediaelementplayer.min.css`, `icomoon`/`flaticon` icon fonts. The
  rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`reborn-free-template.jpg`, AVIF 1200×710) confirms the visual design: a
  clean modern church site — "Re/born" logo top-left in an elegant light serif
  style, uppercase wide-tracked sans-serif nav top-right (HOME, SERMONS,
  BELIEFS ▼, EVENTS, ABOUT, CONTACT), a full-width hero of a woman's silhouette
  with raised hands against a sunset over water (purple/pink/orange sky) with
  the centered white headline "The Truth Will Set You Free" ("The Truth" in
  bold) and left/right slider arrows, then a white "Latest Sermon" section with
  a dark sans heading underlined by a small gold/yellow bar and grey lorem
  text. Palette: white + light-grey sections, near-black headings, steel-blue
  #5c7893 primary, gold #eec60a accents, slate-blue #4d667d footer.
- **Section order (1:1):**
  1. `div.site-navbar-wrap.js-site-navbar.bg-white` (fixed, z-index 99, white,
     padding 20px 0, shrinks + shadow on scroll via `.scrolled`):
     - `div.site-navbar.bg-light` (border-bottom 1px rgba(0,0,0,0.1)):
       `h2.mb-0.site-logo` `a` "Re/born" (Work Sans weight 200, 26px, `#000`)
       on the left; `nav.site-navigation.text-right` on the right:
       `ul.site-menu` links — **Home** (active), **Sermons**, **Beliefs**
       (`.has-children` dropdown: God, Humanity, Salvation, Churches →
       nested dropdown: America, Europe, Asia, Africa), **Events**, **About**,
       **Contact**. Links: uppercase, letter-spacing .05em, 15px,
       rgba(0,0,0,0.6) → `#000` hover.
     - Mobile: `.site-menu-toggle.js-menu-toggle` hamburger (icon-menu) →
       `.site-mobile-menu` offcanvas panel (close icon + cloned nav).
  2. `div.slide-one-item.home-slider.owl-carousel` (hero slider, 2 slides):
     - `div.site-blocks-cover` ×2, `background-image: url(images/hero_b1_1.jpg)`
       / `url(images/hero_bg_2.jpg)`, cover center, `data-stellar-background-ratio
= 0.5`, min-height 600px / height 100vh, centered `h1` white:
       "For The Time **Is At Hand**" / "The **Truth** Will Set You Free"
       (3rem → 4rem on md, weight 300, `strong` weight 900).
     - `div.owl-nav` arrows (`.owl-prev`/`.owl-next`) at left/right edges:
       white, 50×50, centered vertically (slides use inline bg images, no
       overlay class in the DOM — screenshot shows readable white text over
       the photo; a subtle dark overlay is acceptable to keep contrast).
  3. `div.site-section.bg-light` (Latest Sermon):
     - `div.section-heading` (col-md-6 mx-auto, centered): `h2.mb-5` "Latest
       Sermon" (with `::before`/`::after` gold `#eec60a` 2px underline bars:
       100px at bottom -10px, 80px at bottom -20px) + paragraph "Lorem ipsum
       dolor sit amet consectetur adipisicing elit..."
     - `h3.h5` centered: `span.text-uppercase` "“Thy Kingdom Come”" — `span.small`
       `em` "by" Pastor Edward Cane.
     - `div.player`: `<audio id="player2" preload="none" controls>` (mediaelement
       player; src is a sample mp3 — recreate as a styled audio player UI with
       play/volume/progress, no real audio file; a functional `<audio>` element
       or a mock player both acceptable, note in PR).
  4. `div.site-section` (About Our Church, white):
     - Left `div.img-border` (col-md-6): yellow `#eec60a` offset frame behind
       the image (97% h/w, bottom-right, expands -30px on hover; image shifts
       -5px) + `a.popup-vimeo.image-play` circular white 100px play button
       (black play icon) over `img` `images/about_3.jpg`.
     - Right (col-md-5 ml-auto): `h2.h2.mb-3` "About Our Church", `p.h5.mb-3`
       "We are helping people with the Cretor!", paragraph (lorem), `a.popup-vimeo
.text-uppercase` "Watch Video" + `span.icon-arrow-right.small`.
  5. `div.site-section.site-block-feature.bg-light` (2×2 grid,
     `d-block d-md-flex` rows with `border-bottom`/`border-right` dividers), 4
     `div.item.text-center.p-4`: `span.flaticon-* display-3 text-primary` icon,
     `h2.h5.text-uppercase` title, paragraph, `a` "Read More" + arrow:
     - **Our Mission** (paper-plane icon)
     - **Testimonies** (chat icon)
     - **Listen To Our Sermons** (speaker icon)
     - **Join Our Church** (avatar icon)
  6. `div.site-section.block-15` (Recent Events, white):
     - `div.section-heading` centered: `h2` "Recent Events".
     - `div.nonloop-block-15.owl-carousel`: carousel of `div.media-with-text`
       cards (3 unique × 3 repeats in the DOM): `.img-border-sm` photo
       (`images/img_1.jpg` / `img_2.jpg` / `img_3.jpg`) with popup play
       overlay, `h2.heading` title — **Church Bible Study** / **Church Building
       Accomplishments in January 2018** / **Learn How To Pray** —,
       `span.post-date.mb-3` "January 20, 2018 • By Josh Holmes", paragraph.
       Carousel: owl-dots (7px circles `#cccccc`, active `#5c7893`) + side
       nav arrows (hidden <992px).
  7. `div.py-5.quick-contact-info` (bg `#5c7893`, text rgba(255,255,255,0.5)),
     3 columns, each `h2` white uppercase 14px letter-spacing .2em with icon:
     - **Location** (icon-room): "New York - 2398 / 10 Hadson Carl Street"
     - **Service Times** (icon-clock-o): "Wednesdays at 6:30PM - 7:30PM /
       Fridays at Sunset - 7:30PM / Saturdays at 8:00AM - Sunset"
     - **Get In Touch** (icon-comments): "Email: info@yoursite.com / Phone:
       (123) 3240-345-9348"
  8. `footer.site-footer` (bg `#4d667d`, padding 4em 0, text
     rgba(255,255,255,0.5)):
     - `h3.footer-heading.mb-4.text-white` ×4 (20px white):
       - **About** (col-md-4): paragraph + `a.btn.btn-primary.pill.text-white.px-4`
         "Read More" (pill radius 30px, solid `#5c7893`).
       - **Quick Menu** (col-md-6/col-md-6): About, Services, Approach,
         Sustainability, News, Careers.
       - **Ministries**: Children, Women, Bible Study, Church, Missionaries.
       - **Social Icons** (col-md-2): facebook, twitter, instagram, vimeo.
     - bottom row (pt-5 mt-5 text-center): copyright line → replace Colorlib
       credit with repo-standard footer credit (heart icon `text-warning` kept
       as a lucide Heart).
- **Design tokens extracted from `css/style.css` + `bootstrap.min.css`:**
  - Font: **Work Sans** (body, headings, nav, logo; Google Fonts weights 300,
    400, 700 loaded via cf-fonts in the head — load via `<link>` in
    index.html). Logo weight 200 @ 26px; hero `h1` weight 300 (3rem → 4rem on
    md, `strong` weight 900); body line-height 1.7. (An `Amatic SC` font-face
    is also loaded in the head but is not used on the home page.)
  - Primary steel blue-grey: **#5c7893** — `.btn-primary` bg/border, `.text-primary`
    icons, form-control focus border, `.quick-contact-info` bg, active
    owl-dot/pagination. Hover `#4d657b`, focus `#485e74`.
  - Accent gold: **#eec60a** — `.img-border`/`.img-border-sm` offset frames,
    `.section-heading h2` underline bars (2px; 100px wide at -10px + 80px at
    -20px).
  - Footer slate-blue: **#4d667d**.
  - Heading ink: **#000**; body text rgba(0,0,0,0.5); nav links
    rgba(0,0,0,0.6) → #000 hover; post-date rgba(0,0,0,0.4); footer links
    rgba(255,255,255,0.3) → #fff hover.
  - Neutrals: **#fff**, **#f8f9fa** (`bg-light` sections: Latest Sermon,
    feature grid), **#ccc** (owl dots).
  - Buttons `.btn`: flat (no radius) by default, `.pill` gives
    border-radius 30px; `.btn-primary` solid `#5c7893` white text, padding
    ~6px 24px (px-4), hover shadow `0 5px 20px -7px rgba(0,0,0,0.9)`;
    uppercase text links ("Watch Video", "Read More") with small right-arrow
    icon.
  - Hero `.site-blocks-cover`: min-height 600px, height 100vh, bg cover
    center; `h1` white 4rem weight 300 with weight-900 `strong` accent words;
    side arrows white 50×50.
  - `.img-border`: yellow frame (97% h/w) bottom-right behind image; hover →
    frame expands -30px (sm: -10px), image shifts -5px top/left.
  - `.image-play .icon-wrap`: 100px white circle centered with 40px black
    play icon.
  - Spacing: `.site-section` padding 3em 0 (7em ≥768px); footer padding 4em
    0; quick-contact-info `py-5`.
- **Recreation decisions:** navbar = fixed white wrap with light-grey inner
  bar, "Steeple" light-weight (200) text logo, uppercase nav (Home, Sermons,
  Beliefs with two-level dropdown, Events, About, Contact) + mobile hamburger
  with offcanvas menu; hero = full-viewport slider, 2 slides, picsum photos
  (atmospheric worship/sunset seeds), centered white headline with one bold
  accent phrase, side arrows; latest sermon = light-grey section with centered
  gold-underlined heading, featured sermon line ("Thy Kingdom Come — by Pastor
  Edward Cane") and a styled audio player (functional `<audio>` element without
  a remote file, or mock controls — note in PR); about = split section with
  photo in a gold offset frame + circular play button, heading, sub-line, body
  copy, "Watch Video" uppercase link; features = light-grey 2×2 grid (Our
  Mission, Testimonies, Listen To Our Sermons, Join Our Church — lucide icons:
  Send, MessagesSquare, Megaphone, Users) with uppercase titles and "Read
  More" links; events = white carousel of 3 repeating cards (photo, title,
  "January 20, 2018 • By Josh Holmes" byline, excerpt) with dots + side
  arrows; quick contact = steel-blue strip with 3 columns (Location / Service
  Times / Get In Touch — lucide MapPin, Clock, MessageCircle); footer = slate
  blue with About blurb + pill "Read More" button, Quick Menu links, Ministries
  links, social icons (Facebook, Twitter, Instagram, Video) and repo-standard
  bottom bar; images picsum-seeded (`picsum.photos/seed/steeple-N/w/h`);
  Google Fonts Work Sans via `<link>`; icons via lucide-react.

Steeple lives in `apps/steeple` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navbar

The system SHALL render a fixed white navbar with a light-grey inner bar, a
light-weight text logo, uppercase navigation links, a two-level Beliefs
dropdown, and a mobile hamburger menu.

#### Scenario: Navbar content

- **GIVEN** the Steeple page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Steeple" as a light-weight (200) text
  logo on the left
- **AND** it SHALL show the uppercase nav links Home, Sermons, Beliefs, Events,
  About, and Contact on the right
- **AND** the Beliefs link SHALL open a dropdown with God, Humanity, Salvation,
  and Churches
- **AND** the Churches item SHALL open a nested dropdown with America, Europe,
  Asia, and Africa

#### Scenario: Mobile menu

- **GIVEN** the navbar is displayed on a narrow viewport
- **WHEN** the user activates the hamburger control
- **THEN** an offcanvas menu SHALL open showing the nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero slider

The system SHALL render a full-viewport hero slider with two slides, each with
a background image and a centered white headline with a bold accent phrase,
plus side navigation arrows.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-viewport background image with a centered white
  headline (e.g. "For The Time Is At Hand" and "The Truth Will Set You Free")
  with one phrase in bold weight
- **AND** it SHALL show left and right arrow controls for changing slides

#### Scenario: Slide navigation

- **GIVEN** the hero has multiple slides
- **WHEN** the user activates the next or previous arrow
- **THEN** the visible headline SHALL change to the other slide

### Requirement: Latest Sermon section

The system SHALL render a light-grey section with a centered heading, a
featured sermon line, and an audio player.

#### Scenario: Sermon content

- **GIVEN** the page is rendered
- **WHEN** the latest sermon section is displayed
- **THEN** it SHALL show the centered heading "Latest Sermon" with a gold
  underline accent
- **AND** it SHALL show the featured sermon line "“Thy Kingdom Come” — by Pastor
  Edward Cane"
- **AND** it SHALL show an audio player control (play/volume/progress) for the
  sermon

### Requirement: About Our Church section

The system SHALL render a split about section with a photo in a gold offset
frame with a circular play button, a heading, a sub-line, body copy, and a
"Watch Video" link.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a photo framed by a gold offset border with a circular
  play button overlay
- **AND** it SHALL show the heading "About Our Church" and the sub-line "We are
  helping people with the Cretor!"
- **AND** it SHALL show a paragraph of body copy and an uppercase "Watch Video"
  link with a right-arrow icon

### Requirement: Feature grid

The system SHALL render a light-grey 2×2 feature grid with four items, each
with an icon, uppercase title, blurb, and "Read More" link.

#### Scenario: Feature items

- **GIVEN** the page is rendered
- **WHEN** the feature grid is displayed
- **THEN** it SHALL show four items titled Our Mission, Testimonies, Listen To
  Our Sermons, and Join Our Church
- **AND** each item SHALL show an icon, an uppercase title, a short paragraph,
  and a "Read More" link with an arrow

### Requirement: Recent Events carousel

The system SHALL render a white events section with a centered heading and a
carousel of event cards.

#### Scenario: Event cards

- **GIVEN** the page is rendered
- **WHEN** the events section is displayed
- **THEN** it SHALL show the centered heading "Recent Events"
- **AND** it SHALL show event cards, each with a photo, a title (e.g. "Church
  Bible Study", "Church Building Accomplishments in January 2018", "Learn How
  To Pray"), a date/byline line (e.g. "January 20, 2018 • By Josh Holmes"),
  and an excerpt
- **AND** the user SHALL be able to advance between cards with dots or arrows

### Requirement: Quick contact strip

The system SHALL render a steel-blue contact strip with three columns: Location,
Service Times, and Get In Touch.

#### Scenario: Contact columns

- **GIVEN** the page is rendered
- **WHEN** the quick contact strip is displayed
- **THEN** it SHALL show a Location column with an address (e.g. "New York -
  2398 / 10 Hadson Carl Street")
- **AND** it SHALL show a Service Times column with weekly times (e.g.
  "Wednesdays at 6:30PM - 7:30PM" etc.)
- **AND** it SHALL show a Get In Touch column with an email and phone number
- **AND** each column heading SHALL be white, uppercase, and accompanied by an
  icon

### Requirement: Footer

The system SHALL render a slate-blue footer with an About column and pill
button, two link columns, social icons, and a bottom bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an About column with a blurb and a pill "Read More"
  button
- **AND** it SHALL show a Quick Menu column with links (About, Services,
  Approach, Sustainability, News, Careers)
- **AND** it SHALL show a Ministries column with links (Children, Women, Bible
  Study, Church, Missionaries)
- **AND** it SHALL show social icons (facebook, twitter, instagram, vimeo)
- **AND** the bottom bar SHALL carry the repo-standard footer credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Steeple app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar, hero, latest sermon, about, feature
  grid, recent events, quick contact strip, and footer inside the main
  landmark in the original's order
- **AND** the document title SHALL be "Steeple — Church & Religious"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- steeple` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (navbar → hero slider → latest
      sermon → about → feature grid → recent events → quick contact strip →
      footer).
- [ ] Design tokens applied: primary steel blue #5c7893 (buttons, icons, quick
      contact bg, active dots), accent gold #eec60a (image frames, heading
      underlines), footer slate #4d667d, heading ink #000, body
      rgba(0,0,0,0.5), light bg #f8f9fa, Work Sans font, pill buttons (radius
      30px), uppercase nav links with letter-spacing.
- [ ] Navbar has the Beliefs two-level dropdown (God/Humanity/Salvation/
      Churches → America/Europe/Asia/Africa) and a mobile offcanvas menu.
- [ ] Hero is a full-viewport two-slide carousel with white headlines and bold
      accent phrases and side arrows.
- [ ] Latest sermon section includes the featured sermon line and an audio
      player control.
- [ ] About photo uses the gold offset frame with a circular play button.
- [ ] Recent events carousel has dots/arrows and at least 3 repeating event
      cards.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Re/born), preview URL, tokens,
      and renames.
