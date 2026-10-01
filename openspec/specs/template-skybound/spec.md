# Template: Skybound (Travel Template)

## Purpose

Skybound is a single-page travel website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Beyond"
travel website template (see TEMPLATES.md, Travel section, line 2976), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The reference is an airy, white, editorial travel-agency page anchored by a
gold/amber outline-button system and Playfair Display serif headings: a
top-right "book a table" ghost button above a split hero (serif headline +
lorem + gold "Get Started" outline button on the left; Santorini photo with a
blue pulsing play button + "Watch Intro Video" overlay on the right), an
overlapping-photo + destination-counter section (London/Turkey/Paris/Thailand
cards that flood blue on hover), a package carousel whose cards reveal a
dark hover overlay with gold pricing, a 3-card amenities band over a light
lavender backdrop, a package-search form on a dark photo panel, a
testimonial carousel, a newsletter subscribe band, a 3-card blog row over a
second lavender band, and a dark plum footer with navigation, newsletter,
instafeed grid, and social icons.

Brand colors: gold/amber `#f8b600` (primary accent — outline-button border,
hover fill, price text, footer newsletter button, blog pagination, link
hovers); blue `#4681ff` (secondary — video play-button circle, counter-card
hover flood, off-canvas menu link hover + dropdown background, package-search
button border/hover); star gold `#f9af11`. Headings `#222222`; body text
`#777777`; light lavender bands `#f9f9ff` (amenities bottom band, blog top
band); footer background `#1e1c27`; footer divider `#333333`; footer nav
links `#777777`; footer social icons `#cccccc`; newsletter input text
`#cccccc`. Fonts: "Playfair Display" 700 for all headings, "Roboto" 400/500
for body/buttons (Google Fonts import `Playfair+Display:700|Roboto:400,400i,500`).
Buttons are SQUARE (`border-radius: 0`) — the signature `.main_btn` is a
transparent 1px gold outline with a letter-spaced uppercase label and an
arrow image hanging past the right edge.

## Design reference (replication findings)

