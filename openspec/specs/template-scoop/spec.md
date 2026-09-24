# Template: Scoop (News & Magazine)

## Purpose

Scoop is a news/magazine template — a React recreation of the ColorLib free
"Force" template (preview: https://preview.colorlib.com/theme/force/).
Built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

**Source mapping:** `apps/scoop` recreates
`https://colorlib.com/wp/template/force/`.

Design tokens captured from the original (see docs/replication.md):

- Brand hot pink `#ff1857` (primary accent, buttons, submit buttons, hover
  states), gold `#f8b600` (category tag badges `.gad_btn`)
- Dark navy `#04091e` (banner background overlay)
- Light background tint `#f9f9ff` (used as section background)
- Text primary: `#222222`, muted: `#777777`
- Typeface: Open Sans (Google Fonts via `<link>`)
- Secondary font: Roboto
- `.gad_btn`: category tag pill button (gold/yellow background)
- `.submit_btn`: `#ff1857` bg, transparent on hover with `#ff1857` border
- `.bbtns`: subscribe button in newsletter sidebar
- Section padding: `p_100` / `p_120` (100-120px top/bottom)
- Bootstrap-style grid (migrate to Tailwind flex/grid)
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Scoop lives in `apps/scoop` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Top menu bar

The system SHALL render a thin top bar with the current date on the left and
social media icon links (Facebook, Twitter, Dribbble, Behance) on the right.

#### Scenario: Desktop top bar

- **GIVEN** the page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show the current date on the left
- **AND** it SHALL show social media icon links on the right

### Requirement: Logo header with banner ad

The system SHALL render a logo section containing the site logo on the left
and a banner/magazine advertisement image on the right.

#### Scenario: Logo and banner

- **GIVEN** the page is rendered
- **WHEN** the logo header is displayed
- **THEN** it SHALL show the site logo linking to `#`
- **AND** it SHALL show a banner/advertisement placeholder image on the right

### Requirement: Main navigation bar

The system SHALL render a main navigation with the site logo (mobile brand),
main links (Home, Category, Archive, Elements, Contact), and a search icon
on the right. The nav collapses into a hamburger menu on mobile.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the main nav is displayed
- **THEN** it SHALL show links to Home, Category, Archive, Elements, Contact
- **AND** it SHALL show a search icon on the right

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger toggle
- **THEN** the mobile navigation menu SHALL open
- **AND** tapping the toggle again SHALL close it

### Requirement: Hero banner carousel

The system SHALL render a full-width hero banner with a Bootstrap-style
carousel containing 3 slides, each with a category tag, date, comment count,
headline text, and a "Read More" button. The carousel has dot/line indicators
and auto-advances.

#### Scenario: Banner carousel

- **GIVEN** the page is rendered
- **WHEN** the hero banner is displayed
- **THEN** it SHALL show a carousel with 3 slides
- **AND** each slide SHALL have a category tag, date, comments count,
  headline, and "Read More" button
- **AND** it SHALL have slide indicators at the top

#### Scenario: Carousel navigation

- **GIVEN** the banner is displayed
- **WHEN** the user clicks a slide indicator
- **THEN** the carousel SHALL navigate to that slide

### Requirement: Editor's Choice grid

The system SHALL render an "Editor's Choice" section with 4 equal-width
article cards in a row, each containing an image, category tag ("Gadgets"),
date, comment count, headline, and description paragraph.

#### Scenario: Editor's choice cards

- **GIVEN** the page is rendered
- **WHEN** the Editor's Choice section is displayed
- **THEN** it SHALL show a heading "Editor's Choice"
- **AND** it SHALL show 4 article cards in a row
- **AND** each card SHALL have an image, category tag, date, comments,
  headline, and description

### Requirement: News area (main content + sidebar)

The system SHALL render a news area with an 8/4 column split:
- Left (8-col): Latest News (4 horizontal article cards with thumbnail +
  category + date + comments + headline + description), Travel and Food
  section (2x2 small cards + 1 large featured card), Wedding Adventure
  section (2 large cards + 4 small cards)
- Right sidebar (4-col): Most Popular News (featured card + owl-carousel of
  small cards), Social Networks list (Facebook, Twitter, YouTube, Vimeo,
  Pinterest, RSS with follower counts), Newsletter signup form (email input
  + subscribe button)

#### Scenario: Latest News

- **GIVEN** the page is rendered
- **WHEN** the Latest News section is displayed
- **THEN** it SHALL show a heading "Latest News"
- **AND** it SHALL show 4 horizontal article cards with thumbnail,
  category tag, date, comments, headline, and description

#### Scenario: Travel and Food section

- **GIVEN** the page is rendered
- **WHEN** the Travel and Food section is displayed
- **THEN** it SHALL show a heading "Travel and food"
- **AND** it SHALL show a 2x2 grid of small cards on the left
- **AND** it SHALL show 1 large featured card on the right

#### Scenario: Wedding Adventure section

- **GIVEN** the page is rendered
- **WHEN** the Wedding Adventure section is displayed
- **THEN** it SHALL show a heading "Wedding adventure"
- **AND** it SHALL show 2 large cards on the left
- **AND** it SHALL show 4 small cards on the right

#### Scenario: Most Popular News sidebar

- **GIVEN** the page is rendered
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show a heading "Most Popular News"
- **AND** it SHALL show a featured article card
- **AND** it SHALL show a carousel of small article cards

#### Scenario: Social Networks sidebar

- **GIVEN** the page is rendered
- **WHEN** the Social Networks widget is displayed
- **THEN** it SHALL show a heading "Social Networks"
- **AND** it SHALL list platforms with icons, follower/subscriber counts,
  and action text

#### Scenario: Newsletter sidebar

- **GIVEN** the page is rendered
- **WHEN** the Newsletter widget is displayed
- **THEN** it SHALL show a heading "Newsletter"
- **AND** it SHALL show an email icon, heading, description, email input,
  and subscribe button

### Requirement: Product List area (3-column)

The system SHALL render a product list area with 3 equal columns, each with
a heading and 4 horizontal article cards (thumbnail + headline + date +
comments). Columns: "Best Product Deals", "Tech Culture", "Brilliant Ideas".

#### Scenario: Three-column product lists

- **GIVEN** the page is rendered
- **WHEN** the product list area is displayed
- **THEN** it SHALL show 3 columns with headings
- **AND** each column SHALL have 4 horizontal article cards

### Requirement: Footer

The system SHALL render a three-column footer with:
1. Left: site logo + description paragraph
2. Center: "Quick Links" heading with two columns of link lists (Sitemaps,
   Categories, Archives, Advertise, Ad Choice / Privacy Policy, Terms of Use,
   Help Center, Newsletters, Feedback)
3. Right: "Most Viewed News" heading with 2 article cards (thumbnail +
  headline + date + comments)

The footer bottom SHALL contain a copyright line linking to Component Dock
(instead of ColorLib) and social media icon links (Facebook, Twitter,
YouTube, Pinterest, RSS).

#### Scenario: Footer layout

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show 3 columns: about, quick links, most viewed news
- **AND** the footer bottom SHALL show copyright with Component Dock link
- **AND** it SHALL show social media icon links

#### Scenario: Quick Links

- **GIVEN** the footer is displayed
- **WHEN** the Quick Links section is shown
- **THEN** it SHALL display 10 links in a 2-column layout

## Verification checklist

- [ ] All section components render without errors
- [ ] Navigation links are functional (anchor links to sections)
- [ ] Mobile menu toggle works with aria-expanded
- [ ] Hero banner carousel auto-advances and indicator clicks work
- [ ] Category tag badges use the correct gold/yellow background
- [ ] Footer links to Component Dock
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] No references to ColorLib in app source code
- [ ] Responsive layout works at mobile/tablet/desktop breakpoints
- [ ] 100% test coverage (lines, functions, branches, statements)
