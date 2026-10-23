# Localfinder — Implementation Tasks

Source design: **Directing** (`https://colorlib.com/wp/template/directing/`) → recreation name **localfinder**. Shipped at https://localfinder.free.componentdock.com.

Scope: LocalFinder is a local services directory listing template that helps users discover businesses and services nearby. It provides a search interface with category and location filtering, showcases popular categories, featured services with tabbed browsing, featured locations, testimonials, and blog posts.

## Component breakdown

Render order as composed in `apps/localfinder/src/App.tsx`:

### 1. Navbar
- The page SHALL display a sticky navbar with the "LocalFinder" logo, navigation links (Home, Listing, Categories, Blog, Shop), an "+Add Listing" CTA button, and a user account icon. The navbar SHALL include a mobile-responsive hamburger toggle.
- Scenario — Desktop navbar renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar shows the LocalFinder logo, all 5 nav links, the Add Listing button, and the user icon
- Scenario — Mobile navbar toggle:
  - **WHEN** a user clicks the mobile menu toggle button
  - **THEN** the mobile navigation menu expands showing all nav links

### 2. Hero
- The page SHALL display a hero section with a photo mosaic background, a heading "Discover The Best Services Near You", a subtext with listing count, a search form (text input + category select + location select + "EXPLORE NOW" button), and a row of category pill links.
- Scenario — Search form is interactive:
  - **WHEN** a user types in the search input
  - **THEN** the input displays the typed text
- Scenario — Category pills render:
  - **WHEN** the hero section loads
  - **THEN** 6 category pills are displayed: Restaurant, Food & Drink, Shopping, Beauty, Hotels, All Categories

### 3. Categories
- The page SHALL display a "Most Popular Categories" section with 5 category cards, each showing a circular colored icon, category name, and listing count.
- Scenario — Categories render correctly:
  - **WHEN** the page loads
  - **THEN** 5 category cards appear with their respective names and listing counts (Food & Drink: 78, Restaurant: 32, Hotels: 16, Beauty & Spa: 55, Shopping: 23)

### 4. Services
- The page SHALL display a "The Most Searched Services" section with a tabbed interface (Restaurant, Shopping, Travel, Beauty) showing 4 listing cards per tab with image, title, location, and rating.
- Scenario — Default tab shows Restaurant listings:
  - **WHEN** the section loads
  - **THEN** the Restaurant tab is active and 4 restaurant listings are shown
- Scenario — Tab switching:
  - **WHEN** a user clicks the Shopping tab
  - **THEN** the Shopping tab becomes active and shopping listings replace restaurant listings

### 5. Locations
- The page SHALL display a "Featured Locations" section with 4 location cards showing background images, location names, and listing counts.
- Scenario — Location cards render:
  - **WHEN** the page loads
  - **THEN** 4 location cards appear: New York (2,840), Los Angeles (1,925), Chicago (1,430), Miami (980)

### 6. Testimonials
- The page SHALL display a "What Our Users Say" section on a dark background with 3 testimonial cards, each showing star ratings, a quote, and user info (name, role, avatar).
- Scenario — Testimonials render:
  - **WHEN** the page loads
  - **THEN** 3 testimonial cards appear with names, roles, and quotes

### 7. Blog
- The page SHALL display a "Latest News" section with 3 blog post cards showing images, dates, titles, and excerpts.
- Scenario — Blog posts render:
  - **WHEN** the page loads
  - **THEN** 3 blog post cards appear with titles and dates

### 8. Newsletter
- The page SHALL display a "Subscribe to Our Newsletter" section with an email input field and a "Subscribe" button.
- Scenario — Newsletter form is interactive:
  - **WHEN** a user types an email address and clicks Subscribe
  - **THEN** the form accepts the input without error

### 9. Footer
- The page SHALL display a footer with logo, contact info, quick links, and a bottom bar containing copyright text with a "Component Dock" link to https://www.componentdock.com/. The footer SHALL NOT contain any external attribution links.
- Scenario — Footer links to Component Dock:
  - **WHEN** the footer renders
  - **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present
- Scenario — No external attribution:
  - **WHEN** the footer renders
  - **THEN** no links to external template providers appear

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/localfinder/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/localfinder/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/localfinder` ships on https://localfinder.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/localfinder/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/localfinder/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/localfinder/public/CNAME` = `localfinder.free.componentdock.com`
  and the package `homepage` = `https://localfinder.free.componentdock.com`.
