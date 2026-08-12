# Template: Grind (Gym / Fitness Template)

## Purpose

Grind is a single-page gym/fitness website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Flawless"
website template design (source: https://colorlib.com/wp/template/flawless/,
preview: https://preview.colorlib.com/theme/flawless/), built under a
DIFFERENT name (**Grind** — gym slang for sustained hard work, matching the
source's motivational workout theme) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

TEMPLATES.md has TWO copies of this item (line 401 in `## Bootstrap (216)` and
line 1849 in `## Health Fitness (72)` — duplicate rows); ONE recreation
(Grind) covers both; the implementer marks BOTH rows `[x]`. NOTE: do NOT
conflate with the other gym-family ColorLib templates (Fitnessgym → vigor,
Fitnesstrainer → ironvault, Fitfloss → swole, Fitzone 2 → gains, Gutim, Gymer,
etc.) — they are SEPARATE templates with their own slugs.

## Design reference (replication findings)

- **Original:** ColorLib "Flawless" — classic Colorlib Bootstrap gym
  single-pager with a coral-orange (`#f17445`) brand accent, a 4-slide
  fullscreen photo hero, a 5-card overlapping pricing row, service cards,
  a tabbed class schedule, a shop grid, a fixed-bg counter band, an owl
  trainer carousel, a coral testimonial strip, circular class cards, a
  coral request form, event cards, blog cards, an image gallery, a coral
  subscribe band, and a dark footer. Demo brands itself "Flawless"; the
  recreation uses the NEW name **Grind**.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/flawless/`
  (HTTP 200, 44,621 bytes HTML). `<title>` = "Flawless Template". Master
  stylesheet `css/style.css` (~43 KB, fully extracted for tokens); libs:
  bootstrap, flexslider (hero), owl.carousel (trainers), animate.css,
  magnific-popup, icomoon + flaticon icon fonts, bootstrap-datepicker.
  Work Sans (200–700) is embedded via cf-fonts @font-face blocks in the
  page — load it via Google Fonts `<link>` in index.html.
- **CSS tokens (from style.css):**
  - Brand coral: `#f17445` — `a` links, `::selection`, `.btn-primary`
    background + 2px border, hero `.btn.btn-learn`, schedule day-tab
    `.active a` pill, schedule `.time span` bottom border, shop `.price
span` text, classes `.price` circle badge, trainers owl dot `.active`,
    classes-desc check-circle icons, `.colorlib-request` background,
    `#colorlib-subscribe` background, footer link `i` icons, event `.meta`
    day/month, contact-info icons, blog day badge. Hover: `.btn-primary`
    hover → `#f3865d` (lighter coral) bg + border; hero `.btn-learn`
    hover → `#000`.
  - Headings: `h1–h6` Work Sans, color `#000`, weight 400, margin 0 0 20px,
    line-height 1.5. `.colorlib-heading h2`: 34px, weight 300 (30px on
    mobile). Section padding: 8em 0 (`#colorlib-services`, `#colorlib-schedule`,
    `.colorlib-shop`, `.colorlib-trainers`, `.colorlib-classes`,
    `.colorlib-request`, `.colorlib-event`, `.colorlib-blog`,
    `.colorlib-gallery`, `#colorlib-subscribe`).
  - Body: `p` Work Sans, weight 300, 17px, line-height 1.5, color gray
    (Bootstrap default `#808080`-ish gray). Background `#fff`.
  - Light grey band `#f2f3f7` = `.colorlib-light-grey` — used on
    `.colorlib-blog`, `.services` cards, `.event-entry`, `.side`,
    `.con-info` contact tiles, `.form-control` bg. Lines: `#d9d9d9`
    (schedule row borders), `#f0f0f0` (form-control border, review
    border), `#e6e6e6` (event desc border).
  - Footer `#colorlib-footer`: background `#25282a` (dark slate), text
    `rgba(255,255,255,.6)`, links `rgba(255,255,255,.9)` with `#f17445`
    icons, `h4` `#e6e6e6` 13px uppercase weight 700, `.f-blog` title links
    `#cccccc`, copy bar text `#fff`.
  - Buttons `.btn`: `border-radius: 30px`, padding 8px 20px, 15px/400,
    margin-right/bottom 4px. Hero `.btn`: 12px, uppercase,
    letter-spacing 2px, padding 20px 30px, border none; `.btn-learn` bg
    `#f17445` white text, hover → `#000`.
  - "Degree" section transition (signature flourish): `.colorlib-degree-bg`
    / `.colorlib-degree-bg-full` draw a white skewed parallelogram at the
    section bottom (`::before`/`::after` `skewY(±4deg)`, height 90–120px,
    bottom -60px) — used on counter, request, classes, blog, gallery.
  - Pricing row `.intro-flex .one-third`: width 20% (5 cards), bg
    `#f17445` (even cards get `rgba(0,0,0,.05)` overlay), padding
    2.5em 1.5em; `.price` 40px/400 white, `.month` uppercase 12px, `h3`
    22px/300 white, `p` `rgba(255,255,255,.8)`, `.btn-more` uppercase 12px
    white link margin-top 60px. `.intro-wrap` margin-top -6em so the row
    overlaps the hero bottom.
  - Hero `.flexslider .slides li`: min-height 650px, bg image cover,
    centered `.slider-text-inner`; h1 white; `.mouse` scroll indicator
    (absolute bottom 10em, animated wheel) + flexslider paging dots.
  - Services `.services`: bg `#f2f3f7`, padding 10px, margin-bottom 30px;
    icon `i` 50px `#000` (flaticon gym/weightlifting/martial-arts/gloves →
    lucide equivalents); `.services-img` 240px; desc `h3` 18px/400.
  - Schedule: `.schedule ul.week` — white pill `border-radius: 30px`, 7
    day links 14px gray, `.active a` bg `#f17445` white pill; rows
    `.schedule-flex` flex, `border-bottom: 1px solid #d9d9d9`; cells
    `.entry-forth` width 25% with `border-left: 1px solid #d9d9d9`
    (icon 40px `#f17445`, `.time span` 12px `#000` with
    `border-bottom: 1px solid #f17445`, `h3` 18px/300, `.trainer` 13px).
  - Shop `.product-entry`: `.product-img` 300px; hover `.cart` overlay
    `rgba(0,0,0,.8)` (opacity 0→1, uppercase 12px links "Add to Cart" /
    "View Details", link hover bg `#f17445`); desc `h3` uppercase 14px,
    `.price span` `#f17445` 400, `.sale` gray line-through 300.
  - Counter `.colorlib-counters`: bg image `background-attachment: fixed`,
    `.overlay` `#000` opacity .5; `.icon i` 50px `rgba(255,255,255,.9)`;
    `.colorlib-counter` 60px/300 white; `.colorlib-counter-label`
    `rgba(255,255,255,.8)` 20px/300. Labels: Clients, Trainers, Managers,
    Rooms.
  - Trainers `.trainers-entry`: `.trainer-img` 300px, `border-radius: 4px`;
    desc `h3` 18px/400, `span` 13px (role); owl dots bottom -80px, active
    `#f17445`.
  - Testimony `#colorlib-testimony`: bg image fixed + `.overlay` `#000`
    opacity .5; `.testimony-flex .one-fifth` width 20% bg `#f17445` (even
    cards `rgba(0,0,0,.05)`), padding 2em; blockquote
    `rgba(255,255,255,.8)`, `.figure-img` 30px circle, `h3` 18px/300 white.
  - Classes `.classes`: `.classes-img` 250px circle (`border-radius: 50%`),
    `.price` badge 80px circle bg `#f17445` white text centered; desc
    padding 1.5em, `h3` 20px/300, `p a.btn-learn` 13px `#000`.
  - Request `.colorlib-request`: bg `#f17445`; `h2` white, `p`
    `rgba(255,255,255,.7)`; form labels white 400; `.form-control` 50px,
    bg `rgba(255,255,255,.9)`, `border: 2px solid white`, focus → `#fff`;
    fields: Services (select), Fullname, Phone, Date (datepicker);
    Submit `.btn-block` `border: 1px solid rgba(255,255,255,.3)`,
    padding 12px.
  - Events `.event-entry`: bg `#f2f3f7`, padding 1.3em, margin-bottom 30px;
    `.desc` right-aligned with `.meta` absolute right (`.day` 36px 700
    `#f17445`, `.month` 20px 400), border-bottom `#e6e6e6`; `.location`
    padding-left 45px with `#f17445` map icon.
  - Blog `.article-entry`: `.blog-img` 250px; `.meta` absolute bottom
    -49px left 1em — `.day` badge bg `#f17445` white 24px, `.month` badge
    bg `#fff` `#333333` 14px; `.desc` padding 2.5em 1.5em, `h2` 22px,
    `.admin` line.
  - Gallery `.gallery-img`: width 20%, height 300px, float left; hover
    `.icon` overlay `rgba(0,0,0,.5)` with white icon (opacity 0→1).
  - Subscribe `#colorlib-subscribe`: bg `#f17445`, padding 2em 0; heading
    `h2` white + `p` `rgba(255,255,255,.6)` 18px; email input transparent
    with `border-bottom: 1px solid rgba(255,255,255,.1)`, placeholder
    `rgba(255,255,255,.6)`; button `rgba(255,255,255,.2)` uppercase white,
    50px, radius 0 (square join).
- **Screenshot:** `flawless-free-template.jpg` (1200×946, viewed in browser)
  — full-width hero photo of a woman sitting in calm blue water (viewed from
  behind), white thin-sans centered headline "Working out is a reward not a
  punishment", transparent white nav with black "FLAWLESS" logo left + menu
  (Home, Classes, Schedule, Trainers, Events, Blog, Shop, Contact) right,
  faint carousel dots below the headline; directly below the hero, a row of
  FIVE solid coral cards (Fitness Program, Yoga Program, Dance Program,
  Aerobics Classes, Pilates — white title, "$150" + "MONTH", placeholder
  paragraph, "MORE →" link). Modern, clean, minimalist; high-contrast white
  - black + coral; athletic sans-serif typography. Demo copy is placeholder
    ("Which roasted parts of sentences fly into your mouth") — paraphrase into
    varied gym copy.
- **Section order (1:1, from live demo DOM):**
  1. `.colorlib-nav` — absolute transparent nav over the hero: `.top-menu`
     (padding 40px 30px) with `#colorlib-logo` "Flawless" 24px left +
     `.menu-1` right-aligned links: Home, Classes (submenu: Classes Single,
     Cardio Classes, Muscle Classes, Fitness Classes, Body Building),
     Schedule, Trainers, Events, Blog, Shop, Contact. Mobile: hamburger
     `.colorlib-nav-toggle` + offcanvas panel (`#1a1a1a`, 270px) <768px.
  2. `#colorlib-hero` — flexslider of FOUR `.slides li` (bg images
     img_bg_1..4.jpg, min-height 650px, cover): centered white h1 quotes —
     "This is a lifestyle there is no finish line", "Don't stop when it
     hurts, stop when you're done", "Stop wishing, start doing", "Working
     out is a reward not a punishment"; `.btn.btn-learn` per slide; paging
     dots + `.mouse` scroll indicator.
  3. `#colorlib-intro` — `.intro-wrap` (margin-top -6em, overlapping hero):
     `.intro-flex` of FIVE `.one-third` coral cards — Fitness Program,
     Yoga Program, Dance Program, Aerobics Classes, Pilates; each: `$150`
     40px + "MONTH", blurb, `.btn-more` "More →".
  4. `#colorlib-services` — heading "Work hard stay humble" (`.colorlib-heading`
     h2 34px/300) + FOUR `.services` cards on `#f2f3f7`: Cardio Program
     (flaticon-gym), Body Building (flaticon-weightlifting), Karate Classes
     (flaticon-martial-arts), Boxing Program (flaticon-gloves) — each with
     `.services-img` photo, icon, h3, blurb.
  5. `#colorlib-schedule` — heading "Our Class Schedule" + `.schedule ul.week`
     white pill day tabs (Sunday…Saturday, active pill `#f17445`) + rows
     `.schedule-flex` ×8 (Cardio Program, Loose Weight Program, Yoga
     Classes, Boxing Program, Karate Classes, Body Building, Swimming
     Program, Basic Exercise): each row = icon + time (e.g. "06am - 8am")
     - class h3 + trainer name.
  6. `.colorlib-shop` — heading "Let's Shop" + FOUR `.product-entry` cards:
     Boxing Gloves, Dumbell, Shoes, Yoga Mat — `.product-img` photo with
     hover "Add to Cart / View Details" overlay, uppercase title, coral
     price (`.sale` strikethrough on some).
  7. `#colorlib-counter` — `.colorlib-counters.colorlib-degree-bg` fixed bg
     image + dark overlay + `.colorlib-heading` "What we offer" (white) +
     FOUR `.counter-entry`: Clients, Trainers, Managers, Rooms (60px
     counters).
  8. `.colorlib-trainers` — heading "Our Trainers" + owl carousel of FIVE
     `.trainers-entry`: Diego Carter (Power Trainer), Lea Young (Yoga
     Trainer), Alysha Reed (Dance Trainer), George Cooper (Boxing Trainer),
     Melody Moxin (Boxing Trainer) — `.trainer-img` photo, name h3, role
     span; dots below.
  9. `#colorlib-testimony` — `.testimony-img` fixed bg + overlay, heading
     "What people says behind their success" (white) + `.testimony-flex` of
     FIVE `.one-fifth` coral tiles (blockquote + 30px avatar + name "Dave
     Henderson"; source repeats the same person ×5 — use 5 distinct
     members for the same kind of content).
  10. `.colorlib-classes` — heading "Our Classes" + THREE `.classes` cards:
      Fitness Gym & Cardio, Strength Training, Yoga Program — `.classes-img`
      circular photo with coral 80px `.price` badge (e.g. `$150`), h3,
      blurb, "Learn More" link.
  11. `.colorlib-request.colorlib-degree-bg` — bg `#f17445`, heading
      "Request" + `.colorlib-form`: Services select, Fullname, Phone, Date
      - full-width Submit button.
  12. `.colorlib-event` — heading "Upcoming Events" + THREE `.event-entry`
      cards on `#f2f3f7`: Special Training for boxing, Gather for World
      Yoga Day, Motivational exercise — date `.meta` (day/month), title,
      organizer, location line.
  13. `.colorlib-blog.colorlib-light-grey.colorlib-degree-bg-full` — heading
      "Recent Blog" + THREE `.article-entry`: "5 Ways to Make Yoga Class
      More Restorative", "3 Balancing Poses for Winter", "Need workout
      motivation?" — `.blog-img` photo with day/month badge, title h2,
      admin/meta line.
  14. `.colorlib-gallery` — heading "Our Gallery" + FIVE `.gallery-img`
      tiles (20% width, 300px) with hover overlay icon.
  15. `#colorlib-subscribe` — bg `#f17445`, heading "Subscribe Newsletter"
      - "Tips for sexy body" sub + inline form: email input (underline
        style) + square uppercase "Subscribe Now" button.
  16. `#colorlib-footer` — bg `#25282a`, padding-top 6em: FOUR columns —
      "About Flawless" (logo + blurb + social icons), "Quick Links"
      (Home, Classes, Schedule, Trainers, Events, Blog, Shop, Contact),
      "Recent Post" (2 `.f-blog` thumbs + titles), "Contact Info"
      (address/phone/email). Bottom `.copy` bar: copyright → "© 2026
      Grind. All rights reserved." + "More templates at Component Dock"
      (https://www.componentdock.com/).
  - Extra fidelity notes: the source repeats the same testimonial person
    ("Dave Henderson") in all five tiles and the same trainer in schedule
    rows — use distinct names for the same kind of content. Hero has FOUR
    slides; demo copy is placeholder — paraphrase into motivational gym
    copy. `#colorlib-services` and `.colorlib-shop` appear without their
    own `id` in some build variants — order is what matters, use ids only
    as anchors.

## Requirements

### Requirement: Navigation bar

The system SHALL render a transparent nav bar fixed over the hero with the
brand logo and the navigation links Home, Classes, Schedule, Trainers,
Events, Blog, Shop, and Contact.

#### Scenario: Nav content

- **GIVEN** the page is loaded
- **THEN** the nav SHALL show the brand logo "Grind" on the left
- **AND** the nav SHALL contain the links Home, Classes, Schedule,
  Trainers, Events, Blog, Shop, and Contact

#### Scenario: Classes dropdown

- **WHEN** the Classes nav item is activated
- **THEN** dropdown items Classes Single, Cardio Classes, Muscle Classes,
  Fitness Classes, and Body Building SHALL be revealed

#### Scenario: Mobile menu

- **WHEN** the viewport is narrower than 768px
- **THEN** a hamburger toggle SHALL be shown
- **AND** activating it SHALL open an offcanvas menu with the same links

### Requirement: Hero slider

The system SHALL render a full-width hero carousel of four slides, each with
a background photo, a centered white motivational headline, and a coral
"learn" button.

#### Scenario: Slide content

- **GIVEN** the page is loaded
- **THEN** the hero SHALL display the first slide with headline "This is a
  lifestyle there is no finish line"
- **AND** the carousel SHALL have four slides with the quotes "Don't stop
  when it hurts, stop when you're done", "Stop wishing, start doing", and
  "Working out is a reward not a punishment"

#### Scenario: Slide navigation

- **WHEN** a paging dot is activated
- **THEN** the hero SHALL show the corresponding slide
- **AND** the active dot SHALL be visually highlighted

### Requirement: Pricing cards row

The system SHALL render five coral pricing cards overlapping the hero
bottom, each with a program name, a price, a month label, a blurb, and a
"More" link.

#### Scenario: Five program cards

- **GIVEN** the page is loaded
- **THEN** the pricing row SHALL show five cards: Fitness Program, Yoga
  Program, Dance Program, Aerobics Classes, and Pilates
- **AND** each card SHALL show a "$150" price with a "MONTH" label
- **AND** each card SHALL have a "More →" link

### Requirement: Services section

The system SHALL render a "Work hard stay humble" heading followed by four
service cards, each with an icon, a photo, a title, and a blurb.

#### Scenario: Four services

- **GIVEN** the page is loaded
- **THEN** the services section SHALL show Cardio Program, Body Building,
  Karate Classes, and Boxing Program cards
- **AND** each card SHALL show an icon, a photo, and a title

### Requirement: Class schedule

The system SHALL render a weekly class schedule with seven day tabs and
eight schedule rows, each row showing an icon, a time, a class name, and a
trainer.

#### Scenario: Day tabs and rows

- **GIVEN** the page is loaded
- **THEN** the schedule SHALL show day tabs Sunday through Saturday
- **AND** the active day tab SHALL be a coral pill
- **AND** rows SHALL include Cardio Program, Loose Weight Program, Yoga
  Classes, Boxing Program, Karate Classes, Body Building, Swimming Program,
  and Basic Exercise

### Requirement: Shop grid

The system SHALL render a "Let's Shop" heading followed by four product
cards, each with a photo, a title, and a coral price, and a hover overlay
with Add to Cart / View Details links.

#### Scenario: Product cards

- **GIVEN** the page is loaded
- **THEN** the shop SHALL show Boxing Gloves, Dumbell, Shoes, and Yoga Mat
  products
- **AND** hovering a product SHALL reveal an overlay with Add to Cart and
  View Details links

### Requirement: Counter band

The system SHALL render a fixed-background counter section with a "What we
offer" heading and four counters: Clients, Trainers, Managers, Rooms.

#### Scenario: Counters

- **GIVEN** the page is loaded
- **THEN** the counter section SHALL show the labels Clients, Trainers,
  Managers, and Rooms with numeric values

### Requirement: Trainers carousel

The system SHALL render an "Our Trainers" heading and a carousel of five
trainer cards, each with a photo, a name, and a role.

#### Scenario: Trainer cards

- **GIVEN** the page is loaded
- **THEN** the trainers SHALL include Diego Carter (Power Trainer), Lea
  Young (Yoga Trainer), Alysha Reed (Dance Trainer), George Cooper (Boxing
  Trainer), and Melody Moxin (Boxing Trainer)

### Requirement: Testimonials

The system SHALL render a testimonial strip over a fixed background with a
white heading and five coral quote tiles, each with a quote, an avatar, and
a name.

#### Scenario: Quote tiles

- **GIVEN** the page is loaded
- **THEN** the testimonial section SHALL show five quote tiles with an
  avatar and a member name

### Requirement: Classes section

The system SHALL render an "Our Classes" heading and three class cards with
circular photos, coral price badges, titles, blurbs, and learn links.

#### Scenario: Three classes

- **GIVEN** the page is loaded
- **THEN** the classes SHALL be Fitness Gym & Cardio, Strength Training,
  and Yoga Program
- **AND** each card SHALL show a circular photo with a coral price badge

### Requirement: Request form

The system SHALL render a coral request section with a "Request" heading and
a form with Services, Fullname, Phone, and Date fields plus a Submit button.

#### Scenario: Form fields and validation

- **GIVEN** the request section is visible
- **THEN** the form SHALL have Services, Fullname, Phone, and Date inputs
- **AND** a Submit button SHALL submit the form
- **AND** required fields SHALL show validation errors when empty

### Requirement: Upcoming events

The system SHALL render an "Upcoming Events" heading and three event cards,
each with a date badge, a title, an organizer, and a location.

#### Scenario: Event cards

- **GIVEN** the page is loaded
- **THEN** the events SHALL include Special Training for boxing, Gather for
  World Yoga Day, and Motivational exercise
- **AND** each card SHALL show a day/month date badge

### Requirement: Blog section

The system SHALL render a "Recent Blog" heading on a light grey band and
three article cards, each with a photo carrying a day/month badge, a title,
and an admin line.

#### Scenario: Article cards

- **GIVEN** the page is loaded
- **THEN** the blog SHALL show the articles "5 Ways to Make Yoga Class More
  Restorative", "3 Balancing Poses for Winter", and "Need workout
  motivation?"

### Requirement: Gallery

The system SHALL render an "Our Gallery" heading and five photo tiles with a
hover overlay icon.

#### Scenario: Gallery tiles

- **GIVEN** the page is loaded
- **THEN** the gallery SHALL show five photo tiles
- **AND** hovering a tile SHALL reveal an overlay icon

### Requirement: Subscribe band

The system SHALL render a coral subscribe band with a "Subscribe Newsletter"
heading and an inline email form with a Subscribe Now button.

#### Scenario: Subscribe form

- **GIVEN** the subscribe band is visible
- **THEN** an email input with placeholder "Enter your email" SHALL be
  present
- **AND** a "Subscribe Now" button SHALL be present
- **AND** submitting with an invalid email SHALL show an error

### Requirement: Footer

The system SHALL render a dark footer with four columns: About, Quick
Links, Recent Post, and Contact Info, plus a bottom bar with copyright and a
Component Dock link.

#### Scenario: Footer columns

- **GIVEN** the page is loaded
- **THEN** the footer SHALL show the columns About, Quick Links, Recent
  Post, and Contact Info
- **AND** the Quick Links SHALL include Home, Classes, Schedule, Trainers,
  Events, Blog, Shop, and Contact

#### Scenario: Component Dock attribution

- **GIVEN** the footer is rendered
- **THEN** the bottom bar SHALL contain a link to
  https://www.componentdock.com/ labeled "More templates at Component Dock"

### Requirement: Full page composition

The system SHALL render all sections in the source's 1:1 order.

#### Scenario: Page section order

- **GIVEN** the page is loaded
- **THEN** the sections SHALL render in this order: nav, hero slider,
  pricing cards, services, schedule, shop, counter, trainers, testimonials,
  classes, request form, events, blog, gallery, subscribe, footer

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec.
- [ ] App folder `apps/grind`, package `@free-react-templates/grind`; NO
      reference to ColorLib / "flawless" source name in any app file
      (provenance lives only in this spec, TEMPLATES.md, and the PR).
- [ ] Footer links https://www.componentdock.com/ ("More templates at
      Component Dock").
- [ ] `public/CNAME` = `grind.free.componentdock.com`; `"homepage"` =
      https://grind.free.componentdock.com.
- [ ] Brand token `#f17445` in `@theme` (hover `#f3865d`); Work Sans via
      Google Fonts `<link>` in index.html; pill buttons radius 30px with
      coral bg; light band `#f2f3f7`; dark footer `#25282a`; "degree"
      skewed white section transition on counter/request/classes/blog/
      gallery.
- [ ] All sections in the 1:1 order above; nav transparent over hero with
      Classes dropdown + offcanvas mobile menu; hero = 4-slide carousel
      with dots + mouse indicator; pricing = 5 overlapping coral cards;
      services = 4 cards; schedule = 7 day tabs + 8 rows; shop = 4
      products with hover overlay; counter = fixed bg + 4 counters;
      trainers = 5-card carousel; testimonials = 5 coral tiles; classes =
      3 circular cards; request = coral form; events = 3 cards; blog = 3
      articles on `#f2f3f7`; gallery = 5 tiles; subscribe = coral band;
      footer dark with 4 columns.
- [ ] Placeholder images via `https://picsum.photos/seed/grind-<n>/<w>/<h>`
      (hero bg ×4, pricing photos ×5, services ×4, schedule row photos,
      shop ×4, counter bg, trainers ×5, testimonial bg + avatars ×5,
      classes ×3, events, blog ×3, gallery ×5, footer thumbs); icons from
      lucide-react or inline SVG brand icons (never copy source assets).
      Verify hero/counter/testimonial seed subjects visually before
      pinning.
- [ ] 100% coverage (lines/functions/branches/statements) via
      `npm run test:coverage`; typecheck, lint, build all green.
- [ ] Both TEMPLATES.md "Flawless" rows (lines 401 and 1849) marked `[x]`
      with surge URL in bookkeeping.
