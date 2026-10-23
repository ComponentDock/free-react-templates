# Cardwell — Implementation Tasks

Source design: **Noah** (`https://colorlib.com/wp/template/noah/`) → recreation name **cardwell**. Shipped at https://cardwell.free.componentdock.com.

Scope: A personal vCard portfolio template with sidebar, about, services, portfolio, testimonials and blog sections. Recreation of the ColorLib **Noah** template as a personal portfolio / vCard template built with React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/cardwell/src/App.tsx`:

### 1. Header
- No dedicated spec block — hold this band to the design notes.
- Anchors: banner · Cardwell home · Card

### 2. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: region · About · About Me · Cardwell · Creative Designer &amp; Developer · Download CV

### 3. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: region · Services · What I Do

### 4. Portfolio
- No dedicated spec block — hold this band to the design notes.
- Anchors: region · Portfolio · Work

### 5. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: region · Blog · Latest Posts

### 6. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: region · Testimonials · Quotes

### 7. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: contentinfo · Email for newsletter · love

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cardwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cardwell/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/cardwell` ships on https://cardwell.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cardwell/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cardwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cardwell/public/CNAME` = `cardwell.free.componentdock.com`
  and the package `homepage` = `https://cardwell.free.componentdock.com`.
