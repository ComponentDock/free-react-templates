# Rhythm (ColorLib "Djoz") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-rhythm` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Djoz" — free DJ / music artist template
  (source: https://colorlib.com/wp/template/djoz/). Listed in TEMPLATES.md
  under the Bootstrap category (line 375); duplicate row at line 2264 under
  Music (19) — same template, ONE app only. (Music also lists "Dj" — a
  DIFFERENT ColorLib template, and "Deejee" — already shipped as
  `apps/decibel`; Djoz is untouched.)
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/djoz/`.
  DOM fetched (`/tmp/djoz-prep/djoz.html`, 38,250 bytes) + stylesheet
  `css/style.css` (`/tmp/djoz-prep/style.css`, 44,962 bytes) + webfont css
  (`nowfont.css`, `rockville.css`) + TEMPLATES.md screenshot
  (`djoz-free-template.jpg`, 1200×946, viewed in browser).
- **Aesthetic:** nocturnal nightlife — deep purple/indigo DJ-photo hero with
  white display-font headline, stark white content sections with giant
  `#f2f2f2` watermark h1s behind the uppercase section titles, magenta/pink
  accents on event photos, square (no-radius) purple `#5c00ce` uppercase
  letter-spaced buttons, circular translucent play buttons, dark purple
  countdown + footer bands over background images.
- **Sliders/menus are jQuery plugins in the source** (owl-carousel for the
  events carousel, slicknav for the mobile menu, jPlayer for the audio
  players, magnific-popup for video modals) — implement with React state:
  a 3-per-view event carousel with arrows, a hamburger mobile menu with the
  7 nav entries (Pages dropdown included), static track rows (no audio
  assets), play buttons linking the source's YouTube URLs.
- **Fonts:** source uses custom webfonts (Now Regular body, Rajdhani
  headings, Rockville Solid display) — DO NOT copy the font files. Load
  **Rajdhani** (500/600/700 — it IS a Google font) + **Poppins** (400/500/600
  as the Now Regular substitute) via `<link>` in `index.html`. Rockville
  Solid (110px hero / 100px watermarks / 90px countdown) → Rajdhani 700
  uppercase (documented substitution).
- **Buttons:** `.primary-btn` = square, 15px, uppercase, letter-spacing 2px,
  padding 14px 25px 12px, bg `#5c00ce`, white text. `.primary-btn.border-btn`
  ("View all tracks") = transparent, 2px `#5c00ce` border, `#111111` text.
  `.site-btn` = same purple, `width: 100%`.
- **Copy is placeholder/Lorem** — paraphrase freely, keep the same kinds:
  nav (Home / About / Discography / Tours / Videos / Pages: About, Blog,
  Blog Details / Contact), hero eyebrow "New single" + title "Feel the heart
  beats", event "David Guetta Miami Ultra" + "Funkhaus Berlin, Berlin,
  Germany" + "Dec 15, 2019", services (Wedding / Clubs and bar / DJ lessons
  / Corporate events), tracks (source repeats "David Guetta Miami Ultra" —
  use varied track titles), videos (David Guetta Miami Ultra Music Festival
  2019 / Martin Garrix (Full live-set) | SLAM!Koningsdag / Dimitri Vegas,
  Steve Aoki & Like Mike's "3 Are Legend"), countdown "Tomorrowland 2020" /
  "Music festival start in", footer "Stay With me" + phone
  `1-677-124-44227` (PLAIN TEXT — never `tel:` literals) + email
  `DJ.Music@gmail.com`.
- **Header social = 4 icons** (Facebook, Twitter, Instagram, Dribbble) —
  same 4 in the footer. lucide-react has NO brand icons — inline SVG
  (simple-icons paths) per the replication skill.

## Structure (top → bottom, single page)

1. **Header** (`.header`, absolute, `rgba(42,1,74,0.5)`, z-index 9) — logo
   img left; nav right: Home (active) / About / Discography / Tours /
   Videos / Pages▾ (About, Blog, Blog Details) / Contact; 4 social icons.
   Mobile: hamburger → deep-purple dropdown with all links.
2. **Hero** (`.hero.spad.set-bg`, `padding-top: 400px`, `padding-bottom:
295px`) — purple-tinted DJ photo bg; "New single" eyebrow; 110px display
   "Feel the heart beats"; white blurb; 90px circular play button
   (`rgba(255,255,255,0.3)` bg, purple 26px icon) → YouTube video; bottom
   chevron (`.linear__icon`).
3. **Events** (`.event.spad`) — "Upcoming Events" h2 (NO watermark h1 here);
   carousel: 6 cards / 3 per view; card = 360px photo + `.tag-date` badge
   (bottom -21px, straddles photo edge) + h4 title + pin icon + venue.
4. **About** (`.about.spad`) — 6/6: photo left; right = section-title
   (h2 "DJ Alexandra Rud" + 100px "About me" watermark `#f2f2f2`,
   `z-index: -1`), paragraph, square purple "CONTACT ME" button.
5. **Services** (`.services`, container-fluid, NO spad) — 6/6: left
   `service-left.jpg` with centered play button (→ YouTube
   JGwWNGJdvx8); right 2×2 zigzag tiles (order-lg 1/2/4/3): Wedding
   (deep `#5400BC`), Clubs and bar (`#5c00ce`), DJ lessons (deep),
   Corporate events — each: icon img + h4 + blurb; tiles 320px tall,
   padding 70px 40px 40px 70px.
6. **Tracks** (`.track.spad`) — section-title (h2 "Latest tracks" + h1
   "Music podcast" watermark) + right outline "View all tracks" button;
   `.track__content` 502px scroll: 4 static player rows (title, play
   button, progress bar, 0:00 / 00:00, volume).
7. **Youtube** (`.youtube.spad`) — section-title (h2 "Youtube feed" + h1
   "Latest videos"); 3 cards: photo + circular play button (→ YouTube URL)
   - h4 title.
8. **Countdown** (`.countdown.spad.set-bg`, `countdown-bg.jpg`) — 90px
   white display "Tomorrowland 2020"; 26px uppercase "Music festival start
   in"; 4 timer items (span 90px/700 Rajdhani: 20 / 45 / 18 / 09 + p
   days/hours/minutes/seconds; inline, margin-right 80px); "Buy tickets"
   primary-btn below. Implement LIVE countdown hook to a pinned future
   festival date; fake-timer tests wrapped in `act()`.
