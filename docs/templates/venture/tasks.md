# Venture — Implementation Tasks

Source design: **Startupbusiness** (`https://colorlib.com/wp/template/startupbusiness/`) → recreation name **venture**. Shipped at https://venture.free.componentdock.com.

Scope: Recreate the ColorLib Startupbusiness template as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Venture". The template provides a business startup landing page with sections for services, skills, portfolio, testimonials, features, blog, and contact.

## Component breakdown

Render order as composed in `apps/venture/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display navigation links and a mobile menu toggle.
- Scenario — Desktop navigation:
  - **WHEN** the page loads on desktop
  - **THEN** all navigation links (Home, About, Services, Works, Blog, Contact) are visible
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the mobile menu button
  - **THEN** the mobile navigation menu opens

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Business Synergy via · Robust Strategies · View project

### 3. WantToWork
- No dedicated spec block — hold this band to the design notes.
- Anchors: View More

### 4. Services
- The services section SHALL display service cards with icons and descriptions.
- Scenario — Service cards render:
  - **WHEN** the services section is visible
  - **THEN** three service cards are displayed (Strategic Planning, Trades & Stocks, Audit & Assurance)

### 5. Skills
- The skills section SHALL display skill progress bars with percentages.
- Scenario — Progress bars render:
  - **WHEN** the skills section is visible
  - **THEN** three progress bars are displayed with correct percentages (75%, 89%, 95%)

### 6. ProjectGallery
- No dedicated spec block — hold this band to the design notes.
- Anchors: View Project

### 7. Testimonials
- The template SHALL render all major sections in the correct order.
- Scenario — Section presence:
  - **WHEN** the app loads
  - **THEN** all sections are visible: Navbar, Hero, WantToWork, Services, Skills, ProjectGallery, Testimonials, Features, Blog, ContactCTA, Footer

### 8. Features
- No dedicated spec block — hold this band to the design notes.
- Anchors: Features That You Will Get · All startups need to make their business work

### 9. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Continue Reading →

### 10. ContactCTA
- No dedicated spec block — hold this band to the design notes.
- Anchors: Send us a message if you have an issue with your order. · Contact Us Now

### 11. Footer
- The footer SHALL include a link to Component Dock.
- Scenario — Footer link present:
  - **WHEN** the footer is visible
  - **THEN** a link to "Component Dock" with href "https://www.componentdock.com/" is present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/venture/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/venture/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/venture` ships on https://venture.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/venture/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/venture/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/venture/public/CNAME` = `venture.free.componentdock.com`
  and the package `homepage` = `https://venture.free.componentdock.com`.
