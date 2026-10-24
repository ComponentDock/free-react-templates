# Template: Bistro (Food & Dining / Restaurant)

## Purpose

A one-page restaurant site built on white space and a single hot-orange accent: a
transparent header over a full-bleed food photograph, a hero whose 87px display headline
sits on the left while cut-out plated dishes bleed in from the right, then an
alternating rhythm of white copy blocks and photo-backed bands — an about block with
three icon captions, a menu mosaic under a dark hover overlay, a "Book A Table" card that
floats on a photo band, three service cards, a subscribe/search band, three blog cards
whose caption boxes overhang their images, and a footer that repeats the photo band.

Recreation of the ColorLib "Allfood" template
(https://colorlib.com/wp/template/allfood/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

- **Source slug:** `allfood`
- **ColorLib page:** https://colorlib.com/wp/template/allfood/
- **Live preview:** https://preview.colorlib.com/theme/allfood/ (200, 48,989 B; the
  slug-only path is the demo, assets resolve under `assets/…`, not `css/…`)
- **Diagnostic page title:** `Restaurant | Template`
- **New name:** `bistro` (apps/bistro, `@free-react-templates/bistro`) — a single lowercase
  word that differs from the source name, has no collision in `apps/` and none in
  `openspec/specs/`
- **Deploy target:** https://bistro.free.componentdock.com (`apps/bistro/public/CNAME`,
  `homepage` in `apps/bistro/package.json`)
- **Category:** Food & Dining / Restaurant — TEMPLATES.md `## Restaurant (41)`, row
  **2666**. The same design is listed a second time at row **330** under
  `## Bootstrap (216)`; both rows link `bistro`, so this is one app standing for one
  design listed twice (`ROW-MULTI`), not two templates.
- **Screenshot reference:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/allfood-free-template.jpg — **57,957 B**,
  served as **AVIF** (`ISO Media, AVIF Image`), 1200 × 946. It shows the top of the page
  only: white header with the "All Food" logo and an outlined orange "Order Online"
  button, the orange eyebrow "Discover Your Teste", the two-line near-black headline
  "We belive good food offer great smile", a paragraph, the solid orange "Resurvation"
  button, and a light food photograph occupying the right half; below it the white about
  band opens with "Discover Your Test" / "We Provide Good Food…" and a chef photograph on
  the right. The 49px section headings, the photo bands and the footer are only visible in
  the live DOM, which is why the preview — not the thumbnail — is the authority here.

### Why this spec was rewritten

`apps/bistro` shipped recreating this design, but the spec it shipped with named a
different one — ColorLib **"Accordion 02"** (`/template/accordion-02/`), a menu-accordion
demo, with a warm-cream `#fcf8f2` / amber `#d4a373` palette and an "Our Specialties"
Breakfast–Lunch–Dinner–Drink–Wine accordion that the app does not contain. The spec ↔ row
census (`docs/spec-row-mismatch.py` output in `docs/spec-row-mismatch.md`) flagged the
disagreement (`spec=accordion-02 rows=allfood`), and its copy adjudication searched the
app's own strings in both candidate previews: `About Our Restaurant`, `Delicious Food`,
`Best Chef` and `Quality Food` all occur in the Allfood body and in none of the accordion
demo — verdict `SPEC-STALE`. This spec is therefore the measured Allfood reference, and
`docs/templates/bistro/` was rewritten with it (a corrected spec with a stale brief still
misdirects the implementer). The folder name stays: `bistro` does not equal the source
slug, so rule 5 is satisfied and no rename is needed.

## Reference readings (2026-10-24, `curl -4`)

