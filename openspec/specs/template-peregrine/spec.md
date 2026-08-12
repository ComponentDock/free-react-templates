# Template: Peregrine (Travel)

## Purpose

Peregrine is a single-page travel agency / tour booking template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Traveland" travel HTML template design (see TEMPLATES.md,
line 518 under **Bootstrap (216)** — duplicate rows at line 1494 under
**Creative (55)** and line 3004 under **Travel (44)**, same template, ONE
app only), built under a different name ("Peregrine" — a traveler; from
Latin _peregrinus_, matching the source's travel-agency positioning) with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
(strict). No ColorLib references in app code — provenance lives in this
spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Traveland" — free travel / tour booking HTML
  template (source: https://colorlib.com/wp/template/traveland/). Single
  page: a dark scroll-aware navbar (transparent over the hero at top with
  white links; on scroll it becomes a FIXED WHITE bar with black text),
  a full-viewport hero (tropical-coast photo under a purple-blue gradient
  overlay, right-aligned white headline), a dark `#232931` search panel
  that sits directly under the hero (Destination / Check-in date /
  Check-out date / Price Limit fields + gold "Search" button), a "Best
  Place to Travel" section (4 destination photo cards with white price
  badges, "15 Days Tour" labels, gold star ratings + review counts), an
  "Activities" services section on light grey (4 icon + text blocks),
  an "About Traveland" split section (photo left + heading + 2×2 grey
  counter boxes: 30 Amazing Deals / 200 Sold Tours / 2500 New Tours /
  40 Happy Customers), a "Hotel & Restaurant" section (3 price cards),
  a reversed "Things to Know Before Traveling to other Places" split
  (photo right + 3 numbered tips + gold "Read more" button), a "Happy
  Traveler Says" testimonial carousel on a dark overlay background (5
  traveler-photo cards with quote + name + position), a "Recent Stories"
  blog section (3 cards with big gold day-number date blocks), a
  "Subscribe to our Newsletter" band (dark bg, email input + gold
  Subscribe), and a dark `#222831` footer (4 columns: brand + socials /
  Infromation links / Experience links / Have a Questions? contact) with
  a bottom copyright bar crediting **Component Dock** (replaces the
  source's Colorlib credit).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/traveland/`. DOM fetched
  (`/tmp/prep-traveland/preview.html`, 39,485 bytes, `<title>Traveland -
Free Bootstrap 4 Template by Colorlib</title>`) + stylesheet
  `css/style.css` (`/tmp/prep-traveland/style.css`, 73,418 bytes) +
  flaticon icon font (`css/flaticon.css`) + TEMPLATES.md screenshot
  (`traveland-free-template.jpg`) + live browser inspection (computed
  styles verified in-browser, incl. footer heading = white 18px 600 on
  `#222831`, navbar transparent-at-top / white-scrolled behavior).
- **Visual design (screenshot + live DOM + browser):** modern "ftco"
  travel-agency aesthetic — a full-screen tropical-coast hero photo
  (Santorini-style white buildings / beach / palm trees) dimmed by a
  **purple-blue gradient overlay** (`#6b75ff → #59b7ff`, 45deg, opacity
  .3) with a huge white bold headline ("Be a Traveler not a Tourist")
  right-aligned; the ONLY saturated accent is **gold `#ffb400`** (Book
  Now pill, Search button, star ratings, blog day numbers, Subscribe /
  Read more buttons, active nav link, price-badge hover). Surfaces are
  white / light-grey (`#f8f9fa`) body sections, a **dark `#232931`**
  search panel + testimonial overlay, and a **dark `#222831`** footer.
  Icons in the services section render in the purple-blue gradient text
  (60px glyphs). Source copy is placeholder/Lorem with typos
  ("Infromation", "Subcribe", "Swetzerland") — paraphrase freely and fix
  typos, keep the same content kinds.

## Design tokens (from `css/style.css` of the live preview, computed-verified)

- **Gold / brand:** `#ffb400` — `.nav-item.cta > a` (Book Now pill) bg,
  `.search-property-1 .form-control.btn` (Search button) bg,
  `.star span` color, `.blog-entry .day` color, `.subscribe-form .submit`
  bg, `.btn.btn-primary` (Read more) bg, `.project:hover .price` bg,
  `.ftco-navbar-light.scrolled .nav-item.active > a` color.
- **Ink dark / panel:** `#232931` — `.search-wrap-1` background (radius
  5px, shadow `0 75px 94px -66px rgba(0,0,0,0.66)`), `.testimony-section
.overlay` (opacity .9), subscribe band overlay.
- **Footer dark:** `#222831` — `.ftco-footer` background (7em padding;
  footer-2 variant adds `margin-top: -6em; padding-top: 10em` so it
  overlaps the subscribe band).
- **Gradient:** `#6b75ff → #59b7ff` (45deg) — `.hero-wrap .overlay`
  (opacity .3), `.services .icon span` text gradient (60px glyphs;
  `color: #ffb400` fallback).
- **Headings / text:** `rgba(0,0,0,0.8)` — `.heading-section h2` (40px, 700) + `.block-6.services .heading` (18px); `#000` — `.project .text
h3` (20px 600), `.ftco-counter .text strong.number` (28px 600),
  `.blog-entry .text .heading` (20px 600); `#fff` — `.slider-text h1`
  (64px 700, lh 1.2), `.heading-section.heading-section-white h2`,
  `.navbar-brand` at top.
- **Muted:** `rgba(0,0,0,0.2)` — `.project .text span` (14px, uppercase,
  letter-spacing 2px); `rgba(0,0,0,0.3)` — `.project .rate a` review
  count; `rgba(255,255,255,0.4)` — footer widget links; `rgba(255,255,
255,0.7)` — footer paragraphs / bottom bar; `rgba(255,255,255,0.8)` —
  search labels (18px), blog `.yr`/`.mos` (13px).
- **Surfaces:** `#fff` body + `.project .price` badge (absolute, top
  -25px, right 10px); `#f8f9fa` (`bg-light`) — services section + `.block-18`
  counter boxes (py-5, centered); `rgba(0,0,0,0.05)` — subscribe email
  input bg (height 70px, 20px text, radius 5px 0 0 5px).
- **Font:** Google **Poppins** (body `font-family: "Poppins", Arial,
sans-serif`, 16px, line-height 1.8 — loaded via a Google Fonts
  `<link>` in `index.html`).
- **Buttons:**
  - `.nav-item.cta > a` (Book Now) — gold `#ffb400` bg, white text,
    radius 2px, padding 12.8px 18px, 1px gold border.
  - `.search-property-1 .form-control.btn` (Search) — gold bg, BLACK
    text (`#000 !important`), padding 22px 10px, 16px, no radius.
  - `.btn.btn-primary` (Read more) — gold bg, white text, radius .25rem
    (4px), padding 16px 48px (`py-3 px-5`), hover inverts (transparent +
    gold text).
  - `.subscribe-form .submit` (Subscribe) — gold bg, white text, radius
    0 5px 5px 0, 16px, height matches the 70px input.
- **Navbar (`.ftco-navbar-light`):** at top — `position: absolute`,
  transparent bg, WHITE brand + white 15px nav links (hover `#000`
  desktop variant / gold active), gold Book Now pill right (desktop
  only; hidden on mobile in favor of a hamburger toggler, uppercase
  letter-spaced). On scroll (`.scrolled`) — `position: fixed`, bg
  `#fff`, black brand + black links, gold active + gold Book Now.
  Mobile: `navbar-toggler` hamburger expands a collapsed menu (Bootstrap
  collapse in the source → React state toggle).
- **Hero (`.hero-wrap.js-fullheight`):** full-viewport (height 100%,
  cover, `background-position: top center`) photo
  (`images/bg_1.jpg` = tropical coast) + `.overlay` gradient
  (see Gradient, opacity .3); content row `justify-content-end`
  (RIGHT-aligned), col-md-7: h1 (64px 700 white lh 1.2, mb-4) + p
  (mb-4, white).
- **Search panel (`.search-wrap-1`, `p-4`):** bg `#232931`, radius 5px,
  big drop shadow; 5 equal columns: 4 labeled fields (label 18px
  `rgba(255,255,255,0.8)`; `.form-control` transparent bg, `rgba(255,
255,255,0.4)` text, `padding-left: 20px`; leading icon in `.form-field
.icon` — Search / Calendar / Calendar / ChevronDown) + the Search
  submit. Price Limit is a native `<select>` ($5,000 → $2,000,000,
  14 options) wrapped in `.select-wrap`.
- **Destination / hotel cards (`.project`):** photo top; `.text`
  (padding 1.5em 0 0): h4.price badge (white pill, absolute `top:
-25px; right: 10px`, 20px 600, `rgba(0,0,0,0.8)` text; hover → gold)
  - span label (uppercase 14px ls 2px `rgba(0,0,0,0.2)`) + h3 title
    (20px 600) + `.star` row (5 gold `ion-ios-star` + `.rate a` "(120)"
    `rgba(0,0,0,0.3)`); decorative `.icon.image-popup` expand link on
    hover (magnific-popup lightbox in the source — can be omitted or
    recreated as a decorative expand icon).
- **Testimonials (`.testimony-wrap`):** 600px tall, traveler-photo
  background + dark overlay, padding 4em; `.text` (width 50%): quote p
  - `.name` + `.position`. Owl-carousel in the source → React
    carousel (5 slides; prev/next or dots).
- **Blog cards (`.blog-entry`):** `.block-20` = photo block
  (background-image); date block `.topp` absolute (top -5em, left 1em):
  `.one` 60px wide with `.day` (50px, weight 300, gold) + `.two` with
  `.mos` "February" and `.yr` "2019" (13px, `rgba(255,255,255,0.8)` —
  reads white ON the photo); heading (20px 600 black).
- **Footer (`.ftco-footer.ftco-footer-2`):** bg `#222831`, `margin-top:
-6em` (overlaps the subscribe band), 4 `.ftco-footer-widget` columns
  (col-md): brand + about p + `.ftco-footer-social` (3 circle links,
  50px, bg `rgba(255,255,255,0.05)`, radius 50% — twitter /
  facebook / instagram) · "Infromation" 6 links · "Experience" 6 links ·
  "Have a Questions?" `.block-23` (MapPin address 203 Fake St. Mountain
  View, San Francisco, California, USA / phone +2 392 3929 210 / email
  info@yourdomain.com); bottom bar centered: "Copyright © All rights
  reserved | This template is made with ♥ by **Component Dock**" →
  https://www.componentdock.com/ (replaces the source's Colorlib link;
  NO ColorLib credit).
