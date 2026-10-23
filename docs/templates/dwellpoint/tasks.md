# Dwellpoint — Implementation Tasks

Source design: **Sel** (`https://colorlib.com/wp/template/sel/`) → recreation name **dwellpoint**. Shipped at https://dwellpoint.free.componentdock.com.

Scope: A real estate multi-property website template with a hero banner, advanced property search, welcome section, property cards. It also includes testimonials carousel, cities showcase, features grid, client logos, and dark footer with newsletter and social links. Recreation of ColorLib SEL.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/dwellpoint/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/dwellpoint/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search · Toggle menu · Dwell

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: The joy of home owning · Find Your New Home · Learn More · Search Properties for · Price Range · Property Area

### 3. Welcome
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome to Dwellpoint Center

### 4. Properties
- No dedicated spec block — hold this band to the design notes.
- Anchors: Pool · For Sale · Our Top Rated Properties

### 5. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Client&apos;s Feedback

### 6. Cities
- No dedicated spec block — hold this band to the design notes.
- Anchors: Demandable Cities · Book Now

### 7. Features
- No dedicated spec block — hold this band to the design notes.
- Anchors: Why We Are the Best

### 8. Clients
- No dedicated spec block — hold this band to the design notes.
- Anchors: Reliable Customers

### 9. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Subscribe · About Us · Newsletter · Stay updated with our latest listings. · Instagram Feed · Follow Us

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/dwellpoint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/dwellpoint/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Header: logo + nav links + search icon + sticky behavior; [ ] Hero: background image, subtitle, headline, CTA button; [ ] Search form: 4 dropdowns, 2 range sliders, submit button; [ ] Welcome: 2-column layout, image, heading, description, 3 stat boxes; [ ] Properties: 3 cards, image, title, tag pills, price, "For Sale" button; [ ] Testimonials: left text + right carousel with avatar, quote, name, role; [ ] Cities: 4 image cards with centered button overlay; [ ] Features: 3x2 grid with icon, title, description; [ ] Client logos: horizontal carousel; [ ] Footer: 4 columns, newsletter, Instagram feed, social icons, copyright; [ ] Footer: links to Component Dock; [ ] Brand color #f5204b used consistently (buttons, active states); [ ] Roboto font applied throughout; [ ] No ColorLib references in app code; [ ] Placeholder images via picsum.photos; [ ] lucide-react icons replacing themify/linericon icons; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/dwellpoint` ships on https://dwellpoint.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/dwellpoint/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dwellpoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dwellpoint/public/CNAME` = `dwellpoint.free.componentdock.com`
  and the package `homepage` = `https://dwellpoint.free.componentdock.com`.
