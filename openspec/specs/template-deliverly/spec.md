# Template: Deliverly (Logistics & Delivery Template)

## Purpose

Deliverly is a single-page logistics / package-delivery company website
template in the free-react-templates monorepo. It is an original React
recreation of the ColorLib free "Dusk" website template design (see
TEMPLATES.md), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Dusk" — logistics & delivery company landing page
  (Bootstrap 5 + tiny-slider + glightbox + aos; icomoon + flaticon icons;
  fonts "Playfair Display" — headings h1–h5 + `.logo` — and "Open Sans" —
  body `--bs-font-sans-serif` — declared in `css/style.css`; NO Google
  Fonts link in the preview head, so load both explicitly via Google Fonts
  `<link>` in the recreation). (source: https://colorlib.com/wp/template/dusk/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/dusk/
  (HTTP 200, ~31 KB HTML fetched + `css/style.css` ~60 KB parsed; live DOM
  structure extracted, screenshot reviewed).
- **Screenshot analyzed:** `dusk-free-template.jpg` (1200×946 AVIF,
  downloaded + viewed in browser). NOTE: the screenshot shows an OLDER
  variant than the live preview — it includes a centered search bar
  ("Search or enter website name") above the nav and a different hero photo
  (man in glasses pinning photos to a brick wall). The LIVE preview is the
  authoritative reference: no search bar, hero photo is a delivery truck /
  courier scene. Shared design language in both: dark serif logo, white
  nav links over the hero, green `#61b15a` primary buttons, floating white
  inquiry card overlapping the hero, green underline accent `.line` before
  section headings, white serif headline on a photo with black overlay.
  Aesthetic: fresh green `#61b15a` accent over white `#fff` surfaces with
  light gray `#f8f9fa` / `#efefef` bands, rounded (Bootstrap-default 6px)
  buttons, soft card shadows, elegant Playfair Display serif headlines over
  Open Sans body text.
- **Section order (1:1, from the DOM of the home page):**
  1. Navbar (`nav.site-nav` — `position: absolute; top: 0; z-index: 9;
width: 100%`, transparent over the hero, padding 20px 0): brand
     `a.logo.m-0.float-left` "Dusk" — Playfair Display 24px, white;
     `ul.site-menu` inline-block links (14px, padding 10px 15px, color
     `rgba(255,255,255,0.7)`, hover `#fff`): Home / Dropdown
     (`li.has-children` with caret `\e313` + nested dropdown: Menu One /
     Menu Two → Sub Menu One/Two/Three / Menu Three) / Services / About /
     Blog / Contact. Mobile: `div.site-mobile-menu.site-navbar-target`
     slide-in panel (header with close button + body with the same links).
  2. Hero (`div.hero.overlay` — `background-image: url('images/hero_1.jpg')`,
     `background-size: cover`, `height: 100vh; min-height: 700px`; overlay
     `:before` = `rgba(0,0,0,0.4)`; content `div.container` →
     `div.col-lg-7.text-center.mx-auto`): `h1.heading.text-white`
     Playfair 50px 700 (36px mobile) — "We Deliver Your Package On Time";
     `h3.subheaidng.text-white.mb-5.h5` (Open Sans) — "Far far away,
     behind the word mountains"; buttons: `a.btn.btn-primary.text-white.mr-2`
     "Partner with us" — solid `#61b15a`, white text, Bootstrap default
     radius ~6px; `a.btn.btn-white.glightbox` "Watch" — white bg, green
     text (video-trigger link — decorative/placeholder in the recreation,
     no backend).
  3. Business inquiry card (`div.section.sec-1.bg-curve` — `position:
relative` with a large `:before` curve decoration
     `url('../images/curve-lines.png')` ~400px above; inner
     `div.d-flex.box.align-items-stretch` — white bg, `margin-top: -200px`
     (overlaps the hero bottom), `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.1)`,
     `z-index: 9`): left `div.img.text-center` — `flex: 0 0 250px`,
     background `#fafafa`, padding 30px; a 80px translucent green circle
     `rgba(97,177,90,0.2)` behind the icon (`delivery-box.svg` → lucide
     Package icon, 50px, green); right `div.text` — padding 30px: `h2`
     Playfair 24px 700 "Are you a Medium to Larged Size Business?" (fix the
     source typo "Larged" → "Large"), `p` (Lorem ipsum…), `a.more` "Get
     started" — green `#61b15a` (link, arrow).
  4. Proof On Display (`div.section.sec-2`): `div.row.justify-content-
between.align-items-center` — left `div.col-lg-7` →
     `div.img-wrap.has-bg`: photo `images/about_1.jpg` with
     `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)` + decorative
     `curve-lines.png` behind (right: -100px; bottom: -100px; 454×469);
     right `div.col-lg-4.pl-md-5`: `div.line.mb-4` (2px × 50px solid
     `#61b15a` green underline), `h2.heading` Playfair 40px 700 "Proof On
     Display", `p.lead.mb-5` (Lorem ipsum…), `div.row.list-icons` — THREE
     rows (`div.col-4.col-lg-4`): flaticon icon (50px, with 30px
     translucent green circle `rgba(97,177,90,0.5)` behind) + `span.d-block`
     label: "24/7 Fast Delivery" / "90% Repeat Purchase" / "We Deliver
     Worldwide".
  5. Pricing (`div.section`): `div.row.heading-wrap` →
     `div.col-lg-7.mx-auto.text-center`: `div.line.mx-auto` + `h2.heading`
     "Choose Your Ideal Pack" (40px 700, Playfair); `div.row` of FOUR
     `div.pricing-block` cards (`col-12.col-sm-6.col-md-6.col-lg-3`,
     padding 30px, `border: 1px solid #ccc`, `border-radius: 4px`,
     `box-shadow: 0 0 5px 0 rgba(0,0,0,0.1)`): `h3.font-weight-bold`
     Playfair 18px plan name — Basic / Standard / Premium / Advanced;
     `span.price` 30px green `#61b15a` — $12 / $49 / $79 / $199; `p`
     (Lorem ipsum…); `ul.pricing-content-list` — `li` with green
     icomoon check `\f058` (→ lucide CheckCircle2) at left, `li.disabled`
     grayed out (feature NOT included — count: Basic has 2 enabled + 3
     disabled, Standard 3+2, Premium 4+1, Advanced 5+0); `a` "Get
     started" link.
  6. Services (`div.section`): `div.row.heading-wrap` →
     `div.col-lg-7.mx-auto.text-center`: `div.line.mx-auto` +
     `h2.heading` "Services"; `div.row.list-icons.list-icons-large` of
     FOUR `div.col-sm-6.col-md-6.col-lg-3` cards: flaticon icon (90px,
     with 60px translucent green circle `rgba(97,177,90,0.5)` behind) +
     `h3.font-weight-bold` (Playfair) + `p`: "24/7 Fast Delivery" /
     "90% Repeat Purchase" / "We Deliver Worldwide" / "Scale
     Sufficiently" (each with a Lorem-ipsum paragraph).
  7. Testimonials (`div.section.bg-light`): `div.row.mb-5` →
     `div.col-lg-7`: `div.line.me-auto` + `h2.heading` "What people says
     about us"; `div.testimonial-slider-wrap` (tiny-slider in source →
     state-based carousel in recreation; prev/next arrows at ±50px,
     dot nav below) of FOUR `div.item` → `div.d-block.d-lg-flex.
testimonial.align-items-stretch` (white card): left `div.img`
     (`flex: 0 0 400px`; photos `person_1.jpg`…`person_4.jpg`), right
     `div.text.align-self-center` (padding 50px): `span.quote` "“" —
     Georgia serif 100px, green `#61b15a`, line-height 0; `blockquote p`
     30px `line-height: 1.3` (Lorem ipsum…); `span.text-black-50`
     "Managing Director" — rgba(0,0,0,0.5). NOTE: the source repeats
     "Managing Director" as the ONLY attribution (no names) — recreate 4
     DISTINCT customers (name + role) around the same quote-card anatomy.
  8. Blog (`div.section.blog-entries-section` — padding 70px 0,
     background `#f8f9fa`): `div.row.justify-content-center` →
     `div.col-lg-7.section-title.text-center.mb-5`: `div.line.mx-auto` +
     `h2.heading` "Latest Blog Posts"; `div.row` of FIVE
     `div.post-entry` cards (`col-6.col-sm-6.col-md-4.col-lg`, white bg,
     padding 20px, `border-radius: 20px; border-bottom-left-radius: 0`,
     hover `top: -5px` + `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.05)`;
     NO images in the source posts): `span.date` — 12px 700 UPPERCASE
     `rgba(0,0,0,0.5)` "May 12th, 2020"; `h3` Playfair 16px 700 with
     black link title; `p` 14px excerpt. NOTE: the source repeats the
     SAME post 5× — recreate 5 DISTINCT logistics-related posts (same
     date format "May 12th, 2020").
  9. Footer (`footer.site-footer` — background `#efefef`, color `#888`,
     font-size 14px, padding 70px 0, with a large decorative
     `curve-lines-2.png` `:before` at bottom: -200px): `div.container`
     → `div.row`:
     - `div.col-lg-4`: widget "About Foundation" — `h3` Playfair 16px 700
       black + blurb paragraph (Lorem ipsum…); widget "Connect" —
       `ul.social` inline icon row (Facebook / Twitter / LinkedIn /
       Instagram / Dribbble in source → inline SVG brand icons in the
       recreation; lucide-react has NO brand icons).
     - `div.col-lg-2.ml-auto` widget "Links" — `ul.links` (150px wide,
       `li` margin-bottom 10px, links `#777`): About us / Services / News
       / Careers / Contact.
     - `div.col-lg-2` widget "Company" — same five links (About us /
       Services / News / Careers / Contact).
     - `div.col-lg-3` widget "Contact" — address "43 Raymouth Rd.
       Baltemoer, London 3910" + phone "+1(123)-456-7890" (×2) + email
       "info@mydomain.com".
     - Bottom bar `div.row.mt-5` → `div.col-12.text-center`: copyright
       "© <year> All rights reserved | made with ♥ by …" → Component
       Dock credit (repo rule, NOT ColorLib).
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Primary brand **green `#61b15a`** (~28 uses): `.btn-primary` solid bg
    - border, `.btn-primary:hover` → `#79bd73` bg / `#71b96b` border,
      active `#81c17b`; `.more` link color; `.price` color; `.section .line`
      background (2px × 50px); testimonial `.quote` color; `.list-icons`
      circle `rgba(97,177,90,0.5)`; `.sec-1 .box .img` circle
      `rgba(97,177,90,0.2)`; `.form-control` focus border; `.btn:focus`
      ring `rgba(97,177,90,0.25)`; `.btn-white` text color.
  - Dark teal **`#436871`** (2 uses): `.sec-1 .box a` link color.
  - Text: body **`#212529`** (Bootstrap default), muted **`#6c757d`** /
    **`#888`** (footer), `rgba(0,0,0,0.5)` (testimonial role,
    `.text-black-50`, `.post-entry .date`), `#777` (footer links),
    `#000` (footer widget h3, post titles).
  - Surfaces: white `#fff` (cards, boxes), **`#fafafa`** (`.sec-1 .box
.img`), **`#f8f9fa`** (blog section bg, `bg-light` testimonials
    section), **`#efefef`** (footer bg), `#ccc` (pricing border),
    `#e9ecef` (form border — no forms on the home page).
  - Hero overlay: black `rgba(0,0,0,0.4)`.
  - Fonts: **"Playfair Display"** (sans-serif fallback) for ALL headings
    (h1–h5 + `.logo` + `.heading` classes) and **"Open Sans"** for body
    (`--bs-font-sans-serif`). Sizes: hero h1 50px 700 (36px mobile),
    section `.heading` 40px 700, `.sec-1 .box .text h2` 24px, `.logo`
    24px, pricing h3 18px, post h3 16px 700, footer widget h3 16px 700,
    nav links 14px, post date 12px 700 UPPERCASE, footer 14px. Body
    copy 16px.
  - Buttons: Bootstrap 5 default — `border-radius: 0.375rem` (~6px),
    padding `0.375rem 0.75rem`, `font-weight: 400`, focus ring green
    `rgba(97,177,90,0.25)`; `.btn-primary` solid green + white text
    (source `.btn-primary` has `color: #000` but the hero button markup
    adds `.text-white` → white text in the recreation); `.btn-white`
    white bg + green text.
  - Shadows: `.sec-1 .box` `0 15px 30px 0 rgba(0,0,0,0.1)`; `.pricing-
block` `0 0 5px 0 rgba(0,0,0,0.1)`; `.img-wrap.has-bg img`
    `0 15px 30px 0 rgba(0,0,0,0.2)`; post hover `0 15px 30px 0
rgba(0,0,0,0.05)`.
  - Radii: pricing cards 4px; post cards 20px with `border-bottom-left-
radius: 0`; buttons ~6px (Bootstrap default); hero/person images
    square.
  - Signature motifs: transparent absolute navbar over the hero (white
    serif logo + white links, mobile slide-in panel); 100vh photo hero
    with black 0.4 overlay + centered white serif headline + green
    "Partner with us" + white "Watch" buttons; floating white inquiry
    card (`margin-top: -200px`) with package icon in a translucent green
    circle on a `#fafafa` panel; green 2×50px underline `.line` before
    every section heading; photo with decorative curve-lines behind;
    three 50px icon+label stats rows; four bordered pricing cards with
    green prices and check lists (disabled grayed items); four large
    (90px) icon service cards; four white testimonial cards with large
    Georgia green quote mark + 30px quote text + role attribution; five
    white rounded (20px) text-only blog cards with uppercase date;
    light-gray `#efefef` footer with 4 widget columns + big curve
    decoration; section rhythm = `.section` padding 7rem 0,
    `.heading-wrap` margin-bottom 120px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/deliverly-<n>/<w>/<h>`; screen seeds for the hero
  (delivery/courier/van scene — verify the seed renders the right subject
  before pinning), about photo, testimonial portraits ×4); icons →
  lucide-react (Package, Play, CheckCircle2, Truck, Repeat, Globe,
  TrendingUp, Menu, X, MapPin, Phone, Mail, Clock, ArrowRight — probe
  EVERY export; brand icons Facebook/Twitter/LinkedIn/Instagram/Dribbble
  NOT in lucide-react → inline SVG paths); Playfair Display + Open Sans
  via Google Fonts `<link>` in `index.html`; brand green `#61b15a` +
  hover `#79bd73` + dark teal `#436871` + light `#f8f9fa`/`#efefef` in
  `@theme`; no asset/CSS/font-file copying. Demo copy paraphrased but
  same kinds (nav links incl. a Dropdown menu, hero headline + subtext +
  2 CTAs, business-inquiry card, proof stats, 4 pricing tiers, 4 service
  features, 4 testimonials, 5 blog posts, footer widgets). Source
  repetition cleaned up: fix the "Larged" typo ("Medium to Large Size
  Business"), 4 distinct testimonial customers (source repeats only
  "Managing Director"), 5 distinct blog posts (source repeats the same
  post 5×), realistic pricing feature lists (source: Basic 2✓3✗ /
  Standard 3✓2✗ / Premium 4✓1✗ / Advanced 5✓0✗ — keep this pattern),
  distinct service paragraphs (source repeats the same Lorem text). The
  "Watch" video button is decorative or a modal placeholder (glightbox in
  source, no backend); the nav Dropdown can be a hover/click disclosure
  of 3–4 sample links.

