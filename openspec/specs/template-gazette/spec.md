# Template: Gazette (Blog)

## Purpose

Gazette is a single-page blog template in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Balita" minimal blog
website template design (see TEMPLATES.md, Blog category, line 244), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS
4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Balita" — minimalist editorial/magazine blog:
  a thin black utility top bar (social icons left, search right), a giant
  centered wordmark logo, a centered uppercase nav with two dropdowns, a
  full-width hero slider of featured posts over photo backgrounds (black
  overlay), a 3-card photo grid, a 2-column blog section (card grid +
  pagination + horizontal "More Blog Posts" entries on the left, sidebar with
  search / author bio / popular posts / categories / tags on the right), and a
  black 3-column footer with a copyright bar
  (source: https://colorlib.com/wp/template/balita/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/balita/`
  (HTTP 200, ~32.6KB HTML). DOM + `css/style.css` (16.4KB) + `css/bootstrap.css`
  extracted and analyzed; tokens below come from those stylesheets.
- **Visual design (from screenshot `balita-free-template.jpg` + DOM):**
  clean, minimalist, editorial — white content on a light-gray page with a
  black top bar and black footer providing high contrast. The screenshot shows
  the thin black top strip (white social icons left, dark search field right),
  the centered "Balita" wordmark logo in a tall geometric sans (Josefin Sans),
  a small uppercase sans menu (HOME · TRAVEL · CATEGORIES · ABOUT · CONTACT),
  then a panoramic hero image (silhouetted people at sunset) with a blue
  "LIFESTYLE" category chip, white uppercase meta (MARCH 15, 2018 + comment
  icon), a large white headline and excerpt, and carousel dots at the bottom
  (one blue, two gray). Below the fold: a 3-column grid of photo cards and the
  blue accent recurring on chips, dots, pagination and tag hovers. Accent
  color is Bootstrap blue `#007bff` (hover `#3395ff`); ink is black `#000`;
  body text gray `#6c757d`.
- **Section order (1:1) from the DOM:**
  1. Header (`<header>` sticky, `z-index: 5`, `background: #fff`):
     - `div.top-bar` (`background: #000`, `padding: 10px 0`): `div.col-9.social`
       — 6 white social icons (fa: twitter, facebook, instagram, youtube-play,
       vimeo, snapchat), `opacity: .5`, hover `1`; `div.col-3.search-top` —
       dark search input (`background: #212121`, focus `#333333`, white text,
       `min-width: 300px`, padding `4px 30px 4px 15px`, search icon right).
     - `div.container.logo-wrap` → `div.row.pt-5` → `div.col-12.text-center`:
       mobile burger (`a.absolute-toggle` + `.burger-lines` 30×2px black,
       `d-block d-md-none`) + `h1.site-logo` → `a` "Balita" (`color: #000`,
       `font-size: 90px`, 40px below 992px).
     - `nav.navbar.navbar-expand-md.navbar-light.bg-light` → `div.container`
       (bottom `border-bottom: 1px solid #e6e6e6`): `ul.navbar-nav.mx-auto` —
       Home (`nav-link.active`), Travel (dropdown: Asia, Europe, Dubai,
       Africa, South America), Categories (dropdown: Lifestyle, Food,
       Adventure, Travel, Business), About, Contact. Nav links: `padding:
1.7rem 1rem`, 13px, uppercase, `letter-spacing: .05em`. Dropdown:
       radius 0, no border, shadow `0 2px 30px rgba(0,0,0,.2)`, item hover/active
       `background: #007bff, color: #fff`.
  2. Hero (`section.site-section.pt-5` — `padding: 7em 0`):
     - `div.owl-carousel.owl-theme.home-slider` — 3 slides, each an
       `a.a-block.d-flex.align-items-center.height-lg` (height 500px,
       `background-size: cover`, `padding: 30px`, `::before` black overlay
       `opacity: .3`, hover `.4`): inner `div.text.half-to-full` (`max-width:
50%`, z-2) with `div.post-meta` (white, uppercase, `letter-spacing:
.1em`, 13px): `span.category` chip (`background: #007bff`, 12px,
       uppercase, radius 4px, `padding: 2px 8px`) + date "March 15, 2018" +
       comment count icon; `h3` white headline; `p` white excerpt. Slider
       dots (`owl-dots` absolute bottom 100px): 10px circles, `border: 2px
solid rgba(255,255,255,.5)`, active white.
     - Below the carousel, `div.row` of 3 `a.a-block.height-md` (400px) cards
       in `col-md-6.col-lg-4` (text = post-meta + h3 only, no excerpt).
  3. Blog section (`section.site-section.py-sm` — no vertical padding):
     `h2.mb-4` "Lifestyle Category" → `div.row.blog-entries`:
     - `div.col-md-12.col-lg-8.main-content`:
       - `div.row` of 6 `div.col-md-6` blog cards — `a.blog-entry` (hover
         `opacity: .7`): `img` full-width + `div.blog-content-body`
         (`padding: 20px`, `border: 1px solid #efefef`, `border-top: none`):
         `div.post-meta` (color `#b3b3b3`, `margin-bottom: 20px`) with
         category chip + date + comments; `h2` (18px, `line-height: 1.5`).
       - `nav` pagination (`ul.pagination` centered, `margin-bottom: 5em`):
         60×60px circles, `border-radius: 50%`, active/hover `background:
#007bff, color: #fff`; items Prev / 1 / 2 / 3 / Next.
       - `div.row.mb-5.mt-5` → `h2.mb-4` "More Blog Posts" + 3
         `div.post-entry-horzontal` — `a` (display table): `div.image`
         (200px wide, bg image) + `span.text` (`padding: 30px`,
         `border: 1px solid #e6e6e6`, `border-left: none`): post-meta + `h2`
         20px; hover `box-shadow: 0 4px 20px rgba(0,0,0,.1)`.
     - `div.col-md-12.col-lg-4.sidebar` (`padding-left: 5em`), 4
       `div.sidebar-box`:
       1. `search-form-wrap`: search input (`background: #f7f7f7`, no border,
          `padding: 15px`, icon right) placeholder "Type a keyword and hit
          enter".
       2. `div.bio.text-center` (`background: #fff`, `border: 1px solid
#e6e6e6`, `padding: 15px`): circular avatar (100px, radius 50%,
          `margin-top: -4em` overlapping the box top), `h2` name "Meagan
          Smith" (20px), blurb paragraph, `a.btn.btn-primary.btn-sm` "Read my
          bio" (blue, radius 0, `padding: 8px 20px`, 14px, hover `#3395ff`),
          social icon row (black icons).
       3. `h3.heading` "Popular Posts" (18px, `border-bottom: 1px solid
#e6e6e6`, `padding-bottom: 20px`) + `ul.post-entry-sidebar` — 3
          items: 90px thumb + text `h4` (18px) + meta (14px, `#b3b3b3`).
       4. `h3.heading` "Categories" + `ul.categories` — items with dotted
          bottom border (`1px dotted #dee2e6`), count span right (`#ccc`),
          active item italic black.
       5. `h3.heading` "Tags" + `ul.tags` — pill links (`background: #f2f2f2`,
          `border-radius: 4px`, `padding: 2px 6px`, gray text; hover
          `background: #007bff, color: #fff`); 12 tags (Travel, Adventure,
          Food, Lifestyle, Business, Freelancing ×2).
  4. Footer (`footer.site-footer`, `background: #000`, `padding: 5em 0`):
     - `div.col-md-4` "Paragraph": full-width image + blurb paragraph
       (`color: rgba(255,255,255,.5)`).
     - `div.col-md-6.ml-auto` → two columns: `div.col-md-7` "Latest Post" —
       3 `post-entry-sidebar` items (90px thumbs, white `h4`); `div.col-md-4`
       — "Quick Links" (About Us, Travel, Adventure, Courses, Categories) and
       "Social" (`ul.footer-social`: Twitter, Facebook, Instagram, Vimeo,
       Youtube, Snapshot with brand icons). Footer headings: white, 14px,
       uppercase, `letter-spacing: .2em`, `margin-bottom: 30px`; links white,
       hover `opacity: .5`.
     - Copyright row: centered white text with heart icon "made with by
       Colorlib" equivalent → paraphrase to the recreation name (e.g. "made
       with by Free React Templates").

## Design tokens (extracted from `css/style.css` + `css/bootstrap.css`)

- Font (Google Fonts, Josefin Sans 300/400/700): **Josefin Sans** — body
  (300, 18px, `line-height: 1.9`, `#6c757d`), logo h1 (700-ish, 90px,
  `#000`), nav links (400, 13px, uppercase, `letter-spacing: .05em`), blog
  card h2 (18px), footer headings (700, 14px, uppercase, `letter-spacing:
.2em`).
- Brand blue: **`#007bff`** — category chips, dropdown item hover/active,
  carousel active dot, pagination active/hover, tag hover, btn-primary;
  hover blue `#3395ff` (btn-primary hover/active/focus).
- Ink: **`#000`** — top bar, logo, headings, footer bg, hero overlay (opacity
  .3 → .4), burger lines, bio social icons, active category (italic).
- Body gray: **`#6c757d`**; card excerpt gray `gray` (13px); post-meta gray
  `#b3b3b3` (blog cards, popular posts); counts `#ccc`; sidebar box text 15px.
- Surfaces: page/header `#fff`; navbar `bg-light` (transparent header +
  `#e6e6e6` on mobile); top bar + footer `#000`; search input `#212121`
  (focus `#333333`); blog search form `#f7f7f7`; tags `#f2f2f2`.
- Borders: navbar container bottom `#e6e6e6`; blog card body `#efefef`;
  horizontal entry `#e6e6e6`; bio box `#e6e6e6`; sidebar heading bottom
  `#e6e6e6`; categories dotted `#dee2e6`.
- Shapes: category chip radius 4px; tags radius 4px; pagination + dots
  `border-radius: 50%` (pagination 60×60px); avatar 50%; buttons + form
  controls `border-radius: 0` (sharp); btn padding `8px 20px`, `border-width:
2px`, hover shadow `0 3px 10px -2px rgba(0,0,0,.2)`.
- Layout rhythm: `site-section` padding `7em 0` (hero) / 0 (blog section);
  hero slides 500px tall (`.height-lg`), cards 400px (`.height-md`), text
  `max-width: 50%` on slides; card grid 2×3 in a col-lg-8 main column;
  sidebar `padding-left: 5em`; footer `padding: 5em 0`.

## Requirements

### Requirement: Top bar

The system SHALL render a black utility top bar with social icons on the left
and a search field on the right.

#### Scenario: Social icons

- **GIVEN** the Gazette page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL have a black background (`#000`) with ~10px vertical
  padding
- **AND** it SHALL show at least four social icons aligned left in white at
  50% opacity
- **AND** the icons SHALL become fully opaque on hover

#### Scenario: Search field

- **GIVEN** the top bar is displayed
- **WHEN** the search area is inspected
- **THEN** it SHALL show a dark search input (`#212121`, white text) with a
  search icon and placeholder "Type keyword to search..."
- **AND** the input SHALL darken to `#333333` on focus

### Requirement: Header

The system SHALL render a centered giant wordmark logo and a centered
uppercase navigation bar with two dropdowns.

#### Scenario: Logo

- **GIVEN** the header is displayed
- **WHEN** the logo area is rendered
- **THEN** it SHALL show the wordmark "Gazette" centered in black, ~90px on
  desktop (scaling down on mobile)
- **AND** it SHALL show a mobile burger toggle on narrow viewports

#### Scenario: Navigation

- **GIVEN** the header is displayed
- **WHEN** the nav bar is rendered
- **THEN** it SHALL show centered uppercase links: Home (active), Travel,
  Categories, About, Contact
- **AND** the Travel link SHALL open a dropdown with Asia, Europe, Dubai,
  Africa, South America
- **AND** the Categories link SHALL open a dropdown with Lifestyle, Food,
  Adventure, Travel, Business
- **AND** dropdown items SHALL highlight blue (`#007bff`) on hover

### Requirement: Hero slider

The system SHALL render a full-width featured-post slider with three photo
slides, each carrying a category chip, meta line, headline, and excerpt over a
dark overlay.

#### Scenario: Slide content

- **GIVEN** the hero section is displayed
- **WHEN** a slide is rendered
- **THEN** it SHALL show a 500px-tall background photo with a black overlay at
  30% opacity (40% on hover)
- **AND** it SHALL show a blue uppercase category chip (e.g. "Lifestyle"),
  a white uppercase meta line (date + comment count), a white headline, and a
  white excerpt confined to the left half (max-width 50%)

#### Scenario: Slider controls

- **GIVEN** the hero slider is displayed
- **WHEN** the user navigates slides
- **THEN** the slider SHALL cycle through the three featured posts
- **AND** it SHALL show circular dots near the bottom with the active dot in
  blue (`#007bff`)

#### Scenario: Photo card grid

- **GIVEN** the hero section is displayed
- **WHEN** the grid below the slider is rendered
- **THEN** it SHALL show three 400px-tall photo cards in a row (3 columns on
  desktop)
- **AND** each card SHALL show a category chip, date, and headline over the
  overlay

### Requirement: Blog card grid

The system SHALL render a "Lifestyle Category" section with six blog cards in
a two-column grid plus circular pagination.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** the card grid is rendered
- **THEN** it SHALL show a heading "Lifestyle Category"
- **AND** it SHALL show six cards in a 2×3 grid, each with a photo, a
  `#efefef`-bordered body (no top border), a meta line (blue category chip,
  date, comment count), and an 18px headline
- **AND** a card SHALL fade to 70% opacity on hover

#### Scenario: Pagination

- **GIVEN** the blog card grid is displayed
- **WHEN** the pagination is rendered
- **THEN** it SHALL show circular 60px items: Prev, 1 (active, blue), 2, 3,
  Next
- **AND** hovering any item SHALL turn it blue with white text

### Requirement: More blog posts

The system SHALL render a horizontal "More Blog Posts" list of three
entries, each with a 200px photo and a bordered text block.

#### Scenario: Horizontal entries

- **GIVEN** the "More Blog Posts" section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "More Blog Posts"
- **AND** it SHALL show three horizontal entries (photo left, `#e6e6e6`
  bordered text right) each with meta line and 20px headline
- **AND** an entry SHALL lift with `0 4px 20px rgba(0,0,0,.1)` shadow on
  hover

### Requirement: Sidebar

The system SHALL render a right sidebar with a search box, an author bio
card, popular posts, categories, and tags.

#### Scenario: Search + bio

- **GIVEN** the sidebar is displayed
- **WHEN** the top sidebar boxes are rendered
- **THEN** it SHALL show a search input on `#f7f7f7` with placeholder "Type a
  keyword and hit enter"
- **AND** it SHALL show an author bio card with a circular avatar overlapping
  the box top, the name "Meagan Smith" (or paraphrase), a blurb, a blue "Read
  my bio" button, and social icons

#### Scenario: Popular posts

- **GIVEN** the sidebar is displayed
- **WHEN** the Popular Posts box is rendered
- **THEN** it SHALL show the heading "Popular Posts" with a bottom border
- **AND** it SHALL list three entries, each with a 90px thumbnail, an 18px
  title, and a small meta line

#### Scenario: Categories and tags

- **GIVEN** the sidebar is displayed
- **WHEN** the remaining boxes are rendered
- **THEN** it SHALL show a Categories list (e.g. Courses, News, Design, HTML,
  Web Development) with right-aligned counts and dotted separators
- **AND** it SHALL show a Tags cloud of pill links on `#f2f2f2` that turn blue
  with white text on hover

### Requirement: Footer

The system SHALL render a black footer with a paragraph column, latest posts,
quick links, social links, and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** it is rendered
- **THEN** it SHALL have a black background with `5em` vertical padding
- **AND** it SHALL show the "Paragraph" column (image + blurb in
  semi-transparent white), "Latest Post" (3 thumbnail entries with white
  titles), "Quick Links" (5 links), and "Social" (6 brand links)
- **AND** footer headings SHALL be white, uppercase, 14px, letterspaced

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom row is rendered
- **THEN** it SHALL show centered white copyright text referencing the
  recreation (e.g. "made with by Free React Templates") — no ColorLib
  attribution or assets

## Verification checklist

- [ ] `npm run verify:app gazette` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the original 1:1 (top bar → logo → navbar →
      hero slider → photo card grid → blog card grid + pagination → More
      Blog Posts → sidebar → footer → copyright bar)
- [ ] Tokens wired through `@theme`: brand blue `#007bff` (+ hover `#3395ff`),
      ink `#000`, body gray `#6c757d`, meta gray `#b3b3b3`, surfaces `#fff` /
      `#000` / `#f7f7f7` / `#f2f2f2`, borders `#e6e6e6` / `#efefef`
- [ ] Josefin Sans (300/400/700) loaded via Google Fonts `<link>` in
      `index.html`
- [ ] Category chips blue uppercase 12px radius 4px; buttons sharp (radius 0)
      with 2px border; pagination/dots circular
- [ ] Placeholder images use `https://picsum.photos/seed/gazette-<n>/<w>/<h>`;
      no assets copied from the original
- [ ] Hero slides 500px tall with black overlay (30% → 40% hover), text
      confined to ~50% width; card grid 400px tall, 3-up
- [ ] Nav dropdowns (Travel, Categories) with blue hover items; mobile
      burger toggle with aria-expanded
- [ ] Sidebar: search input, bio card (overlapping circular avatar), Popular
      Posts thumbs, Categories counts, Tags pills — all present
- [ ] Footer black with 3 content columns + copyright bar; links fade to 50%
      opacity on hover
- [ ] Dark-mode toggle present per repo conventions (dark: variants)
- [ ] README status table regenerated after merge (`npm run readme:status`)
