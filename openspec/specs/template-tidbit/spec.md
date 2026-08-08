# Template: Tidbit (Blog / Magazine Template)

## Purpose

Tidbit is a single-page blog template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Miniblog" website
template design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Miniblog" — blog/magazine template
  (source: https://colorlib.com/wp/template/miniblog/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/miniblog/
  (HTTP 200, 22.8 KB rendered DOM, title "Mini Blog"). Stylesheets:
  `css/style.css` (24.2 KB, extracted) on a Bootstrap 4 base, plus
  bootstrap.min.css, owl.carousel (unused on this page), magnific-popup,
  jquery-ui, aos, icomoon + flaticon icon fonts. Google Fonts loads **Muli**
  (300/400/700) and **Playfair Display** (400/700/900); Playfair is loaded
  but NOT referenced in any stylesheet (unused — recreation may drop it or
  use it for the logo/display type).
- **Screenshot:** `miniblog-free-template.jpg` (TEMPLATES.md line 273) —
  also verified against the live rendered page in a browser (vision
  analysis): clean editorial blog; white header with "Mini Blog" logo left
  and bold nav links right; hero is an asymmetric 3-column grid of large
  photos with a dark bottom gradient overlay carrying white titles and
  dates, the middle column taller with colored category tags (TRAVEL, FOOD);
  "Recent Posts" 3×3 grid of cards with rounded images, small uppercase
  colored category pills, bold black headlines, grey byline meta
  ("By Carrol Atkinson — July 19, 2019"), lorem excerpt and a plain blue
  "Read More" text link; circular pagination (active page = solid blue
  circle); a second "retro" asymmetric photo grid on a light-grey band;
  a centered "Subscribe to our newsletter" form (square blue Subscribe
  button); dark charcoal footer (#333333) with About Us text, two link
  columns, social icons and a copyright line.
- **Visual design (from DOM + CSS tokens + rendered screenshot):** modern
  editorial blog aesthetic — white page background, ink `#000` headlines,
  blue `#2f89fc` interactive accent (links, active nav, active pagination),
  light-grey `#f8f9fa` section bands, square buttons (radius 0), rounded
  post images (4px), tiny uppercase category pills in varied Bootstrap
  colors, 40px circular pagination, dark `#333333` footer. The demo brands
  itself "Mini Blog"; recreation uses the NEW name **Tidbit**.

- **Structure (1:1, section order):**
  1. Header `header.site-navbar` (white bg, `position: relative`,
     `z-index: 1999`) — `div.container-fluid` > `div.row.align-items-center`:
     hidden `div.col-12.search-form-wrap.js-search-form` (absolute,
     full-width, white bg, email input + submit); `div.col-4.site-logo` link
     **"Mini Blog"** (font-size 1.5rem); `div.col-8.text-right` >
     `nav.site-navigation` > `ul.site-menu`: **Home** (`.active`, color
     `#2f89fc`) / **Politics** / **Tech** / **Entertainment** / **Travel** /
     **Sports** + search icon toggle (icomoon). Mobile: off-canvas
     `div.site-mobile-menu` (header with close btn + body listing the same
     links), opened via hamburger.
  2. Hero `div.site-section.bg-light` > `div.container` >
     `div.row.align-items-stretch.retro-layout-2` — three `col-md-4`
     columns: columns 1 and 3 each stack TWO `a.h-entry.v-height.gradient`
     cards (background-image via inline style, `::before` dark gradient);
     column 2 holds ONE tall `a.h-entry.img-5.h-100.gradient`. Every card:
     `div.text` (absolute bottom, padding 20px, max-width 350px) with `h2`
     (white, 18px, lh 1.5) headline + `span.date` (rgba(255,255,255,0.5))
     "July 19, 2019"; the middle card adds `div.post-categories.mb-3` with
     `span.post-category.bg-danger` **Travel** + `span.post-category.bg-primary`
     **Food**. Headlines: "The AI magically removes moving objects from
     videos." (cols 1–2) and "The 20 Biggest Fintech Companies In America
     2019" (col 3). All cards link to `single.html`.
  3. Recent Posts `div.site-section` > `div.container` — `div.row.mb-5` >
     `div.col-12` heading **"Recent Posts"**; then `div.row` of NINE
     `div.col-lg-4.mb-4` cards `div.entry2`: `a` > `img.img-fluid.rounded`
     (mb 30px, links to single.html); `div.excerpt` (padding 0 20px):
     `span.post-category.text-white.bg-secondary.mb-3` category (Politics /
     Nature / Travel / Sports / Tech / Lifestyle), `h2` (24px, weight 700,
     mb 30px) > `a` headline (color `#000`), `div.post-meta` (13px,
     `#b3b3b3`): `figure.author-figure.mb-0.mr-3.float-left` avatar circle +
     "By Carrol Atkinson — July 19, 2019", lorem paragraph, `p` >
     `a` **"Read More"** (blue link).
  4. Pagination `div.row.text-center.pt-5.border-top` > `div.col-md-12` >
     `div.custom-pagination` — links **1 2 3 4 … 15**, each a 40×40 circle
     (border-radius 50%); current page `#2f89fc` bg + white text, others
     light-grey circles.
  5. Retro layout `div.site-section.bg-light` > `div.container` >
     `div.row.align-items-stretch.retro-layout` — `div.col-md-5.order-md-2`:
     `a.h-entry.v-height.gradient` (300px) **Travel** (`span.post-category`,
     margin-left 20px) + `div.text` h2 + date "February 12, 2019";
     `div.col-md-7`: `a.h-entry.v-height.gradient` **Nature** +
     `div.text.text-sm` h2 + date; `div.two-col.d-block.d-md-flex`: two
     cards **Sports** and **Lifestyle** (`div.text.text-sm`). Headline:
     "The 20 Biggest Fintech Companies In America 2019".
  6. Newsletter `div.site-section.bg-lightx` (bg-lightx is NOT a real class
     → white background) > `div.row.justify-content-center.text-center` >
     `div.col-md-5` > `div.subscribe-1`: `h2` **"Subscribe to our
     newsletter"** (20px), `p.mb-5` lorem, `form.d-flex`: `input.form-control`
     placeholder "Enter your email address" + `input.btn.btn-primary`
     value **"Subscribe"** (square, blue bg, white text).
  7. Footer `div.site-footer` (bg `#333333`, padding 4em/5em) —
     `div.row.mb-5`: `div.col-md-4` (h3.footer-heading "About Us" + lorem,
     text `#737373`), `div.col-md-3.ml-auto` (two `ul.list-unstyled.float-left`
     link columns: About Us / Advertise / Careers / Subscribes and Travel /
     Lifestyle / Sports / Nature; links `#999999` → white hover; the
     "Navigation" h3 is commented out in the source), `div.col-md-4`
     (h3.footer-heading "Connect With Us" + social icon links
     `icon-facebook`, `icon-twitter`, `icon-instagram`, `icon-rss`,
     `icon-envelope`); `div.row` > `div.col-12.text-center` copyright line:
     "Copyright © All rights reserved | This template is made with ♥
     (icon-heart text-danger) by Colorlib".

- **Design tokens extracted from `css/style.css`:**
  - Accent blue **`#2f89fc`** — `a` color, active nav link, nav link hover,
    `.custom-pagination a` bg, `.post-category.bg-primary`.
  - Accent hover **`#046df4`** — `a:hover`.
  - Ink **`#000`** — `h1–h5`, nav links (weight 700), `.entry2 h2 a`,
    `.site-logo`.
  - Body text: Bootstrap `gray` (`#808080`), weight 300, 1rem, lh 1.7;
    `.post-meta` 13px `#b3b3b3`; `::selection` black bg white text.
  - Light bands **`.bg-light` `#f8f9fa`** — hero section, retro section;
    white page bg elsewhere (newsletter section has NO background class).
  - Buttons: `.btn` border-radius **0** (square); subscribe uses Bootstrap
    `.btn-primary` (stock blue `#007bff`, white text) — either keep the
    stock blue or unify to `#2f89fc`; note the difference in the PR.
  - Category pills `.post-category`: inline-block, padding 2px 10px,
    border-radius **4px**, letter-spacing **.2em**, font-weight 700,
    font-size **.6rem**, white text (`text-white`), background from
    Bootstrap `bg-*` utilities (primary blue, danger red, secondary gray,
    success green, …).
  - Images: Bootstrap `.rounded` (4px radius); `.entry2 img` mb 30px.
  - Pagination `.custom-pagination span/a`: 40×40, line-height 40px,
    border-radius **50%**; active `a` bg `#2f89fc` color `#fff`; inactive
    circles light-grey.
  - Hero gradient `.gradient:before`: `linear-gradient(to bottom,
transparent 0%, transparent 18%, rgba(0,0,0,0.8) 99%)`; `.text` overlay
    absolute bottom, padding 20px, max-width 350px, h2 18px white lh 1.5,
    `.date` rgba(255,255,255,0.5); `.retro-layout .v-height` 300px.
  - Section spacing: `.site-section` padding 2.5em (mobile) / 5em (desktop);
    `.site-footer` padding 4em / 5em.
  - Header: white bg, `z-index: 1999`; `.site-logo` 1.5rem; nav `li`
    padding 10px 10px, links weight 700 `#000`, hover/active `#2f89fc`;
    off-canvas mobile menu with `rgba(0,0,0,0.6)` overlay.
  - Footer: bg `#333333`, headings `#fff`, body `#737373`, links `#999999`
    → white hover, `.footer-heading` 16px, social icons inline.
  - Fonts: **Muli** (Google Fonts — body + headings); **Playfair Display**
    loaded but unreferenced (drop or use for logo).

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/tidbit-<n>/<w>/<h>`); icons → lucide-react (search,
  menu, x/close, heart; brand socials as inline SVG since lucide-react
  removed brand glyphs); Muli via Google Fonts `<link>` in `index.html`;
  no assets copied; hero/retro cards render as `img` with `object-cover` +
  gradient overlay (or bg-image divs) — either is fine as long as the
  gradient overlay + bottom text match. No carousel on this template.

Tidbit lives in `apps/tidbit` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header navigation

The system SHALL render a white header with the site name, a navigation
menu with section links, a search toggle, and a mobile off-canvas menu.

#### Scenario: Header content

- **GIVEN** the Tidbit page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Tidbit" on the left
- **AND** nav links Home, Politics, Tech, Entertainment, Travel, and Sports
  SHALL be visible on the right
- **AND** the Home link SHALL be marked as the active section in the accent
  color

#### Scenario: Search toggle

- **GIVEN** the header is rendered
- **WHEN** the user presses the search icon
- **THEN** a full-width search form SHALL appear over the header with an
  email/text input and a submit button

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** an off-canvas menu SHALL open with the same section links
- **AND** pressing the toggle or the close button again SHALL close it

### Requirement: Hero featured grid

The system SHALL render an asymmetric 3-column hero grid of featured-post
cards, each with a background image, a dark bottom gradient, a white
headline, and a date; the middle card SHALL include category tags.

#### Scenario: Hero cards

- **GIVEN** the hero section is displayed
- **WHEN** the page loads
- **THEN** three columns SHALL be shown: two cards stacked in the left
  column, one tall card in the middle column, and two cards stacked in the
  right column
- **AND** every card SHALL show a white headline and a date over the image
  with a dark bottom gradient
- **AND** the middle card SHALL show category tags (e.g. Travel, Food) as
  colored pills above the headline

### Requirement: Recent Posts grid

The system SHALL render a "Recent Posts" heading followed by a 3×3 grid of
post cards, each with a rounded image, a category pill, a headline, post
metadata, an excerpt, and a "Read More" link.

#### Scenario: Recent Posts content

- **GIVEN** the Recent Posts section is displayed
- **WHEN** the page loads
- **THEN** a heading "Recent Posts" SHALL be shown
- **AND** nine post cards SHALL appear in a 3-column grid
- **AND** each card SHALL show a rounded image, a category pill, a black
  headline, metadata ("By <author> — <date>"), an excerpt, and a
  "Read More" link

### Requirement: Pagination

The system SHALL render circular pagination with the current page
highlighted in the accent color.

#### Scenario: Pagination content

- **GIVEN** the page is rendered
- **WHEN** the pagination control is displayed
- **THEN** circular page links (1, 2, 3, 4, …, 15) SHALL be shown
- **AND** the current page SHALL be a solid accent-colored circle with
  white text

### Requirement: Retro layout section

The system SHALL render a light-background asymmetric "retro" section with
featured-post cards (image, category tag, headline, date).

#### Scenario: Retro cards

- **GIVEN** the retro layout section is displayed
- **WHEN** the page loads
- **THEN** a tall card with a Travel category tag SHALL appear on the right
- **AND** a Nature card SHALL appear on the left with a smaller text style
- **AND** two more cards (Sports, Lifestyle) SHALL appear in a two-column
  row below
- **AND** each card SHALL show a headline and a date

### Requirement: Newsletter subscribe

The system SHALL render a centered subscribe section with a heading, a
description, an email input, and a square subscribe button.

#### Scenario: Subscribe form

- **GIVEN** the subscribe section is displayed
- **WHEN** the user enters an email and presses the Subscribe button
- **THEN** the section SHALL indicate the subscription was received
  (success message)

#### Scenario: Invalid email

- **GIVEN** the subscribe form is displayed
- **WHEN** the user submits without a valid email
- **THEN** a validation error SHALL be shown and no success message SHALL
  appear

### Requirement: Footer

The system SHALL render a dark footer with an About Us column, two link
columns, social icons, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" heading with descriptive text
- **AND** a two-column link list (About Us / Advertise / Careers /
  Subscribes and Travel / Lifestyle / Sports / Nature)
- **AND** a "Connect With Us" heading with social icons
- **AND** a copyright line "Copyright © <year> All rights reserved" with a
  credit to the template source

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Tidbit app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the
  hero, Recent Posts, pagination, retro layout, and subscribe sections in
  the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Tidbit — Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/tidbit`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/tidbit`)
- [ ] Section order matches the reference 1:1 (header → hero grid → Recent Posts → pagination → retro layout → newsletter → footer)
- [ ] Design tokens from the reference used in `@theme` (accent blue #2f89fc, hover #046df4, ink #000, body gray #808080, meta #b3b3b3, bg-light #f8f9fa, footer #333333, Muli font)
- [ ] Square buttons (radius 0), rounded post images (4px), category pills (2px 10px, .2em letter-spacing, .6rem, white text on bg-* colors), 40px circular pagination with active accent circle
- [ ] Hero/retro cards: image + dark bottom gradient (transparent → rgba(0,0,0,0.8)) + white headline + date; off-canvas mobile menu with dark overlay
- [ ] Placeholder images are seeded picsum (no copied assets); icons from lucide-react / inline SVG for brands
- [ ] README Templates status + ALL THREE TEMPLATES.md Miniblog lines (273, 454, 1100) marked `[x]` after merge
