# Ironcore (ColorLib Dazko) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Ironcore** (NEW name —
> the ColorLib source keeps its name "Dazko"/`dazko`). Implementation ships on
> `feat/template-ironcore` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Dazko" — free gym/fitness one-page Bootstrap 5
  template (source: https://colorlib.com/wp/template/dazko/; ColorLib page
  title "Dazko - Free Bootstrap 5 Template by Colorlib"). TEMPLATES.md rows:
  line 570 AND a **DUPLICATE at line 1836** — bookkeeping must mark BOTH rows
  `[x]` with the same surge URL.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):**
  `https://preview.colorlib.com/theme/dazko/` (HTTP 200, ~97KB HTML).
  Stylesheets: `css/style.css` (**87.7KB: Bootstrap 5 compiled CSS embedded
  FIRST (lines ~1–2000), custom theme CSS after (from `.bg-light { background:
#f0f4f7 !important }` ~line 2020) — the token source**), `animate.css`,
  `flaticon.css` (template icon font), `tiny-slider.css` (hero + testimonial
  sliders), `glightbox.min.css`, `aos.css` (scroll animations); CDN icons
  font-awesome 4.7.0 + ionicons 4.5.6. NO Google Fonts link in the head —
  `"Open Sans"` / `"Roboto Condensed"` are declared but unresolved (system
  fallback in preview) → load both via Google Fonts `<link>` in the
  recreation. `js/main.js`: counter count-up + BMI calculator + slider/AOS
  init.
- **Screenshot (`dazko-free-template.jpg`, 1200×946) verified 2026-08-16:**
  dark navbar (red skewed CTA) → full-viewport dark hero (fit woman in red
  sports bra doing a barbell lift, dark gradient overlay, big white uppercase
  italic headline, red square CTA, slider controls right) → white about (left
  cutout athlete photo — woman flexing bicep on white; right red eyebrow
  "Information About Us", big uppercase heading, 3 checklist items with small
  red icons). Bright **red `#e1193e`** accents on near-black `#030513` +
  white; flat rectangular red buttons; uppercase bold sans headings.
