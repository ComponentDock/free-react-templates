# Classipost — Implementation Tasks

Source design: **Classy Ads** (`https://colorlib.com/wp/template/classy-ads/`) → recreation name **classipost**. Shipped at https://classipost.free.componentdock.com.

Scope: ClassiPost is a classified ads listing template that recreates the ColorLib "Classy Ads" design (https://colorlib.com/wp/template/classy-ads/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. The template features a hero section with search bar, category grid, featured ads, and a footer with Component Dock branding.

## Component breakdown

Render order as composed in `apps/classipost/src/App.tsx`:

### 1. Navbar
- The template SHALL include a sticky top navbar with the brand name "ClassiPost" and navigation links.
- Scenario — Navbar renders all navigation links:
  - **WHEN** the page loads
  - **THEN** the navbar displays links for Home, Ads, About, Blog, and Contact
  - **AND** the brand name "ClassiPost" is displayed
  - **AND** a "+ Post an Ad" button is visible
- Scenario — Mobile menu toggle:
  - **WHEN** the mobile menu button is clicked
  - **THEN** the mobile navigation menu opens
  - **AND** the aria-expanded attribute toggles

### 2. Hero
- The template SHALL include a hero section with a heading, subtitle, and search bar.
- Scenario — Hero renders heading and subtitle:
  - **WHEN** the page loads
  - **THEN** the hero displays "Largest Classifieds In The World"
  - **AND** the subtitle "You can buy, sell anything you want." is visible
- Scenario — Search bar renders with inputs:
  - **WHEN** the page loads
  - **THEN** a search input with placeholder "What are you looking for?" is shown
  - **AND** a location input with a pin icon is shown
  - **AND** a category dropdown with "All Categories" is shown
  - **AND** a "Search" button is visible

### 3. Categories
- The template SHALL include a categories section with icon grid showing listing categories and counts.
- Scenario — Categories display six categories:
  - **WHEN** the page loads
  - **THEN** six categories are displayed: Real Estate, Books & Magazines, Furniture, Electronics, Cars & Vehicles, Other
  - **AND** each category shows an icon and a count (e.g. 3,921, 398, 1,229, 32,891, 29,221, 219)

### 4. FeaturedAds
- The template SHALL include a featured ads section with ad cards in a grid.
- Scenario — Featured ads render cards:
  - **WHEN** the page loads
  - **THEN** the heading "Featured Ads" is displayed
  - **AND** at least four ad cards are shown with image, title, price, and location

### 5. Footer
- The template SHALL include a footer with Component Dock branding.
- Scenario — Footer renders Component Dock link:
  - **WHEN** the page loads
  - **THEN** the footer displays "More templates at Component Dock"
  - **AND** a link to https://www.componentdock.com/ is present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/classipost/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/classipost/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/classipost` ships on https://classipost.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/classipost/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/classipost/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/classipost/public/CNAME` = `classipost.free.componentdock.com`
  and the package `homepage` = `https://classipost.free.componentdock.com`.