9. **Footer** (`.footer.spad.set-bg`, `footer-bg.png`) — source overlaps
   the countdown via `margin-top: -547px; padding-top: 300px` — approximate
   the overlapping art; 3 columns: address (phone + email with icons and
   labels), brand h2 + 4 social SVG links, newsletter "Stay With me" (email
   input + send button); copyright bar "Copyright © <year> All rights
   reserved | This template is made with ♥ by **Component Dock**" →
   https://www.componentdock.com/ (replaces Colorlib credit).

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/rhythm`; `npm install` at repo root; CNAME +
      homepage `rhythm.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand `#5c00ce`, brand-deep
      `#5400BC`, brand-dark `#290849`, brand-alt `#7E00AD`, ink `#111111`,
      muted `#666666`/`#888888`, watermark `#f2f2f2`, paper `#ffffff`; Google
      Fonts `<link>` (Rajdhani + Poppins)
- [ ] `src/data.ts` — nav links (incl. Pages dropdown), events (6),
      services (4), tracks (4), videos (3), footer contact/social data
- [ ] Components: `Navbar` (desktop + hamburger mobile menu), `Hero`
      (eyebrow/title/blurb/play button/chevron), `Events` (carousel),
      `About`, `Services` (zigzag tiles), `Tracks` (static player rows),
      `Youtube`, `Countdown` (live timer hook), `Footer` (3 columns +
      copyright)
- [ ] `BrandIcon` inline-SVG set (Facebook, Twitter, Instagram, Dribbble)
      — lucide has no brand icons
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (fake timers + `act()` for the countdown)
- [ ] Subject-screen picsum seeds (hero DJ scene, about photo, services
      left, 3 event cards, countdown bg, footer bg) — pixel metric +
      browser verify, pin seeds in PR
- [ ] `bash scripts/verify-app.sh rhythm` green; PR with source, preview
      URL, tokens, deviations (React carousel / hamburger / static players
      / live countdown / Component Dock credit); squash-merge immediately

## Verification notes / pitfalls

- Footer/hero phone number: plain text only — no `tel:` literals (the
  toolchain's secret-scan rewrites them).
- `aria-current` on the active nav link: `aria-current={cond ? 'true' :
undefined}`.
- Countdown test with `vi.useFakeTimers()` needs `act()` around the tick.
- Watermark h1s are decorative — give them `aria-hidden` or use the
  section-title h2 as the accessible heading.
- Owl-carousel/slicknav/jPlayer/magnific-popup are all jQuery — do NOT port
  them; React state + lucide icons only.
