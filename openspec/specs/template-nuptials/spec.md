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

- **Source inner pages (live reference, curl-probed 2026-10-12):** the theme
  ships **two** further pages, both **HTTP 200** at
  `https://preview.colorlib.com/theme/wedding/<page>` (`curl -sS` basis):
  `generic.html` (19,523 B — "The Generic Page", "Elaboration about Generic
  Page", "Our Pre Wedding Photo Gallery") and `elements.html` (40,708 B — the
  theme's own style guide: "Text Sample", "Sample Buttons", left/right-aligned
  samples, button groups). They are the reference for the inner-page shell and
  for the theme's button/typography vocabulary; the landing page remains the 1:1
  reference for the recreation.

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
     Number of guests (1 / 2 / 3) + name/email/message fields, on photo
     background (reservation.jpg) with transparent inputs. The live form is
     `<form class="booking-form" id="myForm" action="">` — an **empty `action`
     and no `method`** (a GET self-post that never leaves the page); its two
     "selects" are jQuery **nice-select** divs
     (`.nice-select.app-select.form-control` + a `<ul>` whose `<li>` options carry
     `data-value` 1, 2 or 3),
     not `<select>` elements; all three fields carry native `required` and the
     email field carries the source's own email `pattern` (quoted in full in the
     Requirement below); every field blanks its placeholder on focus
     (`onfocus="this.placeholder = ''"`, restored `onblur`); a `.alert-msg` div
     sits under the `class="submit-btn primary-btn mt-20 text-uppercase"`
     "Confirm now" button as the source's message target. It is the theme's
     **only** form — `contact.html` 404s, `generic.html` has none, and
     `elements.html` only its style-guide demo (`<form action="#">` with
     `first_name`/`last_name`, the same placeholder swap).
  9. Footer: links (Home, About us, Gallery, Reservations) + copyright
     ("All rights reserved | This template is made with ♥ by Colorlib"); the
     copyright's year is produced **at runtime** by the page's own inline
     `document.write(new Date().getFullYear())` block.
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
- **Accessibility delta (measured 2026-10-12, live DOM + `main.css`):** the
  reference supplies almost no a11y state — one aria attribute on the whole
  page (`aria-hidden="true"` on a decorative `<i class="fa fa-heart-o">`), a
  toggler `<button class="navbar-toggler" data-toggle="collapse"
  data-target="#collapsibleNavbar">` with no accessible name / `aria-expanded`
  / `aria-controls`, targeting the **mobile menu panel**
  `<div class="collapse navbar-collapse menu-right" id="collapsibleNavbar">`
  (the page-level off-canvas panel we reproduce as a state-driven panel), a
  "Pages" dropdown that opens on CSS `:hover` only (no JS
  handler in `js/main.js`), and page-wide outline suppression
  (`a, a:focus, a:hover{outline:0}`, `.genric-btn:focus{outline:none}`,
  `.single-input:focus{outline:none}`). The recreation therefore adds the
  state, names, focus rings and keyboard paths itself (see the "Accessible
  interactive chrome" requirement).
- **Host layer (NOT the theme, measured 2026-10-12):** the preview host injects
  a two-element block as the first children of `<head>` —
  `<meta name="robots" content="noindex, nofollow">` + `<link rel="dns-prefetch"
  href="https://cdnjs.cloudflare.com">` — adds `x-robots-tag: noindex,
  nofollow`, `link:` preconnect/dns-prefetch hints and
  `speculation-rules: "/cdn-cgi/speculation"` to the response headers, and
  serves its own `robots.txt` (`User-agent: *` / `Disallow: /`). The theme's own
  head starts *below* the pair. Nothing of that layer goes into the app — no
  `noindex`, no `robots.txt`, no `dns-prefetch`, no `cdnjs`, no host URL —
  and the served head's first children must not be read as the theme's markup.
- **Theme-authored head declarations:** the theme's own head carries
  `<meta name="author" content="CodePixar">` plus empty
  `description`/`keywords` stubs and `<link rel="shortcut icon"
  href="img/fav.png">`. The recreation writes its **own** title, description and
  favicon; the vendor's `author` value is never reproduced.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo + headline;
  about slider (two slides, prev/next arrows) with framed photos; date strip
  as centered highlight bar;
  gallery = slider of six seeded picsum photos (no filters); countdown as a live
  timer component (static test-safe values in tests); info cards with
  lucide icons and Date/Time/Address meta; reservation form with select,
  number input, and text inputs (client-side only, no submit backend); all
  images picsum-seeded (`picsum.photos/seed/nuptials-N/w/h`); Google Fonts
  Poppins via `<link>` with the axes `100;200;300;400;500;600;700` (the same set
  the reference host injects — the `100`/`200` weights drive the thin About
  heading and the reservation fields).

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
preference selector, a guest count selector, and name/email/message fields with
client-side validation. The reference form is
`<form class="booking-form" id="myForm" action="">` — an empty `action` and
**no** `method` (the browser would GET the page itself; the source never posts
anywhere) — and its two selectors are jQuery **nice-select** divs
(`.nice-select.app-select.form-control` + a `<ul>` of `<li>` options carrying
`data-value` 1, 2 or 3) rather
than `<select>` elements.

#### Scenario: Reservation form content

- **GIVEN** the page is rendered
- **WHEN** the reservation section is displayed
- **THEN** it SHALL show the heading "Reservation Form"
- **AND** it SHALL render a meal preferences selector (Meal 1, Meal 2, Meal 3)
- **AND** it SHALL render a number-of-guests selector (1, 2, 3)
- **AND** it SHALL render name, email and message fields and a **"Confirm now"** submit control

#### Scenario: Reservation form validation and field behaviour

- **GIVEN** the reservation form is displayed
- **WHEN** the user submits with a missing or invalid field
- **THEN** submission SHALL be blocked with per-field errors, and the entered values SHALL be preserved
- **AND** the email field SHALL reject any address the source's own pattern rejects — `pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"` on all three fields' `required=""` (the source leans on the browser's native validation and shows its message in the `<div class="alert-msg">` under the submit button)
- **AND** no navigation or POST SHALL occur (the source's form has an empty `action` and no `method`)
- **AND** the placeholder behaviour SHALL be a documented delta: the source clears each placeholder on focus (`onfocus="this.placeholder = ''"`) and restores it `onblur`, while the recreation keeps the placeholder visible and relies on its associated labels

### Requirement: Footer

The system SHALL render a footer with the site name, section links, social links
and a copyright bar carrying the current year.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Nuptials" and section links (Home, About us, Gallery, Reservations)
- **AND** it SHALL show social links (GitHub, X, LinkedIn)
- **AND** it SHALL close with the source's copyright bar — the reference writes it
  as `Copyright ©<script>document.write(new Date().getFullYear());</script> All
  rights reserved | This template is made with <i class="fa fa-heart-o"></i> by
  <a href="https://colorlib.com">Colorlib</a>` inside `p.col-lg-8.col-sm-12.footer-text`
  (the year is produced **at runtime** by the page's own inline block; the heart
  is a decorative `aria-hidden` glyph) — so the recreation SHALL render
  "Copyright © <current year> All rights reserved | This template is made with ♥ by"
  followed by the **"Component Dock"** link to `https://www.componentdock.com/`
  (**never** the Colorlib attribution), in the same shape

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title it owns. The reference's **served** head is not the
theme's: the preview host injects `<meta name="robots" content="noindex,
nofollow">` + `<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">` as
the first children of `<head>` and answers with `x-robots-tag: noindex,
nofollow` — host infrastructure the recreation SHALL NOT carry (its own head
is indexable and free of host URLs). The theme's own declarations are the
authorship artefact `<meta name="author" content="CodePixar">` plus empty
`description`/`keywords` stubs and `img/fav.png`; the recreation replaces all
of them with its own.

#### Scenario: Full page render

- **GIVEN** the Nuptials app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Nuptials — Wedding Template"

#### Scenario: The document head is the app's own, never the host layer

- **GIVEN** the served reference head opens with the host's
  `<meta name="robots" content="noindex, nofollow">` + `<link rel="dns-prefetch"
  href="https://cdnjs.cloudflare.com">` pair and the theme's own
  `<meta name="author" content="CodePixar">`
- **WHEN** the Nuptials document head is rendered
- **THEN** it SHALL carry its own `<title>`, its own description and its own
  favicon, and SHALL NOT contain `noindex`, `nofollow`, a `robots` meta, a
  `dns-prefetch` hint, `x-robots-tag`, `cdnjs`, `preview.colorlib.com` or the
  vendor's `CodePixar` author value
- **AND** it SHALL NOT be subject to a `robots.txt` `Disallow: /` (the host's
  own policy applies to the reference only)

### Requirement: Accessible interactive chrome

The system SHALL make its interactive chrome usable without a mouse. The
reference has almost no accessibility state to copy: the whole live page
carries exactly **one** aria attribute — `aria-hidden="true"` on a decorative
`<i class="fa fa-heart-o">` — its mobile toggler is a bare
`<button class="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavbar">`
with **no** accessible name, `aria-expanded` or `aria-controls`, its "Pages"
menu opens only on CSS `:hover` (`main.css`:
`.dropdown .dropdown-menu{display:block; opacity:0}` +
`.dropdown:hover .dropdown-menu{opacity:1}`, no JS handler at all), and
`main.css` removes focus outlines page-wide (`a, a:focus, a:hover{outline:0}`,
`.genric-btn:focus{outline:none}`, `.single-input:focus{outline:none}`). Every
item below is therefore a documented delta the recreation must supply.

#### Scenario: Icon-only controls expose an accessible name

- **GIVEN** the page is rendered
- **WHEN** a control has no visible text (the theme toggle, any icon-only button or link)
- **THEN** it SHALL have an accessible name (`aria-label` or visually hidden text)
- **AND** its `<svg>`/icon SHALL be `aria-hidden="true"` so the name is announced once, not twice

#### Scenario: Disclosure controls report their state

- **GIVEN** a control shows or hides content (the mobile navigation panel, the theme toggle)
- **WHEN** its state changes
- **THEN** it SHALL expose the state via `aria-expanded`
- **AND** it SHALL point at the element it controls via `aria-controls` when a target element exists

#### Scenario: Keyboard operability and visible focus rings

- **GIVEN** the page is rendered
- **WHEN** the user navigates with the keyboard alone
- **THEN** every interactive element SHALL be reachable and operable (activation, and `Escape` to close any open overlay/menu)
- **AND** every interactive element SHALL show a visible `focus-visible` ring (a delta: the reference suppresses outlines on links, buttons and inputs)
- **AND** focus order SHALL match the visual order

#### Scenario: The countdown is not a chatty live region

- **GIVEN** the countdown section is rendered
- **WHEN** the timer updates
- **THEN** the per-second updates SHALL NOT be pushed into an `aria-live` region
- **AND** the timer SHALL be a labelled group (`role="timer"` or an equivalent labelled region) whose value stays readable on demand

#### Scenario: Decorative media is hidden, meaningful media is labelled

- **GIVEN** the page is rendered
- **WHEN** imagery and ornaments are announced
- **THEN** decorative images, icon glyphs and flourish marks SHALL be `aria-hidden` (the reference's single aria attribute is `aria-hidden="true"` on a decorative heart glyph)
- **AND** photos that carry meaning SHALL have a non-empty `alt`

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/nuptials/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/nuptials/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-nuptials`.
- [x] Typecheck, lint, and vitest with 100% coverage for `apps/nuptials`.
- [ ] Production build succeeds (`npm run build --workspace=@free-react-templates/nuptials`).
- [ ] Every section in the section order above is present, in order, on one page.
- [ ] Brand color #c931ff is in `@theme` and used via Tailwind classes.
- [ ] Hero headline, date strip, gallery, countdown, info cards, reservation
      form, and footer match the reference content types.
- [ ] Reservation form: meal + guest selectors (nice-select look, `data-value`
      1/2/3), name/email/message fields, a "Confirm now" submit, and the source's
      own validation semantics — `required` on all three fields and the email
      `pattern` — reproduced client-side with no POST (`action=""`, no `method`);
      the placeholder-swap delta is documented.
- [ ] Footer copyright bar renders the **computed current year** (the reference
      writes it with its own inline `document.write(new Date().getFullYear())`)
      and links **"Component Dock"** → https://www.componentdock.com/ — no
      `colorlib` attribution, no hardcoded year.
- [x] No ColorLib assets copied (all images picsum-seeded, Poppins via link
      with axes `100;200;300;400;500;600;700`).
- [ ] Host layer excluded from the app: the served reference's injected
      `<meta name="robots" content="noindex, nofollow">` + `<link
      rel="dns-prefetch" href="https://cdnjs.cloudflare.com">` pair,
      `x-robots-tag`, `cdnjs` and the host `robots.txt` appear nowhere in
      `apps/nuptials`; the theme's `author` value `CodePixar` is not reproduced
      (the app's head carries its own title/description/favicon).
- [ ] Accessibility pass: icon-only controls have accessible names (icons
      `aria-hidden`), disclosure controls expose `aria-expanded` (+
      `aria-controls` where a target exists), keyboard-only operation works
      (activation + `Escape` closes overlays), every interactive element shows
      a visible `focus-visible` ring, the countdown is not an `aria-live`
      region, decorative media is `aria-hidden`, meaningful photos have
      non-empty `alt`.
- [ ] TEMPLATES.md line 3105 (**Wedding**) marked `[x]` after merge with surge URL (do NOT touch lines 235 / 3109 — those are `wedlock`, already shipped).
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
