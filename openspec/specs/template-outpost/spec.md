# Template: Outpost (Adventure Travel Agency Template)

## Purpose

Outpost is a single-page adventure travel agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Taxa" adventure travel template (see TEMPLATES.md, Travel
section, line 2998), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a bold adventure-travel page anchored by a flat illustrated
hero — a pink→purple gradient sky over layered mountain and pine-forest
silhouettes — with a huge white Playfair Display serif headline "Taxa
Adventure" (recreation: "Outpost") under a small uppercase eyebrow "Plan a
trip to Santorini Village". The navbar is transparent over the hero (white
uppercase links, cube logo, outlined "BOOK A TRIP" button, search icon) and
turns into a fixed black bar on scroll. Below: a services section of three
cards (text on top, illustration panel below on `#f7f9fd`); a light CTA band
("Get Ready for Real time Adventure" + black button + floating illustration);
three trip-package cards with a gradient date badge (yellow→red on hover);
a "Popular Places Around the World" image carousel with hover slide-up
titles; a four-member team grid whose white info box slides up on hover; a
dark purple newsletter band ("Subscribe for our Newsletter" + purple input +
gradient subscribe button); a centered testimonial slider (quote icon, name,
five stars, circular avatar thumbnails with a pink active ring); a three-post
blog row; and a dark navy footer (`#04091e`) with About Agency, Navigation
Links, Newsletter, and an Instagram Feed, closing with a copyright line that
the recreation links to Component Dock.

The design is anchored by one signature gradient — pink `#ff2f8b` → purple
`#9035f9` (90deg) — used on primary buttons, gradient-clipped section
eyebrows, package date badges, and newsletter submit buttons.

Brand colors: pink `#ff2f8b` and purple `#9035f9` (the signature gradient);
date-hover gradient yellow `#fff098` → red `#f54e71`; black `#000000`
(headings, CTA button, fixed navbar bg); footer navy `#04091e`; body grey
`#777777`; feature-panel `#f7f9fd`; card borders `#eeeeee`; newsletter
input purple `#c251da`; testimonial active ring `#ff2f8b`. Fonts: Playfair
Display 700 for ALL headings (hero h2 120px desktop → 80px → 50px mobile;
section h1 48px; package date day 32px); Roboto for body (14px, weight 300,
line-height 24px, `#777777`) and UI (nav links and buttons 600 12px
uppercase). Buttons are square (radius 0): gradient primary buttons, an
outlined white navbar button, a solid black CTA button, and square gradient
newsletter submits. Testimonial thumbnails are the only rounded elements
(circular, 2px ring).

## Design reference (replication findings)

