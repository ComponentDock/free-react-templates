# Shopcraft — Implementation Tasks

Source design: **Shop** (`https://colorlib.com/wp/template/shop/`) → recreation name **shopcraft**. Shipped at https://shopcraft.free.componentdock.com.

Scope: Shopcraft is a single-page e-commerce store template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Shop" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/shopcraft/src/App.tsx`:

### 1. TopBar
- The template SHALL display a top bar with phone number, email address, and a login link.
- Scenario — TopBar renders contact info:
  - **WHEN** the user visits the page
  - **THEN** a top bar is visible containing a phone number
  - **AND** an email address is displayed
  - **AND** a login link is present

### 2. Navbar
- The template SHALL display a navigation bar with logo and links to main sections.
- Scenario — Navbar renders all links:
  - **WHEN** the user visits the page
  - **THEN** a navigation bar with a logo is visible
  - **AND** nav links include Home, Category, Men, Women, Latest
  - **AND** a Pages dropdown menu is present

### 3. Hero
- The template SHALL display a full-width hero banner with sale messaging and a CTA button.
- Scenario — Hero renders promotional content:
  - **WHEN** the user visits the page
  - **THEN** the hero banner displays "Flat 75% Off"
  - **AND** the heading "It's Happening this Season!" is visible
  - **AND** a "Purchase Now" button is present

### 4. Categories
- The template SHALL display a grid of product category cards with hover overlay titles.
- Scenario — Category grid renders categories:
  - **WHEN** the user scrolls to the category section
  - **THEN** the heading "Shop for Different Categories" is visible
  - **AND** category cards are displayed for Women, Couple, and Men
  - **AND** each card shows its title

### 5. MenProducts
- The template SHALL display men's products on a dark overlay background with hover action icons.
- Scenario — Men's products render correctly:
  - **WHEN** the user scrolls to the men's products section
  - **THEN** the heading "New released Products for Men" is visible
  - **AND** product cards with images, names, and prices are displayed
  - **AND** hover overlay shows action icons (heart, layers, cart, expand)

### 6. WomenProducts
- The template SHALL display women's products on a light background.
- Scenario — Women's products render correctly:
  - **WHEN** the user scrolls to the women's products section
  - **THEN** the heading "New released Products for Women" is visible
  - **AND** product cards with images, names, and prices are displayed

### 7. Countdown
- The template SHALL display a countdown timer with days, hours, minutes, and seconds.
- Scenario — Countdown timer renders:
  - **WHEN** the user scrolls to the countdown section
  - **THEN** "Exclusive Hot Deal Ends in:" heading is visible
  - **AND** countdown units (Days, Hours, Minutes, Seconds) are displayed
  - **AND** a "Shop Now" button is present

### 8. RelatedProducts
- The template SHALL display a grid of related product cards with images, names, and prices.
- Scenario — Related products render:
  - **WHEN** the user scrolls to the related products section
  - **THEN** "Related Searched Products" heading is visible
  - **AND** product cards with images, names, and prices are displayed

### 9. BrandLogos
- The template SHALL display a row of brand/partner logos.
- Scenario — Brand logos render:
  - **WHEN** the user scrolls to the brand section
  - **THEN** brand logo images are displayed in a row

### 10. Footer
- The template SHALL display a footer with About Us, Newsletter, Instagram Feed, Follow Us sections, and a link to Component Dock.
- Scenario — Footer renders all sections:
  - **WHEN** the user scrolls to the footer
  - **THEN** an About Us column with description is visible
  - **AND** a Newsletter signup form is present
  - **AND** social media links are present
  - **AND** a "More templates at Component Dock" link to https://www.componentdock.com/ is present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/shopcraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/shopcraft/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/shopcraft` ships on https://shopcraft.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/shopcraft/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/shopcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shopcraft/public/CNAME` = `shopcraft.free.componentdock.com`
  and the package `homepage` = `https://shopcraft.free.componentdock.com`.
