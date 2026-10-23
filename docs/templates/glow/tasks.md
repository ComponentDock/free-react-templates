# Glow — Implementation Tasks

Source design: **Colorlib Error 404 8** (`https://colorlib.com/wp/template/colorlib-error-404-8/`) → recreation name **glow**. Shipped at https://glow.free.componentdock.com.

Scope: Glow is a single-page 404 error page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Colorlib Error 404 V8" error page design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/glow/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "Glow", a "Home" link, and a dark-mode toggle button.
- Scenario — Navbar content:
  - **GIVEN** the Glow page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the site name "Glow" and a "Home" link pointing to the page root
  - **AND** the navbar SHALL show a dark-mode toggle button
- Scenario — Dark mode toggle:
  - **GIVEN** the page is rendered
  - **WHEN** the user presses the dark-mode toggle
  - **THEN** the `.dark` class SHALL be toggled on the document root element
  - **AND** the toggle SHALL reflect the current mode

### 2. ErrorSection
- The system SHALL render a centered error section on a dark background with a neon-outline "404" display (amber "0"), a description paragraph, and a "home page" link to the page root.
- Scenario — Error content:
  - **GIVEN** the page is rendered
  - **WHEN** the error section is displayed
  - **THEN** it SHALL contain a level-1 heading whose text is "404"
  - **AND** the heading SHALL contain a span with the text "0" carrying the amber glow styling
  - **AND** it SHALL show the description paragraph about the page being removed or unavailable
  - **AND** it SHALL show a "home page" link pointing to the page root with an outlined style
- Scenario — Home link hover treatment:
  - **GIVEN** the error section is displayed
  - **WHEN** the "home page" link is styled
  - **THEN** the link SHALL use the amber brand color on hover

### 3. Footer
- The system SHALL render a minimal footer with the site name, a short tagline, and social links.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show the site name "Glow" and a tagline
  - **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Cross-cutting requirements

- **Page composition** — The system SHALL compose all sections in a single page with a main landmark and a document title.
  - Scenario — Full page render: **GIVEN** the Glow app is rendered; **WHEN** the page loads; **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark; **AND** the document title SHALL be "Glow — Error Page Template"
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/glow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/glow/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/glow` ships on https://glow.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/glow/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/glow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/glow/public/CNAME` = `glow.free.componentdock.com`
  and the package `homepage` = `https://glow.free.componentdock.com`.
