# Pyxis — Implementation Tasks

Source design: **Ozberk** (`https://colorlib.com/wp/template/ozberk/`) → recreation name **pyxis**. Shipped at https://pyxis.free.componentdock.com.

Scope: Pyxis is a single-page business/agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Ozberk" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/pyxis/src/App.tsx`:

### 1. Navbar
- The system SHALL render a sticky top navigation bar with the site name "Pyxis" and anchor links to the page sections.
- Scenario — Navbar content:
  - **GIVEN** the Pyxis page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the logo text "Pyxis"
  - **AND** the navbar SHALL show links to Home, About, Services, Portfolio, and Contact
- Scenario — Mobile menu toggle:
  - **GIVEN** the viewport is mobile-sized
  - **WHEN** the user clicks the hamburger menu button
  - **THEN** a mobile navigation menu SHALL open showing the same links
  - **AND** the toggle button label SHALL change to "Close menu"
  - **WHEN** the user clicks the close button
  - **THEN** the mobile navigation menu SHALL close

### 2. Banner
- The system SHALL render a fullscreen hero banner with a background image, dark overlay, heading text, and a CTA button.
- Scenario — Banner content:
  - **GIVEN** the Pyxis page is rendered
  - **WHEN** the page loads
  - **THEN** the banner SHALL show the heading "Effective Sleek and Clean Design for User Interface"
  - **AND** the banner SHALL show a "Get Started" CTA button
  - **AND** the banner SHALL have a background image with a dark overlay

### 3. TeamForce
- The system SHALL render a team section with a heading, paragraph, image, and CTA button.
- Scenario — Team section content:
  - **GIVEN** the Pyxis page is rendered
  - **WHEN** I scroll to the team section
  - **THEN** the section SHALL show the heading "Meet Our Team"
  - **AND** the section SHALL show a descriptive paragraph
  - **AND** the section SHALL show a "View More" CTA button
  - **AND** the section SHALL show a team image

### 4. Features
- The system SHALL render a 2-column grid of 6 feature cards, each with an icon, title, and description.
- Scenario — Feature cards:
  - **GIVEN** the Pyxis page is rendered
  - **WHEN** I scroll to the features section
  - **THEN** I SHALL see 6 feature cards
  - **AND** each card SHALL have an icon, a title, and a description
  - **AND** the titles SHALL be: Responsive Layout, Light & Dark Themes, Parallax Support, Retina Ready Graphics, HTML5 Video, Powerful Performance

### 5. VideoSection
- The system SHALL render a video section with a dark overlay background, play button, heading, and subtitle.
- Scenario — Video section content:
  - **GIVEN** the Pyxis page is rendered
  - **WHEN** I scroll to the video section
  - **THEN** the section SHALL show a play button
  - **AND** the section SHALL show the heading "Being Unique Is the Preference Now-a-Days"
  - **AND** the section SHALL show the subtitle "Watch our story unfold"

### 6. TestimonialSection
- The system SHALL render a testimonial section with a counter and a testimonial card.
- Scenario — Counter and testimonial:
  - **GIVEN** the Pyxis page is rendered
  - **WHEN** I scroll to the testimonial section
  - **THEN** the section SHALL show the counter "5962+" and "Projects Completed"
  - **AND** the section SHALL show a testimonial quote with author name and company

### 7. ServiceSection
- The system SHALL render a service section with a background image and a 2×3 grid of service items.
- Scenario — Service items:
  - **GIVEN** the Pyxis page is rendered
  - **WHEN** I scroll to the service section
  - **THEN** I SHALL see 6 service items with icons and titles
  - **AND** the titles SHALL be: Responsive Framework, Geniusly Transformable, Powerfully Customizable, Industrial Support, Extensively Extendable, Beautifully Presented

### 8. ContactSection
- The system SHALL render a contact section with 4 columns of contact information.
- Scenario — Contact columns:
  - **GIVEN** the Pyxis page is rendered
  - **WHEN** I scroll to the contact section
  - **THEN** I SHALL see 4 contact columns: Visit Our Office, Let's Call Us, Let's Email Us, Customer Support
  - **AND** each column SHALL contain relevant contact details

### 9. Footer
- The system SHALL render a footer with a newsletter form, link columns, social icons, and a Component Dock copyright link.
- Scenario — Footer content:
  - **GIVEN** the Pyxis page is rendered
  - **WHEN** I scroll to the footer
  - **THEN** the footer SHALL show a newsletter subscription form with email input and "Subscribe" button
  - **AND** the footer SHALL show link columns (Top Products, Navigation, Compare)
  - **AND** the footer SHALL show social media icon links
  - **AND** the footer SHALL show a copyright line with a link to https://www.componentdock.com/
- Scenario — Newsletter form submission:
  - **GIVEN** the footer newsletter form is rendered
  - **WHEN** the user clicks "Subscribe"
  - **THEN** the form SHALL prevent default submission (no backend)

### Cross-cutting requirements

- **App composition** — The system SHALL render all sections in the correct order within the App component.
  - Scenario — All sections present: **GIVEN** the Pyxis App is rendered; **WHEN** the page loads; **THEN** all sections SHALL be present in order: Navbar, Banner, TeamForce, Features, VideoSection, TestimonialSection, ServiceSection, ContactSection, Footer
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/pyxis/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/pyxis/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/pyxis` ships on https://pyxis.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/pyxis/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pyxis/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pyxis/public/CNAME` = `pyxis.free.componentdock.com`
  and the package `homepage` = `https://pyxis.free.componentdock.com`.
