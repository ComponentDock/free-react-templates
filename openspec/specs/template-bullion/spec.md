# Template: Bullion (Blog / News Magazine Template)

## Purpose

Bullion is a single-page cryptocurrency news magazine template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Newsbit" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Newsbit" — bitcoin / cryptocurrency news
  magazine template (source: https://colorlib.com/wp/template/newsbit/).
  TEMPLATES.md has TWO copies of this item (lines 275 and 2206 — mark
  EVERY copy `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/newsbit/
  (HTTP 200, 25 KB rendered DOM, title "Newsbit"). Stylesheets:
  `common/styles.css` (77.8 KB, extracted) + `plugin-frameworks/bootstrap.css`
  - `fonts/ionicons.css` (icon font: ion-social-*, ion-search, ion-navicon,
    ion-ios-bolt, ion-chatbubbles, ion-ios-paperplane, ion-close,
    ion-arrow-down-b, ion-heart). Font: **'Encode Sans Expanded'** via
    Cloudflare cf-fonts @font-face in the head. Body 14px. jQuery 3.2.1 +
    Bootstrap JS for the mobile menu / search toggle only (no carousels).
    No section `id`s — a custom utility-class framework (w-2-3, h-600x,
    abs-blr, ptb-50, …) instead of Bootstrap-only markup.
- **Screenshot:** `newsbit-free-template.jpg` (TEMPLATES.md lines 275 / 2206) — verified in a browser (vision analysis, 1200×946): dark
  charcoal utility top bar with left links (About / Advertise / Submit
  Press Release / Contact) and right social icons; white header with a
  bold all-caps brand logo left and uppercase nav right (NEWS, GUIDES &
  ANALYTICS, EVENTS, EXPLAINED, ICON CLAENDER); 600px-tall featured-story
  mosaic: one large story (≈2/3 width, image with bottom-up black
  gradient, bold white headline + accent-colored author + date + bolt
  view-count + comment-count) over two stacked stories on the right,
  then a bottom row of three smaller stories; below, a two-column body —
  left "RECENT NEWS" (one image card + a column of four mini posts with
  100px thumbnails) then "CRYPTO MINING NEWS" (four image cards) and a
  yellow-bordered "VIEW MORE CRYPTO MINING EVENTS" button; right sidebar
  — a solid yellow price-ticker list (1 BTC = $13,2323 … six rows),
  "POPULAR POSTS" mini list, a dark-overlay banner ("Available for
  mobile & desktop" + "Download for free" link), and a NEWSLETTER form
  (input with 1px yellow border + yellow paper-plane button); very dark
  `#191919` footer (white logo, blurb, copyright; two "MOST POPULAR"
  columns with accent headings; thin divider; bottom bar with Terms /
  Privacy links left and social icons right). Brand accent is a bright
  golden yellow `#F9B500`; text is near-black `#111` on white.
- **Visual design (from DOM + CSS tokens + rendered screenshot):**
  crypto-news magazine aesthetic — white page, near-black `#111` text,
  golden-yellow `#F9B500` accent (author names, section-title accents,
  price ticker bg, button borders/fills, newsletter button, footer
  headings, view-count icons), `#191919` dark top bar + footer, `#888`
  metadata, `#aaa` utility links, uppercase bold section titles with a
  1px `#ccc` underline, 2px-radius 45px bordered buttons, Encode Sans
  Expanded display font, image captions over a bottom-up black gradient
  (`linear-gradient(to top, #000 0%, rgba(0,0,0,.4) 100%)`, opacity .6).
  The demo brands itself "Newsbit"; recreation uses the NEW name
  **Bullion**.

- **Structure (1:1, section order):**
  1. Top utility bar `div.bg-191` (bg `#191919`) — `div.container` >
     `div.oflow-hidden.color-ash.font-9` (`#aaa`, .9em, 15px vertical
     padding): left `ul.float-left`: **About** / **Advertise** /
     **Submit Press Release** / **Contact**; right `ul.float-right`: 5
     icon links `ion-social-facebook` / `ion-social-twitter` /
     `ion-social-google` / `ion-social-instagram` / `ion-social-bitcoin`.
  2. Header `header` (white) — `div.container`:
     - `a.logo` (float left, 24px tall, `margin: 28px 0`) > `img`
       `images/logo-black.png` (dark wordmark asset — recreate as a bold
       text wordmark "Bullion", dark `#111`).
     - `a.right-area.src-btn` (right) — search toggle: `i.ion-search`
       (active) / `i.ion-close`; toggles `div.src-form` (hidden by
       default, expands on toggle): `form` > `input[type=text]`
       placeholder **"Search here"** + submit button `i.ion-search`.
     - `a.menu-nav-icon` (`i.ion-navicon`) — mobile hamburger
       (`data-menu="#main-menu"`).
     - `ul.main-menu` (float right, `#main-menu`): links UPPERCASE,
       `line-height: 80px`, `padding: 0 15px`: **NEWS** / **GUIDES &
       ANALYTICS** (`li.drop-down` + `i.ion-arrow-down-b`, dropdown
       submenu `ul.drop-down-menu` with **PAGE 1** / **PAGE 2**, 1px
       `#ddd` borders) / **EVENTS** / **EXPLAINED** / **ICON CLAENDER**
       (source typo for "Contact" — fix in recreation). Mobile: menu
       collapses to a full-width stacked list with `#eee` separators.
  3. Hero grid `div.container` > `div.h-600x` (600px tall, stacks on
     mobile) — a 2×2 story mosaic:
     - Row A `div.h-2-3` (2/3 height): left `div.w-2-3` (2/3 width):
       `a.pos-relative.h-100` > `div.img-bg.bg-1.bg-grad-layer-6` (bg
       image + `linear-gradient(to top, #000, rgba(0,0,0,.4))` overlay
       opacity .6) + `div.abs-blr.color-white.p-20`: `h3` bold headline
       **"Peter Thiels VC Found Invests Million into Bitcoin, Market
       Reacts"** + `ul.list-li-mr-20`: **by `<span class="color-primary">`
       Olivia Capzallo** + **Jan 25, 2018** + `i.ion-ios-bolt` **30,190**
       - `i.ion-chatbubbles` **30** (bolt/chat icons `color-primary`).
         Right `div.w-1-3`: two stacked `div.h-50` stories (`bg-2`, `bg-3`)
         with `h4` bold headlines + date/bolt/chat meta.
     - Row B `div.h-1-3` (1/3 height): three `div.w-1-3` stories
       (`bg-4`, `bg-5`, `bg-6`) with `h4` bold headlines + meta.
  4. Main `section` — `div.container` > `div.row`:
     - Left `div.col-md-12.col-lg-8`:
       - `h4.p-title` **RECENT NEWS** (bold, uppercase, padding-bottom
         20px, margin-bottom 40px, 1px `#ccc` underline via `:after`).
       - `div.row`: `div.col-sm-6` — `img` (600×450, `recent-news-1`),
         `h4.pt-20` bold link headline, meta `ul.list-li-mr-20`
         (`color-lite-black` "by **Olivia Capzallo,** Jan 25, 2018" +
         bolt count + chat count), paragraph blurb; `div.col-sm-6` —
         FOUR mini posts `a.oflow-hidden.pos-relative.mb-20`: 100×100
         thumbnail (`wh-100x.abs-tlr`) + `div.ml-120.min-h-100x` with
         `h5` bold headline + `h6.color-lite-black` "by **Danile
         Palmer,** Jan 25, 2018".
       - `h4.p-title.mt-30` **CRYPTO MINING NEWS** + `div.row`: FIVE
         `div.col-sm-6` cards (600×450 img, `h4.pt-20` bold headline,
         meta with mb-30).
       - `a.btn-brdr-primary.mt-20` **VIEW MORE CRYPTO MINING EVENTS**
         (45px tall, `line-height: 43px`, 1px solid `#F9B500`, radius
         2px, accent text; hover: bg `#F9B500`, color `#000`).
     - Right sidebar `div.col-md-6.col-lg-4` (`div.pl-20.pl-md-0`):
       - Price ticker `ul.list-block.list-li-ptb-15.list-btm-border-white.bg-primary.text-center`
         (bg `#F9B500`!important; 15px vertical padding per row; 1px
         white bottom borders): SIX rows **1 BTC = $13,2323** / **1 BCH =
         $13,2323** / **1 ETH = $13,2323** / **1 LTC = $13,2323** /
         **1 DAS = $13,2323** / **1 BCC = $13,2323**.
       - `div.mtb-50`: `h4.p-title` **POPULAR POSTS** + four mini posts
         (same 100×100 thumbnail pattern).
       - `div.mtb-50.pos-relative`: `img` banner (600×450) +
         `div.abs-tblr.bg-layer-7` (black `#111` overlay opacity .7,
         centered text): `h4` **"Available for mobile & desktop"** +
         `a.color-primary.link-brdr-btm-primary.mt-15` **"Download for
         free"** (accent color, animated bottom border).
       - `div.mtb-50`: `h4.p-title` **NEWSLETTER** + `p.mb-20` "Subscribe
         to our newsletter to get notification about new updates,
         information, discount, etc.." + `form.nwsltr-primary-1`:
         `input` placeholder **"Your email"** (45px, width 100%, padding
         0 65px 0 20px, 1px solid `#F9B500`) + `button` (absolute right,
         45×45, bg `#F9B500`, black `i.ion-ios-paperplane` 1.3em; hover:
         bg `#000`, color `#fff`).
  5. Footer `footer.bg-191.color-ccc` (bg `#191919`, text `#ccc`) —
     `div.container` > `div.pt-50.pb-20.pos-relative`:
     - Background watermark: `div.abs-tblr.pt-50.z--1.text-center` >
       `div.h-80.pos-relative` > `img.opacty-1.h-100` `images/map.png`
       (world-map image, 80px tall, centered, faint — decorative, may be
       dropped or replaced with a subtle SVG).
     - `div.row`: `div.col-sm-4` — `img` `images/logo-white.png` (white
       wordmark — recreate as white text wordmark), `p.mtb-20.color-ccc`
       blurb "Bit coin is an open-source, peer-to-peer, digital
       decentralized cryptocurrency. Powered by blockchain technology…",
       `p.color-ash` copyright "Copyright © <year> All rights reserved |
       This template is made with ♥ by Colorlib" (credit kept per CC BY
       3.0); `div.col-sm-4` — `h5.color-primary.mb-20` **MOST POPULAR**
       - two entries (`a.color-white` bold headline + `h6.mt-10` date,
         separated by `div.brdr-ash-1.opacty-2.mr-30` divider);
         `div.col-sm-4` — second **MOST POPULAR** column (same pattern).
     - `div.brdr-ash-1.opacty-2` full divider.
     - Bottom bar `div.oflow-hidden.color-ash.font-9` (same styling as
       top bar): left links **Terms & Conditions** / **Privacy policy** /
       **Jobs advertising** / **Contact us**; right: same 5 social icon
       links.

