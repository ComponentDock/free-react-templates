# Vow — Implementation Tasks

Source design: **Wish** (`https://colorlib.com/wp/template/wish/`) → recreation name **vow**. Shipped at https://vow.free.componentdock.com.

Scope: Vow is a single-page fashion/e-commerce shop landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Wish" free template (source: https://colorlib.com/wp/template/wish/), built under a DIFFERENT name (**Vow**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/vow/src/App.tsx`:

### 1. Header
- The header SHALL display the Vow logo, navigation links, search input, cart icon with count, wishlist star with count, and avatar icon.
- Scenario — Navigation links:
  - **GIVEN** the Vow app is rendered
  - **THEN** the header SHALL contain links for Home, Clothes, Accessories,
  - **AND** the logo text SHALL read "Vow"
- Scenario — Header actions:
  - **GIVEN** the Vow app is rendered
  - **THEN** a search input SHALL be present
  - **AND** a cart icon with item count SHALL be visible
  - **AND** a wishlist star icon with count SHALL be visible
  - **AND** an avatar icon SHALL be visible

### 2. HeroSlider
- The hero section SHALL render a full-width background image carousel with "Promo Prices" subtitle and "New Collection" heading.
- Scenario — Hero content:
  - **GIVEN** the Vow app is rendered
  - **THEN** a hero section SHALL be visible with a heading "New Collection"
  - **AND** a subtitle "Promo Prices" SHALL be displayed
  - **AND** the hero background SHALL use a placeholder image from
  - **AND** slide indicator dots (01, 02, 03) SHALL be present

### 3. PromoSection
- A promo section SHALL display "only the best" subtitle and "promo prices" title with 3 promo cards in a grid.
- Scenario — Promo cards:
  - **GIVEN** the Vow app is rendered
  - **THEN** a promo section SHALL be visible with title "promo prices"
  - **AND** 3 promo cards SHALL be rendered in a grid
  - **AND** each card SHALL show a discount percentage and category
  - **AND** each card SHALL have a "Shop Now" link

### 4. NewArrivals
- A new arrivals section SHALL display 6 products in a 3-column grid with images, ratings, names, prices, and action buttons.
- Scenario — Product cards:
  - **GIVEN** the Vow app is rendered
  - **THEN** a new arrivals section SHALL be visible with title "new arrivals"
  - **AND** 6 product cards SHALL be rendered
  - **AND** each card SHALL have a product image from picsum.photos
  - **AND** each card SHALL show a star rating
  - **AND** each card SHALL display a product name and price
  - **AND** each card SHALL have add-to-cart and wishlist action buttons

### 5. ExtraPromos
- Two side-by-side promo banners SHALL display with background images, titles, descriptions, and "check out" buttons.
- Scenario — Extra promo content:
  - **GIVEN** the Vow app is rendered
  - **THEN** 2 extra promo banners SHALL be visible
  - **AND** the first SHALL show "30% off" with "On all shoes"
  - **AND** the second SHALL show "Mix & Match"
  - **AND** each SHALL have a "check out" button

### 6. Gallery
- A gallery section SHALL display hashtags, description, submit button, and an image slider.
- Scenario — Gallery content:
  - **GIVEN** the Vow app is rendered
  - **THEN** hashtag links (#vow, #vowinstagram, #vowgirl) SHALL be visible
  - **AND** a "submit" button SHALL be present
  - **AND** gallery images SHALL use picsum.photos placeholders

### 7. Testimonials
- A testimonials section SHALL display customer quotes with author details.
- Scenario — Testimonial content:
  - **GIVEN** the Vow app is rendered
  - **THEN** at least one testimonial SHALL be visible with a quote,

### 8. Newsletter
- A newsletter section SHALL render with a background image, heading, email input, and subscribe button.
- Scenario — Newsletter form:
  - **GIVEN** the Vow app is rendered
  - **THEN** a newsletter section SHALL be visible with text "subscribe
  - **AND** an email input field SHALL be present
  - **AND** a "subscribe" button SHALL be present

### 9. Footer
- The footer SHALL render a centered layout with logo, nav links, social icons, and copyright with Component Dock link.
- Scenario — Footer structure:
  - **GIVEN** the Vow app is rendered
  - **THEN** the footer SHALL display "Vow" logo
  - **AND** navigation links SHALL be present
  - **AND** social media icons SHALL be visible (Pinterest, LinkedIn,
- Scenario — Component Dock credit:
  - **GIVEN** the Vow app is rendered
  - **THEN** the footer SHALL contain a link to
  - **AND** the link text SHALL be "Component Dock"
  - **AND** there SHALL be NO references to "colorlib" in the rendered app

### Cross-cutting requirements

- **Page structure and branding** — The app SHALL render a single-page fashion shop landing page with the Vow brand name, Open Sans font, and the #937c6f color scheme.
  - Scenario — Document title and meta: **GIVEN** the Vow app is rendered; **THEN** the document title SHALL be "Vow — Fashion Shop Template"; **AND** a meta description SHALL mention "fashion shop"
  - Scenario — Font loading: **GIVEN** the Vow app is rendered; **THEN** the page SHALL load Open Sans from Google Fonts; **AND** Open Sans SHALL be used for headings and body text
- **Semantics** — The page SHALL use semantic HTML elements and aria labels where appropriate.
  - Scenario — Semantic structure: **GIVEN** the Vow app is rendered; **THEN** a banner landmark SHALL be present; **AND** a contentinfo landmark SHALL be present; **AND** a main landmark SHALL be present
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/vow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/vow/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/vow` ships on https://vow.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/vow/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/vow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vow/public/CNAME` = `vow.free.componentdock.com`
  and the package `homepage` = `https://vow.free.componentdock.com`.
