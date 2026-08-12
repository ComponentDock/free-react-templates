# Template: Mentory (Education / Tutorial Website Template)

## Purpose

Mentory is a single-page education/tutorial template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Tutor"
education website template (see TEMPLATES.md, Education section, line 521;
duplicate row at line 1655 — mark EVERY copy `[x]` when done), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The reference is a tutorial-hub site (demo brand in the preview: "Tutor"): a
transparent navbar floating over a full-height workspace desk photo with a
centered white headline "The Hub Of Tutorials"; a light-grey featured section
whose white tutorial cards overlap the hero's bottom edge (one large card with
a 260px thumbnail, meta line and brand icons, plus three small stacked cards);
a white "Choose Course" section with six brand-icon course tiles (Illustrator,
Photoshop, Angular, JavaScript, React, Vue); a light-grey "Tutorials" section
with a search form + share row, four tutorial list cards with "View" buttons,
a circular pagination, and a sidebar of horizontal thumbnails; a light-grey
"Student Reviews" testimonials section (three cards with 4-star ratings,
quotes and circular avatars); and a light footer with an about column + social
circles, four link columns and a copyright bar. The design is a clean, light
editorial education layout: primary blue `#0779e4` (buttons, active nav,
section h2 headings, pagination active state, social circles, testimonial
bottom borders), slate `#364d59` body text, `#f8f9fa` light section
backgrounds, white cards with soft shadows, and Raleway type.

Brand colors: primary blue `#0779e4` (primary buttons + hover `#0665bf`/border
`#055fb3`, active nav link + underline, `h2` section headings 700, pagination
active circle, testimonial card bottom border 4px, social circle backgrounds,
course tile text color, sticky-nav logo); body text `#364d59` (weight 300,
line-height 1.7); headings `#364d59` weight 300; meta text `#a6a6a6`; light
section background `#f8f9fa` (also course tiles); form control background
`#efefef` (focus `#e2e2e2`, focus border `#0779e4`); rating stars Bootstrap
warning amber `#ffc107`; footer links `rgba(0,0,0,0.5)` (hover black),
footer-heading `#000` 16px; course-tile brand icons: Illustrator `#ff7c00`,
Photoshop `#00c8ff`, Angular `#dd0031`, JavaScript `#f7df1e`, React
`#61dafb`, Vue `#4fc08d`.

## Design reference (replication findings)

- **Original:** ColorLib "Tutor" — education / tutorial website template
  (source: https://colorlib.com/wp/template/tutor/). Listed in TEMPLATES.md
  line 521 (Education section); duplicate at line 1655 — mark every copy `[x]`
  when done. Screenshot: `tutor-free-template.jpg` (1200×946, reviewed
  visually in the browser).
- **Live preview URL:** https://preview.colorlib.com/theme/tutor/ (title
  "Tutor &mdash; Free Website Template by Colorlib"; reachable via curl AND
  browser). HTML saved to `/tmp/tutor-prep/preview.html` (25 KB); stylesheet
  `https://preview.colorlib.com/theme/tutor/css/style.css` saved to
  `/tmp/tutor-prep/style.css` (22 KB); the preview's Bootstrap build
  (`css/bootstrap.min.css`, v4.3.1, re-themed) saved to
  `/tmp/tutor-prep/bootstrap.min.css`; brand icon font CSS
  (`fonts/brand/style.css`) saved to `/tmp/tutor-prep/brand.css`. The preview
  DOM is authoritative for section order/copy; the screenshot confirms the
  navbar-over-hero treatment, the workspace-desk hero photo, the featured
  cards, and the course tile row (screenshot predates the current meta copy —
  it shows "17.5k" views where the live DOM shows "1hr 24m"; follow the DOM).
- **Fonts:** the whole template uses one family — `font-family: "Raleway",
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
Arial, "Noto Sans", sans-serif` (body, headings, inputs). Load "Raleway"
  via Google Fonts `<link>` in `index.html` (weights 300/700/900 — body 300,
  headings 300, `.heading h2` 700, hero `<strong>` 900, buttons 700).
