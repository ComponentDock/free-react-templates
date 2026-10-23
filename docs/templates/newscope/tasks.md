# Newscope — Implementation Tasks

Source design: **Magnews2** (`https://colorlib.com/wp/template/magnews2/`) → recreation name **newscope**. Shipped at https://newscope.free.componentdock.com.

Scope: A magazine/news blog template with tabbed category navigation, featured article grids, entertainment section, latest articles. It also includes newsletter signup, and a dark footer. Recreation of **ColorLib Magnews2**.

## Component breakdown

Render order as composed in `apps/newscope/src/App.tsx`:

### 1. TopBar
- The top bar SHALL display location, weather info, and utility links (About, Contact, Sign up, Log in).
- Scenario — Top bar renders correctly:
  - **WHEN** the page loads
  - **THEN** a top bar is visible at the top
  - **AND** it shows a location string (e.g. "New York, NY")
  - **AND** it shows weather info (HI/LO temperature)
  - **AND** it shows utility links: About, Contact, Sign up, Log in

### 2. Header
- The header area SHALL display a logo and a banner image with white background.
- Scenario — Header renders correctly:
  - **WHEN** the page loads
  - **THEN** the logo is displayed in the header area
  - **AND** a banner/header image spans below the logo
  - **AND** the header area has a white background

### 3. MainNav
- The main navigation SHALL contain horizontal category links with 7+ categories.
- Scenario — Navigation renders correctly:
  - **WHEN** the page loads
  - **THEN** a horizontal navigation bar is visible below the header
  - **AND** it contains category links: Home, News, Entertainment, Fashion, Life Style, Technology, Travel
  - **AND** a "Features" dropdown or link is present
  - **AND** category links are styled with Roboto font

### 4. FeaturedTabs
- The featured section SHALL display articles organized in tabs with category filtering.
- Scenario — Tabbed section renders correctly:
  - **WHEN** the page loads
  - **THEN** a tabbed article section appears below the navigation
  - **AND** tabs include: All, Entertainment, Fashion, Life Style, Technology, Travel
  - **AND** the "All" tab is active by default
  - **AND** each tab displays a grid of featured articles with thumbnails
  - **AND** articles show a category tag, title, and date
  - **AND** tab switching shows/hides the corresponding article set

### 5. MainContent
- The main content SHALL use a two-column layout with a large featured article and stacked smaller cards.
- Scenario — Two-column layout renders correctly:
  - **WHEN** the page loads
  - **THEN** a main content section appears below the tabs
  - **AND** it has a two-column layout: left column (larger) and right column (smaller)
  - **AND** the left column shows a large featured article with background image overlay
  - **AND** the right column shows 2-3 smaller article cards stacked vertically
  - **AND** articles display category, title, author name, and date

### 6. Entertainment
- The entertainment section SHALL display articles with sub-category tabs.
- Scenario — Entertainment section renders correctly:
  - **WHEN** the page loads
  - **THEN** an entertainment section appears after the main content
  - **AND** it has sub-category tabs: All, Celebrity, Movies, Music, Games
  - **AND** a "View all" link is present
  - **AND** articles are displayed in a horizontal card layout

### 7. LatestArticles
- The latest articles section SHALL display a responsive grid of article cards.
- Scenario — Latest articles grid renders correctly:
  - **WHEN** the page loads
  - **THEN** a "Latest Articles" section appears
  - **AND** it displays a grid of article cards (3-4 per row on desktop)
  - **AND** each card has a background image with overlay
  - **AND** cards show category tag, title, author name, and publication date

### 8. VideoSection
- The newsletter section SHALL display subscriber count, tagline, and email input.
- Scenario — Newsletter renders correctly:
  - **WHEN** the page loads
  - **THEN** a newsletter/subscribe section is visible
  - **AND** it shows a subscriber count (e.g. "5039 Subscribers")
  - **AND** it has a tagline: "Get all latest content delivered to your email a few times a month."
  - **AND** it contains an email input field and a subscribe button
  - **AND** the section has a dark background

### 9. Newsletter
- The newsletter section SHALL display subscriber count, tagline, and email input.
- Scenario — Newsletter renders correctly:
  - **WHEN** the page loads
  - **THEN** a newsletter/subscribe section is visible
  - **AND** it shows a subscriber count (e.g. "5039 Subscribers")
  - **AND** it has a tagline: "Get all latest content delivered to your email a few times a month."
  - **AND** it contains an email input field and a subscribe button
  - **AND** the section has a dark background

### 10. Footer
- The footer SHALL display a dark background with three columns of content.
- Scenario — Footer renders correctly:
  - **WHEN** the page loads
  - **THEN** a dark footer (#222 background) is visible at the bottom
  - **AND** it contains a site description paragraph
  - **AND** it shows a "Popular Posts" column with 3 post links
  - **AND** it shows a "Category" column with category names and post counts
  - **AND** it shows contact information (phone number)
  - **AND** a back-to-top button is fixed at bottom-right
  - **AND** the footer links to `https://www.componentdock.com/` as "Component Dock"

### Cross-cutting requirements

- **Video section with play button** — The video section SHALL display a thumbnail with a circular play button overlay.
  - Scenario — Video section renders correctly: **WHEN** the page loads; **THEN** a video section appears; **AND** it contains a video thumbnail with a play button overlay; **AND** the play button is circular and centered on the thumbnail; **AND** clicking play opens a modal video player
- **Responsive behavior** — The template SHALL be responsive with hamburger menu on mobile.
  - Scenario — Mobile responsive layout: **WHEN** the page is viewed on mobile (< 576px); **THEN** the desktop navigation is replaced by a hamburger menu; **AND** article grids collapse to single-column layout
- **Accessibility** — The template SHALL meet WCAG AA accessibility standards.
  - Scenario — Accessibility requirements: **WHEN** any page state; **THEN** all images have descriptive alt text; **AND** navigation links are keyboard-focusable; **AND** the hamburger menu has an aria-label; **AND** tab panels use appropriate aria-selected attributes; **AND** color contrast meets WCAG AA for body text
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/newscope/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/newscope/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Top bar with location, weather, utility links; [ ] Logo + banner header area; [ ] Main navigation with 7+ category links; [ ] Tabbed featured news section (6 tabs, content switching); [ ] Main content: 2-column layout with featured article + grid; [ ] Entertainment section with sub-category tabs (5 tabs); [ ] Latest articles grid (responsive 3-4 columns); [ ] Newsletter subscribe with email input; [ ] Video section with play button overlay; [ ] Dark footer with 3 columns (Popular Posts, Categories, Contact); [ ] Back-to-top button (fixed, bottom-right); [ ] Hamburger menu on mobile; [ ] Responsive grid collapse at breakpoints; [ ] Footer links to Component Dock; [ ] No ColorLib references in app code; [ ] Brand tokens in `@theme` (Tailwind CSS 4); [ ] Placeholder images via `picsum.photos`; [ ] Google Fonts (Roboto) loaded in index.html; [ ] `cn()` used for all class composition; [ ] 100% test coverage (Vitest + Testing Library); [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/newscope` ships on https://newscope.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/newscope/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/newscope/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/newscope/public/CNAME` = `newscope.free.componentdock.com`
  and the package `homepage` = `https://newscope.free.componentdock.com`.
