# Template: Paprika (Restaurant Landing)

> **SUPERSEDED** — ColorLib "Marco" is being recreated as **Sizzle**
> (claim branch feat/template-sizzle, 2026-08-13; both Marco rows lines
> 444/2686 are marked `[~]`). Do NOT implement this spec. Delete on next
> cleanup.

## Purpose

Paprika is a single-page restaurant landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Marco" — free Bootstrap 4 restaurant website template
(source: https://colorlib.com/wp/template/marco/), built under a DIFFERENT
name per the monorepo naming mandate (never reuse the ColorLib source name),
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NAMING NOTE: the ColorLib source name "Marco" is FORBIDDEN as the app name.
> **Paprika** (the red spice — matches the template's red `#f42f2c` brand
> accent and the food/restaurant theme) is the new, original name — single
> lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md (verified 2026-08-11). Source slug +
> preview URL are recorded below.

The original is a classic restaurant landing page: a fixed header with a
centered circular logo and uppercase nav, a 767px photo hero ("Delicious
Recipes" + red "Check Our Menu" button), an "About Our Story" split block,
a light-grey "What kind of Foods we serve for you" menu section with
category filter tabs and white rounded menu cards, a photo-background
"Reserve Your Seats" reservation section with a white form card, a
light-grey "Food and Customer Gallery" filter grid, a photo-background
testimonial carousel, a "Latest From Our Blog" 4-card blog band, and a RED
footer widget band with a dark copyright strip. Paprika recreates that
structure section-for-section with matching layout, colors, typography,
and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Marco" — free Bootstrap 4 restaurant website
  template (source: https://colorlib.com/wp/template/marco/; the preview
  page `<title>` reads **"Macro"** — a ColorLib typo, the template page and
  screenshot say "Marco"). TEMPLATES.md lists it under **Bootstrap (216)**
  (line 444) with an IDENTICAL dup row in **Food Drinks (31)** (line 2686 —
  both `- [ ]`, nothing shipped; mark BOTH `[x]` when shipped). The
  recreation brands itself **Paprika**.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/marco/` — HTTP 200, 31.2 KB HTML +
  `css/main.css` 47.4 KB (Bootstrap 4 + linearicons + font-awesome +
  magnific-popup + jquery-ui datepicker + nice-select + owl.carousel +
  animate; Google Fonts **Poppins only**, embedded as cf-fonts @font-face
  blocks, weights 100–700 — there is NO display/serif font; the "serif"
  look in the screenshot is Poppins 700 at large sizes). Screenshot
  `marco-free-template.jpg` (1200×946, browser-verified 2026-08-11) matches
  the live render: dark photo hero with a cluster of fresh-food photography
  on the right, circular red "MARCO / RESTAURANT." logo centered at the
  very top, white uppercase nav, red "CHECK OUR MENU" button, then a white
  "About Our Story" split with a burger photo.
- **Section order (1:1, verified from live DOM):**
  1. **Header** (`header#header`, fixed, `z-index: 997`, transparent until
     scrolled) — `.header-top` with centered `#logo` (an `<img>`; the
     screenshot shows a circular red badge "MARCO" with "RESTAURANT."
     beneath it) + `.container.main-menu` (padding 20px 0, 1px
     top/bottom borders `rgba(255,255,255,0.2)`) containing
     `nav#nav-menu-container` > `ul.nav-menu` of uppercase links: **Home,
     About, Menu, Gallery, Blog ▾** (dropdown: Blog Home, Blog Single),
     **Pages ▾** (dropdown: Elements, Level 2), **Contact**. Scrolled state
     (`.header-scrolled`): background `rgba(34,34,34,0.9)`, `.header-top`
     hidden, menu borders removed.
  2. **Banner hero** (`section.banner-area`) — `height: 767px`,
     `background: url(hero-bg.jpg) center/cover` (dark moody photo with
     fresh food: peppers, zucchini, herbs, board + knife — per
     screenshot). `.banner-content` `margin-top: 240px` (100px on small
     screens): `h6` "Wide Options of Choice" (uppercase, weight 300,
     `letter-spacing: 2px`, white) + `h1` "Delicious Recipes" (60px,
     weight 700, `margin: 20px 0`, white; 40px mobile) + `p` lorem
     (max-width 515px, `margin-bottom: 30px`, white) + `.primary-btn`
     "Check Our Menu" (solid red; `:hover` background `#222`).
  3. **Home about** (`section.home-about-area.section-gap`) — white split:
     LEFT text column `.home-about-left` — `h1` "About Our Story" + `p`
     lorem (max-width 490px, margin 20px 0) + "view full menu"
     `.primary-btn` link (hover: `box-shadow: 0 20px 20px 0
rgba(245,63,81,0.2)`); RIGHT image column (burger photo per
     screenshot). White background.
  4. **Menu** (`section.menu-area.section-gap#menu`) — background
     `#f9f9ff`; centered section title: `h1` "What kind of Foods we serve
     for you" + subtitle "Who are in extremely love with eco friendly
     system."; `.filters` `ul` of category tabs (font-size 12px, weight
     500, color `#222`, centered, max-width 184px each): **All Menu /
     Breakfast / Lunch / Dinner / Budget Meal / Buffet** with `.active`
     tab = white text on red `#f42f2c`; then a 3-column grid of 6
     `.single-menu` white cards (`border-radius: 10px; padding: 30px;
margin-top: 20px`): `.title-wrap` (h4 name — Cappuccion
     [sic]/Americano/Macchiato/Mocha/Piccolo Latte/Ristretto + `.price`
     `$49` in red `#f42f2c`) + `p` description (max-width 392px); then a
     centered "view full menu" `.primary-btn`.
  5. **Reservation** (`section.reservation-area.section-gap.relative`) —
     photo background (`reservation-bg.jpg`, cover/center) + `.overlay-bg`
     `rgba(17,22,24,0.75)`; `.reservation-left` — `h1` "Reserve Your Seats
     to Confirm if You Come with Your Family" + `p` lorem;
     `.reservation-right .form-wrap` — WHITE card `padding: 100px 40px`
     with the form: "Your Name" (text), "Your Email Address" (email),
     "Phone Number" (text), "Select Date & time" (jquery-ui date-picker),
     `select` "Select Event" (options Event One–Event Four), then
     `.primary-btn text-uppercase` "Make Reservation" submit. Fields:
     `border-radius: 0` (SHARP), `border-color: #eeeeee`, `font-size:
13px`, `font-weight: 300`, `color: #999999`, `margin-bottom: 10px`,
     no focus shadow.
  6. **Gallery** (`section.gallery-area.section-gap#gallery`) — background
     `#f9f9ff`; section title `h1` "Food and Customer Gallery" + subtitle;
     same `.filters` tabs as the menu; a grid of 6 `.single-gallery`
     images (g1–g6.jpg, no captions, no load-more button in the source
     DOM).
  7. **Reviews** (`section.review-area.section-gap`) — photo background
     (`review-bg.jpg`, cover/center, NO overlay in source); owl carousel of
     4 identical `.single-review` slides, centered: `img` avatar (user.png)
     - `h4` name "Hulda Sutton" (margin-top 20px) + `.star` row of 5 star
       icons (checked stars `#ffc000` gold) + `p` italic quote (max-width
       555px, margin 20px auto); owl dots 10×10, idle
       `rgba(244,47,44,0.2)`, active solid red `#f42f2c` (margin-top 50px).
       NOTE: the source has NO section heading above the carousel.
  8. **Blog** (`section.blog-area.section-gap#blog`) — white; centered
     section title `h1` "Latest From Our Blog" + lorem subtitle; 4
     `.single-blog` cards: `.thumb` image (scales to 1.1 on hover), `.date`
     black badge (background `#000`, white text, weight 100, padding 2px
     15px, width 115px, centered) — "10 Jan 2018", `h4` title (margin 12px
     0; hover color red `#f42f2c`), `p` excerpt, meta line "15 Likes / 02
     Comments".
  9. **Footer** (`footer.footer-area`) — `.footer-widget-wrap`
     background **RED `#f42f2c`**, white text: 3 `.footer-widget`
     columns — "Opening Hours" (rows: Monday–Friday 08.00 am – 10.00 pm,
     Saturday 08.00 am – 10.00 pm, Sunday 08.00 am – 10.00 pm), "Contact
     Us" (address "56/8, los angeles, rochy beach, Santa monica, United
     states of america - 1205" + two `.number` phone lines, 24px weight
     600), "Newsletter" (text "You can trust us. we only send promo
     offers, not a single spam." + email `input` + red pill subscribe
     button `border-radius: 57px`, height 36px); then `.footer-bottom-wrap`
     background `#222` white text: copyright strip "Copyright © All rights
     reserved | This template is made with ♥ by Colorlib" (re-branded to
     Paprika; the "made with" line may be paraphrased).
