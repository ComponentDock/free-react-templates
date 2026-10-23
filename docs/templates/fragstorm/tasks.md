# Fragstorm — Implementation Tasks

Source design: **Amin** (`https://colorlib.com/wp/template/amin/`) → recreation name **fragstorm**. Shipped at https://fragstorm.free.componentdock.com.

Scope: Fragstorm is a gaming magazine template that recreates the ColorLib "Amin" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. It provides a dark-themed gaming news site with hero articles, review previews, tabbed update news, video guides, and Instagram posts.

## Component breakdown

Render order as composed in `apps/fragstorm/src/App.tsx`:

### 1. TopBar
- Users SHALL see a thin top bar with a weather widget, date, and social media icon links.
- Scenario — TopBar renders on page load:
  - **WHEN** the page loads
  - **THEN** the top bar displays a weather indicator, the current date, and 5 social media icons (Facebook, Twitter, YouTube, Instagram, Email)

### 2. Logo
- Users SHALL see the "Fragstorm" brand name centered on a dark background.
- Scenario — Logo renders on page load:
  - **WHEN** the page loads
  - **THEN** the logo section shows "Fragstorm" text centered on a near-black background

### 3. Navbar
- Users SHALL see a red navigation bar with links to Home, Platform, Pages, Reviews, Windows, and Videos. On mobile, a hamburger menu SHALL toggle the nav links.
- Scenario — Desktop navigation renders:
  - **WHEN** the page loads on desktop
  - **THEN** all 6 navigation links are visible
- Scenario — Mobile menu toggles:
  - **WHEN** the user clicks the hamburger button
  - **THEN** the mobile menu opens with the same navigation links
- Scenario — Mobile menu closes on link click:
  - **WHEN** the mobile menu is open and the user clicks a navigation link
  - **THEN** the mobile menu closes

### 4. Hero
- Users SHALL see a featured article with headline, author, and date on the left, and trending posts on the right.
- Scenario — Featured article renders:
  - **WHEN** the page loads
  - **THEN** the hero section shows the featured article headline, author name, and publication date
- Scenario — Trending posts render:
  - **WHEN** the page loads
  - **THEN** the hero section shows 3 trending post items with titles, dates, and comment counts

### 5. LatestPreview
- Users SHALL see game review cards with images and circular score indicators.
- Scenario — Review cards render:
  - **WHEN** the page loads
  - **THEN** 5 review cards are displayed with game titles and score numbers

### 6. UpdateNews
- Users SHALL see news articles organized by platform tabs (PlayStation, Windows, Mobile, Xbox). Clicking a tab SHALL show articles for that platform.
- Scenario — Default tab content renders:
  - **WHEN** the page loads
  - **THEN** PlayStation tab is active and shows 3 articles
- Scenario — Tab switching works:
  - **WHEN** the user clicks the Windows tab
  - **THEN** Windows articles are displayed and the Windows tab is marked as selected

### 7. VideoGuide
- Users SHALL see video guide cards with thumbnails, play overlay on hover, and metadata.
- Scenario — Video cards render:
  - **WHEN** the page loads
  - **THEN** 3 video guide cards are displayed with titles, authors, dates, and comment counts

### 8. InstagramPosts
- Users SHALL see a 4-column Instagram image grid with a follow overlay on hover.
- Scenario — Instagram grid renders:
  - **WHEN** the page loads
  - **THEN** 4 Instagram post images are displayed in a grid

### 9. Footer
- Users SHALL see a footer with link columns and a copyright line linking to https://www.componentdock.com/.
- Scenario — Footer renders with links:
  - **WHEN** the page loads
  - **THEN** the footer shows 4 link columns and a copyright line with "Component Dock" linking to https://www.componentdock.com/

### Cross-cutting requirements

- **App composes all sections in order** — The app SHALL render all sections in the correct order: TopBar, Logo, Navbar, Hero, LatestPreview, UpdateNews, VideoGuide, InstagramPosts, Footer.
  - Scenario — All sections render in order: **WHEN** the page loads; **THEN** the document title contains "Fragstorm" and all sections are present with correct IDs
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/fragstorm/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/fragstorm/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/fragstorm` ships on https://fragstorm.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/fragstorm/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/fragstorm/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fragstorm/public/CNAME` = `fragstorm.free.componentdock.com`
  and the package `homepage` = `https://fragstorm.free.componentdock.com`.
