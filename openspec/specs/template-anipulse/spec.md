# template-anipulse

## Purpose

Anipulse is an anime streaming / catalog website template recreating the
ColorLib "Anime" design under a new original name. It provides a dark-themed
anime content site with a hero carousel, trending/popular/recent show grids,
a sidebar with top views and comments, and a minimal footer.

- **ColorLib source:** [Anime](https://colorlib.com/wp/template/anime/)
- **Preview URL:** https://preview.colorlib.com/theme/anime/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · lucide-react icons

## Design tokens (extracted from live preview CSS, 2026-09-21)

| Token            | Value                              | Notes                                                         |
| ---------------- | ---------------------------------- | ------------------------------------------------------------- |
| Body font        | `"Mulish", sans-serif`             | Google Fonts; body text                                        |
| Heading font     | `"Oswald", sans-serif`             | Google Fonts; section titles, sidebar headers                  |
| Page bg          | `#0b0c2a` (dark navy)              | Overall page background                                       |
| Hero bg          | Dark image with overlay            | Full-width hero carousel with background photos                |
| Section bg       | `#070720` (deep navy)              | Product/content sections                                      |
| Footer bg        | `#070720`                          | Dark navy footer                                              |
| Brand red        | `#e53637`                          | Primary accent — episode badges, section title bars, CTAs     |
| Brand red alt    | `#ca2027`                          | Darker red variant                                            |
| Red hover        | `#ff4343`                          | Hover state for red elements                                  |
| Accent blue      | `#39a1f2`                          | Twitter/social blue                                           |
| Facebook blue    | `#4267b2`                          | Facebook brand color                                          |
| Accent gold      | `#e89f12`                          | Rating/star indicators                                        |
| Text white       | `#ffffff`                          | Headings, nav, body text on dark                              |
| Text light       | `#b7b7b7`                          | Paragraphs, meta text                                         |
| Text muted       | `#a6a6a6`                          | Timestamps, secondary text                                    |
| Text dark        | `#111111` / `#3d3d3d`             | Text on light elements, badge backgrounds                     |
| Card image bg    | Dark overlay on images             | Product card thumbnails with rounded corners                  |
| Border radius    | `2px`, `4px`, `5px`, `10px`, `50px`, `60px` | Various — badges 4px, cards 5px, pills 50px        |
| Badge style      | `border-radius: 50px` pill         | Genre/category tags on cards                                  |
| Section title bar | 4px wide `#e53637` left border   | Vertical accent bar before headings                           |
| Product image    | 325px height, `border-radius: 5px` | Card thumbnails                                              |
| Episode badge    | `#e53637` bg, white text, 4px radius | Top-left overlay on card images                           |
| Comment badge    | `#3d3d3d` bg, white text, 4px radius | Bottom-left overlay                                      |
| View badge       | `#3d3d3d` bg, white text, 4px radius | Bottom-right overlay                                     |
| Button primary   | `#e53637` bg, white text, 2px radius, uppercase, letter-spacing 2px | CTA buttons               |
| Social links     | `#b7b7b7` text, `15px`            | Footer nav links                                              |

## Requirements

### Requirement: Top bar with logo and navigation

The top bar SHALL display the site logo on the left and main navigation links
(Homepage, Categories, Our Blog, Contacts) on the right on a dark background.

#### Scenario: Top bar renders on desktop

- **WHEN** the page loads on desktop
- **THEN** the Anipulse logo is visible on the left
- **AND** navigation links (Homepage, Categories, Our Blog, Contacts) are
  displayed on the right

### Requirement: Hero carousel with anime show slides

The hero section SHALL display a full-width carousel of anime show slides.
Each slide SHALL have a background image with overlay, a category label (e.g.,
"Adventure"), show title, description text, and a "Watch Now" button with
right arrow icon. The carousel SHALL auto-rotate between slides.

#### Scenario: Hero carousel renders slides

- **WHEN** the page loads
- **THEN** the hero carousel shows the first slide with background image
- **AND** the category label ("Adventure") is visible
- **AND** the show title is displayed
- **AND** description text is shown
- **AND** a "Watch Now" button with arrow icon is visible

#### Scenario: Hero carousel auto-rotates

- **WHEN** the user waits on the hero section
- **THEN** the carousel transitions to the next slide automatically

### Requirement: Trending Now section with anime card grid

The trending section SHALL display a "Trending Now" heading with a red left
accent bar, a "View All" link on the right, and a grid of anime cards on a
dark background. Each card SHALL have a thumbnail image (325px height, 5px
rounded corners), episode count badge (red, top-left), comment count badge
(gray, bottom-left), view count badge (gray, bottom-right), genre tags
(pill-shaped), and show title.

#### Scenario: Trending cards render with badges

- **WHEN** the trending section loads
- **THEN** the "Trending Now" heading with red accent bar is visible
- **AND** anime cards show thumbnail images with rounded corners
- **AND** episode count badges (e.g., "18 / 18") are displayed in red
- **AND** comment and view count badges are displayed in gray
- **AND** genre tag pills and show titles are visible

### Requirement: Popular Shows section

The popular shows section SHALL display a "Popular Shows" heading with the
same red accent bar style and a grid of anime cards identical in structure to
the trending section.

#### Scenario: Popular shows render

- **WHEN** the popular shows section loads
- **THEN** the "Popular Shows" heading is visible
- **AND** anime cards with thumbnails, badges, and titles are displayed

### Requirement: Recently Added Shows section

The recently added section SHALL display a "Recently Added Shows" heading and
a grid of anime cards.

#### Scenario: Recently added renders

- **WHEN** the recently added section loads
- **THEN** the "Recently Added Shows" heading is visible
- **AND** anime cards with thumbnails, badges, and titles are displayed

### Requirement: Live Action section

The live action section SHALL display a "Live Action" heading and a grid of
anime cards.

#### Scenario: Live action renders

- **WHEN** the live action section loads
- **THEN** the "Live Action" heading is visible
- **AND** anime cards with thumbnails, badges, and titles are displayed

### Requirement: Sidebar with Top Views and filter tabs

The sidebar SHALL display a "Top Views" heading with filter tabs (Day, Week,
Month, Years) and a list of top-viewed anime shows with episode counts,
comment counts, and view counts.

#### Scenario: Sidebar renders top views

- **WHEN** the sidebar loads
- **THEN** the "Top Views" heading is visible
- **AND** filter tabs (Day, Week, Month, Years) are displayed
- **AND** a list of anime shows with episode, comment, and view counts is shown

#### Scenario: Sidebar tabs filter content

- **WHEN** the user clicks a filter tab (e.g., "Week")
- **THEN** the top views list updates to show the filtered results

### Requirement: Dark footer with navigation and copyright

The footer SHALL display on a dark `#070720` background with centered
navigation links (Homepage, Categories, Our Blog, Contacts) and a copyright
line with "Made with ♥ by Component Dock" linking to
https://www.componentdock.com/. A scroll-to-top button SHALL be present
above the footer.

#### Scenario: Footer renders navigation and attribution

- **WHEN** the footer loads
- **THEN** navigation links are centered
- **AND** a copyright line is visible
- **AND** a "Component Dock" link pointing to https://www.componentdock.com/
  is present
- **AND** a scroll-to-top button is visible above the footer
