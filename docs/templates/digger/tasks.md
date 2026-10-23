# Digger — Implementation Tasks

Source design: **Unearth** (`https://colorlib.com/wp/template/unearth/`) → recreation name **digger**. Shipped at https://digger.free.componentdock.com.

Scope: Digger is a construction and mining landing page template recreated from the ColorLib Unearth design.

## Component breakdown

Render order as composed in `apps/digger/src/App.tsx`:

### 1. TopBar
- The template SHALL display a gradient top bar with email and phone contact information on the left and social media links on the right.
- Scenario — Renders contact details:
  - **WHEN** the page loads
  - **THEN** the email "info@digger.com" is visible
  - **AND** the phone number "+1 234 567 890" is visible
  - **AND** Twitter and Instagram social icons are present

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle menu · Digger

### 3. Hero
- The template SHALL display a full-width hero section with a background image, heading text, subtitle, and a call-to-action button.
- Scenario — Renders hero content:
  - **WHEN** the page loads
  - **THEN** the heading "Welcome to Digger" is visible
  - **AND** a "Get in touch" CTA button is present

### 4. Services
- The template SHALL display two service blocks with alternating image-text layouts.
- Scenario — Renders service blocks:
  - **WHEN** the page loads
  - **THEN** "Land & Property" and "Surface Mining" sections are visible
  - **AND** each section has a checkmark list

### 5. Features
- The template SHALL display six feature cards with icons on a light background.
- Scenario — Renders all features:
  - **WHEN** the page loads
  - **THEN** six feature cards are visible with titles: Safety First, Land Development, Resource Extraction, Earth Moving, Construction, Mining Solutions

### 6. About
- The template SHALL display an about section on a dark background with a video placeholder and four counter stats.
- Scenario — Renders about content:
  - **WHEN** the page loads
  - **THEN** the "About Digger" heading is visible
  - **AND** stats for Years Experience, Engineers, Employees, and Projects Done are displayed

### 7. Team
- The template SHALL display three team member cards with photos, names, and roles.
- Scenario — Renders team members:
  - **WHEN** the page loads
  - **THEN** team members Jean Smith, Bob Carry, and Ricky Fisher are visible with their roles

### 8. Pricing
- The template SHALL display three pricing tiers with prices and feature lists.
- Scenario — Renders pricing tiers:
  - **WHEN** the page loads
  - **THEN** Basic ($47), Premium ($200), and Professional ($750) tiers are visible
  - **AND** each tier has a "Buy Now" button

### 9. FAQ
- The template SHALL display an FAQ section with 8 questions in a 2-column layout with toggle functionality.
- Scenario — Renders FAQ items:
  - **WHEN** the page loads
  - **THEN** all 8 FAQ questions are visible in a 2-column grid
- Scenario — Toggle FAQ answer:
  - **WHEN** the user clicks an FAQ question
  - **THEN** the answer becomes visible
  - **AND** the ChevronUp icon replaces the ChevronDown icon

### 10. Press
- The template SHALL display three press/news entries with dates and descriptions.
- Scenario — Renders press articles:
  - **WHEN** the page loads
  - **THEN** three press articles with dates and titles are visible

### 11. Testimonials
- The template SHALL display testimonial quotes with client names and photos.
- Scenario — Renders testimonials:
  - **WHEN** the page loads
  - **THEN** testimonial quotes from Michael Torres, Lisa Chen, and Robert Johnson are visible

### 12. Blog
- The template SHALL display two blog post cards with images, titles, dates, and excerpts.
- Scenario — Renders blog posts:
  - **WHEN** the page loads
  - **THEN** two blog posts with "Read More" links are visible

### 13. Contact
- The template SHALL display a gradient top bar with email and phone contact information on the left and social media links on the right.
- Scenario — Renders contact details:
  - **WHEN** the page loads
  - **THEN** the email "info@digger.com" is visible
  - **AND** the phone number "+1 234 567 890" is visible
  - **AND** Twitter and Instagram social icons are present

### 14. Footer
- The template SHALL display a dark footer with about text, feature links, newsletter form, social icons, and a copyright line linking to Component Dock.
- Scenario — Renders footer content:
  - **WHEN** the page loads
  - **THEN** the "Made with Component Dock" link is present with href "https://www.componentdock.com/"
  - **AND** a newsletter email input and "Subscribe" button are visible

### Cross-cutting requirements

- **Sticky navigation with logo** — The template SHALL display a sticky navigation bar with the "Digger" brand name and navigation links to all sections.
  - Scenario — Renders navigation links: **WHEN** the page loads; **THEN** the "Digger" logo text is visible; **AND** links for Home, Services, About, Press, Testimonials, Blog, and Contact are present
  - Scenario — Mobile menu toggle: **WHEN** the user clicks the mobile menu toggle button; **THEN** the mobile navigation menu opens with all navigation links
- **Contact form** — The template SHALL display a contact form with name, email, message fields and a submit button, plus an info section with a "Get Started" CTA.
  - Scenario — Renders contact form: **WHEN** the page loads; **THEN** First Name, Last Name, Email, and Your Message inputs are visible; **AND** a "Send Message" submit button is present; **AND** a "Get Started" CTA button is present
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/digger/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/digger/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/digger` ships on https://digger.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/digger/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/digger/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/digger/public/CNAME` = `digger.free.componentdock.com`
  and the package `homepage` = `https://digger.free.componentdock.com`.
