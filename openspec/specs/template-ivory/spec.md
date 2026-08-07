# Template: Ivory (Blog)

## Purpose

Ivory is a single-page personal blog template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Blanca"
personal blog website template design (see TEMPLATES.md, Blog category, line
245), built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Blanca" — minimalist, elegant personal lifestyle
  blog: a slim top utility bar (greeting + email left, social icons + search
  right), a giant script wordmark logo over a right-aligned tiny uppercase
  tagline, a centered uppercase nav with a 2px underline on hover/current, a
  full-width hero slider of 3 photo slides with square white-outline dots
  (bottom-left) and white square prev/next buttons, a circular "Subscribe to
  my YouTube channel" badge overlapping the hero's bottom-right corner, a
  2-column body (blog posts centered in a col-lg-9 main column + col-lg-3
  sidebar: about-me bio, recent posts, black tag pills, ad banner), numbered
  square pagination (01. 02. 03.), and a footer with 4 recent-post columns,
  a full-width Instagram strip, and a dark bottom bar with copyright +
  social icons (source: https://colorlib.com/wp/template/blanca/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/blanca/`
  (HTTP 200, ~31.8KB HTML). DOM + `style.css` (23.2KB) + `css/bootstrap.min.css`
  - `css/swiper.min.css` extracted and analyzed; tokens below come from
    `style.css`.
- **Visual design (from screenshot `blanca-free-template.jpg` + DOM):**
  clean, minimalist, magazine-style personal blog on white. The screenshot
  shows the thin top bar ("HELLO WORLD, MY NAME IS BLANCA" left, email +
  social icons + search right), the large flowing black script logo "Blanca"
  with tiny letterspaced "PERSONAL BLOG" under it, a small uppercase menu
  (HOME · FEATURES · PORTFOLIO · BLOG · ABOUT ME · CONTACT), then a full-width
  golden-hour photograph (woman in red dress on a rocky outcrop overlooking a
  valley) with white square arrows at the edges and small square dots
  bottom-left. Overlapping the hero's bottom-right corner: a circular
  lime-green widget ("Subscribe" in script over a photo, "TO MY YOUTUBE
  CHANNEL" in tiny caps). Below: a centered blog post (uppercase gray date,
  dark serif-ish title, gray tags), and the start of the "I'm Amelia Smith"
  bio in the sidebar. Palette is monochrome (white, ink `#2f2f2f`, grays)
  with the lime-green appearing only in the subscribe badge photo.
- **Section order (1:1) from the DOM:**
  1. Header (`header.site-header`):
     - `div.top-header-bar` → `div.container-fluid` → `div.row`:
       - `div.col-lg-6.flex.align-items-center`: `div.header-bar-text`
         (`d-none d-lg-block`) — "Hello world, My name is Blanca";
         `div.header-bar-email` (`d-none d-lg-block`) —
         "Contactme@email.com" (both 12px uppercase `letter-spacing:
.08rem`, `#afafaf`).
       - `div.col-12.col-lg-6.flex.justify-content-between.justify-content-lg-end.align-items-center`:
         `div.header-bar-social` (`d-none d-md-block`) — 6 Font Awesome
         icons (pinterest, facebook, twitter, dribbble, behance, linkedin),
         24×24px, `#bec4c9`, hover `#2f2f2f`; `div.header-bar-search`
         (`d-none d-md-block`, width 300px on md+) — search input
         (`background: #f5f5f5`, no border except `border-bottom: 2px solid
#d5d5d5`, italic 12px, `#afafaf`, text-align right on md+).
     - `div.container` → `div.row` → `div.col-12`:
       - `div.site-branding.flex.flex-column.align-items-center` (padding
         40px 0): `h1.site-title` → a "Blanca" (`font-family:
'BeyondTheMountains'`, 72px, 112px ≥576px, `#2f2f2f`);
         `p.site-description` "Personal Blog" (10px, `letter-spacing:
.26rem`, uppercase, `#9d9d9d`, right-aligned, width 284px,
         margin-top -5px).
       - `nav.site-navigation` (white bg, absolute full-width, height 22px,
         overflow hidden, `transition: all .35s`; `.show` expands):
         `div.hamburger-menu.d-lg-none` (4 spans); `ul.flex-lg.flex-lg-row.
justify-content-lg-center` — li 12px uppercase `letter-spacing:
.08rem`, `padding: 10px 0` (0 20px ≥992px): Home
         (`li.current-menu-item`), features, Portfolio, blog, about me,
         Contact. Link hover/current: `border-bottom: 2px solid #2f2f2f`
         (transparent default), `padding: 4px 0`.
  2. Hero slider (`div.hero-section` → `div.container-fluid` →
     `div.row` → `div.col-12`):
     - `div.swiper-container.hero-slider` (margin-top 40px) →
       `div.swiper-wrapper` — 3 `div.swiper-slide`, each
       `div.hero-content.flex.justify-content-center.align-items-center.
flex-column` with `<img src="images/slider.jpg">` (full-width, same
       image ×3).
     - `div.swiper-pagination` — bullets 12×12px, `border-radius: 0`,
       `background: transparent`, `border: 2px solid #fff`, active = filled
       white; container `bottom: 30px; left: 38px; text-align: left`.
     - `div.swiper-button-next` / `div.swiper-button-prev` — 54×54px white
       squares (`background: #fff`), arrows `#3a3a3a`, `right/left: 42px`,
       `margin-top: -27px`, `visibility: hidden` <768px, visible ≥768px.
     - Below (same row/col): `div.container` → `div.row` →
       `div.offset-lg-9.col-12.col-lg-3` → `a` wrapping
       `div.yt-subscribe` (position absolute, `right: 15px`, `bottom:
-200px`, `z-index: 99`, text-align center): `<img
src="images/yt-subscribe.png">` (160px circular lime-green photo
       badge), `h3` "Subscribe" (36px BeyondTheMountains, `#2f2f2f`), `p`
       "To my Youtube Channel" (12px, `#afafaf`, uppercase, letterspaced).
  3. Blog list (`div.container.single-page` — `padding-top: 165px` (0
     ≥992px), `padding-bottom: 100px`) → `div.row`:
     - `div.col-12.col-lg-9` → 3× `div.content-wrap` (`margin-top: 110px`,
       `text-align: center`, `color: #afafaf`), each:
       - `header.entry-header`: `div.posted-date` — "January 30, 2018"
         (12px uppercase letterspaced); `h2.entry-title` — e.g. "Why I
         love Winter: A short story" (30px, `#2f2f2f`, margin-top 12px);
         `div.tags-links` (margin-top 35px) — a tags `#winter #love #snow
#january` (16px `#afafaf`, `margin-right: 15px`).
       - `figure.featured-image` (margin-top 42px) — full-width img
         (`images/1.jpg`).
       - `div.entry-content` (margin-top 36px) — 1–2 paragraphs 14px
         `line-height: 2rem`, text-align left.
       - `footer.entry-footer.flex.flex-column.flex-lg-row.justify-content-
between` (margin-top 50px): `ul.post-share.flex` ("Share" label
         18px + 5 icons: pinterest, linkedin, instagram, facebook, twitter;
         16px `#afafaf`, hover `#2f2f2f`); `a.read-more` "Read more"
         (block, width 200px, `padding: 20px 0`, 14px, `#fff` on
         `background: #2f2f2f`); `div.comments-count` — "2 Comments" link
         (16px `#afafaf`, right-aligned ≥992px).
     - `div.pagination` (margin-top 100px) → `ul.flex.align-items-center` —
       li `margin-right: 10px`; a 40×40px squares, 11px, `#2f2f2f` on
       `background: #f0f0f0`; `li.active a` / hover: `#fff` on `#2f2f2f`.
       Items: "01." (active), "02.", "03.".
     - `div.col-12.col-lg-3` → `div.sidebar` (`margin-top: 110px`; 290px
       ≥992px, aligning with the first post):
       - `div.about-me` (text-align center): `h2` "I'm Amelia Smith"
         (30px); `p` blurb (margin-top 38px, 14px, `line-height: 1.85rem`,
         `#afafaf`).
       - `div.recent-posts` (padding-top 1px, margin-top 12px) — 4×
         `div.recent-post-wrap` (margin-top 42px, text-align center → left
         ≥576px): `figure` full-width img (`images/thumb-1.jpg` …); then
         `div.entry-header`: `div.posted-date` (margin-top 26px, 11px,
         uppercase, `#afafaf`), `h3` → a title 18px `#2f2f2f`,
         `div.tags-links` (margin-top 12px) — 12px `#afafaf` tags.
       - `div.tags-list` (margin-top 100px, text-align center → left
         ≥576px): pill links `display: inline-block`, `padding: 14px 25px`,
         11px uppercase letterspaced, `#fff` on `background: #2f2f2f`,
         `margin: 0 7px 7px 0`; tags: Music, Love, Car, Stories,
         Photography, Music, Car.
       - `div.sidebar-ads` (margin-top 100px, text-align center): full-width
         img (`images/ads.jpg`).
  4. Footer (`footer.sit-footer` — `padding-top: 100px`, `border-top: 1px
solid #d8d8d8`):
     - `div.outer-container` → `div.container-fluid` →
       `div.row.footer-recent-posts`: 4× `div.col-12.col-md-6.col-xl-3` →
       `div.footer-post-wrap.flex.justify-content-between` (margin-bottom
       60px, 0 ≥1200px): `figure` 185px img (`images/a.jpg`…) +
       `div.footer-post-cont.flex.flex-column.justify-content-between`
       (width calc(100% - 205px)): `div.posted-date` (margin-top 20px, 11px
       uppercase `#afafaf`), `h3` → a 18px `#2f2f2f`, `div.tags-links`
       (12px `#afafaf`), `a.read-more` "read more" (14px `#2f2f2f`,
       underline, capitalize, margin-bottom 15px). Post titles: "My fall
       in love story", "Man's best friend", "Writing on a budget", "My
       fall in love story".
     - `div.footer-instagram.flex.flex-wrap.flex-lg-nowrap` (margin-top
       60px → 100px ≥1200px): 7 `figure` (width 33.333% → 25% → 20% →
       auto), each `a` → img (`images/a.jpg` … `images/g.jpg`).
     - `div.footer-bar` (padding 22px 0, `background: #2f2f2f`) →
       `div.outer-container` → `div.container-fluid` →
       `div.row.justify-content-between`: `div.col-12.col-md-6.footer-
copyright` — p 13px `#b8b8b8` "Copyright © <year> All rights
       reserved | This template is made with by Colorlib" (paraphrase the
       maker line to the recreation); `div.col-12.col-md-6.footer-social`
       — ul.flex (margin-top 30px, 0 ≥768px): 5+ icon links 14px
       `#74797e`, hover `#fff`, `margin: 0 15px` (0 0 0 30px ≥768px).

