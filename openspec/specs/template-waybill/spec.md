# Template: Waybill (Logistics / Transport)

## Purpose

Waybill is a logistics/transport website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free
"Thelogistico" design (see TEMPLATES.md, Bootstrap (216) category), built
under a DIFFERENT name — **Waybill** (a waybill is the document that
accompanies a shipment, naming consignor/consignee and route — squarely in
the logistics domain of the source template; single lowercase word, no
collision with `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md
— verified 2026-08-14) per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a dark-accent logistics landing page: a black top header
with orange phone CTA, a full-bleed truck photo hero with an orange
"Explore Us" button and a floating white freight-quote form (selects +
distance + live cost estimate), a 4-icon services grid, an about split with
team photos, a Road Transport accordion split, a black "complete control of
your shipments" band with numbered logistics offers + video modal, an
orange "Need Help? Get Free quote!" CTA band, a client testimonial slider,
a 3-post news blog strip, a brand-logo carousel, and a near-black
4-widget footer. Waybill recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

> NOTE (prep-stream 2026-08-14): the official preview
> `https://preview.colorlib.com/theme/thelogistico/` is LIVE — fetched HTTP
> 200 (~35 KB HTML + `assets/css/style.css` ~81 KB + bootstrap + owl.carousel
>
> - slicknav + animate + magnific-popup + fontawesome + themify + slick +
>   nice-select, curl-verified) and analyzed for this prep. The TEMPLATES.md
>   screenshot (`thelogistico-colorlib-template.jpg`, 1200×946) was also
>   viewed in a browser; it shows the black header, the truck hero with the
>   floating quote form, the 4-column services grid, and the top of the about
>   split, matching the live render (below-the-fold sections were captured
>   from the live DOM + CSS).

## Design reference (replication findings)

- **Original:** ColorLib "Thelogistico" — free Bootstrap 4 logistics /
  transport website template (source:
  https://colorlib.com/wp/template/thelogistico/; hero copy "Welcome to
  Logistico / A truly global service provider"). The recreation brands
  itself **Waybill** but keeps the same section structure, heading copy
  kinds, and card set.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/thelogistico/` (HTTP 200, ~35 KB
  HTML + `assets/css/style.css` ~81 KB + bootstrap.min.css +
  owl.carousel.min.css + slicknav.css + animate.min.css +
  magnific-popup.css + fontawesome-all.min.css + themify-icons.css +
  slick.css + nice-select.css). Single-page document; section order (1:1):
  1. **Header** — `.header-area.header-sticky` (black): LEFT `.logo`
     "LOGISTICO." white wordmark + orange arrow icon; CENTER
     `.main-menu` (hidden <lg, burger `.slicknav` toggle): **Home ·
     About · Service · Blog (dropdown: Blog · Blog Details) · Elements ·
     Contact** (16px/500, color `#000`, hover orange); RIGHT
     `.header-right-btn` — orange button with phone number **10 (87) 237
     3784** (solid `#f60`, white text). Top utility strip
     `.header-info-left` (phone/social icons, hidden on small screens).
  2. **Hero slider** — `.slider-area.slider-bg1` (CSS:
     `background-image: url(../img/hero/h1_hero1.jpg); background-size:
cover; background-position: center` — full-bleed truck photo, dark
     overlay so text pops). Two columns: LEFT `.hero__caption` (white
     text): eyebrow "Welcome to Logistico" (orange), h1 "A TRULY GLOBAL
     SERVICE PROVIDER" (70px/700 white, line-height 1, Roboto), p "We
     make your cargo transport simple" (24px white), `.slider-btns`:
     **Explore Us** (solid orange `#f60`, uppercase, radius 0, padding
     32px 58px) + **Get a quick offer** (outline/boxed style). RIGHT
     `.form-wrapper` — floating WHITE quote form (`col-xxl-4`): title
     "Get a quick offer" + subtitle "We make your cargo transport
     simple"; fields: **TRUCKLOAD** `<select id="select1">` (Select ·
     Category 1 · Category 2 · Category 3), **COMMODITY** `<select
id="select2">` (Select · Year · week · Days 3), **DISTANCE (MILES)**
     text input (placeholder "Write Distance"); result line
     "Estimate Cost: **$10,400.00**" (orange); submit button.
  3. **Services** — `.services-area` + `.services-wrapper.fix` (white):
     `.section-tittle` heading + 4 `.single-cat.mb-30` cards
     (`col-xl-3 col-lg-4 col-md-6 col-sm-12 p-0`): `.cat-img` orange
     line-icon (services1-4.svg) + `.cat-cap` h5 + blurb + circular
     arrow button (hover effect). NOTE: the live preview shows the
     placeholder title "Commercial Cleaning" on all 4 cards — implementer
     should use logistics service names (Air Freight · Ocean Freight ·
     Road Transport · Warehousing) per the fidelity rule "keep the same
     _kind_ of content".
  4. **About split (visit-one)** — `.visit-one.fix` (white, flex
     align-center): left photo; right: `.section-tittle` eyebrow "About
     Us" (orange) + h2 "A professional transportation business" + copy +
     3 `.visit-team` portrait thumbnails + **Learn More** boxed button
     (white bg, 1px `#f60` border, `#f60` text, uppercase, radius 0,
     padding 18px 44px).
  5. **Road Transport split (visit-two)** — `.visit-two.fix` (white):
     h2 "Road Transport" (eyebrow "Air Freight" h4 above) + `.collapse-
wrapper` accordion (`#accordionExample`, 2 items, no borders, black
     20px/700 headers): **Road Transport** / **Sea Cargo** items with
     lorem-style copy + right image.
  6. **Shipments band (visit-three)** — `.visit-three.fix` (bg
     `#000000`): h2 "We give you complete control of your shipments." +
     `.tailor-offers` numbered offers (`.single-items` "01 Logistic
     Solution …" — 2+ items, orange `#F04506` numbering) + `.video-icon`
     — 100px WHITE circle, radius 50%, orange `#F04506` play icon
     (magnific-popup video modal on click).
  7. **CTA band** — `.wantToWork-area.gray-bg` (CSS: `background:
#f60` — ORANGE): `.wantToWork-caption` h2 "Need Help? Get Free
     quote!" + paragraph + solid button (`.btn` white text on orange).
  8. **Testimonials** — `.testi-tittle` h4 "Client Testimonial" +
     `.h1-testimonial-active` carousel (owl): 2 `.single-testimonial`
     slides — quote text + `.testimonial-founder` (`.founder-img`
     portrait + `.founder-text` name, e.g. "Graham Cracker De…").
  9. **Latest News** — `.home-blog-area.section-padding`:
     `.section-tittle.text-center` h2 "Latest News" + 3 `.single-blogs`
     cards (`.blog-img` + `.blogs-cap.text-center`): date + h5 title —
     "Freight Transport in Alaska: The Haul of the Wild" (June 26,
     2021), "Delivery Your Stuff Quickly For Minimum: Cost Of Price",
     "Perishable Logistics: Cold Chain on a Plane".
  10. **Brand logos** — `.brand-area` (bg `#F8F8F8`): `.brand-active`
      carousel (owl) of 6 `.single-brand` logo images (brand1-4.png).
  11. **Footer** — `.footer-wrapper.gray-bg` + `.footer-area.footer-
padding` (near-black `#071112`): 4 `.single-footer-caption`
      widgets: **Quick Links** (Work · Services · Products · Tips &
      Tricks), **Solution** (Air freight · Ocean freight · Large
      projects · FAQ), **Support** (Submit Ticket · Contact Us),
      **Newsletter** (`.footer-form` email input + send icon + `.footer-
social` icons); `.footer-bottom-area` copyright bar (`.footer-
border`). Copyright bar MUST credit Component Dock (see checklist).

## Design tokens (from assets/css/style.css, verified 2026-08-14)

- Brand orange `#f60` (`.btn` background, `.wantToWork-area` background,
  `.boxed-btn` border + text, hero eyebrow, cost estimate text) — `@theme`
  token.
- Accent red-orange `#F04506` (`.video-icon` color, `.tailor-offers`
  numbering, hover accents).
- Near-black `#071112` (footer-wrapper, visit-three bg; headings `#000`).
- Neutrals: `#fff` (cards, hero text, quote form), `#F8F8F8` (brand-area
  bg), `#f9f9ff` / `#f1f1f1` / `#f8f8f8` (light section backgrounds),
  text grays `#999999`, `#888888`, `#636363` (testimonial), `#b2b2b2`,
  `#6e6575`.
- Font: "Roboto" (body + headings, sans-serif) via Google Fonts;
  "Roboto Condensed" used for a couple of display elements.
- Buttons: SQUARE (border-radius 0!), UPPERCASE text. `.btn` = solid
  `#f60` bg + white text, padding 32px 58px (hero scale); `.boxed-btn` =
  white bg + 1px `#f60` border + `#f60` text, padding 18px 44px, 14px,
  letter-spacing 1px.
- Hero: full-bleed photo bg with dark overlay; h1 70px/700 white
  line-height 1; subtext 24px white; eyebrow orange.
- Section titles: h2 40px/600 Roboto, line-height 1.3, margin-bottom
  12px; orange eyebrow spans.
- Video icon: 100px circle, white bg, radius 50%, `#F04506` icon.
- Accordion: borderless, headers black 20px/700, padding 20px 0 21px.
- Spacing: `.section-padding` (blog area), card columns 3/4/6/12 grid;
  hero buttons 32px 58px; boxed buttons 18px 44px.

## Requirements

### Requirement: Header navigation

The system SHALL render a sticky black header with the "Waybill" logo
(left, white wordmark + orange arrow), centered navigation links (Home ·
About · Service · Blog with dropdown Blog/Blog Details · Elements ·
Contact), and a solid orange phone CTA button ("10 (87) 237 3784") on the
right. On mobile the links SHALL collapse behind a burger toggle that opens
a slide-in panel with the same links.

#### Scenario: Desktop header shows logo, menu and phone CTA

- **GIVEN** the Waybill app is loaded at desktop width
- **WHEN** the header renders
- **THEN** the logo wordmark "Waybill" SHALL be visible on the left with
  an orange arrow icon
- **AND** the menu SHALL show links Home · About · Service · Blog ·
  Elements · Contact
- **AND** a solid orange phone button SHALL be visible on the right
  showing "10 (87) 237 3784"
- **AND** the Blog link SHALL open a dropdown with Blog · Blog Details

#### Scenario: Mobile header collapses to burger menu

- **GIVEN** the Waybill app is loaded at mobile width
- **WHEN** the header renders
- **THEN** the menu links SHALL be hidden behind a burger toggle
- **AND** clicking the burger SHALL open a slide-in panel with the same
  links
- **AND** the panel SHALL be closable via its close control

### Requirement: Hero with quote form

The system SHALL render a full-bleed hero (truck photo background with dark
overlay) with the orange eyebrow "Welcome to Waybill", the h1 "A Truly
Global Service Provider", white subtext "We make your cargo transport
simple", an "Explore Us" solid orange button, a "Get a quick offer" boxed
button, and a floating white quote form (truckload select, commodity
select, distance input, orange estimated-cost line, submit button). The
quote form SHALL validate inputs and block submission until valid.

#### Scenario: Hero presents the logistics pitch and CTA buttons

- **GIVEN** the Waybill app is loaded
- **WHEN** the hero section renders
- **THEN** the eyebrow "Welcome to Waybill" SHALL be shown in orange
- **AND** the h1 SHALL read "A Truly Global Service Provider"
- **AND** the subtext SHALL read "We make your cargo transport simple"
- **AND** an "Explore Us" solid orange button and a "Get a quick offer"
  boxed button SHALL be present

#### Scenario: Quote form estimates cost from inputs

- **GIVEN** the hero quote form is rendered
- **WHEN** the user selects a truckload category, a commodity, and types
  a distance
- **THEN** the form SHALL display an estimated cost line (e.g.
  "$10,400.00") in orange
- **AND** a submit button SHALL be present
- **AND** invalid/empty required fields SHALL block submission with
  per-field errors

### Requirement: Services grid

The system SHALL render a white services section with four responsive
cards, each with an orange line icon, a logistics service title (Air
Freight · Ocean Freight · Road Transport · Warehousing), a blurb, and an
arrow affordance, stacking to one column on small screens.

#### Scenario: Four service cards render with icons and blurbs

- **GIVEN** the services section is rendered
- **WHEN** the section loads
- **THEN** four service cards SHALL be shown in a responsive grid
- **AND** each card SHALL have an orange line icon, a title (Air
  Freight · Ocean Freight · Road Transport · Warehousing), a blurb, and
  an arrow affordance
- **AND** cards SHALL stack to 1 column on small screens

### Requirement: About and Road Transport splits

The system SHALL render an about split (photo left; orange "About Us"
eyebrow, h2 "A professional transportation business", copy, three team
portraits, boxed "Learn More" button right) and a Road Transport split
with a borderless single-open accordion whose items ("Road Transport",
"Sea Cargo") SHALL expand on click and collapse siblings.

#### Scenario: About split shows team and Learn More

- **GIVEN** the about section is rendered
- **WHEN** the section loads
- **THEN** the eyebrow "About Us" and h2 "A professional transportation
  business" SHALL be shown beside a photo
- **AND** three team portraits and a boxed "Learn More" button SHALL be
  present

#### Scenario: Road Transport accordion expands items

- **GIVEN** the Road Transport split is rendered
- **WHEN** the user clicks an accordion header ("Road Transport", "Sea
  Cargo")
- **THEN** the clicked item SHALL expand to show its copy
- **AND** other items SHALL collapse (single-open behavior)

### Requirement: Shipments band with video modal

The system SHALL render a black band (h2 "We give you complete control of
your shipments.", numbered logistic offers with orange numbering, and a
circular white play button) whose play button SHALL open a video modal
with a close control.

#### Scenario: Numbered offers and video play button

- **GIVEN** the black shipments band is rendered
- **WHEN** the section loads
- **THEN** the h2 "We give you complete control of your shipments."
  SHALL be shown with numbered logistic offers ("01 …", "02 …")
- **AND** a circular white play button SHALL be present
- **AND** clicking the play button SHALL open a video modal (or
  equivalent player overlay) with a close control

### Requirement: CTA band, testimonials, news

The system SHALL render an orange CTA band ("Need Help? Get Free quote!"
with copy and a button), a testimonial slider (two quotes with founder
name and portrait, next/prev + dots navigation), and a latest-news section
with three blog cards (image, date, freight/logistics titles).

#### Scenario: Orange CTA band renders

- **GIVEN** the CTA band is rendered
- **WHEN** the section loads
- **THEN** the orange band SHALL show "Need Help? Get Free quote!" with
  supporting copy and a button

#### Scenario: Testimonial slider cycles slides

- **GIVEN** the testimonial section is rendered
- **WHEN** the section loads
- **THEN** a quote with founder name and portrait SHALL be visible
- **AND** the slider SHALL provide next/prev (and/or dots) navigation to
  the second quote

#### Scenario: Latest news shows three posts

- **GIVEN** the news section is rendered
- **WHEN** the section loads
- **THEN** three blog cards SHALL be shown, each with an image, date, and
  title
- **AND** the posts SHALL be titled after freight/logistics topics

### Requirement: Brand logos and footer

The system SHALL render a light-grey brand strip with a carousel of partner
logos, and a near-black footer with four widgets (Quick Links · Solution ·
Support · Newsletter with email input and social icons) plus a copyright
bar that SHALL credit Component Dock by linking
`https://www.componentdock.com/`.

#### Scenario: Brand carousel renders logos

- **GIVEN** the brand section is rendered
- **WHEN** the section loads
- **THEN** a strip of partner logos SHALL be shown on a light-grey
  background

#### Scenario: Footer shows widgets and Component Dock credit

- **GIVEN** the footer is rendered
- **WHEN** the section loads
- **THEN** four widgets SHALL be shown: Quick Links · Solution · Support ·
  Newsletter (email input + social icons)
- **AND** the copyright bar SHALL credit Component Dock with a link to
  `https://www.componentdock.com/`
- **AND** no ColorLib/attribution references SHALL appear in the app code

### Requirement: Design tokens

The system SHALL define the brand orange `#f60` as a theme token and apply
it to hero buttons, the CTA band, the phone CTA, and the cost estimate;
SHALL load the Roboto font via Google Fonts in `index.html`; and SHALL use
square corners (radius 0) and uppercase text on all buttons.

#### Scenario: Token application

- **GIVEN** the Waybill app is implemented
- **WHEN** the stylesheet is inspected
- **THEN** the brand orange `#f60` SHALL be defined as a theme token and
  used by the hero buttons, CTA band, phone CTA, and cost estimate
- **AND** the "Roboto" font SHALL be loaded via Google Fonts in
  `index.html`
- **AND** all buttons SHALL use square corners (radius 0)

## Verification checklist

- [ ] `openspec/specs/template-waybill/spec.md` — Gherkin scenarios above
      map 1:1 to vitest scenarios (one `describe` per component).
- [ ] `npm run spec:validate` passes for the new spec.
- [ ] Replication fidelity: section order 1:1 (header → hero + quote form
      → services grid → about split → road transport accordion → black
      shipments band + video → orange CTA band → testimonials → latest
      news → brand logos → footer); tokens `#f60` / `#F04506` /
      `#071112`; Roboto font; ALL buttons SQUARE (radius 0) + UPPERCASE.
- [ ] Placeholder images: `https://picsum.photos/seed/waybill-<n>/<w>/<h>`
      (deterministic per template; hero truck scene, about photo,
      transport split photos, 3 blog images, 3 team portraits, 2
      testimonial portraits, 4-6 brand logos per the seed-screening
      method; verify seeds render plausible scenes before committing).
- [ ] Icons from lucide-react (arrow, play, send, truck/box glyphs,
      social brands as inline SVG paths — lucide removed brand icons).
- [ ] Quote form: selects + distance input + computed estimate; zod
      validation with per-field errors; submit blocked until valid.
- [ ] Accordion: single-open behavior needs interaction tests; video
      modal open/close tested (fake timers not required).
- [ ] Testimonial + brand sliders: next/prev + dots navigation tested.
- [ ] Footer credit line MUST link `https://www.componentdock.com/` (no
      ColorLib attribution anywhere in app code — provenance lives only in
      the spec, TEMPLATES.md, and the PR).
- [ ] 100% coverage lines/functions/branches/statements; `scripts/
verify-app.sh waybill` green; full gate via CI on merge.
- [ ] PR description: source template (ColorLib Thelogistico), preview
      URL (`https://preview.colorlib.com/theme/thelogistico/`), design
      tokens used, what differs (renames, placeholder images, services
      grid titles — source shows placeholder "Commercial Cleaning" ×4,
      use logistics service names instead).