- **Original:** ColorLib "Taxa" — adventure travel agency template
  (source: https://colorlib.com/wp/template/taxa/). Listed in
  TEMPLATES.md `## Travel` at line 2998; slug appears exactly once.
- **Live preview URL:** https://preview.colorlib.com/theme/taxa/
  (HTTP 200, 29,380 bytes, verified 2026-10-01; `<title>Taxa Adventure</title>`).
  HTML saved to `/tmp/taxa_preview.html`; theme stylesheet `css/style.css`
  (81,138 bytes) saved to `/tmp/taxa_style.css`. The preview DOM is
  authoritative for section order and copy; the screenshot
  (`taxa-free-template.jpg`, reviewed visually) is authoritative for the
  hero treatment: full-bleed flat illustration — magenta/pink sunset sky
  with a small sun, layered purple mountain ranges, dark-purple pine-forest
  silhouettes along the bottom, pink birds — huge centered white serif
  "Taxa Adventure", transparent navbar with white cube logo + links and an
  outlined "BOOK A TRIP" button.
- **Stylesheets in the reference:** `css/bootstrap.css`,
  `vendors/linericon/style.css`, `css/font-awesome.min.css`,
  `css/magnific-popup.css`, `vendors/owl-carousel/owl.carousel.min.css`,
  `vendors/nice-select/css/nice-select.css`, `css/style.css` (theme —
  canonical tokens). Icon fonts (Linear Icons + Font Awesome), owl carousel,
  magnific popup, and nice-select are NEVER copied: recreation uses
  lucide-react icons and React-state sliders/scrolled-header.
- **Fonts:** the theme rule `h1,h2,h3,h4,h5,h6 { font-family: "Playfair
  Display", serif; font-weight: 700; color: #000000; }` — serif headings are
  the template's signature. Body: `font-family: "Roboto", sans-serif;
  font-size: 14px; font-weight: 300; line-height: 24px; color: #777777;`.
  Nav links: Roboto 600 12px uppercase (line-height 80px over the hero).
  Load Playfair Display 700 + Roboto 300/400/500/600 via Google Fonts
  `<link>` in `index.html`.
- **DOM skeleton (section order 1:1, from preview HTML):**
  1. `header.header_area` — absolute over the hero, transparent navbar.
     Left: cube logo + wordmark "Taxa" (recreation: "outpost"). Center:
     uppercase white links — Home · Packages · Pages (dropdown: About,
     Book trip, Elements) · Blog (dropdown: Blog, Blog Details) · Contact;
     active/hover link color `#ff2f8b`; dropdown items white bg,
     active/hover bg `#ff2f8b` with white text. Right: outlined
     "BOOK A TRIP" `.primary-btn` variant (transparent bg, 1px white
     border, white text, padding 7px 28px, hover text/border `#ff2f8b`)
     + search icon opening a search overlay (input placeholder "Search
     Here"). On scroll the header becomes `navbar_fixed`: fixed black bar
     (`background: #000000`, shadow `0px 3px 16px rgba(0,0,0,0.1)`,
     nav line-height 70px).
  2. `section.home_banner_area` — fullscreen illustrated hero
     (`img/banner/home-banner.png`, min-height 900px / 650px mobile).
     Centered white content: uppercase eyebrow `<p>Plan a trip to
     Santorini Village</p>` + h2 "Taxa Adventure" (Playfair 120px white →
     80px tablet → 50px mobile). Recreation name in the headline; the
     illustration is approximated by the signature pink→purple gradient
     plus a purple-tinted silhouette layer (see Design tokens).
  3. `section.feature-area.section_gap_top` — centered `.main_title`
     (uppercase gradient-clipped eyebrow "We're Offering these Popular
     Services" + h1 "Getting Adventure with Services" 48px + grey widget
     bar 100×5px `#dddddd`). Three `.single-feature` cards (col-lg-4):
     text details FIRST — h5 title 21px (Desert Riding Turning So much
     Flowery / Relaxation in the Local Beach Campfire / Forest Exploration
     with Energy Package) + lorem paragraph + gradient `.primary-btn`
     "Read More" — then `.feature-thumb` illustration panel BELOW
     (bg `#f7f9fd`, padding 40px). Card: 1px `#eeeeee` border, hover →
     transparent border + `box-shadow 0px 5px 50px rgba(129,74,255,0.2)`.
  4. `div.cta-area.section_gap` — light illustrated band
     (`img/cta-bg.png` cover). Left col-lg-5: h1 "Get Ready for Real time
     Adventure" (48px black) + lorem + solid black `.primary-btn` "Book a
     Trip" (bg `#000000`, line-height 48px, padding 0 38px, letter-spacing
     2px; hover → transparent bg / black text). Right col-lg-6: floating
     illustration (`.cta-img` absolute top -58%).
  5. `section.package-area.section_gap_top` — centered `.main_title`
     ("We're Offering these Trip Packages" / h1 "Famous Trips Packages").
     Three `.single-package` cards (col-lg-4): image thumb; `.date` badge
     absolute top-left (signature gradient `#ff2f8b`→`#9035f9`, white
     text, day in Playfair 32px + month 13px, padding 12px 11px; hover →
     gradient `#fff098`→`#f54e71`); `.meta-top` row (location-arrow icon
     "Stockholmes" + calendar icon "5 days 6 nights"); h4 title (Playfair);
     lorem paragraph; gradient `.primary-btn` "Read More". Card 1px
     `#eeeeee` border, hover shifts the date badge to the warm gradient.
  6. `section.popular-places-area.section_gap_bottom` — centered
     `.main_title` ("We're Offering these Trip Packages" /
     h1 "Popular Places Around the World"). Owl carousel of
     `.single-popular-places` image cards (Santorini Island Dream Holiday
     and Fun package ×4): full-bleed image + absolutely positioned
     centered text block at the bottom (uppercase eyebrow "Proper Guided
     Tour" + h4 white 21px); on hover the image darkens and the text
     slides up (bottom 0 → 80px). Recreation: React-state slider/grid with
     the same hover treatment; no carousel library.
  7. `section.team_area` — centered `.main_title` ("We're Offering these
     Trip Packages" / h1 "Intelligent Team Members"). Four `.team_item`
     cards (col-lg-3): image + `.hover` white info box (width 90%,
     absolute, bottom -120px → slides up on hover, padding 20px) with h4
     name "Randy Weaver" + p role "Senior Barrister at law". Card 1px
     `#eeeeee` border.
  8. `div.cta-area2.section_gap` — dark newsletter band
     (`img/cta-bg2.png` cover, white text). Left col-lg-5: illustration
     (`.cta-img2`, hidden on mobile). Right col-lg-5: h1 48px white
     "Subscribe for our Newsletter" + lorem + form: email input
     (bg `#c251da`, white placeholder "Enter Email Address", 60px tall,
     min-width 390px, square, radius 0) + gradient `.click-btn`
     "subscribe" overlapping the input's right edge (left -45px, top 10px,
     uppercase 12px, square). Recreation: client-side email validation +
     subscribed confirmation state (no MailChimp post).
  9. `section.testimonials-area.section_gap` — centered testimonial
     slider (`.testi-slider`): each `.testi-item` shows a quote icon
     image, h4 name "Fanny Spencer", five Font Awesome stars, and a
     wow-fadein quote paragraph ("As conscious traveling … Mother
     Earth…"). Below: circular avatar thumbnails (`.owl-thumb-item`,
     border-radius 50%, 2px transparent border → `#ff2f8b` on
     active/hover). Recreation: React-state slider (3 testimonials,
     distinct avatar picsum seeds), active thumb gets the pink ring.
  10. `section.home-blog-area` — centered `.main_title` ("We're Offering
      these Trip Packages" / h1 "Latest Posts from Blog"). Three
      `.single-blog` cards (col-lg-4): image thumb; `.blog-meta` row
      (calendar icon "13th Dec" + heart icon "15"); h5 title link (Cruise
      Private Party Booking Available Now ×3); lorem excerpt.
  11. `footer.footer-area` — bg `#04091e`, `.footer_top
      .section_gap_top` (padding-bottom 80px). Four widgets: About Agency
      (paragraph); Navigation Links (two col-5 lists: Home · Features ·
      Services · Portfolio and Team · Pricing · Blog · contact; links
      `#999999` 14px, hover `#ff2f8b`); Newsletter (paragraph + inline
      form: email input placeholder "Enter Email" + gradient `.click-btn`
      submit with an icon); "Instragram Feed" (original typo — recreate as
      "Instagram Feed"; `.instafeed` flex-wrap grid, `li` width 25% →
      8 square thumbs, 2 rows). Footer-bottom: centered copyright line —
      the original reads "This template is made with by Colorlib"; the
      recreation MUST replace it with the Component Dock link per repo
      conventions.
- **Never copied:** all ColorLib images (illustrations, photos, logo),
  CSS files, icon fonts (lnr/fa), carousel scripts, MailChimp endpoint.
  Placeholder images: `https://picsum.photos/seed/outpost-<n>/<w>/<h>`
  (deterministic), fonts via Google Fonts, icons via lucide-react +
  inline-SVG social icons. No ColorLib strings anywhere in `apps/outpost`.

## Design tokens (from `css/style.css`)

| Token | Value | Usage |
| --- | --- | --- |
| brand gradient | `linear-gradient(90deg, #ff2f8b 0%, #9035f9 100%)` | primary buttons, gradient-clipped section eyebrows, package date badge, newsletter submit buttons |
| brand pink | `#ff2f8b` | gradient start; nav active/hover; dropdown active bg; testimonial active ring; feature-card hover shadow tint |
| brand purple | `#9035f9` | gradient end; hero sky tone |
| date-hover gradient | `linear-gradient(90deg, #fff098 0%, #f54e71 100%)` | package `.date` badge on card hover |
| black | `#000000` | headings (Playfair), CTA button bg, fixed navbar bg |
| footer navy | `#04091e` | footer background |
| body text | `#777777` | body copy, nav dropdown borders |
| feature panel | `#f7f9fd` | `.feature-thumb` illustration panel bg |
| card border | `#eeeeee` | feature/package/team card borders |
| newsletter input | `#c251da` | subscribe-band email input bg |
| title bar | `#dddddd` | `.title-widget-bg` 100×5px grey bar under section titles |
| footer link | `#999999` | footer nav links (hover `#ff2f8b`) |
| hover shadow | `rgba(129,74,255,0.2)` | feature-card hover `box-shadow 0 5px 50px` |
| white | `#FFFFFF` | hero headline, navbar links, outlined button, card hover titles |

- Fonts: Playfair Display 700 (ALL headings + package date day);
  Roboto 300/400/500/600 (body + UI; Google Fonts `<link>` in `index.html`).
- Type scale: hero h2 120px white (80px tablet / 50px mobile); section h1
  48px black Playfair (36px mobile); card h4/h5 21px Playfair; body 14px/300
  `#777777` line-height 24px; nav links & buttons 12px weight 600
  uppercase; eyebrows uppercase with letter-spacing 1px, gradient-clipped
  text (`background-clip: text`, `color: transparent`).
- Buttons: ALL square (radius 0), Roboto 600 12px uppercase —
  gradient `.primary-btn` (default; hover re-applies the same gradient);
  navbar variant transparent + 1px white border (hover `#ff2f8b`);
  CTA variant solid `#000000` (hover transparent / black text);
  newsletter `.click-btn` gradient square (white icon/label).
- Radii: buttons/cards/inputs/badges square (0); testimonial thumbnails
  50% (circular).
- Section rhythm: `.section_gap` 120px vertical (80px ≤991px);
  `.section_gap_top` 120px top; `.section_gap_bottom` 120px bottom.
- Card hover pattern: feature cards → transparent border + purple glow
  shadow; package cards → date badge swaps to the warm gradient; popular
  places → darkened image + slide-up title; team cards → white info box
  slides up from below the image.
- Header: absolute transparent over the hero (nav line-height 80px, white
  uppercase links); scrolled state = fixed black bar, line-height 70px,
  shadow `0px 3px 16px rgba(0,0,0,0.1)`.
- Hero: the original is a flat illustrated scene (not a photo). Recreate
  with the signature pink→purple gradient sky + a purple-tinted silhouette
  layer (picsum seed `outpost-hero` under a heavy brand-gradient overlay,
  or layered CSS gradients); centered white eyebrow + huge white serif
  headline.
- Placeholder images (picsum, deterministic): hero `outpost-hero`;
  feature illustrations `outpost-service-1..3`; CTA band `outpost-cta`;
  package photos `outpost-package-1..3`; popular places
  `outpost-place-1..4`; team `outpost-team-1..4`; newsletter band
  `outpost-newsletter`; testimonial avatars `outpost-testi-1..3`;
  blog photos `outpost-blog-1..3`; instagram thumbs `outpost-insta-1..8`.
  Icons from lucide-react (Menu, X, Search, ChevronDown, MapPin,
  Calendar, Heart, Quote, ArrowRight, Navigation) plus inline-SVG brand
  icons for the footer social row.

## Requirements

### Requirement: Transparent navbar over hero that fixes black on scroll

The system SHALL render a transparent navbar over the hero with the
recreation wordmark, uppercase white links (two with dropdowns), an
outlined "BOOK A TRIP" button, and a search toggle; scrolled state fixes
a black bar.

#### Scenario: Desktop navbar

- **GIVEN** the Outpost app is rendered
- **WHEN** the page loads at the top
- **THEN** the header SHALL render absolutely over the hero with a
  transparent background
- **AND** it SHALL show the "outpost" wordmark (cube icon + text) on the
  left — white over the hero (recreation name; the source wordmark is
  never reused)
- **AND** it SHALL show the uppercase white Roboto 600 12px links
  Home · Packages · Pages · Blog · Contact, spaced with ~45px gaps
- **AND** Pages SHALL open a dropdown (About · Book trip · Elements) and
  Blog SHALL open a dropdown (Blog · Blog Details) — white bg, items with
  `#ededed` bottom borders, active/hover item bg `#ff2f8b` with white text
- **AND** the active link and hover states SHALL use `#ff2f8b`
- **AND** a "BOOK A TRIP" outlined button SHALL render at the right
  (transparent bg, 1px `#ffffff` border, white uppercase text, padding
  7px 28px; hover text/border `#ff2f8b`), scrolling to the booking/newsletter
  section
- **AND** a search icon button SHALL render (lucide Search,
  `aria-label`) opening a full-width search overlay with an input
  ("Search Here" placeholder) and a close control

#### Scenario: Mobile menu and scrolled state

- **GIVEN** the header is rendered
- **WHEN** the viewport is mobile
- **THEN** a hamburger toggle (lucide Menu/X, `aria-expanded`) SHALL open
  a stacked link panel (the original shows border-bottom `#ededed33`
  links, line-height 40px, max-height 340px scroll)
- **WHEN** the user scrolls the page down
- **THEN** the header SHALL become a fixed black bar
  (`background: #000000`, shadow `0px 3px 16px rgba(0,0,0,0.1)`, nav
  line-height 70px) sliding in from the top
- **AND** clicking a link SHALL close the menu and smooth-scroll to the
  section

### Requirement: Fullscreen illustrated hero with serif headline

The system SHALL render a fullscreen illustrated hero (pink→purple sky +
mountain/forest silhouettes) with a centered uppercase eyebrow and a huge
white Playfair Display headline using the recreation name.

#### Scenario: Hero composition

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL render fullscreen (min-height ~900px desktop /
  650px mobile) with the illustrated treatment: signature gradient sky
  (`#ff2f8b`→`#9035f9` tones) + purple-tinted silhouette layer
  (picsum `outpost-hero` under a heavy brand-gradient overlay, or layered
  CSS gradients)
- **AND** it SHALL show the centered white uppercase eyebrow "Plan a trip
  to Santorini Village"
- **AND** it SHALL show the centered white Playfair Display h2 "Outpost"
  — 120px desktop / 80px tablet / 50px mobile, weight 700
- **AND** all hero text SHALL be white and centered, layered above the
  illustration

### Requirement: Services feature cards (text above illustration panel)

The system SHALL render a centered gradient-eyebrow section title and
three service cards with title, copy, gradient "Read More" button, and an
illustration panel below; cards glow purple on hover.

#### Scenario: Section header

- **GIVEN** the feature section (`#services`) is rendered
- **WHEN** the user scrolls to it
- **THEN** it SHALL show the centered uppercase gradient-clipped eyebrow
  "We're Offering these Popular Services" (background-clip: text,
  `#ff2f8b`→`#9035f9`, letter-spacing 1px)
- **AND** the h1 "Getting Adventure with Services" (Playfair 48px black)
- **AND** the 100×5px `#dddddd` widget bar beneath

#### Scenario: Feature cards

- **GIVEN** the section header is rendered
- **WHEN** the three cards render (3 columns desktop / 2 tablet / 1 mobile)
- **THEN** each card SHALL show the details FIRST — h5 21px title
  (Desert Riding Turning So much Flowery / Relaxation in the Local Beach
  Campfire / Forest Exploration with Energy Package), a lorem paragraph,
  and a gradient `.primary-btn` "Read More" — then the illustration panel
  BELOW (bg `#f7f9fd`, padding 40px, picsum `outpost-service-1..3`)
- **AND** each card SHALL have a 1px `#eeeeee` border
- **WHEN** the user hovers a card
- **THEN** the border SHALL become transparent and a purple glow
  `box-shadow: 0px 5px 50px rgba(129,74,255,0.2)` SHALL appear
  (transition ~0.3s)

### Requirement: CTA band with black Book a Trip button

The system SHALL render a light illustrated band with a large heading,
copy, a solid black button, and a floating illustration.

#### Scenario: CTA composition

- **GIVEN** the CTA band is rendered
- **WHEN** the user scrolls to it
- **THEN** it SHALL show the h1 "Get Ready for Real time Adventure"
  (Playfair 48px black) + lorem paragraph on the left (col ~5/12)
- **AND** a solid black `.primary-btn` "Book a Trip" (bg `#000000`,
  white uppercase text, line-height 48px, padding 0 38px, letter-spacing
  2px; hover → transparent bg with black text), scrolling to the
  newsletter section
- **AND** a floating illustration on the right (picsum `outpost-cta`,
  absolutely positioned overlapping the band's top edge; hidden on
  mobile per the original)
- **AND** the band background SHALL be a light treatment (picsum
  `outpost-cta-bg` or light gradient) matching the reference's airy
  illustrated band

### Requirement: Trip package cards with gradient date badge

The system SHALL render a centered section title and three package cards
with photo, gradient date badge (warm gradient on hover), trip meta,
title, copy, and a gradient button.

#### Scenario: Package cards

- **GIVEN** the package section (`#packages`) is rendered
- **WHEN** the user scrolls to it
- **THEN** it SHALL show the centered eyebrow "We're Offering these Trip
  Packages" + h1 "Famous Trips Packages" + grey widget bar
- **AND** three cards SHALL render (picsum `outpost-package-1..3`), each
  with: an image thumb; a `.date` badge absolute top-left (signature
  gradient `#ff2f8b`→`#9035f9`, white text, day "18" in Playfair 32px +
  "December" 13px, square); a meta row (MapPin icon "Stockholmes" +
  Calendar icon "5 days 6 nights"); an h4 Playfair title "Desert Riding
  Turning So much Flowery"; a lorem paragraph; and a gradient
  `.primary-btn` "Read More"
- **AND** cards SHALL have 1px `#eeeeee` borders
- **WHEN** the user hovers a card
- **THEN** the date badge SHALL swap to the warm gradient
  `linear-gradient(90deg, #fff098 0%, #f54e71 100%)` (~0.3s transition)

### Requirement: Popular Places image carousel with slide-up titles

The system SHALL render a centered section title and full-bleed image
cards whose title block slides up and the image darkens on hover.

#### Scenario: Place cards

- **GIVEN** the popular-places section (`#places`) is rendered
- **WHEN** the user scrolls to it
- **THEN** it SHALL show the centered eyebrow "We're Offering these Trip
  Packages" + h1 "Popular Places Around the World" + grey widget bar
- **AND** four image cards SHALL render (picsum `outpost-place-1..4`)
  showing a centered bottom text block: uppercase eyebrow "Proper Guided
  Tour" + white h4 21px "Santorini Island Dream Holiday and Fun package"
- **WHEN** the user hovers a card
- **THEN** the image SHALL darken (overlay) and the text block SHALL
  slide up (bottom 0 → 80px, opacity 0 → 1, ~0.3s)
- **AND** the section SHALL behave as a slider/grid without any carousel
  library (React state or static responsive grid — no owl-carousel)

### Requirement: Team grid with slide-up info boxes

The system SHALL render a centered section title and four team cards
whose white name/role box slides up on hover.

#### Scenario: Team cards

- **GIVEN** the team section (`#team`) is rendered
- **WHEN** the user scrolls to it
- **THEN** it SHALL show the centered eyebrow "We're Offering these Trip
  Packages" + h1 "Intelligent Team Members" + grey widget bar
- **AND** four cards SHALL render (4 cols desktop / 2 tablet / 1 mobile;
  picsum `outpost-team-1..4`), each with a 1px `#eeeeee` border
- **WHEN** the user hovers a card
- **THEN** a white info box (width 90%, padding 20px) SHALL slide up from
  below the image (bottom -120px → in place, ~0.3s) showing h4 "Randy
  Weaver" + p "Senior Barrister at law"

### Requirement: Newsletter subscribe band

The system SHALL render a dark purple band with a floating illustration,
white heading, purple email input, and an overlapping gradient subscribe
button, validated client-side.

#### Scenario: Subscribe band

- **GIVEN** the newsletter band (`#newsletter`) is rendered
- **WHEN** the user scrolls to it
- **THEN** it SHALL have a dark purple illustrated background (picsum
  `outpost-newsletter` under the brand gradient, or the gradient alone)
  with white text, ~120px section padding
- **AND** the left column SHALL show an illustration (hidden on mobile
  per the original)
- **AND** the right column SHALL show the white Playfair h1 "Subscribe
  for our Newsletter" (48px) + lorem paragraph
- **AND** the form SHALL render an email input (bg `#c251da`, white
  placeholder "Enter Email Address", 60px tall, min-width ~390px,
  square) with the gradient `.click-btn` "subscribe" button overlapping
  its right edge (uppercase 12px white, square)
- **WHEN** the user submits a valid email
- **THEN** a subscribed confirmation state SHALL render (no MailChimp
  post); invalid input shows an inline error and blocks submission

### Requirement: Testimonial slider with avatar thumbnails

The system SHALL render a centered testimonial slider (quote icon, name,
five stars, quote) with circular avatar thumbnails whose active ring is
pink.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is rendered
- **WHEN** the user scrolls to it
- **THEN** the centered slider SHALL show per slide: a quote icon, h4
  name (e.g. "Fanny Spencer"), five star icons (lucide Star, filled),
  and the quote paragraph ("As conscious traveling … Mother Earth…")
- **AND** three slides SHALL exist (React state — no carousel library)
- **WHEN** the user activates an avatar thumbnail
- **THEN** the active slide SHALL switch and the active thumbnail SHALL
  gain a 2px `#ff2f8b` circular ring (hover shows the same ring)
- **AND** thumbnails SHALL be circular (border-radius 50%) with a
  transparent 2px border by default (picsum `outpost-testi-1..3`)

### Requirement: Blog posts row

The system SHALL render a centered section title and three blog cards
with photo, meta row, title link, and excerpt.

#### Scenario: Blog cards

- **GIVEN** the blog section (`#blog`) is rendered
- **WHEN** the user scrolls to it
- **THEN** it SHALL show the centered eyebrow "We're Offering these Trip
  Packages" + h1 "Latest Posts from Blog" + grey widget bar
- **AND** three cards SHALL render (picsum `outpost-blog-1..3`), each
  with a meta row (Calendar icon "13th Dec" + Heart icon "15"), an h5
  title link "Cruise Private Party Booking Available Now", and a lorem
  excerpt

### Requirement: Dark navy footer with widgets and Component Dock link

The system SHALL render a `#04091e` footer with About Agency, Navigation
Links, Newsletter, and Instagram Feed widgets, plus a centered
footer-bottom line linking Component Dock.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to it
- **THEN** the footer SHALL have bg `#04091e` with ~120px top padding and
  four widgets: About Agency (paragraph); Navigation Links (two lists —
  Home · Features · Services · Portfolio and Team · Pricing · Blog ·
  contact; links `#999999` 14px, hover `#ff2f8b`); Newsletter (paragraph
  + inline email form: input "Enter Email" + gradient square `.click-btn`
  submit with an icon); "Instagram Feed" (the original misspells
  "Instragram" — fix it; 8 square picsum thumbs `outpost-insta-1..8` in a
  flex-wrap grid, 4 per row)
- **AND** the newsletter form SHALL validate the email client-side and
  show a confirmation state

#### Scenario: Footer bottom and conventions

- **GIVEN** the footer bottom is rendered
- **WHEN** the footer-bottom line renders
- **THEN** it SHALL show a centered copyright with the current year
- **AND** it SHALL link `https://www.componentdock.com/` branded
  "Component Dock" (the ColorLib attribution is NEVER copied)

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec (whole-repo validate may
      fail on unrelated legacy specs — check this spec's own `✓` line).
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/outpost`
      (`scripts/verify-app.sh outpost` in FAST_MODE; full `npm run gate`
      in CI).
- [ ] Visual fidelity: transparent navbar over the hero (white uppercase
      links with pink hover, Pages/Blog dropdowns, outlined "BOOK A TRIP"
      button, search overlay; fixed black bar on scroll), fullscreen
      illustrated hero (pink→purple gradient sky + silhouettes, uppercase
      eyebrow, white 120px Playfair "Outpost"), services cards (text
      above `#f7f9fd` illustration panel, purple glow hover), light CTA
      band (black "Book a Trip" button + floating illustration), package
      cards (gradient date badge → warm gradient on hover, meta icons),
      Popular Places cards (darken + slide-up title), team grid
      (slide-up white info box), dark purple newsletter band (`#c251da`
      input + overlapping gradient subscribe button), testimonial slider
      (quote icon, stars, circular thumbs with pink active ring), blog
      row, `#04091e` footer (About Agency, Navigation Links, Newsletter,
      Instagram Feed ×8) + Component Dock footer-bottom link — all
      matching the Taxa preview 1:1.
- [ ] Design tokens in `@theme` as listed above; Playfair Display 700 for
      all headings + Roboto for body/UI via Google Fonts; signature
      gradient `#ff2f8b`→`#9035f9` on buttons, eyebrows, date badges, and
      newsletter submits; square buttons/cards everywhere (circular only
      for testimonial thumbs); 120px section rhythm.
- [ ] Placeholder images use `picsum.photos/seed/outpost-<n>/<w>/<h>`
      (hero, service ×3, cta ×2, package ×3, place ×4, team ×4,
      newsletter, testi ×3, blog ×3, insta ×8); icons from lucide-react
      with inline-SVG social icons; no ColorLib assets, CSS, or strings
      anywhere in `apps/outpost`.
- [ ] `public/CNAME` = `outpost.free.componentdock.com`; package
      `@free-react-templates/outpost`; `"homepage"`
      = `https://outpost.free.componentdock.com`; lockfile registers the
      workspace; `injectUiSource()` present in `vite.config.ts`; footer
      links Component Dock.
