# Carnivor — Implementation Tasks

Source design: **Steakshop** (`https://colorlib.com/wp/template/steakshop/`) → recreation name **carnivor**. Shipped at https://carnivor.free.componentdock.com.

Scope: A free, production-ready React steakhouse landing page template featuring a right-sidebar navigation, hero banner, food courses, reservation form, chef spotlight, food gallery, brand partners, and a footer with newsletter signup.

## Component breakdown

Render order as composed in `apps/carnivor/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle navigation · Main navigation · button · Close navigation

### 2. Hero
- Users SHALL see a full-screen hero banner with a headline, description, and call-to-action button.
- Scenario — Hero content renders:
  - **WHEN** the page loads
  - **THEN** a heading with "best steaks in town" is displayed
  - **AND** an "Explore Menu" CTA button links to the menu section

### 3. Courses
- Users SHALL see two food course sections with images and descriptive text.
- Scenario — Course sections render:
  - **WHEN** the page loads
  - **THEN** two course sections are displayed with headings and food images
  - **AND** a "See Full Menu" CTA button is present

### 4. Reservation
- Users SHALL be able to fill out and submit a reservation form with validation.
- Scenario — Form renders all fields:
  - **WHEN** the page loads
  - **THEN** fields for name, email, phone, party size, date/time, and event type are displayed
- Scenario — Validation on empty submit:
  - **WHEN** the user clicks "Make Reservation" without filling fields
  - **THEN** validation error messages appear for required fields
- Scenario — Successful reservation:
  - **WHEN** the user fills all required fields with valid data and submits
  - **THEN** a confirmation message is displayed with the reservation details

### 5. Chef
- Users SHALL see a chef spotlight with a portrait and specialty items.
- Scenario — Chef content renders:
  - **WHEN** the page loads
  - **THEN** a chef portrait image and 4 specialty item thumbnails are displayed

### 6. FoodGallery
- Users SHALL see a grid of food photography images.
- Scenario — Gallery renders:
  - **WHEN** the page loads
  - **THEN** 6 food images are displayed in a responsive grid

### 7. Brands
- Users SHALL see a section listing partner brands.
- Scenario — Brands render:
  - **WHEN** the page loads
  - **THEN** 5 partner brand names are displayed

### 8. Footer
- Users SHALL see a footer with quick links, contact info, social icons, newsletter signup, and a Component Dock attribution link.
- Scenario — Footer content:
  - **WHEN** the page loads
  - **THEN** quick links, contact details, and social icons are displayed
  - **AND** a newsletter email form is present
  - **AND** a link to https://www.componentdock.com/ with text "Component Dock" is present
- Scenario — Newsletter validation:
  - **WHEN** the user clicks Subscribe without entering an email
  - **THEN** a validation error is shown
- Scenario — Newsletter success:
  - **WHEN** the user enters a valid email and clicks Subscribe
  - **THEN** a thank-you message is displayed

### Cross-cutting requirements

- **Navigation** — Users SHALL see a fixed right-sidebar navigation with the brand name and links to all sections.
  - Scenario — Desktop sidebar visible: **WHEN** the page loads on a desktop viewport; **THEN** a right sidebar navigation is visible with links: Home, About, Menu, Book Table, Chefs, Contact
  - Scenario — Mobile hamburger toggle: **WHEN** the page loads on a mobile viewport; **THEN** a hamburger button is visible; **WHEN** the user taps the hamburger button; **THEN** the sidebar slides in and an overlay appears; **WHEN** the user taps the overlay or presses Escape; **THEN** the sidebar closes
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/carnivor/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/carnivor/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/carnivor` ships on https://carnivor.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/carnivor/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/carnivor/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carnivor/public/CNAME` = `carnivor.free.componentdock.com`
  and the package `homepage` = `https://carnivor.free.componentdock.com`.
