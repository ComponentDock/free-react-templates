# Template: Freight (Logistics Template)

## Purpose

Freight is a logistics/transport corporate one-pager in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Logistic"
template design (see TEMPLATES.md — appears 3×: lines 601, 1082, and 2962; all
three rows point to the same source and are `- [ ]` — one prep covers all,
mark ALL `[x]` when done; verified with `grep -c 'wp/template/logistic/'` = 3.
NOTE: do NOT confuse with "Logistics" (with an s, slug `logistics`) — that is a
DIFFERENT template already shipped as `apps/shiply`, rows 442/1083 `[x]`),
built under a DIFFERENT name (Freight — evokes cargo/transport, fitting the
logistics theme; single lowercase word, no collision with `apps/` or existing
spec folders; verified: no `apps/freight`, no `template-freight` spec, no
`docs/templates/freight`) per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/logistic/ (Logistics category).
Preview URL: https://preview.colorlib.com/theme/logistic/ (HTTP 200, ~33 KB
HTML + `assets/css/style.css` ~74 KB fetched and parsed — the preview slug
matches the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Logistic" — a clean, corporate logistics one-pager.
  A white header (logo left, centered nav, red "Get Free Quote" button right)
  floats over a full-height hero slider of shipping-port photos; the hero
  content is a SPLIT composition — a vivid red `#F02930` block on the left
  with the white h1 and a white outline button, and a white block on the
  right with an icon and the dark-navy h2. Body sections alternate white and
  a very light blue `#F1FBFF` (class `gray-bg`); cards, the quote form, and
  testimonial panels all sit on `#F1FBFF`. Headings are dark navy
  (`#1D2547`/`#232F55`), nav links `#1D2547` 600-weight Raleway, hover red.
  All CTAs are `boxed-btn` — white fill, red text, 1px red border, uppercase,
  letter-spacing 1px, radius 0; hover inverts to red fill + white text.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/logistic/
  (HTTP 200, ~33 KB HTML; `assets/css/style.css` ~74 KB parsed for tokens).
  The site is jQuery + Bootstrap + Owl Carousel (hero + testimonials) +
  SlickNav (mobile) + NiceSelect (form selects) + Magnific Popup + Font
  Awesome + Themify icons, NOT Tailwind. All interactivity must be recreated
  client-side in React.
- **Screenshot note:** `logistic-free-template.jpg` (1200×946, viewed in the
  browser): hero split over a busy shipping-port photo (cargo ship, cranes,
  blue water) — LEFT block on solid red: "Give your business a flow" in
  large white type + a white "Our Services" button; RIGHT block on white: a
  small icon + "Transport quality and excellence to enhance your business"
  in dark grey. Header shows the red logo mark + "Logistic" wordmark on the
  left, centered nav (Home, Services, About, Blog, Contact), and a red "Get
  Free Quote" button on the right. Below: "Our Services" with a three-column
  photo grid — 01. Air Shipping (plane), 02. Logistic Service (port
  containers), 03. Ground Shipping (red semi-truck). The quote form,
  testimonials, and footer are below the fold (not visible). The live
  rendered page + parsed stylesheet are the authoritative reference.

### Design tokens (extracted from `assets/css/style.css`)

- **Brand (vivid red):** `#F02930` — hero left content block bg, nav link
  hover, `.boxed-btn` border + text (hover bg), header "Get Free Quote"
  button, section-number accents, quote-form phone number. (Red family also
  seen: `#f44a40`, `#f4e700` yellow — decorative only.)
- **Ink / navy:** `#1D2547` — nav links (Raleway 600, 16px), headings;
  `#232F55` — secondary heading color; `#1f2b7b` — accent navy used in
  text/bg decor.
- **Canvas / section bgs:** white `#fff` (header, services, testimonials),
  `#F1FBFF` (very light blue — `.gray-bg` about section, `.gray-bg` quote
  form, `.single-testimonial` card bg).
- **Muted text:** `#999999`, `#888888` — form placeholders, meta copy;
  `#C2C5DB`, `#828bb2` — footer/secondary text.
- **Font (Google Fonts `<link>` in index.html):** `"Raleway", sans-serif` —
  body 16px (weight 400), nav 600, headings 600/700.
