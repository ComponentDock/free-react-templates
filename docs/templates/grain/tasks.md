# Grain — Implementation Tasks

Source design: **Spacewood** (`https://colorlib.com/wp/template/spacewood/`) → recreation name **grain**. Shipped at https://grain.free.componentdock.com.

Scope: Grain is a single-page interior design portfolio landing page in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/grain/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Open navigation menu · presentation · navigation · Main navigation

### 2. Hero
- Grain SHALL display a full-viewport hero section with a background image, dark overlay, project title, category tag, description, and a CTA button.
- Scenario — Hero displays project info:
  - **GIVEN** the hero section is visible
  - **THEN** the project title "White Sofas" is displayed
  - **AND** the category tag "Interior" is shown
  - **AND** a description paragraph is visible
  - **AND** a "View Project" CTA link points to the gallery section

### 3. ProjectGallery
- Grain SHALL display a grid of 6 portfolio project cards, each with an image, title, category label, and a hover overlay with "View Project" link.
- Scenario — Gallery renders project cards:
  - **GIVEN** the gallery section is visible
  - **THEN** 6 project cards are displayed
  - **AND** each card shows a title, category, and image
  - **AND** each card has a "View Project" link

### 4. About
- Grain SHALL display an about section with a split layout: image on the left, text content on the right with heading, description paragraphs, and statistics counters.
- Scenario — About displays content and stats:
  - **GIVEN** the about section is visible
  - **THEN** the heading "About Grain" is displayed
  - **AND** description paragraphs are visible
  - **AND** three statistics are shown (120+ Projects, 50+ Clients, 15+ Awards)

### 5. Footer
- Grain SHALL display a footer with copyright text and a link to Component Dock (https://www.componentdock.com/).
- Scenario — Footer links to Component Dock:
  - **GIVEN** the footer is visible
  - **THEN** there is a link to https://www.componentdock.com/
  - **AND** the link text mentions "Component Dock"
  - **AND** the link opens in a new tab with rel="noopener noreferrer"
- Scenario — Footer shows copyright:
  - **GIVEN** the footer is visible
  - **THEN** the current year is displayed in the copyright text

### Cross-cutting requirements

- **Navigation** — Grain SHALL display a fixed top navbar with the brand name "Grain", a hamburger menu button for mobile, and navigation links (Home, Work, About, Contact).
  - Scenario — Navbar renders brand and links: **GIVEN** the user visits the Grain template; **WHEN** the page loads; **THEN** the navbar displays the "Grain" brand name; **AND** navigation links for Home, Work, About, and Contact are visible
  - Scenario — Mobile menu toggle: **GIVEN** the user is on a mobile viewport; **WHEN** the user clicks the hamburger menu button; **THEN** the side navigation panel slides open from the right; **AND** the button aria-expanded attribute is true
  - Scenario — Mobile menu closes on link click: **GIVEN** the mobile menu is open; **WHEN** the user clicks a navigation link; **THEN** the side navigation panel closes
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/grain/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/grain/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/grain` ships on https://grain.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/grain/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/grain/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/grain/public/CNAME` = `grain.free.componentdock.com`
  and the package `homepage` = `https://grain.free.componentdock.com`.
