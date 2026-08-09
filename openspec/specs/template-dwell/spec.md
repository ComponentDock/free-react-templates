# Template: Dwell (Bootstrap / Real Estate — Apartments)

## Purpose

Dwell is a single-page apartment-rental website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Apart" website template
(source: https://colorlib.com/wp/template/apart/), built under a DIFFERENT
name (Dwell — to dwell = to live/reside, apartment-branded) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a real-estate landing page: a full-viewport hero photograph
(loft-style apartment interior) with a dark overlay and a centered
"EXCELLENT SPACE FOR YOUR NEXT HOME" headline + "Take a Tour" button, a
white "Property Information" split panel (photo left, spec list right)
overlapping the hero by 100px, a 4-card "Browse Apartments" grid whose card
titles sit on a tan highlight, a "Featured Apartments" retro 1+2 collage, a
"Love By Our Customers" testimonial carousel, a light "News & Events" blog
grid, a tan social-icon strip, and a white 3-column footer with a subscribe
form and a "Watch Live Streaming" video card. Dwell recreates that structure
1:1 with matching layout, colors, typography, and content types (no ColorLib
assets copied).

> NAMING NOTE: the ColorLib source name "Apart" / slug `apart` is FORBIDDEN
> as the app name. **Dwell** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-09). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Apart" — real-estate/apartment rental landing
  page. Category in TEMPLATES.md: **Bootstrap (216)** (line 333: `- [ ]
**Apart** — https://colorlib.com/wp/template/apart/`). The recreation
  brands itself **Dwell** but keeps the same section structure and copy
  kinds.
- **Live preview DOM analyzed (verified 2026-08-09):** the official preview
  `https://preview.colorlib.com/theme/apart/` is LIVE — HTTP 200, title
  "Apart — Colorlib Website Template". Structure extracted from the rendered
  DOM and the HTML source (30,984 bytes) + `css/style.css` (22,968 bytes) +
  `css/bootstrap.min.css` (Bootstrap 4.x with the theme's `--primary` overridden
  to `#e3c4a8`).
