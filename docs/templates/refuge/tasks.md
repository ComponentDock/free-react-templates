# Refuge — Implementation Tasks

Source design: **Funder** (`https://colorlib.com/wp/template/funder/`) → recreation name **refuge**. Shipped at https://refuge.free.componentdock.com.

Scope: Refuge is a business landing page with a navbar, hero, products, about band, split feature, feature cards, impact, founders, testimonials and footer.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/refuge/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/refuge/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle menu · REFUGE · Get A Quote

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous slide · Next slide

### 3. Products
- No dedicated spec block — hold this band to the design notes.
- Anchors: Products &amp; Services · Insurance Coverage · Learn More

### 4. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: We Are Trusted Agency Company

### 5. SplitFeature
- No dedicated spec block — hold this band to the design notes.

### 6. Features
- No dedicated spec block — hold this band to the design notes.
- Anchors: Outstanding Services · Why Choose Us

### 7. Impact
- No dedicated spec block — hold this band to the design notes.
- Anchors: Thousands of Houses Damage Each Year · Insure Yours Now

### 8. Founders
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Founders

### 9. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous testimonial · Next testimonial · Testimonies

### 10. CtaBanner
- No dedicated spec block — hold this band to the design notes.
- Anchors: Small Business Insurance Company · Contact Us

### 11. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: About · Read More · Quick Menu · Insurance · Social · Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/refuge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/refuge/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/refuge` ships on https://refuge.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/refuge/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/refuge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/refuge/public/CNAME` = `refuge.free.componentdock.com`
  and the package `homepage` = `https://refuge.free.componentdock.com`.
