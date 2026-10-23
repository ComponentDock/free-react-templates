# Belmont — Implementation Tasks

Source design: **Samira** (`https://colorlib.com/wp/template/samira/`) → recreation name **belmont**. Shipped at https://belmont.free.componentdock.com.

Scope: Belmont is a free luxury hotel website template that recreates the ColorLib Samira design in React 19 + Tailwind CSS 4 + TypeScript. It provides a complete landing page for a luxury resort/hotel with navigation, hero slider, booking bar, intro section, featured room, room listings, image gallery, newsletter signup, and footer.

## Component breakdown

Render order as composed in `apps/belmont/src/App.tsx`:

### 1. Navbar
- The template SHALL display a transparent navigation bar with the brand logo ("hotel" + "Belmont" + 5 stars), navigation links (Home, About Us, Rooms, News, Contact), and a "Book Your Stay" button.
- Scenario — Desktop navbar renders all elements:
  - **GIVEN** the page is loaded on a desktop viewport
  - **THEN** the navbar displays the brand text "hotel" and "Belmont"
  - **AND** five star icons are visible
  - **AND** navigation links for Home, About Us, Rooms, News, Contact are visible
  - **AND** a "Book Your Stay" button is present
- Scenario — Mobile menu toggles:
  - **GIVEN** the page is loaded on a mobile viewport
  - **WHEN** the user clicks the hamburger menu button
  - **THEN** the mobile menu expands showing navigation links
- Scenario — Mobile menu closes:
  - **GIVEN** the mobile menu is open
  - **WHEN** the user clicks the close button
  - **THEN** the mobile menu collapses

### 2. Hero
- The template SHALL display a full-width hero section with a background image, a subtitle "luxury resort", a heading "Amazing Services, Location & Facilities", and a "Book Your Stay" CTA button.
- Scenario — Hero renders all elements:
  - **GIVEN** the page is loaded
  - **THEN** the hero section displays the subtitle "luxury resort"
  - **AND** the heading "Amazing Services, Location & Facilities" is visible
  - **AND** a "Book Your Stay" button is present

### 3. BookingBar
- The template SHALL display a white booking bar section with three select dropdowns (Arrival Date, Departure Date, Rooms) and a "Request a Quote" button.
- Scenario — Booking bar renders all controls:
  - **GIVEN** the page is loaded
  - **THEN** the booking bar shows three labeled select elements
  - **AND** a "Request a Quote" button is present
- Scenario — Booking bar form submission:
  - **GIVEN** the page is loaded
  - **WHEN** the user selects dates and rooms and clicks "Request a Quote"
  - **THEN** the form handles submission without page reload

### 4. Intro
- The template SHALL display a split intro section with left-side text content (subtitle "luxury resort", heading "Relax in our Hotel", description paragraph, "View Rooms" link, "Book Your Stay" button) and right-side overlapping images.
- Scenario — Intro renders text and images:
  - **GIVEN** the page is loaded
  - **THEN** the intro section shows "Relax in our Hotel" heading
  - **AND** a "View Rooms" link is present
  - **AND** a "Book Your Stay" button is present
  - **AND** images are displayed on the right side

### 5. BigRoom
- The template SHALL display a split section with a left-side image slider (with prev/next navigation) and right-side text content (heading "Rooms with private swimming pool", description, and a testimonial with 5 stars, a quote, and an author name).
- Scenario — Big room renders all elements:
  - **GIVEN** the page is loaded
  - **THEN** the heading "Rooms with private swimming pool" is visible
  - **AND** a testimonial quote is displayed
  - **AND** 5 star icons are visible in the testimonial
  - **AND** prev/next navigation buttons are present
- Scenario — Image slider navigates forward:
  - **GIVEN** the page is loaded
  - **WHEN** the user clicks the next button
  - **THEN** the displayed image changes
- Scenario — Image slider navigates backward:
  - **GIVEN** the page is loaded on a non-first slide
  - **WHEN** the user clicks the previous button
  - **THEN** the displayed image changes to the previous one

### 6. Rooms
- The template SHALL display a "Our Rooms" section with three room cards in a grid. Each card has an image, price, type label, title, description, and a "Book Now" button.
- Scenario — All three rooms render:
  - **GIVEN** the page is loaded
  - **THEN** the rooms section shows three room cards
  - **AND** each card has a price displayed
  - **AND** each card has a "Book Now" button

### 7. Gallery
- The template SHALL display an "Our Gallery" section with an image carousel showing photos with a hover overlay (+ icon) and prev/next navigation buttons.
- Scenario — Gallery renders images:
  - **GIVEN** the page is loaded
  - **THEN** the gallery section displays images
  - **AND** prev/next navigation buttons are present
- Scenario — Gallery navigates forward:
  - **GIVEN** the page is loaded
  - **WHEN** the user clicks the next button
  - **THEN** the gallery slides to the next set of images
- Scenario — Gallery navigates backward:
  - **GIVEN** the page is loaded
  - **WHEN** the user clicks the previous button
  - **THEN** the gallery slides to the previous set of images

### 8. Newsletter
- The template SHALL display a newsletter section split into left text ("Our Newsletter" heading) and right email input with a "Subscribe" button.
- Scenario — Newsletter form renders:
  - **GIVEN** the page is loaded
  - **THEN** the newsletter section shows "Our Newsletter" heading
  - **AND** an email input field is present
  - **AND** a "Subscribe" button is present
- Scenario — Newsletter form submits:
  - **GIVEN** the page is loaded
  - **WHEN** the user enters an email and clicks Subscribe
  - **THEN** the input is cleared

### 9. Footer
- The template SHALL display a dark footer with the Belmont logo, navigation menu, contact info (address, phone, email), and a Component Dock attribution link.
- Scenario — Footer renders all sections:
  - **GIVEN** the page is loaded
  - **THEN** the footer shows the Belmont logo
  - **AND** navigation links are present
  - **AND** contact information is displayed
  - **AND** a link to componentdock.com is displayed with text "Component Dock"

### Cross-cutting requirements

- **App composes all sections** — The template SHALL compose all sections in the correct order: Navbar, Hero, BookingBar, Intro, BigRoom, Rooms, Gallery, Newsletter, Footer.
  - Scenario — All sections render in App: **GIVEN** the page is loaded; **THEN** all major sections are present in the DOM
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/belmont/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/belmont/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/belmont` ships on https://belmont.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/belmont/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/belmont/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/belmont/public/CNAME` = `belmont.free.componentdock.com`
  and the package `homepage` = `https://belmont.free.componentdock.com`.