- **Visual design (live render + screenshot `apart-free-template.jpg`
  (1200×946, browser-verified 2026-08-09) — match 1:1):** modern, clean
  real-estate aesthetic. Palette: white + dark grey/black text + muted
  beige/tan (`#E3C4A8`) accents. Hero = full-viewport interior photograph
  (loft: exposed brick, big windows, people on a grey sofa, red bicycle)
  under a `rgba(0,0,0,.4)` overlay; headline in white, tall condensed
  uppercase Oswald with wide letter-spacing; square tan buttons. The
  "Property Information" panel is a white split (photo left / text right)
  that overlaps the hero bottom by 100px with a soft shadow. Apartment cards
  show the photo with the title on a tan highlight and the price on a black
  highlight at the bottom-left. Testimonials are white cards with
  rounded-circle avatars and italic quotes. The News section sits on a light
  grey-blue (`#EDF0F5`) background. A full-width tan strip of 6 white social
  icons separates content from the footer; the footer is white with black
  uppercase headings (tan 2px underline), grey body links, a subscribe input
  - tan button, and a video thumbnail with a circular white play button.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`div.site-navbar.mt-4` — transparent, absolute over the
     hero, z-index 99): logo `<h1>` "Apart**.**" (the trailing period in the
     brand tan `text-primary`) left; right-aligned menu Home / About /
     Apartments (dropdown: Apartments, Rooms, Suites, Sub Menu → Menu One/
     Two/Three) / News / Contact. Nav links white with `rgba(255,255,255,.6)`
     idle → `#fff` hover/active; `.05em` letter-spacing. Mobile: hamburger
     (`icon-menu`) opens a 300px right slide-in white panel
     (`site-mobile-menu`, shadow `-10px 0 20px -10px rgba(0,0,0,.1)`).
  2. **Hero** (`div.site-blocks-cover.overlay` — min-height 600px,
     height 100vh, `background-image: url(images/hero_bg_2.jpg)` cover,
     position top, `:before` overlay `rgba(0,0,0,.4)`): centered column —
     `<h1>` "Excellent Space For Your Next Home" (white, Oswald 4rem,
     uppercase, letter-spacing .1em, mb-4), `<p>` address "1105 Madison Plaza
     Suite 120 Chesapeake, CA, California" (white 1.5rem, lh 1.5, mb-5),
     `<a class="btn btn-primary px-5 py-3">` "Take a Tour" (square, tan).
  3. **Property Information** (`div.featured-property-half.d-flex` inside a
     plain `container` — white bg, `margin-top: -100px` (overlaps hero),
     shadow `0 0 20px -5px rgba(0,0,0,.1)`, two 50% columns): left `.image`
     (background-image `hero_bg_1.jpg` cover), right `.text` (padding 100px):
     `<h2>` "Property Information", lorem paragraph (mb-5), `ul.property-list-details` (mb-5, list-none, `#777`, li mb 10px):
     - "Property Name: **Marga Luxury Suite**" (li.text-black, strong black)
     - "Room: **2**"
     - "Total Area: **482 Square Feets**" (source typo → fix "Feets"→"Feet")
     - "Category: **Modern House**"
     - "Lunch Date: Jan 20, 2019" (source typo → "Launch Date")
       then `<a class="btn btn-primary px-4 py-3">` "Get Details".
  4. **Browse Apartments** (`div.site-section` — padding 7em 0): centered
     `site-section-heading w-border` (h2 uppercase 2rem letter-spacing .2em +
     70×2px tan underline `#e3c4a8`; lorem intro) then a `row` of 4 cards
     (`col-md-6 col-lg-3`, AOS fade-up delays 100–400): each `a.unit-9`
     (300px tall, cover image `img_1..4.jpg`, position relative, overflow
     hidden, `.image` transition .3s ease) with `.unit-9-content` absolutely
     positioned bottom-left: `<h2>` city name as inline text on a tan
     highlight (`background:#e3c4a8` + `box-shadow: 10px 0 0 #e3c4a8`) —
     Nashville / Baltimore / Austin / Atlanta — and `<span>` price on a
     black highlight (`background:#000` + same shadow trick):
     `$130/night` / `$230/night` / `$130/night` / `$150/night`. Below:
     centered `a.btn.btn-primary` "Browse All Apartments" (mt-5).
  5. **Featured Apartments** (`div.site-block-retro.d-block.d-md-flex`):
     left `col1` (48% width) = one tall `unit-9 no-height` card "Baltimore
     Apartment" `$600/night` (img_2.jpg); right `col2` (48%, ml-auto) =
     two stacked 300px cards "Austin Apartment" `$290/night` (img_3.jpg) and
     "Atlanta Apartment" `$1,290/night` (img_1.jpg), second row
     `margin-bottom: 8%`. Same tan/black label treatment.
  6. **Love By Our Customers** (`div.site-section.block-13`): centered
     w-border heading "Love By Our Customers" + lorem, then
     `div.nonloop-block-13.owl-carousel` — 6 testimonial slides
     (`div.text-center.p-3.p-md-5.bg-white`): rounded-circle avatar
     (`images/person_1..6.jpg`, w-50 mx-auto), `<h3 class="font-weight-light
h5">` name (Megan Smith, Brooke Cagle, Philip Martin, Steven Ericson,
     Nathan Dumlao, Brook Smith), italic quote
     ("Lorem ipsum dolor sit amet…"). Carousel shows 1 per view with
     centered dots (`owl-dots`, 5px margin) + prev/next arrows.
  7. **News & Events** (`div.site-section.bg-light` — light
     `#EDF0F5`-family background): centered w-border heading "News & Events"
     - lorem; `row` of 3 cards (`col-md-6 col-lg-4`, mb-4, AOS delays
       100–300): image link (`img_4/img_2/img_3.jpg`, img-fluid) + `div.p-4.bg-white`:
       date "Jan 20th, 2019" (`text-secondary small text-uppercase`) + `<h2
class="h5 text-black mb-3">` link "Fugit nam obcaecati fuga itaque"
       (placeholder headline — keep the same kind of content, paraphrase).
  8. **Social strip** (`div.bg-primary` — full-width tan band): 6 equal
     `col-2 text-center py-4` links with white icons (facebook, twitter,
     instagram, linkedin, pinterest, youtube — icomoon → lucide); hover
     `color:#eec60a` on `background:#ddb795` (darken to a deeper tan).
  9. **Footer** (`footer.site-footer` — white bg, padding 7em 0): 3 columns:
     - col-lg-4: "About Apart" (`h3.footer-heading` — uppercase 1.3rem
       letter-spacing .1em black, tan 40×2px underline `:before`; lorem
       paragraph `#737373`) + "Subscribe" (`form.site-block-subscribe`:
       `input.form-control` height 60px, font-weight 300, transparent bg,
       border-secondary + `btn.btn-primary` "Subscribe", square
       `rounded-top-right-0`).
     - col-lg-4: "Navigations" — two 2-col link lists (Home / Apartments /
       News / Featured Apartment · About Us / Privacy Policy / Contact Us /
       Membership; links `#999999`, hover white) + "Follow Us" (4 social
       icons facebook/twitter/instagram/linkedin, pl-0 pr-3 spacing).
     - col-lg-4: "Watch Live Streaming" (`h3.footer-heading`) +
       `div.block-16`: `figure` with image (img_1.jpg, rounded, img-fluid) +
       `a.play-button.popup-vimeo` (absolute center, 70×70px white circle,
       `icon-play` glyph) linking to a Vimeo video
       (`https://vimeo.com/channels/staffpicks/93951774`).
     - Bottom bar (`div.row.pt-5.mt-5.text-center`): "Copyright © All rights
       reserved | This template is made with [heart] by Colorlib" — replace
       with "© Dwell. All rights reserved." (drop the Colorlib credit line;
       keep the layout).
