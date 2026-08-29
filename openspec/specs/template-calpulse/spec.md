# Template: Calpulse (Productivity / Calendar)

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

## Gherkin requirements & scenarios

### Feature: Calpulse Calendar Display

As a user visiting the calendar dashboard, I want to view the current year, month, and day alongside their previous and next offset values so I can quickly understand temporal context.

#### Scenario: Display current temporal grid

- Given the user opens the Calpulse web app
- When the application loads current date and time
- Then it renders three distinct columns: Year, Month, and Day
- And each column displays a previous value, a prominent current value with its label, and a next value
- And the Year column uses deep violet (`#7e0cf5`), the Month column uses medium purple (`#983df7`), and the Day column uses lighter purple (`#a555f8`)

#### Scenario: Component Dock footer attribution

- Given the footer is rendered at the bottom of the page
- When the user views the footer
- Then it includes a link to `https://www.componentdock.com/` branded as "Component Dock"

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest tests pass with 100% coverage (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No references to ColorLib in app code