- **Mobile:** the source uses Bootstrap collapse (hamburger), bootstrap-
  datepicker (check-in/out date inputs), nice-select-free native select
  for price, owl-carousel (testimonials), magnific-popup, AOS/scrollax
  (parallax fades) and a counter-up script (animated numbers) — implement
  with React state: a mobile nav toggle, a simple testimonial carousel,
  native `<select>`, static or count-up counters (count-up optional),
  and scroll listeners for the navbar (transparent→white) only where
  cheap. Stack the 4-card rows to 1–2 columns below `lg`.
- **Placeholder images:** `https://picsum.photos/seed/peregrine-<n>/<w>/<h>`.
  Photo slots: hero background (tropical coast — screen a beach/palm
  seed), destination-1..4 (varied travel scenes), about.jpg (travel
  photo), hotel-resto-1..3, traveler-1..5 (testimonial bg photos),
  image_1..3 (blog), bg_1 (testimony + subscribe band background). Icons
  from `lucide-react` (Search, Calendar, ChevronDown, Star, MapPin,
  Phone, Mail, Compass, Plane, Map, Flag, Menu, X, ChevronLeft,
  ChevronRight, Expand/Maximize2) + inline SVG brand icons for the 3
  footer socials (Twitter/Facebook/Instagram — lucide removed brand
  icons).

