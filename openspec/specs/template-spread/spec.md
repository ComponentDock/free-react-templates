# Template: Spread (Video & Magazine)

## Purpose

Spread is a video/magazine template — a React recreation of the ColorLib free
"Mag" template (preview: https://preview.colorlib.com/theme/mag/).
Built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

**Source mapping:** `apps/spread` recreates
`https://colorlib.com/wp/template/mag/`.

Reference-measured design tokens are recorded in **Design tokens** below —
re-measured 2026-10-23 from the single `style.css` (see `docs/replication.md`).
The footer is `#111111` (not `#252324`) and the page band is `#f2f4f5`.

- Flex/grid layout (Tailwind)
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Spread lives in `apps/spread` and uses shared components from `packages/ui`
(Button, cn).

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Mag** — https://colorlib.com/wp/template/mag/
- **Preview**: `https://preview.colorlib.com/theme/mag/` — HTTP 200, **75,309 bytes**, title `Mag - Video & Magazine HTML Template`; original build with **one** stylesheet and no framework (`style.css`, 72,734 B — Bootstrap is not loaded at all).
- **Measured how**: hex-literal census of `style.css`, then the winning rule per selector. Body copy colour in the reference is `#777777`; `#3d3d3d`, `#bb8950`, `#252324` each occur once or twice and paint a single card/share hover — not brand tokens.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand pink | `#ed3974` | 55 | `.mag-btn` CTA fill, `.section-heading` 4 px left rule, nav/search hover, spinner, `.post-tag` labels |
| Heading ink | `#1a1a1a` | 7 | `h1`–`h6` (Poppins 500) + `p` ink |
| Body copy | `#777777` | 19 | paragraphs, search placeholder |
| Page band | `#f2f4f5` | 7 | `body` background, widget cards |
| Hairlines | `#ebebeb` | 13 | `.single-blog-post` bottom rules, search field divider |
| Footer | `#111111` | 1 | `.footer-area` (`padding-top: 80px`) |
| Hover dark | `#404040` | 4 | `.submit-video:hover`, dark-card hover |
| Social blues | `#4b6cd0` / `#49a7f3` | 4 / 4 | Facebook / Twitter widget buttons |
| Card surface | `#ffffff` | 37 | post cards, widget panels |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Everything | `"Poppins", sans-serif`, 14 px body | `body`, `h1`–`h6` |
| Headings | Poppins 500, `#1a1a1a`, line-height 1.3 | `h1`–`h6` |
| Hero headline | Poppins 500, white, centred over the photo | hero slide markup |
| Nav | 13 px, 500, uppercase, `letter-spacing: 1px` | `.classynav ul li a` |
| Buttons | `.mag-btn` Poppins 500, 14 px | `.mag-btn` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Header | white `.mag-main-menu` **70 px** tall: wordmark, uppercase menu, `200 px` search input with 1 px `#ebebeb` divider, pink **SUBMIT VIDEO** block flush right |
| Hero | full-bleed photo slider (720/650 px frames at the top breakpoints) with white Poppins headline, pink `MAY 8, 2018 / LIFESTYLE` eyebrow, grey translucent square arrows, dark circular play button |
| Layout | 3-column body: 1/4 "MOST POPULAR" list, 1/2 "TRENDING NOW" cards, 1/4 social widget stack |
| Radius | **3 px** on `.mag-btn`, **4 px** on hero arrows, **2 px** on inputs, `15px` on the play badge, `50%` avatars — cards are square |
| Bands | white nav → photo hero → `#f2f4f5` body with white cards → `#111111` footer |

## Requirements

### Requirement: Navbar renders with logo and navigation links

Spread SHALL render a sticky top navigation bar with the "Spread" logo,
navigation links (Home, Archive, Pages, Mega, Categories), a search icon,
and a mobile hamburger toggle.

#### Scenario: Desktop navbar displays all links

- **WHEN** the page loads on desktop viewport
- **THEN** the navbar shows the logo "Spread", all five nav links, and a search icon

#### Scenario: Mobile navbar toggles on click

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu expands showing all nav links
- **AND** clicking again collapses the menu

### Requirement: Hero carousel renders 3 slides

Spread SHALL render a hero section with 3 carousel slides, each showing a
background image, dark overlay, category badge, title, and a play button.

#### Scenario: Hero slides display content

- **WHEN** the page loads
- **THEN** 3 hero slides are rendered with play buttons
- **AND** each slide shows a category label and title

### Requirement: Featured video section displays main content

Spread SHALL render a featured video section with a large video card, play
button, category badge, title, excerpt, share buttons, and social links.

#### Scenario: Featured video renders all elements

- **WHEN** the page loads
- **THEN** the featured video section shows the title, excerpt, play button, share icon, and social icons (Facebook, Twitter)

### Requirement: Sidebar shows Most Popular and Latest Videos

Spread SHALL render a sidebar with "Most Popular" posts (5 items with thumbnails)
and "Latest Videos" posts (5 items with thumbnails), plus an ad placeholder.

#### Scenario: Sidebar displays popular posts

- **WHEN** the page loads
- **THEN** the Most Popular section shows 5 post cards with titles, thumbnails, and stats

#### Scenario: Sidebar displays latest videos

- **WHEN** the page loads
- **THEN** the Latest Videos section shows 5 post cards with titles and thumbnails

### Requirement: Trending Now section displays 3 cards

Spread SHALL render a "Trending Now" section with 3 post cards in a grid.

#### Scenario: Trending posts render

- **WHEN** the page loads
- **THEN** 3 trending post cards are shown with images, titles, categories, and stats

### Requirement: Featured Videos grid displays 4 posts

Spread SHALL render a "Featured Videos" section with 4 video post cards in a 2-column grid.

#### Scenario: Featured videos render

- **WHEN** the page loads
- **THEN** 4 featured video cards are shown with images, titles, categories, and stats

### Requirement: Most Viewed Videos displays 3 posts

Spread SHALL render a "Most Viewed Videos" section with 3 video cards.

#### Scenario: Most viewed videos render

- **WHEN** the page loads
- **THEN** 3 most viewed video cards are shown with images, titles, and stats

### Requirement: Footer contains branding and Component Dock link

Spread SHALL render a footer with About section, Quick Links, Categories,
Newsletter signup, and a copyright line linking to Component Dock.

#### Scenario: Footer renders all sections

- **WHEN** the page loads
- **THEN** the footer shows the Spread logo, Quick Links, Categories list, Newsletter form, and social icons

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present with target="_blank"
- **AND** the link text says "Component Dock"

#### Scenario: Newsletter form accepts email input

- **WHEN** the user types an email and clicks Subscribe
- **THEN** the email input is cleared after submission

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/spread/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/spread/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar renders with logo and navigation links — the navbar shows the logo "Spread", all five nav links, and a search icon
- [ ] Hero carousel renders 3 slides — 3 hero slides are rendered with play buttons
- [ ] Featured video section displays main content — the featured video section shows the title, excerpt, play button, share icon, and social icons (Facebook, Twitter)
- [ ] Sidebar shows Most Popular and Latest Videos — the Most Popular section shows 5 post cards with titles, thumbnails, and stats
- [ ] Trending Now section displays 3 cards — 3 trending post cards are shown with images, titles, categories, and stats
- [ ] Featured Videos grid displays 4 posts — 4 featured video cards are shown with images, titles, categories, and stats
- [ ] Most Viewed Videos displays 3 posts — 3 most viewed video cards are shown with images, titles, and stats
