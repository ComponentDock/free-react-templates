# Stitchly — Implementation Tasks

Source design: **Tailor** (`https://colorlib.com/wp/template/tailor/`) → recreation name **stitchly**. Shipped at https://stitchly.free.componentdock.com.

Scope: Stitchly is a tailor & sewing services template with a navbar, hero, offers, about band, services, video, testimonial, instagram and footer.

## Component breakdown

Render order as composed in `apps/stitchly/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Primary · Toggle dark mode · Mobile

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: We make clothes that suit you · Our Services

### 3. Offers
- No dedicated spec block — hold this band to the design notes.

### 4. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: About our tailor house · More About Us

### 5. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Why use our service?

### 6. Video
- No dedicated spec block — hold this band to the design notes.
- Anchors: Watch our tailor story on YouTube · Watch Our Story

### 7. Testimonial
- No dedicated spec block — hold this band to the design notes.
- Anchors: Robert Brown · Satisfied Client

### 8. Instagram
- No dedicated spec block — hold this band to the design notes.
- Anchors: Follow on Instagram · Follow us on Instagram · Stay inspired with our latest tailoring projects and style tips.

### 9. CtaBanner
- No dedicated spec block — hold this band to the design notes.
- Anchors: Book Your Appointment · Schedule Now

### 10. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Stitchly · Quick Links · Our Services · Opening Hours · Component Dock

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/stitchly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/stitchly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/stitchly` ships on https://stitchly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/stitchly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/stitchly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stitchly/public/CNAME` = `stitchly.free.componentdock.com`
  and the package `homepage` = `https://stitchly.free.componentdock.com`.
