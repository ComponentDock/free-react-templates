# Template: Stayhaven (Hotel / Travel)

## Purpose

Stayhaven is a single-page hotel & travel website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Redplanet" design (see TEMPLATES.md — listed under Bootstrap,
line 487, first unchecked item whose prep did not exist on main; the same slug
also appears as duplicates at lines 1922 and 2353 in the Hotel and One Page
sections), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is an elegant hotel landing page: a dark transparent navbar
("Red Planet" brand with the first word in red, links Home, About, Team,
Rooms, Menus, Events, Contact + a "Get Started" pill) over a full-viewport
hero photo with the centered white serif headline "Stay With Us & Relax" and a
mouse scroll indicator, a floating white booking bar (Check In / Check Out
date fields with calendar icons, Adults / Children selects, "Check Availabilty"
[sic] red block button), a light-grey "Hey there!" about split (copy + "Watch
the video" red button + photo), a "Leadership" team carousel (Will Smith —
President, Claire Williams — Business Manager, Jane Johnson — Marketing
Director), a "Rooms & Suites" 3-card grid (Single $90, Family $120,
Presidential $250 per night), a light-grey "Photos" slider, a dark
background-image "Our Restaurant Menu" section with Food / Desserts / Drinks
tabs (6 items each, red price + white title + dimmed description), a "People
Says" testimonial slider (Jean Smith, John Doe), an "Events" blog-card section
(3 posts with date, title, excerpt), a "Contact Us" section (Address / Phone /
Email), a full-width background-image CTA band ("A Best Place To Stay. Reserve
Now!" + outline "Reserve Now" button that opens a large reservation modal with
Name, Phone, Email, dates, Adults, Children), and a dark footer (two link
columns, contact info, newsletter signup with underline email field, social
icons, copyright bar). Stayhaven recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Redplanet" — free hotel/onepage website template
  (source: https://colorlib.com/wp/template/redplanet/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/redplanet/`
  (HTTP 200, ~50KB) + stylesheet `css/style.css` (25.9KB) plus
  `bootstrap.min.css` (btn/text tokens), `owl.carousel.min.css` (hero/team/
  testimonial sliders), `aos.css` (fade-up scroll reveals), `fancybox.min.css`
  (photo/video lightbox), `bootstrap-datepicker.css` + `jquery.timepicker.css`
  (date/time fields), `ionicons` + `font-awesome` icon fonts. The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`redplanet-free-template.jpg`, AVIF 1200×946) confirms the visual design:
  "Red Planet." logo top-left (first word in red), transparent dark nav over
  the hero, full-width hero photo of a woman relaxing in bed (soft warm light)
  with centered white serif headline "Stay With Us & Relax" and a mouse scroll
  indicator, a white floating booking bar overlapping the hero bottom edge
  (Check In / Check Out / Adults / Children + orange-red "Check Availability"
  button), then a light-grey "Hey there!" section (text left, landscape photo
  right). Palette: white/light-grey sections (#f2f4fb), near-black headings,
  vivid red #ff0000 primary with darker #cc0000 hover, dark navy/black footer
  and dark overlays over photos.
- **Section order (1:1):**
  1. `nav.navbar.navbar-expand-lg.navbar-dark.pb_navbar.pb_scrolled-light`
     (fixed/transparent over the hero, switches to a light scrolled variant
     on scroll): `a.navbar-brand` — `span.text-danger` "Red" + "Planet"
     (brand first word in the red primary color, Playfair-ish serif); right
     `ul.navbar-nav`: **Home** (#section-home), **About** (#section-about),
     **Team** (#section-team), **Rooms** (#section-rooms), **Menus**
     (#section-menus), **Events** (#section-events), **Contact**
     (#section-contact) + `li.cta-btn` "Get Started" (rounded px-4 span,
     pill-ish highlight). Mobile: `.site-menu-toggle` 3-line hamburger →
     Bootstrap collapse offcanvas nav.
  2. `section.site-hero.overlay` (`id="section-home"`, bg
     `images/hero_5.jpg`, cover, stellar parallax 0.5, height 100vh /
     min-height 700px, `:before` overlay rgba(0,0,0,0.45)):
     - `div.site-hero-inner` centered: `h1.heading` white "Stay With Us &
       Relax" (Playfair Display bold).
     - `a.mouse.smoothscroll` scroll indicator: `div.mouse-icon` with
       `span.mouse-wheel` (animated mouse shape).
     - Booking bar (white card, overlaps hero bottom / sits above the next
       section): `<form>` with `div.row`: **Check In** (`input#checkin_date`
       with calendar icon in `.field-icon-wrap`), **Check Out**
       (`input#checkout_date` + calendar icon), **Adults** (`select`:
       1, 2, 3, 4+), **Children** (`select`: 1, 2, 3, 4+), and
       `button.btn.btn-primary.btn-block.text-white` "Check Availabilty"
       (original typo — recreate as "Check Availability").
  3. `section.py-5.bg-light` (`id="section-about"`): `h2.heading` "Hey
     there!" (Playfair bold) + lorem paragraph(s) + `a.btn.btn-primary...
text-uppercase.letter-spacing-1` "Watch the video" (vimeo fancybox
     link) + photo (`images/hero_4.jpg`) — split layout, text left / image
     right.
  4. `div.container.section` (`id="section-team"`): centered `h2.heading`
     "Leadership" + 3-column team carousel (owl): 3 members, each with photo
     (`images/person_1.jpg` / `person_2.jpg` / `person_3.jpg`), `h2` name —
     **Will Smith** / **Claire Williams** / **Jane Johnson** —, role line —
     **President** / **Business Manager** / **Marketing Director** —, and a
     quote (lorem "Even the all-powerful Pointing...").
  5. `section.section` (`id="section-rooms"`): centered `h2.heading` "Rooms
     & Suites" + `div.row` of 3 `a.room` cards (col-lg-4, data-aos fade-up):
     `figure.img-wrap` photo (`images/img_1.jpg` / `img_2.jpg` / `img_3.jpg`)
     - `div.p-3.text-center.room-info`: `h2` title — **Single Room** /
       **Family Room** / **Presidential Room** — + `span.text-uppercase.
letter-spacing-1` price — **90$ / per night** / **120$ / per night** /
       **250$ / per night**.
  6. `section.section.slider-section.bg-light`: centered `h2.heading`
     "Photos" + fancybox image slider (7 photos `images/slider-1.jpg` …
     `slider-7.jpg`, each with a caption).
  7. `section.section.bg-image.overlay` (`id="section-menus"`, bg
     `images/hero_3.jpg`, `:before` overlay rgba(0,0,0,0.6), white text):
     - Centered `h2.heading.text-white` "Our Restaurant Menu" + white lorem
       paragraph.
     - `div.food-menu-tabs`: `ul.nav.nav-tabs` — **Food** (active,
       `#mains`), **Desserts** (`#desserts`), **Drinks** (`#drinks`) —
       uppercase letter-spaced tab links; `div.tab-content.py-5` with three
       `.tab-pane` panels, each a 2-column grid of 6 `div.food-menu.mb-5`
       items: `span.d-block.text-primary.h4` price (e.g. `$20.00`,
       `$35.00`), `h3.text-white` title link (e.g. **Murgh Tikka Masala**,
       **Fish Moilee**, **Safed Gosht**, **French Toast Combo**, **Vegie
       Omelet**, **Chorizo & Egg Omelet**; desserts: **Banana Split**,
       **Sticky Toffee Pudding**, **Pecan**, **Apple Strudel**, **Pancakes**,
       **Ice Cream Sundae**; drinks: **Spring Water**, **Coke, Diet Coke,
       Coke Zero**, **Orange Fanta**, **Lemonade, Lemon Squash**, **Sparkling
       Mineral Water**, **Lemon, Lime & Bitters**), + `p.text-white.
text-opacity-7` lorem description.
  8. `section.section.testimonial-section`: centered `h2.heading` "People
     Says" + testimonial slider (owl): 2 quotes — "A small river named Duden
     flows by their place..." — Jean Smith; "Even the all-powerful Pointing
     has no control about the blind texts..." — John Doe (each with an
     em-dash author attribution).
  9. `section.section.blog-post-entry.bg-light`: centered `h2.heading`
     "Events" + 3 `div.media.media-custom` post cards (col-lg-4, data-aos):
     photo (`images/img_1.jpg` / `img_2.jpg` / `img_3.jpg`), `span.meta-post`
     date "February 26, 2018", `h2` title link — **Travel Hacks to Make Your
     Flight More Comfortable** / **5 Job Types That Aallow [sic] You To Earn
     As You Travel The World** / **30 Great Ideas On Gifts For Travelers** —
     - lorem excerpt.
  10. `section.section.contact-section`: centered `h2.heading` "Contact Us"
      - contact info blocks with red icons (ionicons): **Address:** 98 West
        21th Street, Suite 721 New York NY 10016 · **Phone:** (+1) 234 4567
        8910 · **Email:** info@yourdomain.com.
  11. `section.section.bg-image.overlay` (CTA band, bg `images/hero_4.jpg`,
      overlay rgba(0,0,0,0.6)): `div.row.align-items-center`: left
      `h2.text-white.font-weight-bold` "A Best Place To Stay. Reserve Now!";
      right `a.btn.btn-outline-white-primary.py-3.text-white.px-5` "Reserve
      Now" (2px white outline pill) with `data-target="#reservation-form"`.
  12. `footer.section.footer-section` (dark/navy, `div.container`):
      - `div.row.mb-4` with 4 `col-md-3` columns: **links col 1** (About Us,
        Terms & Conditions, Privacy Policy, Rooms); **links col 2** (The
        Rooms & Suites, About Us, Contact Us, Restaurant); **contact-info**
        (Address / Phone / Email rows, red `text-primary` ionicons); **
        newsletter**: "Sign up for our newsletter" + `form.footer-newsletter`
        (underline email input, white text, italic placeholder, paper-plane
        submit button — `button.btn` + `fa-paper-plane`).
      - `div.row.pt-5` bottom bar: copyright "All rights reserved | This
        template is made with ❤ by ..." → repo-standard credit; right
        `p.social`: tripadvisor, facebook, twitter, linkedin, vimeo icons.
  13. Modal `#reservation-form` (large, opened by the CTA "Reserve Now"
      button): `h2` "Reservation" + white form (`form.bg-white.p-4`) with
      fields — **Name**, **Phone**, **Email**, **Date Check In** (date),
      **Date Check Out** (date), **Adults** (select 1, 2, 3, 4+), **Children**
      (select 1, 2, 3, 4+) — + submit button.
- **Design tokens extracted from `css/style.css` + `bootstrap.min.css`:**
  - Fonts: **Playfair Display** (headings: `h1.heading`, `h2.heading`,
    room card titles, brand — `font-family: "Playfair Display", times,
serif`, bold) + **Roboto** (body/UI: `font-family: "Roboto", arial,
sans-serif`). Load both via Google Fonts `<link>` in index.html.
  - Primary red: **#ff0000** — `.btn-primary` bg, `.text-primary` /
    `.text-danger` (brand first word, menu prices, contact/footer icons),
    focus states. Hover/darker red **#cc0000**.
  - Light section background: **#f2f4fb** (`bg-light`: about, photos,
    events).
  - Dark: **#000** / near-black footer + headings; dark overlays —
    hero rgba(0,0,0,0.45), bg-image sections rgba(0,0,0,0.6).
  - Body text grey #6c757d / #a6a6a6; menu descriptions white at ~70%
    opacity (`text-opacity-7`).
  - Buttons `.btn`: pill — border-radius **50px**, padding 10px 30px
    (px-30); `.btn-primary` solid red, white text; `.btn-outline-white-primary`
    2px solid white border, transparent bg, white text (hero "Reserve Now",
    CTA "Reserve Now").
  - Booking/hero form: white card, `.form-control` flat (no shadow, radius
    0), labels `font-weight-bold text-black`, calendar/arrow icons inside
    `.field-icon-wrap`.
  - Newsletter input: transparent bg, no border except bottom 1px
    rgba(255,255,255,0.2), white text, italic placeholder
    rgba(255,255,255,0.2), radius 0.
  - Uppercase letter-spaced labels: room prices (`letter-spacing-1`), nav/
    menu tabs (`letter-spacing-2`), "Watch the video" button.
  - Hero: 100vh (min-height 700px), centered bold white serif headline,
    mouse scroll indicator.
  - Spacing: `.section` ~3.5em 0 (7em ≥768px); rooms/team grids col-md-6 /
    col-lg-4; menu tabs `py-5` content.
- **Recreation decisions:** navbar = transparent dark over hero → light
  scrolled variant, brand "StayHaven" (first word in the red primary),
  anchor nav links (Home, About, Team, Rooms, Menus, Events, Contact) +
  "Get Started" pill, mobile hamburger collapse; hero = full-viewport photo
  with dark overlay, centered white Playfair headline "Stay With Us & Relax",
  mouse scroll indicator; booking bar = white floating card with Check In /
  Check Out date inputs (calendar icons), Adults / Children selects, red
  block "Check Availability" button; about = light-grey split (copy +
  "Watch the video" red uppercase button + photo); team = "Leadership"
  carousel with 3 members (photo, name, role, quote); rooms = 3 centered
  cards (photo, title, uppercase price "$90 / per night" etc.); photos =
  light-grey image slider (7 photos, captions); menus = dark bg-image
  section, white heading + Food / Desserts / Drinks tabs, 6 items per panel
  (red price, white title, dimmed lorem); testimonials = "People Says"
  slider with quote + author; events = 3 blog cards (photo, date, title,
  excerpt); contact = centered "Contact Us" with Address / Phone / Email;
  CTA = bg-image band "A Best Place To Stay. Reserve Now!" + outline "Reserve
  Now" button opening the reservation modal (Name, Phone, Email, Check In,
  Check Out, Adults, Children + submit); footer = dark, 2 link columns +
  contact info + newsletter signup (underline email field + paper-plane
  button) + social icons + repo-standard bottom credit; images
  picsum-seeded (`picsum.photos/seed/stayhaven-N/w/h`); Google Fonts
  Playfair Display + Roboto via `<link>`; icons via lucide-react plus inline
  SVG brand icons (Facebook, Twitter, LinkedIn, Vimeo, Tripadvisor) since
  lucide-react removed brand icons.

Stayhaven lives in `apps/stayhaven` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent-over-hero navbar with a brand, anchor
navigation links, a "Get Started" pill, and a mobile hamburger collapse.

#### Scenario: Navbar content

- **GIVEN** the Stayhaven page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site brand "StayHaven" with the first word in the
  red primary color
- **AND** it SHALL show the nav links Home, About, Team, Rooms, Menus, Events,
  and Contact
- **AND** it SHALL show a "Get Started" pill-style button

#### Scenario: Mobile menu

- **GIVEN** the navbar is displayed on a narrow viewport
- **WHEN** the user activates the hamburger control
- **THEN** the nav links SHALL be revealed in a collapsed menu
- **AND** activating the control again SHALL hide the menu

### Requirement: Hero

The system SHALL render a full-viewport hero with a background photo, dark
overlay, centered white headline, and a mouse scroll indicator.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-viewport background photo with a dark overlay
- **AND** it SHALL show the centered white headline "Stay With Us & Relax"
- **AND** it SHALL show a mouse scroll indicator at the bottom

### Requirement: Booking bar

The system SHALL render a white booking form with check-in/check-out date
fields, adults/children selects, and a red availability button.

#### Scenario: Booking form fields

- **GIVEN** the page is rendered
- **WHEN** the booking bar is displayed
- **THEN** it SHALL show a Check In field with a calendar icon
- **AND** it SHALL show a Check Out field with a calendar icon
- **AND** it SHALL show an Adults select with options 1, 2, 3, and 4+
- **AND** it SHALL show a Children select with options 1, 2, 3, and 4+
- **AND** it SHALL show a red "Check Availability" button

### Requirement: About section

The system SHALL render a light-grey split about section with copy, a
"Watch the video" button, and a photo.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "Hey there!" with a paragraph of copy
- **AND** it SHALL show a red uppercase "Watch the video" button
- **AND** it SHALL show a photo beside the text

### Requirement: Team carousel

The system SHALL render a "Leadership" section with three team members, each
with a photo, name, role, and quote.

#### Scenario: Team members

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the centered heading "Leadership"
- **AND** it SHALL show team members Will Smith (President), Claire Williams
  (Business Manager), and Jane Johnson (Marketing Director)
- **AND** each member SHALL show a photo, their name, role, and a quote

### Requirement: Rooms grid

The system SHALL render a "Rooms & Suites" section with three room cards.

#### Scenario: Room cards

- **GIVEN** the page is rendered
- **WHEN** the rooms section is displayed
- **THEN** it SHALL show the centered heading "Rooms & Suites"
- **AND** it SHALL show cards for Single Room, Family Room, and Presidential
  Room
- **AND** each card SHALL show a photo, the room name, and an uppercase price
  line (e.g. "$90 / per night", "$120 / per night", "$250 / per night")

### Requirement: Photos slider

The system SHALL render a light-grey "Photos" section with an image slider.

#### Scenario: Photo slider

- **GIVEN** the page is rendered
- **WHEN** the photos section is displayed
- **THEN** it SHALL show the centered heading "Photos"
- **AND** it SHALL show a slider of placeholder photos with captions

### Requirement: Restaurant menu tabs

The system SHALL render a dark background-image menu section with Food,
Desserts, and Drinks tabs, each listing six items with a price, title, and
description.

#### Scenario: Menu tabs and items

- **GIVEN** the page is rendered
- **WHEN** the menu section is displayed
- **THEN** it SHALL show the white centered heading "Our Restaurant Menu" on
  a dark background image with an overlay
- **AND** it SHALL show the tabs Food, Desserts, and Drinks
- **AND** the Food tab SHALL be active by default with six items (e.g. Murgh
  Tikka Masala, Fish Moilee, Safed Gosht)
- **AND** each item SHALL show a red price, a white title, and a dimmed
  description

#### Scenario: Tab switching

- **GIVEN** the menu section is displayed
- **WHEN** the user activates the Desserts or Drinks tab
- **THEN** the visible items SHALL switch to that tab's six items (desserts
  e.g. Banana Split, Sticky Toffee Pudding, Pecan; drinks e.g. Spring Water,
  Orange Fanta, Sparkling Mineral Water)

