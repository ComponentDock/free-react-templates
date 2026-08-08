# Template: Edition (Blog Template)

## Purpose

Edition is a single-page blog template in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Sensive" website template
design (see TEMPLATES.md), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sensive" — editorial/magazine-style blog template
  (source: https://colorlib.com/wp/template/sensive/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/sensive/
  (HTTP 200, "Sensive Blog - Home"). Live DOM fetched and parsed, plus
  `css/style.css` (minified, complete) for tokens. Screenshot
  `sensive-free-template.jpg` (1200x946) reviewed visually — clean editorial
  blog, white background, serif headline over a scenic full-width hero
  (autumn mountain/forest tones), three fashion/lifestyle post cards below,
  orange accents on the active nav link and card tags, black footer edge.
- **Section order (1:1, from the DOM of the home page):**
  1. Header (`header_area`): white bar. Left: logo wordmark ("Sensive",
     serif). Center: nav menu (Home, Archive, Category, Blog Details,
     Contact — Lora 15px `#3a414e` weight 700; hover/active `#ff9907`).
     Right: social icons + search icon (12px). Sticky variant
     (`navbar_fixed`): background flips to white with a shadow on scroll.
  2. Hero banner (`hero-banner`): full-width background image, height 400px
     (550px at >=1000px), dark overlay `rgba(1,3,15,0.2)`, centered white
     content: category label ("Tours & Travels"), serif h1 headline
     ("Amazing Places on earth", Lora, 30px/45px), h4 date
     ("December 12, 2018"). (Inner pages use a 300/400px variant with a
     breadcrumb; not needed for the single-page recreation.)
  3. Blog slider (`blog-slider`, owl-carousel): 3 centered cards
     (`blog__slide`, transparent, radius 0): image, label badge (uppercase
     13px, background `#222`, color `#ff9907`, padding 4px 40px — "Fashion"),
     serif h3 title ("New york fashion week's continued the evolution"),
     meta ("2 days ago"). Left/right arrow controls (circle buttons on a
     `#f5f9fc` backing; hover background `#222`).
  4. Main content (`blog-post-area section-margin`): two-column grid.
     Left `col-lg-8` — recent posts list (`single-recent-blog-post`,
     margin-bottom 60px). Each post: image thumb with a white `thumb-info`
     overlay strip across the bottom (author + date meta, 15px `#777777`),
     then details: tag list (`tag-list-inline`, Lora, `#555555`), serif h3
     title (21px/27px, `#3a414e`), excerpt paragraph (`#777777`), and a
     `.button` "Read More" (uppercase 13px, background `#222`, color
     `#ff9907`, 1px solid `#222`, padding 10px 24px / 12px 42px desktop,
     radius 0; hover inverts to background `#ff9907` + color `#000022`).
     Below the list: pagination (`blog-pagination`) — page links with 2px
     solid `#eeeeee` border, radius 0, color `#222`; active/hover border
     `#222` + color `#ff9907`.
     Right `col-lg-4` — sidebar (`widget-wrap`), widgets share a
     `#f9f9ff` background, padding 48px 30px, margin-bottom 30px, and a
     title (20px weight 700) with a 4px-high `#ff9907` underline bar at the
     bottom (width 20%):
     a. Newsletter widget: centered intro text, email input (height 50px,
     radius 0, border `rgba(112,111,135,0.2)`, placeholder `#999999`) +
     `.bbtns` subscribe button (uppercase 13px, background `#222`, color
     `#ff9907`, 1px solid `#222`, padding 12px 20px, radius 0).
     b. Category widget (demo title "Catgory" — demo typo; render
     "Category"): list rows (white background, padding 13px 20px,
     margin-bottom 15px; hover: shadow `rgba(153,153,153,0.2)` + text
     `#ff9907`).
     c. Popular Post widget: rows of small thumb (with white overlay meta
     strip, max-width 160px) + h6 title (16px weight 700, hover
     `#ff9907`) + date line.
     d. Tag Cloud widget (demo duplicates the "Popular Post" title — a demo
     bug; render "Tag Clouds"): inline tag links (white background,
     padding 3px 21px, 14px `#777777`; hover background `#222` + color
     `#ff9907`). Demo tags: project, love, technology, travel, software.
  5. Footer (`footer-area section-padding`, background `#000000`): four
     columns — About Us (white h6 18px weight 600 + blurb), Newsletter
     (email input background `#191919`, width 80%, radius 0 + `click-btn`
     background `#ff9907`, color `#222`, radius 0), Instagram Feed (demo
     title "Instragram Feed" — typo; render "Instagram Feed"; 4-column
     `instafeed` thumbnail grid), Follow Us (social icons `#555555`, hover
     `#ff9907`). Bottom bar `footer-text` (padding-top 80px, 14px, links
     `#ff9907`) with the copyright line (monorepo credit, not ColorLib).
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Primary brand **orange `#ff9907`** (nav hover/active, slider label text,
    button hover, widget-title underline, category hover, tag hover, footer
    links, footer click-btn background).
  - Dark: **`#222`** (buttons, label badges, tag-hover background),
    `#191919` (footer input background), **`#000000`** (footer background).
  - Text: `#3a414e` (headings, nav links), `#797979` (body), `#777777`
    (excerpts, meta), `#999999` (muted, placeholders), `#555555` (tag list).
  - Surfaces: `#fff` (cards, category rows, tags), `#f9f9ff` (sidebar
    widgets), `#f5f9fc` (slider-arrow backing), `#f2f3f7` (blockquote).
  - Borders: `#eeeeee` / `#ededed` (radius 0, 1–2px hairlines).
  - Fonts: **"Lora"** (serif, 400/700) for h1–h6 and nav links; **"Source
    Sans Pro"** (sans-serif, 400) for body text and meta; loaded via Google
    Fonts `@import` in the source stylesheet.
  - Buttons `.button`: `border-radius: 0`, `border: 1px solid #222`,
    `background: #222`, `color: #ff9907`, `text-transform: uppercase`,
    `font-size: 13px`, `font-weight: 500`, `padding: 10px 24px` (12px 42px
    > =900px); hover → `background: #ff9907`, `color: #000022`.
  - Newsletter `.bbtns`: same shape, `padding: 12px 20px`; footer
    `.click-btn`: `background: #ff9907`, `color: #222`, radius 0.
  - Hero banner: height 400px (550px >=1000px), overlay `rgba(1,3,15,0.2)`,
    content absolutely centered, all-white text.
  - Widget titles: 20px weight 700 with 4px `#ff9907` underline bar at the
    bottom of the title (width 20%, z-index -1).
  - Spacing rhythm: `.section-padding` = 110px 0 (footer); `.section-margin`
    = 50px (100px >=1000px); post card margin-bottom 60px; sidebar widget
    padding 48px 30px; category rows padding 13px 20px + margin-bottom 15px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/edition-<n>/<w>/<h>`); icons → lucide-react (search,
  social, calendar, user, chevron, arrow); Lora + Source Sans Pro via Google
  Fonts `<link>` in `index.html`; brand orange in `@theme` so shared
  Button/ButtonLink `primary` variants resolve to `#ff9907`; sharp
  (radius 0) button override via theme tokens; no asset/CSS/font-file
  copying. Demo copy paraphrased but same kinds (category label + headline +
  date; card tag + title + meta + excerpt + Read More; footer About /
  Newsletter / Instagram Feed / Follow Us). Demo typos fixed: "Catgory" →
  "Category", "Instragram Feed" → "Instagram Feed", duplicated tag-cloud
  title "Popular Post" → "Tag Clouds".

Edition lives in `apps/edition` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn) and the repo-standard Navbar/Footer chrome.

