# Expanda — Implementation Tasks

Source design: **Accordion 05** (`https://colorlib.com/wp/template/accordion-05/`) → recreation name **expanda**. Shipped at https://expanda.free.componentdock.com.

Scope: - Recreation of ColorLib Accordion 05 (`https://colorlib.com/wp/template/accordion-05/`, preview URL: `https://colorlib.com/preview/theme/accordion-05/`)

## Component breakdown

No `components/` directory — the bands are composed inline in `apps/expanda/src/App.tsx`. Order below follows the spec's requirements.

### 1. Accordion Section Navigation
- The application SHALL provide expandable/collapsible accordion sections for viewing management settings, location details, and hobbies.
- Scenario — Expand Manage Section:
  - **WHEN** the Expanda application is loaded
  - **THEN** the Manage section is expanded by default showing items: 01 Account, 02 Settings, 03 Profile
- Scenario — Toggle Manage Section Off:
  - **WHEN** the user clicks on the "Manage" accordion header while it is open
  - **THEN** the Manage section collapses and hides its sub-items
- Scenario — Expand Location Section:
  - **WHEN** the user clicks on the "Location" accordion header
  - **THEN** the Location section expands to show Regional Headquarters details
- Scenario — Toggle Location Section Off:
  - **WHEN** the user clicks on the "Location" accordion header while it is open
  - **THEN** the Location section collapses
- Scenario — Expand Hobbies Section:
  - **WHEN** the user clicks on the "Hobbies" accordion header
  - **THEN** the Hobbies section expands to show Photography & Hiking interests
- Scenario — Toggle Hobbies Section Off:
  - **WHEN** the user clicks on the "Hobbies" accordion header while it is open
  - **THEN** the Hobbies section collapses
- Scenario — Footer Component Dock Link:
  - **WHEN** the Expanda application is loaded
  - **THEN** the footer contains a link to https://www.componentdock.com/ branded as "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/expanda/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/expanda/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/expanda` ships on https://expanda.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/expanda/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/expanda/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/expanda/public/CNAME` = `expanda.free.componentdock.com`
  and the package `homepage` = `https://expanda.free.componentdock.com`.
