# Template: Meadow (Environment / Green NGO Template)

## Purpose

Meadow is a single-page environment / green-NGO landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ecogreen" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ecogreen" — environment / wildlife-charity NGO
  landing page (Bootstrap 5 + tiny-slider + aos + glightbox; flaticon icon
  font; Google Fonts "Poppins" for EVERYTHING — body 16px / line-height 1.8
  and headings).
  (source: https://colorlib.com/wp/template/ecogreen/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/ecogreen/
  (HTTP 200, 49,115 bytes HTML fetched; `css/style.css` ~80 KB parsed; live
  DOM structure extracted section by section; screenshot reviewed in the
  browser).
- **Screenshot analyzed:** `ecogreen-colorlib-template.jpg` (1200×946, viewed
  in the browser). It shows: dark charcoal top info bar (white "ECOGREEN"
  wordmark with a small green leaf icon, email/phone/location contacts,
  white "DONATE NOW!" button) sitting above a BRIGHT LIME-GREEN navbar with
  white links (Home / About / Services / Projects / Blog / Contact) and a
  white "DONATE NOW" pill; hero = full-width elephant-on-savanna photo with
  green "SAVE THE WORLD" tag, white centered headline "Help Us to Save
  Animals", white subtext, bright-green "GET STARTED" button, and two slider
  dots at the bottom; services section on white with centered "Over 40K+
  People Working with us" (40K+ in green) and a row of FIVE cards with green
  blob icons (white glyphs) — Recycling / Water Refine / Ecosystem / Solar
  Energy / Save Animals. The screenshot cuts off at the services section;
  every section below the fold (campaign gallery, donate CTA, statistics
  band, volunteers, testimonials, fund-raised banner, blog, newsletter,
  footer) was confirmed from the live DOM + CSS instead.
- **Visual design:** brand green `#73b925` over near-white `#f9faf7`
  surfaces, dark charcoal `#1c1c1c` top bar, black-overlayed full-bleed photo
  bands (hero, donate, stats, newsletter, footer) with green `#73b925`
  overlays on the stats + newsletter bands; Poppins everywhere; signature
  icon shape = 70px green square with `border-radius: 0 50% 50% 50%` (three
  rounded corners — a "blob"); green `#73b925` primary buttons that invert
  to outline on hover; light-green tint family `#d7f1b9` / `#effae4` /
  `#f4f6f1` / `#f9faf7` for chips, icon borders, blog link buttons, and
  alternate section bands. Aesthetic: bright, clean, eco-charity.
- **Section order (1:1, from the DOM of the home page):**
  1. Top bar (`div.top-wrap`, bg `#1c1c1c`, padding 1.5em 0): left = brand
     `a.navbar-brand` "Eco<small>Green</small>" + `span` "Environment theme";
     then contact columns `div.con`: Email (paper-plane icon, label green
     `#73b925`, value `#b5b5b5`) — "Email: @info@email.com"; Call Us (phone
     icon) — "+2 392 3929 210"; Location (map icon) — "San Francisco,
     California, USA". (Source logo "EcoGreen" → "Meadow" wordmark + green
     leaf/sprout accent.)
  2. Navbar (`nav.navbar.ftco-navbar-light` — GREEN bar: `.container-xl`
     bg `#73b925`, links white): `a.btn-custom` "Donate Now!" (heart icon,
     white bg, uppercase 13px, `#1c1c1c`, skewed white `skewX(-35deg)`
     pseudo-shape, width 250px, order-lg-last) + hamburger `button.navbar-
toggler` ("Menu" + bars icon, collapses into a slide-down drawer) + nav
     links Home / About / Services / Projects / Blog / Contact
     (`.nav-link`: 15px, weight 500, color `rgba(255,255,255,0.8)`, active
     `#fff`, padding ~25px). On scroll the bar keeps a green bg (`#7bc628`).
  3. Hero slider (`section.slider-hero`, height 650px, `div.hero-slider`):
     TWO `div.item` slides, each `div.work` → `div.img.js-fullheight`
     (background photo, `:after` black overlay opacity 0.5, shadow
     `0px 20px 35px -30px rgba(0,0,0,0.26)`) with a centered `col-md-6` →
     `div.text.text-center`: `span.subheading` "Save the World" (uppercase,
     weight 700, 14px, letter-spacing 2px, `rgba(255,255,255,0.7)`), `h1`
     white (Poppins, 40px, weight 400) — slide 1 "Make the World Green
     Again", slide 2 "Help Us to Save Animals", `p` (Lorem — paraphrase),
     `a.btn.btn-primary` "Get Started" (green pill, padding ~1.5rem, white
     text, arrow icon). Slider dots bottom-center (2 dots in the
     screenshot). Recreation: state-based slider with dot nav + autoplay.
  4. Services (`section.ftco-section.ftco-no-pb`, white): centered
     `heading-section` — `span.subheading` "Services" (13px uppercase
     letter-spacing 1px, green `#73b925`) + `h2` 40px weight 500 "Over
     <span>40K+</span> People Working with us" (span green); `div.row.g-lg-2`
     of FIVE `div.col-lg` → `div.services` cards (white, padding 30px,
     radius 2px, hover transition): `div.icon` 70×70 green `#73b925`
     `border-radius: 0 50% 50% 50%` with centered 50px white flaticon glyph
     (flaticon-recycle / -water / -ecosystem / -solar-energy / -save) +
     `div.text`: `h2` 22px weight 500 title (Recyling [source typo] / Water
     Refine / Ecosystem / Solar Energy / Save Animals) + `p` (source repeats
     one Lorem line — recreate 5 DISTINCT blurbs). Hover: icon bg flips to
     white (glyph → green).
  5. Campaign (`section.ftco-gallery.ftco-section.ftco-no-pb.bg-light`,
     bg `#f4f6f1`, container-fluid): centered heading — subheading
     "Project" + `h2` "Our Campaign"; `div.row.g-lg-0` of FOUR `div.col-md-3`
     → `div.gallery-wrap` (white, overflow hidden):
     `a.img` 312px background-photo (glightbox lightbox link) with hover
     search icon — 40px circle `border-radius: 50% 50% 50% 0` bg
     `rgba(255,255,255,0.8)`, black glyph, top-right; `div.text` padding
     25px: `span.sub` chip (13px uppercase green on `#effae4`, radius 2px) —
     Ecology / Water / Planting; `h2` 20px weight 500 title — Ecological
     Friendly / Planting more trees / Water Pollution / Planting Trees; `p`
     (paraphrase); progress bar (`.progress` track light, `.progress-bar`
     green fill 70% with green 13px "70%" label and a 34px green square
     end-cap) + `div.raised-goal` 13px — "Raised: $9800 / Goal: 15000";
     `a.btn.btn-primary` "Donate Now!". (Source repeats 70% / $9800 / 15000
     on all four — recreate with 4 DISTINCT percentages + amounts.)
  6. Donate CTA (`section.ftco-section.ftco-image`, bg photo with an
     off-white `#f9faf7` overlay on the right 53% where the text sits):
     `span.subheading` "Become A Volunteer" + `h2` "Join Our Event & Helping
     us by our Donation" + `p` (paraphrase); `div.row.g-md-2` of THREE
     `a.services-2` cards (white, padding 20px, radius 4px): `div.icon`
     80×80 with 1px solid `#d7f1b9` border, `border-radius: 0 50% 50% 50%`,
     centered 40px green flaticon glyph (flaticon-donation / -ecosystem /
     -charity) + `div.text` `h2` 16px weight 500 — "Donate Now" / "Project
     Sponsor" / "Be A Volunteer". Hover: icon bg + border → green
     (glyph → white).
  7. Statistics (`section.ftco-section-counter.img`, bg photo `bg_3.jpg`
     with `.overlay` bg `#73b925` opacity 0.9 — a SOLID GREEN band): centered
     `heading-section.heading-section-white` — subheading white "Great
     Reviews for our services" + `h2` white "Technical Statistics";
     `div.row.section-counter` of FOUR `div.col-sm-6.col-lg-3` →
     `div.counter-wrap-2` (centered, bg `rgba(255,255,255,0.1)`, padding 30px,
     radius 4px): `div.icon` 50px white flaticon glyph (fund/heart, project,
     flaticon-donation, flaticon-charity) + `h2.number` 44px weight 500 white
     letter-spacing 2px — "$60M" (countup), "9200", "5800", "2750" + caption:
     "Fund Raised" / "Completed Projects" / "Donation" / "Volunteer".
  8. Volunteers (`section.ftco-section`, white): centered heading —
     subheading "Meet Our Volunteer" + `h2` "Our Volunteer"; `div.row` of
     FOUR `div.col-md-6.col-lg-3` → `div.staff`: `div.img-wrap` → `div.img`
     200×200 round (`border-radius: 50%`) background-photo + `div.text
text-center` (white card, width 93%, padding 110px 30px 30px, overlaps
     the image): `h3` 20px weight 500 name — Jason Smith / Jeffrey
     Rockenson (source repeats "Jason Smith" ×3 — recreate 4 DISTINCT
     names) + `span.position` green uppercase 14px "Volunteer" + social row
     (34px green `#73b925` circles, white icons: twitter / facebook / google
     / instagram → inline SVG brand icons in the recreation) + bio `p`.
  9. Testimonials (`section.ftco-section.testimony-section.bg-light`, bg
     `#f4f6f1`): centered heading — subheading "Testimonial" + `h2` "Happy
     Customers"; `div.carousel-testimony` (tiny-slider) of `div.item` →
     `div.testimony-wrap` (white card, padding 30px, radius 4px, shadow
     `0px 30px 33px -41px rgba(0,0,0,0.24)`): `div.icon` 40px GREEN circle
     (quote glyph, absolute top -20px left 30px) + `div.text`: quote `p`
     (paraphrase) + author row: `div.user-img` round avatar + `p.name`
     "Roger Scott" + `span.position` "Marketing Manager" (source repeats the
     same person ×3 — recreate 3+ DISTINCT customers with generic roles).
  10. Fund-raised banner (`section.ftco-section.ftco-no-pt.ftco-no-pb.bg-
white`): `div.col-md-6` → `div.mt-0.my-lg-5.py-5`: `h2` "Do You Care
      Our Mother Earth Like We Do?" + two paragraphs (paraphrase) +
      `div.fund-raised` (bg `#f9faf7`, padding 10px 30px, `margin-left:
-48px` bleed): `div.icon` 60px green heart glyph + `div.text`: `h4`
      40px GREEN `#73b925` "$920,000" + `span` "Funds raised by 1200
      people".
  11. Blog (`section.ftco-section`, white, container-xl): centered heading —
      subheading "Our Blog" + `h2` "Recent From Blog"; `div.row` of FOUR
      `div.col-md-6.col-lg-3` → `div.blog-entry` (white card, radius 4px):
      `a.block-20.img` background-photo + `div.text` (padding 30px): `p.meta`
      (user icon "Admin" · calendar icon "Feb. 22, 2021" · comment icon "3
      Comments") + `h3.heading` 20px weight 500 title (source repeats
      "Deforestation is the Threat to Our Ecological System" ×4 — recreate 4
      DISTINCT eco-themed titles) + `p` snippet + `a.btn-custom` 30×30
      light-green `#d7f1b9` radius 4px with green link icon (hover: bg green,
      icon white).
  12. Newsletter (`section.ftco-intro-2.img`, bg photo `bg_3.jpg` +
      `.overlay` green `#73b925` opacity 0.8, padding 5em 0): split row —
      left: `span.subheading` white "Newsletter" + `h1` white 30px weight 600
      "Subscribe for Newsletter"; right: `a.btn.btn-white` "Subscribe now!"
      (white bg + border, green text; hover → transparent + white).
  13. Footer (`footer.ftco-footer.img`, bg photo `bg_1.jpg` + `.overlay`
      black `#000` opacity 0.8, padding 7em 0 0, text
      `rgba(255,255,255,0.9)`): FOUR widgets in `row.mb-5`:
      - Col 1: `h2.logo` → `a.navbar-brand` 28px white "Eco<small>Green</
        small>" (accent `#73b925`) + "Environment theme" + blurb `p`
        (paraphrase) + `ul.ftco-footer-social` (30px green `#73b925` squares,
        radius 4px, white icons — twitter / facebook / instagram).
      - Col 2: "Services" — 8 links with `ion-ios-arrow-round-forward`
        arrows: Recycling / Water Refine / Ecosystem / Solar Enerfy [source
        typo → fix "Solar Energy"] / Save Animals / Plant Ecology / Dynamic
        Ecology / Tree Planting.
      - Col 3: "Recent Posts" — two `div.block-21` rows: 50px round thumb +
        meta (calendar "Feb. 22, 2021", user "Admin") + `h3.heading` 16px
        white title (source repeats "Ecological System Responsible for Green
        Energy" — recreate 2 DISTINCT titles).
      - Col 4: "Have a Questions?" — `div.block-23` contact lines (green
        icons): "203 Fake St. Mountain View, San Francisco, California,
        USA" / "+2 392 3929 210" / "info@yourdomain.com".
      - Bottom bar: copyright "© <year> All rights reserved | This template
        is made with ♥ by Colorlib" → Component Dock credit (repo rule, NOT
        ColorLib).
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Brand green **`#73b925`** (70 uses): `.btn.btn-primary` bg/border;
    `.services .icon` bg; `.services-2:hover .icon` bg/border;
    `.ftco-navbar-light .container-xl` navbar bg; `.heading-section
.subheading` text; `.gallery-wrap .text span.sub` text; `.progress-bar`
    fill + label; `.testimony-wrap .icon` bg; `.staff .text .position` text;
    `.staff .ftco-social li a` bg; `.fund-raised` icon + `h4`; footer logo
    accent; `.block-23` icon text; `.btn-custom span` (navbar);
    `.section-counter .overlay` (opacity .9) and `.ftco-intro-2 .overlay`
    (opacity .8) — the two GREEN photo overlays.
  - Scrolled-nav green **`#7bc628`** (`.ftco-navbar-light` scrolled bg).
  - Light-green tint family: **`#d7f1b9`** (`.services-2 .icon` 1px border,
    `.blog-entry .text .btn-custom` bg), **`#effae4`** (gallery `span.sub`
    chip bg), **`#f4f6f1`** (`.bg-light` override — campaign + testimony
    bands), **`#f9faf7`** (body bg; `.ftco-image .overlay` right-side
    overlay; `.fund-raised` bg).
  - Dark: **`#1c1c1c`** (`.top-wrap` bg; `.btn-custom` text; `.hero-wrap
.overlay` bg at opacity .4), black `#000` (hero `:after` overlay .5,
    footer overlay .8).
  - Text: body Poppins **16px / line-height 1.8 / `#8c8c8c`**; headings
    Poppins weight 500 (`.heading-section h2` 40px); nav links
    `rgba(255,255,255,0.8)` / active `#fff`; top-bar contact values
    `#b5b5b5` (labels green); hero text `rgba(255,255,255,0.8)`; footer text
    `rgba(255,255,255,0.9)`.
  - Fonts: **"Poppins"** for body AND headings (body rule: `font-family:
"Poppins", Arial, sans-serif; font-size: 16px; line-height: 1.8;
color: #8c8c8c; background: #f9faf7`). Load via Google Fonts `<link>` in
    the recreation.
  - Radii: signature icon shape **`border-radius: 0 50% 50% 50%`** (three
    rounded corners — "blob") on `.services .icon` (70×70) and
    `.services-2 .icon` (80×80); inverted `50% 50% 50% 0` on the gallery
    hover search icon; cards 2px (`.services`), 4px (`.services-2`,
    `.blog-entry`, `.testimony-wrap`, `.counter-wrap-2`, footer social,
    blog btn-custom); round avatars + staff images 50%; footer social 4px
    squares.
  - Buttons: `.btn.btn-primary` green bg + 1px green border + white text,
    hover → transparent bg + green text; `.btn.btn-white` white bg + border
    - green text, hover → transparent + white; navbar `.btn-custom` white
      bg, uppercase 13px weight 500, `#1c1c1c`, padding 1.5rem, width 250px,
      skewed `:before` `skewX(-35deg)` white shape (radius 0 — rectangular).
  - Shadows: hero img `0px 20px 35px -30px rgba(0,0,0,0.26)`; testimony
    card `0px 30px 33px -41px rgba(0,0,0,0.24)`.
  - Photo bands (full-bleed `background-image` sections, each with its own
    overlay): hero (black .5), donate `.ftco-image` (right 53% `#f9faf7`
    overlay — the content sits on the off-white side), stats (GREEN .9),
    newsletter (GREEN .8), footer (black .8).
  - Signature motifs: dark `#1c1c1c` top info bar above a green navbar;
    green blob icons (0 50% 50% 50%); 13px uppercase green subheading above
    EVERY section heading (white variant on dark bands); 40px weight-500
    section h2 with green `<span>` accents; green progress bars with
    "Raised/Goal" microcopy; white card + 40px green quote circle on
    testimonials; 200px round volunteer photos with overlapping white text
    cards; `#f4f6f1` alternate bands for gallery + testimonials;
    green-overlay stats + newsletter bands; dark 4-widget footer.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/meadow-<n>/<w>/<h>`; screen seeds before pinning —
  hero slide 1 = savanna/wildlife-adjacent landscape, slide 2 = forest/
  nature, campaign ×4 nature shots, staff ×4 portraits (verified-good
  person ids 1027, 64, 823, 996; avoid known-bad ids
  91/177/338/65/1005/342/838), avatars ×3, blog ×4); icons → lucide-react
  (Recycle, Droplets, Sprout, Sun, PawPrint, Leaf, Globe, Heart,
  HeartHandshake, HandHeart, TreePine, Search, Quote, Menu, X, ArrowRight,
  Phone, Mail, MapPin, Calendar, User, MessageCircle, Link2 — probe EVERY
  export with the typeof check before importing; brand icons
  Facebook/Twitter/Instagram/Google NOT in lucide-react → inline SVG
  paths); Poppins via Google Fonts `<link>` in `index.html`; brand green
  `#73b925` + `#7bc628` + light-green tints `#d7f1b9`/`#effae4`/`#f4f6f1`/
  `#f9faf7` + dark `#1c1c1c` + text `#8c8c8c`/`#b5b5b5` in `@theme`; no
  asset/CSS/font-file copying. Demo copy paraphrased but same kinds (top
  bar contacts, nav + "Donate Now!" CTA, hero slider with eyebrow + h1 +
  paragraph + Get Started pill, 5 service cards, campaign gallery with
  progress bars + raised/goal + donate buttons, 3 donate-link cards, 4
  green stat counters, 4 volunteer cards with socials, testimonial slider,
  fund-raised banner, 4 blog cards, newsletter split band, 4-widget dark
  footer). Source repetition cleaned up: 5 distinct service blurbs, 4
  distinct campaign items (percentages/amounts), 4 distinct volunteers
  (source repeats "Jason Smith" ×3), 3 distinct testimonial customers
  (source repeats Roger Scott ×3), 4 distinct blog titles (source repeats
  one ×4), 2 distinct footer recent-post titles, "Solar Energy" typo fixed.

