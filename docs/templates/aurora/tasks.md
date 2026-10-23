# Aurora — Implementation Tasks

Source design: **Maze** (`https://colorlib.com/wp/template/maze/`) → recreation name **aurora**. Shipped at https://aurora.free.componentdock.com.

Scope: Aurora is a single-page style & fashion template — the flagship template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/aurora/src/App.tsx`:

### 1. Navbar
- The system SHALL render a pink navbar with the site name "Aurora", section links (Home, Arrivals, Gallery, Features, Contact), and a hamburger toggle that opens a mobile menu on small screens.
- Scenario — Desktop navigation:
  - **GIVEN** the page is rendered
  - **WHEN** the navbar is displayed
  - **THEN** it SHALL show the site name "Aurora" linking to `#home`
  - **AND** it SHALL show links to Home, Arrivals, Gallery, Features and Contact
- Scenario — Mobile menu:
  - **GIVEN** the page is rendered
  - **WHEN** the user presses the hamburger toggle
  - **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  - **AND** pressing the toggle again SHALL hide the menu
  - **AND** clicking a mobile link SHALL close the menu

### 2. Hero
- The system SHALL render a split hero on the brand pink background with a headline, supporting paragraph, a white pill "Send Message" button, and a portrait image.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero is displayed
  - **THEN** it SHALL contain the headline "New Styles, Suited for You Unlike Any
  - **AND** it SHALL contain a "Send Message" button and a portrait image with an

### 3. Arrivals
- The system SHALL render a white "What's New" section with three cards, each with an image, a title, a blurb and a "Learn Details" link.
- Scenario — Arrival cards:
  - **GIVEN** the page is rendered
  - **WHEN** the arrivals section is displayed
  - **THEN** it SHALL show the section heading
  - **AND** it SHALL show cards titled "Fresh Arrivals", "Online Store" and

### 4. Parallax
- The system SHALL render two full-width image tiles with dark gradient overlays, titles and captions.
- Scenario — Image tiles:
  - **GIVEN** the page is rendered
  - **WHEN** the parallax section is displayed
  - **THEN** it SHALL show tiles titled "Peak Collection" and "Night Market",

### 5. Gallery
- The system SHALL render a "Lookbook" gallery with a grid of six images.
- Scenario — Gallery grid:
  - **GIVEN** the page is rendered
  - **WHEN** the gallery is displayed
  - **THEN** it SHALL show the "Lookbook" heading
  - **AND** it SHALL show six images with accessible labels

### 6. Features
- The system SHALL render a "Why Aurora" section with six feature tiles, each with a pink icon, a title and a blurb.
- Scenario — Feature tiles:
  - **GIVEN** the page is rendered
  - **WHEN** the features section is displayed
  - **THEN** it SHALL show the "Why Aurora" heading
  - **AND** it SHALL show tiles titled "Parallax Support", "HTML5 Video",

### 7. Performance
- The system SHALL render a two-column "Built to Perform" section with two points ("Powerful Performance", "Light & Dark Color Schemes") and an image.
- Scenario — Performance content:
  - **GIVEN** the page is rendered
  - **WHEN** the performance section is displayed
  - **THEN** it SHALL show the "Built to Perform" heading and both point headings
  - **AND** it SHALL show the section image

### 8. Newsletter
- The system SHALL render a pink newsletter section with an email form. Submitting an invalid email SHALL show an error; a valid email SHALL show a success message and clear the field.
- Scenario — Invalid email:
  - **GIVEN** the newsletter form is displayed
  - **WHEN** the user submits an empty or invalid email
  - **THEN** an error message SHALL be displayed
  - **AND** the success message SHALL NOT be shown
- Scenario — Successful subscription:
  - **GIVEN** the newsletter form is displayed
  - **WHEN** the user submits a valid email
  - **THEN** a success message SHALL be displayed
  - **AND** the email field SHALL be cleared

### 9. Footer
- The system SHALL render a dark footer with the site name, a tagline, and social links (Facebook, Twitter, Instagram, LinkedIn) that open in a new tab.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show the site name and tagline
  - **AND** it SHALL show the four social links with `target="_blank"`

### Cross-cutting requirements

- **Page composition** — The system SHALL compose all sections in order (Navbar, Hero, Arrivals, Parallax, Gallery, Features, Performance, Newsletter, Footer) inside a main landmark, and set the document title.
  - Scenario — Full page render: **GIVEN** the Aurora app is rendered; **WHEN** the page loads; **THEN** all sections SHALL be present in the main landmark; **AND** the document title SHALL be "Aurora — Style & Fashion Template"
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/aurora/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/aurora/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/aurora` ships on https://aurora.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/aurora/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/aurora/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/aurora/public/CNAME` = `aurora.free.componentdock.com`
  and the package `homepage` = `https://aurora.free.componentdock.com`.