- **Original:** ColorLib "Beyond" — travel template
  (source: https://colorlib.com/wp/template/beyond/). Listed in
  TEMPLATES.md `## Travel (44)` at line 2976; slug `beyond` appears exactly
  once.
- **Live preview URL:** https://preview.colorlib.com/theme/beyond/
  (HTTP 200, 29,215 bytes, verified 2026-10-01). HTML saved to
  `/tmp/beyond.html`; theme stylesheet `css/style.css` (HTTP 200, 81,615
  bytes) saved to `/tmp/beyond-style.css`. The preview DOM is authoritative
  for section order and copy; the screenshot
  (`beyond-free-template.jpg`, real JPEG, reviewed visually) is
  authoritative for the desktop hero text treatment (dark serif headline +
  dark gold-outline button on white — the stylesheet's
  `.header-right .main_btn { color: #fff }` variant is the mobile state,
  where the hero text column takes a photo background).
- **Stylesheets in the reference:** `css/style.css` (theme — canonical
  tokens), `css/bootstrap.css` (stock Bootstrap 4 — layout only), icon
  fonts `font-awesome.min.css` + `vendors/linericon/style.css` (NEVER
  copied → lucide-react), `vendors/owl-carousel/owl.carousel.min.css`
  (slider lib — NEVER copied → React state), `vendors/nice-select`,
  `vendors/popup/magnific-popup.css` (lightbox → local popover),
  `vendors/swiper`, `vendors/animate-css`, `vendors/jquery-ui`, `vendors/scroll`.
- **Fonts:** `@import url("https://fonts.googleapis.com/css?family=Playfair+Display:700|Roboto:400,400i,500")`
  in style.css. Headings `h1–h6 { font-family: "Playfair Display", serif;
  font-weight: 700; color: #222222 }`; body `{ font-family: "Roboto",
  sans-serif; font-size: 14px; line-height: 27px; font-weight: 400;
  color: #777777 }`. Load both via Google Fonts `<link>` in `index.html`.
- **Button `.main_btn` (the template's signature):** `padding: 0 25px;
  background: transparent; color: #222222; font-size: 12px; font-weight: 500;
  line-height: 48px; border: 1px solid #f8b600; border-radius: 0;
  text-transform: uppercase; letter-spacing: 2px;` with an arrow icon
  absolutely positioned `top: 50%; right: -30px` (translateY(-50%);
  slides to `right: -38px` on hover). Hover → `background: #f8b600;
  color: #222222; border: 1px solid #f8b600`. Variants:
  - hero text-column button — dark text on white desktop; white text
    (`color: #fff`, arrow inverted) in the mobile state where the text
    column gets a photo background (`background: url(banner-img.jpg)
    center/cover; padding: 100px 120px` under 768px).
  - package-search submit — `border-color: #4681ff; color: #fff`;
    hover → `background: #4681ff; border-color: #4681ff; color: #fff`.
  - newsletter "Subscribe" — same gold outline, arrow hidden
    (`.newsletter-area .main_title .input-group .main_btn img { display: none }`).
  - footer `.click-btn` — `background: #f8b600; border-radius: 0; border: 0;
    padding: 6px 12px`, white arrow icon.
- **Video play button:** circle (`border-radius: 50%`), `background: #4681ff`,
  `box-shadow: 0 10px 30px rgba(39, 0, 110, 0.3)`, white CSS triangle
  (`border-left: 20px solid #fff; border-top/bottom: 15px transparent`),
  plus a pulsing white `:before` ring (`pulse-border` 2s infinite).
  Caption `.watch` sits right of it on the photo: white h5 "Watch Intro
  Video" (18px) + uppercase white p "You will love our execution" (12px).
- **Counter cards:** `single_counter` — `border: 1px solid #eeeeee;
  padding: 30px; height: 180px; width: 165px; inline-block; margin-right: 30px`;
  thumb icon + `h4` place name (Playfair 24px/700) + `p` count. Hover →
  `background: #4681ff; color: #fff; border: 1px solid transparent` and the
  icon gets `filter: brightness(0) invert(1)`.
- **Package/gallery cards:** `single-gallery` image + hover overlay
  (`:after` black at `opacity .65`) with `gallery-content` sliding in
  (`opacity 0→1`, `bottom: -20%→0`, `left: -10%→0`): white h4 "Proper
  Guided Tour" (24px), gold price `#f8b600` "$56" + "/day", blurb "Santorini
  Island Dream Holiday and Fun package", star row (`#f9af11`), and a
  white 50×50 pushpin lightbox button (`light-box`) at top-right that fades
  in (`right: -10px→30px`).
- **Amenities/blog cards:** `single-amenities` / `single-blog` —
  `border: 1px solid #eeeeee`; thumb has a white sheen `:before`
  (`rgba(255,255,255,0.4)`, sweeps `left: 110%→-130%` over 0.5s on hover);
  details `padding: 25px`; meta `span` uppercase; `h5` Playfair 18px.
  Hover → `box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-color: transparent`.
- **Section rhythm:** `.section_gap { padding: 80px 0 }`; `.main_title h1`
  48px desktop (36px mobile), `text-transform: capitalize`,
  `margin-bottom: 30px`; `.top-btn-area { padding: 25px 0; text-align: right }`;
  footer `.footer-top { padding: 120px 0 }`; footer bottom
  `padding: 26px 0; border-top: 1px solid #333333`.
- **Lavender bands:** `.amenities-area:before` — absolute bottom band
  `height: 39.5%; background: #f9f9ff`; `.blog-area:before` — absolute top
  band `height: 60.6%; background: #f9f9ff`. Both are decorative bands
  behind the card rows, not full-section backgrounds.
- **Package-search panel:** `.contact-form-section` — `background:
  url(pac-search-bg.jpg) center/cover` (→ picsum seed) with a black
  overlay `:after` at `opacity: .5`, `padding: 70px 50px`, centered; inputs
  transparent with `border-bottom: 1px solid rgba(255,255,255,0.2)`,
  `padding: 25px 20px`, 13px white placeholders; selects white-text
  (nice-select → native styled selects); centered submit `.main_btn`.
- **Off-canvas menu:** no fixed navbar — a hamburger (`.canvus_menu
  .toggle_icon`: 3 stacked 2px #222222 bars, 30px wide, fixed top-left;
  open state rotates into an X at `left: 50px`) opens `.side_menu`
  (`position: fixed; left: -500px → 0; max-width: 500px; background: #fff;
  padding: 130px 115px; box-shadow: 0 20px 50px rgba(70,129,255,0.1)`):
  logo + list Home · Packages · Pages (dropdown: About-us, Amenities,
  Elements) · Blog (dropdown: Blog, Blog Details) · Contact. Links 18px/500
  #222222, hover → `#4681ff`; dropdown panel `background: #4681ff`, white items.
  Inner pages are NOT recreated — nav links become scroll anchors `#` or
  section targets.
- **Section order (live DOM, in order):** off-canvas `.side_menu` →
  `.canvus_menu` hamburger → `section.top-btn-area` ("book a table" ghost
  button, right-aligned) → `section.home-banner-area.relative` (split hero)
  → `div.popular-place-area.section_gap` (3 overlapping photos + heading
  + 4 destination counter cards) → `section.package-area` (title block +
  package carousel) → `section.amenities-area.section_gap` (3 amenity cards
  over lavender bottom band) → `section.package-search-area.section_gap`
  (heading + dark photo search panel) → `section.testimonial_area`
  (hidden left image column + 2-quote carousel) →
  `section.newsletter-area.section_gap` (subscribe form; right image column
  is `display:none` in the reference — keep it hidden) →
  `section.blog-area.section_gap` (3 blog cards over lavender top band) →
  `footer.footer-area` (`#1e1c27`; About Crafted · Navigation Links ·
  Newsletter · Instafeed + copyright bar with social icons).
- **Reference typos kept as content cues (may be lightly corrected):**
  "Benifits Get Our Customers" (section heading, used twice), "Luxerious",
  "Within a Shor Time", "Childs". Paraphrase is fine; keep the same kind
  of content.
- **Footer credit:** reference says "This template is made with ❤ by
  Colorlib" with a colorlib.com link — reword for Skybound, NO ColorLib
  attribution; footer MUST link https://www.componentdock.com/
  ("Component Dock").

## Requirements

### Requirement: Off-canvas menu with hamburger toggle

The system SHALL render a fixed hamburger toggle that opens a left
off-canvas navigation panel with the Skybound brand and site links.

#### Scenario: Menu closed and opened

- **GIVEN** the Skybound app is rendered
- **WHEN** the page loads
- **THEN** a fixed hamburger control (three 2px #222222 bars, 30px wide)
  SHALL sit at the top-left of the viewport
- **AND** the off-canvas panel SHALL be hidden off-screen (`left: -500px`)
  with a white background, `max-width: 500px`, generous padding, and a soft
  shadow
- **WHEN** the user activates the hamburger
- **THEN** the panel SHALL slide in (`left: 0`) and the toggle SHALL become
  an X (bars rotate into a cross) with `aria-expanded="true"`
- **AND** clicking the toggle or a nav link SHALL close the panel
  (`aria-expanded="false"`)

#### Scenario: Panel contents

- **GIVEN** the panel is open
- **THEN** it SHALL show the Skybound brand (logo mark + wordmark) and the
  link list Home · Packages · Pages · Blog · Contact
- **AND** "Pages" SHALL expand a dropdown listing About-us, Amenities,
  Elements; "Blog" SHALL expand Blog and Blog Details (static links —
  inner pages are not recreated; links resolve to `#` or home-page scroll
  targets)
- **AND** link hover SHALL turn `#4681ff` and the open dropdown panel SHALL
  use a `#4681ff` background with white items

### Requirement: Top action bar with "book a table" ghost button

The system SHALL render a right-aligned gold-outline action button above
the hero.

#### Scenario: Top button

- **GIVEN** the top action bar is rendered
- **WHEN** the page loads
- **THEN** it SHALL show a right-aligned `.main_btn`-style button labeled
  "book a table" (uppercase, letter-spacing 2px, transparent background,
  1px solid `#f8b600` border, `border-radius: 0`, #222222 text, 12px/500,
  line-height 48px, padding 0 25px) with an arrow icon hanging past the
  right edge (`right: -30px`)
- **AND** on hover the button SHALL fill `#f8b600` with `#222222` text and
  the arrow SHALL slide further out (`right: -38px`)
- **AND** the bar SHALL have `padding: 25px 0` and right-aligned text

### Requirement: Split hero with serif headline and video play overlay

The system SHALL render a two-column hero: text column left, photo with
play overlay right.

#### Scenario: Desktop hero

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** the left column SHALL show an h1 "Santorini Island in Greece"
  (Playfair Display 700, `#222222`, with a line break after "Island") over
  white, a lorem subtext paragraph, and a gold-outline `.main_btn` labeled
  "Get Started" with arrow (dark text on desktop)
- **AND** the right column SHALL show a full-width travel photo (picsum
  seed placeholder; Santorini-style coastal subject)
- **AND** overlaid at the photo's lower-left SHALL be the video popup: a
  blue (`#4681ff`) circular play button with white triangle, soft shadow
  `0 10px 30px rgba(39,0,110,0.3)`, and a pulsing white ring, beside a
  white caption block ("Watch Intro Video" h5 18px + uppercase
  "You will love our execution" 12px)
- **AND** activating the play button SHALL open a lightweight local
  popover/modal (stateful; no third-party embed required) with an
  accessible close control

#### Scenario: Mobile hero

- **GIVEN** the hero at a viewport under 768px
- **THEN** the photo column SHALL be hidden and the text column SHALL take
  a photo background (picsum seed) with a dark overlay, white headline and
  subtext, and a white-text gold-outline "Get Started" button (arrow
  inverted to white)

### Requirement: Popular places with overlapping photos and destination counters

The system SHALL render a split section pairing an overlapping photo stack
with a heading and four destination counter cards.

#### Scenario: Photo stack

- **GIVEN** the popular-places section is rendered
- **WHEN** it loads
- **THEN** the left side SHALL show 3 overlapping travel photos (picsum
  seeds; sizes ~80% / 50% / 50% with offset positioning to create the
  layered collage seen in the reference)
- **AND** the right side SHALL show the heading h1 "Popular Places Around
  The World" (line breaks per reference) plus a lorem paragraph

#### Scenario: Counter cards

- **GIVEN** the counter grid renders
- **THEN** 4 cards SHALL show: London · 135 Places · Turkey · 75 Places ·
  Paris · 150 Places · Thailand · 85 Places — each with a small icon
  (lucide), a Playfair 24px/700 name, and a count line
- **AND** each card SHALL be `border: 1px solid #eeeeee`, ~165×180px,
  padding 30px, staggered (top-two row + offset bottom-two per the
  reference grid)
- **AND** on hover the card SHALL flood `#4681ff` with white text and a
  white-inverted icon (0.3s transition)

### Requirement: Best tour plans carousel with hover-reveal package cards

The system SHALL render a title block beside a carousel of package cards
whose details reveal on hover.

#### Scenario: Title block and CTA

- **GIVEN** the package-area section is rendered
- **THEN** a title block SHALL show h1 "Best Tour Plans Recently" + two
  lorem paragraphs + a gold-outline `.main_btn` "Browse all Packages" with
  arrow
- **AND** on desktop the title block SHALL occupy the left column with the
  carousel on the right (per the reference's `padding-left: 50%` title
  treatment — implementer may use a two-column grid that visually matches)

#### Scenario: Package cards

- **WHEN** the carousel renders
- **THEN** it SHALL show 3 package cards (picsum seeds), each: photo +
  hover black overlay (`opacity .65`) + sliding-in content block (white
  h4 "Proper Guided Tour", gold price "$56" + "/day" (`#f8b600`), blurb
  "Santorini Island Dream Holiday and Fun package", a star rating row with
  `#f9af11` stars, and a white 50×50 pushpin lightbox button top-right)
- **AND** the carousel SHALL be React-state driven (no owl carousel): dots
  or arrows advance slides, responsive stacking on mobile
- **AND** activating the pushpin SHALL open a local image popover (picsum
  image) with an accessible close control

### Requirement: Amenities cards over lavender band

The system SHALL render three amenity cards above a light-lavender
bottom band.

#### Scenario: Amenity cards

- **GIVEN** the amenities section is rendered
- **WHEN** it loads
- **THEN** a left-aligned title SHALL show h1 "Benifits Get Our Customers"
  (reference typo — paraphrase acceptable) + lorem
- **AND** 3 cards SHALL render (3-up desktop, stacked mobile): photo thumb
  (picsum seed) with white sheen sweep on hover (0.5s, `rgba(255,255,255,0.4)`
  sliding across), uppercase meta line "Within a Shor Time", Playfair 18px
  titles — "Luxerious Car Rental Service Available", "Cruise Private Party
  Booking Available", "Tremendous Options for Food Lovers" — and a lorem
  blurb
- **AND** cards SHALL be `border: 1px solid #eeeeee`, padding 25px;
  hover → soft shadow `0 10px 30px rgba(0,0,0,0.1)` + transparent border
- **AND** the section SHALL have an absolute bottom band (≈40% height)
  filled `#f9f9ff` behind the lower portion of the cards

### Requirement: Package search form on dark photo panel

The system SHALL render a split search section: heading left, dark
photo-backed form panel right.

#### Scenario: Search panel

- **GIVEN** the package-search section is rendered
- **WHEN** it loads
- **THEN** the left side SHALL show h1 "Search Suitable & Desired Package
  for You" (line breaks per reference) + two lorem paragraphs
- **AND** the right side SHALL show a panel with a travel photo background
  (picsum seed) under a black overlay (`opacity .5`), `padding: 70px 50px`,
  containing an h4 "Package Search" (white, 24px) and a form with:
  Destination text input, Check in Date, Check Out Date, an Adults select,
  and a Childs select — transparent inputs with white bottom-border
  (`rgba(255,255,255,0.2)`), white placeholder text, 13px
- **AND** the centered submit SHALL be a `.main_btn` variant labeled
  "Browse all Packages" (uppercase) with `border-color: #4681ff`, white
  text, hover → `background/border: #4681ff`
- **AND** the form SHALL be a controlled React form: selects offer
  numeric options (e.g. 1–5 adults/children — the reference repeats
  identical options; recreate sensible values), submit is blocked until
  required fields are filled, and a local success acknowledgment is shown
  (no network call)

### Requirement: Testimonial carousel

The system SHALL render a testimonial section with a quote carousel.

#### Scenario: Testimonials

- **GIVEN** the testimonial section is rendered
- **WHEN** it loads
- **THEN** it SHALL show 2 quote slides (React-state carousel): a quote
  icon, a 24px italic lorem testimonial, and an author block
  "Marvel Maison" / "Chief Executive, Amazon"
- **AND** the reference's left image column is `display: none` in CSS —
  the recreation SHALL NOT render that image column (matches the live
  render)
- **AND** carousel dots/arrows SHALL switch slides with state-driven
  behavior

### Requirement: Newsletter subscribe band

The system SHALL render a newsletter section with an email subscribe form.

#### Scenario: Newsletter

- **GIVEN** the newsletter section is rendered
- **WHEN** it loads
- **THEN** a padded title block SHALL show h1 "Subscribe to Get Updated
  for Our Newsletter" (line breaks per reference) + two lorem paragraphs
- **AND** the form SHALL show an email input (white background, square
  corners, ~65% width, `#cccccc` placeholder, bottom-border group
  `#eeeeee`) beside a gold-outline `.main_btn` "Subscribe" (arrow hidden)
  + a small info note line below
- **AND** the reference's right-side image column is `display:none` — the
  recreation SHALL NOT render it
- **AND** submission SHALL validate the email locally and show a success
  acknowledgment (no network call)

### Requirement: Blog cards over lavender band

The system SHALL render three blog cards above a light-lavender top band.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** it loads
- **THEN** a left-aligned title SHALL show h1 "Benifits Get Our Customers"
  + lorem (reference reuses the amenities heading)
- **AND** 3 cards SHALL render (3-up desktop, stacked mobile): photo thumb
  (picsum seed) with the same white sheen hover sweep; meta row with
  calendar icon + "13th Dec", heart icon + "15", comment icon + "04"
  (lucide icons, `#777777`); Playfair 18px titles matching the amenity
  titles ("Luxerious Car Rental Service Available", "Cruise Private Party
  Booking Available", "Tremendous Options for Food Lovers"); lorem blurb
- **AND** hover styling SHALL match the amenities cards (shadow + border
  transparent)
- **AND** the section SHALL have an absolute top band (≈60% height) filled
  `#f9f9ff` behind the upper portion of the cards

### Requirement: Dark plum footer with widgets and Component Dock credit

The system SHALL render a `#1e1c27` footer with four widgets and a
copyright/social bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** the footer top (`padding: 120px 0`) SHALL show 4 columns:
  "About Crafted" (h6 white 18px/600 + the "world has become so fast
  paced..." lorem paragraph), "Navigation Links" (two link columns:
  Home · Services · Project | Team Members · Blog · Contact — `#777777`
  links, hover white), "Newsletter" (h6 + email input + square gold
  `#f8b600` `.click-btn` with white arrow icon + info note), and
  "Instafeed" (h6 + an 8-image grid, 4 per row, picsum seeds)
- **AND** the footer bottom (`padding: 26px 0`, `border-top: 1px solid
  #333333`) SHALL show the copyright text with a gold `#f8b600` link line
  and social icons (`#cccccc`, hover `#f8b600`)
- **AND** the copyright SHALL credit Skybound with NO ColorLib attribution
  and MUST link https://www.componentdock.com/ labeled "Component Dock"
  (mandatory)

### Requirement: Page composition, landmarks, and responsiveness

The system SHALL compose all sections in document order with semantic
landmarks and stay responsive from 320px to 1920px.

#### Scenario: Composition

- **GIVEN** the Skybound app is rendered
- **WHEN** the page loads
- **THEN** the off-canvas menu + hamburger + top button bar SHALL precede
  the main landmark; hero → blog sections SHALL live in the main landmark;
  the footer SHALL be the contentinfo landmark
- **AND** the document title SHALL be "Skybound — Travel Template"
- **AND** the page SHALL be fully responsive (hero stacks text-over-photo
  on mobile, counters 4→2→1, cards 3→2→1, footer widgets stack)
- **AND** no file under `apps/skybound` SHALL reference ColorLib (strings,
  comments, or assets); images use `picsum.photos/seed/skybound-<n>` and
  icons come from `lucide-react`

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec (whole-repo validate may
      fail on unrelated legacy specs — check this spec's own `✓` line).
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/skybound`
      (`scripts/verify-app.sh skybound` in FAST_MODE; full `npm run gate`
      in CI).
- [ ] Visual fidelity: off-canvas menu (hamburger → X, white panel,
      blue dropdowns), right-aligned gold "book a table" ghost button,
      split hero (Playfair headline + gold "Get Started" outline button
      left; photo + blue pulsing play button + "Watch Intro Video" caption
      right), popular places (3 overlapping photos + 4 blue-hover
      destination counters: London 135 / Turkey 75 / Paris 150 / Thailand
      85), package carousel (hover black overlay + gold "$56/day" pricing
      + star row + pushpin lightbox), amenities (3 cards, lavender bottom
      band, sheen hover), package-search (dark photo panel, bottom-border
      inputs, blue submit), testimonials (2-quote carousel, no image
      column), newsletter (subscribe form, no image column), blog (3
      cards, lavender top band), dark plum footer (4 widgets + instafeed +
      Component Dock link) match the Beyond preview 1:1.
- [ ] Design tokens in `@theme`: gold `#f8b600`, blue `#4681ff`, star
      `#f9af11`, headings `#222222`, body `#777777`, lavender `#f9f9ff`,
      footer `#1e1c27`, footer divider `#333333`, footer links `#777777`,
      social idle `#cccccc`, input text `#cccccc`; Playfair Display 700 +
      Roboto 400/500 via Google Fonts `<link>` in `index.html`.
- [ ] Buttons: `.main_btn`-style everywhere = transparent bg, 1px solid
      `#f8b600`, `border-radius: 0`, uppercase 12px/500 letter-spacing
      2px, line-height 48px, arrow hanging `right: -30px` → `-38px` on
      hover, hover fills `#f8b600`; package-search variant blue
      (`#4681ff`); newsletter variant arrowless; footer click-btn square
      gold.
- [ ] Placeholder images use `picsum.photos/seed/skybound-<n>/<w>/<h>`
      (hero photo, 3 popular-place photos, 3 package photos, 3 amenity
      photos, search-panel background, 3 blog photos, 8 instafeed photos);
      icons from lucide-react (menu/x, arrow-right, play, star, pin,
      calendar, heart, message-circle, socials via inline SVG); no
      ColorLib assets or strings copied.
- [ ] PR description states source template (ColorLib "Beyond"), preview
      URL (https://preview.colorlib.com/theme/beyond/), design tokens, and
      what differs (new name Skybound, placeholder images, paraphrased
      copy, inner pages not recreated, hidden testimonial/newsletter image
      columns kept unrendered).