Meadow lives in `apps/meadow` and uses shared components from `packages/ui`
(Button, ButtonLink, cn) plus the repo-standard Navbar/Footer chrome
(adapted to the dark top bar + green navbar and the dark 4-widget footer),
and the repo-standard dark-mode toggle.

## Requirements

### Requirement: Top bar

The system SHALL render a dark top info bar with the brand wordmark and
contact details.

#### Scenario: Top bar content

- **GIVEN** the Meadow page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL be dark (`#1c1c1c`) and show the brand
  "Meadow" with a small green leaf/sprout accent and the tagline
  "Environment theme"
- **AND** the top bar SHALL show three contact items with green icons and
  gray values: "Email: @info@email.com", "Call Us +2 392 3929 210", and
  "Location San Francisco, California, USA"

### Requirement: Navbar

The system SHALL render a green navbar with white links and a "Donate Now!"
call-to-action, collapsing to a mobile drawer.

#### Scenario: Navbar content

- **GIVEN** the Meadow page is rendered
- **WHEN** the navbar is visible
- **THEN** the navbar SHALL be green (`#73b925`) with white 15px links:
  Home / About / Services / Projects / Blog / Contact (active link solid
  white)
- **AND** the navbar SHALL show a white "Donate Now!" button (heart icon,
  uppercase 13px, dark text) and, on mobile, a "Menu" hamburger that opens
  a slide-down drawer with the same links

