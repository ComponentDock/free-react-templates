# Template: Confab (Conference / Design-Week Event Website Template)

## Purpose

Confab is a single-page conference / design-week event landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Eventotemplate" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Eventotemplate" — dark, high-energy conference
  landing for a design week ("SanDiego Design Week"): hero slider with video
  modal, event stats, speakers, about, multi-day schedule tabs, blog, sponsor
  logos, map, newsletter footer (source:
  https://colorlib.com/wp/template/eventotemplate/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/eventotemplate/
  (HTTP 200, ~45.9 KB HTML fetched; `assets/css/style.css` ~64 KB parsed for
  tokens). jQuery stack: owl-carousel (hero slider + speakers carousel),
  Bootstrap 4 tabs (schedule), slicknav (mobile menu), Google Maps JS embed.
  No Tailwind. Brand in the preview: "Evento".
- **Screenshot analyzed:** `eventotemplate-colorlib.jpg` (TEMPLATES.md,
  1200×946, viewed in the browser) — dark near-black theme with neon-yellow
  (#FFBD00) primary accent and pink (#FF60CE) secondary: fixed top bar with
  "Evento" logo left, HOME/SPEAKERS/SCHEDULE/LOCATION/BLOG/CONTACT links
  center, yellow "BUY YOUR SEAT" button right; hero = huge yellow-bold
  "SANDIEGO DESIGN WEEK" headline over a conference-stage photo with a pink
  circular play button (video modal), pink date "12 AUG 2021", address line,
  yellow "BUY TICKET" button; below the fold a stats band (03 Day Event,
  10+ Speakers, 23+ Sponsors). Matches the live preview 1:1.
- **Section order (1:1):** Header (`header-area header-transparent`, fixed,
  transparent over hero; on scroll `.header-sticky.sticky-bar` bg `#0a0a0a`):
  logo left, nav Home/Speakers/Schedule/Location/Blog/Contact center + yellow
  "BUY YOUR SEAT" CTA right (mobile: hamburger drawer) → Hero slider
  (`slider-area` bg `#F2F4F8`, `.slider-active` owl carousel of
  `.single-slider.slider-height.hero-overly.slider-bg1|2` slides, dark overlay
  `linear-gradient(to bottom, rgba(11,0,21,0.7), rgba(10,0,2,...))`): h1
  "SanDiego Design Week" (yellow "SanDiego" + white "Design Week"), pink date
  "12 Aug 2021", white address "3968 Carson Street, San Diego, CA 92101",
  yellow "BUY TICKET" button, pink circular play button → YouTube video modal
  (`https://www.youtube.com/watch?v=up68UAfH0d0`)) → Stats band
  (`count-down-area top-padding`, 3 `.single-counter` columns: pink 50px
  Barlow numbers 3 / 10 / 23 with dark-navy h5 labels + uppercase Mitr gray
  captions — "Day Event", "Speakers", "Sponsors") → Speakers (`team-area
section-padding`, section-tittle "Speakers" + owl carousel
  `.team-active` of `.single-team` cards: `.team-img` photo + `.team-caption`
  with yellow 24px name h3 (hover pink) + role + socials) → About (`about-area`,
  `.about-caption`: heading "About Design Week" / "A Citywide Celebration Of
  Design" + two paragraphs) → Schedule (`shedule-area section-padding`,
  section-tittle "Schedule"; Bootstrap nav-tabs 17th Aug / 18th Aug / 19th Aug
  → `.shedule-wrapper` dark `#0e0e0e` card with `.shedule-items` rows:
  time + title (white Barlow h4) + speaker name, pink icons) → Blog
  (`home-blog bottom-padding`, section-tittle + 3 `.single-blogs` cards:
  `.blog-img` photo, title "When Corners Collide: Decoding The Contrasting
  Aesthetics", author "- Justin Case", read-more) → Brands (`brand-area
top-padding` with decorative `shape.png` bg + `.wrapper-brand` dark
  `#0e0e0e` card, padding 45px 50px, 6 `.single-brand` logo images) → Map
  (`map-area`, Google Maps iframe/JS embed) → Footer (`footer-area
footer-padding`): blurb widget + "Subscribe Newsletter" heading +
  `.footer-form` (transparent 52px input, 1px rgba(255,255,255,0.5) border,
  Subscribe button), contact info (`info@evento.com`, phone), link columns;
  `footer-bottom-area` with `footer-border` top border rgba(255,255,255,0.2)
  - copyright #9B9EAC 14px (ColorLib credit replaced by Component Dock).
- **Design tokens extracted from the preview CSS:**
  - Brand yellow: **#FFBD00** — `.btn` / `.btn_1` backgrounds, hero h1
    "SanDiego" span, team name h3, nav "BUY YOUR SEAT" + hero "BUY TICKET"
    buttons, active schedule tab underline.
  - Pink/magenta: **#FF60CE** — hero date text, `.single-counter .counter`
    numbers (Barlow 50px/700 uppercase), play-button circle
    (`linear-gradient(131deg, #FF60CE 0%, #FF60CE 99%)`), schedule item icons,
    team name hover.
  - Orange hover sweep: **#ec583a** — `.btn::before` scaleX(1) overlay on
    hover (yellow button sweeps orange).
  - Deep purple-black: **#0B0016** — hero overlay base
    (`rgba(11,0,21,0.7)` top → `rgba(10,0,2,...)` bottom gradient).
  - Near-blacks: **#0a0a0a** (sticky header), **#0e0e0e** (`.shedule-wrapper`
    card, `.wrapper-brand` card).
  - Light gray: **#F2F4F8** (`.slider-area` base bg), **#f9f9ff** / **#f0e9ff**
    (light section tints, e.g. `.team-area` surround), **#9B9EAC** (muted
    body/meta text everywhere: section-tittle p, shedule p, footer copyright).
  - Dark navy text: **#131933** (`.pera-count h5` labels).
  - Secondary accents (sparse, verify per element): **#415094** (indigo),
    **#4cd3e3** (cyan), **#38a4ff** (blue), **#f44a40** (red).
  - Fonts: **"Barlow"** (body, counters, footer titles; weights 300–800) and
    **"Mitr"** (headings h1/h2, buttons, schedule tabs, captions; weights
    300–600). Google Fonts via `@import` in the source → use a `<link>` in
    `index.html`.
  - Buttons: `.btn` — bg #FFBD00, font Mitr, padding **22px 32px**, white
    text, hover orange sweep (scaleX transition, 0.5s); `.btn_1` — bg #FFBD00,
    1px solid #2A2A2A border, color #0A0A0A, padding 22px 41px.
  - Headings: `.section-tittle h2` — Mitr **50px/700 uppercase**, white,
    line-height 1.3, margin-bottom 12px (responsive 40px/30px);
    `.section-tittle p` — #9B9EAC 20px/400. `.hero-caption h1` — **100px/700
    uppercase**, white, line-height 1, margin-bottom 64px (responsive
    76px/70px/58px).
  - Stats `.single-counter .counter`: Barlow 50px/700, #FF60CE, uppercase,
    line-height 1, inline-block, margin-bottom 12px; `.pera-count h5` #131933
    24px/400; `.pera-count p` Mitr #9B9EAC 18px/500 uppercase.
  - Section padding: `.section-padding` **120px** top/bottom (100px on
    smaller screens); `.count-down-area` padding 60px top/bottom; `home-blog`
    bottom-padding.
  - Schedule `.shedule-wrapper`: padding 30px, bg #0e0e0e; item h4 white
    Barlow; meta p #9B9EAC 20px/300; inline meta li white 15px with pink
    #FF60CE 18px icons; `.nav-tabs` centered, border-bottom
    1px rgba(255,255,255,0.2), `.nav-link` Mitr white 18px/500, padding
    17px 5px, 4px transparent bottom border (active → yellow).
  - Footer form input: height 52px, transparent bg, 1px solid
    rgba(255,255,255,0.5) border, white text, border-radius 0.
  - Footer-bottom: border-top 1px solid rgba(255,255,255,0.2), padding-top
    23px; copyright #9B9EAC 14px/300.
