# Template: Cirrus (Business / Tech Company Template)

## Purpose

Cirrus is a single-page business / tech-company template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Cloudtemplate" design (see TEMPLATES.md — Bootstrap category,
line 361; the slug also repeats at line 3051 — one recreation covers both
checklist rows), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a modern cloud-computing / hosting company site: a
**transparent navbar** over a full-height **blue split hero** (`#3f52e3`
overlay, SVG illustration left, stacked-line headline + green "Get in touch"
button right); a **partner logos** strip; a light **"Cloud Services"** grid
(6 cards, green circular icons); a split **"What Our Software Can Do For
You"** section (illustration left, 5 bordered rows with pink icons right); a
solid blue **stats counter band**; a light **intro strip** ("Have any
question about us?" + pink button); a light **FAQ section** (tall image panel
left, 4 blue pill accordions right); a light **pricing grid** (4 white plan
cards with navy price numbers and pink "Choose Plan" buttons); a
**testimonials carousel** (circular avatars with green quote bubbles); a
light **"Recent Blog"** grid (3 photo cards); and a **purple footer**
(`#421b9b`, 4 columns). Signature look: Work Sans everywhere, blue `#3f52e3`

- green `#21bf73` + pink `#ff8ba7` accent trio, navy `#203d67` headings,
  slate `#72789a` body text, and 5px-radius buttons.

## Design reference (replication findings)

- **Original:** ColorLib "Cloudtemplate" — free Bootstrap 4 cloud-computing
  website template (source: https://colorlib.com/wp/template/cloudtemplate/;
  preview title: "Cloud Template - Free Bootstrap 4 Template by Colorlib").
  New name: **cirrus** (a high-altitude wispy cloud — fits the cloud brand;
  single word, no collision with `ls apps/`, `openspec/specs/`, or
  `docs/templates/`; note `apps/cloud` + `template-cloud` exist and are a
  DIFFERENT template — the ColorLib "Error 404 V14" page — so "cloud" was
  unavailable).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/cloudtemplate/`
  (HTTP 200, ~41KB HTML). Stylesheets: `css/style.css` (~78KB custom theme —
  the authoritative token source) + `css/animate.css`, `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/magnific-popup.css`, `css/flaticon.css`,
  and Font Awesome 4.7 via cdnjs. Work Sans Google Font loaded via cf-fonts
  (`@font-face` in the head).
- **Screenshot:** downloaded from TEMPLATES.md
  (`cloudtemplate-free-template.jpg`; the file is actually AVIF, ~45KB).
  The vision service was down during prep, so visual confirmation was done
  against the LIVE RENDER instead: computed styles for every section were
  pulled from the rendered page in a browser (values below are the
  getComputedStyle results, not just the raw CSS).
- **Live render verified** (browser, desktop width): navbar links Home /
  Company / Pricing / Leadership / Blog / Contact + green "Get started" CTA;
  hero subheading "CLOUD TEMPLATE" (uppercase), h1 "Cloud, Management,
  Template" (three stacked lines), green "Get in touch" button; "Cloud
  Services" 6-card grid; "What Our Software Can Do For You" split section;
  counter band; "Have any question about us?" strip; "Frequently Asks
  Questions" with 4 pill accordions (first expanded); "Our Best Pricing" 4
  cards (Basic $0, Advance $19, Expert $49, Pro $99); "What Users Saying"
  testimonial carousel (5 cards, name repeats "Mark Web" in source);
  "Recent Blog" 3 cards; purple 4-column footer.
- **Computed tokens (from the rendered page):** hero overlay bg
  `rgb(63,82,227)` = `#3f52e3`; hero h1 white 60px/700; hero subheading
  `rgba(255,255,255,0.8)` uppercase; hero + CTA + services buttons bg
  `#21bf73` (green) white text radius 5px; services icons 80px circles
  `border-radius: 50%` green; counter section bg `#3f52e3`, numbers white
  40px/700, labels `rgba(255,255,255,0.7)`; FAQ pill buttons bg `#3f52e3`
  white text radius 40px; pricing cards white bg, price numbers navy
  `#203d67` 60px/600, plan names + excerpts slate `#72789a`; section h2 navy
  `#203d67` 40px/700; services/card h3 navy `#203d67`; card body text slate
  `#72789a`; footer bg `#421b9b`, headings white; testimonial quote bubble
  40px green circle; `bg-light` sections `#fafafa`; software-section icons
  transparent circles with pink `#ff8ba7` glyphs.
