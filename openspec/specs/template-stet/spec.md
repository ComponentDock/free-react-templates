# Template: Stet (Blog Template)

## Purpose

Stet is a single-page blog/magazine landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Wordsmith" website template design
(source: https://colorlib.com/wp/template/wordsmith/), built under a
DIFFERENT name (Stet — a copyediting term meaning "let it stand", a
writing/typography reference) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Wordsmith" — editorial blog/magazine template
  (category: Blog). The official preview
  `https://preview.colorlib.com/theme/wordsmith/` is LIVE (HTTP 200, ~35 KB
  HTML; stylesheets: `css/base.css`, `css/vendor.css`, `css/main.css`
  ~80 KB parsed for tokens). The TEMPLATES.md screenshot
  (`wordsmith-free-template.jpg`, 1200×946) confirms the same design.
- **Visual design (screenshot `wordsmith-free-template.jpg`):** clean
  light-gray (`#f2f2f2`) page; white 78px header with a bold black serif
  logo "wordsmith." (with trailing period) top-left, centered uppercase
  sans nav (HOME / CATEGORIES▾ / BLOG▾ / STYLES / ABOUT / CONTACT) and a
  SEARCH link with magnifier top-right; below the header a full-width hero
  slider with a dark atmospheric photo (musician with guitar) and centered
  white text: uppercase category badge (MUSIC), large white serif headline
  ("What Your Music Preference Says About You and Your Personality."),
  author + date meta; three pagination dots under the slider (center dot
  filled); then a 3-column row of blog entry cards with photo thumbnails
  (abstract texture, coffee cup, water/sky) — cards show category label,
  serif title, date. Monochromatic palette (black/dark gray/white/light
  gray) with the photography supplying color; navy is the brand dark
  (page body background, primary buttons).
- **Section order (1:1, from live preview DOM):**
  1. Header (`s-header`, white, 78px, absolute, centered content): logo
     left (`images/logo.svg`, alt "Homepage" — the wordmark "Wordsmith."
     in bold serif), desktop nav center (Home, Categories dropdown →
     Lifestyle/Health/Family/Management/Travel/Work, Blog dropdown →
     Video Post/Audio Post/Standard Post, Styles, About, Contact), search
     toggle right (expands `header__search-form` — "Search for:" input +
     Close). Mobile: off-canvas nav panel with "Navigate to" heading,
     all links, and Close.
  2. Featured slider (`s-featured`, bg `#f2f2f2`, padding 15rem top /
     10.2rem bottom): 3 slides (`featured__slide`, 600px tall, centered
     text over full-width background images — guitar man, watch, vintage
     beetle car): uppercase category badge (1.4rem, letter-spacing .3rem,
     white), large Libre Baskerville serif headline, meta (avatar +
     author + date); slider controls: 3 dots + prev/next arrows.
  3. Blog entries (`s-content`, bg `#f2f2f2`, padding 6rem top / 7.2rem
     bottom): 12 `article.col-block` cards in a 3-column grid, each with
     a 400px thumbnail, category label (uppercase, e.g. Design / Health /
     Management), serif title (2.8rem, Libre Baskerville), date meta
     (e.g. June 15, 2018). Pagination `nav.pgn` below: Prev · 1 2 3 4 5 …
     8 · Next.
  4. Extra section (`s-extra`, white bg, padding 12rem top / 10.2rem
     bottom): 3 columns — Popular Posts (heading + carousel of 6 posts:
     title, "By <author>", "on <date>"), Categories (links: Lifestyle,
     Health, Family, Management, Travel, Work, Blog, Video Post, Audio
     Post, Standard Post), Site Links (Home, Blog, Styles, About, Contact,
     Privacy Policy).
  5. Footer (`s-footer`, navy `#111860` bg — the body background, white
     text, padding 10.2rem top/bottom): About Stet (heading + blurb),
     Our Newsletter (heading + blurb + subscribe form: email input
     "Email Address" + submit button), social icons (`footer-social`),
     copyright bar ("Copyright © All rights reserved | This template is
     made with by Colorlib" → credit reworded).
- **Design tokens (extracted from `css/main.css` + `css/base.css`):**
  - Brand navy: `#111860` (page `body` background, `.btn--primary`
    background/border, `ul.disc` bullets, `dt` color, text-fill of
    headings links hover); hover shade `#0d134a` (btn primary hover).
  - Accent yellow: `#ffd900` (`mark`/highlight background, black text);
    notice alert `#fff099` bg / `#bba31b` text.
  - Neutrals: `#f2f2f2` (s-featured + s-content backgrounds), `#FFFFFF`
    (header, s-extra, cards, footer text), `#000000` (headings, btn text),
    body text `rgba(0,0,0,.8)`, nav links `rgba(0,0,0,.6)`, default
    button bg/border `#c5c5c5`, borders `#DDDDDD`/`#E5E5E5`, footer body
    text `rgba(255,255,255,.5)`, footer links `#FFFFFF`.
  - Fonts: **"Nunito Sans"** (body — 1.8rem, line-height 1.8333, weights
    400/700/800; nav weight 800) and **"Libre Baskerville"** (headings —
    weight 700; display 4.8rem; entry title 2.8rem/1.286; logo serif),
    both via Google Fonts.
  - Buttons `.btn`: uppercase, 1.2rem, letter-spacing .3rem, height 6rem,
    line-height 5.6rem, padding 0 3rem, border .2rem, **square corners**
    (no border-radius), default bg `#c5c5c5`; `.btn--primary` navy bg +
    white text, hover `#0d134a`.
  - Category badge (featured slides): uppercase, 1.4rem, letter-spacing
    .3rem, white text, inline-block.
  - Header: white, 78px, text-align center, position absolute, width 100%.
  - Featured slide: 600px height, centered text, image background;
    dots pagination with filled active dot.
  - Pagination `.pgn`: centered, inline list, Prev/Next + page numbers.
  - Footer headings: white; footer links white; footer body text
    `rgba(255,255,255,.5)`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/stet-<n>/<w>/<h>` — featured 1200×600, thumbs
  400×400); icons → lucide-react (Search, ChevronLeft/Right, Menu, X;
  socials as inline SVG brand icons — lucide has no brand icons); Nunito
  Sans + Libre Baskerville via Google Fonts `<link>` in index.html;
  repo-standard shared chrome from `packages/ui` (Button, ButtonLink, cn).
  Authors "Jonathan Smith"/"John Doe" → keep or fictionalize; site name
  "Wordsmith" → "Stet"; the ColorLib credit line in the copyright is
  reworded to the repo convention (no ColorLib branding). The navy body
  background peeking around light-gray content sections is a signature —
  keep it.

Stet lives in `apps/stet` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header

The system SHALL render a white header with the logo, navigation links
with two dropdowns, a search toggle, and a mobile menu.

#### Scenario: Header content

- **GIVEN** the Stet page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the logo "Stet" on the left
- **AND** it SHALL show nav links Home, Categories, Blog, Styles, About,
  and Contact
- **AND** it SHALL show a search control on the right

#### Scenario: Dropdown menus

- **GIVEN** the header is displayed
- **WHEN** the Categories dropdown is opened
- **THEN** it SHALL show Lifestyle, Health, Family, Management, Travel,
  and Work
- **AND** the Blog dropdown SHALL show Video Post, Audio Post, and
  Standard Post

#### Scenario: Search form

- **GIVEN** the header is displayed
- **WHEN** the user activates the search control
- **THEN** a search input SHALL appear with placeholder "Search for:"
  and a Close control

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at mobile width
- **WHEN** the user presses the hamburger button
- **THEN** an off-canvas menu SHALL expand showing the same links with a
  Close control

### Requirement: Featured slider

The system SHALL render a full-width hero carousel with three slides,
each showing a category badge, a serif headline, and author/date meta.

#### Scenario: Slide content

- **GIVEN** the page is rendered
- **WHEN** the featured slider is displayed
- **THEN** the first slide SHALL show an uppercase category badge (e.g.
  Music), the headline "What Your Music Preference Says About You and
  Your Personality.", and meta with author and date

#### Scenario: Slider navigation

- **GIVEN** the featured slider is displayed
- **WHEN** the user clicks the next control or a dot
- **THEN** the slider SHALL advance to the corresponding slide

### Requirement: Blog entries

The system SHALL render a grid of blog entry cards, each with a thumbnail,
category label, title, and date, followed by pagination.

#### Scenario: Entry card content

- **GIVEN** the page is rendered
- **WHEN** the blog entries grid is displayed
- **THEN** it SHALL contain at least six entry cards in a three-column
  grid
- **AND** each card SHALL show an image, an uppercase category label, a
  serif title, and a date

#### Scenario: Pagination

- **GIVEN** the blog entries grid is displayed
- **WHEN** the pagination controls are rendered
- **THEN** the pagination SHALL show Prev, page numbers, and Next

### Requirement: Extra section

The system SHALL render an extra section with Popular Posts, Categories,
and Site Links columns.

#### Scenario: Extra content

- **GIVEN** the page is rendered
- **WHEN** the extra section is displayed
- **THEN** it SHALL show a Popular Posts list with post titles and
  author/date meta
- **AND** a Categories list with at least six category links
- **AND** a Site Links list with Home, Blog, Styles, About, Contact, and
  Privacy Policy

### Requirement: Footer

The system SHALL render a navy footer with an about blurb, a newsletter
subscribe form, social icons, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Stet" heading with a blurb
- **AND** a "Our Newsletter" heading with an email input and subscribe
  button
- **AND** social icons and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Stet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Stet — Blog Template"

## Verification checklist (implementer)

- [ ] `scripts/verify-app.sh stet` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] `npm run spec:validate` passes for `openspec/specs/template-stet`
- [ ] Section order matches the reference 1:1 (Header → Featured slider →
      Blog entries + pagination → Extra section → Footer)
- [ ] Design tokens applied via `@theme` (brand navy `#111860` + hover
      `#0d134a`, accent `#ffd900`, Nunito Sans body + Libre Baskerville
      headings, square uppercase buttons, `#f2f2f2` content backgrounds
      over the navy body background)
- [ ] Featured slider is 600px-tall centered-text slides with dots +
      prev/next controls; blog cards keep the 3-column grid + category
      label + serif title + date
- [ ] No ColorLib assets copied; seeded picsum placeholders + lucide icons
      (brand socials as inline SVGs)
- [ ] PR description includes: source (ColorLib Wordsmith), preview URL,
      tokens used, differences (new name, placeholders)
