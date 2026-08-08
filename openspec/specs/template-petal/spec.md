# Template: Petal (Blog Template)

## Purpose

Petal is a single-page lifestyle blog template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Juli"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Juli" — lifestyle blog template, Blog category
  (source: https://colorlib.com/wp/template/juli/). TEMPLATES.md has TWO
  copies of this item (lines 266 and 2400 — duplicate lines exist for some
  items; implementer must mark BOTH when done).
- **Preview URL:** `https://preview.colorlib.com/theme/juli/01-homepage.html`
  — HTTP 200, full rendered DOM (36 KB) fetched with curl. NOTE: the bare
  `https://preview.colorlib.com/theme/juli/` returns 404 — `assets/js/products.js`
  maps the slug to `juli/01-homepage.html`. Stylesheets:
  `01-homepage/css/styles.css` (main, 11.9 KB) + `responsive.css` (5.2 KB),
  plus common bootstrap/ionicons/layerslider. Fonts are **"Maven Pro"**
  (display — used on paragraphs/headings) + **"Roboto"** (body, set on
  `body`).
- **Screenshot:** `juli-free-lifestyle-blog-website-template.jpg`
  (1200×908, viewed in browser) — matches the DOM/CSS analysis: thin white
  top bar, centered cursive logo with "PERSONAL BLOG" tagline, dark nav
  strip, full-width lifestyle flat-lay photo hero with orange TRAVEL tag,
  white serif headline "Travel, Love, Live" + date, carousel dots + arrow.
  The demo brands itself "juli"; our recreation uses the NEW name **Petal**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean white
  lifestyle blog. Header is a stacked three-row layout (~265px tall): a thin
  italic top strip (welcome message + email + social icons + search), a
  centered logo row bordered top/bottom by `#ddd`, and the main nav (HOME
  with dropdown, FEATURED, ABOUT, CATEGORIES, CONTACT; 60px-tall links,
  `background: #eee` on hover). Hero is a full-bleed photo slider
  (`height: calc(100vh - 265px)`, min 550px) with a semi-transparent black
  text card (`rgba(0,0,0,.6)`, 3px radius) per slide: orange category tag,
  title, date, Read More button. Below: a two-column blog area — posts grid
  on the left (image cards with category tag, title, date, excerpt, share
  icons + comments count, orange-bordered Read More button, and a Load More
  button) and a rich sidebar on the right (about-author card with
  overlapping photo, search input, dark newsletter block, category image
  tiles with orange name bars, latest-posts mini list with 80px thumbs,
  advertisement block, instagram thumbs, tags). A full-width instagram strip
  (7 equal columns) sits above a dark footer with copyright line.
- **Structure (1:1, index page):**
  1. Header (stacked, fixed):
     - `.top-menu` (45px, italic, `font-size: .95em`): "Hello nice people,
       welcome to my blog" + `contact@juliblog.com` (welcome list, `border-left:
1px solid #ddd` separators) + `.social-icons` (left), search icon
       (right).
     - `.middle-menu` (center-text): logo image (`images/logo.png`, cursive
       "Juli" wordmark + "PERSONAL BLOG" tagline), `border-top/bottom:
1px solid #ddd`.
     - `.main-menu` (nav): HOME (has dropdown, `font-weight: 500`), FEATURED,
       ABOUT, CATEGORIES, CONTACT; `li > a { height: 60px; line-height: 60px;
padding: 0 25px; }`, `:hover { background: #eee; }`; dropdown submenus
       with `border-top: 1px solid #ddd` items; hamburger `.menu-nav-icon`
       (hidden on desktop, shown ≤992px).
  2. Hero `.main-slider` (`margin-top: 265px; height: calc(100vh - 265px);
min-height: 550px; overflow: hidden`): LayerSlider with full-bleed photo
     slides; `.slider-content` (`padding: 25px 60px 25px 40px; background:
rgba(0,0,0,.6); border-radius: 3px; color: #fff`) containing orange
     category tag, `.title` ("Travel, Love, Live", `letter-spacing: 3px`),
     date, Read More `.btn` (`padding: 7px 15px`); `.ls-nav-prev/next`
     arrows + dots.
  3. Blog area `.section.blog-area` (`.section { padding: 70px 0 40px; }`,
     light `#F2F3F4`/white): two columns — `.blog-posts` (left, wide) +
     `.sidebar-area` (right).
     - `.blog-posts .single-post` cards (`.margin-bottom: 60px`): image
       (`blog-1-1000x600.jpg`, `blog-3-500x400.jpg` …), `.post-info` with
       `.category-btn` (TRAVEL/FASHION/LIFESTYLE/DESIGN, `#FFAD4D` bg, white
       text), `.title` (`margin: 20px 0 15px`), `.date` (`color: #999`),
       excerpt text, `.icons` row (`margin: 30px 0 10px`): category tag +
       Share + comments count ("03"/"06") + `.social-icons` (`color: #666`);
       `.read-more-btn` (`clear: both; margin-top: 30px; box-shadow: 1px
10px 15px rgba(0,0,0,.15); border: 1px solid #FFAD4D; background:
#fff; color: #FFAD4D;` → hover: `background: #FFAD4D; color: #fff;
box-shadow: 1px 3px 15px rgba(0,0,0,.15)`). One card uses
       `.post-style-2` (image left via `.image-wrapper { padding-right:
30px }`, details right).
     - `.load-more-btn` (`clear: both; margin: 70px 0 30px`).
     - Sidebar `.sidebar-area` blocks (`.sidebar-section { margin-bottom:
50px; }`, `.title { margin-bottom: 30px; }`):
       - About author `.about-author` (`margin-top: 30px; padding: 0 30px
30px; box-shadow: 0px 10px 40px rgba(0,0,0,.2)`): `.author-image`
         (max-width 150px, `transform: translateY(-30px)`, `border-radius:
3px`), `.author-name` ("Cristine Smith"), `.signature-image`,
         `.read-more-link` (orange, `letter-spacing: 2px`, animated 1px
         underline that slides away on hover), `.social-icons`.
       - Search `.src-area` (`line-height: 50px`): full-width input
         (`padding: 0 50px 0 20px; border: 0; outline: 0;
border-bottom: 1px solid #bbb`) + `.src-btn` (absolute right).
       - Newsletter `.newsletter-area` (`padding: 30px; background: #29333C`):
         white `.title` "Subscribe to our newsletter" + `.email-input`
         (`width: 100%; margin: 15px 0; border: 0; padding: 10px 20px;
background: #fff`).
       - Categories `.category-area` (`.category { position: relative;
margin-bottom: 20px; }`): image + `.name` bar (`position: absolute;
bottom: 0; left/right: 0; padding: 7px 20px; background: #FFAD4D;
color: #fff`) — TRAVEL, FASHION, LIFESTYLE, DESIGN.
       - Latest posts `.latest-post-area`: `.latest-post` rows (`overflow:
hidden; margin-bottom: 20px`) with `.l-post-image` (80px, float
         left), `.post-info { margin-left: 100px }` (category-btn, title,
         `.date { color: #888 }`).
       - Advertisement `.advertisement-img` (image + `.discover-btn`
         absolute bottom center, `width: 200px; border-color: #fff; color:
#fff;` → hover `border-color: #FFAD4D`).
       - Instagram `.instagram-area` (`overflow: hidden`): 3-col thumb grid
         (`li { width: 30%; float: left; margin: 0 5px 5px 0; }`), "Follow me
         © instagram" link.
       - Tags `.tags-area` (`li { float: left; margin: 0 5px 5px 0; } a {
padding: 10px 15px; }`).
  4. Footer instagram `.footer-instagram-area` (`overflow: hidden;
border-top: 1px solid #ccc`): `.title` "Instagram" (`padding: 20px 0`),
     7 images (`ul.instagram > li { width: 14.285%; float: left; }`).
  5. Footer (`background: #29333C; color: #ddd`): DISCOVER section
     (`.footer-section { margin: 30px 0; }`) + `.copyright`
     "Petal © 2018. All rights reserved. | This template is made with ♥ by
     Colorlib".
- **Design tokens extracted from `styles.css`:**
  - Brand **orange `#FFAD4D`** (category tags, buttons, read-more links,
    hover states).
  - Dark **`#29333C`** (newsletter block, footer); black overlay
    `rgba(0,0,0,.6)` on hero text card.
  - Neutrals: `#fff` (cards, inputs), `#F2F3F4`/`#eee` (section/hover
    backgrounds), `#ddd`/`#ccc`/`#bbb` borders, muted text `#999`, `#888`,
    `#666`, `#aaa`.
  - Fonts: **"Maven Pro"** (display/paragraphs) + **"Roboto"** (body) via
    Google Fonts.
  - Buttons: `.btn` `padding: 7px 15px`; primary = `1px solid #FFAD4D`
    border, white bg, orange text → hover `background: #FFAD4D; color: #fff`
    - `box-shadow: 1px 3px 15px rgba(0,0,0,.15)`; `border-radius: 3px` on
      hero text card and author image.
  - Section rhythm: `.section { padding: 70px 0 40px; }`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/petal-<n>/<w>/<h>`); icons → lucide-react (brand
  social icons as inline SVG — lucide-react removed brand icons); fonts via
  Google Fonts `<link>` (Maven Pro + Roboto); brand orange in `@theme`;
  repo-standard Navbar chrome (site name + dark-mode toggle) + Footer; no
  assets copied.

Petal lives in `apps/petal` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header (top strip + logo + nav)

The system SHALL render a stacked header with a thin top strip, a centered
logo row, and the main navigation.

#### Scenario: Top strip content

- **GIVEN** the Petal page is rendered
- **WHEN** the page loads
- **THEN** the top strip SHALL show the welcome message "Hello nice people, welcome to my blog"
- **AND** it SHALL show the contact email `contact@juliblog.com` and social icon links

#### Scenario: Logo and navigation

- **GIVEN** the header is displayed
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Petal" with a "PERSONAL BLOG" tagline
- **AND** the nav SHALL show links HOME, FEATURED, ABOUT, CATEGORIES, CONTACT
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero slider

The system SHALL render a full-width photo slider with a text card per slide.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL contain a slider with at least one slide showing a category tag, a headline ("Travel, Love, Live"), a date, and a Read More button
- **AND** the slider SHALL expose previous/next controls

#### Scenario: Slider navigation

- **GIVEN** the hero slider has multiple slides
- **WHEN** the user activates the next control
- **THEN** the visible slide SHALL change to the following slide

### Requirement: Blog posts grid

The system SHALL render a grid of blog post cards, each with image, category
tag, title, date, excerpt, share row, and a read-more button.

#### Scenario: Post card content

- **GIVEN** the page is rendered
- **WHEN** the blog posts section is displayed
- **THEN** it SHALL show at least three post cards
- **AND** each card SHALL contain a category tag, a title, a date, and a Read More button
- **AND** at least one card SHALL show the image on the left with text on the right (post-style-2 variant)

#### Scenario: Load more button

- **GIVEN** the blog posts section is displayed
- **WHEN** the user sees the bottom of the posts
- **THEN** a "Load More" button SHALL be visible below the posts

### Requirement: Sidebar

The system SHALL render a sidebar with an about-author card, search input,
newsletter signup, category tiles, latest posts, and tags.

#### Scenario: About author card

- **GIVEN** the sidebar is displayed
- **WHEN** the about-author block is shown
- **THEN** it SHALL show an author image, the name "Cristine Smith", and a Read More link

#### Scenario: Newsletter block

- **GIVEN** the sidebar is displayed
- **WHEN** the newsletter block is shown
- **THEN** it SHALL show the heading "Subscribe to our newsletter" and an email input
- **AND** the block SHALL use the dark brand background (`#29333C`)

#### Scenario: Categories and latest posts

- **GIVEN** the sidebar is displayed
- **WHEN** the categories block is shown
- **THEN** it SHALL list at least four categories (TRAVEL, FASHION, LIFESTYLE, DESIGN) with image tiles
- **AND** the latest-posts block SHALL show at least three entries, each with a thumbnail, title, and date

### Requirement: Footer instagram strip and footer

The system SHALL render a full-width instagram strip above a dark footer.

#### Scenario: Instagram strip

- **GIVEN** the page is rendered
- **WHEN** the bottom of the page is reached
- **THEN** an "Instagram" strip SHALL show a row of at least six square thumbnails

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** the footer SHALL show a DISCOVER section, link columns, social links, and a copyright line with the site name
- **AND** the footer SHALL use the dark brand background (`#29333C`)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Petal app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Petal — Blog Template"

## Verification checklist

- [ ] `apps/petal` exists with package name `@free-react-templates/petal`
- [ ] `vite.config.ts` registers `injectUiSource()` (see docs/conventions.md)
- [ ] Fonts Maven Pro + Roboto loaded via Google Fonts `<link>` in index.html
- [ ] Brand orange `#FFAD4D` and dark `#29333C` defined in `@theme`
- [ ] Section order matches the reference 1:1 (header → hero → posts+sidebar → instagram strip → footer)
- [ ] Per-app gate passes: `scripts/verify-app.sh petal` (typecheck + lint + 100% coverage tests + build)
- [ ] Full gate passes on merge (CI `npm run gate`), nightly sweep green
- [ ] TEMPLATES.md: mark BOTH Juli copies (lines 266 and 2400) `[~]` → `[x]` + Surge URL + homepage after merge
- [ ] `npm run readme:status` regenerates README Templates status table after merge
- [ ] PR description states: source template (ColorLib Juli), preview URL, design tokens, what differs (rename, picsum placeholders)
