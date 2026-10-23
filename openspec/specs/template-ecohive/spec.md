# Template: Ecohive (Web Hosting)

## Purpose

Ecohive is a full multi-section **web-hosting marketing site** in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Ecohosting"** template (source slug `ecohosting` — the hosting family's
**deep-plum / magenta isometric** page: a dark `#2d0a31` shell whose hero carries
a light-on-dark headline beside a large isometric server-stack illustration, then
a dark body of domain search, a feature grid, an overlapping white pricing band,
two light split content bands, a dark FAQ accordion, a plum testimonial card and a
long dark footer).

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches section structure, order,
copy kind and design tokens 1:1 but copies no asset (no images, no fonts, no CSS
files, no icon paths) and never reuses the source name or copy verbatim.

- **Source:** https://colorlib.com/wp/template/ecohosting/
  (page title \"Ecohosting | Fast, Secure Web Hosting and Domains\" from the live
  preview; verified 2026-10-11)
- **Preview:** `https://preview.colorlib.com/theme/ecohosting/` returns
  **HTTP 200**, `38,873 B` (verified 2026-10-11). Its DOM was fetched and parsed
  and its main stylesheet
  `https://preview.colorlib.com/theme/ecohosting/assets/css/style.min.css?v=3.0.0`
  (HTTP 200, **202,978 B**) was tokenized. Live preview is the primary reference;
  no fallback was needed.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/ecohosting-free-template.jpg
  (HTTP 200, 50,966 B, served as **AVIF** → converted to 1200×946 PNG and
  reviewed visually 2026-10-11).
- **New name:** `ecohive` (apps/ecohive, `@free-react-templates/ecohive`) — the
  source demo name "Ecohosting", its logo artwork, its hero/feature SVGs, its
  `img/**` photographs and its copy are never reused. `ecohive` collides with no
  `apps/` folder and no `openspec/specs/` folder.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Ecohosting" (source:
  https://colorlib.com/wp/template/ecohosting/). Listed in TEMPLATES.md
  `## Web Hosting` at the `- [ ] **Ecohosting**` line, slug `ecohosting`
  appears exactly once (no duplicate `- [ ]` line). No implementation or spec
  existed for this item on main before this one.
- **Preview URL:** `https://preview.colorlib.com/theme/ecohosting/` → **HTTP
  200** (38,873 B, `text/html; charset=utf-8`). Re-verified by the implementer on
  2026-10-12 (same 200/38,873 B; stylesheet 202,978 B): the live DOM shows
  **four** FAQ questions (not three) and the TLD row as `.com $15.99 .net $10.99
.org $10.99 .me $10.99` (the screenshot's `.rog` is a typo in the raster; the
  DOM is authoritative). Both corrections are reflected in the app. Main stylesheet
  `assets/css/style.min.css?v=3.0.0` → HTTP 200, 202,978 B. Reference artifacts
  (research date 2026-10-11): `/tmp/eco.html`, `/tmp/eco.css`, `/tmp/eco.png`
  (1200×946, converted from the AVIF screenshot). Preview HTML/CSS are
  authoritative for section structure, copy kind and tokens.
- **Screenshot (1200×946):** a browser-chrome mock-up of the top of the page.
  A **deep plum/aubergine** field (`#2d0a31`) fills the viewport. A white leaf
  wordmark "Eco-hosting" sits top-left with an uppercase menu
  (Home, Packages, Help, Blog, Contact) and a magenta **gradient pill** "Sign
  Up" plus a plain "Sign In" link on the right. The left half of the hero holds
  a small violet eyebrow "Best Domain & hosting service provider" (`#9f78ff`), a
  large bold white H1 "Powerful web hosting", a muted lavender paragraph and a
  magenta **gradient pill** button "Get Started". The right half holds a large
  **isometric server-stack illustration** (three stacked violet/magenta blocks
  with circuit traces and orbit rings) floating on a faint line pattern. Below
  the hero, still on plum, a left-aligned "Search new domain" heading + short
  paragraph sits beside a wide **pill domain-search bar** (white rounded input
  with a globe icon and a magenta circular search button); a centered row of TLD
  prices follows (".com $15.99 .net $10.99 .rog $10.99 .me $10.99" — TLD in
  white, price in magenta). A centered bold white title "Most amazing features"
  heads a feature grid whose first row shows outlined violet icons + white
  captions (Employee Owned, Commitment To Security, Passion For Privacy).
