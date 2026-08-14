# Dugout (ColorLib Phoenix) — Tasks & Design Notes

> **SUPERSEDED** — ColorLib "Phoenix" shipped as **Slugger** (PR #418,
> live at https://slugger.free.componentdock.com). Do NOT implement this
> spec — delete on next cleanup.

> Prep artifacts prepared on `main`. Recreation name: **Dugout** (NEW name —
> the ColorLib source keeps its name "Phoenix"). Implementation ships on
> `feat/template-dugout` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Phoenix" — free baseball-club website template
  (source: https://colorlib.com/wp/template/phoenix/). TEMPLATES.md row:
  line 474 (**Bootstrap (216)**). The `phoenix` slug appears exactly once
  (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):**
  `https://preview.colorlib.com/theme/phoenix/` (HTTP 200, 49.5KB HTML,
  `<title>Phoenix - Free Bootstrap 4 Template by Colorlib</title>`).
  Custom stylesheet: `css/style.css` (85.9KB; Bootstrap 4.2.1 base +
  theme overrides = token source). Vendor sheets (owl, animate, aos,
  magnific-popup, ionicons, icomoon, flaticon, open-iconic) are NOT copied.
  Screenshot (`phoenix-free-template.jpg`, 1200×946) browser-verified
  2026-08-14: dark transparent navbar + gold bird icon + white "PHOENIX"
  wordmark; full-width baseball-photo hero; white uppercase "FIELDRUN
  BASEBALL CLUB" headline; blue "Watch match" + green "Get ticket" buttons;
  dark navy match strip (two round team logos vs, "BASEBALL CHAMPIONS
  LEAGUE Semi-Final", countdown 171d 11h 10m 39s, green "Buy Tickets");
  white/light "GAME REPORT" area below. Emerald green + electric blue +
  dark navy on white — bold, modern, professional sports aesthetic.
- **Structure observed (1:1) — 15 blocks:**
  1. Navbar — `ftco-navbar-light` transparent over hero; Oswald uppercase
     brand + gold `#fdd043` icon; links Home/About/Games/Blog/Contact; dark
     CTA "Buy Ticket" (`#171b21`, 4px radius); scrolled = solid white bar,
     black links, `0 0 10px 0 rgba(0,0,0,0.1)` shadow.
  2. Hero slider — `hero-wrap` full-width bg (`images/bg_2.jpg`) + overlay
     `rgba(0,0,0,.3)`; `slider-text`: h1 "Fieldrun Baseball Club" (80px,
     white, 900, uppercase Oswald), Lato para (20px, "A small river named
     Duden flows…"), buttons "Watch match" (btn-secondary) + "Get ticket"
     (btn-primary).
  3. Match/countdown strip — `game-wrap-1` bg `#171b21`, padding 30px,
     4 cols: (a) `vs` badge over two 60px round team logos + uppercase
     names (Phoenix vs Jacksonville, 14px white 700); (b) league `h3`
     "Baseball Champions League" (24px `rgba(255,255,255,0.5)` uppercase) +
     span "Semi-Final" `rgba(255,255,255,0.8)`; (c) `#timer` 4 `.time`
     cells (days/hours/minutes/seconds; 40px Oswald 600 white, 25% width,
     `border-left: 1px solid rgba(255,255,255,0.1)`); (d) green "Buy
     Tickets" btn.
  4. Game Report / Latest Game Result — centered heading (subheading 16px
     uppercase ls-1px; h2 50px 700 uppercase, green span) + `scoreboard
slash` (radius 4px, padding 60px 0; skewed blue `#207dff` panel via
     `:before` `skewX(-40deg)`): divider "Mon. June 3, 2019; Baseball
     Champions League" + sport-team-wrap with vs badge + scores 12 vs 8.
  5. Watch Highlights — `video-wrap` height 400px, radius 5px,
     `margin-top: -8em` (overlaps scoreboard's tall padding-bottom), shadow
     `0 -18px 93px -56px rgba(0,0,0,0.59)`, play button.
  6. Game Schedule — heading "Game Schedule" + carousel of 6 `game-sched`
     cards (white, `1px solid rgba(0,0,0,0.1)`, shadow `0 42px 29px -31px
rgba(0,0,0,0.05)`, padding 20px 0): "Home @ Arena - June 7, 2018 vs
     Phoenix Jacksonville". Owl dots 10px `rgba(0,0,0,0.1)`, active
     `#00bd56`.
  7. About the Phoenix — two-col, photos (`about.jpg`, `about-1.jpg`),
     "Far far away, behind the word mountains…" copy, blue "Watch Game".
  8. Next Match — second schedule section: heading "Schedule" + "Next
     Match" + 4 cards.
  9. Our Team Squad — 9 player cards; DOM repeats placeholder name "David
     Scott"; roles: Catcher, Tight End [sic], Pitcher, First Baseman,
     Second Baseman, Third Baseman, Right Fielder, Center Fielder, Left
     Fielder.
  10. Services — `bg-light` `#f8f9fa`; 4 cards: Baseball Training, Softball
      Training, Basic Defense, Basic Tactics; 75px icon area; Duden copy.
  11. Happy Viewers — `testimony-section slash` (skewed blue `#207dff`);
      heading + 5 slides "Far far away…" + "Jason Smith Viewer" + round
      avatar.
  12. Recent News — 3 cards: date block 29 May 2019, title "Why Lead
      Generation is Key for Business Growth", 270px cover (`image_1..4.jpg`).
  13. Counter — `bg-light`; Game Played / Coaches / Trophies / Members;
      numbers 60px weight 300 black (JS count-up; static ok).
  14. Subscribe — `ftco-subscribe img` (bg photo): "Subcribe to our
      upcoming match" (typo in original; fixing ok) + form: 70px white
      input radius `5px 0 0 5px` (20px text, "Enter email address") +
      green submit (bg `#00bd56`, BLACK text, radius `0 5px 5px 0`).
  15. Footer — black `#000000`, padding 7em 0; 5 widgets: brand+social,
      Services (Senior Team, For Kids, Reviews, FAQs), About Us (Our Story,
      Meet the team, Coach, Contact), Company (About Us, Press, Contact,
      Careers), "Have a Questions?" (203 Fake St. Mountain View, San
      Francisco, California, USA / +2 392 3929 210 / info@yourdomain.com);
      copyright "…made with by Colorlib" → Component Dock link.
- **Design tokens:** green `#00bd56` (primary btn, h2 span, active owl dot,
  subscribe submit, link hover); blue `#207dff` (secondary btn, skewed
  slash panels); navy `#171b21` (match strip bg, Buy Ticket CTA, brand skew,
  overlay); gold `#fdd043` (brand icon); black `#000` (footer, hero overlay
  0.3, numbers, btn hover); white; light `#f8f9fa`; card border
  `rgba(0,0,0,0.1)`; muted white `rgba(255,255,255,0.5)/(0.8)` on dark;
  fonts Oswald (headings/brand/countdown, uppercase) + Lato (body 16px);
  radii 4px (btn/scoreboard/CTA) / 5px (video, input) / 50% (logos,
  avatars); section padding 7em 0; h2 50px 700 uppercase; hero h1 80px 900;
  countdown 40px Oswald 600; schedule card padding 20px 0; subscribe input
  70px; team logo/avatar 60px circles; icon area 75px.
- **Icons → lucide-react:** brand mark gold (e.g. `Flame` or inline SVG
  bird), `Play` (video), service icons (probe exports — e.g. `Dumbbell`,
  `Target`, `Shield`, `Swords` — verify with typeof probe; lucide-react has
  renamed/removed icons silently before), footer socials, `ChevronLeft/
ChevronRight` for carousels if index-based.
- **Copy fidelity:** keep content KINDS: club headline + intro + 2 CTAs;
  vs + two team names + league + Semi-Final + countdown + Buy Tickets;
  "Game Report / Latest Game Result" + date divider + two scores; "Watch
  Highlights"; schedule card venue/date/opponents; about story; 9 player
  roles (keep the reference's roles verbatim, "Tight End" included);
  4 training services; testimonial quote + author + "Viewer"; news date +
  title; 4 counters; subscribe heading (fix typo ok) + placeholder; footer
  widgets. All copy static (no backend).
- **Recreation decisions:** all photos → `https://picsum.photos/seed/
dugout-<n>/<w>/<h>` placeholders (hero, about, team, news, logos,
  avatars); icon fonts → lucide-react; Bootstrap + owl carousels → React:
  countdown = ticking component with target date (or static cells),
  carousels = `overflow-x-auto` snap rows or lightweight index state,
  counter = static numbers (count-up optional); skewed panels →
  `skew-x-[-40deg]` utility on a positioned layer (e.g. `before:` or a
  rotated div); Oswald + Lato via Google Fonts `<link>` in index.html; no
  assets copied.

## Implementation tasks (for the implementer stream)

1. [ ] Copy the simplest existing multi-section app (e.g. `apps/zest` or
       another Bootstrap-category app) as `apps/dugout`; rename package to
       `@free-react-templates/dugout` in package.json + vite config; `npm
 install` at root to register the workspace; set `public/CNAME` =
       `dugout.free.componentdock.com` and `homepage` accordingly.
2. [ ] `src/index.css` — `@theme` tokens: brand `#00bd56`, blue `#207dff`,
       navy `#171b21`, gold `#fdd043`, black `#000`, light `#f8f9fa`,
       muted-white/border rgba tokens; Oswald + Lato Google Fonts `<link>`
       in index.html (Oswald 400/600/700/900, Lato 300/400/700).
3. [ ] Components (one per section): `Navbar` (transparent→white scrolled,
       gold icon + uppercase brand, 5 links, dark Buy Ticket CTA) →
       `Hero` (bg photo + scrim, 80px 900 headline, intro, blue+green
       buttons) → `MatchStrip` (vs + 2 round logos + league + countdown +
       Buy Tickets) → `GameResult` (heading + skewed blue scoreboard,
       scores 12 vs 8) → `Highlights` (video block pulled up -8em, play
       button) → `GameSchedule` (heading + 6 scrollable cards) → `About`
       (photos + story + Watch Game) → `NextMatch` (heading + 4 cards) →
       `TeamSquad` (9 players, reference roles) → `Services` (4 cards +
       icons, bg-light) → `Testimonials` (skewed blue, ≥3 slides, arrows/
       dots) → `News` (3 cards: date + image + title) → `Stats` (4
       counters) → `Subscribe` (email form, validate + success state) →
       `Footer` (5 widgets + Component Dock link). Compose in `App.tsx` in
       this exact order.
4. [ ] Countdown: ticking timer (useEffect + setInterval, target date ~
       2026+; cells Days/Hours/Minutes/Seconds, 40px Oswald 600 white,
       divider borders). Carousels: overflow-x-auto + snap (no new deps).
5. [ ] Tests (TDD, 100% coverage): every section's render + content,
       navbar scroll state (mock scroll or test both variants), countdown
       ticking (fake timers), subscribe validation (invalid blocked,
       success shown), carousel arrows, footer Component Dock link,
       document title, main landmark.
6. [ ] Gate: `npm run verify:app dugout` (typecheck + lint + knip + fallow + 100% coverage tests + build), then PR `feat/template-dugout` →
       squash-merge immediately, then bookkeeping (`[x]` row + surge URL
       `https://dugout.free.componentdock.com` + `npm run readme:status`).
