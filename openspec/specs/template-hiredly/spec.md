# Template: Hiredly (Job Board Template)

## Purpose

Hiredly is a job-board landing page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Joblab"
template design (see TEMPLATES.md — appears 2×: lines 594 and 1998; both rows
point to the same source, one prep covers all; verified with
`grep -c 'wp/template/joblab/'` = 2), built under a DIFFERENT name (Hiredly —
"hired" + -ly, matching the project's naming pattern: Lendly, Stayly, Roadly,
Hoodly, Shiply) per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Source: https://colorlib.com/wp/template/joblab/ (Bootstrap / Job Board /
Business categories; `<title>Job Board</title>`).
Preview URL: https://preview.colorlib.com/theme/joblab/ (HTTP 200, ~94 KB
HTML fetched — the preview slug matches the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Joblab" — a bright, corporate job-board one-pager
  on white with a vivid blue brand: a split hero (light-blue photo area left
  with a dark-navy 56px headline + a white pill search bar; solid/gradient
  blue right side with a photo of a man holding a tablet); a "Discover jobs
  for you" section with category tabs and pastel-tagged job cards; a light
  `#F6F9FC` "We help companies" services row; a 3-card pricing row; a
  "Why we are different" feature list; a bordered newsletter band; a solid
  blue `#007AFF` "Start building your own job board now" CTA; and a light
  footer with 4 link columns. Headings are navy `#18304B`, body is Overpass,
  headings/buttons are Chivo. Buttons are `#007AFF` blue (radius 5px); the
  hero "Search Job" button uses a purple→blue gradient
  (`#ca42f2 → #6a42f2 → #4294f2 → #42b5f2 → #7db9e8`).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/joblab/
  (HTTP 200, ~94.4 KB HTML; `assets/css/style.css` ~107 KB parsed for
  tokens). The page imports bootstrap.min, owl.carousel, slicknav,
  animate.min, magnific-popup, fontawesome, themify-icons, slick,
  nice-select — site is jQuery + Bootstrap 4 + owl-carousel + slicknav +
  nice-select, NOT Tailwind. All interactivity (slider, tabs, selects,
  carousel) must be recreated client-side in React.
- **Screenshot note:** `joblab-colorlib-template.jpg` (1200×946, viewed in
  browser) MATCHES the live template: light-blue hero left with dark
  headline "Searching for a job? Find the **best startup** job that fit you"
  and a white pill search bar (keyword field + location dropdown + solid
  blue "Search Job" button); solid blue hero right with the man-with-tablet
  photo; "Discover jobs for you" with blue-underlined active tab "All
  Categories" and 3 job cards (pastel category tags — orange, blue, green —
  with job title, New York USA location, Full Time, company logo "Globe
  Solution Ltd.", "2h ago"); centered "Join Now" header CTA (white bg, blue
  border/text). The live preview DOM + parsed stylesheet are the
  authoritative reference; the screenshot confirms the same design.

### Section structure (from the live DOM, top to bottom)

1. `header.header-area` > `div.main-header`:
   - Logo left ("JobLab." text with a blue icon → recreate as "Hiredly"
     bold navy/blue text; brand color `#007AFF`).
   - `ul.nav-menu` centered: Home (active), About, Job, Blog (dropdown:
     Blog, Blog Details, Elements), Contact.
   - `a.header-btn` "Join Now" (white bg, blue text + border, padding
     14px 28px — the `boxed-btn` style: bg `#fff`, color `#007AFF`,
     border 1px solid `#007AFF`, uppercase, letter-spacing 1px).
   - Sticky state (`.header-sticky.sticky-bar`) gets bg `#E1EEFF`.
   - Mobile: slicknav → client-side hamburger menu.
