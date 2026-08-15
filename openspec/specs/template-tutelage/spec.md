# Template: Tutelage (Education)

> **SUPERSEDED** — ColorLib "Tutor" shipped as **Mentory** (PR #455,
> https://mentory.free.componentdock.com). Do NOT implement — delete on next
> cleanup. The four TEMPLATES.md Tutor rows are marked `[x]` with the Mentory
> URL. (Annotated 2026-08-15 by the implementer stream after the duplicate
> prep landed while the Mentory claim was in flight.)

## Purpose

Tutelage is a single-page online-tutorials / e-learning template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Tutor" education website HTML template design (see
TEMPLATES.md, line 521 under **Bootstrap (216)**; duplicate row at line
1656 under **Education (43)**, same template, ONE app only; mark BOTH
rows `[x]` after merge), built under a different name ("Tutelage" —
instruction/guardianship, matching the source's tutorial-hub
positioning: "The Hub Of Tutorials") with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib references
in app code — provenance lives in this spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Tutor" — free education website template
  (source: https://colorlib.com/wp/template/tutor/). Single page: a
  TRANSPARENT navbar (absolute, over the hero photo — "Tutor" blue logo
  left + nav Home / Tutorials / Testimonials / Blog / About / Contact in
  WHITE), a full-height hero photo (overhead desk workspace: laptop,
  hands typing, notebook, coffee, calendar — under a dark
  `rgba(0,0,0,0.3)` wash; headline "The **Hub** Of **Tutorials**" white
  with strong words), a "featured tutorials" band on `#f8f9fa` whose
  white cards OVERLAP the hero by -150px (1 big horizontal card: photo +
  TUTORIAL category label + "Learning React Native" title + blurb +
  brand icons + meta; 3 small cards with 80px thumbnails), a "Choose
  Course" section (6 course tiles — Illustrator, Photoshop, Angular,
  JavaScript, React, Vue — light-grey `#f8f9fa` tiles with brand icons,
  blue text, grey titles that turn black on hover), a "Latest Tutorials"
  section on `#f8f9fa` (search form "Search subjects" + blue Search
  button left, "Share:" + 3 social icons right; 4 white horizontal
  tutorial cards with 250px thumbnails, title, blurb, brand icons, meta
  and a blue "View" button + 5-circle pagination; right sidebar of 3
  white `box-side` cards with horizontal thumbnails), "Student Reviews"
  testimonials (3 white cards with 4px blue bottom border, 5-star
  rating, quote, 50px avatar, author name + role), and a LIGHT footer
  (transparent bg, body text `#364d59`: About Us blurb + 4 social icons,
  4 link columns — Quick Links / Resources / Support / Company — with
  the same 5 links each, and a copyright bar crediting **Component
  Dock** (replaces the source's Colorlib credit)).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/tutor/`. DOM fetched
  (`/tmp/prep-tutor/preview.html`, 25,345 bytes, `<title>Tutor &mdash;
Free Website Template by Colorlib</title>`) + `css/style.css`
  (`/tmp/prep-tutor/style.css`, 22,645 bytes — the real token source) +
  `css/bootstrap.min.css` (RE-COMPILED Bootstrap v4.3.1: `$primary` and
  `$blue` are `#0779e4` — `--primary: #0779e4; --blue: #0779e4;`
  verified by grep; `--light: #f8f9fa`) + computed-style verification of
  the live page in the browser (nav links WHITE over hero; `.heading h2`
  blue `rgb(7,121,228)`; `.course` tile bg `#f8f9fa` color blue radius
  4px; `.btn-primary` bg `rgb(7,121,228)` white text; `.tutorial-item`
  white radius 4px; `.testimonial-2` white radius 7px; `.box-side` white
  radius 4px; footer bg transparent (LIGHT, body text `#364d59`)) +
  TEMPLATES.md screenshot (`tutor-free-template.jpg`, AVIF, viewed in
  browser at 1200×946 — shows "Tutor" logo in navbar over desk hero
  photo, "The Hub Of Tutorials" headline, featured card + 3 small cards
  below hero, 6 blue-icon course tiles, search bar).
- **Visual design (screenshot + live DOM + computed styles):** clean,
  modern, minimalist e-learning design. White/`#f8f9fa` light
  background rhythm, ONE accent color: bright blue **`#0779e4`**
  (Bootstrap `$primary` — buttons, heading h2s, category labels, course
  tile text, nav logo, testimonial bottom borders, pagination active
  circle, social hover). Body text dark blue-grey **`#364d59`** weight
  300; headings weight 300 (hero strong words 900). White cards with
  soft shadows (4px radius; testimonials 7px). Font: **Raleway**. Photos
  are code/desk/workspace subjects. Copy is placeholder/Lorem ("Learning
  React Native" repeated many times, identical blurbs, 4.5-star ratings,
  identical footer link columns) — paraphrase freely, vary repeats, keep
  the same kinds.
- **Icons/plugins:** brand icons come from a custom `brand` font
  (adobeillustrator / adobephotoshop / angular / javascript / react /
  vue-dot-js) — render with inline SVG brand marks (lucide-react removed
  brand icons); icomoon social icons (facebook/twitter/linkedin/
  instagram) — inline SVG too. No carousels/plugins on this template
  (testimonials are a static 3-card row; pagination is decorative).
  Mobile menu is the standard off-canvas drawer.

## Design tokens (from `css/style.css` + recompiled `css/bootstrap.min.css` of the live preview)

- **Primary blue:** `#0779e4` — the theme's Bootstrap `$primary`/`$blue`
  (`--primary: #0779e4`): `.btn-primary` background (Search, View),
  `.heading h2` color (30px, weight 700), `.category` label color,
  `.course` tile text, `.site-logo a` color, `.testimonial-2`
  border-bottom (4px solid), `.custom-pagination` active circle bg,
  `.social-item:hover` bg, `.form-control:focus` border.
- **Body text:** `#364d59` (`body { color:#364d59 !important;
font-weight:300; font-size:1rem; line-height:1.7 }`) — also headings
  h1–h5 (weight 300), `.heading .caption`, footer text.
- **Ink:** `#000` — `.box h3 a`, `.tutorial-item h3 a`, `.box-side h3 a`
  titles, `.course:hover h3`, `.footer-heading` (16px).
- **Section backgrounds:** `#fff` — body, `.box`, `.box.small`,
  `.tutorial-item`, `.box-side`, `.testimonial-2`; `#f8f9fa` — `.bg-light`
  section bands (featured band `pb-0`, latest tutorials, testimonials),
  `.course` tiles (→ white + shadow on hover).
- **Greys:** `#a6a6a6` — `.meta` (1hr 24m / Advanced / date); `#ccc` —
  `.course h3` titles (→ black hover), testimonial author role;
  `rgba(0,0,0,0.5)` — footer links (→ black hover).
- **Whites:** `#fff` — hero h1 + nav links (over the photo), button
  text.
- **Fonts:** **Raleway** (300 body / 300 headings, hero strong 900) —
  `font-family: "Raleway", -apple-system, ...` in style.css; load via
  Google Fonts `<link>` in `index.html` (300/400/700/900).
- **Buttons:** `.btn` — `border-color:#fff`, padding 10px 20px; hover →
  white bg + `#0779e4` text. `.btn-primary` — bg `#0779e4`, white text
  (Bootstrap recompiled), radius 4px. Used for "Search" (px-4) and
  "View" (custom-btn).
- **Navbar (`.site-navbar`, TRANSPARENT, absolute top, width 100%):**
  padding 1rem (3rem mobile); logo `.site-logo` 1.7rem, strong weight
  900, blue link; `.site-menu > li > a` 16px weight 300, WHITE (over
  hero photo). Mobile: `.site-mobile-menu` off-canvas drawer + hamburger
  toggle (icon-menu / icon-close2).
- **Hero (`.site-section-cover.overlay`, bg photo + `:before` wash
  `rgba(0,0,0,0.3)`):** height `calc(100vh - 196px)` min-height 577px
  (70vh / 400px mobile), row align-items-center justify-content-center,
  col-lg-10 text-center: h1 "The Hub Of Tutorials" — 3rem (2rem mobile)
  white weight 300 line-height 1, `<strong>` words weight 900.
- **Sections (`.site-section`):** padding 70px 0 (2.5em mobile). Featured
  band is `bg-light pb-0`; its inner row is `.overlap` — `position:
relative; z-index:2; margin-top:-150px` (cards ride up over the hero).
- **Featured cards (`.box`):** white, padding 20px, shadow `0 15px 30px
0 rgba(0,0,0,0.05)`. Big card: `.img` flex 0 0 260px, margin-right
  50px; `.text` h3 (default size). `.box.small`: `.img` flex 0 0 80px,
  margin-right 20px; `.text h3` 16px. Each card: `.category` label (11px
  uppercase weight 700 letter-spacing .1rem, BLUE) + h3 title (link
  black) + p + brand icons row + `.meta` (`#a6a6a6`).
- **Course tiles (`.course`, col-lg-2 ×6):** display block, padding 20px
  10px, bg `#f8f9fa`, color `#0779e4`, radius 4px, text-center;
  `.wrap-icon` 40px mb-10 + h3 18px `#ccc` (→ black on hover); hover →
  white bg + shadow `0 5px 10px 0 rgba(0,0,0,0.1)`.
- **Tutorial cards (`.tutorial-item`, col-lg-8 list):** white, padding
  20px, radius 4px, shadow `0 10px 20px 0 rgba(0,0,0,0.1)`, d-flex;
  `.img-wrap` flex 0 0 250px margin-right 30px; h3 20px link black
  (margin-bottom 20px); p; brand icons; `.meta`; "View" `.btn
.btn-primary .custom-btn`. 4 items, then `.custom-pagination` — 5
  circles 50px radius 50%, white bg, 20px; active span bg `#0779e4`
  white.
- **Sidebar (`.box-side`, col-lg-4):** white, padding 20px, radius 4px,
  shadow `0 10px 20px 0 rgba(0,0,0,0.1)`; horizontal thumbnail image
  (mb-20) + h3 20px link black. 3 cards.
- **Testimonials (`.testimonial-2`, 3 cards, col-lg-4):** white, padding
  30px, radius 7px, `border-bottom: 4px solid #0779e4`, shadow `0 15px
30px 0 rgba(0,0,0,0.1)`; h3 title (e.g. "Excellent Teacher!") + 5-star
  row (4 filled + 1 outline) + blockquote (18px quote) + d-flex
  `v-card`: 50px round avatar + `.author-name` (name + `#ccc` role).
- **Search form:** `.search-form` d-flex — input.form-control (height
  55px, white bg, blue focus border) placeholder "Search subjects" +
  input.btn.btn-primary.px-4 value "Search". Right side: "Share:" label
  - 3 `.social-item` (40px white squares, blue hover bg).
- **Footer (`.site-footer`, LIGHT/transparent bg, padding 4em 0 / 8em
  md):** row — col-lg-3: `.footer-heading` "About Us" (16px black) +
  blurb (Far far away…) + 4 social icon links; 4 × col-lg-6/3 `.footer-
heading` columns (Quick Links / Resources / Support / Company) each
  with the SAME 5 links (About Us / Testimonials / Terms of Service /
  Privacy / Contact Us, li margin-bottom 10px, links `rgba(0,0,0,0.5)`
  → black hover); `.border-top` (`1px solid rgba(255,255,255,0.1)`) +
  copyright bar: "Copyright © <year> All rights reserved | This template
  is made with ♥ by **Component Dock**" → https://www.componentdock.com/
  (replaces the source's Colorlib credit; NO ColorLib credit).
- **Placeholder images:** `https://picsum.photos/seed/tutelage-<n>/<w>/<h>`.
  Slots: hero bg (wide desk/workspace subject), featured big card
  (img_1-style square), featured small 1–3 (small thumbs), tutorial
  items 1–4 (250px-wide thumbs), box-side 1–3 (wide horizontal thumbs),
  testimonial avatars 1–3 (50px square portraits). Icons from
  `lucide-react` (Menu, X, Search) + inline SVG brand marks (React,
  JavaScript, Angular, Vue, Photoshop, Illustrator) and social icons
  (Facebook/Twitter/LinkedIn/Instagram — lucide removed brand icons).

## Requirements

### Requirement: Header — transparent navbar over hero

The system SHALL render a transparent navbar over the hero photo with a
blue "Tutelage" logo on the left and nav links (Home, Tutorials,
Testimonials, Blog, About, Contact) in white on the right. On mobile a
hamburger SHALL open an off-canvas drawer with the same links.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the header is inspected
- **THEN** it shows the logo and the six nav entries (Home first,
  Contact last), with the first entry styled as active

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** the nav links appear in a drawer and can be closed again

### Requirement: Hero

The system SHALL render a full-height hero with a workspace photo under
a dark wash and the white headline "The Hub Of Tutorials" with "Hub" and
"Tutorials" emphasized.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** it is inspected
- **THEN** it shows the headline with the two emphasized words, centered
  on the photo

### Requirement: Featured tutorials (overlapping cards)

The system SHALL render a `#f8f9fa` band directly below the hero whose
white cards overlap the hero by 150px: one large horizontal card
(thumbnail, TUTORIAL category label, title, blurb, brand icons, meta
line) and three small cards with 80px thumbnails.

#### Scenario: Featured card layout

- **GIVEN** the featured band is rendered
- **WHEN** it is inspected
- **THEN** one large card and three small cards are shown, each with a
  category label, a title, and a meta line (duration / level / date)

### Requirement: Choose Course tiles

The system SHALL render six course tiles (Illustrator, Photoshop,
Angular, JavaScript, React, Vue) in a row, each with a brand icon and a
title, on a light-grey tile that turns white with a shadow on hover.

#### Scenario: Course tiles

- **GIVEN** the Choose Course section is rendered
- **WHEN** the tiles are inspected
- **THEN** six tiles are shown, each with an icon and the course name

### Requirement: Latest Tutorials

The system SHALL render a search form ("Search subjects" + blue Search
button) and a "Share:" social row, a heading "Tutorials", four white
horizontal tutorial cards (250px thumbnail, title, blurb, brand icons,
meta, blue "View" button), a 5-item pagination, and a sidebar of three
thumbnail cards.

#### Scenario: Tutorial cards

- **GIVEN** the Latest Tutorials section is rendered
- **WHEN** the cards are inspected
- **THEN** four tutorial cards are shown, each with a thumbnail, title,
  blurb, meta line, and a "View" button

#### Scenario: Sidebar and pagination

- **GIVEN** the Latest Tutorials section is rendered
- **WHEN** the right column and pagination are inspected
- **THEN** three sidebar thumbnail cards and five pagination circles are
  shown (the second marked active)

### Requirement: Testimonials

The system SHALL render three white testimonial cards (blue bottom
border) under the heading "Student Reviews", each with a title, a
5-star rating, a quote, a round avatar, and an author name + role.

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is rendered
- **WHEN** the cards are inspected
- **THEN** three cards are shown, each with a title, five stars, a
  quote, an avatar, and author name + role

### Requirement: Footer

The system SHALL render a light footer with an "About Us" blurb and four
social icons, four link columns (Quick Links / Resources / Support /
Company), and a copyright bar crediting Component Dock (no ColorLib
credit).

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the About Us blurb, the four link columns, and the
  copyright bar linking to https://www.componentdock.com/

### Requirement: Composition

All sections SHALL appear in the source order on one page: navbar →
hero → featured tutorials → Choose Course → Latest Tutorials →
Testimonials → footer.

#### Scenario: Section order

- **GIVEN** the full page is rendered
- **WHEN** the sections are enumerated top to bottom
- **THEN** the order is navbar, hero, featured, courses, tutorials,
  testimonials, footer

## Verification checklist

- [ ] Spec validated: `npm run spec:validate` passes for
      `template-tutelage`
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #0779e4`,
      `--color-body: #364d59`, `--color-ink: #000000`,
      `--color-soft: #f8f9fa`, `--color-meta: #a6a6a6`,
      `--color-faint: #ccc`; Google Fonts `<link>` in `index.html`:
      Raleway (300/400/700/900)
- [ ] Navbar: TRANSPARENT absolute bar over hero; logo = "Tutelage"
      (1.7rem, weight 900, blue); nav (Home active / Tutorials /
      Testimonials / Blog / About / Contact) WHITE 16px weight 300;
      mobile hamburger → off-canvas drawer with same links
- [ ] Hero: `calc(100vh - 196px)` min 577px (400px mobile), photo +
      `rgba(0,0,0,0.3)` wash; centered h1 "The Hub Of Tutorials" —
      3rem/2rem white weight 300 lh 1, "Hub" + "Tutorials" strong 900
- [ ] Featured band: `#f8f9fa` `pb-0`; row `margin-top:-150px` overlap;
      big card (img 260px + blue 11px uppercase TUTORIAL label + h3 +
      blurb + brand icons + `#a6a6a6` meta "1hr 24m / Advanced / Jun
      18, 2020") + 3 small cards (img 80px, h3 16px) — vary titles
- [ ] Choose Course: heading pattern (12px uppercase caption "Tutorial
      Courses" + blue 30px weight 700 h2 "Choose Course"); 6 tiles
      (col-lg-2): `#f8f9fa` bg radius 4px, 40px brand icon + 18px
      `#ccc` title, hover white + shadow + black title
- [ ] Latest Tutorials: `#f8f9fa` band; search form (55px white input,
      blue focus border, placeholder "Search subjects" + blue Search
      btn) + "Share:" + 3 social squares (40px, blue hover); heading
      (caption "Latest" + h2 "Tutorials"); 4 tutorial cards (img-wrap
      250px, h3 20px, blurb, brand icons, meta, "View" blue btn) +
      5-circle pagination (50px circles, active blue); sidebar 3
      `box-side` cards (horizontal thumb + h3 20px)
- [ ] Testimonials: heading (caption "Testimonials" + h2 "Student
      Reviews"); 3 cards (white, padding 30px, radius 7px, `border-
  bottom: 4px solid #0779e4`, soft shadow): title + 5 stars (4
      filled + 1 outline) + quote + 50px round avatar + name + `#ccc`
      role — vary titles (Excellent Teacher! / Best Video Tutorial! /
      Easy to Understand!)
- [ ] Footer: light/transparent bg, text `#364d59`, padding 4em/8em;
      About Us blurb + 4 social icons; 4 columns (Quick Links /
      Resources / Support / Company) × same 5 links; copyright bar
      "…made with ♥ by Component Dock" → componentdock.com, NO ColorLib
      credit
- [ ] Placeholder images via
      `https://picsum.photos/seed/tutelage-<n>/<w>/<h>` (hero wide,
      featured big + 3 small, tutorial 1–4, box-side 1–3, avatars 1–3)
      — subject-screen the desk/code/portrait seeds; icons from
      `lucide-react` (Menu/X/Search) + inline SVG brand marks (React,
      JS, Angular, Vue, Ps, Ai) + socials (lucide removed brand icons)
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/tutor/`), design tokens, diffs
      (name, placeholder images, inline SVG brand icons instead of
      brand font, Component Dock footer credit); after merge mark BOTH
      TEMPLATES.md Tutor rows `[x]` (lines 521 and 1656 — Bootstrap
      216 / Education 43)
