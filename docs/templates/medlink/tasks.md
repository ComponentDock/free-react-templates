# Medlink — Implementation Tasks

Source design: **Medical 2** (`https://colorlib.com/wp/template/medical-2/`) → recreation name **medlink**. Shipped at https://medlink.free.componentdock.com.

Scope: Recreation of **ColorLib "Medical 2"** template (https://colorlib.com/wp/template/medical-2/). Preview was unreachable (404) — design derived from the TEMPLATES.md screenshot. **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript. **Deploy target:** `https://medlink.free.componentdock.com`.

## Component breakdown

Render order as composed in `apps/medlink/src/App.tsx`:

### 1. TopBar
- The top bar SHALL display phone number and email on the left side, and a green "BOOK APPOINTMENT" button on the right side, with a dark charcoal background.
- Scenario — Top bar renders with contact info:
  - **WHEN** I visit the MedLink homepage
  - **THEN** I see a top bar with phone number (+953 012 3654 896) and email (support@medlink.com) on the left
  - **AND** I see a green "BOOK APPOINTMENT" button on the right
  - **AND** the top bar has a dark background (#333333)

### 2. Navbar
- The navigation SHALL render a white bar with a green cross logo and "MedLink" brand, with links for Home, About, Features, Doctors, Departments, Blog, Pages, Contact.
- Scenario — Navigation renders all links:
  - **WHEN** I visit the MedLink homepage
  - **THEN** I see a white navigation bar with a green cross logo and "MedLink" brand
  - **AND** I see links for Home, About, Features, Doctors, Departments, Blog, Pages, Contact
  - **AND** the navigation is horizontal and sticky at the top
- Scenario — Navigation mobile toggle works:
  - **WHEN** I click the mobile menu toggle button
  - **THEN** the mobile menu expands showing all nav links
  - **AND** aria-expanded is set to true

### 3. HeroBanner
- No dedicated spec block — hold this band to the design notes.
- Anchors: Hero banner · We Care for Your Health · Every Moment · Get Started

### 4. ServicingHours
- The servicing hours section SHALL display a heading, description, and schedule listing days and hours.
- Scenario — Servicing hours renders schedule:
  - **WHEN** I visit the MedLink homepage
  - **THEN** I see a "Servicing Hours" heading
  - **AND** I see a descriptive paragraph below the heading
  - **AND** I see days and hours listed (Monday-Friday: 08:00 am - 10:00 pm, Saturday: 08:00 am - 06:00 pm, Sunday: Closed)

### 5. AppointmentForm
- The appointment form SHALL display fields for Patient Name, Phone, Email Address, Date of Birth, Disease Type (dropdown), and Appointment Date with a submit button.
- Scenario — Appointment form renders all fields:
  - **WHEN** I visit the MedLink homepage
  - **THEN** I see a "Book an Appointment" heading
  - **AND** I see input fields for Patient Name, Phone, Email Address, Date of Birth
  - **AND** I see a Disease Type dropdown with options
  - **AND** I see an Appointment Date field
  - **AND** I see a submit button
- Scenario — Appointment form validates required fields:
  - **WHEN** I click the submit button without filling any fields
  - **THEN** the form prevents default submission
- Scenario — Appointment form accepts valid input:
  - **WHEN** I fill in Patient Name with "John Doe"
  - **AND** I fill in Phone with "555-1234"
  - **AND** I fill in Email Address with "john@example.com"
  - **AND** I select Disease Type as "Cardiology"
  - **AND** I click the submit button
  - **THEN** the form submits without navigation

### 6. Doctors
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Team · Meet Our Doctors

### 7. Departments
- No dedicated spec block — hold this band to the design notes.
- Anchors: What We Offer · Our Departments

### 8. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest News · From Our Blog · Read More

### 9. Footer
- The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer contains Component Dock link:
  - **WHEN** I scroll to the bottom of the page
  - **THEN** I see a footer with a link to https://www.componentdock.com/
  - **AND** the link is branded as "Component Dock"
- Scenario — Footer contains navigation columns:
  - **WHEN** I scroll to the footer
  - **THEN** I see footer columns with Quick Links and Departments navigation
  - **AND** I see a newsletter signup form
  - **AND** I see social media links

### Cross-cutting requirements

- **Hero displays headline and CTA over background image** — The hero section SHALL display a full-width background image with dark overlay, white heading "We Care for Your Health Every Moment", subtitle text, and green "GET STARTED" button.
  - Scenario — Hero renders with heading and CTA: **WHEN** I visit the MedLink homepage; **THEN** I see a full-width hero section with a dark overlay over a medical background image; **AND** I see the heading "We Care for Your Health Every Moment"; **AND** I see a subtitle paragraph below the heading; **AND** I see a green "GET STARTED" button centered below the subtitle
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/medlink/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/medlink/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [x] Top bar: dark bg, phone/email left, green "BOOK APPOINTMENT" right; [x] Navigation: white bg, green cross logo + "MedLink", all nav links present; [x] Hero: full-width bg image, dark overlay, white heading + subtext + green CTA; [x] Split section: Servicing Hours left, Appointment form right; [x] Form fields: Patient Name, Phone, Email, DOB, Disease Type (dropdown), Appointment Date; [x] Form validation: required field checks, valid submission; [x] Footer: links to componentdock.com; [x] Design tokens: green (#76b900), Poppins font, dark top bar (#333), white content; [x] No ColorLib references in app code (provenance in spec only); [x] Responsive: mobile-first, hamburger nav on small screens; [x] 100% test coverage (lines, functions, branches, statements); [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/medlink` ships on https://medlink.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/medlink/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/medlink/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/medlink/public/CNAME` = `medlink.free.componentdock.com`
  and the package `homepage` = `https://medlink.free.componentdock.com`.
