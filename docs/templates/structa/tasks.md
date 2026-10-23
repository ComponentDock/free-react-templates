# Structa — Implementation Tasks

Source design: **Consto** (`https://colorlib.com/wp/template/consto/`) → recreation name **structa**. Shipped at https://structa.free.componentdock.com.

Scope: Structa is a construction company template with a navbar, hero, about band, services, projects, testimonials, contact and footer. It recreates the ColorLib **Consto** design (https://colorlib.com/wp/template/consto/, preview: https://preview.colorlib.com/theme/consto/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Component breakdown

Render order as composed in `apps/structa/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: banner · Primary · Mobile

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Hero · Experienced Construction Solution · Our Services · Explore Our Latest Projects · Discover our portfolio of completed construction projects. · Explore Now

### 3. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: About · Complete solution of large projects · Learn More

### 4. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Services · Services we provide · Get Free Quote

### 5. Projects
- No dedicated spec block — hold this band to the design notes.
- Anchors: Projects · Projects we have Done · Take a look at some of our most recent and successful construction projects. · View Project

### 6. MoreCTA
- No dedicated spec block — hold this band to the design notes.
- Anchors: More projects CTA · Want to build something great? · Let's discuss your next construction project and bring your vision to life. · Contact Us

### 7. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Testimonials · Previous testimonial · Next testimonial

### 8. Contact
- No dedicated spec block — hold this band to the design notes.
- Anchors: Contact · alert · Thank you! · Your message has been sent. We will get back to you shortly. · Contact Us · Have a project in mind? Get in touch with us.

### 9. BannerCTA
- No dedicated spec block — hold this band to the design notes.
- Anchors: Call to action · Any help needed? · Contact Us

### 10. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: contentinfo · alert · Structa · Navigation · Services · Newsletter

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/structa/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/structa/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/structa` ships on https://structa.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/structa/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/structa/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/structa/public/CNAME` = `structa.free.componentdock.com`
  and the package `homepage` = `https://structa.free.componentdock.com`.
