# Byteops — Implementation Tasks

Source design: **Digilab** (`https://colorlib.com/wp/template/digilab/`) → recreation name **byteops**. Shipped at https://byteops.free.componentdock.com.

Scope: Recreate ColorLib "DigiLab" as a React 19 + Vite + Tailwind CSS 4 + TypeScript template under the name "ByteOps".

## Component breakdown

Render order as composed in `apps/byteops/src/App.tsx`:

### 1. Navbar
- The navbar shows all section links on desktop and a toggleable mobile menu.
- Scenario — Desktop navigation:
  - **WHEN** the page renders
  - **THEN** the Primary navigation contains at least 7 section links
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the "Open menu" button
  - **THEN** the mobile menu becomes visible and the button changes to "Close menu"
  - **WHEN** the user clicks the "Close menu" button
  - **THEN** the mobile menu hides and the button changes to "Open menu"
- Scenario — Mobile menu closes on link click:
  - **WHEN** the mobile menu is open and the user clicks a nav link
  - **THEN** the mobile menu closes
- Scenario — Mobile menu closes on CTA click:
  - **WHEN** the mobile menu is open and the user clicks "Get in touch"
  - **THEN** the mobile menu closes

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome to ByteOps · Small Details Make A Big · Impression · Get in touch

### 3. Services
- The services section shows 7 service tabs with switchable content panels.
- Scenario — Default tab:
  - **WHEN** the page loads
  - **THEN** "Business Strategy" content is visible
- Scenario — Tab switching:
  - **WHEN** the user clicks the "Research" tab
  - **THEN** the "Research" heading is visible
  - **WHEN** the user clicks the "UI Design" tab
  - **THEN** the "UI Design" heading is visible

### 4. Features
- No dedicated spec block — hold this band to the design notes.

### 5. Projects
- No dedicated spec block — hold this band to the design notes.
- Anchors: Accomplishments · Our Projects · A showcase of our recent work across web design, development, and digital strategy.

### 6. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome to ByteOps · We Are Digital Agency · Years of experience

### 7. Team
- The team section shows 4 staff members with names and positions.
- Scenario — Render team:
  - **WHEN** the page loads
  - **THEN** Lloyd Wilson, Rachel Parker, Ian Smith, and Alicia Henderson are visible

### 8. Stats
- The stats section displays 4 numeric values.
- Scenario — Render stats:
  - **WHEN** the page loads
  - **THEN** the values 500, 850, 20, and 24 are all visible

### 9. Process
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Process · How We Work

### 10. Partners
- The app renders without errors and all 15 sections are present in the DOM.
- Scenario — Full page render:
  - **WHEN** the app loads
  - **THEN** the document title is "ByteOps — Digital Agency Template"
  - **AND** a banner (navbar), main landmark, and contentinfo (footer) are present
  - **AND** "Component Dock" link is visible in the footer

### 11. Faq
- The FAQ section shows 5 questions with expand/collapse behavior.
- Scenario — First question expanded:
  - **WHEN** the page loads
  - **THEN** "What services do you offer?" is visible
- Scenario — Toggle questions:
  - **WHEN** the user clicks "How long does a typical project take?"
  - **THEN** the answer about timelines is visible
  - **WHEN** the user clicks the same question again
  - **THEN** the answer is hidden

### 12. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Happy Clients

### 13. Blog
- The blog section shows 3 blog post cards with titles.
- Scenario — Render blog posts:
  - **WHEN** the page loads
  - **THEN** blog post titles about lead generation, marketing trends, and online presence are visible

### 14. Contact
- The contact section has a form with inputs and a submit button.
- Scenario — Render contact form:
  - **WHEN** the page loads
  - **THEN** inputs for name, email, subject, and message are visible
  - **AND** a "Send Message" button is present
- Scenario — Form submission:
  - **WHEN** the user clicks "Send Message"
  - **THEN** the form's default submit behavior is prevented

### 15. Footer
- The footer links to componentdock.com.
- Scenario — Footer attribution:
  - **WHEN** the page loads
  - **THEN** "Component Dock" text is visible in the footer
  - **AND** it links to https://www.componentdock.com/

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/byteops/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/byteops/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/byteops` ships on https://byteops.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/byteops/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/byteops/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/byteops/public/CNAME` = `byteops.free.componentdock.com`
  and the package `homepage` = `https://byteops.free.componentdock.com`.
