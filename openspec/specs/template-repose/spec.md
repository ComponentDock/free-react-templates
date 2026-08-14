# Template: Repose (Hotel / Resort Booking)

## Purpose

Repose is a single-page luxury hotel / resort booking website template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Unwind" design (see TEMPLATES.md — listed in the Bootstrap 5
(89) category at line 634, with a duplicate row in the Hotel (38) category at
line 1935; both rows `- [ ]`), built under a DIFFERENT name — **Repose** (a
rest / relaxation-themed word; single lowercase word, no collision with
`apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified
2026-08-14) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is an elegant luxury-hotel landing page: a transparent navbar
over a full-height hero photo ("Most Relaxing Place" in a large serif over a
seaside terrace), a dark overlapping booking bar (Check-In / Check-Out /
Rooms / Guests + gold "Check Availability"), an about split with two
image cards ("Cozy Room", "Special Offers"), a 6-icon services row ("Explore
Our Hotel Services"), a photo CTA band ("Find the Best Hotel in Your Next
Vacation"), a "Featured Rooms" 3-card grid on a light band, a video section
("Take A Tour"), a "Restaurant & Bar" menu section with 8 pricing entries,
a "Happy Guests" testimonial carousel, a dark stats counter band (guests /
rooms / staff / destinations), a "Recent Blog" 4-card grid, a 5-image
gallery strip, and a dark 4-column footer. Repose recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

> NOTE (prep-stream 2026-08-14): the official preview
> `https://preview.colorlib.com/theme/unwind/` is LIVE — fetched HTTP 200
> (~44.4 KB HTML + `css/style.css` ~79.4 KB, curl-verified) and analyzed for
> this prep. The index page is a one-page layout (the nav also links to
> about.html / rooms.html / resto-bar.html / blog.html / contact.html
> sub-pages — see Design reference; the recreation is a single-page landing,
> so those links become anchor/placeholder links). The TEMPLATES.md
> screenshot (`unwind-free-template.jpg`, 1200×946) was also viewed in a
> browser and matches the live render (seaside-terrace hero with serif
> headline, dark booking bar, gold buttons, light content bands).

## Design reference (replication findings)

- **Original:** ColorLib "Unwind" — free HTML5 hotel/resort booking template
  (source: https://colorlib.com/wp/template/unwind/). The recreation brands
  itself **Repose** but keeps the same section structure, heading copy
  kinds, and photo set.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/unwind/` (HTTP 200, ~44.4 KB HTML +
  `css/style.css` ~79.4 KB; assets under `images/` — `bg_1.jpg` (hero +
  intro CTA), `bg_2.jpg` (video), `f-services.jpg`,
  `f-services-2.jpg`, `room-1..3.jpg`, `resto-bar.jpg`, `menu-1..8.jpg`,
  `person_1..3.jpg`, `image_1..4.jpg`, `gallery-1..5.jpg`). Page structure
  (1:1 order):
  1. **Navbar** — `nav.navbar.ftco-navbar-light` (transparent, absolute,
     top 20px; `.scrolled` variant gets a dark bg on scroll): brand
     `a.navbar-brand` **"Unwind <small>Hotel Booking</small>"** (serif,
     brand-color icon); `ul.navbar-nav.ms-auto` links **Home · About ·
     Rooms · Resto & Bar · Blog · Contact** (uppercase, white on hero,
     gold hover); mobile `button.navbar-toggler` with hamburger + "Menu"
     label. Sticky on scroll.
  2. **Hero** — `section.hero-wrap` (100vh, min-height 100%, bg image
     `bg_1.jpg` fixed-attachment cover, `.overlay` dark) > centered
     `div.slider-text`: `span.subheading` **"Enjoy Your Wonderful Holidays
     With A Great Luxury Experience!"** (uppercase 13px 700 white,
     letter-spacing 1px) · `h1` **"Most Relaxing Place"** (white 80px 700,
     lh 1.2, serif; 40px ≤767px) · 2 buttons: `a.btn.btn-primary p-4 py-3`
     **"Take A Tour"** (solid gold `#c5a880`, uppercase 12px 700, ls 1px,
     radius 0) + `a.btn.btn-white.btn-outline-white p-4 py-3` **"Learn
     More"** (white outline, transparent fill), each with a forward-arrow
     icon (ionicons `ion-ios-arrow-round-forward` → lucide ArrowRight).
  3. **Booking bar** — `section.ftco-section.ftco-booking` (margin-top
     -80px, overlapping the hero) > `form.booking-form` (bg `#222222`,
     shadow `0px 5px 25px -2px rgba(0,0,0,0.06)`): 5 columns in a
     `row g-0` — each `div.form-wrap.form-group` (border-left
     1px rgba(0,0,0,0.05) divider, except the first):
     - **Check-In** — `label` (uppercase 12px 700 white ls 1px) +
       `div.form-field` with calendar icon (fontawesome `fa-calendar` →
       lucide Calendar) + text input `placeholder="Check-In Date"`
       (transparent bg, `rgba(255,255,255,0.4)` text, radius 0).
     - **Check-Out** — same with placeholder **"Check-Out Date"**.
     - **Rooms** — `select.form-control` (chevron-down icon): **Suite ·
       Family Room · Classic Room · Superior Room · Luxury Room**.
     - **Guests** — `select.form-control`: **1 Person · 2 Person · 3
       Person · 4 Person · 5 Person · 6-9 Person · 10+ Person**.
     - **Check Availability** — `a.btn.btn-primary form-control`
       (solid gold `#c5a880`, uppercase 16px 700, full height, radius 0).
  4. **About** — `section.ftco-section.ftco-about-section` (white,
     `container-xl`): 2-col split — LEFT `col-md-6` with two stacked
     feature cards (2 × `col-md-6`):
     - **Cozy Room** — `div.f-services.d-md-flex.flex-md-column-reverse`:
       image `f-services.jpg` (top on md+, bottom on mobile) + `div.text
p-4 text-center`: pillow icon (flaticon → lucide BedDouble) + `h3`
       "Cozy Room" + lorem paragraph.
     - **Special Offers** — `div.f-services`: image `f-services-2.jpg`
       - `div.text p-4 text-center`: gift/tag icon (flaticon-special →
         lucide Gift) + `h3` "Special Offers" + lorem paragraph.
     - RIGHT `col-md-6.heading-section d-flex align-items-center`:
       `span.subheading` **"About Us"** (gold `#c5a880` uppercase 700
       ls 2px) · `h2.mb-4` **"Unwind A Hotel Booking Agency"** (64px 400
       serif; brand as **"Repose A Hotel Booking Agency"**) · paragraph ·
       `a.btn.btn-primary py-3 px-4` **"Book Your Room Now"**.
  5. **Services** — `section.ftco-section` (white): centered
     `div.heading-section.text-center.mb-5` — `span.subheading`
     **"Unwind Services"** + `h2.mb-4` **"Explore Our Hotel Services"**;
     row of 6 × `col-md-3 col-xl-2` `a.services` (icon + `h2` label,
     hover lift): **Free Wifi** (flaticon-wifi-signal → lucide Wifi) ·
     **Easy Booking** (flaticon-online-booking → lucide CalendarCheck) ·
     **Restaurant** (flaticon-cooking → lucide UtensilsCrossed) ·
     **Swimming Pool** (flaticon-swimming-pool → lucide Waves) ·
     **Beauty & Health** (flaticon-cosmetics → lucide Sparkles) ·
     **Help & Support** (flaticon-reception → lucide Headphones).
  6. **Intro CTA** — `section.ftco-intro.ftco-no-pt.ftco-no-pb.img` (bg
     image `bg_1.jpg` + `.overlay`, container py-5): 2-col row —
     left `col-md-8`: `span.subheading` **"Find Best Hotel For Leaving"**
     - `h1.mb-md-0` **"Find the Best Hotel in Your Next Vacation"** (white
       serif; SUBTITLE TYPO in source "Leaving" — fix to **"Find Best Hotel
       For Living"**); right `col-md-4`: `a.btn.btn-primary py-md-4 py-3
px-md-5 px-4` **"Book Now"**.
  7. **Featured Rooms** — `section.ftco-section.bg-light` (bg `#f8f8f8`):
     centered heading — `span.subheading` **"Our Rooms"** + `h2.mb-4`
     **"Featured Rooms"**; 3 × `col-md-6 col-lg-4` `div.room-wrap`
     (image `room-1..3.jpg` + `div.text p-5 text-center`):
     - **Suite Room** / **Family Room** / **Deluxe Room** — `h3` link +
       lorem paragraph + `p.mb-0.mt-2`: `span.price.me-3` **"$450
       <small>/ night</small>"** + `a.btn-custom` **"Book Now"** (uppercase
       14px 700 `#222`). Card hover: bg flips to `#222222`, text + title
       turn white, image gets dark overlay.
  8. **Video** — `section.img.vid-section` (bg image `bg_2.jpg` +
     `.overlay`, `div.vid-height` centered): `span.subheading` **"Watch
     our luxurious hotel"** · `h3` **"Take A Tour"** · circular
     `a.video-icon.glightbox` play button (ionicons play → lucide Play,
     white circle w/ gold hover, links to a Vimeo tour video).
  9. **Restaurant & Bar** — `section.ftco-section` (white,
     `container-fluid`): centered heading — `span.subheading`
     **"Resto & Bar"** + `h2.mb-3` **"Restaurant & Bar"**; 2-col layout:
     left `col-xl-5` `div.img.img-cuisine` (resto-bar.jpg) with a
     centered cooking icon; right `col-xl-7` a 2-col grid
     (`col-md-6` × 2) of 8 × `div.pricing-entry.d-flex` rows — thumb
     image (`menu-1..8.jpg`) + `div.desc.ps-3`: name `h3` + `span.price`.
     Source repeats **"Grilled Beef with potatoes"** 6× with prices
     $20.00/$29.00/$20.00/$20.00/$49.91/$20.00 + **"Ultimate Overload"**
     $20.00 + **"Ham & Pineapple"** $20.00 — paraphrase the repeated
     names into 8 distinct dishes (same price set).
  10. **Testimonials** — `section.ftco-section.testimony-section.bg-light`:
      centered heading — `span.subheading` **"Testimonial"** + `h2.mb-3`
      **"Happy Guests"**; carousel (`carousel-testimony`, tiny-slider) of
      5 × `div.item` `div.testimony-wrap`: `div.user-img` (photo
      `person_1..3.jpg` w/ quote-left icon overlay) + `p.name` **"Roger
      Scott"** + `span.position` **"Marketing Manager"** + `p.msg`
      lorem quote. Source repeats the SAME name/position for all 5 —
      paraphrase into 5 distinct guest name + position pairs.
  11. **Counters** — `section.ftco-section-counter` (bg `#222222`): row of
      4 × `col-lg-3` `div.counter-wrap` (padding 90px 40px, centered,
      white): **38,900 # of Happy Guests · 320 # of Rooms · 1,000 # of
      Staffs · 587 # of Destination** (countup animation — replicate as
      animated count-up on scroll into view; note source caption typo
      "Destination" — keep as-is kind or fix to "Destinations").
  12. **Blog** — `section.ftco-section.bg-light`: centered heading —
      `span.subheading` **"Our Blog"** + `h2` **"Recent Blog"**; 4 ×
      `col-md-6 col-lg-3` `div.blog-entry`: image `image_1..4.jpg`
      (block-20) + `div.text`: `p.meta` **"Admin · Dec. 23, 2020 · 3
      Comments"** + `h3.heading` **"Best Hotel Near Beach in Hawaii"**
      - lorem excerpt. Source repeats the SAME title 4× — paraphrase into
        4 distinct hotel-blog titles.
  13. **Gallery** — `section.ftco-gallery` (white, `container-fluid`):
      row of 5 × `col-md` `a.gallery-wrap.img` (250px tall, images
      `gallery-1..5.jpg`), hover dark overlay + 40px search icon
      (fontawesome `fa-search` → lucide Search; glightbox lightbox on
      click).
  14. **Footer** — `footer.ftco-footer` (bg `#1a1a1a`, padding 7em top 0
      bottom, text `rgba(255,255,255,0.7)`): row of columns:
      - **Brand col** — `h2.ftco-heading-2.logo` brand **"Repose <small>
        Hotel Booking</small>"** (white serif) + lorem paragraph + social
        icon links `ul.ftco-footer-social` (fontawesome twitter/facebook/
        instagram → inline SVG brand icons).
      - **Services** (`col-lg-4`, two `col-lg-6` sub-columns with
        chevron-right icons): **Free Wifi · Easy Booking · Restaurant ·
        Swimming Pool | Beauty & Health · 60" Flatscreen TV · Cold
        Aircondition · Help & Support**.
      - **Quick Links** (`col-lg-2`): **Home · About · Rooms · Resto &
        Bar**.
      - **Have a Questions?** (`col-lg`): `div.block-23` — map-marker
        icon + **"203 Fake St. Mountain View, San Francisco, California,
        USA"**; phone icon + **"+2 392 3929 210"**; paper-plane icon +
        **"info@yourdomain.com"**.
      - **Copyright bar** — `div.container-fluid.bg-darken` (bg
        `#151515`) centered: "Copyright ©{year} All rights reserved |
        This template is made with ♥ by ColorLib" (ColorLib attribution →
        MUST be replaced by the Component Dock line: "Made with ♥ by
        [Component Dock](https://www.componentdock.com/)" — see
        conventions; keep the dynamic year via
        `new Date().getFullYear()`).