- **Section order (measured from the preview DOM, top to bottom):**
  1. `header-area header-transparent` — logo + nav, absolutely positioned over
     the hero (transparent), so the hero's plum shows through.
  2. `section.slider-area.slider-bg` — carousel (`single-slider`, `hero__caption`)
     over `#2d0a31`: text column (eyebrow `span`, `h1`, paragraph, gradient pill
     CTA) + `hero__img` illustration column.
  3. `section.domain-search-area.section-bg1` — "Search new domain" + search form
     - TLD price row (dark).
  4. `section.team-area.section-padding40.section-bg1` — "Most amazing features"
     centered title + 6 feature cards (`single-cat`: icon + `h5` + blurb).
  5. `section.pricing-card-area.fix` — "Choose plan which fit for you" heading
     over a dark band whose `:before`/`:after` paint the plum; three white
     `single-card` tiers overlap the band.
  6. `section.about-area1.section-padding40` — light (`#f9f9ff`) split band
     "Global server location" (image + `about-caption` text).
  7. `section.about-area1.pb-bottom` — light split band "Dedicated support"
     (text + image, reversed).
  8. `section.ask-questions.section-bg1.section-padding30.fix` — "Frequently ask
     questions" title + accordion (4 Q&A).
  9. `section.testimonial-area.section-bg1` — plum testimonial card
     (`single-testimonial`, `#4c1e51`, radius 12).
  10. `footer-wrappr` → `footer-area.footer-padding` — logo, newsletter form,
      Company / Products / Support columns, social links, copyright bar.

## Design tokens (from the preview stylesheet)

Tailwind 4 `@theme` tokens (map exactly):

- `--color-brand`: `#2d0a31` — deep plum/aubergine page shell
  (`.slider-bg`, `.section-bg1`, `.pricing-card-area:before`).
- `--color-accent`: `#f067ff` — magenta accent (nav hover + underline, links,
  outline pricing button border, eyebrow highlights).
- `--color-accent-strong`: `#a838bf` — deeper magenta (secondary accent band /
  button base).
- `--color-gradient-from`: `#7346d6`; `--color-gradient-to`: `#a136b8` — the
  button gradient (`background:linear-gradient(to bottom,#7346d6,#a136b8)`).
- `--color-hero-eyebrow`: `#9f78ff` — violet hero eyebrow.
- `--color-muted-on-dark`: `#a5a7c5` — body/paragraph text on plum
  (`.hero__caption p`, `.team-area .cat-cap p`, footer paragraphs).
- `--color-surface`: `#f9f9ff` (alt `#f9fafc`) — light content bands
  (`.about-area1`, `.testimonial-bg`).
- `--color-ink`: `#4c1e51` — headings on the light bands
  (`.section-tittle2 h2`) and the testimonial card background
  (`.single-testimonial`).
- `--color-ink-eyebrow`: `#140c40` — dark eyebrow/kicker on light bands.
- `--color-body`: `#3b4855` / `#636a8a` — body copy on light bands.
- `--color-feature-num`: `#6785ff` — numeric index inside feature cards
  (`.cat-cap span`).
- **Fonts:** `Poppins` for headings, nav, buttons, eyebrows and card titles;
  `Open Sans` for paragraphs (`font-family:Poppins,sans-serif` /
  `font-family:Open Sans,sans-serif`). Load both via a `<link>` in `index.html`.
- **Buttons:** `.btn` = Poppins, `text-transform: capitalize`, `padding: 27px
44px`, `color:#fff`, `font-size:15px`, `font-weight:600`, `line-height:1`;
  base fill is the gradient above (revealed/animated via a `:before` scaleX
  sweep that turns solid `#f067ff` on hover). Pill radius.
- **Outline pill button** (pricing cards `.borders-btn`): transparent, `1px
solid #f067ff`, `border-radius:30px`, `padding:10px 64px`,
  `text-transform:uppercase`, `color:#f067ff`; on card hover text turns white
  over the gradient.
- **Pricing card** (`.single-card`): `background:#fff`, `padding:70px 0`,
  `border-radius:8px`, `box-shadow:0 8px 26px rgba(67,40,124,.08)`; interior
  divider `1px solid #E7E6EB`.
- **Testimonial card** (`.single-testimonial`): `background:#4c1e51`,
  `border-radius:12px`, `padding:70px 100px`, white quote, 68×68 initials avatar.

## Requirements

### Requirement: Header

The site SHALL render a transparent sticky header over the hero with a leaf
wordmark, a five-item uppercase primary nav and two right-side auth controls.

#### Scenario: Desktop header

- **WHEN** the page loads
- **THEN** the header shows the Ecohive wordmark, nav links Home, Packages,
  Help, Blog, Contact, a magenta gradient pill "Sign Up" and a plain "Sign In"
  link; nav links underline in magenta on hover and the header is transparent
  over the plum hero.

#### Scenario: Mobile header

- **WHEN** the viewport is narrow
- **THEN** the nav collapses into an accessible toggle menu without horizontal
  overflow.

### Requirement: Hero

The hero SHALL be a dark plum two-column band with a rotating slide set.

#### Scenario: Hero content

- **WHEN** the hero renders
- **THEN** a violet eyebrow, a large white H1 ("Powerful web hosting"), a muted
  on-dark paragraph and a gradient pill CTA ("Get Started") appear in the left
  column, and an isometric server illustration placeholder sits in the right
  column; a carousel indicator is present.

### Requirement: Domain search

