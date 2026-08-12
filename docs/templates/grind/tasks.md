# Grind (ColorLib Flawless) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-grind`.

## Design notes (replication findings)

- **Original:** ColorLib "Flawless" — classic Colorlib Bootstrap gym /
  fitness single-pager (source: https://colorlib.com/wp/template/flawless/).
  TEMPLATES.md has TWO copies (lines 401 in `## Bootstrap (216)`, 1849 in
  `## Health Fitness (72)` — duplicate rows; one recreation covers both;
  implementer marks BOTH `[x]`). WARNING: other gym-family templates
  (Fitnessgym → vigor, Fitnesstrainer → ironvault, Fitfloss → swole, Fitzone
  2 → gains, Gutim, Gymer…) are DIFFERENT templates — don't conflate.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/flawless/ (HTTP
  200, 44,621 bytes). `<title>` = "Flawless Template". Master stylesheet
  `css/style.css` (~43 KB) fully extracted; libs: bootstrap, flexslider
  (hero), owl.carousel (trainers), animate.css, magnific-popup, icomoon +
  flaticon icon fonts, bootstrap-datepicker. Work Sans (200–700) embedded
  via cf-fonts @font-face blocks — load via Google Fonts `<link>` in
  index.html.
- **Screenshot:** `flawless-free-template.jpg` (1200×946, viewed in browser)
  — hero = full-width photo of a woman sitting in calm blue water (from
  behind), white thin-sans centered headline "Working out is a reward not a
  punishment", transparent nav (black "FLAWLESS" logo left; Home, Classes,
  Schedule, Trainers, Events, Blog, Shop, Contact right), faint carousel
  dots; directly below the hero, FIVE solid coral cards (Fitness Program,
  Yoga Program, Dance Program, Aerobics Classes, Pilates — white title,
  "$150" + "MONTH", placeholder blurb, "MORE →" link). Modern, clean,
  minimalist; white + black + coral; athletic sans typography. Demo copy is
  placeholder — paraphrase into varied gym copy.
- **Visual design (from DOM + CSS tokens + screenshot):** brand coral
  `#f17445` (links, ::selection, `.btn-primary` bg + 2px border, hero
  `.btn-learn`, schedule active day pill + time underline, shop price,
  classes price badge, trainer owl dots, request + subscribe section bg,
  footer link icons, event day/month, blog day badge; hover `#f3865d`
  lighter coral, hero btn hover → `#000`). Headings Work Sans `#000` 400
  (`.colorlib-heading h2` 34px/300); body Work Sans 300 17px gray; light
  band `#f2f3f7` (blog, services cards, event cards, contact tiles, form
  inputs); lines `#d9d9d9` (schedule rows) / `#f0f0f0` (form borders);
  footer `#25282a` dark slate (links `rgba(255,255,255,.9)`, h4 `#e6e6e6`
  13px uppercase 700). Buttons `.btn` radius 30px, padding 8px 20px, 15px;
  hero `.btn` uppercase 12px letter-spacing 2px padding 20px 30px. Section
  padding 8em 0. Signature "degree" transition: white skewed parallelogram
  (`skewY ±4deg`, 90–120px, bottom -60px) at the bottom of counter, request,
  classes, blog, gallery sections — recreate with a CSS pseudo-element or a
  small `DegreeBand` component.
