# Revolve — Implementation Tasks

Source design: **Carousel 01** (`https://colorlib.com/wp/template/carousel-01/`) → recreation name **revolve**. Shipped at https://revolve.free.componentdock.com.

Scope: Revolve is a full-screen carousel landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Carousel 01" design, built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/revolve/src/App.tsx`:

### 1. Navbar
- The system SHALL render a minimal top navigation bar with the site name "Revolve" and a hamburger menu button for mobile navigation.
- Scenario — Navbar renders site name:
  - **GIVEN** the Revolve page is rendered
  - **WHEN** the user inspects the header
  - **THEN** the text "Revolve" SHALL be visible in the navigation bar
- Scenario — Hamburger menu toggle:
  - **GIVEN** the Revolve page is rendered on mobile viewport
  - **WHEN** the user clicks the hamburger menu button
  - **THEN** the menu SHALL toggle open/closed
  - **AND** the button SHALL have an accessible `aria-expanded` attribute
- Scenario — Dark mode toggle:
  - **GIVEN** the Revolve page is rendered
  - **WHEN** the user clicks the dark mode toggle button
  - **THEN** the page SHALL switch between light and dark themes

### 2. Carousel
- The system SHALL render a full-screen carousel with multiple slides, each displaying a background image, heading text, subtext, and a CTA button.
- Scenario — Carousel displays slides:
  - **GIVEN** the Revolve page is rendered
  - **WHEN** the user views the carousel
  - **THEN** the first slide SHALL be visible with a background image, heading,
- Scenario — Carousel auto-advances:
  - **GIVEN** the Revolve page is rendered
  - **WHEN** the user waits approximately 5 seconds without interaction
  - **THEN** the carousel SHALL advance to the next slide automatically
- Scenario — Carousel manual navigation via arrows:
  - **GIVEN** the Revolve page is rendered
  - **WHEN** the user clicks the right arrow button
  - **THEN** the carousel SHALL advance to the next slide
  - **AND** clicking the left arrow SHALL go to the previous slide
- Scenario — Carousel manual navigation via dots:
  - **GIVEN** the Revolve page is rendered
  - **WHEN** the user clicks a navigation dot
  - **THEN** the carousel SHALL navigate to the corresponding slide
- Scenario — Carousel pauses on hover:
  - **GIVEN** the Revolve page is rendered and the carousel is auto-advancing
  - **WHEN** the user hovers over the carousel area
  - **THEN** the auto-advance SHALL pause
  - **AND** when the user moves the mouse away, auto-advance SHALL resume
- Scenario — Carousel accessible navigation:
  - **GIVEN** the Revolve page is rendered
  - **WHEN** the user inspects the arrow and dot buttons
  - **THEN** each SHALL have descriptive `aria-label` attributes

### 3. Footer
- The system SHALL render a simple footer with a Component Dock branding link.
- Scenario — Footer content:
  - **GIVEN** the Revolve page is rendered
  - **WHEN** the user scrolls to the footer
  - **THEN** a link to "https://www.componentdock.com/" SHALL be visible
  - **AND** the text "Made with Component Dock" or similar branding SHALL appear

### Cross-cutting requirements

- **Responsive design** — The system SHALL be responsive and work on mobile, tablet, and desktop viewports.
  - Scenario — Mobile layout: **GIVEN** the Revolve page is rendered on a 375px viewport; **WHEN** the user views the carousel; **THEN** the slide content SHALL be readable and properly sized; **AND** the hamburger menu SHALL replace horizontal navigation
  - Scenario — Desktop layout: **GIVEN** the Revolve page is rendered on a 1280px viewport; **WHEN** the user views the carousel; **THEN** the slide content SHALL fill the viewport with proper spacing
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/revolve/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/revolve/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/revolve` ships on https://revolve.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/revolve/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/revolve/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/revolve/public/CNAME` = `revolve.free.componentdock.com`
  and the package `homepage` = `https://revolve.free.componentdock.com`.
