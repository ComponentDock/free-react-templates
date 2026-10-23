# Fixcraft — Implementation Tasks

Source design: **Autorepair** (`https://colorlib.com/wp/template/autorepair/`) → recreation name **fixcraft**. Shipped at https://fixcraft.free.componentdock.com.

Scope: Fixcraft is a single-page auto repair services landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Autorepair" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/fixcraft/src/App.tsx`:

### 1. Navbar
- The system SHALL render a dark top bar with contact information.
- Scenario — Top bar content:
  - **GIVEN** the user visits the page
  - **WHEN** the top bar renders
  - **THEN** the bar SHALL display a phone number and business hours
  - **AND** the bar SHALL have a dark background (#171a1d)

### 2. Hero
- The system SHALL render a hero carousel with two slides.
- Scenario — Hero content:
  - **GIVEN** the user views the hero section
  - **WHEN** the page loads
  - **THEN** the first slide SHALL display "Make your car last longer"
  - **AND** the second slide SHALL display "It's time to come to repair your car"
  - **AND** each slide SHALL have a CTA button
- Scenario — Hero auto-advance:
  - **GIVEN** the hero slider is displayed
  - **WHEN** 6 seconds elapse
  - **THEN** the slider SHALL advance to the next slide

### 3. Intro
- The system SHALL render an intro section with "We care about your car".
- Scenario — Intro content:
  - **GIVEN** the user scrolls to the intro section
  - **WHEN** the section is visible
  - **THEN** the heading SHALL contain "We care about your car"
  - **AND** a phone CTA SHALL be visible

### 4. Services
- The system SHALL render a services grid with 6 service cards.
- Scenario — Services content:
  - **GIVEN** the user scrolls to the services section
  - **WHEN** the section is visible
  - **THEN** "Our car services" heading SHALL appear
  - **AND** a 3-column grid SHALL show 6 service cards (Oil Change, Tire Change, Batteries, Engine Repair, Tow Truck, Car Maintenance)

### 5. Counter
- The system SHALL render a counter section with 4 statistics.
- Scenario — Counter content:
  - **GIVEN** the user scrolls to the counter section
  - **WHEN** the section is visible
  - **THEN** it SHALL show counters for years, projects, staff, and happy clients
  - **AND** the section SHALL have a dark background image

### 6. Appointment
- The system SHALL render an appointment booking form.
- Scenario — Form fields:
  - **GIVEN** the user scrolls to the appointment section
  - **WHEN** the section is visible
  - **THEN** "Free Consultation" heading SHALL appear
  - **AND** the form SHALL contain name, phone, date, time, and message fields
- Scenario — Form submission:
  - **GIVEN** the form is filled with valid data
  - **WHEN** the user submits the form
  - **THEN** a confirmation message SHALL appear

### 7. Testimonials
- The system SHALL render a testimonials carousel.
- Scenario — Testimonials content:
  - **GIVEN** the user scrolls to the testimonials section
  - **WHEN** the section is visible
  - **THEN** "Happy Clients & Feedbacks" heading SHALL appear
  - **AND** client testimonials with name, role, and quote SHALL be displayed

### 8. Blog
- The system SHALL render a blog section with 3 blog cards.
- Scenario — Blog content:
  - **GIVEN** the user scrolls to the blog section
  - **WHEN** the section is visible
  - **THEN** "Latest news from our blog" heading SHALL appear
  - **AND** 3 blog cards SHALL be shown

### 9. Pricing
- The system SHALL render a pricing section with 4 pricing tiers.
- Scenario — Pricing content:
  - **GIVEN** the user scrolls to the pricing section
  - **WHEN** the section is visible
  - **THEN** "Pricing" heading SHALL appear
  - **AND** pricing cards with tier names and prices SHALL be displayed

### 10. Footer
- The system SHALL render a dark footer with 4 widget columns.
- Scenario — Footer content:
  - **GIVEN** the user scrolls to the footer
  - **WHEN** the footer loads
  - **THEN** it SHALL show Services, Contact, and Business Hours widgets
  - **AND** a copyright line with "Component Dock" link SHALL be present

### Cross-cutting requirements

- **Navigation bar** — The system SHALL render a navigation bar with logo, nav links, and appointment CTA.
  - Scenario — Navbar content: **GIVEN** the user views the navbar; **WHEN** the page loads; **THEN** the navbar SHALL show the site name "Fixcraft"; **AND** nav links SHALL include Home, About, Services, Pricing, Blog, Contact; **AND** an appointment CTA button SHALL be visible; **AND** a search icon SHALL be visible
  - Scenario — Mobile menu: **GIVEN** the user is on a mobile viewport; **WHEN** the hamburger menu is tapped; **THEN** a mobile menu SHALL open with the same nav links; **AND** clicking a link SHALL close the menu
- **No ColorLib references** — The app code SHALL NOT contain any references to ColorLib.
  - Scenario — Provenance isolation: **GIVEN** any source file in apps/fixcraft; **WHEN** the file is inspected; **THEN** it SHALL NOT contain the string "colorlib" (case-insensitive)
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/fixcraft` ships on https://fixcraft.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/fixcraft/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/fixcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fixcraft/public/CNAME` = `fixcraft.free.componentdock.com`
  and the package `homepage` = `https://fixcraft.free.componentdock.com`.
