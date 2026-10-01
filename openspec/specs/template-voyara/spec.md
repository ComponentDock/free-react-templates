# Template: Voyara (Travel Agency / Hotel Booking Template)

## Purpose

Voyara is a single-page hotel/holiday booking website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Platina" travel agency template (see TEMPLATES.md, Travel
section, line 2992), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a bright hotel-booking page: a white header bar (bold
"PLATINA" wordmark + hamburger) that gains a shadow when sticky; a
full-viewport hero slider of hotel-room photos under a strong pink→peach
gradient overlay (opacity 0.8) with bold white headline "Enjoy Holidays
with affordable Hotels" and a white pill "Start Searching" CTA; up/down
slide triggers on the right edge; a "Superb Facilities" section of three
image tiles ("Resort Holiday package") with a gradient hover overlay that
fades the title in centered; an "A very Lovely Welcome to our Hotel" split
about block (left photo, right gradient-clipped h1 + copy + dark pill
"Make Package of your own"); a second "Superb Facilities" band of six
icon cards (Easy Flight Search · Get Hotel Offers · Holiday Packages,
repeated ×2) whose line icons turn the brand gradient on hover; a
full-width six-image gallery strip with the same gradient hover overlay;
a centered "Book a Room" booking form (two-column fields: First Name,
Last Name, Arrival, Departure, Room Type, Number Of Rooms, Adults,
Childs + Message textarea, gradient pill "Book Room" submit with arrow);
a light lavender contact band (`#f9f9ff`) with four centered columns
(Visit Our Office · Let's call us · Let's Email Us · Customer Support);
and a dark charcoal footer (`#222222`) with About Us, Newsletter
(input + arrow button), Instagram Feed (8 thumbs), Follow Us social
icons, plus a centered footer-bottom copyright (recreation replaces the
attribution with the Component Dock link per repo conventions).

The design is anchored by one signature gradient — pink `#f62e71` → peach
`#f9ab72` (to top) — used on the hero overlay, primary buttons, card
hover overlays, gradient-clipped headings, and facility-icon hovers.

Brand colors: pink `#f62e71` and peach `#f9ab72` (the signature gradient);
hover pink `#f7427f` (carousel triggers); dark `#222222` (headings,
footer bg, black buttons); light lavender `#f9f9ff` (contact band);
body grey `#777777`; white cards/section backgrounds. Fonts: Poppins
(body 14px weight 300; headings Poppins 600 `#222222`; hero h1 72px
weight 700 white; the about h1 is 25px with the brand gradient applied
as text). Buttons are pills: primary gradient radius 25px with an arrow
icon at the right edge; hero CTA white radius 20px (hover flips to
`#222`); about button dark `#222` radius 20px (hover flips to white).

## Design reference (replication findings)

