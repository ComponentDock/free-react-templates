# Template: Pumply (Gym / Fitness Template)

## Purpose

Pumply is a single-page dark gym / fitness website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Gymer" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Gymer" — free responsive Bootstrap 4 gym / fitness
  website template (source: https://colorlib.com/wp/template/gymer/).
  TEMPLATES.md has THREE copies of this item (line 407 in the Bootstrap
  category, line 1853 in the Health Fitness category, line 2325 in the
  One Page category — mark ALL THREE `[x]` when done). All three rows use the
  correct screenshot (`gymer-free-template.jpg`).
- **Demo DOM analyzed:** REACHABLE. `https://preview.colorlib.com/theme/gymer/`
  returns HTTP 200 (curl verified 2026-08-13). Page title: "Gymer — Website
  by Colorlib". The rendered page is the full template: absolute transparent
  navbar over a full-viewport hero (YouTube video background), white-on-black
  counters row, "Step Up Your Fitness" split section, Classes photo carousel,
  Schedule day-tabs + table, Trainers, Our Featured Services carousel of green
  cards, dark Contact Us form, footer. Stylesheets analyzed:
  `css/bootstrap.min.css` (custom-compiled — carries `--primary`/`--secondary`
  tokens and `.btn-primary`) + `css/style.css` (component styling).
- **Screenshot:** `gymer-free-template.jpg` — consistent with the live preview
  (dark/black page, bright green `#48d494` accents, white "Welcome To Gymer"
  headline over a dark gym video/photo, green-bordered CONTACT button in the
  navbar). The screenshot was fetched as AVIF and matches the live DOM design.
- **Visual design (from live preview + browser vision):** modern, sleek,
  minimalist **dark** aesthetic — the whole page sits on a black `#000` body.
  Neon-green `#48d494` is the single accent: section titles, navbar active
  links, the bordered uppercase CONTACT pill, buttons, counter icons, tab
  pills, carousel dots, trainer/photo offset shadows, the footer Subscribe
  button. Everything else is white text on black, with `#121212` for the
  Contact section and `#222` as the hero fallback behind the video. Buttons
  are square-ish (Bootstrap 4px radius), NOT pills; the `btn-primary` text is
  DARK `#212529` on green. Headlines are huge and heavy: hero h1 at 7rem/900,
  section titles at 3rem/900 in green. The demo brands itself "Gymer";
  recreation uses the NEW name **Pumply**.

- **Structure (1:1, section order — from the live DOM):**
  1. Navbar (`header.site-navbar py-4 js-sticky-header site-navbar-target`,
     `position: absolute; width: 100%` over the hero, z-index 1999): LEFT
     white 900-weight wordmark **"Gymer"** (recreated as "Pumply", 1.3rem);
     CENTER/right nav links (white, padding 5px 20px): **Home (anchor
     #home-section) / Classes (#classes-section) / Schedule
     (#schedule-section) / Trainer (#trainer-section) / Services
     (#services-section)**; separate right nav with the **CONTACT** CTA
     (`li.cta a.nav-link > span.rounded.border.border-primary` — uppercase
     0.8rem/700, green `#48d494` border + text, padding 10px 20px; hover:
     green bg + white text) linking `#contact-section`; mobile hamburger
     toggle (`d-lg-none`). Sticky behavior: on scroll the navbar gets a white
     background + shadow, logo/links turn black, link hover and the active
     underline become green (`#48d494`).
  2. Hero (`div.intro-section#home-section`, inline `background-color: #ccc`,
     `:before` pseudo paints `#222` cover) — `height: 100vh; min-height:
900px`. A full-bleed YouTube video background (`a#bgndVideo.player`,
     videoURL `http://youtu.be/7lutvYTZk8E`, muted autoplay, containment
     `#home-section`) — the dark video/photo fills the section. Centered
     content (`col-lg-8 mx-auto text-center`): white h1 **"Welcome To Gymer"**
     at 7rem/900 (recreated as "Welcome To Pumply"). No buttons, no caption.
  3. Counters (`div.site-section.section-1`) — 4 `col-lg-3` `counter d-flex
align-items-start` blocks (green flaticon icon at 3rem in `.icon-wrap`,
     margin-right 1.5rem; white strong 2.5rem/700 + white span 1rem label in
     `.counter-text`):
     - **2,260 Members** (flaticon-muscle)
     - **210 Daily Visitors** (flaticon-stationary-bike)
     - **887 Health Program** (flaticon-banana)
     - **1,920 Heart Beat** (flaticon-heart)
  4. "Step Up Your Fitness" (same `section-1`, after the counters row) —
     split row: LEFT `col-lg-5 mr-auto mb-5 align-self-center`: green
     `h2.section-title` **"Step Up Your Fitness"** (3rem/900, max-width
     450px), lorem paragraph, **"Get In Touch"** `btn btn-primary py-3 px-4`
     linking `#contact-section`; RIGHT `col-lg-6`: `div.image-absolute-box`
     with a photo (`img.img-fluid.img-shadow` — green offset shadow
     `10px 10px 0 0 #48d494`).
  5. Classes (`div.site-section.section-2#classes-section`) — `col-lg-6`
     header: green `h2.section-title` **"Classes"** + lorem paragraph; then an
     owl carousel (`nonloop-block-13`, nav hidden, dots below) of FIVE
     `a.work-thumb` links (photo + absolutely-positioned `work-text` overlay
     that fades in on hover with a green `rgba(72,212,148,0.8)` screen and
     scale(1.07)): h3 **"Classes fitness name here"** + `span.category`
     tag — categories in order: **Fitness, Cardio Vascular, Lose Weight,
     Cardio Vascular, Fitness**.
  6. Schedule (`div.site-section.section-2#schedule-section`) — `col-lg-6`
     header: green `h2.section-title` **"Schedule"** + lorem paragraph; day
     tabs (`ul.nav.nav-tabs.tab-list-custom` centered, bottom border
     1px `#48d494`; active tab = green pill, white text, radius 4px): tabs in
     order **Monday (active), Tuesday, Wednesday, Thursday, Friday, Sunday**
     (NOTE: Sunday, not Saturday). Each tab panel holds the SAME
     `table.table-bordered.table-custom.table-striped` (bordered `#dee2e6`,
     striped `rgba(0,0,0,0.05)`, white text, 20px row padding, NO thead) with
     five rows — columns: class / time / trainer / **Join Now** link (green,
     anchor to `#contact-section`):
     - Gym — 8:00am - 10:00am — John Doe
     - Meditation — 10:00am - 10:30am — James Holmes
     - Weight Lifting — 1:00pm - 2:30pm — Ben Smith
     - Crossfit — 3:00pm - 3:45pm — Craig Peters
     - Aerobics — 5:00pm - 5:30pm — Paul Green
  7. Trainers (`div.site-section#trainer-section`) — `col-lg-6` header: green
     `h2.section-title` **"Trainers"** + lorem paragraph; `row.large-gutters`
     of THREE `col-md-6.col-lg-4.person` cards (middle card has `mt-5` offset
     on mobile): photo (`img.img-fluid mb-5` with green offset shadow
     `10px 10px 0 0 #48d494`), h3 name, `p.mb-4.opacity-7` subtitle
     **"Aerobatics Trainer"**, lorem paragraph. Names: **James Holmes, Kelly
     Green, Ben Smith**.
  8. Our Featured Services (`div.site-section#services-section`) — `col-lg-6`
     header: green `h2.section-title` **"Our Featured Services"** + lorem
     paragraph; owl carousel (`nonloop-block-14`, dots below) of SIX
     `div.service` cards — green `#48d494` background, padding 4rem (2rem
     mobile): white flaticon icon (`display-3 text-white mb-4`), white
     `h3` (1.5rem/700), `p` at `rgba(255,255,255,0.8)` — titles in order:
     **Weight Lifting, Meditation, Crossfit, Aerobics, Gym, Circling**.
  9. Contact Us (`div.site-section.bg-dark#contact-section` — `.bg-dark`
     overridden to **`#121212`** in style.css) — centered `col-md-7`: green
     `h2.section-title.mb-3` **"Contact Us"** + paragraph; `form` (data-aos
     fade) with: row of **First name** + **Last name** text inputs, **Subject**
     input, **Email** input, **"Write your message here."** textarea
     (10 rows), and **"Send Message"** `btn btn-primary py-3 px-5 btn-block`
     submit.
  10. Footer (`footer.footer-section`, padding 7em 0) — 3 columns: `col-md-4`
      **About Gymer** h3 (white, uppercase 0.9rem, letter-spacing .1rem, 900)
      - lorem paragraph; `col-md-3.ml-auto` **Links** h3 + `ul.list-unstyled
.footer-links` (Home, Meditation, Gym, Aerobatics); `col-md-4`
        **Subscribe** h3 + paragraph + inline form (`d-flex`): text input
        (`form-control rounded-0`) + **Subscribe** submit (`btn btn-primary
rounded-0`). Bottom `row.pt-5.mt-5.text-center` copyright bar:
        "Copyright © <year> All rights reserved | This template is made with ♥
        by Colorlib" — recreation replaces the ColorLib credit with the
        mandatory **Component Dock** footer link
        (https://www.componentdock.com/) per repo conventions, and the "About
        Gymer" heading becomes "About Pumply".

- **Design tokens (extracted from `css/bootstrap.min.css` + `css/style.css`):**
  - Brand green **`#48d494`** (`--primary`) — section titles, navbar active
    link, CTA border/text, btn-primary bg/border, counter icons, tab active
    pill + underline, carousel dot active, work-thumb hover overlay
    (`rgba(72,212,148,0.8)`), trainer/photo offset shadows, footer Subscribe
    button.
  - Button text **`#212529`** (DARK on green) — `btn-primary` color; hover:
    bg `#2fc781`, text white; focus ring `rgba(72,212,148,0.5)`.
  - Page background **`#000`** (body) — the entire page is dark.
  - Contact section background **`#121212`** (`.bg-dark` override).
  - Hero fallback **`#222`** (`.intro-section:before`) behind the video.
  - Counter numbers white 2.5rem/700; labels white 1rem; icons green 3rem.
  - Section titles — 3rem (1.5rem ≤992px), `#48d494`, weight 900, max-width
    450px, margin-bottom 1.8rem.
  - Hero h1 — 7rem, weight 900, white, centered.
  - Font — **Muli** (weights 300/400/700/900) — Google Fonts `<link>` in
    `index.html` (`Muli:300,400,700,900`).
  - Buttons — Bootstrap 4px/0.25rem radius (square-ish, NO pills); large CTAs
    `py-3 px-4` (Get In Touch) / `py-3 px-5 btn-block` (Send Message);
    rounded-0 for the footer Subscribe row; CONTACT is an outlined variant
    (green border + green text, hover fills green with white text).
  - Offset shadows — `box-shadow: 10px 10px 0 0 #48d494` (`.img-shadow`,
    `.person img`).
  - Carousel dots — 10px circles `#e6e6e6`, active `#48d494`, centered,
    margin-top 30px; owl nav hidden.
  - Tabs — `border-bottom: 1px solid #48d494`; `.nav-link` radius 4px; active
    = `#48d494` bg + white text.
  - Table — `table-bordered` (`#dee2e6` 1px), `table-striped`
    (`rgba(0,0,0,0.05)` odd rows), white text (`table-custom`), row padding
    20px.
  - Service cards — `#48d494` bg, padding 4rem (2rem mobile), white icon +
    h3, paragraph `rgba(255,255,255,0.8)`.
  - Footer — h3 uppercase 0.9rem / letter-spacing .1rem / white / 900; links
    list spacing 10px.
  - Section rhythm — `.site-section` padding 5em 0 (4em ≤992px); headers in a
    `col-lg-6` block (title + paragraph), content full-width below.
  - Navbar — absolute over hero; logo 1.3rem/900 white; links white, padding
    5px 20px, hover white; sticky state (`.is-sticky`): white bg + shadow
    `4px 0 20px -5px rgba(0,0,0,0.2)`, logo/links black, hover `#48d494`.

- **Recreation decisions:** the hero's YouTube background video → a static
  dark full-bleed photo (picsum placeholder, `pumply-hero` seed) under the
  `#222` fallback treatment with a subtle dark overlay (no video in the
  recreation; the `:before` `#222` + photo keeps the same mood); photos →
  picsum placeholders (counters need NO images — flaticon icons → lucide-react
  equivalents: Dumbbell/HeartPulse/Apple/Activity etc.); icons → lucide-react
  (Dumbbell, HeartPulse, Bike, Apple, Scale, Waves for Circling); fonts via
  Google Fonts `<link>` (Muli) in `index.html`; logo recreated as a text
  wordmark "Pumply"; schedule day tabs keep the same six days with the same
  five class rows per day; the footer ColorLib credit is replaced by the
  mandatory Component Dock link.

Pumply lives in `apps/pumply` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Transparent navbar with wordmark, links, and outlined CTA

The system SHALL render an absolute-positioned transparent navbar over the
hero with a white wordmark, five white anchor links, a green-outlined
uppercase CONTACT button, and a mobile hamburger toggle; on scroll it SHALL
become a white sticky bar with black links.

#### Scenario: Navbar layout

- **GIVEN** the Pumply page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the white wordmark "Pumply" on the left
- **AND** the links Home, Classes, Schedule, Trainer, and Services SHALL be
  shown in white on the right
- **AND** an uppercase CONTACT button with a green `#48d494` border and green
  text SHALL be shown next to the links

#### Scenario: Sticky navbar

- **GIVEN** the user scrolls the page
- **WHEN** the navbar becomes sticky
- **THEN** the navbar SHALL get a white background with a shadow
- **AND** the wordmark and links SHALL turn black with a green hover state

#### Scenario: Mobile navbar

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the page loads
- **THEN** the nav links SHALL collapse behind a hamburger toggle that opens
  the same five links plus CONTACT

### Requirement: Full-viewport hero with dark background and headline

The system SHALL render a 100vh (min-height 900px) hero with a dark `#222`
photo/video-style background and a single centered white headline.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the hero SHALL fill the viewport (100vh, min-height 900px)
- **AND** the centered white headline "Welcome To Pumply" SHALL be shown at
  display size (7rem desktop, weight 900)
- **AND** the background SHALL be a dark photo treatment over `#222`

### Requirement: Counters row with green icons and white numbers

The system SHALL render four counter blocks, each with a green icon, a white
large number, and a white label.

#### Scenario: Counter blocks

- **GIVEN** the counters section is displayed
- **WHEN** the page loads
- **THEN** four blocks SHALL be shown: 2,260 Members, 210 Daily Visitors, 887
  Health Program, and 1,920 Heart Beat
- **AND** each block SHALL show a green `#48d494` icon and the white number /
  label pair
- **AND** on a narrow viewport the blocks SHALL stack

### Requirement: Step Up Your Fitness split section

The system SHALL render a split section with a green section title, copy, and
a "Get In Touch" button on the left and a green-shadowed photo on the right.

#### Scenario: Split layout

- **GIVEN** the Step Up Your Fitness section is displayed
- **WHEN** the page loads
- **THEN** the green `#48d494` heading "Step Up Your Fitness" SHALL be shown
  with a paragraph and a green "Get In Touch" button linking to the contact
  section
- **AND** a photo with a `10px 10px 0 0 #48d494` offset shadow SHALL be shown
  on the right

### Requirement: Classes carousel

The system SHALL render a "Classes" heading and a carousel of five class
cards, each a photo with a hover overlay showing a title and a category tag.

#### Scenario: Class cards

- **GIVEN** the Classes section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL show the green heading "Classes" with a paragraph
- **AND** five class cards SHALL be shown with the title "Classes fitness name
  here" and category tags in order: Fitness, Cardio Vascular, Lose Weight,
  Cardio Vascular, Fitness
- **AND** hovering a card SHALL show a green `rgba(72,212,148,0.8)` overlay
  with the title and tag
- **AND** carousel dots (gray `#e6e6e6`, active green `#48d494`) SHALL be
  shown below

### Requirement: Schedule with day tabs and class table

The system SHALL render a "Schedule" heading, six day tabs, and a bordered
striped table with five class rows per day, each row ending in a green
"Join Now" link.

#### Scenario: Schedule tabs and table

- **GIVEN** the Schedule section is displayed
- **WHEN** the page loads
- **THEN** the green heading "Schedule" SHALL be shown with a paragraph
- **AND** the day tabs Monday, Tuesday, Wednesday, Thursday, Friday, and
  Sunday SHALL be shown with Monday active (green pill)
- **AND** the active day SHALL show the bordered striped table with rows Gym,
  Meditation, Weight Lifting, Crossfit, and Aerobics, each with a time, a
  trainer name, and a green "Join Now" link
- **AND** clicking another day tab SHALL switch the table to that day (same
  rows)

### Requirement: Trainers section

The system SHALL render a "Trainers" heading and three trainer cards, each
with a green-shadowed photo, name, role, and copy.

#### Scenario: Trainer cards

- **GIVEN** the Trainers section is displayed
- **WHEN** the page loads
- **THEN** the green heading "Trainers" SHALL be shown with a paragraph
- **AND** three cards SHALL be shown: James Holmes, Kelly Green, and Ben
  Smith, each with a photo (green offset shadow), the role "Aerobatics
  Trainer", and a description paragraph

### Requirement: Our Featured Services carousel

The system SHALL render an "Our Featured Services" heading and a carousel of
six green service cards, each with a white icon, a white title, and copy.

#### Scenario: Service cards

- **GIVEN** the Our Featured Services section is displayed
- **WHEN** the page loads
- **THEN** the green heading "Our Featured Services" SHALL be shown with a
  paragraph
- **AND** six green `#48d494` cards SHALL be shown with white icons and titles
  in order: Weight Lifting, Meditation, Crossfit, Aerobics, Gym, Circling
- **AND** carousel dots SHALL be shown below

### Requirement: Contact Us dark form section

The system SHALL render a `#121212` section with a green "Contact Us" heading
and a contact form with first/last name, subject, email, message, and a
"Send Message" submit button.

#### Scenario: Contact form

- **GIVEN** the Contact Us section is displayed on the `#121212` background
- **WHEN** the page loads
- **THEN** the green heading "Contact Us" SHALL be shown with a paragraph
- **AND** the form SHALL show First name, Last name, Subject, Email, and a
  "Write your message here." message field
- **AND** a full-width green "Send Message" submit button SHALL be shown

#### Scenario: Contact form validation

- **GIVEN** the contact form is displayed
- **WHEN** the user submits without required fields or with an invalid email
- **THEN** per-field validation errors SHALL be shown and no submission
  occurs

### Requirement: Footer with About, Links, Subscribe

The system SHALL render a footer with About Pumply, a Links list, a Subscribe
form, and a copyright bar that links to Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** the "About Pumply" paragraph and the Links list (Home, Meditation,
  Gym, Aerobatics) SHALL be shown
- **AND** a Subscribe form (email input + green Subscribe button) SHALL be
  shown
- **AND** a copyright bar SHALL credit Component Dock with a link to
  https://www.componentdock.com/

#### Scenario: Subscribe validation

- **GIVEN** the footer subscribe form is displayed
- **WHEN** the user enters an invalid email and presses Subscribe
- **THEN** a validation error SHALL be shown and no success message appears

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Pumply app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero, counters, Step Up Your
  Fitness, Classes, Schedule, Trainers, Our Featured Services, Contact Us,
  and footer in order
- **AND** the document title SHALL be "Pumply — Gym Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/pumply`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/pumply`)
- [ ] Section order matches the reference 1:1 (navbar → hero → counters → Step Up Your Fitness → Classes → Schedule → Trainers → Our Featured Services → Contact Us → footer)
- [ ] Design tokens in `@theme` (brand green #48d494, button text #212529, page #000, contact #121212, hero fallback #222, Muli font stack)
- [ ] Navbar: transparent over hero, "Pumply" wordmark, 5 white links, green-outlined CONTACT, hamburger on mobile, sticky white state
- [ ] Hero: 100vh/min-900px, dark #222 + photo background, centered white 7rem/900 "Welcome To Pumply"
- [ ] Counters: 2,260 Members / 210 Daily Visitors / 887 Health Program / 1,920 Heart Beat with green icons + white numbers
- [ ] Step Up Your Fitness: green 3rem/900 section title, paragraph, green "Get In Touch" button, green-shadowed photo right
- [ ] Classes: 5-card carousel, hover green overlay + title + category tags (Fitness / Cardio Vascular / Lose Weight / Cardio Vascular / Fitness), gray/green dots
- [ ] Schedule: 6 day tabs (Mon/Tue/Wed/Thu/Fri/Sun), active green pill, bordered striped white-text table, 5 rows with Join Now links
- [ ] Trainers: 3 cards (James Holmes / Kelly Green / Ben Smith), green offset shadows, "Aerobatics Trainer" role
- [ ] Our Featured Services: 6 green cards (Weight Lifting / Meditation / Crossfit / Aerobics / Gym / Circling), white icons + titles, dots
- [ ] Contact Us: #121212 bg, centered form (First/Last name, Subject, Email, message), full-width "Send Message", validation errors
- [ ] Footer: About Pumply + Links (Home / Meditation / Gym / Aerobatics) + Subscribe (rounded-0 input + green button), copyright bar links Component Dock
- [ ] Document title "Pumply — Gym Template"
- [ ] ALL THREE TEMPLATES.md rows marked `[x]` on completion: line 407 (Bootstrap), line 1853 (Health Fitness), line 2325 (One Page)
