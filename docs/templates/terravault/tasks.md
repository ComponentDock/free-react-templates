# Terravault — Implementation Tasks

Source design: **Azenta** (`https://colorlib.com/wp/template/azenta/`) → recreation name **terravault**. Shipped at https://terravault.free.componentdock.com.

Scope: A real estate website template with a hero property showcase, search form, featured listings, agents, and blog. Recreation of ColorLib **Azenta**.

## Component breakdown

Render order as composed in `apps/terravault/src/App.tsx`:

### 1. Navbar
- The template SHALL display a dark navbar with navigation links, a language dropdown, and a teal "Submit Property" button.
- Scenario — Navbar renders with navigation and language selector:
  - **WHEN** the page loads
  - **THEN** a dark navbar is visible
  - **AND** it contains links: Home, Property, Agents, News, Pages, Contact
  - **AND** a language dropdown (English) is visible
  - **AND** a teal "Submit Property" button is present

### 2. InfoBar
- The template SHALL display an info bar below the navbar with logo and contact details.
- Scenario — Info bar shows contact details:
  - **WHEN** the page loads
  - **THEN** an info bar is visible below the navbar
  - **AND** it shows the logo on the left
  - **AND** phone, address, and email are displayed on the right with teal icons

### 3. Hero
- The template SHALL display a hero section with a full-width property photo, overlay card, price, and stats.
- Scenario — Hero section with property showcase:
  - **WHEN** the page loads
  - **THEN** the hero section is visible with a full-width property photo
  - **AND** a centered overlay card shows the address and property name
  - **AND** the price "$3,000,000" is displayed
  - **AND** property stats are shown: sqft, bedrooms, bathrooms, garage

### 4. SearchForm
- The template SHALL display a search form with tabbed interface and filter controls.
- Scenario — Search form with tabs:
  - **WHEN** the page loads
  - **THEN** a search form is visible
  - **AND** it has two tabs: "Find Your Home" (teal active) and "House For Sell"
  - **AND** form fields include: property type, title, city, bedrooms
  - **AND** price and size sliders are present
  - **AND** a teal "Search" button is present

### 5. HowItWorks
- No dedicated spec block — hold this band to the design notes.
- Anchors: Find Your Dream House · How It Work

### 6. FeaturedProperties
- The template SHALL display a 4-column grid of featured property cards.
- Scenario — Featured Properties grid:
  - **WHEN** the page loads
  - **THEN** a "Featured Properties" section is visible
  - **AND** 4 property cards are shown in a row
  - **AND** each card shows an image, property name, and price

### 7. VideoSection
- The template SHALL display a 3-step process section with icons and descriptions.
- Scenario — How It Work section:
  - **WHEN** the page loads
  - **THEN** the "How It Work" section is visible
  - **AND** 3 steps are shown with icons: Search & Find Apartment, Find Your Room, Talk To Agent
  - **AND** a teal underline accent is below the heading

### 8. TopProperties
- The template SHALL display a 3-column grid of larger property cards.
- Scenario — Top Properties section:
  - **WHEN** the page loads
  - **THEN** a "Top Properties" section is visible
  - **AND** 3 larger property cards are displayed with images and prices

### 9. Agents
- The template SHALL display a 4-column grid of agent cards.
- Scenario — Our Agents section:
  - **WHEN** the page loads
  - **THEN** an "Our Agents" section is visible
  - **AND** 4 agent cards are shown
  - **AND** each card has a photo, name, and role

### 10. Blog
- The template SHALL display a 3-column grid of blog cards.
- Scenario — Blog/News section:
  - **WHEN** the page loads
  - **THEN** a "News Latest" blog section is visible
  - **AND** 3 blog cards are shown with images and titles

### 11. Newsletter
- The template SHALL display a newsletter subscribe section with email input.
- Scenario — Newsletter subscribe:
  - **WHEN** the page loads
  - **THEN** a newsletter subscribe section is visible
  - **AND** an email input and subscribe button are present

### 12. Footer
- The template SHALL display a dark footer with city links, social icons, and a Component Dock link.
- Scenario — Footer:
  - **WHEN** the page loads
  - **THEN** a dark footer is visible
  - **AND** it shows city links (Florida, New York, Washington, etc.)
  - **AND** social media icons are present
  - **AND** it links to https://www.componentdock.com/

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/terravault/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/terravault/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/terravault` ships on https://terravault.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/terravault/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/terravault/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/terravault/public/CNAME` = `terravault.free.componentdock.com`
  and the package `homepage` = `https://terravault.free.componentdock.com`.