Deliverly lives in `apps/deliverly` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn) plus the repo-standard
Navbar/Footer chrome (adapted to the transparent navbar and the
4-widget light-gray footer).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with the brand,
nav links including a dropdown, and a working mobile slide-in menu.

#### Scenario: Navbar content

- **GIVEN** the Deliverly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand "Deliverly" in a white serif
  wordmark, nav links Home / Dropdown / Services / About / Blog / Contact
  in white 14px text, with the Dropdown link exposing at least three
  sample sub-links
- **AND** the navbar SHALL be transparent over the hero on desktop and
  provide a slide-in menu with the same links on mobile

### Requirement: Hero

The system SHALL render a full-height hero with a background photo, dark
overlay, centered headline, subtext, and two call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the Deliverly page is rendered
- **WHEN** the hero section is visible
- **THEN** the hero SHALL show a full-viewport background photo with a
  dark overlay (rgba(0,0,0,0.4)), the white serif headline "We Deliver
  Your Package On Time", the subtext "Far far away, behind the word
  mountains.", a solid green "Partner with us" button, and a white
  "Watch" button

### Requirement: Business inquiry card

The system SHALL render a white inquiry card overlapping the hero bottom
with a package icon, a headline, a paragraph, and a green link.

#### Scenario: Inquiry card content

