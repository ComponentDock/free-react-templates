# Maxim — Implementation Tasks

Source design: **Neutral** (`https://colorlib.com/wp/template/neutral/`) → recreation name **maxim**. Shipped at https://maxim.free.componentdock.com.

Scope: Recreate the ColorLib Neutral law firm template as "Maxim" — a single-page React website with hero, counter stats, about section, testimonials carousel, vertical-tabbed practice areas, attorney grid, blog cards, contact form, and footer. Built with React 19, Tailwind CSS 4, and TypeScript. Source: https://colorlib.com/wp/template/neutral/

## Component breakdown

Render order as composed in `apps/maxim/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Main navigation · Mobile navigation · Request a Quote

### 2. Hero
- The template SHALL display a full-height hero with background image, dark overlay, headline, subtitle, and CTA button.
- Scenario — Hero renders headline and CTA:
  - **GIVEN** the hero section loads
  - **WHEN** viewed
  - **THEN** it displays "Reputation, Respect, Result" heading with a "Request a Quote" button

### 3. Counter
- The template SHALL display 4 animated stat cards showing firm metrics.
- Scenario — Counter stats render correctly:
  - **GIVEN** the counter section loads
  - **WHEN** viewed
  - **THEN** it shows 4 cards: 50 Years Experience, 10000 Trusted Clients, 564 Qualified Lawyers, 300 Honors & Awards

### 4. About
- The template SHALL display a two-column about layout with image and welcome text.
- Scenario — About section renders:
  - **GIVEN** the about section loads
  - **WHEN** viewed
  - **THEN** it shows a two-column layout with image and "Welcome to Maxim A Law Firm" heading

### 5. Testimonials
- The template SHALL display a carousel of client testimonials with prev/next navigation and dot indicators.
- Scenario — Testimonials carousel navigation:
  - **GIVEN** the testimonials section loads
  - **WHEN** the user clicks next/prev or a dot indicator
  - **THEN** the displayed testimonial changes

### 6. PracticeAreas
- The template SHALL display 10 law practice areas in a vertical tabbed layout.
- Scenario — Tab switching:
  - **GIVEN** the practice areas section loads
  - **WHEN** the user clicks a different tab
  - **THEN** the corresponding content panel is shown
  - **AND** "Family Law" tab is active by default

### 7. Attorneys
- The template SHALL display 4 attorney cards in a grid with photo, name, role, and social links.
- Scenario — Attorneys render:
  - **GIVEN** the attorneys section loads
  - **WHEN** viewed
  - **THEN** it shows 4 attorney cards with social media icons

### 8. Blog
- The template SHALL display 3 blog post cards with image, date, title, and excerpt.
- Scenario — Blog posts render:
  - **GIVEN** the blog section loads
  - **WHEN** viewed
  - **THEN** it shows 3 blog post cards

### 9. Contact
- The template SHALL display a contact form with name, email, subject, message fields and office info sidebar.
- Scenario — Form validation:
  - **GIVEN** the contact form loads
  - **WHEN** the user submits without filling fields
  - **THEN** validation errors appear for all required fields
- Scenario — Successful submission:
  - **GIVEN** valid data is entered
  - **WHEN** the form is submitted
  - **THEN** a success message appears

### 10. Footer
- The template SHALL display a footer with about text, navigation links, social icons, and a copyright bar linking to Component Dock.
- Scenario — Footer links to Component Dock:
  - **GIVEN** the footer loads
  - **WHEN** viewed
  - **THEN** it contains a link to https://www.componentdock.com/

### Cross-cutting requirements

- **Navigation** — The template SHALL display a dark navbar with the brand "Maxim" and navigation links.
  - Scenario — Navbar renders all links: **GIVEN** the page loads; **WHEN** the user views the navbar; **THEN** it shows "Maxim" brand with links: Home, About, Practice Areas, Attorneys, Blog, Contact, and a "Request a Quote" CTA button
  - Scenario — Mobile menu opens and closes: **GIVEN** the navbar is rendered on mobile; **WHEN** the user taps the hamburger button; **THEN** the mobile navigation drawer opens; **WHEN** the user taps a link or Escape; **THEN** the mobile menu closes
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/maxim/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/maxim/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/maxim` ships on https://maxim.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/maxim/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/maxim/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/maxim/public/CNAME` = `maxim.free.componentdock.com`
  and the package `homepage` = `https://maxim.free.componentdock.com`.
