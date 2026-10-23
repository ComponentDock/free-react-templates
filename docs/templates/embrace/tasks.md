# Embrace — Implementation Tasks

Source design: **Charity** (`https://colorlib.com/wp/template/charity/`) → recreation name **embrace**. Shipped at https://embrace.free.componentdock.com.

Scope: Embrace is a charity & donation template. It recreates the ColorLib **Charity** design (https://colorlib.com/wp/template/charity/, preview: https://preview.colorlib.com/theme/charity/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Component breakdown

Render order as composed in `apps/embrace/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle navigation · Embrace · Donate

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Donate · Together we can make a difference · Donate Now

### 3. Causes
- No dedicated spec block — hold this band to the design notes.
- Anchors: Raised: · Goal: · Donate Now! · Most Popular Causes · See all causes

### 4. Donors
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest Donations · Donated

### 5. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous testimonial · Next testimonial · What People Say

### 6. SuccessStories
- No dedicated spec block — hold this band to the design notes.
- Anchors: Success Stories · Read More

### 7. NewsAboutGallery
- No dedicated spec block — hold this band to the design notes.
- Anchors: News · View All News · About Us · Learn More · Gallery · View All Gallery

### 8. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Us · Contact Info · Donation · Donate Now · Component Dock · Back to top

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/embrace/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/embrace/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/embrace` ships on https://embrace.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/embrace/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/embrace/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/embrace/public/CNAME` = `embrace.free.componentdock.com`
  and the package `homepage` = `https://embrace.free.componentdock.com`.
