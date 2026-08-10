# Template: Corona (Education / Online Course Website Template)

## Purpose

Corona is a single-page education-website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Eclipse" entry in TEMPLATES.md (listed under **Bootstrap (216)**
at line 379; duplicate rows at line 1627 under **Education (43)** and line
2040 under **Landing Page (96)** — same template, one app only), built
under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The reference is a purple-gradient education one-pager ("Eclipse
Education"): an absolute transparent navbar (Playfair serif brand, Roboto
uppercase links — Home, About, Courses, Pages dropdown, Elements, Course
Details, Blog dropdown, Contacts; sticky state turns white with a soft
shadow); a full-cover hero on a violet background image with the white
Playfair-900 headline "Take the first step to learn with us" (Hubble
telescope copy), a flat illustration of two students on the right and a
sweeping white wave separating hero from content; a white feature strip
with 3 icon items (New Classes, Top Courses, Full E-Books) separated by
thin borders; a "Popular Courses Available Right Now" carousel of 4 course
cards (thumb image, `#f9f9fb` details panel with uppercase category +
price `$150`, title "Learn Angular JS Course for Legendary Persons", 5
stars + "25 Reviews"); a "Watch Our Trainers in Live Action" video carousel
on a `#828bb2` band with a centered play button per video; a "Features
That Can Avail By Everyone" grid of 6 `#f2f3f7` cards (Lifetime Access,
Source File Included, Student Membership, 35000+ Courses, Expert Mentors,
Live Supports); a purple registration band ("Courses for Free" — "It is
high time for learning") with a centered glassy form (Name, Phone Number,
Email Address underline inputs + gradient "Submit" button, purple glow
shadow); a testimonial carousel (Fanny Spencer, Chief Executive, Amazon);
a blog section with 3 image cards ("Smart Kitchen Setup", date/likes/
comments meta, "View Details"); and a 5-widget footer (Top Products, Quick
Links, Features, Resources, Newsletter with email input). The brand
signature is the violet→magenta gradient
`linear-gradient(90deg, #7c32ff 0%, #c738d8 100%)` (submit buttons);
headings use Playfair Display 900, body/UI uses Roboto 400/500/700. Corona
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Eclipse" — Eclipse Education, Free Bootstrap
  Education Website Template (source:
  https://colorlib.com/wp/template/eclipse/). Listed in TEMPLATES.md under
  **Bootstrap (216)** (line 379; duplicate rows at line 1627 under
  Education (43) and line 2040 under Landing Page (96)).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/eclipse/`
  (HTTP 200, static HTML, 48.8 KB). Unlike some ColorLib demos this is
  NOT a gallery portal — the root IS the template home page
  (`<title>Eclipse Education</title>`). DOM fetched and analyzed
  (`/tmp/eclipse-preview.html`); stylesheet
  `https://preview.colorlib.com/theme/eclipse/css/main.css` (74.3 KB,
  pretty-printed) fetched and parsed for tokens; screenshot
  (`eclipse-free-template.jpeg`, 1200×946, TEMPLATES.md) reviewed visually
  in the browser. All references verified live.
- **Pages in nav vs. one-pager:** the navbar links to other demo pages
  (about.html, courses.html, course-details.html, elements.html,
  blog-home.html, blog-single.html, contacts.html). **Recreation decision:
  build the home page (`index.html`) 1:1 as a single-page React app**;
  cross-page nav items become "#" placeholders or in-page anchors (same
  convention as other recreated templates).
