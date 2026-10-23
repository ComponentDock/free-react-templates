# Nestled — Implementation Tasks

Source design: **Homey** (`https://colorlib.com/wp/template/homey/`) → recreation name **nestled**. Shipped at https://nestled.free.componentdock.com.

Scope: A Real Estate template with hero property slider, services, properties carousel, features and why us sections. Recreation of the ColorLib "Homey" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page real estate template.

## Component breakdown

Render order as composed in `apps/nestled/src/App.tsx`:

### 1. Navbar
- The template SHALL render a sticky navbar with logo, navigation links, and sign up/login buttons.
- Scenario — Desktop navbar renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar displays the logo "Nestled" with a primary-colored dot
  - **AND** navigation links for Home, Buy, Rent, About, Contact are visible
  - **AND** Sign up and Login buttons are visible
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the hamburger menu button on mobile
  - **THEN** the mobile navigation menu expands
  - **AND** clicking the button again collapses it

### 2. HeroSlider
- The template SHALL display a full-width hero section with a property image carousel showing price, address, and property specs.
- Scenario — First slide displays by default:
  - **WHEN** the page loads
  - **THEN** the hero section shows the first property with price, address, and bath/bed/sqft specs
- Scenario — Navigation arrows cycle slides:
  - **WHEN** the user clicks the next arrow
  - **THEN** the slider advances to the next property
  - **AND** clicking the previous arrow returns to the prior property
  - **AND** navigation wraps around at boundaries

### 3. Services
- The template SHALL display a services section with a heading and 4 service icons in a grid.
- Scenario — Services render correctly:
  - **WHEN** the services section is visible
  - **THEN** a heading "We will help you find your home" is displayed
  - **AND** 4 service items with icons and titles are shown in a grid

### 4. Properties
- The template SHALL display a horizontally scrollable property card carousel on a light background.
- Scenario — Property cards display:
  - **WHEN** the properties section is visible
  - **THEN** property cards show image, price, specs, and location
  - **AND** navigation arrows are present

### 5. Features
- The template SHALL display two feature cards with icons, headings, and descriptions.
- Scenario — Feature cards render:
  - **WHEN** the features section is visible
  - **THEN** "Ask our Customer Service" and "Visit our Blog" cards are displayed

### 6. WhyUs
- The template SHALL display a three-column layout with icon list, portrait image, and descriptive text.
- Scenario — Why Us content renders:
  - **WHEN** the Why Us section is visible
  - **THEN** 5 icon list items, a portrait image, and "Why Us" heading with description are shown

### 7. Testimonials
- The template SHALL display two testimonial cards with quotes and author information.
- Scenario — Testimonials render:
  - **WHEN** the testimonials section is visible
  - **THEN** two testimonial cards with quotes, author names, and roles are displayed

### 8. Footer
- The template SHALL render a footer with 4 columns and a dark bottom bar linking to Component Dock.
- Scenario — Footer columns display:
  - **WHEN** the footer is visible
  - **THEN** About, Pages, Resources, and Contact columns are shown
  - **AND** social media icon links are present
- Scenario — Component Dock attribution:
  - **WHEN** the footer bottom bar is visible
  - **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **100% test coverage** — All components SHALL have 100% line, function, branch, and statement coverage.
  - Scenario — Coverage thresholds met: **WHEN** `npm run test:coverage` is executed for the nestled workspace; **THEN** all coverage metrics report 100%
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/nestled/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/nestled/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/nestled` ships on https://nestled.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/nestled/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/nestled/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nestled/public/CNAME` = `nestled.free.componentdock.com`
  and the package `homepage` = `https://nestled.free.componentdock.com`.