- **Visual design (screenshot `marco-free-template.jpg`, 1200×946, viewed
  in browser 2026-08-11 + live render):** classic two-tone restaurant
  landing. DARK hero: moody slate/dark photo background with a cluster of
  fresh-food photography (red peppers, zucchini, potatoes, herbs, wooden
  board + knife) on the right; small uppercase white "WIDE OPTIONS OF
  CHOICE" eyebrow, huge white "Delicious Recipes" headline, white lorem
  paragraph, and a VIVID RED rectangular "CHECK OUR MENU" button. Centered
  at the top: a circular red logo badge with "MARCO" in white bold caps and
  a tiny red "RESTAURANT." tagline under it. White uppercase nav links
  (HOME ABOUT MENU GALLERY BLOG PAGES CONTACT) with dropdown arrows on
  Blog/Pages. Below: a clean white "About Our Story" split (dark bold
  heading + paragraph left, burger photo right). The ONLY accent color
  throughout is the red `#f42f2c` (logo, buttons, active filter tabs,
  menu prices, blog hover, footer band); section alternation is white ↔
  light grey `#f9f9ff`; the reservation + review sections sit on photos;
  the footer is a solid red band with a near-black `#222` copyright strip.
- **Design tokens extracted from the live CSS (`css/main.css`, verified
  2026-08-11):**
  - Brand color: **red `#f42f2c`** — `.primary-btn` background, `.filters
li.active` background, `.single-menu .price`, `.single-blog:hover h4`,
    `.single-service:hover h4`, `.review-area .owl-dot.active`,
    `.footer-widget-wrap` background, `.footer-area .genric-btn`; lighter
    variant `#f44a40` (2 uses); button hover shadow
    `rgba(245,63,81,0.2)`.
  - Text/dark: **`#222`** — `h1–h6` color (weight 600, line-height 1.2),
    `.filters li` color, `.single-blog a` color, `.footer-bottom-wrap`
    background, `.banner-content .primary-btn:hover` background (button
    turns near-black), `.header-scrolled` background `rgba(34,34,34,0.9)`.
  - Light section backgrounds: **`#f9f9ff`** (`.menu-area`,
    `.gallery-area`) and `#fafaff` (3 uses); white `#fff` for cards/forms.
  - Gold stars: **`#ffc000`** (`.single-review .star .checked`).
  - Form fields: `border-radius: 0`, `border-color: #eeeeee`,
    `font-size: 13px`, `font-weight: 300`, `color: #999999`,
    `margin-bottom: 10px`, no focus shadow (`.form-wrap` white, padding
    100px 40px).
  - Reservation overlay: `rgba(17,22,24,0.75)`.
  - Menu cards: white, `border-radius: 10px`, `padding: 30px`,
    `margin-top: 20px`.
  - Buttons (`.primary-btn`): `background: #f42f2c`, `line-height: 42px`,
    `padding: 0 30px`, `border: none`, white 14px weight-500
    UPPERCASE text, `transition: all 0.3s`; an inner arrow `span` sits at
    `right: 30px` and slides to `right: 20px` on hover; hover per context
    (banner → `background: #222`; about → red shadow). `.primary-btn.white`
    — 1px white outline, fills white with red text on hover (dark
    backgrounds). Reservation submit is `text-transform: capitalize`.
  - Font: **'Poppins', sans-serif** for EVERYTHING (headings weight 600
    default; banner h1 weight 700; banner h6 weight 300 uppercase
    letter-spacing 2px; form fields weight 300 13px; footer numbers weight
    600 24px). Google Fonts: Poppins 100–700. NO display font.
  - Section rhythm: `.section-gap` `padding: 120px 0`.
  - Banner: `height: 767px`, photo cover/center; `.banner-content`
    `margin-top: 240px` (100px small screens).
  - Header: fixed, transparent → `rgba(34,34,34,0.9)` when scrolled;
    `.main-menu` borders `rgba(255,255,255,0.2)`.
  - Blog date badge: `background: #000`, white weight-100 text,
    `padding: 2px 15px`, `width: 115px`, centered.
  - Footer: `.footer-widget-wrap` red `#f42f2c` white text;
    `.footer-bottom-wrap` `#222` white text; newsletter pill button
    `border-radius: 57px` height 36px.
