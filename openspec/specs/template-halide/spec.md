# Template: Halide (Photography / Creative Landing Page)

## Purpose

Halide is a single-page creative photography / portfolio landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Yaseen" website template design
(source: https://colorlib.com/wp/template/yaseen/), built under a DIFFERENT
name (Halide — silver halide, the light-sensitive crystal in photographic
film, matching the creative-photography theme) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Yaseen" — free Bootstrap creative photography /
  portfolio landing page template. TEMPLATES.md has FOUR copies of this item
  (lines 540, 2103, 2480, 2578 — mark EVERY copy `[x]` when done).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/yaseen/`
  (HTTP 200, 16.6 KB HTML; page title "Yaseen"). Master stylesheet
  `css/main.css` (~30.7 KB, fully extracted for tokens); libs: bootstrap,
  font-awesome (footer social icons), linearicons (about sun icon + hamburger
  menu icon), magnific-popup + nice-select (referenced, unused on the index
  page), jquery.counterup (facts counters). Google Font **Poppins** (loaded
  via an inlined @font-face block in the head — weights 100/300/500/600 used).
  Cross-checked against the TEMPLATES.md screenshot
  (`yaseen-creative-photography-website-landing-page-template.jpg`, 1200×972,
  viewed in browser). The demo brands itself "YASEEN"; the recreation uses the
  NEW name **Halide** (brand gradient #91d1ff → #a387ff).
- **Visual design (from DOM + CSS tokens + screenshot):** airy light-blue →
  lavender gradient theme on a fixed background photo. The whole page sits on
  `body { background-image: url(../img/banner-bg.jpg); background-attachment:
fixed }` with a full-page gradient overlay (`body:after`, linear-gradient to
  bottom right #91d1ff → #a387ff, opacity 0.6, z-index -1 — the blurred
  hooded-person photo visible at the page edges in the screenshot). Header
  over the hero: "YASEEN" logotype (bright blue) left, right-aligned nav
  (Home / Generic / Elements, 12px/500 uppercase #777, hover bg #a387ff white)
  - hamburger icon. Hero banner: 540px-tall row centered on the gradient
    overlay — white uppercase h1 "YASEEN / What else do you need?" (36px,
    weight 100, span weight 600) + white paragraph, NO CTA button. Below: white
    About split (left: photo with a polaroid-style frame — outline 10px solid
    #777 offset -54px + asymmetric transparent border; right: sun icon #a387ff
  - h1 "Visually clean & Perfect" (weight 100, purple, span black/600) + p +
    black uppercase "Learn Details" text link, hover purple). Then a GRADIENT
    features section (6 white cards: Multiple Layouts / Endless Features /
    Responsive View / Clean Coding / Fully Customizables / Flexible Design),
    a white facts band (4 counters: 2536 New Followers / 6785 Site Visitors /
    1059 Online now / 2239 New Customers — number 48px/600, caption 24px/100
    purple, count-up on scroll via counterup), a white services section (3
    cards with alternating top/bottom photos — demo content is food/chef themed:
    "The Important of food", "To Hire A Personal Chef", "Thrill Friends And
    Family" — each with purple "View Details" link), a numbered features band
    (01/02/03 big purple numerals + "responsive View" / "Multiple Layouts" /
    "Flexible Design" with a "-" dash prefix), a GRADIENT subscription band
    ("Subscribe for our Newsletter", "We won't send any kind of spam", email
    input + white-bordered pill "Get Started" button), and a footer (uppercase
    menu + 4 social icons + copyright). Demo copy is placeholder lorem —
    paraphrase into photography/portfolio copy, keep the same kind of content.
- **Section order (1:1, from live demo DOM):**
  1. Header (`header` inside `.hero-area`): `div.logo` `a` → `img/logo.png`
     (demo logotype image → render a text logo "HALIDE", uppercase Poppins
     600, purple or dark) left; `div.main-menubar` right: `nav.hide` links —
     Home, Generic, Elements (12px/500 uppercase #777, margin 0, hover bg
     #a387ff + white) + `div.menu-bar` hamburger (`span.lnr.lnr-menu` 24px
     #222). Mobile: hamburger → slide-down menu (recreate with a simple
     state toggle; `nav` is hidden by default and shown by main.js).
  2. Hero banner (`div.banner-area.relative` inside `.hero-area`):
     `div.overlay.hero-overlay-bg` (linear-gradient to bottom right
     #91d1ff → #a387ff over the bg photo) + `div.row.height` (540px,
     align-items center, justify-center) > col-lg-7 > `div.banner-content
.text-center`: `h1.text-uppercase.text-white` "<span>Halide</span>
     <br> What else do you need?" (36px, weight 100 lh 1.25, span weight 600) + `p.text-white.p-2.mb-30` (the demo paragraph is a workplace
     conduct placeholder — paraphrase into a photography intro). No button.
  3. About (`section.about-area pt-100 pb-100`, bg #fff): row
     justify-content-between — col-lg-6 `div.about-left`: `img.img-fluid`
     (img/about.jpg — woman at golden sunset in the screenshot → seeded
     landscape photo) framed with outline 10px solid #777 offset -54px +
     transparent borders (15px 10px 85px 85px); col-lg-6 `div.about-right`:
     `span.lnr.lnr-sun` (30px #a387ff → lucide Sun) + `h1.text-uppercase`
     "<span>Visually</span> <br> clean & Perfect" (36px weight 100 color
     #a387ff, span weight 600 color #000) + `p` (padding-right 45px) +
     `a.learn-btn.text-uppercase` "Learn Details" (#000/600 uppercase,
     hover #a387ff).
  4. Features (`section.feature-area pt-100 pb-100`, GRADIENT bg
     linear-gradient(135deg, #a387ff → #91d1ff)): 6 × col-lg-4 col-md-6
     `div.single-feature` (bg #fff, padding 40px, margin-bottom 30px):
     `h2.text-uppercase` (1.125em/600, letter-spacing 2px, margin-bottom
     20px) + `p` (14px/300, lh 25px): **Multiple Layouts / Endless
     Features / Responsive View / Clean Coding / Fully Customizables /
     Flexible Design** (demo repeats the same lorem blurb 6× — vary the
     copy, keep the kind of content).
  5. Facts (`section.facts-area pt-100 pb-100`): 4 × col-lg-3 col-md-6
     `div.single-fact` (text-center): `h2.counter` number (48px/600,
     counts up on scroll via jquery.counterup → small React count-up hook
     or static numbers) + `p.text-uppercase` caption (24px/100, color
     #a387ff): **2536 New Followers / 6785 Site Visitors / 1059 Online now
     / 2239 New Customers**.
  6. Services (`section.secvice-area pt-90 pb-90`): 3 × col-md-4
     `div.single-service` — images ALTERNATE position (img top / img below
     desc / img top): `img.img-fluid.d-block.mx-auto` (s1.jpg, s2.jpg,
     s3.jpg — demo images are food/chef photos; paraphrase the service
     cards to photography services or keep food themes, same kind of
     content) + `div.desc`: `h2.text-uppercase` (1.125em/600, letter-
     spacing 2px, padding 20px 20px 0) + `p` (2nd card p has min-height
     152px) + `a.view-details.text-uppercase` "View Details" (color
     #a387ff): **The Important of food / To Hire A Personal Chef / Thrill
     Friends And Family**.
  7. Numbered features (`section.feature-bottom-area pt-100 pb-100`): 3 ×
     col-lg-4 `div.single-feat2` (d-flex justify-content-between): `div.count`
     `h1` (48px, color #a387ff): **01 / 02 / 03** + `div.desc`: `h2.text-
uppercase` (1.125em/600, letter-spacing 2px, `::before` content "-")
     - `p` (lh 25px): **responsive View / Multiple Layouts / Flexible
       Design**.
  8. Subscription (`section.subscription-area pt-100 pb-100`, GRADIENT bg
     linear-gradient(135deg, #a387ff → #91d1ff)): row justify-center
     col-lg-8 `div.section-title.text-center`: `h3.text-uppercase.text-
white` "<span>Subscribe</span> <br> for our Newsletter" (36px, weight
     100, span weight 600) + `span.text-white` "We won't send any kind of
     spam" (14px/300); row justify-center col-lg-6 `form.subscription`:
     `input[type=email]` placeholder "Email address" (line-height 50px,
     padding 0 180px 0 25px, border-radius 25px, bg #f9f9ff, weight 300;
     responsive padding 0 25px) + `button.primary-btn.hover` "Get Started"
     (`span.mr-10` label + `span.lnr.lnr-arrow-right` → lucide ArrowRight).
     Form submit may swap to a success message per repo conventions.
  9. Footer (`section.footer-area pt-60 pb-60`, margin-bottom 90px):
     `ul.footer-menu` (inline-flex, 14px/600 uppercase, li padding 0 40px,
     hover #a387ff): Home, Generic, Elements + `footer`: `div.footer-
social` (text-center, margin 40px 0; 4 `a` with padding 20px, i color
     #777 hover #a387ff — font-awesome facebook/twitter/dribbble/behance →
     inline SVG brand icons) + `div.footer-content` `div.text-center`
     copyright ("© 2018 All rights reserved | This template is made with ♥
     by ColorLib", `a` #a387ff) — the ColorLib credit is REPLACED by the
     mandated Component Dock link (https://www.componentdock.com/) per repo
     rules.
- **Design tokens extracted from `css/main.css` + DOM:**
  - Brand gradient: **#91d1ff** (light blue) ↔ **#a387ff** (lavender) —
    the identity pair. Hero overlay + body overlay: `linear-gradient(to
bottom right, #91d1ff, #a387ff)` (body overlay opacity 0.6, z-index
    -1); feature + subscription sections: `linear-gradient(135deg,
#a387ff, #91d1ff)`; primary-btn hover fill: `linear-gradient(135deg,
#91d1ff, #a387ff)`.
  - Accent purple **#a387ff** on light sections: about h1 + sun icon,
    fact captions, view-details links, feat2 numerals, nav hover bg,
    footer link/social hovers.
  - Text: headings **#222222**, body **#777777** (14px/300, lh 1.5),
    about h1 span / learn-btn **#000**; white text on gradient bands.
  - Section bgs: about/features-cards/facts/services/feat2 white (#fff);
    feature + subscription gradient; input bg **#f9f9ff**.
  - Font: **Poppins**, sans-serif (single family; weights 100/300/500/600
    in use — load 300;500;600 (+100 if the demo's extra-light headings are
    kept) via Google Fonts
    `https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;600&display=swap`
    in index.html).
  - Buttons: `.primary-btn` — pill: border-radius 20px, line-height 40px,
    padding 0 30px, transparent bg, 1px solid #fff border, color #222222
    (weight 500); label span #fff; hover: gradient fill (#91d1ff →
    #a387ff), white text, border transparent. `.learn-btn` — plain text
    link #000/600 uppercase, hover #a387ff. `.view-details` — text link
    #a387ff.
  - Headings: h1 36px (banner h1 36px weight 100 lh 1.25, span 600; about
    h1 36px weight 100 #a387ff, span 600 #000); feature/service/feat2 h2
    1.125em weight 600 letter-spacing 2px; fact h2 48px/600; feat2 count
    h1 48px #a387ff; fact caption 24px/100 #a387ff; subscription h3 36px
    weight 100 (span 600).
  - Rhythm: about/feature/facts/feat2/subscription pt-100 pb-100; services
    pt-90 pb-90; footer pt-60 pb-60 + margin-bottom 90px; feature cards
    padding 40px + margin-bottom 30px; footer-menu li padding 0 40px
    (0 20px ≤768px).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/halide-<n>/<w>/<h>`); logo → text logotype "HALIDE"
  (Poppins 600, uppercase, #a387ff or dark); the fixed page background
  (banner-bg.jpg + 0.6-opacity gradient overlay) → a fixed-position div or
  body style with a seeded picsum bg + Tailwind gradient overlay at 60%
  opacity; about photo → seeded landscape; service photos → seeded picsum
  (screen seeds for subject fit — food/chef or photography scenes);
  icons → lucide-react (Sun, ArrowRight, Menu, X) + inline SVG brand icons
  for the footer social row (facebook, twitter, dribbble, behance — lucide
  removed brand icons); Poppins via Google Fonts; counterup count-up →
  small React hook (IntersectionObserver + rAF) or static numbers;
  magnific-popup/nice-select NOT needed (no lightbox/selects on this
  page); mobile menu → hamburger state toggle.

Halide lives in `apps/halide` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Header with logo, nav and hamburger

The system SHALL render a header with the site logo "Halide", three anchor
links, and a hamburger trigger on small screens that opens a mobile menu.

#### Scenario: Header content

- **GIVEN** the Halide page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Halide" (uppercase text
  logotype) on the left
- **AND** the header SHALL show links Home, Generic, and Elements
- **AND** on small screens the header SHALL show a hamburger trigger button
  (aria-label "Open menu")

#### Scenario: Open and close the mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user presses the hamburger trigger
- **THEN** a mobile menu SHALL appear with the same three anchor links
- **WHEN** the user presses the close control or the Escape key
- **THEN** the mobile menu SHALL close

### Requirement: Hero banner

The system SHALL render a full-width hero banner over a gradient overlay with
a two-line white headline and a paragraph.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero banner is displayed
- **THEN** it SHALL show the headline "Halide" followed by "What else do you
  need?" in large white uppercase type (first word in a heavier weight)
- **AND** it SHALL show a short white paragraph under the headline
- **AND** the banner SHALL sit on the brand gradient (light blue to lavender)
  over a background photo

### Requirement: About section

The system SHALL render a white about section with a framed photo on the
left and icon, headline, text and link on the right.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a photo on the left with a polaroid-style frame
  (thick border with a wider bottom edge)
- **AND** the right column SHALL show a sun icon in the brand purple
- **AND** it SHALL show the headline "Visually clean & Perfect" with
  "Visually" in black and the rest in the brand purple
- **AND** it SHALL show a paragraph and a "Learn Details" link (black,
  uppercase, turning purple on hover)

### Requirement: Features section

The system SHALL render a gradient-background features section with six white
cards, each with an uppercase title and a blurb.

#### Scenario: Features section

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL sit on the brand gradient background
- **AND** it SHALL show 6 white cards (2-row / 3-column grid on large
  screens), each with an uppercase title (e.g. Multiple Layouts, Endless
  Features, Responsive View, Clean Coding, Fully Customizables, Flexible
  Design) and a short blurb

### Requirement: Facts band

The system SHALL render a facts band with four statistics, each a large
number with an uppercase purple caption.

#### Scenario: Fact stats

- **GIVEN** the page is rendered
- **WHEN** the facts band is displayed
- **THEN** it SHALL show 4 stats: 2536 New Followers, 6785 Site Visitors,
  1059 Online now, and 2239 New Customers
- **AND** each stat SHALL show a large number (48px bold) with a caption in
  the brand purple

### Requirement: Services section

The system SHALL render a services section with three cards, each holding an
image, an uppercase title, a blurb and a "View Details" link, with the middle
card's image below its text.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show 3 cards, each with an image, an uppercase title, a
  short blurb and a purple "View Details" link
- **AND** the first and third cards SHALL show their image above the text
  while the middle card SHALL show its image below the text

### Requirement: Numbered features

The system SHALL render a numbered-features band with three items, each a big
purple number next to an uppercase title with a dash prefix and a blurb.

#### Scenario: Numbered items

- **GIVEN** the page is rendered
- **WHEN** the numbered features band is displayed
- **THEN** it SHALL show 3 items numbered 01, 02 and 03 in large brand-purple
  type
- **AND** each item SHALL show an uppercase title preceded by a "-" dash and
  a short blurb

### Requirement: Subscription section

The system SHALL render a gradient subscription band with a newsletter
headline, a reassurance line, an email input and a pill "Get Started" button
with an arrow icon.

#### Scenario: Subscription content

- **GIVEN** the page is rendered
- **WHEN** the subscription band is displayed
- **THEN** it SHALL sit on the brand gradient background
- **AND** it SHALL show the headline "Subscribe for our Newsletter" in white
  with "Subscribe" in a heavier weight
- **AND** it SHALL show the line "We won't send any kind of spam"
- **AND** it SHALL show an email input (placeholder "Email address", rounded
  on a #f9f9ff background) and a pill "Get Started" button with a right-arrow
  icon

#### Scenario: Subscription submit

- **GIVEN** the user has typed a valid email address
- **WHEN** the user presses "Get Started"
- **THEN** the form SHALL not navigate away and SHALL show a success state
  (e.g. a thank-you message) per repo conventions

### Requirement: Footer

The system SHALL render a footer with an uppercase menu, four social icons,
and a copyright line linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the links Home, Generic, and Elements
- **AND** it SHALL show four social icons (Facebook, Twitter, Dribbble,
  Behance)
- **AND** it SHALL show a copyright line with a link to
  https://www.componentdock.com/ ("Component Dock")

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Halide app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Halide — Photography Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh halide` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (header, hero banner, about,
      features, facts, services, numbered features, subscription, footer)
- [ ] Design tokens in `@theme`: brand gradient stops `#91d1ff` and
      `#a387ff`, heading `#222222`, body `#777777`, black `#000`, input bg
      `#f9f9ff`
- [ ] Font: Poppins (300/500/600, +100 if extra-light headings kept) via
      Google Fonts
- [ ] Buttons: pill `primary-btn` (border-radius 20px, transparent bg, 1px
      white border, gradient fill on hover); text links `learn-btn`
      (#000 → #a387ff hover) and `view-details` (#a387ff)
- [ ] Header: "Halide" logotype + 3 anchor links + hamburger → mobile menu
      (close control, Escape-to-close)
- [ ] Hero banner: brand gradient over background photo, two-line white
      headline ("Halide" heavier weight), paragraph, NO CTA button
- [ ] About: framed photo left (wide bottom border), sun icon + "Visually
      clean & Perfect" (black/purple split) + "Learn Details" right
- [ ] Features: gradient section bg + 6 white cards (uppercase titles,
      blurbs)
- [ ] Facts: 4 stats (2536 / 6785 / 1059 / 2239) — 48px numbers, purple
      uppercase captions (count-up animation optional)
- [ ] Services: 3 cards, middle card image BELOW text, purple "View Details"
      links
- [ ] Numbered features: 01/02/03 purple numerals + "-" dashed uppercase
      titles + blurbs
- [ ] Subscription: gradient band, "Subscribe for our Newsletter" +
      "We won't send any kind of spam" + rounded #f9f9ff email input + pill
      "Get Started" button with arrow
- [ ] Footer: menu links + 4 social icons (inline SVG brand icons, not
      lucide) + Component Dock link in the copyright line
- [ ] Placeholder images seeded (`picsum.photos/seed/halide-<n>/<w>/<h>`);
      fixed page background = seeded photos + 60% gradient overlay; no
      copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` on ALL FOUR
      lines 540, 2103, 2480, 2578 + surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
