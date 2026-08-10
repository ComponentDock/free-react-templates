# Tempo (ColorLib "Djoz") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-tempo` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Djoz" — DJ / Music Event HTML Template
  (source: https://colorlib.com/wp/template/djoz/). Listed in
  TEMPLATES.md under **Bootstrap (216)** (line 375; duplicate row at
  line 2264 under **Blog (60)** — same template, one app only).
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/djoz/`. DOM fetched
  (`/tmp/djoz-preview.html`, 38 KB) + stylesheet
  (`/tmp/djoz-style.css`, 45 KB, Sass-compiled) + font sheets
  (`css/rockville.css`, `css/nowfont.css` — self-hosted woffs) +
  screenshot (`djoz-free-template.jpg`, 1200×946, viewed in browser).
  All references verified live.
- **Visual design:** dark, moody one-pager in purple for a touring DJ.
  Header: solid deep-purple `#290849` bar, white "Djoz" logo left,
  white uppercase nav (HOME, ABOUT, DISCOGRAPHY, TOURS, VIDEOS,
  PAGES ▾, CONTACT), white social icons right. Hero: full-bleed photo
  of a DJ at a mixing console in purple/blue stage light, "NEW SINGLE"
  spaced eyebrow, huge white solid-display "Feel the heart beats",
  lorem ipsum, circular play button; the hero's bottom edge
  chevron-cuts into the white "UPCOMING EVENTS" section (bold black
  uppercase title + carousel arrows right, 3 photo cards with soft
  purple-tinted shadow). Screenshot crops before About/Services/
  Tracks/Youtube/Countdown/Footer — those were captured from the live
  DOM/CSS instead. Brand purple `#5c00ce` on buttons and active player
  states; ghost solid-display headlines behind section titles; dark
  countdown with 90px Rajdhani numbers; footer continues the countdown
  background.
- **Structure (1:1 from the preview DOM):**
  1. Header `header.header` (bg `#290849`): `div.header__logo`
     (padding 20px 0 25px) → `a > img` (recreate as text wordmark);
     nav: Home, About, Discography, Tours, Videos, Pages ▾ (dropdown:
     About, Blog, Blog Details), Contact; social icons right (white).
  2. Hero `section.hero.spad.set-bg` (hero-bg.png; padding 400px 0
     295px, mobile 190/200px): centered `div.hero__text` — "New
     single" eyebrow, h1 "Feel the heart beats" (Rockville Solid,
     white, ~90px), lorem ipsum, circular white play button; chevron
     transition at the bottom.
  3. Upcoming Events `section.event.spad` (white): section-title h2
     "Upcoming Events" (42px 700 uppercase `#111111`) + carousel
     arrows (absolute right 15px); `div.event__slider.owl-carousel`
     → 3 × `div.event__item` (col-lg-4): `div.event__item__pic.set-bg`
     (360px) + `span.tag-date` (white pill, absolute bottom -21px,
     full-width center, 15px) "Dec 15, 2019"; `div.event__item__text`
     (center, padding 45px 10px 25px): h4 "David Guetta Miami Ultra"
     (26px 700 `#111111`), p venue "Funkhaus Berlin, Berlin, Germany"
     (`#888888`). Card shadow 0 3px 15px rgba(22,41,124,0.1).
  4. About `section.about.spad`: `div.about__pic` (photo left) +
     `div.about__text` (padding-top 110px): section-title with ghost
     h1 "About me" (100px Rockville Solid `#f2f2f2`, absolute top
     -45px, z-index -1) + h2 "DJ Alexandra Rud"; bio p (margin-bottom
     35px); `a.site-btn` "CONTACT ME".
  5. Services `section.services`: `div.services__left.set-bg`
     (service-left.jpg) + `div.row.services__list` → 4 items (Wedding,
     Clubs and bar, DJ lessons, Corporate events) each title + lorem
     ipsum.
  6. Latest tracks `section.track.spad` (120/40px): section-title
     ghost h1 "Music podcast" + h2 "Latest tracks" (mb 105px);
     `div.track__all` (right, mb 100px) → "View all tracks";
     `div.track__content.nice-scroll` (502px, overflow-y auto) → 6
     rows: `button.jp-play` (50×50 round, 2px `#e1e1e1` border; active
     bg+border `#5c00ce`), title, 0:00 / 00:00, seek bar 5px
     `#e1e1e1` 245px.
  7. Youtube feed `section.youtube.spad`: ghost h1 "Latest videos" +
     h2 "Youtube feed"; 3 × `div.youtube__item`: `div.youtube__item
__pic.set-bg` (240px, flex centered) + `a.play-btn` (60×60 round,
     white bg, 16px `#5c00ce` icon); text with video title.
  8. Countdown `section.countdown.spad.set-bg` (countdown-bg.jpg):
     `div.countdown__text` (center, mb 36px): h1 "Tomorrowland 2020"
     (90px Rockville Solid white), h4 "Music festival start in" (26px
     uppercase ls 4px white); `div.countdown__timer#countdown-time`
     → 4 × `div.countdown__item` (inline-block, mr 80px): span number
     (90px Rajdhani 700 white, lh 100px) + p label (white, ls 4px,
     uppercase): 20 days / 45 hours / 18 minutes / 09 seconds;
     `div.buy__tickets` → `a.site-btn` "Buy tickets".
  9. Footer `footer.footer.spad.set-bg` (footer-bg.png; padding-top
     300px, padding-bottom 60px, margin-top -547px, height 549px —
     continues the countdown bg): `div.footer__address` (mb 50px):
     Phone "1-677-124-44227", Email "DJ.Music@gmail.com"; newsletter
     input; `div.footer__social` (center, mb 50px; `::before`/`::after`
     1px × 130px hairlines at left -46px / right -50px); logo "DJoz";
     "Stay With me" heading; `div.footer__copyright__text` (center):
     "Copyright © <year> All rights reserved | This template is made
     with <heart> by Colorlib" (`#999999`, link hover `#5c00ce`).
