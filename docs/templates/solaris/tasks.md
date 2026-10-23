# Solaris — Implementation Tasks

Source design: **Sun** (`https://colorlib.com/wp/template/sun/`) → recreation name **solaris**. Shipped at https://solaris.free.componentdock.com.

Scope: Solaris is a single-page creative portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Sun" HTML template (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/solaris/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "Solaris" (logo), anchor links, and a search toggle icon.
- Scenario — Navbar content:
  - **GIVEN** the Solaris page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the site name "Solaris" on the left as a
  - **AND** the navbar SHALL show links to Home, About, Portfolio, Blog, and
  - **AND** the navbar SHALL show a search icon toggle on the far right
- Scenario — Active link styling:
  - **GIVEN** the Solaris page is rendered
  - **WHEN** the user is on the Home page
  - **THEN** the Home link SHALL be highlighted in red (#FD3137)
  - **AND** inactive links SHALL be displayed in dark text (#191919)

### 2. Intro
- The system SHALL display a short introductory paragraph below the header, positioned to the right side of the content area.
- Scenario — Intro text content:
  - **GIVEN** the Solaris page is rendered
  - **WHEN** the user views the intro section
  - **THEN** a descriptive paragraph SHALL be visible at the top of the content

### 3. PortfolioFilter
- The system SHALL render a filter bar with category buttons separated by dot markers, allowing the user to filter the portfolio grid.
- Scenario — Filter buttons visible:
  - **GIVEN** the Solaris page is rendered
  - **WHEN** the user views the portfolio section
  - **THEN** filter buttons SHALL be displayed: All, Post, Image, Video, Extern
  - **AND** the "All" button SHALL be active (red text) by default
  - **AND** buttons SHALL be separated by dot separators (·)
- Scenario — Filter interaction:
  - **GIVEN** the Solaris page is rendered
  - **WHEN** the user clicks the "Image" filter
  - **THEN** only portfolio items tagged as "image" SHALL be visible
  - **AND** the "Image" button SHALL become active (red)
  - **AND** the "All" button SHALL become inactive

### 4. PortfolioGrid
- The system SHALL display a masonry-style portfolio grid with image cards that show an overlay caption on hover.
- Scenario — Grid layout:
  - **GIVEN** the Solaris page is rendered
  - **WHEN** the user views the portfolio grid
  - **THEN** a 3-column grid of portfolio items SHALL be displayed
  - **AND** each item SHALL show an image with a placeholder from picsum
- Scenario — Hover overlay:
  - **GIVEN** the Solaris page is rendered
  - **WHEN** the user hovers over a portfolio item
  - **THEN** a dark overlay SHALL fade in over the image
  - **AND** the item caption SHALL appear in white uppercase text

### 5. TextSection
- The system SHALL render a two-column text section below the portfolio grid.
- Scenario — Column content:
  - **GIVEN** the Solaris page is rendered
  - **WHEN** the user scrolls to the text section
  - **THEN** the left column SHALL display a "The Story" heading with
  - **AND** the right column SHALL display a "Dreamers" heading with
  - **AND** the right column SHALL include a "More…" text link that turns

### 6. Footer
- The system SHALL render a footer with copyright text, a centered logo, and social media links.
- Scenario — Footer layout:
  - **GIVEN** the Solaris page is rendered
  - **WHEN** the user scrolls to the footer
  - **THEN** the footer SHALL display copyright text on the left with a
  - **AND** the footer SHALL display the Solaris logo centered
  - **AND** the footer SHALL display social links (Twitter, LinkedIn,
- Scenario — Footer Component Dock link:
  - **GIVEN** the Solaris page is rendered
  - **WHEN** the user inspects the footer
  - **THEN** the footer SHALL contain a link to https://www.componentdock.com/

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/solaris/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/solaris/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Header: logo "Solaris" left, nav links right (Home, About, Portfolio,; [ ] Intro paragraph: 24px Montserrat, right-aligned description; [ ] Filter bar: All | Post | Image | Video | Extern with dot separators; [ ] Portfolio grid: 3-column masonry, 6 items, hover overlay with caption; [ ] Two-column section: "The Story" left, "Dreamers" right with "More…" link; [ ] Footer: copyright + heart + logo + social links (Twitter, LinkedIn,; [ ] Footer: Component Dock link present; [ ] Colors: accent #FD3137, body bg #E2E0E0, card bg #FFFFFF, ink #191919; [ ] Fonts: Montserrat (body), PT Serif (headings) via Google Fonts; [ ] No ColorLib references in app code; [ ] Images use seeded picsum placeholders; [ ] Icons use lucide-react; [ ] 100% test coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/solaris` ships on https://solaris.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/solaris/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/solaris/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/solaris/public/CNAME` = `solaris.free.componentdock.com`
  and the package `homepage` = `https://solaris.free.componentdock.com`.
