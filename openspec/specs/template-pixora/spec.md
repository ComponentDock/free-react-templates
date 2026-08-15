# Template: Pixora (Creative / Photography Landing Page)

## Purpose

Pixora is a single-page creative / photography landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Yaseen" website template design
(source: https://colorlib.com/wp/template/yaseen/), built under a DIFFERENT
name (Pixora — photography/creative brand, matching the soft blue→purple
gradient light aesthetic) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Yaseen" — free creative / photography landing page
  template. TEMPLATES.md has FOUR copies of this item (lines 540, 2105, 2482,
  2580 — mark EVERY copy `[x]` when done).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/yaseen/`
  (HTTP 200, 16.5 KB HTML; page title "Yaseen"). Master stylesheet
  `css/main.css` (~30 KB, fully extracted for tokens); libs: bootstrap,
  font-awesome (social icons), linearicons (lnr icon font), nice-select,
  magnific-popup. Google Font **Poppins** (sans-serif). Cross-checked against
  the TEMPLATES.md screenshot (`yaseen-creative-photography-website-landing-page-template.jpg`,
  1200×972, viewed in browser): hero is a soft translucent **purple→blue
  gradient over a blurred photo** (woman in hood, right side), white uppercase
  brand headline + question, white paragraph; below a white section with a
  warm golden-hour photo of a woman framed by a thin dark rectangular border
  (polaroid effect) on the left and a light-blue sun icon + "VISUALLY" bold
  black caps / "CLEAN & PERFECT" lighter blue-grey heading + grey paragraph +
  uppercase black "LEARN DETAILS" link on the right. The demo brands itself
  "YASEEN"; the recreation uses the NEW name **Pixora**.
- **Visual design (from DOM + CSS tokens + screenshot):** light, airy,
  minimalist creative landing. Header: logo left, 3 nav links (Home / Generic
  / Elements — demo links) + hamburger right. Hero (540px, bg photo
  `img/banner-bg.jpg` + gradient overlay `hero-overlay-bg`): centered h1
  uppercase white "<span>Yaseen</span> <br> What else do you need?" (36px,
  weight 100, span 600) + white paragraph. About (white): left polaroid photo
  (`.about-left img` outline 10px solid #777 offset -54px + asymmetric
  transparent border 15px 10px 85px 85px); right `lnr-sun` icon (#a387ff) +
  h1 "Visually clean & Perfect" (36px weight 100 #a387ff, span 600 #000) +
  blurb + "Learn Details" link (uppercase 600 black, hover #a387ff). Feature
  area (GRADIENT bg #a387ff→#91d1ff): 6 white cards (padding 40px, h2
  1.125em/600 uppercase letter-spacing 2px, no icons) — Multiple Layouts,
  Endless Features, Responsive View, Clean Coding, Fully Customizables,
  Flexible Design. Facts (white): 4 stats — number 48px/600 dark + caption
  24px/100 #a387ff: 2536 New Followers, 6785 Site Visitors, 1059 Online now,
  2239 New Customers. Services (`secvice-area`, bg #f9faff): 3 cards each
  with an image + h2 1.125em/600 uppercase letter-spacing 2px + blurb +
  "View Details" link (with arrow icon): The Important of food, To Hire A
  Personal Chef, Thrill Friends And Family. Feature-bottom (white): 3 numbered
  rows — count h1 48px #a387ff (01/02/03) + h2 (prefixed by a "‑" dash via
  `h2:before`) + blurb: responsive View, Multiple Layouts, Flexible Design.
  Subscription (GRADIENT bg): centered h3 uppercase white "<span>Subscribe</span>
  <br> for our Newsletter" (36px weight 100, span 600) + white span "We won't
  send any kind of spam" + email input (border-radius 25px, bg #f9f9ff,
  line-height 50px, placeholder "Email address") + pill "Get Started" button.
  Footer (white): footer-menu (Home / Generic / Elements, uppercase 14px 600),
  footer-social icons (fa facebook / twitter / dribbble / behance, #777 hover
  #a387ff), copyright line "© 2018 All rights reserved | This template is
  made with ♥ by ColorLib" — the ColorLib credit is REPLACED by the mandated
  Component Dock link (https://www.componentdock.com/) per repo rules.
- **Section order (1:1, from live demo DOM):**
  1. Header (`div.header-top`): logo (img/logo.png "Yaseen" mark) left; right
     `main-menubar` → `nav` with 3 links (Home / Generic / Elements) + `menu-bar`
     hamburger (`lnr lnr-menu`) — mobile: hamburger opens a slide-down menu
     (recreate with a simple state toggle; desktop shows the inline links).
  2. Hero (`div.banner-area.relative`, bg photo + `div.overlay.hero-overlay-bg`
     gradient, `.height` 540px): centered `banner-content text-center`
     (col-lg-7): h1 uppercase white "<span>Brand</span> <br> What else do you
     need?" + p white "inappropriate behavior is often laughed off as 'boys
     will be boys,' ..." (paraphrase into creative/photography copy).
  3. About (`section.about-area.pt-100.pb-100`, white): row — left col-lg-6
     `about-left` polaroid photo (img/about.jpg); right col-lg-6 `about-right`:
     sun icon (lnr-sun, #a387ff) + h1 "Visually clean & Perfect" + p blurb +
     "Learn Details" link.
  4. Features (`section.feature-area.pt-100.pb-100`, GRADIENT bg): 6 ×
     `single-feature` white cards (col-lg-4 col-md-6) — uppercase h2 + blurb.
  5. Facts (`section.facts-area.pt-100.pb-100`, white): 4 × `single-fact`
     (col-lg-3 col-md-6, centered): number 48px/600 + caption 24px/100 #a387ff.
  6. Services (`section.secvice-area.pt-90.pb-90`, bg #f9faff): 3 ×
     `single-service` (col-md-4): image + h2 + p + "View Details" link.
  7. Feature-bottom (`section.feature-bottom-area.pt-100.pb-100`, white):
     3 × `single-feat2` (col-lg-4): count h1 (01/02/03) + h2 ("-"-prefixed) +
     desc p.
  8. Subscription (`section.subscription-area.pt-100.pb-100`, GRADIENT bg):
     centered section-title h3 "Subscribe <br> for our Newsletter" + "We won't
     send any kind of spam" + email input + "Get Started" pill button.
  9. Footer (`section.footer-area.pt-60.pb-60`, white): footer-menu (3 links),
     footer-social (4 brand icons), footer-content copyright line + Component
     Dock link.
- **Design tokens extracted from `css/main.css` + DOM:**
  - Brand gradient (135deg): **#91d1ff (light blue) → #a387ff (purple)** —
    hero overlay (`hero-overlay-bg`), feature-area bg, subscription-area bg,
    `primary-btn` hover fill, decorative `body:after`.
  - Brand purple **#a387ff** — about icon, about h1, fact captions,
    feature-bottom count numbers, footer link hovers, learn-btn hover.
  - Dark text **#222222** (nav, headings, button text on gradient);
    body text **#777777** (paragraphs, social icons); light section bg
    **#f9faff** (services) and input bg **#f9f9ff**; white cards on gradient.
  - Font: **Poppins**, sans-serif (weights 100/300/500/600) — Google Fonts
    `https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap`
    in index.html.
  - Buttons: `.primary-btn` — pill (border-radius 20px), line-height 40px,
    padding 0 30px, transparent bg, 1px solid #fff border, color #222222,
    font-weight 500; hover → gradient fill + white text. "Learn Details" /
    "View Details" are text links (uppercase 600), not buttons.
  - Headings: hero h1 36px uppercase white weight 100 (span 600); section
    h2/h3 36px weight 100 with 600 span; feature card h2 1.125em 600 uppercase
    letter-spacing 2px; fact number 48px 600, caption 24px 100.
  - Section padding: pt/pb 100px (about, features, facts, feature-bottom,
    subscription), 90px (services), 60px (footer); footer margin-bottom 90px.
  - About photo frame: outline 10px solid #777, outline-offset -54px, border
    15px 10px 85px 85px transparent (asymmetric polaroid frame).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/pixora-<n>/<w>/<h>`): hero bg + about photo +
  3 service images (screen seeds per the seed-screening method — hero needs a
  dark-ish subject with room for the gradient overlay; about needs a
  warm/portrait subject); the gradient overlay keeps text readable; icons →
  lucide-react (Sun for the about icon, ArrowRight for View Details, Menu/X
  for the hamburger) + inline SVG brand icons for the footer social row
  (lucide removed brand icons: facebook/twitter/dribbble/behance); Poppins via
  Google Fonts; mobile menu = simple state toggle; newsletter form implemented
  with React state — on submit swaps to a success message per repo
  conventions; nav links are single-page anchors (Home / About / Contact —
  source's Generic/Elements are demo pages, same 3-link kind).

Pixora lives in `apps/pixora` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Header with nav and mobile menu

The system SHALL render a header with the site logo "Pixora", three anchor
links, and a hamburger trigger on small screens that opens a closable mobile
menu.

#### Scenario: Header content

- **GIVEN** the Pixora page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Pixora" on the left
- **AND** the header SHALL show links Home, About, and Contact
- **AND** on small screens the header SHALL show a hamburger trigger button
  (aria-label "Open menu")

#### Scenario: Open and close the mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user presses the hamburger trigger
- **THEN** a mobile menu SHALL appear with the same three anchor links
- **WHEN** the user presses the close control or the Escape key
- **THEN** the mobile menu SHALL close

### Requirement: Hero section

The system SHALL render a hero with a background photo under a blue→purple
gradient overlay, a white uppercase two-line headline with the brand name
highlighted, and a white paragraph.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "Pixora" followed by "What else do you
  need?" in large white uppercase type (brand name in the heavier weight)
- **AND** it SHALL show a short white paragraph below the headline

### Requirement: About section

The system SHALL render an about section with a framed photo on the left and,
on the right, a sun icon, a two-tone heading, a blurb, and a "Learn Details"
link.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a photo with the signature polaroid-style dark frame
  on the left
- **AND** it SHALL show a sun icon in the brand purple above the heading
- **AND** it SHALL show the heading "Visually clean & Perfect" in mixed
  weights (light purple + heavy black parts)
- **AND** it SHALL show a short blurb paragraph
- **AND** it SHALL show a "Learn Details" link in uppercase

### Requirement: Features section

The system SHALL render a features section on the brand gradient with six
white cards, each with an uppercase title and a short blurb.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show 6 white cards over the blue→purple gradient
- **AND** each card SHALL show an uppercase title (e.g. Multiple Layouts,
  Endless Features, Responsive View, Clean Coding, Fully Customizables,
  Flexible Design) and a short blurb

### Requirement: Facts band

The system SHALL render a facts band with four stats, each a large number
with a purple caption.

#### Scenario: Fact stats

- **GIVEN** the page is rendered
- **WHEN** the facts band is displayed
- **THEN** it SHALL show 4 stats, each a large dark number with a brand-purple
  caption: 2536 New Followers, 6785 Site Visitors, 1059 Online now, and 2239
  New Customers

### Requirement: Services section

The system SHALL render a services section on a light background with three
cards, each with an image, a title, a blurb, and a "View Details" link.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show 3 service cards on the light `#f9faff` background
- **AND** each card SHALL show an image, an uppercase title, a short blurb,
  and a "View Details" link

### Requirement: Numbered feature rows

The system SHALL render three numbered rows (01/02/03), each with a large
purple number, a dash-prefixed title, and a blurb.

#### Scenario: Numbered rows

- **GIVEN** the page is rendered
- **WHEN** the numbered rows section is displayed
- **THEN** it SHALL show 3 rows, each with a large brand-purple number (01,
  02, 03)
- **AND** each row SHALL show a title prefixed with a dash and a short blurb

### Requirement: Newsletter subscription

The system SHALL render a newsletter band on the brand gradient with a
"Subscribe for our Newsletter" heading, a no-spam note, an email input, and a
"Get Started" button, and SHALL show a success message after a valid submit.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter band is displayed
- **THEN** it SHALL show the heading "Subscribe for our Newsletter" in white
  with "Subscribe" in the heavier weight
- **AND** it SHALL show the note "We won't send any kind of spam"
- **AND** it SHALL show an email input (placeholder "Email address") and a
  "Get Started" pill button

#### Scenario: Newsletter submit

- **GIVEN** the newsletter band is displayed
- **WHEN** the user enters a valid email and presses Get Started
- **THEN** the form SHALL be replaced by a success message

### Requirement: Footer

The system SHALL render a footer with three menu links, four social icons,
and a copyright line linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show menu links Home, About, and Contact
- **AND** it SHALL show four social icons (Facebook, Twitter, Dribbble,
  Behance)
- **AND** it SHALL show a copyright line with a link to
  https://www.componentdock.com/ ("Component Dock")

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Pixora app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Pixora — Creative Landing Page"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh pixora` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (header, hero, about, features,
      facts, services, numbered rows, newsletter, footer)
