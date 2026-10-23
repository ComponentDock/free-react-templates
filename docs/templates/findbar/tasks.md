# Findbar — Implementation Tasks

Source design: **Search Form Bar 01** (`https://colorlib.com/wp/template/search-form-bar-01/`) → recreation name **findbar**. Shipped at https://findbar.free.componentdock.com.

Scope: Findbar is a search form bar template. It recreates the ColorLib **Search Form Bar 01** design (https://colorlib.com/wp/template/search-form-bar-01/, preview: https://preview.colorlib.com/theme/bootstrap/search-form-bar-01/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/findbar/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/findbar/src/App.tsx`:

### 1. SearchBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search form · Search

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/findbar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/findbar/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/findbar` ships on https://findbar.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/findbar/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/findbar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/findbar/public/CNAME` = `findbar.free.componentdock.com`
  and the package `homepage` = `https://findbar.free.componentdock.com`.
