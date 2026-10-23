# Hammerly — Implementation Tasks

Source design: **Webuilder** (`https://colorlib.com/wp/template/webuilder/`) → recreation name **hammerly**. Shipped at https://hammerly.free.componentdock.com.

Scope: Recreation of ColorLib **Webuilder** — a construction company website template. **Source:** https://colorlib.com/wp/template/webuilder/ **Preview:** https://preview.colorlib.com/theme/webuilder/ **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript **New name:** `hammerly` (never reuse the ColorLib source name)

## Component breakdown

Render order as composed in `apps/hammerly/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search · HAMMER

### 3. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: We are Hammerly · We Build Dreams · Browse Services

### 4. GetQuote
- No dedicated spec block — hold this band to the design notes.
- Anchors: Looking for a quality constructor? · Get a Quote

### 5. WhoWeAre
- No dedicated spec block — hold this band to the design notes.
- Anchors: Who We Are

### 6. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Services · Why Choose Our Services

### 7. Projects
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Projects · Filter by

### 8. WorkWithUs
- No dedicated spec block — hold this band to the design notes.
- Anchors: Work With Us · Get a Quote

### 9. Team
- No dedicated spec block — hold this band to the design notes.
- Anchors: Meet Our Team · Facebook · Twitter · LinkedIn

### 10. Counter
- No dedicated spec block — hold this band to the design notes.

### 11. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Client Says

### 12. LatestNews
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest News

### 13. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Facebook · Twitter · LinkedIn

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/hammerly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/hammerly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All 14 sections render in correct order; [ ] Brand color #ffcd00 used for CTAs, highlights, address bar; [ ] Top bar + services + quote area use #1e2126 dark; [ ] Counter section uses #31353d dark gray; [ ] Montserrat font loaded for headings/nav; [ ] Open Sans loaded for body text; [ ] Hero full-width bg image + dark overlay; [ ] Work area uses bg image + overlay; [ ] All section headings match original hierarchy; [ ] Footer links to componentdock.com; [ ] No ColorLib references in app code; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/hammerly` ships on https://hammerly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/hammerly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/hammerly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hammerly/public/CNAME` = `hammerly.free.componentdock.com`
  and the package `homepage` = `https://hammerly.free.componentdock.com`.
