# Innovex — Implementation Tasks

Source design: **Eroo** (`https://colorlib.com/wp/template/eroo/`) → recreation name **innovex**. Shipped at https://innovex.free.componentdock.com.

Scope: Innovex is a business landing page with a top bar, navbar, hero, services, about band, stat counters, team and footer. It recreates the ColorLib **Eroo** design (https://colorlib.com/wp/template/eroo/, preview: https://preview.colorlib.com/theme/eroo/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/innovex/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/innovex/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Facebook · Twitter · Instagram · Dribbble

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: banner · Innovex

### 3. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome to Innovex · Digital Innovation Company that Creates Solution · Get Started · View Portfolio

### 4. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: We Shape The · Perfect Solutions

### 5. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome to Innovex · Highest · Creative Standards · Years Of · Experienced

### 6. Counter
- No dedicated spec block — hold this band to the design notes.

### 7. FAQ
- No dedicated spec block — hold this band to the design notes.
- Anchors: We Are Very · Experienced &amp; Professionals · Frequently Asked Question · Frequently · Ask Question

### 8. Team
- No dedicated spec block — hold this band to the design notes.
- Anchors: Meet The Team · Professional · Creative Team Members · View All Members

### 9. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Email for newsletter · Subscribe · Innovex · Company · Services · Contact

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/innovex/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/innovex/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/innovex` ships on https://innovex.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/innovex/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/innovex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/innovex/public/CNAME` = `innovex.free.componentdock.com`
  and the package `homepage` = `https://innovex.free.componentdock.com`.
