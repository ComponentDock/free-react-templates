# Template: Herald (News / Blog Template)

## Purpose

Herald is a single-page news-portal template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Ednews"
website template (see TEMPLATES.md, Blog section, line 256), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The reference is a classic online-news homepage: a top utility bar
(location/weather + date/time left, social icons right); a middle header with
the logo on the left and a photo-backed ad banner ("realestate.com.au" →
paraphrase) with a white READ MORE button on the right; a solid navy
bottom-menu nav (HOME, BUSINESS, SPORT, POLITICS, TRAVEL, LIFESTYLE, CULTURE,
TECH, VIDEO, FEATURES — each a dropdown with PAGE 1/PAGE 2 links, white
underline hover, mobile hamburger); a breaking-news strip (red BREAKING NEWS
button + headline link + search form) sitting on the navy section; a large
bento-style hero grid of four photo cards with dark gradient overlays, white
uppercase headlines and meta rows (date, author, comments, views); a content
row with a main column — "TODAY FEATURED" card (image + headline + meta +
excerpt) followed by six side-thumbnail news cards (250×250 image left, text
right) — and a sidebar — "STAY CONNECT" social-follower card (four brand-color
rows: Facebook 2135, Twitter 5176, Google 2244, RSS 2111), a "STAY CONNECT"
news list of eight 100×100 thumbnails (the original reuses the heading; keep
or rename to a news-list heading), and a review card with a "Judge Overseeing:
9.2/10" rating link; a navy "FEATURED VIDEO" section with four video cards
(play overlay on hover); a second content row with POLITICS and SPORT cards
(lead image + headline + excerpt + four left-bordered mini headlines) and a
2×2 grid of LIFESTYLE / BUSINESS / CULTURE / TECH cards (image, headline,
meta, divider, three paragraphs) with a sidebar of MOST READ (6 items),
ARTICLES BY AUTHOR (4 avatars + names + "Reporter" role), a photo banner card
("REAL ESTATE" + READ MORE), and a NEWSLETTER card (title, blurb, portrait
image, email form, SUBSCRIBE NOW button); and a navy footer with a faint map
background, QUICK LINKS / FEATURED VIDEO / OUR WORK / RECENT POST columns, a
bottom row (logo, blurb, radial social icons), and a dark bottom bar with
copyright + footer link list.

