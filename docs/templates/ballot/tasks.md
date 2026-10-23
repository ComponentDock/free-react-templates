# Ballot — Implementation Tasks

Source design: **Checkbox 14** (`https://colorlib.com/wp/template/checkbox-14/`) → recreation name **ballot**. Shipped at https://ballot.free.componentdock.com.

Scope: Ballot is a custom checkbox template with a checkbox showcase and footer. It recreates the ColorLib **Checkbox 14** design (https://colorlib.com/wp/template/checkbox-14/, preview: https://preview.colorlib.com/theme/bootstrap/checkbox-14/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/ballot/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/ballot/src/App.tsx`:

### 1. CheckboxShowcase
- No dedicated spec block — hold this band to the design notes.
- Anchors: Checkbox #14 · Custom checkbox component demo

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Ballot · Custom checkbox components for React. · Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/ballot/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/ballot/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/ballot` ships on https://ballot.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/ballot/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/ballot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ballot/public/CNAME` = `ballot.free.componentdock.com`
  and the package `homepage` = `https://ballot.free.componentdock.com`.
