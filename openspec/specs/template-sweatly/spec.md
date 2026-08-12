# Template: Sweatly (Fitness / Gym Template)

## Purpose

Sweatly is a single-page gym / fitness-club website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Workout" website template design
(source: https://colorlib.com/wp/template/workout/), built under a DIFFERENT
name (Sweatly — sweat + fitness club) per the monorepo naming mandate, with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Workout" — free Bootstrap gym / fitness club
  website template. TEMPLATES.md has FOUR copies of this item (lines 537,
  1236, 1886, and 2372 — mark EVERY copy `[x]` when done).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/workout/`
  (HTTP 200, 71.5 KB HTML). Master stylesheet `css/style.css` (~19 KB,
  fully extracted for tokens); libs: bootstrap, owl.carousel (feature
  carousel), jquery.mb.YTPlayer (hero background video), AOS (scroll
  animations), bootstrap-datepicker, countdown. Google Font **Muli**
  (300/400/700/900). Cross-checked against the TEMPLATES.md screenshot
  (`workout-free-template.jpg`, 1200×946, viewed in browser) — all match.
  The demo brands itself "Workout"; the recreation uses the NEW name
  **Sweatly** (brand raspberry #c83660).
- **Visual design (from DOM + CSS tokens + screenshot):** dark full-height
  hero — background photo of a muscular man curling a dumbbell in a gym
  (blurred racks behind) with a dark overlay (rgba(0,0,0,0.5)) and the demo
  plays a muted YouTube workout clip behind the hero via YTPlayer; white
  absolute navbar over it (logo "Workout." — white word + brand-colored
  dot — left, 6 anchor links right, hamburger on mobile, off-canvas mobile
  menu); centered hero: huge white 900-weight h1 "Fitness Help Me Feel
  Better", 1.4rem white lead, outline-white "Get Started" button. Below:
  white feature-carousel section ("Stay Healthy" grey subheading +
  brand-pink "Setup Your Body With Workout" 2.5rem 900 heading, owl
  carousel of 6 icon feature cards), then a 500px parallax photo band with
  dark overlay and white heading "Get The Result You Want", then "Our
  Classes" (2-col grid of 10 horizontal class cards: 100px rounded
  thumbnail + title + "By <trainer>, 30 minutes"), another parallax band
  "Every Step Counts", "Schedule" section (day tabs S M T W T F S in
  grey pills → active brand-pink; each day = 2-col grid of class cards
  with a time span "Sunday 7:30am - 9:00am"), parallax band "Your Fitness
  Partner Where Ever You Are", "Our Trainers" (4 round-avatar person
  cards), "Services" (3-col grid of 12 icon feature cards), light-grey
  "Contact Us" section (name/last/subject/email/message form, block
  brand-pink submit), and a dark footer (About / Links / Subscribe
  newsletter + copyright). Demo copy is placeholder lorem — paraphrase
  into gym/class copy.
- **Section order (1:1, from live demo DOM):**
  1. Off-canvas mobile menu (`div.site-mobile-menu site-navbar-target`:
     header with close icon + body).
  2. Header (`header.site-navbar py-4 js-sticky-header`): container-fluid
     flex — `div.site-logo` ("Workout" + `<span>.` brand-pink) left;
     `nav.site-navigation` right with `ul.site-menu.main-menu` links Home
     (#home-section), Classes (#classes-section), Schedule
     (#schedule-section), Trainer (#trainer-section), Services
     (#services-section), Contact (#contact-section) — white, padding
     5px 20px, active = brand-pink; mobile hamburger `a.site-menu-toggle`
     (d-lg-none). Navbar is absolute over the hero; becomes sticky.
  3. Hero (`div.intro-section#home-section`, style background-color #ccc;
     100vh / min-height 900px; `.player` YT background video with
     `data-property` containment #home-section + `:after` overlay
     rgba(0,0,0,0.5); z-1 overlay, container z-10): centered `h1.mb-3`
     "Fitness Help Me Feel Better" (4rem / 2rem mobile, weight 900,
     white), `p.lead.mx-auto.desc.mb-5` lorem (1.4rem, white, max-width
     700px), `a.btn.btn-outline-white.py-3.px-5` "Get Started".
  4. Features carousel (`div.site-section`): centered section-heading
     (col-md-8): `span.subheading` "Stay Healthy" (color #ababab,
     1.2rem) + `h2.heading.mb-3` "Setup Your Body With Workout"
     (#c83660, 2.5rem, 900) + lorem p; then `div.owl-carousel
nonloop-block-14.block-14` with 6 `div.slide` → `div.ftco-feature-1`
     (text-align center, bg white, hover shadow `0 0 20px -5px
rgba(0,0,0,.1)`; `div.icon` font-size 70px color #c83660;
     `div.ftco-feature-1-text` padding 30px; `h2` 20px bold; `p` color
     #989898). Demo icons are font glyphs; recreate with lucide-react.
  5. Parallax band 1 (`div.bgimg` style bg `images/bg_1.jpg`, height
     500px, `:before` overlay rgba(0,0,0,0.4), container z-2, centered):
     `h2` "Get The Result You Want" (3rem / 2rem mobile, white, bold) +
     `p.lead` lorem (white).
  6. Classes (`div.site-section#classes-section`): section-heading
     "Fitness Class" / "Our Classes" + `div.row` of 2 `div.col-lg-6`
     columns, each 5 × `div.class-item.d-flex.align-items-center`
     (border-radius 4px, box-shadow `0 5px 20px 0 rgba(0,0,0,0.1)`,
     overflow hidden, margin-bottom 30px): `a.class-item-thumbnail`
     (flex 0 0 120px) → `img` (max-width 100px, border-radius 4px) +
     `div.class-item-text`: `h2` 18px → `a` "Fitness Class Name #N"
     (color #000) + `span` "By Justin Daniel" (color #aeaeae) + `span`
     "30 minutes". Classes use images img_1..4.jpg rotating.
  7. Parallax band 2 (`div.bgimg`, `images/bg_2.jpg`): `h2` "Every Step
     Counts" + lorem lead.
  8. Schedule (`div.site-section#schedule-section`): section-heading
     "Fitness Sched" / "Schedule" + `ul.nav.days.d-flex` (7 `li.nav-item`
     width 14.25% → `a.nav-link` single letters S M T W T F S; bg #eee,
     padding 10px; hover/active bg #c83660 white) + `div.tab-content`:
     7 `div.tab-pane` (one per day, active = Sunday) each with a `div.row`
     of 2 × `div.col-lg-6` columns of 5 `div.class-item` — same card but
     with a leading `span` "Sunday 7:30am - 9:00am" (time span, color
     #aeaeae) above the h2.
  9. Parallax band 3 (`div.bgimg`, `images/bg_3.jpg`): `h2` "Your Fitness
     Partner Where Ever You Are" + lorem lead.
  10. Trainers (`div.site-section#trainer-section`): section-heading
      "Trainer" / "Our Trainers" + `div.row` of 4 `div.col-lg-3.mb-4`
      `div.person` (text-center): `img` (max-width 100px, border-radius
      50%, margin-bottom 30px; person_1..4.jpg) + h3 name ("Justin
      Daniel", "Matthew Davidson", ...) + `p.position` "Trainer" (color
      #ccc) + lorem bio.
  11. Services (`div.site-section#services-section`): section-heading
      "Fitness Services" / "Services" + `div.row` of 12 `div.col-lg-4.mb-4`
      `div.ftco-feature-1` (icon 70px brand-pink + h2 + p #989898 — same
      card as the features carousel, static grid this time).
  12. Contact (`div.site-section.bg-light.contact-wrap#contact-section`):
      section-heading "Get In Touch" / "Contact Us" + form (`div.row
justify-content-center`, col-md-7): `.form-group.row` pairs —
      First name (col-md-6) + Last name (col-md-6), Subject (col-md-12),
      Email (col-md-12), textarea "Write your message here." (col-md-12),
      `input[type=submit].btn.btn-primary.py-3.px-5.btn-block` "Send
      Message". Form controls: height 50px, border-radius 0, border-width
      2px, focus border #c83660.
  13. Footer (`footer.footer-section.bg-dark`, padding 7em 0 / 12rem for
      the inner one): `div.row` with 3 cols — col-md-4 "About Workout"
      (h3 white uppercase .9rem 900 letter-spacing .1rem + lorem p),
      col-md-3.ml-auto "Links" (ul.footer-links: Home, Classes, Schedule,
      Trainer), col-md-4 "Subscribe" (h3 + lorem + newsletter form: email
      `input.form-control` placeholder "Email" + `input[type=submit]
.btn.btn-primary.rounded-0` "Subscribe") — plus `div.row.pt-5.mt-5
.text-center` copyright: "© All rights reserved | This template is
      made with by Colorlib" (the Colorlib credit is REPLACED by the
      mandated Component Dock link per repo rules).
- **Design tokens extracted from `css/style.css` + DOM:**
  - Brand color: **#c83660** (raspberry/pink-magenta; ~17 uses — active
    nav, section headings, feature icons, day-tab active, button primary,
    form focus border, logo dot).
  - Supporting: **#8bc34a** (light green — `ul-check.success` checkmarks;
    not prominent in the demo), **#000** (headings), **#25262a** (dark
    text), **#989898** (feature-card body text), **#aeaeae** (class-card
    meta text), **#ababab** (subheading), **#ccc** (trainer position /
    hero fallback bg), **#eee** (day-tab bg), **#f4f5f9** (contact section
    bg-light), **#fff** (sections/hero text), **#343a40/#212529** (bootstrap
    text darks).
  - Font: **Muli** (300/400/700/900) via Google Fonts
    (`https://fonts.googleapis.com/css?family=Muli:300,400,700,900`).
    Headings h1–h3 use Muli, color #000; hero h1 white.
  - Buttons: `.btn` — text-transform uppercase, font-size 12px, weight
    900, border-width 2px; `.btn-primary` → bg #c83660 white text;
    `.btn-outline-white` → transparent, 2px white border, white text,
    hover fills white with black text. Padding via utilities (hero
    `py-3 px-5`, submit `py-3 px-5 btn-block`, subscribe `rounded-0`).
    Square-ish (no radius on form controls; buttons default).
  - Section rhythm: `.site-section` padding 2.5em 0 (5em desktop);
    `.bgimg` bands 500px tall with rgba(0,0,0,0.4) overlay;
    `.section-heading .heading` 2.5rem/900 #c83660, `.subheading` 1.2rem
    #ababab.
  - Hero: 100vh / min-height 900px, YT video bg + rgba(0,0,0,0.5)
    overlay, centered text.
  - Day tabs: `.days li a` bg #eee padding 10px, width 14.25% each,
    hover/active bg #c83660 white.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sweatly-<n>/<w>/<h>`); the hero background video is
  NOT copied — use a seeded picsum gym/hero image with the dark overlay
  instead (same look, no asset); icons → lucide-react (dumbbell/activity
  logo mark, feature icons, hamburger/close, social); Muli via Google
  Fonts `<link>`; the 6-slide owl feature carousel and 7-day schedule tabs
  implemented with no extra dependencies (simple index/carousel state +
  tab switching); form submit may swap to a success message per repo
  conventions.

