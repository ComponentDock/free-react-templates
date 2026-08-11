# Template: Parchment (Minimal Blog Website Template)

## Purpose

Parchment is a minimal editorial blog home-page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Wordsmith" template design (see TEMPLATES.md), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Wordsmith" — minimal editorial blog one-pager (white
  78px absolute header with a serif italic logo left, centered uppercase nav
  with two dropdowns and a SEARCH trigger right, full-screen search overlay;
  full-bleed 600px featured slider of 3 posts with a 40% black overlay and
  white serif headlines; light-gray #f2f2f2 content section with a 3-column
  grid of white centered post cards and centered pagination; white "extra"
  section with Popular Posts / Categories / Site Links; deep navy #111860
  footer with About + newsletter + socials + copyright; source:
  https://colorlib.com/wp/template/wordsmith/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/wordsmith/
  (HTTP 200, ~35.6 KB HTML fetched; `css/main.css` ~80.3 KB + `css/base.css`
  ~11.6 KB + `css/vendor.css` ~10.6 KB parsed for tokens). Title tag:
  "Wordsmith". jQuery + slick slider (featured carousel), FontAwesome icons,
  no Tailwind.
- **Screenshot analyzed:** `wordsmith-free-template.jpg` (1200×946,
  TEMPLATES.md line 296) — stark white header: "wordsmith." logo in black
  italic serif on the far left, centered uppercase nav (HOME CATEGORIES BLOG
  STYLES ABOUT CONTACT) with dropdown arrows, "SEARCH" label + magnifier icon
  on the right; hero: dark moody guitar photo with small uppercase "MUSIC"
  label, large white serif headline "What Your Music Preference Says About You
  and Your Personality.", meta row "Jonathan Smith • June 02, 2018" (circular
  avatar); three black dots centered below the hero (middle dot filled =
  active slide); light gray page background; below the hero the tops of three
  photo-card thumbnails (teal abstract / coffee cup / portrait) peek in. The
  deep navy footer is below the fold in the screenshot but confirmed on the
  live preview. Matches the live DOM 1:1.
