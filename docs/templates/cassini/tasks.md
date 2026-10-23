# Cassini — Implementation Tasks

Source design: **Cassi** (`https://colorlib.com/wp/template/cassi/`) → recreation name **cassini**. Shipped at https://cassini.free.componentdock.com.

Scope: Cassini is a photography studio website template featuring a full-screen hero image slider with category tags, an offcanvas hamburger menu, a minimal transparent header, and a dark footer with social links and Component Dock attribution. It recreates the ColorLib "Cassi" design faithfully using React, Tailwind CSS, and TypeScript.

## Component breakdown

Render order as composed in `apps/cassini/src/App.tsx`:

### 1. Preloader
- The template SHALL display a full-screen dark overlay with a spinner animation on page load that hides after content loads.
- Scenario — Preloader displays on load:
  - **WHEN** the page is loading
  - **THEN** a full-screen dark overlay with a spinning loader is visible
- Scenario — Preloader hides after timeout:
  - **WHEN** the page has finished loading (1.5 seconds)
  - **THEN** the preloader overlay disappears

### 2. Header
- The template SHALL display a minimal header with logo text on the left and a hamburger menu icon on the right.
- Scenario — Header renders logo and hamburger:
  - **WHEN** the page loads
  - **THEN** the header shows the "Cassini" logo text and a menu icon button
- Scenario — Hamburger opens offcanvas menu:
  - **WHEN** the user clicks the hamburger menu icon
  - **THEN** the offcanvas menu slides in from the right

### 3. OffcanvasMenu
- The template SHALL display a full-screen offcanvas menu with navigation links, social links, and a copyright notice.
- Scenario — Menu shows all nav links:
  - **WHEN** the offcanvas menu is open
  - **THEN** navigation links "Home", "Gallery", "Blog", "About", "Contact" are visible
- Scenario — Menu shows social links:
  - **WHEN** the offcanvas menu is open
  - **THEN** social links "Facebook", "Twitter", "Instagram" are visible
- Scenario — Menu shows copyright with Component Dock:
  - **WHEN** the offcanvas menu is open
  - **THEN** a copyright notice with a "Component Dock" link to https://www.componentdock.com/ is present
- Scenario — Menu closes on close button click:
  - **WHEN** the offcanvas menu is open and the user clicks the close button
  - **THEN** the offcanvas menu closes

### 4. HeroSlider
- The template SHALL display a full-width hero section with a background image slider, category tag, heading, description, and CTA button.
- Scenario — Hero renders initial slide:
  - **WHEN** the page loads
  - **THEN** a full-screen hero section shows a background image with dark overlay, the category tag "Nature", heading "Photo Studio", description text, and a "See More" button
- Scenario — Slider advances to next slide:
  - **WHEN** the user clicks the next arrow
  - **THEN** the background image changes to the next slide
- Scenario — Slider goes to previous slide:
  - **WHEN** the user clicks the previous arrow
  - **THEN** the background image changes to the previous slide
- Scenario — Dot indicators navigate slides:
  - **WHEN** the user clicks a dot indicator
  - **THEN** the slider navigates to the corresponding slide

### 5. Footer
- The template SHALL display a dark footer with social text links and a copyright notice with Component Dock attribution.
- Scenario — Footer renders social links:
  - **WHEN** the footer is in the viewport
  - **THEN** social text links "Facebook", "Twitter", "Instagram" are visible
- Scenario — Footer links to Component Dock:
  - **WHEN** the footer is in the viewport
  - **THEN** a copyright notice with a "Component Dock" link to https://www.componentdock.com/ is present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cassini/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cassini/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/cassini` ships on https://cassini.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cassini/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cassini/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cassini/public/CNAME` = `cassini.free.componentdock.com`
  and the package `homepage` = `https://cassini.free.componentdock.com`.
