# Template: Cargonaut (Logistics & Freight landing page)

## Purpose

A freight-forwarding landing page: photographic hero under a navy wash, three transport pillars,
a four-card service grid on a pale blue band, a dark "100% secure and safe" call-out with a phone
CTA, a two-column "Why Choose Us?" block, a counter strip, a white rounded testimonial card over a
photograph, and a near-black "Get free Estimate" band whose six-field quote form sits beside two
location cards — closing on a four-column white footer.

Recreation of the ColorLib "Logistico" design (https://colorlib.com/wp/template/logistico/,
live preview https://preview.colorlib.com/theme/logistico/) as a React 19 + Vite + Tailwind CSS 4

- TypeScript single-page application.

* **Source slug:** `logistico`
* **ColorLib page:** https://colorlib.com/wp/template/logistico/ (the catalog entry; screenshot
  `https://colorlib.com/wp/wp-content/uploads/sites/2/logistico-free-template.jpg`)
* **Live preview:** https://preview.colorlib.com/theme/logistico/ — HTTP 200, 31,440 B, page
  `<title>` **"Transportion"** (read 2026-10-24 with `curl -4`; the host is IPv4-only from here)
* **New name:** `cargonaut` (apps/cargonaut, `@free-react-templates/cargonaut`) — a single
  lowercase word for a cargo navigator, differs from the source slug, and has no collision in
  `apps/`, `openspec/specs/`, `docs/templates/` or `TEMPLATES.md`
* **Deploy target:** https://cargonaut.free.componentdock.com (`apps/cargonaut/public/CNAME`,
  `homepage` in `apps/cargonaut/package.json`)
* **Category:** TEMPLATES.md `## Logistics (2)`, row **2966** — the row links the slug this spec
  records

### Why this row had to be re-implemented

Row 2966 read `[x] … [logistico]`, and `[logistico]` is a real app — but its copy is **not** this
design's. The spec ↔ row census (`docs/spec-row-mismatch.md`,
`python3 scripts/verify-spec-row-mismatch.py --network`) searched `apps/logistico`'s own strings
in both candidate demos and found them in ColorLib **Thelogistico** only: 19 exclusive hits
("We Give You Complete Control", "of Your Shipments", "Road Transport", "Contact Us") versus 1
for `logistico` — verdict `ROW-POINTER`. Thelogistico already ships as **`logistix`** (rows 629,
1203, 2970), and `openspec/specs/template-logistico/spec.md` describes Thelogistico too, so
`apps/logistico` is a surplus duplicate of `logistix` (the `spark` / `givehope` / `stride`
`UNLINKED` shape) and the **Logistico** design — preview title "Transportion" — had never been
built at all. The row was a false `[x]`. This run re-claims the row for the missing design and
ships it as **`cargonaut`**.

`measure-reference-tokens.py --slug logistico` reports **`rebuilt: False`**, so the live demo is
the original build and any mismatch with the shipped app is DRIFT, not a redesign.

## Reference readings (2026-10-24, `curl -4`)

| artefact                                                |   bytes | sha256                                                             |
| ------------------------------------------------------- | ------: | ------------------------------------------------------------------ |
| `theme/logistico/` page (DOM authority)                 |  31,440 | — (page bodies are request-unstable; bytes only)                   |
| `theme/logistico/css/style.css` (token authority)       | 188,257 | `6536708da6829a653a33cb45a799acc9d07bab239261b1ca650001b893d6c7d5` |
| `theme/logistico/css/bootstrap.min.css` (grid + reboot) |  41,887 | —                                                                  |
| screenshot (catalog thumbnail)                          |       — | served from the catalog; the live DOM is the authority             |

The page is a Bootstrap 4 build: `bootstrap.min.css`, `owl.carousel.min.css`,
`magnific-popup.css`, `nice-select.css`, the `font-awesome` / `themify` / `flaticon` icon
subsets, `animate.css`, `slicknav.css` and the theme's own `style.css` last. **Zero** of those
files are copied; the recreation re-uses `packages/ui` primitives and `lucide-react` icons.

## Design tokens (measured from `css/style.css`, 188,257 B)

Sheet census, theme sheet only: `#fff`×80, `#ff3414`×42, `#f9f9ff`×27, `#acc`×26, `#ff5e13`×20,
`#001d38`×20, `#596672`×14, `#f0e9ff`×12, `#000`×12, `#999`×11, `#fdae5c`×8, `#fd8e5e`×8,
`#4cd3e3`×7, `#415094`×7, `#f4e700`×6, `#f44a40`×6, `#f1f1f1`×6.