## Design tokens (extracted from `style.css`)

- Fonts (NO Google Fonts in the original — custom @font-face files; DO NOT
  copy them, substitute with Google Fonts):
  - **HelveticaNeueLTPro-Md** — body + all sans text (a medium grotesque
    sans). Substitute: **Montserrat** (weights 400/500/600) via Google
    Fonts `<link>`.
  - **BeyondTheMountains** — script for logo + "Subscribe" heading (a thin
    handwritten script). Substitute: **Dancing Script** (weights 400/700)
    or Great Vibes; Dancing Script recommended.
- Ink: **`#2f2f2f`** — body text, headings, logo, nav links, read-more
  button bg, tags pills bg, footer bar bg, pagination active bg.
- Grays: **`#afafaf`** (meta: dates, tags, header-bar text/email, entry
  body color, post-share, comments-count, sidebar blurb, footer-post
  meta), `#9d9d9d` (site description), `#b8b8b8` (copyright),
  `#bec4c9` (header social icons), `#74797e` (footer social icons),
  `#3a3a3a` (slider arrow glyphs).
- Surfaces: page `#fff`; search input `#f5f5f5`; pagination `#f0f0f0`;
  search bottom border `#d5d5d5`; footer top border `#d8d8d8`.
- Accent: **none in CSS** — the lime-green is part of the subscribe badge
  PHOTO (a woman on a bright lime-green background). To preserve the pop of
  color, render the subscribe badge as a circular lime-green (`#9acd32`
  ~ limegreen) disc with a photo avatar on top (see fidelity notes).
