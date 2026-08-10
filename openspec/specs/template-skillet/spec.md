# Template: Skillet (Food Blog)

## Purpose

Skillet is a single-page food-blog landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Bueno" food blog website template
(source: https://colorlib.com/wp/template/bueno/), built under a DIFFERENT
name (Skillet — a cookware-themed brand, re-branded) per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-10): the live preview
> `https://preview.colorlib.com/theme/bueno/` returns HTTP 200 (38.5 KB
> HTML, single all-in-one `style.css` 50 KB — the analysis below is from
> that live demo; the TEMPLATES.md screenshot
> (`bueno-free-template.jpg`, 1200×946) was viewed in a browser and matches
> the live render: dark top bar with socials + search, centered script
> logo, nav bar, 3-panel hero slider with a white double-bordered card,
> category row, post grid).

The reference is a clean white food blog: a dark photo top bar (95px,
`header.jpg` background under a `rgba(0,0,0,0.69)` overlay) with 6 social
icons left and a search form right; a centered script logo ("Bueno — Food
Blog"); a sticky nav (Home / About Us / Pages ▾ / Recipes ▾ / Blog /
Contact + "Login / Register"); a slide-in "Treading Post" drawer (fixed,
off-canvas right, `#dadfe5`, 6 mini posts); a full-width hero slider (4
slides: food photo + dark overlay + centered white card with a 2px sage
inner border: sage post-tag, 30px title, date/author meta, PREV/NEXT sage
arrows); a 3-card category row (photo + centered white box with 2px sage
border, hover fills sage); 2 alternating big posts (thumb / centered
content with excerpt + sage "Read More" square button); a 3-post standard
grid next to a sidebar (ad widget + 5 mini posts); a 10-image Instagram
strip (hover: dark overlay + sage zoom "+" square); and a light footer
(copyright left, nav right with 3px sage underline on hover). Skillet
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets — seeded picsum photos,
Google Fonts, lucide-react icons).

## Design reference (replication findings)

- **Original:** ColorLib "Bueno" — free Food Blog website template (page
  title "Bueno - Food Blog HTML Template"). TEMPLATES.md has TWO dup rows
  for the same source: line 250 under **Blog (60)** and line 2851 under
  **Startup (17)** — same source, ONE item; mark BOTH `[x]` at ship time.
  The recreation brands itself **Skillet** but keeps the same section
  structure, copy kinds and interaction patterns.
- **Live preview DOM analyzed (verified 2026-08-10):**
  `https://preview.colorlib.com/theme/bueno/` (HTTP 200, 38.5 KB).
  Bootstrap 4 + jQuery + owl.carousel single page; all links are `href="#"`.
- **Visual design (TEMPLATES.md screenshot `bueno-free-template.jpg`,
  1200×946, viewed in browser 2026-08-10 + live render):** stark white
  page, black/charcoal text, one muted earthy sage-green accent `#b0c364`
  (tags, borders, buttons, hover states). Top: dark charcoal strip with
  social icons + search. Centered script logo with a small sans-serif
  subtitle. Nav bar with dropdowns. Hero = 3-panel slider: side food
  photos with sage "PREV"/"NEXT" tags, center white card with a
  double-line border over a salad photo ("HEALTHY FOOD" green uppercase,
  "Chicken Salad" serif title, "JULY 11, 2018 | BY JULIA STILES" meta).
  Below: 3 category cards, big post rows, 3-post grid, Instagram strip.
  Clean, minimalist, content-focused rustic-yet-elegant aesthetic.