The page SHALL render a dark domain-search band with a heading, a supporting
paragraph, a pill search form and a row of TLD price chips.

#### Scenario: Search form

- **WHEN** the domain-search band renders on the dark shell
- **THEN** it shows a "Search new domain" heading, a supporting paragraph, a
  rounded input with a leading globe icon and a circular magenta search button,
  and a centered row of TLD price chips (.com $15.99, .net $10.99, .org $10.99,
  .me $10.99).

### Requirement: Features

The feature band SHALL show a centered title over six icon cards in a
responsive grid.

#### Scenario: Feature grid

- **WHEN** the "Most amazing features" band renders
- **THEN** six feature cards each show an outlined icon, an `h5` caption and a
  short blurb, laid out in a responsive grid (3 columns on desktop).

### Requirement: Pricing

The pricing band SHALL overlap three white tier cards on the plum shell, each
closed by an outline pill button.

#### Scenario: Pricing tiers

- **WHEN** the "Choose plan which fit for you" band renders
- **THEN** three white tier cards (Shared Hosting $2.95/month, Dedicated Hosting
  $89.99/month, Cloud Hosting $14.99/month) overlap the plum band, each with a
  feature list and an outline pill button that fills with the gradient on hover.

### Requirement: Split content bands

The page SHALL render two light split bands whose image and copy columns
alternate.

#### Scenario: Global server location & Dedicated support

- **WHEN** the two light split bands render
- **THEN** each shows a heading (ink `#4c1e51`) and paragraph beside an image
  placeholder, with the image column alternating left/right between them.

### Requirement: FAQ

The FAQ band SHALL render a title and an accordion of the four source
questions, with at most one panel open at a time.

#### Scenario: FAQ accordion

- **WHEN** the FAQ band renders
- **THEN** it shows a "Frequently ask questions" title and an accordion whose
  expanding/collapsing with keyboard support, exposing the four source
  questions (web-server connection, choosing a domain name, www. vs non-www,
  IIS password prompt). Only one panel is open at a time.

### Requirement: Testimonials

The testimonial band SHALL render a plum rounded card with a quote, an initials
avatar and the founder's name and role, with one card per testimonial.

#### Scenario: Testimonial card

- **WHEN** the testimonial band renders
- **THEN** a plum rounded card shows a quote, a 68×68 initials avatar and the
  founder's name + role.

### Requirement: Footer

The footer SHALL render the wordmark, a newsletter form, three link columns,
social icons and a copyright bar that links to https://www.componentdock.com/.

#### Scenario: Footer structure

- **WHEN** the footer renders
- **THEN** it shows the Ecohive wordmark, a newsletter email form, Company /
  Products / Support link columns, social icon links, a copyright bar, and a
  link to https://www.componentdock.com/ ("Component Dock").

### Requirement: Conventions

The app SHALL follow the monorepo conventions (React 19 + Tailwind 4 + TS
strict, shared `packages/ui` components, no provenance strings in app files,
100% coverage).

#### Scenario: Repo conventions

- **WHEN** the app is built
- **THEN** it is React 19 + Tailwind 4 + TS strict, reuses `packages/ui` where
  possible, has no ColorLib reference in any app file, its `public/CNAME` is
  `ecohive.free.componentdock.com`, its `"homepage"` is
  `https://ecohive.free.componentdock.com`, and its tests reach 100% coverage.

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/ecohive/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/ecohive/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `openspec/specs/template-ecohive/spec.md` validates (`npm run spec:validate`).
- [x] `apps/ecohive` exists, package `@free-react-templates/ecohive`, no ColorLib
      string in any file.
- [ ] Section order matches the list above 1:1.
- [ ] Design tokens match (`#2d0a31`, `#f067ff`, gradient `#7346d6→#a136b8`,
      Poppins/Open Sans, pill buttons, 8px pricing card, 12px testimonial card).
- [ ] All imagery is `https://picsum.photos/seed/ecohive-<n>/<w>/<h>`; no copied
      assets.
- [ ] `scripts/verify-app.sh ecohive` passes (typecheck + lint + 100% coverage +
      build).
- [x] `public/CNAME` = `ecohive.free.componentdock.com`; homepage set.
- [x] Footer links to https://www.componentdock.com/.
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Header — the header shows the Ecohive wordmark, nav links Home, Packages,
- [x] Hero — a violet eyebrow, a large white H1 ("Powerful web hosting"), a muted
- [x] Domain search — it shows a "Search new domain" heading, a supporting paragraph, a
- [ ] Features — six feature cards each show an outlined icon, an `h5` caption and a
- [ ] Pricing — three white tier cards (Shared Hosting $2.95/month, Dedicated Hosting
- [ ] Split content bands — each shows a heading (ink `#4c1e51`) and paragraph beside an image
- [x] FAQ — it shows a "Frequently ask questions" title and an accordion whose
- [ ] Testimonials — a plum rounded card shows a quote, a 68×68 initials avatar and the
