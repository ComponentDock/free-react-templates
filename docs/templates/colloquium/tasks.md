# Colloquium — Implementation Tasks

Source design: **Convention** (`https://colorlib.com/wp/template/convention/`) → recreation name **colloquium**. Shipped at https://colloquium.free.componentdock.com.

Scope: Colloquium is a conference & event website template. It recreates the ColorLib **Convention** design (https://colorlib.com/wp/template/convention/, preview: https://preview.colorlib.com/theme/convention/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/colloquium/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/colloquium/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Facebook · Twitter · Instagram · LinkedIn

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Colloquium · Buy Ticket

### 3. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Hurry Up! Don&#39;t Waste Time · Biggest Developer Conference 2025 · Days · Hours · Minutes · Seconds

### 4. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Years of Experience · Welcome to Colloquium · We Make Your Event Memorable &amp; Successful

### 5. CounterStats
- No dedicated spec block — hold this band to the design notes.

### 6. Schedule
- No dedicated spec block — hold this band to the design notes.
- Anchors: Event Schedule · Conference Schedule

### 7. Speakers
- No dedicated spec block — hold this band to the design notes.
- Anchors: Facebook · Twitter · Instagram · LinkedIn

### 8. Gallery
- No dedicated spec block — hold this band to the design notes.
- Anchors: Event Gallery · Our Event Gallery

### 9. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous testimonial · Next testimonial · Testimonials · What People Say

### 10. Pricing
- No dedicated spec block — hold this band to the design notes.
- Anchors: Pricing Plan · Choose Your Plan · Popular · Get Started

### 11. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest News · From Our Blog

### 12. CTA
- No dedicated spec block — hold this band to the design notes.
- Anchors: First Name · Last Name · Phone Number · Select Price

### 13. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Facebook · Twitter · Instagram · LinkedIn

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/colloquium/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/colloquium/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/colloquium` ships on https://colloquium.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/colloquium/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/colloquium/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/colloquium/public/CNAME` = `colloquium.free.componentdock.com`
  and the package `homepage` = `https://colloquium.free.componentdock.com`.