- **KEY DIFFERENCES vs other prepped restaurant preps — do NOT copy:**
  Bistro (Allfood) and Palate (Appetizer) are also food/restaurant
  recreations. Paprika's identity is the two-tone WHITE/`#f9f9ff` +
  RED `#f42f2c` + near-black `#222` palette, Poppins-only typography, the
  filter-tab menu/gallery pair, the RED footer band with `#222` strip, and
  the photo-background reservation form card. Verify the actual
  Bistro/Palate specs during implementation and keep the palettes,
  section structures and field sets distinct.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); the logo is an inline SVG/typographic
  badge (red circle + "Paprika" + "RESTAURANT." tagline) since the source
  `logo.png` must not be copied; hero/menu-card/gallery/blog/review/
  reservation imagery uses seeded picsum placeholders
  (`picsum.photos/seed/paprika-<n>/<w>/<h>`); the date-picker input is a
  native `<input type="date">` (no datepicker dependency) or a styled text
  input — implementer choice, keep the sharp `#eeeeee` 13px/300/#999 field
  look; the "Select Event" select uses a native `<select>` with a
  chevron; the review carousel renders all 4 slides in a row (or a
  lightweight auto-rotating carousel — no owl.carousel dependency; the
  source reuses the SAME quote 4× — vary the quotes slightly for
  realism, keep 5-star gold `#ffc000` rating); menu/gallery filter tabs
  can be client-side-only filtering (no backend) — the source is a
  static demo; single-page landing only — nav links to sibling pages
  (About/Menu/Gallery/Blog/Contact) become anchors or dead links,
  NEVER build the extra pages; the "Make Reservation" button validates
  the form (name, valid email, phone, date, event) and shows a summary
  line — the original demo is static, so minimal interactive behavior is
  a documented recreation choice kept in a pure exported function for
  100%-coverage tests. Document title "Paprika — Restaurant Template";
  brand "Marco"/"Colorlib" → "Paprika" everywhere. Body + headings in
  Poppins via Google Fonts `<link>` in `index.html`.