- **Buttons — `.boxed-btn` (radius 0):** white bg, red `#F02930` text, 1px
  solid `#F02930` border, `padding:18px 44px`, 14px, uppercase,
  `letter-spacing:1px`; hover → red bg, white text. `.hero-btn` (hero "Our
  Services"): `padding:18px 52px` (white bg/border, red text — hover red
  fill). `.boxed-btn2` (header "Get Free Quote"): `padding:4px 20px`,
  red-filled (white text), red border; hover inverts.
- **Header:** logo left (`logo.png` — red square mark + wordmark), centered
  `main-menu` nav; links `#1D2547` 16px/600 capitalize, `padding:28px 22px`,
  hover `#F02930`; Blog has a white dropdown (Blog, Blog Details, Elements).
  Header right: red "Get Free Quote" button.
- **Hero:** `.slider-height` min-height 850px, cover bg photos
  (`h1_hero.jpg`, `h1_hero2.jpg`, `h1_hero3.jpg`); 3 slides, left/right
  arrows. Split content: red block (h1 white "Give your business a flow" +
  white-outline "Our Services" button) / white block (icon + h2 "Transport
  quality and excellence to enhance your business").
- **Section rhythm:** `.section-padding` = `padding-top:120px;
padding-bottom:100px` (responsive: 100/90, then 70/40).
- **Services:** 3-column photo cards; numbered caption (`01.` / `02.` /
  `03.`) + Raleway 600 title + muted copy.
- **Quote form:** `.contact-form-area.gray-bg` (bg `#F1FBFF`), heading "Get
  free quote" + copy + phone `+10(78) 267 3565`; radio pills "Ocean
  Freight" / "Air Freight" / "Land Transport"; selects: CARGO TYPE, COUNTRY
  OF ORIGIN, DESTINATION; inputs: QTY, WEIGHT, WIDTH, HEIGHT, LEIGHT (sic —
  typo in the original for LENGTH; use "LENGTH" in the recreation), NAME,
  E-MAIL, PHONE; submit "Request Quote" (boxed-btn).
- **Testimonials:** white section, centered "Client Testimonial";
  `.single-testimonial` cards bg `#F1FBFF`, `border-radius:4px`,
  `padding:45px 100px` (responsive 45px 20px): quote + avatar + name + role.
- **Footer:** 4 columns — (1) logo + about copy + social icons
  (facebook-f, instagram, twitter, pinterest-p), (2) "Quick links" (Listing,
  Submit your Business, About, Blog, Cities), (3) "Company" (Our Team,
  Privacy Policy, Testimonial, User Stories), (4) "Address": "New York -
  1060, Str. First Avenue 1", "+ (123) 1800-567-8990", "office@example.com",
  "Mon - Fri: 9:00 - 19:00", "Closed on Weekends". Bottom bar: copyright
  line + credit (Colorlib credit REPLACED with the mandatory Component Dock
  link).

### Section structure (from the live DOM, top to bottom)

1. `header` (white, fixed/sticky): logo left; `nav.main-menu` centered —
   Home, Services, About, Blog (dropdown: Blog, Blog Details, Elements),
   Contact; right: red `boxed-btn2` "Get Free Quote". Mobile: SlickNav
   hamburger (client-side toggle, `aria-expanded`).
2. `div.hero-area` — owl slider, 3 slides (`slider-height`, bg photo
   `h1_hero.jpg` etc.): split content — left red block: `h1` "Give your
   business a flow" (white) + `a.hero-btn` "Our Services" (white bg/red
   text); right white block: icon + `h2` "Transport quality and excellence
   to enhance your business" (dark). Left/right arrows; client-side cycling.
3. `section.sercices-area.section-padding` (white): centered `h2` "Our
   Services"; 3 cards (`col-lg-4`): photo + numbered caption "01. Air
   Shipping" / "02. Logistic Service" / "03. Ground Shipping" + copy
   ("Praesent eu rhoncus nibh…" — paraphrase, vary per card).
