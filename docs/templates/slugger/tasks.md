# Slugger (ColorLib Phoenix) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-slugger/` is the claim marker —
> implementers start here.

## Design notes (replication findings)

- **Original:** ColorLib "Phoenix" — baseball club / sports match-center
  website template (source: https://colorlib.com/wp/template/phoenix/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/phoenix/ (HTTP
  200, full rendered DOM + `css/style.css` (86KB) + Bootstrap 4 + Owl
  Carousel + AOS + Magnific Popup + datepicker/timepicker + Flaticon +
  Icomoon + Ionicons + countdown plugin extracted 2026-08-12 during prep).
  Screenshot `phoenix-free-template.jpg` (1200×946, AVIF) viewed in browser:
  dark navbar over a baseball-photo hero, white uppercase headline "FIELDRUN
  BASEBALL CLUB", blue "Watch match" + green "Get ticket" buttons, dark match
  strip (Phoenix vs Jacksonville, "BASEBALL CHAMPIONS LEAGUE / Semi-Final",
  countdown 171d 11h 10m 39s, green "Buy Tickets"), yellow phoenix logo mark
  - "PHOENIX" wordmark.
- **Visual design:** dark, sporty, athletic baseball club site — dark header
  over bright baseball hero photo, big white uppercase Oswald headline, blue
  - green CTA buttons, dark match strip with two circular team logos and a
    large countdown, green accents (buttons, links, icons, dots) on white/light
    canvas, skewed diagonal blue→green "slash" band behind scoreboard/about,
    dark team-squad band, light services row, white blog cards with date
    blocks, black footer.
- **Structure (1:1, section order):**
  1. Header (`nav.ftco-navbar-light`, transparent, `top: 20px`, over hero):
     logo left — yellow icon (`#fdd043`, 40px) + "Phoenix" wordmark with dark
     mark (`#171b21`) behind; centered nav Home / About / Games / Blog /
     Contact (Oswald uppercase); right dark `.nav-item.cta` "Buy Ticket" pill
     (bg `#171b21`, white, radius 4px, padding .8rem 18px). `.scrolled` →
     solid white. Mobile: hamburger toggler, same links.
  2. Hero (`.hero-wrap.js-fullheight`, bg `images/bg_1.jpg` cover + overlay):
     left col — h1 "Fieldrun Baseball Club" (80px white 900 uppercase Oswald,
     lh 1.2), Duden paragraph, `.btn.btn-secondary` "Watch match" (bg
     `#207dff`) + `.btn.btn-primary` "Get ticket" (bg `#00bd56`, hover black).
  3. Match strip (`.game-wrap-1`, bg `#171b21`, padding 30px, full-bleed):
     team logo + h3 "Phoenix" | `.league` "Baseball Champions League" (24px
     rgba(255,255,255,.5) uppercase) + span "Semi-Final" | `#timer` countdown
     (4 `.time` blocks: 40px 600 white Oswald, 25% width, left border
     rgba(255,255,255,.1)) | green "Buy Tickets" button.
  4. Scoreboard (`.scoreboard` on `.slash`): h2 "Latest Game Result" (50px 700
     uppercase; accent word in green span); row — logo + h4 "Phoenix", score
     h3 "12" (`.score` 60px 800), "vs" divider, score "8", logo + h4 "Mighty
     Falcons"; "Game Report" link. Slash: `:before` skew -40deg `#207dff`
     (left half) + `:after` `#00bd56` (right half).
  5. Game Schedule (`.ftco-game-schedule`): h2 "Game Schedule";
     `.carousel-game-schedule` owl carousel, 6 `.game-sched` cards (white, 1px
     rgba(0,0,0,.1) border, padding 20px 0, shadow 0 42px 29px -31px
     rgba(0,0,0,.05)): team logos + h3 18px 700, divider, "Home @ Arena",
     "June 7, 2018", "Watch Game"; green owl dots.
  6. Highlights (`.ftco-highlights`): `.video-wrap` bg `images/video.jpg`,
     height 400px, radius 5px, shadow 0 -18px 93px -56px rgba(0,0,0,.59),
     centered play button.
  7. About (`.ftco-about.img`, bg `images/bg_2.jpg` + overlay + slash
     `#00bd56`/`#207dff` opacity .8): h2 "About the Phoenix" (white heading)
     - 3 paragraphs + "Watch Game" link with arrow; right image col.
  8. Next Match (`.ftco-game-schedule`): h2 "Next Match"; left `.img-game`;
     right 4 `.game-sched` cards: "Home @ Arena - June 7, 2018", "vs",
     Phoenix / Jacksonville, "Watch Game".
  9. Team Squad (`.ftco-team.img` + overlay, slash `#207dff` right /
     `#171b21` left): h2 "Our Team **Squad**" (green span) + paragraph;
     `.carousel-team` owl carousel, 9 `.team-wrap` cards: photo, h3 "David
     Scott" (22px white 800), span position (Catcher, Tight End, Pitcher,
     First Baseman, Second Baseman, Third Baseman, Right Fielder, Center
     Fielder, Left Fielder); green owl dots.
  10. Services (`.services-section.bg-light`): 4 `.block-6.services` media
      blocks: green icon (`#00bd56`), h3 22px 700 uppercase (Baseball
      Training, Softball Training, Basic Defense, Basic Tactics) + Duden
      paragraph.
  11. Testimonials (`.testimony-section.slash` + overlay `#171b21`): h2
      "Happy Viewers"; `.carousel-testimony` owl carousel, 5 `.testimony-wrap`
      cards: avatar `.user-img`, green quote icon, Duden quote, name "Jason
      Smith" (white Oswald), role "Viewer".
  12. Recent News (`.ftco-section`): h2 "Recent News"; 4 `.blog-entry` cards:
      image, date block (29 / May / 2019), h3 "Why Lead Generation is Key for
      Business Growth" (20px 600), snippet, "More Details" link (hover green).
  13. Counters (`.section-counter`): 4 `.counter-wrap` > `.block-18
text-center`: animated count-up number + label — Game Played, Coaches,
      Trophies, Members.
  14. Subscribe (`.ftco-subscribe.img` + overlay): h2 "Subcribe to our
      upcoming match" + text + form: email input (height 70px, white, radius
      5px 0 0 5px) + `.submit` (bg `#00bd56`, black text, radius 0 5px 5px 0).
  15. Footer (`.ftco-footer`, bg `#000000`, padding 7em 0): widgets —
      "Phoenix" (logo + about + social icons, hover green), "Services"
      (Senior Team, For Kids, Reviews, FAQs), "About Us" (Our Story, Meet the
      team, Coach), "Company" (About Us, Press, Contact, Careers), "Have a
      Questions?" (address "203 Fake St. Mountain View, San Francisco,
      California, USA", phone "+2 392 3929 210", email "info@yourdomain.com");
      bottom row: copyright "Copyright ©<year> All rights reserved | This
      template is made with ♥ by Colorlib".

