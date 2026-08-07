# Template: Dispatch (Blog)

## Purpose

Dispatch is a single-page magazine/blog template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Avision"
blog/magazine website template design (see TEMPLATES.md, Blog category, line
242), built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Avision" — modern editorial/magazine blog with a
  full-viewport cinematic hero slider, a masonry-ish card feed ("Don't Miss",
  "What's Trending", "Latest Articles"), a dark video player section, a gray
  sidebar with story/video/event carousels, and a dark footer with a subscribe
  panel (source: https://colorlib.com/wp/template/avision/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/avision/`
  (HTTP 200, ~68KB HTML). DOM + `styles/main_styles.css` (34KB) +
  `styles/responsive.css` extracted and analyzed; tokens below come from that
  stylesheet.
- **Visual design (from screenshot `avision-free-template.jpg` + DOM):**
  high-contrast editorial magazine aesthetic. Dark cinematic hero: a BMX
  rider frozen mid-air over a dark textured background with a near-black
  overlay, large white sans headline, a small gray-blue "sport" pill, and a
  "Continue Reading →" link; a second smaller photo peeks from the bottom
  right (next-slide preview). Below: white content area on `#f7f7f7` with a
  filter bar of pill tabs (ALL / STYLE HUNTER / VOGUE / HEALTH & FITNESS /
  TRAVEL / MORE), rounded photo cards, and a dark `#ededed` sidebar ("Top
  Stories") with thumbnail + title rows. Footer is near-black with a logo,
  social icons, copyright, and a "Subscribe" email panel. Accent colors:
  green `#2ddf80` (active video marker, "-15%" ad badge) and warm tan
  `#937c6f` (mobile menu hover); the hero "sport" pill is gray-blue
  `#899091`.
- **Section order (1:1) from the DOM:**
  1. Fixed header (`header.header`, transparent over the hero; on scroll
     `header.scrolled` → `background: rgba(0,0,0,0.75)` + shadow; content
     height 106px): logo "avision" (`div.logo a`, Ubuntu 20px 700, white,
     uppercase, `letter-spacing: 0.075em`) left → `nav.main_nav` menu: Home
     (active, white) / Fashion / Gadgets / Lifestyle / Video / Contact
     (Ubuntu 14px 700, `rgba(255,255,255,0.5)`, active full white) →
     `div.search_container ml-auto`: weather block (`+10°` Ubuntu 14px 700
     white + cloud icon) + search form (`input.header_search_input`:
     262×46px, `background: rgba(255,255,255,0.2)`, `border-radius: 5px`,
     padding-left 49px, white, placeholder "Type to Search...") + hamburger
     (`div.hamburger`, `fa fa-bars`, mobile only). Mobile slide-in menu
     (`div.menu`): close button, logo, search input, `nav.menu_nav` links
     (Ubuntu 12px, hover `#937c6f`).
  2. Hero slider (`div.home`, height 100vh; `div.home_slider` owl-carousel, 3
     slides). Each slide: `div.home_slider_background` (full-bleed cover
     image) → `div.home_slider_content_container` (absolutely centered at
     top 45%) → `div.home_slider_item_category` (83×28px pill,
     `background: #899091`, `border-radius: 14px`, white uppercase Ubuntu
     12px link, e.g. "sport") → `div.home_slider_item_title` (link, Work
     Sans 36px 600 white, `line-height: 1.27`, e.g. "How Did van Gogh's
     Turbulent Mind Depict One of the Most Complex Concepts in Physics?") →
     `div.home_slider_item_link` "Continue Reading" (Ubuntu 14px 500,
     `rgba(255,255,255,0.5)`). At the bottom: `div.similar_posts_container`
     (absolute bottom 0) with 3 × `div.similar_post` columns (transparent,
     hover `#FFFFFF`; truncated headline link). Right edge:
     `div.home_slider_next_container` (bottom 0, offset to the 75% column):
     `div.home_slider_next_background` (transparent, hover
     `rgba(0,0,0,0.5)`) + `div.home_slider_next_title` "next" (Ubuntu 12px
     700 uppercase white) + link. Custom prev/next arrows
     (`div.custom_nav_container.home_slider_nav_container`, bottom 264px).
  3. Page content (`div.page_content`): container → `row row-lg-eq-height` →
     `col-lg-9` main + `col-lg-3` sidebar.
     - Main (`div.main_content`) — four `div.blog_section` blocks, each with
       `div.section_panel` (flex row): `div.section_title` (Ubuntu 18px 700
       black, e.g. "Don't Miss", "What's Trending", "Most Popular Videos",
       "Latest Articles") + optional `div.section_tags` (pill list, e.g.
       all / style hunter / vogue / health & fitness / travel; each li:
       28px tall, `background: #ededed`, `border-radius: 14px`, Ubuntu 12px
       500 uppercase `rgba(0,0,0,0.4)`; hover/active `background: #FFFFFF`)
       - `div.section_panel_more` ("more" + extra pills: new look 2018,
         street fashion, business, recipes, sport, celebrities).
         a. **"Don't Miss"**: `div.grid` of 7 cards — 1
         `card_largest_with_image` (555px wide, image + body) + 6 small
         cards (263px): `card_small_with_image`, `card_default_no_image`,
         `card_small_with_background` (full-bleed bg image with overlay).
         Card body: `padding: 16px 25px 15px`; title link 18px 600 black
         (`line-height: 1.33`). Card image radius 6px.
         b. **"What's Trending"**: `div.grid` of 7 cards — `card_large_with_`
         `background`, `card_large_with_image`, `card_small_with_image`,
         2 × `card_default_with_background`, 2 × `card_default_no_image`.
         c. **"Most Popular Videos"**: `div.videos` (height 395px):
         `div.player_container` (YouTube player `#P1`, YTPlayer plugin) +
         `div.playlist` (absolute right, 263px wide, `background:
 #1f1f1f`, padding 35px) with 4 × `div.video_container` rows:
         `div.video_image` (thumb + ::after 88px play marker; active row
         shows a green `#2ddf80` marker via `.video_container.active
 .video_image::after`), `div.video_content` → `div.video_title`
         (14px 500, `rgba(255,255,255,0.25)`, active white) +
         `div.video_info` (Ubuntu 12px 500 `rgba(255,255,255,0.1)`, e.g.
         "1.2M views · Sep 29"). Rows separated by 15px; active row title
         full white.
         d. **"Latest Articles"**: `div.grid` of ~14 cards (mixed
         small/default variants) + `div.load_more` → `div.load_more_button`
         (118×36px, transparent bg, 1px `#d7d7d7` border,
         `border-radius: 18px`, Ubuntu 14px 500 `rgba(0,0,0,0.5)`, margins
         80px top / 140px bottom, text "Load More").
     - Sidebar (`div.sidebar`, `col-lg-3`; `div.sidebar_background`:
       absolute 375px wide, `background: #ededed`). Sections stacked:
       a. **"Top Stories"** (`div.sidebar_section`): `div.sidebar_title_`
       `container` → `div.sidebar_title` (Ubuntu 18px 700 black) +
       `div.sidebar_slider_nav` (custom prev/next arrows) +
       `div.sidebar_slider_top` (owl-carousel) of `div.side_post` rows:
       `div.side_post_image` (thumb) + `div.side_post_content`
       (padding-left 20px) → `div.side_post_title` (14px 500 black,
       `line-height: 1.285`) + small meta (author "Katy Liu" · date "Sep
       29").
       b. **Advertising 1** (`div.advertising`, height 340px, margin-top
       80px): `div.advertising_background` (bg image) +
       `div.advertising_content` → `div.advertising_perc` ("-15%",
       `#2ddf80` green) + `div.advertising_link`.
       c. **"Newest Videos"** (`div.sidebar_section.newest_videos`):
       sidebar title + nav + `div.sidebar_slider_vid` carousel of
       `side_post` rows (video thumb + title + meta).
       d. **Advertising 2** (`div.sidebar_section` → `div.advertising_2`):
       centered square ad (`div.advertising_2_content` flex centered →
       `div.advertising_2_link` "Turbulent Mind").
       e. **"Future Events"** (`div.sidebar_section.future_events`):
       sidebar title + nav + `div.sidebar_slider_events` carousel of
       `div.side_post` rows with `div.event_date` (70×70 box, flex
       centered) → `div.event_day` (40px 800, `rgba(0,0,0,0.15)`, e.g.
       13/27/02/09) + `div.event_month` ("apr"/"may") +
       `div.side_post_content` title.
  4. Footer (`footer.footer`, `background: #1f1f1f`): `row row-lg-eq-height`
     → `col-lg-9` `div.footer_content`: `div.footer_logo` (Ubuntu 20px 700
     white uppercase, "avision") + `div.footer_social` (6 icons: facebook,
     twitter, pinterest, vimeo, instagram, google) + `div.copyright` (Ubuntu
     12px 500, `rgba(255,255,255,0.1)`: "Copyright © All rights reserved |
     This template is made with ♥ by Colorlib") + `col-lg-3` `div.subscribe`
     (`div.subscribe_background` `#111111`; `div.subscribe_content`
     padding 45px 15px 0 30px): `div.subscribe_title` "Subscribe" (Ubuntu
     18px 700 white, margin-bottom 32px) + form: `input.sub_input` (email,
     transparent bg, bottom border 1px `#888888`, white, focus border
     white) + `button.sub_button` (absolute right, white arrow SVG).
- **Recreation decisions:** new name **Dispatch** (a news "dispatch" = a
  report sent from the field — fits an editorial magazine brand; no collision
  with `apps/`, `openspec/specs/`, or `docs/templates/`). Logo renders
  "dispatch" in Ubuntu uppercase. Hero: 3 slides with picsum placeholders,
  gray-blue category pill, Continue Reading link, 3 similar-post teasers at
  the bottom, "next" panel on the right edge, prev/next arrows + dots. Cards
  reuse the shared `Card`/`Button` from `packages/ui`. Video section: a
  playlist of 4 videos with an active-state player panel (clicking a row
  activates it — the original embeds YouTube; use an image placeholder panel
  with a play overlay and the active video's title/views, no real embed
  needed). Sidebar: Top Stories, Newest Videos, Future Events carousels +
  2 ad blocks. Subscribe form validates email (zod) with a success state.
  Dark-mode `.dark` variants per repo conventions.

Dispatch lives in `apps/dispatch` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Design tokens (extracted from `styles/main_styles.css`)

- Fonts (Google Fonts `@import` in the stylesheet):
  `Ubuntu:300,400,500,700` + `Work+Sans:300,400,500,600,700,800,900`.
  - **Ubuntu** — logo (20px 700 uppercase, `letter-spacing: 0.075em`), nav
    links (14px 700), section/sidebar titles (18px 700 black), hero category
    pill (12px 500 uppercase white), load-more (14px 500), subscribe title
    (18px 700 white), temperature (14px 700), copyright (12px 500), video
    meta (12px 500), tag pills (12px 500 uppercase).
  - **Work Sans** — body (14px, `color: #a5a5a5`, bg `#f7f7f7`), hero slide
    title (36px 600 white, `line-height: 1.27`), card/side-post titles
    (18px/14px 500–600, black).
- Primary brand: **`#899091`** (gray-blue) — hero category pill background.
- Accent green: **`#2ddf80`** — active video marker (88px play ::after),
  advertising "-15%" badge.
- Accent tan: **`#937c6f`** — mobile menu link hover.
- Link underline: `#ffa07f` (light salmon, `p a` border-bottom).
- Surfaces: page `#f7f7f7`; cards white with image radius 6px; tag pills
  `#ededed` (hover/active `#FFFFFF`); sidebar strip `#ededed`; videos +
  playlist + footer `#1f1f1f`; subscribe panel `#111111`; scrolled header
  `rgba(0,0,0,0.75)` + shadow `0 5px 5px rgba(0,0,0,0.1)`.
- Text: body `#a5a5a5`; headings/titles black `rgba(0,0,0,1)`; nav white
  (inactive `rgba(255,255,255,0.5)`); header search text white; copyright
  `rgba(255,255,255,0.1)`; event day `rgba(0,0,0,0.15)`.
- Borders: load-more 1px `#d7d7d7`; subscribe input bottom 1px `#888888`
  (focus white); search input bg `rgba(255,255,255,0.2)`.
- Shapes: pills — category/tag `border-radius: 14px` (28px tall), load-more
  `border-radius: 18px`; search input `border-radius: 5px`; card images
  `border-radius: 6px`; event date box 70×70 sharp; video play marker 88px
  circle.
- Layout rhythm: header content 106px; hero 100vh; card widths 555px
  (large) / 263px (small); grid `width: calc(100% + 30px)`; videos 395px
  tall with 263px playlist; advertising 340px tall (margin-top 80px);
  load-more margins 80px/140px; side post content padding-left 20px.

## Requirements

### Requirement: Header with search and weather

The system SHALL render a fixed transparent header with a logo, a nav menu,
a weather + search block, and a mobile hamburger.

#### Scenario: Header content

- **GIVEN** the Dispatch page is rendered
- **WHEN** the header is displayed at the top of the page
- **THEN** it SHALL show the logo "dispatch" in uppercase bold sans on the
  left
- **AND** it SHALL show menu links Home, Fashion, Gadgets, Lifestyle,
  Video, and Contact
- **AND** the Home link SHALL be marked active
- **AND** it SHALL show a temperature reading and a search input with
  placeholder "Type to Search..."

#### Scenario: Header on scroll

- **GIVEN** the page is scrolled down
- **WHEN** the header remains fixed at the top
- **THEN** it SHALL gain a semi-transparent dark background and a soft
  shadow

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the hamburger button is pressed
- **THEN** a slide-in menu SHALL open with the logo, a search input, and
  the nav links
- **AND** the toggle SHALL expose `aria-expanded` and a close control

### Requirement: Hero slider

The system SHALL render a full-viewport slider with 3 slides, each showing a
category pill, a headline, a Continue Reading link, and a similar-posts
strip, plus a "next" panel and navigation arrows.

#### Scenario: Slide content

- **GIVEN** the hero slider is displayed
- **WHEN** a slide is active
- **THEN** it SHALL show a full-bleed background image
- **AND** it SHALL show a gray-blue rounded category pill (e.g. "sport")
- **AND** it SHALL show a large white headline (36px sans) and a
  "Continue Reading" link below it
- **AND** it SHALL show 3 similar-post teasers pinned to the bottom of the
  slide

#### Scenario: Slide navigation

- **GIVEN** the hero slider has 3 slides
- **WHEN** the user activates the next arrow
- **THEN** the slider SHALL advance to the next slide and show its headline
- **WHEN** the user activates the previous arrow
- **THEN** the slider SHALL go back to the previous slide
- **WHEN** the slider is left idle
- **THEN** it SHALL auto-advance after a few seconds

#### Scenario: Next panel

- **GIVEN** the hero slider is displayed
- **WHEN** the "next" panel on the right edge is hovered
- **THEN** it SHALL darken with an overlay and show the "next" label

### Requirement: Section panels with tag filters

The system SHALL render section headers with optional pill tag filters.

#### Scenario: Section panel

- **GIVEN** a blog section is displayed
- **WHEN** the section panel is rendered
- **THEN** it SHALL show an uppercase-style bold section title (e.g.
  "Don't Miss")
- **AND** when present, it SHALL show tag filter pills (all, style hunter,
  vogue, health & fitness, travel, more)
- **AND** each pill SHALL be a rounded gray chip that turns white on hover
  or when active

#### Scenario: Filter interaction

- **GIVEN** a section with tag filters is displayed
- **WHEN** the user activates a tag pill
- **THEN** the pill SHALL be marked active
- **AND** the section's card grid SHALL filter to matching cards (or show
  an empty state)

### Requirement: Card grids

The system SHALL render the "Don't Miss", "What's Trending", and "Latest
Articles" sections as grids of article cards in the original's mixed sizes.

#### Scenario: Don't Miss grid

- **GIVEN** the "Don't Miss" section is displayed
- **WHEN** its grid is rendered
- **THEN** it SHALL show one large image card plus 6 smaller cards (image,
  background-image, and text-only variants)
- **AND** every card SHALL show a title link, with images rounded at 6px

#### Scenario: What's Trending grid

- **GIVEN** the "What's Trending" section is displayed
- **WHEN** its grid is rendered
- **THEN** it SHALL show 7 cards including large background-image and large
  image variants

#### Scenario: Latest Articles grid and Load More

- **GIVEN** the "Latest Articles" section is displayed
- **WHEN** its grid is rendered
- **THEN** it SHALL show a grid of small article cards
- **AND** a pill-shaped "Load More" button SHALL sit centered below the
  grid
- **WHEN** the user activates "Load More"
- **THEN** additional cards SHALL appear (or a disabled/no-more state)

### Requirement: Video player section

The system SHALL render a dark video section with a player panel and a
playlist of 4 videos.

#### Scenario: Playlist

- **GIVEN** the "Most Popular Videos" section is displayed
- **WHEN** the playlist is rendered
- **THEN** it SHALL list 4 videos, each with a thumbnail, a title, and
  metadata (views · date, e.g. "1.2M views · Sep 29")
- **AND** the playlist SHALL sit on a near-black background

#### Scenario: Active video

- **GIVEN** the playlist is displayed
- **WHEN** the user activates a video row
- **THEN** the row SHALL become active with a green play marker and a
  white title
- **AND** the player panel SHALL update to show the selected video's
  thumbnail with a play overlay

### Requirement: Sidebar

The system SHALL render a gray sidebar with "Top Stories", "Newest Videos",
and "Future Events" carousels plus two advertising blocks, in that order.

#### Scenario: Top Stories carousel

- **GIVEN** the sidebar is displayed
- **WHEN** the "Top Stories" section is rendered
- **THEN** it SHALL show the title with prev/next arrows
- **AND** it SHALL show a carousel of story rows, each with a thumbnail,
  a title, and an author · date meta line

#### Scenario: Advertising blocks

- **GIVEN** the sidebar is displayed
- **WHEN** the first advertising block is rendered
- **THEN** it SHALL show a tall image block with a green percentage badge
  (e.g. "-15%") and a link
- **WHEN** the second advertising block is rendered
- **THEN** it SHALL show a centered square ad with a link

#### Scenario: Newest Videos carousel

- **GIVEN** the sidebar is displayed
- **WHEN** the "Newest Videos" section is rendered
- **THEN** it SHALL show a carousel of video story rows with thumbnails
  and titles

#### Scenario: Future Events carousel

- **GIVEN** the sidebar is displayed
- **WHEN** the "Future Events" section is rendered
- **THEN** it SHALL show a carousel of event rows, each with a 70px square
  date box (day + month) and a title

### Requirement: Footer with subscribe

The system SHALL render a near-black footer with logo, social icons,
copyright, and a subscribe panel.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the logo, social icons (facebook, twitter,
  pinterest, vimeo, instagram, google), and a copyright line with a "made
  with ♥" credit

#### Scenario: Subscribe form

- **GIVEN** the subscribe panel is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show a "Subscribe" heading, an email input with an
  underline-style border, and an arrow submit button

#### Scenario: Subscribe validation

- **GIVEN** the subscribe form is displayed
- **WHEN** the user enters an invalid email and submits
- **THEN** the form SHALL show a validation error and SHALL NOT submit
- **WHEN** the user enters a valid email and submits
- **THEN** the form SHALL show a success confirmation

## Verification checklist

- [ ] `npm run verify:app dispatch` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the original 1:1 (header → hero slider →
      Don't Miss → What's Trending → Most Popular Videos → Latest Articles
      → sidebar (Top Stories, ads, Newest Videos, Future Events) → footer)
- [ ] Tokens wired through `@theme`: pill `#899091`, green `#2ddf80`, tan
      `#937c6f`, surfaces `#f7f7f7` / `#ededed` / `#1f1f1f` / `#111111`
- [ ] Fonts Ubuntu + Work Sans loaded via Google Fonts `<link>` in
      `index.html`
- [ ] Placeholder images use `https://picsum.photos/seed/dispatch-<n>/<w>/<h>`;
      no assets copied from the original
- [ ] Header gains dark background on scroll; mobile hamburger menu with
      aria-expanded
- [ ] Hero slider auto-advances with prev/next arrows and dots; similar
      posts + "next" panel present
- [ ] Video playlist active state updates player panel; tag filters and
      Load More behave
- [ ] Subscribe form validates email (zod) with success state; a11y labels
      and focus rings
- [ ] Dark-mode toggle present per repo conventions (dark: variants)
- [ ] README status table regenerated after merge (`npm run readme:status`)