- **Original:** ColorLib "Platina" — travel agency / hotel booking
  template (source: https://colorlib.com/wp/template/platina/). Listed in
  TEMPLATES.md `## Travel` at line 2992; slug appears exactly once.
- **Live preview URL:** https://preview.colorlib.com/theme/platina/
  (HTTP 200, 27,002 bytes, verified 2026-10-01). HTML saved to
  `/tmp/platina.html`; theme stylesheet `css/main.css` saved to
  `/tmp/platina-main.css`. The preview DOM is authoritative for section
  order and copy; the screenshot
  (`platina-free-travel-agency-website-template.jpg`, reviewed visually)
  is authoritative for the hero treatment: white header with "PLATINA"
  wordmark + hamburger, full-bleed bedroom photo under the pink→peach
  gradient, centered bold white headline, white pill CTA, and the two
  stacked white up/down slide triggers on the right edge.
- **Stylesheets in the reference:** `css/linearicons.css`,
  `css/owl.carousel.css`, `css/font-awesome.min.css`, `css/nice-select.css`,
  `css/magnific-popup.css`, jQuery UI base theme, `css/bootstrap.css`,
  `css/main.css` (theme — canonical tokens). Icon fonts (Linear Icons +
  Font Awesome), owl carousel, magnific popup, and nice-select are NEVER
  copied: recreation uses lucide-react icons and React-state
  sliders/scrolled-header.
- **Fonts:** the theme `body` rule sets `font-family: "Poppins",
  sans-serif` (14px, weight 300, line-height 1.625, color `#777777`);
  headings (`h1,h3,h4,h6`) are Poppins 600 `#222222` at 36px (h1) /
  18px (h4); the hero banner h1 overrides to 72px weight 700 white.
  Load Poppins 300/400/500/600/700 via Google Fonts `<link>` in
  `index.html`.
- **DOM skeleton (section order 1:1, from preview HTML):**
  1. `header.default-header` — white bar (`background-color: #fff`,
     padding 20px; on scroll the sticky variant gains
     `box-shadow: -21.213px 21.213px 30px rgba(158,158,158,0.3)`).
     Left: bold letter-spaced wordmark "PLATINA" (recreation: "voyara").
     Right: hamburger toggle (original shows no desktop nav links —
     the menu opens as a slide-down/overlay panel; recreation: lucide
     Menu/X toggle + stacked panel with Home · Facilities · Service ·
     Book links, matching the original's four anchors, fixing the
     original "Falilities" typo).
  2. `section.banner-area.relative#home` — cover photo
     (`img/header-bg.jpg`, hotel bedroom: white bedding, curtains,
     balcony) + `.overlay-bg` gradient overlay at opacity 0.8
     (`linear-gradient(to top, #f62e71 0%, #f9ab72 100%)`). Centered
     content (fullscreen row, 700px height): h1 "Enjoy Holidays /
     with affordable Hotels" (72px weight 700 white, line-height 1.15;
     `<br>` hidden on mobile) + `.head-btn` "Start Searching"
     (uppercase, white bg, `#222` text, radius 20px, hover flips to
     `#222`/white). Right edge: `.carousel-trigger` — stacked
     `.next-trigger` (lnr-arrow-up) / `.prev-trigger` (lnr-arrow-down)
     buttons, 40px white squares with `#eee` border, hover bg
     `#f7427f` with white icon. The original is a 2-slide owl slider
     with identical copy; recreation: React-state slider (2 slides,
     distinct hotel photos).
  3. `section.service-area.section-gap#facilities` — centered
     `.header-text` (col-md-8): h1 "Superb Facilities" (36px, with the
     gradient text treatment on section h1s per `.about-right h1`
     gradient-clip pattern) + lorem paragraph. Three
     `.single-service` tiles (col-lg-4): `.content` image tile
     (picsum, max-width 400px centered) with `.content-overlay`
     (brand-gradient, opacity 0 → 1 on hover) and `.content-details`
     (h3 "Resort Holiday package", white, centered, fades in from
     center on hover).
  4. `section.about-area` — two-column split: left
     `.about-left` full-bleed photo (`img/about-img.jpg`); right
     `.about-right`: h1 "A very Lovely Welcome / to our Hotel" (25px,
     brand-gradient text via background-clip), paragraph, and
     `.btn-black` "Make Package of your own" (uppercase, `#222` bg,
     1px `#777` border, white text, radius 20px, padding 12px 28px;
     hover inverts to white bg / `#222` text).
  5. `section.facilities-area.section-gap#service` — centered header
     (h1 "Superb Facilities" + lorem). Six `.sigle-facilities` cards
     (col-lg-4 col-md-6, 2 rows × 3): 35px lnr icon (grey `#777`,
     turns brand gradient on hover — same hover group as
     `.about-right h1` gradient text) + h4 (18px) + paragraph. The
     three unique items repeat twice in the DOM: Easy Flight Search
     (lnr-rocket), Get Hotel Offers (lnr-magic-wand), Holiday Packages
     (lnr-gift). Recreation: render the 6-card grid (3 unique ×2, as
     the reference does) with lucide Rocket / Wand2 / Gift icons.
  6. `section.gallery-area` — full-width (`container-fluid`) strip of
     six `.single-gallery` tiles (col-lg-2 col-sm-6, no padding): same
     hover pattern as service tiles (gradient `.content-overlay` +
     fade-in "Resort Holiday package" title). Recreation: 6 picsum
     tiles, responsive 6/3/2 columns.
  7. `section.booking-area#book` — centered `.header-text`: h1 "Book a
     Room" + lorem paragraph. `.booking-form` (id="booking"): left
     col-lg-6 two-column field grid — First Name, Last Name (text),
     Arrival, Departure (date placeholders / datepicker in original —
     recreation: date inputs), Room Type (select: Room type 1/2/3),
     Number Of Rooms (select 1/2/3), Adults (select 1/2/3), Childs
     (select); right col-lg-6 Message textarea (placeholder
     "Messege" — fix typo to "Message"). Centered submit: `.primary-btn`
     "Book Room" + arrow icon (gradient bg, white, uppercase,
     radius 25px, line-height 42px, padding-left 30px / padding-right
     60px, arrow absolutely positioned at right 30px shifting right on
     hover). All inputs required; original posts to `booking.php` —
     recreation: client-side validation + success message state.
  8. `section.contact-info-area.section-gap` — bg `#f9f9ff`; four
     `.single-info` columns (col-lg-3), each centered h4 + paragraph:
     "Visit Our Office" (Dhaka address), "Let's call us" (Phone 01/02
     + FAX), "Let's Email Us" (3 emails), "Customer Support" (3
     support emails). Recreation: paraphrased demo contact data.
  9. `footer.footer-area.section-gap` — bg `#222222`, padding-top
     100px. Four widgets: "About Us" (lorem paragraph); "Newsletter"
     ("Stay update with our latest" — fix to "Stay updated…"; inline
     form: email input + `.click-btn` square arrow button, brand
     gradient bg, white icon, radius 0); "Instragram Feed" (fix typo
     to "Instagram Feed" — 8 square thumbs in a flex-wrap
     `.instafeed`); "Follow Us" ("Let us be social" + facebook,
     twitter, dribbble, behance icons — white, turn brand gradient on
     hover; recreation: lucide/social inline SVGs Facebook · Twitter ·
     Instagram · Dribbble or repo-standard brand set). Footer-bottom:
     centered copyright — recreation MUST replace the Colorlib
     attribution with the Component Dock link per conventions.