2. `section.slider-area` > `div.single-slider.slider-height.slider-bg1`
   (bg image `img/hero/h1_hero.jpg`, cover, center) — split hero:
   - `div.hero__caption`: `h1` "Searching for a job? Find the **best
     startup** job that fit you" — 56px/700 `#18304B`, line-height 1.2,
     letter-spacing -0.9px (the "best startup" span is highlighted); `p`
     white 30px Overpass (verify against screenshot — the caption sits on
     the light part of the hero).
   - Search bar (white pill container per screenshot; DOM = the three
     pieces side by side):
     - `div.input-form` (width 41%): `input` placeholder "Job Tittle or
       keyword" + pen icon (`img assets/img/icon/pen.svg` → lucide Pen).
     - `div.select-form` > `div.select-itms`: `select#select1` with
       options "Location BD", "Location PK", "Location US", "Location UK"
       - flag icon (`assets/img/icon/flag.svg` → lucide Flag).
     - `div.search-form` > `a` "Search Job" — `.btn.slider-btn`: padding
       35px 60px, radius 5px, white text, background is the purple→blue
       gradient (`#ca42f2 0% → #6a42f2 39% → #4294f2 75% → #42b5f2 100% →
#7db9e8 100%`), hover → solid `#007AFF`.
   - `div.hero-man` (right, d-none d-lg-block): photo of a man holding a
     tablet → placeholder image (picsum portrait seed).
3. `section.categories-area.section-padding` — "Discover jobs for you":
   - `div.section-tittle.text-center.mb-35`: `h2` "Discover jobs for you"
     (40px/700 `#18304B`, letter-spacing -0.04em, mb 12px) + `p` "Browse
     200+ top jobs in your local city."
   - Tabs (`ul.nav`): All Categories (active), Creative & Art, Programming
     & IT, Corporate, Finance & Accounting, Medical, Marketing — active
     tab underlined in blue; 7 `div.tab-pane.fade` panes.
   - Job cards (`.single-cat.mb-30` in `col-lg-4 col-md-6 col-sm-6` grid,
     3 per row; the "All Categories" pane shows 6 jobs): each card shows
     a category chip (`.colors1..5` pastel tag), job title (`.cat-cap h5 a`
     24px/600 `#071112`), location "New York, USA", "Full Time" badge,
     company "Globe Solution Ltd.", "2h ago" time. Card = `div.cat-cap`:
     box-shadow 0 10px 20px rgba(0,0,0,0.05), border 1px solid
     transparent, padding 30px 20px 25px, radius 5px; hover → border
     `#007AFF`.
     - Job rows (title / location / Full Time / company / time) — reuse
       the 6 "All Categories" jobs per pane; tab click swaps the visible
       pane client-side.
4. `section.our-services.section-padding.section-bg1` (bg `#F6F9FC`):
   - `div.section-tittle.mb-70`: `h2` "We help companies to find talents"
     - blurb ("We collect reviews from our users…" — paraphrase).
   - 4 × `div.single-services.mb-30.text-center`: `div.services-icon`
     (img icon → lucide: e.g. Briefcase, Users, Rocket, ShieldCheck) +
     `div.services-cap` `p` (blurb — paraphrase; the source repeats the
     same lorem text in all 4). Source markup has no h4 title, only an
     icon + paragraph; give each a short title in the same spirit (per
     fidelity rule: same _kind_ of content).
5. `section.pricing-card-area.section-bg.section-padding` (white bg):
   - `div.section-tittle.mb-60.text-center`: `h2` "Choose a plan that
     right for your business" + blurb (paraphrase).
   - 3 × `div.single-card.text-center.mb-30` (col-lg-4):
     `div.card-top` plan name (Starter Plan / Business Plan / Premium
     Plan, 20px/600 `#18304B`), `div.card-mid` price ("Free" /
     "$39.00" / "$59.00" — big `#007AFF` blue, note $39/$59 shown with
     the decimal) + "Per month", `div.card-bottom` blurb (paraphrase) +
     "Start Now" button. Card style: bg `#fff`, radius 8px, padding
     30px 31px, box-shadow 0 10px 20px rgba(0,0,0,0.05).
6. `section.about-area1.section-bg1.section-padding` (bg `#F6F9FC`):
   - `div.section-tittle.mb-50`: `h2` "Why we are different" + blurb
     (paraphrase).
   - 3 × `div.about-single.mb-30.d-flex`: `div.icon` (svg icon →
     lucide: e.g. Clock, Headset, BadgeCheck) + `div.pera` `p` (the
     source repeats "Keep your cool. Get on-demand help…" — paraphrase
     into 3 distinct one-liners, same kind of content).
   - `div.about-img` (a photo → picsum seed; the source uses a large
     illustration on the right of the row).
