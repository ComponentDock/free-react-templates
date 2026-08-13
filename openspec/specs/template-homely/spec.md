# Template: Homely (Finance & Loans Template)

## Purpose

Homely is a single-page online-loan / personal-finance landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Easylo" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Easylo" — instant-cash-loan / online home-loan
  finance landing page (Bootstrap 5 + jQuery slicknav / owl.carousel /
  slick / nice-select; fontawesome + themify icons; Google Fonts
  "Chivo" — body — and "Inter" — headings — imported at the top of
  `css/style.css`). (source: https://colorlib.com/wp/template/easylo/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/easylo/
  (HTTP 200, ~36 KB HTML fetched + `assets/css/style.css` ~105 KB parsed;
  live DOM structure extracted; screenshot reviewed in the browser).
- **Screenshot analyzed:** `easylo-colorlib-template.jpg` (1200×946,
  viewed in browser). The screenshot MATCHES the live preview (no drift):
  split hero — left = white marketing copy over a teal-green photo with a
  faint house-roof pattern, right = white loan-calculator card; below it a
  white "Solutions for every business need." services section with 3 icon
  cards (Home Loan / Car Loan / Business Loan). Testimonial / blog /
  footer sit below the fold — their anatomy was confirmed from the DOM +
  CSS instead.
- **Visual design:** fresh green `#10c98f` accent over white and mint
  (`#e4f1ed` / `#f4fcfa`) surfaces; split hero with a floating white loan
  calculator card (pill-radius selects, green slider amount, full-width
  green APPLY NOW button); dark-green `#0f4332` testimonial band; sharp
  corners everywhere except the pill selects; Chivo body over Inter
  headings; signature 110×3px green underline under every section heading
  (white variant under the hero h1). Aesthetic: clean, trustworthy
  fintech — green = money/approval.
- **Section order (1:1, from the DOM of the home page):**
  1. Header (`div.header-area.header-transparent` → `div.main-header` →
     `div.header-bottom.header-sticky`): brand logo (green wordmark) left;
     `ul.main-menu` inline links — Home / About / Services / Blog /
     Contact (source menu also carries Blog Details + Element — drop for
     the single-page recreation); `div.header-right-btn` green "Apply For
     Loan" CTA button; `div.mobile_menu` slicknav panel → hamburger
     drawer in the recreation.
  2. Hero (`div.slider-area.slider-bg1.hero-overly`):
     `background-image: url(../img/hero/h1_hero1.jpg)` cover + green
     overlay `::before` = `rgba(16,201,143,0.4)`; two columns:
     - LEFT `div.hero__caption`: `h1` Inter 62px 700 white lh 1.1 (48px
       at lg, ~36px mobile) with a white 110×3px `::after` underline —
       "The simple online home loan."; `p` 24px 500 white lh 1.6 —
       "Financial uncertainty is hard on employees, and causes even.";
       `div.slider-btns` → one outlined green button "Our Services"
       (`.boxed-btn`: white bg, `#10c98f` text + 1px border, padding
       18px 44px, uppercase, letter-spacing 1px; hover = filled green +
       white text).
     - RIGHT `div.form-wrapper` (white card, padding 45px 35px 35px,
       `box-shadow: 0 16px 30px rgba(15,67,50,0.1)`, `margin-bottom:
-100px` — overlaps the section below): `div.form-tittle` — `h2`
       "How much you want?" + green 110×3 underline; `p` "We provide
       online instant cash loans."; TWO pill selects (`.nice-select`:
       height 50px, `border: 1px solid #eaeaea`, `border-radius: 25px`,
       capitalize) — "Select Amount" (options Category 1–3) and "Select
       Month" (options Year / week / Days 3); an amount RANGE slider with
       the value shown in green (`span` "We want to pay $0" — $ amount
       highlighted); `div.submit-info.text-center` → full-width green
       "Apply Now" button (`.submit-btn2`: bg `#10c98f`, height 50px,
       padding 10px 36px, white, uppercase 600, radius 0).
