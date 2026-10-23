# Curate — Implementation Tasks

Source design: **Portfolio** (`https://colorlib.com/wp/template/portfolio/`) → recreation name **curate**. Shipped at https://curate.free.componentdock.com.

Scope: Curate is a multi-section portfolio/creative agency landing page. It showcases filterable portfolio work, services, and client testimonials. Recreation of ColorLib "Portfolio" under a new name with the same section structure and visual design.

## Component breakdown

Render order as composed in `apps/curate/src/App.tsx`:

### 1. Navbar
- The template SHALL display a fixed navigation bar with brand name and links to all sections.
- Scenario — Desktop navbar renders all links:
  - **GIVEN** the page loads on a desktop viewport
  - **WHEN** the navbar renders
  - **THEN** it shows the brand name "Curate" and links for Home, Portfolio, Services, and Testimonial
- Scenario — Mobile menu toggle works:
  - **GIVEN** the page loads on a mobile viewport
  - **WHEN** the user taps the hamburger button
  - **THEN** the mobile menu opens with all nav links visible
  - **WHEN** the user taps a nav link
  - **THEN** the mobile menu closes

### 2. Hero
- The template SHALL display a full-viewport hero with dark overlay, headline text, and a green CTA button.
- Scenario — Hero renders heading and CTA:
  - **GIVEN** the page loads
  - **WHEN** the hero section renders
  - **THEN** it shows the subtitle "Now you can watch the Talent", the heading "Let's Explore Idea!", and an "Explore Now" button linking to #portfolio

### 3. PortfolioGrid
- The template SHALL display a 3-column grid of portfolio items with category filter buttons.
- Scenario — All items displayed by default:
  - **GIVEN** the portfolio section loads
  - **WHEN** no filter is selected
  - **THEN** all 12 portfolio items are visible
- Scenario — Filter by category:
  - **GIVEN** the portfolio grid is visible
  - **WHEN** the user clicks the "Vector" filter button
  - **THEN** only Vector items are displayed
  - **WHEN** the user clicks "All"
  - **THEN** all items are displayed again

### 4. ServicesBanner
- The template SHALL display a dark overlay banner followed by 3 service cards with icons and descriptions.
- Scenario — Services banner and cards render:
  - **GIVEN** the services section loads
  - **WHEN** the section renders
  - **THEN** a dark overlay banner with "This is what we can do for you" heading appears
  - **AND** 3 service cards (Vector Artworks, Corporate Identity, Art Direction Design) appear with icons and descriptions

### 5. ServicesCards
- No dedicated spec block — hold this band to the design notes.

### 6. Testimonials
- The template SHALL display 4 customer testimonials in a 2-column grid.
- Scenario — Testimonials render with ratings:
  - **GIVEN** the testimonials section loads
  - **WHEN** the section renders
  - **THEN** 4 testimonials appear with avatar, name, star rating, and review text

### 7. Footer
- The template SHALL display a footer with About Us, Newsletter signup, and social links. It MUST link to componentdock.com.
- Scenario — Footer renders all columns:
  - **GIVEN** the footer loads
  - **WHEN** the footer renders
  - **THEN** it shows About Us text, Newsletter form with email input and subscribe button, and Follow Us social links
  - **AND** it links to https://www.componentdock.com/ branded "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/curate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/curate/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/curate` ships on https://curate.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/curate/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/curate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/curate/public/CNAME` = `curate.free.componentdock.com`
  and the package `homepage` = `https://curate.free.componentdock.com`.