### Requirement: Testimonials

The system SHALL render a "People Says" section with a testimonial slider.

#### Scenario: Testimonial quotes

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the centered heading "People Says"
- **AND** it SHALL show at least two quotes with author attributions (e.g.
  Jean Smith, John Doe)

### Requirement: Events

The system SHALL render an "Events" section with three blog-style post cards.

#### Scenario: Event cards

- **GIVEN** the page is rendered
- **WHEN** the events section is displayed
- **THEN** it SHALL show the centered heading "Events"
- **AND** it SHALL show three cards, each with a photo, a date (e.g.
  "February 26, 2018"), a title, and an excerpt

### Requirement: Contact section

The system SHALL render a "Contact Us" section with address, phone, and email
info blocks.

#### Scenario: Contact info

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the centered heading "Contact Us"
- **AND** it SHALL show an Address block, a Phone block, and an Email block,
  each with an icon

### Requirement: CTA band and reservation modal

The system SHALL render a full-width background-image CTA band with a "Reserve
Now" button that opens a reservation modal form.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show the white headline "A Best Place To Stay. Reserve
  Now!" over a background image with a dark overlay
- **AND** it SHALL show an outline-white "Reserve Now" button

#### Scenario: Reservation modal

- **GIVEN** the CTA band is displayed
- **WHEN** the user activates the "Reserve Now" button
- **THEN** a modal SHALL open titled "Reservation"
- **AND** the modal SHALL contain fields Name, Phone, Email, Date Check In,
  Date Check Out, Adults, and Children plus a submit button
