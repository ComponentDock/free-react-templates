# Template: Trailmark (Travel Template)

## Purpose

Trailmark is a single-page travel-agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Destino" travel agency website template (see TEMPLATES.md,
Travel section, line 2978), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a photo-driven travel-agency page: a dark navy floating
navbar over a full-viewport sunset coastal hero with a giant translucent
amber watermark word behind white headline copy, a dark parallax search band
("Find the Adventure of a lifetime") with a 4-field inline form, white
destination-card sections (4 "Top destinations in Europe" + 8 "Popular
destinations in 2018"), a red-tinted last-minute-offer band with two giant
percentage cards, a parallax video-teaser band with a circular play button,
a center-focus "Special offers" image slider with circular red nav arrows,
a dark newsletter band, and a very dark navy footer with about text, latest
posts, and a red tag cloud. The whole design is a light white page anchored
by a coral-red brand (`#fe435b`) and dark navy (`#131a2f` / `#080d1d`).

Brand colors: coral red `#fe435b` (primary buttons, nav hover/active,
search block, tag pills); hover dark `#eb334a`; red overlay variants
`rgba(254,64,91,0.79)` (offer cards), `rgba(254,67,91,0.83)` (center slider
slide), `rgba(254,60,82,1)` (tag pills), `#fe364a` (newsletter button),
`#fe3c52` (slider nav + footer date/link hover); hero watermark amber
`#fdaa27` at 34% opacity; headings/text navy `#131a2f`; footer background
`#080d1d`; body text `#3a3a3a`; muted grey `#7d8293` (section subtitles,
footer copy); placeholder grey `#939393`. Fonts: Montserrat (body 14px/400;
headings weight 300; 900 for the hero watermark; 100 for the giant offer
percentages) + Open Sans 300/400 for secondary body copy. Buttons are square
(rect radius 0, 56px tall); circles are reserved for the slider nav (90px,
radius 50%) and the play button.

## Design reference (replication findings)

- **Original:** ColorLib "Destino" — travel agency template
  (source: https://colorlib.com/wp/template/destino/). Listed in
  TEMPLATES.md `## Travel` at line 2978; slug appears exactly once.
- **Live preview URL:** https://preview.colorlib.com/theme/destino/
  (HTTP 200, 23,855 bytes, verified 2026-10-01). HTML saved to
  `/tmp/destino.html`; theme stylesheet `styles/main_styles.css`
  (HTTP 200, 29,211 bytes) saved to `/tmp/destino-main.css`. The preview
  DOM is authoritative for section order and copy; the screenshot
  (`destino-free-template-1.jpg`, reviewed visually) is authoritative for
  the hero's amber watermark + white headline treatment and the dark navy
  navbar floating over the sunset photo.
- **Stylesheets in the reference:** `styles/bootstrap4/bootstrap.min.css`,
  `plugins/font-awesome-4.7.0`, `plugins/OwlCarousel2-2.2.1` (+ theme/
  animate), `plugins/magnific-popup`, `styles/main_styles.css` (theme —
  canonical tokens), `styles/responsive.css`. Icon fonts, owl carousel, and
  magnific-popup are NEVER copied: recreation uses lucide-react icons and
  React-state sliders/modals.
- **Fonts:** `font-family: 'Montserrat', sans-serif` on body/headings;
  `'Open Sans', sans-serif` on secondary body copy. Load Montserrat
  100/300/400/500/900 + Open Sans 300/400 via Google Fonts `<link>` in
  `index.html`.
- **DOM skeleton (section order 1:1, from preview HTML):**
  1. `header.header` > `.header_container` (solid `#131a2f`, height 121px,
     fixed `top: 47px`; scrolled → `top: 15px`, height 90px) containing
     `.logo` (paper-plane mark + "destino" 24px/500 uppercase white +
     "travel agency" 10px uppercase), `.main_nav` (Home · About us · Offers
     · News · Contact — white 15px, active = `#fe435b` + 3px red underline,
     hover = red), and `.search` (absolute right, 121×100% `#fe435b`
     magnifier block, hover `#eb334a`, click → expands to 300px revealing
     an input).
  2. `.home` — `home_background` full-viewport photo (`images/home.jpg`:
     Cinque-Terre-style coastal cliff town at sunset) + `home_content`
     centered at 46%: `home_text_large` giant uppercase "discover"
     (Montserrat 900, 215px, `#fdaa27`, opacity 0.34, line-height 0.75)
     with `home_text_small` "Discover new worlds" (72px/400 white,
     text-shadow `0 11px 51px rgba(0,0,0,0.35)`) absolutely centered over it.
  3. `.find` — parallax dark background (`find.jpg` dark palm leaves) +
     `find_title` "Find the Adventure of a lifetime" (30px/300 white,
     centered) + `find_form`: one flex row of 4 `.find_item`s + red
     `.find_button` "Find". Items: Destination (text input, placeholder
     "Keyword here", 31.4% wide), Adventure type (select "Categories",
     31.4%), Min price / Max price (selects "Price", 10.1% each).
     `.find_input`: 56px tall, transparent bg, 2px solid
     `rgba(255,255,255,0.5)`, white 13px text; selects are appearance-none
     with a custom chevron (recreation: lucide chevron) and italic
     `#939393` placeholder text; hover/focus border `rgba(254,67,91,0.5)`.
     `.find_button`: 14% wide, 56px, `#fe435b`, white 16px/500, square,
     `translateY(14px)` to align with inputs below their labels, hover
     opacity 0.8.
  4. `.top` — white bg; `.section_title` (padding-top 111px, centered):
     h2 "Top destinations in Europe" (Montserrat 300, `#131a2f`) + div
     "take a look at these offers" (16px uppercase `#7d8293`, margin-top
     19px). `.top_content` (margin-top 82px): 4 `.top_item` cards in a
     flex row justify-between (Paris · French Riviera · Cinque Terre ·
     Santorini), each a photo with `.top_item_content` absolutely
     positioned bottom-left (left 33px, bottom 29px): `.top_item_price`
     "From $890" (14px white) + `.top_item_text` name (20px white). No
     image hover zoom in the reference stylesheet.
  5. `.last` — parallax background (`last.jpg` beach) + `last_logo`
     decorative logo absolutely positioned overlapping the section top
     (-51px/-70px, 156×151). Two equal columns, each `.last_item_content`
     a red translucent card `rgba(254,64,91,0.79)` (padding 53/35/90/80,
     white, centered): `.last_subtitle` destination uppercase 16px/500
     ("maldive" / "bali"), `.last_percent` giant discount (160px weight
     100, line-height 0.75 — "50%" / "38%"), `.last_title` "Last Minute
     Offer" (40px/300), `.last_text` lorem (14px, line-height 2.14),
     `.button.last_button` dark navy `#131a2f` rectangle 161×56, white
     "See Offer" 16px/500, square corners. Recreation: static image bg
     (or CSS `background-attachment: fixed`) instead of parallax JS.
  6. `.video_section` — centered flex column over parallax `video.jpg`:
     `video_title` "A day on the island" (30px/300 white), `video_subtitle`
     "A trip organized by Destino's team" (14px/300 white, margin-top 3px),
     circular `.play_button` (SVG circle, fill transparent → hover
     `rgba(255,255,255,0.15)`, 400ms). Recreation: accessible play button
     opening a modal/popover with a placeholder (no copied video assets).
  7. `.popular` — white bg, section_title "Popular destinations in 2018" +
     same subtitle. `.popular_content`: 8 `.popular_item` cards
     (`width: calc((100% - 90px) / 4)`, flex-wrap, margin-bottom 26px,
     last row 0): Turkey · Hawai · Ireland · Thailand · Croatia · Bali ·
     France · Vietnam — photo + overlay content bottom-left (left 28px,
     bottom 27px): "From $890" (14px white) + name (20px white).
  8. `.special` — white bg, section_title "Special offers" + subtitle;
     `.special_content` (margin-top 76px): full-width center-focus owl
     carousel (recreation: React-state slider) of tall image slides; each
     slide `::after` red overlay `rgba(254,67,91,0)` →
     `rgba(254,67,91,0.83)` on the `.center` slide (500ms ease); centered
     content: `.special_category` (24px/300 white — "Visiting", "Culture",
     ...) + `.special_title` link (36px/300 white — Indonesia · India ·
     Thailand · Bali · France). Prev/next `.special_slider_nav`: 90×90
     circles `#fe3c52`, radius 50%, white chevrons, hover opacity 0.8.
  9. `.newsletter` — full-cover dark background (`newsletter.jpg` dark
     leaves); `.newsletter_title` "Subscribe to our Newsletter" (40px/300
     white, centered); form row: `.newsletter_input` email (width
     calc(100% - 180px), 56px, 2px solid `rgba(255,255,255,0.5)`,
     transparent, white text, italic white placeholder "Your E-mail
     Address", padding-left 31px) + `.newsletter_button` (161×56,
     `#fe364a`, white 16px/500, hover opacity 0.8).
  10. `footer.footer` — bg `#080d1d`, padding 79px 0; three col-lg-4
      columns:
      - About: `.logo` (mark + "destino"/"travel agency" white uppercase)
        + `.footer_about_text` lorem (12px/300 `#7d8293`, line-height 2.5)
        + `.copyright` (same style; the original links Colorlib
        attribution — recreation MUST link `https://www.componentdock.com/`
        ("Component Dock") instead, per repo conventions).
      - Latest: `.footer_title` "latest posts" (24px/300 white) + 2
        `.footer_latest_item`s: 78×78 image + title link (16px/300
        `#7d8293`, hover `#fe3c52`) + date (12px/300 `#fe3c52`) —
        "Brazil Summer", "A perfect vacation".
      - Tags: `.footer_title` + `.tags_content` cloud of `.tag` pills:
        bg `rgba(254,60,82,1)`, height 36px, 12px/300 white links,
        padding 0 27px, line-height 36px, margins 6px, hover opacity 0.8 —
        travel · summer · cruise · beach · offer · vacation · trip ·
        city break · adventure.

## Design tokens (from `styles/main_styles.css`)

| Token | Value | Usage |
| --- | --- | --- |
| brand red | `#fe435b` | primary buttons, nav active/hover, search block, tags base |
| red hover | `#eb334a` | search block hover |
| red overlay card | `rgba(254,64,91,0.79)` | last-minute offer cards |
| red overlay center | `rgba(254,67,91,0.83)` | center slide of special slider |
| red overlay subtle | `rgba(254,67,91,0.5)` | input hover/focus borders |
| tag red | `rgba(254,60,82,1)` | footer tag pills (hover 0.8) |
| newsletter red | `#fe364a` | newsletter submit button |
| nav-circle red | `#fe3c52` | slider nav circles, footer date/link hover |
| watermark amber | `#fdaa27` @ 0.34 | hero giant word |
| navy text | `#131a2f` | headings, dark buttons, navbar bg |
| footer navy | `#080d1d` | footer background |
| body text | `#3a3a3a` | secondary body copy (Open Sans) |
| muted grey | `#7d8293` | section subtitles, footer text/links |
| placeholder grey | `#939393` | select placeholder text |
| white | `#FFFFFF` | page bg, overlay card text |

- Fonts: Montserrat 100/300/400/500/900 + Open Sans 300/400 (Google Fonts
  `<link>` in `index.html`; body default Montserrat 14px/400).
- Radii: square corners on all buttons/inputs/cards (radius 0); circles
  only for slider nav (90px, 50%) and play button.
- Buttons: primary red rect (56px tall, white 16px/500, hover opacity 0.8);
  secondary dark navy rect (161×56, `#131a2f`).
- Inputs on dark bands: transparent bg, 2px solid `rgba(255,255,255,0.5)`,
  white text; hover/focus border `rgba(254,67,91,0.5)`.
- Placeholder images (picsum, deterministic): hero `trailmark-hero`,
  find bg `trailmark-find`, top cards `trailmark-top-1..4`, last bg
  `trailmark-last`, video bg `trailmark-video`, popular `trailmark-pop-1..8`,
  special slides `trailmark-special-1..5`, newsletter bg `trailmark-news`,
  footer latest `trailmark-latest-1..2`. Icons from lucide-react (plane,
  search, chevrons, play, menu/x). No ColorLib assets, CSS, or strings in
  the app.

## Requirements

### Requirement: Floating navy header with brand, nav, and search block

The system SHALL render a fixed dark navy header bar floating over the hero
with the Trailmark brand, primary nav, and a red search block.

#### Scenario: Desktop header

- **GIVEN** the Trailmark app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL be fixed near the top (navy `#131a2f` bar,
  ~121px tall desktop) sitting above the hero image
- **AND** it SHALL show the brand on the left: a paper-plane mark (lucide
  or inline SVG, red/white) + "trailmark" (24px/500 uppercase white) with
  "travel agency" (10px uppercase) beneath
- **AND** the nav SHALL list Home · About us · Offers · News · Contact in
  white 15px text
- **AND** the active/hover nav item SHALL turn `#fe435b`, and the active
  item SHALL show a 3px red underline
- **AND** a red `#fe435b` search square (magnifier icon, white) SHALL sit
  flush right; hover → `#eb334a`; activating it SHALL expand the block to
  reveal a text input (React state)

#### Scenario: Scroll and mobile header

- **GIVEN** the header is rendered
- **WHEN** the user scrolls down
- **THEN** the header SHALL shrink (bar ~90px, top offset reduced) with a
  400ms transition
- **AND** on narrow viewports the nav links SHALL collapse behind a
  hamburger toggle (lucide Menu/X, `aria-expanded`) that opens a stacked
  navy menu panel

### Requirement: Hero with amber watermark and white headline

The system SHALL render a full-viewport hero photo with a giant translucent
amber watermark word and centered white headline copy.

#### Scenario: Hero composition

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL show a full-viewport cover photo (picsum
  `trailmark-hero`, coastal-town-at-sunset mood)
- **AND** it SHALL show the giant uppercase word "discover" (Montserrat
  900, ~215px desktop, `#fdaa27`, opacity 0.34, tight line-height)
- **AND** "Discover new worlds" (white, ~72px, weight 400, soft dark
  text-shadow) SHALL be centered over the watermark
- **AND** on small viewports the display sizes SHALL scale down
  proportionally (clamp/vw-based) without overlapping the navbar

### Requirement: Adventure search band

The system SHALL render a dark parallax-style search band with a centered
title and a single-row inline search form.

#### Scenario: Search form

- **GIVEN** the search band is rendered
- **WHEN** it loads
- **THEN** it SHALL show a dark background image treatment (picsum
  `trailmark-find` + dark overlay) with centered white title "Find the
  Adventure of a lifetime" (30px/300)
- **AND** the form SHALL contain, in one row: Destination (text input,
  placeholder "Keyword here"), Adventure type (select, "Categories"
  options), Min price (select), Max price (select), and a red "Find"
  button
- **AND** inputs SHALL be transparent with 2px `rgba(255,255,255,0.5)`
  borders, white text, 56px tall; selects SHALL be appearance-none with a
  lucide chevron and italic `#939393` placeholder text
- **AND** input hover/focus SHALL tint the border `rgba(254,67,91,0.5)`
- **AND** the Find button SHALL be `#fe435b`, white 16px/500, square,
  56px tall, aligned with the inputs, hover opacity 0.8
- **AND** below the desktop breakpoint the fields SHALL stack vertically

### Requirement: Top destinations card row

The system SHALL render a white section with a centered title and a row of
four destination image cards.

#### Scenario: Four destination cards

- **GIVEN** the top-destinations section is rendered
- **WHEN** it loads
- **THEN** it SHALL show the centered section title "Top destinations in
  Europe" (Montserrat 300, `#131a2f`) with uppercase subtitle "take a
  look at these offers" (16px `#7d8293`)
- **AND** it SHALL show 4 image cards in one row (justify-between;
  stacking on mobile): Paris · French Riviera · Cinque Terre · Santorini
- **AND** each card SHALL overlay "From $890" (14px white) and the
  destination name (20px white) at the bottom-left over its photo
  (picsum `trailmark-top-1..4`)
- **AND** each card SHALL be a link (href "#", no inner pages)

### Requirement: Last-minute offer band with red cards

The system SHALL render a photo band with two red translucent offer cards
showing giant discount percentages.

#### Scenario: Two offer cards

- **GIVEN** the last-minute band is rendered
- **WHEN** it loads
- **THEN** it SHALL show a photo background (picsum `trailmark-last`) with
  a decorative logo mark overlapping the top edge
- **AND** it SHALL show two equal cards, each a `rgba(254,64,91,0.79)`
  red translucent panel with centered white content: uppercase destination
  subtitle ("maldive" / "bali"), a giant percentage (160px weight 100 —
  "50%" / "38%"), title "Last Minute Offer" (40px/300), short body copy,
  and a dark navy `#131a2f` "See Offer" button (161×56, white 16px/500,
  square)
- **AND** the two cards SHALL stack vertically on narrow viewports

### Requirement: Video teaser band

The system SHALL render a centered video-teaser band with a circular play
control.

#### Scenario: Video teaser

- **GIVEN** the video band is rendered
- **WHEN** it loads
- **THEN** it SHALL show a dark photo treatment (picsum `trailmark-video`)
  with centered white title "A day on the island" (30px/300) and subtitle
  "A trip organized by Trailmark's team" (14px/300)
- **AND** it SHALL show a circular play button (white ring/triangle) whose
  circle fill transitions to `rgba(255,255,255,0.15)` on hover
- **AND** activating it SHALL open an accessible modal/popover with a
  close control (placeholder content — no copied video assets)

### Requirement: Popular destinations grid

The system SHALL render a white section with a centered title and an
eight-card destination grid (4 per row).

#### Scenario: Eight destination cards

- **GIVEN** the popular-destinations section is rendered
- **WHEN** it loads
- **THEN** it SHALL show the centered title "Popular destinations in
  2018" + uppercase subtitle
- **AND** it SHALL show 8 image cards in a 4-column wrapping grid (2 per
  row on tablet, 1–2 on mobile): Turkey · Hawai · Ireland · Thailand ·
  Croatia · Bali · France · Vietnam
- **AND** each card SHALL overlay "From $890" (14px white) + name (20px
  white) at the bottom-left over its photo (picsum `trailmark-pop-1..8`)

### Requirement: Special offers center-focus slider

The system SHALL render a full-width center-focus image slider with red
overlay on the active slide and circular nav arrows.

#### Scenario: Slider behavior

- **GIVEN** the special-offers slider is rendered
- **WHEN** it loads
- **THEN** it SHALL show the centered title "Special offers" + subtitle
- **AND** it SHALL show tall image slides (picsum `trailmark-special-1..5`)
  with centered white category text (24px/300 — e.g. "Visiting",
  "Culture") and destination title link (36px/300 — Indonesia · India ·
  Thailand · Bali · France)
- **AND** the centered slide SHALL carry a `rgba(254,67,91,0.83)` red
  overlay while side slides stay un-tinted (500ms transition) — a
  React-state center-focus slider, no owl carousel
- **AND** prev/next circular nav buttons (90px, `#fe3c52`, white chevrons,
  hover opacity 0.8) SHALL be positioned at the vertical middle edges and
  cycle the slides

### Requirement: Newsletter band

The system SHALL render a dark newsletter band with an inline email form.

#### Scenario: Newsletter form

- **GIVEN** the newsletter band is rendered
- **WHEN** it loads
- **THEN** it SHALL show a dark full-cover background treatment (picsum
  `trailmark-news` + dark overlay) with centered white title "Subscribe to
  our Newsletter" (40px/300)
- **AND** the form SHALL show an email input (placeholder "Your E-mail
  Address", transparent bg, 2px `rgba(255,255,255,0.5)` border, white
  italic placeholder, 56px) beside a red `#fe364a` "Subscribe" button
  (161×56, white 16px/500, hover opacity 0.8)
- **AND** the row SHALL stack vertically on narrow viewports

### Requirement: Dark footer with about, latest posts, and tags

The system SHALL render a very dark navy footer with three columns.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** it SHALL show bg `#080d1d` with three columns:
  - About: Trailmark brand mark + wordmark, about paragraph (12px/300
    `#7d8293`), and a copyright line
  - Latest posts: white 24px/300 title + 2 items, each a 78×78 thumbnail
    + title link (16px/300 `#7d8293`, hover `#fe3c52`) + date
    (12px/300 `#fe3c52`) — "Brazil Summer", "A perfect vacation"
  - Tags: white title + pill cloud (bg `rgba(254,60,82,1)`, 36px tall,
    white 12px/300 links, hover opacity 0.8): travel · summer · cruise ·
    beach · offer · vacation · trip · city break · adventure
- **AND** the footer SHALL link `https://www.componentdock.com/` branded
  "Component Dock" (replacing the original attribution link)
- **AND** the columns SHALL stack on narrow viewports

### Requirement: Page composition, tokens, and conventions

The system SHALL compose all sections in the reference order and follow
repo conventions.

#### Scenario: Section order and conventions

- **GIVEN** the Trailmark app is rendered
- **WHEN** the page loads
- **THEN** sections SHALL appear in this order: header · hero · find band
  · top destinations · last-minute offers · video teaser · popular
  destinations · special offers slider · newsletter · footer
- **AND** design tokens SHALL live in `@theme` (`src/index.css`): brand
  red `#fe435b`, red variants above, amber `#fdaa27`, navy `#131a2f`,
  footer `#080d1d`, body `#3a3a3a`, muted `#7d8293`; Montserrat/Open Sans
  loaded via Google Fonts `<link>` in `index.html`
- **AND** all images SHALL be deterministic picsum placeholders
  (`picsum.photos/seed/trailmark-<n>/<w>/<h>`) and icons SHALL come from
  lucide-react
- **AND** the app SHALL contain no reference to ColorLib or the source
  name in any file (provenance lives only in this spec, TEMPLATES.md, and
  the PR)
- **AND** inner pages from the reference (offers.html etc.) SHALL NOT be
  recreated — all links are in-page anchors or "#"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec (whole-repo validate may
      fail on unrelated legacy specs — check this spec's own `✓` line).
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/trailmark`
      (`scripts/verify-app.sh trailmark` in FAST_MODE; full `npm run gate`
      in CI).
- [ ] Visual fidelity: floating navy navbar (plane mark + "trailmark" +
      "travel agency", red active underline, expanding red search block,
      shrink-on-scroll), sunset coastal hero with amber "discover"
      watermark + white "Discover new worlds", dark search band ("Find
      the Adventure of a lifetime", 4 fields + red Find button), 4 top
      destination cards, red-overlay last-minute cards with 160px "50%" /
      "38%" + navy See Offer buttons, video teaser with circular play +
      modal, 8 popular destination cards, center-focus special-offer
      slider with red-tinted center slide + circular red nav arrows,
      newsletter band, dark footer (about + latest posts + red tag cloud
      + Component Dock link) match the Destino preview 1:1.
- [ ] Design tokens in `@theme` as listed above; Montserrat 100/300/400/
      500/900 + Open Sans 300/400 via Google Fonts; square buttons
      (radius 0), circular slider nav/play only.
- [ ] Placeholder images use `picsum.photos/seed/trailmark-<n>/<w>/<h>`
      (hero, find bg, top ×4, last bg, video bg, popular ×8, special ×5,
      newsletter bg, latest ×2); icons from lucide-react; no ColorLib
      assets, CSS, or strings anywhere in `apps/trailmark`.
- [ ] `public/CNAME` = `trailmark.free.componentdock.com`; package
      `@free-react-templates/trailmark`; `"homepage"`
      = `https://trailmark.free.componentdock.com`; lockfile registers the
      workspace; `injectUiSource()` present in `vite.config.ts`; footer
      links Component Dock.