- Shapes: everything SQUARE (`border-radius: 0`) — slider bullets 12×12px
  (2px white border, active filled), slider arrows 54×54px white squares,
  read-more 200px block button, pagination 40×40px squares, tag pills
  `padding: 14px 25px`, search input with only a 2px bottom border.
- Layout rhythm: `outer-container` width `calc(100% - 90px)` centered
  ≥1200px (footer uses it); `site-branding` padding 40px 0; hero
  `margin-top: 40px`; `.single-page` padding 165px top (0 ≥992px) / 100px
  bottom; `.content-wrap` margin-top 110px; `.sidebar` margin-top 290px
  ≥992px; section gaps 100px (pagination, tags-list, sidebar-ads,
  footer top padding); footer-bar padding 22px 0.

## Requirements

### Requirement: Top bar

The system SHALL render a slim utility top bar with a greeting + email on
the left and social icons + a search field on the right.

#### Scenario: Greeting and email

- **GIVEN** the Ivory page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show the greeting "Hello world, My name is Ivory" in
  small uppercase letterspaced gray text on the left (desktop only)
- **AND** it SHALL show an email link (e.g. "Contactme@email.com") next to
  it in the same style

#### Scenario: Social icons and search

- **GIVEN** the top bar is displayed
- **WHEN** the right side is inspected
- **THEN** it SHALL show at least four social icon links (24px) in light
  gray `#bec4c9` that darken to `#2f2f2f` on hover
