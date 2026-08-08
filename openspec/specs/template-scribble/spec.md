# Template: Scribble (Blog Template)

## Purpose

Scribble is a minimal single-page blog landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Suppablog" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Suppablog" — minimal creative blog template for
  writers (source: https://colorlib.com/wp/template/suppablog/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/suppablog/
  (HTTP 200, ~17 KB HTML fetched; `style.css` ~24 KB + `css/common.css`
  ~4 KB + `css/clear.css` parsed for tokens). The TEMPLATES.md screenshot
  (`suppablog-free-creative-blog-template-for-writters.jpg`, 1200×927) was
  viewed in the browser as the visual reference.
- **Screenshot analyzed:** sophisticated split-screen blog layout on a
  white background. Far-left: a fixed dark charcoal rail (~100px) with a
  teal square logo (white up-arrow mark) at top, a hamburger toggle below
  it, and a vertical stack of white social icons (Twitter, YouTube,
  Facebook, Vimeo, Behance, RSS). Middle: the blog column — a featured
  post with large bold headline "Whatever is begun in anger ends in shame"
  (Montserrat 48px), a category tag (CRAFTING) + date (FEBRUARY 12, 2016)
  in small uppercase above it, a serif excerpt paragraph with a small
  arrow link; below it five more posts each with bold headline, small
  uppercase category (SCIENCE, ART, LIFE, CODING, ADVOCACY) and date.
  Right half: a full-height vertical portrait photograph (woman in pink,
  tiled-wall background) as a fixed visual anchor. Serif body text gives
  a literary, editorial feel; teal/cyan accents on logo, categories,
  hover states; pink accent on category links.
- **Section order (1:1):** Left rail (`#sidebar .menu-right-part`,
  always-visible 100px strip: `.logo-holder` logo img + `#toggle`
  hamburger + `.social-holder` vertical social list + `.fixed.scroll-top`
  caret) → slide-in sidebar (`#sidebar`, 420px, closed at `left:-320px`,
  opens to `left:0` on toggle; `.menu-left-part` 320px #333333: search
  field → `.site-info-holder` (h1 `.site-title` + `.site-description`) →
  `#header-main-menu` nav (Home / About / Scroll / Contact) → `footer`
  `.footer-info` copyright) → content (`#content .site-content`,
  margin-left 100px): `#blog-wrapper .blog-holder` — `.featured-post`
  article (cat-links → `.entry-date.published` → h2 `.entry-title` →
  `.excerpt` + `.read-more` arrow) → 5 regular `.blog-item-holder`
  articles (entry-title → cat-links → entry-date) → `.load-more-holder`
  "LOAD MORE ENTRIES" → right-half fixed `.featured-image-holder` with
  `.featured-post-image` (cover background image).
- **Design tokens extracted from the preview CSS (`style.css`):**
  - Brand accent: **#0697AE** (teal/cyan) — entry-title hover,
    `.carousel_pagination a:hover/.selected`, contact submit hover,
    `.member-info` text. Use in `@theme` as `--color-brand`.
  - Secondary accent: **#D8588C** (pink) — `.cat-links ul li a` category
    links, `.footer-info .fa-heart` (pulsing heart).
  - Dark surfaces: **#2D2D2D** (sidebar bg, search-field bg),
    **#333333** (menu-left-part, toggle bg), **#242424** (entry-title
    color), **#404040** (contact form placeholder).
  - Text: **#5B5B5B** / **#5D5D5D** (body, excerpt, search placeholder,
    toggle lines), **#848484** (site-description, sub-menu, footer-info
    links), **#FFFFFF** (site-title, main-menu links).
  - Muted light: **#C0D3D3** (load-more text, carousel pagination bg),
    **#AABDBD** (entry-date, `::selection` bg, more-posts hover),
    **#F1F1F1** (member-info bg), white #FFF content bg.
  - Fonts: **"Montserrat"** (titles, nav, meta, buttons; weights 400/700,
    loaded via Google Fonts with `@font-face` in the preview head) +
    **"Libre Baskerville"** (body/excerpt serif). Body base:
    `font-family: 'Libre Baskerville'`, 18px/35px, weight 400,
    letter-spacing -1px.
  - Search field: 100% width, height 100px, 18px Montserrat, padding-left
    50px, bg #2D2D2D, color/placeholder #5B5B5B, no border.
  - Site title: Montserrat 30px/38px 700 #fff, padding 20px 0; site
    description 14px/23px #848484, max-width 200px.
  - Nav (`#header-main-menu`): padding-left 50px, padding-top 80px;
    `.main-menu.sm-clean` transparent bg, links #ffffff, sub-menu links
    14px uppercase #848484.
  - Entry title: Montserrat 30px/30px (featured 48px/50px, padding-bottom
    40px), color #242424, hover #0697AE. Cat-links: 16px uppercase 700
    Montserrat, links #D8588C 14px, comma-separated. Entry date:
    `.published` 14px uppercase 700 #AABDBD, `•` bullet prefix
    (margin-right 10px). Excerpt: 16px/28px #5D5D5D (serif body); read-more
    arrow image 30×30 (recreate with a lucide icon).
  - Load more: `.load-more-holder` Montserrat 18px 700 #C0D3D3, display
    block, max-width 470px, margin auto, hover #AABDBD.
  - Contact submit button (on the separate contact page, not the home
    DOM): transparent bg, 2px solid border, Montserrat 700 20px, padding
    30px 0, hover color #0697AE — note for the single-page recreation.
  - Sidebar mechanics: `.sidebar` absolute, width 420px, bg #2D2D2D,
    `left:-320px` (so only the 100px right part is visible by default),
    transition left .3s ease; `.sidebar.open` → `left:0`. Body gets
    `.open` class; `.site-content` (margin-left 100px, width
    calc(100% - 100px)) shifts to margin-left 420px when open. Blog
    holder: padding-top 100px, padding-bottom 85px, max-width 470px.
    Featured image: `.featured-image-holder` width 50% float right;
    `.featured-post-image` position fixed, height 100%, width
    calc(50% - 50px), background-size cover, center center.
