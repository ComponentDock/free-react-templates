# Lectern — Implementation Tasks

Source design: **Unica** (`https://colorlib.com/wp/template/unica/`) → recreation name **lectern**. Shipped at https://lectern.free.componentdock.com.

Scope: Recreate the ColorLib "Unica" university template as a React 19 + Tailwind CSS 4 + TypeScript landing page under the name "Lectern". The template serves as a free, production-ready university/education website landing page with sections for services, courses, enrollment, gallery, blog, and newsletter.

## Component breakdown

Render order as composed in `apps/lectern/src/App.tsx`:

### 1. Header
- The Lectern template SHALL render the following sections in order: Header, Navbar, Hero, Counter, Services, Enrollment, Courses, Gallery, Blog, Newsletter, Footer.
- Scenario — All sections are present:
  - **WHEN** the page loads
  - **THEN** the DOM contains elements with roles: banner (header), navigation (navbar), main (content), contentinfo (footer)
  - **AND** the main content area contains Hero, Counter, Services, Enrollment, Courses, Gallery, Blog, Newsletter sections

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search · Shopping cart · Lectern

### 3. Hero
- The Hero section SHALL display a subtitle "Award Winning University", a headline about knowledge investment, a description about education, and a "Get Started" CTA button linking to courses.
- Scenario — Hero content renders:
  - **WHEN** the Hero section is rendered
  - **THEN** it shows the subtitle, headline, description, and CTA button

### 4. Counter
- The Counter section SHALL display a "NEXT COURSE" heading with countdown values (20 Days, 08 Hrs, 40 Mins, 56 Secs) on a dark navy background.
- Scenario — Countdown values display:
  - **WHEN** the Counter section renders
  - **THEN** the four countdown values and their labels (Days, Hrs, Mins, Secs) are visible

### 5. Services
- The Services section SHALL render 6 service cards: Art Studio, Great Facility, Activity Hub, Fully Qualified, Flexible Schedule, Chemistry Lab.
- Scenario — All services render:
  - **WHEN** the Services section renders
  - **THEN** all 6 service titles are visible

### 6. Enrollment
- The Enrollment section SHALL display 3 enrollment steps: Contact, Consulting, Register, over a background image.
- Scenario — Enrollment steps render:
  - **WHEN** the Enrollment section renders
  - **THEN** the three step titles are visible

### 7. Courses
- The Courses section SHALL render 5 course cards, each with a title and monthly price.
- Scenario — All courses render:
  - **WHEN** the Courses section renders
  - **THEN** all 5 course titles and prices are visible

### 8. Gallery
- The Gallery section SHALL display a 2x3 grid of campus images with hover overlay.
- Scenario — Gallery images render:
  - **WHEN** the Gallery section renders
  - **THEN** 6 images with alt text are present

### 9. Blog
- The Blog section SHALL render 4 blog post cards with title, date, author, and excerpt.
- Scenario — Blog posts render:
  - **WHEN** the Blog section renders
  - **THEN** all 4 post titles, dates, and authors are visible

### 10. Newsletter
- The Newsletter section SHALL provide an email input and Subscribe button. On submit, the email field clears.
- Scenario — Newsletter form clears on submit:
  - **WHEN** a user types an email and clicks Subscribe
  - **THEN** the email input value becomes empty

### 11. Footer
- The Footer SHALL link to https://www.componentdock.com/ with branded text "Component Dock" in the copyright line.
- Scenario — Component Dock link present:
  - **WHEN** the Footer renders
  - **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present
  - **AND** the link has target="_blank"

### Cross-cutting requirements

- **Navigation provides section anchors** — The navbar SHALL contain links to Home (#home), About (#about), Services (#services), Courses (#courses), Blog (#blog), Contact (#contact).
  - Scenario — Nav links navigate to sections: **WHEN** a user clicks a nav link; **THEN** the browser scrolls to the corresponding section anchor
- **Dark mode toggle works** — The Navbar SHALL provide a dark mode toggle button. When clicked, it adds/removes the "dark" class on the HTML element.
  - Scenario — Dark mode toggles: **WHEN** a user clicks the dark mode toggle; **THEN** the html element gains the "dark" class; **WHEN** the user clicks the toggle again; **THEN** the html element loses the "dark" class
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/lectern/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/lectern/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/lectern` ships on https://lectern.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/lectern/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/lectern/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lectern/public/CNAME` = `lectern.free.componentdock.com`
  and the package `homepage` = `https://lectern.free.componentdock.com`.
