# Template: Pearly (Dental Clinic / Medical Template)

## Purpose

Pearly is a single-page dental-clinic website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dental" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Dental" — dental clinic website
  (Bootstrap 5 + owl-carousel + slicknav + animate + magnific-popup +
  fontawesome + themify icons; single font family Chivo via Google Fonts
  `@import` in `style.css`).
  (source: https://colorlib.com/wp/template/dental/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/dental/
  (HTTP 200, ~27.5 KB HTML fetched + `assets/css/style.css` ~120 KB parsed;
  live DOM structure extracted, screenshot reviewed).
- **Screenshot analyzed:** `dental-colorlib-template.jpg` (1200×946,
  downloaded + viewed in browser): clean medical split-screen layout —
  header with green tooth logo "Dental" + centered nav (Home / About /
  Treatment / Blog / Contact) + solid mint-green square "Make Appointment"
  button; hero split into a pale mint-green left panel (faint oversized
  tooth outline graphic, large dark-navy headline "A brighter dental care
  experienced", paragraph, white/outline rectangular button) and a right
  photo of a dental team at work; below, an about section split into a
  left dentist photo column and a right white column ("Best template for
  dental specialist" with a short green underline bar, two paragraphs, an
  outlined "Make an Appointment" button and three contact blocks PHONE /
  WORKING TIME / OUR CLINIC ADDRESS); services cards with line icons;
  bordered testimonial quote cards; blog cards; a "Get a Call Back" CTA
  band with a mint overlay and a solid royal-blue Submit button; footer
  with logo + blurb + social squares + map + contact columns. Overall
  aesthetic: fresh, clinical, professional — mint `#39CCA4` primary over
  dark navy `#122C77`, pale mint-white `#F9FCFC` surfaces, Chivo sans
  everywhere, square buttons throughout.
- **Section order (1:1, from the DOM of the home page):**
  1. Header (`header` → `div.header-area.header-transparent` →
     `div.main-header.header-sticky`): left logo image
     (`assets/img/logo/logo.png`, green tooth + "Dental" in the
     screenshot), centered nav `ul` — Home / About / Treatment / Blog
     (dropdown: Blog / Blog Details / Elements) / Contact; right
     `a.header-btn` "Make Appointment" — solid `#39CCA4` bg, white 15px
     500, padding 13px 33px, `border-radius:0`, margin-left 15px.
     `.header-transparent` = absolute top overlay; `.main-header
.header-sticky.sticky-bar` sticks on scroll.
  2. Hero (`section.slider-area.position-relative` →
     `div.slider-active` → `div.single-slider` → `div.slider-cap-wrapper.
slider-height`, 800px tall): flex split — left `div.hero-caption`:
     `h1` 50px 400 Chivo `#122C77` line-height 1 margin-bottom 63px — "A
     brighter dental care experienced"; `p` (Lorem ipsum...) 18px;
     `a` > `div.button_base.b3d_roll` "Make an Appointment" — 248×56px
     18px 500; default face = OUTLINE (1px solid `#122C77`, text
     `#122C77`), hover rolls (rotateX 3D) to the solid face = bg
     `#39CCA4` white text; `div.hero-shape` — floating tooth graphic
     (`assets/img/hero/tooth.png`); right `div.hero-img.position-relative`
     (width 52%, overflow hidden) — photo `assets/img/hero/h1_hero1.jpg`
     (dental team, pulse animation). The pale-mint hero panel + faint
     tooth outline seen in the screenshot come from the section
     background treatment (screenshot shows solid pale mint `#F9FCFC`-
     family panel behind the caption column).
  3. About (`section.visit-tailor-area2.fix`): flex row — left
     `div.tailor-offers` (31% width, 828px height, `background-image:
url(../img/gallery/visit_bg.jpg)` cover — photo of a female dentist);
     right `div.tailor-details` > `div.single-details.wow.fadeInUp.mb-20`:
     `h3` "Best template for dental specialist" with `h3::after` teal
     underline bar (3px × 100px `#39CCA4`, bottom -26px) + three
     paragraphs (Lorem ipsum...) + `a.btn_01.mt-15` "Make an Appointment"
     (outline: 1px solid `#122C77`, color `#122C77`, 16px 500, padding
     19px 36px, radius 0); second column `div.single-details.ml-90` with
     THREE `div.address` blocks: `h5` PHONE → "+3 (986)-383-2293";
     `h5` WORKING TIME → "09:00 AM – 08:00 PM" / "Saturday Offline";
     `h5` OUR CLINIC ADDRESS → "710 Stanford Springs Apt. 185, Lake
     Molliestad".
  4. Services (`section.services-area.section-padding.fix.section-bg`, bg
     `#F9FCFC`, `section-padding` = 120px top/bottom): `div.section-tittle`
     — `h2` 44px 400 Chivo `#122C77` "Our treatment keeps you smile" +
     `p` 18px 400 `#737B92`; row of FIVE cards (`div.single-cat`): 1px
     border `rgba(18,44,119,0.1)`, padding 44px 29px 43px 26px, centered
     `div.cat-icon` svg line-icon (`assets/img/icon/services1..4.svg`,
     margin-bottom 30px) + `h4` title. Source card titles: Teeth
     Whitening / Teeth Cleaning / Quality Brackets / Modern Anesthetic /
     Teeth Cleaning (5th repeats — recreate 5 DISTINCT treatments, e.g.
     Teeth Whitening, Teeth Cleaning, Quality Brackets, Modern
     Anesthetic, Dental Implants).
  5. Testimonials (`section.testimonial-area2.section-padding`, NO section
     heading in source): `div.testimonial-active.owl-carousel` with THREE
     `div.single-testimonial` — `border:1px solid #122C77`, padding
     37px 65px 45px: `div.testimonial-caption` > `div.testimonial-top-cap`:
     quote icon (`assets/img/icon/quotes-sign.png`, margin-bottom 20px) +
     `p` quote (Lorem ipsum...); `div.testimonial-founder.d-flex.
align-items-center`: `div.founder-text` `span` "- Sharon Needles"
     (source repeats the SAME name on all three slides — recreate 3
     distinct patients, e.g. "- Maria Gomez" / "- David Chen" / "- Aisha
     Khan").
  6. Blog (`section.home-blog.section-padding`; `.home-blog::after` —
     `#F9FCFC` band covering the top 59% behind the section): centered
     `div.section-tittle` `h2` "Latest blog"; THREE cards
     `div.single-blog` with photo (`assets/img/gallery/blog1..3.jpg`) +
     `h4` > `a` 18px title + `p` excerpt + `a.browse-btn` "Read More"
     (color `#080808`, 16px 500, underline). Source blog titles are
     medical/oncology ("When a cancer diagnosis predicts future good
     health", "Spinal Stabilization Surgery: What Does It Involve?", "An
     Endoscopic, Minimal Scarring Method Developed") — recreate with 3
     DENTAL-appropriate article titles (e.g. "Why Regular Checkups
     Matter", "Invisalign vs Braces: What to Know", "A Guide to Painless
     Root Canals").
  7. CTA band (`section.want-wrapper` — bg image + `::after` mint overlay
     `rgba(200,255,239,0.6)`, padding 77px top / 70px bottom): centered
     `div.wantToWork-caption`: headphone icon
     (`assets/img/icon/headphone.svg`) + `h2` 44px 500 Chivo `#122C77`
     "Get a Call Back" + `p` "Leave your phone number, we will call back";
     below, a form row: `div.single-form` `input` placeholder "Your name"
     - `input` placeholder "Phone no." (`input` = height 70px, padding
       10px 25px, radius 0, border 0, bg `#f9f9ff`) + `a.btn2.
wantToWork-btn` "Submit" — solid `#2845BA`, white 18px 500, height
       70px, padding 14px 68px, radius 0.
  8. Footer (`footer` → `div.footer-wrapper` → `div.footer-area.
footer-padding`, padding 99px top / 50px bottom): row
     `justify-content-between` with THREE columns:
     - col-xl-3: `div.single-footer-caption` — footer logo
       (`assets/img/logo/logo2_footer.png`, margin-bottom 35px) + blurb
       `p` "There are many variations of passages of Lorem Ipsum
       available be the majority." (line-height 1.6) + `div.footer-social.
pt-30`: FOUR square social icons (facebook / instagram / linkedin /
       youtube) — 50×50px, color `#122C77`, 1px border
       `rgba(18,44,119,0.1)`, 20px icons, margin-right 10px.
     - col-xl-4: `div.map.mb-50` — Google Maps iframe embed (334px tall,
       full width; source embeds a Burj Khalifa map pin — recreation
       decision: embed a neutral map iframe or replace with a styled
       static placeholder panel; do NOT copy the source embed URL).
     - col-xl-3: THREE `div.footer-tittle.mb-30` blocks: `h4` 20px 700
       UPPERCASE `#122C77` — PHONE ("+3 (986)-383-2293") / WORKING TIME
       ("09:00 AM – 08:00 PM", "Saturday Offlinea") / OUR CLINIC ADDRESS
       ("710 Stanford Springs Apt. 185, Lake Molliestad"); `ul li` color
       `#737B92` 15px 400, margin-bottom 5px.
     - Bottom bar `div.footer-bottom-area` > `div.footer-border`
       (border-top 1px solid `rgba(18,44,119,0.1)`, padding-top 26px) —
       copyright line → Component Dock credit (repo rule, NOT ColorLib).
- **Design tokens extracted from the preview CSS (`assets/css/style.css`):**
  - Primary brand **mint/teal `#39CCA4`** (`.theme-bg`; ~21 uses): solid
    `.header-btn` bg, `.b3d_roll` hover face bg, `.single-details h3::after`
    underline bar, `.footer-area .icon i` color, `.section-tittle2 p::after`
    accent.
  - Dark navy **`#122C77`** (`brand-bg` family): `.hero-caption h1` color,
    `.btn_01` border + text, `.b3d_roll` outline face, `.wantToWork-caption
h2` color, `.section-tittle h2` color, `.footer-tittle h4` color,
    `.footer-social a` color, `.single-testimonial` border, `input` text
    color.
  - Royal blue **`#2845BA`** (5 uses): `.btn2` solid Submit bg.
  - Section background **`#F9FCFC`** (`.section-bg`, `.home-blog::after`
    top 59% band); alt **`#F1FBFF`** (`.gray-bg`); white surfaces;
    `input` bg `#f9f9ff`; overlay mint `rgba(200,255,239,0.6)` over the
    CTA bg image; black `#16161a` (`.black-bg` utility).
  - Text: body **`#737B92`** (`.section-tittle p` 18px 400,
    `.footer-tittle ul li` 15px 400), `#080808` (`.browse-btn` 16px 500),
    `#fff` on solid buttons/photo surfaces.
  - Fonts: **"Chivo"** sans-serif only (300/400/700/900 — hero h1 50px
    400, section h2 44px 400, wantToWork h2 44px 500, `.header-btn` 15px
    500, `.btn_01` 16px 500, `.btn2` 18px 500, `.b3d_roll` 18px 500,
    `.footer-tittle h4` 20px 700 uppercase, `.single-blog h4 a` 18px).
    Loaded via Google Fonts `@import
url("...family=Chivo:wght@300;400;700;900&display=swap")` — recreate
    with `<link>` in `index.html`.
  - Buttons: **square, border-radius 0 everywhere**. `.header-btn` solid
    mint (white 15px 500, padding 13px 33px); `.btn_01` outline navy (1px
    solid `#122C77`, transparent bg, 16px 500, padding 19px 36px);
    `.b3d_roll` hero button (248×56px, 18px 500 — outline navy face
    rolling to solid mint on hover via rotateX 3D); `.btn2` solid royal
    blue (white 18px 500, 70px tall, padding 14px 68px); `.browse-btn`
    plain dark text link with underline.
  - Signature motifs: transparent → sticky header with solid mint CTA;
    split hero (caption column + 52%-width photo + floating tooth shape);
    about section with 31%-width background-photo panel; teal underline
    bar under `h3`; three uppercase contact blocks; services cards with
    1px navy-tint border + centered svg line icons; bordered quote-card
    testimonials (1px `#122C77`); blog section with `#F9FCFC` top band;
    CTA band with mint overlay + headphone icon + name/phone inputs +
    royal-blue submit; footer with square bordered social icons + map +
    uppercase contact columns; section rhythm = `section-padding` 120px
    top/bottom.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/pearly-<n>/<w>/<h>`; screen seeds for dental-
  clinic/medical/people subjects — verify each seed renders an
  appropriate scene before pinning); icons → lucide-react (Phone, Clock,
  MapPin, Headphones, Quote, ChevronLeft, ChevronRight, Menu, X, Smile,
  Sparkles, ShieldCheck, Stethoscope, ScanFace, Baby — probe every export;
  brand icons Facebook/Instagram/LinkedIn/YouTube are NOT in lucide-react
  → inline SVG paths); Chivo via Google Fonts `<link>` in `index.html`;
  brand mint `#39CCA4` + navy `#122C77` + royal blue `#2845BA` +
  `#F9FCFC`/`#F9F9FF` surfaces in `@theme`; no asset/CSS/font-file
  copying. Demo copy paraphrased but same kinds (hero headline + subtext,
  about copy, 5 treatment cards, 3 testimonials, 3 blog posts, CTA form,
  footer blurb + contact info). Source repetition cleaned up: 5 distinct
  treatment titles (source repeats "Teeth Cleaning"), 3 distinct
  testimonial names (source repeats "- Sharon Needles"), 3
  dental-appropriate blog titles (source uses oncology/orthopedic
  articles), sensible clinic phone/hours/address, working-time block
  spellings fixed. Google Maps iframe → embed a neutral location or a
  styled placeholder panel (never the source embed URL). "Submit" button
  can be a link (no backend). The 3D roll hover on the hero button can be
  approximated with Tailwind transitions (rotateX) or a simple
  color-swap hover — a faithful-enough simplification is acceptable.

Pearly lives in `apps/pearly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn) plus the repo-standard Navbar/Footer chrome
(adapted to the transparent-sticky mint-CTA header and the 3-column
contact footer).

## Requirements

### Requirement: Header

The system SHALL render a transparent-overlay header with the site logo,
centered nav links, and a solid mint appointment button, which becomes
sticky on scroll.

#### Scenario: Header content and sticky behavior

- **GIVEN** the Pearly page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the logo (tooth icon + wordmark) on the
  left, nav links Home / About / Treatment / Blog / Contact in the
  center, and a solid mint "Make Appointment" button on the right
- **AND** the header SHALL be transparent over the hero at the top of the
  page and stick with a solid background after scrolling

#### Scenario: Blog dropdown

- **GIVEN** the Pearly page is rendered
- **WHEN** the user opens the Blog nav item
- **THEN** a dropdown SHALL show Blog / Blog Details / Elements links

### Requirement: Hero

The system SHALL render a split hero with a headline, paragraph, a
3D-roll-style appointment button, a decorative tooth shape, and a photo.

#### Scenario: Hero content

- **GIVEN** the Pearly page is rendered
- **WHEN** the hero section is visible
- **THEN** the left column SHALL show the headline "A brighter dental care
  experienced" in dark navy Chivo, a short paragraph, and a square
  "Make an Appointment" button that is outlined navy at rest and fills
  mint on hover
- **AND** the right side SHALL show a dental-photo placeholder with a
  floating tooth-shaped decorative element

### Requirement: About / clinic info

The system SHALL render an about section with a photo panel, an outline
appointment button, and three clinic contact blocks.

#### Scenario: About content

- **GIVEN** the Pearly page is rendered
- **WHEN** the about section is visible
- **THEN** the section SHALL show a left photo panel (31% width, tall) and
  a right column headed "Best template for dental specialist" with a
  short teal underline bar, three paragraphs, and an outlined
  "Make an Appointment" button
- **AND** the right column SHALL also show three uppercase contact blocks:
  PHONE, WORKING TIME, and OUR CLINIC ADDRESS, each with a value

### Requirement: Treatments

The system SHALL render a treatments section titled "Our treatment keeps
you smile" with five distinct treatment cards.

#### Scenario: Treatment cards

- **GIVEN** the Pearly page is rendered
- **WHEN** the treatments section is visible
- **THEN** the section SHALL show the heading "Our treatment keeps you
  smile" and a row of five cards, each with a line icon and a distinct
  treatment title (e.g. Teeth Whitening, Teeth Cleaning, Quality
  Brackets, Modern Anesthetic, Dental Implants)
- **AND** each card SHALL have a 1px navy-tint border and centered content

### Requirement: Testimonials

The system SHALL render a testimonials carousel of bordered quote cards
with at least three distinct patient quotes.

#### Scenario: Testimonial carousel

- **GIVEN** the Pearly page is rendered
- **WHEN** the testimonials section is visible
- **THEN** the section SHALL show a carousel of quote cards, each with a
  quote icon, a patient quote, and the patient's name prefixed with a
  dash
- **AND** at least three distinct patients SHALL be represented
- **AND** each card SHALL have a 1px solid dark-navy border

### Requirement: Blog

The system SHALL render a "Latest blog" section with three blog cards,
each with a photo, title, excerpt, and Read More link.

#### Scenario: Blog cards

- **GIVEN** the Pearly page is rendered
- **WHEN** the blog section is visible
- **THEN** the section SHALL show the heading "Latest blog" and three
  cards with dental-appropriate article titles, an excerpt each, and a
  "Read More" link

### Requirement: Call-back CTA

The system SHALL render a "Get a Call Back" band with a mint overlay, a
headphone icon, name and phone inputs, and a solid royal-blue Submit
button.

#### Scenario: CTA band content

- **GIVEN** the Pearly page is rendered
- **WHEN** the CTA band is visible
- **THEN** the band SHALL show a headphone icon, the heading "Get a Call
  Back", the text "Leave your phone number, we will call back", a "Your
  name" input, a "Phone no." input, and a royal-blue square "Submit"
  button
- **AND** the band background SHALL be a photo with a light mint overlay

### Requirement: Footer

The system SHALL render a footer with logo + blurb, square social icons, a
map placeholder, three contact columns, and a copyright bar linking to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the Pearly page is rendered
- **WHEN** the footer is visible
- **THEN** the footer SHALL show the logo, a blurb, four square bordered
  social icons, a map placeholder panel, and uppercase columns PHONE /
  WORKING TIME / OUR CLINIC ADDRESS with values
- **AND** the bottom bar SHALL show the copyright line with a link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/pearly` scaffolded from the simplest existing app; package
      renamed to `@free-react-templates/pearly`; `public/CNAME` =
      `pearly.free.componentdock.com`; homepage
      `https://pearly.free.componentdock.com`.
- [ ] No "colorlib" string anywhere in `apps/pearly/*` (provenance only in
      this spec, TEMPLATES.md, and the PR).
- [ ] `@theme` tokens: `--color-mint: #39CCA4`, `--color-navy: #122C77`,
      `--color-royal: #2845BA`, `--color-mist: #F9FCFC`,
      `--color-soft: #F9F9FF`, `--color-body: #737B92`; font Chivo.
- [ ] Section order 1:1: Header → Hero → About → Treatments →
      Testimonials → Blog → Call-back CTA → Footer.
- [ ] Square buttons (radius 0) in all four styles: solid mint header CTA,
      outlined navy `.btn_01`, 3D-roll hero button (or faithful
      color-swap simplification), solid royal-blue Submit.
- [ ] Tests written first (TDD) mirroring every scenario; 100% line/
      function/branch/statement coverage.
- [ ] `bash scripts/verify-app.sh pearly` passes (typecheck + lint + knip + fallow + coverage + build).
- [ ] PR description includes: source (ColorLib Dental), preview URL,
      design tokens (mint `#39CCA4`, navy `#122C77`, royal `#2845BA`,
      Chivo, square buttons, mint-overlay CTA band), and what differs
      (wordmark, picsum placeholders, distinct treatments/testimonials/
      blog topics, Component Dock credit, map placeholder, no asset
      copying).
- [ ] Post-merge bookkeeping: mark BOTH TEMPLATES.md "Dental" rows (line
      ~572 and duplicate ~1505) `[x]` with the live URL and run
      `npm run readme:status`.
