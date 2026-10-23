# Justly — Implementation Tasks

Source design: **Zacson** (`https://colorlib.com/wp/template/zacson/`) → recreation name **justly**. Shipped at https://justly.free.componentdock.com.

Scope: A Fitness Trainer template with hero, training categories, services, gallery, pricing and about sections.

## Component breakdown

Render order as composed in `apps/justly/src/App.tsx`:

### 1. Navbar
- The system SHALL render a dark navbar with the site name "Justly", section links (Home, About, Courses, Pricing, Gallery, Contact), and a "Contact" CTA button. A hamburger toggle opens a mobile menu on small screens.
- Scenario — Desktop navigation:
  - **GIVEN** the page is rendered
  - **WHEN** the navbar is displayed
  - **THEN** it SHALL show the site name "Justly" linking to `#home`
  - **AND** it SHALL show links to Home, About, Courses, Pricing, Gallery, Contact
- Scenario — Mobile menu:
  - **GIVEN** the page is rendered on a mobile viewport
  - **WHEN** the hamburger icon is clicked
  - **THEN** a dropdown menu SHALL appear with the same navigation links

### 2. Hero
- The system SHALL render a full-width hero section with a background image, greeting text ("Hi, I'm Justly"), heading ("Fitness Coach"), and a "My Courses" outline button.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero section is visible
  - **THEN** it SHALL display "Hi, I'm Justly" as a subtitle
  - **AND** "Fitness Coach" as the main heading
  - **AND** a "My Courses" outline button linking to #courses

### 3. TrainingCategories
- The system SHALL display two training category cards in a two-column grid (Personal Training, Group Training), each with an image, title, description, and a CTA button.
- Scenario — Two categories:
  - **GIVEN** the page is rendered
  - **WHEN** the training categories section is visible
  - **THEN** it SHALL show exactly two category cards
  - **AND** each card SHALL have an image, title, description, and button

### 4. Services
- The system SHALL display three service cards in a row (Body Building, Muscle Gain, Weight Loss), each with an image, title, and short description.
- Scenario — Three services:
  - **GIVEN** the page is rendered
  - **WHEN** the services section is visible
  - **THEN** it SHALL show exactly three service cards
  - **AND** each card SHALL have an image, title, and description

### 5. Gallery
- The system SHALL display a grid of 6 gallery images with hover overlays showing a title and an icon.
- Scenario — Gallery grid:
  - **GIVEN** the page is rendered
  - **WHEN** the gallery section is visible
  - **THEN** it SHALL show exactly 6 gallery items
  - **AND** each item SHALL display an overlay with title on hover

### 6. Pricing
- The system SHALL display three pricing cards, each with a plan duration, price, a list of features with checkmarks, and a "Join Now" button.
- Scenario — Three pricing tiers:
  - **GIVEN** the page is rendered
  - **WHEN** the pricing section is visible
  - **THEN** it SHALL show exactly three pricing cards
  - **AND** each card SHALL list 5 features with check icons
  - **AND** each card SHALL have a "Join Now" button

### 7. About
- The system SHALL render a split-layout About section with text on one side and an image on the other, including a "My Courses" CTA button.
- Scenario — About content:
  - **GIVEN** the page is rendered
  - **WHEN** the about section is visible
  - **THEN** it SHALL show "About Me" heading
  - **AND** descriptive text
  - **AND** a "My Courses" button

### 8. Blog
- The system SHALL display two blog post cards, each with an image, category tag, and title.
- Scenario — Two blog posts:
  - **GIVEN** the page is rendered
  - **WHEN** the blog section is visible
  - **THEN** it SHALL show exactly two blog post cards
  - **AND** each card SHALL have an image, category, and title

### 9. Video
- The system SHALL render a full-width video teaser section with a background image and a play button overlay.
- Scenario — Video play button:
  - **GIVEN** the page is rendered
  - **WHEN** the video section is visible
  - **THEN** it SHALL show a play button icon centered on a background image

### 10. ContactInfo
- The system SHALL display three contact info cards in a row (Location, Phone, Email), each with an icon, title, and details.
- Scenario — Three contact cards:
  - **GIVEN** the page is rendered
  - **WHEN** the contact info section is visible
  - **THEN** it SHALL show exactly three contact cards
  - **AND** each card SHALL have an icon, title, and detail text

### 11. Footer
- The system SHALL render a dark footer with the site logo, navigation links, social media icons (Twitter, Facebook, Instagram), and a Component Dock attribution link.
- Scenario — Footer links:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is visible
  - **THEN** it SHALL show navigation links matching the navbar
  - **AND** social media icon links
  - **AND** a "More templates at Component Dock" link to

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/justly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/justly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/justly` ships on https://justly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/justly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/justly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/justly/public/CNAME` = `justly.free.componentdock.com`
  and the package `homepage` = `https://justly.free.componentdock.com`.
