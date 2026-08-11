# Template: Parley (Consulting / Business Landing)

## Purpose

Parley is a single-page consulting-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Negotiate" design (see TEMPLATES.md, Bootstrap (216) category),
built under a DIFFERENT name — **Parley** (a discussion/negotiation between
parties — the consulting theme; single lowercase word, no collision with
`apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified
2026-08-11) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a bold consulting landing page: a white top contact bar
(address / phone / email) over a solid TEAL navbar ("Negotiate — Consulting
Agency" brand, 7 links + search input), a full-bleed photo hero slider
("We Are The Best Consulting Agency" / "We Help to Grow Your Business" with a
teal pill "Our Services" CTA), a white "Free Consulting" quote card that
overlaps the hero (First Name / Last Name / Select Guidance / Phone / Message

- PINK submit) beside a "Negotiate — A Consulting Agency" brand block with a
  2×2 services grid, two blue→teal gradient "You Always Get the Best Guidance"
  intro bands, an About section with Mission/Vision/Value tabs + teal animated
  counters (1387 Happy Clients / 310 Success Reports / 35 Experienced), a
  6-item Case Studies gallery with hover overlay + pink "Request Quote" CTA, a
  6-item "Why Choose Us?" icon grid, a 5-slide testimonials carousel, a 3-post
  blog strip, and a black 4-widget footer with a "Subscribe Us!" newsletter
  form. Parley recreates that structure section-for-section with matching
  layout, colors, typography, and content types (no ColorLib assets copied).

> NOTE (prep-stream 2026-08-11): the official preview
> `https://preview.colorlib.com/theme/negotiate/` is LIVE — fetched HTTP 200
> (~42 KB HTML + `css/style.css` ~87 KB, curl-verified) and analyzed for this
> prep. The TEMPLATES.md screenshot (`negotiate-free-template.jpg`, 1200×946)
> was also viewed in a browser and matches the live render 1:1.

## Design reference (replication findings)

- **Original:** ColorLib "Negotiate" — free Bootstrap 4 consulting-agency
  website template (source: https://colorlib.com/wp/template/negotiate/;
  page title "Negotiate - Free Bootstrap 4 Template by Colorlib"). The
  recreation brands itself **Parley** but keeps the same section structure,
  heading copy kinds, and field set.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/negotiate/` (HTTP 200, ~42 KB HTML +
  `css/style.css` ~87 KB + Bootstrap 4 + owl.carousel + aos + flaticon +
  icomoon + ionicons). Single-page document; section order (1:1):
  1. **Navbar** — `<nav class="navbar navbar-expand-lg navbar-dark bg-dark
ftco-navbar-light">` (SOLID TEAL `#00bdaa` background per
     `.ftco-navbar-light { background: #00bdaa !important; z-index: 3;
padding: 0 }`; transparent-over-hero look is NOT used — the teal bar
     sits ABOVE the hero, and the white contact bar sits ABOVE the navbar):
     - Top bar (`.topper`, inside the navbar container, 3
       `col-md d-flex topper` items): map-marker icon + text **"203 Fake St.
       Mountain View, San Francisco, California, USA"**, phone icon +
       **"+2 392 3929 210"**, envelope icon + **"info@yourdomain.com"**.
     - Brand: `navbar-brand` = **"Negotiate <span>Consulting Agency</span>"**
       (span styled as smaller tagline).
     - Nav links: **Home · About · Team · Case Studies · Services · Blog ·
       Contact** (7 links).
     - Search: a `<form>` in the nav with `input type="text"
placeholder="Search"`.
  2. **Hero slider** — `<section class="home-slider owl-carousel">`, 2
     `.slider-item` slides; each: inline `background-image:url(images/bg_1.jpg)`
     / `bg_2.jpg` photo + `.overlay` (CSS: `background: #000000;
background: #00bdaa` — dark teal-tinted overlay); centered white text:
     `.subheading` **"Negotiate Consulting"** (14px, 700, uppercase, white,
     letter-spacing 2px) → h1 **"We Are The Best Consulting Agency"** /
     **"We Help to Grow Your Business"** (60px, 900, white, line-height 1.2,
     40px ≤991px; inner `<span>` renders as a block line) → pill button
     `btn btn-primary px-4 py-3 mt-3` **"Our Services"**. Carousel dots at
     the bottom center (owl).
  3. **Free Consulting** — `<section class="ftco-section ftco-no-pt
ftco-no-pb ftco-consult">` holding `.consult-wrap` (WHITE card that
     OVERLAPS the section above: `margin-top: -100px` on ≥992px + heavy
     shadow `0px -15px 39px -13px rgba(0,0,0,0.35)`; the section itself is
     `ftco-no-pt ftco-no-pb` so the card visually floats over the hero).
     Two-column row:
     - LEFT (`.row d-flex no-gutters align-items-stretch consult-wrap`):
       h2 **"Free Consulting"** (heading-section style) + `<form>`:
       **First Name** (text) · **Last Name** (text) · **Select Guidance**
       (`<select>`: Select Guidance / Finance / Business / Auto Loan / Real
       Estate / Other Services) · **Phone** (text) · **Message** (textarea,
       rows 2) · submit `input type="submit" value="Request A Quote" class=
"btn btn-secondary py-3 px-4"` — PINK `#f1648f` pill.
     - RIGHT: brand block **"Negotiate"** + tagline **"A Consulting
       Agency"**, then a **2×2 grid of 4 service cards** (`.services`, icon
       circle + h3 + short blurb): **Business Solution · Financial Analysis ·
       Marketing Strategy · Investment Planning** (blurbs are the ColorLib
       lorem: "Far far away, behind the word mountains, far from the
       countries Vokalia."). Icons from flaticon (briefcase/chart/pie/line
       glyphs).
  4. **Intro band #1** — `<section class="ftco-intro ftco-no-pb img">`: bg
     photo + `.ftco-intro:after` overlay `linear-gradient(45deg, #48a7f0
0%, #00bdaa 100%)` at opacity .9 (z-index -1); white h2 **"You Always
     Get the Best Guidance"** + `a.btn-link` **"Request A Quote"** (link
     style) + `a.btn.btn-primary` **"Our Services"**.
  5. **About + counters** — `<section class="ftco-section ftco-about
ftco-no-pt ftco-no-pb ftco-counter">` (`#section-counter`, z-index 0):
     - LEFT `.wrap-about`: `.subheading` **"Welcome to Negotiate"** → h2
       **"The Smartest Thing To Do With Your Consulting Business"** → lead
       paragraph (ColorLib lorem: "Far far away, behind the word mountains,
       far from the countries Vokalia and Consonantia, there live the blind
       texts.") → **tabbed content (`.tabulation`): "Our Mission" · "Our
       Vision" · "Our Value"** — each tab a paragraph of the same lorem.
     - RIGHT: photo (`images/about.jpg`).
     - BELOW: **counter row** — 3 `.counter-wrap` blocks, each `.block-18`
       with a flaticon icon + `<strong class="number" data-number="N">`
       (50px, weight 400, TEAL `#00bdaa`) + label span: **1387 Happy
       Clients · 310 Success Reports · 35 Experienced** (labels verbatim
       from source).
  6. **Case Studies** — `<section class="ftco-section">`: `.subheading`
     **"Projects Done"** → h2 **"Case Studies"** → intro paragraph (lorem) →
     **6 gallery items** (`.gallery`, height 350px, photo backgrounds
     `project-1.jpg` … `project-2.jpg`/`bg_*.jpg`): each shows a
     `.category` tag span (**Consulting · Marketing · Financing · Audit &
     Taxes · Financing · Real Estate**) + h3 **"Consultacy Solutions"**
     (placeholder title repeated) + lorem blurb; hover reveals a teal
     overlay with a 50px icon circle and a PINK `btn-secondary py-3 px-4`
     **"Request Quote"** button.
  7. **Why Choose Us?** — `<section class="ftco-section ftco-no-pt">`:
     `.subheading` **"Services"** → h2 **"Why Choose Us?"** → intro
     paragraph → **6 icon items** (icon + h3 + blurb): **Business Analysis ·
     Business Consulting · Business Insurance · Global Investigation ·
     Audit & Evaluation · Marketing Strategy** (3-col grid, 2 rows).
  8. **Intro band #2** — `<section class="ftco-intro ftco-no-pb img">`:
     identical to #4 — h2 "You Always Get the Best Guidance" + "Request A
     Quote" link + "Our Services" button (repeated band).
  9. **Testimonials** — `<section class="ftco-section testimony-section">`:
     `.subheading` **"Testimonies"** → h2 **"Our Clients Says"** → intro
     paragraph → **owl carousel, 5 slides**; each `.testimony-wrap`: photo
     avatar (circular) + quote paragraph (lorem) + `.name` + `.position`
     (**Racky Henderson — Father · Henry Dee — Businesswoman · Mark Huff —
     Businesswoman · Rodel Golez — Businesswoman · Ken Bosh —
     Businesswoman**; positions verbatim from source). Owl prev/next arrows
     below the carousel.
  10. **Blog** — `<section class="ftco-section">`: `.subheading` **"Blog
      Posts"** → h2 **"Recent Blog"** → intro paragraph → **3 `.blog-entry`
      cards**; each: photo + date badge (**15 · Oct. · 2019**) + h3 heading
      **"Finance And Legal Working Streams Occur Throughout"** (placeholder,
      repeated on all 3) + blurb (lorem) + meta (**Admin · 3**) + **"Read
      More"** link.
  11. **Footer** — `<footer class="ftco-footer ftco-bg-dark ftco-section">`
      (BLACK background, font-size 14px, padding 6em 0), 4 `.ftco-footer-
widget`s:
      - **"Have a Questions?"** — contact block: address (203 Fake St. …),
        phone (+2 392 3929 210), email (info@yourdomain.com) + social icon
        links (Facebook · Twitter · Googleplus — sr-only labels).
      - **"Links"** — Home · About · Services · Projects · Contact.
      - **"Recent Blog"** — 2 mini entries: **"Even the all-powerful
        Pointing has no control about"** + meta **Oct. 16, 2019 · Admin ·
        19** (repeated).
      - **"Subscribe Us!"** — newsletter form: `input type="text"
placeholder="Enter email address"` + `input type="submit"
value="Subscribe"` (btn-primary).
      - Copyright bar: "Copyright © <year> All rights reserved | This
        template is made with ❤ by Colorlib" (rephrase: "© <year> Parley —
        All rights reserved | Free consulting template").
- **Visual design (TEMPLATES.md screenshot `negotiate-free-template.jpg`,
  1200×946, viewed in browser 2026-08-11):** white top bar with bold black
  "NEGOTIATE" logo + "CONSULTING AGENCY" tagline and 3 contact columns;
  solid TEAL nav strip below it (links + search input right); hero = wide
  business-meeting photo with dark overlay, centered white uppercase
  subheading + big white headline + teal pill "Our Services" button;
  carousel dots. Below: left white "Free Consulting" card with teal heading
  and white fields + PINK "Request & Quote" submit; right "Negotiate — A
  Consulting Agency" block + 2×2 service cards (teal icon circles on white).
  The screenshot cuts off after the services grid; the remaining sections
  (about/counters, case studies, why choose us, testimonials, blog, footer)
  were captured from the live DOM + CSS instead. Color story: TEAL `#00bdaa`
  primary (nav, buttons, icons, counters, gradient end), BLUE `#48a7f0`
  (gradient start), PINK `#f1648f` (secondary buttons), white + black
  neutrals.

## Design tokens

From `css/style.css` (verified 2026-08-11):

- **Brand colors:**
  - `#00bdaa` (teal) — PRIMARY: navbar bg, hero overlay tint, `.btn-primary`
    bg, counter numbers, intro gradient end, link/accent color.
  - `#48a7f0` (blue) — intro-band gradient start
    (`linear-gradient(45deg, #48a7f0 0%, #00bdaa 100%)`, opacity .9).
  - `#f1648f` (pink) — `.btn-secondary` ("Request A Quote" submit + case
    study "Request Quote" hover CTA).
  - Neutrals: `#000000` (footer bg, body text), `#fff` (section/nav/card
    bg, hero text), `#212529` (body text), `#6c757d` (muted text),
    `#fafafa` (light section bg).
- **Fonts:** `"Poppins", Arial, sans-serif` throughout (headings 600/900 +
  body; load Poppins via Google Fonts `<link>`).
- **Type scale:** hero h1 60px/900/white (40px mobile); heading-section h2
  34px/600 (28px ≤768px); subheading 14px/600 uppercase (hero variant
  700 + letter-spacing 2px); counter numbers 50px/400; footer 14px.
- **Buttons:** PILL — `.btn { border-radius: 40px; box-shadow: none }`.
  `.btn-primary`: bg `#00bdaa`, 1px solid `#00bdaa`, white text; hover →
  transparent bg + teal text. `.btn-secondary`: bg `#f1648f`, white text.
  `.btn-white`: white bg + teal text. `.btn-link` for the intro "Request A
  Quote" text link.
- **Section backgrounds:** hero = photo + dark teal overlay; intro bands =
  photo + 45° blue→teal gradient (opacity .9) with WHITE content; consult
  card = white, overlapping (-100px top margin ≥992px) + big soft shadow;
  footer = black; others white / `#fafafa`.
- **Radius family:** 40px pill buttons; 50% icon circles / avatars;
  everything else flat (radius 0).
- **Spacing rhythm:** `.ftco-section` padding 7em 0 (variants `ftco-no-pt`
  / `ftco-no-pb`); footer padding 6em 0; counters in a row of 3; service
  cards in a 2×2 grid; why-choose-us in a 3-col grid; blog 3-col.
- **Icons:** flaticon glyphs in the source — recreate with lucide-react
  (briefcase, bar-chart, pie-chart, trending-up, shield, search, map-pin,
  phone, mail, quote, chevrons). Brand icons (Facebook/Twitter/Googleplus)
  are NOT in lucide-react — use inline SVG brand paths per the
  colorlib-template-replication skill.

## Requirements

### Requirement: Top contact bar and teal navbar

The system SHALL render a white top bar above a solid teal navbar. The top
bar SHALL show three contact items (address, phone, email) with icons. The
navbar SHALL show the brand "Parley" with a "Consulting Agency" tagline, the
seven links Home / About / Team / Case Studies / Services / Blog / Contact,
and a search input. The navbar background SHALL be the brand teal `#00bdaa`
(never transparent-over-hero).

#### Scenario: Top bar contact items

- **GIVEN** the Parley page is rendered
- **WHEN** the page loads
- **THEN** a top bar SHALL be shown above the navbar
- **AND** the top bar SHALL contain an address item (map-pin icon +
  "203 Fake St. Mountain View, San Francisco, California, USA")
- **AND** the top bar SHALL contain a phone item (icon +
  "+2 392 3929 210")
- **AND** the top bar SHALL contain an email item (envelope icon +
  "info@yourdomain.com")

#### Scenario: Teal navbar with links and search

- **GIVEN** the Parley page is rendered
- **WHEN** the navbar is displayed
- **THEN** the navbar SHALL have a solid `#00bdaa` teal background
- **AND** the brand SHALL read "Parley" with a smaller "Consulting Agency"
  tagline
- **AND** the navbar SHALL contain links for Home, About, Team, Case
  Studies, Services, Blog, and Contact
- **AND** a search input with placeholder "Search" SHALL be present in the
  navbar

### Requirement: Hero slider

The system SHALL render a full-width hero carousel with exactly two slides.
Each slide SHALL show a background photo with a dark teal overlay, an
uppercase subheading "Parley Consulting", a large white headline, and a teal
pill button "Our Services". Carousel indicators SHALL be shown.

#### Scenario: First slide headline

- **GIVEN** the Parley page is rendered
- **WHEN** the hero carousel loads
- **THEN** the first slide SHALL display the subheading "Parley Consulting"
  in uppercase
- **AND** the first slide SHALL display the headline "We Are The Best
  Consulting Agency"
- **AND** the first slide SHALL display a pill button reading "Our
  Services"

#### Scenario: Second slide headline

- **GIVEN** the hero carousel has advanced to the second slide
- **WHEN** the second slide is shown
- **THEN** the headline SHALL read "We Help to Grow Your Business"
- **AND** the slide SHALL keep the same subheading and "Our Services"
  button

#### Scenario: Slide styling

- **GIVEN** any hero slide is displayed
- **WHEN** the slide renders
- **THEN** a background image SHALL cover the slide with a dark teal
  overlay
- **AND** the headline SHALL be white, large (60px desktop), weight 900
- **AND** the button SHALL be a `#00bdaa` teal pill with white text

### Requirement: Free Consulting card and quote form

The system SHALL render a white card overlapping the hero (negative top
margin ≥992px, soft heavy shadow) split into two columns. The left column
SHALL contain the heading "Free Consulting" and a form with fields First
Name, Last Name, Select Guidance (Finance / Business / Auto Loan / Real
Estate / Other Services), Phone, Message, and a pink "Request A Quote"
submit button. The right column SHALL contain the brand block "Parley — A
Consulting Agency" and a 2×2 grid of four service cards (Business Solution,
Financial Analysis, Marketing Strategy, Investment Planning), each with an
icon and a short blurb.

