# Calday — Implementation Tasks

Source design: **Calendar 03** (`https://colorlib.com/wp/template/calendar-03/`) → recreation name **calday**. Shipped at https://calday.free.componentdock.com.

Scope: A dual side-by-side interactive calendar component built with React 19, Tailwind CSS 4, and TypeScript. Recreation of ColorLib "Calendar 03" (https://colorlib.com/wp/template/calendar-03/) as "CalDay".

## Component breakdown

Render order as composed in `apps/calday/src/App.tsx`:

### 1. Calendar
- Each calendar SHALL maintain its own month state so navigating one does not affect the other.
- Scenario — Navigate one calendar independently:
  - **GIVEN** both calendars show the same month
  - **WHEN** I click "next month" on the left calendar
  - **THEN** the left calendar advances one month
  - **AND** the right calendar still shows the original month

### 2. Footer
- The page footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer link:
  - **GIVEN** the page loads
  - **WHEN** I look at the footer
  - **THEN** I see "More templates at Component Dock"
  - **AND** the link points to https://www.componentdock.com/

### Cross-cutting requirements

- **Two calendars render side by side** — Users SHALL see two independent calendar panels displayed in a two-column layout on desktop and stacked on mobile.
  - Scenario — Page loads with two calendars: **WHEN** the page loads; **THEN** I see two calendar panels; **AND** each panel has its own month/year header
- **Month navigation via chevrons** — Each calendar SHALL have left and right chevron buttons to navigate between months.
  - Scenario — Previous month navigation: **GIVEN** a calendar showing August 2026; **WHEN** I click the left chevron; **THEN** the calendar shows July 2026
  - Scenario — Next month navigation: **GIVEN** a calendar showing August 2026; **WHEN** I click the right chevron; **THEN** the calendar shows September 2026
  - Scenario — Year rollover: **GIVEN** a calendar showing December 2024; **WHEN** I click the right chevron; **THEN** the calendar shows January 2025
- **Today is visually highlighted** — Today's date cell SHALL have a purple (#bd83ce) background with white text and include "(today)" in its accessible label.
  - Scenario — Today highlighting: **GIVEN** the page loads; **WHEN** I look at today's date cell; **THEN** it has a purple background; **AND** the text color is white; **AND** the accessible label includes "(today)"
- **Correct grid for each month** — The date grid SHALL show the correct number of days with proper leading blanks for the first day of the month.
  - Scenario — Blank cells before the 1st: **GIVEN** a month that starts on Wednesday; **WHEN** the calendar renders; **THEN** there are 3 blank cells before day 1
  - Scenario — Correct day count: **GIVEN** a month with 31 days; **WHEN** the calendar renders; **THEN** there are 31 date buttons
- **Weekday header row** — Each calendar SHALL display a row of weekday abbreviations (Sun–Sat) above the date grid.
  - Scenario — Weekday abbreviations: **GIVEN** the page loads; **THEN** I see Sun, Mon, Tue, Wed, Thu, Fri, Sat in order
- **Accessible navigation buttons** — Navigation buttons SHALL have descriptive aria-labels.
  - Scenario — Accessible labels: **GIVEN** the page loads; **THEN** each navigation button has an aria-label; **AND** each date cell has an aria-label with the date and month
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/calday/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/calday/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/calday` ships on https://calday.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/calday/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/calday/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/calday/public/CNAME` = `calday.free.componentdock.com`
  and the package `homepage` = `https://calday.free.componentdock.com`.
