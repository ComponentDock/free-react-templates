# Template: Memoir (Blog Template)

## Purpose

Memoir is a single-page personal / lifestyle blog template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Andrea" design (see TEMPLATES.md — Blog category, line 240;
duplicate rows at line 332 under Bootstrap and line 1696 under Fashion — one
recreation covers all three rows), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, airy editorial lifestyle blog by an author persona
("Andrea Moore"): a **fixed white left sidebar** (off-canvas on mobile)
carrying the large serif logo, the main menu, a newsletter subscribe form and
the copyright line; beside it the **main column** shows a vertical list of
blog entries — each with a **circular 150px thumbnail**, an Lora serif title,
a meta row (date · category · comment count), a short excerpt and a blue
"Read More" link — followed by a circular-number pagination bar; on the right,
a light-grey **widget sidebar** with a search box, Categories with post
counts, Popular Articles (small square thumbnails + date/author/comment meta),
a pill Tag Cloud, a Newsletter card (photo background + dark overlay, white
Subscribe button), Archives with counts, and a Paragraph widget. Signature
look: stark white surfaces, **Abril Fatface** script-serif logo, **Lora**
serif headings, **Poppins** sans body, and a soft sky-blue accent
**`#1eafed`** on links, the active menu item, the active pagination circle and
button hovers. Note: the original's post list and popular-article list reuse
the same placeholder title ("You Can't Blame Gravity for Falling in Love"
repeated 8×; "Even the all-powerful Pointing has no control" repeated 3×) —
the recreation keeps the same content KINDS but writes distinct entries.

## Design reference (replication findings)

