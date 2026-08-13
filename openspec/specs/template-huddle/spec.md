# Template: Huddle (Sports Club / American Football Website Template)

## Purpose

Huddle is a single-page American football club website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Knights" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Knights" — dark, high-contrast American football
  club one-pager ("How long can you last?"): dark navbar over a stadium-photo
  hero, a dark overlap strip with the next-matchup + countdown timer, a
  scoreboard "Game Report" block, a game-schedule carousel, 4 training
  service cards, a "Our Team Squad" player carousel, an about + animated
  counters block, a "Happy Viewers" testimonial carousel, "Recent News" blog
  cards, a subscribe band, and a black 2-widget footer
  (source: https://colorlib.com/wp/template/knights/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/knights/
  (HTTP 200, 40,743-byte HTML fetched; `css/style.css` 78,833 bytes parsed
  for tokens). Bootstrap 4 + jQuery + owl.carousel + AOS + jquery.countdown +
  jquery.animateNumber + stellar parallax + magnific-popup + icomoon/flaticon
  icon fonts + Google Maps stack; no Tailwind. Brand in the preview:
  "Knights" (logo in a dark #232931 box, white bold text).
- **Screenshot analyzed:** `knights-free-template.jpg` (TEMPLATES.md,
  1200×946, viewed in the browser) — top: dark navbar with "Knights" logo in
  a dark box, white nav links and a white "Buy Ticket" button; hero: American
  football players in blue/white uniforms in a three-point stance on grass
  under stadium lights (dark overlay), big white headline "How long can you
  last?", placeholder subtext, circular pulsing play icon + "Watch Games";
  below the hero a DARK strip (matchup "Knights Warrior" vs "Mighty Falcons",
  "FIFA Champions League Semi-Final") with a digital countdown
  ("-26 Days, 20 Hours, 10 Minutes, 28 Seconds") and a yellow "Buy Tickets"
  button; then a light section with "GAME REPORT" label, "Great Win In Final
  Game" headline and a player thumbnail. Matches the live preview 1:1.
- **Section order (1:1):** Navbar (`nav.navbar.navbar-expand-lg.navbar-dark
.bg-dark.ftco-navbar-light#ftco-navbar`): brand `<span>Knights</span>`
  (.navbar-brand — font-weight 400, font-size 20px, background #232931,
  padding 0 1em; span weight 900 white), links Home / About / Games / Blog /
  Contact (15px, weight 800, padding 1.5rem 20px), CTA `.nav-item.cta`
  "Buy Ticket" (white bg, black text, 1px #fff border, padding .8rem 18px,
  radius 4px; hover → bg #232931 + white text); mobile burger toggler
  (uppercase "MENU", letter-spacing .1em) → collapsible dark menu →
  Hero (`div.hero-wrap.js-fullheight`, bg photo `images/bg_1.jpg`, overlay
  `rgba(0,0,0,0.4)`): `.slider-text` row justify-content-end, col-md-7 —
  h1 "How long can you last?" (56px/700 white, 40px ≤767px), p lead
  "A small river named Duden flows by their place..." (20px,
  rgba(255,255,255,0.8)), p.d-flex: `.icon-video` circular play button
  (60px, rgba(255,255,255,0.8) bg, black glyph, `pulse` animation) +
  `.watch` "Watch Games" (uppercase, 18px, letter-spacing 2px, white) →
  Upcoming match strip (`div.game-wrap-1` inside `section.ftco-section
.ftco-no-pb.ftco-no-pt`): bg #232931, radius 5px, `margin-top: -60px`
  (overlaps the hero bottom), soft drop shadow; row of 4 columns —
  (1) `.team-logo` two OVERLAPPING 60px circular logos (img + img-2 offset
  left 35px, z-index -1) + `.team-name` stacked h3 spans "Knights Warrior" /
  "Mighty Falcons" (18px white); (2) `.league` "FIFA Champions League"
  (18px rgba(255,255,255,0.5)) + span "Semi-Final"
  (rgba(255,255,255,0.8)); (3) `#timer` countdown — 4 `.time` cells
  (width 25%, 20px/600 white, border-left 1px rgba(255,255,255,0.2), first
  child transparent; digit + `.time span` label 14px/300 white) populated by
  jquery.countdown in the source → React countdown to a fixed future date;
  (4) `.btn.btn-primary.py-3` "Buy Tickets" (yellow, black text) →
  Game Report (`section.ftco-section`): left col-lg-6 —
  `.heading-section` with `.subheading` "Game Report" (16px uppercase,
  letter-spacing 1px) + h2 "Great Win In Final Game" (40px/900, mb-4);
  `.scoreboard`: `.divider.text-center` "Tue. Feb 21, 2019; FIFA Champions
  League", then d-sm-flex with two `.sport-team` rows — 100px circular logo
  - centered `.score.win` "3" (50px/800, `border-bottom: 5px solid #ffb400`)
  - h4 "Knight Warrior", and `.score.lost` "1"
    (color rgba(0,0,0,0.2)) + h4 "Mighty Falcons" (logo order-sm-last); then
    centered `.btn.btn-primary` "More Details"; right col-lg-6 d-flex
    align-items-stretch: `images/victory.jpg` full-height image with centered
    play icon + caption "Watch Highlights" (16px white) →
    Game schedule (`section.ftco-section.ftco-game-schedule.ftco-no-pt`):
    owl-carousel of 6 `.item`s, each `.game-schedule .sport-team` white card
    (1px rgba(0,0,0,0.1) border, padding 20px, soft shadow) — 100px circular
    logo + `.desc` (pl-4): `.venue` "Home @ Arena" (rgba(0,0,0,0.7)), h4
    `.team-name` (22px/900), `.date` "April 17, 2018" (black). Source repeats
    the same row 6× — paraphrase to distinct opponents/venues/dates →
    Services (`section.ftco-section.services-section.bg-light`): no section
    heading; row of 4 `.media.block-6.services` cards — `.icon span` flaticon
    glyph (60px, color #ffb400, background linear-gradient(45deg, #6b75ff,
    #59b7ff)) + `.media-body` h3 (18px/800): "Senior Team" / "For Kids" /
    "Football Schools" / "Basic Tactics" + short paragraph each →
    Our Team Squad (`section.ftco-section.ftco-team.img`, bg
    `images/bg_3.jpg` + overlay #232931 opacity .5): `.heading-section
.heading-section-white` h2 "Our Team Squad" (40px/900 white, span #ffb400)
  - owl-carousel `div.carousel-team` of 7 `.team-wrap.text-center` cards —
    120px circular photo (staff-1..7.jpg), h3 name (22px/800 white), `.position`
    (rgba(255,255,255,0.8)); dots 10px, active #ffb400. Source repeats
    "David Scott" with positions Wide Receiver / Tight End / Defensive / ... —
    paraphrase to 7 distinct player names + positions →
    About + counters (`section.ftco-section.ftco-no-pt.ftco-no-pb
.ftco-counter.img`): row — left col-md-6 `.img` (about.jpg, height 400px);
    right col-md-6 pl-lg-5 py-5: h2 "About the Knights Team" (40px/900) +
    paragraph, then 4 `.counter-wrap.col-md-6.justify-content-center` — each
    `.icon` 70px circle (gradient #6b75ff→#59b7ff bg, white 48px glyph) +
    `strong.number` (28px/800 #000, count-up from 0 via jquery.animateNumber —
    data-number 100/10/20/80) + label span (14px, rgba(0,0,0,0.7), weight 700):
    "Game Played" / "Coaches" / "Trophies" / "Members" →
    Happy Viewers (`section.ftco-section.testimony-section`, bg
    `images/bg_2.jpg` + overlay): `.heading-section.heading-section-white` h2
    "Happy Viewers" + owl-carousel `div.carousel-testimony` of testimonial
    items — quote paragraph + author name + role "Viewer", 100px circular
    avatar (person_1..4.jpg). Source repeats "Arthur Browner" 6× — paraphrase
    to 3–4 distinct testimonials →
    Recent News (`section.ftco-section`): `.heading-section.text-center` h2
    "Recent News" + row of 4 `.blog-entry` cards (image_1..4.jpg with white
    date badge `.topp` — `span.day` "08" (50px/300 #000), `span.mos` "March",
    `span.yr` "2019" (13px) — plus `.heading` title 20px/600 black, hover
    #ffb400). Source repeats "Why Lead Generation is Key for Business Growth"
    4× — paraphrase to 4 distinct football-news titles →
    Subscribe (`section.ftco-subscribe.img`, bg `images/bg_1.jpg` + overlay):
    `.heading-section.heading-section-white` h2 "Subcribe to our upcoming
    match" (SOURCE TYPO — fix to "Subscribe to our upcoming match"; 40px/900
    white, span #ffb400) + `form.subscribe-form` — white email input (height
    70px, 20px, padding 0 20px, radius 5px 0 0 5px) + `.submit` button (bg
    #ffb400, black text, 16px, radius 0 5px 5px 0) →
    Footer (`footer.ftco-footer.ftco-footer-2.ftco-section`, bg #000, padding
    7em 0, 16px): 2 `.ftco-footer-widget` columns — (1) brand h2
    `.ftco-heading-2` "Knights" + paragraph (rgba(255,255,255,0.7)); (2)
    "Have a Questions?" — address "203 Fake St. Mountain View, San Francisco,
    California, USA", phone "+2 392 3929 210", email "info@yourdomain.com"
    (links rgba(255,255,255,0.7), hover #fff), then `.ftco-footer-social` row
    of 50px #ffb400 circles with black icons; `.copyright` bar — "Copyright ©
    All rights reserved | This template is made with ♥ by" (ColorLib credit
    replaced by Component Dock).
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Brand yellow: **#ffb400** (25 uses) — `.btn-primary` bg/border (1px),
    black text; hover → bg/border **#000000** + white text; `.score.win`
    underline (5px); `.heading-section-white h2 span`; `.owl-dot.active`;
    `.ftco-footer-social li a` bg; `.subscribe-form .submit` bg; blog/team
    link hovers.
  - Dark charcoal: **#232931** — `.navbar-brand` box bg, `.game-wrap-1` bg,
    `.ftco-team .overlay` (opacity .5), nav `.cta` hover bg.
  - Black: **#000000** — `.ftco-footer` bg, `.hero-wrap .overlay`
    (opacity .4), `strong.number`, `.blog-entry span.day`, nav CTA text.
  - Gradient accent: **linear-gradient(45deg, #6b75ff, #59b7ff)** —
    `.services .icon span` glyph background (glyph itself #ffb400) and
    `.ftco-counter .icon` 70px circles (glyph white).
  - Neutrals: white text + rgba(255,255,255,0.4/0.5/0.7/0.8/0.9) on dark
    sections; headings rgba(0,0,0,0.8); body rgba(0,0,0,0.7); card borders
    rgba(0,0,0,0.1); `#f8f9fa` (bg-light services).
  - Font: **"Nunito Sans", Arial, sans-serif** (embedded via cf-fonts
    `@font-face` in the preview head) → use a Google Fonts `<link>` in
    `index.html` (weights 300/400/600/700/800/900). Headings 700–900.
  - Buttons: `.btn-primary` — bg #ffb400, 1px border #ffb400, color #000;
    hover — bg #000, border #000, color #fff; `.py-3` vertical padding on
    the big CTAs. Nav CTA: white bg / black text, radius 4px, hover #232931.
    Subscribe submit: radius 0 5px 5px 0, black text, 16px.
  - Radii: 5px (`.game-wrap-1`, subscribe input ends), 4px (nav CTA),
    50% (all logos/avatars/social circles — 60px, 100px, 120px, 50px, 70px).
  - Hero: h1 56px/700 white (40px mobile), lead 20px rgba(255,255,255,0.8),
    `.watch` uppercase 18px ls 2px; overlay rgba(0,0,0,0.4); content
    right-aligned (justify-content-end, col-md-7).
  - Section headings: `.subheading` 16px uppercase ls 1px; h2 40px/900
    (28px mobile); white variant h2 #fff, span #ffb400, p rgba(255,255,255,0.9).
  - Countdown `#timer .time`: width 25%, 20px/600 white, border-left
    1px rgba(255,255,255,0.2) (first transparent), label span 14px/300.
  - Footer: bg #000, padding 7em 0, widget h2 22px/900 #fff, body
    rgba(255,255,255,0.7), social 50px #ffb400 circles, black glyphs.
- **Recreation decisions:** all photos (hero bg_1, victory, about, team
  staff-1..7, schedule team-1..6, testimonial person_1..4, blog image_1..4)
  → seeded picsum (`huddle-hero-1`, `huddle-victory-1`, `huddle-about-1`,
  `huddle-player-1..7`, `huddle-logo-1..6`, `huddle-avatar-1..4`,
  `huddle-blog-1..4` — screen for football/stadium subjects before pinning);
  flaticon glyphs (american-football, american-football-1, lockers,
  strategy) → `lucide-react` probes (e.g. `Trophy`, `Users`, `GraduationCap`
  / `School`, `Target`/`Crosshair` — probe every export with the typeof
  check); social icons → lucide-react probes (Facebook/Twitter/Instagram/
  Youtube, fall back to inline SVG); countdown → React countdown to a FIXED
  future date (e.g. `2027-01-01T00:00:00` constant) so tests are
  deterministic, formatting "NN Days / HH Hours / MM Minutes / SS Seconds";
  counters → static final values rendered as text (or a tiny count-up hook —
  no new deps); fonts Nunito Sans via Google Fonts `<link>`; tokens
  `#ffb400` / `#232931` / `#000000` / `#6b75ff` / `#59b7ff` / `#f8f9fa` and
  the white-rgba ramp in `@theme`.

Huddle lives in `apps/huddle` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header + navigation

The system SHALL render a dark navbar with the brand logo on the left, nav
links in the center/right, a white "Buy Ticket" call-to-action, and a mobile
burger toggle.

#### Scenario: Header content

- **GIVEN** the Huddle page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand "Huddle" in a dark charcoal
  (#232931) box with bold white text
- **AND** the header SHALL show the nav links Home, About, Games, Blog, and
  Contact (15px, weight 800, dark text on the dark bar → white)
- **AND** the header SHALL show a white "Buy Ticket" button (black text,
  4px radius) that turns dark charcoal (#232931) with white text on hover

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user activates the burger toggle
- **THEN** the nav links SHALL be reachable via a collapsible menu with a
  SOLID dark background (aria-expanded toggled, tappable)

### Requirement: Hero

The system SHALL render a full-width hero with an American-football photo
background, a dark overlay, a large white headline, a lead paragraph, and a
pulsing play button with a "Watch Games" label.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL fill the width with a photo background (seeded
  picsum) and a black overlay at 40% opacity
- **AND** it SHALL show the headline "How long can you last?" in white
  56px/700 (40px on mobile), right-aligned in a ~7/12 column
- **AND** it SHALL show a 20px lead paragraph (white at 80% opacity)
- **AND** it SHALL show a circular play button (60px, white at 80% opacity,
  pulsing) with the uppercase label "Watch Games" (18px, letter-spacing 2px)

### Requirement: Upcoming match strip

The system SHALL render a dark charcoal (#232931) card overlapping the hero
bottom (negative top margin) with the next matchup, league, a countdown
timer, and a "Buy Tickets" button.

#### Scenario: Matchup card

- **GIVEN** the upcoming match strip is rendered
- **WHEN** the page loads
- **THEN** the strip SHALL have a dark charcoal (#232931) background, 5px
  radius, and overlap the hero bottom (negative top margin)
- **AND** it SHALL show two overlapping 60px circular team logos with the
  stacked team names — paraphrased team names (the source uses "Knights
  Warrior" vs "Mighty Falcons"; the implementer SHALL invent a distinct
  home-team name, see tasks.md)
- **AND** it SHALL show the league "Champions League" (white at 50% opacity)
  and the stage "Semi-Final" (white at 80% opacity)

#### Scenario: Countdown

- **GIVEN** the match strip is rendered
- **WHEN** the page loads
- **THEN** the strip SHALL show a countdown with four cells (days, hours,
  minutes, seconds) each showing a digit (20px/600 white) and a lowercase
  label (14px/300 white), separated by 1px white-at-20% left borders
- **AND** the countdown SHALL target a fixed future date so the values are
  deterministic in tests

#### Scenario: Buy Tickets

- **GIVEN** the match strip is rendered
- **WHEN** the page loads
- **THEN** it SHALL show a yellow (#ffb400) "Buy Tickets" button with black
  text that inverts to black/white on hover

### Requirement: Game Report

The system SHALL render a "Game Report" section with a heading, match meta,
a two-team scoreboard, and a photo with a play link.

#### Scenario: Scoreboard

- **GIVEN** the Game Report section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the uppercase label "Game Report" with the
  heading "Great Win In Final Game" (40px/900)
- **AND** it SHALL show the match meta "Tue. Feb 21, 2019; Champions League"
- **AND** it SHALL show two team rows (100px circular logos): the winner's
  score "3" in 50px/800 with a 5px yellow underline, the loser's score "1"
  at 20% black opacity
- **AND** a yellow "More Details" button SHALL sit below the scoreboard

#### Scenario: Highlights image

- **GIVEN** the Game Report section is rendered
- **WHEN** the page loads
- **THEN** the right side SHALL show a full-height photo (seeded picsum)
  with a centered circular play icon and the caption "Watch Highlights"
  (16px white)

### Requirement: Game schedule

The system SHALL render a schedule of upcoming-game cards, each with a team
logo, venue, team name, and date.

#### Scenario: Schedule cards

- **GIVEN** the game schedule section is rendered
- **WHEN** the page loads
- **THEN** it SHALL render six white cards (1px border, 20px padding, soft
  shadow), each with a 100px circular logo, a venue line ("Home @ Arena"),
  a team name (22px/900), and a date
- **AND** the six cards SHALL show distinct opponents/venues/dates
  (the source repeats one row six times — never ship the duplicate filler)

### Requirement: Services

The system SHALL render a light-gray section with four training-program
cards, each with an icon, title, and short paragraph.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a light gray (#f8f9fa) background and no
  section heading (matching the source)
- **AND** it SHALL render four cards titled "Senior Team", "For Kids",
  "Football Schools", and "Basic Tactics", each with a 60px lucide icon
  (yellow glyph on a 45° #6b75ff→#59b7ff gradient) and an 18px/800 title
  with a short paragraph
- **AND** the layout SHALL stack to one column on mobile

### Requirement: Our Team Squad

The system SHALL render a photo-background section with a white heading and
a carousel of player cards.

#### Scenario: Player carousel

- **GIVEN** the team squad section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a photo background (seeded picsum) with a
  dark charcoal (#232931) overlay at 50% opacity
- **AND** it SHALL show the white heading "Our Team Squad" (40px/900) with
  the first word or an accent span in yellow (#ffb400)
- **AND** it SHALL show seven player cards, each with a 120px circular
  photo, a name (22px/800 white), and a position (white at 80% opacity)
  — with SEVEN DISTINCT names and positions (source repeats "David Scott";
  use e.g. Quarterback, Wide Receiver, Tight End, Linebacker, Defensive
  Back, Offensive Lineman, Kicker)
- **AND** carousel dots SHALL be 10px circles with the active dot in yellow

### Requirement: About + counters

The system SHALL render an about block with a photo, a heading, a paragraph,
and four animated-style counters.

#### Scenario: About block

- **GIVEN** the about/counters section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show a photo (seeded picsum, ~400px tall) on
  the left and the heading "About the Huddle Team" with a paragraph on the
  right

#### Scenario: Counters

- **GIVEN** the counters are rendered
- **WHEN** the page loads
- **THEN** the section SHALL render four counters — Game Played (100),
  Coaches (10), Trophies (20), Members (80) — each with a 70px circular
  gradient icon (white glyph), the number in 28px/800 black, and a 14px
  bold label at 70% black opacity

### Requirement: Happy Viewers testimonials

The system SHALL render a photo-background testimonial carousel with a white
heading.

#### Scenario: Testimonial carousel

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a photo background (seeded picsum) with a
  dark overlay and the white heading "Happy Viewers"
- **AND** it SHALL show at least three DISTINCT testimonials (quote,
  author name, role "Viewer", 100px circular avatar) — the source repeats
  one quote six times; never ship the duplicate filler
- **AND** carousel controls SHALL allow switching between testimonials

### Requirement: Recent News

The system SHALL render a blog section with four news cards, each with a
photo, a white date badge, and a title.

#### Scenario: Blog cards

- **GIVEN** the Recent News section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "Recent News"
- **AND** it SHALL render four cards, each with a photo (seeded picsum), a
  white date badge (day "08" in 50px/300, month "March", year "2019"), and
  a 20px/600 title that turns yellow on hover
- **AND** the four titles SHALL be DISTINCT football-news headlines
  (the source repeats one title four times — never ship the filler)

### Requirement: Subscribe

The system SHALL render a photo-background subscribe band with a white
heading and an email form with a yellow submit button.

#### Scenario: Subscribe form

- **GIVEN** the subscribe section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a photo background (seeded picsum) with a
  dark overlay and the white heading "Subscribe to our upcoming match"
  (the source has a typo "Subcribe" — ship the corrected spelling)
- **AND** it SHALL show an email input (white, 70px tall, 20px text,
  left-rounded 5px) with a yellow submit button (black text, right-rounded
  5px)
- **AND** submitting SHALL validate the email (zod) and show an error or a
  success message per the conventions

### Requirement: Footer

The system SHALL render a black footer with two widgets and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have a black background and show two columns:
  "Huddle" (brand + paragraph) and "Have a Questions?" (address, phone,
  email — paraphrased fictional values — and a row of 50px yellow circular
  social icons with black glyphs)
- **AND** the footer-bottom bar SHALL show a copyright line crediting
  Component Dock (https://www.componentdock.com/) — e.g. "Made with ♥ by
  Component Dock" — replacing the source's ColorLib credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Huddle app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections (Hero, Upcoming match, Game Report, Game schedule, Services,
  Team Squad, About + counters, Happy Viewers, Recent News, Subscribe) in
  the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Huddle — Sports Club Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/huddle` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- huddle` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#ffb400, #232931, #000000, #6b75ff, #59b7ff, #f8f9fa + white rgba ramp, Nunito Sans) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `huddle-<n>`, Google Fonts links, lucide icons only)
