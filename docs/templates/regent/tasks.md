# Regent — Implementation Tasks

Source design: **Suites** (`https://colorlib.com/wp/template/suites/`) → recreation name **regent**. Shipped at https://regent.free.componentdock.com.

Scope: Regent is a luxury hotel & resort landing page template built with React 19, Tailwind CSS 4, and TypeScript. It showcases rooms, amenities, gallery, events, and testimonials — matching the structure and design tokens of the ColorLib Suites template under a new original name.

## Component breakdown

Render order as composed in `apps/regent/src/App.tsx`:

### 1. Navbar
- The navbar SHALL show the brand name and navigation links with a working dropdown.
- Scenario — Brand and links:
  - **WHEN** the Navbar is rendered
  - **THEN** I see the text "Regent"
  - **AND** I see links for Home, Rooms, Events, About, Contact
- Scenario — Rooms dropdown toggles:
  - **WHEN** I click the Rooms button
  - **THEN** I see Standard, Family, Suite options
  - **WHEN** I click the Rooms button again
  - **THEN** the dropdown closes

### 2. Hero
- The hero section SHALL show a carousel with 3 slides and navigation controls.
- Scenario — Initial slide:
  - **WHEN** the Hero is rendered
  - **THEN** I see the heading "Welcome To Regent"
  - **AND** I see the caption "Hotel & Resort"
- Scenario — Navigation arrows:
  - **WHEN** I click the next arrow
  - **THEN** the slide changes to "Unique Experience"
  - **WHEN** I click the previous arrow
  - **THEN** the slide returns to "Welcome To Regent"

### 3. Rooms
- The rooms section SHALL display 6 room cards in a grid layout.
- Scenario — Room cards:
  - **WHEN** the Rooms section is rendered
  - **THEN** I see 6 room cards
  - **AND** each card shows a room name and price

### 4. About
- The about section SHALL display a two-column layout with image and text.
- Scenario — About content:
  - **WHEN** the About section is rendered
  - **THEN** I see "About Us" heading
  - **AND** I see a play button overlay
  - **AND** I see a "Watch Video" link

### 5. Features
- The features section SHALL display 8 hotel amenity items with icons.
- Scenario — Feature items:
  - **WHEN** the Features section is rendered
  - **THEN** I see 8 feature items with icons and labels

### 6. Promo
- The promo section SHALL display a promotional offer with a parallax background.
- Scenario — Promo content:
  - **WHEN** the Promo section is rendered
  - **THEN** I see "Summer Special" heading
  - **AND** I see a "Book Now" button

### 7. Gallery
- The gallery section SHALL display a grid of 8 hotel images.
- Scenario — Gallery images:
  - **WHEN** the Gallery section is rendered
  - **THEN** I see 8 gallery images

### 8. Events
- The events section SHALL show 3 event cards with details.
- Scenario — Event cards:
  - **WHEN** the Events section is rendered
  - **THEN** I see 3 event cards with titles and dates

### 9. Testimonials
- The testimonials section SHALL display 3 guest testimonials.
- Scenario — Testimonial content:
  - **WHEN** the Testimonials section is rendered
  - **THEN** I see 3 testimonials with names and quotes

### 10. Footer
- The footer SHALL show contact information and link to Component Dock.
- Scenario — Footer content:
  - **WHEN** the Footer is rendered
  - **THEN** I see the copyright text
  - **AND** I see a link to Component Dock
  - **AND** the link points to https://www.componentdock.com/

### Cross-cutting requirements

- **App renders all major sections** — The application SHALL render all 10 sections in the correct order.
  - Scenario — All sections present: **WHEN** the App component is rendered; **THEN** I see a navigation landmark; **AND** I see a main content area; **AND** I see a contentinfo landmark (footer)
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/regent/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/regent/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/regent` ships on https://regent.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/regent/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/regent/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regent/public/CNAME` = `regent.free.componentdock.com`
  and the package `homepage` = `https://regent.free.componentdock.com`.
