# Template: Rep (Fitness Gym Template)

## Purpose

Rep is a single-page fitness-gym website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Gymer"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Rep recreates the ColorLib "Gymer" free Bootstrap fitness template — a dark,
moody one-page gym landing page with a neon-green (`#48d494`) brand accent on
a black base, a full-screen hero over a gym photo/video with a dark overlay,
a four-stat counter bar, a split about section ("Step Up Your Fitness"),
an image-card classes carousel, a tabbed weekly class schedule table, a
three-trainer grid with hard green offset shadows, a green service-card
carousel, a dark contact form section, and a black footer with About / Links
/ Subscribe columns.

## Design reference (replication findings)

- **Original:** ColorLib "Gymer" — fitness / gym template
  (source: https://colorlib.com/wp/template/gymer/).
  TEMPLATES.md has THREE copies of this item (lines 407, 1853, 2325 — mark
  EVERY copy `[x]` when done; dup-row trap: always grep the source slug
  before claiming).
- **Preview URL:** https://preview.colorlib.com/theme/gymer/ — HTTP 200,
  full rendered DOM analyzed (31.5 KB, title "Gymer"). Stylesheet
  `css/style.css` (~18 KB, extracted) plus a custom-compiled
  `bootstrap.min.css` (27 KB — the `.btn-primary` definition lives here:
  `{color:#212529;background-color:#48d494;border-color:#48d494}`),
  owl.carousel, jquery-ui, fancybox, aos, YTPlayer (hero background video),
  flaticon/icomoon icon fonts. Fonts load from a Google Fonts `<link>` in the
  HTML head: **`Muli:300,400,700,900`** — headings, body and nav all use
  Muli (weight varies: h1/h2 900, body 300). Cross-checked against the
  TEMPLATES.md screenshot (`gymer-free-template.jpg`, viewed in browser,
  1200×946) — designs match: hero photo of a gym interior with a dark
  overlay, centered white "Welcome To Gymer" headline, transparent navbar
  with a green-outlined Contact CTA, black stats strip below the fold. The
  demo brands itself "Gymer"; our recreation uses the NEW name **Rep**.
- **Section order (1:1):** Header (`header.site-navbar py-4
js-sticky-header site-navbar-target`, `position: absolute`, width 100%,
  z-index 1999, over the hero; wrapped in `.sticky-wrapper`): container-fluid
  (padding-left/right **7rem**) → flex `align-items-center`: logo left
  (`.site-logo`, w900 1.3rem, white link "Gymer") + nav right
  (`.site-navigation`, `text-right`): `.site-menu.main-menu` ul
  (`d-none d-lg-block`, inline-block li, links `padding 5px 20px`, white,
  `.active` = `#48d494`): Home / Classes / Schedule / Trainer / Services;
  second nav `.site-menu-dark` with `li.cta`: Contact link wrapping `<span
class="rounded border border-primary">Contact</span>` — border `#48d494`,
  padding 10px 20px, uppercase 0.8rem, w700, `#48d494` text; hover: bg
  `#48d494` + white text. Mobile (≤991px): hamburger toggler
  (`.site-menu-toggle`, icon-menu, `d-lg-none`), offcanvas `.site-mobile-menu`
  (width 300px, fixed right, white bg, shadow, `translateX(110%)` hidden).
  Sticky on scroll (`.sticky-wrapper.is-sticky`): navbar bg **white**,
  shadow `4px 0 20px -5px rgba(0,0,0,0.2)`, logo + links turn black, link
  hover `#48d494`, `.active:after` = 2px underline `#48d494`; `.shrink`
  reduces py to 10px → Hero/Intro (`div.intro-section#home-section`,
  `position: relative`): height **100vh, min-height 900px**; background
  video (YouTube, `#bgndVideo` YTPlayer element) with `.intro-section:before`
  full-size overlay bg **`#222`** (screenshot shows gym photo + dark overlay);
  centered `col-lg-8 mx-auto text-center`: h1 "Welcome To Gymer" (**7rem**,
  w900, white) → Stats + About (`.site-section.section-1`, black bg):
  (a) counter row `row mb-5` — 4 `.counter` cols (col-lg-3): `.icon-wrap`
  (margin-right 1.5rem) flaticon icon (3rem, `text-primary` = green) +
  `.counter-text`: `strong` number (**2.5rem w700 white**, mb 1rem, e.g.
  2,260) + `span` label (1rem): **Members 2,260 · Daily Visitors 210 ·
  Health Program 887 · Heart Beat 1,920** (icons: muscle, stationary-bike,
  banana, heart); (b) about row `row` — left `col-lg-5 mr-auto mb-5
align-self-center`: h2 `.section-title` "Step Up Your Fitness" (**3rem,
  `#48d494`, w900**, max-width 450px, mb 1.8rem; 1.5rem ≤991px) + lorem p
  (mb 5) + `a.btn.btn-primary.smoothscroll.py-3.px-4` "Get In Touch";
  right `col-lg-6`: `.image-absolute-box` img `about_1.jpg` `.img-fluid
.img-shadow` (hard offset shadow `10px 10px 0 0 #48d494`) → Classes
  (`.site-section.section-2#classes-section`): h2 `.section-title` "Classes"
  - intro p; `div.owl-carousel.nonloop-block-13` — 5 `a.work-thumb` cards
    (link → single.html): `.work-text` absolutely positioned top 10% left 10%
    (hidden until hover): h3 "Classes fitness name here" (1rem w900 white) +
    `.category` (0.8rem rgba(255,255,255,0.7)); image (`slide_0..4.jpg`);
    hover: `:after` overlay **rgba(72,212,148,0.8)**, scale(1.07), text fades
    in; categories: **Fitness / Cardio Vascular / Lose Weight / Cardio
    Vascular / Fitness**; dots below (10px circles `#e6e6e6`, active
    `#48d494`) → Schedule (`.site-section.section-2#schedule-section`): h2
    `.section-title` "Schedule" + intro p; `ul.nav.nav-tabs.tab-list-custom`
    (justify-content-center, **border-bottom 1px `#48d494`**; `.nav-link`
    radius 4px, transparent border; `.active` = bg `#48d494`, white):
    **Monday / Tuesday / Wednesday / Thursday / Friday / Sunday**; tab panes
    each with `table.table-bordered.table-custom.table-striped` (td white,
    padding-top/bottom 20px) — 5 rows per day: **Gym 8:00am–10:00am John Doe ·
    Meditation 10:00am–10:30am James Holmes · Weight Lifting 1:00pm–2:30pm Ben
    Smith · Crossfit 3:00pm–3:45pm Craig Peters · Aerobics 5:00pm–5:30pm Paul
    Green** + last `td.text-center` "Join Now" link (smoothscroll →
    #contact-section) → Trainers (`.site-section#trainer-section`): h2
    `.section-title` "Trainers" + intro p; `div.row.large-gutters` — 3
    `.person` cards (col-md-6 col-lg-4): img (`person_1..3.jpg`, `.img-fluid
mb-5`, hard green shadow `10px 10px 0 0 #48d494`) + h3 name + `p.mb-4
.opacity-7` role + lorem p: **James Holmes · Kelly Green · Ben Smith**
    (all "Aerobatics Trainer") → Our Featured Services
    (`.site-section#services-section`): h2 `.section-title` "Our Featured
    Services" + intro p; `div.owl-carousel.nonloop-block-14` — 6 `.service`
    cards (padding **4rem** 2rem mobile, **bg `#48d494`**): flaticon icon
    (`display-3 text-white mb-4 d-inline-block`) + h3 (1.5rem w700 white, mb
    1.5rem) + p (rgba(255,255,255,0.8)): **Weight Lifting (muscle) ·
    Meditation (stationary-bike) · Crossfit (banana) · Aerobics (heart) · Gym
    (scale) · Circling (weight)**; dots same as classes → Contact
    (`.site-section.bg-dark#contact-section`, **bg `#121212`**): centered
    `col-md-7`: h2 `.section-title mb-3` "Contact Us" + p mb-5; `form`: row of
    First name / Last name (`col-md-6`), Subject, Email (`col-md-12`),
    textarea (cols 30 rows 10, "Write your message here."), submit
    `input.btn.btn-primary.py-3.px-5.btn-block` value "Send Message";
    `.form-control`: height **43px**, radius **0**, bg none, **border-width
    2px**, white text, focus border `#48d494` → Footer
    (`footer.footer-section`, padding **7em 0**, black): container row — About
    Rep (`col-md-4`: h3 uppercase **0.9rem letter-spacing .1rem w900 white** +
    lorem p 1rem); Links (`col-md-3 ml-auto`: h3 "Links" + `ul.list-unstyled
.footer-links` li mb-10px: Home / Meditation / Gym / Aerobatics);
    Subscribe (`col-md-4`: h3 "Subscribe" + p + form: `div.d-flex.mb-5` —
    `input.form-control.rounded-0` email + `input.btn.btn-primary.rounded-0`
    value "Subscribe"); copyright bar (`row pt-5 mt-5 text-center`):
    "Copyright © <year> All rights reserved | This template is made with
    <heart> by Colorlib" → credit Rep.
- **Design tokens extracted from the live preview CSS (`css/style.css` +
  custom `bootstrap.min.css`):**
  - Brand green **`#48d494`** (primary): `.btn-primary` bg/border,
    `.section-title` color, active nav link, CTA span border + hover bg,
    sticky-header link hover + active underline, `.service` card bg,
    `.work-thumb` hover overlay `rgba(72,212,148,0.8)`, `.tab-list-custom`
    bottom border + active tab bg, carousel active dot, `.form-control`
    focus border, hard image shadows (`10px 10px 0 0 #48d494`), counter
    icons.
  - Black/dark: body bg **`#000`**; contact section bg **`#121212`**
    (`!important`); hero overlay **`#222`**; dropdown borders `#edf0f5` /
    hover bg `#f4f5f9` / item text `#25262a`; heading color **white**
    (`h1,h2,h3` → `#fff`).
  - White `#fff`: hero h1, nav links (non-sticky), logo, counter numbers,
    table cells, section headings, footer headings/text.
  - Grays: body copy default `gray` (w300, 1.1rem, line-height 1.7);
    `.work-text .category` rgba(255,255,255,0.7); `.service p`
    rgba(255,255,255,0.8); intro p rgba(255,255,255,0.5); carousel dots
    `#e6e6e6`; `.btn-primary` text `#212529` (bootstrap default) — keep
    white on green in practice (screenshot shows white).
  - Fonts — **Muli** 300/400/700/900 (Google Fonts `<link>`; load in
    `index.html`): hero h1 7rem w900; `.section-title` 3rem w900 (1.5rem
    ≤991px); body 1.1rem w300 lh 1.7; logo 1.3rem w900; footer h3 0.9rem
    uppercase ls .1rem w900; `.work-thumb h3` 1rem w900; `.service h3` 1.5rem
    w700; counter strong 2.5rem w700.
  - Buttons — `.btn`: text-transform uppercase, font-size **12px**, w900,
    **border-width 2px**, no focus shadow; `.btn-primary`: bg/border
    `#48d494`, hover → transparent bg + white border + white text (CSS
    `style.css` line 61); CTA span: 10px 20px padding, 0.8rem uppercase w700
    `#48d494`, hover fills green.
  - Radii — form controls **0**; tab nav-links **4px**; CTA span `rounded`
    (bootstrap 0.25rem); carousel dots 50%; images use hard offset shadows
    (`10px 10px 0 0`), no border-radius; `.rounded-0` subscribe input/button.
  - Section backgrounds — black page; hero = video/photo + `#222` overlay;
    services = solid green cards; contact = `#121212`; footer = black;
    navbar transparent → **white** sticky on scroll.
  - Spacing — `.site-section` padding 5em 0 (4em ≤991px); footer 7em 0;
    counter strong mb 1rem; `.section-title` mb 1.8rem; table td
    padding-top/bottom 20px; `.service` padding 4rem (2rem ≤991px); nav
    links padding 5px 20px; hero min-height 900px.
- **Visual design (from screenshot + live render):** dark, moody gym landing
  page — full-screen hero photo of a gym interior (treadmills, ellipticals,
  people working out) dimmed by a dark overlay, huge white "Welcome To
  Gymer" headline centered (geometric sans, ~7rem); transparent navbar with
  green underline on the active link and a green-bordered "CONTACT" pill
  button right; directly below the fold a solid black strip with four
  stat columns (green icon, big white number, white label: 2,260 Members ·
  210 Daily Visitors · 887 Health Program · 1,920 Heart Beat). Demo copy is
  placeholder lorem — paraphrase into fitness-themed copy in the recreation.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/rep-<n>/<w>/<h>`); icons → lucide-react (dumbbell,
  bicycle, leaf/apple, heart for counters; heart, scale, weight etc. for
  services; menu, x for mobile toggle); no hero background video (YouTube
  embed) — use a gym photo with the `#222` overlay instead; Muli via Google
  Fonts `<link>`; no assets copied. Copy paraphrased but same content kinds
  (logo + nav + CTA, hero headline, 4 stats, about heading + text + CTA +
  photo, 5 class cards with categories, 6-day schedule tabs + 5-row tables
  with Join Now links, 3 trainers, 6 green service cards, contact form,
  footer columns + subscribe form).

Rep lives in `apps/rep` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header and navigation

The system SHALL render an absolute-positioned header over the hero with a
logo, main navigation, a green-outlined Contact CTA, a mobile menu, and a
white sticky header on scroll.

#### Scenario: Brand, navigation and Contact CTA

- **GIVEN** the Rep page is rendered on a wide viewport
- **WHEN** the header is displayed
- **THEN** the header SHALL show the site name "Rep" on the left (weight
  900, white)
- **AND** the nav SHALL show white links: Home, Classes, Schedule, Trainer,
  Services (active link green `#48d494`)
- **AND** the header SHALL show a "Contact" pill on the right with a green
  border and green uppercase text that fills green with white text on hover

#### Scenario: Sticky white header on scroll

- **GIVEN** the Rep page is rendered
- **WHEN** the user scrolls down the page
- **THEN** the header SHALL become fixed/sticky with a white background, a
  drop shadow, and black logo + links
- **AND** link hover and the active-link underline SHALL be green
  `#48d494`

#### Scenario: Mobile menu toggle

- **GIVEN** the Rep page is rendered on a narrow viewport
- **WHEN** the hamburger toggler is activated
- **THEN** an offcanvas menu SHALL slide in from the right (white
  background, ~300px) showing the nav links and the Contact CTA
- **AND** the menu SHALL close when the toggler is activated again

### Requirement: Hero intro

The system SHALL render a full-screen hero with a background photo/video
area, a dark overlay, and a large centered headline.

#### Scenario: Hero content

- **GIVEN** the Rep page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL be full-screen (100vh, min-height 900px on large
  screens)
- **AND** the hero SHALL show a gym background photo dimmed by a dark
  `#222` overlay
- **AND** the hero SHALL show the headline "Welcome To Rep" centered in
  white ~7rem weight 900

### Requirement: Stats counters

The system SHALL render a row of four animated-style stat counters.

#### Scenario: Counter content

- **GIVEN** the Rep page is rendered
- **WHEN** the stats section is displayed
- **THEN** the section SHALL show 4 counters in a row, each with a green
  icon, a large white number (2.5rem weight 700), and a small label:
  2,260 Members · 210 Daily Visitors · 887 Health Program · 1,920 Heart
  Beat

### Requirement: About section

The system SHALL render a split about section with text on the left and a
photo on the right.

#### Scenario: About content

- **GIVEN** the Rep page is rendered
- **WHEN** the about section is displayed
- **THEN** the section SHALL show the heading "Step Up Your Fitness" (3rem,
  green `#48d494`, weight 900) on the left with a descriptive paragraph
- **AND** the section SHALL show a green "Get In Touch" button below the
  paragraph (uppercase, 2px border, hover becomes transparent with a white
  border)
- **AND** the section SHALL show a photo on the right with a hard green
  offset shadow (`10px 10px 0 0 #48d494`)

### Requirement: Classes carousel

The system SHALL render a "Classes" section with a carousel of image cards
that reveal a title and category on hover.

#### Scenario: Class card content

- **GIVEN** the Rep page is rendered
- **WHEN** the classes section is displayed
- **THEN** the section SHALL show the heading "Classes" (green, weight 900)
  with an intro line
- **AND** the section SHALL show a carousel of 5 class cards, each with a
  photo, a title ("Classes fitness name here") and a category
- **AND** hovering a card SHALL scale it slightly and overlay a green tint
  (`rgba(72,212,148,0.8)`) with the title/category text visible
- **AND** the categories SHALL be: Fitness, Cardio Vascular, Lose Weight,
  Cardio Vascular, Fitness
- **AND** the carousel SHALL provide accessible controls/dots (active dot
  green)

### Requirement: Schedule

The system SHALL render a "Schedule" section with day tabs and a weekly
class table per day.

#### Scenario: Schedule tabs and table

- **GIVEN** the Rep page is rendered
- **WHEN** the schedule section is displayed
- **THEN** the section SHALL show the heading "Schedule" (green, weight 900)
  with an intro line
- **AND** the section SHALL show day tabs: Monday, Tuesday, Wednesday,
  Thursday, Friday, Sunday (active tab has a green background)
- **AND** selecting a day SHALL show that day's bordered table with 5 rows:
  Gym 8:00am–10:00am John Doe · Meditation 10:00am–10:30am James Holmes ·
  Weight Lifting 1:00pm–2:30pm Ben Smith · Crossfit 3:00pm–3:45pm Craig
  Peters · Aerobics 5:00pm–5:30pm Paul Green
- **AND** each row SHALL end with a "Join Now" link that scrolls to the
  contact section

### Requirement: Trainers

The system SHALL render a "Trainers" section with three trainer cards.

#### Scenario: Trainer card content

- **GIVEN** the Rep page is rendered
- **WHEN** the trainers section is displayed
- **THEN** the section SHALL show the heading "Trainers" (green, weight 900)
  with an intro line
- **AND** the section SHALL show 3 trainer cards in a row, each with a photo
  (hard green offset shadow), a name, a role ("Aerobatics Trainer",
  dimmed), and a short bio: James Holmes, Kelly Green, Ben Smith

### Requirement: Services

The system SHALL render an "Our Featured Services" section with a carousel
of green service cards.

#### Scenario: Service card content

- **GIVEN** the Rep page is rendered
- **WHEN** the services section is displayed
- **THEN** the section SHALL show the heading "Our Featured Services"
  (green, weight 900) with an intro line
- **AND** the section SHALL show a carousel of 6 green `#48d494` cards,
  each with a white icon, a white title, and a light description: Weight
  Lifting, Meditation, Crossfit, Aerobics, Gym, Circling
- **AND** the carousel SHALL provide accessible controls/dots (active dot
  green)

### Requirement: Contact form

The system SHALL render a dark contact section with a working form.

#### Scenario: Contact form content

- **GIVEN** the Rep page is rendered
- **WHEN** the contact section is displayed
- **THEN** the section SHALL have a dark `#121212` background and show the
  heading "Contact Us" with a short intro line
- **AND** the form SHALL show fields: First name, Last name, Subject,
  Email, and a message textarea (radius 0, 2px border, white text)
- **AND** the form SHALL show a full-width green "Send Message" submit
  button

#### Scenario: Contact form validation and submission

- **GIVEN** the Rep page is rendered
- **WHEN** the user submits the contact form
- **THEN** the form SHALL validate required fields (names, subject, valid
  email, message) and show per-field errors when invalid
- **AND** on valid submit the form SHALL prevent the default page reload
  and show a confirmation message

### Requirement: Footer

The system SHALL render a black footer with About, Links, and Subscribe
columns plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Rep page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show an "About Rep" column with a blurb
  paragraph
- **AND** the footer SHALL show a "Links" column with links: Home,
  Meditation, Gym, Aerobatics
- **AND** the footer SHALL show a "Subscribe" column with an email input
  and a green "Subscribe" button
- **AND** a copyright bar SHALL show the current year, "All rights
  reserved", and a credit line for the template author

#### Scenario: Newsletter submission

- **GIVEN** the Rep page is rendered
- **WHEN** the newsletter form is submitted
- **THEN** the form SHALL prevent the default page reload
- **AND** the form SHALL show a confirmation message

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `apps/rep` created from a landing/app pattern, package renamed to
      `@free-react-templates/rep`
- [ ] TDD: tests written first (red), then implementation (green)
- [ ] 100% coverage lines/functions/branches/statements (`npm run
test:coverage -- --project apps/rep` or `scripts/verify-app.sh rep`)
- [ ] Brand green `#48d494` + black `#000` + dark `#121212` in `@theme`;
      Muli (300/400/700/900) via Google Fonts link
- [ ] Section order matches the original 1:1 (see Design reference)
- [ ] Header: absolute over hero, logo left, white nav links (Home /
      Classes / Schedule / Trainer / Services) with green active, green
      outlined Contact pill (hover fills green); sticky white header on
      scroll (black links, green hover/underline); mobile offcanvas menu
- [ ] Hero: 100vh (min 900px) gym photo + dark `#222` overlay, centered
      white 7rem weight-900 "Welcome To Rep"
- [ ] Stats: 4 counters (green icon + 2.5rem white number + label): 2,260
      Members · 210 Daily Visitors · 887 Health Program · 1,920 Heart Beat
- [ ] About: "Step Up Your Fitness" green heading + paragraph + green "Get
      In Touch" button (uppercase, 2px border, transparent hover) + photo
      right with `10px 10px 0 0` green hard shadow
- [ ] Classes: carousel of 5 photo cards (title + category on hover, green
      tint overlay, scale 1.07) with green active dots
- [ ] Schedule: 6 day tabs (green active) + bordered 5-row table per day
      (Gym / Meditation / Weight Lifting / Crossfit / Aerobics with times + trainers + Join Now links)
- [ ] Trainers: 3 cards (photo with green hard shadow, name, dimmed role,
      bio): James Holmes, Kelly Green, Ben Smith
- [ ] Services: carousel of 6 green `#48d494` cards (white icon + white
      title + light text): Weight Lifting, Meditation, Crossfit, Aerobics,
      Gym, Circling
- [ ] Contact: `#121212` bg, heading + intro, form (First/Last name,
      Subject, Email, textarea, full-width green Send Message button),
      validation + confirmation on submit
- [ ] Footer: black, About Rep / Links (Home, Meditation, Gym, Aerobatics)
      / Subscribe (email + green button, confirm on submit) columns,
      copyright bar with author credit
- [ ] Radii: 0 on form controls and subscribe input/button; 4px tab links;
      50% carousel dots; no border-radius on images (hard shadows instead)
- [ ] Placeholder images via `picsum.photos/seed/rep-<n>/<w>/<h>`; no
      assets copied; hero uses photo + overlay, not the YouTube background
      video
- [ ] PR description: source template, preview URL, design tokens, what
      differs
- [ ] After merge: mark TEMPLATES.md Gymer (lines 407, 1853, 2325)
      `[~]` → `[x]` + Surge URL (`https://free-react-templates-rep.surge.sh`) + homepage + `npm run readme:status`
