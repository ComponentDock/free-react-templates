# Template: Verdant (Template Showcase / Agency Landing)

## Purpose

Verdant is a single-page template-showcase landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Neos" design (see TEMPLATES.md, Bootstrap (216) category),
built under a DIFFERENT name — **Verdant** (green with lush vegetation — the
lime-green brand color and the plant photography of the hero; single
lowercase word, no collision with `apps/`, `openspec/specs/`,
`docs/templates/` or TEMPLATES.md — verified 2026-08-11) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, minimalist "free templates" showcase page: a white
navbar with a bold uppercase logo, an uppercase link row and a lime-green
"Get Started" button; a full-width photo hero slider with a dark overlay and
a centered white uppercase headline; a 4-item "Love Us Colorlib" features
grid that OVERLAPS the hero via a white slanted divider; two alternating
image/text "site-half" bands; a 6-card "Share Before You Download" products
carousel; a 2-counter "Free Templates By Colorlib" band; a 4-slide
testimonials carousel; a 3-post blog strip; a green "Try For Your Next
Project" CTA band; and a near-black 3-widget footer with a "Stay up to date"
newsletter form. Verdant recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

> NOTE (prep-stream 2026-08-11): the official preview
> `https://preview.colorlib.com/theme/neos/` is LIVE — fetched HTTP 200
> (~30 KB HTML + `css/style.css` ~26 KB, curl-verified) and analyzed for this
> prep. The TEMPLATES.md screenshot (`neos-free-template.jpg`, 1100×894) was
> also viewed in a browser; it shows the navbar + hero slider and cuts off
> just below the hero, matching the live render 1:1 (the sections below the
> fold were captured from the live DOM + CSS instead).

## Design reference (replication findings)

- **Original:** ColorLib "Neos" — free Bootstrap 4 template-showcase /
  agency website template (source: https://colorlib.com/wp/template/neos/;
  page title "Neos &mdash; Website Template by Colorlib"). The recreation
  brands itself **Verdant** but keeps the same section structure, heading
  copy kinds, and card set.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/neos/` (HTTP 200, ~30 KB HTML +
  `css/style.css` ~26 KB + Bootstrap 4 + owl.carousel + aos + animate +
  magnific-popup + jquery-ui + flaticon + icomoon). Single-page document;
  section order (1:1):
  1. **Preloader** — `.loader` with `.spinner-border.text-primary` +
     "Loading..." (hide after load; optional in recreation).
  2. **Mobile menu** — `.site-mobile-menu` (slide-in panel, hidden on
     desktop; toggle `.js-menu-toggle` with `icon-menu`).
  3. **Navbar** — `<div class="site-navbar-wrap js-site-navbar bg-white">` >
     `.site-navbar.bg-light` (CSS: `background: #fff !important; border-
bottom: none`; `.site-navbar-wrap` z-index 99, sticky-on-scroll JS):
     - LEFT (`.col-2`): brand `h2.site-logo` > a **"Neos"** (`font-weight-
bold text-uppercase`, black).
     - RIGHT (`.col-10`): `nav.site-navigation.text-right` > `ul.site-menu`
       (hidden <lg, hamburger toggle): **Home** (li.active) · **About**
       (li.has-children — dropdown: Testimonials · Gallery · FAQ · Why
       Choose Us · "Sub Menus" (nested dropdown: Testimonials · Gallery ·
       Why Choose Us)) · **Services** · **Blog** · **Contact** · then
       **"Get Started"** — `<span class="d-inline-block bg-primary
