# Searchcloak — Implementation Tasks

Source design: **Search Form Bar 20** (`https://colorlib.com/wp/template/search-form-bar-20/`) → recreation name **searchcloak**. Shipped at https://searchcloak.free.componentdock.com.

Scope: A search form bar template with a navbar, expanding search overlay and content section. Recreation of ColorLib **Search Form Bar 20**

## Component breakdown

Render order as composed in `apps/searchcloak/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display a brand name on the left and navigation links on the right.
- Scenario — Brand name displayed:
  - **GIVEN** the page loads
  - **THEN** the navbar shows "Brand" as a link on the left side
  - **AND** the brand link is styled in blue (#007bff)
- Scenario — Navigation links displayed:
  - **GIVEN** the page loads
  - **THEN** the navbar shows links: "Home", "About", "Contact"
  - **AND** all nav links are positioned to the right of the brand
- Scenario — Search icon visible:
  - **GIVEN** the page loads
  - **THEN** a magnifying glass search icon is displayed to the right of the nav links
  - **AND** the search icon is clickable
- Scenario — Navbar has subtle shadow:
  - **GIVEN** the page loads
  - **THEN** the navbar has a bottom border (#dae0e5) and subtle box-shadow

### 2. SearchOverlay
- The search overlay SHALL cover the entire navbar area when opened and hide when closed.
- Scenario — Overlay hidden by default:
  - **GIVEN** the page loads
  - **THEN** the search overlay is not visible
  - **AND** the search input is hidden
- Scenario — Overlay opens on search icon click:
  - **GIVEN** the page loads
  - **WHEN** the user clicks the search icon
  - **THEN** the search overlay appears over the entire navbar
  - **AND** the search input is visible with placeholder "Type keyword and hit enter..."
  - **AND** the close (X) button is visible on the right
- Scenario — Overlay closes on close button click:
  - **GIVEN** the search overlay is open
  - **WHEN** the user clicks the close (X) button
  - **THEN** the search overlay hides
  - **AND** the navbar returns to its normal state
- Scenario — Overlay closes on Escape key:
  - **GIVEN** the search overlay is open
  - **WHEN** the user presses the Escape key
  - **THEN** the search overlay hides
- Scenario — Search input is borderless:
  - **GIVEN** the search overlay is open
  - **THEN** the search input has no visible border
  - **AND** the search input has a transparent background
  - **AND** the search input is 50px tall
- Scenario — Overlay transition:
  - **GIVEN** the search overlay is open
  - **WHEN** the user clicks the close button
  - **THEN** the overlay fades out with a 0.3s ease transition

### 3. ContentSection
- The content section SHALL display centered instruction text.
- Scenario — Instruction text displayed:
  - **GIVEN** the page loads
  - **THEN** a centered paragraph reads "Please click the search icon toggle button top right."
  - **AND** the text color is #757575
  - **AND** the text is styled with font-weight 300
- Scenario — Section padding:
  - **GIVEN** the page loads
  - **THEN** the content section has vertical padding of 7rem

### 4. Footer
- The footer SHALL link to Component Dock.
- Scenario — Footer with Component Dock link:
  - **GIVEN** the page loads
  - **THEN** a footer is present at the bottom
  - **AND** the footer links to "https://www.componentdock.com/"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/searchcloak/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/searchcloak/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Navbar renders with brand text and nav links (Home, About, Contact); [ ] Search icon (magnifying glass) is visible in the navbar; [ ] Search overlay is hidden by default; [ ] Clicking search icon opens the overlay with full-width input; [ ] Overlay covers the entire navbar area (white background, absolute positioned); [ ] Close (X) button closes the overlay with fade transition; [ ] Search input is borderless with "Type keyword and hit enter..." placeholder; [ ] Input height is 50px, transparent background; [ ] Content section shows centered instruction text in gray (#757575, weight 300); [ ] Font is Roboto (loaded via Google Fonts link in index.html); [ ] Navbar has bottom border (#dae0e5) and subtle shadow; [ ] Transitions are smooth (0.3s ease); [ ] Footer includes Component Dock link; [ ] No ColorLib references in app code (provenance only in spec); [ ] `public/CNAME` contains `searchcloak.free.componentdock.com`; [ ] `package.json` homepage is `https://searchcloak.free.componentdock.com`; [ ] No asset copying — placeholder images via picsum.photos if needed; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/searchcloak` ships on https://searchcloak.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/searchcloak/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/searchcloak/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchcloak/public/CNAME` = `searchcloak.free.componentdock.com`
  and the package `homepage` = `https://searchcloak.free.componentdock.com`.