### Requirement: Hero slider

The system SHALL render a full-width hero photo slider with two slides, a
green eyebrow, a white headline, and a green "Get Started" button.

#### Scenario: Hero slides

- **GIVEN** the Meadow page is rendered
- **WHEN** the hero section is visible
- **THEN** the hero SHALL be a 650px photo slider with a dark overlay, a
  centered white column showing the uppercase green-ish eyebrow "Save the
  World", a 40px white headline, a gray paragraph, and a green pill "Get
  Started" button with an arrow
- **AND** the slider SHALL have two slides — "Make the World Green Again"
  and "Help Us to Save Animals" — with dot navigation and autoplay

### Requirement: Services

The system SHALL render a "Services" section with five green-blob-icon
cards.

#### Scenario: Service cards

- **GIVEN** the Meadow page is rendered
- **WHEN** the services section is visible
- **THEN** the section SHALL show the green subheading "Services" and the
  40px heading "Over 40K+ People Working with us" with "40K+" in green
- **AND** the section SHALL show five cards in a row, each with a 70px
  green icon (three rounded corners), a 22px title — Recycling, Water
  Refine, Ecosystem, Solar Energy, Save Animals — and a distinct paragraph
- **AND** on hover the icon SHALL flip to a white background

### Requirement: Campaign gallery

