# Template: Swole (Fitness Studio Template)

## Purpose

Swole is a single-page fitness-studio website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Fitfloss" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

Swole recreates the ColorLib "Fitfloss" free Bootstrap fitness template — a
bold, high-energy fitness-studio landing page with a red (`#ff0000`) brand
accent, a dark full-screen hero over a gym photo with a dark gradient overlay,
a white uppercase Oswald headline, three course pricing cards, a red-header
class schedule table, four feature cards with line icons, a split about
section (text left / photo right), a black-bordered testimonial carousel, a
dark "Become a Member" CTA, and a red footer with an About Us blurb, contact
info, a newsletter form, and square social icons.

## Design reference (replication findings)

- **Original:** ColorLib "Fitfloss" — fitness studio / body building template
  (source: https://colorlib.com/wp/template/fitfloss/).
  TEMPLATES.md has TWO copies of this item (lines 396 and 1841 — mark EVERY
  copy `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/fitfloss/ — HTTP 200,
  full rendered DOM analyzed (26 KB, title "Fitfloss"). Stylesheet
  `css/style.css` (~158 KB, extracted) plus animate, bootstrap.min,
  magnific-popup, nice-select, owl.carousel.min, themify-icons. Fonts come
  from a Google Fonts `@import` inside `style.css`:
  `Anton | Oswald:300,400,500,600` — **headings default to Anton, body/nav
  copy uses Oswald**; our recreation loads both from Google Fonts `<link>`s
  instead. Cross-checked against the TEMPLATES.md screenshot
  (`fitfloss-free-template.jpg`, viewed in browser, 1200×946) and a live
  browser render of the preview — designs match. The demo brands itself
  "Fitfloss"; our recreation uses the NEW name **Swole**.
- **Section order (1:1):** Header (`header.main_menu`, `position: absolute;
top: 0`, z-index 999, full width, over the hero): container → navbar
  (`nav.navbar.navbar-expand-lg.navbar-light`) — brand left
  (`.navbar-brand`, 120×130px logo block with red `logo_bg.png` shield
  background, centered logo image; on scroll the `.menu_fixed` class flips
  the header to `position: fixed` with **red `#ff0000` background**,
  shadow, logo block shrinks to 90px height with `background-image: none`),
  nav links centered (`.main-menu-item justify-content-center`, white
  Oswald 15px uppercase, padding 30px 24px; hover `#ee390f`; Home / About /
  Courses / Blog dropdown (blog, Single blog) / Pages dropdown (gallery,
  Course Details, Course shedule, Elements) / Contact), plus a red
  `btn_1` phone CTA right ("+440 1234 654 953", `d-none d-lg-inline-block`,
  padding 11.5px 33px, margin-left 41px); mobile ≤991px: hamburger toggler
  (image icon), collapsed links turn black, dropdown bg `#fafafa` with
  black 14px items that hover red → Hero/Banner (`section.banner_part`,
  bg photo `banner_bg.png`, cover): `.banner_part:after` dark overlay
  `linear-gradient(to right, rgba(10,10,10,0.9) 0%, rgba(50,50,50,0.2)
100%)`; `.banner_text` 1080px tall (650px ≤991px, 700px 992–1200px),
  content left (col-lg-7): `<p>` "Working hard in order to get perfect
  shape." (white 16px weight 300 capitalize, 100×1px white rule `:after`
  below) + `<h1>` "Fitfloss Fitness Studio" (Oswald, white, uppercase,
  **100px** weight 700, line-height 120px, margin-bottom 64px; 25px ≤576px)
  - `btn_1` "Browse Services" → Our Popular Courses (`.popular_cource
.section_padding`, padding 140px 0): centered heading `.section_tittle`
    — h2 "Our Popular Courses" (48px, `#222`, weight 700, line-height 45px)
  - small gray p; grid of 3 course cards (`.single_popular_cource`,
    col-lg-4 col-sm-6): full-width photo (`img/single_cource_1..3.png`) +
    h3 title (21px, black, weight 400, margin 38px 0 17px) with **red price
    span floated right** (`#ff0000`): "Basic Body Building $140.00" ·
  "BIntermediate Body Building $200.00" (typo in source — recreate as
    "Intermediate Body Building") · "Advanced Body Building $250.00" + lorem
    p + `btn_2` "Apply Course" (margin-top 42px) → Get Your Schedule
    (`.shedule_part.overflow-hidden`, container-fluid): two columns —
    left `.shedule_img` photo (col-lg-5, hidden <992px), right
    `.shedule_content` (col-lg-6): h2 "Get Your Schedule" (48px, margin
    bottom 20px) + intro p + `<table class="table table-bordered">`:
    thead **red `#ff0000` bg, white text** (Course Name / mon / the / wed /
    thu / fri, padding 30px 35px, weight 400, capitalize) + 6 tbody rows all
    "Fitness Aero" (th row-header + td times 02.00 / 10.10 / 02.00 / 02.10 /
    10.00; cells padding 30px 35px, `#777777` weight 300 14px, border 1px
    `#eeeeee`) → Why You Should Choose Us (`.our_feature.section_padding`):
    centered h2 "Why You Should Choose Us" + 4 feature cards
    (`.single_feature`, col-lg-3 col-sm-6): icon image
    (`img/icon/feature_icon_1..4.png` — dumbbell / clock / user / price-tag)
  - h4 title (margin 42px 0 16px): **Quality Training**, **Flexible
    Timeframe**, **Qualified Trainers**, **Affordable Price** + lorem p →
    About (`section.about_part.padding_bottom.overflow-hidden`,
    container-fluid): row `align-items-center justify-content-end` — text
    column left (`col-xl-4 col-lg-6 col-md-6`, `.about_text`, padding-left
    10%): h2 "We are Fitfloss. A Dedicated Fitness Center Since 2004" (48px,
    line-height 60px, margin-bottom 40px) + two lorem paragraphs (margin
    bottom 30px) + `btn_1` "Browse Services"; photo column right (`col-lg-5
offset-lg-1 col-md-6`, `.about_img` = `img/about_img.png`) → What
    Customer's Say About Us (`.client_review.padding_bottom`): centered h2
    "What Customer's Say About Us" + owl carousel of 7 testimonial cards
    (`.client_review_single`, text-center, **border 2px solid #000**, padding
    50px 42px): circular avatar (border-radius 50%, max-width 80px) + h4 name
    "Helena Phillips" (16px, margin-top 17px) + span "CEO at Google" + quote
    p (16px, margin-top 26px); dots below (14px squares, `#eeeeee`, active
    `#ff0000`, margin-top 75px) → Become a Member (`.become_member
.section_padding`, bg image `become_member_bg.png` + **black overlay
    opacity .5**, text-center): h2 "Many more Features are Waiting!" (48px
    white) + p (16px, margin 13px 0 43px) + `btn_1` "Become a Member" →
    Footer (`footer.footer-area.section_padding`, **bg red `#ff0000`**):
    row `justify-content-between` — About Us column (`.single-footer-widget
.footer_1`, col-sm-6 col-lg-3): h4 "About Us" (24px weight 700 white,
    margin-bottom 23px) + blurb p (16px white); Contact us column
    (`.footer_2`, col-lg-3 col-sm-6): h4 "Contact us" + `.contact_info`:
    address p "56/8, rockybeach road, santa monica, Los angeles, California
  * 59620" + two phone h2s "012-6532-568-9746" / "012-6532-569-9748"
    (24px white); Newsletter column (`.footer_2`, col-sm-12 col-md-8
    col-lg-5): h4 "Newsletter" + p + email form (`#mc_embed_signup`,
    margin-top 25px): email input (height 40px, width 65%, border none, bg
    `#ff3333`, white text, padding-left 20px, radius 0, Oswald 13px) +
    "Subscribe" submit button with arrow icon; copyright bar
    (`.copyright_part_text`): left "Copyright © <year> All rights reserved |
    This template is made with <heart> by Colorlib" (white, Colorlib link
    `#ff0000`), right `.social_icon` (text-align right, ≤991px center,
    margin-top 20px): 4 square icon buttons (30×30, bg `#fe3233`, white,
    margin-left 7px; hover bg white + red text): ti-facebook, ti-twitter-alt,
    ti-instagram, ti-skype → recreation credits Swole.
