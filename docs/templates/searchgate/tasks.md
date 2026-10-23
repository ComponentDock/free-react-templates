# Searchgate — Implementation Tasks

Source design: **Search Form Bar 06** (`https://colorlib.com/wp/template/search-form-bar-06/`) → recreation name **searchgate**. Shipped at https://searchgate.free.componentdock.com.

Scope: A standalone animated search form bar with a circular search icon button that expands the input on hover/focus. Recreation of ColorLib **Search Form Bar 06**.

## Component breakdown

Render order as composed in `apps/searchgate/src/App.tsx`:

### 1. SearchBar
- The search form SHALL contain a circular search button with the brand color (#76a21e) and a white magnifying glass icon.
- Scenario — Button renders as a circle:
  - **WHEN** the page loads
  - **THEN** a search button is visible
  - **AND** the button has rounded-full (circle) shape
  - **AND** the button has background color #76a21e

### 2. Footer
- The template SHALL render a footer with a copyright notice and a link to https://www.componentdock.com/ labeled "Component Dock".
- Scenario — Footer is visible:
  - **WHEN** the page loads
  - **THEN** a footer element is visible
  - **AND** the footer contains a link to https://www.componentdock.com/
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Page layout and heading** — The page SHALL render a centered, full-viewport container with a light (#fafafa) background and Poppins font. A heading "SearchGate" SHALL appear above the search form.
  - Scenario — Page loads with correct layout: **WHEN** the page loads; **THEN** the viewport background color is light (#fafafa); **AND** a heading "SearchGate" is visible above the form; **AND** the form is centered both vertically and horizontally
- **Expandable search input** — The search input SHALL start at 150px width with a pill shape and expand to 300px on focus/hover with a 0.3s transition.
  - Scenario — Input starts collapsed: **WHEN** the page loads; **THEN** the search input is approximately 150px wide; **AND** the input has pill-shaped border radius
  - Scenario — Input expands on focus: **WHEN** I click on the search input; **THEN** the input width expands toward 300px
  - Scenario — Input collapses on blur: **GIVEN** the search input is focused; **WHEN** I click outside the search form; **THEN** the input collapses back to 150px
- **Form submission behavior** — The form SHALL prevent default submission and call the onSearch callback with the trimmed query when the user presses Enter with a non-empty query.
  - Scenario — Typing in search input: **WHEN** I type "react templates" into the search input; **THEN** the search input contains "react templates"
  - Scenario — Submitting with a query: **WHEN** I type "dashboard" into the search input; **AND** I press Enter; **THEN** the form submits with the query "dashboard"
  - Scenario — Submitting with empty input: **WHEN** I press Enter without typing; **THEN** the form does not submit
  - Scenario — Submitting with whitespace only: **WHEN** I type " " into the search input; **AND** I press Enter; **THEN** the form does not submit
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/searchgate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/searchgate/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/searchgate` ships on https://searchgate.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/searchgate/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/searchgate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchgate/public/CNAME` = `searchgate.free.componentdock.com`
  and the package `homepage` = `https://searchgate.free.componentdock.com`.
