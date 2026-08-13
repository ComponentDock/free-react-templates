# Template: Waypoint (Directory & Listing Template)

## Purpose

Waypoint is a single-page city-directory / listing website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Directone" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Directone" — city directory & listing website
  (Bootstrap 5 + tiny-slider + glightbox + rellax + aos + font-awesome 4.7 +
  ionicons + flaticon + Google Maps API; font "Nunito Sans" declared in
  `css/style.css` — no Google Fonts link in the head, intended font loads
  via the theme, so load Nunito Sans explicitly via Google Fonts `<link>`).
  (source: https://colorlib.com/wp/template/directone/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/directone/
  (HTTP 200, ~56 KB HTML fetched + `css/style.css` ~74 KB parsed; live DOM
  structure extracted, screenshot reviewed).
- **Screenshot analyzed:** `directone-free-template.jpg` (1200×946 AVIF,
  downloaded + viewed in browser). NOTE: the screenshot shows an OLDER
  variant of the template than the live preview — it has a full utility bar
  (phone + "Search or enter website name" + HELP DESK / SIGN IN) and a
  3-field hero search bar ("What are you looking for?" / "Search Location" /
  "All Categories" + red Search). The LIVE preview is the authoritative
  reference: top bar shows phone + social links, hero search is a single
  "All Categories" select + red Search button. Shared design language in
  both: dark ink navbar with red accent, twilight European-town hero photo,
  "Let's Explore Your Awesome City" centered white headline, 12 category
  cards with listing counts (Hotels card highlighted red = featured), red
  "Add Listing" CTA, listing cards with category tag + title + address +
  phone + Review 5.0/5 (100), red section subheadings. Aesthetic: bold
  red/coral `#ff414d` accent over dark ink `#151c26` / `#10151c` and light
  gray `#f8f9fa` surfaces, rounded-4px buttons and cards, uppercase
  letter-spaced button labels, modern clean sans typography.
- **Section order (1:1, from the DOM of the home page):**
  1. Top bar (`div.topper` inside `header` → `div.container-xl` → `div.row
justify-content-between`): left `div.col-md.topper.d-flex` "Free Call"
     label + `+1 234 456 78910`; right social links `#` → Facebook /
     Twitter / Dribbble (font-awesome icons in the source → inline SVG
     brand icons in the recreation, lucide-react has NO brand icons).
  2. Navbar (`nav.navbar.navbar-expand-lg.ftco-navbar-light` →
     `div.container-xl`): `.ftco-navbar-light` is TRANSPARENT + absolute at
     `top: 51px` over the hero (white brand "Directone" + nav links);
     brand `a.navbar-brand` color #fff (logo image in source: red pin/flame
     icon over "Directone" with tagline "Directory and Listing" below);
     nav links (white uppercase 13px 700 `rgba(255,255,255,0.7)`, padding
     25px): Home / About / Listing / Blog / Contact; right
     `a.btn.btn-primary` "Add Listing" — solid `#ff414d`, white text,
     radius 4px; on mobile (`<992px`) navbar bg flips to solid `#151c26`,
     `position: relative`, `top: 0`.
  3. Hero (`section.hero-wrap` — `height:100vh; min-height:750px`,
     background photo cover, `background-attachment: fixed`, `z-index:0` +
     `div.overlay` black `opacity:.3`): `div.container` → `div.row
no-gutters.slider-text` centered → `div.col-lg-8.text-center.pb-5`:
     `h1` white 64px 700 line-height 1.2 (40px mobile) — "Let's Explore Your
     Awesome City"; `p` (white, rgba white) — "Find great places to stay,
     eat, shop, or visit from local experts."; search form
     (`div.row.justify-content-center` → `div.col-lg-9`): a
     `.search-property-1` white bar — `select.form-control` "All Categories"
     with 12 options (Food & Drinks / Hotel / Shopping / Beauty / Fitness /
     Bar & Club / Games / Places / Circus / Theater / Sports / Health) +
     `a.btn.btn-primary` "Search" — solid `#ff414d`, white uppercase 12px
     600 letter-spacing 1px, radius 4px, shadow
     `0 24px 36px -11px rgba(0,0,0,0.09)`.
  4. Categories (`section.ftco-section.ftco-no-pt.ftco-no-pb.bg-light` →
     `div.services-wrap`, `margin-top:-80px` — overlaps the hero bottom):
     `div.row.g-3` of TWELVE `div.col-md-4.col-lg-2.text-center` cards
     (`div.services` — white bg, padding 30px, radius 4px, shadow
     `0 5px 14px -6px rgba(0,0,0,0.07)`; featured card = solid `#ff414d`
     bg + white text): flaticon icon + `h3` category name + `p` "N Listings".
     Source categories + counts: Food & Drink (103) / Hotels (40) /
     Shopping (100) / Beauty (36) / Fitness (30) / Bar & Club (12) / Games
     (103) / Places (40) / Circus (100) / Theater (36) / Sports (30) /
     Health (12). NOTE: source repeats counts 103/40/100/36/30/12 twice —
     recreate with DISTINCT plausible counts per category.
  5. Popular Listing (`section.ftco-section.bg-light`): centered heading
     (`div.heading-section.text-center.mb-5`): `span` red uppercase 12px 600
     subheading + `h2` 50px 700 "Popular Listing" (h2 has a `span` at weight
     400 for part of the heading in the theme — keep single-color for
     simplicity unless the source heading visibly splits); FOUR listing
     cards (`div.col-md-6.col-lg-3` → `div.listing-wrap`): top image
     (`div.img`, source photos) with category icon overlay on hover; text:
     `p.subheading` red uppercase 12px 600 (category tag, e.g. Food &
     Drinks), `h3` 22px 600 title — Japanese Restaurant / Harbor Lights
     Hotel / MS Center Mall of Asia / Maxout Fitness Gym; `ul` with red
     icon spans: address "Suite 721 New York NY 10016" + phone
     "+00 123 456 7890"; `div.info-wrap2` (border-top 1px
     `rgba(0,0,0,0.07)`, padding-top 15px): "Review 5.0/5 (100)".
  6. Special Offers strip (`section.ftco-intro.bg-light`): `div.row.g-0` —
     left `div.col-md-4` white text block: `span.subheading` red uppercase
     "Special Offers" + `h2` "We Have Special Offers Every Now and Then" +
     `a.btn.btn-darken` "Show Special Offers" (solid `#151c26`, hover →
     transparent + dark text); right `div.col-md-8.aside-stretch.aside` —
     red diagonal-stripe panel (`linear-gradient(129deg, #ff414d 25%,
#f03943 25%, #f03943 50%, #ff414d 50%, ...)`, tile size 25.74px ×
     31.78px).
  7. Our Listing (`section.ftco-section.bg-light`): heading "Our Listing" +
     EIGHT listing cards (same 4 titles repeated ×2 in the source — recreate
     8 DISTINCT listings, e.g. add La Terrazza Ristorante / Skyline Boutique
     Hotel / Galleria Grand Mall / Iron Temple Gym).
  8. About (`section.ftco-section.ftco-about-section.ftco-no-pt.ftco-no-pb`):
     `div.row.g-xl-5` — left `div.col-md-5` image (`div.img`, source
     photo); right `div.col-md-7.py-5.heading-section`: `span` red
     uppercase "Welcome to Directone" + `h2` "Directone A Directory &
     Listing" + two paragraphs (Lorem ipsum...); below `div.row.py-5.g-2`:
     FOUR stat boxes (`div.col-md-6.col-lg-3`) — counter `0` / `0K+` / `0`
     / `0` with labels "Years of Experienced" / "Total Listing" / "Company
     Staf" / "Happy People" (source counters are 0 in the static DOM — use
     realistic numbers, e.g. 10+ / 2K+ / 25 / 1.5K+; fix the "Staf" typo).
  9. Testimonials (`section.ftco-section.testimony-section.bg-light`):
     centered heading: `span` red "Testimonial" + `h2` "Happy People";
     carousel (`div.row` → `div.col-md-12`, tiny-slider in source) of
     THREE+ quote slides: quote paragraph (Lorem ipsum...) + author name
     "Roger Scott" + role "Marketing Manager" (source repeats the SAME
     person on all slides — recreate 3 DISTINCT customers, e.g. Roger
     Scott / Aisha Patel / Marco Ruiz with varied roles).
  10. How It Works (`section.img.v-section.ftco-section` — bg photo +
      `div.overlay` `#151c26`): heading white: `span` red uppercase
      "Let's Find Out" + `h2` "How It Works"; centered 80px white circle
      play button (`div.icon-video`, red play icon, pulse animation — can
      be a decorative element or video-trigger placeholder, no backend);
      FOUR step cards (`div.col-md-3`): numbered heading "1. Choose A
      Category" / "2. Find What You Want" / "3. Select The Best Place" /
      "4. Explore The Place" + one paragraph each (Lorem ipsum...).
  11. Recent Blog (`section.ftco-section.bg-light`): heading: `span` red
      "Our Blog" + `h2` "Recent Blog"; FOUR blog cards (`div.col-md-3`):
      author row "John Dorf" + meta "Dec. 05, 2020" + "3 Comments", image,
      `h3` title "Explore The Best Restaurant in New York" + excerpt
      (source repeats the SAME post 4× — recreate 4 DISTINCT
      directory-related posts, e.g. "Top 10 Cafés to Try This Season" /
      "A Weekend Guide to Downtown" / "Hidden Gems: Local Boutiques" /
      "Best Family-Friendly Spots in the City").
  12. Footer (`footer.ftco-footer` — bg `#10151c`, padding `7em 0 0 0`,
      text `rgba(255,255,255,0.7)`): `div.container-xl` → `div.row.mb-5
pb-5.justify-content-between`:
      - `div.col-md-6.col-lg` (brand): logo "Directone" white + tagline +
        blurb paragraph (Lorem ipsum...) + social icon row (source: 3
        icons Facebook/Twitter/Dribbble).
      - `div.col-md-6.col-lg-2` × 3: widget columns with white 20px 700
        headings (margin-bottom 40px) + `ul li` (margin-bottom 10px):
        "Explore" → About Us / Account / Listing / Pricing Packages;
        "Quick Links" → Contact Us / Terms & Conditions / Privacy /
        Feedbacks; "Categories" → Food & Drinks / Hotels / Shopping /
        Beauty / Fitness / Bar & Club.
      - `div.col-md-6.col-lg` "Have a Questions?" — address "203 Fake St.
        Mountain View, San Francisco, California, USA" + phone
        "+2 392 3929 210" + email "info@yourdomain.com".
      - Bottom bar `div.container-fluid.px-0.py-5.bg-darken` (`#151c26`,
        `#0c1016` inside footer) → `div.container-xl` → centered copyright
        line → Component Dock credit (repo rule, NOT ColorLib).
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Primary brand **red/coral `#ff414d`** (~67 uses): `.btn.btn-primary`
    solid bg (and hover outline), `.services` featured bg, `.aside-stretch`
    panel, `.listing-wrap .text .subheading` color, `.listing-wrap .text ul
li p span` icon color, `.heading-section .subheading` color
    (`.heading-section-white .subheading` too), `.icon-video span` color,
    `.ftco-navbar-light .nav-link:hover`/active color, `.search-property-1`
    search button bg.
  - Darker red **`#f03943`** (12 uses): second stripe in the
    `.ftco-intro .aside-stretch` diagonal gradient
    (`linear-gradient(129deg, #ff414d 25%, #f03943 25%, #f03943 50%,
#ff414d 50%, ...)`, background-size 25.74px 31.78px).
  - Dark ink **`#151c26`** (7 uses): `.btn-darken` solid bg,
    `.bg-darken` bottom bar, mobile navbar bg, `.v-section .overlay`,
    navbar hover color; footer bg **`#10151c`**; footer bottom bar
    **`#0c1016`**; hero overlay black `rgba(0,0,0,0.3)` (`.hero-wrap
.overlay` opacity .3).
  - Light gray section bg **`#f8f9fa`** (`.bg-light` on categories,
    listings, testimonials, blog sections); white card surfaces.
  - Text: body **`#212529`** (Bootstrap default), listing titles
    **`#000000`** weight 600, muted grays **`#6c757d`** / **`#999999`**,
    muted white `rgba(255,255,255,0.7)` on dark surfaces, white on hero.
  - Borders: `rgba(0,0,0,0.07)` (listing `info-wrap2` top border),
    `rgba(0,0,0,0.1)` (`.form-control` border).
  - Fonts: **"Nunito Sans"**, Arial, sans-serif — declared in
    `css/style.css` (2 rules, incl. `.ftco-footer-widget h2`); the theme
    relies on the page head for loading (no Google Fonts link present in
    the preview head — load Nunito Sans via Google Fonts `<link>` in the
    recreation). Weights used: 600-700 headlines/buttons, 400 body.
    Hero h1 64px 700 (40px mobile), `.heading-section h2` 50px 700,
    listing h3 22px 600, footer widget h2 20px 700, `.btn` 12px 600
    UPPERCASE letter-spacing 1px, nav links 13px 700 UPPERCASE,
    subheadings 12px 600 UPPERCASE.
  - Buttons (`.btn`): padding 9px 12px, **border-radius 4px**, uppercase
    12px 600 letter-spacing 1px, soft shadow
    `0 24px 36px -11px rgba(0,0,0,0.09)`; `.btn-primary` solid red → hover
    transparent bg + red border/text; `.btn-darken` solid ink → hover
    transparent + ink text. `.form-control` height 45px, radius 2px,
    border `rgba(0,0,0,0.1)`.
  - Signature motifs: dark top-topper with phone + social links; absolute
    transparent navbar over the hero (solid ink on mobile); 100vh fixed-bg
    hero with black 0.3 overlay, white 64px headline, white search bar
    with category select + solid red Search; `-80px` overlapping category
    cards row on `bg-light`; featured red category card; listing cards
    with red uppercase category tag + image + address/phone with red icon
    spans + "Review 5.0/5 (100)" row; red diagonal-stripe aside panel next
    to the Special Offers text block; about split with image + red
    subheading + 4 stat counters; dark photo band "How It Works" with
    white circle pulse play button + 4 numbered steps; blog cards with
    author/meta row; dark `#10151c` footer with 4 widget columns + `bg-
darken` bottom bar; section rhythm = `ftco-section` padding 7em 0
    (6em mobile).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/waypoint-<n>/<w>/<h>`; screen seeds for city/town
  scenes, storefronts, hotel/mall/gym photos, portrait avatars for
  testimonials/blog authors — verify each seed renders an appropriate
  scene before pinning; verified city/dusk-town seeds help the hero);
  icons → lucide-react (Search, MapPin, Phone, Star, Users, Briefcase,
  Play, Menu, X, UtensilsCrossed, BedDouble, ShoppingBag, Scissors, Dumbbell,
  Martini, Gamepad2, Map, Tent, Clapperboard, Trophy, HeartPulse — probe
  every export; brand icons Facebook/Twitter/Dribbble NOT in lucide-react →
  inline SVG paths); Nunito Sans via Google Fonts `<link>` in `index.html`;
  brand red `#ff414d` + ink `#151c26`/`#10151c` + light `#f8f9fa` in
  `@theme`; no asset/CSS/font-file copying. Demo copy paraphrased but same
  kinds (hero headline + subtext + search, 12 category cards with counts,
  listing cards, special-offers CTA, about + stats, testimonials, 4 steps,
  blog posts, footer). Source repetition cleaned up: distinct category
  counts (source repeats 103/40/100/36/30/12 twice), 8 distinct "Our
  Listing" entries (source repeats the same 4 twice), 3 distinct
  testimonial people (source repeats Roger Scott), 4 distinct blog posts
  (source repeats the same post 4×), sensible stat counters (source shows
  0 / 0K+ / 0 / 0), footer "Company Staf" typo fixed. Google Maps is NOT
  used on the home page (only on inner pages — no map needed). Hero search
  select can be a native `<select>` or a styled button-group filter (no
  backend); the video play button is decorative or a modal placeholder.

