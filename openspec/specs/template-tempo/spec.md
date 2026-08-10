# Template: Tempo (DJ / Music Event Template)

## Purpose

Tempo is a single-page DJ/music-event template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Djoz" entry in TEMPLATES.md (listed under **Bootstrap (216)** at
line 375; duplicate row at line 2264 under **Blog (60)**), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The reference is a dark, purple-accented one-pager for a touring DJ:
a deep-purple header (`#290849`) with a text logo, uppercase nav (Home,
About, Discography, Tours, Videos, Pages ▾, Contact) and social icons; a
full-bleed hero (dark DJ photo, purple tint) with a "NEW SINGLE" eyebrow, a
huge solid display-font headline "Feel the heart beats" in white, lorem
ipsum subtext and a circular play button; an "Upcoming Events" owl-carousel
of 3 event cards (360px photo, white date pill overlapping the bottom
center edge, centered title + venue below, soft purple-tinted card shadow);
an About split (DJ photo left, right column with a huge ghost display
"About me" behind the uppercase title "DJ Alexandra Rud", bio paragraph,
"CONTACT ME" button); a Services row (Wedding, Clubs and bar, DJ lessons,
Corporate events) beside a background image; a "Latest tracks" section with
a scrollable track list (circular play buttons that flip to the brand
purple when active, title + 0:00/00:00 time + 5px seek bar) and a "View
all tracks" link; a "Youtube feed" of 3 video cards (240px thumb, centered
white circular 60px play button with a purple icon, title below); a
full-width dark countdown section (huge "Tomorrowland 2020" solid-display
headline, "Music festival start in" spaced uppercase label, 4 timer items
with 90px Rajdhani numbers and spaced uppercase labels, "Buy tickets"
button); and a footer that visually continues the countdown background
(`margin-top: -547px`) with Phone/Email address rows, a newsletter input,
centered social icons flanked by decorative hairlines, the "DJoz" logo,
"Stay With me" heading and a copyright bar. The brand accent is a vivid
purple `#5c00ce`; display headings use the self-hosted "Rockville Solid
Regular" font, body uses "Now Regular", countdown numbers use Rajdhani 700.
Tempo recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Djoz" — DJ / Music Event HTML Template
  (source: https://colorlib.com/wp/template/djoz/). Listed in
  TEMPLATES.md under **Bootstrap (216)** (line 375; duplicate row line
  2264 under Blog (60)).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/djoz/`
  (HTTP 200). DOM fetched and analyzed (`/tmp/djoz-preview.html`,
  38 KB); stylesheet
  `https://preview.colorlib.com/theme/djoz/css/style.css` (45 KB,
  Sass-compiled) extracted for tokens; font sheets
  `css/rockville.css` + `css/nowfont.css` confirm self-hosted woff
  fonts; screenshot (`djoz-free-template.jpg`, 1200×946, TEMPLATES.md)
  reviewed visually in the browser. All references verified live.