`preview.colorlib.com` answers IPv4 only from this host — plain `curl` (IPv6 first) hangs,
so every probe below passes `-4`. Sizes are wire bytes; hashes are the canonical body.

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/allfood/` page (also `/index.html`) | 48,989 | — (page bodies are request-unstable; bytes only) |
| `theme/allfood/assets/css/style.css` (token authority) | 58,090 | `8e1b11a8bb1ed4284c3b144bf92af51141f2640bbe6c5d2fd236be10e9206e21` |
| `theme/allfood/assets/css/bootstrap.min.css` (vendor frame) | 31,282 | — (no design tokens) |
| `theme/allfood/assets/css/gijgo.css` (date/time picker) | 55,521 | — (vendor palette `#2196f3`, never painted on this page) |
| `theme/allfood/assets/css/animate.min.css` (vendor) | 34,408 | — |
| `theme/allfood/assets/css/magnific-popup.css` (vendor) | 4,213 | — |
| `theme/allfood/assets/css/nice-select.css` (select skin) | 3,881 | — (`#999` ×5, `5px` radius) |
| `theme/allfood/assets/css/fontawesome-all.min.css` (icon face) | 3,231 | — |
| `theme/allfood/assets/css/slicknav.css` (mobile menu) | 2,506 | — |
| `theme/allfood/assets/css/slick.css` (slider) | 1,776 | — |
| `theme/allfood/assets/css/themify-icons.css` (icon face) | 1,058 | — |
| `theme/allfood/assets/css/flaticon.css` (icon face) | 1,005 | — |
| `theme/allfood/assets/css/owl.carousel.min.css` (linked, unused) | 183 | — |
| screenshot (above) | 57,957 | — |

- **No archive twin:** `https://preview.colorlib.com/downloads/free/allfood.zip` answers
  **404** (9-byte body), so the live preview is the sole DOM/CSS reference. That is not an
  unreachable reference — the page, its sheet and every image path are live and were read.
- **`measure-reference-tokens.py --slug allfood` reports `rebuilt: False`** — the demo is
  the original 2019-era build, so a mismatch with the shipped app is DRIFT, not a
  redesign. Vendor sheets were censused separately and are excluded from the tokens below:
  Bootstrap (`#007bff` ×10, `#6c757d` ×20), gijgo (`#2196f3` ×6) and nice-select (`#999`)
  contribute no painted colour here.

## Design tokens (measured from `assets/css/style.css`, 58,090 B)

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ff5600` | 30 declarations — `.btn` background, `.section-tittle span`, `.slider-area .hero__caption span`, header `li:hover>a`, active `.nav-tabs` link, `.g-caption span`, blog `.blog-cap` hover fill, `.border-btn` border, `#back-top` |
| Accent hover (sweep fill) | `#e74d00` | `.btn::before` — the button's fill slides in on hover (`transform: scaleX(0)` → `1`) |
| Band tint / field fill | `#f9f9ff` | 27 declarations — `.nice-select`, `.single-input`, `.single-textarea`, `.progress-table`, generic form fields |
| Navy (secondary brand) | `#1f2b7b` | 20 declarations — `.genric-btn.primary`, ordered lists, switch fills, blockquote border |
| Lilac (hairline) | `#f0e9ff` | 12 declarations — sidebar widget borders, pagination borders |
| Ink (headings) | `#212025` | 11 declarations — `h1…h6`, `.section-tittle h2`, `.about-low-area .about-caption p`, `.blogs-area .blog-cap h4` |
| Muted | `#999999` | 10 declarations — meta text, placeholders, `.nice-select` current value |
| Slate | `#415094` | 7 declarations — generic-button text, table headers |
| Secondary chromatics | `#4cd3e3` (7), `#38a4ff` (6), `#f4e700` (6), `#f44a40` (6) | generic `.genric-btn` variants only — not on this page's bands |
| Paragraph navy | `#10285d` | default `p` colour (16px / 30px) |
| Nav link ink | `#091a23` | `.main-menu ul li a`, hover `#ff5600` |
| Footer link | `#012f5f` | `.footer-tittle ul li`; hover `#ff5600` + `padding-left: 5px` |
| Footer social | `#848493` | `.footer-social a` (14px), hover `#fff` |
| Blog caption surface | `#f7f9f8` | `.blog-cap` background; hover flips the whole box to `#ff5600` with white text |
| Blog meta | `#828fa3` | `.blog-cap span` (14px, uppercase) |
| Preloader | `#f7f7f7` | `.preloader` background, orange arc |
| Typeface (display) | `Josefin Sans` | 5 declarations — `h1…h6`, `.main-menu a`, `.about-area3 … button`, `.footer-tittle h4`; imported 300–700 |
| Typeface (body) | `Poppins` | 2 declarations — `body` (14px), `p` (16px / 30px); imported 300–700 |
| Radii | `6px`, `5px`, `10px`, `50px`, `50%` | `6px` `.btn`; `5px` `.blog-cap`, `.nice-select`, `.border-btn`; `10px` `.booking-wrap`; `50px` `.about-area3 form.search-box`; `50%` `#back-top`, avatars |
| Type scale | 87 / 49 / 50 / 30 / 20 / 16 px | `.hero__caption h1` 87px 700; `.section-tittle h2` 49px 600; `.g-caption h4` 50px 700; `.g-caption span` 30px; `.blog-cap h4` 20px 500; `p` 16px |

