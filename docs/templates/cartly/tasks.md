# Cartly — Implementation Tasks

Source design: **Eiser** (`https://colorlib.com/wp/template/eiser/`) → recreation name **cartly**. Shipped at https://cartly.free.componentdock.com.

Scope: Cartly is an ecommerce landing page with a top bar, hero banner, featured and new product grids, an offer banner and a newsletter band. It recreates the ColorLib **Eiser** design (https://colorlib.com/wp/template/eiser/, preview: https://preview.colorlib.com/theme/eiser/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/cartly/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/cartly/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Primary · Mobile · Cartly

### 3. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Men Collection · Show Your · Personal · Style · Fowl saw dry which a above together place. · View Collection

### 4. Features
- No dedicated spec block — hold this band to the design notes.

### 5. FeaturedProducts
- No dedicated spec block — hold this band to the design notes.
- Anchors: Featured Product · Bring called seed first of third give itself now ment

### 6. OfferBanner
- No dedicated spec block — hold this band to the design notes.
- Anchors: All Men's Collection · Discover Now · Limited Time Offer

### 7. NewProducts
- No dedicated spec block — hold this band to the design notes.
- Anchors: New Products · Bring called seed first of third give itself now ment · Collection of 2024 · Men's Summer T-Shirt · Add to Cart

### 8. BlogSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest Blog · View More →

### 9. Newsletter
- No dedicated spec block — hold this band to the design notes.
- Anchors: Newsletter signup · Subscribe · Subscribe to Our Newsletter · Get weekly updates on new arrivals and exclusive offers. · Email address

### 10. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Cartly · Follow Us · Component Dock · Privacy Policy · Terms of Service

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cartly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cartly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; Original uses Bootstrap grid → recreated with Tailwind grid; Original uses owl-carousel for latest products → simplified to static grid; Original uses jQuery for interactions → pure React state; All images use picsum.photos seeded placeholders; Icons from lucide-react (replacing flaticon/themify originals); Social icons as inline SVGs (brand icons removed from lucide-react); [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/cartly` ships on https://cartly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cartly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cartly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cartly/public/CNAME` = `cartly.free.componentdock.com`
  and the package `homepage` = `https://cartly.free.componentdock.com`.
