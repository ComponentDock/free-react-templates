# Healnova — Implementation Tasks

Source design: **Medically** (`https://colorlib.com/wp/template/medically/`) → recreation name **healnova**. Shipped at https://healnova.free.componentdock.com.

Scope: Healnova is a single-page medical/hospital landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Medically" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/healnova/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "Healnova", links for Home, Services, About, Team, Testimonials, and Contact, and a dark-mode toggle button.
- Scenario — Navbar content:
  - **GIVEN** the Healnova page is rendered
  - **THEN** the banner landmark contains a link with text "Healnova"
  - **THEN** the navigation contains links for Home, Services, About, Team,
  - **THEN** a "Get Appointment" link is visible
  - **THEN** a dark-mode toggle button is present
- Scenario — Mobile menu toggle:
  - **GIVEN** the Healnova page is rendered
  - **WHEN** the user clicks the "Open menu" button
  - **THEN** a mobile navigation appears with the same links
  - **WHEN** the user clicks a link in the mobile navigation
  - **THEN** the mobile navigation closes
- Scenario — Dark mode toggle:
  - **GIVEN** the Healnova page is rendered
  - **WHEN** the user clicks the dark-mode toggle button
  - **THEN** the document root gains the "dark" class
  - **WHEN** the user clicks the dark-mode toggle button again
  - **THEN** the document root loses the "dark" class

### 2. Hero
- The system SHALL render a hero section with the headline "We Provide High Solutions for Your Health", a "Get started" CTA button, and a background image.
- Scenario — Hero content:
  - **GIVEN** the Healnova page is rendered
  - **THEN** the main landmark contains a heading "We Provide High Solutions for Your Health"
  - **THEN** a "Get started" link is visible

### 3. QuickContact
- The system SHALL render a quick-contact bar with phone, email, and address.
- Scenario — Quick contact content:
  - **GIVEN** the Healnova page is rendered
  - **THEN** "Give us a call" and a phone number are visible
  - **THEN** "Send us a message" and an email are visible
  - **THEN** "Visit us" and an address are visible

### 4. About
- The system SHALL render an about section with the heading "We Are Happy To Serve You!", a description, and "Contact Us" and "Read More" buttons.
- Scenario — About content:
  - **GIVEN** the Healnova page is rendered
  - **THEN** "We Are Happy To Serve You!" heading is visible
  - **THEN** "Contact Us" and "Read More" buttons are visible

### 5. Mission
- The system SHALL render a mission section with a heading and video play button.
- Scenario — Mission content:
  - **GIVEN** the Healnova page is rendered
  - **THEN** "Our Mission" subheading is visible
  - **THEN** a play button is visible

### 6. Services
- The system SHALL render a services section with 6 service cards.
- Scenario — Services content:
  - **GIVEN** the Healnova page is rendered
  - **THEN** "Health Services We Provided" heading is visible
  - **THEN** service cards for General Surgery, Outpatient Services,

### 7. Team
- The system SHALL render a team section with 3 doctor cards.
- Scenario — Team content:
  - **GIVEN** the Healnova page is rendered
  - **THEN** "Our Dedicated Doctors" heading is visible
  - **THEN** doctor cards for Dr. Jade Guzman, Dr. Hannah Ford,

### 8. Testimonials
- The system SHALL render a testimonials section with patient quotes.
- Scenario — Testimonials content:
  - **GIVEN** the Healnova page is rendered
  - **THEN** "Happy Patients" heading is visible
  - **THEN** testimonial cards with quotes are visible

### 9. Blog
- The system SHALL render a blog section with post cards.
- Scenario — Blog content:
  - **GIVEN** the Healnova page is rendered
  - **THEN** "News & Updates" heading is visible
  - **THEN** blog post cards are visible

### 10. Footer
- The system SHALL render a blue footer with departments, services, navigation, social links, and a newsletter subscription form.
- Scenario — Footer content:
  - **GIVEN** the Healnova page is rendered
  - **THEN** the contentinfo landmark contains departments, services, and
  - **THEN** social media links are present
  - **THEN** a newsletter form with email input and subscribe button is present
- Scenario — Newsletter form validation:
  - **GIVEN** the footer newsletter form is displayed
  - **WHEN** the user submits with an invalid email
  - **THEN** an error message is shown
  - **WHEN** the user submits with a valid email
  - **THEN** a success message is shown
- Scenario — Component Dock link:
  - **GIVEN** the footer is rendered
  - **THEN** a link to componentdock.com is present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/healnova/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/healnova/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/healnova` ships on https://healnova.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/healnova/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/healnova/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/healnova/public/CNAME` = `healnova.free.componentdock.com`
  and the package `homepage` = `https://healnova.free.componentdock.com`.
