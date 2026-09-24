# Template: Spread (Video & Magazine)

## Purpose

Spread is a video/magazine template — a React recreation of the ColorLib free
"Mag" template (preview: https://preview.colorlib.com/theme/mag/).
Built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

**Source mapping:** `apps/spread` recreates
`https://colorlib.com/wp/template/mag/`.

Design tokens captured from the original:

- Brand pink `#ed3974` (primary accent, CTA buttons, hover states)
- Gold accent `#bb8950` (category badges)
- Dark backgrounds: `#252324` (footer), `#1a1a1a` (nav)
- Text primary: `#3d3d3d`, muted: `#777777`, heading: `#111111`
- Typeface: Poppins (Google Fonts via `<link>`)
- Light section background: `#f2f4f5`
- Section padding: 48-64px top/bottom
- Flex/grid layout (Tailwind)
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Spread lives in `apps/spread` and uses shared components from `packages/ui`
(Button, cn).

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
