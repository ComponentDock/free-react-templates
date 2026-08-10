# Template: Feature (Blog Template)

## Purpose

Feature is a single-page personal / editorial blog template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Article" design (see TEMPLATES.md — Blog category, line 241;
slug appears only once), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, editorial lifestyle blog by an author persona
("Steph"): a **top navbar** with a cursive script logo ("Article." in Grand
Hotel) and an uppercase, letter-spaced menu (Home active in orange, Blog with
a hover dropdown of 4 real-estate links, Lifestyle, Travels, Gallery, About
Me — menu hidden on mobile); a full-width **hero flexslider** (4 slides,
each a full-bleed photo with a faint black overlay and a white text block
bottom-left: an orange 60px square badge with a Fira Sans number, a Lora
28px title and an orange uppercase date); then a two-column body —
**left content column (64%)** with 4 blog entries and a square-edge
pagination bar, **right sidebar (30%)** with search, About Me, Recent Post,
Categories, Video Post, Tags, Gallery, Blockquote, Paragraph and a
newsletter subscribe block; then an **Instagram strip** (8 square tiles) and
a light-grey **3-column footer** with a copyright bar. Signature look:
white/`#fafafa` surfaces, **Grand Hotel** script logo, **Lora** serif
headings (italic post titles), **Open Sans** body, and a bright orange
accent **`#F6490D`** on links, the active nav item, the slider number badge,
category text, pagination active page, buttons and the sidebar heading
underline. Note: the original's sidebar "Recent Post" list repeats the same
placeholder title ("The Most Popular Leg Workout for Women") 4× and the
hero slide badges repeat "2" — the recreation keeps the same content KINDS
but writes distinct entries and sequential numbers.

## Design reference (replication findings)

