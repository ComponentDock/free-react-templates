# Curriculo — Implementation Tasks

Source design: **Rezume** (`https://colorlib.com/wp/template/rezume/`) → recreation name **curriculo**. Shipped at https://curriculo.free.componentdock.com.

Scope: Curriculo is a professional resume and portfolio single-page template that showcases skills, work experience, projects, and contact information. It recreates the ColorLib "Rezume" design under a new original name with React 19, Tailwind CSS 4, and TypeScript.

## Component breakdown

Render order as composed in `apps/curriculo/src/App.tsx`:

### 1. Navbar
- The navbar SHALL provide fixed navigation with links to each section and a dark mode toggle.
- Scenario — Desktop navigation:
  - **WHEN** the user clicks a navbar link
  - **THEN** the page scrolls to the corresponding section
- Scenario — Dark mode toggle:
  - **WHEN** the user clicks the dark mode toggle
  - **THEN** the page switches between light and dark themes

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Hello, I&apos;m · Alex Morgan

### 3. Clients
- No dedicated spec block — hold this band to the design notes.
- Anchors: Trusted By · Leading Brands

### 4. Portfolio
- The portfolio section SHALL display filterable project items.
- Scenario — Filter by category:
  - **WHEN** the user clicks a filter tab
  - **THEN** only portfolio items matching that category are shown

### 5. CaseStudies
- No dedicated spec block — hold this band to the design notes.
- Anchors: Featured · Case Studies · View Case Study

### 6. Resume
- No dedicated spec block — hold this band to the design notes.
- Anchors: Resume · Education · Experience

### 7. Certifications
- No dedicated spec block — hold this band to the design notes.
- Anchors: Certifications &amp; · Awards

### 8. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: About · Hire Me · Download CV

### 9. Testimonials
- The template SHALL render all 13 sections in order: Navbar, Hero, Clients, Portfolio, Case Studies, Resume, Certifications, About, Testimonials, Services, Blog, Contact, Footer.
- Scenario — All sections are visible:
  - **WHEN** the user opens the Curriculo template
  - **THEN** the navbar, hero, clients, portfolio, case studies, resume, certifications, about, testimonials, services, blog, contact, and footer sections are visible

### 10. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Services · Learn More →

### 11. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Blog on · Medium

### 12. Contact
- The contact section SHALL include a functional contact form.
- Scenario — Form submission:
  - **WHEN** the user fills in name, email, and message and clicks Send Message
  - **THEN** a success confirmation message is displayed

### 13. Footer
- The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer branding:
  - **WHEN** the user scrolls to the footer
  - **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/curriculo/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/curriculo/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/curriculo` ships on https://curriculo.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/curriculo/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/curriculo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/curriculo/public/CNAME` = `curriculo.free.componentdock.com`
  and the package `homepage` = `https://curriculo.free.componentdock.com`.
