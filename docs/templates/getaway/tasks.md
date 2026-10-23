# Getaway — Implementation Tasks

Source design: **Vacation** (`https://colorlib.com/wp/template/vacation/`) → recreation name **getaway**. Shipped at https://getaway.free.componentdock.com.

Scope: Getaway is a single-page travel agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Vacation" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/getaway/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "Getaway", a "Travel Agency" subtitle, nav links (Home, About, Destination, Blog, Contact), and a "Book Now" CTA button.
- Scenario — Navbar brand and links:
  - **GIVEN** the Getaway page is rendered
  - **WHEN** the user views the navbar
  - **THEN** the brand text "Getaway" with "Travel Agency" is visible
  - **AND** links for Home, About, Destination, Blog, Contact are present
  - **AND** a "Book Now" CTA button is visible
- Scenario — Mobile menu toggle:
  - **GIVEN** the Getaway page is rendered on a narrow viewport
  - **WHEN** the user taps the menu button
  - **THEN** the mobile menu expands showing all nav links
  - **AND** the menu closes when a link is tapped

### 2. Hero
- The system SHALL render a full-height hero section with a background image, a play button, a tagline, and the main heading.
- Scenario — Hero content:
  - **GIVEN** the Getaway page is rendered
  - **WHEN** the user views the hero section
  - **THEN** the heading "Make Your Tour Amazing With Us" is visible
  - **AND** the tagline "Travel to the any corner of the world" is visible
  - **AND** a play button is displayed

### 3. SearchForm
- The system SHALL render a search form with destination, check-in date, check-out date, price limit, and a search button.
- Scenario — Search form fields:
  - **GIVEN** the Getaway page is rendered
  - **WHEN** the user views the search form
  - **THEN** a destination text input is present
  - **AND** check-in and check-out date inputs are present
  - **AND** a price limit select dropdown is present
  - **AND** a Search button is visible

### 4. Services
- The system SHALL render a services section with 4 service cards.
- Scenario — Services content:
  - **GIVEN** the Getaway page is rendered
  - **WHEN** the user views the services section
  - **THEN** the heading "It's time to start your adventure" is visible
  - **AND** 4 service cards are displayed (Activities, Travel Arrangements,

### 5. Statistics
- The system SHALL render a statistics section with 3 counters.
- Scenario — Statistics content:
  - **GIVEN** the Getaway page is rendered
  - **WHEN** the user views the statistics section
  - **THEN** counters for "300 Successful Tours", "24,000 Happy Tourists",

### 6. BestPlaces
- The system SHALL render a best places section with 4 destination cards.
- Scenario — Best places content:
  - **GIVEN** the Getaway page is rendered
  - **WHEN** the user views the best places section
  - **THEN** 4 destination cards are displayed (Singapore, Canada, Thailand,

### 7. TourPackages
- The system SHALL render a tour packages section with 6 tour cards.
- Scenario — Tour packages content:
  - **GIVEN** the Getaway page is rendered
  - **WHEN** the user views the tour packages section
  - **THEN** 6 tour cards are displayed with price and duration

### 8. Testimonials
- The system SHALL render a testimonials section with testimonial cards.
- Scenario — Testimonials content:
  - **GIVEN** the Getaway page is rendered
  - **WHEN** the user views the testimonials section
  - **THEN** testimonial cards with names and quotes are visible

### 9. Blog
- The system SHALL render a blog section with 3 blog post cards.
- Scenario — Blog content:
  - **GIVEN** the Getaway page is rendered
  - **WHEN** the user views the blog section
  - **THEN** 3 blog post cards are displayed

### 10. Footer
- The system SHALL render a footer with a Component Dock link.
- Scenario — Footer Component Dock link:
  - **GIVEN** the Getaway page is rendered
  - **WHEN** the user views the footer
  - **THEN** a link to https://www.componentdock.com/ is present
  - **AND** the text "More templates at Component Dock" or similar is shown

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/getaway/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/getaway/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/getaway` ships on https://getaway.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/getaway/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/getaway/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/getaway/public/CNAME` = `getaway.free.componentdock.com`
  and the package `homepage` = `https://getaway.free.componentdock.com`.
