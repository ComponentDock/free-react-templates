# Template: Calpulse (Productivity / Calendar)
<!-- prep-status: shipped-as=calmark -->
> **SHIPPED-UNDER** — the ColorLib `calendar-05` design this prep describes already
> ships as `apps/calmark` (<https://calmark.free.componentdock.com>).
> Do not scaffold `apps/calpulse`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-calmark/spec.md`.

## Purpose

Recreation of ColorLib Calendar V05 (`https://colorlib.com/wp/template/calendar-05/`, preview: `https://preview.colorlib.com/theme/bootstrap/calendar-05/`), built as a modern React 19 + Vite + Tailwind CSS 4 application named `calpulse`.

## Design tokens

- **Primary / Year panel background**: `#7e0cf5` (Deep Violet)
- **Month panel background**: `#983df7` (Medium Purple)
- **Day panel background**: `#a555f8` (Lighter Purple)
- **Previous/Next side strips**: `rgba(0, 0, 0, 0.5)` with `opacity: 0.3` on text
- **Font family**: `'Lato'`, sans-serif
- **Heading color**: `#000000` / `#ffffff`
- **Layout**: 3-column horizontal grid (`year`, `month`, `day`), each with previous (past), current (active), and next (future) cards.

## Requirements

### Feature: Calpulse Calendar Display

As a user visiting the calendar dashboard, I want to view the current year, month, and day alongside their previous and next offset values so I can quickly understand temporal context.

#### Scenario: Display current temporal grid

- **GIVEN** the user opens the Calpulse web app
- **WHEN** the application loads current date and time
- **THEN** it renders three distinct columns: Year, Month, and Day
- **AND** each column displays a previous value, a prominent current value with its label, and a next value
- **AND** the Year column uses deep violet (`#7e0cf5`), the Month column uses medium purple (`#983df7`), and the Day column uses lighter purple (`#a555f8`)

#### Scenario: Component Dock footer attribution

- **GIVEN** the footer is rendered at the bottom of the page
- **WHEN** the user views the footer
- **THEN** it includes a link to `https://www.componentdock.com/` branded as "Component Dock"

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest tests pass with 100% coverage (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No references to ColorLib in app code
