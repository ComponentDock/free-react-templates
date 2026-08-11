# Kickoff (ColorLib Knights) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-kickoff`.

## Source mapping

- **ColorLib item:** "Knights" (TEMPLATES.md line 430 — note the item is
  duplicated at lines 1820 and 2837; implement line 430's entry).
- **Source URL:** https://colorlib.com/wp/template/knights/
- **Preview URL:** https://preview.colorlib.com/theme/knights/ — **HTTP 200,
  live** (confirmed 2026-08-11, ~41 KB HTML). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/knights/css/style.css
  (~79 KB) — tokens extracted. Site is Bootstrap 4 + jQuery (owl-carousel,
  waypoints + animateNumber, stellar, AOS, magnific-popup) — NOT Tailwind.
  JS: `js/main.js` (countdown + counter + carousel init).

## Reference research (done — do not redo)

### Screenshot (`knights-free-template.jpg`, 1200×946; verified via browser vision)

Bright yellow nav bar: "Knights" logo inside a dark slate square box, white
nav links, white "Buy Ticket" pill on the right. Full-width hero photo of
football players on a field at dusk, centered white headline "How long can you
last?" with a "Watch Games" play icon; below the hero a dark slate event bar:
team matchup (Knights Warrior vs Mighty Falcons, "FIFA Champions League
Semi-Final"), countdown timer and a gold "Buy Tickets" button; below that the
white "Game Report / Great Win In Final Game" block. Bold condensed athletic
sans (the site font is Nunito Sans 400/700/900). Matches the live DOM 1:1.

### Live DOM (primary reference — matches the screenshot 1:1)

Section order (verified by marker offsets in the HTML):

1. **Navbar** `ftco-navbar-light` — `.navbar-brand` bg #232931 (dark box),
   "Knights" 20px/400 with a weight-900 white span; links Home(active)/About/
   Games/Blog/Contact; CTA `nav-item.cta` "Buy Ticket" — white bg, 2px white
   border, radius 4px; hover → bg #232931. Mobile: hamburger collapse
   `#ftco-nav`.
2. **Hero** `div.hero-wrap.js-fullheight` (NOT a section) — bg
   `images/bg_1.jpg` cover + `.overlay` black 40%; `slider-text` right-aligned
   col-md-7: h1 "How long can you last?" (56px/700/white, lh 1.2; 40px
   mobile), p 20px rgba(255,255,255,.8), play circle `icon-video
popup-vimeo` (ion-ios-play) + span "Watch Games" (vimeo 45830194).
3. **Event bar** `section.ftco-section.ftco-no-pb.ftco-no-pt` →
   `.game-wrap-1.p-4` — bg #232931, radius 5px, `margin-top: -60px`, shadow
   `0 75px 94px -66px rgba(0,0,0,.66)`. 4 cols (lg 3/3/4/2):
   a) `.team-logo` two overlapping 60px circular images (`.img` + `.img-2`
   offset) + h3 white 18px "Knights Warrior" / "Mighty Falcons";
   b) h3.league "FIFA Champions League" rgba(255,255,255,.5) + span
   "Semi-Final" rgba(255,255,255,.8);
   c) `#timer` — 4 `.time` divs (days/hours/minutes/seconds), populated by
   `main.js` countdown;
   d) `btn btn-primary py-3` "Buy Tickets" (gold).
4. **Game Report** `section.ftco-section` — left col-lg-6:
   `.heading-section` subheading "Game Report" (16px uppercase ls 1px) + h2
   "Great Win In Final Game" (40px/900); `.scoreboard`: divider "Tue. Feb 21,
   2019; FIFA Champions League"; two `.sport-team` rows — logo circle +
   `h3.score.win` "3" + h4 "Knight Warrior" vs `h3.score.lost` "1" + "Mighty
   Falcons"; `btn btn-primary` "More Details". Right col-lg-6: tall
   `.img` (victory.jpg) with centered play circle + "Watch Highlights"
   (popup-vimeo).
5. **Game Schedule** `section.ftco-section.ftco-game-schedule.ftco-no-pt` —
   h2 "Game Schedule"; `.owl-carousel` of 6 cards, each: "Home @ Arena" +
   "Knight Warrior" + "April 17, 2018"; owl prev/next.
