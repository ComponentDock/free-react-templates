# Netforge — Implementation Tasks

Source design: **It Solution** (`https://colorlib.com/wp/template/it-solution/`) → recreation name **netforge**. Shipped at https://netforge.free.componentdock.com.

Scope: Netforge is an IT company website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "IT Solution" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/netforge/src/App.tsx`:

### 1. Navbar
- The system SHALL render a sticky top navigation bar with the site name "Netforge", anchor links to sections, and a mobile hamburger menu.
- Scenario — Navbar content:
  - **GIVEN** the Netforge page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the site name "Netforge"
  - **AND** the navbar SHALL show links to Home, Services, About, Projects,
- Scenario — Sticky behavior:
  - **GIVEN** the page is rendered
  - **WHEN** the user scrolls down past the hero
  - **THEN** the navbar SHALL remain fixed at the top of the viewport
- Scenario — Mobile menu toggle:
  - **GIVEN** the page is rendered on a mobile viewport
  - **WHEN** the user taps the hamburger menu icon
  - **THEN** the mobile navigation menu SHALL expand to show the nav links
  - **AND** the user SHALL be able to close the menu
- Scenario — Dark mode toggle:
  - **GIVEN** the page is rendered
  - **WHEN** the user presses the dark-mode toggle
  - **THEN** the `.dark` class SHALL be toggled on the document root element
  - **AND** the toggle SHALL reflect the current mode

### 2. Hero
- The system SHALL render a full-width hero section with a dark background, headline, subtitle, and call-to-action buttons.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero is displayed
  - **THEN** it SHALL contain a level-1 heading (e.g. "IT Solution for
  - **AND** it SHALL show a supporting subtitle/description
  - **AND** it SHALL show primary and secondary CTA buttons
- Scenario — Hero illustration:
  - **GIVEN** the page is rendered
  - **WHEN** the hero is visible
  - **THEN** a custom illustration or graphic SHALL be displayed alongside

### 3. Services
- The system SHALL render a services section with a heading and multiple service cards, each containing an icon, title, and description.
- Scenario — Services content:
  - **GIVEN** the page is rendered
  - **WHEN** the services section is visible
  - **THEN** the heading "Our Services" or similar SHALL be displayed
  - **AND** at least 4 service cards SHALL be rendered
  - **AND** each card SHALL have an icon, a title, and a short description
- Scenario — Service card layout:
  - **GIVEN** the services section is displayed
  - **WHEN** the user views the cards
  - **THEN** they SHALL be arranged in a responsive grid (4-column on

### 4. About
- The system SHALL render a two-column section with text content on one side and an image on the other.
- Scenario — About content:
  - **GIVEN** the page is rendered
  - **WHEN** the about section is displayed
  - **THEN** a heading like "Why Choose Us" SHALL be visible
  - **AND** descriptive text explaining the company's value proposition
  - **AND** an accompanying image SHALL be displayed alongside the text

### 5. Counters
- The system SHALL render an animated statistics/counters section showing key metrics with numbers that animate on scroll.
- Scenario — Counter content:
  - **GIVEN** the page is rendered
  - **WHEN** the counters section is visible
  - **THEN** at least 4 counter items SHALL be displayed
  - **AND** each counter SHALL show a number, a label (e.g. "Projects
- Scenario — Counter animation:
  - **GIVEN** the page is rendered
  - **WHEN** the user scrolls to the counters section
  - **THEN** the numbers SHALL animate from 0 to their final value

### 6. Projects
- The system SHALL render a projects/portfolio section with a heading and a grid of project cards.
- Scenario — Projects content:
  - **GIVEN** the page is rendered
  - **WHEN** the projects section is visible
  - **THEN** the heading "Our Projects" or "Case Studies" SHALL be displayed
  - **AND** at least 4 project cards SHALL be rendered
  - **AND** each card SHALL show a project image, title, and category

### 7. Testimonials
- The system SHALL render a testimonials section with client quotes.
- Scenario — Testimonials content:
  - **GIVEN** the page is rendered
  - **WHEN** the testimonials section is displayed
  - **THEN** the heading "What Clients Say" or similar SHALL be visible
  - **AND** at least 3 testimonial items SHALL be rendered
  - **AND** each item SHALL contain a quote, client name, and optionally

### 8. FAQ
- The system SHALL render an FAQ section with expandable accordion items.
- Scenario — FAQ content:
  - **GIVEN** the page is rendered
  - **WHEN** the FAQ section is displayed
  - **THEN** the heading "Frequently Asked Questions" SHALL be visible
  - **AND** at least 4 accordion items SHALL be rendered
  - **AND** each item SHALL have a question title and expandable answer
- Scenario — Accordion interaction:
  - **GIVEN** the FAQ section is displayed
  - **WHEN** the user clicks on an accordion question
  - **THEN** the answer SHALL expand/collapse
  - **AND** only one answer SHALL be open at a time (or multiple, depending

### 9. Blog
- The system SHALL render a blog section showing recent posts.
- Scenario — Blog content:
  - **GIVEN** the page is rendered
  - **WHEN** the blog section is visible
  - **THEN** the heading "Latest News" or "Blog" SHALL be displayed
  - **AND** at least 3 blog post cards SHALL be rendered
  - **AND** each card SHALL show a post image, title, date, and excerpt

### 10. Contact
- The system SHALL render a contact section with a form and contact information.
- Scenario — Contact form:
  - **GIVEN** the page is rendered
  - **WHEN** the contact section is displayed
  - **THEN** a contact form with name, email, subject, and message fields
  - **AND** a submit button SHALL be present
- Scenario — Contact info:
  - **GIVEN** the page is rendered
  - **WHEN** the contact section is displayed
  - **THEN** contact information (address, phone, email) SHALL be visible

### 11. Footer
- The system SHALL render a footer with company info, links, and social media icons.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** company information and navigation links SHALL be present
  - **AND** social media icons SHALL be displayed
- Scenario — Footer attribution:
  - **GIVEN** the page is rendered
  - **WHEN** the footer copyright is displayed
  - **THEN** it SHALL link to `https://www.componentdock.com/` branded as