- **Original:** ColorLib "Article" — free Bootstrap 3 personal / editorial
  blog template (source: https://colorlib.com/wp/template/article/). New
  name: **feature** (an editorial "feature article" concept; single word,
  no collision with `ls apps/` or existing spec folders).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/article/`
  (HTTP 200, ~59KB HTML; title "Article Template"). Stylesheets:
  `css/style.css` (~38KB — Bootstrap 3 base + custom theme), plus
  animate, flexslider, owl.carousel, magnific-popup, icomoon, flaticon.
  Google Fonts are served as inline `@font-face` blocks in the HTML head
  (Grand Hotel, Fira Sans 100–700, Lora 400/700 + italic, Open Sans
  400/700) — the recreation must use `<link>` in `index.html` instead.
- **Screenshot viewed** (`article-free-template.jpg`, 1200×946, in
  browser): desktop view — top navbar with black cursive "Article." logo
  left and uppercase sans menu right (HOME, BLOG, LIFESTYLE, TRAVELS,
  GALLERY, ABOUT ME); below, a full-width coastal photo hero with a
  semi-transparent white box bottom-left containing an orange square with
  the number "2", title "6 Facts - The Health Benefits of Swimming &
  Surfing" and date "JANUARY 20, 2017"; below the fold starts the
  two-column layout — left blog feed ("HEALTH | WORKOUT" orange category
  text, large black serif title, photo, faint meta row) and right sidebar
  (search input + orange search button, "About Me" serif heading with a
  woman portrait). White/black palette with bright orange accents;
  editorial magazine aesthetic.
- **Live render verified** (browser, desktop width): nav shows Home
  (active orange) / Blog / Lifestyle / Travels / Gallery / About Me (Blog
  dropdown items Commercial/Apartment/House/Building are present in the
  DOM under `li.has-dropdown`); hero slider renders 4 slides with the
  numbered white text block; blog entries render with a `#fafafa`
  `blog-wrap` card (category row, italic Lora title, image, share rail,
  meta row, drop-cap paragraph, blockquote, numbered/bulleted lists,
  "Continue Reading" italic link); sidebar renders search → About Me →
  Recent Post (4 cards, repeated placeholder titles) → Categories → Video
  Post → Tags → Gallery → Blockquote → Paragraph → Subscribe.
- **Placeholder-copy caveat:** sidebar Recent Post repeats "The Most
  Popular Leg Workout for Women" 4× and hero slide badges repeat "2"
  (1,2,2,2) — write 4 DISTINCT recent-post titles and sequential badge
  numbers 1–4. Blog entry dates all read "January 21, 2017" — vary them.
- **Section order (1:1) from the rendered DOM:**
  1. Navbar (`nav.colorlib-nav` > `div.top-menu`, padding `25px 30px`,
     `container-fluid` > `row`):
     a. Logo (`div#colorlib-logo`, `col-xs-2`): `a` "Article." — Grand
     Hotel cursive, **40px**, black, `line-height: 40px`.
     b. Menu (`div.col-xs-10.text-right.menu-1`): `ul` of inline `li`
     (uppercase, `letter-spacing: 2px`, 12px links, `padding: 10px
   15px`, `color: rgba(0,0,0,0.7)`; hover → orange): **Home**
     (active — orange `#F6490D`, `:after` underline via 2px
     background), **Blog** (`li.has-dropdown` — hover dropdown `ul`
     140px wide, white bg + shadow `0 14px 33px -9px rgba(0,0,0,0.75)`,
     links 13px `#999` → hover `#fff` on dark? — dropdown bg is
     white; links are 4 real-estate items Commercial / Apartment /
     House / Building), **Lifestyle**, **Travels**, **Gallery**,
     **About Me**.
  2. Hero slider (`aside#colorlib-hero` > `div.flexslider` > `ul.slides`,
     min-height 650px; `ul.slides li` min-height 650px, background image
     cover/center, each with `div.overlay` `rgba(0,0,0,0.1)`):
     - text block (`div.col-md-6.col-md-offset-3.slider-text` >
       `div.slider-text-inner` > `div.desc` — `position: absolute;
bottom: 0; left: 0`): `h1` (28px, Lora, black, `line-height:
1.3`, `padding-left: 80px`, margin-bottom 20px) with a `span`
       badge (absolute top/left, 60×60 table) containing `small`
       (60px cell, **`background: #F6490D`**, white, 24px, Fira Sans)
       showing the slide number; `h2` date (14px, uppercase,
       `letter-spacing: 4px`, **orange `#f6490d`**, `padding-left:
80px`; the source also has a 24px `#F7AF1D` star icon before it
       — optional, use a lucide Sparkle if included).
     - flexslider controls: numbered dot list (1–4) + Previous/Next
       arrows rendered by the flexslider JS — recreation: custom
       controls with aria-labels, autoplay optional.
  3. Blog container (`div#colorlib-container` > `div.container` > `div.row`
     — `.content` 64% width, `.sidebar` 30% float right; stacked 100%
     on mobile):
     - 4× `article.blog-entry` (`border-bottom: 1px solid #e6e6e6;
padding-bottom: 3em; margin-bottom: 4em`), each:
       a. `div.blog-wrap` (`background: #fafafa; padding: 2em 0;
   margin-bottom: 40px`): `span.category.text-center`
       (uppercase Lora 13px, `letter-spacing: 4px`, orange,
       margin-bottom 20px) — two `a` category links separated by
       " | " (entry 1: Health | Workout; 2: Fashion | Lifestyle;
       3: Model | Fashion; 4: Lifestyle | Travel); `h2.text-center`
       (28px, Lora italic, `color: #4d4d4d`, margin-bottom 30px)
       title link.
       b. Image area (`div.blog-image`, relative):
       - entry 1: `div.owl-carousel.owl-carousel2.blog-item` with 2
         `div.item` (`a.blog.image-popup-link`, background-image,
         height 400px) — a 2-image gallery carousel;
       - entry 2: single `a.blog.image-popup-link` (400px);
       - entry 3: single `a.blog.image-popup-link` (400px);
       - entry 4: `div.video.colorlib-video` — 400px (300px mobile)
         background-image + `div.overlay rgba(0,0,0,0.5)` (hover
         0.7) + centered 90×90 play button (`a` with play icon,
         hover scale 1.1).
       - `ul.share` (absolute, `top: 0; left: -2.5em`) — vertical
         icon rail: Share icon + facebook/twitter/google-plus
         circles.
         c. Meta row (`span.category.text-center` below image): `a` with
         calendar icon + "January 21, 2017" | `a.posted-by` user icon
       * "by Stephy" | `a` bubble icon + "5 Comments" — 13px,
         uppercase Lora, gray → orange hover.
         d. `div.desc` (margin-bottom 4em): `p.first-letra` lorem with
         **drop cap** (`:first-letter` 110px Georgia, float left, line
         height 90px); `blockquote` (italic, margin-left 50px);
         numbered list; bulleted list; "Continue Reading" link
         (`a.btn-custom` — Lora italic, `padding: 10px 30px`).
     - Pagination (`div.row` > `ul.pagination`): `«` (disabled), **1**
       (active — orange bg, white text), 2, 3, 4, `»` — square
       (`border-radius: 2px`), `border: 1px solid #b3b3b3`, black text;
       hover/active → `background: #F6490D`, white, border orange,
       shadow `0 2px 10px -5px black`.
  4. Sidebar (`aside.sidebar`, 30% float right, mobile 100%):
     a. Search (`div.side`, `background: #fafafa; padding: 2em;
   margin-bottom: 5em`): `form` with `input#search` (18px, `border:
   2px solid #fff`, white bg, `padding-right: 3em`, placeholder
     "Enter any key to search...") + absolute right orange button
     (`border-radius: 0`) with search icon.
     b. About Me (`div.side-wrap`, margin-bottom 5em): `h2.sidebar-
   heading` (20px, Lora italic, centered, margin-bottom 2em,
     `color: #333`, with a 50×2px orange `:after` bar 15px above) +
     `div.author-img` (350px cover photo) + intro paragraph ("Hi! My
     Name is Steph ...") + 4 social icons (`ul.colorlib-social-icons`,
     20px, orange).
     c. Recent Post (`div.side-wrap`): 4× `div.f-entry` (relative,
     `padding: 1em; background: #fafafa; margin-bottom: 3em`) —
     `a.featured-img` (120×100 absolute top-left) + `div.desc`
     (`padding-left: 140px`): `h3` (19px italic Lora, line-height
     1.4) title link + `span` (13px gray, calendar icon + date).
     Write 4 DISTINCT titles (source repeats one 4×).
     d. Categories (`div.side-wrap`): `ul.category` — 4 links Blog,
     Lifestyle, Travel, Fashion (folder icon + `border-bottom: 1px
   dashed #d9d9d9`, padding 10px 0, `color: #4d4d4d`).
     e. Video Post (`div.side-wrap`): `div.video.colorlib-video` —
     250px cover image, overlay, centered play button (same pattern
     as blog video).
     f. Tags (`div.side-wrap`): 19 tag links (tag icon + text):
     Modeling, Fashion, Life, Blog, Workout, Vacation, Travel,
     Exercise, Health, News, Model, Women, Animals, Nature, Art,
     Sea, Ocean, Office, Home — 12px uppercase links.
     g. Gallery (`div.side-wrap`): 8× `a.gallery` tiles (50% width ×
     170px, cover images gallery-1..8.jpg; hover overlay
     `rgba(0,0,0,0.3)` + search icon).
     h. Blockquote (`div.side-wrap`): `h2.sidebar-heading` +
     `blockquote` (italic, "Little Blind Text didn't listen ...").
     i. Paragraph (`div.side-wrap`): `h2.sidebar-heading` + lorem `p`.
     j. Subscribe (`div.side`): `h2.sidebar-heading` "Subscribe to our
     newsletter" + centered `input.form-control.form-email` (email,
     placeholder "Enter your email") + `button.btn.btn-primary.btn-
   subscribe` (orange pill, full-width on mobile) + social icon
     row.
  5. Instagram strip (`div#colorlib-instagram`, padding 0): centered
     `h2.colorlib-heading` "Instagram" (16px, uppercase, letter-spacing
     5px) + `div.instagram-entry` of 8 `a.instagram` tiles (12.5% width ×
     200px; 25% mobile, 50% small) with hover overlay.
  6. Footer (`footer#colorlib-footer`, `background: #F6F6F6; padding:
7em 0`): `div.row.row-pb-md` of 3 `div.col-md-4`:
     a. **Navigational** (`h2.colorlib-heading` + `ul.colorlib-footer-
   links`): Home, About Me, Blog, Travel, Lifestyle, Fashion,
     Health links.
     b. **Recent Post**: 4 entries — date (13px gray) + italic Lora
     title link ("22 Jan, 2017 — The Most Popular Leg Workout for
     Women", "20 Jan, 2017 — Popular Lifestyle with Fashion &
     Modeling", "21 Jan, 2017 — Video Post Travel with my Friends",
     "20 Jan, 2017 — Popular Lifestyle with Fashion & Modeling").
     c. **Tags**: same 19-tag cloud.
     - Copyright bar (`div.row` > `div.col-md-12` > `p`): "Copyright ©
       <year> All rights reserved | This template is made with ♥ by
       Colorlib" → paraphrase to the recreation (no ColorLib
       attribution/link).
  7. Back-to-top (`div.gototop.js-top`): fixed bottom-right circular
     button with up-arrow icon (scrolls to top).

