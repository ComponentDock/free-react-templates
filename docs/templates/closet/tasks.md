# Closet — Implementation Tasks

Source design: **Little Closet** (`https://colorlib.com/wp/template/little-closet/`) → recreation name **closet**. Shipped at https://closet.free.componentdock.com.

Scope: Closet is a fashion boutique template with a navbar, hero, popular products, newsletter and footer. It recreates the ColorLib **Little Closet** design (https://colorlib.com/wp/template/little-closet/, preview: https://preview.colorlib.com/theme/littlecloset/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/closet/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/closet/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle menu · Search items · User account · Shopping cart

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Hero slider · Previous slide · Next slide

### 3. PopularProducts
- No dedicated spec block — hold this band to the design notes.
- Anchors: Popular products · Popular on Closet

### 4. Newsletter
- No dedicated spec block — hold this band to the design notes.
- Anchors: Newsletter · Email address · Sign Up for a Newsletter · Subscribe

### 5. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: contentinfo · Back to top · About Closet · Customer Care · Information · Contact Us

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/closet/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/closet/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; No screenshot fallback needed: the slug-only preview path 404s, but the live demo is the alias directory `/theme/littlecloset/` (HTTP 200 re-probed 2026-10-13), so the design sheet is authoritative; Placeholder images via picsum.photos seeded URLs; No ColorLib assets copied; Brand icons via inline SVG (lucide-react removed brand icons); [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/closet` ships on https://closet.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/closet/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/closet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/closet/public/CNAME` = `closet.free.componentdock.com`
  and the package `homepage` = `https://closet.free.componentdock.com`.
