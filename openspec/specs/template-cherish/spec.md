# Template: Cherish (Wedding)

## Purpose

Cherish is a warm, gold-on-white **wedding day invitation** page: a centred monogram header over a
full-bleed photograph, a save-the-date story block with a circular portrait between two partner
cards, a four-part countdown, a fluid eight-frame album, a horizontal run of day events threaded on
a hairline rail, a floating RSVP card that overlaps the section above and below it, three white
venue cards, and a footer of circle socials.

It is an original React recreation of the ColorLib free template **"Dreamwed"** (source slug
`dreamwed`), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript. The recreation matches the source's section order, layout and design tokens 1:1, but
copies no asset (no images, no `style.css`, no jQuery plugin CSS) and never reuses the source's name,
its brand, its headlines or its copy.

- **Source:** https://colorlib.com/wp/template/dreamwed/ — ColorLib *Wedding* family, the template
  whose live preview title is `Dream Template`. It is one of the 14 items in the `## Wedding (14)`
  section of `TEMPLATES.md` (line 3097).
- **Preview:** `https://preview.colorlib.com/theme/dreamwed/` — **HTTP 200**, 34,516 B, fetched and
  parsed 2026-10-12. Section order read from the live DOM: `header` → `section.hero` →
  `section.story` → `section.countdown` → `section.gallery` → `section.event` →
  `section.rsvp` → `section.wedding-time` → `footer`, plus a fixed full-screen `div.search-model`.
  Stylesheet is `css/style.css` (30,285 B — the preview's own `css/main.css` 404s, unlike most
  ColorLib themes). Scripts are jQuery 3.3.1 + Bootstrap 4 + **nice-select, mixitup, countdown,
  slicknav and Owl Carousel**, i.e. the design leans on plugin CSS for its dropdown, mobile menu,
  countdown and slider.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dreamwed-free-template.jpg
  (served as **AVIF** despite the `.jpg` name, 69,828 B, **1200 × 946**; converted to PNG and
  inspected visually 2026-10-12). It shows the browser-chrome mock of the top of the page: the
  centred round monogram + wordmark, the uppercase tracked nav row with a search glyph at the right,
  the full-bleed couple photograph with the date, the names in large light type, a gold flourish, a
  short message and a **gold RSVP button**, then the "save the date" eyebrow, the centred heading, a
  gold squiggle and the intro line — the section order and the gold `#d48f4c` accent confirmed.
- **New name:** `cherish` (apps/cherish, `@free-react-templates/cherish`) — a single lowercase word,
  kebab-safe, chosen because it names the feeling the design sells (a day worth keeping) without
  touching the source's own brand. Verified 2026-10-12: `ls apps/` and
  `ls openspec/specs/` hold no `cherish`, and no `[x]` line in `TEMPLATES.md` uses it.
  Alternates considered and also free: *betroth*, *forever*, *honeymoon*.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Typography:** `body { font-family: "Arima Madurai", cursive }` for display type, with
  **Work Sans** as the secondary sans for eyebrows, body copy, form fields and the event times.
  Scale: `h1` 70px, `h2` 36px, `h3` 30px, `h4` 24px; `p` 17px Work Sans / `#747e8c` / line-height
  27px / margin-bottom 15px.
- **Colour tokens** (extracted from `css/style.css`):
  - **gold `#d48f4c`** — buttons, the nav underline, the countdown colons, the search accent, the
    footer link. 17 declarations; the design's single brand colour.
  - **ink `#353535`** — headings, hover/current nav, the dropdown panel, countdown digits, footer
    socials' hover fill, the search close switch.
  - **muted `#747e8c`** — all body copy, eyebrows, event times, venue list text, footer socials.
  - **faint `#b5b5b5`** — resting nav links.
  - **hairline `#e1e1e1`** — input borders, the event rail's `rgba(0,0,0,0.1)` line, social circles.
  - **wash `#eaf1f4`** — the 16px dot that sits under each event icon.
  - **white** — the page surface, the RSVP card and the venue cards.
  - **heart `#cc1111`** — the one red accent, on the footer heart glyph.
