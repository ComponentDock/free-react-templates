# Template: Diary (Blog / Personal Blog)

## Purpose

Diary is a single-page blog / personal-journal website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Andrea" template (see TEMPLATES.md — line 240, Blog section, plus
duplicate rows at lines 332 and 1696; the first `- [ ]` item whose prep did
not exist on main), built under a NEW name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, editorial personal-blog layout: a fixed white
off-canvas left sidebar (large serif logo "Andrea Moore", vertical menu,
newsletter signup, copyright line), a central blog-feed column (circular
post thumbnails beside serif titles, meta rows, excerpts, "Read More"
links, numbered pagination), and a light-grey right sidebar with Search,
Categories, Popular Articles, Tag Cloud, Newsletter and Archives widgets.
The brand accent is a light sky blue `#1eafed` on white / light-grey
(`#f8f9fa`) neutrals, with a three-font system: **Abril Fatface** (cursive
logo), **Lora** (serif headings) and **Poppins** (sans body). Diary
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Andrea" — `https://colorlib.com/wp/template/andrea/`
  (Blog category item, "personal blog / writer" style). TEMPLATES.md has
  **THREE copies** of this item (lines 240, 332, 1696 — mark ALL `[x]` when
  done); none is shipped yet.
- **Preview URL:** `https://preview.colorlib.com/theme/andrea/` — **HTTP 200**
  (43 KB, ~0.12 s), fully reachable; structure + tokens below are from this
  live DOM and its `css/style.css` (56.7 KB). Screenshot used to confirm the
  visual design (see below).
- **Screenshot:** `andrea-free-template.jpg` (1200×946, AVIF→PNG, verified
  via browser vision): classic three-column blog layout on a light-grey
  background. Left: vertical menu (Home active, blue underline), large
  two-line serif logo "Andrea Moore" over a faint floral watermark, "Subscribe
  for newsletter" input, "Copyright 2016 … made with love by Colorlib" line.
  Center: blog cards — circular cropped photo left, bold serif title right,
  grey meta (date | category | comment count), excerpt, blue "Read More >".
  Right: Search ("Type a keyword and hit enter"), Categories with counts,
  Popular Articles (square thumbs), pill-shaped Tag Cloud buttons. Clean,
  minimalist; white content, light-grey page background, dark text, blue
  accents.
- **Section structure (from the live DOM, in order):**
  1. `aside#colorlib-aside` (fixed left, 320px/25%, white, full-height):
     - `h1#colorlib-logo` — "Andrea **Moore**" (Abril Fatface 74px, "Moore"
       as a `display:block` span; logo link has `background-image` +
       background-clip text treatment).
     - `nav#colorlib-main-menu` — vertical links: **Home** (active),
       **Fashion**, **Travel**, **About**, **Contact**; each link has a 2px
       animated underline (accent on hover), active item colored `#1eafed`.
     - "Subscribe for newsletter" `h3` + `form.colorlib-subscribe-form`
       (paper-plane icon + `input.form-control`).
     - `p.pfooter` copyright/credit line (…made with by Colorlib).
  2. **Main blog feed** (`section.ftco-section.ftco-no-pt.ftco-no-pb` >
     `div.container` > `div.row.d-flex` > `div.col-xl-8.py-5.px-md-5`):
     - 12 `div.blog-entry.ftco-animate.d-md-flex` cards, each:
       `a.img.img-2` (150×150, `border-radius: 50%` circular thumbnail,
       background-image) + `div.text.text-2.pl-md-4` with `h3.mb-2` title
       link (30px, Lora, weight 400), `p.meta` row (icon-calendar date e.g.
       "June 28, 2019" · icon-folder-o category link e.g. "Travel" ·
       icon-comment2 "5 Comment"), excerpt paragraph, and
       `a.btn-custom` "Read More" + arrow (`ion-ios-arrow-forward`).
     - Real titles from the DOM: "A Loving Heart is the Truest Wisdom",
       "Great Things Never Came from Comfort Zone", "Paths Are Made by
       Walking", "The Secret of Getting Ahead is Getting Started" (reuse
       these four; paraphrase the rest).
     - `ul.block-27` pagination: `‹ 1 2 3 4 5 ›` — 40px square cells, 1px
       accent border, active cell filled accent with white text.
  3. **Right sidebar** (`div.col-xl-4.sidebar.ftco-animate.bg-light.pt-5`):
     - **Search** — `form.search-form`, search icon + input placeholder
       "Type a keyword and hit enter".
     - **Categories** — italic 20px heading; list w/ counts: Fashion (6),
       Technology (8), Travel (2), Food (2), Photography (7).
     - **Popular Articles** — 3 × `div.block-21` rows (small square
       `a.blog-img` + `h3.heading` title + meta: date / author "Dave Lewis" /
       comment count).
     - **Tag Cloud** — `a.tag-cloud-link` pills: animals, human, people,
       cat, dog, nature, leaves, food.
     - **Newsletter** — `div.sidebar-box.subs-wrap.img` (background image +
       black overlay `opacity:.6`), "Newsletter" heading, blurb "Far far
       away, behind the word mountains…", `form.subscribe-form` with
       "Email Address" input + `btn.btn-white.submit` "Subscribe".
     - **Archives** — list w/ counts: Decob14 2018 (10), September 2018 (6),
       August 2018 (8), July 2018 (2), June 2018 (7), May 2018 (5).
     - **Paragraph** — plain lorem text widget.
