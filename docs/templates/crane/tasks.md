# Crane — Implementation Tasks

Source design: **Constructo** (`https://colorlib.com/wp/template/constructo/`) → recreation name **crane**. Shipped at https://crane.free.componentdock.com.

Scope: Recreate the ColorLib "Constructo" construction company landing page as a modern React 19 + Tailwind CSS 4 + TypeScript single-page template named "Crane".

## Component breakdown

Render order as composed in `apps/crane/src/App.tsx`:

### 1. TopBar
- The TopBar SHALL display "Opening Hours: 10:00 AM – 7:00 PM" on the left and a "Get a Quote" button on the right (desktop only).
- Scenario — TopBar renders on desktop:
  - **GIVEN** the viewport is desktop (≥1024px)
  - **THEN** the opening hours text is visible
  - **AND** the "Get a Quote" button is visible

### 2. Navbar
- The navbar SHALL display Home, About, Services, Projects, Blog, and Contact links plus a search icon.
- Scenario — Navbar renders all navigation items:
  - **GIVEN** the navbar is rendered
  - **THEN** Home, About, Services, Projects, Blog, Contact links are visible
  - **AND** a search icon button is present

### 3. Hero
- The hero section SHALL display a heading "We Build Your Home Secure and Safe", subtext, and an "Our Services" CTA button over a background image with dark overlay.
- Scenario — Hero renders heading and button:
  - **GIVEN** the hero section is visible
  - **THEN** the heading text is present
  - **AND** the "Our Services" button is visible

### 4. Features
- The features section SHALL display three feature cards in a row: "Creative Plan & Design", "Talented Peoples", and "Modern Tools", each with an icon, title, and description.
- Scenario — All three features render:
  - **GIVEN** the features section is visible
  - **THEN** three feature cards are displayed
  - **AND** each card has an icon, title, and description text

### 5. About
- The about section SHALL display an image on the left and text content on the right including a heading, two paragraphs, and an "About Us" button.
- Scenario — About section renders with content:
  - **GIVEN** the about section is visible
  - **THEN** an image is displayed on the left
  - **AND** a heading "We Serve all of your Construction Services" is visible
  - **AND** an "About Us" button is present

### 6. Services
- The services section SHALL display a section title "Our Services" and a row of service cards each with an image, title, description, and "More" link.
- Scenario — Services render with cards:
  - **GIVEN** the services section is visible
  - **THEN** the "Our Services" heading is displayed
  - **AND** at least 3 service cards are visible

### 7. Gallery
- The gallery section SHALL display filter buttons (All, Architecture, Buildings, Bridges) and a grid of project images with hover overlay.
- Scenario — Gallery renders with filter buttons:
  - **GIVEN** the gallery section is visible
  - **THEN** filter buttons for All, Architecture, Buildings, Bridges are present
  - **AND** project images are displayed in a grid

### 8. WhyChooseUs
- The Why Choose Us section SHALL display a heading, quote text, description, and a video play button on the left, with supporting content.
- Scenario — Why Choose Us renders:
  - **GIVEN** the Why Choose Us section is visible
  - **THEN** a "Why Choose Us?" heading is present
  - **AND** a play button icon is visible

### 9. Testimonials
- The testimonials section SHALL display a section title "Testimonials" and testimonial cards with avatar, name, role, and quote.
- Scenario — Testimonials render:
  - **GIVEN** the testimonials section is visible
  - **THEN** the "Testimonials" heading is displayed
  - **AND** at least one testimonial card with name and quote is visible

### 10. ContactCTA
- The contact CTA SHALL display a dark overlay banner with heading text and a "Contact Us" button.
- Scenario — Contact CTA renders:
  - **GIVEN** the contact CTA section is visible
  - **THEN** a heading about construction experts is visible
  - **AND** a "Contact Us" button is present

### 11. Footer
- The footer SHALL display four columns (About, Popular Searches, Useful Links, Subscribe) and a bottom bar with a link to https://www.componentdock.com/.
- Scenario — Footer renders with Component Dock link:
  - **GIVEN** the footer is visible
  - **THEN** four footer columns are present
  - **AND** a link to componentdock.com is visible with text mentioning "Component Dock"

### Cross-cutting requirements

- **All sections render in correct order** — The template SHALL display 11 sections in the correct order: TopBar, Navbar, Hero, Features, About, Services, Gallery, WhyChooseUs, Testimonials, ContactCTA, Footer.
  - Scenario — Page loads with all sections: **GIVEN** the page loads; **THEN** all 11 sections are visible in the correct order
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/crane/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/crane/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/crane` ships on https://crane.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/crane/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/crane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crane/public/CNAME` = `crane.free.componentdock.com`
  and the package `homepage` = `https://crane.free.componentdock.com`.
