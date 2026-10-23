# Flank — Implementation Tasks

Source design: **Bootstrap Sidebar 03** (`https://colorlib.com/wp/template/bootstrap-sidebar-03/`) → recreation name **flank**. Shipped at https://flank.free.componentdock.com.

Scope: A Sidebar Navigation template with hamburger and main sections. Recreation of ColorLib **Bootstrap Sidebar 03** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/flank/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/flank/src/App.tsx`:

### 1. Sidebar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Sidebar navigation · Email address for newsletter · Toggle sidebar

### 2. MainContent
- No dedicated spec block — hold this band to the design notes.
- Anchors: Sidebar Navigation · A clean sidebar template

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/flank/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/flank/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Sidebar: fixed left position, navy (#1B2A4A) background, full viewport height; [ ] Logo: "Flank" text, white, bold, large font at top of sidebar; [ ] Navigation: Home, About, Services, Portfolio, Blog, Contact — white text with icons, vertical stack; [ ] Newsletter: "Stay Updated" heading, email input + "Subscribe" button with blue accent; [ ] Copyright: small white text at bottom of sidebar, links to componentdock.com; [ ] Hamburger: navy circular button, toggles sidebar on mobile; [ ] Main content: white background, "Sidebar Navigation" heading, 4 content cards in 2x2 grid; [ ] Content cards: icon + title + description in each card; [ ] Responsive: sidebar collapses on mobile, hamburger toggles visibility; [ ] Footer links to `https://www.componentdock.com/`; [ ] `public/CNAME` contains `flank.free.componentdock.com`; [ ] Package name `@free-react-templates/flank`, homepage `https://flank.free.componentdock.com`; [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md); [ ] Global font: Poppins via Google Fonts; [ ] Brand color: `#1B2A4A` in Tailwind theme; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/flank` ships on https://flank.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/flank/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/flank/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/flank/public/CNAME` = `flank.free.componentdock.com`
  and the package `homepage` = `https://flank.free.componentdock.com`.
