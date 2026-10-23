# Template: Byteline (News / Magazine)

## Purpose

Recreation of the ColorLib "Aznews" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `aznews`
- **Source URL:** https://colorlib.com/wp/template/aznews/
- **Preview URL:** https://preview.colorlib.com/theme/aznews/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/aznews-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/byteline`
- **Surge target:** `byteline.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`assets/css/style.css`) at https://preview.colorlib.com/theme/aznews/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#fc3f00` | Buttons, accents, scroll-to-top, highlights |
| Brand secondary | `#ff656a` | Button hover/fill states, preloader accent |
| Brand red hover | `#e6373d` | Button pseudo-element hover fill |
| Dark bg | `#000000` | Header top bar, footer background |
| White bg | `#ffffff` | Main content, header mid |
| Gray bg | `#f7f7fd` / `#f5f5f5` | Alternate section backgrounds |
| Brand light | `#f1f4fa` | Brand background tint |
| Testimonial bg | `#f9fafc` | Testimonial/video section bg |
| Heading text | `#000000` | All h1-h6 headings |
| Body text | `#506172` | Paragraphs |
| Muted text | `#635c5c` / `#888888` | Links, secondary text |
| White text | `#FFFFFF` | On dark backgrounds |
| Category badge 1 | `#ffe7e6` (bg) | Red tint badge |
| Category badge 2 | `#f4ffd5` (bg) | Green tint badge |
| Category badge 3 | `#e1fcff` (bg) | Cyan tint badge |
| Category badge 4 | `#fff9c6` (bg) | Yellow tint badge |
| Font primary | `Roboto`, sans-serif | All text (headings + body) |
| Font accent | `Inconsolata:700` | Monospace accent (unused on home) |
| Button shape | Rounded (border-radius: 5px) | CTA and form buttons |
| Button bg | `#fc3f00` | Primary buttons |
| Button text | `#FFFFFF` | White on brand |
| Button border style | 1px solid `#fc3f00` | Boxed/outline variant |
| Header top bar | Black (`#000000`) | Weather + date info bar |
| Header sticky | White with shadow | Sticky nav on scroll |
| Accent (measured) | `#415094` | paints it ×7 — `color` on `.genric-btn.link`; style.css (91,178 B, sha256 1b5471087dbb) · <https://preview.colorlib.com/theme/aznews/> |

## Section Structure (in page order)

### 1. Header Top Bar
- Black background strip with weather info and date
- Social icons on the right (Twitter, Instagram, Pinterest)
- Hidden on mobile (`d-none d-md-block`)

### 2. Header Mid (Logo + Banner)
- Logo on the left (3 cols)
- Header banner/ad image on the right (9 cols)
- Hidden on mobile

### 3. Header Bottom (Sticky Nav)
- Sticky navigation bar with white background
- Logo (left, sticky logo shown on scroll)
- Main nav: Home, Category, About, Latest News, Contact, Pages (with submenu)
- Search icon with slide-out search box (right side)
- Mobile hamburger menu

### 4. Trending Area
- "Trending now" heading with animated ticker (breaking news scroll)
- Left side (8 cols): Large trending image card with category badge + headline overlay
  - Below: 3 smaller cards (Lifestyle, Sports, Travels) each with image + category badge
- Right sidebar (4 cols): 5 small thumbnail + text cards stacked vertically (Concert, Sea Beach, Bike Show, etc.)

### 5. Weekly Top News
- Horizontal scrollable carousel of news cards
- Each card: image + category badge (color1) + headline
- 4 items, dot-style navigation

### 6. What's New (Tabbed)
- Left side (8 cols): Tabbed content area
  - Section heading: "Whats New"
  - Tabs: All, Lifestyle, Travel, Fashion, Sports, Technology
  - Each tab shows 4 news cards in a 2x2 grid (image + category badge + headline)
- Right sidebar (4 cols): "Follow Us" social counter
  - Facebook, Twitter, Instagram, YouTube follower counts (8,045 each)
  - Ad/promo poster image below

### 7. Weekly News 2 (Gray background)
- Gray background (`#f7f7fd`)
- Horizontal scrollable carousel, same style as Weekly Top News
- 5 items with dot-style navigation

### 8. YouTube / Video Area
- Video carousel with embedded YouTube iframes
- Below: Two-column video info
  - Left: "Politics" category badge + headline + description paragraph
  - Right: Thumbnail video grid (5 small video cards)

### 9. Recent Articles
- Horizontal scrollable carousel
- 4 article cards: image + category badge + headline
- Dot-style navigation

### 10. Pagination
- Centered pagination: Previous arrow, 01 (active), 02, 03, Next arrow

### 11. Footer
- 3-column layout:
  - Left (5 cols): Logo + description paragraph + social icons (Twitter, Instagram, Pinterest)
  - Middle (3 cols): Newsletter signup form (email input + submit button)
  - Right (3 cols): Instagram feed grid (6 thumbnail images)
- Footer bottom: Copyright bar with terms/privacy links
- Footer MUST link `https://www.componentdock.com/`

## Requirements

### Feature: Byteline template behaviour

Feature: Byteline — News / Magazine Template

Background:
- **GIVEN** the template is loaded at the root URL
- **THEN** the page title contains "Byteline"
- **AND** the Component Dock footer link is visible

#### Scenario: Header top bar renders correctly