- **Design tokens extracted from the preview CSS (`assets/css/style.css`):**
  - Brand green **`#10c98f`** (77 uses): `.theme-bg` / `.theme-color`;
    `.btn` bg; `.submit-btn2` bg; `.boxed-btn` text/border/hover bg;
    `#scrollUp` bg; `.form-tittle::before` underline; `.section-tittle
h2::before` underline; `.info-man` badge bg; `.footer-form input`
    border; slider amount color.
  - Dark green **`#0f4332`** (15 uses): all headings h1–h6 (`color:
#0f4332`), `.services-cap h5 a`, `.blogs-cap h5 a`, AND the
    testimonial section background `.testimonial-area { background:
#0f4332 }`.
  - Text: body **`#4c5753`** (Chivo 16px lh 1.6), section-tittle p
    **`#6d6d6d`**, service label **`#0c8760`** (14px), blog meta
    **`#a4aca9`**, testimonial quote **`#d5ece5`**, footer pera `#4c5753`
    (14px lh 1.8), footer social `#4c5753` (20px).
  - Surfaces: white `#fff` (cards, form), mint **`#e4f1ed`**
    (`.section-bg1` — both about bands), near-white green **`#f4fcfa`**
    (`.section-bg2` + `.footer-wrapper`), `#f1fbff` (`.gray-bg`),
    `#f9fafc` (testimonial-bg), `#eff6f0` (brand-bg).
  - Hero overlay: green `rgba(16,201,143,0.4)`.
  - Fonts: **"Chivo"** for body (16px, `#4c5753`) and **"Inter"** for all
    headings (`#0f4332`; `.section-tittle h2` 40px 700 lh 1.3
    letter-spacing -0.04em; hero h1 62px 700; card h5 24px 700 lh 1.4).
    Import: `Chivo:wght@300;400;700;900 & Inter:wght@300;400;500;600;
700;800;900` via Google Fonts `<link>` in the recreation.
  - Radii: selects 25px (pill); everything else radius 0 (sharp —
    `.boxed-btn`, `.btn`, `.form-wrapper`, `.submit-btn2` all 0px).
  - Shadows: form card `0 16px 30px rgba(15,67,50,0.1)`; apply-area
    inputs `0 2px 2px rgba(0,0,0,0.05)` (apply page, not home).
  - Signature motifs: transparent header over the hero → sticky white on
    scroll; green 110×3px underline centered under every `.section-tittle
h2` (left-aligned white variant under hero h1); floating white
    calculator card overlapping the hero bottom (`margin-bottom: -100px`);
    mint `#e4f1ed` about bands alternating with white / `#f4fcfa`;
    absolutely-positioned green `.info-man` badge (bottom -50px, right
    -100px → 0 at lg, padding 63px 47px) with big "99%" + caption;
    3-col then 4-col icon service grids; dark-green testimonial band with
    big decorative quote mark + founder avatar row; 3-col blog grid;
    4-widget `#f4fcfa` footer; section rhythm = `.section-padding`
    110px/90px, `.footer-padding` 97px/37px.
  3. Services 1 (`section.our-services.section-padding`, white bg):
     centered `div.section-tittle.text-center.mb-70` — `h2` "Solutions
     for every business need." (40px 700, green underline) + `p`
     `#6d6d6d` (the source Lorem line "The brochure must grab a
     viewer's attention…" — paraphrase); row of THREE
     `div.single-services.mb-30` cards (3-col grid, middle card
     `offset-xxl-1`): `div.services-icon` outline icon (home / car /
     business building in source — lucide Home, Car, Building2) +
     `div.services-cap`: `span` 14px `#0c8760` label — "Home Loan" /
     "Car Loan" / "Business Loan"; `h5` 24px 700 `#0f4332` title —
     "What are my options and the cost to exercise?" / "Should I
     exercise now or later? How can I afford it?" / "I own my shares -
     can I get liquidity now without selling?"; `p` (source repeats the
     same stock-options Lorem — recreate 3 DISTINCT loan-related
     paragraphs); "Learn More" link.
  4. About 1 (`section.about-area1.section-bg1.section-padding`, bg
     `#e4f1ed`): LEFT `div.about-img.about-img1` — photo + floating
     `div.info-man` badge (bg `#10c98f`, padding 63px 47px, absolute
     bottom -50px right -100px → right 0 at lg): `div.head-cap` big "99%"
     - "Customer Satisfaction" caption; RIGHT `div.about-caption`:
       `div.section-tittle.section-tittle2` (underline removed) `h2` "We
       guide projects and organizations in making the right decisions." +
       THREE `div.about-single.mb-10.d-flex` rows (icon + `div.pera`
       padding-left 26px): title + short para — same three
       options/questions as the services cards (source repeats; recreate
       with slightly different phrasing per row).
  5. Services 2 (`section.our-services.section-padding.section-bg2`, bg
     `#f4fcfa`): centered tittle "Why choose us?"; FOUR
     `div.single-services.mb-30.text-center` cards (4-col grid): icon +
     `h5` title — "Quick apply" / "Online & Secure" / "Just time" /
     "Low interest" + `p` (source repeats one Lorem line — recreate 4
     DISTINCT paragraphs).
  6. About 2 (`section.about-area1.section-bg1.section-padding`, bg
     `#e4f1ed`): LEFT `div.about-caption.about-caption2` — `h2` "Get
     loan in 3 easy steps" + THREE `about-single` rows (same three
     question titles as About 1 — source repeats; recreate as THREE
     loan steps with distinct copy, e.g. "Check your rate in minutes",
     "Apply online with confidence", "Get funded fast"); RIGHT
     `div.about-img` photo (different image from About 1).
  7. Testimonials (`div.testimonial-area`, bg `#0f4332`): carousel
     (`div.h1-testimonial-active.dot-style`, slick dots below) of slides
     `div.single-testimonial.position-relative` (padding 100px 0 0 50px):
     `div.testimonial-caption` — big decorative quote mark (source:
     image behind, top -33px left -34px; recreation: large styled "“"
     glyph); `div.founder-text span` 24px 600 `#d5ece5` — quote ("From
     start to finish, we were acquired within 30-days" / "We'll connect
     you with the right people to start"); `div.testimonial-founder
.d-flex.align-items-center`: `div.founder-img` avatar +
     `div.founder-text` name + role (source repeats "Designer at
     Colorlib" for every slide — recreate 3-4 DISTINCT customers with
     generic roles).
  8. Blog (`section.home-blog.section-padding`, white bg): centered
     tittle "Latest News" (`mb-60`); THREE `div.single-blogs.mb-30`
     cards (`col-lg-4`): `div.blog-img` photo (mb-25) + `div.blogs-cap`:
     `span` `#a4aca9` date/meta ("20 March 2021" format); `h5` 24px 700
     `#0f4332` title link; `p` excerpt (source repeats the same Lorem —
     recreate 3 DISTINCT loan-advice posts); underlined "read more" link
     (`.blogs-cap a.red-btn` — `#0f4332` underline, hover
     letter-spacing .5px).
  9. Footer (`div.footer-wrapper`, bg `#f4fcfa`; `div.footer-area
.footer-padding` 97px/37px): `div.row.justify-content-between`:
     - `div.col-xl-3` (col 1): `div.footer-logo.mb-35` (green wordmark) +
       `div.footer-pera` blurb `p` (`#4c5753` 14px lh 1.8) +
       `div.footer-social.mt-30` icon row (source fontawesome: facebook /
       twitter / pinterest / instagram → inline SVG brand icons in the
       recreation; lucide-react has NO brand icons).
     - `div.offset-xl-1.col-xl-2` (col 2): `div.footer-tittle` "Quick
       Links" — links: Work / Services / Products / Tips & Tricks.
     - `div.col-xl-2` (col 3): `div.footer-tittle` "Solution" — links:
       Air freight / Ocean freight / Large projects.
     - `div.col-xl-4` (col 4): `div.footer-tittle.mb-10` "Newsletter" —
       `div.footer-form.mb-20`: email input (height 65px, radius 0,
       `border: 2px solid #10c98f`, no bg) + subscribe button;
       `div.mt-10.info` contact line; `div.footer-social.mt-30`.
     - Bottom bar `div.footer-bottom-area` → `div.footer-border` +
       `div.footer-copy-right.text-center`: copyright "© <year> All
       rights reserved | This template is made with ♥ by Colorlib" →
       Component Dock credit (repo rule, NOT ColorLib).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/homely-<n>/<w>/<h>`; verify seeds: hero
  background (house/home scene), about photos ×2, testimonial avatars ×4,
  blog images ×3 — screen the seeds before pinning, avoid known-bad ids);
  icons → lucide-react (Home, Car, Building2, Zap, ShieldCheck, Clock,
  Percent, Calculator, Quote, Menu, X, ArrowRight, Send, CheckCircle2 —
  probe EVERY export with the typeof check before importing; brand icons
  Facebook/Twitter/Pinterest/Instagram NOT in lucide-react → inline SVG
  paths); Chivo + Inter via Google Fonts `<link>` in `index.html`; brand
  green `#10c98f` + dark `#0f4332` + mint `#e4f1ed` + soft `#f4fcfa` +
  text `#4c5753`/`#6d6d6d`/`#0c8760`/`#a4aca9`/`#d5ece5` in `@theme`; no
  asset/CSS/font-file copying. Demo copy paraphrased but same kinds
  (nav links, hero headline + subtext + outlined CTA, calculator form
  with 2 pill selects + amount slider + Apply Now, 3 service cards with
  labels, 2 mint about bands with green badge + icon rows, 4 "Why choose
  us" cards, dark testimonial carousel, 3 blog cards, 4-widget footer).
  Source repetition cleaned up: 3 distinct service paragraphs, 3 distinct
  About-1 rows (vs the service-card titles), 3 distinct "3 easy steps"
  rows (source repeats the same three questions), 4 distinct "Why choose
  us" paragraphs, 3-4 distinct testimonial customers (source repeats
  "Designer at Colorlib"), 3 distinct blog posts (source repeats one
  Lorem line). The calculator form is client-side only (no backend): two
  selects + a controlled range slider whose value renders in green, and
  a submit that validates required fields (zod pattern per repo
  conventions) then shows a success state; the header "Apply For Loan"
  button and hero "Our Services" button scroll to the form / services
  section.

Homely lives in `apps/homely` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn) plus the repo-standard
Navbar/Footer chrome (adapted to the transparent-over-hero header and the
4-widget mint footer).

