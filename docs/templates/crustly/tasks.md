# Crustly — Implementation Tasks

Source design: **Bakery2** (`https://colorlib.com/wp/template/bakery2/`) → recreation name **crustly**. Shipped at https://crustly.free.componentdock.com.

Scope: A bakery and restaurant template with hero banner, about story, canvas and full menus, table booking and testimonials sections. Recreation of ColorLib's **Bakery2** template.

## Component breakdown

Render order as composed in `apps/crustly/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Crustly

### 2. HeroBanner
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome to Crustly · Explore Our Menu

### 3. AboutStory
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Our Story · View Full Menu

### 4. FeatureStory
- No dedicated spec block — hold this band to the design notes.
- Anchors: Honey Chocolate Pie · Our Signature Dessert · Order Now

### 5. OurMenu
- No dedicated spec block — hold this band to the design notes.
- Anchors: Explore · Our Menu

### 6. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous testimonial · Next testimonial · What Our Customers Say

### 7. BookTable
- No dedicated spec block — hold this band to the design notes.
- Anchors: Reservation · Book a Table · Thank you for your reservation! We will confirm shortly. · Select Event · Birthday Party · Wedding Reception

### 8. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Subscribe · alert · Facebook · Twitter · Dribbble · Behance

### 9. CanvasMenu
- No dedicated spec block — hold this band to the design notes.
- Anchors: Side navigation · Contact Us

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/crustly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/crustly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All 9 sections present in order; [ ] Brand color `#f42f2c` used for buttons and hover states; [ ] Playfair Display for headings, Roboto for body; [ ] Hero banner is full-width with slider; [ ] Menu section uses carousel with 3 food categories; [ ] Testimonials carousel with person image + text; [ ] Book a Table form with all fields; [ ] Footer with 4 link columns + newsletter + social icons; [ ] Footer links to https://www.componentdock.com/; [ ] No ColorLib references in app code; [ ] Placeholder images via picsum.photos; [ ] Responsive (mobile nav toggle); [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/crustly` ships on https://crustly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/crustly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/crustly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crustly/public/CNAME` = `crustly.free.componentdock.com`
  and the package `homepage` = `https://crustly.free.componentdock.com`.
