# Template: Trousseau (Wedding)

## Purpose

Trousseau is a single-page wedding website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free **"Honey"**
website template design (source: https://colorlib.com/wp/template/honey/ —
TEMPLATES.md line 3099, category **Wedding**), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source template:** ColorLib "Honey" (`honey`)
- **Preview URL:** `https://preview.colorlib.com/theme/honey/`
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **App folder:** `apps/trousseau` — package `@free-react-templates/trousseau`
- **Naming:** never reuse the source name "Honey"; the brand is renamed
  **Trousseau** (the bridal trousseau — keeps the Wedding family's naming run:
  lensly · vows · nuptial · knot · wedlock · nuptials · betrothal ·
  **trousseau**).

- **Source inner pages (live reference, curl-probed 2026-10-12):** the source is
  multi-page in fact — **nine** further pages of the same theme are live at
  `https://preview.colorlib.com/theme/honey/<page>`, all **HTTP 200**
  (`curl -sS` basis): `our-story.html` (14,193 B — "Our Story", "Our Love
  Journey", "Special Moments Captured", "Gift Registry"), `bridesmaid.html`
  (13,577 B), `groomsmen.html` (13,583 B), `accomodation.html` (11,830 B — the
  source's own filename spelling), `gallery.html` (12,640 B), `blog.html`
  (32,039 B), `single-blog.html` (32,683 B), `elements.html` (35,517 B) and
  `contact.html` (12,237 B). They are the reference for the sections Trousseau
  must invent (story, journey, moments, bridal party, gallery); nothing from
  them is copied.

## Design reference (replication findings)

- **Original:** ColorLib "Honey" — a romantic wedding site whose own `<title>`
  reads **"Honey Wedding Multi"** and whose file set is multi-page (nine further
  live inner pages — inventoried at the end of this section). Source page
  `https://colorlib.com/wp/template/honey/`; preview
  `https://preview.colorlib.com/theme/honey/` returns **HTTP 200** (22,117 B
  HTML, `<title>Honey Wedding Multi</title>`). TEMPLATES.md screenshot
  `honey-free-template.jpg` (HTTP 200, served **AVIF** despite the `.jpg`
  name, 96,550 B, 1200×946) was converted to PNG and inspected visually.
- **Visual design (from the live preview + screenshot):** bright, airy wedding
  page on a **white canvas** with a single hot **pink accent `#ff2f92`** used
  for emphasis (hero couple names, active nav, buttons, links) and **white
  ornate flourish ornaments** framing the hero names and the story photos.
  Header is a single slim row: the wordmark left ("Honey wedding" style mark +
  logo icon), an uppercase 12px nav row (HOME · OUR STORY · ACCOMODATION ·
  GALLERY · PAGES ▾ · BLOG · CONTACT) plus a search icon at the right end. The
  **hero** is a full-bleed couple photo under a dark scrim with centred copy —
  a small white uppercase line over the couple names rendered in a large
  **display serif in pink `#ff2f92`**, each bracketed above and below by a
  white **flourish/scroll ornament image** (`shap-1.png` / `shap-2.png`). The
  **story** band is a three-column row: an ornate framed photo left, a centred
  `story_text` block ("Cordially Invited" in a dark display serif, a small
  grey date/names/location line, a **square pink "View Our Story" button"), and
  an ornate framed photo right. The **countdown** band is a background-photo
  strip with white type — a heading, a **translucent white panel**
  (`rgba(255,255,255,0.3)`, max-width 560px) holding a **four-cell timer**
  (days · hours · Minutes · seconds), and a closing line beneath. The
  **journey** band is a centred `main_title` over two rows of three circular
  photos with names/roles, separated by **four bordered text cards** (soft
  shadow `0px 10px 30px 0px rgba(153,153,153,0.1)`, 45px 90px padding) with a
  corner flourish image. **Moments** is a six-across photo grid (16.66% flex
  basis, 3px gutters) with a hover overlay + expand icon. The **reservation**
  band is a centred white card (max-width 555px, padding 75px 50px, soft
  shadow) holding a Name + Email + two selects + a pink "Confirm Now" button.
  **Arrangement** is a heading + intro over four white cards, each with a photo,
  a title, a blurb and a Date/Time/Address block. **Gift Registry** is a centred
  heading over an auto-scrolling row of five greyscale logos. The **footer** is
  a centred `#f9f9ff` band: logo, a menu row, a social row and a copyright
  line. **Everything is square** — no border-radius anywhere (buttons, inputs,
  selects, cards). Cards/panels use a soft diffuse shadow.
- **Section order (1:1):**
  1. **Header** (`header.header_area`): wordmark + logo left; a centred/right
     uppercase nav — Home, Our Story, Accomodation, Gallery, Pages (dropdown:
     Bridesmaid, Groomsmen, Elements), Blog, Contact — plus a search toggle.
     Active link pink `#ff2f92`. **The header is not sticky:** `header.header_area`
     is `position:absolute` over the hero and scrolls away with the page (the
     sheet carries a `.header_area.navbar_fixed .main_menu{position:fixed;
     box-shadow:0px 3px 16px 0px rgba(0,0,0,0.1)}` rule, but the source's own
     `navbarFixed()` — the only thing that would add `navbar_fixed` — is
     **commented out** in `js/theme.js`, so that rule is dead; verified live:
     after `scrollTo(0,1500)` the header sits at `y = -1500`).
  2. **Hero** (`section.home_banner_area`, bg photo `img/banner/home-banner.jpg`
     + dark scrim): centred copy — `h5` "The Wedding of" (white, uppercase,
     letter-spaced), `h3` couple names in **pink `#ff2f92`** display serif,
     bracketed by two white flourish ornament images (`shap-1.png` above,
     `shap-2.png` below). The photo is the source's single **`bg-parallax`
     overlay** — the page init calls `$('.bg-parallax').parallax()` (the
     `jquery.parallax` bundle shipped as `js/stellar.js`, which translates the
     layer by half the scroll distance; `data-stellar-ratio="0.9"` is inert),
     so the hero photo drifts against the scroll.
  3. **Story** (`section.story_area.p_120`): a `row.story_inner` of three
     `col-lg-4` columns — ornate framed photo · centred `story_text`
     (`h3` "Cordially Invited", a small grey line "On the 13th of may, 2018 /
     <names> / <venue>, USA.", a square pink `main_btn` "View Our Story") ·
     ornate framed photo.
  4. **Timer** (`section.timer_area` → `.timer_inner.p_120`, bg image
     `img/timer-bg.png`, white type): `h5` "Until we getting married" over a
     `.timer` translucent panel (`rgba(255,255,255,0.3)`, max-width 560px) with
     **four `timer__section` cells** (flex 25%) — each a `timer__number` (36px
     display serif italic) over a `timer__label` (14px Roboto): days · hours ·
     Minutes · seconds — and a `p` "are remaining" beneath.
  5. **Journey** (`section.journey_area.p_120`): centred `main_title` — H2 "Our
     Love Journey" + intro paragraph; then `journey_image_items` (three
     circular photos with name + role: e.g. a sister / a cousin / a neighbour),
     `journey_text_items` (**four bordered cards** with a corner flourish image:
     "Love at first sight", "First Kissing", "Living Together", "Cherished
     Proposal", each a title + blurb), and a second `journey_image_items` (three
     more circular photos with name + role).
  6. **Moments** (`section.moments_area`): centred `main_title` — H2 "Special
     Moments Captured" + intro; then a **six-across photo grid**
     (`gallery_item`, flex `0 0 16.66%`, 3px padding) — six images, each with a
     dark hover overlay + an expand icon.
  7. **Reservation** (`section.reservation_form_area.p_120`): centred white card
     (`res_form_inner`, max-width 555px, padding 75px 50px, shadow
     `0px 10px 30px 0px rgba(153,153,153,0.1)`) with a `main_title` H2
     "Reservation Form" + paragraph, then a form: a **Name** field, an **Email
     address** field, a **Meal Preferences** select (3 options), a **Number of
     guests** select (3 options), and a pink **"Confirm Now"** submit button.
     Corner flourish images sit outside the card (`contact-shap-1.png` /
     `contact-shap-2.png`).
  8. **Arrangement** (`section.progress_area`): centred `main_title` — H2
     "Arrengement in progress" + intro; then **four white cards**
     (`progress_item`, shadow `0px 10px 30px 0px rgba(153,153,153,0.1)`) — each a
     photo, an `h4` title, a blurb, and a **Date / Time / Address** block
     (source items: Wedding Ceremony · Lunch Preparations · Wedding Cake Cutting
     · Wedding Party).
  9. **Gift Registry** (`section.clients_logo_area.p_120`): centred `main_title`
     — H2 "Gift Registry" + intro; then an auto-scrolling logo row of **five
     greyscale logos** (opacity .5, full opacity on hover).
  10. **Footer** (`footer.footer_area` → `.footer_inner`, bg `#f9f9ff`): centred
      — a footer logo, a `f_menu` row (Home · Our Story · Accomodation ·
      Gallery · Pages · Blog · Contact), a small social row, and a copyright bar
      with the computed current year.
- **Design tokens extracted from the preview stylesheet**
  (`https://preview.colorlib.com/theme/honey/css/style.css`, HTTP 200, 66,582 B
  — plus `css/bootstrap.css`, `css/responsive.css` 9,891 B,
  `css/font-awesome.min.css`, `vendors/linericon/style.css`,
  `vendors/owl-carousel/owl.carousel.min.css`,
  `vendors/lightbox/simpleLightbox.css`,
  `vendors/nice-select/css/nice-select.css`, `vendors/animate-css/animate.css`):
  - Brand accent (hot pink): **`#ff2f92`** — hero couple names, active nav
    links, buttons, links, hover states, dropdown hover background.
  - Ink: **`#222222`** (headings, nav); muted text **`#777777`**; placeholder
    **`#999999`**.
  - Soft surface: **`#f9f9ff`** (footer band); borders **`#eeeeee`**,
    **`#cccccc`**.
  - Secondary/generic accents present in the sheet (elements page only, not the
    wedding page): `#f8b600` (amber), `#4cd3e3` (cyan) — **do not** use as the
    brand colour.
  - Card shadow: **`0px 10px 30px 0px rgba(153, 153, 153, 0.1)`** (journey text
    cards, reservation card, arrangement cards).
  - Timer panel: **`rgba(255, 255, 255, 0.3)`** (`.timer_inner .timer`),
    max-width 560px, cells flex `0 0 25%`.
  - Fonts (no Google Fonts `<link>` in the preview — the families are referenced
    directly): display/headings **"Playfair Display", serif** (h1–h6, weight
    600; `h1 36px · h2 30px · h3 24px · h4 18px · h5/h6`), body/UI
    **"Roboto", sans-serif** (14px body, `font-weight:300` on paragraphs, nav
    12px uppercase).
  - Buttons: `.main_btn` — `background:#ff2f92; color:#fff; line-height:40px;
    padding:0 23px; font-family:"Roboto",sans-serif; font-weight:bold;
    text-transform:uppercase; border:1px solid #ff2f92;` **no border-radius**;
    hover — `color:#ff2f92; background:transparent; border-color:#ff2f92`.
  - Radii: **square everywhere** — `.reservation_form .form-group input {
    border-radius:0 }`, `.res_select { border-radius:0 }`, `.list {
    border-radius:0 }`, buttons square.
  - Section backgrounds: white for Story / Journey / Moments / Reservation /
    Arrangement; background-image + dark scrim for Hero (`home-banner.jpg`);
    background-image for the Timer band (`timer-bg.png`, white type); `#f9f9ff`
    for the Footer.
- **Recreation decisions:** brand wordmark **"Trousseau"** instead of
  "Honey wedding"; own couple names, dates, venue, nav labels, journey
  names/roles, journey card titles + blurbs, arrangement card titles, gift
  registry copy and footer copy. Photos → seeded picsum
  (`picsum.photos/seed/trousseau-<n>/<w>/<h>`: hero 1920×1080, story 700×900,
  journey circles 400×400, moment grid 600×600, arrangement 640×420, registry
  logos → text/`lucide-react` marks or neutral logo shapes). Ornaments → lucide
  icons plus a small inline SVG flourish component (no ColorLib asset copied).
  Icons → lucide-react (Heart, Menu, X, Search, ChevronDown, Expand, Clock,
  MapPin, Calendar, Gift, Facebook, Twitter, Instagram, Send). No assets copied;
  brand pink `#ff2f92` in `@theme`.

Trousseau lives in `apps/trousseau` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Header / navigation

The system SHALL render a slim header with a logo wordmark, an uppercase nav
row (with a dropdown) and a search toggle.

#### Scenario: Header content

- **GIVEN** the Trousseau page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show a logo mark and the wordmark "Trousseau" on the
  left
- **AND** SHALL show the nav links Home, Our Story, Accomodation, Gallery,
  Pages (dropdown: Bridesmaid, Groomsmen, Elements), Blog and Contact
- **AND** SHALL show a search toggle control
- **AND** the active link SHALL be styled in the brand pink `#ff2f92`

#### Scenario: Header is not sticky

- **GIVEN** the page is rendered
- **WHEN** the visitor scrolls past the hero
- **THEN** the header SHALL scroll away with the page (it is `position:absolute`
  over the hero, in normal flow)
- **AND** SHALL NOT acquire a fixed/sticky state or a scroll shadow — the
  source's `navbar_fixed` rule is dead because its `navbarFixed()` init is
  commented out (verified live: header `y = -1500` at `scrollTop = 1500`)

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user opens the menu
- **THEN** a collapsible menu SHALL show the same nav links
- **AND** the toggle SHALL expose its state via aria-expanded

### Requirement: Hero section

The system SHALL render a full-bleed photo hero under a dark scrim with centred
white/pink copy bracketed by white flourish ornaments.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a small uppercase white line "The Wedding of" above the
  couple names
- **AND** SHALL show the couple names in a large display serif coloured pink
  `#ff2f92`
- **AND** SHALL bracket the names with a decorative white flourish ornament
  above and below (aria-hidden)
- **AND** the hero SHALL use a full-width background photo under a dark scrim
- **AND** that photo layer SHALL drift against the scroll (the source's
  `$('.bg-parallax').parallax()` translates it by half the scroll distance) —
  via a scroll-linked transform, and SHALL be disabled under
  `prefers-reduced-motion: reduce`

### Requirement: Story section

The system SHALL render a three-column "Cordially Invited" band — framed photo,
centred text block with a pink button, framed photo.

#### Scenario: Story content

- **GIVEN** the page is rendered
- **WHEN** the story section is displayed
- **THEN** it SHALL show the heading "Cordially Invited" in the display serif
- **AND** SHALL show a small muted line with the date, the couple names and the
  venue
- **AND** SHALL show a square (no-radius) pink `#ff2f92` "View Our Story" button
- **AND** SHALL show a framed photo on each side of the text block

### Requirement: Countdown (timer) section

The system SHALL render a background-photo countdown band with a translucent
white four-cell timer.

#### Scenario: Timer content

- **GIVEN** the page is rendered
- **WHEN** the timer section is displayed
- **THEN** it SHALL show the heading "Until we getting married" in white
- **AND** SHALL show a translucent white panel containing four cells — days,
  hours, Minutes and seconds — each a number over a label
- **AND** SHALL show a closing line "are remaining" beneath the panel

### Requirement: Journey section

The system SHALL render an "Our Love Journey" section with circular photos
around four bordered text cards.

#### Scenario: Journey content

- **GIVEN** the page is rendered
- **WHEN** the journey section is displayed
- **THEN** it SHALL show the heading "Our Love Journey" and an intro paragraph
- **AND** SHALL show a row of three circular photos, each with a name and a role
- **AND** SHALL show four bordered, soft-shadowed text cards, each a title and a
  blurb
- **AND** SHALL show a second row of three circular photos, each with a name and
  a role

### Requirement: Moments gallery

The system SHALL render a "Special Moments Captured" six-across photo grid.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the moments section is displayed
- **THEN** it SHALL show the heading "Special Moments Captured" and an intro
- **AND** SHALL show six images in a six-column grid with small gutters
- **AND** each image SHALL reveal a hover overlay with an expand affordance

### Requirement: Reservation form

The system SHALL render a centred white reservation card with a Name field, an
Email field, two selects and a pink submit button.

#### Scenario: Reservation form content

- **GIVEN** the page is rendered
- **WHEN** the reservation section is displayed
- **THEN** it SHALL show the heading "Reservation Form" and a paragraph
- **AND** SHALL show a Name field, an Email address field, a meal-preferences
  select and a number-of-guests select
- **AND** SHALL show a square pink `#ff2f92` "Confirm Now" submit button
- **AND** the form SHALL be operable and SHALL NOT submit to an external service

### Requirement: Arrangement in progress section

The system SHALL render four white cards, each with a photo, title, blurb and a
date/time/address block.

#### Scenario: Arrangement content

- **GIVEN** the page is rendered
- **WHEN** the arrangement section is displayed
- **THEN** it SHALL show the heading "Arrengement in progress" and an intro
- **AND** SHALL show four white cards, each with a title, a blurb and a Date,
  Time and Address line

### Requirement: Gift Registry section

The system SHALL render a "Gift Registry" heading over a row of registry marks.

#### Scenario: Gift Registry content

- **GIVEN** the page is rendered
- **WHEN** the gift registry section is displayed
- **THEN** it SHALL show the heading "Gift Registry" and an intro
- **AND** SHALL show a row of at least five registry marks rendered in a muted
  style that becomes full-strength on hover

### Requirement: Footer

The system SHALL render a centred `#f9f9ff` footer with a logo, a menu row, a
social row and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a logo mark and a menu row (Home, Our Story,
  Accomodation, Gallery, Pages, Blog, Contact)
- **AND** SHALL show a small social row
- **AND** SHALL show a copyright bar with the computed current year
- **AND** SHALL link `https://www.componentdock.com/` ("Component Dock")

### Requirement: Page composition

The system SHALL compose all sections in a single page with a banner landmark,
a main landmark and a contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Trousseau app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Trousseau — Wedding Template"

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/trousseau`
- [ ] `npm run lint` passes for `apps/trousseau`
- [ ] `scripts/verify-app.sh trousseau` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] `npm run spec:validate` passes
- [ ] Header: logo + "Trousseau" wordmark, uppercase nav (Home, Our Story,
      Accomodation, Gallery, Pages dropdown, Blog, Contact) + search, active
      link pink `#ff2f92`, mobile menu with aria-expanded; **not** sticky — the
      header scrolls away (the source's `navbar_fixed` rule is dead)
- [ ] Hero: full-width photo + dark scrim, "The Wedding of" line, pink
      `#ff2f92` display-serif couple names bracketed by white flourish
      ornaments; the photo layer drifts against the scroll (half-rate
      translateY) and is off under `prefers-reduced-motion: reduce`
- [ ] Story: three-column band — framed photo, "Cordially Invited" + date/names/
      venue line + square pink "View Our Story" button, framed photo
- [ ] Timer: bg-photo band "Until we getting married", translucent white panel
      with four cells (days/hours/Minutes/seconds), "are remaining" line
- [ ] Journey: "Our Love Journey" + intro, 3 circular photos (name + role),
      4 bordered text cards (title + blurb + corner flourish), 3 more circular
      photos
- [ ] Moments: "Special Moments Captured" + six-across photo grid with hover
      overlay + expand affordance
- [ ] Reservation: white card (max-width 555px, soft shadow) — Name, Email,
      meal-preferences select, number-of-guests select, pink "Confirm Now"
- [ ] Arrangement: "Arrengement in progress" + four white cards with photo,
      title, blurb and Date/Time/Address
- [ ] Gift Registry: "Gift Registry" + heading + row of 5+ registry marks
      (muted → full on hover)
- [ ] Footer: `#f9f9ff` band, logo + menu row + social row + copyright bar
      (current year) + Component Dock link
- [ ] No copied ColorLib assets; brand pink `#ff2f92` in `@theme`; everything
      square (no border-radius); fonts Playfair Display + Roboto
- [ ] Placeholder images via seeded picsum (`seed/trousseau-<n>/<w>/<h>`)
- [ ] No `colorlib` / `honey` / "Honey" / `Colorlib` string anywhere in the
      app (comments included)
- [ ] TEMPLATES.md `Honey` item marked `[x]` with the live
      `https://trousseau.free.componentdock.com` URL + homepage
