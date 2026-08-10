# Template: Riviera (Hotel & Spa Template)

## Purpose

Riviera is a single-page hotel & spa template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Europa"
hotel website template (see TEMPLATES.md, Hotel section, line 388; duplicates
at lines 1001 and 1906 — mark EVERY copy `[x]` when done), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The reference is a luxury resort site (demo brand in the preview: "Europa
Hotel & Spa"): a dark charcoal header bar (text logo "EUROPA" over a
"HOTEL & SPA" tagline, white uppercase nav links, and a peach "Make a
Reservation" button); a full-height hero photo of a pool resort with a huge
white centered headline "A Luxury Stay"; a dark translucent "Check
Availability" booking card overlapping the hero's bottom edge (From/To date
fields with calendar icons, Adults/Children quantity steppers, a Room-type
dropdown, and a peach "Go" button); a two-column intro ("a memorable
holliday" eyebrow + "A great stay in a lovely hotel." heading + copy + CTA);
two full-width photo "facilities" panels ("Luxury Suite Room" with an icon
feature list — Smart TV, High Wi-fii, AC, Parking, Pool — and "Infinity
Pool"); a "Guestbook" testimonials section (dated quote cards with star
ratings and circular avatars); a video section (full-bleed photo with a white
circular play button); a "Customers love our facilities" about block with
three stacked photos; and a dark footer (about text + logo, a Newsletter
email form with a peach Subscribe button, Contact Info with address and
phone, a link row, and a copyright bar). The design is a light resort
editorial layout: peach `#F9AD81` brand accent, dark charcoal `#353535`
header, near-black `#181717`/`#242424` headings, grey `#9d9d9d` body text,
and a dark `#242424` footer.

Brand colors: primary peach/orange `#F9AD81` (primary buttons, active nav
link + underline, dropdown hover background, the booking card's "Go" button,
footer h5 titles, newsletter subscribe button, play-button icon, testimonial
author names, rating stars' warmer `#ed8a19`); header background `#353535`;
headings `#181717` (section titles) and `#242424` (testimonial/about/facility
headings); body text `#9d9d9d`; meta/date text `#242424` at 50% opacity;
footer background `#242424` with `#171717` copyright bar; newsletter input
`#676767`; the booking card uses a black overlay at 47% opacity over the hero
photo.

## Design reference (replication findings)

- **Original:** ColorLib "Europa" — hotel & spa template
  (source: https://colorlib.com/wp/template/europa/). Listed in TEMPLATES.md
  line 388 (Hotel section); duplicates at lines 1001 and 1906 — mark every
  copy `[x]` when done. Screenshot: `europa-free-template.jpg` (1200×946,
  reviewed visually in the browser).
- **Live preview URL:** https://preview.colorlib.com/theme/europa/ (title
  "Europa Hotel & Spa | Template"; reachable via curl). HTML saved to
  `/tmp/europa-prep/preview.html` (33 KB); stylesheet
  `https://preview.colorlib.com/theme/europa/css/style.css` saved to
  `/tmp/europa-prep/style.css` (30 KB). The screenshot and preview agree
  (dark charcoal header, pool hero, peach `#F9AD81` accents, dark translucent
  booking card) — the preview DOM is authoritative for section order and
  copy; the screenshot is authoritative for the header (text logo "EUROPA /
  HOTEL & SPA", centered white nav links) and the booking-card fields
  (placeholder "dd/mm/yyyy", "EG. MASTER SUITE" room dropdown).
- **Fonts:** the whole template uses one family — `font-family:
"Montserrat Alternates", sans-serif` (headings h1–h6, body p, inputs;
  declared in `style.css` and as `@font-face` in the preview head). Load it
  via Google Fonts `<link>` in `index.html` (weights 400/500/600/700). The
  logo is an image asset (`img/logo.png`) that renders "EUROPA" over "HOTEL &
  SPA" — recreate as styled text (brand name + tagline), never copy the
  asset.
- **Buttons / links (from style.css):**
  - `.primary-btn`: `font-size: 16px; color: #ffffff; background: #F9AD81;
padding: 18px 38px; letter-spacing: 0.5px` — square corners (no radius).
  - Facilities variant `.facilities-item .primary-btn`: `background:
transparent; border: 3px solid #ffffff` (white outline button on the
    photo panels).
  - Booking card "Go" `.check-form button`: `background: #F9AD81; border:
1px solid #F9AD81; font-size: 18px; color: #ffffff; padding: 43px 27px`.
  - Newsletter button `.footer-item .newslatter-form button`: `font-size:
14px; color: #fff; background: #F9AD81; border: none; position:
absolute; right: 0; top: 0; padding: 14px 25px; height: 100%`.
  - Nav links `.inner-header .main-menu ul li > a`: white; the active item
    (`.active a`) is `color: #F9AD81` with a peach underline (`::after`).
  - "Pages" dropdown `.drop-menu`: white, width 220px, links `#242424` 16px
    600; hover row background `#F9AD81` with white text.
- **Section backgrounds / layout (from europa-preview.html + style.css):**
  - header `header.header-section` — `background: #353535; position:
absolute; width: 100%; top: 0; z-index: 999; padding: 30px`; inside
    `container-fluid > .inner-header`: `div.logo` (left, text logo "EUROPA /
    HOTEL & SPA"), `div.nav-right` (float right, peach `primary-btn` "Make a
    Reservation"), `nav.main-menu.mobile-menu` (float right, margin-right
    30px; links Home · About · Rooms · Pages ▾ (dropdown: About Us / Rooms /
    Services) · News · Contact; ~50px gap between items; hamburger on
    mobile).
  - hero `section.hero-area.set-bg` (background `img/hero-bg.jpg`; `height:
938px; padding-top: 396px`) — centered `.hero-text h1` "A Luxury Stay":
    `font-size: 96px; color: #ffffff; font-weight: 600`.
  - booking card `section.search-filter` — `margin-top: -362px; position:
absolute; width: 100%; z-index: 99` (overlaps the hero bottom). Inner
    `.check-form`: white-on-dark panel; `:after` overlay `background:
#000000; opacity: 0.47` behind the content; `h4` "Check Availability"
    (white); `.datepicker` boxes (white, padding 18px; label p 14px 600
    `#242424`; input `dd/mm/yyyy`-style 10px uppercase `#242424` 50% opacity
    with a bottom border `1px solid #888888` and a calendar icon);
    `.room-quantity` with two `.single-quantity` steppers (Adults, Children;
    `-`/`+` qty buttons + number input); `.room-selector` dropdown (nice-select
    with options "Master suite · Double Room · Single Room · Special Room",
    placeholder "Room Eg. ..."); peach "Go" button (see above).
  - intro `section.intro-section.spad` — two `col-lg-6` columns:
    `.intro-left` with `div.section-title` (eyebrow `span` "a memorable
    holliday": 12px uppercase, letter-spacing 4px, `#868686`; `h2` "A great
    stay in a<br>lovely hotel.": 48px/48px 600 `#181717`) + a lorem paragraph
    (`#9d9d9d` 14px/28px 500); `.intro-right` (padding-top 168px) with a
    lorem paragraph + a peach `primary-btn` "Make a Reservation". NOTE: the
    stylesheet's `.intro-text` (15px solid `#F9AD81` border) is NOT wired to
    the homepage HTML (which uses `.intro-left`), so the live preview shows
    no orange border there — follow the live preview (no border).
  - facilities `section.facilities-section` — two full-width
    `.facilities-item.set-bg` panels (`height: 796px; padding: 95px 100px
60px; margin: 0 -15px`; backgrounds `img/faci-1.jpg`, `img/faci-2.jpg`):
    `.fi-title` (`margin-bottom: 375px`, 488px on `.fi-right`): white `h2`
    48px/48px 500 ("Luxury Suite Room", "Infinity Pool") + small uppercase
    white subtitle p (12px, letter-spacing 4px: "From $399", "For all our
    guests"); `.fi-features` icon row (inline `.fi-info` blocks: white icon
    - white label — Smart TV · High Wi-fii · AC · Parking · Pool); white
      outline `primary-btn` "Make a Reservation" (3px white border,
      transparent bg). Second panel is `.fi-right` (image on the right side).
  - testimonials `section.testimonial-section.spad` — `div.section-title`
    `h2` "Guestbook": `font-size: 60px; color: #242424`; two
    `.testimonial-item` (col-lg-6): `.ti-time` date "02 / 02 / 2019" (11px,
    letter-spacing 1.2px, `#242424` at 0.5 opacity), `h4` quote 600
    `#242424` ("We loved our stay", "I will come back again"), `.rating`
    star icons `#ed8a19`, paragraph (lorem), `.ti-author` row: circular
    avatar (54×54, border-radius 50%) + `.author-text` with `h6` name
    (`#F9AD81` 600 — "JOHN DOE", "Maria Smith") and `span` location
    (`#242424` 12px — "Madrid").
  - video `div.video-section` — `.video-bg.set-bg` (`height: 534px`;
    `img/video-bg.jpg`) + `.video-text.set-bg` (`height: 703px;
margin-top: -320px`, overlapping; `img/video-inside-bg.jpg`) with a
    centered white circular play link (`width/height: 95px; border-radius:
50%; color: #F9AD81; font-size: 25px; position: absolute; left/top:
50%` — `fa fa-play` icon) linking to the original YouTube video URL
    (replace with the recreated app's own placeholder/`#`).
  - homepage about `section.homepage-about.spad` — `.about-text` with
    `div.section-title` `h2` "“Customers love our <br>facilities”"
    (`#242424`, line-height 56px) + paragraph + peach `primary-btn` "Make a
    Reservation"; then 3 stacked `.about-img` photos (`home-about-1..3.jpg`,
    `min-width: 100%; margin-bottom: 30px`).
  - footer `footer.footer-section` — `background: #242424; padding-top:
72px`; `row` of three `col-lg-4 .footer-item`:
    1. `div.footer-logo` (image; recreate as text) + lorem paragraph;
    2. `h5` "Newsletter" (`#F9AD81`, 500, margin-bottom 57px) +
       `form.newslatter-form` — input `height: 50px; background: #676767;
border: none; color: #fff; padding-left: 25px` (placeholder white
       italic) + peach `button` "Subscribe" (absolute right);
    3. `h5` "Contact Info" (`#F9AD81`) + `ul` of 2 `li` (address icon +
       "1525 Boring Lane,<br>Los Angeles, CA"; phone icon + "+1
       (603)535-4592").
    - a `col-lg-12` link row (Home · About · Rooms · Facilities · News ·
      Contact) and `div.copyright` — `background: #171717; padding: 24px;
margin-top: 30px` — centered "Copyright © All rights reserved | This
      template is made with by Colorlib" (reword for Riviera, no ColorLib
      credit).
- **Inner pages:** the original ships separate pages (about-us.html,
  rooms.html, services.html, blog.html, contact.html) and the nav targets
  them — NOT required; recreate the single index page only (nav links can be
  dead anchors `#` or scroll targets). The Pages dropdown may be kept as a
  static dropdown (About Us / Rooms / Services).

## Requirements

### Requirement: Dark header with text logo, nav and reservation CTA

The system SHALL render an absolute dark charcoal header with a text logo, a
right-floated reservation button and a full nav bar with a Pages dropdown.

#### Scenario: Desktop header

- **GIVEN** the Riviera app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL have the dark charcoal `#353535` background and
  span the full width at the very top (absolute, z-index above the hero)
- **AND** the left side SHALL show the brand as styled text: "Riviera" over
  a small "HOTEL & SPA" tagline (recreated text — never a copied image
  asset)
- **AND** the right side SHALL list Home (active) · About · Rooms · Pages ·
  News · Contact as white uppercase links with ~50px gaps, the active item
  in peach `#F9AD81` with a peach underline
- **AND** a peach `#F9AD81` "Make a Reservation" button (16px, padding 18px
  38px, square corners) SHALL sit right of the menu

#### Scenario: Pages dropdown and mobile menu

- **GIVEN** the nav is rendered
- **WHEN** "Pages" is hovered
- **THEN** a white 220px dropdown SHALL open listing About Us, Rooms and
  Services (`#242424` links; hover row fills peach with white text)
- **AND** on a viewport narrower than the desktop breakpoint a hamburger
  button SHALL open a stacked menu panel with `aria-expanded` reflecting the
  open state

### Requirement: Hero with centered headline

The system SHALL render a full-height hero photo with a huge centered white
headline.

#### Scenario: Hero render

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL show a full-width background photo (pool/resort subject,
  `picsum.photos/seed/riviera-1/...`) at ~938px height
- **AND** the centered headline "A Luxury Stay" SHALL be white, ~96px,
  weight 600, vertically placed in the lower half of the hero (the original
  pads the hero top by ~396px)

### Requirement: Check Availability booking card

The system SHALL render a dark translucent booking card overlapping the
hero's bottom edge with date, guest-count and room-type fields.

#### Scenario: Booking form

- **GIVEN** the search-filter section is rendered
- **WHEN** the hero loads
- **THEN** a card SHALL overlap the hero bottom (the original pulls it up by
  ~362px) with a black overlay at 47% opacity behind white content
- **AND** its heading SHALL read "Check Availability" in white
- **AND** it SHALL contain From and To date fields (label + input with a
  calendar icon; input styled 10px uppercase `#242424` at 50% opacity over a
  `1px solid #888888` bottom border)
- **AND** Adults and Children steppers SHALL each show a `-`/`+` control
  around a number input
- **AND** a Room dropdown SHALL list "Master suite · Double Room · Single
  Room · Special Room"
- **AND** a peach "Go" button SHALL submit the form (square, 18px white
  text, padding 43px 27px)
- **AND** submitting with invalid/empty values SHALL show a validation
  error; a valid submission SHALL show a success confirmation

### Requirement: Two-column intro section

The system SHALL render an intro section with an eyebrow-titled heading
column and a copy + CTA column.

#### Scenario: Intro layout

- **GIVEN** the intro section is rendered
- **WHEN** it loads
- **THEN** the left column SHALL show the eyebrow "a memorable holliday"
  (12px uppercase, letter-spacing 4px, `#868686`) above the 48px 600
  `#181717` heading "A great stay in a lovely hotel." and a body paragraph
  (`#9d9d9d`)
- **AND** the right column SHALL show a body paragraph and a peach
  `#F9AD81` "Make a Reservation" button (16px, padding 18px 38px, square)

### Requirement: Facilities photo panels

The system SHALL render two full-width photo panels describing hotel
facilities, each with a title, subtitle, icon feature list and outline CTA.

#### Scenario: Facility panels

- **GIVEN** the facilities section is rendered
- **WHEN** it loads
- **THEN** two full-width panels (~796px tall) SHALL stack, each with a
  background photo
- **AND** the first SHALL be titled "Luxury Suite Room" (white 48px 500)
  with the small uppercase subtitle "From $399" and an icon feature row
  (Smart TV · High Wi-fii · AC · Parking · Pool — white icon + white label
  per feature)
- **AND** the second SHALL be titled "Infinity Pool" with the subtitle "For
  all our guests" and its image placed on the right side
- **AND** each SHALL carry a white-outline "Make a Reservation" button
  (transparent background, 3px white border, square corners)

### Requirement: Guestbook testimonials

The system SHALL render a testimonials section titled "Guestbook" with two
dated quote cards.

#### Scenario: Testimonial cards

- **GIVEN** the testimonial section is rendered
- **WHEN** it loads
- **THEN** the section title SHALL read "Guestbook" at 60px `#242424`
- **AND** two cards SHALL be laid out side by side (stacking on mobile),
  each with: a date row "02 / 02 / 2019" (11px, letter-spacing 1.2px,
  `#242424` at 50% opacity), a 600-weight `#242424` quote ("We loved our
  stay" / "I will come back again"), a star-rating row (orange `#ed8a19`),
  a lorem paragraph, and an author row with a 54px circular avatar, the
  name in peach `#F9AD81` ("JOHN DOE" / "Maria Smith") and the location
  "Madrid" in 12px `#242424`

### Requirement: Video section with play button

The system SHALL render a video section with a full-bleed photo and a white
circular play button.

#### Scenario: Video render

- **GIVEN** the video section is rendered
- **WHEN** it loads
- **THEN** a wide background photo (~534px) SHALL sit under a second photo
  block (~703px) pulled up ~320px to overlap it
- **AND** a 95px white circular play button with a peach play icon SHALL be
  centered on the overlap and be a focusable link (opens the original
  trailer URL or a placeholder)

### Requirement: Homepage about block

The system SHALL render an about block with a quote heading, copy, CTA and a
stack of three photos.

#### Scenario: About layout

- **GIVEN** the homepage-about section is rendered
- **WHEN** it loads
- **THEN** the text column SHALL show the heading "“Customers love our
  facilities”" (`#242424`, line-height 56px), a body paragraph and a peach
  "Make a Reservation" button
- **AND** three full-width photos SHALL stack below it (30px gaps)

### Requirement: Dark footer with newsletter and contact info

The system SHALL render a dark footer with three widget columns, a link row
and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** it SHALL have the dark `#242424` background with ~72px top
  padding and SHALL show three columns: (1) the text logo + about paragraph;
  (2) "Newsletter" heading in peach `#F9AD81` with an email input
  (`height: 50px; background: #676767; white text; italic white
placeholder`) and a peach "Subscribe" button docked to its right edge;
  (3) "Contact Info" heading in peach `#F9AD81` with an address line "1525
  Boring Lane, Los Angeles, CA" and a phone line "+1 (603)535-4592", each
  with an icon
- **AND** the email input SHALL validate: submitting an invalid/empty email
  SHALL show an error; a valid email SHALL show a success confirmation and
  reset the field

#### Scenario: Link row and copyright bar

- **GIVEN** the footer's lower area loads
- **THEN** a link row SHALL list Home · About · Rooms · Facilities · News ·
  Contact
- **AND** the copyright bar SHALL have the `#171717` background (~24px
  padding, ~30px margin-top) and read "© 2026 Riviera. All rights
  reserved." with a reworded "Made with ❤" credit line (no ColorLib credit)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Riviera app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the
  hero + booking card + intro + facilities + testimonials + video + about
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Riviera — Hotel & Spa Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (nav
  collapses to a hamburger menu, the booking card fields stack, testimonial
  and footer columns stack to one per row, facilities panels keep their
  proportions)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/riviera`
      (`scripts/verify-app.sh riviera` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: header (dark `#353535` bar, text logo "Riviera /
      HOTEL & SPA", white uppercase links with peach active state, peach
      "Make a Reservation" button), hero (pool photo + 96px white "A Luxury
      Stay"), booking card (dark 47% overlay, From/To dates, Adults/Children
      steppers, Room dropdown, peach "Go"), intro (eyebrow + 48px heading +
      copy + CTA, no orange border per the live preview), facilities (two
      796px photo panels: "Luxury Suite Room" + icon list, "Infinity Pool"
      flipped, white outline CTAs), Guestbook (2 dated quote cards, stars,
      circular avatars, peach names), video (white circular play button over
      the photo overlap), about ("Customers love our facilities" + 3 stacked
      photos), footer (`#242424` about + newsletter + contact info columns,
      link row, `#171717` copyright) match the Europa preview 1:1.
- [ ] Design tokens in `@theme`: primary peach `#F9AD81`, rating-star
      `#ed8a19`, header `#353535`, headings `#181717` / `#242424`, body
      `#9d9d9d`, date meta `#242424` 50% opacity, footer `#242424`,
      copyright `#171717`, newsletter input `#676767`; Montserrat Alternates
      via Google Fonts `<link>` in `index.html`.
- [ ] Buttons/links: primary CTA = `#F9AD81` 16px padding 18px 38px square;
      facilities CTA = transparent with 3px white border; "Go" = peach
      18px padding 43px 27px; newsletter button = peach docked right of the
      input; nav active = peach with underline; Pages dropdown = white 220px
      with peach hover rows.
- [ ] Placeholder images use `picsum.photos/seed/riviera-<n>/<w>/<h>` (hero,
      facility panels, video backgrounds, about photos, testimonial
      avatars); icons from lucide-react (calendar, minus, plus, chevron-down,
      star, play, menu, x, map-pin, phone) — note lucide-react has no brand
      icons, use inline SVG if socials are needed; no ColorLib assets copied
      (logo recreated as styled text).
- [ ] PR description states source template (ColorLib "Europa"), preview
      URL (https://preview.colorlib.com/theme/europa/), design tokens, and
      what differs (name, placeholders, paraphrased copy, single index page
      only — inner pages not recreated).
