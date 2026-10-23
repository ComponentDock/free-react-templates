# Keyforge — Implementation Tasks

Source design: **Locksmith** (`https://colorlib.com/wp/template/locksmith/`) → recreation name **keyforge**. Shipped at https://keyforge.free.componentdock.com.

Scope: KeyForge is a locksmith services landing page with a hero slider, a quote request form, a services grid, an about band and testimonials.

## Component breakdown

Render order as composed in `apps/keyforge/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle menu · KeyForge

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Hero slider · Previous slide · Next slide

### 3. QuoteForm
- No dedicated spec block — hold this band to the design notes.
- Anchors: Name · Phone · Services

### 4. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Services · Services We Offer

### 5. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Why Choose Us · Professional Security You Can Trust

### 6. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Testimonials · What Our Clients Say

### 7. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: contentinfo · Back to top · About KeyForge · Quick Links · Our Services · Contact Us

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/keyforge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/keyforge/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/keyforge` ships on https://keyforge.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/keyforge/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/keyforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/keyforge/public/CNAME` = `keyforge.free.componentdock.com`
  and the package `homepage` = `https://keyforge.free.componentdock.com`.