- **Design tokens extracted from `common/styles.css`:**
  - Accent golden yellow **`#F9B500`** — `.color-primary` (author names,
    view-count/chat icons, footer h5, "Download for free" link),
    `.bg-primary` (price ticker list bg), `.btn-brdr-primary` border +
    text (hover: bg accent, text `#000`), `.btn-fill-primary` bg,
    `.nwsltr-primary-1` input border + button bg (button hover bg
    `#000`), link bottom border.
  - Dark charcoal **`#191919`** — `.bg-191`: top utility bar + footer
    bg. Footer text `#ccc`; footer headings `#F9B500`.
  - Near-black **`#111`** — `.color-black` (author names on white),
    `.bg-layer-7` banner overlay (opacity .7), `.bg-layer-4` (opacity
    .4), button text on accent fills.
  - Black **`#000`** — gradient `linear-gradient(to top, #000 0%,
rgba(0,0,0,.4) 100%)` hero overlay (`.bg-grad-layer-6:after`,
    opacity .6); newsletter button hover bg.
  - Greys — `.color-lite-black` **`#888`** (meta), `.color-ash` **`#aaa`**
    (top bar / bottom bar links, copyright), **`#ccc`** (p-title
    underline, `.brdr-ash-1` borders, btn-brdr-grey), `#ddd` (dropdown
    separators), `#eee` (mobile menu separators).
  - White **`#fff`** — captions on hero images, ticker row borders,
    footer headings/links.
  - Font: **'Encode Sans Expanded', sans-serif** (Google Fonts via
    cf-fonts; body 14px, weight 400). Headings: `h3` 1.7em (≈24px), `h4`
    1.3em (≈18px), `h5` 1.1em, `h6` .85em — all bold (`<b>`) in
    headlines. p-title: bold uppercase, pb 20px, mb 40px, 1px `#ccc`
    underline.
  - Buttons `.btn-brdr-primary`: height **45px**, `line-height: 43px`,
    border **1px solid `#F9B500`**, radius **2px**, accent text; hover
    bg `#F9B500`, text `#000`. Variants: `.btn-fill-primary` (solid
    accent, text `#111`), `.btn-brdr-grey` / `.btn-fill-grey` (unused on
    this page).
  - Newsletter form: input 45px, 1px `#F9B500` border, padding `0 65px 0
20px`; button absolute 45×45 right, bg `#F9B500`, black icon 1.3em;
    hover bg `#000` icon `#fff`.
  - Hero mosaic: container height **600px**; top row 2/3 height, bottom
    row 1/3; big story 2/3 width, side stack 1/3; captions
    `abs-blr` (absolute bottom, white, p-20); gradient overlay opacity
    .6. Mobile: everything stacks full-width with fixed heights
    (h-sm-300x / h-sm-600x).
  - Spacing rhythm: sections `ptb-50` (footer), `mtb-50` (sidebar
    blocks), `mb-20` mini posts, `pt-20` card headlines, `list-li-mr-20`
    meta gaps.
  - Icons (ionicons font in source — swap to lucide-react): search,
    close, navicon (menu), arrow-down-b (dropdown chevron), ios-bolt
    (views), chatbubbles (comments), ios-paperplane (newsletter submit),
    heart (copyright); brand socials (facebook/twitter/google/instagram/
    bitcoin) as inline SVG (lucide-react removed brand glyphs).
  - Mobile menu: `.main-menu` collapses (Bootstrap collapse, 250px
    off-canvas in source CSS), links become full-width stacked rows with
    `#eee` top borders; dropdowns render inline. Search form expands to
    full width (`src-form.active max-width: 3000px`).

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/bullion-<n>/<w>/<h>`; hero uses 1200×800-class
  crops, cards 600×450, thumbs 100×100); icons → lucide-react (search,
  x, menu, chevron-down, zap, message-circle, send, heart) + inline SVG
  for brand socials; Encode Sans Expanded via Google Fonts `<link>` in
  `index.html`; logos recreated as text wordmarks (dark "Bullion" in
  header on white, white in footer); the map watermark may be dropped or
  replaced with a faint inline SVG; nav labels kept UPPERCASE (fix the
  "ICON CLAENDER" typo → "Contact" or similar single item); the
  "VIEW MORE" button links nowhere (renders as a link/anchor).

Bullion lives in `apps/bullion` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Utility top bar

The system SHALL render a dark charcoal top bar above the header with
utility links on the left and social icon links on the right.

#### Scenario: Top bar content

- **GIVEN** the Bullion page is rendered
- **WHEN** the page loads
- **THEN** a `#191919` bar SHALL show links About, Advertise, Submit
  Press Release, and Contact on the left in light grey (`#aaa`)
