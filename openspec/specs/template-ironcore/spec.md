# Template: Ironcore (Gym / Fitness Landing Page)

## Purpose

Ironcore is a one-page gym & fitness landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Dazko" free
template (source: https://colorlib.com/wp/template/dazko/), built under a
DIFFERENT name (**Ironcore** — a single lowercase word evoking iron/strength
training, the core of a gym brand; verified 2026-08-16 to have NO collision
with `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md — it fits
the house naming style next to `ironpulse` / `ironvault` — per the monorepo
naming mandate: never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a **Bootstrap 5** single-page fitness site ("Dazko - Free
Bootstrap 5 Template by Colorlib" per the page `<title>`): a dark hero slider
(3 full-viewport slides with dark overlay + big white italic uppercase
headlines), followed by a light about section (cutout athlete photo + red-icon
checklist), a navy striped counter strip, a "Join Us" feature section, a
6-card classes section, a 4-plan pricing section with a 3-feature row, a dark
video/story parallax section, a fitness schedule table, a 4-trainer grid with
navy name plates, a light testimonial slider, a 4-card blog grid, a dark BMI
calculator section, and a dark 4-widget footer. The brand accent is a bright
**red `#e1193e`** on near-black `#030513` and white, with a secondary navy
`#1425af`; buttons are **square** (`border-radius: 0`), uppercase, and the
navbar CTA is a skewed red block.

Distinguishing features vs sibling templates:

- **Fitness/gym vertical** — hero + section imagery is athletic (barbell
  lifting woman, flexing athlete), dark-overlaid full-viewport hero **slider**
  (tiny-slider, 3 slides), not a static hero.
- **Skewed red CTA button** (`btn-custom`, skew(-25deg) after-strip) in the
  navbar + "View All Classes" — a signature shape of this theme.
- **Navy diagonal-striped counter strip** (`#1425af`/`#1d2cb5` 345deg
  gradient) with animated count-up stats.
- **4 pricing plans** ($49/$79/$109/$149) plus a **3-icon feature row**
  (Thousands of Equipments / Open 24/7 / Food Supplements) under the cards.
- **Trainer name plates** — absolute navy `#1425af` plates (80% width, right
  edge, vertically centered) over trainer portraits.
- **Interactive BMI calculator** section (Standard/Metric tabs, Height +
  Weight inputs, calculate button) on a dark photo background.
- **Schedule table** — Time × Mon–Sun grid of class names.

The whole template is ONE scrollable page (the nav links to `about.html`,
`trainers.html`, etc. in the source; the recreation is a single-page landing
with the same section order). Ironcore recreates the structure 1:1 with
matching layout, tokens, typography, and content kinds (no ColorLib assets
copied; photos/portraits are replaced with picsum placeholders of the same
kind; the flaticon/ionicons/font-awesome icon fonts are replaced with
`lucide-react` icons of the same kind).

> NAMING NOTE: the ColorLib source name `dazko` / "Dazko" is FORBIDDEN as the
> app name. **Ironcore** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md
> (verified 2026-08-16). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Dazko". Listed in TEMPLATES.md at line 570 with a
  **DUPLICATE row at line 1836** — the `dazko` slug appears TWICE; bookkeeping
  MUST mark BOTH rows `[x]` with the same surge URL when done. Free gym /
  crossfit one-page Bootstrap 5 template ("Dazko - Free Bootstrap 5 Template
  by Colorlib" per the page `<title>`).
- **Live preview DOM — REACHABLE (verified 2026-08-16):**
  `https://preview.colorlib.com/theme/dazko/` returns HTTP 200 (~97KB HTML,
  `<title>` "Dazko - Free Bootstrap 5 Template by Colorlib"). Stylesheets:
  `css/style.css` (**87.7KB — Bootstrap 5 compiled CSS embedded at the top
  (lines ~1–2000), theme CSS at the bottom (from `.bg-light { background:
#f0f4f7 !important }` ~line 2020); the token source**), plus `animate.css`,
  `flaticon.css` (template icon font), `tiny-slider.css` (hero + testimonial
  sliders), `glightbox.min.css` (video lightbox), `aos.css` (scroll
  animations); CDN icon stylesheets font-awesome 4.7.0 + ionicons 4.5.6;
  `js/bootstrap.bundle.min.js` + `js/main.js` (counter count-up, BMI calc,
  tiny-slider init, AOS init). **NO Google Fonts `<link>` in the head** — the
  theme CSS declares `"Open Sans"` + `"Roboto Condensed"` but neither is
  loaded (the preview falls back to system sans); the recreation loads both
  via Google Fonts `<link>` in `index.html`.
- **Visual design (screenshot `dazko-free-template.jpg` 1200×946, verified
  2026-08-16 via browser):** dark slim who-we-are strip + dark navbar with
  red CTA **→** full-viewport dark hero slider (fit blonde woman in red sports
  bra performing a barbell lift, darkened by gradient overlay; big white
  uppercase italic headline "INCREASE YOUR MUSCLE POWER", white subtext, red
  rectangular "BECOME A MEMBER NOW"-style button, slider controls on the
  right) **→** white about section (left cutout image of a woman flexing her
  bicep on white; right: red-eyebrow "INFORMATION ABOUT US", big uppercase
  heading, dark-grey paragraph, 3 checklist items with small red icons: MEN
  FITNESS AND WORKOUT / WOMEN FITNESS AND WORKOUT / PERSONAL TRAININGS).
  Palette: bright **red** accents (logo, buttons, list icons) on near-black
  and white; uppercase bold sans headings. Red buttons are FLAT/RECTANGULAR
  (square corners), menu links small uppercase white.
- **Section order (1:1 from live DOM, 12 sections + footer):**
  1. **Navbar** — `nav.ftco-navbar-light` (transparent, absolute, `top: 40px`
     over the hero; scrolled state: `background: #030513`, `position:
relative`, `top: 0; padding: 7px 0`); brand (white, uppercase);
     links: Home, About, Trainers, Classes, Schedules, News, Contact
     (source links to `about.html` etc.; recreation = single page with the
     same section anchors); CTA `a.btn-custom` — "Become A Member" (see
     tokens). Mobile: collapsed hamburger menu.
  2. **Hero slider** — `section.slider-hero` (`height: 100vh`) →
     `div.hero-slider` (tiny-slider): **3 slides**, each
     `div.work > div.img` with a full-viewport `background-image`
     (`bg_1.jpg` / `bg_2.jpg` / `bg_3.jpg` — athletic photos, e.g. woman
     lifting a barbell; `background-position: top center`) + **dark overlay
     pseudo-element `background: #030513; opacity: .7`**; content
     `div.col-md-8.col-lg-6 > div.text` (`color: rgba(255,255,255,0.8)`):
     - `h2` — "Shape Your Perfect Body" / "Increase Your Muscle Power" /
       "You Only Fail, When You Stop Trying" (`.work .text h2`: **60px,
       font-weight 700, uppercase, ITALIC, white**, line-height 1.1;
       40px on mobile).
     - `p.mb-5` — "A small river named Duden flows by their place and
       supplies it with the necessary regelialia." (white, 80% opacity).
     - `a.btn.btn-primary.px-4.py-3` — "Take A Tour Now" + arrow icon span
       (`ion-ios-arrow-round-forward`; custom `.btn.btn-primary`: bg
       **`#e1193e`**, white, radius 0, hover → `#1425af`).
     - tiny-slider dots/arrows on the right edge (per screenshot).
  3. **About** — `section.ftco-section.ftco-about-section.ftco-no-pt.ftco-no-pb`:
     two-column `row` — TEXT column `col-lg-6.col-xl-7.order-lg-last.py-5
.heading-section` (right on desktop; `div.col-lg-6` image column first
     in DOM = LEFT): image `about.png` (cutout athlete woman flexing her
     bicep, plain white background — the col-lg-6 part). Text column:
     - eyebrow span — "Information About Us" (`.heading-section span` /
       `.ftco-no-pb span`: **red `#e1193e`, uppercase, font-weight 700**,
       display block, margin-bottom 5px).
     - `h2` — "Dazko A Crossfit Workout Training Center" (red `<span>`
       inside per `.heading-section h2 span { color: #e1193e }`; the
       "Crossfit" part is spanned red; `.heading-section h2`: **Open Sans,
       34px, font-weight 800, uppercase**, navy `#011f39`).
     - `p` — "Far far away, behind the word mountains…" (Bootstrap lead-ish
       paragraph, dark grey).
     - `ul` checklist — 3 items: "Men Fitness and Workout", "Women Fitness
       and Workout", "Personal Trainings" (`.ftco-about-section ul li`:
       **uppercase, 14px, font-weight 600, letter-spacing 1px, black**,
       margin-bottom 10px; each with a **red icon span**; hover red) — the
       checklist icons are the flaticon check/chevron glyphs.
  4. **Counters** — `section.ftco-section.ftco-counter-section.ftco-no-pb
.ftco-no-pt` → `div.counter-section` (**background `#1425af` with a
     diagonal-stripe gradient: `linear-gradient(345deg, #1425af 25%,
#1d2cb5 25%, #1d2cb5 50%, #1425af 50%, #1425af 75%, #1d2cb5 75%,
#1d2cb5 100%)`; skewed (-15deg) pseudo-strip decoration**): 4 counters
     in a row, each with a big white number + uppercase caption:
     "0+ Years of experienced" / "0+ Fitness Trainers" / "0+ Best
     Equipments" / "0k+ Satisfied Clients" (js count-up animation on scroll).
  5. **Join Us** — `section.ftco-section.ftco-no-pt.ftco-no-pb`: centered
     `div.col-md-7.heading-section.text-center`: eyebrow "Join Us Now" +
     `h2` "Join Us Our Free Workout Training With Dazko" **→** a
     `d-flex.align-items-stretch` row of **3 feature blocks**
     (`col-md-4`-ish, each: icon + bold title + Duden paragraph):
     "Free Fitness Training", "Tons of Cardio & Strength" (interior
     `&amp;`), "No Commentment Memberships" (source typo — recreate as
     "No Commitment Memberships", same kind).
  6. **Classes** — `section.ftco-section`: centered heading (eyebrow "Our
     Classes" + `h2` "Dazko Workout Classes" → "Ironcore Workout Classes"):
     **6 class cards** in a row/grid (`div.col` each: `.services`-style
     card, `background-image` URL `classes-1.jpg` … `classes-6.jpg`,
     padding 30px 50px, radius 4px, skewed (-10deg) border decoration;
     big "$100" price badge, class title): Body Building, Weight Lifting,
     Cardio, Martial Arts, Yoga, Cycling; below: centered
     `a.btn-custom` — "View All Classes".
  7. **Pricing** — `section.ftco-section.ftco-no-pt`: centered heading
     (eyebrow "Our Pricing" + `h2` "Pricing & Packages"); **4 plan cards**
     (`div.col.block-7` — white card, padding 40px 0, shadow
     `0px 24px 48px -13px rgba(0,0,0,…)`):
     - excerpt/plan name (`.block-7 .excerpt`: **uppercase, 14px,
       font-weight 700, letter-spacing 1px, color `#030513`**): "Basic
       Plan" / "Beginner Plan" / "Premium Plan" / "Ultimate Plan".
     - price (`.block-7 .price`: `<sup>$</sup>` grey 24px + `<span
.number>` **50px, font-weight 600, red `#e1193e`**): **$49 / $79 /
       $109 / $149**.
     - feature list (5 items each): Personal Trainer, Convienient Time
       (recreate "Convenient Time"), Special Class, Group Traning
       (recreate "Group Training"), Free Fitness Traning (recreate "Free
       Fitness Training") — grey check bullets.
     - full-width red button `a.btn.btn-primary.d-block.px-2.py-3` — "Get
       Started" + arrow icon.
       **→** below the cards, a 3-icon feature row (same treatment as Join
       Us blocks; `align-items-start`, AOS fade-up): "Thousands of
       Equipments", "Open 24/7 Dazko Gym Fitness", "Food Supplements" —
       each with an icon + Duden paragraph.
  8. **Watch Our Stories** — `section.img.v-section.ftco-section` (photo
     background, e.g. `bg_3`/`bg_4.jpg`, **dark `#030513` overlay, opacity
     1, height 500px with a gradient**): centered white content —
     eyebrow "Watch Our Stories" + `h2` "Members Success Stories" (white
     `.heading-section-white`); story block: "From 264 lbs to 154 lbs, A
     Great transformation in my life." + name "I'm Sheryl Johnson" +
     accent line "Proved that 50 Really Is the New 30"; **circular PLAY
     button** (`.icon-video`, white 30px icon — glightbox video trigger).
  9. **Schedules** — `section.ftco-section.ftco-no-pt`: centered heading
     (eyebrow "Schedules" + `h2` "Fitness Schedules"); a **table**
     (Time × Mon/Tue/Wed/Thu/Fri/Sat/Sun) with 5 time rows — 8am-9am,
     10am-11am, 1pm-2am (source typo; keep 1pm-2pm kind), 3pm-5pm,
     7pm-9pm — cells filled with class names: Body Building, Weight
     Lifting, Cardio, Yoga, Aerobics, Cycling, Stretching (some cells
     intentionally empty).
  10. **Trainers** — `section.ftco-section.ftco-no-pt.ftco-no-pb.ftco-trainer`:
      centered heading (eyebrow "Trainer" + `h2` "Fitness Trainer");
      **4 trainer cards** (`div.trainer-wrap`): portrait image
      `trainer-1.png`…`trainer-4.png` + **absolute navy name plate**
      (`.trainer-wrap .text`: **width 80%, right 0, top 50%
      translateY(-50%), background `#1425af`, padding 15px 20px**):
      Aron Mighty / Alicia Brown / Anne Henderson / Bruce Grapler.
  11. **Testimonials** — `section.ftco-section.testimony-section.bg-light`
      (custom light **`#f0f4f7`**): centered heading (eyebrow "Testimonial"
      - `h2` "Happy People"); **tiny-slider carousel** of slides, each:
        round avatar `person_1.jpg` (`.user-img`), quote "Far far away,
        behind the word mountains…", name "Roger Scott", role "Marketing
        Manager"; round dots (`background: #ddd` → active `#999`).
  12. **Blog** — `section.ftco-section` (4 cards): centered heading
      (eyebrow "Our Blog" + `h2` "Recent Blog"); **4 `div.blog-entry`
      cards** (white, image `image_1.jpg`…`image_4.jpg`; text: small date
      "Dec. 20, 2020" + "3 Comments", `h3.heading` — "Really Good
      Workout, Can Feel it Working" (`.blog-entry .text .heading a`:
      navy `#011f39`, hover red), excerpt Duden paragraph, `a.btn-custom`
      "Read More" (uppercase 13px, weight 600, letter-spacing 2px,
      black)). Cards alternate `justify-content-end` /
      `flex-md-column-reverse` (zig-zag 2×2 grid).
  13. **BMI calculator** — `section.ftco-section.img.ftco-no-pb` (dark
      photo bg, e.g. `bg_5.jpg` + dark overlay; white
      `.heading-section-white`): eyebrow "Get Your Body Max Index" + `h2`
      "What is Your BMI"; **Standard | Metric tabs** (v-pills); Standard
      mode: "Your Height" (Feet + Inches inputs) + "Your Weight" (input) +
      red calculate/submit button; Metric mode switches to cm/kg. The
      source's `main.js` computes BMI on calculate — recreate as a small
      React calculator (Standard: BMI = 703·lb/in²; Metric: kg/m²) with a
      result readout.
  14. **Footer** — `footer.ftco-footer` (bg **`#030513`**, text
      `rgba(255,255,255,0.7)`): 4 `.ftco-footer-widget` columns —
      brand "Dazko Crossfit & Fitness" (recreate "Ironcore Crossfit &
      Fitness") + Duden blurb; **Explore** links (About Us, Trainers
      Team, Awesome Classes, Pricing Packages, Latest News); **Our
      Contacts** ("203 Fake St. Mountain View, San Francisco, California,
      USA", "+2 392 3929 210", "info@yourdomain.com"); **Gallery**
      (8 image thumbnails `gallery-1.jpg`…`gallery-8.jpg`); bottom bar:
      "Copyright © <year> All rights reserved | This template is made
      with by Colorlib" → **recreate as the mandatory Component Dock
      attribution** (footer MUST link `https://www.componentdock.com/`).

## Design tokens

- **Brand red `#e1193e`** — PRIMARY accent: `.btn.btn-primary` bg
  (`!important`), `.btn-custom` bg, `.block-7 .price .number` (50px prices),
  `.heading-section h2 span` / eyebrow spans, `.ftco-about-section ul li
span` icons + hover, `.form-control:focus` border, blog heading hover,
  footer (color use as widget accents), "View All Classes".
- **Navy `#1425af`** — SECONDARY: `.btn.btn-primary:hover` bg (hover turns
  navy), `.counter-section` stripe gradient (`#1425af` + `#1d2cb5`, 345deg),
  `.trainer-wrap .text` name plates.
- **Near-black `#030513`** — dark surfaces: hero overlay (opacity .7),
  footer bg, navbar scrolled bg, `.bg-darken`, dark photo-section overlays,
  `.block-7 .excerpt` plan-name color.
- **Heading navy `#011f39`** — h1–h6 color (base heading rule, Roboto
  Condensed); blog heading, section h2 base.
- **White `#fff`** — text on dark (hero, counters, dark sections, footer
  widget h2), card/body backgrounds.
- **Light `#f0f4f7`** — `.bg-light` custom override = testimonial section
  background (NOT Bootstrap `#f8f9fa`).
- **Grey** — `.block-7 .price sup` (24px grey `$`), body text `#212529`,
  placeholder `rgba(0,0,0,0.3)`, footer text `rgba(255,255,255,0.7)`.
- **Buttons — SQUARE (`border-radius: 0`):** generic `.btn { padding:
9px 12px; border-radius: 0; font-size: 12px; font-weight: 600;
text-transform: uppercase; letter-spacing: 1px; box-shadow: 0px 24px
36px -11px rgba(0,0,0,0.09); }`; hero CTA `px-4 py-3`, pricing CTA
  `d-block px-2 py-3`. `.btn.btn-primary`: red bg (#e1193e), white text,
  border red, hover navy #1425af; icon span white 16px margin-left 10px.
- **Skewed CTA `.btn-custom`:** red bg, uppercase 12px font-weight 700,
  padding 14px 15px, white; `:after` skewed strip
  (`transform: skew(-25deg)`, width 40px, left -12px) — the signature
  angled block shape (navbar "Become A Member", "View All Classes",
  blog "Read More" is text-only variant, black).
- **Border-radius:** cards `.services` 4px; form inputs 2px; everything
  else square.
- **Forms:** `.form-control { height: 45px; background: #fff; font-size:
14px; border-radius: 2px; border: 1px solid rgba(0,0,0,0.1); }`,
  placeholder `rgba(0,0,0,0.3)`, **focus border-color `#e1193e`**.
- **Fonts:** load **Roboto Condensed** (base h1–h6: weight 400, color
  `#011f39`) and **Open Sans** (`.heading-section h2`: 34px, weight 800,
  uppercase; footer widget h2; body base) via Google Fonts `<link>` in
  `index.html`. Hero `.work .text h2`: Roboto Condensed-ish 60px (40px
  mobile), weight 700, **uppercase italic**, white.
- **Counters strip:** `#1425af` bg with 345deg stripe gradient, skewed
  (-15deg) decoration strip; white big numbers + uppercase captions.
- **Trainer plates:** `#1425af`, width 80%, right 0, vertically centered
  (top 50% translateY(-50%)), padding 15px 20px, white name text.
- **Testimonial slider dots:** 9px round, `#ddd` → active `#999`.
- **Shadows:** `.block-7` cards `0px 24px 48px -13px rgba(0,0,0,…)`; `.btn`
  `0px 24px 36px -11px rgba(0,0,0,0.09)`; hero slide `0px 20px 35px -30px
rgba(0,0,0,0.26)`.
- **Icons:** source uses flaticon (template icon font) + font-awesome 4.7 +
  ionicons 4.5.6 CDNs — recreate with `lucide-react` icons of the same kind
  (checklist checks, arrow-right on CTAs, play on the video button, dumbbell
  / clock / leaf for the pricing feature row, social icons in the footer).
- **Images (replace ALL with picsum `https://picsum.photos/seed/<seed>/<w>/<h>`):**
  hero slides `bg_1..3.jpg` (dark athletic photos, e.g.
  seed `ironcore-hero-1/1600/900`), about cutout athlete (`ironcore-about`),
  v-section story bg (`ironcore-story`), BMI bg (`ironcore-bmi`),
  classes `classes-1..6.jpg` (`ironcore-class-N`), trainers `trainer-1..4.png`
  (`ironcore-trainer-N`), testimonial avatars `person_1..3.jpg`
  (`ironcore-person-N`), blog `image_1..4.jpg` (`ironcore-blog-N`), footer
  gallery `gallery-1..8.jpg` (`ironcore-gallery-N`). Deterministic seeds per
  template (replication.md convention).
- **Content kinds (paraphrase, same kinds):** hero headlines keep the
  motivational-gym-headline kind ("Shape Your Perfect Body" etc. — recreate
  as equivalent motivational lines with the NEW brand name where a brand is
  referenced); eyebrow labels (Information About Us, Our Classes, Our
  Pricing, Schedules, Trainer, Testimonial, Our Blog, Watch Our Stories…)
  kept 1:1; "Dazko A Crossfit Workout Training Center" → "Ironcore A
  Crossfit Workout Training Center"; "Join Us Our Free Workout Training With
  Dazko" → "…With Ironcore"; counter captions, class titles, plan names +
  prices, trainer names, schedule cells, and blog metadata kept (names of
  persons are fine as data); Duden paragraphs kept as placeholder copy of
  the same kind. Fix source typos silently (Convenient Time, Group Training,
  Free Fitness Training, 1pm-2pm).
- **Rhythm:** dark full-viewport hero slider → white about (image + red
  checklist) → navy stripped counters → white Join-Us features → white
  classes grid → white pricing cards + feature row → dark parallax story +
  play button → white schedule table → white trainer grid → light-grey
  testimonial slider → white blog grid → dark BMI calculator → dark footer.
- **AOS/animation:** the source fades sections in on scroll (AOS) — optional
  in the recreation (Tailwind `animate-` or CSS; do not add heavy deps);
  the count-up counters and sliders ARE part of the design (recreate
  counters counting up on scroll into view; hero + testimonials as simple
  React carousels).

## Requirements

### Requirement: Navbar

The system SHALL render a fixed-position transparent navbar over the hero
that turns dark on scroll, with brand, section links, and a skewed red CTA.

#### Scenario: Navbar default state

- **GIVEN** the Ironcore app is rendered at the top of the page
- **THEN** the navbar SHALL be transparent, positioned over the hero
- **AND** it SHALL show the brand "IRONCORE" in white uppercase letters
- **AND** it SHALL show links: Home, About, Trainers, Classes, Schedules,
  News, Contact (single-page anchor links of the same kind)
- **AND** it SHALL show a red skewed CTA button labeled "Become A Member"
  (red `#e1193e` background, uppercase 12px/700, skewed -25deg shape)

#### Scenario: Navbar scroll state

- **WHEN** the page is scrolled down
- **THEN** the navbar SHALL switch to a solid near-black `#030513`
  background with white links

### Requirement: Hero slider

The system SHALL render a full-viewport dark-overlaid hero slider with 3
slides, each with an italic uppercase headline, subtext, and a red CTA.

#### Scenario: Hero slides

- **GIVEN** the Ironcore app is rendered
- **THEN** the hero SHALL occupy the full viewport (`100vh`)
- **AND** it SHALL cycle through 3 slides (auto-advancing slider with
  controls), each SHALL have a dark `#030513` overlay at ~70% opacity over a
  background photo
- **AND** each slide SHALL show an uppercase italic white headline at 60px
  desktop / 40px mobile (kind: motivational gym headline, e.g. "Increase
  Your Muscle Power")
- **AND** each slide SHALL show a white 80%-opacity one-line paragraph below
  the headline
- **AND** each slide SHALL show a red square "Take A Tour Now" button
  (`#e1193e` bg, white text, arrow icon, hover navy `#1425af`)

### Requirement: About section

The system SHALL render a two-column about section with a photo column, an
eyebrow + uppercase heading, a paragraph, and a red-icon checklist.

#### Scenario: About layout and checklist

- **GIVEN** the Ironcore app is rendered
- **THEN** the about section SHALL show a photo on one side (picsum athlete
  portrait) and text on the other (reversed order on mobile)
- **AND** the text column SHALL show the red uppercase eyebrow
  "Information About Us"
- **AND** it SHALL show the uppercase heading "Ironcore A Crossfit Workout
  Training Center" (Open Sans 34px/800, navy `#011f39`, "Crossfit" in red)
- **AND** it SHALL show a dark-grey paragraph (placeholder copy of the same
  kind)
- **AND** it SHALL show a checklist of 3 items — Men Fitness and Workout,
  Women Fitness and Workout, Personal Trainings — each with a red icon and
  uppercase 14px/600 letter-spaced text

### Requirement: Counter strip

The system SHALL render a navy striped counter strip with 4 animated stats.

#### Scenario: Statistics

- **GIVEN** the Ironcore app is rendered
- **THEN** the counter strip SHALL have the navy diagonal-stripe background
  (`#1425af`/`#1d2cb5`, 345deg)
- **AND** it SHALL show 4 stats in a row: "0+ Years of experienced",
  "0+ Fitness Trainers", "0+ Best Equipments", "0k+ Satisfied Clients"
- **AND** the numbers SHALL count up when the strip scrolls into view

### Requirement: Join Us feature section

The system SHALL render a "Join Us" section with a heading and 3 icon
feature blocks.

#### Scenario: Feature blocks

- **GIVEN** the Ironcore app is rendered
- **THEN** the section SHALL show the eyebrow "Join Us Now" and the heading
  "Join Us Our Free Workout Training With Ironcore"
- **AND** it SHALL show 3 feature blocks in a row, each with an icon, a
  bold title, and a paragraph: "Free Fitness Training", "Tons of Cardio &
  Strength", "No Commitment Memberships" (source typo "No Commentment"
  fixed)

### Requirement: Classes section

The system SHALL render a 6-card classes grid with price badges and a skewed
view-all button.

#### Scenario: Class cards

- **GIVEN** the Ironcore app is rendered
- **THEN** the section SHALL show the eyebrow "Our Classes" and the heading
  "Ironcore Workout Classes"
- **AND** it SHALL show 6 class cards, each with a background photo, a
  "$100" price badge, and a title: Body Building, Weight Lifting, Cardio,
  Martial Arts, Yoga, Cycling
- **AND** below the grid it SHALL show the skewed red button "View All
  Classes"

### Requirement: Pricing section

The system SHALL render 4 pricing plan cards and a 3-icon feature row below
them.

#### Scenario: Plan cards

- **GIVEN** the Ironcore app is rendered
- **THEN** the section SHALL show the eyebrow "Our Pricing" and the heading
  "Pricing & Packages"
- **AND** it SHALL show 4 white cards: Basic Plan **$49**, Beginner Plan
  **$79**, Premium Plan **$109**, Ultimate Plan **$149** — each with the
  price in red 50px/600 (grey `$`), the uppercase 14px/700 plan name, a
  feature list (Personal Trainer, Convenient Time, Special Class, Group
  Training, Free Fitness Training), and a full-width red "Get Started"
  button with an arrow icon

#### Scenario: Feature row

- **AND** below the cards it SHALL show a row of 3 icon feature blocks:
  "Thousands of Equipments", "Open 24/7 Dazko Gym Fitness", "Food
  Supplements" — each with an icon, title, and paragraph

### Requirement: Watch Our Stories section

The system SHALL render a dark photo parallax section with a success story
and a play button.

#### Scenario: Story content

- **GIVEN** the Ironcore app is rendered
- **THEN** the section SHALL have a dark photo background with the
  near-black `#030513` overlay
- **AND** it SHALL show the white eyebrow "Watch Our Stories" and the white
  heading "Members Success Stories"
- **AND** it SHALL show the quote "From 264 lbs to 154 lbs, A Great
  transformation in my life." with the attribution "I'm Sheryl Johnson" and
  the line "Proved that 50 Really Is the New 30"
- **AND** it SHALL show a circular white play button (opens the story video
  in a lightbox of the same kind)

### Requirement: Schedules table

The system SHALL render a fitness schedule table (Time × weekdays).

#### Scenario: Table content

- **GIVEN** the Ironcore app is rendered
- **THEN** the section SHALL show the eyebrow "Schedules" and the heading
  "Fitness Schedules"
- **AND** it SHALL render a table with a Time column and Monday–Sunday
  columns, with 5 time rows (8am-9am, 10am-11am, 1pm-2pm, 3pm-5pm, 7pm-9pm)
- **AND** cells SHALL be filled with class names (Body Building, Weight
  Lifting, Cardio, Yoga, Aerobics, Cycling, Stretching) in the source's
  pattern (some cells empty)

### Requirement: Trainers section

The system SHALL render a 4-trainer grid with navy name plates.

#### Scenario: Trainer cards

- **GIVEN** the Ironcore app is rendered
- **THEN** the section SHALL show the eyebrow "Trainer" and the heading
  "Fitness Trainer"
- **AND** it SHALL show 4 trainer cards, each with a portrait photo and an
  absolute navy `#1425af` name plate (80% width, right-aligned, vertically
  centered): Aron Mighty, Alicia Brown, Anne Henderson, Bruce Grapler

### Requirement: Testimonials

The system SHALL render a light-background testimonial carousel.

#### Scenario: Testimonial slides

- **GIVEN** the Ironcore app is rendered
- **THEN** the section SHALL have the light `#f0f4f7` background
- **AND** it SHALL show the eyebrow "Testimonial" and the heading
  "Happy People"
- **AND** it SHALL cycle testimonials (carousel), each slide SHALL show a
  round avatar, a quote paragraph, the name "Roger Scott", and the role
  "Marketing Manager" (paraphrase quotes; 3 slides of the same kind)

### Requirement: Blog section

The system SHALL render a 4-card blog grid with metadata and read-more
links.

#### Scenario: Blog cards

- **GIVEN** the Ironcore app is rendered
- **THEN** the section SHALL show the eyebrow "Our Blog" and the heading
  "Recent Blog"
- **AND** it SHALL show 4 white cards (zig-zag 2×2), each with a photo, the
  date "Dec. 20, 2020" and "3 Comments", a navy heading ("Really Good
  Workout, Can Feel it Working" — hover red), an excerpt paragraph, and a
  black uppercase "Read More" link (letter-spacing 2px)

### Requirement: BMI calculator

The system SHALL render a dark BMI calculator section with Standard/Metric
units and a result readout.

#### Scenario: BMI form

- **GIVEN** the Ironcore app is rendered
- **THEN** the section SHALL have a dark photo background
- **AND** it SHALL show the white eyebrow "Get Your Body Max Index" and the
  white heading "What is Your BMI"
- **AND** it SHALL offer Standard | Metric tabs
- **AND** Standard mode SHALL show "Your Height" (Feet + Inches inputs) and
  "Your Weight" inputs; Metric mode SHALL switch to cm/kg
- **WHEN** the user enters values and presses Calculate
- **THEN** the app SHALL display the computed BMI and a category label
  (source `main.js` computes it; recreate with minimal client-side
  calculation, Standard: 703 × lb/in², Metric: kg/m²)

### Requirement: Footer

The system SHALL render the dark 4-widget footer with the mandatory
attribution link.

#### Scenario: Footer content

- **GIVEN** the Ironcore app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL have the near-black `#030513` background with
  white ~70%-opacity text
- **AND** it SHALL show 4 widget columns: brand "Ironcore Crossfit &
  Fitness" + blurb; Explore links (About Us, Trainers Team, Awesome
  Classes, Pricing Packages, Latest News); Our Contacts (address,
  phone, email of the same kind); Gallery (8 image thumbnails)
- **AND** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — replaces the source's "made with Colorlib"
  line; requirement of the repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Ironcore app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Ironcore — Gym & Fitness" (or
  equivalent, never containing "Dazko" or "ColorLib")

## Verification checklist

- [ ] `npm run spec:validate` passes for the ironcore spec.
- [ ] Navbar: transparent over hero → `#030513` on scroll; white links;
      skewed red "Become A Member" CTA.
- [ ] Hero: full-viewport slider, 3 slides, dark overlay, italic uppercase
      white 60px headings, red "Take A Tour Now" square buttons, slider
      controls.
- [ ] About: photo + text columns; red eyebrow; "Ironcore A Crossfit
      Workout Training Center" heading with red span; 3 red-icon checklist
      items, uppercase.
- [ ] Counters: navy stripe gradient; 4 stats; count-up on scroll into view.
- [ ] Join Us: eyebrow "Join Us Now"; 3 icon feature blocks.
- [ ] Classes: 6 cards, $100 badges, titles; "View All Classes" skewed red
      button.
- [ ] Pricing: 4 cards $49/$79/$109/$149 with red 50px prices + 5 features
  - full-width "Get Started"; feature row (Thousands of Equipments / Open
    24/7 / Food Supplements).
- [ ] Watch Our Stories: dark photo bg; white headings; Sheryl Johnson story
      copy; circular play button.
- [ ] Schedules: 5-row × 7-day table with class names.
- [ ] Trainers: 4 portraits with navy `#1425af` right-aligned name plates.
- [ ] Testimonials: `#f0f4f7` bg; carousel w/ round avatars + quotes +
      Roger Scott / Marketing Manager; round dots.
- [ ] Blog: 4 zig-zag cards (photo, date, comments, navy heading, Read
      More).
- [ ] BMI: dark bg; Standard/Metric tabs; Height/Weight inputs; Calculate
      produces a BMI result.
- [ ] Footer: 4 widgets (About/Explore/Contacts/Gallery); Component Dock
      link present; source ColorLib attribution absent.
- [ ] No "dazko"/"colorlib" strings anywhere in `apps/ironcore` (provenance
      only in spec/TEMPLATES.md/PR).
- [ ] 100% coverage in tests; `npm run verify:app` green; visual QA the
      built app on desktop + mobile.
- [ ] Bookkeeping: mark BOTH TEMPLATES.md rows (line 570 AND duplicate line 1836) `[x]` with the surge URL after the PR merges.