### Cross-cutting requirements

- **Dark mode** — The system SHALL support dark mode toggled by a button in the navbar.
  - Scenario — Dark mode classes: **GIVEN** the page is in dark mode; **WHEN** the user toggles dark mode on; **THEN** the `.dark` class SHALL be added to `document.documentElement`; **AND** section backgrounds, text colors, and accents SHALL adapt to the
- **Scroll animations** — The system SHALL support scroll-triggered animations for sections and elements.
  - Scenario — Scroll animation: **GIVEN** the page is rendered; **WHEN** the user scrolls to an animated section; **THEN** elements SHALL fade in or slide up into view
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/netforge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/netforge/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All sections render in correct order (1:1 with original description); [ ] Primary color #1a73e8 used for buttons, links, accents; [ ] Font applied via Tailwind theme (Inter or similar clean sans-serif); [ ] Sticky navbar works correctly; [ ] Hero has dark background with illustration; [ ] Service cards display in responsive grid; [ ] Fun fact counters animate on scroll; [ ] Accordion FAQ works correctly (expand/collapse); [ ] Contact form fields are present and accessible; [ ] Footer links to Component Dock; [ ] No ColorLib references in app code (only in spec); [ ] Placeholder images use seeded picsum URLs; [ ] Dark mode toggle works correctly; [ ] Mobile menu expands/collapses correctly; [ ] All interactive elements have proper accessibility; [ ] 100% test coverage on all new components; [ ] Spec committed and pushed to main; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/netforge` ships on https://netforge.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/netforge/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/netforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/netforge/public/CNAME` = `netforge.free.componentdock.com`
  and the package `homepage` = `https://netforge.free.componentdock.com`.
