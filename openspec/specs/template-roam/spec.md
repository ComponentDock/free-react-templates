# Template: Roam (Travel Blog Template)

## Purpose

Roam is a single-page travel-blog template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Fantasy"
travel blog website template (see TEMPLATES.md, Blog section, line 259;
duplicate at line 2981 — mark EVERY copy `[x]` when done), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The reference is an editorial, magazine-style travel blog (demo brand in the
preview: "Fantasy" / "TRAVEL BLOG"): a header with a serif wordmark logo (with
a small uppercase sans tagline underneath), centered nav links (Home ·
Category · Archive · Pages · Elements · Post Details · Contact) and a search
icon (hamburger on mobile); a full-width 752px hero with a background photo
carousel (3 slides, each = date + comment count + a large serif headline
overlapping a photo with an illustrated PNG cutout, "Read More" link, carousel
dots); a "travel category" section titled "Best Travel Experience Within the
Universe." with a horizontal card carousel (photo + dark overlay + category
title + blog meta + Read More); a "Latest Blog Posts." grid of 4 blog cards
(photo, overlay, title, date/comments meta, Read More); a "Let Us Find Your
Places Within a Sec." staggered masonry grid of 6 place cards with hover
overlay titles; a "Popular Posts to Remember" 3-column grid of 7 thumbnail
post rows (thumb + title + meta); and a light-blue footer with a newsletter
subscribe form ("Stay updated with our latest trends", email input + yellow
arrow button), social icons, and a copyright bar. The whole design is a light,
white editorial layout: black Playfair Display serif headings, grey Roboto
body text, and a yellow `#f8b600` accent for buttons/links/hover states.

Brand colors: primary yellow `#f8b600` (buttons, "Read More" hovers, the
newsletter subscribe button, link hovers); headings black `#000`/dark ink
`#081113` in Playfair Display 700 serif; body text `#777777` in Roboto
400/500; page background white; section accent surfaces `#f9f9ff` and footer
background `#f1f9ff` (light blue); secondary accents cyan `#4cd3e3`, blue
`#38a4ff`, `#52c5fd` (decorative meta icons/links); muted greys `#cccccc` /
`#dddddd` (borders, meta text).

## Design reference (replication findings)

- **Original:** ColorLib "Fantasy" — travel blog template
  (source: https://colorlib.com/wp/template/fantasy/). Listed in TEMPLATES.md
  line 259 (Blog section); duplicate at line 2981 (Travel section) — mark
  every copy `[x]` when done. Screenshot:
  `fantasy-free-template.jpg` (1200×946, reviewed visually in the browser).
- **Live preview URL:** https://preview.colorlib.com/theme/fantasy/ (title
  "Fantasy Travel Blog"; reachable). HTML saved to
  `/tmp/fantasy-preview.html` (31 KB); stylesheet
  `https://preview.colorlib.com/theme/fantasy/css/style.css` saved to
  `/tmp/fantasy-style.css` (63 KB). Screenshot and preview agree (light,
  editorial travel blog, yellow accent, serif headings) — the preview DOM is
  authoritative for section order; the screenshot is authoritative for the
  hero slide headline style ("Night Stand Out").
- **Fonts:** Google Fonts via CSS `@import` in `style.css`:
  `family=Playfair+Display:700|Roboto:400,500`. Headings `font-family:
"Playfair Display", serif; font-weight: bold` (h1); body `"Roboto",
sans-serif`. Load the same two families via `<link>` in `index.html`.
- **Buttons / links (from style.css):**
  - `.read_more`: `color: #000; font-size: 15px; font-weight: 500` — hover
    opacity 0.7 (plain text link with the accent used elsewhere on hover).
  - Yellow action button (newsletter `.sub-btn`, and `.genric-btn.primary`):
    `background: #f8b600; color: #fff` — hover keeps accent; the newsletter
    sub-btn is an arrow (lnr arrow-right) button inside the email input group.
  - `.main_title`: left-aligned, `max-width: 510px; margin-bottom: 50px;`
    with `font-weight: bold; font-size: 48px` (the serif section titles).
