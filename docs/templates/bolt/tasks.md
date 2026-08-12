# Bolt (ColorLib Xgym) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-bolt`.

## Design notes (replication findings)

- **Original:** ColorLib "Xgym" — free Bootstrap gym / fitness club website
  template (source: https://colorlib.com/wp/template/xgym/). TEMPLATES.md
  has THREE copies of this item (lines 539, 1237, 1887 — mark EVERY copy
  `[x]` when done).
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/xgym/`
  (HTTP 200, 16.7 KB; master stylesheet `css/style.css` ~20.7 KB, fully
  extracted). Libs: bootstrap, font-awesome (footer social),
  owl.carousel, flaticon (feature icons), slicknav (mobile menu),
  circle-progress (in main.js; no circle-progress elements on the index
  page). Google Font **PT Sans** (inlined @font-face in the head).
  Cross-checked with the TEMPLATES.md screenshot (`xgym-free-template.jpg`
  1200×946, browser-viewed) — the screenshot shows only the TOP half
  (header, hero, feature icons); everything below the fold was verified
  from DOM + CSS. Demo brands itself "X GYM"; recreation uses the NEW name
  **Bolt** (brand neon yellow #fcff18).
- **Visual design (DOM + CSS tokens + screenshot):** electric
  yellow-on-dark gym theme. Header over the hero: "X GYM" logotype
  (yellow block), centered nav Home / About Us / Classes / News / Contact,
  right yellow address box ("1525 Amazing Lane, Los Angeles, CA" +
  location pin). Hero: dark high-contrast photo of a muscular athlete
  doing an overhead barbell lift; centered huge white headline "Physical
  activity / enhances positive energy!" (96px, line-height 1; span
  "positive energy!" in neon yellow #fcff18), yellow "Join the Gym" button.
  Then: white features section (heading "The real workout starts when you
  want to stop." with "workout" on a yellow highlight + 3 circular icon
  cards: dumbbell, stopwatch, stretching figure), dark discount band
  ("Pay now and get a 25% Discount" + 3 check-list lines + "Become a
  Member"), light #f6f9fa milestones (4 yellow number chips: 1374 Happy
  Clients / 356 Strong Bodies / 57k IG Followers / 24/7 Working Hours),
  "Meet the Trainers" (4 circular photos + names + bios: Michael Smith,
  Jessica Black, James Brown, Paula Carlton), BMI section on #f6f9fa with a
  DARK #242424 calculator panel (weight + height inputs, Calculate,
  read-only result) beside a background photo, dark newsletter band
  ("Subscribe to newsletter" + "Your e-mail here" input + Subscribe), dark
  footer (Location / Subscriptions / E-mail / Social Media widgets +
  copyright). Demo copy = lorem — paraphrase into gym copy.
- **Structure (1:1, section order):**
  1. Preloader (`#preloder` + `.loader`) — optional; may be dropped in
     React.
  2. Header (`header.header-section`): `a.site-logo` (logo.png, "X GYM"
     mark) left; `ul.main-menu`: Home, About Us, Classes, News, Contact
     (18–20px/700 #353535, padding 2–5px 13px; `.active`/hover bg
     #fcff18); `div.header-right` → `div.hr-box` (bg #fcff18, width 294px
     / 205–240px responsive, padding 31px 52px): location-pin icon +
     `h6` "1525 Amazing Lane, Los Angeles, CA". Mobile: slicknav → simple
     hamburger + slide-down menu.
  3. Hero (`section.hero-section.set-bg`, data-setbg `img/hero-bg.jpg`):
     `div.hero-text` centered (padding 200px top / 180px bottom): `h2`
     "Physical activity" + `h2` "enhances `<span>positive energy!</span>`"
     (96px → 80 → 60 → 48 responsive, #fff, line-height 1; span
     #fcff18) + `a.site-btn` "Join the Gym".
  4. Features (`section.feature-section`, padding 113px 0 63px):
     centered `div.section-title`: `h2` 48px "The real workout starts when
     you want to stop." (`span` around "workout" → bg #fcff18, padding
     0 4px); 3 × `div.icon-box-item` (col-md-4): `div.ib-icon` — 60px
     icon, border-radius 50%, bg #f6f9fa, hover bg #fcff18 (flaticon
     glyphs → lucide: dumbbell, stopwatch/timer, stretching figure) + `h4`
     title + lorem blurb. Demo repeats "Intense Workouts" 3× — vary the
     three titles, keep the same kind of content.
  5. Discount band (`section.add-section.set-bg`, data-setbg
     `img/add-bg.jpg`, padding 110px 0 103px): `div.col-lg-7.ml-auto` →
     `div.add-text` (padding-left 77px): `h2` 60px #fff "Pay now and get a
     25% `<span>Discount</span>`" (span #fcff18) + `ul` of 3 lines, each
     check-icon (check-icon.png → lucide Check) + lorem (#fff) +
     `a.site-btn` "Become a Member".
  6. Milestones (`section.milestones-section`, bg #f6f9fa, padding 59px 0
     5px): 4 × `div.milestone` (col-lg-3): `h2` number on #fcff18 chip
     (padding 4px 11px) + `p` 18px caption: 1374 Happy Clients / 356
     Strong Bodies / 57k IG Followers / 24/7 Working Hours.
  7. Trainers (`section.trainers-section`, padding 121px 0 75px):
     centered `div.section-title` "Meet the Trainers" (48px); 4 ×
     `div.trainer-item` (col-lg-3 col-sm-6, padding 0 5px):
     `div.trainer-pic` (img, border-radius 50%) + `h4` name + `p` lorem
     bio: Michael Smith, Jessica Black, James Brown, Paula Carlton
     (trainers/1..4.jpg → seeded picsum portraits).
  8. BMI (`section.bmi-section`, bg #f6f9fa): `div.bmi-bg.set-bg`
     (data-setbg `img/bmi-bg.jpg`, absolute side photo) + container row:
     left section-title "Calculate your BMI" (48px) + `div.bmi-calculator-
warp` (col-lg-7 ml-auto, bg #242424, padding 48px 53px /
     48px 20px responsive): `div.bmi-calculator` row — `input#bmi-weight`
     (col-sm-6, placeholder weight), `input#bmi-hight` (col-sm-6,
     placeholder height — source's typo, keep or fix), `button#bmi-submit
.site-btn` "Calculate" (col-sm-6), `input#bmi-result` (col-sm-6,
     read-only). Inputs 16px #505050, padding 0 24px, no border. Small
     italic white `p` note below panel. BMI formula (from main.js):
     `weight / (height * height)`, round to 2 decimals, then label:
     <18.5 Underweight, 18.5–25 Normal, 25–30 Obese, >30 Overweight —
     the source's upper labels look SWAPPED vs the standard
     classification; implement the STANDARD labels (25–29.9 Overweight,
     30+ Obese) and note the deviation in the PR (or mirror the source
     exactly — pick one, document it).
  9. Newsletter (`section.newsletter-section.set-bg`, data-setbg
     `img/newsletter-bg.jpg`, padding 84px 0): row — left col-lg-6
     `div.section-title.text-white.mb-0` "Subscribe to
     `<span>newsletter</span>`" (span #fcff18); right col-lg-6
     `form.newsletter-form`: `input` placeholder "Your e-mail here"
     (padding 10px 35px, no border) + `button.site-btn` "Subscribe".
  10. Footer (`footer.footer-section.set-bg`, data-setbg
      `img/footer-bg.jpg`, padding 106px 0 23px): 4 × `div.footer-widget`
      (col-lg-3): (a) Location — `h4` #fff + icon + "1525 Awesome Lane,
      Los Angeles, CA" (source says "Awesome" here vs "Amazing" in the
      header — pick one, e.g. "Awesome"); (b) Subscriptions — "+1
      (603)535-4592" + "+1 (603)535-4556"; (c) E-mail —
      "Contact@xgym.com" + "www.xgym.com" (rename domain to bolt-
      flavored, e.g. contact@bolt.fit / www.bolt.fit); (d) Social Media —
      `div.social-links` pinterest/facebook/twitter/dribbble (fa → inline
      SVG brand icons; lucide has none). Widget body text #b5babc lh 1.8;
      social #d1d1d1 padding 9px 5px. Bottom row: `div.copyright` — "©
      <year> All rights reserved | This template is made with ♥ by
      ColorLib" → REPLACE the ColorLib credit with the mandated Component
      Dock link (https://www.componentdock.com/).
- **Design tokens (from `css/style.css`):**
  - Brand: **#fcff18** (neon yellow — active nav, hero span, discount
    span, milestone chips, section-title span bg, icon hover, site-btn
    fill, hr-box, newsletter span). Dark **#242424** (BMI panel, sb-dark
    button, text on yellow). Text-on-yellow **#353535** (nav, buttons).
    Light bg **#f6f9fa** (milestones, BMI, icon circles). Footer text
    **#b5babc**; social **#d1d1d1**; input text **#505050**.
  - Font: **PT Sans** (400/700) via Google Fonts
    (`https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap`).
  - Buttons: `.site-btn` 18px/700, padding 20px 40px, bg #fcff18, color
    #353535, no radius; `.sb-dark` bg #242424 / text #fcff18; `.sb-line`
    transparent + 2px #242424 border; BMI controls padding 0 24px.
  - Section titles: h2 48px; `span` bg #fcff18 padding 0 4px.
  - Rhythm: feature 113px/63px, milestones 59px/5px, trainers
    121px/75px, add 110px/103px, newsletter 84px, footer 106px/23px.
  - Hero: padding 200px/180px; h2 96px white line-height 1.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/bolt-<n>/<w>/<h>`); 5 background photos → seeded
  picsum + dark overlay where text is white; trainer portraits → seeded
  picsum (SCREEN seeds: person portraits needed — see seed-screening
  method in the replication skill; candidates from the skill: 1027, 64,
  823, 996); icons → lucide-react + inline SVG brand icons for social;
  PT Sans via Google Fonts; no owl/slicknav/circle-progress deps (no
  carousels on this page; hamburger via state; BMI + newsletter forms via
  React state).

## Implementation task outline

1. Copy the simplest existing app (e.g. `apps/sweatly` or another recent
   one) → `apps/bolt`; rename package to `@free-react-templates/bolt`;
   run `npm install` at repo root; register `injectUiSource()` in
   `vite.config.ts`.
2. `@theme` tokens in `src/index.css`: brand neon yellow #fcff18 + dark
   #242424 + #353535 + #f6f9fa + #b5babc + #d1d1d1 + #505050; fonts PT
   Sans in `index.html`.
3. Components (src/components/): `Header` (logo + 5 links + yellow
   address box + hamburger/mobile menu), `Hero`, `Features`, `DiscountBand`,
   `Milestones`, `Trainers`, `BmiCalculator`, `Newsletter`, `Footer`
   (4 widgets + social SVG + Component Dock link).
4. `src/App.tsx` composes sections in demo order; document title
   "Bolt — Fitness Template".
5. Tests FIRST (red) per section spec scenarios; then implementation;
   100% coverage (lines/functions/branches/statements).
6. Verify: `scripts/verify-app.sh bolt`; `npm run spec:validate`.
7. PR: `feat/template-bolt` → squash-merge to main; PR description
   includes source template, preview URL, design tokens, what differs
   (renames, placeholder images, BMI label fix, persona copy).