Sweatly lives in `apps/sweatly` and uses shared components from
`packages/ui` (Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Sticky header with mobile menu

The system SHALL render a navbar over the hero with the site name "Sweatly"
(white wordmark + brand-pink dot), anchor links, and a hamburger trigger on
small screens that opens an off-canvas mobile menu with a close control.

#### Scenario: Header content

- **GIVEN** the Sweatly page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Sweatly" with a brand-pink
  accent on the left
- **AND** the header SHALL show links Home, Classes, Schedule, Trainer,
  Services, and Contact
- **AND** on small screens the header SHALL show a hamburger trigger button
  (aria-label "Open menu")

#### Scenario: Open and close the mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user presses the hamburger trigger
- **THEN** an off-canvas mobile menu SHALL appear with the same anchor links
- **WHEN** the user presses the close control or the Escape key
- **THEN** the mobile menu SHALL close

### Requirement: Hero section

The system SHALL render a full-height hero with a dark photo background and
overlay, a large white headline, a lead paragraph, and an outline CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "Fitness Help Me Feel Better" in large
  white 900-weight type
- **AND** it SHALL show a short lead paragraph
- **AND** it SHALL show a "Get Started" outline button (transparent with
  white border, fills white with dark text on hover)

### Requirement: Features carousel section

The system SHALL render a section titled "Setup Your Body With Workout" with
a grey subheading "Stay Healthy" and a carousel of six icon feature cards.

#### Scenario: Features section

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the subheading "Stay Healthy" in grey
- **AND** it SHALL show the heading "Setup Your Body With Workout" in the
  brand color
- **AND** it SHALL show 6 feature cards, each with an icon, a title, and a
  short blurb
- **AND** the cards SHALL be paged/navigable as a carousel (one or several
  visible at a time with a control to move through them)

### Requirement: Parallax banner (Get The Result You Want)

The system SHALL render a full-width photo band with a dark overlay, a white
heading "Get The Result You Want", and a lead line.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the first photo band is displayed
- **THEN** it SHALL show the heading "Get The Result You Want" in white
- **AND** it SHALL show a short lead line in white

### Requirement: Classes section

The system SHALL render a "Our Classes" section with ten horizontal class
cards in a two-column grid, each with a thumbnail image, a class name, a
trainer, and a duration.

#### Scenario: Class cards

- **GIVEN** the page is rendered
- **WHEN** the classes section is displayed
- **THEN** it SHALL show the subheading "Fitness Class" and the heading "Our
  Classes"
- **AND** it SHALL show 10 class cards in a 2-column grid
- **AND** each card SHALL show a thumbnail image, a class name (e.g.
  "Fitness Class Name #1"), a trainer ("By ..."), and a duration ("30
  minutes")

### Requirement: Parallax banner (Every Step Counts)

The system SHALL render a second photo band with the white heading "Every
Step Counts" and a lead line.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the second photo band is displayed
- **THEN** it SHALL show the heading "Every Step Counts" in white
- **AND** it SHALL show a short lead line in white

### Requirement: Schedule section with day tabs

The system SHALL render a "Schedule" section with seven day tabs
(S M T W T F S) and a per-day panel of timed class cards.

#### Scenario: Schedule tabs

- **GIVEN** the page is rendered
- **WHEN** the schedule section is displayed
- **THEN** it SHALL show the subheading "Fitness Sched" and the heading
  "Schedule"
- **AND** it SHALL show seven day tabs lettered S, M, T, W, T, F, S
- **AND** the active tab SHALL be highlighted in the brand color

#### Scenario: Day panel content

- **GIVEN** a day tab is active
- **WHEN** the user switches to another day tab
- **THEN** the panel SHALL show that day's class cards
- **AND** each card SHALL show a time span (e.g. "Sunday 7:30am - 9:00am"),
  a class name, a trainer, and a duration

### Requirement: Parallax banner (Your Fitness Partner Where Ever You Are)

The system SHALL render a third photo band with the white heading "Your
Fitness Partner Where Ever You Are" and a lead line.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the third photo band is displayed
- **THEN** it SHALL show the heading "Your Fitness Partner Where Ever You
  Are" in white
- **AND** it SHALL show a short lead line in white

### Requirement: Trainers section

The system SHALL render an "Our Trainers" section with four round-avatar
person cards, each with a name, a "Trainer" position line, and a bio.

#### Scenario: Trainer cards

- **GIVEN** the page is rendered
- **WHEN** the trainers section is displayed
- **THEN** it SHALL show the subheading "Trainer" and the heading "Our
  Trainers"
- **AND** it SHALL show 4 trainer cards
- **AND** each card SHALL show a circular avatar image, a name, the
  position "Trainer", and a short bio

### Requirement: Services section

The system SHALL render a "Services" section with twelve icon feature cards
in a three-column grid.

#### Scenario: Services grid

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the subheading "Fitness Services" and the heading
  "Services"
- **AND** it SHALL show 12 service cards in a 3-column grid
- **AND** each card SHALL show an icon, a title, and a short blurb

### Requirement: Contact section with form

The system SHALL render a "Contact Us" section on a light background with a
contact form (first name, last name, subject, email, message) and a
"Send Message" submit button.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the subheading "Get In Touch" and the heading
  "Contact Us"
- **AND** it SHALL show labeled inputs for First name, Last name, Subject,
  Email, and a message textarea
- **AND** it SHALL show a "Send Message" submit button in the brand color

### Requirement: Footer

The system SHALL render a dark footer with an about column, a links column,
a newsletter subscribe form, and a copyright line linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Sweatly" column with a short paragraph
- **AND** it SHALL show a "Links" column with Home, Classes, Schedule, and
  Trainer links
- **AND** it SHALL show a "Subscribe" column with an email input and a
  "Subscribe" button
- **AND** it SHALL show a copyright line with a link to
  https://www.componentdock.com/ ("Component Dock")

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Sweatly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Sweatly — Fitness Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh sweatly` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (header, hero, features carousel,
      banner 1, classes, banner 2, schedule, banner 3, trainers, services,
      contact, footer)
- [ ] Design tokens in `@theme`: brand raspberry `#c83660` (+ #8bc34a,
      #989898, #aeaeae, #ababab, #eee, #f4f5f9, #25262a)
- [ ] Font: Muli (300/400/700/900) via Google Fonts
- [ ] Buttons: uppercase 12px/900, 2px border; primary fills #c83660;
      outline-white transparent with white border
- [ ] Header: absolute over hero, logo + 6 anchor links + hamburger →
      off-canvas mobile menu (close control, Escape-to-close)
- [ ] Hero: full-height, dark photo + overlay, 4rem white headline,
      lead, outline "Get Started" CTA
- [ ] Features carousel: 6 icon cards, navigable (no owl dependency)
- [ ] Classes: 10 horizontal cards in 2-col grid (thumbnail + title +
      trainer + duration)
- [ ] Schedule: 7 day tabs (S M T W T F S, active = brand), per-day panels
      with timed class cards
- [ ] Trainers: 4 round-avatar cards (name + "Trainer" + bio)
- [ ] Services: 12 icon cards in 3-col grid
- [ ] Contact: light bg, 4 inputs + textarea + "Send Message" block button
- [ ] Footer: dark, About / Links / Subscribe + Component Dock link
- [ ] Placeholder images seeded (`picsum.photos/seed/sweatly-<n>/<w>/<h>`);
      no copied assets (hero video replaced with seeded photo + overlay)
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` on ALL FOUR
      lines 537, 1236, 1886, 2372 + surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
