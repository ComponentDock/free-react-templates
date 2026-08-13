# Template: Flexly (Fitness / Gym)

## Purpose

Flexly is a fitness/gym landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Slim"
website template (source: https://colorlib.com/wp/template/slim/ — "Slim -
Free Bootstrap 4 Template by Colorlib"), built under a DIFFERENT name
(Flexly — "flex", the gym/muscle core concept, plus the friendly "-ly"
suffix matching the family convention: Wingly, Drivly, Nestly, Bookly,
Coastly, Restly, Sleeply, Dozely, Soarly, Lodgely, Sneakly, Taply; single
lowercase word, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-13), per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The source appears THREE times in TEMPLATES.md (dup-row trap): line 497
(**Bootstrap (216)** category — the FIRST occurrence, the canonical one),
line 1875, and line 2358 — all `- [ ]` rows of the SAME template. ONE
implementation covers all three rows (mark all `[x]` with the same surge
URL at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Slim" — page title "Slim - Free Bootstrap 4
  Template by Colorlib". Fitness/gym one-pager with a 2-slide hero
  carousel, tabbed programs + schedule, coaches, blog, gallery and a dark
  footer. The recreation brands itself **Flexly** but keeps the same
  section structure, copy kinds and layout.
- **Live preview DOM analyzed (verified 2026-08-13):**
  `https://preview.colorlib.com/theme/slim/` — HTTP 200, ~72 KB HTML
  (REACHABLE — the preview is live, not a 404). Stylesheets:
  `css/style.css` (custom, ~83 KB — the template-specific tokens live
  here), `css/bootstrap.min.css`, `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/magnific-popup.css`, `css/aos.css`,
  `css/animate.css`, `css/ionicons.min.css`, `css/flaticon.css`,
  `css/icomoon.css`, `css/open-iconic-bootstrap.min.css`. Screenshot
  `slim-free-template.jpg` (1200×946, viewed in browser) matches the live
  DOM (white navbar + split hero + salmon services band visible in the
  shot).
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark.ftco-navbar-light.site-navbar-target#ftco-navbar`): brand text "Slim" (`.navbar-brand`, left); links right: **Home** (`#home-section`, active) · **Programs** (`#programs-section`) · **Services** (`#services-section`) · **Schedule** (`#schedule-section`) · **About** (`#about-section`) · **Coaches** (`#coaches-section`) · **Blog** (`#blog-section`) · **Contact** (`#contact-section`). Transparent over the hero (`.ftco-navbar-light` = `background: transparent !important; position: absolute; top:0`), turns FIXED white with `box-shadow: 0 0 10px rgba(0,0,0,0.1)` on scroll (`.ftco-navbar-light.scrolled`).
  2. **Hero slider** (`section#home-section.hero` — owl-carousel `.home-slider`, 2 `.slider-item.js-fullheight` slides, each with `.overlay` + a row): RIGHT `.one-third.order-md-last.img.js-fullheight` — photo background `images/bg_1.jpg` (slide 1) / `images/bg_2.jpg` (slide 2) with a VERTICAL `h3.vr` word (writing-mode vertical-lr, rotate 180deg, `images/divider.jpg` bg): **"Strength"** (slide 1) / **"Workout"** (slide 2); LEFT `.one-forth` `.text`: `span.subheading` "Welcome to the Club" (slide 1) / "Welcome to Club" (slide 2), `h1` with `<span>` emphasis — **"Get A <span>Perfect</span> Body <span>Figure</span>"** (slide 1) / **"Pain is <span>Temporary</span> But Glory is <span>Forever</span>"** (slide 2), one lorem paragraph, CTA `.btn.btn-primary.px-5.py-3.mt-3` **"Join with us"**.
  3. **Salmon services band** (`section.ftco-section.ftco-services.ftco-no-pt.ftco-no-pb` — bg `#fe9191`/`#fe7878`): THREE columns (`media.block-6.services.text-center`), each a line icon + title + text: **Free Lesson** (dumbbell icon) · **35% Discount** (clipboard/check-list icon) · **Free Testing** (sneaker icon).
  4. **Programs — vertical tabs** (`section.ftco-section.ftco-no-pb.ftco-no-pt.ftco-program.bg-light#programs-section`): LEFT `col-md-4.nav-link-wrap` — vertical pill nav `.nav.flex-column.nav-pills` with EIGHT tabs, each `span.mr-3.flaticon-*` icon + label: **Fitness Program** (flaticon-gym, active) · **Fit & Healthy** (flaticon-body) · **Muscle Building** (flaticon-woman) · **Bikini & Body** (flaticon-abs) · **Cardio Exercise** (flaticon-running) · **Power Yoga** (flaticon-meditation) · **Aerobics Program** (flaticon-aerobic) · **Crossfit Program** (flaticon-gym); RIGHT `col-md-8.tab-wrap` — EIGHT `.tab-pane` panels (each: h2 title matching the tab + descriptive paragraph + link/button).
  5. **Services — 5 icon cards** (`section.ftco-section.ftco-services-2#services-section`): centered heading — `span.subheading` "Sexy & Healthy" + `h2` "Get a Perfect Body" + lorem paragraph; then a row of FIVE `media.block-6.services.text-center.d-block` cards (circular/rounded line-icon + `h3.heading` + paragraph): **Make Your Body Harmonic** (flaticon-abs) · **Weight Loss Program** (flaticon-scale) · **Group Personal Trainings** (flaticon-check-list) · **Optimal Diet Selection** · **Individual Training Programs**.
  6. **Schedule — day tabs** (`section.ftco-section.ftco-schedule#schedule-section`): centered heading — `span.subheading` "Schedule" + `h2` "Training Schedule" + lorem; LEFT `col-md-4.nav-link-wrap` — vertical pill nav with SEVEN day tabs, each with a `span` program label under the day name: **Monday** (Fitness Program) · **Tuesday** (Crossfit Program) · **Wednesday** (Aerobic Program) · **Thursday** (Yoga Classes) · **Friday** (Fitness Program) · **Saturday** (Yoga Classes) · **Sunday** (Crossfit Program); RIGHT `col-md-8.tab-wrap` — `.tab-pane` panels each with MULTIPLE `.coach-wrap.d-sm-flex` rows: `div.img.coach-img` (120×120 round photo, `images/trainer-N.jpg`) + text: `span.time` "08:00AM - 10:00AM", `h2 > a` class title (**Basic Exercise** · **Yoga Program** · **Body Building** …), lorem paragraph, `h3.coach-name` "— Anthony Miller" + `span.position` "Cardio Expert".
  7. **About / counter** (`section.ftco-counter.img.ftco-section.ftco-no-pt.ftco-no-pb#about-section`): LEFT `col-md-6.col-lg-5` — `.img` photo `images/about.jpg`; RIGHT `col-md-6.col-lg-7` — `span.subheading` "A Few Words About Us" + `h2` (34px, capitalized) **"We're Functioning for Almost <span class="number" data-number="20">0</span> Years"** (animated counter, number colored `#fe9191`) + two lorem paragraphs.
  8. **Testimonials** (`section.ftco-section.testimony-section`, dark bg): centered heading "What Client Says" + FIVE `.testimony-wrap.text-center.py-4.pb-5` items: quote icon (`icon-quote-left`) + `div.user-img` (130×130 round) + quote text + `span.name` + `span.position` ("Artist" in the source).
  9. **Coaches** (`section.ftco-section#coaches-section`): centered heading `h2` "Our Coaches" + FOUR `.staff` cards (`div.img.coach-img` + `h3` name + `span.position`): **Lloyd Wilson** · **Rachel Parker** · **Ian Smith** · **Alicia Henderson**.
  10. **Blog** (`section.ftco-section.bg-light#blog-section`): centered heading — `span.subheading` "Blog" + `h2` "Our Blog" + lorem; `col-md-4` `.blog-entry` cards: `a.block-20` image (`images/image_1.jpg` …) + date block (`.day` "04" + `.yr` "2019" + `.mos` "april") + `h3.heading` link "Why Lead Generation is Key for Business Growth" + paragraph + meta row: **Read More** `.btn.btn-primary` + "Admin" + comment count (`icon-chat` "3").
  11. **Contact** (`section.ftco-section.contact-section.ftco-no-pb#contact-section`): centered heading "Contact Me" + info blocks (Address "198 West 21th Street, Suite 721 New York NY 10016" · Contact Number · …) + form: inputs **Your Name** · **Your Email** · **Subject** + textarea **Message** + submit button.
  12. **Gallery** (`section.ftco-gallery.ftco-section`): image grid of `images/gallery-1.jpg` … `gallery-4.jpg` (background-image blocks, lightbox-capable in source via magnific-popup).
  13. **Footer** (`footer.ftco-footer.ftco-section` — bg `#000000`, padding `7em 0`): FOUR widgets — **"About Slim."** (brand + lorem + social icons `icon-facebook` / `icon-twitter` / `icon-instagram`) · **"Links"** (list of links) · **"Services"** (list of links) · **"Have a Questions?"** (address/phone/email contact lines); copyright bar.
- **Visual design (TEMPLATES.md screenshot `slim-free-template.jpg`, 1200×946, viewed in browser 2026-08-13):** clean modern fitness one-pager. WHITE navbar ("SLIM" logo left, dark links, "Home" highlighted in salmon) over a SPLIT hero: LEFT — small salmon uppercase tagline "WELCOME TO THE CLUB", huge bold black headline "Get A **Perfect** Body **Figure**" ("Perfect"/"Figure" heavier), short lorem paragraph, salmon PILL button "Join with us"; RIGHT — photo of an athletic woman in teal sportswear running up outdoor stairs with a large vertical "STRENGTH" word in bold black caps running up the left edge of the photo; BOTTOM — a SOLID SALMON band with three columns, each a line icon (dumbbell · clipboard-with-check · sneaker) + title + text (**Free Lesson** · **35% Discount** · **Free Testing**). Clean modern sans typography (Nunito Sans). White sections with `#f8f9fa` light bands for Programs/Blog below.
- **Design tokens extracted from the live CSS (`css/style.css`, verified 2026-08-13):**
  - Brand coral/salmon: **`#fe9191`** (35 uses — the theme's true brand). `.btn.btn-primary` override: `background: #fe9191; border: 1px solid #fe9191 !important; color: #fff !important` (hover keeps the salmon bg, text turns `#fe9191`). Also: `.ftco-services` band bg, heading `span.number` counter color, mobile hero subheading color.
  - Secondary brand: **`#fe7878`** (6 uses — `.ftco-services` second background declaration, hover/darker variant).
  - Black **`#000000`**: navbar (`bg-dark` + scrolled white), footer bg `#000000`, hero overlay, `.ftco-counter`/testimony dark backgrounds, vertical `.vr` text color, headings.
  - Light **`#f8f9fa`** (Bootstrap `bg-light`): Programs + Blog section backgrounds.
  - Font: **'Nunito Sans', Arial, sans-serif** (Google Fonts — in the preview's @font-face; add the `<link>` in `index.html`, weights 200–900).
  - Headings: `.heading-section h2` — `font-size: 40px` (28px mobile), `font-weight: 600`; `span.subheading` — small uppercase label (letter-spaced, ~3px), salmon on light sections.
  - Buttons: `.btn` `border-radius: 30px` (PILL); primary = salmon fill, white text, 1px salmon border; hero CTA padded `px-5 py-3 mt-3`.
  - Hero `h3.vr`: `writing-mode: vertical-lr; transform: rotate(180deg); text-orientation: sideways` — vertical text along the photo edge.
  - Round images: `.coach-img` 120×120 `border-radius: 50%`; `.user-img` (testimonials) 130×130 round.
  - Section rhythm: `.ftco-section` padding ~`7em 0`; footer padding `7em 0`.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap 4 layout (NO Bootstrap dependency); section order 1:1 as above; body in Nunito Sans via Google Fonts `<link>` in `index.html`; brand `#fe9191` (+ darker `#fe7878`) in `@theme` used via Tailwind classes; `#000000` footer/navbar, `#f8f9fa` light bands; pill buttons (`rounded-full`); images via seeded picsum placeholders (`picsum.photos/seed/flexly-<n>/<w>/<h>` — athletic/action subjects for the hero + coach + gallery shots), icons from lucide-react (dumbbell, clipboard-check, footprints/shoe for the salmon band; activity/heart/zap for program tabs; quote for testimonials; facebook/twitter/instagram as INLINE SVG brand icons — lucide-react removed brand icons); the hero owl-carousel + tab panels as client-side React state (accessible tablist pattern for Programs/Schedule); the animated "20 Years" counter as a small count-up effect; the source's lorem copy may be paraphrased but keep the same kinds (tagline + split hero + CTA; salmon band icons; tab labels; coach rows; blog cards; footer widgets); brand "Slim"/"Colorlib" → "Flexly" everywhere including the footer credit (neutral); document title "Flexly — Fitness & Gym". Nav links are anchor links to the section ids; "Join with us", "Read More" etc. are dead links in the recreation (single landing page).

Flexly lives in `apps/flexly` (package `@free-react-templates/flexly`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent-over-hero navbar with a brand, eight
anchor links, and a sticky white scrolled state.

#### Scenario: Navbar links and brand

- **GIVEN** the Flexly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand "Flexly" on the left
- **AND** the nav SHALL show links HOME (active), PROGRAMS, SERVICES,
  SCHEDULE, ABOUT, COACHES, BLOG, CONTACT

#### Scenario: Anchor targets

- **GIVEN** the navbar is rendered
- **WHEN** any nav link is followed
- **THEN** it SHALL anchor to its section: #home-section (hero),
  #programs-section, #services-section, #schedule-section, #about-section,
  #coaches-section, #blog-section, #contact-section

#### Scenario: Scrolled navbar turns white

- **GIVEN** the page is scrolled
- **WHEN** the navbar is observed after scrolling
- **THEN** it SHALL become fixed with a white background and a subtle
  shadow (transparent over the hero at the top)

### Requirement: Hero slider

The system SHALL render a full-height 2-slide hero carousel with a photo
side carrying vertical text and a text side with tagline, headline, copy
and a pill CTA.

#### Scenario: First slide content

- **GIVEN** the Flexly page is rendered
- **WHEN** the first hero slide is active
- **THEN** the tagline "Welcome to the Club" SHALL be shown
- **AND** the headline "Get A Perfect Body Figure" SHALL be shown with
  "Perfect" and "Figure" emphasized
- **AND** a short lorem paragraph SHALL be shown
- **AND** a salmon pill button "Join with us" SHALL be shown
- **AND** the photo side SHALL show a photo with the vertical word
  "STRENGTH" along its edge

#### Scenario: Second slide content

- **GIVEN** the hero carousel is rendered
- **WHEN** the carousel advances to the second slide
- **THEN** the tagline "Welcome to Club" SHALL be shown
- **AND** the headline "Pain is Temporary But Glory is Forever" SHALL be
  shown with "Temporary" and "Forever" emphasized
- **AND** the vertical word on the photo side SHALL be "WORKOUT"

#### Scenario: Slide navigation

- **GIVEN** the hero carousel is rendered
- **WHEN** a user navigates between slides (arrows/dots/auto-advance)
- **THEN** only the active slide SHALL be visible and the other slide
  SHALL be hidden

### Requirement: Salmon services band

The system SHALL render a solid salmon band with three icon columns under
the hero.

#### Scenario: Three feature columns

- **GIVEN** the page is rendered
- **WHEN** the band below the hero is inspected
- **THEN** the band SHALL have a salmon background (`#fe9191`)
- **AND** it SHALL show three columns, each with a line icon, a title and
  a short text: Free Lesson · 35% Discount · Free Testing

### Requirement: Programs tabs

The system SHALL render a light-background section with a vertical tab
list of eight fitness programs and matching content panels.

#### Scenario: Program tabs and panels

- **GIVEN** the Programs section is rendered
- **WHEN** the section is inspected
- **THEN** eight vertical tabs SHALL be shown in order: Fitness Program,
  Fit & Healthy, Muscle Building, Bikini & Body, Cardio Exercise, Power
  Yoga, Aerobics Program, Crossfit Program
- **AND** each tab SHALL carry an icon
- **AND** clicking a tab SHALL reveal its matching content panel (title +
  paragraph) while hiding the others

### Requirement: Services cards

The system SHALL render a centered "Get a Perfect Body" heading followed
by five icon service cards.

#### Scenario: Five service cards

- **GIVEN** the Services section is rendered
- **WHEN** the section is inspected
- **THEN** an eyebrow "Sexy & Healthy" and heading "Get a Perfect Body"
  SHALL be shown above five cards
- **AND** the cards SHALL be: Make Your Body Harmonic · Weight Loss
  Program · Group Personal Trainings · Optimal Diet Selection ·
  Individual Training Programs
- **AND** each card SHALL show an icon, a title and a short paragraph

### Requirement: Schedule day tabs

The system SHALL render a "Training Schedule" section with seven day tabs
and schedule rows inside each panel.

#### Scenario: Day tabs

- **GIVEN** the Schedule section is rendered
- **WHEN** the section is inspected
- **THEN** seven vertical day tabs SHALL be shown: Monday (Fitness
  Program), Tuesday (Crossfit Program), Wednesday (Aerobic Program),
  Thursday (Yoga Classes), Friday (Fitness Program), Saturday (Yoga
  Classes), Sunday (Crossfit Program)
- **AND** clicking a day tab SHALL reveal its schedule panel

#### Scenario: Schedule rows

- **GIVEN** a day tab is active
- **WHEN** its panel is inspected
- **THEN** the panel SHALL show at least one coach row with a round photo,
  a time range (e.g. "08:00AM - 10:00AM"), a class title, a paragraph,
  and a coach name with position

### Requirement: About counter

The system SHALL render a split About section with a photo and a counter
headline.

#### Scenario: About content

- **GIVEN** the About section is rendered
- **WHEN** the section is inspected
- **THEN** an eyebrow "A Few Words About Us" SHALL be shown
- **AND** the headline "We're Functioning for Almost 20 Years" SHALL be
  shown with the number 20 in the brand color
- **AND** a photo SHALL be shown on the left
- **AND** two paragraphs SHALL be shown on the right

### Requirement: Testimonials

The system SHALL render a dark testimonials section with five quote cards.

#### Scenario: Testimonial cards

- **GIVEN** the Testimonials section is rendered
- **WHEN** the section is inspected
- **THEN** a heading "What Client Says" SHALL be shown
- **AND** five cards SHALL be shown, each with a quote icon, a round
  avatar, a quote text, a name and a position

### Requirement: Coaches

The system SHALL render an "Our Coaches" section with four coach cards.

#### Scenario: Coach cards

- **GIVEN** the Coaches section is rendered
- **WHEN** the section is inspected
- **THEN** the heading "Our Coaches" SHALL be shown
- **AND** four cards SHALL be shown with round photos and names: Lloyd
  Wilson · Rachel Parker · Ian Smith · Alicia Henderson
- **AND** each card SHALL show the coach's position

### Requirement: Blog

The system SHALL render a light-background "Our Blog" section with
blog-entry cards.

#### Scenario: Blog cards

- **GIVEN** the Blog section is rendered
- **WHEN** the section is inspected
- **THEN** the heading "Our Blog" SHALL be shown
- **AND** blog cards SHALL be shown, each with an image, a date block
  (day/month/year), a post title link, a paragraph, and a meta row with
  "Read More", an author, and a comment count

### Requirement: Contact

The system SHALL render a Contact section with info blocks and a form.

#### Scenario: Contact form

- **GIVEN** the Contact section is rendered
- **WHEN** the section is inspected
- **THEN** the heading "Contact Me" SHALL be shown
- **AND** contact info blocks SHALL be shown (address, contact number)
- **AND** a form SHALL be shown with inputs Your Name, Your Email,
  Subject, and a Message textarea, plus a submit button

### Requirement: Gallery

The system SHALL render a gallery section with an image grid.

#### Scenario: Gallery grid

- **GIVEN** the Gallery section is rendered
- **WHEN** the section is inspected
- **THEN** a grid of gallery images SHALL be shown (4+ images)

### Requirement: Footer

The system SHALL render a black footer with four widget columns and
social icons.

#### Scenario: Footer widgets

- **GIVEN** the Footer is rendered
- **WHEN** the footer is inspected
- **THEN** it SHALL have a black background
- **AND** it SHALL show four columns: About Flexly (brand + text + social
  icons), Links, Services, and Have a Questions? (contact lines)
- **AND** a copyright bar SHALL be shown, with a neutral credit (no
  ColorLib attribution; per policy the footer MUST link
  https://www.componentdock.com/)

## Verification checklist

- [ ] App `apps/flexly` (package `@free-react-templates/flexly`), 100%
      vitest coverage, per-app gate green (`scripts/verify-app.sh flexly`)
- [ ] Section order 1:1 with the source: navbar → hero slider (2 slides,
      vertical STRENGTH/WORKOUT) → salmon band (Free Lesson / 35% Discount
      / Free Testing) → Programs (8 vertical tabs) → Services (5 icon
      cards, "Get a Perfect Body") → Schedule (7 day tabs + coach rows) →
      About/counter (20 Years, `#fe9191` number) → Testimonials (5 cards,
      dark) → Coaches (4 cards) → Blog (cards w/ date blocks) → Contact
      (info + form) → Gallery (grid) → black footer (4 widgets + copyright)
- [ ] Brand tokens in `@theme`: `#fe9191` (primary), `#fe7878` (darker
      accent), `#000000` (navbar/footer/dark sections), `#f8f9fa` (light
      bands) — all via Tailwind classes
- [ ] Body font Nunito Sans via Google Fonts `<link>` in `index.html`
- [ ] Pill buttons: `rounded-full`, salmon fill `#fe9191`, white text,
      1px salmon border; hero CTA padded
- [ ] Vertical hero text via `writing-mode: vertical-lr` +
      `rotate(180deg)`
- [ ] Placeholder images via `picsum.photos/seed/flexly-<n>/<w>/<h>`
      (athletic/action subjects for hero/coach/gallery), icons from
      lucide-react (brand icons as inline SVG), no copied assets
- [ ] Brand renamed "Slim"/"Colorlib" → "Flexly" everywhere; copyright
      credit neutral; footer MUST link https://www.componentdock.com/;
      dead links (Join with us, Read More, footer links) anchor harmlessly
- [ ] Email link is mailto:, phone link computed at runtime from a spaced
      string (no literal tel: URI — toolchain redaction pitfall)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark ALL THREE `- [ ]` rows
      (lines ~497 Bootstrap, ~1875, ~2358) `[x]` with the same surge URL +
      `npm run readme:status` (implementer)
