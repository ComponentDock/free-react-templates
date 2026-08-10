# Template: Sculpt (Health Fitness Template)

## Purpose

Sculpt is a single-page gym / fitness website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Flawless" website template design (see TEMPLATES.md), built
under a DIFFERENT name (Sculpt — body-sculpting / training, evoking the
source's "flawless physique" fitness positioning, per the monorepo naming
mandate), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Flawless" — a one-page gym / fitness-club theme:
  full-screen hero slider over a photo, then program price cards, services,
  a weekly class schedule, a shop row, animated counters, a trainer
  carousel, testimonials, circular class cards, a request form, events, a
  blog strip, a gallery, a newsletter band, and a dark footer. The whole
  page is driven by one brand accent: a warm orange.
  Source: https://colorlib.com/wp/template/flawless/
  TEMPLATES.md has TWO copies of this item (line 401, category Bootstrap;
  and line 1849, category Health Fitness — mark EVERY copy `[x]` when
  done). No other spec on main maps to this slug (grep-checked).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/flawless/`
  (HTTP 200, 44,621 bytes; title "Flawless Template"). Master stylesheet
  `css/style.css` (43,026 bytes, 1,608 lines, fully extracted for tokens).
  Libs: Bootstrap 3 grid, FlexSlider (hero carousel), Owl Carousel
  (trainers), bootstrap-datepicker (request Date field), animate.css,
  magnific-popup (gallery lightbox), icomoon + flaticon icon fonts. Font:
  **Work Sans** (body 17px / weight 300; headings weight 400) — NOT loaded
  via Google Fonts link in the demo HTML (falls back to system sans in the
  demo); the recreation loads Work Sans via Google Fonts `<link>`.
  Cross-checked against the TEMPLATES.md screenshot
  (`flawless-free-template.jpg`, 1200×946, viewed in browser — see visual
  design below). The demo brands itself "Flawless"; the recreation uses the
  NEW name **Sculpt**.
- **Visual design (from DOM + CSS tokens + screenshot):** full-bleed photo
  hero (screenshot shows a woman in water, viewed from behind) with a
  transparent navbar over it — uppercase bold white wordmark left, white
  links right; centered thin white 50px headline; carousel dots (active
  dot orange) + scroll-down mouse pill. Directly below the hero, a row of
  **five solid-orange program cards** ($150 MONTH, blurb, "MORE" link).
  Then a white services section, a light-grey schedule section with pill
  weekday tabs, a shop grid, a photo-background counter band, a trainer
  carousel, a photo-background testimonial band, circular class cards, a
  **solid-orange request form band**, event cards, blog cards, a gallery,
  an orange newsletter band, and a dark charcoal footer. The dominant
  accent **#f17445** (burnt orange) appears on every section: cards,
  buttons, active pills, price text, date chips, icons, `::selection`.
- **Section order (1:1, from live demo DOM):**
  1. `nav.colorlib-nav` (absolute, top 0, transparent over hero) —
     `div.top-menu` (`padding: 40px 30px`): `div#colorlib-logo`
     ("FLAWLESS", 24px / weight 700 / uppercase / white, orange icon span)
     - `div.menu-1.text-right`: Home, Classes (has-dropdown: Classes
       Single, Cardio Classes, Muscle Classes, Fitness Classes, Body
       Building), Schedule, Trainers, Events, Blog, Shop, Contact (15px,
       rgba(255,255,255,.9), hover/active rgba(255,255,255,.5); dropdown
       140px, shadow 0 14px 33px -9px rgba(0,0,0,.75), links 13px #999 →
       white hover). Mobile: `.menu-1` hidden ≤768px (burger nav).
  2. `aside#colorlib-hero` — `div.flexslider > ul.slides`: **4 slides**
     (`li`, bg image `images/img_bg_1..4.jpg`, `min-height: 650px`, cover,
     `div.overlay` rgba(0,0,0,.3)), each `div.slider-text-inner.text-center`
     with a single centered `h1` (50px / weight 300 / white / opacity .8):
     "This is a lifestyle there is no finish line" · "Don't stop when it
     hurts, stop when you're done" · "Stop wishing, start doing" ·
     "Working out is a reward not a punishment". Below the slides:
     `div.mouse` > `a.mouse-icon` (30×45 pill, border 1px
     rgba(255,255,255,.4)) > `div.mouse-wheel` (animated 1.6s wheel).
     NOTE: the home hero has NO CTA button (the `.btn` slider styles exist
     for inner pages only).
  3. `div#colorlib-intro.goto-here` — `div.intro-wrap` (margin-top: -6em,
     overlaps the hero) > `div.intro-flex` (flex, no gap): **5 ×
     `div.one-third.intro-img`** (width 20%, padding 2.5em 1.5em 2em, bg
     **#f17445**; even children get a `rgba(0,0,0,.05)` overlay):
     `div.desc`: `div.tag-price` — `span.price` **$150** (40px / weight 400) + `span.month` "MONTH" (12px uppercase); `p` blurb "Which
     roasted parts of sentences fly into your mouth." (rgba(255,255,255,.8));
     `p.btn-more` > `a` "MORE" + arrow (12px uppercase, white, margin-top
     60px). Programs: **Fitness Program, Yoga Program, Dance Program,
     Aerobics Classes, Pilates**.
  4. `div#colorlib-services.colorlib-degree-bg-full` (white bottom skew
     strip via `:before` — 100% × 120px, skewY(4deg), white) —
     `div.colorlib-heading.text-center`: h2 **"Work hard stay humble"**
     (34px / weight 300) + p intro. `div.row`: `div.col-md-6` >
     `div.row` with **4 × `div.col-md-6.text-center` `div.services`**:
     flaticon icon (e.g. flaticon-gym / weightlifting / martial-arts /
     gloves — 40px+ orange) + h3 (Cardio Program, Body Building, Karate
     Classes, Boxing Program) + p blurb; `div.col-md-6` image collage:
     `div.col-md-12` `div.services-img` (240px, classes-1.jpg) +
     `div.col-md-6` ×2 `div.services-img` (classes-2.jpg, classes-3.jpg).
  5. `div#colorlib-schedule.colorlib-light-grey` (bg **#f2f3f7**) —
     heading h2 **"Our Class Schedule"** + `div.schedule.text-center`:
     `ul.week` pill tabs (inline-block, bg #fff, radius 30px): **Sunday
     (active, bg #f17445 white) … Saturday** (7 links, 14px gray, padding
     7px 20px); then **2 × `div.schedule-flex`** (border-bottom 1px
     #d9d9d9) each with **4 × `div.entry-forth`** (width 25%, border-left
     1px #d9d9d9): `p.icon` (flaticon, 40px, **#f17445**), `p.time > span`
     "06am - 8am" (12px, #000, padding 5px 15px, **border-bottom 1px
     #f17445**), `h3` program (18px / weight 300), `p.trainer` "Tom Scott"
     (13px). 8 classes: Cardio, Loose Weight, Yoga, Boxing, Karate, Body
     Building, Swimming, Basic Exercise.
  6. `div.colorlib-shop` — heading h2 **"Let's Shop"** + `div.row` with
     **4 × `div.col-md-3.text-center` `div.product-entry`**:
     `div.product-img` (300px, item-1..4.jpg, `position: relative`) with
     hidden `div.cart` bar (absolute bottom, rgba(0,0,0,.8), uppercase 12px
     links white — hover bg #f17445; revealed on card hover) + `div.desc`:
     h3 title (14px uppercase) + `div.price`: "**$300.00**" (#f17445,
     weight 400; Dumbell shows "$199.00 **$300.00**" with `.sale`
     line-through gray). Products: Boxing Gloves, Dumbell, Shoes, Yoga Mat.
  7. `div#colorlib-counter.colorlib-counters.colorlib-degree-bg` (bg image
     intro-img-1.jpg + white skew strips `:before/:after` 50% × 90px) —
     heading h2 **"What we offer"** (white) + **4 ×
     `div.col-md-3.text-center` `div.counter-entry`**: animated number
     (60px / weight 300 / white; data-to: 1500 / 400 / 1200 / 1300) +
     label (20px, rgba(255,255,255,.8)): **Clients, Trainers, Managers,
     Rooms**.
  8. `div.colorlib-trainers` — heading h2 **"Our Trainers"** +
     `div.owl-carousel` with 5 × `div.item > div.trainers-entry` (photo +
     `div.desc`: h3 name + span role):
     Diego Carter (Power Trainer), Lea Young (Yoga Trainer), Alysha Reed
     (Dance Trainer), George Cooper (Boxing Trainer), Melody Moxin (Boxing
     Trainer — reuses trainer-2.jpg in the source).
  9. `div#colorlib-testimony.testimony-img` (bg image img_bg_2.jpg,
     `background-attachment: fixed`, + `div.overlay` dark) — heading h2
     **"What people says behind their success"** (white) +
     `div.testimony-flex`: **5 × `div.one-fifth` `div.testimony-wrap`**
     (padding 2em): `div.desc` (padding-left 40px): blockquote (Far far
     away, behind the word mountains…) + h3 "Dave Henderson" + `div.figure-img`
     (30px circle avatar, person1..3.jpg).
  10. `div.colorlib-classes` — heading h2 **"Our Classes"** + **3 ×
      `div.col-md-4.text-center` `div.classes`**: `div.classes-img`
      (250×250, **border-radius 50%** circle, classes-1..3.jpg) with
      `div.price` badge (80×80 circle, absolute bottom, bg **#f17445**,
      white, "$25.00 /month") + `div.desc`: h3 (20px / weight 300) + p
      blurb + `p > a.btn-learn` "Learn More" + arrow (13px, #000). Classes:
      Fitness Gym & Cardio, Strength Training, Yoga Program.
  11. `div.colorlib-request.colorlib-degree-bg` — **solid orange bg
      #f17445** + white skew strips; left `div.col-md-4.request`: h2
      **"Request"** (white) + p (rgba(255,255,255,.7)); right
      `div.col-md-8` `form.colorlib-form`: 2×2 grid of fields — Services
      `select` (options Yoga, Boxing, Power, Body Building; white-bg
      select with arrow icon), Fullname input, Phone input, Date input
      (with calendar icon), then centered `input[type=submit].btn-primary.btn-block`
      value **"Submit"** (bg #f17445, white text, border 1px
      rgba(255,255,255,.3), **border-radius 30px**, padding 12px,
      margin-top 28px). All inputs: height 50px, radius 0, bg
      rgba(255,255,255,.9), border 2px #fff, text rgba(0,0,0,.7), padding
      10px 50px 10px 20px; labels white.
  12. `div.colorlib-event` — heading h2 **"Upcoming Events"** + **3 ×
      `div.col-md-4` `div.event-entry`** (bg #f2f3f7, padding 1.3em):
      `div.desc` (text-align right, border-bottom 1px #e6e6e6,
      padding-right 75px): `div.meta` — span.day "19" (36px / weight 700 /
      **#f17445**) + span.month "APR" (20px / weight 400); `p.organizer`
      "Organized by: Noah Henderson" (last span #000); h2 title (24px /
      1.4): Special Training for boxing · Gather for World Yoga Day ·
      Motivational exercise; `div.location` (padding-left 45px, icon
      **#f17445**): "291 South 21th Street, Suite 721 New York NY 10016".
  13. `div.colorlib-blog.colorlib-light-grey.colorlib-degree-bg-full` —
      heading h2 **"Recent Blog"** + **3 × `div.col-md-4` `div.article-entry`**:
      `a.blog-img` (250px, blog-1..3.jpg) with `div.meta` chip (absolute,
      bottom -49px left 1em, text-center): span.day "18" (24px, white, bg
      **#f17445**, padding 5px 10px) + span.month "MAY" (14px, #333, bg
      #fff) + `div.desc` (padding 2.5em 1.5em): `p.admin` "Posted by:
      Noah Henderson" + h2 (22px): 5 Ways to Make Yoga Class More
      Restorative · 3 Balancing Poses for Winter · Need workout motivation?
  14. `div.colorlib-gallery` — heading h2 **"Our Gallery"** + `div.row` >
      `div.col-md-12`: **10 × `a.gallery-img.image-popup`** (width 20%,
      height 300px, float left, classes-1..9.jpg + classes-1.jpg repeat)
      with hidden hover `span.icon` (white plus icon, opacity 0 → 1 on
      hover; magnific-popup lightbox).
  15. `div#colorlib-subscribe` — **solid orange bg #f17445**, padding 2em
      0 + `div.overlay`; heading h2 **"Subscribe Newsletter"** (white) + p
      "Subscribe our newsletter and get latest update" (18px,
      rgba(255,255,255,.6)); `form.qbstp-header-subscribe` (flex):
      `div.col-three-forth` email `input.form-control` (50px, transparent
      bg, NO border, white text 80%, placeholder white 60%) +
      `div.col-one-third` `button.btn.btn-primary` **"Subscribe Now"**
      (bg rgba(255,255,255,.2), white text, no border).
  16. `footer#colorlib-footer` (bg **#25282a**, padding-top 6em, text
      rgba(255,255,255,.6), p 14px / 1.8) — 4 × `div.col-md-3.colorlib-widget`:
      (a) h4 "About Sculpt" + blurb + 4 social circle links (twitter,
      facebook, linkedin, dribbble); (b) h4 "Quick Links" — About Us,
      Testimonials, Classes, Blog, Blog, Contact (14px,
      rgba(255,255,255,.9), check icons); (c) h4 "Recent Post" — 3 ×
      `div.f-blog` (thumb 70×60 left + desc: h2 16px #cccccc "Tips for
      sexy body" + span 13px "18 April 2018"); (d) h4 "Contact Info" —
      address "291 South 21th Street, Suite 721 New York NY 10016", phone
      +1235 2355 98, email info@yoursite.com, website yourwebsite.com.
  17. `div.copy` (padding 1.2em 0) — centered: "Copyright © {year} All
      rights reserved | This template is made with ♥ by Colorlib. Demo
      Images: Unsplash, Pexels" — recreation keeps the copyright + ♥
      wording, drops the Colorlib / Unsplash / Pexels credits (precedent:
      Newsprint/Lede/Wire footers).
- **Design tokens extracted from `css/style.css` + live computed styles:**
  - Brand accent: **#f17445** (burnt orange; 26 occurrences) — intro
    cards bg, `.btn-primary` bg + border 2px, hover **#f3865d**, schedule
    active pill, product price, event meta day, blog date chip bg, class
    price badge, `.colorlib-request` bg, `#colorlib-subscribe` bg, icons,
    `::selection` bg, nav logo icon.
  - Gold: **#F7AF1D** (hero slide icon accent, 1 occurrence — used by the
    slider-star `span i`; optional detail).
  - Light grey: **#f2f3f7** (`.colorlib-light-grey` — schedule + blog
    sections; `.event-entry` card bg).
  - Footer: **#25282a** (`#colorlib-footer`), text rgba(255,255,255,.6).
  - Ink: headings **#000**; body text gray (Bootstrap `gray`);
    `.time`/`.trainer` #000; blog month chip #333 on #fff.
  - Lines: #d9d9d9 (schedule borders), #e6e6e6 (event desc border),
    #cccccc (footer recent-post titles).
  - Fonts: **"Work Sans", Arial, sans-serif** — body 17px / weight 300 /
    line-height 1.5; headings weight 400; hero h1 50px/1.3/300; section
    headings (`.colorlib-heading h2`) 34px/300 (30px mobile); nav logo
    24px/700 uppercase; price 40px/400; counters 60px/300; labels 12–20px.
  - Buttons: `.btn-primary` = bg #f17445, #fff, border 2px #f17445,
    hover #f3865d; base `.btn` padding 8px 20px, radius 0 (Bootstrap 3);
    request Submit = pill radius **30px**, border 1px
    rgba(255,255,255,.3), padding 12px, margin-top 28px; subscribe
    "Subscribe Now" = bg **rgba(255,255,255,.2)**, #fff, no border;
    hero-slide CTA styles exist but are unused on the home hero.
  - Inputs: `.colorlib-form .form-control` — 50px, radius 0, bg
    rgba(255,255,255,.9), border 2px #fff, padding 10px 50px 10px 20px
    (right padding for the icon); subscribe input — transparent bg, no
    border, white 80% text, placeholder white 60%.
  - Rhythm: all sections `padding: 8em 0` (subscribe 2em 0, footer 6em 0
    0, counter 7em); `.intro-wrap` margin-top -6em (overlaps hero);
    `.colorlib-degree-bg` white skew strips (50% × 90px, skewY ±4deg;
    `-full` variant 100% × 120px); `.row-pb-md` 5em.
  - Nav: transparent absolute; logo 24px/700 uppercase white; links 15px
    rgba(255,255,255,.9); active/hover rgba(255,255,255,.5); mobile menu
    hidden ≤768px with burger.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sculpt-<n>/<w>/<h>` — 4 hero bg (1600×900), 5 intro
  card bg, 3 services, 4 products, 1 counter band, 4 trainer portraits,
  1 testimony band + 3 avatars, 3 class circles, 3 blog, 9 gallery ≈ 30
  seeds); icons → lucide-react (dumbbell, heart-pulse, flame, target,
  zap, calendar, clock, map-pin, phone, mail, globe, plus, check,
  chevron-right, twitter, facebook, linkedin, dribbble, menu, search);
  Work Sans via Google Fonts `<link>` in `index.html`; hero carousel +
  trainers carousel + counters + gallery lightbox implemented with React
  state (no jQuery/FlexSlider/Owl); weekday pills switch the schedule
  grid client-side (single day's 8 entries in the source; implementer may
  render all days from one data set); request + subscribe forms validated
  per repo conventions (zod), success state swaps in a message; counters
  animate on scroll into view (IntersectionObserver) to the data-to
  values; alt text on images; focus-visible rings; copy paraphrased
  (program names / trainer names / blog titles reworded where sensible,
  keep the same kinds of content); footer social icons rendered as
  circles; class-image circles keep the 250px round crop on desktop,
  full-width square on mobile (per source).
- **Duplicate checklist rows:** TEMPLATES.md lines 401 AND 1849 both list
  "Flawless" — the implementer MUST mark BOTH `[x]` when done (precedent:
  Newsflex → Bulletin/Dateline).

Sculpt lives in `apps/sculpt` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with the
uppercase wordmark on the left and the site links on the right.

#### Scenario: Navbar content

- **GIVEN** the Sculpt page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL be transparent (positioned over the hero) with the
  uppercase bold white wordmark "Sculpt" on the left
- **AND** it SHALL show white links Home, Classes, Schedule, Trainers,
  Events, Blog, Shop, and Contact on the right
- **AND** the Classes link SHALL reveal a dropdown (Classes Single, Cardio
  Classes, Muscle Classes, Fitness Classes, Body Building)
- **AND** link hover and active states SHALL dim to rgba(255,255,255,.5)
- **AND** on mobile the links SHALL collapse behind a burger menu with
  aria-expanded

### Requirement: Hero slider

The system SHALL render a full-screen photo carousel with four motivational
headlines and a scroll indicator.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-bleed background image with a dark overlay
  (rgba(0,0,0,.3)) behind a centered 50px light-weight white headline
- **AND** it SHALL cycle through the four headlines "This is a lifestyle
  there is no finish line", "Don't stop when it hurts, stop when you're
  done", "Stop wishing, start doing", and "Working out is a reward not a
  punishment"
- **AND** carousel controls SHALL let the user switch slides, with the
  active dot highlighted in the brand orange #f17445
- **AND** a mouse-shaped scroll indicator (rounded pill with an animated
  wheel) SHALL be shown at the bottom

### Requirement: Intro program cards

The system SHALL render five equal-width solid-orange cards overlapping
the hero bottom edge, each with a program name, price, blurb, and MORE
link.

#### Scenario: Intro cards content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show five cards (Fitness Program, Yoga Program, Dance
  Program, Aerobics Classes, Pilates) in a single row, each with a solid
  #f17445 background and white text
- **AND** each card SHALL show the price $150 (40px) with "MONTH" (12px
  uppercase) beneath it, a short blurb, and a "MORE" link (12px uppercase
  white) with an arrow
- **AND** the cards SHALL overlap the hero by pulling up 6em (negative
  top margin)
- **AND** on mobile the five cards SHALL stack full-width

### Requirement: Services section

The system SHALL render a "Work hard stay humble" heading, a 2×2 grid of
program services with icons, and a photo collage on the right.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Work hard stay humble" (34px light
  weight) with an intro paragraph
- **AND** the left half SHALL show a 2×2 grid of services (Cardio Program,
  Body Building, Karate Classes, Boxing Program), each with an orange icon,
  a title, and a blurb
- **AND** the right half SHALL show a photo collage (one wide image above
  two half-width images)
- **AND** a white skewed strip SHALL cap the bottom of the section

### Requirement: Class schedule

The system SHALL render a light-grey schedule section with pill weekday
tabs and a grid of daily classes.

#### Scenario: Schedule content

- **GIVEN** the page is rendered
- **WHEN** the schedule section is displayed
- **THEN** it SHALL show the heading "Our Class Schedule" on a #f2f3f7
  background
- **AND** it SHALL show seven weekday pills (Sunday through Saturday) in a
  white rounded strip, with the active day filled #f17445 with white text
- **AND** the grid SHALL list eight classes, each with an orange icon, the
  time "06am - 8am" (12px with an orange underline), the program name
  (18px light), and the trainer "Tom Scott"
- **AND** switching the active weekday SHALL update the listed classes

### Requirement: Shop row

The system SHALL render four products with images, uppercase titles,
orange prices, and a hover cart bar.

#### Scenario: Shop content

- **GIVEN** the page is rendered
- **WHEN** the shop section is displayed
- **THEN** it SHALL show the heading "Let's Shop"
- **AND** it SHALL show four products (Boxing Gloves $300.00, Dumbell
  $199.00 with $300.00 struck through, Shoes $300.00, Yoga Mat $300.00)
  with 300px product images
- **AND** on hover each product SHALL reveal a dark cart bar with
  uppercase white links that highlight orange on hover

### Requirement: Counter band

The system SHALL render a photo-background band with four animated
statistics.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL show the heading "What we offer" in white over a
  background image with white skewed strips at the bottom
- **AND** it SHALL show four statistics (1500 Clients, 400 Trainers, 1200
  Managers, 1300 Rooms) with large 60px light-weight white numbers that
  count up when scrolled into view, and 20px labels

### Requirement: Trainers carousel

The system SHALL render a carousel of five trainer cards with photos,
names, and roles.

#### Scenario: Trainers content

- **GIVEN** the page is rendered
- **WHEN** the trainers section is displayed
- **THEN** it SHALL show the heading "Our Trainers"
- **AND** it SHALL show five trainer entries (photo, name, role): Diego
  Carter / Power Trainer, Lea Young / Yoga Trainer, Alysha Reed / Dance
  Trainer, George Cooper / Boxing Trainer, and Melody Moxin / Boxing
  Trainer
- **AND** the entries SHALL be navigable as a carousel with next/prev
  controls

### Requirement: Testimonial band

The system SHALL render a photo-background band with five testimonial
columns.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show the white heading "What people says behind their
  success" over a fixed-attachment background image with a dark overlay
- **AND** it SHALL show five testimonial columns, each with a quote, the
  name "Dave Henderson", and a small circular avatar

### Requirement: Classes cards

The system SHALL render three class cards with circular photos and orange
price badges.

#### Scenario: Classes content

- **GIVEN** the page is rendered
- **WHEN** the classes section is displayed
- **THEN** it SHALL show the heading "Our Classes"
- **AND** it SHALL show three cards (Fitness Gym & Cardio, Strength
  Training, Yoga Program), each with a 250px circular photo and a circular
  orange price badge reading "$25.00 /month"
- **AND** each card SHALL show a blurb and a "Learn More" link (13px dark
  with an arrow)

### Requirement: Request form

The system SHALL render a solid-orange section with a request form
(service select, fullname, phone, date, and a pill submit button).

#### Scenario: Request form content

- **GIVEN** the page is rendered
- **WHEN** the request section is displayed
- **THEN** it SHALL have a solid #f17445 background with a white "Request"
  heading and description on the left
- **AND** the form SHALL contain a Services select (Yoga, Boxing, Power,
  Body Building), Fullname, Phone, and Date inputs (50px, white 90%
  background, 2px white border, square corners) with white labels
- **AND** it SHALL show a centered pill-shaped "Submit" button (orange
  background, white text, translucent white border, 30px radius)
- **AND** submitting with missing/invalid fields SHALL show per-field
  errors and block submission
- **AND** submitting valid data SHALL show a success message

### Requirement: Upcoming events

The system SHALL render three event cards with a date block, organizer,
title, and location.

#### Scenario: Events content

- **GIVEN** the page is rendered
- **WHEN** the events section is displayed
- **THEN** it SHALL show the heading "Upcoming Events"
- **AND** it SHALL show three #f2f3f7 cards (Special Training for boxing,
  Gather for World Yoga Day, Motivational exercise), each with a
  right-aligned date block (large orange "19" and "APR"), "Organized by:
  Noah Henderson", a 24px title, and a location line with an orange
  map-pin icon ("291 South 21th Street, Suite 721 New York NY 10016")

### Requirement: Recent blog

The system SHALL render a light-grey blog strip with three article cards
carrying a date chip on the image.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Blog" on a #f2f3f7 background
- **AND** it SHALL show three article cards (5 Ways to Make Yoga Class
  More Restorative, 3 Balancing Poses for Winter, Need workout
  motivation?), each with a 250px image and a date chip overlapping its
  bottom-left corner (orange "18" over white "MAY")
- **AND** each card SHALL show "Posted by: Noah Henderson" and a 22px
  title

### Requirement: Gallery

The system SHALL render a gallery grid of ten photos with a hover icon.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Our Gallery"
- **AND** it SHALL show ten photos in a five-per-row grid (20% width, 300px
  height each)
- **AND** hovering a photo SHALL reveal a white plus icon overlay

### Requirement: Newsletter band

The system SHALL render an orange newsletter band with an email input and
a Subscribe Now button.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL have a solid #f17445 background with the white heading
  "Subscribe Newsletter" and the subtext "Subscribe our newsletter and get
  latest update"
- **AND** it SHALL show a borderless transparent email input (white text)
  beside a translucent-white "Subscribe Now" button
- **AND** submitting an invalid email SHALL show a per-field error and
  block submission
- **AND** submitting a valid email SHALL show a success message

### Requirement: Footer

The system SHALL render a dark four-column footer and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a dark #25282a background with muted
  white text
- **AND** the first column SHALL show "About Sculpt" with a blurb and four
  circular social links (twitter, facebook, linkedin, dribbble)
- **AND** the second column SHALL show "Quick Links" with check-marked
  links (About Us, Testimonials, Classes, Blog, Contact)
- **AND** the third column SHALL show "Recent Post" with three thumbnail
  entries ("Tips for sexy body", "18 April 2018")
- **AND** the fourth column SHALL show "Contact Info" with an address, a
  phone number, an email, and a website link
- **AND** below the footer a bar SHALL show "Copyright © {year} All rights
  reserved | This template is made with ♥" (no Colorlib credit)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Sculpt app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero slider, intro cards,
  services, schedule, shop, counters, trainers, testimonials, classes,
  request form, events, blog, gallery, newsletter, footer, and copyright
  bar in the expected order
- **AND** the document title SHALL be "Sculpt — Fitness Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh sculpt` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (nav, hero slider + mouse,
      intro cards, services, schedule, shop, counters, trainers,
      testimonials, classes, request, events, blog, gallery, newsletter,
      footer, copyright bar)
- [ ] Design tokens in `@theme`: brand `#f17445`, hover `#f3865d`, light
      `#f2f3f7`, footer `#25282a`, gold `#F7AF1D`, black `#000`
- [ ] Font: Work Sans (300/400/700) via Google Fonts `<link>`
- [ ] Navbar: transparent over hero, uppercase white wordmark, white links
      with dim hover, Classes dropdown, mobile burger with aria-expanded
- [ ] Hero: 4 slides (image + rgba(0,0,0,.3) overlay + centered 50px/300
      white h1), carousel dots (active #f17445), mouse scroll pill
- [ ] Intro: 5 orange #f17445 cards pulled up over the hero (margin-top
      -6em), $150 MONTH, blurb, MORE link; stack on mobile
- [ ] Services: "Work hard stay humble", 2×2 icon grid (Cardio, Body
      Building, Karate, Boxing), right photo collage, white skew strip
- [ ] Schedule: #f2f3f7 bg, white pill weekday tabs (active #f17445),
      8 classes per day (orange icon, 06am - 8am with orange underline,
      program, trainer)
- [ ] Shop: 4 products, 300px images, uppercase 14px titles, #f17445
      prices (Dumbell sale price struck through), hover cart bar
- [ ] Counters: bg image band + white skew strips, 60px white numbers
      (1500/400/1200/1300) animating on scroll + 20px labels
- [ ] Trainers: 5 entries (photo, name, role) in a carousel
- [ ] Testimonials: fixed bg image + overlay, white heading, 5 quote
      columns with circular avatars
- [ ] Classes: 3 cards, 250px circular photos, 80px orange price badge
      ($25.00/month), Learn More link
- [ ] Request: solid #f17445 band, white labels, 50px white inputs (2px
      white border), Services select, pill Submit (radius 30px), zod
      validation with error + success states
- [ ] Events: 3 #f2f3f7 cards, right-aligned date block (36px orange day +
      APR), organizer, 24px title, map-pin location
- [ ] Blog: #f2f3f7 strip, 3 cards, image date chip (orange day / white
      month), Posted by line, 22px titles
- [ ] Gallery: 10 photos, 5-per-row, hover plus-icon overlay
- [ ] Newsletter: #f17445 band, borderless transparent input + translucent
      white "Subscribe Now" button, zod validation
- [ ] Footer: #25282a, About + 4 social circles, Quick Links, Recent Post
      thumbs, Contact Info; copyright bar with neutral credit
- [ ] Placeholder images seeded (`picsum.photos/seed/sculpt-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` on lines 401
      AND 1849 "Flawless", + surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
