# Spec: BroadSheet — News & Magazine Template

> Recreation of ColorLib "Newspaper" (https://colorlib.com/wp/template/newspaper/).
> Preview: https://preview.colorlib.com/theme/newspaper/

## Purpose

BroadSheet is a full-featured news and magazine website template with breaking
news tickers, featured articles, popular news grid, video section, and editorial
picks. Dense, information-rich layout typical of online newspaper sites.

## Requirements

### Requirement: TopBar with logo and search

The template SHALL display a top bar with the "BroadSheet" logo on the left,
Login/Register links, and a search input with submit button on the right.

#### Scenario: TopBar renders logo and search

- **WHEN** the page loads
- **THEN** the "BroadSheet" logo is visible
- **AND** Login and Register links are visible
- **AND** a search input with submit button is visible

### Requirement: Navbar with horizontal menu

The template SHALL display a dark-background navbar with menu items: Home,
Politics, Breaking News, Business, Technology, Health, Travel, Sports, Contact.
The Home item SHALL be visually active. The navbar SHALL support mobile toggle.

#### Scenario: Navbar renders all menu items

- **WHEN** the page loads
- **THEN** all 9 menu items are visible
- **AND** the Home item has an active indicator

### Requirement: Hero with breaking news tickers

The template SHALL display a hero area with two breaking news ticker rows
("Breaking News" and "International" badges) and an ad placeholder.

#### Scenario: Hero displays tickers

- **WHEN** the page loads
- **THEN** the "Breaking News" badge is visible
- **AND** the "International" badge is visible
- **AND** ticker headlines are displayed

### Requirement: FeaturedPosts section

The template SHALL display a featured posts section with a main featured post
(large image, category badge, title, author, excerpt, like/comment counts),
2 stacked smaller featured posts, and 6 sidebar small posts with thumbnails.

#### Scenario: Featured posts layout

- **WHEN** the page loads
- **THEN** the main featured post shows image, category, title, author, excerpt
- **AND** like and comment counts are displayed
- **AND** 6 sidebar posts are visible

### Requirement: PopularNews section

The template SHALL display a popular news section with 4 post cards in a 2-column
grid, a "4 Most Popular News" numbered list, and a newsletter signup form.

#### Scenario: Popular news grid and newsletter

- **WHEN** the page loads
- **THEN** 4 post cards are displayed
- **AND** the "4 Most Popular News" list shows 4 numbered items
- **AND** the newsletter form has name, email inputs and subscribe button

### Requirement: Newsletter form interaction

The newsletter form SHALL accept name and email inputs and handle submission
without page navigation.

#### Scenario: Newsletter form submission

- **WHEN** a user enters name and email
- **AND** clicks Subscribe
- **THEN** the form does not navigate away

### Requirement: VideoSection

The template SHALL display a dark-overlay section with 3 video thumbnails
and play button icons.

#### Scenario: Video thumbnails render

- **WHEN** the page loads
- **THEN** 3 video thumbnails are displayed with play button overlays

### Requirement: Editorial section

The template SHALL display an editorial section with "Editor's Pick" (6 posts
in 3-column grid) and "World News" sidebar (5 stacked posts).

#### Scenario: Editorial layout

- **WHEN** the page loads
- **THEN** the Editor's Pick shows 6 posts
- **AND** the World News sidebar shows 5 posts

### Requirement: Footer with Component Dock link

The template SHALL display a dark-background footer with logo, contact info,
4 link columns, and a bottom bar with copyright and a link to
https://www.componentdock.com/ branded "Component Dock".

#### Scenario: Footer renders with Component Dock

- **WHEN** the page loads
- **THEN** the footer shows logo and contact info
- **AND** 4 link columns are visible
- **AND** the bottom bar links to Component Dock