- **Structure observed (1:1, 12 sections + footer):**
  1. **Navbar** `nav.ftco-navbar-light` — transparent absolute `top: 40px`
     over hero; **scrolled: bg `#030513`, top 0, padding 7px 0**. White brand,
     links Home/About/Trainers/Classes/Schedules/News/Contact, skewed red
     `a.btn-custom` "Become A Member" (`bg #e1193e; padding 14px 15px;
uppercase 12px 700; :after skew(-25deg) strip width 40px left -12px`).
  2. **Hero slider** `section.slider-hero` (100vh) → `.hero-slider`
     (tiny-slider): 3 `div.work > div.img` slides, bg images `bg_1..3.jpg`
     (background-position top center; overlay `:after { background: #030513;
opacity: .7 }`); `col-md-8.col-lg-6 > .text` (`color: rgba(255,255,255,
0.8)`): `h2` (“Shape Your Perfect Body” / “Increase Your Muscle Power” /
     “You Only Fail, When You Stop Trying”; `.work .text h2`: **60px (40px
     mobile), 700, uppercase, italic, white**), `p.mb-5` Duden line,
     `a.btn.btn-primary.px-4.py-3` "Take A Tour Now" + arrow icon. Slider
     controls right edge.
  3. **About** `.ftco-about-section` — row: text col `col-lg-6.col-xl-7
.order-lg-last.py-5.heading-section` (RIGHT at lg; LEFT image col `col-lg-6`
     with `about.png` cutout athlete); eyebrow span "Information About Us"
     (**red, uppercase, 700**, display block, mb 5px); `h2` "Dazko A Crossfit
     Workout Training Center" (`.heading-section h2`: **Open Sans 34px/800
     uppercase**, navy `#011f39`; red `span` around "Crossfit"); Duden p;
     `ul` checklist 3 items — Men Fitness and Workout / Women Fitness and
     Workout / Personal Trainings (`.ftco-about-section ul li`: uppercase
     14px/600 ls 1px black, mb 10px, red icon span, hover red).
  4. **Counters** `.ftco-counter-section` → `.counter-section` (**bg #1425af
     diagonal stripes: `linear-gradient(345deg,#1425af 25%,#1d2cb5 25%,
#1d2cb5 50%,#1425af 50%,#1425af 75%,#1d2cb5 75%,#1d2cb5 100%)`, skewed
     -15deg strip decoration**): 4 stats — 0+ Years of experienced / 0+
     Fitness Trainers / 0+ Best Equipments / 0k+ Satisfied Clients
     (count-up on scroll).
  5. **Join Us** `.ftco-section.ftco-no-pt.ftco-no-pb` — centered
     `col-md-7.heading-section.text-center`: eyebrow "Join Us Now" + `h2`
     "Join Us Our Free Workout Training With Dazko"; then `d-flex
align-items-stretch` row of 3 feature blocks (icon + bold title + Duden
     p): Free Fitness Training / Tons of Cardio & Strength / **No
     Commentment** Memberships (source typo → fix to "No Commitment
     Memberships").
  6. **Classes** `.ftco-section` — eyebrow "Our Classes" + `h2` "Dazko
     Workout Classes"; **6 class cards** (`.services`, bg image
     `classes-1..6.jpg`, padding 30px 50px, radius 4px, skewed -10deg
     decoration, "$100" badge): Body Building / Weight Lifting / Cardio /
     Martial Arts / Yoga / Cycling; centered `a.btn-custom` "View All
     Classes".
  7. **Pricing** `.ftco-section.ftco-no-pt` — eyebrow "Our Pricing" + `h2`
     "Pricing & Packages"; **4 cards** (`.block-7`, white, padding 40px 0,
     shadow `0px 24px 48px -13px rgba(0,0,0,…)`): plan name
     (`.excerpt`: uppercase 14px/700 ls 1px `#030513`) Basic/Beginner/
     Premium/Ultimate Plan; price `sup $` grey 24px + `.number` **red 50px/
     600**: **$49/$79/$109/$149**; 5 features (Personal Trainer, Convienient
     Time, Special Class, Group Traning, Free Fitness Traning → fix typos);
     `a.btn.btn-primary.d-block.px-2.py-3` "Get Started" + arrow. Below:
     3-icon feature row (align-items-start, AOS): Thousands of Equipments /
     Open 24/7 Dazko Gym Fitness / Food Supplements (icon + Duden p each).
  8. **Watch Our Stories** `section.img.v-section` — photo bg, overlay
     `#030513` (opacity 1, height 500px, gradient), white
     `.heading-section-white`: eyebrow "Watch Our Stories" + `h2` "Members
     Success Stories"; story copy: "From 264 lbs to 154 lbs, A Great
     transformation in my life." / "I'm Sheryl Johnson" / "Proved that 50
     Really Is the New 30"; circular `.icon-video` play button (glightbox).
  9. **Schedules** `.ftco-section.ftco-no-pt` — eyebrow "Schedules" + `h2`
     "Fitness Schedules"; **table** Time × Mon..Sun, 5 rows — 8am-9am,
     10am-11am, 1pm-2am (typo → 1pm-2pm), 3pm-5pm, 7pm-9pm — cells: Body
     Building / Weight Lifting / Cardio / Yoga / Aerobics / Cycling /
     Stretching (some empty).
  10. **Trainers** `.ftco-section.ftco-no-pt.ftco-no-pb.ftco-trainer` —
      eyebrow "Trainer" + `h2` "Fitness Trainer"; **4 `.trainer-wrap`
      cards**: portrait `trainer-1..4.png` + **absolute navy name plate**
      (`.trainer-wrap .text`: width 80%, right 0, top 50%
      translateY(-50%), bg `#1425af`, padding 15px 20px): Aron Mighty /
      Alicia Brown / Anne Henderson / Bruce Grapler.
  11. **Testimonials** `.testimony-section.bg-light` (custom **`#f0f4f7`**) —
      eyebrow "Testimonial" + `h2` "Happy People"; tiny-slider carousel per
      slide: round `.user-img` avatar (`person_1.jpg`), quote (Duden),
      name "Roger Scott", role "Marketing Manager"; dots 9px `#ddd` →
      active `#999`.
  12. **Blog** `.ftco-section` — eyebrow "Our Blog" + `h2` "Recent Blog";
      **4 `.blog-entry` cards** (white; image `image_1..4.jpg`; meta "Dec.
      20, 2020" + "3 Comments"; `h3.heading` "Really Good Workout, Can Feel
      it Working" — navy `#011f39`, hover red; excerpt; `a.btn-custom`
      "Read More" 13px/600 ls 2px black). Cards alternate
      justify-content-end / flex-md-column-reverse (zig-zag 2×2).
  13. **BMI** `section.img.ftco-no-pb` — dark photo bg (`bg_5.jpg` + overlay),
      white heading: eyebrow "Get Your Body Max Index" + `h2` "What is Your
      BMI"; **Standard | Metric tabs**; Standard: "Your Height" (Feet +
      Inches) + "Your Weight"; red Calculate button; `main.js` computes BMI
      → recreate as React calculator (Standard 703·lb/in², Metric kg/m²)
      with a result readout.
  14. **Footer** `.ftco-footer` (bg `#030513`, text `rgba(255,255,255,0.7)`,
      padding 7em 0 0): 4 widgets — brand "Dazko Crossfit & Fitness" +
      Duden blurb; Explore (About Us / Trainers Team / Awesome Classes /
      Pricing Packages / Latest News); Our Contacts ("203 Fake St. Mountain
      View, San Francisco, California, USA" / "+2 392 3929 210" /
      "info@yourdomain.com"); Gallery (8 thumbs `gallery-1..8.jpg`); bottom
      bar "Copyright © <year> All rights reserved | This template is made
      with by Colorlib" → **Component Dock link replaces Colorlib**.