- **Section order (1:1 from the preview DOM):**
  1. Header `header.default-header` → `nav.navbar` (padding 25px 15px;
     header is `position: absolute; top: 0; z-index: 9`, transparent over
     the hero): `a.navbar-brand` "Eclipse" wordmark (Playfair serif);
     `ul.navbar-nav` right-aligned links — Home (index.html, active),
     About, Courses, Pages (dropdown: Elements, Course Details), Blog
     (dropdown: Blog Home, Blog Details), Contacts; burger
     `button.navbar-toggler` (lnr-menu icon, white) for mobile; sticky
     (`is-sticky .default-header`) → white background + `box-shadow
-21.213px 21.213px 30px 0px rgba(158,158,158,0.3)`; mobile collapse
     panel background `#222222`.
  2. Hero `section.home-banner-area` (`background:
url(../img/home-banner-bg.png) no-repeat; background-size: cover;
center center; max-height: 1200px;` `.fullscreen` padding-top 250px /
     height 700px): `div.row.justify-content-center.fullscreen
align-items-center` → left `div.home-banner-left col-lg-5` — `h1
.text-white` "Take the first step / to learn with us" + `p.text-white
mt-20 mb-40` Hubble copy; right `div.offset-lg-2.col-lg-5
home-banner-right` — `img.img-fluid src=img/header-img.png` (flat
     illustration, two students + floating code screen). Screenshot shows a
     large white wave curve at the hero's bottom edge into the white
     feature section.
  3. Features `section.feature-area` (`div.container-fluid` → `div.row
feature-inner`): 3 × `div.col-lg-2.col-md-6` → `div.feature-item
d-flex` (margin 30px 0, `border-right: 1px solid
rgba(130,139,178,0.2)`, padding-right 20px): `i.ti-book` / `i.ti-cup`
     / `i.ti-desktop` (30px, `#828bb2`) + h4 (18px) "New Classes" / "Top
     Courses" / "Full E-Books" + p (Hubble blurb) + "Read More" link.
  4. Popular courses `section.popular-course-area.section-gap` (section-gap
     = padding 120px 0 desktop / 60px mobile; container max-width 1140px):
     `div.row.justify-content-center.section-title` — `h2` (42px, `#222`,
     Playfair) "Popular Courses / Available Right Now" + lorem subtitle;
     `div.owl-carousel.popuar-course-carusel` → 4 × `div.single-popular-
course`: `div.thumb` (overflow hidden, img full-width) + `div.details`
     (padding 40px 30px, background `#f9f9fb`): row with `p.name`
     (uppercase, 12px, weight 500 — "programming language") + `p.value`
     ("$150", `#222222`, weight 700); `a > h4` (line-height 27px) "Learn
     Angular JS Course for Legendary Persons"; `div.bottom.d-flex` — 5 ×
     `i.fa.fa-star` + `p.ml-20` "25 Reviews". (Carousel → recreate as a
     responsive grid of 4 cards, or a simple accessible carousel.)
  5. Video `section.video-area.section-gap-bottom` (background `#828bb2`,
     `url(../img/video-area-bg.png) no-repeat center`, padding 60px 0):
     `div.row.align-items-center` → left `div.col-lg-5` — `div.section-title
.text-white` `h2.text-white` "Watch Our Trainers / in Live Action" +
     p (Hubble copy); right `div.offset-lg-1.col-md-6.video-left` →
     `div.owl-carousel.video-carousel` → 2 × `div.single-video` →
     `div.video-part` (relative): `img.img-fluid src=img/video-img.jpg` +
     `div.overlay` (`rgba(0,0,0,0.3)`) + centered `a.popup-youtube.play-btn`
     with `img.play-icon` (play button).
  6. Other features `section.other-feature-area`: `div.section-title
.text-left` — `h2` "Features That Can Avail By Everyone" + p ("blank
     cassettes" copy); `div.row` → 6 × `div.col-lg-4` → `div.other-feature-
item` (padding 50px 40px, background `#f2f3f7`, margin-bottom 30px):
     icon `i.ti-key`/`ti-files`/`ti-medall-alt`/`ti-briefcase`/`ti-crown`/
     `ti-headphone-alt` + h4 "Lifetime Access" / "Source File Included" /
     "Student Membership" / "35000+ Courses" / "Expert Mentors" / "Live
     Supports" + lorem p.
  7. Registration `section.registration-area` (background
     `url(../img/registration-bg.png) no-repeat center; padding: 157px
0px;` mobile fallback `background: #7c32ff; padding: 60px 0px`):
     `div.section-title.text-white` — `h2` "Courses for Free" + p "It is
     high time for learning"; `div.course-form-section` (transparent,
     text-align center, padding 70px 35px, `box-shadow: 0px 0px 50px
rgba(185, 55, 223, 0.45)` purple glow; margin-top 50px) → form
     `div.course-form-area.contact-page-form.course-form.text-right`: 3 ×
     `div.form-group.col-md-12` `input.form-control` (background
     transparent, border 0, `border-bottom: 1px solid #828bb2`, padding
     20px, font-size 13px, radius 0, `color: #fff`; placeholders "Name",
     "Phone Number", "Email Address") + `button.btn.text-uppercase`
     "Submit" (gradient `90deg, #7c32ff 0%, #c738d8 100%`).
  8. Testimonials `section.testimonials-area.section-gap`:
     `div.testi-slider.owl-carousel` → 2 slides, each `div.row.align-items-
center`: left `div.col-lg-5` → `div.testi-item` — `img src=img/quote.png`
     (quote icon) + `p.mt-40` "As conscious traveling Paupers we must
     always be oncerned about our dear Mother Earth..." + `h4` "Fanny
     Spencer" + `p` "Chief Executive, Amazon"; right `div.offset-lg-1.col-
