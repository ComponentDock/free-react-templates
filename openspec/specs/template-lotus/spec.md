# Template: Lotus (Fitness/Yoga Template)

## Purpose

Lotus is a single-page yoga/fitness website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Yoga"
website template design (source: https://colorlib.com/wp/template/yoga/), built
under a DIFFERENT name (Lotus — the lotus pose is a foundational yoga posture,
matching the source's yoga theme) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

TEMPLATES.md has TWO copies of this item (lines 541 and 1888 — duplicate rows
in two category sections); ONE recreation (Lotus) covers both; the implementer
marks BOTH rows `[x]`. NOTE: the other yoga-family ColorLib templates
(Yogaflex, Yogabest, Doyoga, Yogastudio, Yogafun, Yogalife, Yogalax) are
SEPARATE templates with their own slugs — do NOT conflate them.

## Design reference (replication findings)

- **Original:** ColorLib "Yoga" — clean, airy single-page yoga/fitness
  template with a full-screen image hero, mint-green accent color, and a
  white/light-gray content rhythm. Demo brands itself "Yoga"; the recreation
  uses the NEW name **Lotus**.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/yoga/` (HTTP
  200, 34.9 KB HTML). The `<title>` tag is a stale copy-paste artifact
  ("Vertex - Free Bootstrap 4 Template by Colorlib") — the BODY is 100% the
  Yoga template (h1s "Experience the best workout humanly possible" / "Wake to
  your full potential", services, trainers, "yoga@info.com" footer). Confirmed
  via `preview.colorlib.com/assets/js/products.js` entry
  `["yoga","Yoga","Fitness",0,"2018/07/yoga-demo-preview.jpg",1]` — preview
  slug `yoga` matches the colorlib.com source slug `yoga`. Master stylesheet
  `css/style.css` (~62 KB, fully extracted for tokens); libs: bootstrap 4,
  owl.carousel, animate.css, magnific-popup, aos, ionicons, flaticon,
  icomoon, bootstrap-datepicker, jquery.timepicker.
- **CSS tokens (from style.css):**
  - Brand: `--primary: #79efb4` (mint green) — used for buttons
    (`btn-primary` bg + border), link accents, and focus rings; hover
    `#57eba1` / border `#4bea9b`.
  - Dark: `#404044` (footer background `ftco-footer`, body heading color);
    muted grays `#6c757d`, `#c0c0c3`, `#495057`.
  - Light section backgrounds: `#fafafa` / `#f8f9fa` (`bg-light` bands —
    services, trainers, pricing, blog sections alternate white / bg-light).
  - Fonts: body `font-family: "Quicksand", Arial, sans-serif` at `18px`
    (template overrides bootstrap's Montserrat base); headings inherit
    Quicksand (`font-family: inherit`, weight 500). Hero h1: `72px` white,
    weight 400, line-height 1.2 (40px on mobile). Hero paragraph: `20px`,
    weight 300.
  - Buttons: standard bootstrap `.btn` — `border-radius: 0.25rem`, mint
    `#79efb4` background with dark text `#212529` (NOT pill-shaped; the 50%
    radii in the stylesheet are social/icon circles only). Focus ring
    `rgba(121,239,180,.25)`.
  - Hero: `.home-slider` owl carousel, `.slider-item` full-height
    `calc(100vh - 117px)` / min-height 700px, background-image cover, white
    text, `.overlay` mint `#79efb4` at `opacity: 0` (inert).
  - Footer: `background: #404044`, padding 8em 0, text
    `rgba(255,255,255,.5)`, links white on hover.
- **Screenshot:** `yoga-free-template.jpg` (1200×946, viewed in browser) —
  full-width hero photo of a blonde woman in a deep yoga backbend (King
  Pigeon) on a purple mat in a warm wood-toned studio; large white sans-serif
  headline "Experience the best workout humanly possible" overlaid left;
  top-left logo (square outline with "YOGA" stacked vertically), hamburger
  menu top-right; two white slider dots bottom-center; white content section
  below with centered paragraph ("Yoga far away, behind the word
  mountains..."). Clean, minimalist, lots of whitespace, modern airy feel.
- **Section order (1:1, from live demo DOM):**
  1. `nav#colorlib-main-nav` — off-canvas fullscreen overlay menu (hamburger
     toggle `.js-colorlib-nav-toggle`): links Home (active), Classes, Trainer,
     Timetable, About us, Blog, Contact.
  2. `header` — minimal top bar with `.colorlib-navbar-brand` logo: split
     spans `<span>Yo</span><span>Ga</span>` (→ "Lo"+"tus" or a single
     wordmark) + hamburger toggle.
  3. `section.home-slider.owl-carousel` — TWO `.slider-item` slides
     (full-height bg images):
     - Slide 1: h1 "Experience the best workout humanly possible" + copy +
       buttons "Get in touch" / "Explore our classes".
     - Slide 2: h1 "Wake to your full potential" (+ same button pair).
     - Carousel dots (2).
  4. `section.ftco-section.about-section` — centered h2 paragraph:
     "Yoga far away, behind the word mountains..." (lorem — paraphrase to
     studio/wellness copy).
  5. `section.ftco-section.bg-light` — "Explore our services" heading + THREE
     service cards: **Body Builder**, **Yoga Program**, **Cardio Program** —
     each `div.icon` flaticon icon + h3 title + paragraph copy.
  6. `section.ftco-section` — "All in one Yoga classes" heading + THREE class
     cards (image + h3 + copy): **Yoga Program**, **Cardio Program**,
     **Body Building** + "Explore our classes" button.
  7. `section.ftco-section.bg-light` — "Meet our trainers" heading + THREE
     trainer cards (photo + h3 name + `.position` role + copy + "View class
     times" button): **Alice Smith** (Yoga Expert), **John Bulk** (Body
     Expert), **Madonna Henderson** (Health Expert).
  8. `section.ftco-section.testimony-section` — "Testimonial" heading +
     owl-carousel of quotes (lorem) attributed to **Dennis Green** (Fitness
     Expert / Health Expert — source reuses the same name; use distinct
     names/roles for variety).
  9. `section.ftco-section.bg-light` — "Pricing Plan" heading + THREE pricing
     cards, each: plan name (Yoga Program / Dance program / Fitness Program),
     lorem copy, price **$7.5 / $12.5 / $19** with "per class" label, "Book
     now" button.
  10. `section.ftco-section` — "Classes Schedule" heading + schedule rows
      (Monday): **7:00am - 8:00am Basic Exercise**, **9:00am - 11:00am Yoga
      Program**, **1:00pm - 4:00pm Body Building** — each with time, class
      name, lorem copy, "Join now" button.
  11. `section.ftco-section.bg-light` — "Our Blog" heading + FOUR blog cards
      (image, date meta "June 29, 2018" / "July 24, 2018", "Admin", title
      "Even the all-powerful Pointing has no control about the blind texts",
      "Read more" link).
  12. `section.instagram` — "Instagram" heading + strip of insta square
      images (insta-1..5.jpg repeated).
  13. `footer.ftco-footer.ftco-bg-dark.ftco-section` — brand "Yoga" (→ Lotus),
      "Contact Us" heading + `yoga@info.com` (→ lotus@info.com), copyright
      line "Copyright © <year> All rights reserved | This template is made
      with <heart> by Colorlib" — paraphrase to "© 2026 Lotus. All rights
      reserved." + mandatory "More templates at Component Dock" link
      (https://www.componentdock.com/).

## Requirements

### Requirement: Header with brand and off-canvas navigation

The system SHALL render a minimal header with the brand wordmark "Lotus" and a
hamburger toggle that opens the full-screen off-canvas navigation.

#### Scenario: Brand logo is present in the header

- **GIVEN** the page is loaded
- **WHEN** the header renders
- **THEN** it SHALL show the brand wordmark "Lotus" linking to the page top

#### Scenario: Hamburger menu opens the off-canvas nav

- **GIVEN** the page is loaded
- **WHEN** the hamburger toggle is clicked
- **THEN** the nav overlay with the links Home, Classes, Trainer, Timetable,
  About us, Blog, and Contact SHALL be revealed
- **AND** Home SHALL be marked as the active link
- **AND** clicking the toggle again SHALL close the nav

### Requirement: Full-height hero slider

The system SHALL render a full-height image slider with two slides, each with
a headline, supporting copy, and a two-button CTA pair, plus carousel
indicator dots.

#### Scenario: Hero shows two slides with headlines and CTAs

- **GIVEN** the page is loaded
- **THEN** the hero SHALL render a background-image slider with two slides
- **AND** slide 1 SHALL show the headline "Experience the best workout
  humanly possible"
- **AND** slide 2 SHALL show the headline "Wake to your full potential"
- **AND** each slide SHALL show the buttons "Get in touch" and "Explore our
  classes"
- **AND** the hero SHALL show two carousel indicator dots

#### Scenario: Slider advances

- **WHEN** the next-slide control is activated
- **THEN** the visible headline SHALL change between the two slides

### Requirement: About section

The system SHALL render an about section below the hero with a centered
paragraph introducing the studio's wellness philosophy.

#### Scenario: About content

- **GIVEN** the page is loaded
- **WHEN** the about section is displayed
- **THEN** it SHALL show a centered paragraph of studio/wellness copy

### Requirement: Services grid

The system SHALL render a "Explore our services" section with exactly three
service cards, each with an icon, a title, and a description.

#### Scenario: Services content

- **GIVEN** the services section is visible
- **THEN** the heading "Explore our services" SHALL be shown
- **AND** exactly three service cards SHALL render: Body Builder, Yoga
  Program, and Cardio Program
- **AND** each card SHALL have an icon, a title, and a short description

### Requirement: Classes showcase

The system SHALL render an "All in one Yoga classes" section with exactly
three class cards and an "Explore our classes" button.

#### Scenario: Classes content

- **GIVEN** the classes section is visible
- **THEN** the heading "All in one Yoga classes" SHALL be shown
- **AND** exactly three class cards SHALL render: Yoga Program, Cardio
  Program, and Body Building
- **AND** each card SHALL have an image and a title
- **AND** an "Explore our classes" button SHALL be present

### Requirement: Trainer cards

The system SHALL render a "Meet our trainers" section with exactly three
trainer cards, each with a photo, name, role, description, and a "View class
times" button.

#### Scenario: Trainers content

- **GIVEN** the trainers section is visible
- **THEN** the heading "Meet our trainers" SHALL be shown
- **AND** exactly three trainer cards SHALL render: Alice Smith (Yoga
  Expert), John Bulk (Body Expert), and Madonna Henderson (Health Expert)
- **AND** each card SHALL show a photo, name, role, description, and a
  "View class times" button

### Requirement: Testimonial carousel

The system SHALL render a "Testimonial" section with at least one quote
attributed to an author name and role.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section is visible
- **THEN** the heading "Testimonial" SHALL be shown
- **AND** at least one quote with an author name and role SHALL render

### Requirement: Pricing cards

The system SHALL render a "Pricing Plan" section with exactly three pricing
cards, each with a plan name, price, "per class" label, and a "Book now"
button.

#### Scenario: Pricing content

- **GIVEN** the pricing section is visible
- **THEN** the heading "Pricing Plan" SHALL be shown
- **AND** exactly three pricing cards SHALL render: Yoga Program at $7.5 per
  class, Dance program at $12.5 per class, and Fitness Program at $19 per
  class
- **AND** each card SHALL have a "Book now" button

### Requirement: Weekly class schedule

The system SHALL render a "Classes Schedule" section with Monday rows, each
showing a time, a class name, a description, and a "Join now" button.

#### Scenario: Schedule content

- **GIVEN** the schedule section is visible
- **THEN** the heading "Classes Schedule" SHALL be shown
- **AND** rows SHALL render for Monday with time and class name: 7:00am -
  8:00am Basic Exercise, 9:00am - 11:00am Yoga Program, and 1:00pm - 4:00pm
  Body Building
- **AND** each row SHALL have a "Join now" button

### Requirement: Blog cards

The system SHALL render an "Our Blog" section with four blog cards, each with
an image, a date, an "Admin" byline, a title, and a "Read more" link.

#### Scenario: Blog content

- **GIVEN** the blog section is visible
- **THEN** the heading "Our Blog" SHALL be shown
- **AND** four blog cards SHALL render
- **AND** each card SHALL show an image, a date, an "Admin" byline, a title,
  and a "Read more" link

### Requirement: Instagram gallery strip

The system SHALL render an "Instagram" section with a horizontal strip of
square images.

#### Scenario: Instagram content

- **GIVEN** the page is loaded
- **WHEN** the instagram section is displayed
- **THEN** the heading "Instagram" SHALL be shown
- **AND** a horizontal strip of square images SHALL render

### Requirement: Footer

The system SHALL render a dark footer with the brand "Lotus", a "Contact Us"
block with an email address, a copyright line, and a Component Dock link.

#### Scenario: Footer content

- **GIVEN** the page is scrolled to the bottom
- **THEN** the footer SHALL show the brand "Lotus"
- **AND** a "Contact Us" block SHALL show the email lotus@info.com
- **AND** the copyright line "© 2026 Lotus. All rights reserved." SHALL be
  shown
- **AND** a link "More templates at Component Dock" pointing to
  https://www.componentdock.com/ SHALL be present

### Requirement: Full page composition

The system SHALL render all sections in the source's 1:1 order.

#### Scenario: Page section order

- **GIVEN** the page is loaded
- **THEN** the sections SHALL render in this order: nav, header, hero slider,
  about, services, classes, trainers, testimonials, pricing, schedule, blog,
  instagram, footer

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec.
- [ ] App folder `apps/lotus`, package `@free-react-templates/lotus`; NO
      reference to ColorLib / "yoga" source name in any app file (provenance
      lives only in this spec, TEMPLATES.md, and the PR).
- [ ] Footer links https://www.componentdock.com/ ("More templates at
      Component Dock").
- [ ] `public/CNAME` = `lotus.free.componentdock.com`; `"homepage"` =
      https://lotus.free.componentdock.com.
- [ ] Brand token `#79efb4` in `@theme`; Quicksand font via Google Fonts
      `<link>` in index.html; body 18px.
- [ ] All sections in the 1:1 order above; hero = full-height image slider
      with the two headlines + button pair; pricing $7.5/$12.5/$19 "per
      class"; schedule rows Monday 7am/9am/1pm with Join now.
- [ ] Placeholder images via `https://picsum.photos/seed/lotus-<n>/<w>/<h>`
      (hero slides, class/trainer/blog/instagram images); icons from
      lucide-react or inline SVG brand icons (never copy source assets).
- [ ] 100% coverage (lines/functions/branches/statements) via
      `npm run test:coverage`; typecheck, lint, build all green.
- [ ] Both TEMPLATES.md "Yoga" rows (lines 541 and 1888) marked `[x]` with
      surge URL in bookkeeping.