- **Shape language:** cards are `border-radius: 10px` with a very soft shadow
  (`0 5px 30px rgba(53,53,53,0.06)` on the RSVP card, `0 5px 35px` on the venue cards); buttons and
  the search input are square (`border-radius: 0`); footer socials are 40px circles with a 1px
  `#e1e1e1` ring that fills gold on hover.
- **Layout notes:** the hero is a `set-bg` band inset `75px` from each side (`15px` on small
  screens) with `230px / 215px` of vertical padding; the album is a fluid four-column by two-row
  grid whose title band carries the section's own background photo and is pulled up over it with
  `margin-top: -145px`; the day events run along a single 1px rail drawn at `top: 116px` with the
  icon dots sitting on it; the RSVP card floats out of its section on `-70px` top and bottom margins
  so it overlaps both neighbours; the venue section keeps `170px` of air above it to make room.
- **Interactions the design delegates to plugins** (recreated in React, recorded as deltas):
  the **Pages dropdown** (Owl/slick CSS hover reveal at `top: 22px`, 150px wide, `#353535` panel),
  the **mobile menu** (slicknav slide-down panel, since `header__menu` is `display: none` below
  992px), the **countdown** (`jquery.countdown` against a fixed target — the source hard-codes a
  date in 2019 and its counters have long since run out), the **event slider** (Owl Carousel with
  round 8px dots, `#e1e1e1` at rest and `#353535` active) and the **full-screen search model**
  (fixed white sheet, 50px `#333` circle close switch rotated 45°, 500px underlined input at 40px).
- **Fidelity deltas (documented, deliberate):**
  1. **All imagery is a deterministic placeholder** — `https://picsum.photos/seed/cherish-<n>/<w>/<h>`
     — instead of the source's photos.
  2. **Fonts load from Google Fonts** via `<link>` (Arima Madurai + Work Sans) instead of being
     embedded.
  3. A **`rgba(53,53,53,0.35)` scrim** sits over the hero photograph so white display type stays
     legible on a placeholder image; the source relies on its own dark photograph.
  4. The **countdown runs to a future date** and, once that date passes, prints a single "the day has
     arrived" line instead of four zeros.
  5. The **mobile menu is a real disclosure** (button + `aria-expanded` + `aria-controls`) rather than
     slicknav's cloned markup, and the dropdown is keyboard-reachable.
  6. The event rail is a **translate-based track with prev/next controls** rather than Owl's
     auto-play carousel, so nothing moves without the reader asking.
  7. The **preloader** (a jQuery `fadeOut` on window load) is dropped — there is no blocking load in
     a Vite SPA.
  8. The footer's attribution line is replaced by the **Component Dock** credit required of every
     template in this monorepo.

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#d48f4c` | live sheet paints it ×17 — `background` on `.primary-btn`; style.css (30,285 B, sha256 659ebb1334e8) · <https://preview.colorlib.com/theme/dreamwed/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Feature: Page frame, header and the search sheet

#### Scenario: The centred monogram header

- **Given** any viewport
- **When** the page renders
- **Then** the header carries a centred monogram wordmark (`header__logo` with `margin-bottom: 50px`,
  `30px` below 992px) above a **uppercase, `15px`, weight-`700`, tracked nav row** in `#b5b5b5` whose
  hover/current link is `#353535` and which paints a **`2px` `#d48f4c` underline** that scales in from
  `scaleX(0)`
- **And** the last top-level item is a **"More" disclosure** holding the design's dropdown panel
  (`150px` wide, `#353535`, `2px 0` padding, `14px` weight-`400` white links at `8px 20px`)
- **And** a **search control** sits at the right of the row
- **And** below `992px` the nav row is replaced by a **burger disclosure** with `aria-expanded` and
  `aria-controls`, whose panel carries every nav label

#### Scenario: The full-screen search sheet

- **Then** the search control opens a **fixed, full-viewport, white sheet** (`z-index: 99999`) whose
  centre holds a **round `50px` `#333` close switch rotated 45°** (so its `+` reads as an `×`) and a
  single input with a `2px` `#ddd` underline