## Requirements

### Requirement: Header

The system SHALL render a header with the brand wordmark, nav links, a
green "Apply For Loan" call-to-action, and a working mobile menu.

#### Scenario: Header content

- **GIVEN** the Homely page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand "Homely" in a green wordmark,
  nav links Home / About / Services / Blog / Contact, and a green
  "Apply For Loan" button
- **AND** the header SHALL be transparent over the hero and become solid
  on scroll, and provide a slide-in drawer with the same links on mobile

### Requirement: Hero

The system SHALL render a split hero with marketing copy and a floating
loan-calculator card on a photo background with a green overlay.

#### Scenario: Hero content

- **GIVEN** the Homely page is rendered
- **WHEN** the hero section is visible
- **THEN** the hero SHALL show a background photo with a green overlay
  (rgba(16,201,143,0.4)), the white headline "The simple online home
  loan." with a white underline, the subtext "Financial uncertainty is
  hard on employees, and causes even.", and an outlined green
  "Our Services" button
- **AND** the right side SHALL show a white calculator card that
  overlaps the next section, titled "How much you want?" with the
  subtext "We provide online instant cash loans."

### Requirement: Loan calculator form

The system SHALL render a client-side calculator form with two pill
selects, an amount slider with a green value, and a submit button.

#### Scenario: Calculator form behaviour

