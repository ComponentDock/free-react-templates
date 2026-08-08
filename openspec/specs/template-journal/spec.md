# Template: Journal (Lifestyle Blog Template)

## Purpose

Journal is a single-page lifestyle blog website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Original" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Original" — lifestyle blog template
  (source: https://colorlib.com/wp/template/original/).
  TEMPLATES.md has ONE copy of this item (line 278 — mark it `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/original/
  (HTTP 200, 42 KB rendered HTML, title "Original - Lifestyle Blog
  Template"). Stylesheet: `style.css` (44 KB, extracted) + imports:
  `css/bootstrap.min.css`, `css/classy-nav.css`, `css/animate.css`,
  `css/owl.carousel.css` (owl carousel for hero + instagram sliders),
  font-awesome icons. Google Fonts
  `@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700")`
  at the top of style.css. "helveticaneuemedium" (custom local font) is used
  only for the date numerals and headings — map it to Open Sans bold or the
  closest system stack; do NOT copy the font file.
- **Screenshot:** `original-free-template.jpg` (1200×946, verified live in a
  browser via vision): white/black magazine aesthetic. Thin white top bar
  with social icons (Pinterest, Facebook, Twitter, Dribbble, Behance,
  Linkedin) right; centered logo "Original." in a bold condensed serif with
  "Lifestyle Blog" subtitle beneath; solid black nav bar with a rectangular
  "SUBSCRIBE" button (white text) on the left, uppercase menu (HOME / PAGES /
  CATEGORY / ABOUT US / MEGAMENU / CONTACT) with dropdown arrows, magnifier
  search icon far right; hero = full-width owl-carousel showing 3 slides
  (center slide active: full-bleed lifestyle photo with a small black
  "LIFESTYLE" tag pill and a bold uppercase headline on a black bar,
  white text); below the hero the magazine grid begins (the screenshot cuts
  off there). Palette is white + black with a single deep-indigo accent
  `#30336b`; photos provide the only other color.
- **Section order (1:1, from the live DOM):**
  1. **Header** (`header-area`): top-header (65px, breaking-news ticker left
     — "Hello World!", "Hello Universe!", "Hello Original!", "Hello Earth!",
     "Hello Colorlib!" — and 6 social icons right) → logo-area (170px,
     centered logo image; recreated as a text wordmark "Journal" +
     "Lifestyle Blog" subtitle) → original-nav-area (100px, sticky on
     scroll; SUBSCRIBE button left opening a newsletter modal, navbar
     toggler, menu: Home / Pages (dropdown: Home, About Us, Single Post,
     Contact, Coming Soon) / Catagory (2-level dropdown) / About Us /
     Megamenu (4-column mega menu: Headline 1–4 with 5 items each) /
     Contact, plus a search input that expands from the right).
  2. **Hero area** (`hero-area`): `hero-slides` owl-carousel, 3 identical
     `single-hero-slide` slides (670px, bg image `b2.jpg`/`b1.jpg`/`b3.jpg`),
     each with centered `slide-content`: black 10px uppercase `post-tag` pill
     "lifestyle" + 40px uppercase headline "Take a look at last night's
     party!" on a black bar, white text. Prev/next arrow buttons at 7% left /
     right (40px squares, `#cbcbcb` bg, hover `#0d0d0d`). Only the center
     slide's content is visible (owl `center` mode).
  3. **Blog wrapper** (`blog-wrapper section-padding-100`): first row
     `row align-items-end` = 3 columns: (a) `single-blog-content` text panel
     — 26×2px grey `line`, "Lifestyle" post-tag, 24px headline "Welcome to
     this Lifestyle blog", paragraph, `original-btn` "Read More"; (b)+(c)
     `single-catagory-area` — full-bleed photo with a centered black
     226×156px `catagory-title` box ("Lifestyle posts" / "latest posts",
     hover → `#30336b`).
  4. **Blog list** (inside `col-12 col-lg-9`): five `single-blog-area
blog-style-2 mb-50` posts, each = thumbnail with `post-date` box
     (absolute, 15px top-left, white bg, 1px `#787878` border, 24px date
     numeral "12" + 11px "march" under it) + content (line, post-tag,
     headline, paragraph, `post-meta` "By james smith · 3 comments"), layout
     alternating image-left/image-right except the third post which is
     full-width (image top, content below, `mt-50`). Headlines: "Party
     people in the house", "We love colors in 2018", "10 Tips to organize
     the perfect party" (full-width post). Then `load-more-btn` with a
     centered `original-btn` "Read More".
  5. **Sidebar** (`col-12 col-md-4 col-lg-3` `post-sidebar-area`): widgets
     in order: search form (underline-style input, submit hidden), "Subscribe
     to my newsletter" (email input + Subscribe `original-btn`),
     "Advertisement" (a GIF/placeholder image), "Latest Posts" (4 rows:
     thumb 115px + Lifestyle tag + 16px headline + "12 March" date), "Tags"
     (chips: design, fashion, travel, music, party, video, photography,
     adventure — 1px `#c5c5c5` border, hover → `#30336b` fill, white text).
  6. **Instagram feed** (`instagram-feed-area`): top border `#dcdcdc`,
     centered "Follow us @ Instagram" title (40px padding), then an
     `instagram-slides` owl-carousel of 7 square `single-insta-feed` images
     with an instagram icon overlay on hover (rgba `#30336b` 0.95).
  7. **Footer** (`footer-area text-center`, 60px padding): centered nav
     (Home / About Us / Lifestyle / travel / Music / Contact, uppercase
     `#4f4d4d`, hover black) + `footer-social-area` (6 social icons) +
     copyright line "Copyright © <year> All rights reserved | This template
     is made with ♥ by Colorlib" (paraphrase; heart icon).
  8. **Subscribe modal** (`subsModal`, bootstrap modal, opened by the nav
     SUBSCRIBE button): title + newsletter form (60px email input, 1px
     `#787878` border, italic placeholder; Submit button = white `original-btn`
     that fills `#30336b` on hover), red close button top-right.
- **Design tokens extracted from `style.css`:**
  - Font: **"Open Sans", sans-serif** (Google Fonts, weights 300/400/600/700)
    for body, nav, buttons, meta. The custom "helveticaneuemedium" font used
    for headings/date numerals maps to Open Sans 600/700 — no font file
    copied.
  - Primary accent **deep indigo `#30336b`** (18 refs): hover fills on
    `original-btn`, subscribe button, category box, tag chips, post
    headline hover, ticker link hover, instagram hover overlay
    (`rgba(48,51,107,0.95)`), newsletter submit hover.
  - Base: **white `#ffffff`** page bg; **black `#000000`** (nav bar, logo
    area borders `#e1e1e1`, hero tag pill + headline bar, category title
    box, date numerals, headings).
  - Text greys: `#4f4d4d` (nav links, footer nav), `#878787` (post-date
    month, meta dates), `#a1a1a1` (post-tag), `#787878` (borders on date
    box + newsletter inputs), `#bbbec1` (search underline, italic
    placeholder), `#b2b2b2` (newsletter placeholder), `#999da4` (coming-soon
    borders, unused on home).
  - Buttons: `.original-btn` = 1px `#dcdcdc` border, **border-radius 0**,
    min-width 175px, height 60px, 14px uppercase, letter-spacing 3px, black
    text, shadow `0 0 30px rgba(0,0,0,0.1)`; hover → bg + border `#30336b`,
    white text. Nav SUBSCRIBE button = `#0d0d0d` bg, white 12px uppercase,
    height 40px, radius 0; hover `#30336b`.
  - Hero: slides 670px tall, bg image cover; tag pill = black bg, white
    10px uppercase, letter-spacing 2px, radius 2px, padding 3px 10px;
    headline = 40px uppercase white on black (padding 12px 20px 5px, radius
    0); arrows 40×40 `#cbcbcb`, hover `#0d0d0d`, radius 2px.
  - Cards: `.line` = 26×2px `#c8c8c8`; post-tag 11px uppercase
    letter-spacing 3px `#a1a1a1`, hover black; h4 headline 24px black,
    hover `#30336b`; paragraph line-height 2; `post-meta` 9px uppercase
    letter-spacing 3px, "By james smith" + "3 comments".
  - Date box: absolute 15px/15px, white bg, 1px `#787878` border, padding
    20px 8px, 24px numeral + 11px month `#878787`.
  - Category box: 226×156px black, centered over photo, 10px uppercase
    white letter-spacing 3px, hover `#30336b`.
  - Sidebar: widgets 60px apart; search = bottom-border input (1px
    `#bbbec1`, focus black), submit hidden; newsletter input 40px, 1px
    `#787878`, italic 13px, padding 0 25px; title 18px, margin-bottom 52px
    (20px for subscribe title); Latest Posts rows = 115px thumb + 16px
    headline; tag chips = 1px `#c5c5c5`, 45px tall, padding 0 35px, hover
    `#30336b` fill white text.
  - Instagram: section top border `#dcdcdc`; title 18px, padding 40px 0;
    hover overlay = full-cover `rgba(48,51,107,0.95)` with 30px white
    instagram icon.
  - Footer: 60px padding; nav uppercase 13px-ish `#4f4d4d` hover black;
    social icons 13px black, padding 5px 15px; copyright small text.
  - Section padding rhythm: `section-padding-100` = 100px top/bottom on
    blog wrapper; nav bar sticky (white bg + shadow `0 5px 15px
rgba(0,0,0,0.15)`, height drops 100→70px, `position: fixed` top 0).
  - Newsletter modal: content radius 0, body padding 70px; input 60px,
    1px `#787878`, italic 14px; submit = white `original-btn` → `#30336b`
    hover; close button red 30×30 top-right.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/journal-<n>/<w>/<h>`); icons → lucide-react (Search,
  Menu, X, ChevronLeft, ChevronRight, Heart, Instagram) + inline SVG
  BrandIcon for socials (lucide removed brand icons); no assets copied.
  The hero owl-carousel (3 slides, center-active) and instagram owl-carousel
  (7 feeds) become simple auto-advancing sliders with prev/next controls;
  the breaking-news ticker auto-rotates its 5 headlines; nav SUBSCRIBE opens
  the newsletter modal (email validation + success state); nav has Pages /
  Catagory / Megamenu dropdowns (desktop) that collapse into an accordion
  mobile menu. Site name "Journal" replaces the original's "Original" logo;
  "Original" the source word never appears as the brand.

Journal lives in `apps/journal` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header with ticker, logo and nav

The system SHALL render a three-part header: a top bar with a breaking-news
ticker and social icons, a centered logo, and a sticky navigation bar with a
Subscribe button, dropdown menus, and a search control.

#### Scenario: Top bar content

- **GIVEN** the Journal page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show a rotating breaking-news ticker with
  headlines (e.g. "Hello World!", "Hello Universe!", "Hello Journal!")
- **AND** it SHALL show six social icons on the right (Pinterest, Facebook,
  Twitter, Dribbble, Behance, Linkedin)

#### Scenario: Logo area

- **GIVEN** the header is rendered
- **WHEN** the logo area is displayed
- **THEN** it SHALL show the wordmark "Journal" in a bold serif with a
  "Lifestyle Blog" subtitle beneath it (replacing the original's "Original."
  logo image)

#### Scenario: Nav bar content

- **GIVEN** the header is rendered
- **WHEN** the nav bar is displayed
- **THEN** it SHALL show a "Subscribe" button on the left that opens the
  newsletter modal
- **AND** it SHALL show the links Home, Pages, Catagory, About Us, Megamenu,
  and Contact
- **AND** it SHALL show a search control on the right that expands an input
  with placeholder "Search something..."

#### Scenario: Dropdown menus

- **GIVEN** the nav bar is displayed
- **WHEN** the user opens the Pages dropdown
- **THEN** it SHALL list Home, About Us, Single Post, Contact, and Coming
  Soon
- **AND** the Catagory menu SHALL show a two-level nested dropdown
- **AND** the Megamenu SHALL show four columns (Headline 1–4) with five
  items each

#### Scenario: Sticky nav

- **GIVEN** the page is scrolled past the header
- **WHEN** the nav bar sticks to the top
- **THEN** it SHALL get a white background with a soft shadow and reduced
  height

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the mobile menu
- **THEN** the menu SHALL list every nav link
- **AND** dropdown items SHALL be expandable
- **AND** the user SHALL be able to close the menu

### Requirement: Hero slider

The system SHALL render a full-width hero carousel with three slides, each
showing a background photo, a category pill, and a headline on a black bar.

#### Scenario: Slide content

- **GIVEN** the hero is rendered
- **WHEN** a slide is active
- **THEN** it SHALL show the category pill "lifestyle" (black bg, white
  uppercase 10px text)
- **AND** it SHALL show the headline "Take a look at last night's party!"
  in 40px uppercase white text on a black bar
- **AND** the slide SHALL have a full-bleed background image

#### Scenario: Carousel behavior

- **GIVEN** the hero carousel is rendered
- **WHEN** the user presses the next or previous arrow
- **THEN** the carousel SHALL advance to the corresponding slide
- **AND** the slides SHALL auto-advance

### Requirement: Magazine intro row

The system SHALL render a three-column intro row with a text panel and two
image cards with centered category boxes.

#### Scenario: Text panel column

- **GIVEN** the blog wrapper is rendered
- **WHEN** the first column is displayed
- **THEN** it SHALL show a 26×2px grey line, a "Lifestyle" post-tag, the
  headline "Welcome to this Lifestyle blog", a paragraph, and a "Read More"
  button

#### Scenario: Category image cards

- **GIVEN** the intro row is rendered
- **WHEN** the second and third columns are displayed
- **THEN** each SHALL show a photo with a centered black box titled
  "Lifestyle posts" / "latest posts"
- **AND** hovering the black box SHALL turn it the accent color `#30336b`

### Requirement: Blog post list

The system SHALL render five blog posts in a two-column alternating layout
with one full-width post, each with a date box, tag, headline, excerpt, and
author/comment meta.

#### Scenario: Post layout

- **GIVEN** the blog list is rendered
- **WHEN** a post card is displayed
- **THEN** it SHALL show a thumbnail with an absolute date box (white bg,
  1px grey border, "12 march" / "10 march")
- **AND** it SHALL show the 26×2px line, a "Lifestyle" post-tag, a 24px
  black headline (e.g. "Party people in the house"), a paragraph, and the
  meta "By james smith" and "3 comments"
- **AND** thumbnails and text SHALL alternate left/right between posts

#### Scenario: Full-width post

- **GIVEN** the blog list is rendered
- **WHEN** the third post is displayed
- **THEN** it SHALL span the full column width with the image on top and
  the content below

#### Scenario: Load more

- **GIVEN** the blog list is rendered
- **WHEN** the list ends
- **THEN** a centered "Read More" button SHALL be shown below the posts

### Requirement: Sidebar widgets

The system SHALL render a right sidebar with search, newsletter,
advertisement, latest posts, and tags widgets.

#### Scenario: Widget order and content

- **GIVEN** the sidebar is displayed
- **WHEN** the widgets are rendered
- **THEN** they SHALL appear in this order: search form, "Subscribe to my
  newsletter" (email input + Subscribe button), "Advertisement", "Latest
  Posts" (four thumb+title rows), and "Tags" (design, fashion, travel,
  music, party, video, photography, adventure)

#### Scenario: Search widget

- **GIVEN** the search widget is displayed
- **WHEN** the user focuses the search input
- **THEN** the bottom border SHALL turn black

#### Scenario: Newsletter widget

- **GIVEN** the newsletter widget is displayed
- **WHEN** the user submits a valid email
- **THEN** the form SHALL show a success state
- **AND** submitting an invalid email SHALL show a validation error

#### Scenario: Tag chips

- **GIVEN** the tags widget is displayed
- **WHEN** the user hovers a tag chip
- **THEN** the chip SHALL fill with `#30336b` and the text SHALL turn white

### Requirement: Instagram feed

The system SHALL render an Instagram feed strip with a carousel of square
images and a hover overlay.

#### Scenario: Feed content

- **GIVEN** the page is rendered
- **WHEN** the Instagram section is displayed
- **THEN** it SHALL show the title "Follow us @ Instagram"
- **AND** it SHALL show a carousel of seven square images

#### Scenario: Hover overlay

- **GIVEN** an Instagram image is displayed
- **WHEN** the user hovers it
- **THEN** an indigo overlay with an Instagram icon SHALL appear

### Requirement: Footer

The system SHALL render a centered footer with nav links, social icons, and
a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the links Home, About Us, Lifestyle, Travel, Music,
  and Contact
- **AND** it SHALL show six social icons
- **AND** it SHALL show a copyright line with a heart icon and a Colorlib
  credit link (paraphrased)

### Requirement: Newsletter modal

The system SHALL render a modal newsletter form opened by the nav Subscribe
button.

#### Scenario: Modal form

- **GIVEN** the nav Subscribe button is clicked
- **WHEN** the modal opens
- **THEN** it SHALL show a title and a newsletter form with an email input
  and a submit button
- **AND** submitting a valid email SHALL show a success state
- **AND** submitting an invalid email SHALL show a validation error
- **AND** the user SHALL be able to close the modal with a close button

## Verification checklist

- [ ] `bash scripts/verify-app.sh journal` passes (typecheck + lint +
      100% coverage tests + build, ~2–3 min)
- [ ] `npm run spec:validate` passes
- [ ] Breaking-news ticker auto-rotates; hero carousel auto-advances and
      responds to prev/next controls; instagram carousel scrolls
- [ ] Sticky nav gets white bg + shadow on scroll; mobile menu opens/closes
      with expandable dropdowns
- [ ] Newsletter forms (sidebar + modal) validate email and show a success
      state
- [ ] Fidelity: section order 1:1, Open Sans font, `#30336b` accent,
      black/white palette, radius-0 `original-btn` with `#dcdcdc` border,
      date boxes, category boxes, tag chips, indigo instagram overlay,
      picsum placeholders seeded `journal-<n>`, no copied assets
- [ ] TEMPLATES.md: mark line 278 (Original) `[x]` and append the live
      surge URL
- [ ] `npm install` at root before committing (lockfile registers
      `apps/journal`); `grep -c "free-react-templates/journal"`
      package-lock.json >= 1
- [ ] `"homepage": "https://free-react-templates-journal.surge.sh"`
      in `apps/journal/package.json`
- [ ] PR title: `feat: Journal — lifestyle blog template (ColorLib
    Original)`; body includes source URL, preview URL
      (`https://preview.colorlib.com/theme/original/`), tokens, and the
      single-copy TEMPLATES.md note
