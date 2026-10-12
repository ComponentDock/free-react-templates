# Template: Matrimony (Wedding)

## Purpose

Matrimony is a single-page wedding-website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free **"Wed"** website template design (source:
https://colorlib.com/wp/template/wed/ — TEMPLATES.md line 3104, category
**Wedding**), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

- **Source template:** ColorLib "Wed" — source slug `wed`
- **Preview URL:** `https://preview.colorlib.com/theme/wed/`
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **App folder:** `apps/matrimony` — package `@free-react-templates/matrimony`
- **Naming:** never reuse the source name "Wed"; the brand is renamed
  **Matrimony** (the state/rite of marriage — a single lowercase word, no
  collision with `apps/` or `openspec/specs/`, and it keeps the Wedding
  family's naming run: lensly · vows · nuptial · knot · wedlock · nuptials ·
  betrothal · trousseau · paperie · affiance · troth · espousal ·
  **matrimony**).
- Homepage / CNAME: `https://matrimony.free.componentdock.com`

## Design reference (replication findings)

- **Original:** ColorLib "Wed" — a red-and-white one-page wedding site (a
  Bootstrap 4 theme with owl-carousel, slick, animate.css and themify/flaticon
  icons). Source page `https://colorlib.com/wp/template/wed/` (HTTP 200). Live
  preview `https://preview.colorlib.com/theme/wed/` returns **HTTP 200**
  (32,821 B HTML, `<title>Wedding | Template</title>`). Stylesheet fetched for
  tokens: `https://preview.colorlib.com/theme/wed/assets/css/style.css`
  (HTTP 200, **57,398 B**, sha256
  `4f9429265f14e36dc089c39593d8180abf3128fadaf7405d29fce51f929baa33`);
  behaviour reference `assets/js/main.js` (HTTP 200, 7,712 B — jQuery +
  owl-carousel, slick (brand logo strip), magnific-popup, WOW/animate.css,
  counters, and the `[data-background]` → `background-image` swap used for
  every patterned band).
