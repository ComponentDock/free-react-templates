# Template: Wayfarer (Travel)

## Purpose

Wayfarer is a single-page travel / tourism template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Travelo" travel & tourism HTML template design (see
TEMPLATES.md, line 519 under **Bootstrap (216)** — duplicate row at line
3009 under **Travel (44)**, same template, ONE app only; mark BOTH rows
`[x]` after merge), built under a different name ("Wayfarer" — a
traveler, especially one journeying on foot; matching the source's
travel-agency positioning) with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript (strict). No ColorLib references in app code —
provenance lives in this spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Travelo" — free travel & tourism HTML template
  (source: https://colorlib.com/wp/template/travelo/). Single page: a
  transparent header over the hero (logo left + centered nav + phone /
  socials / search icon right), a full-width hero slider (3 slides, photo
  background under a navy overlay, giant cursive white country headline +
  teal "Explore Now" button), a dark-navy `#040E27` "Where you want to
  go?" search strip (Where to go? text input + date input + Travel type
  select + red "Search" button), a white "Popular Destination" section (6
  photo cards with white country name + teal "0N Places" pill), a
  newsletter band on a photo + navy overlay (`Subscribe Our Newsletter` +
  white email input + red Subscribe button), a light `#F7FAFD` "Popular
  Places" section (6 white price cards: photo + teal `$500` price pill +
  name + country + 5 gold stars + review count + days), a full-width
  "Enjoy Video" section (cursive 80px headline + teal circular play
  button on a dimmed photo), a white "travel variation" row (3 icon
  features: Comfortable Journey / Luxuries Hotel / Travel Guide), a light
  `#F7FAFD` testimonial carousel (3 circular-photo quotes, "- Micky
  Mouse" / "- Tom Mouse" / "- Jerry Mouse"), a white "Recent Trips"
  section (3 photo cards with date + title), and a dark-navy `#040E27`
  footer (4 widgets: logo / Company 4 links / Popular destination 8 links
  2-col / Instagram 6-square photo feed) with a bottom copyright bar
  crediting **Component Dock** (replaces the source's Colorlib credit).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/travelo/`. DOM fetched
  (`/tmp/prep-travelo/preview.html`, 44,119 bytes, `<title>Travelo -
Travel & Tourism Template</title>`) + stylesheet `css/style.css`
  (`/tmp/prep-travelo/style.css`, 390,618 bytes; includes Bootstrap 5
  variables, Swiper slider styles, and per-page styles for index / about
  / destination / elements — only the index-page rules matter here) +
  fontawesome icon font (`css/fontawesome-all.min.css`, 74,320 bytes) +
  TEMPLATES.md screenshot (`travelo-free-template.jpg`, AVIF 249,949
  bytes → PNG 1200×946, viewed in browser).
- **Visual design (screenshot + live DOM):** clean modern travel-agency
  aesthetic — hero photo (green terraced hills + a paraglider) dimmed by
  a navy `#040E27` overlay with the country name ("Switzerland") in a
  giant WHITE HANDWRITTEN/CURSIVE script ("Nothing You Could Do"),
  smaller white sans-serif sub-line, and a TEAL rounded "Explore Now"
  button. Below: a solid dark-navy search strip with transparent inputs
  and a RED "Search" button. Body sections alternate white / light
  `#F7FAFD`; the ONLY saturated accents are **teal `#1EC6B6`** (Explore
  Now, price pills, destination "places" pills, video play circle, nav
  hover) and **red `#FF4A52`** (Search / More Places / Subscribe buttons,
  hover states, phone icon, copyright heart); star ratings are gold
  `#FDAE5C`; the footer is dark navy `#040E27`. Headings are navy Rubik
  weight 400 (38px section titles); hero + video headlines are cursive.
  Copy is placeholder/Lorem (repeated "A wonderful serenity…", "Working
  in conjunction with humanitarian aid agencies…" x3, "Journeys Are Best
  Measured In New Friends" x3, "United State of America" x6, "$500" x6,
  "Franch" typo) — paraphrase freely, FIX typos, keep the same kinds.
- **Slider implementation:** the source marks `.slider_active
owl-carousel` / `.testmonial_active owl-carousel` but the bundled JS is
  **Swiper** (`.slider_active.swiper { height: 650px }`, swiper-button
  prev/next, swiper-pagination) — implement with React state: a 3-slide
  hero slider with white circular prev/next arrows (50px, `rgba(255,255,
255,0.9)` bg, `#1F1F1F` icon, hover → orange `#ff5e13` bg + white icon)
  and 12px pagination bullets (`#ccc`, active → `#ff5e13`); testimonial
  carousel with the same controls.

## Design tokens (from `css/style.css` of the live preview)

- **Primary teal:** `#1EC6B6` — `.boxed-btn3` background (hero "Explore
  Now" button), `.prise` price pills ($500), `.single_destination .content
p a` destination "0N Places" pills (12px, radius 30px, padding 0 12px,
  height 25px), `.video_icon a` play circle, `.main-menu ul li a:hover`
  nav hover, `.boxed-btn4:hover` background.
- **Secondary red:** `#FF4A52` — `.boxed-btn4` background (Search submit,
  More Places, newsletter Subscribe button), `.boxed-btn3:hover`
  background, `.copy_right a` link + heart icon, `.single_place:hover
.place_info h3` / `.single_trip:hover .info a h3` hover titles,
  `.single_destination:hover .content p` hover country, `.number p i`
  phone icon.
- **Dark navy:** `#040E27` — `.where_togo_area` background (search
  strip), `.footer` background, `.overlay::before` wash color (opacity
  .7 newsletter / .2 video), `.section_title h3` + `.place_info h3` +
  `.single_travel h3` + `.single_trip .info a h3` + `.single_testmonial
p` text, `.main-menu ul li a` nav link color.
- **Light background:** `#F7FAFD` — `.popular_places_area` and
  `.testimonial_area` section backgrounds.
- **Muted grey:** `#7A838B` — `.section_title p`, `.place_info p`,
  `.rating_days span a` (review count), `.rating_days .days`, `.single_trip
.info .date span`, `.testmonial_author h3`, `.copy_right` text.
- **Star gold:** `#FDAE5C` — `.rating_days span i` (fa-star rating
  icons, 12px).
- **Whites:** `#fff` place-card surfaces, slider text, newsletter input
  background (50px, radius 5, padding-left 15px, Rubik 300); swiper
  arrows `rgba(255,255,255,0.9)`.
- **Form chrome (search strip):** inputs 50px, transparent bg, `1px solid
#363E52` border, radius 5px, white text 16px, placeholder `#AAB1B7`
  (weight 300), focus border → `#ff5e13`; select same + custom chevron
  (appearance none + inline SVG), options `#040E27` bg; date input has
  inverted calendar picker icon and white text when valid.
- **Fonts:** Google **Rubik** (300/300i/400/400i/500/500i/700/700i/
  900/900i) — body, buttons (16px, weight 500), section titles (38px,
  weight 400), cards; **"Nothing You Could Do"** cursive — hero h3
  (150px base → 94px desktop, white, line-height .5) and video h3 (80px,
  line-height 90px). Source loads both via one `@import` in `style.css`;
  use Google Fonts `<link>`s in `index.html`.
- **Buttons:** radius 5px, Rubik 16px, weight 500, text-transform
  capitalize. `.boxed-btn3` — teal bg, `padding: 18px 41px` (hero CTA);
  `.boxed-btn4` — red bg, `padding: 13px 39px` (search submit / More
  Places / Subscribe); hover swaps teal↔red.
- **Header (`.main-header-area`):** transparent over the hero, padding
  25px 100px 25px 35px; logo left (col-xl-2), centered nav (col-xl-6,
  desktop only `d-none d-lg-block`), right (col-xl-4, desktop only):
  `.number p` phone "10(256)-928 256" (16px navy, red Phone icon) +
  social icons (Instagram / LinkedIn / Facebook / Airbnb, `d-none
d-xl-block`) + `.seach_icon` magnifier (opens a modal). Nav links:
  Rubik 16px, capitalize, navy `#040E27`, hover teal; active = "home".
  Mobile: JS-injected `.mobile_menu` → React hamburger toggle.
- **Hero (`.slider_area .single_slider`, height 650px → 600px mobile):**
  bg photo + `.overlay` navy wash (opacity .1 default; the slider keeps a
  dark-ish wash for text legibility); centered `.slider_text`: cursive h3
  (white, capitalize) + p (white, 20px, mt 33 mb 49) + teal "Explore Now"
  `.boxed-btn3`. 3 slides: Indonesia / Australia / Switzerland.
- **Search strip (`.where_togo_area`, bg `#040E27`, padding 50px 0):**
  row — left col-lg-3 `.form_area h3` "Where you want to go?" (24px,
  white, weight 400); right col-lg-9 `.search_wrap .search_form` (flex,
  space-between): 3 `.input_field` (220px each) — "Where to go?" text
  input, date input (`type="date"`), "Travel type" select (options: Some
  option / Another option) + `.search_btn` red "Search" `.boxed-btn4`.
- **Popular Destination (`.popular_destination_area`, white, padding
  140px 0 120px):** centered `.section_title` — h3 "Popular Destination"
  (38px, navy, weight 400, padding-bottom 7px) + p (16px, `#7A838B`, lh
  28); 6 `.single_destination` cards (3-up desktop / 2-up tablet): photo
  (radius 5, hover translateY(-10px)) + `.content` (absolute left 30
  bottom 30): country name (22px white, hover red) + teal pill
  "0N Places" (radius 30px, `#1EC6B6`). Names: Italy 07 / Brazil 03 /
  America 10 / Nepal 02 / Maldives 02 / Indonesia 05.
- **Newsletter (`.newletter_area.overlay`, bg image + navy overlay
  opacity .7, padding 67px 0):** left col-lg-5 `.newsletter_text`: h4
  "Subscribe Our Newsletter" (24px white) + p "Subscribe newsletter to
  get offers and about new places to discover."; right col-lg-7
  `.mail_form`: white email input ("Your mail" placeholder, 50px, radius 5) + `.newsletter_btn` red Subscribe button (boxed-btn4 padding 13px
  40px).
- **Popular Places (`.popular_places_area`, bg `#F7FAFD`, padding 142px
  0 150px):** centered title "Popular Places" + grey p; 6 `.single_place`
  cards (3-up, white bg, radius 5, hover `box-shadow: 0 10px 20px
rgba(0,0,0,0.05)`): photo + `.prise` price pill (absolute top 20 left
  20, `#1EC6B6`, radius 18px, padding 7px 18px 4px, "$500") +
  `.place_info` (padding 27px 20px 25px): h3 name (22px navy, hover red:
  California / Korola Megna / London / Miami Beach / California /
  Saintmartine Iceland — vary) + p (14px `#7A838B`, "United State of
  America" — vary) + `.rating_days` (justify-between): 5 gold stars +
  "(20 Review)" (14px grey) + ".days" "5 Days" (14px grey); below:
  centered `.more_place_btn` red "More Places" `.boxed-btn4`.
- **Video (`.video_area.video_bg.overlay`, bg image + navy overlay
  opacity .2, padding 190px 0):** centered `.video_wrap`: cursive h3
  "Enjoy Video" (80px, white, mb 55) + `.video_icon` — 84px teal circle
  (radius 50%, white 17px play icon, `line-height: 84px`). Source links
  to a YouTube popup; render a decorative play button (no video needed,
  or link to a placeholder).
- **Travel Variation (`.travel_variation_area`, white, padding 150px 0
  114px):** 3 `.single_travel` items (col-lg-4 col-md-6, text-center):
  svg icon (→ lucide) + h3 (22px navy, mt 41/mb 10: Comfortable Journey
  / Luxuries Hotel / Travel Guide) + p (grey, "A wonderful serenity has
  taken to the possession of my entire soul." — vary).
- **Testimonials (`.testimonial_area`, bg `#F7FAFD`, padding 100px 0
  118px):** Swiper carousel of 3 `.single_testmonial` (text-center,
  col-lg-8): circular author photo + p quote (navy 18px, lh 32, my 34/10)
  - `.testmonial_author h3` "- Micky Mouse" / "- Tom Mouse" / "- Jerry
    Mouse" (16px `#7A838B`). Swiper arrows/pagination as in the slider.
- **Recent Trips (`.recent_trip_area`, white, padding 150px 0 120px):**
  centered title "Recent Trips" (no subtitle p); 3 `.single_trip` cards
  (3-up): photo (radius 5) + `.info` (pt 16): `.date span` "Mar 15,
  2032" / "Apr 22, 2032" / "May 8, 2032" (14px grey) + h3 link
  "Journeys Are Best Measured In New Friends" (22px navy, mt 10, hover
  red — vary titles).
- **Footer (`.footer`, bg `#040E27`, `.footer_top` padding 115px 0
  129px):** 4 `.footer_widget` columns — (1) logo image; (2) `.footer_title`
  "Company" (20px white, mb 45): 4 links (Pricing / About / Gallery /
  Contact); (3) "Popular destination" `.double_links` 2-col: 8 links
  (Indonesia / America / India / Switzerland / Italy / Canada / Franch /
  England — fix "Franch" → "France"); (4) "Instagram": `.instagram_feed`
  3×2 grid of 6 small square photos (padding 7.5px each); `.footer_border`
  divider + bottom `.copy_right` bar: "Copyright © <year> All rights
  reserved | This template is made with ♥ by **Component Dock**" →
  https://www.componentdock.com/ (heart `#FF4A52`; replaces the source's
  Colorlib credit; NO ColorLib credit).
- **Search modal:** the header magnifier opens a Bootstrap modal
  (`.custom_search_pop`) with a `.serch_form` — text input + red "search"
  submit. Implement with React state (dialog with input + button).
- **Mobile:** the source uses Bootstrap grid + a JS-injected mobile menu
  (hamburger, `d-lg-none`) and Swiper for the hero + testimonial
  carousels — implement with React state: a 3-slide hero slider (prev /
  next circular arrows + pagination dots), a testimonial carousel (or a
  simple stacked list below md — the source carousel is decorative), a
  hamburger mobile nav toggle, and the search modal. Stack the 6-card
  grids and 4-column footer to 2/1 columns below lg/md.
- **Placeholder images:** `https://picsum.photos/seed/wayfarer-<n>/<w>/<h>`.
  Photo slots: slider 1–3 (travel scenes — mountains/coast subject),
  destination 1–6, place 1–6, video bg (wide), trip 1–3, testimonial
  author (square), instagram 1–6 (square). Icons from `lucide-react`
  (Phone, Instagram, Linkedin, Facebook, Search, Star, CalendarDays,
  Play, Compass, Luggage, Route, Users, Menu, X, ChevronLeft,
  ChevronRight, MapPin).

## Requirements

### Requirement: Header — transparent bar with nav, phone, socials, search

The system SHALL render a transparent header over the hero with the brand
logo on the left, a centered nav (Home, About, Destination, Pages with
dropdown, Blog with dropdown, Contact), and on the right a phone number
with a red phone icon, four social icons, and a search icon that opens a
search modal. On mobile a hamburger SHALL open the same nav links.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the header is inspected
- **THEN** it shows the brand, the nav entries (Home first), the phone
  number, the social icons, and the search icon

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** the nav links appear and can be closed again

#### Scenario: Search modal

- **GIVEN** the header search icon is activated
- **WHEN** the modal opens
- **THEN** a search input with a red "search" submit button is shown

### Requirement: Hero slider

The system SHALL render a full-width hero slider with three slides, each
showing a travel photo under a dark overlay, a cursive white country-name
headline, a white sub-line, and a teal "Explore Now" button, with white
circular prev/next arrows and pagination dots.

#### Scenario: Hero content

- **GIVEN** the hero slider is rendered
- **WHEN** the first slide is inspected
- **THEN** it shows the cursive headline "Indonesia", the sub-line
  "Pixel perfect design with awesome contents", and the teal "Explore
  Now" button

#### Scenario: Slider navigation

- **GIVEN** the hero slider is rendered
- **WHEN** the next arrow is activated
- **THEN** the second slide's headline ("Australia") is shown, and the
  third ("Switzerland") after another activation

### Requirement: Where you want to go? search strip

The system SHALL render a dark-navy `#040E27` strip with the heading
"Where you want to go?" on the left and, on the right, a search form with
a "Where to go?" text input, a date input, a "Travel type" select, and a
red "Search" button. Inputs SHALL be transparent with a 1px `#363E52`
border and 5px radius.

#### Scenario: Search form fields

- **GIVEN** the search strip is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading, the three fields, and the red "Search"
  button

### Requirement: Popular Destination section

The system SHALL render a white section with the centered title "Popular
Destination", a supporting grey paragraph, and six destination cards,
each showing a photo, a country name, and a teal "0N Places" pill.

#### Scenario: Destination cards

- **GIVEN** the Popular Destination section is rendered
- **WHEN** the cards are inspected
- **THEN** six cards are shown (Italy / Brazil / America / Nepal /
  Maldives / Indonesia), each with a country name and a places pill

### Requirement: Newsletter band

The system SHALL render a newsletter band on a photo background with a
dark navy overlay (opacity .7), the heading "Subscribe Our Newsletter",
a supporting paragraph, a white email input, and a red "Subscribe"
button.

#### Scenario: Subscribe form

- **GIVEN** the newsletter band is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading, the paragraph, the email input, and the
  red "Subscribe" button

### Requirement: Popular Places section

The system SHALL render a light `#F7FAFD` section with the centered title
"Popular Places" and six white place cards, each showing a photo with a
teal price pill, a place name, a country line, five gold stars with a
review count, a days label, and a "More Places" button below the grid.

#### Scenario: Place cards

- **GIVEN** the Popular Places section is rendered
- **WHEN** the cards are inspected
- **THEN** six cards are shown, each with a name, a country line, a
  price pill, stars with "(20 Review)", and a days label

#### Scenario: More Places button

- **GIVEN** the place grid is rendered
- **WHEN** the section bottom is inspected
- **THEN** a red "More Places" button is shown

### Requirement: Enjoy Video section

The system SHALL render a full-width video section on a dimmed photo
background (overlay opacity .2) with a cursive white "Enjoy Video"
headline and a teal circular play button.

#### Scenario: Video content

- **GIVEN** the video section is rendered
- **WHEN** it is inspected
- **THEN** it shows the "Enjoy Video" headline and the circular play
  button

### Requirement: Travel variation features

The system SHALL render a white section with three icon features
(Comfortable Journey / Luxuries Hotel / Travel Guide), each with an icon,
a navy heading, and a grey paragraph.

#### Scenario: Feature items

- **GIVEN** the travel variation section is rendered
- **WHEN** the items are inspected
- **THEN** three items are shown, each with an icon, a heading, and a
  paragraph

### Requirement: Testimonial carousel

The system SHALL render a light `#F7FAFD` testimonial section with a
carousel of three testimonials, each showing a circular author photo, a
quote, and an author name.

#### Scenario: Testimonials

- **GIVEN** the testimonial section is rendered
- **WHEN** the carousel is inspected
- **THEN** three testimonials are shown, each with a photo, a quote, and
  an author name ("- Micky Mouse" / "- Tom Mouse" / "- Jerry Mouse")

### Requirement: Recent Trips section

The system SHALL render a white section with the centered title "Recent
Trips" and three trip cards, each showing a photo, a date, and a trip
title.

#### Scenario: Trip cards

- **GIVEN** the Recent Trips section is rendered
- **WHEN** the cards are inspected
- **THEN** three cards are shown, each with a date (e.g. "Mar 15, 2032")
  and a title (e.g. "Journeys Are Best Measured In New Friends")

### Requirement: Footer

The system SHALL render a dark-navy `#040E27` footer with four widgets
(logo, Company 4 links, Popular destination 8 links in two columns,
Instagram 6-photo grid) and a bottom copyright bar. The credit SHALL read
"This template is made with ♥ by **Component Dock**" linking
https://www.componentdock.com/ (no ColorLib credit).

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the logo widget, four Company links, eight Popular
  destination links, and the Instagram photo grid

#### Scenario: Footer credit

- **GIVEN** the footer bottom bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Wayfarer app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero slider, where you want to
  go, popular destination, newsletter, popular places, enjoy video,
  travel variation, testimonials, recent trips and footer in the correct
  order
- **AND** the document title SHALL be "Wayfarer — Travel Template"

## Verification checklist

- [ ] `openspec/specs/template-wayfarer/spec.md` validated
      (`npm run spec:validate`)
- [ ] App folder `apps/wayfarer`, package
      `@free-react-templates/wayfarer`, no ColorLib references in app code
      (grep for colorlib/Travelo in apps/wayfarer)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) —
      `bash scripts/verify-app.sh wayfarer`
- [ ] Section order matches the source: header → hero slider → where you
      want to go → popular destination → newsletter → popular places →
      enjoy video → travel variation → testimonials → recent trips →
      footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-teal: #1EC6B6`,
      `--color-coral: #FF4A52`, `--color-navy: #040E27`,
      `--color-soft: #F7FAFD`, `--color-muted: #7A838B`,
      `--color-star: #FDAE5C`, `--color-field-line: #363E52`, `--color-
    placeholder: #AAB1B7`, `--color-swiper-accent: #ff5e13`; Google
      Fonts `<link>`s in `index.html`: Rubik (300–900) + "Nothing You
      Could Do"
- [ ] Header: transparent over hero; brand left, centered nav (Home /
      About / Destination / Pages dropdown / Blog dropdown / Contact —
      Rubik 16px navy, hover teal), right phone ("10(256)-928 256" with
      red Phone icon) + 4 socials (Instagram / Linkedin / Facebook /
      airbnb→lucide substitute) + search icon; mobile hamburger → nav
      toggle; search icon → modal with input + red "search" button
- [ ] Hero: 650px slides (3: Indonesia / Australia / Switzerland), photo + navy overlay, cursive white h3, white p, teal "Explore Now"
      (boxed-btn3: radius 5, padding 18px 41px); white circular prev/next
      arrows (50px, hover orange `#ff5e13`) + pagination dots (12px,
      active `#ff5e13`)
- [ ] Where you want to go?: `#040E27` bg strip; heading + 3 fields
      (Where to go? text / date / Travel type select — transparent, 1px
      `#363E52` border, radius 5, 50px, white text, placeholder
      `#AAB1B7`, focus border `#ff5e13`) + red "Search" boxed-btn4
- [ ] Popular Destination: white bg, centered title + grey p; 6 cards
      (3-up): photo (radius 5, hover translateY(-10px)) + country (22px
      white, hover red) + teal "0N Places" pill (radius 30px)
- [ ] Newsletter: bg image + navy overlay .7; "Subscribe Our Newsletter"
      h4 + p + white email input (50px, radius 5) + red "Subscribe"
      button
- [ ] Popular Places: `#F7FAFD` bg, centered title + grey p; 6 white
      cards (3-up, hover shadow): teal "$500" price pill (top-left,
      radius 18px) + name h3 (22px navy, hover red) + country p + 5 gold
      `#FDAE5C` stars + "(20 Review)" + "5 Days"; centered red "More
      Places" button
- [ ] Enjoy Video: dimmed photo bg (overlay .2), cursive 80px "Enjoy
      Video" + 84px teal circular play button (radius 50%)
- [ ] Travel Variation: white bg; 3 items (icon + h3 22px navy:
      Comfortable Journey / Luxuries Hotel / Travel Guide + grey p)
- [ ] Testimonials: `#F7FAFD` bg; carousel of 3 (circular photo + navy
      18px quote + "- Micky Mouse" / "- Tom Mouse" / "- Jerry Mouse"
      grey); same swiper-style arrows/dots as the hero
- [ ] Recent Trips: white bg, centered "Recent Trips" (no subtitle);
      3 cards (photo radius 5 + grey date + navy 22px title, hover red)
- [ ] Footer: `#040E27` bg; 4 widgets (logo / Company 4 / Popular
      destination 8 two-col — fix "Franch"→"France" / Instagram 3×2
      squares) + bottom bar with Component Dock credit + no ColorLib
      credit
- [ ] Placeholder images via
      `https://picsum.photos/seed/wayfarer-<n>/<w>/<h>` (slider 1–3,
      destination 1–6, place 1–6, video bg, trip 1–3, testimonial
      portrait, instagram 1–6); icons from `lucide-react`; no `tel:`
      literals (render the phone as plain text)
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/travelo/`), design tokens, diffs
      (name, placeholder images, React slider/carousel + mobile nav +
      search modal instead of Swiper/Bootstrap, Component Dock footer
      credit); after merge mark BOTH TEMPLATES.md Travelo rows `[x]`
      (lines 519 and 3009 — Bootstrap 216 / Travel 44)
