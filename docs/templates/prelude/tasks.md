# Prelude — Implementation Tasks

Source design: **01 Comming Soon** (`https://colorlib.com/wp/template/01-comming-soon/`) → recreation name **prelude**. Shipped at https://prelude.free.componentdock.com.

Scope: A split-screen coming soon page template — dark left panel with countdown timer and email signup, right panel with background image. The preview at https://preview.colorlib.com/theme/01-comming-soon/ was unavailable; design based on the ColorLib page description ("split-screen design") and the screenshot. Design tokens:

## Component breakdown

Render order as composed in `apps/prelude/src/App.tsx`:

### 1. SplitHero
- The template SHALL render a full-viewport-height split-screen layout with a dark content panel on the left (50% width) and a background image on the right (50% width).
- Scenario — Hero layout renders split panels:
  - **WHEN** the page loads
  - **THEN** the heading "Coming Soon" is visible
  - **AND** a subheading describing the upcoming launch is visible
  - **AND** the right panel displays a background image

### 2. Footer
- The template SHALL display a footer linking to https://www.componentdock.com/.
- Scenario — Footer renders Component Dock link:
  - **WHEN** the page loads
  - **THEN** the footer displays a link to componentdock.com
  - **AND** the link text mentions "Component Dock"

### Cross-cutting requirements

- **Countdown timer** — The template SHALL display a live countdown timer with days, hours, minutes, and seconds until a target date.
  - Scenario — Countdown displays four time units: **WHEN** the page loads; **THEN** the labels "Days", "Hours", "Minutes", and "Seconds" are visible; **AND** each unit displays a numeric value
  - Scenario — Countdown updates every second: **WHEN** one second elapses; **THEN** the countdown values update
- **Email signup form** — The template SHALL provide an email signup form with an input field and a "Notify Me" submit button.
  - Scenario — Email form renders: **WHEN** the page loads; **THEN** an email input field with placeholder "Enter your email" is visible; **AND** a "Notify Me" button is visible
  - Scenario — Successful email submission: **WHEN** the user enters a valid email and clicks "Notify Me"; **THEN** a success message "Thank you" is displayed; **AND** the email input is no longer visible
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/prelude/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/prelude/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/prelude` ships on https://prelude.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/prelude/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/prelude/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/prelude/public/CNAME` = `prelude.free.componentdock.com`
  and the package `homepage` = `https://prelude.free.componentdock.com`.
