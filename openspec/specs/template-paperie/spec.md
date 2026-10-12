# Template: Paperie (Wedding)

## Purpose

Paperie is a single-page wedding-invitation website template in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Invits"** website template design (source:
https://colorlib.com/wp/template/invits/ — TEMPLATES.md line 3101, category
**Wedding**), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

- **Source template:** ColorLib "Invits" — source slug `invits`
- **Preview URL:** `https://preview.colorlib.com/theme/invits/`
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **App folder:** `apps/paperie` — package `@free-react-templates/paperie`
- **Naming:** never reuse the source name "Invits"; the brand is renamed
  **Paperie** (a stationer's house — the wedding-invitation stationery the
  source is themed around; keeps the Wedding family's naming run:
  lensly · vows · nuptial · knot · wedlock · nuptials · betrothal · trousseau ·
  **paperie**).
- Homepage / CNAME: `https://paperie.free.componentdock.com`

- **Source inner pages (live reference, curl-probed 2026-10-12):** the source's
  file set is **nine-page** even though the landing page is the one-page
  invitation design — **eight** further pages are live at
  `https://preview.colorlib.com/theme/invits/<page>`, all **HTTP 200**
  (`curl -sS` basis): `our_story.html` (23,429 B — "Our Story", "The Best Gift",
  "OUR MEMORIES", "OUR LOVELY PARTNERS"), `location.html` (17,832 B — "Our
  Location"), `gallery.html` (18,750 B — "Our Gallery"), `booking.html`
  (16,180 B — the "Are you attending?" booking/RSVP form), `blog.html`
  (31,101 B), `single-blog.html` (34,767 B), `elements.html` (38,698 B) and
  `contact.html` (19,142 B). Paperie stays a one-pager; those pages are read for
  structure and copy kind only.

## Design reference (replication findings)

- **Original:** ColorLib "Invits" — a romantic wedding-invitation design; the
  landing page is a one-page invitation, while the source's own file set is
  nine-page (eight further live inner pages — inventoried at the end of this
  section). Source page `https://colorlib.com/wp/template/invits/` (HTTP 200). Live preview
  `https://preview.colorlib.com/theme/invits/` returns **HTTP 200** (32,391 B
  HTML, `<title>Wedding HTML-5 Template</title>`). The official archive
  `https://preview.colorlib.com/downloads/free/invits.zip` returns **HTTP 404**
  (this slug has no archive twin), so the **live preview is the sole DOM/CSS
  reference**. Stylesheet fetched for tokens:
  `https://preview.colorlib.com/theme/invits/assets/css/style.css`
  (HTTP 200, **59,750 B**, 708 rule blocks, 112 `@media`, sha256
  `8f8973ab0b14d7203d0821603845a1fcd3296f63c88d17d462210cedcacdc1c9`); behaviour
  reference `assets/js/main.js` (HTTP 200, **7,652 B**, sha256
  `aaae1b72b46dd516654176286f32f68e5577627155ccd6388ae44d145b3b8da3`).
- **Screenshot:** TEMPLATES.md `invits-free-template.jpg` (HTTP 200, served
  **AVIF** despite the `.jpg` name, 181,443 B, 1200×946 → converted to PNG and
  inspected). Screenshot + live render agree: a **cream/white page** (body
  `#fff`) with a **magenta-purple brand `#800098`**, an orange-brown heading ink
  `#362d2b`, **Playfair Display** headings over **Poppins** body text, and
  **watercolour flower / leaf sprigs** as the recurring ornament motif.
- **Visual design (live render, verified 1440 / 1200 / 768 / 375 px):**
  - **Header:** a slim white row (103 px) — wordmark logo image left
    (113 × 33, a purple `#800098` set type with a **bright red full stop
    `#ff0b0b`**), nav right with 6 capitalize-case links in nav ink `#002e5b`
    at `padding:39px 19px`. On scroll the row becomes a **fixed white sticky bar
    (77 px)** with `box-shadow:0 10px 15px rgba(25,25,25,.1)`, nav padding
    collapses to `26px 20px`, and it drops in with a 0.5 s `fadeInDown`.
  - **Hero:** a full-bleed couple photo (800 px tall at 1200–1600 px viewports;
    940 px is the sheet's base value) under a light `rgba(0,0,0,.1)` scrim.
    Over it sits the signature element: a **540 px magenta-purple circle** —
    `rgba(129,29,146,.85)` with a **white dashed ring** inset ~19 px — that
    **rotates 30 s linear infinite** (the source rotates a `hero_circle.png`
    sprite). Inside, centred: a white uppercase 23 px date line flanked by two
    white 57 × 2 px dashes, the couple names in **Playfair Display 65 px /
    700**, then a white uppercase 23 px "we are getting married" line. Two slides
    cross-**fade** (slick, `autoplay:false`, `arrows:false`, `dots:false`). The
    three copy blocks of each slide **enter with a staggered `fadeInUp`** — the
    source's `main.js` `doAnimations()` reads every `[data-animation]` /
    `data-delay` inside the incoming slide on slick's `init`/`beforeChange` and
    applies `animated <name>`, so the date line (`.3s`), the names (`.5s`) and
    the tagline (`.9s`) rise 100 % from below while fading in over 1 s
    (`animate.min.css`: `.animated{animation-duration:1s;animation-fill-mode:both}`,
    `@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)} to{opacity:1;transform:translateZ(0)}}`).
  - **Our Story:** a 200 px/100 px band, two columns — a portrait photo
    (530 × 625) with a **watercolour sprig (215 × 302) at its bottom-left**, and
    the text column with a small sprig image (106 × 61) above the **Playfair
    40 px / 700 uppercase** heading. Paragraph ink measures `#978e98`, 16 px over
    a 30 px line-height. Two **large pale flower line-art shapes (~359 × 361)**
    sit flush at the band's left and right edges (xl only).
  - **Schedule (services):** band on **`#fefcfa`**, 170 px/110 px padding, three
    centred columns. Each column: Playfair 35 px title + a Playfair 20 px date
    (54 px below), a **circular photo 237 px** wearing a **10 px
    `rgba(255,255,255,.8)` ring** with a flower sprig (173 × 244) tucked behind
    its right edge, a letter-spaced **10 px** time line in blush `#daad9e`
    (16 px), then the venue address in near-black `#090908`. Columns are split by
    a **2 px × 75 px gold `#e09513`** rule (absent after the last column).
  - **Our Memories:** a 200 px/200 px band — a 120 × 69 sprig above the Playfair
    40 px / 700 uppercase title (66 px below), then a **six-tile gallery in a
    3 × 2 no-gutter grid** (tiles 390 × 482 at 1440 px, images edge to edge).
    Hovering a tile grows its padding by 10 px and reveals a
    `rgba(0,0,0,.6)` wash plus a **40 px white-bordered circle with a plus
    glyph**; clicking opens the full image in a lightbox. Pale flower line-art
    (259 × 532 / 283 × 535) touches both band edges.
  - **The Best Gift:** a full-bleed photo band washed by a white
    bottom-up gradient, 160 px/170 px padding, content offset one column from the
    left: Playfair **70 px / 700** capitalize title, a 30 px line beneath, then a
    **magenta `#800098` pill-ish button (150 × 60, radius 5 px)** whose hover
    sweeps a darker `#620672` fill up from the baseline (`::before` scaleY 0 → 1,
    cubic-bezier(.5,1.6,.4,.7)).
  - **RSVP form:** a 200 px/200 px band holding a **centred white card**
    (570 px wide, `padding:100px 82px 70px`, `box-shadow:0 0 86px 0
    rgba(0,0,0,.06)`). A small sprig sits above the Playfair title, **four
    ~100 × 87 sprigs** are pinned inside the card's corners, and two **big
    watercolour leaf branches (499 × 493 and 432 × 555)** hang outside the card
    at `top:-62px; left:-143px` and `bottom:2px; right:-133px` behind it
    (z-index -1). Fields: Name, Email, a guest-count select skin (60 px, 1 px
    `#d9d9d9`, radius 5 px, capitalised `#a3a3a3` label, chevron 41 px from the
    right edge) and a 140 px message textarea (label letter-spaced 2 px), then a
    centred magenta submit button.
  - **Map:** a full-width **500 px** map band (the source embeds Google Maps with
    an API key — the recreation must not reuse that key; see Adaptations).
  - **Our Lovely Partners:** 200 px/200 px, sprig + Playfair 40 px / 700
    uppercase title, then an **auto-scrolling row of five partner marks**
    (170 × 171 each; slick autoplay, 5 up on desktop, 3/2 at the breakpoints).
  - **Footer:** a **`#f9f7f4`** band, `padding-top:200px; padding-bottom:74px`,
    four columns — [wordmark + blurb + e-mail / phone / street address] ·
    **WEDDING PLANNER FAQS** (6 links) · **ABOUT US** (6 links) · **Instagram**
    (6 images in a 3 × 2 grid, 90 px cells). Column headings are Poppins 18 px /
    500 uppercase in `#362d2b` (38 px below), links are 16 px / 300 in
    `#868c98` and slide 5 px right in brand purple on hover. A 1 px `#dddddd`
    rule closes the band over the centred 16 px copyright line (`#978e98`,
    32 px line-height) with a purple heart glyph.
  - **Scroll-to-top:** a 50 px magenta circle (`#800098`, white 20 px arrow)
    that fades in 31 px from the right / 18 px from the bottom after 300 px of
    scroll.

## Design tokens

| Token | Value | Where |
| --- | --- | --- |
| Brand magenta-purple | **`#800098`** | buttons (`.btn`/`.btn2`), nav hover, footer link hover, heart glyph, scroll-up, dropdown top rule, preloader ring |
| Brand dark (button hover sweep) | **`#620672`** | `.btn::before` / `.btn2::before` |
| Hero circle purple | **`rgba(129,29,146,.85)`** (`#811d92` @ 85 %, sampled from the source sprite) | 540 px hero circle fill |
| Heading ink | **`#362d2b`** | `h1…h6` (Playfair Display 500 default) + gift/service/story headings |
| Body / default ink | **`#222`** (body `#212529`) | body copy, generic text |
| Nav ink | **`#002e5b`** | desktop nav links |
| Story paragraph ink | **`#978e98`** | `.story1` / `.story2` (16 px / 30 px line-height) |
| Muted grey | `#a3a3a3` | form field labels / placeholders (`#d9d9d9` borders) |
| Footer link grey | `#868c98` | footer `ul li a` (300 weight) |
| Blush accent | **`#daad9e`** | schedule time line (16 px, `letter-spacing:10px`) |
| Gold accent | **`#e09513`** | 2 × 75 px column divider in the schedule band |
| Wordmark dot | **`#ff0b0b`** | the full stop of the logo mark |
| Surfaces | `#fff` page · **`#fefcfa`** schedule band · **`#f9f7f4`** footer | section backgrounds |
| Pale lavender panels | `#f9f9ff`, `#f0e9ff`, `#fbf9ff` | sheet surfaces (not on this page's bands) |
| Radii | **5 px** buttons / inputs / selects · **50 %** circles · **4 px** mobile-menu button · **`0 37px 0px 24px`** desktop dropdown (keep the quirk) | shape language |
| Shadows | **`0 0 86px 0 rgba(0,0,0,.06)`** RSVP card · **`0 0 10px 3px rgba(0,0,0,.05)`** dropdown · **`0 10px 15px rgba(25,25,25,.1)`** sticky header | elevation |
| Fonts | **"Playfair Display", serif** (headings, 500 default / 700 emphatic) · **"Poppins", sans-serif** (body, UI, nav, 300–500) | both verified on Google Fonts (HTTP 200) |
| Section rhythm | story 200/100 · schedule 170/110 · memories 200/200 · gift 160/170 · form 200/200 · partners 200/200 · footer 200/74 (px, desktop) | paddings |

**Breakpoint table (measured on the live preview).**

| Section | ≥1200 px | 992–1199 | 768–991 | ≤767 |
| --- | --- | --- | --- | --- |
| Hero height | 800 px (sheet base 940) | 750 px | 560 px | 400 px |
| Hero circle | 540 px | 450 px | 350 px | 220 px |
| Hero h1 / date / line | 65 / 23 / 23 px | 65 / 23 / 23 px | 34 / 23 / 15 px | 27 / 18 / 13 px |
| Story band | 200/100 | 200/100 | 100/80 | 50/30 |
| Schedule band | 170/110 | 170/110 | 140/85 | 70/0 |
| Memories band | 200/200 | 200/200 | 100/100 | 70/70 |
| Gift band | 160/170 | 160/170 | 100/100 | 100/100 |
| Partners band | 200/200 | 200/200 | 100/100 | 70/70 |
| RSVP card padding | 100/82/70 | 100/82/70 | 100/82/70 | 100/34–36/110 |
| Footer | 200/74 | 200/74 | 70/74 | 70/0 |
| Nav | desktop `≥992 px`, slicknav bar below | ← | ← | ← |

## Requirements

### Requirement: Header and navigation

The system SHALL render a slim white header with the Paperie wordmark and a
capitalise-case nav row, which becomes a fixed white sticky bar on scroll.

#### Scenario: Header content

- **GIVEN** the Paperie page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the "Paperie" wordmark in brand purple
  `#800098` with a bright red `#ff0b0b` full stop on the left
- **AND** SHALL show the nav links Our Story, Location, Gallery, Guest Book,
  Pages (dropdown: Blog, Blog Details, Element) and Contact
- **AND** nav links SHALL be `#002e5b`, capitalize-case and turn brand purple
  `#800098` on hover and focus

#### Scenario: Sticky header on scroll

- **GIVEN** the page is rendered on a desktop viewport
- **WHEN** the user scrolls past the header
- **THEN** the header SHALL become a fixed white bar with
  `box-shadow: 0 10px 15px rgba(25,25,25,.1)` and reduced link padding
- **AND** it SHALL return to its in-flow state at the top of the page

#### Scenario: Mobile menu

- **GIVEN** the page is rendered below 992 px
- **WHEN** the user opens the menu
- **THEN** a full-width dark-grey menu bar SHALL show a "Menu" button with a
  hamburger glyph and the six nav links SHALL be listed in a panel below it
- **AND** the toggle SHALL expose its state via `aria-expanded`

### Requirement: Hero slider

The system SHALL render a full-bleed photo hero with a rotating purple circle
carrying the wedding date, the couple names and a tagline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a full-bleed photo under a `rgba(0,0,0,.1)` scrim
- **AND** SHALL show a circular purple panel (`rgba(129,29,146,.85)`) with a
  white dashed ring inset from its edge
- **AND** inside the circle it SHALL show the date line in white uppercase with a
  57 × 2 px white dash on each side, the couple names in Playfair Display 65 px /
  700 white, and a white uppercase tagline beneath
- **AND** the three copy blocks SHALL enter with a staggered `fadeInUp`
  (`opacity 0 → 1`, `translateY(100%) → 0`, 1 s) at the source's delays — date
  `0.3 s`, names `0.5 s`, tagline `0.9 s` — and that entrance SHALL be
  suppressed under `prefers-reduced-motion: reduce`
- **AND** the circle SHALL rotate continuously (30 s linear) unless the user
  requests reduced motion

#### Scenario: Slide transition

- **GIVEN** the hero slider is rendered
- **WHEN** the slider advances
- **THEN** the two slides SHALL cross-fade with no visible arrows or dots
- **AND** the slider SHALL be pausable and SHALL NOT auto-advance when
  `prefers-reduced-motion: reduce` is set

### Requirement: Our Story section

The system SHALL render a two-column story band — a photo with a flower sprig
beside a heading, two paragraphs and pale ornaments at the band edges.

#### Scenario: Story content

- **GIVEN** the page is rendered
- **WHEN** the story band is displayed
- **THEN** it SHALL show a portrait photo with a watercolour sprig overlapping
  its bottom-left corner
- **AND** SHALL show a small sprig ornament above the Playfair Display 40 px /
  700 uppercase heading "Our Story"
- **AND** SHALL show two paragraphs of muted `#978e98` copy at 16 px over a
  30 px line-height
- **AND** SHALL show a pale flower line-art shape at each edge of the band

### Requirement: Schedule section

The system SHALL render three schedule columns on a `#fefcfa` band, each with a
ringed circular photo, a title, a date, a time and an address.

#### Scenario: Schedule content

- **GIVEN** the page is rendered
- **WHEN** the schedule band is displayed
- **THEN** it SHALL show three columns — Rehearsal Dinner, The Ceremony,
  Afterparty — each with a circular photo wearing a thick translucent white ring
  and a flower sprig tucked behind it
- **AND** each column SHALL show a Playfair Display 35 px title, a Playfair
  Display 20 px date, an uppercase time line in blush `#daad9e` with
  `letter-spacing: 10px`, and a two-line venue address
- **AND** a 2 px gold `#e09513` vertical rule SHALL separate adjacent columns
  (none after the last column)

### Requirement: Memories gallery

The system SHALL render a six-tile no-gutter gallery whose tiles reveal an
overlay and a plus affordance on hover.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the memories band is displayed
- **THEN** it SHALL show a small sprig ornament above the Playfair Display
  40 px / 700 uppercase title
- **AND** SHALL show six images in a three-column, two-row grid with no gutters
- **AND** hovering a tile SHALL reveal a `rgba(0,0,0,.6)` overlay with a 40 px
  white-bordered circle holding a plus glyph, and SHALL inset the tile by 10 px
- **AND** each tile SHALL be operable by keyboard and SHALL open the image in an
  accessible lightbox

### Requirement: Gift banner

The system SHALL render a full-bleed photo banner washed with a white gradient,
holding a large title, a line of copy and a magenta call to action.

#### Scenario: Gift content

- **GIVEN** the page is rendered
- **WHEN** the gift band is displayed
- **THEN** it SHALL show a photo background with a white gradient wash rising
  from the bottom edge
- **AND** SHALL show the Playfair Display 70 px / 700 capitalised title, a 30 px
  line of copy beneath, and a magenta `#800098` R.S.V.P call to action (radius
  5 px) offset one column from the left edge
- **AND** the call to action SHALL sweep a darker `#620672` fill on hover and
  focus

### Requirement: RSVP form

The system SHALL render a centred white RSVP card with four fields, a guest
select and a submit button, decorated with sprigs inside and branches outside.

#### Scenario: Form content

- **GIVEN** the page is rendered
- **WHEN** the form band is displayed
- **THEN** it SHALL show a white card with `box-shadow: 0 0 86px 0
  rgba(0,0,0,.06)`, a sprig above the uppercase Playfair Display title, and four
  small sprigs pinned inside its corners
- **AND** SHALL show two large watercolour branch ornaments outside the card at
  its upper-left and lower-right (decorative, `aria-hidden`)
- **AND** SHALL show a Name field, an Email field, a guest-count select with four
  options, and a message textarea (140 px, letter-spaced label)
- **AND** every field SHALL be 60 px tall (140 px for the textarea) with a 1 px
  `#d9d9d9` border, a 5 px radius and a capitalised `#a3a3a3` label

#### Scenario: Form submission

- **GIVEN** the form is displayed
- **WHEN** the user submits valid details
- **THEN** the form SHALL validate required fields and SHALL NOT post to any
  external service
- **AND** it SHALL confirm the RSVP locally and SHALL be operable by keyboard
  alone

### Requirement: Location map

The system SHALL render a full-width 500 px map band beneath the RSVP card.

#### Scenario: Map band

- **GIVEN** the page is rendered
- **WHEN** the map band is displayed
- **THEN** it SHALL embed a keyboard-reachable, lazily loaded map iframe of
  height 500 px spanning the full width
- **AND** it SHALL NOT call any map provider that requires an API key

### Requirement: Partners row

The system SHALL render a heading over a slowly auto-scrolling row of five
partner marks.

#### Scenario: Partners content

- **GIVEN** the page is rendered
- **WHEN** the partners band is displayed
- **THEN** it SHALL show a sprig ornament above the Playfair Display 40 px / 700
  uppercase title
- **AND** SHALL show five partner marks ~170 px square, five up on desktop and
  fewer at the tablet and mobile breakpoints
- **AND** the row SHALL pause on hover and SHALL NOT animate when
  `prefers-reduced-motion: reduce` is set

### Requirement: Footer

The system SHALL render a `#f9f7f4` footer with four columns, an Instagram grid
and a bordered copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the wordmark with a short blurb and an e-mail, a phone
  number and a street address
- **AND** SHALL show the columns WEDDING PLANNER FAQS, ABOUT US and Instagram
- **AND** column headings SHALL be Poppins 18 px / 500 uppercase in `#362d2b`
  and links 16 px / 300 in `#868c98`, shifting right in brand purple on hover
- **AND** the Instagram column SHALL show six 90 px images in a 3 × 2 grid
- **AND** a 1 px `#dddddd` rule SHALL close the band above a centred copyright
  line that links `https://www.componentdock.com/` ("Component Dock") and shows
  the computed current year

### Requirement: Page composition

The system SHALL compose every section in a single page with banner, main and
contentinfo landmarks, plus a scroll-to-top control.

#### Scenario: Full page render

- **GIVEN** the Paperie app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, the hero,
  story, schedule, memories, gift, RSVP form, map and partners sections in the
  main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Paperie — Wedding Template"
- **AND** after 300 px of scroll a magenta `#800098` circular scroll-to-top
  control SHALL fade in at the lower right

## Implementation notes (built 2026-10-12)

- **Nav copy:** the design's own labels are reproduced exactly as this spec's header
  requirement lists them (`Our Story`, `Location`, `Gallery`, `Guest Book`, `Pages` →
  `Blog` / `Blog Details` / `Element`, `Contact`) because they are the row the design
  sets; the footer's three column headings (`WEDDING PLANNER FAQS`, `ABOUT US`,
  `Instagram`) are likewise the spec's SHALLs. `docs/templates/paperie/tasks.md`
  asked for those strings to be avoided — **this spec supersedes that bullet**; the
  provenance guard therefore covers only the design's *distinctive* strings (brand,
  slug, page title, couple, dates, running order, venue, studio details).
- **Container width:** the recreation uses the repo's standard 1140px container
  everywhere. The source's slider band uses a 1200px container of its own, so the
  hero disc sits at `x = 158` at 1440 against the reference's `128` (30px); every
  other band's measure matches (`story` photo 530 wide at `x = 165` vs `168`).
- **Header height:** the design's bar measures **103px**; the recreation's row carries
  no vertical padding of its own and lands at **102px** (link padding `39px 19px`, and
  `26px 20px` once pinned), against the source's `15px 0` wrapper + 39px links.
- **Hero copy:** the names are 13 characters so the line stays ONE line at 65px inside
  the 450px disc at 992–1199 (measured `headingLines === 1` at 1440/1200/1199/992/991/
  576/375); the reference's own 14-character line measures 405px.
- **Pause control:** the source ships slick with `autoplay:false` and no controls at
  all; this spec requires the slider to be *pausable*, so the recreation adds one
  labelled disc in the hero's corner (no arrows, no dots — neither is visible).
- **Dividers:** the gold rule is rendered only between neighbouring columns and is
  `hidden` below `lg`, matching the sheet's `nth-child(3)` + media-query pair.
- **Photography:** every seed was reviewed on a contact sheet before shipping; the
  two frames that rendered near-white (`paperie-3`, `paperie-17`) and the off-tone
  ones were re-seeded. Final seeds — hero `paperie-7`, `paperie-14`; story
  `paperie-13`; schedule `paperie-22`, `paperie-18`, `paperie-20`; gallery
  `paperie-9`, `paperie-12`, `paperie-24`, `paperie-27`, `paperie-8`, `paperie-19`;
  gift `paperie-15`; foot `paperie-2`, `paperie-5`, `paperie-26`, `paperie-23`,
  `paperie-28`, `paperie-10`.
- **Accessible substitutes:** the Pages panel is a disclosure (`aria-expanded` +
  `aria-hidden`, contents mounted while open in the folded presentation); the
  nice-select is a real `<select>` on the same 60px skin; the magnific-popup lightbox
  is a `role="dialog"` panel closed by its own control or Escape; the keyed Google map
  is a key-less, sandboxed OpenStreetMap embed.

## Verification checklist

- [x] `npm run typecheck` passes for `apps/paperie`
- [x] `npm run lint` passes for `apps/paperie`
- [x] `scripts/verify-app.sh paperie` passes (typecheck + lint + 100 % coverage
      tests + build)
- [x] Full `npm run gate` passes in CI (knip + fallow included)
- [x] `npm run spec:validate` passes
- [x] Header: purple `#800098` wordmark with a red `#ff0b0b` full stop, six nav
      links in `#002e5b` (Pages dropdown: Blog, Blog Details, Element), hover →
      `#800098`; fixed white sticky bar with shadow + reduced padding on scroll
- [x] Mobile menu below 992 px: dark-grey bar, "Menu" button with hamburger, six
      rows, `aria-expanded`
- [x] Hero: full-bleed photo + `rgba(0,0,0,.1)` scrim, 540 px purple circle
      `rgba(129,29,146,.85)` with a white dashed ring rotating 30 s, fill-height
      800/750/560/400 px at the breakpoints, two fade slides, the copy's
      staggered `fadeInUp` entrance (.3/.5/.9 s), reduced-motion safe
- [x] Story: photo + bottom-left sprig, sprig above the Playfair 40 px / 700
      uppercase heading, two `#978e98` paragraphs, pale edge ornaments
- [x] Schedule: `#fefcfa` band, three columns with 237 px ringed circular photos
      (`10px solid rgba(255,255,255,.8)`), 35 px titles, 20 px dates, blush
      `#daad9e` letter-spaced 10 px times, 2 px `#e09513` dividers
- [x] Memories: sprig + uppercase title, 3 × 2 no-gutter grid, hover
      `rgba(0,0,0,.6)` overlay + 40 px plus circle + 10 px inset, keyboard
      operable lightbox
- [x] Gift: photo band with a white bottom-up gradient, 70 px / 700 title, 30 px
      copy, magenta R.S.V.P button (radius 5 px) with the `#620672` sweep hover
- [x] RSVP: 570 px white card, `0 0 86px 0 rgba(0,0,0,.06)`, sprig above the
      title, four corner sprigs, two outer branches, Name / Email / guest select
      / 140 px textarea (60 px fields, 1 px `#d9d9d9`, radius 5 px), local
      confirmation only
- [x] Map: full-width 500 px lazily loaded iframe, no API key
- [x] Partners: sprig + uppercase title, five ~170 px marks, auto-scroll that
      pauses on hover and respects reduced motion
- [x] Footer: `#f9f7f4`, four columns (blurb + e-mail/phone/address, WEDDING
      PLANNER FAQS, ABOUT US, 6-image Instagram grid), `#868c98` links with the
      5 px purple hover shift, `#dddddd` rule over the centred copyright with a
      Component Dock link and the current year
- [x] Scroll-to-top: 50 px `#800098` circle appears after 300 px of scroll
- [x] Tokens: brand `#800098` in `@theme`; Playfair Display + Poppins loaded from
      Google Fonts; radii 5 px / 50 % / the `0 37px 0px 24px` dropdown quirk
- [x] Placeholder images via seeded picsum (`seed/paperie-<n>/<w>/<h>`); sprigs
      and branch ornaments are inline SVG; no ColorLib asset copied
- [x] No `colorlib` / `invits` / "Invits" string anywhere in the app (comments
      included); footer links Component Dock
- [x] TEMPLATES.md `Invits` item marked `[x]` with the live
      `https://paperie.free.componentdock.com` URL + homepage
