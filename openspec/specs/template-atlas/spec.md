# Template: Atlas (Blog & Magazine Template)

## Purpose

Atlas is a blog & magazine home-page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "World"
template design (see TEMPLATES.md — appears 3×: lines 297, 538, 2222; all
three rows point to the same source, one prep covers all; verified with
`grep -c 'wp/template/world/'` = 3), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "World" — Blog & Magazine Template (`<title>World -
Blog &amp; Magazine Template</title>`). A magazine/news one-pager: fixed
  navbar (logo image + Home / Pages dropdown / Gadgets / Lifestyle / Video /
  Contact + search trigger) over a full-width 600px hero photo slider with a
  70% black overlay; an absolutely-positioned "numbered posts" strip over the
  hero bottom (circular 1-2-3-4 badges + post titles); a white content area
  with TWO tabbed category sections ("Don't Miss" and "What's Trending", 9
  tabs each: All, Style hunter, Vogue, Health & Fitness, Travel, Gadgets,
  Sports, Politices, Features) where each pane mixes a featured post with a
  stack of small thumb+title rows; a 4-widget sidebar (About World, Top
  Stories, Stay Connected social circles, Today's Pick); a 3-card row, a
  "Latest Articles" / "Most Popular Videos" split, a pill "Load More" button,
  and a dark #161616 footer (brand + copyright, 2-column menu, Subscribe
  form). Source: https://colorlib.com/wp/template/world/.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/world/
  (HTTP 200, ~214.5 KB HTML fetched; `style.css` ~38.7 KB parsed for tokens
  — the page imports bootstrap/animate/owl/magnific/slicknav css + jQuery
  internally; NOT Tailwind).
- **Screenshot analyzed:** `world-free-template-1.jpg` (1200×946, TEMPLATES.md
  line 297) — "WORLD" logo white uppercase top-left over a dark city-skyline
  night photo hero; white nav links (Home, Pages ▾, Gadgets ▾, Lifestyle,
  Video, Contact) + magnifier icon; hero shows 3 numbered circles (1, 2, 3;
  the active one filled in the blue accent) with a van Gogh headline snippet;
  a circular scroll-down arrow sits bottom-right of the hero; below, a white
  content section titled "Don't Miss" with tabs (All active with a blue
  underline) — a large highway photo card with a blue "TRAVEL" chip and two
  stacked abstract-art thumb+title rows; sidebar widgets "About World"
  (paragraph) and "Top Stories" (cut off). Clean modern sans-serif design,
  single pure-blue #0000ff accent on white/grays. Matches the live DOM 1:1
  (DOM is the reference — e.g. it has 4 numbered posts, not 3; 9 tabs, not 7;
  no scroll-down button in the DOM).
