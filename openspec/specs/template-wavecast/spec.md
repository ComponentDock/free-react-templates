# Template: Wavecast (Podcast / Audio Landing)

## Purpose

Wavecast is a single-page podcast website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Podcast"
design (see TEMPLATES.md — listed TWICE, both rows are the same source slug:
line 476 in the Music section and line 2276 in the Music section; implement
ONE app and mark BOTH rows `[x]` at bookkeeping), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, minimalist, white podcast landing page: a white
header with a bold black logo "Podcast." (teal dot) and nav (Home, Dropdown →
Menu One/Two/Three, About, Contact, Login / Register); a hero split with a
large 900-weight headline "Tell Your Story to the World" on the left and a
flat vector illustration (two people at desks with laptops) on the right; an
episodes section with a "Popular Podcaster" sidebar (6 circular avatars with
name + podcast counts) beside five white episode cards (photo, episode title
"Episode 08: How To Create Web Page Using Bootstrap 4", byline
"By Mike Smith / 16 September 2017 / 1:30:20", and a black audio player bar)
plus a round pagination (1–5); a light-gray "Featured Guests" owl-carousel
with 6 circular guest portraits; a dark photo "Subscribe" cover band with a
transparent email input + teal "Send" button; and a dark #333333 footer with
three columns (About Us, Navigation, Subscribe) and a ColorLib copyright bar.
Wavecast recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Podcast" — podcast / audio landing website template
  (source: https://colorlib.com/wp/template/podcast/; listed twice in
  TEMPLATES.md — line 476 AND line 2276, both `- [ ]`, same slug → one app,
  mark both rows `[x]`).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/podcast/ (HTTP
  200, full rendered DOM, 30.2KB + `css/style.css` (19.3KB, Bootstrap-4
  custom) + bootstrap.min.css + owl.carousel + mediaelement@4.2.7 +
  magnific-popup + jquery-ui + aos, extracted 2026-08-12 during prep). The
  TEMPLATES.md screenshot (`podcast-free-template.jpg`, 1200×946, AVIF,
  converted to PNG and viewed in the browser) confirms the design: white
  minimal page, "Podcast." logo, headline "Tell Your Story to the World"
  over a flat illustration of two people at desks with laptops (one with
  blue hair, framed pictures on the wall), "Popular Podcaster" sidebar with
  circular avatars, episode cards each with a photo thumbnail, title,
  byline, and a black audio player bar.
