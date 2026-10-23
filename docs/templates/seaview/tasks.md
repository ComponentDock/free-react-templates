# Seaview — Implementation Tasks

Source design: **Marimar** (`https://colorlib.com/wp/template/marimar/`) → recreation name **seaview**. Shipped at https://seaview.free.componentdock.com.

Scope: Build a production-ready React recreation of the ColorLib Marimar hotel landing template under the new name "Seaview". The original template is a luxury hotel landing page with a parallax hero, booking form, room showcases, discover carousel, testimonials, and a branded footer.

## Component breakdown

Render order as composed in `apps/seaview/src/App.tsx`:

### 1. Navbar
- The template SHALL display a fixed top navigation bar with the "Seaview" logo, horizontal navigation links (Home, About, Rooms, News, Contact), and a "Book Now" CTA button. A hamburger menu toggle SHALL appear on mobile devices.
- Scenario — Desktop navbar shows all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the "Seaview" logo, all five navigation links, and the "Book Now" button are visible
- Scenario — Mobile hamburger toggles menu overlay:
  - **WHEN** the user taps the hamburger button on mobile
  - **THEN** a full-screen mobile menu overlay appears with the same navigation links

### 2. Hero
- The template SHALL display a full-viewport hero section with a background image, dark overlay, centered heading "Book Your Stay", subtitle text, and a "Book Now" CTA button.
- Scenario — Hero renders heading and CTA:
  - **WHEN** the page loads
  - **THEN** the "Book Your Stay" heading, subtitle paragraph, and "Book Now" button are visible

### 3. BookingForm
- The template SHALL display a horizontal booking form with check-in date input, check-out date input, adults dropdown (1-5), children dropdown (0-5), and a "Book Now" submit button.
- Scenario — Booking form shows all input fields:
  - **WHEN** the page loads
  - **THEN** the check-in input, check-out input, adults select, children select, and submit button are visible

### 4. Intro
- The template SHALL display a welcome section with a subtitle "Welcome", heading "Amazing Hotel in front of the Sea", description paragraph, and a 4-column image gallery with hover overlay "+ See More" on each image.
- Scenario — Intro section renders heading and gallery:
  - **WHEN** the page loads
  - **THEN** the "Welcome" subtitle, main heading, description, and 4 gallery images are visible

### 5. RoomsShowcase
- The template SHALL display two alternating room showcase blocks. Each block contains an image, section title, description, feature checklist with check icons, price per night, and a "Book Now" button. The first block has image left / content right; the second flips.
- Scenario — Both rooms render with prices and features:
  - **WHEN** the page loads
  - **THEN** "Luxury Double Suite" at $129/Night and "Luxury Single Room" at $89/Night are displayed with feature checklists

### 6. Discover
- The template SHALL display a "Discover Seaview Hotel" section with a heading, highlight paragraph, "Discover" button, and a 3-card grid of service images (Weddings, Parties, Relax) with dark overlays and category headings.
- Scenario — Discover section renders service cards:
  - **WHEN** the page loads
  - **THEN** the "Discover Seaview Hotel" heading and three service cards (Weddings, Parties, Relax) are visible

### 7. Testimonials
- The template SHALL display a "Testimonials" section with a heading and 3 testimonial cards, each containing a quote, author image, author name, and "Client" role label.
- Scenario — Testimonials render with author info:
  - **WHEN** the page loads
  - **THEN** the "Testimonials" heading and 3 testimonial cards with author names are visible

### 8. Footer
- The template SHALL display a footer with the "Seaview" logo, 3-column contact info (Phone, Address, Email), a "More templates at Component Dock" link to https://www.componentdock.com/, and a copyright line.
- Scenario — Footer renders contact info and branded link:
  - **WHEN** the page loads
  - **THEN** the Phone, Address, and Email contact details, the Component Dock link, and copyright text are visible

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/seaview/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/seaview/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/seaview` ships on https://seaview.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/seaview/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/seaview/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seaview/public/CNAME` = `seaview.free.componentdock.com`
  and the package `homepage` = `https://seaview.free.componentdock.com`.