| Token                     | Value                                                                        | Evidence in the reference                                                                                                                                              |
| ------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand (primary chromatic) | `#ff3414`                                                                    | `.boxed-btn3 { background: #ff3414 }`, the outline `.boxed-btn { border/color }`, `.btn.btn-link:after`, section-title rules and link hovers — 42 declarations         |
| Brand soft                | `#fd8e5e`                                                                    | the gradient partner recorded in the sheet's own `gradient-editor/#FF3414+0,fd8e5e+100` comment                                                                        |
| Navy                      | `#001d38`                                                                    | `.slider_area::before { background: #001d38; opacity: .5 }`, `.contact_action_area::before` (`.7`), `.Estimate_area.overlay:before` (`.94`), counter + footer headings |
| Body ink                  | `#596672`                                                                    | `.single_location p`, paragraph defaults                                                                                                                               |
| Muted                     | `#727272`                                                                    | `.section_title p`                                                                                                                                                     |
| Band (service ground)     | `#f5fbff`                                                                    | `.service_area { background: #f5fbff }`                                                                                                                                |
| Mist                      | `#f9f9ff`                                                                    | light panel ground, 27 declarations                                                                                                                                    |
| Hairline                  | `#eaeaea`                                                                    | `.header-top_area { border-bottom: 1px solid #eaeaea }`                                                                                                                |
| Typeface (only face)      | `Poppins`                                                                    | 8 `font-family: "Poppins", sans-serif` declarations; loaded from Google Fonts, never copied                                                                            |
| Buttons — solid           | square, `18px 42px`, 16px/500, white on `#ff3414`                            | `.boxed-btn3`; hover flips to transparent with a `#ff3414` border and `#ff3414` text                                                                                   |
| Buttons — outline         | square, `18px 44px`, 14px/400, `3px` tracking, uppercase, `#ff3414` on white | `.boxed-btn`; hover fills `#ff3414`                                                                                                                                    |
| Testimonial card          | `border-radius: 10px`, `50px 60px 66px` padding, white on a photo            | `.testmonial_active`                                                                                                                                                   |
| Hero height               | `700px`, `background-size: cover`, centred 60px/600 white headline           | `.single_slider`, `.slider_text h3`                                                                                                                                    |
| Section rhythm            | `120px 0` top/bottom (mobile `50–70px`)                                      | `.transportaion_area`, `.service_area`, `.chose_area`, `.Estimate_area`                                                                                                |
| Correct so far            | —                                                                            | the app never renders `#007bff` / `#6c757d` (Bootstrap reboot colours); they are unreachable in this design                                                            |

## Reference document order (ten bands)

| #   | band                 | detail                                                                                                                                                                                                                                                                                                                                                                                                           |
| --- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | top bar              | email `info@docmed.com`, phone `1601-609 6780`, solid **Get Free Quote** button; 1px `#eaeaea` hairline, white ground                                                                                                                                                                                                                                                                                            |
| 2   | main header          | logo left; nav `home · Services · about · pages · Contact`, where `pages` opens a dropdown (`service details`, `elements`, `blog`, `single-blog`)                                                                                                                                                                                                                                                                |
| 3   | hero                 | 700px photograph under a `#001d38` 50% wash; kicker "For Personal & Business", 60px white headline "Global Logistic Service For Business", solid **Our Services** button                                                                                                                                                                                                                                         |
| 4   | transport pillars    | three columns — `Transportation`, `Live Monitoring`, `Worldwide Service`, each an orange icon + 24px title + lorem blurb, `padding-right: 65px`                                                                                                                                                                                                                                                                  |
| 5   | services             | `#f5fbff` band, centred "Services We Offer" title + subcopy, four image cards in a 2×2 grid (`Ocean Freight`, `Land Transport`, `Air Freight`, `Ocean Freight` again — the reference repeats the first card)                                                                                                                                                                                                     |
| 6   | secure call-out      | photograph + `#001d38` 70% wash; left "100% secure and safe" + blurb, right solid phone button `+10 672 457 356`                                                                                                                                                                                                                                                                                                 |
| 7   | why choose           | two columns: photograph left; "Why Choose Us?" + intro + three bullet reasons + outline **About Us** button right                                                                                                                                                                                                                                                                                                |
| 8   | counters             | dark image strip, four centred counters — `42+` Countries Covered, `97+` Business Success, `2342` Happy Client, `3245` Business Done                                                                                                                                                                                                                                                                             |
| 9   | testimonials         | photograph ground, one white 10px-radius card: quote, avatar, "Robert Thomson / Business Owner", owl-carousel controls (three identical slides in the reference)                                                                                                                                                                                                                                                 |
| 10  | estimate + locations | `#001d38` 94% wash; left "Get free Estimate" + blurb + phone button; right a six-field quote form (`Product type` small/standard/high, `Product size` M/L/Xl, `City of departure`, `City of delivery`, `Name`, `Contact number`) with an outline **Send Estimate** button; below, two location cards (address `600/D, Kings road, Green lane / NewYork-2563`; phone `+10 672 457 356` + `support@logistico.com`) |
| 11  | footer               | four white columns — Services, Company, Industries, Subscribe (email field + button) — then a copyright bar with the mandatory Component Dock credit                                                                                                                                                                                                                                                             |