- **And** the sheet closes on the switch, on `Escape`, and on submit, and it never leaves a value
  behind

### Feature: Hero, story and countdown

#### Scenario: The full-bleed hero

- **Then** the hero is a photographic band with `230px` of lead space and `215px` under it, inset
  `75px` per side (`15px` below 768px), with a scrim over the photo
- **And** it carries a **date eyebrow** (white, weight-`700`, uppercase, `letter-spacing: 2px`), the
  **names at 70px** (50px below 768px) in weight `500`, a **gold flourish divider**, a **20px** white
  message on a 30px line, and a **gold `#d48f4c` RSVP button** that lands on the RSVP block

#### Scenario: The story block and its portrait

- **Then** an eyebrow, a centred heading and an intro line sit above a three-column row: two centred
  partner cards (`padding-top: 140px`) whose social links are `15px` `#353535` at `26px` apart, and
  between them a **circular portrait** whose picture is clipped to a circle

#### Scenario: The four-part countdown

- **Then** four **150px** counters pitch on a `30px` gap with a **gold `:` between them**, each digit
  in **72px** `#353535` weight `700` over a `20px` uppercase `#747e8c` label
- **And** the digits tick once a second off the real clock
- **And** once the target date has passed, the counters are replaced by a single line saying the day
  has arrived

### Feature: Album, day events, RSVP and venues

#### Scenario: The fluid album band

- **Then** the album is a **four-column by two-row** grid of eight pictures with `20px` gutters, its
  title band carrying the section's own background photo and pulled up over it by `margin-top:
  -145px`, and the band bleeds to the viewport edges with no page gutter

#### Scenario: The day events rail

- **Then** six events sit on a single **1px `rgba(0,0,0,0.1)` rail drawn 116px down**, each a centred
  icon above a **`16px` `#eaf1f4` dot** that rests on the rail, a **24px Work Sans `#747e8c` time**,
  a `#353535` heading and a short line of copy
- **And** prev/next controls shift the track one card at a time and **wrap at both ends**, with one
  round **8px dot per event** painted `#353535` for the card in view and `#e1e1e1` for the rest

#### Scenario: The floating RSVP card

- **Then** the card is white, `border-radius: 10px`, `80px 50px 85px` inside, with the section's soft
  shadow, pulled `70px` out of its band at the top and the bottom
- **And** it holds a **name field, an email field, a guest-count select and an event select** (all
  `48px` tall on a `1px #e1e1e1` border, `15px` Work Sans, `25px` apart) above a **gold submit
  button**
- **And** submitting with a missing name or a missing/invalid email prints a per-field message and
  nothing is sent; a valid submit replaces the form with a confirmation naming the address given
- **And** the block beside the card carries white copy over the band's photograph

#### Scenario: The three venue cards

- **Then** three white `10px`-radius cards with the softer `0 5px 35px` shadow hold an icon, a
  `#353535` heading and two `17px` `#747e8c` lines — a clock line and a place line — at `50px 40px
  40px` insets, in a section keeping `170px` of air above it

### Feature: Footer and provenance

#### Scenario: The footer

- **Then** the footer carries the monogram, a copyright line naming the current year, **four 40px
  circle socials** with a `1px #e1e1e1` ring that fills gold on hover, and a link to
  **`https://www.componentdock.com/`** branded **"Component Dock"**

#### Scenario: No provenance in the app

- **Given** every file that ships in `apps/cherish`
- **Then** none of them contains the source's slug, its brand, its headlines or its copy — the
  mapping lives only in this spec, in `TEMPLATES.md` and in the PR

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/cherish/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/cherish/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page frame, header and the search sheet — Given** any viewport
- [ ] Hero, story and countdown — Then** the hero is a photographic band with `230px` of lead space and `215px` under it, inset
- [ ] Album, day events, RSVP and venues — Then** the album is a **four-column by two-row** grid of eight pictures with `20px` gutters, its
