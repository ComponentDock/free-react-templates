# Flavor — Implementation Tasks

Source design: **Luto** (`https://colorlib.com/wp/template/luto/`) → recreation name **flavor**. Shipped at https://flavor.free.componentdock.com.

Scope: A Restaurant Website template with header with navigation, info bar with contact, about, parallax introduction and tabbed menu sections.

## Component breakdown

Render order as composed in `apps/flavor/src/App.tsx`:

### 1. Header
- Users SHALL see a fixed transparent navbar with the brand name "Flavor" and navigation links (Home, About, Specialties, Menu, Reservation, Contact).
- Scenario — Header renders logo and nav links:
  - **WHEN** the page loads
  - **THEN** the header displays the "Flavor" logo and all navigation links
- Scenario — Mobile hamburger menu:
  - **WHEN** the user clicks the hamburger button on mobile
  - **THEN** a slide-in menu panel opens with all nav links

### 2. Hero
- Users SHALL see a full-screen hero banner with a background image, heading "Special & Fresh Food", description text, and a "Book a table" CTA button.
- Scenario — Hero displays heading and CTA:
  - **WHEN** the page loads
  - **THEN** the hero section shows the heading and a "Book a table" button

### 3. InfoBar
- Users SHALL see a 4-column info bar with Address, Opening Time, Phone, and Email, each with a lucide icon.
- Scenario — InfoBar shows 4 columns:
  - **WHEN** the page loads
  - **THEN** four info items are displayed with icons

### 4. About
- Users SHALL see a two-column about section with "Welcome to Flavor" heading, description, and two food images.
- Scenario — About section renders heading and description:
  - **WHEN** the page loads
  - **THEN** the about section shows the heading and descriptive text

### 5. Specialties
- Users SHALL see a "Our Delicious Specialties" section with three dish cards showing images and titles.
- Scenario — Specialties displays 3 dish cards:
  - **WHEN** the page loads
  - **THEN** three specialty dish cards are rendered

### 6. ParallaxIntro
- Users SHALL see a parallax background section with "Foods you love to taste" heading and a "Watch Video" button.
- Scenario — Parallax intro renders content:
  - **WHEN** the page loads
  - **THEN** the parallax section displays the heading and CTA

### 7. Testimonials
- Users SHALL see a "Our Customer Says" section with testimonial blockquotes on a parallax background.
- Scenario — Testimonials render blockquotes:
  - **WHEN** the page loads
  - **THEN** testimonial quotes with author names are displayed

### 8. Menu
- Users SHALL see a menu section with tabs (Main, Desserts, Drinks) showing dish items with images, prices, and categories.
- Scenario — Menu tabs switch content:
  - **WHEN** the user clicks a different tab
  - **THEN** the corresponding menu items are displayed

### 9. Reservation
- Users SHALL see a reservation form with name, email, phone, date, time, and person count fields.
- Scenario — Reservation form renders all fields:
  - **WHEN** the page loads
  - **THEN** the reservation form displays all required input fields

### 10. Footer
- Users SHALL see a footer with 4 columns (About, Latest Blog, Instagram, Newsletter) and a copyright line linking to https://www.componentdock.com/.
- Scenario — Footer links to Component Dock:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to componentdock.com branded as "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/flavor/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/flavor/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/flavor` ships on https://flavor.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/flavor/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/flavor/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/flavor/public/CNAME` = `flavor.free.componentdock.com`
  and the package `homepage` = `https://flavor.free.componentdock.com`.