- **Placeholder-copy caveats:** source typos to FIX in the recreation —
  "Resposive Design" → "Responsive Design", "Andriod Apps Development" →
  "Android Apps Development", "iOs Apps Development" → "iOS Apps
  Development", "Unseful Links" → "Useful Links", "Everthing You Need to
  Know…" → "Everything You Need to Know…". Testimonial name repeats "Mark
  Web" for all 5 cards — write DISTINCT names of the same kind. Every card
  body uses the same "Far far away, behind the word mountains…" lorem —
  paraphrase per card. All `href="#"` become real placeholder hrefs. The
  copyright line is "Copyright ©2026 All rights reserved | This template is
  made with ♥ by Colorlib" — paraphrase and drop the Colorlib credit. The
  "Search Your Domain Name" section (`section.ftco-domain`) is COMMENTED OUT
  in the source HTML — do NOT include it.
- **Section order (1:1) from the rendered DOM:**
  1. Navbar (`nav#ftco-navbar.navbar.navbar-expand-lg.navbar-dark`):
     `.ftco-navbar-light` = transparent, absolute, `top: 20px` over the
     hero; ≤992px solid `#000`. Brand white left ("Cloud Template" → the
     wordmark "Cirrus"). Links: Home (active) / Company / Pricing /
     Leadership / Blog / Contact + trailing CTA item "Get started" (green
     solid pill, radius 5px, white text; hover → white bg + blue `#3f52e3`
     text).
  2. Hero (`div.hero-wrap.js-fullheight`): `.overlay` bg `#3f52e3`; row
     `slider-text` height 750px — left 60% `one-third` SVG illustration
     (`images/undraw_co-working_825n.svg`), right `one-forth` text column:
     `span.subheading` brand (uppercase, `rgba(255,255,255,0.8)`, letter-
     spacing 2px), `h1` white 60px/700 with three `span` lines stacked
     `display:block` ("Cloud,", "Management,", "Template" → e.g. "Cirrus," /
     "Cloud," / "Management"), paragraph (lorem), `a.btn.btn-secondary
px-4 py-3` "Get in touch" (green, radius 5px).
  3. Partners (`section.ftco-section.ftco-partner`): one centered row of
     FIVE `a.partner` logo images (`images/partner-1..5.png` → picsum
     placeholders).
  4. Cloud Services (`section.ftco-section.services-section.bg-light`):
     centered heading `h2` "Cloud Services" (navy 40px/700); 3-col grid
     (`col-lg-4 col-md-6`) of SIX `div.media.block-6.services.d-flex`
     cards: 80px green circle icon (flaticon glyph, white 44px; hover →
     white circle + green glyph) + `h3.heading` navy + `p` slate. Items:
     Cloud databases, Website Hosting, File Storage, Forex Trading, File
     Backups, Remote Desktop.
  5. What Our Software Can Do For You (`section.ftco-section`, white):
     split row — left `col-lg-6` illustration (`undraw_referral_4ki4.svg`);
     right `col-lg-6` stack of FIVE `div.media.block-6.services.border
d-flex p-3 mb-3` rows: transparent circle icon with pink `#ff8ba7`
     glyph (`icon icon-2`) + `h3.heading` navy + `p.mb-0` slate. Items:
     Responsive Design, Android Apps Development, iOS Apps Development,
     UX/UI Design, Print Ready Design.
  6. Counters (`section.ftco-section.ftco-counter.img`, bg `#3f52e3`):
     centered heading `h2` (white, 40px/700) "We Always Try To Understand
     Users Expectation" + FOUR counters (`div.counter-wrap`): `strong.number`
     white 40px/700 animating to `data-number` (12000, 100, 4050, 9000) +
     `span` label `rgba(255,255,255,0.7)` — Download, Awards Won,
     Contributors, Satisfied Customers.
  7. Intro strip (`section.ftco-section.ftco-no-pt.ftco-no-pb.bg-light`):
     centered `col-lg-10 div.intro` — `col-md-8`: `h3` "Have any question
     about us?" (600) + paragraph; `col-md-4` right-aligned
     `a.btn.btn-tertiary px-4 py-3` "Get in Touch" (pink `#ff8ba7`, radius
     5px).
  8. FAQ (`section.ftco-section.ftco-no-pb.bg-light.ftco-faqs`): row —
     left `col-lg-6 div.img.img-faqs` (height 700px, radius 4px, shadow
     `17px 25px 56px -22px rgba(0,0,0,0.38)`; the source home page has NO
     actual image in it — use a picsum placeholder); right `col-lg-6
pl-lg-5`: `span.subheading` "FAQs" + `h2.mb-3` "Frequently Asks
     Questions" + intro paragraph + `div.myaccordion` of FOUR pill
     accordions (`div.card` + `button.btn` radius 40px, bg `#3f52e3`,
     white 600, capitalize, shadow `0 2px 8px -4px rgba(0,0,0,0.21)`,
     chevron `fa-chevron` toggling; first expanded by default): "How to
     Make an Account?", "How to manage your Dashboard?", "How to grow your
     investments funds?", "What are those requirements for businesses?";
     each `div.card-body` = lorem paragraph.
  9. Pricing (`section.ftco-section.bg-light`): centered `h2.mb-4` "Our
     Best Pricing"; row of FOUR `col-lg-3 col-md-6 div.block-7` white cards
     (padding 30px; hover reveals a `#3f52e3` offset back-sheet 20px below,
     radius 4px): `h2.heading` plan name (16px/600 slate) — Basic Plan /
     Advance Plan / Expert Plan / Pro Plan; `div.price`: `sup` "$" +
     `span.number` 60px/600 navy (0 / 19 / 49 / 99) + `/mo` small; tagline
     ("100% free. Forever" on Basic; "All features are included" on the
     rest); `h3.heading-2` "Enjoy All The Features" (uppercase 600); `ul`
     feature list (slate): e.g. "150 GB Bandwidth", "100 GB Storage",
     "$1.00 / GB Overages", "All features"; full-width
     `a.btn.btn-tertiary d-block` "Choose Plan" (pink).
  10. Testimonials (`section.ftco-section.testimony-section`): centered
      `h2.mb-4` "What Users Saying"; owl carousel of FIVE
      `div.testimony-wrap` cards: `div.user-img` circular photo 150px
      (80px mobile) with `div.quote` 40px green circle (bg `#21bf73`, white
      quote icon, bottom-right) + blockquote paragraph + `p.name` 18px/700
      - `p.position` slate. Source names all repeat "Mark Web" with roles
        Marketing Manager / Interface Designer / UI Designer / Web Developer
        / System Analyst.
  11. Recent Blog (`section.ftco-section.bg-light`): centered `h2` "Recent
      Blog"; row of THREE `col-lg-4` cards: `div.block-20` photo 275px
      cover + `div.text`: meta ("May 17, 2020 | Admin | 💬") + `h3` title
      ("Everything You Need to Know About Cloud Template" — distinct titles
      per card in the recreation) + link.
  12. Footer (`footer.ftco-footer.ftco-bg-dark`, bg `#421b9b`): row of
      FOUR `div.ftco-footer-widget` columns: (1) brand "Cirrus" (`h2` white
      20px/700) + about paragraph (`rgba(255,255,255,0.7)`) + social icon
      links; (2) "Useful Links" (source: "Unseful Links" typo) — Company,
      Pricing, Leadership, Blog, Contact; (3) "Navigational" — Join Us,
      Blog, Privacy & Policy, Terms & Condition; (4) "Office" — address
      "203 Fake St. Mountain View, San Francisco, California, USA", phone
      "+2 392 3929 210", email "info@yourdomain.com" (icon + text rows);
      bottom copyright paragraph (`rgba(255,255,255,0.7)`), paraphrased
      without Colorlib attribution.

