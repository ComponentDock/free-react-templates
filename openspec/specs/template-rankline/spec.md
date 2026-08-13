# Template: Rankline (SEO & SEM Agency Template)

## Purpose

Rankline is a single-page SEO / SEM marketing-agency landing template in
the free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Echo" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Echo" — SEO / SEM agency landing page (Bootstrap
  5 + tiny-slider + aos; icomoon + flaticon icon fonts; Google Fonts
  "Montserrat" — headings — and "Open Sans" — body).
  (source: https://colorlib.com/wp/template/echo/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/echo/
  (HTTP 200, 29,941 bytes HTML fetched; stylesheets
  `fonts/icomoon/style.css`, `fonts/flaticon/font/flaticon.css`,
  `css/bootstrap.css`, `css/tiny-slider.css`, `css/aos.css`, and
  `css/style.css` ~57 KB parsed; live DOM structure extracted; screenshot
  reviewed in the browser).
- **Screenshot analyzed:** `echo-free-template.jpg` (1200×946, viewed in
  the browser). The screenshot MATCHES the live preview (no drift): white
  navbar with the "ECHO" wordmark + dark pill "Download now" CTA; split
  hero — left = amber eyebrow "WELCOME TO OUR SITE" + large dark-navy h1
  "Expert SEO, SEM Services in London" + gray paragraph + two pill buttons
  ("How we work" navy solid, "Contact us" navy outline), right = colorful
  isometric flat-style team illustration; below it a centered "Our
  Features" section with a 3-column icon-card grid (magnifying-glass, bar
  chart, SEO-graph icons). Testimonial / footer sit below the fold — their
  anatomy was confirmed from the DOM + CSS instead.
- **Visual design:** brand navy `#081158` over white with an amber
  `#FBB244` accent (eyebrow chips, icon circles, CTA text); Montserrat
  black headings over Open Sans gray body text; pill-shaped (30px) buttons
  and eyebrow chips everywhere; light-gray `#f8f9fa` bands for
  testimonials + footer; flat isometric hero illustration. Aesthetic:
  modern, minimalist, corporate SaaS/agency — navy = trust, amber =
  energy/CTA.