- **AND** five social icon buttons (Facebook, Twitter, Google,
  Instagram, Bitcoin) SHALL be visible on the right

### Requirement: Header with search and navigation

The system SHALL render a white header with a wordmark logo, a search
toggle with expanding search form, a desktop navigation menu with a
dropdown, and a mobile hamburger menu.

#### Scenario: Header content

- **GIVEN** the header is displayed
- **WHEN** the page loads
- **THEN** the site wordmark "Bullion" SHALL appear on the left in dark
  text
- **AND** uppercase nav links SHALL be shown on the right: NEWS,
  GUIDES & ANALYTICS, EVENTS, EXPLAINED, and a contact item
- **AND** the GUIDES & ANALYTICS item SHALL open a dropdown submenu
  with two page links

#### Scenario: Search toggle

- **GIVEN** the header is displayed
- **WHEN** the user presses the search toggle button
- **THEN** an expanding search form SHALL appear with an input
  placeholder "Search here" and a search submit button
- **AND** pressing the toggle again SHALL collapse the form

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a collapsible menu SHALL open with the same uppercase nav
  links
- **AND** pressing the toggle again SHALL close it

### Requirement: Featured story mosaic

The system SHALL render a 600px-tall featured-story mosaic: one large
story over a two-story stack, plus a bottom row of three stories, each
with an image, a bottom-up gradient overlay, a bold headline, and
author/date/view/comment meta.

