# Healix — Implementation Tasks

Source design: **Medex** (`https://colorlib.com/wp/template/medex/`) → recreation name **healix**. Shipped at https://healix.free.componentdock.com.

Scope: A medical template with topbar with contact, statistics counter, about section with features, doctor profiles, blog and app sections. Build a medical and healthcare website template that faithfully recreates the ColorLib Medex design as a React 19 + Tailwind CSS 4 + TypeScript application under the name "Healix".

## Component breakdown

Render order as composed in `apps/healix/src/App.tsx`:

### 1. TopBar
- The template SHALL display a top bar with phone number, email address, and physical address.
- Scenario — Renders contact details:
  - **WHEN** the page loads
  - **THEN** the phone number "+1 234 567 8900" is visible
  - **AND** the email "info@healix.com" is visible
  - **AND** the address "123 Medical Center Dr" is visible

### 2. Navbar
- The template SHALL display a dark navigation bar with logo, navigation links, and an emergency phone CTA.
- Scenario — Renders all navigation links:
  - **WHEN** the page loads
  - **THEN** the logo "Healix" is displayed
  - **AND** navigation links for Home, About, Services, Doctors, Departments, Blog, Contact are visible
- Scenario — Mobile menu toggle:
  - **WHEN** the hamburger button is clicked on mobile
  - **THEN** the mobile menu expands showing all navigation links

### 3. HeroBanner
- The template SHALL display a full-height hero section with headline and appointment search form.
- Scenario — Renders hero content:
  - **WHEN** the page loads
  - **THEN** the headline "The Most Valuable Thing is Your Health" is displayed
  - **AND** a doctor selection dropdown is present
  - **AND** a department selection dropdown is present
  - **AND** a search button is visible

### 4. AppointmentSection
- The template SHALL display a welcome section with an appointment booking form.
- Scenario — Renders appointment form:
  - **WHEN** the page loads
  - **THEN** the heading "Welcome to Healix" is displayed
  - **AND** form fields for name, email, department, and preferred time are present
  - **AND** a submit button "Request Appointment" is visible

### 5. StatsCounter
- The template SHALL display key statistics with animated counters.
- Scenario — Renders all statistics:
  - **WHEN** the page loads
  - **THEN** the stat "18+ Years of Experience" is displayed
  - **AND** "450+ Happy Patients" is displayed
  - **AND** "15+ Qualified Doctors" is displayed
  - **AND** "45+ Awards Won" is displayed

### 6. AboutSection
- The template SHALL display an about section with clinic description and feature highlights.
- Scenario — Renders about content:
  - **WHEN** the page loads
  - **THEN** the heading "Your Health is Our Priority" is displayed
  - **AND** feature items including "Qualified Doctors" and "Emergency Services" are visible

### 7. Departments
- The template SHALL display department cards with background images.
- Scenario — Renders all departments:
  - **WHEN** the page loads
  - **THEN** 7 department cards are displayed (Neurology, Ophthalmology, Nuclear Magnetic, X-Ray, Surgical, Cardiology, Dental)

### 8. Doctors
- The template SHALL display doctor profiles with names and specialties.
- Scenario — Renders doctor information:
  - **WHEN** the page loads
  - **THEN** "Dr. Alicia Henderson" with specialty "Cardiologist" is displayed
  - **AND** "Dr. James Wilson" with specialty "Neurologist" is displayed
  - **AND** "Dr. Sarah Mitchell" with specialty "Ophthalmologist" is displayed

### 9. BlogSection
- The template SHALL display latest blog posts with titles, excerpts, dates, and read more links.
- Scenario — Renders blog posts:
  - **WHEN** the page loads
  - **THEN** 3 blog post cards are displayed with titles and read more links

### 10. Testimonials
- The template SHALL display patient testimonials with names and quotes.
- Scenario — Renders testimonial content:
  - **WHEN** the page loads
  - **THEN** patient names "Jessica Torres" and "Rebecca Gray" are displayed with quotes

### 11. Footer
- The template SHALL display a footer with contact info, department links, and Component Dock attribution.
- Scenario — Renders footer content:
  - **WHEN** the page loads
  - **THEN** the footer contains the "Healix" brand name
  - **AND** contact information is displayed
  - **AND** a link to "https://www.componentdock.com/" with text "Component Dock" is present

### Cross-cutting requirements

- **App renders all sections** — The template App component SHALL compose all sections in the correct order.
  - Scenario — Renders without crashing: **WHEN** the App component mounts; **THEN** all sections render in order: TopBar, Navbar, HeroBanner, AppointmentSection, StatsCounter, AboutSection, Departments, Doctors, BlogSection, Testimonials, Footer
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/healix/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/healix/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/healix` ships on https://healix.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/healix/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/healix/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/healix/public/CNAME` = `healix.free.componentdock.com`
  and the package `homepage` = `https://healix.free.componentdock.com`.
