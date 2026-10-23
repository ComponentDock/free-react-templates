# Roster — Implementation Tasks

Source design: **Listco** (`https://colorlib.com/wp/template/listco/`) → recreation name **roster**. Shipped at https://roster.free.componentdock.com.

Scope: Roster is a directory listing landing page template that recreates the ColorLib Listco design. It provides a hero search section, popular city cards, a scrollable directory listing carousel, a how-it-works explainer, new listings, and a branded footer linking to Component Dock.

## Component breakdown

Render order as composed in `apps/roster/src/App.tsx`:

### 1. Navbar
- The page renders a fixed navbar with the "Roster" logo, navigation links (Home, Categories, Explore, Contact), a Login link, and an "Add Listing" button. The navbar transitions from transparent to solid white on scroll.
- Scenario — Navbar renders all elements:
  - **GIVEN** the page loads
  - **THEN** the navbar displays the logo text "Roster"
  - **AND** navigation links for Home, Categories, Explore, and Contact are visible
  - **AND** a "Log in" link is visible
  - **AND** an "Add Listing" button is visible
- Scenario — Navbar toggles dark mode:
  - **GIVEN** the page loads in light mode
  - **WHEN** I click the dark mode toggle button
  - **THEN** the html element has class "dark"

### 2. Hero
- The hero section displays a background image with dark overlay, a heading "Explore Your City", a subtitle, a search form with text input, category dropdown, and search button, plus category icon shortcuts.
- Scenario — Hero renders heading and search form:
  - **GIVEN** the page loads
  - **THEN** a heading "Explore Your City" is displayed
  - **AND** a search input, category select, and search button are visible
- Scenario — Search form is interactive:
  - **GIVEN** the page loads
  - **WHEN** I type "restaurant" in the search input
  - **THEN** the input displays "restaurant"
  - **WHEN** I select "Restaurants" from the category dropdown
  - **THEN** the dropdown shows "Restaurants"

### 3. PopularLocations
- The page displays an "Explore Top Cities" section with 6 city cards in a responsive grid. Each card shows a city image, name, and listing count badge.
- Scenario — All city cards render:
  - **GIVEN** the page loads
  - **THEN** the "Explore Top Cities" heading is visible
  - **AND** 6 city cards are displayed (New York, Paris, Rome, Sydney, Tokyo, London)
  - **AND** each card shows a listing count (e.g. "65+ Listings")

### 4. PopularDirectory
- The page displays a "Popular Directory" section with scrollable listing cards. Each card shows an image with overlay, price badge, status, title, description, category, and a favorite button.
- Scenario — Directory cards render:
  - **GIVEN** the page loads
  - **THEN** the "Popular Directory" heading is visible
  - **AND** 5 directory cards are displayed with titles and price badges
- Scenario — Favorite button is clickable:
  - **GIVEN** the page loads
  - **WHEN** I click the favorite button on "Urban Bites"
  - **THEN** the button remains in the document

### 5. HowItWorks
- The page displays a "How It Works" section with a CTA button and 3 numbered steps explaining the directory process.
- Scenario — Steps render correctly:
  - **GIVEN** the page loads
  - **THEN** the "How It Works" heading is visible
  - **AND** 3 steps are displayed (Find Businesses, Review Listings, Make a Reservation)
  - **AND** step numbers 01, 02, 03 are visible

### 6. NewDirectory
- The page displays a "New Directory" section with a carousel of new listing cards.
- Scenario — New directory cards render:
  - **GIVEN** the page loads
  - **THEN** the "New Directory" heading is visible
  - **AND** 5 new directory cards are displayed

### 7. Footer
- The footer renders on a dark background with logo, contact info, newsletter signup, social links, and a "Component Dock" attribution link.
- Scenario — Footer links to Component Dock:
  - **GIVEN** the page loads
  - **THEN** the footer contains a link to "https://www.componentdock.com/"
  - **AND** the link text mentions "Component Dock"
  - **AND** the link opens in a new tab
- Scenario — Footer newsletter form is interactive:
  - **GIVEN** the page loads
  - **WHEN** I type an email in the newsletter input
  - **THEN** the input displays the typed email
  - **WHEN** I submit the newsletter form
  - **THEN** the page does not navigate (form submission is prevented)

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/roster/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/roster/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/roster` ships on https://roster.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/roster/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/roster/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/roster/public/CNAME` = `roster.free.componentdock.com`
  and the package `homepage` = `https://roster.free.componentdock.com`.
