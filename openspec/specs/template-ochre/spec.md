# Template: Ochre (Blog Template)

## Purpose

Ochre is a single-page lifestyle/fashion blog website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Lifeleck" website template design
(source: https://colorlib.com/wp/template/lifeleck/), built under a DIFFERENT
name (Ochre — a natural earth pigment, matching the design's rust-orange
`#fc4600` accent) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Lifeleck" — lifestyle blog template. TEMPLATES.md
  has TWO copies of this item (lines 269 and 439 — duplicate lines exist for
  some items; implementer must mark ALL copies when done).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/lifeleck/`
  (HTTP 200, 28.9 KB HTML; page title "lifeleck BLOG || HOME"). Stylesheets:
  `css/style.css` (152.9 KB, fully extracted for tokens) + bootstrap,
  owl.carousel, animate, themify-icons (`ti-` icons), liner_icon,
  `css/search.css` (search toggle). Cross-checked against the TEMPLATES.md
  screenshot (`lifeleck-free-template.jpg`, 1200×946, viewed in browser) —
  all match. The demo brands itself "Lifeleck"; the recreation uses the NEW
  name **Ochre** (brand orange #fc4600).
- **Visual design (from DOM + CSS tokens + screenshot):** minimalist,
  high-contrast white lifestyle-blog aesthetic with a rust-orange accent.
  White header (serif logo left, centered nav, search icon + social icons
  right). Hero banner: 3 equal image columns; each has an overlapping white
  text card pulled up over the bottom of the image (`bottom: -150px`,
  `max-width: 490px`) with an orange category line ("Fashion / Life style"),
  a serif h2 title, and a gray date line ("Posted on April 15, 2019"). Below:
  a 2-column blog grid (8 entries) with the same overlapping white card
  pattern (`margin-top: -50px`, `max-width: 320px`), a right sidebar (search
  box, Categories list, Popular Feeds with thumbnails, Subscribe email form
  with arrow button), a centered orange "Load More" button, and plain-text
  pagination (Previous 1 2 3 Next). A full-width Instagram-style social strip
  (6 square image tiles with hover overlay + camera icon), then a light-gray
  footer (`#f7f7f7`) with four widget columns (About Us, Contact Info,
  Important Link, Newsletter) and a copyright bar ("Copyright © ... made with
  ♥ by Colorlib").
- **Structure (1:1, index page):**
  1. Header `header.main_menu` — `nav.navbar` (white bg): logo
     (`.navbar-brand`, "Lifeleck" serif, black), centered
     `ul.main-menu-item` links: Home (index.html), Archive, Category,
     Contact + "Pages" dropdown (dropdown-item links), right side: search
     toggle (magnifying-glass, `css/search.css` search overlay), social
     icons (themify: facebook, twitter, instagram, pinterest).
  2. Banner `section.banner_post` — `div.container-fluid` row
     `justify-content-between` with THREE `div.banner_post_1` columns
     (bg images `banner_blog_1/2/3`; `background-size: cover`, min-height):
     each `.banner_post_iner.text-center` (white card, `position: absolute;
bottom: -150px; left: 0; right: 0; max-width: 490px; margin: 0 auto;
padding: 45px`) = `<a><h5>` category (orange #fc4600, 14px) +
     `<a><h2>` title (dark #2a2a2a serif 700) + `<p>` "Posted on April 15,
     2019" (gray).
  3. All posts `section.all_post.section_padding` — `div.container`:
     - Left `div.col-lg-8`: `div.row` of EIGHT `div.col-lg-6.col-sm-6`
       posts `div.single_post.post_1`: `div.single_post_img` (image) +
       `div.single_post_text.text-center` (white card, `padding: 40px 10px;
margin-top: -50px; max-width: 320px; display: inline-block`) =
       `<a><h5>` category (orange) + `<a><h2>` title (#2a2a2a, Lora 700,
       ~24px) + `<p>` date (gray #888888). Then centered
       `div.load_btn` + `a.btn_1` "Load More" (orange #fc4600 bg, white
       text, `padding: 14.5px 58px`, hover bg #2a2a2a). Then
       `nav[aria-label="Page navigation example"]` + `ul.pagination
.page_pageniation` (borderless links, #2a2a2a, 20px): Previous
       (disabled), 1, 2, 3, Next.
     - Right `div.col-lg-4` sidebar `aside.sidebar_widget`:
       - `div.single_sidebar_wiget.search_form_widget` — search form
         (input + search icon button).
       - `div.single_sidebar_wiget` — `h3.sidebar_tittle` "Categories"
         (#2a2a2a, 24px, 600, with underline bar) + `ul.list-unstyled`
         links: Culture, Creative Design, Illustration, Production,
         Mangement, Branding.
       - `div.single_sidebar_wiget` — "Popular Feeds" + 3 posts: thumb
         image + `<h3>` title ("Subdue lesser beast winged...") + date p.
       - `div.single_sidebar_wiget` — "Subscribe" + form (email input
         "Your Email Address" + `button.click-btn` arrow
         `ti-arrow-right`).
  4. Social connect `section.social_connect_part` — full-width row of SIX
     `div.single-social_connect` (square Instagram images with
     `.social_connect_overlay` hover + `ti-instagram` icon).
  5. Footer `footer.footer-area` (bg #f7f7f7, `padding: 130px 0 25px`) —
     `div.row` of FOUR `div.single-footer-widget`:
     - "About Us" h4 + paragraph ("Heaven fruitful doesn't over the lesser
       days appear cree ping...").
     - "Contact Info" h4 + Address / Phone (+8880 44338899) / Email
       (info@colorlib.com) lines.
     - "Important Link" h4 + links: WHMCS-bridge, Search Domain, My
       Account, Shopping Cart, Our Main Shop.
     - "Newsletter" h4 + paragraph + email form (input + arrow button);
       below: `.footer-social` icons (facebook, twitter, instagram, skype)
       and copyright `p.footer-text` "Copyright © 2019 All rights
       reserved | This template is made with ♥ by Colorlib".
- **Design tokens extracted from `css/style.css` + DOM:**
  - Brand orange **`#fc4600`** (post category h5 `.post_1 .single_post_text
a h5`, `.btn_1` bg, banner category color). Hover dark **`#2a2a2a`**
    (btn_1 hover bg; also headings color and pagination link color).
  - Footer bg **`#f7f7f7`**; page/header/cards white `#fff`; date/excerpt
    gray **`#888888`** (also `#999999` muted); headings `#2a2a2a`.
  - Fonts: **"Lora"** (serif — body 14px AND headings 700, via Google
    Fonts `@import`) + **"Cardo"** (400/700, secondary serif). Logo uses the
    same serif. No sans body font (the demo is serif throughout; the
    screenshot's "sans" impression comes from the small uppercase-ish UI
    text at 14px).
  - Buttons: `.btn_1` — `background-color: #fc4600`, white text, `padding:
14.5px 58px`, `font-size: 14px`, hover `#2a2a2a`; arrow buttons are
    bare icons (`ti-arrow-right`).
  - Card pattern: white card overlapping the image above it (`margin-top:
-50px` posts / `bottom: -150px` banner, `max-width: 320px`/`490px`,
    centered text).
  - Sidebar titles: 24px, weight 600, `#2a2a2a`, with a short underline
    bar (`:after`).
  - Section rhythm: banner cards `padding: 45px`; post cards `padding:
40px 10px`; footer `padding: 130px 0 25px`; social strip full-width.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/ochre-<n>/<w>/<h>` — 3 banner + 8 posts + 3 popular
  feeds + 6 social tiles = 20 seeds); icons → lucide-react (search,
  arrow-right; brand social icons as inline SVG — lucide-react removed brand
  icons); fonts via Google Fonts `<link>` (Lora 400/700 + Cardo 400/700);
  repo-standard Navbar chrome (site name + dark-mode toggle); the header
  search toggle can be a simple icon button (no overlay needed for the
  single-page recreation); pagination is a static 4-link control
  (Previous 1 2 3 Next) with Previous disabled; no assets copied.

Ochre lives in `apps/ochre` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Header with logo, navigation, search and social icons

The system SHALL render a white header with the site name, a centered link
list, a search icon button, and social icon links.

#### Scenario: Header content

- **GIVEN** the Ochre page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Ochre"
- **AND** it SHALL show links Home, Archive, Category, and Contact
- **AND** it SHALL show a search icon button with an accessible label
- **AND** it SHALL show social icon links (GitHub, X, LinkedIn)

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle (repo-standard chrome)
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Banner posts

The system SHALL render three banner image posts, each with an overlapping
white card containing a category, a title, and a date.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the banner section is displayed
- **THEN** it SHALL show three banner posts
- **AND** each post SHALL show a category line (e.g. "Fashion / Life style")
- **AND** each post SHALL show a title and a "Posted on" date line

### Requirement: Blog grid

The system SHALL render a two-column grid of blog posts, each with an image
and an overlapping white card with a category, a title, and a date.

#### Scenario: Post entries

- **GIVEN** the page is rendered
- **WHEN** the blog grid is displayed
- **THEN** it SHALL show eight posts in a two-column grid
- **AND** each post SHALL show a category, a title, and a date

### Requirement: Sidebar

The system SHALL render a sidebar with a search form, a Categories list, a
Popular Feeds list, and a Subscribe form.

#### Scenario: Sidebar widgets

- **GIVEN** the page is rendered
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show a search input with a search button
- **AND** it SHALL show a "Categories" heading with six category links
- **AND** it SHALL show a "Popular Feeds" heading with three feed items
- **AND** it SHALL show a "Subscribe" heading with an email input and a
  subscribe button

### Requirement: Load more button and pagination

The system SHALL render a centered "Load More" button and plain-text
pagination below the grid.

#### Scenario: More content controls

- **GIVEN** the blog grid is displayed
- **WHEN** the user scrolls past the grid
- **THEN** a "Load More" button SHALL be visible
- **AND** pagination links (Previous, 1, 2, 3, Next) SHALL be visible with
  Previous disabled

### Requirement: Social connect strip

The system SHALL render a full-width strip of six image tiles with
Instagram-style hover overlays.

#### Scenario: Social tiles

- **GIVEN** the page is rendered
- **WHEN** the social connect section is displayed
- **THEN** it SHALL show six square image tiles
- **AND** each tile SHALL expose an accessible Instagram label

### Requirement: Footer

The system SHALL render a light-gray footer with four widget columns and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show widget headings About Us, Contact Info, Important
  Link, and Newsletter
- **AND** it SHALL show a copyright line with the site name

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Ochre app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, banner, blog grid with
  sidebar, load-more and pagination, social strip, and footer in the
  expected order
- **AND** the document title SHALL be "Ochre — Blog Template"

## Verification checklist

- [ ] `apps/ochre` exists with package name `@free-react-templates/ochre`
- [ ] `vite.config.ts` registers `injectUiSource()` (see docs/conventions.md)
- [ ] Fonts Lora (400/700) + Cardo via Google Fonts `<link>` in index.html
- [ ] Brand orange `#fc4600`, dark `#2a2a2a`, footer `#f7f7f7`, gray
      `#888888` defined in `@theme`
- [ ] Section order matches the reference 1:1 (header → banner (3) → blog
      grid (8, 2-col) + sidebar (search/categories/feeds/subscribe) → load
      more + pagination → social strip (6 tiles) → footer (4 widgets))
- [ ] Overlapping white card pattern on banner and post cards
- [ ] Per-app gate passes: `scripts/verify-app.sh ochre` (typecheck + lint +
      100% coverage tests + build)
- [ ] `npm run spec:validate` passes for this spec
- [ ] TEMPLATES.md: mark BOTH Lifeleck copies (lines 269 and 439)
      `[~]` → `[x]` + Surge URL + homepage after merge
- [ ] `npm run readme:status` regenerates README Templates status table
- [ ] PR description states: source template (ColorLib Lifeleck), preview
      URL, design tokens, what differs (rename, picsum placeholders)