## Design tokens (replication.md mandates: put brand color in `@theme`)

- **Red `#e1193e`** — PRIMARY: `.btn.btn-primary` bg+border, `.btn-custom`
  bg, pricing `.number`, `heading-section` red span + eyebrows,
  `ul li` icons + hover, `.form-control:focus` border, blog hover.
- **Navy `#1425af`** (+ stripe mate `#1d2cb5`) — SECONDARY: btn hover bg,
  counter stripe gradient, trainer name plates.
- **Near-black `#030513`** — hero overlay (0.7), footer bg, navbar scrolled
  bg, dark photo-section overlays, `.excerpt` plan-name color.
- **Heading navy `#011f39`** — h1–h6 color (Roboto Condensed base).
- **Light `#f0f4f7`** — testimonial section bg (`!important` custom
  `.bg-light`).
- **Buttons SQUARE** — `border-radius: 0`; `.btn { padding: 9px 12px;
font-size: 12px; font-weight: 600; text-transform: uppercase;
letter-spacing: 1px; box-shadow: 0px 24px 36px -11px rgba(0,0,0,0.09); }`;
  hero `px-4 py-3`; pricing full-width `d-block px-2 py-3`. Hover → navy
  `#1425af`. Arrow icon span white 16px ml 10px.
- **Skewed CTA `.btn-custom`** — red, 12px/700 uppercase, padding 14px 15px,
  `:after` skew(-25deg) strip.
- **Forms** — `.form-control { height: 45px; font-size: 14px; border-radius:
2px; border: 1px solid rgba(0,0,0,0.1); }`, placeholder rgba(0,0,0,0.3),
  focus border `#e1193e`.
- **Fonts** — Google Fonts link: **Roboto Condensed** (h1–h6, weight 400,
  `#011f39`) + **Open Sans** (`.heading-section h2` 34px/800 uppercase;
  footer widget h2; body). Hero h2: 60px/40px, 700, uppercase italic, white.
