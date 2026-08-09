# Template: Framely (Photography)

## Purpose

Framely is a single-page photography-studio website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Boto" design (see TEMPLATES.md — listed under Bootstrap, line
350, first unchecked), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a minimalist, clean, modern photography portfolio: a
full-width header (padding 40px 45px 0) with social icons (Facebook /
Twitter / Instagram) on the left, a centered logo, and search / menu /
shopping-cart switches on the right, with a horizontal uppercase nav bar
below (Home — active, About, Gallery, Blog ▾ with a "Blog Single" submenu,
Contact), a coverflow-style hero photo slider (7 full-bleed slides,
center-mode carousel with neighbouring slides peeking in, autoplay 3s, click
opens a Fresco lightbox) synced to a centered caption slider below (slide
title in 36px bold + "Photography" sub-label in grey), and a minimal centered
copyright footer bar. A fullscreen white search overlay ("Search here.....")
toggles from the search switch. Framely recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Boto" — free photography studio website template
  (source: https://colorlib.com/wp/template/boto/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/boto/`
  (HTTP 200, 6.5KB) + stylesheet `css/style.css` (15.9KB) plus
  `css/bootstrap.min.css`, `css/font-awesome.min.css`, `css/fresco.css`,
  `css/slick.css`, `css/slicknav.min.css`. The rendered DOM is the reference
  below; the TEMPLATES.md screenshot (`boto-photography-website-template.jpeg`,
  1200×946) confirms the visual design: pure white background, black/grey
  text, bright green `#8DB952` accent (active nav link, buttons, link hovers),
  Arimo typography (Raleway for small labels), uppercase bold nav links, and a
  big center-mode photo carousel with a caption underneath.
- **Section order (1:1):**
  1. `header.header` (container-fluid, padding 40px 45px 0; mobile 40px 0 0):
     Bootstrap row of 3 columns —
     - `col-sm-4 col-md-3` `header__social`: 3 icon links `fa-facebook`,
       `fa-twitter`, `fa-instagram`;
     - `col-sm-4 col-md-6 text-center` `site-logo`: `img/logo.png` (image →
       text logo "Framely");
     - `col-sm-4 col-md-3` `header__switches`: `search-switch`
       (`fa-search`), `nav-switch` (`fa-bars`), `fa-shopping-cart`.
       Then `nav.main__menu > ul.nav__menu` (centered): `li > a` Home
       (`menu--active`), About, Gallery, Blog (with `ul.sub__menu` → "Blog
       Single"), Contact. Links: 16px, 700, uppercase, `#7E858B`, padding
       5px 2px, margin-right 40px (20px on small); active/hover → `#222222`
       plus a 6px `#8DB952` underline bar (`:after`, width 0 → 100%,
       bottom 8px, z-index -1, transition 0.3s); sub-menu is a dropdown
       (top 100%, margin-top 15px, opacity/visibility toggle). Mobile
       (<576px): nav hidden, slicknav hamburger menu instead.
  2. `section.hero__section` (padding-top 120px, margin-bottom 90px; mobile
     pt 30px):
     - `div.hero-slider` (slick: infinite, speed 300, slidesToShow 1,
       **centerMode + variableWidth** → coverflow, arrows false, autoplay
       3000ms, pauseOnHover false, wheel-event navigates prev/next): 7
       `div.slide-item` (padding 0 5px, cursor pointer, outline none) each
       `a.fresco` (`data-fresco-group="projects"`) wrapping
       `img/hero-slider/N.jpg` (1.jpg…7.jpg). Clicking a slide opens the
       Fresco fullscreen lightbox.
     - `div.hero-text-slider` (slick synced via `asNavFor:
'.hero-text-slider'`, text-align center, padding-top 50px, max-width
       800px, margin 0 auto): 7 `div.text-item` — `h2` slide title (36px,
       bold, `#222222`, line-height 1.4) + `p` "Photography" (16px,
       `#7E858B`, line-height 1.8). Titles: "Nature", "Red Heartbeat",
       "Blue Dreem", "Christian Church", "Red Darkness", "Beauty with
       Brain", "Remarkable".
  3. `footer.footer__section` (container): `div.footer__copyright__text`
     (text-align center, padding-bottom 5px): `p` 16px — "Copyright ©
     <year> All rights reserved | This template is made with ♥ by Colorlib"
     (heart `#d32a2a`, link `#7E858B` underline, hover `#8DB952`) → replace
     with repo-standard footer credit.
  4. `div.search-model` (fixed fullscreen overlay, bg `#ffffff`, z-index
     99999, hidden by default; toggled by `.search-switch`): centered
     `.search-close-switch` "+" close button + `form.search-model-form`
     with `input#search-input` placeholder "Search here.....".
  - Note: the original ships more pages (about.html, gallery.html, blog.html,
    blog-single.html, contact.html) sharing `style.css` (About page has
    `.about__page` padding 90px 60px 150px; blog has `.post__tags` pills bg
    `#F3F3F3` radius pills in Raleway 12px 700; `.site-btn` appears across
    pages). The single-page recreation covers the homepage; nav links to
    About/Gallery/Blog/Contact are dead anchors (href="#") or smooth-scroll
    stubs.
- **Design tokens extracted from `css/style.css`:**
  - Font: **'Arimo', sans-serif** (body + headings; headings 700, `h1` 70px,
    `h2` 36px/1.4, `h3` 30px, `h4` 24px, `h5` 18px, `h6` 16px); **'Raleway',
    sans-serif** for small labels/tags (e.g. post tags 12px 700). Both are
    Google Fonts (Arimo imported via `@import` in style.css; load via
    `<link>` in index.html).
  - Brand green: **#8DB952** — `.site-btn` bg, nav underline bar (`:after`),
    footer link hover.
  - Dark ink: **#222222** — headings (h1–h6), nav link active/hover color.
  - Body grey: **#7E858B** — body `p` (16px, line-height 1.8), nav links,
    footer copyright link, post tags text.
  - Accent red: **#d32a2a** — footer heart icon.
  - Neutrals: #ffffff (search overlay bg), #f3f3f3 (post-tag pill bg),
    #e8e8e8 (borders, e.g. `.post__footer` border-top), #ededed/#e1e1e1
    (minor).
  - Buttons `.site-btn`: inline-block, 16px, 700, white text, bg #8DB952,
    padding 16px 15px, min-width 180px, line-height 1, text-align center,
    border none, **border-radius 2px**; `i` icon 24px offset top 5px margin-
    left 4px; hover keeps white text.
  - Nav underline: 6px bar, bg #8DB952, absolute bottom 8px, width 0 →
    100% on hover/active, transition 0.3s, z-index -1 (renders behind text).
  - Spacing: header 40px 45px 0; hero pt 120px / mb 90px (mobile pt 30px);
    text slider pt 50px, max-width 800px; slide-item padding 0 5px; footer
    copyright pb 5px; about page 90px 60px 150px; post footer border-top
    1px #E8E8E8 + padding-top 30px, margin-bottom 70px.
- **Recreation decisions:** header = white full-width bar with lucide social
  icons left (Facebook, Twitter, Instagram), centered "Framely" bold text
  logo, right switches (Search, Menu, ShoppingCart icons; hamburger only on
  mobile), centered uppercase nav below with green underline on
  active/hover; hero = center-mode coverflow photo carousel (7 picsum
  slides, autoplay ~3s, neighbouring slides partially visible, click opens a
  lightbox modal — or links to the full-size image), synced centered caption
  slider (title + "Photography" label); footer = minimal centered copyright
  bar with repo-standard credit; search = fullscreen white overlay with "+"
  close and "Search here....." input; images picsum-seeded
  (`picsum.photos/seed/framely-N/w/h`); Google Fonts Arimo + Raleway via
  `<link>`; icons via lucide-react.

Framely lives in `apps/framely` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header

The system SHALL render a white header with social icons, a centered logo,
utility switches, and a navigation menu with an active-link indicator.

#### Scenario: Header content

- **GIVEN** the Framely page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show three social icon links (Facebook, Twitter,
  Instagram) on the left
- **AND** it SHALL show the site name "Framely" as a bold text logo in the
  center
- **AND** it SHALL show search, menu, and shopping-cart icon switches on the
  right

#### Scenario: Nav links

- **GIVEN** the header is displayed
- **WHEN** the navigation menu is rendered
- **THEN** it SHALL show the links Home, About, Gallery, Blog, and Contact in
  uppercase bold grey (#7E858B) text
- **AND** the Home link SHALL carry the active state: dark (#222222) text
  with a green (#8DB952) underline bar
- **AND** hovering or focusing any link SHALL turn it dark and reveal the
  green underline bar

#### Scenario: Mobile menu

- **GIVEN** the header is displayed on a narrow viewport
- **WHEN** the user activates the menu switch (hamburger)
- **THEN** a menu SHALL open showing the nav links
- **AND** activating the menu switch again SHALL close the menu

### Requirement: Hero photo slider

The system SHALL render a coverflow-style photo carousel with synced captions
and lightbox interaction.

#### Scenario: Slider content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a horizontal carousel of photo slides where the
  center slide is fully visible and neighbouring slides peek in from the
  edges
- **AND** it SHALL show a caption below the carousel with a slide title (e.g.
  "Nature") and the sub-label "Photography"

#### Scenario: Slide navigation

- **GIVEN** the hero carousel is displayed
- **WHEN** the slider advances (autoplay or user interaction)
- **THEN** the center photo and the caption SHALL change together
- **AND** the caption SHALL match the currently centered slide

#### Scenario: Lightbox

- **GIVEN** a hero slide is displayed
- **WHEN** the user clicks a slide
- **THEN** a fullscreen lightbox SHALL open with the photo enlarged
- **AND** closing the lightbox SHALL return to the page

### Requirement: Footer

The system SHALL render a minimal centered footer with a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a centered copyright line with the repo-standard
  footer credit
- **AND** the credit SHALL contain a heart icon in the accent red (#d32a2a)

### Requirement: Search overlay

The system SHALL provide a fullscreen search overlay toggled from the header.

#### Scenario: Open and close search

- **GIVEN** the page is rendered
- **WHEN** the user activates the search switch in the header
- **THEN** a fullscreen white overlay SHALL appear with a "+" close control
  and an input with placeholder "Search here....."
- **AND** activating the close control SHALL hide the overlay

#### Scenario: Search input

- **GIVEN** the search overlay is open
- **WHEN** the user types in the search input
- **THEN** the input SHALL accept the text (no submit required for the
  static recreation)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Framely app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero slider, and footer inside the
  main landmark in the original's order
- **AND** the document title SHALL be "Framely — Photography Studio"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- framely` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero slider → footer).
- [ ] Design tokens applied: brand green #8DB952 (nav underline, buttons,
      link hover), #222222 headings/nav-active, #7E858B body/nav grey,
      #d32a2a footer heart, Arimo body font + Raleway labels, 2px-radius
      green `.site-btn` (min-width 180px, bold 16px), 6px green nav underline
      bar animation.
- [ ] Hero is a center-mode coverflow carousel with synced captions
      (title + "Photography") and a click-to-lightbox interaction; autoplay
      ~3s.
- [ ] Search overlay is a fullscreen white modal toggled by the search
      switch, with "+" close and "Search here....." placeholder.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Boto), preview URL, tokens,
      and renames.
