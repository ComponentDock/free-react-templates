# Wristly — Implementation Tasks

Source design: **Watch** (`https://colorlib.com/wp/template/watch/`) → recreation name **wristly**. Shipped at https://wristly.free.componentdock.com.

Scope: Wristly is a smartwatch product landing page template in the free-react-templates monorepo.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/wristly/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/wristly/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Main navigation · Mobile navigation · Wristly

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Feel the Future · Shop Now

### 3. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Brand new tech to blow your mind · We&#39;ve made a life that will change you · We are here to listen from you and deliver excellence. · Get Started

### 4. Features
- No dedicated spec block — hold this band to the design notes.
- Anchors: Top Features · What makes our smartwatch stand out

### 5. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Some Features That Made Us Unique · Who are in extremely love with eco friendly system.

### 6. Products
- No dedicated spec block — hold this band to the design notes.
- Anchors: Unique Features · Who are in extremely love with eco friendly system. · Pre Order

### 7. Reviews
- No dedicated spec block — hold this band to the design notes.
- Anchors: Some Features That Made Us Unique · Who are in extremely love with eco friendly system.

### 8. Faq
- No dedicated spec block — hold this band to the design notes.
- Anchors: Frequently Asked Questions · Who are in extremely love with eco friendly system.

### 9. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Email for newsletter · About Us · Component Dock · Newsletter · Stay updated with our latest · Subscribe

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/wristly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/wristly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] `apps/wristly` exists; package `@free-react-templates/wristly`; [ ] `public/CNAME` = `wristly.free.componentdock.com`; [ ] `homepage` = `https://wristly.free.componentdock.com`; [ ] No `colorlib.com` strings in `apps/wristly`; [ ] Footer links "Component Dock" → https://www.componentdock.com/; [ ] 100% coverage via Vitest + Testing Library; [ ] `scripts/verify-app.sh wristly` passes; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/wristly` ships on https://wristly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/wristly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/wristly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wristly/public/CNAME` = `wristly.free.componentdock.com`
  and the package `homepage` = `https://wristly.free.componentdock.com`.
