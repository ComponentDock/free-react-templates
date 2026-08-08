# Template: Clamor (Blog Template)

## Purpose

Clamor is a single-page blog template in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Shout" website template
design (see TEMPLATES.md), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Shout" — personal blog / creative-agency hybrid
  (source: https://colorlib.com/wp/template/shout/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/shout/
  (HTTP 200, "Shout — Blog"). Live DOM fetched and parsed, plus
  `css/style.css` (complete, readable) for tokens. Screenshot
  `shout-free-template.jpg` (1200x946) reviewed visually — clean modern blog:
  left hot-pink `#FF63B5` branding panel ("SHOUT." logo + "We Are Functional &
  Creative Agency" white serif headline + tiny uppercase colorlib sub-line),
  three lifestyle image panels with white text overlays (flat-lay brunch,
  beach, handstand), centered "Most popular post" label + "What's hot" serif
  heading, three-column white blog card grid below, hamburger menu top-right.
- **Section order (1:1, from the DOM of the home page):**
  1. Header (`header`, absolute top, padding 2em 0): left logo wordmark
     `colorlib-logo` "Shout." (20px, uppercase, `#fff`, letter-spacing 5px,
     margin-left 20px); right hamburger `colorlib-nav-toggle` (44px, radius
     2px, bg `rgba(0,0,0,0.05)`, hover bg black; 3-bar hamburger
     animates into an X on open).
  2. Featured flex (`#colorlib-featured-flex`, CSS flex, 100% width):
     a. `one-forth` (30% width, bg `#FF63B5`, height 600px, table-cell
     vertically centered, `display: table`): h1 "We Are Functional &
     Creative Agency" (`#fff`, Tenor Sans, 40px), h2 sub-line "html5
     bootstrap template by colorlib.com" (Open Sans, 12px, uppercase,
     letter-spacing 2px, `rgba(255,255,255,0.7)`).
     b. `three-forth` (70% width): `owl-carousel1` slider with 5 `.item`
     slides, each a `featured-img` (600px height, bg image, dark overlay
     `rgba(0,0,0,0.3)` → `0.5` + inset shadow
     `inset 0 -173px 107px -30px rgba(0,0,0,0.24)` on hover). Each slide:
     `.text-inner` link with `.desc` absolutely positioned at bottom 60px:
     h2 title (20px, `#fff`), `meta` line (14px, uppercase,
     `rgba(255,255,255,0.7)`): "Feb 08, 2018 | Web Design | 4",
     arrow icon bottom-right (`rgba(255,255,255,0.7)`). Slide titles:
     "Make website from scratch", "20 Modern Inspirational UI Examples",
     "Support for Legacy Browsers", "An Unobstrusive 'Dashboard' Link"
     (demo typo — render "An Unobtrusive 'Dashboard' Link"), "Fixing
     Jagged Google Fonts in Chrome".
  3. Blog section (`#colorlib-blog`, padding 7em 0, `clear: both`):
     - `intro-heading` (centered, margin-bottom 3em): span "Most popular
       post" (10px, uppercase, letter-spacing 1px, `#bfbfbf`, weight 600) +
       h2 "What's hot" (Tenor Sans, 34px, `#000`).
     - Responsive grid `col-md-4 col-sm-6` (3-col desktop / 2-col tablet /
       1-col mobile) of `blog-entry` cards (white, radius 2px,
       margin-bottom 3em, text-center). Card variants:
       a. Image post: `blog-img` (full-width image, scale 1 → 1.1 on
       card hover) + `.desc` (padding 40px 30px): h3 title (Tenor Sans
       24px, `#000`), meta span (14px, `rgba(0,0,0,0.5)`): "Feb 07,
       2018 | Web Design | 4" with bubble-comment icon, excerpt
       paragraph, `btn btn-primary` "Read More" + arrow-right icon.
       Demo titles: "How to become a fashionist?", "30 Places you want
       to visits" (typo — render "30 Places you want to visit"), "New
       Arrival Jeans Original For Fashion", "Tips For A Long Travel",
       "Food For Your Taste". Excerpt (all cards): "Separated they
       live in Bookmarksgrove right at the coast of the Semantics, a
       large language ocean."
       b. Video post: `blog-image .video.colorlib-video` (bg image, height
       300px, overlay `rgba(0,0,0,0.5)` → `0.7` hover) with centered
       90px white circle play button (shadow
       `0 14px 30px -15px rgba(0,0,0,0.7)`, 40px icon, scale 1.1 on
       hover). Demo: "Video Post - Traveler".
       c. Quote post: `blockquote` (bg `#fafafa`, padding 20px, Tenor
       Sans 20px gray, no left border) with quote text + attribution
       "— John Doe" + meta + Read More.
       d. Audio post: `blog-audio` (padding-top 30px) + desc. Demo:
       "horse Auio Post - Sample" (typo — render "Audio Post -
       Sample").
       e. Gallery post (`gallery-post`): 2 `gallery-img` tiles (50% width
       each, 400px height desktop / 250px mobile).
       Optional `.first-letra` drop-cap: first letter 110px `#000`, float
       left.
  4. Instagram strip (`#colorlib-instagram`, padding 7em 0, padding-bottom
     0): centered h2 with span "Instagram" (16px, uppercase, letter-spacing
     1px, Tenor Sans, `#000`); `instagram-entry` row of 8 image tiles
     (12.5% width desktop / 25% tablet / 50% mobile, height 200px, bg
     images).
  5. Footer (`#footer`, padding 6em 0, bg `#fff`), three columns:
     a. About Me: h2 "About Me" (18px, uppercase, letter-spacing 1px,
     `#000`), portrait image (`about-img`), `author-name` "Vanessa
     Morgan" (Tenor Sans 18px `#000`), blurb "A small river named
     Duden flows by their place and supplies.", social icons
     (facebook / twitter / googleplus / dribbble, 24px, `#FF63B5`).
     b. Latest Blog: h2 "Latest Blog" + 4 `f-entry` rows (margin-bottom
     3em): 80x80 absolute thumb (`featured-img`) + `.desc` (padding-left
     100px): date span (13px, `#999999`, calendar icon) + h3 title
     (18px, `#4d4d4d`). Demo rows: "How to become a fashionist?",
     "Want to have a vacation? Here's an affordable Places to go",
     "6 simple tips to be a slimmer.", "How to become slim?" — all
     dated "February 9, 2018".
     c. Newsletter: h2 "Newsletter" + blurb + subscribe form (input
     `form-control`, bg `#fafafa`, border 2px `rgba(0,0,0,0.01)`,
     radius 30px, focus border `rgba(255,99,181,0.8)`, placeholder
     "Enter Email address") + submit `btn btn-primary btn-custom`
     "Subscribe" (width 100%, padding 10px 0, font-size 16px).
     Bottom `row` centered copyright bar: `span.block` "Copyright © <year>
     All rights reserved | This template is made with <heart> by ..."
     (monorepo credit, not ColorLib).
  6. Off-canvas nav (`#colorlib-main-nav`, right slide-in panel, width 360px
     (300px mobile), bg `#fff`, z-index 1002, slide + scale transition on
     `#colorlib-page`):
     - Search form: input `#search` (bg `#fafafa`, border 2px `#f2f2f2`,
       14px, placeholder "Enter any key to search...", `#333333`) + pink
       search button (radius 0, bg `#FF63B5`, `#fff`, padding 16px).
     - Menu list (left-aligned, uppercase 16px `#000`, padding 10px 0):
       Blog (active → `#FF63B5`), Single Blog, About me, Contact me.
     - "About Me" block (`head-title` 18px uppercase letter-spacing 1px):
       portrait, `author-name` "Vanessa Morgan", blurb, social icons.
     - "Instagram" `head-title` + 4 gallery tiles (50% width, 150px
       height, hover dark overlay + white icon).
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Primary brand **pink `#FF63B5`** (intro panel background, active nav
    link, footer social icons, `btn-primary` background/border, search
    button, pagination active/hover, focus ring `rgba(255,99,181,0.8)`).
    Hover shade **`#ff7dc1`** (btn-primary hover background + border).
  - Dark text: `#000` (blog titles, footer h2, author-name, instagram h2,
    nav links), `rgba(0,0,0,0.8)` (headings h1–h6), `rgba(0,0,0,0.5)`
    (blog meta), `#4d4d4d` (latest-blog titles), `#333333` (search
    placeholder), `#1a1a1a` (copyright block text).
  - Muted: `#666666` (body text), `#999999` (dates, small icons),
    `#bfbfbf` (intro-heading label), `#b3b3b3` (author links).
  - Surfaces: `whitesmoke` (body background), `#fff` (cards, footer,
    nav), `#fafafa` (quote background, form inputs, author box),
    `#f2f2f2` (search border, tag pills).
  - Fonts: **"Tenor Sans"** (h1–h6, author-name, quote, footer h2,
    instagram h2 span, head-title — loaded via Google Fonts) + **"Open
    Sans"** (body, meta, sub-labels; body 14px weight 300, line-height
    1.8).
  - Buttons `.btn`: `border-radius: 30px`, font-size 13px, padding 8px
    20px, transition 0.5s. `.btn-primary`: bg `#FF63B5`, `#fff` text,
    `border: 2px solid #FF63B5`; hover → bg/border `#ff7dc1`.
  - Blog cards `.blog-entry`: radius 2px, bg `#fff`, margin-bottom 3em;
    `.desc` padding 40px 30px; h3 24px `#000`; image scales 1 → 1.1 on
    card hover.
  - Featured: `one-forth` pink panel 30% × 600px (table-centered text);
    slides 600px with overlay `rgba(0,0,0,0.3)` → `0.5` + inset shadow;
    desc pinned bottom 60px; h2 20px white; meta uppercase 14px
    `rgba(255,255,255,0.7)`.
  - Section rhythm: `#colorlib-blog` / `#colorlib-instagram` padding 7em
    0; `#footer` padding 6em 0; `intro-heading` margin-bottom 3em;
    `.f-entry` margin-bottom 3em; instagram tiles 200px tall.
  - Pagination (inner blog pages): `li a` radius 0, bg `#fff`, color
    `#000`; active/hover bg `#FF63B5` + white text + 1px `#FF63B5`
    border. (Not needed on the single page, but matches the blog-card
    aesthetic.)
  - Video play button: 90px white circle, shadow
    `0 14px 30px -15px rgba(0,0,0,0.7)`, 40px icon, scale 1.1 hover.
  - Quote block: bg `#fafafa`, padding 20px, Tenor Sans 20px gray, no
    left border.
  - Drop cap: first letter 110px `#000`, float left.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/clamor-<n>/<w>/<h>`); icons → lucide-react (Menu,
  Search, Play, MessageCircle, ArrowRight, Calendar, Heart, Facebook,
  Twitter, Dribbble, Instagram); Tenor Sans + Open Sans via Google Fonts
  `<link>` in `index.html`; brand pink `#FF63B5` in `@theme` so shared
  Button/ButtonLink `primary` variants resolve to pink with 30px radius;
  no asset/CSS/font-file copying. Demo copy paraphrased but same kinds
  (agency headline + slide title/meta; card title + meta + excerpt +
  Read More; footer About / Latest Blog / Newsletter + copyright). Demo
  typos fixed: "Unobstrusive" → "Unobtrusive", "places to visits" →
  "places to visit", "Auio Post" → "Audio Post". The featured slider
  (5 slides) renders as a simple auto-advancing carousel with prev/next
  arrows; the 5 slides are non-interactive links in the demo, so the
  recreation may render them as a single-column stack or carousel —
  carousel preferred to match the 600px slide layout.

Clamor lives in `apps/clamor` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn) and the repo-standard Navbar/Footer chrome
(adapted: this template's header is the absolute top-left logo + hamburger,
not the standard navbar; the off-canvas menu replaces the standard nav).