## Requirements

### Requirement: Header — scroll-aware navbar with Book Now pill

The system SHALL render a navbar with the brand on the left, six nav
links (Home, About, Destination, Hotels & Restaurant, Blog, Contact), and
a gold "Book Now" pill on the right (desktop only). At the top of the
page the navbar SHALL be transparent with white text over the hero; on
scroll it SHALL become a fixed white bar with black text. On mobile a
hamburger SHALL open the same nav links.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the top of the page is inspected
- **THEN** it shows the brand, the six nav entries (Home first), and the
  gold "Book Now" button on the right

#### Scenario: Scroll state

- **GIVEN** the page is rendered at the top
- **WHEN** the page is scrolled down
- **THEN** the navbar becomes fixed with a white background and dark text

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** the nav links appear and can be closed again

### Requirement: Hero banner

The system SHALL render a full-viewport hero with a travel-photo
background under a purple-blue gradient overlay, a large white headline
"Be a Traveler not a Tourist" right-aligned, and a white supporting
paragraph.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is inspected
- **THEN** it shows the headline "Be a Traveler not a Tourist" in large
  white type
- **AND** a supporting paragraph below it

### Requirement: Search panel

The system SHALL render a dark `#232931` search panel directly below the
hero with four labeled fields — Destination (text), Check-in date,
Check-out date (date inputs), Price Limit (select from $5,000 to
$2,000,000) — and a gold "Search" button with black text.

