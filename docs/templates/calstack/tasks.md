# Calstack — Implementation Tasks

Source design: **Calendar 15** (`https://colorlib.com/wp/template/calendar-15/`) → recreation name **calstack**. Shipped at https://calstack.free.componentdock.com.

Scope: An interactive calendar date picker and event scheduling interface featuring dual month grids with navigation and a minimal branded footer. Recreation of ColorLib Calendar 15 (`https://colorlib.com/wp/template/calendar-15/`).

## Component breakdown

Render order as composed in `apps/calstack/src/App.tsx`:

### 1. Calendar
- Each calendar instance SHALL display a month/year header flanked by previous and next navigation buttons, a weekday abbreviations row (Sun Mon Tue Wed Thu Fri Sat), and a 7-column date grid with correct alignment. Today's date SHALL be highlighted with an accent background.
- Scenario — Calendar renders correct day grid:
  - **WHEN** the calendar displays a given month
  - **THEN** it shows the correct number of day buttons with empty cells before the 1st
- Scenario — Month navigation with year rollover:
  - **WHEN** the user clicks the previous or next button at the boundary of January/December
  - **THEN** the year increments or decrements accordingly
- Scenario — Today is highlighted:
  - **WHEN** the calendar renders the current month
  - **THEN** today's date button has an accent background and includes "(today)" in its accessible label

### 2. Footer
- The footer SHALL display a link to `https://www.componentdock.com/` branded as "Component Dock". No references to ColorLib SHALL appear in the application code.
- Scenario — Footer renders Component Dock link:
  - **WHEN** the user views the footer
  - **THEN** it contains a link to componentdock.com branded as "Component Dock"

### Cross-cutting requirements

- **Dual calendar layout** — The page SHALL display two side-by-side calendar instances in a responsive grid that stacks on mobile.
  - Scenario — Both calendars render with the same initial month: **WHEN** the page loads; **THEN** both calendars show the current month and year

## Verification

- [x] `apps/calstack` ships on https://calstack.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/calstack/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/calstack/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/calstack/public/CNAME` = `calstack.free.componentdock.com`
  and the package `homepage` = `https://calstack.free.componentdock.com`.
