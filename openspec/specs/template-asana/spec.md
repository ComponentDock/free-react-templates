# Template: Asana (Yoga & Wellness Landing)

## Purpose

Asana is a single-page yoga studio landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Yogalax"
template (see TEMPLATES.md, Beauty category), built under the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a calm, white-and-pink wellness landing: a transparent
navbar over a full-height hero photo with a soft pink gradient, a "Do Yoga
today for a better tomorrow" headline and a rounded "15 Day Free Trial"
button, then a section flow of intro → services → class packages →
membership pricing → testimonials → stats counter → blog → gallery → pink
footer. Asana recreates that structure section-for-section with matching
layout, colors, typography, and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Yogalax" is FORBIDDEN as the app
> name. **Asana** (Sanskrit for a yoga posture — the meditation/yoga theme)
> is the new, original name — single lowercase word, no collision with
> `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md (verified
> 2026-08-09; "prana" was taken by a sibling spec). Source slug + preview
> URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Yogalax" — free Bootstrap yoga studio website
  template (ColorLib page title: "Yogalax - Free Bootstrap 4 Yoga Template
  By Colorlib"). Category in TEMPLATES.md: **Beauty (28)**. The recreation
  brands itself **Asana** but keeps the same section structure, nav, copy
  kinds and pink-and-white design.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://preview.colorlib.com/theme/yogalax/` (HTTP 200, 36.9 KB HTML +
  `css/style.css` 69.9 KB, custom section from line ~1554). The
  TEMPLATES.md screenshot (`yogalax-free-template.jpg`, 1200×946) matches
  the live render's design language (screenshot shows the pre-scroll hero
  with a slightly different CTA copy — see note below).
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.ftco-navbar-light`) — transparent, `position:
absolute; top: 10px`, over the hero, `z-index: 3`. Brand "Yogalax"
     (22px, weight 300, uppercase, letter-spacing 2px; the brand `<span>`
     is pink `#d291bc`, 28px). Nav links 14px, weight 300, padding
     `20px` x/y: Home, Classes, Schedule, About, Blog, Contact; active
     item pink with a pink underline (`:after`). On scroll the navbar
     gains `.scrolled`: fixed, white bg, `box-shadow: 0 0 10px 0
rgba(0,0,0,0.1)` (with `.sleep`/`.awake` hide-on-scroll-down /
     show-on-scroll-up states). ≤991px: black solid bg, white links,
     brand white; hamburger toggler with uppercase "MENU"-style text.
  2. **Hero** (`section.hero-wrap.js-fullheight`) — full-height
     (`min-height` = viewport), `background-image: url('images/bg_2.jpg')`
     (woman meditating on a mat), `background-size: cover`; `.overlay`
     div: 45deg gradient `#d291bc → rgba(255,255,255,0)`, width 68%
     (100% ≤991px), opacity .3. Content (`.slider-text`): `h1` "Do Yoga
     today for a better tomorrow" — 80px, weight 200, black; and a
     `btn-primary` "15 Day Free Trial" — `#d291bc` bg, white text,
     `border-radius: 30px`, `border: 1px solid rgba(255,255,255,0.4)`;
     hover → white bg, black text. (⚠ The TEMPLATES.md screenshot shows
     "10 Day Free Trial" but the live DOM — source of truth — reads "15
     Day Free Trial".)
  3. **Intro** (`section.ftco-section.ftco-intro`) — white bg,
     `container > row.justify-content-end > col-md-6` (text right-aligned
     column): `h2` "Why You Should Go To Yoga" (60px, weight 300, black)
     - one lorem paragraph (body copy `#b3b3b3`, 16px, line-height 1.8).
       (The screenshot shows a yoga-pose photo beside this section; the
       live DOM renders text-only — follow the DOM.)
  4. **Services** (`section.ftco-section-services.bg-light`, bg
     `#fafafa`) — 4 cards in a `row` of `col-md-3`: each `.services` has
     an `.icon` circle (100×100px, `background: #f7ebf3`, radius 50%,
     flaticon glyph 44px `#d291bc`), `h3` title (20px, weight 500) and a
     lorem paragraph: **Healthy Lifestyle, Body & Mind Balance,
     Meditation Practice, Edeology** (sic — keep or fix to
     "Ideology").
  5. **Class packages** (`section.ftco-section`) — white bg; heading:
     `.subheading` "Yoga Classes" (16px, uppercase, letter-spacing 3px,
     `#b3b3b3`) + `h2` "Choose Your Level & Focus" (60px, weight 300). 6
     `.package-program` cards (3×2 grid, `col-md-4`): 400px image tile,
     hover → full-tile `#d291bc` overlay fading to opacity .5 + white
     text fading in (`h3` 30px weight 500 + lorem): **Group Lessons,
     Yoga For Beginners, Yoga For Pregnant, Yoga For Couples, Bikram
     Yoga, Yoga Barre**.
  6. **Pricing** (`section.ftco-section.bg-light`) — heading:
     `.subheading` "Pricing Tables" + `h2` "Membership Cards". 3 cards
     (`col-md-4`): **Year Card** — `$449` "For 1 Year"; **Monthly Card**
     — `$200` "For 1 Month"; **Weekly Card** — `$85` "For 1 Week". Each
     card: title, price (`$` + number), "For N" label, subheading "Enjoy
     All The Features", a 4-item feature list (Year: Onetime Access To
     All Club, Group Trainer, Book A Group Class, Fitness Orientation;
     Monthly: Group Classes, Discuss Fitness Goals, Group Trainer,
     Fitness Orientation; Weekly mirrors this kind of list), and a "Get
     Started" button.
  7. **Testimonials** (`section.ftco-section.testimony-section`) — white
     bg; heading `.subheading` "Testimony" + `h2` "Successful Stories".
     An Owl Carousel (`#carousel-testimony`) of 5 `.testimony-wrap`
     slides: 110px circular user photo, lorem quote (text `rgba(0,0,0,
0.8)`), `.name` (18px weight 500 black) + `.position` (13px), and a
     40px `#d291bc` quote-bubble circle overlapping the avatar's left
     edge; hover-reveal prev/next arrows + pink gradient dots.
  8. **Stats counter** (`section.ftco-counter.ftco-bg-dark.img`) — dark
     band: bg `#090808` + background photo + 45deg pink gradient overlay
     (`#section-counter` .overlay, opacity .8). 4 `counter-wrap` blocks
     (col-lg-3), each: 80px circle icon with a 1px `#d291bc` ring
     (`.icon:after`), a big animated number (jQuery
     `animateNumber`; DOM starts at 0) and a label: **Happy Customers,
     Yoga Workshops, Years of Experience, Lesson Conducted**.
  9. **Blog** (`section.ftco-section.bg-light`) — heading: `.subheading`
     "Blog" + `h2` "Recent Posts". 3 `.blog-entry` cards (image tile via
     CSS bg, not `<img>`): date block (e.g. "31 December 2018", "27
     December 2018", "25 December 2018"), `h3` title "Young Women Doing
     Yoga", lorem paragraph, read-more link.
  10. **Gallery** (`section.ftco-gallery.ftco-section`) — heading:
      `.subheading` "Gallery" + `h2` "See the latest photos". 6 `.gallery`
      tiles (270px tall, CSS bg images), hover → 60px `#d291bc` circle
      icon fading in (magnific-popup lightbox zoom cursor).
  11. **Footer** (`footer.ftco-footer`) — **pink** `#d291bc` bg + `.overlay`
      gradient; 3 columns: `h1.logo` "Yogalax" (30px, weight 300, white),
      `h2.location` "203 Fake St. Mountain View, San Francisco,
      California, USA" (24px, white 0.9), and social icon circles
      (50px, bg `rgba(255,255,255,0.05)`, radius 50%: twitter, facebook,
      instagram glyphs 26px white); centered copyright line: "All rights
      reserved | This template is made with ♥ by Colorlib" (white 0.7).
- **JS behaviors (original):** Bootstrap navbar scroll state
  (`scrolled`/`sleep`/`awake`), Owl Carousel testimonial slider (nav
  arrows + dots), jQuery `animateNumber` counters on scroll into view,
  AOS scroll-reveal animations (`aos` attributes), magnific-popup gallery
  lightbox, a typewrite effect class in the hero CSS, Google Maps script
  (`google-map.js` + `#map` — CSS exists but no map section is rendered in
  this page). Recreate in React: sticky navbar with scroll-state
  styling, testimonial carousel (index-based or sibling carousel pattern),
  count-up on view (IntersectionObserver), optional lightbox; skip the
  map (not rendered in the source page).
- **Visual design (TEMPLATES.md screenshot `yogalax-free-template.jpg`,
  1200×946, viewed in browser 2026-08-09 + live DOM):** minimalist,
  serene wellness aesthetic. Soft pink `#d291bc` accents on white and
  near-white `#fafafa`; very thin (weight 200/300) large black headlines;
  grey `#b3b3b3` body copy; hero is a pale-pink gradient band (left)
  over a photo of a woman meditating (right), headline + rounded mauve
  CTA on the left. Icon circles and avatars are round; cards are square
  (no radius). The pink/mauve + white + black palette and thin sans-serif
  typography are the whole identity — calm, airy, high-end studio feel.

## Design tokens (from `css/style.css`, verified 2026-08-09)

- **Fonts:** "Work Sans" (body 400, 16px, line-height 1.8; headings
  weight 300 / hero 200; subheads weight 500). Load via Google Fonts
  `<link>` in `index.html` (weights 200, 300, 400, 500).
- **Brand colors:**
  - `#d291bc` — mauve/pink brand: links, active nav + underline, hero
    gradient overlay, `.btn-primary` bg, services icon glyphs, package
    hover overlay, testimonial quote bubble + dots, counter ring,
    footer bg, gallery hover circle.
  - `#f7ebf3` — light pink: services icon circle background.
  - `#090808` — near-black: stats counter band background (with photo +
    pink overlay).
  - `#000` — headings, nav links, hero h1.
  - `#b3b3b3` — body copy, subheading text.
  - `#fafafa` — light section backgrounds (services, pricing, blog).
  - `#fff` — default bg, card text, footer text.
  - `rgba(255,255,255,0.05)` — footer social circle bg.
- **Schedule-table palette (CSS only — no schedule section is rendered in
  this page; keep for reference, do not build a schedule section):**
  `#7acfdf`, `#26baee`, `#fb929e`, `#12e6c8`, `#a287f4` (row color
  classes `color-1..5`).
- **Radii:** buttons in hero 30px (`.btn-primary` inside `.hero-wrap`);
  base `.btn` 2px; icons/avatars/social circles 50%; cards, inputs and
  gallery tiles square (0).
- **Spacing:** `.ftco-section` padding `7em 0` (6em ≤767px); nav link
  padding `1.5rem 20px` (0.9rem mobile); services icon 100px circle,
  text `mt-4`; package image 400px; gallery tile 270px; counter icon
  80px, `mb-5`; footer `padding: 4em 0`; heading-section h2 margin-bottom
  0.5rem, subheading margin-bottom 5px.
- **Typography scale:** hero h1 80px (200); section h2 60px (300; 28px
  ≤767px); package h3 30px (500); services h3 20px (500); coach/testimony
  name 18px (500); subheading 16px uppercase letter-spacing 3px `#b3b3b3`;
  nav links 14px (300); body 16px `#b3b3b3`.
- **Responsive:** ≤991px — navbar solid black bg, hero overlay full
  width, section paddings hold; ≤767px — section h2 → 28px, `.ftco-section`
  padding 6em 0, counter/blog/gallery cards stack full-width.
- **Form styles (defined in CSS, unused in this page's DOM — the footer
  has no form):** `.form-control` height 58px, 1px `rgba(0,0,0,0.08)`
  border, radius 0, focus border `#d291bc`.

## Requirements

### Requirement: Transparent navbar over hero

The system SHALL render a transparent navbar absolutely positioned over
the hero (top 10px, z-index 3) with the brand "Asana" (uppercase, 22px,
weight 300, letter-spacing 2px, pink brand accent) and links Home,
Classes, Schedule, About, Blog, Contact (14px, weight 300); the active
link SHALL be pink with a pink underline. On scroll the navbar SHALL
become fixed with a white background and `0 0 10px rgba(0,0,0,0.1)`
shadow. Below 992px the navbar SHALL have a solid black background with
white links and a collapsible menu.

#### Scenario: Navbar over hero

- **GIVEN** the Asana page is rendered at the top of the page
- **WHEN** the page loads
- **THEN** a transparent navbar SHALL overlay the hero showing the brand
  "Asana" and links Home, Classes, Schedule, About, Blog, Contact
- **AND** the Home link SHALL be highlighted in pink `#d291bc` with a
  pink underline

#### Scenario: Navbar after scroll

- **GIVEN** the Asana page is rendered
- **WHEN** the user scrolls down past the hero
- **THEN** the navbar SHALL become fixed to the top with a white
  background and a subtle `0 0 10px rgba(0,0,0,0.1)` shadow

#### Scenario: Mobile navbar

- **GIVEN** the Asana page is rendered on a viewport ≤991px
- **WHEN** the page is displayed
- **THEN** the navbar SHALL have a black background and white links
- **AND** the menu SHALL collapse behind a toggle that expands the links

### Requirement: Full-height hero with pink gradient overlay

The system SHALL render a full-viewport hero with a meditation photo
background (cover) and a 45-degree gradient overlay
`#d291bc → rgba(255,255,255,0)` (opacity 0.3, width 68% on desktop, 100%
below 992px) sweeping from the left.

#### Scenario: Hero presentation

- **GIVEN** the Asana page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL fill the viewport height with a background
  photo (placeholder — never the ColorLib asset)
- **AND** a soft pink 45-degree gradient SHALL overlay the left 68% of
  the hero at 0.3 opacity (100% width below 992px)

### Requirement: Hero headline and trial CTA

The system SHALL render the hero headline "Do Yoga today for a better
tomorrow" (80px, weight 200, black) and a "15 Day Free Trial" button —
`#d291bc` background, white text, 30px border radius, 1px
`rgba(255,255,255,0.4)` border — that inverts to a white background with
black text on hover. (Note: the TEMPLATES.md screenshot reads "10 Day
Free Trial"; the live DOM — source of truth — reads "15 Day Free Trial".)

#### Scenario: Hero content

- **GIVEN** the Asana page is rendered
- **WHEN** the hero section is displayed
- **THEN** the headline "Do Yoga today for a better tomorrow" SHALL be
  shown in thin (weight 200) 80px black text
- **AND** a button reading "15 Day Free Trial" SHALL be shown with a
  `#d291bc` background, white text and 30px border radius
- **AND** hovering the button SHALL change its background to white and
  its text to black

### Requirement: Intro section

The system SHALL render a white intro section with a right-aligned
`col-md-6` block containing the heading "Why You Should Go To Yoga"
(60px, weight 300) and a short paragraph of intro copy (16px,
`#b3b3b3`).

#### Scenario: Intro layout

- **GIVEN** the Asana page is rendered
- **WHEN** the intro section is displayed
- **THEN** a heading reading "Why You Should Go To Yoga" SHALL be shown
- **AND** a supporting paragraph SHALL be shown beneath it in grey
  `#b3b3b3` body text

### Requirement: Services grid

The system SHALL render a light (`#fafafa`) section with four service
cards in a 4-column grid (2×2 on tablet, stacked on mobile), each with a
100px round light-pink (`#f7ebf3`) icon circle (44px pink glyph), a 20px
weight-500 title and a short blurb: Healthy Lifestyle, Body & Mind
Balance, Meditation Practice, Edeology (the original's spelling; the
recreation MAY fix it to "Ideology").

#### Scenario: Services cards

- **GIVEN** the Asana page is rendered
- **WHEN** the services section is displayed
- **THEN** four service cards SHALL be shown in a responsive grid
- **AND** each card SHALL have a 100px round `#f7ebf3` icon circle with
  a pink `#d291bc` icon, a title and a blurb

### Requirement: Class packages grid

The system SHALL render a section with subheading "Yoga Classes" and
heading "Choose Your Level & Focus", followed by six class cards in a
3-column grid, each with a 400px image tile that reveals a `#d291bc`
overlay (0.5 opacity) and white text (title 30px weight 500 + blurb) on
hover: Group Lessons, Yoga For Beginners, Yoga For Pregnant, Yoga For
Couples, Bikram Yoga, Yoga Barre.

#### Scenario: Package cards and hover

- **GIVEN** the Asana page is rendered
- **WHEN** the class packages section is displayed
- **THEN** a subheading "Yoga Classes" and heading "Choose Your Level &
  Focus" SHALL be shown
- **AND** six class cards SHALL be shown in a 3-column grid, each with a
  400px image tile and a title
- **AND** hovering a card SHALL fade in a pink `#d291bc` overlay and
  white text over the image

### Requirement: Membership pricing

The system SHALL render a light section with subheading "Pricing Tables"
and heading "Membership Cards", and three membership cards — Year Card
($449, For 1 Year), Monthly Card ($200, For 1 Month), Weekly Card ($85,
For 1 Week) — each showing a price, a duration label, a "Enjoy All The
Features" line, a four-item feature list and a "Get Started" button.

#### Scenario: Pricing cards

- **GIVEN** the Asana page is rendered
- **WHEN** the pricing section is displayed
- **THEN** three cards SHALL be shown titled Year Card, Monthly Card and
  Weekly Card
- **AND** each card SHALL show its price ($449 / $200 / $85), duration
  ("For 1 Year" / "For 1 Month" / "For 1 Week"), a four-item feature
  list and a "Get Started" button

### Requirement: Testimonials carousel

The system SHALL render a section with subheading "Testimony" and heading
"Successful Stories" and a carousel of testimonial slides, each with a
110px round avatar, a quote, a name (18px weight 500) and a position, and
a 40px `#d291bc` quote bubble overlapping the avatar. The carousel SHALL
support next/prev navigation and dots.

#### Scenario: Testimonial slide

- **GIVEN** the Asana page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** a subheading "Testimony" and heading "Successful Stories"
  SHALL be shown
- **AND** a carousel SHALL cycle through testimonial slides, each with
  avatar, quote, name and position
- **AND** the user SHALL be able to move between slides with prev/next
  controls and dots

### Requirement: Stats counter band

The system SHALL render a dark (`#090808`) stats band with a background
photo and a pink gradient overlay (0.8 opacity) containing four counters —
Happy Customers, Yoga Workshops, Years of Experience, Lesson Conducted —
each with an 80px circle icon ringed in 1px `#d291bc` and a number that
counts up when scrolled into view.

#### Scenario: Counters

- **GIVEN** the Asana page is rendered
- **WHEN** the stats section scrolls into view
- **THEN** four counters SHALL be shown labeled Happy Customers, Yoga
  Workshops, Years of Experience and Lesson Conducted
- **AND** each counter's number SHALL count up from 0 to its target
- **AND** each counter SHALL have an 80px round icon with a 1px `#d291bc`
  ring

### Requirement: Blog posts

The system SHALL render a light section with subheading "Blog" and
heading "Recent Posts" and three blog cards, each with an image tile, a
date block, a post title and a blurb.

#### Scenario: Blog cards

- **GIVEN** the Asana page is rendered
- **WHEN** the blog section is displayed
- **THEN** a subheading "Blog" and heading "Recent Posts" SHALL be shown
- **AND** three blog cards SHALL be shown, each with an image, date,
  title and excerpt text

### Requirement: Gallery grid

The system SHALL render a section with subheading "Gallery" and heading
"See the latest photos" and six square-ish image tiles (270px tall) that
reveal a 60px round `#d291bc` icon on hover (lightbox on click).

#### Scenario: Gallery tiles

- **GIVEN** the Asana page is rendered
- **WHEN** the gallery section is displayed
- **THEN** a subheading "Gallery" and heading "See the latest photos"
  SHALL be shown
- **AND** six image tiles SHALL be shown
- **AND** hovering a tile SHALL reveal a 60px round pink `#d291bc` icon

### Requirement: Pink footer

The system SHALL render a `#d291bc` footer with the brand "Asana" (30px,
weight 300, white), the location line "203 Fake St. Mountain View, San
Francisco, California, USA" (24px, white), three round social icon
buttons (twitter, facebook, instagram — `lucide-react`), and a centered
copyright line: "All rights reserved | Template made with ♥" (the
ColorLib credit link is replaced per repo rules — never copy the
original's credit line verbatim).

#### Scenario: Footer content

- **GIVEN** the Asana page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a pink `#d291bc` background
- **AND** it SHALL show the brand, the fake address line, three round
  social icon buttons and a centered copyright line

### Requirement: Responsive behavior

The system SHALL stack all grids to single columns below 768px, reduce
section headings to 28px and section padding to 6em, keep the hero
full-height, and switch the navbar to the black mobile treatment below
992px.

#### Scenario: Mobile layout (≤767px)

- **GIVEN** the Asana page is rendered on a viewport ≤767px
- **WHEN** the page is displayed
- **THEN** section headings SHALL render at 28px and section padding at
  6em
- **AND** the services, packages, pricing, counter, blog and gallery
  grids SHALL stack to a single column
- **AND** the hero SHALL remain full-height with its photo and gradient

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-asana`
- [ ] `scripts/verify-app.sh asana` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with source): transparent navbar over hero →
      full-height hero (photo + 45° pink gradient, h1 80px weight 200,
      "15 Day Free Trial" 30px-radius button) → intro ("Why You Should Go
      To Yoga") → services (4 round-icon cards, `#fafafa` bg) → class
      packages ("Yoga Classes" / "Choose Your Level & Focus", 6 hover-
      overlay cards) → pricing ("Pricing Tables" / "Membership Cards", 3
      cards) → testimonials ("Testimony" / "Successful Stories",
      carousel) → dark stats counter band (4 count-up counters) → blog
      ("Blog" / "Recent Posts", 3 cards) → gallery ("Gallery" / "See the
      latest photos", 6 hover-icon tiles) → pink `#d291bc` footer. NO
      schedule table section (CSS-only in the source, not rendered).
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#d291bc`
      (brand: buttons, links, overlays, footer), `#f7ebf3` (icon circles),
      `#090808` (counter band), `#b3b3b3` (body), `#fafafa` (light
      sections), `#000` (headings)
- [ ] Fonts: Work Sans 200/300/400/500 via Google Fonts `<link>` in
      `index.html`, title "Asana — Yoga & Wellness Template"
- [ ] Images via `https://picsum.photos/seed/asana-<n>/<w>/<h>` (hero
      1920×1080, packages 800×400, gallery 600×600, blog 800×600,
      avatars 220×220) — NEVER copy ColorLib assets
- [ ] Interactions: sticky navbar with scroll state, testimonial
      carousel (prev/next + dots), counters count up on scroll into view
      (IntersectionObserver), gallery hover icon (+ optional lightbox),
      mobile nav toggle; icons from `lucide-react`
- [ ] Copy kinds kept: "Do Yoga today for a better tomorrow", "15 Day
      Free Trial", "Why You Should Go To Yoga", four service titles,
      "Choose Your Level & Focus" + six class titles, "Membership Cards" + Year/Monthly/Weekly cards + "Get Started", "Successful Stories",
      four counter labels, "Recent Posts", "See the latest photos",
      fake address; ColorLib credit replaced per repo rules
- [ ] Mobile (≤767px): single-column grids, 28px headings, 6em padding;
      navbar black treatment ≤991px