lg-6` — testimonial photo `img src=img/testimonial/t1.jpg`.
  9. Blog posts `section.blog-post-area.section-gap` — **demo quirk:** the
     section title in the shipped demo literally repeats the other-feature
     heading "Features That Can Avail By Everyone" with the "first
     telescope" copy (a copy-paste artifact; the canonical ColorLib blog
     heading is "Latest Posts From Our Blog" — recommend using that or
     keeping the demo copy, note the choice in the PR). Content: 3 ×
     `div.single-blog` cards: `img src=img/blog-post/b1.jpg` + `div.overlay`
     - `div.top-text` meta (`p` "29th, oct, 2018", `p` "121 likes", `p`
       "05 comments") + `div.text` — `h4.text-white` "Smart Kitchen Setup" +
       lorem p + `a.primary-btn` "View Details" with `i.fa.fa-long-arrow-
right`.
  10. Footer `footer.footer-area` (background `url(../img/footer-bg.png)
no-repeat center; padding: 339px 0px 120px;` mobile fallback
      `background: #222222; padding: 60px 0px`): `div.row` → 5 ×
      `div.single-footer-widget` (h4 `#fff`, 18px, margin-bottom 35px):
      (a) "Top Products" — Managed Website, Manage Reputation, Power
      Tools, Marketing Service; (b) "Quick Links" — Jobs, Brand Assets,
      Investor Relations, Terms of Service; (c) "Features" — Jobs, Brand
      Assets, Investor Relations, Terms of Service; (d) "Resources" —
      Guides, Research, Experts, Agencies; (e) "Newsletter" — p "You can
      trust us. we only send promo offers, subscribe" + email `input`
      placeholder "Your Email Address" + subscribe button; bottom
      copyright line "All rights reserved | This template is made with by
      Colorlib" (watermark — reword for Corona, e.g. "© <year> Corona.
      All rights reserved").
- **Design tokens (extracted from `css/main.css`, 74.3 KB):**
  - Brand colors: primary violet `#7c32ff` (46 uses — nav accents,
    primary-btn hover, registration mobile bg, links) + magenta
    `#c738d8`; signature gradient `linear-gradient(90deg, #7c32ff 0%,
#c738d8 100%)` on the registration Submit button (and course-details
    buttons). Playful accents: cyan `#4cd3e3`, yellow `#f4e700`, red
    `#f44a40`, blue `#38a4ff` (illustration/iconography), orange
    `#f09359`, pink `#e66686`, lavender-blue `#6382e6` (rare).
  - Text: `#222222` (headings, course price, footer mobile bg),
    `#828bb2` (muted gray-blue: feature icons, form underlines, video
    band bg), `#777777` (secondary text), white (on dark/gradient).
  - Section backgrounds: white (features, popular courses, other
    features, testimonials, blog); `#f9f9fb` (course card details
    panel); `#f2f3f7` (other-feature-item cards); `#828bb2` (video band);
    `#222222` (footer mobile); image backgrounds — `home-banner-bg.png`
    (hero, cover), `registration-bg.png` (registration, centered; mobile
    falls back to flat `#7c32ff`), `footer-bg.png` (footer, centered;
    mobile falls back to `#222222`), `video-area-bg.png` (video band,
    centered).
  - Fonts: **Playfair Display** (weight 900 only) for headings —
    `font-family: "Playfair Display", serif`; **Roboto** (400/500/700)
    for body/UI/nav — `font-family: "Roboto", sans-serif`. The demo
    loads them via an inline Cloudflare-fonts `@font-face` `<style>`
    block (Playfair 900 ×4 subsets, Roboto 400 ×18 / 500 ×9 / 700 ×9).
    Recreate with a Google Fonts `<link>` (Playfair Display 900 +
    Roboto 400/500/700).
  - Buttons: `.primary-btn` — transparent background, white, font-size
    12px, weight 500, uppercase-ish; hover → `color: #7c32ff`; blog
    "View Details" variant adds `background: #7c32ff` with `#222222`
    text (inverted on hover to white); registration Submit — gradient
    `#7c32ff → #c738d8`, `text-uppercase`; input `form-control` — flat
    bottom-border only (radius 0), white text on transparent.
  - Radii: 0 (form controls), otherwise squared/flat (no pill buttons in
    this template — sharp-cornered education look).
  - Spacing rhythm: `.section-gap` padding 120px 0 (desktop) / 60px
    (mobile); `.section-gap-bottom` padding-bottom 120px/60px;
    `.section-title` padding-bottom 75px (40px mobile); `.section-title
h2` 42px (30px mobile) `#222` margin-bottom 20px; registration
    padding 157px 0 (60px mobile); footer padding 339px 0 120px (60px
    mobile); video area padding 60px 0; feature-item margin 30px 0;
    other-feature-item padding 50px 40px, margin-bottom 30px; course
    card details padding 40px 30px; form-section padding 70px 35px,
    margin-top 50px; navbar padding 25px 15px.