Waypoint lives in `apps/waypoint` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn) plus the repo-standard
Navbar/Footer chrome (adapted to the topper + transparent-ink navbar and
the 4-widget dark footer).

## Requirements

### Requirement: Top bar

The system SHALL render a slim dark utility bar above the navbar with a
phone number on the left and social links on the right.

#### Scenario: Top bar content

- **GIVEN** the Waypoint page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show a "Free Call" label with a phone number
  on the left and Facebook / Twitter / Dribbble social links on the right

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with the brand,
nav links, and a solid red "Add Listing" button, switching to a solid dark
background on mobile.

#### Scenario: Navbar content and mobile behavior

- **GIVEN** the Waypoint page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand (pin/location icon + "Waypoint"
  wordmark with a "Directory and Listing" tagline), nav links Home / About
  / Listing / Blog / Contact, and a solid red "Add Listing" button
- **AND** the navbar SHALL be transparent over the hero on desktop and
  solid dark `#151c26` with a working hamburger menu on mobile

### Requirement: Hero

The system SHALL render a full-height hero with a background photo, dark
overlay, centered headline, subtext, and a category search form.

#### Scenario: Hero content

- **GIVEN** the Waypoint page is rendered
- **WHEN** the hero section is visible
- **THEN** the hero SHALL show a full-viewport background photo with a
  dark overlay, the white headline "Let's Explore Your Awesome City", the
  subtext "Find great places to stay, eat, shop, or visit from local
  experts.", a category select with at least 10 options, and a solid red
  "Search" button

