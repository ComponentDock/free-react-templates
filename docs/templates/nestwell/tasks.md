# Nestwell — Implementation Tasks

Source design: **Homeland** (`https://colorlib.com/wp/template/homeland/`) → recreation name **nestwell**. Shipped at https://nestwell.free.componentdock.com.

Scope: Provide a real estate agency landing page template featuring a hero slider with property details, a property search form, featured properties, about/services sections, customer testimonials, and a full footer with newsletter signup.

## Component breakdown

Render order as composed in `apps/nestwell/src/App.tsx`:

### 1. Navbar
- The template SHALL display a fixed dark navbar with the brand name "Nestwell.", navigation links (Home, Properties, Agents, Blog, About, Contact), and a "Get Started" CTA button.
- Scenario — Desktop navbar renders all links:
  - **GIVEN** the user views the template on a desktop viewport
  - **THEN** the brand "Nestwell." is displayed in the navbar
  - **AND** links for Home, Properties, Agents, Blog, About, Contact are visible
  - **AND** a "Get Started" button is visible
- Scenario — Mobile menu toggle:
  - **GIVEN** the user views the template on a mobile viewport
  - **WHEN** the user taps the hamburger menu button
  - **THEN** the mobile navigation menu expands showing all links
  - **WHEN** the user taps the close button
  - **THEN** the mobile menu collapses

### 2. Hero
- The template SHALL display a full-width hero section with a background property image, dark overlay, headline text, description, and a property details card with specs (area, bedrooms, bathrooms, garage) and a "View Properties" button.
- Scenario — Hero displays property information:
  - **GIVEN** the user views the hero section
  - **THEN** a property headline is displayed in an h1 heading
  - **AND** a property description is shown
  - **AND** property details including area, bedrooms, bathrooms, and garage are listed
  - **AND** a "View Properties" button is present

### 3. SearchForm
- The template SHALL display a search form with Location (text input), Property Type (select), Property Status (select), Price Limit (select), and a Search button.
- Scenario — Search form fields are accessible:
  - **GIVEN** the user views the search form
  - **THEN** a Location text input with associated label is present
  - **AND** Property Type, Property Status, and Price Limit select dropdowns are present
  - **AND** a Search submit button is present

### 4. FeaturedProperties
- The template SHALL display a grid of 5 property cards, each showing an image, sale/rent tag, property name, price, location, and bed/bath information.
- Scenario — Property cards display correctly:
  - **GIVEN** the user views the Featured Properties section
  - **THEN** 5 property cards are rendered
  - **AND** each card shows a price, location, and bed/bath details
  - **AND** each card has a Sale or Rent tag

### 5. About
- The template SHALL display an about section with a background image, heading, description, 4 feature items (Find Your Dream Location, Expert Agents At Your Service, Buy & Rent Premium Homes, Best Value Properties), and a "Learn More" link.
- Scenario — About section renders features:
  - **GIVEN** the user views the about section
  - **THEN** the heading about discovering properties is displayed
  - **AND** 4 feature items with icons are shown
  - **AND** a "Learn More" link is present

### 6. Services
- The template SHALL display a services section with two side-by-side image cards (Buying and Renting) with overlay text and "Read more" links.
- Scenario — Services cards render correctly:
  - **GIVEN** the user views the services section
  - **THEN** "Buying A Property" and "Renting A Property" cards are displayed
  - **AND** each card has a "Read more" link

### 7. Testimonials
- The template SHALL display a dark-background testimonials section with customer quotes, names, and roles.
- Scenario — Testimonials render customer feedback:
  - **GIVEN** the user views the testimonials section
  - **THEN** customer names (Sarah Mitchell, James Cooper, Emily Dawson) are displayed
  - **AND** each testimonial shows a "Buyer" role
  - **AND** quote text is present

### 8. Footer
- The template SHALL display a dark footer with 5 columns (About, Company, Explore, Get Started, Newsletter), social links, a newsletter email form, and a "Component Dock" branded link.
- Scenario — Footer contains required elements:
  - **GIVEN** the user views the footer
  - **THEN** a "Component Dock" link points to https://www.componentdock.com/
  - **AND** Company, Explore, and Get Started link columns are present
  - **AND** a newsletter email input and Subscribe button are present
  - **AND** social links (Facebook, Instagram) are present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/nestwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/nestwell/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/nestwell` ships on https://nestwell.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/nestwell/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/nestwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nestwell/public/CNAME` = `nestwell.free.componentdock.com`
  and the package `homepage` = `https://nestwell.free.componentdock.com`.
