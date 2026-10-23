# Structura — Implementation Tasks

Source design: **Archirio** (`https://colorlib.com/wp/template/archirio/`) → recreation name **structura**. Shipped at https://structura.free.componentdock.com.

Scope: Recreate the ColorLib Archirio architecture/interior design template as a single-page React application under the name "Structura". The template features a hero slider, about section with stats, specialization grid, project gallery with filters, services, team, testimonials, blog, and a footer with newsletter signup.

## Component breakdown

Render order as composed in `apps/structura/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display the "Structura" logo and navigation links (Home, About, Projects, Services, Contact). On mobile, a hamburger toggle button SHALL control the mobile menu with proper aria-expanded state.
- Scenario — Desktop navigation renders all links:
  - **WHEN** the app loads on desktop
  - **THEN** the navbar shows "Structura" logo and links for Home, About, Projects, Services, Contact
- Scenario — Mobile menu toggles:
  - **WHEN** the mobile menu toggle is clicked
  - **THEN** the mobile menu expands and aria-expanded becomes true
  - **AND** clicking again closes the menu

### 2. Hero
- The hero SHALL display "Discover Your Dream Home" heading with lime accent, supporting text about 50,000+ customers, and a "See Projects" button.
- Scenario — Hero renders heading and CTA:
  - **WHEN** the app loads
  - **THEN** the hero heading containing "Discover" is visible
  - **AND** the "See Projects" link is present

### 3. About
- The about section SHALL show "Welcome to Interior" heading, descriptive text, and two stats: 35+ Experience Years and 78+ Projects Completed.
- Scenario — About displays stats:
  - **WHEN** the app loads
  - **THEN** "35" and "78" stat values are visible
  - **AND** "Experience Years" and "Projects Completed" labels are shown

### 4. Specialization
- The specialization section SHALL display 6 items in a grid: Architecture, Interior Design, Building Design, Art Design, Home Design, Hotel Design.
- Scenario — All specialization items render:
  - **WHEN** the app loads
  - **THEN** 6 specialization items are displayed with their names

### 5. Projects
- The projects section SHALL display 6 project cards with filter tabs (View All, Residential, Corporate, Restaurant, Industrial). Clicking a filter SHALL show only matching projects.
- Scenario — Filter reduces visible projects:
  - **WHEN** the "Residential" filter tab is clicked
  - **THEN** fewer than 6 project cards are shown

### 6. Services
- The services section SHALL show 3 service cards (Residential Design, Corporate Design, Commercial Design) with images, descriptions, and Read More links.
- Scenario — All services render:
  - **WHEN** the app loads
  - **THEN** 3 service cards with "Read More" links are visible

### 7. FunFacts
- The fun facts section SHALL display 4 statistics: 16 Years, 75 Projects, 18 Members, 20 Awards on a parallax background.
- Scenario — Stats display correctly:
  - **WHEN** the app loads
  - **THEN** values "16", "75", "18", "20" are visible with their labels

### 8. Team
- The team section SHALL display 4 team members with photos, names, roles, and social media icons.
- Scenario — All team members render:
  - **WHEN** the app loads
  - **THEN** 4 team members are displayed with names and roles

### 9. Testimonials
- The testimonials section SHALL show 3 testimonial quotes with author names and locations on a parallax background.
- Scenario — Testimonials display correctly:
  - **WHEN** the app loads
  - **THEN** 3 testimonial quotes with author names are visible

### 10. Blog
- The blog section SHALL display 3 blog post cards with images, dates, authors, titles, and excerpts.
- Scenario — Blog posts render:
  - **WHEN** the app loads
  - **THEN** 3 blog posts with titles are visible

### 11. Footer
- The footer SHALL include working hours, contact info, services links, newsletter form, social icons, and a link to componentdock.com.
- Scenario — Footer links to Component Dock:
  - **WHEN** the app loads
  - **THEN** the footer contains a link to https://www.componentdock.com/
- Scenario — Newsletter form submits:
  - **WHEN** the newsletter form is submitted
  - **THEN** the form's default submit action is prevented

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/structura/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/structura/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/structura` ships on https://structura.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/structura/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/structura/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/structura/public/CNAME` = `structura.free.componentdock.com`
  and the package `homepage` = `https://structura.free.componentdock.com`.
