# Template: Wire (News/Magazine Blog Template)

## Purpose

Wire is a news/magazine blog website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Meranda"
website template design (source: https://colorlib.com/wp/template/meranda/),
built under a DIFFERENT name (Wire — a wire is a news agency's fast,
constantly-updated feed, matching the source's news/magazine theme) per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Meranda" — clean, minimalist news/magazine blog
  template: top bar with wordmark logo + social icons + pill search, a
  B612-Mono uppercase nav row, a hero carousel of split featured posts
  (image left, content right on light-gray), an "Editor's Pick" grid
  (1 big card + 2 compact rows) with a "Trending" numbered sidebar, two
  category columns (Politics / Business), a "Recent News" list (image
  right) with a "Popular Posts" numbered sidebar + pagination, a light
  newsletter band, and a minimal centered footer. TEMPLATES.md has TWO
  copies of this item (lines 272 and 2204 — duplicate rows: line 272 in the
  "Blog" section, line 2204 in the "Magazine" section); ONE recreation
  (Wire) covers both — the implementer must mark BOTH rows `[x]`.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/meranda/`
  (HTTP 200, 30,254 bytes; title "Meranda — Website Template by Colorlib").
  Master stylesheet `css/style.css` (23.6 KB, fully extracted for tokens),
  plus Bootstrap 4 grid (`css/bootstrap.min.css`), Owl Carousel
  (`css/owl.carousel.min.css`, `css/owl.theme.default.min.css`), jQuery UI,
  fancybox, AOS, and icon fonts (icomoon + flaticon). Fonts: **Cabin**
  (body) + **B612 Mono** (navbar) via Cloudflare Fonts (`/cf-fonts/...`).
  Cross-checked against the TEMPLATES.md screenshot
  (`meranda-free-template.jpg`, 1200×946, viewed in browser — see visual
  design below). The demo brands itself "Meranda"; the recreation uses the
  NEW name **Wire**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  news/magazine site on white. Header-top row: wordmark logo left (2rem,
  black), social icons (facebook/twitter/instagram) + pill search input
  ("Search...", 50px tall, rounded 30px, bottom-border #ccc) right; below
  it the nav row (B612 Mono, uppercase .8rem links: Home, Categories
  dropdown, Politics, Business, Health, Design, Sport, Contact). Hero is an
  Owl Carousel of 3 split featured posts: large photo left (50%), content
  right (50%, padding 50px) on a light-gray `bg-light` band — grey
  uppercase caption "Editor's Pick", 26px black headline, excerpt, and
  meta (author in category · Jun 14 • 3 min read ★); square-bar carousel
  dots (active bar green). Below: "Editor's Pick" section title
  (inline-block 20px/400 with a short black underline) over a grid of one
  big image card + two compact thumbnail rows, with a "Trending" sidebar of
  4 numbered rows (01–04, 30px light-gray numbers) + green "See All
  Trends" link. Then two 6-col category columns "Politics" / "Business"
  (3 thumbnail rows each, with excerpt), then "Recent News" (col-lg-9, 3
  rows with image on the RIGHT) + "Popular Posts" sidebar (col-lg-3, 4
  numbered rows) + "See All Popular" + pagination (1 2 3 4), then a
  light-gray newsletter band ("Newsletter Subscribe" + email input + black
  pill send button that turns green on hover), then a minimal centered
  footer (small gray copyright). Accent color is light green **#8bc34a**
  (See-All links, active carousel bar, link hover, button hover, active
  nav underline); headings/text black; caption grey #808080; date-read
  #b4b4b4; numbers/borders #ccc/#e6e6e6; light backgrounds #f8f9fa.
  Body font Cabin; navbar + wordmark in B612 Mono.
- **Section order (1:1, from live demo DOM):**
  1. `div.header-top` (container, padding 30px 0; Bootstrap `row
align-items-center`) — `div.col-12.col-lg-6.d-flex`: `a.site-logo`
     "Wire" (font-size 2rem, color #000) + mobile burger
     (`a.site-menu-toggle.js-menu-toggle`, `span.icon-menu`, d-lg-none);
     `div.col-12.col-lg-6.ml-auto.d-flex`: `div.ml-md-auto.top-social`
     (facebook, twitter, instagram `a.d-inline-block.p-3` links, color
     #000 hover #777) + `form.search-form` (`div.d-flex`: `input.form-
control` placeholder "Search..." (50px, radius 30px, bg #fff,
     border-bottom #ccc) + `button.btn.btn-secondary` (pill, black bg,
     white, radius 30px, hover #8bc34a) with `span.icon-search`).
  2. `div.site-navbar.py-2.js-sticky-header` (sticky; bg #fff; font-family
     "B612 Mono") — `nav.site-navigation` > `ul.site-menu` links:
     Home, Categories (dropdown `ul.dropdown`: Politics, Business, Health,
     Design, Sport), Politics, Business, Health, Design, Sport, Contact.
     Link style: uppercase, .8rem, letter-spacing .05rem, color #000;
     active item underlined with #8bc34a; hover #000. Mobile off-canvas
     menu (`.site-mobile-menu`, burger toggles, aria-expanded).
  3. `div.site-section.py-0` — hero carousel `div.owl-carousel.hero-slide.
owl-style` of **3 slides**, each `div.site-section` > `div.container`
     > `div.half-post-entry.d-block.d-lg-flex.bg-light`:
     - `div.img-bg` (width 50%, background-image cover, center; mobile
       100% + height 300px).
     - `div.contents` (width 50%, padding 50px, mobile 30px): `span.
caption` "Editor's Pick" (uppercase, .9rem, letter-spacing .1rem,
       color #808080), `h2` (26px, link color #000) headline, `p.mb-3`
       excerpt, `div.post-meta`: `span.d-block` ("Dave Rogers in Food"),
       `span.date-read` ("Jun 14 • 3 min read" + star icon, color #b4b4b4).
     - Carousel controls: prev/next arrows (white 40px squares at left/
       right edges) + dots below (`span` 18×4px bars, active bg #8bc34a).
  4. `div.site-section` — `div.row`:
     - `div.col-lg-8`: `div.section-title` > `h2` "Editor's Pick"
       (20px/400 #000, inline-block, border-bottom 1px solid #222,
       margin-bottom 50px). Then `div.row`: `div.col-md-6`:
       `div.post-entry-1` — `a` > `img.img-fluid` (margin-bottom 30px),
       `h2` (20px, link #000) headline, `p` excerpt, post-meta;
       plus `div.col-md-6` with 2× `div.post-entry-2.d-flex` (one
       `bg-light`): `div.thumbnail` (30% width, bg cover) +
       `div.contents` (70%, padding 10px 20px): `h2` (15px) + post-meta.
     - `div.col-lg-4`: `div.section-title` > `h2` "Trending"; 4×
       `div.trend-entry.d-flex`: `div.number.align-self-start` ("01".."04",
       flex 0 0 50px, 30px, line-height 1, color #ccc) +
       `div.trend-contents`: `h2` (18px) headline + post-meta; then
       `p` > `a.more` "See All Trends →" (color #8bc34a, uppercase, .83rem).
  5. `div.site-section` — `div.row` of 2× `div.col-lg-6`, each with
     `div.section-title` > `h2` ("Politics" / "Business") + **3×**
     `div.post-entry-2.d-flex` (thumbnail 30% left + contents 70%:
     `h2` 15px headline, `p.mb-3` excerpt, post-meta).
  6. `div.site-section` — `div.row`:
     - `div.col-lg-9`: `div.section-title` > `h2` "Recent News"; 3×
       `div.post-entry-2.d-flex` with `div.thumbnail.order-md-2` (image on
       the RIGHT) + `div.contents.order-md-1.pl-0` (h2 + p + post-meta).
     - `div.col-lg-3`: `div.section-title` > `h2` "Popular Posts"; 4×
       `div.trend-entry.d-flex` (numbered 01–04) + `a.more` "See All
       Popular →".
     - Below (full width, `div.col-lg-6`): `ul.custom-pagination.
list-unstyled` — `<li><a>1</a></li>`, `<li class="active">2</li>`,
       `<li><a>3</a></li>`, `<li><a>4</a></li>` (font-size .89rem, #000).
  7. `div.site-section.subscribe.bg-light` — `form.row.align-items-center`:
     - `div.col-md-5.mr-auto`: `h2` "Newsletter Subcribe" (note: "Subcribe"
       typo in the source; 1.2rem, #000) + `p` (lorem, .9rem).
     - `div.col-md-6.ml-auto`: `div.d-flex`: `input.form-control`
       placeholder "Enter your email" (50px, radius 30px, bg #fff,
       border-bottom #ccc) + `button.btn.btn-secondary` with
       `span.icon-paper-plane` (black pill; hover bg/border #8bc34a).
  8. `div.footer` (font-size .85rem, text-align center, padding 2rem 0) —
     `div.container` > `div.row` > `div.col-12` > `div.copyright`:
     "Copyright © {year} All rights reserved | This template is made with
     ♥ by Colorlib". Recreation precedent (Newsprint/Lede): keep the
     copyright + heart wording WITHOUT the Colorlib credit (neutral
     footer).
- **Design tokens extracted from `css/style.css` + DOM:**
  - Brand accent: **#8bc34a** (light green) — `a.more` See-All links
    (uppercase .83rem), active carousel dot bar, link hover, nav active
    underline (`background: #8bc34a`), button hover bg/border.
  - Text: **#000** headings/links (`.site-logo` 2rem; post h2 links #000;
    `.section-title` color #000), body default; `#25262a` (utility), nav
    link color #000; caption grey **#808080** (computed; `.caption` .9rem
    uppercase letter-spacing .1rem); `.date-read` **#b4b4b4**; `.post-meta`
    .8rem, links #000; muted #777 (hover states).
  - Numbers/borders: `.trend-entry .number` **#ccc** 30px flex 0 0 50px;
    `.section-title h2` border-bottom **1px solid #222** (inline-block);
    form bottom borders #ccc; pagination #000.
  - Backgrounds: white #fff (nav, cards, inputs); light **#f8f9fa**
    (Bootstrap `bg-light` — hero band, `post-entry-2.bg-light` variant,
    newsletter band); #f4f5f9/#edf0f5 utility grays.
  - Buttons: pill **border-radius 30px**, **background #000**, color #fff,
    padding 0 20px, border-color #000, uppercase 14px letter-spacing
    .2rem (`.btn` base); hover → bg/border #8bc34a. Inputs: 50px height,
    radius 30px, bg #fff, no border except bottom 1px #ccc.
  - Fonts: body **"Cabin"** (Google Font, weights 400/700); navbar +
    logo **"B612 Mono"** (monospace). Icons: icomoon/flaticon icon fonts
    in the original → **lucide-react** in the recreation.
  - Rhythm: `.site-section` padding 2.5em 0 (mobile) / **7em 0**
    (≥768px); `.header-top > .container` padding 30px 0; `.section-title`
    margin-bottom 50px; `.post-entry-1 img` margin-bottom 30px;
    `.post-entry-2 .contents` padding 10px 20px; `.footer` padding 2rem 0.
  - Carousel: hero dots are **square bars** 18×4px (radius 0) with 2px 5px
    margins, active #8bc34a; arrows are 40px white squares, icon 1.5rem,
    absolutely positioned at left/right center.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/wire-<n>/<w>/<h>` — 3 hero (big_img_1..3), 1
  post-entry-1 big card (img_h_1), ~14 thumbnails (img_v_1..N) ≈ 18
  seeds); icons → lucide-react (search, menu, facebook, twitter,
  instagram, star, paper-plane, chevron-left/right, keyboard-arrow-right);
  Cabin + B612 Mono via Google Fonts `<link>` in `index.html`; Owl
  Carousel → lightweight React state slider (index, prev/next arrows,
  square-bar dots, auto-advance optional — no carousel dependency);
  sticky navbar via `position: sticky`; newsletter form validated per
  repo conventions (zod) — success state swaps in a message; skip jQuery
  UI/fancybox/AOS (static images, no lightbox needed); Categories
  dropdown expands on hover/focus (`.has-children` pattern); mobile nav
  collapse with aria-expanded + focus-visible rings.

Wire lives in `apps/wire` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Header top bar with logo, socials, and search

The system SHALL render a top bar with the site wordmark on the left and
social icons plus a pill search form on the right.

#### Scenario: Header content

- **GIVEN** the Wire page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Wire" as the logo on the left
- **AND** it SHALL show at least three social icon links (facebook,
  twitter, instagram) on the right
- **AND** it SHALL show a search input with placeholder "Search..." and a
  submit button with a search icon
- **AND** the search input and button SHALL be pill-shaped (radius 30px),
  the button black with white icon

### Requirement: Navigation bar

The system SHALL render a sticky uppercase nav row with Home, a Categories
dropdown, and category links Politics, Business, Health, Design, Sport,
Contact.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the nav row is displayed
- **THEN** it SHALL show links Home, Categories, Politics, Business,
  Health, Design, Sport, and Contact in uppercase
- **AND** the Categories link SHALL reveal a dropdown with the same
  category links
- **AND** the nav SHALL stay visible when scrolling (sticky)
- **AND** on mobile a burger menu SHALL expand/collapse the nav with
  aria-expanded

### Requirement: Hero carousel

The system SHALL render a hero carousel of three split featured posts
(image left, content right) on a light-gray band, with arrow and dot
controls.

#### Scenario: Hero slide content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a carousel with at least three slides
- **AND** each slide SHALL contain an image (left), an uppercase grey
  caption, a headline, an excerpt, and post meta (author in category,
  date • read time)
- **AND** prev/next arrow controls SHALL change the visible slide
- **AND** dot indicators SHALL be visible below, with the active dot in
  the brand green #8bc34a

### Requirement: Editor's Pick grid

The system SHALL render an "Editor's Pick" section with one large image
card plus two compact thumbnail rows.

#### Scenario: Editor's Pick content

- **GIVEN** the page is rendered
- **WHEN** the Editor's Pick section is displayed
- **THEN** it SHALL show the section title "Editor's Pick"
- **AND** it SHALL show one large post card (image, headline, excerpt,
  meta)
- **AND** it SHALL show at least two compact thumbnail rows (thumb left,
  headline + meta right), one of which on a light-gray background

### Requirement: Trending sidebar

The system SHALL render a "Trending" sidebar with four numbered post rows
and a green "See All Trends" link.

#### Scenario: Trending content

- **GIVEN** the page is rendered
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show the section title "Trending"
- **AND** it SHALL show four rows numbered 01–04 with headline and post
  meta each
- **AND** the numbers SHALL be large (30px) and light gray
- **AND** a "See All Trends" link SHALL be shown in the brand green,
  uppercase

### Requirement: Politics / Business columns

The system SHALL render two side-by-side category columns, each with a
heading and three horizontal thumbnail rows (with excerpt).

#### Scenario: Category columns content

- **GIVEN** the page is rendered
- **WHEN** the category columns are displayed
- **THEN** the left column SHALL show the heading "Politics" with three
  horizontal posts (thumb left, headline + excerpt + meta right)
- **AND** the right column SHALL show the heading "Business" with three
  horizontal posts

### Requirement: Recent News with Popular Posts sidebar

The system SHALL render a "Recent News" list (image on the right) with a
"Popular Posts" numbered sidebar and pagination.

#### Scenario: Recent News content

- **GIVEN** the page is rendered
- **WHEN** the Recent News section is displayed
- **THEN** it SHALL show the section title "Recent News"
- **AND** it SHALL show at least three post rows with the thumbnail on
  the RIGHT and content on the left
- **AND** the "Popular Posts" sidebar SHALL show four numbered rows
  (01–04) and a green "See All Popular" link
- **AND** a pagination list with page numbers 1, 2, 3, 4 SHALL be shown,
  with 2 as the active page

### Requirement: Newsletter subscribe band

The system SHALL render a light-gray newsletter band with a heading, an
email input, and a black pill submit button.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the subscribe section is displayed
- **THEN** it SHALL show the heading "Newsletter Subscribe"
- **AND** it SHALL show an email input with placeholder "Enter your email"
- **AND** it SHALL show a submit button with a paper-plane icon (black
  pill, turns brand green on hover)
- **AND** submitting an invalid email SHALL show a per-field error and
  block submission

### Requirement: Footer

The system SHALL render a minimal centered footer with a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a small centered line "Copyright © {year} All
  rights reserved | This template is made with ♥" (no Colorlib credit,
  per repo precedent)
- **AND** the footer text SHALL be small (.85rem) and muted

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Wire app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, nav, hero carousel,
  Editor's Pick grid + Trending sidebar, Politics/Business columns,
  Recent News + Popular Posts + pagination, newsletter band, and footer
  sections in the expected order
- **AND** the document title SHALL be "Wire — News Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh wire` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (header-top, nav, hero carousel,
      Editor's Pick + Trending, Politics/Business columns, Recent News +
      Popular Posts + pagination, newsletter, footer)
- [ ] Design tokens in `@theme`: brand `#8bc34a`, text `#000`, caption
      `#808080`, date-read `#b4b4b4`, number/border `#ccc`, section-title
      underline `#222`, light bg `#f8f9fa`
- [ ] Fonts: Cabin (body) + B612 Mono (navbar/logo) via Google Fonts
      `<link>`
- [ ] Header: logo left, socials + pill search right; inputs 50px radius
      30px, black pill buttons hover → #8bc34a
- [ ] Nav: uppercase .8rem B612 Mono, sticky, Categories dropdown, mobile
      burger with aria-expanded
- [ ] Hero: 3 slides, image 50% left / contents 50% right on bg-light,
      caption + 26px headline + excerpt + meta, arrow controls + square
      bar dots (active #8bc34a)
- [ ] Section titles: 20px/400 inline-block with 1px #222 underline,
      margin-bottom 50px
- [ ] Editor's Pick: 1 big card + 2 compact rows (one bg-light)
- [ ] Trending sidebar: 4 numbered rows (30px #ccc numbers) + green
      "See All Trends"
- [ ] Politics/Business: two 6-col columns, 3 thumbnail rows each with
      excerpt
- [ ] Recent News: rows with thumbnail on the right; Popular Posts sidebar
      numbered 01–04 + "See All Popular"; pagination 1–4 with 2 active
- [ ] Newsletter: bg-light band, "Newsletter Subscribe" heading, email
      input, black pill paper-plane button, validated form with success
      state
- [ ] Footer: small centered copyright with ♥, neutral credit
- [ ] Placeholder images seeded (`picsum.photos/seed/wire-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` on BOTH
      dup rows, lines 272 AND 2204, + surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