- **Never copied:** all ColorLib images, CSS files, icon fonts
  (lnr/fa), carousel scripts. Placeholder images:
  `https://picsum.photos/seed/voyara-<n>/<w>/<h>` (deterministic),
  fonts via Google Fonts, icons via lucide-react + inline-SVG social
  icons. No ColorLib strings anywhere in `apps/voyara`.

## Design tokens (from `css/main.css`)

| Token | Value | Usage |
| --- | --- | --- |
| brand gradient | `linear-gradient(to top, #f62e71 0%, #f9ab72 100%)` | hero overlay, primary buttons, card hover overlays, gradient-clipped h1, facility-icon hover, newsletter submit |
| brand pink | `#f62e71` | gradient start (bottom) |
| brand peach | `#f9ab72` | gradient end (top) |
| hover pink | `#f7427f` | carousel trigger hover bg/border |
| dark | `#222222` | headings, footer bg, btn-black bg, hero-CTA hover |
| lavender section bg | `#f9f9ff` | contact-info band |
| body text | `#777777` | body copy, facility icons default |
| heading | `#222222` | h1/h3/h4/h6 |
| white | `#FFFFFF` | header bar, hero CTA, card hover titles, trigger buttons |
| trigger border | `#eee` | up/down slide triggers |
| black-btn border | `#777` | btn-black default border |

- Fonts: Poppins 300/400/500/600/700 (Google Fonts `<link>` in
  `index.html`; body default Poppins 14px/300, line-height 1.625).
- Type scale: hero h1 72px weight 700 white (36px mobile); section h1
  36px weight 600; about h1 25px gradient text; h4 18px weight 600;
  card hover title h3 white centered; body 14px/300 `#777777`.
- Radii: primary-btn 25px; head-btn / btn-black 20px; newsletter
  submit square (0); up/down triggers square 40px; icons/images square
  (no radius).
- Buttons: primary gradient pill (white uppercase text + trailing
  arrow icon, arrow slides right on hover); hero CTA white pill
  (uppercase, hover → `#222` bg / white text); about dark pill
  (uppercase, `#222` bg + `#777` border, hover → white bg / `#222`
  text).