- **AND** it SHALL show a search input with `#f5f5f5` background, no side
  borders, a 2px `#d5d5d5` bottom border, italic gray text, right-aligned
  on desktop (300px wide)

### Requirement: Branding and navigation

The system SHALL render a centered script wordmark logo with a tiny
uppercase tagline, plus a centered uppercase navigation with a 2px
underline hover/current state and a mobile hamburger.

#### Scenario: Logo

- **GIVEN** the header is displayed
- **WHEN** the branding area is rendered
- **THEN** it SHALL show the wordmark "Ivory" centered in a script font
  (Dancing Script), ~72px on mobile and 112px from 576px up, in `#2f2f2f`
- **AND** it SHALL show "Personal Blog" beneath it: 10px, uppercase,
  `letter-spacing: .26rem`, gray `#9d9d9d`, right-aligned under the logo

#### Scenario: Navigation

- **GIVEN** the header is displayed
- **WHEN** the nav is rendered
- **THEN** it SHALL show centered uppercase 12px letterspaced links: Home
  (current), Features, Portfolio, Blog, About Me, Contact
- **AND** the current link and hovered links SHALL get a 2px solid
  `#2f2f2f` bottom border
- **AND** a hamburger toggle (4 lines) SHALL be shown on viewports below
  lg and expand/collapse the menu with `aria-expanded`

### Requirement: Hero slider

The system SHALL render a full-width hero slider of three photo slides with
square white-outline pagination dots (bottom-left) and white square
prev/next buttons (visible on md+).

#### Scenario: Slides

- **GIVEN** the hero section is displayed
- **WHEN** the slider is rendered
- **THEN** it SHALL show three full-width photo slides (same image or
  variants), stacked in a swipeable/auto-advancing carousel
- **AND** it SHALL show 12px square dots near the bottom-left (2px white
  outline; active dot filled white)
- **AND** it SHALL show 54px white square prev/next buttons with dark
  arrows at the sides on md+ screens

### Requirement: Subscribe badge

The system SHALL render a circular "Subscribe to my YouTube channel" badge
overlapping the hero's bottom-right corner.

#### Scenario: Badge content

- **GIVEN** the hero section is displayed
- **WHEN** the subscribe widget is rendered
- **THEN** it SHALL be positioned at the bottom-right of the hero,
  overlapping its edge, on a circular lime-green disc with a photo avatar
- **AND** it SHALL show "Subscribe" in the script font (~36px, `#2f2f2f`)
  and "To my Youtube Channel" in 12px uppercase letterspaced gray
- **AND** it SHALL link to the channel (href "#")

### Requirement: Blog list

The system SHALL render three centered blog posts in the main column, each
with date, title, tags, featured image, excerpt, share row, read-more
button and comments count.

#### Scenario: Post content