- **Design tokens extracted from the live preview CSS (`css/style.css`):**
  - Brand **red `#ff0000`** (primary): `btn_1` button bg + `menu_fixed`
    sticky header bg + schedule thead bg + course price spans + footer bg +
    active carousel dot + dropdown item hover; hover variants `#ee390f`
    (nav links), `#ff3333` (newsletter input bg), `#fe3233` (social icon
    bg).
  - Ink **`#222`** — default heading color (`h1–h6`, Anton); section
    titles 48px weight 700; `btn_1` hover bg `#222`.
  - Black **`#000`** — `btn_2` border, testimonial card border, become-
    member overlay (opacity .5), course card h3 titles, mobile dropdown
    items.
  - White `#fff` — hero text, nav links, `btn_1` text, schedule thead text,
    footer text, newsletter input text/placeholder.
  - Body grays — p text `#777777` (Oswald 14px, line-height 1.929);
    schedule cells `#777777` weight 300; social icons `#cccccc` in
    `.footer_2` variant (unused on this page); table borders `#eeeeee`;
    dots `#eeeeee`; dropdown bg `#fafafa`; newsletter border `#dedede`.
  - Buttons — `btn_1`: padding 13.5px 45px, radius **0**, font-size 14px,
    white on red `#ff0000`, hover `#222`, transition all .4s ease-in-out,
    text-transform capitalize; `btn_2`: padding 14px 28px, transparent bg,
    **2px solid #000 border**, 15px black, hover red bg + white text +
    red border. Footer newsletter submit is the red family too.
  - Headings — `h1–h6` font-family **Anton** (default heading face), color
    `#222`; `.section_tittle h2` 48px weight 700 line-height 45px margin-
    bottom 25px (25px/35px ≤991px); banner h1 overrides to **Oswald**
    100px uppercase weight 700 line-height 120px; body p Oswald 14px
    line-height 1.929.
  - Navbar — absolute top 0; links white Oswald 15px uppercase padding
    30px 24px; hover `#ee390f`; sticky `.menu_fixed`: fixed, red `#ff0000`
    bg, shadow 0 10px 15px rgba(0,0,0,0.05), logo block 90px no bg image,
    nav hover white.
  - Section backgrounds — white page; banner = photo + dark gradient
    overlay (rgba(10,10,10,0.9) → rgba(50,50,50,0.2)); become-member =
    photo + black overlay opacity .5; footer = solid red `#ff0000`.
  - Radii — **0** everywhere structural (buttons, inputs, tables); 50%
    circles only for testimonial avatars; square 30×30 social buttons.
  - Spacing — `.section_padding` 140px 0 (80px ≤1200px, 70px smaller);
    `.section_tittle` margin-bottom 70px (50px smaller); banner text 1080px
    tall; card h3 margin 38px 0 17px; feature h4 margin 42px 0 16px;
    table cells 30px 35px padding; footer h4 margin-bottom 23px.
