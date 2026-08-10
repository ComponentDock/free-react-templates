# Template: Axiom (Creative Agency Landing)

## Purpose

Axiom is a single-page creative-agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Creative Agency 2 2" website template (see TEMPLATES.md,
Bootstrap category, line 369), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a clean, modern, minimalist design-and-development agency
landing with a blue (`#00A7FF`) + yellow (`#FFCB00`) accent duo on white and
black: a transparent header over a white hero (blue-square logo, nav links
Home / About / Work / Services / Pages / Blog / Contact, and a yellow
underlined "Say Hi" link); a large left-aligned headline "We are Design and
Development Agency based on California" with "Design and Development"
underlined and a "Brows Our Products" (sic — original typo, keep 1:1) CTA
underlined in yellow, plus two floating geometric shapes (soft purple
circle, mint triangle); a full-width video band offset 20% from the left
(office photo with a sticky-note wall, 120px `#0181F5` circular play
button); a "Projects / Our Works" 2×2 work grid (Social App, iOS Design
System, Product Packaging, Uber App Design — hover overlay `rgba(0,167,255,
0.2)`, yellow 2×125px heading bars) with a "More Products" button; a black
"Services" section with 3 bordered icon cards (UX Research, UI Design,
Development); a brand-logo carousel; a split "We Help you to Build your
Product and Brand For Big or Small" band with a "Visit Our Profile" yellow
underlined link; a "Quick Fact" counter row (220 Amazing Products, 7930
Happy Clients, 67 Support Daily Support — `#615CFD` numbers); an Instagram
strip (5 tiles with blue overlay) capped by a full-width `#00A7FF` "Visit
Our Work" band; and a black footer with Follow Us / Links / Address columns
and a copyright bar. Typography is Poppins (body 16px; section titles 46px
weight 600). Axiom recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Creative Agency 2 2" — Free Creative & Marketing
  Agency Website Template (source:
  https://colorlib.com/wp/template/creative-agency-2-2/). Listed in
  TEMPLATES.md under the Bootstrap category (line 369; dup rows at 962 and
  1458 — dup-row trap, do not re-claim). Do NOT confuse with "Creative
  Agency 2" (line 368, prepped as Maestro).
- **Live preview REACHABLE:** the direct URL
  `https://preview.colorlib.com/theme/creative-agency-2-2/` 404s — the
  portal serves this theme at `https://preview.colorlib.com/theme/creativeagency2/`
  (discovered via the portal iframe from
  `https://preview.colorlib.com/#creative-agency-2-2`, the "Live Preview"
  target on the ColorLib template page). DOM fetched
  (`/tmp/creative-agency-2-2-ref/ca2.html`, 21.8 KB, HTTP 200); stylesheet
  `https://preview.colorlib.com/theme/creativeagency2/css/style.css`
  (55.4 KB) extracted for tokens; screenshot
  (`creativeagency2-free-template.jpg`, 1200×946, TEMPLATES.md) reviewed
  visually in the browser; live computed styles verified via the browser.
  All references verified live. NOTE: `style.css` is a shared multi-theme
  sheet — token extraction below was cross-checked against live computed
  styles for this theme's selectors.
- **Section order (1:1 from the preview DOM):**
  1. Header `header.header-area` > `div.main-header-area` (transparent over
     the white page; `position: static` on the live page) —
     `div.logo-img` (image logo `img/logo.png` — blue square with a white
     "C" — recreate as text wordmark + square icon) + `div.main-menu.d-none.d-lg-block`
     nav links Home, About, Work, Services, Pages (dropdown), Blog, Contact
     (`color: #1F1F1F; font-size: 16px; text-transform: capitalize; padding:
34px 0`; hover/active underline `#00A7FF`, 4px) + `div.log_chat_area`
     (right-aligned) with `a.say_hi` "Say Hi" (16px `#1F1F1F`; 3px
     `#FFCB00` underline via `::before`) + `div.mobile_menu` (mobile
     hamburger).
  2. Hero `div.agency_heading` (white bg; padding-top 255px, padding-bottom
     160px): `div.agency_text` → `h3` "We are Design and Development Agency
     based on California" (50px, weight 500, line-height 62px, `#1F1F1F`,
     margin-bottom 53px; `span` "Design and Development" underlined) +
     `a` CTA "Brows Our Products" (sic — original typo, keep 1:1) with a
     `#FFCB00` underline; `div.animated_shape` → `div.anim_1` (soft purple
     circle, absolute top 35% left 10%) + `div.anim_2` (mint triangle,
     absolute bottom 30% right 18%).
  3. Video `div.video_area` (desktop `margin-left: 20%` — offset band):
     `div.video_banner.video_bg_1` (bg image `img/about/video.png` — office
     scene with a sticky-note wall; cover; padding 340px 0) → centered
     `a` play button: 120px circle, `background: #0181F5`, play icon.
  4. Works `div.works_area` (white): `div.section_title` (h1 "Projects" +
     h3 "Our Works"); 2×2 grid of `div.single_work` (`col-xl-5`; second row
     `offset-xl-2` + `.spacec-top` padding-top 80px) × 4: Social App, iOS
     Design System / Product Packaging, Uber App Design. Each card:
     `div.work_thumb` img + `div.work_hover` (absolute cover,
     `background: rgba(0,167,255,0.2)`) with `div.work_inner` link (plus
     icon; hover bg `#00A7FF`, white, 1px transparent border);
     `div.work_heading` → `h3` (26px, weight 400, `#1F1F1F`, padding
     29px 0 20px 68px) with `::before` 2px × 125px vertical `#FFCB00` bar
     (left 36px). Below: `div.more_products.text-center` → "More Products"
     button.
  5. Services `div.service_area.black_bg` (`#000` bg; padding-top 200px,
     padding-bottom 170px): `div.section_title.white-color` (h1 "Services"
     - h3 "We're a full-service UX design agency, We build digital products
       and brands", white); 3 × `div.single_service.text-center`
       (`col-xl-4`; border 1px solid `#333333`, padding 45px 40px 65px;
       hover border `#808080`): `div.icon` + `h3` (26px, white, weight 500,
       margin-top 24px, margin-bottom 15px) UX Research / UI Design /
       Development + `p` (16px/28px, white).
  6. Brands `div.brand_area` (padding-top 170px): `div.brand_active.owl-carousel`
     → 6 × `div.single_brand` logo images (grayscale).
  7. Build `div.build_product` (padding-top 200px): `div.row.align-items-center`
     → left `div.build_img.col-xl-6` (img, width 100%) + right
     `div.product_right.col-xl-5.offset-xl-1` → `div.section_title` h3 "We
     Help you to Build your Product and Brand For Big or Small" + `p`
     (16px, `#727272`, line-height 28px, margin-top 20px, margin-bottom
     39px) + `a` "Visit Our Profile" (`#FFCB00` underline).
  8. Counters `div.counter_area` (padding-top 200px, padding-bottom 170px):
     `div.section_title` h1 "Quick Fact"; 3 × `div.single_counter.text-center`
     (`col-xl-4`): `h3` 50px / weight 600 / `#615CFD` — "220", "7930",
     "67" + `span` (16px, `#1F1F1F`) "Amazing Products", "Happy Clients",
     "Support Daily Support".
  9. Instagram `div.instragram_area` (block, overflow hidden): 5 ×
     `div.single_instagram` (width 20%, float left, relative): img +
     `div.ovrelay` (cover, `rgba(0,167,255,0.2)`) with centered white
     link (instagram icon); then `div.Visit_Work.text-center` band
     (`background: #00A7FF`, padding 40px 0): `a` 26px / weight 500 /
     white "Visit Our Work".
  10. Footer `footer.footer` (`#000` bg): `div.footer_top` → 3 ×
      `div.footer_widget` (`col-xl-4`): "Follow Us" (5 social links —
      Facebook, Twitter, Instagram, Youtube, Pinterest; `a` 16px `#fff`,
      line-height 42px, hover `#00A7FF`), "Links" (Services, Work, About),
      "Address" (300, A-block, Green lane, USA; `support@creative.com`;
      `+10 672 367 3789`); `div.copy-right_text` → `div.footer_border`
      (border-top 1px solid `rgba(255,255,255,0.2)`, padding-bottom 30px) →
      `p.copy_right` (16px, `#919191`): "© <year> All rights reserved |
      This template is made with ♥ by Colorlib".
- **Visual design (screenshot):** minimalist, corporate, design-forward
  agency landing. White header bar with a bright-blue square logo (white
  letter "C"), centered nav (Home active = blue underline), and a "Say Hi"
  link with a yellow underline. Hero: white background, left-aligned large
  dark headline with "Design and Development" underlined, yellow-underlined
  CTA "Brows Our Products", and two soft floating geometric shapes (a
  lavender circle and a mint triangle). Below the hero: a wide photo band
  (three people at a monitor, wall of colorful sticky notes) with a large
  blue circular play button. Palette: blue (`#00A7FF`-family) + yellow
  (`#FFCB00`) accents on white/black neutrals; Poppins sans-serif; generous
  whitespace and airy section rhythm.
- **Design tokens (extracted from style.css + verified live):**
  - Font: **Poppins**, sans-serif (Google Fonts); body 16px weight 400,
    line-height 28px (service `p`, product_right `p`); headings weight
    500–600, `#1F1F1F`; section titles 46px / 600 / line-height 58px
    (margin-bottom 85px), white variant `.white-color` on black.
  - Accent blue `#00A7FF`: work-hover overlay `rgba(0,167,255,0.2)` (works
    - instagram), "Visit Our Work" band bg, nav link underline (4px),
      footer link hover, work-hover button bg.
  - Play/logo blue `#0181F5` (video play circle); `#0F88F5` appears as a
    header variant bg in the shared CSS — live header is transparent, do
    not force the blue header.
  - Yellow `#FFCB00`: "Say Hi" underline (3px), hero CTA underline, work
    heading vertical bar (2px × 125px).
  - Counter numbers `#615CFD` (50px/600); labels `#1F1F1F` 16px.
  - Darks: `#000` (service-area bg, footer bg), `#1F1F1F` (headings, nav),
    card border `#333333` → hover `#808080`.
  - Lights: `#fff` (page bg, section bgs, service/footer text), body grey
    `#727272` (product p), `#919191` (copyright), `#C7C7C7` (footer widget
    p), `#f9f9ff` (shared-sheet section bg — do not rely on it here).
  - Buttons/shapes: play button 120px circle `#0181F5`; underline CTAs
    3px `#FFCB00`; "Visit Our Work" band `#00A7FF`, padding 40px 0, link
    26px/500 white; service cards 1px `#333` border, padding 45px 40px
    65px; work heading bar 2px × 125px at left 36px.
  - Section rhythm: hero pt 255 / pb 160; video padding 340px 0 +
    `margin-left: 20%` (desktop); works second row offset + 80px top gap;
    services pt 200 / pb 170; brands pt 170; build pt 200; counters pt 200
    / pb 170; instagram tiles 20% width × 5.
- **Recreation name:** Axiom (NEW name, differs from ColorLib "Creative
  Agency 2 2"). App folder `apps/axiom`, package
  `@free-react-templates/axiom`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/axiom-<n>/<w>/<h>`: work cards 600×520 ×4, video
  band 1600×900, build img 800×600, instagram 400×400 ×5, brand logos —
  simple text/icon marks ×6); lucide-react icons (Play, Plus, Instagram;
  brand icons Facebook/Twitter/Youtube/Pinterest as inline SVG — lucide has
  no brand icons); Poppins via Google Fonts; owl brand carousel → simple
  grid or auto-scrolling row (document the choice); the video play button
  → decorative link or click-to-open modal (no video asset — document);
  keep the original "Brows Our Products" copy 1:1 (typo preserved, fidelity
  mandate); no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Requirements

### Requirement: Header and navigation

The system SHALL render a transparent header with a logo, nav links, a
Pages dropdown, and a "Say Hi" link.

#### Scenario: Header content

- **GIVEN** the Axiom page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site logo on the left (text wordmark
  with a square icon)
- **AND** the header SHALL show nav links: Home, About, Work, Services,
  Pages (with a dropdown), Blog, Contact
- **AND** the header SHALL show a "Say Hi" link on the right with a 3px
  yellow underline

#### Scenario: Nav link style

- **GIVEN** the header is rendered
- **WHEN** a nav link is inspected
- **THEN** nav links SHALL be 16px, capitalized, `#1F1F1F`, with 34px
  vertical padding
- **AND** the active/hover link SHALL show a `#00A7FF` underline

#### Scenario: Header over the page

- **GIVEN** the page is rendered at desktop width
- **WHEN** the header is inspected
- **THEN** the header background SHALL be transparent over the white hero

### Requirement: Hero section

The system SHALL render a white hero with a large headline, an underlined
CTA, and two floating decorative shapes.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "We are Design and Development Agency
  based on California" in `#1F1F1F`, 50px, weight 500
- **AND** the words "Design and Development" SHALL be underlined
- **AND** it SHALL show a "Brows Our Products" CTA link (original copy,
  typo preserved) with a yellow `#FFCB00` underline

#### Scenario: Hero decorations

- **GIVEN** the hero is rendered
- **WHEN** the hero background is inspected
- **THEN** it SHALL show a soft purple circle shape on the upper-left area
- **AND** it SHALL show a mint triangle shape on the lower-right area

### Requirement: Video banner

The system SHALL render a full-width video band offset from the left with a
circular play button.

#### Scenario: Video band content

- **GIVEN** the page is rendered
- **WHEN** the video band is displayed
- **THEN** it SHALL use a cover background image (office photo) with tall
  vertical padding
- **AND** it SHALL be offset from the left edge (about 20% margin) at
  desktop width
- **AND** it SHALL show a centered circular play button (`#0181F5`, 120px)
  with a play icon

### Requirement: Works section

The system SHALL render a "Projects / Our Works" section with a 2×2 grid of
work cards with hover overlays and a "More Products" button.

#### Scenario: Works content

- **GIVEN** the page is rendered
- **WHEN** the works section is displayed
- **THEN** it SHALL show the section title "Projects" with the heading "Our
  Works"
- **AND** it SHALL show four work cards in a 2×2 grid: Social App, iOS
  Design System, Product Packaging, Uber App Design
- **AND** each card SHALL show an image, a heading (26px, weight 400) with
  a 2px × 125px yellow vertical bar, and a hover overlay
  `rgba(0,167,255,0.2)` with a plus link
- **AND** the second row SHALL be offset from the first (staggered 2×2
  layout) with an ~80px top gap
- **AND** a centered "More Products" button SHALL appear below the grid

#### Scenario: Work card hover

- **GIVEN** a work card is rendered
- **WHEN** the user hovers over it
- **THEN** the blue overlay and plus link SHALL appear over the image

### Requirement: Services section

The system SHALL render a black services section with a white title and
three bordered icon cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL use the black `#000` background
- **AND** it SHALL show the heading "Services" with the subheading "We're a
  full-service UX design agency, We build digital products and brands" in
  white
- **AND** it SHALL show three cards: UX Research, UI Design, Development,
  each with an icon, a white 26px title, and a white 16px description
- **AND** each card SHALL have a 1px `#333333` border (hover `#808080`)
  and generous padding (45px 40px 65px)

### Requirement: Brands carousel

The system SHALL render a brand-logo strip below the services section.

#### Scenario: Brands content

- **GIVEN** the page is rendered
- **WHEN** the brands section is displayed
- **THEN** it SHALL show a row of grayscale brand logos (6 items)

### Requirement: Build product section

The system SHALL render a split section with an image on the left and a
headline, description, and link on the right.

#### Scenario: Build content

- **GIVEN** the page is rendered
- **WHEN** the build section is displayed
- **THEN** it SHALL show an image on the left
- **AND** it SHALL show the heading "We Help you to Build your Product and
  Brand For Big or Small" on the right
- **AND** it SHALL show a one-paragraph description in `#727272` 16px
- **AND** it SHALL show a "Visit Our Profile" link with a yellow underline

### Requirement: Counters section

The system SHALL render a "Quick Fact" section with three statistics.

#### Scenario: Counters content

- **GIVEN** the page is rendered
- **WHEN** the counters section is displayed
- **THEN** it SHALL show the heading "Quick Fact"
- **AND** it SHALL show three statistics with `#615CFD` 50px weight-600
  numbers: 220 (Amazing Products), 7930 (Happy Clients), 67 (Support Daily
  Support)
- **AND** each statistic SHALL have a 16px `#1F1F1F` label

### Requirement: Instagram strip

The system SHALL render an Instagram tile strip with overlays and a
full-width "Visit Our Work" band.

#### Scenario: Instagram content

- **GIVEN** the page is rendered
- **WHEN** the instagram section is displayed
- **THEN** it SHALL show five square image tiles (each 20% width) with a
  blue `rgba(0,167,255,0.2)` overlay and a centered white icon link on
  hover
- **AND** below the tiles it SHALL show a full-width `#00A7FF` band with a
  white 26px weight-500 "Visit Our Work" link

### Requirement: Footer

The system SHALL render a black footer with three widget columns and a
copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL use the black `#000` background
- **AND** it SHALL show a "Follow Us" column with social links: Facebook,
  Twitter, Instagram, Youtube, Pinterest
- **AND** it SHALL show a "Links" column with Services, Work, About
- **AND** it SHALL show an "Address" column with the address, email
  `support@creative.com`, and phone `+10 672 367 3789`
- **AND** it SHALL show a copyright line "© <year> All rights reserved |
  This template is made with ♥ by Colorlib" in `#919191`, separated by a
  `rgba(255,255,255,0.2)` top border

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Axiom app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Axiom — Creative Agency"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/axiom`
      (`scripts/verify-app.sh axiom` in FAST_MODE; full `npm run gate`
      in CI).
- [ ] Visual fidelity: transparent header (logo + 7 nav links + Pages
      dropdown + yellow-underlined "Say Hi"), white hero (50px headline
      with underlined "Design and Development", "Brows Our Products" CTA
      typo 1:1, purple circle + mint triangle shapes), video band (20%
      left offset, cover photo, 120px `#0181F5` play circle), works (2×2
      staggered grid, blue hover overlays, 2×125px yellow bars, "More
      Products" button), services (`#000` + 3 `#333`-bordered icon cards),
      brands (6 grayscale logos), build (split image + "Visit Our
      Profile"), counters ("Quick Fact", `#615CFD` numbers), instagram (5
      tiles + `#00A7FF` "Visit Our Work" band), `#000` footer (Follow Us /
      Links / Address + copyright bar) match the ColorLib "Creative Agency
      2 2" preview 1:1.
- [ ] Design tokens in `@theme`: accent `#00A7FF`, play blue `#0181F5`,
      yellow `#FFCB00`, counter `#615CFD`, black `#000`, ink `#1F1F1F`,
      body grey `#727272`, copyright `#919191`; Poppins loaded via Google
      Fonts.
- [ ] Placeholder images use `picsum.photos/seed/axiom-<n>/<w>/<h>`; brand
      icons are inline SVG (no lucide brand icons); no ColorLib assets
      copied.
- [ ] PR description states source template (ColorLib "Creative Agency 2
      2"), preview URL (`https://preview.colorlib.com/theme/creativeagency2/`
      — note the slug difference; the direct
      `creative-agency-2-2` URL 404s), design tokens, and what differs
      (name, placeholders, carousel/grid simplification, video play →
      decorative/modal, no assets copied).