## Requirements

### Requirement 1: Header

The app SHALL render a sticky two-row header: a top utility bar with the email address, the phone
number and a **Get Free Quote** link to the estimate band, and a main bar with the Cargonaut
wordmark, five primary navigation links and a `Pages` dropdown listing four inner-page labels.

#### Scenario: Visitor opens and closes the mobile navigation

- **GIVEN** the recreation is rendered at any viewport
- **WHEN** the visitor activates the menu control
- **THEN** the control reports `aria-expanded="true"` and a navigation landmark named "Mobile"
  appears with the same five links
- **AND** activating the close control (or following a link) removes it and reports
  `aria-expanded="false"`

#### Scenario: Visitor asks for a quote

- **GIVEN** the header is rendered
- **WHEN** the visitor reads the top bar
- **THEN** a link labelled "Get Free Quote" points at `#estimate`

### Requirement 2: Hero

The app SHALL render a full-bleed photographic hero at least 700px tall under a navy wash, with
the kicker "For Personal & Business", a single level-1 headline "Global Logistic Service For
Business" and a solid `Our Services` call to action pointing at the services band.

#### Scenario: Visitor lands on the page

- **GIVEN** the page has loaded
- **WHEN** the hero is in view
- **THEN** the headline is the only `h1` on the page and both the kicker and the call to action
  are readable against the wash
- **AND** the backdrop image carries descriptive alternative text

### Requirement 3: Transport pillars

The app SHALL render three pillars — `Transportation`, `Live Monitoring`, `Worldwide Service` —
each with a `lucide-react` icon in the brand orange, a level-3 title and the reference's blurb.

#### Scenario: Visitor scans the three capabilities

- **GIVEN** the pillars band is rendered
- **WHEN** the visitor reads it
- **THEN** exactly three level-3 headings and three identical blurbs are present

### Requirement 4: Services grid

The app SHALL render a `#f5fbff` band titled "Services We Offer" holding four service cards, each
with a seeded `picsum.photos` placeholder, a level-3 title and the reference's one-line blurb.

#### Scenario: Visitor compares the four services

- **GIVEN** the services band is rendered
- **WHEN** the visitor reads it
- **THEN** four cards appear ("Ocean Freight" twice, plus "Land Transport" and "Air Freight"),
  and every image URL is a deterministic `picsum.photos` seed — no asset is copied

### Requirement 5: Secure call-out

The app SHALL render a photographic band under a 70% navy wash with the heading "100% secure and
safe", a supporting paragraph and a solid telephone call to action whose `tel:` href strips spaces
from the number.

#### Scenario: Visitor taps the number on a phone

- **GIVEN** the band is rendered
- **WHEN** the visitor activates the phone call to action
- **THEN** the link resolves to `tel:+10672457356`

### Requirement 6: Why Choose Us

The app SHALL render a two-column band pairing a photograph with the heading "Why Choose Us?", an
intro paragraph, three ticked reasons and an outline `About Us` call to action.

#### Scenario: Visitor reads the reasons

- **GIVEN** the band is rendered
- **WHEN** the visitor reads the list
- **THEN** three list items appear, each prefixed by a brand-orange tick icon

### Requirement 7: Counters

The app SHALL render four counters over a navy strip — `42+`, `97+`, `2342`, `3245` — with their
labels `Countries Covered`, `Business Success`, `Happy Client` and `Business Done`, the `+` glyph
in the brand orange and the value in white.

#### Scenario: Visitor reads the social proof

- **GIVEN** the counters band is rendered
- **WHEN** the visitor reads it
- **THEN** each counter shows its value with the optional orange suffix and the label beneath it