4. `section.about-area.section-padding.gray-bg` (bg `#F1FBFF`): left —
   `h2` "We have a wide range of solutions for your business" + copy +
   `a.boxed-btn` "Learn More"; feature list (icon + title + blurb):
   "Tracking Is Easy", "Multiple Warehouses"; right — truck photo
   (`truck.png`).
5. `section.contact-form-area.gray-bg` (bg `#F1FBFF`): left — `h2` "Get
   free quote" + copy + phone "+10(78) 267 3565"; right — form panel: radio
   pills Ocean Freight / Air Freight / Land Transport (default Ocean
   Freight), selects CARGO TYPE / COUNTRY OF ORIGIN / DESTINATION, inputs
   QTY / WEIGHT / WIDTH / HEIGHT / LENGTH / NAME / E-MAIL / PHONE, submit
   `a.boxed-btn` "Request Quote" — client-side validation + success state.
6. `section.testimonial-area.section-bg1` (white): centered `h2` "Client
   Testimonial"; carousel of `.single-testimonial` cards (bg `#F1FBFF`,
   radius 4, padding 45px 100px): quote (lorem — paraphrase), avatar
   (`testimonial.png`), `h3`/name "Jacson Miller" (VARY), role line
   "Designer @Colorlib" (REWORD — no colorlib strings in app code; e.g.
   "Product Designer"); client-side cycling.
