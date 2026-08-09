# Template: Prana (Health & Fitness / Yoga Studio)

## Purpose

Prana is a single-page yoga studio website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Yogalax" website template
(source: https://colorlib.com/wp/template/yogalax/), built under a DIFFERENT
name (Prana — Sanskrit for "breath/life-force", evoking the yoga theme; single
lowercase word, kebab-case `prana`, no collision with `apps/`, `openspec/specs/`,
`docs/templates/` or TEMPLATES.md — verified 2026-08-09) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/yogalax/` is LIVE and was fetched and
> analyzed (HTTP 200, ~37 KB HTML + `css/style.css` ~70 KB). The TEMPLATES.md
> screenshot (`yogalax-free-template.jpg`, 1200×946, viewed in browser)
> matches the live render 1:1. The brand accent is a dusty PINK/MAUVE
> `#d291bc` — do NOT be misled by the Bootstrap `--primary: #78d5ef` CSS
> variable, which is Bootstrap's unused default; the theme overrides every
> `.btn.btn-primary` to `#d291bc` and uses the pink everywhere (links, brand
> lotus icon, checkmarks, CTA buttons, footer background, gradient overlays,
> price numbers, gallery/counter icons, active nav link).

## Design reference (replication findings)

- **Original:** ColorLib "Yogalax" — free YOGA STUDIO one-page template
  ("Do Yoga today for a better tomorrow", services, class levels, membership
  pricing cards, testimonials, stats counter, blog, gallery, pink footer),
  Bootstrap 4 + jQuery (owl.carousel, AOS, magnific-popup, countUp) based.
  The recreation brands itself **Prana** but keeps the same section
  structure, copy kinds and design tokens.
- **Live preview DOM analyzed (verified 2026-08-09):**
  `https://preview.colorlib.com/theme/yogalax/` (HTTP 200, ~37 KB HTML +
  `css/style.css` ~70 KB + Bootstrap 4 + owl.carousel + animate.css + AOS +
  ionicons/flaticon icon fonts). Section list (1:1, verified from the DOM):
  1. `<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark
ftco-navbar-light" id="ftco-navbar">` — TRANSPARENT (theme override:
     `background: transparent !important; position: absolute; top: 10px;
z-index: 3`), brand `Yogalax` (black, with `flaticon-lotus` pink icon
     span), links Home / Classes / Schedule / About / Blog / Contact
     (14px, weight 300, black, active item pink `#d291bc`); on <992px the
     nav becomes SOLID BLACK (`background: #000`) with white links.
  2. `<section class="hero-wrap js-fullheight" style="background-image:
url('images/bg_2.jpg')">` — FULL-VIEWPORT hero with background PHOTO and
     a 45° PINK gradient overlay `.overlay` (`background: linear-gradient(45deg,
#d291bc 0%, rgba(255,255,255,0) 100%); opacity: .3; width: 68%` —
     gradient only covers the LEFT 68% of the hero). Left-aligned content
     (`.col-md-8`): typewrite `<h1>` (80px, weight 200, black) cycling
     "Inspiration For Joyful Living." / "Effective Therapy Against Stress." /
     "Flexibility is A Second Power." (JS typewriter — recreate as a static
     headline or simple cycling effect), `<h2 class="mb-5">` "Do Yoga today
     for a better tomorrow" (weight 200), CTA `<a class="btn btn-primary
p-3 px-4">15 Day Free Trial</a>` — PILL button (radius 30px), pink
     `#d291bc` bg + white text, `border: 1px solid rgba(255,255,255,0.4)`,
     hover → white bg + black text.
  3. `<section class="ftco-section ftco-intro" style="background-image:
url(images/intro.jpg)">` — full-width intro with background PHOTO,
     content in a RIGHT-aligned `.col-md-6` (`row justify-content-end`):
     `<h2 class="mb-4">Why You Should Go To Yoga</h2>` (default heading
     style: black, weight 400), a "blind text" paragraph, and `<ul
class="mt-5 do-list">` with 5 checklist items (each `<li>` 24px weight
     300 with a pink `ion-ios-checkmark-circle` icon span, 22px `#d291bc`):
     "Yoga boosts brain power", "Yoga helps you to breathe better",
     "Yoga improves your strength", "Yoga helps you to focus",
     "Yoga helps give meaning to your day".
  4. `<section class="ftco-section ftco-section-services bg-light">` —
     LIGHT-GRAY (`bg-light` = `#fafafa` !important) services grid, 4 cards
     (`.col-md-3`): each `.services` has a 100px circle
     (`background: #f7ebf3; border-radius: 50%`) with a 44px pink icon
     span (`#d291bc`) + `<h3>` (20px, weight 500) + paragraph. Card titles:
     Healthy Lifestyle · Body & Mind Balance · Meditation Practice ·
     Edeology (source typo kept verbatim).
  5. `<section class="ftco-section">` (WHITE) — CLASSES: heading block with
     `<h3 class="subheading">Yoga Classes</h3>` (16px, uppercase,
     letter-spacing 3px, `#b3b3b3`, weight 300) + `<h2 class="mb-1">Choose
Your Level & Focus</h2>` (60px, weight 300, black); then 6
     `.package-program` cards (`.col-md-4`, 3 per row): each has an image
     block with a pink `#d291bc` overlay (`:after`, opacity 0 → 1 on hover)
     - `.text` block with `<h3>` title + paragraph. Titles: Group Lessons ·
       Yoga For Beginners · Yoga For Pregnant · Yoga For Couples · Bikram
       Yoga · Yoga Barre.
  6. `<section class="ftco-section bg-light">` — PRICING: subheading
     "Pricing Tables" + `<h2 class="mb-1">Membership Cards</h2>`, then 3
     `.block-7` cards (`.col-lg-4`): white card, `padding: 30px`, soft
     shadow `0px 24px 48px -13px rgba(0,0,0,0.05)`; each has
     `.heading-2` (uppercase 14px letter-spacing 1px weight 600) "Year
     Card" / "Monthly Card" / "Weekly Card", `.price` = `$` sup (24px,
     pink) + `.number` (60px weight 500, pink `#d291bc`) — 449 / 200 / 85,
     a caption "For 1 Year" / "For 1 Month" / "For 1 Week", "Enjoy All The
     Features" heading, `.pricing-text` list (checkmark items, `#4d4d4d`,
     margin-bottom 15px: "Onetime Access To All Club" / "Group Trainer" /
     "Book A Group Class" / "Fitness Orientation" for Year; "Group Classes"
     / "Discuss Fitness Goals" / "Group Trainer" / "Fitness Orientation"
     for Monthly; Weekly repeats Group Classes / Discuss Fitness Goals /
     Group Trainer / Fitness Orientation), and a `btn-primary` "Get
     Started" button (pink bg, WHITE uppercase text, weight 600,
     letter-spacing 1px, width 60%, absolutely positioned bottom-center).
  7. `<section class="ftco-section testimony-section">` (WHITE) —
     TESTIMONY: subheading "Testimony" + `<h2 class="mb-1">Successful
Stories</h2>`; an owl-carousel of `.testimony-wrap p-4 pb-5` items
     (5 items in the DOM): quote icon, "blind text" paragraph, user avatar
     (`.user-img` circle with photo) + `.name` + `.position` "Customer".
     Names: Gabby Smith · Floyd Weather · James Dee (3 unique, 5 slides).
  8. `<section class="ftco-counter ftco-bg-dark img" id="section-counter"
style="background-image: url(images/bg_3.jpg)">` — COUNTER band over
     a background PHOTO with the SAME 45° pink gradient overlay but
     `opacity: .8`; 4 counters (`.col-lg-3`): 80px square icon (1px pink
     `#d291bc` border, rotates 135° on hover) + `<strong class="number">`
     (50px weight 500 WHITE, count-up animation) + `<span>` label (14px,
     `rgba(255,255,255,0.7)`). Labels: Happy Customers · Yoga Workshops ·
     Years of Experience · Lesson Conducted.
  9. `<section class="ftco-section bg-light">` — BLOG: subheading "Blog" +
     `<h2 class="mb-1">Recent Posts</h2>`; 3 `.blog-entry` cards
     (`.col-md-4`): image + `.text` block overlapping it (`margin-top:
-40px; background: #fff`), `<h3 class="heading">` (18px, weight 400,
     link black → pink on hover) + `.meta` line + paragraph. All three
     titles in the demo read "Young Women Doing Yoga" (placeholder — vary
     per card).
  10. `<section class="ftco-gallery ftco-section">` — GALLERY: subheading
      "Gallery" + `<h2 class="mb-1">See the latest photos</h2>`; 4 image
      tiles (`.col-md-3`, `.gallery` block height 270px, background
      photos); on hover a 60px pink circle (`#d291bc`, radius 50%) icon
      with a white glyph fades in (opacity 0 → 1, 0.6s).
  11. `<footer class="ftco-footer ftco-bg-dark">` — SOLID PINK footer
      (`background: #d291bc`): `<h1 class="logo">` (30px weight 300 WHITE)
      "Prana", `<h2 class="location">` (24px, `rgba(255,255,255,0.9)`)
      "203 Fake St. Mountain View, San Francisco, California, USA", social
      icons (twitter/facebook/instagram), and a copyright line
      (`color: rgba(255,255,255,0.7)`): "Copyright © <year> All rights
      reserved | This template is made with ❤ by Colorlib" (recreate
      without the Colorlib credit).