- **JS behaviors (original, `js/main.js` + vendor):** Bootstrap 4 dropdowns
  (nav), jQuery Owl Carousel 2 (`nonloop-block-13` testimonials, autoplay +
  dots + nav), Magnific Popup (`popup-vimeo` play button), AOS scroll
  animations (`data-aos="fade-up"` + delays on cards/sections), stellar.js
  parallax on the hero. Recreate in React: a simple state-driven testimonial
  carousel (one slide at a time, dot indicators, prev/next), a nav dropdown
  on hover/focus, a slide-in mobile menu, and light fade-up entrance
  animations via CSS (IntersectionObserver optional — keep it dependency-free
  per repo conventions).

## Design tokens (from `css/style.css` + `css/bootstrap.min.css`, verified 2026-08-09)

- **Fonts:** 'Oswald' (sans-serif, condensed) for ALL headings (`h1–h5`,
  `font-family: 'Oswald', sans-serif`; h1 4rem/900, letter-spacing .1em,
  uppercase; h2 2rem section headings letter-spacing .2em uppercase) and
  "Nunito Sans" for body/nav (body: Nunito Sans, 1rem, weight 400, line-height
  1.7, color `#333`; hero p 1.5rem; nav links letter-spacing .05em). Recreate
  with Google Fonts `<link>` in `index.html`: Oswald 400/500/700 + Nunito Sans
  400/600/700.
- **Brand colors:**
  - `#e3c4a8` — brand tan (Bootstrap `--primary` override): all buttons
    (`btn-primary` bg/border), section-heading 70×2px underline, unit-9 title
    highlight + its 10px box-shadow gutter, footer-heading 40×2px underline,
    dropdown link hover, form-control focus border, brand dot in the logo,
    social strip background.
  - `#000` — unit-9 price highlight (+ 10px box-shadow gutter),
    featured-property-half spec strong values, section headings (via
    `.text-black`), footer headings.
  - `#fff` — hero text, nav links (active/hover), button text
    (`btn-primary` color `#fff`), unit-9 title text, testimonial card bg,
    footer headings + links hover, social icons.
  - `rgba(255,255,255,.6)` — idle nav link color.
  - `#333` — body text.
  - `#777` — property-list-details text.
  - `#737373` — footer paragraph text; `#999999` — footer links.
  - `#EDF0F5` — nav dropdown border, News section `bg-light` background.
  - `#EEC60A` (yellow) on `#DDB795` (deeper tan) — social-icon hover.
  - `rgba(0,0,0,.4)` — hero overlay; `rgba(0,0,0,.1)` — panel/footer shadows.
- **Radii:** 0 (square buttons, inputs); 50% (testimonial avatars, play
  button circle).
- **Spacing/geometry:** hero 100vh (min 600px); panel `margin-top:-100px`,
  `.text` padding 100px; section padding 7em 0; unit-9 cards 300px tall,
  grid 4-up lg / 2-up md; retro collage 48%+48% with 8% gutters; footer
  padding 7em 0; testimonial cards `p-3 p-md-5`; subscribe input height 60px;
  play button 70×70px; heading underline 70×2px (footer 40×2px).
