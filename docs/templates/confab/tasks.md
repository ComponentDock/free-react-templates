# Confab (ColorLib Eventotemplate) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-confab`. Source: ColorLib "Eventotemplate" — dark
> conference / design-week event landing page
> (https://colorlib.com/wp/template/eventotemplate/).
> Preview: https://preview.colorlib.com/theme/eventotemplate/ (HTTP 200;
> 45,894-byte HTML, `assets/css/style.css` ~64 KB parsed; screenshot
> `eventotemplate-colorlib.jpg` 1200×946 viewed in the browser).
> TEMPLATES.md rows: line 578 + dup at 1679.

## Design notes (replication findings)

- **Original:** ColorLib "Eventotemplate" — dark one-pager for a design-week
  conference ("SanDiego Design Week", brand "Evento"). jQuery stack:
  owl-carousel (hero slider + speakers carousel), Bootstrap 4 nav-tabs
  (schedule), slicknav mobile menu, Google Maps JS embed, fontawesome +
  themify icon fonts. No Tailwind.
- **Screenshot vs live DOM:** they MATCH — dark near-black theme, neon-yellow
  #FFBD00 primary + pink #FF60CE secondary. Hero: giant yellow-bold headline,
  conference-stage photo, pink circular play button, pink date, yellow CTA.
  Stats band visible at screenshot bottom (03 Day Event / 10+ Speakers /
  23+ Sponsors). Every section below the fold confirmed from the live DOM +
  CSS.
- **Visual design:** dark and punchy — near-black sections/overlays
  (rgba(11,0,21,0.7) hero gradient on #0B0016 base), yellow buttons with an
  orange #ec583a hover sweep, pink accents (date, stats numbers, icons, play
  button), muted gray #9B9EAC body text. Big Barlow/Mitr display type
  (100px hero h1, 50px section h2, both uppercase).