- **Section order (1:1 from the preview DOM):**
  1. Header `header.header` (background `#290849`): `div.header__logo`
     (padding 20px 0 25px) → `a > img` logo (recreate as text
     wordmark); nav `ul.navbar-nav` — Home, About, Discography, Tours,
     Videos, Pages ▾ (`li.nav-item.dropdown` → `div.dropdown-menu`:
     About, Blog, Blog Details), Contact; social icon links on the
     right (white icons; hidden on small screens).
  2. Hero `section.hero.spad.set-bg` (data-setbg `img/hero-bg.png`,
     dark purple-tinted DJ photo; CSS: padding-top 400px, padding-
     bottom 295px; mobile 190/200px): `div.hero__text` centered —
     eyebrow "New single", `h1` "Feel the heart beats" (Rockville
     Solid, white, ~90px), lorem ipsum paragraph, circular white play
     button; chevron transition at the bottom edge into the white
     events section.
  3. Upcoming Events `section.event.spad` (white bg): `div.section-
title` with `h2` "Upcoming Events" (42px 700 uppercase `#111111`)
     - carousel nav arrows (absolute right 15px in
       `.event__slider.owl-carousel`); `div.event__slider.owl-carousel`
       → 3 × `div.event__item` (col-lg-4): `div.event__item__pic.set-bg`
       (height 360px, data-setbg `img/events/event-1.jpg` etc.) with
       `span.tag-date` (white pill, absolute left 0 bottom -21px, full-
       width center, 15px) "Dec 15, 2019"; `div.event__item__text`
       (text-align center, padding 45px 10px 25px): `h4` "David Guetta
       Miami Ultra" (26px 700 `#111111`, margin-bottom 10px), `p`
       "Funkhaus Berlin, Berlin, Germany" (`#888888`). Card shadow:
       `0px 3px 15px rgba(22, 41, 124, 0.1)`.
  4. About `section.about.spad`: `div.about__pic` (image left) +
     `div.about__text` (padding-top 110px): `div.section-title` with
     ghost `h1` "About me" (100px Rockville Solid `#f2f2f2`, absolute
     left 0 top -45px, width 100%, z-index -1) + `h2` "DJ Alexandra
     Rud" (42px 700 uppercase `#111111`); `p` (margin-bottom 35px):
     "DJ Rainflow knows how to move your mind, body and soul by
     delivering tracks that stand out from the norm…"; `a.site-btn`
     "CONTACT ME".
  5. Services `section.services`: `div.services__left.set-bg`
     (data-setbg `img/services/service-left.jpg`) + `div.row
.services__list` → 4 service items (Wedding, Clubs and bar, DJ
     lessons, Corporate events), each a title + lorem ipsum paragraph.
  6. Latest tracks `section.track.spad` (padding-top 120px,
     padding-bottom 40px): `div.section-title` with ghost `h1` "Music
     podcast" + `h2` "Latest tracks" (section-title margin-bottom
     105px); `div.track__all` (text-align right, margin-bottom 100px)
     → link "View all tracks"; `div.track__content.nice-scroll`
     (height 502px, overflow-y auto) → 6 × track row: `button.jp-play`
     (50×50, transparent, 2px solid `#e1e1e1`, border-radius 50%;
     playing state: background + border `#5c00ce`), title "David
     Guetta Miami Ultra", times "0:00" / "00:00", seek bar
     `div.jp-seek-bar > div` (height 5px, background `#e1e1e1`,
     width 245px).
  7. Youtube feed `section.youtube.spad`: `div.section-title` with
     ghost `h1` "Latest videos" + `h2` "Youtube feed"; 3 ×
     `div.youtube__item`: `div.youtube__item__pic.set-bg` (height
     240px, data-setbg `img/youtube/youtube-1.jpg` etc., flex
     centered) with `a.play-btn` (60×60, border-radius 50%, white bg,
     icon 16px `#5c00ce`); `div.youtube__item__text` with the video
     title ("David Guetta Miami Ultra Music Festival 2019", "Martin
     Garrix (Full live-set) | SLAM!Koningsdag", "Dimitri Vegas, Steve
     Aoki & Like Mike's "3 Are Legend"").
  8. Countdown `section.countdown.spad.set-bg` (data-setbg
     `img/countdown-bg.jpg`, dark festival photo): `div.countdown__text`
     (text-align center, margin-bottom 36px): `h1` "Tomorrowland 2020"
     (90px Rockville Solid, white, margin-bottom 25px), `h4` "Music
     festival start in" (26px Now Regular, white, uppercase,
     letter-spacing 4px); `div.countdown__timer#countdown-time`
     (text-align center, margin-bottom 30px) → 4 ×
     `div.countdown__item` (inline-block, margin-right 80px,
     margin-bottom 30px; last-child margin-right 0): `span` number
     (90px Rajdhani 700 white, display block, line-height 100px) +
     `p` label (white, letter-spacing 4px, uppercase): "20 days", "45
     hours", "18 minutes", "09 seconds"; `div.buy__tickets`
     (text-align center) → `a.site-btn` "Buy tickets".
  9. Footer `footer.footer.spad.set-bg` (data-setbg
     `img/footer-bg.png`, purple-toned; CSS: padding-top 300px,
     padding-bottom 60px, margin-top -547px, height 549px — the
     footer background continues the countdown section visually):
     `div.footer__address` (margin-bottom 50px): Phone
     "1-677-124-44227", Email "DJ.Music@gmail.com"; newsletter
     input (`.footer__newslatter`); `div.footer__social`
     (text-align center, margin-bottom 50px, with 1px-wide 130px-tall
     decorative `::before`/`::after` hairlines at left -46px / right
     -50px) → social links; logo "DJoz"; `h2`/heading "Stay With me";
     `div.footer__copyright__text` (text-align center): `p` "Copyright
     © <year> All rights reserved | This template is made with <i> by
     Colorlib" (`#999999`; link hover `#5c00ce`; heart icon).
