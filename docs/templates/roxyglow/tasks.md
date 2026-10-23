# Roxyglow — Implementation Tasks

Source design: **Roxandrea** (`https://colorlib.com/wp/template/roxandrea/`) → recreation name **roxyglow**. Shipped at https://roxyglow.free.componentdock.com.

Scope: A Hotel & Resort template with hero slider with slide, services grid with image, cname and homepage, hero slider and booking form sections. Recreation of ColorLib's **Roxandrea** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

## Component breakdown

Render order as composed in `apps/roxyglow/src/App.tsx`:

### 1. Navbar
- The Navbar MUST display brand name, navigation links, and mobile hamburger toggle.
- Scenario — Navbar displays brand and links:
  - **WHEN** the page loads
  - **THEN** the Navbar displays the brand name "RoxyGlow"
  - **AND** navigation links are visible: Home, Rooms, Restaurant, About, Blog, Contact
  - **AND** a mobile hamburger toggle button exists

### 2. Hero
- The Hero MUST display a 2-slide carousel with parallax backgrounds and navigation controls.
- Scenario — Hero renders first slide:
  - **WHEN** the page loads
  - **THEN** the heading displays "RoxyGlow"
  - **AND** the subheading displays "More than a hotel... an experience"
  - **AND** a play button is visible
- Scenario — Hero navigates between slides:
  - **WHEN** the user clicks the next slide button
  - **THEN** the heading changes to "Experience Epic Beauty"
  - **AND** the subheading changes to "RoxyGlow Hotel & Resort"

### 3. BookingForm
- The Booking Form MUST provide check-in/check-out dates, room and guest dropdowns, and a Check Availability button.
- Scenario — Booking form renders all fields:
  - **WHEN** the Booking Form section is visible
  - **THEN** a check-in date input exists
  - **AND** a check-out date input exists
  - **AND** a room dropdown with options exists
  - **AND** a guest dropdown exists
  - **AND** a "Check Availability" button exists

### 4. ServicesGrid
- The Services Grid MUST display 4 image cards with labels.
- Scenario — Services grid renders cards:
  - **WHEN** the Services Grid section is visible
  - **THEN** 4 service cards are displayed
  - **AND** each card has a label: Special Rooms, Swimming Pool, Restaurant, Suites & Rooms

### 5. WelcomeServices
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome to RoxyGlow Hotel · A New Vision of Luxury Hotel

### 6. Rooms
- The Rooms section MUST display room cards with images, prices, and star ratings.
- Scenario — Rooms section renders room cards:
  - **WHEN** the Rooms section is visible
  - **THEN** room cards are displayed with prices
  - **AND** each room card has 5 gold star ratings

### 7. Testimonials
- The Testimonials section MUST display testimonial cards with circular avatars and star ratings.
- Scenario — Testimonials render correctly:
  - **WHEN** the Testimonials section is visible
  - **THEN** testimonial author names are displayed
  - **AND** each testimonial has star ratings

### 8. VideoHero
- No dedicated spec block — hold this band to the design notes.
- Anchors: We&apos;re Most Recommended Hotel

### 9. Restaurant
- No dedicated spec block — hold this band to the design notes.
- Anchors: Restaurant

### 10. Footer
- The Footer MUST link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer contains Component Dock link:
  - **WHEN** the Footer is rendered
  - **THEN** a link to https://www.componentdock.com/ exists
  - **AND** the link text contains "Component Dock"

### Cross-cutting requirements

- **Section order matches original layout** — The template MUST render sections in the correct order: Navbar, Hero Slider, Booking Form, Services Grid, Welcome/Services, Rooms, Testimonials, Video Hero, Restaurant, Footer.
  - Scenario — All sections render in order: **WHEN** the page loads; **THEN** the Navbar is rendered first; **AND** the Hero Slider follows the Navbar; **AND** the Booking Form follows the Hero; **AND** the Services Grid follows the Booking Form; **AND** the Welcome/Services section follows the Services Grid; **AND** the Rooms section follows the Welcome/Services; **AND** the Testimonials follow the Rooms; **AND** the Video Hero follows the Testimonials; **AND** the Restaurant section follows the Video Hero; **AND** the Footer is rendered last
- **No ColorLib references in app code** — The app source files MUST NOT contain any references to ColorLib.
  - Scenario — App files are free of ColorLib strings: **WHEN** searching all files in apps/roxyglow/src/; **THEN** no file contains the string "colorlib" (case-insensitive)
- **CNAME and homepage configured** — The app MUST have correct CNAME and homepage values for Surge deployment.
  - Scenario — CNAME file is correct: **WHEN** reading apps/roxyglow/public/CNAME; **THEN** the content is "roxyglow.free.componentdock.com"
  - Scenario — Package.json homepage is correct: **WHEN** reading apps/roxyglow/package.json; **THEN** the homepage field is "https://roxyglow.free.componentdock.com"

## Verification

- [x] `apps/roxyglow` ships on https://roxyglow.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/roxyglow/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/roxyglow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/roxyglow/public/CNAME` = `roxyglow.free.componentdock.com`
  and the package `homepage` = `https://roxyglow.free.componentdock.com`.
