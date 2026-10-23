# Fanfold — Implementation Tasks

Source design: **Accordion 06** (`https://colorlib.com/wp/template/accordion-06/`) → recreation name **fanfold**. Shipped at https://fanfold.free.componentdock.com.

Scope: Recreation of ColorLib **Accordion 06** (`https://colorlib.com/wp/template/accordion-06/`). Preview URL: `https://preview.colorlib.com/theme/accordion-06/` (returns 404 — fallback to screenshot analysis). Stack: Vite + React 19 + TypeScript + Tailwind CSS 4.

## Component breakdown

Render order as composed in `apps/fanfold/src/App.tsx`:

### 1. Accordion
- No dedicated spec block — hold this band to the design notes.
- Anchors: region

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: More templates at Component Dock

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/fanfold/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/fanfold/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Page background is dark (gray-950); [ ] Heading "Accordion #06" centered above accordion; [ ] Three accordion items stacked vertically with gap; [ ] Each item: white background, gray-200 border; [ ] Question texts match source exactly; [ ] Collapsed state: green toggle button (green-600) with white plus icon; [ ] Expanded state: blue toggle button (blue-600) with white minus icon; [ ] Content panel: white background, gray-700 body text, proper padding; [ ] Only one item expands at a time? (Spec allows multiple — implement as multiple-open); [ ] Smooth height transition on expand/collapse; [ ] Keyboard accessible (Tab, Enter, Space); [ ] ARIA semantics correct (details/summary or ARIA pattern); [ ] Focus visible rings on interactive elements; [ ] Responsive: works on mobile, tablet, desktop; [ ] Footer links to https://www.componentdock.com/; [ ] No ColorLib references in app code; [ ] Design tokens in Tailwind @theme (index.css); [ ] Placeholder images via picsum.photos if needed (not needed for this template); [ ] 100% test coverage (lines, functions, branches, statements); [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/fanfold` ships on https://fanfold.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/fanfold/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/fanfold/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fanfold/public/CNAME` = `fanfold.free.componentdock.com`
  and the package `homepage` = `https://fanfold.free.componentdock.com`.