- **Section order (1:1):** Preloader (`div.dots-fade`, 3 animated dots,
  cosmetic) → Header (`header.s-header`, white, height 78px, absolute top:
  `div.header__logo` left at 40px — logo image 165×25 ("wordsmith." italic
  serif; recreate as text in Libre Baskerville italic); `div.header__nav-wrap`
  centered: `ul.header__nav` (Nunito Sans 600 12px uppercase ls 2px, lh 78px)
  — Home (`.current`), Categories (dropdown: Lifestyle, Health, Family,
  Management, Travel, Work), Blog (dropdown: Video Post, Audio Post, Standard
  Post), Styles, About, Contact; links rgba(0,0,0,.6), hover/current #000
  (mobile: #111860, current bold); dropdowns `ul` bg #151515, radius 0 0 3px
  3px, links rgba(255,255,255,.6) hover #FFF (mobile: black, hover #111860);
  `div.header__search-trigger` right — "SEARCH" 12px uppercase ls 2px +
  magnifier icon → opens full-screen search overlay `div.header__search`
  (white, fixed, opacity/visibility transition, z-index 900): centered form
  with giant 6rem Nunito Sans 700 input (border-bottom 1px rgba(0,0,0,.1)),
  hint "Press Enter to begin your search." (rgba(0,0,0,.5)), Close button) →
  Featured slider (`section.s-featured`, bg #f2f2f2, padding 15rem 0 10.2rem —
  header overlays its top; `div.featured-slider` slick: 3 `div.featured__slide`
  600px tall (responsive 576→372px), `div.entry` display table + padding-top
  3rem, `div.entry__background` inline background-image cover + `div.entry
::before` black overlay opacity .4 z-index 1, `div.entry__content`
  table-cell middle, padding 0 15% (10% md / 8% small), z-index 2:
  `div.entry__category` uppercase 1.4rem ls .3rem white mb 1.5rem (slide 1
  "Music", slide 2 "Management", slide 3 "LifeStyle"), `h1` Libre Baskerville
  4.2rem white headline (hover: bottom border rgba(255,255,255,.1)),
  `div.entry__info` (42px circular avatar + `ul.entry__meta` — "Jonathan
  Smith"/"John Doe" • "June 02, 2018" — rgba(255,255,255,.5) 1.6rem; slick
  dots: 10px black circles, active = transparent + 3px black border; arrows:
  70px white circles at -120px outside the slider, hover scale) → Blog entries
  (`section.s-content`, bg #f2f2f2, padding 6rem 0 7.2rem; `div.entries` grid,
  12 `article.item-entry` — white card, centered, padding-bottom 6rem, shadow
  0 1px 3px rgba(0,0,0,.12), overflow hidden; 3-col desktop / 2-col / 1-col
  mobile; `div.item-entry__thumb` cover image (hover scale), `div.item-entry__
text` padding 1.5rem 2.4rem 0: `div.item-entry__cat` — link 700 1.4rem
  uppercase ls .25rem, default #1d28a1, hover #000, mb 1.2rem (Design, Health,
  Management, Lifestyle, Music, Relationships, Creativity, Travel);
  `h2.item-entry__title` Libre Baskerville 2.8rem (2.4rem smaller) #000 mb
  4.5rem; `div.item-entry__date` 1.3rem uppercase ls .2rem rgba(0,0,0,.8)
  absolute left 50% bottom 3.9rem (translateX(-50%))) → Pagination
  (`nav.pgn`, margin 3rem auto, centered; ul inline-block padding 0 6rem:
  `li.pgn__num` Nunito Sans 700 1.7rem, 3.6rem tall, padding .3rem 1.2rem,
  #000, hover bg #DDDDDD; `.current` bg #111860 white; `.pgn__prev/.pgn__next`
  arrow icon buttons 5rem × 3.6rem radius 3px, hover #DDDDDD: Prev 1 2 3 4 5 …
  8 Next) → s-extra (`section.s-extra`, white bg, padding 12rem 0 10.2rem,
  1.5rem/1.8; h3 1.4rem uppercase ls .25rem mb 4.5rem padding-top 1.8rem with
  ::before 1px rgba(0,0,0,.1) full-width rule + ::after 2px #111860 90px bar):
  row → `div.col-seven.md-six.tab-full.popular` "POPULAR POSTS" +
  `div.popular__posts.block-1-2` (2-col grid of 6 `article.popular__meta`:
  thumb + h5 title + meta "By John Doe on Jun 14, 2018" 1.3rem
  rgba(0,0,0,.5)); `div.col-four.md-six.tab-full.end` → row: `div.col-six
.categories` "CATEGORIES" (Lifestyle, Travel, Recipes, Management, Health,
  Creativity — hover #111860) + `div.col-six.sitelinks` "SITE LINKS" (Home,
  Blog, Styles, About, Contact, Privacy Policy) → Footer (`footer.s-footer`,
  no own background — body bg #111860 shows through; padding 10.2rem 0 (mobile
  6rem), 1.5rem/2 rgba(255,255,255,.5); h4 Nunito Sans 700 1.4rem uppercase ls
  .25rem white pb 4.2rem with ::after 120px × 1px rgba(255,255,255,.1)
  underline: `div.col-six.tab-full.s-footer__about` "ABOUT WORDSMITH" + 3
  paragraphs (Fugiat quas eveniet…); `div.col-six.tab-full.s-footer__
subscribe` "OUR NEWSLETTER" + paragraph + `form.subscribe-form#mc-form`
  (email input 5.4rem, mail icon left, bg rgba(0,0,0,.25), white text +
  placeholder, mb 1.8rem + "Send" submit absolute right, black bg, white,
  5.4rem, padding 0 20px, radius 3px); `div.s-footer__bottom` → row:
  copyright spans separated by "|" rgba(255,255,255,.1) — "© Copyright All
  rights reserved | This template is made with <heart> by Colorlib" (→
  original attribution); `ul.footer-social` 5 brand icons (Facebook, Twitter,
  Instagram, Pinterest, Google+) 3rem white; `div.go-top` back-to-top (optional)).
