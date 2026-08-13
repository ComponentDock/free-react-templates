# Template: Growly (Business / Agency One-pager)

## Purpose

Growly is a single-page business/agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Repeat" website template
(source: https://colorlib.com/wp/template/repeat/ — "Repeat — Free
Bootstrap 5 Website Template by Colorlib"), built under a DIFFERENT name
(Growly — "grow", the template's core promise "We are here to help grow
your business", plus the friendly "-ly" suffix matching the family
convention: Wingly, Drivly, Nestly, Bookly, Coastly, Restly, Sleeply,
Dozely, Soarly, Lodgely, Sneakly, Taply, Lotly; single lowercase word, no
collision with `apps/`, `openspec/specs/` or `docs/templates/` — verified
2026-08-14), per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The source appears TWO times in TEMPLATES.md (dup-row trap): line 620
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one)
and line 1151 (**Business (365)**) — both `- [ ]` rows of the SAME
template. ONE implementation covers both rows (mark all `[x]` with the
same surge URL at bookkeeping time). Source NOT shipped anywhere (no `[x]`
row, no app folder).

## Design reference (replication findings)

- **Original:** ColorLib "Repeat" — business/agency one-pager, Bootstrap 5
  based (bootstrap v5.0.0-beta1 embedded in `css/style.css` + tiny-slider
  - aos + icomoon/flaticon icon fonts). The recreation brands itself
    **Growly** but keeps the same section structure, copy kinds and layout.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/repeat/` — HTTP 200, ~21 KB HTML
  (REACHABLE — the preview is live, not a 404). Stylesheets:
  `css/style.css` (custom + embedded Bootstrap ~58 KB — the
  template-specific tokens live here), `fonts/icomoon/style.css`,
  `fonts/flaticon/font/flaticon.css`, `css/tiny-slider.css`, `css/aos.css`.
  Screenshot `repeat-free-template.jpg` (1200×946, AVIF source converted to
  PNG, viewed in browser) matches the live DOM (light hero w/ workspace
  photo + coral pill CTA → deep-navy overlay about section visible in the
  shot).
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.site-nav`, `position: absolute; top: 0; z-index: 9`,
     transparent over the hero, padding 20px 0): brand logo "Repeat" text
     (`a.logo`, left, Comfortaa 24px weight 700 navy `#003a70`); links
     right-aligned, 14px: **Home** (active) · **Services** (dropdown
     `has-children`: Menu One · Menu Two · Dropdown → Sub Menu One / Two /
     Three) · **Pricing** · **About** · **Contact Us**; hamburger burger
     button (mobile, `.js-menu-toggle`) opening a `.site-mobile-menu`
     slide-in panel with the same links.
  2. **Hero** (`div.hero`, bg image `images/hero_1.jpg` cover, `padding:
7rem 0 22rem` — huge bottom padding for the overlap): centered
     `col-lg-7 text-center`: h1 "We are **pretty** `<span