- **Design tokens (extracted from style.css):**
  - Brand color: **`#5c00ce`** vivid purple (36 usages) — `.site-btn`
    background, `.jp-state-playing .jp-play` background + border,
    `.youtube__item__pic .play-btn` icon color, footer link hover.
    Related purples in the gradient family: `#7e00ad`, `#5400bc`,
    `#673ab7`.
  - Deep purple: **`#290849`** — header background
    (`.header.header--normal`), pagination hover.
  - Text: `#111111` (section-title h2, event h4, headings),
    `#ffffff` (hero/countdown/footer text), meta `#888888` (event
    location, body), `#666666`, `#444444`, `#999999` (footer
    copyright), `#f2f2f2` (ghost section h1).
  - Surfaces/borders: `#e1e1e1` (jp-play idle border, seek bar),
    `#f2f2f2`/`#f5f5f5` (ghost text, light section tints).
  - Red accent: `#f44336` (rare, e.g. sale/badge elements).
  - Card shadow: `0px 3px 15px rgba(22, 41, 124, 0.1)` (event cards).
  - Fonts: **Rockville Solid Regular** (self-hosted woff — display
    headings: hero h1, ghost section h1s, countdown h1; Google Font
    alternatives: Alfa Slab One / Righteous), **Now Regular** family
    (self-hosted woff — body, nav, labels; Google Font alternative:
    Jost / Outfit), **Rajdhani** 700 (countdown numbers — available on
    Google Fonts).
  - Headings: section-title `h2` 42px 700 uppercase `#111111`;
    ghost `h1` 100px Rockville Solid `#f2f2f2` absolute left 0 top
    -45px width 100% z-index -1; countdown `h1` 90px white; countdown
    `h4` 26px uppercase letter-spacing 4px white; event `h4` 26px 700.
  - Buttons: `.site-btn` — 15px, `#ffffff` on `#5c00ce`, weight 700,
    letter-spacing 2px, uppercase, border none, inline-block,
    padding 14px 30px, width 100%.
  - Countdown timer: number `span` 90px Rajdhani 700 white,
    line-height 100px; label `p` uppercase letter-spacing 4px white.
  - Track player: `.jp-play` 50×50 round, 2px `#e1e1e1` border;
    playing state bg + border `#5c00ce`; seek bar 5px `#e1e1e1`.
  - Youtube play: `a.play-btn` 60×60 round, white bg, 16px `#5c00ce`
    icon.
  - Section rhythm: `.spad` padding 100px 0; `.set-bg` background
    cover, top center; hero 400/295px; track section 120/40px.
- **Visual design (screenshot, 1200×946):** dark, moody one-pager in
  purple. Header: solid deep-purple bar, white "Djoz" logo left,
  white uppercase nav, white social icons right. Hero: full-bleed
  photo of a DJ at a mixing console bathed in purple/blue stage light,
  centered "NEW SINGLE" spaced label, huge white script/solid "Feel
  the heart beats", lorem ipsum, circular play button; bottom edge
  chevron-cuts into the white section below. White "Upcoming Events"
  section: bold black uppercase title with carousel arrows right, 3
  photo cards with soft shadow (the screenshot crops before About,
  Services, Tracks, Youtube, Countdown and Footer — those were
  captured from the live DOM/CSS instead). Purple `#5c00ce` accents
  on buttons and active player states; `#290849` header/footer
  purples; `#111111` section titles; ghost display headlines behind
  section titles; white-on-dark countdown with Rajdhani numbers.
- **Recreation decisions:** hero/event/about/services/youtube/count-
  down/footer photos → seeded picsum placeholders
  (`picsum.photos/seed/tempo-<n>/<w>/<h>`: hero 1920×1080, event
  cards 700×360, about pic 700×700, services left 700×800, youtube
  thumbs 700×240, countdown bg 1920×1080, footer bg 1920×549); icons
  → lucide-react (Play, Pause, Calendar, MapPin, Phone, Mail, Menu,
  X, ChevronDown, ArrowRight, Heart; Facebook/Twitter/Instagram as
  inline SVG brand icons — lucide has no brand icons); fonts →
  Google Fonts `<link>` (Rajdhani 700 for countdown numbers; Jost or
  Outfit in place of Now; Alfa Slab One or Righteous in place of
  Rockville Solid); logo → text wordmark "Tempo."; track player →
  simple interactive list with play/pause state toggling the `#5c00ce`
  active style (no real audio required); countdown timer → live count
  down to a fixed future date; no assets copied.

Tempo lives in `apps/tempo` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header and navigation

The system SHALL render a deep-purple header with a text logo, a
horizontal nav menu with a Pages dropdown, and social icon links.

