# Template: Savor (Food Blog Template)

## Purpose

Savor is a single-page food-blog template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Foodeiblog" website
template design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Foodeiblog" — food blog / magazine template
  (source: https://colorlib.com/wp/template/foodeiblog/). TEMPLATES.md has TWO
  copies of this item (lines 263 and 1782) — mark BOTH when done.
- **Preview URL:** https://preview.colorlib.com/theme/foodeiblog/ — HTTP 200,
  full rendered DOM analyzed (title: "Foodeiblog | Template"); stylesheets
  `css/style.css` (main), plus bootstrap.min.css, font-awesome.min.css,
  elegant-icons.css, owl.carousel.min.css, slicknav.min.css. Fonts are
  self-hosted in the demo via `/cf-fonts/` (Nunito Sans 300–800 + Unna
  400/700); our recreation loads them from Google Fonts instead.
  Cross-checked against the TEMPLATES.md screenshot
  (`foodeiblog-free-template.jpg`, viewed in browser) — designs match. The
  demo brands itself "foodeiblog"; our recreation uses the NEW name **Savor**.
- **Section order (1:1):** Preloader (`#preloder`) → Mobile menu overlay
  (hamburger: logo, nav, author blurb + social, subscribe) → Header: top row
  (hamburger button, main nav HOME / RECIPES / DINNER / DESSERTS / PAGES with
  mega-dropdown — Categories Grid, Categories List, Single Post, Sign In,
  Typography, About, Contact; search form; subscribe button) + logo row
  (centered cursive wordmark + social icons) → Hero slider (owl carousel, 4
  slides; each slide = left wide featured post + right stacked narrow posts;
  content bottom-left: 110×110 dark date block "08" + "Aug", uppercase
  orange category label, big serif title, "by Admin · 3 min read · 20
  Comment" meta; circular prev/next arrows) → Categories section (4 square
  category tiles with hover text) → Blog post grid (mixed card variants:
  standard pic+meta+text, plain, small; each post has date badge, category,
  serif title, excerpt, "by Admin" byline, share icons; centered LOAD MORE
  button) + Sidebar (About Me with author photo + "Hi every one! I,m Lena
  Mollein." blurb, Follow/social widget, Featured posts widget (large + list),
  ad banner, Categories list, Subscribe newsletter form) → Footer (full-width
  Instagram strip with avatar block + square photo tiles, footer text with
  logo + social, copyright bar).
- **Design tokens extracted from the live preview CSS (`css/style.css`):**
  - Brand **orange `#f4952f`** (34 uses) — category labels/dates, link
    hovers, active nav underline, `.site-btn` background, subscribe button,
    hero label text.
  - Ink **`#111111`** — headings and nav links (uppercase, weight 700);
    body text **`#444444`**; muted meta **`#888888`** (bylines, counts).
  - Light surfaces: page white `#ffffff`; **`#f5f5f5`** (footer bg, light
    blocks); **`#f2f2f2`** / **`#ebebeb`** (load-more button bg, chips);
    borders **`#e1e1e1`**.
  - Fonts: body/nav/meta **"Nunito Sans", sans-serif** (300–800, uppercase
    letter-spaced nav); headings/post titles **"Unna", serif** (400/700).
  - Buttons: `.site-btn` — 15px white text, weight 800, uppercase, padding
    13px 26px 12px, background `#f4952f`, no border, SQUARE corners;
    `.load__more__btn a` — 14px `#111111`, weight 700, uppercase, padding
    12px 125px 10px, background `#ebebeb`.
  - Radii: square everywhere except circles — hero slider arrows (50×50,
    `rgba(0,0,0,0.3)` bg, white 30px glyph), author/avatar photos.
  - Hero: `.hero__inside__item` height 633px; date block 110×110 (span 42px +
    p 24px); category label 12px uppercase `#f4952f`; owl arrows absolutely
    positioned left/right 30px, top 50%.
  - Spacing: footer `padding-top: 20px`, bg `#f5f5f5`; instagram tiles 305px
    tall; section paddings via Bootstrap `spad`/`spad`-style rhythm.
- **Visual design (from screenshot):** clean white food-magazine aesthetic —
  cursive orange wordmark logo; orange accents (subscribe button, active nav
  underline, social icons, date/category text); hero slider with dark-overlay
  date badge and big serif white titles over food photography; row of four
  square category tiles below the hero; blog cards with square date box;
  About Me sidebar widget with circular author photo; footer Instagram strip.
  Serif (Unna) titles vs uppercase Nunito Sans meta labels.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/savor-<n>/<w>/<h>`); icons → lucide-react (social brand
  icons as inline SVG per repo rule); Nunito Sans + Unna via Google Fonts
  `<link>`; no assets copied. Copy paraphrased but same content kinds (post
  titles, categories, bylines, widget headings, subscribe form).

Savor lives in `apps/savor` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header and navigation

The system SHALL render a top header with a hamburger button, a main
navigation bar, a search form, a subscribe button, a centered wordmark logo,
and a row of social icons.

#### Scenario: Top row content

- **GIVEN** the Savor page is rendered
- **WHEN** the header is displayed
- **THEN** the top row SHALL show a hamburger menu button on the left
- **AND** the top row SHALL show main nav links Home, Recipes, Dinner,
  Desserts, and Pages in uppercase letter-spaced text
- **AND** the Pages link SHALL open a dropdown with sub-links (e.g. Categories
  Grid, Single Post, About, Contact)
- **AND** the top row SHALL show a search input with an icon button and a
  "Subscribe" button on the right

#### Scenario: Logo row

- **GIVEN** the Savor page is rendered
- **WHEN** the header is displayed
- **THEN** a centered cursive-style "Savor" wordmark logo SHALL appear
- **AND** a row of social icons SHALL appear beside the logo

### Requirement: Mobile menu

The system SHALL render a slide-in mobile menu with navigation, an author
blurb, social links, and a subscribe prompt.

#### Scenario: Mobile menu content

- **GIVEN** the Savor page is rendered on a narrow viewport
- **WHEN** the hamburger button is activated
- **THEN** a slide-in menu SHALL open showing the nav links, a short author
  blurb with social icons, and a subscribe call-to-action
- **AND** the menu SHALL close when the close control is activated

### Requirement: Hero slider

The system SHALL render a full-width hero carousel of blog-post slides with
overlaid content and prev/next controls.

#### Scenario: Hero slide content

- **GIVEN** the Savor page is rendered
- **WHEN** the hero section is displayed
- **THEN** each slide SHALL show a large food photo (about 633px tall) with a
  dark overlay at the bottom
- **AND** each slide SHALL show a square date block (e.g. "08" over "Aug"),
  an uppercase orange category label (e.g. "Vegan Desserts"), a large serif
  post title, and a byline with read time and comment count
- **AND** the hero SHALL cycle through at least 3 slides with accessible
  prev/next controls (aria-labels)

### Requirement: Category tiles

The system SHALL render a row of square category tiles with hover text.

#### Scenario: Category tiles

- **GIVEN** the Savor page is rendered
- **WHEN** the categories section is displayed
- **THEN** the section SHALL show at least 3 square image tiles (e.g. Dinner,
  Desserts, Vegan) with a category name revealed on hover

### Requirement: Blog post grid

The system SHALL render the blog feed as a grid of post cards with a load-more
control.

#### Scenario: Post card variants

- **GIVEN** the Savor page is rendered
- **WHEN** the blog grid is displayed
- **THEN** the grid SHALL show post cards in mixed variants (standard card
  with image + text, plain text card, small card)
- **AND** each card SHALL show a date badge, an orange category label, a serif
  title, an excerpt, and a "by <Author>" byline
- **AND** at least one card SHALL show share icons (Facebook, Twitter,
  Pinterest, etc.)

#### Scenario: Load more

- **GIVEN** the Savor page is rendered
- **WHEN** the blog grid bottom is reached
- **THEN** a centered "Load More" button SHALL appear (grey `#ebebeb`
  background, uppercase dark text)