#### Scenario: Mosaic layout

- **GIVEN** the featured mosaic is displayed
- **WHEN** the page loads
- **THEN** a large story (~2/3 width) SHALL be shown on the left of the
  top row with a bold headline and meta (byline in the accent color,
  date, view count, comment count)
- **AND** two stacked stories SHALL fill the right third of the top row
- **AND** three stories SHALL fill the bottom row
- **AND** every story SHALL overlay its image with a bottom-up black
  gradient and render white caption text at the bottom
- **AND** on a narrow viewport the mosaic SHALL stack into full-width
  fixed-height rows

### Requirement: Recent news and crypto mining news

The system SHALL render a two-column main section: a left column with
"RECENT NEWS" (one image card plus four mini posts) and "CRYPTO MINING
NEWS" (five image cards) with a bordered "view more" button, and a right
sidebar.

#### Scenario: Recent news column

- **GIVEN** the main section is displayed
- **WHEN** the page loads
- **THEN** an uppercase "RECENT NEWS" section title SHALL appear with a
  1px light underline
- **AND** one large card SHALL show a 600×450 image, a bold headline, a
  meta row (byline, date, view count, comment count), and a paragraph
- **AND** four mini posts SHALL each show a 100×100 thumbnail, a bold
  headline, and a byline/date line

