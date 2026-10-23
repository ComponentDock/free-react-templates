# Advisory — Implementation Tasks

Source design: **Consulto** (`https://colorlib.com/wp/template/consulto/`) → recreation name **advisory**. Shipped at https://advisory.free.componentdock.com.

Scope: A business template with header / navigation, hero / slider, services section, about / philosophy section and accordion / solutions sections. Recreation of ColorLib's **Consulto** template as a modern consulting business landing page.

## Component breakdown

Render order as composed in `apps/advisory/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Primary · Mobile · Advisory · Make an Appointment

### 2. Hero
- The system SHALL render a hero section with a background image, a subtitle "Best Service", a main heading "Business Consulting", descriptive text, and an "Explore Services" CTA button.
- Scenario — Hero content:
  - **GIVEN** the user views the hero section
  - **THEN** a full-width background image is displayed
  - **AND** the subtitle "Best Service" is visible
  - **AND** the heading "Business Consulting" is large and bold
  - **AND** a descriptive paragraph is below the heading
  - **AND** an "Explore Services" orange button is visible

### 3. Services
- The system SHALL render service cards in a carousel/grid, each with a background image, overlay, title, description, and "Make Appointment" button.
- Scenario — Service cards:
  - **GIVEN** the user scrolls to the services section
  - **THEN** at least 3 service cards are displayed
  - **AND** each card has a title, description, and "Make Appointment" button
  - **AND** cards have a dark overlay on the image

### 4. About
- The system SHALL render a two-column about section with a background image on the left and "Our Philosophy" heading with description and author attribution on the right.
- Scenario — About layout:
  - **GIVEN** the user scrolls to the about section
  - **THEN** a two-column layout is displayed
  - **AND** the left column has a background image
  - **AND** the right column has heading "Our Philosophy" and descriptive text
  - **AND** an author attribution (name + title) is shown below

### 5. Accordion
- The system SHALL render an accordion with 4 collapsible items and a side image with stats (900+, 95%).
- Scenario — Accordion items:
  - **GIVEN** the user scrolls to the solutions section
  - **THEN** 4 accordion items are displayed
  - **AND** clicking an item expands its content
  - **AND** stats (900+, 95%) are shown on the right side

### 6. Testimonials
- The system SHALL render testimonials in a carousel with a dark background, quote text, author name, and avatar.
- Scenario — Testimonials content:
  - **GIVEN** the user scrolls to the testimonials section
  - **THEN** a testimonial with quote text is displayed
  - **AND** the author name and avatar are shown
  - **AND** the section has a dark background

### 7. CaseStudies
- The system SHALL render case study cards in a carousel with images, titles, descriptions, and category tags.
- Scenario — Case study cards:
  - **GIVEN** the user scrolls to the case studies section
  - **THEN** at least 3 case study cards are displayed
  - **AND** each card has an image, title, description, and category tag

### 8. Team
- The system SHALL render team member cards with circular avatars, names, roles, and social media icons.
- Scenario — Team grid:
  - **GIVEN** the user scrolls to the team section
  - **THEN** team member cards are displayed in a grid
  - **AND** each card has a circular avatar, name, role, and social icons

### 9. Footer
- The system SHALL render a dark footer with about info, quick links, services, contact info, and a copyright bar linking to Component Dock.
- Scenario — Footer content:
  - **GIVEN** the user scrolls to the footer
  - **THEN** a dark background is visible
  - **AND** multiple columns are shown (about, links, services, contact)
  - **AND** the copyright links to https://www.componentdock.com/

### Cross-cutting requirements

- **Header / Navigation** — The system SHALL render a sticky white navbar with the "Advisory" logo on the left, navigation links (Home, Pages, Services, Blog, Contact) in the center, and an "Make an Appointment" CTA button on the right.
  - Scenario — Navbar content: **GIVEN** the user views the navigation bar; **THEN** a white sticky navbar is visible; **AND** the logo "Advisory" is on the left; **AND** navigation links include Home, Pages, Services, Blog, Contact; **AND** an "Make an Appointment" button is on the right
  - Scenario — Mobile menu: **GIVEN** the viewport width is less than 768px; **THEN** a hamburger menu icon is visible; **AND** clicking it toggles the mobile nav
- **Design Fidelity** — The system SHALL use Muli for body text, Raleway for headings, brand color #FD8F5F as accent, and pill-shaped buttons (border-radius: 30px).
  - Scenario — Design tokens applied: **GIVEN** the template is rendered; **THEN** the body font is Muli; **AND** the heading font is Raleway; **AND** the brand accent color is #FD8F5F; **AND** buttons have 30px border-radius
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/advisory/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/advisory/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Sticky white navbar with logo, nav links, and CTA button; [ ] Hero section with background image, heading, subtext, and CTA; [ ] Services carousel with image overlay cards; [ ] About section with "Our Philosophy" and author attribution; [ ] Accordion with 4 items and stats on right; [ ] Testimonials carousel with dark background; [ ] Case studies grid with category tags; [ ] Team section with circular avatars and social icons; [ ] Dark footer with multiple columns + Component Dock link; [ ] Fonts: Muli (body), Raleway (headings); [ ] Brand color #FD8F5F applied as accent; [ ] Pill-shaped buttons (border-radius: 30px); [ ] Responsive breakpoints; [ ] No ColorLib references in app code; [ ] Footer links to componentdock.com; [ ] CNAME set to advisory.free.componentdock.com; [ ] Coverage 100% lines/functions/branches/statements; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/advisory` ships on https://advisory.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/advisory/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/advisory/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/advisory/public/CNAME` = `advisory.free.componentdock.com`
  and the package `homepage` = `https://advisory.free.componentdock.com`.