- Hero: full-bleed cover photo + gradient overlay opacity 0.8; slider
  triggers stacked at right edge (40px white squares, hover `#f7427f`).
- Card hover pattern (service tiles + gallery): image tile, gradient
  `.content-overlay` fades 0 → 1, centered white title fades in.
- Header: white bar, padding 20px 0; sticky scroll state adds
  `box-shadow: -21.213px 21.213px 30px rgba(158,158,158,0.3)`.
- Section rhythm: `.section-gap` = generous vertical padding (~100px);
  booking form fields are Bootstrap-style controls (white bg, light
  border, 15px, radius 0.25rem in bootstrap base).
- Placeholder images (picsum, deterministic): hero slides
  `voyara-hero-1..2`, service tiles `voyara-service-1..3`,
  about photo `voyara-about`, gallery `voyara-gallery-1..6`, instagram
  thumbs `voyara-insta-1..8`. Icons from lucide-react (Menu, X, ArrowUp,
  ArrowDown, ArrowRight, Rocket, Wand2, Gift, Mail, Phone, MapPin,
  Send) plus inline-SVG brand icons for the footer social row.

## Requirements

### Requirement: Sticky white navbar with wordmark and hamburger menu

The system SHALL render a white header bar with a bold wordmark on the
left and a hamburger menu toggle on the right, gaining a soft shadow
when stuck to the top.

#### Scenario: Desktop navbar

- **GIVEN** the Voyara app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL render as a white full-width bar above the
  hero (padding ~20px 0)
- **AND** it SHALL show the wordmark "voyara" on the left — bold,
  uppercase, letter-spaced, `#222222` (recreation name; the source
  wordmark is never reused)
- **AND** it SHALL show a hamburger toggle button on the right
  (lucide Menu icon, `aria-label`, `aria-expanded`)

#### Scenario: Menu toggle and scrolled state

- **GIVEN** the header is rendered
- **WHEN** the user activates the hamburger
- **THEN** a menu panel SHALL open showing the four section links:
  Home · Facilities · Service · Book (original anchors `#home`,
  `#facilities`, `#service`, `#book`; the recreation fixes the
  original "Falilities" typo)
- **AND** the toggle icon SHALL switch to X (`aria-expanded` flips)
- **WHEN** the user scrolls the page down
- **THEN** the stuck header SHALL gain the soft drop shadow
  (`box-shadow: -21.213px 21.213px 30px rgba(158,158,158,0.3)`)
- **AND** clicking a link SHALL close the menu and smooth-scroll to
  the section

### Requirement: Full-viewport hero slider with gradient overlay and Start Searching CTA

The system SHALL render a full-height hero slider of hotel photos under
the pink→peach gradient overlay with a centered bold headline, a white
pill CTA, and stacked up/down slide triggers.

#### Scenario: Hero composition

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL render full-viewport height with a cover photo
  (picsum `voyara-hero-1`, hotel-room mood) and a gradient overlay
  `linear-gradient(to top, #f62e71 0%, #f9ab72 100%)` at opacity 0.8
- **AND** it SHALL show the centered white h1 "Enjoy Holidays /
  with affordable Hotels" (~72px desktop / ~36px mobile, weight 700,
  line-height ~1.15)
- **AND** it SHALL show the "Start Searching" CTA — uppercase, white
  bg, `#222222` text, radius 20px, hover flips to `#222222` bg /
  white text, scrolling to the booking section (`#book`)

#### Scenario: Slide controls

- **GIVEN** the hero slider is rendered
- **WHEN** the user inspects the right edge
- **THEN** two stacked trigger buttons SHALL appear (up = next slide,
  down = previous slide), 40px white squares with `#eee` border and
  ArrowUp/ArrowDown icons
- **AND** hovering a trigger SHALL turn its bg/border `#f7427f` with a
  white icon
- **WHEN** the user activates a trigger
- **THEN** the hero SHALL switch between two slides (distinct picsum
  photos, React state — no carousel library) with the overlay, headline,
  and CTA unchanged

### Requirement: Superb Facilities image-tile section

The system SHALL render a centered section header and three image tiles
with a gradient hover overlay revealing the title.

#### Scenario: Section header

