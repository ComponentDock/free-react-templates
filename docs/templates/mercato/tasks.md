# Mercato — Implementation Tasks

Source design: **Karma** (`https://colorlib.com/wp/template/karma/`) → recreation name **mercato**. Shipped at https://mercato.free.componentdock.com.

Scope: Mercato is a single-page ecommerce/shopping website template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/mercato/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Shopping bag · Search · Submit search

### 2. Hero
- The template SHALL display a fullscreen hero section with product headline and CTA.
- Scenario — Hero displays product headline and CTA:
  - **WHEN** the hero section is visible
  - **THEN** a headline is displayed
  - **AND** an "Add to Bag" button is visible

### 3. Features
- The template SHALL display 4 feature cards in a row.
- Scenario — Four features are displayed:
  - **WHEN** the features section is visible
  - **THEN** 4 feature cards are shown with icons, titles, and descriptions

### 4. CategoryGrid
- The template SHALL display category cards in a grid layout.
- Scenario — Category grid shows deal cards:
  - **WHEN** the category section is visible
  - **THEN** category cards are displayed in a grid

### 5. ProductCarousel
- The template SHALL display product cards with tab switching.
- Scenario — Product section shows Latest Products by default:
  - **WHEN** the product carousel section is visible
  - **THEN** product cards are shown
- Scenario — Tabs switch between Latest and Coming products:
  - **WHEN** the user clicks "Coming Products"
  - **THEN** the heading changes to "Coming Products"

### 6. ExclusiveDeal
- The template SHALL display a countdown timer with product overlay.
- Scenario — Countdown timer displays days, hours, minutes, seconds:
  - **WHEN** the exclusive deal section is visible
  - **THEN** a countdown timer with Days, Hours, Mins, Secs blocks is displayed
  - **AND** a "Shop Now" primary button is visible

### 7. BrandLogos
- The template SHALL display brand logo images.
- Scenario — Brand logos are displayed:
  - **WHEN** the brand section is visible
  - **THEN** 5 brand logo images are shown

### 8. DealsOfTheWeek
- No dedicated spec block — hold this band to the design notes.
- Anchors: Deals of the Week · Don't miss our best weekly offers

### 9. Footer
- The template SHALL display a footer with newsletter, social links, and copyright.
- Scenario — Footer columns are displayed:
  - **WHEN** the footer is visible
  - **THEN** About Us, Newsletter, Instagram Feed, and Follow Us columns are shown
- Scenario — Footer copyright links to Component Dock:
  - **WHEN** the footer bottom bar is visible
  - **THEN** "Made with ♥ by Component Dock" links to https://www.componentdock.com/

### Cross-cutting requirements

- **Navigation header** — The template SHALL display a sticky header with logo, nav links, bag icon, and search toggle.
  - Scenario — Logo and nav links are visible: **WHEN** the page loads; **THEN** the "Mercato" wordmark is displayed in the header; **AND** nav links "Home", "Shop", "Blog", "Pages", "Contact" are visible
  - Scenario — Shop dropdown shows sub-links on hover: **WHEN** the user hovers over "Shop"; **THEN** a dropdown appears with sub-links
  - Scenario — Search bar opens on toggle click: **WHEN** the user clicks the search toggle; **THEN** a full-width search input field appears
- **Deals of the week** — The template SHALL display related product cards.
  - Scenario — Related products are displayed: **WHEN** the deals section is visible; **THEN** the heading "Deals of the Week" is displayed; **AND** related product cards with thumbnail, title, and price are shown
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/mercato/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/mercato/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All sections render in order: header → hero → features → category → products → exclusive deal → brands → deals of the week → footer; [ ] Header sticky on scroll; dropdowns open on hover; search bar toggle works; [ ] Hero is fullscreen with product image and CTA; [ ] Product cards show all 4 hover action icons with brand gradient; [ ] Countdown timer displays and counts down; [ ] Footer has Component Dock link (not Colorlib); [ ] No ColorLib references anywhere in `apps/mercato/`; [ ] CNAME: `mercato.free.componentdock.com`; [ ] Homepage: `https://mercato.free.componentdock.com`; [ ] Images: `https://picsum.photos/seed/mercato-<n>/<w>/<h>` (deterministic); [ ] `npm run test:coverage` passes at 100%; [ ] `bash scripts/verify-app.sh mercato` passes; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/mercato` ships on https://mercato.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/mercato/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/mercato/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mercato/public/CNAME` = `mercato.free.componentdock.com`
  and the package `homepage` = `https://mercato.free.componentdock.com`.
