# Carouselroll — Implementation Tasks

Source design: **Carousel 13** (`https://colorlib.com/wp/template/carousel-13/`) → recreation name **carouselroll**. Shipped at https://carouselroll.free.componentdock.com.

Scope: An easy-to-use, modern, mobile-friendly free vertical carousel template for beautiful slideshows.

## Component breakdown

Render order as composed in `apps/carouselroll/src/App.tsx`:

### 1. Navbar
- The header shall display a brand logo, navigation links (Home, Products), and a dark-mode toggle.
- Scenario — User views header:
  - **GIVEN** the user loads the CarouselRoll template
  - **WHEN** the header renders
  - **THEN** all navigation links and the dark-mode toggle are visible and interactive

### 2. Hero
- The hero section shall present an engaging headline, descriptive subtext, and call-to-action buttons.
- Scenario — User views hero section:
  - **GIVEN** the user is on the main page
  - **WHEN** the hero section renders
  - **THEN** the headline, descriptive subtext, and call-to-action buttons are clearly displayed

### 3. Carousel
- The vertical carousel section shall display interactive slides containing feature highlights, imagery, titles, and descriptions, supporting next/prev controls and slide indicators.
- Scenario — User interacts with the vertical carousel:
  - **GIVEN** the user scrolls to the vertical carousel section
  - **WHEN** the user clicks navigation controls or scroll indicators
  - **THEN** the vertical slides transition correctly and update the active slide view

### 4. Features
- The features section shall present core capabilities in a clean multi-column grid with custom icons and descriptive text.
- Scenario — User reviews features:
  - **GIVEN** the user views the features section
  - **WHEN** the section renders
  - **THEN** feature cards display correct icons, titles, and descriptions

### 5. Newsletter
- The newsletter section shall display an email input with validation and a subscribe button with loading/success states.
- Scenario — User subscribes to newsletter:
  - **GIVEN** the user views the newsletter section
  - **WHEN** the user enters a valid email and clicks subscribe
  - **THEN** the form shows loading state then success confirmation

### 6. Footer
- The footer shall contain site links, copyright notice, and a required link to `https://www.componentdock.com/` ("Component Dock").
- Scenario — User scrolls to footer:
  - **GIVEN** the user reaches the bottom of the page
  - **WHEN** the footer renders
  - **THEN** the Component Dock attribution link is visible and correctly formatted

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/carouselroll/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/carouselroll/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Typecheck passes (`npm run typecheck`); [ ] Lint passes (`npm run lint`); [ ] Unit tests pass with 100% coverage (`npm run test:coverage`); [ ] Build succeeds (`npm run build`); [ ] Footer links to Component Dock (`https://www.componentdock.com/`); [ ] CNAME points to `carouselroll.free.componentdock.com`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/carouselroll` ships on https://carouselroll.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/carouselroll/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/carouselroll/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carouselroll/public/CNAME` = `carouselroll.free.componentdock.com`
  and the package `homepage` = `https://carouselroll.free.componentdock.com`.
