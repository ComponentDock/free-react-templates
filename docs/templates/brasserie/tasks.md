# Brasserie — Implementation Tasks

Source design: **Caviar** (`https://colorlib.com/wp/template/caviar/`) → recreation name **brasserie**. Shipped at https://brasserie.free.componentdock.com.

Scope: A Premium Restaurant template with hero, about, specials / menu and awards sections.

## Component breakdown

Render order as composed in `apps/brasserie/src/App.tsx`:

### 1. Navbar
- The system SHALL render a black navbar with the site name "Brasserie", section links (Home, About, Menu, Awards, Testimonials, Reservation), and a hamburger toggle that opens a mobile menu on small screens.
- Scenario — Desktop navigation:
  - **GIVEN** the page is rendered
  - **WHEN** the navbar is displayed
  - **THEN** it SHALL show the site name "Brasserie" linking to `#home`
  - **AND** it SHALL show links to Home, About, Menu, Awards, Testimonials, Reservation
- Scenario — Mobile menu toggle:
  - **GIVEN** the page is rendered on a mobile viewport
  - **WHEN** the user taps the hamburger button
  - **THEN** the mobile menu SHALL become visible
  - **AND** the button label SHALL change to "Close menu"

### 2. Hero
- The system SHALL render a hero section with a dark overlay on a background image, the heading "Brasserie", subtitle "Premium Restaurant", and a "Reservation" call-to-action button linking to the reservation section.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero section is displayed
  - **THEN** it SHALL show a heading "Brasserie"
  - **AND** it SHALL show text "Premium Restaurant"
  - **AND** it SHALL show a "Reservation" button linking to `#reservation`

### 3. About
- The system SHALL render an about section with two sub-sections: "Restaurant Style" and "Our Chef", each with descriptive text and an image.
- Scenario — About content:
  - **GIVEN** the page is rendered
  - **WHEN** the about section is displayed
  - **THEN** it SHALL show a heading "About Us"
  - **AND** it SHALL show sub-headings "Restaurant Style" and "Our Chef"

### 4. Specials
- The system SHALL render a specials section with the heading "Our Specials", a "View The Menu" CTA, and three dish cards showing name and price.
- Scenario — Specials display:
  - **GIVEN** the page is rendered
  - **WHEN** the specials section is displayed
  - **THEN** it SHALL show a heading "Our Specials"
  - **AND** it SHALL show a "View The Menu" link
  - **AND** it SHALL show dishes with names and prices

### 5. Awards
- The system SHALL render an awards section with award cards showing icons, titles, and descriptions.
- Scenario — Awards display:
  - **GIVEN** the page is rendered
  - **WHEN** the awards section is displayed
  - **THEN** it SHALL show a heading "Awards"
  - **AND** it SHALL show award entries

### 6. Testimonials
- The system SHALL render a testimonials section with testimonial cards showing author name, role, and quote.
- Scenario — Testimonials display:
  - **GIVEN** the page is rendered
  - **WHEN** the testimonials section is displayed
  - **THEN** it SHALL show a heading "Testimonials"
  - **AND** it SHALL show testimonial authors Robert Jonson, Clara Hudson, Jane Black

### 7. Reservation
- The system SHALL render a reservation section with the heading "Reserve Your Desk" and a "Book Now" CTA button.
- Scenario — Reservation content:
  - **GIVEN** the page is rendered
  - **WHEN** the reservation section is displayed
  - **THEN** it SHALL show a heading "Reserve Your Desk"
  - **AND** it SHALL show a "Book Now" button linking to `#reservation`

### 8. Footer
- The system SHALL render a footer with the brand name "Brasserie", copyright text, and a link to `https://www.componentdock.com/` labeled "Component Dock".
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show the brand name "Brasserie"
  - **AND** it SHALL show a link to `https://www.componentdock.com/`
  - **AND** the link text SHALL be "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/brasserie/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/brasserie/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/brasserie` ships on https://brasserie.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/brasserie/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/brasserie/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/brasserie/public/CNAME` = `brasserie.free.componentdock.com`
  and the package `homepage` = `https://brasserie.free.componentdock.com`.
