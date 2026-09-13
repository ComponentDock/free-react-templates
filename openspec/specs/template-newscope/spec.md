# Template: Newscope (Magazine / News Blog)

## Purpose

Recreation of **ColorLib Magnews2** — a magazine/news blog template with tabbed category navigation, featured article grids, entertainment section, latest articles, newsletter signup, and a dark footer.

- **Source:** [ColorLib Magnews2](https://colorlib.com/wp/template/magnews2/)
- **Preview:** https://preview.colorlib.com/theme/magnews2/
- **New name:** `newscope` (apps/newscope, `@free-react-templates/newscope`)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Magazine / News Blog

## Design Tokens

Extracted from the live preview CSS (`css/main.css`) on 2026-09-13.

### Colors

| Token           | Hex                | Usage                                                                |
| --------------- | ------------------ | -------------------------------------------------------------------- |
| brand-primary   | `#e71d69`          | Accent pink/magenta — category badges, hover states, highlight links |
| brand-secondary | `#00b5e9`          | Teal — secondary accent                                              |
| brand-green     | `#17b978`          | Green accent                                                         |
| brand-orange    | `#e3724a`          | Orange accent — category tags                                        |
| text-dark       | `#111` / `#151515` | Primary body text                                                    |
| text-base       | `#222` / `#333`    | Headings, secondary text                                             |
| text-muted      | `#555` / `#666`    | Meta text, bylines, dates                                            |
| text-light      | `#888` / `#999`    | Tertiary text                                                        |
| text-lighter    | `#b2b2b2` / `#ccc` | Borders, subtle dividers                                             |
| bg-white        | `#fff`             | Main content background (bg0)                                        |
| bg-dark         | `#222`             | Footer background (bg2), dark sections                               |
| bg-darker       | `#333`             | Secondary dark (bg3)                                                 |
| bg-green        | `#15a752`          | Green section accent (bg10)                                          |
| bg-gray         | `#999`             | Gray utility (bg9) — video play button overlay                       |
| bg-border       | `#ccc`             | Border accents (bg11)                                                |

### Typography

| Role       | Font                        | Weight                                               |
| ---------- | --------------------------- | ---------------------------------------------------- |
| Body       | Roboto                      | Regular (400), Medium (500), Bold (700), Black (900) |
| UI / Links | Lato                        | Regular (400)                                        |
| Icons      | FontAwesome 5.0.8           | —                                                    |
| Icon font  | Material Design Iconic Font | —                                                    |

### Layout & Spacing

- Container width: Bootstrap grid (max ~1140px)
- Section padding: `p-t-70`, `p-t-60`, `p-b-35`, `p-b-25` (multiples of 4-5px base unit)
- Card border-radius: 0 (sharp) for content cards; 22px (`bo-1-rad-22`) for small thumbnails; 20px (`bo-1-rad-20`) for category tags
- Images: `background-size: cover` via `.bg-img1` utility
- Responsive: Bootstrap breakpoints (sm 576, md 768, lg 992)

### Buttons & Links

- Category tag pills: border-radius 20px, inline-block, small text
- Video play button: circular overlay (`size-a-8`, border-radius 50%, bg `#999`)
- Back-to-top: fixed position, bottom-right, opacity transition
- Links: text-decoration none, color inherits or brand accent on hover

## Requirements

### Requirement: Top bar displays location and utility links

The top bar SHALL display location, weather info, and utility links (About, Contact, Sign up, Log in).

#### Scenario: Top bar renders correctly

- **WHEN** the page loads
- **THEN** a top bar is visible at the top
- **AND** it shows a location string (e.g. "New York, NY")
- **AND** it shows weather info (HI/LO temperature)
- **AND** it shows utility links: About, Contact, Sign up, Log in

### Requirement: Logo and banner header

The header area SHALL display a logo and a banner image with white background.

#### Scenario: Header renders correctly

- **WHEN** the page loads
- **THEN** the logo is displayed in the header area
- **AND** a banner/header image spans below the logo
- **AND** the header area has a white background

### Requirement: Main navigation with category links

The main navigation SHALL contain horizontal category links with 7+ categories.

#### Scenario: Navigation renders correctly

- **WHEN** the page loads
- **THEN** a horizontal navigation bar is visible below the header
- **AND** it contains category links: Home, News, Entertainment, Fashion, Life Style, Technology, Travel
- **AND** a "Features" dropdown or link is present
- **AND** category links are styled with Roboto font

### Requirement: Featured news tabbed section

The featured section SHALL display articles organized in tabs with category filtering.

#### Scenario: Tabbed section renders correctly

- **WHEN** the page loads
- **THEN** a tabbed article section appears below the navigation
- **AND** tabs include: All, Entertainment, Fashion, Life Style, Technology, Travel
- **AND** the "All" tab is active by default
- **AND** each tab displays a grid of featured articles with thumbnails
- **AND** articles show a category tag, title, and date
- **AND** tab switching shows/hides the corresponding article set

### Requirement: Main content two-column layout

The main content SHALL use a two-column layout with a large featured article and stacked smaller cards.

#### Scenario: Two-column layout renders correctly

- **WHEN** the page loads
- **THEN** a main content section appears below the tabs
- **AND** it has a two-column layout: left column (larger) and right column (smaller)
- **AND** the left column shows a large featured article with background image overlay
- **AND** the right column shows 2-3 smaller article cards stacked vertically
- **AND** articles display category, title, author name, and date

### Requirement: Entertainment section with sub-category tabs

The entertainment section SHALL display articles with sub-category tabs.

#### Scenario: Entertainment section renders correctly

- **WHEN** the page loads
- **THEN** an entertainment section appears after the main content
- **AND** it has sub-category tabs: All, Celebrity, Movies, Music, Games
- **AND** a "View all" link is present
- **AND** articles are displayed in a horizontal card layout

### Requirement: Latest articles grid

The latest articles section SHALL display a responsive grid of article cards.

#### Scenario: Latest articles grid renders correctly

- **WHEN** the page loads
- **THEN** a "Latest Articles" section appears
- **AND** it displays a grid of article cards (3-4 per row on desktop)
- **AND** each card has a background image with overlay
- **AND** cards show category tag, title, author name, and publication date

### Requirement: Newsletter subscribe section

The newsletter section SHALL display subscriber count, tagline, and email input.

#### Scenario: Newsletter renders correctly

- **WHEN** the page loads
- **THEN** a newsletter/subscribe section is visible
- **AND** it shows a subscriber count (e.g. "5039 Subscribers")
- **AND** it has a tagline: "Get all latest content delivered to your email a few times a month."
- **AND** it contains an email input field and a subscribe button
- **AND** the section has a dark background

### Requirement: Video section with play button

The video section SHALL display a thumbnail with a circular play button overlay.

#### Scenario: Video section renders correctly

- **WHEN** the page loads
- **THEN** a video section appears
- **AND** it contains a video thumbnail with a play button overlay
- **AND** the play button is circular and centered on the thumbnail
- **AND** clicking play opens a modal video player

### Requirement: Dark footer with columns

The footer SHALL display a dark background with three columns of content.

#### Scenario: Footer renders correctly

- **WHEN** the page loads
- **THEN** a dark footer (#222 background) is visible at the bottom
- **AND** it contains a site description paragraph
- **AND** it shows a "Popular Posts" column with 3 post links
- **AND** it shows a "Category" column with category names and post counts
- **AND** it shows contact information (phone number)
- **AND** a back-to-top button is fixed at bottom-right
- **AND** the footer links to `https://www.componentdock.com/` as "Component Dock"

### Requirement: Responsive behavior

The template SHALL be responsive with hamburger menu on mobile.

#### Scenario: Mobile responsive layout

- **WHEN** the page is viewed on mobile (< 576px)
- **THEN** the desktop navigation is replaced by a hamburger menu
- **AND** article grids collapse to single-column layout

### Requirement: Accessibility

The template SHALL meet WCAG AA accessibility standards.

#### Scenario: Accessibility requirements

- **WHEN** any page state
- **THEN** all images have descriptive alt text
- **AND** navigation links are keyboard-focusable
- **AND** the hamburger menu has an aria-label
- **AND** tab panels use appropriate aria-selected attributes
- **AND** color contrast meets WCAG AA for body text

## Verification Checklist

- [ ] Top bar with location, weather, utility links
- [ ] Logo + banner header area
- [ ] Main navigation with 7+ category links
- [ ] Tabbed featured news section (6 tabs, content switching)
- [ ] Main content: 2-column layout with featured article + grid
- [ ] Entertainment section with sub-category tabs (5 tabs)
- [ ] Latest articles grid (responsive 3-4 columns)
- [ ] Newsletter subscribe with email input
- [ ] Video section with play button overlay
- [ ] Dark footer with 3 columns (Popular Posts, Categories, Contact)
- [ ] Back-to-top button (fixed, bottom-right)
- [ ] Hamburger menu on mobile
- [ ] Responsive grid collapse at breakpoints
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Brand tokens in `@theme` (Tailwind CSS 4)
- [ ] Placeholder images via `picsum.photos`
- [ ] Google Fonts (Roboto) loaded in index.html
- [ ] `cn()` used for all class composition
- [ ] 100% test coverage (Vitest + Testing Library)
