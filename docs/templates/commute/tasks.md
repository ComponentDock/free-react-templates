# Commute — Implementation Tasks

Source design: **Login Form 06** (`https://colorlib.com/wp/template/login-form-06/`) → recreation name **commute**. Shipped at https://commute.free.componentdock.com.

Scope: Commute is a login form template with a hero image, login form and footer. It recreates the ColorLib **Login Form 06** design (https://colorlib.com/wp/template/login-form-06/, preview: https://preview.colorlib.com/theme/bootstrap/login-form-06/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Component breakdown

Render order as composed in `apps/commute/src/App.tsx`:

### 1. LoginForm
- No dedicated spec block — hold this band to the design notes.
- Anchors: Login with Facebook · Login with Twitter · Login with Google

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: More templates at Component Dock

### 3. HeroImage
- No dedicated spec block — hold this band to the design notes.
- Anchors: Decorative city street image

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/commute/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/commute/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; 30 tests, 4 test files; 100% lines/functions/branches/statements coverage; Typecheck: pass; Lint: pass; Build: pass; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/commute` ships on https://commute.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/commute/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/commute/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/commute/public/CNAME` = `commute.free.componentdock.com`
  and the package `homepage` = `https://commute.free.componentdock.com`.