- **Design tokens extracted from the preview CSS (computed values verified in
  the stylesheet):**
  - Brand navy: **#111860** — `body` page background (shows through as the
    footer band), `.btn.btn--primary` bg/border, nav current/hover on mobile,
    `.pgn .current` bg, `.s-extra h3::after` underline bar (2px × 90px),
    `.s-extra a:hover`, `.categories li a:hover`, `.stats-tabs li a:hover`.
  - Navy hover: **#0d134a** — `.btn.btn--primary:hover` bg/border.
  - Indigo link: **#1d28a1** — global `a` color (card category labels,
    links).
  - Ink: **#000000** — logo, headings, `.pgn__num` color, slider dots,
    `.header__search-form` input/label, newsletter submit bg, nav hover/
    current (desktop), `.item-entry__cat a:hover`.
  - Paper: **#ffffff** — `.s-header` bg, `.item-entry` card bg, `.s-extra` bg,
    slide headline + category text, footer text.
  - Section gray: **#f2f2f2** — `.s-featured` and `.s-content` bg.
  - Dropdown dark: **#151515** — `.header__nav li ul` bg.
  - Hover gray: **#dddddd** — `.pgn__num:hover`, `.pgn__prev/next:hover` bg.
  - Text: body rgba(0,0,0,.8); nav links rgba(0,0,0,.6); muted-on-light
    rgba(0,0,0,.5) (popular meta, search hint); muted-on-dark
    rgba(255,255,255,.5) (slide meta, footer text); footer links #FFF.
  - Fonts: headings + logo **"Libre Baskerville"** serif (logo italic;
    slide h1 4.2rem; card titles 2.8rem → 2.4rem small); body/UI
    **"Nunito Sans"** sans-serif (body 1.8rem lh 1.8333; nav 600 12px
    uppercase ls 2px lh 78px; section h3/h4 1.4rem uppercase ls .25rem; slide
    category 1.4rem uppercase ls .3rem; search input 700 6rem).
  - Radii: **3px** (buttons, pgn prev/next, dropdown bottom corners); **50%**
    (avatar 42px, slider dots 10px, slider arrows 70px).
  - Shadows/overlays: card `0 1px 3px rgba(0,0,0,.12)`; slide `::before`
    black opacity .4 (z-index 1); dropdown arrow notch via rotated border.
- **Recreation decisions:** all photos → seeded picsum
  (`https://picsum.photos/seed/parchment-<n>/<w>/<h>`): featured slides
  parchment-1..3, entry thumbs parchment-4..15, popular-post thumbs
  parchment-16..21, author avatar parchment-22 (same seed reused for the
  author everywhere); icons → lucide-react (Search, X, Menu, ChevronLeft,
  ChevronRight, Mail); social brand icons → inline SVG (lucide removed brand
  icons); fonts Libre Baskerville (italic 400 + 400/700) + Nunito Sans
  (400/600/700/800) via Google Fonts `<link>` in `index.html`; the featured
  slider is a state-based carousel with dot + prev/next controls (no new
  deps); logo "wordsmith." image → text in Libre Baskerville italic (e.g.
  "parchment."). Tokens #111860 / #0d134a / #1d28a1 / #151515 / #f2f2f2 /
  #dddddd / #000 / #fff + rgba(0,0,0,.8/.6/.5) + rgba(255,255,255,.5) in
  `@theme`.

Parchment lives in `apps/parchment` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Header

The system SHALL render a white 78px header with the logo left, a centered
uppercase nav with dropdowns, and a search trigger that opens a full-screen
search overlay.

#### Scenario: Header content

- **GIVEN** the Parchment page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL have a white background, be 78px tall, and sit at
  the top of the page with the logo on the left and the search trigger on the
  right
- **AND** the logo SHALL read "parchment." in italic Libre Baskerville serif
  in black
- **AND** the nav SHALL show Home (current), Categories, Blog, Styles, About,
  and Contact in Nunito Sans 600 12px uppercase with 2px letter-spacing
- **AND** the Categories dropdown SHALL contain Lifestyle, Health, Family,
  Management, Travel, and Work
- **AND** the Blog dropdown SHALL contain Video Post, Audio Post, and Standard
  Post
- **AND** dropdown menus SHALL use a #151515 background with near-white links
  (white on hover)
- **AND** the search trigger SHALL show "SEARCH" with a magnifier icon

#### Scenario: Search overlay

- **GIVEN** the header is rendered
- **WHEN** the user activates the search trigger
- **THEN** a full-screen white search overlay SHALL appear with a large
  centered search input (6rem bold Nunito Sans, bottom-border underline) and
  the hint "Press Enter to begin your search."
- **AND** the user SHALL be able to close the overlay again

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user opens the mobile menu
- **THEN** the nav links SHALL be reachable via a collapsible full-screen
  panel with the current link in #111860 bold

### Requirement: Featured slider

The system SHALL render a full-width featured slider of three posts with a
black overlay and white serif headlines.

#### Scenario: Slider content

- **GIVEN** the featured slider is rendered
- **WHEN** the page loads
- **THEN** the slider SHALL show one featured post at a time (~600px tall,
  full-width background image with a 40% black overlay)
