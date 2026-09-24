# Template: Pressly (News / Magazine Template)

## Purpose

Pressly is a single-page news / magazine website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Newsflex" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Newsflex" — free responsive news website template
  for online magazines and newspaper-like pages (source:
  https://colorlib.com/wp/template/newsflex/). TEMPLATES.md has TWO copies of
  this item (lines 276 in the Blog category and 2207 in the Magazine
  category — mark BOTH `[x]` when done). NOTE: both TEMPLATES.md rows point
  at the WRONG screenshot (`newsbox-free-template.jpg` — that file belongs to
  the separate "Newsbox" template); the real Newsflex screenshot is
  `newsflex-free-news-magazine-website-template.jpg`.
- **Demo DOM analyzed:** NOT REACHABLE. `https://preview.colorlib.com/theme/
newsflex/` returns HTTP 404 "Not Found" (curl + browser verified 2026-08-11).
  The slug is absent from `preview.colorlib.com/assets/js/products.js`
  (which hosts the newer Astro templates on `<slug>-colorlib.pages.dev` —
  `newsflex-colorlib.pages.dev` does NOT resolve, `ERR_NAME_NOT_RESOLVED`).
  The preview portal normalizes `#newsflex` to `#news` (a different
  template). Per docs/replication.md, this spec falls back to the screenshot
  as the sole reference.
- **Screenshot analyzed:** `newsflex-free-news-magazine-website-template.jpg`
  (1200×978, verified in a browser with vision analysis; brand colors
  confirmed by pixel sampling): classic clean news-magazine layout — white
  page, light-gray trending strip, vivid **red `#ef1c49`** accents
  (logo, trending label, active tab underline, Subscribe button) and a
  light **cyan `#74cbe0`** header ad banner. The screenshot crops at the
  newsletter sidebar, so the FOOTER is not visible in the reference — the
  footer structure below is INFERRED from the template's category
  conventions (see "Inferred footer" note).
- **Visual design (from rendered screenshot + pixel sampling):** clean,
  content-first news aesthetic. White background, near-black text, brand red
  `#ef1c49` for CTAs and active states; header with logo left + centered nav
  - right ad banner; a light-gray trending ticker strip; a 2-column featured
    article grid (one large lead + two stacked smaller) with dark gradient
    overlays at the bottom of each image and a small semi-transparent date
    line above the headline; an "ALL THE NEWS" tabbed section; a light-gray
    newsletter widget. The demo brands itself "Newsflex"; recreation uses the
    NEW name **Pressly**.

- **Structure (1:1, section order — from the screenshot):**
  1. Header bar — left: bold dark-red wordmark "Newsflex" (recreated as
     "Pressly"); center: nav links **International** / **Local News** /
     **Pages** / **Sport** / **Lifestyle**; right: rectangular ad banner
     labeled "YOUR ADD HERE" (cyan `#74cbe0` bg in the source — recreated as
     a neutral placeholder box).
  2. Trending bar — a light gray (`#f4f4f4`) horizontal strip below the
     header: a red `#ef1c49` "Trending" label/button followed by placeholder
     headline text.
  3. Featured news grid (hero) — two columns: LEFT one large article card
     (city-street photo, dark gradient overlay, small date line "June 20,
     2018" above the headline, white headline "Traffic Problems in Time
     Square"); RIGHT column stacked with TWO smaller article cards (photo +
     overlay + date + headline: "The best way to spend your holiday" /
     "Sport results for the weekend games"). On mobile the grid stacks
     vertically (lead first).
  4. "ALL THE NEWS" section — small centered heading "ALL THE NEWS"
     (letter-spaced capitals) + tab row **LATEST** (active: red text + red
     underline) / **POPULAR** / **INTERNATIONAL** / **LOCAL** + a row of
     article thumbnail cards below (image + title), side-by-side.
  5. Newsletter sidebar widget — light-gray (`#f4f4f4`-class) box to the
     right of the news feed: bold dark heading "Subscribe to our
     newsletter", an email input (placeholder "Your Email"), and a red
     `#ef1c49` "Subscribe" button.
  6. Footer (INFERRED — not visible in the cropped screenshot; follow
     ColorLib news-magazine conventions as seen in sibling replications
     like Bullion/Newsbit): dark footer with a brand/About blurb column, a
     "Popular post" / links column, contact info line, social icon links,
     and a copyright line with the ColorLib credit. Implementer should pick
     a reasonable dark-footer layout, note it as inferred in the PR, and
     keep it consistent with the monorepo's other news templates.

- **Design tokens (from pixel sampling of the real screenshot):**
  - Brand red **`#ef1c49`** — logo wordmark, "Trending" label, active tab
    text + underline, Subscribe button fill. Primary CTA color.
  - Ad-banner cyan **`#74cbe0`** — the header "YOUR ADD HERE" banner (light
    cyan/blue).
  - Page background **`#ffffff`**; light gray **`#f4f4f4`** — trending bar
    and section dividers/newsletter widget.
  - Text — near-black / dark gray headings, gray muted text for meta
    (dates, bylines).
  - Font — clean modern sans-serif (reference renders like Open Sans /
    Roboto / Helvetica): use Google Fonts (e.g. Open Sans or Roboto) for
    body + a heavier weight for headlines in the recreation.
  - Image treatment — every article image has a dark gradient overlay at
    the bottom; small semi-transparent white date line sits above the
    headline on the overlay; headline text is white.
  - Buttons — rectangular, no radius on the red CTA (straight corners in
    the reference).
  - Spacing rhythm — generous section padding, white space between the
    trending bar, hero grid, and news feed; content column is centered with
    the newsletter widget sitting to the right.

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/pressly-<n>/<w>/<h>`; hero lead ~800×600-class, small
  cards ~400×300-class); the "YOUR ADD HERE" banner → a bordered placeholder
  box (no external ad); icons → lucide-react (e.g. ChevronLeft/ChevronRight
  for any carousel/tab controls, social icons as inline SVG — lucide-react
  removed brand glyphs); fonts via Google Fonts `<link>` in `index.html`;
  logo recreated as a bold text wordmark "Pressly" in brand red.

Pressly lives in `apps/pressly` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Header with wordmark, nav links, and ad banner

The system SHALL render a header with a brand-red wordmark on the left,
five centered nav links, and a placeholder ad banner on the right.

#### Scenario: Header layout

- **GIVEN** the Pressly page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the wordmark "Pressly" on the left in the
  brand red `#ef1c49`
- **AND** five nav links SHALL be shown in the center: International, Local
  News, Pages, Sport, and Lifestyle
- **AND** a rectangular placeholder ad banner labeled "YOUR ADD HERE"
  SHALL be shown on the right

#### Scenario: Mobile header

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the page loads
- **THEN** the nav links SHALL collapse behind a menu toggle (hamburger)
  that opens the same five links
- **AND** the ad banner SHALL be hidden or stacked below the header

### Requirement: Trending bar

The system SHALL render a light-gray trending strip below the header with a
red "Trending" label and placeholder headline text.

#### Scenario: Trending strip

- **GIVEN** the page is rendered
- **WHEN** the trending bar is displayed
- **THEN** a light-gray `#f4f4f4` strip SHALL show a red `#ef1c49`
  "Trending" label followed by a placeholder news headline

### Requirement: Featured news grid

The system SHALL render a two-column featured grid: one large lead article
on the left and two stacked smaller articles on the right, each with an
image, a dark gradient overlay, a date line, and a white headline.

#### Scenario: Lead article

- **GIVEN** the featured grid is displayed
- **WHEN** the page loads
- **THEN** the left column SHALL show a large article card with an image,
  a dark gradient overlay, a small date line (e.g. "June 20, 2018"), and
  the white headline "Traffic Problems in Time Square"

#### Scenario: Smaller featured articles

- **GIVEN** the featured grid is displayed
- **WHEN** the page loads
- **THEN** the right column SHALL show two stacked smaller cards with
  images, overlays, date lines, and the headlines "The best way to spend
  your holiday" and "Sport results for the weekend games"

#### Scenario: Mobile featured grid

- **GIVEN** the featured grid is displayed on a narrow viewport
- **WHEN** the page loads
- **THEN** the cards SHALL stack vertically with the lead article first

### Requirement: "All The News" tabbed section

The system SHALL render an "ALL THE NEWS" heading with a tab row (LATEST
active, POPULAR, INTERNATIONAL, LOCAL) and a row of article thumbnail cards.

#### Scenario: News tabs

- **GIVEN** the news section is displayed
- **WHEN** the page loads
- **THEN** a letter-spaced "ALL THE NEWS" heading SHALL appear
- **AND** the tabs LATEST, POPULAR, INTERNATIONAL, and LOCAL SHALL be shown
- **AND** the LATEST tab SHALL be active with red text and a red underline

#### Scenario: Switching tabs

- **GIVEN** the news tabs are displayed
- **WHEN** the user activates a non-active tab (e.g. POPULAR)
- **THEN** that tab SHALL become active (red text + red underline) and the
  previously active tab SHALL become inactive

#### Scenario: Article thumbnails

- **GIVEN** the news section is displayed
- **WHEN** the page loads
- **THEN** at least two article thumbnail cards (image + title) SHALL be
  shown side by side below the tabs
- **AND** on a narrow viewport the thumbnails SHALL stack vertically

### Requirement: Newsletter sidebar widget

The system SHALL render a light-gray newsletter box with a bold heading, an
email input, and a red Subscribe button.

#### Scenario: Newsletter form

- **GIVEN** the newsletter widget is displayed
- **WHEN** the page loads
- **THEN** a light-gray box SHALL show the heading "Subscribe to our
  newsletter", an email input with placeholder "Your Email", and a red
  `#ef1c49` "Subscribe" button

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is displayed
- **WHEN** the user enters an email and presses Subscribe
- **THEN** the form SHALL indicate the subscription was received
- **AND** submitting an invalid email SHALL show a validation error and no
  success message

### Requirement: Footer (inferred)

The system SHALL render a dark footer with a brand blurb, a links column,
contact/social info, and a copyright line with the ColorLib credit.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a brand/About blurb, a links column, contact or
  social icon links, and a copyright line crediting ColorLib
- **AND** the footer SHALL use a dark background consistent with the
  monorepo's other news templates

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Pressly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, trending bar, featured news
  grid, "All The News" section, newsletter widget, and footer in order
- **AND** the document title SHALL be "Pressly — News Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/pressly`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/pressly`)
- [ ] Section order matches the reference 1:1 (header → trending bar → featured grid → All The News → newsletter widget → footer)
- [ ] Design tokens in `@theme` (brand red #ef1c49, ad cyan #74cbe0, page #ffffff, light gray #f4f4f4, sans-serif font stack)
- [ ] Header: red "Pressly" wordmark left, 5 centered nav links, right ad-banner placeholder; mobile hamburger menu
- [ ] Trending bar: light-gray strip + red "Trending" label + placeholder headline
- [ ] Featured grid: large lead card left + two stacked smaller cards right, all with dark gradient overlay, date line, white headline; stacks on mobile
- [ ] All The News: letter-spaced heading, 4 tabs (LATEST active with red underline), thumbnail cards; tab switching updates active state
- [ ] Newsletter widget: light-gray box, "Subscribe to our newsletter" heading, "Your Email" input, red Subscribe button; invalid email shows validation error
- [ ] Footer (inferred from category conventions — flag in PR): dark bg, blurb, links, social icons, ColorLib credit
- [ ] Document title "Pressly — News Template"
- [ ] BOTH TEMPLATES.md rows marked `[x]` on completion: line 276 (Blog) and line 2207 (Magazine); fix the wrong screenshot reference (`newsbox-free-template.jpg` → `newsflex-free-news-magazine-website-template.jpg`) in both rows