- **Section order (1:1, verified from live DOM):**
  1. `div.preloader` (fixed overlay, 5 `.bubble` elements + "Cooking in
     progress.." text — an animated preloader shown while the page loads;
     recreation can render it briefly on mount and fade out).
  2. `header.header-area`:
     - `.top-header-area.bg-img.bg-overlay` (height 95px, inline
       `background-image: url(img/bg-img/header.jpg)`, overlay
       `rgba(0,0,0,0.69)`): left `.top-social-info` — 6 FontAwesome
       social icons (Pinterest, Facebook, Twitter, Dribbble, Behance,
       Linkedin); right `.top-search-area` — form with transparent input
       (white text, italic placeholder "Search", `border-bottom: 2px solid
#817773`, height 50px) + transparent search button.
     - `.logo-area` (padding 50px 30px, centered): logo image
       `img/core-img/logo.png` (ASSET — do not copy; per screenshot it is
       a black script wordmark "Bueno" with a small "Food Blog" subtitle
       below → recreation: script-font text logo "Skillet" + subtitle).
     - `.bueno-main-menu#sticker` (sticky): classy-nav — links Home,
       About Us, Pages ▾ (dropdown: Home, Catagory, Catagory Post, Single
       Post, Recipe), Recipes ▾ (MEGAMENU: 4 rows × Bread, Breakfast,
       Meat, Fastfood, Salad, Soup), Blog, Contact (`#404040`, 15px,
       weight 600, hover `#b0c364`); right `.login-area` "Login /
       Register" link (`#7a7a7a`, 16px 500, hover sage).
  3. `div.treading-post-area#treadingPost` — FIXED off-canvas drawer:
     width 480px, `right: -700px` (slides in, transition 800ms), z-index
     9999, bg `#dadfe5`, padding 50px, scrollable, `.close-icon` (✕) top
     right; `h4` "Treading Post" (16px, margin-bottom 50px) + 6 ×
     `.single-blog-post.style-1.d-flex` (thumb 40% + `.blog-content`
     padding-left 15px: `.post-tag` "The Best", `.post-title` 16px,
     `.post-meta`). SOURCE QUIRK: the 6 posts repeat 3 titles twice —
     "The Best Friend eggs with ham", "The Best Mushrooms with pork
     chop", "The Best Birthday cake with chocolate" ×2 each; recreation
     should use 6 DISTINCT titles of the same kind.
  4. `div.hero-area` (padding 0 30px): `.hero-post-slides.owl-carousel` —
     4 × `.single-slide` (full-width `img/bg-img/1..4.jpg` photo +
     `::after` overlay `rgba(0,0,0,0.5)`; centered `.blog-content-bg`
     WHITE card 320×360 with `::after` 2px `#b0c364` border inset 25px):
     `.post-tag` "Healthy Food" (12px 600 sage uppercase) + `.post-title`
     30px ("Chicken Salad") + `.post-meta` (`.post-date` "July 11, 2018"
     / `.post-author` "By Julia Stiles", "/" separator). Owl PREV/NEXT
     arrows = sage tags "PREV"/"NEXT" (per screenshot). SOURCE QUIRK: all
     4 slides repeat the same content (Healthy Food / Chicken Salad) —
     recreation should use 4 distinct dish titles of the same kind.
  5. `div.post-catagory.section-padding-100-0.mb-70`: 3 ×
     `.single-post-catagory` (photo bg + centered `.catagory-content-bg`
     white box height 128px with `::after` 2px sage border inset 15px,
     text center; HOVER: box + content fill `#b0c364`, text white, card
     `box-shadow 0 5px 70px rgba(0,0,0,0.25)`): `.post-tag` "The Best" +
     `.post-title` 24px — "Healthy Food" / "Organic Cuisine" /
     "Vegetarian Food".
  6. `div.big-posts-area.mb-50`: 2 big posts, alternating rows — `.big-post-thumbnail` (photo) and `.big-post-content.text-center` (`.post-tag` "The Best" sage, `.post-title` 24px, `.post-meta`, `p` excerpt 13px, `.btn.bueno-btn` "Read More"): "The Best Friend eggs with ham" (photo 1st) then "The Best Steak with boiled vegetables" (content 1st).
  7. `div.bueno-post-area.mb-70` (main column, sits beside the sidebar in
     a `.row`): 3 × `.single-blog-post.style-1` (thumb 40% + content 60%
     padding-left 30px: `.post-tag` sage, `.post-title` 24px,
     `.post-meta`, `p` excerpt lorem, `.btn.bueno-btn` "Read More"):
     "The Best Friend eggs with ham" / "The Best Mushrooms with pork
     chop" / "The Best Birthday cake with chocolate".
  8. `div.sidebar-area` (right column): `.single-widget-area.add-widget.mb-30`
     (ad image `img/bg-img/add.png`) + `.single-widget-area.post-widget`
     — 5 × `.single-post-area.d-flex` (thumb 30% + content 70%
     padding-left 20px: `.post-title` 14px, `.post-meta` 9px): "Friend
     eggs with ham" / "Burger with fries" / "Avocado & Oisters" /
     "Tortilla prawns" / "Burger with fries" (SOURCE QUIRK: "Burger with
     fries" repeats — recreation should use a distinct 5th title).
  9. `div.instagram-feed-area.d-flex.flex-wrap`: 10 ×
     `.single-instagram` (flex 0 0 20%, overflow hidden; HOVER: `::after`
     overlay `rgba(0,0,0,0.75)`, img `scale(1.1)`, `.img-zoom` sage 62px
     square with "+" glyph, white, centered).
  10. `footer.footer-area` (padding 50px 0): left `.copywrite-text`
      (12px `#666666`): "Copyright © <year> All rights reserved | This
      template is made with ♥ by Colorlib"; right `.footer-nav` ul
      (12px `#666666`, margin 0 10px; active/hover: sage color + 3px
      sage `::after` underline): Home, Recipes, About Us, Blog, Contact.
- **Design tokens extracted from the live CSS (`style.css`, verified
  2026-08-10):**
  - Sage green **`#b0c364`** — THE brand color (40 uses): `.post-tag`
    text, `.bueno-btn` bg, catagory-card border + hover fill, hero-card
    border, title hover, footer underline, instagram zoom square, search
    icon hover.
  - White **`#ffffff`** — page bg, hero/category card bg.
  - Heading color **`#272727`** (h1–h6, Montserrat 600, line-height 1.3).
  - Body/meta color **`#7a7a7a`** (p 14px 500 line-height 2; post-meta
    12px 600 uppercase).
  - Nav link **`#404040`** (15px 600); login link `#7a7a7a` 16px 500.
  - Footer text **`#666666`** (12px 400).
  - Drawer bg **`#dadfe5`** (treading-post-area); newsletter-widget input
    border `#dadfe5` (not used on this page — skip).
  - Search input underline **`#817773`** (2px).
  - Overlays: **`rgba(0,0,0,0.69)`** top bar, **`rgba(0,0,0,0.5)`** hero
    slide, **`rgba(0,0,0,0.75)`** instagram hover, **`rgba(0,0,0,0.25)`**
    category hover shadow; `.bueno-btn` hover bg **`#000000`**.
  - Fonts: **Montserrat** ONLY (`font-family: "Montserrat", sans-serif`
    on body AND h1–h6; body 14px 500 lh 2; headings 600 lh 1.3).
    Montserrat IS on Google Fonts — use it directly (weights 400, 500,
    600). The script logo is an image asset → recreation uses a Google
    script font (e.g. **Dancing Script** or **Great Vibes**) for the
    wordmark + Montserrat for the "Food Blog" subtitle.
  - Buttons (`.btn.bueno-btn`): bg `#b0c364`, white text, **square**
    (border-radius 0), min-width 160px, height 50px, line-height 50px,
    padding 0 30px, 14px 500; hover: bg `#000000`.
  - Post-tag: 12px 600 uppercase sage, margin-bottom 15px (5px in the
    small cards).
  - Post-meta: 12px 600 uppercase `#7a7a7a`; "/" separator
    (`::after` content "/" at right -14px) between date and author.
  - Cards: white, centered, with `::after` 2px `#b0c364` border inset
    25px (hero, 320×360) / 15px (category, height 128px).
  - Hero slide: full-width photo + `rgba(0,0,0,0.5)` overlay; owl
    carousel with side-slide peeking + PREV/NEXT sage tags.
  - Rhythm: `.section-padding-100-0` = pt 100px pb 0; spacing mb-70 /
    mb-50 / mb-30 / mb-20; `.single-blog-post.style-1` thumb 40% /
    content 60% (padding-left 30px); sidebar mini posts thumb 30% /
    content 70% (padding-left 20px); instagram items 20% each.
  - Typography scale: hero card title 30px; category title 24px; big
    post title 24px; standard post title 24px; drawer post title 16px;
    sidebar title 14px; drawer h4 16px.
- **Recreation decisions:** Tailwind re-implementation of the
  Bootstrap-4 grid (NO Bootstrap dependency); owl-carousel → a small
  stateful slider (useState index, PREV/NEXT sage arrow tags, optional
  auto-advance — no owl.carousel dependency); treading drawer → stateful
  off-canvas panel (open button in the nav area, close ✕, `#dadfe5` bg,
  slide-in transition); megamenu → simple dropdown menus (Recipes:
  Bread, Breakfast, Meat, Fastfood, Salad, Soup; Pages: Home, Catagory,
  Catagory Post, Single Post, Recipe); FontAwesome → lucide-react
  (Search, X, Plus, Heart) + inline SVG brand icons for the 6 socials
  (lucide has NO brand icons); preloader → brief on-mount overlay with
  animated bubbles + "Cooking in progress.." that fades out; photos →
  seeded picsum placeholders (`picsum.photos/seed/skillet-<n>/<w>/<h>` —
  source images must not be copied); Google Fonts Montserrat (+ Dancing
  Script for the logo wordmark) via `<link>` in `index.html`; brand
  "Bueno" → "Skillet" (script text logo + "Food Blog" subtitle);
  document title "Skillet — Food Blog Template"; nav links may be `#`
  anchors (single-page recreation of the demo); fix source repetitions
  (4 identical hero slides → 4 distinct dishes; 6 drawer posts with 3
  titles ×2 → 6 distinct; sidebar "Burger with fries" ×2 → distinct 5th).

Skillet lives in `apps/skillet` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Preloader

The system SHALL show a brief loading overlay with animated bubbles and
"Cooking in progress.." text on mount, then fade it out.

#### Scenario: Preloader on load

- **GIVEN** the Skillet page is rendered
- **WHEN** the page loads
- **THEN** a preloader overlay SHALL be shown with five animated bubbles
  and the text "Cooking in progress.."
- **AND** the preloader SHALL disappear (fade out) shortly after load
  completes

### Requirement: Top header bar

The system SHALL render a dark photo top bar with social icons on the
left and a search form on the right.

#### Scenario: Top bar content

- **GIVEN** the page is rendered
- **THEN** a 95px-tall top bar SHALL be shown with a food-photo
  background under a `rgba(0,0,0,0.69)` overlay
- **AND** six social icon links SHALL be shown on the left (Pinterest,
  Facebook, Twitter, Dribbble, Behance, Linkedin — inline SVG brand
  icons, white)
- **AND** a search form SHALL be shown on the right with a transparent
  input (italic placeholder "Search", white text, 2px `#817773` bottom
  border) and a search icon button

### Requirement: Logo and navigation

The system SHALL render a centered script logo and a sticky navigation
bar with dropdowns and a login link.

#### Scenario: Logo and nav

- **GIVEN** the header area is rendered
- **THEN** a centered logo SHALL be shown: the wordmark "Skillet" in a
  script font (black) with the subtitle "Food Blog" in small sans-serif
  below it
- **AND** a sticky nav bar SHALL be shown below the logo with links
  Home, About Us, Pages, Recipes, Blog, Contact (`#404040`, 15px 600,
  hover sage `#b0c364`)
- **AND** the Pages link SHALL open a dropdown (Home, Catagory, Catagory
  Post, Single Post, Recipe)
- **AND** the Recipes link SHALL open a megamenu-style dropdown listing
  Bread, Breakfast, Meat, Fastfood, Salad, Soup
- **AND** a "Login / Register" link SHALL be shown at the right
  (`#7a7a7a`, 16px 500, hover sage)

### Requirement: Trending drawer

The system SHALL render a slide-in "Treading Post" drawer listing six
trending posts.

#### Scenario: Trending drawer behavior

- **GIVEN** the page is rendered
- **WHEN** the user opens the trending drawer (trigger in the nav area)
- **THEN** a fixed off-canvas panel SHALL slide in from the right
  (width ~480px, bg `#dadfe5`, padding 50px, z-index above all)
- **AND** the panel SHALL show a 16px heading "Treading Post" and a
  close icon (✕) at the top right
- **AND** six mini posts SHALL be listed, each with a thumbnail (40%),
  a sage post-tag "The Best", a 16px title, and date/author meta
- **AND** the six titles SHALL be distinct (source repeats 3 titles ×2 —
  fix in recreation)
- **AND** clicking the close icon SHALL slide the panel back out

### Requirement: Hero slider

The system SHALL render a full-width hero slider of four food posts,
each with a centered white card over the photo.

#### Scenario: Hero slides

- **GIVEN** the hero section is rendered
- **THEN** a carousel SHALL be shown with four slides
- **AND** each slide SHALL show a full-width food photo under a
  `rgba(0,0,0,0.5)` overlay
- **AND** a centered white card (320×360) with a 2px sage `#b0c364`
  inner border SHALL be shown over the photo
- **AND** the card SHALL contain a 12px sage uppercase post-tag (e.g.
  "Healthy Food"), a 30px title (a dish name), and post-meta
  (date "July 11, 2018" / author "By Julia Stiles", "/" separated)
- **AND** sage "PREV" / "NEXT" controls SHALL cycle through the slides
- **AND** the four slide titles SHALL be distinct (source repeats
  "Chicken Salad" on all four — fix in recreation)

### Requirement: Category cards

The system SHALL render three category cards, each a photo with a
centered white box that fills sage on hover.

#### Scenario: Category row

- **GIVEN** the category section is rendered
- **THEN** three category cards SHALL be shown in a row (stacking on
  mobile)
- **AND** each card SHALL show a food photo with a centered white box
  (height 128px) bordered by a 2px sage inner frame
- **AND** each box SHALL contain the sage post-tag "The Best" and a 24px
  title: Healthy Food / Organic Cuisine / Vegetarian Food
- **WHEN** a card is hovered
- **THEN** the white box SHALL fill sage `#b0c364`, the text SHALL turn
  white, and a soft shadow SHALL appear

### Requirement: Big posts

The system SHALL render two alternating big post rows with photo,
centered content, and a Read More button.

#### Scenario: Big post rows

- **GIVEN** the big posts section is rendered
- **THEN** two big post rows SHALL be shown, alternating
  photo/content sides
- **AND** each content side SHALL be centered with a sage post-tag "The
  Best", a 24px title, date/author meta, a short excerpt paragraph, and
  a sage square "Read More" button (min-width 160px, height 50px,
  white text, hover bg black)
- **AND** the titles SHALL be "The Best Friend eggs with ham" and "The
  Best Steak with boiled vegetables"

### Requirement: Post grid with sidebar

The system SHALL render a main column of three standard posts beside a
sidebar with an ad widget and a mini post widget.

#### Scenario: Post grid

- **GIVEN** the posts area is rendered
- **THEN** three standard posts SHALL be shown in the main column
  (thumbnail 40% left, content 60% right: sage post-tag, 24px title,
  meta, excerpt, square "Read More" button): "The Best Friend eggs with
  ham", "The Best Mushrooms with pork chop", "The Best Birthday cake
  with chocolate"
- **AND** the sidebar SHALL show an ad widget (image) on top and a
  post-widget below with five mini posts (thumbnail 30% + content 70%:
  14px title, 9px meta): "Friend eggs with ham", "Burger with fries",
  "Avocado & Oisters", "Tortilla prawns", and a distinct fifth title
  (source repeats "Burger with fries" — fix in recreation)
- **AND** the layout SHALL collapse to stacked columns on mobile

### Requirement: Instagram strip

The system SHALL render a strip of ten Instagram images with a hover
zoom effect.

#### Scenario: Instagram feed

- **GIVEN** the instagram section is rendered
- **THEN** ten square images SHALL be shown in a row (five across on
  desktop)
- **WHEN** an image is hovered
- **THEN** a `rgba(0,0,0,0.75)` overlay SHALL appear, the image SHALL
  scale to 1.1, and a sage 62px square with a white "+" icon SHALL be
  shown in the center

### Requirement: Footer

The system SHALL render a light footer with copyright text on the left
and a nav on the right.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **THEN** the copyright line SHALL be shown on the left (12px
  `#666666`): "Copyright © <current year> All rights reserved | This
  template is made with ♥ by Skillet"
- **AND** a footer nav SHALL be shown on the right with links Home,
  Recipes, About Us, Blog, Contact (12px `#666666`)
- **AND** the active/hover link SHALL turn sage `#b0c364` with a 3px
  sage underline

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-skillet`
- [ ] `scripts/verify-app.sh skillet` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: preloader → top bar (socials + search) → logo →
      sticky nav (Pages ▾ / Recipes ▾ megamenu / Login Register) →
      trending drawer → hero slider (4 slides) → category cards (3) →
      big posts (2 alternating) → post grid (3 posts + sidebar: ad +
      5 mini posts) → instagram strip (10) → footer
- [ ] Brand color in `@theme`: sage `#b0c364` (post-tags, buttons,
      card borders + hover fills, footer underline, instagram zoom);
      heading `#272727`, body/meta `#7a7a7a`, nav `#404040`, footer
      `#666666`, drawer bg `#dadfe5`, search underline `#817773`;
      used via Tailwind classes