- **Buttons / links (from style.css + bootstrap.min.css):**
  - `.btn-primary` (Bootstrap re-themed in the preview's bootstrap.min.css):
    `color: #fff; background-color: #0779e4; border-color: #0779e4;` hover
    `#0665bf` / border `#055fb3`. Used for the "Search" submit (`btn
btn-primary px-4`) and the tutorial "View" buttons (`btn btn-primary
custom-btn`).
  - `.custom-btn`: `font-size: 12px; font-weight: 700; letter-spacing: .1rem;
text-transform: uppercase` (the "View" label renders as "VIEW").
  - Nav links `.site-navbar .site-menu > li > a`: `margin: 0 15px; padding:
20px 0; color: rgba(0,0,0,0.7)`; hover `#000`. In the `.light` variant
    (over the hero) links and logo are `#fff`.
  - `.category` (card eyebrow label): `font-size: 11px; text-transform:
uppercase; font-weight: 700; letter-spacing: .1rem` (color inherited —
    renders dark slate on white cards).
  - `.heading .caption` (section eyebrow): `font-size: 12px; text-transform:
uppercase; font-weight: 700; letter-spacing: .2rem` (color inherited);
    `.heading h2`: `font-size: 30px; font-weight: 700; color: #0779e4`.
  - `.social-item` (Share row, 40px squares) and `.social li a` (footer,
    40px circles `border-radius: 50%`): `background: #fff` / `#0779e4`
    respectively; hover `background: #0779e4; color: #fff` (footer variant is
    already blue with white icons).
- **Section backgrounds / layout (from preview.html + style.css):**
  - navbar `header.site-navbar.light.site-navbar-target` — `position:
absolute; top: 0; width: 100%; z-index: 9; padding: 1rem`, transparent
    background; logo "Tutor" (font-size 1.7rem, `<strong>` weight 900) left;
    links right: Home · Tutorials · Testimonials · Blog · About · Contact
    (source targets separate pages — recreate as single-page anchors/#; see
    note below). Sticky variant (via jquery.sticky, optional): white
    background, shadow `4px 0 20px -5px rgba(0,0,0,0.2)`, links `#000`, logo
    `#0779e4`. Mobile: off-canvas right panel (300px, white, shadow) with
    hamburger + close button (`aria-expanded`).
  - hero `div.site-section-cover.overlay` — `background-image:
url('images/hero_bg.jpg')` (top-down photo of a desk: laptop with hands
    typing, calendar, notebook, book, coffee cup); `::before` overlay
    `background: rgba(0,0,0,0.3)`; height `calc(100vh - 196px)` min 577px
    (mobile `calc(70vh - 196px)` min 400px); centered `h1` "The <strong>Hub</
    strong> Of <strong>Tutorials</strong>": `font-size: 3rem; color: #fff;
line-height: 1` (2rem on mobile), `strong { font-weight: 900 }`.
  - featured `div.site-section.bg-light.pb-0` — grey `#f8f9fa` band; inner
    `row.align-items-stretch.overlap` with `margin-top: -150px` (cards pull
    up over the hero bottom): `col-lg-8` big `.box.h-100` (white, padding 20px,
    shadow `0 15px 30px rgba(0,0,0,0.05)`; inner `d-flex`: `.img` fixed
    260px wide + margin-right 50px, `.text` with `.category` "Tutorial" link,
    `h3` "Learning React Native" (link `#000`), lorem paragraph, brand icon
    row (`.brand-react` + `.brand-javascript`), `.meta` line "1hr 24m ·
    Advanced · Jun 18, 2020" — `color: #a6a6a6`); `col-lg-4` with three
    `.box.small.h-100` (thumb fixed 80px + margin-right 20px, `.text h3` 16px
    — "Learning React Native" ×3, each with `.category` "Tutorial").
  - choose-course `div.site-section` (white) — `heading.mb-4`: `.caption`
    "Tutorial Courses" + `h2` "Choose Course"; `row.align-items-stretch` of
    six `col-lg-2` `.course` links: `display: block; padding: 20px 10px;
background: #f8f9fa; color: #0779e4; border-radius: 4px; text-align:
center`; inner `span.wrap-icon` 40px brand glyph + `h3` 18px `#ccc`;
    hover: `background: #fff; box-shadow: 0 5px 10px rgba(0,0,0,0.1)` and
    `h3` → `#000`. Tiles: Illustrator, Photoshop, Angular, JavaScript, React,
    Vue (brand colors above).
  - tutorials `div.site-section.bg-light` — top `row.mb-5.align-items-center`:
    left `col-lg-6` `form.search-form.d-flex` — `input[type=search].form-
control` (placeholder "Search subjects"; height 55px, bg `#efefef`, focus
    `#e2e2e2` + border `#0779e4`) + `input[type=submit].btn.btn-primary.px-4`
    value "Search"; right `col-lg-6` `text-lg-right` "Share:" label + three
    `.social-item` squares (facebook/twitter/linkedin icons, 40px white,
    hover blue). Below: `heading.mb-4` `.caption` "Latest" + `h2` "Tutorials";
    `col-lg-8` list of four `.tutorial-item` cards (`d-flex mb-4`, white,
    padding 20px, radius 4px, shadow `0 10px 20px rgba(0,0,0,0.1)`; `.img-wrap`
    fixed 250px + margin-right 30px; `h3` 20px link `#000`; lorem paragraph;
    brand icon row; `.meta` line; `p` with `.btn.btn-primary.custom-btn` "View"
    → `tutorial-single.html` (recreate as `#`/dead link)): "Learning React
    Native" (react + javascript icons), "Learning Angular 101" (angular +
    javascript), "Learning Photoshop" (photoshop), "Advance Illustrator"
    (illustrator); then `.custom-pagination` — `ul` of five inline items:
    circles 50×50, radius 50%, bg `#fff`, 20px text; active `span` bg
    `#0779e4` white ("1" active, then 2..5 links). Right `col-lg-4`: three
    `.box-side` cards (white, padding 20px, radius 4px, shadow
    `0 10px 20px rgba(0,0,0,0.1)`; full-width horizontal image with
    `margin-bottom: 20px` + `h3` 20px link — all titled "Learning React
    Native").
  - reviews `div.site-section.bg-light` — centered `col-lg-7` heading:
    `.caption` "Testimonials" + `h2` "Student Reviews"; `row` of three
    `col-lg-4 .testimonial-2` cards: white, `border-radius: 7px; padding:
30px; border-bottom: 4px solid #0779e4; box-shadow: 0 15px 30px
rgba(0,0,0,0.1)`; contents: `h3.h5` title ("Excellent Teacher!", "Best
    Video Tutorial!", "Easy to Understand!"), five `icon-star` glyphs with
    `text-warning` (`#ffc107`) — 4 filled + 1 `icon-star-o` outline,
    `blockquote.mb-4` lorem quote, `div.d-flex.v-card.align-items-center`:
    avatar image 50×50 `border-radius: 50%` + `.author-name` (name `d-block`
    — Mike Fisher / Jean Stanley / Katie Rose; role line `color: #ccc` —
    "Owner, Ford" / "Traveler" / "Customer").
  - footer `footer.site-footer` — `padding: 4em 0` (8em desktop); NO
    background rule → white (light footer; links `rgba(0,0,0,0.5)`, hover
    black; `.footer-heading` 16px `#000`; `ul li` margin-bottom 10px). Layout:
    `col-lg-3` About Us column — `h2.footer-heading.mb-4` "About Us" + lorem
    paragraph ("Far far away, behind the word mountains...") + `ul.social`
    of four 40px blue circles with white icons (facebook / instagram /
    twitter / linkedin); `col-lg-8.ml-auto` with four `col-lg-3` link
    columns — "Quick Links", "Resources", "Support", "Company", each with the
    same five links (About Us · Testimonials · Terms of Service · Privacy ·
    Contact Us); bottom `row.pt-5.mt-5.text-center` + `div.border-top.pt-5` —
    `border-top: 1px solid rgba(255,255,255,0.1)` (INVISIBLE on the white
    footer — see deviation note) + centered copyright "Copyright © <year>
    All rights reserved | This template is made with <i> by <Colorlib link>"
    (reword for Mentory; Colorlib credit → Component Dock link).
- **Inner pages:** the source ships separate pages (index, tutorials,
  testimonials, blog, about, contact, tutorial-single) and the nav targets
  them — NOT required; recreate the single index page only (nav links may be
  dead anchors `#` or in-page scroll targets).
- **Icons:** course/brand glyphs and social icons are icomoon font assets in
  the source — never copy the font files. Recreate with inline SVGs (e.g.
  simple-icons paths) for the brand marks and social icons; lucide-react
  removed brand icons (Facebook/Instagram/Linkedin/Twitter are `undefined`).
  Brand tile colors: Illustrator `#ff7c00`, Photoshop `#00c8ff`, Angular
  `#dd0031`, JavaScript `#f7df1e`, React `#61dafb`, Vue `#4fc08d`.
- **Deviation (footer divider):** `.site-footer .border-top` is
  `1px solid rgba(255,255,255,0.1)` — invisible on the white footer. Use a
  subtle visible divider (`#e9ecef`-style light grey 1px) and note it in the
  PR.

## Requirements

### Requirement: Transparent navbar over the hero

The system SHALL render an absolute transparent navbar over the hero with a
text logo, white nav links and a mobile off-canvas menu.

#### Scenario: Desktop navbar

- **GIVEN** the Mentory app is rendered
- **WHEN** the page loads
- **THEN** a navbar SHALL span the full width at the very top (absolute,
  transparent background, z-index above the hero)
- **AND** the left side SHALL show the brand as styled text "Mentory" (1.7rem,
  the first syllable/word weight 900)
- **AND** the right side SHALL list Home (active) · Tutorials · Testimonials ·
  Blog · About · Contact as white links with 15px horizontal margins and
  20px vertical padding, the active item with a white 2px underline
- **AND** the links SHALL remain readable white over the hero photo

#### Scenario: Mobile menu

- **GIVEN** a viewport narrower than the desktop breakpoint
- **WHEN** the hamburger button is clicked
- **THEN** a white off-canvas panel SHALL slide in from the right listing the
  same six links
- **AND** the toggle SHALL expose `aria-expanded` reflecting the open state
  and a close control SHALL dismiss the panel

### Requirement: Hero with workspace photo and centered headline

The system SHALL render a full-height hero photo with a dark overlay and a
centered white headline.

#### Scenario: Hero render

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL show a full-width background photo of a desk/workspace
  with a laptop (subject-critical: screen the picsum seed — see
  Verification checklist) at ~`calc(100vh - 196px)` height, min 577px
- **AND** a `rgba(0,0,0,0.3)` overlay SHALL darken the photo
- **AND** the centered headline "The Hub Of Tutorials" SHALL render white,
  ~3rem (2rem on mobile), line-height 1, with "Hub" and "Tutorials" in
  weight 900

### Requirement: Featured tutorials overlapping the hero

The system SHALL render a light-grey featured band whose white cards overlap
the hero's bottom edge.

#### Scenario: Featured cards

- **GIVEN** the featured section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have the `#f8f9fa` background and its card row
  SHALL pull up over the hero bottom by ~150px
- **AND** the left column SHALL show one large white card (shadow
  `0 15px 30px rgba(0,0,0,0.05)`) with a 260px thumbnail, a "Tutorial"
  uppercase category label, the title "Learning React Native" (black link),
  a lorem paragraph, a brand-icon row and a meta line "1hr 24m · Advanced ·
  Jun 18, 2020" in `#a6a6a6`
- **AND** the right column SHALL stack three smaller white cards, each with
  an 80px thumbnail, "Tutorial" label and a 16px title

### Requirement: Choose Course tiles

The system SHALL render six brand-icon course tiles in a heading-led white
section.

#### Scenario: Course tiles

- **GIVEN** the Choose Course section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL show the "Tutorial Courses" caption (12px
  uppercase 700, letter-spacing .2rem) and a 30px weight-700 blue `#0779e4`
  "Choose Course" title
- **AND** six equal-width tiles SHALL render side by side (Illustrator ·
  Photoshop · Angular · JavaScript · React · Vue), each with `#f8f9fa`
  background, 4px radius, a 40px brand-colored icon (Illustrator `#ff7c00`,
  Photoshop `#00c8ff`, Angular `#dd0031`, JavaScript `#f7df1e`, React
  `#61dafb`, Vue `#4fc08d`) and an 18px `#ccc` label
- **AND** hovering a tile SHALL flip it to a white background with a soft
  shadow and a black label

### Requirement: Tutorials list with search, share, pagination and sidebar

The system SHALL render the Tutorials section with a search/share row, four
tutorial cards, circular pagination and a thumbnail sidebar.

#### Scenario: Search and share row

- **GIVEN** the Tutorials section is rendered
- **WHEN** the top row loads
- **THEN** the left side SHALL show a search form with an input placeholder
  "Search subjects" (height 55px, `#efefef` background, focus `#e2e2e2` with
  blue border) and a blue `#0779e4` "Search" submit button
- **AND** the right side SHALL show a "Share:" label followed by three 40px
  white square social buttons (facebook / twitter / linkedin) that turn blue
  on hover

#### Scenario: Tutorial cards, pagination and sidebar

- **GIVEN** the tutorials list loads
- **THEN** the heading SHALL show the "Latest" caption and a blue "Tutorials"
  title
- **AND** four white cards SHALL list in the left column, each with a 250px
  thumbnail, 20px black title, lorem paragraph, brand-icon row, `#a6a6a6`
  meta line and an uppercase 12px blue "View" button: "Learning React Native"
  (React + JavaScript icons), "Learning Angular 101" (Angular + JavaScript),
  "Learning Photoshop" (Photoshop), "Advance Illustrator" (Illustrator)
- **AND** a pagination row SHALL render five 50px white circles (numbers 1–5)
  with the active page ("1") filled blue `#0779e4` with white text
- **AND** the right column SHALL stack three `.box-side` cards, each with a
  full-width horizontal thumbnail and a 20px black title

### Requirement: Student Reviews testimonials

The system SHALL render three testimonial cards with star ratings, quotes and
author avatars.

#### Scenario: Review cards

- **GIVEN** the Student Reviews section is rendered
- **WHEN** it loads
- **THEN** the centered heading SHALL show the "Testimonials" caption and a
  blue "Student Reviews" title
- **AND** three white cards SHALL render side by side, each with a 4px blue
  `#0779e4` bottom border, 7px radius and a soft shadow
- **AND** each card SHALL contain an `h3`-style title ("Excellent Teacher!",
  "Best Video Tutorial!", "Easy to Understand!"), five stars in Bootstrap
  warning amber `#ffc107` (four filled, one outline), a quoted lorem
  blockquote, and an author row with a 50px circular avatar and name + role
  (Mike Fisher "Owner, Ford" · Jean Stanley "Traveler" · Katie Rose
  "Customer", role in `#ccc`)

### Requirement: Light footer with link columns

The system SHALL render a light footer with an about column, social circles,
four link columns and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** the footer SHALL have a white/light background with dark slate
  text and `rgba(0,0,0,0.5)` links (hover black)
- **AND** the first column SHALL show a 16px black "About Us" heading, a
  lorem paragraph and four 40px blue circular social buttons (facebook /
  instagram / twitter / linkedin) with white icons
- **AND** four link columns SHALL follow — "Quick Links", "Resources",
  "Support", "Company" — each listing About Us · Testimonials · Terms of
  Service · Privacy · Contact Us

#### Scenario: Copyright bar

- **GIVEN** the footer's lower area loads
- **THEN** a divider (subtle light grey per the documented deviation) SHALL
  separate the copyright line
- **AND** the copyright line SHALL read "© 2026 Mentory. All rights
  reserved." with a "Made with Component Dock"-style credit linking
  `https://www.componentdock.com/` (replaces the Colorlib credit)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Mentory app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar in the banner landmark, the hero
  - featured + choose-course + tutorials + reviews sections in the main
    landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Mentory — Tutorial Website Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (nav
  collapses to the off-canvas menu, featured/tutorial/sidebar columns stack,
  course tiles wrap, testimonial and footer columns stack to one per row)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/mentory`
      (`scripts/verify-app.sh mentory` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: navbar (transparent over hero, white "Mentory" logo +
      six links, active underline), hero (workspace-desk photo, 0.3 overlay,
      centered white "The Hub Of Tutorials" with 900-weight "Hub"/"Tutorials"),
      featured (grey band, cards overlapping hero bottom ~150px: one big
      260px-thumb card + three small 80px-thumb cards), Choose Course (six
      brand-color tiles, grey→white hover flip), Tutorials (search form +
      Share row, four cards with View buttons, five-circle pagination with
      blue active, three sidebar thumbnails), Student Reviews (three white
      cards with blue bottom borders, amber stars, circular avatars), footer
      (light, about + social circles + four link columns + copyright with
      Component Dock link) match the Tutor preview 1:1.
- [ ] Design tokens in `@theme`: primary blue `#0779e4` (hover `#0665bf`),
      body `#364d59`, meta `#a6a6a6`, light section `#f8f9fa`, form control
      `#efefef`/`#e2e2e2`, star amber `#ffc107`, footer link
      `rgba(0,0,0,0.5)`; Raleway via Google Fonts `<link>` in `index.html`
      (300/700/900).
- [ ] Buttons: primary = `#0779e4` white text, uppercase 12px 700
      letter-spacing .1rem for "View" (`.custom-btn`); "Search" = plain
      `btn-primary`; nav active = white underline over the hero.
- [ ] Placeholder images use `picsum.photos/seed/mentory-<n>/<w>/<h>` (hero,
      featured/tutorial/sidebar thumbnails, testimonial avatars); the HERO
      seed is subject-critical (desk/workspace with laptop) — screen
      candidates first (curl 480x270 + pixel metric or browser_vision, per
      the colorlib-template-replication skill) and pin the verified seed in
      the spec/docs; icons: inline SVG brand marks (simple-icons paths) for
      course tiles + socials — lucide-react removed brand icons; no ColorLib
      assets copied.
- [ ] PR description states source template (ColorLib "Tutor"), preview URL
      (https://preview.colorlib.com/theme/tutor/), design tokens, and what
      differs (name, placeholders, paraphrased copy, single index page only —
      inner pages not recreated, invisible footer divider → subtle grey).
