# Presswell — Implementation Tasks

Source design: **Laundry** (`https://colorlib.com/wp/template/laundry/`) → recreation name **presswell**. Shipped at https://presswell.free.componentdock.com.

Scope: Presswell is a single-page laundry service template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Laundry" design, built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/presswell/src/App.tsx`:

### 1. Navbar
- The system SHALL render a sticky top navigation bar with the site name "Presswell", navigation links (Home, About, Services, Blog, Contact), a phone number, and a "Make an Appointment" CTA button.
- Scenario — Navbar content:
  - **GIVEN** the Presswell page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the brand name "Presswell"
  - **AND** it SHALL show navigation links for Home, About, Services, Blog, and Contact
  - **AND** it SHALL show a phone number "(08) 728 256 266"
  - **AND** it SHALL show a "Make an Appointment" link
- Scenario — Mobile menu toggle:
  - **GIVEN** the page is rendered
  - **WHEN** the user clicks the mobile menu toggle button
  - **THEN** the mobile navigation menu SHALL open
  - **AND** clicking a nav link SHALL close the menu

### 2. Hero
- The system SHALL render a full-width hero with a background image, a level-1 headline "Quality laundry service in your city", subtext, and an "Explore Services" CTA button.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero section is displayed
  - **THEN** it SHALL show a level-1 headline about laundry service
  - **AND** it SHALL show subtext about clean clothes
  - **AND** it SHALL show an "Explore Services" link

### 3. Process
- The system SHALL render a "This is how we work" section with three process steps: collect, wash, and deliver.
- Scenario — Process steps:
  - **GIVEN** the page is rendered
  - **WHEN** the process section is displayed
  - **THEN** it SHALL show the heading "This is how we work"
  - **AND** it SHALL render three steps: "We collect your clothes", "Wash your clothes", "Get delivery"

### 4. Services
- The system SHALL render a "Services we offer" section with two service cards (Cloth laundry, Cloth ironing).
- Scenario — Service cards:
  - **GIVEN** the page is rendered
  - **WHEN** the services section is displayed
  - **THEN** it SHALL show the heading "Services we offer"
  - **AND** it SHALL render cards for "Cloth laundry" and "Cloth ironing"

### 5. CtaBand
- The system SHALL render a full-width call-to-action band with "Call us for a service" heading and a "Learn More" button.
- Scenario — CTA content:
  - **GIVEN** the page is rendered
  - **WHEN** the CTA band is displayed
  - **THEN** it SHALL show the heading "Call us for a service"
  - **AND** it SHALL show a "Learn More" link

### 6. Testimonials
- The system SHALL render a testimonials section with customer quotes, avatar images, and 5-star ratings.
- Scenario — Testimonials content:
  - **GIVEN** the page is rendered
  - **WHEN** the testimonials section is displayed
  - **THEN** it SHALL show at least three customer testimonials
  - **AND** each SHALL have a name and star rating

### 7. Stats
- The system SHALL render a "Company achievement" section with three stat counters.
- Scenario — Stats content:
  - **GIVEN** the page is rendered
  - **WHEN** the stats section is displayed
  - **THEN** it SHALL show the heading "Company achievement"
  - **AND** it SHALL render stats for "4000+", "300+", and "95%"

### 8. About
- The system SHALL render an about section with a heading, descriptive text, and an "About Us" button.
- Scenario — About content:
  - **GIVEN** the page is rendered
  - **WHEN** the about section is displayed
  - **THEN** it SHALL show the heading "About company"
  - **AND** it SHALL show an "About Us" link

### 9. Footer
- The system SHALL render a footer with the brand name, service links, contact information, and a copyright line linking to Component Dock.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show the brand name "Presswell"
  - **AND** it SHALL show service links (Dry Cleaning, Wash & Fold, etc.)
  - **AND** it SHALL show contact information (phone, email, address)
  - **AND** it SHALL link to https://www.componentdock.com/
- Scenario — Footer copyright:
  - **GIVEN** the page is rendered
  - **WHEN** the footer bottom is displayed
  - **THEN** it SHALL show a copyright line mentioning "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/presswell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/presswell/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/presswell` ships on https://presswell.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/presswell/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/presswell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/presswell/public/CNAME` = `presswell.free.componentdock.com`
  and the package `homepage` = `https://presswell.free.componentdock.com`.
