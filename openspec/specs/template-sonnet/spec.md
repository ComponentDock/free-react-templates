# Template: Sonnet (Blog/Magazine Template)

## Purpose

Sonnet is a single-page blog/magazine website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Quitelight" blog template (see TEMPLATES.md), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Quitelight" — "Quite Light" blog/magazine
  template (source: https://colorlib.com/wp/template/quitelight/).
  TEMPLATES.md has **THREE copies** of this item (lines 281, 481, 2210 —
  mark ALL of them `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/quitelight/
  (HTTP 200, 35 KB DOM, fetched 2026-08-11; the live DOM is the primary
  reference and matches the screenshot).
- **Screenshot:** `quitelight-free-template.jpg` (1200×946, verified via
  browser vision). Magazine-style light blog: white background, dark text,
  mustard-gold accent `#F9B500`. Transparent header (logo left, centered
  menu, search right) floating over a full-width hero photo with a dark
  gradient overlay on the left; category tag "ART" + large bold headline +
  "Continue Reading" white-outline button. Below: "HOT NEWS" label over a
  3-column grid of white article cards (image, category, title,
  like/comment meta). Right sidebar with a "TOP STORIES" list widget. The
  footer is below the fold (not visible in the screenshot).
- **Section order (1:1):** Header (transparent, absolute over hero) →
  Hero (800px photo + dark overlay; left: headline + CTA; right: "HOT
  NEWS" card slider + white scrollbar) → Main content (`#F8F8F8`):
  [3-card post grid → "Whats trending" featured row (big sided card + 3
  side cards) → "Most Popular Videos" dark video slider → "Most Popular
  Videos" grid + LOAD MORE button] with a right sidebar (`#F2F2F2`: TOP
  STORIES → SALE ad → NEWEST VIDEO → CHARITY ad → NEWEST VIDEO date-list)
  → Footer (`#191919`: brand + about, 2 link columns, newsletter form +
  bottom bar).

### Header + nav (from live DOM)

- `header` is `position: absolute; top: 0` over the hero: white 600-weight
  text, bottom hairline `1px solid #aaa`, logo floats left (70px), menu
  links line-height 70px, search form right.
- Nav links: Home, Sport ▾ (dropdown: PAGE 1, PAGE 2), Travel, Beauty,
  Music, Art, Fashion, Contact. Dropdowns render on a white bg with
  `#111` text. Mobile: hamburger (`menu-nav-icon`).
- Search: `src-form` in the right area (input + icon button).

### Hero (from live DOM)

- `slider-main h-800x` (800px tall), `pt-95` header clearance, bg photo
  `slider_1_1900x1200.jpg` + dark overlay.
- Left column (col-md-5): h1 "The Shoddy Science Behind most Pregnancy
  Advice" (white) + "Continue Reading" button (`btn-brdr-grey
color-white` outline).
- Right column (col-md-6): h5 "HOT NEWS" label + swiper slider of 4
  white cards — each: category h5 "ART" (`color-ash`), h4 title, meta
  `ul` (15 · 105 with heart/comment icons, `color-lt-black`). Custom
  white swiper scrollbar (3px track `rgba(255,255,255,.5)`, 5px white
  drag).

### Main content (from live DOM)

- Section bg `#F8F8F8` (`bg-1-white`); left column col-lg-8, right
  sidebar col-lg-3.
- **3-card grid:** three white cards (`card bg-white`, padding 25px 15px)
  — category h5 `color-ash`, h4 title, meta 15 · 105.
- **"Whats trending"** (h4 section title): featured big card (col-xl-8,
  image left `trending_1_400X500.jpg` + white text half: category, h2
  title, meta) + three col-xl-4 cards: one image-top card
  (`trending_2_400X300.jpg`), two dark image cards (`trending_2_400X250`,
  `trending_3_400X250`) with overlay + white text (`color-grey` meta).
- **"Most Popular Videos"** (h4): dark full-width slider block (bg photo
  `slider_2_1900x1200.jpg`, `p-40`, overlay, white text) with a narrow
  intro block (max-w 200px: h5 + h2) and a swiper of 4 photo slides
  (`slider_5_1600x1000`, `slider_4_1600x1000`, `slider_3_1900x600` …)
  each with a centered circular play button (50px circle,
  `rgba(0,0,0,.5)` bg, white play icon).
- **"Most Popular Videos" grid** (h4 — the original repeats the same
  heading; paraphrase to "Latest Articles"): five col-xl-4 cards — white
  card (FASHION / h2 title), image-top card, dark image card
  (`latest_articles_3_400x250`), tall dark card (`latest_articles_4_400x600`),
  image-top card (`latest_articles_2_400x300`) — plus one col-xl-8 sided
  big card (image `latest_articles_1_400x500` + text). Centered h6 "LOAD
  MORE" + grey outline button below.

### Sidebar (from live DOM)

- bg `#F2F2F2` (`bg-2-white`), `ptb-50`, widgets stacked with `mb-50`:
  1. **TOP STORIES** (h5) — 4 rows of 80px thumbnail + h5 title.
  2. **Ad banner** — photo + dark overlay, centered big text: two lines
     "SA" / "LE" (renders "SALE").
  3. **NEWEST VIDEO** (h5) — 4 rows: 80px thumb with centered circular
     play icon (`v-icn`) + h5 title.
  4. **Ad banner** — photo + overlay, centered text "CHARITY" (h3) /
     "tournament" (h4).
  5. **NEWEST VIDEO** (h5) — 4 rows: square date cell (h2 "16" / h4
     "JAN") + h5 title.

### Footer (from live DOM)

- bg `#191919` (`bg-191`), `color-ash`, `pt-50 pb-20`, 4 columns:
  brand/logo + about paragraph (col-lg-6), two link-list columns
  (col-lg-2 each, `ul.list-a-plr-10`), newsletter form
  (`form-block form-brdr-b mx-w-400x m-auto`): email input (underline
  border style, `ptb-15`) with placeholder "Your Email" + full-width
  "SUBSCRIBE" grey outline button.
- Bottom bar: copyright line "Copyright © <year> All rights reserved |
  This template is made with by Colorlib" (paraphrased credit).

## Design tokens (from preview common/styles.css)

| Token              | Value                                                                                                                   | Where                                                                                                                                                    |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gold primary       | `#F9B500`                                                                                                               | button hover (bg + border), form input focus underline, `color-primary`, `.btn-brdr-primary` border/text, `.btn-fill-primary` bg                         |
| White              | `#ffffff`                                                                                                               | card bg, text on dark, hero text, swiper scrollbar drag                                                                                                  |
| Section grey       | `#F8F8F8`                                                                                                               | main content section bg (`bg-1-white`)                                                                                                                   |
| Sidebar grey       | `#F2F2F2`                                                                                                               | sidebar bg (`bg-2-white`)                                                                                                                                |
| Footer black       | `#191919`                                                                                                               | footer bg (`bg-191`)                                                                                                                                     |
| Body text          | `#555555`                                                                                                               | paragraphs (`p{ color:#555 }`)                                                                                                                           |
| Light black (meta) | `#888888`                                                                                                               | card meta text (`color-lt-black`)                                                                                                                        |
| Ash (muted)        | `#aaaaaa`                                                                                                               | category labels (`color-ash`), header bottom hairline, footer text                                                                                       |
| Grey (muted dark)  | `#cccccc`                                                                                                               | button border, meta on dark cards (`color-grey`)                                                                                                         |
| Black              | `#111111`                                                                                                               | headings on light, dropdown text, overlay color                                                                                                          |
| Green (minor)      | `#36D98A`                                                                                                               | `color-green` accent (sparingly)                                                                                                                         |
| Font family        | `"Poppins", sans-serif` (Google Fonts) for headings AND body                                                            | whole site; body 14px / weight 400; h1 4em, h2 2.5em, h3 1.7em, h4 1.3em, h5 1.1em, h6 .95em; p 1.05em line-height 1.7                                   |
| Buttons            | height 45px, line-height 43px, border 1px solid `#ccc`, radius 2px                                                      | `.btn-brdr-grey` (grey outline); hover: gold border + gold bg + black text; `.btn-fill-primary`: gold bg, `#111` text; `.btn-brdr-primary`: gold outline |
| Cards              | white bg, radius 0, no border/shadow, padding 25px 15px                                                                 | `.card.bg-white`, `.plr-25.ptb-15`                                                                                                                       |
| Image overlay      | `#111` at 50% opacity (`:after`), hero variant: linear-gradient to top `#000` → `rgba(0,0,0,.4)` at 60% opacity         | `.bg-layer-4` on image cards + hero; play buttons `rgba(0,0,0,.5)` circle                                                                                |
| Hero               | 800px tall (`h-800x`), `pt-95` header clearance, text block max-w 400px (`mx-w-400x`), photo `1900x1200` + dark overlay | `.slider-main`                                                                                                                                           |
| Swiper scrollbar   | 3px track `rgba(255,255,255,.5)`, 5px white drag, radius 0                                                              | hero slider                                                                                                                                              |
| Section rhythm     | `ptb-50` on content/sidebar, `ptb-15/25` card padding, `mb-30` grid gutters, `mb-50` sidebar widgets                    | all sections                                                                                                                                             |
| Icons              | ionicons in original (heart, chatbox, play, search) — use lucide-react equivalents                                      | card meta, play buttons, search                                                                                                                          |

## Recreation decisions

- Deliverable: single-page blog/magazine landing — transparent fixed
  header over a photo hero with a HOT NEWS card slider, light `#F8F8F8`
  post grid, trending featured row, dark video slider, latest-articles
  grid with LOAD MORE, grey sidebar with story/video/date widgets + ad
  banners, dark `#191919` footer with newsletter form.
- Brand name "Sonnet" replaces "Quite Light"; never use "Quitelight" as
  the brand.
- Hero: the right column's HOT NEWS slider is a horizontal scroll/snap
  strip (Swiper in the original; a CSS scroll-snap row with the custom
  white progress bar is acceptable). Left column = headline + CTA.
- Placeholder images: seeded picsum
  (`picsum.photos/seed/sonnet-<n>/<w>/<h>`) at the original aspect
  ratios: hero 1900x1200, trending 400x500 / 400x300 / 400x250, video
  slides 1600x1000 / 1900x600, latest 400x250 / 400x600 / 400x500 /
  400x300, sidebar thumbs 80x80, ad banners 400x300. No assets copied.
- Icons → lucide-react (Heart, MessageCircle, Play, Search, Menu,
  Facebook, Twitter, etc.); the video play button is a 50px circle with
  `rgba(0,0,0,.5)` bg.
- Fonts: Google Fonts `<link>` — "Poppins" (weights 400/500/600/700).
- Demo placeholder text repeats one headline across cards; paraphrase
  into 4–6 distinct article titles of the same kind (category tag +
  headline + like/comment counts).
- The grid section heading is a duplicated "Most Popular Videos" in the
  original — paraphrase to "Latest Articles".
- Newsletter + search forms: client-side validation + success state (no
  backend); the newsletter input uses the underline-border style
  (`border-bottom 1px solid #ccc`, focus gold).
- Header search is decorative (input + icon, no results page); nav
  dropdowns (Sport ▾) collapse into the mobile menu; links are anchors
  (single page).
- Skip link "Skip to main content" (existing convention).

## Requirements

### Requirement: Header + navigation

The system SHALL render a transparent header over the hero with the
brand, nav links, a search field, and a mobile menu.

#### Scenario: Header content

- **GIVEN** the Sonnet page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the wordmark "Sonnet" on the left in
  white
- **AND** it SHALL show the links Home, Sport, Travel, Beauty, Music,
  Art, Fashion, and Contact
- **AND** it SHALL show a search input with an icon on the right
- **AND** the header SHALL be transparent, positioned over the hero,
  with white text and a bottom hairline

#### Scenario: Dropdown menu

- **GIVEN** the nav bar is rendered
- **WHEN** the user activates "Sport"
- **THEN** a sub-menu SHALL open with items (e.g. PAGE 1, PAGE 2)
- **AND** the user SHALL be able to close the sub-menu

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the mobile menu
- **THEN** every nav link SHALL be reachable
- **AND** the user SHALL be able to close the menu

### Requirement: Hero section

The system SHALL render an 800px photo hero with a dark overlay, a
headline + CTA on the left, and a HOT NEWS card slider on the right.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed below the header
- **THEN** it SHALL show a full-width background photo with a dark
  overlay
- **AND** it SHALL show a category tag, a large white headline, and a
  "Continue Reading" outline button on the left

#### Scenario: HOT NEWS slider

- **GIVEN** the hero is rendered
- **WHEN** the right column is displayed
- **THEN** it SHALL show the label "HOT NEWS" above a horizontal strip of
  white cards
- **AND** each card SHALL contain a category, a title, and like/comment
  counts
- **AND** the strip SHALL be scrollable/snap-scrollable with a visible
  custom progress bar

### Requirement: Post card grid

The system SHALL render a light-grey section with a three-column grid of
white article cards.

#### Scenario: Grid cards

- **GIVEN** the main content section is displayed
- **WHEN** the first grid is rendered
- **THEN** it SHALL show three white cards, each with a category label,
  a title, and like/comment meta
- **AND** the cards SHALL have square corners (radius 0) and 25px
  padding

### Requirement: Trending section

The system SHALL render a "Whats trending" featured row with one large
sided card and three smaller cards.

#### Scenario: Featured row

- **GIVEN** the trending section is displayed
- **WHEN** the row is rendered
- **THEN** it SHALL carry the heading "Whats trending"
- **AND** it SHALL show a large card with an image half and a text half
  (category, title, meta)
- **AND** it SHALL show three smaller cards, at least two of which are
  dark image cards with white text

### Requirement: Video slider

The system SHALL render a dark "Most Popular Videos" slider with photo
slides and circular play buttons.

#### Scenario: Video slides

- **GIVEN** the video section is displayed
- **WHEN** the slider is rendered
- **THEN** it SHALL show a dark full-width block with an intro text block
- **AND** it SHALL show photo slides, each with a centered circular play
  button
- **AND** the slides SHALL be horizontally scrollable

### Requirement: Latest articles grid

The system SHALL render a grid of article cards with a LOAD MORE button.

#### Scenario: Grid + load more

- **GIVEN** the latest section is displayed
- **WHEN** the grid is rendered
- **THEN** it SHALL show a mix of white cards, image-top cards, and dark
  image cards, plus one large sided card
- **AND** it SHALL show a centered "LOAD MORE" outline button below the
  grid

### Requirement: Sidebar widgets

The system SHALL render a light-grey sidebar with story, video, and date
list widgets plus two ad banners.

#### Scenario: Sidebar content

- **GIVEN** the sidebar is displayed
- **WHEN** the widgets are rendered
- **THEN** it SHALL show a "TOP STORIES" widget with thumbnail + title
  rows
- **AND** it SHALL show two ad banners with large centered text over a
  dark image (e.g. "SALE" and "CHARITY tournament")
- **AND** it SHALL show a "NEWEST VIDEO" widget with play-icon rows
- **AND** it SHALL show a date-list widget (day + month cells)

### Requirement: Footer

The system SHALL render a dark footer with brand/about, link columns, a
newsletter form, and a bottom bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand, an about paragraph, and two link
  columns on a `#191919` background
- **AND** it SHALL show a newsletter form with an email input and a
  "SUBSCRIBE" button

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an invalid email or an empty field
- **THEN** the form SHALL show a validation error and block submission
- **AND** submitting a valid email SHALL show a success state

#### Scenario: Bottom bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is rendered
- **THEN** it SHALL show a copyright line with a paraphrased ColorLib
  credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a skip link,
a main landmark, and a document title.

#### Scenario: Full page render

- **GIVEN** the Sonnet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL start with a "Skip to main content" link
- **AND** the header SHALL be in the banner landmark, the sections in
  the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Sonnet — Blog Template"

## Verification checklist

- [ ] `bash scripts/verify-app.sh sonnet` passes (typecheck + lint + 100%
      coverage tests + build, ~2–3 min)
- [ ] `npm run spec:validate` passes
- [ ] Header: transparent over hero, "Sonnet" wordmark, 8 nav links,
      search input, Sport dropdown, mobile hamburger
- [ ] Hero: 800px photo + dark overlay, category tag + headline +
      Continue Reading outline button; HOT NEWS slider with white cards + custom progress bar
- [ ] Post grid on `#F8F8F8`: 3 white radius-0 cards with category/title/
      like-comment meta
- [ ] Trending: "Whats trending" heading, big sided card + 3 small cards
      (2 dark)
- [ ] Video slider: dark block, intro text, photo slides with circular
      play buttons
- [ ] Latest grid: mixed cards + sided card + LOAD MORE button
- [ ] Sidebar on `#F2F2F2`: TOP STORIES, NEWEST VIDEO (play icons),
      date-list widget, 2 ad banners
- [ ] Footer `#191919`: about + 2 link columns, newsletter form with
      validation + success state, SUBSCRIBE button, bottom bar with
      copyright + paraphrased ColorLib credit
- [ ] Fidelity: section order 1:1, `#F9B500` gold accent, `#F8F8F8`/
      `#F2F2F2` greys, `#191919` footer, Poppins font, radius-2 outline
      buttons (height 45px, hover → gold bg + black text), picsum
      placeholders seeded `sonnet-<n>`, no copied assets
- [ ] TEMPLATES.md: mark ALL THREE copies (lines 281, 481, 2210 —
      Quitelight) `[x]` and append the live surge URL to each
- [ ] `npm install` at root before committing (lockfile registers
      `apps/sonnet`); `grep -c "free-react-templates/sonnet"`
      package-lock.json >= 1
- [ ] `"homepage": "https://free-react-templates-sonnet.surge.sh"`
      in `apps/sonnet/package.json`
- [ ] PR title: `feat: Sonnet — blog/magazine website template (ColorLib
    Quitelight)`; body includes the source URL, preview URL, tokens,
      and the three-copy TEMPLATES.md note