- **Visual design (TEMPLATES.md screenshot `yogalax-free-template.jpg`,
  1200×946, viewed in browser 2026-08-09 + live render):** airy, feminine,
  light yoga aesthetic. Dusty-pink/mauve `#d291bc` is the single brand
  accent on white/light-gray backgrounds; the hero is a full-viewport photo
  of a woman meditating (lotus pose) with a soft pink gradient washing in
  from the left, a large thin (weight 200) black typewriter headline, a
  thin sub-headline, and a PINK PILL "15 Day Free Trial" button. Sections
  alternate white / light-gray `#fafafa`. Service icons sit in pale-pink
  `#f7ebf3` circles; pricing cards are white with soft shadows and huge pink
  price numbers; the stats band is a dark photo under a strong pink wash
  with white numbers; the footer is SOLID PINK with white text. Typography
  is Work Sans (light weights: 200 hero, 300 headings/subheadings).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand color: **`#d291bc`** (dusty pink/mauve) — links, brand lotus
    icon, checklist icons, hero/pricing/section CTA buttons, active nav
    link, footer background, both gradient overlays, price numbers, gallery
    hover icon, counter icon borders. (Bootstrap's `--primary: #78d5ef`
    light-blue var is UNUSED in the theme — every `.btn.btn-primary` is
    overridden to pink; ignore it.)
  - Light section bg: **`#fafafa`** (`.bg-light` !important). White `#fff`
    cards/sections.
  - Body text: **`#b3b3b3`** (gray) at 16px / line-height 1.8 / weight 400;
    headings black `#000` (weight 300/400). Subheading:
    **`#b3b3b3`**, 16px, UPPERCASE, letter-spacing **3px**, weight 300.
  - Font: **'Work Sans', sans-serif** — weights 200 (hero h1/h2),
    300 (subheadings, do-list, section h2, footer logo), 400 (body, blog
    heading), 500 (h3 cards, price numbers), 600 (pricing CTA, block-7
    heading-2), 700 (Bootstrap btn base). Load via Google Fonts
    (`family=Work+Sans:wght@200;300;400;500;600;700`).
  - Section h2 (`.heading-section h2`): **60px, weight 300**, black;
    mobile ≤768px → 28px. Hero h1 (`.slider-text h1`): **80px, weight
    200**, black; h2: weight 200.
  - Hero overlay: `linear-gradient(45deg, #d291bc 0%, rgba(255,255,255,0)
100%)`, **opacity .3, width 68%** (left side only); counter overlay:
    same gradient, **opacity .8**.
  - Buttons (`.btn` theme): `border-radius: 2px`, no shadow, 13px base;
    `.btn.btn-primary`: `background: #d291bc; border: 1px solid #d291bc;
color: #fff`, hover → `background: transparent; color: #d291bc`.
    HERO CTA override: `border: 1px solid rgba(255,255,255,0.4);
border-radius: 30px` (PILL), hover → `background: #fff !important;
color: #000`. PRICING CTA (`.block-7 .btn-primary`): white text,
    uppercase, weight 600, letter-spacing 1px, `width: 60%; position:
absolute; bottom: 0; left/right: 0; margin: 0 auto`, hover →
    `background: #d291bc !important`.
  - Services icon circle: **100px, `background: #f7ebf3`, radius 50%**,
    icon span 44px `#d291bc`; h3 20px weight 500.
  - do-list items: 24px, weight 300, margin-bottom 15px; icon span 22px
    `#d291bc`.
  - Pricing cards (`.block-7`): `padding: 30px; background: #fff;
box-shadow: 0px 24px 48px -13px rgba(0,0,0,0.05)`; `.heading-2` 14px
    uppercase letter-spacing 1px weight 600; `.price sup` 24px pink;
    `.price .number` **60px weight 500 `#d291bc`**; `.pricing-text li`
    `#4d4d4d`, margin-bottom 15px.
  - Counter: icon 80px square, `border: 1px solid #d291bc` (rotates 135°
    on hover), icon span pink; `.number` **50px weight 500 WHITE**; label
    14px `rgba(255,255,255,0.7)`.
  - Gallery tile: height **270px**, background photo; hover circle 60px
    `#d291bc` radius 50% with white glyph, opacity 0 → 1 over 0.6s.
  - Blog card: `.text` white block overlapping image by `margin-top:
-40px`; heading 18px weight 400 (link black, hover pink).
  - Footer: `background: #d291bc` (SOLID pink), padding 4em 0; logo 30px
    weight 300 white; location 24px `rgba(255,255,255,0.9)`; paragraph
    `rgba(255,255,255,0.7)`.
  - Radius family: 50% (icon circles, user avatars, gallery hover icon),
    30px (hero pill CTA), 2px (base buttons); pricing/blog cards flat.
  - Grid rhythm: sections ~7em vertical padding; services 4-col; classes 6
    cards (3×2); pricing 3-col; counters 4-col; blog 3-col; gallery
    4-col; hero content col-md-8 left-aligned; intro content col-md-6
    right-aligned.
  - Responsive: Bootstrap `col-md-*` / `col-lg-*` grid — below 992px the
    navbar turns solid black; below 768px heading h2 drops to 28px and
    all multi-column grids stack.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap
  grid (NO Bootstrap dependency); navbar transparent absolute over the hero
  with black links + pink active, collapsing to a solid-black mobile bar
  (hamburger toggle, `aria-expanded`); hero = full-viewport background
  photo via picsum (`https://picsum.photos/seed/prana-1/1600/1000` etc.)
  with the left 68% 45° pink gradient overlay (opacity .3) and a
  typewriter-style headline (static headline acceptable, or a simple
  cycling effect); CTA pill "15 Day Free Trial"; intro section with
  right-aligned column over a photo bg + 5-item pink-check do-list; 4
  services cards with pale-pink `#f7ebf3` circles + lucide icons; 6 class
  cards (3×2) with hover pink overlay; 3 pricing cards with pink 60px
  prices + feature lists + "Get Started" CTA; testimonial section with 3
  cards (quote icon, text, avatar circle, name, "Customer"); counter band
  over photo + opacity-.8 pink wash with 4 stat blocks (count-up to fixed
  values: e.g. 800 / 100 / 20 / 200 — source uses JS countUp; static
  numbers acceptable, or a small count-up hook); 3 blog cards with
  overlapping white text blocks; 4 gallery tiles with hover pink circle;
  SOLID PINK footer with logo, fake address, 3 social icons and copyright
  line. All photos via picsum seeds (never copy ColorLib assets); icons
  from `lucide-react`; Work Sans via Google Fonts `<link>` in
  `index.html`; document title "Prana — Yoga Studio Template"; brand
  "Yogalax" → "Prana" everywhere. Copy paraphrased but same kinds:
  headline "Inspiration For Joyful Living.", sub "Do Yoga today for a
  better tomorrow", CTA "15 Day Free Trial", section headings "Why You
  Should Go To Yoga", "Choose Your Level & Focus", "Membership Cards",
  "Successful Stories", "Recent Posts", "See the latest photos".