- **GIVEN** the Deliverly page is rendered
- **WHEN** the section below the hero is visible
- **THEN** the card SHALL show a package icon inside a translucent green
  circle on a light `#fafafa` panel, the headline "Are you a Medium to
  Large Size Business?" (source typo fixed), a short paragraph, and a
  green "Get started" link
- **AND** the card SHALL overlap the bottom of the hero section with a
  soft shadow

### Requirement: Proof On Display

The system SHALL render an about-style section with a photo, a green
underline, a heading, a lead paragraph, and three icon stats.

#### Scenario: Proof section content

- **GIVEN** the Deliverly page is rendered
- **WHEN** the proof section is visible
- **THEN** the section SHALL show a photo on the left with a decorative
  curve behind it and, on the right, a green 2×50px underline, the
  heading "Proof On Display", a lead paragraph, and three stats rows
  with icons: "24/7 Fast Delivery", "90% Repeat Purchase", "We Deliver
  Worldwide"

### Requirement: Pricing

The system SHALL render a "Choose Your Ideal Pack" section with four
pricing cards, each with a name, a green price, a feature list with
included and excluded items, and a link.

#### Scenario: Pricing cards

- **GIVEN** the Deliverly page is rendered
- **WHEN** the pricing section is visible
- **THEN** the section SHALL show the heading "Choose Your Ideal Pack"
  with a centered green underline and four cards named Basic, Standard,
  Premium, and Advanced
