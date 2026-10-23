# Kairos — Implementation Tasks

Source design: **Calendar 17** (`https://colorlib.com/wp/template/calendar-17/`) → recreation name **kairos**. Shipped at https://kairos.free.componentdock.com.

Scope: Kairos is a minimal single-page inline date-picker template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/kairos/src/App.tsx`:

### 1. ResultField
- Users SHALL see a disabled input field with placeholder text "Select date".
- Scenario — Input placeholder:
  - **WHEN** I visit the Kairos page
  - **THEN** I see a disabled input with placeholder "Select date"

### 2. Calendar
- Users SHALL see the current month calendar with weekday headers and day cells.
- Scenario — Calendar grid:
  - **WHEN** I visit the Kairos page
  - **THEN** I see the current month and year label
  - **AND** I see 7 weekday column headers (Su, Mo, Tu, We, Th, Fr, Sa)
  - **AND** I see all days of the current month as selectable buttons

### 3. Footer
- The footer SHALL link to https://www.componentdock.com/ opening in a new tab.
- Scenario — Footer link:
  - **WHEN** I visit the Kairos page
  - **THEN** I see a footer with a link to "https://www.componentdock.com/"
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Render page heading** — Users SHALL see a heading "Inline Date Picker" on page load.
  - Scenario — Heading visible: **WHEN** I visit the Kairos page; **THEN** I see a heading "Inline Date Picker"
- **Preselect today** — The calendar SHALL preselect today's date on first render.
  - Scenario — Today selected: **WHEN** today is August 15, 2026; **THEN** day "15" has aria-selected="true"
- **Update result input on day click** — When a user clicks a day, the result input SHALL display the formatted date.
  - Scenario — Click day: **WHEN** I click day "20"; **THEN** the result input shows "August 20, 2026"
- **Navigate to next month** — Users SHALL be able to navigate to the next month via the next button.
  - Scenario — Next month navigation: **WHEN** I click the "Next month" button; **THEN** the month label shows the next month; **AND** the result input still shows the previously selected date
- **Navigate to previous month** — Users SHALL be able to navigate to the previous month via the previous button.
  - Scenario — Previous month navigation: **WHEN** I click the "Previous month" button; **THEN** the month label shows the previous month
- **Adjacent-month days not selectable** — Adjacent-month day cells SHALL NOT be selectable.
  - Scenario — Click adjacent day: **WHEN** I click an adjacent-month day; **THEN** it remains unselected (aria-selected="false")
- **Keyboard activation on day cell** — Day cells SHALL be activatable via Enter or Space key.
  - Scenario — Enter key: **WHEN** I press Enter on a day cell; **THEN** the day becomes selected
  - Scenario — Space key: **WHEN** I press Space on a day cell; **THEN** the day becomes selected
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/kairos/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/kairos/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; **Original:** ColorLib "Calendar 17" — one of the 20 "Bootstrap Calendars"; **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/calendar-17/`

## Verification

- [x] `apps/kairos` ships on https://kairos.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/kairos/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/kairos/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kairos/public/CNAME` = `kairos.free.componentdock.com`
  and the package `homepage` = `https://kairos.free.componentdock.com`.