text-white btn btn-primary">` (green button in the bar). Nav links:
       uppercase, letter-spacing .05em, 15px, `color: rgba(0,0,0,.6)`,
       hover black.
  4. **Hero slider** — `<div class="slide-one-item home-slider
owl-carousel">`, 2 slides `.site-blocks-cover.inner-page.overlay`
     (inline `background-image: url(images/hero_1.jpg)` /
     `images/hero_2.jpg`; `.overlay:before` = `rgba(0,0,0,0.2)` dark
     overlay; min-height 600px / `calc(80vh)`); centered `col-md-6/7
text-center` (data-aos="fade"): h1 `font-secondary font-weight-bold
text-uppercase` (4rem ≥768px, 700, white): **"Welcome to Colorlib"** ·
     **"Free Bootstrap 4 Templates"**. NO buttons on the slides. Owl
     prev/next arrows (`.slide-one-item .owl-nav`, absolute bottom-center,
     padding 20px, font-size 30px) + dots.
  5. **Slant divider + "Love Us Colorlib" features** — `.slant-1` (70px
     white rotated band: `:before` white, `rotate(-5deg) translateX(-20%)`,
     z-index 4) then `.site-section.first-section` (CSS `margin-top:
-150px` — the section OVERLAPS the hero; -50px ≤992px, z-index 5):
     - `.col-md-12.text-center`: eyebrow text **"Outstanding Services"** +
       h2 `.site-section-heading.text-uppercase.text-center.font-secondary`
       **"Love Us Colorlib"** (30px, uppercase, Oswald, with 40×2px green
       `:before` underline centered).
     - 4 feature columns `.col-md-6.col-lg-3` (3 with `border-right`
       dividers; `.border-responsive` on mobile): each `.text-center` —
       flaticon icon `<span class="flaticon-… display-4 d-block mb-3
text-primary">` (green) + h3 `text-uppercase h4 mb-3` + lorem
       blurb. Titles: **Increase Revenue · Analytics · 3 Years Experience ·
       Free Package** (icons: money-bag / bar-chart / medal / box).
  6. **Site-half #1 (Clean Design)** — `.site-half`: left `.img-bg-1`
     (absolute 50% width/height photo `images/img_4.jpg`; becomes a 300px
     full-width block ≤992px), right `.col-lg-5.ml-lg-auto.py-5`: eyebrow
     **"Outstanding Services"** → h2 `.site-section-heading.text-uppercase
.font-secondary.mb-5` **"Clean Design"** → 2 lorem paragraphs.
  7. **Site-half #2 (Free HTML5 Templates, reversed)** — `.site-half.block`:
     right `.img-bg-1.right` (`images/img_5.jpg`), left `.col-lg-5.mr-lg-
auto.py-5`: eyebrow **"Easy To Use Templates"** → h2 **"Free HTML5
     Templates"** → same 2 lorem paragraphs.
  8. **Products & Services carousel** — `.site-section`: eyebrow
     **"Products & Services"** + h2 `site-section-heading.text-uppercase
text-center.font-secondary` **"Share Before You Download"**; then
     `.col-md-12.block-13.nav-direction-white` > `.nonloop-block-13.owl-
carousel` with **6 `.media-image` cards** (`.media-image-body`
     padding 30px; h2 1.2rem uppercase font-secondary; hover: box-shadow
     `0 5px 40px -5px rgba(0,0,0,0.1)`): photo (img_1..img_5, img_1
     repeats) + h2 **Pixel Perfect · Template Under CCA 3.0 Unported ·
     Useful Web Templates · HTML5 / CSS3 · Bootstrap 4 · SCSS** + lorem +
     **"Learn More"** link.
  9. **Counters** — `.site-section.section-counter`: LEFT `col-lg-6` photo
     (`images/img_1.jpg`); RIGHT `col-lg-5.ml-auto`: h2 `.site-section-
heading.mb-3.font-secondary.text-uppercase` **"Free Templates By
     Colorlib"** + paragraph + 2 `.counter` blocks (col-lg-6 each): big
     Oswald number (4rem, GREEN `#71bc42`; animateNumber counts up from 0)
     - `.caption` label: **Current Downloads · Number of Templates**.
  10. **Testimonials** — `.site-section.block-14.nav-direction-white`: h2
      `site-section-heading.text-center.text-uppercase` **"Testimonials"**;
      `.nonloop-block-14.owl-carousel` with **4 `.block-testimony` slides**
      (`.d-block.block-testimony.mx-auto.text-center`): circular photo
      (`images/person_1..4.jpg`, `rounded-circle w-25 mx-auto mb-4`,
      80px) + h2 `h5 mb-4` name + blockquote (1.5rem italic, &ldquo;…&rdquo;):
      **Katie Johnson · Jun Mars · Shane Holmes · Mark Johnson**. White owl
      nav arrows bottom-center (nav-direction-white).
  11. **Recent Blog Posts** — `.site-section`: h2 `site-section-heading
text-center.text-uppercase` **"Recent Blog Posts"**; 3 cards
      `.col-md-6.col-lg-4.mb-5` (aos delays 100/200/300): `.media-image`
      photo (img_1/2/3) + `.media-image-body`: h2 uppercase font-secondary
      **"Where Do You Learn HTML & CSS in 2019?"** (repeated on all 3) +
      meta **"By James — Jan. 20, 2019"** + lorem + **"Read More"**.
  12. **CTA band** — `.py-5.bg-primary`: centered h2 `text-uppercase
text-white mb-4` **"Try For Your Next Project"** + `a.btn.btn-bg-
primary.font-secondary.text-uppercase` **"Contact Us"** (outline
      button: white 2px border, white text, radius 0, padding 10px 30px;
      hover → white bg + green text).
  13. **Footer** — `<footer class="site-footer bg-dark">` (padding 4em 0,
      `background: #1e1e1c`, text `rgba(255,255,255,.5)`):
      - `col-md-4`: h3 `footer-heading.mb-4.text-white` **"About"** (1rem,
        uppercase) + lorem paragraph + **"Read More"** link.
      - `col-md-5.ml-auto`: 2 sub-columns — **"Quick Menu"** (Home · About ·
        Blog · Contacts · Privacy) and **"Free Templates"** (HTML5 / CSS3 ·
        Clean Design · Responsive · Multi Purpose Template); below, a
        full-width row: h3 **"Stay up to date"** + `form.d-flex.footer-
subscribe`: `input.form-control.rounded-0` placeholder **"Enter
        your email"** + `input.btn.btn-primary.rounded-0` value
        **"Subscribe"** (`.footer-subscribe .form-control`: transparent bg,
        white border, white text).
      - `col-md-2`: h3 **"Social Icons"** + icomoon brand icon links
        (facebook, twitter, instagram, linkedin).
      - Copyright bar: "Copyright © All rights reserved | This template is
        made with by Colorlib" (rephrase: "© <year> Verdant — All rights
        reserved | Free website template").