- **AND** each card SHALL show a green price ($12 / $49 / $79 / $199), a
  feature list where included features have green check icons and
  excluded features are grayed/disabled, and a "Get started" link
- **AND** the Basic card SHALL have exactly 2 enabled features, Standard
  3, Premium 4, and Advanced 5

### Requirement: Services

The system SHALL render a "Services" section with four large-icon feature
cards.

#### Scenario: Service cards

- **GIVEN** the Deliverly page is rendered
- **WHEN** the services section is visible
- **THEN** the section SHALL show the heading "Services" and four cards,
  each with a large icon in a translucent green circle and a bold title
  ("24/7 Fast Delivery", "90% Repeat Purchase", "We Deliver Worldwide",
  "Scale Sufficiently") with a short paragraph

### Requirement: Testimonials

The system SHALL render a "What people says about us" testimonials
carousel with four distinct customer quotes, each with a photo, a large
quote mark, the quote, and a name + role attribution.

#### Scenario: Testimonial carousel

- **GIVEN** the Deliverly page is rendered
- **WHEN** the testimonials section is visible
- **THEN** the section SHALL show the heading "What people says about
  us" and a carousel of four white cards, each with a photo, a large
  green serif quote mark, a 30px quote, and a name + role attribution
- **AND** the four customers SHALL be distinct (the source repeats
  "Managing Director" four times — recreate 4 different people)

