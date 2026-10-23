# Credence — Implementation Tasks

Source design: **Cvportfolio** (`https://colorlib.com/wp/template/cvportfolio/`) → recreation name **credence**. Shipped at https://credence.free.componentdock.com.

Scope: Credence is a personal CV/portfolio landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Cvportfolio" design, built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/credence/src/App.tsx`:

### 1. ContactBar
- The system SHALL render a full-width orange contact bar at the top with three columns: address, phone/hours, and email/response time.
- Scenario — Contact bar content:
  - **GIVEN** the Credence page is rendered
  - **WHEN** the contact bar is visible
  - **THEN** it SHALL display an address ("3008 Sarah Drive, FrankinLA 70538"), phone number ("337-4139539"), hours ("MIN - FRI,8AM - 7PM"), and email ("contact@colorlib.com") with "REPLY IN 24 HOURS"

### 2. Hero
- The system SHALL render a hero section with a background image, a centered circular profile photo, the person's name, role, personal details, social links, and a "Download CV" button.
- Scenario — Hero content:
  - **GIVEN** the Credence page is rendered
  - **WHEN** the hero section is visible
  - **THEN** it SHALL display the name "Michel SMITH", role "Key Account Manager" in orange, Born date, email, marital status, social media icons, and a "Download CV" button
- Scenario — Profile photo:
  - **GIVEN** the hero is rendered
  - **THEN** the profile photo SHALL be displayed as a circle (rounded-full)

### 3. Portfolio
- The system SHALL render a portfolio section with category filter tabs and an image grid.
- Scenario — Portfolio heading:
  - **GIVEN** the Credence page is rendered
  - **WHEN** the portfolio section is visible
  - **THEN** it SHALL display "Portfolio" as the heading and "MY WORK" as the subtitle
- Scenario — Filter tabs:
  - **GIVEN** the portfolio section is rendered
  - **THEN** it SHALL display filter tabs: "ALL", "WEB DESIGN", "BRANDING", "GRAPHIC DESIGN"
  - **AND** "ALL" SHALL be the default active tab (orange underline/text)
- Scenario — Portfolio grid:
  - **GIVEN** the portfolio section is rendered
  - **THEN** it SHALL display a grid of portfolio images (minimum 6 images)

### 4. Footer
- The system SHALL render a footer that links to Component Dock.
- Scenario — Footer content:
  - **GIVEN** the Credence page is rendered
  - **WHEN** the footer is visible
  - **THEN** it SHALL contain a link to "https://www.componentdock.com/" branded as "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/credence/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/credence/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/credence` ships on https://credence.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/credence/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/credence/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/credence/public/CNAME` = `credence.free.componentdock.com`
  and the package `homepage` = `https://credence.free.componentdock.com`.
