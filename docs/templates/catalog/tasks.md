# Catalog — Implementation Tasks

Source design: **Directoryads** (`https://colorlib.com/wp/template/directoryads/`) → recreation name **catalog**. Shipped at https://catalog.free.componentdock.com.

Scope: Recreate ColorLib Directoryads as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Catalog". The original uses Nanum Gothic font, blue (#2f89fc) primary color, and dark (#333) footer. No ColorLib assets are copied; images use picsum.photos placeholders, icons use lucide-react, and brand icons use inline SVGs.

## Component breakdown

Render order as composed in `apps/catalog/src/App.tsx`:

### 1. Navbar
- The Navbar SHALL have a mobile hamburger menu that opens/closes on toggle click. Clicking a mobile nav link SHALL close the menu.
- Scenario — Toggle mobile menu:
  - **GIVEN** a user clicks the "Toggle menu" button
  - **THEN** the mobile menu opens showing all nav links
- Scenario — Clicking a nav link closes the menu:
  - **GIVEN** the mobile menu is open
  - **WHEN** the user clicks a navigation link
  - **THEN** the mobile menu closes

### 2. Hero
- The hero section SHALL contain a search form with keyword input, location input, category dropdown, and search button. Submitting the form SHALL prevent default.
- Scenario — Search form submits without navigation:
  - **GIVEN** a user is on the Catalog page
  - **WHEN** the user types "laptop" in the keyword field
  - **AND** selects "Electronics" from the category dropdown
  - **AND** clicks the Search button
  - **THEN** the form submits without page navigation
- Scenario — Trending tags render:
  - **GIVEN** a user is on the Catalog page
  - **THEN** trending tags "iPhone", "Cars", "Flowers", "House", and "Furniture" are visible

### 3. FeaturedAds
- The FeaturedAds section SHALL display four listing cards with image, category, title, address, star rating, and bookmark button.
- Scenario — Four listing cards render:
  - **GIVEN** a user views the featured ads section
  - **THEN** four listing cards render with titles "New Black Car", "Own New House",
  - **AND** each card has a bookmark button

### 4. PopularCategories
- The PopularCategories section SHALL display six category cards in a grid, each with an icon, name, and count.
- Scenario — Six categories render with counts:
  - **GIVEN** a user views the popular categories section
  - **THEN** six categories render: Cars and Vehicles (1,921), Furniture (2,339),

### 5. TrendingToday
- The TrendingToday section SHALL display four listing cards in a 2-column grid.
- Scenario — Trending cards render:
  - **GIVEN** a user views the trending today section
  - **THEN** four listing cards render including "Own New House" and "New Black Car"

### 6. Testimonials
- The Testimonials section SHALL display a carousel with prev/next buttons and dot indicators. Navigation SHALL wrap around at boundaries.
- Scenario — Navigate forward through testimonials:
  - **GIVEN** a user views the testimonials section
  - **WHEN** the user clicks "Next testimonial"
  - **THEN** the testimonial author changes from "John Smith" to "Christine Aguilar"
- Scenario — Navigate backward wraps to last:
  - **GIVEN** a user is on the first testimonial (John Smith)
  - **WHEN** the user clicks "Previous testimonial"
  - **THEN** the testimonial wraps to "Robert Spears" (the last testimonial)
- Scenario — Navigate forward wraps to first:
  - **GIVEN** a user is on the last testimonial (Robert Spears)
  - **WHEN** the user clicks "Next testimonial"
  - **THEN** the testimonial wraps to "John Smith" (the first testimonial)
- Scenario — Dot navigation works:
  - **GIVEN** a user views the testimonials section
  - **WHEN** the user clicks dot indicator "Go to testimonial 3"
  - **THEN** the testimonial shows "Robert Spears"

### 7. Blog
- The Blog section SHALL display three blog post cards with image, title, author, date, category, and excerpt, plus a "View All Posts" button.
- Scenario — Three blog posts render:
  - **GIVEN** a user views the blog section
  - **THEN** three posts render with titles "Many People Selling Online",
  - **AND** "View All Posts" button is visible

### 8. Newsletter
- The Newsletter section SHALL contain an email input and subscribe button. Submitting the form SHALL prevent default.
- Scenario — Newsletter form submits:
  - **GIVEN** a user types an email in the newsletter input
  - **WHEN** the user clicks Subscribe
  - **THEN** the form submits without page navigation

### 9. Footer
- The Footer SHALL link to https://www.componentdock.com/ with text "Component Dock" and display a copyright notice with the current year.
- Scenario — Footer copyright and attribution:
  - **GIVEN** a user scrolls to the footer
  - **THEN** a "Component Dock" link points to https://www.componentdock.com/
  - **AND** the copyright year matches the current year

### Cross-cutting requirements

- **Page renders all nine sections in order** — The application SHALL render Navbar, Hero, FeaturedAds, PopularCategories, TrendingToday, Testimonials, Blog, Newsletter, and Footer in that order.
  - Scenario — All sections render on initial load: **GIVEN** a user visits the Catalog page; **THEN** the document title is "Catalog — Directory & Listing Template"; **AND** the navbar with "Catalog" logo is visible; **AND** the hero heading reads "Welcome To Catalog"; **AND** the featured ads heading reads "Featured Ads"; **AND** the popular categories heading reads "Popular Categories"; **AND** the trending today heading reads "Trending Today"; **AND** the testimonials heading reads "Testimonials"; **AND** the blog heading reads "Our Blog"; **AND** the newsletter heading reads "Newsletter"; **AND** the footer renders with "Component Dock" link to https://www.componentdock.com/
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/catalog/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/catalog/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/catalog` ships on https://catalog.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/catalog/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/catalog/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/catalog/public/CNAME` = `catalog.free.componentdock.com`
  and the package `homepage` = `https://catalog.free.componentdock.com`.
