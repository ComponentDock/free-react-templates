# Hearth (ColorLib Kusina) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-hearth`.

## Source mapping

- **ColorLib item:** "Kusina" (TEMPLATES.md — appears 3×: lines 431, 1785,
  2682; all three rows point to the same source, one prep covers all; verified
  with `grep -c 'wp/template/kusina/'` = 3).
- **Source URL:** https://colorlib.com/wp/template/kusina/
- **Preview URL:** https://preview.colorlib.com/theme/kusina/ — **HTTP 200,
  live** (confirmed 2026-08-11, ~49 KB HTML). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/kusina/css/style.css
  (~79.8 KB) + vendor sheets (bootstrap.min.css, animate.css,
  owl.carousel.min.css, magnific-popup.css, aos.css, ionicons.min.css,
  bootstrap-datepicker.css, jquery.timepicker.css, flaticon.css, icomoon.css).
  Site is jQuery + owl.carousel + waypoints/counterUp + scrollax — NOT
  Tailwind. JS: `js/main.js` (hero owl init, counters 30/100/50/100,
  carousels).

## Reference research (done — do not redo)

### Screenshot (`kusina-free-template.jpeg`, 1200×946; verified via browser vision)

Split-screen hero: left half white with a large black headline "We Love
Delicious Foods", a paragraph of Duden-river placeholder copy, a row of three
circular photo thumbs each labelled "Australian Organic Beef", and a solid
red rounded "Book A Table" button; right half a large food photo with
prev/next carousel arrows at its bottom edge. Nav bar: "Kusina" logo bold
black top-left; links top-right on white (Home active in red, About,
Specialties, Reservation, Store, Contact). Below the fold: about section in
reverse zig-zag — interior photo left, right column headed by a red cursive
script "About" label over a bold black "Welcome to Kusina Restaurant"
subheading + placeholder copy. Clean white restaurant template with a single
red #f34949 accent and red-pink #f67979 script labels. NOTE: the screenshot
shows "Store" in the nav, the live DOM says "Stories" — the DOM is the
reference.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Navbar** `nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark.
ftco-navbar-light`
   - Desktop: transparent, `position: absolute; top: 20px; left/right: 0;
z-index: 3`. `.scrolled` (after scroll): `position: fixed; top: 0;
background: #fff !important; box-shadow 0 0 10px rgba(0,0,0,.1)`.
   - Brand: `<a class="navbar-brand"><img src="img/core-img/logo.png"></a>`
     (black "Kusina" wordmark) → recreate as bold text "Hearth".
   - `ul.navbar-nav.ml-auto` — links Home (`.active`, color #f34949), About,
     Specialties, Reservation, Stories, Contact. Nav link color black
     (`.ftco-navbar-light-2 .nav-link` 14px 400, padding .5em 1em).
   - Mobile: navbar-toggler labelled "Menu" (dark bg collapse panel).
2. **Home slider** `section.home-slider.js-fullheight.owl-carousel.bg-white`
   — `height: 750px`; 2 `div.slider-item.js-fullheight` (bg cover):
   - `div.row.d-md-flex.no-gutters.slider-text.js-fullheight.align-items-
center.justify-content-end` → `div.one-third.order-md-last.img.js-
fullheight` — right half photo (`background-image: url(images/bg_3.jpg)`
     etc.) + `div.overlay` (black, CSS opacity 0).
   - `div.one-forth.d-flex.js-fullheight.align-items-center.ftco-animate` →
     `div.text.mt-md-5`:
     - `h1` black bold (slide 1: "Eat Healthy and Natural Foods"; slide 2:
       "We Love Delicious Foods").
     - paragraph: "A small river named Duden flows by their place and
       supplies it with the necessary regelialia. It is a paradisematic
       country."
     - `div.thumb.mt-4.mb-3.d-flex` — 3 × `a.thumb-menu`: `div.img` 80×80
       circle, radius 50%, shadow `0 24px 48px -12px rgba(0,0,0,.1)`, + h4
       label 14px rgba(0,0,0,.3) "Australian Organic Beef".
     - `p` > `a.btn.btn-primary.px-4.py-3.mt-3` "Book A Table" (bg #f34949,
       border #f34949, white; hover transparent + red text).
   - Owl nav arrows (bottom-right of image): 36px circles, `border: 2px
solid #d8d8d8`, icon color #d8d8d8; hover bg/border/icon #f34949.
3. **About** `section.ftco-section.ftco-wrap-about.ftco-no-pb.ftco-no-pt`
   - `div.row.no-gutters`: `div.col-sm-5.img.img-2.d-flex.align-items-center.
justify-content-center.justify-content-md-end` — photo `height: 700px`
     (`.img-2`), centered play icon.
   - `div.col-sm-7.wrap-about.py-5.ftco-animate` (`padding-left: 6em` on
     wide) → `div.heading-section.mt-5.mb-4`: `.subheading` "About" (Lovers
     Quarrel 50px #f67979, `margin-bottom: -20px`, z-index -1) + h2 "Welcome
     to Kusina Restaurant" (Poppins 700 28px) → paragraphs: "On her way she
     met a copy. The copy warned the Little Blind Text, that where it came
     from it would have been rewritten a thousand times…" + "A small river
     named Duden flows…" → `div.thumb.my-4.d-flex`: 3 × circular 80px imgs
     (same thumbs as hero).
4. **Counter** `section.ftco-section.ftco-counter.img#section-counter`
   (bg `images/bg_4.jpg`, parallax) — 4 × `div.col-md.d-flex.justify-content-
center.counter-wrap.ftco-animate` > `div.block-18` > `div.text`:
   `strong.number` (font-size 40px, weight 500, white; animates 0 → target)
   - `span` 16px rgba(255,255,255,.8). Targets (from main.js): 30 "Years of
     Experienced", 100 "Happy Customers", 50 "Finished Projects", 100 "Working
     Days".
5. **Menu** `section.ftco-section` — centered `div.row.justify-content-
center.mb-5.pb-2` > `div.col-md-7.text-center.heading-section`: subheading
   "Specialties" + h2 "Our Menu". Grid row: 6 × `div.col-md-6.col-lg-4.
menu-wrap`:
   - `div.heading-menu.text-center.ftco-animate` — h3 22px 600: Breakfast,
     Lunch, Dinner, Desserts, Wine Card, Drinks.
   - 3 × `div.menus.d-flex.ftco-animate` — `div.menu-img.img` 80×80 circle
     (radius 50%, margin-right 20px) + `div.text` (width calc(100% - 80px)):
     `div.d-flex` → `div.one-half` item name ("Grilled Beef with potatoes",
     "Grilled Crab with Onion" — demo repeats; vary freely) + `div.one-forth`
     price "$29" (right-aligned). Row bottom: `border-bottom: 1px dashed
#e6e6e6`, margin/padding-bottom 20px.
   - After grid: `div.row` > `div.col-md-12.text-center.ftco-animate` >
     `p` > `a.btn.btn-black.py-3.px-5` "View All Menu" (black button).
6. **Testimony** `section.ftco-section.testimony-section` (bg
   `images/bg_5.jpg`) — heading `div.heading-section.heading-section-white`:
   subheading "Testimony" rgba(255,255,255,.7) + h2 "Happy Customer" white.
   `div.carousel-testimony.owl-carousel.ftco-owl`: 5 `div.item` >
   `div.testimony-wrap.text-center.py-4.pb-5`:
   - `div.user-img.mb-4` — 130×130 circle photo + `div.quote` (40×40 white
     circle, bottom-right, red quote icon).
   - `div.text.p-3`: quote "Far far away, behind the word mountains, far
     from the countries Vokalia and Consonantia, there live the blind
     texts." + name "Arthur Browner" + span "Customer". Text color
     rgba(255,255,255,.7).
   - Owl dots: active bg #f34949.
7. **Staff** `section.ftco-section` — heading: subheading "Chef" + h2 "Our
   Mater Chef" (SOURCE TYPO — implement "Our Master Chef"). 4 ×
   `div.col-md-6.col-lg-3.ftco-animate` > `div.staff`:
   - `div.img` height 320px (background-position top center) chef photo.
   - `div.text.px-4.pt-4` (white bg): h3 name (John Smooth / Rebeca Welson /
     Kharl Branyt / Luke Simon), span role (CEO, Co Founder / Head Chef /
     Chef / Chef), `div.faded` p "I am an ambitious workaholic, but apart
     from that, pretty simple person."
8. **Reservation** `section.ftco-section.ftco-no-pt.ftco-no-pb` —
   `div.row.d-flex`: left `div.col-md-5.ftco-animate.img.img-2` photo; right
   `div.col-md-7.ftco-animate.makereservation.p-4.p-md-5`:
   - `div.heading-section.ftco-animate.mb-5`: subheading "Book a Table" + h2
     "Make Reservation".
   - `form`: 6 fields in `col-md-6` pairs: Name (placeholder "Your Name"),
     Email ("Your Email"), Phone ("Phone"), Date (placeholder "Date",
     datepicker, calendar icon right), Time (placeholder "Time", timepicker,
     clock icon), Person (`div.select-wrap` select: 1 / 2 / 3 / 4+). Labels
     ("Name", "Email", "Phone", "Time", "Person") 600 black above inputs;
     inputs bottom-border style, icon absolute right rgba(0,0,0,.7).
   - `div.col-md-12.mt-3` > `input[type=submit].btn.btn-primary.px-4.py-3`
     value "Make a Reservation".
9. **Footer** `footer.ftco-footer.ftco-bg-dark.ftco-section` — bg #141313
   (`ftco-bg-dark` = #3c312e also present), padding 6em 0, font-size 14px.
   4 × `div.col-md-6.col-lg-3` > `div.ftco-footer-widget.mb-4`, h2 18px 700
   white:
   - "Kusina" widget: brand + paragraph ("Far far away, behind the word
     mountains…") + social icon links (facebook, twitter, google, instagram)
     — circles with 1px #f1f1f1 border (36px), hover red.
   - "Open Hours": 7 rows — Monday 9:00 - 24:00, Tuesday 9:00 - 24:00,
     Wednesday 9:00 - 24:00, Thursday 9:00 - 24:00, Friday 9:00 - 02:00,
     Saturday 9:00 - 02:00, Sunday Closed.
   - "Newsletter": `form.subscribe-form` — email input (placeholder "Enter
     email address", width 100%, bg rgba(255,255,255,.1), color
     rgba(255,255,255,.7), radius 2px) + submit button (bg #f34949, white,
     radius 2px).
   - "Instagram": grid of square photo thumbnails (`a.thumb-menu` 100px
     blocks).
   - Bottom bar `div.row` > `div.col-md-12.text-center`: "Copyright © All
     rights reserved | This template is made with <heart> by Colorlib" →
     original attribution.

## Design tokens (from style.css — computed)

| Token         | Value                  | Usage                                                                                                                         |
| ------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| brand-red     | `#f34949`              | global link color, active nav link, btn-primary bg/border, owl-nav hover, testimony dots active, quote icon, subscribe submit |
| script-red    | `#f67979`              | `.heading-section .subheading` (Lovers Quarrel script labels; white variant rgba(255,255,255,.7))                             |
| ink           | `#000000`              | headings, navbar links (light-2), reservation labels, slider overlay (opacity 0)                                              |
| paper         | `#ffffff`              | page/section bg, staff text bg, quote badge, scrolled navbar bg                                                               |
| footer-dark   | `#141313`              | `.ftco-footer` background                                                                                                     |
| brown-dark    | `#3c312e`              | `.ftco-bg-dark` (footer class)                                                                                                |
| divider-gray  | `#e6e6e6`              | `.menus` 1px dashed bottom border, input borders                                                                              |
| text-on-dark  | `rgba(255,255,255,.7)` | testimony text, footer input color/placeholder; .8 for counter labels                                                         |
| input-bg-dark | `rgba(255,255,255,.1)` | footer newsletter input background                                                                                            |
| font-heading  | "Poppins"              | h1 slider, h2 700 28px, menu h3 600 22px, counter number 500 40px, staff names                                                |
| font-script   | "Lovers Quarrel"       | `.heading-section .subheading` 50px lh 1, mb -20px, z-index -1 (overlaps the h2)                                              |

Radii: 50% (80px circular menu/thumbs, 130px testimony user-img, 40px quote
badge, 36px social circles, 36px owl arrows), 2px (subscribe input/submit).
Dashed menu dividers #e6e6e6. Thumb shadow `0 24px 48px -12px rgba(0,0,0,.1)`.
Counter/testimony sections = full-bleed bg images (dark treatment, white/70%
white text).

## Implementation task outline

1. Scaffold `apps/hearth` (copy the simplest existing app, rename package to
   `@free-react-templates/hearth`), `npm install` at root (lockfile!),
   `injectUiSource()` in vite.config.ts, Poppins (400/500/600/700) + Lovers
   Quarrel Google Fonts `<link>` in index.html.
2. `src/index.css` — `@theme` tokens: `--color-brand: #f34949`,
   `--color-brand-soft: #f67979`, `--color-ink: #000`, `--color-paper: #fff`,
   `--color-footer: #141313`, `--color-footer-alt: #3c312e`,
   `--color-divider: #e6e6e6`, `--font-body: "Poppins", sans-serif`,
   `--font-script: "Lovers Quarrel", cursive`. Page bg white.
3. Components: `Navbar` (transparent→white fixed on scroll, active red link,
   mobile Menu toggle), `HeroSlider` (state carousel of 2 split slides: photo
   half + text half with 3 circular thumbs + Book A Table CTA, prev/next
   arrows), `About` (photo + play icon, script/h2 heading pair, copy, 3
   thumbs), `CounterStrip` (bg image + 4 count-up stats on scroll-into-view),
   `MenuSection` (6 heading-menu columns × 3 dish rows + View All Menu),
   `TestimonyCarousel` (bg image + 5-item state carousel with dots),
   `StaffSection` (4 chef cards), `Reservation` (photo + validated 6-field
   form + submit), `Footer` (brand/social, open hours, newsletter form,
   instagram grid, copyright).
4. Carousels: state-based index carousels (no new deps); count-up via a
   small `useInView` hook + rAF/interval; fake timers in tests.
5. Reservation form: zod schema (name, email, phone, date, time, person),
   per-field errors, submit blocked until valid; date/time as text inputs
   with icons (no datepicker dep).
6. Tests per section (scenario-style `it` blocks mirroring the spec Gherkin),
   100% coverage; `npm run verify:app -- hearth`.
7. PR: `feat: implement Hearth (ColorLib Kusina)`, description must list
   source template, preview URL, tokens, and renames/placeholder decisions.

## Fidelity notes

- The red #f34949 is the single brand accent: links, active nav, primary
  buttons, carousel-dot active, subscribe submit. The script labels
  (#f67979) are a SECONDARY accent — Lovers Quarrel 50px, pulled up with
  negative margin so they overlap the top of the h2 (z-index -1).
- Hero is a split slider: right half is the photo (full-bleed into the
  right edge), left half is white with the text; arrows sit at the bottom
  edge of the photo half.
- The navbar is transparent over the hero at the top and becomes a fixed
  white bar with shadow after scrolling (`.scrolled`).
- Counter + testimony sections are full-bleed photos with white/70%-white
  text — implement as `<section>` with a cover bg image + dark overlay.
- Menu rows: 80px circular image + name + right-aligned price, dashed
  #e6e6e6 divider under each row; 6 columns × 3 rows on desktop.
- Staff cards: photo top (320px), white text block below (name, role, faded
  paragraph). "Our Mater Chef" is a source typo → "Our Master Chef".
- Footer: #141313 bg, 4 columns; open-hours rows are a labeled list
  (Monday…Sunday, Friday/Saturday until 02:00, Sunday Closed); newsletter
  input has a translucent white bg with a red submit.
- Reservation form uses label-above + bottom-border inputs with right-aligned
  icons (calendar, clock) and a Person select (1/2/3/4+).
- "Kusina" brand → "Hearth" everywhere (logo, footer heading, about heading
  "Welcome to Hearth Restaurant"). Footer "made with <heart> by Colorlib"
  credit → original attribution.
- All images: `https://picsum.photos/seed/hearth-<n>/<w>/<h>` (see spec
  Recreation decisions for the seed map). Icons: lucide-react (Play, Quote,
  Calendar, Clock, ChevronLeft, ChevronRight, Mail, MapPin, Phone, Facebook,
  Twitter, Instagram); Google+ as inline SVG (lucide removed brand icons).