### Requirement: Categories

The system SHALL render twelve category cards with icons and listing
counts, with one featured card in solid red.

#### Scenario: Category grid

- **GIVEN** the Waypoint page is rendered
- **WHEN** the categories section is visible
- **THEN** the section SHALL show twelve cards (Food & Drink, Hotels,
  Shopping, Beauty, Fitness, Bar & Club, Games, Places, Circus, Theater,
  Sports, Health), each with an icon, the category name, and a distinct
  listing count
- **AND** one card (e.g. Hotels) SHALL be featured with a solid red
  background and white text
- **AND** the card row SHALL overlap the bottom of the hero section

### Requirement: Popular listings

The system SHALL render a "Popular Listing" section with four listing
cards, each with an image, category tag, title, address, phone, and rating.

#### Scenario: Listing cards

- **GIVEN** the Waypoint page is rendered
- **WHEN** the popular listings section is visible
- **THEN** the section SHALL show the heading "Popular Listing" and four
  cards, each with a photo, a red uppercase category tag, a bold title,
  an address line, a phone line, and a "Review 5.0/5 (100)" rating row

### Requirement: Special offers strip

The system SHALL render a special-offers callout with a text block, a dark
button, and a red diagonal-stripe side panel.

#### Scenario: Special offers content

- **GIVEN** the Waypoint page is rendered
- **WHEN** the special offers strip is visible
- **THEN** the strip SHALL show the red uppercase label "Special Offers",
  the heading "We Have Special Offers Every Now and Then", and a solid
  dark "Show Special Offers" button on the left
