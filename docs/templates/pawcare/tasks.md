# Pawcare — Implementation Tasks

Source design: **Anipat** (`https://colorlib.com/wp/template/anipat/`) → recreation name **pawcare**. Shipped at https://pawcare.free.componentdock.com.

Scope: Pawcare is a single-page pet-care landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Anipat" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/pawcare/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "Pawcare", links to the page's sections, and a dark-mode toggle button.
- Scenario — Navbar content:
  - **GIVEN** the Pawcare page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the site name "Pawcare" and links to About
  - **AND** the navbar SHALL show a dark-mode toggle button
- Scenario — Dark mode toggle:
  - **GIVEN** the page is rendered
  - **WHEN** the user presses the dark-mode toggle
  - **THEN** the `.dark` class SHALL be toggled on the document root element
  - **AND** the toggle SHALL reflect the current mode

### 2. Hero
- The system SHALL render a full-width hero with a headline, a short subheading, and an outlined call-to-action button.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero is displayed
  - **THEN** it SHALL contain a level-1 heading "We Care Your Pets"
  - **AND** it SHALL show a "Contact Us" button with the outlined brand style

### 3. Services
- The system SHALL render a services section with a heading and three service cards with icons.
- Scenario — Services content:
  - **GIVEN** the page is rendered
  - **WHEN** the services section is displayed
  - **THEN** it SHALL contain a heading "Services for every dog"
  - **AND** it SHALL show the services Pet Boarding, Healthy Meals, and Pet Spa

### 4. About
- The system SHALL render an about section with a heading, a blurb, an about button, and adoption stats.
- Scenario — About content:
  - **GIVEN** the page is rendered
  - **WHEN** the about section is displayed
  - **THEN** it SHALL contain a heading "We care your pet" and an "About Us"
  - **AND** it SHALL show a "452 Pets Available" stat

### 5. Testimonials
- The system SHALL render a testimonials section with at least one quote card.
- Scenario — Testimonials content:
  - **GIVEN** the page is rendered
  - **WHEN** the testimonials section is displayed
  - **THEN** it SHALL contain at least one testimonial card with a name

### 6. Team
- The system SHALL render a team section with member cards.
- Scenario — Team content:
  - **GIVEN** the page is rendered
  - **WHEN** the team section is displayed
  - **THEN** it SHALL contain a heading "Our Team"
  - **AND** it SHALL show the members "Rala Emaia" and "jhon Smith"

### 7. Cta
- No dedicated spec block — hold this band to the design notes.
- Anchors: Why go with Pawcare?

### 8. Footer
- The system SHALL render a footer with contact details, service links, quick links, social icons, and a copyright line.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show contact details, an "Our Services" column, and a
  - **AND** it SHALL show a copyright line

### Cross-cutting requirements

- **Call-to-action band** — The system SHALL render a CTA band with a heading, a support blurb, and a phone number.
  - Scenario — CTA content: **GIVEN** the page is rendered; **WHEN** the CTA band is displayed; **THEN** it SHALL contain a heading "Why go with Pawcare?"; **AND** it SHALL show the phone number "+555 0000 565"
- **Page composition** — The system SHALL compose all sections in a single page with a main landmark and a document title.
  - Scenario — Full page render: **GIVEN** the Pawcare app is rendered; **WHEN** the page loads; **THEN** the page SHALL compose the Navbar in the banner landmark, all; **AND** the document title SHALL be "Pawcare — Pet Care Template"
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/pawcare/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/pawcare/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/pawcare` ships on https://pawcare.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/pawcare/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pawcare/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pawcare/public/CNAME` = `pawcare.free.componentdock.com`
  and the package `homepage` = `https://pawcare.free.componentdock.com`.
