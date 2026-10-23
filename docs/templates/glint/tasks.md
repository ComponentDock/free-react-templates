# Glint — Implementation Tasks

Source design: **Prodent** (`https://colorlib.com/wp/template/prodent/`) → recreation name **glint**. Shipped at https://glint.free.componentdock.com.

Scope: Glint is a single-page dental clinic landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Prodent" free template (source: https://colorlib.com/wp/template/prodent/), built under a DIFFERENT name (**Glint**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

## Component breakdown

Render order as composed in `apps/glint/src/App.tsx`:

### 1. HeaderInfoBar
- The header SHALL render a four-column info bar above the navbar with address, hours, phone, and appointment details, each with an icon.
- Scenario — Info bar columns:
  - **GIVEN** the Glint app is rendered
  - **THEN** four info columns SHALL be visible in the header bar
  - **AND** each column SHALL have an icon (lucide) and text content
  - **AND** the info bar background SHALL be the light gray #eff2f4

### 2. Navbar
- The navbar SHALL display the Glint logo and navigation links (Home, About, Services, Blog, Contact).
- Scenario — Navigation links:
  - **GIVEN** the Glint app is rendered
  - **THEN** the navbar SHALL contain links for Home, About, Services,
  - **AND** the logo text SHALL read "Glint"

### 3. Hero
- The hero section SHALL render a two-slide carousel with dark overlay on dental images, heading, paragraph, and green CTA button.
- Scenario — Hero slides:
  - **GIVEN** the Glint app is rendered
  - **THEN** a hero section SHALL be visible with a heading and CTA button
  - **AND** the CTA button text SHALL read "Get Appointment"
  - **AND** the hero background SHALL use a placeholder image from

### 4. CtaBanner
- A full-width green banner SHALL appear below the hero with a consultation prompt and a light button.
- Scenario — CTA banner content:
  - **GIVEN** the Glint app is rendered
  - **THEN** a green banner SHALL be visible with text "Schedule your
  - **AND** a "Learn More" button SHALL be present

### 5. About
- The about section SHALL display an image on the left and descriptive text on the right, with an awards image below.
- Scenario — About content:
  - **GIVEN** the Glint app is rendered
  - **THEN** an about section SHALL be visible with a heading "We Care
  - **AND** a paragraph SHALL describe the dental practice
  - **AND** an image placeholder SHALL be rendered from picsum.photos

### 6. Stats
- A dark-background section SHALL display 4 dental statistics with icons.
- Scenario — Stats display:
  - **GIVEN** the Glint app is rendered
  - **THEN** 4 statistics SHALL be visible
  - **AND** each stat SHALL have a number, label, and tooth-related icon
  - **AND** the stats section background SHALL be dark

### 7. Services
- A services section SHALL display 6 service cards in a 3-column grid.
- Scenario — Services cards:
  - **GIVEN** the Glint app is rendered
  - **THEN** 6 service cards SHALL be rendered
  - **AND** each card SHALL have an icon, title, and description
  - **AND** the services SHALL include: Crowns Bridges, Implants, Teeth

### 8. Gallery
- A gallery section SHALL display 4 placeholder images in a row.
- Scenario — Gallery images:
  - **GIVEN** the Glint app is rendered
  - **THEN** 4 gallery images SHALL be visible
  - **AND** each image SHALL use picsum.photos as placeholder

### 9. Testimonials
- A testimonials section SHALL display quotes with author name, role, and photo.
- Scenario — Testimonial content:
  - **GIVEN** the Glint app is rendered
  - **THEN** at least one testimonial SHALL be visible with a quote,

### 10. Newsletter
- A newsletter section SHALL render on a green background with an email input and subscribe button.
- Scenario — Newsletter form:
  - **GIVEN** the Glint app is rendered
  - **THEN** a newsletter section SHALL be visible with text "Subscribe to
  - **AND** an email input field SHALL be present
  - **AND** a "Subscribe" button SHALL be present

### 11. Footer
- The footer SHALL render a three-column top section and a copyright bar with Component Dock link.
- Scenario — Footer columns:
  - **GIVEN** the Glint app is rendered
  - **THEN** the footer SHALL have 3 columns: about with social links,
  - **AND** the footer background SHALL be dark (#0d0d0d)
- Scenario — Component Dock credit:
  - **GIVEN** the Glint app is rendered
  - **THEN** the footer SHALL contain a link to
  - **AND** the link text SHALL be "Component Dock"
  - **AND** there SHALL be NO references to "colorlib" in the rendered app

### Cross-cutting requirements

- **Page structure and branding** — The app SHALL render a single-page dental clinic landing page with the Glint brand name, Montserrat font, and the #71cd29 green color scheme.
  - Scenario — Document title and meta: **GIVEN** the Glint app is rendered; **THEN** the document title SHALL be "Glint — Dental Clinic Template"; **AND** a meta description SHALL mention "dental clinic"
  - Scenario — Font loading: **GIVEN** the Glint app is rendered; **THEN** the page SHALL load Montserrat from Google Fonts; **AND** Montserrat SHALL be used for headings and body text
- **Semantics** — The page SHALL use semantic HTML elements (header, nav, main, section, footer) and aria labels where appropriate.
  - Scenario — Semantic structure: **GIVEN** the Glint app is rendered; **THEN** a banner landmark SHALL be present; **AND** a contentinfo landmark SHALL be present; **AND** a main landmark SHALL be present
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/glint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/glint/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/glint` ships on https://glint.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/glint/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/glint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/glint/public/CNAME` = `glint.free.componentdock.com`
  and the package `homepage` = `https://glint.free.componentdock.com`.