- **AND** the right side SHALL show a red diagonal-stripe decorative panel

### Requirement: Our listings

The system SHALL render an "Our Listing" section with eight distinct
listing cards.

#### Scenario: Eight listing cards

- **GIVEN** the Waypoint page is rendered
- **WHEN** the our-listing section is visible
- **THEN** the section SHALL show the heading "Our Listing" and eight
  distinct listing cards with the same card anatomy as popular listings

### Requirement: About

The system SHALL render an about section with an image, a red subheading,
a heading, two paragraphs, and four stat counters.

#### Scenario: About content

- **GIVEN** the Waypoint page is rendered
- **WHEN** the about section is visible
- **THEN** the section SHALL show an image on the left and, on the right,
  the red uppercase label "Welcome to Waypoint", the heading "Waypoint A
  Directory & Listing", two paragraphs, and four stat boxes (e.g. Years
  of Experience, Total Listing, Company Staff, Happy People) with
  realistic numeric values

### Requirement: Testimonials

The system SHALL render a "Happy People" testimonials carousel with at
least three distinct customer quotes.

#### Scenario: Testimonial carousel

- **GIVEN** the Waypoint page is rendered
- **WHEN** the testimonials section is visible
- **THEN** the section SHALL show the red label "Testimonial", the heading
  "Happy People", and a carousel of quote cards, each with a quote, the
  customer's name, and their role
