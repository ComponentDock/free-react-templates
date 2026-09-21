## Purpose

Fragstorm is a gaming magazine template that recreates the ColorLib "Amin" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. It provides a dark-themed gaming news site with hero articles, review previews, tabbed update news, video guides, and Instagram posts.

## Requirements

### Requirement: TopBar displays weather, date, and social links

Users SHALL see a thin top bar with a weather widget, date, and social media icon links.

#### Scenario: TopBar renders on page load

- **WHEN** the page loads
- **THEN** the top bar displays a weather indicator, the current date, and 5 social media icons (Facebook, Twitter, YouTube, Instagram, Email)

### Requirement: Logo section shows brand name centered

Users SHALL see the "Fragstorm" brand name centered on a dark background.

#### Scenario: Logo renders on page load

- **WHEN** the page loads
- **THEN** the logo section shows "Fragstorm" text centered on a near-black background

### Requirement: Navbar provides navigation with mobile support

Users SHALL see a red navigation bar with links to Home, Platform, Pages, Reviews, Windows, and Videos. On mobile, a hamburger menu SHALL toggle the nav links.

#### Scenario: Desktop navigation renders

- **WHEN** the page loads on desktop
- **THEN** all 6 navigation links are visible

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu opens with the same navigation links

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section displays featured article and trending posts

Users SHALL see a featured article with headline, author, and date on the left, and trending posts on the right.

#### Scenario: Featured article renders

- **WHEN** the page loads
- **THEN** the hero section shows the featured article headline, author name, and publication date

#### Scenario: Trending posts render

- **WHEN** the page loads
- **THEN** the hero section shows 3 trending post items with titles, dates, and comment counts

### Requirement: Latest Preview shows review-score cards in a grid

Users SHALL see game review cards with images and circular score indicators.

#### Scenario: Review cards render

- **WHEN** the page loads
- **THEN** 5 review cards are displayed with game titles and score numbers

### Requirement: Update News provides tabbed content by platform

Users SHALL see news articles organized by platform tabs (PlayStation, Windows, Mobile, Xbox). Clicking a tab SHALL show articles for that platform.

#### Scenario: Default tab content renders

- **WHEN** the page loads
- **THEN** PlayStation tab is active and shows 3 articles

#### Scenario: Tab switching works

- **WHEN** the user clicks the Windows tab
- **THEN** Windows articles are displayed and the Windows tab is marked as selected

### Requirement: Video Guide shows 3-column video cards

Users SHALL see video guide cards with thumbnails, play overlay on hover, and metadata.

#### Scenario: Video cards render

- **WHEN** the page loads
- **THEN** 3 video guide cards are displayed with titles, authors, dates, and comment counts

### Requirement: Instagram Posts shows image grid with hover overlay

Users SHALL see a 4-column Instagram image grid with a follow overlay on hover.

#### Scenario: Instagram grid renders

- **WHEN** the page loads
- **THEN** 4 Instagram post images are displayed in a grid

### Requirement: Footer links to Component Dock

Users SHALL see a footer with link columns and a copyright line linking to https://www.componentdock.com/.

#### Scenario: Footer renders with links

- **WHEN** the page loads
- **THEN** the footer shows 4 link columns and a copyright line with "Component Dock" linking to https://www.componentdock.com/

### Requirement: App composes all sections in order

The app SHALL render all sections in the correct order: TopBar, Logo, Navbar, Hero, LatestPreview, UpdateNews, VideoGuide, InstagramPosts, Footer.

#### Scenario: All sections render in order

- **WHEN** the page loads
- **THEN** the document title contains "Fragstorm" and all sections are present with correct IDs
