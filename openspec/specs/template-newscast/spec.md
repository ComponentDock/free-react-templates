# Template: Newscast (News & Magazine)

## Purpose

Newscast is a news/magazine template — a React recreation of the ColorLib free
"Aznews" template (preview: https://preview.colorlib.com/theme/aznews/).
Built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

**Source mapping:** `apps/newscast` recreates
`https://colorlib.com/wp/template/aznews/`.

Design tokens captured from the original (see docs/replication.md):

- Brand orange-red `#fc3f00` (theme color, buttons, scroll-to-top, preloader,
  hover states), navy `#415094` (secondary accents, generic button default)
- Category tag background colors: `.color1` = `#ffe7e6` (light pink),
  `.color2` = `#f4ffd5` (light green), `.color3` = `#e1fcff` (light blue),
  `.color4` = `#fff9c6` (light yellow)
- Gray section backgrounds: `#f5f5f5` / `#f7f7fd` (alternating)
- Typeface: Roboto (Google Fonts via `<link>`)
- Headings: `font-weight: 500`, color `#000`, normal case
- Body text: `color: #506172`, `font-size: 16px`, `line-height: 30px`
- `.boxed-btn`: transparent bg, 1px solid `#fc3f00`, uppercase, letter-spacing
  3px, 18px 44px padding; hover fills brand color
- `.btn`: `#ff656a` bg, 5px border-radius, uppercase; `:hover` fills `#e6373d`
- `.border-btn`: 2px solid `#fc3f00`, transparent bg, 5px radius
- Header top bar: black `#000` background
- Header bottom: sticky white with shadow
- Footer: white background, dark text, social icons, newsletter form, Instagram
  feed grid
- Section padding: 50px top / 20-45px bottom (varies per section)
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Newscast lives in `apps/newscast` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Top header bar

The system SHALL render a black top bar with weather info (icon + temperature +
condition) on the left, and social media icon links (Twitter, Instagram,
Pinterest) on the right. Hidden on mobile (`d-none d-md-block`).

#### Scenario: Desktop top bar

- **GIVEN** the page is rendered on a viewport wider than 768px
- **WHEN** the header is displayed
- **THEN** it SHALL show a black bar with weather info and social icons
- **AND** the bar SHALL be hidden on mobile viewports

### Requirement: Mid header with logo and banner

The system SHALL render a mid-header section containing the site logo on the
left and a banner/advertisement image on the right. Hidden on mobile.

#### Scenario: Desktop mid header

- **GIVEN** the page is rendered on a viewport wider than 768px
- **WHEN** the mid header is displayed
- **THEN** it SHALL show the site logo linking to `#`
- **AND** it SHALL show a banner placeholder image on the right

### Requirement: Sticky navigation bar

The system SHALL render a sticky bottom header with the site logo, main
navigation links (Home, Category, About, Latest News, Contact), a "Pages"
dropdown submenu (Element, Blog, Blog Details, Category Details), and a
search icon/button on the right. The nav becomes sticky on scroll.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navigation bar is displayed
- **THEN** it SHALL show links to Home, Category, About, Latest News, Contact
- **AND** it SHALL show a "Pages" dropdown with sub-items

#### Scenario: Search toggle

- **GIVEN** the navigation is visible
- **WHEN** the user clicks the search icon
- **THEN** a search input field SHALL appear

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the mobile menu toggle
- **THEN** the mobile navigation menu SHALL open

### Requirement: Trending area

The system SHALL render a trending news section with a "Trending now" ticker
bar at the top, a large featured article card (8-column) on the left with an
overlay gradient and category tag + headline, three smaller article cards
below it, and a sidebar (4-column) with five small horizontal article cards
(thumbnail + category tag + headline).

#### Scenario: Trending ticker

- **GIVEN** the page is rendered
- **WHEN** the trending section loads
- **THEN** it SHALL display a "Trending now" label with an animated news ticker

#### Scenario: Featured article

- **GIVEN** the page is rendered
- **WHEN** the trending section is displayed
- **THEN** it SHALL show a large featured image with overlay gradient
- **AND** it SHALL show a category tag badge and article headline over the image

#### Scenario: Trending bottom cards

- **GIVEN** the page is rendered
- **WHEN** the trending bottom row is displayed
- **THEN** it SHALL show 3 equal-width article cards with image, colored
  category tag, and headline

#### Scenario: Trending sidebar

- **GIVEN** the page is rendered
- **WHEN** the trending sidebar is displayed
- **THEN** it SHALL show 5 horizontal article cards with thumbnail, category
  tag, and headline in a flex row layout

### Requirement: Weekly Top News carousel (first)

The system SHALL render a "Weekly Top News" section with a horizontal carousel
of news cards (image + category tag + headline), navigated by dot indicators.

#### Scenario: Weekly news carousel

- **GIVEN** the page is rendered
- **WHEN** the first weekly news section is displayed
- **THEN** it SHALL show a heading "Weekly Top News"
- **AND** it SHALL show a horizontal carousel with 4+ news cards
- **AND** it SHALL have dot navigation indicators

### Requirement: What's New tabbed section

The system SHALL render a "What's New" section with category tabs (All,
Lifestyle, Travel, Fashion, Sports, Technology) on the left (8-col), and a
"Follow Us" sidebar on the right (4-col) with social media counts (Facebook,
Twitter, Instagram, YouTube) and a poster image.

#### Scenario: Tab switching

- **GIVEN** the page is rendered
- **WHEN** the What's New section is displayed
- **THEN** it SHALL show tab buttons for All, Lifestyle, Travel, Fashion,
  Sports, Technology
- **AND** "All" SHALL be active by default
- **AND** clicking a tab SHALL switch the displayed news cards

#### Scenario: Tab content

- **GIVEN** a category tab is selected
- **WHEN** the tab content is displayed
- **THEN** it SHALL show a 2x2 grid of news cards (image + category tag + headline)

#### Scenario: Follow Us sidebar

- **GIVEN** the page is rendered
- **WHEN** the Follow Us sidebar is displayed
- **THEN** it SHALL show social platform rows with icon, follower count, and
  label ("Fans")
- **AND** it SHALL show a promotional poster image below the social counts

### Requirement: Weekly Top News carousel (second, gray bg)

The system SHALL render a second "Weekly Top News" carousel on a light gray
background (`#f5f5f5`), with news cards showing an image, category tag, date,
and headline.

#### Scenario: Second weekly carousel

- **GIVEN** the page is rendered
- **WHEN** the second weekly news section is displayed
- **THEN** it SHALL have a gray background
- **AND** it SHALL show cards with image, category tag, date text, and headline

### Requirement: YouTube / Video section

The system SHALL render a video section with a large embedded video player on
the left (6-col) and a video thumbnail grid on the right (6-col) with small
video preview cards.

#### Scenario: Video display

- **GIVEN** the page is rendered
- **WHEN** the video section is displayed
- **THEN** it SHALL show a large video area with category tag and description
- **AND** it SHALL show video thumbnail cards on the right sidebar

### Requirement: Recent Articles carousel

The system SHALL render a "Recent Articles" section with a horizontal carousel
of article cards (image + category tag + headline), navigated by dot
indicators.

#### Scenario: Recent articles

- **GIVEN** the page is rendered
- **WHEN** the recent articles section is displayed
- **THEN** it SHALL show a heading "Recent Articles"
- **AND** it SHALL show a horizontal carousel with article cards

### Requirement: Pagination

The system SHALL render a pagination bar with page number links and previous/
next arrow buttons, centered below the content.

#### Scenario: Pagination display

- **GIVEN** the page is rendered
- **WHEN** the pagination is displayed
- **THEN** it SHALL show numbered page links (01, 02, 03) and arrow buttons

### Requirement: Footer

The system SHALL render a three-column footer with:
1. Left: site logo, description paragraph, social media icon links
   (Twitter, Instagram, Pinterest)
2. Center: Newsletter heading, description, email subscription form with
   submit button
3. Right: Instagram Feed heading with a 3x2 grid of Instagram thumbnail images

The footer bottom SHALL contain a copyright line and footer menu links
(Terms of use, Privacy Policy, Contact). The copyright line SHALL link to
Component Dock instead of ColorLib.

#### Scenario: Footer layout

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show 3 columns: brand info + social, newsletter form,
  Instagram grid
- **AND** the footer bottom SHALL show copyright with Component Dock link
- **AND** it SHALL show Terms of use, Privacy Policy, and Contact links

#### Scenario: Newsletter form

- **GIVEN** the footer is displayed
- **WHEN** the user enters an email and submits the newsletter form
- **THEN** the form SHALL accept email input and have a submit button

## Verification checklist

- [ ] All section components render without errors
- [ ] Navigation links are functional (anchor links to sections)
- [ ] Mobile menu toggle works with aria-expanded
- [ ] Tab switching in What's New works correctly
- [ ] Category tag badges use the correct background colors
- [ ] Footer links to Component Dock
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] No references to ColorLib in app source code
- [ ] Responsive layout works at mobile/tablet/desktop breakpoints
- [ ] 100% test coverage (lines, functions, branches, statements)