- [ ] Montserrat (400/500/600) + Dancing Script (logo wordmark) via
      Google Fonts `<link>` in `index.html`; document title "Skillet —
      Food Blog Template"
- [ ] Preloader: animated bubbles + "Cooking in progress..", fades out
      on mount
- [ ] Top bar: 95px, photo bg + `rgba(0,0,0,0.69)` overlay, 6 inline-SVG
      social icons left, search form right (italic "Search" placeholder,
      2px `#817773` underline, white text)
- [ ] Logo: script "Skillet" + "Food Blog" subtitle, centered; sticky
      nav Home / About Us / Pages ▾ / Recipes ▾ / Blog / Contact +
      "Login / Register" right; dropdowns for Pages and Recipes
      (Bread, Breakfast, Meat, Fastfood, Salad, Soup)
- [ ] Trending drawer: slides in from right, `#dadfe5`, 16px "Treading
      Post" heading, close ✕, 6 DISTINCT mini posts (thumb 40% + tag +
      16px title + meta)
- [ ] Hero: carousel of 4 slides, photo + `rgba(0,0,0,0.5)` overlay,
      centered white card (320×360) with 2px sage inner border, sage
      tag + 30px dish title + date/author meta; PREV/NEXT sage controls;
      4 DISTINCT titles