7. `section.subscribe-area` (white, border-top + border-bottom 1px solid
   `#f0f0ef`):
   - `div.subscribe-caption.text-center` (max-width col-7/8): `h3`
     "Subscribe our newsletter to get updates about latest jobs"
     (46px/700, line-height 1.4, mb 22px) + `p` (the "Go house hunting…"
     text is a leftover base-template blurb — paraphrase to a newsletter
     pitch, e.g. "Get the latest job openings delivered to your inbox").
   - `form` (position relative): email `input` + `button.subscribe-btn`
     "Subscribe" (bg `#007AFF`, radius 5px, padding 16px 26px, white,
     font-size 20px, with an `@` icon). Submit → success state.
8. `section.wantToWork-area` (bg `#007AFF` solid blue):
   - `div.wantToWork-caption`: `h2` white 36px/700 "Start building your
     own job board now" + two buttons: "Search Job" (white/outline style)
     and "Post a Job" (solid). The DOM shows the two links side by side
     (`a` Search Job + `a` Post a Job).
9. `footer.footer-area.footer-padding` (light bg):
   - `div.single-footer-caption.mb-50` × 4 (col-xl-3 col-lg-4 / col-lg-3
     grid):
     - Widget 1: `div.footer-logo.mb-35` (brand "Hiredly") + `p`
       footer pera (text color `#4C5753`).
     - Widget 2 `div.footer-tittle` h4 "Quick Links" (20px/600
       `#18304B`, mb 30px): Work, Services, Products, Tips & Tricks.
     - Widget 3 h4 "For Employers": Air freight, Ocean freight, Large
       projects, Job Packages.
     - Widget 4 h4 "For Candidates": Browse Jobs, Ocean freight,
       Candidate Dashboard, Large projects, Job Alerts.
   - `div.footer-bottom-area` > `div.footer-border`: `div.footer-copy-right`
     — "Copyright © <year> All rights reserved | This template is made
     with ❤ by ColorLib" → recreate as "© 2026 Hiredly — Job Board · All
     rights reserved" + a mandatory Component Dock link
     (https://www.componentdock.com/, "Made with Component Dock") per
     conventions; `div.footer-social` (social icons → lucide or inline
     SVG).

### Content (for copy paraphrase)

- Header: brand "Hiredly"; Home (active), About, Job, Blog, Contact;
  "Join Now".
- Hero: "Searching for a job? Find the best startup job that fit you";
  keyword placeholder "Job Title or keyword"; location options Location
  BD / Location PK / Location US / Location UK; "Search Job".
- Jobs: "Discover jobs for you" / "Browse 200+ top jobs in your local
  city."; tabs All Categories, Creative & Art, Programming & IT,
  Corporate, Finance & Accounting, Medical, Marketing; 6 jobs per pane —
  e.g. User Experience Designer - Employee Solutions (Creative & Art,
  New York USA, Full Time, Globe Solution Ltd., 2h ago), Foreign Language
  Research Analyst (Chinese) (Finance & Accounting), Medical Assistant,
  East Valley Primary Care (Medical) — paraphrase titles/companies freely.
- Services: "We help companies to find talents" + 4 icon cards.
- Pricing: "Choose a plan that right for your business"; Starter Plan —
  Free, Business Plan — $39.00, Premium Plan — $59.00 (Per month, Start
  Now).
- About: "Why we are different" + 3 icon items.
- Subscribe: "Subscribe our newsletter to get updates about latest jobs" +
  email + Subscribe button.
- CTA: "Start building your own job board now" + Search Job / Post a Job.
- Footer: Quick Links (Work, Services, Products, Tips & Tricks), For
  Employers (Air freight, Ocean freight, Large projects, Job Packages),
  For Candidates (Browse Jobs, Ocean freight, Candidate Dashboard, Large
  projects, Job Alerts); copyright bar + Component Dock link.

## Design tokens

| Token        | Value                                                                                         | Usage                                                                                                                     |
| ------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| brand-blue   | `#007AFF`                                                                                     | primary buttons, subscribe button, wantToWork CTA bg, active-tab underline, logo accent, card hover border, $39/$59 price |
| ink          | `#18304B`                                                                                     | hero h1, section h2 (40px/700, letter-spacing -0.04em), plan names, footer widget h4                                      |
| ink-dark     | `#071112`                                                                                     | job card title (`.cat-cap h5 a`, 24px/600)                                                                                |
| light        | `#F6F9FC`                                                                                     | our-services bg, about-area1 bg                                                                                           |
| sticky-blue  | `#E1EEFF`                                                                                     | sticky header bg, dropdown submenu bg                                                                                     |
| muted        | `#97A7AF` / `#999999`                                                                         | secondary/meta text                                                                                                       |
| footer-text  | `#4C5753`                                                                                     | footer pera text                                                                                                          |
| tag-orange   | `#F27E42` (bg rgba(242,126,66,0.26))                                                          | category chip colors1 (Creative & Art)                                                                                    |
| tag-blue     | `#4294F2` (bg rgba(66,148,255,0.26))                                                          | category chip colors2 (Finance & Accounting)                                                                              |
| tag-green    | `#2EB98D` (bg rgba(46,185,141,0.03))                                                          | category chip colors3 (Medical)                                                                                           |
| tag-indigo   | `#6A42F2` (bg rgba(106,66,242,0.07))                                                          | category chip colors4                                                                                                     |
| tag-pink     | `#F162BC` (bg rgba(241,98,188,0.07))                                                          | category chip colors5                                                                                                     |
| gradient-btn | `linear-gradient(to right, #ca42f2 0%, #6a42f2 39%, #4294f2 75%, #42b5f2 100%, #7db9e8 100%)` | hero "Search Job" slider button (hover → solid `#007AFF`)                                                                 |
| card-shadow  | `0 10px 20px rgba(0,0,0,0.05)`                                                                | job card + pricing card shadow                                                                                            |
| border-soft  | `#f0f0ef`                                                                                     | subscribe-area top/bottom borders                                                                                         |
| font-heading | "Chivo"                                                                                       | headings + `.btn` (Google Fonts)                                                                                          |
| font-body    | "Overpass"                                                                                    | body copy, `.boxed-btn` (Google Fonts)                                                                                    |

Radii: buttons radius 5px (`.btn`, `.subscribe-btn`); job cards 5px; pricing
cards 8px. Buttons: `.btn` = `#007AFF` bg, Chivo 18px/600, padding 26px 35px,
white; `.boxed-btn` (Join Now / outline) = white bg, `#007AFF` text,
1px solid `#007AFF`, uppercase, letter-spacing 1px, Overpass 14px; slider-btn
padding 35px 60px with the gradient. Spacing: section-padding default; job
card padding 30px 20px 25px; pricing card padding 30px 31px; subscribe h3
46px/700 line-height 1.4; CTA h2 36px/700 white.

## Requirements

### Requirement: Header / Navigation

The system SHALL render a top navigation bar with a brand, five nav links, a
Join Now call-to-action, and a mobile hamburger menu.

#### Scenario: Brand and nav links

- **GIVEN** the Hiredly app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL sit at the top with the brand "Hiredly"
- **AND** the nav SHALL contain Home (active), About, Job, Blog, Contact
- **AND** a "Join Now" button SHALL be visible on the right (white bg,
  blue border + text)

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user taps the hamburger toggle
- **THEN** a menu with the same nav links SHALL open
- **AND** the toggle SHALL be accessible (aria-expanded, aria-label)

### Requirement: Hero

The system SHALL render a split hero with a headline, a search bar
(keyword + location + search button), and a hero image.

#### Scenario: Hero content

- **GIVEN** the Hiredly app is rendered
- **WHEN** the user is at the top of the page
- **THEN** a hero SHALL show the headline "Searching for a job? Find the
  best startup job that fit you" (navy `#18304B`, "best startup"
  highlighted)
