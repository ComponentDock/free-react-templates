# Timber — Implementation Tasks

Source design: **Balay** (`https://colorlib.com/wp/template/balay/`) → recreation name **timber**. Shipped at https://timber.free.componentdock.com.

Scope: Timber is an interior design / construction studio template with a navbar, hero, about welcome, services, projects counter and portfolio gallery.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/timber/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/timber/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: navigation · Main navigation · Toggle navigation

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: An Inspiring Built Space · Where design meets craftsmanship · View Projects

### 3. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome

### 4. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: What I do?

### 5. ProjectCounters
- No dedicated spec block — hold this band to the design notes.

### 6. Portfolio
- No dedicated spec block — hold this band to the design notes.
- Anchors: My Work

### 7. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Read Recent Blog

### 8. Contact
- No dedicated spec block — hold this band to the design notes.
- Anchors: Contact form · Get in Touch! · We would love to hear from you. Reach out to us for any inquiries about your next project. · Name · Email · Message

### 9. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: contentinfo · Timber · Quick Links · Contact Info · Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/timber/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/timber/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/timber` ships on https://timber.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/timber/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/timber/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/timber/public/CNAME` = `timber.free.componentdock.com`
  and the package `homepage` = `https://timber.free.componentdock.com`.
