# Merch — Implementation Tasks

Source design: **Product** (`https://colorlib.com/wp/template/product/`) → recreation name **merch**. Shipped at https://merch.free.componentdock.com.

Scope: Merch is a single-page e-commerce fashion store template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/merch/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky top navigation bar with the logo "Merch" (with green dot accent), menu links (New, Men, Women, Accessories, Jewelry, About, Contact), and action icons (search, user, cart).
- Scenario — Desktop nav shows all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the logo "Merch." should be visible
  - **AND** all 7 menu links should be present
  - **AND** search, user, and cart icon buttons should be visible
- Scenario — Mobile nav toggles:
  - **WHEN** the user clicks the hamburger menu icon on mobile
  - **THEN** the mobile menu should open showing all navigation links
  - **WHEN** the user clicks a link
  - **THEN** the mobile menu should close

### 2. Hero
- The template SHALL display a full-width hero section with a background image, overlay text, and a call-to-action button.
- Scenario — Hero content renders:
  - **WHEN** the page loads
  - **THEN** a headline "The New Way To Display Product" should be visible
  - **AND** a "Spring / Summer Collection" subtitle should appear
  - **AND** a green "Explore now" CTA button should be present

### 3. Features
- The template SHALL display a 3-column features section with icons and descriptions for Worldwide Delivery, Secure Payments, and Simple Returns.
- Scenario — Features render correctly:
  - **WHEN** the page loads
  - **THEN** 3 feature items should appear in a row
  - **AND** each should have an icon, heading, and description text

### 4. NewArrivals
- The template SHALL display a "New Arrivals" section with a 3-column grid of 6 product cards, each showing an image, name, price, badge, and add-to-cart button.
- Scenario — Product cards render:
  - **WHEN** the page loads
  - **THEN** a "New Arrivals" heading should appear
  - **AND** 6 product cards should display in a grid
  - **AND** each card should show an image, product name, and price
  - **AND** some cards should have "new" or "sale" badges
- Scenario — Product card interactions:
  - **WHEN** a user hovers over a product card
  - **THEN** a heart/favorite icon should become visible

### 5. DealOfWeek
- No dedicated spec block — hold this band to the design notes.
- Anchors: Week Deal · Hodina Watch · Premium craftsmanship meets modern design. This limited-time offer won't last forever. · Shop Now

### 6. PopularItems
- The template SHALL display a "Popular Items" section with a 3-column grid of 6 product cards using the same card pattern.
- Scenario — Popular items render:
  - **WHEN** the page loads
  - **THEN** a "Popular Items" heading should appear
  - **AND** 6 product cards should display

### 7. Newsletter
- The template SHALL display a newsletter section with an email input and subscribe button.
- Scenario — Newsletter form renders:
  - **WHEN** the page loads
  - **THEN** an email input field should be present
  - **AND** a "Subscribe" button should be visible
- Scenario — Newsletter form clears on submit:
  - **WHEN** the user enters an email and clicks Subscribe
  - **THEN** the email input should be cleared

### 8. Footer
- The template SHALL display a footer with Help, About, and Shop link columns, a newsletter signup, and a copyright line linking to Component Dock.
- Scenario — Footer columns render:
  - **WHEN** the page loads
  - **THEN** Help, About, and Shop columns should be present
  - **AND** a newsletter signup should be in the footer
- Scenario — Footer links to Component Dock:
  - **WHEN** the footer is visible
  - **THEN** a link to https://www.componentdock.com/ should be present
  - **AND** it should display as "More templates at Component Dock"

### Cross-cutting requirements

- **Deal of the Week with countdown** — The template SHALL display a deal section with a product image on the left and a countdown timer (days/hours/mins/secs) on the right.
  - Scenario — Deal section renders: **WHEN** the page loads; **THEN** a "Week Deal" label should appear; **AND** a countdown timer should show days, hours, minutes, seconds; **AND** a dark "Shop Now" button should be visible
  - Scenario — Countdown timer decrements: **WHEN** time passes; **THEN** the seconds value should decrement
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/merch/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/merch/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/merch` ships on https://merch.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/merch/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/merch/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/merch/public/CNAME` = `merch.free.componentdock.com`
  and the package `homepage` = `https://merch.free.componentdock.com`.