Paprika lives in `apps/paprika` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Fixed header with logo and uppercase nav

The system SHALL render a fixed header with a centered logo badge at the
top, a bordered main-menu bar with uppercase navigation links (Home,
About, Menu, Gallery, Blog ▾, Pages ▾, Contact), and a scrolled state that
darkens the header background and hides the logo strip.

#### Scenario: Header at top of page

- **GIVEN** the Paprika page is rendered at the top of the page
- **WHEN** the page loads
- **THEN** a fixed header SHALL be shown spanning the full width
- **AND** the header SHALL contain a centered circular red logo badge
  ("Paprika" in white bold uppercase + "RESTAURANT." tagline) above a
  main-menu bar with 1px `rgba(255,255,255,0.2)` top/bottom borders
- **AND** the nav SHALL show uppercase links: Home, About, Menu, Gallery,
  Blog (with dropdown: Blog Home, Blog Single), Pages (with dropdown:
  Elements, Level 2), Contact

#### Scenario: Header after scrolling

- **GIVEN** the Paprika page is rendered
- **WHEN** the user scrolls down the page
- **THEN** the header SHALL switch to a `rgba(34,34,34,0.9)` dark
  background
- **AND** the logo strip SHALL hide and the menu borders SHALL disappear

### Requirement: Banner hero with photo background and red CTA

