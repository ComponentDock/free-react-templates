# Pavilion — Implementation Tasks

Source design: **Marian** (`https://colorlib.com/wp/template/marian/`) → recreation name **pavilion**. Shipped at https://pavilion.free.componentdock.com.

Scope: Pavilion is a single-page hotel landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Marian" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/pavilion/src/App.tsx`:

### 1. Navbar
- The template SHALL render a navigation bar with the site name "Pavilion", navigation links for Home, About, Rooms, Services, Blog, and Contact, and a "Book Online" call-to-action button.
- Scenario — Navbar renders correctly:
  - **WHEN** the page loads
  - **THEN** I see "Pavilion" branding in the navigation
  - **AND** I see navigation links for Home, About, Rooms, Services, Blog, Contact
  - **AND** I see a "Book Online" button

### 2. Hero
- The template SHALL render a hero section with a background image, the heading "Top Hotel in the City", and the subtitle "Hotel & Resort".
- Scenario — Hero renders headline and subtitle:
  - **WHEN** the page loads
  - **THEN** I see the heading "Top Hotel in the City"
  - **AND** I see the subtitle "Hotel & Resort"
  - **AND** I see a background image

### 3. BookingBar
- The template SHALL render a horizontal booking form with Check In date, Check Out date, Adults dropdown, Children dropdown, Rooms dropdown, and a "Book Now" button.
- Scenario — Booking bar displays all form fields:
  - **WHEN** the page loads
  - **THEN** I see a "Check In" date input
  - **AND** I see a "Check Out" date input
  - **AND** I see an "Adults" dropdown
  - **AND** I see a "Children" dropdown
  - **AND** I see a "Rooms" dropdown
  - **AND** I see a "Book Now" button

### 4. About
- The template SHALL render an about section with a label "About our company", the heading "Make the customer the hero of your story", descriptive paragraphs, and a "Learn More" call-to-action.
- Scenario — About renders company info:
  - **WHEN** the page loads
  - **THEN** I see "About our company"
  - **AND** I see the heading "Make the customer the hero of your story"
  - **AND** I see a "Learn More" call-to-action

### 5. Rooms
- The template SHALL render a rooms section with the heading "Our Rooms", a 3-column grid of 6 room cards (each with image, name, and price), and a "View more" call-to-action.
- Scenario — Rooms renders card grid:
  - **WHEN** the page loads
  - **THEN** I see the heading "Our Rooms"
  - **AND** I see 6 room cards with prices
  - **AND** I see a "View more" call-to-action

### 6. Dining
- The template SHALL render two alternating image-and-text sections: "Dining and Drinks" and "Swimming Pool", each with a "Learn More" border button.
- Scenario — Dining renders two feature sections:
  - **WHEN** the page loads
  - **THEN** I see "Dining and Drinks" heading
  - **AND** I see "Swimming Pool" heading
  - **AND** both sections have "Learn More" buttons

### 7. Testimonials
- The template SHALL render a testimonials section with a customer quote, a 5-star rating, and the author attribution "Clifford Frazier, Regular Client".
- Scenario — Testimonials renders review content:
  - **WHEN** the page loads
  - **THEN** I see testimonial text
  - **AND** I see a 5-star rating
  - **AND** I see the author name "Clifford Frazier"

### 8. Blog
- The template SHALL render a blog section with the heading "Our Blog" and a 3-column grid of 3 blog cards.
- Scenario — Blog renders card grid:
  - **WHEN** the page loads
  - **THEN** I see the heading "Our Blog"
  - **AND** I see 3 blog cards

### 9. Gallery
- The template SHALL render a gallery section with a horizontal strip of hotel images.
- Scenario — Gallery renders image strip:
  - **WHEN** the page loads
  - **THEN** I see a gallery section with images

### 10. Footer
- The template SHALL render a dark footer with Quick Links, Reservations contact information, Our Location, and a newsletter signup form. The footer MUST include a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders all columns:
  - **WHEN** the page loads
  - **THEN** I see "Quick Links" in the footer
  - **AND** I see "Reservations" in the footer
  - **AND** I see "Our Location" in the footer
  - **AND** I see a link to "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/pavilion/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/pavilion/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/pavilion` ships on https://pavilion.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/pavilion/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pavilion/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pavilion/public/CNAME` = `pavilion.free.componentdock.com`
  and the package `homepage` = `https://pavilion.free.componentdock.com`.
