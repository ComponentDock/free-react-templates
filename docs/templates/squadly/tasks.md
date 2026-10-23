# Squadly — Implementation Tasks

Source design: **Equipo** (`https://colorlib.com/wp/template/equipo/`) → recreation name **squadly**. Shipped at https://squadly.free.componentdock.com.

Scope: Squadly is a heavy equipment rental landing page template featuring a hero, features/services section, about with stats, testimonials, blog, and a branded footer. It recreates the ColorLib Equipo design under a different name using React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/squadly/src/App.tsx`:

### 1. TopBar
- The template SHALL display a top bar with a phone number and physical address.
- Scenario — Phone number is visible:
  - **WHEN** the page loads
  - **THEN** the text "Free Call" and "+1 234 456 78910" are visible
- Scenario — Address is visible:
  - **WHEN** the page loads
  - **THEN** the text "198 West 21th Street" is visible

### 2. Navbar
- The navbar SHALL show the site name, navigation links, and a CTA button, with a mobile hamburger menu.
- Scenario — Desktop navigation links:
  - **WHEN** the page loads on desktop
  - **THEN** links for Home, About, Services, Blog, Contact, and "Request A Quote" are visible
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the "Open menu" button on mobile
  - **THEN** the mobile navigation menu opens with all links
- Scenario — Mobile menu closes on link click:
  - **WHEN** the mobile menu is open and a link is clicked
  - **THEN** the mobile menu closes

### 3. Hero
- The hero section SHALL show a background image, heading text, and two CTA buttons.
- Scenario — Hero heading and buttons:
  - **WHEN** the page loads
  - **THEN** the heading "Lease The Right Equipment For Your Job" is visible
  - **AND** "Contact us" and "Request A Quote" buttons are present

### 4. Features
- The features section SHALL display 4 feature items and a quote request form.
- Scenario — Four features are shown:
  - **WHEN** the page loads
  - **THEN** "24/7 Customer Service", "Prompt Delivery", "Reliable Equipment", and "New Heavy Equipment" headings are visible
- Scenario — Quote form fields:
  - **WHEN** the page loads
  - **THEN** the form contains First Name, Last Name, Phone, Service select, Message, and Submit Request button

### 5. AboutCounter
- No dedicated spec block — hold this band to the design notes.
- Anchors: Years of Experience · Customers Served · Number of Equipment · Number of Staff

### 6. CTABanner
- The CTA banner SHALL display a heading and appointment button.
- Scenario — CTA content:
  - **WHEN** the page loads
  - **THEN** "We Are Squadly" heading and "Make An Appointment" button are visible

### 7. Services
- The features section SHALL display 4 feature items and a quote request form.
- Scenario — Four features are shown:
  - **WHEN** the page loads
  - **THEN** "24/7 Customer Service", "Prompt Delivery", "Reliable Equipment", and "New Heavy Equipment" headings are visible
- Scenario — Quote form fields:
  - **WHEN** the page loads
  - **THEN** the form contains First Name, Last Name, Phone, Service select, Message, and Submit Request button

### 8. Testimonials
- The testimonials section SHALL display customer testimonial cards.
- Scenario — Testimonials:
  - **WHEN** the page loads
  - **THEN** at least 3 testimonial cards with names are visible

### 9. Blog
- The blog section SHALL display blog post cards with read more links.
- Scenario — Blog posts:
  - **WHEN** the page loads
  - **THEN** 3 blog post cards with "Read more" links are visible

### 10. Footer
- The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Component Dock attribution:
  - **WHEN** the page loads
  - **THEN** a link with text "Component Dock" points to https://www.componentdock.com/ with target="_blank"

### Cross-cutting requirements

- **About section shows company stats** — The about section SHALL display a welcome message and 4 statistical counters.
  - Scenario — Stats are displayed: **WHEN** the page loads; **THEN** the values 50, 4,500, 300, and 300 are visible with labels "Years of Experience", "Customers Served", "Number of Equipment", "Number of Staff"
- **Services section shows equipment cards** — The services section SHALL display 4 equipment service cards.
  - Scenario — Service cards: **WHEN** the page loads; **THEN** cards for Bulldozer, Forklift, Crane, and Excavator are visible
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/squadly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/squadly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/squadly` ships on https://squadly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/squadly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/squadly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/squadly/public/CNAME` = `squadly.free.componentdock.com`
  and the package `homepage` = `https://squadly.free.componentdock.com`.