6. **Services** `section.ftco-section.services-section.bg-light` (#f8f9fa) —
   4 × `media.block-6.services`: `.icon` 60px glyph — `color: #ffb400;
background: linear-gradient(45deg,#6b75ff,#59b7ff); background-clip: text;
-webkit-text-fill-color: transparent` (flaticon glyph; use lucide) — h3
   18px + p gray: Senior Team / For Kids / Football Schools / Basic Tactics.
7. **Team squad** `section.ftco-section.ftco-team.img` (bg image) — h2 "Our
   Team Squad" (white, centered); `.carousel-team.owl-carousel` of
   `.team-wrap` cards: photo + h3 "David Scott" + position (Wide Receiver,
   Tight End, Defensive, Quarterback, Runing Back [sic], Center, Offensive
   Guard).
8. **About + counters** `section.ftco-section.ftco-no-pt.ftco-no-pb
.ftco-counter.img` (`id="section-counter"`) — h2 "About the Knights Team" +
   2 paragraphs; 4 columns: `strong.number` (data-number 100/10/20/80, start
   0, animateNumber 7s comma-separated on waypoint 95% offset) + label
   "Game Played" / "Coaches" / "Trophies" / "Members".
9. **Testimonial** `section.ftco-section.testimony-section` (bg_2.jpg +
   overlay) — subheading "Testimonial" + h2 "Happy Viewers" (white); owl
   carousel: avatar + h3 "Arthur Browner" + `.position` "Viewer" + quote.
10. **Blog** `section.ftco-section` — subheading "Blog" + h2 "Recent News";
    3 × `.blog-entry` cards: date block (big "08"/"07", "2019", "March"),
    thumb image, title "Why Lead Generation is Key for Business Growth",
    meta + read-more link.
11. **Subscribe** `section.ftco-subscribe.img` (bg_1.jpg + `.overlay`) —
    h2 "Subcribe to our upcoming match" (white, centered); `.subscribe-form`:
    email input (placeholder "Enter email address") + `input.submit` gold
    "Subscribe".
12. **Footer** `footer.ftco-footer.ftco-footer-2` — dark; col 1: brand
    "Knights" + blurb; col 2 "Have a Questions?": address "203 Fake St.
    Mountain View, San Francisco, California, USA" + phone "+2 392 3929 210"
    - email "info@yourdomain.com" (flaticon icons → lucide MapPin/Phone/
      Mail); link columns; copyright bar: "Copyright © <year> All rights
      reserved | This template is made with <heart> by Colorlib" → replace
      with original attribution.

## Design tokens (from style.css — computed)

| Token      | Value                     | Usage                                                                             |
| ---------- | ------------------------- | --------------------------------------------------------------------------------- |
| brand-gold | `#ffb400`                 | `.btn.btn-primary` bg/border, white-heading spans, services icon, black-btn hover |
| periwinkle | `#6b75ff`                 | services icon gradient start (60px, bg-clip text)                                 |
| sky-blue   | `#59b7ff`                 | services icon gradient end                                                        |
| slate      | `#232931`                 | event bar, navbar brand box, CTA hover, footer                                    |
| bg-light   | `#f8f9fa`                 | services section                                                                  |
| ink        | `#212529`                 | body text                                                                         |
| muted      | `#6c757d`                 | secondary text                                                                    |
| font       | Nunito Sans (400/700/900) | body + headings                                                                   |

Buttons: radius 3px, shadow `0 24px 36px -11px rgba(0,0,0,.09)`; primary =
gold bg + black text, hover black bg + white text. Hero h1 56px/700,
section h2 40px/900, subheading 16px uppercase ls 1px.

## Implementation task outline

1. Scaffold `apps/kickoff` (copy simplest existing app, rename package to
   `@free-react-templates/kickoff`), `npm install` at root (lockfile!),
   `injectUiSource()` in vite.config.ts, Nunito Sans `<link>` in index.html.
2. `src/index.css` — `@theme` tokens: `--color-brand: #ffb400`,
   `--color-periwinkle: #6b75ff`, `--color-sky: #59b7ff`,
   `--color-slate: #232931`, `--color-ink: #212529`, `--color-muted:
#6c757d`, `--font-sans: "Nunito Sans", ...`.
3. Components: `Navbar` (dark brand box + links + white CTA + mobile
   collapse), `Hero` (bg image + 40% overlay + headline + Watch Games),
   `EventBar` (dark floating bar: team logos + matchup + `useCountdown` +
   Buy Tickets), `GameReport` (scoreboard win/lost + More Details + Watch
   Highlights), `GameSchedule` (6 cards + carousel controls), `Services`
   (4 gradient-icon cards), `TeamSquad` (bg image + player carousel),
   `AboutCounters` (`useCountUp` on in-view; fake-timer tests), `Testimonial`
   (quote carousel), `RecentNews` (3 cards), `Subscribe` (email form with
   zod validation), `Footer`.
4. Carousels: simple prev/next state-based carousel (no new deps) or reuse
   an existing pattern from a shipped app.
5. Tests per section (scenario-style `it` blocks mirroring the spec Gherkin),
   100% coverage; `npm run verify:app -- kickoff`.
6. PR: `feat: implement Kickoff (ColorLib Knights)`, description must list
   source template, preview URL, tokens, and renames/placeholder decisions.

## Fidelity notes

- The DOM event bar (`game-wrap-1`) lives in its own section right after the
  hero and uses `margin-top: -60px` to overlap the hero — reproduce the
  overlap with a negative margin, not absolute positioning over the hero.
- Original team-name copy "Knight Warrior" / "Mighty Falcons" is fine to keep
  (paraphrase allowed, same kind of content).
- Countdown: pick a fixed future date (e.g. next season opener) so the timer
  always ticks; tests use fake timers.
- Counters animate once on scroll (waypoint 95% offset) — use IntersectionObserver.
- "Runing Back" is a typo in the original — use "Running Back".
- All images: `https://picsum.photos/seed/kickoff-<n>/<w>/<h>` (hero
  kickoff-1, team logos kickoff-2/3, victory kickoff-4, squad kickoff-5..,
  blog kickoff-9..11, avatar kickoff-12).
