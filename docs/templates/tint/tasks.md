# Tint — Implementation Tasks

Source design: **Pastel** (`https://colorlib.com/wp/template/pastel/`) → recreation name **tint**. Shipped at https://tint.free.componentdock.com.

Scope: Tint is an interior design studio template with a navbar, hero, about band, portfolio, call to action, numbers, video, services and testimonials.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/tint/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/tint/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: banner · Main navigation · Tint

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Hero banner · Here&apos;s the Preview of · Interior Design Conference of 2024 · Learn more about this

### 3. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Years of Awesomeness · About Our Company · We&apos;ve been Creating · Awesomeness Since 1998 · Learn more about this

### 4. Portfolio
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Our Company · Some statistics that we want · Some statistics that we want to show our viewers

### 5. CallToAction
- No dedicated spec block — hold this band to the design notes.
- Anchors: Get a quick response from our team · Get to Know Project Estimate? · Get a quote now

### 6. Stats
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Our Company · Some statistics that we want

### 7. Video
- No dedicated spec block — hold this band to the design notes.
- Anchors: Video showcase · Play video · Here&apos;s the Preview of · Interior Design Conference of 2024

### 8. Services
- No dedicated spec block — hold this band to the design notes.

### 9. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Our Company · Some statistics that we want

### 10. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Our Company · Some statistics that we want

### 11. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Email address · Subscribe · Newsletter · You can trust us. We only send promo offers. · Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/tint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/tint/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/tint` ships on https://tint.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/tint/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/tint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tint/public/CNAME` = `tint.free.componentdock.com`
  and the package `homepage` = `https://tint.free.componentdock.com`.