- **Visual design (screenshot, 1200×946):** clean, modern education
  landing page. Top half: vibrant deep purple/violet gradient hero with
  the "Eclipse" wordmark (serif) top-left and a centered menu (HOME,
  ABOUT, COURSES, PAGES, BLOG, CONTACTS + search icon); left hero text —
  large serif headline "Take the first step to learn with us." over a
  smaller sans paragraph; right side a flat-style vector illustration
  (two people, one pointing, one with a laptop, floating code/data
  screen); the hero's bottom edge is a large sweeping white wave curve
  into the white content area. Below: white background with a 3-column
  icon feature strip (New Classes / Top Courses / Full E-Books, muted
  gray-blue icons, "Read More" links) and the start of "Popular Courses
  Available Right Now" (large serif heading + subtitle). Academic,
  spacious, whitespace-heavy; purple = brand, white = content, muted
  gray-blue = supporting text/icons.
- **Recreation decisions:** owl-carousel sections (courses, videos,
  testimonials) → responsive CSS grid (courses/testimonials) or simple
  accessible carousel (videos) — no owl dependency; videos → thumbnail
  panel with a centered play button (no YouTube embed needed); image
  backgrounds (hero/registration/footer/video) → flat `#7c32ff` /
  `#222222` / `#828bb2` solid or subtle CSS gradient approximations, or
  seeded picsum covers (`picsum.photos/seed/corona-<n>/<w>/<h>`: hero
  1920×1100, registration 1600×900, footer 1920×900, video 1600×600);
  hero illustration, course thumbs, video thumbs, testimonial photo,
  blog thumbs → seeded picsum placeholders (illustration 500×500, course
  400×250, video 600×400, testimonial 400×400, blog 600×400); icons →
  lucide-react (BookOpen, Award, Monitor, Key, Files, Medal, Briefcase,
  Crown, Headphones, Star, Search, Menu, X, ChevronDown, Quote,
  ArrowRight, Play, Send, Mail, Heart, MessageCircle — meta icons);
  fonts → Google Fonts `<link>` (Playfair Display 900 + Roboto
  400/500/700); logo → text wordmark "Corona" in Playfair; demo copy
  kept in kind (Hubble/lorem text paraphrased, placeholders varied for
  realism); "made with by Colorlib" watermark → neutral credit line;
  multi-page nav links → "#" or section anchors (one-pager).

Corona lives in `apps/corona` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header and navbar

The system SHALL render a transparent navbar with a serif wordmark, a
right-aligned uppercase menu with two dropdowns, and a mobile burger.

#### Scenario: Navbar content

- **GIVEN** the Corona page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the wordmark "Corona" (Playfair serif) on the left
- **AND** it SHALL show the nav links Home, About, Courses, Pages,
  Elements, Course Details, Blog, Blog Home, Blog Details and Contacts
  (Pages and Blog as dropdowns)
- **AND** the header SHALL be transparent (absolute, over the hero)

