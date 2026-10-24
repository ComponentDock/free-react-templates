# Template: Radiotune (Radio & Music)
<!-- prep-status: shipped-as=onair -->
> **SHIPPED-UNDER** — the ColorLib `razo` design this prep describes already
> ships as `apps/onair` (<https://onair.free.componentdock.com>).
> Do not scaffold `apps/radiotune`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-onair/spec.md`.

## Purpose

Recreation of ColorLib "Razo" — a radio station & music website template with music charts, weekly schedule, trending videos, and blog sections.
- **Source:** https://colorlib.com/wp/template/razo/
- **Preview:** https://preview.colorlib.com/theme/razo/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/razo-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/radiotune`
- **Deploy target:** `radiotune.free.componentdock.com`

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/razo/style.css`:

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Primary Magenta | `#dc2878` | Primary accent — buttons, active states, hover highlights |
| Heading | `#191919` | All headings (h1–h6), nav links |
| Body Text | `#6e6e6e` | Paragraph text, metadata labels |
| Light Blue BG | `#e7f2fd` | Section backgrounds (gray/blue tint) |
| White | `#ffffff` | Card backgrounds, button fill, text on dark bg |
| Dark / Black | `#000000` | Dark overlays, parallax sections, navbar bg |
| Border | `#e5e5e5` | Borders, dividers, table borders |
| Secondary | `#a6a6a6` | Muted text, secondary labels |

### Typography
- **Body Font:** Open Sans (Google Fonts, weights 300–700)
- **Heading Font:** Oswald (Google Fonts, weights 200–700)
- **Base size:** 14px body, 16px for links/paragraphs
- **Heading sizes:** h2 section headings = ~44px (desktop), 30px (tablet)
- **Line height:** 1.4 for headings
- **Heading weight:** 500

### Buttons
- `.razo-btn`: magenta bg (`#dc2878`), white text, `border-radius: 3px` (sharp/square), padding via utilities
- `.razo-btn.btn-2`: outline variant — magenta border, magenta text, transparent bg. Hover → magenta bg, white text
- `.show-all-btn`: dark bg, white text, used in parallax sections
- Button border-radius: 3px (sharp, not rounded/pill)

### Layout & Spacing
- Section padding: 80px top/bottom (`.section-padding-80`)
- Container: Bootstrap `.container` (max-width ~1140px)
- Grid: 12-column Bootstrap grid
- Header: sticky navigation, logo left, nav links right
- Parallax sections: full-width bg images with dark overlay (`rgba(0,0,0,0.5)`)

## Section Structure (top to bottom)

1. **Navbar** — Sticky header with logo left, nav links right (Home, Pages dropdown, Shows, Charts, Podcasts, Mega menu). Mobile hamburger toggler. Social share sidebar (Facebook, Twitter, Pinterest, Instagram, YouTube) as slide-out panel.

2. **Hero / Welcome Carousel** — Full-viewport carousel (4 slides). Each slide: fullscreen background image with dark overlay, centered white text heading ("Designed For Music, Engineered to Last"), subtitle about event, "Book Now" outline button.

3. **Blog Area** — Two-column layout. Left (8 cols) "Blog New": featured post (large bg image with overlay + title + comment/view counts), then 2x2 grid of smaller posts (thumbnail + title + counts). Right (4 cols) "Trending": featured post (smaller bg image) + 5 list-style posts (thumbnail + title + counts).

4. **Music Charts** — Full-width dark parallax section. "Music Chart" heading + "Show All Trending (Top 10)" button. 5 ranked items: rank number, thumbnail, audio player, song title + artist name, price button ($10.99–$12.99).

5. **Trending Video** — "Trending Video" heading centered. Featured YouTube video embed (full-width iframe). 6 video post cards in 3x2 grid: thumbnail + comment/view counts + title.

6. **App Download** — Dark parallax section. Two-column: left has iPhone mockup image, right has heading "Radio Music", description text, Google Play + App Store download badges.

7. **Weekly Schedule** — "Weekly Schedule" heading centered. Responsive table with 6 columns (Monday–Saturday), 4 rows. Each cell: show name + time slot. Empty cells for unscheduled slots.

8. **Latest News** — Dark parallax section. "Latest News" heading + "Show All Blog" button. Carousel of 3 news cards: bg image with dark overlay, post title, excerpt paragraph, date (day + month), "Read More" button.

9. **Footer** — 3-column layout: (1) Logo + description + contact info (address, phone, email with icons), (2) Twitter Feed (3 tweets with twitter icon + text), (3) Instagram grid (3x3 image thumbnails). Bottom copyright bar. Footer MUST include Component Dock attribution link per conventions.

## Requirements

### Navbar

#### Scenario: Desktop navigation renders all menu items

- **GIVEN** the user is on a desktop viewport
- **WHEN** the page loads
- **THEN** the navbar displays "Home", "Shows", "Charts", "Podcasts", "Mega" links
- **AND** a logo image is visible on the left
- **AND** a social share toggle is available

#### Scenario: Mobile navigation shows hamburger toggle

- **GIVEN** the user is on a mobile viewport
- **WHEN** the page loads
- **THEN** a hamburger menu button is visible
- **AND** the full nav menu is hidden
- **WHEN** the user taps the hamburger button
- **THEN** the navigation menu expands vertically

### Hero Carousel

#### Scenario: Hero displays carousel with 4 slides

- **GIVEN** the user is on any viewport
- **WHEN** the page loads
- **THEN** a carousel with 4 slides is displayed
- **AND** each slide shows a background image with dark overlay
- **AND** each slide has heading "Designed For Music, Engineered to Last"
- **AND** each slide has a "Book Now" outline button

#### Scenario: Carousel auto-plays between slides

- **GIVEN** the hero carousel is displayed
- **WHEN** 5 seconds elapse
- **THEN** the carousel transitions to the next slide

### Blog Area

#### Scenario: Blog section renders two-column layout

- **GIVEN** the user scrolls to the Blog section
- **THEN** a "Blog New" heading is visible in the left column
- **AND** a featured post with large background image is displayed
- **AND** 4 smaller post cards are shown in a 2x2 grid below
- **AND** a "Trending" heading is visible in the right column
- **AND** a trending featured post and 5 smaller posts are shown

#### Scenario: Blog posts show comment and view counts

- **GIVEN** a blog post card is displayed
- **THEN** comment count and view count icons are visible
- **AND** the post title is linked

### Music Charts

#### Scenario: Music chart section renders ranked items

- **GIVEN** the user scrolls to the Music Charts section
- **THEN** a "Music Chart" heading is displayed on a dark parallax background
- **AND** a "Show All Trending (Top 10)" button is visible
- **AND** 5 ranked music items are listed

#### Scenario: Each music chart item shows details

- **GIVEN** a music chart item is displayed
- **THEN** a rank number is shown on the left
- **AND** a thumbnail image is visible
- **AND** an audio player control is present
- **AND** the song title and artist name are displayed
- **AND** a price button (e.g. "$10.99") is shown on the right

### Trending Video

#### Scenario: Trending video section renders video embed and cards

- **GIVEN** the user scrolls to the Trending Video section
- **THEN** a "Trending Video" heading is centered
- **AND** a featured video iframe embed is displayed
- **AND** 6 video post cards are shown in a 3-column grid

#### Scenario: Video post cards show metadata

- **GIVEN** a video post card is displayed
- **THEN** a thumbnail image is visible
- **AND** comment and view counts are shown
- **AND** the post title is linked

### App Download

#### Scenario: App download section shows phone mockup and CTA

- **GIVEN** the user scrolls to the App Download section
- **THEN** a dark parallax background is visible
- **AND** an iPhone mockup image is displayed on the left
- **AND** "Radio Music" heading is shown on the right
- **AND** Google Play and App Store badges are visible

### Weekly Schedule

#### Scenario: Weekly schedule renders a table

- **GIVEN** the user scrolls to the Weekly Schedule section
- **THEN** a "Weekly Schedule" heading is centered
- **AND** a responsive table with 6 day columns is displayed
- **AND** each cell shows show name and time slot

#### Scenario: Empty schedule cells are handled

- **GIVEN** the weekly schedule table is displayed
- **THEN** empty cells are rendered without content

### Latest News

#### Scenario: Latest news section renders carousel cards

- **GIVEN** the user scrolls to the Latest News section
- **THEN** a "Latest News" heading is displayed on a dark parallax background
- **AND** a "Show All Blog" button is visible
- **AND** 3 news cards are shown in a carousel

#### Scenario: News cards show content

- **GIVEN** a news card is displayed
- **THEN** a background image with dark overlay is visible
- **AND** the post title is shown
- **AND** an excerpt paragraph is displayed
- **AND** the publication date (day + month) is shown
- **AND** a "Read More" button is present

### Footer

#### Scenario: Footer renders 3 columns

- **GIVEN** the user scrolls to the footer
- **THEN** a logo and description column is displayed
- **AND** a Twitter Feed column with 3 tweets is displayed
- **AND** an Instagram grid column with 9 images is displayed

#### Scenario: Footer includes Component Dock attribution

- **GIVEN** the footer is rendered
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text mentions "Component Dock"

#### Scenario: Footer contact info is displayed

- **GIVEN** the footer is rendered
- **THEN** address, phone, and email contact info is visible with icons

## Verification checklist

- [ ] All 9 sections render in correct order: Navbar → Hero → Blog → Music Charts → Trending Video → App Download → Weekly Schedule → Latest News → Footer
- [ ] Navbar: sticky on scroll, logo visible, all nav links present, mobile hamburger works, social share panel
- [ ] Hero: carousel auto-plays, 4 slides with bg images + dark overlay, "Book Now" outline buttons
- [ ] Blog: two-column layout, featured posts with bg images, 2x2 grid of smaller posts, trending sidebar
- [ ] Music Charts: dark parallax bg, 5 ranked items with audio players + price buttons
- [ ] Trending Video: YouTube embed + 6 video cards in 3x2 grid with metadata
- [ ] App Download: dark parallax bg, iPhone mockup, heading + description + download badges
- [ ] Weekly Schedule: responsive table with 6 day columns, show entries with times
- [ ] Latest News: dark parallax bg, 3 news cards carousel with dates + "Read More"
- [ ] Footer: 3-column layout, Component Dock link, social icons, no ColorLib references
- [ ] Design tokens: primary magenta #dc2878, fonts Open Sans + Oswald, sharp buttons (border-radius 3px)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Package name: `@free-react-templates/radiotune`
- [ ] CNAME: `radiotune.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/`
