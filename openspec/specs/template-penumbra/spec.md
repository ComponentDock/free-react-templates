# Template: Penumbra (Education — Course Platform)

## Purpose

Penumbra is a single-page education / online-course platform template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Eclipse" education template (see TEMPLATES.md, line 379 under
**Bootstrap (216)**), built under a different name ("Penumbra" — the partial
shadow region during an eclipse, an astronomy-adjacent brand word that nods to
the source name without reusing it) with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript (strict). No ColorLib references in app code —
provenance lives in this spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Eclipse" — free education / course-platform HTML
  template (source: https://colorlib.com/wp/template/eclipse/). Single page:
  a transparent header over a purple-gradient hero (nav with two dropdowns +
  search), a fullscreen hero ("Take the first step to learn with us" +
  vector illustration + white wave bottom edge), a 3-item feature row that
  overlaps the hero's bottom edge (New Classes / Top Courses / Full E-Books),
  a "Popular Courses / Available Right Now" section (owl carousel of 8 course
  cards, ~4 visible: image, uppercase category tag, price, title, 5 gold
  stars, review count), a "Watch Our Trainers in Live Action" video area
  (light lavender bg shape; 2 video cards with round purple play button), an
  "Features That Can Avail By Everyone" masonry grid of 6 feature cards
  (Lifetime Access / Source File Included / Student Membership / 35000+
  Courses / Expert Mentors / Live Supports), a testimonial carousel (2 slides,
  NO section title; quote + name + designation + photo + stars), a
  "Watch Our Trainers" registration area on a deep-purple wave background
  (left title + right white "Courses for Free" form card: Name / Phone
  Number / Email + Submit), a blog area whose title reuses "Features That
  Can Avail By Everyone" (3 image cards with a grey date/likes/comments box
  overlapping the top-right corner + "View Details"), and a dark
  blue/black footer (Top Products / Quick Links / Features / Resources
  link columns + Newsletter subscribe form + social icon squares +
  copyright bar crediting Colorlib — replaced with a Component Dock link).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/eclipse/`. DOM fetched
  (`/tmp/eclipse-preview.html`, 48,822 bytes) + stylesheet `css/main.css`
  (`/tmp/eclipse-main.css`, 74,292 bytes) + TEMPLATES.md screenshot
  (`eclipse-free-template.jpeg`, 1200×946, viewed in the browser) + live
  page visually inspected in the browser (hero, feature row, course cards,
  video area, features grid, testimonials, registration, footer).
- **Visual design (screenshot + live DOM + CSS):** modern education-platform
  look built on a vibrant purple/violet gradient brand. The hero is a rich
  purple→lavender gradient (`#7c32ff` → `#c738d8` family) with white Playfair
  Display serif headlines, a flat vector illustration on the right (person at
  a computer, light purple circle behind), and a white wave curve along the
  bottom edge; three white feature cards with subtle shadow overlap that
  wave. Content sections are white (`#fff`) with `#222222` ink headings and
  `#828bb2` muted body text; section titles are 42px Playfair Display;
  buttons/accents (form Submit, newsletter subscribe, footer social hover,
  search box) use the purple gradient `linear-gradient(90deg, #7c32ff 0%,
#c738d8 100%)`; course-card detail panels sit on `#f9f9fb`; the
  registration area is deep purple with a white form card that has a purple
  glow shadow (`rgba(185,55,223,0.45)`); blog date boxes are `#828bb2`; the
  footer is dark (`#222222`-family bg image, white text, `#363a4b` social
  squares). Source copy is placeholder/Lorem (the astronomy/Hubble paragraph
  repeats everywhere; all course cards repeat "Learn Angular JS Course for
  Legendary Persons"; the blog title duplicates the features title) —
  paraphrase freely and fix typos, keep the same content _kinds_ (nav links,
  hero headline + subtext, 3 feature titles, course category + price +
  title + rating, video card titles, 6 feature titles, testimonial
  quote/name/role, form labels, blog title + date/likes/comments, footer
  widget links + newsletter).

## Design tokens (from `css/main.css` of the live preview)

- **Brand purple:** `#7c32ff` — gradient start; also the registration-area
  mobile fallback background, `#search-input-box` gradient (270deg variant),
  `.primary-btn:hover` text color, post-content primary-btn background.
- **Brand pink/violet:** `#c738d8` — gradient end.
- **Brand gradient:** `linear-gradient(90deg, #7c32ff 0%, #c738d8 100%)` —
  THE button/action treatment: `.registration-area .course-form-section
.btn`, `#search-input-box`, newsletter `.click-btn`, `.footer-bottom
.footer-social a:hover` (and many sub-page hover states). Use on: form
  Submit, newsletter subscribe, search box, footer social hover.
- **Hero/registration purple backgrounds:** hero `home-banner-bg.png` (rich
  purple→lavender gradient, white wave bottom edge — recreate as a CSS
  gradient + SVG wave, NOT a copied image); registration `registration-bg.png`
  (deep purple wave shape; mobile fallback `#7c32ff`); form-card glow
  `rgba(185, 55, 223, 0.45)` box-shadow.
- **Ink text:** `#222222` — `.section-title h2` (42px, Playfair Display),
  `.home-banner-left h1` (overridden to white by `.text-white`), course `.value`
  price, footer mobile fallback bg.
- **Muted text:** `#828bb2` — body paragraphs, `.feature-item i` (30px
  icons), blog `.top-text` date box background, video-area mobile fallback bg.
- **Light surfaces:** white `#fff` (sections, course `.details`? no — details
  is `#f9f9fb`; white: feature cards, form card, video area bg), `#f9f9fb`
  (`.single-popular-course .details` card panel), `#f9f9ff` (28 uses,
  sub-page section backgrounds).
- **Dark surfaces:** footer bg image with `#222222` mobile fallback
  (dark blue/black look), `.footer-bottom .footer-social a` `#363a4b` 40px
  squares, video `.overlay` `rgba(0,0,0,0.3)`, blog `.overlay`
  `rgba(0,0,0,0.5)`.
- **Star gold:** `#ffc000` — `.testi-item .list li a` rating stars.
- **Fonts (Google via cf-fonts in preview head):** `'Playfair Display'`
  (serif) for headings — hero h1, `.section-title h2`; `'Roboto'` (sans) for
  body, nav, buttons. Both Google Fonts — load via `<link>` in `index.html`.
- **Buttons:** `.btn` (Bootstrap base, uppercase via `.text-uppercase`) —
  purple gradient bg, white text, `border-radius: 0` (footer `.click-btn`
  explicitly radius 0, padding 8px 12px, font-size 12px, weight 500);
  form Submit is `btn text-uppercase`. Square-ish, uppercase, gradient.
- **Header (`.default-header`):** transparent over the purple hero;
  `.is-sticky` (after scroll) → white `#fff` bg + soft shadow
  (`rgba(158,158,158,0.3)`). Nav: uppercase links (white over hero, dark on
  sticky — navbar-light), "Pages" and "Blog" have dropdowns; right side a
  search icon that expands a search input box (`.search-input` +
  `#search-input-box` with purple gradient).
- **Hero (`.home-banner-area`, fullscreen, max-height 1200px):** left
  `.home-banner-left` (col-lg-5): h1 48px (36/40/45 responsive) white,
  Playfair Display, line-height 1em, mb 20px, `span` weight 900; p white,
  mt-20 mb-40; right `.home-banner-right` (col-lg-5, offset-lg-2): centered
  illustration image (hidden below lg). White wave curve along the bottom
  edge (part of the bg image — recreate as an SVG wave or rounded edge).
- **Feature row (`.feature-area`, `margin-top: -210px` — overlaps the
  hero's wave edge):** container-fluid; 3 `.feature-item` (col-lg-2
  col-md-6, margin 30px 0, right border `rgba(130,139,178,0.2)`): themify
  icon 30px `#828bb2` + h4 18px + p. Titles: "New Classes", "Top Courses",
  "Full E-Books".
- **Section titles (`.section-title h2`):** 42px (30 responsive), `#222`,
  Playfair Display, mb 20px, often two lines (`<br>`). Intro `p` max-width
  620px (300px in other-feature/blog). `text-left` variant; `text-white`
  variant on the purple registration area.
- **Popular Courses (`.popular-course-area.section-gap`):** `section-gap`
  = padding 120px 0 (60px mobile). Owl carousel `.popuar-course-carusel`
  (~8 duplicated `.single-popular-course` cards in the DOM, ~4 visible,
  PREV/NEXT controls): `.thumb` img (hover scale 1.03, 0.3s) + `.details`
  (`#f9f9fb`, padding 40px 30px): `.name` uppercase 12px 500 + `.value`
  `$150` `#222222` 700; h4 link 27px line-height; 5 `fa-star` icons + "25
  Reviews".
- **Video area (`.video-area.section-gap-bottom`, pb 120px):** light
  lavender/purple shape bg (`video-area-bg.png`; mobile fallback `#828bb2`);
  section-title `text-white` "Watch Our Trainers in Live Action"; 2
  `.single-video` (col-lg-6): `.video-part` relative — thumbnail img +
  `.overlay` `rgba(0,0,0,0.3)` + `.play-icon` round purple play button
  (`.popup-youtube` link, centered) + h4 course title + p paragraph.
- **Other features (`.other-feature-area`, padding-top 100px):** section
  title "Features That Can Avail By Everyone"; 6 `.other-feature-item`
  (col-lg-4 col-md-6, staggered `mt--160`/`mt--260` masonry offsets on
  desktop): padding 50px 40px, light grey/off-white card bg, themify icon +
  h4 + p. Titles: Lifetime Access, Source File Included, Student
  Membership, 35000+ Courses, Expert Mentors, Live Supports.
- **Testimonials (`.testimonials-area.section-gap`):** NO section title in
  the DOM. Owl `.testi-slider` with 2 slides; each slide: row
  align-items-center: col-lg-5 `.testi-item` — quote image (img/quote.png) +
  p quote + h4 18px name ("Fanny Spencer") + p designation ("Chief
  Executive, Amazon") + star list (`#ffc000`); col-lg-7 testimonial photo.
  PREV/NEXT owl controls bottom-center.
- **Registration (`.registration-area`, padding 157px 0; mobile bg
  `#7c32ff`):** left col: section-title `text-left text-white` — h2 "Watch
  Our Trainers in Live Action" + p (max-width 300px); right col (offset):
  `.course-form-section` — transparent card, padding 70px 35px, box-shadow
  `0 0 50px rgba(185,55,223,0.45)`: h3 `text-white` 24px "Courses for Free"
  - p `text-white` "It is high time for learning" + form (`.course-form-area`
    `text-right`): Name / Phone Number / Email Address inputs
    (`.form-control`) + `.btn.text-uppercase` "Submit".
- **Blog (`.blog-post-area.section-gap`):** container-fluid; section-title
  `text-left` — title DUPLICATES the features title in the source ("Features
  That Can Avail By Everyone" — implement with a distinct blog title, e.g.
  "Latest From Our Blog", and note the deviation); 3 `.single-blog-post`
  (col-lg-4): image with `.overlay` `rgba(0,0,0,0.5)`, `.top-text` box
  absolutely positioned `top: -30px; right: 30px`, bg `#828bb2`, padding
  30px, text-center, 12px uppercase lines: "29th, oct, 2018" / "121 likes" /
  "05 comments"; h4 "Smart Kitchen Setup" + p + "View Details" link.
- **Footer (`.footer-area.section-gap`, dark):** bg image (mobile fallback
  `#222222`), padding 339px 0 120px; 4 widget columns (`h4` white, mb 35px;
  links `li` mb 15px, hover white→gradient underline): "Top Products"
  (Managed Website / Manage Reputation / Power Tools / Marketing Service),
  "Quick Links" (Jobs / Brand Assets / Investor Relations / Terms of
  Service), "Features" (Jobs / Brand Assets / Investor Relations / Terms of
  Service — DUPLICATED in source; vary or keep), "Resources" (Guides /
  Research / Experts / Agencies); newsletter column (col-lg-4): p "You can
  trust us. we only send promo offers," + email input + `.click-btn`
  "subscribe" (purple gradient, radius 0, padding 8px 12px, 12px 500).
  `.footer-bottom` (margin-top 90px): left `.footer-text` p white:
  "Copyright © All rights reserved | This template is made with by
  Colorlib" — replace with "…made with ♥ by **Component Dock**" linking
  https://www.componentdock.com/; right `.footer-social`: 5 links, 40px
  `#363a4b` squares, white icons, hover purple gradient.
- **Mobile:** source uses Bootstrap navbar collapse + owl carousels +
  magnific-popup. Implement with React state: hamburger collapse for nav
  (with dropdown items), simple carousel rows (PREV/NEXT state or a
  horizontally scrollable row), decorative play buttons. Stack: feature
  row (1-col), course cards (1–2 cols), video cards, features grid (1–2
  cols), testimonial (photo below text), form, blog cards, footer columns
  below `lg`; registration left column stacks above the form card.
- **Placeholder images:** `https://picsum.photos/seed/penumbra-<n>/<w>/<h>`.
  Hero right illustration is a flat vector in the source — a photoshopped
  picsum photo is an acceptable substitute (note the deviation); course
  thumbs (8), video thumbs (2), testimonial photo (1), blog images (3).
  Icons from `lucide-react` (Search, Menu, X, Play, Book, GraduationCap,
  Monitor, Key, Files, Users, Award, Coffee, LifeBuoy, Star, Mail,
  Facebook, Twitter, etc.) — themify/fa equivalents.

## Requirements

### Requirement: Header — logo, nav with dropdowns, search, sticky

The system SHALL render a header that is transparent over the hero and turns
white sticky with a shadow after scrolling: brand logo left, uppercase nav
links (Home, About, Courses, Pages ▾, Blog ▾, Contacts), dropdown items under
Pages (Elements, Course Details) and Blog (Blog Home, Blog Details), and a
search icon right that expands a search input. On mobile a hamburger SHALL
collapse the nav into a dropdown.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the top of the page is inspected
- **THEN** it shows the brand logo, the six top-level nav entries (Home
  first), the search icon, and the dropdown triggers on Pages and Blog

#### Scenario: Nav dropdowns

- **GIVEN** the header is rendered
- **WHEN** "Pages" or "Blog" is activated
- **THEN** its dropdown items appear (Elements / Course Details, and Blog
  Home / Blog Details)

#### Scenario: Sticky header

- **GIVEN** the page is scrolled down past the hero
- **WHEN** the header is inspected
- **THEN** it has a white background with a soft shadow while keeping the
  nav links

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** a collapsible menu with the nav links (including the dropdown
  items) appears and can be closed

### Requirement: Hero banner

The system SHALL render a fullscreen hero on a purple gradient background with
a white wave along the bottom edge: left column with a large white Playfair
Display headline ("Take the first step to learn with us"), a short white
paragraph, and a right column with an illustration image (hidden on mobile).

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is inspected
- **THEN** it shows the two-line headline, the paragraph, and the right-side
  illustration on the purple gradient background

### Requirement: Feature row overlapping the hero

The system SHALL render three white feature cards (New Classes, Top Courses,
Full E-Books) that overlap the hero's bottom edge, each with an icon, an 18px
title, and a short paragraph, separated by thin right borders.

#### Scenario: Feature cards

- **GIVEN** the feature row is rendered
- **WHEN** it is inspected
- **THEN** it shows three cards overlapping the hero's wave edge, each with
  an icon, a title, and a paragraph

### Requirement: Popular Courses

The system SHALL render a "Popular Courses / Available Right Now" section
(42px title + intro paragraph) with a carousel of eight course cards
(roughly four visible with PREV/NEXT controls), each showing an image, an
uppercase category tag, a price, a course title, five gold stars, and a
review count, on a `#f9f9fb` detail panel.

#### Scenario: Course cards

- **GIVEN** the Popular Courses section is rendered
- **WHEN** the carousel is inspected
- **THEN** it shows course cards, each with an image, category tag, price,
  title, five stars, and review count

#### Scenario: Carousel navigation

- **GIVEN** the course carousel is rendered
- **WHEN** the NEXT/PREV control is activated
- **THEN** the visible set of course cards changes

### Requirement: Video area

The system SHALL render a "Watch Our Trainers in Live Action" section on a
light lavender background: the section title, an intro paragraph, and two
video cards, each with a thumbnail, a dark overlay, a centered round purple
play button, a course title, and a paragraph.

#### Scenario: Video cards

- **GIVEN** the video area is rendered
- **WHEN** it is inspected
- **THEN** it shows the white section title and two video cards, each with a
  thumbnail, a round purple play button, a title, and a paragraph

### Requirement: Features grid

The system SHALL render a "Features That Can Avail By Everyone" section with
six feature cards in a staggered three-column masonry grid, each with an
icon, a title, and a two-paragraph description (Lifetime Access, Source File
Included, Student Membership, 35000+ Courses, Expert Mentors, Live
Supports).

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **WHEN** the grid is inspected
- **THEN** it shows six cards in a three-column layout, each with an icon, a
  title, and a description

### Requirement: Testimonials

The system SHALL render a testimonial carousel with two slides (no section
title), each slide showing a quote, the speaker's name and role, a star
rating, and a photo, with PREV/NEXT controls.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is rendered
- **WHEN** the carousel is inspected
- **THEN** it shows a slide with the quote, name, role, stars, and photo

#### Scenario: Testimonial navigation

- **GIVEN** the testimonial carousel is rendered
- **WHEN** the NEXT/PREV control is activated
- **THEN** the displayed slide changes

### Requirement: Registration area

The system SHALL render a deep-purple registration section: left column with
the white "Watch Our Trainers in Live Action" title and paragraph; right
column with a white "Courses for Free" form card (title, subtitle, Name /
Phone Number / Email Address inputs, and a purple-gradient Submit button).

#### Scenario: Registration form

- **GIVEN** the registration area is rendered
- **WHEN** the form card is inspected
- **THEN** it shows the "Courses for Free" heading, the three labelled
  inputs (Name, Phone Number, Email Address), and the Submit button

### Requirement: Blog posts

The system SHALL render a blog section with a section title and three post
cards, each with an image (dark overlay), a grey date/likes/comments box
overlapping the top-right corner, a post title, an excerpt, and a
"View Details" link.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** it is inspected
- **THEN** it shows three post cards, each with the meta box (date, likes,
  comments), a title, an excerpt, and a "View Details" link

### Requirement: Footer

The system SHALL render a dark footer with four link columns (Top Products,
Quick Links, Features, Resources), a Newsletter column with an email input
and a purple-gradient "subscribe" button, and a bottom bar with the
copyright line on the left and social icon squares on the right; the bar
SHALL read "Copyright © <year> All rights reserved | This template is made
with ♥ by **Component Dock**" where "Component Dock" links
https://www.componentdock.com/ (no Colorlib credit).

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the four link columns and the Newsletter form with its
  subscribe button

#### Scenario: Footer credit

- **GIVEN** the footer bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

## Verification checklist

- [ ] `openspec/specs/template-penumbra/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/penumbra`, package `@free-react-templates/penumbra`, no
      ColorLib references in app code (grep for colorlib/Eclipse in apps/penumbra)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh penumbra`
- [ ] Section order matches the source: header → hero → feature row → Popular
      Courses → video area → features grid → testimonials → registration →
      blog → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #7c32ff`,
      `--color-brand-end: #c738d8`, `--color-ink: #222222`, `--color-muted:
    #828bb2`, `--color-panel: #f9f9fb`, `--color-star: #ffc000`,
      `--color-sociabg: #363a4b`, `--color-paper: #ffffff`; Google Fonts
      `<link>` in `index.html`: Playfair Display (400/600/700) + Roboto
      (400/500/700)
- [ ] Header: transparent over hero → white sticky with shadow on scroll;
      logo + 6 uppercase nav links + Pages/Blog dropdowns + search icon →
      expanding search input; mobile hamburger collapse
- [ ] Hero: purple gradient bg (`#7c32ff`→`#c738d8` family) + white wave
      bottom edge, 48px white Playfair headline + paragraph + right
      illustration (hidden below lg)
- [ ] Feature row: 3 white cards overlapping the hero's bottom edge (negative
      top margin), icon + 18px title + paragraph, thin right borders
- [ ] Popular Courses: 42px title "Popular Courses / Available Right Now" +
      intro; carousel of 8 cards (4 visible) with PREV/NEXT: image +
      uppercase category + price + title + 5 gold stars + review count on
      `#f9f9fb` panel
- [ ] Video area: light lavender bg, white title "Watch Our Trainers in Live
      Action", 2 video cards (thumbnail + dark overlay + round purple play
      button + title + paragraph)
- [ ] Features grid: 6 cards (3-col, staggered masonry offsets), icon +
      title + description
- [ ] Testimonials: 2-slide carousel, no title, quote + name + role + gold
      stars + photo, PREV/NEXT
- [ ] Registration: deep-purple bg, white left title/paragraph, right form
      card "Courses for Free" + Name/Phone/Email + purple-gradient Submit
- [ ] Blog: 3 cards, grey `#828bb2` meta box overlapping top-right (date /
      likes / comments), title + excerpt + "View Details"; use a DISTINCT
      blog title (source duplicates the features title)
- [ ] Footer: dark, 4 link columns + Newsletter (email + subscribe), bottom
      bar with Component Dock link + 5 social squares (`#363a4b`, purple
      gradient hover)
- [ ] Placeholder images via `https://picsum.photos/seed/penumbra-<n>/<w>/<h>`,
      subject-screened (hero illustration substitute, 8 course thumbs, 2
      video thumbs, 1 testimonial photo, 3 blog images); icons from
      `lucide-react` + inline SVG brand icons
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/eclipse/`), design tokens, deviations
      (name, placeholder images, CSS-gradient hero instead of bg image,
      React carousels/collapse instead of owl/Bootstrap, Component Dock
      footer credit, distinct blog title)
