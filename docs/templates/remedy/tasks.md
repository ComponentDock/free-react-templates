# Remedy — Implementation Tasks

Source design: **Pharmative** (`https://colorlib.com/wp/template/pharmative/`) → recreation name **remedy**. Shipped at https://remedy.free.componentdock.com.

Scope: Recreate the ColorLib "Pharmative" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Remedy". The template is a pharmacy and supplement store landing page with hero carousel, feature banners, product cards, newsletter CTA, testimonials, and footer.

## Component breakdown

Render order as composed in `apps/remedy/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky navbar with the "Remedy" logo (green brand color), desktop navigation links (Home, Store, Products with dropdown, About, Contact), search toggle, shopping cart icon, and mobile hamburger menu.
- Scenario — Navbar renders all elements:
  - **WHEN** the page loads
  - **THEN** the "Remedy" logo is visible
  - **AND** navigation links: Home, Store, Products, About, Contact are present
  - **AND** a search button and shopping cart icon are present
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the hamburger menu button
  - **THEN** the mobile navigation menu appears
  - **AND** clicking a link closes the mobile menu
- Scenario — Search bar toggle:
  - **WHEN** the user clicks the search button
  - **THEN** a search input field appears
  - **AND** clicking close hides the search bar

### 2. Hero
- The template SHALL display a hero carousel with two slides featuring background images, centered headings, descriptions, and "Shop Now" call-to-action buttons.
- Scenario — Hero displays first slide:
  - **WHEN** the page loads
  - **THEN** the first slide shows "Remedy Opens 24 Hours" heading
  - **AND** a "Shop Now" button is visible
- Scenario — Hero navigation arrows work:
  - **WHEN** the user clicks the next arrow
  - **THEN** the second slide appears with "New Medicine Everyday"
  - **WHEN** the user clicks the previous arrow
  - **THEN** the first slide reappears

### 3. FeatureBanners
- The template SHALL display three feature banners in a row: Free Delivery, New Medicine Everyday, and Medicines Guaranteed, each with an icon, title, description, and "Learn more" link.
- Scenario — Feature banners render:
  - **WHEN** the page loads
  - **THEN** three feature banners are visible with titles and descriptions

### 4. Products
- The template SHALL display a "Pharmacy Products" heading and a grid of 4 product cards with images, optional sale badges, names, and prices.
- Scenario — Products render:
  - **WHEN** the page loads
  - **THEN** 4 product cards are displayed with images and prices
  - **AND** sale badges appear on applicable products

### 5. Newsletter
- The template SHALL display a full-width green banner with a discount heading, description, and email signup form.
- Scenario — Newsletter renders:
  - **WHEN** the page loads
  - **THEN** the "Sign up for discount" heading is visible
  - **AND** an email input and "Sign up" button are present

### 6. Testimonials
- The template SHALL display a "Happy Customers" heading and 3 testimonial cards with quotes and author names.
- Scenario — Testimonials render:
  - **WHEN** the page loads
  - **THEN** 3 testimonial cards are visible with quotes and author names

### 7. WhyUs
- The template SHALL display a "Why Us" heading and 3 numbered items with descriptions.
- Scenario — Why Us renders:
  - **WHEN** the page loads
  - **THEN** 3 numbered items are visible with titles and descriptions

### 8. Footer
- The template SHALL display a footer with About Remedy description, Navigation links, Contact info, and a copyright line linking to https://www.componentdock.com/.
- Scenario — Footer renders with Component Dock:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to componentdock.com
  - **AND** the link has target="_blank"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/remedy/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/remedy/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/remedy` ships on https://remedy.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/remedy/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/remedy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/remedy/public/CNAME` = `remedy.free.componentdock.com`
  and the package `homepage` = `https://remedy.free.componentdock.com`.
