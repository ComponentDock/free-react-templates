# Shave — Implementation Tasks

Source design: **Barber** (`https://colorlib.com/wp/template/barber/`) → recreation name **shave**. Shipped at https://shave.free.componentdock.com.

Scope: Recreate ColorLib "Barber" (https://colorlib.com/wp/template/barber/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template under the name "Shave". The original is a barber shop landing page with services, gallery, features, about, team, pricing, contact, and footer sections.

## Component breakdown

Render order as composed in `apps/shave/src/App.tsx`:

### 1. Navbar
- The navbar MUST show the brand name and navigation links, with a mobile hamburger toggle.
- Scenario — Desktop navigation:
  - **WHEN** I render the Navbar
  - **THEN** I see the "Shave" logo
  - **AND** I see links for Home, Service, Gallery, Features, Team, Pricing, Contact
- Scenario — Mobile menu toggle:
  - **GIVEN** I render the Navbar
  - **WHEN** I click "Open menu"
  - **THEN** the mobile menu is visible
  - **WHEN** I click "Close menu"
  - **THEN** the mobile menu is hidden
- Scenario — Mobile link closes menu:
  - **GIVEN** I render the Navbar
  - **WHEN** I click "Open menu" and then click a "Gallery" link
  - **THEN** the mobile menu is hidden

### 2. Hero
- The hero section MUST display a headline, subtitle, CTA button, and hero image.
- Scenario — Hero content:
  - **WHEN** I render the Hero
  - **THEN** I see the heading "HairStyle is a"
  - **AND** I see a "View More" button
  - **AND** I see the hero image

### 3. Services
- The services section MUST display 4 service cards with icons, titles, and descriptions.
- Scenario — Services display:
  - **WHEN** I render the Services
  - **THEN** I see "Beard Trimming", "Quality Gel Shave", "Effective Body Massage", "Stylish Hair Cutting" headings

### 4. Gallery
- The gallery section MUST display 6 images with hover overlay labels.
- Scenario — Gallery images:
  - **WHEN** I render the Gallery
  - **THEN** I see 6 gallery images

### 5. Features
- The features section MUST display 6 feature cards with icons, titles, and descriptions.
- Scenario — Features display:
  - **WHEN** I render the Features
  - **THEN** I see 6 feature titles

### 6. About
- The about section MUST display a heading, description, CTA button, image, and play button.
- Scenario — About content:
  - **WHEN** I render the About
  - **THEN** I see the about heading
  - **AND** I see the "See Details" button
  - **AND** I see the play button

### 7. Team
- The team section MUST display 4 team member cards with photos, names, roles, and social links.
- Scenario — Team members:
  - **WHEN** I render the Team
  - **THEN** I see 4 team member cards with names and roles

### 8. Pricing
- The pricing section MUST display 3 pricing plans with names, prices, feature lists, and purchase buttons.
- Scenario — Pricing plans:
  - **WHEN** I render the Pricing
  - **THEN** I see 3 pricing plans with prices £199, £399, £499

### 9. Contact
- The contact section MUST display contact info cards and a contact form.
- Scenario — Contact form:
  - **WHEN** I render the Contact
  - **THEN** I see a form with name, email, subject, message fields and a submit button
- Scenario — Form submission prevented:
  - **WHEN** I submit the contact form
  - **THEN** the page does not navigate

### 10. Footer
- The footer MUST display About, Newsletter, and Social columns, and link to Component Dock.
- Scenario — Footer content:
  - **WHEN** I render the Footer
  - **THEN** I see "Component Dock" link to https://www.componentdock.com/
  - **AND** I see social media links
  - **AND** I see the newsletter form

### Cross-cutting requirements

- **Template renders all sections** — The app MUST render Navbar, Hero, Services, Gallery, Features, About, Team, Pricing, Contact, and Footer sections in order.
  - Scenario — Page loads with correct title: **WHEN** the page loads; **THEN** the document title is "Shave — Barber Shop Landing Page"
  - Scenario — All sections are present: **WHEN** I render the App; **THEN** I see the banner (header); **AND** I see the main landmark; **AND** I see the footer
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/shave/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/shave/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/shave` ships on https://shave.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/shave/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/shave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shave/public/CNAME` = `shave.free.componentdock.com`
  and the package `homepage` = `https://shave.free.componentdock.com`.
