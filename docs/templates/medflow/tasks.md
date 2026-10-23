# Medflow — Implementation Tasks

Source design: **Medi** (`https://colorlib.com/wp/template/medi/`) → recreation name **medflow**. Shipped at https://medflow.free.componentdock.com.

Scope: Medflow is a medical clinic landing page template featuring a hero banner with blue gradient overlay, welcome section with checklist, tabbed department showcase, doctor profiles, appointment booking form, quality health features, emergency contact banner, and a dark footer with department listings and hours.

## Component breakdown

Render order as composed in `apps/medflow/src/App.tsx`:

### 1. Navbar
- Users SHALL see a sticky navbar with logo, navigation links (Home, About, Departments, Doctors, Contact), and a "Book Appointment" button.
- Scenario — Desktop navbar shows all links:
  - **WHEN** the user views the page on a desktop viewport
  - **THEN** the navbar shows the logo, 5 navigation links, and a "Book Appointment" button
- Scenario — Mobile hamburger toggles menu:
  - **WHEN** the user clicks the hamburger icon on mobile
  - **THEN** a mobile navigation menu opens with links and a "Book Appointment" button
  - **AND** clicking a link closes the menu

### 2. Hero
- Users SHALL see a full-width hero with blue gradient overlay, tagline "the best medical center", and headline "Bringing health to life for the whole family."
- Scenario — Hero renders headline and CTA:
  - **WHEN** the user views the hero section
  - **THEN** the headline "Bringing health to life for the whole family." is displayed
  - **AND** a "Discover More" button is visible

### 3. Welcome
- Users SHALL see a 2-column layout with an image on the left and "Welcome To Modern Clinic." text with checklist items on the right.
- Scenario — Welcome shows checklist and about button:
  - **WHEN** the user scrolls to the Welcome section
  - **THEN** 3 checklist items with check icons are displayed
  - **AND** an "About Us" button is visible

### 4. Departments
- Users SHALL see 6 department tabs (Dentistry, Cardiology, ENT Specialists, Neurology, Blood Screening, More) that switch content on click.
- Scenario — Default tab shows Dentistry:
  - **WHEN** the user views the Departments section
  - **THEN** the Dentistry tab is active by default
  - **AND** the Dentistry content with image and description is shown
- Scenario — Clicking a tab switches content:
  - **WHEN** the user clicks the Cardiology tab
  - **THEN** the Cardiology content is displayed
  - **AND** the Dentistry content is hidden

### 5. Doctors
- Users SHALL see 3 doctor cards in a row with photo, name, specialty, and social links (Facebook, LinkedIn, Twitter).
- Scenario — Doctor cards render correctly:
  - **WHEN** the user views the Doctors section
  - **THEN** 3 doctor cards are displayed with names, specialties, and social link icons

### 6. BookAppointment
- Users SHALL see a right-aligned form with doctor select dropdown, name, age, phone, email, date, time fields, and a submit button.
- Scenario — Form fields are interactive:
  - **WHEN** the user fills in the form fields
  - **THEN** each field updates its value
  - **AND** the form can be submitted

### 7. QualityHealth
- Users SHALL see 3 feature cards: Health Consultation, Find Health, and Search Doctor with icons.
- Scenario — Feature cards render with icons:
  - **WHEN** the user views the Quality Health section
  - **THEN** 3 cards are displayed with icons, titles, and descriptions

### 8. EmergencyContact
- Users SHALL see a cyan overlay banner with "We are here for you", "Book Appointment" button, and phone number.
- Scenario — Emergency banner shows contact info:
  - **WHEN** the user views the Emergency section
  - **THEN** the text "Emergency Medical Care" and phone number "+1-465 4545" are visible

### 9. Footer
- Users SHALL see a dark footer with logo, description, social links, departments list, and operating hours. The copyright line SHALL link to Component Dock.
- Scenario — Footer links to Component Dock:
  - **WHEN** the user views the footer copyright line
  - **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is present
- Scenario — Footer shows departments and hours:
  - **WHEN** the user views the footer
  - **THEN** department names and operating hours for Monday-Friday, Saturday, and Sunday are displayed

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/medflow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/medflow/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/medflow` ships on https://medflow.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/medflow/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/medflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/medflow/public/CNAME` = `medflow.free.componentdock.com`
  and the package `homepage` = `https://medflow.free.componentdock.com`.