The system SHALL render an "Our Campaign" gallery on a light band with four
items, each with a photo, label chip, progress bar, and raised/goal figures.

#### Scenario: Campaign items

- **GIVEN** the Meadow page is rendered
- **WHEN** the campaign section is visible
- **THEN** the section SHALL show the subheading "Project" and the heading
  "Our Campaign" on the `#f4f6f1` background
- **AND** the section SHALL show four photo cards, each with a green label
  chip (Ecology / Water / Planting), a 20px title (Ecological Friendly /
  Planting more trees / Water Pollution / Planting Trees), a green progress
  bar with a percentage label, "Raised: $X / Goal: $Y" microcopy, and a
  green "Donate Now!" button
- **AND** the four items SHALL have DISTINCT percentages and raised/goal
  amounts (the source repeats 70% / $9800 / 15000 on all four)
- **AND** each photo SHALL reveal a round search icon on hover

### Requirement: Donate CTA

The system SHALL render a donate call-to-action band with three
"services-2" link cards.

#### Scenario: Donate links

- **GIVEN** the Meadow page is rendered
- **WHEN** the donate section is visible
- **THEN** the section SHALL show the subheading "Become A Volunteer", the
  heading "Join Our Event & Helping us by our Donation", a paragraph, and
  three white cards: "Donate Now", "Project Sponsor", "Be A Volunteer"