- **GIVEN** the blog list is displayed
- **WHEN** a post is rendered
- **THEN** it SHALL show a small uppercase gray date (e.g. "January 30,
  2018"), a 30px `#2f2f2f` title, and gray hashtag tags (16px) beneath it
- **AND** it SHALL show a full-width featured image, then left-aligned
  14px/2rem excerpt paragraphs
- **AND** it SHALL show a footer row: "Share" label + 5 social icons
  (hover darken), a black 200px "Read more" button, and a "2 Comments"
  link right-aligned on desktop

### Requirement: Pagination

The system SHALL render numbered square pagination (01. 02. 03.) with the
active page inverted.

#### Scenario: Page numbers

- **GIVEN** the blog list is displayed
- **WHEN** the pagination is rendered
- **THEN** it SHALL show 40px square links "01." (active), "02.", "03."
  in `#2f2f2f` on `#f0f0f0`
- **AND** the active page and hovered links SHALL invert to white text on
  `#2f2f2f`

### Requirement: Sidebar

The system SHALL render a right sidebar with an about-me bio, four recent
posts, a tag pill cloud, and an ad banner.

#### Scenario: Bio and recent posts

- **GIVEN** the sidebar is displayed
- **WHEN** the top widgets are rendered
- **THEN** it SHALL show a centered "I'm Amelia Smith" heading (30px) with
  a 14px gray blurb below
- **AND** it SHALL show four recent-post entries (photo, 11px uppercase
  gray date, 18px title, small gray tags), centered on mobile and
  left-aligned from 576px

#### Scenario: Tags and ad

- **GIVEN** the sidebar is displayed
- **WHEN** the lower widgets are rendered
- **THEN** it SHALL show black pill tags (white 11px uppercase text,
  `padding: 14px 25px`, inline-block flow) with at least six tags
- **AND** it SHALL show a full-width placeholder ad banner below them

### Requirement: Footer

The system SHALL render a footer with four recent-post columns, a
full-width Instagram image strip, and a dark bottom bar with copyright +
social icons.

#### Scenario: Footer columns and Instagram strip

- **GIVEN** the footer is displayed
- **WHEN** it is rendered
- **THEN** it SHALL have `padding-top: 100px` and a 1px `#d8d8d8` top
  border
- **AND** it SHALL show four recent-post columns (185px thumbnail + date +
  18px title + tags + underlined "read more" link), 2-up on md and 4-up on
  xl
- **AND** it SHALL show a full-width row of seven Instagram images below
  (2-up → 5-up → fluid)

#### Scenario: Footer bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is rendered
- **THEN** it SHALL have a `#2f2f2f` background with 22px vertical padding
- **AND** it SHALL show the copyright line left (13px `#b8b8b8`,
  referencing the recreation, no ColorLib attribution) and social icons
  right (`#74797e`, white on hover)

## Verification checklist

- [ ] `npm run verify:app ivory` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the original 1:1 (top bar → branding → nav →
      hero slider → subscribe badge → blog list ×3 → pagination → sidebar
      → footer columns → Instagram strip → footer bar)
- [ ] Tokens wired through `@theme`: ink `#2f2f2f`, meta `#afafaf`,
      description `#9d9d9d`, copyright `#b8b8b8`, header social `#bec4c9`,
      footer social `#74797e`, search bg `#f5f5f5`, pagination bg `#f0f0f0`,
      search border `#d5d5d5`, footer border `#d8d8d8`, lime accent
      `#9acd32` for the subscribe disc
- [ ] Montserrat (400/500/600) + Dancing Script (400/700) loaded via
      Google Fonts `<link>` in `index.html` — no copied @font-face files
- [ ] All shapes square (radius 0): slider dots/arrows, read-more button,
      pagination squares, tag pills; search input has only a bottom border
- [ ] Hero slider: 3 slides, square outline dots bottom-left (active
      filled), white square arrows visible md+; auto-advance or manual
      controls acceptable but arrows + dots must match
- [ ] Subscribe badge: circular lime-green disc + avatar + script
      "Subscribe" + uppercase tagline, overlapping hero bottom-right
- [ ] Blog post layout: centered header block (date → title → tags),
      featured image, left-aligned excerpt, share row + 200px black
      read-more + comments count
- [ ] Sidebar margin-top 290px on desktop (aligned with first post);
      about-me centered, recent posts, black tag pills, ad banner
- [ ] Footer: 4 recent-post columns, 7-image Instagram strip, dark bar
      (copyright left, social right, white hover)
- [ ] Placeholder images use `https://picsum.photos/seed/ivory-<n>/<w>/<h>`;
      no assets copied from the original
- [ ] Dark-mode toggle present per repo conventions (dark: variants)
- [ ] README status table regenerated after merge (`npm run readme:status`)