- **Section order (1:1, LIVE DOM — comments stripped):**
  1. Mobile menu (`.site-mobile-menu`, hidden on desktop): hamburger
     toggler + same nav links.
  2. Header (`.site-navbar py-4`, white): left `.site-logo` h1 — link "Podcast"
     with a teal `.text-primary` dot ("Podcast."); right `.site-navigation`
     ul `.site-menu`: Home (active), Dropdown (`.has-children` → `.dropdown
.arrow-top`: Menu One / Menu Two / Menu Three), About, Contact,
     Login / Register. Nav links 15px #000, hover/active → teal #3ca59d;
     dropdown items 16px, hover bg teal + white text. Mobile: `.js-menu-toggle`
     hamburger (icon-menu h3) + off-canvas `.site-mobile-menu`.
  3. Hero (`div.container.pt-5.hero`): row `.align-items-center
text-center text-md-left` — left `.col-lg-4`: h1 `display-3` "Tell Your
     Story to the World" (40px !important, weight 900), p "Join with us!
     Login or Register. Lorem ipsum dolor sit amet, consectetur adipisicing
     elit. Delectus, ex!"; right `.col-lg-8`: `img images/1x/asset-1.png`
     (flat illustration — two people at desks with laptops; `img-fluid`).
  4. Episodes (`.site-section`): `.container > .row`:
     - Left `.col-lg-3`: `.featured-user` — h3 "Popular Podcaster" (14px,
       uppercase, margin-bottom 1.5rem); `ul.list-unstyled` of 6 podcaster
       links (`.d-flex.align-items-center`, margin-bottom 20px): circular
       avatar `img` 50px `rounded` + `.podcaster` (name `span.d-block`,
       count `span.small` 12px #ccc): Claire Stanford 32,420 podcasts /
       Dianne Winston 12,381 / Borris Larry 9,291 / Garry Smith 3,291 /
       Gerson Stack 1,092 / Jenna Stone 911 podcasts. Link color
       rgba(0,0,0,.5), hover #000.
     - Right `.col-lg-9`: 5 `.podcast-entry.bg-white.mb-5` cards
       (`d-block d-md-flex`, box-shadow 0 5px 40px -10px rgba(0,0,0,.1),
       radius 4px, overflow hidden): `.image` div (300px wide, cover,
       `images/img_1..5.jpg`; on mobile full-width 300px tall) + `.text`
       (padding 40px, width calc(100% - 300px)): h3 `.font-weight-light`
       link → "Episode 08: How To Create Web Page Using Bootstrap 4"
       (link color #3ca59d), byline
       `By Mike Smith <span.sep>/</span> 16 September 2017 <span.sep>/</span>
1:30:20` (sep #ccc, margins 5px), `.player` audio element
       (mediaelement black player bar, `<source>` mp3).
       Episodes 08/07/06/05/04 — all titled "...How To Create Web Page Using
       Bootstrap 4", bylines Mike Smith / 16 September 2017 / 1:30:20.
     - Below the row, inside the same `.site-section`: `.container[data-aos]
       > .row > .col-md-12.text-center`with`.site-block-27`pagination`ul`: items 1 (`.active` span), 2, 3, 4, 5 (links) + next-arrow link
(`.icon-keyboard_arrow_right`); each item 40×40px, line-height 40px,
       > border-radius 50%, border 1px #efefef; active bg #3ca59d white text.
  5. Featured Guests (`.site-section.bg-light.block-13`): `.container` —
     `.row.mb-5 > .col-md-12.text-center` h2 `.font-weight-bold.text-black`
     "Featured Guests"; `.nonloop-block-13.owl-carousel` of 6 slides
     (`.text-center.p-3.p-md-5.bg-white`): `div.mb-4` circular photo
     (`img w-50 mx-auto rounded-circle`, person_1..6.jpg) + h3
     `.font-weight-light.h5` name (Megan Smith, Brooke Cagle, Philip Martin,
     Steven Ericson, Nathan Dumlao, Brook Smith) + p (Lorem ipsum). Carousel
     arrows (owl-nav prev/next) centered below (bottom -90px, 30px black).
  6. Subscribe (`.site-blocks-cover.overlay.inner-page-cover`, inline bg
     `images/hero_bg_1.jpg`, cover; `:before` overlay rgba(0,0,0,.4)):
     centered `.col-md-6`: h2 "Subscribe" (white), p (white, 1.2rem,
     margin-bottom 5rem), form `.site-block-subscribe` `.input-group.mb-3`:
     `input.form-control.border-secondary.text-white.bg-transparent`
     (placeholder "Enter Email", italic rgba(255,255,255,.5); height 80px,
     22px, padding 0 30px; focus border #3ca59d) + `.input-group-append`
     button `.btn.btn-primary` "Send".
  7. Footer (`.site-footer`, bg #333333, padding 4em 0): `.container > .row`:
     - `.col-lg-4`: h3 "About Us" (20px, margin-bottom 30px, #fff) + p
       (Lorem ipsum, #737373).
     - `.col-lg-3.mx-auto`: h3 "Navigation" + `ul.list-unstyled` links:
       Podcasts, Services, About Us, Blog, Contact (#999999).
     - `.col-lg-4`: h3 "Subscribe" + p + form `.form-subscribe`:
       `input.form-control` (height 43px, mb-3, placeholder "Enter Email",
       focus border #3ca59d) + `input[type=submit].btn.btn-primary`
       "Subscribe".
     - `.row.pt-5.mt-5.text-center > .col-md-12`: copyright p —
       "Copyright © All rights reserved | This template is made with ♥ by
       Colorlib" (heart icon `icon-heart-o`).
- **Design tokens extracted from `css/style.css` + bootstrap defaults:**
  - Primary teal **#3ca59d** — `.text-primary` (logo dot), nav
    active/hover, dropdown hover bg (with white text), `.site-block-27`
    active item + link color, `.podcast-entry .text a`, `form-control`
    focus border, btn-primary bg (Bootstrap override).
  - Footer dark **#333333** (`.site-footer` bg); footer headings #fff;
    footer links **#999999**; footer body **#737373**.
  - Body text **#4d4d4d**, font-weight 200, font-size 1.1rem,
    line-height 1.7.
  - Light grays: **#f4f5f9** (dropdown hover bg), **#ccc** (podcaster
    counts, `.sep`, mobile overlay text), **#efefef** (pagination border),
    **#b3b3b3**, **#8a8a8a**-ish muted (bootstrap). Featured-guests section
    uses Bootstrap `bg-light` (#f8f9fa default; a stray `.bg-light{background:#ccc}`
    rule exists in style.css — use #f8f9fa/#f4f5f9 family, the section reads
    light-gray in the screenshot).
  - Dark **#25262a** (dropdown item text / mobile menu text).
  - Cover overlay **rgba(0,0,0,0.4)** over the subscribe bg image.
  - Fonts: **Bootstrap 4 default system font stack** — no Google Fonts
    loaded (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
"Helvetica Neue", Arial`); headings are the same stack with weights:
    hero h1 900, section h2 bold (`font-weight-bold`), episode titles
    `font-weight-light`, guest names `font-weight-light h5`. Recommend the
    same system-sans stack in `index.html` (or Inter as a close
    substitute) — do NOT add a display serif.
  - Type scale: hero h1 40px/900 (`.display-3` overridden); h2 32px bold
    (Bootstrap); sidebar h3 14px uppercase; episode title h3
    `font-weight-light` (~28px); byline small (#4d4d4d, 12.5–14px);
    guest name h3 h5 (20px light); footer h3 20px; site-blocks-cover h1
    30px→50px/900.
  - Buttons: `.btn` uppercase, font-size 12px, padding 12–20px vertical;
    `.btn-primary` font-weight 300, letter-spacing .2em, bg #3ca59d white
    text; hover lifts `top: -2px` + shadow 0 5px 20px -7px rgba(0,0,0,.9).
    Radius: Bootstrap default (0.25rem) — subscribe "Send" and footer
    "Subscribe" both `.btn.btn-primary`.
  - Cards: `.podcast-entry` radius 4px, shadow 0 5px 40px -10px
    rgba(0,0,0,.1), image column 300px, text padding 40px.
  - Rhythm: `.site-section` padding 2.5em 0 → 5em 0 (≥768px); navbar py-4;
    hero container pt-5; `.featured-user ul li` margin-bottom 20px;
    pagination items 40px circles; subscribe input height 80px / 22px text;
    footer padding 4em 0; guest slides p-3 p-md-5.
- **Visual design (screenshot `podcast-free-template.jpg`):** clean,
  minimalist, white podcast page — bold black "Podcast." logo with teal
  dot, dark-gray headline over a flat colorful illustration (two people at
  desks, laptops, blue hair), black audio player bars on white episode
  cards, circular avatars everywhere, teal accents on links/buttons, a
  light-gray carousel band, and a dark photo subscribe band + dark footer.
- **Recreation decisions:** all photos → seeded picsum placeholders
  (`picsum.photos/seed/wavecast-<n>/<w>/<h>`; episode thumbs 300px+,
  avatars square ~50–200px, guest portraits square ~300–600px, subscribe
  cover wide 1600×900); the hero illustration is a FLAT VECTOR ARTWORK —
  recreate it with a composed SVG/emoji-free graphic or a flat-style photo
  on white, NOT a random landscape; audio players → native `<audio
controls>` styled dark (no mediaelement dependency) or a minimal custom
  play/pause control; icomoon icons → lucide-react (Menu, ChevronDown,
  ArrowRight, Heart, Facebook/Twitter/LinkedIn if social icons needed);
  owl carousel (Featured Guests) → auto-advancing slider with prev/next
  arrows; forms (subscribe, footer subscribe) → front-end only with
  validation; "Login / Register" nav link → plain link (no auth page in
  scope); original copy paraphrased keeping the same content kinds
  (headline + CTA, podcaster name + count, episode title + byline +
  player, guest name + quote); no assets copied.
- **Skipped/reference notes:** the preview HTML contains a COMMENTED-OUT
  "Behind The Mic" team section (3 person cards with name, "Creative
  Director", blurb, Facebook/Twitter/LinkedIn icons) — NOT rendered on the
  live page; do NOT include it (or include it only as an optional
  documented extra, off by default). The episodes' section has NO heading
  in the live DOM — the sidebar h3 "Popular Podcaster" is the only label;
  keep the same. Screenshot shows episode duration "1:10:00"; live DOM
  says "1:30:20" — use the DOM value.

Wavecast lives in `apps/wavecast` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header with navigation

The system SHALL render a white sticky-less header with a bold "Wavecast."
logo (teal dot), nav links including a Dropdown submenu and a
"Login / Register" link, plus a mobile hamburger menu.

#### Scenario: Header content

- **GIVEN** the Wavecast page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand "Wavecast." as a logo with the
  dot in the brand teal #3ca59d
- **AND** it SHALL show nav links: Home (active), Dropdown (submenu: Menu
  One, Menu Two, Menu Three), About, Contact, and Login / Register
- **AND** the active/current link SHALL be teal #3ca59d

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user opens the menu
- **THEN** a hamburger menu SHALL expand to show the same nav links and the
  Login / Register link

### Requirement: Hero banner

The system SHALL render a hero split with a large 900-weight headline and
paragraph on the left and a flat illustration on the right.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "Tell Your Story to the World"
  (~40px, weight 900)
- **AND** it SHALL show the paragraph "Join with us! Login or Register."
  with placeholder copy
- **AND** it SHALL show a flat vector-style illustration on the right
  (two people at desks with laptops — composed graphic, not a photo)

### Requirement: Episodes section with podcaster sidebar

The system SHALL render an episodes section with a "Popular Podcaster"
sidebar of six podcaster entries and five episode cards with photos,
titles, bylines, and audio players, followed by round pagination.

#### Scenario: Sidebar content

- **GIVEN** the episodes section is displayed
- **WHEN** the user sees the left column
- **THEN** it SHALL show the heading "Popular Podcaster" (14px uppercase)
- **AND** it SHALL show six entries, each with a circular avatar, a name,
  and a podcast count (e.g. "Claire Stanford" — "32,420 podcasts")

#### Scenario: Episode cards

- **GIVEN** the episodes section is displayed
- **WHEN** the user sees the right column
- **THEN** it SHALL show five white episode cards, each with a photo
  thumbnail (300px column), a title link "Episode 08: How To Create Web
  Page Using Bootstrap 4" (light weight, teal link), the byline
  "By Mike Smith / 16 September 2017 / 1:30:20" (slash separators), and a
  playable audio player bar
- **AND** the cards SHALL have a 4px radius and a soft shadow
  (0 5px 40px -10px rgba(0,0,0,.1))

#### Scenario: Pagination

- **GIVEN** the episodes section is displayed
- **WHEN** the user scrolls below the episode cards
- **THEN** round pagination SHALL show items 1–5 and a next arrow
- **AND** the active item SHALL be a teal #3ca59d filled circle with white
  text; inactive items SHALL be 40px circles with a 1px #efefef border

### Requirement: Featured guests carousel

The system SHALL render a light-gray section with a centered heading and an
auto-advancing carousel of six guest slides (circular photo, name, quote)
with prev/next arrows.

#### Scenario: Guests content

- **GIVEN** the page is rendered
- **WHEN** the featured-guests section is displayed
- **THEN** it SHALL show the centered heading "Featured Guests"
- **AND** it SHALL show six white slides, each with a circular photo, a
  light-weight name (Megan Smith, Brooke Cagle, Philip Martin, Steven
  Ericson, Nathan Dumlao, Brook Smith), and a short quote paragraph
- **AND** the carousel SHALL advance automatically and provide prev/next
  arrows

### Requirement: Subscribe cover band

The system SHALL render a full-width dark photo band with a dark overlay, a
white heading and paragraph, and a transparent email input with a teal
"Send" button.

#### Scenario: Subscribe content

- **GIVEN** the page is rendered
- **WHEN** the subscribe band is displayed
- **THEN** it SHALL show the heading "Subscribe" in white over a
  background photo darkened with an rgba(0,0,0,.4) overlay
- **AND** it SHALL show a paragraph and an email input (transparent
  background, white text, italic placeholder "Enter Email", focus border
  teal) with a teal uppercase "Send" button

#### Scenario: Subscribe submit

- **GIVEN** the subscribe form is displayed
- **WHEN** the user enters an email and submits
- **THEN** the form SHALL prevent default navigation and show a success
  state (or a front-end validation message on an invalid email)

### Requirement: Footer

The system SHALL render a dark #333333 footer with three columns (About Us,
Navigation, Subscribe) and a ColorLib copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "About Us" column with a white heading and
  gray body text
- **AND** it SHALL show the "Navigation" column with links: Podcasts,
  Services, About Us, Blog, Contact
- **AND** it SHALL show the "Subscribe" column with an email input and a
  teal uppercase "Subscribe" button
- **AND** the bottom bar SHALL show the copyright line
  "Copyright © All rights reserved | This template is made with ♥ by
  Colorlib"

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Wavecast app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero, episodes (sidebar +
  cards + pagination), featured guests, subscribe band, and footer in
  order
- **AND** the document title SHALL be "Wavecast — Podcast Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/wavecast`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/wavecast`)
- [ ] Section order matches the reference 1:1 (header → hero → episodes/sidebar/cards/pagination → featured guests → subscribe band → footer)
- [ ] Design tokens from the reference used in `@theme` (primary teal #3ca59d, footer dark #333333, body #4d4d4d, footer links #999999 / text #737373, light #f8f9fa/#f4f5f9, dark #25262a, border #efefef, muted #ccc; system sans font stack — no Google Fonts)
- [ ] Header: "Wavecast." logo (teal dot), nav Home/Dropdown(Menu One/Two/Three)/About/Contact/Login·Register, active link teal, mobile hamburger
- [ ] Hero: 40px/900 "Tell Your Story to the World", "Join with us! Login or Register." paragraph, flat vector illustration right (no random landscape)
- [ ] Sidebar: "Popular Podcaster" (14px uppercase), 6 entries (circular avatar, name, count like "32,420 podcasts")
- [ ] Episodes: 5 white cards (photo 300px column, light title link, byline with `/` separators, dark audio player bar), 4px radius + soft shadow
- [ ] Pagination: 40px circles 1–5 + next arrow, active = teal filled white text, border #efefef
- [ ] Featured guests: light-gray band, centered "Featured Guests", 6 white slides (circular photo, light name, quote), auto-advance + prev/next arrows
- [ ] Subscribe band: photo bg + rgba(0,0,0,.4) overlay, white "Subscribe" heading, transparent email input (italic placeholder, teal focus border) + teal "Send" button
- [ ] Footer: bg #333333, About Us / Navigation / Subscribe columns, teal "Subscribe" button, copyright bar crediting Colorlib
- [ ] NO "Behind The Mic" team section (commented out in the reference — do not render)
- [ ] No copied ColorLib assets; placeholders via picsum seeded `wavecast-<n>`; icons via lucide-react