**Buttons.**

- `.btn` — solid `#ff5600`, white text, 16px / 400, `letter-spacing: 1px`,
  `padding: 27px 44px`, `border-radius: 6px`, hover sweep fill `#e74d00`. Hero and header
  variants only widen the padding (`.hero-btn` 30px 43px, `.header-btn` 30px 45px).
- `.boxed-btn` — white ground, `#ff5600` text, `1px solid #ff5600`, 14px, uppercase,
  `letter-spacing: 3px`, `padding: 18px 44px`; hover inverts to solid orange / white text.
  This is the pattern behind the screenshot's outlined "Order Online" pill.
- `.border-btn` — outlined orange, `border-radius: 5px`, `padding: 19px 47px`, text
  `#464d65`; hover fills orange bottom-up (`scaleY`).
- Tabs — active `.nav-tabs .nav-link` is a `#ff5600` pill (`padding: 5px 22px`, 16px white
  text) with a 15px orange square rotated 45° parked under it (`bottom: -8px`).

**Section backgrounds.** The page alternates white copy blocks with full-bleed photographs.
The photographs are not in the stylesheet: each band carries `data-background` and the
bundle's JS paints it, while `.section-bg` only fixes `background-size: cover` +
`center center` + `no-repeat`.

| band | source hook | treatment |
| --- | --- | --- |
| hero | `.single-slider.slider-height` | `background-image: url(../img/hero/h1_hero.png)`, `min-height: 1080px` (900/700/600/600 down the breakpoints), cover/center — a light, mostly-white food photograph |
| menu mosaic | `.gallery-top.section-bg.pt-90.pb-40` | `data-background="assets/img/gallery/section_bg01.png"` |
| booking | `.booking-area.section-bg.pt-120.pb-130` | `data-background="assets/img/gallery/section_bg04.png"` |
| subscribe | `.about-area3.pt-180.pb-170.section-bg` | `data-background="assets/img/gallery/section_bg03.png"` |
| footer | `.footer-area.section-bg` | `data-background="assets/img/gallery/section_bg02.png"` |
| mosaic tiles | inline `style="background-image: url(assets/img/gallery/galleryN.png)"` | 18 tiles from four images, `big-img` 730px / `smoll-img` 365px tall |

Recreation rule: **never copy those images.** Use deterministic placeholders
(`https://picsum.photos/seed/bistro-<slug>/<w>/<h>`) and keep the same tonal role — light
photograph for the hero, darker photographs under the menu, booking, subscribe and footer
bands with enough scrim for white/ink text.

## Section inventory (order 1:1 with the reference)

