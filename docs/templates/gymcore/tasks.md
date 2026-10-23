# Gymcore — Implementation Tasks

Source design: **Gutim** (`https://colorlib.com/wp/template/gutim/`) → recreation name **gymcore**. Shipped at https://gymcore.free.componentdock.com.

Scope: A Fitness / Gym template with hero, services, classes, team, banner and register form collects user sections. Recreation of ColorLib **Gutim** — a fitness/gym HTML template.

## Component breakdown

Render order as composed in `apps/gymcore/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display a logo, navigation links, and a "Sign Up Today" CTA button.
- Scenario — Desktop navigation:
  - **GIVEN** the page is loaded on a desktop viewport
  - **THEN** I see a "Gymcore" logo link
  - **AND** I see navigation links for "Home", "About", "Classes", "Blog", "Gallery", "Contacts"
  - **AND** I see a "Sign Up Today" button
- Scenario — Mobile menu toggle:
  - **GIVEN** the page is loaded on a mobile viewport
  - **WHEN** I click the hamburger menu button
  - **THEN** the mobile navigation menu opens
  - **AND** I see all navigation links

### 2. Hero
- The hero section SHALL display a background image, tagline, heading, description, and CTA button.
- Scenario — Hero content:
  - **GIVEN** the page is loaded
  - **THEN** I see "Fitness Elements" tag text
  - **AND** I see "BMI Calculator" heading
  - **AND** I see a "Read More" button

### 3. About
- The about section SHALL display an image with play button and descriptive text.
- Scenario — About content:
  - **GIVEN** the page is loaded
  - **THEN** I see "Story About Us" heading
  - **AND** I see a play video button
  - **AND** I see a "Read More" button

### 4. Services
- The services section SHALL display a 2x2 grid of service cards.
- Scenario — Service items:
  - **GIVEN** the page is loaded
  - **THEN** I see service items for "Strategies", "Yoga", "Workout", "Weight Loss"

### 5. Classes
- The classes section SHALL display a grid of class cards with background images.
- Scenario — Class cards:
  - **GIVEN** the page is loaded
  - **THEN** I see "Unlimited Classes" heading
  - **AND** I see class cards for "Yoga", "Running", "Personal Training", "Karate", "Dance", "Boxing"

### 6. Team
- The team section SHALL display trainer cards with photos and names.
- Scenario — Trainer cards:
  - **GIVEN** the page is loaded
  - **THEN** I see "Expert Trainers" heading
  - **AND** I see trainer names

### 7. Testimonials
- The testimonials section SHALL display testimonial cards with quotes and star ratings.
- Scenario — Testimonial content:
  - **GIVEN** the page is loaded
  - **THEN** I see "What Our Members Say" heading
  - **AND** I see testimonial cards with names and quotes

### 8. Banner
- The banner section SHALL display a contact phone number and CTA button.
- Scenario — Banner content:
  - **GIVEN** the page is loaded
  - **THEN** I see "Contact Us" text
  - **AND** I see the phone number "09 746 204"

### 9. Membership
- The membership section SHALL display three pricing tier cards.
- Scenario — Pricing cards:
  - **GIVEN** the page is loaded
  - **THEN** I see "Membership Plans" heading
  - **AND** I see pricing cards for "Basic" at $17, "Standard" at $57, "Premium" at $98
  - **AND** each card has a "Start Now" button

### 10. Register
- The register section SHALL display a form with input fields and submit button.
- Scenario — Form fields:
  - **GIVEN** the page is loaded
  - **THEN** I see "Register Now" heading
  - **AND** I see input fields for "First Name", "Email Address", "Last Name", "Mobile No*"
  - **AND** I see a "Get Started" submit button

### 11. Blog
- The blog section SHALL display three blog post cards.
- Scenario — Blog cards:
  - **GIVEN** the page is loaded
  - **THEN** I see "Latest Blog" heading
  - **AND** I see 3 blog cards with dates and titles

### 12. FooterBanner
- The footer SHALL display contact information, newsletter form, and a Component Dock link.
- Scenario — Footer content:
  - **GIVEN** the page is loaded
  - **THEN** I see phone, address, and email contact info
  - **AND** I see a newsletter subscribe form
  - **AND** I see a link to "Component Dock" pointing to https://www.componentdock.com/

### 13. Footer
- The footer SHALL display contact information, newsletter form, and a Component Dock link.
- Scenario — Footer content:
  - **GIVEN** the page is loaded
  - **THEN** I see phone, address, and email contact info
  - **AND** I see a newsletter subscribe form
  - **AND** I see a link to "Component Dock" pointing to https://www.componentdock.com/

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/gymcore/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/gymcore/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/gymcore` ships on https://gymcore.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/gymcore/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/gymcore/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gymcore/public/CNAME` = `gymcore.free.componentdock.com`
  and the package `homepage` = `https://gymcore.free.componentdock.com`.