- **Visual design (TEMPLATES.md screenshot `neos-free-template.jpg`,
  1100×894, viewed in browser 2026-08-11):** white navbar — bold black
  uppercase "NEOS" logo left, small dark-grey uppercase links (HOME, ABOUT▾,
  SERVICES, BLOG, CONTACT), lime-green rectangular "GET STARTED" button
  right; hero = full-width lifestyle photo (potted plants: succulent in
  terracotta pot, trailing plant, white mug) with centered bold white
  uppercase "WELCOME TO COLORLIB" over a dark overlay; semi-transparent grey
  square owl prev/next arrows at the hero's left/right edges; screenshot
  cuts off just below the hero. Color story: LIME-GREEN `#71bc42` primary
  (Get Started button, icons, CTA band), black/dark-grey neutrals, white
  backgrounds, near-black `#1e1e1c` footer.

## Design tokens

From `css/style.css` (verified 2026-08-11):

- **Brand colors:**
  - `#71bc42` (lime green) — PRIMARY: `.text-primary` feature icons, `.bg-
primary` CTA band + Get Started button, `.btn-primary` bg, `.counter
.number` color, `.site-section-heading:before` underline (40×2px),
    media-image hover border/links.
  - `#000` — logo, nav link hover, body text (`#212529`).
  - `#1e1e1c` — footer background (near-black; footer text
    `rgba(255,255,255,.5)`).
  - Neutrals: `#fff` (navbar, section bg, hero text), `#f8f9fa` / `#f7f7f7`
    / `#f4f4f4` (light band bgs), `#e6e6e6` / `#e3e3e3` / `#dee2e6` (border
    dividers), `#343a40` (dark gray), hero overlay `rgba(0,0,0,.2)`.