- **GIVEN** the loan calculator card is visible
- **WHEN** the user interacts with it
- **THEN** the form SHALL show a "Select Amount" select, a "Select
  Month" select, and a range slider whose current amount renders in
  green
- **AND** submitting with the required fields filled SHALL show a
  success message, while submitting with empty required fields SHALL
  show validation errors and block submission

### Requirement: Services 1

The system SHALL render a "Solutions for every business need." section
with three labeled service cards.

#### Scenario: Service cards

- **GIVEN** the Homely page is rendered
- **WHEN** the first services section is visible
- **THEN** the section SHALL show the centered heading "Solutions for
  every business need." with a green underline and three cards, each
  with an outline icon, a small green label ("Home Loan", "Car Loan",
  "Business Loan"), a bold title, a paragraph, and a "Learn More" link

### Requirement: About 1

The system SHALL render a mint about section with a photo, a floating
green "99% Customer Satisfaction" badge, a heading, and three icon rows.

#### Scenario: About section content

- **GIVEN** the Homely page is rendered
- **WHEN** the first about section is visible
- **THEN** the section SHALL show a photo on the left with a floating
  green badge showing "99%" and "Customer Satisfaction", and on the
  right the heading "We guide projects and organizations in making the
  right decisions." (no underline) followed by three icon rows, each
  with a title and a short paragraph

### Requirement: Services 2 (Why choose us)

The system SHALL render a "Why choose us?" section with four centered
feature cards.

#### Scenario: Feature cards

