# Quad (ColorLib Edustage) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-quad`.

## Design notes (replication findings)

- **Original:** ColorLib "Edustage" — education / online-courses landing
  template (source: https://colorlib.com/wp/template/edustage/).
  TEMPLATES.md has THREE copies (lines 383, 1635, 2043 — mark ALL `[x]`
  when done; Bootstrap / Education / Landing Page categories). Live
  preview title "Edustage Education".
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/edustage/
  (HTTP 200, 34.5 KB). Stylesheet `css/style.css` (80.5 KB, 3,015 lines,
  SCSS-compiled) + Bootstrap 4 + owl.carousel (course + testimonial
  sliders) + flaticon/themify icon fonts. Google Fonts @import at top of
  style.css: Roboto:400,400i,500 + Rubik:500,600.
- **Screenshot:** `edustage-free-template.jpg` — verified live in a
  browser (vision, 1200×946): white header with subtle shadow (navy
  "edustage" wordmark + yellow open-book icon left; nav right incl.
  search icon); hero on light off-white: uppercase navy sub-headline,
  big navy headline "ONE STEP AHEAD THIS SEASON", navy LEARN MORE +
  gold SEE COURSE buttons, wide students photo below blending into
  white; "Awesome Feature" centered heading. Classic academic navy +
  gold + white palette. (Screenshot nav shows an older build: Home /
  About / Pages / Blog / Contact — LIVE DOM is Home / About / Courses /
  Elements / Blog / Contact; DOM wins.)
- **Visual design:** light photo hero (students, cover, min-height
  900px, content block at top 40%), white body, navy `#002347` primary
  (headings, nav, hero text, primary-btn2, events/registration/footer
  bgs, event overlay rgba(0,35,71,.5)), gold `#fdc632` (primary-btn
  fill, nav hover/active, price badge, event link), `#f9f9ff` card bg,
  `#334f6c` countdown tiles, `#7b838a` body text; Roboto body vs Rubik
  headings; 36px bold section titles; 5px-radius uppercase 13px buttons
  (48–50px line-height); circular 65px gold price badge.

## Design tokens (from css/style.css)

| Token            | Value                                                                                                                                                                                                                                                  | Where                                                                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary navy     | `#002347`                                                                                                                                                                                                                                              | `h1–h6` color, nav links, hero p/h2, `.primary-btn2` fill, price badge text, `.events_area` / `.registration_area` / `.footer-area` bg, event overlay `rgba(0,35,71,.5)` |
| Gold             | `#fdc632`                                                                                                                                                                                                                                              | `.primary-btn` fill (see course / Submit / View Details), nav hover + active, `.single_course .price` badge bg, `.event-link`                                            |
| Alt golds        | `#f8b600` (darker) · `#f4e700` (lighter)                                                                                                                                                                                                               | accent / hover variants in stylesheet                                                                                                                                    |
| Alt card bg      | `#f9f9ff`                                                                                                                                                                                                                                              | `.single_feature` card, `.single_course .course_content`                                                                                                                 |
| Clock tile       | `#334f6c`                                                                                                                                                                                                                                              | `.clockinner` countdown tile bg (padding 35px 20px)                                                                                                                      |
| Body text        | `#7b838a`                                                                                                                                                                                                                                              | `body` (Roboto 400 16px, line-height 25px)                                                                                                                               |
| Minor accents    | `#4cd3e3` · `#38a4ff` · `#52c5fd` (cyans) · `#f44a40`/`#f54940` (reds)                                                                                                                                                                                 | secondary/hover/error elements, not on the home sections                                                                                                                 |
| Fonts            | **"Roboto", sans-serif** (body + paragraphs) + **"Rubik", sans-serif** (headings, nav, buttons 500/600)                                                                                                                                                | Google @import `Roboto:400,400i,500                                                                                                                                      | Rubik:500,600` |
| Section titles   | 36px (mobile 30px), weight bold, Rubik, `#002347`, line-height 30px, mb 15px                                                                                                                                                                           | `.main_title h2` (Awesome Feature, Our Popular Courses, Our Expert Trainers, Upcoming Events, Client say about me)                                                       |
| Buttons          | `.primary-btn`: bg `#fdc632`, color `#002347`, padding 0 48px, line-height 50px, radius **5px**, 13px 500 uppercase; hover inverts (navy fill / gold text). `.primary-btn2`: navy fill, gold text, line-height 48px; hover → transparent + navy border | hero learn more/see course, Submit, View Details (+ `.rounded-0` = SQUARE corners on the events button)                                                                  |
| Hero             | min-height **900px**, bg image (students photo) cover; `.banner_inner` absolute **top 40%**; h2 **48px** 500 uppercase; p **20px** 500 `#002347` uppercase                                                                                             | `.home_banner_area`, `.banner_content.text-center`                                                                                                                       |
| Price badge      | 65px circle, bg `#fdc632`, navy text, Rubik 500 20px, absolute `top: -34px; right: 15px`, radius 50%                                                                                                                                                   | `.single_course .price` ($25)                                                                                                                                            |
| Countdown        | `h1` 42px white (mobile 30px); tiles bg `#334f6c`, padding 35px 20px                                                                                                                                                                                   | `.clock_sec`, `.clockinner` (150 Days / 23 Hours / 47 Mins / 59 Secs)                                                                                                    |
| Events           | bg `#002347`, padding 130px 0 100px; detail panel absolute right, width **275px**, bg `rgba(0,35,71,.5)`                                                                                                                                               | `.events_area`, `.single_event .event_details`                                                                                                                           |
| Testimonials     | card padding 50px 55px, margin 0 10px 80px, shadow `0px 15px 30px 0px rgba(221,221,221,.3)`                                                                                                                                                            | `.testi_item` (6 slides)                                                                                                                                                 |
| Footer           | bg `#002347`; widget h4 white mb 35px; widget links muted → white hover; bottom copyright centered                                                                                                                                                     | `.footer-area`, 4 link cols + Newsletter col + `.footer-bottom`                                                                                                          |
| Header           | `.header_area` absolute z-99 transparent navbar; nav links 500 14px/80px Rubik `#002347`, hover/active `#fdc632`; hidden search bar ("Search Here") toggled by search icon; mobile hamburger + white stacked links                                     | `.main_menu`, `.search_input`, `.nav-item .nav-link`                                                                                                                     |
| Icons (flaticon) | → lucide: book-open (logo, gold), search, student, book, graduation-cap, user, heart, clock, map-pin, menu, close; socials (facebook/twitter/linkedin/pinterest) inline SVG                                                                            | header, features, course meta, events, footer                                                                                                                            |

## Tasks (implementation order)

1. Scaffold `apps/quad` (copy simplest existing app; package
   `@free-react-templates/quad`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/quad" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-primary: #002347`,
   `--color-accent: #fdc632`, `--color-accent-dark: #f8b600`,
   `--color-accent-light: #f4e700`, `--color-card: #f9f9ff`,
   `--color-tile: #334f6c`, `--color-muted: #7b838a`,
   `--font-sans: 'Roboto', sans-serif`, `--font-heading: 'Rubik',
sans-serif`. Add Roboto + Rubik Google Fonts `<link>` to `index.html`.
4. `Header.tsx` — absolute over hero; container: wordmark "Quad" (navy,
   gold `BookOpen` icon — lucide) left; centered nav Home (active) /
   About / Courses / Elements / Blog / Contact (navy, hover gold);
   search icon (lucide `Search`) right toggling a search bar (input
   "Search Here" + close icon); mobile hamburger (lucide `Menu`) +
   collapsible stacked list (aria-expanded).
5. `Hero.tsx` — `min-h-[900px]` photo background (seeded picsum
   `seed/quad-hero/1600/900` or a light CSS gradient + soft photo),
   centered content at ~40% height: uppercase sub-headline (20px navy),
   uppercase h2 "One Step Ahead This Season" (48px), buttons: navy
   "learn more" (primary-btn2 style) + gold "see course" (primary-btn
   style — 5px radius, 13px uppercase, px-12, line-height 48–50px).
6. `Features.tsx` — section title "Awesome Feature" (36px bold Rubik) +
   blurb; 3 cards (bg `--color-card`, p-9): lucide icons
   `GraduationCap` (Scholarship Facility), `BookOpen` (Sell Online
   Course), `Award` (Global Certification) + h4 + p; hover shadow
   `shadow-[0_10px_30px_rgba(0,35,71,0.1)]`.
7. `PopularCourses.tsx` — section title "Our Popular Courses" + blurb;
   course data array (title, author "Cameron", price $25, tag "design",
   students 25, likes 35, seed) → 3 slides (carousel: state + prev/next
   buttons, or horizontal scroll snap): card = thumb
   (`seed/quad-course-<n>/300/200`), circular gold price badge
   (absolute -top-8 right-4, 65px `rounded-full` bg-accent navy text),
   tag span, h4 title, p, author row (avatar `seed/quad-author-<n>` +
   name) + meta (lucide `Users` 25, `Heart` 35).
8. `Registration.tsx` — `bg-primary` navy section, row: left col-7 —
   h1 "Register Now" (42px white) + blurb (astronomer/telescope copy) +
   4 countdown tiles (bg `--color-tile` p-8, white 42px numbers
   150/23/47/59 + Days/Hours/Mins/Secs — static or live ticking from a
   fixed target); right col-4 offset — "Courses for Free" h3 + form:
   Your Name / Your Phone Number / Your Email Address (required, email
   pattern) + gold "Submit" button; validation error on invalid email,
   success state on valid submit.
9. `Trainers.tsx` — section title "Our Expert Trainers" + blurb; 4
   cards (grid-cols-4): portrait (`seed/quad-trainer-<n>/270/320`), h4
   name (Mated Nithan / David Cameron / Jain Redmel / Nathan Macken),
   designation "Sr. web designer", blurb, 4 social icons (inline SVG:
   Facebook, Twitter, LinkedIn, Pinterest).
10. `Events.tsx` — `bg-primary` navy section (py-32); title "Upcoming
    Events" white + blurb; 2 cards (grid-cols-2): thumb
    (`seed/quad-event-<n>/555/330`) with an absolute right overlay panel
    (`bg-[rgba(0,35,71,0.5)]` w-[275px]): date (lucide-free "15 Jun" —
    big day number + month), time (lucide `Clock` + "12:00 AM - 12:30
    AM"), location (lucide `MapPin` + "Hilton Quebec"), blurb, gold
    "View Details" button with SQUARE corners (`rounded-none`).
11. `Testimonials.tsx` — section title "Client say about me" + blurb;
    carousel of 6 slides (state + prev/next): card = avatar
    (`seed/quad-client-<n>/100/100`), h4 name (Elite Martin / Davil
    Saden alternating), quote; shadow
    `shadow-[0_15px_30px_rgba(221,221,221,0.3)]` p-[50px_55px].
12. `Footer.tsx` — `bg-primary`; grid: 4 link columns (Top Products /
    Quick Links / Features / Resources — copy the link lists above) +
    Newsletter col (blurb "You can trust us. we only send promo
    offers," + email input + "subscribe" button); `border-t
border-white/20` bottom bar: "Copyright ©2024 All rights reserved
    | This template is made with ❤ by Colorlib" (keep credit, CC BY
    3.0) + social icons.
13. `App.tsx` — compose Header + Hero + Features + PopularCourses +
    Registration + Trainers + Events + Testimonials + Footer; document
    title "Quad — Education Template".
14. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements.
15. Run `scripts/verify-app.sh quad` (typecheck + lint + coverage tests
    - build) until green.
16. Update TEMPLATES.md lines 383 AND 1635 AND 2043 `[ ]` → `[x]` (ALL
    THREE copies) with surge URL + homepage after deploy;
    `npm run readme:status`; commit `feat: Quad — education template
(ColorLib Edustage)`; PR → main → merge immediately.

## Fidelity gotchas

- **Three TEMPLATES.md copies** (383, 1635, 2043): ALL must be marked
  `[x]` — the item repeats across the Bootstrap / Education / Landing
  Page categories.
- Navy `#002347` and gold `#fdc632` are the whole story: navy fills the
  section backgrounds (events, registration, footer), gold fills the
  buttons — keep the contrast pairing exact; `primary-btn` hover
  INVERTS (navy fill + gold text) and `primary-btn2` hover goes
  transparent with a navy border.
- Buttons are NOT pills here: **5px radius**, 13px uppercase, generous
  horizontal padding (0 48px), line-height 48–50px. The events "View
  Details" button adds `rounded-0` — square corners.
- The course price badge is a **65px circle** absolutely positioned at
  the top-right of the card body (top -34px / right 15px), gold fill +
  navy text — it overlaps the image/card boundary.
- Section titles are 36px BOLD Rubik (not 400 like Academia) — do not
  copy the Poppins/Crimson pairing; this template is Roboto + Rubik.
- The hero content block sits at 40% height over a photo; the photo is a
  background IMAGE in the source (students group) — recreate with a
  light seeded picsum photo (or light gradient), never copy the asset.
- The countdown in the source is a JS clock (clockdiv) — static
  150/23/47/59 values at load are faithful; a live ticking countdown is
  also fine.
- Owl-carousel powers BOTH sliders (courses 3 slides, testimonials 6
  slides) — implement a simple prev/next or auto-advance carousel, not
  a static grid.
- The screenshot's nav (Home/About/Pages/Blog/Contact) is an older
  build; the live DOM (Home/About/Courses/Elements/Blog/Contact) wins.
- Event detail panel is an ABSOLUTE overlay on the right half of the
  image (width 275px, bg rgba(0,35,71,.5)) — not a card below the
  image.
- flaticon/themify are icon fonts — swap to lucide-react (book-open,
  search, student→graduation-cap, user, heart, clock, map-pin, menu,
  close); brand socials must be inline SVG (lucide-react removed brand
  glyphs).
- Header logo is a PNG (navy wordmark + yellow book) — recreate as a
  text wordmark, do NOT copy the image asset.
- Newsletter form in the footer has a mailchimp-style hidden honeypot
  input in the source — omit it in the recreation (not needed for a
  static demo) but keep the visible input + subscribe button.
