# Template: Stills (Photography Portfolio)

## Purpose

Stills is a single-page photography-portfolio website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Boto" design (see TEMPLATES.md — line 350, first unchecked
item whose prep did not exist on main), built under the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, minimalist, editorial photography portfolio: a
white page with a three-part header (social icons left, centered bold black
"#Boto" wordmark logo, search/hamburger/cart switches right) and a centered
uppercase menu below (Home active, About, Gallery, Blog with a dropdown,
Contact) where the active/hover link is marked by a thick green underline
bar; a full-width hero photo slider in "center mode" (one large centered
photo with the adjacent photos peeking in at the sides, auto-advancing
every 3s, synced to a caption line below — photo title like "Nature" plus
the "Photography" subtitle); and a single centered copyright bar as the
footer. Stills recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Boto" — free photography HTML template
  (source: https://colorlib.com/wp/template/boto/). Single-page homepage
  with subpages (about.html, gallery.html, blog.html, blog-single.html,
  contact.html) linked from the nav; the recreation ships the homepage only
  (nav links are `#` anchors/placeholders unless noted).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/boto/`
  (HTTP 200, 6.4KB) + stylesheets `css/style.css` (15.9KB), plus
  `css/slick.css` (carousel), `css/slicknav.min.css` (mobile menu),
  `css/fresco.css` (lightbox), `css/bootstrap.min.css`, and
  `css/font-awesome.min.css` (icons). The rendered DOM is the reference
  below; the TEMPLATES.md screenshot (`boto-photography-website-template.jpeg`,
  1200×946) confirms the visual design: a stark white portfolio page — thin
  top strip with Facebook/Twitter/Instagram icons on the left and
  search/cart icons on the right, the brand "#Boto" centered below in large
  bold black sans-serif, then a centered uppercase nav (HOME highlighted
  with a green marker); the main area is a row of five photos where the
  center image is large (a lavender field under a starry Milky Way night
  sky), the left shows a photographer holding a camera and an abstract neon
  swirl, the right shows a moody blue-lit portrait and a dark portrait with
  blue/purple star-speckle lighting; under the center image the caption
  "Nature / Photography" appears; the footer is a simple centered copyright
  line. Aesthetic: elegant, gallery-like, white/black/gray with a bright
  green (#8DB952) accent while the photos themselves supply the color.
- **Section order (1:1) from the preview DOM:**
  1. `div#preloder` (page preloader): fixed full-screen white overlay
     (z-index 999999) with `.loader` — a 40px circle, border 4px, animated
     rotation with border-color cycling #f44336 → #673ab7 (left border
     transparent). Decorative; the React page loads instantly so this can
     be omitted (note the choice).
  2. `header.header` (padding 40px 45px 0; 40px 0 0 on ≤576px) >
     `div.container-fluid` > `div.row`:
     - `div.col-sm-4.col-md-3.order-2.order-sm-1` > `div.header__social`:
       3 × `a` (16px, color #222222, margin-right 15px): `i.fa.fa-facebook`,
       `i.fa.fa-twitter`, `i.fa.fa-instagram`. Hidden entirely on ≤576px.
     - `div.col-sm-4.col-md-6.order-1.order-md-2.text-center` >
       `a.site-logo` > `img` (logo.png, 102×41, bold black "#Boto"
       wordmark, hash prefix included).
     - `div.col-sm-4.col-md-3.order-3.order-sm-3` > `div.header__switches`
       (text-align right; center + padding-top 20px on ≤576px): 3 × `a`
       (16px, #222222, margin-right 15px): `a.search-switch` (fa-search),
       `a.nav-switch` (fa-bars — display none on desktop; on ≤576px shown
       as a 40px circle, background #e1e1e1, centered), `a` (fa-shopping-
       cart).
     - `nav.main__menu` (position relative, padding-top 25px, text-align
       center) > `ul.nav__menu`: 5 × `li` (inline-block) > `a`: Home
       (class `menu--active`), About, Gallery, Blog (li wraps
       `ul.sub__menu` dropdown with one item "Blog Single"), Contact.
       Links: font-size 16px, color #7E858B, weight 700, uppercase,
       padding 5px 2px, margin-right 40px (20px on 576–767px, 0 for last).
       `a:after` = highlight bar: position absolute, height 6px, left 0,
       bottom 8px, background #8DB952, z-index -1, width 0 → 100% on
       `.menu--active` / `li:hover` (transition 0.3s). Active/hover link
       color → #222222. Submenu: absolute, top 100% (50px → 15px gap on
       hover via margin-top transition), width 170px, padding 10px 0,
       white bg, box-shadow 0 9px 50px rgba(0,0,0,0.1), opacity/visibility
       toggled, a 25px-tall invisible `:after` bridge above it; links
       14px weight 700 color #7E858B, hover #222222. On ≤576px the
       `ul.nav__menu` is hidden and slicknav builds the mobile menu
       (off-canvas list; `slicknav_btn` hamburger).
  3. `section.hero__section` (padding-top 120px, margin-bottom 90px;
     padding-top 30px on ≤576px):
     - `div.hero-slider` (slick carousel; main.js config: dots false,
       infinite true, speed 300, slidesToShow 1, centerMode true,
       variableWidth true, autoplay true (3000ms, pauseOnHover false),
       `asNavFor: '.hero-text-slider'`, mouse-wheel scroll → prev/next,
       click on a slide → `slickGoTo` that index): 7 × `div.slide-item`
       (padding 0 5px, outline none, cursor pointer) > `a.fresco`
       (lightbox trigger, data-fresco-group "projects") > `img`
       (height 570px, padding 65px 0, transition 0.4s; `.slick-center
.slide-item img` padding 0 — the centered slide renders full
       height, neighbors are cropped by the variable-width track). Images
       are img/hero-slider/1..7.jpg.
     - `div.hero-text-slider` (slick: dots false, infinite false, speed
       300, arrows false, `asNavFor: '.hero-slider'`; text-align center,
       padding-top 50px, max-width 800px, margin 0 auto): 7 ×
       `div.text-item`: `h2` slide title (inherits h2: font-size 36px,
       line-height 1.4, Arimo 700, #222222) + `p` "Photography" (16px,
       #7E858B, line-height 1.8). Titles in order: "Nature", "Red
       Heartbeat", "Blue Dreem", "Christian Church", "Red Darkness",
       "Beauty with Brain", "Remarkable".
  4. `footer.footer__section` > `div.container` >
     `div.footer__copyright__text` (text-align center, padding-bottom 5px):
     `p` 16px — "Copyright © [year] All rights reserved | This template is
     made with [heart] by Colorlib" (`i.fa.fa-heart` color #d32a2a; the
     Colorlib `a` color #7E858B, underline, hover #8DB952) → replace with
     the repo-standard footer credit.
  5. `div.search-model` (display none; fixed full-screen white overlay,
     z-index 99999) > centered wrapper > `div.search-close-switch` (a 50px
     circle, background #333, white 39px glyph, border-radius 50%,
     transform rotate(45deg) so "+" reads as "×", positioned top 30px) +
     `form.search-model-form` > `input#search-input` (width 500px, font-
     size 34px, border none, border-bottom 2px solid #ededed, background
     transparent, color #999, placeholder "Search here....."). Toggled by
     the header search switch. Optional interactive element — include if
     straightforward (note the choice).
- **Design tokens extracted from `css/style.css` + main.js:**
  - Brand color: **#8DB952** (muted olive-green) — the single accent: nav
    active/hover highlight bar (6px, z-index -1 under the text), `.site-btn`
    background, footer link hover. Put in `@theme` (e.g. `--color-brand`).
  - Fonts: **Arimo** (Google font) for body AND headings; headings weight
    700, color #222222; body `p` 16px, #7E858B, line-height 1.8. Raleway
    appears only on subpage blog tags (not the homepage). The preview HTML
    does not link Google Fonts (falls back to system sans); Arimo is the
    intended typeface — load it via `<link>` in `index.html` per
    replication.md, or keep the repo default sans stack (note the choice).
  - Colors: **#222222** (headings, nav active/hover, social + switch
    icons, logo wordmark); **#7E858B** (body text, nav idle links, footer
    link color); **#ffffff** (page/section backgrounds, preloader);
    **#e1e1e1** (mobile nav-switch circle bg); **#ededed** (search input
    bottom border); **#999999** (search input text); **#d32a2a** (footer
    heart icon); **#f44336** / **#673ab7** (preloader spinner border).
  - Buttons: `.site-btn` (subpage CTA, not on the homepage) — background
    #8DB952, white 700 16px text, padding 16px 15px, min-width 180px,
    line-height 1, border-radius 2px, hover keeps white text.
  - Shapes: nav highlight bar 6px tall (the signature "marker" device);
    nav-switch 40px circle (bg #e1e1e1); search close 50px circle (bg
    #333); site-btn radius 2px; slider photos 570px tall with 65px
    vertical padding (center slide padding 0).
  - Section backgrounds: the whole page is white; the hero is a photo
    slider on white (no dark overlay, no color band); footer white with
    centered text. Subpage sections (about/gallery/blog/contact) are also
    white — not recreated.
  - Spacing: header padding 40px 45px 0; main__menu padding-top 25px; nav
    link margin-right 40px; hero section padding-top 120px / margin-bottom
    90px; slide img vertical padding 65px; hero-text-slider padding-top
    50px / max-width 800px; footer copyright centered, padding-bottom 5px.
- **Recreation decisions:**
  - Header: three-part Bootstrap-style grid row (socials left / logo
    center / switches right) implemented with flex/grid; wordmark "#Stills"
    in bold black sans (102×41-proportioned) matching the original's
    hash-prefixed logo; the cart icon is decorative (no store) — keep as a
    plain icon link or drop it (note the choice).
  - Desktop menu: centered uppercase links with the green 6px underline
    marker on active + hover; Blog keeps a dropdown (single "Blog Single"
    item, white panel with soft shadow) or is simplified — note the choice.
    Subpage links become `#` anchors on the single page.
  - Mobile (≤576px): social icons hidden, hamburger appears as a 40px
    #e1e1e1 circle, menu collapses behind a hamburger/off-canvas panel
    (slicknav-style list) — implement with a simple state toggle.
  - Hero: hand-rolled center-mode carousel (React state, no slick
    dependency): 7 photos, one large centered slide with neighbors
    partially visible, ~3s autoplay, click + prev/next affordance, and a
    synced caption (title + "Photography") below. Fresco lightbox →
    optional simple modal or no-op (note the choice).
  - Search modal: optional; full-screen white overlay, large input with a
    2px #ededed bottom border and circular #333 close button, toggled by
    the header search icon. Include only if straightforward.
  - Preloader omitted (React app renders instantly) — note in PR.
  - Icons: lucide-react (search, menu, shopping-cart, x) + inline SVG
    brand icons (facebook, twitter, instagram) per repo convention
    (font-awesome is not copyable).
  - All photos picsum-seeded (`picsum.photos/seed/stills-N/w/h`); the
    center slide should be portrait-oriented (~570px tall) to match the
    original's crop.
  - Footer: single centered copyright bar with the repo-standard credit
    (heart icon in #d32a2a optional).
- **Fidelity rules honored:** section structure + order 1:1; design tokens
  (green #8DB952 accent, Arimo sans, uppercase bold nav, black-on-white
  editorial look, 6px highlight bars, 2px-radius buttons) matched; layout
  matched (3-part header, centered menu, center-mode photo slider, synced
  captions, centered copyright); no ColorLib assets copied; text
  paraphrased with the same kind of content (slide titles are the
  original's placeholder photo names — keep or rename, same kind).

Stills lives in `apps/stills` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn) where they fit.

## Requirements

### Requirement: Header

The system SHALL render a three-part header with social icons, a centered
logo wordmark, and utility switches.

#### Scenario: Header content

- **GIVEN** the Stills page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show Facebook, Twitter, and Instagram icon links on the
  left in dark (#222222) 16px glyphs
- **AND** it SHALL show the site wordmark "#Stills" centered in bold black
  sans-serif type
- **AND** it SHALL show search, hamburger, and shopping-cart icon links on
  the right in dark 16px glyphs

#### Scenario: Mobile header

- **GIVEN** the header is displayed on a narrow viewport (≤576px)
- **WHEN** the layout renders
- **THEN** the social icons SHALL be hidden
- **AND** the hamburger SHALL be shown as a 40px circle with an #e1e1e1
  background
- **AND** the switches SHALL be centered below the logo

### Requirement: Navigation menu

The system SHALL render a centered uppercase menu with a green underline
marker on the active and hovered links.

#### Scenario: Menu content

- **GIVEN** the page is rendered
- **WHEN** the menu is displayed
- **THEN** it SHALL show the uppercase links Home, About, Gallery, Blog,
  and Contact in muted gray (#7E858B), weight 700
- **AND** the Home link SHALL be marked active: dark text (#222222) with a
  6px-tall green (#8DB952) underline bar
- **AND** hovering any link SHALL turn its text dark and grow the green
  underline bar across the link

#### Scenario: Blog dropdown

- **GIVEN** the Blog menu item is present
- **WHEN** the user hovers or focuses Blog
- **THEN** a white dropdown panel SHALL appear below it listing "Blog
  Single" (14px, weight 700, muted gray, dark on hover) with a soft shadow

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user activates the hamburger
- **THEN** a collapsible menu SHALL open listing the same five links
- **AND** activating the control again SHALL close it

### Requirement: Hero photo slider

The system SHALL render a center-mode photo carousel with seven slides and
a synced caption line beneath it.

#### Scenario: Slider content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a photo carousel where one large centered photo is
  fully visible with the adjacent photos peeking in at the sides
- **AND** the carousel SHALL auto-advance every ~3 seconds
- **AND** it SHALL show the caption for the current slide below the photos:
  a 36px bold dark (#222222) title ("Nature", "Red Heartbeat", "Blue
  Dreem", "Christian Church", "Red Darkness", "Beauty with Brain",
  "Remarkable") above the muted-gray subtitle "Photography"
- **AND** the caption SHALL change in sync with the visible slide

#### Scenario: Slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user clicks an adjacent (non-centered) photo
- **THEN** the carousel SHALL advance to that slide
- **AND** when the user clicks the current slide, a lightbox/modal SHALL
  open with the full photo (or the click is a no-op — note the choice)

### Requirement: Footer

The system SHALL render a single centered copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show one centered 16px line with the repo-standard
  footer credit
- **AND** any link in it SHALL be muted gray (#7E858B) with an underline,
  turning green (#8DB952) on hover

### Requirement: Search modal (optional)

The system SHALL provide a full-screen search overlay toggled by the header
search icon.

#### Scenario: Search overlay

- **GIVEN** the search icon is displayed in the header
- **WHEN** the user activates it
- **THEN** a full-screen white overlay SHALL open with a large centered
  text input (34px type, 2px #ededed bottom border, #999 text, placeholder
  "Search here.....")
- **AND** a 50px dark circle close control SHALL dismiss the overlay

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Stills app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, navigation menu, hero slider, and
  footer inside the main landmark in the original's order
- **AND** the document title SHALL be "Stills — Photography Portfolio"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- stills` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (header → menu → hero photo
      slider + synced captions → footer).
- [ ] Design tokens applied: green #8DB952 brand accent (nav active/hover
      underline bar, buttons, link hovers), Arimo sans (or repo default —
      note choice), bold uppercase nav 16px/700, body 16px #7E858B /
      line-height 1.8, headings 36px/700 #222222, white page background,
      mobile nav-switch circle #e1e1e1, footer heart #d32a2a.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Boto), preview URL, tokens,
      renames, and the icon-substitution note (lucide/inline SVG for
      font-awesome) plus the preloader/lightbox/cart/search decisions.
