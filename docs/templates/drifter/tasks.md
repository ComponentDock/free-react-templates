# Drifter — Implementation Tasks

Source design: **Ronin** (`https://colorlib.com/wp/template/ronin/`) → recreation name **drifter**. Shipped at https://drifter.free.componentdock.com.

Scope: Build a personal portfolio landing page for a freelancer/designer, showcasing services, work samples, testimonials, and blog posts. The design follows the ColorLib "Ronin" template layout with a dark hero banner, skill bars, service cards, portfolio grid with filtering, and a dark footer.

## Component breakdown

Render order as composed in `apps/drifter/src/App.tsx`:

### 1. Navbar
- The template SHALL render a fixed top navigation bar with logo and links for Home, About, Services, Portfolio, Blog, Contact. On mobile, a hamburger menu toggles the nav links.
- Scenario — Desktop nav renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** I shall see the "Drifter" logo and links for Home, About, Services, Portfolio, Blog, Contact
- Scenario — Mobile menu toggles on button click:
  - **WHEN** I click the hamburger menu button on mobile
  - **THEN** the navigation links shall be displayed and the button icon shall change to a close icon

### 2. Hero
- The template SHALL render a full-width hero section with a background image overlay, heading "This is me", name, description, and a "Discover Now" CTA button linking to the about section.
- Scenario — Hero displays heading and CTA:
  - **WHEN** the hero section is visible
  - **THEN** I shall see "This is me", "Alex Morgan", and a "Discover Now" button

### 3. About
- The template SHALL render an "About Myself" section with descriptive text, 3 stat cards (Total Projects, Happy Clients, Cups of Coffee), and 6 tool expertness progress bars with percentage labels.
- Scenario — About section shows stats:
  - **WHEN** the about section is visible
  - **THEN** I shall see stat cards with values $2.5M, 1,465, and 3,965
- Scenario — About section shows skill bars:
  - **WHEN** the about section is visible
  - **THEN** I shall see 6 skill bars with labels and percentages

### 4. Services
- The template SHALL render an "Offerings to My Clients" section with 3 service cards (Architecture, Interior Design, Concept Design), each with an icon, title, and description.
- Scenario — Services shows 3 cards:
  - **WHEN** the services section is visible
  - **THEN** I shall see Architecture, Interior Design, and Concept Design cards

### 5. Portfolio
- The template SHALL render an "Our Recent Completed Projects" section with filter tabs (All, Branding, Creative, Web Design) and a 6-item image grid that filters by selected category.
- Scenario — Portfolio shows all projects by default:
  - **WHEN** the portfolio section loads
  - **THEN** I shall see 6 project items
- Scenario — Portfolio filters by category:
  - **WHEN** I click the "Branding" filter tab
  - **THEN** only branding projects shall be shown

### 6. Testimonials
- The template SHALL render a testimonials section with 3 testimonial cards, each containing a quote, author name, and role.
- Scenario — Testimonials renders quotes:
  - **WHEN** the testimonials section is visible
  - **THEN** I shall see 3 testimonial quotes with author names

### 7. Blog
- The template SHALL render a "Latest Posts from Blog" section with 3 blog post cards, each showing an image, date, title, excerpt, and "Read More" link.
- Scenario — Blog section shows 3 posts:
  - **WHEN** the blog section is visible
  - **THEN** I shall see 3 blog post cards with titles and Read More links

### 8. Footer
- The template SHALL render a dark footer with About Me text, Newsletter signup form, social media links, and a copyright line linking to Component Dock.
- Scenario — Footer links to Component Dock:
  - **WHEN** the footer is visible
  - **THEN** I shall see a link to componentdock.com branded as "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/drifter/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/drifter/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/drifter` ships on https://drifter.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/drifter/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/drifter/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/drifter/public/CNAME` = `drifter.free.componentdock.com`
  and the package `homepage` = `https://drifter.free.componentdock.com`.
