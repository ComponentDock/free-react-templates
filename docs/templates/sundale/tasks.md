# Sundale — Implementation Tasks

Source design: **South** (`https://colorlib.com/wp/template/south/`) → recreation name **sundale**. Shipped at https://sundale.free.componentdock.com.

Scope: Sundial is a single-page real estate agency template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "South" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/sundale/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/sundale/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search · Toggle menu

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search for your home · Search

### 3. FeaturedProperties
- No dedicated spec block — hold this band to the design notes.
- Anchors: Featured Properties · Suspendisse dictum enim sit amet libero malesuada feugiat. · For Sale · Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.

### 4. CallToAction
- No dedicated spec block — hold this band to the design notes.
- Anchors: Are you looking for a place to rent? · Suspendisse dictum enim sit amet libero malesuada feugiat. · Search

### 5. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Client testimonials · Suspendisse dictum enim sit amet libero malesuada feugiat.

### 6. AgentSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: Jeremy Scott · Realtor

### 7. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Subscribe · About Us · Useful Links · Newsletter · Stay updated with our latest listings and news. · Contact

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/sundale/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/sundale/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/sundale` ships on https://sundale.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/sundale/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/sundale/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sundale/public/CNAME` = `sundale.free.componentdock.com`
  and the package `homepage` = `https://sundale.free.componentdock.com`.
