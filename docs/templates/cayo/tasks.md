# Cayo — Implementation Tasks

Source design: **Islagrande** (`https://colorlib.com/wp/template/islagrande/`) → recreation name **cayo**. Shipped at https://cayo.free.componentdock.com.

Scope: A hotel template with hero, booking form, services, rooms, counter and video about sections. Recreation of ColorLib "Islagrande" hotel template.

## Component breakdown

Render order as composed in `apps/cayo/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display the brand logo "Cayo" and navigation links: Home, About, Amenities, Rooms, Restaurant, Blog, Contact, plus a "Book Now" CTA button.
- Scenario — Navbar renders on desktop:
  - **WHEN** the page loads
  - **THEN** the navbar shows the brand "Cayo"
  - **AND** navigation links are visible: Home, About, Amenities, Rooms, Restaurant, Blog, Contact
  - **AND** a "Book Now" button/link is visible
- Scenario — Navbar toggles mobile menu:
  - **WHEN** the user clicks the hamburger menu icon
  - **THEN** the mobile menu opens
  - **AND** the menu shows all navigation links
  - **AND** clicking a navigation link closes the menu

### 2. Hero
- The hero SHALL display a split layout with heading text and "Make A Booking" CTA on the left, and an image slider with navigation arrows on the right.
- Scenario — Hero renders heading:
  - **WHEN** the page loads
  - **THEN** the hero shows "Welcome to Cayo Hotel" subheading
  - **AND** "A Perfect Place To Stay" main heading
  - **AND** "Make A Booking" CTA link
- Scenario — Hero slider navigates between slides:
  - **WHEN** the user clicks the next arrow
  - **THEN** the next slide is displayed
  - **AND** the heading text updates

### 3. BookingForm
- The booking form SHALL provide check-in date, check-out date, room type select, adults select, children select, and a Reserve button.
- Scenario — Booking form renders all fields:
  - **WHEN** the page loads
  - **THEN** check-in and check-out date inputs are visible
  - **AND** room type select shows: Suite, Family, Deluxe, Classic, Superior, Luxe
  - **AND** adults and children selects are visible
  - **AND** Reserve button is visible

### 4. Services
- The services section SHALL display 4 service cards: 24/7 Front Desk, Restaurant Bar, Transfer Services, Spa Suites.
- Scenario — Services renders all cards:
  - **WHEN** the page loads
  - **THEN** all 4 service titles are visible
  - **AND** each has a description and Read More link

### 5. Rooms
- The rooms section SHALL display 6 room cards with images, star ratings, prices, and Reserve buttons.
- Scenario — Rooms renders all 6 rooms:
  - **WHEN** the page loads
  - **THEN** Suite ($100), Family ($140), Deluxe ($130), Classic ($200), Superior ($120), Luxe ($500) are visible
  - **AND** each has a star rating and Reserve A Room button

### 6. Restaurant
- The restaurant section SHALL display a tabbed interface with Main Dish, Drinks, and Desserts tabs.
- Scenario — Restaurant defaults to Main Dish tab:
  - **WHEN** the page loads
  - **THEN** Main Dish tab is active
  - **AND** Grilled Salmon, Filet Mignon, Pasta Primavera are visible
- Scenario — Restaurant switches tabs:
  - **WHEN** the user clicks the Drinks tab
  - **THEN** drink menu items are displayed
  - **AND** Main Dish items are hidden

### 7. Counter
- The footer SHALL display the "Cayo" brand, Company links, Services links, Contact info (address, phone, email), social media icons, and a copyright notice linking to Component Dock.
- Scenario — Footer renders Component Dock link:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text is "Component Dock"

### 8. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Play video · About Us · Watch Our Video

### 9. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous testimonial · Next testimonial · Testimonials · What Our Guests Say

### 10. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest News · Our Blog · Read More

### 11. Footer
- The footer SHALL display the "Cayo" brand, Company links, Services links, Contact info (address, phone, email), social media icons, and a copyright notice linking to Component Dock.
- Scenario — Footer renders Component Dock link:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text is "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cayo/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cayo/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/cayo` ships on https://cayo.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cayo/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cayo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cayo/public/CNAME` = `cayo.free.componentdock.com`
  and the package `homepage` = `https://cayo.free.componentdock.com`.