- **Section order (1:1, from the DOM of the home page):**
  1. Mobile menu (`div.site-mobile-menu`): slide-in drawer (site-navbar
     target) with the same links → accessible hamburger drawer in the
     recreation.
  2. Header (`nav.site-nav` — absolute over the hero, top 0, z-index 9,
     padding 20px 0): `div.site-navigation` — brand `h1` 24px Montserrat
     ("Echo" → "Rankline" wordmark) left; `ul.site-menu` inline links —
     Home / About / Services / FAQ / Contact Us (the source also carries
     a Dropdown with nested sub-menus — drop for the single-page
     recreation); `li.cta-button` pill CTA "Download now"
     (`.cta-button a`: padding 6px 20px, bg `#081158`, 2px solid
     `#081158` border, color `#FBB244`, `border-radius: 30px`).
  3. Hero (`div.hero-section` — `padding-top: 12rem`, `padding-bottom:
10rem`, `min-height: 600px`; decorative `blob-1.svg` shape
     absolutely positioned right -200px / top -200px behind the content):
     `div.row.justify-content-between`:
     - LEFT `div.col-lg-5`: `span.subheading` eyebrow — amber
       `#FBB244` text on `rgba(251,178,68,0.2)` pill chip (padding
       5px 20px, radius 30px, 10px uppercase) — "Welcome to our site";
       `h1` Montserrat dark-navy/black "Expert SEO, SEM Services in
       London"; `p` Open Sans gray ("Far far away, behind the word
       mountains…" — paraphrase); buttons: "How we work"
       (`.btn.btn-primary`: bg `#081158`, white text, padding 12px 30px,
       `border-radius: 30px`, hover → transparent bg + navy text) and
       "Contact us" (`.btn.btn-outline-primary`: transparent bg, navy
       text + 1px navy border, pill).
     - RIGHT `div.col-lg-6` → `div.img-wrap`: flat isometric
       illustration (`images/hero_1.png` — team working on digital
       tasks: puzzle pieces, computers, charts) → seeded picsum /
       decorative SVG composition in the recreation.
  4. Features (`div.section.pt-0.section-2`, white bg; `.section`
     padding 7rem 0): centered `div.row.mb-5` → `div.col-lg-5.mx-auto
.text-center`: `span.subheading` "Features" + `h2` "Our Features"
     (Montserrat black) + `p` gray; `div.row.g-5.text-center` of THREE
     `div.col-lg-4` → `div.feature.text-center` cards: `div.icon`
     (icomoon glyph, font-size 50px, amber `rgba(251,178,68,0.5)` 40px
     circle behind top-left via `:before`, z-index -1) + `h3`
     (Montserrat) title — "Marketing Analysis" / "Digital Marketing" /
     "SEO and Backlinks" + `p` (source repeats one Lorem line — recreate
     3 DISTINCT feature blurbs).
  5. About (`div.section.section-3`, white bg): `div.row.justify-content-between`:
     - LEFT `div.col-lg-7`: `images/about_1.png` (marketing illustration)
       → seeded picsum / decorative SVG.
     - RIGHT `div.col-lg-4`: `span.subheading` "About us" + `h2` "Why
       our agency?" (Montserrat black) + `p` ("Separated they live in
       Bookmarksgrove…" — paraphrase) + THREE checklist lines ("Behind
       the word mountains" / "Bookmarksgrove right at the coast" /
       "Semantics, a large language ocean") + "About us" link/button
       (navy pill in the recreation).
  6. Services (`div.section.section-4`, white bg): centered
     `div.col-lg-6.mx-auto.text-center.mb-5`: `span.subheading`
     "Services" + `h2` "Our Services"; `div.row.justify-content-center`
     → `div.col-lg-8` → `div.row` of SIX `div.col-lg-6` →
     `div.service.d-flex` rows (2-col grid): `div.icon`
     (flaticon glyph, font-size 50px, `flex: 0 0 80px`, amber
     `rgba(251,178,68,0.5)` 40px circle behind top-left) + `div.text`:
     `h3` title + `p` — services: Design Marketing (shield), Internet
     Marketing (megaphone), Social Marketing (contract), SEO Marketing
     (startup/rocket), BackLinks Marketing (link), and a 6th
     "Design Marketing" duplicate (trophy) — the source demo repeats the
     first title; recreate the 6th as a DISTINCT service (e.g. "Brand
     Marketing" / "Content Marketing", trophy icon), distinct paragraphs
     for all six.
  7. Testimonials (`div.section.bg-light`, bg `#f8f9fa`): centered
     `div.col-lg-8.mx-auto.text-center.mb-5` heading "Testimonials";
     `div.testimonial-slider-wrap` (tiny-slider, `tns-nav` 7px dot
     buttons) of `.testimonial-v2` cards: white card, padding 40px,
     `border-radius: 7px`, 1px solid `rgba(0,0,0,0.1)` border, hover
     border → `#081158`; `blockquote` 18px 300 `rgba(0,0,0,0.5)` quote;
     `div.author.d-flex`: `div.author-pic` 40px round avatar +
     `div.author-name` name — Carl Anderson / Drew Wood / Michelle
     Alisson (source duplicates each ×3 for the slider — recreate 3
     DISTINCT customers with generic roles).
  8. Footer (`div.site-footer`, bg `#f8f9fa`; padding 7rem 0 → 30px top
     override): `div.row.mb-5` of FOUR widgets:
     - `div.col-md-6.col-lg-4` (col 1): `div.widget` brand blurb —
       "About Cololib" → "About Rankline" + `p` ("Far far away, behind
       the word mountains…" — paraphrase) + `div.social` icon row
       (30px navy `#081158` circles, radius 50%, white icons, shadow
       `0 5px 10px -2px rgba(0,0,0,0.2)`; source fontawesome →
       inline SVG brand icons, lucide-react has NONE).
     - `div.col-md-6.col-lg-2.pl-lg-5` (col 2): `div.widget` "Pages" —
       links: Blog / About / Contact.
     - `div.col-md-6.col-lg-2` (col 3): `div.widget` "Resources" —
       links: Blog / About / Contact.
     - `div.col-md-6.col-lg-4` (col 4): `div.widget` "Contact" —
       contact lines (info@Cololib → info@rankline.example, "+1 222
       212 3819", "43 Raymouth Rd. Baltemoer, London 3910").
     - Bottom bar `div.row` → `div.col-lg-12.text-center`: copyright
       "© <year> All rights reserved | This template is made with ♥ by
       Colorlib" → Component Dock credit (repo rule, NOT ColorLib).
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Brand navy **`#081158`** (35 uses): `.btn-primary` bg/border;
    `.btn-link` color; `.site-nav` active/hover link color; CTA pill bg
    - border; `.custom-accordion` active bg; `.site-footer` social
      circles bg; `.testimonial-v2:hover` border; focus ring
      `rgba(8,17,88,0.25/0.5)`.
  - Dark navy variants: **`#060e46`** (5 uses), **`#070e4b`**.
  - Amber **`#FBB244`** (3 uses, uppercase in CSS): `.subheading` text,
    CTA-pill text; icon circles use `rgba(251,178,68,0.5)` (`.feature
.icon:before`, `.service .icon:before` — 40px circle, radius 50%,
    z-index -1) and `.subheading` bg `rgba(251,178,68,0.2)`.
  - Text: headings Montserrat **`#000`** (`h1–h5, .logo`); body Open
    Sans `#212529` (Bootstrap default) / `#6c757d` muted; testimonial
    quote `rgba(0,0,0,0.5)`; footer text `#888`; footer widget link
    `#8488ac`.
  - Surfaces: white `#fff`; light gray **`#f8f9fa`** (`.bg-light`
    testimonials + `.site-footer`); `#e9ecef`, `#efefef`.
  - Fonts: **"Montserrat"** for all headings + logo (`h1, .h1, h2, .h2,
h3, .h3, h4, .h4, h5, .h5, .logo { font-family: "Montserrat",
sans-serif; color: #000 }`; hero h1 ~2.5rem+), **"Open Sans"** for
    body (via `--bs-font-sans-serif`). Import both via Google Fonts
    `<link>` in the recreation.
  - Radii: EVERYTHING pill — `.btn { padding: 12px 30px;
border-radius: 30px }`, `.subheading` radius 30px, nav CTA radius
    30px, social circles + avatars radius 50%, testimonial cards radius
    7px, slider dots 7px circles. No sharp corners (unlike other
    ColorLib templates).
  - Shadows: social circles `0 5px 10px -2px rgba(0,0,0,0.2)`; btn
    focus ring `0 0 0 0.25rem rgba(8,17,88,0.25)`.
  - Signature motifs: absolute transparent navbar over the hero (top 0,
    z-index 9); amber pill `.subheading` eyebrow chips (10px uppercase)
    above every section heading; blob SVG shape bleeding off the top-right
    of the hero; flat isometric hero/about illustrations; amber 40px
    circle tucked behind the top-left of every feature/service icon;
    `.section` rhythm = 7rem/7rem (hero 12rem top); light-gray
    testimonial + footer bands on an otherwise white page; 2-col service
    row (icon left, text right, `flex: 0 0 80px` icon column); 4-widget
    `#f8f9fa` footer.
- **Recreation decisions:** illustrations → seeded picsum placeholders
  (`picsum.photos/seed/rankline-<n>/<w>/<h>`; screen seeds before pinning
  — the hero/about art is isometric in the source, so a clean abstract
  photo works; avoid known-bad ids 91/177/338/65/1005/342/838) or a
  lightweight decorative SVG composition; icons → lucide-react (Search,
  BarChart3, Link2, ShieldCheck, Megaphone, FileText, Rocket, Trophy,
  Menu, X, Quote, ArrowRight, Phone, Mail, MapPin — probe EVERY export
  with the typeof check before importing; brand icons Facebook/Twitter/
  LinkedIn/Instagram NOT in lucide-react → inline SVG paths); Montserrat
  - Open Sans via Google Fonts `<link>` in `index.html`; brand navy
    `#081158` + amber `#FBB244` + `#060e46` + surfaces
    white/`#f8f9fa`/`#e9ecef` + text `#000`/`#212529`/`#6c757d`/`#888` in
    `@theme`; no asset/CSS/font-file copying. Demo copy paraphrased but
    same kinds (nav links + pill CTA, hero eyebrow + headline + subtext +
    primary/outline pills, 3 feature cards, about split with checklist, 6
    services, testimonial slider, 4-widget footer). Source repetition
    cleaned up: 3 distinct feature blurbs, 6 distinct service titles +
    paragraphs (source repeats "Design Marketing" for the 6th), 3 distinct
    testimonial customers (source duplicates each ×3), distinct footer
    blurb. The nav links scroll to their sections (single-page anchors) in
    the recreation.

Rankline lives in `apps/rankline` and uses shared components from
`packages/ui` (Button, ButtonLink, cn) plus the repo-standard Navbar/
Footer chrome (adapted to the absolute-over-hero header and the
4-widget `#f8f9fa` footer), and the repo-standard dark-mode toggle.

## Requirements

### Requirement: Header

The system SHALL render a header with the brand wordmark, nav links, an
amber-on-navy pill CTA button, and a working mobile menu.

#### Scenario: Header content

- **GIVEN** the Rankline page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand "Rankline" in a Montserrat
  wordmark, nav links Home / About / Services / FAQ / Contact Us, and a
  navy pill "Download now" button with amber (`#FBB244`) text
- **AND** the header SHALL sit absolutely over the hero at the top of
  the page and provide a slide-in drawer with the same links on mobile

### Requirement: Hero

The system SHALL render a split hero with a marketing column and an
illustration column, using the amber eyebrow chip and two pill buttons.

#### Scenario: Hero content

- **GIVEN** the Rankline page is rendered
- **WHEN** the hero section is visible
- **THEN** the hero SHALL show an amber pill eyebrow "Welcome to our
  site", the dark-navy headline "Expert SEO, SEM Services in London",
  a gray supporting paragraph, and two pill buttons: a navy solid "How
  we work" and a navy-outline "Contact us"
- **AND** the right side SHALL show an illustration area (seeded picsum
  or decorative SVG), with the hero section padded 12rem top / 10rem
  bottom and a decorative blob shape bleeding off the top-right corner

### Requirement: Features

The system SHALL render a "Our Features" section with three centered
icon cards.

#### Scenario: Feature cards

- **GIVEN** the Rankline page is rendered
- **WHEN** the features section is visible
- **THEN** the section SHALL show the centered amber eyebrow "Features",
  the heading "Our Features", a gray paragraph, and three cards, each
  with a 50px icon (amber 40px circle behind its top-left corner), a
  bold Montserrat title ("Marketing Analysis", "Digital Marketing",
  "SEO and Backlinks"), and a distinct paragraph

### Requirement: About

The system SHALL render a split about section with an illustration, the
"Why our agency?" heading, and a checklist.

#### Scenario: About section content

- **GIVEN** the Rankline page is rendered
- **WHEN** the about section is visible
- **THEN** the section SHALL show an illustration on the left and, on
  the right, the amber eyebrow "About us", the heading "Why our
  agency?", a gray paragraph, three checklist lines, and an "About us"
  pill link
- **AND** the checklist lines SHALL be three distinct value
  propositions (the source repeats generic Lorem lines)

### Requirement: Services

The system SHALL render an "Our Services" section with six services in a
two-column icon-row grid.

#### Scenario: Service rows

- **GIVEN** the Rankline page is rendered
- **WHEN** the services section is visible
- **THEN** the section SHALL show the centered amber eyebrow "Services",
  the heading "Our Services", and six rows in a 2-col grid, each with a
  50px icon in an 80px column (amber 40px circle behind), a bold title,
  and a paragraph
- **AND** the six services SHALL be distinct (Design Marketing,
  Internet Marketing, Social Marketing, SEO Marketing, BackLinks
  Marketing, + one more — the source demo repeats "Design Marketing"
  for the 6th row)

### Requirement: Testimonials

The system SHALL render a testimonial slider on a light-gray background
with distinct customer cards.

#### Scenario: Testimonial slider

- **GIVEN** the Rankline page is rendered
- **WHEN** the testimonials section is visible
- **THEN** the section SHALL show the heading "Testimonials" on the
  `#f8f9fa` background and a slider of white cards, each with a 18px
  light-gray quote, a 40px round avatar, and a name
- **AND** the customers SHALL be three distinct people with generic
  roles (the source duplicates the same three authors for the slider)

### Requirement: Footer

The system SHALL render a light-gray footer with four widgets and a
copyright bar linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the Rankline page is rendered
- **WHEN** the footer is visible
- **THEN** the footer SHALL show a brand widget with a blurb and round
  navy social icons, a "Pages" column (Blog / About / Contact), a
  "Resources" column (Blog / About / Contact), and a "Contact" widget
  with contact lines
- **AND** the bottom bar SHALL show the copyright line with a link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/rankline` scaffolded from the simplest existing app; package
      renamed to `@free-react-templates/rankline`; `public/CNAME` =
      `rankline.free.componentdock.com`; homepage
      `https://rankline.free.componentdock.com`.
- [ ] No "colorlib" string anywhere in `apps/rankline/*` (provenance only
      in this spec, TEMPLATES.md, and the PR).
- [ ] `@theme` tokens: `--color-brand: #081158`, `--color-brand-deep:
#060e46`, `--color-accent: #FBB244`, `--color-ink: #000`, `--color-body:
    #212529`, `--color-muted: #6c757d`, `--color-soft: #f8f9fa`,
      `--color-faint: #e9ecef`, `--color-footer: #888`; fonts Montserrat
      (headings) + Open Sans (body) via Google Fonts `<link>`.
- [ ] Section order 1:1: Header → Hero → Features → About → Services →
      Testimonials → Footer.
- [ ] Pill radii everywhere: `.btn` 30px (padding 12px 30px), eyebrow
      chips 30px (amber text on `rgba(251,178,68,0.2)`), nav CTA 30px
      (navy bg, amber text, 2px navy border), social circles + avatars
      50%, testimonial cards 7px, slider dots 7px circles. NO sharp
      corners — pill is the signature of this design.
- [ ] Amber 40px `rgba(251,178,68,0.5)` circle tucked behind the
      top-left of every feature/service icon (z-index -1); blob shape
      bleeding off the hero top-right; `.section` rhythm 7rem/7rem, hero
      12rem top; absolute transparent header over the hero.
- [ ] Distinct content everywhere the source repeats: 3 feature blurbs,
      6 service titles + paragraphs (source repeats "Design Marketing"
      for the 6th), 3 testimonial customers (source duplicates each ×3),
      footer blurb; footer credit → Component Dock (NOT ColorLib).
- [ ] Tests written first (TDD) mirroring every scenario; 100% line/
      function/branch/statement coverage; jsdom 30 localStorage
      polyfill copied from `apps/cura/src/test/setup.ts` if needed.
- [ ] `bash scripts/verify-app.sh rankline` passes (typecheck + lint +
      knip + fallow + coverage + build).
- [ ] PR description includes: source (ColorLib Echo), preview URL,
      design tokens (navy `#081158`, amber `#FBB244`, `#f8f9fa` surfaces,
      Montserrat + Open Sans, 30px pill radii, 7px testimonial cards,
      amber icon circles, hero blob), and what differs (wordmark,
      picsum/abstract illustration placeholders, distinct feature/service/
      testimonial copy, single-page anchor nav, Component Dock credit,
      no asset copying).
- [ ] Post-merge bookkeeping: mark ALL THREE TEMPLATES.md "Echo" rows
      (line ~576 plus duplicates ~988 and ~2780) `[x]` with the live URL
      and run `npm run readme:status`.
