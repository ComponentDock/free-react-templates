# Kinectwell — Implementation Tasks

Source design: **Physical Therapy** (`https://colorlib.com/wp/template/physical-therapy/`) → recreation name **kinectwell**. Shipped at https://kinectwell.free.componentdock.com.

Scope: Kinectwell is a professional physical therapy and rehabilitation landing page template. It provides a single-page marketing site for physiotherapy clinics, chiropractors, and massage therapy practices with sections for navigation, hero, about, services, why-choose-us, appointment CTA, testimonials, and footer.

## Component breakdown

Render order as composed in `apps/kinectwell/src/App.tsx`:

### 1. Header
- The template SHALL render a hero section with an eyebrow text, headline, description paragraph, CTA button, and hero image.
- Scenario — Hero content renders correctly:
  - **WHEN** the page loads
  - **THEN** the hero displays the eyebrow "Welcome to Kinectwell"
  - **AND** the headline "We Help People to Recover from Injuries" is shown
  - **AND** the CTA button links to #appointment

### 2. Hero
- The template SHALL render a hero section with an eyebrow text, headline, description paragraph, CTA button, and hero image.
- Scenario — Hero content renders correctly:
  - **WHEN** the page loads
  - **THEN** the hero displays the eyebrow "Welcome to Kinectwell"
  - **AND** the headline "We Help People to Recover from Injuries" is shown
  - **AND** the CTA button links to #appointment

### 3. About
- The template SHALL render an about section with a heading, description, feature checklist, learn-more button, and an image.
- Scenario — About content renders correctly:
  - **WHEN** the page loads
  - **THEN** the heading "About Us" is displayed
  - **AND** three feature items are listed with check icons
  - **AND** the "Learn More" button links to #services

### 4. Services
- The template SHALL render a services section with three service cards (Physical Therapy, Chiropractic Therapy, Massage Therapy), each with an icon, title, and description.
- Scenario — Service cards render correctly:
  - **WHEN** the page loads
  - **THEN** the heading "Our Services" is displayed
  - **AND** three service cards are rendered with titles and descriptions
  - **AND** each card has an icon in a circular background

### 5. WhyChooseUs
- The template SHALL render a why-choose-us section with four feature items (Professional Staff, Certified Equipment, Emergency Services, Opening Hours).
- Scenario — Why Choose Us content renders correctly:
  - **WHEN** the page loads
  - **THEN** the heading "Why Choose Us" is displayed
  - **AND** four feature items are rendered with icons, titles, and descriptions

### 6. AppointmentCTA
- The template SHALL render a full-width green appointment call-to-action section with a headline, description, and button.
- Scenario — Appointment CTA renders correctly:
  - **WHEN** the page loads
  - **THEN** the heading "Book Your Appointment Today" is displayed on a green background
  - **AND** the "Book Appointment" button links to #contact

### 7. Testimonials
- The template SHALL render a testimonials section with three patient testimonial cards, each containing a quote, patient name, role, and avatar image.
- Scenario — Testimonials render correctly:
  - **WHEN** the page loads
  - **THEN** the heading "What Our Patients Say" is displayed
  - **AND** three testimonial cards are rendered with quotes, names, and avatar images

### 8. Footer
- The template SHALL render a footer with the site logo and about blurb, Quick Links navigation, Services navigation, copyright notice, and a link to Component Dock.
- Scenario — Footer content renders correctly:
  - **WHEN** the page loads
  - **THEN** the footer displays the site name "Kinectwell"
  - **AND** Quick Links (About, Services, Appointments, Contact) are listed
  - **AND** Services links (Physical Therapy, Chiropractic, Massage Therapy, Rehabilitation) are listed
  - **AND** the copyright "© 2026 Kinectwell. All rights reserved." is shown
  - **AND** "More templates at Component Dock" links to https://www.componentdock.com/

### Cross-cutting requirements

- **Navigation** — The template SHALL render a sticky header with the site logo, navigation links (Home, About, Services, Pages, Blog, Contact), a phone number link, and an appointment CTA button.
  - Scenario — Desktop navigation renders all links: **WHEN** the page loads on a desktop viewport; **THEN** the header displays the site name "Kinectwell" with a logo badge; **AND** all six navigation links are visible; **AND** the phone number "+1 (555) 123-4567" is displayed; **AND** the "Make an appointment" button links to #appointment
  - Scenario — Mobile menu toggle: **WHEN** the user clicks the hamburger menu button on mobile; **THEN** the mobile navigation panel opens with all nav links; **AND** the button label changes to "Close menu"; **WHEN** the user clicks "Close menu"; **THEN** the mobile navigation panel closes
  - Scenario — Mobile menu closes on link click: **WHEN** the mobile menu is open and the user clicks a navigation link; **THEN** the mobile menu closes
- **Skip Link Accessibility** — The template SHALL include a skip-to-main-content link for keyboard accessibility.
  - Scenario — Skip link is present: **WHEN** the page loads; **THEN** a "Skip to main content" link targeting #main exists in the DOM
- **Document Title** — The template SHALL set the page title on mount.
  - Scenario — Title is set on load: **WHEN** the page loads; **THEN** the document title is "Kinectwell — Physical Therapy Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/kinectwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/kinectwell/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/kinectwell` ships on https://kinectwell.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/kinectwell/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/kinectwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kinectwell/public/CNAME` = `kinectwell.free.componentdock.com`
  and the package `homepage` = `https://kinectwell.free.componentdock.com`.
