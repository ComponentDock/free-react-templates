# Template: Upsurge (Hosting Template)

## Purpose

Upsurge is a single-page web-hosting landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ithost" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ithost" — web-hosting company template
  (source: https://colorlib.com/wp/template/ithost/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/ithost/
  (HTTP 200, ~27 KB HTML fetched; `css/style.css` ~28 KB parsed for tokens).
  Title tag: "IT Host - Hosting Template". Bootstrap 4 + owl-carousel +
  flaticon icon fonts.
- **Screenshot analyzed:** `ithost-free-template.jpg` (TEMPLATES.md,
  1200×946) — dark indigo/purple "deep space" gradient hero with stars and
  stylized pink/purple clouds at the horizon; a vector rocket (pink body,
  orange fins, cyan nose cone) flies diagonally up on the right. Large white
  bold headline "Unbeatable Offers" with a white paragraph and a magenta
  pill button "Get your plan" below. Header is transparent over the hero:
  rocket-icon logo "IT Host" left, white nav links (Home, About us,
  Services, News, Contact), magenta pill "Login / Register" right. Below the
  hero the page turns stark white with a centered section title ("THE BEST
  OUT THERE" eyebrow, "See our features" headline, tiny rocket icon above).
  The rest (features cards, domain search, skills/testimonials, pricing,
  banner, footer) is not visible in the screenshot and was taken from the
  preview DOM + CSS.
- **Section order (1:1):** Page loader (#preloder) → Header (`.header-section`,
  absolute over hero, transparent) → Hero (`.hero-section`, 835px, dark
  space bg image, rocket art right, white text + magenta CTA) → Features
  (`.features-section.spad`, white, 6 circular-icon cards) → Domain search
  (`.domain-search-section.spad.set-bg`, dark image bg, white title + search
  form) → Skills & testimonials (`.skills-and-testimonials-section.spad`,
  left: 5 animated progress bars; right: testimonial slider) → Pricing
  (`.pricing-section.spad.pt-0`, 3 plan cards, middle "gold-plan"
  highlighted) → Banner (`.banner-section.set-bg`, image bg, "Dedicated
  hosting solutions only $129.99/month" + CTA) → Footer top
  (`.footer-top-section`, bg #200545, 3 widgets: about+social / useful
  links / latest posts) → Footer (`.footer-section`, bg #1b043b, menu +
  copyright).
- **Design tokens extracted from the preview CSS:**
  - Font: **"Montserrat", sans-serif** everywhere (Google Fonts @font-face
    in the preview HTML; weights 400/500/600/700).
  - Brand accent: **#eb2b63** (hot magenta/pink) — `.site-btn` background,
    `.ft-icon` circle background, `.user-panel` pill, `.gold-plan
.pricing-title` background, nav link hover, testimonial author span,
    progress-bar fills.
  - Deep indigo / near-black purple pair: **#2e1779** and **#0a0228** —
    `.site-btn.sb-gradient` linear-gradient(to right, #2e1779 0%,
    #0a0228 100%) (used for accordion/tabs panel links); the same family
    colors the hero/banner/domain-search photo backgrounds.
  - Pricing-title gradient: linear-gradient(to right, **#7246b3** 0%,
    **#431483** 100%); middle plan title is flat **#eb2b63** with
    `box-shadow: inset 0 0 0 2px #eb2b63, 0 32px 43px rgba(0,0,0,0.35)`.
  - Headings: **#1c1c1c** (h2 36px/600, h3 30px, h4 24px, h6 16px);
    hero h2 90px/600 white; section-title h2 48px/700; pricing price h2
    60px/400 **#585858**.
  - Body grays: **#585858** (pricing body text), **#8e8e8e** (section-title
    eyebrow, 12px uppercase letter-spacing 2px), #000 (progress labels),
    #acacac.
  - Light section accent: **#eef6f9** — progress-bar track (8px tall,
    radius 15px) and `.ti-content` testimonial quote bubble (radius 15px,
    padding 48px 35px 45px 38px).
  - Footers: **#200545** (footer-top) and **#1b043b** (footer-section);
    footer text white with opacity 0.25–0.40 (links 0.26, copyright 0.25,
    about text 0.25, latest-post titles 0.25, banner p 0.40).
  - Buttons `.site-btn`: min-width 186px, padding 17px 25px,
    border-radius **14px**, background #eb2b63, white 14px/400 text,
    line-height 1, no border, text-align center; full-width in pricing
    (`.pricing-body .site-btn` width 100%, padding 22px); domain-search
    button height 59px next to a white 59px input (radius 14px, padding
    0 31px).
  - Section rhythm: `.spad` = 105px top/bottom padding; `.section-title`
    margin-bottom 80px (130px inside features); centered.
  - `.ft-icon`: 87×87px circle, bg #eb2b63, white 43px icon, radius 50%,
    margin-bottom 40px.
  - Progress bars: 5 items — Illustrator 80 (#eb2b63), Photoshop 90
    (#eb2bae), SEO 80 (#d22beb), E-commerce 60 (#972beb), HTML 70
    (#732beb); 8px track #eef6f9 radius 15px.
  - Header `.user-panel`: float right, bg #eb2b63, radius 14px, padding
    12px 19px, 14px white, margin 15px 70px 0 30px; `.main-menu li a`:
    16px white, margin-left 50px, hover #eb2b63; `.nav-switch` bars icon
    (mobile).
  - Testimonial: `.ti-author h6` 700 black; `.ti-author span` "Client" —
    #eb2b63 700; author pic is a round photo.
- **Recreation decisions:** dark photo backgrounds (hero space, domain
  search, banner) → deep indigo→near-black gradient
  (`linear-gradient(135deg, #2e1779, #0a0228)`) with optional seeded picsum
  overlay, no copied images; rocket art → large lucide `Rocket` icon (hero
  right + logo + section-title icons); feature icons → lucide (Globe,
  Server, Smartphone, Folder, LifeBuoy/Headset, Megaphone); flaticon is
  NOT available — lucide only; brand icons (pinterest/facebook/twitter/
  dribbble/behance) → inline SVG paths (lucide removed brand icons);
  testimonial photos + latest-post thumbs → seeded picsum
  (`picsum.photos/seed/upsurge-<n>/<w>/<h>`); Montserrat via Google Fonts
  `<link>`; #eb2b63/#2e1779/#0a0228/#7246b3/#431483/#eef6f9/#200545/
  #1b043b in `@theme`; no assets copied.

Upsurge lives in `apps/upsurge` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a header that sits over the hero with the site name
"Upsurge", a Login / Register pill, and anchor links to the page sections.

#### Scenario: Header content

- **GIVEN** the Upsurge page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show a rocket icon + "Upsurge" logo on the left
- **AND** the header SHALL show a magenta pill labeled "Login / Register"
  on the right
- **AND** the header SHALL show links for Home, About us, Services, News,
  and Contact

#### Scenario: Header styling

- **GIVEN** the header is rendered
- **WHEN** a nav link is hovered
- **THEN** the link text SHALL turn magenta (#eb2b63)
- **AND** the header SHALL be transparent over the dark hero, with the
  Login / Register pill in magenta (#eb2b63) with a 14px radius

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user opens the mobile menu
- **THEN** the nav links SHALL be reachable via a hamburger switch

### Requirement: Hero section

The system SHALL render a full-height dark hero with a headline, supporting
copy, a call-to-action button, and a rocket graphic.

#### Scenario: Hero content

- **GIVEN** the Upsurge page is rendered
- **WHEN** the hero section is in view
- **THEN** the hero SHALL show the headline "Unbeatable Offers" in white,
  Montserrat 600
- **AND** the hero SHALL show a short supporting paragraph and a magenta
  pill button labeled "Get your plan"
- **AND** the hero SHALL show a large rocket graphic on the right side

#### Scenario: Hero background

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL use a deep indigo-to-near-black gradient
  (#2e1779 → #0a0228) background matching the dark "space" look of the
  original photo background

### Requirement: Features section

The system SHALL render a white section with a centered section title and a
3-column grid of six feature cards, each with a circular magenta icon.

#### Scenario: Section title

- **GIVEN** the features section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show a small rocket icon, an uppercase grey
  eyebrow "The best out there", and the headline "See our features"

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **WHEN** the grid is in view
- **THEN** the grid SHALL render six cards in a 3-column layout (stacking
  on mobile): Buy your Domain, Cloud Database, SSD-Only, Smart Contacts,
  Free Support, and Viral Marketing
- **AND** each card SHALL show a circular 87px magenta (#eb2b63) icon
  medallion with a white icon, a heading, and a short paragraph

### Requirement: Domain search section

The system SHALL render a dark section with a white section title and a
domain-search form with an input and a search button.

#### Scenario: Section content

- **GIVEN** the domain search section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the white title "See our features" with
  the uppercase grey eyebrow "The best out there" (matching the original's
  placeholder copy style)
- **AND** the section SHALL show a white rounded input (placeholder "Enter
  your website's name") with a magenta "Search" button of equal height
- **AND** a short supporting paragraph SHALL appear under the form

#### Scenario: Form submit

- **GIVEN** the domain search form is rendered
- **WHEN** the user submits a domain name
- **THEN** the form SHALL prevent default navigation and keep the page on
  the landing view (no backend call is made)

### Requirement: Skills & testimonials section

The system SHALL render a two-column section with animated skill progress
bars on the left and a testimonial slider on the right.

#### Scenario: Skill bars

- **GIVEN** the skills column is rendered
- **WHEN** the page loads
- **THEN** it SHALL show five labeled progress bars — Illustrator 80,
  Photoshop 90, SEO 80, E-commerce 60, HTML 70 — on light (#eef6f9) rounded
  tracks
- **AND** each bar SHALL fill to its percentage in its own color
  (#eb2b63, #eb2bae, #d22beb, #972beb, #732beb)

#### Scenario: Testimonial slider

- **GIVEN** the testimonials column is rendered
- **WHEN** the page loads
- **THEN** it SHALL show a testimonial card with a light (#eef6f9) rounded
  quote bubble, a round author photo, the author name (e.g. "Michael
  Smith"), and a magenta "Client" role label
- **AND** controls SHALL allow cycling between the testimonial slides

### Requirement: Pricing section

The system SHALL render three pricing plan cards with a highlighted middle
"gold" plan.

#### Scenario: Plan cards

- **GIVEN** the pricing section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show its centered section title and three
  cards: Basic Plan, STAR Plan, and VIP Plan
- **AND** each card SHALL show a gradient title bar (white uppercase plan
  name), a large $9/Month price, a list of five plan features, and a
  full-width "Get Plan" button

#### Scenario: Gold plan highlight

- **GIVEN** the pricing section is rendered
- **WHEN** the middle card (STAR Plan) is in view
- **THEN** its title bar SHALL be flat magenta (#eb2b63) instead of the
  purple gradient
- **AND** its body SHALL show a magenta inset ring and a soft drop shadow

### Requirement: Banner section

The system SHALL render a dark call-to-action band with a headline and a
button.

#### Scenario: Banner content

- **GIVEN** the banner section is rendered
- **WHEN** the page loads
- **THEN** the banner SHALL show the headline "Dedicated hosting solutions
  only $129.99/month" with a short supporting paragraph
- **AND** the banner SHALL show a magenta "Get Started" button aligned to
  the right
- **AND** the banner SHALL use the same dark indigo-to-near-black gradient
  treatment as the hero

### Requirement: Footer widgets

The system SHALL render a dark footer-top band with three widgets: about +
social, useful links, and latest posts.

#### Scenario: Widget layout

- **GIVEN** the footer-top band is rendered
- **WHEN** the page loads
- **THEN** it SHALL show the logo with an about paragraph and five social
  icons (Pinterest, Facebook, Twitter, Dribbble, Behance)
- **AND** it SHALL show a "Useful Links" widget with hosting-related links
  in two columns
- **AND** it SHALL show a "Latest Posts" widget with three entries (thumb,
  title, date)
- **AND** the band background SHALL be #200545 with white text at reduced
  opacity

### Requirement: Footer

The system SHALL render a bottom footer bar with a menu and copyright line.

#### Scenario: Footer content

- **GIVEN** the Upsurge page is rendered
- **WHEN** the footer is in view
- **THEN** the footer SHALL show the five site links (Home, About us,
  Services, News, Contact) at low opacity
- **AND** the footer SHALL show a copyright line with an original
  attribution (ColorLib credit replaced)
- **AND** the footer background SHALL be #1b043b

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Upsurge app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections (Hero, Features, Domain search, Skills & testimonials, Pricing,
  Banner, Footer widgets) in the main landmark, and the Footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Upsurge — Hosting Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/upsurge` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- upsurge` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#eb2b63, #2e1779, #0a0228, #7246b3, #431483, #eef6f9, #200545, #1b043b, Montserrat) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `upsurge-<n>`, Google Fonts links, lucide icons + inline SVG brand icons only)
