# Brio — Implementation Tasks

Source design: **Typo** (`https://colorlib.com/wp/template/typo/`) → recreation name **brio**. Shipped at https://brio.free.componentdock.com.

Scope: Brio is a bright app landing page template recreating the ColorLib Typo design. It showcases a hero with warm gradient, feature sections, a dark offer area, process grid, newsletter subscription, and a full footer — all built with React 19, Tailwind CSS 4, and TypeScript.

## Component breakdown

Render order as composed in `apps/brio/src/App.tsx`:

### 1. Hero
- The template SHALL display a full-width hero with a coral-to-yellow gradient background, heading, description text, and a "Get Started" CTA button linking to the about section.
- Scenario — Hero renders with correct content:
  - **GIVEN** the page loads
  - **WHEN** the user views the hero section
  - **THEN** the heading "Bright App Landing" is visible
  - **AND** a description paragraph is displayed
  - **AND** a "Get Started" link points to `#about`

### 2. Navbar
- The template SHALL display a navigation bar with the "Brio" logo, desktop nav links (About, Features, Services, Process), and a mobile hamburger toggle.
- Scenario — Desktop navigation displays all links:
  - **GIVEN** the page loads on desktop viewport
  - **WHEN** the user views the header
  - **THEN** the logo "Brio" and four navigation links are visible
- Scenario — Mobile menu toggles on button click:
  - **GIVEN** the page loads on mobile viewport
  - **WHEN** the user taps the hamburger button
  - **THEN** the mobile menu opens with navigation links
  - **AND** tapping again closes the menu

### 3. AboutTop
- The template SHALL display a split layout with an image on the left and two feature items (icon + heading + description) on the right.
- Scenario — About top renders two feature items:
  - **GIVEN** the page loads
  - **WHEN** the user scrolls to the about section
  - **THEN** two feature items with headings and descriptions are visible
  - **AND** an about image is rendered

### 4. Features
- The template SHALL display a three-column features section with two text features and one image.
- Scenario — Features section renders correctly:
  - **GIVEN** the page loads
  - **WHEN** the user scrolls to features
  - **THEN** "Reasons To Choose Notebook" and "Facts Why Inkjet Printing" headings are visible
  - **AND** the feature illustration image is rendered

### 5. Offer
- The template SHALL display a dark-background offer section with heading, app screen image, and description.
- Scenario — Offer section renders correctly:
  - **GIVEN** the page loads
  - **WHEN** the user scrolls to services
  - **THEN** "Main Application Features" heading and description are visible
  - **AND** the app screen preview image is rendered

### 6. AboutBottom
- The template SHALL display a split layout with text and a "Learn More" CTA on the left and an image on the right.
- Scenario — About bottom renders correctly:
  - **GIVEN** the page loads
  - **WHEN** the user scrolls to the bottom about section
  - **THEN** "Powerful Performance" heading and description are visible
  - **AND** a "Learn More" link is interactive

### 7. Process
- The template SHALL display a 3x3 grid of 9 process items, each with an icon, title, and description.
- Scenario — Process section renders all 9 items:
  - **GIVEN** the page loads
  - **WHEN** the user scrolls to the process section
  - **THEN** all 9 process items with icons, titles, and descriptions are visible

### 8. Newsletter
- The template SHALL display a dark-background newsletter section with an email subscription form.
- Scenario — Newsletter form renders and submits:
  - **GIVEN** the page loads
  - **WHEN** the user types an email and clicks submit
  - **THEN** the email input is cleared after submission

### 9. Footer
- The template SHALL display a 4-column footer (Top Products, Navigation, Compare, About) with copyright and a link to Component Dock.
- Scenario — Footer renders all columns and Component Dock link:
  - **GIVEN** the page loads
  - **WHEN** the user scrolls to the footer
  - **THEN** the 4-column layout is visible
  - **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is present
  - **AND** the copyright with current year is displayed

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/brio/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/brio/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/brio` ships on https://brio.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/brio/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/brio/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/brio/public/CNAME` = `brio.free.componentdock.com`
  and the package `homepage` = `https://brio.free.componentdock.com`.
