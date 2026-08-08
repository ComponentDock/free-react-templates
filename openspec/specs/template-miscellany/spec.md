# Template: Miscellany (Blog Template)

## Purpose

Miscellany is a single-page blog/magazine landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Stuff" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Stuff" — blog/magazine template
  (source: https://colorlib.com/wp/template/stuff/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/stuff/
  (HTTP 200, ~35 KB HTML fetched + `css/style.css` ~32 KB parsed).
- **Screenshot analyzed:** `stuff-free-template.jpg` (TEMPLATES.md) —
  clean white minimalist magazine blog: white top bar with bold black
  uppercase logo + small uppercase nav links; full-width photo hero with a
  white article-preview box overlaid bottom-left (uppercase meta line
  "EVENTS 20 MARCH 2018 BY RICH" + bold headline); below it a row of three
  mixed blog cards (photo card, solid **orange-red** card, dark grey card
  with a photo carousel); white cards overlap their images with a negative
  margin; section headings are small bold uppercase with letter-spacing.
- **Section order (1:1):** Navbar (Home, Blog ▾ [Blog Single, Video,
  Read, Lifestyle], Event, Travel, About Me, Contact) → Hero slider
  (flexslider, 4 slides, full-bleed photo + overlay + white meta box with
  category/date/author + bold h1) → Blog grid (#colorlib-container: 3-3-3,
  3-3-2, 4-4-4, 4-8 mixed rows of `.blog-entry` cards; one card is an
  owl-carousel photo slider, one is a video card with round white play
  button) → Pagination (4 pages) → Instagram strip (8 square tiles,
  hover shows white plus cross) → Footer (#colorlib-footer, dark #212125:
  Navigational / Recent Post (3 thumbnails + dates) / Archive (months) /
  Tags (bordered chips)) → "Made with ♥ by Colorlib" copyright.
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#F6490D** (orange-red) — all links, link hover,
    `.btn-primary` background (2px solid border, white text; hover
    **#f75b26**), active nav item, video play icon, footer link hover,
    tag chip hover bg.
  - Hero meta icon accent: **#F7AF1D** (yellow) — slider-text span icons.
  - Body text: **#666666** on **#fff**; `font-family: "Roboto", Arial,
sans-serif`, weight 300, font-size 16px, line-height 2.
  - Headings: **#000**, weight 400 (h1/h2/h3). Nav logo: 24px, weight 700,
    uppercase. Section headings (`.colorlib-heading h2`): 16px, uppercase,
    letter-spacing 2px, weight 700. Blog card title (`.blog-entry .desc
h2`): 28px, weight 700, black link.
  - Blog card: `.blog-img` image; `.desc` white box, `width: 90%`,
    `margin-top: -3em` (overlaps image), `background: #fff`, z-index 1.
  - Meta line (`.blog-entry .desc .meta`): uppercase, 14px; category link
    black weight 700.
  - Hero: `#colorlib-hero` height 650px; slides min-height 650px, cover
    background, overlay rgba(0,0,0,0.1); slider text centered col, h1
    28px/1.3 weight 700; hero `.btn-primary` 14px 30px padding.
  - Video card: `.colorlib-video a` — 90px white circle, radius 50%,
    shadow 0 14px 30px -15px rgba(0,0,0,.75), play icon 40px #F6490D;
    overlay rgba(0,0,0,.3) → rgba(0,0,0,.7) on hover.
  - Instagram: `.instagram-entry .instagram` 12.5% width, 200px height;
    hover shows 40px white plus (1px bars).
  - Footer: background **#212125**, padding 7em 0; column h2 14px uppercase
    letter-spacing 1px color #e6e6e6; links gray with icon-check #666666;
    tags chips: 1px solid #333333, color gray, padding 5px 12px, font-size
    13px, radius 4px; hover bg #F6490D white.
  - Container sections (`#colorlib-container`, `#colorlib-instagram`,
    `#colorlib-footer`): padding 7em 0.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/miscellany-<n>/<w>/<h>`); icons → lucide-react
  (play, arrow-up, check, tag, chevrons for sliders); Roboto via Google
  Fonts `<link>`; orange-red accent in `@theme`; no assets copied.

Miscellany lives in `apps/miscellany` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Miscellany", anchor links to the page's sections, a Blog dropdown, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Miscellany page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Miscellany" (bold, uppercase, black)
- **AND** the navbar SHALL show links to Home, Blog, Event, Travel, About Me, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Blog dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the user opens the Blog dropdown
- **THEN** it SHALL show links to Blog Single, Video, Read, and Lifestyle

#### Scenario: Active link styling

- **GIVEN** the navbar is rendered
- **WHEN** a nav link is the current section
- **THEN** the active link SHALL be highlighted with the orange-red accent (#F6490D)

### Requirement: Hero slider

The system SHALL render a full-width hero slider with multiple slides, each
a full-bleed photo with a subtle overlay and a white article-preview box.

#### Scenario: Slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** each slide SHALL contain a meta line with a category link, a date (e.g. "20 March 2018"), and an author ("By Rich")
- **AND** each slide SHALL contain a bold level-1 headline (e.g. "How a website designer began customizing and designing")
- **AND** the meta text SHALL be overlaid in a white box at the bottom of the slide

#### Scenario: Slide navigation

- **GIVEN** the hero slider has multiple slides
- **WHEN** the user activates the next/previous control
- **THEN** the slider SHALL advance to the other slide and show the active slide's headline

### Requirement: Blog grid

The system SHALL render a masonry-style blog grid of `.blog-entry` cards,
each with an image, a white overlapping description box (category, date,
author, bold title, excerpt).

#### Scenario: Blog card content

- **GIVEN** the page is rendered
- **WHEN** the blog grid is displayed
- **THEN** each card SHALL contain a photo, an uppercase meta line (category, date, author), a bold 28px title, and an excerpt paragraph

#### Scenario: Grid layout

- **GIVEN** the blog grid is rendered
- **WHEN** the grid is displayed
- **THEN** it SHALL lay out cards in mixed 3/2-column rows matching the reference order (3-3-3, 3-3-2, 4-4-4, 4-8)
- **AND** the white description box SHALL overlap the image with a negative top margin

#### Scenario: Photo slider card

- **GIVEN** the blog grid is rendered
- **WHEN** a card contains a photo slider
- **THEN** it SHALL cycle between photos with prev/next controls

#### Scenario: Video card

- **GIVEN** the blog grid is rendered
- **WHEN** a card is a video card
- **THEN** it SHALL show a 90px white circular play button with the orange-red play icon over a darkened image

### Requirement: Pagination

The system SHALL render a pagination control below the blog grid.

#### Scenario: Pagination pages

- **GIVEN** the blog grid is displayed
- **WHEN** the user reaches the bottom of the grid
- **THEN** a pagination control SHALL show page numbers 1–4 with prev/next arrows and the current page highlighted

### Requirement: Instagram strip

The system SHALL render a strip of eight square image tiles with a heading
"Instagram".

#### Scenario: Instagram tiles

- **GIVEN** the page is rendered
- **WHEN** the Instagram section is displayed
- **THEN** it SHALL contain a heading "Instagram" (small, bold, uppercase)
- **AND** it SHALL show eight square photo tiles in a single row

#### Scenario: Tile hover

- **GIVEN** an Instagram tile is rendered
- **WHEN** the user hovers over a tile
- **THEN** a white plus cross SHALL appear over the tile

### Requirement: Footer

The system SHALL render a dark footer with four columns, tag chips, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a Navigational column (Home, About Me, Blog, Travel, Lifestyle, Fashion, Health)
- **AND** it SHALL show a Recent Post column with three thumbnail entries and dates (e.g. "25 March 2018")
- **AND** it SHALL show an Archive column with month links (February 2018 … September 2017)
- **AND** it SHALL show a Tags column with bordered chip links (Modeling, Fashion, Life, Blog, …)
- **AND** it SHALL show a copyright line ("All rights reserved | Made with ♥ by …")

#### Scenario: Tag chip hover

- **GIVEN** a tag chip is rendered
- **WHEN** the user hovers over it
- **THEN** the chip SHALL fill with the orange-red accent (#F6490D) and white text

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Miscellany app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Miscellany — Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/miscellany` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- miscellany` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; brand tokens (#F6490D, #F7AF1D, Roboto, white card overlap -3em) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `miscellany-<n>`, Google Fonts links, lucide icons only)
