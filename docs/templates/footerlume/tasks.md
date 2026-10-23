# Footerlume — Implementation Tasks

Source design: **Bootstrap Footer 17** (`https://colorlib.com/wp/template/bootstrap-footer-17/`) → recreation name **footerlume**. Shipped at https://footerlume.free.componentdock.com.

Scope: FooterLume is a minimal dark Bootstrap footer template — a near-black footer pairing a `Menu` navigation row with a row of circular social icons above a copyright bar credited to Component Dock.

## Component breakdown

Render order as composed in `apps/footerlume/src/App.tsx`:

### 1. Footer
- The footer SHALL render one navigation block — the `Menu` heading over an inline list of `navLinks` — beside a row of circular social icon links (Facebook, Twitter/X, LinkedIn, Instagram, YouTube), each with an `aria-label` and opening in a new tab.
- Scenario — Visitor reads the footer:
  - **WHEN** the visitor scrolls into the footer
  - **THEN** a `contentinfo` landmark is present
  - **AND** the `Menu` heading is visible with its navigation links
  - **AND** every social link carries an accessible name (Facebook, …)

### Cross-cutting requirements

- **Demo Framing** — The page SHALL show a 60vh white area containing a centred light-grey `Footer #17`-style placeholder heading, with the dark footer pinned below.
  - Scenario — Visitor opens the page: **WHEN** the page loads; **THEN** a single h1 is visible in the white area; **AND** the dark footer fills the width below it; **AND** the document title is `FooterLume — Footer Template`
- **Component Dock Credit And Copyright** — The copyright bar SHALL read `© <year> All rights reserved. Made with Component Dock` and that credit SHALL be a link to `https://www.componentdock.com/`.
  - Scenario — Visitor looks for more templates: **WHEN** the visitor reads the copyright bar; **THEN** a link named `Component Dock` points at; **AND** the line contains `All rights reserved` and the current year
- **Link Semantics** — Every footer link SHALL be a real anchor with a resolvable `href` and an accessible name, so the footer is usable by keyboard and screen readers.
  - Scenario — Visitor tabs through the footer: **WHEN** the visitor tabs from the first footer link; **THEN** focus visits each link in DOM order and each exposes a name
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/footerlume/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/footerlume/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/footerlume`); [ ] Lint passes (`npm run lint`); [ ] Vitest coverage is 100% for `apps/footerlume`; [ ] Build succeeds (`npm run build --workspace @free-react-templates/footerlume`); [ ] Footer links to Component Dock; [ ] `public/CNAME` is `footerlume.free.componentdock.com` and `homepage` matches; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/footerlume` ships on https://footerlume.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/footerlume/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/footerlume/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/footerlume/public/CNAME` = `footerlume.free.componentdock.com`
  and the package `homepage` = `https://footerlume.free.componentdock.com`.