- **Behavior notes:** the aside is off-canvas on mobile (`transform:
translateX(-320px)`) with a hamburger toggle; `body` main area floats
  right of the fixed sidebar on desktop. The original is a multi-page demo
  (index/fashion/travel/about/contact/single) — the recreation is a ONE
  page: the blog listing, with nav links as in-page anchors/placeholders.

## Design tokens (extracted from `css/style.css`)

- Brand accent: **#1eafed** (light sky blue; 13 uses — link color, active
  nav item, nav underline, `.btn-primary` fill, pagination active cell,
  h2 span highlights).
- Fonts:
  - Body: **"Poppins", Arial, sans-serif** — 15px, line-height 1.8, weight
    400, color **#666666**, page background **#fff** (Google Fonts `<link>`).
  - Headings (h1/h3/h4/h5): **"Lora", Arial, serif** — weight normal, color
    `rgba(0,0,0,0.8)`, line-height 1.5 (Google Fonts).
  - Page-level h2: Poppins 600, 50px, color #000 (used for section titles —
    not present on the index page itself).
  - Logo: **"Abril Fatface", cursive** — 74px (62px smaller viewport),
    line-height .8, color #000, over a background image with
    background-clip:text treatment ("Moore" as a block span).
- Buttons: pill shape — `border-radius: 30px`, no shadow. `.btn-primary` =
  solid `#1eafed` bg + white text; hover = transparent bg + `#1eafed` text.
  `.btn-white` = white border/text variant (used in the sidebar newsletter
  "Subscribe").
- Nav links: Poppins, padding 10px 0, 2px accent underline revealed
  (`.a:after` accent background), active item `#1eafed`.
- Blog card: thumbnail 150×150 circle (`border-radius: 50%`), title h3 30px
  Lora weight 400; meta 14px `#bfbfbf` with links `#000`; excerpt inherits
  body grey; "Read More" is an accent link with a forward arrow.
- Sidebar: background `#f8f9fa` (`bg-light`); `.sidebar-box` margin-bottom
  40px; `.sidebar-heading` 20px, normal weight, **italic**; widget lists use
  link color `#1eafed` with counts in parentheses.
- Newsletter widget (subs-wrap): background image + black overlay 60%
  opacity, text `rgba(255,255,255,0.7)`.
- Pagination (`.block-27`): 40×40px square cells, 1px solid `#1eafed`,
  active cell `background: #1eafed; color: #fff`.
- Imagery: all photos are placeholders in the recreation —
  `https://picsum.photos/seed/diary-<n>/<w>/<h>` (deterministic per
  template); icons from `lucide-react` (calendar, folder, message-circle,
  search, paper-plane, arrow-right; brand social icons via inline SVG if
  needed); no ColorLib assets.

## Requirements

### Requirement: Off-canvas sidebar (logo, menu, newsletter, credit)

The system SHALL render a fixed left sidebar with the brand logo, the
vertical navigation, a newsletter signup, and the credit line.

#### Scenario: Sidebar renders on desktop

- **GIVEN** the Diary app is rendered at a desktop viewport
- **WHEN** the page is displayed
- **THEN** a fixed full-height sidebar (≈320px, white background) SHALL
  render on the left of the viewport
- **AND** the logo SHALL read "Diary" (Abril Fatface display font) with the
  wordmark treatment of the original "Andrea Moore"
- **AND** the menu SHALL show Home (active) / Fashion / Travel / About /
  Contact as vertical links with an accent underline on hover
- **AND** a "Subscribe for newsletter" heading with an email input and a
  paper-plane submit button SHALL render below the menu
- **AND** a small credit line ("…made with by Colorlib" paraphrased) SHALL
  render at the sidebar bottom