## Design tokens (extracted from `css/style.css` + DOM)

- Fonts (Google Fonts): **Grand Hotel** (cursive) — logo ONLY
  (`#colorlib-logo`, 40px, line-height 40px); **Lora** (serif) — ALL
  headings h1–h6 + `.sidebar-heading` (20px italic) + `.btn-custom`
  (italic) + `.category` text (13px uppercase, letter-spacing 4px) +
  post titles (28px italic) + f-entry h3 (19px italic) + blockquotes;
  **Open Sans** (sans) — body (16px, line-height 2, `#333`), nav menu
  (12px uppercase, letter-spacing 2px), form inputs; **Fira Sans**
  (sans) — the hero number badge (24px). Load all four via `<link>` in
  `index.html` (the source inlines `@font-face` blocks; Tailwind 4 needs
  the `<link>` instead).
- Brand accent: **`#F6490D`** (bright orange) — all `a` links + hover,
  nav active item + dropdown hover, `::selection`, hero number badge bg,
  hero h2 date text, `.category` text, `.btn-primary` (fill; hover →
  `#f75b26`), pagination active/hover bg, `.sidebar-heading:after`
  underline bar (50×2px), `.colorlib-social-icons` icons. Hover shade:
  `#f75b26`.
- Secondary accent: **`#F7AF1D`** (gold) — the small star/sparkle icon
  next to the hero date (optional decoration).