The system SHALL render a 767px-tall banner section with a cover-positioned
photo background, an uppercase eyebrow, a large "Delicious Recipes"
headline, a supporting paragraph, and a solid red "Check Our Menu" button
that turns near-black on hover.

#### Scenario: Banner content

- **GIVEN** the Paprika page is rendered
- **WHEN** the banner section is displayed
- **THEN** a section 767px tall SHALL be shown with a full-bleed
  cover/center photo background
- **AND** an uppercase weight-300 letter-spaced eyebrow "Wide Options of
  Choice" SHALL appear above the headline
- **AND** a white 60px weight-700 "Delicious Recipes" headline SHALL
  follow (40px on small screens)
- **AND** a white paragraph (max-width 515px) SHALL appear below it
- **AND** a solid red `#f42f2c` "Check Our Menu" button SHALL be shown
  with uppercase 14px weight-500 white text
- **AND** hovering the button SHALL change its background to `#222`

### Requirement: About Our Story split block

The system SHALL render a white split section with the "About Our Story"
heading and paragraph on the left and a food photo on the right, plus a
"view full menu" red button that casts a red-tinted shadow on hover.

#### Scenario: About section layout

- **GIVEN** the Paprika page is rendered
- **WHEN** the home-about section is displayed
- **THEN** an "About Our Story" heading SHALL be shown in the left column
- **AND** a paragraph (max-width 490px) SHALL appear below the heading
- **AND** a "view full menu" red button SHALL be shown in the left column
- **AND** hovering it SHALL cast a `rgba(245,63,81,0.2)` shadow
- **AND** a food photo SHALL fill the right column

### Requirement: Menu section with filter tabs and rounded cards

The system SHALL render the light-grey (`#f9f9ff`) menu section with the
"All Menu / Breakfast / Lunch / Dinner / Budget Meal / Buffet" filter tab
row (active tab = white text on red `#f42f2c`), a grid of six white
rounded menu cards (name + red price + description), and a centered "view
full menu" button.

#### Scenario: Menu cards and filters

- **GIVEN** the Paprika page is rendered
- **WHEN** the menu section is displayed
- **THEN** the section SHALL have a `#f9f9ff` background
- **AND** a "What kind of Foods we serve for you" heading with a short
  subtitle SHALL be shown
- **AND** a filter tab row SHALL show: All Menu, Breakfast, Lunch, Dinner,
  Budget Meal, Buffet — with the active tab rendered as white text on red
  `#f42f2c`
- **AND** six white menu cards SHALL be shown (border-radius 10px,
  padding 30px), each with a dish name, a red `#f42f2c` price (e.g. $49),
  and a description
- **AND** a centered "view full menu" red button SHALL appear below the
  grid

### Requirement: Reservation section with photo background and white form card

The system SHALL render the reservation section with a cover/center photo
background and a `rgba(17,22,24,0.75)` overlay, left-side heading
"Reserve Your Seats to Confirm if You Come with Your Family" + paragraph,
and a white form card on the right containing the field set in order:
Your Name, Your Email Address, Phone Number, Select Date & time, Select
Event (Event One–Four), and the "Make Reservation" button.