#### Scenario: Form fields

- **GIVEN** the Free Consulting section is rendered
- **WHEN** the form is displayed
- **THEN** a heading "Free Consulting" SHALL be shown above the form
- **AND** the form SHALL contain First Name and Last Name text inputs
- **AND** the form SHALL contain a select with options Select Guidance,
  Finance, Business, Auto Loan, Real Estate, and Other Services
- **AND** the form SHALL contain a Phone input and a Message textarea
- **AND** the form SHALL have a submit button reading "Request A Quote"
  styled with the pink `#f1648f` background

#### Scenario: Services grid

- **GIVEN** the Free Consulting section is rendered
- **WHEN** the right column is displayed
- **THEN** a brand block SHALL read "Parley" with tagline "A Consulting
  Agency"
- **AND** four service cards SHALL be shown in a 2×2 grid
- **AND** the cards SHALL be titled Business Solution, Financial Analysis,
  Marketing Strategy, and Investment Planning
- **AND** each card SHALL show an icon and a short descriptive blurb

#### Scenario: Overlapping card

- **GIVEN** the page is viewed on a desktop viewport (≥992px)
- **WHEN** the Free Consulting section renders
- **THEN** the white card SHALL overlap the section above it with a
  negative top margin
- **AND** the card SHALL cast a large soft shadow