- **AND** at least three distinct customers SHALL be represented

### Requirement: How it works

The system SHALL render a dark "How It Works" band with a play button and
four numbered step cards.

#### Scenario: How-it-works content

- **GIVEN** the Waypoint page is rendered
- **WHEN** the how-it-works section is visible
- **THEN** the section SHALL show a background photo with a dark overlay,
  the red label "Let's Find Out", the white heading "How It Works", a
  white circular play button, and four numbered steps (Choose A Category,
  Find What You Want, Select The Best Place, Explore The Place), each with
  a short paragraph

### Requirement: Recent blog

The system SHALL render a "Recent Blog" section with four distinct
directory-related blog cards.

#### Scenario: Blog cards

- **GIVEN** the Waypoint page is rendered
- **WHEN** the blog section is visible
- **THEN** the section SHALL show the red label "Our Blog", the heading
  "Recent Blog", and four cards, each with an author name, a date, a
  comment count, a photo, a title, and an excerpt

### Requirement: Footer

The system SHALL render a dark footer with brand + blurb + socials, four
widget columns (Explore, Quick Links, Categories, Have a Questions?), and
a copyright bar linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the Waypoint page is rendered
- **WHEN** the footer is visible
- **THEN** the footer SHALL show the brand with a blurb and social icons,
  an "Explore" link column, a "Quick Links" column, a "Categories"
  column, and a "Have a Questions?" column with address, phone, and email