- **Original:** ColorLib "Andrea" — free Bootstrap 4 personal lifestyle blog
  template (source: https://colorlib.com/wp/template/andrea/). New name:
  **memoir** (a personal narrative/lifestyle term; single word, no collision
  with `ls apps/` or existing spec folders).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/andrea/`
  (HTTP 200, ~43KB HTML; title "Andrea - Free Bootstrap 4 Template by
  Colorlib"). Stylesheets: `css/style.css` (~57KB — Bootstrap 4.3.1 base +
  custom theme rules), plus open-iconic, animate, owl.carousel,
  magnific-popup, aos, ionicons, flaticon, icomoon. The custom theme section
  (from ~line 1450) declares the design system: headings in **Lora** serif,
  logo in **Abril Fatface**, body in **Poppins**.
- **Screenshot viewed** (`andrea-free-template.jpg`, 1200×946, in browser):
  three-column blog layout on white — narrow fixed left sidebar (nav with
  "Home" underlined in blue, artistic watercolor "Andrea Moore" logo in
  blues/purples, "Subscribe for newsletter" box, small copyright at bottom),
  center column with 4+ visible posts, each a **circular** lifestyle photo
  thumb (women, travel scenes) beside serif title + meta + excerpt + blue
  "Read More"; right column on very light grey with search, Categories
  (counts in parens), Popular Articles (square thumbs), pill Tag Cloud
  ("ANIMALS", "HUMAN", ...). Soft muted blue/teal accent; feminine
  lifestyle/travel aesthetic.
- **Live render verified** (browser, desktop width): post thumbnails render
  as **circles** (the `img-2` 300px height rule from the source does not
  produce ovals at the preview breakpoints — implementer should match the
  circular look of the screenshot), newsletter widget shows as a dark
  slate-blue card (photo `bg_1.jpg` + black 0.6 overlay), active pagination
  page is a filled blue circle.
- **Placeholder-copy caveat:** post list uses ONE repeated title 8 times
  ("You Can't Blame Gravity for Falling in Love") and popular articles use
  one repeated title 3 times ("Even the all-powerful Pointing has no
  control"); categories/archives counts and "5 Comment" are placeholder too.
  Paraphrase to distinct lifestyle/travel blog entries of the same kinds —
  do NOT render repeated identical titles. "Decob14 2018" is a typo in the
  original archive list → render "December 2018".
- **Section order (1:1) from the rendered DOM:**
  1. Hamburger toggle (`a.js-colorlib-nav-toggle.colorlib-nav-toggle`,
     fixed top-left; three 30px×2px black bars via `i` + `::before`/`::after`,
     hover spreads the outer bars; toggles `body.offcanvas`).
  2. Fixed sidebar (`aside#colorlib-aside`, `position: fixed; left: 0; top:
0; bottom: 0; width: 25%` (320px base); `background: #fff; border-right:
1px solid #e6e6e6`; padding `5em` top / `2em` sides / `40px` bottom;
     slides off-canvas (translateX) on mobile and when the toggle is active):
     a. Nav (`nav#colorlib-main-menu`): `ul` of 5 links — **Home**
     (active, blue underline), Fashion, Travel, About, Contact; `li`
     18px / weight 500, margin-bottom 10px; active item gets a 2px
     `#1eafed` underline (scaleX 0→1 transition).
     b. Logo (`h1#colorlib-logo`, Abril Fatface, `font-size: 74px`
     (62px on smaller), `line-height: 0.8`, text over the watercolor
     `images/bg_1.jpg` background): "Andrea" + `<span>Moore</span>`
     block below → recreation: "Memoir" wordmark over a subtle
     gradient/texture background (no copied image).
     c. Subscribe box (`div.colorlib-footer` block, 17px,
     `color: rgba(0,0,0,0.6)`): `h3` 18px / 600 "Subscribe for
     newsletter" + form with paper-plane icon (right, vertically
     centered) + borderless email input ("Enter Email Address") —
     minimal underlined/icon input, submit on Enter.
     d. Copyright (`p.pfooter`): "Copyright © <year> All rights reserved
     | This template is made with ♥ by Colorlib" → paraphrase to the
     recreation ("made with by Free React Templates"), no ColorLib
     attribution or link.
  3. Main column (`div#colorlib-main`, `width: 75%; float: right`; page
     `body` has a 2px `#dee2e6` top border):
     a. Blog list (`section.ftco-section.ftco-no-pt.ftco-no-pb` >
     `div.container` > `div.row` > `div.col-xl-8.py-5.px-md-5`): **12
     entries** (`div.blog-entry.ftco-animate.d-md-flex`, margin-bottom
     3em), each:
     - circular image link (`a.img.img-2`, `height/width: 150px;
border-radius: 50%`, background-image) → picsum placeholder;
     - text block (`div.text.text-2.pl-md-4`, `width:
calc(100% - 150px)`): `h3` 24px / 600 title link (Lora, black)
       → entry title; `div.meta-wrap` > `p.meta`: `<span>`s at 14px,
       `color: #bfbfbf` — calendar icon + "June 28, 2019", folder icon
       - category link (Travel / Lifestyle / Nature, black), comment
         icon + "5 Comment"; excerpt `p.mb-4` ("A small river named
         Duden flows by their place..."); "Read More" link
         (`a.btn-custom` — styled as a plain brand-blue text link with a
         forward arrow icon).
     - Titles (paraphrase freely, keep the motivational/lifestyle
       kind): "A Loving Heart is the Truest Wisdom", "Great Things
       Never Came from Comfort Zone", "Paths Are Made by Walking",
       "The Secret of Getting Ahead is Getting Started", then write 8
       DISTINCT additional entries (source repeats one title 8×).
       b. Pagination (`div.row` > `div.col` > `div.block-27`): `ul` of
       `‹` , pages **1** (active) … **5**, `›` — each page a 40px circle
       (`border-radius: 50%`, `1px solid #1eafed`, 40px height/width,
       line-height 40px); active = filled `#1eafed` with white text.
       c. Widget sidebar (`div.col-xl-4.sidebar.ftco-animate.bg-light.pt-5`;
       `bg-light` = `#f8f9fa`):
     - **Search** (`form.search-form`, `background: #fafafa; padding:
10px`): magnifying-glass icon right + input "Type a keyword and
       hit enter" (14px).
     - **Categories** (`h3.sidebar-heading` 20px italic Lora):
       Fashion (6), Technology (8), Travel (2), Food (2), Photography
       (7) — `ul.categories` `li` with bottom border `1px solid
#dee2e6`, counts in `span`.
     - **Popular Articles**: 3 items (`div.block-21.mb-4.d-flex`) —
       80px square thumbnail (`a.blog-img`, 80×80, background-image)
       - `div.text` (`width: calc(100% - 100px)`): `h3.heading` 16px
         link + `div.meta` row: calendar "June 28, 2019" · person "Dave
         Lewis" · chat "19" (write distinct titles — source repeats one
         placeholder title 3×).
     - **Tag Cloud** (`ul.tagcloud`): 8 pills — animals, human,
       people, cat, dog, nature, leaves, food — `a.tag-cloud-link`
       11px uppercase, `padding: 4px 10px`, `border: 1px solid #ccc`,
       `border-radius: 4px`, black text; hover → `border: 1px solid
#000`.
     - **Newsletter** (`div.subs-wrap.img.py-4`, background-image
       `images/bg_1.jpg` + `div.overlay` black `opacity: 0.6`,
       text `rgba(255,255,255,0.7)`): heading "Newsletter" (white),
       blurb "Far far away, behind the word mountains, far from the
       countries Vokalia", email input (transparent, white text,
       borderless) + **Subscribe** button (`btn.btn-white` — white
       pill `border-radius: 30px`, black text; hover → blue
       `#1eafed` text).
     - **Archives** (`ul.categories` reuse): December 2018 (10),
       September 2018 (6), August 2018 (8), July 2018 (2), June 2018
       (7), May 2018 (5) — fix the "Decob14" typo.
     - **Paragraph**: `h3.sidebar-heading` "Paragraph" + lorem ipsum
       paragraph.
  4. No separate full-width footer on the index page — the copyright bar
     lives inside the fixed sidebar (`colorlib-footer`). Implementer MAY
     keep it there (matches source) — do not invent a full-width footer.

