# Vizier — Implementation Tasks

Source design: **Mona** (`https://colorlib.com/wp/template/mona/`) → recreation name **vizier**. Shipped at https://vizier.free.componentdock.com.

Scope: A personal template with header / navigation, hero carousel, about section, services section and model gallery with tabs sections. Recreation of ColorLib's **Mona** template as a modern model agency landing page.

## Component breakdown

Render order as composed in `apps/vizier/src/App.tsx`:

### 1. Header
- The system SHALL render a fixed white navbar with the "Vizier" logo on the left, navigation links (Home, About, Projects, Models, Casting, Blog, Contact) in the center, a search icon, and a mobile hamburger menu.
- Scenario — Desktop navigation content:
  - **GIVEN** the user views the page on a desktop viewport
  - **WHEN** the header renders
  - **THEN** the logo "Vizier" is visible
  - **AND** all seven navigation links are visible
- Scenario — Mobile menu toggle:
  - **GIVEN** the user views the page on a mobile viewport
  - **WHEN** the user taps the hamburger menu button
  - **THEN** the mobile navigation drawer opens
  - **WHEN** the user taps a navigation link
  - **THEN** the mobile drawer closes

### 2. Hero
- The system SHALL render a full-screen hero section with a background image, model name, role subtitle, "View Profile" CTA, social links, and slide navigation.
- Scenario — Hero slide content:
  - **GIVEN** the hero section loads
  - **WHEN** the first slide displays
  - **THEN** the model name "Jesse Edwards" is visible
  - **AND** the role "Star Model 2019" is visible
  - **AND** a "View Profile" button is visible
- Scenario — Slide navigation with arrows:
  - **GIVEN** the hero section shows slide 1
  - **WHEN** the user clicks the next arrow
  - **THEN** slide 2 ("Naznin Niloy") is displayed
  - **WHEN** the user clicks the previous arrow
  - **THEN** slide 1 ("Jesse Edwards") is displayed again
- Scenario — Slide navigation with indicators:
  - **GIVEN** the hero section shows slide 1
  - **WHEN** the user clicks the third slide indicator
  - **THEN** slide 3 ("Shaila Ritu") is displayed

### 3. About
- The system SHALL render an about section with two portrait images and descriptive text about the agency.
- Scenario — About content:
  - **GIVEN** the user scrolls to the about section
  - **WHEN** the section renders
  - **THEN** the heading "We Have 20+ Years Practical Experience in Agency" is visible
  - **AND** two portrait images are visible
  - **AND** descriptive paragraphs are visible

### 4. Services
- The system SHALL render four service cards in a responsive grid.
- Scenario — Service cards content:
  - **GIVEN** the user scrolls to the services section
  - **WHEN** the section renders
  - **THEN** four service cards are visible: Fashion Shows, Special Events, Commercial Photo, Model School
  - **AND** each card has an icon and description text

### 5. ModelGallery
- The system SHALL render a tabbed model gallery with filter tabs (All, Model, Actor, Singer) and a grid of model cards.
- Scenario — Default view shows all models:
  - **GIVEN** the user scrolls to the model gallery
  - **WHEN** the "All" tab is active
  - **THEN** 8 model cards are displayed
- Scenario — Filtering by category:
  - **GIVEN** the model gallery shows all models
  - **WHEN** the user clicks the "Actor" tab
  - **THEN** only actor-category models are displayed
  - **WHEN** the user clicks the "Singer" tab
  - **THEN** only singer-category models are displayed
  - **WHEN** the user clicks the "All" tab
  - **THEN** all 8 models are displayed again

### 6. Testimonials
- The system SHALL render a testimonials section with a quote, client name, and portrait image.
- Scenario — Testimonial content:
  - **GIVEN** the user scrolls to the testimonials section
  - **WHEN** the section renders
  - **THEN** the heading "Client Feedback" is visible
  - **AND** the client name "Sarah Johnson" is visible
  - **AND** the role "Creative Director, Vogue" is visible

### 7. Cta
- The system SHALL render a full-width pink CTA section with heading and button.
- Scenario — CTA content:
  - **GIVEN** the user scrolls to the CTA section
  - **WHEN** the section renders
  - **THEN** the heading "Do You Want To Be A Model?" is visible
  - **AND** a "Contact Us" button is visible

### 8. Blog
- The system SHALL render a blog section with a featured post and smaller posts in a grid layout.
- Scenario — Blog content:
  - **GIVEN** the user scrolls to the blog section
  - **WHEN** the section renders
  - **THEN** the heading "Latest News" is visible
  - **AND** 4 blog post cards are visible with titles and dates

### 9. Footer
- The system SHALL render a dark footer with logo, links, contact info, social icons, and a Component Dock attribution.
- Scenario — Footer content and attribution:
  - **GIVEN** the user scrolls to the footer
  - **WHEN** the footer renders
  - **THEN** the "Vizier" logo is visible
  - **AND** "Our Links" section with 8 navigation links is visible
  - **AND** contact phone number "+01-3-8888-6868" is visible
  - **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is visible
  - **AND** social media icon links (Facebook, Twitter, Instagram, YouTube) are visible

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/vizier/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/vizier/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/vizier` ships on https://vizier.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/vizier/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/vizier/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vizier/public/CNAME` = `vizier.free.componentdock.com`
  and the package `homepage` = `https://vizier.free.componentdock.com`.
