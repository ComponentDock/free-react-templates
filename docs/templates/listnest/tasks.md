# Listnest — Implementation Tasks

Source design: **Listing** (`https://colorlib.com/wp/template/listing/`) → recreation name **listnest**. Shipped at https://listnest.free.componentdock.com.

Scope: A Directory & Listing template with hero section with search, find places, featured places, browse categories and add listing cta sections.

## Component breakdown

Render order as composed in `apps/listnest/src/App.tsx`:

### 1. Navbar
- The system SHALL render a sticky dark navbar with the brand name "ListNest", dropdown menus (Explore, Listing, Pages), static links (About, Blog), and an "Add Listing" button. The navbar SHALL support a mobile hamburger toggle.
- Scenario — Desktop navigation:
  - **GIVEN** the page is rendered
  - **WHEN** the navbar is displayed
  - **THEN** it SHALL show the brand name "ListNest"
  - **AND** it SHALL show dropdown triggers for Explore, Listing, and Pages
  - **AND** it SHALL show links to About and Blog
  - **AND** it SHALL show a "+ Add Listing" link
- Scenario — Dropdown on hover:
  - **GIVEN** the navbar is displayed on desktop
  - **WHEN** the user hovers over an Explore dropdown trigger
  - **THEN** a dropdown menu SHALL appear with Action, Another action, and Something else here
- Scenario — Mobile menu toggle:
  - **GIVEN** the page is rendered on mobile
  - **WHEN** the user clicks the hamburger toggle button
  - **THEN** the mobile navigation menu SHALL open
  - **AND** it SHALL display the same nav links as the desktop version

### 2. Hero
- The system SHALL render a full-width hero section with a background image, heading "Discover great places in New York", subtitle, and a search form with two inputs and a SEARCH button.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero section is displayed
  - **THEN** it SHALL show the heading "Discover great places in New York"
  - **AND** it SHALL show the subtitle about eating, drinking, and shopping
  - **AND** it SHALL show "Browse Popular" and "Recently Added" links
- Scenario — Search form:
  - **GIVEN** the hero section is displayed
  - **WHEN** the user views the search form
  - **THEN** it SHALL show a search query input labeled "Search query"
  - **AND** it SHALL show a location input labeled "Location"
  - **AND** it SHALL show a SEARCH button

### 3. FindPlaces
- The system SHALL render a "Find Places" section with a heading and 5 category image cards (1 tall + 2x2 grid layout) showing category names and listing counts.
- Scenario — Category cards:
  - **GIVEN** the Find Places section is displayed
  - **WHEN** the user views the section
  - **THEN** it SHALL show the heading "What do you need to find?"
  - **AND** it SHALL show 5 category cards: Nightlife, Restaurants, Outdoors, Hotels, Shopping
  - **AND** each card SHALL display its listing count

### 4. FeaturedPlaces
- The system SHALL render a "Featured Places" section on a light background with 3 restaurant cards showing image, color-coded rating, name, type, reviews, price, address, phone, website, open/closed status, and action icons.
- Scenario — Place cards:
  - **GIVEN** the Featured Places section is displayed
  - **WHEN** the user views the section
  - **THEN** it SHALL show the heading "Featured Places"
  - **AND** it SHALL show 3 place cards: Burger & Lobster, Joe's Shanghai, Tasty Hand-Pulled Noodles
  - **AND** each card SHALL show a rating badge, address, phone, and website
- Scenario — Open/closed status:
  - **GIVEN** the Featured Places section is displayed
  - **WHEN** a place is closed
  - **THEN** it SHALL show "CLOSED NOW" in pink text
  - **AND** when a place is open it SHALL show "OPEN NOW" in green text
- Scenario — Action buttons:
  - **GIVEN** a place card is displayed
  - **WHEN** the user views the action icons
  - **THEN** it SHALL show a Favorite (heart) button
  - **AND** it SHALL show a Bookmark button

### 5. BrowseCategories
- The system SHALL render a "Browse Categories" section with 8 category cards showing Lucide icons and category names in a 4-column grid.
- Scenario — Category grid:
  - **GIVEN** the Browse Categories section is displayed
  - **WHEN** the user views the section
  - **THEN** it SHALL show the heading "Browse Categories"
  - **AND** it SHALL show 8 categories: Automotive, Beauty & Spa, Hotel, Restaurant, Fitness, Health, Shopping, Travel
  - **AND** each category SHALL be a link

### 6. AddListing
- The system SHALL render an "Add Listing" call-to-action section with a heading, description, and a pink ADD LISTING button.
- Scenario — CTA content:
  - **GIVEN** the Add Listing section is displayed
  - **WHEN** the user views the section
  - **THEN** it SHALL show "Reach millions of People" heading
  - **AND** it SHALL show a description about adding a business
  - **AND** it SHALL show an "ADD LISTING" button linking to #

### 7. Footer
- The system SHALL render a dark footer with copyright text, a Component Dock link, and social media icons (Facebook, Twitter, Instagram).
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show copyright text with the current year and "ListNest"
  - **AND** it SHALL link to https://www.componentdock.com/ labeled "Component Dock"
  - **AND** it SHALL show social media icon links for Facebook, Twitter, and Instagram

### Cross-cutting requirements

- **App composition** — The system SHALL compose all sections in the correct order: Navbar, Hero, FindPlaces, FeaturedPlaces, BrowseCategories, AddListing, Footer.
  - Scenario — Section order: **GIVEN** the app is rendered; **WHEN** the user views the page; **THEN** all 7 sections SHALL be present in the correct order; **AND** the document title SHALL be "ListNest — Directory & Listing Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/listnest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/listnest/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/listnest` ships on https://listnest.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/listnest/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/listnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/listnest/public/CNAME` = `listnest.free.componentdock.com`
  and the package `homepage` = `https://listnest.free.componentdock.com`.