- **Visual design (screenshot, 1200×946, viewed in browser):** luxurious
  resort/hotel aesthetic. Full-bleed hero photo of a seaside terrace with
  white wicker loungers, umbrellas and ocean view under a dark overlay,
  centered white serif "Most Relaxing Place" with a small caps tagline
  above and two buttons (solid gold "Take A Tour" + white-outline "Learn
  More"); a dark charcoal `#222222` booking bar overlapping the hero bottom
  with 4 labeled fields and a gold "Check Availability" button; below,
  white/light-grey content bands alternating with the gold accent on
  buttons and section subheadings; "Cozy Room"/"Special Offers" image cards
  beside the "Unwind A Hotel Booking Agency" about block; 3 room cards with
  price + "Book Now"; a full-width restaurant/bar image; a dark stats band;
  4 blog cards; a 5-image gallery strip; dark footer with brand + link
  columns. Gold `#c5a880` is the single brand accent; charcoal `#222222`
  for the booking bar, counters band, and hover states; the band rhythm is
  hero photo → dark bar → white → white → photo CTA → light → photo video →
  white → light → dark counters → light → white gallery → dark footer.

## Design tokens

- Brand gold: `#c5a880` (`--color-brand`) — primary buttons (`.btn-primary`
  bg/border), section subheadings, navbar link hover, booking form focus
  border, footer link hover, intro CTA span, video play hover.
- Charcoal ink: `#222222` (`--color-ink`) — booking bar bg, counters band
  bg, room-card hover bg, `.bg-darken`; near-black footer bg `#1a1a1a`,
  copyright bar `#151515`.
- Light band: `#f8f8f8` (`--color-surface`, `.bg-light`) — featured rooms,
  testimonials, blog sections.
- Text: body `rgba(255,255,255,0.7)` on dark bands · headings
  `rgba(0,0,0,0.8)` on light · booking inputs `rgba(255,255,255,0.4)` ·
  footer links `rgba(255,255,255,0.7)` (hover `#c5a880`).
- Font: **Old Standard TT** (headings — h1–h5, weight 400, lh 1.5) +
  **Nunito** (300/400/700 body) via Google Fonts `<link>` in `index.html`
  (source `@import` for both families).
- Headings: section `h2` 64px 400 serif (38px ≤575px, lh 1.4); hero `h1`
  80px 700 white (40px ≤767px); card `h3` serif; subheading = gold
  `#c5a880` uppercase 700 2px letter-spacing (hero subheading white 13px
  700 ls 1px).
- Buttons: SHARP corners everywhere (radius 0). `.btn` = uppercase 12px 700
  ls 1px, box-shadow `0px 24px 36px -11px rgba(0,0,0,0.09)`; `.btn-primary`
  solid gold `#c5a880` white text; hero buttons bigger padding (p-4 py-3)
  with ArrowRight icon; `btn-white` = transparent w/ white outline;
  booking submit = gold, uppercase 16px 700, full-height.
- Booking bar: bg `#222222`, margin-top -80px overlap; labels uppercase
  12px 700 white ls 1px mb 10px; fields divided by `border-left`
  rgba(0,0,0,0.05); inputs transparent, placeholder `rgba(255,255,255,0.4)`,
  radius 0; calendar + chevron icons.
- Counters: bg `#222222`, `.counter-wrap` padding 90px 40px, white numbers
  - gold captions.
- Room card hover: bg `#222222`, title/text white, image overlay
  `rgba(0,0,0,.5)`.
- Gallery: `.gallery-wrap` height 250px, hover overlay + 40px search icon.
- Footer: bg `#1a1a1a`, padding 7em top; social icons; block-23 contact
  rows; copyright strip bg `#151515`.
- Misc: navbar transparent absolute top 20px, `.scrolled` → solid dark
  bg + shadow; AOS-style scroll animations (fade-up / flip-left) — use
  lightweight CSS/IntersectionObserver equivalents.

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar overlaying the hero with the
Repose brand ("Repose Hotel Booking"), a right-aligned nav (Home · About ·
Rooms · Resto & Bar · Blog · Contact), and a mobile toggle. The navbar
SHALL become solid/dark with a shadow once the page scrolls past the hero.

#### Scenario: Navbar content

- **GIVEN** the Repose page is rendered
- **WHEN** the top of the page is inspected
- **THEN** the navbar SHALL show the brand "Repose Hotel Booking" on the
  left
- **AND** the nav links Home, About, Rooms, Resto & Bar, Blog, Contact
  SHALL be present on desktop
- **AND** a mobile menu toggle SHALL be available below the desktop
  breakpoint

#### Scenario: Scroll behavior

- **GIVEN** the Repose page is rendered
- **WHEN** the page is scrolled past the hero
- **THEN** the navbar SHALL switch to a solid dark background with a shadow

### Requirement: Hero

The system SHALL render a full-height hero with a background photo under a
dark overlay, a centered caption (uppercase subheading, large serif
headline "Most Relaxing Place"), and two buttons ("Take A Tour" solid gold,
"Learn More" white outline), each with a forward arrow icon.

#### Scenario: Hero content

- **GIVEN** the Repose page is rendered
- **WHEN** the hero section is inspected
- **THEN** the hero SHALL be 100vh tall with a photo background and dark
  overlay
- **AND** the subheading SHALL read "Enjoy Your Wonderful Holidays With A
  Great Luxury Experience!"
- **AND** the headline SHALL read "Most Relaxing Place"
- **AND** a gold "Take A Tour" button and an outlined "Learn More" button
  SHALL be present, each with an arrow icon

### Requirement: Booking bar

The system SHALL render a dark `#222222` booking form overlapping the
hero's bottom edge with four labeled controls — Check-In (date input),
Check-Out (date input), Rooms (select: Suite · Family Room · Classic Room ·
Superior Room · Luxury Room), Guests (select: 1–10+ Person) — and a gold
"Check Availability" button.

#### Scenario: Booking form fields

- **GIVEN** the Repose page is rendered
- **WHEN** the booking bar is inspected
- **THEN** the bar SHALL have a `#222222` background and overlap the hero
- **AND** labels Check-In, Check-Out, Rooms, Guests SHALL be uppercase with
  calendar icons on the date fields
- **AND** the Rooms select SHALL offer Suite, Family Room, Classic Room,
  Superior Room, Luxury Room
- **AND** the Guests select SHALL offer 1 through 10+ Person options
- **AND** a gold "Check Availability" button SHALL submit the form to a
  success state

### Requirement: About section

The system SHALL render a white two-column about split: left column with
two stacked feature cards ("Cozy Room" with a bed icon and image, "Special
Offers" with a gift icon and image), right column with the gold
subheading "About Us", the serif headline "Repose A Hotel Booking Agency",
a paragraph, and a gold "Book Your Room Now" button.

#### Scenario: About layout

- **GIVEN** the Repose page is rendered
- **WHEN** the about section is inspected
- **THEN** the "Cozy Room" and "Special Offers" cards SHALL appear in the
  left column with icons, images, and paragraphs
- **AND** the right column SHALL show "About Us", "Repose A Hotel Booking
  Agency", a paragraph, and a "Book Your Room Now" button

### Requirement: Services row

The system SHALL render a centered "Explore Our Hotel Services" section
with the subheading "Unwind Services" and six icon service items in a row:
Free Wifi, Easy Booking, Restaurant, Swimming Pool, Beauty & Health, Help &
Support.

#### Scenario: Service items

- **GIVEN** the Repose page is rendered
- **WHEN** the services section is inspected
- **THEN** the heading SHALL read "Explore Our Hotel Services"
- **AND** six services SHALL be shown side by side on desktop, each with a
  distinct icon and label
- **AND** the labels SHALL be Free Wifi, Easy Booking, Restaurant,
  Swimming Pool, Beauty & Health, Help & Support

### Requirement: Intro CTA band

The system SHALL render a photo-background CTA band with the subheading
"Find Best Hotel For Living" (source typo "Leaving" fixed), the headline
"Find the Best Hotel in Your Next Vacation", and a gold "Book Now" button
on the right.

#### Scenario: CTA content

- **GIVEN** the Repose page is rendered
- **WHEN** the intro CTA band is inspected
- **THEN** the subheading SHALL read "Find Best Hotel For Living"
- **AND** the headline SHALL read "Find the Best Hotel in Your Next
  Vacation"
- **AND** a gold "Book Now" button SHALL be present on the right

### Requirement: Featured rooms

The system SHALL render a light `#f8f8f8` "Featured Rooms" section (gold
subheading "Our Rooms") with three room cards — Suite Room, Family Room,
Deluxe Room — each with a photo, title, paragraph, "$450 / night" price,
and a "Book Now" link. On hover the card SHALL flip to a dark `#222222`
background with white text.

#### Scenario: Room cards

- **GIVEN** the Repose page is rendered
- **WHEN** the featured rooms section is inspected
- **THEN** the heading SHALL read "Featured Rooms"
- **AND** three cards SHALL be shown side by side on desktop titled Suite
  Room, Family Room, Deluxe Room
- **AND** each card SHALL show a photo, title, paragraph, "$450 / night",
  and "Book Now"
- **AND** hovering a card SHALL darken its background to `#222222` and turn
  the text white

### Requirement: Video section

The system SHALL render a photo-background video band with the subheading
"Watch our luxurious hotel", the heading "Take A Tour", and a circular play
button that opens a video lightbox.

#### Scenario: Video content

- **GIVEN** the Repose page is rendered
- **WHEN** the video section is inspected
- **THEN** the subheading "Watch our luxurious hotel" and heading "Take A
  Tour" SHALL be present
- **AND** a circular play button SHALL link to a video lightbox

### Requirement: Restaurant & Bar menu

The system SHALL render a "Restaurant & Bar" section (subheading "Resto &
Bar") with a large cuisine image on the left and a two-column grid of eight
pricing entries (thumbnail + dish name + price) on the right.

#### Scenario: Menu entries

- **GIVEN** the Repose page is rendered
- **WHEN** the restaurant section is inspected
- **THEN** the heading SHALL read "Restaurant & Bar"
- **AND** a cuisine image with a cooking icon SHALL appear on the left
- **AND** eight pricing entries SHALL appear in a two-column grid, each
  with a thumbnail, a distinct dish name, and a price

### Requirement: Testimonials

The system SHALL render a light "Happy Guests" testimonial carousel
(subheading "Testimonial") with five slides, each showing a guest photo
with a quote icon, a distinct guest name, a position, and a quote.

#### Scenario: Testimonial slides

- **GIVEN** the Repose page is rendered
- **WHEN** the testimonials section is inspected
- **THEN** the heading SHALL read "Happy Guests"
- **AND** a carousel SHALL show five guest testimonials
- **AND** each testimonial SHALL contain a photo, a name, a position, and
  a quote

### Requirement: Stats counters

The system SHALL render a dark `#222222` band with four animated counters:
38,900 Happy Guests · 320 Rooms · 1,000 Staff · 587 Destinations, each
with a gold caption.

#### Scenario: Counter values

- **GIVEN** the Repose page is rendered
- **WHEN** the counters band is inspected
- **THEN** the band SHALL have a `#222222` background
- **AND** four counters SHALL show the values 38,900 / 320 / 1,000 / 587
- **AND** the captions SHALL be "Happy Guests", "Rooms", "Staff", and
  "Destinations"
- **AND** the numbers SHALL count up when scrolled into view

### Requirement: Blog grid

The system SHALL render a light "Recent Blog" section (subheading "Our
Blog") with four blog cards, each with an image, a meta line (author · date
· comments), a distinct title, and an excerpt.

#### Scenario: Blog cards

- **GIVEN** the Repose page is rendered
- **WHEN** the blog section is inspected
- **THEN** the heading SHALL read "Recent Blog"
- **AND** four blog cards SHALL be shown side by side on desktop
- **AND** each card SHALL contain an image, meta (author, date, comment
  count), a distinct title, and an excerpt

### Requirement: Gallery strip

The system SHALL render a five-image gallery strip (each 250px tall) with a
search icon overlay on hover and a lightbox on click.

#### Scenario: Gallery items

- **GIVEN** the Repose page is rendered
- **WHEN** the gallery section is inspected
- **THEN** five gallery images SHALL be shown in a row
- **AND** hovering an image SHALL show a dark overlay with a search icon
- **AND** clicking an image SHALL open a lightbox

### Requirement: Footer

The system SHALL render a dark `#1a1a1a` footer with four columns: brand
(logo + blurb + social icons), Services (8 links in two sub-columns),
Quick Links (Home · About · Rooms · Resto & Bar), and "Have a Questions?"
(address, phone, email), plus a darker copyright strip.

#### Scenario: Footer columns

- **GIVEN** the Repose page is rendered
- **WHEN** the footer is inspected
- **THEN** the footer SHALL have a `#1a1a1a` background
- **AND** the brand column SHALL show the logo, a blurb, and social icons
- **AND** a Services column SHALL list eight service links
- **AND** a Quick Links column SHALL list Home, About, Rooms, Resto & Bar
- **AND** a "Have a Questions?" column SHALL show address, phone, and
  email

#### Scenario: Copyright and attribution

- **GIVEN** the Repose page is rendered
- **WHEN** the copyright bar is inspected
- **THEN** it SHALL show the current year and the words "All rights
  reserved"
- **AND** it SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock"
- **AND** no ColorLib reference SHALL appear anywhere in the app code

### Requirement: Design tokens and fidelity

The system SHALL implement the design tokens from the Design tokens
section: `#c5a880` gold as the theme brand color, `#222222` charcoal for
dark bands, Old Standard TT (headings) + Nunito (body) via Google Fonts
`<link>` in `index.html`, sharp-cornered buttons, and the exact section
order (navbar → hero → booking bar → about → services → intro CTA →
featured rooms → video → restaurant → testimonials → counters → blog →
gallery → footer).

#### Scenario: Token application

- **GIVEN** the Repose app is implemented
- **WHEN** the stylesheet is inspected
- **THEN** the brand color `#c5a880` SHALL be defined as a theme token and
  used by primary buttons, subheadings, and hover states
- **AND** `#222222` SHALL be used for the booking bar, counters band, and
  room hover backgrounds
- **AND** Old Standard TT and Nunito SHALL be loaded via Google Fonts links
  in `index.html`
- **AND** buttons SHALL be sharp-cornered (no border radius)
- **AND** the section order SHALL be: navbar → hero → booking bar → about →
  services → intro CTA → featured rooms → video → restaurant →
  testimonials → counters → blog → gallery → footer

## Verification checklist

- [ ] `openspec/specs/template-repose/spec.md` — Gherkin scenarios above
      map 1:1 to vitest scenarios (one `describe` per component).
- [ ] `npm run spec:validate` passes for the new spec.
- [ ] Replication fidelity: section order 1:1 (navbar → hero → booking bar
      → about → services → intro CTA → featured rooms → video → restaurant
      → testimonials → counters → blog → gallery → footer); tokens
      `#c5a880` / `#222222` / `#1a1a1a` / `#151515` / `#f8f8f8`; Old
      Standard TT + Nunito fonts; sharp buttons; gold uppercase 2px-ls
      subheadings; 64px serif section h2.
- [ ] Placeholder images: `https://picsum.photos/seed/repose-<n>/<w>/<h>`
      (deterministic per template). Subject-critical photos: hero (seaside
      terrace w/ loungers — screen seeds for a resort look per the
      seed-screening method in the colorlib-template-replication skill),
      room photos, cuisine image, testimonial headshots, blog images,
      gallery images.
- [ ] Icons: lucide-react (ArrowRight, Calendar, ChevronDown, BedDouble,
      Gift, Wifi, CalendarCheck, UtensilsCrossed, Waves, Sparkles,
      Headphones, Play, Search, MapPin, Phone, Mail, Menu, Quote);
      social brand icons (X/Twitter, Facebook, Instagram) as inline SVG
      paths (lucide removed brand icons — verify every import with the
      typeof probe).
- [ ] Source repetition paraphrased in the recreation: the 6 identical
      "Grilled Beef with potatoes" menu names → 8 distinct dishes; the 5
      identical "Roger Scott / Marketing Manager" testimonials → distinct
      guests; the 4 identical "Best Hotel Near Beach in Hawaii" blog
      titles → distinct hotel-blog headlines.
- [ ] Source typo fixed silently: intro CTA subheading "Find Best Hotel
      For Leaving" → "Find Best Hotel For Living"; counter caption
      "Destination" → "Destinations".
- [ ] Booking form: dark `#222222` bar overlapping the hero (negative
      margin), uppercase labels, calendar/chevron icons, selects with the
      exact option sets, gold submit → success state (per error-handling
      conventions).
- [ ] Counters: animated count-up on scroll into view (fake-timer
      testable); values 38900 / 320 / 1000 / 587.
- [ ] Sticky navbar: transparent over the hero, solid dark + shadow after
      scroll.
- [ ] Video + gallery lightbox: click opens a modal (no external lib
      needed — simple state-based lightbox).
- [ ] Footer MUST link `https://www.componentdock.com/` ("Component
      Dock") and MUST NOT reference ColorLib in any app file (provenance
      only in this spec / TEMPLATES.md / PR). Phone "+2 392 3929 210" as
      plain text — NO literal `tel:` URI anywhere in source (secret-scan
      redaction trap; see replication skill).
- [ ] 100% coverage lines/functions/branches/statements;
      `scripts/verify-app.sh repose` green; full gate via CI on merge.
- [ ] PR description: source template (ColorLib Unwind), preview URL
      (`https://preview.colorlib.com/theme/unwind/`), design tokens used,
      what differs (renames, placeholder images, paraphrased copy, fixed
      source typos).