## Design tokens (extracted from `css/style.css` + computed render)

- Fonts (Google Fonts, via `<link>` in `index.html`): **Work Sans**
  (weights ~300–700) — EVERYTHING: nav, headings, body, buttons, footer.
  No secondary font in the source.
- Brand color 1 — **`#3f52e3`** (bright blue): hero overlay bg, counter
  section bg, FAQ pill button bg, pricing card hover back-sheet.
- Brand color 2 — **`#21bf73`** (green): `.btn-secondary` hero button, nav
  CTA "Get started", services 80px icon circles, testimonial quote bubbles;
  hover darkens to `#1da966`.
- Brand color 3 — **`#ff8ba7`** (pink): `.btn-tertiary` buttons ("Get in
  Touch", "Choose Plan"), software-feature icons (`icon-2` glyphs).
- Dark surfaces: footer `#421b9b` (deep purple); mobile navbar solid `#000`;
  no other dark sections.
- Neutrals: `bg-light` sections `#fafafa`; cards/pricing `#fff`; section
  headings + card headings navy **`#203d67`**; body/meta slate
  **`#72789a`**; footer text `rgba(255,255,255,0.7)`, footer headings white.
- Buttons (`.btn-secondary` / `.btn-tertiary`): **radius 5px**, `padding:
1rem 1.5rem` (`px-4 py-3`), 16px/600, white text; tertiary pink variant
  same shape. FAQ accordions are the ONLY fully-rounded elements
  (**radius 40px** pills).
- Icons: services `icon` = 80×80 **circle** (`border-radius: 50%`), white
  44px glyph on green; hover swaps to white circle + green glyph.
  Software `icon-2` = transparent circle, pink `#ff8ba7` 44px glyph.
  Testimonial `quote` = 40×40 green circle, white quote glyph.
- Section headings: centered, 40px/700 navy (30px ≤768px); hero h1 white
  60px/700 `line-height: 1.2` with each word a `display:block` span;
  subheadings uppercase, `letter-spacing: 2px` (hero) / `1px` (section),
  14–16px.
- Layout: hero `slider-text` height 750px, text column ~40% right on
  desktop, stacks on mobile (image first, dark overlay `.3`); services 3-col
  → 2-col → 1-col; pricing 4-col → 2-col → 1-col; counters 4-up →
  2-up; footer 4-col → stack.
- Spacing: sections `padding: 5em 0` (`ftco-section`); services cards
  `d-flex` icon + body (`media-body width calc(100% - 80px)`); software rows
  `border + p-3 + mb-3`; pricing card padding 30px with hover back-sheet
  offset 20px; FAQ image panel height 700px; blog `.block-20` image height
  275px; footer `padding: 5em 0 3em`.
- Icons (source: flaticon + Font Awesome — recreation: lucide-react; brand
  social icons as inline SVG): services — Cloud, Server, FolderOpen,
  TrendingUp, Archive, Monitor; software — Smartphone, AppWindow, Palette,
  PenTool, Printer; FAQ — ChevronDown; testimonials — Quote; footer — Phone,
  Mail, MapPin + social (Facebook, Twitter, LinkedIn, etc.); mobile — Menu.
- Counters: `strong.number` white 40px/700, labels `rgba(255,255,255,0.7)`
  16px; animate up to 12000 / 100 / 4050 / 9000 (Download, Awards Won,
  Contributors, Satisfied Customers).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with the brand,
section links and a CTA button.

#### Scenario: Desktop navbar

- **GIVEN** the Cirrus page is rendered on a desktop viewport
- **WHEN** the top of the page is displayed
- **THEN** the navbar SHALL be transparent, positioned over the hero
  (absolute, ~20px from the top), with the white "Cirrus" wordmark on the
  left
- **AND** text links: Home (active), Company, Pricing, Leadership, Blog,
  Contact
- **AND** a trailing "Get started" CTA pill (green `#21bf73`, white text,
  radius 5px; hover → white bg with blue `#3f52e3` text)

#### Scenario: Mobile navbar

- **GIVEN** a narrow viewport (≤992px)
- **WHEN** the page is rendered
- **THEN** the navbar SHALL have a solid black background
- **AND** the menu SHALL collapse behind a hamburger toggler that opens and
  closes the navigation with an aria-expanded state

### Requirement: Hero

The system SHALL render a full-height blue split hero with a stacked
headline, copy, and a call-to-action button.

#### Scenario: Hero layout

- **GIVEN** the hero area is displayed
- **WHEN** it is inspected
- **THEN** it SHALL fill the viewport height on a blue `#3f52e3` background
- **AND** it SHALL show the brand subheading (uppercase, light white) above
  a large white headline of THREE stacked lines (e.g. "Cirrus," / "Cloud," /
  "Management"), a supporting paragraph, and a green "Get in touch" button
  (radius 5px)
- **AND** on desktop an illustration SHALL occupy ~60% of the hero on the
  left with the text on the right; on mobile the illustration SHALL stack
  above centered text with a dark overlay

### Requirement: Partner logos

The system SHALL render a strip of five partner logos.

#### Scenario: Partner strip

- **GIVEN** the section below the hero is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a row of FIVE partner logo placeholders
  (grayscale-style, evenly spaced, responsive)

### Requirement: Cloud Services grid

The system SHALL render a light section with a 6-card services grid.

#### Scenario: Service cards

- **GIVEN** the "Cloud Services" section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the centered navy heading "Cloud Services" on a
  light `#fafafa` background
- **AND** a responsive 3-column grid of SIX cards, each with a green 80px
  circular icon (white glyph; hover → white circle + green glyph), a navy
  heading and slate body text
- **AND** the six items SHALL be: Cloud databases, Website Hosting, File
  Storage, Forex Trading, File Backups, Remote Desktop

### Requirement: Software capabilities split

The system SHALL render a split section listing software capabilities with
pink icons.

#### Scenario: Split layout

- **GIVEN** the "What Our Software Can Do For You" section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the centered navy heading on a white background
- **AND** on desktop an illustration on the left and a stack of FIVE
  bordered rows on the right, each with a transparent circular icon with a
  pink `#ff8ba7` glyph, a navy heading and slate text
- **AND** the five items SHALL be: Responsive Design, Android Apps
  Development, iOS Apps Development, UX/UI Design, Print Ready Design
  (source typos "Resposive/Andriod/iOs" fixed)
- **AND** on mobile the illustration SHALL stack above the rows

### Requirement: Stats counters

The system SHALL render a solid blue band with four animated counters.

#### Scenario: Counter band

- **GIVEN** the counters section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL sit on a solid `#3f52e3` background with the centered
  white heading "We Always Try To Understand Users Expectation"
- **AND** four counters SHALL show white 40px numbers (Download 12,000 /
  Awards Won 100 / Contributors 4,050 / Satisfied Customers 9,000) with
  light-white labels, animating up from 0 when scrolled into view

### Requirement: Intro strip

The system SHALL render a light strip asking for questions with a pink CTA.

#### Scenario: Intro strip

- **GIVEN** the strip below the counters is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a centered light panel with the heading "Have any
  question about us?" and a supporting paragraph
- **AND** a pink "Get in Touch" button (radius 5px) on the right (below the
  text on mobile)

### Requirement: FAQ accordion

The system SHALL render a FAQ section with a tall image panel and four pill
accordions.

#### Scenario: FAQ layout

- **GIVEN** the "Frequently Asks Questions" section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL be on a light `#fafafa` background with a tall image
  panel (≈700px, rounded 4px, soft shadow) on the left and the "FAQs"
  subheading + navy "Frequently Asks Questions" heading + intro paragraph on
  the right
- **AND** FOUR pill-shaped accordion buttons (radius 40px, blue `#3f52e3`
  bg, white 600-weight text, chevron indicator) SHALL be listed with the
  first one expanded by default
- **AND** the questions SHALL be: How to Make an Account?, How to manage
  your Dashboard?, How to grow your investments funds?, What are those
  requirements for businesses?
- **AND** clicking a collapsed button SHALL expand it (chevron flips) and
  collapse the previously open one, revealing a body paragraph; the toggle
  SHALL expose aria-expanded state

### Requirement: Pricing grid

The system SHALL render a pricing section with four white plan cards.

#### Scenario: Plan cards

- **GIVEN** the "Our Best Pricing" section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the centered navy heading on a light `#fafafa`
  background
- **AND** a responsive 4-column grid of white cards (padding ~30px; hover
  reveals a blue `#3f52e3` offset sheet behind the card, radius 4px)
- **AND** each card SHALL show: plan name (Basic / Advance / Expert / Pro),
  a large navy price (60px: $0 / $19 / $49 / $99) with a "/mo" suffix, a
  tagline ("100% free. Forever" on Basic; "All features are included"
  elsewhere), an uppercase "Enjoy All The Features" label, a slate feature
  list (bandwidth, storage, overages, all features), and a full-width pink
  "Choose Plan" button

### Requirement: Testimonials carousel

The system SHALL render a testimonials section with a carousel of review
cards.

#### Scenario: Testimonial cards

- **GIVEN** the "What Users Saying" section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the centered navy heading and a carousel of FIVE
  cards, each with a circular avatar photo (150px; 80px on mobile) carrying
  a small green quote bubble (40px circle, white quote icon) at its edge,
  a quote paragraph, a 18px/700 name and a slate role line
- **AND** the carousel SHALL advance with prev/next controls (and/or
  autoplay + dots)
- **AND** names SHALL be distinct in the recreation (the source repeats
  "Mark Web" on all five cards)

### Requirement: Recent Blog

The system SHALL render a blog grid with three photo cards.

#### Scenario: Blog cards

- **GIVEN** the "Recent Blog" section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the centered navy heading on a light `#fafafa`
  background
- **AND** a responsive 3-column grid of THREE cards: a 275px cover photo,
  a meta line (date | author | comments), and a title link
- **AND** the titles SHALL be distinct (the source repeats "Everything You
  Need to Know About Cloud Template" on all three)

### Requirement: Footer

The system SHALL render a purple four-column footer with contact details and
a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** it is inspected
- **THEN** it SHALL sit on a deep purple `#421b9b` background
- **AND** four columns SHALL show: (1) the "Cirrus" brand + about paragraph
  - social icon links; (2) "Useful Links" (Company, Pricing, Leadership,
    Blog, Contact); (3) "Navigational" (Join Us, Blog, Privacy & Policy,
    Terms & Condition); (4) "Office" (address, phone "+2 392 3929 210",
    email "info@yourdomain.com" — each with an icon)
- **AND** a copyright line paraphrased for the recreation (e.g. "Copyright
  © <year> All rights reserved | made with ♥ by Free React Templates") —
  no Colorlib attribution or link

## Verification checklist

- [ ] `apps/cirrus` scaffolded from the simplest existing app; package
      renamed `@free-react-templates/cirrus`; workspace registered in
      `package-lock.json` (repo is bun-managed — `bun install` at root,
      never `npm add`)
- [ ] `index.html` loads Work Sans (300–700) via Google Fonts `<link>`;
      title "Cirrus — Cloud & Hosting Company"
- [ ] `src/index.css` `@theme` tokens: `--color-brand: #3f52e3`,
      `--color-brand-green: #21bf73`, `--color-brand-pink: #ff8ba7`,
      `--color-footer: #421b9b`, `--color-heading: #203d67`,
      `--color-muted: #72789a`, `--color-panel: #fafafa`;
      `--font-sans: "Work Sans"`; a `.btn`-style radius 5px shared
      button treatment (green + pink variants), pill utility (radius 40px)
      for FAQ toggles, 80px circular icon treatment
- [ ] Components (one per section, colocated Vitest tests, 100% coverage):
      Navbar (transparent → solid black mobile, links, green CTA,
      hamburger), Hero (blue overlay, 3-line stacked headline, green
      button, illustration), Partners (5 logos), Services (6 cards, green
      circles w/ hover swap), Capabilities (split: illustration + 5 pink-
      icon rows), Stats (4 animated counters, count-up on view), IntroStrip
      (h3 + pink button), FaqSection (image panel + 4 pill accordions,
      first open), Pricing (4 plan cards, hover back-sheet, pink Choose
      Plan), Testimonials (carousel of 5 distinct cards), Blog (3 cards),
      Footer (4 columns + copyright)
- [ ] `App.tsx` composes sections in the DOM order above (Navbar → Hero →
      Partners → Services → Capabilities → Stats → IntroStrip → FaqSection
      → Pricing → Testimonials → Blog → Footer)
- [ ] All images `https://picsum.photos/seed/cirrus-<n>/<w>/<h>` (hero
      illustration 700×750, partners 150×50 ×5, capabilities illustration
      600×600, FAQ panel 600×700, testimonial avatars 150×150, blog covers
      600×275); no ColorLib assets copied; social icons as inline SVG
      (lucide-react has no brand icons)
- [ ] `npm run verify:app cirrus` passes (typecheck + lint + vitest 100% +
      build); full gate runs in CI on merge
- [ ] PR description includes: source template (Cloudtemplate), preview
      URL (`https://preview.colorlib.com/theme/cloudtemplate/`), design
      tokens, renames, placeholder images, fixed source typos, and the dup
      row (line 3051) covered by the same recreation