- **AND** each card SHALL have an 80px icon with a light-green
  (`#d7f1b9`) border and a green glyph that flips to a solid green
  background on hover

### Requirement: Statistics

The system SHALL render a solid green statistics band with four counters.

#### Scenario: Counter band

- **GIVEN** the Meadow page is rendered
- **WHEN** the statistics section is visible
- **THEN** the section SHALL be a photo band with a solid green `#73b925`
  overlay and show white subheading "Great Reviews for our services" and
  white heading "Technical Statistics"
- **AND** the section SHALL show four translucent counter cards
  (`rgba(255,255,255,0.1)`, radius 4px) with a white icon, a 44px white
  number — $60M / 9200 / 5800 / 2750 — and a caption: Fund Raised /
  Completed Projects / Donation / Volunteer

### Requirement: Volunteers

The system SHALL render an "Our Volunteer" section with four staff cards.

#### Scenario: Staff cards

- **GIVEN** the Meadow page is rendered
- **WHEN** the volunteers section is visible
- **THEN** the section SHALL show the subheading "Meet Our Volunteer" and
  the heading "Our Volunteer"
- **AND** the section SHALL show four cards, each with a 200px round photo,
  a white text card overlapping it with a name, a green uppercase
  "Volunteer" position line, a bio, and a row of four round green social
  icons