- **Radius** — service cards 4px; inputs 2px; everything else square.
- **Shadows** — `.block-7` `0px 24px 48px -13px rgba(0,0,0,…)`; `.btn`
  `0px 24px 36px -11px rgba(0,0,0,0.09)`.
- **Icons** — flaticon + fa 4.7 + ionicons 4.5.6 → `lucide-react` of the
  same kind (check/chevron checklist bullets, arrow-right CTAs, play circle,
  dumbbell/clock/leaf feature icons, socials in footer).
- **Images** — all picsum seeds: hero `ironcore-hero-N` (1600/900), about
  cutout `ironcore-about` (600/800 portrait), story `ironcore-story`,
  BMI `ironcore-bmi`, classes `ironcore-class-N`, trainers
  `ironcore-trainer-N`, avatars `ironcore-person-N`, blog
  `ironcore-blog-N`, gallery `ironcore-gallery-N`.

## Implementation task outline

1. **Scaffold** `apps/ironcore` from the simplest existing app (e.g. a
   recent landing-page app like `apps/emporio`/`apps/epicure` once shipped).
   Rename package to `@free-react-templates/ironcore`; set `public/CNAME` =
   `ironcore.free.componentdock.com` and `"homepage"` =
   `https://ironcore.free.componentdock.com`; register via `npm install` at
   root (lockfile). Vite config: keep `injectUiSource()`. Add the jsdom
   localStorage polyfill to `src/test/setup.ts` (MemoryStorage pattern from
   `apps/cura/src/test/setup.ts`).
2. **Design tokens** in `src/index.css` `@theme`: `--color-brand: #e1193e`
   (buttons, accents), `--color-navy: #1425af` (hover, plates, stripes),
   `--color-ink: #030513` (dark surfaces), `--color-heading: #011f39`, light
   `#f0f4f7` (`bg-light` section). Load Roboto Condensed + Open Sans via
   Google Fonts `<link>` in `index.html`.
