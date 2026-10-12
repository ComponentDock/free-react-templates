# Template: Nuptials (Wedding Landing)

## Purpose

Nuptials is a single-page wedding landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib **"Wedding"** entry (TEMPLATES.md line 3105, source
`colorlib.com/wp/template/wedding/`, preview
`https://preview.colorlib.com/theme/wedding/`), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

**Provenance note (corrected 2026-10-12):** an earlier revision of this spec
named the ColorLib "Wordpress Wedding Themes" roundup entry
(`colorlib.com/wp/template/wordpress-wedding-themes/`) as the source. That is
a *different* TEMPLATES.md item (lines 235 and 3109), it is **already shipped
as `wedlock`**, and its own preview slug 404s
(`preview.colorlib.com/theme/wordpress-wedding-themes/` → HTTP 404). Do not
re-claim those lines. The source of record is the live "Wedding" theme whose
structure is mapped below. That theme is a purple-accent
wedding page: a full-screen hero photo ("James & Julie are Getting Married"),
an about slider with two slides ("About the Sweet Cute Bride" / "About the
Handsome Groom"), a date strip ("Wedding Day: 20
March 2018 at 19.00 pm"), a pre-wedding photo gallery slider (six photos, no
filters), a live
countdown (Days/Hours/Minutes/Seconds), three info cards (Wedding
Information, Main Ceremony, Wedding Party), a reservation form on a photo
background (meal preferences, guest count, name/email/message), and a simple
footer. Nuptials recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib **"Wedding"** (source:
  https://colorlib.com/wp/template/wedding/ — TEMPLATES.md line 3105, the
  `- [ ]` item this spec covers). The "Wordpress Wedding Themes" roundup
  entry (lines 235 / 3109) is a separate item, already shipped as `wedlock`.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/wedding/`
  (HTTP 200, 22,649 bytes) + stylesheet `css/main.css` (33,049 bytes) —
  both re-fetched and re-verified on 2026-10-12 (the preview's
  linearicons/font-awesome/bootstrap vendor CSS is ignored; tokens come from
  `main.css`). The TEMPLATES.md screenshot for THIS item
  (`wedding-free-wedding-website-template.jpg`, 1200x935 AVIF) shows: a white
  contact topbar ("+880 1234 654 953" · "support@colorlib.com"), a centered
  logo with uppercase nav (HOME / ABOUT US / GALLERY / PAGES ▾), a full-bleed
  bride-and-groom hero carrying a strong purple gradient wash across the right
  half with a centered white bold headline ("James & Julie are Getting
  Married"), then a white "About the Handsome Groom" section (light-weight
  heading, final word bold), body copy, groom photo on the right, and small
  square prev/next slider arrows at the right edge. This matches the live DOM
  structure. (The earlier note in this spec describing a Playfair-style
  roundup banner belonged to the `wedlock` item's screenshot, not this one.)
- **Section order (1:1):**
  1. Header: contact topbar ("+880 1234 654 953" · "support@colorlib.com")
     above a centered logo + nav (Home, About us, Gallery, Pages ▾ [Generic,
     Elements]).
  2. Hero (`banner-area`): full-screen background photo (header-bg.jpg) with
     dark overlay (#7f3f3b @ 0.3 opacity) and centered white headline
     "James & Julie are Getting Married" (72px, weight 700).
  3. About (`About-area pt-100 pb-60`): owl-carousel slider with two slides
     and prev/next triggers (`.carousel-trigger`, 40px white squares) — slide
     1 "About the Sweet Cute Bride" (`about.png`), slide 2 "About the
     Handsome Groom" (`about2.png`); each slide = light-weight heading (span
     word at weight 600) + lead paragraphs + framed photo.
  4. Date strip (`date-area`): "Wedding Day : 20 March 2018 at 19.00 pm".
  5. Gallery (`gallery-area pt-100`): "Our Pre Wedding Photo Gallery" +
     photo slider (`.single-gallery.active-gallery-carusel`, six images
     g1–g6, no filter/isotope markup) + lead paragraph.
  6. Countdown (`countdown-area pt-100`): live timer 29 Days / 22 Hours /
     23 Minutes / 52 Seconds.
  7. Info (`section-gap info-area`, bg #f9f9ff): "Wedding Information"
     (paragraph) + "Main Ceremony" + "Wedding Party" white cards with meta
     (Date: Friday, 20 March 2018 / Time: 19.00 / Address: 56/8, West
     Panthapath).
  8. Reservation (`reservation-area section-gap`): "Reservation Form" +
     intro copy + Meal Preferences select (Meal 1 / Meal 2 / Meal 3) +
     Number of guests + name/email/message fields, on photo background
     (reservation.jpg) with transparent inputs.
  9. Footer: links (Home, About us, Gallery, Reservations) + copyright
     ("All rights reserved | This template is made with ♥ by Colorlib").
- **Design tokens extracted from `css/main.css`:**
  - Brand color: **#c931ff** (purple — primary buttons, accents, hovers).
  - Primary button gradient: **#ca2fff → #8e96f8 → #53fff0**.
  - Light section background **#f9f9ff**; white cards; hero overlay
    **#7f3f3b** @ 0.3 opacity; reservation input borders **#656463**.
  - Font: **"Poppins", sans-serif** (Google Fonts); hero H1 72px/700 white.
  - Buttons: pill (`border-radius: 25px`), white text, gradient fill,
    line-height 42px, padding 0 30px.
  - Reservation form: transparent inputs, 1px borders, radius 0, white text,
    textarea height 150px.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo + headline;
  about slider (two slides, prev/next arrows) with framed photos; date strip
  as centered highlight bar;
  gallery = slider of six seeded picsum photos (no filters); countdown as a live
  timer component (static test-safe values in tests); info cards with
  lucide icons and Date/Time/Address meta; reservation form with select,
  number input, and text inputs (client-side only, no submit backend); all
  images picsum-seeded (`picsum.photos/seed/nuptials-N/w/h`); Google Fonts
  Poppins via `<link>`.

Nuptials lives in `apps/nuptials` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Nuptials",
a "Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Nuptials page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Nuptials" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero banner

The system SHALL render a full-width hero with a background photo, a
level-1 headline, and a subtle dark overlay for text contrast.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "James & Julie are Getting Married")
- **AND** the headline SHALL be centered over the background photo

### Requirement: About section

The system SHALL render an about section with a heading, a framed photo, and
supporting copy.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading (e.g. "About the Sweet Cute Bride")
- **AND** it SHALL render at least one photo and one lead paragraph

### Requirement: Date strip

The system SHALL render a centered date strip announcing the wedding day.

#### Scenario: Date content

- **GIVEN** the page is rendered
- **WHEN** the date section is displayed
- **THEN** it SHALL show the wedding date text (e.g. "Wedding Day : 20 March 2018 at 19.00 pm")

### Requirement: Gallery

The system SHALL render an "Our Pre Wedding Photo Gallery" section with a
slider of six photos and next/previous controls.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Our Pre Wedding Photo Gallery"
- **AND** it SHALL render at least six photos

#### Scenario: Gallery slider navigation

- **GIVEN** the gallery is displayed
- **WHEN** the user activates the next control
- **THEN** the gallery SHALL advance to another photo

#### Scenario: Gallery has no filters

- **GIVEN** the gallery is displayed
- **THEN** no filter links SHALL be rendered (the reference uses a slider, not
  a filterable grid)

### Requirement: Countdown

The system SHALL render a countdown section with Days, Hours, Minutes, and
Seconds values.

#### Scenario: Countdown content

- **GIVEN** the page is rendered
- **WHEN** the countdown section is displayed
- **THEN** it SHALL show four labeled values (Days, Hours, Minutes, Seconds)

### Requirement: Wedding info cards

The system SHALL render an info section with at least three cards
(Wedding Information, Main Ceremony, Wedding Party) including date, time,
and address meta.

#### Scenario: Info cards

- **GIVEN** the page is rendered
- **WHEN** the info section is displayed
- **THEN** it SHALL show the cards "Wedding Information", "Main Ceremony", and "Wedding Party"
- **AND** each ceremony card SHALL show Date, Time, and Address meta lines

### Requirement: Reservation form

The system SHALL render a reservation section with a heading, a meal
preference selector, a guest count input, and name/email/message fields.

#### Scenario: Reservation form content

- **GIVEN** the page is rendered
- **WHEN** the reservation section is displayed
- **THEN** it SHALL show the heading "Reservation Form"
- **AND** it SHALL render a meal preferences select (Meal 1, Meal 2, Meal 3)
- **AND** it SHALL render name, email, and message fields

### Requirement: Footer

The system SHALL render a footer with the site name, section links, and
social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Nuptials" and section links (Home, About us, Gallery, Reservations)
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Nuptials app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Nuptials — Wedding Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-nuptials`.
- [ ] Typecheck, lint, and vitest with 100% coverage for `apps/nuptials`.
- [ ] Production build succeeds (`npm run build --workspace=@free-react-templates/nuptials`).
- [ ] Every section in the section order above is present, in order, on one page.
- [ ] Brand color #c931ff is in `@theme` and used via Tailwind classes.
- [ ] Hero headline, date strip, gallery, countdown, info cards, reservation
      form, and footer match the reference content types.
- [ ] No ColorLib assets copied (all images picsum-seeded, Poppins via link).
- [ ] TEMPLATES.md line 3105 (**Wedding**) marked `[x]` after merge with surge URL (do NOT touch lines 235 / 3109 — those are `wedlock`, already shipped).