- **Responsive:** ≤991px — Browse cards 2-up (col-md-6), footer cols stack;
  ≤767px — retro collage columns 100% (col1 300px + mb 8%), cards stack;
  navbar becomes hamburger + 300px right slide-in white panel (no bg bar).
- **Placeholder images (never copy ColorLib assets):** hero →
  `https://picsum.photos/seed/dwell-hero/1920/1080` (source `hero_bg_2.jpg`);
  property panel → `https://picsum.photos/seed/dwell-property/1200/900`;
  apartment cards → `picsum.photos/seed/dwell-1/800/600` … `dwell-4`;
  testimonials → `picsum.photos/seed/dwell-t1/200/200` … `dwell-t6`;
  news → `picsum.photos/seed/dwell-n1/800/600` … `dwell-n3`;
  video thumb → `picsum.photos/seed/dwell-video/800/500`.
- **Icon mapping (source icomoon → lucide-react):** icon-menu → `Menu` ·
  icon-play → `Play` · icon-facebook → `Facebook` · icon-twitter → `Twitter`
  · icon-instagram → `Instagram` · icon-linkedin → `Linkedin` ·
  icon-pinterest → `Pinterest` (or `Link`) · icon-youtube → `Youtube` ·
  dropdown chevron (`\e313` icomoon) → `ChevronDown`.

## Requirements

### Requirement: Transparent navbar with dropdown

The system SHALL render a transparent navbar overlaying the hero with the
brand logo, top-level links, an Apartments dropdown, and a mobile menu.

#### Scenario: Desktop navbar

- **GIVEN** the Dwell page is rendered on a desktop viewport
- **WHEN** the navbar is displayed
- **THEN** the navbar SHALL be transparent (absolute over the hero, no
  background bar) and show the logo "Dwell**.**" on the left with the trailing
  period in the brand tan `#e3c4a8`
- **AND** links "Home" (active), "About", "Apartments" (with a
  chevron-down indicator), "News", "Contact" SHALL be right-aligned, white at
  `rgba(255,255,255,.6)` idle and `#fff` on hover/active, letter-spacing
  `.05em`
- **AND** hovering/focusing "Apartments" SHALL reveal a white dropdown with
  the items Apartments, Rooms, Suites, and Sub Menu (Sub Menu itself
  containing Menu One, Menu Two, Menu Three), shadowed
  `0 2px 10px -2px rgba(0,0,0,.25)`, links `#343a40` with tan hover
  `#e3c4a8`

#### Scenario: Mobile menu

- **GIVEN** the Dwell page is rendered on a viewport ≤991px
- **WHEN** the hamburger button is tapped
- **THEN** a white 300px panel SHALL slide in from the right with the same
  links (shadow `-10px 0 20px -10px rgba(0,0,0,.1)`)
- **AND** tapping the close button SHALL slide the panel back out

### Requirement: Full-viewport hero

The system SHALL render a full-viewport hero with a cover photograph, dark
overlay, centered headline, address line, and primary CTA.

#### Scenario: Hero layout and content

- **GIVEN** the Dwell page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL be 100vh tall (min-height 600px) with a
  background photo (`cover`, positioned top) and a `rgba(0,0,0,.4)` overlay
- **AND** the headline SHALL read "Excellent Space For Your Next Home" in
  white uppercase Oswald (4rem, letter-spacing .1em), centered
- **AND** the address line SHALL read "1105 Madison Plaza Suite 120
  Chesapeake, CA, California" in white 1.5rem text below the headline
- **AND** a square tan "Take a Tour" button (`btn-primary`, px-5 py-3)
  SHALL sit below the address

### Requirement: Property Information split panel

The system SHALL render a white split panel (photo left, details right) that
overlaps the hero bottom by 100px.

#### Scenario: Panel layout and spec list

- **GIVEN** the Dwell page is rendered
- **WHEN** the Property Information panel is displayed
- **THEN** the panel SHALL be white with `margin-top:-100px` (overlapping
  the hero) and a soft shadow `0 0 20px -5px rgba(0,0,0,.1)`, split into two
  50% columns
- **AND** the left column SHALL be a cover photograph
- **AND** the right column SHALL show the heading "Property Information"
  (Oswald uppercase), a lorem-style paragraph, and a spec list with:
  Property Name: **Marga Luxury Suite** · Room: **2** · Total Area:
  **482 Square Feet** (fix source "Feets" typo) · Category: **Modern House**
  · Launch Date: Jan 20, 2019 (fix source "Lunch Date" typo) — values in
  black, labels `#777`, list items spaced 10px
