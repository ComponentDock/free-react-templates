# Template: Studia (Education / E-Learning Course Directory)

## Purpose

Studia is an e-learning / online-course directory landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Onedu" website template (source:
https://colorlib.com/wp/template/onedu/ — "Onedu — Free Education Website
Template by ColorLib"; page title "Education | Template"), built under a
DIFFERENT name (Studia — Latin for "studies", a study/learning word, matching
the source's e-learning pitch; single lowercase word, no collision with
`apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-13), per
the monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The source appears TWO times in TEMPLATES.md (dup-row trap): line 612
(**Education (154)** category — the FIRST occurrence, the canonical one)
and line 1650 (**Education (155)** category) — both `- [ ]` rows of the SAME
template. ONE implementation covers both rows (mark all `[x]` with the same
surge URL at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Onedu" — an e-learning course-directory one-pager
  in the style of Udemy/Coursera: sticky white header with search + Sign In,
  split hero (headline + search form on a purple background left, lifestyle
  photo right), TWO course-card carousels ("popular directory" style),
  about section, testimonials on a warm beige band, an 8-tile category grid
  with hover-reveal buttons, a "Become an Instructor" features section, and a
  purple footer with newsletter. The recreation brands itself **Studia** but
  keeps the same section structure, copy kinds and layout.
- **Live preview DOM analyzed (verified 2026-08-13):**
  `https://preview.colorlib.com/theme/onedu/` — HTTP 200, ~44.6 KB HTML
  (REACHABLE — the preview is live, not a 404; also rendered in a browser,
  a11y tree matches the curl parse). Stylesheets:
  `assets/css/style.css` (custom, ~74 KB — the template-specific tokens live
  here), plus bootstrap.min.css, owl.carousel.min.css, slicknav.css,
  flaticon.css, animate.min.css, magnific-popup.css, fontawesome-all.min.css,
  themify-icons.css, slick.css, nice-select.css. Screenshot
  `onedu-free-template.jpg` (1200×946, viewed in browser) matches the live
  render (red logo mark + search pill header, split purple/photo hero, course
  card carousel; the static shot shows the hero search button as purple-ish
  but the LIVE CSS + live render confirm it is RED `#EA5252` — use the CSS
  value). Browser-rendered verification of the live page confirms the hero
  submit is a coral/red square with a white magnifier and all `.btn` primary
  buttons are purple `#5A4E8C`.
- **Section order (1:1, verified from live DOM):**
  1. **Header** (`div.header-area` → `div.main-header.header-sticky`,
     padding 0 38px, `header-sticky` class for sticky-on-scroll): LEFT
     `div.logo` `img assets/img/logo/logo.png`; CENTER `div.search-icon` /
     `form.search-box` — pill search input `input.form-control` (height 48px,
     border `1px solid #B9B9B9`, radius 30px, placeholder "Search courses..",
     `#878787` placeholder) + `div.form-box` `i` magnifier (`#5A4E8C`, 24px);
     RIGHT `div.main-menu.d-none.d-lg-block` nav links **Home · Browse
     Courses · About · Blog** (dropdown submenu: Blog, Blog Details) **·
     Element · Contact** (`#3C3B37`, 17px/500, hover `#EA5252` + animated 3px
     `#EA5252` underline `::before`); `a.btn.header-btn2` "**Sign In**"
     (purple `#5A4E8C`, padding 24px 23px, white, radius 4px); mobile:
     `div.mobile_menu` (slicknav hamburger).
  2. **Hero slider** (`div.slider-area.slider-height` — height 700px, bg
     `assets/img/hero/hero-shape.jpg`, cover; `div.slider-active` →
     `div.single-slider` → `div.slider-cap-wrapper`): LEFT `div.hero-caption`
     (width ~95%, padding-right 90px, height 500px): eyebrow `span`
     (uppercase 14px/700 `#EA5252` — present in CSS, empty in demo markup) ·
     `h1` "**Learn new skills online with top educators**" (white, 52px/500,
     line-height 1.2, margin-bottom 20px) · `p` "Learn 100% online with
     world-class universities and industry experts." (white, 24px/300,
     margin-bottom 35px) · `form.search-box` → `div.input-form`: `input`
     (height 80px, full-width, no border, padding 9px 33px 9px 24px,
     placeholder "What do you want to learn?", 18px `#3C3B37`) + absolute
     submit `a.search-form` (80×80px square, bg `#EA5252`, white magnifier
     icon, right: -80px). RIGHT `div.hero-img.position-relative`: `img`
     `assets/img/hero/h1_hero1.jpg` (young man on orange couch with laptop,
     bookshelves). (Source ships ONE slide.)
  3. **Popular courses carousel 1** (`section.popular-directorya-area
section-padding fix` — 100px top / 90-100px bottom): centered
     `div.section-tittle.text-center.mb-40` `h2` "**The world's largest
     selection of courses**" (`#3C3B37`, 36-40px/600, lh 1.4, mb 14px) + `p`
     "Choose from 130,000 online video courses with new additions published
     every month"; `div.directory-active` (slick carousel, prev/next arrows
     flanking, `#1a213d` 40% alpha icons): 5× `div.properties.pb-20` →
     `div.properties-card` — `div.properties-img.overlay1` (bottom 50%
     gradient overlay `::before`, radius 4px): `img` courses1..5.jpg (mb 12px)
     - `div.img-text` badge `span` (top-right, bg `#EA5252`, white 16px/400,
       padding 3px 8px, radius 4px — demo shows the rating "4.9 (120 Review)");
       `div.properties-caption`: `h3 a` course title "**Python for Data Science
       and Machine Learning**" (20px/500, mb 8px; hover `#EA5252`) · `p` blurb
       (`#6A6A6A`, mb 10px, with `span` price `#EA5252` 16px) · `div.ratting`
       `ul` 5 star icons (`#FFA200`, 14px) + `span` "4.9 (120 Review)"
       (`#6A6A6A`, 14px). (All 5 cards share the same demo title — vary titles
       with paraphrase.)
  4. **About** (`section.about-area1.about-area2.fix` + `section-overlay`
     — `::before` bg `#EFFDFF` full-height strip behind the row): LEFT
     `div.about-img.about-img1` `img assets/img/gallery/about1.jpg` (radius
     4px); RIGHT `div.about-caption.about-caption1` (offset-xxl-1):
     `div.section-tittle.mb-25` `h2` "**The world's largest selection of
     online courses**" + `p` "Millions of people have used Kingster to decide
     which online course to take. We aggregate courses from many universities
     to help you find the best courses on almost any subject, wherever they
     exist. Our goal is to make online education work for everyone."
     (paraphrase — drop the "Kingster" reference); `div.slider-btns`:
     `a.btn.hero-btn` "**Browse Courses**" (purple `.btn`).
  5. **Popular courses carousel 2** (`section.popular-directorya-area
section-padding fix`): centered `div.section-tittle.text-center.mb-40`
     `h2` "**Students are viewing**"; same `div.directory-active` carousel of
     5 `div.properties` course cards (courses5..8.jpg etc.).
  6. **Testimonials** (`div.testimonial-area.testimonial-padding` — bg
     `#F3EAD8`): centered `div.col-xl-10` → `div.h1-testimonial-active`
     (slider, prev/next round arrow buttons): 2× `div.single-testimonial
text-center` → `div.testimonial-caption` — `div.testimonial-top-cap`
     (quote icon `img` mb 30px + `h2` "**Student says about us**" 34px/500
     `#3C3B37` mb 40px + `p` "Everybody is different, which is why we offer
     styles for every body. Laborum fuga incidunt laboriosam voluptas iure,
     delectus dignissimos…" 22px `#3C3B37` lh 1.5, padding 0 200px desktop);
     `div.testimonial-founder.d-flex` (centered): `div.founder-img` `img`
     founder-img.png + `div.founder-text` `span` "**Petey Cruiser**"
     (18px/600 `#3C3B37`) + `p` role (14px/500 `#6A6A6A`).
  7. **Categories** (`section.popular-location.section-padding`): centered
     `div.section-tittle.text-center.mb-40` `h2` "**Explore top
     categories**" (demo markup has the typo "categoriesn" — fix in
     recreation); grid (col-xl-3/lg-4/md-6/sm-6) of 8× `div.single-location
mb-20`: `div.location-img` (radius 4px, `::before` purple overlay
     `rgba(90,78,140,0.3)` → 0.7 on hover, `img` scale 1.05 on hover) with
     absolute centered `div.location-details` (top 40% → 50% translateY(-50%)
     on hover): `h4 a` category name (white 20px/600): **Programing · VFX ·
     App Development · Technology · Graphics Design · Music · Product Design ·
     Video Editing** + `p` white 16px/300 (course-count line) +
     `a.location-btn` "**View Courses**" (bg `#EA5252`, white, 14px, padding
     7px 13px, radius 4px, `visibility:hidden; opacity:0` → visible on card
     hover; hover: white bg, `#EA5252` text).
  8. **Become an Instructor** (`section.about-area2.section-bg` — `#EFFDFF`
     bg, padding 100px 0): LEFT `div.about-caption.about-caption2`:
     `div.section-tittle.mb-25` `h2` "**Become an Instructor**" + `p` "The
     automated process all your website tasks. Discover tools and techniques
     to engage effectively with the …" (paraphrase); 3× `div.single-features`
     (flex row, icon `div.features-icon` img + `div.features-caption` `h3`
     25px/400 mb 16px + `p` 16px `#3C3B37`); `div.slider-btns`:
     `a.btn.hero-btn.mr-15` "**Become a Instructor**" (purple `.btn`) +
     `a.video-btn` "**Watch Video**" (red `#EA5252`, 18px/400, radius 5px,
     play icon, `i` mr 5px). RIGHT `div.about-img.about-img2` `img`
     `assets/img/gallery/about2.jpg`.
  9. **Footer** (`div.footer-area.footer-padding` — bg `#5A4E8C`):
     `div.footer-wrapper` → `div.container` → `div.row.justify-content-between`:
     (1) brand col (col-xl-3): `div.footer-logo.mb-25` `img logo.png` +
     `div.footer-pera` about p (16px/300, lh 1.8, white-ish) +
     `div.footer-social` circle icons (40×40, radius 50%, bg
     `rgba(255,255,255,0.06)`, white; hover bg `#EA5252`); (2)-(3)
     `div.footer-tittle` `h4` "**Subjects**" / "**Community**" / "**Company**"
     (white 18px/500 mb 29px) + `ul` links (5 items each: Design & creatives,
     Telecommunication, Restaurant, Programing, Architecture — demo filler,
     vary with paraphrase; `#B8B1D6` 300, hover white + underline +
     padding-left 2px, mb 19px); (4) `div.footer-tittle` "**Newsletter**" +
     `div.footer-form` email form: `input` (height 47px, radius 4px, bg
     `rgba(255,255,255,0.1)`, white text, placeholder "Enter your email") +
     `div.form-icon` `button` "**Subscribe**" (full-width, bg `#EA5252`, white,
     500, padding 17px 22px, radius 4px, mt 10px) + `div.mt-10.info`; BOTTOM
     `div.footer-bottom-area` → `div.footer-border` (padding-top 39px,
     border-top) → `div.footer-copy-right.text-center` copyright line
     (14px `#B8B1D6`, lh 2, red `#EA5252` heart + link — source credits
     "Colorlib" — REPLACED per policy). Plus `a` "Go to Top" scroll-up link
     at the very end.