- **AND** the four volunteers SHALL be distinct people (the source repeats
  "Jason Smith" three times)

### Requirement: Testimonials

The system SHALL render a testimonial slider on a light band with distinct
customer cards.

#### Scenario: Testimonial slider

- **GIVEN** the Meadow page is rendered
- **WHEN** the testimonials section is visible
- **THEN** the section SHALL show the subheading "Testimonial" and the
  heading "Happy Customers" on the `#f4f6f1` background
- **AND** the section SHALL show a slider of white cards (radius 4px) each
  with a 40px green quote circle overlapping the top-left corner, a quote
  paragraph, a round avatar, a name, and a position
- **AND** the customers SHALL be three or more distinct people with generic
  roles (the source repeats "Roger Scott — Marketing Manager" on every
  slide)

### Requirement: Fund-raised banner

The system SHALL render a white banner with an eco-care headline and a
fund-raised stat block.

#### Scenario: Banner content

- **GIVEN** the Meadow page is rendered
- **WHEN** the banner section is visible
- **THEN** the section SHALL show the 40px heading "Do You Care Our Mother
  Earth Like We Do?", two paragraphs, and a `#f9faf7` fund-raised block
  bleeding left with a green heart icon, a 40px green "$920,000" figure,
  and "Funds raised by 1200 people"

