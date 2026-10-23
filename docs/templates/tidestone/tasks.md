# Tidestone — Implementation Tasks

Source design: **Seapalace** (`https://colorlib.com/wp/template/seapalace/`) → recreation name **tidestone**. Shipped at https://tidestone.free.componentdock.com.

Scope: Provide a free, production-ready React recreation of the Seapalace luxury hotel template. The template showcases a high-end hotel/residence website with a hero banner, booking form, room explorer, special facilities, testimonials, news, and a dark footer with Component Dock branding.

## Component breakdown

Render order as composed in `apps/tidestone/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: banner · navigation · Main navigation · Toggle navigation menu

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: See What a Difference a Stay Makes · Luxury · Personal · Book Now

### 3. BookingForm
- The booking form SHALL include a keywords input, selects for arrival/rooms/departure/adult/child, and a Check Availability button.
- Scenario — Booking form fields are present:
  - **WHEN** the page loads
  - **THEN** the booking form contains a keywords input
  - **AND** the form contains selects for Arrival, Number of rooms, Departure, Adult, Child
  - **AND** the form contains a "Check Availability" button

### 4. Welcome
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome · Learn More

### 5. ExploreRooms
- No dedicated spec block — hold this band to the design notes.
- Anchors: Explore Our Rooms · Book Now

### 6. VideoSection
- The page SHALL render all sections in the correct order: Navbar, Hero, BookingForm, Welcome, ExploreRooms, VideoSection, SpecialFacilities, Testimonials, NewsEvents, Footer.
- Scenario — All sections are visible:
  - **WHEN** the page loads
  - **THEN** the navbar is visible with "Tidestone" brand
  - **AND** the hero section shows "Luxury is Personal"
  - **AND** the booking form is visible
  - **AND** the welcome section is visible
  - **AND** the explore rooms section shows 3 room cards
  - **AND** the video section is visible
  - **AND** the special facilities section shows 3 feature cards
  - **AND** the testimonials section is visible
  - **AND** the news section shows 3 blog cards
  - **AND** the footer contains a link to componentdock.com

### 7. SpecialFacilities
- No dedicated spec block — hold this band to the design notes.
- Anchors: Special Facilities

### 8. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Guest Love Us

### 9. NewsEvents
- No dedicated spec block — hold this band to the design notes.
- Anchors: News & Events · Read More

### 10. Footer
- The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer has Component Dock link:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to "https://www.componentdock.com/"
  - **AND** the link text mentions "Component Dock"

### Cross-cutting requirements

- **Navigation links are present** — The navbar SHALL display navigation links for Home, About, Properties, Gallery, Blog, Contact.
  - Scenario — Navigation links are rendered: **WHEN** the page loads; **THEN** the navbar contains links for Home, About, Properties, Gallery, Blog, Contact
- **Room cards display pricing** — The explore rooms section SHALL display 3 room cards with names and pricing.
  - Scenario — Room cards show correct data: **WHEN** the page loads; **THEN** "Classic Bed Room" is shown with price "$150.00"; **AND** "Premium Room" is shown with price "$170.00"; **AND** "Family Room" is shown with price "$190.00"
- **Design tokens match the original** — The template SHALL use the gold/amber brand color (#cca772), Playfair Display for headings, and Roboto for body text, matching the original ColorLib Seapalace design.
  - Scenario — Brand color is applied: **WHEN** the page renders; **THEN** the brand color #cca772 is used for CTAs and accent elements
- **Mobile navigation toggle** — The navbar SHALL support a mobile toggle button that shows/hides the mobile menu.
  - Scenario — Mobile menu toggles: **WHEN** the mobile toggle button is clicked; **THEN** the mobile navigation menu becomes visible; **AND** clicking a nav link closes the menu
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/tidestone/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/tidestone/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/tidestone` ships on https://tidestone.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/tidestone/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/tidestone/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tidestone/public/CNAME` = `tidestone.free.componentdock.com`
  and the package `homepage` = `https://tidestone.free.componentdock.com`.
