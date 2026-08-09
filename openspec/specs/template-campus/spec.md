# Template: Campus (Online University Landing)

## Purpose

Campus is a single-page online-university landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Academy" design (see TEMPLATES.md — listed under BOTH the
Bootstrap (216) and Education (43) categories), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a bold green-gradient education landing page: a split header
(logo + "Register / Login" strip over a light-gray menu bar with a slanted
green phone block), a full-screen photo hero slider ("Wellcome to our Online
University"), a green gradient feature band overlapping the hero bottom
(Online Courses · Amazing Teachers · Great Support), a 3×2 grid of course
cards with circular green icon badges, a dark photo-overlay testimonials
section, a 2×2 grid of popular-course cards (photo thumb + meta + star
rating), a partner logo row, a green gradient call-to-action band, and a
dark 4-column footer with a bottom bar. Campus recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Academy" is FORBIDDEN as the app
> name. **Campus** (the grounds of a university — the online-university
> theme) is the new, original name — single lowercase word, no collision
> with `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md
> (verified 2026-08-09). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Academy" — free Bootstrap education website
  template (source: https://colorlib.com/wp/template/academy/). TEMPLATES.md
  lists it twice: line 328 under **Bootstrap (216)** and line 1623 under
  **Education (43)** (same source, duplicated checklist entry — both rows
  get marked `[x]` when shipped). The recreation brands itself **Campus**.
- **Live preview DOM analyzed (verified 2026-08-09):**
  `https://preview.colorlib.com/theme/academy/` — HTTP 200, 33.9 KB HTML +
  `style.css` 37.7 KB (Bootstrap 4 + owl.carousel + classy-nav + custom
  icon font + Montserrat). Screenshot `academy-free-template.jpg` (1200×946,
  browser-verified) matches the live render 1:1: white top strip with
  "ACADEMY" wordmark + graduation-cap icon and "Register / Login"; light
  menu bar with HOME / PAGES / MEGA MENU / ABOUT US / COURSE / CONTACT and a
  slanted bright-green phone banner "(+65) 456 332 5568 889"; hero photo of
  a smiling graduate; green "Read More" button; green 3-feature band at the
  bottom of the fold.
- **⚠ KEY TRAP:** do NOT build a full multipage site. The page is ONE
  single-page landing (index.html) — the nav's About Us / Course / Blog /
  Contact / Elements links point to sibling pages that are out of scope for
  this recreation (same as every other single-page template in this repo).
  Recreate the header/nav as a single-page anchor structure (or non-
  functional links) and the 9 rendered sections below. Also note the source
  hero copy has a typo ("Wellcome") — keep it or fix it deliberately, but
  the section structure must stay 1:1.
- **Section order (1:1, verified from live DOM):**
  1. **Header** (`header.header-area`, 125px): `div.top-header` (95px, flex
     `space-between`): `.academy-logo` (logo image → recreate as styled
     text, left) + `.login-content` "Register / Login" link (right, weight
     600, hover `#69bc5f`). Below it `.academy-main-menu` (absolute, 85px,
     `top: 95px`, z-index 100, overlapping the hero): `.classy-navbar` bg
     `#f5f7fa` with uppercase weight-700 links (Home · Pages dropdown ·
     About Us · Course · Blog · Contact · Elements mega-menu) + right-side
     `.calling-info .call-center` — green gradient block (padding 0 40px,
     line-height 85px) with a white phone icon in a 45px white-bordered
     circle + white bold 14px phone " (+65) 456 332 5568 889", and a rotated
     green parallelogram `::before` on its left edge. Sticky (`.is-sticky`):
     menu `position: fixed; top: 0; background #f5f7fa; box-shadow
0 5px 40px rgba(0,0,0,0.2)`, plus a 25%-wide `#83c331` `::after` band
     on the right.
  2. **Hero** (`section.hero-area`): `.hero-slides.owl-carousel` with 2
     slides (`single-hero-slide bg-img`, `background-image:
img/bg-img/bg-1.jpg` and `bg-2.jpg`, height 850px, cover): centered
     `.hero-slides-content` (container h-100 + row h-100 align-items-center)
     → `<h4>` eyebrow "All the courses you need" (white) + `<h2>`
     "Wellcome to our Online University" (white, 60px, weight 700) +
     `<a class="btn academy-btn">` "Read More". Owl prev/next arrows: 56px
     green-gradient squares at left/right 5%, hidden until hover, `#141414`
     on hover.
  3. **Top features** (`div.top-features-area`, `margin-bottom: -60px`):
     `.features-content` green gradient band (`translateY(-50%)` → overlaps
     the hero's bottom edge), padding 40px 15px, 3 columns each with a
     white 40px icon + white h5 (18px, weight 600) and 2px white
     `border-right` dividers: `icon-agenda-1` "Online Courses" ·
     `icon-assistance` "Amazing Teachers" · `icon-telephone-3" "Great
     Support" (last column no border).
  4. **Courses grid** (`div.academy-courses-area section-padding-100-0`):
     NO section heading — directly a 3×2 grid (`col-12 col-sm-6 col-lg-4`,
     `mb-100` per card) of 6 `.single-course-area` cards: 91px circular
     green-gradient `.course-icon` (white 40px icon, radius 50%, margin-
     right 30px) + `.course-content` h4 title + p blurb (Lorum ipsum):
     Business School (`icon-id-card`) · Marketing (`icon-worldwide`) ·
     Photography (`icon-map`) · Social Media (`icon-like`) · Development
     (`icon-responsive`) · Design (`icon-message`). Hover: h4 → `#69bc5f`.
  5. **Testimonials** (`div.testimonials-area section-padding-100 bg-img
bg-overlay`, background `bg-2.jpg` + `rgba(0,0,0,0.88)` overlay):
     `.section-heading.text-center.mx-auto.white` → h3 "See what our
     satisfied customers are saying about us" (34px white); then a 2×2 grid
     (`col-12 col-md-6`) of 4 `.single-testimonial-area` items: 55px round
     avatar (`testimonial-thumb`, border 2px transparent → `#69bc5f` on
     hover; images t1–t4.jpg) + `.testimonial-content`: h5 quote title
     (white, weight 500) + p quote (white) + h6 name (white, 15px) with
     green `#69bc5f` span role: "Maria Smith, Student" · "Shawn Gaines,
     Student" · "Ross Cooper, Student" · "James Williams, Student".
  6. **Popular courses** (`div.top-popular-courses-area section-padding-
100-70`): `.section-heading.text-center.mx-auto` → span eyebrow "The
     Best" (12px uppercase `#606060`, letter-spacing 2px) + h3 "Top Popular
     Courses"; then a 2×2 grid (`col-12 col-lg-6`) of 4
     `.single-top-popular-course` cards (bg `#eef3f6`, flex, mb-30):
     `.popular-course-thumb` (bg image `pc-1..4.jpg`, 46% width, height
     350px, cover) + `.popular-course-content` (54%, padding 30px): h5
     title (18px, weight 500) + span "By Simon Smith · March 18, 2018"
     (12px `#61ba6d`) + `.course-ratings` 5 star icons (10px `#fbb710`,
     empty stars `#e0e3e4`) + p blurb ("Cras vitae turpis lacinia…") +
     "See More" link. Titles: Business for begginers · Advanced HTML5 ·
     Marketing 101 · Business for begginers.
  7. **Partners** (`div.partner-area section-padding-0-100`):
     `.partners-logo` row of 5 logo links (max-width 130px; images
     `img/clients-img/partner-1..5.png`).
  8. **Call to action** (`div.call-to-action-area`): green gradient band,
     padding 70px 0, centered h3 "Do you want to enrole at our Academy?
     Get in touch!" + `<a class="btn academy-btn">` "See More".
  9. **Footer** (`footer.footer-area`): `.main-footer-area` bg `#232323`,
     4 widgets (`col-12 col-sm-6 col-lg-3`, `.footer-widget`): (a) About —
     logo (logo2.png → styled text) + blurb "Cras vitae turpis lacinia,
     lacinia lacus non, fermentum nisi. Donec et sollicitudin est, in
     euismod erat. Ut at erat et arcu pulvinar cursus a eget." +
     `.footer-social-info` icons (`#606060` → white hover); (b) "Usefull
     Links" — Home · Services & Features · Accordions and tabs · Menu ideas
     · Gallery · Contact (`#606060` → `#69bc5f` hover, mb-15 each); (c)
     "Gallery" — 6 images (`gallery1–6.jpg`, 30% width grid, green
     `rgba(97,186,109,0.8)` overlay on hover); (d) "Contact" — 3
     `.single-contact` rows (green `#69bc5f` 20px icon + p): "4127/ 5B-C
     Mislane Road, Gibraltar, UK" · "Main: 203-808-8613 / Office:
     203-808-8648" · "office@yourbusiness.com". Then `.bottom-footer-area`
     bg `#141414`, padding 30px, 12px centered text: "Copyright © All
     rights reserved | This template is made with by Colorlib" → reword the
     ColorLib credit line (e.g. "made with ♥ by Component Dock"), keep the
     © line kind.
- **Visual design (TEMPLATES.md screenshot `academy-free-template.jpg`,
  1200×946, viewed in browser 2026-08-09 + live render):** clean education
  aesthetic. Palette: white top strip, light-gray (`#f5f7fa`) menu bar, and
  a vibrant green (`#61ba6d → #83c331` gradient, reads like lime
  `#8BC34A`) used for buttons, the phone banner, the feature band, icon
  badges and the CTA band; dark photo overlays (`rgba(0,0,0,0.88)`) behind
  testimonials; dark charcoal (`#232323`/`#141414`) footer. Sharp corners
  everywhere (buttons radius 0), uppercase nav, white-on-photo hero text.

## Design tokens (from `style.css`, verified 2026-08-09)

- **Font:** Montserrat 300–900 (Google Fonts `@import` in the source;
  load via `<link>` in `index.html`). Body 14px; headings `#242424`,
  weight 700, line-height 1.3; nav links uppercase weight 700.
- **Brand colors:**
  - `#61ba6d` → `#83c331` — primary green gradient (buttons
    `.academy-btn`, feature band, course icon badges, phone block, CTA
    band, hero slider arrows, preloader). Equivalent solid `#69bc5f`
    (hover/accents: nav link hover, testimonial hover ring + role, popular
    course meta, footer link hover, contact icons).
  - `#f5f7fa` — menu bar + sticky menu background.
  - `#eef3f6` — popular-course card background.
  - `#fbb710` — star ratings (empty stars `#e0e3e4`).
  - `#606060` — footer links/socials, section-heading eyebrow.
  - `#232323` — main footer background; `#141414` — bottom bar, button
    dark variant, slider-arrow hover.
  - `rgba(0, 0, 0, 0.88)` — testimonials dark overlay.
  - `#ffffff` — text on brand/photo, icons.
- **Buttons:** `.academy-btn` — `min-width 160px; height 65px;
line-height 65px; padding 0 40px; border-radius: 0` (SHARP corners);
  font-size 14px weight 600, white text, green gradient bg (hover keeps
  gradient). Variants in CSS (btn-2 dark `#141414`, btn-3 `#69bc5f`,
  btn-4 outline white/green) — only the base green btn is used on this
  page.
- **Radii:** 0 (buttons), 50% (course icon badges, call-center phone icon
  circle, testimonial avatars).
- **Spacing rhythm:** section paddings — `section-padding-100` (100px 0),
  `section-padding-100-0` (100px top), `section-padding-100-70` (100px/70px),
  `section-padding-0-100` (0/100px); section-heading margin-bottom 80px;
  card gaps mb-100 (courses), mb-30 (popular, footer contact), footer
  widget margin-bottom 100px (`mb-100`).
- **Hero:** slide height 850px (650px ≥992px, 550px ≥768px, 600px ≤767px);
  h2 60px (48/36/30 responsive); eyebrow h4 white; slider arrows 56px.
- **Header:** top-header 95px; menu 85px; phone block `padding 0 40px`
  with 45px white-bordered phone icon circle; sticky shadow
  `0 5px 40px rgba(0,0,0,0.2)`.
- **Popular course card:** thumb 46% / content 54% (content padding 30px,
  thumb height 350px; stack 100% ≤767px).
- **Responsive (source breakpoints):** features band dividers flip to
  bottom borders ≤767px; popular-card content/thumb stack ≤767px;
  hero/typography scale at 992/768/480.

## Requirements

### Requirement: Split header with top strip and green phone block

The system SHALL render the two-tier header: a 95px top strip (logo left,
"Register / Login" right) above a light-gray 85px menu bar (uppercase nav
links + green gradient phone block on the right) that overlaps the hero's
top edge and becomes a fixed bar with shadow on scroll.

#### Scenario: Header renders on load

- **GIVEN** the Campus page is rendered
- **WHEN** the page loads
- **THEN** the top strip SHALL show the "Campus" wordmark (styled text,
  graduation-cap icon) on the left
- **AND** the top strip SHALL show a "Register / Login" link on the right
- **AND** the menu bar SHALL show uppercase nav links (Home, About Us,
  Course, Blog, Contact)
- **AND** the right end of the menu bar SHALL show the green gradient phone
  block with a phone icon in a white-bordered circle and the number
  "(+65) 456 332 5568 889"
- **AND** the menu bar SHALL be light gray (`#f5f7fa`) and overlap the top
  of the hero

#### Scenario: Sticky menu on scroll

- **GIVEN** the page is scrolled past the hero
- **WHEN** the menu bar's sticky state activates
- **THEN** the menu SHALL fix to the top of the viewport with background
  `#f5f7fa` and shadow `0 5px 40px rgba(0,0,0,0.2)`

### Requirement: Hero slider

The system SHALL render a full-width hero (850px tall) with two photo
slides, centered white headline text, and a green "Read More" button.

#### Scenario: Hero content

- **GIVEN** the Campus page is rendered
- **WHEN** the hero area is displayed
- **THEN** the hero SHALL show a full-bleed background photo (cover,
  centered) per slide
- **AND** the hero SHALL show the eyebrow "All the courses you need" in
  white above the headline "Wellcome to our Online University" in white
  60px
- **AND** the hero SHALL show a green "Read More" button (sharp corners,
  160×65px)
- **AND** the hero SHALL support sliding between its two slides (prev/next
  square green arrows, visible on hover)

### Requirement: Green feature band

The system SHALL render the green gradient feature band overlapping the
hero's bottom edge, with three white-iconed features separated by white
dividers.

#### Scenario: Three features

- **GIVEN** the Campus page is rendered
- **WHEN** the feature band is displayed
- **THEN** the band SHALL have a green gradient background and overlap the
  hero's bottom edge
- **AND** the band SHALL show three features with white icons and white
  weight-600 titles: "Online Courses", "Amazing Teachers", "Great Support"
- **AND** adjacent features SHALL be separated by a 2px white vertical
  divider (horizontal on mobile)

### Requirement: Courses grid

The system SHALL render a 3×2 grid of six course cards (no section
heading), each with a circular green-gradient icon badge, a title and a
blurb.

#### Scenario: Six course cards

- **GIVEN** the Campus page is rendered
- **WHEN** the courses grid is displayed
- **THEN** the grid SHALL show six cards in three columns (two rows) on
  desktop and one column on mobile
- **AND** each card SHALL show a 91px circular green-gradient icon badge
  with a white icon
- **AND** each card SHALL show an h4 title and a short paragraph: Business
  School · Marketing · Photography · Social Media · Development · Design
- **AND** the title SHALL turn `#69bc5f` on hover

### Requirement: Testimonials with dark overlay

The system SHALL render the testimonials section over a dark-overlay photo
background with a white heading and four testimonial items in a 2×2 grid.

#### Scenario: Testimonials content

- **GIVEN** the Campus page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL show a photo background with a
  `rgba(0,0,0,0.88)` overlay
- **AND** the section SHALL show the white heading "See what our satisfied
  customers are saying about us"
- **AND** the section SHALL show four items (2×2 on ≥768px): a 55px round
  avatar, a white quote title, white quote text, and a white name with a
  green role ("Maria Smith, Student" etc.)
- **AND** the avatar border SHALL turn green (`#69bc5f`) on hover

### Requirement: Popular courses grid

The system SHALL render the "Top Popular Courses" section: eyebrow + h3
heading and a 2×2 grid of four photo cards with meta, star ratings and a
"See More" link.

#### Scenario: Popular course cards

- **GIVEN** the Campus page is rendered
- **WHEN** the popular courses section is displayed
- **THEN** the section SHALL show the uppercase eyebrow "The Best" and the
  h3 "Top Popular Courses"
- **AND** the section SHALL show four cards on light-gray (`#eef3f6`)
  backgrounds, each with a photo thumb (46%) and content (54%) side by
  side on desktop (stacked on mobile)
- **AND** each card SHALL show the title, "By Simon Smith · March 18,
  2018" in green 12px, five star icons (yellow `#fbb710`, empty `#e0e3e4`),
  a short paragraph and a "See More" link

### Requirement: Partners row

The system SHALL render a centered row of five partner logo links below the
popular courses section.

#### Scenario: Partner logos

- **GIVEN** the Campus page is rendered
- **WHEN** the partners area is displayed
- **THEN** the area SHALL show five partner logos in a row (placeholder
  images, max-width 130px, shrinking on mobile)

### Requirement: Call-to-action band

The system SHALL render a green gradient CTA band with a headline and a
"See More" button.

#### Scenario: CTA content

- **GIVEN** the Campus page is rendered
- **WHEN** the CTA band is displayed
- **THEN** the band SHALL have a green gradient background
- **AND** the band SHALL show the heading "Do you want to enrole at our
  Academy? Get in touch!"
- **AND** the band SHALL show a green "See More" button

### Requirement: Dark footer with four widgets and bottom bar

The system SHALL render the `#232323` footer with four widgets (About,
Usefull Links, Gallery, Contact) and the `#141414` bottom bar.

#### Scenario: Footer content

- **GIVEN** the Campus page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show the About widget (logo, blurb, social
  icons), the "Usefull Links" list, the "Gallery" six-image grid, and the
  "Contact" widget (address, Main/Office phones, email) in four columns on
  desktop, two on tablet, one on mobile
- **AND** the footer SHALL show the dark bottom bar with the copyright
  line and a reworded credit (no ColorLib branding)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-campus`
- [ ] `scripts/verify-app.sh campus` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with source): header (logo + Register/Login
      strip over `#f5f7fa` menu bar with green phone block) → hero slider
      (2 slides, "All the courses you need" / "Wellcome to our Online
      University", Read More) → green feature band (Online Courses ·
      Amazing Teachers · Great Support) → courses grid (3×2: Business
      School · Marketing · Photography · Social Media · Development ·
      Design) → testimonials (dark overlay, 4 items 2×2) → popular courses
      ("The Best" / "Top Popular Courses", 2×2 cards with thumb + meta +
      stars + See More) → partners (5 logos) → CTA band (Get in touch! +
      See More) → footer (4 widgets + bottom bar)
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#61ba6d` /
      `#83c331` (green gradient), `#69bc5f` (hover/accent), `#f5f7fa`
      (menu), `#eef3f6` (popular cards), `#fbb710` + `#e0e3e4` (stars),
      `#606060` (footer links/eyebrow), `#232323` / `#141414` (footer),
      `rgba(0,0,0,0.88)` (testimonial overlay)
- [ ] Font: Montserrat 300–900 via Google Fonts `<link>` in `index.html`,
      title "Campus — Online University Template"
- [ ] Buttons: sharp corners (radius 0), `min-w-[160px] h-[65px]`, white
      weight-600 14px text on green gradient — no rounded buttons anywhere
- [ ] Placeholder images via
      `https://picsum.photos/seed/campus-<n>/<w>/<h>` (hero bg
      `campus-1/1920/850`, course thumbs `campus-2..5/600/350`,
      testimonials avatars `campus-6..9/110/110`, partner logos
      `campus-10..14/260/80`, gallery `campus-15..20/300/200`) — NEVER copy
      ColorLib `img/` assets; icons from `lucide-react`
- [ ] Interactions: hero slider (2 slides, prev/next arrows, hover-reveal
      on desktop), sticky menu on scroll; `aria-label` on icon-only
      controls, `aria-expanded` on dropdowns
- [ ] Copy kinds kept: nav labels, feature titles, course titles, quote
      kinds, "By Simon Smith · March 18, 2018", star ratings, footer
      contact lines; the source "Wellcome" typo may be kept or fixed
      (deliberate)
- [ ] Footer credit reworded (no "made with by Colorlib"); copyright line
      kept
- [ ] Responsive: features dividers flip horizontal ≤767px, popular cards
      stack ≤767px, hero h2 scales 60→30px, footer 4→2→1 columns
- [ ] TEMPLATES.md: both "Academy" rows (Bootstrap line 328 + Education
      line 1623) marked `[x]` with surge URL on ship