- **GIVEN** the facilities section (`#facilities`) is rendered
- **WHEN** the user scrolls to it
- **THEN** it SHALL show the centered h1 "Superb Facilities" and a
  centered lorem-style subtext paragraph (col-md-8 centered block)

#### Scenario: Image tiles

- **GIVEN** the section header is rendered
- **WHEN** the three `.single-service`-equivalent tiles render
- **THEN** each tile SHALL show a picsum image (`voyara-service-1..3`,
  max-width ~400px, centered) as an `<a>` with the h3 title "Resort
  Holiday package"
- **AND** on hover the tile SHALL fade in the brand-gradient overlay
  (opacity 0 → 1) with the white centered title fading in from center
  (CSS transition ~0.4s)

### Requirement: Welcome split about section

The system SHALL render a two-column about block: photo on the left,
gradient-clipped heading + copy + dark pill button on the right.

#### Scenario: About composition

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls to it
- **THEN** the left column SHALL show a full-bleed photo (picsum
  `voyara-about`)
- **AND** the right column SHALL show the h1 "A very Lovely Welcome /
  to our Hotel" with the brand gradient applied as text
  (`background-clip: text`, ~25px, weight 600)
- **AND** a paragraph of body copy (`#777777`, 14px/300)
- **AND** the "Make Package of your own" button — uppercase, `#222222`
  bg, 1px `#777777` border, white text, radius 20px, padding
  12px 28px, hover inverts to white bg / `#222222` text, scrolling to
  `#book`

### Requirement: Six-card facilities icon grid

The system SHALL render a centered "Superb Facilities" header followed
by a 2×3 grid of icon cards whose icons turn the brand gradient on
hover.

#### Scenario: Grid content

- **GIVEN** the facilities grid (`#service`) is rendered
- **WHEN** the section renders
- **THEN** it SHALL show the centered h1 "Superb Facilities" + lorem
  subtext, then six cards (col-lg-4, 2 rows × 3 on desktop)
- **AND** the six cards SHALL be the three unique items repeated twice,
  in order: Easy Flight Search (Rocket icon), Get Hotel Offers (Wand2
  icon), Holiday Packages (Gift icon) — ×2
- **AND** each card SHALL show a 35px line icon (default `#777777`),
  an 18px h4 title, and a short body paragraph
- **WHEN** the user hovers a card
- **THEN** its icon SHALL transition to the brand-gradient text
  treatment (pink→peach)

### Requirement: Full-width gallery strip

The system SHALL render a full-width strip of six image tiles with the
same gradient hover overlay as the service tiles.

#### Scenario: Gallery tiles

- **GIVEN** the gallery section is rendered
- **WHEN** the user scrolls to it
- **THEN** six edge-to-edge tiles SHALL render (picsum
  `voyara-gallery-1..6`; 6 columns desktop / 3 tablet / 2 mobile)
- **AND** each tile SHALL reuse the hover pattern: gradient
  `.content-overlay` fade + centered white "Resort Holiday package"
  title fade-in

### Requirement: Book a Room booking form

The system SHALL render a centered "Book a Room" header and a
two-column booking form with validated fields and a gradient submit
button.

#### Scenario: Form fields

- **GIVEN** the booking section (`#book`) is rendered
- **WHEN** the user scrolls to it
- **THEN** it SHALL show the centered h1 "Book a Room" + lorem
  subtext
- **AND** the form SHALL render in two columns: left — First Name,
  Last Name (text), Arrival, Departure (date inputs), Room Type
  (select: Room type 1/2/3), Number Of Rooms (select 1/2/3), Adults
  (select 1/2/3), Childs (select 1/2/3); right — Message textarea
  (placeholder "Message" — the original misspells "Messege"; fix it)
- **AND** every field marked required in the reference SHALL be
  required in the recreation, with the label/placeholder preserved

#### Scenario: Submit behavior

- **GIVEN** the booking form is rendered
- **WHEN** the user submits with all required fields filled
- **THEN** the "Book Room" gradient pill SHALL render (uppercase white
  text + ArrowRight icon at the right edge, radius 25px, arrow shifts
  right on hover)
