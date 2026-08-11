# Template: Lodge (Hotel Template)

## Purpose

Lodge is a single-page hotel homepage template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Hotel"
design (see TEMPLATES.md, line 418 — mark `[x]` when done), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a luxury hotel website: a dark charcoal header (bg #353535,
absolute over the hero) with a white serif "HOTEL" wordmark, centered nav
(Home active / About / Rooms / Facilities ▾ / News / Contact), and a
location-pin address widget on the right ("1525 Boring Lane, Los Angeles,
CA"); a full-width hero photo slider (938px) with a left-aligned white serif
headline ("We hope you'll enjoy your stay.") and three amenity cards below
(Pool / Sauna / Restaurant — photo + uppercase label + gold arrow); a rooms
showcase of 2-up cards (image carousel, "Junior Suite" title, "From $252"
price, feature icons: Smart TV, High Wi-fii, AC, Parking, Pool) followed by a
check-availability widget (Adults / Children / Rooms quantity steppers, a
room-type select, and a "CHECK AVAILABILITY" button with a gold border and
arrow); a centered serif quote banner ("Customers may forget what you said
but they will never forget how you made them feel.") above two-column about
paragraphs; a Facilities section on light gray (#F7F7F7) with alternating
photo/text blocks ("Wellness Center"); a tabbed "Guestbook" testimonial
section (date, 5 gold stars, title, text, author photo/name); an Instagram
strip ("Follow us on Instagram @yourhotel" + 4 thumbnails); and a dark footer
(#353535) with a room-photo strip, logo, four widget columns (Location,
Reception, Shuttle Service, Restaurant — all with the phone +1 (603)535-4592)
and a copyright bar. Lodge recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Hotel" — free hotel website template
  (source: https://colorlib.com/wp/template/hotel/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hotel/`
  (HTTP 200, 56.9KB) + stylesheet `css/style.css` (40.8KB, SCSS-compiled).
  The rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`hotel-free-template.jpg`, 1200×946) confirms the visual design: dark
  charcoal header bar with white serif "HOTEL" wordmark, centered white nav
  links, and a location-pin address at the right; hero = a warm-toned luxury
  hotel lobby photo (bokeh background) with a large white serif headline
  "We hope you'll enjoy your stay." on the left; directly below, three
  rectangular amenity cards (Pool at night, wooden Sauna interior, plated
  Restaurant meal) with uppercase labels and thin gold arrows; below that a
  white section starting with room cards (image left, text right with a thin
  gold rectangular border — the CHECK AVAILABILITY button). Overall
  aesthetic: upscale hotel, Taviraj serif headlines + Open Sans body, gold
  (#AE9548) accents on a neutral palette of charcoal (#353535), dark ink
  (#081624), and off-white (#F7F7F7).
- **Section order (1:1):**
  1. `header.header-section` (bg #353535, padding 38px 0, `position:
absolute` over the hero, full width): `inner-header` — logo (white serif
     wordmark "HOTEL") left; `main-menu` centered `ul li` (inline-block,
     margin-right 40px): Home, About, Rooms, Facilities ▾ (`.drop-menu`:
     absolute, top 70px, white bg, width 220px — Junior Suit, Double Room,
     Senior Suit, Single Room), News, Contact; right `top-widget.top-info`
     (float right): location-pin image + "1525 Boring Lane, Los Angeles, CA"
     (a phone number variant on other pages).
  2. `hero-slider`: `.slider-item` (height 938px, padding-top 395px,
     `single-slider-item set-bg` photo background) with h1 "We hope you'll
     enjoy your stay." (white, serif, left-aligned); below, `.slider-nav`
     with three `.nav-text` amenity cards — image + uppercase label (Pool,
     Sauna, Restaurant) + `lnr-arrow-right` icon.
  3. `room-check` (padding-bottom 52px): `.room-item` (margin-bottom 40px,
     box-shadow `2px 15px 75px 6px #ECECEC`) — `.room-pic-slider
room-pic-item owl-carousel` (3 room photos) + `.room-text` (padding:
     35px 45px 37px 35px): `.room-title` h2 "Junior Suite" (36px, #2d220f,
     float left) + `.room-price` (float right): span "From" (14px Open Sans
     300 #2d220f, absolute left -40px) + h2 "$252" (36px Open Sans 400
     #081624); `.room-features` icon row (flaticon icons + labels: Smart TV,
     High Wi-fii, AC, Parking, Pool); then the booking widget:
     `.room-quantity` (mb 34px) quantity steppers (Adults / Children /
     Rooms), `.room-selector`: label "Room" + `select.suit-select` (Eg.
     Master suite, Double Room, Single Room, Special Room), and button
     "CHECK AVAILABILITY" (`.primary-btn` with arrow icon).
  4. `about-room` (text-center): h2 "“Customers may forget what you said but
     they will never forget how you made them feel”." (48px/500 #242424, lh
     56px, mb 26px); `.about-para`: two `col-lg-6` lorem paragraphs (mb
     13px).
  5. `facilities-section spad` (bg #F7F7F7, padding-top 86px, padding-bottom
     115px): `.section-title` h1 "Facilities" (72px/400 #242424, lh 72px, mb
     80px); `.facilities-content`: alternating `.facilities-img set-bg`
     (photo) + `.facilities-text-warp` (flex, centered) > `.facilities-text`
     — h2 "Wellness Center" (#242424, mb 17px) + lorem + `.primary-btn
fac-btn` — repeated twice.
  6. `testimonial-section spad`: `.section-title` h1 "Guestbook";
     `.testimonial-item` with `ul.nav[role=tablist]` of author tabs
     (`.author-pic` img) and `.tab-content` — three `.tab-pane` (fade,
     first active), each `.single-testimonial-item`: `span.test-date`
     "02/02/2019", `.test-rating` five `fa-star` icons (gold), h4 title
     ("Loved It"), p testimonial text; `.testimonial-author-item` with
     author pic + name/role under the tabs.
  7. `follow-instagram` (bg #f7f7f7, padding 23px 0): centered h2 "Follow us
     on Instagram @yourhotel" (48px/500) + 4 `room-footer-pic` images
     (room-1..4.jpg).
  8. `footer-section` (bg #353535, padding-top 43px, overflow hidden):
     `.footer-room-pic` strip; `.footer-logo`; four `single-footer-widget`
     with `widget-text` — Location (1525 Boring Lane, Los Angeles, CA),
     Reception +1 (603)535-4592, Shuttle Service +1 (603)535-4592,
     Restaurant +1 (603)535-4592; copyright bar (original: "Copyright © …
     All rights reserved | This template is made with by Colorlib") with
     links Privacy Policy, Photo Requests → replace with repo-standard
     footer credit.
- **Design tokens extracted from `css/style.css`:**
  - Brand gold: **#AE9548** (33 uses; #AE954B in the button border) — arrow
    icon color in `.primary-btn i`, gold accents/underlines, hover accents.
  - Dark ink: **#081624** (16 uses) — `.primary-btn` text color, `.room-price`
    h2.
  - Charcoal: **#353535** — header bg + footer bg; **#2d220f** — room title +
    "From" label; **#242424** (34 uses) — body/headings (`.section-title h1`,
    `.facilities-text h2`, about quote); **#111111** — default h1–h5.
  - Light: **#F7F7F7** (facilities + instagram strip bg), **#ECECEC** (room
    card shadow tint), **#ffffff** (dropdown, room text panel).
  - Fonts: **'Taviraj', serif** (400/500 — h1–h5, room titles, about quote)
    - **'Open Sans', sans-serif** (300/400/700 — body, nav, buttons, price,
      "From" label) via Google Fonts `<link>` (free).
  - Buttons: `.primary-btn` — font-size 14px/700, `text-transform:
uppercase`, color #081624, padding `15px 34px 15px 64px` (arrow room on
    the right), `border: 2px solid #AE954B`, `position: relative`, arrow
    icon `i` absolute right 25px top 14px color #AE9548 (21px). Used for
    "CHECK AVAILABILITY" and the facilities `fac-btn` links.
  - Headings: `.section-title h1` 72px/400 (Facilities, Guestbook); about
    quote 48px/500 lh 56px; `.section-title h2` 48px/500 (Instagram follow);
    `.room-title h2` + `.room-price h2` 36px; nav links sans.
  - Spacing: header padding 38px 0; hero slider 938px tall with
    padding-top 395px; room-check pb 52px; room cards shadow
    `2px 15px 75px 6px #ECECEC`; facilities pt 86px pb 115px; section-title
    mb 80px; instagram strip padding 23px 0; footer pt 43px.
  - Section backgrounds: header/footer #353535; hero = full-bleed photos;
    body white; facilities + instagram #F7F7F7; room cards white with
    #ECECEC shadow.
- **Recreation decisions:** repo-standard navbar (charcoal #353535 over the
  hero, sticky with shadow on scroll) with "Lodge" serif wordmark + gold
  accent, nav links (Home active, About, Rooms, Facilities dropdown with 4
  room types, News, Contact), address widget with a map-pin icon; hero =
  full-width photo slider (auto-advance + prev/next) with the left-aligned
  white serif headline "We hope you'll enjoy your stay." and 3 amenity cards
  (Pool / Sauna / Restaurant — picsum photo + uppercase label + gold arrow);
  rooms = 2-up cards (image carousel, title, "From $252/night", 5 feature
  icons via lucide-react: Smart TV, High Wi-fi, AC, Parking, Pool); booking
  widget = Adults / Children / Rooms steppers + room-type select + gold-
  bordered "CHECK AVAILABILITY" button; quote banner + two-column about;
  Facilities on #F7F7F7 with alternating photo/text blocks (Wellness Center
  etc.) and `fac-btn` links; Guestbook = tabbed testimonials (3 entries,
  date, 5 gold stars, title, text, author photo/name tabs); Instagram strip
  (title + 4 picsum thumbs); footer #353535 with room-photo strip, logo, 4
  widget columns (Location address, Reception / Shuttle Service / Restaurant
  with `tel:+16035354592` links) + copyright bar with repo-standard credit
  ("© 2026 Lodge. All rights reserved." + "recreation of ColorLib Hotel");
  all images picsum-seeded (`picsum.photos/seed/lodge-N/w/h`); Google Fonts
  Taviraj + Open Sans via `<link>`; icons via lucide-react.

Lodge lives in `apps/lodge` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header / navigation

The system SHALL render a dark charcoal header with a logo, primary
navigation, a Facilities dropdown, an address widget, and a mobile menu.

#### Scenario: Header content

- **GIVEN** the Lodge page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Lodge" as a white serif wordmark
- **AND** it SHALL show nav links home (active), About, Rooms, Facilities,
  News, and Contact
- **AND** the Facilities link SHALL reveal a dropdown submenu with Junior
  Suit, Double Room, Senior Suit, and Single Room
- **AND** it SHALL show an address widget with a location-pin icon and
  "1525 Boring Lane, Los Angeles, CA"
- **AND** the header SHALL sit over the hero on a dark charcoal background
  (#353535)

#### Scenario: Sticky header

- **GIVEN** the page is rendered
- **WHEN** the user scrolls down past the hero
- **THEN** the header SHALL become fixed with a dark background and a drop
  shadow

#### Scenario: Mobile menu

- **GIVEN** the header is displayed at a small viewport
- **WHEN** the user activates the hamburger control
- **THEN** a mobile menu SHALL open with the nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero slider

The system SHALL render a full-width hero photo slider with a serif headline
and three amenity cards.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-width background photo with a dark overlay
- **AND** it SHALL show the headline "We hope you'll enjoy your stay." in
  large white serif type on the left
- **AND** the slide SHALL advance automatically or via prev/next controls

#### Scenario: Amenity cards

- **GIVEN** the hero is displayed
- **WHEN** the amenity card row is visible
- **THEN** it SHALL show three cards labeled Pool, Sauna, and Restaurant
- **AND** each card SHALL show a photo, an uppercase label, and a gold arrow
  icon

### Requirement: Rooms showcase

The system SHALL render two-up room cards with an image carousel, a title,
a price, and feature icons.

#### Scenario: Room cards

- **GIVEN** the page is rendered
- **WHEN** the rooms section is displayed
- **THEN** it SHALL show room cards, each with a carousel of room photos
- **AND** each card SHALL show a room name (e.g. "Junior Suite") and a price
  ("From" + "$252")
- **AND** each card SHALL show feature icons for Smart TV, High Wi-fi, AC,
  Parking, and Pool
- **AND** each card SHALL cast a soft shadow (like
  `2px 15px 75px 6px #ECECEC`)

### Requirement: Check availability widget

The system SHALL render a booking widget with quantity steppers, a room-type
select, and a CHECK AVAILABILITY button.

#### Scenario: Booking widget content

- **GIVEN** the rooms section is displayed
- **WHEN** the booking widget is visible
- **THEN** it SHALL show Adults, Children, and Rooms quantity steppers
- **AND** it SHALL show a "Room" select with options like Eg. Master suite,
  Double Room, Single Room, and Special Room
- **AND** it SHALL show a "CHECK AVAILABILITY" button with a gold border and
  an arrow icon

### Requirement: Quote and about section

The system SHALL render a centered quote banner above two columns of about
text.

#### Scenario: Quote banner

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the quote "Customers may forget what you said but
  they will never forget how you made them feel." in large serif type
- **AND** it SHALL show two columns of paragraph text below the quote

### Requirement: Facilities section

The system SHALL render a light-gray facilities section with alternating
photo and text blocks.

#### Scenario: Facilities content

- **GIVEN** the page is rendered
- **WHEN** the facilities section is displayed
- **THEN** it SHALL show the title "Facilities" on a #F7F7F7 background
- **AND** it SHALL show at least two alternating photo/text blocks, each
  with a heading (e.g. "Wellness Center"), a paragraph, and a link button
  with a gold arrow

### Requirement: Guestbook testimonials

The system SHALL render a tabbed testimonials section with star ratings and
author tabs.

#### Scenario: Testimonial tabs

- **GIVEN** the page is rendered
- **WHEN** the Guestbook section is displayed
- **THEN** it SHALL show the title "Guestbook"
- **AND** it SHALL show author photo tabs; activating a tab SHALL show that
  author's testimonial
- **AND** each testimonial SHALL show a date (e.g. "02/02/2019"), five gold
  stars, a title (e.g. "Loved It"), and a paragraph

### Requirement: Instagram strip

The system SHALL render an Instagram follow strip with thumbnails.

#### Scenario: Instagram content

- **GIVEN** the page is rendered
- **WHEN** the Instagram strip is displayed
- **THEN** it SHALL show "Follow us on Instagram @yourhotel"
- **AND** it SHALL show four thumbnail images

### Requirement: Footer

The system SHALL render a dark charcoal footer with a photo strip, logo,
four widget columns, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a strip of room photos and the logo
- **AND** it SHALL show a Location column with the address "1525 Boring
  Lane, Los Angeles, CA"
- **AND** it SHALL show Reception, Shuttle Service, and Restaurant columns,
  each with the phone number "+1 (603)535-4592" as a `tel:` link
- **AND** it SHALL show a copyright bar with the repo-standard footer credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Lodge app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero slider, rooms showcase,
  booking widget, quote/about, facilities, Guestbook, Instagram strip, and
  footer inside the main landmark in the original's order
- **AND** the document title SHALL be "Lodge — Hotel"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- lodge` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero slider +
      amenity cards → rooms + booking widget → quote/about → facilities →
      Guestbook → Instagram strip → footer).
- [ ] Design tokens applied: brand gold #AE9548 (arrows, accents, button
      border #AE954B), dark ink #081624 (button text, price), charcoal
      #353535 (header/footer), text #242424/#2d220f, light #F7F7F7
      (facilities + Instagram bg), Taviraj + Open Sans fonts, uppercase
      gold-bordered CHECK AVAILABILITY button, room-card soft shadow
      `2px 15px 75px 6px #ECECEC`.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Hotel), preview URL, tokens,
      and renames.