- [ ] Design tokens in `@theme`: brand purple `#a387ff`, gradient light blue
      `#91d1ff`, dark text `#222222`, body text `#777777`, light section bg
      `#f9faff` / input bg `#f9f9ff`
- [ ] Font: Poppins (100/300/400/500/600) via Google Fonts
- [ ] Buttons: pill (rounded-full), transparent + 1px white border, #222222
      text; hover → gradient fill + white text
- [ ] Header: logo + 3 anchor links + hamburger → mobile menu (close control,
      Escape-to-close)
- [ ] Hero: bg photo + blue→purple gradient overlay, uppercase white
      headline (brand + "What else do you need?"), white paragraph
- [ ] About: polaroid-framed photo, sun icon (brand purple), "Visually clean
      & Perfect" mixed-weight heading, blurb, "Learn Details" link
- [ ] Features: 6 white cards on the gradient with uppercase titles
- [ ] Facts: 4 stats (48px number + 24px purple caption)
- [ ] Services: 3 image cards on #f9faff with "View Details" links
- [ ] Numbered rows: 01/02/03 purple counts + dash-prefixed titles
- [ ] Newsletter: gradient band, "Subscribe for our Newsletter", email input,
      "Get Started" → success message
- [ ] Footer: 3 menu links + 4 social icons (inline SVG, not lucide brand
      icons) + Component Dock link in the copyright line
- [ ] Placeholder images seeded (`picsum.photos/seed/pixora-<n>/<w>/<h>`);
      background/portrait subjects screened; no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` on ALL FOUR
      lines 540, 2105, 2482, 2580 + surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
