# Repertoire — Implementation Tasks

Source design: **Work** (`https://colorlib.com/wp/template/work/`) → recreation name **repertoire**. Shipped at https://repertoire.free.componentdock.com.

Scope: Repertoire is a portfolio and personal-branding landing page with a sticky sidebar navigation, a hero slider, services, portfolio and blog. It recreates the ColorLib **Work** design (https://colorlib.com/wp/template/work/). **Preview:** https://preview.colorlib.com/theme/work/ **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Component breakdown

Render order as composed in `apps/repertoire/src/App.tsx`:

### 1. Sidebar
- The template SHALL display a fixed left sidebar containing the logo "Repertoire", navigation links (Home, Work, About, Services, Blog, Contact), and social media icons in the footer area.
- Scenario — Sidebar renders all navigation links:
  - **WHEN** the page loads
  - **THEN** the sidebar displays links for "Home", "Work", "About", "Services", "Blog", "Contact"
- Scenario — Sidebar has Component Dock footer link:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to "https://www.componentdock.com/" branded as "Component Dock"

### 2. Hero
- The template SHALL display a full-viewport hero section with an auto-rotating image slider containing 3 slides with headings and a CTA button.
- Scenario — Hero slider displays first heading:
  - **WHEN** the page loads
  - **THEN** the hero section shows "Strategic Design for Brands"
- Scenario — Hero slider auto-advances:
  - **WHEN** 5 seconds pass
  - **THEN** the heading changes to "Creators of Brands Template"
- Scenario — Hero has slide indicators:
  - **WHEN** the page loads
  - **THEN** 3 slide indicator buttons are rendered

### 3. About
- The template SHALL display a two-column about section with overlapping images on the left and a heading, description, and 3-panel accordion on the right.
- Scenario — About section renders heading:
  - **WHEN** the page loads
  - **THEN** "Welcome & Introduce" heading is visible
- Scenario — Accordion has 3 panels:
  - **WHEN** the page loads
  - **THEN** 3 accordion panels are rendered ("Why choose me?", "What I do?", "My Specialties")
- Scenario — First panel is expanded by default:
  - **WHEN** the page loads
  - **THEN** "Why choose me?" panel is expanded

### 4. Services
- The template SHALL display a 2-column grid of 6 service items with icons, titles, and descriptions.
- Scenario — Services shows 6 items:
  - **WHEN** the page loads
  - **THEN** 6 service items are rendered

### 5. Portfolio
- The template SHALL display a 2-column grid of 6 project cards with background images, hover overlays, titles, tags, and action buttons.
- Scenario — Portfolio shows 6 projects:
  - **WHEN** the page loads
  - **THEN** 6 project cards are rendered
- Scenario — Portfolio cards have action buttons:
  - **WHEN** the page loads
  - **THEN** each project card has share, view, and like buttons with accessible labels

### 6. Blog
- The template SHALL display a 3-column grid of 3 blog post cards with images, metadata, titles, excerpts, and "Read More" links.
- Scenario — Blog shows 3 posts:
  - **WHEN** the page loads
  - **THEN** 3 blog post cards are rendered

### 7. Cta
- The template SHALL display a full-width call-to-action section with heading, description, and contact button.
- Scenario — CTA has heading and button:
  - **WHEN** the page loads
  - **THEN** "Get in Touch!" heading is visible and a "Contact me!" button is rendered

### 8. Footer
- The template SHALL include a footer that links to Component Dock.
- Scenario — Footer links to Component Dock:
  - **WHEN** the page loads
  - **THEN** a link to "https://www.componentdock.com/" is present with text "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/repertoire/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/repertoire/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/repertoire` ships on https://repertoire.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/repertoire/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/repertoire/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/repertoire/public/CNAME` = `repertoire.free.componentdock.com`
  and the package `homepage` = `https://repertoire.free.componentdock.com`.
