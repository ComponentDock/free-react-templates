# Trekcraft — Implementation Tasks

Source design: **Travelix** (`https://colorlib.com/wp/template/travelix/`) → recreation name **trekcraft**. Shipped at https://trekcraft.free.componentdock.com.

Scope: A Travel Agency template with main navigation, hero slider, search panel, intro / best tours, cta slider and best sections. Recreation of the ColorLib "Travelix" template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page travel agency site.

## Component breakdown

Render order as composed in `apps/trekcraft/src/App.tsx`:

### 1. TopBar
- The system SHALL ensure that top bar display contact and social info.
- Scenario — Top bar renders on page load:
  - **WHEN** the user loads the page
  - **THEN** a thin top bar SHALL show the phone number
  - **AND** 6 social media icons SHALL be visible
  - **AND** Login/Register links SHALL be present

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle search · Toggle menu

### 3. HeroSlider
- The system SHALL ensure that hero slider display travel imagery.
- Scenario — Hero renders on page load:
  - **WHEN** the user loads the page
  - **THEN** a full-width hero carousel SHALL render with a background image
  - **AND** "discover the world" headline SHALL be centered
  - **AND** "explore now" gradient button SHALL be present
  - **AND** arrow navigation SHALL be available
- Scenario — Slide navigation:
  - **WHEN** the user clicks next/previous arrows or dot indicators
  - **THEN** the slider SHALL transition to the corresponding slide

### 4. SearchPanel
- The system SHALL ensure that search panel allow booking search.
- Scenario — Search panel renders below hero:
  - **WHEN** the user scrolls to the search panel
  - **THEN** 6 category tabs SHALL be visible (hotels, car rentals, flights, trips, cruises, activities)
- Scenario — Tab switching:
  - **WHEN** the user clicks a tab
  - **THEN** that tab SHALL become active and show its search form
  - **AND** the hotels tab SHALL be active by default with destination, dates, guests fields

### 5. BestTours
- The system SHALL ensure that best tours section show destinations.
- Scenario — Tour cards render:
  - **WHEN** the user scrolls to the intro section
  - **THEN** "We have the best tours" heading SHALL be displayed
  - **AND** 3 tour destination cards SHALL be shown with images, dates, prices, and ratings

### 6. CtaSlider
- The system SHALL ensure that cta slider showcase packages.
- Scenario — CTA section renders:
  - **WHEN** the user scrolls to the CTA section
  - **THEN** a background image section with package slider SHALL be visible
  - **AND** each slide SHALL show title, rating, description, and "book now" button

### 7. BestOffers
- The system SHALL ensure that best offers display room deals.
- Scenario — Offer cards render:
  - **WHEN** the user scrolls to the offers section
  - **THEN** 4 offer cards SHALL be displayed in a 2-column grid
  - **AND** each card SHALL show image, name, price, rating, description, and amenity icons

### 8. Testimonials
- The system SHALL ensure that testimonials section show reviews.
- Scenario — Testimonial cards render:
  - **WHEN** the user scrolls to testimonials
  - **THEN** testimonial cards SHALL be visible with author photo, name, date, quote, and text

### 9. TrendingDestinations
- The system SHALL ensure that trending section show popular destinations.
- Scenario — Trending items render:
  - **WHEN** the user scrolls to trending
  - **THEN** 8 trending destination items SHALL be displayed in a 4-column grid
  - **AND** each item SHALL show thumbnail, name, price, and location

### 10. Contact
- The system SHALL ensure that top bar display contact and social info.
- Scenario — Top bar renders on page load:
  - **WHEN** the user loads the page
  - **THEN** a thin top bar SHALL show the phone number
  - **AND** 6 social media icons SHALL be visible
  - **AND** Login/Register links SHALL be present

### 11. Footer
- The system SHALL ensure that footer provide site information.
- Scenario — Footer renders:
  - **WHEN** the user scrolls to the footer
  - **THEN** 4 columns SHALL be visible (about, blog, tags, contact)
  - **AND** the copyright bar SHALL show nav links
  - **AND** a link to Component Dock SHALL be present

### 12. CopyrightBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Component Dock

### Cross-cutting requirements

- **Navigation SHALL provide site access** — The system SHALL ensure that navigation provide site access.
  - Scenario — Navigation renders on page load: **WHEN** the user loads the page; **THEN** the logo and "trekcraft" text SHALL be visible; **AND** nav links (home, about us, offers, news, contact) SHALL be present; **AND** a search icon SHALL be visible; **AND** a hamburger menu SHALL appear on mobile viewports
- **Contact section SHALL provide inquiry form** — The system SHALL ensure that contact section provide inquiry form.
  - Scenario — Contact form renders: **WHEN** the user scrolls to contact; **THEN** a contact form SHALL be visible with Name, Email, Subject, Message fields; **AND** a "send message" button SHALL be present
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/trekcraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/trekcraft/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Top bar: phone, 6 social icons, login/register; [ ] Main nav: logo, 5 nav links, search icon, hamburger; [ ] Hero slider: background images, "discover the world" headline, gradient button, arrows; [ ] Search panel: 6 tabs, hotel form active by default, gradient search button; [ ] Intro/Best Tours: title, 3 tour cards with images, dates, prices, ratings; [ ] CTA slider: background image, package slides with title/rating/text/button; [ ] Best Offers: 4 cards in 2x2 grid, image + details per card; [ ] Testimonials: slider with author photo, quote, name, date; [ ] Trending: 8 items in 4-column grid with thumbnails; [ ] Contact: form with 4 fields + send button, background image; [ ] Footer: 4-column layout (about, blog, tags, contact); [ ] Copyright bar: nav links + Component Dock link; [ ] Responsive design (mobile hamburger, stacked columns); [ ] No ColorLib references in app code; [ ] Placeholder images via `picsum.photos/seed/trekcraft-<n>/`; [ ] Open Sans + display font loaded via Google Fonts; [ ] Brand tokens in `@theme` / `index.css`; [ ] `public/CNAME` set to `trekcraft.free.componentdock.com`; [ ] `homepage` set to `https://trekcraft.free.componentdock.com`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/trekcraft` ships on https://trekcraft.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/trekcraft/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/trekcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/trekcraft/public/CNAME` = `trekcraft.free.componentdock.com`
  and the package `homepage` = `https://trekcraft.free.componentdock.com`.
