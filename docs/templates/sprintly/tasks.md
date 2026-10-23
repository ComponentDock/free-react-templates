# Sprintly — Implementation Tasks

Source design: **Activitar** (`https://colorlib.com/wp/template/activitar/`) → recreation name **sprintly**. Shipped at https://sprintly.free.componentdock.com.

Scope: Sprintly is a dark-themed fitness and sport landing page template. It recreates the ColorLib "Activitar" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application with 100% test coverage.

## Component breakdown

Render order as composed in `apps/sprintly/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display a logo, navigation links, and a mobile menu toggle.
- Scenario — Desktop navigation:
  - **WHEN** the Navbar renders
  - **THEN** it shows the logo "Sprintly" and links: Home, About, Classes, Schedule, Pricing, Blog, Contact
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the hamburger button
  - **THEN** the mobile menu expands
  - **WHEN** the user clicks the close button
  - **THEN** the mobile menu collapses

### 2. Hero
- The hero section SHALL display a large heading, subtitle, and CTA button.
- Scenario — Hero content:
  - **WHEN** the Hero section renders
  - **THEN** it shows heading "Fitness & Sport", subtitle "Join Us Now", and a "Get Started" button

### 3. Features
- The features section SHALL display 3 feature cards with titles and descriptions.
- Scenario — Three feature cards:
  - **WHEN** the Features section renders
  - **THEN** it displays 3 cards each with a title and description

### 4. About
- The about section SHALL display a heading and description.
- Scenario — About content:
  - **WHEN** the About section renders
  - **THEN** it shows heading "Welcome to Sprintly" and a description paragraph

### 5. Programs
- The programs section SHALL display 4 program cards.
- Scenario — Four program cards:
  - **WHEN** the Programs section renders
  - **THEN** it displays 4 cards each with a title and description

### 6. ClassTimetable
- The timetable section SHALL display a weekly schedule grid.
- Scenario — Schedule grid:
  - **WHEN** the Class Timetable renders
  - **THEN** it shows days of the week with class entries

### 7. Pricing
- The pricing section SHALL display 3 pricing plans.
- Scenario — Three pricing plans:
  - **WHEN** the Pricing section renders
  - **THEN** it displays 3 plans each with a name, price, features list, and CTA button

### 8. WhyChooseUs
- The section SHALL display 6 items with icons and descriptions.
- Scenario — Six reason items:
  - **WHEN** the Why Choose Us section renders
  - **THEN** it displays 6 items each with an icon and description

### 9. VideoCta
- No dedicated spec block — hold this band to the design notes.
- Anchors: Play video · Gym In Downtown · Get Started Today

### 10. Blog
- The blog section SHALL display 3 blog post cards.
- Scenario — Three blog posts:
  - **WHEN** the Blog section renders
  - **THEN** it displays 3 cards each with a title, excerpt, and image

### 11. Footer
- The footer SHALL link to Component Dock and display contact info.
- Scenario — Footer content:
  - **WHEN** the Footer renders
  - **THEN** it displays "More templates at Component Dock" linking to https://www.componentdock.com/
  - **AND** it shows contact information and social links

### Cross-cutting requirements

- **Page structure and sections** — The template SHALL render all sections in the correct order from top to bottom.
  - Scenario — Renders all sections: **WHEN** the app loads; **THEN** the page contains a Navbar, Hero, Features, About, Programs, Class Timetable, Pricing, Why Choose Us, Video CTA, Blog, and Footer sections
  - Scenario — Sets document title: **WHEN** the app loads; **THEN** the document title is "Sprintly — Fitness & Sport Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/sprintly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/sprintly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/sprintly` ships on https://sprintly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/sprintly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/sprintly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sprintly/public/CNAME` = `sprintly.free.componentdock.com`
  and the package `homepage` = `https://sprintly.free.componentdock.com`.
