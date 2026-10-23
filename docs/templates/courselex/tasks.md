# Courselex — Implementation Tasks

Source design: **Educature** (`https://colorlib.com/wp/template/educature/`) → recreation name **courselex**. Shipped at https://courselex.free.componentdock.com.

Scope: Recreation of ColorLib **Educature** (https://colorlib.com/wp/template/educature/) — an education and online courses landing page. The template features a gradient hero with course search, about section, course categories, features grid, faculty members, testimonials, and a multi-column footer.

## Component breakdown

Render order as composed in `apps/courselex/src/App.tsx`:

### 1. Navbar
- The template SHALL display a fixed navigation bar with logo and links to Home, About, Courses, Pages, Blog, and Contact sections.
- Scenario — Navbar renders all navigation links:
  - **WHEN** the page loads
  - **THEN** the navbar displays links for Home, About, Courses, Pages, Blog, and Contact
- Scenario — Navbar displays logo:
  - **WHEN** the page loads
  - **THEN** the navbar shows the Courselex brand name

### 2. Hero
- The template SHALL display a full-screen hero section with a gradient background (#39cfca to #3279bb), a headline, subtitle, search form, and top course tag buttons.
- Scenario — Hero headline is displayed:
  - **WHEN** the page loads
  - **THEN** the hero section shows "We Rank the Best Courses on the Web"
- Scenario — Search form is functional:
  - **WHEN** the hero section renders
  - **THEN** a search input and search button are visible
- Scenario — Top course tags are displayed:
  - **WHEN** the hero section renders
  - **THEN** course category tags (Python, Marketing, etc.) are shown

### 3. About
- The template SHALL display an about section with an image, heading "Over 2500 Courses from 5 Platform", descriptive text, and an "Explore Courses" CTA button.
- Scenario — About section content:
  - **WHEN** the user scrolls to the about section
  - **THEN** an image and the heading "Over 2500 Courses from 5 Platform" are visible
- Scenario — About CTA button:
  - **WHEN** the about section renders
  - **THEN** an "Explore Courses" button is displayed

### 4. Courses
- The template SHALL display 14 course category links organized in two columns with book icons.
- Scenario — Course categories are listed:
  - **WHEN** the courses section renders
  - **THEN** 14 course categories are displayed (Development, IT & Software, Photography, Language, Life Science, Business, Social Science, Data Science, Design, Training, Humanities, Marketing, Economics, Personal Dev)
- Scenario — Course section heading:
  - **WHEN** the courses section renders
  - **THEN** the heading "This is Why We have Solid Idea" is displayed

### 5. Features
- The template SHALL display 6 feature cards in a 3×2 grid with icons, titles, and descriptions.
- Scenario — Features heading:
  - **WHEN** the features section renders
  - **THEN** "Features That Make Us Hero" heading is shown
- Scenario — Feature cards:
  - **WHEN** the features section renders
  - **THEN** 6 feature items are displayed (Architecture, Interior Design, Concept Design, Lifetime Access, Source File Included, Live Support)

### 6. Faculty
- The template SHALL display 4 faculty member cards with photos, names, designations, bios, and social media links.
- Scenario — Faculty heading:
  - **WHEN** the faculty section renders
  - **THEN** "Faculty Members" heading is shown
- Scenario — Faculty cards:
  - **WHEN** the faculty section renders
  - **THEN** 4 faculty members are displayed with names, photos, and designations
- Scenario — Social media links:
  - **WHEN** a faculty card renders
  - **THEN** Facebook, Twitter, and LinkedIn links are present

### 7. Testimonials
- The template SHALL display a testimonials section with quote icons, author names, star ratings, and review text.
- Scenario — Testimonials content:
  - **WHEN** the testimonials section renders
  - **THEN** testimonial items with author names and 5-star ratings are displayed

### 8. Footer
- The template SHALL display a multi-column footer with link groups, a newsletter form, and a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer columns:
  - **WHEN** the footer renders
  - **THEN** columns for Top Products, Quick Links, Features, Resources, and Newsletter are shown
- Scenario — Newsletter form:
  - **WHEN** the footer renders
  - **THEN** an email input and submit button for newsletter subscription are visible
- Scenario — Component Dock attribution:
  - **WHEN** the footer renders
  - **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/courselex/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/courselex/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/courselex` ships on https://courselex.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/courselex/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/courselex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/courselex/public/CNAME` = `courselex.free.componentdock.com`
  and the package `homepage` = `https://courselex.free.componentdock.com`.