- **Signature motifs to preserve:**
  - HEADER (fixed, transparent over hero; sticky → bg `#0a0a0a`, padding
    15px 0): logo left, centered nav Home / Speakers / Schedule / Location /
    Blog / Contact, yellow "BUY YOUR SEAT" button right; mobile hamburger →
    solid drawer (past templates shipped transparent mobile menus — user
    tests on phone, make it solid + tappable).
  - HERO SLIDER (`.slider-active`, slides `.single-slider.slider-height
.hero-overly.slider-bg1/2`, base bg `#F2F4F8`, dark overlay gradient
    rgba(11,0,21,0.7) → rgba(10,0,2,...)): h1 "SanDiego Design Week"
    (yellow span + white, 100px/700 uppercase, responsive 76/70/58px,
    line-height 1, margin-bottom 64px), pink "12 Aug 2021", white "3968
    Carson Street, San Diego, CA 92101", yellow "BUY TICKET" button
    (padding 22px 32px, Mitr, white text, orange hover sweep), pink circle
    play button → YouTube video modal (source links
    youtube.com/watch?v=up68UAfH0d0).
  - STATS BAND (`count-down-area top-padding`, 60px padding): 3
    `.single-counter` columns — numbers 3 / 10 / 23 in Barlow 50px/700
    PINK #FF60CE uppercase; `.pera-count h5` #131933 24px/400 ("Day
    Event" / "Speakers" / "Sponsors") + p Mitr #9B9EAC 18px/500 uppercase.
  - SPEAKERS (`team-area section-padding`, 120px padding): section-tittle
    "Speakers" (Mitr white 50px/700 uppercase) + `.team-active` carousel of
    `.single-team` cards (margin 0 12px): `.team-img` photo (overflow
    hidden, hover zoom) + `.team-caption` h3 yellow #FFBD00 24px/600 name
    (hover pink #FF60CE) + role + socials. Source names are puns (Marcus
    Down, Rick Shaw, Frank Senbeans) — paraphrase to new puns.
  - ABOUT (`about-area`, `.about-caption` padding-bottom 50px): heading
    "About Design Week", tagline "A Citywide Celebration Of Design", 2
    paragraphs.
  - SCHEDULE (`shedule-area section-padding`): section-tittle "Schedule";
    centered `.nav-tabs` (border-bottom 1px rgba(255,255,255,0.2);
    `.nav-link` Mitr white 18px/500, padding 17px 5px, 4px transparent
    bottom border, active → yellow) labeled 17th Aug / 18th Aug / 19th Aug;
    `.shedule-wrapper` dark #0e0e0e card (padding 30px) with
    `.shedule-items` rows: time ("8:30 am"…), white Barlow h4 title, gray
    #9B9EAC 20px/300 meta, white 15px inline meta with pink 18px icons,
    speaker name. Source repeats the same 4 items per day (Registration And
    Breakfast / Opening Remarks And Keynote / Web Accessible Designs /
    Building Communities) — use DISTINCT sessions per day. Speaker puns:
    Aaron Ottix, Frank Senbeans, Ken Tucky, Mal Practice.
  - BLOG (`home-blog bottom-padding`): section-tittle + 3 `.single-blogs`
    cards: `.blog-img` photo (margin-bottom 25px, hover zoom) + uppercase
    title + author "- Justin Case" + read-more. Source repeats ONE title
    ("When Corners Collide: Decoding The Contrasting Aesthetics") ×3 — ship
    3 DISTINCT design-themed titles.
  - BRANDS (`brand-area top-padding`, decorative `shape.png` background
    layer z-index -1, 235px): `.wrapper-brand` dark #0e0e0e card, padding
    45px 50px, 6 `.single-brand` logos → generic text marks / lucide icons.
  - MAP (`map-area`): Google Maps JS embed (key in source) → iframe embed
    or static map block, full width.
  - FOOTER (`footer-area footer-padding`): blurb widget + "Subscribe
    Newsletter" heading + `.footer-form` (input 52px, transparent bg, 1px
    rgba(255,255,255,0.5) border, radius 0, white text; yellow Subscribe
    button) + contact `info@evento.com` / phone "10 (85) 980 3673" (render
    as plain text); `footer-bottom-area`: `footer-border` top border
    rgba(255,255,255,0.2) padding-top 23px, copyright #9B9EAC 14px/300 →
    Component Dock credit.
- **Tokens (from assets/css/style.css):** brand yellow `#FFBD00` (54 uses —
  buttons, hero span, team names, CTA), pink `#FF60CE` (28 uses — date,
  stats numbers, play button gradient `linear-gradient(131deg,#FF60CE,#FF60CE)`,
  schedule icons, hover), orange sweep `#ec583a` (.btn::before scaleX
  transition 0.5s), overlay base `#0B0016` (hero gradient rgba(11,0,21,0.7)),
  blacks `#0a0a0a` (sticky header) / `#0e0e0e` (shedule + brand cards), light
  `#F2F4F8` (slider base) / `#f9f9ff` / `#f0e9ff` (light tints), muted
  `#9B9EAC` (body/meta/copyright), navy `#131933` (stat labels), sparse
  accents `#415094` / `#4cd3e3` / `#38a4ff` / `#f44a40`; radii — buttons
  0 (sharp rectangles), footer input 0; shadows none signature; fonts Barlow
  (300–800) body + Mitr (300–600) headings/buttons via Google Fonts.

## Tasks (implementation order)

1. Scaffold `apps/confab` from the simplest existing app; rename package to
   `@free-react-templates/confab`; `public/CNAME` =
   `confab.free.componentdock.com`; homepage
   `https://confab.free.componentdock.com`; `npm install` at root so the
   lockfile registers the workspace (verify with
   `grep -c "free-react-templates/confab" package-lock.json`).