#### Scenario: Header content

- **GIVEN** the Tempo page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the logo wordmark "Tempo" on the left
- **AND** it SHALL show the nav links Home, About, Discography, Tours,
  Videos, Pages and Contact
- **AND** it SHALL show social icon links (Facebook, Twitter,
  Instagram) on the right

#### Scenario: Pages dropdown

- **GIVEN** the header is rendered
- **WHEN** the Pages menu item is hovered/focused
- **THEN** a dropdown SHALL open with the links About, Blog and Blog
  Details

#### Scenario: Mobile menu

- **GIVEN** the mobile viewport is active
- **WHEN** the user clicks the burger toggle
- **THEN** a menu panel SHALL open with the nav links

### Requirement: Hero section

The system SHALL render a full-bleed hero with an eyebrow, a large
display headline, subtext and a circular play button.

#### Scenario: Hero content

- **GIVEN** the hero section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the eyebrow "New single"
- **AND** it SHALL show the headline "Feel the heart beats" in the
  solid display font, white
- **AND** it SHALL show a lorem ipsum paragraph
- **AND** it SHALL show a circular play button that toggles play/pause
  state

#### Scenario: Hero background

- **GIVEN** the hero section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL use a dark, purple-tinted cover background image
  with the content centered

### Requirement: Upcoming Events carousel

The system SHALL render an "Upcoming Events" section with three event
cards, each with a photo, a date pill and a title + venue.

#### Scenario: Event section title

- **GIVEN** the events section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the uppercase title "Upcoming Events" with
  carousel arrow controls on the right

#### Scenario: Event cards

- **GIVEN** the events section is displayed
- **WHEN** the cards are shown
- **THEN** the section SHALL show three event cards
- **AND** each card SHALL show a 360px photo with a white date pill
  ("Dec 15, 2019") overlapping the bottom center edge
