# Homemark — Implementation Tasks

Source design: **Estate** (`https://colorlib.com/wp/template/estate/`) → recreation name **homemark**. Shipped at https://homemark.free.componentdock.com.

Scope: Homestead is a single-page real-estate website template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/homemark/src/App.tsx`:

### 1. Navbar
- The system SHALL render a header with a brand logo on the left and six nav links on the right, with a hamburger toggler on mobile.
- Scenario — Header content:
  - **GIVEN** the Homestead page is rendered
  - **WHEN** the page loads
  - **THEN** the header SHALL show the brand wordmark "HOMESTEAD" on the left
  - **AND** the nav SHALL show links Home, About Us, Property, Developments,
- Scenario — Mobile navigation:
  - **GIVEN** the Homestead page is rendered on a small viewport
  - **WHEN** the hamburger toggler is clicked
  - **THEN** the nav links SHALL toggle open/closed

### 2. Hero
- The system SHALL render a hero section with a background image, a headline, social icons, and a details panel showing property information.
- Scenario — Hero content:
  - **GIVEN** the Homestead page is rendered
  - **WHEN** the hero is visible
  - **THEN** a full-width background image SHALL be shown
  - **AND** a headline "3 Modern homes for modern thinking people." SHALL overlay the image
  - **AND** social media icons (Facebook, LinkedIn, Twitter, YouTube, Instagram)
  - **AND** a details panel at the bottom SHALL show bedroom info, availability

### 3. FeatureIcons
- The system SHALL render a features carousel with icon boxes.
- Scenario — Features display:
  - **GIVEN** the Homestead page is rendered
  - **WHEN** the features section is visible
  - **THEN** the heading "Features" SHALL be shown
  - **AND** feature boxes SHALL be shown with icons, titles, and descriptions:

### 4. Intro
- The system SHALL render an "Our Houses" section with two alternating image+text rows.
- Scenario — Intro rows:
  - **GIVEN** the Homestead page is rendered
  - **WHEN** the intro section is visible
  - **THEN** the heading "Our Houses" SHALL be shown
  - **AND** row 1 SHALL show an image (8 cols) and text (4 cols) with a
  - **AND** row 2 SHALL show the image on the right and text on the left

### 5. Gallery
- The system SHALL render a dark-background gallery section with image thumbnails and two text columns.
- Scenario — Gallery display:
  - **GIVEN** the Homestead page is rendered
  - **WHEN** the design section is visible
  - **THEN** a dark-background section SHALL be shown with a light heading
  - **AND** a row of gallery images SHALL be displayed
  - **AND** two text columns (Interior, Environment Friendly) with descriptions

### 6. Location
- The system SHALL render a tabbed location section with large images and thumbnail navigation tabs.
- Scenario — Location tabs:
  - **GIVEN** the Homestead page is rendered
  - **WHEN** the location section is visible
  - **THEN** the heading "Location" SHALL be shown
  - **AND** a large image SHALL be displayed for the active tab
  - **AND** 4 thumbnail tabs SHALL be shown: Surroundings, Interior Design,
  - **AND** clicking a thumbnail SHALL switch the displayed image

### 7. Features
- The system SHALL render a features carousel with icon boxes.
- Scenario — Features display:
  - **GIVEN** the Homestead page is rendered
  - **WHEN** the features section is visible
  - **THEN** the heading "Features" SHALL be shown
  - **AND** feature boxes SHALL be shown with icons, titles, and descriptions:

### 8. CallToAction
- The system SHALL render a CTA section with a background image, heading, and action button.
- Scenario — CTA content:
  - **GIVEN** the Homestead page is rendered
  - **WHEN** the CTA section is visible
  - **THEN** a background image SHALL be shown
  - **AND** the heading "Ask our top consultants for a personalized offer
  - **AND** a "CALL 800-1-5141" button SHALL be shown

### 9. Footer
- The system SHALL render a dark footer with brand logo, link columns, social icons, and a copyright bar linking Component Dock.
- Scenario — Footer content:
  - **GIVEN** the Homestead page is rendered
  - **WHEN** the footer is visible
  - **THEN** the brand logo SHALL be shown on the left
  - **AND** link columns (Company, Legal) SHALL be shown
  - **AND** social icons SHALL be displayed
  - **AND** the copyright bar SHALL link https://www.componentdock.com/

### Cross-cutting requirements

- **Feature icons row** — The system SHALL render a horizontal row of 9 feature icon items, each with an icon and label text.
  - Scenario — Feature icons display: **GIVEN** the Homestead page is rendered; **WHEN** the features icons section is visible; **THEN** 9 items SHALL be shown: Easy Buying, Ready to Move, Great; **AND** each item SHALL have an icon above its label
- **Responsive behavior** — The system SHALL stack all multi-column layouts to single columns on small viewports.
  - Scenario — Mobile layout: **GIVEN** the Homestead page is rendered on a small viewport; **WHEN** the page is displayed; **THEN** all grid rows SHALL stack to single columns
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/homemark/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/homemark/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/homemark` ships on https://homemark.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/homemark/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/homemark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/homemark/public/CNAME` = `homemark.free.componentdock.com`
  and the package `homepage` = `https://homemark.free.componentdock.com`.
