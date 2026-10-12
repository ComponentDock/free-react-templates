# Template: Affiance (Wedding)

## Purpose

Affiance is a single-page wedding-website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free **"Twohearts"** website template design (source:
https://colorlib.com/wp/template/twohearts/ — TEMPLATES.md line 3103, category
**Wedding**), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

- **Source template:** ColorLib "Twohearts" — source slug `twohearts`
- **Preview URL:** `https://preview.colorlib.com/theme/twohearts/`
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **App folder:** `apps/affiance` — package `@free-react-templates/affiance`
- **Naming:** never reuse the source name "Twohearts"; the brand is renamed
  **Affiance** (an archaic word for a marriage pledge/betrothal — a single
  lowercase word, no collision with `apps/`, and it keeps the Wedding family's
  naming run: lensly · vows · nuptial · knot · wedlock · nuptials · betrothal ·
  trousseau · paperie · **affiance**).
- Homepage / CNAME: `https://affiance.free.componentdock.com`

## Design reference (replication findings)

- **Original:** ColorLib "Twohearts" — a romantic one-page wedding site (a
  Bootstrap 4 / "ftco" theme). Source page
  `https://colorlib.com/wp/template/twohearts/` (HTTP 200). Live preview
  `https://preview.colorlib.com/theme/twohearts/` returns **HTTP 200** (34,593 B
  HTML, `<title>Twohearts - Free Bootstrap 4 Template by Colorlib</title>`).
  Stylesheet fetched for tokens:
  `https://preview.colorlib.com/theme/twohearts/css/style.css`
  (HTTP 200, **67,294 B**, sha256
  `892b1f4a01d30757357ea8ccc9ff093ff3a454eedc98ed2ee2d7c5f4218798e3`); behaviour
  reference `js/main.js` (HTTP 200 — the page loads jQuery + the usual ftco
  plugins: bootstrap, owl.carousel, stellar, waypoints, magnific-popup,
  animateNumber, easing).
- **Screenshot:** TEMPLATES.md `twohearts-free-template.jpg` (HTTP 200, served
  **AVIF** despite the `.jpg` name, 87,689 B, 1200×946 → converted to PNG and
  inspected). Screenshot + live render agree: a **white page** (`#fff`) with a
  **mauve-pink brand `#d291bc`**, a **script display face** for the couple names
  and every heading, a warm full-bleed couple hero under a dark scrim, and a
  **pink countdown band overlapping the hero's bottom edge**.