- **Recreation decisions:** the sidebar/rail is the navigation shell and
  the blog list is the only real page — the About / Scroll / Contact nav
  links become anchor links (`#` / `href="#"`), keeping the same _kind_
  of content (the reference's about/scroll/contact.html are separate
  demo pages not part of the home landing). Featured portrait image →
  seeded picsum placeholder (`picsum.photos/seed/scribble-1/900/1200` or
  similar portrait crop); icons → lucide-react (Twitter, Youtube,
  Facebook, Vimeo, Dribbble/Behance, Rss, Menu, ArrowUp,
  ArrowRight/CaretUp); fonts via Google Fonts `<link>` in `index.html`
  (Montserrat 400/700 + Libre Baskerville 400); brand teal #0697AE in
  `@theme`; no assets copied. The ColorLib attribution line in the
  sidebar footer becomes the monorepo's standard placeholder footer copy
  (paraphrased). Toggle behavior: clicking the hamburger adds/removes the
  open class on the sidebar (React state), with the content margin
  transition.

Scribble lives in `apps/scribble` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Left navigation rail

The system SHALL render a fixed dark left rail with the site logo, a
menu toggle button, social icons, and a scroll-to-top control.

#### Scenario: Rail content

- **GIVEN** the Scribble page is rendered
- **WHEN** the page loads
- **THEN** the rail SHALL show the site logo, a hamburger menu toggle, a
  vertical stack of social icons, and a scroll-to-top icon
- **AND** the rail SHALL be visually distinct (dark background, ~100px wide)

#### Scenario: Accessible controls

- **GIVEN** the rail is displayed
- **WHEN** the user tabs through the page
- **THEN** the menu toggle and social links SHALL be keyboard-focusable
- **AND** icon-only controls SHALL have aria-labels

### Requirement: Slide-in sidebar

The system SHALL render a slide-in sidebar (hidden by default) containing
a search field, the site title and description, navigation links, and a
footer attribution line; the menu toggle SHALL open and close it.

#### Scenario: Sidebar default state

- **GIVEN** the page is rendered
- **WHEN** the sidebar is closed
- **THEN** the sidebar content (search, site info, nav, footer) SHALL be
  hidden off-canvas

#### Scenario: Opening the sidebar

- **GIVEN** the sidebar is closed
- **WHEN** the user activates the menu toggle
- **THEN** the sidebar SHALL slide in showing the search field, site
  title, site description, and nav links Home, About, Scroll, Contact
- **AND** the content area SHALL shift accordingly

#### Scenario: Closing the sidebar

- **GIVEN** the sidebar is open
- **WHEN** the user activates the menu toggle again
- **THEN** the sidebar SHALL slide back out of view

#### Scenario: Sidebar content

- **GIVEN** the sidebar is open
- **WHEN** its sections are displayed
- **THEN** a search input with placeholder "Type here to search..." SHALL
  be present
- **AND** the site title SHALL be "Scribble"
- **AND** the footer attribution line SHALL include a copyright notice

### Requirement: Blog post list

The system SHALL render the blog list with one featured post and at least
five regular posts, each with a title, category, and date; the featured
post SHALL also have an excerpt with a read-more link.

#### Scenario: Featured post

- **GIVEN** the page is rendered
- **WHEN** the blog list is displayed
- **THEN** the first item SHALL be a featured post with a category, a
  date, a large headline, an excerpt, and a read-more link

#### Scenario: Regular posts

- **GIVEN** the page is rendered
- **WHEN** the blog list is displayed
- **THEN** at least five additional posts SHALL follow the featured post
- **AND** each SHALL show a title, a category link, and a date

#### Scenario: Load more

- **GIVEN** the blog list is displayed
- **WHEN** the list ends
- **THEN** a "LOAD MORE ENTRIES" label SHALL be shown below the posts

### Requirement: Featured image panel

The system SHALL render a fixed full-height featured image panel on the
right half of the viewport.

#### Scenario: Image panel

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** a full-height image panel SHALL occupy the right portion of
  the viewport with a cover-fit placeholder image

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Scribble app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the rail/sidebar navigation, the blog
  list, and the featured image panel
- **AND** the document title SHALL be "Scribble — Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-scribble`
- [ ] `scripts/verify-app.sh scribble` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Section order matches the reference 1:1: left rail → slide-in
      sidebar (search, site info, nav, footer) → blog list (featured +
      posts + load more) → right featured image panel
- [ ] Brand teal `#0697AE` in `@theme`; fonts Montserrat + Libre
      Baskerville loaded via Google Fonts `<link>`
- [ ] Placeholder images seeded `picsum.photos/seed/scribble-<n>/...`;
      no ColorLib assets copied
- [ ] PR description records: source template (Suppablog), preview URL,
      design tokens, and what differs (new name, placeholder images,
      nav links as anchors)