- **Visual design (TEMPLATES.md screenshot `onedu-free-template.jpg`,
  1200×946, viewed in browser 2026-08-13):** classic clean e-learning landing
  in the Udemy/Coursera style. Header: red logo mark + "Onedu" left, central
  pill search bar ("Search courses..."), nav links right, cart icon with red
  notification badge and a dark "Sign In" button far right. SPLIT hero: LEFT
  — deep purple/indigo background with the large white headline "Learn new
  skills online with top educators", a smaller white sub-line, and a white
  search bar with a purple/red submit; RIGHT — lifestyle photo of a young man
  on an orange leather couch with a laptop, wooden bookshelves behind. Below:
  centered "The world's largest selection of courses" heading + a horizontal
  carousel of course cards (identical "Python for Data Science and Machine
  Learning" placeholder titles, ~4.9 star ratings with review counts, red
  rating badge, prev/next arrows). Professional, modern, academic; generous
  spacing; purple CTAs on white with warm beige testimonial band. (Footer not
  visible in the shot; from the live DOM: purple footer with newsletter.)
- **Design tokens extracted from the live CSS (`assets/css/style.css`,
  verified 2026-08-13):**
  - Brand purple: **`#5A4E8C`** (12 uses) — `.btn` bg (Jost, padding 30px
    35px, white 16px/500, radius 4px, lh 1; hover `::before` sweeps dark
    `#1A213D` scaleX 0→1), `.header-btn2` (Sign In, padding 24px 23px),
    `.hero-btn` (padding 29px 31px), `.footer-area` bg, header search icon.
  - Accent red: **`#EA5252`** (39 uses) — nav hover underline + link hover,
    hero eyebrow span, `.input-form a` hero search submit (80px square),
    `.img-text` card badge, price `span`, `.location-btn` (category hover
    button), `.footer-form .form-icon button` (Subscribe), `.slider-btns a`
    (red uppercase links), `.video-btn`, footer heart/link.
  - Dark text: **`#3C3B37`** (27 uses) — `.section-tittle h2`, nav links,
    hero search input text, testimonial h2/p, features p.
  - Muted: **`#6A6A6A`** (card body p, rating count, founder role),
    **`#878787`** (input placeholders), **`#B8B1D6`** (footer links,
    copyright on purple).
  - Light section bg: **`#EFFDFF`** (`.section-bg`, `.section-overlay::before`
    — about-area1 + about-area2 bands).
  - Testimonial band: **`#F3EAD8`** (`.testimonial-area` bg).
  - Rating stars: **`#FFA200`** (`.ratting ul li i`).
  - Button hover sweep: **`#1A213D`** (dark navy, `.btn::before` scaleX
    animation, radius 4px base).
  - Category overlay: `rgba(90,78,140,0.3)` → `0.7` hover (`.location-img
::before`); carousel arrows `rgba(26,33,61,0.4)` icons → `#1a213d`.
  - Header search pill: white bg, border `#B9B9B9`, radius 30px, height 48px.
  - Text colors: white on purple/dark bands; hero h1/p white; section h2
    `#3C3B37`.
  - Fonts: **"Jost", sans-serif** (everything — display, body, buttons; loaded
    via `@import url("https://fonts.googleapis.com/css2?family=Jost:wght@200…
700")`; hero h1 52px/500/lh 1.2, section h2 36-40px/600/lh 1.4, card h3
    20px/500, category h4 20px/600, footer h4 18px/500). Google Fonts — add
    `<link>` in `index.html`.
  - Buttons: `.btn` purple rect, radius 4px, padding 30px 35px, white Jost
    16px/500, dark `#1A213D` hover sweep; `.location-btn` small red (14px,
    padding 7px 13px, radius 4px, hidden→visible on card hover); footer
    subscribe full-width red (17px 22px, radius 4px); header search icon
    `#5A4E8C` 24px.
  - Section rhythm: `.section-padding` = 100px top / 90-100px bottom;
    `.testimonial-padding` ~100px; `.about-area2` 100px 0; `.slider-height`
    700px; hero input 80px; footer form input 47px radius 4px; `.section-tittle
h2` mb 14px + tittle mb 40-50px.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap 5
  layout (NO Bootstrap dependency); section order 1:1 as above; Jost via
  Google Fonts `<link>` in `index.html`; brand `#5A4E8C` + `#EA5252` +
  `#3C3B37` in `@theme` used via Tailwind classes, with `#EFFDFF`, `#F3EAD8`,
  `#FFA200`, `#1A213D`, `#6A6A6A`, `#878787`, `#B8B1D6`, `#B9B9B9`,
  `rgba(90,78,140,0.3/0.7)` tokens; images via seeded picsum placeholders
  (`picsum.photos/seed/studia-<n>/<w>/<h>` — hero needs a person-at-laptop
  study subject, course cards generic subject photos, about1/about2,
  founder avatar; screen the seeds per the skill's pixel-metric method),
  icons from lucide-react (search, magnifier, star, play, chevron-left/right,
  menu, send; social icons as inline SVG — lucide-react removed brand icons);
  the source's slick carousels (courses ×2, testimonials) as client-side React
  state (scroll/translate or index-based track, prev/next buttons); copy may
  be paraphrased but keep the same kinds (header search pill; hero headline +
  subtext + search form; course card title + blurb + rating; about heading +
  paragraph + CTA; testimonial quote + founder; category tile + "View
  Courses"; instructor heading + 3 features + CTAs; footer widgets +
  newsletter form); brand "Onedu"/"Colorlib" → "Studia" everywhere including
  the footer credit; footer MUST link https://www.componentdock.com/ per
  policy; document title "Studia — Learn New Skills Online with Top
  Educators". Nav/CTA links are dead anchors (single landing page; "Home",
  "Browse Courses", etc. anchor to `#` harmlessly). The demo's identical
  course-card titles and "Kingster" about-copy reference should be varied/
  paraphrased (same _kinds_ of content, distinct copy).