- **Section backgrounds / layout (from fantasy-preview.html):**
  - header `header_area` — navbar: brand serif wordmark + tagline, centered
    links, search icon; Bootstrap navbar (mobile hamburger).
  - hero `section.home_banner_area`: `position: relative; background-repeat:
no-repeat; background-position: center left; background-size: cover;
height: 752px`. Contains owl-carousel `#home-owl` with 3 `slide-item
owl-lazy` slides. Each slide = `.row`: `col-lg-5` `blog_text_slider`
    (inside `blog_text`: `blog-meta bottom` with calendar icon "March 14,
    2018" + comments icon "05", a large serif headline — JS-rendered in the
    static DOM; the screenshot shows "Night Stand Out" — and a "Read More"
    link) + `col-lg-7` image column: a background photo (`img/banner/home-
banner.jpg` etc.) with an illustrated PNG cutout overlay
    (`img/banner/banner-img.png` etc.). Carousel dots bottom-left.
  - travel_category `section.travel_category`: `padding: 150px 0 120px`.
    Container row → `col-lg-12` `main_title` h1 "Best Travel Experience
    Within the Universe."; then `container-fluid` owl-carousel `#travel_cat`
    of 6 `single_travel wow fadeIn` cards: `<figure>` photo (`img/travel/t1–
t3.jpg`, repeated), `.overlay`, `.text-wrap` with h3 link (category
    title, e.g. "Waterfall Travel"), `blog-meta white` (calendar + comments,
    "March 14, 2018" / "05") and a `read_more` link.
  - latest_blog_post `section.latest_blog_post`: `padding: 120px 0`.
    `main_title` h1 "Latest Blog Posts."; `.row` of 4 cards `col-lg-3
col-md-6` `single_travel wow fadeInUp`: `img-fluid w-100` photo, `.overlay`,
    `.text-wrap` with h4 title link, `blog-meta white` (date + comments),
    `read_more` link.
  - different_places `section.different_places`: `padding: 120px 0`.
    `main_title` h1 "Let Us Find Your Places Within a Sec."; `.row` of 6
    `single_place wow fadeIn text-center` cards (`col-lg-3 col-md-6`; note
    staggered offset utility classes `mt-240` / `mt-480` on some items →
    masonry look): `img-fluid w-100` photo (`img/places/p1–p6.jpg`), `.overlay`,
    h4 title link ("Waterfall Mountain Visit"), paragraph excerpt ("There is
    a moment in the life of any aspiring astronomer…") and `read_more`.
  - popular_post `section.popular_post`: `padding-bottom: 120px`. `main_title`
    h1 "Popular Posts to Remember"; `.row` of 7 `single-popular-post d-flex
align-items-center flex-row` items (`col-lg-4 col-md-6`): `.icon`
    thumbnail (`img/popular-post/p1–p7.jpg`), `.desc` (h4 title + meta) and
    `blog-meta d-flex justify-content-between` (date + comments).
  - footer `footer.footer-area.section-gap`: `background: #f1f9ff; font-size:
16px`. `single-footer-widget footer_middle` newsletter block: heading
    "Stay updated with our latest trends" + `form.subscribe_form.relative`
    with `.input-group.d-flex.flex-row` (email input, placeholder "Enter
    Email", yellow `btn.sub-btn` with `lnr lnr-arrow-right` icon); social
    icons `footer-social` (facebook · twitter · dribbble · behance);
    `footer-bottom footer_copy`: "Copyright © <year> All rights reserved |
    This template is made with ❤ by Colorlib" (→ reworded for Roam). Floating
    "back to top" button (`#back-top`).
- **Inner pages:** Category / Archive / Pages / Elements / Post Details /
  Contact nav destinations exist in the original — NOT required; recreate the
  single index page only (nav links can be dead anchors `#` or scroll
  targets).

## Requirements

### Requirement: Header with wordmark logo, nav links and search

The system SHALL render a header with a serif wordmark logo, a small uppercase
tagline, centered nav links, a search icon and a mobile hamburger.

#### Scenario: Desktop header

- **GIVEN** the Roam app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand "Roam" in bold black serif
  (Playfair Display) with the small uppercase sans tagline "TRAVEL BLOG"
  underneath
- **AND** the nav SHALL list Home · Category · Archive · Pages · Elements ·
  Post Details · Contact in that order, grey Roboto 14–16px, with the yellow
  `#f8b600` accent on hover
- **AND** a search (magnifying glass) icon SHALL sit on the right of the nav

#### Scenario: Mobile menu

- **GIVEN** a viewport narrower than the desktop breakpoint
- **WHEN** the hamburger button is activated
- **THEN** a menu panel SHALL open with the nav links stacked vertically
- **AND** the toggle SHALL reflect the open state with `aria-expanded`

### Requirement: Hero banner carousel

The system SHALL render a full-width hero with a background-photo carousel of
featured posts.

#### Scenario: Hero slides

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL be a full-width banner (≈752px tall) with a cover
  background image
- **AND** it SHALL cycle through at least 3 slides, each showing: blog meta
  (calendar icon + date "March 14, 2018", comments icon + count "05"), a
  large serif headline (editorial style, e.g. "Night Stand Out" per the
  screenshot; slide headings are JS-rendered in the static preview DOM), and
  a "Read More" link
- **AND** each slide SHALL pair the text column with a photo and an
  illustrated PNG cutout overlay (recreate with two stacked images)
- **AND** carousel indicators (dots) SHALL be visible and SHALL navigate
  between slides

### Requirement: Travel category carousel

The system SHALL render a "travel category" section with a horizontal card
carousel.

#### Scenario: Category cards

- **GIVEN** the travel category section is rendered
- **WHEN** it loads
- **THEN** the section title SHALL read "Best Travel Experience Within the
  Universe." (48px bold serif, left-aligned, max-width ≈510px)
- **AND** a horizontal carousel of 6 category cards SHALL be shown, each
  with: a photo, a dark overlay, a category title link (e.g. "Waterfall
  Travel"), blog meta (calendar date + comments count) and a "Read More"
  link
- **AND** the carousel SHALL be scrollable/draggable with visible overflow
  on wide viewports

### Requirement: Latest blog posts grid

The system SHALL render a 4-card blog posts grid.

#### Scenario: Blog cards

- **GIVEN** the "Latest Blog Posts." section is rendered
- **WHEN** it loads
- **THEN** the section title SHALL read "Latest Blog Posts."
- **AND** 4 blog cards SHALL be laid out 4-up on desktop (`col-lg-3`), 2-up
  on tablet (`col-md-6`) and 1-up on mobile
- **AND** each card SHALL contain a full-width photo, a dark overlay, a
  title link, blog meta (date + comments) and a "Read More" link
- **AND** the cards SHALL fade/rise in on scroll (recreate with a CSS
  animation; the original uses wow.js `fadeInUp`)

### Requirement: Different places masonry grid

The system SHALL render a staggered grid of 6 place cards with overlay titles.

#### Scenario: Place cards

- **GIVEN** the "Let Us Find Your Places Within a Sec." section is rendered
- **WHEN** it loads
- **THEN** the section title SHALL read "Let Us Find Your Places Within a
  Sec."
- **AND** 6 place cards SHALL be laid out in a 4-column grid (stacking on
  smaller screens) with staggered vertical offsets (the original uses
  `mt-240`/`mt-480` on alternate items) to create a masonry rhythm
- **AND** each card SHALL contain a full-width photo, a hover dark overlay
  with the place title ("Waterfall Mountain Visit" style), a short excerpt
  paragraph and a "Read More" link

### Requirement: Popular posts grid

The system SHALL render a 3-column grid of thumbnail post rows.

#### Scenario: Popular post rows

- **GIVEN** the "Popular Posts to Remember" section is rendered
- **WHEN** it loads
- **THEN** the section title SHALL read "Popular Posts to Remember"
- **AND** 7 popular-post rows SHALL be laid out 3-up on desktop (`col-lg-4`),
  2-up on tablet (`col-md-6`), each row being: thumbnail image on the left,
  post title + meta on the right, and a date/comments meta row
- **AND** each row SHALL be horizontally flex-aligned and vertically
  centered

### Requirement: Footer with newsletter and socials

The system SHALL render a light-blue footer with a newsletter subscribe form,
social icons and a copyright bar.

#### Scenario: Newsletter form

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** it SHALL have the light-blue `#f1f9ff` background and SHALL show
  the newsletter heading "Stay updated with our latest trends"
- **AND** a subscribe form SHALL contain an email input (placeholder "Enter
  Email") and a yellow `#f8b600` arrow button
- **AND** submitting a valid email SHALL show a success confirmation and
  reset the field; submitting an invalid/empty email SHALL show a validation
  error

#### Scenario: Socials and copyright

- **WHEN** the footer's lower area loads
- **THEN** social icon links SHALL be present (Facebook · Twitter · Dribbble
  · Behance style — use lucide/generic icons)
- **AND** the bottom bar SHALL read "© 2026 Roam. All rights reserved." with
  a "Made with ❤" style credit line reworded for Roam (no ColorLib credit)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Roam app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header + hero in the banner landmark, the
  category/blog/places/popular sections in the main landmark, and the footer
  in the contentinfo landmark
- **AND** the document title SHALL be "Roam — Travel Blog Template"
- **AND** a back-to-top button SHALL be present and SHALL scroll the page to
  the top when activated
- **AND** the page SHALL be fully responsive from 320px to 1920px (grids
  stack to 1–2 columns, mobile menu replaces the desktop nav)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/roam`
      (`scripts/verify-app.sh roam` in FAST_MODE; full `npm run gate` in CI).
- [ ] Visual fidelity: header (serif wordmark + "TRAVEL BLOG" tagline, 7
      nav links, search icon, hamburger), hero (752px cover banner, 3-slide
      carousel: meta + serif headline + Read More + photo with PNG cutout +
      dots), travel category (6-card carousel, title + overlay + meta +
      Read More), latest blog posts (4 cards), different places (6 staggered
      cards with overlay titles), popular posts (7 thumbnail rows), footer
      (#f1f9ff newsletter + socials + copyright) match the Fantasy preview
      1:1.
- [ ] Design tokens in `@theme`: primary yellow `#f8b600`, headings black
      `#000` / ink `#081113`, body `#777777`, light section `#f9f9ff`,
      footer `#f1f9ff`, accents `#4cd3e3` / `#38a4ff` / `#52c5fd`, borders
      `#cccccc` / `#dddddd`; Playfair Display 700 (headings) + Roboto
      400/500 (body) via Google Fonts `<link>` in `index.html`.
- [ ] Buttons/links: "Read More" = 15px/500 black text with yellow hover
      accent; newsletter sub-btn = yellow `#f8b600` with white arrow icon;
      section titles = 48px bold Playfair Display, left-aligned, max-width
      ~510px.
- [ ] Placeholder images use `picsum.photos/seed/roam-<n>/<w>/<h>` (banner
      photos, category/blog/place/thumb images); lucide-react icons
      (calendar, message-circle, search, arrow-right, socials via inline
      SVG); no ColorLib assets copied.
- [ ] PR description states source template (ColorLib "Fantasy"), preview
      URL (https://preview.colorlib.com/theme/fantasy/), design tokens, and
      what differs (name, placeholders, paraphrased copy, inner pages not
      recreated, hero slide headings JS-rendered in the static DOM so use
      the screenshot's editorial headline style).