2. `src/index.css` `@theme` tokens (see spec): brand `#ffbd00`, blush
   `#ff60ce`, ember `#ec583a`, night `#0b0016`, coal `#0a0a0a`, card
   `#0e0e0e`, fog `#f2f4f8`, mist `#9b9eac`, navy `#131933`; Barlow + Mitr
   `<link>` in `index.html`; register `injectUiSource()` in
   `vite.config.ts` (copy from any app).
3. Header (transparent → sticky #0a0a0a): brand + centered nav + yellow
   "BUY YOUR SEAT" + accessible mobile drawer (solid bg, tappable).
4. Hero slider (state-based, dot/arrow nav + autoplay, 2 slides; picsum
   seeds `confab-hero-1`/`confab-hero-2` — screen for dark conference/stage
   subjects before pinning; dark overlay) + pink play button → video modal
   (YouTube embed).
5. Stats band (3 columns: 3 Day Event / 10 Speakers / 23 Sponsors, pink
   numbers) → Speakers (carousel or grid, 4+ cards, yellow names, socials,
   paraphrased pun names).
6. About (heading + tagline + 2 paragraphs) → Schedule (3 day tabs +
   dark card, 4+ DISTINCT sessions per day, speaker names).
7. Blog (3 distinct titles, author lines, read-more) → Brands (6 marks in
   dark card) → Map (iframe embed, accessible label).
8. Footer (blurb + newsletter form with 52px transparent input + yellow
   Subscribe + contact text) + footer-bottom (Component Dock credit);
   inline SVG brand icons — lucide-react has no brand icons.
9. Picsum seeds: verify each seed renders a plausible subject before
   pinning (hero ×2, speakers ×4, blog ×3); avoid known-bad ids
   (91/177/338/65/1005/342/838); verified-good person ids: 1027, 64, 823, 996.
10. Tests first (TDD) mirroring the spec scenarios; 100% coverage;
    `bash scripts/verify-app.sh confab` green; PR + immediate squash
    merge; then bookkeeping.

## Pitfalls / notes

- The source demo repeats content everywhere — recreate with DISTINCT
  values: 4 schedule items repeated across all 3 day tabs, one blog title
  ×3, speaker names reused between sections. Never ship the repeated
  filler.
- The brand yellow `#FFBD00` is EVERYWHERE (buttons, hero span, team names,
  CTA, active tab underline). Don't substitute Bootstrap's default
  `#0d6efd` — the template overrides `.btn` with `background:#FFBD00`.
- Signature button hover: `.btn::before` orange `#ec583a` sweep
  (`transform: scaleX(1)` transition 0.5s) — reproduce with an overlay
  layer or `group-hover` gradient, not a simple color swap.
- Hero h1 is ~100px desktop — ensure the yellow span + white text pairing
  survives the responsive fallback (76/70/58px).
- Source typos/quirk: "12:30 am" for a lunch slot — fix to "12:30 pm".
- lucide-react has no brand icons (Twitter/Facebook/Instagram/YouTube) —
  inline SVGs; probe EVERY lucide export with the typeof check before
  importing (renamed exports throw "Element type is invalid" at runtime).
- No `[~]`/`[x]` markers were set by the prep stream — implementer claims
  via the usual `[~]` push on `feat/template-confab`.
- No `colorlib` string anywhere in `apps/confab/*` — provenance lives only
  here, TEMPLATES.md, and the PR. Never reuse the source pun names verbatim
  (Marcus Down / Rick Shaw / Frank Senbeans / Aaron Ottix / Ken Tucky /
  Mal Practice are ColorLib content).
- Never write a literal `tel:+<digits>` URI in source (secret-scan
  masker rewrites it); render phone as plain text.
- Mobile header: past templates shipped transparent mobile menus — make
  the mobile drawer solid and tappable (user tests on phone).
- jsdom 30 has no localStorage — copy the MemoryStorage polyfill from
  `apps/cura/src/test/setup.ts` into the new app if anything touches it.
- TEMPLATES.md lists "Eventotemplate" TWICE (lines 578 and 1679) —
  bookkeeping must mark BOTH rows `[x]` with the same live URL.