Studia lives in `apps/studia` (package `@free-react-templates/studia`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header

The system SHALL render a sticky white header with a logo, a pill search box,
desktop nav links and a Sign In button.

#### Scenario: Header content

- **GIVEN** the Studia page is rendered
- **WHEN** the header is inspected
- **THEN** the header SHALL show the brand logo on the left
- **AND** a pill-shaped search input (placeholder "Search courses..") with a
  purple magnifier icon SHALL be shown
- **AND** nav links Home, Browse Courses, About, Blog (with submenu Blog,
  Blog Details), Element, Contact SHALL be shown on desktop
- **AND** a purple "Sign In" button SHALL be shown on the right

#### Scenario: Sticky header

- **GIVEN** the page is scrolled
- **WHEN** the header is observed after scrolling
- **THEN** it SHALL become sticky (fixed on top of the viewport)

### Requirement: Hero

The system SHALL render a split hero with a headline, subtext, a course
search form and a photo.

#### Scenario: Hero content

- **GIVEN** the Studia page is rendered
- **WHEN** the hero section is inspected
- **THEN** the hero SHALL be a two-column split (caption left on the purple
  `#5A4E8C` background, photo right; stacked on mobile)
- **AND** the headline "Learn new skills online with top educators" SHALL be
  shown in large white Jost type (~52px desktop)
- **AND** the subtext "Learn 100% online with world-class universities and
  industry experts." SHALL be shown (white, ~24px/300)
- **AND** a white search input (placeholder "What do you want to learn?")
  with a red `#EA5252` square submit button SHALL be shown

#### Scenario: Hero search form

- **GIVEN** the hero search form is rendered
- **WHEN** text is typed into the search input
- **THEN** the input SHALL accept the text and the submit button SHALL be
  focusable/clickable (dead action on the landing page)

### Requirement: Popular courses carousels

The system SHALL render TWO course-card carousels ("The world's largest
selection of courses" and "Students are viewing") with rating badges.

#### Scenario: First carousel (largest selection)

- **GIVEN** the Studia page is rendered
- **WHEN** the first courses section is inspected
- **THEN** a centered heading "The world's largest selection of courses"
  with the sub-line "Choose from 130,000 online video courses with new
  additions published every month" SHALL be shown
- **AND** a horizontal carousel of course cards SHALL be shown, each with a
  photo, a red rating badge (e.g. "4.9 (120 Review)"), a course title, a
  blurb with a red price, and gold `#FFA200` star ratings
- **AND** prev/next arrow buttons SHALL move the carousel

#### Scenario: Second carousel (Students are viewing)

- **GIVEN** the Studia page is rendered
- **WHEN** the second courses section is inspected
- **THEN** a centered heading "Students are viewing" SHALL be shown
- **AND** the same course-card carousel pattern SHALL be shown with prev/next
  arrows

### Requirement: About

The system SHALL render an about section with a photo, a heading, a
paragraph and a Browse Courses CTA.

#### Scenario: About content

- **GIVEN** the Studia page is rendered
- **WHEN** the about section is inspected
- **THEN** the about section SHALL have the light `#EFFDFF` background band
- **AND** a photo SHALL be shown on the left and the heading "The world's
  largest selection of online courses" with a supporting paragraph on the
  right
- **AND** a purple "Browse Courses" button SHALL be shown

### Requirement: Testimonials

The system SHALL render a testimonial carousel on a warm beige band.

#### Scenario: Testimonial content

- **GIVEN** the Studia page is rendered
- **WHEN** the testimonial section is inspected
- **THEN** the section SHALL have the `#F3EAD8` background
- **AND** it SHALL show the heading "Student says about us", a quote
  paragraph, and a founder row (avatar + name + role)
- **AND** prev/next controls SHALL switch between testimonial slides

### Requirement: Categories

The system SHALL render an 8-tile category grid with hover-reveal View
Courses buttons.

#### Scenario: Category grid

- **GIVEN** the Studia page is rendered
- **WHEN** the categories section is inspected
- **THEN** a centered heading "Explore top categories" SHALL be shown
- **AND** 8 category tiles SHALL be shown (Programing, VFX, App Development,
  Technology, Graphics Design, Music, Product Design, Video Editing), each
  with a photo, a purple overlay, a white category title and a sub-line

#### Scenario: Category hover

- **GIVEN** a category tile is rendered
- **WHEN** the pointer hovers the tile
- **THEN** the overlay SHALL darken (0.3 → 0.7), the image SHALL scale up
  slightly, the title SHALL lift, and a red "View Courses" button SHALL
  appear

### Requirement: Become an Instructor

The system SHALL render a features section with a heading, three feature
rows and CTAs.

#### Scenario: Instructor section content

- **GIVEN** the Studia page is rendered
- **WHEN** the instructor section is inspected
- **THEN** the section SHALL have the light `#EFFDFF` background
- **AND** it SHALL show the heading "Become an Instructor" with a supporting
  paragraph
- **AND** three feature rows SHALL be shown, each with an icon, a title and a
  short paragraph
- **AND** a purple "Become a Instructor" button and a red "Watch Video" link
  SHALL be shown

### Requirement: Footer

The system SHALL render a purple footer with a brand column, three link
columns, a newsletter form and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the Footer is rendered
- **WHEN** the footer is inspected
- **THEN** it SHALL have the purple `#5A4E8C` background
- **AND** it SHALL show: a brand column (logo + about paragraph + social
  icons); "Subjects", "Community" and "Company" link columns; a "Newsletter"
  column with an email input (white, rounded 4px) and a red "Subscribe"
  button

#### Scenario: Copyright bar

- **GIVEN** the Footer is rendered
- **WHEN** the bottom bar is inspected
- **THEN** a centered copyright line SHALL be shown with a neutral credit
  (no ColorLib attribution; per policy the footer MUST link
  https://www.componentdock.com/)
- **AND** a "Go to Top" scroll-up link SHALL be available

## Verification checklist

- [ ] App `apps/studia` (package `@free-react-templates/studia`), 100%
      vitest coverage, per-app gate green (`scripts/verify-app.sh studia`)
- [ ] Section order 1:1 with the source: sticky white header (logo, pill
      search, nav, Sign In) → split hero (headline + subtext + search form
      left on purple, photo right) → courses carousel 1 ("The world's largest
      selection of courses") → About (`#EFFDFF` band, photo + copy + Browse
      Courses) → courses carousel 2 ("Students are viewing") → Testimonials
      (`#F3EAD8` band + slider) → Categories (8 tiles + hover View Courses)
      → Become an Instructor (`#EFFDFF`, 3 features + CTAs) → purple footer
      (brand / Subjects / Community / Company / Newsletter + copyright bar)
- [ ] Brand tokens in `@theme`: `#5A4E8C` (brand purple), `#EA5252` (accent
      red), `#3C3B37` (dark text), `#EFFDFF` (light band), `#F3EAD8`
      (testimonial band), `#FFA200` (rating stars), `#1A213D` (button hover
      sweep), `#6A6A6A` / `#878787` / `#B8B1D6` (muted), `#B9B9B9` (search
      border) — all via Tailwind classes
- [ ] Font Jost via Google Fonts `<link>` in `index.html`; hero h1 ~52px,
      section h2 ~36-40px desktop
- [ ] Buttons: `.btn` purple rect (radius 4px, padding ~30px 35px, dark
      `#1A213D` hover sweep), hero search submit red 80px square, category
      "View Courses" small red (hidden → visible on hover), footer
      "Subscribe" full-width red
- [ ] Placeholder images via `picsum.photos/seed/studia-<n>/<w>/<h>` (hero
      must be a person-at-laptop study photo; course cards subject photos;
      about1/about2, founder avatar subject-appropriate), icons from
      lucide-react (social icons as inline SVG), no copied assets
- [ ] Brand renamed "Onedu"/"Colorlib" → "Studia" everywhere; the "Kingster"
      mention in the about copy paraphrased away; copyright credit neutral;
      footer MUST link https://www.componentdock.com/; dead links (nav,
      Sign In, Browse Courses, View Courses, footer links) anchor harmlessly
- [ ] Carousels (courses ×2, testimonials) implemented as accessible React
      state carousels (prev/next buttons with aria-labels, keyboard
      focusable) — no Bootstrap/jQuery/slick
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] jsdom 30: copy the MemoryStorage polyfill from
      apps/cura/src/test/setup.ts into the new app's setup if any
      localStorage use is introduced
- [ ] TEMPLATES.md bookkeeping at ship time: mark BOTH `- [ ]` rows
      (line 612 Education, line 1650 Education) `[x]` with the same surge
      URL + `npm run readme:status` (implementer)