- **AND** activating a close control SHALL close the modal

### Requirement: Footer

The system SHALL render a dark footer with two link columns, contact info, a
newsletter signup, social icons, and a bottom bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a link column with About Us, Terms & Conditions,
  Privacy Policy, and Rooms
- **AND** it SHALL show a link column with The Rooms & Suites, About Us,
  Contact Us, and Restaurant
- **AND** it SHALL show Address, Phone, and Email rows with red icons
- **AND** it SHALL show a "Sign up for our newsletter" form with an email
  input and a paper-plane submit button
- **AND** it SHALL show social icons (tripadvisor, facebook, twitter,
  linkedin, vimeo)
- **AND** the bottom bar SHALL carry the repo-standard footer credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Stayhaven app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar, hero, booking bar, about, team,
  rooms, photos, menus, testimonials, events, contact, CTA band, reservation
  modal, and footer inside the main landmark in the original's order
- **AND** the document title SHALL be "Stayhaven — Hotel & Travel"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- stayhaven` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (navbar → hero → booking bar →
      about → team → rooms → photos → menus → testimonials → events →
      contact → CTA band → footer).
- [ ] Design tokens applied: primary red #ff0000 (buttons, brand first word,
      menu prices, contact/footer icons) with #cc0000 hover, light bg #f2f4fb,
      dark footer/overlays (hero rgba(0,0,0,0.45), bg-image rgba(0,0,0,0.6)),
      Playfair Display headings + Roboto body, pill buttons (radius 50px,
      padding 10px 30px), uppercase letter-spaced price/label lines.
- [ ] Navbar switches from dark/transparent over the hero to a light scrolled
      variant and has the mobile hamburger collapse.
- [ ] Booking bar floats as a white card over the hero bottom with date fields
      (calendar icons), Adults/Children selects, and a red block
      "Check Availability" button.
- [ ] Restaurant menu uses dark bg image + Food/Desserts/Drinks tabs with six
      items per tab (red price, white title, dimmed description).
- [ ] CTA "Reserve Now" opens the reservation modal (Name, Phone, Email,
      dates, Adults, Children, submit).
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Redplanet), preview URL, tokens,
      and renames.
