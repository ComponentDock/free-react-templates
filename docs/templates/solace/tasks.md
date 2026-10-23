# Solace — Implementation Tasks

Source design: **Unwind** (`https://colorlib.com/wp/template/unwind/`) → recreation name **solace**. Shipped at https://solace.free.componentdock.com.

Scope: - Recreation of ColorLib **Unwind** (`https://colorlib.com/wp/template/unwind/`).

## Component breakdown

Render order as composed in `apps/solace/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Main navigation · Solace · Book Now

### 2. Hero
- The application SHALL display a sticky navigation bar with brand logo and links, and a hero banner with title and CTA buttons.
- Scenario — Navigation and Hero Display:
  - **WHEN** I load the Solace home page
  - **THEN** I should see the sticky navigation bar with brand logo and links (Home, About, Rooms, Resto & Bar, Blog, Contact)
  - **AND** I should see the luxury hero banner with title "Most Relaxing Place" and CTA buttons

### 3. BookingBar
- The application SHALL provide a booking form with Check-in, Check-out, Room type, and Guests fields that handles submission without errors.
- Scenario — Interactive Booking Widget:
  - **WHEN** I am on the home page
  - **AND** I interact with the booking form (Check-in, Check-out, Room type, Guests)
  - **AND** I click "Check Availability"
  - **THEN** the booking widget should handle selection successfully without errors

### 4. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Us · Solace A Hotel Booking Agency · Book Your Room Now

### 5. Services
- The application SHALL display room cards with pricing and Book Now buttons, and a services grid with icons.
- Scenario — Explore Rooms and Services:
  - **WHEN** I scroll down to Featured Rooms and Hotel Services
  - **THEN** I should see room cards (Suite Room, Family Room, Deluxe Room) with "Book Now" buttons
  - **AND** I should see service icons for WiFi, Swimming Pool, Restaurant, and Spa

### 6. PromoBanner
- No dedicated spec block — hold this band to the design notes.
- Anchors: Find the Best Hotel in Your Next Vacation · Book Now

### 7. FeaturedRooms
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Rooms · Featured Rooms · Book Now

### 8. VideoTour
- No dedicated spec block — hold this band to the design notes.
- Anchors: Play video tour · Take A Tour · Explore our beautiful hotel and its stunning surroundings · Video player would open here

### 9. RestaurantBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Delicacies · Restaurant & Bar

### 10. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous testimonial · Next testimonial · Testimonials · Happy Guests

### 11. Stats
- No dedicated spec block — hold this band to the design notes.

### 12. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Recent Posts · Recent Blog · Read More →

### 13. Footer
- The application SHALL display a footer with copyright and a link to https://www.componentdock.com/, and SHALL NOT contain any ColorLib references.
- Scenario — Footer Attribution:
  - **WHEN** I scroll to the bottom of the page
  - **THEN** the footer must display the copyright and link to `https://www.componentdock.com/` ("Component Dock")
  - **AND** no mention of ColorLib should appear in the app code or footer

## Verification

- [x] `apps/solace` ships on https://solace.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/solace/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/solace/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/solace/public/CNAME` = `solace.free.componentdock.com`
  and the package `homepage` = `https://solace.free.componentdock.com`.