- **Visual design (live render + screenshot, verified 1200 px):**
  - **First paint (loader overlay):** before the header the source paints
    `<div id="ftco-loader" class="show fullscreen">` — a **full-screen `#fff`
    cover** (`#ftco-loader.fullscreen{width/height:100%;transform:none;
    background-color:#fff;border-radius:0;box-shadow:none}`) holding an inline
    **48 px SVG ring** (two `r=22`, `stroke-width:4` circles: `path-bg`
    `#eeeeee` under the animated `path` **`#F96D00`**, spinning with
    `loader-rotate 2s linear infinite` and `loader-dash 1.5s ease-in-out
    infinite`). `js/main.js` (6,360 B) runs `var loader = function() { setTimeout(
    function(){ if($('#ftco-loader').length > 0) { $('#ftco-loader').removeClass('show'); } }, 1); }; loader();`
    — i.e. it drops the `.show` class 1 ms after the script runs, so the cover
    leaves on the `opacity .4s ease-out` transition. Our recreation ships this
    as a `Preloader` component above the header.
  - **Header:** a slim **transparent navbar floating over the hero** — a
    bold uppercase white wordmark "TWOHEARTS" at the left and eight uppercase
    white nav links at the right (Home · Groom & Bride · Our Story · Greetings ·
    Bridesmaid & Groomsmen · When & Where · RSVP · Gallery).
  - **Hero:** a full-bleed couple photo (700 px tall in the markup,
    `js-fullheight` full-viewport in the source) under a **`rgba(0,0,0,.4)`
    dark overlay**, with a **120 px `#d291bc` badge, centred above the names**
    (`margin:0 auto`, inside the centred `.text` block) — an inset
    `1.4px dashed rgba(255,255,255,.3)` ring around a **60 px white glyph: two
    interlocking rings + a diamond + a small heart** (`flaticon-diamond-ring` =
    `\uf100`; verified on the live render — the badge is **centred above the
    heading**, not pinned to its left). The couple names
    "Leonardo & Marianna" sit centred in **Rochester script, 8vw, white**, and
    beneath them a **white pill** (radius 2 px) holding an uppercase
    letter-spaced (`letter-spacing:7px`) brand-pink tagline ("ARE GETTING
    MARRIED").
  - **Countdown band (`.ftco-intro` / `#timer`):** a **`#d291bc` bar pulled up
    `-50px`** so it overlaps the hero's bottom edge — radius 4 px, shadow
    `0 10px 32px -19px rgba(0,0,0,.15)`. Five equal (20 %) cells split by a
    hairline `1px solid rgba(255,255,255,.05)`: the first is the darker
    **`#cb7fb1`** "Save the Day" cell (Rochester script, two lines), then four
    white **Rochester 40 px** numbers with tiny uppercase labels
    (DAYS · HOURS · MINUTES · SECONDS).
  - **About Bride & Groom (`.bg-section`, id groom-bride-section):** a white
    band — a centred **dashed-border subheading pill** ("ABOUT BRIDE & GROOM",
    `1px dashed #d291bc`, uppercase, `letter-spacing:2px`, brand colour) over a
    big **Rochester script "Bride & Groom"** title (brand colour). Then two
    alternating rows (groom, then bride): a **400 × 400 photo with a 15 px
    `#f0d9e8` solid frame**, offset to one side, against a right-/left-aligned
    text column with a **Rochester script name** and a grey paragraph. Each
    text block also carries the theme's **100 px `#d291bc` two-doves glyph**
    (`.bride-groom .text .icon span`, `flaticon-dove-1` = `\uf101`) as a
    `z-index:-1` decoration pinned to the block's bottom edge — `icon-left` on
    the right-hand block, `icon-right` on the left-hand one.
   - **Love Story (`.ftco-love`, id lovestory-section):** a full-bleed
    **fixed/parallax background photo** (`bg_2.jpg`) band — a centred subheading
    over a big script title ("Timeline of Love"), then a **vertical timeline**:
    four entries (First We Meet · First Date · In A Relationship · We're
    Engaged), each an **alternating side panel** (43 % width) with a date, a
    script heading and a paragraph, a **120 px circular photo "timeline
    badge"** carrying an inset **dashed `rgba(255,255,255,.5)` ring** on the
    centre line, and a **120 px `rgba(255,255,255,.3)` two-doves glyph**
    (`.timeline-panel .icon span`, `flaticon-dove-1` = `\uf101`, `top:20px`,
    `z-index:-1`, `left:20px` / `right:20px` by the panel's side; 80 px below
    the `md` breakpoint).
  - **Greetings (`.testimony-section.bg-light`, id greeting-section):** a
    `#f8f9fa` band with a subheading + script title "Sweet Messages", then an
    **owl-carousel** of message cards — each a white card (1 px
    `rgba(0,0,0,.02)` hairline, shadow `0 5px 21px -14px rgba(0,0,0,.14)`)
    with a **40 px `#d291bc` disc peeking above its top-left corner**
    (`.testimony-wrap .icon`, `top:-20px; left:20px; z-index:-1`) holding a
    **30 px white single-dove glyph** (`flaticon-dove` = `\uf105`), then an
    **80 px avatar photo in a 5 px `#f0d9e8` frame**, a paragraph and a
    name + role (`#000` name / `#d291bc` role); the source ships the same
    "Roger Scott / Marketing Manager" card repeated and inactive items at
    `opacity:.4`.
  - **Family & Friends (id people-section):** a white band — "Bridesmaid &
    Groomsmen" subheading + script "Family & Friends" title, then a row of eight
    people cards: a **circular portrait**, a name and a role caption (four
    Groomsmen: Mark Tomy, John Henceworth, Rey Cooper, Robert Chan; four
    Bridesmaid: Rose Jones, Mary Dell, Alicia Brean, Angel Worth).
  - **When & Where (`.bg-light`, id when-where-section):** a `#f8f9fa` band —
    "Planning" subheading + script "When & Where" title, then a **split row**: a
    left **`col-md-5` map panel** (`<div id="map" class="bg-white">`, the column
    carrying `ftco-animate d-flex`; `#map{width:100%}`, `height:300px` at
    `max-width:767.98px`) and a right `col-md-7 py-5 pl-md-5` holding the two
    columns (**The Ceremony** and **The Reception**), each topped by a **100 px white
    disc holding a 50 px `#d291bc` glyph** (`.place .text .icon`, shadow
    `0 10px 32px -30px rgba(0,0,0,.75)`, `margin-bottom:10px`) — the
    **church** (`flaticon-church` = `\uf103`, on The Ceremony) and the
    **wedding cake** (`flaticon-cake` = `\uf104`, on The Reception) — then a
    date line (Saturday, 28, 2019), a time line (02:00 pm-10:00 pm), a
    two-line street address, a phone number and a **See Map** link.
    The panel is filled by the page's **own** `js/google-map.js`: `init()` bound
    with `google.maps.event.addDomListener(window, 'load', init)` (the Maps API
    script itself is the page's `…/maps/api/js?key=AIzaSy…&sensor=false`, **no**
    `callback`), constructing `new google.maps.Map(#map, …)` with `zoom:7`,
    `center: LatLng(40.69847032728747, -73.9514422416687)`, `scrollwheel:false`,
    an `administrative.country` / `hue:#ff0000` style array and a marker icon
    `images/loc.png` placed from a geocode of "New York". The recreation renders
    the same panel with a **keyless** embed (OpenStreetMap) or a static styled
    placeholder — never the key, never the marker asset.
    The head also loads the source's **own analytics**
    (`<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13">`
    plus the inline `dataLayer` bootstrap — the preview host's shared UA id), and
    declares no `rel="icon"` or `site.webmanifest` of its own. None of it is
    reproduced: the app ships no third-party tag (guard:
    `grep -rE 'gtag|dataLayer|googletagmanager|UA-' apps/affiance` empty) and its
    own favicon.
  - **Invitation / RSVP (`.ftco-love.img`, id rsvp-section):** a **fixed
    background-photo band** (`bg_3.jpg`) under a light overlay, with a
    left-column (**col-md-5**) heading "Invitation" subheading + a big
    **60 px script "Will You Attend?"** title, then a form: **Name** input,
    **Your email** input, a **Guest** `<select>` (Guest, 1–5, chevron icon), a
    2-row **Message** textarea, and a **brand-pink "I am attending" submit**
    (`.btn.btn-primary`, `py-3 px-4`).
  - **Gallery (id gallery-section):** a **full-width, no-gutter** band
    (`container-fluid px-0`, `row no-gutters`) — a centred subheading + script
    "Photo Gallery" title, then a **4-column grid of 300 px tiles**. Each tile
    is a link with a background image; on hover a **`#d291bc` wash at
    `opacity:.8`** (`.gallery:after`) and a **70 px white disc holding a 50 px
    `#d291bc` two-doves glyph** fade in (`.gallery .icon`, `opacity:0 → 1` on
    `:hover`/`:focus`) for the magnific-popup lightbox — the source paints
    **`flaticon-dove-1` (`\uf101`), not a plus glyph** (verified on the live
    render).
  - **Footer (`.ftco-footer`):** a **`#d291bc`** band, `padding:7em 0`, white
    text — the "Twohearts" wordmark + a short blurb, then three link columns
    (**Links**: Home, Groom & Bride, Story, Greetings, People, Where & When,
    RSVP, Gallery · **Services**: Organizer, Venue, Wedding Ceremony,
    Accomodation · **Have a Questions?**: street address, phone,
    `info@yourdomain.com`), plus social icons. Column headings are 20 px /
    uppercase / 700 in white; links are white. A copyright line closes the band.

## Design tokens

| Token | Value | Where |
| --- | --- | --- |
| Brand mauve-pink | **`#d291bc`** | subheading pills/text, script headings, buttons, countdown band, gallery hover wash, footer band |
| Countdown first cell | **`#cb7fb1`** | `.time-2` ("Save the Day" cell) |
| Pale pink tint | **`#f0d9e8`** | 15 px solid frame around the bride/groom photos |
| Light band | `#f8f9fa` | `.bg-light` sections (Greetings, When & Where) |
| Page / surface | `#fff` | page + white bands |
| Body ink | **`#999999`** (grey) | body copy — the theme's own `body { font-family:"Source Sans Pro"; …; color:#999999 }` block, which sits **after** the inlined Bootstrap 4.5.0 and wins (live-verified: `document.body`, every body `p` and `li` render `rgb(153,153,153)`). The framework's `body{color:#212529}` is beaten — do **not** use it |
| Muted ink | `rgba(0,0,0,.7)` (light bands) · `rgba(255,255,255,.6)` (footer sub-links) | `.block-23 ul li span`, `.ftco-footer-widget ul li a span`; `#6c757d` exists only inside the inlined Bootstrap block (caption/placeholder), never as a design ink |
| Overlay scrim | **`rgba(0,0,0,.4)`** | hero dark overlay; lighter wash on the RSVP photo band |
| Hairline divider | `rgba(255,255,255,.05)` | countdown cell separators |
| Hero badge | **120 px `#d291bc` disc**, inset `1.4px dashed rgba(255,255,255,.3)` ring, 60 px white glyph | `.herowrap .text .icon` (centred above the names) |
| Badge ring | `rgba(255,255,255,.5)` dashed | 120 px timeline badge inset ring |
| Doves motif | **`flaticon-dove-1`** `\uf101` (two doves + hearts) · **`flaticon-dove`** `\uf105` (single) | 100 px `#d291bc` (bride/groom text blocks) · 120 px `rgba(255,255,255,.3)` (timeline panels) · 50 px `#d291bc` (gallery discs) · 30 px white on a 40 px `#d291bc` disc (greetings cards) |
| Place glyphs | **`flaticon-church`** `\uf103` (Ceremony) · **`flaticon-cake`** `\uf104` (Reception) | 50 px `#d291bc` inside the 100 px white When-&-Where discs |
| Radii | **4 px** countdown bar + buttons (`.25rem`) · **2 px** hero tagline pill · **50 %** circles | shape language |
| Shadow | `0 10px 32px -19px rgba(0,0,0,.15)` | countdown bar |
| Fonts | **"Rochester", cursive** (all headings, couple names, names, countdown numbers) · **"Source Sans Pro", sans-serif** (body, nav, UI) | link axes `Rochester` + `Source+Sans+Pro:wght@300;400;600;700;900`; the **900** is used by the three `#d291bc` eyebrow pills (`.herowrap .text .subheading`, `.date`, `.heading-section .subheading`) and the source serves a real 900 face — never drop it from the link; both verified on Google Fonts (HTTP 200) |
| Section rhythm | `.ftco-section { padding: 7em 0 }` (~112 px) desktop | paddings |

## Requirements

### Requirement: Header and navigation

The system SHALL render a slim uppercase navbar that floats over the hero
(transparent at the top of the page) with the Affiance wordmark and eight nav
links.

#### Scenario: Header content

- **GIVEN** the Affiance page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show a bold uppercase "AFFIANCE" wordmark at the
  left in white
- **AND** SHALL show eight uppercase nav links — Home, Groom & Bride, Our Story,
  Greetings, Bridesmaid & Groomsmen, When & Where, RSVP, Gallery — in white
- **AND** the nav SHALL link to each section's anchor (`#home`, `#groom-bride`,
  `#lovestory`, `#greeting`, `#people`, `#when-where`, `#rsvp`, `#gallery`)
- **AND** below the desktop breakpoint the links SHALL collapse into a
  keyboard-operable menu whose toggle exposes its state via `aria-expanded`

#### Scenario: Navbar over the hero

- **GIVEN** the page is rendered on a desktop viewport
- **WHEN** the user scrolls past the hero
- **THEN** the navbar SHALL remain legible against the page background (a solid
  or scrolled state) and SHALL return to its transparent over-hero state at the
  top

### Requirement: Hero

The system SHALL render a full-bleed couple-photo hero under a dark scrim with
the couple names in a script face and a white tagline pill.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a full-bleed photo under a `rgba(0,0,0,.4)` dark
  overlay
- **AND** SHALL show a **120 px `#d291bc` disc centred above the names** with an
  inset `1.4px dashed rgba(255,255,255,.3)` ring carrying a **60 px white
  two-rings + diamond + heart glyph** (decorative, `aria-hidden`)
- **AND** SHALL show the couple names centred in **Rochester script, white**
- **AND** SHALL show a white, 2 px-radius pill beneath the names holding an
  uppercase, letter-spaced (7 px) brand-pink tagline

### Requirement: Countdown band

The system SHALL render a brand-pink countdown bar pulled up over the hero's
bottom edge with a script label cell and four live number cells.

#### Scenario: Countdown content

- **GIVEN** the page is rendered
- **WHEN** the countdown band is displayed
- **THEN** it SHALL be a `#d291bc` bar with a 4 px radius, overlapping the hero
  by ~50 px, carrying the shadow `0 10px 32px -19px rgba(0,0,0,.15)`
- **AND** SHALL show five equal cells split by a `1px solid
  rgba(255,255,255,.05)` hairline — the first a darker `#cb7fb1` script
  "Save the Day" cell, then four white **Rochester 40 px** numbers with tiny
  uppercase labels (Days, Hours, Minutes, Seconds)
- **AND** the numbers SHALL count down to a configured wedding date and SHALL
  update once per second without layout shift

### Requirement: About Bride & Groom section

The system SHALL render a white band with a dashed subheading pill, a script
title and two framed portraits with names and blurbs.

#### Scenario: Bride & Groom content

- **GIVEN** the page is rendered
- **WHEN** the bride & groom band is displayed
- **THEN** it SHALL show a centred dashed-border subheading ("About Bride &
  Groom") in brand `#d291bc` above a big Rochester script "Bride & Groom"
  heading
- **AND** SHALL show two alternating rows — a **400 × 400 photo framed with a
  15 px `#f0d9e8` solid border** beside a text column with a script name
  (groom, then bride) and a paragraph of muted copy
- **AND** each row SHALL alternate the side of the photo on desktop and stack on
  mobile
- **AND** each text column SHALL carry a **100 px `#d291bc` two-doves glyph**
  pinned to its bottom edge as a `z-index:-1` decoration (`aria-hidden`)

### Requirement: Love Story timeline

The system SHALL render a parallax photo band holding a four-entry vertical
timeline with circular photo badges.

#### Scenario: Timeline content

- **GIVEN** the page is rendered
- **WHEN** the love-story band is displayed
- **THEN** it SHALL show a fixed/parallax background photo behind a centred
  subheading and a script "Timeline of Love" title
- **AND** SHALL show four entries — First We Meet, First Date, In A
  Relationship, We're Engaged — in alternating side panels (each ~43 % wide)
  with a date, a script heading and a paragraph
- **AND** each entry SHALL show a **120 px circular photo badge** with an inset
  dashed `rgba(255,255,255,.5)` ring centred on the timeline's vertical rule
- **AND** each panel SHALL paint a **120 px `rgba(255,255,255,.3)` two-doves
  glyph** at its top corner (decorative, `aria-hidden`, `z-index:-1`)
- **AND** the parallax SHALL be disabled under `prefers-reduced-motion: reduce`

### Requirement: Greetings carousel

The system SHALL render a light band with a carousel of guest-message cards.

#### Scenario: Greetings content

- **GIVEN** the page is rendered
- **WHEN** the greetings band is displayed
- **THEN** it SHALL show a subheading + script "Sweet Messages" title on a
  `#f8f9fa` band
- **AND** SHALL show a carousel of message cards, each with a **40 px `#d291bc`
  disc holding a 30 px white single-dove glyph, peeking above its top-left
  corner**, an 80 px avatar in a 5 px `#f0d9e8` frame, a paragraph and a
  name + role
- **AND** inactive items SHALL render at reduced opacity and the carousel SHALL
  be pausable, keyboard-operable and static under `prefers-reduced-motion`

### Requirement: Family & Friends section

The system SHALL render a row of eight people cards with circular portraits,
names and roles.

#### Scenario: People content

- **GIVEN** the page is rendered
- **WHEN** the family & friends band is displayed
- **THEN** it SHALL show a subheading + script "Family & Friends" title
- **AND** SHALL show eight people cards, each a circular portrait with a name
  and a role caption (Groomsmen / Bridesmaid)
- **AND** the cards SHALL reflow from a wide row on desktop to a smaller grid on
  tablet and mobile

### Requirement: When & Where section

The system SHALL render a split band holding a map panel beside two event columns,
each with date, time, address, phone and a map link.

#### Scenario: Event content

- **GIVEN** the page is rendered
- **WHEN** the when-&-where band is displayed
- **THEN** it SHALL show a subheading + script "When & Where" title on a
  `#f8f9fa` band
- **AND** it SHALL be a split row: a left map panel (`col-md-5`, `#map`,
  `width:100%`, `height:300px` below the `md` breakpoint) beside a right
  `col-md-7` column holding **The Ceremony** and **The Reception**, each topped
  by a **100 px white disc with a 50 px `#d291bc` glyph** (a **church** on The
  Ceremony and a **wedding cake** on The Reception; decorative, `aria-hidden`),
  then a date line, a time line, a two-line street address, a phone number and a
  **See Map** link
- **AND** the map panel SHALL be filled by a **keyless** embed (OpenStreetMap) or
  a static styled placeholder — the source's keyed `maps/api/js?key=…` request
  and its `images/loc.png` marker are never reproduced
- **AND** each **See Map** link SHALL open a keyless map (an OpenStreetMap embed
  or the `output=embed` form) in a new tab

### Requirement: RSVP form

The system SHALL render an RSVP band over a photo background with a heading and
a four-field attendance form.

#### Scenario: RSVP content

- **GIVEN** the page is rendered
- **WHEN** the RSVP band is displayed
- **THEN** it SHALL show a fixed background photo under a light overlay with an
  "Invitation" subheading and a large script "Will You Attend?" title in the
  left column
- **AND** SHALL show a Name field, an email field, a **Guest** select
  (Guest, 1–5) with a chevron affordance, a 2-row Message textarea, and a
  brand-pink "I am attending" submit button

#### Scenario: Form submission

- **GIVEN** the RSVP form is displayed
- **WHEN** the user submits valid details
- **THEN** the form SHALL validate the required fields and SHALL NOT post to any
  external service
- **AND** it SHALL confirm the RSVP locally and SHALL be operable by keyboard
  alone with every field having an associated label

### Requirement: Gallery

The system SHALL render a full-width, no-gutter grid of photo tiles that reveal
an overlay and the theme's two-doves affordance on hover.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery band is displayed
- **THEN** it SHALL show a centred subheading + script "Photo Gallery" title
- **AND** SHALL show a four-column, no-gutter grid of 300 px tiles, reflowing to
  fewer columns at the breakpoints
- **AND** hovering or focusing a tile SHALL reveal a `#d291bc` wash
  (`opacity:.8`) and a **70 px white disc holding a 50 px `#d291bc` two-doves
  glyph**
- **AND** each tile SHALL be operable by keyboard and SHALL open the image in an
  accessible lightbox

### Requirement: Footer

The system SHALL render a brand-pink footer with a blurb, three link columns and
a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "Affiance" wordmark with a short blurb and a social
  row
- **AND** SHALL show three columns — Links, Services and a "Have a Questions?"
  contact column (street address, phone, e-mail)
- **AND** column headings SHALL be 20 px / 700 uppercase white and links SHALL be
  white, with a hover treatment
- **AND** a copyright line SHALL close the band and SHALL link
  `https://www.componentdock.com/` ("Component Dock") and show the computed
  current year

### Requirement: First-paint loader overlay

The system SHALL reproduce the source's first-paint loader cover
(`#ftco-loader.show.fullscreen`), which the source's own script removes 1 ms
after it runs, so that first paint matches the reference.

#### Scenario: Loader overlay

- **GIVEN** the Affiance app is rendered
- **WHEN** the page first paints
- **THEN** a full-screen **`#fff` cover** SHALL fill the viewport
  (`position:fixed`, `width/height:100%`, `transform:none`, square corners,
  no shadow)
- **AND** it SHALL centre an **inline 48 px SVG ring** — a `4px` `#eeeeee`
  track (`path-bg`, `r=22`) under a **`#F96D00`** arc (`path`, `r=22`,
  `stroke-linecap:round`, `miterlimit:10`)
- **AND** the ring SHALL animate (`2s linear infinite` rotation plus a
  `1.5s ease-in-out infinite` dash sweep)
- **AND** the cover SHALL be removed on mount (the source drops `.show` 1 ms
  after its script runs) and leave on an **`opacity .4s ease-out`** transition
  (`visibility` switching immediately)
- **AND** the cover SHALL be `aria-hidden`, hold no focusable element, and
  under `prefers-reduced-motion: reduce` SHALL leave without the fade

### Requirement: Page composition

The system SHALL compose every section in a single page with banner, main and
contentinfo landmarks.

#### Scenario: Full page render

- **GIVEN** the Affiance app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark; the hero,
  countdown, bride & groom, love story, greetings, family & friends, when &
  where, RSVP and gallery sections in the main landmark; and the Footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Affiance — Wedding Template"

## Implementation notes (2026-10-12, implementer run)

Everything below is a deliberate, recorded delta between the reference and the shipped
`apps/affiance`. Everything else was reproduced section-for-section.

- **Own copy everywhere a string is the design's own.** The brand (Affiance), the couple
  (`Elias & Rosalind`), the hero tagline (`Saying Forever` — the source's pill reads
  "Are Getting Married"), the two names and their blurbs, the four milestones, the five guest
  messages, the eight attendants, the venue/address/phone/e-mail and the photography captions are
  all invented for this recreation. The **layout** words the spec's requirements fix are kept
  verbatim: the eight navigation labels, the band headings (Bride & Groom · Timeline of Love ·
  Sweet Messages · Family & Friends · When & Where · Photo Gallery), the eyebrow pills
  (About Bride & Groom · Love Story · Greetings · Bridesmaid & Groomsmen · Planning · Invitation ·
  Gallery), `Save the Day`, `Invitation`, `Will You Attend?` and `I am attending`.
- **Contact column heading:** the source heads it `Have a Questions?` (its own typo). The prepped
  `docs/templates/affiance/tasks.md` forbids reprinting the source's column headings, so the
  recreation heads it **`Any Questions?`** — the two generic headings (`Links`, `Services`) are
  kept. `carriesSourceText` guards the typo'd string so it cannot creep back in.
- **Hero scrim:** the source stacks four `background` declarations on `.herowrap .overlay`, the last
  of which is `-webkit-gradient`/`linear-gradient(top, rgba(0,0,0,.4), rgba(239,1,124,.57))`. The
  spec's requirement and token table name the opaque `rgba(0,0,0,.4)` scrim, so that is what ships
  (`--color-scrim`); the pink gradient stop is not reproduced.
- **Two fidelity details the requirement text did not name but the stylesheet carries** are
  reproduced anyway: the countdown bar's inset `1px dashed #e1b5d2` frame (`#timer:after`,
  `--color-timer-frame`) and the timeline cards' **double** dashed 1px frame, the two copies
  tilted in opposite directions (`1deg` / `-1deg`).
- **The bar's two states are the stylesheet's own, not a "transparent → pink" invention:** over the
  hero the bar is transparent and `position:absolute`; below the design's 992px turn-over (where the
  source swaps in a solid `#d291bc` bar) it is brand-pink; once the page is past 60px of scroll it
  becomes the pinned state — `position:fixed`, `#f0d9e8` background, `0 0 10px rgba(0,0,0,.1)`
  shadow, black labels and a brand-pink current label (all from `.ftco-navbar-light.scrolled`).