- **Fonts:** headings = `"Oswald", arial, sans-serif` (`.font-secondary`,
  uppercase treatment everywhere: hero h1, section headings, card titles,
  counter numbers, nav links, buttons); body = `"Work Sans", -apple-system,
…` (load both via Google Fonts `<link>` in `index.html`).
- **Type scale:** hero h1 4rem/700/white uppercase (≥768px; smaller below);
  `.site-section-heading` 30px uppercase with 40×2px green underline;
  `.media-image h2` 1.2rem uppercase; counter number 4rem Oswald green;
  nav links 15px uppercase letter-spacing .05em; footer-heading 1rem
  uppercase; testimonial blockquote 1.5rem italic.
- **Buttons:** SQUARE — `.btn { border-radius: 0px }` (sharp corners, NOT
  pills). `.btn-primary`: bg `#71bc42`, white text. `.btn-bg-primary`
  (hero/CTA outline): white 2px border + white text on transparent, padding
  10px 30px, radius 0; hover → white bg + green text `#71bc42`.
- **Section backgrounds:** hero = photo + `rgba(0,0,0,.2)` overlay; feature
  section = white overlapping the hero (`margin-top: -150px`, behind a
  rotated white `.slant-1` band, z-index 5); CTA band = solid green
  `#71bc42`; footer = `#1e1e1c`; counters/others white or `#f7f7f7`.
- **Radius family:** everything FLAT (radius 0) except circular testimonial
  avatars (`rounded-circle`, 80px) — no rounded cards, no pill buttons.
- **Spacing rhythm:** `.site-section` padding 3em 0 (7em 0 ≥768px);
  `.site-half` image = absolute 50% width/height (300px block ≤992px);
  footer padding 4em 0; `.media-image-body` padding 30px; features 4-col
  (2-col ≤992px, 1-col ≤767px); blog 3-col.
- **Carousels (owl):** hero 2 slides (dots + arrows bottom-center, padding
  20px, font-size 30px); products 6 cards (`.block-13`); testimonials 4
  slides (`.block-14`); all with prev/next arrows; `nav-direction-white` =
  white arrows.
- **Icons:** flaticon glyphs in the source — recreate with lucide-react:
  money-bag/coins → `DollarSign`/`Coins`, bar-chart → `BarChart3`, medal →
  `Award`, box → `Package`; icomoon brand icons (Facebook/Twitter/
  Instagram/LinkedIn) are NOT in lucide-react — use inline SVG brand paths
  per the colorlib-template-replication skill.

## Requirements

### Requirement: White navbar with logo, links and Get Started button

The system SHALL render a white navbar (`.site-navbar-wrap` bg-white,
z-index 99) with the brand "Verdant" in bold uppercase on the left and, on
the right, uppercase navigation links Home (active), About (with a dropdown
of Testimonials / Gallery / FAQ / Why Choose Us / Sub Menus, itself a nested
dropdown of Testimonials / Gallery / Why Choose Us), Services, Blog,
Contact, and a green "Get Started" button.

#### Scenario: Brand and links

- **GIVEN** the Verdant page is rendered
- **WHEN** the navbar is displayed
- **THEN** the navbar SHALL have a white background
- **AND** the brand SHALL read "Verdant" in bold uppercase black text
- **AND** the navbar SHALL contain links Home, About, Services, Blog, and
  Contact, styled uppercase with letter-spacing
- **AND** the Home link SHALL be marked active

#### Scenario: About dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the About link is activated
- **THEN** a dropdown SHALL appear with Testimonials, Gallery, FAQ, Why
  Choose Us, and Sub Menus entries
