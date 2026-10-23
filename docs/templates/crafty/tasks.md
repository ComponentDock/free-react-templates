# Crafty — Implementation Tasks

Source design: **Five Star** (`https://colorlib.com/wp/template/five-star/`) → recreation name **crafty**. Shipped at https://crafty.free.componentdock.com.

Scope: Crafty is a single-page creative agency template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Five Star" template (art/crafting/acting website), built under a DIFFERENT name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. Design tokens captured from the original:

## Component breakdown

Render order as composed in `apps/crafty/src/App.tsx`:

### 1. Navbar
- The system SHALL render a sticky navbar with the site logo "Crafty" on the left and navigation links (Home, Generic, Elements) on the right. The navbar SHALL support a mobile hamburger menu.
- Scenario — Desktop navigation:
  - **GIVEN** the page is rendered
  - **WHEN** the navbar is displayed
  - **THEN** it SHALL show the site name "Crafty" as a link
  - **AND** it SHALL show links to Home, Generic, and Elements
- Scenario — Mobile menu:
  - **GIVEN** the page is rendered
  - **WHEN** the user presses the hamburger toggle
  - **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  - **AND** pressing the toggle again SHALL hide the menu
  - **AND** clicking a mobile link SHALL close the menu

### 2. Hero
- The system SHALL render a fullscreen hero section with a dark overlay (`#0f0f0f` with opacity), a large heading "Crafting Best Experience", a subtitle "Art and Crafting / Acting and Philosophy", and a "View Details" button with the primary brand style.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero banner is displayed
  - **THEN** it SHALL show the heading "Crafting Best Experience" (h1)
  - **AND** it SHALL show the subtitle "Art and Crafting / Acting and Philosophy"
  - **AND** it SHALL show a "View Details" button with white text on `#f5204b`
- Scenario — Hero overlay:
  - **GIVEN** the page is rendered
  - **WHEN** the hero banner is displayed
  - **THEN** the banner background SHALL have a dark overlay (`#0f0f0f` with

### 3. Experience
- The system SHALL render an experience section with two images on the left side and content on the right side including a heading, description text, and a "View Details" button.
- Scenario — Experience content:
  - **GIVEN** the page is rendered
  - **WHEN** the experience section is displayed
  - **THEN** it SHALL show two images on the left side
  - **AND** it SHALL show the heading "From the root of experience" (h2)
  - **AND** it SHALL show the subheading "We dig out the best talent"
  - **AND** it SHALL show a descriptive paragraph
  - **AND** it SHALL show a "View Details" button with primary brand style

### 4. Carousel
- The system SHALL render a carousel section with a dark overlay background and testimonial slides with previous/next navigation arrows.
- Scenario — Carousel display:
  - **GIVEN** the page is rendered
  - **WHEN** the carousel section is displayed
  - **THEN** it SHALL show a testimonial slide with content
  - **AND** it SHALL have a dark overlay background (`#0f0f0f` with opacity)
- Scenario — Carousel navigation:
  - **GIVEN** the carousel section is displayed
  - **WHEN** the user clicks the previous arrow
  - **THEN** the carousel SHALL navigate to the previous slide
  - **AND** when the user clicks the next arrow
  - **THEN** the carousel SHALL navigate to the next slide

### 5. Services
- The system SHALL render a services section with 4 centered service cards in a 4-column grid layout. Each card SHALL display an icon (vector illustration) and a service title.
- Scenario — Services content:
  - **GIVEN** the page is rendered
  - **WHEN** the services grid is displayed
  - **THEN** it SHALL contain 4 service cards
  - **AND** each card SHALL show an icon (replaced by lucide-react equivalent)
  - **AND** each card SHALL show a service title
- Scenario — Services layout:
  - **GIVEN** the page is rendered
  - **WHEN** the services grid is displayed
  - **THEN** the cards SHALL be arranged in a 4-column grid
  - **AND** each card SHALL be centered within its column

### 6. VideoSection
- The system SHALL render a video section with a dark background, a video thumbnail with a play button on the left, and descriptive text on the right.
- Scenario — Video content:
  - **GIVEN** the page is rendered
  - **WHEN** the video section is displayed
  - **THEN** it SHALL show a video thumbnail image on the left
  - **AND** it SHALL show a play button overlay on the thumbnail
  - **AND** it SHALL show the heading "From the root of experience" on the right
  - **AND** it SHALL show the subheading "We dig out the best talent" on the
  - **AND** it SHALL show a descriptive paragraph on the right
- Scenario — Video section styling:
  - **GIVEN** the page is rendered
  - **WHEN** the video section is displayed
  - **THEN** the section background SHALL be dark (`#0f0f0f` or equivalent)

### 7. ServicesHorizontal
- The system SHALL render a second services section with 3 horizontal service cards in a row layout. Each card SHALL display an icon and a service title.
- Scenario — Horizontal services content:
  - **GIVEN** the page is rendered
  - **WHEN** the horizontal services section is displayed
  - **THEN** it SHALL contain 3 service cards
  - **AND** each card SHALL show an icon (replaced by lucide-react equivalent)
  - **AND** each card SHALL show a service title
- Scenario — Horizontal services layout:
  - **GIVEN** the page is rendered
  - **WHEN** the horizontal services section is displayed
  - **THEN** the cards SHALL be arranged in a single row (3-column layout)

### 8. Contact
- The system SHALL render a contact section with contact information on the left (address, email, phone) and a contact form on the right (name, email, message fields and a send button).
- Scenario — Contact information:
  - **GIVEN** the page is rendered
  - **WHEN** the contact section is displayed
  - **THEN** it SHALL show the heading "Contact Us" (h2)
  - **AND** it SHALL show an address on the left
  - **AND** it SHALL show an email address on the left
  - **AND** it SHALL show a phone number on the left
- Scenario — Contact form:
  - **GIVEN** the page is rendered
  - **WHEN** the contact section is displayed
  - **THEN** it SHALL show a form on the right with fields for name, email,
  - **AND** the form SHALL have a "Send" submit button with primary brand style
  - **AND** the send button SHALL have white text on `#f5204b` background

### 9. Footer
- The system SHALL render a dark footer with 4 columns: About Agency links, Newsletter signup, Instafeed grid (8 images), and social icons. A bottom bar SHALL show copyright text and a link to Component Dock.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show a dark background
  - **AND** it SHALL show an "About Agency" column with links
  - **AND** it SHALL show a "Newsletter" column with an email signup form
  - **AND** it SHALL show an "Instafeed" column with 8 images
  - **AND** it SHALL show a social icons column
  - **AND** it SHALL show a copyright notice in the bottom bar
  - **AND** it SHALL link to https://www.componentdock.com/ with text

### Cross-cutting requirements

- **Page composition** — The system SHALL compose all sections in order (Navbar, HeroBanner, Experience, Carousel, ServicesGrid, VideoSection, ServicesHorizontal, Contact, Footer) and set the document title.
  - Scenario — Full page render: **GIVEN** the Crafty app is rendered; **WHEN** the page loads; **THEN** all sections SHALL be present in the correct order; **AND** the document title SHALL be "Crafty — Art & Creative Agency Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/crafty/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/crafty/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/crafty` ships on https://crafty.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/crafty/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/crafty/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crafty/public/CNAME` = `crafty.free.componentdock.com`
  and the package `homepage` = `https://crafty.free.componentdock.com`.
