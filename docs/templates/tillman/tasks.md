# Tillman — Implementation Tasks

Source design: **Agrica** (`https://colorlib.com/wp/template/agrica/`) → recreation name **tillman**. Shipped at https://tillman.free.componentdock.com.

Scope: Tillman is an agriculture/farm landing page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Agrica" agriculture website template (see TEMPLATES.md, line 883), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/tillman/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Open menu · Tillman

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Agricultural solution · Explore Our Services

### 3. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: More About Us

### 4. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Services we provide · Get the Service

### 5. Stats
- No dedicated spec block — hold this band to the design notes.

### 6. WhyChooseUs
- No dedicated spec block — hold this band to the design notes.
- Anchors: Why you should · Best Plants · Award Winning

### 7. Video
- No dedicated spec block — hold this band to the design notes.
- Anchors: Play video

### 8. Tips
- No dedicated spec block — hold this band to the design notes.
- Anchors: Tips from experts · Read More · More Tips

### 9. Contact
- No dedicated spec block — hold this band to the design notes.
- Anchors: Need any help? · Drop Your Message

### 10. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Twitter · Facebook · Pinterest

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/tillman/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/tillman/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/tillman` ships on https://tillman.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/tillman/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/tillman/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tillman/public/CNAME` = `tillman.free.componentdock.com`
  and the package `homepage` = `https://tillman.free.componentdock.com`.
