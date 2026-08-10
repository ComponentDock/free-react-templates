# Template: Pixelpress (Gaming Blog Template)

## Purpose

Pixelpress is a single-page gaming-news/blog template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Endgam" website template (see TEMPLATES.md, Blog section, line
257), built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The reference is a dark, energetic gaming-magazine homepage: a header with a
top "Follow us:" social row, a navy bar holding the logo (left), a
Login/Register user panel (right) and the main menu (HOME, GAMES with a
dropdown, REVIEWS, NEWS, CONTACT); a full-screen two-slide hero slider over
purple-tinted game art ("Game on!" in a giant 160px headline, subtext, white
READ MORE button with the signature magenta offset-block shadow, magenta
bottom border, "01/02" pagination); a deep-purple intro strip with three
story teasers (date / category meta, headline, excerpt, READ MORE); a split
featured section (left: full-height photo, right: white panel with a 60px
headline); a blog section on a purple gradient — "Latest News" title with a
filter row (Racing / Shooters / Strategy / Online), three large article cards
(photo + meta + headline + excerpt + READ MORE) and a sidebar with a Trending
widget (4 thumb+title items) and a Categories widget (6 links); a video
promo section over a dark game-art background with a circular play button
(YouTube popup) and "Promo video of the game"; a newsletter section on a
purple gradient (email input + subscribe button); and a footer on a darker
gradient with logo, menu, social icons and copyright.

Brand colors: magenta `#b01ba5` (primary accent — category links, hero bottom
border, social hovers, offset button shadow, active slider dot), brighter
magenta `#c313b7`, glow `rgba(226,30,228,0.24)`, dark navy `#081624` (nav
bar, button text), deep purple `#0c062e` (intro section), purple gradients
`#501755→#2d1854` (blog section, 45°), `#3e0f3d→#1c0f3b` (newsletter),
`#330d38→#190d36` (footer). Body font Roboto; muted body text `#68647d` on
dark; buttons are squared (radius 0), uppercase italic bold 14px, white with
the magenta offset block behind them.

## Design reference (replication findings)

