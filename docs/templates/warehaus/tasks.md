# Warehaus — Implementation Tasks

Source design: **Winkel** (`https://colorlib.com/wp/template/winkel/`) → recreation name **warehaus**. Shipped at https://warehaus.free.componentdock.com.

Scope: Warehaus is a single-page e-commerce shop landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Winkel" free template (source: https://colorlib.com/wp/template/winkel/), built under a DIFFERENT name (**Warehaus**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/warehaus/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Shopping cart · Toggle menu · Warehaus

### 3. Hero
- The hero section MUST auto-advance between slides and support manual navigation.
- Scenario — Carousel auto-advances:
  - **WHEN** the hero section is displayed
  - **AND** 5 seconds elapse
  - **THEN** the slide content changes

### 4. Services
- No dedicated spec block — hold this band to the design notes.

### 5. BestSellers
- No dedicated spec block — hold this band to the design notes.
- Anchors: Best Sellers

### 6. NewCollections
- The template MUST display all major sections in order: TopBar, Navbar, Hero, Services, BestSellers, NewCollections, Products, Counter, Testimonials, Newsletter, Footer.
- Scenario — All sections are visible:
  - **WHEN** the user opens the template
  - **THEN** the top bar shows phone and email info
  - **AND** the navbar shows brand name and navigation links
  - **AND** the hero section displays a headline and CTA
  - **AND** the services section shows 3 service cards
  - **AND** the best sellers section shows 4 product cards
  - **AND** the new collections section shows 2 collection cards
  - **AND** the products section shows 4 product cards with category filters
  - **AND** the counter section shows 4 stat items
  - **AND** the testimonials section shows a review
  - **AND** the newsletter section shows an email input
  - **AND** the footer shows menu and contact info

### 7. Products
- The products section MUST allow filtering by category tabs (All, Men, Women, Kids).
- Scenario — Category filter works:
  - **WHEN** the user clicks the "Women" category button
  - **THEN** only women's products are displayed

### 8. Counter
- The footer MUST link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Component Dock link present:
  - **WHEN** the footer is visible
  - **THEN** it contains a link to componentdock.com

### 9. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Testimonial · John Doe · Marketing Manager

### 10. Newsletter
- No dedicated spec block — hold this band to the design notes.
- Anchors: Email address · Subscribe to our newsletter · Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. · Subscribe

### 11. Footer
- The footer MUST link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Component Dock link present:
  - **WHEN** the footer is visible
  - **THEN** it contains a link to componentdock.com

### Cross-cutting requirements

- **Navigation works** — The navbar MUST display links for Home, Shop, About, Blog, Contact and a cart icon with badge.
  - Scenario — Nav links are present: **WHEN** the navbar is visible; **THEN** it contains links for Home, Shop, About, Blog, Contact; **AND** a cart icon with item count badge
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/warehaus/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/warehaus/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/warehaus` ships on https://warehaus.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/warehaus/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/warehaus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/warehaus/public/CNAME` = `warehaus.free.componentdock.com`
  and the package `homepage` = `https://warehaus.free.componentdock.com`.