## Requirements

### Requirement: Header

The system SHALL render a white header bar with a serif logo wordmark, a
centered navigation menu, and right-aligned social + search icons.

#### Scenario: Header content

- **GIVEN** the Edition page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Edition" as the logo
- **AND** the header SHALL show navigation links Home, Archive, Category, Blog Details, and Contact
- **AND** the header SHALL show social icons and a search icon on the right

#### Scenario: Active and hover states

- **GIVEN** the header is rendered
- **WHEN** a nav link is hovered or is the active (Home) item
- **THEN** the link SHALL render in the orange brand color

### Requirement: Hero banner

The system SHALL render a full-width hero with an image background, a dark
overlay, and centered white content (category label, headline, date).

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero banner is displayed
- **THEN** it SHALL show a category label ("Tours & Travels"), a serif headline ("Amazing Places on earth"), and a date ("December 12, 2018")
- **AND** the content SHALL be centered over the image with a dark overlay

### Requirement: Blog slider

The system SHALL render a slider of featured post cards, each with an image,
an uppercase label badge, a serif title, and a meta line.

#### Scenario: Slider content

- **GIVEN** the page is rendered
- **WHEN** the blog slider is displayed
- **THEN** it SHALL show at least three post cards
- **AND** each card SHALL contain an image, a label badge (e.g. "Fashion", dark background with orange uppercase text), a title, and a relative-time meta line ("2 days ago")