#### Scenario: Search fields

- **GIVEN** the search panel is rendered
- **WHEN** it is inspected
- **THEN** it shows the Destination, Check-in date, Check-out date, and
  Price Limit fields in a row
- **AND** a gold "Search" button at the end

### Requirement: Best Place to Travel section

The system SHALL render a "Best Place to Travel" section with a centered
heading and four destination cards, each showing a photo, a white "$400"
price badge, a "15 Days Tour" label, a destination title, five gold
stars, and a "(120)" review count.

#### Scenario: Destination cards

- **GIVEN** the destination section is rendered
- **WHEN** the cards are inspected
- **THEN** four cards are shown, each with a photo, a price badge, a
  tour-days label, a title, five gold stars, and a review count

### Requirement: Activities services section

The system SHALL render an Activities section on a light-grey background
with four service blocks (Activities, Travel Arrangements, Private
Guide, Location Manager), each showing a gradient icon, a heading, and a
paragraph.

#### Scenario: Service blocks

- **GIVEN** the services section is rendered
- **WHEN** the blocks are inspected
- **THEN** four blocks are shown, each with an icon, a heading, and a
  paragraph

### Requirement: About Traveland section with counters

The system SHALL render a split About section with a photo on the left
and, on the right, the "About Traveland" heading, a paragraph, and a 2×2
grid of grey counter boxes (30 Amazing Deals, 200 Sold Tours, 2500 New
Tours, 40 Happy Customers).

#### Scenario: About content

- **GIVEN** the About section is rendered
- **WHEN** it is inspected
- **THEN** it shows the photo on the left and the heading with a
  paragraph on the right
- **AND** four counter boxes showing the numbers 30, 200, 2500, 40 with
  their labels

### Requirement: Hotel & Restaurant section

The system SHALL render a "Hotel & Restaurant" section with a centered
heading and three price cards, each showing a photo, a white "$600" price
badge, a "300 per person" label, a hotel title, five gold stars, and a
"(120)" review count.

#### Scenario: Hotel cards

- **GIVEN** the hotel section is rendered
- **WHEN** the cards are inspected
- **THEN** three cards are shown, each with a photo, a price badge, a
  per-person label, a title, five stars, and a review count

### Requirement: Things to Know section

The system SHALL render a reversed split section with a photo on the
right and, on the left, the "Things to Know Before Traveling to other
Places" heading, a paragraph, three numbered tips, and a gold "Read
more" button.

#### Scenario: Tips and button

- **GIVEN** the Things-to-Know section is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading, three numbered tips, and a gold "Read
  more" button on the left with the photo on the right

### Requirement: Happy Traveler Says testimonial carousel

The system SHALL render a testimonial section on a dark overlay
background with a centered white "Happy Traveler Says" heading and a
carousel of traveler testimonials, each showing a quote, a name, and a
position.

#### Scenario: Testimonial slides

- **GIVEN** the testimonial section is rendered
- **WHEN** the carousel is inspected
- **THEN** it shows a testimonial card with a quote, a name, and a
  position

#### Scenario: Carousel navigation

- **GIVEN** the testimonial carousel is rendered
- **WHEN** the next/prev controls are activated
- **THEN** the displayed testimonial changes

### Requirement: Recent Stories blog section

The system SHALL render a "Recent Stories" section on a light-grey
background with three blog cards, each showing a photo, a date block
(day, month, year), and a post title.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the cards are inspected
- **THEN** three cards are shown, each with a photo, a date block, and a
  title

### Requirement: Subscribe band