### Requirement: Latest blog posts

The system SHALL render a "Latest Blog Posts" section with five distinct
text-only blog cards, each with an uppercase date, a bold title, and an
excerpt.

#### Scenario: Blog cards

- **GIVEN** the Deliverly page is rendered
- **WHEN** the blog section is visible
- **THEN** the section SHALL show the heading "Latest Blog Posts" and
  five white rounded cards (20px radius, flat bottom-left corner), each
  with an uppercase date ("May 12th, 2020" format), a bold title link,
  and a 14px excerpt
- **AND** the five posts SHALL be distinct logistics-related articles
  (the source repeats the same post five times)

### Requirement: Footer

The system SHALL render a light-gray footer with an about widget, social
icons, two link columns, a contact column, and a copyright bar linking to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the Deliverly page is rendered
- **WHEN** the footer is visible
- **THEN** the footer SHALL show the "About Foundation"-style brand
  widget with a blurb and social icons, a "Links" column (About us /
  Services / News / Careers / Contact), a "Company" column (same links),
  and a "Contact" column with an address, phone, and email
- **AND** the bottom bar SHALL show the copyright line with a link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/deliverly` scaffolded from the simplest existing app; package
      renamed to `@free-react-templates/deliverly`; `public/CNAME` =
      `deliverly.free.componentdock.com`; homepage
      `https://deliverly.free.componentdock.com`.
