# Spread — Implementation Tasks

Source design: **Mag** (`https://colorlib.com/wp/template/mag/`) → recreation name **spread**. Shipped at https://spread.free.componentdock.com.

Scope: Spread is a video/magazine template — a React recreation of the ColorLib free "Mag" template (preview: https://preview.colorlib.com/theme/mag/). Built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. **Source mapping:** `apps/spread` recreates `https://colorlib.com/wp/template/mag/`.

## Component breakdown

Render order as composed in `apps/spread/src/App.tsx`:

### 1. Navbar
- Spread SHALL render a sticky top navigation bar with the "Spread" logo, navigation links (Home, Archive, Pages, Mega, Categories), a search icon, and a mobile hamburger toggle.
- Scenario — Desktop navbar displays all links:
  - **WHEN** the page loads on desktop viewport
  - **THEN** the navbar shows the logo "Spread", all five nav links, and a search icon
- Scenario — Mobile navbar toggles on click:
  - **WHEN** the user clicks the hamburger menu button on mobile
  - **THEN** the mobile navigation menu expands showing all nav links
  - **AND** clicking again collapses the menu

### 2. HeroCarousel
- Spread SHALL render a hero section with 3 carousel slides, each showing a background image, dark overlay, category badge, title, and a play button.
- Scenario — Hero slides display content:
  - **WHEN** the page loads
  - **THEN** 3 hero slides are rendered with play buttons
  - **AND** each slide shows a category label and title

### 3. FeaturedVideo
- Spread SHALL render a featured video section with a large video card, play button, category badge, title, excerpt, share buttons, and social links.
- Scenario — Featured video renders all elements:
  - **WHEN** the page loads
  - **THEN** the featured video section shows the title, excerpt, play button, share icon, and social icons (Facebook, Twitter)

### 4. TrendingNow
- Spread SHALL render a "Trending Now" section with 3 post cards in a grid.
- Scenario — Trending posts render:
  - **WHEN** the page loads
  - **THEN** 3 trending post cards are shown with images, titles, categories, and stats

### 5. FeaturedVideos
- Spread SHALL render a "Featured Videos" section with 4 video post cards in a 2-column grid.
- Scenario — Featured videos render:
  - **WHEN** the page loads
  - **THEN** 4 featured video cards are shown with images, titles, categories, and stats

### 6. MostViewedVideos
- No dedicated spec block — hold this band to the design notes.
- Anchors: Most Viewed Videos

### 7. Sidebar
- Spread SHALL render a sidebar with "Most Popular" posts (5 items with thumbnails) and "Latest Videos" posts (5 items with thumbnails), plus an ad placeholder.
- Scenario — Sidebar displays popular posts:
  - **WHEN** the page loads
  - **THEN** the Most Popular section shows 5 post cards with titles, thumbnails, and stats
- Scenario — Sidebar displays latest videos:
  - **WHEN** the page loads
  - **THEN** the Latest Videos section shows 5 post cards with titles and thumbnails

### 8. Footer
- Spread SHALL render a footer with About section, Quick Links, Categories, Newsletter signup, and a copyright line linking to Component Dock.
- Scenario — Footer renders all sections:
  - **WHEN** the page loads
  - **THEN** the footer shows the Spread logo, Quick Links, Categories list, Newsletter form, and social icons
- Scenario — Footer links to Component Dock:
  - **WHEN** the footer renders
  - **THEN** a link to https://www.componentdock.com/ is present with target="_blank"
  - **AND** the link text says "Component Dock"
- Scenario — Newsletter form accepts email input:
  - **WHEN** the user types an email and clicks Subscribe
  - **THEN** the email input is cleared after submission

### Cross-cutting requirements

- **Most Viewed Videos displays 3 posts** — Spread SHALL render a "Most Viewed Videos" section with 3 video cards.
  - Scenario — Most viewed videos render: **WHEN** the page loads; **THEN** 3 most viewed video cards are shown with images, titles, and stats
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/spread/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/spread/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/spread` ships on https://spread.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/spread/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/spread/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/spread/public/CNAME` = `spread.free.componentdock.com`
  and the package `homepage` = `https://spread.free.componentdock.com`.
