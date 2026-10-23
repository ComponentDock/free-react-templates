# Warmheart — Implementation Tasks

Source design: **Kindity** (`https://colorlib.com/wp/template/kindity/`) → recreation name **warmheart**. Shipped at https://warmheart.free.componentdock.com.

Scope: A Nonprofit Charity template with hero section with stats, welcome section with stats, key features and upcoming events sections. Recreation of ColorLib "Kindity" charity template.

## Component breakdown

Render order as composed in `apps/warmheart/src/App.tsx`:

### 1. Navbar
- The template SHALL render a navigation bar with brand name, seven nav links, and a "Donate Now" button.
- Scenario — Navbar renders brand and links:
  - **WHEN** the page loads
  - **THEN** the brand name "Warmheart" is displayed
  - **AND** seven navigation links are rendered (Home, Gallery, About, Events, Pages, Blog, Contact)
  - **AND** a "Donate Now" button with href="#donate" is rendered
- Scenario — Mobile menu toggle works:
  - **WHEN** the user clicks the hamburger menu button on mobile
  - **THEN** the mobile menu opens showing all nav links
  - **AND** the button aria-label changes to "Close menu"
- Scenario — Mobile menu closes on link click:
  - **WHEN** the mobile menu is open and a nav link is clicked
  - **THEN** the mobile menu closes
  - **AND** the hamburger button shows "Open menu" again

### 2. Hero
- The template SHALL render a hero section with headline, description, CTA buttons, and three stat boxes.
- Scenario — Hero renders headline and CTAs:
  - **WHEN** the page loads
  - **THEN** the headline "Help for Victims Affected by Flood" is displayed
  - **AND** "Donate Now" and "View Activity" buttons are rendered
- Scenario — Hero renders stat boxes:
  - **WHEN** the page loads
  - **THEN** three stat boxes are displayed with labels (Total Donation, Total Volunteers, Future Plans) and values ($2.5M, 3,268, $7.5M)

### 3. Welcome
- The template SHALL render a welcome section with heading and three stat cards.
- Scenario — Welcome section renders:
  - **WHEN** the page loads
  - **THEN** "Welcome to Warmheart" heading is displayed
  - **AND** three stat cards show values $2.5M, 1,465, 3,965

### 4. MajorCauses
- The template SHALL render three cause cards with progress bars and donate buttons.
- Scenario — Causes section renders cards:
  - **WHEN** the page loads
  - **THEN** "Our Major Causes" heading is displayed
  - **AND** three cause cards are rendered (Education for All, Clean Water Initiative, Medical Aid Relief)
  - **AND** each card has a progress bar with correct aria-valuenow
- Scenario — Causes donate buttons:
  - **WHEN** the page loads
  - **THEN** each cause card has a "Donate Here" button with href="#donate"

### 5. KeyFeatures
- The template SHALL render three feature cards with icons and descriptions.
- Scenario — Features section renders:
  - **WHEN** the page loads
  - **THEN** "Our Key Features" heading is displayed
  - **AND** three feature cards are rendered (Sponsorship, Donate Amount, Become a Volunteer)

### 6. UpcomingEvents
- The template SHALL render three event cards with dates and join buttons.
- Scenario — Events section renders:
  - **WHEN** the page loads
  - **THEN** "Upcoming Events" heading is displayed
  - **AND** three event cards are rendered with dates and "Join Now" buttons

### 7. Testimonials
- The template SHALL render three testimonial cards with donor information.
- Scenario — Testimonials section renders:
  - **WHEN** the page loads
  - **THEN** "Testimonial from our Donors" heading is displayed
  - **AND** three testimonial cards are rendered with names and roles

### 8. Footer
- The template SHALL render a footer with about section, navigation links, newsletter, and Component Dock branding.
- Scenario — Footer renders Component Dock link:
  - **WHEN** the page loads
  - **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is rendered with target="_blank"
- Scenario — Footer renders navigation and newsletter:
  - **WHEN** the page loads
  - **THEN** navigation links (Home, About, Services, Portfolio, Team, Blog, Contact) are rendered
  - **AND** a newsletter section with email input is rendered

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/warmheart/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/warmheart/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/warmheart` ships on https://warmheart.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/warmheart/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/warmheart/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/warmheart/public/CNAME` = `warmheart.free.componentdock.com`
  and the package `homepage` = `https://warmheart.free.componentdock.com`.