### Requirement: Blog

The system SHALL render a "Recent From Blog" section with four distinct
blog cards.

#### Scenario: Blog cards

- **GIVEN** the Meadow page is rendered
- **WHEN** the blog section is visible
- **THEN** the section SHALL show the subheading "Our Blog" and the heading
  "Recent From Blog"
- **AND** the section SHALL show four white cards, each with a photo,
  meta line (Admin / date / comment count), a 20px title, a snippet, and a
  30px light-green link button
- **AND** the four titles SHALL be distinct eco-themed headlines (the
  source repeats the same title on all four cards)

### Requirement: Newsletter

The system SHALL render a green-overlay newsletter band with a subscribe
button.

#### Scenario: Newsletter band

- **GIVEN** the Meadow page is rendered
- **WHEN** the newsletter section is visible
- **THEN** the section SHALL be a photo band with a solid green `#73b925`
  overlay showing the white subheading "Newsletter", the white 30px heading
  "Subscribe for Newsletter", and a white "Subscribe now!" button with
  green text

### Requirement: Footer

The system SHALL render a dark four-widget footer with a Component Dock
credit.

#### Scenario: Footer content

- **GIVEN** the Meadow page is rendered
- **WHEN** the footer is visible
- **THEN** the footer SHALL be dark (black overlay) and show a brand widget
  (wordmark + tagline + blurb + 30px green square social icons), a
  "Services" links column, a "Recent Posts" column (two rows with round
  thumbnails, date, and title), and a "Have a Questions?" contact widget
  (address, phone, email)