- **AND** a square tan "Get Details" button SHALL be shown below the list

### Requirement: Browse Apartments grid

The system SHALL render the "Browse Apartments" section: a centered heading
with a tan underline, intro copy, and a 4-card apartment grid with
tan/black highlighted labels.

#### Scenario: Section heading

- **GIVEN** the Dwell page is rendered
- **WHEN** the Browse Apartments heading is displayed
- **THEN** the heading SHALL read "Browse Apartments" in uppercase Oswald
  2rem, letter-spacing .2em, centered, with a 70×2px tan `#e3c4a8` underline
  centered beneath it and a lorem intro paragraph

#### Scenario: Apartment cards

- **GIVEN** the Browse Apartments section is displayed
- **WHEN** the cards render
- **THEN** four cards SHALL be shown in a 4-up row on desktop (2-up ≤991px,
  stacked ≤767px), each a 300px-tall cover photo
- **AND** each card SHALL overlay at its bottom-left the city name
  (Nashville, Baltimore, Austin, Atlanta) in white text on a tan `#e3c4a8`
  highlight and the price ($130/night, $230/night, $130/night, $150/night)
  in white text on a black highlight (inline backgrounds with the 10px
  box-shadow gutter)
- **AND** a centered square tan "Browse All Apartments" button SHALL appear
  below the grid

### Requirement: Featured Apartments collage

The system SHALL render the "Featured Apartments" retro collage: one large
card on the left and two stacked cards on the right.

#### Scenario: Collage layout

- **GIVEN** the Dwell page is rendered
- **WHEN** the Featured Apartments section is displayed
- **THEN** the section heading SHALL read "Featured Apartments" with the
  tan underline and intro copy
- **AND** a left 48%-width tall card SHALL show "Baltimore Apartment"
  $600/night
- **AND** the right 48% column SHALL stack two 300px cards — "Austin
  Apartment" $290/night and "Atlanta Apartment" $1,290/night — with an 8%
  gutter between them
- **AND** all three cards SHALL use the same tan title / black price
  highlight treatment
- **AND** on ≤767px the columns SHALL stack full-width (left card 300px
  tall with 8% bottom margin)

### Requirement: Testimonial carousel

The system SHALL render the "Love By Our Customers" carousel with six
testimonials, one slide at a time, dot indicators, and prev/next controls.

#### Scenario: Carousel behavior and slides

- **GIVEN** the Dwell page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** the heading SHALL read "Love By Our Customers" with the tan
  underline and intro copy
- **AND** six testimonial slides SHALL exist, each a white card showing a
  round avatar, the customer name (Megan Smith, Brooke Cagle, Philip Martin,
  Steven Ericson, Nathan Dumlao, Brook Smith) in light-weight Oswald, and an
  italic placeholder quote (paraphrase the source lorem — keep the same kind
  of content)
- **AND** exactly one slide SHALL be visible at a time with centered dot
  indicators to switch slides
- **AND** prev/next arrows SHALL navigate the carousel (wrapping)

### Requirement: News & Events grid

The system SHALL render the "News & Events" section on a light background
with three news cards (image, date, headline link).

#### Scenario: News cards

- **GIVEN** the Dwell page is rendered
- **WHEN** the News & Events section is displayed
- **THEN** the section SHALL have a light `#EDF0F5`-family background with
  the heading "News & Events", tan underline, and intro copy
- **AND** three cards SHALL be shown in a 3-up row on desktop (stacked
  ≤767px), each with a cover image, an uppercase small date "Jan 20th, 2019"
  in secondary gray, and a black headline link (paraphrase the placeholder
  "Fugit nam obcaecati fuga itaque" — same kind of content), the text block
  on a white `p-4` card

### Requirement: Social strip

The system SHALL render a full-width tan social-icon strip between the News
section and the footer.

#### Scenario: Social icons

- **GIVEN** the Dwell page is rendered
- **WHEN** the social strip is displayed
- **THEN** a full-width band with background `#e3c4a8` SHALL show six
  equally-spaced white social icons (Facebook, Twitter, Instagram, LinkedIn,
  Pinterest, YouTube) at 20px