Brand colors: deep navy `#0C0E68` (primary), nav navy `#0A2D8B`, dark navy
`#050658`, accent red `#E3493D` (breaking-news tag). Body font Roboto 14px;
headings Encode Sans Expanded (Google Fonts). Cards are white, radius 3px,
soft shadow `1px 1px 4px rgba(0,0,0,.10)`; section titles use a bottom rule
(1px #ccc line + 80×5px brand underline); buttons are squared with radius
2–3px, 45px tall (35px md / 30px sm variants).

## Design reference (replication findings)

- **Original:** ColorLib "Ednews" — news/magazine template
  (source: https://colorlib.com/wp/template/ednews/). Listed in TEMPLATES.md
  under Blog (line 256). Screenshot: `ednews-free-template.jpg` (1200×946,
  reviewed visually in the browser).
- **Live preview URL:** https://preview.colorlib.com/theme/ednews/ — reachable,
  fetched and analyzed. HTML saved to `/tmp/ednews/index.html` (64 KB, 1174
  lines); stylesheets `common/styles.css` (93 KB — design tokens below),
  `fonts/ionicons.css` (57 KB), `plugin-frameworks/bootstrap.css` (192 KB).
  Screenshot and preview agree (navy/white news layout, bento hero grid,
  breaking-news tag, video section) — the preview DOM is authoritative.
- **Section order (1:1 from the preview DOM):**
  1. Top header `header .top-header` — `border-bottom: 1px solid #ddd`,
     `font-size: 1.1em`; left `ul` (li dividers 1px #ccc): "Stockholm,
     Sweden [cloud icon] 15 °C" / "Thursda, 24 May, 2018" / "09:00 AM"; right
     `ul.color-ash` `font-13`: Facebook, Twitter, Pinterest, Google, RSS icon
     links (Ionicons `ion-social-*`).
  2. Middle header `header .middle-header` (`mtb-20 mt-xs-0`, container →
     row): `col-sm-4` logo `a.logo > img.logo-black.png` (height 24px, margin
     28px 0); `col-sm-8` banner `div.banner-area.dplay-tbl.plr-30.color-white`
     — CSS bg image `banner-1-800x200.jpg` + `:after` black overlay
     `opacity: .5`; content: h5 "realestate.com.au" + h6 "Discover the latest
     properties of australia" (left cell) + `a.btn-fill-white.btn-b-sm.plr-10`
     "READ MORE" (right cell, text-right).
  3. Bottom menu `header .bottom-menu` — `background: #0A2D8B; color: #fff`.
     Hamburger `a.menu-nav-icon` (`ion-navicon`, hidden desktop); `ul.main-menu`
     with 10 `li.drop-down`: HOME, BUSINESS, SPORT, POLITICS, TRAVEL,
     LIFESTYLE, CULTURE, TECH, VIDEO, FEATURES — each `a` (line-height 60px,
     `padding: 0 10px`, white text, 3px white underline `:after` scaleX 0→1 on
     hover) + chevron `ion-chevron-down`; `ul.drop-down-menu` absolute,
     `min-width: 180px`, bg `#0A2D8B`, `box-shadow 0 3px 10px rgba(0,0,0,.3)`,
     items `border-top: 1px solid #0C0E68`, `padding: 17px 20px`, hover bg
     `#0C0E68` + translateX(4px); each dropdown has PAGE 1 / PAGE 2. Mobile:
     menu becomes a slide-down block (`visible-menu`), `box-shadow
0 4px 20px -10px rgba(0,0,0,.4)`.
  4. Breaking news + search `section.pt-0.bg-primary` → `div.container.ptb-10`
     → row: `col-md-8.col-lg-9` = `a.btn-fill-red.plr-10.btn-b-md` "**BREAKING
     NEWS**" + `a.dplay-inl-block.color-grey.ml-15.hover-grey` ticker headline
     "8:30 AM Eight People have died and violent protest involving tens of
     thousands..."; `col-md-4.col-lg-3` = `form.abs-form` (input placeholder
     "Search", bg none, `height: 35px`, `border: 1px solid #777`,
     `border-radius: 3px`, color #eee; focus border #eee) + submit button
     (35px, right, `ion-ios-search`, color #eee).
  5. Hero slider `section.pt-0.bg-primary` → `div.plr-50.h-600x.oflow-hidden`
     (h-md-800x, h-xs-1000x): left `div.w-60.w-md-100.h-100` with two stacked
     `div.w-50.h-100` cards — `div.img-bg.bg-1.bg-grad-layer-6` (bg image
     `slider-1-550x600.jpg`, cover) and `bg-2` (`slider-2-550x600.jpg`);
     right `div.w-40.h-100` with two stacked `div.h-50` cards — `bg-3`
     (`slider-3-600x300.jpg`) and `bg-4` (`slider-4-600x300.jpg`). Each card:
     `.bg-grad-layer-6:after` = `linear-gradient(to top, #000 0%,
rgba(0,0,0,.4) 60%)`, `opacity: .8`; overlay `div.abs-blr.color-white.p-20`
     = `h3.t-upper` headline (`font-weight: bold`, hover grey) + `ul` meta:
     `ion-clock` date, `ion-android-person` author, `ion-ios-chatbubble-outline`
     15, `ion-eye` 105 (grey/ash, font-12).
  6. Content row 1 `section` (container → row): main `col-lg-8` —
     a. "TODAY FEATURED" `div.mb-30.p-30.card-view` — `h4.p-title` "**TODAY
     FEATURED**", `img.news-1-700x400.jpg`, `h3.mt-30` headline, meta `ul`
     (color-lite-black), `p` excerpt (Lorem ipsum → paraphrase);
     b. six `div.mb-30.sided-250x.card-view` (last without mb) — `div.s-left`
     `img` 250×250 (news-2..7) + `div.s-right.ptb-50.plr-30` `h4` headline +
     meta `ul`; headlines are real news-ish copy (Bahrain GP, NZ v England,
     Russia/West, California cliff crash, Facebook CEO, Tesla crash) →
     paraphrase, keep kind;
     c. sidebar `col-lg-4`:
     - "STAY CONNECT" `div.mb-30.p-30.card-view` — `h4.p-title` "**STAY
       CONNECT**", `ul.font-12.text-center.color-white.list-block` with 4
       full-width rows `a.list-a-br-5` (radius 5px, `list-a-ptb-10`):
       `li` `a.bg-fb` (`#4270E8`) [white 20px square icon
       `sqr-fb-20.ion-social-facebook`] "**2135** followers"; `a.bg-twtr`
       (`#39CBF0`) 5176; `a.bg-gogl` (`#F63F39`) 2244; `a.bg-rss`
       (`#EDAA15`) 2111; hover `list-a-hvr-primary` → navy;
     - second "STAY CONNECT" `div.mb-30.p-30.card-view` (original reuses
       the heading — recommend renaming to e.g. "RECENT NEWS"; note the
       deviation) — 8 × `div.sided-80x.mb-20` (last no mb): `s-left`
       `img` 100×100 (sidebar-news-1..8) + `s-right` `h5` headline + meta
       (date + views only);
     - review card `div.mb-30.p-30.card-view` — `img.sidebar-review-400x300.jpg`,
       `h4.mt-15` headline, meta, `a.color-blue` "**Judge Overseeing:
       9.2/10**" (`#2458C5`).
  7. Featured video `section.bg-primary.color-white.pb-20` — `div.container`:
     `h4.p-title.in` "**FEATIRED VIDEO**" (typo in original → fix to
     "FEATURED VIDEO"; `.in` variant: after #777, before #fff); `div.row` with
     4 × `col-sm-6.col-md-3`: `a.hover-grey.dplay-block` → `div.pos-relative`
     `img` 300×300 (video-1..4) + `div.hover-video` (black overlay `:after`,
     `span.icon` 40px circle `border: 2px solid #fff` with `ion-play`, hover
     translates -30%,-30%); `h5.mt-15` headline + meta (date, views).
  8. Content row 2 `section.pb-20` (container → row): main `col-lg-8`:
     a. POLITICS `div.p-30.card-view` — `h4.p-title` "**POLITICS**"; lead row
     `div.row`: `col-sm-6` `img.sport-1-400x300.jpg` + `col-sm-6` `h4.mt-30`
     headline + meta + `p` excerpt; `div.mtb-30.brdr-grey-1` divider; `div.row`
     of 4 × `col-sm-6` `div.brdr-l-grey-2.pl-20` (`border-left: 2px solid
   #ccc`-ish) `h5` headline + meta (date, views);
     b. SPORT card — identical structure (same lead image in original);
     c. `div.row` with 2×2 grid of `col-sm-12.col-md-6` cards:
     LIFESTYLE (`lifestyle-1-400x300.jpg`), BUSINESS
     (`business-1-400x300.jpg`), CULTURE (`culture-1-400x300.jpg`), TECH
     (`tech-1-400x300.jpg`) — each `div.p-30.card-view.mb-30`: `h4.p-title`,
     `img`, `h4.mt-30` headline, meta, `div.mtb-15.brdr-grey-1`, three `p.mb-10`
     paragraphs (Lorem ipsum variants → paraphrase);
     d. sidebar `col-lg-4`:
     - "MOST READ" `div.mb-30.p-30.card-view` — 6 × `sided-80x.mb-20`
       (sidebar-most-read-1..6 100×100 + h5 + date/views);
     - "ARTICLES BY AUTHOR" `div.mb-30.p-30.card-view` — 4 ×
       `div.sided-90x.mb-20` (last no mb): `s-left.br-3.oflow-hidden`
       `img` 100×100 (sidebar-profile-1..4) + `s-right` `h4.pt-20` name
       (Chris Smalling, Johny Dowson, Emily Carter, Julia Ann) + `h6.color-ash`
       "Reporter";
     - sidebar banner `div.plr-30.ptb-50.color-white.pos-relative.text-center.bg-7`
       — CSS bg `banner-2-300x300.jpg` + `div.bg-layer-8` (dark overlay):
       `h3` "**REAL ESTATE**", `p` blurb, `h6` `a.btn-fill-white.btn-b-sm.plr-10`
       "**READ MORE**";
     - NEWSLETTER `div.mt-30.p-30.plr-40.card-view.text-center` — `h4`
       "**NEWSLETTER**", `p` "The best selling Magic-Magazine", `img`
       `max-w-100x.mlr-auto` 100×150 (sidebar-profile-5), `form.form-sm.max-w-400x`
       (`input` email placeholder "Yor Email" [typo → fix], `height: 35px`,
       `border: 1px solid #ccc`, radius 3px) + `button.mt-15.btn-b-sm.btn-fill-primary`
       "**SUBSCRIBE NOW**" (`height: 30px` variant).
  9. Footer `footer.bg-primary.pos-relative.color-ccc.pt-50` — `bg: #0C0E68`
     (bg-primary !important wins over bg-191), faint map overlay
     `div.abs-tblr.pt-50.z--1.text-center` → `div.bg-map.opacty-1`
     (`url(map.png)`, opacity .1); `div.container` → row:
     a. `col-lg-2.col-md-4.col-sm-4` "QUICK LINKS" `h5.f-title` (50×3px white
     underline) + `ul.mb-30.list-hover.list-block.list-a-ptb-5`: Home
     Delivery, User Permissions, Download Apps, Newsletters, Subscriptions,
     Online Store;
     b. `col-lg-4.col-md-8.col-sm-8` "FEATURED VIDEO" — 2 ×
     `div.sided-80x.mb-30`: `a.s-left` 80×80 thumb (video-1/2) + `div.hover-video.sm`
     (34px circle) + `s-right.pl-10` `h5` headline + meta (date/views,
     color-ash);
     c. `col-lg-2.col-md-4.col-sm-4` "OUR WORK" — In the Community, Today's
     Link, Our History, Our Events, Our Studio, Career;
     d. `col-lg-4.col-md-8.col-sm-8` "RECENT POST" — 2 × `sided-80x.mb-30`
     (sidebar-news-1/2 thumbs + play overlay + h5 + meta);
     e. bottom row `div.text-center.ptb-30` after `div.mt-20.brdr-ash-1.opacty-4`
     divider: `col-sm-3` `img.logo-white.png` + `col-sm-5` blurb `p` +
     `col-sm-4` `ul.font-12.list-radial-35.list-li-mlr-3` (5 radial social
     icon links);
     f. dark bar `div.bg-dark-primary.ptb-15` (`#050658`): `col-md-6`
     copyright "Copyright © <year> All rights reserved | This template is
     made with <heart> by Colorlib" → rephrase without Colorlib attribution;
     `col-md-6` right-aligned footer links: Home, Business, Sport, Politics,
     Travel, Lifestyle, Culture, Tech, Video.
- **Visual design (screenshot):** classic desktop news portal. Navy
  (`#0C0E68`-family) + white dominance; navy nav bar and navy section
  backgrounds behind the hero grid, video strip and footer; white cards with
  soft shadows on white content areas; red only on the BREAKING NEWS tag;
  uppercase bold headlines over dark photo gradients; meta rows with small
  clock/user/comment/eye icons; social rows in brand colors (FB blue, Twitter
  cyan, Google red, RSS amber). Clean, dense, newspaper-like, high contrast.
- **Design tokens (extracted from `common/styles.css` + DOM classes):**
  - Brand primary **navy `#0C0E68`** (`.bg-primary`, `.color-primary`,
    `.btn-fill-primary` fill+border, `.p-title:before` underline,
    `.list-a-hvr-primary` hover, dropdown item border + hover bg,
    `.btn-brdr-grey:hover`). Darker **`#050658`** (`.bg-dark-primary` —
    footer bottom bar).
  - Nav bar **`#0A2D8B`** (`.bottom-menu` bg, dropdown menu bg).
  - Accent red **`#E3493D`** (`.btn-fill-red` — BREAKING NEWS tag, radius 3px).
  - Link blue **`#2458C5`** (`.color-blue` — review rating link).
  - Social brand colors: FB **`#4270E8`** (`.bg-fb`, `.sqr-fb-20`), Twitter
    **`#39CBF0`** (`.bg-twtr`), Google **`#F63F39`** (`.bg-gogl`), RSS
    **`#EDAA15`** (`.bg-rss`); white 20px square icon chips (radius 3px) with
    brand-colored glyphs.
  - Text: `.color-white` #fff; `.color-lite-black` / `.color-ash` **#888**
    (meta); `.color-grey` / `.color-ccc` **#ccc** (ticker link, footer);
    `.color-black` #111; footer `p` #ddd.
  - Fonts: body **Roboto** 14px/400 (`body`); headings **Encode Sans
    Expanded** (`h1,h2,h3`; also `h4,h5` inherit Roboto in the source —
    use Encode for all headings for a consistent newspaper feel). Load both
    via Google Fonts `<link>` in `index.html`.
  - Buttons (squared, small radius): `.btn-fill-*` = `height: 45px;
line-height: 43px; border-radius: 2px` (red 3px); variants
    `.btn-b-md` (35px), `.btn-b-sm` (30px); primary = 1px #0C0E68 fill,
    white text, hover → outline; red = 1px #E3493D fill, hover → outline red;
    white = 1px #fff fill with `color: #0C0E68`, hover → navy fill white text.
  - Cards: `.card-view` — `background: #fff; border-radius: 3px;
box-shadow: 1px 1px 4px rgba(0,0,0,.10); overflow: hidden`.
  - Section title `.p-title`: `padding-bottom: 15px; margin-bottom: 30px`;
    `:after` = 100% × 1px #ccc; `:before` = 80 × 5px #0C0E68 (z-index 1).
    `.p-title.in` (dark sections): after #777, before #fff. Footer
    `.f-title:before` = 50 × 3px #fff.
  - Hero image overlay `.bg-grad-layer-6:after` = `linear-gradient(to top,
#000 0%, rgba(0,0,0,.4) 60%)`, `opacity: .8`.
  - Video hover overlay `.hover-video:after` = #000 overlay; `.hover-video
.icon i` = 40px circle, `border: 2px solid #fff` (34px `.sm` variant).
  - Forms: `.abs-form` input — bg none, height 35px, radius 3px,
    `border: 1px solid #777`, color #eee, focus #eee; `.form-sm` input —
    height 35px, radius 3px, `border: 1px solid #ccc`, padding 0 15px.
  - Misc: `.top-header` bottom border #ddd; left-header li dividers 1px #ccc;
    `sided-250x` cards (250px thumb) / `sided-80x` (80px) / `sided-90x`
    (90px avatar); mini headlines `brdr-l-grey-2` (left border #ccc-ish,
    `pl-20`); main-menu hover underline 3px #fff scaleX animation; dropdown
    hover bg #0C0E68 + translateX(4px); footer map overlay opacity .1.
- **Recreation name:** Herald (NEW name, differs from ColorLib "Ednews").
  App folder `apps/herald`, package `@free-react-templates/herald`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/herald-<n>/<w>/<h>`: hero cards 550×600 / 600×300,
  featured 700×400, side thumbs 250×250, sidebar thumbs 100×100, video
  300×300, category images 400×300, avatars 100×100, newsletter portrait
  100×150); logo → text wordmark (bold navy "HERALD" in Encode Sans Expanded)
  - white variant in footer; lucide-react icons (Clock, User,
    MessageCircle, Eye, Search, Menu, ChevronDown, Play, Heart, Cloud) EXCEPT
    brand icons — Facebook, Twitter/X, Pinterest, Google+, RSS as inline SVG
    (simple-icons paths) per the replication skill (lucide dropped brand
    icons); Roboto + Encode Sans Expanded via Google Fonts; no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Requirements

### Requirement: Top utility bar

The system SHALL render a thin top bar above the header with location/weather,
date/time on the left and social icon links on the right.

#### Scenario: Utility bar content

- **GIVEN** the Herald page is rendered
- **WHEN** the top utility bar is displayed
- **THEN** it SHALL show a location/weather item (e.g. "Stockholm, Sweden 15 °C"
  with a cloud icon), a date item, and a time item on the left
- **AND** it SHALL show five social icon links (Facebook, Twitter, Pinterest,
  Google, RSS) on the right
- **AND** the bar SHALL have a bottom border in light grey (#ddd)

### Requirement: Middle header with ad banner

The system SHALL render a header row with the site logo on the left and a
photo-backed ad banner with a white READ MORE button on the right.

#### Scenario: Header content

- **GIVEN** the Herald page is rendered
- **WHEN** the middle header is displayed
- **THEN** it SHALL show the site logo (text wordmark) on the left
- **AND** it SHALL show a banner area with a background image and a dark
  overlay on the right
- **AND** the banner SHALL contain a title (e.g. "realestate.com.au"), a
  subtitle, and a white "READ MORE" button

### Requirement: Main navigation

The system SHALL render a navy horizontal nav bar with ten dropdown menu items
and a mobile hamburger toggle.

#### Scenario: Desktop menu

- **GIVEN** the Herald page is rendered
- **WHEN** the nav bar is displayed on a desktop viewport
- **THEN** it SHALL show a navy bar (#0A2D8B) with the items HOME, BUSINESS,
  SPORT, POLITICS, TRAVEL, LIFESTYLE, CULTURE, TECH, VIDEO, FEATURES
- **AND** each item SHALL have a chevron and open a dropdown with PAGE 1 and
  PAGE 2 links on hover

#### Scenario: Mobile menu

- **GIVEN** the nav bar is rendered
- **WHEN** the viewport is narrow (mobile)
- **THEN** the desktop menu SHALL collapse behind a hamburger toggle
- **WHEN** the user presses the hamburger
- **THEN** the menu SHALL slide down as a block with the same items and
  dropdowns
- **AND** the toggle SHALL reflect the open state (aria-expanded)

### Requirement: Breaking news strip

The system SHALL render a breaking-news bar with a red BREAKING NEWS tag, a
ticker headline link, and a search form.

#### Scenario: Breaking news content

- **GIVEN** the Herald page is rendered
- **WHEN** the breaking-news strip is displayed
- **THEN** it SHALL show a red "BREAKING NEWS" button
- **AND** it SHALL show a grey headline link (paraphrase of the original
  ticker text)
- **AND** it SHALL show a search input with a search icon button

### Requirement: Hero slider grid

The system SHALL render a bento-style hero grid of four photo cards with
gradient overlays, uppercase headlines, and meta rows.

#### Scenario: Hero layout

- **GIVEN** the Herald page is rendered
- **WHEN** the hero grid is displayed
- **THEN** it SHALL show two tall stacked cards on the left and two wider
  stacked cards on the right (approx. 60/40 split on desktop)
- **AND** each card SHALL have a full-bleed image with a dark bottom-to-top
  gradient overlay
- **AND** each card SHALL show an uppercase bold headline in white and a meta
  row (date, author, comments, views) with small icons

### Requirement: Today featured + news list (main column)

The system SHALL render a "TODAY FEATURED" card followed by six
side-thumbnail news cards in the main column.

#### Scenario: Featured card

- **GIVEN** the main column is displayed
- **WHEN** the "TODAY FEATURED" card is inspected
- **THEN** it SHALL show the section title "TODAY FEATURED" with the brand
  underline treatment
- **AND** it SHALL show a 700×400 image, a headline, a meta row, and an
  excerpt paragraph

#### Scenario: Side-thumbnail cards

- **GIVEN** the main column is displayed
- **WHEN** the news list is inspected
- **THEN** it SHALL show six cards, each with a 250×250 image on the left and
  a headline plus meta row on the right
- **AND** the cards SHALL be stacked with 30px spacing (last card without
  bottom margin)

### Requirement: Sidebar — Stay Connect, news list, review

The system SHALL render a sidebar with a social-follower card, a news list,
and a review card.

#### Scenario: Stay Connect card

- **GIVEN** the sidebar is displayed
- **WHEN** the "STAY CONNECT" card is inspected
- **THEN** it SHALL show four full-width rows in brand colors: Facebook
  (#4270E8), Twitter (#39CBF0), Google (#F63F39), RSS (#EDAA15)
- **AND** each row SHALL show a white square icon chip, a bold follower count,
  and the label "followers"

#### Scenario: Sidebar news list

- **GIVEN** the sidebar is displayed
- **WHEN** the news list card is inspected
- **THEN** it SHALL show eight items, each with a 100×100 thumbnail, a
  headline, and a meta row (date + views)
- **NOTE** the original reuses the "STAY CONNECT" heading here; use a
  distinct heading (e.g. "RECENT NEWS") and record the deviation

#### Scenario: Review card

- **GIVEN** the sidebar is displayed
- **WHEN** the review card is inspected
- **THEN** it SHALL show a 400×300 image, a headline, a meta row, and a blue
  rating link (e.g. "Judge Overseeing: 9.2/10")

### Requirement: Featured video section

The system SHALL render a navy "FEATURED VIDEO" section with four video cards
that show a play overlay on hover.

#### Scenario: Video section content

- **GIVEN** the Herald page is rendered
- **WHEN** the video section is displayed
- **THEN** it SHALL show the section title "FEATURED VIDEO" with the
  light-on-dark underline variant
- **AND** it SHALL show four video cards, each with a 300×300 image, a
  headline, and a meta row (date, views)

#### Scenario: Video card hover

- **GIVEN** a video card is rendered
- **WHEN** the user hovers the card
- **THEN** a circular play button SHALL appear/translate over a darkened
  overlay

### Requirement: Category sections (Politics, Sport)

The system SHALL render POLITICS and SPORT cards, each with a lead image +
headline + excerpt and four left-bordered mini headlines.

#### Scenario: Category card content

- **GIVEN** the Herald page is rendered
- **WHEN** a category card (POLITICS or SPORT) is displayed
- **THEN** it SHALL show the category title with the brand underline
- **AND** it SHALL show a lead row: 400×300 image, headline, meta row, and
  excerpt
- **AND** below a divider it SHALL show four mini headlines, each with a left
  border, a headline, and a meta row (date, views)

### Requirement: 2×2 category grid (Lifestyle, Business, Culture, Tech)

The system SHALL render a two-column grid of four category cards, each with an
image, headline, meta, divider, and three paragraphs.

#### Scenario: Category grid content

- **GIVEN** the Herald page is rendered
- **WHEN** the category grid is displayed
- **THEN** it SHALL show LIFESTYLE, BUSINESS, CULTURE, and TECH cards in a
  2×2 grid on desktop (stacked on mobile)
- **AND** each card SHALL show a 400×300 image, a headline, a meta row, a
  divider, and three short paragraphs

### Requirement: Sidebar — Most Read, Authors, Banner, Newsletter

The system SHALL render a sidebar with MOST READ, ARTICLES BY AUTHOR, a photo
banner card, and a NEWSLETTER signup card.

#### Scenario: Most Read

- **GIVEN** the second sidebar is displayed
- **WHEN** the MOST READ card is inspected
- **THEN** it SHALL show six items, each with a 100×100 thumbnail, a
  headline, and a meta row (date, views)

#### Scenario: Articles by Author

- **GIVEN** the second sidebar is displayed
- **WHEN** the ARTICLES BY AUTHOR card is inspected
- **THEN** it SHALL show four authors, each with a circular 100×100 avatar, a
  name, and the role "Reporter"

#### Scenario: Sidebar banner card

- **GIVEN** the second sidebar is displayed
- **WHEN** the banner card is inspected
- **THEN** it SHALL show a photo-backed card with a dark overlay, a title
  (e.g. "REAL ESTATE"), a blurb, and a white "READ MORE" button

#### Scenario: Newsletter card

- **GIVEN** the second sidebar is displayed
- **WHEN** the NEWSLETTER card is inspected
- **THEN** it SHALL show the heading "NEWSLETTER", a blurb, a 100×150
  portrait image, an email input, and a "SUBSCRIBE NOW" button in the brand
  color
- **WHEN** the user submits the form with an invalid email
- **THEN** the form SHALL show a validation error and not submit

### Requirement: Footer

The system SHALL render a navy footer with a faint map background, four link
columns, a bottom row (logo, blurb, social icons), and a dark bottom bar.

#### Scenario: Footer columns

- **GIVEN** the Herald page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the columns QUICK LINKS (6 links), FEATURED VIDEO
  (2 thumbnails with play overlay + headline + meta), OUR WORK (6 links), and
  RECENT POST (2 thumbnails + headline + meta)
- **AND** the footer SHALL have a navy background with a faint map pattern
  overlay (opacity ~0.1)

#### Scenario: Footer bottom row

- **GIVEN** the footer is displayed
- **WHEN** the bottom row is inspected
- **THEN** it SHALL show the logo (white variant), a blurb, and five radial
  social icon links

#### Scenario: Dark bottom bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is inspected
- **THEN** it SHALL show a darker navy bar (#050658) with a copyright line
  (current year, without ColorLib attribution) on the left
- **AND** footer link list (Home, Business, Sport, Politics, Travel,
  Lifestyle, Culture, Tech, Video) aligned right on desktop

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Herald app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header (utility bar, middle header, nav)
  in the banner landmark, all sections in the main landmark, and the footer in
  the contentinfo landmark
- **AND** the document title SHALL be "Herald — News Template"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/herald`
      (`scripts/verify-app.sh herald` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: utility bar, middle header (logo + ad banner),
      navy nav (10 dropdown items, white underline hover, mobile hamburger),
      breaking-news strip (red tag + ticker + search), bento hero grid (4
      gradient cards with meta), TODAY FEATURED + 6 side-thumbnail cards,
      sidebar (STAY CONNECT social rows, news list, review card with rating
      link), FEATURED VIDEO (4 cards, play hover overlay), POLITICS + SPORT
      cards, 2×2 LIFESTYLE/BUSINESS/CULTURE/TECH grid, second sidebar (MOST
      READ, ARTICLES BY AUTHOR, banner card, NEWSLETTER form), footer (map
      overlay, 4 columns, bottom row, dark bar) match the Ednews preview 1:1.
- [ ] Design tokens in `@theme`: brand navy `#0C0E68`, nav navy `#0A2D8B`,
      dark navy `#050658`, accent red `#E3493D`, link blue `#2458C5`, social
      brand colors (#4270E8 / #39CBF0 / #F63F39 / #EDAA15), meta grey #888;
      Roboto + Encode Sans Expanded via Google Fonts.
- [ ] Buttons use the squared small-radius style (radius 2–3px, 45/35/30px
      heights) — NOT pills.
- [ ] Section titles use the bottom-rule treatment (1px #ccc line + 80×5px
      brand underline; white variant on dark sections).
- [ ] Placeholder images use `picsum.photos/seed/herald-<n>/<w>/<h>`;
      lucide-react icons except brand icons (inline SVG simple-icons for
      Facebook/Twitter/Pinterest/Google+/RSS); no ColorLib assets copied.
- [ ] PR description states source template (ColorLib "Ednews"), preview URL
      (https://preview.colorlib.com/theme/ednews/), design tokens, and what
      differs (name, placeholders, text logo, heading typo fixes, renamed
      duplicate "STAY CONNECT" list heading).