- **AND** each card SHALL show an event title (e.g. "David Guetta
  Miami Ultra") and a venue line (e.g. "Funkhaus Berlin, Berlin,
  Germany")
- **AND** each card SHALL have the soft shadow
  `0 3px 15px rgba(22, 41, 124, 0.1)`

#### Scenario: Carousel interaction

- **GIVEN** the events section is displayed
- **WHEN** the user clicks the arrow controls
- **THEN** the carousel SHALL move between the event cards

### Requirement: About section

The system SHALL render a split About section with a photo, a ghost
display heading, an uppercase title, a bio paragraph and a CTA button.

#### Scenario: About content

- **GIVEN** the about section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the DJ photo on the left
- **AND** it SHALL show the ghost display text "About me" behind the
  uppercase title "DJ Alexandra Rud"
- **AND** it SHALL show a bio paragraph about the DJ
- **AND** it SHALL show the "CONTACT ME" button in the brand purple

### Requirement: Services list

The system SHALL render a Services section with a background image and
four service items.

#### Scenario: Services content

- **GIVEN** the services section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show a background image on the left
- **AND** it SHALL show the four services: Wedding, Clubs and bar, DJ
  lessons and Corporate events
- **AND** each service SHALL have a title and a lorem ipsum paragraph

### Requirement: Latest tracks player list

The system SHALL render a "Latest tracks" section with a scrollable
track list, circular play buttons and a "View all tracks" link.

#### Scenario: Track section content

- **GIVEN** the tracks section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the ghost display text "Music podcast" behind
  the title "Latest tracks"
- **AND** it SHALL show a "View all tracks" link on the right
- **AND** it SHALL show a scrollable list of six track rows

#### Scenario: Track row

- **GIVEN** a track row is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show a circular play button with a 2px `#e1e1e1`
  border, the track title and the time "0:00 / 00:00"
- **AND** it SHALL show a 5px seek bar in `#e1e1e1`

#### Scenario: Play/pause state

- **GIVEN** a track row is displayed
- **WHEN** the user clicks its play button
- **THEN** the button SHALL switch to the active state with the brand
  purple `#5c00ce` background and border
- **AND** clicking again SHALL return it to the idle state

### Requirement: Youtube feed

The system SHALL render a "Youtube feed" section with three video cards.

#### Scenario: Youtube section content

- **GIVEN** the youtube section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the ghost display text "Latest videos" behind
  the title "Youtube feed"
- **AND** it SHALL show three video cards

#### Scenario: Video card

- **GIVEN** a video card is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show a 240px thumbnail with a centered white
  circular play button (60px) with a purple `#5c00ce` icon
- **AND** it SHALL show the video title below the thumbnail

### Requirement: Countdown section

The system SHALL render a full-width countdown with a display
headline, a spaced label, four live timer units and a ticket button.

#### Scenario: Countdown content

- **GIVEN** the countdown section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the display headline "Tomorrowland 2020" in
  white
- **AND** it SHALL show the spaced uppercase label "Music festival
  start in"
- **AND** it SHALL show four timer units (days, hours, minutes,
  seconds) with 90px Rajdhani numbers and spaced uppercase labels
- **AND** it SHALL show the "Buy tickets" button in the brand purple

#### Scenario: Live countdown

- **GIVEN** the countdown section is displayed
- **WHEN** time passes
- **THEN** the timer SHALL count down toward a fixed future date and
  SHALL NOT show negative values after it passes

### Requirement: Footer

The system SHALL render a footer that continues the countdown
background, with contact address rows, a newsletter input, social
links, a logo, a heading and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show Phone "1-677-124-44227" and Email
  "DJ.Music@gmail.com" address rows
- **AND** it SHALL show a newsletter email input
- **AND** it SHALL show centered social icon links flanked by
  decorative vertical hairlines
- **AND** it SHALL show the logo wordmark and the heading "Stay With
  me"

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is shown
- **THEN** it SHALL show the line "Copyright © <year> All rights
  reserved | This template is made with <heart> by Colorlib" with the
  link turning brand purple on hover

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Tempo app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark,
  all sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Tempo — DJ / Music Event
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-tempo`.
- [ ] App renders all sections 1:1 in the order above (header → hero →
      events → about → services → tracks → youtube → countdown →
      footer).
- [ ] Design tokens match the reference: brand purple `#5c00ce`,
      deep purple `#290849`, ghost text `#f2f2f2`, titles `#111111`,
      meta `#888888`, borders/seek `#e1e1e1`, footer text `#999999`;
      section-title h2 42px 700 uppercase, ghost h1 100px display,
      countdown numbers 90px Rajdhani 700.
- [ ] Header: `#290849` bg, logo left, uppercase nav with Pages
      dropdown (About, Blog, Blog Details), social icons right; mobile
      burger opens the menu panel.
- [ ] Hero: full-bleed dark cover image, "New single" eyebrow, "Feel
      the heart beats" display headline, lorem subtext, circular play
      button with working play/pause toggle.
- [ ] Events: 3 cards (360px photo + white date pill overlapping the
      bottom edge + centered title/venue), soft shadow
      `0 3px 15px rgba(22,41,124,0.1)`, carousel arrows scroll the
      cards.
- [ ] About: photo left, ghost "About me" behind uppercase "DJ
      Alexandra Rud", bio paragraph, "CONTACT ME" `site-btn`.
- [ ] Services: background image + 4 items (Wedding, Clubs and bar,
      DJ lessons, Corporate events) with lorem ipsum.
- [ ] Tracks: ghost "Music podcast" + "Latest tracks" title, "View all
      tracks" link, scrollable list of 6 rows with circular jp-play
      buttons (idle `#e1e1e1` border → active `#5c00ce`), 0:00/00:00
      times and 5px seek bars.
- [ ] Youtube: ghost "Latest videos" + "Youtube feed" title, 3 video
      cards (240px thumb, white 60px circular play button with
      `#5c00ce` icon, title below).
- [ ] Countdown: "Tomorrowland 2020" display headline, "Music festival
      start in" label, 4 live timer units (days/hours/minutes/seconds)
      in 90px Rajdhani 700 with uppercase spaced labels, "Buy tickets"
      button; timer counts down and never shows negatives.
- [ ] Footer: continues the dark background, Phone/Email rows,
      newsletter input, centered social icons with decorative
      hairlines, logo + "Stay With me" heading, copyright bar with
      `#5c00ce` hover link.
- [ ] Fonts (Rajdhani + display/body Google Font alternatives) loaded
      via Google Fonts `<link>`; no font or image assets copied from
      the original.
- [ ] All images are seeded picsum placeholders
      (`picsum.photos/seed/tempo-<n>/<w>/<h>`); logo recreated as text
      wordmark.
- [ ] `vite.config.ts` registers `injectUiSource()` (see conventions).
- [ ] 100% Vitest coverage on `apps/tempo` (lines/functions/branches/
      statements).
- [ ] PR description includes: source template (ColorLib "Djoz"),
      preview URL (https://preview.colorlib.com/theme/djoz/ —
      reachable), design tokens used, what differs (name, placeholder
      images, text logo, Google-font substitutions).
