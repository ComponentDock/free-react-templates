# Dropkick — Implementation Tasks

Source design: **Dropdown 09** (`https://colorlib.com/wp/template/dropdown-09/`) → recreation name **dropkick**. Shipped at https://dropkick.free.componentdock.com.

Scope: Recreate the ColorLib Dropdown 09 template as "Dropkick" — a responsive dropdown snippet that reveals an image and descriptive text when the user clicks a "View Details" button. The design uses a clean light background, Roboto font, sky-blue accent button, and a white dropdown panel with shadow and arrow indicator.

## Component breakdown

Render order as composed in `apps/dropkick/src/App.tsx`:

### 1. DropdownShowcase
- The page SHALL display a "View Details" button styled with the brand accent color.
- Scenario — Button visible on load:
  - **WHEN** the user loads the page
  - **THEN** a button labeled "View Details" is visible

### 2. Footer
- The page SHALL display a footer with a link to Component Dock.
- Scenario — Footer with Component Dock link:
  - **WHEN** the user loads the page
  - **THEN** a footer is visible
  - **AND** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text contains "Component Dock"

### Cross-cutting requirements

- **Page renders heading** — The page SHALL display a centered heading "Dropdown #09".
  - Scenario — Heading visible on load: **WHEN** the user loads the page; **THEN** a heading with text "Dropdown #09" is visible and centered
- **Clicking the button opens the dropdown** — The button SHALL toggle a dropdown panel showing an image and text side-by-side.
  - Scenario — Dropdown opens on click: **WHEN** the user clicks the "View Details" button; **THEN** a dropdown panel appears below the button; **AND** the panel contains a placeholder image on the left; **AND** the panel contains descriptive text on the right
- **Dropdown closes on outside click** — The dropdown SHALL close when the user clicks outside the dropdown area.
  - Scenario — Outside click closes dropdown: **GIVEN** the dropdown is open; **WHEN** the user clicks outside the dropdown; **THEN** the dropdown panel closes
- **Dropdown toggles on repeated clicks** — The button SHALL toggle the dropdown open and closed on repeated clicks.
  - Scenario — Toggle open and closed: **GIVEN** the dropdown is closed; **WHEN** the user clicks the "View Details" button; **THEN** the dropdown opens; **WHEN** the user clicks the "View Details" button again; **THEN** the dropdown closes
- **Accessibility attributes** — The button SHALL have proper ARIA attributes for dropdown state.
  - Scenario — aria-expanded reflects state: **GIVEN** the dropdown is closed; **WHEN** the user inspects the button; **THEN** aria-expanded is "false"; **WHEN** the user clicks the button; **THEN** aria-expanded is "true"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/dropkick/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/dropkick/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/dropkick` ships on https://dropkick.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/dropkick/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dropkick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dropkick/public/CNAME` = `dropkick.free.componentdock.com`
  and the package `homepage` = `https://dropkick.free.componentdock.com`.