- **AND** a hero image SHALL be visible on the right (placeholder photo)

#### Scenario: Job search bar

- **GIVEN** the hero search bar is visible
- **WHEN** the user types a keyword, picks a location (Location BD /
  PK / US / UK) and clicks "Search Job"
- **THEN** the app SHALL confirm the search (client-side success state —
  no backend)

### Requirement: Discover jobs

The system SHALL render a job-listing section with category tabs and job
cards showing category, title, location, type, company, and time.

#### Scenario: Section title and tabs

- **GIVEN** the jobs section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "Discover jobs for you" with sub-line
  "Browse 200+ top jobs in your local city."
- **AND** tabs SHALL list All Categories (active), Creative & Art,
  Programming & IT, Corporate, Finance & Accounting, Medical, Marketing

#### Scenario: Job cards

- **GIVEN** the "All Categories" tab is active
- **WHEN** the section renders
- **THEN** job cards SHALL show a pastel category chip, job title,
  location, "Full Time", company, and "2h ago"
- **AND** hovering a card SHALL highlight its border in `#007AFF`

#### Scenario: Tab switching

- **GIVEN** multiple category tabs exist
- **WHEN** the user clicks a tab (e.g. "Medical")
- **THEN** the pane SHALL swap to that category's jobs client-side
- **AND** the active tab SHALL be underlined in blue