- **Font delivery (reference fact, re-verified 2026-10-12):** the source delivers
  all three design faces **without a single `@font-face` rule of its own and
  without a `fonts.googleapis.com` `<link>`** — they arrive through a **legacy
  `@import` on line 1 of the theme's own stylesheet** (`assets/css/style.css`):
  `@import url("https://fonts.googleapis.com/css?family=Barlow:300,400,500,600,700|Playfair+Display:400,500,600,700,800,900|Roboto:300,400,500,700&display=swap");`
  (the v1 `css?` API form: `|`-separated families, `&display=swap` on the query —
  which is why the reference's text **swaps in** rather than blocking). The page's
  only `@font-face` rules belong to its icon fonts (Flaticon, Font Awesome 5
  Free/Brands, themify) — the recreation draws `lucide-react` glyphs instead, and
  none of those faces is a design face.
- **Screenshot:** TEMPLATES.md `wed-free-template.jpg` (HTTP 200, served
  **AVIF** despite the `.jpg` name, 89,139 B, 1200×946 → converted to PNG and
  inspected). Live render (1440 px) and screenshot agree.
- **Visual design (live render at 1440 px + screenshot, verified):** a **white
  page** with a **scarlet brand `#ff2828`**, **Playfair Display** headings over
  **Roboto** body text, **Barlow** for the hero eyebrow + countdown numerals,
  a white fixed header, a full-bleed couple-photo hero with a left-aligned
  white caption, and **two red damask-pattern bands** (the overlapping
  countdown strip and the full-bleed gift band) as the page's signature.
  Section order (1:1 with the source): **fixed white header → hero slider →
  love story → wedding info cards (+ countdown strip pulled up `-73px`) →
  photo gallery → red gift band → RSVP form card → registry-gift logo strip →
  grayscale map band → dark patterned footer**.
  - **First paint (preloader overlay):** the source's first body element is
    `<div id="preloader-active">` → `.preloader` → `.preloader-inner` →
    `.preloader-circle` + `.preloader-img.pere-text` (the source logo `<img>`,
    `max-width:55px`). `style.css`: `.preloader{background-color:#f7f7f7;
    width:100%;height:100%;position:fixed;top:0;left:0;right:0;bottom:0;
    z-index:999999;transition:.6s}` and `.preloader .preloader-circle{width:
    100px;height:100px;border-width:1px;border-top-color:#ff2828;
    border-{bottom,left,right}-color:transparent;border-radius:50%;
    background-color:#ffffff;box-shadow:0 1px 5px 0 rgba(35,181,185,0.15);
    animation:zoom 2000ms infinite ease}` with `@keyframes zoom` rotating
    `0 → 360deg`. `assets/js/main.js` (7,712 B) runs on `$(window).on('load')`:
    `$('#preloader-active').delay(450).fadeOut('slow')` plus
    `$('body').delay(450).css({'overflow':'visible'})` (inert — nothing ever
    sets the body's overflow to `hidden`). Our recreation ships this as a
    `Preloader` component above the header.
  - **Header (`.main-header`):** a **white fixed bar** (`position: fixed`,
    `padding: 15px 0`, shadow `0 10px 15px rgba(25,25,25,0.1)`), NOT
    transparent over the hero — the source ships it solid. Left: the "WED"
    wordmark (a serif wordmark with a red wheat/laurel flourish) — **renamed
    "Matrimony"** for us. Right: six uppercase nav links (HOME · ABOUT ·
    GALLERY · GUESTBOOK · BLOG · CONTACT US) in `#3c3e48`, `padding: 39px 15px`,
    hover `#ff2828`, with a **BLOG submenu** (Blog · Blog Details · Element,
    14 px capitalize, `#0b1c39`); the source is multi-page
    (`index/about/gallery/booking/blog/contact.html`) so our recreation is
    single-page and every entry anchors to an on-page section.
  - **Hero (`.slider-area` → `.single-slider`):** a full-bleed couple photo
    (`.slider-height: 980px` desktop / 600 / 500) under a very light
    **`rgba(0,0,0,0.1)`** scrim (`.hero-overly::before`), inside an
    owl-carousel of two identical slides. The caption is **left-aligned**
    (`col-xl-8`): a Barlow-22 uppercase eyebrow "january 23" in white with
    `letter-spacing: 0.3em` and a **36 × 45 ornament mark** pinned to its left
    (`.hero__caption span::before`); then the couple names — **Playfair
    Display 99 px white**, "Dennis & Judith", with a second **80 × 84 laurel
    flourish** between the names; then "will get married" in small uppercase
    letterspaced white.
  - **Love Story:** a white band — a centred Playfair **40 px `#212121`** title
    "Our Love Story" with a **red flourish divider** under it (a 439 × 17
    ornamental rule, `.section-tittle img`) and a grey paragraph. Then a
    two-column row: the left column is a **red damask panel** (`.story-caption`
    with a patterned background image, 474 × 583) holding a **Playfair 30 px
    white** "The Proposal" heading + two white paragraphs (the panel's text
    column is inset ~150 px); the right column is a photo (471 × 580) shifted
    `bottom: -51px; left: -30px` so it overlaps the panel.
  - **Wedding Info (`.pricing-card-area.section-padding30.section-bg`):** a
    **near-white floral-textured band** — `[data-background]`
    `section_bg1.png`, 1920 × 1217, average `#f9f9f9` — `padding: 195px 0
    170px`. Centred title "Wedding Info" + red flourish + grey paragraph, then
    **three white cards** (`.single-card`, `padding: 70px 25px 0`, shadow
    `0 0 9px rgba(131,93,248,0.07)`, `border: 1px solid transparent`):
    **The Ceremony · The Reception · The Party**. Each card has a top block
    (an icon above a **Playfair 25 px `#2e3c40`** title, closed by a
    `2px solid #f4f4f4` rule) and a list of icon rows — date, time, venue,
    address, a red **"Check out the map"** link — plus a red **GET STARTED**
    pill. The **middle card is active** (`.single-card.active`: `1px solid
    #ff2828`, `padding-bottom: 70px`, its button always visible); the other two
    reveal the same border + button on hover (`box-shadow: 0 10px 30px
    rgba(133,66,189,0.1)`).
  - **Countdown strip (`.count-down-area`):** a **red damask band**
    (`[data-background]` `section_bg2.png`, 1004 × 160, average `#ff3535`)
    pulled up **`position: relative; top: -73px`** so it overlaps the floral
    band above; four counters in a 3-2-2-3 column run — **23 days · 15 hours ·
    46 mins · 20 secs** — each a **Barlow 36 px white** uppercase numeral over
    an **18 px uppercase white** label.
  - **Gallery (`.gallery-area`):** a white band with **no heading**, a
    `4 / 8 / 8 / 4` column layout of four **565 px tall** image tiles
    (`.gallery-img` background images, `gallery1–4.png`). On hover/focus the
    tile reveals a red wash, a **white 24 px "image 01–04" title** and a
    **circular 2 px white-bordered plus button** (red glyph, white on hover),
    plus a 108 × 61 corner flourish at the bottom-right of the caption block
    (`.thumb-content::before`, `shape1.png`); the tile links to the full image
    (magnific-popup in the source).
  - **Gift band (`.gift-area.gift-padding`):** a full-bleed **red damask band**
    (`data-background` `section_bg3.png`, 1920 × 499, average `#ff3535`,
    `padding: 120px 0 130px`) with a centred **Playfair 70 px white** "The Best
    Gift From You", a white 18 px subtitle and a **white pill button**
    (`.btn.btn-whit`, `border-radius: 30px`, `#362d2b` uppercase label). The
    source label reads "resarve your Seat" (a typo) — we ship
    **"Reserve your seat"**.
  - **RSVP form (`.contact-form.section-padding30`):** a white band with a
    **white form card** (`.form-wrapper`: `padding: 125px 70px 115px`,
    `box-shadow: 0 0 86px rgba(0,0,0,0.06)`), framed by a decorative border
    overlay and flanked by soft floral artwork in the source (`.shape-inner-
    flower`) — replaced in our recreation by a subtle SVG frame + soft
    shapes. Inside: a centred **30 px** "Are you attending?" title + red
    flourish, then **Name** input, **Email** input, a **Guest select**
    ("1 Guest" … "4 Guest", `.nice-select` style: `border-radius: 5px`,
    `1px solid #d9d9d9`, value text `#a3a3a3`, 2 px chevron), a message
    textarea and a **red pill submit "CONFIRM NOW"**.
  - **Registry Gift (`.brand-area.section-padding-b`):** a white band
    (`padding-bottom: 150px`) — centred "Registry Gift" title + red flourish +
    grey paragraph, then a **logo strip** of six grey monochrome brand cards
    (170 × 171 images on white with a light border, slick carousel in the
    source: ADVANCE · SA CREATIVE · CULPA · SAPHIRE · a "W" crest · one more).
    Our recreation renders six neutral placeholder marks (no copied logos).
  - **Map band (`.contact-sections` → `.d-area`):** a **235 px** Google-Maps
    embed, grayscaled in the source (`saturation: -90`, `lightness: 50`;
    lat/lng `-31.197, 150.744`, zoom 9), filled by
    `<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSy…&callback=initMap">`
    + the page's inline `initMap()`. Our recreation uses a **keyless
    OpenStreetMap embed** with a light grayscale CSS filter (no Google API key).
  - **Source-only head facts:** the page loads **its own analytics**
    (`<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13">`
    + the inline `dataLayer` bootstrap) and declares a `site.webmanifest` and an
    `assets/img/favicon.ico`. None of it is reproduced: the app ships no
    third-party tag and its own favicon/manifest.
  - **Footer (`.footer-main`):** a **near-black patterned band**
    (`[data-background]` `section_bg4.png`, 1920 × 630, average RGB
    `18,21,25` → `#12151a`; `padding: 135px 0 74px`) with a dark damask
    texture. Left: the white wordmark. Then three link columns with **Roboto
    18 px uppercase white** headings — **WEDDING INFO** (Why Hire a Planner? ·
    How Can I Make An Appointment? · How to Choose a Venue · Event Catalogue ·
    Accept), **ABOUT US** (Bridesmaids · November 22, 2020 · Groomsmen ·
    Groomsmen · November 22, 2020 · JEWELRY) and **LOCATION** (a site line +
    `+(123) 456 - 7890 - 456 35 W 46nd Street NY`) — with **14 px capitalize
    `#cfcfcf`** links (hover white). A `1px solid #26282c` hairline divider
    (`padding: 33px 0`) closes the band above a centred **16 px `#cfcfcf`**
    copyright line with a **red heart `#cd0102`** and a red link. The source
    credits ColorLib here — our recreation links
    **https://www.componentdock.com/ ("Component Dock")** instead
    (AGENTS.md rule 5).
  - **Back-to-top:** a **red circular** up-arrow button pinned to the
    bottom-right of the viewport (visible in the live render).
- **Tokens are the source's own** (`style.css`), not invented: brand red
  `#ff2828` (buttons, active-card border, link hover), button hover fill
  `#da1b1b`, band red `#ff3535` (the two damask images' average), heading ink
  `#212121`, card-title ink `#2e3c40`, body muted `#636363`, band near-white
  `#f9f9f9`, divider `#f4f4f4`, input border `#d9d9d9` / placeholder
  `#a3a3a3`, footer band `#12151a`, footer link `#cfcfcf`, footer hairline
  `#26282c`, heart/link red `#cd0102`.

## Design tokens

| Token | Value | Where |
| --- | --- | --- |
| Brand red | **`#ff2828`** | primary buttons, active card border, nav/link hover, section-title flourish |
| Brand red (hover fill) | **`#da1b1b`** | `.btn::before` hover wipe |
| Band red (damask) | **`#ff3535`** | countdown strip + gift band background images; love-story panel |
| Heart / footer link red | **`#cd0102`** | footer copyright heart + link |
| Heading ink | `#212121` | `.section-tittle h2` (Playfair 40 px / 700) |
| Card-title ink | `#2e3c40` | `.card-top h4` (Playfair 25 px / 700), section subtext |
| Body muted | `#636363` | card list rows, paragraphs |
| Body base | `#212529` | body copy |
| Band near-white | `#f9f9f9` | Wedding Info floral band (background average) |
| Divider grey | `#f4f4f4` | 2 px rule under each card header |
| Input border / placeholder | `#d9d9d9` / `#a3a3a3` | `.nice-select` + form fields |
| Nav ink | `#3c3e48` | header menu links (hover `#ff2828`) |
| Footer band | **`#12151a`** | dark patterned footer background |
| Footer link | `#cfcfcf` | footer column links + copyright (hover `#fff`) |
| Footer hairline | `#26282c` | divider above the copyright bar |
| Hero scrim | **`rgba(0,0,0,0.1)`** | `.hero-overly::before` |
| Card shadow | `0 0 9px rgba(131,93,248,0.07)`; hover `0 10px 30px rgba(133,66,189,0.1)` | `.single-card` |
| Form-card shadow | `0 0 86px rgba(0,0,0,0.06)` | `.form-wrapper` |
| Header shadow | `0 10px 15px rgba(25,25,25,0.1)` | `.main-header` |
| Radii | **30 px** pill buttons · **5 px** inputs/select | `.btn`, `.nice-select` |
| Fonts | **"Playfair Display", serif** (h1–h6, hero names, card/event titles, gift heading) · **"Roboto", sans-serif** (body, nav, footer) · **"Barlow", sans-serif** (hero eyebrow, countdown numerals + labels) | all verified on Google Fonts (HTTP 200); the reference delivers them through the theme stylesheet's line-1 legacy `@import` (only the icon faces use `@font-face`), `&display=swap` |
| Section rhythm | Wedding Info `195px 0 170px` · gift `120px 0 130px` · registry `0 0 150px` · footer `135px 0 74px`; hero height 980 px | paddings |

## Requirements

### Requirement: First-paint preloader overlay

The system SHALL reproduce the source's first-paint preloader
(`#preloader-active`), which the source's own script fades out 450 ms after
`window.load`, so that first paint matches the reference.

#### Scenario: Preloader overlay

- **GIVEN** the Matrimony app is rendered
- **WHEN** the page first paints
- **THEN** a full-screen **`#f7f7f7`** cover SHALL fill the viewport
  (`position:fixed`, inset `0`, `z-index:999999`)
- **AND** it SHALL centre a **100 px white circle** (radius `50%`,
  `background:#fff`, `1px` solid border with only the **top** border coloured
  **`#ff2828`** and the rest transparent, shadow `0 1px 5px 0
  rgba(35,181,185,0.15)`) rotating `0 → 360deg` over a `2000ms … infinite`
  cycle (`@keyframes zoom`)
- **AND** the circle SHALL hold the logo mark (source `<img>`, `max-width:55px`)
  vertically centred in it
- **AND** on `window.load` the cover SHALL fade out **450 ms later** (the
  source's `$('#preloader-active').delay(450).fadeOut('slow')`)
- **AND** the cover SHALL be `aria-hidden`, hold no focusable element, and
  under `prefers-reduced-motion: reduce` SHALL hide without the rotation/fade

### Requirement: Fixed header and navigation

The system SHALL render a white fixed header with the Matrimony wordmark and
six uppercase nav links, one of which is a keyboard-operable dropdown.

#### Scenario: Header content

- **GIVEN** the Matrimony page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL be a **white fixed bar** (`padding: 15px 0`, shadow
  `0 10px 15px rgba(25,25,25,0.1)`) sitting above the hero — not a transparent
  over-hero bar
- **AND** it SHALL show the **Matrimony** wordmark at the left with a red
  laurel/wheat flourish mark
- **AND** it SHALL show six uppercase links — HOME · ABOUT · GALLERY ·
  GUESTBOOK · BLOG · CONTACT US — in `#3c3e48` with a `#ff2828` hover colour
- **AND** the BLOG entry SHALL be a keyboard-operable dropdown (`aria-expanded`)
  holding three entries (Blog · Blog Details · Element)

#### Scenario: Single-page anchor mapping

- **GIVEN** the source template is multi-page (`index/about/gallery/booking/
  blog/contact.html`)
- **WHEN** the nav is rendered in our single-page recreation
- **THEN** HOME · ABOUT · GALLERY · GUESTBOOK · CONTACT US SHALL anchor to
  `#home`, `#story`, `#gallery`, `#rsvp`, `#contact`
- **AND** the BLOG dropdown entries SHALL anchor to the closest on-page
  sections (`#story`, `#registry`, `#rsvp`) and a note in
  `docs/templates/matrimony/design-notes.md` SHALL record that mapping

#### Scenario: Mobile menu

- **GIVEN** the viewport is below the desktop breakpoint
- **WHEN** the user opens the menu
- **THEN** the links SHALL collapse behind a toggle that exposes its state via
  `aria-expanded`, SHALL be operable by keyboard alone, and SHALL close on
  `Escape` and on link activation

### Requirement: Hero slider

The system SHALL render a full-bleed couple-photo hero with a light scrim and a
left-aligned caption in three type styles.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a full-bleed photo (980 px tall on desktop, shorter at
  the breakpoints) under a **`rgba(0,0,0,0.1)`** scrim
- **AND** the caption SHALL be **left-aligned** and show an uppercase
  **Barlow 22 px white** eyebrow with `letter-spacing: 0.3em` and a decorative
  red flourish mark pinned to its left
- **AND** SHALL show the couple names in **Playfair Display, ~99 px, white**,
  with a laurel flourish mark between the two names
- **AND** SHALL show a small uppercase letterspaced white line beneath the
  names
- **AND** the source ships an owl-carousel with two identical slides — our
  recreation MAY render a single static slide (documented in the design notes)

#### Scenario: Hero accessibility and motion

- **GIVEN** the hero is displayed
- **WHEN** `prefers-reduced-motion: reduce` is set
- **THEN** the slide transition and WOW-style entrance animations SHALL be
  disabled and the caption SHALL be visible without animation
- **AND** decorative flourish marks SHALL be `aria-hidden` and rendered as
  inline SVG (no copied image assets)

### Requirement: Love Story section

The system SHALL render a white band with a centred title, a red flourish
divider and a two-column panel/photo row.

#### Scenario: Love story content

- **GIVEN** the page is rendered
- **WHEN** the love story band is displayed
- **THEN** it SHALL show a centred **Playfair 40 px `#212121`** title above a
  **red ornamental flourish divider** and a grey paragraph
- **AND** SHALL show a left **red damask panel** carrying a **Playfair 30 px
  white** sub-heading and two white paragraphs, with its text column inset
  from the left edge
- **AND** SHALL show a right photo column offset (`bottom: -51px;
  left: -30px` desktop → reset on small screens) so it overlaps the panel
- **AND** the two columns SHALL stack on mobile without horizontal overflow

### Requirement: Wedding Info cards

The system SHALL render a near-white floral band holding three white event
cards, one of them active.

#### Scenario: Wedding info content

- **GIVEN** the page is rendered
- **WHEN** the wedding-info band is displayed
- **THEN** it SHALL sit on a near-white (`#f9f9f9`) patterned band with
  `padding: 195px 0 170px` and show a centred title, a red flourish divider and
  a grey paragraph
- **AND** SHALL show three cards — **The Ceremony**, **The Reception**, **The
  Party** — each white with the card shadow, a **50 px card glyph above a
  Playfair 25 px `#2e3c40` title** (a magnifier-with-nodes for The Ceremony, a
  rocket with a check for The Reception, a ribbon rosette with a star for The
  Party — the source's `flaticon-chart` / `-project` / `-award` classes do **not**
  match those shapes), a title closed by a `2px solid #f4f4f4` rule, and icon
  rows for date, time, venue and address
- **AND** each card SHALL carry a red **"Check out the map"** link and a red
  pill **GET STARTED** button (radius 30 px)
- **AND** one card SHALL render in the **active** state (`1px solid #ff2828`,
  `padding-bottom: 70px`, button always visible) and the others SHALL reveal
  the same treatment on hover/focus
- **AND** every card link and button SHALL be keyboard reachable with a visible
  focus ring

### Requirement: Countdown strip

The system SHALL render a red damask countdown strip pulled up over the
preceding band with four live counters.

#### Scenario: Countdown content

- **GIVEN** the page is rendered
- **WHEN** the countdown strip is displayed
- **THEN** it SHALL be a **red patterned strip** (`#ff3535` base) pulled up
  **`-73px`** so it overlaps the band above
- **AND** SHALL show four counters — days · hours · mins · secs — each a
  **Barlow 36 px white** uppercase numeral over an **18 px uppercase white**
  label, in the source's 3-2-2-3 column run
- **AND** the numerals SHALL count down to a configured wedding date and update
  once per second without layout shift
- **AND** the values SHALL be exposed to assistive technology as readable
  text (e.g. `aria-label="23 days"`) with `aria-live` off to avoid per-second
  announcements

### Requirement: Photo gallery

The system SHALL render a heading-less band of four photo tiles in the source's
4/8/8/4 layout with a hover reveal.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery band is displayed
- **THEN** it SHALL show four image tiles (**565 px** tall in the source) in a
  `col-4 / col-8 / col-8 / col-4` arrangement, reflowing to a single column on
  mobile
- **AND** hovering or focusing a tile SHALL reveal a red wash, a white 24 px
  caption ("image 01"–"image 04") and a circular 2 px white-bordered plus
  button
- **AND** each tile SHALL be operable by keyboard and SHALL open the image in
  an accessible lightbox
- **AND** the corner flavour mark SHALL be an inline SVG (no copied asset)

### Requirement: Gift band

The system SHALL render a full-bleed red patterned band with a large white
heading and a white pill button.

#### Scenario: Gift band content

- **GIVEN** the page is rendered
- **WHEN** the gift band is displayed
- **THEN** it SHALL be a full-bleed **red patterned band** (`#ff3535`,
  `padding: 120px 0 130px`)
- **AND** SHALL show a centred **Playfair 70 px white** heading, a white
  subtitle and a **white pill button** (radius 30 px, `#362d2b` uppercase
  label)
- **AND** the button label SHALL read "Reserve your seat" (the source's
  "resarve your Seat" typo is not reproduced)
- **AND** the button SHALL be a real control with a visible focus ring and a
  contrast-compliant label

### Requirement: RSVP form

The system SHALL render a white form card over a decorative frame with four
labelled fields and a red pill submit.

#### Scenario: RSVP content

- **GIVEN** the page is rendered
- **WHEN** the RSVP band is displayed
- **THEN** it SHALL show a white card (`padding: 125px 70px 115px`, shadow
  `0 0 86px rgba(0,0,0,0.06)`) with a subtle decorative frame (inline SVG)
- **AND** SHALL show a centred ~30 px "Are you attending?" title above a red
  flourish divider
- **AND** SHALL show a **Name** input, an **Email** input, a **Guest** select
  (1–4 guests, `border-radius: 5px`, `1px solid #d9d9d9`, chevron affordance),
  a message textarea and a red pill **CONFIRM NOW** submit
- **AND** every field SHALL have an associated label (visible or `sr-only`)

#### Scenario: Form submission

- **GIVEN** the RSVP form is displayed
- **WHEN** the user submits valid details
- **THEN** the form SHALL validate the required fields and SHALL NOT post to
  any external service
- **AND** it SHALL confirm the RSVP locally with a live-region message and
  SHALL be operable by keyboard alone
- **AND** invalid submissions SHALL show per-field errors and SHALL NOT clear
  the entered values

### Requirement: Registry Gift strip

The system SHALL render a centred title with a flourish and a strip of six
neutral brand placeholder cards.

#### Scenario: Registry content

- **GIVEN** the page is rendered
- **WHEN** the registry band is displayed
- **THEN** it SHALL show a centred "Registry Gift" title with a red flourish
  divider and a grey paragraph on white
- **AND** SHALL show six equal cards (~170 px square, light border) carrying
  neutral monochrome placeholder marks (never the source's logos)
- **AND** the strip SHALL reflow from a single row of six on desktop to a
  wrapped/scrollable arrangement on smaller viewports

### Requirement: Map band

The system SHALL render a short grayscale map band replacing the source's
Google Maps embed.

#### Scenario: Map content

- **GIVEN** the page is rendered
- **WHEN** the map band is displayed
- **THEN** it SHALL be ~235 px tall and show a **keyless map embed**
  (OpenStreetMap) under a light grayscale filter, matching the source's
  desaturated treatment
- **AND** it SHALL be exposed with an accessible name (e.g. `title` /
  `aria-label` "Map of the venue") and SHALL NOT require an API key
- **AND** the app SHALL ship no third-party tag or script — the source's
  analytics (`gtag.js?id=UA-23581568-13` with its inline `dataLayer` bootstrap)
  and its keyed `maps.googleapis.com` script are never reproduced, so no
  `gtag`/`dataLayer`/`UA-` id appears in `apps/matrimony`

### Requirement: Footer

The system SHALL render a dark patterned footer with a wordmark, three link
columns and a copyright bar linking Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL be a **near-black patterned band** (`#12151a`,
  `padding: 135px 0 74px`) with the white Matrimony wordmark in the left column
- **AND** SHALL show three columns with **Roboto 18 px uppercase white**
  headings — WEDDING INFO, ABOUT US, LOCATION — whose links are **14 px
  capitalize `#cfcfcf`** with a white hover
- **AND** a `1px solid #26282c` hairline SHALL separate the columns from a
  centred copyright line (16 px `#cfcfcf`) carrying a red heart glyph
- **AND** the copyright line SHALL link **https://www.componentdock.com/**
  ("Component Dock") and SHALL show the computed current year
- **AND** it SHALL NOT contain any ColorLib string

### Requirement: Back-to-top control

The system SHALL render a red circular back-to-top button pinned to the
bottom-right of the viewport.

#### Scenario: Back-to-top behaviour

- **GIVEN** the page is rendered
- **WHEN** the user has scrolled past the hero
- **THEN** a **red circular** up-arrow control SHALL appear at the bottom-right
- **AND** activating it SHALL smooth-scroll to the top (instantly under
  `prefers-reduced-motion: reduce`), and it SHALL have an accessible name and a
  visible focus ring

### Requirement: Page composition

The system SHALL compose every section in a single page with banner, main and
contentinfo landmarks.

#### Scenario: Full page render

- **GIVEN** the Matrimony app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark; the hero,
  love story, wedding info, countdown, gallery, gift band, RSVP, registry, map
  bands in the main landmark; and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Matrimony — Wedding Template"
- **AND** the section order SHALL match the source 1:1 (header → hero → love
  story → wedding info → countdown → gallery → gift → RSVP → registry → map →
  footer)

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/matrimony`
- [ ] `npm run lint` passes for `apps/matrimony`
- [ ] `scripts/verify-app.sh matrimony` passes (typecheck + lint + 100 %
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] `npm run spec:validate` passes
- [ ] Preloader: full-screen `#f7f7f7` cover (`z-index:999999`) with a 100 px
      white circle carrying the `#ff2828` top-border arc (`zoom` 2000 ms infinite
      rotation) + the logo mark inside it, fading out 450 ms after load,
      `aria-hidden`, reduced-motion aware
- [ ] Header: **white fixed bar** (`padding: 15px 0`, shadow
      `0 10px 15px rgba(25,25,25,0.1)`), wordmark + red laurel mark, six
      uppercase links (`#3c3e48`, hover `#ff2828`), BLOG dropdown with
      `aria-expanded`, keyboard-operable mobile menu
- [ ] Hero: full-bleed photo + `rgba(0,0,0,0.1)` scrim, left-aligned caption,
      Barlow 22 px uppercase eyebrow with `0.3em` tracking and a red flourish
      mark, Playfair ~99 px white couple names with a laurel mark, small
      uppercase letterspaced line beneath
- [ ] Love Story: centred Playfair 40 px `#212121` title + red flourish
      divider + grey paragraph, left **red damask panel** with Playfair 30 px
      white sub-heading and white paragraphs, right photo offset
      `bottom: -51px; left: -30px`, columns stack on mobile
- [ ] Wedding Info: near-white `#f9f9f9` band (`padding: 195px 0 170px`), three
      white cards (Ceremony / Reception / Party) with a **50 px glyph above the
      Playfair 25 px `#2e3c40` title** (Ceremony = magnifier-with-nodes,
      Reception = rocket-with-check, Party = ribbon rosette — see the design
      notes; the source's flaticon class names mislead) over a `2px solid
      #f4f4f4` rule, icon rows, red map
      links, red GET STARTED pills, one card **active** (`1px solid #ff2828`,
      `padding-bottom: 70px`)
- [ ] Countdown: red `#ff3535` patterned strip pulled up `-73px`, four
      counters (Barlow 36 px white numerals, 18 px uppercase white labels) in
      the 3-2-2-3 run, updating once per second, accessible labels
- [ ] Gallery: heading-less band, four 565 px tiles laid out 4/8/8/4, hover
      red wash + white 24 px caption + circular white-bordered plus button,
      keyboard-operable lightbox
- [ ] Gift: full-bleed red `#ff3535` patterned band, Playfair 70 px white
      heading, white subtitle, white pill "Reserve your seat" (typo fixed)
- [ ] RSVP: white card (`padding: 125px 70px 115px`, shadow
      `0 0 86px rgba(0,0,0,0.06)`) with a decorative inline-SVG frame, centred
      ~30 px title + red flourish, Name / Email / Guest select (radius 5 px,
      `1px solid #d9d9d9`) / textarea / red pill CONFIRM NOW, labelled fields,
      local confirmation only, no external POST
- [ ] Registry: centred title + red flourish + grey paragraph, six neutral
      ~170 px placeholder cards (no copied logos), responsive strip
- [ ] Map: ~235 px keyless OpenStreetMap embed with a light grayscale filter
      and an accessible name
- [ ] Footer: near-black `#12151a` patterned band (`padding: 135px 0 74px`),
      three columns (WEDDING INFO · ABOUT US · LOCATION) with 18 px uppercase
      white Roboto headings and 14 px capitalize `#cfcfcf` links, `1px solid
      #26282c` hairline, centred 16 px `#cfcfcf` copyright with a red heart and
      a **Component Dock** link + current year
- [ ] Back-to-top: red circle pinned bottom-right, smooth scroll (instant under
      reduced motion), accessible name + focus ring
- [ ] Tokens: brand `#ff2828`, hover `#da1b1b`, band `#ff3535`, footer band
      `#12151a`, footer link `#cfcfcf`, ink `#212121` / `#2e3c40` / `#636363`,
      band `#f9f9f9`, divider `#f4f4f4`, input `#d9d9d9`/`#a3a3a3`, scrim
      `rgba(0,0,0,0.1)` in `@theme`; Playfair Display + Roboto + Barlow loaded
      from Google Fonts **with `&display=swap`** (the reference's own delivery is
      the stylesheet line-1 legacy `@import` with `display=swap`); radii 30 px / 5 px
- [ ] Placeholder images via seeded picsum
      (`https://picsum.photos/seed/matrimony-<n>/<w>/<h>`: hero 1920×1080,
      story photo 900×1100, gallery 1200×1400 …); flourish/laurel/corner marks
      and the plus glyph are inline SVG; no ColorLib asset or logo copied
- [ ] No `colorlib` / `wed` / "Wed" provenance string anywhere in `apps/`
      (comments included); footer links Component Dock
- [ ] No third-party tag or script: no `gtag`/`dataLayer`/`UA-` id, no
      `maps.googleapis.com`; head carries an own favicon (+ manifest) instead of
      the source's `site.webmanifest` / `assets/img/favicon.ico`
- [ ] TEMPLATES.md `Wed` item marked `[x]` with the live
      `https://matrimony.free.componentdock.com` URL + homepage
