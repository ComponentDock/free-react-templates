# Turnkey — Implementation Tasks

Source design: **Holmes** (`https://colorlib.com/wp/template/holmes/`) → recreation name **turnkey**. Shipped at https://turnkey.free.componentdock.com.

Scope: Turnkey is a real estate template with a navbar, hero, properties, city gallery, testimonials, blog and footer. It recreates the ColorLib **Holmes** design (https://colorlib.com/wp/template/holmes/, preview: https://preview.colorlib.com/theme/holmes/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Component breakdown

Render order as composed in `apps/turnkey/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Sell / Rent Property · Login / Register · Turn

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Choose location · Property type · Number of bedrooms · Price range

### 3. Properties
- No dedicated spec block — hold this band to the design notes.
- Anchors: Properties in Various Cities · Who are in extremely love with eco friendly system.

### 4. CityGallery
- No dedicated spec block — hold this band to the design notes.
- Anchors: Find Home in Your City · It won&apos;t be a bigger problem to find one.

### 5. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Feedback from Our Real Clients · It won&apos;t be a bigger problem to find one.

### 6. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest Blog Posts · Stay updated with our latest news and insights.

### 7. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Email for newsletter · Subscribe · Facebook · Twitter · Dribbble

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/turnkey/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/turnkey/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/turnkey` ships on https://turnkey.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/turnkey/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/turnkey/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/turnkey/public/CNAME` = `turnkey.free.componentdock.com`
  and the package `homepage` = `https://turnkey.free.componentdock.com`.