- [ ] No "colorlib" string anywhere in `apps/deliverly/*` (provenance only
      in this spec, TEMPLATES.md, and the PR).
- [ ] `@theme` tokens: `--color-brand: #61b15a`, `--color-brand-hover:
  #79bd73`, `--color-brand-border: #71b96b`, `--color-brand-active:
  #81c17b`, `--color-brand-deep: #436871`, `--color-brand-soft:
  rgba(97,177,90,0.2)`, `--color-brand-soft-strong: rgba(97,177,90,0.5)`,
      `--color-ink: #212529`, `--color-muted: #6c757d`, `--color-faint:
  #fafafa`, `--color-light: #f8f9fa`, `--color-footer: #efefef`,
      `--color-link-muted: #777`; fonts Playfair Display + Open Sans.
- [ ] Section order 1:1: Navbar → Hero → Business inquiry card → Proof On
      Display → Pricing → Services → Testimonials → Latest Blog Posts →
      Footer.
- [ ] Hero overlay `rgba(0,0,0,0.4)`; green underline `.line` 2×50px
      before each section heading; inquiry card `margin-top: -200px`
      overlap; card shadows per token list.
- [ ] Pricing card radii 4px, post-card radii 20px (flat bottom-left),
      buttons ~6px (Bootstrap default); green prices `#61b15a`.
- [ ] Distinct content everywhere the source repeats: 4 testimonial
      customers (source repeats "Managing Director"), 5 blog posts
      (source repeats one post 5×), service paragraphs; source "Larged"
      typo fixed to "Large"; pricing check counts Basic 2 / Standard 3 /
      Premium 4 / Advanced 5.
- [ ] Tests written first (TDD) mirroring every scenario; 100% line/
      function/branch/statement coverage.
- [ ] `bash scripts/verify-app.sh deliverly` passes (typecheck + lint +
      knip + fallow + coverage + build).
- [ ] PR description includes: source (ColorLib Dusk), preview URL,
      design tokens (green `#61b15a`, hover `#79bd73`, dark teal
      `#436871`, light `#f8f9fa`/`#efefef`, Playfair Display + Open Sans,
      6px buttons, 4px pricing cards, 20px post cards, floating inquiry
      card), and what differs (wordmark, picsum placeholders, distinct
      testimonials/blog posts, Component Dock credit, no asset copying).
- [ ] Post-merge bookkeeping: mark BOTH TEMPLATES.md "Dusk" rows (line
      ~574 and its duplicate ~986) `[x]` with the live URL and run
      `npm run readme:status`.
