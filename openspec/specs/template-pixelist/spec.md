# Template: Pixelist (Creative)

## Purpose

Pixelist is a creative portfolio blog template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Rea" free
template (source: https://colorlib.com/wp/template/rea/), built under a
DIFFERENT name (**Pixelist**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a creative/developer resource showcase site with: a
minimalist header with animated typing headline, a masonry-style grid
of portfolio/resource cards with hover effects and like counters, a full-
screen overlay menu, and a clean white footer with categories and social
links. The signature look is a pink accent (#f271ab) on a white canvas
with Lato typography.

**WHAT MAKES PIXELIST DISTINCT (signature behaviors):**

1. **Pink accent color (#f271ab) throughout.** The brand color appears in:
   text selection highlight, link hovers, the animated headline highlight,
   carousel pagination active state, button borders and text, footer heart
   icon, and the kudos pulse animation. This pink on white is the
   template's signature palette.
2. **Minimalist header with animated typing headline.** The header holds
   a small logo (80×95px) on the left and an inline headline on the right
   with a typewriter effect cycling through "web resources", "psd files",
   "mockups" — each word types in letter-by-letter with a pink highlight
   background, then erases and cycles. A secondary static line reads
   "to suit all your needs."
3. **Full-screen overlay menu.** A hamburger toggle (4 staggered black
   bars, 30px wide) opens a white full-screen overlay with centered
   bold 35px links (Home, About, Contact, Features), a search input, and
   social icons (Twitter, Behance, Dribbble, Facebook, RSS) in grey.
   The hamburger animates to an X on open.
4. **Masonry-style grid of resource cards.** A CSS grid (1200px max)
   with items in mixed widths: full (1200px), half (600px), and quarter
   (300px) — creating a Pinterest-like layout. Each card has an image
   with a secondary hover image (crossfade on hover), a semi-transparent
   overlay showing view/download counts (top-right), and a white content
   area below with category label (uppercase, spaced, grey), title, and
   a heart icon with like count (bottom-right). Cards have 15px
   transparent border spacing and 2px image radius.
5. **Hover crossfade on images.** Each card image has a second image
   underneath; on hover the top image fades out (opacity transition 0.3s)
   revealing the alternate. The info overlay (views + downloads) also
   fades in simultaneously.
6. **Heart/like interaction with pulse animation.** Each card has a heart
   icon that can be "liked" — clicking triggers a CSS pulse animation
   (box-shadow expansion in rgba(242,119,174,0.4) → transparent). The
   liked state shows a filled heart with a count increment.
7. **Load-more arrow.** A centered arrow image at the bottom of the grid
   suggests more content, hovering fades it to 50% opacity.
8. **Light blog background.** The grid area sits on a #F5F5F5 background
   with the footer on white — a subtle two-tone treatment.
9. **Lato typography.** The template uses Lato (300, 400, 700) — a clean
   humanist sans-serif. Headings are weight 300–400, body text weight 400.
10. **Footer with three-column layout.** A white footer with categories
    (inline list), footer menu links (About, Features, Contact), social
    icons (5 icons in grey), and copyright with animated heart icon.

## Naming

The ColorLib source name "Rea" is FORBIDDEN as the app name (and "rea"
itself must not be reused). **Pixelist** is the new, original name —
single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified
2026-09-18: zero hits for `pixelist` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`). Source slug + preview URL are
recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Rea" (page title: "Rea - Html Responsive
  Template"). Listed in TEMPLATES.md under the Creative section
  (line 1490 — first unchecked item after Portfolio/Craftfolio).
- **Live preview — REACHABLE (verified 2026-09-18 by direct fetch):**
  `https://preview.colorlib.com/theme/rea/` returns HTTP 200. Title:
  "Rea - Html Responsive Template". The preview is the HOME page with
  the full grid layout. Stylesheets: `css/clear.css` (reset), `css/common.css`
  (utility classes), `css/font-awesome.min.css` (FA icons — replace with
  lucide-react), `css/carouFredSel.css` (carousel — not used on home),
  `css/animated-headline.css` (typing animation), `css/sm-clean.css`
  (SmartMenus), `style.css` (all custom styling). Scripts: jQuery,
  SmartMenus, Isotope, imagesloaded, carouFredSel, nicescroll, main.js.
  Fonts: **Lato** 300/400/700 via Cloudflare Fonts inline.
- **Live DOM structure (from the fetched HTML + style.css):**
  - `body.blog` (Lato, #2f2f2f, 20px, weight 400, white bg)
  - `table.doc-loader` — loading spinner overlay
  - `div.menu-wraper.center-relative` (hidden by default, full-screen
    white overlay when toggled)
    - `nav#header-main-menu.big-menu` → `ul.main-menu.sm.sm-clean`
      (4 items: Home, About, Contact, Features)
    - `form.search-form` → `input.search-field` (centered, bold 35px)
    - `div.menu-social` → 5 social links (FA icons, grey #CACACA)
  - `header.header-holder.center-relative.relative` (width 1170px)
    - `div.header-logo` → logo image (80×95px, inline-block)
    - `div.header-txt` → inline-block, left of logo
      - `h1.entry-title` → `span.cd-headline.letters.type` (typing anim)
        - `span` "pixel precise"
        - `span.cd-words-wrapper` → 3 rotating words: "web resources",
          "psd files", "mockups"
        - `span.sec-line` "to suit all your needs."
    - `div.toggle-holder.absolute` → `div#toggle` → 4 staggered bars
  - `div#blog-holder` (z-index 2, white bg, padding-top 50px)
    - `div.blog-background` (full size, #F5F5F5, z-index -1)
    - `div.grid` (1200px, margin auto, overflow hidden)
      - `div.grid-sizer` (300px)
      - 5 `article.grid-item` elements:
        - First: `.p_one` (1200px — full width)
        - Second/Third: `.p_one_half` (600px each)
        - Fourth/Fifth: `.p_one_fourth` (300px each)
        - Each contains:
          - `a.img.relative` (image link)
            - `img` (main image)
            - `img.hover-img` (alternate image, opacity 0 → 1 on hover)
            - `div.item-info` (views + downloads count, opacity 0 → 1)
          - `div.entry-content` (white bg, 25px padding)
            - `div.cat-links` → `ul > li > a` (category, uppercase)
            - `h2.entry-title` → `a` (post title)
            - `div.like-holder` → heart icon + count
    - `a.more-posts-index` → arrow image (85×85px)
    - `img.blog-img` (bottom illustration)
  - `footer.footer` (white bg, centered text, 60px top padding)
    - `ul#footer-sidebar` → 3 `li.widget` columns:
      1. Categories (hidden title, inline list)
      2. Footer menu (About, Features, Contact)
      3. Social icons + copyright (Component Dock link)

## Gherkin requirements

### Requirement: Header with animated headline

The system SHALL render a minimalist header with a small logo and an
animated typing headline that cycles through creative resource keywords.

#### Scenario: Header layout

- **GIVEN** the Pixelist app is rendered on desktop
- **THEN** a header SHALL display with width matching the content area
  (max-width 1170px, centered)
- **AND** the header SHALL contain a logo image on the left (inline-block)
  and a headline text block on the right (inline-block, 30px left padding)

#### Scenario: Animated headline

- **GIVEN** the header is displayed
- **THEN** an h1 SHALL render with static text "pixel precise" followed
  by a typewriter animation cycling through: "web resources", "psd files",
  "mockups"
- **AND** each word SHALL type in letter-by-letter with a pink (#f271ab)
  highlight background, then erase and cycle to the next word
- **AND** a static secondary line "to suit all your needs." SHALL render
  below the animated text
- **AND** the headline font SHALL be Lato weight 300, 28px, line-height
  30px, color #222222

#### Scenario: Hamburger menu toggle

- **GIVEN** the header is displayed
- **THEN** a hamburger toggle SHALL render in the top-right corner
  (absolute positioned, 30×30px area)
- **AND** the toggle SHALL consist of 4 black horizontal bars of
  staggered widths (30px, 24px, 15px, 30px) with 3px gap
- **WHEN** the user clicks the toggle
- **THEN** the bars SHALL animate (CSS transition 0.3s) to form an X
  (first bar rotates 45°, second fades, third rotates -45° and widens,
  fourth fades)
- **AND** a full-screen white overlay menu SHALL appear

### Requirement: Full-screen overlay menu

The system SHALL render a full-screen white overlay menu with centered
navigation links and social icons.

#### Scenario: Menu overlay appearance

- **WHEN** the hamburger toggle is activated
- **THEN** a full-screen white overlay SHALL appear (position fixed,
  z-index 100, overflow auto)
- **AND** the overlay SHALL contain centered navigation links in a
  max-width 350px container

#### Scenario: Navigation links

- **GIVEN** the overlay menu is open
- **THEN** 4 navigation links SHALL display centered vertically:
  Home, About, Contact, Features
- **AND** each link SHALL be 35px font-size, weight 700, color #222222,
  line-height 40px
- **AND** hovering a link SHALL change its color to pink (#f271ab)

#### Scenario: Search input

- **GIVEN** the overlay menu is open
- **THEN** a search input SHALL display below the nav links, centered,
  with placeholder "Search" in 35px bold #222222
- **AND** the input SHALL have no border, transparent background, and
  centered text alignment
- **AND** a helper text "search anything & hit enter" SHALL appear below
  the input on focus (opacity transition 0.2s)

#### Scenario: Social icons in menu

- **GIVEN** the overlay menu is open
- **THEN** 5 social icons SHALL display below the search input:
  Twitter, Behance, Dribbble, Facebook, RSS
- **AND** each icon SHALL be 26px, color #CACACA, with 10px horizontal
  padding

### Requirement: Masonry-style resource grid

The system SHALL render a responsive masonry grid of portfolio/resource
cards with mixed-width items.

#### Scenario: Grid layout

- **GIVEN** the grid section is displayed
- **THEN** a grid container SHALL render (max-width 1200px, centered)
- **AND** the grid SHALL contain items in mixed widths creating a
  masonry/Pinterest-like layout:
  - First item: full width (1200px)
  - Second and third items: half width (600px each)
  - Fourth and fifth items: quarter width (300px each)
- **AND** each item SHALL have 15px transparent border (spacing) and
  2px image border-radius

#### Scenario: Resource cards

- **GIVEN** a resource card is displayed
- **THEN** it SHALL contain:
  - A clickable image area with the main image
  - An alternate hover image (initially hidden, opacity 0)
  - An info overlay (initially hidden) showing view count (eye icon)
    and download count (arrow icon) in white text
  - A white content area (25px padding) with:
    - Category label (uppercase, 13px, letter-spacing 3px, #a5a5a5)
    - Post title (20px, weight 400, #222222)
    - Heart icon with like count (bottom-right, absolute)

#### Scenario: Card hover effects

- **WHEN** the user hovers a resource card image
- **THEN** the main image SHALL crossfade to the alternate image
  (opacity transition 0.3s)
- **AND** the info overlay SHALL fade in (opacity 0 → 1, transition 0.3s)
  showing view and download counts with icons

#### Scenario: Like interaction

- **WHEN** the user clicks the heart icon on a card
- **THEN** a pulse animation SHALL trigger (box-shadow expansion
  in rgba(242,119,174,0.4))
- **AND** the heart SHALL transition to a filled state
- **AND** the like count SHALL increment by 1
- **AND** clicking again on an already-liked card SHALL have no
  additional effect

#### Scenario: Placeholder images

- **GIVEN** the grid is displayed
- **THEN** placeholder images SHALL use `picsum.photos/seed/pixelist-N/W/H`
  with deterministic seeds per card
- **AND** the main/alternate image pairs SHALL use different seeds to
  show visual variety on hover

### Requirement: Load-more indicator

The system SHALL render a centered load-more arrow at the bottom of the
grid.

#### Scenario: Load-more arrow

- **GIVEN** the grid is fully displayed
- **THEN** a centered arrow image (85×85px) SHALL render below the grid
  with 50px vertical margin
- **AND** hovering the arrow SHALL fade it to 50% opacity (transition 0.3s)

### Requirement: Blog illustration

The system SHALL render a decorative illustration below the grid area.

#### Scenario: Blog image

- **GIVEN** the grid and load-more arrow are displayed
- **THEN** a centered decorative image SHALL render below the arrow
- **AND** the image SHALL have max-width 90%, centered with auto margins

### Requirement: Footer

The system SHALL render a white footer with three columns: categories,
footer menu, and social links with copyright.

#### Scenario: Footer layout

- **GIVEN** the footer is displayed
- **THEN** it SHALL have white background, centered text, 60px top
  padding, 50px bottom padding
- **AND** it SHALL contain 3 columns (each ~30.6% width, 4% margin-right)

#### Scenario: Categories column

- **GIVEN** the footer categories column is displayed
- **THEN** a list of 8 category links SHALL render inline:
  Branding, Fonts, Icons, Misc, Mockup, Play, Vectors, Video
- **AND** each category SHALL be a link in the footer text color (#7e7e7e)
- **AND** categories SHALL be separated by inline spacing (20px right
  padding per item)

#### Scenario: Footer menu column

- **GIVEN** the footer menu column is displayed
- **THEN** 3 navigation links SHALL render: About, Features, Contact
- **AND** each link SHALL be color #7e7e7e with hover transition

#### Scenario: Social links column

- **GIVEN** the footer social column is displayed
- **THEN** 5 social icons SHALL render: Twitter, Behance, Dribbble,
  Facebook, RSS
- **AND** each icon SHALL be 23px, color #7e7e7e
- **AND** below the icons, a copyright line SHALL render with an
  animated heart icon (pink #f271ab, pulsing animation) and a link
  to Component Dock

## Verification checklist

- [ ] Header renders with logo + animated typing headline
- [ ] Typing animation cycles through 3 words with pink highlight
- [ ] Hamburger toggle opens full-screen overlay menu
- [ ] Overlay contains nav links, search input, social icons
- [ ] Masonry grid renders with mixed-width items (full/half/quarter)
- [ ] Cards show image + category + title + heart/like
- [ ] Hover crossfade between main and alternate images works
- [ ] View/download count overlay appears on hover
- [ ] Like interaction triggers pulse animation and increments count
- [ ] Load-more arrow renders centered with hover opacity
- [ ] Footer renders 3 columns (categories, menu, social)
- [ ] Animated heart in copyright pulses
- [ ] Responsive: grid collapses to 2-col on tablet, 1-col on mobile
- [ ] All placeholder images use picsum.photos deterministic seeds
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to componentdock.com