### Requirement: Intro band (repeated)

The system SHALL render a full-width band showing a background photo with a
45° blue-to-teal gradient overlay (`#48a7f0` → `#00bdaa`, ~90% opacity). The
band SHALL contain the white heading "You Always Get the Best Guidance", a
"Request A Quote" text link, and a teal "Our Services" pill button. The band
SHALL appear twice on the page (after the Free Consulting section and after
Why Choose Us?).

#### Scenario: First intro band

- **GIVEN** the page is rendered
- **WHEN** the section after Free Consulting is displayed
- **THEN** a band with a blue-to-teal gradient overlay SHALL be shown
- **AND** the band SHALL display the white heading "You Always Get the
  Best Guidance"
- **AND** the band SHALL contain a "Request A Quote" link and an "Our
  Services" teal pill button

#### Scenario: Second intro band

- **GIVEN** the page is rendered
- **WHEN** the section after Why Choose Us? is displayed
- **THEN** an identical band SHALL be shown with the same heading and
  buttons

### Requirement: About section with tabs and counters

The system SHALL render an About section with a left content column (sub-
heading "Welcome to Parley", heading "The Smartest Thing To Do With Your
Consulting Business", an intro paragraph, and Mission / Vision / Value
tabs) and a right photo column. Below the columns SHALL be a row of three
animated counters: 1387 Happy Clients, 310 Success Reports, 35 Experienced —
each with an icon, a large teal number, and a label.

