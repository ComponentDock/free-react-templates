# Learnhub — Implementation Tasks

Source design: **Etrain** (`https://colorlib.com/wp/template/etrain/`) → recreation name **learnhub**. Shipped at https://learnhub.free.componentdock.com.

Scope: Provide a free React template for online education platforms, featuring course listings, testimonials, stats, and a blog section. Recreates the ColorLib Etrain design with navy + coral-gold accent palette, Poppins/Roboto typography, and responsive mobile-first layout.

## Component breakdown

Render order as composed in `apps/learnhub/src/App.tsx`:

### 1. Navbar
- The template SHALL render a sticky top navbar with brand logo, navigation links (Home, About, Courses, Blog, Contact), a Login CTA button, and a responsive hamburger menu for mobile.
- Scenario — Desktop navbar renders all links:
  - **WHEN** the page loads on desktop
  - **THEN** the navbar shows "Learnhub" brand, all 5 nav links, and a Login button
- Scenario — Mobile menu toggles open and closed:
  - **WHEN** the user taps the hamburger icon on mobile
  - **THEN** the mobile menu opens showing all nav links and a Login button
  - **AND** tapping the close icon hides the menu
- Scenario — Mobile menu closes on link click:
  - **WHEN** the mobile menu is open and the user taps a nav link
  - **THEN** the mobile menu closes

### 2. Hero
- The template SHALL render a hero section with a gradient navy background, learner count badge, headline, description, and two call-to-action buttons.
- Scenario — Hero renders headline and CTAs:
  - **WHEN** the page loads
  - **THEN** the hero shows "Advance Your Career with Expert-Led Courses" heading
  - **AND** shows "Browse Courses" and "Start Free Trial" buttons

### 3. Features
- The template SHALL render a "Why Learnhub?" section with three feature cards (Flexible Learning, Expert Instructors, Career Support).
- Scenario — Features render all cards:
  - **WHEN** the page loads
  - **THEN** three feature cards are visible with titles and descriptions

### 4. About
- The template SHALL render a split-layout about section with an image and descriptive text with bullet points.
- Scenario — About renders content:
  - **WHEN** the page loads
  - **THEN** the about section shows "Learn Skills That Matter for Your Career" heading
  - **AND** shows two bullet points and a Read More link

### 5. Stats
- The template SHALL render a gradient stats bar with four statistics.
- Scenario — Stats render all values:
  - **WHEN** the page loads
  - **THEN** four stats are visible: 250 Courses, 15,000 Students, 92% Career Advancement, 45 Countries

### 6. Courses
- The template SHALL render a "Featured Courses" section with three course cards showing images, categories, prices, titles, descriptions, duration, enrollment counts, instructor info, and star ratings.
- Scenario — Courses render all cards:
  - **WHEN** the page loads
  - **THEN** three course cards are visible with titles, prices, and instructor names

### 7. Platform
- The template SHALL render a split-layout platform section highlighting advanced learning features.
- Scenario — Platform renders features:
  - **WHEN** the page loads
  - **THEN** the platform section shows "Learn Anywhere" and "Verified Certificates" features

### 8. Testimonials
- The template SHALL render a testimonials section with three student success story cards.
- Scenario — Testimonials render all cards:
  - **WHEN** the page loads
  - **THEN** three testimonial cards are visible with names, roles, and quotes

### 9. Blog
- The template SHALL render a blog section with three blog post cards.
- Scenario — Blog renders all cards:
  - **WHEN** the page loads
  - **THEN** three blog cards are visible with categories, titles, and engagement counts

### 10. Footer
- The template SHALL render a footer with brand info, newsletter form, contact details, social links, and a "Component Dock" attribution linking to componentdock.com.
- Scenario — Footer renders all sections:
  - **WHEN** the page loads
  - **THEN** the footer shows brand description, newsletter form, contact info, and social links
  - **AND** a "Component Dock" link pointing to https://www.componentdock.com/
- Scenario — Newsletter form handles submit:
  - **WHEN** the user types an email and clicks Subscribe
  - **THEN** the form does not navigate (preventDefault)

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/learnhub/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/learnhub/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/learnhub` ships on https://learnhub.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/learnhub/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/learnhub/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/learnhub/public/CNAME` = `learnhub.free.componentdock.com`
  and the package `homepage` = `https://learnhub.free.componentdock.com`.