- **Visual design (from screenshot + live render):** dark, high-energy
  fitness landing page — full-width hero photo of a muscular man crouching
  on a blurred city street, dimmed by a dark overlay; small white tagline
  "Working hard in order to get perfect shape." above a huge white
  uppercase condensed headline "FITFLOSS FITNESS STUDIO" (Oswald); red
  "Browse Services" button under it; top nav white links centered with a
  shield-shaped red logo block (dumbbell mark) left and a red phone-number
  button right. Below: white "Our Popular Courses" section with 3 cards
  (weight-lifter / push-up / shoes photos, red prices, black-outline
  "Apply Course" buttons); red-header schedule table; 4 icon features
  (dumbbell, clock, user, price tag); about split with lorem text left and
  a woman-workout photo right; black-bordered testimonial cards with round
  avatars; dark rope-texture "Many more Features are Waiting!" CTA with red
  "Become a Member" button; solid red footer with About Us / Contact /
  Newsletter columns and square social icons. Demo copy is placeholder
  lorem ("As you pour the first glass of your favorite Chianti...",
  "Helena Phillips / CEO at Google", "Accessories Here you can find...") —
  paraphrase into fitness-themed copy in the recreation.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/swole-<n>/<w>/<h>`); icons → lucide-react
  (dumbbell, clock, user, tag for features; phone, arrow-right, heart;
  social brand icons as inline SVG per repo rule — lucide-react removed
  brand icons); Anton + Oswald via Google Fonts `<link>`s; no assets
  copied. Copy paraphrased but same content kinds (tagline + headline +
  CTA, 3 course cards with price + Apply button, schedule table, 4
  features, about text + photo, testimonial carousel, member CTA, footer
  columns + newsletter form + social squares).

Swole lives in `apps/swole` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header and navigation

The system SHALL render an absolute-positioned header over the hero with a
logo block, centered main navigation, a phone CTA, and a sticky red header
on scroll.

#### Scenario: Brand, navigation and phone CTA

- **GIVEN** the Swole page is rendered on a wide viewport
- **WHEN** the header is displayed
- **THEN** the header SHALL show a logo block on the left (120×130px with
  the Swole mark) over the hero
- **AND** the nav SHALL show centered white uppercase Oswald links: Home,
  About, Courses, Blog (dropdown: Blog, Single Blog), Pages (dropdown:
  Gallery, Course Details, Course Shedule, Elements), and Contact
- **AND** nav links SHALL turn orange-red `#ee390f` on hover
- **AND** the header SHALL show a red "Browse Services"-style phone CTA
  button on the right ("+440 1234 654 953")

