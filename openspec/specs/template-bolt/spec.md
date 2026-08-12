# Template: Bolt (Gym / Fitness Template)

## Purpose

Bolt is a single-page gym / fitness-club website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Xgym" website template design
(source: https://colorlib.com/wp/template/xgym/), built under a DIFFERENT
name (Bolt — electric energy, matching the neon-yellow-on-dark branding) per
the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Xgym" — free Bootstrap gym / fitness club website
  template. TEMPLATES.md has THREE copies of this item (lines 539, 1237, and
  1887 — mark EVERY copy `[x]` when done).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/xgym/`
  (HTTP 200, 16.7 KB HTML; page title "X Gym - Fitness HTML Template").
  Master stylesheet `css/style.css` (~20.7 KB, fully extracted for tokens);
  libs: bootstrap, font-awesome (social icons), owl.carousel,
  flaticon (feature icons), slicknav (mobile hamburger menu),
  circle-progress (referenced by main.js). Google Font **PT Sans** (loaded
  via an inlined @font-face block in the head). Cross-checked against the
  TEMPLATES.md screenshot (`xgym-free-template.jpg`, 1200×946, viewed in
  browser — the screenshot only shows the top half; the lower sections
  (discount band, milestones, trainers, BMI, newsletter, footer) are
  verified from DOM + CSS). The demo brands itself "X GYM"; the recreation
  uses the NEW name **Bolt** (brand neon yellow #fcff18).
- **Visual design (from DOM + CSS tokens + screenshot):** electric
  yellow-on-dark energy theme. Header over the hero: "X GYM" logotype
  (yellow block), centered nav (Home / About Us / Classes / News / Contact),
  and a yellow address box right ("1525 Amazing Lane, Los Angeles, CA" with
  a location pin). Hero: dark high-contrast photo of a muscular athlete
  doing an overhead barbell lift; centered huge white headline
  "Physical activity / enhances positive energy!" with "positive energy!"
  in neon yellow, and a yellow "Join the Gym" button. Below: white features
  section (heading "The real workout starts when you want to stop." with
  "workout" yellow-highlighted + 3 circular icon cards — dumbbell,
  stopwatch, stretching figure), a dark discount band (background photo,
  "Pay now and get a 25% Discount", 3 check-list lines, "Become a Member"
  yellow button), a light `#f6f9fa` milestones band (4 yellow number chips:
  1374 / 356 / 57k / 24/7), "Meet the Trainers" (4 circular trainer photos
  with names + bios), a light BMI section with a DARK `#242424` calculator
  panel (weight + height inputs, Calculate button, result field) beside a
  background photo, a dark newsletter band ("Subscribe to newsletter" +
  email form), and a dark footer (Location / Subscriptions / E-mail /
  Social Media widgets + copyright). Demo copy is placeholder lorem —
  paraphrase into gym copy, keep the same kind of content.