- **AND** the bottom bar SHALL show the copyright line with a link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/waypoint` scaffolded from the simplest existing app; package
      renamed to `@free-react-templates/waypoint`; `public/CNAME` =
      `waypoint.free.componentdock.com`; homepage
      `https://waypoint.free.componentdock.com`.
- [ ] No "colorlib" string anywhere in `apps/waypoint/*` (provenance only
      in this spec, TEMPLATES.md, and the PR).
- [ ] `@theme` tokens: `--color-brand: #ff414d`, `--color-brand-dark:
    #f03943`, `--color-ink: #151c26`, `--color-ink-deep: #10151c`,
      `--color-ink-darker: #0c1016`, `--color-light: #f8f9fa`,
      `--color-body: #212529`, `--color-muted: #6c757d`; font Nunito Sans.
- [ ] Section order 1:1: Top bar → Navbar → Hero → Categories → Popular
      Listing → Special Offers strip → Our Listing → About → Testimonials →
      How It Works → Recent Blog → Footer.
- [ ] Buttons radius 4px, uppercase 12px 600 letter-spacing 1px: solid red
      `.btn-primary` (hover → outline red), solid ink `.btn-darken` (hover
      → outline ink).
- [ ] Featured red category card, red diagonal-stripe aside panel
      (CSS linear-gradient 129deg with `#ff414d`/`#f03943` tiles), black
      hero overlay `rgba(0,0,0,0.3)`.
- [ ] Distinct content everywhere the source repeats: category counts,
      8 our-listing entries, 3 testimonials, 4 blog posts, realistic
      stat counters.
- [ ] Tests written first (TDD) mirroring every scenario; 100% line/
      function/branch/statement coverage.
- [ ] `bash scripts/verify-app.sh waypoint` passes (typecheck + lint +
      knip + fallow + coverage + build).
- [ ] PR description includes: source (ColorLib Directone), preview URL,
      design tokens (red `#ff414d`, ink `#151c26`/`#10151c`, light
      `#f8f9fa`, Nunito Sans, 4px buttons, diagonal-stripe panel), and
      what differs (wordmark, picsum placeholders, distinct listings/
      testimonials/blog posts, Component Dock credit, no asset copying).
- [ ] Post-merge bookkeeping: mark the TEMPLATES.md "Directone" row (line
      ~573) `[x]` with the live URL and run `npm run readme:status`.