- **AND** Sub Menus SHALL open a nested dropdown with Testimonials, Gallery,
  and Why Choose Us

#### Scenario: Get Started button

- **GIVEN** the navbar is rendered
- **WHEN** the right side of the navbar is inspected
- **THEN** a "Get Started" button SHALL be shown with the brand green
  `#71bc42` background and white text

### Requirement: Hero slider

The system SHALL render a full-width hero carousel with exactly two slides.
Each slide SHALL show a background photo with a dark overlay
(`rgba(0,0,0,.2)`), a centered white uppercase headline in the Oswald
heading font, and NO buttons. The hero SHALL be at least 600px tall
(`calc(80vh)`), with carousel prev/next arrows and dots.

#### Scenario: First slide headline

- **GIVEN** the Verdant page is rendered
- **WHEN** the hero carousel loads
- **THEN** the first slide SHALL display the headline "Welcome to Verdant"
  in white uppercase bold
- **AND** the headline SHALL be centered over the background image

#### Scenario: Second slide headline

- **GIVEN** the hero carousel has advanced to the second slide
- **WHEN** the second slide is shown
- **THEN** the headline SHALL read "Free Website Templates"
- **AND** the slide SHALL keep the same overlay and centered white text

#### Scenario: Slide styling

- **GIVEN** any hero slide is displayed
- **WHEN** the slide renders
- **THEN** a background image SHALL cover the slide with a dark overlay
- **AND** the hero SHALL be at least 600px tall
- **AND** carousel controls (prev/next arrows and dots) SHALL be visible

### Requirement: Love Us Verdant features grid overlapping the hero

The system SHALL render a white section that overlaps the hero (negative
top margin −150px desktop, −50px ≤992px) behind a rotated white slant band.
The section SHALL show the eyebrow "Outstanding Services", the uppercase
heading "Love Us Verdant" with a green underline, and four feature columns
(Increase Revenue, Analytics, 3 Years Experience, Free Package), each with a
green icon, an uppercase title, and a short blurb, separated by right
borders on desktop.

#### Scenario: Section overlap and heading

- **GIVEN** the page is rendered
- **WHEN** the section below the hero is displayed
- **THEN** a white rotated slant band SHALL separate the hero from the next
  section
- **AND** the next section SHALL overlap the hero with a negative top margin
- **AND** the eyebrow SHALL read "Outstanding Services"
- **AND** the heading SHALL read "Love Us Verdant" in uppercase with a
  green underline

#### Scenario: Feature columns

- **GIVEN** the features section is rendered
- **WHEN** the feature row is displayed
- **THEN** four feature items SHALL be shown in a row (4 columns desktop)
- **AND** the items SHALL be titled Increase Revenue, Analytics, 3 Years
  Experience, and Free Package
- **AND** each item SHALL show a green icon above its uppercase title and a
  short blurb

### Requirement: Alternating site-half bands

The system SHALL render two alternating image/text bands. Band one SHALL
show an image on the left with the eyebrow "Outstanding Services", the
heading "Clean Design", and two paragraphs on the right. Band two SHALL be
reversed (image right, content left) with the eyebrow "Easy To Use
Templates", the heading "Free HTML5 Templates", and two paragraphs.

#### Scenario: First band

- **GIVEN** the page is rendered
- **WHEN** the band after the features grid is displayed
- **THEN** an image SHALL be shown on the left spanning half the band
- **AND** the content SHALL read "Outstanding Services" (eyebrow) and
  "Clean Design" (uppercase heading) with two paragraphs

#### Scenario: Second band

- **GIVEN** the page is rendered
- **WHEN** the next band is displayed
- **THEN** the layout SHALL be reversed with the image on the right
- **AND** the content SHALL read "Easy To Use Templates" (eyebrow) and
  "Free HTML5 Templates" (uppercase heading) with two paragraphs

### Requirement: Share Before You Download carousel