- **Recreation decisions:** hero slide photos → seeded picsum (dark
  conference/stage subjects — screen seeds before pinning); play button opens
  an inline video modal (YouTube embed ok, or a styled modal with a
  representative pic — keep the pink circle + white play triangle); speaker
  photos → seeded picsum portraits (verified person ids 1027/64/823/996);
  schedule speaker names (source puns: Marcus Down, Rick Shaw, Frank Senbeans,
  Aaron Ottix, Ken Tucky, Mal Practice) → paraphrase to similar playful names;
  sponsor "logos" → 6 text/initial marks or generic lucide icons (never copy
  assets); Google Maps iframe → keep an embed or a static map-styled block;
  social icons → inline SVG (lucide-react removed brand icons); tokens #FFBD00
  / #FF60CE / #ec583a / #0B0016 / #0a0a0a / #0e0e0e / #F2F4F8 / #9B9EAC /
  #131933 in `@theme`; Barlow + Mitr via Google Fonts `<link>`.

Confab lives in `apps/confab` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header + navigation

The system SHALL render a fixed, initially-transparent header with the brand
logo on the left, centered nav links, and a yellow CTA button on the right;
when scrolled the header SHALL get a near-black (#0a0a0a) background.

#### Scenario: Header content

- **GIVEN** the Confab page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand "Confab" on the left
- **AND** the header SHALL show the nav links Home, Speakers, Schedule,
  Location, Blog, and Contact
- **AND** the header SHALL show a yellow (#FFBD00) "BUY YOUR SEAT" button on
  the right

#### Scenario: Sticky header

- **GIVEN** the page is scrolled down
- **WHEN** the header is in sticky state
- **THEN** the header SHALL have a near-black (#0a0a0a) background and remain
  fixed at the top

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user activates the hamburger toggle
- **THEN** the nav links SHALL be reachable via a collapsible drawer with a
  solid background (aria-expanded toggled, tappable)

### Requirement: Hero slider

The system SHALL render a full-width hero slider with at least two slides,
each with a photo background, a dark purple-black overlay, the event headline,
date, location, a yellow buy-ticket button, and a pink circular play button
that opens a video modal.

#### Scenario: Hero content

- **GIVEN** the hero slider is rendered
- **WHEN** the first slide is active
- **THEN** the slide SHALL show the headline "SanDiego Design Week" — the
  city word in yellow (#FFBD00) and the rest white — in a very large
  (~100px, responsive down to ~58px) bold uppercase heading
- **AND** the slide SHALL show the date "12 Aug 2021" in pink (#FF60CE)
- **AND** the slide SHALL show the location "3968 Carson Street, San Diego,
  CA 92101" in white
- **AND** the slide SHALL show a yellow (#FFBD00) "BUY TICKET" button
  (padding ~22px 32px, orange #ec583a hover sweep)

#### Scenario: Video play button

- **GIVEN** the hero slide is rendered
- **WHEN** the user activates the circular play button
- **THEN** a video modal SHALL open with a playable video embed
- **AND** the play button SHALL be a pink (#FF60CE) circle with a white play
  triangle icon

#### Scenario: Slide navigation

- **GIVEN** the hero slider has multiple slides
- **WHEN** the slider advances (autoplay or controls)
- **THEN** each slide SHALL show the same headline/date/location/CTA pattern
  over its own photo, and the slide content SHALL be reachable in tests via
  hidden:true queries where needed (owl-style rotation)

### Requirement: Event stats band

The system SHALL render a stats band with three columns of large pink numbers
and captions.

#### Scenario: Stats columns

- **GIVEN** the stats band is rendered
- **WHEN** the page loads
- **THEN** it SHALL show three centered columns: "3" with caption "Day
  Event", "10" with caption "Speakers", and "23" with caption "Sponsors"
- **AND** each number SHALL be rendered in Barlow 50px/700 pink (#FF60CE)
  uppercase
- **AND** each caption SHALL pair a dark-navy (#131933) 24px label with a
  gray (#9B9EAC) uppercase Mitr 18px line

### Requirement: Speakers section

The system SHALL render a "Speakers" section with a white uppercase heading
and a row of speaker cards (photo, yellow name, role, social icons).

#### Scenario: Speaker cards

- **GIVEN** the speakers section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "Speakers" (Mitr, white,
  uppercase, ~50px)
- **AND** it SHALL render speaker cards in a row (carousel or grid, stacking
  on mobile), each with a photo (seeded picsum portrait), a yellow (#FFBD00)
  24px name (pink on hover), a role line, and small social icons
- **AND** the speaker names SHALL be paraphrased pun-style names (the source
  uses Marcus Down, Rick Shaw, Frank Senbeans — never reuse those exact
  names)

### Requirement: About section

The system SHALL render an about section with the heading "About Design
Week", a bold tagline, and two paragraphs of description.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "About Design Week"
- **AND** it SHALL show the tagline "A Citywide Celebration Of Design"
- **AND** it SHALL show two supporting paragraphs describing the event

### Requirement: Schedule section

The system SHALL render a "Schedule" section with day tabs (17th Aug, 18th
Aug, 19th Aug) and a dark schedule card listing timed items with titles and
speaker names.

#### Scenario: Day tabs

- **GIVEN** the schedule section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "Schedule" (white uppercase)
- **AND** it SHALL show three centered tabs labeled "17th Aug", "18th Aug",
  and "19th Aug" (Mitr 18px/500, white, 4px bottom border that turns yellow
  on the active tab)

#### Scenario: Schedule items

- **GIVEN** a day tab is active
- **WHEN** the tab panel is displayed
- **THEN** the panel SHALL show a dark (#0e0e0e) card with timed rows, each
  row containing a time (e.g. "8:30 am"), a white item title, and a speaker
  name
- **AND** each row SHALL show at least four items (Registration And Breakfast,
  Opening Remarks And Keynote, Web Accessible Designs, Building Communities —
  paraphrased)
- **AND** switching tabs SHALL change the visible items (distinct content per
  day; the source repeats the same four items across days — use varied
  session titles)

### Requirement: Blog section

The system SHALL render a blog section with three article cards (photo,
uppercase title, author, read-more link).

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** it SHALL render three cards in a row (stacking on mobile), each
  with a photo (seeded picsum), a bold uppercase title, an author line
  (e.g. "- Justin Case" paraphrased), and a read-more affordance
- **AND** the titles SHALL be distinct design-themed article titles (the
  source repeats "When Corners Collide: Decoding The Contrasting Aesthetics"
  three times — never ship the repeated filler)

### Requirement: Sponsors band

The system SHALL render a sponsors band with a dark card containing six
sponsor marks.

#### Scenario: Sponsor logos

- **GIVEN** the sponsors band is rendered
- **WHEN** the page loads
- **THEN** it SHALL show a dark (#0e0e0e) card (padding ~45px 50px) containing
  six sponsor marks in a row (stacking on mobile)
- **AND** the marks SHALL be generic text/initial marks or lucide icons (never
  copied logo assets)

### Requirement: Map section

The system SHALL render a map section with an embedded map (Google Maps
embed or a static map-styled block).

#### Scenario: Map render

- **GIVEN** the map section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show a full-width map embed with an
  accessible label (e.g. "Map of the event location")

### Requirement: Footer

The system SHALL render a dark footer with a blurb widget, a newsletter form,
contact info, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL show a blurb paragraph
- **AND** it SHALL show the heading "Subscribe Newsletter" with a form of a
  transparent email input (52px tall, 1px rgba(255,255,255,0.5) border) and a
  yellow "Subscribe" button
- **AND** it SHALL show contact info — email and phone (rendered as plain
  text; never a literal tel: URI in source)
- **AND** the footer bottom bar SHALL show a copyright line crediting
  Component Dock (https://www.componentdock.com/), separated by a
  rgba(255,255,255,0.2) top border

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Confab app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections (Hero, Stats, Speakers, About, Schedule, Blog, Sponsors, Map) in
  the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Confab — Conference & Design Week
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/confab` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- confab` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#FFBD00, #FF60CE, #ec583a, #0B0016, #0a0a0a, #0e0e0e, #F2F4F8, #9B9EAC, #131933, Barlow/Mitr) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `confab-<n>`, Google Fonts links, lucide icons + inline SVG brand icons only)