- **Structure (1:1, section order):**
  1. `.colorlib-nav` — absolute transparent nav over hero: logo "Flawless"
     24px left + `.menu-1` links right: Home, Classes (dropdown: Classes
     Single, Cardio Classes, Muscle Classes, Fitness Classes, Body
     Building), Schedule, Trainers, Events, Blog, Shop, Contact; hamburger
     - offcanvas (`#1a1a1a` 270px) <768px.
  2. `#colorlib-hero` — flexslider, FOUR slides (img_bg_1..4.jpg, min-height
     650px cover): centered white h1 quotes — "This is a lifestyle there is
     no finish line", "Don't stop when it hurts, stop when you're done",
     "Stop wishing, start doing", "Working out is a reward not a
     punishment"; coral `.btn.btn-learn`; paging dots + `.mouse` scroll
     indicator (animated wheel).
  3. `#colorlib-intro` — `.intro-wrap` margin-top -6em (row overlaps hero
     bottom): `.intro-flex` FIVE `.one-third` coral cards — Fitness
     Program, Yoga Program, Dance Program, Aerobics Classes, Pilates; each
     `$150` 40px + "MONTH" uppercase 12px + blurb + `.btn-more` "More →";
     even cards get `rgba(0,0,0,.05)` tint.
  4. `#colorlib-services` — heading "Work hard stay humble" + FOUR
     `.services` cards on `#f2f3f7`: Cardio Program (gym icon), Body
     Building (weightlifting icon), Karate Classes (martial-arts icon),
     Boxing Program (gloves icon) — photo (`.services-img` 240px), 50px
     black icon, h3 18px, blurb.
  5. `#colorlib-schedule` — heading "Our Class Schedule" + `.schedule
ul.week` white pill day tabs Sunday…Saturday (active = coral pill) +
     EIGHT `.schedule-flex` rows (Cardio Program, Loose Weight Program,
     Yoga Classes, Boxing Program, Karate Classes, Body Building, Swimming
     Program, Basic Exercise): 4 cells per row (icon, time "06am - 8am"
     with coral underline, class h3, trainer name); rows separated by
     `#d9d9d9` borders.
  6. `.colorlib-shop` — heading "Let's Shop" + FOUR `.product-entry`:
     Boxing Gloves, Dumbell, Shoes, Yoga Mat — photo 300px with hover
     overlay (`rgba(0,0,0,.8)`, uppercase "Add to Cart" / "View Details",
     link hover coral), uppercase title 14px, coral price (`.sale`
     strikethrough gray on some).
  7. `#colorlib-counter` — `.colorlib-counters.colorlib-degree-bg` fixed bg
     photo + `#000` .5 overlay + white heading "What we offer" + FOUR
     `.counter-entry`: Clients, Trainers, Managers, Rooms (counter 60px
     300 white, label 20px white 80%).
  8. `.colorlib-trainers` — heading "Our Trainers" + owl carousel FIVE
     `.trainers-entry`: Diego Carter (Power Trainer), Lea Young (Yoga
     Trainer), Alysha Reed (Dance Trainer), George Cooper (Boxing
     Trainer), Melody Moxin (Boxing Trainer) — photo 300px radius 4px,
     name h3 18px, role span 13px; dots below (active coral).
  9. `#colorlib-testimony` — `.testimony-img` fixed bg + `.5` dark overlay,
     white heading "What people says behind their success" + `.testimony-
flex` FIVE `.one-fifth` coral tiles: blockquote (white 80%), 30px
     round avatar, white name h3; even tiles tinted. Source repeats "Dave
     Henderson" ×5 — use 5 distinct member names.
  10. `.colorlib-classes` — heading "Our Classes" + THREE `.classes` cards:
      Fitness Gym & Cardio, Strength Training, Yoga Program — circular
      photo 250px with 80px coral `.price` badge (e.g. `$150`), h3 20px/300,
      blurb, "Learn More" link 13px.
  11. `.colorlib-request.colorlib-degree-bg` — bg `#f17445`, heading
      "Request" + form: Services select, Fullname, Phone, Date (datepicker)
      - full-width Submit; inputs 50px white-90% bg, 2px white border,
        focus → white; labels white.
  12. `.colorlib-event` — heading "Upcoming Events" + THREE `.event-entry`
      on `#f2f3f7`: Special Training for boxing, Gather for World Yoga Day,
      Motivational exercise — right-aligned date `.meta` (day 36px 700
      coral, month 20px), title 24px, organizer, location line with coral
      pin icon.
  13. `.colorlib-blog.colorlib-light-grey.colorlib-degree-bg-full` —
      heading "Recent Blog" + THREE `.article-entry`: "5 Ways to Make Yoga
      Class More Restorative", "3 Balancing Poses for Winter", "Need
      workout motivation?" — photo 250px with overlapping day badge (coral
      bg white 24px) + month badge (white bg `#333` 14px), title h2 22px,
      admin line.
  14. `.colorlib-gallery` — heading "Our Gallery" + FIVE `.gallery-img`
      tiles (20% width, 300px, floating row) with hover overlay
      (`rgba(0,0,0,.5)` + white icon).
  15. `#colorlib-subscribe` — bg `#f17445`, padding 2em 0: "Subscribe
      Newsletter" white h2 + "Tips for sexy body" sub (white 60% 18px) +
      inline form: email input (transparent, bottom border white 10%,
      placeholder white 60%) + square uppercase "Subscribe Now" button
      (white 20% bg).
  16. `#colorlib-footer` — bg `#25282a`, padding-top 6em: FOUR columns —
      "About Flawless" (logo + blurb + social icons), "Quick Links" (Home,
      Classes, Schedule, Trainers, Events, Blog, Shop, Contact), "Recent
      Post" (2 thumb+title entries), "Contact Info" (address/phone/email);
      bottom `.copy` bar: copyright → "© 2026 Grind. All rights reserved."
      - "More templates at Component Dock" link.

## Implementation tasks

1. Scaffold `apps/grind` from the simplest existing app; rename package to
   `@free-react-templates/grind`; `npm install` at root for the lockfile;
   `public/CNAME` = `grind.free.componentdock.com`; homepage in package.json.
2. `src/index.css` — `@theme` tokens: `--color-brand: #f17445`,
   `--color-brand-hover: #f3865d`, `--color-ink: #000`, `--color-body:
#808080` (gray), `--color-mist: #f2f3f7` (light band), `--color-line:
#d9d9d9`, `--color-footer: #25282a`; Work Sans Google Fonts `<link>` in
   index.html.
3. Components (one per section, matching conventions): `Navbar` (transparent
   over hero, Classes dropdown, offcanvas mobile menu with aria-expanded),
   `HeroSlider` (4 slides, dots, prev/next, mouse scroll cue),
   `PricingCards` (5 overlapping coral cards), `Services` (4 cards),
   `Schedule` (7 day tabs + 8 rows), `Shop` (4 products with hover overlay),
   `Counters` (fixed-bg band, 4 stats), `Trainers` (5-card carousel),
   `Testimonials` (5 coral tiles), `Classes` (3 circular cards),
   `RequestForm` (Services/Fullname/Phone/Date + Submit, zod validation),
   `Events` (3 cards), `Blog` (3 articles), `Gallery` (5 tiles),
   `Subscribe` (email form), `Footer` (4 columns + Component Dock link),
   `DegreeBand` (skewed white section divider where the source uses
   `.colorlib-degree-bg*`).
4. TDD: spec scenarios → tests → implementation; 100% coverage.
5. Placeholder images: `https://picsum.photos/seed/grind-<n>/<w>/<h>` (hero
   bg ×4, pricing ×5, services ×4, shop ×4, counter bg, trainers ×5,
   testimonial bg + avatars ×5, classes ×3, blog ×3, gallery ×5, footer
   thumbs). Verify hero/counter/testimonial seed subjects visually before
   pinning — see seed-screening notes in the replication skill.
6. Gate: `scripts/verify-app.sh grind` (typecheck + lint + 100% coverage
   tests + build).
7. PR + immediate squash merge; then bookkeeping: BOTH "Flawless" rows
   (lines 401, 1849) `[x]` + surge URL, `npm run readme:status`.