#### Scenario: Slider navigation

- **GIVEN** the blog slider is displayed
- **WHEN** the user activates the next/previous arrow control
- **THEN** the slider SHALL advance to the following/preceding card

### Requirement: Recent posts list

The system SHALL render a list of recent blog posts, each with a thumbnail
(with a white author/date overlay strip), a tag list, a title, an excerpt, and
a "Read More" button.

#### Scenario: Post item structure

- **GIVEN** the main content area is displayed
- **WHEN** the user inspects a recent post item
- **THEN** it SHALL show a thumbnail with an overlaid author + date meta strip, a tag list, a serif title, an excerpt, and a "Read More" button
- **AND** the "Read More" button SHALL be a sharp-cornered dark button with orange uppercase text that inverts on hover

#### Scenario: Pagination

- **GIVEN** the recent posts list is displayed
- **WHEN** the user inspects the bottom of the list
- **THEN** pagination controls SHALL be present with page links bordered in light gray
- **AND** the active/hovered page link SHALL show the orange brand color with a dark border

### Requirement: Sidebar widgets

The system SHALL render a right-hand sidebar with Newsletter, Category,
Popular Post, and Tag Cloud widgets on a light `#f9f9ff` background.

#### Scenario: Sidebar content

- **GIVEN** the sidebar is rendered
- **WHEN** the user inspects it
- **THEN** it SHALL show, top to bottom: a "Newsletter" widget (email input + subscribe button), a "Category" widget (list rows), a "Popular Post" widget (thumb + title + date rows), and a "Tag Clouds" widget (inline tag links)
- **AND** each widget title SHALL carry the orange underline bar accent

#### Scenario: Newsletter subscribe

- **GIVEN** the sidebar Newsletter widget is rendered
- **WHEN** the user submits an email
- **THEN** the form SHALL validate the email address and show a confirmation on success

#### Scenario: Widget hover states

- **GIVEN** a Category row or Tag Cloud link is displayed
- **WHEN** the user hovers over it
- **THEN** the Category row SHALL show a soft shadow and orange text
- **AND** the Tag Cloud link SHALL invert to a dark background with orange text

### Requirement: Footer

The system SHALL render a black footer with About Us, Newsletter, Instagram
Feed, and Follow Us columns plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show four columns: "About Us", "Newsletter" (email input with orange submit button), "Instagram Feed" (4-column thumbnail grid), and "Follow Us" (social icons)
- **AND** the footer SHALL show a copyright bar with links in the orange brand color

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Edition app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero banner, blog slider, recent posts list with sidebar, and footer in order
- **AND** the document title SHALL be "Edition — Blog Template"

## Verification checklist

- [ ] `openspec/specs/template-edition/spec.md` present with the REAL section
      list (header → hero banner → blog slider → recent posts + sidebar →
      footer).
- [ ] Design tokens above (orange `#ff9907`, dark `#222`/`#000000`, Lora +
      Source Sans Pro, sharp radius-0 buttons, 400/550px hero, `#f9f9ff`
      sidebar) captured in the spec.
- [ ] `docs/templates/edition/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh edition`,
      PR lists source (ColorLib Sensive), preview URL, tokens, and what
      differs.
