# Crank — Implementation Tasks

Source design: **Accordion 17** (`https://colorlib.com/wp/template/accordion-17/`) → recreation name **crank**. Shipped at https://crank.free.componentdock.com.

Scope: Crank is a clean, minimal FAQ accordion page with a plus/minus toggle style. It recreates the ColorLib Accordion V17 design using React, Tailwind CSS 4, and accessible accordion patterns.

## Component breakdown

Render order as composed in `apps/crank/src/App.tsx`:

### 1. Accordion
- The page SHALL display a centered heading "Bootstrap Accordion #7" above the accordion.
- Scenario — Heading is visible:
  - **WHEN** the page loads
  - **THEN** a heading with text "Bootstrap Accordion #7" is rendered

### 2. Footer
- The page SHALL render a footer with copyright year, template name, and a link to Component Dock.
- Scenario — Footer content:
  - **WHEN** the page loads
  - **THEN** the footer contains the current year
  - **AND** the footer contains the text "Crank"
  - **AND** the footer contains a link to https://www.componentdock.com/

### Cross-cutting requirements

- **Renders all accordion items** — The page SHALL display all three accordion items from the data source.
  - Scenario — All items visible on load: **WHEN** the page loads; **THEN** all three question headers are visible: "How to download and register?", "How to create your paypal account?", "How to link your paypal and bank account?"
- **First item expanded by default** — The first accordion item SHALL be expanded by default on page load.
  - Scenario — Default expanded item: **WHEN** the page loads; **THEN** the first item's button has aria-expanded="true"; **AND** the first item's answer panel is visible
- **Toggle accordion items on click** — Clicking an accordion item's header SHALL toggle its expanded/collapsed state.
  - Scenario — Expand a collapsed item: **WHEN** a user clicks a collapsed item's header button; **THEN** the button's aria-expanded becomes "true"; **AND** the answer panel becomes visible
  - Scenario — Collapse an expanded item: **WHEN** a user clicks an expanded item's header button; **THEN** the button's aria-expanded becomes "false"; **AND** the answer panel is removed from the DOM
- **Multiple items can be open simultaneously** — The accordion SHALL allow multiple items to be expanded at the same time (non-exclusive behavior).
  - Scenario — Open two items at once: **WHEN** a user opens the first item; **AND** then opens the third item; **THEN** both items are expanded simultaneously; **AND** the second item remains collapsed
- **Accessible accordion controls** — Each accordion button SHALL have proper ARIA attributes for accessibility.
  - Scenario — ARIA attributes on toggle buttons: **WHEN** an accordion item is rendered; **THEN** its button has aria-expanded; **AND** its button has aria-controls pointing to the panel id; **AND** the panel has role="region" and aria-labelledby pointing to the button id
  - Scenario — Keyboard accessibility: **WHEN** a user focuses a toggle button and presses Enter or Space; **THEN** the item toggles its expanded state
- **Green accent on active items** — Active/expanded accordion items SHALL display green accent text (#72c02c).
  - Scenario — Active item styling: **WHEN** an accordion item is expanded; **THEN** its header button text uses the accent color class
  - Scenario — Inactive item styling: **WHEN** an accordion item is collapsed; **THEN** its header button text uses the muted color class
- **Plus/minus icon toggle** — Each accordion item SHALL display a Plus icon when collapsed and a Minus icon when expanded.
  - Scenario — Plus icon for collapsed items: **WHEN** an accordion item is collapsed; **THEN** a Plus icon is rendered in its header
  - Scenario — Minus icon for expanded items: **WHEN** an accordion item is expanded; **THEN** a Minus icon is rendered in its header
- **Design tokens match source** — The template SHALL use Roboto font, light gray page background (#efefef), and accordion item background (#f9f9f9) matching the ColorLib source design tokens.
  - Scenario — Theme tokens applied: **WHEN** the page loads; **THEN** the page wrapper has the bg-page class; **AND** accordion items have the bg-accordion-bg class
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/crank/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/crank/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/crank` ships on https://crank.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/crank/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/crank/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crank/public/CNAME` = `crank.free.componentdock.com`
  and the package `homepage` = `https://crank.free.componentdock.com`.
