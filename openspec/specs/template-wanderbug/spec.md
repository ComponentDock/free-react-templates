# Template: Wanderbug (Travel Tour & Events Template)

## Purpose

Wanderbug is a single-page travel tour & events website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Tralive" travel template (see TEMPLATES.md, Travel section,
line 3002), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a bright, playful travel page anchored by a flat illustrated
beach hero — pastel periwinkle mountains, palm-tree silhouettes, a pale
pink sun, and a yellow retro camper bus on a dark sand foreground — with a
centered navy headline "Lifelong memories just a few seconds away" where the
second line carries a thick yellow highlighter underline. The navbar is white
(wordmark left, Josefin Sans links right, yellow phone CTA button) and turns
into a fixed white bar with shadow on scroll. Below the hero: an "Upcoming
Events" carousel of 4 destination cards (image on top, caption card below
with tour name, periwinkle price, date + duration); a split About section
(illustration left, "About Us" eyebrow + "Get ready for real time adventure"
heading + paragraph + yellow "Book Your Destination" button right); a
testimonial slider over a soft background image ("What customers say" +
quote + circular founder portrait + name); an FAQ accordion ("Full range of
travel service", periwinkle `btn-link` titles); a rounded video CTA band
("Watch our last tour" + play icon over a background image); a full-width
Instagram image strip with yellow hover overlay + icon; and a dark navy
gradient footer (logo + blurb + social icons, Navigation, Services, Contact
Us columns) closing with a centered copyright line whose link the recreation
points to Component Dock.

The design is anchored by one signature contrast — navy `#00095e` (dark
buttons, headings, footer) against yellow `#ffc800` (phone CTA, hero
highlighter, social hover) — with periwinkle `#7ea0ff` as the recurring
accent (section eyebrows, card prices, FAQ links, footer accents).

Brand colors: navy `#00095e` (headings, nav links, hero button gradient
start, hero subtext); button/footer gradient darks `#0c0c1f` (button
gradient end) and `#0c1534` (footer gradient end); indigo `#1f2b7b` (generic
accents, bold text); periwinkle `#7ea0ff` (eyebrows, prices, accordion
links, nav hover underline, copyright heart); yellow `#ffc800` (header phone
button, hero highlight bar, footer copyright link, instagram hover overlay
`rgba(255,200,0,0.6)`, footer social hover); footer gradient start `#1a2d6d`
(135deg → `#0c1534`); body grey `#677f8b`; footer text `#8a8fbe`; light
panel `#f9f9ff`; card shadow `rgba(0,9,94,0.06)`. Fonts: Josefin Sans
(300–700) for ALL headings and nav links — hero h1 60px/700 (`#00095e`,
line-height 1.2), section h2 50px/700, event card titles 22px/700; Roboto
(300–900) for body (16px, `#677f8b`), hero subtext (20px `#00095e`), and
buttons (500, 16px). Buttons are rounded 5px: yellow solid default with a
navy gradient overlay that slides up on hover (`btn::before` scaleY);
the hero CTA is solid navy gradient `#00095e → #0c0c1f` that flips to
yellow on hover; the navbar phone button is solid yellow with a phone icon.
Cards use 5px radii (image top corners, caption bottom corners) and the
video band uses a 20px radius.

## Design reference (replication findings)

- **Original:** ColorLib "Tralive" — travel tour & events template
  (source: https://colorlib.com/wp/template/tralive/). Listed in
  TEMPLATES.md `## Travel` at line 3002; slug appears exactly once.
- **Live preview URL:** https://preview.colorlib.com/theme/tralive/
  (HTTP 200, 30,976 bytes, verified 2026-10-01; theme stylesheet
  `assets/css/style.css`, 61,287 bytes). HTML saved to `/tmp/tralive.html`;
  theme CSS saved to `/tmp/tralive-style.css`. The preview DOM is
  authoritative for section order and copy; the screenshot
  (`tralive-free-template.jpg`, reviewed visually) is authoritative for the
  hero treatment: white navbar with rounded yellow logo mark + "Tralive"
  wordmark, nav links (Home, Events, About, Blog, Contact) and a yellow
  phone button "+10 (67) 678 2567"; centered navy headline with the yellow
  highlighter bar behind "few seconds away"; small navy subtext; solid navy
  "Explore Destinations" button; below it a full-width flat illustration —
  pale blue layered mountains, palm trees, pink sun, dark sand foreground,
  and a yellow retro camper bus with roof luggage; then a periwinkle
  eyebrow "Check Our Best Promotional Tour" and navy "Upcoming Events"
  heading.
- **Stylesheets in the reference:** `bootstrap.min.css`, `owl.carousel.min.css`,
  `slicknav.css`, `animate.min.css`, `magnific-popup.css`,
  `fontawesome-all.min.css`, `themify-icons.css`, `slick.css`,
  `nice-select.css`, `style.css` (theme — canonical tokens). Icon fonts
  (Font Awesome + Themify), owl carousel, slick, magnific popup, nice-select
  and animate.css are NEVER copied: recreation uses lucide-react icons and
  React-state sliders/accordions. The theme CSS opens with a Google Fonts
  `@import` for `Josefin Sans:wght@300;400;500;600;700` and
  `Roboto:wght@300;400;500;700;900`; load both via Google Fonts `<link>` in
  `index.html`.
- **Key theme rules (verified in style.css):**
  - `h1..h6 { font-family:"Josefin Sans",sans-serif; color:#00095E; font-weight:500 }`
  - `body { font-family:"Roboto",sans-serif; font-size:16px }`;
    `p { color:#677F8B; line-height:1.4 }`
  - `.slider-area .hero__caption h1 { color:#00095E; font-size:60px; font-weight:700; line-height:1.2 }`
    (50px @lg, 40px @md, 22px @sm); `h1 dd` = inline-block with
    `dd::before { height:11px; background:#FFC800; width:97%; top:58%; z-index:-1 }`
    — the highlighter underline
  - `.slider-area .hero__caption p { font-size:20px; color:#00095E; font-family:"Roboto"; margin-bottom:40px }`
  - `.slider-height { height:880px }` (550/400/300 responsive);
    `.slider-bg1 { background-image:url(../img/hero/h1_hero1.png); background-position:top center; background-size:cover; margin-top:-50px }`
    — full-bleed beach illustration under the caption; the `car.png` bus
    sits bottom-right with a `running` nudge animation
    (`@keyframes nudge` translates ±100px over 10s alternate)
  - `.btn { background:#FFC800; color:#fff; padding:30px 43px; border-radius:5px; font-weight:500; font-size:16px }`;
    `.btn::before` = overlay sliding up on hover
    (`transform:scaleY(0)→1`, `transform-origin:0 0`);
    `.btn.slider-btn` (hero) + `.btn::before` +
    `.main-menu ul ul.submenu` share
    `background:linear-gradient(to bottom, #00095e 0%, #0c0c1f 100%)`;
    `.btn.slider-btn:hover::before { background:#FFC800 !important }`
  - `.header-btn { background:#FFC800; color:#fff; border-radius:5px; padding:13px 30px; font-weight:500 }`
    with a phone icon (`i { padding-right:9px }`)
  - `.header-area .main-menu ul li a { color:#00095E; font-family:"Josefin Sans"; font-weight:500; font-size:16px; padding:39px 2px }`
    with a growing `#7EA0FF` 2px underline on hover; submenu links are white
    on the navy gradient; `.header-sticky.sticky-bar { background:#fff }`
    (sticky white bar on scroll)
  - `.section-padding { padding-top:120px; padding-bottom:100px }`;
    `.section-tittle > span { color:#7EA0FF; font-size:16px; letter-spacing:0.05em; text-transform:capitalize }`;
    `.section-tittle h2 { font-size:50px; font-weight:700 }`
  - Event cards: `.single-cat .cat-img { border-radius:5px 5px 0 0; overflow:hidden }`
    with image `scale(1.05)` on hover; `.cat-cap { border-radius:0 0 5px 5px;
    padding:30px 20px 30px 23px; box-shadow:0 10px 15px rgba(0,9,94,0.06) }`;
    `.pricing h3 a { color:#00095E; font-family:"Josefin Sans"; font-size:22px; font-weight:700 }`;
    `.pricing .price { font-size:22px; font-weight:700; color:#7EA0FF }`;
    `.cat-cap p { color:#00095E; font-size:14px; font-weight:500 }` (date link
    + duration)
  - `.support-company-area` split: image `col-xl-6` left, caption
    `col-xl-5` right; `.btn.about-btn { padding:30px 40px }` (yellow `.btn`)
  - `.testimonial-area.testimonial-padding { padding:139px 0 130px }` over a
    cover background image (`.section-img-bg2`); slider quotes with circular
    founder portrait + `<span>` name (reference: "Mark Anthony")
  - FAQ (`.project-us`): accordion cards with `.btn-link { color:#7EA0FF }`
    collapsed titles and body paragraphs; section eyebrow "FAQ" + h2
    "Full range of travel service"
  - `.video-area { height:560px; border-radius:20px }` over a cover
    background image; centered play icon (svg) + white
    `h3 "Watch our last tour"`; popup-video link in the original — the
    recreation omits the popup
  - Instagram strip: full-width (`container-fluid p-0`) owl carousel of 6
    images; `.single-instagram::before` yellow overlay
    `rgba(255,200,0,0.6)` fades in on hover with a centered white icon
  - `.footer-wrapper { background:linear-gradient(135deg, #1a2d6d 0%, #0c1534 100%) }`;
    `.footer-padding { padding-top:114px }`; footer h4 white Roboto 17px/700;
    `.footer-pera p { color:#8A8FBE; font-size:16px; line-height:1.8 }`;
    `.footer-social a { color:#fff; font-size:22px; padding:9px }` with
    hover `color:#FFC800; top:-5px`; `.number a { font-size:22px; color:#FFC800 }`
    (phone); footer-bottom centered copyright — `.footer-copy-right p i`
    (heart) `#7EA0FF`, `.footer-copy-right p a` (attribution link)
    `#FFC800`; recreation links "Component Dock"
- **DOM skeleton (section order 1:1, from preview HTML):**
  1. `div.header-area > div.main-header.header-sticky` — logo (left),
     `main-menu`: Home · Events · About · Blog (dropdown: Blog, Blog
     Details, Events Details, Element) · Contact, then yellow `header-btn`
     phone "+10 (67) 678 2567". Sticky → white bar with shadow on scroll.
  2. `div.slider-area` — `hero__caption`: h1 "Lifelong memories just a
     `<dd>`few seconds away`</dd>`", p "Let's start your journey with us,
     your dream will come true", navy `.btn.slider-btn` "Explore
     Destinations"; below, `car-img slider-bg1` full-bleed illustration band
     (880px desktop) with the yellow bus bottom-right + nudge animation.
  3. `section.services-section` — eyebrow "Check Our Best Promotional Tour"
     + h2 "Upcoming Events"; `services-active` carousel, 4 `single-cat`
     cards (3-up desktop): image, then caption row — h3 tour name
     (Mega Turkey · Finlande · Spitzberg · Mega Turkey) + `span.price`
     "$1200", then "12 Jan - 18 Jan" date link + "5 Days".
  4. `div.support-company-area` — left illustration (`about.png`), right:
     eyebrow "About Us", h2 "Get ready for real time adventure", paragraph,
     yellow `.btn.about-btn` "Book Your Destination".
  5. `div.testimonial-area.section-img-bg2` — h2 "What customers say"
     (centered) + slider of `single-testimonial`: quote paragraph, founder
     portrait (circular), name span (reference: "Mark Anthony"); prev/next
     slick arrows.
  6. `section.project-us` — eyebrow "FAQ" + h2 "Full range of travel
     service"; 4 accordion cards with `.btn-link` titles ("Starts the
     automated process." / "The automated process starts." / "Automated
     process starts." / "Process the automated magic.") and body paragraphs.
  7. `div.video-area.section-img-bg2` — 560px rounded (20px) band over a
     cover image; centered play icon + white h3 "Watch our last tour".
  8. `div.instagram-area` — full-width carousel, 6 images
     (`instra1..6.jpg`, cycled), yellow hover overlay + instagram icon.
  9. `div.footer-wrapper > div.footer-area` — 4 columns: (1) footer logo +
     blurb + social icons (twitter / facebook / linkedin / pinterest
     squares); (2) "Navigation" — Home, About, Services, Blog, Contact;
     (3) "Services" — Blackforest + tour links; (4) "Contact Us" — address
     "76/A, Green Lane, Dhanmondi, NYC", email "demomail89@gmail.com", yellow
     phone. `footer-bottom-area`: border-top, centered "Copyright © <year>
     All rights reserved | This template is made with ♥ by <a>"
     — recreation: "…made with ♥ by Component Dock" linking
     https://www.componentdock.com/.

## Requirements

### Feature: Navbar

The header must present the template's brand, navigation, and a phone CTA,
and stick to the top on scroll.

#### Scenario: Desktop navigation renders brand, links, and phone CTA
- **Given** the page loads on a desktop viewport
- **When** the header is rendered
- **Then** the left side shows the Wanderbug logo mark + wordmark
- **And** the menu shows Home, Events, About, Blog (with a dropdown), and
  Contact links in Josefin Sans, navy `#00095e`
- **And** the right side shows a yellow `#ffc800` phone button (5px radius,
  phone icon + "+10 (67) 678 2567")

#### Scenario: Blog dropdown opens on hover/focus
- **Given** the desktop header is visible
- **When** the user hovers (or keyboard-focuses) the Blog item
- **Then** a submenu opens with white links on a navy gradient
  (`#00095e → #0c0c1f`) panel (reference items: Blog, Blog Details, Events
  Details, Element — recreation keeps a reduced, sensible set)

#### Scenario: Header becomes a sticky white bar on scroll
- **Given** the page is scrolled past the hero start
- **When** the scroll position triggers the sticky state
- **Then** the header is fixed at top with a white background and a soft
  shadow, and nav-link padding tightens (39px → 20px vertical)

#### Scenario: Mobile layout collapses to a hamburger
- **Given** the viewport is below the lg breakpoint
- **When** the header renders
- **Then** the desktop menu is hidden and a hamburger button (lucide
  Menu/X) toggles the nav panel, with `aria-expanded` reflecting state

### Feature: Hero

A centered headline over a full-bleed flat beach illustration with a
signature yellow highlighter underline and a navy CTA.

#### Scenario: Hero headline, subtext, and CTA render as in the reference
- **Given** the page loads
- **When** the hero renders
- **Then** the h1 reads "Lifelong memories just a few seconds away" in
  Josefin Sans 700, navy `#00095e` (60px desktop → responsive down to
  ~22px mobile)
- **And** the phrase "few seconds away" carries a thick yellow `#ffc800`
  highlighter bar behind it (11px tall, ~top 58%, behind the text)
- **And** the subtext "Let's start your journey with us, your dream will
  come true" renders in Roboto 20px navy
- **And** a navy gradient button (`#00095e → #0c0c1f`, 5px radius) reads
  "Explore Destinations" and flips to yellow on hover

#### Scenario: Full-bleed illustrated beach band with animated bus
- **Given** the hero is rendered
- **When** the illustration band is visible
- **Then** a full-width flat illustration (picsum placeholder seeded per
  template, or a CSS-illustrated stand-in) shows the beach/mountain scene
  ~880px tall on desktop (responsive down to ~300px)
- **And** a camper-bus illustration sits toward the bottom-right with a
  gentle horizontal nudge animation (±100px over 10s, alternate)

### Feature: Upcoming Events

A 3-up (desktop) carousel of destination cards with price, date, and
duration.

#### Scenario: Section header matches the reference copy pattern
- **Given** the events section renders
- **When** the section title block is visible
- **Then** the periwinkle `#7ea0ff` eyebrow reads "Check Our Best
  Promotional Tour"
- **And** the navy Josefin Sans h2 reads "Upcoming Events"

#### Scenario: Event cards show image, name, price, date, and duration
- **Given** the events section renders
- **When** the cards are displayed
- **Then** there are 4 cards, each with: image on top (5px top corners,
  zoom ~1.05 on hover), caption card below (5px bottom corners, soft
  shadow `rgba(0,9,94,0.06)`)
- **And** each caption shows the tour name (Josefin Sans 22px/700 navy —
  e.g. Mega Turkey, Finlande, Spitzberg), a periwinkle `#7ea0ff` price
  (e.g. $1200), the date range "12 Jan - 18 Jan", and "5 Days"

#### Scenario: Cards flow as a carousel on smaller viewports
- **Given** the events section renders on tablet/mobile
- **When** the viewport shrinks
- **Then** cards reflow to 2-up / 1-up and remain horizontally scrollable
  as a carousel (React state, no owl-carousel)

### Feature: About / Book CTA

A split section pairing an illustration with the adventure pitch.

#### Scenario: Split layout renders image left, caption right
- **Given** the about section renders
- **When** the section is visible
- **Then** the left column (~50%) shows a flat travel illustration
  (picsum placeholder)
- **And** the right column shows the periwinkle eyebrow "About Us", the
  navy Josefin Sans h2 "Get ready for real time adventure", a paragraph in
  the same "Let's start your journey…" voice, and a yellow `#ffc800`
  button "Book Your Destination" (5px radius, navy-gradient hover)

### Feature: Testimonials

A quote slider over a soft background image.

#### Scenario: Testimonial slider renders quote, portrait, and name
- **Given** the testimonials section renders
- **When** the slider is visible
- **Then** the centered navy h2 reads "What customers say"
- **And** the section sits over a cover background image (picsum seed) with
  generous vertical padding (~139px/130px desktop)
- **And** each slide shows a quote paragraph ("Let's start your journey
  with us…"), a circular founder portrait, and a name (reference: Mark
  Anthony)
- **And** prev/next controls advance slides via React state

### Feature: FAQ Accordion

An accordion of service questions under a periwinkle link-styled title.

#### Scenario: FAQ section renders eyebrow, heading, and accordion
- **Given** the FAQ section renders
- **When** the section is visible
- **Then** the periwinkle eyebrow reads "FAQ" and the navy h2 reads "Full
  range of travel service"
- **And** 4 accordion items render with periwinkle `#7ea0ff` titles in the
  reference's voice ("Starts the automated process.", "The automated
  process starts.", "Automated process starts.", "Process the automated
  magic.") and a body paragraph each

#### Scenario: Accordion interaction expands a single item
- **Given** the FAQ accordion is collapsed
- **When** the user clicks an item title
- **Then** that item's body expands (button semantics, `aria-expanded`)
- **And** clicking it again collapses it

### Feature: Video CTA

A rounded full-width band with a play affordance.

#### Scenario: Video band renders play icon and heading
- **Given** the video section renders
- **When** the band is visible
- **Then** it is ~560px tall (responsive), rounded 20px, with a cover
  background image (picsum seed)
- **And** a centered white circular play icon (lucide Play) sits above the
  white Josefin Sans h3 "Watch our last tour"
- **And** the play control is a button with an accessible label (no external
  popup video in the recreation)

### Feature: Instagram Strip

A full-width image strip with yellow hover overlay.

#### Scenario: Six-image strip renders edge to edge
- **Given** the instagram section renders
- **When** the strip is visible
- **Then** 6 images (picsum seeds `wanderbug-insta-1..6`, cycled like the
  reference) display full-bleed (container-fluid, no side padding) in a
  responsive row/carousel

#### Scenario: Hover shows yellow overlay and icon
- **Given** the strip renders
- **When** the user hovers (or focuses) an image
- **Then** a yellow overlay `rgba(255,200,0,0.6)` fades in with a centered
  white instagram icon (lucide Instagram)

### Feature: Footer

A dark navy gradient footer with brand, link columns, contact info, and
copyright.

#### Scenario: Footer columns render as in the reference
- **Given** the footer renders
- **When** the footer is visible
- **Then** the background is the navy gradient `linear-gradient(135deg,
  #1a2d6d 0%, #0c1534 100%)` with ~114px top padding
- **And** column 1 shows the footer logo, a blurb paragraph (`#8a8fbe`),
  and 4 social icon links (lucide Twitter/Facebook/Linkedin/Pinterest
  stand-ins) that turn yellow `#ffc800` and lift on hover
- **And** column 2 "Navigation" lists Home, About, Services, Blog, Contact
- **And** column 3 "Services" lists tour/service links (e.g. Blackforest …)
- **And** column 4 "Contact Us" shows the address "76/A, Green Lane,
  Dhanmondi, NYC", email "demomail89@gmail.com", and a yellow phone link

#### Scenario: Copyright line links Component Dock
- **Given** the footer renders
- **When** the footer-bottom line is visible
- **Then** it reads "Copyright © <current year> All rights reserved | This
  template is made with ♥ by Component Dock"
- **And** "Component Dock" links to https://www.componentdock.com/ (yellow
  `#ffc800` link, periwinkle heart)

### Feature: Design tokens & typography

#### Scenario: Theme tokens match the reference palette
- **Given** the app's `src/index.css` theme
- **When** tokens are defined
- **Then** `@theme` includes at least: navy `#00095e`, navy-deep `#0c0c1f`,
  indigo `#1f2b7b`, periwinkle `#7ea0ff`, yellow `#ffc800`, footer-start
  `#1a2d6d`, footer-end `#0c1534`, body `#677f8b`, footer-text `#8a8fbe`,
  light `#f9f9ff`
- **And** headings use Josefin Sans, body/buttons use Roboto (Google Fonts
  `<link>` in index.html)

## Verification checklist

- [ ] Spec exists at `openspec/specs/template-wanderbug/spec.md`; app will
      be `apps/wanderbug`, package `@free-react-templates/wanderbug`
- [ ] No occurrence of the source slug/name ("tralive"/"Tralive") in any
      app file — provenance lives only in this spec and the PR
- [ ] Footer links https://www.componentdock.com/ ("Component Dock") and
      nowhere else external; `public/CNAME` =
      `wanderbug.free.componentdock.com`; `homepage` matches
- [ ] `@theme` tokens as listed above; Josefin Sans + Roboto loaded via
      Google Fonts `<link>`
- [ ] Section order 1:1 with the DOM skeleton (navbar → hero + bus band →
      upcoming events → about → testimonials → FAQ → video → instagram →
      footer)
- [ ] Hero h1 highlighter underline (`#ffc800` bar behind "few seconds
      away"); hero CTA navy gradient flipping to yellow on hover
- [ ] Event cards: 4 items, name + periwinkle price + date + duration,
      5px radii, hover image zoom, shadow caption
- [ ] FAQ accordion keyboard-accessible (`button`, `aria-expanded`);
      testimonial/video/instagram carousels via React state
- [ ] Sticky white header with shadow on scroll; mobile hamburger with
      `aria-expanded`
- [ ] Images are picsum placeholders (seeded `wanderbug-*`); icons from
      lucide-react; no copied assets/fonts/CSS
- [ ] `npm run spec:validate` reports no errors for this spec
- [ ] Implementer runs `scripts/verify-app.sh wanderbug` (typecheck + lint +
      100% coverage tests + build) before PR
