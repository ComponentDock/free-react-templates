# Travenzo — Implementation Tasks

Source design: **Colorlib Search 15** (`https://colorlib.com/wp/template/colorlib-search-15/`) → recreation name **travenzo**. Shipped at https://travenzo.free.componentdock.com.

Scope: Recreation of ColorLib "Colorlib Search 15" — a travel/hotel booking search form widget. Dark card overlay on a scenic background with tabbed search (Hotels / Car / Flight), destination input, date pickers, traveller dropdown, checkboxes, and a full-width green CTA button.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/travenzo/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/travenzo/src/App.tsx`:

### 1. SearchCard
- No dedicated spec block — hold this band to the design notes.
- Anchors: Decrease adults · Increase adults · Decrease children · Increase children · Decrease rooms · Increase rooms

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/travenzo/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/travenzo/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; `apps/travenzo/` — new app folder; `openspec/specs/template-travenzo/spec.md` — this spec; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/travenzo` ships on https://travenzo.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/travenzo/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/travenzo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/travenzo/public/CNAME` = `travenzo.free.componentdock.com`
  and the package `homepage` = `https://travenzo.free.componentdock.com`.