#### Scenario: About content and tabs

- **GIVEN** the About section is rendered
- **WHEN** the section is displayed
- **THEN** the subheading SHALL read "Welcome to Parley"
- **AND** the heading SHALL read "The Smartest Thing To Do With Your
  Consulting Business"
- **AND** an intro paragraph SHALL be shown
- **AND** three tabs SHALL be present reading Our Mission, Our Vision, and
  Our Value
- **AND** activating each tab SHALL reveal its own paragraph of content
- **AND** a photo SHALL be displayed beside the content

#### Scenario: Counters

- **GIVEN** the About section is rendered
- **WHEN** the counter row is displayed
- **THEN** three counters SHALL be shown
- **AND** the counters SHALL display 1387 Happy Clients, 310 Success
  Reports, and 35 Experienced
- **AND** each number SHALL be large and teal (`#00bdaa`)
- **AND** each counter SHALL show an icon

### Requirement: Case Studies gallery

The system SHALL render a Case Studies section with the subheading "Projects
Done", the heading "Case Studies", an intro paragraph, and six gallery items
arranged in a grid. Each item SHALL show a photo, a category tag, a title,
and on hover a teal overlay with a pink "Request Quote" button.

#### Scenario: Gallery items

- **GIVEN** the Case Studies section is rendered
- **WHEN** the gallery is displayed
- **THEN** the subheading SHALL read "Projects Done" and the heading SHALL
  read "Case Studies"
