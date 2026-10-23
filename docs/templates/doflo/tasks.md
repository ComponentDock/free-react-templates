# Doflo — Implementation Tasks

Source design: **Dizzi** (`https://colorlib.com/wp/template/dizzi/`) → recreation name **doflo**. Shipped at https://doflo.free.componentdock.com.

Scope: Recreate ColorLib Dizzi as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Doflo". The original uses Open Sans font, green (#00d089) primary color, and dark (#1a1a2e) footer. No ColorLib assets are copied; images use picsum.photos placeholders, icons use lucide-react, and brand icons use inline SVGs.

## Component breakdown

Render order as composed in `apps/doflo/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display logo, navigation links, and social icons. On mobile, the menu SHALL be toggled via a hamburger button.
- Scenario — Desktop navigation links render:
  - **GIVEN** a user views the navbar
  - **THEN** links for Home, About, Services, Portfolio, Testimonials, and Contact are visible
- Scenario — Mobile menu toggles:
  - **GIVEN** a user clicks the mobile menu button
  - **THEN** the close button appears
  - **AND** clicking close restores the open button
- Scenario — Mobile menu closes on link click:
  - **GIVEN** the mobile menu is open
  - **WHEN** the user clicks a navigation link
  - **THEN** the mobile menu closes

### 2. Banner
- The banner SHALL display the agency tagline and a call-to-action button.
- Scenario — Banner renders heading and CTA:
  - **GIVEN** a user views the banner section
  - **THEN** the heading reads "Digital and innovative idea"
  - **AND** the subtitle reads "We are digital agency"
  - **AND** an "Explore Work" button is visible

### 3. ClientLogos
- No dedicated spec block — hold this band to the design notes.
- Anchors: Client logos

### 4. About
- The about section SHALL display the agency description and an explore button.
- Scenario — About section renders content:
  - **GIVEN** a user views the about section
  - **THEN** the heading reads "Digital design and development company"
  - **AND** an "Explore Us" button is visible

### 5. Services
- The services section SHALL display three service cards with number, title, description, and technology tags.
- Scenario — Three services render:
  - **GIVEN** a user views the services section
  - **THEN** "User experience design", "Web and App development", and
  - **AND** service numbers 01, 02, 03 are displayed
  - **AND** technology tags like "Branding and Identity", "WordPress",

### 6. Portfolio
- The portfolio section SHALL display project cards filterable by category.
- Scenario — All projects visible by default:
  - **GIVEN** a user views the portfolio section
  - **THEN** the heading reads "Our Projects"
  - **AND** filter tabs All, Web Design, Mobile App, Web Development are visible
  - **AND** 4 project images are displayed
- Scenario — Filtering projects by category:
  - **WHEN** the user clicks the "Mobile App" filter tab
  - **THEN** only 1 project image is displayed
- Scenario — Resetting filter shows all projects:
  - **WHEN** the user clicks "All" after filtering
  - **THEN** 4 project images are displayed again

### 7. Creative
- The creative section SHALL display an image and a heading with a CTA.
- Scenario — Creative section renders:
  - **GIVEN** a user views the creative section
  - **THEN** the heading reads "We work hard and think creatively"
  - **AND** a "See How We Work" button is visible

### 8. Testimonials
- The testimonials section SHALL display client reviews with name, role, and quote.
- Scenario — Testimonial cards render:
  - **GIVEN** a user views the testimonials section
  - **THEN** the heading reads "What Our Clients Say"
  - **AND** at least 2 testimonial cards are visible with name and role

### 9. CTA
- The CTA section SHALL display a call-to-action with three button links.
- Scenario — CTA renders heading and links:
  - **GIVEN** a user views the CTA section
  - **THEN** the heading reads "create something awesome together"
  - **AND** links for "Discuss project", "Services", and "Contact" are visible

### 10. Footer
- The footer SHALL display brand info, company links, resources, contact locations, and a "Made with Component Dock" attribution link.
- Scenario — Footer renders all columns:
  - **GIVEN** a user views the footer
  - **THEN** the brand name "Doflo" is visible
  - **AND** Company links (Media, Carrier, Testimonials, FAQ) are visible
  - **AND** Resources links (UI Kit, WordPress Theme, Illustration) are visible
  - **AND** contact locations London - UK and New York - USA are visible
  - **AND** a "Component Dock" link points to https://www.componentdock.com/

### Cross-cutting requirements

- **Page renders all sections in order** — The application SHALL render Navbar, Banner, ClientLogos, About, Services, Portfolio, Creative, Testimonials, CTA, and Footer in that order.
  - Scenario — All sections render on initial load: **GIVEN** a user visits the Doflo page; **THEN** the document title is "Doflo — Digital Agency Template"; **AND** the navbar with "Doflo" logo is visible; **AND** the banner heading reads "Digital and innovative idea"; **AND** the about heading reads "Digital design and development company"; **AND** the services section renders three cards; **AND** the portfolio heading reads "Our Projects"; **AND** the creative heading reads "We work hard and think creatively"; **AND** the testimonials heading reads "What Our Clients Say"; **AND** the CTA heading reads "create something awesome together"; **AND** the footer renders with "Component Dock" link to https://www.componentdock.com/
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/doflo/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/doflo/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/doflo` ships on https://doflo.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/doflo/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/doflo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/doflo/public/CNAME` = `doflo.free.componentdock.com`
  and the package `homepage` = `https://doflo.free.componentdock.com`.