## Design tokens

- Primary **#00bd56** (green) — `.btn.btn-primary` ("Get ticket", "Buy
  Tickets"), links, nav hover/active, heading accent span, `.slash:after`,
  owl-dot active, services icons, subscribe submit, footer social hover,
  about slash side, quote icon.
- Secondary **#207dff** (blue) — `.btn.btn-secondary` ("Watch match"),
  `.slash:before`, team/about slash sides, pagination.
- Dark **#171b21** — "Buy Ticket" pill, navbar-brand mark, `.game-wrap-1`
  strip, team slash side, testimony overlay.
- Yellow **#fdd043** — logo icon.
- Footer **#000000**; hero/about/subscribe overlays rgba(0,0,0,…); `.game-sched`
  cards white with rgba(0,0,0,.1) border + soft shadow; `.league` text
  rgba(255,255,255,.5); body text #999999.
- Fonts: **Oswald** (headings, nav, countdown, names) + **Lato** (body 16px
  lh 1.8) via Google Fonts `<link>` in `index.html`.
- Type scale: hero h1 80px/900; section h2 50px/700 uppercase; score 60px/800;
  countdown 40px/600; team name 22px/800; service h3 22px/700 uppercase; blog
  heading 20px/600.
- Buttons: green primary (hover → black), blue secondary #207dff, dark CTA
  pill radius 4px, subscribe pill (input radius 5px 0 0 5px / button
  0 5px 5px 0).

## Implementation tasks (for the implementer stream)

- [ ] Copy the simplest existing app (e.g. `apps/resume`), rename package to
      `@free-react-templates/slugger`; run root `npm install` and verify the
      lockfile registers the workspace (grep package-lock.json).
- [ ] `src/index.css`: `@theme` tokens — `--color-brand: #00bd56`,
      `--color-accent: #207dff`, `--color-dark: #171b21`,
      `--color-gold: #fdd043`, fonts Oswald/Lato.
- [ ] `index.html`: Google Fonts link (Oswald 400/600/700 + Lato 300/400/700),
      title "Slugger — Baseball Club Template".
- [ ] Components (colocated tests, 100% coverage):
      Navbar (transparent → solid on scroll, hamburger), Hero, MatchStrip
      (live countdown), Scoreboard (slash bg), GameSchedule (auto carousel +
      dots), Highlights, About, NextMatch, TeamSquad (carousel),
      Services, Testimonials (carousel), News, Counters (count-up), Subscribe
      (form), Footer.
- [ ] Images: picsum placeholders `picsum.photos/seed/slugger-<n>/<w>/<h>` —
      hero bg, match strip team logos, video wrap, about bg, squad photos,
      blog thumbs, avatars.
- [ ] Icons: lucide-react (Play, Calendar, MapPin, Phone, Mail, ArrowRight,
      socials, Menu/X).
- [ ] `App.tsx` composes sections in the 1:1 order above; `<main>` landmark.
- [ ] Verify: `npm run verify:app slugger` (or `scripts/verify-app.sh
    slugger`) — typecheck + lint + 100% coverage tests + build.
- [ ] PR: `feat: Slugger — baseball club template (ColorLib Phoenix)`;
      merge immediately; then `[~]` → `[x]` + surge URL + homepage +
      `npm run readme:status`; push.
