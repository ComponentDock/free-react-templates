# Template: Trekvoyage (Travel Agency Landing Template)

## Purpose

Trekvoyage is a single-page travel agency landing website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Travel2" template (see TEMPLATES.md, Travel section, line
3005), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is an Untree.co-style travel landing page anchored by a
full-viewport photographic hero slider with a light black overlay. A
transparent (absolute, non-fixed) header sits over it: Playfair Display
wordmark left, white 70%-opacity links right — Home, Dropdown (Elements ▸
Menu One / Menu Two ▸ Sub Menu One, Sub Menu Two, Sub Menu Three / Menu
Three), Services, About, Contact Us — over a full-height slider that
crossfades travel photos while a typewriter headline cycles destination
words ("Travel to the most beautiful places in the world, like Sahara
Desert" — cursor visible in the screenshot). A teal pill "Contact us"
button sits under the headline.

Straddling the hero's bottom edge, a white search card overlaps upward
(-50px) with four fields — Destination select (Peru, Japan, Thailand,
Brazil, United States, Israel, China, Russia), date-range input, "Enter #
of People" input, and a full-width teal pill "Search" submit. Below the
page runs, 1:1 in this order: "Popular Destination" (centered Playfair h2
with a short teal underline; 3-up carousel of photo cards with white
title/location text overlaid top-left — The White City/Santorini Greece,
Byodo-In Temple Ahuimanu/United States, Kaafu Atoll/Maldives — each
hovering to a teal wash + image zoom); "Special offers & Discounts"
(centered title + blurb, then 4-up offer cards: rounded photo, black h3
left + teal price right with superscript `$`, location line under — Kaafu
Atoll $520 Maldives, The White City $520 Greece, Byodo-In Temple $750
United States, Arabische Emiraten $520 Dubai); a split "We Travel Not To
Escape Life But for Life not to Escape Us." block (right-aligned Playfair
50px headline whose `<span>` carries a solid teal text-highlight via
double box-shadow bleed and overlaps the image column by 30px; below it
right-aligned paragraphs + teal "Get started" pill; right half a photo
with a centered teal circular play button — the source links a YouTube
video via fancybox); a full-width teal counter band (`bg-primary py-5`)
with four white Playfair count-up numbers — 9,313 # of Travels, 8,492 #
of Clients, 100 # of Employees, 120 # of Countries — comma-separated,
animated on scroll; "Our Services" (centered title + blurb; left column
a tall photo, right 2×2 grid of light-grey `#f8f9fa` cards — Easy &
Free Transport, Delicious Food, Swimming Pool, Playground — each Playfair
h3 + blurb); a teal CTA band ("Plan your travel now and get in touch with
 us." + white lead paragraph + white outline pill "Get in touch"); and a
very LIGHT footer (`#f8f9fa`, not dark) with four widgets — About (blurb
+ teal 30px social circles), Pages (Blog, About, Contact), Resources
(Blog, About, Contact), Contact (email, phone, address) — closing with a
bottom bar (copyright left, Terms/Privacy right). The recreation's
copyright links Component Dock instead of the source attribution, and the
source demo brand "Travel." is never reused.

The design is anchored by one signature color — turquoise `#08d9d6`
(every CTA button, section-title underline, prices, counter band, CTA
band, footer social circles, card hover wash) — on white. Typography is
a serif/sans pair: Playfair Display for all headings (h1–h4) and Lato for
body text (14px). Buttons are fully PILL-shaped (`border-radius: 30px`,
12px 30px padding) — the defining contrast with the sharp-edged Travel
(tripquest) template. Sections breathe at 70px vertical padding.

## Design reference (replication findings)

- **Original:** ColorLib "Travel2" — travel agency landing template
  (source: https://colorlib.com/wp/template/travel2/). Listed in
  TEMPLATES.md `## Travel` at line 3005; slug appears exactly once.
- **Live preview URL:** https://preview.colorlib.com/theme/travel2/
  (HTTP 200, 27,890 bytes HTML, verified 2026-10-01; theme stylesheet
  `css/style.css`, 33,805 bytes — NOT `css/main.css`, which 404s on this
  theme). HTML saved to `/tmp/travel2-preview.html`; theme CSS saved to
  `/tmp/travel2-style.css`. The preview DOM is authoritative for section
  order and copy.
- **Screenshot:** `travel2-free-template.jpg`
  (`https://colorlib.com/wp/wp-content/uploads/sites/2/travel2-free-template.jpg`,
  reviewed visually 2026-10-01) confirms the hero treatment: Sahara
  desert photo (dune ridge, camel caravan) under the light overlay; the
  transparent header with the demo brand "Travel." (demo name only, never
  reused) and white links; the centered Playfair headline with typewriter
  cursor after "Sahara Desert"; the teal pill "Contact us"; the white
  search card hanging over the hero bottom edge with teal pill Search;
  "Popular Destination" centered heading with the teal underline below.
- **Stylesheets in the reference:** `bootstrap.min.css`,
  `owl.carousel.min.css`, `owl.theme.default.min.css`,
  `jquery.fancybox.min.css`, `fonts/icomoon/style.css`,
  `fonts/flaticon/font/flaticon.css`, `css/daterangepicker.css`,
  `aos.css`, `css/style.css` (theme — canonical tokens). Bootstrap grid,
  owl carousel, fancybox, icomoon/flaticon icon fonts, daterangepicker,
  AOS, jQuery are NEVER copied: recreation uses Tailwind grid,
  React-state carousel/typewriter, lucide-react icons, and a plain
  date-range text input. The theme CSS uses `"Lato", sans-serif` for
  body and `"Playfair Display", serif` for all h1–h4 — load Lato 300–700
  and Playfair Display 400–700 via Google Fonts `<link>` in `index.html`.
- **Key theme rules (verified in style.css):**
  - `body`: `font-family: "Lato", sans-serif; font-size: 14px;
    line-height: 1.5; background: #ffffff`; `::selection { background:
    #000; color: #fff }`
  - `h1, .h1, h2, .h2, h3, .h3, h4, .h4 { font-family: "Playfair
    Display", serif }`
  - `.bg-primary { background-color: #08d9d6 !important }`; btn-primary
    `background: #08d9d6; border-color: #08d9d6` hover `#09ede9`
  - `.btn { padding: 12px 30px; border-radius: 30px; font-size: 14px }`
    — the pill system; `.btn-outline-white { border: 2px solid #fff }`
    hover `background: #fff; color: #08d9d6`
  - `.site-nav { position: absolute; top: 0; z-index: 9; width: 100%;
    padding: 20px 0 }` — NOT fixed; scrolls away with the page. Logo
    `h1 { font-size: 24px }`. Links `14px; color: rgba(255,255,255,0.7)`
    hover `#fff`. Dropdown: white panel `min-width: 180px`, links
    `#000` hover `#08d9d6`, `box-shadow: 0 2px 10px -2px rgba(0,0,0,0.1)`
  - `.hero { height: 100vh; min-height: 670px }`; `.hero .slides img`
    object-fit cover, absolute, crossfade (`.active { opacity: 1 }`);
    `.hero .slides.overlay:before { background: rgba(0,0,0,0.2) }`;
    `.hero .intro { max-width: 800px; absolute center; text-align:
    center }`; `.hero .intro h1 { color: #fff; margin-bottom: 20px }`
  - `.form { box-shadow: 0 0 30px 0 rgba(0,0,0,0.1); padding: 30px;
    background: #fff; margin-top: -50px; z-index: 9 }` — the search
    card overlapping the hero; `.form-control, .custom-select { border:
    2px solid #e9ecef; font-size: 16px; height: 45px }` focus
    `border-color: #08d9d6; box-shadow: none`
  - `.untree_co-section { padding: 70px 0 }` — section rhythm
  - `.section-title { display: inline-block; padding-bottom: 20px }`
    with `:before { width: 80px; height: 4px; background: #08d9d6 }`
    (underline); `.section-title.text-center:before { left: 50%;
    transform: translateX(-50%) }`
  - `.media-thumb { position: relative; overflow: hidden; cursor:
    pointer }`; `:after` teal wash `background: rgba(8,217,214,0.8)`
    hidden by default; hover: `img { transform: scale(1.07) }` + wash
    opacity 1; `.media-text` ALWAYS visible top-left 10%/10% —
    `h3 { font-size: 1rem; font-weight: 900; color: #fff }`,
    `.location { font-size: .8rem; color: rgba(255,255,255,0.7) }`
  - `.owl-3-slider` arrows: absolute vertical-center, 30px, hover
    `#08d9d6`; mobile hides arrows (recreation: simple prev/next buttons)
  - `.media-1 { text-align: left }`; `img { border-radius: 4px }`;
    `h3 { font-size: 20px }` with black link; `.price { font-size: 18px;
    color: #08d9d6; font-weight: 700 }` with `sup { font-size: 16px;
    font-weight: 400 }`; `.loc { color: rgba(170,170,170,0.8) }`
  - `.title-with-bg { font-size: 50px (40px mobile); color: #fff;
    line-height: 1.2 }`; `.title-with-bg span { color: #fff;
    background-color: #08d9d6; box-shadow: 0.5em 0 0 #08d9d6, -0.5em 0
    0 #08d9d6 }` — solid teal highlight bleeding past the glyphs;
    `.overlap-right { position: relative; right: -30px; top: 20px;
    z-index: 2 }`
  - `.count-numbers.bg-primary.py-5` — teal band; `.counter-wrap
    .counter { font-size: 3rem (2.5rem mobile); color via span #fff }`;
    `.caption { color: rgba(255,255,255,0.8) }`; source animates
    `data-number` values with jQuery animateNumber + comma separator on
    waypoint scroll (recreation: IntersectionObserver count-up)
  - `.feature-img-bg { height: 300px !important; margin-bottom: 30px }`;
    `.feature-1 { padding: 30px; background: #f8f9fa; min-height:
    calc(50% - 15px); margin-bottom: 30px }`; `.feature-1 h3 { font-
    size: 1.2rem; font-weight: 700 }`
  - `.video-play-button`: absolutely centered teal circle (hover
    `#09f2ee`) with white play triangle over the photo
  - `.site-footer .inner { padding-bottom: 70px; background: #f8f9fa }`;
    `.inner.first { padding-top: 80px }`; footer `color: #888;
    font-size: 14px`; widget `h3 { font-size: 14px; font-weight: 700;
    color: #000; font-family: "Lato" }`; links `#999` hover `#000`;
    `.widget .social li a { width: 30px; height: 30px; border-radius:
    50%; background: #08d9d6; color: #fff; box-shadow: 0 5px 10px -2px
    rgba(0,0,0,0.2) }`
  - Mobile menu: white off-canvas panel 300px from the right
    (`box-shadow: -10px 0 20px -10px rgba(0,0,0,0.1)`), black links
    `padding-left: 20/40/60px` per level, hover/active `#08d9d6`,
    circular collapse arrows (border `#f8f9fa`)
- **Typewriter:** the preview loads `js/typed.js` and the hero h1 ends in
  `<span class="typed-words"></span>`; no init string list was found in
  `custom.js` (preview build gap), but the ColorLib screenshot shows the
  effect mid-word: "…like Sahara Desert" with a text cursor. Recreation:
  small React typewriter cycling destination words — verified word
  "Sahara Desert" plus 3–4 same-kind words (e.g. Santorini, The
  Maldives, Dubai), with a blinking cursor; a static first word is an
  acceptable progressive-enhancement fallback.

## Requirements

### Feature: Navbar

A transparent absolute header over the hero: Playfair wordmark left,
white links right with one dropdown, collapsing to a white off-canvas
panel on mobile.

#### Scenario: Header renders as in the reference
- **Given** the page loads on a desktop viewport
- **When** the navbar renders over the hero
- **Then** the wordmark is "trekvoyage" in Playfair Display 24px white
  (left)
- **And** the links are 14px `rgba(255,255,255,0.7)` Lato, hovering to
  white: Home, Dropdown (caret), Services, About, Contact Us
- **And** the header is `position: absolute` at the top of the page (not
  fixed — it scrolls away with the hero)

#### Scenario: Dropdown submenu opens on hover/focus
- **Given** the desktop header is visible
- **When** the user hovers (or keyboard-focuses) Dropdown
- **Then** a white panel (`min-width: 180px`, shadow `0 2px 10px -2px
  rgba(0,0,0,0.1)`) opens with black 14px links hovering to `#08d9d6`:
  Elements (group label), Menu One, Menu Two (submenu: Sub Menu One, Sub
  Menu Two, Sub Menu Three), Menu Three

#### Scenario: Mobile collapses to an off-canvas menu
- **Given** the viewport is below the lg breakpoint
- **When** the burger button (aria-expanded reflecting state) is pressed
- **Then** a white 300px panel slides in from the right with black links
  at 20/40/60px indentation per level, teal hover/active, and circular
  collapse arrows for nested items

### Feature: Hero + typewriter

A 100vh photographic slider with a light overlay; centered white Playfair
headline with a typewriter destination word and a teal pill CTA.

#### Scenario: Hero copy, slider, and CTA render as in the reference
- **Given** the page loads
- **When** the hero renders
- **Then** the background is a full-viewport slider (`height: 100vh;
  min-height: 670px`) crossfading travel photos (picsum seeded
  `trekvoyage-hero-1..5`) under a `rgba(0,0,0,0.2)` overlay
- **And** the centered intro (max-width 800px) shows the white Playfair
  h1 "Travel to the most beautiful places in the world, like " followed
  by the typewriter word (React typewriter cycling "Sahara Desert" +
  3–4 same-kind destination words with a blinking cursor)
- **And** a teal `#08d9d6` pill "Contact us" button renders below
  (12px/30px padding, radius 30px, 14px), hovering to `#09ede9`

### Feature: Search availability form

A white card overlapping the hero's bottom edge with destination, date,
party-size fields and a teal pill search submit.

#### Scenario: Search card renders as in the reference
- **Given** the hero renders
- **When** the search form is visible
- **Then** the white card (`padding: 30px`, shadow `0 0 30px 0
  rgba(0,0,0,0.1)`, `margin-top: -50px`, centered at ~83% width) holds
  a 4-field row: a Destination `<select>` (options: Peru, Japan,
  Thailand, Brazil, United States, Israel, China, Russia), a date-range
  text input, a text input with placeholder "Enter # of People", and a
  full-width teal pill submit value "Search"
- **And** all inputs/selects use the reference field style: 2px `#e9ecef`
  border, 45px height, 16px font, teal `#08d9d6` focus border with no
  glow
- **And** the form is a no-op in the recreation (submit prevented;
  fields controlled or uncontrolled as conventions dictate)

### Feature: Popular Destination

A centered-title carousel of photo cards with overlaid title/location and
a teal hover wash + zoom.

#### Scenario: Section header matches the reference pattern
- **Given** the destinations section renders
- **When** the title block is visible
- **Then** the centered Playfair h2 reads "Popular Destination" with the
  80×4px `#08d9d6` underline centered beneath it

#### Scenario: Destination cards render with overlay text and hover wash
- **Given** the destinations section renders
- **When** the cards are displayed
- **Then** there are 3 cards in a 3-up desktop carousel (1-up on mobile),
  each a photo (picsum seeded `trekvoyage-dest-<n>`) with white text
  overlaid top-left 10%/10% — h3 1rem/900 title + .8rem 70%-white
  location: The White City/Santorini, Greece; Byodo-In Temple
  Ahuimanu/United States; Kaafu Atoll/Maldives
- **And** on hover the image scales to 1.07 and a teal wash
  `rgba(8,217,214,0.8)` fades in over it
- **And** simple prev/next arrows (hover `#08d9d6`) drive the carousel
  via React state

### Feature: Special offers & Discounts

A centered-title blurb over a 4-up grid of offer cards: photo, title +
teal price, location line.

#### Scenario: Offer cards render as in the reference
- **Given** the offers section renders
- **When** the section is visible
- **Then** the centered Playfair h2 reads "Special offers & Discounts"
  with a grey blurb paragraph below (same kind of copy, paraphrased)
- **And** there are 4 cards in a 4-up desktop grid (2-up tablet, 1-up
  mobile), each: photo with 4px radius (picsum seeded
  `trekvoyage-offer-<n>`), h3 20px black title LEFT + price RIGHT —
  teal `#08d9d6` 18px/700 with a 16px superscript `$` — and a location
  line under in `rgba(170,170,170,0.8)` with a lucide MapPin icon
- **And** the reference content: Kaafu Atoll `$520` Maldives; The White
  City `$520` Greece; Byodo-In Temple `$750` United States; Arabische
  Emiraten `$520` Dubai (keep the German place name as in the source)

### Feature: "We Travel Not To Escape Life" split block

A right-aligned Playfair headline with a solid teal text-highlight that
overlaps a photo column; paragraphs + teal pill below; play button on
the photo.

#### Scenario: Split block renders as in the reference
- **Given** the section renders
- **When** the block is visible
- **Then** the left column (lg:5) carries the right-aligned Playfair
  headline "We Travel Not To Escape Life But for Life not to Escape Us."
  at 50px white, its text wrapped in a `<span>` with solid `#08d9d6`
  background bleeding ±0.5em via box-shadow, positioned overlapping the
  image column (`right: -30px; top: 20px`)
- **And** below the headline, right-aligned grey paragraphs (same kind
  of copy, paraphrased — two paragraphs: the Vokalia/Consonantia blurb
  and the Duden river blurb) end in a teal pill "Get started" button
- **And** the right column (lg:6) shows a photo (picsum seeded
  `trekvoyage-about`) with a centered teal circular play button (white
  triangle, hover `#09f2ee`); clicking does not navigate (no-op or
  decorative)
- **And** on small viewports the headline block stacks above the photo

### Feature: Counter band

A full-width teal band with four white Playfair numbers counting up on
scroll.

#### Scenario: Counters render as in the reference
- **Given** the counter band renders
- **When** the band scrolls into view
- **Then** the background is solid `#08d9d6` (section padding 70px 0)
- **And** four counters sit in a 4-col row (2×2 on mobile): white
  Playfair numbers 3rem (2.5rem mobile) that count up from 0 with comma
  separators when scrolled into view (IntersectionObserver) — 9,313
  "# of Travels"; 8,492 "# of Clients"; 100 "# of Employees"; 120
  "# of Countries"
- **And** the captions are `rgba(255,255,255,0.8)`

### Feature: Our Services

A centered-title block with a photo column beside a 2×2 grid of
light-grey feature cards.

#### Scenario: Service cards render as in the reference
- **Given** the services section renders
- **When** the cards are displayed
- **Then** the centered Playfair h2 reads "Our Services" with a grey
  blurb below (same kind of copy, paraphrased)
- **And** the row places a tall photo column (lg:4, ~300px,
  picsum seeded `trekvoyage-services`) LEFT and a 2×2 grid of cards
  RIGHT
- **And** each card is `#f8f9fa` with 30px padding — Playfair h3 1.2rem
  / 700 title + grey blurb: Easy & Free Transport, Delicious Food,
  Swimming Pool, Playground (reference blurb pattern "Even the
  all-powerful Pointing has no control about the blind texts." —
  paraphrase ok)

### Feature: CTA band

A full-width teal band with a white headline, lead paragraph, and white
outline pill.

#### Scenario: CTA band renders as in the reference
- **Given** the CTA band renders
- **When** the band is visible
- **Then** the background is solid `#08d9d6` (py-5 rhythm)
- **And** the centered white Playfair h2 reads "Plan your travel now and
  get in touch with us."
- **And** a white lead paragraph at 70% opacity renders below (same kind
  of copy, paraphrased)
- **And** a white 2px-outline pill button, bold, reads "Get in touch",
  hovering to white background + `#08d9d6` text

### Feature: Footer

A LIGHT grey footer (`#f8f9fa`) with four widgets and a bottom bar whose
copyright links Component Dock.

#### Scenario: Footer widgets render as in the reference
- **Given** the footer renders
- **When** the footer is visible
- **Then** the background is `#f8f9fa` with 14px `#888` text and widget
  headings in Lato 14px/700 black: About (blurb + social row), Pages
  (Blog, About, Contact), Resources (Blog, About, Contact), Contact
  (email, phone number, street address — same kind of contact data,
  paraphrased)
- **And** the About widget's social row shows 30px teal `#08d9d6`
  circles with white lucide icons (Twitter/X, Instagram in the source)
  and the soft shadow `0 5px 10px -2px rgba(0,0,0,0.2)`
- **And** all footer links are `#999`, hovering to black
- **And** the bottom bar shows the copyright line left and Terms /
  Privacy links right

#### Scenario: Copyright links Component Dock
- **Given** the footer renders
- **When** the bottom bar is visible
- **Then** the copyright text mentions the template was made with love
  and links `https://www.componentdock.com/` branded "Component Dock"
  — never ColorLib, "Colorlib", or the source slug
- **And** no app file contains `colorlib` / `preview.colorlib.com`
  strings (provenance lives only in this spec and TEMPLATES.md); the
  screenshot demo brand "Travel." is also never reused

### Feature: Design tokens & typography

The recreation exposes the reference palette and the Lato + Playfair
Display pairing as Tailwind 4 `@theme` tokens.

#### Scenario: Theme tokens match the reference palette
- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: turquoise `#08d9d6` (primary CTA,
  bands, underlines, prices, social circles), hover `#09ede9`, alt
  `#09f2ee`, hero overlay `rgba(0,0,0,0.2)`, card hover wash
  `rgba(8,217,214,0.8)`, light grey `#f8f9fa` (feature cards, footer),
  input border `#e9ecef`, footer text `#888`, footer links `#999`,
  offer location `rgba(170,170,170,0.8)`, dark social `#303030`
- **And** Playfair Display (headings) + Lato (body 14px) load via Google
  Fonts `<link>` in `index.html`
- **And** primary buttons are pills (radius 30px, 12px/30px padding,
  14px) — matching the reference's rounded button look
- **And** section rhythm is 70px top/bottom; section-title underline is
  80×4px `#08d9d6`

## Verification checklist

- [ ] Section order 1:1 with the preview DOM: navbar → hero + typewriter
      → search card → Popular Destination carousel → Special offers →
      "We Travel Not To Escape Life" split → teal counter band → Our
      Services → teal CTA band → light footer
- [ ] Turquoise `#08d9d6` is the only CTA color; hover `#09ede9`; all
      buttons are pills (radius 30px); outline-white buttons flip to
      white bg + teal text on hover
- [ ] Typography pairing: Playfair Display on every heading, Lato 14px
      body; hero h1 white, centered, with typewriter destination word +
      cursor (verified word "Sahara Desert" in the list)
- [ ] Navbar is absolute (scrolls away), transparent over the hero;
      dropdown = white 180px panel, black links, teal hover; mobile =
      white 300px off-canvas panel with teal hovers + collapse arrows
- [ ] Search card overlaps the hero (-50px), shadow `0 0 30px
      rgba(0,0,0,0.1)`, 4 fields with 2px `#e9ecef` borders / 45px
      height / teal focus; Destination select has the 8 reference
      options
- [ ] Popular Destination cards: overlaid white title/location top-left,
      hover zoom 1.07 + `rgba(8,217,214,0.8)` teal wash; carousel
      arrows work via React state
- [ ] Offer cards: 4px-radius photo, black h3 left + teal price right
      with superscript `$`, location line with MapPin; content matches
      the four reference destinations/prices
- [ ] Split block: 50px Playfair white headline with teal box-shadow
      highlight span overlapping the photo column; right-aligned blurbs
      + teal "Get started"; photo has the centered teal play button
- [ ] Counter band is `#08d9d6`; 4 counters count up with comma
      separators on scroll: 9,313 / 8,492 / 100 / 120 with the reference
      captions
- [ ] Services: photo column left + 2×2 `#f8f9fa` cards right (30px
      padding) with the four reference service titles
- [ ] CTA band is `#08d9d6` with white h2, 70%-opacity lead, white
      outline bold pill "Get in touch"
- [ ] Footer is LIGHT `#f8f9fa` (not dark) with the 4 widgets + teal
      30px social circles + bottom bar; copyright links
      `https://www.componentdock.com/` ("Component Dock")
- [ ] All images are `picsum.photos/seed/trekvoyage-*` placeholders;
      icons from `lucide-react`; no copied assets or CSS; no Bootstrap,
      owl-carousel, fancybox, or jQuery
- [ ] Zero `colorlib` / "Travel." demo-brand references anywhere in
      `apps/trekvoyage`
- [ ] App folder `apps/trekvoyage`, package
      `@free-react-templates/trekvoyage`, `homepage`
      `https://trekvoyage.free.componentdock.com`, `public/CNAME`
      `trekvoyage.free.componentdock.com`, lockfile registers the
      workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100%
      coverage; `scripts/verify-app.sh trekvoyage` passes