- **AND** on hover each icon SHALL turn yellow `#eec60a` on a deeper tan
  `#ddb795` background

### Requirement: Footer with subscribe, links, and video card

The system SHALL render the white 3-column footer with the About blurb +
subscribe form, navigation links + follow icons, and the Watch Live
Streaming video card, plus the copyright bar.

#### Scenario: Footer columns

- **GIVEN** the Dwell page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL be white with black uppercase Oswald headings
  (1.3rem, letter-spacing .1em) each carrying a tan 40×2px underline
- **AND** column 1 SHALL show an "About Dwell" lorem paragraph (`#737373`)
  and a "Subscribe" form: an email input (60px tall, transparent bg,
  secondary border, placeholder "Enter your email") with a square tan
  "Subscribe" button
- **AND** column 2 SHALL show "Navigations" as two two-item link lists
  (Home, Apartments, News, Featured Apartment · About Us, Privacy Policy,
  Contact Us, Membership; links `#999999`, hover white) and "Follow Us" with
  four social icons
- **AND** column 3 SHALL show "Watch Live Streaming" with a video
  thumbnail and a centered 70×70px white circular play button
- **AND** the bottom bar SHALL read "© Dwell. All rights reserved." (drop
  the Colorlib credit line)

#### Scenario: Subscribe validation

- **GIVEN** the footer subscribe form is displayed
- **WHEN** the user submits an invalid email
- **THEN** the form SHALL show an inline validation message and not submit
- **AND** when the user submits a valid email, the form SHALL show a
  confirmation message (e.g. "Thanks for subscribing!")

### Requirement: Responsive behavior

The system SHALL adapt the layout across breakpoints: 4→2→1 column grids,
the navbar collapsing to the slide-in mobile menu, and the collage stacking.

#### Scenario: Mobile layout (≤767px)

- **GIVEN** the Dwell page is rendered on a viewport ≤767px
- **WHEN** the page is displayed
- **THEN** the Browse Apartments and News grids SHALL stack to one column
- **AND** the Featured Apartments collage SHALL stack full-width with the
  left card at 300px height and an 8% bottom margin
- **AND** the navbar SHALL show the hamburger and the slide-in menu
  instead of the horizontal links
- **AND** the Property Information panel SHALL stack (photo above text,
  reduced padding)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-dwell`
- [ ] `scripts/verify-app.sh dwell` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with source): transparent navbar → full-viewport
      hero (overlay + headline + address + Take a Tour) → Property
      Information split panel (overlapping -100px) → Browse Apartments
      (4 cards + Browse All Apartments) → Featured Apartments collage (1+2)
      → Love By Our Customers carousel (6 slides) → News & Events (3 cards,
      light bg) → tan social strip → footer (About+Subscribe / Navigations+
      Follow Us / Watch Live Streaming) → copyright bar
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#e3c4a8`
      (brand tan: buttons, underlines, card title highlights, logo dot,
      social strip, hover accents), `#000` price highlights, `#333` body,
      `#777`/`#737373`/`#999999` secondary text, `#EDF0F5` news bg,
      `#eec60a`/`#ddb795` social hover
- [ ] Fonts: Oswald (headings, 400/500/700) + Nunito Sans (body) via Google
      Fonts `<link>` in `index.html`, title "Dwell — Apartment & Real Estate
      Template"
- [ ] Buttons square (radius 0), tan `#e3c4a8`, white text; hero overlay
      `rgba(0,0,0,.4)`
- [ ] Placeholder images = seeded picsum (`dwell-hero`, `dwell-property`,
      `dwell-1..4`, `dwell-t1..6`, `dwell-n1..3`, `dwell-video`); icons from
      lucide-react (`Menu`, `Play`, `ChevronDown`, `Facebook`, `Twitter`,
      `Instagram`, `Linkedin`, `Pinterest`, `Youtube`) — no copied assets
- [ ] Testimonial carousel: one slide visible, dots + prev/next, wraps
- [ ] Nav dropdown + slide-in mobile menu (300px right panel); nav links
      `rgba(255,255,255,.6)` → `#fff`
- [ ] Source typos fixed: "Square Feets"→"Square Feet", "Lunch Date"→
      "Launch Date"; copyright line rebranded "© Dwell. All rights
      reserved."
- [ ] Subscribe form validates email + shows confirmation
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Apart" row, line 333 —
      Bootstrap category)
