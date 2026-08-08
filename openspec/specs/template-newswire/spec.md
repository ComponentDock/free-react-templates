# Template: Newswire (News / Magazine Template)

## Purpose

Newswire is a single-page news-magazine landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Meranda" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Meranda" — news/magazine template
  (source: https://colorlib.com/wp/template/meranda/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/meranda/
  (HTTP 200, 30.3 KB rendered DOM, title "Meranda — Website Template by
  Colorlib"). Stylesheets: `css/style.css` (23.6 KB, extracted) on a
  Bootstrap 4 base; hero is an **owl-carousel** slider (`.owl-carousel
.hero-slide.owl-style`) with edge prev/next arrows (`.owl-nav`) and a dot
  nav (`.owl-dots`, active dot `#8bc34a`).
- **Screenshot:** `meranda-free-template.jpg` (TEMPLATES.md line 272) —
  viewed as the live rendered page in a browser (vision analysis): clean
  white editorial news layout; logo top-left with small social icons
  (Facebook/Twitter/Instagram) and a pill search bar top-right; below it an
  uppercase monospace-style menu bar (HOME, CATEGORIES, POLITICS, BUSINESS,
  HEALTH, DESIGN, SPORT, CONTACT) separated by a faint line; hero is a
  split layout — large lifestyle photo left, text right — with an
  "EDITOR'S PICK" tag in lime green, a big headline, excerpt and byline,
  and left/right carousel arrows at the page edges; every major section
  header has a small lime-green dash underline; article cards are
  thumbnail + serif/sans headline + grey excerpt + small metadata; the
  "Trending" and "Popular Posts" sections are numbered lists (01, 02, ...);
  a light-grey "Newsletter Subscribe" band with a pill input and a dark
  circular send button; minimal footer with a single copyright line.
- **Visual design (from DOM + CSS tokens + rendered screenshot):** modern
  editorial news aesthetic — white page background, dark ink text,
  generous whitespace, lime-green `#8bc34a` interactive accent, monospace
  (B612 Mono) navigation bar contrasting with Cabin body/headings, pill
  search + subscribe inputs (radius 30px), dark pill buttons that flip to
  lime on hover, numbered trending/popular lists, category columns, and a
  light-gray (`bg-light`) hero panel + subscribe band. The demo brands
  itself "Meranda"; recreation uses the NEW name **Newswire**.

- **Structure (1:1, section order):**
  1. Top bar `div.container` — `.site-logo` "Meranda" left (font-size
     2rem, `#000`) · right: `.top-social` icon links (icon-facebook,
     icon-twitter, icon-instagram, `d-none d-lg-inline-block`) + `.search-form`
     (email `input.form-control` placeholder "Search...", `.btn.btn-secondary`
     pill with search icon).
  2. Navbar `div.site-navbar.py-2.js-sticky-header` (white bg,
     `font-family: "B612 Mono", monospace`) — `ul.site-menu.main-menu`
     links **Home** (`.active`) / **Categories** / **Politics** /
     **Business** / **Health** / **Design** / **Sport** / **Contact**;
     sticky on scroll (`.sticky-wrapper.is-sticky`), active link gets a
     `#8bc34a` underline (`a.active:after`); mobile off-canvas menu
     (`site-mobile-menu` + hamburger `site-menu-toggle`), link hover
     `#8bc34a`.
  3. Hero carousel `div.site-section.py-0` > `div.owl-carousel.hero-slide`
     — slides `.half-post-entry.d-block.d-lg-flex.bg-light`: left
     `.img-bg` div (background-image, e.g. `big_img_1.jpg`), right
     `.contents`: `span.caption` **"Editor's Pick"** (lime),
     `h2` headline link "News Needs to Meet Its Audiences Where They Are",
     excerpt paragraph, `.post-meta` ("Dave Rogers" in "Food" · "Jun 14" •
     "3 min read" + `icon-star2`); `.owl-nav` prev/next arrows at page
     edges + `.owl-dots` (active `#8bc34a`).
  4. Editor's Pick `div.site-section` — heading `h2` **"Editor's Pick"**
     (`.section-title`: 20px Cabin, weight 400, inline-block with a
     1px solid `#222` bottom border); grid: one large post card left
     (image `img_h_1.jpg` + title + excerpt + meta) and a list of small
     posts right (title + meta rows).
  5. Trending `div.site-section` — heading **"Trending"** + numbered
     entries `.trend-entry.d-flex` **01–04** (`.number` 30px, `#ccc`,
     fixed 50px column; `.trend-contents` h2 title + `.post-meta`) +
     `.more` link **"See All Trends"** (uppercase, `.83rem`, `#8bc34a`).
  6. Featured half-post `div.site-section` — standalone
     `.half-post-entry.d-block.d-lg-flex.bg-light` (large image left,
     contents right: h2 headline + meta "Dave Rogers in Food").
  7. Category columns `div.site-section` — two side-by-side columns:
     **Politics** (heading + 3 post entries: image/title/meta) and
     **Business** (heading + 3 post entries).
  8. Recent News `div.site-section` — heading **"Recent News"** + list of
     post rows (title + meta), one entry carries the "Editor's Pick"
     caption.
  9. Popular Posts `div.site-section` — heading **"Popular Posts"** +
     numbered entries **01–04** (same `.trend-entry` pattern) +
     `.more` link **"See All Popular"**.
  10. Pagination — numbered links **1 2 3 4**.
  11. Subscribe `div.site-section.subscribe.bg-light` — heading
      **"Newsletter Subcribe"** (sic), email `input.form-control`
      placeholder "Enter your email" (pill, radius 30px, white bg,
      height 50px) + `.btn.btn-secondary` circular send button with
      paper-plane icon (dark `#000`, hover → `#8bc34a`).
  12. Footer `div.footer` — minimal copyright bar: "Copyright © <year>
      All rights reserved | This template is made with ♥ (icon-heart
      text-danger) by Colorlib".

- **Design tokens extracted from `css/style.css`:**
  - Accent lime **`#8bc34a`** — `.caption`/`.more` links (uppercase),
    active nav link underline, mobile menu link hover, owl active dot,
    `.subscribe`/`.search-form` `.btn:hover` bg + border, `.ul-check
.success/.primary` icons.
  - Ink **`#000`** — `.site-logo`, post headline links, `.btn-secondary`
    bg + border; nav link colors `#212529`/`#343a40`.
  - Body text: Bootstrap `gray` (`#808080`), `font-weight: 300`,
    `font-size: .9rem`; `.post-meta` `.8rem`.
  - Light backgrounds **`.bg-light` `#f8f9fa`** — hero panel, standalone
    half-post panel, subscribe band; `#edf0f5`/`#f4f5f9` used elsewhere.
  - Buttons `.btn.btn-secondary`: border-radius **30px** (pill),
    background `#000`; hover → `#8bc34a` bg + border. Subscribe/search
    inputs: radius **30px**, white bg, height 50px, no border.
  - `.section-title h2`: 20px, weight 400, inline-block, bottom border
    1px solid `#222`; `.trend-entry .number`: 30px, `#ccc`, `flex: 0 0
50px`; `.more`: uppercase, `.83rem`, `#8bc34a`.
  - Fonts: **Cabin** (Google Fonts — body + headings) and **B612 Mono**
    (Google Fonts — site-navbar / menu, monospace).
  - Sticky navbar: white bg, shadow on scroll (`.sticky-wrapper.is-sticky`);
    active nav item underlined `#8bc34a`.

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/newswire-<n>/<w>/<h>`); icons → lucide-react
  (search, menu, chevrons, paper-plane; brand socials as inline SVG since
  lucide-react removed brand glyphs); Cabin + B612 Mono via Google Fonts
  `<link>` in `index.html`; no assets copied. The owl-carousel hero becomes
  a lightweight index-based carousel (prev/next arrows + dot nav with
  active lime dot).

Newswire lives in `apps/newswire` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top bar (site name, social icons, search input)
and a sticky navigation bar with section links and a mobile off-canvas
menu.

#### Scenario: Top bar content

- **GIVEN** the Newswire page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show the site name "Newswire" on the left
- **AND** social icons SHALL be visible
- **AND** a search input with placeholder "Search..." SHALL be visible
- **AND** a search button SHALL submit the search form

#### Scenario: Navbar content

- **GIVEN** the navbar is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show links Home, Categories, Politics,
  Business, Health, Design, Sport, and Contact
- **AND** the Home link SHALL be marked as the active section

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a mobile menu SHALL open with the same section links
- **AND** pressing the toggle again SHALL close it

### Requirement: Hero carousel

The system SHALL render a hero carousel of featured-post slides, each with
an image panel, an "Editor's Pick" caption, a headline, an excerpt, and
post metadata, navigable with prev/next arrows and a dot nav.

#### Scenario: Hero slide content

- **GIVEN** the hero carousel is displayed
- **WHEN** the page loads
- **THEN** the active slide SHALL show an "Editor's Pick" caption in the
  accent color
- **AND** a headline, an excerpt, and post metadata (author, category,
  date, read time) SHALL be visible

#### Scenario: Carousel navigation

- **GIVEN** the hero carousel has multiple slides
- **WHEN** the user clicks a next/prev arrow or a dot
- **THEN** the displayed slide SHALL change
- **AND** the active dot SHALL be highlighted in the accent color

### Requirement: Editor's Pick section

The system SHALL render an "Editor's Pick" section with one large post
card and a list of smaller post rows.

#### Scenario: Editor's Pick content

- **GIVEN** the Editor's Pick section is displayed
- **WHEN** the page loads
- **THEN** a heading "Editor's Pick" SHALL be shown with an underline
  accent
- **AND** one large post card SHALL appear with an image, title, excerpt,
  and metadata
- **AND** at least three smaller post rows SHALL appear beside it, each
  with a title and metadata

### Requirement: Trending section

The system SHALL render a "Trending" section with numbered post entries
and a "See All Trends" link.

#### Scenario: Trending content

- **GIVEN** the Trending section is displayed
- **WHEN** the page loads
- **THEN** a heading "Trending" SHALL be shown
- **AND** numbered entries 01 through 04 SHALL appear, each with a title
  and post metadata
- **AND** a "See All Trends" link SHALL be shown in the accent color

### Requirement: Category sections

The system SHALL render Politics and Business category columns, each with
a heading and a list of post entries.

#### Scenario: Category content

- **GIVEN** the category sections are displayed
- **WHEN** the page loads
- **THEN** a "Politics" heading and a "Business" heading SHALL be shown
- **AND** each category SHALL show a list of post entries with title and
  metadata

### Requirement: Recent News section

The system SHALL render a "Recent News" section with a list of post rows.

#### Scenario: Recent News content

- **GIVEN** the Recent News section is displayed
- **WHEN** the page loads
- **THEN** a heading "Recent News" SHALL be shown
- **AND** at least three post rows SHALL appear, each with a title and
  metadata

### Requirement: Popular Posts section

The system SHALL render a "Popular Posts" section with numbered post
entries and a "See All Popular" link.

#### Scenario: Popular Posts content

- **GIVEN** the Popular Posts section is displayed
- **WHEN** the page loads
- **THEN** a heading "Popular Posts" SHALL be shown
- **AND** numbered entries 01 through 04 SHALL appear with titles and
  metadata
- **AND** a "See All Popular" link SHALL be shown in the accent color

### Requirement: Pagination

The system SHALL render a pagination control with numbered page links.

#### Scenario: Pagination content

- **GIVEN** the page is rendered
- **WHEN** the pagination control is displayed
- **THEN** numbered page links 1 through 4 SHALL be shown
- **AND** the first page SHALL be marked as the current page

### Requirement: Newsletter subscribe

The system SHALL render a light-background subscribe section with an
email input and a submit button.

#### Scenario: Subscribe form

- **GIVEN** the subscribe section is displayed
- **WHEN** the user enters an email and presses the send button
- **THEN** the section SHALL indicate the subscription was received
  (success message)

#### Scenario: Invalid email

- **GIVEN** the subscribe form is displayed
- **WHEN** the user submits without a valid email
- **THEN** a validation error SHALL be shown and no success message SHALL
  appear

### Requirement: Footer

The system SHALL render a footer with a copyright bar crediting the
template origin.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show "Copyright © <current year> All rights reserved"
- **AND** a credit line to the template source SHALL be shown

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Newswire app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar and navbar in the banner
  landmark, the hero, Editor's Pick, Trending, featured half-post,
  category, Recent News, Popular Posts, pagination, and subscribe sections
  in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Newswire — News Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/newswire`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/newswire`)
- [ ] Section order matches the reference 1:1 (top bar/navbar → hero carousel → Editor's Pick → Trending → featured half-post → Politics/Business columns → Recent News → Popular Posts → pagination → subscribe → footer)
- [ ] Design tokens from the reference used in `@theme` (accent lime #8bc34a, ink #000, body gray #808080, bg-light #f8f9fa, Cabin + B612 Mono fonts)
- [ ] Pill inputs/buttons (radius 30px) with dark bg → lime hover; section-title underline accents; numbered entries 01–04 in #ccc
- [ ] Sticky navbar with active-link lime underline; hero carousel with arrows + active lime dot
- [ ] Placeholder images are seeded picsum (no copied assets); icons from lucide-react / inline SVG for brands
- [ ] README Templates status + BOTH TEMPLATES.md Meranda lines (272, 2204) marked `[x]` after merge
