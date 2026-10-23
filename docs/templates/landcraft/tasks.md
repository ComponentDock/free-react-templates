# Landcraft — Implementation Tasks

Source design: **Martxa** (`https://colorlib.com/wp/template/martxa/`) → recreation name **landcraft**. Shipped at https://landcraft.free.componentdock.com.

Scope: Landcraft is a landscaping company landing page template. It recreates the ColorLib Martxa design as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

## Component breakdown

Render order as composed in `apps/landcraft/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Main navigation · Search · Mobile navigation

### 2. Hero
- The page SHALL display a hero section with a background image, heading, description, and two CTA buttons.
- Scenario — Hero content:
  - **WHEN** the user views the hero section
  - **THEN** the heading "Welcome to Landcraft" is visible
  - **AND** two CTA buttons "Read More" and "Get Started" are displayed

### 3. About
- The page SHALL display an about section with an image, heading, description text, and a list of capabilities.
- Scenario — About content:
  - **WHEN** the user scrolls to the about section
  - **THEN** the heading "Who We Are" is visible
  - **AND** a list of 7 landscaping capabilities is shown

### 4. Services
- The page SHALL display a services section with three service cards.
- Scenario — Service cards:
  - **WHEN** the user views the services section
  - **THEN** three service cards are displayed (Lawn Care, Landscape Design, Garden Maintenance)
  - **AND** each card has an image, title, description, and "Read More" link

### 5. FunFacts
- The page SHALL display a statistics section with four numeric counters.
- Scenario — Statistics display:
  - **WHEN** the user views the fun facts section
  - **THEN** four statistics are shown: Projects Completed (2,157), Happy Clients (15,445), Awards Won (145), Team Members (1,200)

### 6. Portfolio
- The page SHALL display a portfolio section with filterable items.
- Scenario — Show all items:
  - **WHEN** the user views the portfolio section with "Show All" active
  - **THEN** all 6 portfolio items are displayed
- Scenario — Filter by category:
  - **WHEN** the user clicks a category filter button (e.g. "Residential")
  - **THEN** only items matching that category are displayed

### 7. VideoCta
- No dedicated spec block — hold this band to the design notes.
- Anchors: Play video

### 8. Team
- The page SHALL display a team section with four team member cards.
- Scenario — Team members:
  - **WHEN** the user views the team section
  - **THEN** four team members are displayed with name, role, and social links

### 9. Faq
- The page SHALL display a FAQ section with a functional accordion.
- Scenario — Accordion interaction:
  - **WHEN** the user clicks a FAQ question
  - **THEN** its answer is revealed
  - **WHEN** the user clicks another question
  - **THEN** the previous answer collapses and the new one opens

### 10. Testimonials
- The page SHALL display a testimonials section with client reviews and star ratings.
- Scenario — Testimonials content:
  - **WHEN** the user views the testimonials section
  - **THEN** client testimonials with names, roles, star ratings, and quotes are displayed

### 11. QuoteCta
- No dedicated spec block — hold this band to the design notes.
- Anchors: Brayden Shar

### 12. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Creative Blog · Stay updated with the latest landscaping tips, trends, and insights from our team. · Read More

### 13. Newsletter
- The page SHALL display a newsletter section with an email input form.
- Scenario — Newsletter form:
  - **WHEN** the user views the newsletter section
  - **THEN** an email input and submit button are displayed

### 14. Footer
- The page SHALL display a footer with company info, links, Instagram grid, contact form, and a Component Dock attribution link.
- Scenario — Footer Component Dock link:
  - **WHEN** the user views the footer
  - **THEN** a link to https://www.componentdock.com/ is displayed with text "Component Dock"
- Scenario — Footer contact form submission:
  - **WHEN** the user submits the quick contact form
  - **THEN** the form prevents default submission and remains on the page

### Cross-cutting requirements

- **Navigation** — The page SHALL display a responsive navbar with brand name, contact information, and navigation links.
  - Scenario — Desktop navigation: **WHEN** the user views the page on a desktop viewport; **THEN** the navbar shows the brand "Landcraft", contact info (hours, email, phone), and horizontal navigation links (Home, About, Services, Team, Portfolio, Blog, Contact)
  - Scenario — Mobile navigation toggle: **WHEN** the user clicks the mobile menu button; **THEN** a vertical navigation menu appears; **WHEN** the user clicks a link in the mobile menu; **THEN** the menu closes
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/landcraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/landcraft/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/landcraft` ships on https://landcraft.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/landcraft/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/landcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/landcraft/public/CNAME` = `landcraft.free.componentdock.com`
  and the package `homepage` = `https://landcraft.free.componentdock.com`.
