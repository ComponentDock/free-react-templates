# Huddle (ColorLib Knights) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-huddle`. Source: ColorLib "Knights" — dark, high-contrast
> American football club one-pager (https://colorlib.com/wp/template/knights/).
> Preview: https://preview.colorlib.com/theme/knights/ (HTTP 200;
> 40,743-byte HTML, `css/style.css` ~79 KB parsed; screenshot
> `knights-free-template.jpg` 1200×946 viewed in the browser).
> TEMPLATES.md rows: line 430 + dups at 1820 and 2837 (mark ALL three `[x]`
> with the same live URL when bookkeeping).

## Design notes (replication findings)

- **Original:** ColorLib "Knights" — American FOOTBALL club template
  (positions: Wide Receiver / Tight End / Defensive; flaticon icons:
  american-football, american-football-1, lockers, strategy). Bootstrap 4 +
  jQuery + owl.carousel + AOS + jquery.countdown + jquery.animateNumber +
  stellar parallax + magnific-popup + icomoon/flaticon icon fonts + Google
  Maps. No Tailwind.
- **Screenshot vs live DOM:** they MATCH — dark navbar (brand in a dark
  #232931 box), stadium-photo hero with dark overlay and right-aligned copy,
  dark #232931 overlap strip with matchup + digital countdown + yellow
  "Buy Tickets", then a light "GAME REPORT" scoreboard block. The screenshot
  only shows the top of the page — the DOM is the authoritative source for
  the lower sections. (The vision model reported a "bright yellow bar" at
  the very top — that is the stadium-lights photo / browser chrome, NOT a
  topbar: the HTML has no topbar, the nav is `navbar-dark bg-dark`.)
- **Visual design:** dark dramatic sports aesthetic — black/charcoal
  (#000, #232931) sections + photo backgrounds with dark overlays, BRIGHT
  yellow #ffb400 accents (buttons, score underline, active dots, social
  circles, subscribe submit, heading spans), and a 45° #6b75ff→#59b7ff
  purple-blue gradient on service icons + counter circles. Nunito Sans
  everywhere, headings 700–900. Circles everywhere (logos 60/100px,
  avatars 120px, social 50px, counter icons 70px), cards radius 5px.
- **Signature motifs to preserve:**
  - NAVBAR (`.navbar-dark.bg-dark`): brand "Knights" — dark #232931 box,
    white bold text; links Home / About / Games / Blog / Contact (15px,
    800); white CTA "Buy Ticket" (4px radius, black text; hover → #232931
    bg + white text); mobile burger "MENU" (uppercase, ls .1em) → SOLID
    dark collapsible (past templates shipped transparent mobile menus —
    user tests on phone, make it solid + tappable).
  - HERO (`div.hero-wrap.js-fullheight`, bg_1.jpg + overlay rgba(0,0,0,.4)):
    content right-aligned (justify-content-end, col-md-7) — h1 "How long
    can you last?" (56px/700 white, 40px mobile), 20px lead
    (rgba(255,255,255,.8)), pulsing 60px circular play button
    (rgba(255,255,255,.8) bg, black glyph) + "Watch Games" (uppercase 18px,
    ls 2px).
  - UPCOMING MATCH STRIP (`div.game-wrap-1`): bg #232931, radius 5px,
    `margin-top: -60px` (OVERLAPS hero bottom — this is the signature
    look), 4 columns — (1) two OVERLAPPING 60px circular team logos
    (second offset left 35px, z-index -1) + stacked team names (18px white);
    (2) league (18px rgba(255,255,255,.5)) + stage span
    (rgba(255,255,255,.8)); (3) `#timer` countdown — 4 cells (width 25%,
    20px/600 white, label 14px/300 white, 1px rgba(255,255,255,.2) left
    borders, first transparent); (4) yellow "Buy Tickets" (py-3).
  - GAME REPORT (`section.ftco-section`): left col-lg-6 — `.subheading`
    "Game Report" (16px uppercase ls 1px) + h2 "Great Win In Final Game"
    (40px/900 mb-4); `.scoreboard` — divider "Tue. Feb 21, 2019; Champions
    League", two `.sport-team` rows: 100px circular logo + `.score.win` "3"
    (50px/800, 5px #ffb400 underline) vs `.score.lost` "1"
    (rgba(0,0,0,.2)); centered "More Details" (yellow); right col-lg-6:
    full-height victory.jpg with centered play icon + "Watch Highlights"
    (16px white).
  - GAME SCHEDULE (`section.ftco-game-schedule`, owl carousel of 6 items):
    white card each (1px rgba(0,0,0,.1) border, padding 20px, soft shadow)
    — 100px circular logo + `.venue` "Home @ Arena" (rgba(0,0,0,.7)) +
    h4 `.team-name` (22px/900) + `.date` (black). SOURCE REPEATS one row
    6× — ship 6 DISTINCT opponents/venues/dates.
  - SERVICES (`section.services-section.bg-light`): NO section heading;
    4 cards — `.icon span` 60px glyph (color #ffb400 on 45°
    #6b75ff→#59b7ff gradient) + h3 18px/800: "Senior Team" / "For Kids" /
    "Football Schools" / "Basic Tactics" + paragraph (paraphrase the
    Duden-flows filler into distinct program blurbs).
  - OUR TEAM SQUAD (`section.ftco-team.img`, bg_3.jpg + #232931 overlay
    50%): `.heading-section-white` h2 "Our Team Squad" (40px/900 white,
    accent span #ffb400) + carousel of 7 `.team-wrap` cards — 120px
    circular photo, name 22px/800 white, position rgba(255,255,255,.8);
    dots 10px, active #ffb400. SOURCE REPEATS "David Scott" 7× — ship 7
    DISTINCT names + positions (e.g. QB "Jake Turner", WR, TE, LB, DB, OL,
    Kicker).
  - ABOUT + COUNTERS (`section.ftco-counter.img`): left photo (about.jpg,
    400px tall); right: h2 "About the Knights Team" (→ "About the Huddle
    Team") + paragraph, then 4 counters — 70px gradient circle icon (white
    glyph) + `strong.number` 28px/800 (count-up: data-number 100 / 10 / 20
    / 80) + label 14px/700 rgba(0,0,0,.7): "Game Played" / "Coaches" /
    "Trophies" / "Members".
  - HAPPY VIEWERS (`section.testimony-section`, bg_2.jpg + overlay):
    `.heading-section-white` h2 "Happy Viewers" + testimonial carousel
    (quote + name + role "Viewer" + 100px circular avatar). SOURCE REPEATS
    "Arthur Browner" 6× — ship 3–4 DISTINCT testimonials.
  - RECENT NEWS (`section.ftco-section`): `.heading-section.text-center` h2
    "Recent News" + 4 `.blog-entry` cards — photo with white date badge
    (`.topp`: day "08" 50px/300, "March" / "2019" 13px) + `.heading` title
    20px/600 (hover #ffb400). SOURCE REPEATS one title 4× — ship 4 DISTINCT
    football-news headlines.
  - SUBSCRIBE (`section.ftco-subscribe.img`, bg_1.jpg + overlay):
    white h2 "Subcribe to our upcoming match" — SOURCE TYPO, ship
    "Subscribe to our upcoming match" — + form: white email input (70px
    tall, 20px, radius 5px 0 0 5px) + yellow submit (black text, radius
    0 5px 5px 0).
  - FOOTER (`footer.ftco-footer`, bg #000, padding 7em 0): 2 widgets —
    (1) brand "Huddle" + paragraph; (2) "Have a Questions?" — address /
    phone / email (paraphrase the source's Fake St. values; NEVER write a
    literal `tel:+<digits>` URI — secret-scan masker rewrites it, render
    phone as plain text) + `.ftco-footer-social` row of 50px #ffb400
    circles with black glyphs; `.copyright` bar → Component Dock credit
    (https://www.componentdock.com/).
- Brand yellow `#ffb400` is the ONLY accent — don't invent a second color.
  Bootstrap's default `#007bff` blue must NOT appear.
- Dark sections: footer + navbar + strips are #000 / #232931; photo
  sections get dark overlays (hero rgba(0,0,0,.4), team #232931 @ 50%).
- Gradient `linear-gradient(45deg, #6b75ff, #59b7ff)` is used ONLY on the
  service icon glyph backgrounds and counter circles — keep it as a token
  (e.g. `--gradient-brand`) so it's consistent.
- Countdown: source uses jquery.countdown filling `#days/#hours/#minutes/
#seconds`. React: compute from a FIXED future date constant (e.g.
  `2027-01-01T00:00:00Z`) — deterministic for tests; format "NN Days /
  HH Hours / MM Minutes / SS Seconds" per the screenshot.
- Counters: source uses jquery.animateNumber count-up from 0. Ship final
  values as static text (or a tiny count-up hook) — no new deps; tests must
  not depend on animation timing.
- Flaticon football glyphs → lucide-react probes: Trophy, Users,
  GraduationCap/School, Target/Crosshair (typeof-check every export; any
  that throw "Element type is invalid" → inline SVG fallback). Social icons:
  lucide-react has no reliable brand set — probe Facebook/Twitter/Instagram/
  Youtube; fall back to inline SVG.
- All photos are inline `background-image` divs in the source (bg_1 hero,
  bg_2 testimony, bg_3 team, about, victory, staff-1..7 players, team-1..6
  logos, person_1..4 avatars, image_1..4 blog) → seeded picsum:
  `huddle-hero-1`, `huddle-victory-1`, `huddle-about-1`, `huddle-player-1..7`,
  `huddle-logo-1..6`, `huddle-avatar-1..4`, `huddle-blog-1..4` — screen for
  football/stadium subjects before pinning.
- jsdom 30 has no localStorage — copy the MemoryStorage polyfill from
  `apps/cura/src/test/setup.ts` into the new app if anything touches it.
- No `[~]`/`[x]` markers were set by the prep stream — implementer claims
  via the usual `[~]` push on `feat/template-huddle`.
- No `colorlib` string anywhere in `apps/huddle/*` — provenance lives only
  here, TEMPLATES.md, and the PR.
- TEMPLATES.md lists "Knights" THREE times (lines 430, 1820, 2837) —
  bookkeeping must mark ALL rows `[x]` with the same live URL.

## Tasks / todo outline (implementer checklist)

1. **Bootstrap the app** — copy the simplest existing app (e.g.
   `apps/propel`), rename package to `@free-react-templates/huddle`,
   `public/CNAME` = `huddle.free.componentdock.com`, homepage
   `https://huddle.free.componentdock.com`. Run `npm install` at root so
   `package-lock.json` registers the workspace.
2. **Tokens** — `@theme` in `src/index.css`: `--color-primary: #ffb400`
   (hover/invert → #000 bg + #fff text), `--color-charcoal: #232931`,
   `--color-ink: #000000`, `--color-surface: #f8f9fa`, gradient token
   `#6b75ff → #59b7ff` (45°), white-rgba ramp
   (0.4/0.5/0.7/0.8/0.9); font Nunito Sans (300/400/600/700/800/900) via
   Google Fonts `<link>` in `index.html`; register `injectUiSource()` in
   vite.config.ts.
3. **Components** (colocated tests, TDD red→green):
   - `Navbar` — brand box + links + white "Buy Ticket" CTA + solid dark
     mobile drawer.
   - `Hero` — photo bg + overlay, right-aligned headline/lead, pulsing play
     circle + "Watch Games".
   - `MatchStrip` — dark overlap card: overlapping logos, league/stage,
     countdown (fixed future date), "Buy Tickets".
   - `GameReport` — subheading + heading, scoreboard (win 3 / lost 1 with
     yellow underline), "More Details", highlights photo + play link.
   - `GameSchedule` — 6 distinct schedule cards (grid; simple carousel
     optional, no new deps).
   - `Services` — 4 gradient-icon program cards.
   - `TeamSquad` — photo bg + white heading + 7 distinct player cards
     (simple state-based carousel with yellow dots).
   - `AboutCounters` — photo + heading/paragraph + 4 counters (static or
     simple hook).
   - `Testimonials` — photo bg + white heading + 3–4 distinct quotes
     (simple carousel).
   - `RecentNews` — 4 distinct blog cards with white date badges.
   - `Subscribe` — email form (zod validation + error/success states per
     conventions), yellow submit.
   - `Footer` — black, 2 widgets, social circles, Component Dock copyright.
   - `App` — compose in order; document title "Huddle — Sports Club
     Template".
4. **Verify** — `npm run verify:app -- huddle` (typecheck + lint + 100%
   coverage + build), then commit conventionally (`feat: Huddle — Sports
club template (ColorLib Knights) (#PR)`) on `feat/template-huddle`,
   push, open PR, `gh pr merge --squash --delete-branch`.
5. **Bookkeep** — after merge: TEMPLATES.md lines 430 + 1820 + 2837 `[x]`
   with live URL `https://huddle.free.componentdock.com`, README status
   regen (`npm run readme:status`), commit `chore:`.