3. **Components** (mirror the section list — see spec Gherkin):
   - `Navbar` — transparent absolute over hero; scrolled → `#030513`
     solid; brand "IRONCORE" white uppercase; 7 links (Home / About /
     Trainers / Classes / Schedules / News / Contact → anchor to
     sections); skewed red "Become A Member" CTA; mobile hamburger
     collapse (aria-expanded).
   - `HeroSlider` — 100vh slider (simple React carousel, auto-advance +
     controls — replaces tiny-slider): 3 slides, picsum bg + `#030513` 70%
     overlay; italic uppercase white 60px/40px heading, white 80% p, red
     square "Take A Tour Now" button.
   - `About` — 2-col (photo left/text right at lg, stacked mobile): red
     eyebrow, uppercase heading with red span, Duden p, 3-item red-icon
     checklist.
   - `CounterStrip` — navy striped bg (recreate the 345deg stripe gradient
     in CSS), 4 stats, count-up on scroll-into-view (IntersectionObserver
     - rAF; testable via a small hook).
   - `JoinUs` — eyebrow + heading + 3 icon feature blocks.
   - `Classes` — 6 cards grid: bg photo (picsum, `background-image` or
     `<img class="absolute inset-0 object-cover">`), "$100" badge, title;
     "View All Classes" skewed red button.
   - `Pricing` — 4 cards: name, red 50px price (grey `$` sup), 5-feature
     list, full-width red "Get Started"; 3-icon feature row below.
   - `SuccessStories` — dark photo section, white heading, story copy, play
     button (can be a real modal video or a decorative play trigger —
     keep it simple: aria-label + open a video modal OR a styled anchor;
     recommended: a `<dialog>`-less modal with an embedded placeholder).
   - `Schedules` — table (Time × Mon–Sun, 5 rows; semantic `<table>` with
     `th scope=…`).
   - `Trainers` — 4 cards: portrait + absolute navy name plate
     (right-aligned, vertically centered).
   - `Testimonials` — `#f0f4f7` bg, carousel (3 slides w/ round avatar +
     quote + name + role), round dots.
   - `Blog` — 4 zig-zag cards (`md:flex-row-reverse` alternation), meta +
     heading + excerpt + read-more.
   - `BmiCalculator` — dark bg; Standard/Metric tabs (radio/state), Feet/
     Inches or cm fields + Weight field; Calculate → BMI value + category
     (math in a pure function; guard div-by-zero / invalid input per
     conventions.md error handling).
   - `Footer` — 4 widgets (brand+blurb, Explore links, Contacts, Gallery
     thumbs) + bottom bar with **Component Dock link
     (https://www.componentdock.com/)**.
   - Shared: section heading pattern (red eyebrow + uppercase h2 with red
     span) — consider one `SectionHeading` component in the app (or reuse
     `packages/ui` where it fits).
4. **App.tsx** composes Navbar → HeroSlider → About → CounterStrip → JoinUs
   → Classes → Pricing → SuccessStories → Schedules → Trainers →
   Testimonials → Blog → BmiCalculator → Footer; set document title
   "Ironcore — Gym & Fitness".
5. **Tests** (TDD, 100% coverage): per-section describes mirroring the spec
   scenarios (navbar scroll class flip; slider auto-advance + controls;
   counter count-up hook; BMI math cases incl. invalid input + both unit
   modes; tab switching; footer Component Dock link; doc title). Query like
   a user (`getByRole`); the three "Take A Tour Now" hero slides share the
   same label — scope queries within the active slide.
6. **Verify:** `npm run verify:app` (typecheck/lint/knip/fallow/vitest
   100%/build) for the changed app; `npm run spec:validate`; visual QA the
   built output (hero overlay legibility, stripe gradient, skewed CTA
   shape, name plates, zig-zag blog grid, BMI result, mobile stacking).
7. **Ship:** commit conventional (`feat:`), push `feat/template-ironcore`,
   open PR, **merge immediately** (squash, delete branch), then bookkeep:
   mark **BOTH** TEMPLATES.md rows — line 570 AND line 1836 — `[x]` with
   surge URL `https://ironcore.free.componentdock.com` +
   `npm run readme:status`.

## Key fidelity pitfalls

- **Bootstrap 5 CSS is EMBEDDED at the top of `style.css`** — don't be
  tricked by the `.btn-primary { background-color: #0d6efd }` at line ~651
  (Bootstrap default): the THEME overrides it later
  (`.btn.btn-primary { background: #e1193e !important }` ~line 2040) and
  `.btn { border-radius: 0 }` — buttons are RED and SQUARE.
- **Hero + BMI + story sections use photo backgrounds with a `#030513`
  overlay** (hero 0.7 opacity; v-section overlay opacity 1 with gradient) —
  keep dark readability; white text.
- **Fonts are declared but NOT loaded** in the source head — load Roboto
  Condensed + Open Sans via Google Fonts; never copy font files.
- **`dazko` appears TWICE in TEMPLATES.md** (lines 570 + 1836) — bookkeeping
  must mark BOTH rows `[x]` with the same URL (memory: duplicate slug rows →
  mark ALL).
- **Source typos to fix silently** (same content kinds): "No Commentment
  Memberships", "Convienient Time", "Group Traning", "Free Fitness Traning",
  "1pm-2am" → "1pm-2pm".
- **Counter strip is a 345deg diagonal STRIPE gradient** (`#1425af` +
  `#1d2cb5`), not a flat navy band.
- **Trainer plates** are absolute navy blocks (80% width, right-aligned,
  vertically centered) — not under-the-image captions.
- **Blog grid zig-zags** (`justify-content-end` + `flex-md-column-reverse`
  alternation).
- **Slider semantics:** hero slider shares button labels across slides —
  scope queries (e.g. within `[data-slide]` / active slide) so tests don't
  collide.
- Never put ColorLib in app code (provenance only in the spec/TEMPLATES.md/
  PR); footer MUST link Component Dock.