- **AND** each slide SHALL show an uppercase white category label (Music /
  Management / LifeStyle), a white Libre Baskerville headline ("What Your
  Music Preference Says About You and Your Personality.", "The Pomodoro
  Technique Really Works.", "The difference between Classics, Vintage & Antique
  Cars."), and a meta row with a 42px circular author avatar, the author name
  (Jonathan Smith / John Doe), a bullet, and a date (June 02, 2018 / June 13,
  2018 / June 12, 2018) in 50%-white text

#### Scenario: Slider navigation

- **GIVEN** the featured slider is displayed
- **WHEN** the user clicks a dot indicator or a prev/next arrow
- **THEN** the visible slide SHALL change accordingly
- **AND** the dots SHALL be 10px black circles with the active dot shown as a
  transparent circle with a 3px black border
- **AND** the arrows SHALL be 70px white circles positioned at the slider
  edges (outside on desktop)

### Requirement: Blog entries grid

The system SHALL render the light-gray content section with a responsive grid
of post cards.

#### Scenario: Entry cards

- **GIVEN** the entries grid is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a #f2f2f2 background
- **AND** it SHALL render twelve post cards in a responsive grid (3 columns on
  desktop, 2 on tablet, 1 on mobile)
- **AND** each card SHALL be white and centered with a cover thumbnail, a
  category label (700 1.4rem uppercase, indigo #1d28a1, black on hover), a
  Libre Baskerville title, and a date centered near the card bottom (1.3rem
  uppercase with .2rem letter-spacing)
- **AND** cards SHALL carry a subtle 1px shadow and hover-scale the thumbnail

### Requirement: Pagination

The system SHALL render a centered pagination row under the entries grid.

#### Scenario: Pagination content

- **GIVEN** the entries grid is rendered
- **WHEN** the page loads
- **THEN** a centered pagination SHALL show Prev, 1–5, …, 8, and Next
- **AND** page numbers SHALL be 3.6rem-tall black text with a #dddddd hover
  background
- **AND** the current page SHALL use a #111860 background with white text
- **AND** the Prev/Next controls SHALL be arrow-icon buttons with 3px radius
  and a #dddddd hover background

### Requirement: Popular posts, categories, and site links

The system SHALL render a white section with Popular Posts, Categories, and
Site Links columns, each headed by an uppercase label with a 2px #111860
underline bar.

#### Scenario: Section headings

- **GIVEN** the s-extra section is rendered
- **WHEN** the page loads
- **THEN** each column SHALL have an uppercase 1.4rem heading with .25rem
  letter-spacing, a 1px full-width rule above it, and a 90px × 2px #111860
  accent bar

#### Scenario: Popular posts

- **GIVEN** the s-extra section is rendered
- **WHEN** the page loads
- **THEN** the "POPULAR POSTS" column SHALL list six entries in a 2-column
  grid, each with a thumbnail, a serif title, and a "By John Doe on <date>"
  meta line in 50%-black text

#### Scenario: Categories and site links

- **GIVEN** the s-extra section is rendered
- **WHEN** the page loads
- **THEN** the "CATEGORIES" column SHALL list Lifestyle, Travel, Recipes,
  Management, Health, and Creativity (links turn #111860 on hover)
- **AND** the "SITE LINKS" column SHALL list Home, Blog, Styles, About,
  Contact, and Privacy Policy

### Requirement: Footer

The system SHALL render a deep navy footer on the page background with an
about column, a newsletter signup, social links, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL sit on the #111860 page background with text in
  50%-white (links white) and white uppercase 1.4rem headings with a 120px
  semi-transparent white underline
- **AND** the "ABOUT PARCHMENT" column SHALL show the brand story paragraphs
- **AND** the "OUR NEWSLETTER" column SHALL show a blurb and a subscribe form
  with a mail-icon email input (rgba(0,0,0,.25) background, white text) and a
  black "Send" button
- **AND** the footer SHALL show five social brand icons in white and a
  copyright bar with "© Copyright All rights reserved" separated from an
  original attribution by a "|" divider

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Parchment app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the
  featured slider, entries grid, pagination, and s-extra section in the main
  landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Parchment — Minimal Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/parchment` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- parchment` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#111860, #0d134a, #1d28a1, #151515, #f2f2f2, #dddddd, #000, #fff, rgba(0,0,0,.8/.6/.5), rgba(255,255,255,.5), Libre Baskerville + Nunito Sans) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `parchment-<n>`, Google Fonts link, lucide icons + inline SVG brand icons only)
- [ ] Body page background reproduced (#111860 visible behind the footer band and page edges; content sections #f2f2f2 / #fff on top)
- [ ] Featured slider implemented with client-side state (dots + prev/next; fake timers in tests where needed)
