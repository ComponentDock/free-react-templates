# Drape — Implementation Tasks

Source design: **Fashe** (`https://colorlib.com/wp/template/fashe/`) → recreation name **drape**. Shipped at https://drape.free.componentdock.com.

Scope: Drape is a modern fashion e-commerce landing page template with a warm terracotta palette, sharp corners, and the Assistant typeface. It recreates the ColorLib Fashe design under a different name with React 19 + Tailwind CSS 4.

## Component breakdown

Render order as composed in `apps/drape/src/App.tsx`:

### 1. AnnouncementBar
- The template SHALL display a dark announcement bar with promotional text at the top.
- Scenario — Renders promotional message:
  - **WHEN** the page loads
  - **THEN** an announcement bar is visible with "Free shipping on orders over $100"

### 2. Header
- The template SHALL have a sticky header with the brand logo, desktop navigation links, and icon actions.
- Scenario — Logo and nav links visible:
  - **WHEN** the page loads
  - **THEN** the "Drape." logo is visible
  - **AND** navigation links for Home, Shop, Product, Blog, About, Contact are present
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the mobile menu toggle button
  - **THEN** the mobile navigation menu appears

### 3. Hero
- The template SHALL display a full-height hero banner with a background image, headline, and call-to-action.
- Scenario — Hero content:
  - **WHEN** the page loads
  - **THEN** the heading "New season essentials" is visible
  - **AND** a "Shop now" button links to the shop section

### 4. Marquee
- The template SHALL display a scrolling marquee with promotional text items.
- Scenario — Marquee content:
  - **WHEN** the page loads
  - **THEN** text items including "Free shipping over $100" and "30 day returns" are present

### 5. ShopByCategory
- The template SHALL display a grid of category cards with images.
- Scenario — Three categories:
  - **WHEN** the page loads
  - **THEN** three category cards are visible: Clothing, Jewellery, Bags

### 6. NewArrivals
- The template SHALL display a grid of product cards with images, titles, and prices.
- Scenario — Eight products:
  - **WHEN** the page loads
  - **THEN** eight product cards are visible with titles and prices
- Scenario — Sale badge:
  - **WHEN** a product has a sale price
  - **THEN** a "Sale" badge is displayed on that product card

### 7. ImageWithText
- No dedicated spec block — hold this band to the design notes.
- Anchors: Made to last · Our story

### 8. Features
- The template SHALL display a three-column grid of feature highlights.
- Scenario — Three features:
  - **WHEN** the page loads
  - **THEN** "Free shipping", "30 day returns", and "Made responsibly" headings are visible

### 9. Journal
- The template SHALL display a grid of blog article cards.
- Scenario — Three articles:
  - **WHEN** the page loads
  - **THEN** three article cards with titles, dates, and excerpts are visible

### 10. Footer
- The template SHALL have a footer with newsletter form, navigation links, and Component Dock attribution.
- Scenario — Component Dock link:
  - **WHEN** the page loads
  - **THEN** a link to https://www.componentdock.com/ labeled "www.componentdock.com" is present in the footer
- Scenario — Newsletter form:
  - **WHEN** the page loads
  - **THEN** an email input and Subscribe button are present

### Cross-cutting requirements

- **Image with text section** — The template SHALL display a split layout with an image and descriptive text.
  - Scenario — Made to last content: **WHEN** the page loads; **THEN** the heading "Made to last" and an "Our story" link are visible
- **Document title** — The template SHALL set the browser tab title.
  - Scenario — Title on load: **WHEN** the page loads; **THEN** the document title is "Drape — Fashion E-Commerce Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/drape/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/drape/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/drape` ships on https://drape.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/drape/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/drape/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/drape/public/CNAME` = `drape.free.componentdock.com`
  and the package `homepage` = `https://drape.free.componentdock.com`.