## Requirements

### Requirement: Header

The system SHALL render an absolute-positioned header with a white uppercase
logo wordmark on the left and a hamburger menu toggle on the right.

#### Scenario: Header content

- **GIVEN** the Clamor page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Clamor." as the logo (white, uppercase, letter-spaced)
- **AND** the header SHALL show a hamburger toggle button on the right

#### Scenario: Toggle opens the off-canvas menu

- **GIVEN** the header is rendered
- **WHEN** the user clicks the hamburger toggle
- **THEN** an off-canvas panel SHALL slide in from the right with the search form, menu links, About Me block, and Instagram tiles

### Requirement: Featured flex

The system SHALL render a two-part featured area: a pink intro panel (30%)
with the agency headline, and a 70% slider of five image slides with white
title + meta text.

#### Scenario: Intro panel

- **GIVEN** the page is rendered
- **WHEN** the featured area is displayed
- **THEN** the left panel SHALL have a pink background and show the headline "We Are Functional & Creative Agency" with a small uppercase sub-line

#### Scenario: Slide content

- **GIVEN** the featured area is displayed
- **WHEN** the user inspects a slide
- **THEN** the slide SHALL show an image with a dark overlay, a white title, and an uppercase meta line ("Feb 08, 2018 | Web Design | 4")

