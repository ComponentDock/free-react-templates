# Template: Hostelry (Hotel)

## Purpose

Hostelry is a single-page hotel website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Royal"
design (see TEMPLATES.md — first `- [ ]` item whose prep did not exist on
main, line 491 in the Hotel category; the same source slug is DUPLICATED at
line 1926 — BOTH rows must be marked `[x]` when done), built under a NEW name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a hotel landing page: an absolute header over the hero (logo
left, right-aligned links Home / About us / Accomodation / Gallery / Blog
[dropdown: Blog, Blog Details, Elemests] / Contact, 12px uppercase dark links
with light-blue hover), a dark hero on a resort photo background ("Away from
monotonous life" kicker, "Relax Your Mind" 60px white headline, lorem
paragraph, yellow "Get Started" button), a dark "Book Your Room" booking
widget overlaying the hero bottom (Arrival Date + Departure Date text fields
with calendar icons, Adult / Child / Number of Rooms selects, full-width
yellow "Book Now" button), a white "Hotel Accomodation" section with 4 room
cards (Double Deluxe Room $250/night, Single Deluxe Room $200/night,
Honeymoon Suit $750/night, Economy Double $200/night — rounded image with a
yellow "Book Now" overlay button and hover zoom, title, blue price, blurb), a
dark "Royal Facilities" section on a photo background with 6 icon cards
(Restaurant, Sports Club, Swimming Pool, Rent a Car, Gymnesium, Bar — 1px
bordered, 10px radius, white text), an "About Us Our History Mission & Vision"
split section (copy + dark "Request Custom Price" button + background photo),
a light-grey "Testimonial from our Clients" slider (white cards with quote +
avatar + name), a "latest posts from blog" section with 3 blog cards (thumb
with hover zoom-rotate, date, tag, title, excerpt), and a near-black footer
with 4 widgets (About Agency + social icons, Navigation Links, Newsletter
email input + yellow button, InstaFeed image grid) and a copyright bar.
Hostelry recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Royal" — free hotel website template
  (source: https://colorlib.com/wp/template/royal/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/royal/`
  (HTTP 200, ~32KB, `<title>Royal Hotel</title>`) + stylesheets
  `css/style.css` (~61KB custom theme + Bootstrap 4 base), `css/bootstrap.css`,
  `css/responsive.css`, `vendors/bootstrap-datepicker/...`,
  `vendors/nice-select/...`, `vendors/owl-carousel/...`, and Google Fonts
  "Poppins". The rendered DOM is the reference below; the TEMPLATES.md
  screenshot (`royal-free-template.jpg`, 1200×946) confirms the visual
  design: white header strip with dark uppercase nav, dark hero photo
  (resort pool at sunset) with "AWAY FROM MONOTONOUS LIFE" kicker, "Relax
  Your Mind" headline, yellow "GET STARTED" button, dark "BOOK YOUR ROOM"
  widget with date fields + Adult/Child dropdowns + yellow "BOOK NOW"
  button, white accommodation section with "Hotel Accomodation" heading
  (original misspelling) and grey subtitle. Palette: white base, yellow
  #f3c300 primary (buttons, accents), light blue #52c5fd (prices, nav
  hover), near-black #04091e (hero, booking widget, facilities + footer
  backgrounds), #222222 headings, #777777 body text.