### Requirement: Sidebar widgets

The system SHALL render a sidebar with About Me, Follow, Featured Posts,
Categories, and Subscribe widgets.

#### Scenario: About Me widget

- **GIVEN** the Savor page is rendered
- **WHEN** the sidebar is displayed
- **THEN** the About Me widget SHALL show a circular author photo and a short
  bio paragraph (e.g. "Hi every one! I'm Lena Mollein.")

#### Scenario: Follow and Featured widgets

- **GIVEN** the Savor page is rendered
- **WHEN** the sidebar is displayed
- **THEN** the Follow widget SHALL show a row of social icons
- **AND** the Featured Posts widget SHALL show one large featured post plus a
  list of smaller recent posts (thumbnail, title, byline)

#### Scenario: Categories and Subscribe widgets

- **GIVEN** the Savor page is rendered
- **WHEN** the sidebar is displayed
- **THEN** the Categories widget SHALL list category links with counts
- **AND** the Subscribe widget SHALL show an email input and an orange submit
  button labeled "Subscribe"
- **AND** submitting the form SHALL NOT navigate away (prevented default) and
  SHALL show a confirmation message

### Requirement: Footer

The system SHALL render a footer with an Instagram strip, footer text with
social links, and a copyright bar.

#### Scenario: Instagram strip

- **GIVEN** the Savor page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show an Instagram strip with an avatar block
  (handle + follower text) and a row of at least 6 square photo tiles

#### Scenario: Footer text and copyright

- **GIVEN** the Savor page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show the wordmark logo, a row of social icons, and
  a copyright line (current year, "All rights reserved")

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `apps/savor` created from a blog/landing app pattern, package renamed to
      `@free-react-templates/savor`
- [ ] TDD: tests written first (red), then implementation (green)
- [ ] 100% coverage lines/functions/branches/statements (`npm run
test:coverage -- --project apps/savor` or `scripts/verify-app.sh savor`)
- [ ] Brand orange `#f4952f` + ink `#111111` + body `#444444` + muted
      `#888888` in `@theme`; Nunito Sans (body) + Unna (headings) via Google
      Fonts link
- [ ] Section order matches the original 1:1 (see Design reference)
- [ ] Hero carousel implemented with slide switching and accessible controls
      (aria-labels); square date block + orange category label + serif title
- [ ] Square corners throughout; only slider arrows and author photos are
      circular
- [ ] Placeholder images via `picsum.photos/seed/savor-<n>/<w>/<h>`; no assets
      copied; social brand icons as inline SVG
- [ ] PR description: source template, preview URL, design tokens, what
      differs
- [ ] After merge: BOTH TEMPLATES.md Foodeiblog copies (lines 263 + 1782)
      `[~]` → `[x]` + Surge URL (`free-react-templates-savor.surge.sh`) +
      homepage + `npm run readme:status`
