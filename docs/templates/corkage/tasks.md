# Corkage — Implementation Tasks

Source design: **Resta** (`https://colorlib.com/wp/template/resta/`) → recreation name **corkage**. Shipped at https://corkage.free.componentdock.com.

Scope: Recreate the ColorLib "Resta" template (https://colorlib.com/wp/template/resta/) as a React 19 + Tailwind CSS 4 + TypeScript single-page restaurant landing template named "Corkage". The design is a warm-toned Indian restaurant site with a hero carousel, about section, tabbed menu, testimonials, reservation form, and footer.

## Component breakdown

Render order as composed in `apps/corkage/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky dark (#222222) navigation bar with brand name "Corkage" and links to Home, Menu, About, Testimonials, and Contact. The navbar SHALL include a "Book a Table" CTA button on the right side. The navbar SHALL include a mobile hamburger menu that toggles open/closed on click.
- Scenario — Desktop navigation:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar shows the brand "Corkage" and all navigation links plus the "Book a Table" button
- Scenario — Mobile navigation:
  - **WHEN** the hamburger menu button is clicked on mobile
  - **THEN** a mobile navigation panel opens with all links
  - **WHEN** a mobile nav link is clicked
  - **THEN** the mobile navigation panel closes

### 2. Hero
- The template SHALL display a full-width hero section with a background image, dark overlay, heading text "Fresh And Delicious Food For Your Health", and an orange (#E8A87C) "View Menus" CTA button linking to the menu section.
- Scenario — Hero content:
  - **WHEN** the page loads
  - **THEN** the hero heading "Fresh And Delicious Food" is visible
  - **AND** a "View Menus" button linking to #menu is present

### 3. About
- The template SHALL display a split-layout about section with a decorative food icon on the left, a heading "Sed ut perspiciatis unde omnis iste natus", descriptive paragraph text, and two stacked food images on the right.
- Scenario — About content:
  - **WHEN** the page loads
  - **THEN** the about heading containing "Sed ut perspiciatis" is visible
  - **AND** descriptive paragraph text is present

### 4. Menu
- The template SHALL display a tabbed menu section with tabs for Starters, Main Course, and Desserts. Each tab SHALL show menu items with name, description, and price.
- Scenario — Default tab:
  - **WHEN** the page loads
  - **THEN** the Starters tab is active and shows starter menu items
- Scenario — Tab switching:
  - **WHEN** the Main Course tab is clicked
  - **THEN** the Main Course menu items are displayed

### 5. Testimonials
- The template SHALL display a testimonials section with customer quotes, names, and roles. The testimonials SHALL be displayed in a carousel with previous/next navigation.
- Scenario — Testimonials display:
  - **WHEN** the page loads
  - **THEN** at least one testimonial with a quote, name, and role is visible
- Scenario — Testimonial navigation:
  - **WHEN** the next button is clicked
  - **THEN** the next testimonial is displayed

### 6. Reservation
- The template SHALL display a "Book a Table" reservation form with fields for Name, Email, Phone, Date, Time, and Number of Guests, plus a "Book Now" submit button.
- Scenario — Form fields:
  - **WHEN** the page loads
  - **THEN** the reservation form has Name, Email, Phone, Date, Time, and Number of Guests fields
  - **AND** a "Book Now" button is present

### 7. Footer
- The template SHALL display a dark-background footer with About Us, Recent Blog, Services links, and Newsletter signup. The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer content:
  - **WHEN** the page loads
  - **THEN** the footer shows About Us, Recent Blog, Services, and Newsletter sections
  - **AND** a "More templates at Component Dock" link pointing to https://www.componentdock.com/ is present
- Scenario — Social links:
  - **WHEN** the page loads
  - **THEN** Twitter, Facebook, and Instagram social media links are present in the footer

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/corkage/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/corkage/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/corkage` ships on https://corkage.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/corkage/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/corkage/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/corkage/public/CNAME` = `corkage.free.componentdock.com`
  and the package `homepage` = `https://corkage.free.componentdock.com`.