- **GIVEN** the user is on a desktop viewport (width >= 768px)
- **THEN** a black top bar with weather info and date is visible
- **AND** social media icons (Twitter, Instagram, Pinterest) are shown on the right

#### Scenario: Header mid shows logo and banner

- **GIVEN** the user is on a desktop viewport
- **THEN** the site logo is visible on the left
- **AND** a header banner image is visible on the right

#### Scenario: Sticky navigation works

- **GIVEN** the user scrolls down past the header
- **THEN** the navigation bar sticks to the top of the viewport
- **AND** the sticky logo and nav links remain visible
- **AND** a search icon is visible on the right

#### Scenario: Navigation links are present

- **GIVEN** the nav bar is visible
- **THEN** navigation links "Home", "Category", "About", "Latest News", "Contact" are shown
- **AND** a "Pages" dropdown with submenu items is present

#### Scenario: Trending area shows breaking news

- **GIVEN** the trending section is in the viewport
- **THEN** the heading "Trending now" is visible
- **AND** an animated ticker with scrolling headlines is displayed
- **AND** a large featured image card with category badge and headline is shown
- **AND** 3 smaller news cards are displayed below the featured card
- **AND** 5 sidebar thumbnail cards are displayed on the right

#### Scenario: Weekly Top News carousel renders

- **GIVEN** the weekly news section is scrolled into view
- **THEN** the heading "Weekly Top News" is visible
- **AND** at least 4 news cards are visible in a horizontal carousel
- **AND** each card has an image, category badge, and headline

#### Scenario: What's New tabs work

- **GIVEN** the What's New section is scrolled into view
- **THEN** the heading "Whats New" is visible
- **AND** tabs "All", "Lifestyle", "Travel", "Fashion", "Sports", "Technology" are shown
- **AND** the "All" tab is active by default
- **WHEN** the user clicks the "Lifestyle" tab
- **THEN** the "Lifestyle" tab becomes active
- **AND** 4 news cards are displayed in a 2x2 grid

#### Scenario: Follow Us sidebar shows social counters

- **GIVEN** the What's New section is scrolled into view
- **THEN** the "Follow Us" heading is visible in the right sidebar
- **AND** 4 social platform rows (Facebook, Twitter, Instagram, YouTube) are shown
- **AND** each row displays a follower count

#### Scenario: Weekly News 2 section renders on gray background

- **GIVEN** the weekly2 news section is scrolled into view
- **THEN** the section has a gray background
- **AND** at least 5 news cards are visible in a horizontal carousel

#### Scenario: Video / YouTube section renders

- **GIVEN** the video section is scrolled into view
- **THEN** a video carousel with playable video thumbnails is visible
- **AND** a "Politics" category badge with headline and description is shown
- **AND** a grid of small video thumbnail cards is displayed

#### Scenario: Recent Articles carousel renders

- **GIVEN** the recent articles section is scrolled into view
- **THEN** the heading "Recent Articles" is visible
- **AND** at least 4 article cards are visible in a horizontal carousel
- **AND** each card has an image, category badge, and headline

#### Scenario: Pagination renders

- **GIVEN** the pagination section is in the viewport
- **THEN** numbered page links (01, 02, 03) are visible
- **AND** previous/next arrow buttons are present
- **AND** page 01 is highlighted as active

#### Scenario: Footer renders correctly

- **GIVEN** the footer is in the viewport
- **THEN** the site logo and description paragraph are shown
- **AND** a newsletter signup form with email input and submit button is visible
- **AND** an Instagram feed grid with 6 thumbnail images is shown
- **AND** social icon links (Twitter, Instagram, Pinterest) are visible
- **AND** a copyright notice with terms/privacy links is displayed
- **AND** a link to "https://www.componentdock.com/" is present

#### Scenario: Responsive layout adapts on mobile

- **GIVEN** the user is on a mobile viewport (width < 768px)
- **THEN** the header top bar and mid section are hidden
- **AND** the navigation collapses to a hamburger menu
- **AND** trending, weekly, and article cards stack vertically
- **AND** the footer columns stack vertically

#### Scenario: Category badges use correct color tints

- **GIVEN** any news card with a category badge is visible
- **THEN** the badge background matches its category color tint
- **AND** the badge text is readable with sufficient contrast

## Verification checklist

- [ ] All 11 sections render in correct page order
- [ ] Brand color `#fc3f00` used for buttons, accents, scroll-to-top
- [ ] Roboto font loaded for all text
- [ ] Black header top bar with weather + date on desktop
- [ ] Sticky navigation with logo and search icon
- [ ] Trending ticker animation works
- [ ] Trending area: 1 large + 3 small cards left, 5 sidebar cards right
- [ ] Weekly Top News horizontal carousel with 4+ cards
- [ ] What's New tabs switch content correctly (6 tabs)
- [ ] Follow Us social counters displayed
- [ ] Weekly News 2 on gray background with carousel
- [ ] Video section with playable thumbnails + info
- [ ] Recent Articles carousel with 4+ cards
- [ ] Pagination with numbered links and arrows
- [ ] Footer: logo, newsletter form, Instagram grid, social icons
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu on mobile, stacked columns
- [ ] Rounded CTA buttons (border-radius: 5px) with brand orange
- [ ] Placeholder images via `picsum.photos/seed/byteline-<n>/...`
- [ ] Category badges use tinted backgrounds (red, green, cyan, yellow)