- **AND** six gallery items SHALL be shown
- **AND** each item SHALL display a category tag (e.g. Consulting,
  Marketing, Financing, Audit & Taxes, Real Estate) and a title
- **AND** hovering an item SHALL reveal an overlay with a pink "Request
  Quote" button

### Requirement: Why Choose Us icon grid

The system SHALL render a Why Choose Us section with the subheading
"Services", the heading "Why Choose Us?", an intro paragraph, and six icon
items in a three-column grid: Business Analysis, Business Consulting,
Business Insurance, Global Investigation, Audit & Evaluation, and Marketing
Strategy — each with an icon, title, and blurb.

#### Scenario: Feature items

- **GIVEN** the Why Choose Us? section is rendered
- **WHEN** the section is displayed
- **THEN** the subheading SHALL read "Services" and the heading SHALL read
  "Why Choose Us?"
- **AND** six items SHALL be shown in a three-column grid
- **AND** the items SHALL be titled Business Analysis, Business Consulting,
  Business Insurance, Global Investigation, Audit & Evaluation, and
  Marketing Strategy
- **AND** each item SHALL show an icon and a descriptive blurb

### Requirement: Testimonials carousel

The system SHALL render a Testimonials section with the subheading
"Testimonies", the heading "Our Clients Says", an intro paragraph, and a
carousel of five testimonials. Each testimonial SHALL show a circular photo
avatar, a quote paragraph, a name, and a position.

