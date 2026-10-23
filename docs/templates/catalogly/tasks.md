# Catalogly — Implementation Tasks

Source design: **Listashop** (`https://colorlib.com/wp/template/listashop/`) → recreation name **catalogly**. Shipped at https://catalogly.free.componentdock.com.

Scope: An E-commerce Shop template with home banner, hot deals feature, featured products, timer / cta section, client logos and most products sections. Recreation of the ColorLib "ListAshop" template as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript application.

## Component breakdown

Render order as composed in `apps/catalogly/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Facebook · Twitter · Dribbble · Behance

### 2. Navbar
- The navbar SHALL display a logo on the left, navigation links (Home, Shop, Blog, Pages, Contact), and cart/search icons on the right.
- Scenario — Navbar renders with logo and navigation links:
  - **WHEN** the user loads the Catalogly page
  - **THEN** the navbar displays a logo on the left
  - **AND** navigation links include "Home", "Shop", "Blog", "Pages", "Contact"
  - **AND** a cart icon and search icon appear on the right
- Scenario — Shop dropdown shows sub-pages:
  - **WHEN** the user hovers over the "Shop" nav link
  - **THEN** a dropdown appears with "Shop Category", "Product Details", "Product Checkout", "Shopping Cart", "Confirmation"
- Scenario — Blog dropdown shows sub-pages:
  - **WHEN** the user hovers over the "Blog" nav link
  - **THEN** a dropdown appears with "Blog", "Blog Details"

### 3. HomeBanner
- The home banner SHALL show a heading, descriptive paragraph, white rounded CTA button, and product image.
- Scenario — Banner displays heading and CTA:
  - **WHEN** the user loads the Catalogly page
  - **THEN** a banner section shows a heading "Georgia Helmet Collections!"
  - **AND** a descriptive paragraph below the heading
  - **AND** a white rounded CTA button "View Collection"
  - **AND** a product image occupies the right column

### 4. HotDeals
- The hot deals section SHALL display two side-by-side image cards with overlay text and Shop Now links.
- Scenario — Two hot deal cards render:
  - **WHEN** the user scrolls to the hot deals section
  - **THEN** two side-by-side cards display
  - **AND** each card shows a product image
  - **AND** each card has text "Hot Deals of this Month" and a "Shop Now" link

### 5. FeaturedProducts
- The featured products section SHALL show a centered title, subtitle, and a carousel of product cards with images, icons, names, and prices.
- Scenario — Featured products carousel renders:
  - **WHEN** the user scrolls to the featured products section
  - **THEN** a centered heading "Featured Products" appears
  - **AND** a subtitle "Who are in extremely love with eco friendly system."
  - **AND** a carousel of product cards is visible
  - **AND** each product card shows an image, heart icon, cart icon, product name, and price

### 6. TimerSection
- The timer section SHALL display a light blue-gray background with a countdown timer (days, hours, minutes, seconds) and a CTA button.
- Scenario — Countdown timer displays time units:
  - **WHEN** the user scrolls to the timer section
  - **THEN** a light blue-gray background section appears
  - **AND** a countdown shows days, hours, minutes, seconds
  - **AND** a CTA button is present

### 7. LatestProducts
- The latest products section SHALL display a carousel of product cards using the same layout as featured products.
- Scenario — Latest products section renders:
  - **WHEN** the user scrolls to the latest products section
  - **THEN** a carousel of product cards appears
  - **AND** each card follows the same layout as featured products

### 8. ClientLogos
- The client logos section SHALL display a row of client/partner logo images.
- Scenario — Client logos row renders:
  - **WHEN** the user scrolls to the client logos section
  - **THEN** a row of client/partner logo images is displayed

### 9. Footer
- The footer SHALL have four columns (About Us, Newsletter, Instagram Feed, Follow Us) and a bottom bar with copyright text linking to Component Dock.
- Scenario — Footer renders four columns:
  - **WHEN** the user scrolls to the footer
  - **THEN** four columns appear: About Us, Newsletter, Instagram Feed, Follow Us
  - **AND** the Newsletter column has an email input and submit button
  - **AND** the Instagram Feed shows 8 thumbnail images
  - **AND** the Follow Us column shows social icons (Facebook, Twitter, Dribbble, Behance)
  - **AND** a footer bottom bar shows copyright text with a heart icon
- Scenario — Newsletter form has email input:
  - **WHEN** the user is in the Newsletter footer column
  - **THEN** an email input with placeholder "Email Address" is present
  - **AND** a submit button with arrow icon is next to the input

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/catalogly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/catalogly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Navbar renders with logo, nav links, dropdowns, cart/search icons; [ ] Home banner shows heading, description, white CTA button, product image; [ ] Hot deals section shows two side-by-side cards; [ ] Featured products carousel renders with product cards; [ ] Timer/CTA section has countdown display and button; [ ] Latest products carousel renders; [ ] Client logos row renders; [ ] Footer has 4 columns: About, Newsletter, Instagram, Follow Us; [ ] Newsletter email input and submit button work; [ ] Footer bottom has copyright with heart icon; [ ] Design tokens match: #c5322d brand, Roboto font, #e8f0f2/#e5ecee backgrounds; [ ] All images use placeholder URLs (picsum.photos); [ ] No ColorLib references in app code; [ ] Footer links to https://www.componentdock.com/; [ ] Tests pass at 100% coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/catalogly` ships on https://catalogly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/catalogly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/catalogly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/catalogly/public/CNAME` = `catalogly.free.componentdock.com`
  and the package `homepage` = `https://catalogly.free.componentdock.com`.
