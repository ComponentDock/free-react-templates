# Template: Rhythm (Music — DJ Artist)

## Purpose

Rhythm is a single-page DJ/music-artist website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Djoz" DJ template design (see TEMPLATES.md, line 375 under
**Bootstrap (216)** — duplicate row at line 2264 under **Music (19)**, same
template, ONE app only), built under a different name ("Rhythm" — a
music-beat word, matching the source's DJ/music-artist positioning) with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No
ColorLib references in app code — provenance lives in this spec, TEMPLATES.md,
and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Djoz" — free DJ / music artist HTML template
  (source: https://colorlib.com/wp/template/djoz/). Single page: a
  semi-transparent deep-purple absolute header (logo + nav: Home / About /
  Discography / Tours / Videos / Pages▾ / Contact + 4 social icons right), a
  full-height purple-tinted DJ-photo hero ("New single" eyebrow, giant
  "Feel the heart beats" display headline, blurb, circular play button,
  bottom chevron), an "Upcoming Events" carousel (6 cards, 3 per view: photo
  with a date badge straddling the bottom edge + title + venue), an "About
  me" split (photo left, "DJ Alexandra Rud" title + copy + CONTACT ME
  button), a full-bleed services band (photo left with play button, 2×2
  alternating purple/deep-purple service tiles: Wedding / Clubs and bar / DJ
  lessons / Corporate events), a "Latest tracks" section (4 audio-player
  rows + outline "View all tracks" button), a "Youtube feed" section (3
  video cards with circular play buttons), a dark countdown band
  ("Tomorrowland 2020" — "Music festival start in" + days/hours/minutes/
  seconds timer + Buy tickets button), and a footer (address / brand +
  social / newsletter columns over a background image + copyright bar).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/djoz/`. DOM fetched
  (`/tmp/djoz-prep/djoz.html`, 38,250 bytes) + stylesheets `css/style.css`
  (`/tmp/djoz-prep/style.css`, 44,962 bytes), `css/nowfont.css`,
  `css/rockville.css` + TEMPLATES.md screenshot
  (`djoz-free-template.jpg`, 1200×946, viewed in the browser).
- **Visual design (screenshot + live DOM + CSS):** modern, sleek, nocturnal
  nightlife aesthetic — deep purple/indigo hero photo of a DJ with
  headphones, purple lighting, white text; stark white content sections
  below with bold uppercase geometric sans section titles (each section
  title has a giant 100px `#f2f2f2` watermark h1 behind the h2); magenta/
  pink accents on event card photos; square (no-radius) purple `#5c00ce`
  uppercase letter-spaced buttons; circular translucent play buttons;
  countdown band and footer over dark purple background images. Source copy
  is placeholder/Lorem — paraphrase freely, keep the same content kinds (nav
  links, hero eyebrow + title + blurb, event title + venue + date, service
  titles + blurbs, track titles, video titles, footer phone/email/newsletter
  copy).

## Design tokens (from `css/style.css` of the live preview)

- **Brand purple:** `#5c00ce` — `.primary-btn` / `.site-btn` background,
  `.service__item` background, play-button icon color, `.primary-btn.border-btn`
  border. Variants: `#5400BC` (`.service__item.deep-bg`), `#290849` /
  `#7E00AD` (dark purple accents/hovers), header overlay `rgba(42, 1, 74, 0.5)`.
- **Dark text / surfaces:** `#111111` (headings `h1`–`h5`, `.border-btn`
  text), `#666666` / `#888888` (body/muted text), `#e1e1e1` (borders),
  `#f2f2f2` (giant section-title watermark h1 color), white `#ffffff`.
- **Fonts (custom webfonts in the source — DO NOT copy the font files; use
  Google Fonts substitutions):** body `"Now Regular"` (geometric sans →
  **Poppins** 400/500/600 via Google Fonts `<link>`), headings `"Rajdhani",
sans-serif` (uppercase, 700, 42px h2 — **Rajdhani IS on Google Fonts**,
  load 500/600/700), display `"Rockville Solid Regular"` (solid
  graffiti-style display font for the 110px hero h1, the 100px watermark h1s,
  and the 90px countdown h1 → substitute **Rajdhani 700 uppercase** for the
  watermarks/countdown and the hero headline; documented substitution).
- **Buttons:** SQUARE (no `border-radius`). `.primary-btn` — 15px,
  uppercase, `letter-spacing: 2px`, `padding: 14px 25px 12px`, bg `#5c00ce`,
  white text. `.primary-btn.border-btn` (outline variant, "View all tracks")
  — transparent bg, `2px solid #5c00ce` border, `#111111` text. `.site-btn`
  (hero/footer full-width variant) — 15px/700, uppercase, `letter-spacing:
2px`, `padding: 14px 30px`, bg `#5c00ce`, `width: 100%`.
- **Play button (`.play-btn`, circular video-popup trigger):** 90×90px
  circle, `border-radius: 50%`, `background: rgba(255, 255, 255, 0.3)`,
  26px `#5c00ce` play icon (lucide `Play`); hero variant sits under the
  blurb; services/youtube variants overlay their photos.
- **Header (`.header`):** `position: absolute`, top 0, full-width,
  `background: rgba(42, 1, 74, 0.5)`, z-index 9. `.header__menu` links white
  uppercase; `.header__right__social` — 4 × 16px white icons: Facebook,
  Twitter, Instagram, Dribbble (lucide-react has NO brand icons — use inline
  SVG simple-icons paths).
- **Hero (`.hero.spad.set-bg`):** bg image `img/hero-bg.png`
  (purple-tinted DJ photo; use a subject-screened picsum seed), `padding-top:
400px; padding-bottom: 295px`. `.hero__text span` "New single" eyebrow;
  `.hero__text h1` 110px display font white; `.hero__text p` white;
  `.linear__icon` bottom-center chevron (lucide `ChevronDown` /
  `ChevronsDown`).
- **Section titles (`.section-title`):** `h2` 42px/700 uppercase `#111111`
  with an absolutely-positioned giant `h1` watermark behind it — 100px,
  display font, `#f2f2f2`, `z-index: -1`. `.spad` = 100px top/bottom padding.
- **Event (`.event.spad`):** `.event__slider` carousel (source: owl-carousel
  → React state carousel), `.event__item`: `.event__item__pic` 360px tall
  bg image + `.tag-date` (absolute, left 0, bottom -21px, centered — a date
  badge straddling the photo's bottom edge) + `.event__item__text` (h4
  title, `p` with a location icon + venue).
- **About (`.about.spad`):** 6/6 split — `.about__pic` img left;
  `.about__text` right with section-title (h2 "DJ Alexandra Rud" + h1
  "About me" watermark), paragraph, `.primary-btn` "CONTACT ME".
- **Services (`.services`, container-fluid, NO spad padding):** 6/6 split —
  `.services__left` (bg image `service-left.jpg`, centered play-btn linking
  the source's YouTube video) + 2×2 `.services__list` grid of
  `.service__item` tiles (320px tall, `padding: 70px 40px 40px 70px`, bg
  `#5c00ce`, alternate `deep-bg` `#5400BC` in a zigzag order — Wedding(deep),
  Clubs and bar, DJ lessons(deep), Corporate events): icon img + h4 + blurb.
- **Track (`.track.spad`):** header row — section-title (h2 "Latest tracks"
  - h1 "Music podcast" watermark) left, `.track__all` right with
    `.primary-btn.border-btn` "View all tracks". `.track__content` (502px
    tall, scrollable) with 4 audio-player rows: h4 title, circular play
    button, progress bar, current time `0:00`, duration `00:00`, volume
    control (source plays real mp3s via jPlayer — NO audio assets allowed;
    render static rows, the play button can be decorative or open the source's
    YouTube video; document the deviation).
- **Youtube (`.youtube.spad`):** section-title (h2 "Youtube feed" + h1
  "Latest videos"); 3 cards (col-lg-4): `.youtube__item` — pic bg image
  (`youtube-1/2/3.jpg`) with centered circular play-btn linking the video's
  YouTube URL + h4 title.
- **Countdown (`.countdown.spad.set-bg`):** bg image `countdown-bg.jpg`;
  `.countdown__text`: h1 90px display font white "Tomorrowland 2020" + h4
  26px uppercase white "Music festival start in"; `.countdown__timer`: 4
  `.countdown__item`s (inline-block, `margin-right: 80px`): `span` 90px/700
  Rajdhani numbers (20 / 45 / 18 / 09) + `p` days / hours / minutes /
  seconds; below, `.buy__tickets` with a `.primary-btn` "Buy tickets".
  Source numbers are static — implement a LIVE countdown hook ticking to a
  pinned future festival date (test with vi.useFakeTimers + act()); the
  initial values should read 20 days 45 hours 18 minutes 09 seconds.
- **Footer (`.footer.spad.set-bg`):** bg image `footer-bg.png`; source uses
  `padding-top: 300px; margin-top: -547px` so the footer art overlaps the
  countdown section above (approximate the visual, e.g. a bg image section
  with negative top margin or a taller padded band). Three columns:
  `.footer__address` (phone icon + "Phone" + h6 number, envelope icon +
  "Email" + h6 `DJ.Music@gmail.com` — render phone as plain text, NO `tel:`
  literal links), `.footer__social` (brand h2 + `.footer__social__links`:
  4 social icons — Facebook/Twitter/Instagram/Dribbble inline SVGs),
  `.footer__newslatter` ("Stay With me" h4 + email input + send-icon button).
  Copyright bar (`.footer__copyright__text`, centered): "Copyright © <year>
  All rights reserved | This template is made with ♥ by **Component Dock**"
  where "Component Dock" links https://www.componentdock.com/ (replacing the
  source's Colorlib credit).
- **Mobile:** source uses slicknav (jQuery) for the mobile menu — implement
  a React hamburger toggle in the header showing the nav links (incl. the
  Pages dropdown items) in a deep-purple dropdown consistent with the header
  overlay. Stack all split/grid sections below `lg`; footer columns stack
  (source uses col-md-6 halves).
- **Placeholder images:** `https://picsum.photos/seed/rhythm-<n>/<w>/<h>`.
  Subject-critical photos (hero DJ background; about photo; services left
  photo; event card photos ×3; countdown bg; footer bg) MUST be screened per
  the seed-screening method (pixel metric + browser verify) — pick seeds
  that provably render DJ/club/concert/party scenes, pin the verified seeds
  in the PR + this spec. Icons from `lucide-react` (Play, ChevronDown,
  MapPin, Phone, Mail, Send, Volume2/VolumeX, Pause); brand icons
  (Facebook/Twitter/Instagram/Dribbble) as inline SVGs.

## Requirements

### Requirement: Header — logo, nav, social

The system SHALL render an absolutely-positioned header (semi-transparent
deep purple `rgba(42, 1, 74, 0.5)`, full-width, top of page) containing a
logo image on the left and, on the right, a nav with the links Home
(active) / About / Discography / Tours / Videos / Pages (dropdown: About /
Blog / Blog Details) / Contact, plus 4 social icons (Facebook, Twitter,
Instagram, Dribbble). On mobile a hamburger SHALL open a deep-purple menu
with the same links.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the top of the page is inspected
- **THEN** it shows the logo, the seven nav entries (Pages expands to three
  dropdown items), and the four social icons

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** a deep-purple menu with the nav links appears and can be closed

### Requirement: Hero

The system SHALL render a full-width hero (purple-tinted DJ photo
background, ~400px top / ~295px bottom padding) with centered content: a
"New single" eyebrow, a giant (110px, display-font, white) "Feel the heart
beats" headline, a white blurb paragraph, a circular play button (90px,
50% radius, translucent white bg, purple play icon) linking a music-video
URL, and a bottom-center downward chevron.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is inspected
- **THEN** it shows the eyebrow, headline, blurb, circular play button, and
  bottom chevron over the background photo

#### Scenario: Hero play button

- **GIVEN** the hero play button is rendered
- **WHEN** it is activated
- **THEN** it links to the music video (placeholder YouTube URL) and does not
  navigate away from the page

### Requirement: Upcoming events carousel

The system SHALL render an "Upcoming Events" section (42px uppercase
`#111111` h2 title) with a carousel of event cards (6 cards, 3 per view,
arrow controls + autoplay or manual next/prev). Each card SHALL show a
360px photo, a date badge ("Dec 15, 2019") straddling the photo's bottom
edge, an h4 title, and a location line (pin icon + venue).

#### Scenario: Event cards

- **GIVEN** the events section is rendered
- **WHEN** the carousel is inspected
- **THEN** it shows event cards with photo, date badge, title, and venue

#### Scenario: Carousel navigation

- **GIVEN** the event carousel is rendered
- **WHEN** the next/previous control is used
- **THEN** the carousel advances to the next/previous set of cards

### Requirement: About section

The system SHALL render a split about section (6/6 columns): the artist
photo on the left; on the right a section title ("DJ Alexandra Rud" h2 with
a giant "About me" watermark behind), a paragraph of artist copy, and a
square purple "CONTACT ME" primary button.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** it is inspected
- **THEN** it shows the photo, the title pair, the paragraph, and the
  CONTACT ME button

### Requirement: Services band

The system SHALL render a full-bleed services section: a left column with a
photo background and a centered circular play button (linking a YouTube
video), and a right column with a 2×2 grid of purple service tiles
(alternating `#5c00ce` / `#5400BC` deep-bg, zigzag order) titled Wedding,
Clubs and bar, DJ lessons, Corporate events — each with an icon, an h4
title, and a blurb.

#### Scenario: Services tiles

- **GIVEN** the services section is rendered
- **WHEN** it is inspected
- **THEN** it shows the photo column with play button and the four tiles in
  the zigzag order with alternating backgrounds

### Requirement: Latest tracks

The system SHALL render a "Latest tracks" section (h2 with a "Music
podcast" watermark) with a right-aligned outline "View all tracks" button
(transparent bg, 2px `#5c00ce` border, `#111111` text) and a scrollable
track list (4 rows). Each row SHALL show a track title, a circular play
button, a progress bar, a current-time label, a duration label, and a
volume control. No audio assets: the play button may open the source's
YouTube video or be decorative.

#### Scenario: Track list

- **GIVEN** the tracks section is rendered
- **WHEN** the track list is inspected
- **THEN** it shows four track rows, each with title, play button, progress
  bar, time labels, and volume control

#### Scenario: View all tracks button

- **GIVEN** the tracks section is rendered
- **WHEN** the header row is inspected
- **THEN** it shows the outline "View all tracks" button on the right

### Requirement: Youtube feed

The system SHALL render a "Youtube feed" section (h2 with a "Latest videos"
watermark) with three video cards (photo, centered circular play button
linking the video's YouTube URL, h4 title below).

#### Scenario: Video cards

- **GIVEN** the youtube section is rendered
- **WHEN** it is inspected
- **THEN** it shows three video cards, each with photo, play button, and title

### Requirement: Countdown band

The system SHALL render a countdown section over a dark background image
with a 90px white display-font "Tomorrowland 2020" title, a 26px uppercase
"Music festival start in" subtitle, a live countdown timer showing days /
hours / minutes / seconds (90px/700 Rajdhani numbers, initial 20 / 45 / 18
/ 09), and a square purple "Buy tickets" button.

#### Scenario: Countdown timer

- **GIVEN** the countdown section is rendered
- **WHEN** the timer is inspected
- **THEN** it shows the title pair and four time units (days, hours,
  minutes, seconds) with numeric values

#### Scenario: Timer ticks

- **GIVEN** the countdown timer is running
- **WHEN** time advances (fake timers)
- **THEN** the displayed values decrement accordingly

#### Scenario: Buy tickets

- **GIVEN** the countdown section is rendered
- **WHEN** the bottom of the section is inspected
- **THEN** it shows the "Buy tickets" button

### Requirement: Footer

The system SHALL render a footer over a dark background image with three
columns: an address column (phone + email with icons and labels), a brand
column (brand h2 + 4 social icon links — Facebook, Twitter, Instagram,
Dribbble), and a newsletter column ("Stay With me" heading, email input +
send-icon button). A centered copyright bar SHALL read "Copyright © <year>
All rights reserved | This template is made with ♥ by **Component Dock**"
where "Component Dock" links https://www.componentdock.com/ (no Colorlib
credit).

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the address column, the brand + social column, and the
  newsletter column

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is rendered
- **WHEN** an email is entered and submitted
- **THEN** the form shows a success state (input unmounts — assert
  `queryByLabelText`/`queryByPlaceholderText` absence) or equivalent
  confirmation

#### Scenario: Footer credit

- **GIVEN** the footer bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

## Verification checklist

- [ ] `openspec/specs/template-rhythm/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/rhythm`, package `@free-react-templates/rhythm`, no
      ColorLib references in app code (grep for colorlib/Djoz in apps/rhythm)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh rhythm`
- [ ] Section order matches the source: header → hero → events carousel →
      about → services band → tracks → youtube feed → countdown → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #5c00ce`,
      `--color-brand-deep: #5400BC`, `--color-brand-dark: #290849`,
      `--color-brand-alt: #7E00AD`, `--color-ink: #111111`,
      `--color-muted: #666666` (and `#888888`), `--color-watermark: #f2f2f2`,
      `--color-paper: #ffffff`, header overlay
      `rgba(42, 1, 74, 0.5)`; Google Fonts `<link>` in `index.html`:
      Rajdhani (500/600/700) + Poppins (400/500/600) as Now Regular
      substitute
- [ ] Header: absolute over hero, translucent deep purple, logo + nav
      (Home active / About / Discography / Tours / Videos / Pages▾ /
      Contact) + 4 social icons; mobile hamburger → deep-purple menu
- [ ] Hero: purple-tinted DJ photo bg, "New single" eyebrow, 110px display
      "Feel the heart beats", blurb, 90px circular translucent play button,
      bottom chevron
- [ ] Events: "Upcoming Events" title, 6-card carousel (3 per view), 360px
      photos, bottom-straddling date badges, title + venue lines
- [ ] About: photo left; "DJ Alexandra Rud" + "About me" watermark, copy,
      square purple CONTACT ME button
- [ ] Services: photo column with play button + 2×2 zigzag tiles (Wedding /
      Clubs and bar / DJ lessons / Corporate events, alternating `#5c00ce` /
      `#5400BC`)
- [ ] Tracks: "Latest tracks" + "Music podcast" watermark, outline "View all
      tracks" button, 4 static audio-player rows (no real audio)
- [ ] Youtube: "Youtube feed" + "Latest videos" watermark, 3 video cards
      with circular play buttons
- [ ] Countdown: dark bg image, 90px "Tomorrowland 2020", 26px "Music
      festival start in", live days/hours/minutes/seconds timer (fake-timer
      tests, `act()` wrapper), "Buy tickets" button
- [ ] Footer: bg image, address / brand+social (4 inline-SVG brand icons) /
      newsletter columns, copyright bar with Component Dock link; phone as
      plain text (NO `tel:` literals)
- [ ] Placeholder images via `https://picsum.photos/seed/rhythm-<n>/<w>/<h>`,
      subject-screened (DJ/club/concert scenes for hero, about, services
      left, 3 event cards, countdown bg, footer bg); icons from
      `lucide-react` (Play, ChevronDown, MapPin, Phone, Mail, Send,
      Volume2); brand icons as inline SVGs
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/djoz/`), design tokens, diffs (name,
      placeholder images, React carousel instead of owl-carousel, hamburger
      instead of slicknav, static track players instead of jPlayer, live
      countdown, Component Dock footer credit)
