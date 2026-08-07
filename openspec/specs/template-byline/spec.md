# Template: Byline (Blog)

## Purpose

Byline is a single-page blog listing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Andrea"
blog website template design (see TEMPLATES.md, Blog category), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Andrea" — personal/lifestyle blog template with a
  fixed left sidebar, a blog listing main column, and a right widgets sidebar
  (source: https://colorlib.com/wp/template/andrea/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/andrea/`
  (HTTP 200, 43KB HTML). DOM + `css/style.css` (56KB) extracted and analyzed.
- **Visual design (from screenshot `andrea-free-template.jpg` + DOM):** clean
  airy "lifestyle blog" aesthetic. Three columns: a narrow fixed white sidebar
  on the left (big serif logo over a soft blue/purple gradient photo, nav
  menu, newsletter input, copyright), a wide center column with a vertical
  feed of blog post cards (circular thumbnail left, serif title + meta row +
  excerpt + "Read More" link right), and a light-gray right sidebar with
  widgets (search, categories, popular articles, tag cloud, newsletter, month
  archives, paragraph). Accent color is sky blue `#1eafed` (active nav,
  hover links, pagination). Serif headings (Lora) contrast with the
  sans-serif nav (Poppins) for an editorial feel.
- **Section order (1:1) from the DOM:**
  1. Left sidebar (`#colorlib-aside`, fixed, white, ~320px desktop): logo
     "Andrea Moore" (two-line, Abril Fatface, text clipped over a photo
     background — gradient blues/purples) → nav menu Home (active) / Fashion /
     Travel / About / Contact → "Subscribe for newsletter" form (email input
     with light-blue `#7cd1f5` border + paper-plane icon) → sidebar footer
     (copyright + "made with ♥ by Colorlib" credit).
  2. Main column (`#colorlib-main`, offset right of the sidebar): blog
     listing with 12 entries, each a `blog-entry d-md-flex` card — circular
     150px image on the left (`border-radius: 50%`), text on the right: title
     (h3, Lora serif, 30px), meta row (14px `#bfbfbf`: calendar date · folder
     category · comment count), excerpt, "Read More" link + arrow icon.
  3. Right sidebar (`col-xl-4`, `bg-light` `#f8f9fa`): search form
     (`#fafafa` bg, search icon right, "Type a keyword and hit enter") →
     Categories (5 links with counts) → Popular Articles (3 × `block-21`:
     80×80 square thumb + title + meta date/author/comments) → Tag Cloud
     (8 uppercase pills, 1px `#ccc` border, 4px radius) → Newsletter
     (`subs-wrap`: photo bg + 60% black overlay, white heading + blurb + email
     input + white "Subscribe" button) → Archives (6 month links with counts)
     → Paragraph (blurb).
  4. Pagination (`block-27`): defined in CSS (40px circles, `#1eafed` border,
     active filled `#1eafed` white text) but NOT present on the index page —
     the listing shows all 12 entries with no pager. Recreation matches the
     index: no pagination component.
- **Recreation decisions:** new name **Byline** (an article's author credit
  line — fits a personal-blog brand; no collision with `apps/` or existing
  spec folders). Logo renders "Byline" (line 1) + "Journal" (line 2) with a
  soft blue→purple gradient text treatment (`bg-clip-text`) standing in for
  the original's image-clipped logo. The two-line nav becomes the repo-standard
  sidebar nav with a dark-mode toggle. Blog titles: keep the original's kind
  of content (5 unique titles + variants to fill 12 entries).

Byline lives in `apps/byline` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Design tokens (extracted from `css/style.css`)

- Fonts (Google Fonts `<link>`): **Lora** (serif — all headings h1–h6,
  `font-weight: normal`, `rgba(0,0,0,.8)`), **Abril Fatface** (cursive — logo,
  62–74px, two lines), **Poppins** (sans — sidebar nav, 18px / 500).
- Primary brand: **`#1eafed`** (sky blue) — active nav link + underline,
  hover link color, pagination border/fill.
- Light-blue input border: `#7cd1f5` (sidebar newsletter input).
- Text: headings `rgba(0,0,0,.8)` / `#000`; nav links `rgba(0,0,0,.7)` (hover
  `#000`); blog meta `#bfbfbf` / `#b3b3b3`; muted `#6c757d`; tag text `#000`.
- Backgrounds: left sidebar `#fff`; right sidebar `#f8f9fa`; search form
  `#fafafa`; newsletter overlay `rgba(0,0,0,.6)` over a photo.
- Shapes: blog images **circular** 150×150 (`border-radius: 50%`); popular
  thumbs 80×80 square; tag pills `border-radius: 4px`, uppercase 11px; inputs
  `border-radius: 0`; pagination circles 40×40 `border-radius: 50%`.
- Layout: left sidebar fixed `width: 320px` (25%) with `bottom:0; top:0`;
  main column `width: 75%` (float right); on small screens the sidebar slides
  off-canvas (`translateX(-320px)`) and a hamburger toggle
  (`#colorlib-nav-toggle`, 30×2px bars) shifts the main content right 270px.
- Section rhythm: blog card `margin-bottom: 6em`; entries padded `py-5 px-md-5`.

## Requirements

### Requirement: Left navigation sidebar

The system SHALL render a fixed left sidebar with the brand logo, a nav menu,
a newsletter subscribe form, and a footer credit line.

#### Scenario: Sidebar content

- **GIVEN** the Byline page is rendered
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show a two-line brand logo "Byline" / "Journal" in a large
  display serif with a gradient text treatment
- **AND** it SHALL show nav links Home, Fashion, Travel, About, and Contact
- **AND** the Home link SHALL be marked active with the brand color
  `#1eafed` and an underline accent
- **AND** it SHALL show a "Subscribe for newsletter" heading with an email
  input and a send icon

#### Scenario: Sidebar footer

- **GIVEN** the sidebar is displayed
- **WHEN** the user scrolls to its bottom
- **THEN** it SHALL show a copyright line with the current year
- **AND** it SHALL show a "made with ♥" credit line

#### Scenario: Newsletter submit

- **GIVEN** the sidebar newsletter form is displayed
- **WHEN** the user enters an invalid email and submits
- **THEN** the form SHALL show a validation error and SHALL NOT submit
- **WHEN** the user enters a valid email and submits
- **THEN** the form SHALL show a success confirmation

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Blog listing

The system SHALL render a blog listing with 12 post entries, each with a
circular image, title, meta row, excerpt, and a "Read More" link.

#### Scenario: Entry card content

- **GIVEN** the blog listing is displayed
- **WHEN** an entry is rendered
- **THEN** it SHALL show a circular image on the left
- **AND** it SHALL show the post title as a heading
- **AND** it SHALL show a meta row with a date, a category, and a comment
  count, each with an icon
- **AND** it SHALL show an excerpt paragraph
- **AND** it SHALL show a "Read More" link with an arrow icon

#### Scenario: Listing count and order

- **GIVEN** the Byline page is rendered
- **WHEN** the blog listing is displayed
- **THEN** it SHALL render exactly 12 entries
- **AND** the entries SHALL be stacked vertically in a single column

### Requirement: Blog post card layout

The system SHALL lay out each entry with the image beside the text on desktop.

#### Scenario: Desktop card layout

- **GIVEN** the viewport is desktop width
- **WHEN** an entry card is displayed
- **THEN** the image SHALL be positioned to the left of the text block

### Requirement: Right sidebar widgets

The system SHALL render a light-gray right sidebar with a search form,
categories, popular articles, a tag cloud, a newsletter box, archives, and a
paragraph widget.

#### Scenario: Search form

- **GIVEN** the right sidebar is displayed
- **WHEN** the search form is shown
- **THEN** it SHALL contain a search input with a search icon and the
  placeholder "Type a keyword and hit enter"

#### Scenario: Categories

- **GIVEN** the right sidebar is displayed
- **WHEN** the Categories widget is shown
- **THEN** it SHALL list Fashion (6), Technology (8), Travel (2), Food (2),
  and Photography (7), each with its count

#### Scenario: Popular articles

- **GIVEN** the right sidebar is displayed
- **WHEN** the Popular Articles widget is shown
- **THEN** it SHALL show 3 items, each with a small square thumbnail, a
  title, and a meta row with date, author, and comment count

#### Scenario: Tag cloud

- **GIVEN** the right sidebar is displayed
- **WHEN** the Tag Cloud widget is shown
- **THEN** it SHALL render at least 8 uppercase pill tags

#### Scenario: Newsletter box

- **GIVEN** the right sidebar is displayed
- **WHEN** the Newsletter widget is shown
- **THEN** it SHALL render a photo background with a dark overlay
- **AND** it SHALL show a "Newsletter" heading, a short blurb, an email input,
  and a "Subscribe" button
- **WHEN** the user submits a valid email
- **THEN** the form SHALL show a success confirmation

#### Scenario: Archives

- **GIVEN** the right sidebar is displayed
- **WHEN** the Archives widget is shown
- **THEN** it SHALL list 6 month links each with a post count

#### Scenario: Paragraph widget

- **GIVEN** the right sidebar is displayed
- **WHEN** the Paragraph widget is shown
- **THEN** it SHALL show a short descriptive paragraph

### Requirement: Page composition

The system SHALL compose the sidebar and blog sections in a single page with
proper landmarks and a document title.

#### Scenario: Full page render

- **GIVEN** the Byline app is rendered
- **WHEN** the page loads
- **THEN** the left sidebar SHALL be in the complementary landmark
- **AND** the blog listing and right sidebar SHALL be inside the main landmark
- **AND** the document title SHALL be "Byline — Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec.
- [ ] App renders all sections 1:1 in the order above (left sidebar → blog
      listing + right sidebar).
- [ ] Design tokens match the reference: brand sky blue `#1eafed` in `@theme`,
      Lora headings, Abril Fatface two-line logo with gradient text, Poppins
      sidebar nav, circular 150px blog images, 80×80 popular thumbs, uppercase
      tag pills, `#f8f9fa` right sidebar, off-canvas sidebar on small screens
      with hamburger toggle.
- [ ] No pagination component (matches the index page; `block-27` pager exists
      only in the original's CSS for other pages).
- [ ] 100% Vitest coverage on `apps/byline` (lines/functions/branches/
      statements).
- [ ] Per-app gate `scripts/verify-app.sh byline` passes.
- [ ] PR description includes: source template (ColorLib Andrea), preview URL
      (https://preview.colorlib.com/theme/andrea/), design tokens used, and
      what differs (renames, placeholder images via
      `https://picsum.photos/seed/byline-<n>/<w>/<h>`, lucide-react icons).
