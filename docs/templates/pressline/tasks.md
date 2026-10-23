# Pressline — Implementation Tasks

Source design: **Publishing Company** (`https://colorlib.com/wp/template/publishing-company/`) → recreation name **pressline**. Shipped at https://pressline.free.componentdock.com.

Scope: Pressline is a publishing company landing page template, recreating the ColorLib "Publishing Company" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript app. It serves book publishers, authors, and literary businesses with sections for categories, new releases, testimonials, pricing, and contact.

## Component breakdown

Render order as composed in `apps/pressline/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.

### 2. Navbar
- The Navbar SHALL show a hamburger menu on mobile that toggles the mobile nav.
- Scenario — Toggling the mobile menu:
  - **GIVEN** the viewport is mobile-sized
  - **WHEN** the user clicks the hamburger button
  - **THEN** the mobile menu opens
  - **AND** clicking a nav link closes the menu

### 3. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Good books don&apos;t give up all their secrets at once · View All Books · Explore Now

### 4. Categories
- No dedicated spec block — hold this band to the design notes.

### 5. Counter
- The Footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Component Dock link is present:
  - **WHEN** the user scrolls to the footer
  - **THEN** a link to "Component Dock" is visible with href https://www.componentdock.com/

### 6. AboutAuthors
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome to Pressline · Pressline Created By Authors · View All Our Authors

### 7. BooksNewRelease
- No dedicated spec block — hold this band to the design notes.
- Anchors: Books New Release

### 8. Testimonials
- The template SHALL render the following sections top-to-bottom: TopBar, Navbar, Hero, Categories, Counter, AboutAuthors, BooksNewRelease, Testimonials, Packages, Contact, Blog, Footer.
- Scenario — All sections are visible on page load:
  - **WHEN** the app loads
  - **THEN** the TopBar is visible with contact info
  - **AND** the Navbar shows the Pressline brand
  - **AND** the Hero section has a heading and CTA buttons
  - **AND** 4 category cards are displayed
  - **AND** the counter section shows 4 stats
  - **AND** the about section is visible
  - **AND** book cards are displayed in the new releases section
  - **AND** testimonials are shown
  - **AND** pricing packages are visible
  - **AND** the contact form is rendered
  - **AND** 3 blog post cards are displayed
  - **AND** the footer contains the Component Dock link

### 9. Packages
- No dedicated spec block — hold this band to the design notes.
- Anchors: Affordable Packages · Get Started

### 10. Contact
- The Contact section SHALL have a form that clears all fields on submit.
- Scenario — Submitting the contact form:
  - **GIVEN** the user fills in name, email, subject, and message
  - **WHEN** they submit the form
  - **THEN** all form fields are cleared

### 11. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Recent Blog · Read More

### 12. Footer
- The Footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Component Dock link is present:
  - **WHEN** the user scrolls to the footer
  - **THEN** a link to "Component Dock" is visible with href https://www.componentdock.com/

### Cross-cutting requirements

- **Navigation links scroll to sections** — The Navbar SHALL provide links that scroll to corresponding page sections.
  - Scenario — Clicking a nav link scrolls to the target section: **WHEN** the user clicks a navigation link (e.g. "About", "Categories"); **THEN** the page scrolls to the corresponding section
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/pressline/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/pressline/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/pressline` ships on https://pressline.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/pressline/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pressline/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pressline/public/CNAME` = `pressline.free.componentdock.com`
  and the package `homepage` = `https://pressline.free.componentdock.com`.
