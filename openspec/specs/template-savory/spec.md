# Template: Savory (Beauty / Food Blog Template)

## Purpose

Savory is a single-page food-blog template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Bueno" entry
in TEMPLATES.md (Beauty category — the design is a food/recipe blog),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The reference is a clean, minimalist food blog: a dark photo-overlay top
bar with social icons + search, a centered script wordmark logo, a hero
carousel whose slides carry a centered white overlay card (tag + title +
meta), a 3-card category row, alternating big posts with square green
"Read More" buttons, a 3-column post grid with a sidebar, an Instagram
tile strip, and a minimal footer. The brand accent is a pale sage/pistachio
green (`#b0c364`). Savory recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Bueno" — Food Blog HTML Template
  (source: https://colorlib.com/wp/template/bueno/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/bueno/`
  (HTTP 200). DOM fetched and analyzed; stylesheet
  `https://preview.colorlib.com/theme/bueno/style.css` (50 KB, @imports
  Montserrat Google Font + bootstrap/classy-nav/owl/animate/magnific/font-awesome/nice-select)
  extracted for tokens. Screenshot
  (`bueno-free-template.jpg`, 1200×946, in TEMPLATES.md) reviewed visually
  (browser) — matches the DOM.
- **Section order (1:1 from the preview DOM):**
  1. Preloader — full-screen sage-green cover with animated "Cooking in
     progress.." text + pot/bubbles (hides on load).
  2. Top header bar (`top-header-area bg-img bg-overlay`, 95px, background
     image `header.jpg` + dark overlay): social icons LEFT (white), search
     form RIGHT.
  3. Main navbar (`classy-navbar`, 70px): logo image (script wordmark
     "Bueno" + "Food Blog" tagline) left; nav center — Home, About Us,
     Pages (dropdown), Recipes (mega menu: Recipe, Bread, Breakfast, Meat,
     Fastfood, Salad, Soup), Blog, Contact; "Login / Register" link right;
     hamburger icon (`#toggler`) far left of the menu.
  4. Trending panel (`treading-post-area`, fixed right, 480px wide, bg
     `#dadfe5`, slides in via `.on`): heading "Treading Post" (sic — the
     source's typo; paraphrase as "Trending Posts" is fine) + 6 compact
     posts (thumbnail + tag "The Best" + title + meta). Hamburger toggles
     it open, close-icon (×) closes it (active.js: `$('#toggler').on('click'
... treadingPost.toggleClass('on'))`).
  5. Hero area (`hero-area`, padding 0 30px): `hero-post-slides owl-carousel`
     — 4 slides, each a full-width image with a centered white overlay box
     (`blog-content-bg`, 320×360, hidden → visible; on hover green bg +
     white title) containing post-tag ("Healthy Food"), post-title
     ("Chicken Salad"), post-meta (date + author). PREV/NEXT arrow buttons
     at the slide's bottom left/right. Carousel auto-advances.
  6. Category area (`post-catagory section-padding-100-0 mb-70`): 3 cards
     (3-col grid) — image + centered white box (height 128px,
     `width: calc(100% - 60px)`) with post-tag ("The Best") + post-title
     ("Healthy Food" / "Organic Cuisine" / "Vegetarian Food"); hover flips
     box to sage green with white title.
  7. Big posts area (`big-posts-area mb-50`): 2 alternating rows — image
     (col-md-6) + centered content (col-md-6): post-tag ("Healthy" /
     "The Best"), post-title ("Friend eggs with ham" / "Steak with boiled
     vegetables"), post-meta, lorem excerpt, square green "Read More"
     button (`.bueno-btn`).
  8. Posts area: main column = 3-col grid of 9 small posts
     (`single-blog-post style-1`: thumbnail + tag + title + meta);
     sidebar = ad widget image + recent-posts widget (5 rows: small thumb +
     title + meta).
  9. Instagram feed area: 10 square tiles (`single-instagram`).
  10. Footer (`footer-area`, padding 50px 0): copyright line (12px,
      `#666666`: "Copyright © <year> All rights reserved | This template is
      made with <heart> by ColorLib") + footer nav (Home, Recipes, About
      Us, Blog, Contact — 12px `#666666`, hover sage green + 3px green
      underline via `::after`).
- **Design tokens (extracted from style.css):**
  - Brand color: **`#b0c364`** (pale sage/pistachio green — 40 usages;
    preloader bg, `.bueno-btn` bg, tag color, hover accents, footer
    underline). Darker variant: `#a3b65a`. Button hover bg: `#000000`.
  - Font: **Montserrat** 300/400/500/600/700 (Google Fonts), body 14px —
    the ONLY font-family in style.css. The marketing screenshot shows a
    script/serif logo wordmark; the demo logo is an image (`logo.png`) —
    recreate the wordmark in a script font (e.g. "Dancing Script" /
    "Great Vibes") or an elegant serif, everything else Montserrat.
  - Nav links: `#404040`, 15px, weight 600, hover `#b0c364`.
  - `.post-tag`: 12px, weight 600, UPPERCASE, `#b0c364`.
  - `.post-title`: dark (white on green hover boxes) — 30px hero, 24px
    big/category, 18px grid, 14px sidebar.
  - `.post-meta`: 12px, weight 600, UPPERCASE, `#7a7a7a`.
  - `.bueno-btn`: bg `#b0c364`, white text, **border-radius 0 (square)**,
    min-width 160px, height 50px, padding 0 30px, 14px, weight 500,
    hover → black bg.
  - Trending panel bg `#dadfe5`; footer text `#666666`; section top padding
    100px (`section-padding-100-0`).
- **Visual design (screenshot + live render):** dark semi-transparent top
  bar over a food photo (grapes/cheese); centered script "Bueno" logo with
  "Food Blog" beneath; white content on a white page; hero slides with a
  thin-bordered white overlay card; fresh green accents; clean minimalist
  aesthetic driven by food photography.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/savory-<n>/<w>/<h>`: hero slides 1200×700, category
  600×500, big posts 700×600, grid 400×300, sidebar 100×100, insta tiles
  300×300); icons → lucide-react (Search, Menu, X, ArrowLeft, ArrowRight,
  Heart, Clock; social/Instagram as inline SVG brand icons — lucide-react
  removed brand icons); Montserrat + script display font via Google Fonts
  `<link>`; no assets copied. The hero carousel is implemented as a small
  custom carousel (auto-advance + prev/next + slide index state).

Savory lives in `apps/savory` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Preloader

The system SHALL render a full-screen sage-green preloader with a cooking
animation that disappears once the page has loaded.

#### Scenario: Preloader content

- **GIVEN** the Savory page is loading
- **WHEN** the page first renders
- **THEN** a full-viewport overlay SHALL show with the brand green
  (`#b0c364`) background
- **AND** it SHALL show the text "Cooking in progress.." above a simple
  cooking animation (pot + bubbles)
- **AND** after load the overlay SHALL be removed so the page is visible

### Requirement: Top header bar

The system SHALL render a dark photo-overlay top bar with social icons on
the left and a search form on the right.

#### Scenario: Top bar content

- **GIVEN** the page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL use a background image with a dark overlay so white
  content stays readable
- **AND** it SHALL show social icon links on the left (e.g. Pinterest,
  Facebook, Twitter/X, Instagram)
- **AND** each social link SHALL have an accessible name (aria-label)
- **AND** it SHALL show a search input with a search icon button on the
  right

### Requirement: Navigation bar

The system SHALL render a centered-logo navigation bar with the site
wordmark, page links, a Recipes mega menu, a Login/Register link and a
hamburger trigger.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site wordmark "Savory" with a "Food Blog"
  tagline
- **AND** it SHALL show the nav links Home, About Us, Pages, Recipes,
  Blog and Contact
- **AND** it SHALL show a "Login / Register" link on the right
- **AND** it SHALL show a hamburger trigger (three lines) that opens the
  trending panel

#### Scenario: Recipes mega menu

- **GIVEN** the navbar is rendered
- **WHEN** the user opens the Recipes menu
- **THEN** a mega menu SHALL show the recipe categories Recipe, Bread,
  Breakfast, Meat, Fastfood, Salad and Soup
- **AND** the menu SHALL close when the user clicks a link or clicks away

### Requirement: Trending panel

The system SHALL render a slide-in trending posts panel on the right edge,
opened by the hamburger trigger and closed by its close icon.

#### Scenario: Panel open/close

- **GIVEN** the page is rendered
- **WHEN** the user clicks the hamburger trigger
- **THEN** a fixed right-side panel SHALL slide in (light grey `#dadfe5`
  background)
- **AND** it SHALL be titled "Trending Posts" with a close (×) icon
- **AND** it SHALL list trending post rows (thumbnail + tag + title +
  date/author meta)
- **AND** clicking the close icon SHALL slide the panel back out

### Requirement: Hero carousel

The system SHALL render a hero carousel of post slides, each with a
full-width image and a centered white overlay card, with previous/next
controls.

#### Scenario: Slide content

- **GIVEN** the hero carousel is rendered
- **WHEN** a slide is active
- **THEN** it SHALL show a full-width post image
- **AND** it SHALL show a centered white card with an uppercase tag
  (e.g. "Healthy Food"), a post title (e.g. "Chicken Salad") and a
  date/author meta row
- **AND** the card SHALL sit above the image so text stays readable

#### Scenario: Carousel controls

- **GIVEN** the hero carousel is rendered
- **WHEN** the user clicks the next arrow
- **THEN** the carousel SHALL advance to the following slide
- **AND** the previous arrow SHALL go back to the prior slide
- **AND** the carousel SHALL auto-advance on an interval

### Requirement: Category cards

The system SHALL render a 3-column row of category cards, each an image
with a centered white content box that flips to sage green on hover.

#### Scenario: Category card content

- **GIVEN** the category area is rendered
- **WHEN** the cards are displayed
- **THEN** three cards SHALL show (e.g. Healthy Food, Organic Cuisine,
  Vegetarian Food)
- **AND** each card SHALL show an image with a centered white box
  containing an uppercase tag and the category title
- **AND** hovering a card SHALL turn the box sage green with a white title

### Requirement: Big posts

The system SHALL render two alternating large post rows, each with an image
and centered text content including a Read More button.

#### Scenario: Big post row content

- **GIVEN** the big posts area is rendered
- **WHEN** a big post is displayed
- **THEN** it SHALL show a post image on one side and centered content on
  the other: uppercase tag, title, date/author meta, short excerpt
- **AND** it SHALL show a square sage-green "Read More" button that turns
  black on hover

#### Scenario: Alternating layout

- **GIVEN** the big posts area is rendered
- **WHEN** more than one big post is displayed
- **THEN** the second row SHALL mirror the first (image on the opposite
  side)

### Requirement: Post grid and sidebar

The system SHALL render a 3-column grid of small posts beside a sidebar
with an ad widget and a recent-posts list.

#### Scenario: Post grid content

- **GIVEN** the posts area is rendered
- **WHEN** the grid is displayed
- **THEN** it SHALL show a 3-column grid of small post cards (thumbnail +
  uppercase tag + title + date/author meta)

#### Scenario: Sidebar widgets

- **GIVEN** the posts area is rendered
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show an ad widget (image placeholder)
- **AND** it SHALL show a "Recent Posts"-style widget listing rows of
  small thumbnail + title + date/author meta
- **AND** the sidebar SHALL sit to the right of the grid on desktop

### Requirement: Instagram feed

The system SHALL render a strip of 10 square image tiles labeled as an
Instagram feed.

#### Scenario: Feed content

- **GIVEN** the page is rendered
- **WHEN** the Instagram section is displayed
- **THEN** it SHALL show a horizontal strip of square tiles (10)
- **AND** each tile SHALL be a link with an accessible name

### Requirement: Footer

The system SHALL render a footer with a copyright line and navigation links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the copyright line ("© <year> All rights
  reserved | This template is made with <heart> by ...")
- **AND** it SHALL show the footer nav links Home, Recipes, About Us,
  Blog and Contact
- **AND** hovering a footer link SHALL turn it sage green with a green
  underline

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Savory app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Savory — Food Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-savory`.
- [ ] App renders all sections 1:1 in the order above (preloader → top
      bar → navbar → trending panel → hero carousel → category cards →
      big posts → post grid + sidebar → Instagram feed → footer).
- [ ] Design tokens match the reference: brand sage green `#b0c364`
      (darker `#a3b65a`), nav `#404040`, meta `#7a7a7a`, trending panel
      `#dadfe5`, footer text `#666666`, white content; Montserrat
      300–700; square buttons (radius 0), 50px height, min-width 160px;
      uppercase 12px tags; post-title sizes 30/24/18/14px.
- [ ] Fonts (Montserrat + script/serif logo wordmark font) loaded via
      Google Fonts `<link>`; no font or image assets copied from the
      original.
- [ ] All images are seeded picsum placeholders
      (`picsum.photos/seed/savory-<n>/<w>/<h>`).
- [ ] `vite.config.ts` registers `injectUiSource()` (see conventions).
- [ ] 100% Vitest coverage on `apps/savory` (lines/functions/branches/
      statements).
- [ ] PR description includes: source template (ColorLib "Bueno"), preview
      URL (https://preview.colorlib.com/theme/bueno/ — reachable), design
      tokens used, what differs (name, placeholder images, script logo
      recreated as text, "Treading Post" typo paraphrased to "Trending
      Posts").