#### Scenario: Slider navigation

- **GIVEN** the featured slider is displayed
- **WHEN** the user activates the next/previous control
- **THEN** the slider SHALL advance to the following/preceding slide

### Requirement: Blog grid

The system SHALL render a "Most popular post" / "What's hot" section heading
followed by a responsive grid of blog entry cards.

#### Scenario: Section heading

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show a small uppercase label ("Most popular post") above a large serif heading ("What's hot"), both centered

#### Scenario: Image post card

- **GIVEN** the blog grid is displayed
- **WHEN** the user inspects an image post card
- **THEN** the card SHALL show an image that scales up on hover, a title, a meta line (date | category | comment count), an excerpt, and a pink "Read More" button

#### Scenario: Video post card

- **GIVEN** the blog grid is displayed
- **WHEN** the user inspects a video post card
- **THEN** the card SHALL show a background image with a centered white circular play button that scales on hover

#### Scenario: Quote post card

- **GIVEN** the blog grid is displayed
- **WHEN** the user inspects a quote post card
- **THEN** the card SHALL show a light-gray quote block with a serif quote, an attribution ("— John Doe"), a meta line, and a "Read More" button

#### Scenario: Audio and gallery post cards

- **GIVEN** the blog grid is displayed
- **WHEN** the user inspects the remaining card variants
- **THEN** an audio post card SHALL show an audio area above its description
- **AND** a gallery post card SHALL show two side-by-side image tiles above its description