#### Scenario: Sticky header

- **GIVEN** the user scrolls past the hero
- **WHEN** the header becomes sticky
- **THEN** it SHALL get a white background with a soft shadow

#### Scenario: Mobile menu

- **GIVEN** the mobile viewport is active
- **WHEN** the user clicks the burger toggle
- **THEN** a menu panel SHALL open with the nav links

### Requirement: Hero banner

The system SHALL render a full-cover hero with a white serif headline, a
paragraph and a right-side illustration, separated from the next section
by a wave edge.

#### Scenario: Hero content

- **GIVEN** the Corona page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "Take the first step to learn with
  us" in white Playfair on a violet cover background
- **AND** it SHALL show a paragraph of course-tagline copy
- **AND** it SHALL show a flat illustration (placeholder image) on the
  right side

### Requirement: Feature strip

The system SHALL render three icon feature items separated by thin
borders.

#### Scenario: Feature items

- **GIVEN** the feature section is displayed
- **THEN** it SHALL show 3 items with icons: "New Classes", "Top Courses"
  and "Full E-Books"
- **AND** each item SHALL have a short description and a "Read More" link
- **AND** items SHALL be separated by a right border
  (`rgba(130,139,178,0.2)`) with muted gray-blue (`#828bb2`) icons

### Requirement: Popular courses

The system SHALL render the "Popular Courses Available Right Now" title
and four course cards with image, category, price, title, rating and
review count.

#### Scenario: Course cards

- **GIVEN** the popular courses section is displayed
- **THEN** it SHALL show the h2 title "Popular Courses Available Right
  Now" with a subtitle paragraph
- **AND** it SHALL show 4 cards, each with a thumbnail, an uppercase
  category (e.g. "programming language"), a price (e.g. "$150"), a course
  title, 5 star icons and a review count (e.g. "25 Reviews")
- **AND** each card's details panel SHALL sit on `#f9f9fb`

### Requirement: Video area

The system SHALL render the "Watch Our Trainers in Live Action" section
on a `#828bb2` band with video thumbnails and centered play buttons.

#### Scenario: Video band

- **GIVEN** the video section is displayed
- **THEN** it SHALL show the white section title "Watch Our Trainers in
  Live Action" with a paragraph on the left
- **AND** it SHALL show video thumbnail panels, each with a dark overlay
  (`rgba(0,0,0,0.3)`) and a centered play button

### Requirement: Other features grid

The system SHALL render the "Features That Can Avail By Everyone" grid
with six `#f2f3f7` cards.

#### Scenario: Feature grid

- **GIVEN** the other-features section is displayed
- **THEN** it SHALL show the title "Features That Can Avail By Everyone"
  with a subtitle paragraph
- **AND** it SHALL show 6 cards with icons and titles: Lifetime Access,
  Source File Included, Student Membership, 35000+ Courses, Expert
  Mentors and Live Supports

### Requirement: Registration form

The system SHALL render the purple "Courses for Free" band with a
glassy centered form (Name, Phone Number, Email Address) and a gradient
Submit button.

#### Scenario: Registration band

- **GIVEN** the registration section is displayed
- **THEN** it SHALL show the title "Courses for Free" and the copy "It is
  high time for learning" in white on a violet background
- **AND** it SHALL show a centered form panel with a purple glow shadow
  (`0 0 50px rgba(185,55,223,0.45)`)

#### Scenario: Form fields

- **GIVEN** the registration form is displayed
- **THEN** it SHALL show Name, Phone Number and Email Address inputs
  styled as transparent fields with a bottom border only, white text
- **AND** it SHALL show a "Submit" button on the brand gradient
  (`#7c32ff → #c738d8`)

### Requirement: Testimonials

The system SHALL render a testimonial carousel with a quote, an author
name and role, and a photo.

#### Scenario: Testimonial slide

- **GIVEN** the testimonials section is displayed
- **THEN** it SHALL show a quote icon, the quote text, the author name
  "Fanny Spencer" and the role "Chief Executive, Amazon"
- **AND** it SHALL show a testimonial photo on the right side

### Requirement: Blog posts