#### Scenario: Sticky red header on scroll

- **GIVEN** the Swole page is rendered
- **WHEN** the user scrolls down the page
- **THEN** the header SHALL become fixed at the top with a red `#ff0000`
  background, a drop shadow, and a shrunken logo block without its
  background image

#### Scenario: Mobile menu toggle

- **GIVEN** the Swole page is rendered on a narrow viewport
- **WHEN** the hamburger toggler is activated
- **THEN** a mobile menu SHALL open showing the nav links and dropdowns
  with black link text
- **AND** the menu SHALL close when the toggler is activated again

### Requirement: Hero banner

The system SHALL render a full-screen hero with a background photo, a dark
gradient overlay, a tagline, a large headline, and a CTA button.

#### Scenario: Hero content

- **GIVEN** the Swole page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL show a full-bleed background photo with a dark
  gradient overlay (strong `rgba(10,10,10,0.9)` on the left fading to
  `rgba(50,50,50,0.2)` on the right)
- **AND** the hero SHALL show the tagline "Working hard in order to get
  perfect shape." in white 16px weight 300 with a short white rule below
- **AND** the hero SHALL show the headline "Swole Fitness Studio" in white
  uppercase Oswald ~100px weight 700
- **AND** the hero SHALL show a red "Browse Services" button (radius 0,
  white text, dark hover)

### Requirement: Popular courses

The system SHALL render an "Our Popular Courses" section with three course
cards.

#### Scenario: Course card content

- **GIVEN** the Swole page is rendered
- **WHEN** the popular courses section is displayed
- **THEN** the section SHALL show the centered heading "Our Popular
  Courses" (48px, `#222`, weight 700) with a short intro line
- **AND** the section SHALL show exactly 3 course cards in a row, each
  with a photo, a black title with a red price on the right, a short
  description, and an "Apply Course" button (transparent, 2px black
  border, hover fills red)
- **AND** the cards SHALL be: Basic Body Building ($140.00), Intermediate
  Body Building ($200.00), Advanced Body Building ($250.00)

### Requirement: Schedule table

The system SHALL render a "Get Your Schedule" section with a photo column
and a class schedule table with a red header row.

#### Scenario: Schedule table content

- **GIVEN** the Swole page is rendered
- **WHEN** the schedule section is displayed
- **THEN** the section SHALL show a photo on the left (large screens only)
  and content on the right: the heading "Get Your Schedule" (48px), an
  intro line, and a bordered table
- **AND** the table SHALL have a red `#ff0000` header row with white text:
  Course Name / Mon / The / Wed / Thu / Fri
- **AND** the table SHALL list 6 rows of "Fitness Aero" with time cells
  (02.00 / 10.10 / 02.00 / 02.10 / 10.00), gray `#777777` weight-300 text
  on 1px `#eeeeee` cell borders

### Requirement: Feature cards

The system SHALL render a "Why You Should Choose Us" section with four
feature cards.

#### Scenario: Feature card content

- **GIVEN** the Swole page is rendered
- **WHEN** the features section is displayed
- **THEN** the section SHALL show the centered heading "Why You Should
  Choose Us"
- **AND** the section SHALL show 4 feature cards in a row, each with a
  line icon, a title, and a short description: Quality Training, Flexible
  Timeframe, Qualified Trainers, Affordable Price

### Requirement: About section

The system SHALL render a split about section with text on the left and a
photo on the right.

#### Scenario: About content

- **GIVEN** the Swole page is rendered
- **WHEN** the about section is displayed
- **THEN** the section SHALL show the heading "We are Swole. A Dedicated
  Fitness Center Since 2004" (48px, line-height 60px) on the left with two
  descriptive paragraphs
- **AND** the section SHALL show a red "Browse Services" button below the
  paragraphs