#### Scenario: Testimonial slides

- **GIVEN** the Testimonials section is rendered
- **WHEN** the carousel is displayed
- **THEN** the subheading SHALL read "Testimonies" and the heading SHALL
  read "Our Clients Says"
- **AND** five testimonials SHALL be available in the carousel
- **AND** each testimonial SHALL show an avatar, a quote, a name, and a
  position (e.g. Racky Henderson — Father, Henry Dee — Businesswoman)

### Requirement: Recent Blog strip

The system SHALL render a Blog section with the subheading "Blog Posts", the
heading "Recent Blog", an intro paragraph, and three blog cards. Each card
SHALL show a photo, a date badge (15 Oct. 2019), a post title, a blurb, meta
information (Admin · 3), and a "Read More" link.

#### Scenario: Blog cards

- **GIVEN** the Blog section is rendered
- **WHEN** the section is displayed
- **THEN** the subheading SHALL read "Blog Posts" and the heading SHALL
  read "Recent Blog"
- **AND** three blog cards SHALL be shown
- **AND** each card SHALL display a date badge reading 15 Oct. 2019, a
  title, a blurb, an Admin meta line, and a "Read More" link

### Requirement: Black footer with four widgets

The system SHALL render a black footer with four widgets: "Have a
Questions?" (contact details: address, phone, email + social icons),
"Links" (Home / About / Services / Projects / Contact), "Recent Blog" (two
mini post entries with meta), and "Subscribe Us!" (email input + "Subscribe"
button). A copyright line SHALL appear at the bottom.