class="typed-words">Awesome</span>`" (navy `#003a70`, Comfortaa;
     source uses a typed.js word-cycling effect — a static "Awesome" or a
     simple cycling effect is fine) + paragraph `w-75 mx-auto` "Far far
     away, behind the word mountains..." + **Our services** button
     (`a.btn.btn-primary.text-white`).
  3. **About** (`div.section.sec-about.overlay.bg-img-section`, bg image
     `images/hero_1.jpg` + overlay `::before` `rgba(0, 58, 112, 0.9)`,
     section padding 7rem): LEFT `col-lg-6`: eyebrow `span.subheading`
     "About us" (coral `#ff8e71`) + h2 "We are here to help grow your
     business" (white, `w-75`, mb-5) + `.img-wrap` with `img about_4.jpg`
     (laptop workspace photo; `margin-bottom: -150px` so the image
     overlaps into the next section); RIGHT `col-lg-4.mx-auto`: `.intro-box`
     with a coral `.v-line` (2px × 250px vertical accent, `#ff8e71`) +
     THREE `p.text-white-50` lorem paragraphs.
  4. **Services** (`div.section.sec-services`, white): (a) intro row —
     `col-lg-4.offset-md-7` `.intro` with coral `.v-line` (2px × 115px) +
     one lorem paragraph; (b) heading row — h2 "What We Offer" (navy,
     Comfortaa 700) + `p.lead` "Far far away behind the word mountains";
     (c) content row `row.g-0.align-items-stretch` — LEFT `col-lg-6`
     `.img-wrap` with `img about_1.jpg`; RIGHT `col-lg-6`
     `.box-slider-wrap` (navy `rgba(0, 58, 112, 0.9)` background, padding
     50px 100px, min-height 460px) containing the `#service-slider`
     (tiny-slider) with FOUR `.service` items: **Web Design** ·
     **Grapihc Design** (sic, source typo — recreate as "Graphic Design",
     a paraphrase latitude) · **Web/Mobile Application** · **Brand
     Identity**; each: h3 (white, 20px) + two `p.text-white-50` lorem
     paragraphs.
  5. **Stats** (`div.section.py-0.sec-stats.section-counter`, white):
     centered `col-lg-7.mx-auto` h2 "Stats"; then `row.g-2` of FOUR
     `.stat-counter` cards (`col-6 col-lg-3`, alternating `mt-lg-5`
     stagger): (a) **230 Projects** (flaticon-handshake), (b) **229 Happy
     Clients** (flaticon-mouse), (c) **8 Leadership** (flaticon-browser),
     (d) **15 Years Experience** (flaticon-cursor). Card: `background:
#fafafa; border-radius: 7px; padding: 40px; text-align: center`;
     number `strong.num` 50px Comfortaa navy `#003a70` (source counts up
     via JS — a static number is fine); caption `#7a7a7a`.
  6. **Media** (`div.section.sec-media`, white): `row.g-5.justify-content-
around` — LEFT `col-lg-4.align-self-center`: h2 "Get anything done in
     one place" + one paragraph + **Our services** button
     (`a.btn.btn-primary.text-white`); RIGHT `col-lg-6` `.img-wrap`: TWO
     stacked images `img-1` `about_2.jpg` (large, fluid) + `img-2`
     `about_3.jpg` (absolute, width 300px, 4px white border, bottom-left,
     `translateX(-30%) translateY(30%)` — overlapping the first).
  7. **Footer** (`div.site-footer`, bg `#efefef`, font-size 14px, color
     `#888`, links `#777`, padding 70px 0): THREE widget columns —
     (a) **Contact**: `<address>` "43 Raymouth Rd. Baltemoer, London 3910"
     - two `tel://` links "+1(123)-456-7890" + `mailto:info@mydomain.com`;
       (b) **Sources**: twelve `#` links (About us · Services · Vision ·
       Mission · Terms · Privacy · Partners · Business · Careers · Blog ·
       FAQ · Creative); (c) **Links**: Our Vision · About us · Contact us +
       six social icon links (instagram · twitter · facebook · linkedin ·
       pinterest · dribbble); bottom centered bar: "Copyright © <year> All
       rights reserved | This template is made with ♥ by <credit>" — the
       source credits Colorlib, rename to a Component Dock credit linking
       `https://www.componentdock.com/` (mandatory footer link).