| # | band | source hooks | what it renders | app component |
| --- | --- | --- | --- | --- |
| 1 | header | `.header-area.header-transparent`, `.main-header`, `.header-sticky`, `.header-right-btn` | logo left; nav `Home · About · Menu · Blog▾ · Element · Contact`; outlined orange CTA at the right; absolute over the hero, fixed white sticky bar on scroll | `Header` |
| 2 | hero slider | `.slider-area`, `.slider-active`, `.single-slider.slider-height`, `.hero__caption` | orange eyebrow, 87px headline, paragraph, solid orange CTA, slide controls | `HeroSlider` |
| 3 | about (low) | `.about-low-area.section-padding30` | photograph + eyebrow "Discover Your Test" + 49px heading "We Provide Good Food For Your Family!" + paragraph + three icon captions (45px icon, 14px caption) | `About` |
| 4 | menu mosaic | `.gallery-area`, `.gallery-top.section-bg`, `.nav-tabs`, `.single-gallery`, `.g-caption` | photo band with eyebrow "Our Offerd Menu" + white 49px heading "Some Trendy And Popular Courses Offerd" and three centred tabs (Special Lunch / Brakefirst / Dinner), then a 4-column mosaic of tall and short tiles; each tile darkens to `rgba(11,14,13,0.702)` and reveals an orange eyebrow ("Delicious Food"), a price line and "Order Now" | `Gallery` |
| 5 | about 2 | `.about-area2.section-padding30` | mirrored photograph + caption block (`padding-left: 50px`), 16px / 500 lead, 16px / 300 follow-up | `AboutSecond` |
| 6 | booking | `.booking-area.section-bg`, `.booking-wrap` | photo band, eyebrow "About Our Restaurant" + 49px "Book A Table", then a white card (`radius 10px`, `padding 70px 60px 40px`, `box-shadow 0 8px 79px rgba(0,0,0,.08)`) holding Date / Time fields (65px, `#f9f9f9`, `radius 5px`, icon inset 49px) and a guests select, plus the orange submit | `BookingForm` |
| 7 | services | `.our-services`, `.single-services`, `.services-cap` | eyebrow "Servicees We Offer" + 49px "Our Best Services", three cards (`padding: 79px 23px`) that lift to `box-shadow 0 10px 30px rgba(133,66,189,.1)` on hover — Best Chef / Quality Food / Perfect Cook | `Services` |
| 8 | subscribe | `.about-area3.section-bg.pt-180.pb-170` | photo band, eyebrow "About Our Restaurant" + 49px heading + paragraph, then a `radius 50px` search-box row: 60px borderless input (73% width, placeholder `#616875`) + orange 60px button (27%) | `Subscribe` |
| 9 | blog | `.blogs-area.section-padding30`, `.single-blogs`, `.blog-cap` | eyebrow "Our New Blog News" + 49px "Our Recnet News", three cards whose caption box (`#f7f9f8`, `radius 5px`, 94% width, `bottom: -63px`, `right: 0`) carries an uppercase `#828fa3` date and a 20px / 500 title; hovering the card fills the box `#ff5600` and turns the text white | `BlogSection` |
| 10 | footer | `.footer-area.section-bg`, `.footer-padding`, `.footer-tittle`, `.footer-bottom`, `.footer-social` | photo band: logo + blurb, then Navigation (Home, Events, Testimonial, Categories, Contacts), Useful Links (Registration, Login, Policy, Terms & Conditions) and a 6-image Instagram grid; bottom row: copyright + "Follow Us" socials. The reference's credit line is replaced by the Component Dock link | `Footer` |

## Requirements

### Requirement: Header and primary navigation

The template SHALL render a header that sits over the hero and becomes a solid sticky bar
once the page scrolls, with the wordmark on the left, the primary navigation centred and a
call-to-action at the right.

#### Scenario: Transparent header over the hero

- **GIVEN** the page has just loaded at the top
- **WHEN** the visitor inspects the header
- **THEN** the navigation is readable directly over the hero photograph
- **AND** an outlined orange call-to-action button is visible at the right edge