- **GIVEN** the Homely page is rendered
- **WHEN** the second services section is visible
- **THEN** the section SHALL show the centered heading "Why choose us?"
  on the soft `#f4fcfa` background and four centered cards, each with
  an icon, a bold title ("Quick apply", "Online & Secure", "Just
  time", "Low interest"), and a distinct paragraph

### Requirement: About 2 (3 easy steps)

The system SHALL render a mint about section with a "Get loan in 3 easy
steps" heading, three step rows, and a photo.

#### Scenario: Steps content

- **GIVEN** the Homely page is rendered
- **WHEN** the second about section is visible
- **THEN** the section SHALL show the heading "Get loan in 3 easy
  steps" (no underline) with three distinct icon rows describing three
  loan steps, and a photo on the right (different from the About 1
  photo)

### Requirement: Testimonials

The system SHALL render a dark-green testimonial carousel with distinct
customer quotes, avatars, names, and roles.

#### Scenario: Testimonial carousel

- **GIVEN** the Homely page is rendered
- **WHEN** the testimonials section is visible
- **THEN** the section SHALL show a carousel on a dark green
  (`#0f4332`) background, each slide with a large quote mark, a quote
  in light green (`#d5ece5`) text, an avatar, and a name + role
- **AND** the customers SHALL be distinct people with generic roles
  (the source repeats "Designer at Colorlib" on every slide)

### Requirement: Blog

The system SHALL render a "Latest News" section with three distinct blog
cards, each with an image, a date, a title, an excerpt, and a link.

#### Scenario: Blog cards

- **GIVEN** the Homely page is rendered
- **WHEN** the blog section is visible
- **THEN** the section SHALL show the centered heading "Latest News"
  and three cards, each with a photo, a date/meta line ("20 March 2021"
  format, gray `#a4aca9`), a bold 24px title, an excerpt, and an
  underlined "read more" link
- **AND** the three posts SHALL be distinct loan-advice articles (the
  source repeats the same Lorem text)

### Requirement: Footer

The system SHALL render a mint footer with four widgets and a copyright
bar linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the Homely page is rendered
- **WHEN** the footer is visible
- **THEN** the footer SHALL show a brand widget with a blurb and social
  icons, a "Quick Links" column (Work / Services / Products / Tips &
  Tricks), a "Solution" column (Air freight / Ocean freight / Large
  projects), and a "Newsletter" widget with an email input (2px green
  border) and a subscribe button
- **AND** the bottom bar SHALL show the copyright line with a link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/homely` scaffolded from the simplest existing app; package
      renamed to `@free-react-templates/homely`; `public/CNAME` =
      `homely.free.componentdock.com`; homepage
      `https://homely.free.componentdock.com`.
- [ ] No "colorlib" string anywhere in `apps/homely/*` (provenance only
      in this spec, TEMPLATES.md, and the PR).
- [ ] `@theme` tokens: `--color-brand: #10c98f`, `--color-brand-deep:
#0f4332`, `--color-brand-label: #0c8760`, `--color-ink: #0f4332`,
      `--color-body: #4c5753`, `--color-muted: #6d6d6d`, `--color-meta:
#a4aca9`, `--color-quote: #d5ece5`, `--color-mint: #e4f1ed`,
      `--color-soft: #f4fcfa`, `--color-faint: #f1fbff`; fonts Chivo
      (body) + Inter (headings) via Google Fonts `<link>`.
- [ ] Section order 1:1: Header → Hero (+ floating calculator card) →
      Services 1 → About 1 → Services 2 → About 2 → Testimonials →
      Blog → Footer.
- [ ] Hero overlay `rgba(16,201,143,0.4)`; form card shadow
      `0 16px 30px rgba(15,67,50,0.1)` and `margin-bottom: -100px`
      overlap; green 110×3px underline centered under every section
      heading (white, left-aligned under the hero h1); selects pill
      radius 25px, all other corners sharp (0px); floating "99%" badge
      (green, absolute bottom -50px, right -100px → 0 at lg).
- [ ] Distinct content everywhere the source repeats: 3 service
      paragraphs, 3 About-1 rows, 3 "easy steps" rows, 4 "Why choose
      us" paragraphs, 3-4 testimonial customers (source repeats
      "Designer at Colorlib"), 3 blog posts; footer credit → Component
      Dock (NOT ColorLib).
- [ ] Tests written first (TDD) mirroring every scenario; 100% line/
      function/branch/statement coverage; jsdom 30 localStorage
      polyfill copied from `apps/cura/src/test/setup.ts` if needed.
- [ ] `bash scripts/verify-app.sh homely` passes (typecheck + lint +
      knip + fallow + coverage + build).
- [ ] PR description includes: source (ColorLib Easylo), preview URL,
      design tokens (green `#10c98f`, dark `#0f4332`, mint `#e4f1ed`,
      soft `#f4fcfa`, body `#4c5753`, Chivo + Inter, pill 25px selects,
      sharp corners, 110×3px underlines, floating form card + badge),
      and what differs (wordmark, picsum placeholders, distinct
      testimonial/blog copy, client-side calculator form, Component
      Dock credit, no asset copying).
- [ ] Post-merge bookkeeping: mark BOTH TEMPLATES.md "Easylo" rows
      (line ~575 and its duplicate ~1750) `[x]` with the live URL and
      run `npm run readme:status`.