#### Scenario: Mobile sidebar

- **GIVEN** the Diary app is rendered at a mobile viewport
- **WHEN** the hamburger toggle is activated
- **THEN** the sidebar SHALL slide in from the left (off-canvas by default)
- **AND** the toggle SHALL expose `aria-expanded` and the menu SHALL be
  keyboard-operable
- **AND** closing (toggle again / backdrop / Escape) SHALL hide the sidebar

### Requirement: Blog feed

The system SHALL render the central blog listing with circular-thumbnail
post cards and pagination.

#### Scenario: Blog cards render

- **GIVEN** the Diary app is rendered
- **WHEN** the blog feed is displayed
- **THEN** it SHALL show a column of post cards, each with a 150×150
  **circular** thumbnail image on one side
- **AND** a serif (Lora) 30px title link ("A Loving Heart is the Truest
  Wisdom", "Great Things Never Came from Comfort Zone", …)
- **AND** a meta row SHALL render date (e.g. "June 28, 2019"), category
  (e.g. Travel), and comment count (e.g. "5 Comment") in light grey
- **AND** an excerpt paragraph and an accent "Read More" link with a
  forward-arrow icon SHALL render below the meta

#### Scenario: Pagination renders

- **GIVEN** the Diary app is rendered
- **WHEN** the blog feed is scrolled to its end
- **THEN** a pagination bar SHALL render square cells `‹ 1 2 3 4 5 ›`
- **AND** the current page cell SHALL be filled with the `#1eafed` accent
  and white text, other cells SHALL have a 1px accent border

### Requirement: Right sidebar widgets

The system SHALL render the right sidebar with Search, Categories, Popular
Articles, Tag Cloud, Newsletter, Archives, and Paragraph widgets on a
light-grey background.

#### Scenario: Widgets render

- **GIVEN** the Diary app is rendered
- **WHEN** the right sidebar is displayed
- **THEN** it SHALL render on a `#f8f9fa` background
- **AND** a search form with a search icon and the placeholder "Type a
  keyword and hit enter" SHALL render at the top
- **AND** a Categories widget SHALL list Fashion (6), Technology (8),
  Travel (2), Food (2), Photography (7) with counts
- **AND** a Popular Articles widget SHALL render at least three rows of
  small square thumbnail + title + meta (date / author / comments)
- **AND** a Tag Cloud widget SHALL render pill-shaped links (animals,
  human, people, cat, dog, nature, leaves, food)
- **AND** a Newsletter widget SHALL render over an image with a dark
  overlay: heading, blurb, "Email Address" input, and a "Subscribe" button
- **AND** an Archives widget SHALL list months with post counts
- **AND** a Paragraph widget SHALL render a short lorem text block
- **AND** every widget heading SHALL be 20px italic (Lora)

#### Scenario: Newsletter validates the email

- **GIVEN** the sidebar Newsletter widget is displayed
- **WHEN** the user submits an invalid email
- **THEN** a per-field error SHALL show and the form SHALL NOT submit
- **AND** submitting a valid email SHALL show a success message

### Requirement: Page composition

The system SHALL compose the sidebar, blog feed, and right sidebar in a
single page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Diary app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the fixed left sidebar, the central blog
  feed, and the right sidebar in the original's layout
- **AND** the document title SHALL be "Diary — Personal Blog"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- diary` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Layout matches the original 1:1: fixed left sidebar (~320px) + central
      `col-xl-8` blog feed + right sidebar on `#f8f9fa`.
- [ ] Design tokens applied: accent `#1eafed`, body Poppins 15px/1.8
      `#666666`, headings Lora `rgba(0,0,0,0.8)`, logo Abril Fatface,
      pill buttons (radius 30px), sidebar `#f8f9fa`, meta `#bfbfbf`.
- [ ] Sidebar renders logo, vertical menu (Home active), "Subscribe for
      newsletter" form, credit line; collapses to an accessible off-canvas
      menu on mobile.
- [ ] Blog cards render 150×150 circular thumbnails, Lora 30px titles, meta
      (date · category · comments), excerpt, accent "Read More" + arrow.
- [ ] Pagination renders 40px square cells with accent border and filled
      active cell.
- [ ] All seven right-sidebar widgets render with 20px italic headings;
      newsletter form validates email with error/success states.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets); icons
      from lucide-react / inline SVG.
- [ ] PR description records source (ColorLib Andrea), preview URL
      (HTTP 200), tokens, and renames; TEMPLATES.md marks ALL THREE copies
      (lines 240, 332, 1696) `[x]` when done.
