# Seekly — Implementation Tasks

Source design: **Colorlib Search 1** (`https://colorlib.com/wp/template/colorlib-search-1/`) → recreation name **seekly**. Shipped at https://seekly.free.componentdock.com.

Scope: A single-page search form hero template featuring a full-screen background image with a semi-transparent dark overlay, large heading text, and a search bar with two input fields and a search button. Minimal footer with Component Dock branding.

## Component breakdown

Render order as composed in `apps/seekly/src/App.tsx`:

### 1. SearchHero
- The template SHALL provide a search form with two text inputs and a search button.
- Scenario — Search inputs have correct placeholders:
  - **WHEN** the page loads
  - **THEN** the first input SHALL have placeholder "What are you looking for?"
  - **AND** the second input SHALL have placeholder "location"
  - **AND** a "Search" button SHALL be visible
- Scenario — Form submission is handled:
  - **WHEN** the user clicks the Search button
  - **THEN** the form SHALL prevent default submission

### 2. Footer
- The template SHALL include a footer with the site name and a link to Component Dock.
- Scenario — Footer renders correctly:
  - **WHEN** the page loads
  - **THEN** the footer SHALL show "Seekly"
  - **AND** a link to https://www.componentdock.com/ SHALL be present with text "Component Dock"

### Cross-cutting requirements

- **Hero section with background and heading** — The template SHALL display a full-screen hero section with a background image, dark overlay, and the heading "Discover the Amazing City".
  - Scenario — Heading renders correctly: **WHEN** the page loads; **THEN** the heading "Discover the Amazing City" SHALL be visible
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/seekly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/seekly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/seekly` ships on https://seekly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/seekly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/seekly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seekly/public/CNAME` = `seekly.free.componentdock.com`
  and the package `homepage` = `https://seekly.free.componentdock.com`.
