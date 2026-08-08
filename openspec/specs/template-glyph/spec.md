# Template: Glyph (Blog Template)

## Purpose

Glyph is a single-page blog website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Opium"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Opium" — blog template
  (source: https://colorlib.com/wp/template/opium/).
  TEMPLATES.md has THREE copies of this item (lines 277, 1722, and 2412 —
  mark EVERY copy `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/opium/
  (HTTP 200, 30 KB rendered HTML, title "Opium Blog"). Stylesheet:
  `css/style.css` (56 KB, extracted) + bootstrap/linericon/font-awesome/
  owl-carousel/lightbox/nice-select/animate/jquery-ui imports. Google Fonts
  `@import url("https://fonts.googleapis.com/css?family=Inconsolata:400,700")`
  at the top of style.css.
- **Screenshot:** `opium-free-template.jpg` (1200×946, verified live in a
  browser via vision): clean minimal blog on white; thin top bar with social
  icons right; centered uppercase nav (HOME / CATEGORY / ARCHIVE / PAGES /
  CONTACT); logo "Opium" bold serif; hero = large lifestyle photo with a
  white content card overlaid on the right (black pill "Gadgets" tag, date,
  comment count, bold title, excerpt, outlined "Read More" button); blog grid
  below with image cards + white overlapping text panels; light-grey widget
  boxes with thin borders; neutral palette — the only strong color is the
  purple-blue `#6f6fff` accent (nav hover, widget title bars, button hover).
- **Section order (1:1, from the live DOM):** Header (logo + social icons;
  nav: Home / Category / Archive / Pages / Single Blog / Elements / Contact)
  → Hero banner (full-width `home-banner.jpg` bg, `col-lg-5` spacer, right
  `col-lg-7` text slider: 3 slides, each a white `.blog_text` card with
  `cat_btn` "Gadgets" pill, date "March 14, 2018" + comment count "05", h4
  title, excerpt, "Read More") → Blog grid (`blog_area p_120`: 9
  `.blog_style1` posts in 3 columns × 3 rows; each card = `blog_img` on top
  - white `.blog_text_inner` panel overlapping the image by -100px with a
    soft shadow, containing `cat_btn`, date + comments, 24px black title,
    excerpt, `blog_btn` "Read More") → Pagination (01 02 03 04 09, active page
    black) → Right sidebar (search widget, author widget "Charlie Barber /
    Senior blog writer", "Popular Posts" (4 thumb rows: Space The Final
    Frontier, The Amazing Hubble, Astronomy Or Astrology, Asteroids telescope
    with "0X Hours ago"), "Newsletter" widget (email input + black Subscribe
    button), "Post Catgories" list with counts: Technology 37, Lifestyle 24,
    Fashion 59, Art 29, Food 15, Architecture 09, Adventure 44) → Footer
    (`footer-area p_120`, dark `#222222`; 4 columns: About Us, Newsletter
    "Stay updated with our latest trends", Instagram Feed grid, Follow Us
    "Let us be social"; copyright bar: "Copyright © All rights reserved |
    This template is made with ♥ by Colorlib", heart + link in accent).
- **Design tokens extracted from `style.css`:**
  - Font: **"Inconsolata", monospace** (Google Fonts, weights 400 + 700) —
    used for body (16px/26px), headings, nav, buttons, EVERYTHING.
  - Primary accent **purple-blue `#6f6fff`** (~36 refs): nav link
    hover/active, `widget_title:before` bar (30×4px), `blog_btn:hover` bg +
    border, post h4 hover, date hover, popular-post h3 hover, category list
    hover, pagination `page-link:hover`, footer link hover, footer `sub-btn`
    bg, footer-text link + heart, social icon hover, comment reply hover.
  - Page bg **white `#ffffff`**; light fill **`#f9f9ff`** (banner bg-color,
    `cat_btn` bg, `blog_btn` bg, sidebar widget card bg).
  - Borders **`#e9e9e9`** (1px): `main_menu` bottom border, `blog_btn`
    border, widget card border, search input border; category list separator
    = 2px dotted `#eee`.
  - Text: body `#777777`; headings `#000`; nav 13px/44px uppercase `#000`;
    meta 12px `#777777`; footer text `#777777`; footer input `#999999`.
  - Buttons: `.blog_btn` = 1px `#e9e9e9` border, bg `#f9f9ff`, padding 0
    28px, **border-radius 5px**, line-height 38px, hover → bg `#6f6fff`,
    white text; sidebar newsletter `.bbtns` = bg **`#000`**, white 14px;
    footer `.sub-btn` = bg `#6f6fff`, white, radius 0, line-height 34px.
  - Card overlap: `.blog_style1 .blog_text .blog_text_inner` = bg white,
    **margin-top -100px**, shadow `0px 10px 20px 0px rgba(153,153,153,0.1)`,
    padding 40px; post h4 = 24px/30px Inconsolata `#000`, hover `#6f6fff`.
  - Hero slider: `.blog_text` card = white, padding 115px 65px 65px; slider
    itself 100px top/bottom padding; `home_banner_area` bg image
    `home-banner.jpg` (`background-size: contain`) over `#f9f9ff`.
  - Sidebar widget card: 1px `#e9e9e9` border, 30px padding, `#f9f9ff` bg;
    `widget_title` 21px bold `#000`, padding-left 50px, 30×4px `#6f6fff`
    bar before; newsletter input 50px/14px, radius 5px.
  - Pagination: `page-link` radius **0**; active page bg `#000`, white text.
  - Footer: bg `#222222`; `footer_title` 21px bold white mb-28px; newsletter
    input 40px, bg + border `#191919`, 14px; `footer-bottom` padding-top
    70px; instafeed 3×2 grid of square thumbs.
  - Section padding rhythm: `p_120` = 120px top/bottom (blog area, footer);
    header is absolutely positioned (transparent over hero), content offset
    via `margin-top: 145px` on the first section.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/glyph-<n>/<w>/<h>`); icons → lucide-react (Search,
  Calendar, MessageSquare, Menu, ChevronLeft, ChevronRight, Send) + inline
  SVG BrandIcon for socials (lucide removed brand icons); no assets copied.
  The hero slider auto-advances (owl-carousel in the original) with prev/next
  controls; newsletter forms validate email and show a success state; nav
  has a "Pages" submenu (dropdown on desktop, expandable on mobile).

Glyph lives in `apps/glyph` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a transparent header with the site name, social
icons, and anchor links to the page's sections.

#### Scenario: Header content

- **GIVEN** the Glyph page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Glyph" (replacing the
  original's "Opium" logo)
- **AND** it SHALL show social media icons on the right
- **AND** it SHALL show the nav links Home, Category, Archive, Pages,
  Single Blog, Elements, and Contact

#### Scenario: Nav hover state

- **GIVEN** the header is rendered
- **WHEN** the user hovers a nav link or the link is the active section
- **THEN** the link SHALL turn the accent color `#6f6fff`

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the mobile menu
- **THEN** the menu SHALL list every nav link
- **AND** the "Pages" item SHALL expand its submenu items
- **AND** the user SHALL be able to close the menu

### Requirement: Hero banner slider

The system SHALL render a hero banner with a background image and an
auto-advancing text slider of featured posts on the right side.

#### Scenario: Hero slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider displays a slide
- **THEN** the slide SHALL show a category pill (e.g. "Gadgets")
- **AND** it SHALL show the date "March 14, 2018" and a comment count
  (e.g. "05")
- **AND** it SHALL show a bold post title and a short excerpt
- **AND** it SHALL show a "Read More" button

#### Scenario: Slider navigation

- **GIVEN** any hero slide is displayed
- **WHEN** the user presses the next or previous control
- **THEN** the slider SHALL show the corresponding slide

### Requirement: Blog post grid

The system SHALL render a grid of nine blog posts, three per row on
desktop, each with an image and an overlapping white text panel.

#### Scenario: Post card content

- **GIVEN** the page is rendered
- **WHEN** the blog grid is displayed
- **THEN** it SHALL show nine post cards in three columns
- **AND** each card SHALL show a category pill, the date "March 14, 2018"
  and a comment count
- **AND** each card SHALL show a 24px black title that turns accent on
  hover
- **AND** each card SHALL show an excerpt and a "Read More" button

#### Scenario: Card layout

- **GIVEN** a post card is displayed
- **WHEN** the card is rendered
- **THEN** the text panel SHALL overlap the top of the image (the
  original pulls it up 100px over the image with a soft shadow)

### Requirement: Pagination

The system SHALL render pagination below the blog grid.

#### Scenario: Pagination content

- **GIVEN** the blog grid is displayed
- **WHEN** the pagination is rendered
- **THEN** it SHALL show page numbers 01 through 04 and 09
- **AND** the active page SHALL have a black background with white text

### Requirement: Sidebar widgets

The system SHALL render a right sidebar with search, author, popular posts,
newsletter, and post categories widgets.

#### Scenario: Search widget

- **GIVEN** the sidebar is displayed
- **WHEN** the search widget is rendered
- **THEN** it SHALL show a search input with placeholder text

#### Scenario: Author widget

- **GIVEN** the sidebar is displayed
- **WHEN** the author widget is rendered
- **THEN** it SHALL show an avatar, the name "Charlie Barber", the role
  "Senior blog writer", a short bio, and social icons

#### Scenario: Popular posts widget

- **GIVEN** the sidebar is displayed
- **WHEN** the popular posts widget is rendered
- **THEN** it SHALL show the title "Popular Posts"
- **AND** it SHALL show four posts, each with a thumbnail, a 14px title,
  and a relative time (e.g. "02 Hours ago")

#### Scenario: Newsletter widget

- **GIVEN** the sidebar is displayed
- **WHEN** the newsletter widget is rendered
- **THEN** it SHALL show the title "Newsletter" with an email input and a
  black Subscribe button
- **AND** submitting a valid email SHALL show a success state
- **AND** submitting an invalid email SHALL show a validation error

#### Scenario: Post categories widget

- **GIVEN** the sidebar is displayed
- **WHEN** the categories widget is rendered
- **THEN** it SHALL show the title "Post Categories"
- **AND** it SHALL list Technology 37, Lifestyle 24, Fashion 59, Art 29,
  Food 15, Architecture 09, and Adventure 44
- **AND** hovering a category SHALL turn it the accent color

### Requirement: Footer

The system SHALL render a dark footer with four columns and a copyright
bar.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an About Us column with a short description
- **AND** it SHALL show a Newsletter column titled "Stay updated with our
  latest trends" with an email input and accent Subscribe button
- **AND** it SHALL show an Instagram Feed column with a 3×2 grid of square
  thumbnails
- **AND** it SHALL show a Follow Us column ("Let us be social") with
  social icons

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the copyright bar is rendered
- **THEN** it SHALL show a copyright line with a heart icon and a
  "Colorlib" credit link in the accent color (paraphrased)

## Verification checklist

- [ ] `bash scripts/verify-app.sh glyph` passes (typecheck + lint +
      100% coverage tests + build, ~2–3 min)
- [ ] `npm run spec:validate` passes
- [ ] Hero slider auto-advances and responds to manual prev/next controls
- [ ] Mobile menu opens/closes; "Pages" submenu expands
- [ ] Newsletter forms (sidebar + footer) validate email and show a
      success state
- [ ] Fidelity: section order 1:1, Inconsolata monospace font, `#6f6fff`
      accent, `#f9f9ff` light fills, `#e9e9e9` borders, 5px-radius
      `blog_btn`, -100px card overlap + soft shadow, dark `#222222` footer,
      picsum placeholders seeded `glyph-<n>`, no copied assets
- [ ] TEMPLATES.md: mark ALL THREE Opium lines (277, 1722, 2412) `[x]` and
      append the live surge URL
- [ ] `npm install` at root before committing (lockfile registers
      `apps/glyph`); `grep -c "free-react-templates/glyph"
  package-lock.json` >= 1
- [ ] `"homepage": "https://free-react-templates-glyph.surge.sh"`
      in `apps/glyph/package.json`
- [ ] PR title: `feat: Glyph — blog template (ColorLib Opium)`; body
      includes source URL, preview URL
      (`https://preview.colorlib.com/theme/opium/`), tokens, and the
      three-copy TEMPLATES.md note