- **AND** the bottom bar SHALL show the copyright line with a link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/meadow` scaffolded from the simplest existing app; package
      renamed to `@free-react-templates/meadow`; `public/CNAME` =
      `meadow.free.componentdock.com`; homepage
      `https://meadow.free.componentdock.com`.
- [ ] No "colorlib" string anywhere in `apps/meadow/*` (provenance only in
      this spec, TEMPLATES.md, and the PR).
- [ ] `@theme` tokens: `--color-brand: #73b925`, `--color-brand-deep:
#7bc628`, `--color-mint: #d7f1b9`, `--color-mint-soft: #effae4`,
      `--color-mist: #f4f6f1`, `--color-canvas: #f9faf7`, `--color-ink:
    #1c1c1c`, `--color-body: #8c8c8c`, `--color-faint: #b5b5b5`; Poppins
      (body 16px / line-height 1.8 + headings) via Google Fonts `<link>`.
- [ ] Section order 1:1: Top bar → Navbar → Hero slider → Services →
      Campaign → Donate CTA → Statistics → Volunteers → Testimonials →
      Fund-raised banner → Blog → Newsletter → Footer.
- [ ] Signature motifs preserved: dark `#1c1c1c` top bar + green `#73b925`
      navbar; green blob icons (`border-radius: 0 50% 50% 50%`) on services
      (70px) and donate cards (80px, `#d7f1b9` border); 13px uppercase green
      subheading over every section heading (white on dark bands); 40px
      weight-500 section h2 with green `<span>` accents; green progress
      bars with raised/goal microcopy; `#f4f6f1` bands for gallery +
      testimonials; solid green overlays on the stats + newsletter photo
      bands; dark 4-widget footer.
- [ ] Buttons: `.btn-primary` green bg + 1px green border, hover →
      transparent + green text; `.btn-white` white bg, green text, hover →
      transparent + white; navbar "Donate Now!" = white skewed-shape
      button with heart icon.
- [ ] Photo bands use seeded picsum placeholders (screened — avoid
      known-bad ids 91/177/338/65/1005/342/838; verified-good person ids
      1027/64/823/996 for staff + avatars); overlays recreated with solid
      color/gradient layers (hero black 0.5, stats green 0.9, newsletter
      green 0.8, footer black 0.8, donate right-side `#f9faf7`).
- [ ] Distinct content everywhere the source repeats: 5 service blurbs,
      4 campaign items (distinct % + amounts), 4 volunteers (source
      repeats Jason Smith ×3), 3+ testimonial customers (source repeats
      Roger Scott ×3), 4 blog titles (source repeats one ×4), 2 footer
      recent-post titles; footer credit → Component Dock (NOT ColorLib).
- [ ] Hero slider: state-based slider with dot nav + autoplay (2 slides);
      testimonial slider: state-based with dot nav (3 distinct cards).
- [ ] Tests written first (TDD) mirroring every scenario; 100% line/
      function/branch/statement coverage; jsdom 30 localStorage
      polyfill copied from `apps/cura/src/test/setup.ts` if needed.
- [ ] `bash scripts/verify-app.sh meadow` passes (typecheck + lint +
      knip + fallow + coverage + build).
- [ ] PR description includes: source (ColorLib Ecogreen), preview URL,
      design tokens (green `#73b925`, `#7bc628`, tints `#d7f1b9`/
      `#effae4`/`#f4f6f1`/`#f9faf7`, dark `#1c1c1c`, Poppins, blob icon
      radii, green overlays), and what differs (wordmark, picsum photo
      placeholders, distinct service/campaign/volunteer/testimonial/blog
      copy, slider implemented in React, Component Dock credit, no asset
      copying).
- [ ] Post-merge bookkeeping: mark BOTH TEMPLATES.md "Ecogreen" rows
      (lines 577 and 1556) `[x]` with the live URL and run
      `npm run readme:status`.
