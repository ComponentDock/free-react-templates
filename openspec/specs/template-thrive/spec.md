# Template: Thrive (Startup / SaaS Landing Page)

## Purpose

Thrive is a single-page startup / SaaS landing-page website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Startright" website template (source:
https://colorlib.com/wp/template/startright/ — "Startright &mdash; Free
Bootstrap 5 Website Template by Colorlib"), built under a DIFFERENT name
(Thrive — a single word evoking growth, fitting a startup whose hero says "A
big business starts small"; single lowercase word, no collision with `apps/`,
`openspec/specs/` or `docs/templates/` — verified 2026-08-14), per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The source appears TWICE in TEMPLATES.md (dup-row trap): line 627
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one) and
line 1181 (**Business (365)**) — both are `- [ ]` rows of the SAME template.
ONE implementation covers both rows (mark all `[x]` with the same surge URL
at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Startright" — modern startup / SaaS landing page:
  dark-teal hero with a bold white headline + flat vector illustration on an
  orange panel, press-logos strip, dark-teal/white split section, light
  "Productive with" section with an inline testimonial, dark counter band,
  6 feature cards, light 4-widget footer with a subscribe form. Bootstrap 5
  based (bootstrap bundle + tiny-slider + aos + navbar + glightbox + counter
  - custom.js) plus a custom `css/style.css` (~62 KB, fully extracted for
    tokens); icon font icomoon (feature glyphs `icon-toggle-off`,
    `icon-fingerprint`, `icon-send-o`, `icon-filter_none`, `icon-phonelink`,
    `icon-code2`, checkmark `\e5ca`). Brand name used in the source copy:
    **"Startright"** (the recreation brands itself **Thrive** but keeps the
    same section structure, copy kinds and layout). The design is a mix: dark
    teal `#10495c` hero/counter/split-panel + warm orange `#f2ad5f` accents +
    white/light sections.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/startright/` — HTTP 200, ~14 KB HTML
  (REACHABLE — the preview is live, not a 404). The index page carries the
  FULL page: navbar + hero + logos strip + "better way" split + "Productive
  with" light section + Stats band + Features + footer (all sections parsed
  from the live DOM). Subpages exist in the nav (`solutions.html`,
  `plans.html`, `whyus.html`, `contact.html`) but are OUT OF SCOPE for the
  single-page recreation. Custom CSS `css/style.css` (~62 KB, fully extracted
  for tokens). Screenshot `startright-free-template.jpg` (1200×946 AVIF,
  viewed in browser): dark-teal hero (`#10495c`) with nav top right
  (Home orange-active), big bold WHITE sans-serif headline "A big business
  starts small" left + orange "Get started" button; right — flat vector
  illustration (woman sitting cross-legged working on a laptop, floating
  business icons: rocket, gears, clock, bar charts, browser windows, plants)
  on a warm orange `#f2ad5f` panel. Below: white "As seen on" strip with 5
  greyed press logos (NYT, Forbes, FOX, Business Insider, NBC); then a
  white-bg section whose right 70% is a dark-teal panel carrying a WHITE h2
  "A better way to run your business" + orange checkmark list + orange
  button; then a light-grey section ("Productive with Startright", white
  quote card with round avatar + orange illustration panel); then the dark
  teal Stats band (3 big white numbers); then white Features section (2 rows
  × 3 cards, each with a circular grey icon); footer light grey with 4
  columns and a dark-teal Subscribe button. Screenshot cuts off the footer
  bottom bar — that comes from the live DOM.
- **Visual design (from DOM + CSS tokens + screenshot):** **Poppins**
  (400/700) everywhere (Google Fonts via cloudflare-fonts in the source).
  Brand colors: **orange `#f2ad5f`** (`--bs-primary`) — logo, nav
  hover/active, buttons, `.img-wrap` panels, checkmarks, icon-circle hover
  glyph — and **deep teal `#10495c`** (`--bs-secondary`) — hero bg, section-1
  `:after` panel, counter band bg, `text-secondary` headings, feature-card
  hover borders/icon-circles, Subscribe button. Neutrals: `#fff`, `#212529`
  (body), `#f8f9fa` (`--bs-light` section + footer bg), `#252837` (feature
  card body), `#efefef` (icon circles, form input bg), `rgba(0,0,0,0.5)`
  (text-black-50), `rgba(255,255,255,0.5)` (text-white-50), nav links
  `rgba(255,255,255,0.7)`. Buttons are **SQUARE** (border-radius 0!),
  padding 12px 20px, orange bg + WHITE text + 2px transparent border; hover
  → white bg + orange text + shadow `0 15px 30px rgba(0,0,0,0.2)`; the
  `btn-primary-to-outline` variant hovers to transparent bg + orange border
  - white text. Hero is 100vh solid teal (NOT a photo). Section rhythm
    `.section` padding 7rem 0; `.logos` margin-top 100px; footer padding
    100px 0 70px, font-size 14px. Form inputs: radius 7px, height 52px, bg
    `#efefef`, transparent border.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.site-nav`, `position: absolute; top: 0; z-index: 9;
width: 100%`, padding 20px 0, transparent over the teal hero): brand
     **"Startright"** left (`a.logo` 20px/700 `#f2ad5f`, top 6px) with a
     white trailing **"."** (`span.text-white`); links right (14px, padding
     10px 15px, color `rgba(255,255,255,0.7)`, hover + `.active` `#f2ad5f`):
     **Home** (active) · **Solutions** (`li.has-children` + dropdown: Sub
     Menu One, Sub Menu Two, Dropdown → Sub Menu One/Two/Three — white bg,
     shadow `0 2px 10px -2px rgba(0,0,0,0.1)`, padding 20px 0, `min-width:
180px`, links `#000` hover `#f2ad5f`, nested dropdown `left: 100%`) ·
     **Plans & Pricing** · **Why Us** · **Contact Us**. Mobile: burger
     (28×32, `d-lg-none`) + off-canvas `site-mobile-menu`. Recreation: brand
     "Thrive", same top-level links (the nested "Dropdown → Sub Menu One/Two/
     Three" may be simplified to a single dropdown level — note in PR),
     hamburger + mobile panel.
  2. **Hero** (`div.hero`, bg `#10495c`, `height: 100vh`, `padding-top:
12rem`; ≤991.98px `height: auto`, `padding-top: 10rem`): `div.intro`
     (z-2, `padding-top: 50px`; mobile `padding-top: 0`, `margin-bottom:
50px`): h1 `.heading.mb-4` **"A big business starts small"** (700,
     `#fff`, 60px, `max-width: 600px`; 40px mobile) + p with `a.btn.btn-
primary.px-4.btn-primary-to-outline` **"Get started"**; then `row` →
     `col-lg-8.ms-auto` → `div.img-wrap` (bg `#f2ad5f`, padding 40px,
     `margin-top: -400px` — overlaps up over the intro; mobile `margin-top:
0`, `margin-bottom: -5rem`) with flat illustration
     (`images/illustration_1.png`, `img-fluid`).
  3. **Logos strip** (`div.section.logos`, `margin-top: 100px`): centered
     `col-lg-7.mx-auto.mb-4` h5 **"As seen on"**; `row.align-items-center
g-5.text-center.justify-content-center` of 5 greyed press logos
     (`col.text-center`): NYT (`img.nyt`, max-width 200px) · Forbes
     (`img.forbes`, 100px) · FOX (`img.fox`, 100px) · Business Insider
     (`img.bi`, 100px) · NBC (`img.nbc`, 50px). NOTE: brand logo assets must
     NOT be copied — recreation uses 5 grey text wordmarks with invented
     press names (same kind of content) or the picsum-free text approach;
     keep the "As seen on" heading.
  4. **"A better way" split** (`div.section.secion-1` — note the source
     TYPO "secion", keep the class in the recreation or rename; white bg +
     `:after` pseudo = dark-teal panel `#10495c`, absolute right 0, top
     50px, bottom 0, `width: 70%` — 100% ≤991.98px): `row.align-items-
center`: left `col-lg-6.pe-md-5.me-auto` → `div.img-wrap` (z-1, bg
     `#f2ad5f`, padding 40px; mobile `margin-bottom: 30px`) with
     illustration; right `col-lg-5.ms-auto` → `div.contents` (z-2,
     `color: #fff`): h2 `.heading.mb-4` **"A better way to run your
     business"** (white 40px/700; 30px mobile) + p `.mb-5.text-white-50`
     ("Far far away, behind the word mountains, far from the countries
     Vokalia and Consonantia, there live the blind texts.") + `ul.list-
unstyled.ul-check.primary.mb-5` of 3 items (orange checkmark glyph
     `\e5ca` 20px `#f2ad5f` at left, padding-left 30px, span text-white-50:
     "Far far away, behind the word" · "Far from the countries Vokalia" ·
     "Separated they live in Bookmarksgrove") + p with **"Get started"**
     button (same style).
  5. **"Productive with"** (`div.section.section-2.bg-light` — bg
     `#f8f9fa`): `row.align-items-stretch`: left `col-lg-7.mb-4.mb-lg-0` →
     `div.contents.h-100` (WHITE card: bg `#fff`, padding 30px, radius 4px)
     → `div.contents-inner` (width 80%, `margin-left: auto`): h2
     `.heading.text-secondary.mb-4` **"Productive with Startright"** (teal
     `#10495c`, 40px/700) + 2 p `.text-black-50` ("Far far away, behind the
     word mountains, ... a large language ocean." / "A small river named
     Duden flows by their place and supplies it with the necessary
     regelialia. It is a paradisematic country, in which roasted parts of
     sentences fly into your mouth.") + `div.testimonial-horizontal.d-flex.
mt-5` (avatar col flex `0 0 80px`: `img.img-fluid` 50px
     `border-radius: 50%`; `blockquote.text`: italic p (same Duden quote) +
     `div.author`: **John Doe** / **XYZ Inc.**); right `col-lg-5` →
     `div.img-wrap.h-100` (orange `#f2ad5f`, padding 40px) with
     illustration. Brand the h2 "Productive with Thrive" in the recreation.
  6. **Stats band** (`div.section.bg-secondary.section-counter` — bg
     `#10495c`): `row.g-5`: `col-12` h2 `.heading.text-white.fw-bold`
     **"Stats"**; then 3 × `col-md-6.col-lg-4.mb-4.mb-lg-0`:
     `span.countup.display-5.text-white` (display-5 = 3rem/300 ≥1200px)
     **244982** · **2488938** · **1335** + `span.text-white-50.d-block`
     **Reviews** · **Downloads** · **Employees** (counters animate count-up
     on view via counter.js — recreation: count-up on mount/in-view with
     fake timers in tests).
  7. **Features** (`div.section`, white): `row.mb-5` → `col-lg-7.text-
center.mx-auto` h2 `.fw-bold.text-secondary.heading` **"Features"**;
     `row` of **6 feature cards** (`col-md-6.col-lg-4`): `a.feature-link`
     (padding 30px, text-align center, radius 4px, `margin-bottom: 30px`,
     border 2px `rgba(0,0,0,0.05)`; hover → `border-color: #10495c`):
     `span.icon-*` (30px glyph in an **80px circle** — width/height/line-
     height 80px, radius 50%, bg `#efefef`, color `#000`; hover → bg
     `#10495c` + glyph `#f2ad5f`) + h3 (16px/700 `#000`; hover `#10495c`) +
     p (`#252837`). Icons: `icon-toggle-off` · `icon-fingerprint` ·
     `icon-send-o` · `icon-filter_none` · `icon-phonelink` · `icon-code2`.
     Titles (VERBATIM from source, note the ×2 repetition): Easy to use ·
     Fast and Secure · Robust and Intuitive · Easy to use · Fast and Secure
     · Robust and Intuitive — VARY the titles in the recreation (6 distinct
     titles, same kind of content) for realism.
  8. **Footer** (`div.site-footer.bg-light`, 14px, padding 100px 0 70px):
     `row` of 4 widgets — **Help** (`col-lg-2`: h3 16px mb-30px + `ul.list-
unstyled.links` width 150px: Contact us · Bootstrap 5 · Web Design ·
     Pricing · FAQ), **About** (`col-lg-2`: About us · Services · Solutions
     · Team · FAQ), **Support** (`col-lg-2`: Knowledge base · Forum ·
     Contact), **Subscribe** (`col-lg-6`: h3 "Subscribe" + `form.subscribe`:
     `div.d-flex` — `input[type=email].form-control.me-3` placeholder
     "Email address" (radius 7px, height 52px, bg `#efefef`, transparent
     border) + `input[type=submit].btn.btn-secondary.text-white`
     **"Subscribe"** (teal bg)); widget links color `rgba(0,0,0,0.5)` hover
     `#000`; bottom bar `row.mt-5` → `col-12.text-center.copyright`:
     "Copyright &copy; <year> All rights reserved | This template is made
     with ♥ by Colorlib" — Colorlib credit → **Component Dock link
     (mandatory)** `https://www.componentdock.com/`.

## Design tokens

- **Brand orange:** `#f2ad5f` (`--bs-primary`) — logo text, nav
  hover/active, `.btn-primary` bg, `.img-wrap` panels (hero, section-1,
  section-2), `.ul-check.primary` checkmarks, icon-circle hover glyph,
  footer nothing (footer uses teal Subscribe). Hover shades: `#f4b977` bg /
  `#f3b56f` border (btn-primary hover).
- **Brand teal:** `#10495c` (`--bs-secondary`) — hero bg, `.secion-1:after`
  panel (70% right, top 50px), `.section-counter` bg, `.text-secondary`
  headings, `.feature-link:hover` border + icon-circle bg + h3, footer
  Subscribe button bg. Darker shade `#0d3a4a` (defined, minor).
- **Page bg:** `#fff` (body, hero-intro area, features); `#f8f9fa`
  (`--bs-light` — section-2 + footer). Body text `#212529`; muted
  `rgba(0,0,0,0.5)` (`text-black-50`) on light, `rgba(255,255,255,0.5)`
  (`text-white-50`) on dark; nav links `rgba(255,255,255,0.7)`.
- **Font:** **"Poppins", sans-serif** (Google Fonts 400 + 700) — body AND
  headings (`--bs-font-sans-serif`). Headings 700 via `.heading`.
- **Type scale:** hero h1 `.heading` 60px/700 white (40px mobile);
  `.secion-1 .heading` 40px (30px mobile); `.section-2 .contents .heading`
  40px; `.feature-link h3` 16px/700; footer widget h3 16px;
  `display-5` counters 3rem/300 (fluid `calc(1.425rem + 2.1vw)`); body 1rem;
  footer 14px; nav links 14px; logo 20px/700.
- **Buttons:** **SQUARE** — `border-radius: 0`, padding **12px 20px**, 2px
  transparent border, no uppercase; `.btn-primary`/`.btn-primary-to-outline`
  bg `#f2ad5f` + text `#fff`; hover → bg `#fff` + text `#f2ad5f` + shadow
  `0 15px 30px 0 rgba(0,0,0,0.2)`; `.btn-primary-to-outline:hover` →
  transparent bg + `border-color: #f2ad5f` + text `#fff` + no shadow.
  Footer Subscribe: `btn-secondary` teal `#10495c` + white text.
- **Feature cards:** `.feature-link` padding 30px, radius 4px, border 2px
  `rgba(0,0,0,0.05)`, mb 30px; icon circle 80px radius 50% bg `#efefef`
  glyph 30px `#000`; hover → border + icon bg `#10495c`, glyph `#f2ad5f`,
  h3 `#10495c`; card p `#252837`.
- **Checkmark list:** `.ul-check li` padding-left 30px, mb 10px; `:before`
  glyph 20px `#f2ad5f` (source icomoon `\e5ca` → lucide Check in the
  recreation).
- **Hero:** `#10495c` solid, 100vh, padding-top 12rem (mobile auto/10rem);
  `.img-wrap` orange panel padding 40px, desktop `margin-top: -400px`
  (overlaps up into the intro) / mobile `margin-top: 0; margin-bottom:
-5rem`; heading max-width 600px.
- **Section rhythm:** `.section` padding 7rem 0; `.logos` margin-top 100px;
  `.section-2 .contents` white card padding 30px radius 4px,
  `.contents-inner` width 80% ml-auto; footer padding 100px 0 70px 14px.
- **Form:** `.form-control` radius 7px, height 52px, bg `#efefef`,
  transparent border.
- **Icons:** source icomoon glyphs → **lucide-react** candidates:
  `icon-toggle-off` → ToggleLeft (probe export), `icon-fingerprint` →
  Fingerprint, `icon-send-o` → Send, `icon-filter_none` → Filter (probe),
  `icon-phonelink` → Smartphone, `icon-code2` → Code2, checkmark → Check.
  Probe EVERY lucide import with the `typeof` check before use; brand icons
  (press logos, socials) are NOT in lucide-react — use text wordmarks /
  inline SVG.

## Requirements

### Requirement: Header navigation

- **GIVEN** the Thrive page is loaded
- **WHEN** the user views the top of the page
- **THEN** a transparent navbar SHALL render over the dark-teal hero with
  the THRIVE brand/logo left (orange wordmark + white dot), nav links Home ·
  Solutions · Plans & Pricing · Why Us · Contact Us right, and Home
  highlighted as active
- **AND** on viewports ≤ the mobile breakpoint the navbar SHALL show a
  hamburger toggler

#### Scenario: Solutions dropdown

- **GIVEN** the navbar is rendered on a desktop viewport
- **WHEN** the user hovers/focuses **Solutions**
- **THEN** a white dropdown SHALL open with Sub Menu One, Sub Menu Two and a
  nested Dropdown item (Sub Menu One/Two/Three may be simplified to one
  level — note in PR)

#### Scenario: Mobile navigation

- **GIVEN** the Thrive page is rendered on a viewport narrower than the
  desktop breakpoint
- **WHEN** the user taps the hamburger toggler
- **THEN** a mobile menu SHALL open with the same links and a close control

### Requirement: Hero

- **GIVEN** the Thrive page is loaded
- **WHEN** the user views the hero
- **THEN** a 100vh solid dark-teal `#10495c` hero SHALL render the white
  bold h1 **"A big business starts small"**, an orange square **Get
  started** button, and on desktop an orange-framed illustration panel
  overlapping upward on the right (source `.img-wrap` `margin-top: -400px`)

#### Scenario: Hero illustration panel

- **GIVEN** the hero is displayed on a desktop viewport
- **WHEN** the user views the right column
- **THEN** an orange `#f2ad5f` panel SHALL contain the hero illustration and
  overlap upward over the intro text; on mobile it SHALL sit below the text
  with a negative bottom margin (source: `margin-top: 0; margin-bottom:
-5rem`)

### Requirement: Press logos strip

- **GIVEN** the user scrolls past the hero
- **WHEN** the logos strip is displayed
- **THEN** the centered heading **"As seen on"** and a row of 5 greyed press
  wordmarks SHALL render (source uses NYT/Forbes/FOX/BI/NBC logo images —
  the recreation uses 5 grey text wordmarks with invented press names, no
  copied brand assets)

### Requirement: "A better way" split section

- **GIVEN** the user scrolls past the logos strip
- **WHEN** the split section is displayed
- **THEN** a section with a white background and a dark-teal `#10495c`
  panel covering the right 70% (100% on mobile) SHALL show the white h2
  **"A better way to run your business"**, a muted paragraph, a list of 3
  items with orange checkmarks, and a **Get started** button on the teal
  side, with an orange-framed illustration on the left

#### Scenario: Orange checkmark list

- **GIVEN** the split section is displayed
- **WHEN** the user views the list
- **THEN** each of the 3 items SHALL show an orange `#f2ad5f` checkmark
  (source `.ul-check.primary li:before` glyph `#f2ad5f`)

### Requirement: "Productive with" light section

- **GIVEN** the user scrolls past the split section
- **WHEN** the light `#f8f9fa` section is displayed
- **THEN** a white rounded card SHALL show the teal h2 **"Productive with
  Thrive"**, two muted paragraphs, and an inline testimonial (50px round
  avatar + italic quote + author **John Doe**, **XYZ Inc.**) on the left,
  with an orange-framed illustration on the right

#### Scenario: Inline testimonial

- **GIVEN** the light section is displayed
- **WHEN** the user views the card
- **THEN** the testimonial SHALL render an italic quote with a round avatar
  image and the author name/company

### Requirement: Stats band

- **GIVEN** the user scrolls past the light section
- **WHEN** the dark-teal Stats band is displayed
- **THEN** the white heading **"Stats"** and 3 counter blocks SHALL render —
  big white numbers (244982 · 2488938 · 1335) over muted labels (Reviews ·
  Downloads · Employees) — counting up on view (source `.countup` + counter.js)

#### Scenario: Counter animation

- **GIVEN** the Stats band is displayed
- **WHEN** the numbers become visible
- **THEN** each number SHALL animate from 0 to its target value (test with
  fake timers inside `act()`)

### Requirement: Features

- **GIVEN** the user scrolls past the Stats band
- **WHEN** the features section is displayed
- **THEN** the centered teal heading **"Features"** and a responsive grid of
  6 feature cards SHALL render — each with a 80px grey circle icon, a 16px
  bold black title and muted body text

#### Scenario: Feature card hover

- **GIVEN** a feature card is displayed
- **WHEN** the user hovers over it
- **THEN** the card border SHALL turn teal `#10495c`, the icon circle SHALL
  turn teal with an orange `#f2ad5f` glyph, and the title SHALL turn teal
  (source `.feature-link:hover` rules)

#### Scenario: Varied feature titles

- **GIVEN** the features section is displayed
- **WHEN** the user reads the six cards
- **THEN** each card SHALL show its own title (the source repeats Easy to
  use / Fast and Secure / Robust and Intuitive ×2 — vary to 6 distinct
  titles, same kind of content)

### Requirement: Footer

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is displayed
- **THEN** a light `#f8f9fa` footer SHALL show four widgets — Help (5
  links), About (5 links), Support (3 links) and Subscribe (email input +
  teal Subscribe button) — with a centered bottom bar containing the
  copyright line and a link to **https://www.componentdock.com/**
  ("Component Dock") — mandatory footer convention; no ColorLib credit

#### Scenario: Subscribe form

- **GIVEN** the footer is displayed
- **WHEN** the user enters an email and submits
- **THEN** a success state SHALL replace the form (validation on submit;
  invalid email shows an error)

#### Scenario: Component Dock link

- **GIVEN** the footer is displayed
- **WHEN** the user reads the bottom bar
- **THEN** a link to **https://www.componentdock.com/** labeled
  "Component Dock" SHALL be present and no ColorLib credit SHALL appear

### Requirement: Responsive layout

- **GIVEN** the Thrive page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** the hero SHALL stack (auto height, illustration below text with
  `margin-bottom: -5rem`), the teal split panel SHALL cover 100% width, the
  counter band SHALL collapse to 1 column (source `col-md-6 col-lg-4` →
  stacked below md), the features grid to 1 column, the footer widgets to
  stacked columns, and the navbar SHALL use the hamburger menu

#### Scenario: Stacked layout

- **GIVEN** the Thrive page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** every multi-column section SHALL stack appropriately with
  tappable buttons and the header SHALL use the hamburger menu

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-thrive`
- [ ] `scripts/verify-app.sh thrive` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with the live DOM): transparent navbar
      (THRIVE brand + Home/Solutions(dropdown)/Plans & Pricing/Why Us/
      Contact Us; hamburger on mobile) → hero (100vh solid #10495c,
      "A big business starts small" + orange Get started + orange
      illustration panel overlapping up on desktop) → logos strip ("As seen
      on" + 5 grey press wordmarks) → "A better way to run your business"
      (white bg + teal 70% right panel: white h2 + 3 orange-checkmark items + Get started; orange illustration left) → "Productive with Thrive"
      (bg-light, white card: 2 paragraphs + John Doe/XYZ Inc. testimonial;
      orange illustration right) → Stats band (#10495c, 3 count-up
      counters) → Features ("Features" + 6 cards w/ 80px grey circle icons,
      hover → teal) → footer (bg-light, Help/About/Support/Subscribe
      widgets + bottom bar with Component Dock link)
- [ ] Brand tokens in `@theme`: `#f2ad5f` orange (logo, buttons, img-wrap
      panels, checkmarks, hover glyphs), `#10495c` teal (hero bg, split
      panel, counter band, text-secondary, hover accents, Subscribe btn),
      `#fff` page/text, `#212529` body text, `#f8f9fa` light bg,
      `#efefef` icon circles + input bg, `#252837` feature p,
      `rgba(0,0,0,0.5)` text-black-50, `rgba(255,255,255,0.5)`
      text-white-50, `rgba(255,255,255,0.7)` nav links — all via Tailwind
      classes
- [ ] Font: Poppins 400 + 700 via Google Fonts `<link>` in `index.html`
      (headings AND body — no serif anywhere)
- [ ] Buttons: SQUARE (radius 0), padding 12px 20px, orange bg + white
      text, 2px transparent border; hover → white bg + orange text + shadow
      0 15px 30px rgba(0,0,0,0.2) (btn-primary) / transparent bg + orange
      border (btn-primary-to-outline); Subscribe button teal bg + white text
- [ ] Placeholder images via `picsum.photos/seed/thrive-<n>/<w>/<h>` — 3
      flat-illustration slots (hero, split left, Productive right) + 1 round
      testimonial avatar (person picsum IDs 1027/64/823/996 — verify before
      pinning; subject-critical: hero illustration should suggest a person
      working / office scene), icons from lucide-react (ToggleLeft,
      Fingerprint, Send, Filter, Smartphone, Code2, Check — probe exports
      first; press logos = grey text wordmarks, no brand SVGs)
- [ ] Brand renamed "Startright" → "Thrive" everywhere ("Productive with
      Thrive" heading); footer MUST link `https://www.componentdock.com/`;
      all links/forms dead-end without navigation (except the
      componentdock link)
- [ ] Source copy quirks: feature titles repeat ×2 (vary to 6 distinct),
      "secion-1" typo class (rename in recreation), press logos are brand
      assets (replace with invented wordmarks), counters animate count-up
      on view, preloader + AOS animations (source extras — optional/skip,
      note in PR), subpages (solutions/plans/whyus/contact) out of scope
- [ ] Single-page source → single-page recreation: index content only; no
      client-side router needed
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark BOTH `- [ ]` rows (line
      627 Bootstrap 5, line 1181 Business) `[x]` with the same surge URL
      (`https://thrive.free.componentdock.com`) + `npm run readme:status`