#### Scenario: Reservation form fields

- **GIVEN** the Paprika page is rendered
- **WHEN** the reservation section is displayed
- **THEN** the section SHALL use a cover/center photo background with a
  `rgba(17,22,24,0.75)` overlay
- **AND** the left column SHALL show the "Reserve Your Seats to Confirm if
  You Come with Your Family" heading and a supporting paragraph
- **AND** the right column SHALL show a white form card (padding ~100px
  40px) with fields in order: Your Name, Your Email Address, Phone
  Number, Select Date & time, Select Event (options Event One, Event Two,
  Event Three, Event Four), then the "Make Reservation" button
- **AND** every field SHALL be sharp-cornered (radius 0) with a
  `#eeeeee` border, 13px weight-300 text in `#999999`

#### Scenario: Reservation submit

- **GIVEN** the reservation form is displayed
- **WHEN** the user submits with a name, valid email, phone, date and
  event selected
- **THEN** the form SHALL show a summary of the reservation (name, date,
  event)
- **AND** submitting with missing or invalid fields SHALL show validation
  messages and no summary

### Requirement: Gallery section with filters and image grid

The system SHALL render the light-grey gallery section with the heading
"Food and Customer Gallery", the same filter tab row as the menu, and a
grid of six food photos.

#### Scenario: Gallery grid

- **GIVEN** the Paprika page is rendered
- **WHEN** the gallery section is displayed
- **THEN** the section SHALL have a `#f9f9ff` background
- **AND** a "Food and Customer Gallery" heading with a short subtitle
  SHALL be shown
- **AND** the filter tabs SHALL match the menu section (All Menu,
  Breakfast, Lunch, Dinner, Budget Meal, Buffet)
- **AND** a grid of six food photos SHALL be shown with no captions

### Requirement: Review carousel on photo background

The system SHALL render the review section on a cover/center photo
background (no overlay) with carousel slides showing an avatar, a name,
a five-star gold (`#ffc000`) rating, and an italic quote, plus red
carousel dots.

#### Scenario: Review slides

- **GIVEN** the Paprika page is rendered
- **WHEN** the review section is displayed
- **THEN** the section SHALL use a cover/center photo background
- **AND** each review slide SHALL show a round avatar, a name, five stars
  (checked stars in gold `#ffc000`), and an italic quote
- **AND** the section SHALL show carousel dots (10×10) whose active dot
  is solid red `#f42f2c` and idle dots are `rgba(244,47,44,0.2)`

### Requirement: Blog section with four cards

The system SHALL render the white blog section with the heading "Latest
From Our Blog", a subtitle, and four blog cards each with a hover-zooming
photo, a black date badge, a title that turns red on hover, an excerpt,
and a likes/comments meta line.

#### Scenario: Blog cards

- **GIVEN** the Paprika page is rendered
- **WHEN** the blog section is displayed
- **THEN** a "Latest From Our Blog" heading with a short subtitle SHALL be
  shown
- **AND** four blog cards SHALL be shown, each with a photo that scales to
  1.1 on hover, a black date badge (e.g. "10 Jan 2018", white weight-100
  text, ~115px wide), a title that turns red `#f42f2c` on hover, an
  excerpt, and a "15 Likes / 02 Comments" meta line

### Requirement: Red footer with widget columns and dark strip

The system SHALL render a solid red (`#f42f2c`) footer widget band with
three columns — Opening Hours, Contact Us (address + two phone lines),
Newsletter (text + email input + red pill subscribe button) — above a
near-black `#222` copyright strip.

#### Scenario: Footer widgets

- **GIVEN** the Paprika page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer widget band SHALL have a solid red `#f42f2c`
  background with white text
