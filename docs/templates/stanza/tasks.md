# Stanza — Implementation Tasks

Source design: **Accordion 09** (`https://colorlib.com/wp/template/accordion-09/`) → recreation name **stanza**. Shipped at https://stanza.free.componentdock.com.

Scope: Recreation of ColorLib **Accordion 09** (`https://colorlib.com/wp/template/accordion-09/`). Preview URL: `https://preview.colorlib.com/theme/accordion-09/` (returns 404 — fallback to screenshot analysis). Stack: Vite + React 19 + TypeScript + Tailwind CSS 4.

## Component breakdown

Render order as composed in `apps/stanza/src/App.tsx`:

### 1. Accordion
- The page SHALL render with a centered heading "Frequently Asked Questions" and a series of interactive accordion items vertically stacked on a neutral light background.
- Scenario — Initial state:
  - **WHEN** the page loads
  - **THEN** all accordion items are rendered
  - **AND** items are collapsed by default
  - **AND** toggle icons indicate the current state
- Scenario — Toggling accordion item:
  - **WHEN** the user clicks an accordion header
  - **THEN** the corresponding panel expands or collapses
  - **AND** the chevron icon rotates smoothly
  - **AND** other panels maintain their current state
- Scenario — Footer attribution:
  - **WHEN** the page renders
  - **THEN** the footer contains a link to `https://www.componentdock.com/` ("Component Dock")

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: More templates at Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/stanza/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/stanza/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/stanza` ships on https://stanza.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/stanza/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/stanza/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stanza/public/CNAME` = `stanza.free.componentdock.com`
  and the package `homepage` = `https://stanza.free.componentdock.com`.
