# Fotoroll — Implementation Tasks

## Token re-read (2026-10-24s) — superseded values below

This task list was written before the live sheet was re-measured. Where it names
design colours or fonts, use `openspec/specs/template-fotoroll/spec.md`
§Design tokens and `design-notes.md` §Token re-read instead — the summary:

lead **spring green `#30df7a`** (5 decls — hover states only); typeface **Work Sans**; ink `#191919`; the mint `#4ecdc4` and Montserrat are both absent from the sheet.

Source design: **Photography 2** (`https://colorlib.com/wp/template/photography-2/`) → recreation name **fotoroll**. Shipped at https://fotoroll.free.componentdock.com.

Scope: Fotoroll is a photography portfolio template with a navbar, hero, portfolio, blog and footer. It recreates the ColorLib **Photography 2** design (https://colorlib.com/wp/template/photography-2/, preview: https://preview.colorlib.com/theme/photography2/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/fotoroll/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/fotoroll/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Main · navigation · Mobile

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous slide · Next slide · View Projects

### 3. Portfolio
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Portfolio

### 4. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest from the Blog

### 5. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Facebook · Twitter · Instagram · Dribbble

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/fotoroll/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/fotoroll/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; ⚠️ Pointer status re-probed 2026-10-13: the slug-only path (`https://preview.colorlib.com/theme/photography-2/`) 404s, but the live demo is the alias directory `https://preview.colorlib.com/theme/photography2/` (HTTP 200, 6,928 B); Analysis based on ColorLib screenshot: `photography-2-free-template-1.jpg`; Full-width hero slider is the dominant feature — the page is essentially a slider with a thin footer; White navbar with green accent (`#4ecdc4` approximate), "Foto." brand name; Slider has dark overlay, large white text, "VIEW PROJECTS" underline CTA; Arrow navigation is circular dark buttons on left/right edges; Footer: copyright + "made with ♥ by Colorlib" + "SHOW THUMBNAIL" + social icons; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/fotoroll` ships on https://fotoroll.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/fotoroll/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/fotoroll/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fotoroll/public/CNAME` = `fotoroll.free.componentdock.com`
  and the package `homepage` = `https://fotoroll.free.componentdock.com`.
