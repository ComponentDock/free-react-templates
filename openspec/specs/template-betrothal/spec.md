> **Superseded (2026-10-12).** This spec was prepped for the ColorLib template `dreamwed`
> (TEMPLATES.md line 3097). That template has since shipped as **Cherish** (`apps/cherish`,
> spec `openspec/specs/template-cherish/spec.md`, live at https://cherish.free.componentdock.com),
> because the implementer stream picked the item before this spec was found — the prepped name was
> looked up by guessing rather than by grepping the source slug. **No app should be built from this
> spec under the name `betrothal`**; the checklist line is already `[x]`. Kept only as research.

# Template: Betrothal (Wedding)

## Purpose

Betrothal is a single-page wedding website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free **"Dreamwed"**
website template design (source: https://colorlib.com/wp/template/dreamwed/ —
TEMPLATES.md line 3097, category **Wedding**), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source template:** ColorLib "Dreamwed" (`dreamwed`)
- **Preview URL:** `https://preview.colorlib.com/theme/dreamwed/`
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **App folder:** `apps/betrothal` — package `@free-react-templates/betrothal`
- **Naming:** never reuse the source name "Dreamwed"; the colourless brand is
  renamed **Betrothal** (a wedding/union synonym — keeps the Wedding family's
  naming run: lensly · vows · nuptial · knot · wedlock · nuptials ·
  **betrothal**).

- **Source inner pages (live reference, curl-probed 2026-10-12):** the source is
  **not** a single file — its landing page links **six** further pages of the
  same theme, all **HTTP 200** at
  `https://preview.colorlib.com/theme/dreamwed/<page>` (`curl -sS` basis). They
  are the authoritative reference for the sections this one-pager must invent:
  `story.html` (26,955 B — "Our Story" plus the "Love Story / First Meet"
  timeline), `gallery.html` (22,236 B — "Our Gallery"), `rsvp.html` (22,423 B —
  "R.S.V.P", an "Are You Attending?" form and "Where & When"), `guestbook.html`
  (22,934 B — message cards), `blog.html` (24,617 B) and `blog-details.html`
  (25,786 B). Betrothal stays a one-pager with in-app anchors; those pages are
  read for structure and copy kind only — no asset, class or copy is copied.

## Design reference (replication findings)

- **Original:** ColorLib "Dreamwed" — a romantic wedding / save-the-date
  **landing page** (the source's own file set is a seven-page theme: six further
  live inner pages are inventoried at the end of this section). Source page
  `https://colorlib.com/wp/template/dreamwed/`;
  preview `https://preview.colorlib.com/theme/dreamwed/` returns **HTTP 200**
  (34,516 B HTML, `<title>Dream | Template</title>`). TEMPLATES.md screenshot
  `dreamwed-free-template.jpg` (HTTP 200, served **AVIF** despite the `.jpg`
  name, 69,828 B) was converted to PNG and inspected visually.
- **Visual design (from the live preview + screenshot):** elegant, romantic
  wedding page on a **clean white canvas** with a warm **ochre/gold accent
  (`#d48f4c`)**. Header is **centred**: a small gold **ring** icon above the
  wordmark (script/serif "Dream"), with a **centred nav row** below it
  (HOME · WEDDING PLANS · PHOTO ALBUM · BLOG · PAGES + a search icon), the
  active item underlined in gold. The **hero** is a full-width couple photo
  under a dark scrim, with centred white copy: a small uppercase date line,
  the couple names in a large **display serif with a `⚭`-style interpunct** and
  a **gold flourish/ornament** underneath, a short paragraph, and a
  **square gold "R.S.V.P" button**. Section headings use a small **gold
  uppercase eyebrow** ("SAVE THE DATE", "OUR GALLERY") over a **dark serif
  H2**, separated from the body by a small **gold wave ornament image**
  (`icon_2.png`) — the template's signature decorative motif. Sections are
  mostly white; the **gallery** and **RSVP** bands are background photos with a
  dark overlay. Cards/forms are white with a soft diffuse shadow. Buttons are
  **square (no radius)**, gold-filled or gold-outlined.
- **First paint:** before any section the source paints a **full-screen white
  overlay** (`#preloder` — the source's own spelling — holding a 40 px `.loader`
  ring whose 4 px border alternates `#f44336` → `#673ab7` on a `0.8s linear
  infinite` spin) and fades it out 200 ms after `window.load`
  (`js/main.js`: `$(".loader").fadeOut(); $("#preloder").delay(200).fadeOut("slow")`).
  Nothing else is visible on first paint.
- **Section order (1:1):**
  1. **Header** (`header`, centred): ring/logo mark + wordmark; centred nav —
     Home, Wedding Plans, Photo Album, Blog, Pages (dropdown: Story, Gallery,
     Rsvp, Guestbook, Blog Details) + a search toggle. Active link gold with an
     underline.
  2. **Hero** (`section.hero.spad.set-bg`, bg photo `hero-bg.jpg` + dark scrim):
     centred white copy — date line ("September 19th, 2020"), couple names in
     large display serif with a `⚭` interpunct, a gold flourish ornament, a
     short paragraph, and a square gold **"R.S.V.P Nows"** button.
  3. **Story** (`section.story.spad`): centred `section-title` — eyebrow
     "Save The Date", H2 "Our Story Wedding", gold wave ornament, lead
     paragraph; then a row of **two circular portraits** (left/right) flanking a
     **large centre photo** (`story__large__pic`), each portrait paired with a
     name + short blurb and small social icons (`story__social`).
  4. **Countdown** (`section.countdown.spad`): centred `section-title` with the
     date ("Sunday 19 March, 2019") + a **countdown row** of four items
     (`countdown__item`) — Days, Hours, Minutes, Seconds.
  5. **Gallery** (`section.gallery`, no `spad`): full-bleed band whose
     `section-title.set-bg` uses a background photo (`gallery-title.jpg`) with
     the eyebrow "Our Gallery" + H2 "Let's Save Your Best Moments" + wave
     ornament; below, an **8-image grid** in 4 columns × 2 rows
     (`gallery__pic`, `p-0` edge-to-edge, `border-radius:5px`, dark hover text
     overlay `gallery__text rgba(53,53,53,0.7)`).
  6. **Event** (`section.event.spad`): centred `section-title` "Wedding Events";
     an **owl-carousel slider** (`event__slider`) of event items — each a
     circular icon (`event__item__icon`) + a time + a title + a blurb. Source
     items: **07:00 The Church**, **08:00 Ceremony Wedding**, **13:00 Wedding
     Party**, **16:00 Cake Cutting**, **16:00 Photography**.
  7. **RSVP** (`section.rsvp.set-bg`, bg photo `rsvp.jpg` + overlay): a
     **split band** — left: a white form card (`rsvp__form`, `padding:80px 50px
     85px`, soft shadow) with a Name input, an Email input, two `nice-select`
     dropdowns (guest count "2 Guest", event "All Event") and a **"I Am
     Attending"** submit button; right: a text block (`rsvp__text`) with an
     eyebrow ("Organizations") + heading ("Are You Attending?") + paragraph.
  8. **Wedding Time** (`section.wedding-time.spad`): centred `section-title` —
     eyebrow "Location & Time", H2 "Where & When", lead paragraph; then a row of
     **three white cards** (`wedding__time__item`, soft shadow) — each a title
     (Ceremony / Wedding Party / Photography), a time range (11:00 AM – 14:00 PM
     etc.) and an address ("40 Baria Sreet 133/2 NY City, US").
  9. **Footer** (`footer.footer.spad`): centred — a closing heading ("Come to
     attend our marriage ceremony"), a logo mark, and a copyright bar
     ("© <year> … All rights reserved | This template is made with … by
     Colorlib") plus a small social row (`footer__social`).
- **Design tokens extracted from the preview stylesheet**
  (`https://preview.colorlib.com/theme/dreamwed/css/style.css`, HTTP 200,
  30,285 B — plus `bootstrap.min.css`, `elegant-icons.css`, `nice-select.css`,
  `owl.carousel.min.css`, `slicknav.min.css`):
  - Brand accent (warm ochre/gold): **`#d48f4c`** — buttons, active nav
    underline, eyebrow labels, ornaments.
  - **Two inks — do not merge them** (measured on the live sheet: `#747e8c` in
    33 rules, `#353535` in 32): **body/paragraph ink `#747e8c`** (blue-grey) for
    `p`, `.section-title span` eyebrows, `.countdown__item p`,
    `.event__item span`, form inputs **and** their placeholders,
    `.wedding__time__item li` and `.footer__social a`; **heading/emphasis ink
    `#353535`** (near-black) for `.section-title h2`, story/event `h3`, the
    active nav item, the count-up digits and the `.nice-select` text/arrow.
    Live-verified: `.section-title span` renders `rgb(116, 126, 140)` =
    `#747e8c` while `.section-title h2` renders `rgb(53, 53, 53)` = `#353535`.
    White surfaces **`#ffffff`**.
  - Card shadow: **`0px 5px 30px rgba(53, 53, 53, 0.06)`** (forms) /
    **`0px 5px 35px rgba(53, 53, 53, 0.06)`** (time cards, gallery overlay
    `rgba(53, 53, 53, 0.7)`).
  - Fonts (Google Fonts): headings/display **"Arima Madurai", cursive**;
    body/UI **"Work Sans", sans-serif**.
  - Buttons: `.primary-btn` — `font-size:15px; font-weight:700; padding:14px
    35px 10px; color:#fff; background:#d48f4c;` **no border-radius (square)**;
    an outline variant — `border:1px solid #d48f4c; color:#353535;
    background:transparent`. `.site-btn` — `background:#d48f4c; color:#fff;
    font-weight:700; padding:12px 32px 10px`.
  - Radii: **gallery items `border-radius:5px`**; **story portraits 50%**
    (circles); buttons square (no radius).
  - Section backgrounds: white `#ffffff` for Story/Countdown/Event/Wedding
    Time; background-image + overlay for Hero (`hero-bg.jpg`), Gallery title
    band (`gallery-title.jpg`), and RSVP (`rsvp.jpg`).
- **Recreation decisions:** brand wordmark **"Betrothal"** (a gold ring/`Ring`
  icon in the header) instead of "Dream"; new couple names and copy of the same
  _kind_ (date line, names + interpunct, story portraits + blurbs, countdown
  labels, 8 gallery photos, event slider items, RSVP form fields, three
  location/time cards, closing footer heading). Photos → seeded picsum
  (`picsum.photos/seed/betrothal-<n>/<w>/<h>`: hero 1920×1080, story centre
  800×1000, portraits 300×300, gallery 600×800, RSVP band 1920×1080). Icons →
  lucide-react (Ring, Menu, X, Search, ChevronDown, Heart, Clock, MapPin,
  Camera, Church, Facebook, Twitter, Instagram, Send). No assets copied;
  brand ochre `#d48f4c` in `@theme`.

Betrothal lives in `apps/betrothal` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Header / navigation

The system SHALL render a centred header with a ring logo mark, a wordmark, a
centred nav row (with a dropdown) and a search toggle.

#### Scenario: Header content

- **GIVEN** the Betrothal page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show a gold ring icon above the wordmark "Betrothal"
- **AND** SHALL show the centred nav links Home, Wedding Plans, Photo Album,
  Blog and a Pages dropdown (Story, Gallery, Rsvp, Guestbook, Blog Details)
- **AND** SHALL show a search toggle control
- **AND** the active link SHALL be styled in the brand ochre `#d48f4c` with an
  underline

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user opens the menu
- **THEN** a collapsible menu SHALL show the same nav links
- **AND** the toggle SHALL expose its state via aria-expanded

### Requirement: Hero section

The system SHALL render a full-width photo hero under a dark scrim with centred
white copy and a square gold RSVP button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a small uppercase white date line
- **AND** SHALL show the couple names in a large display serif with an
  interpunct separator and a gold flourish ornament beneath
- **AND** SHALL show a short paragraph
- **AND** SHALL show a square (no-radius) gold "R.S.V.P" button

### Requirement: Story section

The system SHALL render a "Our Story Wedding" section with two circular
portraits flanking a large centre photo.

#### Scenario: Story content

- **GIVEN** the page is rendered
- **WHEN** the story section is displayed
- **THEN** it SHALL show the eyebrow "Save The Date" and the heading "Our Story
  Wedding" with a gold wave ornament
- **AND** SHALL show a lead paragraph
- **AND** SHALL show two circular portraits (each with a name, a blurb and
  small social icons) flanking one large centre photo

### Requirement: Countdown section

The system SHALL render a countdown row with four time units.

#### Scenario: Countdown content

- **GIVEN** the page is rendered
- **WHEN** the countdown section is displayed
- **THEN** it SHALL show the wedding date heading
- **AND** SHALL show four countdown items: Days, Hours, Minutes and Seconds

### Requirement: Gallery section

The system SHALL render a full-bleed "Let's Save Your Best Moments" gallery
band with an eight-image grid.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the eyebrow "Our Gallery" and the heading "Let's Save
  Your Best Moments" over a background-photo band with a gold wave ornament
- **AND** SHALL show eight images in a four-column grid (two per column)
- **AND** each image SHALL reveal a dark hover overlay

### Requirement: Events section

The system SHALL render a "Wedding Events" slider of event items.

#### Scenario: Events content

- **GIVEN** the page is rendered
- **WHEN** the events section is displayed
- **THEN** it SHALL show the heading "Wedding Events"
- **AND** SHALL show at least five event items, each with a circular icon, a
  time, a title and a blurb (e.g. The Church, Ceremony Wedding, Wedding Party,
  Cake Cutting, Photography)

### Requirement: RSVP section

The system SHALL render a split RSVP band over a background photo — a white
form card beside a text block.

#### Scenario: RSVP form

- **GIVEN** the page is rendered
- **WHEN** the RSVP section is displayed
- **THEN** it SHALL show a white card with a Name field, an Email field, a
  guest-count dropdown, an event dropdown and an "I Am Attending" submit button
- **AND** SHALL show a text block with an eyebrow and the heading "Are You
  Attending?" plus a paragraph
- **AND** the form SHALL be operable and SHALL NOT submit to an external service

### Requirement: Wedding Time section

The system SHALL render a "Where & When" section with three location/time cards.

#### Scenario: Wedding Time content

- **GIVEN** the page is rendered
- **WHEN** the wedding time section is displayed
- **THEN** it SHALL show the eyebrow "Location & Time" and the heading "Where &
  When"
- **AND** SHALL show three white cards (Ceremony, Wedding Party, Photography),
  each with a time range and an address

### Requirement: Footer

The system SHALL render a centred footer with a closing heading, a logo mark,
a social row and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a closing heading
- **AND** SHALL show a logo mark and a small social row
- **AND** SHALL show a copyright bar with the computed current year
- **AND** SHALL link `https://www.componentdock.com/` ("Component Dock")

### Requirement: First-paint preloader overlay

The system SHALL reproduce the source's first-paint overlay (`#preloder` in the
source markup — its own spelling — wrapping a 40 px `.loader` ring), which the
source's own script fades out on `window.load`, so that first paint matches the
reference.

#### Scenario: Preloader overlay

- **GIVEN** the Betrothal app is rendered
- **WHEN** the page first paints
- **THEN** a full-screen overlay SHALL cover the viewport (`position:fixed`,
  `width/height:100%`, `background:#fff`, `z-index:999999`)
- **AND** it SHALL hold a **40 px round ring** (`border-radius:50%`,
  `border:4px solid #f44336` with a transparent left border, animating over
  `0.8s linear infinite` through `#673ab7` at 50 % and back to `#f44336`)
- **AND** on `window.load` the ring SHALL hide and the overlay SHALL fade out
  **200 ms later** (the source's `fadeOut()` + `delay(200).fadeOut("slow")`)
- **AND** the overlay SHALL be `aria-hidden`, contain no focusable element, and
  under `prefers-reduced-motion: reduce` SHALL hide without the fade

### Requirement: Page composition

The system SHALL compose all sections in a single page with a banner landmark,
a main landmark and a contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Betrothal app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Betrothal — Wedding Template"

## Verification checklist

- [x] `npm run typecheck` passes for `apps/betrothal` — superseded: shipped as `apps/cherish`
- [x] `npm run lint` passes for `apps/betrothal` — superseded: shipped as `apps/cherish`
- [ ] `scripts/verify-app.sh betrothal` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] `npm run spec:validate` passes
- [ ] Preloader: full-screen `#fff` overlay (`z-index:999999`) with a 40 px ring
      alternating `#f44336`/`#673ab7` (`0.8s` linear spin), fades out 200 ms after
      load, `aria-hidden`, no focus trap, reduced-motion aware
- [ ] Header: ring mark + "Betrothal" wordmark, centred nav (Home, Wedding
      Plans, Photo Album, Blog, Pages dropdown, search), active link ochre
      `#d48f4c` underlined, mobile menu with aria-expanded
- [ ] Hero: full-width photo + dark scrim, date line, display-serif couple
      names with interpunct + gold ornament, paragraph, square gold R.S.V.P
      button
- [ ] Story: "Save The Date" / "Our Story Wedding" + wave ornament + lead,
      two circular portraits (name + blurb + social) flanking a centre photo
- [ ] Countdown: date heading + four items (Days/Hours/Minutes/Seconds)
- [ ] Gallery: bg-photo band "Our Gallery" / "Let's Save Your Best Moments",
      eight images in a four-column grid, dark hover overlay
- [ ] Events: "Wedding Events" slider, 5+ items (icon + time + title + blurb)
- [ ] RSVP: bg-photo split band, white form card (Name, Email, guest dropdown,
      event dropdown, "I Am Attending"), text block "Are You Attending?"
- [ ] Wedding Time: "Location & Time" / "Where & When" + 3 white cards
      (Ceremony / Wedding Party / Photography) with time ranges + address
- [ ] Footer: closing heading + logo + social row + copyright bar (current
      year) + Component Dock link
- [ ] No copied ColorLib assets; brand ochre `#d48f4c` in `@theme`;
      buttons square (no radius); fonts Arima Madurai + Work Sans
- [ ] Placeholder images via seeded picsum (`seed/betrothal-<n>/<w>/<h>`)
- [ ] No `colorlib` / `dreamwed` / "Dream" / `Colorlib` string anywhere in the
      app (comments included)
- [ ] TEMPLATES.md `Dreamwed` item marked `[x]` with the live
      `https://betrothal.free.componentdock.com` URL + homepage
