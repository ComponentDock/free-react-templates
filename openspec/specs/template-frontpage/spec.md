# Template: FrontPage (News & Magazine Landing)

Recreation of ColorLib "Aznews" (https://colorlib.com/wp/template/aznews/).

## Purpose

FrontPage is a single-page news & magazine template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Aznews"
template (news/magazine portal), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Brand accent `#fc3f00` (orange-red), black header bar, gray section bg
  `#f7f7fd`
- Typeface: Roboto (Google Fonts via `<link>`)
- Category badge colors: pink `#ffe7e6`, green `#f4ffd5`, blue `#e1fcff`,
  yellow `#fff9c6`
- Body text `#506172`, headings `#000` weight 500
- Button: border 1px `#fc3f00`, border-radius 5px, uppercase, letter-spacing 3px
- Footer: dark bg, newsletter form, Instagram grid, copyright bar

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons.

FrontPage lives in `apps/frontpage` and uses shared components from
`packages/ui`.

## Design reference (replication findings)

- **Source:** ColorLib "Aznews" — https://colorlib.com/wp/template/aznews/
- **Source slug:** `aznews`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/aznews/ — **HTTP 200**, 68,661 B, fetched 2026-10-23 (page `<title>`: "News HTML-5 Template"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/aznews/assets/css/style.css`, fetched 2026-10-23): brand `#fc3f00`, `#415094`, `#4cd3e3`, `#38a4ff`; dominant neutrals `#f9f9ff`, `#999999`, `#eeeeee`; type Roboto. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/aznews-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/frontpage` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Top bar

The system SHALL render a black top bar with a date display and social media
icons (Twitter, Instagram, Pinterest).

#### Scenario: Top bar content

- **GIVEN** the page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show a date string
- **AND** it SHALL show social icon links for Twitter, Instagram, and Pinterest

### Requirement: Header middle

The system SHALL render a header section with the site logo on the left and a
banner ad placeholder on the right.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the header middle is displayed
- **THEN** it SHALL show the site name "FrontPage" as a link
- **AND** it SHALL show a banner ad image

### Requirement: Navigation bar

The system SHALL render a sticky navbar with the site name "FrontPage" on the
left, navigation links (Home, Category, About, Latest News, Contact) in the
center, and a search icon on the right. The navbar SHALL support a mobile
hamburger menu.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "FrontPage" linking to `#home`
- **AND** it SHALL show links to Home, Category, About, Latest News, and Contact

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Trending area

The system SHALL render a trending section with a large hero card (image +
category badge + title overlay) alongside a list of smaller news cards and a
sidebar with thumbnail items.

#### Scenario: Trending content

- **GIVEN** the page is rendered
- **WHEN** the trending area is displayed
- **THEN** it SHALL contain the heading "Trending"
- **AND** it SHALL show a hero article with category badge and title
- **AND** it SHALL show smaller article cards with images and titles
- **AND** it SHALL show sidebar items with thumbnails and titles

### Requirement: Weekly top news

The system SHALL render a "Weekly Top News" section with a horizontal list of
four news cards, each showing an image, category badge, and title.

#### Scenario: Weekly top news cards

- **GIVEN** the page is rendered
- **WHEN** the weekly top news section is displayed
- **THEN** it SHALL contain the heading "Weekly Top News"
- **AND** it SHALL show four news cards with images and titles

### Requirement: What's new section

The system SHALL render a tabbed "What's New" section with category tabs
(All, Lifestyle, Travel, Fashion, Sports, Technology), a 2x2 grid of news
cards, a "Follow Us" sidebar with social follower counts, and an ad poster.

#### Scenario: Tab navigation

- **GIVEN** the page is rendered
- **WHEN** the what's new section is displayed
- **THEN** it SHALL show the heading "What's New"
- **AND** it SHALL show tab buttons for All, Lifestyle, Travel, Fashion,
  Sports, and Technology
- **AND** clicking a tab SHALL update the displayed content

#### Scenario: Follow us sidebar

- **GIVEN** the page is rendered
- **WHEN** the what's new section is displayed
- **THEN** it SHALL show a "Follow Us" sidebar with social media links and
  follower counts for Facebook, Twitter, Instagram, and YouTube

### Requirement: Weekly top news 2

The system SHALL render a second "Weekly Top News" section on a gray background
with news cards showing date, category badge, and title.

#### Scenario: Second weekly news

- **GIVEN** the page is rendered
- **WHEN** the second weekly news section is displayed
- **THEN** it SHALL contain the heading "Weekly Top News"
- **AND** it SHALL show news items with dates and titles on a gray background

### Requirement: Recent articles

The system SHALL render a "Recent Articles" section with four news cards
showing images, category badges, and titles.

#### Scenario: Recent article cards

- **GIVEN** the page is rendered
- **WHEN** the recent articles section is displayed
- **THEN** it SHALL contain the heading "Recent Articles"
- **AND** it SHALL show four news cards with images and titles

### Requirement: Footer

The system SHALL render a dark footer with three columns: logo + description +
social icons, a newsletter subscription form, and an Instagram photo grid. A
bottom bar SHALL show copyright text and a link to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "FrontPage"
- **AND** it SHALL show a newsletter email form
- **AND** it SHALL show an Instagram grid
- **AND** it SHALL show a copyright notice
- **AND** it SHALL link to https://www.componentdock.com/ with text "Component Dock"

### Requirement: Page composition

The system SHALL compose all sections in order (HeaderTopBar, HeaderMiddle,
Navbar, TrendingArea, WeeklyTopNews, WhatsNew, WeeklyTopNews2, RecentArticles,
Footer) and set the document title.

#### Scenario: Full page render

- **GIVEN** the FrontPage app is rendered
- **WHEN** the page loads
- **THEN** all sections SHALL be present
- **AND** the document title SHALL be "FrontPage — News & Magazine Template"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/frontpage/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/frontpage/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