- **Family/neighbor check (2026-08-09):** no existing app/spec uses the
  pink `#d291bc` brand on a light yoga layout (closest neighbors in the
  repo use different palettes). Keep `#d291bc` + `#fafafa` + Work Sans
  exact.

Prana lives in `apps/prana` (package `@free-react-templates/prana`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Transparent navbar over the hero

The system SHALL render a transparent navigation bar absolutely positioned
at the top of the page, overlaying the hero. It SHALL show the brand "Prana"
(left) with a pink lotus icon, and links Home, Classes, Schedule, About,
Blog, Contact (right, 14px weight 300 black; the active link pink
`#d291bc`). Below 992px the bar SHALL become solid black with white links
and a hamburger toggle.

#### Scenario: Desktop navbar

- **GIVEN** the Prana page is rendered on a viewport ≥992px
- **WHEN** the page loads
- **THEN** a transparent navigation bar SHALL be shown at the top of the
  page overlaying the hero
- **AND** the brand "Prana" SHALL be shown on the left with a pink lotus
  icon
- **AND** the links Home, Classes, Schedule, About, Blog, Contact SHALL be
  shown on the right in black 14px text
- **AND** the active link SHALL be pink (`#d291bc`)

#### Scenario: Mobile navbar

- **GIVEN** the Prana page is rendered on a viewport <992px
- **WHEN** the page loads
- **THEN** the navigation bar SHALL have a solid black background and white
  links
- **AND** the navigation links SHALL be collapsible behind a hamburger
  toggle that exposes them when activated (with `aria-expanded`)

### Requirement: Full-viewport hero with photo, pink gradient and CTA

The system SHALL render a full-viewport hero with a background photo, a 45°
pink gradient overlay covering the LEFT 68% of the hero at 30% opacity, a
large thin (weight 200) black headline "Inspiration For Joyful Living.", a
sub-headline "Do Yoga today for a better tomorrow", and a pink pill button
"15 Day Free Trial" (radius 30px, white text, hover → white bg black text).

#### Scenario: Hero content and styling

- **GIVEN** the Prana page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL span the full viewport height with a background
  photo
- **AND** a 45° gradient from `#d291bc` to transparent SHALL overlay the
  left 68% of the hero at 30% opacity
- **AND** a level-1 heading "Inspiration For Joyful Living." SHALL be shown
  in black, 80px, weight 200
- **AND** a level-2 heading "Do Yoga today for a better tomorrow" SHALL be
  shown below it
- **AND** a button reading "15 Day Free Trial" SHALL be shown with a
  `#d291bc` background, white text, 30px border radius, and a
  `rgba(255,255,255,0.4)` border
- **AND** hovering the button SHALL turn its background white and its text
  black

### Requirement: Intro section with checklist

The system SHALL render an intro section with a background photo, a
right-aligned column containing the heading "Why You Should Go To Yoga", a
paragraph, and a 5-item checklist with pink checkmark icons (24px weight
300 items).

#### Scenario: Intro layout and checklist

- **GIVEN** the Prana page is rendered
- **WHEN** the intro section is displayed
- **THEN** the section SHALL show a background photo with the content in a
  right-aligned column
- **AND** the heading "Why You Should Go To Yoga" SHALL be shown
- **AND** a list of 5 items SHALL be shown, each with a pink checkmark icon
  and 24px weight-300 text
- **AND** the items SHALL read "Yoga boosts brain power", "Yoga helps you
  to breathe better", "Yoga improves your strength", "Yoga helps you to
  focus", and "Yoga helps give meaning to your day"

### Requirement: Services grid

The system SHALL render a light-gray (`#fafafa`) services section with 4
cards, each showing a 100px pale-pink (`#f7ebf3`) circle with a 44px pink
icon, a 20px weight-500 title, and a paragraph.

#### Scenario: Service cards

- **GIVEN** the Prana page is rendered
- **WHEN** the services section is displayed
- **THEN** the section SHALL have a `#fafafa` background
- **AND** 4 cards SHALL be shown side by side on ≥992px: "Healthy
  Lifestyle", "Body & Mind Balance", "Meditation Practice", "Edeology"
- **AND** each card SHALL show a 100px circular icon container with a
  `#f7ebf3` background and a 44px `#d291bc` icon
- **AND** each card SHALL show its title at 20px weight 500 with a short
  paragraph below

### Requirement: Classes section

The system SHALL render a white classes section with the subheading "Yoga
Classes" (uppercase, 16px, letter-spacing 3px, gray `#b3b3b3`) and the
heading "Choose Your Level & Focus" (60px weight 300), followed by 6 class
cards in a 3×2 grid, each with a photo, a hover pink overlay, a title and a
paragraph.

#### Scenario: Class cards grid

- **GIVEN** the Prana page is rendered
- **WHEN** the classes section is displayed
- **THEN** a subheading "Yoga Classes" and a heading "Choose Your Level &
  Focus" SHALL be shown as specified
- **AND** 6 cards SHALL be shown in a 3-per-row grid: "Group Lessons",
  "Yoga For Beginners", "Yoga For Pregnant", "Yoga For Couples", "Bikram
  Yoga", "Yoga Barre"
- **AND** each card SHALL show a photo with a `#d291bc` overlay that fades
  in on hover
- **AND** each card SHALL show its title and a short paragraph

### Requirement: Membership pricing cards

The system SHALL render a light-gray pricing section with the subheading
"Pricing Tables" and the heading "Membership Cards", followed by 3 white
pricing cards (soft shadow) — Year Card $449, Monthly Card $200, Weekly
Card $85 — each with a 60px pink price number, a "For 1 …" caption, an
"Enjoy All The Features" line, a 4-item feature list, and a pink "Get
Started" button (white uppercase text, 60% width).

#### Scenario: Pricing card contents

- **GIVEN** the Prana page is rendered
- **WHEN** the pricing section is displayed
- **THEN** 3 cards SHALL be shown: "Year Card" ($449, "For 1 Year"),
  "Monthly Card" ($200, "For 1 Month"), "Weekly Card" ($85, "For 1 Week")
- **AND** each card SHALL have a white background, 30px padding, and the
  soft shadow `0 24px 48px -13px rgba(0,0,0,0.05)`
- **AND** each price SHALL render with a pink `$` superscript and a 60px
  weight-500 pink number
- **AND** each card SHALL show "Enjoy All The Features" and a feature list
  of 4 items
- **AND** each card SHALL show a "Get Started" button with a `#d291bc`
  background, white uppercase weight-600 text, and 60% width

### Requirement: Testimonials

The system SHALL render a white testimonials section with the subheading
"Testimony" and the heading "Successful Stories", followed by 3 testimonial
cards, each with a quote icon, a paragraph, a circular avatar, a name, and
the position "Customer".

#### Scenario: Testimonial cards

- **GIVEN** the Prana page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** a subheading "Testimony" and a heading "Successful Stories"
  SHALL be shown
- **AND** 3 testimonial cards SHALL be shown, each with a quote icon, a
  paragraph, a circular avatar image, a name, and the label "Customer"

### Requirement: Stats counter band

The system SHALL render a counter band over a background photo with a 45°
pink gradient overlay at 80% opacity, containing 4 stat blocks: Happy
Customers, Yoga Workshops, Years of Experience, Lesson Conducted — each
with a 50px weight-500 white number, a 14px `rgba(255,255,255,0.7)` label,
and an 80px icon with a 1px pink border.

#### Scenario: Counter blocks

- **GIVEN** the Prana page is rendered
- **WHEN** the counter section is displayed
- **THEN** the section SHALL show a background photo washed by the 45°
  `#d291bc` gradient at 80% opacity
- **AND** 4 stat blocks SHALL be shown: "Happy Customers", "Yoga
  Workshops", "Years of Experience", "Lesson Conducted"
- **AND** each block SHALL show a white 50px weight-500 number, a 14px
  label in `rgba(255,255,255,0.7)`, and an 80px icon bordered 1px
  `#d291bc`

### Requirement: Blog cards

The system SHALL render a light-gray blog section with the subheading
"Blog" and the heading "Recent Posts", followed by 3 blog cards, each with
a photo and an overlapping white text block (18px title link, meta line,
paragraph).

#### Scenario: Blog cards

- **GIVEN** the Prana page is rendered
- **WHEN** the blog section is displayed
- **THEN** a subheading "Blog" and a heading "Recent Posts" SHALL be shown
- **AND** 3 blog cards SHALL be shown, each with a photo and a white text
  block overlapping its bottom edge
- **AND** each card SHALL show an 18px title (black link, pink on hover), a
  meta line, and a short paragraph

### Requirement: Gallery tiles

The system SHALL render a gallery section with the subheading "Gallery" and
the heading "See the latest photos", followed by 4 photo tiles (270px tall)
that reveal a 60px pink circle icon with a white glyph on hover.

#### Scenario: Gallery tiles

- **GIVEN** the Prana page is rendered
- **WHEN** the gallery section is displayed
- **THEN** a subheading "Gallery" and a heading "See the latest photos"
  SHALL be shown
- **AND** 4 photo tiles of 270px height SHALL be shown side by side on
  ≥992px
- **AND** hovering a tile SHALL fade in a 60px `#d291bc` circle with a
  white icon at its center

### Requirement: Solid pink footer

The system SHALL render a solid pink (`#d291bc`) footer with the brand
"Prana" in white 30px weight 300, the fake address "203 Fake St. Mountain
View, San Francisco, California, USA" in 24px `rgba(255,255,255,0.9)`, 3
social icons, and a copyright line in `rgba(255,255,255,0.7)`.

#### Scenario: Footer content and styling

- **GIVEN** the Prana page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a solid `#d291bc` background
- **AND** the brand "Prana" SHALL be shown in white 30px weight-300 text
- **AND** the address SHALL be shown in 24px `rgba(255,255,255,0.9)`
- **AND** 3 social icons (e.g. Twitter, Facebook, Instagram from
  lucide-react) SHALL be shown
- **AND** a copyright line SHALL be shown in `rgba(255,255,255,0.7)`
  reading "Copyright © <year> All rights reserved"

### Requirement: Section order

The system SHALL render sections in the exact order of the source:
navbar → hero → intro → services → classes → pricing → testimonials →
counter → blog → gallery → footer.

#### Scenario: Full page section order

- **GIVEN** the Prana page is rendered
- **WHEN** the whole page is inspected top to bottom
- **THEN** the sections SHALL appear in this order: navbar, hero, intro,
  services, classes, pricing, testimonials, counter, blog, gallery, footer

### Requirement: Responsive stacking

The system SHALL stack all multi-column grids to a single column below the
Bootstrap breakpoints (992px for 4-col grids, 768px for 3-col grids), and
SHALL reduce the section heading from 60px to 28px below 768px.

#### Scenario: Responsive layout

- **GIVEN** the Prana page is rendered on a viewport narrower than 768px
- **WHEN** the sections are displayed
- **THEN** services, classes, pricing, counter, blog and gallery SHALL
  stack to single-column layouts
- **AND** section headings SHALL render at 28px instead of 60px

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-prana`
- [ ] `scripts/verify-app.sh prana` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with source): transparent navbar (brand
      "Prana" + pink lotus icon; links Home/Classes/Schedule/About/Blog/
      Contact, active pink; solid black + hamburger below 992px) → hero
      (full viewport, bg photo, left-68% 45° pink gradient overlay at
      opacity .3, h1 "Inspiration For Joyful Living." 80px weight 200
      black, h2 "Do Yoga today for a better tomorrow", pink pill CTA
      "15 Day Free Trial" radius 30px, hover → white bg black text) →
      intro (bg photo, right-aligned col, "Why You Should Go To Yoga",
      5-item pink-check do-list) → services (`#fafafa`, 4 cards:
      100px `#f7ebf3` circles + 44px pink icons, titles incl. "Edeology"
      verbatim) → classes (subheading "Yoga Classes" + "Choose Your Level
      & Focus" 60px w300; 6 cards 3×2 with hover pink overlay) → pricing
      (`#fafafa`, subheading "Pricing Tables" + "Membership Cards"; 3
      white cards, shadow `0 24px 48px -13px rgba(0,0,0,0.05)`, prices
      $449/$200/$85 with 60px pink numbers, 4-item feature lists, pink
      "Get Started" 60% width uppercase) → testimonials (3 cards: quote
      icon, text, avatar, name, "Customer") → counter (bg photo +
      opacity-.8 pink wash; 4 stats with white 50px numbers) → blog
      (`#fafafa`, 3 cards with overlapping white text blocks) → gallery
      (4 tiles 270px, hover pink circle icon) → footer (SOLID `#d291bc`,
      white logo 30px w300, address 24px, 3 social icons, copyright)
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#d291bc`
      (pink — links, icons, CTAs, footer bg, overlays, prices),
      `#fafafa` (light sections), `#f7ebf3` (service circles);
      text `#b3b3b3`, `#4d4d4d`, `rgba(255,255,255,0.7)`/`0.9`
- [ ] Font: Work Sans 200/300/400/500/600/700 via Google Fonts `<link>`
      in `index.html` (`family=Work+Sans:wght@200;300;400;500;600;700`),
      title "Prana — Yoga Studio Template"
- [ ] All photos via `https://picsum.photos/seed/prana-<n>/<w>/<h>`
      (hero, intro, class cards, avatars, blog, gallery) — NEVER copy
      ColorLib assets; icons from `lucide-react`
- [ ] Hover states: hero CTA → white bg/black text; services none;
      class card pink overlay fade-in; pricing CTA pink; blog title →
      pink; gallery pink circle fade-in; counter icon border rotates 135°
- [ ] Mobile (<992px): navbar solid black with hamburger; <768px: all
      grids stack, section h2 28px
- [ ] Copy kinds kept: "Inspiration For Joyful Living.", "Do Yoga today
      for a better tomorrow", "15 Day Free Trial", "Why You Should Go To
      Yoga", "Choose Your Level & Focus", "Membership Cards", "Successful
      Stories", "Recent Posts", "See the latest photos"
