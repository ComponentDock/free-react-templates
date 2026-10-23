# Sidegate — Implementation Tasks

Source design: **Colorlib Sidebar V08** (`https://colorlib.com/wp/template/colorlib-sidebar-v08/`) → recreation name **sidegate**. Shipped at https://sidegate.free.componentdock.com.

Scope: Sidegate is a sidebar navigation layout. It recreates the ColorLib **Colorlib Sidebar V08** design (https://colorlib.com/wp/template/colorlib-sidebar-v08/, preview: https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v08/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/sidegate/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/sidegate/src/App.tsx`:

### 1. Sidebar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Close sidebar · Open sidebar · Sidebar navigation

### 2. PostCard
- No dedicated spec block — hold this band to the design notes.

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/sidegate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/sidegate/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/sidegate` ships on https://sidegate.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/sidegate/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/sidegate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sidegate/public/CNAME` = `sidegate.free.componentdock.com`
  and the package `homepage` = `https://sidegate.free.componentdock.com`.
