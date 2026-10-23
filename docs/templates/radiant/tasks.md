# Radiant — Implementation Tasks

Source design: **Quantum** (`https://colorlib.com/wp/template/quantum/`) → recreation name **radiant**. Shipped at https://radiant.free.componentdock.com.

Scope: Radiant is a business/agency landing page template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/radiant/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky navbar with the logo "Radiant." (teal dot accent), navigation links, search button, and social icons.
- Scenario — Desktop nav shows all links:
  - **WHEN** the page loads on desktop
  - **THEN** the navbar shows Radiant. logo, and links: Home, Features, Pricing, Services, About, Contact
  - **AND** a search button and social icons (Twitter, Facebook) are visible

### 2. Hero
- The template SHALL display a split hero with a headline on the left, two feature cards (Creative, Design), and an image with "Modern Design" overlay on the right.
- Scenario — Hero renders headline and features:
  - **WHEN** the page loads
  - **THEN** the hero shows the headline "Design is not just what it looks like and how it feels. Design is how it works."
  - **AND** two feature cards are visible: Creative and Design
- Scenario — Hero shows image overlay:
  - **WHEN** the page loads
  - **THEN** a hero image is visible with "Modern Design" overlay text

### 3. AboutUs
- The template SHALL display an About Us section with subtitle, heading, and three feature columns (Years of Experience, Innovative, Solutions).
- Scenario — Three columns render:
  - **WHEN** the page scrolls to About Us
  - **THEN** three feature headings are visible: Years of Experience, Innovative, Solutions
  - **AND** the "15 years" highlight is displayed

### 4. Gallery
- The template SHALL display a masonry-style image gallery with 5 placeholder images.
- Scenario — Five gallery images render:
  - **WHEN** the page loads
  - **THEN** five gallery images are visible in a grid layout

### 5. Pricing
- The template SHALL display a pricing section with three plans: Free ($0.00), Premium ($99.00), Enterprise ($180.00), each with feature lists and "Get started" CTA buttons.
- Scenario — Three pricing plans render:
  - **WHEN** the page loads
  - **THEN** three pricing cards are visible with plan names Free, Premium, Enterprise
  - **AND** prices $0.00, $99.00, $180.00 are displayed
- Scenario — Each plan has a CTA button:
  - **WHEN** the page loads
  - **THEN** three "Get started" buttons are visible

### 6. Features
- The template SHALL display a split layout with a heading on the left and two feature cards (Creativity, Solutions) on the right.
- Scenario — Two feature cards render:
  - **WHEN** the page scrolls to the Features section
  - **THEN** Creativity and Solutions headings are visible

### 7. Testimonial
- The template SHALL display a split testimonial with a background image on the left and a blockquote with person name and role on the right.
- Scenario — Testimonial renders with attribution:
  - **WHEN** the page loads
  - **THEN** a testimonial quote is visible from "James Wilson", CEO, Co-Founder

### 8. Footer
- The template SHALL display a footer with four columns (Help, About, Support, Subscribe) and a copyright line linking to https://www.componentdock.com/ as "Component Dock".
- Scenario — Footer has four columns:
  - **WHEN** the page loads
  - **THEN** four footer columns are visible: Help, About, Support, Subscribe
- Scenario — Footer links to Component Dock:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text mentions "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/radiant/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/radiant/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/radiant` ships on https://radiant.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/radiant/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/radiant/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/radiant/public/CNAME` = `radiant.free.componentdock.com`
  and the package `homepage` = `https://radiant.free.componentdock.com`.