- Ink / neutrals: body text `#333333`; headings `#4d4d4d`; hard black
  `#000` (logo, hero h1, `p.first-letra:first-letter`); nav links
  `rgba(0,0,0,0.7)`; dropdown links `#999`; gray meta `gray` (#808080).
- Surfaces: page `#fff`; `.blog-wrap` + `.side` (search) + `.f-entry`
  `#fafafa`; footer `#F6F6F6`; dropdown white with shadow
  `0 14px 33px -9px rgba(0,0,0,0.75)`; hero overlay `rgba(0,0,0,0.1)`;
  video overlay `rgba(0,0,0,0.5)` → hover `0.7`; gallery hover overlay
  `rgba(0,0,0,0.3)`; breadcrumbs (not on index) `#26271A`.
- Borders: blog-entry bottom `1px solid #e6e6e6`; category dividers
  `1px dashed #d9d9d9`; pagination `1px solid #b3b3b3` (active → orange);
  search input `2px solid #fff`.
- Shapes: buttons pill `border-radius: 30px` (`.btn`, `.btn-primary`);
  pagination square `border-radius: 2px`; hero badge 60×60 square; video
  play button 90×90 circle; gototop circular.
- Spacing: section paddings `7em 0` (container, instagram, footer);
  blog-entry `padding-bottom: 3em; margin-bottom: 4em`; blog-wrap
  `padding: 2em 0; margin-bottom: 40px`; `.side` `padding: 2em;
margin-bottom: 5em`; `.side-wrap` `margin-bottom: 5em`;
  `.sidebar-heading` `margin-bottom: 2em`; f-entry `padding: 1em;
margin-bottom: 3em`; hero slide min-height 650px; blog/video image
  height 400px (video 300px mobile); sidebar video 250px; author-img
  350px; featured-img 120×100; gallery tile 50% × 170px; instagram tile
  12.5% × 200px.
- Icons (source: icomoon/flaticon — recreation: lucide-react): Search
  (sidebar), Calendar (dates), User (author), MessageCircle (comments),
  Share2 + Facebook/Twitter/Google (share rail, lucide has Facebook/
  Twitter icons), Play (video), Tag (tags), Folder (categories),
  Sparkle (hero date star, optional), ArrowUp (gototop), Menu optional
  (mobile — the source simply hides the menu; a hamburger is NOT in the
  source).

## Requirements

### Requirement: Navbar

The system SHALL render a top navbar with the script logo and the
uppercase menu.

#### Scenario: Logo and menu

- **GIVEN** the Feature page is rendered on a desktop viewport
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the wordmark in Grand Hotel cursive (40px,
  black) on the left
- **AND** a right-aligned uppercase menu (12px, letter-spacing 2px,
  links `rgba(0,0,0,0.7)`) with: Home (active — orange `#F6490D` with
  underline), Blog (dropdown), Lifestyle, Travels, Gallery, About Me
- **AND** hovering a menu link SHALL turn it orange

#### Scenario: Blog dropdown

- **GIVEN** the menu is displayed
- **WHEN** "Blog" is hovered/focused
- **THEN** a dropdown SHALL appear with four links (Commercial,
  Apartment, House, Building) on a white card with a soft shadow

#### Scenario: Mobile nav

- **GIVEN** a narrow viewport (≤768px)
- **WHEN** the page is rendered
- **THEN** the menu SHALL be hidden (the source has no hamburger —
  match that; logo stays)

### Requirement: Hero slider

The system SHALL render a full-width hero slider with four slides, each
with a numbered text block.

#### Scenario: Slide layout

- **GIVEN** the hero slider is displayed
- **WHEN** a slide is inspected
- **THEN** it SHALL show a full-bleed background image (min-height
  650px) with a faint black overlay (`rgba(0,0,0,0.1)`)
- **AND** a text block bottom-left with: an orange 60×60 square badge
  containing a white Fira Sans number (24px), a Lora 28px black title
  (`padding-left: 80px`), and an orange uppercase 14px date
  (`letter-spacing: 4px`)

#### Scenario: Slide numbers

- **GIVEN** all four slides are rendered
- **WHEN** the badges are inspected
- **THEN** they SHALL show sequential numbers 1–4 (the source repeats
  "2" — fix it) with four DISTINCT vacation/lifestyle titles and dates

#### Scenario: Slider controls

- **GIVEN** the hero slider is displayed
- **WHEN** its controls are inspected
- **THEN** it SHALL provide Previous/Next controls and a numbered dot
  indicator (1–4) with the current slide marked active
- **AND** clicking a control SHALL change the visible slide (autoplay
  optional)

### Requirement: Blog entries

The system SHALL render four blog entries in the left content column,
each with a `#fafafa` card (category row, title, image, share rail, meta
row, article body and Continue Reading link).

#### Scenario: Entry card

- **GIVEN** the blog list is displayed
- **WHEN** an entry is inspected
- **THEN** it SHALL show, inside a `#fafafa` card with `padding: 2em 0`:
  an uppercase orange category row (Lora 13px, letter-spacing 4px, two
  links separated by " | "), a centered 28px italic Lora title
  (`#4d4d4d`), the media area, a centered meta row (calendar date ·
  user "by Stephy" · comments "5 Comments" — 13px uppercase, gray →
  orange hover), the article body and an italic "Continue Reading" link
  (Lora, `padding: 10px 30px`)
- **AND** entries SHALL be separated by a `1px solid #e6e6e6` bottom
  border

#### Scenario: Media variants

- **GIVEN** the four entries are rendered
- **WHEN** their media areas are inspected
- **THEN** entry 1 SHALL have a 2-image gallery carousel (400px) with
  prev/next controls
- **AND** entries 2–3 SHALL have a single 400px cover image
- **AND** entry 4 SHALL be a video placeholder (400px, 300px mobile)
  with a `rgba(0,0,0,0.5)` overlay (→ 0.7 on hover) and a centered
  90×90 play button that scales on hover

#### Scenario: Share rail

- **GIVEN** an entry's media area is displayed
- **WHEN** the left edge is inspected
- **THEN** a vertical share rail SHALL sit at `left: -2.5em` with a
  Share icon and Facebook/Twitter/Google icons (each an accessible link)

#### Scenario: Article body

- **GIVEN** an entry's description is displayed
- **WHEN** the body is inspected
- **THEN** it SHALL start with a paragraph whose first letter is a
  large drop cap (110px Georgia, floated left)
- **AND** it SHALL include an italic blockquote, a numbered list and a
  bulleted list (entry 1) — other entries may use a subset
- **AND** it SHALL end with the "Continue Reading" link

### Requirement: Pagination

The system SHALL render a square-edge pagination bar below the blog
list.

#### Scenario: Pages

- **GIVEN** the pagination bar is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show `«` (disabled), pages 1–4, and `»` as square
  items (`border-radius: 2px`, `1px solid #b3b3b3`, black text)
- **AND** page 1 SHALL be active — orange `#F6490D` background, white
  text, orange border, soft shadow
- **AND** hovering any page SHALL apply the same orange treatment

### Requirement: Sidebar

The system SHALL render the right widget sidebar (30% width, 100% on
mobile) with search, About Me, Recent Post, Categories, Video Post,
Tags, Gallery, Blockquote, Paragraph and Subscribe blocks.

#### Scenario: Search

- **GIVEN** the sidebar is displayed
- **WHEN** the top block is inspected
- **THEN** it SHALL be a `#fafafa` box (`padding: 2em`) with an email
  text input (18px, white bg, `2px solid #fff`, placeholder "Enter any
  key to search...") and an orange square search button at its right

#### Scenario: About Me

- **GIVEN** the About Me block is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a centered italic Lora 20px heading with a
  50×2px orange underline bar above it
- **AND** a 350px cover photo, an intro paragraph (e.g. "Hi! My Name is
  Steph ..."), and four orange social icons

#### Scenario: Recent Post

- **GIVEN** the Recent Post block is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show FOUR entries, each a `#fafafa` card (`padding:
1em`) with a 120×100 cover thumbnail, an italic 19px Lora title link
  and a 13px gray date with calendar icon
- **AND** the four titles SHALL be distinct (the source repeats one
  placeholder title 4×)

#### Scenario: Categories

- **GIVEN** the Categories block is displayed
- **WHEN** it is inspected
- **THEN** it SHALL list Blog, Lifestyle, Travel, Fashion as links with
  a folder icon and `1px dashed #d9d9d9` dividers

#### Scenario: Video Post

- **GIVEN** the Video Post block is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a 250px cover image with a centered play
  button and dark overlay

#### Scenario: Tags

- **GIVEN** the Tags block is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show 19 uppercase tag links (Modeling, Fashion,
  Life, Blog, Workout, Vacation, Travel, Exercise, Health, News, Model,
  Women, Animals, Nature, Art, Sea, Ocean, Office, Home) with tag icons

#### Scenario: Gallery

- **GIVEN** the Gallery block is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show eight square cover-image tiles (50% width ×
  170px) with a dark hover overlay and search icon

#### Scenario: Blockquote and Paragraph

- **GIVEN** the lower widgets are displayed
- **WHEN** they are inspected
- **THEN** the Blockquote widget SHALL show an italic quotation and the
  Paragraph widget SHALL show a lorem-style paragraph, each under a
  centered italic heading

#### Scenario: Subscribe

- **GIVEN** the Subscribe block is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a centered email input (placeholder "Enter
  your email") and an orange pill Subscribe button
- **AND** submitting a valid email SHALL show a success state (no
  backend); invalid emails SHALL be blocked with an error

### Requirement: Instagram strip

The system SHALL render an Instagram strip with eight square tiles
above the footer.

#### Scenario: Tiles

- **GIVEN** the Instagram strip is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a centered uppercase "Instagram" heading and
  eight cover-image tiles (12.5% width × 200px; responsive 25%/50%)
  with a hover overlay

### Requirement: Footer

The system SHALL render a light-grey three-column footer with a
copyright bar.

#### Scenario: Columns

- **GIVEN** the footer is displayed
- **WHEN** it is inspected
- **THEN** it SHALL be on a `#F6F6F6` background with three columns:
  Navigational (Home, About Me, Blog, Travel, Lifestyle, Fashion,
  Health), Recent Post (4 date + italic-title entries), and Tags (the
  19-tag cloud)

#### Scenario: Copyright

- **GIVEN** the footer bottom is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a paraphrased copyright line for the recreation
  (e.g. "Copyright © <year> All rights reserved | made with by Free
  React Templates") — no ColorLib attribution or link

### Requirement: Back-to-top

The system SHALL provide a back-to-top button.

#### Scenario: Scroll to top

- **GIVEN** the page is scrolled down
- **WHEN** the back-to-top button is clicked
- **THEN** the page SHALL scroll smoothly to the top

## Verification checklist

- [ ] `npm run verify:app feature` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the rendered original 1:1 (navbar [logo +
      menu + Blog dropdown] → hero slider [4 slides + controls] → blog
      container [4 blog entries + pagination] → sidebar [search, About
      Me, Recent Post, Categories, Video Post, Tags, Gallery,
      Blockquote, Paragraph, Subscribe] → Instagram strip → footer [3
      columns + copyright] → back-to-top)
- [ ] Tokens wired through `@theme`: brand orange `#F6490D` (hover
      `#f75b26`), gold `#F7AF1D`, body `#333333`, headings `#4d4d4d`,
      nav links `rgba(0,0,0,0.7)`, gray meta `#808080`, surfaces `#fff`
      / `#fafafa` / `#F6F6F6`, borders `#e6e6e6` / `#d9d9d9` /
      `#b3b3b3`, overlays `rgba(0,0,0,0.1)` / `0.5` / `0.7` / `0.3`
- [ ] Grand Hotel (logo), Lora (headings), Open Sans (body), Fira Sans
      (badge numbers) loaded via Google Fonts `<link>` in `index.html`
- [ ] Navbar: cursive 40px logo; uppercase 12px menu with Home active
      (orange + underline), Blog hover dropdown (4 links), hover orange;
      menu hidden on mobile (no hamburger, matching source)
- [ ] Hero slider: 4 slides, 650px min-height images + `rgba(0,0,0,0.1)`
      overlay; bottom-left text block with orange 60×60 number badge
      (Fira Sans 24px white, sequential 1–4), Lora 28px title, orange
      uppercase date; prev/next + numbered dots with active state
- [ ] Blog entries: 4 cards on `#fafafa` (padding 2em 0, margin-bottom
      40px), `#e6e6e6` dividers; orange uppercase category rows; 28px
      italic Lora titles; media variants (2-image gallery carousel /
      single image ×2 / video placeholder with play + overlay); vertical
      share rail; meta row (date · by Stephy · comments); drop-cap first
      paragraph; italic blockquote; numbered + bulleted lists;
      "Continue Reading" italic link
- [ ] Pagination: square `«` 1 2 3 4 `»`, page 1 active orange; hover
      orange
- [ ] Sidebar on white: search box (`#fafafa`, orange square button),
      About Me (centered italic heading + orange underline bar, 350px
      photo, social icons), Recent Post (4 distinct `#fafafa` cards with
      120×100 thumbs), Categories (4 dashed-divider links), Video Post
      (250px + play), Tags (19 uppercase links), Gallery (8 tiles 50% ×
      170px + hover overlay), Blockquote, Paragraph, Subscribe (email
      input + orange pill button + success/error states)
- [ ] Instagram strip: "Instagram" heading + 8 tiles (12.5% × 200px,
      responsive) with hover overlay
- [ ] Footer `#F6F6F6` with 3 columns (Navigational, Recent Post, Tags) + paraphrased copyright (no ColorLib attribution)
- [ ] Back-to-top button smooth-scrolls
- [ ] Placeholder images use
      `https://picsum.photos/seed/feature-<n>/<w>/<h>` (4 hero slides
      ~1600×650, 4 blog images 400×400 or wider, 4 recent-post thumbs
      120×100, 8 gallery tiles 340×170, 8 instagram tiles 200×200,
      author 350×350, 2 video covers); no assets copied
- [ ] Icons from lucide-react (Search, Calendar, User, MessageCircle,
      Share2, Facebook, Twitter, Play, Tag, Folder, Sparkle, ArrowUp)
- [ ] Dark-mode toggle present per repo conventions (dark: variants)
- [ ] README status table regenerated after merge (`npm run readme:status`);
      mark TEMPLATES.md line 241 `[x]` when done
