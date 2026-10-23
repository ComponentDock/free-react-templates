# Dentalyn — Implementation Tasks

Source design: **Dento** (`https://colorlib.com/wp/template/dento/`) → recreation name **dentalyn**. Shipped at https://dentalyn.free.componentdock.com.

Scope: Dentalyn is a free dental clinic landing page template that recreates the ColorLib Dento design under a new name. It provides a professional, modern dental clinic website with sections for hero, about, services, pricing, appointment booking, team, testimonials, blog, and footer — built with React 19, Tailwind CSS 4, and TypeScript.

## Component breakdown

Render order as composed in `apps/dentalyn/src/App.tsx`:

### 1. Navbar
- The template navbar SHALL display the site name "Dentalyn", navigation links for Home, About, Services, Pricing, Blog, and Contact, a "Book Now" call-to-action button, and a dark mode toggle.
- Scenario — Navbar renders all elements:
  - **WHEN** the page loads
  - **THEN** I see the "Dentalyn" logo link
  - **AND** I see navigation links for Home, About, Services, Pricing, Blog, Contact
  - **AND** I see a "Book Now" button
  - **AND** I see a dark mode toggle button
- Scenario — Dark mode toggles correctly:
  - **WHEN** I click the dark mode toggle
  - **THEN** the document root gains the "dark" class
  - **AND** the toggle icon changes to a sun icon

### 2. Hero
- The hero section SHALL display a heading about dental care access, a subtitle describing the clinic, and two call-to-action buttons ("Get Started" and "Contact Us").
- Scenario — Hero renders heading and buttons:
  - **WHEN** the hero section is visible
  - **THEN** I see the heading "We Believe Everyone Should Have Easy Access To Great Dental Care"
  - **AND** I see "Get Started" and "Contact Us" buttons

### 3. About
- The about section SHALL display a heading, description text, an image, and three skill bars (Experience Dentist 80%, Modern Equipment 65%, Friendly Staff 85%).
- Scenario — About displays skill bar labels:
  - **WHEN** the about section is visible
  - **THEN** I see skill bars labeled "Experience Dentist", "Modern Equipment", "Friendly Staff"

### 4. Stats
- The stats section SHALL display four statistics: 20 Years Of Experience, 700+ Happy Patients, 120 Certificate, 40+ Dentist.
- Scenario — Stats shows all four values:
  - **WHEN** the stats section is visible
  - **THEN** I see "20" with "Years Of Experience"
  - **AND** I see "700+" with "Happy Patients"
  - **AND** I see "120" with "Certificate"
  - **AND** I see "40+" with "Dentist"

### 5. Services
- The services section SHALL display six service types in a grid with a dark overlay background and a video play button.
- Scenario — Services lists all types:
  - **WHEN** the services section is visible
  - **THEN** I see Teeth Whitening, Missing Teeth, Cosmetic Dentistry, Examination, Teeth Pain, Root Canal

### 6. Pricing
- The pricing section SHALL display a table with service names, stages, and prices, plus a "Read More" button.
- Scenario — Pricing table has all rows:
  - **WHEN** the pricing section is visible
  - **THEN** I see a table with column headers Service Names, Stage, Price
  - **AND** there are at least 8 pricing rows

### 7. Appointment
- The appointment section SHALL provide a form with Name, Phone, Email, Address, Schedule, Time, and Message fields plus a submit button.
- Scenario — Form has required fields:
  - **WHEN** the appointment section is visible
  - **THEN** I see inputs for Name, Phone, Email, Address
  - **AND** I see selects for Schedule and Time
  - **AND** I see a Message textarea
  - **AND** I see a "Book Appointment" submit button

### 8. Team
- The team section SHALL display three dentist cards with photos, names, roles, and social links.
- Scenario — Team shows three members:
  - **WHEN** the team section is visible
  - **THEN** I see three dentist names and roles

### 9. Testimonials
- The testimonials section SHALL display patient testimonials with photos, quotes, names, and roles on a dark background.
- Scenario — Testimonials shows patient quotes:
  - **WHEN** the testimonials section is visible
  - **THEN** I see patient quotes with names and "Dental Patient" roles

### 10. Blog
- The blog section SHALL display three blog post cards with thumbnails, titles, excerpts, dates, and comment counts.
- Scenario — Blog shows three posts:
  - **WHEN** the blog section is visible
  - **THEN** I see three blog post titles with dates and comment counts

### 11. Footer
- The footer SHALL display contact information, opening hours, quick links, a newsletter form, social links, and a Component Dock attribution link.
- Scenario — Footer has all elements:
  - **WHEN** the footer is visible
  - **THEN** I see address and phone number
  - **AND** I see opening hours
  - **AND** I see quick links
  - **AND** I see a newsletter form
  - **AND** I see a link to componentdock.com

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/dentalyn/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/dentalyn/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/dentalyn` ships on https://dentalyn.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/dentalyn/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dentalyn/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dentalyn/public/CNAME` = `dentalyn.free.componentdock.com`
  and the package `homepage` = `https://dentalyn.free.componentdock.com`.
