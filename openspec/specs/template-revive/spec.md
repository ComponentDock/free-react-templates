# Template: Revive (Creative Portfolio / Blog)

## Purpose

Recreation of ColorLib's **Rea** template — a creative portfolio and blog
template with a masonry grid layout, animated typing headline, and clean
pink-accent aesthetic.

- **Source:** https://colorlib.com/wp/template/rea/
- **Preview:** https://preview.colorlib.com/theme/rea/
- **New name:** `revive`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

| Token               | Value                                                                                        | Notes                                            |
| ------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Brand color         | `#f271ab` (pink)                                                                             | Primary accent — links, hover, selection, hearts |
| Text color          | `#2f2f2f` / `#222222` (dark gray)                                                            | Body and headings                                |
| Background          | `#fff` (white)                                                                               | Page and card backgrounds                        |
| Blog section bg     | `#F5F5F5` (light gray)                                                                       | Behind the masonry grid                          |
| Footer text         | `#7e7e7e` (medium gray)                                                                      | Footer links and paragraphs                      |
| Category text       | `#a5a5a5` (gray)                                                                             | Uppercase category labels, like counts           |
| Secondary text      | `#8d8d8d`                                                                                    | Metadata, secondary info                         |
| Error/link color    | `#FD3137`                                                                                    | Rare accent, link pages                          |
| Font family         | `Lato` (Google Fonts) — weights 300,400,700                                                  | Primary and only font family                     |
| Button style        | Border 2px solid `#f271ab`, color `#f271ab`, padding 18px 50px, no border-radius, 700 weight | Outline buttons                                  |
| Button hover        | Background `#f271ab`, color `#fff`                                                           | Fill on hover                                    |
| Card image radius   | 2px top corners                                                                              | Rounded top on grid images                       |
| Card content radius | 2px bottom corners                                                                           | Rounded bottom on content area                   |
| Content width       | 1170px max                                                                                   | Main content container                           |
| Grid width          | 1200px max                                                                                   | Masonry grid container                           |
| Grid item sizes     | 300px (1/4), 600px (1/2), 1200px (full)                                                      | Responsive masonry columns                       |
| Card overlay        | `rgba(22,31,50, 0.5)`                                                                        | Semi-transparent dark overlay on images          |
| Social icons        | Inline SVG (twitter, dribbble, facebook, rss)                                                | 26px, color #CACACA                              |
| Menu overlay        | Full-screen white overlay, 100% height                                                       | Slide-in nav from hamburger                      |
| Footer layout       | 3-column (categories, nav, social+copy)                                                      | Columns ~30.6% each, 4% margin                   |

## Requirements

### Requirement: Header renders with logo and animated headline

The template SHALL display a header with a logo and an animated typing headline.

#### Scenario: Header renders with logo and animated headline

- **WHEN** the user loads the page
- **THEN** the header displays a logo element
- **AND** the headline shows "pixel precise" with an animated word cycling through "web resources", "psd files", "mockups"
- **AND** the subline reads "to suit all your needs."

### Requirement: Hamburger menu opens full-screen overlay

The template SHALL provide a hamburger toggle that opens a full-screen navigation overlay.

#### Scenario: Hamburger menu opens full-screen overlay

- **WHEN** the user clicks the hamburger toggle icon
- **THEN** a full-screen white overlay appears
- **AND** navigation links (Home, About, Contact, Features) are displayed centered
- **AND** social media icons (Twitter, Dribbble, Facebook, RSS) appear below the nav
- **AND** a search input is available

#### Scenario: Hamburger menu closes

- **WHEN** the menu overlay is open and the user clicks the close button
- **THEN** the overlay disappears

### Requirement: Portfolio grid displays masonry layout

The template SHALL display portfolio items in a masonry grid layout with mixed column sizes.

#### Scenario: Portfolio grid displays masonry layout

- **WHEN** the user views the portfolio section
- **THEN** items are displayed in a masonry grid layout
- **AND** items have varying widths (full, half, quarter)

#### Scenario: Grid item hover reveals overlay and secondary image

- **WHEN** the user hovers over a grid item
- **THEN** a semi-transparent dark overlay appears on the image
- **AND** the hover image fades in
- **AND** view/download count badges become visible

### Requirement: Like heart interaction

The template SHALL provide a heart icon interaction that increments a like count.

#### Scenario: Like heart interaction

- **WHEN** the user clicks the heart icon on a grid item
- **THEN** the like count increments
- **AND** the heart fills with the brand pink color

### Requirement: Load more button

The template SHALL display a load-more trigger at the bottom of the grid.

#### Scenario: Load more button visible

- **WHEN** the user scrolls to the bottom of the grid
- **THEN** a load-more arrow button is visible

### Requirement: Footer displays three columns with Component Dock link

The template SHALL display a footer with categories, navigation, social icons, and a Component Dock attribution.

#### Scenario: Footer displays three columns

- **WHEN** the user reaches the footer
- **THEN** categories are listed (Branding, Fonts, Icons, Misc, Mockup, Play, Vectors, Video)
- **AND** navigation links are shown (About, Features, Contact)
- **AND** social icons appear with copyright text
- **AND** the footer links to Component Dock (https://www.componentdock.com/)

#### Scenario: Footer social icons are interactive

- **WHEN** the user hovers over a social icon
- **THEN** the icon color transitions to the brand pink
