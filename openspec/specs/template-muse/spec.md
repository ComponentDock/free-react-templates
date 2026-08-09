# Template: Muse (Fashion / Lifestyle Blog)

## Purpose

Muse is a blog landing template in the free-react-templates monorepo. It is
an original React recreation of the ColorLib free "Andrea" design (see
TEMPLATES.md, Blog category), built under the monorepo stack: Vite + React 19

- Tailwind CSS 4 + TypeScript.

The original is a clean, editorial "fashion/lifestyle blog" page: a fixed
white left sidebar (25% width) with a giant serif logo ("Andrea Moore"),
vertical nav (Home, Fashion, Travel, About, Contact), a newsletter subscribe
form, and a small copyright line; a main content column with a vertical feed
of blog posts (each with a CIRCULAR photo, serif headline, meta row of
date/category/comment-count, excerpt, and a blue "Read More" text link with
arrow); and a light-grey right sidebar with Search, Categories (with counts),
Popular Articles (square thumbnails + author/date/comment meta), Tag Cloud
(pill links), a Newsletter card on a photo background with overlay, Archives
(monthly links with counts), and a Paragraph widget — plus a pagination row
(‹ 1 2 3 4 5 ›). Muse recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Andrea" — free blog website template
  (source: https://colorlib.com/wp/template/andrea/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/andrea/`
  (HTTP 200, 43.1KB) + stylesheet `css/style.css` (56.7KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`andrea-free-template.jpg`, 1200×946) confirms the visual design: clean
  white editorial layout with a fixed left sidebar ("Andrea Moore" logo in an
  elegant high-contrast serif over a faint floral watercolor, vertical nav
  with "Home" underlined in blue, newsletter input + blue arrow submit
  button, small copyright), a center feed of blog posts with large circular
  photographs, and a right sidebar with search/categories/popular
  articles/tag cloud. Accent is a soft periwinkle/sky blue; headings are
  serif (editorial), body/nav are sans-serif.
- **Section order (1:1):**
  1. Fixed aside (`#colorlib-aside`, `position: fixed`, `width: 25%`, white
     bg, `border-right: 1px solid #e6e6e6`, `padding: 5em 2em 40px`,
     `z-index: 1001`): `#colorlib-logo` "Andrea" — `font-family: "Abril
Fatface", cursive`, 74px, `line-height: .8`, text with a background
     image clipped into the glyphs (`background-clip: text` + transparent
     fill); `#colorlib-main-menu` vertical `ul` of links — Home (active:
     `color: #1eafed`, weight 600, blue animated underline via `:after`
     `scaleX`), Fashion, Travel, About, Contact; bottom `colorlib-footer`
     (absolute, bottom 20px): h3 "Subscribe for newsletter" (18px, weight
     600), `colorlib-subscribe-form` (email input + blue icon submit
     button, `background-color: #1eafed`), `.pfooter` copyright line
     (14px, `rgba(0,0,0,0.6)`).
  2. Main content (`.ftco-section`, container + row): 12 `blog-entry
ftco-animate d-md-flex` rows, each: `<a class="img img-2">` circular
     photo (150×150, `border-radius: 50%`, background-image) + `.text
text-2 pl-md-4`: `h3.mb-2` title link (30px, weight 400, #000,
     "A Loving Heart is the Truest Wisdom", "Great Things Never Came from
     Comfort Zone", "Paths Are Made by Walking", "The Secret of Getting
     Ahead is Getting Started", "You Can't Blame Gravity for Falling in
     Love", …), `.meta-wrap .meta` spans — `icon-calendar` + "June 28,
     2019", `icon-folder-o` + category link ("Travel"), `icon-comment2` +
     "5 Comment" — grey `#bfbfbf` 14px; excerpt `<p class="mb-4">` ("A
     small river named Duden flows by their place…"); `<a
class="btn-custom">Read More <span class="ion-ios-arrow-forward">`.
  3. Right sidebar (`col-xl-4 sidebar ftco-animate bg-light pt-5`):
     - Search: `form.search-form` — search icon + input placeholder
       "Type a keyword and hit enter".
     - Categories (`h3.sidebar-heading` 20px italic): ul `categories` —
       Fashion (6), Technology (8), Travel (2), Food (2), Photography (7).
     - Popular Articles: 3 × `block-21 mb-4 d-flex` — square thumb
       (`a.blog-img mr-4`, background-image) + `.text`: `h3.heading` link
       "Even the all-powerful Pointing has no control" + `.meta` rows
       (icon-calendar date, icon-person "Dave Lewis", icon-chat "19").
     - Tag Cloud: `ul.tagcloud` of `a.tag-cloud-link` pills — animals,
       human, people, cat, dog, nature, leaves, food.
     - Newsletter (`sidebar-box subs-wrap img py-4`, photo background +
       `.overlay`): `h3.mb-4.sidebar-heading` "Newsletter", copy "Far far
       away, behind the word mountains…", `form.subscribe-form` — email
       input (placeholder "Email Address") + `input.btn.btn-white.submit`
       "Subscribe".
     - Archives (`ul.categories`): Decob14 2018 (10), September 2018 (6),
       August 2018 (8), July 2018 (2), June 2018 (7), May 2018 (5).
     - Paragraph: `h3.sidebar-heading` "Paragraph" + lorem copy.
  4. Pagination: `ul.pagination` — ‹ (prev), 1 (`.active`), 2, 3, 4, 5, ›
     (next).
- **Design tokens extracted from `css/style.css`:**
  - Fonts: **"Abril Fatface"** (cursive — logo 74px + display headings),
    **"Lora"** (serif — editorial headings/body serif accents), **"Poppins"**
    (sans-serif — nav, meta, buttons, body). All loaded via Google Fonts
    `<link>` on the demo page.
  - Brand color: **#1eafed** (bright sky/periwinkle blue) — active nav
    link, nav hover underline (`:after` bg #1eafed, scaleX animation), logo
    clip underline, `.btn-primary` background, subscribe button
    background, link hover colors (13+ usages).
  - Buttons: `.btn` pill `border-radius: 30px`, no box-shadow;
    `.btn-primary` = `background: #1eafed; border: 1px solid #1eafed;
color: #fff` (hover: transparent bg, blue text);
    `.btn-white` = `background: #fff; color: #000` (hover: blue text);
    `.btn-custom` (Read More) = text link with arrow icon, blue.
  - Blog entry images: **circular** — `border-radius: 50%`, 150×150.
  - Sidebar widget headings (`.sidebar-heading`): 20px, `font-style:
italic`, weight normal, margin-bottom 30px.
  - Aside: fixed left 25% (320px off-canvas below 992px), white bg,
    `border-right: 1px solid #e6e6e6`.
  - Meta text: `#bfbfbf` / `#b3b3b3` grey, 14px; headings `#000000`.
  - Section backgrounds: page white; right sidebar column `bg-light`
    (`#f8f9fa`); Newsletter widget = photo background + dark `.overlay`;
    mobile nav toggle (`.js-colorlib-nav-toggle`) = hamburger with blue
    hover.
- **Recreation decisions:** repo-standard Navbar (site name "Muse", Home
  link, dark-mode toggle) — note the original's nav is the fixed left
  sidebar; implement as a fixed left sidebar (desktop) collapsing to a
  drawer/off-canvas on mobile with the repo-standard toggle button; the
  sidebar carries logo + nav + newsletter form + copyright; main column =
  blog feed of 6–12 posts (circular seeded images, serif titles, meta,
  excerpt, "Read More" links); right sidebar = search, categories, popular
  articles, tag cloud, newsletter card (photo bg + overlay), archives,
  paragraph; pagination row (‹ 1 2 3 4 5 ›); all images
  picsum-seeded (`picsum.photos/seed/muse-N/w/h`); Google Fonts via
  `<link>` (Abril Fatface + Lora + Poppins); icons via lucide-react
  (Calendar, Folder, MessageCircle, User, Search, ArrowRight).

Muse lives in `apps/muse` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Left sidebar (brand, nav, subscribe)

The system SHALL render a fixed left sidebar containing the site name
"Muse", a vertical navigation menu, a newsletter subscribe form, and a
copyright line.

#### Scenario: Sidebar content

- **GIVEN** the Muse page is rendered
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show the site name "Muse" styled as a large serif logo
- **AND** it SHALL show a vertical menu with a "Home" link (styled as the
  active item) plus Fashion, Travel, About, and Contact links
- **AND** it SHALL show a "Subscribe for newsletter" form with an email
  input and a submit button
- **AND** it SHALL show a small copyright line at the bottom

#### Scenario: Newsletter submit

- **GIVEN** the sidebar is rendered
- **WHEN** the user submits the newsletter form with a valid email
- **THEN** the form SHALL show a success message
- **AND** the email input SHALL no longer be present

#### Scenario: Mobile sidebar

- **GIVEN** the viewport is narrow (mobile width)
- **WHEN** the page is rendered
- **THEN** the sidebar SHALL be hidden off-canvas and a toggle button SHALL
  be available to open it

### Requirement: Blog post feed

The system SHALL render a main content column with a vertical feed of blog
post entries, each with a circular image, a title, meta information, an
excerpt, and a "Read More" link.

#### Scenario: Blog entry content

- **GIVEN** the page is rendered
- **WHEN** the main content column is displayed
- **THEN** it SHALL render at least six blog entries, each with a circular
  image, a serif title link (e.g. "A Loving Heart is the Truest Wisdom")
- **AND** each entry SHALL show a meta row with a date, a category, and a
  comment count (e.g. "June 28, 2019", "Travel", "5 Comment")
- **AND** each entry SHALL show an excerpt paragraph and a "Read More" link
  with an arrow icon

### Requirement: Search widget

The system SHALL render a search form in the right sidebar with a search
icon and an input placeholder "Type a keyword and hit enter".

#### Scenario: Search input

- **GIVEN** the page is rendered
- **WHEN** the right sidebar is displayed
- **THEN** it SHALL show a search form with an input whose placeholder is
  "Type a keyword and hit enter"

### Requirement: Categories widget

The system SHALL render a Categories widget listing category names with
post counts.

#### Scenario: Category list

- **GIVEN** the page is rendered
- **WHEN** the Categories widget is displayed
- **THEN** it SHALL show a heading "Categories"
- **AND** it SHALL list at least four categories with counts, e.g. Fashion
  (6), Technology (8), Travel (2), Food (2), Photography (7)

### Requirement: Popular Articles widget

The system SHALL render a Popular Articles widget with at least three
entries, each with a thumbnail, a title, and meta (date, author, comments).

#### Scenario: Popular article entries

- **GIVEN** the page is rendered
- **WHEN** the Popular Articles widget is displayed
- **THEN** it SHALL show a heading "Popular Articles"
- **AND** it SHALL render entries, each with a small image, a title link,
  and a meta row with a date, an author name, and a comment count

### Requirement: Tag Cloud widget

The system SHALL render a Tag Cloud widget with pill-shaped tag links.

#### Scenario: Tag links

- **GIVEN** the page is rendered
- **WHEN** the Tag Cloud widget is displayed
- **THEN** it SHALL show a heading "Tag Cloud"
- **AND** it SHALL render at least six tag links (e.g. animals, human,
  people, cat, dog, nature)

### Requirement: Newsletter sidebar card

The system SHALL render a Newsletter card in the right sidebar on a photo
background with an overlay, a heading, supporting copy, and an email form
with a "Subscribe" button.

#### Scenario: Newsletter card content

- **GIVEN** the page is rendered
- **WHEN** the Newsletter card is displayed
- **THEN** it SHALL show the heading "Newsletter" over a photo background
  with a dark overlay
- **AND** it SHALL show supporting copy and an email input with a
  "Subscribe" button

### Requirement: Archives widget

The system SHALL render an Archives widget listing months with post counts.

#### Scenario: Archive list

- **GIVEN** the page is rendered
- **WHEN** the Archives widget is displayed
- **THEN** it SHALL show a heading "Archives"
- **AND** it SHALL list at least four month entries, each with a post count

### Requirement: Pagination

The system SHALL render a pagination row with previous/next arrows and page
numbers, with the first page active.

#### Scenario: Pagination links

- **GIVEN** the page is rendered
- **WHEN** the pagination is displayed
- **THEN** it SHALL show previous/next arrow links and numbered page links
  (1 active, 2, 3, 4, 5)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Muse app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the sidebar/nav, main blog feed, right
  sidebar widgets, and pagination inside the main landmark
- **AND** the document title SHALL be "Muse — Fashion & Lifestyle Blog"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- muse` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (left sidebar → blog feed →
      right sidebar widgets (search, categories, popular, tag cloud,
      newsletter, archives, paragraph) → pagination).
- [ ] Design tokens applied: brand blue #1eafed (active nav, links,
      subscribe button), Abril Fatface logo/display + Lora serif + Poppins
      sans, circular 150×150 blog images (radius 50%), pill buttons
      (radius 30px), italic serif sidebar headings, fixed white left
      sidebar (25%, border-right #e6e6e6), light-grey right sidebar
      (#f8f9fa), newsletter card on photo bg + overlay.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Andrea), preview URL, tokens,
      and renames.