- **AND** an "Opening Hours" column SHALL list Monday–Friday, Saturday and
  Sunday with "08.00 am - 10.00 pm" hours
- **AND** a "Contact Us" column SHALL show an address and two phone
  numbers (24px weight-600)
- **AND** a "Newsletter" column SHALL show the promo text, an email input,
  and a red pill subscribe button (border-radius 57px)
- **AND** the bottom strip SHALL have a `#222` background with a white
  copyright line re-branded to Paprika

### Requirement: Mobile stacking

The system SHALL collapse the multi-column layouts (about split,
reservation split, menu/gallery/blog grids, footer widgets) to a single
column on small screens, matching the source's Bootstrap `col-*` behavior,
with the banner headline shrinking to 40px.

#### Scenario: Single column below 768px

- **GIVEN** the Paprika page is rendered on a viewport narrower than 768px
- **WHEN** the page is displayed
- **THEN** the about split, reservation split, and footer widgets SHALL
  stack vertically
- **AND** the menu, gallery and blog grids SHALL collapse to fewer columns
- **AND** the banner headline SHALL render at 40px

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-paprika`
- [ ] `scripts/verify-app.sh paprika` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with source): fixed header (logo badge +
      uppercase nav, scrolled → `rgba(34,34,34,0.9)`) → 767px banner hero
      (photo bg, "Wide Options of Choice" eyebrow, "Delicious Recipes" 60px
      h1, paragraph, red "Check Our Menu" button → hover `#222`) →
      white "About Our Story" split (text left + photo right + "view full
      menu" red button, hover red shadow) → `#f9f9ff` menu section (title +
      filter tabs All/Breakfast/Lunch/Dinner/Budget Meal/Buffet with red
      active tab + 6 white rounded cards with red prices + centered "view
      full menu" button) → photo-background reservation (overlay
      `rgba(17,22,24,0.75)`, left heading "Reserve Your Seats to Confirm
      if You Come with Your Family" + white form card right: Name, Email,
      Phone, Date & time, Select Event, "Make Reservation") → `#f9f9ff`
      gallery (title + filters + 6 photos) → photo-background review
      carousel (avatar, name, gold `#ffc000` stars, italic quote, red
      dots) → white blog section ("Latest From Our Blog" + 4 cards: zoom
      photo, black date badge, red-hover title, excerpt, Likes/Comments) →
      RED `#f42f2c` footer widget band (Opening Hours / Contact Us /
      Newsletter + pill button) → `#222` copyright strip
- [ ] Brand color `#f42f2c` (red) in `@theme` and used via Tailwind
      classes (buttons, active filter tab, prices, blog hover, footer band)
- [ ] Text/dark `#222` (headings, footer strip, button hover bg);
      light sections `#f9f9ff`; gold stars `#ffc000`; form fields
      `#eeeeee` border / `#999999` 13px weight-300 text; overlay
      `rgba(17,22,24,0.75)`
- [ ] Poppins (100–700) via Google Fonts `<link>` in `index.html` — NO
      display/serif font
- [ ] `.section-gap` rhythm = 120px vertical padding; banner height 767px;
      menu cards white radius 10px padding 30px
- [ ] Buttons: `.primary-btn` style — red bg, 42px line-height, 0 30px
      padding, uppercase 14px weight-500 white, 0.3s transition, arrow
      glyph sliding right on hover; reservation submit capitalize;
      newsletter pill radius 57px
- [ ] Placeholder images via `picsum.photos/seed/paprika-<n>/<w>/<h>`,
      icons from lucide-react (or inline SVG for brand icons), no copied
      assets
- [ ] No extra pages — nav links are anchors/placeholders only
- [ ] "Make Reservation" validates (name, valid email, phone, date, event)
      and shows summary / validation messages (pure exported function for
      tests)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md: mark BOTH dup rows `[x]` (Bootstrap line 444 AND Food
      Drinks line 2686) + surge URL + `npm run readme:status` done by
      implementer at ship time
