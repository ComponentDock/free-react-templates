# Caldesk — Implementation Tasks

Source design: **Calendar 14** (`https://colorlib.com/wp/template/calendar-14/`) → recreation name **caldesk**. Shipped at https://caldesk.free.componentdock.com.

Scope: A professional desktop datepicker and calendar widget template featuring a dual-calendar grid layout with month navigation. It also includes and a minimal branded footer. Recreation of ColorLib Calendar 14 (`https://colorlib.com/wp/template/calendar-14/`).

## Component breakdown

Render order as composed in `apps/caldesk/src/App.tsx`:

### 1. Calendar
- The CalDesk page SHALL display a datepicker input field with a calendar icon. Clicking the input or icon SHALL toggle a calendar popup open/closed. Selecting a date SHALL populate the input and close the popup.
- Scenario — Clicking input opens calendar popup:
  - **WHEN** the user clicks the datepicker input field
  - **THEN** the calendar popup becomes visible
- Scenario — Selecting a date populates input and closes popup:
  - **WHEN** the user clicks a day in the calendar
  - **THEN** the input displays the selected date and the popup closes

### 2. Footer
- The footer SHALL display copyright information and a link to `https://www.componentdock.com/` branded as "Component Dock". No references to ColorLib SHALL appear in the application code.
- Scenario — Footer renders Component Dock link:
  - **WHEN** the user views the footer
  - **THEN** it contains a link to componentdock.com branded as "Component Dock"

### Cross-cutting requirements

- **Interactive calendar grid with month navigation** — Each calendar instance SHALL display a month/year header flanked by previous and next navigation buttons, a weekday abbreviations row (Su Mo Tu We Th Fr Sa), and a 7-column date grid with correct alignment.
  - Scenario — Calendar renders correct day grid: **WHEN** the calendar displays a given month; **THEN** it shows the correct number of day buttons with empty cells before the 1st
  - Scenario — Month navigation with year rollover: **WHEN** the user clicks the previous or next button at the boundary of January/December; **THEN** the year increments or decrements accordingly

## Verification

- [x] `apps/caldesk` ships on https://caldesk.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/caldesk/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/caldesk/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/caldesk/public/CNAME` = `caldesk.free.componentdock.com`
  and the package `homepage` = `https://caldesk.free.componentdock.com`.
