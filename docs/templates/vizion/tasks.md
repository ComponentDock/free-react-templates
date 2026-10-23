# Vizion — Implementation Tasks

Source design: **Melan** (`https://colorlib.com/wp/template/melan/`) → recreation name **vizion**. Shipped at https://vizion.free.componentdock.com.

Scope: Vizion is a single-page creative designer portfolio landing page in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/vizion/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Vizion · Contact Me

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Hello This is Vizion · Creative Designer

### 3. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Service Provided · Build brands campaigns

### 4. Portfolio
- No dedicated spec block — hold this band to the design notes.
- Anchors: Portfolios · Some of my awesome · More Folio

### 5. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: About · About me · Download CV

### 6. Stats
- No dedicated spec block — hold this band to the design notes.

### 7. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous testimonial · Next testimonial

### 8. Cta
- No dedicated spec block — hold this band to the design notes.
- Anchors: Let&apos;s discuss for a project · Start Talking

### 9. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Component Dock

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/vizion/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/vizion/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/vizion` ships on https://vizion.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/vizion/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/vizion/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vizion/public/CNAME` = `vizion.free.componentdock.com`
  and the package `homepage` = `https://vizion.free.componentdock.com`.
