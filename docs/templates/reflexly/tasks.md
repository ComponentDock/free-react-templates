# Reflexly — Implementation Tasks

Source design: **Phozogy** (`https://colorlib.com/wp/template/phozogy/`) → recreation name **reflexly**. Shipped at https://reflexly.free.componentdock.com.

Scope: Reflexly is a photography studio landing page template featuring a hero carousel, services grid, photo categories, filterable portfolio gallery, and a full footer with subscribe form. The design uses a green accent (#009603), Quantico headings, Open Sans body text, and a dark header/footer with white content sections.

## Component breakdown

Render order as composed in `apps/reflexly/src/App.tsx`:

### 1. Header
- The template SHALL display a fixed header with the logo "Reflexly", navigation links (Home, About, Services, Portfolio, Contact), and a search icon button.
- Scenario — Logo displays brand name:
  - **WHEN** the page loads
  - **THEN** the text "Reflexly" is visible in the header
- Scenario — Navigation links are present:
  - **WHEN** the page loads
  - **THEN** links for Home, About, Services, Portfolio, and Contact are visible
- Scenario — Search icon is accessible:
  - **WHEN** the page loads
  - **THEN** a search icon button with an aria-label is present

### 2. Hero
- The template SHALL display a full-width hero section with a background image, heading "Photography Studio", description text, and a "Contact us" call-to-action button.
- Scenario — Hero heading is displayed:
  - **WHEN** the page loads
  - **THEN** a heading "Photography Studio" is visible
- Scenario — Contact us button is present:
  - **WHEN** the page loads
  - **THEN** a button labeled "Contact us" is visible

### 3. Services
- The template SHALL display three service cards in a grid: Shooting, Videos, and Editing, each with an image, title, and description.
- Scenario — Three services are displayed:
  - **WHEN** the page loads
  - **THEN** cards for Shooting, Videos, and Editing are visible

### 4. Categories
- The template SHALL display a categories section with a heading, a "View all" button, and a horizontal scrollable list of category cards (Animal, Natural, Portrait, Landscape, Wildlife) each showing an image, name, and picture count.
- Scenario — Categories heading and button:
  - **WHEN** the page loads
  - **THEN** a heading "Categories" and a "View all" button are visible
- Scenario — Category cards display names and counts:
  - **WHEN** the page loads
  - **THEN** category cards show names like "Animal" and counts like "120 pictures"

### 5. Portfolio
- The template SHALL display a filterable portfolio grid with tabs (All, Fashion, Lifestyle, Natural, Wedding) and a "Load More" button.
- Scenario — Filter tabs are present:
  - **WHEN** the page loads
  - **THEN** tabs for All, Fashion, Lifestyle, Natural, and Wedding are visible
- Scenario — Clicking a filter updates displayed items:
  - **WHEN** the user clicks the "Fashion" filter tab
  - **THEN** only portfolio items tagged as Fashion are displayed
- Scenario — Load More button:
  - **WHEN** the page loads
  - **THEN** a "Load More" button is visible below the portfolio grid

### 6. Footer
- The template SHALL display a footer with logo, description, social icons, Instagram grid, quick links, subscribe form, and a copyright line linking to Component Dock.
- Scenario — Footer displays Component Dock link:
  - **WHEN** the page loads
  - **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is visible in the footer
- Scenario — Subscribe form is present:
  - **WHEN** the page loads
  - **THEN** an email input and a submit button are visible in the footer
- Scenario — Quick links are present:
  - **WHEN** the page loads
  - **THEN** links for Home, About, Contact, Gallery, Portfolio, and Services are visible in the footer

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/reflexly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/reflexly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/reflexly` ships on https://reflexly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/reflexly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/reflexly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reflexly/public/CNAME` = `reflexly.free.componentdock.com`
  and the package `homepage` = `https://reflexly.free.componentdock.com`.
