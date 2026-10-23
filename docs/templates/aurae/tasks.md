# Aurae — Implementation Tasks

Source design: **Ahana** (`https://colorlib.com/wp/template/ahana/`) → recreation name **aurae**. Shipped at https://aurae.free.componentdock.com.

Scope: Aurae is a single-page yoga/wellness landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Ahana" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/aurae/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display the Aurae logo, desktop navigation links (Home, About, Classes, Trainers, Events, Pricing, Contact), a "Join Now" CTA button, and a mobile hamburger menu.
- Scenario — Desktop navigation renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar shows the Aurae logo and all 7 navigation links
- Scenario — Mobile menu toggles on hamburger click:
  - **WHEN** the user clicks the hamburger menu button on mobile
  - **THEN** the mobile navigation menu opens with all links
- Scenario — Mobile menu closes on link click:
  - **WHEN** the mobile menu is open and a link is clicked
  - **THEN** the mobile menu closes
- Scenario — Mobile menu closes on resize to desktop:
  - **WHEN** the mobile menu is open and the window resizes to 1024px or wider
  - **THEN** the mobile menu closes

### 2. Hero
- The hero section SHALL display a yoga headline, descriptive subtext, and CTA buttons with a background image.
- Scenario — Hero renders headline and CTAs:
  - **WHEN** the page loads
  - **THEN** the hero shows "Get slim and toned with yoga" heading, descriptive text, and "Explore Classes" / "Learn More" buttons

### 3. About
- The about section SHALL display "Welcome to Aurae" heading and 3 feature cards (Full Rejuvenation, Extension of Spring, Against Aging).
- Scenario — About section renders all features:
  - **WHEN** the page loads
  - **THEN** the about section shows the welcome heading and all 3 feature cards with explore-more links

### 4. Classes
- The classes section SHALL display 3 class cards (Artistic Yoga, Traditional Hatha, Yoga Therapy) with trainer names and book-now links.
- Scenario — Classes section renders all cards:
  - **WHEN** the page loads
  - **THEN** all 3 class cards are shown with trainer names and book-now links

### 5. Trainers
- The trainers section SHALL display 3 trainer profiles with name, role, certificate, and contact links.
- Scenario — Trainers section renders all profiles:
  - **WHEN** the page loads
  - **THEN** all 3 trainer profiles are shown with contact links

### 6. Testimonials
- The testimonials section SHALL display a review with quote, author, role, star rating, and navigation buttons.
- Scenario — Testimonial navigation works:
  - **WHEN** the user clicks next/prev buttons
  - **THEN** the displayed testimonial changes accordingly

### 7. Events
- The events section SHALL display 3 upcoming event cards with title, date, and participant count.
- Scenario — Events section renders all cards:
  - **WHEN** the page loads
  - **THEN** all 3 event cards are shown

### 8. Pricing
- The pricing section SHALL display 4 tiers (Beginner $59, Intermediate $99, Advanced $159, Professional $199) with features and get-started buttons.
- Scenario — Pricing section renders all tiers:
  - **WHEN** the page loads
  - **THEN** all 4 pricing tiers are shown with prices and feature lists

### 9. Signup
- The signup section SHALL display a CTA heading, email input, and submit button with validation.
- Scenario — Valid email shows success:
  - **WHEN** a valid email is entered and submitted
  - **THEN** a success message is shown
- Scenario — Invalid email shows error:
  - **WHEN** an invalid email is entered and submitted
  - **THEN** an error message is shown

### 10. Footer
- The footer SHALL display company info, quick links, about links, open time, contact info, and a link to Component Dock.
- Scenario — Footer renders all sections:
  - **WHEN** the page loads
  - **THEN** the footer shows all sections including a link to https://www.componentdock.com/

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/aurae/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/aurae/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/aurae` ships on https://aurae.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/aurae/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/aurae/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/aurae/public/CNAME` = `aurae.free.componentdock.com`
  and the package `homepage` = `https://aurae.free.componentdock.com`.