### Requirement 8: Testimonials

The app SHALL render a single white 10px-radius testimonial card over a photograph, showing one of
three reference quotes at a time with the author "Robert Thomson", the role "Business Owner", and
previous/next controls that wrap around.

#### Scenario: Visitor steps through the quotes

- **GIVEN** the testimonial card shows the first quote
- **WHEN** the visitor activates "Next testimonial"
- **THEN** the card advances to the second quote
- **AND** activating "Previous testimonial" on the first quote wraps to the third

### Requirement 9: Estimate form

The app SHALL render a `#001d38` band with the heading "Get free Estimate", a telephone call to
action and a six-field quote form: `Product type` (small/standard/high), `Product size` (M/L/Xl),
`City of departure`, `City of delivery`, `Name` and `Contact number`, plus a `Send Estimate`
submit button.

#### Scenario: Visitor submits without contact details

- **GIVEN** the form is untouched
- **WHEN** the visitor activates "Send Estimate"
- **THEN** an alert announces that a name and a contact number are required
- **AND** no confirmation is shown

#### Scenario: Visitor submits complete contact details

- **GIVEN** the visitor has entered a name and a contact number (and may change any select)
- **WHEN** the visitor activates "Send Estimate"
- **THEN** a status message confirms the estimate for that name and number
- **AND** the alert is gone and the chosen select values are preserved

### Requirement 10: Location cards

The app SHALL render two location cards inside the estimate band — one with the address lines
`600/D, Kings road, Green lane` and `NewYork-2563`, one with the phone number and a `mailto:` link
to the support address.

#### Scenario: Visitor looks up the office

- **GIVEN** the estimate band is rendered
- **WHEN** the visitor reads the second card
- **THEN** the support address renders as a `mailto:` link and the street address is split across
  the two reference lines

### Requirement 11: Footer and Component Dock credit

The app SHALL render a four-column white footer (Services, Company, Industries, Subscribe) whose
subscribe field validates that an address was given before confirming, and a copyright bar that
links **Component Dock** at `https://www.componentdock.com/`.

#### Scenario: Visitor subscribes with and without an address

- **GIVEN** the footer is rendered
- **WHEN** the visitor submits the subscribe form with an empty field
- **THEN** an alert asks for an email address
- **AND** submitting a filled field replaces it with a status message naming that address

#### Scenario: Visitor follows the marketplace credit

- **GIVEN** the copyright bar is rendered
- **WHEN** the visitor reads it
- **THEN** a link labelled "Component Dock" points at `https://www.componentdock.com/`

### Requirement 12: Accessibility

The app SHALL use semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), label every
form control (`label`/`aria-label`), expose toggle state with `aria-expanded`, name every icon-only
control with `aria-label`, and mark decorative images `aria-hidden` with an empty `alt`.

#### Scenario: Assistive technology reads the page

- **GIVEN** the page is rendered
- **WHEN** a screen reader walks the landmarks
- **THEN** one `header`, one `main`, one `footer` and seven named sections are announced, and the
  mobile menu control reports its expanded state

## Deliberate deviations from the reference

- **Placeholder imagery.** Every photograph is a deterministic `picsum.photos` seed
  (`cargonaut-hero`, `cargonaut-banner`, `cargonaut-about`, `cargonaut-counter`,
  `cargonaut-testimonial`, `cargonaut-estimate`, `cargonaut-service-1…4`); no asset is downloaded.
- **Icons.** `lucide-react` (Truck, MonitorSmartphone, Globe2, Check, ChevronLeft/Right, Mail,
  MapPin, Menu, Phone, PhoneCall, X) replaces the `font-awesome` / `themify` / `flaticon` subsets.
- **Carousel.** The owl-carousel is reduced to a single card with previous/next controls; the
  three reference slides are identical lorem, so no autoplay is reproduced.
- **Form labels.** The reference repeats "City of departure" three times and lists two unlabelled
  selects; the recreation names them `City of departure` / `City of delivery` and adds `Name` and
  `Contact number` so the submit can be validated.
- **Counters.** Rendered as final values (the reference animates them with a counter plugin); no
  animation dependency is added.
- **Naming and provenance.** "Logistico" never appears in `apps/cargonaut` — the app is Cargonaut,
  and the ColorLib provenance lives only here, in `TEMPLATES.md` and in the pull request.
- **Footer.** The reference credits ColorLib; the recreation's copyright bar credits
  **Component Dock** instead, as every template in this monorepo must.
