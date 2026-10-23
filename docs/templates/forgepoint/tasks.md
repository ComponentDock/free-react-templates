# Forgepoint — Implementation Tasks

Source design: **Inds** (`https://colorlib.com/wp/template/inds/`) → recreation name **forgepoint**. Shipped at https://forgepoint.free.componentdock.com.

Scope: An Industrial / Manufacturing template with header / nav, hero / slider, services, safe industry solutions, gallery / works and team sections. Recreation of the ColorLib **Inds** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/forgepoint/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/forgepoint/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: toggle menu · mobile · Mon - Fri: 9:00 - 19:00 / Closed on Weekends · ForgePoint · Get A Quote

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Industrial Solutions! · Our Services

### 3. Services
- No dedicated spec block — hold this band to the design notes.

### 4. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Safe Industrial Solutions That Saves our Valuable Time and Money! · Our Services · Our Mission · Quis ipsum suspendisse ultrices gravidae Risus commodo.

### 5. Gallery
- No dedicated spec block — hold this band to the design notes.
- Anchors: Floride Chemicals Factory · Read more

### 6. Team
- No dedicated spec block — hold this band to the design notes.
- Anchors: social facebook · social twitter · social globe

### 7. Testimonials
- No dedicated spec block — hold this band to the design notes.

### 8. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Read more

### 9. CTA
- No dedicated spec block — hold this band to the design notes.
- Anchors: Want To Work · With Us? Hit The Button. · Let&apos;s Work Together

### 10. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: contentinfo · Subscribe · social facebook · social twitter · social globe

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/forgepoint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/forgepoint/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All sections render in correct order: Header → Hero Slider → Services → Safe Industry → Gallery → Team → Testimonials → Blog → CTA → Footer; [ ] Barlow + Roboto fonts loaded via Google Fonts `<link>` in index.html; [ ] Primary orange `#f27420` used for CTA buttons, accent elements; [ ] Dark navy `#021a47` and `#00163e` used for dark backgrounds; [ ] Text color `#0b1c39` for primary headings; [ ] Link color `#1696e7` for hyperlinks; [ ] Gold accent `#dca73a` for testimonial accents; [ ] Hero slider with auto-advance and navigation controls; [ ] Gallery grid with hover overlays; [ ] Team cards with hover social icons; [ ] Responsive: hamburger nav on mobile, stacked layouts on small screens; [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock"); [ ] No references to ColorLib in app source (provenance only in spec); [ ] Placeholder images via `https://picsum.photos/seed/forgepoint-<n>/<w>/<h>`; [ ] 100% test coverage (lines, functions, branches, statements); [ ] Typecheck passes (`npx tsc --noEmit`); [ ] Lint passes (`npx oxlint src/`); [ ] Build succeeds (`npx vite build`); [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/forgepoint` ships on https://forgepoint.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/forgepoint/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/forgepoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/forgepoint/public/CNAME` = `forgepoint.free.componentdock.com`
  and the package `homepage` = `https://forgepoint.free.componentdock.com`.
