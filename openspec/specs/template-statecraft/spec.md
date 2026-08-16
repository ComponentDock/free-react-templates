# Template: Statecraft (Consulting Template)

## Purpose

Statecraft is a single-page consulting firm template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Consul" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Consul" — consulting / business advisory firm
  landing page, "Consulting | Template" (source:
  https://colorlib.com/wp/template/consul/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/consul/
  (HTTP 200, ~31 KB HTML fetched; `assets/css/style.css` ~98 KB parsed —
  full read, token extraction below).
- **Screenshot analyzed:** `consul-colorlib-template.jpg` (1200x946)
  reviewed visually via browser — corporate consulting site. Dark hero:
  **dark olive-green** header + hero background with a faint oversized
  script watermark "Consul" behind the headline; left-aligned white serif
  headline "Unlocking the **potential** of those who advance the world"
  (the word "potential" highlighted in **mustard yellow**), pale white
  24px subtext, an **outlined yellow "Explore More"** button; right side a
  photo of a bearded man at a desk with a laptop (hero-man.jpg). Navbar:
  script/cursive "Consul" wordmark left, centered links HOME / ABOUT /
  SERVICES / CASES / BLOG / CONTACT, right a **solid yellow rectangular
  "Make an Appointment"** CTA. Below the fold: **cream "Who We Are"**
  section (uppercase serif label, long headline, right-column paragraph
  "Objectivity since 2013…", two office thumbnails bottom-left), then a
  **yellow services band** with cream cards. Sections below (Why Choose
  Us, Top Stories cases, testimonials, blog, footer) were extracted from
  the DOM and CSS, not the screenshot (screenshot cuts off after Who We
  Are).
- **Section order (1:1, from the DOM of the home page):**
  1. Navbar (over the hero, dark): left brand "Consul" wordmark; links
     HOME / ABOUT / SERVICES / CASES / BLOG / BLOG DETAILS / ELEMENT /
     CONTACT; right CTA button "Make an Appointment". Mobile: hamburger
     (slicknav) collapsing to a stacked menu.
  2. Hero (`section.slider-area`, **static single slide** — the live DOM
     contains exactly one `slider-bg1` block; the prep draft's "multi-slide
     carousel" was wrong, verified against the fetched preview): split
     layout — left `div.hero-caption`: h1 60px white weight 700 with a
     `<span>` highlighted in yellow `#F3D955` ("potential"), p 24px
     `#DADFD4`, `.border-btn.hero-btn` "Explore More" (outlined yellow,
     padding 19px 39px); right `div.hero-man-img` photo
     (`hero/hero-man.jpg`, hidden on <lg). Dark overlay: `.overlay2::before`
     — `#2E2200` at 0.5 opacity over the `#51643D` olive slider background;
     a large script watermark of the brand (`.section-tittle3` h2, Shippori
     Mincho 220px transparent fill with white stroke) sits behind the
     caption. Only one headline exists in the DOM: "Unlocking the potential
     of those who advance the world".
  3. About / Who We Are (`section.about-area.section-bg.top-padding`,
     cream `#EBE5D0`): `div.section-tittle` — `<span>` label "Who We
     Are" (uppercase, serif), h2 46px "We increase our clients' topline
     by optimizing their growth strategies, marketing, pricing and
     sales."; right column paragraph ("Objectivity since 2013…", trust /
     retention copy); bottom-left two thumbnails
     (`gallery/about1.jpg`, `gallery/about2.jpg`).
  4. Services band (`section.services-area1`, **yellow `#F3D955` bg**):
     section-tittle label "Services" + headline "The gain insights,
     advice and tools to achieve your mission-critical priorities";
     `row.offer-active` of 3 `.properties` cards (image on top
     `gallery/services1..3.jpg`, no icon): `properties__caption` — h3
     serif 26px "Business" + trust blurb + `.btn_2` "Learn More" (ink
     outline square button, 1px solid #1A1A1A).
  5. About 2 / Why Choose Us (`section.about-area1.section-padding`,
     **cream `#EBE5D0`** — CSS `.about-area1{background:#EBE5D0}`): three
     `.single-about` blocks (h3 title + blurb: "Tons of pre-made
     sections", "Complete CMS integration", "Stellar after-sales
     support") with an image (`gallery/about2.jpg`); the prep draft's
     "white/light" was wrong.
  6. Cases / Top Stories (`section.services-area.bottom-padding.fix`):
     section-tittle h2 "Top Stories" + "More Cases" link; 3 cards
     (`gallery/case1..3.jpg`) each with image, title "Business
     Strategy", and the trust blurb; read-more link.
  7. Testimonials (`section.testimonial-area`, cream `#EBE5D0`,
     `h1-testimonial-active` dot carousel): 2+ slides, each
     `.single-testimonial.text-center`: quote "Life is very short and
     what we have to do must be done in the now. Combine sections from
     Olla's vast component library and create beautiful." — name
     "Manuel Labor" (`.testimonial-founder`), role meta.
  8. Blog / Latest Blog (`section.home-blog.section-padding`, cream
     `#EBE5D0`): section-tittle label "Latest Blog" + h2 "Tips & Tricks";
     2–3 `.single-blogs` cards (`gallery/blog1.jpg`, `gallery/blog2.jpg`):
     `div.blog-img` + `div.blog-caption` (meta, h3 title, excerpt,
     read-more).
  9. Footer (`footer.footer-wrapper.gray-bg` — CSS `.footer-wrapper`
     background `#F3D955` yellow; HTML also carries `gray-bg #F1FBFF` —
     implementer to confirm visually, CSS order favors the yellow
     rule): 3 columns — "Quick Links" (Work, Services, Products, Tips &
     Tricks) · "Services" (Strategy & Transformation, Growth &
     Innovation, Leadership & Change, Digitalisation & IT, Operations &
     Efficiency) · "Newsletter" ("Subscribe newsletter to get updates." +
     `footer-form` email input + submit). Bottom bar
     `footer-bottom-area`: "Copyright © All rights reserved" line
     (monorepo credit, not ColorLib).
- **Design tokens extracted from the preview CSS (`assets/css/style.css`):**
  - Primary brand **yellow `#F3D955`** (`.theme-bg`, `.theme-color`,
    `.btn` bg, `.border-btn` color/border + hover fill, `.services-area1`
    bg, `.footer-wrapper` bg, `#scrollUp` bg, hero h1 `<span>` highlight,
    `.section-tittle3` link color).
  - Secondary accent **coral `#F15B43`** (`.genric-btn.primary` bg,
    `.contact-info` link hover, `b/sup/sub/u/del` color) — sparing use.
  - Text: headings **ink `#1A1A1A`**; body/paragraphs **olive `#36402B`**
    (16px, line-height 1.6); hero p pale sage `#DADFD4`; muted `#999999`.
  - Surfaces: cream `#EBE5D0` (`.about-area`, `.testimonial-area`,
    `.home-blog`, `.single-services` cards); peach `#FCF2EB`
    (`.section-bg`); pale blue-gray `#F1FBFF` (`.gray-bg`); lavender
    white `#F9F9FF`.
  - Fonts (Google Fonts via `@import` — never copy font files): body
    **"Hind", sans-serif** 16px (300–700); section labels (`.section-tittle
    > span`) **"Shippori Mincho", serif** 16px uppercase; headings Hind
500, `#1A1A1A`; `.section-tittle h2`46px weight 700 line-height 1.2;`.section-tittle p` 20px line-height 1.5.
  - Buttons: `.btn` — bg `#F3D955`, color #fff, font-size 16px,
    padding 30px 35px (tall), **border-radius 0px** (square); `.btn.slider-btn`
    has an orange gradient rule (`#f14437 → #ed5b0d`) — verify which
    variant renders in the hero; `.border-btn` — 1px solid `#F3D955`,
    color `#F3D955`, padding 16px 28px, font-size 18px, radius 0, hover
    fills yellow (`.border-btn::before` bg `#F3D955`).
  - Hero: overlay `.overlay2::before` bg `#2E2200` opacity 0.5; h1 60px
    (→51/40/31px responsive) weight 700 #fff, span `#F3D955`; p 24px
    `#DADFD4`.
  - Cards: `.single-services` bg `#EBE5D0`, padding 33px 46px 16px 32px.
  - Newsletter form: input height 60px, transparent bg, 1px solid
    `#1A1A1A`, border-radius 5px, color `#1A1A1A`.
  - Section rhythm: `.section-padding` 100px top/bottom (70px mobile);
    `.top-padding` 100px; `.testimonial-padding` 96px/81px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/statecraft-<n>/<w>/<h>`); icons → lucide-react
  (Menu, ArrowRight, ArrowLeft, Briefcase, TrendingUp, Users, Award,
  Quote, Mail, Send, Facebook, Twitter, Linkedin, Instagram, MapPin,
  Phone, Clock); Hind + Shippori Mincho via Google Fonts `<link>` in
  `index.html`; brand yellow `#F3D955` (+ coral `#F15B43` accent) in
  `@theme` so the shared Button/ButtonLink `primary` resolves to the
  square yellow style (radius 0, tall padding) and a local
  border-outline variant reproduces `.border-btn`; no asset/CSS/font-file
  copying. Demo copy paraphrased but same kinds (hero headline +
  subtext + CTA; section label + headline + paragraph; service card icon
  - title + blurb + Learn More; case card image + title + blurb; quote +
    name + role; blog meta + title + excerpt; footer link columns +
    newsletter form). The hero is a static single slide; the testimonial
    carousel is implemented with dot navigation. Footer copyright uses
    the Component Dock credit line, not ColorLib.

Statecraft lives in `apps/statecraft` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn) plus the repo-standard
Navbar/Footer chrome (adapted to the dark navbar + yellow CTA and the
3-column yellow footer with newsletter form).

## Requirements

### Requirement: Navbar

The system SHALL render a dark navbar with the site wordmark, section
links, and a yellow "Make an Appointment" call-to-action button.

#### Scenario: Navbar content

- **GIVEN** the Statecraft page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Statecraft" as the brand
- **AND** the navbar SHALL show links HOME, ABOUT, SERVICES, CASES, BLOG, and CONTACT
- **AND** the navbar SHALL show a yellow "Make an Appointment" button

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered at a mobile viewport
- **WHEN** the user taps the hamburger toggle
- **THEN** the navigation links SHALL expand into a stacked menu
- **AND** the toggle SHALL expose `aria-expanded` state

### Requirement: Hero

The system SHALL render a full-height static hero on the olive-green
surface with a dark overlay, a split layout (caption left, photo right),
and a headline highlighting one word in brand yellow.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL show the headline "Unlocking the potential of those who advance the world"
- **AND** one word of the headline SHALL be highlighted in brand yellow
- **AND** the hero SHALL show a subtext paragraph and an outlined "Explore More" button
- **AND** the photo column SHALL be hidden below the large breakpoint

#### Scenario: Hero navigation

- **GIVEN** the hero is displayed
- **WHEN** the user activates the "Explore More" button
- **THEN** the page SHALL scroll to the "Who We Are" section

### Requirement: Who We Are

The system SHALL render the about section with an uppercase serif label,
a long headline, a supporting paragraph, and two thumbnails.

#### Scenario: Who We Are content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the Who We Are section
- **THEN** the section SHALL show the label "Who We Are" in uppercase serif
- **AND** the section SHALL show the headline "We increase our clients' topline by optimizing their growth strategies, marketing, pricing and sales."
- **AND** the section SHALL show a supporting paragraph about objectivity and trust
- **AND** the section SHALL show two office thumbnails
- **AND** the section background SHALL be the cream surface

### Requirement: Services

The system SHALL render a brand-yellow services band with three image
cards, each with a title, blurb, and a Learn More link.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the services band
- **THEN** the band SHALL show the label "Services" and a headline
- **AND** the band SHALL show exactly three service cards
- **AND** each card SHALL show an image, a title, a blurb, and a "Learn More" link
- **AND** the band background SHALL be brand yellow

### Requirement: Why Choose Us

The system SHALL render a light about block with a "Why Choose Us?"
label, headline text, and an image.

#### Scenario: Why Choose Us content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the Why Choose Us section
- **THEN** the section SHALL show the label "Why Choose Us?"
- **AND** the section SHALL show a headline and supporting text
- **AND** the section SHALL show an image beside the text

### Requirement: Top Stories (cases)

The system SHALL render a cases section titled "Top Stories" with a
"More Cases" link and three image cards.

#### Scenario: Cases content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the Top Stories section
- **THEN** the section SHALL show the heading "Top Stories" and a "More Cases" link
- **AND** the section SHALL show three case cards, each with an image, a title, and a blurb

### Requirement: Testimonials

The system SHALL render a cream testimonial carousel with centered quote
slides showing a quote, a name, and a role.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the testimonial section
- **THEN** the carousel SHALL show a quote, a founder name, and a role
- **AND** the user SHALL be able to advance slides with the dot navigation

### Requirement: Blog

The system SHALL render a blog section titled "Latest Blog" with the
subtitle "Tips & Tricks" and at least two blog cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the blog section
- **THEN** the section SHALL show the label "Latest Blog" and the heading "Tips & Tricks"
- **AND** the section SHALL show blog cards, each with an image, a meta line, a title, and an excerpt

### Requirement: Footer

The system SHALL render a three-column footer with quick links, service
links, a newsletter form, and a copyright bar linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the footer
- **THEN** the footer SHALL show a "Quick Links" column (Work, Services, Products, Tips & Tricks)
- **AND** the footer SHALL show a "Services" column (Strategy & Transformation, Growth & Innovation, Leadership & Change, Digitalisation & IT, Operations & Efficiency)
- **AND** the footer SHALL show a newsletter form with an email input and a subscribe button
- **AND** the copyright bar SHALL link to https://www.componentdock.com/

## Verification checklist

- [ ] Section order matches the source 1:1 (navbar → hero → Who We Are →
      services band → Why Choose Us → Top Stories → testimonials → blog →
      footer).
- [ ] Brand yellow `#F3D955` in `@theme`; used via Tailwind classes.
- [ ] Square buttons (radius 0) with tall padding; outlined "Explore
      More" variant reproduces `.border-btn`.
- [ ] Hind + Shippori Mincho loaded via Google Fonts `<link>` in
      `index.html`; no font files copied.
- [ ] Seeded picsum placeholders; no ColorLib images/CSS copied.
- [ ] No `colorlib` / `preview.colorlib` strings anywhere in `apps/*`.
- [ ] Footer links to https://www.componentdock.com/.
- [ ] `public/CNAME` = `statecraft.free.componentdock.com`; package
      `@free-react-templates/statecraft`; homepage
      `https://statecraft.free.componentdock.com`; lockfile registered
      (`npm install` at root).
- [ ] `vite.config.ts` keeps `injectUiSource()`.
- [ ] Per-app gate passes: `scripts/verify-app.sh statecraft`
      (typecheck, lint, knip, fallow, 100% coverage tests, build).
