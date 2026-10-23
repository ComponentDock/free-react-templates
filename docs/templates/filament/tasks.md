# Filament — Implementation Tasks

Source design: **Simples** (`https://colorlib.com/wp/template/simples/`) → recreation name **filament**. Shipped at https://filament.free.componentdock.com.

Scope: Filament is a single-page feminine landing page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Simples" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/filament/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "Filament" and navigation links for "Home", "Generic", and "Elements". The navbar SHALL be positioned absolutely over the hero banner.
- Scenario — Navbar content:
  - **GIVEN** the Filament page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the site name "Filament"
  - **AND** navigation links for "Home", "Generic", and "Elements" SHALL be present
  - **AND** the navbar SHALL be a banner landmark

### 2. Hero
- The system SHALL render a full-screen hero banner with a gradient overlay (salmon-peach to soft-pink), a heading, subtitle, and CTA button.
- Scenario — Hero content:
  - **GIVEN** the Filament page is rendered
  - **WHEN** the hero banner is displayed
  - **THEN** the heading "Brand new Filament" SHALL be visible
  - **AND** a subtitle paragraph SHALL be present
  - **AND** an "Explore Now" pill-shaped button SHALL be rendered
- Scenario — Hero gradient:
  - **GIVEN** the Filament page is rendered
  - **WHEN** the hero banner is displayed
  - **THEN** the banner SHALL have a gradient overlay from #f6d0c5 to #fbd2f6

### 3. Features
- The system SHALL render four feature cards in a responsive grid with lavender-pink icons and uppercase labels.
- Scenario — Feature cards:
  - **GIVEN** the Filament page is rendered
  - **WHEN** the features section is displayed
  - **THEN** four feature cards SHALL be visible
  - **AND** the features SHALL be: "Easy Installation", "Multiple Layouts", "Free Updates", "Fully Responsive"

### 4. CoreFeatureCarousel
- No dedicated spec block — hold this band to the design notes.
- Anchors: Core feature carousel · Previous slide · Next slide

### 5. CoreFeatureImage
- The system SHALL render a core feature section with text on the left and an image carousel on the right, with prev/next navigation.
- Scenario — Carousel navigation:
  - **GIVEN** the Filament page is rendered
  - **WHEN** the user clicks the next button
  - **THEN** the carousel SHALL advance to the next slide
  - **AND** the previous button SHALL navigate back
- Scenario — Carousel wrap-around:
  - **GIVEN** the carousel is on the last slide
  - **WHEN** the user clicks next
  - **THEN** the carousel SHALL wrap to the first slide

### 6. ProcessSteps
- The system SHALL render six process steps on a gradient background with white icons and uppercase labels.
- Scenario — Process steps content:
  - **GIVEN** the Filament page is rendered
  - **WHEN** the process steps section is displayed
  - **THEN** six steps SHALL be visible: "Brainstorm", "Discuss Ideas", "Projections", "Strategies", "Seo Target", "Awards"

### 7. ServiceCarousel
- The system SHALL render a service carousel with dark overlay background, displaying service items with image, title, description, and navigation.
- Scenario — Service carousel navigation:
  - **GIVEN** the Filament page is rendered
  - **WHEN** the user clicks the next button
  - **THEN** the service carousel SHALL advance to the next service
- Scenario — Service carousel wrap-around:
  - **GIVEN** the service carousel is on the last item
  - **WHEN** the user clicks next
  - **THEN** the carousel SHALL wrap to the first service

### 8. Newsletter
- The system SHALL render a newsletter subscription section with email input and "Get Started" button.
- Scenario — Newsletter form:
  - **GIVEN** the Filament page is rendered
  - **WHEN** the newsletter section is displayed
  - **THEN** an email input field SHALL be present
  - **AND** a "Get Started" button SHALL be rendered

### 9. Contact
- The system SHALL render a contact section with a map placeholder and a contact form with name, email, and message fields.
- Scenario — Contact form:
  - **GIVEN** the Filament page is rendered
  - **WHEN** the contact section is displayed
  - **THEN** a name input, email input, and message textarea SHALL be present
  - **AND** a "Send Message" button SHALL be rendered
  - **AND** a map placeholder area SHALL be visible

### 10. Footer
- The system SHALL render a black footer with navigation columns, Quick Contact info, social media icons, and a "Made with Component Dock" link.
- Scenario — Footer content:
  - **GIVEN** the Filament page is rendered
  - **WHEN** the footer is displayed
  - **THEN** four navigation columns SHALL render: "Top Products", "Company", "Support", "Projects"
  - **AND** a "Quick Contact" column SHALL show phone and email
  - **AND** social media icons for Facebook, Twitter, Dribbble, Behance SHALL be present
  - **AND** a "Component Dock" link pointing to https://www.componentdock.com/ SHALL be present
- Scenario — Footer landmark:
  - **GIVEN** the Filament page is rendered
  - **WHEN** the page loads
  - **THEN** the footer SHALL be a contentinfo landmark

### Cross-cutting requirements

- **Core Feature Image section** — The system SHALL render a section with a large image on the left and descriptive text with a "Learn More" CTA on the right.
  - Scenario — Image section content: **GIVEN** the Filament page is rendered; **WHEN** the core feature image section is displayed; **THEN** a feature image SHALL be visible; **AND** a "Learn More" link SHALL be present
- **App composition** — The system SHALL compose all sections within a main landmark, set the document title, and support dark mode.
  - Scenario — App structure: **GIVEN** the Filament page is rendered; **WHEN** the page loads; **THEN** the document title SHALL be "Filament — Feminine Landing Page"; **AND** a banner landmark SHALL be present (navbar); **AND** a main landmark SHALL contain all content sections; **AND** a contentinfo landmark SHALL be present (footer)
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/filament/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/filament/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/filament` ships on https://filament.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/filament/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/filament/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/filament/public/CNAME` = `filament.free.componentdock.com`
  and the package `homepage` = `https://filament.free.componentdock.com`.