- **AND** the form SHALL validate client-side (no `booking.php` post);
  invalid submit shows per-field errors and blocks submission
- **WHEN** the submit succeeds
- **THEN** a success message state SHALL replace/append the
  `.alert-msg`-equivalent region

### Requirement: Contact info band

The system SHALL render a light lavender band with four centered
contact columns.

#### Scenario: Contact columns

- **GIVEN** the contact-info section is rendered
- **WHEN** the user scrolls to it
- **THEN** the band SHALL have bg `#f9f9ff` with ~100px section-gap
  padding
- **AND** four centered columns SHALL render: "Visit Our Office"
  (paraphrased street address), "Let's call us" (two phone numbers +
  fax), "Let's Email Us" (three emails), "Customer Support" (three
  support emails) — each with an 18px h4 + body paragraph
  (`#777777`)

### Requirement: Dark footer with widgets and Component Dock link

The system SHALL render a dark `#222222` footer with About Us,
Newsletter, Instagram Feed, and Follow Us widgets, plus a centered
footer-bottom line linking Component Dock.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to it
- **THEN** the footer SHALL have bg `#222222`, white headings, and
  four widgets: About Us (paragraph); Newsletter ("Stay updated with
  our latest" — fix the original "update" typo; inline email input +
  square brand-gradient arrow button); Instagram Feed (fix the
  original "Instragram" typo; 8 square picsum thumbs
  `voyara-insta-1..8` in a flex-wrap row); Follow Us ("Let us be
  social" + social icon links whose icons turn the brand gradient on
  hover — lucide/inline-SVG brand icons, `aria-label`s)
- **AND** the newsletter form SHALL validate the email client-side and
  show a subscribed confirmation state

#### Scenario: Footer bottom and conventions

- **GIVEN** the footer bottom is rendered
- **WHEN** the footer-bottom line renders
- **THEN** it SHALL show a centered copyright with the current year
- **AND** it SHALL link `https://www.componentdock.com/` branded
  "Component Dock" (the ColorLib attribution link is NEVER copied)

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec (whole-repo validate may
      fail on unrelated legacy specs — check this spec's own `✓` line).
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/voyara`
      (`scripts/verify-app.sh voyara` in FAST_MODE; full `npm run gate`
      in CI).
- [ ] Visual fidelity: white header (bold "voyara" wordmark + hamburger,
      soft shadow when stuck, Home/Facilities/Service/Book panel),
      full-viewport hero slider with pink→peach gradient overlay at 0.8
      opacity, centered white 72px "Enjoy Holidays / with affordable
      Hotels", white pill "Start Searching", stacked white 40px up/down
      triggers (hover `#f7427f`), "Superb Facilities" image tiles with
      gradient hover overlay + fade-in title, "A very Lovely Welcome /
      to our Hotel" gradient-text split with dark pill button, 2×3
      facilities icon grid (Rocket/Wand2/Gift ×2, gradient icon hover),
      six-tile gallery strip with hover overlay, "Book a Room" two-column
      validated form + gradient "Book Room" pill with arrow, `#f9f9ff`
      contact band (4 centered columns), dark `#222222` footer (About
      Us, Newsletter + gradient arrow button, Instagram Feed ×8, Follow
      Us gradient-hover icons) + Component Dock footer-bottom link — all
      matching the Platina preview 1:1.
- [ ] Design tokens in `@theme` as listed above; Poppins via Google
      Fonts; signature gradient `#f62e71`→`#f9ab72` on hero overlay,
      primary buttons, hover overlays, gradient headings, and icon
      hovers; pill radii 20–25px; square triggers/inputs.
- [ ] Placeholder images use `picsum.photos/seed/voyara-<n>/<w>/<h>`
      (hero ×2, service ×3, about, gallery ×6, insta ×8); icons from
      lucide-react with inline-SVG social icons; no ColorLib assets,
      CSS, or strings anywhere in `apps/voyara`.
- [ ] `public/CNAME` = `voyara.free.componentdock.com`; package
      `@free-react-templates/voyara`; `"homepage"`
      = `https://voyara.free.componentdock.com`; lockfile registers the
      workspace; `injectUiSource()` present in `vite.config.ts`; footer
      links Component Dock.