## Design tokens (extracted from `css/style.css` + DOM)

- Fonts (Google Fonts): **Abril Fatface** (cursive) — the logo/wordmark
  only (`#colorlib-logo`, 74px / 0.8 line-height); **Lora** (serif) — ALL
  headings h1–h6 (`.sidebar-heading` 20px italic, blog titles, widget
  headings; `color: rgba(0,0,0,0.8); font-weight: normal; line-height:
1.5`); **Poppins** (sans) — body, nav menu (18px / 500), meta, buttons,
  inputs. Load via `<link>` in `index.html` (the source `@import`s Google
  Fonts; Tailwind 4 needs the `<link>` instead).
- Brand accent: **`#1eafed`** (soft sky blue) — all `a` links, active nav
  underline (2px, scaleX transition), `.btn-primary` (fill; hover →
  transparent bg + blue text), pagination circle border + active fill,
  `.btn-white` hover text.
- Ink / neutrals: headings `rgba(0,0,0,0.8)`; body text `#212529`; hard
  black `#000000` (post title links, tag-cloud text); meta gray
  `#bfbfbf` (14px); sidebar footer text `rgba(0,0,0,0.6)`.
- Borders: page top border `2px solid #dee2e6` on `body`; aside right
  border `1px solid #e6e6e6`; category/archive dividers `1px solid
#dee2e6`; tag-cloud border `1px solid #ccc` → hover `#000`.
- Surfaces: page + aside `#fff`; widget sidebar `bg-light` `#f8f9fa`;
  search box `#fafafa` (padding 10px); newsletter card = photo
  `bg_1.jpg` + black overlay `opacity: 0.6` (recreate with a dark slate
  `#2b3a4a`-family gradient or dark picsum photo + overlay — no copied
  asset), text `rgba(255,255,255,0.7)`.
- Shapes: post thumbnails **150px circles** (`border-radius: 50%`);
  popular-article thumbs 80px squares; pagination 40px circles; buttons
  pill `border-radius: 30px`; tag pills `border-radius: 4px`; search
  input right-icon (icon absolutely positioned right, vertically
  centered).
- Spacing: blog entry `margin-bottom: 3em`; aside padding `5em` top /
  `2em` left+right / `40px` bottom; sidebar-box `margin-bottom: 40px`;
  `.sidebar-heading` `margin-bottom: 30px`; categories `li` `margin/
padding-bottom: 10px`; main `col-xl-8` `padding: 5rem 3rem 3rem`
  (`py-5 px-md-5`).
- Icons (source: icomoon/ionicons — recreation: lucide-react): Calendar
  (meta date), Folder (category), MessageCircle (comments), Search,
  PaperPlane/Send (subscribe), User (popular-article author), Chat →
  MessageCircle (comment count), Heart (copyright), ArrowRight
  (Read More), Menu/X (hamburger toggle).

