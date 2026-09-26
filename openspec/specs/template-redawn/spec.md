# Template: Redawn (Creative Portfolio / Blog)

## Purpose

Recreation of the ColorLib "Rea" template — a creative portfolio and blog grid layout with animated headline, masonry-style image grid, hover overlays, and a full-screen navigation overlay.

- **Source:** ColorLib "Rea" — https://colorlib.com/wp/template/rea/
- **Preview:** https://preview.colorlib.com/theme/rea/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Package:** `@free-react-templates/redawn`
- **Deploy target:** `redawn.free.componentdock.com`
- **Original author:** Dry Themes

## Requirements

### Requirement: Header with animated headline

The page SHALL display a header with a logo and an animated headline that cycles through "web resources", "psd files", and "mockups".

#### Scenario: Page loads with header and animated headline

- **WHEN** the user visits the Redawn homepage
- **THEN** a logo and animated headline should be visible in the header
- **AND** the headline cycles through "web resources", "psd files", "mockups"

### Requirement: Hamburger menu toggle

The page SHALL display a 4-line hamburger toggle that animates to an X when the menu is open.

#### Scenario: Hamburger menu toggle

- **WHEN** the user clicks the hamburger menu icon
- **THEN** a full-screen navigation overlay should appear

### Requirement: Full-screen navigation overlay

The page SHALL display a full-screen navigation overlay with menu links, social icons, and a search field.

#### Scenario: Overlay menu navigation

- **GIVEN** the full-screen overlay is open
- **WHEN** the user clicks a nav link
- **THEN** the overlay should close

### Requirement: Blog grid with portfolio cards

The page SHALL display a masonry-style grid of portfolio cards with images, category tags, titles, and like buttons.

#### Scenario: Grid card hover effect

- **GIVEN** a portfolio card is visible in the grid
- **WHEN** the user hovers over the card image
- **THEN** the image should swap to show the hover/alternate image

#### Scenario: Like button interaction

- **GIVEN** a portfolio card is visible
- **WHEN** the user clicks the heart/like button
- **THEN** the like count should increment by 1

### Requirement: Load more button

The page SHALL display a load more arrow button.

#### Scenario: Load more items

- **WHEN** the user clicks the load more arrow
- **THEN** additional portfolio cards should be loaded into the grid

### Requirement: Footer with Component Dock branding

The page SHALL display a 3-column footer with categories, page links, social icons, and a Component Dock attribution link.

#### Scenario: Footer content

- **WHEN** the user scrolls to the bottom of the page
- **THEN** a footer should be visible with three columns: categories, page links, social icons
- **AND** a copyright line with "Component Dock" link to https://www.componentdock.com/

### Requirement: Mobile responsiveness

The page SHALL be responsive and stack grid items in a single column on mobile.

#### Scenario: Mobile responsiveness

- **WHEN** the user views the page on a mobile device
- **THEN** the grid should stack items in a single column
- **AND** the hamburger menu should remain accessible

## Design Tokens

| Token                 | Value               | Notes                                                          |
| --------------------- | ------------------- | -------------------------------------------------------------- |
| Font family           | `Lato`, sans-serif  | Google Font, weights 300, 400, 700                             |
| Brand color (primary) | `#f271ab`           | Pink — used for buttons, links hover, selection bg, active nav |
| Body text color       | `#2f2f2f`           | Dark gray                                                      |
| Body background       | `#ffffff`           | White                                                          |
| Link default          | `#2f2f2f`           | Same as body text                                              |
| Link hover            | `#f271ab`           | Brand pink                                                     |
| Button border         | `2px solid #f271ab` | Pink outline button                                            |
| Social icon color     | `#CACACA`           | In overlay menu                                                |
| Footer link color     | `#7e7e7e`           | Muted gray                                                     |

## Verification Checklist

- [ ] Font `Lato` loaded via Google Fonts
- [ ] Brand color `#f271ab` used for CTAs, hover states
- [ ] Animated headline cycles through 3 phrases
- [ ] 4-line hamburger toggle animates to X when open
- [ ] Full-screen overlay nav with search and social icons
- [ ] Masonry-style grid with mixed card widths
- [ ] Image hover swap effect on grid cards
- [ ] Heart/like button with count
- [ ] Category tags on each card
- [ ] Load more arrow
- [ ] 3-column footer with categories, links, social
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] CNAME: `redawn.free.componentdock.com`
- [ ] homepage in package.json: `https://redawn.free.componentdock.com`
