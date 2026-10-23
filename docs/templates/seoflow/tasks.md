# Seoflow — Implementation Tasks

Source design: **Seogo** (`https://colorlib.com/wp/template/seogo/`) → recreation name **seoflow**. Shipped at https://seoflow.free.componentdock.com.

Scope: SeoFlow is a single-page SEO agency landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Seogo" free template (source: https://colorlib.com/wp/template/seogo/), built under a DIFFERENT name (**SeoFlow**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

## Component breakdown

Render order as composed in `apps/seoflow/src/App.tsx`:

### 1. Navbar
- The system SHALL render a sticky top navigation bar with logo, nav links, and phone CTA.
- Scenario — Desktop navbar with logo and links:
  - **GIVEN** the SeoFlow app is rendered on a desktop viewport
  - **THEN** the navbar SHALL display the "SeoFlow" logo on the left
  - **AND** navigation links SHALL include: Home, Services, Case Study, About, Blog, Contact
  - **AND** a phone CTA button showing "+10 673 567 367" SHALL be visible
- Scenario — Mobile hamburger menu:
  - **GIVEN** the SeoFlow app is rendered on a mobile viewport
  - **WHEN** the user clicks the hamburger menu button
  - **THEN** the mobile navigation menu SHALL expand showing all nav links
  - **AND** the button aria-label SHALL change from "Open menu" to "Close menu"

### 2. Hero
- The system SHALL render a hero section with headline and call-to-action.
- Scenario — Hero with headline and CTA:
  - **GIVEN** the hero section is rendered
  - **THEN** the headline "BoostUp your Business & Get top of Search Engine" SHALL be visible
  - **AND** a "Get Started" CTA button SHALL link to the #services section
  - **AND** a decorative illustration image SHALL be displayed

### 3. Services
- The system SHALL render a 3-column grid of service cards.
- Scenario — Three service cards:
  - **GIVEN** the services section is rendered
  - **THEN** three service cards SHALL be visible: SEO/SEM, Digital Marketing, Social Media
  - **AND** each card SHALL contain an icon, title, description, and "Learn More" link

### 4. About
- The system SHALL render an about section with image and company description.
- Scenario — About with image and text:
  - **GIVEN** the about section is rendered
  - **THEN** an image SHALL be displayed on the left
  - **AND** the heading "We are an SEO company that specializes in developing." SHALL be visible
  - **AND** an "About Us" CTA button SHALL be present

### 5. CaseStudies
- The system SHALL render a carousel of case study cards on a dark background.
- Scenario — Case study carousel navigation:
  - **GIVEN** the case study section is rendered
  - **THEN** three case study cards SHALL be visible: Product Design, Custom Website, Digital Marketing
  - **AND** previous/next navigation arrows SHALL be present
  - **AND** dot indicators SHALL be present
  - **WHEN** the user clicks the next arrow at the last item
  - **THEN** the carousel SHALL wrap to the first item

### 6. FAQ
- The system SHALL render an accordion-style FAQ with expandable questions.
- Scenario — FAQ accordion expand and collapse:
  - **GIVEN** the FAQ section is rendered
  - **THEN** three questions SHALL be visible
  - **AND** the first question SHALL be expanded by default
  - **WHEN** the user clicks a collapsed question
  - **THEN** the answer SHALL expand and the aria-expanded attribute SHALL be true
  - **WHEN** the user clicks an expanded question
  - **THEN** the answer SHALL collapse and the aria-expanded attribute SHALL be false

### 7. Features
- The system SHALL render a 3-column grid of 6 feature cards.
- Scenario — Six feature cards:
  - **GIVEN** the features section is rendered
  - **THEN** six feature cards SHALL be visible
  - **AND** features SHALL include: Custom design, Paid Search result, Global Search option, Email Marketing, Custom Software, Setup business goal

### 8. Testimonials
- The system SHALL render a carousel of testimonial cards.
- Scenario — Testimonial carousel navigation:
  - **GIVEN** the testimonials section is rendered
  - **THEN** a testimonial card SHALL display quote text, author name, role, and avatar
  - **AND** navigation arrows and dot indicators SHALL be present
  - **WHEN** the user clicks the next arrow at the last item
  - **THEN** the carousel SHALL wrap to the first item

### 9. Footer
- The system SHALL render a footer with CTA banner, columns, newsletter form, and copyright.
- Scenario — Footer with Component Dock link:
  - **GIVEN** the footer is rendered
  - **THEN** a CTA banner with "Let's Start your project" SHALL be visible
  - **AND** four columns SHALL be present: logo+description, Services, Useful Links, Newsletter
  - **AND** the newsletter form SHALL accept email input and submit (clearing the field)
  - **AND** the copyright line SHALL link to https://www.componentdock.com/
  - **AND** there SHALL be no ColorLib attribution links

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/seoflow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/seoflow/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/seoflow` ships on https://seoflow.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/seoflow/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/seoflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seoflow/public/CNAME` = `seoflow.free.componentdock.com`
  and the package `homepage` = `https://seoflow.free.componentdock.com`.
