# Venuepoint — Implementation Tasks

Source design: **Thevenue** (`https://colorlib.com/wp/template/thevenue/`) → recreation name **venuepoint**. Shipped at https://venuepoint.free.componentdock.com.

Scope: A Restaurant / Dining template with hero, intro, video, signature dish and reservation form accepts sections. Recreation of ColorLib's **Thevenue** restaurant template.

## Component breakdown

Render order as composed in `apps/venuepoint/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle navigation menu · The Venue · Reservations: +34 586 778 8892

### 2. Hero
- Users SHALL see a full-width parallax background with centered heading and description.
- Scenario — Hero section renders:
  - **WHEN** the user scrolls to the hero section
  - **THEN** it shows a full-width parallax background image
  - **AND** the heading "An Extraordinary Experience"
  - **AND** a description paragraph
  - **AND** a scroll-down indicator

### 3. Intro
- Users SHALL see a subtitle, heading, description, and two-column image grid.
- Scenario — Intro section renders:
  - **WHEN** the user scrolls to the intro section
  - **THEN** it shows subtitle "Something new"
  - **AND** heading "An Extraordinary Experience"
  - **AND** a description paragraph
  - **AND** a two-column image grid

### 4. VideoSection
- Users SHALL see a parallax background with text and a play button.
- Scenario — Video section renders:
  - **WHEN** the user scrolls to the video section
  - **THEN** it shows a parallax background
  - **AND** text "Food for the soul"
  - **AND** a play button linking to a video

### 5. SignatureDish
- Users SHALL see a two-column layout with dish details and an order button.
- Scenario — Signature dish section renders:
  - **WHEN** the user scrolls to the signature dish section
  - **THEN** it shows subtitle "Something new"
  - **AND** heading "Our Signature Dish"
  - **AND** a 5-star rating
  - **AND** dish name, price, ingredient list
  - **AND** an "Order Now" button
  - **AND** a dish image on the right

### 6. TheMenu
- Users SHALL see a menu with three columns: Starters, Main, and Desserts.
- Scenario — Menu section renders:
  - **WHEN** the user scrolls to the menu section
  - **THEN** it shows "The Menu" title with 5 stars
  - **AND** three columns: Starters, Main, Desserts
  - **AND** each column contains 5 dishes with title, price, ingredients, and order link

### 7. ReservationForm
- Users SHALL see a reservation form with date, time, and party size inputs.
- Scenario — Reservation form renders:
  - **WHEN** the user scrolls to the reservations section
  - **THEN** it shows a date picker input
  - **AND** a time picker input
  - **AND** a party size select (2-6 persons)
  - **AND** a "Make a Reservation" submit button

### 8. Footer
- Users SHALL see a footer with logo, about, contact, and a link to Component Dock.
- Scenario — Footer renders:
  - **WHEN** the user scrolls to the footer
  - **THEN** it shows the restaurant logo and subtitle
  - **AND** a copyright notice
  - **AND** an about paragraph
  - **AND** contact details: address, phone, email
  - **AND** a link to https://www.componentdock.com/

### Cross-cutting requirements

- **Header displays navigation and contact** — Users SHALL see a sticky header with the restaurant logo, navigation links (Home, About Us, Menu, Delivery, Blog, Contact), and a reservation phone number.
  - Scenario — Header renders on page load: **WHEN** the user visits the page; **THEN** the header shows the restaurant logo "The Venue"; **AND** navigation links: Home, About Us, Menu, Delivery, Blog, Contact; **AND** a reservation phone number "+34 586 778 8892"
  - Scenario — Mobile menu toggle: **WHEN** the user is on a mobile viewport; **THEN** a hamburger menu button appears; **AND** clicking it opens a fullscreen navigation overlay; **AND** clicking a link closes the overlay
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/venuepoint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/venuepoint/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/venuepoint` ships on https://venuepoint.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/venuepoint/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/venuepoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/venuepoint/public/CNAME` = `venuepoint.free.componentdock.com`
  and the package `homepage` = `https://venuepoint.free.componentdock.com`.