- **Visual design (TEMPLATES.md screenshot `repeat-free-template.jpg`,
  1200×946, AVIF→PNG, viewed in browser 2026-08-14):** clean, modern,
  minimalist corporate/agency one-pager. Flat design, generous white
  space. LIGHT hero: desaturated high-key workspace photo (desk, chair,
  plant, empty frames) behind a centered navy Comfortaa headline "We are
  pretty Awesome", small grey lorem line, and ONE coral/salmon pill CTA
  "Our services"; navy "Repeat" logo top-left, dark links top-right. Then
  a FULL-WIDTH DEEP-NAVY section (the About block) with coral eyebrow
  "About us", white headline "We are here to help grow your business", a
  laptop photo ("WORK HARD ANYWHERE") on the left, and three columns of
  translucent-white lorem text on the right with a coral vertical accent
  line. Below: white Services section, grey stat cards, media section and
  light-grey footer (all verified from the live DOM). Palette: navy
  `#003a70` + coral `#ff8e71` on white/`#fafafa`/`#efefef`.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-14):**
  - Brand navy: **`#003a70`** — `.heading`, `.logo`, hero h1, `.section
.heading`, stat numbers `.num`; ALSO the section overlay + services
    panel background as `rgba(0, 58, 112, 0.9)` (`.bg-img-section.overlay
:before`, `.box-slider-wrap`).
  - Brand coral: **`#ff8e71`** — `.btn-primary` background,
    `.subheading`, `.v-line` accents, icon colors; hover `#ff9f86` /
    border hover `#ff997f`; `.btn-outline-primary` text.
  - Fonts: headings/logo/stat numbers **'Comfortaa', sans-serif**
    (Google Fonts — add the `<link>` in `index.html`, weights 400/700);
    body **'Roboto', sans-serif** (weights 400/500). Body 14px.
  - Buttons: `padding: 10px 30px; border-radius: 30px; font-size: 14px`
    (pill); `.btn-primary` bg `#ff8e71` with white text (the markup adds
    `text-white`); focus shadow `rgba(217, 121, 96, 0.5)`.
  - Section rhythm: `.section { padding-top: 7rem; padding-bottom: 7rem }`
    (stats section overrides with `py-0`); hero `padding: 7rem 0 22rem`.
  - `.box-slider-wrap`: bg `rgba(0,58,112,0.9)`, padding 50px 100px,
    min-height 460px; inner h3 white 20px, paragraphs `rgba(255,255,255,
0.7)`.
  - `.stat-counter`: bg `#fafafa`, radius 7px, padding 40px, centered;
    `.num` 50px Comfortaa `#003a70`; `.caption` `#7a7a7a`.
  - Footer: bg `#efefef`, 14px, text `#888`, links `#777` (hover `#000`),
    padding 70px 0.
  - `.v-line`: 2px wide, `#ff8e71`, vertical accent line inside intro
    boxes (250px in about, 115px in services).
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap 5
  layout (NO Bootstrap dependency); section order 1:1 as above; headings
  in Comfortaa + body in Roboto via Google Fonts `<link>` in `index.html`;
  brand navy `#003a70` + coral `#ff8e71` in `@theme` used via Tailwind
  classes (navy overlays via `bg-[#003a70]/90` style utilities); images
  via seeded picsum placeholders (`picsum.photos/seed/growly-<n>/<w>/<h>`
  — a workspace/laptop subject for the hero bg + about + media shots,
  subject-screened per the seed-screening method before pinning); icons
  from lucide-react (handshake/mouse/browser/cursor for stats — verify
  exports with the typeof probe; social icons as inline SVG brand paths,
  NOT lucide brand icons which were removed); the service "slider" and
  the typed-words effect can be static (keep logic in a pure exported
  function for 100%-coverage tests); the source's lorem copy may be
  paraphrased but keep the same kinds (headline + subtext + pill CTA;
  eyebrow + h2 + image; etc.); brand "Repeat"/"Colorlib" → "Growly"
  everywhere including the footer credit (Component Dock link mandatory:
  `https://www.componentdock.com/`); document title "Growly — Business
  Website Template". Nav links are dead anchors in the recreation (single
  landing page); the Services dropdown can be a static menu or omitted
  hover behavior — keep the links visible in the mobile panel.

