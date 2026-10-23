# Jade — Implementation Tasks

Source design: **Accordion 20** (`https://colorlib.com/wp/template/accordion-20/`) → recreation name **jade**. Shipped at https://jade.free.componentdock.com.

Scope: An elegant FAQ / accordion template built with React 19, TypeScript, and Tailwind CSS 4. Recreation of ColorLib Accordion 20 as **Jade**.

## Component breakdown

No `components/` directory — the bands are composed inline in `apps/jade/src/App.tsx`. Order below follows the spec's requirements.

### 1. Hero & Heading
- Users SHALL see a clear title and description representing the accordion showcase.
- Scenario — Display header:
  - **WHEN** the user loads Jade
  - **THEN** they see the main title and introduction

### 2. Interactive Accordion
- Users SHALL be able to expand and collapse accordion items interactively.
- Scenario — Expand accordion item:
  - **WHEN** the user clicks an accordion item header
  - **THEN** the accordion item expands to reveal its content

### 3. Footer
- Users SHALL see a copyright footer with a branded link to Component Dock.
- Scenario — Display footer:
  - **WHEN** the user scrolls to the bottom of the page
  - **THEN** they see the footer containing the Component Dock link

### 4. Component Dock attribution
- The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
- Scenario — Footer attribution:
  - **GIVEN** any page of the template is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL contain an anchor whose `href` is
  - **AND** the anchor's text SHALL name Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/jade/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/jade/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/jade` ships on https://jade.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/jade/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/jade/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jade/public/CNAME` = `jade.free.componentdock.com`
  and the package `homepage` = `https://jade.free.componentdock.com`.