The system SHALL render a Products & Services section with the eyebrow
"Products & Services", the uppercase heading "Share Before You Download",
and a carousel of six cards, each showing a photo, an uppercase title
(Pixel Perfect, Template Under CCA 3.0 Unported, Useful Web Templates,
HTML5 / CSS3, Bootstrap 4, SCSS), a short blurb, and a "Learn More" link.
Cards SHALL lift with a soft shadow on hover.

#### Scenario: Carousel cards

- **GIVEN** the Products & Services section is rendered
- **WHEN** the carousel is displayed
- **THEN** the eyebrow SHALL read "Products & Services"
- **AND** the heading SHALL read "Share Before You Download"
- **AND** six cards SHALL be available in the carousel
- **AND** each card SHALL show a photo, an uppercase title, a blurb, and a
  "Learn More" link
- **AND** hovering a card SHALL raise it with a soft shadow

### Requirement: Free Templates By Verdant counters

The system SHALL render a counters section with a photo on the left and,
on the right, the uppercase heading "Free Templates By Verdant", a
paragraph, and two animated counters: Current Downloads and Number of
Templates — each with a large green Oswald number counting up from zero
and a caption label.

#### Scenario: Counter display

- **GIVEN** the counters section is rendered
- **WHEN** the section is displayed
- **THEN** the heading SHALL read "Free Templates By Verdant"
- **AND** a photo SHALL be shown beside the content
- **AND** two counters SHALL be shown with captions "Current Downloads"
  and "Number of Templates"
- **AND** each counter number SHALL be large, green (`#71bc42`), and count
  up from zero when the section enters view

### Requirement: Testimonials carousel

The system SHALL render a Testimonials section with the uppercase heading
"Testimonials" and a carousel of four testimonials, each showing a circular
photo avatar, a name (Katie Johnson, Jun Mars, Shane Holmes, Mark Johnson),
and an italic quote. White carousel arrows SHALL be shown below center.

#### Scenario: Testimonial slides

- **GIVEN** the Testimonials section is rendered
- **WHEN** the carousel is displayed
- **THEN** the heading SHALL read "Testimonials"
- **AND** four testimonials SHALL be available in the carousel
- **AND** each testimonial SHALL show a circular avatar, a name, and an
  italic quote

### Requirement: Recent Blog Posts strip

The system SHALL render a Blog section with the uppercase heading "Recent
Blog Posts" and three cards, each showing a photo, the title "Where Do You
Learn HTML & CSS in 2019?", the meta line "By James — Jan. 20, 2019", a
short blurb, and a "Read More" link.

#### Scenario: Blog cards

- **GIVEN** the Blog section is rendered
- **WHEN** the section is displayed
- **THEN** the heading SHALL read "Recent Blog Posts"
- **AND** three blog cards SHALL be shown
- **AND** each card SHALL display a photo, a title, the "By James — Jan.
  20, 2019" meta line, a blurb, and a "Read More" link

### Requirement: Green CTA band

The system SHALL render a full-width green (`#71bc42`) band after the blog
section with the centered white uppercase heading "Try For Your Next
Project" and an outline "Contact Us" button (white 2px border, white text,
hover → white background with green text).

#### Scenario: CTA band content

- **GIVEN** the page is rendered
- **WHEN** the band after the blog section is displayed
- **THEN** the band SHALL have the brand green background
- **AND** the heading SHALL read "Try For Your Next Project" in white
  uppercase
- **AND** a "Contact Us" button SHALL be shown with a white outline style

### Requirement: Near-black footer with newsletter

The system SHALL render a footer with a near-black background (`#1e1e1c`)
and three widgets: "About" (paragraph + Read More link), a wider column
with "Quick Menu" (Home / About / Blog / Contacts / Privacy), "Free
Templates" (HTML5 / CSS3 / Clean Design / Responsive / Multi Purpose
Template) and "Stay up to date" (email input with placeholder "Enter your
email" + "Subscribe" button), and "Social Icons" (Facebook, Twitter,
Instagram, LinkedIn). A copyright line SHALL appear at the bottom.

