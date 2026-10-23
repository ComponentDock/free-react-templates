# Optic — Implementation Tasks

Source design: **Credo** (`https://colorlib.com/wp/template/credo/`) → recreation name **optic**. Shipped at https://optic.free.componentdock.com.

Scope: A photographer personal portfolio with warm gold accent, featuring a split navbar, hero section, services grid, about with progress bars. It also includes photo gallery, testimonials carousel, blog cards, contact form, and 4-column footer. Recreation of ColorLib "Credo" (https://colorlib.com/wp/template/credo/).

## Component breakdown

Render order as composed in `apps/optic/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display a centered logo with left and right navigation links.
- Scenario — Navigation links:
  - **WHEN** the Optic app loads
  - **THEN** the navbar displays left links: Home, About, Services
  - **AND** the navbar displays right links: Gallery, Blog, Contact
  - **AND** the navbar displays the logo text "Optic"
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the mobile menu toggle button
  - **THEN** the mobile menu opens
  - **AND** when the user clicks a mobile link, the menu closes

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: I'm Alex Morgan · Photographer · Speaker · Contact Me

### 3. Services
- The services section SHALL display four photography services in a grid layout.
- Scenario — Service cards:
  - **WHEN** the Optic app loads
  - **THEN** the services section displays heading "Services"
  - **AND** the services section displays cards for Wedding, Events, Conferences, and Culture
  - **AND** each card has a title and description

### 4. About
- The about section SHALL display bio text and skill progress bars.
- Scenario — About content:
  - **WHEN** the Optic app loads
  - **THEN** the about section displays heading "About Me"
  - **AND** the about section displays bio text about the photographer
  - **AND** the about section displays progress bars for Photographer (89%), Wedding (75%), Events (94%), and Conferences (94%)

### 5. Gallery
- The gallery section SHALL display a grid of photography images with hover overlay.
- Scenario — Gallery images:
  - **WHEN** the Optic app loads
  - **THEN** the gallery section displays heading "My Photography"
  - **AND** the gallery section displays 10 images

### 6. Testimonials
- The testimonials section SHALL display a rotating carousel of client quotes.
- Scenario — Testimonial navigation:
  - **WHEN** the Optic app loads
  - **THEN** the testimonials section displays heading "What Clients Are Saying"
  - **AND** the testimonials section displays the first testimonial quote
  - **AND** when the user clicks "Next testimonial", the next quote is shown
  - **AND** when the user clicks "Previous testimonial", the previous quote is shown

### 7. Blog
- The blog section SHALL display three blog post cards with images, titles, dates, and excerpts.
- Scenario — Blog posts:
  - **WHEN** the Optic app loads
  - **THEN** the blog section displays heading "Blog Posts"
  - **AND** the blog section displays three blog post cards
  - **AND** each card has a "Read More" link

### 8. Contact
- The contact section SHALL display a contact form with input fields and submit button.
- Scenario — Contact form fields:
  - **WHEN** the Optic app loads
  - **THEN** the contact section displays heading "Say Hello"
  - **AND** the contact form has fields for first name, last name, email, subject, and message
  - **AND** the contact form has a "Send Message" submit button
- Scenario — Form submission prevention:
  - **WHEN** the user submits the contact form
  - **THEN** the form submission is prevented (no page reload)

### 9. Footer
- The footer SHALL display brand info, link columns, social icons, and copyright with Component Dock link.
- Scenario — Footer content:
  - **WHEN** the Optic app loads
  - **THEN** the footer displays the logo "Optic"
  - **AND** the footer displays link columns for Services, Resources, and Quick Links
  - **AND** the footer displays social icons for Twitter, Facebook, Instagram, Dribbble, and LinkedIn
  - **AND** the footer displays a copyright line with a "Component Dock" link to https://www.componentdock.com/

### Cross-cutting requirements

- **Full page render with all sections** — The Optic app SHALL render a complete landing page with header, hero, services, about, gallery, testimonials, blog, contact, and footer sections.
  - Scenario — Document title and landmarks: **WHEN** the Optic app loads; **THEN** the document title is "Optic — Photographer Portfolio"; **AND** the page contains a banner landmark (header); **AND** the page contains a main landmark; **AND** the page contains a contentinfo landmark (footer)
  - Scenario — Hero section content: **WHEN** the Optic app loads; **THEN** the hero section displays the heading "I'm Alex Morgan"; **AND** the hero section displays "Photographer" and "Speaker" role text; **AND** the hero section displays a "Contact Me" call-to-action button
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/optic/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/optic/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/optic` ships on https://optic.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/optic/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/optic/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/optic/public/CNAME` = `optic.free.componentdock.com`
  and the package `homepage` = `https://optic.free.componentdock.com`.