- **AND** the section SHALL show a large workout photo on the right

### Requirement: Testimonials

The system SHALL render a "What Customer's Say About Us" testimonial
carousel with black-bordered cards.

#### Scenario: Testimonial card content

- **GIVEN** the Swole page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL show the centered heading "What Customer's Say
  About Us"
- **AND** the section SHALL show a carousel of testimonial cards, each with
  a 2px black border, a circular avatar, a name, a role, and a quote
- **AND** the carousel SHALL provide accessible next/previous controls or
  dots

### Requirement: Become a member CTA

The system SHALL render a dark "Many more Features are Waiting!" call-to-
action section.

#### Scenario: CTA content

- **GIVEN** the Swole page is rendered
- **WHEN** the become-a-member section is displayed
- **THEN** the section SHALL show a background photo with a black overlay
  at 50% opacity and centered white content
- **AND** the section SHALL show the heading "Many more Features are
  Waiting!" (48px white), a short line, and a red "Become a Member" button

### Requirement: Footer

The system SHALL render a red footer with About Us, Contact, and Newsletter
columns plus a copyright bar with social icons.

#### Scenario: Footer content

- **GIVEN** the Swole page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a red `#ff0000` background with white text
- **AND** the footer SHALL show an "About Us" column with a blurb paragraph
- **AND** the footer SHALL show a "Contact us" column with an address and
  two phone numbers
- **AND** the footer SHALL show a "Newsletter" column with an email input
  and a "Subscribe" button
- **AND** a copyright bar SHALL show the current year, "All rights
  reserved", a credit line for the template author, and 4 square social
  icon buttons (Facebook, Twitter, Instagram, Skype)

#### Scenario: Newsletter submission

- **GIVEN** the Swole page is rendered
- **WHEN** the newsletter form is submitted
- **THEN** the form SHALL prevent the default page reload
- **AND** the form SHALL show a confirmation message

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `apps/swole` created from a landing/app pattern, package renamed to
      `@free-react-templates/swole`
- [ ] TDD: tests written first (red), then implementation (green)
- [ ] 100% coverage lines/functions/branches/statements (`npm run
  test:coverage -- --project apps/swole` or `scripts/verify-app.sh
  swole`)
- [ ] Brand red `#ff0000` + ink `#222` + black `#000` + body gray
      `#777777` in `@theme`; Anton + Oswald via Google Fonts links
- [ ] Section order matches the original 1:1 (see Design reference)
- [ ] Header: absolute over hero, logo block left, centered white uppercase
      Oswald nav with Blog/Pages dropdowns, red phone CTA right; sticky
      red `#ff0000` header on scroll; mobile hamburger with black links
- [ ] Hero: bg photo + dark gradient overlay (0.9 → 0.2); white tagline
      with rule; ~100px uppercase headline; red "Browse Services" button
- [ ] Popular courses: 3 cards (Basic $140 / Intermediate $200 / Advanced
      $250) with photo, red price span, description, black-outline "Apply
      Course" button
- [ ] Schedule: photo left (≥lg) + table with red header row (Course Name /
      Mon / The / Wed / Thu / Fri) and 6 "Fitness Aero" rows with the
      exact time cells
- [ ] Features: 4 cards (Quality Training, Flexible Timeframe, Qualified
      Trainers, Affordable Price) with line icons
- [ ] About: text left (heading + 2 paragraphs + red Browse Services
      button), photo right
- [ ] Testimonials: carousel of black-bordered cards (circular avatar +
      name + role + quote) with dots/controls
- [ ] Become a member: photo bg + black 50% overlay + white 48px heading +
      red "Become a Member" button
- [ ] Footer: red bg, About Us / Contact us (address + 2 phones) /
      Newsletter (email + Subscribe, confirm on submit) columns, copyright
      bar + 4 square social buttons
- [ ] Radii: 0 everywhere structural (buttons, inputs, tables); 50% circles
      only for testimonial avatars; square 30×30 social buttons
- [ ] Placeholder images via `picsum.photos/seed/swole-<n>/<w>/<h>`; no
      assets copied; social brand icons as inline SVG
- [ ] PR description: source template, preview URL, design tokens, what
      differs
- [ ] After merge: TEMPLATES.md Fitfloss (lines 396, 1841) `[~]` → `[x]` +
      Surge URL (`free-react-templates-swole.surge.sh`) + homepage + `npm
    run readme:status`
