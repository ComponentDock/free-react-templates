# Template: Hearthly (Interior Design / Home Furnishings)

## Purpose

Hearthly is a single-page interior-design / home-furnishings website
template in the free-react-templates monorepo. It is an original React
recreation of the ColorLib free "Spark" website template (source:
https://colorlib.com/wp/template/spark/ — "Spark &mdash; Free Bootstrap 5
Website Template by Colorlib"), built under a DIFFERENT name (Hearthly — a
word evoking the hearth, the heart of the home, fitting an
interior-design / home-furnishings brand; single lowercase word, no
collision with `apps/`, `openspec/specs/` or `docs/templates/` — verified
2026-08-14), per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The source appears TWICE in TEMPLATES.md (dup-row trap): line 626
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one) and
line 1175 (**Business (365)**) — both are `- [ ]` rows of the SAME template.
ONE implementation covers both rows (mark all `[x]` with the same surge URL
at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Spark" — modern-minimal interior-design /
  home-furnishings website template (hero shows a styled living room;
  service icons are interior-furnishing glyphs: lamp, double bed, desk,
  bathtub). Bootstrap 5 based (bootstrap bundle + tiny-slider + aos +
  navbar + counter + custom.js) plus a custom `css/style.css` (~60 KB,
  fully extracted for tokens); icon fonts icomoon
  (`icon-keyboard_arrow_right`, social glyphs) and flaticon
  (`flaticon-lamp`, `flaticon-double-bed`, `flaticon-desk`,
  `flaticon-bathtub`). Brand name used in the source copy: **"Spark"** (the
  recreation brands itself **Hearthly** but keeps the same section
  structure, copy kinds and layout). The design is LIGHT (white sections)
  with a teal brand accent — NOT a dark template.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/spark/` — HTTP 200, ~25 KB HTML
  (REACHABLE — the preview is live, not a 404). The index page carries the
  FULL page: navbar + hero + intro + services + blog + testimonials + CTA
  band + footer (all sections parsed from the live DOM). Custom CSS
  `css/style.css` (~60 KB, fully extracted for tokens). Screenshot
  `spark-free-templatel.jpg` (1200×946 AVIF — note the odd "templatel"
  filename in TEMPLATES.md is CORRECT; `spark-free-template.jpg` 404s —
  viewed in the browser): SPLIT hero — left half is a solid muted teal
  panel (#367f7c) with the white "Spark" logo + nav top, the large white
  serif headline "Design is not just what it looks like design is how it
  works", and a WHITE quote card floating on the panel (avatar circle +
  name + location); right half is a photograph of a modern living room
  (brown leather sofa, grey sofa, dark textured pillow, round gold mirror,
  potted plant, white walls + grey accent wall). Below the fold the page is
  white with a big serif heading and two text columns (one with a circular
  avatar). Editorial, modern-minimal aesthetic. The screenshot cuts off
  before the services/blog/CTA/footer — those come from the live DOM.
- **Visual design (from DOM + CSS tokens + screenshot):** a **light
  theme** — page background white (`#fff`), body **"Open Sans" 14px/400**,
  headings **"Playfair Display" serif, `#000`** (editorial/magazine feel),
  and a **brand teal `#367f7c`** that drives every accent: the hero's 35%
  left panel, the 50×2px section line dividers, the 90px feature-icon
  circles (bg `rgba(54,127,124,0.1)` + teal glyph), the `py-5 bg-primary`
  CTA band, and the footer link accents. Hero sits on a background photo
  (cover) with a `rgba(0,0,0,0.35)` full overlay + a `#367f7c` left panel
  (35% width, `z-index: 2`, hidden ≤991.98px). Buttons are **pill-shaped**
  (radius 30px, padding 12px 30px, 12px uppercase, letter-spacing .1rem);
  the only button is **outline-white** (border/text white, hover → white
  bg + teal text). Testimonial quotes use **Georgia serif** (blockquote
  16px, block-testimonial italic 18px) under Playfair quote marks (50px).
  Footer: bg `#efefef`, text `#888`, link lists `#777`, social icons 30px
  `#777` circles.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.site-nav`, `position: absolute; top: 0; z-index: 9`
     — transparent, floats over the hero): brand **"Spark"** left (`h1.logo`
     24px, Playfair, white); links **Home · About us · Dropdown (Menu One →
     Menu Two → Sub Menu One/Two/Three, Menu Three) · Our products ·
     Features · Blog · Contact Us** (14px, white-ish, padding 10px 10px,
     hover `#fff`; `has-children` caret). Mobile: hamburger toggler +
     full-screen mobile menu (`site-mobile-menu`, `site-navbar-target`).
     Recreation: brand "Hearthly", same top-level links (the nested
     "Menu One → Menu Two" dropdown may be simplified to a single dropdown
     or kept as a hover menu — note in PR), hamburger + mobile panel.
  2. **Hero** (`div.hero`, `height: 100vh`, `min-height: 800px`,
     `background-size: cover` — bg image; `:before` = **teal panel**
     `background-color: #367f7c`, left 0, width 35%, `z-index: 2`,
     `display: none` ≤991.98px; `:after` = dark overlay
     `rgba(0,0,0,0.35)`, full, `z-index: 1`; `.container` `z-index: 3`):
     `row align-items-center`: left `col-lg-7 text-center mb-3 mb-lg-0
text-lg-start` — `.subheading` **"Welcome"** (13px, `#fff`) + h1
     `.heading` **"Design is not just what it looks like design is how it
     works"** (Playfair 50px/700 `#fff`, 40px ≤991.98px, `margin-bottom:
50px`); right `col-lg-5 text-center text-lg-end` — `.testionial-hero
d-flex` (max-width 300px, white text): Playfair 50px quote mark +
     `blockquote` **"Far far away, behind the word mountains, far from the
     countries Vokalia and Consonantia, there live the blind texts."**
     (Georgia 16px) + `.author d-flex align-items-center`: round avatar
     (`person_1.jpg`, `rounded-circle`) + **Mark Vaughn** / **Lublin,
     Poland**.
  3. **Intro** (`div.section.section-1.pb-0` — `.section` padding 7rem 0;
     `.section-1` `padding-bottom: 20rem` desktop / 2rem mobile): `row`:
     left `col-lg-6` — `.line.me-auto.mb-3` (50×2px teal divider) + h2
     `.heading.mb-5` **"Separated they live in Bookmarksgrove right at the
     coast of the Semantics, a large language ocean."** + `row.g-5`:
     `.d-flex.block-testimonial` — round avatar (`person_1.jpg`,
     `rounded-circle`, `me-4`) + italic Georgia quote **"A small river
     named Duden flows by their place and supplies it with the necessary
     regelialia."**; right `col-lg-6` — `.img-wrap` (`position: absolute`
     desktop / relative mobile) with image (`hero_bg_2.jpg`, `img-fluid`)
     - overlapping **white text card** `.text` (padding 40px, width 80%,
       float right, `margin-top: -50px`, `z-index: 5`): `.text-inner`
       (max-width 400px): h3 **"We love minimal"** (20px/700) + paragraph
       ("Far far away, behind the word mountains, ... It is a paradisematic
       country, in which roasted parts of sentences fly into your mouth.").
  4. **Services** (`div.section.section-2`): centered header
     (`col-lg-6 mx-auto`): `.line.mx-auto.mb-3` + h2
     `.heading.mb-5.text-center` **"Our Services Includes..."**; `row.g-5`
     of **4 feature cards** (`col-6 col-sm-6 col-md-6 col-lg-3
text-center`): flaticon glyph in a **90px circle** (`width/height
90px, line-height 90px, border-radius 50%, background-color
rgba(54,127,124,0.1), color #367f7c`, font-size 50px) —
     `flaticon-lamp` · `flaticon-double-bed` · `flaticon-desk` ·
     `flaticon-bathtub` — + h3 **"Reduce costs to a minimum"** (20px/700)
     - paragraph ("Separated they live in Bookmarksgrove right at the
       coast of the Semantics, a large language ocean.").
  5. **Blog** (`div.post-entries.section`, padding 70px 0 / 30px mobile):
     centered header: `.line.mx-auto.mb-3` + h2 `.heading.mb-5.text-center`
     **"Vokalia and Consonantia, there live the blind texts."**;
     `row.align-items-stretch` of **4 media cards** (`col-12 col-sm-6
col-md-6 col-lg-3`): `.media-entry.h-100` — image link (`display:
block; background-color: #000; background-size: cover; height:
200px`) + `.bg-white.m-body` (padding 20px 20px 50px): `.date`
     **"May 14, 2020"** (12px) + h3 **"Far far away, behind the word
     mountains"** (16px/700, `#000`, hover `#367f7c`) + paragraph
     ("Vokalia and Consonantia, there live the blind texts. Separated they
     live.") + `.more.d-flex.align-items-center.float-end` — hidden
     **Read More** label + `icon-keyboard_arrow_right` arrow (opacity
     hidden → visible on card hover; arrow border-color `#367f7c`).
  6. **Testimonials** (`div.section`): `row` of **3 quote cards**
     (`col-sm-6 col-md-6 col-lg-4`): `.testionial-hero.dark.d-flex.mb-5
mb-lg-0` (dark = **black** text: quote mark Playfair 50px `#000`,
     blockquote Georgia 16px `#000`, `.author .text` `#000`; `max-width:
300px`): Playfair quote mark + blockquote **"Far far away, behind the
     word mountains, far from the countries Vokalia and Consonantia, there
     live the blind texts."** + `.author.d-flex.align-items-center`:
     round avatar (`person_1.jpg` / `person_2.jpg` / `person_3.jpg`) +
     **Mark Vaughn** / **Lublin, Poland**. NOTE: the source repeats the
     SAME quote + name in all 3 cards — vary names/quotes in the
     recreation (same kind of content) for realism.
  7. **CTA band** (`div.py-5.bg-primary` — teal `#367f7c`): `row
align-items-center`: left `col-lg-7 text-center mb-3 mb-lg-0
text-lg-start` — h3 `.text-white.m-0` **"Get started with our
     products"**; right `col-lg-5 text-center text-lg-end` — `btn
btn-outline-white` **"Get started"** (pill outline-white button).
  8. **Footer** (`div.site-footer`, bg `#efefef`, font-size 14px, color
     `#888`, padding 70px 0): 4 widgets — **About Foundation** (`col-lg-4`:
     h3 16px `#000`/700 + paragraph + **Connect** `list-unstyled social`:
     6 social icon circles — `icon-instagram` · `icon-twitter` ·
     `icon-facebook` · `icon-linkedin` · `icon-pinterest` ·
     `icon-dribbble` — 30px `#777` circles, white glyphs),
     **Links** (`col-lg-2 ms-auto`: About us · Services · News · Careers ·
     Contact), **Company** (`col-lg-2`: About us · Services · News ·
     Careers · Contact), **Contact** (`col-lg-3`: `address` **43 Raymouth
     Rd. Baltemoer, London 3910**; `tel://11234567890` **+1(123)-456-7890**
     ×2; `mailto:info@mydomain.com` **info@mydomain.com**); bottom bar
     (`row mt-5 col-12 text-center`): "© <year> All rights reserved | This
     template is made with by Colorlib" — Colorlib credit → **Component
     Dock link (mandatory)** `https://www.componentdock.com/`.

## Design tokens

- **Page bg:** `#fff` (body); text `#000` (headings, body copy); body
  font **"Open Sans", sans-serif**, 14px/400 (source `--bs-font-sans-serif`).
- **Brand teal:** `#367f7c` (`--bs-primary`) — hero left panel
  (`.hero:before`, 35% width, `z-index: 2`, hidden ≤991.98px), 50×2px
  `.line` section dividers, 90px feature-icon circles
  (`rgba(54,127,124,0.1)` bg + teal glyph), `.py-5.bg-primary` CTA band,
  blog title hover `#367f7c`, footer link accent `#367f7c` (footer `a`
  color), media-entry hover arrow border `#367f7c`. Secondary
  `--bs-secondary: #29eafd` (cyan — defined but NOT used visually; ignore).
- **Headings:** **"Playfair Display", serif**, `#000` (h1–h5 + `.logo`);
  hero `.heading` 50px/700 `#fff` (40px ≤991.98px); `.section .heading`
  via h2 (e.g. "Our Services Includes...", ~32px); h3 20px/700 (feature
  titles, text-card h3), 16px/700 (media-entry + footer widget h3);
  `.logo` 24px/700.
- **Quote typography:** **Georgia, serif** — `.block-testimonial` italic
  18px; `.testionial-hero blockquote` 16px; Playfair 50px quote marks.
- **Buttons:** `.btn` padding **12px 30px**, border-radius **30px** (pill),
  font-size 12px, text-transform uppercase, letter-spacing .1rem,
  transition .3s; `.btn-outline-white` — transparent, border `#fff`, text
  `#fff`; hover → bg `#fff` + text `#367f7c`. (Primary button styles exist
  in the CSS but the page only uses outline-white.)
- **Hero:** `height: 100vh`, `min-height: 800px`, bg image
  `background-size: cover; background-position: center` + `:before` teal
  panel (35%, left) + `:after` overlay `rgba(0,0,0,0.35)`; `.container`
  `z-index: 3`; `.subheading` 13px `#fff`.
- **Section rhythm:** `.section` padding **7rem 0**; `.section-1`
  `padding-bottom: 20rem` desktop / 2rem ≤991.98px; `.post-entries` 70px 0
  / 30px mobile; `.py-5` → 3rem.
- **Intro overlap:** `.section-1 .img-wrap` — `position: absolute`
  (desktop) / relative (mobile); white `.text` card padding 40px, width
  80%, float right, `margin-top: -50px`, `z-index: 5`; `.text-inner`
  max-width 400px.
- **Feature icons:** 90px circle, `border-radius: 50%`, bg
  `rgba(54,127,124,0.1)`, color `#367f7c`, glyph 50px — source flaticon
  `lamp` / `double-bed` / `desk` / `bathtub` → **lucide-react** in the
  recreation (probe exports first!): Lamp / BedDouble / Desk (or Table) /
  Bath (candidates — verify each with the `typeof` probe).
- **Blog cards:** image area 200px tall, `background-color: #000`
  (cover); `.m-body` padding 20px 20px 50px; `.date` 12px; `.more` label
  13px bold `#000`, hidden (opacity 0, left 10px) → visible on card hover,
  arrow = `icon-keyboard_arrow_right`.
- **Footer:** bg `#efefef`, color `#888`, padding 70px 0, font-size 14px;
  widget h3 16px `#000` 700, `margin-bottom: 30px`; link lists `.links`
  width 150px, `#777`; social icons 30×30 `#777` circles, white glyphs.
- **Nav:** absolute, top 0, z-index 9, transparent; brand h1 24px Playfair
  white; links 14px with padding 10px 10px; mobile hamburger + off-canvas
  menu.
- **Icons:** source icomoon (`icon-keyboard_arrow_right` arrows +
  `icon-instagram/twitter/facebook/linkedin/pinterest/dribbble` social
  glyphs) + flaticon (lamp/double-bed/desk/bathtub) → **lucide-react** in
  the recreation for UI glyphs (ArrowRight for Read More arrows) — but
  NOTE **lucide-react removed brand icons** (Facebook/Instagram/Linkedin/
  Twitter are `undefined`): use **inline SVG (simple-icons paths)** for
  the 6 footer social icons, and probe every lucide import with the
  `typeof` check before use.

## Requirements

### Requirement: Header navigation

- **GIVEN** the Hearthly page is loaded
- **WHEN** the user views the top of the page
- **THEN** a transparent navbar SHALL render over the hero with the
  HEARTHLY brand/logo left, nav links Home · About us · Dropdown · Our
  products · Features · Blog · Contact Us right
- **AND** on viewports ≤ the mobile breakpoint the navbar SHALL show a
  hamburger toggler

#### Scenario: Mobile navigation

- **GIVEN** the Hearthly page is rendered on a viewport narrower than the
  desktop breakpoint
- **WHEN** the user taps the hamburger toggler
- **THEN** a mobile menu SHALL open with the same links and a close control

### Requirement: Hero

- **GIVEN** the Hearthly page is loaded
- **WHEN** the user views the hero
- **THEN** a 100vh hero SHALL render a background photo with a
  `rgba(0,0,0,0.35)` overlay and a teal `#367f7c` left panel (desktop
  only), the white subheading **"Welcome"**, the white serif h1 **"Design
  is not just what it looks like design is how it works"**, and a
  testimonial quote card (quote mark, blockquote, round avatar + name +
  location)

#### Scenario: Hero quote card

- **GIVEN** the hero is displayed on a desktop viewport
- **WHEN** the user views the right column
- **THEN** a quote card SHALL render on the teal panel with a Playfair
  quote mark, a Georgia blockquote, and an author row (round avatar, name,
  location)

### Requirement: Intro section

- **GIVEN** the user scrolls past the hero
- **WHEN** the intro section is displayed
- **THEN** a split section SHALL show a teal line divider and the serif
  heading **"Separated they live in Bookmarksgrove right at the coast of
  the Semantics, a large language ocean."** with an inline quote block
  (round avatar + italic quote) on the left, and an image with an
  overlapping white card (**"We love minimal"** + paragraph) on the right

#### Scenario: Overlapping card

- **GIVEN** the intro section is displayed on a desktop viewport
- **WHEN** the user views the image column
- **THEN** a white card SHALL overlap the image's bottom edge (source:
  `.img-wrap .text` width 80%, `margin-top: -50px`, disabled on mobile)

### Requirement: Services

- **GIVEN** the user scrolls past the intro
- **WHEN** the services section is displayed
- **THEN** the centered heading **"Our Services Includes..."** with a teal
  line divider and a responsive grid of 4 feature cards SHALL render —
  each with a 90px teal-tinted circle icon, the h3 **"Reduce costs to a
  minimum"** and a short paragraph

#### Scenario: Feature icon circles

- **GIVEN** a feature card is displayed
- **WHEN** the user views the icon
- **THEN** the icon SHALL sit in a 90px circle with `rgba(54,127,124,0.1)`
  background and a teal `#367f7c` glyph (source: `.feature
[class^="flaticon-"]`)

### Requirement: Blog

- **GIVEN** the user scrolls past the services
- **WHEN** the blog section is displayed
- **THEN** the centered heading **"Vokalia and Consonantia, there live the
  blind texts."** with a teal line divider and a responsive grid of 4 media
  cards SHALL render — each with a 200px image, a date, a title, a short
  paragraph and a Read More link with an arrow

#### Scenario: Read More reveal

- **GIVEN** a blog card is displayed
- **WHEN** the user hovers over it
- **THEN** the Read More label and arrow SHALL fade in (hidden by default;
  source: `.media-entry:hover .more .label` opacity 0 → 1)

### Requirement: Testimonials

- **GIVEN** the user scrolls past the blog
- **WHEN** the testimonials section is displayed
- **THEN** a 3-column grid of quote cards SHALL render (dark text
  variant), each with a Playfair quote mark, a Georgia blockquote, a round
  avatar, a name and a location

#### Scenario: Varied testimonial content

- **GIVEN** the testimonials section is displayed
- **WHEN** the user reads the three cards
- **THEN** each card SHALL show its own quote/name (the source repeats the
  same quote ×3 — vary content in the recreation, same kind of content)

### Requirement: CTA band

- **GIVEN** the user scrolls past the testimonials
- **WHEN** the CTA band is displayed
- **THEN** a teal `#367f7c` band SHALL show the white heading **"Get
  started with our products"** on the left and an outline-white pill
  button **"Get started"** on the right

#### Scenario: CTA button

- **GIVEN** the CTA band is displayed
- **WHEN** the user clicks **Get started**
- **THEN** the button SHALL be a dead-end link (no navigation required)

### Requirement: Footer

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is displayed
- **THEN** a light `#efefef` footer SHALL show four widgets — About
  Foundation (about text + 6 social icon circles), Links (5 links),
  Company (5 links) and Contact (address 43 Raymouth Rd. Baltemoer, London
  3910; two phone numbers; email) — with a bottom bar containing the
  copyright line and a link to **https://www.componentdock.com/**
  ("Component Dock") — mandatory footer convention; no ColorLib credit

#### Scenario: Component Dock link

- **GIVEN** the footer is displayed
- **WHEN** the user reads the bottom bar
- **THEN** a link to **https://www.componentdock.com/** labeled
  "Component Dock" SHALL be present and no ColorLib credit SHALL appear

#### Scenario: Social icons

- **GIVEN** the footer is displayed
- **WHEN** the user views the Connect widget
- **THEN** six social icon circles SHALL render (Instagram, Twitter,
  Facebook, LinkedIn, Pinterest, Dribbble) — brand icons are NOT in
  lucide-react, so inline SVG (simple-icons paths) is required

### Requirement: Responsive layout

- **GIVEN** the Hearthly page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** the hero SHALL stack (teal panel hidden, text centered), the
  intro overlap SHALL be disabled (card in-flow below the image), the
  services grid SHALL collapse to 2 columns (source `col-6`), the blog
  grid to 1–2 columns, the testimonials to 1 column, the footer widgets
  to stacked columns, and the navbar SHALL use the hamburger menu

#### Scenario: Stacked layout

- **GIVEN** the Hearthly page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** every multi-column section SHALL stack appropriately with
  tappable buttons and the header SHALL use the hamburger menu

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-hearthly`
- [ ] `scripts/verify-app.sh hearthly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with the live DOM): transparent navbar
      (HEARTHLY brand + Home/About us/Dropdown/Our products/Features/
      Blog/Contact Us; hamburger on mobile) → hero (100vh photo +
      rgba(0,0,0,0.35) overlay + 35% teal left panel desktop-only,
      "Welcome" + "Design is not just what it looks like design is how it
      works" + white quote card w/ avatar) → intro (teal line + serif
      heading + inline quote w/ avatar left; image + overlapping white
      "We love minimal" card right) → services ("Our Services
      Includes..." + 4 feature cards w/ 90px teal-tinted circle icons) →
      blog ("Vokalia and Consonantia..." + 4 media cards w/ date + Read
      More reveal) → testimonials (3 dark quote cards w/ avatars) → CTA
      band (teal #367f7c, "Get started with our products" + outline-white
      Get started pill) → footer (About Foundation + Connect socials /
      Links / Company / Contact + bottom bar with Component Dock link)
- [ ] Brand tokens in `@theme`: `#367f7c` teal (hero left panel, line
      dividers, feature circles, CTA band bg, footer accents),
      `#fff` page/text, `#000` headings, `rgba(54,127,124,0.1)` feature
      circle bg, `rgba(0,0,0,0.35)` hero overlay, `#efefef` footer bg,
      `#888` footer text, `#777` footer links — all via Tailwind classes
- [ ] Fonts: Playfair Display (headings) + Open Sans (body) via Google
      Fonts `<link>` in `index.html`; Georgia for quotes (system serif is
      fine)
- [ ] Buttons: pill radius 30px, padding 12px 30px, 12px uppercase,
      letter-spacing .1rem; outline-white (hover → white bg + teal text)
- [ ] Placeholder images via `picsum.photos/seed/hearthly-<n>/<w>/<h>` —
      1 hero living-room photo, 1 intro image, 4 blog card images, 4
      avatars (hero intro, intro quote, 3 testimonials — note the source
      reuses person_1.jpg in hero AND intro; subject-critical: hero/intro/
      blog need interior scenes and avatars need headshots — use the
      seed-screening method + verified person picsum IDs 1027/64/823/996
      before pinning), icons from lucide-react (Lamp, BedDouble, Desk,
      Bath, ArrowRight — probe exports first; NO brand icons: 6 footer
      socials via inline SVG simple-icons paths)
- [ ] Brand renamed "Spark" → "Hearthly" everywhere; footer MUST link
      `https://www.componentdock.com/`; all links/forms dead-end without
      navigation (except the componentdock link)
- [ ] Source copy quirks: testimonials repeat the same quote/name ×3
      (vary in recreation), "Menu One → Menu Two" nested dropdown
      (simplify or keep as hover menu — note in PR), tel links duplicated
      in Contact widget — normalize or keep, note in PR; vary placeholder
      copy for realism but keep the same kind of content
- [ ] Single-page source → single-page recreation: index content only
      (subpages features.html etc. exist in the source but are out of
      scope); no client-side router needed
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark BOTH `- [ ]` rows (line
      626 Bootstrap 5, line 1175 Business) `[x]` with the same surge URL
      (`https://hearthly.free.componentdock.com`) + `npm run readme:status`