- **Section order (1:1):**
  1. `header_area` — `position: absolute; top: 0; width: 100%; z-index: 20`
     over the hero. Logo image left (`a.navbar-brand`), right nav
     `ul.nav.navbar-nav` links **Home, About us, Accomodation, Gallery,
     Blog, Contact** — each `a.nav-link` `font: 500 12px/80px "Poppins"`,
     uppercase, color #222222, hover/active color #52c5fd; `li.nav-item`
     margins 30px (`.nav-item + li { margin-left: 30px; }`). "Blog" is a
     `li.nav-item.submenu` dropdown (white panel, 220px min-width, arrow
     caret; items **Blog, Blog Details, Elemests**; hover bg #f0f0f0 +
     #52c5fd text). Mobile: hamburger toggler with 3 yellow bars
     (`background: #fab915`, 25×3px, animated to X).
  2. `section.banner_area` — dark hero (`background: #04091e` + background
     image `image/banner_bg.jpg`), centered `div.banner_content.text-center`:
     `h6` **Away from monotonous life** (uppercase, 14px/30px,
     letter-spacing 1.4px, weight 400 — yellow), `h2` **Relax Your Mind**
     (60px/60px, weight 700, white), `p` lorem ("If you are looking at blank
     cassettes on the web...", weight 300, 14px/24px, white), `a.btn.theme_btn.button_hover`
     **Get Started**.
  3. `div.hotel_booking_area > div.hotel_booking_table` — dark booking
     widget (background #04091e, shadow) sitting on the hero/below it:
     `h2` **Book Your Room** (24px/30px, uppercase, white) + a row of
     fields: `input.form-control` **Arrival Date** (with calendar icon
     addon), `input.form-control` **Departure Date**, `select.wide`
     **Adult** (options Adult / Old / Younger / Potato), `select.wide`
     **Child** (Child / Baby / Child), `select.wide` **Number of Rooms**
     (Room 01 / Room 02 / Room 03), then `a.book_now_btn.button_hover`
     **Book Now** (full-width block).
  4. `section.accomodation_area.section_gap` — white section, centered
     `div.section_title.text-center`: `h2` **Hotel Accomodation** (36px/45px,
     weight 600, #222222 — original misspelling; keep it) + `p` **"We all
     live in an age that belongs to the young at heart. Life that is
     becoming extremely fast."** (14px/30px, #777777). Below: 4 room cards
     `div.accomodation_item` in a row (grid): `div.hotel_img` (position
     relative, border-radius 10px, overflow hidden; img hover scale(1.19))
     with `a.theme_btn` **Book Now** overlay (absolute, bottom 20px, left
     50%, translateX(-50%), padding 5px 25px, max-width 128px); then
     `h4.sec_h4` room title (18px/38px, weight 600, #222222) + `h5` price
     (24px/28px, weight 600, **#52c5fd**, `small` "night" 14px weight 300)
     - lorem blurb. Cards: **Double Deluxe Room** $250/night ·
     **Single Deluxe Room** $200/night · **Honeymoon Suit** $750/night ·
     **Economy Double** $200/night.
  5. `section.facilities_area.section_gap` — dark section (`background:
#04091e` + background image `image/facilites_bg.jpg`, overflow hidden):
     centered `section_title`: `h2` **Royal Facilities** (white). Below, 6
     `div.facilities_item` cards (border 1px solid #777777, border-radius
     10px, `background-color: rgba(249,249,255,0.102)`, padding 31px 40px
     37px, color #fff): Linearicons-Free glyph (`span.lnr` — lnr-dinner,
     lnr-bicycle, lnr-shirt, lnr-car, lnr-construction, lnr-coffee-cup) +
     `h4` title + `p` blurb (14px/24px). Items: **Restaurant, Sports CLub,
     Swimming Pool, Rent a Car, Gymnesium, Bar** (original spellings).
  6. `section.about_history_area.section_gap` — split section: left
     `div.about_content` (padding-right 60px): `h2` **About Us Our History
     Mission & Vision** + lorem paragraph (women/conduct copy) +
     `a.theme_btn_two.button_hover` **Request Custom Price** (bg #222222,
     white, uppercase 14px/500, padding 5px 29px); right: background photo
     (`image/about_bg.jpg`).
  7. `section.testimonial_area.section_gap` — light section (`background:
#f9f9ff`): `section_title` `h2` **Testimonial from our Clients** +
     `div.testimonial_slider.owl-carousel` with 4 slides
     `div.media.testimonial_item` (white card, 1px solid #eeeeee, padding
     40px): avatar image + `h4` name (**Fanny Spencer** — same name on all
     4 slides in the original placeholder content) + quote ("As conscious
     traveling Paupers we must always be concerned about our dear Mother").
  8. `section.latest_blog_area.section_gap` — `section_title` `h2`
     **latest posts from blog** (lowercase in the original) + 3 blog cards
     `div.single-recent-blog-post`: `div.thumb` (overflow hidden; img hover
     `scale(1.23) rotate(10deg)`) + `div.details` (padding-top 30px): date
     row (14px/24px), tag **Travel / Life Style**, `h4.sec_h4` post title
     (18px, #222222, hover #52c5fd), lorem excerpt. Posts: **Low Cost
     Advertising, Creative Outdoor Ads, It S Classified How To Utilize
     Free**.
  9. `footer.footer-area.section_gap` — `background: #04091e`, padding
     142px 0. 4 columns `div.single-footer-widget`: **About Agency** (blurb
     - social icon links, 18px, #82848f, margin-left 25px, hover #f3c300),
       **Navigation Links** (Home, Feature, Services, Portfolio, Team,
       Pricing, Blog, Contact), **Newsletter** (email input placeholder
       EMAIL + `btn.sub-btn` yellow submit), **InstaFeed** (image grid).
       `div.footer-bottom`: copyright bar + `div.footer-social` right-aligned
       social icons.
- **Design tokens extracted from `css/style.css` (+ preview HTML):**
  - Fonts: **Poppins** (300/400/500/600/700) via Google Fonts `<link>` —
    body + headings; nav links 500 12px uppercase; hero h2 60px/700; hero
    kicker h6 14px uppercase letter-spacing 1.4px; section titles 36px/600;
    room title 18px/600; room price 24px/600; body p 14px/24px.
  - Primary yellow: **#f3c300** — `.theme_btn` bg (Get Started + room-card
    Book Now overlays), `.book_now_btn` bg, blog tag hover bg, pagination
    active. Button text white on yellow (`.book_now_btn` uses #222222 text).
  - Alt yellow: **#f8b600** (newsletter `bbtns` bg), **#fab915** (hamburger
    bars).
  - Light blue: **#52c5fd** — room prices, nav link hover/active, blog
    title hover, post tag hover.
  - Headings: **#222222**; body text: **#777777**; `.theme_btn_two` (About
    "Request Custom Price") bg #222222 + white text.
  - Dark near-black: **#04091e** — hero bg, `hotel_booking_table` bg,
    `facilities_area` bg, `footer-area` bg.
  - Light section bg: **#f9f9ff** (testimonial_area).
  - Borders: **#eeeeee** (testimonial card, submenu divider), **#777777**
    (facilities card), **#ededed** (submenu row dividers).
  - Buttons: sharp corners (**border-radius: 0**), uppercase, 14px; theme_btn
    #f3c300 bg + white text + padding 5px 30px; book_now_btn #f3c300 bg +
    #222222 text + padding 5px 20px + width 100%; theme_btn_two #222222 bg +
    white text + padding 5px 29px; `.button_hover:hover { color: #fff }`.
  - Cards: room image radius **10px** + hover img scale(1.19); facilities
    card radius 10px + translucent white bg; testimonial card padding 40px;
    blog thumb hover `scale(1.23) rotate(10deg)`.
  - Section spacing: `section_gap` padding **120px 0**; footer padding
    142px 0; room cards margin-bottom 30–45px.
  - Header: absolute over hero; nav links 500 12px uppercase #222222 with
    30px gaps; Blog submenu white dropdown panel; mobile toggler yellow
    3-bar.
- **Recreation decisions:** navbar = absolute over hero with logo + wordmark
  ("Hostelry"), right links (Home, About us, Accomodation, Gallery, Blog
  dropdown, Contact) with #52c5fd hover, yellow-bar hamburger on mobile;
  hero = dark photo band (picsum resort seed) with yellow kicker, "Relax
  Your Mind" white headline, lorem paragraph, yellow "Get Started" button;
  booking widget = dark #04091e panel with "Book Your Room" title, two date
  inputs + three selects (Adult / Child / Number of Rooms) + full-width
  yellow "Book Now" button (date inputs can use native `type="date"`);
  accomodation = 4 room cards with picsum images, rounded 10px, hover zoom,
  yellow "Book Now" overlay, title + blue price + blurb (keep the original
  room names/prices as placeholder content); facilities = dark section with
  6 bordered icon cards (lucide icons: Utensils, Bike, Waves, Car, Dumbbell,
  Martini/Coffee) — original titles keep their misspellings; about = split
  with "About Us Our History Mission & Vision" heading, paragraph, dark
  "Request Custom Price" button, right photos; testimonials = light #f9f9ff
  section with 4 white quote cards (vary the names — original reuses "Fanny
  Spencer" on every slide); blog = 3 cards with date/tag/title/excerpt and
  hover zoom-rotate thumb; footer = near-black 4-column (About Agency +
  social icons, Navigation Links, Newsletter form, InstaFeed image grid) +
  copyright bar with repo-standard credit. Placeholder images via
  `https://picsum.photos/seed/hostelry-<n>/<w>/<h>` (hero band, 4 room
  images, 6 facility backgrounds if needed, about photo, 4 avatars, 3 blog
  thumbs, instafeed tiles).

## Requirements

### Requirement: Navbar

The system SHALL render a header over the hero with a logo, a brand wordmark,
six navigation links with a Blog dropdown, a light-blue hover/active state,
and a mobile hamburger menu.

#### Scenario: Navbar content

- **GIVEN** the Hostelry page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the logo and "Hostelry" wordmark on the left
- **AND** it SHALL show the nav links Home, About us, Accomodation, Gallery,
  Blog, and Contact on the right (desktop viewports)
- **AND** each link SHALL be uppercase 12px dark text that turns light blue
  (#52c5fd) on hover or when active

#### Scenario: Blog dropdown

- **GIVEN** the navbar is displayed
- **WHEN** the user hovers or focuses the Blog link
- **THEN** a dropdown panel SHALL open with items Blog, Blog Details, and
  Elemests
- **AND** the panel SHALL be keyboard-accessible

#### Scenario: Mobile menu

- **GIVEN** the navbar is displayed on a narrow viewport
- **WHEN** the user activates the hamburger control
- **THEN** the nav links SHALL be revealed in a collapsed menu
- **AND** the control SHALL toggle `aria-expanded`
- **AND** activating it again SHALL hide the menu

### Requirement: Hero

The system SHALL render a dark hero on a photo background with a kicker, a
large white headline, a paragraph, and a yellow "Get Started" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the uppercase kicker "Away from monotonous life"
  in yellow with letter spacing
- **AND** it SHALL show the 60px white headline "Relax Your Mind"
- **AND** it SHALL show a supporting paragraph (lorem-style placeholder
  copy)
- **AND** it SHALL show a yellow "Get Started" button with sharp corners

### Requirement: Booking widget

The system SHALL render a dark "Book Your Room" booking widget with arrival
and departure date fields, Adult / Child / Number of Rooms selects, and a
full-width yellow "Book Now" button.

#### Scenario: Booking form fields

- **GIVEN** the booking widget is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the uppercase title "Book Your Room"
- **AND** it SHALL show an Arrival Date field and a Departure Date field
- **AND** it SHALL show Adult, Child, and Number of Rooms select fields
- **AND** it SHALL show a full-width yellow "Book Now" button

#### Scenario: Booking validation

- **GIVEN** the booking form is displayed
- **WHEN** the user submits it with an invalid or empty date, or a departure
  date before the arrival date
- **THEN** a per-field error message SHALL appear
- **AND** no submission SHALL occur
- **AND** a success state SHALL replace the form on a valid submit

### Requirement: Accomodation

The system SHALL render a white "Hotel Accomodation" section with a heading,
subtitle, and four room cards (image with a yellow "Book Now" overlay and
hover zoom, title, blue price, blurb).

#### Scenario: Room cards

- **GIVEN** the Accomodation section is visible
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Hotel Accomodation" and the subtitle
  "We all live in an age that belongs to the young at heart. Life that is
  becoming extremely fast."
- **AND** it SHALL show 4 room cards: Double Deluxe Room $250/night, Single
  Deluxe Room $200/night, Honeymoon Suit $750/night, Economy Double
  $200/night
- **AND** each card SHALL show an image (rounded 10px) with a yellow "Book
  Now" overlay button at the bottom center
- **AND** each card SHALL show the room title (dark), the price in light
  blue (#52c5fd), and a blurb

#### Scenario: Card hover

- **GIVEN** a room card is displayed
- **WHEN** the user hovers or focuses the card image
- **THEN** the image SHALL zoom in (scale ~1.19)

### Requirement: Facilities

The system SHALL render a dark "Royal Facilities" section on a photo
background with six bordered icon cards.

#### Scenario: Facility cards

- **GIVEN** the Facilities section is visible
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Royal Facilities"
- **AND** it SHALL show 6 cards: Restaurant, Sports Club, Swimming Pool,
  Rent a Car, Gymnesium, and Bar
- **AND** each card SHALL show an icon, a title, and a blurb in white text
  inside a 1px-bordered rounded (10px) translucent card

### Requirement: About

The system SHALL render an "About Us Our History Mission & Vision" split
section with copy, a dark "Request Custom Price" button, and a photo.

#### Scenario: About content

- **GIVEN** the About section is visible
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "About Us Our History Mission & Vision"
  and a paragraph
- **AND** it SHALL show a dark "Request Custom Price" button (bg #222222,
  white text, uppercase)
- **AND** it SHALL show the photo on the opposite side

### Requirement: Testimonials

The system SHALL render a light-grey "Testimonial from our Clients" section
with a slider of white quote cards (avatar, name, quote).

#### Scenario: Testimonial slides

- **GIVEN** the Testimonial section is visible
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Testimonial from our Clients" on a
  #f9f9ff background
- **AND** it SHALL show 4 white quote cards, each with an avatar, a name,
  and a short quote
- **AND** the slider SHALL be navigable (prev/next controls, or auto-advance
  with manual controls)

### Requirement: Blog

The system SHALL render a "latest posts from blog" section with three blog
cards (thumbnail with hover zoom-rotate, date, tag, title, excerpt).

#### Scenario: Blog cards

- **GIVEN** the Blog section is visible
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "latest posts from blog"
- **AND** it SHALL show 3 blog cards: Low Cost Advertising, Creative Outdoor
  Ads, and It S Classified How To Utilize Free
- **AND** each card SHALL show a thumbnail (hover: scale 1.23 + rotate 10°),
  a date, a tag (Travel / Life Style), a dark title (hover light blue), and
  an excerpt

### Requirement: Footer

The system SHALL render a near-black footer with four widgets (About Agency
with social icons, Navigation Links, Newsletter, InstaFeed) and a copyright
bar.

#### Scenario: Footer content

- **GIVEN** the page bottom is reached
- **WHEN** the footer is displayed
- **THEN** it SHALL show an About Agency column with a blurb and social icon
  links with accessible labels
- **AND** it SHALL show a Navigation Links column (Home, Feature, Services,
  Portfolio, Team, Pricing, Blog, Contact)
- **AND** it SHALL show a Newsletter column with an email input and a yellow
  submit button
- **AND** it SHALL show an InstaFeed column with a grid of thumbnail images
- **AND** the copyright bar SHALL show "Copyright © {year} All rights
  reserved" with the repo-standard credit

### Requirement: Composition

The system SHALL render all sections on one page in the original order with
the yellow brand color defined as a theme token.

#### Scenario: Section order

- **GIVEN** the page is rendered
- **WHEN** the full page is inspected
- **THEN** the sections SHALL appear in order: Navbar → Hero → Booking
  widget → Accomodation → Facilities → About → Testimonials → Blog → Footer

#### Scenario: Theme token

- **GIVEN** the app stylesheet is loaded
- **WHEN** the theme is inspected
- **THEN** the brand color #f3c300 SHALL be defined in `@theme` and used via
  Tailwind classes throughout the sections

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-hostelry`.
- [ ] Tests written first (red), then implementation (green) per
      docs/replication.md TDD flow.
- [ ] `npm run verify:app -- hostelry` passes: typecheck + lint + vitest at
      100% coverage (lines/functions/branches/statements) + build.
- [ ] Section order 1:1 with the original (navbar → hero → booking → rooms →
      facilities → about → testimonials → blog → footer).
- [ ] Design tokens match: #f3c300 primary in `@theme`, Poppins font via
      Google Fonts `<link>`, sharp-corner yellow buttons, #52c5fd price
      accents, #04091e hero/booking/facilities/footer backgrounds, #f9f9ff
      testimonial background.
- [ ] Booking form validates (dates required, departure ≥ arrival) with zod.
- [ ] Room image hover zoom, blog thumb hover zoom-rotate, testimonial
      slider navigation work.
- [ ] Navbar Blog dropdown and mobile hamburger (aria-expanded) work.
- [ ] No ColorLib assets copied: picsum placeholders, lucide-react icons,
      Google Fonts.
- [ ] PR description records: source template (ColorLib Royal), preview URL,
      design tokens used, deviations (renamed "Hostelry", picsum images,
      paraphrased copy).
- [ ] TEMPLATES.md bookkeeping marks BOTH duplicate rows (lines 491 and 1926) `[x]` with the surge URL when the app ships.
