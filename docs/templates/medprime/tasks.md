# Medprime — Implementation Tasks

Source design: **Medi 2** (`https://colorlib.com/wp/template/medi-2/`) → recreation name **medprime**. Shipped at https://medprime.free.componentdock.com.

Scope: Medprime is a medical clinic landing page template that recreates the ColorLib "Medi 2" design using React 19, Vite, Tailwind CSS 4, and TypeScript. It provides a professional medical website with sections for services, doctors, appointments, and emergency contact.

## Component breakdown

Render order as composed in `apps/medprime/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky navigation bar with a blue (#1a73e8) background, white logo text, navigation links (Home, About, Blog, Pages, Contact), and a white "Book Appointment" button.
- Scenario — Desktop navigation rendering:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar shows the logo, all five navigation links, and the Book Appointment button
  - **AND** the navbar has a blue background
- Scenario — Mobile navigation toggle:
  - **WHEN** the hamburger menu button is clicked on a mobile viewport
  - **THEN** the mobile navigation menu expands showing all links and the Book Appointment button
  - **AND** clicking a link closes the menu

### 2. Hero
- The template SHALL display a full-width hero section with a dark blue overlay on a medical-themed background image, a subtitle "THE BEST MEDICAL CENTER", a heading "Bringing health to life for the whole family.", and a "Discover More" button with white border.
- Scenario — Hero content rendering:
  - **WHEN** the hero section is visible
  - **THEN** the subtitle, heading, and Discover More button are displayed
  - **AND** the background has a dark blue gradient overlay
- Scenario — Discover More scrolls to about:
  - **WHEN** the user clicks the Discover More button
  - **THEN** the page scrolls smoothly to the about section

### 3. Welcome
- The template SHALL display a two-column welcome section with a doctor image on the left and a "Welcome To Modern Clinic." heading with descriptive text and a "Our Departments" button on the right.
- Scenario — Welcome content rendering:
  - **WHEN** the welcome section is visible
  - **THEN** a doctor image, heading, paragraph, and Our Departments button are displayed

### 4. Departments
- The template SHALL display a 3-column grid of department cards (Cardiology, Neurology, Ophthalmology, Orthopedics, General Medicine, Pediatrics) with icons, titles, and descriptions on a light gray background.
- Scenario — Department cards rendering:
  - **WHEN** the departments section is visible
  - **THEN** six department cards are displayed with icons, titles, and descriptions

### 5. Doctors
- The template SHALL display doctor cards with photos, names, specialties, and social media icon overlays on hover.
- Scenario — Doctor cards rendering:
  - **WHEN** the doctors section is visible
  - **THEN** three doctor cards are shown with name, specialty, and image

### 6. BookAppointment
- The template SHALL display a form with fields for name, email, phone, department select, date, and message, with a submit button.
- Scenario — Form field rendering:
  - **WHEN** the appointment section is visible
  - **THEN** all six form fields and the submit button are displayed
- Scenario — Form interaction:
  - **WHEN** the user types in the name field
  - **THEN** the field value updates to reflect the typed text

### 7. QualityHealth
- The template SHALL display four feature cards (Quality Services, 24/7 Emergency, Expert Doctors, Trusted Care) with icons and descriptions.
- Scenario — Feature cards rendering:
  - **WHEN** the quality health section is visible
  - **THEN** four feature cards are displayed with icons and descriptions

### 8. EmergencyContact
- The template SHALL display a bright blue (#00abe7) emergency contact bar with phone number, location, and working hours.
- Scenario — Emergency contact rendering:
  - **WHEN** the emergency section is visible
  - **THEN** phone number, address, and working hours are displayed

### 9. Footer
- The template SHALL display a dark footer (#152538) with logo, three link columns (Services, Company, Support), copyright notice, and a "Made with Component Dock" link to https://www.componentdock.com/.
- Scenario — Footer content rendering:
  - **WHEN** the footer is visible
  - **THEN** the logo, link columns, copyright, and Component Dock link are displayed
- Scenario — Component Dock link target:
  - **WHEN** the user clicks the Component Dock link
  - **THEN** it opens https://www.componentdock.com/ in a new tab

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/medprime/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/medprime/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/medprime` ships on https://medprime.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/medprime/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/medprime/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/medprime/public/CNAME` = `medprime.free.componentdock.com`
  and the package `homepage` = `https://medprime.free.componentdock.com`.
