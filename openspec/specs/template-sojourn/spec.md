# Template: Sojourn (Blog Template)

## Purpose

Sojourn is a single-page blog template in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Sasha" website template
design (see TEMPLATES.md), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sasha" — travel/lifestyle blog template
  (source: https://colorlib.com/wp/template/sasha/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/sasha/
  (HTTP 200). The default page is a demo-showcase landing; the real blog home
  is `index-01.html` ("Home page 01") — live DOM fetched and parsed, plus
  `assets/css/style.css`, `header.css` and `themes.css` for tokens. Screenshot
  `sasha-free-template.jpg` also reviewed visually (clean monochrome showcase,
  sneaker hero, "RESPONSIVE & CLEAN BLOGGING TEMPLATE", 5 home pages).
- **Section order (1:1, from the DOM of `index-01.html`):**
  1. Header: `header-top` — centered logo/wordmark + hamburger trigger
     (`side-menu-trigger`, 32px) that opens a fixed left slide-in panel
     (`sidebar-menu`, 300px white, full-height, centered Lato links, active
     item rust). Below it `header-bottom` — dark `#171717` bar with the nav
     menu (Home, Home 01–05, Features, Categories, About, Contact).
  2. Banner slider (`banner-slider-01`, 50vh): full-bleed image slides with a
     dark overlay (`rgba(0,0,0,0.25)`), centered content per slide — category
     tag ("Lifestyle", white, bordered), white uppercase Poppins H2 title
     (34px), and a white "Read More" button. Two slides: "Natural summer" and
     "Cruise to Alaska".
  3. Main content (`main-content` → `default-posts`): centered 2-column post
     grid (flex, `col-sm-6`), 8 posts — "Cruise to Alaska" (full-width) ·
     "Russian River" · "Workout for the Road" · "California 'Tunnel Tree'" ·
     "Hawaiian Prints" · "What to Explore in Key West" (full-width) ·
     "ROAD TRIP TRAVEL GEAR" · "Cruising into Spring". Each post card:
     thumbnail (mb 32px; 44px on full-width), category label, Poppins H2
     title (24px; 32px full-width), `post-meta` line (11px `#999`: date ·
     comments count · social icons), Raleway excerpt (`margin: 19px 0`), and
     a rust "Read more" button. Full-width cards span the whole grid.
  4. Sidebar (`aside.sidebar`, right column, centered), widgets top to bottom:
     a. About me (`widget_about_author`): avatar, name, short bio.
     b. Newsletter (`widget_newsletter`): email input (1px `#e1e1e1` border,
     radius 0) + full-width rust "submit" button.
     c. Instagram (`widget_insta_feed`): 106px thumbnail grid; hover → dark
     `rgba(0,0,0,0.5)` overlay + `scale(1.1) skew(5deg)` zoom.
     d. Recent Posts (`widget_recent_posts`): media rows — 100px thumbnail +
     14px title + date ("May 12, 2017").
     e. Ad widget (`widget_ad`): placeholder banner box.
  5. Section widget (`section-widget`): full-width Instagram feed strip
     (6 images; hover dark overlay).
  6. Footer (`site-footer colophon`): Raleway, container row with social icons
     (`footer-social pull-right`) + copyright line (replace ColorLib credit
     with monorepo credit, e.g. "© <year> Sojourn. All rights reserved.").
- **Design tokens extracted from the preview CSS (`style.css` /
  `header.css` / `themes.css`):**
  - Primary brand **rust `#af7152`** (`.btn` background, hover link color,
    active nav item, newsletter submit button).
  - Dark **`#171717`** (header-bottom bar, banner-button hover background).
  - Text: `#000` (titles), `#999` (post-meta), `#aaa` (social icons),
    `#c0c0c0` (input text).
  - Borders/surfaces: `#fff` (cards, sidebar panel), `#e1e1e1` (input
    borders), `#eaeaea` (dividers), `#e4e4e4`/`#e8e8e8` (light hairlines).
  - Fonts: **"Poppins"** for h1–h6 + blockquote; **"Lato"** for nav,
    buttons, `.category`, post-meta, widget titles; **"Raleway"** for body
    paragraphs and footer; html/body base chain
    `'Lato', 'Poppins', 'Raleway', sans-serif`.
  - Buttons `.btn`: sharp corners — `border-radius: 0`, `background:
#af7152`, `color: #fff`, `font-size: 12px`, `padding: 0 13px`; hover →
    `background: #fff`, `color: #af7152`. Banner-slider variant: white bg,
    `#171717` text; hover inverts.
  - Newsletter form: input `border: 1px solid #e1e1e1`, `border-radius: 0`,
    `padding: 9px 15px`; submit `background: #af7152`, uppercase,
    `letter-spacing: 1px`, `line-height: 38px`; hover → white bg + rust text.
  - Banner slider: height `50vh`, image background + `rgba(0,0,0,0.25)`
    overlay; inner content absolutely centered; category tag has `1px` white
    border; title white, uppercase, 34px.
  - Instagram tiles: `max-width/height: 106px` (sidebar) hover zoom
    `scale(1.1) skew(5deg)` + `rgba(0,0,0,0.5)` overlay.
  - Spacing rhythm: post card thumbnail margin-bottom 32px (44px full-width),
    excerpt `margin: 19px 0`, card `margin-bottom: 50px` (68px full-width),
    `.default-posts` `margin: 0 -15px` with 2-column gutters.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sojourn-<n>/<w>/<h>`); icons → lucide-react (menu,
  search, socials, comments, chevrons); Poppins + Lato (+ Raleway for
  paragraphs/footer) via Google Fonts `<link>` in `index.html`; brand rust in
  `@theme` so shared Button/ButtonLink `primary` variants resolve to
  `#af7152`; sharp (radius 0) button override via theme tokens; no
  asset/CSS/font-file copying.

Sojourn lives in `apps/sojourn` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn) and the repo-standard Navbar/Footer chrome.