- **Section order (1:1, from live demo DOM):**
  1. Preloader (`div#preloder` + `div.loader`) — optional in React; may be
     dropped (page-level concern, not a section).
  2. Header (`header.header-section`): `a.site-logo` (logo.png — "X GYM"
     mark) left; `ul.main-menu` nav — Home, About Us, Classes, News,
     Contact (18–20px/700 #353535, active/hover bg #fcff18); right
     `div.header-right` → `div.hr-box` (bg #fcff18, ~294px): location-pin
     icon + `h6` "1525 Amazing Lane, Los Angeles, CA". Mobile: slicknav
     hamburger → slide-down menu (recreate with a simple state toggle).
  3. Hero (`section.hero-section.set-bg`, data-setbg `img/hero-bg.jpg` —
     dark overhead-barbell athlete photo): `div.hero-text` centered,
     padding-top 200px / bottom 180px: TWO `h2` lines — "Physical activity"
     and "enhances `<span>positive energy!</span>`" (96px → 80px → 60px →
     48px responsive, white, line-height 1, span #fcff18); `a.site-btn`
     "Join the Gym" (yellow).
  4. Features (`section.feature-section`, padding 113px 0 63px): centered
     `div.section-title` — `h2` "The real workout starts when you want to
     stop." (48px; `<span>` around "workout" gets a #fcff18 highlight bg,
     padding 0 4px); 3 × `div.icon-box-item` (col-md-4): `div.ib-icon`
     (border-radius 50%, bg #f6f9fa, 60px icon glyph, hover bg #fcff18 —
     icons are flaticon: dumbbell, stopwatch/timer, stretching figure →
     lucide-react) + `h4` "Intense Workouts" + lorem blurb (the demo
     repeats the same heading+text 3× — vary the three titles while keeping
     the same kind of content).
  5. Discount band (`section.add-section.set-bg`, data-setbg
     `img/add-bg.jpg` — dark photo): `div.col-lg-7.ml-auto` → `div.add-text`
     (padding-left 77px, text on the RIGHT 7/12): `h2` "Pay now and get a
     25% `<span>Discount</span>`" (60px, white, span #fcff18); `ul` of 3
     checklist lines each with a check icon (check-icon.png → lucide
     Check) + lorem text (white); `a.site-btn` "Become a Member" (yellow).
  6. Milestones (`section.milestones-section`, bg #f6f9fa, padding 59px 0
     5px): 4 × `div.milestone` (col-lg-3): `h2` number on a #fcff18 chip
     (padding 4px 11px) + `p` 18px caption: **1374 Happy Clients, 356
     Strong Bodies, 57k IG Followers, 24/7 Working Hours**.
  7. Trainers (`section.trainers-section`, padding 121px 0 75px): centered
     `div.section-title` "Meet the Trainers" (48px); 4 × `div.trainer-item`
     (col-lg-3 col-sm-6, padding 0 5px): `div.trainer-pic` (img,
     border-radius 50%, trainers/1..4.jpg) + `h4` name + `p` lorem bio:
     **Michael Smith, Jessica Black, James Brown, Paula Carlton**.
  8. BMI (`section.bmi-section`, bg #f6f9fa): `div.bmi-bg.set-bg`
     (data-setbg `img/bmi-bg.jpg`, absolute-positioned side photo) +
     container row: left `div.section-title` "Calculate your BMI" (48px);
     `div.bmi-calculator-warp` (col-lg-7 ml-auto, bg #242424, padding
     48px 53px): `div.bmi-calculator` — `input#bmi-weight` (col-sm-6,
     placeholder weight, 16px #505050) + `input#bmi-hight` (col-sm-6,
     placeholder height, source's typo) + `button#bmi-submit.site-btn`
     "Calculate" + `input#bmi-result` (read-only result); small italic
     white note `p` under the panel. Logic (from main.js):
     `result = weight / (height * height)`, rounded to 2 decimals, then
     labeled: <18.5 "Underweight", 18.5–25 "Normal", 25–30 "Obese", >30
     "Overweight" — NOTE the source's labels for the upper two bands look
     swapped vs the standard classification (25–29.9 overweight, 30+
     obese); implement the STANDARD labels and note the deviation in the
     PR, or mirror the source exactly — either is defensible, pick one and
     document it.
  9. Newsletter (`section.newsletter-section.set-bg`, data-setbg
     `img/newsletter-bg.jpg` — dark photo, padding 84px 0): row — left
     col-lg-6 `div.section-title.text-white.mb-0` "Subscribe to
     `<span>newsletter</span>`" (span #fcff18); right col-lg-6
     `form.newsletter-form`: `input` placeholder "Your e-mail here"
     (padding 10px 35px, no border) + `button.site-btn` "Subscribe".
  10. Footer (`footer.footer-section.set-bg`, data-setbg
      `img/footer-bg.jpg` — dark photo, padding 106px 0 23px): 4 ×
      `div.footer-widget` (col-lg-3): (a) Location — `h4` white + icon +
      "1525 Awesome Lane, Los Angeles, CA" (note: source uses "Awesome"
      here vs "Amazing" in the header — pick one, e.g. "Awesome"); (b)
      Subscriptions — "+1 (603)535-4592 / +1 (603)535-4556"; (c) E-mail —
      "Contact@xgym.com / www.xgym.com"; (d) Social Media —
      `div.social-links` with pinterest / facebook / twitter / dribbble
      icons (font-awesome → inline SVG brand icons, lucide has none).
      Widget body text #b5babc, line-height 1.8; social links #d1d1d1.
      Bottom row: `div.copyright` (13px/700, white, "© <year> All rights
      reserved | This template is made with ♥ by ColorLib") — the ColorLib
      credit is REPLACED by the mandated Component Dock link
      (https://www.componentdock.com/) per repo rules.
- **Design tokens extracted from `css/style.css` + DOM:**
  - Brand color: **#fcff18** (neon yellow — active nav, hero h2 span, add
    "Discount" span, milestone number chips, section-title span highlight,
    icon hover, site-btn fill, hr-box address block, newsletter span).
  - Dark: **#242424** (BMI calculator panel, sb-dark button variant, dark
    text on yellow); text-on-yellow **#353535** (nav links, site-btn text);
    light section bg **#f6f9fa** (milestones, BMI section, icon circles);
    footer body text **#b5babc**, social **#d1d1d1**, input text **#505050**,
    white text on dark bands.
  - Font: **PT Sans**, sans-serif (single family; loaded via inlined
    @font-face in the demo — use Google Fonts
    `https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap`
    in index.html).
  - Buttons: `.site-btn` — 18px, weight 700, padding 20px 40px,
    background #fcff18, color #353535, no border, no radius; variants:
    `.sb-dark` (bg #242424, text #fcff18), `.sb-line` (transparent, 2px
    solid #242424, text #242424). BMI inputs/button padding 0 24px.
  - Section titles: `.section-title h2` 48px (43/36px at breakpoints);
    `h2 span` gets bg #fcff18 + padding 0 4px.
  - Milestones: number `h2` on #fcff18 chip (padding 4px 11px), caption
    `p` 18px; section bg #f6f9fa.
  - Trainers: `.trainer-pic` border-radius 50% (circular photos).
  - Hero: `.hero-text` padding 200px top / 180px bottom; h2 96px →
    48px, white, line-height 1; span #fcff18.
  - Footer: `.footer-widget h4` white; `.fw-info-box p` #b5babc lh 1.8;
    `.social-links a` #d1d1d1, padding 9px 5px; `.copyright` 13px/700
    white, padding 30px 15px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/bolt-<n>/<w>/<h>`); the 5 `data-setbg` background
  photos (hero-bg.jpg, add-bg.jpg, bmi-bg.jpg, newsletter-bg.jpg,
  footer-bg.jpg) → seeded picsum backgrounds with a dark overlay where the
  demo text is white; trainer portraits → seeded picsum (screen the seeds
  per the seed-screening method — need person/subject-appropriate photos);
  icons → lucide-react (dumbbell, timer/stopwatch, person-stretching
  equivalents, MapPin, Check, Menu/X) + inline SVG brand icons for the
  footer social row (lucide removed brand icons); PT Sans via Google Fonts;
  slicknav mobile menu + owl carousel NOT needed (no carousels on this
  page) — simple hamburger state toggle; BMI calculator + newsletter form
  implemented with React state (no deps); newsletter/other form submits may
  swap to a success message per repo conventions.

Bolt lives in `apps/bolt` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Header with nav and address box

The system SHALL render a header with the site logo "Bolt", five anchor
links, a yellow address box, and a hamburger trigger on small screens that
opens a mobile menu.

#### Scenario: Header content

- **GIVEN** the Bolt page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Bolt" (with a fitness
  logomark) on the left
- **AND** the header SHALL show links Home, About Us, Classes, News, and
  Contact
- **AND** the header SHALL show the address "1525 Awesome Lane, Los
  Angeles, CA" with a location-pin icon in a yellow box
- **AND** on small screens the header SHALL show a hamburger trigger button
  (aria-label "Open menu")

#### Scenario: Open and close the mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user presses the hamburger trigger
- **THEN** a mobile menu SHALL appear with the same five anchor links
- **WHEN** the user presses the close control or the Escape key
- **THEN** the mobile menu SHALL close

### Requirement: Hero section

The system SHALL render a hero with a dark background photo, a two-line
white headline with a neon-yellow highlighted phrase, and a yellow CTA
button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "Physical activity" followed by
  "enhances positive energy!" in large white type with "positive energy!"
  highlighted in the brand yellow
- **AND** it SHALL show a "Join the Gym" button filled with the brand
  yellow

### Requirement: Features section

The system SHALL render a features section with a highlighted heading and
three circular icon cards.

#### Scenario: Features section

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "The real workout starts when you
  want to stop." with "workout" highlighted on a yellow background
- **AND** it SHALL show 3 feature cards, each with a circular icon (light
  background, turning yellow on hover), a title, and a short blurb

### Requirement: Discount band

The system SHALL render a dark full-width band with a discount heading, a
three-item checklist, and a "Become a Member" button.

#### Scenario: Discount band content

- **GIVEN** the page is rendered
- **WHEN** the discount band is displayed
- **THEN** it SHALL show the heading "Pay now and get a 25% Discount" in
  white with "Discount" in the brand yellow
- **AND** it SHALL show 3 checklist lines, each with a check icon and text
- **AND** it SHALL show a "Become a Member" yellow button

### Requirement: Milestones

The system SHALL render a light-background milestones band with four yellow
number chips and captions.

#### Scenario: Milestone stats

- **GIVEN** the page is rendered
- **WHEN** the milestones band is displayed
- **THEN** it SHALL show 4 stats, each a number on a yellow chip with a
  caption: 1374 Happy Clients, 356 Strong Bodies, 57k IG Followers, and
  24/7 Working Hours

### Requirement: Trainers section

The system SHALL render a "Meet the Trainers" section with four cards, each
with a circular photo, a name, and a bio.

#### Scenario: Trainer cards

- **GIVEN** the page is rendered
- **WHEN** the trainers section is displayed
- **THEN** it SHALL show the heading "Meet the Trainers"
- **AND** it SHALL show 4 trainer cards
- **AND** each card SHALL show a circular photo image, a name (e.g.
  Michael Smith, Jessica Black, James Brown, Paula Carlton), and a short
  bio

### Requirement: BMI calculator

The system SHALL render a BMI section with a dark calculator panel holding
weight and height inputs, a Calculate button, and a read-only result field,
and SHALL compute the BMI on submit.

#### Scenario: BMI calculation

- **GIVEN** the BMI section is displayed
- **WHEN** the user enters a weight in kilograms and a height in meters and
  presses Calculate
- **THEN** the result field SHALL show the BMI rounded to 2 decimals with a
  category label ("Underweight" below 18.5, "Normal" 18.5–25,
  "Overweight" 25–30, "Obese" above 30 — standard labels; the source's
  upper two labels look swapped, document any deviation in the PR)

### Requirement: Newsletter section

The system SHALL render a dark newsletter band with a "Subscribe to
newsletter" heading and an email input with a Subscribe button.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter band is displayed
- **THEN** it SHALL show the heading "Subscribe to newsletter" in white
  with "newsletter" in the brand yellow
- **AND** it SHALL show an email input (placeholder "Your e-mail here")
  and a yellow "Subscribe" button

### Requirement: Footer

The system SHALL render a dark footer with four widgets (Location,
Subscriptions, E-mail, Social Media) and a copyright line linking to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a Location widget with the address
- **AND** it SHALL show a Subscriptions widget with two phone numbers
- **AND** it SHALL show an E-mail widget with an email address and a
  website
- **AND** it SHALL show a Social Media widget with four social icons
- **AND** it SHALL show a copyright line with a link to
  https://www.componentdock.com/ ("Component Dock")

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Bolt app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Bolt — Fitness Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh bolt` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (header, hero, features, discount
      band, milestones, trainers, BMI, newsletter, footer)
- [ ] Design tokens in `@theme`: brand neon yellow `#fcff18`, dark
      `#242424`, text-on-yellow `#353535`, light section bg `#f6f9fa`,
      footer text `#b5babc` / `#d1d1d1`
- [ ] Font: PT Sans (400/700) via Google Fonts
- [ ] Buttons: 18px/700, padding 20px 40px, no radius; yellow fill with
      #353535 text (+ sb-dark / sb-line variants where the demo uses them)
- [ ] Header: logo + 5 anchor links + yellow address box + hamburger →
      mobile menu (close control, Escape-to-close)
- [ ] Hero: dark background photo, two-line white headline with yellow
      span, "Join the Gym" yellow CTA
- [ ] Features: heading with yellow-highlighted "workout" + 3 circular
      icon cards (icon circle bg #f6f9fa, hover yellow)
- [ ] Discount band: dark bg, "Pay now and get a 25% Discount" (span
      yellow), 3 check-list lines, "Become a Member" button
- [ ] Milestones: 4 yellow number chips + captions (1374 Happy Clients /
      356 Strong Bodies / 57k IG Followers / 24/7 Working Hours) on
      #f6f9fa
- [ ] Trainers: "Meet the Trainers" + 4 circular-photo cards (name + bio)
- [ ] BMI: dark #242424 panel, weight + height inputs, Calculate button,
      result field with category label
- [ ] Newsletter: dark band, "Subscribe to newsletter" (span yellow),
      email input + Subscribe button
- [ ] Footer: 4 widgets + social icons (inline SVG, not lucide brand
      icons) + Component Dock link in the copyright line
- [ ] Placeholder images seeded (`picsum.photos/seed/bolt-<n>/<w>/<h>`);
      background-photo subjects screened (hero: dark athlete; trainers:
      person portraits); no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` on ALL
      THREE lines 539, 1237, 1887 + surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
