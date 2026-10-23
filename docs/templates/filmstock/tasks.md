# Filmstock — Implementation Tasks

Source design: **Photosen** (`https://colorlib.com/wp/template/photosen/`) → recreation name **filmstock**. Shipped at https://filmstock.free.componentdock.com.

Scope: Recreation of ColorLib **Photosen** — a photography portfolio template with a full-bleed image grid. Each category card shows a grayscale photo that transitions to color on hover, with the category name and a "More Photos" CTA overlaid in the center.

## Component breakdown

Render order as composed in `apps/filmstock/src/App.tsx`:

### 1. Navbar
- Filmstock SHALL provide a complete photography portfolio template with navbar, gallery grid, and footer.

### 2. Gallery
- Filmstock SHALL provide a complete photography portfolio template with navbar, gallery grid, and footer.

### 3. Footer
- Filmstock SHALL provide a complete photography portfolio template with navbar, gallery grid, and footer.

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/filmstock/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/filmstock/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Fonts: Josefin Sans loaded via Google Fonts; [ ] Navbar: transparent/dark background, white logo, semi-transparent links; [ ] Gallery: 3-column grid (col-lg-4), 9 cards; [ ] Image cards: grayscale default, color on hover, overlay transition; [ ] Buttons: white outline, uppercase, correct sizing; [ ] Footer: dark background (#333333), copyright text; [ ] Footer: links to Component Dock (not ColorLib); [ ] Mobile: hamburger menu, stacked grid; [ ] No ColorLib references in app code; [ ] 100% test coverage; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/filmstock` ships on https://filmstock.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/filmstock/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/filmstock/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/filmstock/public/CNAME` = `filmstock.free.componentdock.com`
  and the package `homepage` = `https://filmstock.free.componentdock.com`.
