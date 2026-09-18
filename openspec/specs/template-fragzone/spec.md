# template-fragzone

## Purpose

Fragzone is a gaming website template recreating the ColorLib Game Warrior design under a new original name. It provides a complete gaming community site with navbar, hero banner, latest news ticker, game category cards, recent games gallery, tournament listings, review cards, and a dark footer.

## Requirements

### Requirement: Navbar with logo, navigation links, and join button

The navbar SHALL display a logo with gaming icon, navigation links to all sections, and a "Join Now" pill button. The mobile view SHALL show a hamburger menu that toggles a dropdown.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on desktop
- **THEN** the Fragzone logo is visible
- **AND** navigation links (Home, Games, Blog, Forums, Contact) are displayed
- **AND** a "Join Now" button is visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** a mobile navigation menu opens with all nav links
- **AND** clicking a link closes the mobile menu

### Requirement: Hero section with background image and CTA

The hero section SHALL display a full-width background image with a dark overlay, a heading "The Best Games Out There" with a gold-accented "Games" word, descriptive text, and an "Explore Games" call-to-action button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shows "The Best Games Out There" heading
- **AND** a descriptive paragraph about gaming news is visible
- **AND** an "Explore Games" button links to the games section

### Requirement: Latest news ticker bar

The latest news section SHALL show a split bar with a gold "Latest News" label on the left and a dark ticker on the right with badge-tagged news items.

#### Scenario: News bar renders items

- **WHEN** the page loads
- **THEN** the "Latest News" label is visible
- **AND** three news items with badges (New, Hot, Patch) are displayed

### Requirement: Game types category cards

The game types section SHALL display four equal-width cards with background images, dark overlays, category badges (New Release, Strategy, RPG, Racing), titles, descriptions, and comment counts.

#### Scenario: Game type cards render

- **WHEN** the games section loads
- **THEN** four game type cards are visible
- **AND** each card shows a category badge, title, description, and comment count

### Requirement: Recent games gallery

The recent games section SHALL display three game cards on a light background, each with a badge overlay, image, title, description, and comment count.

#### Scenario: Recent games render

- **WHEN** the recent games section loads
- **THEN** the "Recent Games" heading is centered
- **AND** three game cards with badges, titles, and descriptions are visible

### Requirement: Tournament listings

The tournaments section SHALL display two tournament cards on a dark background, each with a "Premium Tournament" badge, image, game title, dates, participant count, organizer, and prize information.

#### Scenario: Tournament cards render

- **WHEN** the tournaments section loads
- **THEN** the "Tournaments" badge is visible
- **AND** two tournament cards with details are displayed

### Requirement: Recent reviews section

The recent reviews section SHALL display four review cards on a dark background, each with a color-coded circular rating badge, game image, title, and description.

#### Scenario: Review cards render

- **WHEN** the reviews section loads
- **THEN** the "Recent Reviews" heading is centered
- **AND** four review cards with rating badges are visible

### Requirement: Footer with Component Dock attribution

The footer SHALL display a dark background with three columns (brand, latest posts, top comments), and a bottom bar with "Made with ♥ by Component Dock" linking to https://www.componentdock.com/ and footer navigation links.

#### Scenario: Footer renders Component Dock link

- **WHEN** the footer loads
- **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is visible
- **AND** latest posts and top comments sections are rendered
- **AND** footer navigation links are present