#### Scenario: Sticky bar after scroll

- **GIVEN** the visitor has scrolled past the hero
- **WHEN** the header is inspected
- **THEN** it is pinned to the top with a white background and a soft shadow
- **AND** the navigation links are still operable

#### Scenario: Blog submenu

- **GIVEN** the visitor hovers or focuses the "Blog" item
- **WHEN** the submenu opens
- **THEN** its child links are revealed on a white panel with a soft shadow
- **AND** each child link turns orange on hover

#### Scenario: Mobile navigation

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the visitor activates the menu toggle
- **THEN** the primary links are reachable from the toggle
- **AND** the toggle exposes an accessible name and expanded state

### Requirement: Hero band

The template SHALL render a full-bleed hero with a light food photograph, an orange
eyebrow, a display headline, a supporting paragraph and a solid orange call-to-action.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero shows an eyebrow, a single `h1`, a paragraph and a call-to-action
- **AND** the `h1` is set in the display typeface at the 87px desktop scale, collapsing to
  60/50/35/27px at the reference's breakpoints

#### Scenario: Hero call-to-action

- **GIVEN** the visitor is on the hero
- **WHEN** they activate the call-to-action
- **THEN** focus moves to the booking band
- **AND** the control is a real link or button with an accessible name

#### Scenario: Slides are operable

- **GIVEN** the hero holds more than one slide
- **WHEN** the visitor activates the next or previous control
- **THEN** the active slide changes
- **AND** slide indicators expose their selected state

### Requirement: About band with icon captions

The template SHALL render an about band pairing a photograph with an eyebrow, a 49px
heading, a paragraph and three icon captions.

#### Scenario: Captions render with icons

- **GIVEN** the visitor reaches the about band
- **THEN** three captions are listed beneath the paragraph
- **AND** each caption carries an icon at the 45px scale and a 14px label

### Requirement: Menu mosaic band

The template SHALL render the menu band on a darkened photo backdrop: an orange eyebrow, a
white heading, a centred tab row and a mosaic of tall and short tiles whose hover state
reveals a caption.

#### Scenario: Mosaic layout

- **WHEN** the menu band renders
- **THEN** the tiles form a multi-column mosaic in which some tiles span two rows
- **AND** every tile is an image with an empty `alt`, because the caption carries the name

#### Scenario: Hover caption

- **GIVEN** the visitor points at or focuses a tile
- **WHEN** the overlay is shown
- **THEN** the tile darkens and an orange eyebrow plus a white title appear
- **AND** the overlay is also reachable by keyboard focus

#### Scenario: Tabs

- **GIVEN** the menu band renders its tabs
- **WHEN** a tab is active
- **THEN** it is painted in the brand orange with white text
- **AND** the active tab is announced as selected

### Requirement: Second about band

The template SHALL render a mirrored about band — photograph on one side, caption block
inset by 50px on the other — with a lead line and a closing line.

#### Scenario: Mirrored about band renders

- **GIVEN** the visitor scrolls past the menu mosaic
- **THEN** the second about band pairs a photograph with a caption block offset to the
  opposite side of the first about band
- **AND** the caption block carries a 16px / 500 lead line and a 16px / 300 closing line

### Requirement: Booking band

The template SHALL render the reservation band on a photo backdrop: an orange eyebrow, a
heading and a white card holding the reservation fields and an orange submit control.

#### Scenario: Card treatment

- **WHEN** the booking band renders
- **THEN** the fields sit on a white card with the reference's 10px radius and deep soft
  shadow
- **AND** the field surfaces use the `#f9f9f9` / 5px-radius treatment

#### Scenario: Required fields are labelled and validated

- **GIVEN** the visitor submits an empty or invalid reservation
- **WHEN** the form is submitted
- **THEN** each offending field shows a message tied to it by `aria-describedby`
- **AND** focus or an alert announces the failure

#### Scenario: Successful reservation

