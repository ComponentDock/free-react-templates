# Alleluia — Implementation Tasks

Source design: **Mimosan** (`https://colorlib.com/wp/template/mimosan/`) → recreation name **alleluia**. Shipped at https://alleluia.free.componentdock.com.

Scope: Alleluia is a single-page church website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Mimosan" design (see TEMPLATES.md, Church category), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/alleluia/src/App.tsx`:

### 1. Navbar
- The template SHALL display a fixed navigation bar with the logo "Alleluia" in serif font, desktop navigation links (Sermons, Events, Contact), a search button, a mobile hamburger toggle, and a top bar with social links (Facebook, Twitter, Instagram).
- Scenario — Desktop navigation displays all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the logo "Alleluia" is visible
  - **AND** the nav links "Sermons", "Events", "Contact" are visible with correct anchor hrefs
- Scenario — Mobile menu toggles on click:
  - **WHEN** the user clicks the hamburger toggle button
  - **THEN** the mobile menu expands showing all nav links
  - **AND** clicking a mobile nav link closes the menu
- Scenario — Search button is present:
  - **WHEN** the page renders
  - **THEN** a search button with aria-label "Search" is visible

### 2. Hero
- The template SHALL display a fullscreen hero section with a background image, a heading "Our lives in praising God", descriptive subtext, and a "Discover More" CTA button linking to the About section.
- Scenario — Hero renders heading and CTA:
  - **WHEN** the page loads
  - **THEN** the h1 heading contains "Our lives in praising God"
  - **AND** a CTA button "Discover More" links to "#about"
- Scenario — Hero has background image:
  - **WHEN** the page loads
  - **THEN** a div with background-image style is present covering the viewport

### 3. About
- The template SHALL display a two-column About section with a placeholder image, a heading "Who We Are", descriptive paragraphs, and a "Learn More" CTA button.
- Scenario — About section renders correctly:
  - **WHEN** the page loads
  - **THEN** the heading "Who We Are" is visible
  - **AND** a placeholder image with alt text "Church community" is displayed
  - **AND** a CTA button "Learn More" links to "#contact"

### 4. Events
- The template SHALL display an Events section with at least 3 event cards, each showing a date badge (day + month), title, description, time, and location with icons.
- Scenario — Events render with all data:
  - **WHEN** the page loads
  - **THEN** the heading "Upcoming Events" is visible
  - **AND** at least 3 event cards are displayed with titles
  - **AND** each card shows a date badge and time/location info

### 5. Sermons
- The template SHALL display a Sermons section with 3 sermon cards in a grid, each showing an image, title, preacher name, and date.
- Scenario — Sermons render with all data:
  - **WHEN** the page loads
  - **THEN** the heading "Recent Sermons" is visible
  - **AND** 3 sermon cards are displayed with titles, preacher names, and images

### 6. Gallery
- The template SHALL display a Gallery section with a 3x3 grid of images linking to full-size versions.
- Scenario — Gallery renders 9 images:
  - **WHEN** the page loads
  - **THEN** the heading "Our Gallery" is visible
  - **AND** 9 images are displayed in a grid
  - **AND** each image links to a full-size version in a new tab

### 7. Footer
- The template SHALL display a dark footer with contact information, quick links, a newsletter subscribe form, and a "Component Dock" attribution link to https://www.componentdock.com/.
- Scenario — Footer renders Component Dock link:
  - **WHEN** the page loads
  - **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is visible
  - **AND** the link opens in a new tab
- Scenario — Footer newsletter form works:
  - **WHEN** the user enters an email and clicks Subscribe
  - **THEN** the form submits and the email field is cleared
- Scenario — Footer shows contact info:
  - **WHEN** the page loads
  - **THEN** contact details (address, phone, email) are visible

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/alleluia/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/alleluia/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/alleluia` ships on https://alleluia.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/alleluia/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/alleluia/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/alleluia/public/CNAME` = `alleluia.free.componentdock.com`
  and the package `homepage` = `https://alleluia.free.componentdock.com`.
