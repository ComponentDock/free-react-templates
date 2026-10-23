# Stockroom — Implementation Tasks

Source design: **Amado** (`https://colorlib.com/wp/template/amado/`) → recreation name **stockroom**. Shipped at https://stockroom.free.componentdock.com.

Scope: A furniture e-commerce landing page with a sidebar navigation, product category grid with hover effects, newsletter section, and a minimal footer. Recreation of ColorLib "Amado".

## Component breakdown

Render order as composed in `apps/stockroom/src/App.tsx`:

### 1. Sidebar
- The sidebar SHALL display logo, navigation links, CTA buttons, cart/favourite/search links, and social icons.
- Scenario — Sidebar displays logo and navigation:
  - **WHEN** the user loads the page
  - **THEN** the sidebar shows the logo
  - **AND** the navigation links are visible: "Home", "Shop", "Product", "Cart", "Checkout"
  - **AND** two CTA buttons are visible: "%Discount%" and "New this week"
- Scenario — Sidebar shows cart and social links:
  - **WHEN** the sidebar is visible
  - **THEN** a "Cart (0)" link is displayed
  - **AND** a "Favourite" link is displayed
  - **AND** a "Search" link is displayed
  - **AND** social icons are visible: Pinterest, Instagram, Facebook, Twitter

### 2. SearchOverlay
- The search overlay SHALL open as a full-screen overlay with search input and close button.
- Scenario — Search overlay opens and closes:
  - **WHEN** the user clicks the Search link in the sidebar
  - **THEN** a full-screen search overlay opens
  - **AND** a search input is displayed
  - **WHEN** the user clicks the close button
  - **THEN** the overlay is dismissed

### 3. ProductGrid
- The product grid SHALL display 9 product category cards in a 3-column layout with hover overlay effects.
- Scenario — Nine product categories are displayed in a grid:
  - **WHEN** the user views the main content area
  - **THEN** there are 9 product category cards in a 3-column grid
  - **AND** each card has a background image
  - **AND** each card shows a price and product name
- Scenario — Product cards are clickable links:
  - **WHEN** a product category card is visible
  - **THEN** the entire card is a clickable link to the shop page

### 4. Newsletter
- The newsletter section SHALL display a heading with yellow accent, description, and email subscription form.
- Scenario — Newsletter displays heading and form:
  - **WHEN** the user scrolls to the newsletter section
  - **THEN** the heading reads "Subscribe for a 25% Discount"
  - **AND** the words "25% Discount" are highlighted in yellow
  - **AND** an email input field is present
  - **AND** a "Subscribe" button is visible with yellow background
- Scenario — Newsletter has dark background:
  - **WHEN** the newsletter section is visible
  - **THEN** the background color is dark gray (#3c3c3c)
  - **AND** the heading text is white

### 5. Footer
- The footer SHALL display logo, copyright with Component Dock link, and navigation links.
- Scenario — Footer displays logo and copyright:
  - **WHEN** the user scrolls to the footer
  - **THEN** the footer has a very dark background (#252525)
  - **AND** the logo is displayed
  - **AND** the copyright text is visible with a Component Dock link
- Scenario — Footer shows navigation links:
  - **WHEN** the footer is visible
  - **THEN** navigation links are shown: "Home", "Shop", "Product", "Cart", "Checkout"
  - **AND** the links are right-aligned

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/stockroom/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/stockroom/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Sidebar: logo, nav links, CTA buttons, cart/fav/search, social icons; [ ] Product grid: 9 cards in 3-col layout, images, hover overlay, prices; [ ] Hover effects: dark overlay, yellow accent line, white text; [ ] Newsletter: dark bg, heading with yellow accent, email input + subscribe; [ ] Footer: dark bg, logo, copyright, nav links right-aligned; [ ] Search overlay: opens on click, closes on X; [ ] Responsive: sidebar collapses to hamburger on mobile; [ ] Fonts: Helvetica Neue Bold (headings), Helvetica Neue Medium (body); [ ] Colors: `#fbb710` brand, `#131212` dark, `#3c3c3c` newsletter, `#252525` footer; [ ] Buttons: rectangular (no radius), 55px height, 160px min-width; [ ] No ColorLib references in app code; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/stockroom` ships on https://stockroom.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/stockroom/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/stockroom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stockroom/public/CNAME` = `stockroom.free.componentdock.com`
  and the package `homepage` = `https://stockroom.free.componentdock.com`.