- **Section order (1:1):** Preloader (`div#preloader > div.preload-content >
div#world-load`, cosmetic spinner) → Header (`header.header-area`, fixed,
  top margin 20px, z-index 300; `nav.navbar.navbar-expand-lg` 55px tall,
  bottom border 1px #fff; `a.navbar-brand` logo image left → recreate as bold
  white uppercase text "ATLAS"; `ul.navbar-nav.ml-auto` — Home (`.active`),
  Pages (`li.dropdown` → `div.dropdown-menu`: Home, Catagory, Single Blog,
  Regular Page…), Gadgets, Lifestyle, Video, Contact; nav links 500 weight,
  hover white; `button.navbar-toggler` white hamburger icon (mobile); search
  trigger → `div#search-wrapper` overlay: `form` with text input placeholder
  "Search something..." + `#close-icon` close button) → Hero (`div.hero-area`
  > `div.hero-slides.owl-carousel`: 2 `div.single-hero-slide.bg-img.
background-overlay` 600px tall (450px lg / 400px md) with inline bg image +
  > `::after` overlay `rgba(0,0,0,0.7)`; slides carry NO text content in the
  > DOM — the imagery is pure) → Hero post strip (`div.hero-post-area`,
  > absolute bottom 40px, full width, z-index 200 > `div.hero-post-slide`:
  > 4 × `div.single-slide.d-flex.align-items-center` — `div.post-number` 55px
  > circle (5px solid #8d8d8d border, radius 50%, Ubuntu 700 24px, line-height
  > 45px) + `div.post-title a` 14px 700 (base #8d8d8d; hero context white per
  > later override)) → Main content (`div.main-content-wrapper.
section-padding-100`, white, 100px top/bottom padding) →
  1. `div.world-catagory-area`: `div.nav-tabs` — `p.title` "Don't Miss"
     (Ubuntu 700 18px black) + 9 `a.nav-link` tabs (All, Style hunter, Vogue,
     Health & Fitness, Travel, Gadgets, Sports, Politices, Features); tab bar
     bottom border 2px #f1f1f1; active tab black with `::after` 2px #0000ff
     underline (left 15px, bottom -17px, width calc(100% - 30px), shadow
     0 2px 10px rgba(0,0,0,0.15)). 9 `div.tab-pane` (world-tab-1..9): row →
     `div.col-12.col-md-6`: `div.world-catagory-slider.owl-carousel` with 1
     featured `div.single-blog-post` (card, shadow 0 2px 8px
     rgba(0,0,0,0.15)) — `div.post-thumbnail` img + `div.post-cta` chip
     (absolute top 15px left 30px; 20px tall, uppercase 10px, ls .75px,
     white bg / #0000ff text, hover invert) + `div.post-content` (padding
     20px 30px): `a.headline h5` 18px black + excerpt `p` + `div.post-meta`
     (12px, bottom border 2px #f1f1f1, mb 30px; "Katy Liu on Sep 29, 2017
     at 9:48 am"); `div.col-12.col-md-6`: 4 × `div.single-blog-post.
post-style-2.d-flex.align-items-center` — `div.post-thumbnail` 97px +
     `div.post-content` (title 14px 700 + meta).
  2. `div.world-catagory-area.mt-50`: title "What's Trending" + 9 more tabs
     (world-tab-10..18, same labels); each pane: 2 × `div.col-12.col-md-6`
     holding 4 `post-style-2.mb-1` rows each, then `div.col-12` →
     `div.world-catagory-slider2.owl-carousel`: 2 × `div.single-cata-slide`,
     each a row of 4 `post-style-2.mb-1` posts.
  3. Sidebar `div.col-12.col-md-8.col-lg-4` → `div.post-sidebar-area` with 4
     × `div.sidebar-widget-area` (bottom border 2px #f1f1f1):
     - `h5.title` "About World" (Ubuntu 700 18px, border-bottom 2px #f1f1f1,
       padding 12px 0 12px 30px) + `div.widget-content` (padding 30px 0 30px
       30px) paragraph.
     - "Top Stories": 5 × `div.single-blog-post.post-style-2.widget-post`
       (97px thumb + title + meta).
     - "Stay Connected": `div.widget-content` → `div.social-area.d-flex.
justify-content-between`: 6 × circular 36px icon links (border 1px
       #f1f1f1, radius 50%, line-height 32px): facebook, twitter, pinterest,
       vimeo, instagram, google.
     - "Today's Pick": `div.single-blog-post.todays-pick` (no shadow) —
       `div.post-thumbnail` img + `div.post-content.px-0.pb-0` (headline +
       meta).
  4. `div.row.justify-content-center` → 3 × `div.col-12.col-md-6.col-lg-4`:
     `div.single-blog-post.post-style-3.mt-50` — `div.post-thumbnail` img +
     `div.post-content.d-flex.align-items-center.justify-content-between`:
     `div.post-tag a` chip (same style as post-cta) + `div.post-meta`.
  5. `div.world-latest-articles`: row → `div.col-12.col-lg-8`:
     `div.title` h5 "Latest Articles" (border-bottom 2px #f1f1f1, padding
     10px 0, mb 30px) + 4 × `div.single-blog-post.post-style-4.d-flex.
align-items-center` (thumbnail + content + meta); `div.col-12.col-lg-4`:
     `div.title` "Most Popular Videos" + 2 × `div.single-blog-post` (thumb +
     post-cta chip + content + meta).
  6. `div.load-more-btn.mt-50.text-center` → `a.btn.world-btn` "Load More"
     (pill, blue bg, white text).
     → Footer (`footer.footer-area`, bg #161616, padding 70px 0): row → 3 ×
     `div.col-12.col-md-4` `div.footer-single-widget`:
  7. logo image (white) + `div.copywrite-text.mt-30` — "Copyright © <year>
     All rights reserved | This template is made with <heart> by Colorlib"
     (→ original attribution).
  8. `ul.footer-menu.d-flex.justify-content-between.flex-wrap` — 6 links
     (Home, Fashion, Lifestyle, Contact, Gadgets, Video), each `flex:
0 0 33.3333%`.
  9. `h5` "Subscribe" (white Ubuntu 700 18px, mb 20px) + `form`: `input
type=email` (35px, transparent bg, bottom border 1px #959595, color
     #959595, placeholder "Enter your mail") + `button` with right-arrow
     icon.
- **Design tokens extracted from the preview CSS (computed values verified in
  the stylesheet):**
  - Brand blue: **#0000ff** — `.world-btn` bg/border (solid variant),
    `.world-btn:hover` fill on outlined variant, global `a:hover`/`:focus`
    color, `.nav-tabs .nav-link.active::after` underline (2px, shadow
    0 2px 10px rgba(0,0,0,.15)), `.post-cta a` / `.post-tag a` text + hover
    background.
  - Footer dark: **#161616** — `.footer-area` background (padding 70px 0).
  - Ink: **#000000** — `h1–h6` color, `.title` / `.nav-tabs .title` /
    `.widget-content .title` text, tab active/hover text.
  - Text gray: **#8d8d8d** — global `a` color, `.post-title a`, `.post-number
p` border (5px solid), `.footer-menu a` (muted).
  - Divider gray: **#f1f1f1** — `.post-meta` bottom border (2px),
    `.nav-tabs` bottom border, `.sidebar-widget-area` bottom border (2px),
    `.world-latest-articles .title h5` border, `.social-area a` border (1px).
  - Border gray: **#d7d7d7** — `.world-btn` outlined variant border; #d8d8d8
    also present (owl nav borders).
  - Input gray: **#959595** — footer subscribe input text/placeholder +
    bottom border.
  - Extra dark: **#232323** — minor dark accents (hover states).
  - Paper: **#ffffff** — page/section background, chip backgrounds
    (`.post-cta`, `.post-tag`), hero strip titles, footer headings/links.
  - Hero overlay: **rgba(0,0,0,0.7)** — `.background-overlay::after` full
    height black overlay.
  - Card shadow: **0 2px 8px rgba(0,0,0,0.15)** — `.single-blog-post`.
  - Fonts: headings/links/UI **"Ubuntu"** (300/400/500/700; `.title` 18px
    700, `h1–h6` 500 lh 1.3, `a` 14px 400, `.post-number p` 700 24px, nav
    links 500, footer h5 700 18px); body **"Work Sans"** (300–700; `body`
    default sans).
  - Buttons: `.world-btn` — pill (border-radius 50px), height 35px, padding
    0 25px, 14px, line-height 32px; solid variant #0000ff bg + white text;
    outlined variant 1px #d7d7d7 border filling #0000ff with white text on
    hover.
  - Chips (`.post-cta` / `.post-tag`): height 20px, uppercase 10px, weight
    500, letter-spacing 0.75px, padding 0 10px; white bg + #0000ff text;
    hover inverts.
  - Number badges (`.post-number p`): 55×55px, radius 50%, 5px solid #8d8d8d
    border, Ubuntu 700 24px, line-height 45px.
  - Radii: 50px (pill buttons), 50% (number badges, social circles 36px).
  - Spacing: `section-padding-100` = 100px 0; nav height 55px; hero 600px
    (450px ≥992px, 400px ≤767px); `.post-style-2` thumb 97px; `.post-meta`
    12px with 2px #f1f1f1 bottom border (mb 30px); `.post-content` padding
    20px 30px.
- **Recreation decisions:** all photos → seeded picsum
  (`https://picsum.photos/seed/atlas-<n>/<w>/<h>`): hero slides atlas-1..2,
  featured/tab posts atlas-3..20, sidebar/today's-pick/video thumbs
  atlas-21..30 (see docs/templates/atlas/tasks.md seed map); icons →
  lucide-react (Search, X, Menu, ChevronLeft, ChevronRight, ArrowRight);
  social brand icons → inline SVG (lucide removed brand icons); fonts Ubuntu
  (300/400/500/700) + Work Sans (300/400/500/600/700) via Google Fonts
  `<link>` in `index.html`; logo image → bold white uppercase text "ATLAS"
  (Ubuntu 700). Carousels (hero slides, catagory slider, hero-post strip)
  are state-based index carousels with dot/prev-next controls (no new deps).
  Tabs are state-based with 9 tabs per section (same labels in both groups);
  tab panes can share one data set. Tokens #0000ff / #161616 / #8d8d8d /
  #f1f1f1 / #d7d7d7 / #959595 / #232323 / #000 / #fff + rgba(0,0,0,0.7) in
  `@theme`. The screenshot's bottom-right circular scroll-down arrow is NOT
  in the live DOM — optional cosmetic, skip by default.

Atlas lives in `apps/atlas` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header

The system SHALL render a fixed transparent header over the hero with a logo,
a navbar with a dropdown, and a search trigger that opens a search overlay.

#### Scenario: Header content

- **GIVEN** the Atlas page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL be fixed at the top with a 20px top offset, a
  55px-tall navbar with a 1px white bottom border, the logo on the left and
  the search trigger on the right
- **AND** the logo SHALL read "ATLAS" in bold white uppercase Ubuntu
- **AND** the nav SHALL show Home (current), Pages (dropdown), Gadgets,
  Lifestyle, Video, and Contact in 500-weight Ubuntu with white hover
- **AND** the Pages dropdown SHALL contain Home, Catagory, Single Blog, and
  Regular Page
- **AND** a white hamburger toggler SHALL be available on narrow viewports

#### Scenario: Search overlay

- **GIVEN** the header is rendered
- **WHEN** the user activates the search trigger
- **THEN** a search overlay SHALL appear with a text input (placeholder
  "Search something...") and a close control
- **AND** the user SHALL be able to close the overlay again

### Requirement: Hero slider

The system SHALL render a full-width hero photo slider with a dark overlay
and a numbered-posts strip over its bottom edge.

#### Scenario: Hero slides

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show a full-width background-image slide ~600px
  tall (450px on desktop, 400px on mobile) with a rgba(0,0,0,0.7) overlay
- **AND** the slider SHALL contain two slides with prev/next and/or dot
  controls

#### Scenario: Numbered posts strip

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** a strip of four numbered post slides SHALL sit at the bottom of
  the hero, each with a 55px circular number badge (5px solid #8d8d8d
  border, radius 50%) and a 14px 700 post title link
- **AND** the strip SHALL auto-advance and/or be navigable

### Requirement: Don't Miss tabs

The system SHALL render the first tabbed category section ("Don't Miss")
with a featured post and a stack of small posts per tab.

#### Scenario: Tab bar

- **GIVEN** the "Don't Miss" section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the title "Don't Miss" (Ubuntu 700 18px
  black) followed by nine tabs: All, Style hunter, Vogue, Health & Fitness,
  Travel, Gadgets, Sports, Politices, Features
- **AND** the active tab SHALL be black with a 2px #0000ff underline
- **AND** switching tabs SHALL swap the pane content

#### Scenario: Tab pane layout

- **GIVEN** a tab pane is visible
- **WHEN** the page loads
- **THEN** the pane SHALL show a featured post card (thumbnail, category
  chip, 18px headline, excerpt, and an author/date meta row) on the left
  half
- **AND** the pane SHALL show four stacked small posts on the right half,
  each with a 97px thumbnail, a title, and meta

### Requirement: What's Trending tabs

The system SHALL render the second tabbed category section ("What's
Trending") with two post columns and a sliding row of posts per tab.

#### Scenario: Trending tab bar

- **GIVEN** the "What's Trending" section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the title "What's Trending" (50px top
  margin) with the same nine tab labels as "Don't Miss"
- **AND** the active tab SHALL carry the same 2px #0000ff underline style

#### Scenario: Trending pane layout

- **GIVEN** a trending tab pane is visible
- **WHEN** the page loads
- **THEN** the pane SHALL show two columns of stacked small posts (97px
  thumbnail + title + meta)
- **AND** below them a horizontally sliding row (carousel) of post groups
  SHALL be navigable with prev/next controls

### Requirement: Sidebar widgets

The system SHALL render a right sidebar with About, Top Stories, Stay
Connected, and Today's Pick widgets.

#### Scenario: Widget list

- **GIVEN** the sidebar is rendered
- **WHEN** the page loads
- **THEN** the sidebar SHALL show four widgets separated by 2px #f1f1f1
  bottom borders, each headed by an Ubuntu 700 18px black title with a 2px
  #f1f1f1 underline and 30px left padding
- **AND** the "About World" widget SHALL show a paragraph of copy
- **AND** the "Top Stories" widget SHALL list five small posts (97px
  thumbnail + title + meta)
- **AND** the "Stay Connected" widget SHALL show six circular 36px social
  icon buttons (1px #f1f1f1 border, radius 50%)
- **AND** the "Today's Pick" widget SHALL show one large post (thumbnail +
  headline + meta)

### Requirement: Featured cards row

The system SHALL render a row of three post cards below the sidebar section.

#### Scenario: Post-style-3 cards

- **GIVEN** the cards row is rendered
- **WHEN** the page loads
- **THEN** three cards SHALL be laid out in a responsive 3-column grid (2 on
  tablet, 1 on mobile), each with a thumbnail and a content row holding a
  category chip (white bg, #0000ff text, hover invert) and a meta row

### Requirement: Latest articles and videos

The system SHALL render a Latest Articles column and a Most Popular Videos
column.

#### Scenario: Latest Articles

- **GIVEN** the latest-articles section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show the title "Latest Articles" (2px
  #f1f1f1 bottom border) followed by four horizontal post rows (thumbnail +
  content + meta)

#### Scenario: Most Popular Videos

- **GIVEN** the latest-articles section is rendered
- **WHEN** the page loads
- **THEN** the right column SHALL show the title "Most Popular Videos"
  followed by two post cards, each with a thumbnail, a category chip, and a
  content + meta block

### Requirement: Load more

The system SHALL render a centered "Load More" button below the content.

#### Scenario: Load more button

- **GIVEN** the content sections are rendered
- **WHEN** the page loads
- **THEN** a pill "Load More" button SHALL be centered below the latest
  articles with a 50px top margin, blue #0000ff background and white text

### Requirement: Footer

The system SHALL render a dark footer with brand + copyright, a link menu,
and a subscribe form.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have a #161616 background with 70px top/bottom
  padding
- **AND** the first column SHALL show the white logo and the copyright line
  "Copyright © <year> All rights reserved | This template is made with
  <heart> by Colorlib" (original attribution)
- **AND** the second column SHALL show a flex menu of six links (Home,
  Fashion, Lifestyle, Contact, Gadgets, Video) at 33.3% width each
- **AND** the third column SHALL show a white "Subscribe" heading and a form
  with an email input (35px, transparent, 1px #959595 bottom border,
  placeholder "Enter your mail") and an arrow submit button

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Atlas app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the
  hero, tabs sections, sidebar, cards row, latest-articles section, and load
  more button in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Atlas — Blog & Magazine Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/atlas` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- atlas` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#0000ff, #161616, #8d8d8d, #f1f1f1, #d7d7d7, #959595, #232323, #000, #fff, rgba(0,0,0,0.7), Ubuntu + Work Sans) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `atlas-<n>`, Google Fonts link, lucide icons + inline SVG brand icons only)
- [ ] Two tab groups ("Don't Miss" + "What's Trending") implemented with client-side state; panes share one post dataset
- [ ] Hero slider + hero-post strip + trending slider implemented as state-based carousels (fake timers in tests where needed)