## Requirements

### Requirement: Header

The system SHALL render a two-tier header: a light top bar with the site logo
and a hamburger trigger, and a dark navigation bar below it.

#### Scenario: Header content

- **GIVEN** the Sojourn page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show a light `header-top` with the site name "Sojourn" and a hamburger menu button
- **AND** the header SHALL show a dark (`#171717`) `header-bottom` bar with navigation links Home, Features, Categories, About, and Contact

#### Scenario: Slide-in menu

- **GIVEN** the header is rendered
- **WHEN** the user activates the hamburger trigger
- **THEN** a fixed left slide-in panel SHALL open showing the site logo and the navigation links
- **AND** the active navigation item SHALL be highlighted in the rust brand color

### Requirement: Banner slider

The system SHALL render a full-width carousel of featured posts, each slide
with an image background, a dark overlay, and centered white content.

#### Scenario: Slider content

- **GIVEN** the page is rendered
- **WHEN** the banner slider is displayed
- **THEN** it SHALL show at least two slides
- **AND** each slide SHALL contain a category tag ("Lifestyle"), a white uppercase title (e.g. "Natural summer", "Cruise to Alaska"), and a white "Read More" button

#### Scenario: Slide navigation

- **GIVEN** the banner slider is displayed
- **WHEN** the user activates the next control (or the slider auto-advances)
- **THEN** the slider SHALL advance to the following slide
- **AND** the slide content SHALL be centered over the image with a dark overlay

### Requirement: Post grid

The system SHALL render a centered two-column grid of blog post cards, each
with a thumbnail, category, title, meta line, excerpt, and a read-more button,
with the first and sixth cards spanning the full width.

#### Scenario: Post grid content

- **GIVEN** the page is rendered
- **WHEN** the main post grid is displayed
- **THEN** it SHALL show at least eight post cards in a two-column centered grid
- **AND** the first and sixth cards SHALL span the full grid width

#### Scenario: Post card structure

- **GIVEN** a post card is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a thumbnail image, a category label, a level-2 title, a meta line (date, comment count, social icons), an excerpt, and a "Read more" button
- **AND** the title SHALL render in the Poppins font in near-black with the button in the rust brand color

### Requirement: Sidebar widgets

The system SHALL render a right-hand sidebar with About, Newsletter,
Instagram, Recent Posts, and Ad widgets.

#### Scenario: Sidebar content

- **GIVEN** the sidebar is rendered
- **WHEN** the user inspects it
- **THEN** it SHALL show, top to bottom: an "About me" widget (avatar, name, bio), a "Newsletter" widget, an "Instagram" thumbnail grid, a "Recent Posts" list (thumbnail + title + date), and an ad placeholder

#### Scenario: Newsletter subscribe

- **GIVEN** the sidebar Newsletter widget is rendered
- **WHEN** the user submits the email form
- **THEN** the form SHALL validate the email address and show a confirmation on success

#### Scenario: Instagram hover effect

- **GIVEN** an Instagram widget thumbnail is displayed
- **WHEN** the user hovers over it
- **THEN** a dark overlay SHALL appear and the thumbnail SHALL scale and skew slightly

### Requirement: Instagram strip

The system SHALL render a full-width Instagram feed strip below the main
content with hover-overlay tiles.

#### Scenario: Strip content

- **GIVEN** the page is rendered
- **WHEN** the section widget is displayed
- **THEN** it SHALL show a full-width strip of six Instagram tiles
- **AND** hovering a tile SHALL reveal a dark overlay

### Requirement: Footer

The system SHALL render a footer with a container row, social icons, and a
copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show social icons on the right side of the footer row
- **AND** the footer SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Sojourn app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, banner slider, post grid, sidebar, Instagram strip, and footer in order
- **AND** the document title SHALL be "Sojourn — Travel Blog Template"

## Verification checklist

- [ ] `openspec/specs/template-sojourn/spec.md` present with the REAL section
      list (header-top/header-bottom → banner slider → post grid → sidebar →
      Instagram strip → footer).
- [ ] Design tokens above (rust `#af7152`, dark `#171717`, Poppins + Lato +
      Raleway, sharp radius-0 buttons, 50vh slider, `#e1e1e1` input borders)
      captured in the spec.
- [ ] `docs/templates/sojourn/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh sojourn`,
      PR lists source (ColorLib Sasha), preview URL, tokens, and what differs.
