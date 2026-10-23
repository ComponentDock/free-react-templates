# Seekbar — Implementation Tasks

Source design: **Colorlib Search 24** (`https://colorlib.com/wp/template/colorlib-search-24/`) → recreation name **seekbar**. Shipped at https://seekbar.free.componentdock.com.

Scope: Seekbar is a full-page search form overlay on a background image in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Search Form Bar 24" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/seekbar/src/App.tsx`:

### 1. SearchBar
- The system SHALL render a centered search form with a text input, a category dropdown, and a search button.
- Scenario — Form structure:
  - **GIVEN** the Seekbar page is rendered
  - **WHEN** the search form is displayed
  - **THEN** it SHALL contain a form element with aria-label "Search form"
  - **AND** it SHALL contain a text input with placeholder "What are you looking for?"
  - **AND** it SHALL contain a category dropdown
  - **AND** it SHALL contain a button labeled "Search"
- Scenario — Search input accessible label:
  - **GIVEN** the Seekbar page is rendered
  - **WHEN** the search input is displayed
  - **THEN** the text input SHALL have an accessible label "Search query"
- Scenario — Typing in search input:
  - **GIVEN** the Seekbar page is rendered
  - **WHEN** the user types "modern furniture" in the search input
  - **THEN** the input value SHALL be "modern furniture"
- Scenario — Form submission prevention:
  - **GIVEN** the Seekbar page is rendered
  - **WHEN** the user types "query" and presses Enter
  - **THEN** the form SHALL not navigate away
  - **AND** the input value SHALL remain "query"
- Scenario — onSearch callback:
  - **GIVEN** the Seekbar page is rendered with an onSearch handler
  - **WHEN** the user clicks the Search button
  - **THEN** the onSearch handler SHALL be called with the query and selected category

### 2. Footer
- The system SHALL render a footer with copyright text and a Component Dock link.
- Scenario — Copyright text:
  - **GIVEN** the Seekbar page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show copyright text including "Seekbar. All rights reserved."
- Scenario — Component Dock link:
  - **GIVEN** the Seekbar page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL contain a link to https://www.componentdock.com/
  - **AND** the link SHALL open in a new tab
  - **AND** the link SHALL have rel="noopener noreferrer"

### Cross-cutting requirements

- **Background** — The system SHALL render a full-viewport background image with a dark overlay for readability.
  - Scenario — Background image: **GIVEN** the Seekbar page is rendered; **WHEN** the page loads; **THEN** a background image element SHALL be present with aria-hidden="true"; **AND** a dark overlay SHALL be present with aria-hidden="true"
- **Category dropdown** — The system SHALL render a category dropdown with predefined options.
  - Scenario — Default category: **GIVEN** the Seekbar page is rendered; **WHEN** the category dropdown is displayed; **THEN** it SHALL default to "All Categories"
  - Scenario — Category options: **GIVEN** the Seekbar page is rendered; **WHEN** the category dropdown options are listed; **THEN** it SHALL contain options: All Categories, Furniture, Electronics, Clothing, Home & Garden, Sports
  - Scenario — Changing category: **GIVEN** the Seekbar page is rendered; **WHEN** the user selects "Electronics" from the dropdown; **THEN** the dropdown value SHALL be "Electronics"
  - Scenario — Category passed to onSearch: **GIVEN** the Seekbar page is rendered with an onSearch handler; **WHEN** the user selects "Electronics" and clicks Search; **THEN** the onSearch handler SHALL be called with the category "Electronics"
- **Document title** — The system SHALL set the document title to "Seekbar — Search Form Bar".
  - Scenario — Title on load: **GIVEN** the Seekbar page is rendered; **WHEN** the page loads; **THEN** the document title SHALL be "Seekbar — Search Form Bar"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/seekbar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/seekbar/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/seekbar` ships on https://seekbar.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/seekbar/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/seekbar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seekbar/public/CNAME` = `seekbar.free.componentdock.com`
  and the package `homepage` = `https://seekbar.free.componentdock.com`.
