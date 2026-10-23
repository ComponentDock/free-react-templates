# Curenova — Implementation Tasks

Source design: **Healthcare** (`https://colorlib.com/wp/template/healthcare/`) → recreation name **curenova**. Shipped at https://curenova.free.componentdock.com.

Scope: Recreation of ColorLib "Healthcare" (https://colorlib.com/wp/template/healthcare/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template. A full-featured medical center landing page with hero, statistics, services, about section, features, doctor profiles, testimonials, blog, and footer with appointment form.

## Component breakdown

Render order as composed in `apps/curenova/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky navigation bar with the brand name "Curenova" and links to Home, Doctors, Services, Departments, Blog, and Contact sections.
- Scenario — Navbar renders on page load:
  - **WHEN** the page loads
  - **THEN** the navbar is visible with the "Curenova" logo and all navigation links
- Scenario — Navbar becomes sticky on scroll:
  - **WHEN** the user scrolls down the page
  - **THEN** the navbar remains fixed at the top of the viewport

### 2. Hero
- The template SHALL display a full-width hero section with a background image, dark overlay, headline text, and a "Make an Appointment" CTA button.
- Scenario — Hero renders with headline and CTA:
  - **WHEN** the page loads
  - **THEN** a hero section is visible with the headline "Your Health is always in the first place" and a "Make an Appointment" button

### 3. Stats
- The template SHALL display a statistics section with 4 counter items: Satisfied Customer (3,297), Hospitals (378), Qualified Doctor (400), and Departments (30).
- Scenario — Stats section displays all counters:
  - **WHEN** the page loads
  - **THEN** 4 stat items are visible with their respective icons, numbers, and labels

### 4. Services
- The template SHALL display a services section with a heading "Comprehensive services for our patients" and service items including Diagnostics, Home Appointments, Pharmacy, Lab Research, and Medical Transport.
- Scenario — Services section renders all items:
  - **WHEN** the page loads
  - **THEN** the services section is visible with all service items and icons

### 5. About
- The template SHALL display a split about section with an image on one side and an accordion with three panels (Our Mission, Our Vision, Why Choose Us) on the other.
- Scenario — About accordion expands and collapses:
  - **WHEN** the user clicks an accordion header
  - **THEN** the corresponding panel expands and other panels collapse

### 6. Features
- The template SHALL display a features section with a background image and 4 feature items: Qualified Doctors, Free Consultation, Online Enrollment, and Modern Facilities.
- Scenario — Features section renders all items:
  - **WHEN** the page loads
  - **THEN** 4 feature items are visible with icons, titles, and descriptions

### 7. Doctors
- The template SHALL display doctor profiles with names, specialties, descriptions, and action buttons (Email us, Make an appointment).
- Scenario — Doctors section renders all profiles:
  - **WHEN** the page loads
  - **THEN** 3 doctor profiles are visible with names, specialties, and action buttons

### 8. Testimonials
- The template SHALL display patient testimonials with avatar images, names, quotes, and 5-star ratings.
- Scenario — Testimonials section renders all testimonials:
  - **WHEN** the page loads
  - **THEN** testimonial cards are visible with quotes, names, and star ratings

### 9. Blog
- The template SHALL display 3 blog cards with images, author/date metadata, titles, excerpts, and "Read more" links.
- Scenario — Blog section renders all cards:
  - **WHEN** the page loads
  - **THEN** 3 blog cards are visible with titles and excerpts

### 10. Footer
- The template SHALL display a footer with columns for Head Office info, Departments, Useful Links, Support, and an appointment form. The footer MUST link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders all columns:
  - **WHEN** the page loads
  - **THEN** the footer contains contact info, navigation links, and an appointment form
- Scenario — Footer appointment form validates input:
  - **WHEN** the user submits the form with empty or invalid fields
  - **THEN** an error message is displayed
- Scenario — Footer contains Component Dock link:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/curenova/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/curenova/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/curenova` ships on https://curenova.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/curenova/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/curenova/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/curenova/public/CNAME` = `curenova.free.componentdock.com`
  and the package `homepage` = `https://curenova.free.componentdock.com`.
