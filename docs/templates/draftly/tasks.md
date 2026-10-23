# Draftly — Implementation Tasks

Source design: **Clyde** (`https://colorlib.com/wp/template/clyde/`) → recreation name **draftly**. Shipped at https://draftly.free.componentdock.com.

Scope: Recreate ColorLib "Clyde" (https://colorlib.com/wp/template/clyde/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page personal portfolio template under the name "Draftly". The template showcases a creative UI/UX designer's profile with skills, services, projects, testimonials, blog, and contact form.

## Component breakdown

Render order as composed in `apps/draftly/src/App.tsx`:

### 1. Navbar
- The app SHALL render a dark sticky navbar with the brand "Draftly" and navigation links: Home, About, Skills, Services, Projects, Blog, Contact. A hamburger menu SHALL toggle mobile navigation.
- Scenario — Desktop navigation renders all links:
  - **GIVEN** the page loads on a desktop viewport
  - **WHEN** the navbar renders
  - **THEN** all seven navigation links are visible
- Scenario — Mobile hamburger toggles menu:
  - **GIVEN** the page loads on a mobile viewport
  - **WHEN** the user clicks the hamburger button
  - **THEN** the mobile menu opens with all navigation links

### 2. Hero
- The app SHALL render a full-screen hero with background image, dark overlay, heading "Creative UI/UX Designer & Developer", and two CTA buttons (Hire me + Download CV).
- Scenario — Hero renders heading and buttons:
  - **GIVEN** the page loads
  - **WHEN** the hero section is visible
  - **THEN** the heading contains "Creative" and "UI/UX" text
  - **AND** "Hire me" links to #contact
  - **AND** "Download CV" links to #about

### 3. Counter
- The app SHALL render four statistics: 750 Projects, 568 Happy Clients, 478 Cups of Coffee, 10 Years Experienced.
- Scenario — All four stats render with correct numbers:
  - **GIVEN** the page loads
  - **WHEN** the counter section renders
  - **THEN** the numbers 750, 568, 478, and 10 are visible

### 4. About
- The app SHALL render a split layout with an image on the left and personal info (name, DOB, address, zip, email, phone) plus interest tags on the right.
- Scenario — Personal info and interests display:
  - **GIVEN** the page loads
  - **WHEN** the about section renders
  - **THEN** personal info fields are visible
  - **AND** interest tags (Music, Travel, Movie, Sports) are shown

### 5. Skills
- The app SHALL render six skill cards with circular SVG progress indicators: CSS 95%, HTML 98%, jQuery 68%, Photoshop 85%, WordPress 90%, SEO 75%.
- Scenario — All six skills render:
  - **GIVEN** the page loads
  - **WHEN** the skills section renders
  - **THEN** all six skill names and percentages are visible

### 6. Services
- The app SHALL render eight service cards in a responsive grid: Web Design, Web Application, Web Development, Banner Design, Branding, Icon Design, Graphic Design, SEO.
- Scenario — All eight services render:
  - **GIVEN** the page loads
  - **WHEN** the services section renders
  - **THEN** all eight service titles are visible

### 7. CtaBanner
- The app SHALL render a dark banner with "Have a project on your mind?" heading and a "Contact me" button linking to the contact section.
- Scenario — CTA banner renders:
  - **GIVEN** the page loads
  - **WHEN** the CTA banner renders
  - **THEN** the heading text is visible
  - **AND** the contact button links to #contact

### 8. Projects
- The app SHALL render eight project cards with images, titles, and category labels with hover overlay effect.
- Scenario — All eight projects render:
  - **GIVEN** the page loads
  - **WHEN** the projects section renders
  - **THEN** eight project images are visible

### 9. Testimonials
- The app SHALL render client testimonials on a blue background with prev/next navigation. Testimonials SHALL cycle through three entries.
- Scenario — Testimonial navigation:
  - **GIVEN** the page loads with the first testimonial showing
  - **WHEN** the user clicks the next button
  - **THEN** the second testimonial displays

### 10. Blog
- The app SHALL render three blog post cards with image, date, title, and description.
- Scenario — Blog posts render:
  - **GIVEN** the page loads
  - **WHEN** the blog section renders
  - **THEN** three blog posts are visible with dates and titles

### 11. Contact
- The app SHALL render a contact form with Full Name, Email, Subject, Message fields and a Send Message submit button.
- Scenario — Form fields accept input:
  - **GIVEN** the contact form is visible
  - **WHEN** the user types in the name field
  - **THEN** the field value updates

### 12. Footer
- The app SHALL render a dark footer with four columns (About Us, Links, Services, Questions) and a copyright line linking to https://www.componentdock.com/.
- Scenario — Footer renders Component Dock link:
  - **GIVEN** the page loads
  - **WHEN** the footer renders
  - **THEN** a link to componentdock.com is visible
  - **AND** the link text includes "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/draftly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/draftly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/draftly` ships on https://draftly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/draftly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/draftly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/draftly/public/CNAME` = `draftly.free.componentdock.com`
  and the package `homepage` = `https://draftly.free.componentdock.com`.
