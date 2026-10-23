# Vitala — Implementation Tasks

Source design: **Medicare2** (`https://colorlib.com/wp/template/medicare2/`) → recreation name **vitala**. Shipped at https://vitala.free.componentdock.com.

Scope: Vitala is a medical and healthcare landing page template. It recreates the ColorLib "Medicare2" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application with a blue gradient brand palette, Playfair Display headings, and Roboto body text.

## Component breakdown

Render order as composed in `apps/vitala/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Primary · Search · Vitala

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Caring for Your Health with Compassion and Excellence · Learn More

### 3. Features
- No dedicated spec block — hold this band to the design notes.

### 4. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome to Vitala Medical Center · Doctors Time Table

### 5. Departments
- The departments section SHALL display 6 medical department icons with labels.
- Scenario — Department names visible:
  - **GIVEN** I see the departments section
  - **THEN** I should see Cardiology, Urology, Dental Care, Eye Care, Neurology, and Plastic Surgery

### 6. Counters
- The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Component Dock link present:
  - **GIVEN** I see the footer
  - **WHEN** I look at the copyright area
  - **THEN** I should see a link to Component Dock with target="_blank"

### 7. Team
- No dedicated spec block — hold this band to the design notes.
- Anchors: Meet Our Doctors

### 8. BlogAppointment
- The appointment form SHALL accept patient details and allow form submission.
- Scenario — Fill and submit appointment form:
  - **GIVEN** I see the appointment form
  - **WHEN** I fill in the patient name field
  - **AND** I fill in the email field
  - **AND** I submit the form
  - **THEN** the form should remain visible

### 9. Footer
- The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Component Dock link present:
  - **GIVEN** I see the footer
  - **WHEN** I look at the copyright area
  - **THEN** I should see a link to Component Dock with target="_blank"

### Cross-cutting requirements

- **Page loads with all sections** — The page SHALL render all required sections in the correct order: TopBar, Navbar, Hero, Features, About, Departments, Counters, Team, Blog + Appointment, and Footer.
  - Scenario — All sections are visible: **GIVEN** I visit the Vitala page; **THEN** I should see the top bar with phone and email; **AND** I should see the navbar with navigation links; **AND** I should see the hero banner heading; **AND** I should see 3 feature cards; **AND** I should see the about section; **AND** I should see 6 department icons; **AND** I should see 4 counter stats; **AND** I should see 4 team members; **AND** I should see 3 blog posts; **AND** I should see the appointment form; **AND** I should see the footer with Component Dock link
- **Mobile navigation toggle** — The navbar SHALL provide a hamburger menu toggle for mobile viewports that shows/hides the mobile navigation.
  - Scenario — Toggle mobile menu: **GIVEN** I visit the Vitala page on mobile; **WHEN** I click the hamburger menu button; **THEN** the mobile navigation should be visible; **WHEN** I click the close button; **THEN** the mobile navigation should be hidden
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/vitala/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/vitala/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/vitala` ships on https://vitala.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/vitala/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/vitala/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vitala/public/CNAME` = `vitala.free.componentdock.com`
  and the package `homepage` = `https://vitala.free.componentdock.com`.
