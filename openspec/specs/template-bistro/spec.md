# Template: Bistro (Restaurant / Food)

## Purpose

Bistro is a single-page restaurant website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Allfood" free
template (source: https://colorlib.com/wp/template/allfood/), built under a
DIFFERENT name (**Bistro** — a small, casual European restaurant; a fitting
food-industry word per the monorepo naming mandate — never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a light, airy restaurant site: a sticky white header (logo
left, nav right, outlined "Order Online" button far right) over a full-width
hero slider with a photo backdrop (kicker + big display headline + CTA), then
an about section (icon caption list + chef photo), a large mosaic food gallery
(10 tiles, hover overlay captions), a second about block, a "Book A Table"
reservation section on a photo background (date/time pickers + person select),
a three-card services section, a subscribe band on a photo background, a
three-card news/blog section, and a photo-background footer. Bistro recreates
that structure 1:1 with matching layout, colors, typography, and content kinds
(no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Allfood" is FORBIDDEN as the app name.
> **Bistro** is the new, original name — single lowercase word, no collision
> with `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md (verified
> 2026-08-09). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Allfood". Listed in TEMPLATES.md under **Bootstrap
  (216)** (line 330). Free restaurant template (demo pages: index, about,
  menu, blog, blog_details, elements, contact).
- **Live preview DOM — REACHABLE (verified 2026-08-09):**
  `https://preview.colorlib.com/theme/allfood/` returned HTTP 200 (49KB HTML)
  - `assets/css/style.css` (58KB). Structure, copy, and tokens below are from
    the live DOM + stylesheet. Screenshot
    (`allfood-free-template.jpg`, 1200×946, browser-verified 2026-08-09)
    confirms the light aesthetic: white hero, light-gray secondary section,
    orange accent.
- **Visual design (screenshot + live DOM):** light theme with an appetizing
  orange accent. White hero with a large plated-dish photo on the right side
  of the slide; "Discover Your Teste" [sic — typo in original] kicker in
  orange; huge display headline "We belive good food offer great smile" [sic];
  solid orange "Resurvation" [sic] button + outlined "Order Online" button in
  the header. Below: white/light-gray sections, photo-backdrop sections
  (booking, subscribe, footer use soft PNG backgrounds), big-serif section
  titles with orange kickers.
- **Section order (1:1 from live DOM):**
  1. **Header** — sticky white bar: logo (fork & knife mark + wordmark) left;
     nav right (Home, About, Menu, Blog ▾ [Blog Details, Element], Contact);
     outlined orange "Order Online" button far right. Sticky on scroll
     (`.header-sticky`/`.sticky-bar`, white bg + shadow).
  2. **Hero slider** (`.slider-area`, `.slider-height` — photo backdrop
     `h1_hero.png`, min-height 1080px desktop / 600px mobile) — owl-carousel
     with 2 slides; per slide: orange kicker "Discover Your Teste", H1 "We
     belive good food offer great smile" (~87px desktop, Josefin Sans 700),
     lorem paragraph, solid orange "Resurvation" button (`.btn.hero-btn`).
     Carousel nav (prev/next arrows + dots).
  3. **About** (`.about-low-area.section-padding30`) — kicker "About Our
     Restaurant", H2 "We Provide Good Food For Your Family!", two caption
     paragraphs, icon + caption list (`.single-caption`: 45px icon + small
     caption line, e.g. quality/freshness items), chef photo on the right
     (`.about-img`).
  4. **Gallery** (`.gallery-area`) — header band `.gallery-top` on photo bg
     `section_bg01.png` (pt-90 pb-40) with kicker "Our Offerd Menu" [sic] and
     H2 "Some Trendy And Popular Courses Offerd" [sic]; mosaic of 10 food
     tiles (`.gallery-box` rows: big tiles 730px tall + small tiles 365px
     alternating), each tile = cover image + hover overlay
     `rgba(11,14,13,0.702)` revealing centered caption: orange span
     "Delicious Food" + white H4 (~50px).
  5. **About 2** (`.about-area2.section-padding30`) — H2 "We Provide Good
     Food For Your Family!" with `.pera-top` (weight 500) + `.pera-bottom`
     (weight 300) paragraphs + image.
  6. **Booking** (`.booking-area.section-bg` pt-120 pb-130, photo bg
     `section_bg04.png`) — kicker "About Our Restaurant", H2 "Book A Table",
     reservation form: name + email inputs, date picker + time picker
     (gijgo-style), Person select (Person 1–4), solid orange "Book Now"
     button.
  7. **Services** (`.our-services.section-padding30`) — kicker "Servicees We
     Offer" [sic], H2 "Our Best Services", 3 cards: **Best Chef**, **Quality
     Food**, **Perfect Cook** — each with an icon + short lorem paragraph.
  8. **Subscribe** (`.about-area3` pt-180 pb-170, photo bg `section_bg03.png`)
     — kicker "About Our Restaurant", H2 "We Provide Good Food For Your
     Family!", lorem paragraph, rounded pill search-box form (`.search-box`
     radius 50px): 60px-tall text input + solid orange "Subscribe" button
     (`.search-form button`, width 27%).
  9. **Blogs** (`.blogs-area.section-padding30`) — kicker "Our New Blog
     News", H2 "Our Recnet News" [sic], 3 blog cards: photo + overlapping
     caption box (`.blog-cap` bg `#f7f9f8`, radius 5px, absolutely positioned
     bottom -63px overlapping the image) with uppercase date line ("23 Dec,
     2020") + title ("Addiction When Food Plate Becomes" style); hover →
     caption box fills orange, text turns white.
  10. **Footer** (`.footer-area.section-bg`, photo bg `section_bg02.png`) —
      columns: **Navigation** (Home, Events, Testimonial, Categories,
      Contacts), **Useful Links** (Registration, Login, Policy, Terms &
      Conditions), **Instagram Feed** (thumbnail grid), social icons;
      copyright bar.
- **JS behaviors (original):** sticky header on scroll; hero owl-carousel
  (auto-play slides + arrows/dots); hover overlay reveal on gallery tiles and
  blog captions; date/time pickers in the booking form; smooth button hover
  sweep (scaleX/scaleY fill). Recreate: sticky header (`position:sticky` or
  scroll listener per repo conventions), slide rotation with simple React
  state + interval, CSS hover transitions. Booking form is presentational
  (no backend) — validate fields, no submission needed.

## Design tokens (verified from live stylesheet `assets/css/style.css`)

- **Brand color:** `#ff5600` (warm orange) — primary button bg, section-title
  kickers, nav link hover, gallery caption span, blog hover fill, date badge,
  preloader ring, back-to-top button. Button hover darken: `#e74d00`.
- **Text:** headings `#212025` (near-black, Josefin Sans 500–700); body
  `#10285d` (dark navy) with section-level overrides to `#212025`; footer link
  gray `#848493`; blog meta `#828fa3`.
- **Fonts:** headings **Josefin Sans** (300–700), body **Poppins** (300–700)
  — loaded via Google Fonts `<link>` in `index.html` (original uses
  `@import` in style.css).
- **Buttons:**
  - Primary `.btn` — solid `#ff5600`, white text, radius **6px**, padding
    ~27px 44px (hero variant 30px 43px, header 30px 45px), letter-spacing
    1px; hover = sweep-fill overlay `#e74d00`.
  - Outline `.border-btn` — 1px solid `#ff5600`, transparent bg, dark text
    `#464d65`, radius **5px**, padding ~19px 47px, capitalize; hover =
    sweep-fill `#ff5600` (text stays dark until fill completes).
  - Boxed `.boxed-btn` — white bg, 1px `#ff5600` border, orange text,
    uppercase, letter-spacing 3px (used on inner pages).
- **Section titles:** `.section-tittle` — kicker span 16px weight 500
  `#ff5600` above H2; H2 49px desktop (42/31/24 responsive), `#212025`,
  weight 600, line-height 1.3.
- **Section backgrounds:** white / `#f7f9f8`-family light grays for content
  sections; photo backdrops via `data-background` PNGs for gallery-top
  (`section_bg01.png`), footer (`section_bg02.png`), subscribe
  (`section_bg03.png`), booking (`section_bg04.png`) and the hero
  (`h1_hero.png`). Recreate photo backdrops with subtle seeded picsum images
  (or soft light tints if a photo is not needed for fidelity — see
  Placeholder images).
- **Spacing rhythm:** content sections `padding: 195px 0 140px` desktop
  (`.section-padding30`, ~65px mobile); gallery-top pt-90 pb-40; booking
  pt-120 pb-130; subscribe pt-180 pb-170; footer ~150px top. Hero min-height
  1080px desktop.
- **Radii:** buttons 5–6px; blog caption box 5px; subscribe pill form 50px;
  gallery tiles square.
- **Blog card:** caption box `#f7f9f8`, radius 5px, absolute bottom -63px,
  width 94%, right 0; hover → bg `#ff5600`, text white.
- **Placeholder images (never copy ColorLib assets):**
  - hero slide → `https://picsum.photos/seed/bistro-hero/1920/1080`
  - about chef photo → `https://picsum.photos/seed/bistro-chef/600/700`
  - gallery tiles → `https://picsum.photos/seed/bistro-dish-<n>/600/730`
    (big) and `/600/365` (small) for n in 1..10
  - about2 image → `https://picsum.photos/seed/bistro-kitchen/700/500`
  - blog cards → `https://picsum.photos/seed/bistro-blog-<n>/600/400`
  - section backdrops → subtle seeded images
    (`bistro-bg-booking`, `bistro-bg-subscribe`, `bistro-bg-footer`) or light
    tints per implementer judgment
- **Icons:** lucide-react (`UtensilsCrossed`, `ChefHat`, `Flame`, `Calendar`,
  `Clock`, `Users`, `ArrowRight`, `Instagram`, social icons) — gallery +
  services icons per reference.

## Requirements

### Requirement: Sticky header with nav and Order Online button

The system SHALL render a sticky white header: logo (utensils mark + wordmark)
left, nav links right, and an outlined orange "Order Online" button far right.

#### Scenario: Header layout

- **GIVEN** the Bistro page is rendered
- **WHEN** the header is displayed
- **THEN** the header SHALL be a flex row with the logo on the left and the
  nav + Order Online button on the right
- **AND** the header SHALL become sticky with a white background and shadow
  after the user scrolls past the top (or be sticky by default per the
  reference's `.header-sticky`)

#### Scenario: Header content

- **GIVEN** the header is displayed
- **WHEN** the user inspects the nav
- **THEN** the nav SHALL show links: Home, About, Menu, Blog (with a
  dropdown: Blog Details, Element), Contact
- **AND** the "Order Online" button SHALL be an outlined (1px `#ff5600`
  border, transparent bg) button with `aria-label` and a working link

#### Scenario: Mobile nav

- **GIVEN** the Bistro page is rendered on a viewport ≤768px
- **WHEN** the header is displayed
- **THEN** the nav links SHALL collapse into a toggleable menu button with
  `aria-expanded` (per repo accessibility conventions)

### Requirement: Hero slider with photo backdrop

The system SHALL render a full-width hero slider (minimum 2 slides) with a
cover photo backdrop, an orange kicker, a large display headline, a paragraph,
and a solid orange CTA button, plus carousel navigation.

#### Scenario: Hero slide content

- **GIVEN** the hero slider is displayed
- **WHEN** the first slide is active
- **THEN** the slide SHALL show an orange kicker ("Discover Your Taste" —
  paraphrase the original's typo), an H1 display headline (e.g. "Good food
  brings a great smile" — paraphrase, same kind of content), a short
  paragraph, and a solid orange "Reservation" button (paraphrase of the
  original "Resurvation")
- **AND** the backdrop SHALL be a seeded placeholder photo covering the
  slide with a responsive min-height (1080px desktop, 600px mobile)

#### Scenario: Slide rotation

- **GIVEN** the hero slider has at least 2 slides
- **WHEN** the page loads
- **THEN** slides SHALL rotate automatically (interval) with prev/next
  controls and dots
- **AND** the rotation SHALL pause/handle gracefully when the slide content
  is the active focus (no auto-play jank; `aria-live` or equivalent per repo
  conventions)

### Requirement: About section with icon caption list

The system SHALL render an "About Our Restaurant" section with a heading, two
paragraphs, an icon + caption list, and a photo.

#### Scenario: About content

- **GIVEN** the About section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show an orange kicker "About Our Restaurant",
  an H2 (e.g. "We provide good food for your family"), two short paragraphs,
  and a list of at least 3 icon + caption items (e.g. quality ingredients,
  fresh daily, family friendly)
- **AND** a seeded placeholder photo SHALL sit beside the text block

### Requirement: Food gallery mosaic

The system SHALL render a gallery section with a photo-backdrop header band
(kicker "Our Offered Menu" + H2 "Some Trendy And Popular Courses Offered" —
paraphrased) and a 10-tile mosaic of food photos with hover overlay captions.

#### Scenario: Gallery layout

- **GIVEN** the gallery section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the kicker + H2 on a subtle background
  band
- **AND** a mosaic grid SHALL follow with 10 tiles: rows of alternating
  tall (aspect ~2:1.2, e.g. h-96+) and short (half-height) tiles per the
  reference pattern (big/small alternating)
- **AND** each tile SHALL be a cover image with `alt` text

#### Scenario: Gallery hover

- **GIVEN** a gallery tile is displayed
- **WHEN** the user hovers/focuses the tile
- **THEN** a dark overlay (rgba(11,14,13,0.702)-like) SHALL appear with a
  centered caption: orange span "Delicious Food" + large white title
- **AND** the overlay SHALL be keyboard-focusable (focus-within reveals it)

### Requirement: Booking reservation section

The system SHALL render a "Book A Table" section on a photo backdrop with a
reservation form: name, email, date, time, person select, and a Book Now
button.

#### Scenario: Booking form

- **GIVEN** the booking section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show an orange kicker + H2 "Book A Table" over
  a subtle photo backdrop
- **AND** a form SHALL contain: name input, email input, date input, time
  input, person select (options for 1–4 persons), and a solid orange "Book
  Now" submit button
- **AND** the date/time inputs SHALL be usable (native `type="date"` /
  `type="time"` inputs are acceptable recreations of the gijgo pickers)

#### Scenario: Booking validation

- **GIVEN** the booking form is displayed
- **WHEN** the user submits with missing/invalid fields
- **THEN** inline validation SHALL mark the invalid fields (no backend —
  presentational only, no network call)

### Requirement: Services section

The system SHALL render an "Our Best Services" section with 3 service cards
(Best Chef, Quality Food, Perfect Cook), each with an icon and a short
description.

#### Scenario: Service cards

- **GIVEN** the services section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show an orange kicker ("Services We Offer" —
  paraphrase the original's typo) and H2 "Our Best Services"
- **AND** exactly 3 cards SHALL be present, each with a lucide icon (e.g.
  ChefHat / Flame / UtensilsCrossed), a title, and a short paragraph
- **AND** the cards SHALL be in a responsive 1-col mobile / 3-col desktop
  grid

### Requirement: Subscribe band

The system SHALL render a subscribe section on a photo backdrop with a
heading, paragraph, and a rounded pill input + orange Subscribe button.

#### Scenario: Subscribe form

- **GIVEN** the subscribe section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the kicker + H2 ("We provide good food for
  your family" style) over a subtle photo backdrop
- **AND** a pill-shaped (radius 50px) form SHALL contain a text input
  (60px tall) and a solid orange "Subscribe" button
- **AND** submitting an empty/invalid email SHALL show inline validation
  (presentational)

### Requirement: Blog / news section

The system SHALL render a "Recent News" section with 3 blog cards whose
caption boxes overlap the photo and fill orange on hover.

#### Scenario: Blog cards

- **GIVEN** the blogs section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show an orange kicker ("Our New Blog News"
  style) and H2 ("Recent News" — paraphrase the original's typo)
- **AND** 3 blog cards SHALL each show a photo with a caption box
  overlapping the bottom (light `#f7f9f8` bg, 5px radius, ~94% width) with
  an uppercase date line and a title link
- **AND** on hover/focus the caption box SHALL fill `#ff5600` with white
  text

### Requirement: Footer

The system SHALL render a footer on a photo backdrop with Navigation and
Useful Links columns, an Instagram-style thumbnail grid, social icons, and a
copyright bar.

#### Scenario: Footer content

- **GIVEN** the Bistro page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL be present with: Navigation links (Home, Events,
  Testimonial, Categories, Contacts), Useful Links (Registration, Login,
  Policy, Terms & Conditions), an Instagram thumbnail grid (6 seeded
  images), and social icons
- **AND** a copyright bar SHALL sit at the bottom with the site name and
  year

### Requirement: Responsive behavior

The system SHALL adapt hero text size, section paddings, and grids for mobile
viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Bistro page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the hero H1 SHALL scale down (e.g. `text-4xl`/`text-5xl`) and
  remain readable over the backdrop
- **AND** section paddings SHALL reduce (~65px per the reference's mobile
  values) and grids SHALL collapse to one column

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-bistro`
- [ ] `scripts/verify-app.sh bistro` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): sticky header (logo + nav +
      Order Online outline button) → hero slider (2+ slides, photo backdrop,
      orange kicker + H1 + Reservation CTA, arrows/dots) → About (kicker +
      H2 + icon caption list + photo) → Gallery (header band + 10-tile
      mosaic, hover overlay captions) → About 2 → Booking (Book A Table form
      with date/time/person select) → Services (3 cards) → Subscribe (pill
      form) → Blogs (3 cards, overlapping caption, orange hover fill) →
      Footer (Navigation / Useful Links / Instagram grid / social /
      copyright)
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#ff5600` brand,
      `#e74d00` hover, `#212025` headings, `#f7f9f8`-family light section
      bg; radii 5–6px buttons, 50px pill, 5px blog caption
- [ ] Fonts: Josefin Sans (headings) + Poppins (body) via Google Fonts
      `<link>` in `index.html`, title "Bistro — Restaurant Template"
- [ ] Photos = seeded picsum (`bistro-hero`, `bistro-chef`, `bistro-dish-<n>`,
      `bistro-kitchen`, `bistro-blog-<n>`, backdrop seeds); icons from
      lucide-react — no copied assets
- [ ] Booking + subscribe forms presentational with inline validation; no
      backend calls
- [ ] Mobile nav accessible (`aria-expanded` on toggle); hero slider
      accessible (controls + `aria-live`)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Allfood" row, line 330 —
      Bootstrap category)