#### Scenario: Footer widgets

- **GIVEN** the Verdant page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a near-black background
- **AND** an "About" widget SHALL show a paragraph and a Read More link
- **AND** a "Quick Menu" widget SHALL list Home, About, Blog, Contacts,
  and Privacy
- **AND** a "Free Templates" widget SHALL list HTML5 / CSS3, Clean Design,
  Responsive, and Multi Purpose Template
- **AND** a "Stay up to date" widget SHALL contain an email input with
  placeholder "Enter your email" and a "Subscribe" button
- **AND** a "Social Icons" widget SHALL show brand icon links

#### Scenario: Newsletter submit

- **GIVEN** the "Stay up to date" widget is rendered
- **WHEN** the user enters an email address and submits
- **THEN** the form SHALL accept the submission and show a confirmation
  message (success state replacing the input — assert the input is gone)

### Requirement: Design tokens and fidelity

The system SHALL implement the design tokens from the Design tokens section:
lime green `#71bc42` brand color in `@theme`, Oswald (headings) + Work Sans
(body) via Google Fonts `<link>` in `index.html`, square buttons (radius 0),
and the exact section order (navbar → hero slider → slant + features →
site-half 1 → site-half 2 → products carousel → counters → testimonials →
blog → CTA band → footer).

#### Scenario: Token application

- **GIVEN** the Verdant app is implemented
- **WHEN** the stylesheet is inspected
- **THEN** the brand color `#71bc42` SHALL be defined as a theme token and
  used by the navbar button, feature icons, counter numbers, and CTA band
- **AND** the Oswald and Work Sans fonts SHALL be loaded via Google Fonts
  links in `index.html`
- **AND** primary buttons SHALL use square corners (radius 0)

## Verification checklist

- [ ] `openspec/specs/template-verdant/spec.md` — Gherkin scenarios above
      map 1:1 to vitest scenarios (one `describe` per component).
- [ ] `npm run spec:validate` passes for the new spec.
- [ ] Replication fidelity: section order 1:1 (navbar → hero slider →
      slant + features → site-half 1 → site-half 2 → products carousel →
      counters → testimonials → blog → CTA band → footer); tokens
      `#71bc42` / `#1e1e1c`; Oswald + Work Sans; SQUARE buttons (radius 0 —
      NOT pills, unlike most ColorLib templates).
- [ ] Placeholder images: `https://picsum.photos/seed/verdant-<n>/<w>/<h>`
      (deterministic per template; hero seeds SCREENED per the
      seed-screening method — seed `verdant-hero-1` rendered a person, not
      plants, so hero slides are pinned to verified nature photos
      `https://picsum.photos/id/28/1600/900` (lush forest stream) and
      `/id/1039/1600/900` (waterfall), matching the reference's plant
      photography; site-half/other slots use generic seeds).
- [ ] Icons from lucide-react (DollarSign/Coins, BarChart3, Award,
      Package); brand icons (Facebook/Twitter/Instagram/LinkedIn) as inline
      SVG paths (lucide removed brand icons).
- [ ] Newsletter form success handling: success message replaces the input —
      assert `queryByLabelText` absent, per repo convention.
- [ ] Counter animation: numbers count up from 0 on view (jsdom-safe
      implementation; fake timers inside `act()`).
- [ ] Desktop + mobile nav render duplicate links in the DOM — use
      `getAllByRole` and index the mobile one last in tests; the About
      dropdown + nested Sub Menus need open/close interaction tests.
- [ ] Hero slider + both owl carousels: implement prev/next arrows and
      dots; autoplay optional but must be testable (fake timers).
- [ ] 100% coverage lines/functions/branches/statements; `scripts/
verify-app.sh verdant` green; full gate via CI on merge.
- [ ] PR description: source template (ColorLib Neos), preview URL
      (`https://preview.colorlib.com/theme/neos/`), design tokens used,
      what differs (renames, placeholder images).