- **Design tokens (from style.css):**
  - Brand: `#5c00ce` (site-btn bg, active play state, play-btn icon,
    footer link hover); deep purple `#290849` (header, pagination
    hover); gradient family `#7e00ad` / `#5400bc` / `#673ab7`.
  - Text: `#111111` titles, `#ffffff` on dark, `#888888` meta,
    `#999999` copyright, `#f2f2f2` ghost h1s.
  - Surfaces: `#e1e1e1` (play border, seek bar), `#f5f5f5`/`#f2f2f2`
    tints; red accent `#f44336` (rare).
  - Fonts: Rockville Solid Regular (display — self-hosted woff; Google
    alt: Alfa Slab One / Righteous), Now Regular (body — self-hosted
    woff; Google alt: Jost / Outfit), Rajdhani 700 (countdown numbers
    — on Google Fonts).
  - Buttons `.site-btn`: 15px white on `#5c00ce`, 700, ls 2px,
    uppercase, padding 14px 30px, width 100%.
  - Spacing: `.spad` 100px 0; hero 400/295; track 120/40; event pic
    360px; youtube pic 240px; countdown numbers 90px/lh 100px.

## Tasks (implementation order)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/ledger`
   or any recent single-page app), rename package to
   `@free-react-templates/tempo`; keep `injectUiSource()` in
   `vite.config.ts`; `npm install` at root so the lockfile registers
   the workspace (deploy CI runs `npm ci`).
2. **Theme tokens** (`src/index.css` `@theme`): brand
   `--color-brand: #5c00ce`, deep `#290849`, dark text `#111111`,
   ghost `#f2f2f2`, meta `#888888`, border/seek `#e1e1e1`, footer
   text `#999999`; display font (Alfa Slab One or Righteous), body
   font (Jost or Outfit), Rajdhani 700; Google Fonts `<link>` in
   `index.html`.
3. **Header** — `#290849` bar, "Tempo" text wordmark, uppercase nav,
   Pages dropdown (About, Blog, Blog Details), social icons right,
   mobile burger menu.
4. **Hero** — full-bleed picsum cover
   (`picsum.photos/seed/tempo-1/1920/1080`), centered eyebrow +
   display headline + lorem + circular play button (play/pause toggle).
5. **Events** — section title + carousel arrows; 3 event cards
   (picsum seeds tempo-2/3/4, 700×360), white date pill at bottom
   center, title + venue, shadow `0 3px 15px rgba(22,41,124,0.1)`;
   arrows scroll the carousel.
6. **About** — split: photo left (tempo-5 700×700), ghost "About me"
   - uppercase "DJ Alexandra Rud" + bio + CONTACT ME button.
7. **Services** — background image left (tempo-6 700×800) + 4 items
   with lorem ipsum.
8. **Tracks** — ghost "Music podcast" + "Latest tracks" + "View all
   tracks"; 6-row scrollable list; circular play buttons flip to
   `#5c00ce` active state on click (single-active at a time); seek bar
   `#e1e1e1`.
9. **Youtube** — ghost "Latest videos" + "Youtube feed"; 3 video cards
   (tempo-7/8/9 700×240) with white circular play buttons (purple
   icon) + titles.
10. **Countdown** — dark bg (tempo-10 1920×1080), "Tomorrowland 2020"
    display headline, "Music festival start in" label, live timer
    (days/hours/minutes/seconds) counting down to a fixed future date,
    "Buy tickets" button.
11. **Footer** — continues dark bg, Phone/Email rows, newsletter
    input, centered social icons with hairline decor, "Tempo" wordmark
    - "Stay With me", copyright bar with `#5c00ce` hover link.
12. **Compose + verify** — `App.tsx` order header → hero → events →
    about → services → tracks → youtube → countdown → footer; run
    `scripts/verify-app.sh tempo` (typecheck + lint + 100% coverage +
    build); update TEMPLATES.md `[~]` → `[x]` + surge URL + homepage +
    `npm run readme:status`; PR description with source template,
    preview URL, tokens, and differences.

## Pitfalls / notes

- The reference's display/body fonts are self-hosted woffs — MUST be
  substituted with Google Fonts (replication rule: never copy font
  files). Rajdhani 700 is already on Google Fonts for the countdown
  numbers.
- The footer overlaps the countdown section (`margin-top: -547px`,
  height 549px, padding-top 300px) — recreate by giving the footer a
  background image/cover that visually continues the dark section
  above it; simplest faithful approach: same dark cover treatment on
  both, footer pulled up over the countdown's bottom padding.
- The events section uses owl-carousel; a simple accessible
  prev/next scroll (or slide) is a faithful equivalent — no new
  dependency needed.
- The track player is jPlayer markup in the original; implement as an
  interactive list with play/pause state (no real audio file
  required). Only ONE track should be "playing" at a time.
- Countdown targets "Tomorrowland 2020" (past) — recreate with a fixed
  future date (e.g. a festival date far enough out) so the timer shows
  positive values; scenario asserts no negative values.
- Dup row: Djoz appears at TEMPLATES.md lines 375 AND 2264. One app
  only (`apps/tempo`); both rows get `[x]` on completion.
- Ghost h1s (`About me`, `Music podcast`, `Latest videos`) are
  absolutely positioned behind the section title h2 (z-index -1,
  100px, `#f2f2f2`) — a signature visual; keep them in the layout.
