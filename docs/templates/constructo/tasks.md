# Constructo — Implementation Tasks

Source design: **Topbuilder** (`https://colorlib.com/wp/template/topbuilder/`) → recreation name **constructo**. Shipped at https://constructo.free.componentdock.com.

Scope: Recreate the ColorLib "Topbuilder" construction company landing page as a modern React 19 + Tailwind CSS 4 + TypeScript single-page template named "Constructo". The template provides a full-featured construction company website with hero, features, about, services, team, stats, testimonials, gallery, blog, and footer sections.

## Component breakdown

Render order as composed in `apps/constructo/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Mon - Sat 8:00 - 18:00

### 2. Navbar
- The navbar SHALL display Home, About, Services, Gallery, Blog, and Contact navigation links with a search button.
- Scenario — Navbar renders all navigation items:
  - **GIVEN** the navbar is rendered
  - **THEN** Home, About, Services, Gallery, Blog, Contact links are visible
  - **AND** a search button is present

### 3. Hero
- The hero section SHALL display a welcome heading, main heading, description text, and a "Read More" call-to-action button over a background image.
- Scenario — Hero renders heading and CTA:
  - **GIVEN** the hero section renders
  - **THEN** the heading "Welcome to our" is visible
  - **AND** "Clean, Modern, Multipurpose Theme" is visible
  - **AND** a "Read More" button is displayed

### 4. Features
- The features section SHALL display 4 feature cards with icons, titles, and descriptions.
- Scenario — Features section renders 4 cards:
  - **GIVEN** the features section renders
  - **THEN** 4 feature cards are displayed (Professional Builder, We Deliver Quality, Always On Time, We Are Passionate)

### 5. About
- The about section SHALL display a section title, "Who We Are" heading, descriptive text, and a "Contact Now" button.
- Scenario — About section renders content and CTA:
  - **GIVEN** the about section renders
  - **THEN** "About Us" title is visible
  - **AND** "Who We Are" heading is visible
  - **AND** a "Contact Now" button is present

### 6. WhatWeOffer
- The What We Offer section SHALL display 3 service cards with images, icons, titles, and descriptions.
- Scenario — What We Offer renders 3 cards:
  - **GIVEN** the What We Offer section renders
  - **THEN** Building Construction, Project Planning, and House Renovation cards are visible

### 7. WhyChooseUs
- The Why Choose Us section SHALL display 3 feature items with icons, titles, and descriptions alongside a feature image.
- Scenario — Why Choose Us renders 3 items:
  - **GIVEN** the Why Choose Us section renders
  - **THEN** 30+ Years of Experience, Qualified Experts, and Best Customer Service items are visible

### 8. Gallery
- The gallery section SHALL display 6 project images in a grid with category filter buttons.
- Scenario — Gallery renders and filters work:
  - **GIVEN** the gallery section renders
  - **THEN** 6 project images are displayed
  - **AND** clicking a filter button shows only matching items

### 9. Team
- The team section SHALL display 4 team member cards with photos, names, and roles.
- Scenario — Team renders 4 members:
  - **GIVEN** the team section renders
  - **THEN** 4 team member cards are displayed with names and roles

### 10. Stats
- The stats section SHALL display 4 stat blocks with icons, numbers, and labels on a dark background.
- Scenario — Stats renders 4 counters:
  - **GIVEN** the stats section renders
  - **THEN** 800, 230, 1390, 125 values are displayed with their labels

### 11. Testimonials
- The testimonials section SHALL display testimonial cards with avatars, names, roles, and quote text.
- Scenario — Testimonials renders cards:
  - **GIVEN** the testimonials section renders
  - **THEN** at least 3 testimonial cards are displayed

### 12. Projects
- The projects section SHALL display 8 project images in a grid on a dark background with hover overlays.
- Scenario — Projects renders 8 images:
  - **GIVEN** the projects section renders
  - **THEN** 8 project images are displayed

### 13. Blog
- The blog section SHALL display 3 blog post cards with images, titles, authors, dates, and excerpts.
- Scenario — Blog renders 3 posts:
  - **GIVEN** the blog section renders
  - **THEN** 3 blog post cards are displayed

### 14. Partners
- The partners section SHALL display placeholder partner logos.
- Scenario — Partners renders logos:
  - **GIVEN** the partners section renders
  - **THEN** placeholder partner logos are visible

### 15. CtaBanner
- The CTA banner SHALL display booking text and a "Book Now" button on a yellow background.
- Scenario — CTA renders booking CTA:
  - **GIVEN** the CTA section renders
  - **THEN** a "Book Now" button is visible

### 16. Footer
- The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock" in the copyright area.
- Scenario — Footer has Component Dock link:
  - **GIVEN** the footer renders
  - **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is visible

### Cross-cutting requirements

- **All sections render in correct order** — The template SHALL display 16 sections in the correct order: TopBar, Navbar, Hero, Features, About, WhatWeOffer, WhyChooseUs, Gallery, Team, Stats, Testimonials, Projects, Blog, Partners, CtaBanner, Footer.
  - Scenario — Page loads with all sections: **GIVEN** the page loads; **THEN** all 16 sections are visible in the correct order
- **Footer shows contact info** — The footer SHALL display email, phone, and address contact information.
  - Scenario — Footer renders contact details: **GIVEN** the footer renders; **THEN** email, phone, and address are visible
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/constructo/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/constructo/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/constructo` ships on https://constructo.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/constructo/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/constructo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/constructo/public/CNAME` = `constructo.free.componentdock.com`
  and the package `homepage` = `https://constructo.free.componentdock.com`.