- **Original:** ColorLib "Endgam" — gaming blog/magazine template
  (source: https://colorlib.com/wp/template/endgam/). Listed in TEMPLATES.md
  under Blog (line 257). Screenshot: `endgam-free-template.jpg` (1200×946,
  reviewed visually in the browser).
- **Live preview URL:** https://preview.colorlib.com/theme/endgam/ —
  reachable, fetched and analyzed. HTML saved to `/tmp/endgam.html` (49 KB);
  stylesheet `css/style.css` (29 KB — design tokens below). Screenshot and
  preview agree (dark purple/magenta gaming layout, giant hero headline,
  offset-shadow white buttons, purple gradient sections) — the preview DOM is
  authoritative.
- **Fonts:** base `font-family: 'Roboto', sans-serif` (style.css line 17).
  Buttons and read-more links use `font-style: italic` + `font-weight: 700`;
  the hero h2 is `font-weight: 500`. Google Fonts via `<link>` in
  `index.html`.
- **Signature button (.site-btn):** `display: inline-block; border: none;
font-size: 14px; font-weight: 700; font-style: italic; text-transform:
uppercase; min-width: 186px; padding: 24px 30px; border-radius: 0; color:
#081624; background: #fff;` with a `:after` pseudo-element offset block
  `left: 9px; top: 10px; background: #b01ba5; z-index: -2; box-shadow: 0 0
9px 3px rgba(226,30,228,0.24)` and a `:before` white copy on top. Arrow
  icon (double-arrow) sits 13px left of the label's right edge. Hover keeps
  the dark-navy text.
- **Read-more links (.read-more):** `font-size: 15px; font-weight: 700;
font-style: italic; color: #fff` + arrow icon (dark `#251e2f` variant in
  the white featured panel).
- **Section backgrounds (from style.css):**
  - header-bar-warp: `#081624` + glow shadow `0 0 9px 3px
rgba(226,30,228,0.24)`
  - hero-item: height 921px, `border-bottom: 2px solid #b01ba5`; hero h2
    160px white weight 500 line-height 1; hero p 24px `rgba(255,255,255,.4)`
    weight 500, margin-bottom 70px; slider dots "01/02", active dot magenta
  - intro-section: `#0c062e`, padding 115px 0
  - featured-box: white, `padding: 100px 50px 130px 79px`; h3 60px; p 16px;
    top-meta `#68647d`; read-more `#251e2f`
  - blog-section: `linear-gradient(45deg, #501755 0%, #2d1854 100%)`
  - intro-video-section: height 757px, bg image (promo-bg) + dark overlay
  - newsletter-section: `linear-gradient(left, #3e0f3d 0%, #1c0f3b 100%)`
  - footer-section: `linear-gradient(left, #330d38 0%, #190d36 100%)`
  - text-box p: `font-size: 15px; font-weight: 500; color: #68647d`
  - text-box h3: margin-bottom 40px, max-width 370px
  - top-meta: `font-size: 18px; font-weight: 500; margin-bottom: 20px`;
    category link color `#b01ba5`
- **Section order (1:1 from the preview DOM):**
  1. Header `header.header-section` → `div.header-warp` (top row: "Follow
     us:" + 5 social icons right — Pinterest, Facebook, Twitter, Dribbble,
     Behance) → `div.header-bar-warp` (bg #081624, padding 39px 40px 0):
     logo left, `div.user-panel` right ("Login / Register"), `ul.main-menu`:
     Home · Games (li with `ul.sub-menu` → "Game Single") · Reviews · News ·
     Contact.
  2. Hero `section.hero-section` → `div.hero-slider.owl-carousel` with two
     `div.hero-item.set-bg` (bg images slider-bg-1.jpg / slider-bg-2.jpg,
     `d-flex align-items-center justify-content-center text-center`):
     `h2` "Game on!" (160px), `p` subtext, `a.site-btn` "Read More" + arrow;
     owl dots (01/02).
  3. Intro `section.intro-section` (bg #0c062e) → container → row → three
     `div.col-md-4 > div.intro-text-box.text-box.text-white`: `div.top-meta`
     "11.11.18 / in Games|Playstation|Reviews" (category link magenta), `h3`
     ("The best online game is out now!" / "Top 5 best games in november" /
     "Get this game at a promo price"), `p` excerpt, `a.read-more` "Read
     More" + arrow.
  4. Blog `section.blog-section.spad` (45° gradient) → container → row:
     main `div.col-xl-9.col-lg-8.col-md-7`: `div.section-title.text-white`
     `h2` "Latest News" + `ul.blog-filter` (Racing · Shooters · Strategy ·
     Online) + three `div.blog-item` (each: `div.blog-thumb` img + `div.blog-
text.text-box.text-white` with top-meta, `h3` "The best online game is
     out now!", `p`, `a.read-more`); sidebar `div.col-xl-3.col-lg-4.col-md-5
.sidebar` → `div#stickySidebar`: `div.widget-item` `h4.widget-title`
     "Trending" + `div.trending-widget` (4 × `div.tw-item`: `div.tw-thumb`
     img + `div.tw-text` `div.tw-meta` "11.11.18 / in Games" + `h5` title);
     `div.widget-item` `h4.widget-title` "categories" + `div.categories-
widget` `ul` (Games · Gaming Tips & Tricks · Online Games · Team Games ·
     Community · Uncategorized).
  5. Video `section.intro-video-section.set-bg` (bg promo-bg.jpg, height
     757px, `d-flex align-items-end`): `a.video-play-btn.video-popup` (href
     https://www.youtube.com/watch?v=uFsGy5x_fyQ) + container →
     `div.video-text`: `h2` "Promo video of the game" + `p`.
  6. Featured `section.featured-section` — split: `div.featured-bg.set-bg`
     (bg image featured-bg.jpg, absolute left, `width: calc(50% - 156px)`) +
     `div.featured-box` (float right, white, `width: calc(50% + 156px)`):
     `div.text-box`: top-meta (dark), `h3` 60px "The game you've been waiting
     for is out now", `p` 16px, `a.read-more` dark #251e2f.
  7. Newsletter `section.newsletter-section` (gradient): container →
     `h2` "Subscribe to our newsletter" + `form.newsletter-form`: `input`
     placeholder "ENTER YOUR E-MAIL" + `button.site-btn` "subscribe" + arrow.
  8. Footer `footer.footer-section` (gradient): container — decorative
     `div.footer-left-pic` / `div.footer-right-pic` (images; skip or replace
     with CSS shapes), `a.footer-logo` (logo image → text logo), `ul.main-
menu.footer-menu` (Home · Games · Reviews · News · Contact),
     `div.footer-social` (5 icon links), `div.copyright` text.
- The page also ships a `#preloder` spinner overlay (loader) that hides on
  load — optional nicety, not required for fidelity.

## Requirements

### Requirement: Header with social row, logo, user panel and nav

The system SHALL render a sticky-style header band composed of a top social
row and a dark-navy bar with logo, user panel and main navigation.

#### Scenario: Top social row

- **GIVEN** the Pixelpress app is rendered
- **WHEN** the header loads
- **THEN** the top row SHALL show the text "Follow us:" on the right
- **AND** five social icon links (Pinterest, Facebook, Twitter, Dribbble,
  Behance) SHALL sit to the right of the label, icon-only with aria-labels,
  turning magenta on hover
- **AND** the row SHALL be light-themed (white background) with the social
  icons in muted grey

#### Scenario: Navy bar with logo, user panel and menu

- **GIVEN** the header loads
- **WHEN** the main bar is rendered
- **THEN** the bar SHALL have background `#081624` and the glow shadow
  `0 0 9px 3px rgba(226,30,228,0.24)`
- **AND** the site logo (text or inline SVG wordmark "Pixelpress") SHALL sit
  on the left
- **AND** a "Login / Register" user panel SHALL sit on the right
- **AND** the nav SHALL list Home · Games · Reviews · News · Contact in that
  order
- **AND** the Games item SHALL open a dropdown containing a "Game Single"
  link
- **AND** the current-page/home link SHALL have a magenta underline accent

#### Scenario: Mobile menu

- **GIVEN** a viewport narrower than the desktop breakpoint
- **WHEN** the menu is collapsed
- **THEN** a hamburger toggle SHALL be shown with `aria-expanded` reflecting
  the menu state
- **AND** activating it SHALL reveal the nav links stacked vertically

### Requirement: Hero slider

The system SHALL render a full-width two-slide hero over game-art
backgrounds with a giant headline, subtext, CTA and pagination.

#### Scenario: Hero slide content

- **GIVEN** the hero section is rendered
- **WHEN** a slide is active
- **THEN** the slide SHALL show a dark-purple-tinted background image
  (picsum placeholder), a white `h2` headline "Game on!" at ~160px
  (`text-8xl`+ scale, weight 500, line-height 1), a 24px subtext paragraph at
  `rgba(255,255,255,0.4)`, and a white READ MORE `.site-btn` with the
  magenta offset shadow
- **AND** the hero SHALL have a 2px solid `#b01ba5` bottom border
- **AND** the hero SHALL be ~921px tall on desktop

#### Scenario: Slide navigation

- **GIVEN** the hero has two slides
- **WHEN** the user activates the next control
- **THEN** the second slide SHALL become active
- **AND** pagination SHALL show "01 / 02" with the active number in a
  magenta circle
- **AND** slide transitions SHALL animate content in (headline, then
  subtext, then button — staggered fade/slide)

#### Scenario: Slide CTA

- **WHEN** the READ MORE button on a slide is activated
- **THEN** it SHALL link to the latest-news anchor (or `#`), matching a
  button-like squared style — NOT a pill

### Requirement: Intro teaser strip

The system SHALL render a deep-purple strip with three equal-width story
teasers.

#### Scenario: Intro cards

- **GIVEN** the intro section is rendered
- **WHEN** the section loads
- **THEN** the section SHALL have background `#0c062e` with generous
  vertical padding (~115px)
- **AND** it SHALL contain three columns, each with: a `top-meta` row
  ("11.11.18 / in Games|Playstation|Reviews" — date muted, category link
  magenta `#b01ba5`), an `h3` headline, a muted `#68647d` excerpt, and an
  italic bold white "Read More" link with arrow icon

### Requirement: Featured split section

The system SHALL render a split feature: full-height image on the left, white
content panel on the right.

#### Scenario: Featured layout

- **GIVEN** the featured section is rendered
- **WHEN** the layout loads
- **THEN** the left side SHALL be a full-height background image
- **AND** the right side SHALL be a white panel (roughly half width + 156px,
  `padding: 100px 50px 130px 79px`) containing: a dark `top-meta` row, a 60px
  `h3` ("The game you've been waiting for is out now"), a 16px paragraph, and
  a dark (`#251e2f`) "Read More" link
- **AND** the panel content SHALL be capped at ~810px wide

#### Scenario: Stacked on mobile

- **WHEN** the viewport is narrow
- **THEN** the image SHALL stack above the white panel and fill the section
  width

### Requirement: Blog section with article cards and sidebar

The system SHALL render the latest-news section on a purple gradient with a
filter row, three large article cards, and a sidebar with Trending and
Categories widgets.

#### Scenario: Blog section header and filter

- **GIVEN** the blog section is rendered
- **WHEN** the section header loads
- **THEN** the section SHALL have the 45° gradient background
  `#501755 → #2d1854`
- **AND** it SHALL show the section title "Latest News" in white
- **AND** a filter row SHALL list Racing · Shooters · Strategy · Online,
  with the active filter underlined in magenta

#### Scenario: Article cards

- **WHEN** the main column loads
- **THEN** it SHALL contain three article cards, each with: a photo (picsum
  placeholder), a `top-meta` row, an `h3` headline, an excerpt in muted
  `#68647d`, and an italic bold white "Read More" link
- **AND** the cards SHALL stack single-column below the header, separated
  from the sidebar

#### Scenario: Trending widget

- **WHEN** the sidebar loads
- **THEN** the first widget SHALL be titled "Trending" and list four items,
  each with a small square thumbnail (100px), a `tw-meta` row (date /
  category), and an `h5` title
- **AND** the sidebar SHALL remain sticky while scrolling on desktop

#### Scenario: Categories widget

- **WHEN** the second sidebar widget loads
- **THEN** it SHALL be titled "categories" (lowercase, per the original) and
  list six links: Games · Gaming Tips & Tricks · Online Games · Team Games ·
  Community · Uncategorized
- **AND** hovering a category link SHALL shift it right or color it magenta

### Requirement: Video promo section

The system SHALL render a dark video-promo section with a play button and
caption.

#### Scenario: Video section content

- **GIVEN** the video section is rendered
- **WHEN** the section loads
- **THEN** the section SHALL have a dark game-art background (picsum
  placeholder), be ~757px tall, and align its content to the bottom
- **AND** it SHALL show a circular play button (magenta on hover) that opens
  the YouTube video in a modal/lightbox
- **AND** it SHALL show the heading "Promo video of the game" with a short
  paragraph

### Requirement: Newsletter section

The system SHALL render a newsletter signup band on a purple gradient.

#### Scenario: Newsletter form

- **GIVEN** the newsletter section is rendered
- **WHEN** the section loads
- **THEN** the section SHALL have the left-to-right gradient
  `#3e0f3d → #1c0f3b`
- **AND** it SHALL show the heading "Subscribe to our newsletter"
- **AND** a form SHALL contain an email input with placeholder
  "ENTER YOUR E-MAIL" and a squared "subscribe" `.site-btn` with the magenta
  offset shadow and arrow icon
- **AND** submitting an invalid email SHALL show a validation error and
  SHALL NOT submit
- **AND** submitting a valid email SHALL show a success confirmation

### Requirement: Footer

The system SHALL render the footer on the darkest gradient with logo, menu,
social icons and copyright.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the footer loads
- **THEN** the footer SHALL have the left-to-right gradient
  `#330d38 → #190d36`
- **AND** it SHALL show the site logo centered, a footer menu (Home · Games ·
  Reviews · News · Contact), five social icon links (magenta on hover), and a
  copyright line ("© 2026 Pixelpress — Game news template")

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Pixelpress app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Pixelpress — Gaming Blog Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/pixelpress`
      (`scripts/verify-app.sh pixelpress` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: header (Follow us row + navy bar with logo / Login /
      Register / 5-link menu + Games dropdown), 2-slide hero (160px headline,
      magenta bottom border, 01/02 dots), intro strip (3 teasers), split
      featured (image + white panel), blog section (Latest News + filter +
      3 cards + Trending/Categories sidebar), video promo (play button +
      caption), newsletter form, footer (logo, menu, socials, copyright)
      match the Endgam preview 1:1.
- [ ] Design tokens in `@theme`: magenta `#b01ba5`, bright magenta `#c313b7`,
      glow `rgba(226,30,228,0.24)`, navy `#081624`, deep purple `#0c062e`,
      gradients `#501755→#2d1854` / `#3e0f3d→#1c0f3b` / `#330d38→#190d36`,
      muted text `#68647d`, dark text `#251e2f`; Roboto via Google Fonts.
- [ ] Buttons use the squared offset-shadow style (white bg, uppercase italic
      bold, radius 0, magenta `:after` block at 9px/10px offset with glow) —
      NOT pills.
- [ ] Placeholder images use `picsum.photos/seed/pixelpress-<n>/<w>/<h>`;
      lucide-react icons (social icons inline SVG or lucide where sensible);
      no ColorLib assets copied.
- [ ] PR description states source template (ColorLib "Endgam"), preview URL
      (https://preview.colorlib.com/theme/endgam/), design tokens, and what
      differs (name, placeholders, text logo, skipped preloader and
      decorative footer pics).
