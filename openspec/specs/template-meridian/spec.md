# Template: Meridian (Bootstrap / Business Consulting Template)

## Purpose

Meridian is a single-page business-consulting template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Consulting" design (see TEMPLATES.md — Bootstrap category,
line 364; the slug also repeats at line 952 under Business — one recreation
covers both checklist rows), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, typography-driven consulting-agency site: a
**transparent navbar** over a **white hero band** with a huge black headline
("We are consulting agency based in New York City"), followed by a
**full-screen team-photo band** (background image, no content); a **services
section** (green uppercase eyebrow label + three icon cards: Consultation /
Innovative Ideas / 24/7 Support with big light-gray glyphs); a **dark
testimonial carousel** (`#343a40`, 4 slides with a quote blockquote, a
circular 60px avatar and "by John Freeman — CEO Co-Founder"); an **office
gallery** (eyebrow + headline + paragraph + a 3-column edge-to-edge grid of
six photos); and a solid **brand-green footer** (`#1fab89` with white logo +
three link columns) plus a green copyright bar. Signature look: Poppins
headings/nav + Source Serif Pro body text at 300 weight, brand green
`#1fab89` accents, and NO call-to-action buttons anywhere — the design is
purely typographic with plain text links.

## Design reference (replication findings)

- **Original:** ColorLib "Consulting" — free Bootstrap 4 consulting-agency
  website template (source: https://colorlib.com/wp/template/consulting/;
  preview title: "Consulting &mdash; Website Template by Colorlib"). New
  name: **meridian** (a line of longitude / a peak point — fits a
  consulting/business brand; single word, no collision with `ls apps/`,
  `openspec/specs/`, or `docs/templates/`; note `apps/vantage` + `template-vantage`
  exist but that spec is for a DIFFERENT template — the ColorLib "Konstruct"
  purple/pink corporate page — so "vantage" was unavailable).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/consulting/`
  (HTTP 200, ~18.6KB HTML). Stylesheets: `css/style.css` (~19.5KB custom
  theme — the authoritative token source) + `css/bootstrap.min.css` (themed:
  `.bg-primary{background-color:#1fab89!important}`), `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/jquery.fancybox.min.css`, `css/aos.css`,
  `css/bootstrap-datepicker.css`, `fonts/icomoon/style.css`,
  `fonts/eticons/style.css`, `fonts/flaticon/font/flaticon.css`. Google
  Fonts: **Poppins** + **Source Serif Pro**.
- **Screenshot:** downloaded from TEMPLATES.md
  (`consulting-free-template.jpg`; the file is actually AVIF, ~108KB).
  Visual check against the screenshot: minimalist single page, white
  background, "CONSULTING" wordmark top-left + hamburger top-right, big
  black headline centered on white, full-width team photo below (three
  people against a pale concrete wall — light image, so black text works
  over it), no prominent accent colors in the top half. This matches the
  LIVE RENDER exactly (verified visually + with computed styles in a
  browser at desktop width).
- **Live render verified** (browser, desktop width): nav links Home /
  About / Services / Blog / Contact; hero h1 "We are consulting agency
  based in New York City" on a white ~450px band; below it a 100vh /
  min-755px EMPTY band carrying `background-image: url('images/hero_1.jpg')`
  (the team photo); "SERVICES" eyebrow + repeated h2 headline + 3 icon
  cards; dark `#343a40` testimonial carousel (4 slides, owl dots below);
  "OFFICE GALLERY" eyebrow + h2 + paragraph + 6 photos in a `row no-gutters`
  grid; solid green `#1fab89` footer (white "CONSULTING" logo + Contact
  Info / Nav Links / Navigation columns) + green bottom bar with centered
  copyright.
- **Computed tokens (from the rendered page):** hero band white, h1 black
  Poppins 64px/900; eyebrow `.heading-caps` 13px/700 uppercase
  `letter-spacing: .2rem` brand green `rgb(31,171,137)` = `#1fab89`; section
  h2 black Poppins 32px/700; service h3 black Poppins 20px/900; body p
  `"Source Serif Pro", serif` 16px/300 `#6c7b95`; service icons 4rem
  `#d1d1d1`; testimonial section bg `rgb(52,58,64)` = `#343a40`; blockquote
  Poppins 20px white, underline 40×3px `rgba(255,255,255,0.5)`; avatars
  60px `border-radius: 50%`; footer bg `rgb(31,171,137)` = `#1fab89`, logo
  white Poppins uppercase bold, footer headings white 16px uppercase, link
  colors white / `rgba(255,255,255,0.5)`.
- **Placeholder-copy caveats:** the three service cards share the same lorem
  paragraph; all four testimonial slides repeat the SAME quote and the same
  author ("by John Freeman" / "CEO Co-Founder") — write DISTINCT quotes and
  author names of the same kind; the gallery section has a lorem paragraph;
  footer contact info uses placeholder email/phone
  (hello@mydomain.com / +1 829 2293 382); the bottom bar mixes a lorem
  sentence with "Copyright ©2024 All rights reserved | This template is made
  with by Colorlib" (missing heart glyph) — paraphrase the whole line and
  drop the Colorlib credit. All `href="#"` become real placeholder hrefs.
  The wordmark "Consulting" → "Meridian". The source has NO buttons in any
  section (`.btn` exists in the CSS, radius 30px pill, but is unused on the
  page) — do not invent CTAs; nav + footer are plain text links.
- **Section order (1:1) from the rendered DOM:**
  1. Navbar (`header.site-navbar.site-navbar-target`): absolute, transparent
     over the hero; `.site-logo` "CONSULTING" left (Poppins uppercase,
     black; turns `#1fab89` when sticky); right `.site-menu` links: Home /
     About / Services / Blog / Contact (Poppins, `rgba(0,0,0,0.7)`, hover
     `#000`). Sticky on scroll: white bg + shadow
     `4px 0 20px -5px rgba(0,0,0,0.2)`. Mobile: hamburger toggler opening a
     slide-in `.site-mobile-menu` (header + close button + link list).
  2. Hero text band (`div.site-section-cover`, white, ~450px on desktop):
     `container > row.align-items-center.text-left.justify-content-center >
col-lg-10.ml-auto` with h1 "We are consulting agency based in New York
     City" (Poppins 64px/900 black, centered).
  3. Photo band (`div.site-section-cover.full-screen`): EMPTY container
     (`row.align-items-center.text-left.justify-content-center` with no
     children); `height: 100vh; min-height: 755px`;
     `background-image: url('images/hero_1.jpg')` via inline style, cover,
     centered — a full-bleed team photo with no content.
  4. Services (`div.site-section`): `row.mb-5.align-items-start` —
     `col-md-4` (eyebrow `h5.heading-caps` "Services" + `h2` repeated
     headline) and `col-md-8` `row` of THREE `col-md-4` cards
     `div.service-29191.d-flex`: `span.wrap-icon.mb-4.d-block` with icon
     span (eticons glyph `et-toolbox` / `et-genius` / `et-chat`, 4rem,
     `#d1d1d1`) + `div` with `h3.mb-3` (Consultation / Innovative Ideas /
     24/7 Support) + lorem `p`.
  5. Testimonials (`div.site-section.bg-dark`, bg `#343a40`): `container-fluid`
     > `div.owl-carousel.nonloop-block-13` with FOUR slides
     > `div.media-29191`: `blockquote` (Poppins 20px white, `padding-bottom:
40px; margin-bottom: 40px`, 40×3px `rgba(255,255,255,0.5)` underline
     > via `:after`) + `div.d-flex.vcard-91123.align-items-center`: `div.img`
     > 60px circular avatar (`border-radius: 50%`) + `div.name` "by John
     > Freeman" + "CEO Co-Founder". Owl dots: 10px circles,
     > `bottom: -3rem`.
  6. Office Gallery (`div.site-section.pb-0`): same `row.mb-5` header
     pattern — eyebrow `h5.heading-caps` "Office Gallery" + `h2` + lorem
     paragraph; then `container-fluid.px-0 > row.no-gutters` of SIX
     `div.col-md-4` photos (`images/img_1..6.jpg`), edge-to-edge 3-column
     grid.
  7. Footer (`footer.site-section.pb-0.bg-primary`, bg `#1fab89`): `row` —
     `col-md-3` `div.site-logo-footer` "CONSULTING" (Poppins uppercase
     bold, WHITE on the rendered page) + `col-md-8.ml-auto > row`: THREE
     `col-md-4` columns with `h3.footer-heading.mb-4.text-uppercase` (white
     16px) + `ul.list-unstyled.links`:
     - Contact Info: Contact Us / hello@mydomain.com / +1 829 2293 382 /
       Support
     - Nav Links: Home / Blog / Services / About Us
     - Navigation: Home / Blog / Services / About Us
  8. Bottom bar (`div.py-5.bg-primary`): `container > row.mt-5.justify-content-center >
col-md-7.text-center` with a copyright paragraph — lorem + "Copyright
     ©2024 All rights reserved | This template is made with by Colorlib"
     (paraphrase, drop Colorlib credit).

## Design tokens (extracted from `css/style.css` + `bootstrap.min.css` + computed render)

- Fonts (Google Fonts, via `<link>` in `index.html`): **Poppins** — nav,
  logo, eyebrows, headings (h1 64px/900, h2 32px/700, h3 20px/900),
  blockquote (20px), footer; **Source Serif Pro** — body copy only
  (16px/300). Body `line-height: 1.7`.
- Brand color — **`#1fab89`** (teal-green): `.bg-primary`/`.text-primary`
  (themed Bootstrap), eyebrow `.heading-caps`, active nav link, sticky logo,
  footer background, form-control focus border.
- Dark surfaces: testimonial section **`#343a40`** (`bg-dark`); no other
  dark sections.
- Neutrals: page/hero background `#fff`; body text **`#6c7b95`** (slate);
  headings `#000`; nav links `rgba(0,0,0,0.7)` (hover `#000`); service icon
  glyphs **`#d1d1d1`** (light gray); testimonial underline
  `rgba(255,255,255,0.5)`; footer links white / `rgba(255,255,255,0.5)`.
- Buttons: **none used on the page** — the source styles `.btn` as a pill
  (radius **30px**, padding 10px 20px) but never applies it; the recreation
  must NOT add CTAs (typography + plain links only).
- Eyebrow (`.heading-caps`): 13px/700, uppercase, `letter-spacing: .2rem`,
  brand green — used for "Services" and "Office Gallery".
- Cards/layout: sections `padding: 2.5em 0` (`.site-section`); services
  cards are `d-flex` icon-left + text (`.service-29191`); hero photo band
  `height: 100vh; min-height: 755px`; gallery `row.no-gutters` with 6
  `col-md-4` images (3-up, edge-to-edge).
- Testimonials: `blockquote` Poppins 20px white, `padding-bottom: 40px;
margin-bottom: 40px` with a 40×3px white-50% underline; avatar `img`
  inside `.vcard-91123 .img` = 60px, `border-radius: 50%`; owl dots 10px
  circles, `bottom: -3rem`.
- Sticky nav: transparent over hero → white bg + shadow
  `4px 0 20px -5px rgba(0,0,0,0.2)`; logo black → brand green when sticky.
- Footer: bg `#1fab89`; `.footer-heading` 16px white uppercase; logo white
  Poppins uppercase bold; link lists white (contact list `rgba(255,255,255,0.5)`
  on hover white).
- Icons (source: eticons icon font + icomoon — recreation: lucide-react):
  services — Wrench (et-toolbox "Consultation"), Lightbulb (et-genius
  "Innovative Ideas"), MessageCircle (et-chat "24/7 Support"); testimonials
  — Quote mark in the blockquote underline; mobile — Menu; footer — none
  (contact entries are plain text links).
- Images (recreation: `https://picsum.photos/seed/meridian-<n>/<w>/<h>`):
  hero photo band 1600×900 (full-bleed, cover), gallery 6 photos 800×600,
  testimonial avatars 120×120.

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with the brand
and section links, turning solid white when sticky.

#### Scenario: Desktop navbar

- **GIVEN** the Meridian page is rendered on a desktop viewport
- **WHEN** the top of the page is displayed
- **THEN** the navbar SHALL be transparent and positioned over the hero
  (absolute, top of page)
- **AND** the brand "Meridian" SHALL sit on the left in Poppins uppercase
  black
- **AND** text links SHALL read: Home (active), About, Services, Blog,
  Contact — Poppins, `rgba(0,0,0,0.7)`, hover `#000`
- **AND** there SHALL be NO call-to-action button in the navbar

#### Scenario: Sticky navbar

- **GIVEN** the page is scrolled past the hero
- **WHEN** the navbar becomes sticky
- **THEN** it SHALL get a solid white background with a soft shadow
  (`4px 0 20px -5px rgba(0,0,0,0.2)`)
- **AND** the brand SHALL turn brand green `#1fab89`

#### Scenario: Mobile navbar

- **GIVEN** a narrow viewport (≤992px)
- **WHEN** the page is rendered
- **THEN** the navbar SHALL show the brand plus a hamburger toggler that
  opens a slide-in mobile menu (close button + the same links), exposing an
  aria-expanded state

### Requirement: Hero text band

The system SHALL render a white hero band with a large black headline.

#### Scenario: Hero headline

- **GIVEN** the hero area is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a white band (~450px tall on desktop) with the
  headline "We are consulting agency based in New York City" centered
  (Poppins 64px/900, black)
- **AND** the band SHALL contain no image and no button — text only

### Requirement: Photo band

The system SHALL render a full-screen photo band directly below the hero
text.

#### Scenario: Full-bleed photo

- **GIVEN** the section below the hero headline is displayed
- **WHEN** it is inspected
- **THEN** it SHALL be an empty band filling the viewport
  (`height: 100vh; min-height: 755px`)
- **AND** it SHALL show a single full-bleed cover background image (the
  team photo, picsum placeholder) with no text content

### Requirement: Services

The system SHALL render a services section with an eyebrow label, a headline
and three icon cards.

#### Scenario: Service cards

- **GIVEN** the "Services" section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the green uppercase eyebrow "Services" (13px,
  letter-spacing .2rem) with a black Poppins 32px/700 headline beside it
- **AND** a responsive 3-column row of THREE cards, each with a large
  light-gray icon (`#d1d1d1`, 4rem), a Poppins 20px/900 heading and a
  Source Serif Pro 300 slate `#6c7b95` paragraph
- **AND** the three items SHALL be: Consultation, Innovative Ideas, 24/7
  Support — with DISTINCT paraphrase paragraphs (the source repeats the
  same lorem on all three)

### Requirement: Testimonials carousel

The system SHALL render a dark section with a carousel of review slides.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL sit on a dark `#343a40` background
- **AND** a carousel SHALL cycle FOUR slides, each with a Poppins 20px white
  quote blockquote (underline accent 40×3px `rgba(255,255,255,0.5)` below),
  a circular 60px avatar, and an attribution line ("by <Name>" + role)
- **AND** quotes AND author names SHALL be distinct per slide (the source
  repeats the same quote and "by John Freeman — CEO Co-Founder" on all
  four)
- **AND** the carousel SHALL show dots (10px circles) and advance
  automatically/on interaction

### Requirement: Office Gallery

The system SHALL render a gallery section with an eyebrow label, headline,
paragraph and a six-photo grid.

#### Scenario: Gallery grid

- **GIVEN** the "Office Gallery" section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the green uppercase eyebrow "Office Gallery" with a
  black Poppins 32px/700 headline and a slate paragraph
- **AND** an edge-to-edge 3-column grid (no gutters) of SIX photos SHALL
  sit below, each filling its column
- **AND** on mobile the grid SHALL collapse to fewer columns (stacked or
  2-up) responsively

### Requirement: Footer

The system SHALL render a brand-green footer with the logo, three link
columns and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** it is inspected
- **THEN** it SHALL sit on a solid brand-green `#1fab89` background
- **AND** the left column SHALL show the "Meridian" wordmark (Poppins
  uppercase bold, white)
- **AND** three link columns SHALL show white 16px uppercase headings:
  (1) Contact Info — Contact Us / hello@mydomain.com / +1 829 2293 382 /
  Support; (2) Nav Links — Home / Blog / Services / About Us; (3)
  Navigation — Home / Blog / Services / About Us (links white,
  `rgba(255,255,255,0.5)` hover white)
- **AND** a centered copyright line SHALL sit in a green bottom bar,
  paraphrased for the recreation (e.g. "Copyright © <year> All rights
  reserved | Made with ♥ by Free React Templates") — no Colorlib
  attribution or link

## Verification checklist

- [ ] `apps/meridian` scaffolded from the simplest existing app; package
      renamed `@free-react-templates/meridian`; workspace registered in
      `package-lock.json` (repo is bun-managed — `bun install` at root,
      never `npm add`)
- [ ] `index.html` loads Poppins + Source Serif Pro via Google Fonts
      `<link>`; title "Meridian — Business Consulting"
- [ ] `src/index.css` `@theme` tokens: `--color-brand: #1fab89`,
      `--color-ink: #6c7b95`, `--color-charcoal: #343a40`,
      `--color-icon: #d1d1d1`; `--font-sans: "Poppins"`,
      `--font-serif: "Source Serif Pro"`; an eyebrow utility (13px,
      uppercase, ls .2rem, brand green) and a sticky-nav shadow utility
- [ ] Components (one per section, colocated Vitest tests, 100% coverage):
      Navbar (transparent → sticky white, brand, 5 links, mobile hamburger + slide-in menu, aria-expanded), HeroText (white band, h1 64px/900),
      PhotoBand (100vh cover image, no content), Services (eyebrow + h2 +
      3 icon cards), Testimonials (dark carousel, 4 distinct slides, dots),
      Gallery (eyebrow + h2 + paragraph + 6-photo grid), Footer (logo + 3
      columns + bottom bar)
- [ ] `App.tsx` composes sections in the DOM order above (Navbar → HeroText
      → PhotoBand → Services → Testimonials → Gallery → Footer)
- [ ] All images `https://picsum.photos/seed/meridian-<n>/<w>/<h>` (photo
      band 1600×900, gallery 6 × 800×600, avatars 120×120); no ColorLib
      assets copied; service icons from lucide-react (Wrench, Lightbulb,
      MessageCircle)
- [ ] NO buttons/CTAs anywhere (matches source); nav + footer are plain
      text links
- [ ] `npm run verify:app meridian` passes (typecheck + lint + vitest 100% +
      build); full gate runs in CI on merge
- [ ] PR description includes: source template (Consulting), preview URL
      (`https://preview.colorlib.com/theme/consulting/`), design tokens,
      renames, placeholder images, distinct testimonial/service copy, and
      the dup row (line 952) covered by the same recreation
