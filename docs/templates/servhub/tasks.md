# Servhub — Implementation Tasks

Source design: **Services** (`https://colorlib.com/wp/template/services/`) → recreation name **servhub**. Shipped at https://servhub.free.componentdock.com.

Scope: Recreate the ColorLib "Services" template (https://colorlib.com/wp/template/services/) as a production-ready React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Servhub".

## Component breakdown

Render order as composed in `apps/servhub/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky header with the brand name "Servhub" on the left and navigation links (Home, About, Services, Projects, Blog, Contact) on the right. On mobile, a hamburger menu toggle SHALL show/hide the nav links.
- Scenario — Desktop navigation renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the brand name "Servhub" and all 6 navigation links are visible
- Scenario — Mobile menu toggles:
  - **WHEN** the user clicks the hamburger menu button
  - **THEN** the mobile navigation panel opens with all 6 links
  - **WHEN** the user clicks the button again
  - **THEN** the mobile navigation panel closes

### 2. Hero
- The template SHALL display a full-width hero section with a background image, dark overlay, heading "We Are Digital Services", descriptive text, and a "Our Services" CTA button that scrolls to the services section.
- Scenario — Hero renders heading and CTA:
  - **WHEN** the page loads
  - **THEN** the heading "We Are Digital Services" is visible
  - **AND** a "Our Services" button links to the services section

### 3. About
- The template SHALL display an "About Us" section with three columns: left text, center image, right text.
- Scenario — About section renders content:
  - **WHEN** the page loads
  - **THEN** the "About Us" heading and an image are visible

### 4. Services
- The template SHALL display a "Services" section with 6 service cards in a 2-column grid, each with an icon, title, and description.
- Scenario — All 6 services render:
  - **WHEN** the page loads
  - **THEN** 6 service cards are visible with titles: Content Marketing, Social Media Marketing, Brand & Logo Design, Social Media Advertising, Email Marketing, Web Design & Development

### 5. Projects
- The template SHALL display a "Projects" section with filter buttons (All, Web, Design, Brand) and a grid of portfolio images. Clicking a filter button SHALL show only projects in that category.
- Scenario — Filter projects by category:
  - **WHEN** the user clicks the "Web" filter button
  - **THEN** only Web-category projects are displayed
  - **WHEN** the user clicks "All"
  - **THEN** all projects are displayed again

### 6. Testimonials
- The template SHALL display a testimonials section with a lime-green background, showing one testimonial at a time with navigation arrows.
- Scenario — Navigate testimonials:
  - **WHEN** the user clicks the next arrow
  - **THEN** the next testimonial is displayed
  - **WHEN** the user clicks the previous arrow
  - **THEN** the previous testimonial is displayed

### 7. Blog
- The template SHALL display a "Blog Posts" section with 3 blog post cards, each with an image, title, date, excerpt, and "Read More" link.
- Scenario — Blog posts render:
  - **WHEN** the page loads
  - **THEN** 3 blog post cards are visible with read more links

### 8. Contact
- The template SHALL display a "Contact Form" section with a form (first name, full name, email, subject, message, submit button) and two office locations (London, New York) with address, phone, and email details.
- Scenario — Contact form renders all inputs:
  - **WHEN** the page loads
  - **THEN** the contact form has 5 inputs and a submit button
  - **AND** both office locations are displayed

### 9. Footer
- The template SHALL display a footer with brand info, 3 link columns (Services, Resources, Templates), social media icons, and a copyright line linking to Component Dock.
- Scenario — Footer links to Component Dock:
  - **WHEN** the page loads
  - **THEN** a "Component Dock" link points to https://www.componentdock.com/

### Cross-cutting requirements

- **Design tokens match original** — The template SHALL use the Jost font family, lime-green brand color (#C2E54F), and dark (#000) body text matching the original ColorLib "Services" template.
  - Scenario — Brand color applied: **WHEN** the page renders; **THEN** buttons and accents use the lime-green brand color; **AND** the Jost font family is applied
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/servhub/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/servhub/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/servhub` ships on https://servhub.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/servhub/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/servhub/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/servhub/public/CNAME` = `servhub.free.componentdock.com`
  and the package `homepage` = `https://servhub.free.componentdock.com`.
