# Liber — Implementation Tasks

Source design: **Book** (`https://colorlib.com/wp/template/book/`) → recreation name **liber**. Shipped at https://liber.free.componentdock.com.

Scope: Liber is an author book landing template with a navbar, hero banner, about band, feature cards, counters, pricing, courses and app download. It recreates the ColorLib **Book** design (https://colorlib.com/wp/template/book/, preview: https://preview.colorlib.com/theme/book/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Component breakdown

Render order as composed in `apps/liber/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Main navigation · Mobile navigation · Liber

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Author: Travor James · New Adventure · Buy Now for $9.99

### 3. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Author signature · Dr. Travor James

### 4. Features
- No dedicated spec block — hold this band to the design notes.
- Anchors: Some Features that Made us Unique · What sets our work apart from the rest.

### 5. Counters
- No dedicated spec block — hold this band to the design notes.

### 6. Pricing
- No dedicated spec block — hold this band to the design notes.
- Anchors: Purchase Whatever You Want · Choose the format that suits you best. · Purchase Now

### 7. Courses
- No dedicated spec block — hold this band to the design notes.
- Anchors: Top Courses That Are Open for Students · Learn the craft from an award-winning author. · For Sale · View Course

### 8. AppDownload
- No dedicated spec block — hold this band to the design notes.
- Anchors: Download Our App for All Platforms · Available on · App Store · Play Store

### 9. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: What Our Readers Say About Us · Real feedback from our beloved community.

### 10. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: alert · Liber · Quick Links · Newsletter · Stay updated with our latest releases. · Thanks for subscribing!

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/liber/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/liber/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/liber` ships on https://liber.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/liber/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/liber/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/liber/public/CNAME` = `liber.free.componentdock.com`
  and the package `homepage` = `https://liber.free.componentdock.com`.
