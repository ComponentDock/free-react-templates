# Crumbs — Implementation Tasks

Source design: **Cakes** (`https://colorlib.com/wp/template/cakes/`) → recreation name **crumbs**. Shipped at https://crumbs.free.componentdock.com.

Scope: A Cake Shop template with hero, popular products, about and services sections. Crumbs is a single-page cake shop landing template — a faithful React recreation of the ColorLib "Cakes" template (preview: https://preview.colorlib.com/theme/cakes/ — cake shop landing page), built under a different name with the monorepo stack: Vite + React 1…

## Component breakdown

Render order as composed in `apps/crumbs/src/App.tsx`:

### 1. Navbar
- The system SHALL render a sticky navigation bar with the site name "Crumbs", desktop navigation links (Home, Product, About, Blog, Contact), a phone number, and an "Order Online" CTA button.
- Scenario — Desktop navigation:
  - **GIVEN** the page is rendered
  - **WHEN** the navbar is displayed
  - **THEN** it SHALL show the site name "Crumbs" as a link to `#home`
  - **AND** it SHALL show links to Home, Product, About, Blog and Contact
  - **AND** it SHALL show a phone number "+10 (56) 745 3095"
  - **AND** it SHALL show an "Order Online" button
- Scenario — Mobile menu toggle:
  - **GIVEN** the page is rendered on a small viewport
  - **WHEN** the hamburger toggle is pressed
  - **THEN** the mobile navigation menu SHALL become visible
  - **AND** the toggle SHALL report `aria-expanded="true"`
  - **AND** pressing the toggle again SHALL hide the menu

### 2. Hero
- The system SHALL render a hero section with a background image, a large decorative "Delicious" watermark, a heading "Delicious Cake For Everyone", a descriptive paragraph, and an "Explore Menu" call-to-action button.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero section is displayed
  - **THEN** it SHALL contain the heading "Delicious Cake For Everyone"
  - **AND** it SHALL contain the decorative "Delicious" watermark text
  - **AND** it SHALL contain an "Explore Menu" button

### 3. PopularProducts
- The system SHALL render a "Most Popular" / "Our Exclusive Cakes" section with three product cards (Chocolate, Sweetheart, Blackforest), each showing an image, a title, a description, and an "Order Now" button with a price.
- Scenario — Product cards:
  - **GIVEN** the page is rendered
  - **WHEN** the popular products section is displayed
  - **THEN** it SHALL show three product cards
  - **AND** each card SHALL have a product image, title, description, and order button
  - **AND** the order buttons SHALL display "$20 | Order Now"
- Scenario — Product card count:
  - **GIVEN** the page is rendered
  - **WHEN** the popular section is counted
  - **THEN** it SHALL contain exactly three product cards

### 4. About
- The system SHALL render an about section with a split layout: a cake image on the left and text content on the right including a "Fresh & Delicious" subtitle, a heading "A Simple Way to Eating Delicious", a paragraph, and an "Our Story" button.
- Scenario — About content:
  - **GIVEN** the page is rendered
  - **WHEN** the about section is displayed
  - **THEN** it SHALL contain the heading "A Simple Way to Eating Delicious"
  - **AND** it SHALL contain an "Our Story" button
  - **AND** it SHALL show a cake image with an accessible label

### 5. Services
- The system SHALL render a services section titled "Quality is Our First Priority" with three feature cards, each having an icon, a title, and a description.
- Scenario — Feature cards:
  - **GIVEN** the page is rendered
  - **WHEN** the services section is displayed
  - **THEN** it SHALL show three feature cards
  - **AND** each card SHALL have an icon, a title, and a description

### 6. Testimonials
- The system SHALL render a testimonials section titled "What Customers Say" with testimonial cards, each containing a quote, a founder image, a name, and a role.
- Scenario — Testimonial content:
  - **GIVEN** the page is rendered
  - **WHEN** the testimonials section is displayed
  - **THEN** it SHALL show at least one testimonial
  - **AND** each testimonial SHALL have a quote, image, name, and role

### 7. InstagramFeed
- No dedicated spec block — hold this band to the design notes.
- Anchors: Follow Us · Instagram Feed

### 8. Footer
- The system SHALL render a footer with a logo area, description text, quick links, product categories, contact information, social links, and a copyright line.
- Scenario — Footer with Component Dock branding:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL contain a link to "https://www.componentdock.com/" branded as "Component Dock"
  - **AND** it SHALL show "Quick Links" and "Cakes" columns
  - **AND** it SHALL show contact information
- Scenario — Footer copyright:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL contain a copyright notice with the current year

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/crumbs/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/crumbs/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/crumbs` ships on https://crumbs.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/crumbs/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/crumbs/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crumbs/public/CNAME` = `crumbs.free.componentdock.com`
  and the package `homepage` = `https://crumbs.free.componentdock.com`.
