# Ironpeak — Implementation Tasks

Source design: **Fitnezz** (`https://colorlib.com/wp/template/fitnezz/`) → recreation name **ironpeak**. Shipped at https://ironpeak.free.componentdock.com.

Scope: Ironpeak is a fitness and gym landing page with featured classes, a schedule grid, trainer profiles, testimonials and blog cards. It recreates the ColorLib **Fitnezz** design (https://colorlib.com/wp/template/fitnezz/).

## Component breakdown

Render order as composed in `apps/ironpeak/src/App.tsx`:

### 1. Header
- The navbar SHALL display the brand name "Ironpeak" with golden accent, navigation links (Home, About, Classes, Schedule, Trainers, Contact), and a "Become a Member" CTA button. The navbar SHALL be dark-backgrounded and sticky. On mobile, a hamburger menu SHALL toggle the nav links.
- Scenario — Desktop navbar renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the brand "Ironpeak" link, all six nav links, and the "Become a Member" button are visible
- Scenario — Mobile menu opens and closes:
  - **WHEN** the user clicks the "Open menu" button
  - **THEN** a mobile nav overlay appears with all links and a "Become a Member" CTA
- Scenario — Escape key closes mobile menu:
  - **WHEN** the mobile menu is open and the user presses Escape
  - **THEN** the mobile menu closes

### 2. Hero
- The hero SHALL show a full-width background image with dark overlay, the heading "Health is wealth", a description paragraph, and two CTAs ("Get Started" linking to classes, "Download").
- Scenario — Hero renders heading and buttons:
  - **WHEN** the page loads
  - **THEN** the h1 heading "Health is wealth" and both CTA links are visible

### 3. FeaturedClasses
- The featured classes section SHALL display four class cards in a grid, each with an image, price ($30.99), and class name. The section heading SHALL read "Featured Classes" with decorative background text "The Classes".
- Scenario — All four classes are displayed:
  - **WHEN** the user scrolls to the classes section
  - **THEN** four class cards are visible with prices and names

### 4. Schedule
- The schedule section SHALL display four schedule items in a 2-column grid, each with an image, class name, description, time, date, and "Join from $15" button.
- Scenario — Schedule items render with times:
  - **WHEN** the user views the schedule section
  - **THEN** all four items show their class name, time, date, and join button

### 5. Trainers
- The trainers section SHALL display three trainer cards in a grid, each with a round portrait image, name, and role "Gym Trainer".
- Scenario — All trainers are displayed:
  - **WHEN** the user scrolls to the trainers section
  - **THEN** three trainer profiles are visible with names and roles

### 6. Testimonials
- The testimonials section SHALL display three testimonial cards, each with a quote, author photo, author name, and author role.
- Scenario — Testimonials render with author info:
  - **WHEN** the user views the testimonials section
  - **THEN** three testimonial quotes are visible with author names

### 7. Blog
- The blog section SHALL display two blog post cards, each with an image, title, date, description, and "Read More" button.
- Scenario — Blog posts render:
  - **WHEN** the user scrolls to the blog section
  - **THEN** two blog cards are visible with titles, dates, and "Read More" buttons

### 8. Footer
- The footer SHALL display About Us, Contact Info, Quick Links, and Newsletter sections on a dark background. The footer copyright line SHALL include "More templates at Component Dock" linking to https://www.componentdock.com/.
- Scenario — Footer renders all columns:
  - **WHEN** the user scrolls to the footer
  - **THEN** the footer shows About Us, Contact Info, Quick Links, Newsletter, and a Component Dock link
- Scenario — Newsletter subscription works:
  - **WHEN** the user enters an email and clicks "Subscribe"
  - **THEN** a confirmation message "Thanks for subscribing!" is displayed

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/ironpeak/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/ironpeak/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/ironpeak` ships on https://ironpeak.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/ironpeak/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/ironpeak/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ironpeak/public/CNAME` = `ironpeak.free.componentdock.com`
  and the package `homepage` = `https://ironpeak.free.componentdock.com`.