#### Scenario: Crypto mining news and view-more button

- **GIVEN** the main column is displayed
- **WHEN** the page loads
- **THEN** an uppercase "CRYPTO MINING NEWS" title SHALL appear followed
  by five image cards with bold headlines and meta rows
- **AND** a "VIEW MORE CRYPTO MINING EVENTS" button SHALL be shown with
  a 1px accent border, 2px radius, and accent text
- **AND** hovering the button SHALL fill it with the accent color and
  darken the text to black

### Requirement: Sidebar with ticker, popular posts, banner, and newsletter

The system SHALL render a right sidebar with a solid-accent price
ticker, a "POPULAR POSTS" mini list, a dark-overlay download banner, and
a newsletter subscribe form.

#### Scenario: Sidebar widgets

- **GIVEN** the sidebar is displayed
- **WHEN** the page loads
- **THEN** a ticker list with a solid `#F9B500` background SHALL show
  six rows of cryptocurrency prices (e.g. "1 BTC = $13,2323") separated
  by white lines
- **AND** a "POPULAR POSTS" list SHALL show four mini posts with 100×100
  thumbnails
- **AND** a banner SHALL show "Available for mobile & desktop" over a
  dark image overlay with an accent-colored "Download for free" link
- **AND** a "NEWSLETTER" block SHALL show a description, an email input
  with a 1px accent border, and a solid-accent paper-plane submit
  button

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is displayed
- **WHEN** the user enters an email and presses the submit button
- **THEN** the form SHALL indicate the subscription was received
  (success message)
- **AND** submitting an invalid email SHALL show a validation error and
  no success message

### Requirement: Footer

The system SHALL render a dark charcoal footer with a brand column
(wordmark, blurb, copyright), two "MOST POPULAR" link columns, and a
bottom bar with legal links and social icons.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a white "Bullion" wordmark, a blurb paragraph,
  and the copyright line "Copyright © <year> All rights reserved" with a
  credit to the template source
- **AND** two "MOST POPULAR" columns SHALL list bold white headlines
  with dates under accent-colored headings
- **AND** a bottom bar SHALL show links (Terms & Conditions, Privacy
  policy, Jobs advertising, Contact us) on the left and social icons on
  the right in light grey

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Bullion app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar and header in the banner
  landmark, the hero mosaic, main section, and footer in the
  contentinfo/banner landmarks as appropriate
- **AND** the document title SHALL be "Bullion — Crypto News Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/bullion`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/bullion`)
- [ ] Section order matches the reference 1:1 (top bar → header → hero mosaic → main row [recent news / crypto mining / sidebar] → footer)
- [ ] Design tokens from the reference used in `@theme` (accent #F9B500, dark #191919, ink #111, greys #888/#aaa/#ccc, Encode Sans Expanded font)
- [ ] Hero mosaic: 600px container, 2/3-1/3 top row (big story + 2 stack) + 1/3 bottom row (3 stories), gradient overlay `linear-gradient(to top, #000, rgba(0,0,0,.4))` opacity .6, white captions with accent byline + view/comment counts
- [ ] Section titles: uppercase bold with 1px #ccc underline (p-title pattern, pb 20px / mb 40px)
- [ ] Cards: 600×450 images, h4 bold headlines, meta rows (byline, date, bolt count, chat count); mini posts 100×100 thumbnails
- [ ] View-more button: 45px, 1px solid accent border, radius 2px, accent text, hover = accent bg + black text
- [ ] Price ticker: solid #F9B500 bg, six rows, white row separators, centered bold text
- [ ] Newsletter form: 45px input with 1px accent border, 45×45 accent button with send icon (hover black bg)
- [ ] Footer: #191919 bg, white wordmark + blurb + copyright, two MOST POPULAR columns with accent headings, bottom bar with legal links + social icons
- [ ] Placeholder images are seeded picsum (no copied assets); icons from lucide-react / inline SVG for brands; Encode Sans Expanded via Google Fonts link
- [ ] README Templates status + TEMPLATES.md Newsbit lines (275 AND 2206) marked `[x]` after merge
