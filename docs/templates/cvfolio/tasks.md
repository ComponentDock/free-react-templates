# Cvfolio — Implementation Tasks

Source design: **Cvportfolio** (`https://colorlib.com/wp/template/cvportfolio/`) → recreation name **cvfolio**. Shipped at https://cvfolio.free.componentdock.com.

Scope: A boxed CV/portfolio/resume single-page template with a yellow accent, profile photo, portfolio grid, and work experience. Recreation of ColorLib "Cvportfolio".

## Component breakdown

Render order as composed in `apps/cvfolio/src/App.tsx`:

### 1. Header
- The template SHALL display a yellow header bar with contact information and a Download CV button.
- Scenario — Header displays contact information:
  - **WHEN** the page is loaded
  - **THEN** a header bar is visible at the top
  - **AND** the header contains address, phone, and email columns
  - **AND** a "Download CV" button is visible in the header
  - **AND** the header background is yellow (#FFAD01)
- Scenario — Header is fixed above hero content:
  - **WHEN** the page is loaded
  - **THEN** the header sits above the hero background image

### 2. Profile
- The template SHALL display a profile section with a circular photo, name, job title, personal info, and social icons.
- Scenario — Profile displays name and job title:
  - **WHEN** the page is loaded
  - **THEN** the intro section shows a circular profile photo
  - **AND** a name heading is displayed
  - **AND** a job title subtitle is displayed
- Scenario — Personal info list is shown:
  - **WHEN** the page is loaded
  - **THEN** a list of personal details (DOB, email, marital status) is visible
- Scenario — Social icons row is interactive:
  - **WHEN** the page is loaded
  - **THEN** 5 social icons are displayed (Pinterest, LinkedIn, Instagram, Facebook, Twitter)
  - **AND** hovering an icon transitions its background to yellow (#FFA804)

### 3. Portfolio
- The template SHALL display a portfolio section with filter tabs and a masonry grid of images.
- Scenario — Portfolio heading with accent underline:
  - **WHEN** the page is loaded
  - **THEN** a "Portfolio" heading is displayed with "MY WORK" subtitle
  - **AND** a yellow accent bar appears above the heading
- Scenario — Filter tabs are rendered:
  - **WHEN** the page is loaded
  - **THEN** filter tabs are shown: ALL, WEB DESIGN, BRANDING, GRAPHIC DESIGN
  - **AND** "ALL" is the active/default filter
- Scenario — Portfolio grid shows images:
  - **WHEN** the page is loaded
  - **THEN** a masonry-style grid of portfolio images is displayed
  - **AND** items are arranged in 3 columns
  - **AND** some items show 2 stacked images side by side

### 4. About
- The template SHALL display an About Me section with a paragraph and 4 radial progress bars.
- Scenario — About me content and skill bars:
  - **WHEN** the page is loaded
  - **THEN** an "About me" heading is displayed with "PROFESSIONAL PATH" subtitle
  - **AND** a descriptive paragraph is shown
  - **AND** 4 radial progress bars are displayed (HTML5, Web Design, Java, PHP)

### 5. Experience
- The template SHALL display a Work Experience section with a dark background and experience entries.
- Scenario — Experience entries are listed:
  - **WHEN** the page is loaded
  - **THEN** a "Work Experience" heading is displayed with "PREVIOUS JOBS" subtitle
  - **AND** 2 experience entries are shown
  - **AND** each entry has a job title, company, date range, description, and bullet list
  - **AND** company names are styled in yellow accent color

### 6. Education
- The template SHALL display an Education section with degree and institution entries.
- Scenario — Education entries are listed:
  - **WHEN** the page is loaded
  - **THEN** an "Education" heading is displayed with "ACADEMIC CAREER" subtitle
  - **AND** education entries show degree, institution, and graduation info

### 7. Stats
- No dedicated spec block — hold this band to the design notes.

### 8. Footer
- The template SHALL display a footer with a link to Component Dock.
- Scenario — Footer contains Component Dock link:
  - **WHEN** the page is loaded
  - **THEN** a footer is visible at the bottom
  - **AND** it links to https://www.componentdock.com/

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cvfolio/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cvfolio/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/cvfolio` ships on https://cvfolio.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cvfolio/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cvfolio/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cvfolio/public/CNAME` = `cvfolio.free.componentdock.com`
  and the package `homepage` = `https://cvfolio.free.componentdock.com`.
