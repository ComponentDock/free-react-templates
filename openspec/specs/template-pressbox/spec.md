# Spec: Pressbox

Recreation of ColorLib **Magnews** — https://colorlib.com/wp/template/magnews/

## Purpose

Pressbox is a news and magazine website template built with React 19, Tailwind CSS 4, and TypeScript. It recreates the ColorLib Magnews design with a dark navigation bar, red accent color, hero carousel, trending posts grid, newsletter subscription, and footer.

## Requirements

### Requirement: TopBar with secondary navigation and social links

The template SHALL render a top bar containing secondary navigation links (About Us, Contact, Advertisement, Privacy) and social media icon links (Facebook, Twitter, Instagram, YouTube, RSS).

#### Scenario: TopBar renders navigation and social icons

- **WHEN** the page loads
- **THEN** the secondary navigation is visible with all four links
- **AND** five social media icon links are present

### Requirement: Dark navbar with branding and category navigation

The template SHALL render a dark navigation bar with the "Pressbox 24H" branding, category links (Home, News, Sport, Lifestyle, Fashion, Music, Business), and a search toggle button.

#### Scenario: Navbar shows branding and categories

- **WHEN** the page loads
- **THEN** the "Pressbox" branding and "24H" badge are visible
- **AND** the category navigation shows all seven categories

#### Scenario: Search toggle shows and hides search input

- **WHEN** the user clicks the search button
- **THEN** a search input field appears
- **WHEN** the user clicks the search button again
- **THEN** the search input field disappears

### Requirement: Hero carousel with featured articles

The template SHALL render a full-width hero carousel displaying featured articles with category badge, title, date, and comment count. The carousel SHALL support prev/next navigation and dot indicators with wrap-around behavior.

#### Scenario: Default state shows first article

- **WHEN** the page loads
- **THEN** the first featured article is displayed with its title, category, date, and comment count

#### Scenario: Next and previous navigation

- **WHEN** the user clicks the next button
- **THEN** the next article is displayed
- **WHEN** the user clicks the previous button
- **THEN** the previous article is displayed

#### Scenario: Dot indicator navigation

- **WHEN** the user clicks a dot indicator
- **THEN** the corresponding article is displayed

#### Scenario: Wrap-around navigation

- **WHEN** the user is on the last slide and clicks next
- **THEN** the first slide is displayed
- **WHEN** the user is on the first slide and clicks previous
- **THEN** the last slide is displayed

### Requirement: Trending posts and recent articles grid

The template SHALL render a grid of trending post cards and a separate grid of recent article cards, each with image, category, title, date, and comment count.

#### Scenario: Trending posts section renders

- **WHEN** the page loads
- **THEN** the "Trending Posts" heading is visible
- **AND** four trending post cards are displayed

#### Scenario: Recent articles section renders

- **WHEN** the page loads
- **THEN** the "Recent Articles" heading is visible
- **AND** three recent article cards are displayed

### Requirement: Newsletter subscription section

The template SHALL render a newsletter subscription section with an email input and subscribe button on a dark background.

#### Scenario: Newsletter form renders

- **WHEN** the page loads
- **THEN** the "Stay Connected" heading is visible
- **AND** an email input field and subscribe button are present

#### Scenario: Form submission clears input

- **WHEN** the user types an email address and clicks subscribe
- **THEN** the email field is cleared

### Requirement: Footer with branding and Component Dock link

The template SHALL render a footer with the site branding, quick links, social media icons, copyright notice, and a "More templates at Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer renders all elements

- **WHEN** the page loads
- **THEN** the "Pressbox" branding is visible in the footer
- **AND** quick links are present
- **AND** social media icon links are present
- **AND** the copyright notice is present
- **AND** a "Component Dock" link points to https://www.componentdock.com/