7. `footer`: 4 columns — (1) footer logo + about copy + social icons
   (facebook, instagram, twitter, pinterest), (2) "Quick links": Listing,
   Submit your Business, About, Blog, Cities, (3) "Company": Our Team,
   Privacy Policy, Testimonial, User Stories, (4) "Address": street line,
   phone, email, hours. Bottom bar: "Copyright © <year> All rights
   reserved" + "made with" credit — REPLACED with the mandatory Component
   Dock link (https://www.componentdock.com/).

## Requirements

### Requirement: Header (logo + centered nav + quote CTA + mobile menu)

The system SHALL render a white header with the logo on the left, a centered
nav, a red "Get Free Quote" button on the right, and a responsive mobile
menu.

#### Scenario: Header content

- **GIVEN** the Freight app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the logo (red square mark + "Freight"
  wordmark) on the left
- **AND** SHALL show the centered nav links Home, Services, About, Blog
  (dropdown: Blog, Blog Details, Elements), Contact — `#1D2547` Raleway
  600 16px capitalize, hover `#F02930`
- **AND** SHALL show a red "Get Free Quote" button on the right

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the user opens the hamburger toggle
- **THEN** the nav SHALL be shown in a slide-in panel with an
  `aria-expanded` toggle and the links SHALL remain usable

### Requirement: Hero slider

The system SHALL render a full-height hero slider with a photo background
and a split red/white content composition.

#### Scenario: Hero content

- **GIVEN** the hero slider is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show a cover background photo (port/shipping
  scene) at min-height 850px
- **AND** SHALL show a red content block on the left with the white h1
  "Give your business a flow" and a white "Our Services" button
  (white bg, red text; hover red fill)
- **AND** SHALL show a white content block on the right with an icon and
  the h2 "Transport quality and excellence to enhance your business"
- **AND** SHALL cycle through 3 slides client-side with left/right arrows

### Requirement: Services section

The system SHALL render a white services section with a heading and three
photo cards.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the centered h2 "Our Services"
- **AND** SHALL show three cards, each with a photo, a numbered caption
  ("01. Air Shipping", "02. Logistic Service", "03. Ground Shipping"), and
  a short description

### Requirement: About section

The system SHALL render a `#F1FBFF` about section with a heading, copy, a
button, and a feature list.

#### Scenario: About layout

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL have the `#F1FBFF` background
- **AND** the left column SHALL show the h2 "We have a wide range of
  solutions for your business", a paragraph, a "Learn More" boxed button
  (white/red border, hover red fill), and two features with icons:
  "Tracking Is Easy" and "Multiple Warehouses"
- **AND** the right column SHALL show a truck photo

### Requirement: Quote form section

The system SHALL render a `#F1FBFF` quote form section with contact copy and
a full freight-quote form.

#### Scenario: Quote form

- **GIVEN** the quote form section is rendered
- **WHEN** the user scrolls to it
- **THEN** the left column SHALL show the h2 "Get free quote", a paragraph,
  and the phone "+10(78) 267 3565"
- **AND** the right column SHALL show the form with radio pills "Ocean
  Freight" (default), "Air Freight", "Land Transport", the selects CARGO
  TYPE / COUNTRY OF ORIGIN / DESTINATION, the inputs QTY / WEIGHT / WIDTH /
  HEIGHT / LENGTH / NAME / E-MAIL / PHONE, and a red "Request Quote" button
- **AND** SHALL validate the required fields and show a success message on
  submit without navigating away

### Requirement: Testimonials carousel

The system SHALL render a white testimonials section with a client-side
carousel of quote cards.

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the centered h2 "Client Testimonial"
- **AND** SHALL cycle through at least 2 testimonial cards (bg `#F1FBFF`,
  radius 4px), each with a quote, an avatar image, a name, and a role line
  (vary the demo's repeated "Jacson Miller" / "Designer @Colorlib" — the
  role MUST be reworded, no colorlib strings in app code)

### Requirement: Footer

The system SHALL render a four-column footer with a bottom credit bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** the footer SHALL show four columns: about copy + social icons
  (facebook, instagram, twitter, pinterest), "Quick links" (Listing, Submit
  your Business, About, Blog, Cities), "Company" (Our Team, Privacy Policy,
  Testimonial, User Stories), and "Address" (street line, phone, email, and
  hours "Mon - Fri: 9:00 - 19:00" / "Closed on Weekends")
- **AND** the bottom bar SHALL show the copyright line with the current
  year and a "made with" credit linking Component Dock
  (https://www.componentdock.com/) — the Colorlib credit is replaced

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh freight`)
- [ ] Design tokens from this spec applied in `@theme` (brand `#F02930`,
      ink `#1D2547`, heading-navy `#232F55`, light-bg `#F1FBFF`, muted
      `#999999`/`#888888`)
- [ ] Raleway (400/600/700) loaded via Google Fonts `<link>` in index.html
- [ ] Section structure + order matches the live DOM 1:1 (header → hero
      slider → services → about → quote form → testimonials → footer)
- [ ] Placeholder images via `https://picsum.photos/seed/freight-<n>/<w>/<h>`
      (3 hero bgs, 3 service photos, truck photo, avatars); NO assets copied
      from ColorLib
- [ ] Buttons = `.boxed-btn` style (white bg, red text, 1px red border,
      uppercase, letter-spacing 1px, radius 0; hover red fill white text):
      "Learn More", "Request Quote"; `.hero-btn` (padding 18px 52px) for
      "Our Services"; `.boxed-btn2` (padding 4px 20px) red-filled for
      header "Get Free Quote"
- [ ] Hero: 3 slides, split red/white content blocks, client-side cycling + arrows
- [ ] Quote form: radio pills (Ocean Freight default), selects + inputs
      (use LENGTH — the original "LEIGHT" is a typo), zod validation +
      success state
- [ ] Testimonials: `#F1FBFF` cards radius 4, client-side carousel; role
      lines reworded (NO colorlib strings)
- [ ] Icons from lucide-react (truck/package/globe/phone/mail for features
      and contact, brand paths for socials). Verify every lucide export
      with the typeof probe; NO fontawesome / themify icon fonts
- [ ] Interactivity client-side only: sticky header, mobile menu toggle,
      hero slider, testimonial carousel, quote form
      validation/success (no jquery/owl/slicknav/nice-select/magnific-popup)
- [ ] Footer phone/email rendered as display strings; any `tel:`/`mailto:`
      hrefs computed at runtime from spaced literals (tel-literal redaction
      pitfall — NEVER write `tel:+...` literals in source)
- [ ] Demo-repeated content varied (service copy, testimonial names/roles)
      — same kinds of content, no duplicated strings
- [ ] Footer links Component Dock (https://www.componentdock.com/) —
      replaces the original "Colorlib" credit
- [ ] No colorlib.com / preview.colorlib.com strings in any app file
- [ ] TEMPLATES.md: mark ALL THREE logistic rows `[x]` (lines 601, 1082, 2962) + surge URL + readme:status when shipped
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL (freight.free.componentdock.com) returns 200
