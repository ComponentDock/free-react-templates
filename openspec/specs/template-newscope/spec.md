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

| Token | Hex | Usage |
|-------|-----|-------|
| brand-primary | `#e71d69` | Accent pink/magenta — category badges, hover states, highlight links |
| brand-secondary | `#00b5e9` | Teal — secondary accent |
| brand-green | `#17b978` | Green accent |
| brand-orange | `#e3724a` | Orange accent — category tags |
| text-dark | `#111` / `#151515` | Primary body text |
| text-base | `#222` / `#333` | Headings, secondary text |
| text-muted | `#555` / `#666` | Meta text, bylines, dates |
| text-light | `#888` / `#999` | Tertiary text |
| text-lighter | `#b2b2b2` / `#ccc` | Borders, subtle dividers |
| bg-white | `#fff` | Main content background (bg0) |
| bg-dark | `#222` | Footer background (bg2), dark sections |
| bg-darker | `#333` | Secondary dark (bg3) |
| bg-green | `#15a752` | Green section accent (bg10) |
| bg-gray | `#999` | Gray utility (bg9) — video play button overlay |
| bg-border | `#ccc` | Border accents (bg11) |

### Typography

| Role | Font | Weight |
|------|------|--------|
| Body | Roboto | Regular (400), Medium (500), Bold (700), Black (900) |
| UI / Links | Lato | Regular (400) |
| Icons | FontAwesome 5.0.8 | — |
| Icon font | Material Design Iconic Font | — |

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

## Gherkin Requirements

### Feature: Newscope — Magazine News Blog Template

#### Scenario: Top bar displays location and utility links
  Given the page loads
  Then a top bar is visible at the top
  And it shows a location string (e.g. "New York, NY")
  And it shows weather info (HI/LO temperature)
  And it shows utility links: About, Contact, Sign up, Log in

#### Scenario: Logo and banner header
  Given the page loads
  Then the logo is displayed in the header area
  And a banner/header image spans below the logo
  And the header area has a white background

#### Scenario: Main navigation with category links
  Given the page loads
  Then a horizontal navigation bar is visible below the header
  And it contains category links: Home, News, Entertainment, Fashion, Life Style, Technology, Travel
  And a "Features" dropdown or link is present
  And category links are styled with Roboto font

#### Scenario: Featured news tabbed section
  Given the page loads
  Then a tabbed article section appears below the navigation
  And tabs include: All, Entertainment, Fashion, Life Style, Technology, Travel
  And the "All" tab is active by default
  And each tab displays a grid of featured articles with thumbnails
  And articles show a category tag, title, and date
  And tab switching shows/hides the corresponding article set

#### Scenario: Main content — featured article + grid
  Given the page loads
  Then a main content section appears below the tabs
  And it has a two-column layout: left column (larger) and right column (smaller)
  And the left column shows a large featured article with background image overlay
  And the right column shows 2-3 smaller article cards stacked vertically
  And articles display category, title, author name, and date
  And article cards have background image with dark overlay for text readability

#### Scenario: Entertainment section with sub-category tabs
  Given the page loads
  Then an entertainment section appears after the main content
  And it has sub-category tabs: All, Celebrity, Movies, Music, Games
  And a "View all" link is present
  And articles are displayed in a horizontal card layout
  And each article card shows a thumbnail, category tag, title, author, and date

#### Scenario: Latest articles section
  Given the page loads
  Then a "Latest Articles" section appears
  And it displays a grid of article cards (3-4 per row on desktop)
  And each card has a background image with overlay
  And cards show category tag, title, author name, and publication date
  And cards use the `.bg-img1` cover-image pattern

#### Scenario: Newsletter subscribe section
  Given the page loads
  Then a newsletter/subscribe section is visible
  And it shows a subscriber count (e.g. "5039 Subscribers")
  And it has a tagline: "Get all latest content delivered to your email a few times a month."
  And it contains an email input field and a subscribe button
  And the section has a distinct background (dark or colored)

#### Scenario: Video section
  Given the page loads
  Then a video section appears
  And it contains a video thumbnail with a play button overlay
  And the play button is circular and centered on the thumbnail
  And clicking play opens a modal video player

#### Scenario: Footer — site info and categories
  Given the page loads
  Then a dark footer (#222 background) is visible at the bottom
  And it contains a site description paragraph
  And it shows a "Popular Posts" column with 3 post links
  And it shows a "Category" column with category names and post counts
  And it shows contact information (phone number)
  And a "Colorlib" attribution link is present
  And a back-to-top button is fixed at bottom-right
  And the footer links to `https://www.componentdock.com/` as "Component Dock"

#### Scenario: Responsive behavior
  Given the page is viewed on mobile (< 576px)
  Then the desktop navigation is replaced by a hamburger menu
  And the hamburger button uses the `hamburger--squeeze` animation
  And article grids collapse to single-column layout
  And the top bar simplifies for small screens

#### Scenario: Accessibility
  Given any page state
  Then all images have descriptive alt text
  And navigation links are keyboard-focusable
  And the hamburger menu has an aria-label
  And tab panels use appropriate aria-selected attributes
  And color contrast meets WCAG AA for body text

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