Growly lives in `apps/growly` (package `@free-react-templates/growly`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with a brand
logo, five nav links (one with a dropdown), and a mobile hamburger menu.

#### Scenario: Navbar content

- **GIVEN** the Growly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand "Growly" on the left in navy
  Comfortaa 24px bold
- **AND** the nav SHALL show links Home (active), Services, Pricing,
  About, Contact Us, 14px, right-aligned
- **AND** the Services link SHALL have a dropdown with Menu One, Menu Two,
  Dropdown (with Sub Menu One / Two / Three)

#### Scenario: Mobile navigation

- **GIVEN** the Growly page is rendered on a viewport narrower than 992px
- **WHEN** the page is displayed
- **THEN** the navbar SHALL collapse behind a hamburger toggler
- **AND** toggling it SHALL open a slide-in panel with the same links

### Requirement: Hero

The system SHALL render a light hero with a background photo, a navy
headline with a typed-words accent, a subtext paragraph, and a coral pill
CTA.

#### Scenario: Hero content

- **GIVEN** the Growly page is rendered
- **WHEN** the hero is visible
- **THEN** a full-width background image SHALL be shown (workspace photo,
  low contrast)
- **AND** the centered headline "We are pretty Awesome" SHALL be shown in
  navy `#003a70` (the "Awesome" part as the typed-words accent)
- **AND** a short grey subtext paragraph SHALL be shown
- **AND** a coral pill "Our services" button SHALL be shown below the text

### Requirement: About

The system SHALL render a full-width deep-navy overlay section with a coral
eyebrow, a white headline, an overlapping image, and an intro text block
with a vertical accent line.

#### Scenario: About section content

- **GIVEN** the Growly page is rendered
- **WHEN** the about section is visible
- **THEN** a navy overlay (`rgba(0, 58, 112, 0.9)` over the background
  photo) SHALL be shown
- **AND** the eyebrow "About us" SHALL be shown in coral `#ff8e71`
- **AND** the white headline "We are here to help grow your business"
  SHALL be shown
- **AND** a workspace image SHALL be shown on the left, overlapping into
  the next section
- **AND** an intro block SHALL be shown on the right with a coral vertical
  accent line and three translucent-white paragraphs

### Requirement: Services

The system SHALL render a white services section with an intro line, the
heading "What We Offer", an image, and a navy panel listing four services.

#### Scenario: Services section content

- **GIVEN** the Growly page is rendered
- **WHEN** the services section is visible
- **THEN** an intro block with a coral vertical accent line and a paragraph
  SHALL be shown offset to the right
- **AND** the heading "What We Offer" SHALL be shown in navy with a lead
  paragraph
- **AND** an image SHALL be shown on the left
- **AND** a navy panel (`rgba(0, 58, 112, 0.9)`) SHALL be shown on the
  right listing four services: Web Design, Graphic Design, Web/Mobile
  Application, Brand Identity
- **AND** each service SHALL show a white 20px title and two
  translucent-white paragraphs

### Requirement: Stats

The system SHALL render a "Stats" section with four grey stat cards, each
with an icon, a large navy number, and a caption.

#### Scenario: Stat cards

- **GIVEN** the Growly page is rendered
- **WHEN** the stats section is visible
- **THEN** the centered heading "Stats" SHALL be shown
- **AND** four stat cards SHALL be shown in a 4-column row (2 on mobile),
  alternatingly offset for a staggered look:
  - 230 Projects
  - 229 Happy Clients
  - 8 Leadership
  - 15 Years Experience
- **AND** each card SHALL show an icon, a 50px navy Comfortaa number, and
  a `#7a7a7a` caption on a `#fafafa` background with 7px radius

### Requirement: Media

The system SHALL render a white media section with a headline, paragraph
and CTA on the left, and two overlapping images on the right.

#### Scenario: Media section content

- **GIVEN** the Growly page is rendered
- **WHEN** the media section is visible
- **THEN** the heading "Get anything done in one place" SHALL be shown
  with a paragraph and a coral pill "Our services" button
- **AND** a large image SHALL be shown on the right with a smaller framed
  image (4px white border) overlapping its bottom-left corner

### Requirement: Footer

The system SHALL render a light-grey footer with three widget columns and
a centered copyright bar with a Component Dock credit.

#### Scenario: Footer widgets

- **GIVEN** the Growly page is rendered
- **WHEN** the page is scrolled to the footer
- **THEN** the footer SHALL be shown on a `#efefef` background with three
  columns:
  - Contact: address "43 Raymouth Rd. Baltemoer, London 3910", phone
    "+1(123)-456-7890" (tel: computed at runtime from a spaced string —
    never a literal tel: URI), email "info@mydomain.com" (mailto:)
  - Sources: About us, Services, Vision, Mission, Terms, Privacy,
    Partners, Business, Careers, Blog, FAQ, Creative
  - Links: Our Vision, About us, Contact us + six social icon links
    (instagram, twitter, facebook, linkedin, pinterest, dribbble)

#### Scenario: Copyright bar

- **GIVEN** the footer is rendered
- **WHEN** the bottom bar is visible
- **THEN** a centered copyright line SHALL be shown ("Copyright © <current
  year>. All rights reserved.")
- **AND** a credit line SHALL link to `https://www.componentdock.com/`
  ("Component Dock") — mandatory footer link, replacing the source's
  Colorlib credit

### Requirement: Responsive behavior

The system SHALL collapse the navbar into a hamburger menu below lg and
stack the multi-column sections to single columns on small screens.

#### Scenario: Stacked columns

- **GIVEN** the Growly page is rendered on a small viewport
- **WHEN** the page is displayed
- **THEN** the hero, about, services, stats, media and footer columns SHALL
  stack to single columns

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-growly`
- [ ] `scripts/verify-app.sh growly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with the live DOM): transparent navbar
      (Growly brand · Home active / Services (dropdown) / Pricing / About /
      Contact Us · hamburger) → light hero (bg workspace photo + "We are
      pretty Awesome" navy headline + subtext + coral pill "Our services")
      → navy-overlay About ("About us" coral eyebrow + "We are here to
      help grow your business" white headline + overlapping laptop image +
      intro box w/ coral v-line + 3 translucent paragraphs) → white
      Services (intro w/ v-line → "What We Offer" + lead → image +
      navy box-slider with 4 services: Web Design / Graphic Design /
      Web-Mobile Application / Brand Identity) → Stats (4 grey cards:
      230 Projects · 229 Happy Clients · 8 Leadership · 15 Years
      Experience, staggered) → Media ("Get anything done in one place" +
      CTA + two overlapping images) → footer (#efefef; Contact / Sources /
      Links + social icons + copyright bar with Component Dock credit)
- [ ] Brand tokens in `@theme`: navy `#003a70` (headings, logo, stat
      numbers, overlay/panel backgrounds at 90% alpha) and coral `#ff8e71`
      (buttons, subheadings, v-lines, icons) — all via Tailwind classes
- [ ] Headings in Comfortaa + body in Roboto via Google Fonts `<link>` in
      `index.html` (Comfortaa 400/700, Roboto 400/500)
- [ ] Buttons: pill `border-radius: 30px`, `padding: 10px 30px`, 14px,
      coral bg with white text (hover `#ff9f86`)
- [ ] `.stat-counter` cards: `#fafafa` bg, 7px radius, 40px padding,
      50px Comfortaa navy numbers, `#7a7a7a` captions
- [ ] Footer: `#efefef` bg, 14px `#888` text / `#777` links, 70px padding,
      mandatory Component Dock link (`https://www.componentdock.com/`)
- [ ] Placeholder images via `picsum.photos/seed/growly-<n>/<w>/<h>`
      (workspace/laptop subject for hero + about + media, screened before
      pinning), icons from lucide-react (probe exports) + inline SVG
      social icons, no copied assets
- [ ] Brand renamed "Repeat"/"Colorlib" → "Growly" everywhere; copyright
      credit = Component Dock; dead links (nav, Our services, footer
      links) anchor harmlessly
- [ ] Email link is mailto:, phone link computed at runtime from a spaced
      string (no literal tel: URI — toolchain redaction pitfall)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark BOTH `- [ ]` rows
      (lines ~620 Bootstrap 5 and ~1151 Business) `[x]` with the same
      surge URL + `npm run readme:status` (implementer)