- **GIVEN** every field is valid
- **WHEN** the visitor submits
- **THEN** a confirmation message replaces or follows the form
- **AND** no request leaves the page

### Requirement: Services band

The template SHALL render three service cards under an eyebrow and a heading, each with an
icon, a title and a paragraph, lifting on hover.

#### Scenario: Three service cards

- **WHEN** the visitor reaches the services band
- **THEN** exactly three cards render beneath the eyebrow and the 49px heading
- **AND** each card pairs an icon with a title and a paragraph

#### Scenario: Card hover lift

- **GIVEN** the visitor points at a service card
- **WHEN** the hover state applies
- **THEN** the card lifts on a soft shadow without shifting the surrounding grid

### Requirement: Subscribe band

The template SHALL render a photo-backed subscribe band with an eyebrow, heading,
paragraph and a pill-shaped input/button row.

#### Scenario: Subscribe validation

- **GIVEN** the visitor submits an empty or malformed address
- **WHEN** the form is submitted
- **THEN** an inline error explains what is wrong
- **AND** a valid address produces a confirmation message

### Requirement: Blog band

The template SHALL render three blog cards whose caption boxes overhang the images and
carry an uppercase date and a title, flipping to the brand orange on hover.

#### Scenario: Caption overhang

- **WHEN** the blog band renders
- **THEN** each caption box overlaps the bottom edge of its image
- **AND** the date is uppercase meta text and the title is a display-face heading

#### Scenario: Hover state

- **GIVEN** the visitor points at a card
- **WHEN** the hover state applies
- **THEN** the caption box fills with the brand orange
- **AND** the title and date switch to white

### Requirement: Footer

The template SHALL render a photo-backed footer with the wordmark, a short blurb, a
Navigation column, a Useful Links column, an Instagram grid and a bottom row carrying the
copyright and social links.

#### Scenario: Columns render

- **WHEN** the footer renders
- **THEN** the Navigation and Useful Links columns list their links
- **AND** the Instagram grid shows six square images

#### Scenario: Attribution

- **GIVEN** the visitor scrolls to the bottom
- **THEN** the footer displays a link to `https://www.componentdock.com/` ("Component Dock")
- **AND** the reference's own credit line is not reproduced

### Requirement: Design tokens are applied through the theme

The application SHALL define the measured palette and typefaces in `@theme`
(`apps/bistro/src/index.css`) and consume them through utilities: brand `#ff5600`, hover
`#e74d00`, ink `#212025`, paragraph navy `#10285d`, band tint `#f9f9ff`, display face
`Josefin Sans`, body face `Poppins`, and the 6 / 5 / 10 / 50px radius scale.

#### Scenario: No off-palette colours

- **WHEN** every non-test stylesheet and component under `apps/bistro/` is inspected
- **THEN** no accent colour outside the measured palette is introduced
- **AND** hovers reuse the listed values rather than inventing shades

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/bistro/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, the source
template's name, or an image/font asset copied from the reference — code, comments, CSS,
markup, metadata and filenames included. Provenance lives only in this spec,
`TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation
SHALL credit Component Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/bistro/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

#### Scenario: Placeholder imagery only

- **WHEN** the image sources under `apps/bistro/` are inspected
- **THEN** they resolve to deterministic placeholder URLs
- **AND** no reference asset path (`assets/img/…`) is reproduced

## Verification checklist

- [ ] Spec validation passes (`npm run spec:validate`)
- [ ] Per-app checks pass (`scripts/verify-app.sh bistro`)
- [ ] 100% test coverage maintained (lines / functions / branches / statements)
- [ ] Section order matches the inventory above, hero → about → menu → about 2 → booking →
      services → subscribe → blog → footer
- [ ] Palette and typefaces read back as `#ff5600` / `#e74d00` / `#212025` / `#10285d` and
      `Josefin Sans` / `Poppins`
- [ ] Footer links `https://www.componentdock.com/`
- [ ] No ColorLib provenance inside `apps/bistro/`
