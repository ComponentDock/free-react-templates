# Velox — Implementation Tasks

Source design: **Ronin** (`https://colorlib.com/wp/template/ronin/`) → recreation name **velox**. Shipped at https://velox.free.componentdock.com.

Scope: Velox is a personal/freelancer portfolio template with a navbar, hero, welcome about, features services, projects portfolio, testimonials and blog.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/velox/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/velox/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Primary · Mobile · Velox

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: This is me · Travor James · Discover Now

### 3. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: progressbar · About Myself · Tools Expertness

### 4. Features
- No dedicated spec block — hold this band to the design notes.
- Anchors: Offerings to my clients

### 5. Projects
- No dedicated spec block — hold this band to the design notes.
- Anchors: tablist · presentation · Our Recent Completed Projects · Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. · Client Project

### 6. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Testimonials

### 7. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest Posts from Blog

### 8. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Email address · Subscribe · About Me · Component Dock · Newsletter · Stay updated with our latest trends

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/velox/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/velox/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/velox` ships on https://velox.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/velox/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/velox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/velox/public/CNAME` = `velox.free.componentdock.com`
  and the package `homepage` = `https://velox.free.componentdock.com`.