## Requirements

### Requirement: Fixed sidebar

The system SHALL render a fixed left sidebar (off-canvas on mobile) with
the nav, logo, subscribe form and copyright.

#### Scenario: Sidebar layout

- **GIVEN** the Memoir page is rendered on a desktop viewport
- **WHEN** the sidebar is displayed
- **THEN** it SHALL be a fixed column on the left (`width: 25%` ≈ 320px,
  full height, white background, right border `#e6e6e6`)
- **AND** it SHALL contain, top to bottom: the nav menu, the "Memoir"
  logo wordmark, the "Subscribe for newsletter" box, and the copyright
  line at the bottom

#### Scenario: Nav menu

- **GIVEN** the sidebar nav is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show five links (18px, weight 500): Home (active),
  Fashion, Travel, About, Contact
- **AND** the active item SHALL have a 2px brand-blue `#1eafed`
  underline

#### Scenario: Logo and subscribe

- **GIVEN** the sidebar brand block is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the wordmark in Abril Fatface (~74px, 0.8 line
  height) over a subtle textured/gradient background
- **AND** a "Subscribe for newsletter" heading with an email input that
  has a paper-plane icon and accepts a valid email (success state on
  submit, no backend)

#### Scenario: Copyright

- **GIVEN** the bottom of the sidebar is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a small copyright line referencing the
  recreation (e.g. "Copyright © All rights reserved | made with by Free
  React Templates") — no ColorLib attribution or link

### Requirement: Hamburger toggle / off-canvas behavior

The system SHALL provide a hamburger toggle that slides the sidebar in
and out of view on mobile and when activated.

#### Scenario: Toggle on mobile

- **GIVEN** a narrow viewport
- **WHEN** the page is rendered
- **THEN** the sidebar SHALL be hidden off-canvas (translated off the
  left edge) and a three-bar hamburger toggle SHALL be visible at the
  top-left
- **AND** clicking the toggle SHALL slide the sidebar in and maintain
  `aria-expanded` state

#### Scenario: Desktop toggle

- **GIVEN** a desktop viewport with the sidebar visible
- **WHEN** the hamburger toggle is clicked
- **THEN** the sidebar SHALL slide out of view and the main column SHALL
  expand to full width

### Requirement: Blog entries list

The system SHALL render a vertical list of twelve blog entries in the
main column, each with a circular thumbnail, title, meta row, excerpt
and Read More link.

#### Scenario: Entry layout

- **GIVEN** the blog list is displayed
- **WHEN** an entry is inspected
- **THEN** it SHALL show a circular 150px image thumbnail on the left
  (desktop; centered/stacked on mobile)
- **AND** beside it a title (Lora serif, 24px, weight 600, black link),
  a meta row (calendar date, folder category, comment count — 14px,
  `#bfbfbf`), a short excerpt, and a blue "Read More" text link with a
  forward arrow

#### Scenario: Distinct entries

- **GIVEN** the blog list is rendered
- **WHEN** all twelve entries are inspected
- **THEN** they SHALL show twelve DISTINCT titles and matching
  paraphrased lifestyle/travel content (the source repeats one title —
  do not repeat)
- **AND** each entry SHALL link its title/image to a single-post view
  (router link or `#`)

#### Scenario: Mobile stacking

- **GIVEN** a narrow viewport
- **WHEN** the blog list is rendered
- **THEN** each entry SHALL stack vertically with the circular thumbnail
  centered above the text (text centered)

### Requirement: Pagination

The system SHALL render a circular-number pagination bar below the blog
list.

#### Scenario: Page circles

- **GIVEN** the pagination bar is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show `‹`, pages 1–5, and `›` as 40px circles with a
  `#1eafed` border
- **AND** page 1 SHALL be the active page — filled `#1eafed` with white
  text

### Requirement: Widget sidebar

The system SHALL render a light-grey right widget column with search,
categories, popular articles, tag cloud, newsletter, archives and
paragraph widgets.

#### Scenario: Search and Categories

- **GIVEN** the widget sidebar is displayed
- **WHEN** the top widgets are inspected
- **THEN** it SHALL show a search box (`#fafafa` background, magnifying-
  glass icon, placeholder "Type a keyword and hit enter")
- **AND** a "Categories" widget (italic Lora 20px heading) listing
  Fashion (6), Technology (8), Travel (2), Food (2), Photography (7)
  with `#dee2e6` dividers

#### Scenario: Popular Articles

- **GIVEN** the Popular Articles widget is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show three items, each with an 80px square thumbnail,
  a 16px title link, and a meta row (date · author · comment count)
- **AND** the three titles SHALL be distinct (the source repeats one
  placeholder title)

#### Scenario: Tag Cloud

- **GIVEN** the Tag Cloud widget is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show eight uppercase 11px tag pills (animals, human,
  people, cat, dog, nature, leaves, food) with 4px radius and `#ccc`
  borders
- **AND** hovering a tag SHALL darken its border to `#000`

#### Scenario: Newsletter card

- **GIVEN** the Newsletter widget is displayed
- **WHEN** it is inspected
- **THEN** it SHALL be a dark card (recreated photo + black overlay,
  text `rgba(255,255,255,0.7)`) with a white heading, a short blurb, a
  transparent email input and a white pill "Subscribe" button
- **AND** the button hover SHALL turn the text brand blue `#1eafed`
- **AND** submitting a valid email SHALL show a success state

#### Scenario: Archives and Paragraph

- **GIVEN** the bottom widgets are displayed
- **WHEN** they are inspected
- **THEN** the Archives widget SHALL list six month rows with counts
  (December 2018 (10), September 2018 (6), August 2018 (8), July 2018
  (2), June 2018 (7), May 2018 (5)) — fix the source's "Decob14" typo
- **AND** the Paragraph widget SHALL show a heading and a lorem-style
  paragraph

## Verification checklist

- [ ] `npm run verify:app memoir` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the rendered original 1:1 (toggle → fixed
      sidebar [nav, logo, subscribe, copyright] → main [12 blog entries,
      pagination] → widget sidebar [search, categories, popular articles,
      tag cloud, newsletter, archives, paragraph]); no invented
      full-width footer
- [ ] Tokens wired through `@theme`: brand blue `#1eafed`, heading ink
      `rgba(0,0,0,0.8)`, body `#212529`, meta gray `#bfbfbf`, borders
      `#dee2e6` / `#e6e6e6` / `#ccc`, surfaces `#fff` / `#f8f9fa` /
      `#fafafa`, overlay text `rgba(255,255,255,0.7)`
- [ ] Abril Fatface (logo), Lora (headings) and Poppins (body) loaded via
      Google Fonts `<link>` in `index.html`
- [ ] Sidebar: fixed left, 25% width, white, `#e6e6e6` right border;
      nav 5 links 18px/500 with blue-underline active state; Abril
      Fatface wordmark; subscribe form with paper-plane icon + success
      state; paraphrased copyright (no ColorLib attribution)
- [ ] Hamburger toggle (3-bar, hover-spreading) with off-canvas
      behavior + `aria-expanded`; sidebar hidden on mobile by default
- [ ] Blog list: exactly 12 DISTINCT entries; 150px circular thumbnails
      (picsum), Lora 24px/600 titles, 14px `#bfbfbf` meta (calendar /
      folder / comments), excerpt, blue "Read More" + arrow
- [ ] Pagination: 40px circles, `#1eafed` border, page 1 active filled
- [ ] Widget sidebar on `bg-light`: search (`#fafafa`), Categories with
      counts + `#dee2e6` dividers, Popular Articles (80px square thumbs +
      date/author/comments meta), Tag Cloud (8 uppercase pills, 4px
      radius, hover `#000` border), Newsletter dark card with white pill
      Subscribe button (hover blue), Archives with counts (typo fixed),
      Paragraph widget
- [ ] Placeholder images use `https://picsum.photos/seed/memoir-<n>/<w>/<h>`
      (12 circular post thumbs ~150×150, 3 popular-article thumbs 80×80,
      newsletter card background); no assets copied
- [ ] Icons from lucide-react (Calendar, Folder, MessageCircle, Search,
      Send, User, Heart, ArrowRight, Menu/X)
- [ ] Dark-mode toggle present per repo conventions (dark: variants)
- [ ] README status table regenerated after merge (`npm run readme:status`);
      mark ALL THREE TEMPLATES.md rows (lines 240, 332, 1696) `[x]` when
      done