#### Scenario: Footer widgets

- **GIVEN** the Parley page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a black background
- **AND** a "Have a Questions?" widget SHALL show the address, phone, and
  email contact details plus social icons
- **AND** a "Links" widget SHALL list Home, About, Services, Projects, and
  Contact
- **AND** a "Recent Blog" widget SHALL show two post entries with dates and
  meta
- **AND** a "Subscribe Us!" widget SHALL contain an email input with
  placeholder "Enter email address" and a "Subscribe" button

#### Scenario: Newsletter submit

- **GIVEN** the "Subscribe Us!" widget is rendered
- **WHEN** the user enters an email address and submits
- **THEN** the form SHALL accept the submission and show a confirmation
  message (success state replacing the input — assert the input is gone)

### Requirement: Design tokens and fidelity

The system SHALL implement the design tokens from the Design tokens section:
teal `#00bdaa` brand color in `@theme`, Poppins font via Google Fonts
`<link>` in `index.html`, 40px-radius pill buttons, and the exact section
order (top bar → navbar → hero slider → free consulting → intro → about +
counters → case studies → why choose us → intro → testimonials → blog →
footer).

#### Scenario: Token application

- **GIVEN** the Parley app is implemented
- **WHEN** the stylesheet is inspected
- **THEN** the brand color `#00bdaa` SHALL be defined as a theme token and
  used by the navbar, primary buttons, and counter numbers
- **AND** the Poppins font SHALL be loaded via a Google Fonts link in
  `index.html`
- **AND** primary/secondary buttons SHALL use the 40px pill radius

## Verification checklist

- [ ] `openspec/specs/template-parley/spec.md` — Gherkin scenarios above
      map 1:1 to vitest scenarios (one `describe` per component).
- [ ] `npm run spec:validate` passes for the new spec.
- [ ] Replication fidelity: section order 1:1 (top bar → navbar → hero
      slider → free consulting → intro → about + counters → case studies →
      why choose us → intro → testimonials → blog → footer); tokens
      `#00bdaa` / `#48a7f0` / `#f1648f`; Poppins; pill buttons (radius 40px).
- [ ] Placeholder images: `https://picsum.photos/seed/parley-<n>/<w>/<h>`
      (deterministic per template; verify hero seed actually renders a
      business/meeting scene per the seed-screening method before
      committing).
- [ ] Icons from lucide-react; brand icons (Facebook/Twitter/Googleplus) as
      inline SVG paths (lucide removed brand icons).
- [ ] Phone number: never write a literal `tel:` URI in source — compute
      from a spaced display string at runtime (`'tel:' +
    phone.replace(/\D/g, '')` with `phone = '+2 392 3929 210'` in
      data.ts) and add an href assertion test (see Vellum/Readit
      pitfall).
- [ ] Form (quote + newsletter) success handling: success message replaces
      the input — assert `queryByLabelText` absent, per repo convention.
- [ ] Counter animation: numbers count up from 0 to 1387 / 310 / 35 on
      view (jsdom-safe implementation; fake timers inside `act()`).
- [ ] Desktop + mobile nav render duplicate links in the DOM — use
      `getAllByRole` and index the mobile one last in tests.
- [ ] 100% coverage lines/functions/branches/statements; `scripts/
    verify-app.sh parley` green; full gate via CI on merge.
- [ ] PR description: source template (ColorLib Negotiate), preview URL
      (`https://preview.colorlib.com/theme/negotiate/`), design tokens
      used, what differs (renames, placeholder images).