The system SHALL render a dark-background subscribe band with the
heading "Subscribe to our Newsletter", an email input, and a gold
"Subscribe" button.

#### Scenario: Subscribe form

- **GIVEN** the subscribe band is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading, the email input, and the gold
  "Subscribe" button

### Requirement: Footer

The system SHALL render a dark footer with four widget columns (brand +
3 social icons, Infromation links, Experience links, Have a Questions?
contact) and a bottom bar with the copyright line. The credit SHALL read
"This template is made with ♥ by **Component Dock**" linking
https://www.componentdock.com/ (no ColorLib credit).

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the brand column with three social icons, six
  Infromation links, six Experience links, and the contact column with
  address, phone, and email

#### Scenario: Footer credit

- **GIVEN** the footer bottom bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Peregrine app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, search panel, best
  place, activities, about, hotel & restaurant, things to know,
  testimonials, recent stories, subscribe and footer in the correct
  order
- **AND** the document title SHALL be "Peregrine — Travel Template"

## Verification checklist

- [ ] `openspec/specs/template-peregrine/spec.md` validated
      (`npm run spec:validate`)
- [ ] App folder `apps/peregrine`, package
      `@free-react-templates/peregrine`, no ColorLib references in app
      code (grep for colorlib/Traveland in apps/peregrine)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) —
      `bash scripts/verify-app.sh peregrine`
- [ ] Section order matches the source: header → hero → search panel →
      best place to travel → activities → about (+ counters) → hotel &
      restaurant → things to know → happy traveler says → recent
      stories → subscribe → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #ffb400`,
      `--color-panel: #232931`, `--color-footer: #222831`,
      `--color-ink: rgba(0,0,0,0.8)` (or #000), `--color-soft: #f8f9fa`,
      `--color-fade: rgba(0,0,0,0.3)`; gradient
      `#6b75ff → #59b7ff` for hero overlay + services icons; Google
      Fonts `<link>` in `index.html`: Poppins
- [ ] Navbar: transparent at top (white brand/links), fixed white with
      black text on scroll, gold "Book Now" pill (desktop only), mobile
      hamburger → nav toggle
- [ ] Hero: full-viewport travel photo + purple-blue gradient overlay
      (opacity ~.3), right-aligned 64px white headline + paragraph
- [ ] Search panel: dark `#232931` rounded panel, 4 fields
      (Destination text, Check-in / Check-out dates, Price Limit select
      $5,000–$2,000,000) + gold "Search" button with black text
- [ ] Best Place: centered heading + 4 cards (photo + white "$400" badge + "15 Days Tour" label + title + 5 gold stars + "(120)")
- [ ] Activities: bg-light, 4 blocks (icon 60px gradient text + h3 + p):
      Activities, Travel Arrangements, Private Guide, Location Manager
- [ ] About: photo left + "About Traveland" heading + p + 2×2 grey
      counter boxes (30 / 200 / 2500 / 40)
- [ ] Hotel & Restaurant: centered heading + 3 cards ("$600" badge +
      "300 per person" + "New Orleans Hotel" + 5 stars + "(120)")
- [ ] Things to Know: photo right + heading + 3 numbered tips + gold
      "Read more" button
- [ ] Testimonials: dark overlay bg + white "Happy Traveler Says"
      heading + carousel (quote + name + position), prev/next controls
- [ ] Recent Stories: bg-light, heading + 3 blog cards (photo + date
      block day/month/year + title)
- [ ] Subscribe: dark band, "Subscribe to our Newsletter" heading +
      70px email input + gold "Subscribe" button
- [ ] Footer: `#222831` bg, 4 columns (brand + 3 social circles /
      Infromation 6 links / Experience 6 links / Have a Questions?
      address + phone + email) + bottom bar with Component Dock credit + no ColorLib credit
- [ ] Placeholder images via `https://picsum.photos/seed/peregrine-<n>/<w>/<h>`
      (hero bg, 4 destinations, about, 3 hotel-resto, 5 travelers,
      3 blog, bg_1); icons from `lucide-react` + inline SVG brand icons
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/traveland/`), design tokens, diffs
      (name, placeholder images, React carousel + mobile nav instead of
      owl-carousel/Bootstrap collapse, native select instead of
      bootstrap-datepicker, Component Dock footer credit)
