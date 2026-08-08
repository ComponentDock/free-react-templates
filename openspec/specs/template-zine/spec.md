# Template: Zine (Blog Template)

## Purpose

Zine is a single-page creative blog template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Katt"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Katt" — creative blog template, Blog category
  (source: https://colorlib.com/wp/template/katt/). TEMPLATES.md has THREE
  copies of this item (lines 267, 1472 and 2523 — duplicate lines exist for
  some items; implementer must mark ALL copies when done).
- **Preview URL:** `https://preview.colorlib.com/theme/katt/` — HTTP 200,
  full rendered DOM (19.8 KB) fetched with curl. Page title: "Katt - Tasty
  Blog Html Template", `<body class="home blog">`. Stylesheets: `css/clear.css`,
  `css/common.css`, `css/font-awesome.min.css`, `css/carouFredSel.css`,
  `css/sm-clean.css` + `style.css` (main, 25.4 KB). Fonts are **"Montserrat"**
  (sans-serif, main — body 20px/35px weight 400) + **"PT Serif"** (serif,
  sparingly) via Google Fonts.
- **Screenshot:** `katt-free-creative-blog-website-template.jpg`
  (1200×993, viewed in browser) — matches the DOM/CSS analysis: deep charcoal
  `#2f2f2b` page background, white/cream text, pale-yellow accent. Top-left
  hamburger toggle (3 bars) next to a square logo with a stylized geometric
  letter in a pale-yellow box. Hero: full-width photo of a creative workspace
  (laptop, desk lamp, potted plant) with large white overlay text on the left
  ("We are design & digital studio based in New York. This is our showcase of
  crafted awesomeness.") and 3 slider dots (one yellow). Below: a poetic
  text-only post, then mixed image/text post rows, small uppercase spaced
  category labels (DESIGN, HANDMADE...), a hand-drawn yellow zig-zag graphic
  bottom-left. The demo brands itself "katt"; our recreation uses the NEW name
  **Zine**.
- **Visual design (from DOM + CSS tokens + screenshot):** dark, minimal,
  editorial creative-blog aesthetic. Fixed header with square logo left and
  hamburger toggle; opening the toggle reveals a full-screen `#3a3a37` overlay
  menu with huge white links (45px) that turn pale yellow on hover/current.
  Blog list is a single column (max-width 1170px) of 7 alternating post rows:
  a full-width hero slider with overlaid title, two text-only posts, and
  mixed 1/3–2/3 image+title rows (image left or right, title padding
  `0 100px`). Category links are 11px uppercase with 5px letter-spacing,
  comma-separated. A pale-yellow hand-drawn zigzag PNG is absolutely
  positioned near several posts. A block "Load more articles" button sits
  centered below. Footer: three inline columns (Colorlib link left, centered
  logo, social links right) with an animated pulsing heart.
- **Structure (1:1, index page):**
  1. `.doc-loader` — white page preloader (optional in recreation).
  2. Header `.header-holder` (`.content-1170`, `padding-top: 115px;
height: 85px`):
     - `.header-logo.left` (`margin-left: 100px`): square logo image
       (`images/katt_default_logo.png`).
     - `.toggle-holder.relative` (`margin-left: 30px; margin-top: 25px`):
       `#toggle` hamburger (29×30, three 5px bars `#555750`, 4px gaps;
       `.on` state rotates bars into an X, bars turn white, toggle becomes
       fixed).
  3. Full-screen menu `nav#header-main-menu.big-menu` (fixed, `#3a3a37`,
     opacity .95, z-index 10): `.main-menu.sm-clean` (`margin-top: 220px`)
     — links white 45px/65px; sub-menu links 22px/30px; hover + `.current`
     `#f5de87`. Items: Home (current), About, About 2, About 3, Contact
     (submenu: Contact + Map).
  4. Blog holder `.blog-holder.block.center-relative` inside
     `.block.content-1170.center-relative` — 7 posts:
     - **post-1** `.blog-item-holder`: `.post-thumb.thumb-html.one_thumb
.relative` with `.image-slider-wrapper` + carouFredSel slider
       `ul#slider1.image-slider` (3 images:
       `katt_home_image01_slider01/02/03.jpg`) + `.slider1_pagination
.carousel_pagination.left` dots (white; selected/hover `#f5de87`);
       overlay `.post-title-holder.one_title.absolute` (transparent bg):
       `h2.entry-title.excerpt` 36px/40px weight 700 — "We are design &
       digital studio based in New York.<br>This is our showcase of crafted
       awesomeness." — + `.cat-links` (Design, 13px, comma-separated).
     - **post-2** `.only-post-title-holder`: `h2.entry-title.excerpt`
       (24px/30px weight 400) — "Gathered by gravity bits of moving fluff
       Flatland venture hearts of the stars Hypatia birth cosmic ocean!
       Flatland are creatures of the cosmos Orion's sword two ghostly white
       figures" — + cat Handmade; zigzag `bottom: 30px; left: -90px`.
     - **post-3**: `.post-thumb.thumb-image.two_third_thumb.left` (770px
       wide, `katt_home_image02.jpg`) + `.post-title-holder
.one_third_title.right` (400px): "What was most significant about the
       office chairs" + cat Interior; zigzag `bottom: 40px; right: 331px`.
     - **post-4**: image right (`.two_third_thumb.right`,
       `katt_home_image03.jpg`) + title left (`.one_third_title.left`):
       "The sky is the limit only for those who aren't afraid to fly" +
       cat Packaging; zigzag `bottom: 110px; left: -83px`.
     - **post-5**: image left (`.one_third_thumb.left` 400px,
       `katt_home_image04.jpg`) + title right (`.two_third_title.right`
       770px): "To go places and do things that have never been done before,
       that's what living is all about" + cat Handmade; zigzag
       `bottom: 50px; right: -92px`.
     - **post-6** `.only-post-title-holder`: "It suddenly struck me that
       that tiny pea, pretty and blue, was the Earth. I put up my thumb and
       shut one eye, and my thumb blotted out the planet Earth. I didn't feel
       like a giant. I felt very, very small." + cat Handmade; zigzag
       `bottom: 25px; left: -80px`.
     - **post-7**: image right (`.two_third_thumb.right`,
       `katt_home_image05.jpg`) + title left (`.one_third_title.left`,
       `margin-top: 305px`): "I believe every human has a finite number of
       heartbeats" + cat Lifestyle; zigzag `bottom: 120px; left: 310px`.
     - `.cat-links`: `padding: 40px 100px 20px`, `ul li` inline-block,
       comma-separated (`li:after { content: ","; }`); `.one_title` /
       `.only-post-title-holder` `.cat-links` `padding-top: 75px; padding-bottom:
0` with `#faf8f3` commas; `.blog-holder .cat-links a` 11px uppercase
       `letter-spacing: 5px`.
     - `.entry-title`: `padding: 0 100px`, 24px/30px weight 400, max-width
       870px; `.one_title .entry-title` 36px/40px weight 700.
     - `.blog-item-holder .post-title-holder` bg white; `.one_title` bg
       transparent, absolute, z-index 2.
     - Thumb/title widths: `.one_third_*` 400px, `.two_third_*` 770px.
  5. More posts `.block.center-relative.center-text` + `a.more-posts`
     (block, `#faf8f3` text on `#3a3a37` bg, `padding: 25px 10px`,
     `font-size: 22px`, hover bg `#464642`): "Load more articles".
  6. Footer `.footer` (`margin-top: 170px; padding-bottom: 70px; color:
#50504c`): `.content-1170.center-relative` + `ul` with three inline
     `<li>`: `.left-footer-content` (40%, 16px, "Colorlib" link),
     `.center-footer-content` (footer logo `katt_default_footer_logo.png`),
     `.right-footer-contnet` (40%, 4 social links: Twitter, Linkedin,
     Dribbble, Instagram). `.fa-heart` `#e76f7d` with `pulse` animation.
     Mobile (≤~1100px): items stack, left-footer-content hidden,
     center logo `margin-bottom: 45px`.
  7. `.fixed.scroll-top` (65×85, `back_to_top.png`, hover shifts image up;
     hidden by default, shown on scroll).
- **Design tokens extracted from `style.css`:**
  - Dark page bg **`#2f2f2b`** (body); menu overlay / more-posts bg
    **`#3a3a37`** (hover `#464642`).
  - Accent pale yellow **`#f5de87`** (menu hover/current, pagination
    selected, carousel dot hover); caption bg **`#f5e083`**; giant
    blockquote quote mark `#F5E083`.
  - Text: links **`#121212`** (near-black), hover `#aaa6a0`; cream
    **`#faf8f3`** (more-posts text, one_title commas); muted `#aaa6a0`,
    `#cdc8c1`, `#cec8bf`, `#b5b5b5` (blockquote), `#7b7976`; footer text
    `#50504c`; hamburger bars `#555750`.
  - Heart accent **`#e76f7d`** (footer, pulsing).
  - Fonts: **"Montserrat"** (main sans — body 20px/35px; headings; menu
    45px) + **"PT Serif"** (serif) via Google Fonts.
  - Buttons: `.more-posts` block button — `#3a3a37` bg, `#faf8f3` text,
    `padding: 25px 10px`, `font-size: 22px`, hover `#464642`. No radius.
  - Section rhythm: header `padding-top: 115px; height: 85px`; content
    max-width 1170px (`.content-1170`); footer `margin-top: 170px;
padding-bottom: 70px`; cat-links `padding: 40px 100px 20px`; entry-title
    `padding: 0 100px`.
  - Blockquote: Montserrat 24px/47px `#b5b5b5`, `margin: 100px 0 60px 100px`,
    370px quotation mark in `#F5E083`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/zine-<n>/<w>/<h>`); icons → lucide-react (brand
  social icons as inline SVG — lucide-react removed brand icons); fonts via
  Google Fonts `<link>` (Montserrat + PT Serif); brand yellow in `@theme`;
  repo-standard Navbar chrome (site name + dark-mode toggle) + Footer; the
  zigzag decoration can be a small inline SVG or a Tailwind-styled line
  (never copy `images/zigzag.png`); no assets copied.

Zine lives in `apps/zine` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header (logo + hamburger toggle)

The system SHALL render a fixed header with a square logo and a hamburger
toggle that opens the full-screen navigation.

#### Scenario: Header content

- **GIVEN** the Zine page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Zine" (logo treatment) on the left
- **AND** it SHALL show a hamburger toggle button with an accessible label

#### Scenario: Toggle opens the menu

- **GIVEN** the header is displayed
- **WHEN** the user presses the hamburger toggle
- **THEN** the full-screen navigation menu SHALL become visible
- **AND** the toggle SHALL animate into an X shape (aria-expanded true)

### Requirement: Full-screen navigation menu

The system SHALL render a full-screen overlay menu with large links.

#### Scenario: Menu links

- **GIVEN** the menu is open
- **WHEN** the user views the overlay
- **THEN** it SHALL show large links Home, About, and Contact
- **AND** the Home link SHALL be marked as current

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle (repo-standard chrome)
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero slider post

The system SHALL render a full-width image slider as the first post, with an
overlaid title and category.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero post is displayed
- **THEN** it SHALL contain a slider with at least three slides
- **AND** the overlaid title SHALL read "We are design & digital studio based
  in New York. This is our showcase of crafted awesomeness."
- **AND** a category tag "Design" SHALL be shown
- **AND** slider pagination dots SHALL be visible

#### Scenario: Slider navigation

- **GIVEN** the hero slider has multiple slides
- **WHEN** the user activates the next dot
- **THEN** the visible slide SHALL change to the following slide

### Requirement: Blog post rows

The system SHALL render alternating blog post rows with the reference layout
variants (image left, image right, and text-only).

#### Scenario: Post row variants

- **GIVEN** the page is rendered
- **WHEN** the blog holder is displayed
- **THEN** it SHALL show at least seven post entries
- **AND** at least one post SHALL show the image on the left with the title on
  the right
- **AND** at least one post SHALL show the image on the right with the title
  on the left
- **AND** at least one post SHALL be text-only (no image)

#### Scenario: Category tags

- **GIVEN** a blog post row is displayed
- **WHEN** the category area is shown
- **THEN** it SHALL show an uppercase spaced category tag (e.g. Design,
  Handmade, Interior, Packaging, Lifestyle)

### Requirement: Load more articles button

The system SHALL render a "Load more articles" block button below the posts.

#### Scenario: More posts button

- **GIVEN** the blog holder is displayed
- **WHEN** the user scrolls to the bottom of the posts
- **THEN** a block button labeled "Load more articles" SHALL be visible
- **AND** it SHALL use the dark brand background (`#3a3a37`) with cream text

### Requirement: Footer

The system SHALL render a footer with a link, a centered logo, and social
links.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** the footer SHALL show a link column, a centered site logo, and
  social icon links (GitHub, X, LinkedIn)
- **AND** the footer SHALL include a copyright line with the site name

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Zine app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Zine — Blog Template"

## Verification checklist

- [ ] `apps/zine` exists with package name `@free-react-templates/zine`
- [ ] `vite.config.ts` registers `injectUiSource()` (see docs/conventions.md)
- [ ] Fonts Montserrat + PT Serif loaded via Google Fonts `<link>` in index.html
- [ ] Brand pale yellow `#f5de87` and dark `#2f2f2b`/`#3a3a37` defined in `@theme`
- [ ] Section order matches the reference 1:1 (header+toggle → overlay menu → hero slider post → blog rows (text-only / image-left / image-right variants) → load more → footer)
- [ ] Per-app gate passes: `scripts/verify-app.sh zine` (typecheck + lint + 100% coverage tests + build)
- [ ] Full gate passes on merge (CI `npm run gate`), nightly sweep green
- [ ] TEMPLATES.md: mark ALL THREE Katt copies (lines 267, 1472, 2523) `[~]` → `[x]` + Surge URL + homepage after merge
- [ ] `npm run readme:status` regenerates README Templates status table after merge
- [ ] PR description states: source template (ColorLib Katt), preview URL, design tokens, what differs (rename, picsum placeholders)
