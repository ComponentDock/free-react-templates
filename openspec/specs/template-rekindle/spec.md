# Template: Rekindle (Blog / Magazine)

## Purpose

Rekindle is a single-page blog/magazine template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Revive" template
(see TEMPLATES.md), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Revive" — a Bootstrap 4 blog/magazine layout: white
  navbar with a centered logo, full-width photo slider hero with an overlaid
  serif headline and a vertical rotated "share now" social strip, a 2-column
  blog post card grid with a right sidebar (search, Instagram feed, categories,
  popular posts, newsletter, share), and a black 4-column footer
  (source: https://colorlib.com/wp/template/revive/).
  TEMPLATES.md has TWO copies of this item (line 283 under Blog — mark it `[x]`
  when done; line 2211 under Magazine — mark it `[x]` too; both copies must be
  updated).
- **Preview URL:** https://preview.colorlib.com/theme/revive/
  (HTTP 200, 45.8 KB DOM, fetched 2026-08-08). The live DOM is the primary
  reference and matches the screenshot.
- **Preview CSS:** `https://preview.colorlib.com/theme/revive/css/main.css`
  (46.9 KB, Bootstrap 4 + custom FTCO-style stylesheet; tokens extracted
  below).
- **Screenshot:** `revive-free-template-1.jpg` (verified via browser vision
  against the live preview). Editorial/magazine blog: white navbar with the
  centered "REVIVE" logo flanked by links; hero = full-bleed lifestyle photo
  with a white serif headline "Make the world a better place with camera"
  overlaid on the left and a vertical rotated "SHARE NOW" strip with circular
  social icons on the far left edge; blog cards in a 2-column grid (image top,
  serif title, date/comment meta, excerpt, READ MORE arrow + category tag);
  sidebar widgets on a light lavender-grey (`#f9f9ff`) background; solid black
  footer with 4 columns.
- **Section order (1:1):** Navbar (white, centered logo, flanking Playfair
  italic links) → Home banner (full-width image carousel, 4 slides, overlaid
  white serif h1 + vertical share strip) → Blog post area (2-column card grid,
  8 cards) → Pagination (Previous, 01–04, 09, Next) → Sidebar (Search,
  Instagram, Catgories, Popular Posts, Newsletter, Share this post) → Footer
  (black: About Us, Newsletter form, Instragram Feed, Follow Us + copyright
  bar).

### Navbar (from live DOM)

- `.header-area` — `background-color:#fff`, `position:relative`, full width;
  sticky behavior via `z-index:999999` + transition (becomes fixed on scroll
  in the original; single-page app can keep it `sticky`).
- `.header-top` row: `d-flex justify-content-between align-items-lg-center`
  with `.menu-left` (links: Home, Category, Archive) on the left, a centered
  logo link (the "REVIVE" wordmark image), and `.menu-right`
  (`.collapse.navbar-collapse`: Elements, Blog Detail, Contact) on the right.
- `.menu-left a` / `.nav-item .nav-link`: Playfair Display, `font-weight:700`,
  `font-style:italic`, `font-size:14px`, `color:#000`; hover + active
  `color:#13113a`. Nav links padding `38px 0`, margin `0 20px` (mobile
  collapsed menu in the original).

### Home banner (from live DOM)

- `.home-banner-area.relative` → `.owl-carousel.home-banner-owl` with 4
  `.banner-img` slides (full-width `img-fluid` images, `b1.jpg`/`b2.jpg`
  alternating).
- Each slide has `.text-wrapper`: `color:#ffffff`, `max-width:700px`,
  `text-align:left`, `padding:40px 0`, margin auto; contains an `<a class="d-flex">`
  with `<h1>` "Make the world a better place with camera" — white, 36px,
  Playfair (serif).
- `.social-icons` (inside the banner, absolute): `position:absolute; top:56%;
left:17%; transform:rotate(-90deg)` — a vertical strip with Facebook,
  Twitter, Pinterest icons + a `.diffrent` "sharre now" label (typo preserved
  in the original).
- No caption subtext or CTA button in the banner — just the slider + headline
  - share strip.

### Blog post area (from live DOM)

- `.blog-post-area.section-gap.relative` (`section-gap` = `padding:130px 0`),
  `.container` → `.row` → main `col-lg-8` (left) + sidebar `col-lg-4
sidebar-widgets` (right).
- Main column: inner `.row` of `col-lg-6 col-md-6` cards (2-column grid, 8
  cards in the live DOM). Each card `.single-amenities`: `background:#f9f9ff`,
  `margin-bottom:60px`; hover → `background:#ffffff; box-shadow:0px 20px 30px
rgba(0,35,71,0.1)`.
- Card content (`.amenities-details`, `padding:40px`): thumb image
  (`img-fluid w-100`, `blog-post1/3/5…`), `h5` title link (18px Playfair —
  e.g. "There's goting to be a musical about meghan", "Forest responds to
  consultation smoking in al fresco."), `.amenities-meta` (calendar icon +
  "20th Nov, 2018", comment icon + "05"), excerpt paragraph ("Creepeth green
  light appear let rule only you're divide and lights moving and isn't given
  creeping deep."), bottom row `d-flex justify-content-between`: `.blog-post-btn`
  "Read More" (transparent, `#13113a`, uppercase 12px 600, arrow icon; hover
  opacity .9) + `.category` tag ("Travel" with folder icon, `color:#706f87`).
- Pagination (below the grid): `Previous` / `01` `02` `03` `04` `09` / `Next`
  — `.page-link` transparent bg, `border-radius:0`.

### Sidebar (from live DOM, `col-lg-4.sidebar-widgets`)

- `.single-sidebar-widget`: `padding:50px 30px`, `background:#f9f9ff`,
  `margin-bottom:30px`. Widget titles (`.instafeed-title`,
  `.category-title`, `.popular-title`, `.newsletter-title`, `.share-title`):
  `color:#13113a`, 20px, `font-weight:700`, inline-block (serif via global
  heading font).
- **Search widget** (`.search-widget`): `.search-form` — `input[type=text]`
  height 40px, `color:#13113a`, `padding:11px 22px`, width 80%, no border,
  placeholder "Search Posts"; submit button width 20%, `color:#13113a`,
  `background:#ffffff`, search icon.
- **Instagram widget** (`.instafeed-widget`): title "Instagram", `.instafeed
d-flex flex-wrap` of 6 `<li>` (width 33% each → 3×2 grid of square thumbs).
- **Catgories widget** (`.post-category-widget`): title "Catgories" (original
  typo), `.cat-list` rows `d-flex justify-content-between` — name + count:
  Fashion 59, Travel 09, Lifestyle 24, Shopping 44, Food 15. `.cat-list li`:
  `padding:13px 20px`, `background:#ffffff`, `margin-bottom:15px`, link text
  `#706f87`.
- **Popular Posts widget** (`.popular-post-widget`): title "Popular Posts", 4
  `.single-post-list` rows (thumb image + `.details`): `h6` title link +
  `p` "Mate Winston | Dec 15".
- **Newsletter widget** (`.newsletter-widget`): title "Newsletter", email
  input (placeholder "Enter email", `form-control`) + `.bbtns` button
  "Subcribe" (original typo): `background:#13113a; color:#fff; font-size:12px;
text-transform:uppercase; font-weight:500; padding:12px 20px;
border-radius:0`, `d-block mt-20 w-100`.
- **Share widget** (`.share-widget`): title "Share this post" + 4 social icon
  links (themify facebook/twitter/pinterest/instagram).

### Footer (from live DOM)

- `footer.footer-area.section-gap` — `background:#000000` (black).
- 4 columns: `col-lg-3` About Us (`h6` + blurb paragraph "Lorem ipsum dolor
  sit amet, consectetur adipisicing elit…"), `col-lg-4` Newsletter ("Stay
  update with our latest" + inline form: email input + `.click-btn` arrow
  button — `background:#fff; color:#13113a; border-radius:0; padding:6px
12px`), `col-lg-3` "Instragram Feed" (original typo — `.instafeed` of 8
  square images, 3-col wrap), `col-lg-2` "Follow Us" ("Let us be social" +
  `.footer-social` 4 icon links: facebook, twitter, dribbble, behance).
- `.footer-area h6`: `color:#fff; margin-bottom:25px; font-size:18px;
font-weight:600`.
- `.footer-bottom` (centered flex): "Copyright © <year> All rights reserved |
  This template is made with ♥ by Colorlib".

## Design tokens (from preview CSS `css/main.css` + DOM)

| Token            | Value                                                                                                                                                      | Where                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Primary dark     | `#13113a` (deep navy, 91 uses)                                                                                                                             | buttons, nav hover/active, widget titles, search icon, Read More, pagination     |
| Body text        | `#706f87` (muted slate)                                                                                                                                    | `body` — Open Sans 14px/24px weight 500; category tags, cat-list links           |
| Light section bg | `#f9f9ff` (lavender-grey)                                                                                                                                  | `.single-amenities` cards, `.single-sidebar-widget` (padding 50px 30px, mb 30px) |
| Card hover       | white bg + `box-shadow: 0px 20px 30px rgba(0,35,71,0.1)`                                                                                                   | `.single-amenities:hover`                                                        |
| Footer bg        | `#000000`                                                                                                                                                  | footer area                                                                      |
| Headings         | Playfair Display (serif), `#13113a`; nav links Playfair italic 700 `#000` (hover/active `#13113a`)                                                         | h1/h5/h6, widget titles, nav links                                               |
| Font family      | `"Playfair Display", serif` (headings/nav) + `"Open Sans", sans-serif` (body/buttons) — Google Fonts                                                       | whole template                                                                   |
| Primary button   | bg `#13113a`, white text, Open Sans 12px 500 uppercase, `line-height:50px`, `padding:0 38px`, `border-radius:0`                                            | `.primary-btn`                                                                   |
| Sidebar button   | bg `#13113a`, white text, 12px uppercase 500, `padding:12px 20px`, radius 0, block w-100                                                                   | `.bbtns` "Subcribe"                                                              |
| Read More link   | transparent bg, `#13113a` text, uppercase 12px 600, radius 0; hover opacity .9                                                                             | `.blog-post-btn`                                                                 |
| Footer arrow btn | `background:#fff`, `color:#13113a`, radius 0, `padding:6px 12px`                                                                                           | `.click-btn` (footer newsletter)                                                 |
| Banner headline  | white 36px serif, left-aligned, `max-width:700px`, `padding:40px 0`                                                                                        | `.text-wrapper h1`                                                               |
| Share strip      | `position:absolute; top:56%; left:17%; rotate(-90deg)`                                                                                                     | `.social-icons` in banner                                                        |
| Section gap      | `padding:130px 0`                                                                                                                                          | `.section-gap` (blog area + footer)                                              |
| Search input     | height 40px, `#13113a` text, `padding:11px 22px`, width 80%, no border; button 20% white                                                                   | `.search-form`                                                                   |
| Category rows    | `padding:13px 20px`, white bg, `margin-bottom:15px`, text `#706f87`                                                                                        | `.cat-list li`                                                                   |
| Instagram feed   | `li { width:33% }` 3-col square grid                                                                                                                       | sidebar (6 imgs) + footer (8 imgs)                                               |
| Card details     | `padding:40px`; h5 18px Playfair; meta `margin-top:15px`; card `margin-bottom:60px`                                                                        | `.amenities-details` / `.amenities-meta` / `.single-amenities`                   |
| Footer headings  | `h6 { color:#fff; font-size:18px; font-weight:600; margin-bottom:25px }`                                                                                   | `.footer-area h6`                                                                |
| Icons            | lucide-react equivalents (Calendar, MessageCircle, ArrowRight, Folder, Search, Facebook, Twitter, Instagram, Dribbble, Behance, ArrowRight/LongArrowRight) | banner strip, meta, Read More, category, search, footer                          |

## Recreation decisions

- Deliverable: single-page blog/magazine landing — white sticky navbar with
  centered wordmark, full-width image slider hero with overlaid serif headline
  - rotated share strip, 2-column blog card grid (8 cards) + pagination,
    right sidebar with 6 widgets, black 4-column footer.
- Brand name "Rekindle" replaces "Revive"; never use "Revive" or "Colorlib" as
  the brand. Wordmark: "Rekindle" in Playfair bold (nav links are Playfair
  italic 700 in the original).
- The multi-page links (Category / Archive / Elements / Blog Detail / Contact
  pages, per-post pages) are decorative anchors to `#` — single-page
  deliverable, note it in the PR.
- Photos → seeded picsum placeholders (`picsum.photos/seed/rekindle-<n>/<w>/<h>`):
  banner slides 1600×900 (4 slides), card thumbs 800×600, Instagram squares
  200×200 (6 sidebar + 8 footer), popular-post thumbs 120×120; no assets
  copied.
- Icons → lucide-react (Menu, Calendar, MessageCircle, ArrowRight, Folder,
  Search, Facebook, Twitter, Instagram, Dribbble, Behance, Heart, ArrowLeft,
  ArrowRight). Brand social icons are NOT all in lucide-react — inline SVG if
  exact brand icons are needed (dribbble/behance), else generic icons.
- Fonts: Google Fonts `<link>` — "Playfair Display" (400/600/700) + "Open
  Sans" (400/500/600).
- Newsletter/subscribe forms (sidebar "Subcribe", footer email form):
  client-side only, no backend. All links decorative anchors.
- Keep the original quirks as content (they are part of the design): "Catgories",
  "Subcribe", "sharre now", "Instragram Feed", "Stay update with our latest" —
  or fix them silently; the fidelity rule allows paraphrased copy of the same
  kind, so either is acceptable (note the choice in the PR).
- Skip link "Skip to main content" (existing convention).
- Slider: 4 slides crossfading/fading via CSS or a tiny autoplay effect —
  original uses owl-carousel; implement with a lightweight autoplay state
  (setInterval + fade) and slide indicators, or static stacked slides with
  only the first visible if autoplay is out of scope (note it in the PR).

## Requirements

### Requirement: Page header

The system SHALL render a white navbar with a centered wordmark and flanking
navigation links.

#### Scenario: Navbar content

- **GIVEN** the Rekindle page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the wordmark "Rekindle" centered
- **AND** it SHALL show links Home, Category, and Archive on the left of the
  wordmark
- **AND** it SHALL show links Elements, Blog Detail, and Contact on the right
- **AND** the links SHALL be styled in italic Playfair with black text that
  turns `#13113a` on hover and when active
- **AND** on small screens the links SHALL collapse behind a menu toggler

### Requirement: Home banner

The system SHALL render a full-width image slider with an overlaid headline
and a vertical share strip.

#### Scenario: Banner content

- **GIVEN** the hero banner is displayed
- **WHEN** the page loads
- **THEN** the banner SHALL show a full-width carousel of four slides
- **AND** each slide SHALL show a background image with the white serif
  headline "Make the world a better place with camera" overlaid on the left
- **AND** the banner SHALL show a vertically rotated share strip at the far
  left with Facebook, Twitter, and Pinterest icons and a "share now" label

### Requirement: Blog post grid

The system SHALL render a two-column grid of blog post cards with metadata,
an excerpt, a read-more link, and a category tag.

#### Scenario: Post card content

- **GIVEN** the blog post area is displayed
- **WHEN** the grid renders
- **THEN** the main column SHALL show eight post cards in a two-column grid
- **AND** each card SHALL show an image, a serif title link, a meta row with a
  date and a comment count, an excerpt paragraph, a "Read More" link with an
  arrow, and a category tag with a folder icon
- **AND** hovering a card SHALL turn its background white and add a soft
  shadow

### Requirement: Pagination

The system SHALL render pagination controls below the post grid.

#### Scenario: Pagination display

- **GIVEN** the blog section is scrolled to the bottom
- **WHEN** the pagination renders
- **THEN** it SHALL show Previous, page numbers 01–04 and 09, and Next
- **AND** the page links SHALL have square corners (radius 0) and a
  transparent background

### Requirement: Sidebar

The system SHALL render a right sidebar with a search widget, an Instagram
grid, a categories list, popular posts, a newsletter form, and share icons.

#### Scenario: Sidebar content

- **GIVEN** the sidebar is displayed
- **WHEN** the page loads
- **THEN** the search widget SHALL show an input with placeholder "Search
  Posts" and a search button
- **AND** the Instagram widget SHALL show six square thumbnails in a 3-column
  grid
- **AND** the categories widget SHALL list Fashion 59, Travel 09, Lifestyle
  24, Shopping 44, and Food 15 as rows with the count right-aligned
- **AND** the popular posts widget SHALL show four posts, each with a small
  thumb, a title, and an "author | date" line
- **AND** the newsletter widget SHALL show an email input and a dark
  "Subscribe" button
- **AND** the share widget SHALL show four social icons
- **AND** every widget SHALL sit on a `#f9f9ff` background with generous
  padding

### Requirement: Footer

The system SHALL render a black footer with an about column, a newsletter
form, an Instagram feed, social links, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page scrolls to it
- **THEN** the footer SHALL appear on a black background
- **AND** the "About Us" column SHALL show a heading and a blurb paragraph
- **AND** the "Newsletter" column SHALL show a tagline and an email form with
  a white arrow button
- **AND** the "Instagram Feed" column SHALL show eight square thumbnails in a
  3-column grid
- **AND** the "Follow Us" column SHALL show four social icon links
- **AND** the bottom bar SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a skip link, a
main landmark, and a document title.

#### Scenario: Full page render

- **GIVEN** the Rekindle app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL start with a "Skip to main content" link
- **AND** the header SHALL be in the banner landmark, the sections in the
  main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Rekindle — Blog Magazine Template"

## Verification checklist

- [ ] `bash scripts/verify-app.sh rekindle` passes (typecheck + lint + 100%
      coverage tests + build, ~2–3 min)
- [ ] `npm run spec:validate` passes
- [ ] Navbar: white bar, centered "Rekindle" wordmark, left links Home /
      Category / Archive, right links Elements / Blog Detail / Contact,
      Playfair italic black links turning `#13113a` on hover/active, mobile
      toggler
- [ ] Banner: 4-slide full-width image slider, white serif headline overlaid
      left, rotated share strip (FB/Twitter/Pinterest + "share now") at far
      left
- [ ] Blog grid: 8 cards in 2 columns; image, serif title, date + comment
      meta, excerpt, Read More + arrow, category tag; hover → white bg +
      shadow
- [ ] Pagination: Previous / 01 02 03 04 09 / Next, square corners
- [ ] Sidebar on `#f9f9ff`: Search Posts form, Instagram 6-square grid,
      Catgories (5 rows with counts), Popular Posts (4 rows), Newsletter
      email + dark Subscribe button, Share this post icons
- [ ] Footer black: About Us blurb, Newsletter form + white arrow button,
      Instragram Feed (8 squares), Follow Us (4 icons), copyright bar
- [ ] Fidelity: section order 1:1, `#13113a` primary, `#f9f9ff` sections,
      Playfair + Open Sans, black footer, picsum placeholders seeded
      `rekindle-<n>`, no copied assets
- [ ] TEMPLATES.md: mark BOTH Revive copies (`[x]` — line 283 under Blog and
      line 2211 under Magazine) and append the live surge URL to both
- [ ] `npm install` at root before committing (lockfile registers
      `apps/rekindle`); `grep -c "free-react-templates/rekindle"`
      package-lock.json >= 1
- [ ] `"homepage": "https://free-react-templates-rekindle.surge.sh"`
      in `apps/rekindle/package.json`
- [ ] PR title: `feat: Rekindle — blog magazine website template (ColorLib
  Revive)`; body includes the source URL, preview URL, tokens, and the
      two-copy TEMPLATES.md note
