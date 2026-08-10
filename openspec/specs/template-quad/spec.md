# Template: Quad (Bootstrap / Education Template)

## Purpose

Quad is a single-page education/courses landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Edustage" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Edustage" — education / online courses landing
  template (source: https://colorlib.com/wp/template/edustage/).
  TEMPLATES.md has THREE copies of this item (lines 383, 1635 and 2043 —
  mark EVERY copy `[x]` when done, in the Bootstrap / Education / Landing
  Page categories). Live preview title: "Edustage Education".
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/edustage/
  (HTTP 200, 34.5 KB, title "Edustage Education"). Stylesheets:
  `css/style.css` (80.5 KB, extracted — 3,015 lines, SCSS-compiled,
  "Default Styles @File" header) + Bootstrap 4 + plugin libs
  (owl.carousel for the course + testimonial sliders, nice-select,
  flaticon icon font, themify icons). No section `id`s; Bootstrap 4 grid
  - utility classes. Google Fonts `@import` at the top of style.css:
    **Roboto:400,400i,500** + **Rubik:500,600**.
- **Screenshot:** `edustage-free-template.jpg` (TEMPLATES.md lines 383 /
  1635 / 2043) — verified in a browser (vision analysis, 1200×946):
  white header with a subtle bottom shadow (logo left: dark navy
  "edustage" wordmark + small yellow open-book icon; nav right: Home,
  About, Pages, Blog, Contact — the LIVE DOM uses Home / About / Courses
  / Elements / Blog / Contact, screenshot is an older build, DOM wins —
  plus a magnifying-glass search icon far right); hero on a light
  off-white background: small uppercase sub-headline in dark blue/grey
  ("Best online education service In the world"), big navy headline
  "ONE STEP AHEAD THIS SEASON", a dark navy "LEARN MORE" button + a
  bright gold "SEE COURSE" button, and below them a wide photo of six
  happy students with colorful notebooks cropped at the bottom so it
  blends into the white section; "Awesome Feature" centered heading.
  Professional academic palette: navy + gold + white/light grey.
- **Visual design (from DOM + CSS tokens + rendered screenshot):**
  classic education landing page — hero with a light photo background
  image (students group, `img/banner/home-banner.jpg`, cover) and a
  centered text block at 40% height; white body sections; primary deep
  navy **`#002347`** (headings, nav links, hero headline + subheadline,
  `.primary-btn2` fill, price badge text, events/registration/footer
  section backgrounds, event detail overlay `rgba(0,35,71,.5)`), gold
  **`#fdc632`** (`.primary-btn` fill, nav hover/active, circular course
  price badge, event link), lighter golds **`#f8b600`** / **`#f4e700`**
  (secondary accents), section alt background **`#f9f9ff`** (feature
  cards + course card body), body text `#7b838a`, clock tiles `#334f6c`;
  body font Roboto 16px `#7b838a`, headings Rubik 500 `#002347`; section
  titles 36px bold Rubik; rounded (5px) uppercase 13px buttons with
  48–50px line-height; circular price badge (65px, gold, navy text).
  The demo brands itself "edustage"; recreation uses the NEW name
  **Quad**.

- **Structure (1:1, section order):**
  1. Header `header.header_area` (position absolute, full width, z-99,
     transparent navbar over the hero — nav links navy `#002347`;
     `.main_menu` contains a hidden search bar) →
     - `div.main_menu`:
       - `div.search_input#search_input_box` (hidden by default):
         `form.d-flex.justify-content-between` — `input#search_input`
         (placeholder "Search Here") + submit `button.btn` + close
         `span.ti-close#close_search` (search icon in the navbar
         toggles this bar).
       - `nav.navbar.navbar-expand-lg.navbar-light` >
         `div.container`:
         - `a.navbar-brand.logo_h` > `img img/logo.png` (navy
           "edustage" wordmark + yellow open-book icon — recreate as a
           text wordmark "Quad" + lucide `BookOpen` in gold).
         - `button.navbar-toggler` (three `span.icon-bar` lines —
           hamburger; Bootstrap collapse on mobile).
         - `div.collapse.navbar-collapse` > `ul.navbar-nav.mx-auto` —
           **Home** (`.active`), **About**, **Courses**, **Elements**,
           **Blog**, **Contact** (`li.nav-item`, margin-right 45px;
           `a.nav-link` — 500 14px/80px Rubik, `#002347`, hover/active
           `#fdc632`; mobile: white links in the collapsed list).
       - Right side: a search toggle (magnifier icon) in the header
         actions (screenshot).
  2. Hero `section.home_banner_area` (**min-height 900px**, `background:
url(../img/banner/home-banner.jpg) no-repeat center`, cover, light
     photo of students) → `div.banner_inner` (absolute, **top 40%**,
     translateY(-50%), width 100%, z-10) → `div.container` >
     `div.row` > `div.col-lg-12` > `div.banner_content.text-center`:
     - `p.text-uppercase` **"Best online education service In the
       world"** (20px, 500, `#002347`).
     - `h2.text-uppercase.mt-4.mb-5` **"One Step Ahead This Season"**
       (48px, 500, Rubik navy).
     - Buttons row: `a.primary-btn2.mb-3.mb-sm-0` **"learn more"**
       (navy fill `#002347`, gold text `#fdc632`) + `a.primary-btn`
       **"see course"** (gold fill `#fdc632`, navy text).
  3. Features `section.feature_area.section_gap_top` (padding-bottom
     100px) → `div.container` > `div.row.justify-content-center` >
     `div.col-lg-5` > `div.main_title`: `h2.mb-3` **"Awesome Feature"**
     (36px bold, Rubik navy, mb 15px) + `p` blurb ("Replenish man have
     thing gathering lights yielding shall you…") →
     `div.row` of THREE `div.col-lg-4.col-md-6` (`div.single_feature`,
     bg **`#f9f9ff`**, padding **40px 36px**; hover shadow `0px 10px
30px rgba(0, 35, 71, 0.1)`):
     - `div.icon` > `span.flaticon-student` (30px icon) — card 1
       **Scholarship Facility** (h4 20px 500 + p "One make creepeth,
       man bearing theira firmament won't great heaven").
     - `div.icon` > `span.flaticon-book` — card 2 **Sell Online
       Course**.
     - `div.icon` > `span.flaticon-graduation-cap` — card 3 **Global
       Certification**.
       (Each: `div.icon` + `div.desc` > h4.mt-3.mb-2 + p; flaticon →
       lucide-react.)
  4. Popular Courses `div.popular_courses` → `div.container` >
     `div.row.justify-content-center` > `div.col-lg-5` >
     `div.main_title`: `h2.mb-3` **"Our Popular Courses"** + p blurb →
     `div.row` > `div.col-lg-12` > `div.owl-carousel.active_course`
     (owl carousel; 3 slides `div.single_course`):
     - `div.course_head` (position relative, overflow hidden) > `img
img/courses/cN.jpg` (course art, e.g. 300×200).
     - `div.course_content` (bg `#f9f9ff`, padding **30px 26px**,
       position relative):
       - `span.price` **$25** — **absolute circular badge**: 65px
         circle, bg `#fdc632`, navy text, Rubik 500 20px,
         `top: -34px; right: 15px`, radius 50%.
       - `span.tag.mb-4.d-inline-block` **"design"** (padding 2px
         21px).
       - `h4.mb-3` > `a` course title: **Custom Product Design** /
         **Social Media Network** / (third slide, e.g. **Visual Arts
         & Design**-style title).
       - `p` "One make creepeth man bearing their one firmament won't
         fowl meat over sea…".
       - `div.course_meta.d-flex.justify-content-lg-between…mt-4`:
         `div.authr_meta` — round avatar `img img/courses/authorN.png`
         - `span` **Cameron**; right: `span.meta_info` (lucide `User`
           icon + **25**) + `span.meta_info` (lucide `Heart` icon +
           **35**).
  5. Registration `div.section_gap.registration_area` (bg
     **`#002347`**) → `div.container` > `div.row.align-items-center`:
     - Left `div.col-lg-7` — `div.row.clock_sec.clockdiv#clockdiv`
       (white text):
       - `div.col-lg-12`: `h1.mb-3` **"Register Now"** (42px, white,
         Rubik) + `p` ("There is a moment in the life of any aspiring
         astronomer that it is time to buy that first telescope…").
       - FOUR `div.col.clockinner.clockinner1` countdown tiles (bg
         **`#334f6c`**, padding 35px 20px): `h1.days` **150** +
         `span.smalltext` **Days** · `h1.hours` **23** / **Hours** ·
         `h1.minutes` **47** / **Mins** · `h1.seconds` **59** /
         **Secs** (source runs a JS countdown; static values 150/23/47/
         59 at load — a live ticking countdown is acceptable).
     - Right `div.col-lg-4.offset-lg-1` — `div.register_form`: `h3`
       **"Courses for Free"** + `p` "It is high time for learning" +
       `form.form_area#myForm` (post): `div.col-lg-12.form_group`
       with THREE inputs — **Your Name** (text), **Your Phone Number**
       (tel), **Your Email Address** (email, pattern-validated) +
       `div.col-lg-12.text-center` > `button.primary-btn` **Submit**
       (gold fill).
  6. Trainers `section.trainer_area.section_gap_top` (padding-bottom
     100px) → `div.container` > `div.row.justify-content-center` >
     `div.col-lg-5` > `div.main_title`: `h2.mb-3` **"Our Expert
     Trainers"** + p blurb → `div.row` of FOUR
     `div.col-lg-3.col-md-6.col-sm-12.single-trainer` (mb 30px):
     - `div.thumb.d-flex.justify-content-sm-center` > `img.img-fluid
img/trainer/tN.jpg`.
     - `div.meta-text.text-sm-center`: `h4` name — **Mated Nithan** /
       **David Cameron** / **Jain Redmel** / **Nathan Macken**;
       `p.designation` **"Sr. web designer"**; `div.mb-4` > `p` blurb
       ("If you are looking at blank cassettes on the web, you may be
       very confused at the…"); social row
       `div.align-items-center.justify-content-center.d-flex` — FOUR
       icon links (ti-facebook, ti-twitter, ti-linkedin, ti-pinterest;
       → inline SVG / lucide).
  7. Events `div.events_area` (bg **`#002347`**, padding **130px 0
     100px**) → `div.container` > `div.row.justify-content-center` >
     `div.col-lg-5` > `div.main_title`: `h2.mb-3` **"Upcoming Events"**
     (white on navy) + `p` blurb → `div.row` of TWO
     `div.col-lg-6.col-md-6` (`div.single_event.position-relative`):
     - `div.event_thumb` > `img img/event/eN.jpg`.
     - `div.event_details` (position absolute, top 0, right 0, width
       **275px**, bg **`rgba(0, 35, 71, 0.5)`**):
       `div.d-flex.mb-4` — `div.date` (`span` **15** + **Jun**) +
       `div.time-location`: `p` (lucide `Clock` + **12:00 AM - 12:30
       AM**), `p` (lucide `MapPin` + **Hilton Quebec**) + `p` blurb
       ("One make creepeth man for so bearing their firmament won't
       fowl meat over seas great…") + `a.primary-btn.rounded-0.mt-3`
       **View Details** (gold fill; NOTE `.rounded-0` — square button
       in this section). Also `a.event-link` (13px, uppercase,
       `#fdc632`) in the section header area.
  8. Testimonials `div.testimonial_area.section_gap` → `div.container` >
     `div.row.justify-content-center` > `div.col-lg-5` >
     `div.main_title`: `h2.mb-3` **"Client say about me"** + p blurb →
     `div.row` > `div.col-lg-12` > `div.owl-carousel.testi_slider`
     (six slides `div.testi_item`, padding **50px 55px**, box-shadow
     `0px 15px 30px 0px rgba(221, 221, 221, 0.3)`, margin 0 10px 80px):
     - `div.row` — `div.col-lg-4.col-md-6` > `img img/testimonials/
tN.jpg` (round-ish avatar) + `div.col-lg-8` > `div.testi_text`:
       `h4` name (**Elite Martin** / **Davil Saden**, alternating) +
       `p` quote ("Him, made can't called over won't there on divide
       there male fish beast own his day third seed sixth seas unto.
       Saw from…").
  9. Footer `footer.footer-area.section_gap` (bg **`#002347`**) →
     `div.container` > `div.row` of FIVE
     `div.single-footer-widget` (4 × `col-lg-2.col-md-6` + 1 ×
     `col-lg-4`; widget `h4` white, mb 35px; link color muted, hover
     white):
     - **Top Products** (col-lg-2): Managed Website · Manage
       Reputation · Power Tools · Marketing Service.
     - **Quick Links** (col-lg-2): Jobs · Brand Assets · Investor
       Relations · Terms of Service.
     - **Features** (col-lg-2): Jobs · Brand Assets · Investor
       Relations · Terms of Service.
     - **Resources** (col-lg-2): Guides · Research · Experts ·
       Agencies.
     - **Newsletter** (col-lg-4): `p` "You can trust us. we only send
       promo offers," + `div.form-wrap` > form (email input "Your
       Email Address" + `button.click-btn` **subscribe**).
     - `div.row.footer-bottom.d-flex.justify-content-between`:
       copyright line "Copyright ©2024 All rights reserved | This
       template is made with ❤ by Colorlib" (keep Colorlib credit per
       CC BY 3.0) + `div.footer-social` social icons.

- **Design tokens extracted from `css/style.css`:**
  - Primary navy **`#002347`** — headings (`h1–h6` color), nav links,
    hero `p` + `h2`, `.primary-btn2` fill (hero "learn more"), price
    badge text, `.events_area` bg, `.registration_area` bg,
    `.footer-area` bg, `.single_event .event_details` overlay
    `rgba(0, 35, 71, 0.5)`, `.single_feature:hover` shadow tint.
  - Gold **`#fdc632`** — `.primary-btn` fill (hero "see course",
    "Submit", events "View Details"), nav hover/active, `.single_course
.price` badge bg, `.event-link` color. Secondary golds **`#f8b600`**
    (darker) and **`#f4e700`** (lighter) appear in the stylesheet for
    accent/hover variants.
  - Section alt background **`#f9f9ff`** — `.single_feature` card bg,
    `.single_course .course_content` bg.
  - Clock tiles **`#334f6c`** — `.clockinner` bg (countdown blocks).
  - Body text **`#7b838a`** — `body` color (Roboto 400, 16px, line-height
    25px).
  - Minor accents found in the stylesheet: cyan/blue hues **`#4cd3e3`**,
    **`#38a4ff`**, **`#52c5fd`** and reds **`#f44a40`** / **`#f54940`**
    (used on secondary/hover/error elements, not on the home sections
    above).
  - Fonts: **"Roboto", sans-serif** — body + paragraphs (400; Google
    `Roboto:400,400i,500`); **"Rubik", sans-serif** — all headings +
    nav + buttons (500/600; Google `Rubik:500,600`). `@import` at the
    top of style.css.
  - Section titles `.main_title h2`: **36px**, weight **bold**, Rubik,
    `#002347`, line-height 30px, mb 15px (mobile 30px).
  - Buttons `.primary-btn`: bg `#fdc632`, color `#002347`, padding
    **0 48px**, line-height **50px**, radius **5px**, font 13px / 500 /
    uppercase; hover → bg `#002347` + color `#fdc632`. `.primary-btn2`:
    bg `#002347`, color `#fdc632`, line-height **48px**, radius 5px,
    border 1px transparent; hover → transparent bg + navy border/text.
    (Events "View Details" adds `.rounded-0` = square corners.)
  - Hero: **min-height 900px**, bg image (students photo) cover,
    `.banner_inner` absolute **top 40%** translateY(-50%); h2 **48px**
    500, p **20px** 500 `#002347`, both uppercase.
  - Course card: `.course_content` bg `#f9f9ff`, padding 30px 26px;
    price badge = 65px circle `#fdc632` / navy text / Rubik 500 20px,
    absolute `top: -34px; right: 15px`, radius 50%.
  - Countdown: `.clock_sec h1` 42px white (mobile 30px); `.clockinner`
    bg `#334f6c`, padding 35px 20px.
  - Events: section bg `#002347`, padding 130px 0 100px; detail panel
    absolute right, width 275px, bg `rgba(0,35,71,.5)`.
  - Testimonial item: padding 50px 55px, margin 0 10px 80px, box-shadow
    `0px 15px 30px 0px rgba(221, 221, 221, 0.3)`.
  - Footer: bg `#002347`; widget h4 white mb 35px; widget links muted →
    white on hover; `footer-bottom` centered copyright.
  - Header: `.header_area` absolute (z-99) over the hero with a
    transparent navbar; nav links 500 14px/80px Rubik `#002347`, hover/
    active `#fdc632`; mobile collapse = white stacked links + hamburger
    toggler; hidden search bar ("Search Here") toggled by the search
    icon.
  - Icons (flaticon / themify in source — swap to lucide-react):
    book-open (logo, gold), search (header), student / book /
    graduation-cap (feature cards), user + heart (course meta), clock +
    map-pin (event meta), menu (hamburger), close (search bar);
    socials (facebook, twitter, linkedin, pinterest) must be inline SVG
    (lucide-react removed brand glyphs).

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/quad-<n>/<w>/<h>`; course thumbs 300×200, trainer
  portraits 270×320, event thumbs 555×330, testimonial avatars 100×100,
  course author avatars 40×40); icons → lucide-react (brand socials →
  inline SVG); Roboto + Rubik via Google Fonts `<link>` in
  `index.html`; logo recreated as a text wordmark (navy "Quad" + gold
  `BookOpen` icon); hero background image → a light seeded picsum photo
  with a subtle white/soft overlay (or CSS light gradient) — never copy
  the asset; countdown → four static tiles (150/23/47/59) or a live
  ticking countdown from a fixed target; owl-carousel sliders (courses
  3 slides, testimonials 6 slides) → simple prev/next or auto-advance
  carousels (or horizontal scroll snap) with the same content; nav
  stays a single row of six links (no dropdowns on this template's
  home page).

Quad lives in `apps/quad` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header with logo, nav, search bar and mobile menu

The system SHALL render a header over the hero with a wordmark logo, a
centered six-link navigation menu, a search icon that toggles a search
input bar, and a hamburger menu on narrow viewports.

#### Scenario: Header content

- **GIVEN** the Quad page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the "Quad" wordmark with a gold
  book icon on the left
- **AND** nav links SHALL be shown centered: Home (active), About,
  Courses, Elements, Blog, Contact
- **AND** nav links SHALL be navy `#002347` and turn gold `#fdc632`
  on hover
- **AND** a search icon SHALL appear on the right

#### Scenario: Search bar toggle

- **GIVEN** the header is displayed
- **WHEN** the user presses the search icon
- **THEN** a search input bar (placeholder "Search Here") SHALL slide
  open
- **AND** pressing the close control SHALL hide it again

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a collapsible menu SHALL open with the same six nav links
- **AND** pressing the toggle again SHALL close it

### Requirement: Hero banner

The system SHALL render a full-height hero with a photo background, an
uppercase sub-headline, an uppercase headline, and two buttons (navy
"learn more" + gold "see course").

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the sub-headline "Best online education service In the
  world" SHALL be shown in uppercase 20px navy text
- **AND** the headline "One Step Ahead This Season" SHALL be shown in
  uppercase 48px navy text
- **AND** a navy-filled button "learn more" and a gold-filled button
  "see course" SHALL be shown side by side beneath the headline

### Requirement: Features section

The system SHALL render an "Awesome Feature" section with three cards,
each with an icon, a title and a description, on a light `#f9f9ff`
background.

#### Scenario: Feature cards

- **GIVEN** the features section is displayed
- **WHEN** the page loads
- **THEN** the section title "Awesome Feature" SHALL be shown with a
  paragraph blurb
- **AND** three cards SHALL be shown: Scholarship Facility, Sell
  Online Course, Global Certification
- **AND** each card SHALL show an icon, a 20px title and a description
  on a `#f9f9ff` card background

### Requirement: Popular Courses carousel

The system SHALL render an "Our Popular Courses" section with a
carousel of course cards, each with a thumb image, a circular gold
price badge, a category tag, a title, a paragraph, an author and
student/like counts.

#### Scenario: Course cards

- **GIVEN** the Popular Courses section is displayed
- **WHEN** the page loads
- **THEN** the section title "Our Popular Courses" SHALL be shown with
  a paragraph blurb
- **AND** three course slides SHALL be shown (e.g. Custom Product
  Design, Social Media Network, and a third design course)
- **AND** each card SHALL show a course image, a circular gold `$25`
  price badge (65px, navy text) overlapping the image corner, a
  "design" tag, a bold title, a paragraph, an author row ("Cameron")
  and count meta (user 25, heart 35)

#### Scenario: Carousel navigation

- **GIVEN** the course carousel is displayed
- **WHEN** the user navigates the carousel controls
- **THEN** the visible course slide SHALL change to the next/previous
  one

### Requirement: Registration section with countdown and form

The system SHALL render a navy registration section with a "Register
Now" heading, a four-tile countdown clock (days/hours/mins/secs), and a
"Courses for Free" registration form with name, phone and email inputs
and a gold Submit button.

#### Scenario: Registration content

- **GIVEN** the registration section is displayed
- **WHEN** the page loads
- **THEN** the heading "Register Now" (42px white) and a paragraph
  SHALL be shown on the left of a `#002347` background
- **AND** four countdown tiles SHALL be shown with white values (e.g.
  150 Days, 23 Hours, 47 Mins, 59 Secs) on `#334f6c` tile backgrounds
- **AND** the right side SHALL show "Courses for Free" with the form
  fields Your Name, Your Phone Number, Your Email Address and a gold
  "Submit" button

#### Scenario: Registration form validation

- **GIVEN** the registration form is displayed
- **WHEN** the user submits without a valid email address
- **THEN** a validation error SHALL be shown for the email field and
  no success message SHALL appear
- **AND** submitting all fields validly SHALL show a success state

### Requirement: Expert Trainers

The system SHALL render an "Our Expert Trainers" section with four
trainer cards, each with a portrait, a name, a designation, a blurb and
four social icon links.

#### Scenario: Trainer cards

- **GIVEN** the trainers section is displayed
- **WHEN** the page loads
- **THEN** the section title "Our Expert Trainers" SHALL be shown with
  a paragraph blurb
- **AND** four cards SHALL be shown with names Mated Nithan, David
  Cameron, Jain Redmel and Nathan Macken
- **AND** each card SHALL show a portrait image, the name, the
  designation "Sr. web designer", a blurb and four social icon links

### Requirement: Upcoming Events

The system SHALL render an "Upcoming Events" section on a navy
background with two event cards, each with a thumb image and an overlay
detail panel showing a date, time, location, description and a square
"View Details" button.

#### Scenario: Event cards

- **GIVEN** the events section is displayed
- **WHEN** the page loads
- **THEN** the section title "Upcoming Events" SHALL be shown in white
  on the `#002347` background
- **AND** two event cards SHALL be shown, each with an image and an
  overlay panel (semi-transparent navy `rgba(0,35,71,.5)`) showing a
  date (e.g. 15 Jun), a time (e.g. 12:00 AM - 12:30 AM), a location
  (e.g. Hilton Quebec), a description and a gold "View Details" button
  with square corners

### Requirement: Testimonials carousel

The system SHALL render a "Client say about me" section with a
carousel of testimonial items, each with an avatar, a name and a quote,
on a white card with a soft shadow.

#### Scenario: Testimonial items

- **GIVEN** the testimonials section is displayed
- **WHEN** the page loads
- **THEN** the section title "Client say about me" SHALL be shown with
  a paragraph blurb
- **AND** testimonial slides SHALL be shown (e.g. Elite Martin, Davil
  Saden), each with an avatar image, a name and a quote
- **AND** the carousel SHALL allow navigating between slides

### Requirement: Footer

The system SHALL render a navy footer with four link columns (Top
Products, Quick Links, Features, Resources), a Newsletter column with
an email form and subscribe button, and a bottom bar with the copyright
line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** columns titled Top Products (Managed Website, Manage
  Reputation, Power Tools, Marketing Service), Quick Links (Jobs,
  Brand Assets, Investor Relations, Terms of Service), Features and
  Resources SHALL be shown with white headings
- **AND** a Newsletter column SHALL show the text "You can trust us.
  we only send promo offers," with an email input and a "subscribe"
  button
- **AND** a bottom bar SHALL show the copyright line with a credit to
  the template source

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Quad app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, features, popular
  courses, registration, trainers, events, testimonials and footer in
  the correct order
- **AND** the document title SHALL be "Quad — Education Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/quad`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/quad`)
- [ ] Section order matches the reference 1:1 (header → hero → features → popular courses → registration → trainers → events → testimonials → footer)
- [ ] Design tokens from the reference used in `@theme` (navy #002347, gold #fdc632, alt golds #f8b600/#f4e700, alt bg #f9f9ff, clock tile #334f6c, body text #7b838a; Roboto + Rubik fonts)
- [ ] Header: absolute over hero, "Quad" wordmark + gold book icon, centered nav (Home active) navy → gold hover, search icon toggling the "Search Here" bar, mobile hamburger
- [ ] Hero: min-h ~900px photo bg cover, centered uppercase sub-headline (20px navy) + headline "One Step Ahead This Season" (48px), navy "learn more" (.primary-btn2) + gold "see course" (.primary-btn) buttons (5px radius, 13px uppercase, 48–50px line-height)
- [ ] Features: "Awesome Feature" title (36px bold Rubik), 3 cards (bg #f9f9ff, padding 40px 36px, icon + h4 + p; hover shadow rgba(0,35,71,.1))
- [ ] Popular Courses: owl-style 3-slide carousel, cards with thumb, 65px circular gold $25 price badge (navy text, top -34px right 15px), "design" tag, title, blurb, author row + user 25 / heart 35 meta
- [ ] Registration: navy bg, "Register Now" 42px white + blurb, 4 countdown tiles (#334f6c, 35px 20px padding) 150/23/47/59, "Courses for Free" form (name/phone/email + gold Submit) with validation + success state
- [ ] Trainers: 4 cards (portrait, name, "Sr. web designer", blurb, 4 social icons)
- [ ] Events: navy bg (130px 0 100px), 2 cards with image + right overlay panel (rgba(0,35,71,.5), 275px) — date/time/location/desc + square (rounded-0) gold "View Details"
- [ ] Testimonials: "Client say about me" carousel, cards padding 50px 55px with soft shadow (0 15px 30px rgba(221,221,221,.3)), avatar + name + quote
- [ ] Footer: navy bg, Top Products / Quick Links / Features / Resources columns + Newsletter (email + subscribe) + bottom copyright bar with Colorlib credit
- [ ] Placeholder images are seeded picsum (no copied assets); icons from lucide-react + inline SVG socials; Roboto + Rubik via Google Fonts link; logo as text wordmark
- [ ] README Templates status + TEMPLATES.md Edustage lines (383 AND 1635 AND 2043) marked `[x]` after merge