The system SHALL render three blog post cards with image, meta (date,
likes, comments), title and a "View Details" link.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **THEN** it SHALL show a section title (canonical: "Latest Posts From
  Our Blog"; the shipped demo repeats "Features That Can Avail By
  Everyone" — pick one and note it in the PR)
- **AND** it SHALL show 3 cards, each with a thumbnail, meta ("29th, oct,
  2018", "121 likes", "05 comments" — vary), a white title, a blurb and a
  "View Details" link with a right arrow

### Requirement: Footer

The system SHALL render a dark footer with five link widgets and a
newsletter signup.

#### Scenario: Footer widgets

- **GIVEN** the footer is displayed
- **THEN** it SHALL show the widget headings Top Products, Quick Links,
  Features, Resources and Newsletter
- **AND** the link columns SHALL list the demo's links (Managed Website,
  Manage Reputation, Power Tools, Marketing Service / Jobs, Brand Assets,
  Investor Relations, Terms of Service / Guides, Research, Experts,
  Agencies)
- **AND** the Newsletter widget SHALL show the copy "You can trust us. we
  only send promo offers, subscribe" with an email input and a subscribe
  button

#### Scenario: Copyright

- **GIVEN** the footer is displayed
- **THEN** it SHALL show a neutral copyright line (the original's
  "made with by Colorlib" watermark is NOT copied)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Corona app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Corona — Education Website
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-corona`.
- [ ] App renders all sections 1:1 in the order above (navbar → hero →
      features → popular courses → video → other features → registration →
      testimonials → blog → footer).
- [ ] Design tokens match the reference: brand violet `#7c32ff` + magenta
      `#c738d8`, signature gradient `90deg, #7c32ff → #c738d8`, text
      `#222222` / `#828bb2` / `#777777`, card bg `#f9f9fb`, feature-card
      bg `#f2f3f7`, video band `#828bb2`, footer dark `#222222`, Playfair
      Display 900 + Roboto 400/500/700 via Google Fonts.
- [ ] Navbar: transparent, "Corona" serif wordmark, links + Pages/Blog
      dropdowns, sticky white + shadow, mobile burger opens the menu.
- [ ] Hero: violet cover background, white Playfair headline "Take the
      first step to learn with us", paragraph, right-side illustration,
      wave bottom edge.
- [ ] Features: 3 items (New Classes, Top Courses, Full E-Books), thin
      right borders, `#828bb2` icons, "Read More" links.
- [ ] Popular courses: "Popular Courses Available Right Now", 4 cards
      (thumb, uppercase category, price `$150`, title, 5 stars, "25
      Reviews"), `#f9f9fb` details panels.
- [ ] Video: `#828bb2` band, white title "Watch Our Trainers in Live
      Action", thumbnails with overlay + centered play buttons.
- [ ] Other features: "Features That Can Avail By Everyone", 6 `#f2f3f7`
      cards (Lifetime Access, Source File Included, Student Membership,
      35000+ Courses, Expert Mentors, Live Supports).
- [ ] Registration: violet band, "Courses for Free" + "It is high time
      for learning", glassy form panel (purple glow shadow), Name/Phone/
      Email underline inputs (white text), gradient "Submit" button.
- [ ] Testimonials: quote + "Fanny Spencer" / "Chief Executive, Amazon" + photo.
- [ ] Blog: 3 image cards (meta, title, blurb, "View Details" + arrow);
      section title choice (canonical vs. demo quirk) documented in PR.
- [ ] Footer: 5 widgets (Top Products, Quick Links, Features, Resources,
      Newsletter + email input), neutral copyright line.
- [ ] Fonts (Playfair Display 900, Roboto 400/500/700) loaded via Google
      Fonts `<link>`; no font, image, CSS or JS assets copied from the
      original.
- [ ] All images are seeded picsum placeholders
      (`picsum.photos/seed/corona-<n>/<w>/<h>`); logo recreated as text
      wordmark; image backgrounds approximated with solids/gradients or
      picsum covers.
- [ ] `vite.config.ts` registers `injectUiSource()` (see conventions).
- [ ] 100% Vitest coverage on `apps/corona` (lines/functions/branches/
      statements).
- [ ] PR description includes: source template (ColorLib "Eclipse"),
      preview URL (https://preview.colorlib.com/theme/eclipse/ —
      reachable), design tokens used, what differs (name, one-pager
      instead of multi-page demo, placeholder images, text logo, Google-
      font substitution, neutral footer credit).
