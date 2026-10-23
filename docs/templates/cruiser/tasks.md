# Cruiser — Implementation Tasks

Source design: **Skater** (`https://colorlib.com/wp/template/skater/`) → recreation name **cruiser**. Shipped at https://cruiser.free.componentdock.com.

Scope: A dark-themed skateboarding personal/portfolio site with hero carousel, services grid, performance showcase, team section, pricing tiers, FAQ, testimonials, blog, and contact form.

## Component breakdown

Render order as composed in `apps/cruiser/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display the brand "Cruiser" and links to Home, Services, About, Testimonials, Blog, and Contact.
- Scenario — Navigation links scroll to sections:
  - **GIVEN** the navbar is rendered
  - **WHEN** a user clicks a nav link
  - **THEN** the page scrolls to the corresponding section

### 2. Hero
- The hero section SHALL display at least one slide with a heading, description, and CTA button.
- Scenario — Hero slide is visible:
  - **GIVEN** the page loads
  - **WHEN** the hero carousel renders
  - **THEN** at least one slide with heading text is visible

### 3. Services
- The services section SHALL display 6 cards in a 3-column grid, each with an icon, title, and description.
- Scenario — All service cards render:
  - **GIVEN** the services section loads
  - **WHEN** rendered
  - **THEN** 6 service cards are displayed

### 4. Performance
- No dedicated spec block — hold this band to the design notes.

### 5. Mentor
- No dedicated spec block — hold this band to the design notes.

### 6. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Play video · About Cruiser

### 7. Team
- No dedicated spec block — hold this band to the design notes.
- Anchors: Meet Our Team

### 8. Pricing
- The pricing section SHALL display Basic ($47/year), Premium ($200/year), and Professional ($750/year) tiers with feature lists.
- Scenario — Pricing tiers display correct prices:
  - **GIVEN** the pricing section loads
  - **WHEN** rendered
  - **THEN** all 3 tiers display with their respective prices

### 9. Faq
- No dedicated spec block — hold this band to the design notes.
- Anchors: Frequently Asked

### 10. Testimonials
- The template SHALL render 13 sections in order: Navbar, Hero, Services, Performance, Mentor, About, Team, Pricing, FAQ, Testimonials, Blog, Contact, Footer.
- Scenario — All sections render on page load:
  - **GIVEN** a user loads the page
  - **WHEN** they scroll through the entire page
  - **THEN** all 13 sections are present and visible

### 11. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest News · Read More

### 12. Contact
- The contact form SHALL have first name, last name, email, and message fields.
- Scenario — Contact form renders all fields:
  - **GIVEN** the contact section loads
  - **WHEN** rendered
  - **THEN** input fields for first name, last name, email, and a message textarea are present

### 13. Footer
- The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer contains Component Dock link:
  - **GIVEN** the footer renders
  - **WHEN** a user inspects it
  - **THEN** a link to componentdock.com is present with text mentioning "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cruiser/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cruiser/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/cruiser` ships on https://cruiser.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cruiser/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cruiser/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cruiser/public/CNAME` = `cruiser.free.componentdock.com`
  and the package `homepage` = `https://cruiser.free.componentdock.com`.