- **Breakpoints:** the design's media queries are inclusive (`max-width: 767.98px` / `991.98px` /
  `1199.98px`); Tailwind's `md:` / `lg:` / `xl:` are exclusive (`width < N`). The `@theme` scale is
  re-pointed at Bootstrap's four tiers (576/768/992/1200), so the two differ only at exactly
  576/768/992/1200px.
- **Photography re-seeded after a visual review.** The prep's blind seeds were checked as a contact
  sheet and replaced: `affiance-26` was a near-solid yellow frame, `affiance-25` a photograph of a
  phone screen, `affiance-10` a flat-lay of electronic parts, and the portrait/avatar slots held
  landscapes with no one in them. Shipped seeds — hero `49` (two figures in a misted field),
  portraits `30` / `4`, milestones `11` / `33` / `19` / `59`, guest cards `46` / `51` / `41` / `60` /
  `53`, attendants `54` / `52` / `22` / `13` / `37` / `44` / `36` / `48`, bands `29` (love story) and
  `38` (invitation), gallery `6` / `12` / `18` / `24` / `43` / `15` / `35` / `42`. Every caption was
  rewritten to describe the frame that actually loads.
- **The invitation band's wash is white at 80%** (`--color-wash`), which is the source's
  `.ftco-section .overlay` white gradient at `opacity:.8`; its four fields keep the source's
  underline-only styling (`border-bottom` only, transparent background, 50px tall, 16px/600 text).