### Requirement: Instagram strip

The system SHALL render a centered "Instagram" heading followed by a row of
eight square image tiles.

#### Scenario: Instagram content

- **GIVEN** the page is rendered
- **WHEN** the Instagram strip is displayed
- **THEN** it SHALL show the uppercase "Instagram" heading
- **AND** a row of eight image tiles in a responsive grid (8-across desktop, 4-across tablet, 2-across mobile)

### Requirement: Footer

The system SHALL render a white footer with About Me, Latest Blog, and
Newsletter columns plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show three columns: "About Me" (portrait, author name, blurb, pink social icons), "Latest Blog" (four thumb + title + date rows), and "Newsletter" (email input with pink "Subscribe" button)
- **AND** the footer SHALL show a centered copyright bar

#### Scenario: Newsletter subscribe

- **GIVEN** the footer Newsletter column is rendered
- **WHEN** the user submits an email
- **THEN** the form SHALL validate the email address and show a confirmation on success

### Requirement: Off-canvas menu

The system SHALL render a right-side off-canvas navigation panel with a search
form, menu links, an About Me block, and Instagram tiles.

#### Scenario: Menu content

- **GIVEN** the off-canvas menu is open
- **WHEN** the user inspects it
- **THEN** it SHALL show a search input with a pink search button, menu links (Blog, Single Blog, About me, Contact me), an About Me block (portrait, name, blurb, socials), and Instagram tiles
- **AND** the active "Blog" link SHALL render in the pink brand color

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Clamor app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, featured flex, blog grid, Instagram strip, and footer in order
- **AND** the document title SHALL be "Clamor — Blog Template"

## Verification checklist

- [ ] `openspec/specs/template-clamor/spec.md` present with the REAL section
      list (header → featured flex → blog grid → Instagram strip → footer +
      off-canvas menu).
- [ ] Design tokens above (pink `#FF63B5` / `#ff7dc1`, whitesmoke body,
      Tenor Sans + Open Sans, 30px-radius pink buttons, 600px featured
      slides, 7em/6em section rhythm) captured in the spec.
- [ ] `docs/templates/clamor/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh clamor`,
      PR lists source (ColorLib Shout), preview URL, tokens, and what
      differs.
