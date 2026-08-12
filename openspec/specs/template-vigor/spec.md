# Template: Vigor (Fitness Gym Template)

## Purpose

Vigor is a single-page fitness-gym website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Fitnessgym" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

Vigor recreates the ColorLib "Fitnessgym" free Bootstrap fitness template — a
bold, energetic gym landing page with a green (`#38b143`) brand accent and
light-green gradient highlights, a full-screen hero carousel over gym photos
with a dark overlay, an "ad banner" strip, a split about section, a
background-photo "Ask the experts" team strip, six service cards with line
icons, three pricing tables on a fixed background photo, a working-hours
schedule, a newsletter form, and a photo-background footer with testimonials,
class links, and contact info.

## Design reference (replication findings)

- **Original:** ColorLib "Fitnessgym" — fitness gym / body building template
  (source: https://colorlib.com/wp/template/fitnessgym/).
  TEMPLATES.md has TWO copies of this item (lines 397 and 1844 — mark EVERY
  copy `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/fitnessgym/ — HTTP 200,
  full rendered DOM analyzed (38 KB, title "Fitness Gym - A Modern Fitness
  Gym Template"). Master stylesheet `style.css` (~41 KB, extracted) plus
  imports: bootstrap.min, classy-nav, owl.carousel.min, animate,
  magnific-popup, font-awesome. Fonts come from a Google Fonts `@import`
  inside `style.css`: **Open Sans (300,400,600,700,800)** — body, headings
  and nav all use Open Sans; our recreation loads it from a Google Fonts
  `<link>` instead. Cross-checked against the TEMPLATES.md screenshot
  (`fitnessgym-free-template.jpg`, viewed in browser, 1200×946) and a live
  browser render of the preview — designs match. The demo brands itself
  "Fitness Gym"; our recreation uses the NEW name **Vigor**.
- **Section order (1:1):** Header (`div.header-area`): classy-navbar
  (`nav.classy-navbar.justify-content-between`, id `fitnessNav`) over the
  hero — brand left (`a.nav-brand`, logo image `img/core-img/logo.png`),
  centered menu (Home / Pages▾ / Mega Menu▾ / About Us / News / Contact;
  Pages opens a `.dropdown`, Mega Menu opens a 4-column `.megamenu` with
  `single-mega cn-col-4` columns each listing Home / About Us / Services /
  News / Contact / Elements), right-aligned green gradient `fitness-btn
menu-btn` "Call: +34 586 778 8892" (`fitness-btn` class; on mobile the
  navbar collapses to a hamburger `.navbarToggler`) → Hero
  (`section.hero-area`): `.hero-slides.owl-carousel` of 3 slides
  (`div.single-hero-slide.bg-img` with inline `background-image:
url(img/bg-img/bg-1..3.jpg)`, **height 880px**, 650px 992–1199px, 550px
  768–991px, 600px ≤767px; `::after` dark overlay `rgba(0,0,0,0.3)`):
  `.hero-slides-content` centered per slide — `<h2>` **100px white weight
  400** (48px 992–1199px, 36px 768–991px, 30px ≤767px) + `<p>` white 14px
  weight 600 margin-bottom 40px + CTA button (`fitness-btn wel-btn`):
  slide 1 "Get fit & healthy." + "Get a membership"; slide 2 "Long life
  Fitness." + "Read More"; slide 3 "Fitness wonder." + "Read More"; owl
  prev/next arrows (`.owl-prev`/`.owl-next`, 95×45px, 3px solid `#38b143`
  border, radius 10px, background `#141414`, white uppercase 14px, at left
  5% / right 5%, top 50%, opacity 0 → visible on `.hero-slides:hover`) →
  Ad strip (`div.fitness-adds-area`): two `div.single-add-area.mt-100`
  banners (images `img/bg-img/add1.gif` — blue "25% Discount" block — and
  `img/bg-img/add2.png` — woman trainer photo with green "Fitness Class"
  tag) → About (`div.about-us-area.section-padding-100-0`, **margin-bottom
  -50px, z-index 100** so it pulls up over the ads): row — left
  `.about-text` (col-lg-7): section heading "Why choose Fitness Gym?" (h2
  36px) + paragraph + two buttons "Get a membership" (gradient `btn-3`) and
  "Find out more" (outline `fitness-btn`); right `.about-thumb` (col-lg-5):
  image `img/bg-img/man.png` → Experts (`div.meet-the-experts-area
.section-padding-100-0.bg-img.bg-overlay`, **height 630px** (702px
  768–991px, 1250px ≤767px), background photo): centered section heading
  "Ask the experts" + `.experts-team-members` row of 4
  `.team-members-info` cards (image `img/team-img/1..4.png` + name h3:
  Julia Smith / Mick Hamilton / Jack Black / Criss James + role h6 tag:
  Personal trainer ×3 / Fitness trainer) → Services
  (`div.fitness-services-area.section-padding-100-0`): **no section heading**
  (cards start directly) + 6 `div.single-service-area.mb-100` cards (col-12 col-sm-6
  col-lg-4): `.course-icon.d-flex.align-items-center.justify-content-center`
  (77×77px icon circle — `img/core-img/dumbbell.png`, `slim-down.png`,
  `lotus-position.png`, `apple.png`, `swimming.png`, `stationary-bike.png`)
  - `.course-content.d-flex.align-items-center`: h4 (20px): **Business
    School**, **Fitness Pro**, **Yoga Courses**, **Diet Specialists**,
    **Swimming Pool**, **Spinning Class** + p (margin-top 15px) + "Enroll
    Now" link (first 3 cards) → Pricing (`div.fitness-pricing-table-area
.section-padding-100-0.bg-img.bg-overlay.bg-fixed`, background photo
    `img/bg-img/bg-8.jpg`-style, parallax `bg-fixed`): **no section heading**
    (cards start directly) + 3 `div.single-price-table.mb-100` (col-12 col-md-6 col-lg-4,
    background `#ffffff`): `.price-table-content` padding 40px: `.price`
    **36px weight 600 `#38b143`** + span "/ Month" (14px italic `#838383`);
    h5 title (22px weight 600, margin 30px 0): **Woman Fitness Class $50**,
  **Spinning Class + BONUS $70**, **All Inclusive Gym $90**; `.price-data`
    ul of 3 features (Donec molestie tincidunt tellus / Sit amet aliquet
    auctor nisi / Dut purus eleifentincid — `#838383` 14px weight 400);
    `fitness-btn mt-30` "Enroll Now" → Working hours
    (`div.fitness-working-hours-area.section-padding-100-0`): section heading
    "Working Hours" + `.working-hours` ul (li flex space-between,
    border-bottom 3px `#eaeaea`, hover color `#38b143`): Monday 16:00 -
    20:00 · Tuesday 12:00 - 20:00 · Wednesday 12:00 - 20:00 · Thursday 12:00
  * 20:00 · Friday 15:00 - 21:00 · Saturday 10:00 - 20:00 · Sunday Closed
    → Newsletter (`div.our-newsletter-area.mb-100`): section heading "Our
    Newsletter" + intro p + form (`.form-group`): two inputs
    (`.form-control`, **height 55px, 3px solid `#eaeaea` border, radius
    10px**, padding 0 40px, italic `#838383` 14px) + gradient `fitness-btn`
    "Subscribe" → Footer (`footer.main-footer-area` with class
    `footer-area section-padding-100-0 bg-img bg-overlay`, background photo
    `img/bg-img/bg-11.jpg`): 4 `div.footer-widget-area.mb-50` columns
    (col-12 col-sm-6 col-lg-3): (1) `.widget-title` h6 "Fitness Gym" (16px
    white uppercase) + blurb p (`#bebebe` weight 600) + `.footer-social-info`
    (6 white icons: fa-facebook, fa-twitter, fa-pinterest, fa-instagram,
    fa-dribbble, fa-behance; hover `#38b143`); (2) `.widget-title` h6
    "Testimonials" + `.testimonials-slides.owl-carousel` of 6
    `.single-testimonial` quote blocks (p with opening quote mark, margin
    bottom 50px); (3) `.widget-title` h6 "Fitness Class" + link list:
    Bodybuilding Class / Fitness Class / Yoga Courses / Dumbell Class /
    Spinning Class / Kangoo Jump Class; (4) `.widget-title` h6 "Contact
    Info" + phone p "+53 345 7953 32453" + email p "yourmail@gmail.com" →
    Bottom bar (`div.bottom-footer-area`, padding 40px 0, text-align center):
    p 12px `#5c6077` weight 600 "Copyright ©2026 All rights reserved | This
    template is made with <fa-heart-o> by [Colorlib]" (link hover `#38b143`)
    → recreation credits Vigor.
- **Design tokens extracted from the live preview CSS (`style.css`):**
  - Brand **green `#38b143`** (primary): `fitness-btn` outline color +
    border, price values, owl arrows border, working-hours hover, footer
    social hover, bottom-footer link hover.
  - Light-green **gradient `#b6e358` → `#38b143`** (btn-3 / menu-btn /
    newsletter Subscribe): `background: linear-gradient(to right, #b6e358,
#38b143)`, color `#101214`, no border; and section-heading h6 kicker
    `linear-gradient(to right, #b3e258, #39b143)` clipped to text
    (`-webkit-background-clip: text; -webkit-text-fill-color: transparent`).
  - Ink **`#101214`** — heading color (h1–h6), `btn-3` text, menu-btn text;
    links `#141414` (owl arrows bg `#141414`).
  - White `#fff` — hero slide text, nav links, button text on green,
    footer widget titles, social icons, white section headings (pricing /
    experts on photo backgrounds).
  - Body grays — p text `#838383` (14px, line-height 2); footer blurb
    `#bebebe`; bottom-footer `#5c6077` 12px; newsletter input italic
    `#838383`; working-hours borders `#eaeaea`; input border 3px `#eaeaea`.
  - Buttons — `fitness-btn`: min-width 200px, height 45px, **radius 10px**,
    padding 0 30px, 14px weight 700 uppercase, **3px solid `#38b143`
    border**, color `#38b143`, line-height 39px; hover: color `#fff`,
    background `#38b143`; `btn-2`: solid `#38b143` bg + white text, hover
    `#101214`; `btn-3`/`menu-btn`: green gradient, `#101214` text, hover
    white text.
  - Headings — h1–h6 color `#101214`, weight 700, line-height 1.3;
    `.section-heading h6` 14px uppercase gradient-clip text; `.section-
heading h2` **36px weight 600** (24px ≤767px), margin-bottom 0;
    section-heading margin-bottom 60px; hero slide h2 overrides to 100px
    white weight 400.
  - Section backgrounds — white page; hero = photo + dark `rgba(0,0,0,0.3)`
    overlay; experts = photo + overlay (`.bg-overlay`), 630px tall; pricing
    = photo + overlay + **`background-attachment: fixed`** parallax; footer
    = photo + overlay. `.bg-img` + `.bg-overlay` classes supply them.
  - Radii — **10px** on buttons, owl arrows, newsletter input; 77px
    circular service icon chips; nothing else rounded.
  - Spacing — `.section-padding-100-0` = 100px top / 0 bottom; service
    card `mb-100`; adds `mt-100`; price `.price-table-content` padding
    40px; h5 margin 30px 0; working-hours li border-bottom 3px `#eaeaea`;
    footer widget `mb-50`, widget-title `mb-50`; bottom-footer padding
    40px 0.
- **Visual design (from screenshot + live render):** dark, high-energy gym
  landing page — full-screen hero photo of a woman in a black sports bra
  stretching in a dim gym, dimmed by a dark overlay; big white headline "Get
  fit & healthy." over a green "GET A MEMBERSHIP" button; top nav over the
  hero with the "FITNESS GYM" logo in a thin green-bordered box, centered
  white uppercase links (HOME, PAGES▾, MEGA MENU▾, ABOUT US, NEWS, CONTACT)
  and a green gradient "CALL: +34 578 88 82" button right; carousel numbers
  01/02/03 bottom-left. Below the hero: two ad banners (blue "25% Discount"
  block + trainer photo with green "Fitness Class" tag), a white "Why choose
  Fitness Gym?" about split, a photo-background "Ask the experts" team strip
  (4 trainer portraits), six white service cards with circular line icons
  (dumbbell, waist, lotus, apple, swimming, bike) and "Enroll Now" links,
  three white pricing cards (Woman Fitness Class $50, Spinning Class + BONUS
  $70, All Inclusive Gym $90) over a fixed gym background photo, a white
  working-hours list, a newsletter form with a green gradient Subscribe
  button, and a photo-background footer with testimonials, class links and
  contact info. Demo copy is placeholder lorem — paraphrase into
  fitness-themed copy in the recreation.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/vigor-<n>/<w>/<h>`); icons → lucide-react (dumbbell,
  watch/clock, heart-pulse, apple, waves, bike for services; phone, heart;
  social brand icons as inline SVG per repo rule — lucide-react removed
  brand icons); Open Sans via Google Fonts `<link>`; no assets copied. Copy
  paraphrased but same content kinds (hero slides + CTAs, ad strip, about
  split + 2 buttons, 4 experts, 6 service cards + Enroll Now, 3 pricing
  tables, working-hours list, newsletter form, footer columns + social
  icons + bottom bar).

Vigor lives in `apps/vigor` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header and navigation

The system SHALL render a navbar over the hero with a logo, centered main
navigation with dropdown and mega-menu, and a green gradient phone CTA.

#### Scenario: Brand, navigation and phone CTA

- **GIVEN** the Vigor page is rendered on a wide viewport
- **WHEN** the header is displayed
- **THEN** the header SHALL show the Vigor logo on the left over the hero
- **AND** the nav SHALL show centered white uppercase links: Home, Pages
  (dropdown), Mega Menu (4-column dropdown), About Us, News, and Contact
- **AND** the Pages dropdown SHALL list Home / About Us / Services / News /
  Contact / Elements
- **AND** the header SHALL show a green gradient phone CTA button on the
  right ("Call: +34 586 778 8892")

#### Scenario: Mobile menu toggle

- **GIVEN** the Vigor page is rendered on a narrow viewport
- **WHEN** the hamburger toggler is activated
- **THEN** a mobile menu SHALL open showing the nav links
- **AND** the menu SHALL close when the toggler is activated again

### Requirement: Hero carousel

The system SHALL render a full-screen hero carousel with three slides, each
with a background photo, dark overlay, headline, subtext, and CTA button.

#### Scenario: Hero slide content

- **GIVEN** the Vigor page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL show a full-bleed background photo with a dark
  `rgba(0,0,0,0.3)` overlay on an ~880px-tall slide
- **AND** slide 1 SHALL show the headline "Get fit & healthy." and a "Get a
  membership" button
- **AND** slide 2 SHALL show the headline "Long life Fitness." and a "Read
  More" button
- **AND** slide 3 SHALL show the headline "Fitness wonder." and a "Read
  More" button
- **AND** the hero SHALL provide accessible next/previous controls to cycle
  the slides

### Requirement: Ad banner strip

The system SHALL render a two-banner ad strip between the hero and the about
section.

#### Scenario: Ad banners

- **GIVEN** the Vigor page is rendered
- **WHEN** the ad strip is displayed
- **THEN** the strip SHALL show two banner images side by side (a discount
  promo block and a class promo image with a green label)

### Requirement: About section

The system SHALL render a split about section with text on the left and a
photo on the right.

#### Scenario: About content

- **GIVEN** the Vigor page is rendered
- **WHEN** the about section is displayed
- **THEN** the section SHALL show the heading "Why choose Vigor?" (36px
  weight 600) with a green gradient kicker
- **AND** the section SHALL show a descriptive paragraph
- **AND** the section SHALL show a gradient "Get a membership" button and an
  outlined "Find out more" button
- **AND** the section SHALL show a workout photo on the right

### Requirement: Experts team strip

The system SHALL render an "Ask the experts" section over a background photo
with four trainer cards.

#### Scenario: Team member cards

- **GIVEN** the Vigor page is rendered
- **WHEN** the experts section is displayed
- **THEN** the section SHALL show a background photo with a dark overlay and
  a centered white heading "Ask the experts"
- **AND** the section SHALL show 4 trainer cards in a row, each with a
  portrait photo and a name: Julia Smith, Mick Hamilton, Jack Black, Criss
  James

### Requirement: Services

The system SHALL render a "Services" section with six service cards.

#### Scenario: Service card content

- **GIVEN** the Vigor page is rendered
- **WHEN** the services section is displayed
- **THEN** the section SHALL start directly with its 6 service cards (the
  source section has no heading — cards begin immediately)
- **AND** the section SHALL show exactly 6 service cards in a 3-column grid,
  each with a circular line icon, a 20px title, a short description, and an
  "Enroll Now" link
- **AND** the cards SHALL be: Business School, Fitness Pro, Yoga Courses,
  Diet Specialists, Swimming Pool, Spinning Class

### Requirement: Pricing tables

The system SHALL render a parallax pricing section with three pricing cards.

#### Scenario: Pricing card content

- **GIVEN** the Vigor page is rendered
- **WHEN** the pricing section is displayed
- **THEN** the section SHALL show a fixed-attachment background photo with a
  dark overlay (no section heading — cards start directly)
- **AND** the section SHALL show 3 white pricing cards, each with a green
  36px price, a "/ Month" suffix, a 22px plan title, 3 feature bullets, and
  an "Enroll Now" button
- **AND** the plans SHALL be: Woman Fitness Class $50, Spinning Class +
  BONUS $70, All Inclusive Gym $90

### Requirement: Working hours

The system SHALL render a "Working Hours" schedule list.

#### Scenario: Weekly schedule

- **GIVEN** the Vigor page is rendered
- **WHEN** the working hours section is displayed
- **THEN** the section SHALL show the heading "Working Hours"
- **AND** the section SHALL list each day with its hours, separated by 3px
  `#eaeaea` rules: Monday 16:00-20:00, Tuesday 12:00-20:00, Wednesday
  12:00-20:00, Thursday 12:00-20:00, Friday 15:00-21:00, Saturday
  10:00-20:00, Sunday Closed
- **AND** rows SHALL turn green `#38b143` on hover

### Requirement: Newsletter

The system SHALL render an "Our Newsletter" section with an email form.

#### Scenario: Newsletter form

- **GIVEN** the Vigor page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** the section SHALL show the heading "Our Newsletter" with an intro
  line
- **AND** the section SHALL show a name input and an email input (55px tall,
  3px `#eaeaea` border, radius 10px) and a green gradient "Subscribe" button

#### Scenario: Newsletter submission

- **GIVEN** the Vigor page is rendered
- **WHEN** the newsletter form is submitted
- **THEN** the form SHALL prevent the default page reload
- **AND** the form SHALL show a confirmation message

### Requirement: Footer

The system SHALL render a photo-background footer with four columns and a
bottom bar.

#### Scenario: Footer content

- **GIVEN** the Vigor page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a background photo with a dark overlay and
  white widget titles
- **AND** the footer SHALL show a brand column with a blurb and 6 social
  icon buttons (Facebook, Twitter, Pinterest, Instagram, Dribbble, Behance)
  that turn green on hover
- **AND** the footer SHALL show a testimonials column with quote blocks
- **AND** the footer SHALL show a class links column: Bodybuilding Class,
  Fitness Class, Yoga Courses, Dumbell Class, Spinning Class, Kangoo Jump
  Class
- **AND** the footer SHALL show a contact column with a phone number and an
  email address
- **AND** a bottom bar SHALL show the current year, "All rights reserved",
  and a credit line for the template author

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `apps/vigor` created from a landing/app pattern, package renamed to
      `@free-react-templates/vigor`
- [ ] TDD: tests written first (red), then implementation (green)
- [ ] 100% coverage lines/functions/branches/statements (`npm run
test:coverage -- --project apps/vigor` or `scripts/verify-app.sh vigor`)
- [ ] Brand green `#38b143` + gradient `#b6e358 → #38b143` + ink `#101214` + body gray `#838383` in `@theme`; Open Sans via Google Fonts link
- [ ] Section order matches the original 1:1 (see Design reference)
- [ ] Header: logo left, centered white uppercase nav (Home / Pages▾ /
      Mega Menu▾ / About Us / News / Contact), green gradient phone CTA
      right; mobile hamburger toggles the menu
- [ ] Hero: ~880px full-bleed photo slides with `rgba(0,0,0,0.3)` overlay,
      100px white headline, subtext, CTA buttons (Get a membership / Read
      More), accessible prev/next controls
- [ ] Ad strip: two promo banners between hero and about
- [ ] About: "Why choose Vigor?" split — text + paragraph + gradient "Get a
      membership" + outlined "Find out more" buttons left, photo right
- [ ] Experts: photo bg + overlay, "Ask the experts" heading, 4 trainer
      cards (Julia Smith, Mick Hamilton, Jack Black, Criss James) with role
      tags (Personal trainer ×3 / Fitness trainer)
- [ ] Services: 6 cards (Business School, Fitness Pro, Yoga Courses, Diet
      Specialists, Swimming Pool, Spinning Class) with circular line icons,
      description, "Enroll Now" link — no section heading (source fidelity)
- [ ] Pricing: fixed-bg parallax section, 3 white cards (Woman Fitness
      Class $50 / Spinning Class + BONUS $70 / All Inclusive Gym $90) with
      green price + "/ Month" + 3 bullets + "Enroll Now" — no section
      heading (source fidelity)
- [ ] Working hours: day/hour rows with 3px `#eaeaea` rules, green hover,
      Sunday Closed
- [ ] Newsletter: name + email inputs (55px, 3px `#eaeaea` border, radius
      10px) + gradient Subscribe, confirm on submit
- [ ] Footer: photo bg + overlay; brand + social icons, testimonials, class
      links, contact columns; bottom bar with year + credit
- [ ] Radii: 10px on buttons/inputs; 77px circular service icon chips;
      nothing else rounded
- [ ] Placeholder images via `picsum.photos/seed/vigor-<n>/<w>/<h>`; no
      assets copied; social brand icons as inline SVG
- [ ] PR description: source template, preview URL, design tokens, what
      differs
- [ ] After merge: TEMPLATES.md Fitnessgym (lines 397, 1844) `[~]` → `[x]` +
      Surge URL (`free-react-templates-vigor.surge.sh`) + homepage + `npm
run readme:status`