- **Shared-button overrides need an arbitrary radius.** `cn()`/tailwind-merge does not classify the
  custom theme radius (`rounded-bar`) into its border-radius group, so a shared `Button`/`ButtonLink`
  kept its own `rounded-lg` and CSS order decided the result (8px instead of the design's 4px). Both
  the See Map link and the RSVP submit therefore carry `rounded-[4px]`, which merges cleanly, and the
  tests assert `rounded-[4px]` plus the absence of `rounded-lg`.
- **Accessibility beyond the spec:** the countdown's four numbers each carry a screen-reader
  sentence (`5 seconds`) beside their two-digit display, the folded menu's contents mount only while
  it is open, the gallery lightbox is a labelled `role="dialog"` with a labelled close control and an
  `Escape` handler, and every RSVP field carries a `<label>` (visually hidden, because the design's
  fields show placeholders only).
- **Provenance guard —** the app's own guard (`src/test/provenance.ts`) bans the design's brand,
  slug, couple, party, dates, venue, milestone titles, guest card and the typo'd contact heading —
  assembled from fragments so the guard never spells them out — and runs over both the rendered page
  and every shipped source file.

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/affiance`
- [ ] `npm run lint` passes for `apps/affiance`
- [ ] `scripts/verify-app.sh affiance` passes (typecheck + lint + 100 % coverage
      tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] `npm run spec:validate` passes
- [ ] Preloader: full-screen `#fff` cover with a 48 px inline SVG ring
      (`#eeeeee` track + `#F96D00` arc), `2s` rotation + `1.5s` dash animation,
      removed on mount and leaving on an `opacity .4s ease-out` transition,
      `aria-hidden`, reduced-motion aware
- [ ] Header: transparent uppercase navbar over the hero, "AFFIANCE" wordmark +
      eight uppercase white links (Home · Groom & Bride · Our Story · Greetings ·
      Bridesmaid & Groomsmen · When & Where · RSVP · Gallery), keyboard-operable
      mobile menu with `aria-expanded`
- [ ] Hero: full-bleed photo + `rgba(0,0,0,.4)` scrim, round brand-pink two-rings
      badge, couple names in Rochester script white, white 2 px-radius pill with
      an uppercase 7 px-letter-spaced `#d291bc` tagline
- [ ] Countdown: `#d291bc` bar (`#cb7fb1` first cell, radius 4 px, shadow
      `0 10px 32px -19px rgba(0,0,0,.15)`, pulled up `-50px`) with five 20 %
      cells split by a `rgba(255,255,255,.05)` hairline, four Rochester 40 px
      white numbers updating once per second
- [ ] Bride & Groom: dashed `#d291bc` subheading pill + Rochester script title,
      two alternating rows with **400 × 400 photos framed by a 15 px `#f0d9e8`
      border**, script names and muted paragraphs, each column carrying the
      **100 px `#d291bc` two-doves glyph** at its bottom edge
- [ ] Love Story: parallax photo band, subheading + script title, four
      alternating timeline entries, **120 px circular photo badges** with an
      inset dashed `rgba(255,255,255,.5)` ring, a **120 px
      `rgba(255,255,255,.3)` two-doves glyph** at each panel's top corner,
      parallax off under reduced motion
- [ ] Greetings: `#f8f9fa` band, subheading + script "Sweet Messages" title,
      guest-message carousel with a **40 px `#d291bc` disc + 30 px white
      single-dove glyph** above each card's top-left corner,
      reduced-opacity inactive items, pausable and reduced-motion safe
- [ ] Family & Friends: subheading + script title, eight people cards with
      circular portraits, names and Groomsmen/Bridesmaid captions
- [ ] When & Where: `#f8f9fa` band, a **split row** — left `col-md-5` map panel
      (`#map`, `width:100%`, 300 px below `md`) with a **keyless** embed or a
      static styled placeholder (never the source's key/marker) — beside two
      event columns (Ceremony / Reception) each topped by a **100 px white disc
      with a 50 px `#d291bc` glyph** (church / wedding cake) and carrying date,
      time, address, phone and a keyless-map **See Map** link
- [ ] RSVP: photo band + overlay, "Invitation" subheading + 60 px script "Will
      You Attend?" title, Name / email / Guest select (Guest, 1–5) / Message
      textarea / `#d291bc` "I am attending" submit; local confirmation only, no
      external POST, labelled fields
- [ ] Gallery: full-width no-gutter grid, ~300 px tiles, 4 columns desktop and
      fewer below, hover/focus `#d291bc` wash (`opacity:.8`) + 70 px white disc
      carrying the **50 px two-doves glyph**, keyboard toolbox lightbox
- [ ] Footer: `#d291bc` band, wordmark + blurb + social row, three columns
      (Links · Services · Have a Questions? contact), 20 px uppercase white
      headings, white links, copyright with a Component Dock link and the
      current year
- [ ] Tokens: brand `#d291bc` and cell `#cb7fb1` in `@theme`; Rochester +
      Source Sans Pro loaded from Google Fonts (the Source Sans Pro axis
      **includes `900`** — the eyebrow pills); radii 4 px / 2 px / 50 %
- [ ] Iconography: the theme's **two-doves motif** (bride/groom blocks, timeline
      panels, gallery discs, greetings discs) and the **church / wedding-cake**
      When-&-Where discs are reproduced at the sizes/colours of the census table
      above (no icon-font glyph copied — inline SVG motif + `lucide-react`)
- [ ] Placeholder images via seeded picsum (`seed/affiance-<n>/<w>/<h>`); the
      hero two-rings/diamond badge and the recurring two-doves motif are
      **inline SVG** (`DovesMark`, decorative), while the church/cake discs use
      `lucide-react` `Church` / `Cake` and the small UI glyphs `Menu`, `X`,
      `ChevronDown`, `MapPin`, `Phone`, `Mail`, `ArrowUp`; no ColorLib asset
      copied
- [ ] No `colorlib` / `twohearts` / "Twohearts" string anywhere in the app
      (comments included); footer links Component Dock
- [ ] TEMPLATES.md `Twohearts` item marked `[x]` with the live
      `https://affiance.free.componentdock.com` URL + homepage