- [ ] Categories: 3 cards, white box (128px) with 2px sage frame,
      "The Best" tag + 24px title (Healthy Food / Organic Cuisine /
      Vegetarian Food); hover → sage fill, white text, shadow
- [ ] Big posts: 2 alternating rows, centered content (tag + 24px title + meta + excerpt + square sage Read More, hover black)
- [ ] Post grid + sidebar: 3 standard posts (40/60 split) + ad widget +
      5 mini posts (30/70 split, 14px titles) with distinct titles
- [ ] Instagram: 10 images, 5-up; hover → `rgba(0,0,0,0.75)` overlay +
      scale 1.1 + sage "+" zoom square
- [ ] Footer: copyright left ("made with ♥ by Skillet"), nav right
      (Home / Recipes / About Us / Blog / Contact), sage hover + 3px
      sage underline
- [ ] Square buttons (radius 0), min-width 160px, height 50px, white
      text, hover bg black
- [ ] Placeholder images via `picsum.photos/seed/skillet-<n>/<w>/<h>`,
      icons from lucide-react (Search, X, Plus, Heart) + inline SVG
      brand icons for socials — no copied assets; brand "Skillet"
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` on BOTH dup rows (lines 250 and 2851) +
      surge URL + `npm run readme:status` done by implementer at ship
      time