### Requirement: Services

The system SHALL render a "We help companies" section with four icon
service cards on a light `#F6F9FC` background.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "We help companies to find talents"
- **AND** four cards SHALL each show an icon (lucide) and a short blurb

### Requirement: Pricing

The system SHALL render three pricing plans (Starter Free, Business
$39.00, Premium $59.00) with "Start Now" buttons.

#### Scenario: Pricing cards

- **GIVEN** the pricing section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "Choose a plan that right for your
  business"
- **AND** three white cards SHALL show plan name, price (blue), "Per
  month", and a "Start Now" button

### Requirement: Why we are different

The system SHALL render an about/features section with three icon items.

#### Scenario: Feature items

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "Why we are different"
- **AND** three items SHALL each show a lucide icon and a one-line
  feature text

### Requirement: Newsletter

The system SHALL render a subscribe band with an email input and a
Subscribe button that confirms on submit.

#### Scenario: Subscribe form

- **GIVEN** the subscribe section is rendered
- **WHEN** the user enters an email and clicks "Subscribe"
- **THEN** the form SHALL show a success state (no backend)

### Requirement: CTA band

The system SHALL render a solid-blue call-to-action band with Search Job
and Post a Job buttons.

#### Scenario: CTA content

- **GIVEN** the CTA band is rendered
- **WHEN** the user scrolls to it
- **THEN** the band SHALL have a `#007AFF` background with white heading
  "Start building your own job board now"
- **AND** SHALL show "Search Job" and "Post a Job" buttons

### Requirement: Footer

The system SHALL render a four-column footer with link widgets, a
copyright bar, social icons, and the mandatory Component Dock link.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** SHALL be brand + pera, "Quick Links" (Work, Services,
  Products, Tips & Tricks), "For Employers" (Air freight, Ocean freight,
  Large projects, Job Packages), and "For Candidates" (Browse Jobs, Ocean
  freight, Candidate Dashboard, Large projects, Job Alerts)

#### Scenario: Copyright bar

- **GIVEN** the footer bottom bar
- **WHEN** rendered
- **THEN** SHALL show "© 2026 Hiredly — Job Board · All rights reserved"
- **AND** SHALL link https://www.componentdock.com/ ("Component Dock")

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh hiredly`)
- [ ] Design tokens from this spec applied in `@theme` (brand-blue
      `#007AFF`, ink `#18304B`, ink-dark `#071112`, light `#F6F9FC`,
      sticky-blue `#E1EEFF`, tag colors, gradient-btn)
- [ ] Chivo + Overpass loaded via Google Fonts `<link>` in index.html
- [ ] Section structure + order matches the live DOM 1:1 (header → hero →
      jobs → services → pricing → why-different → subscribe → CTA →
      footer)
- [ ] Placeholder images via `https://picsum.photos/seed/hiredly-<n>/<w>/<h>`
      (hero bg + hero man, about image); NO assets copied from ColorLib
- [ ] Icons from lucide-react (Pen, Flag, Briefcase, Users, Rocket,
      ShieldCheck, Clock, Headset, BadgeCheck, social icons) — no
      fontawesome/themify/flaticon
- [ ] Interactivity client-side only: tabs, mobile menu, search +
      newsletter submit → success state (no owl-carousel/slicknav/
      nice-select/jquery)
- [ ] Footer links Component Dock (https://www.componentdock.com/)
- [ ] No colorlib.com / preview.colorlib.com strings in any app file
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL (hiredly.free.componentdock.com) returns 200
