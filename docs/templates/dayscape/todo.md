# Dayscape — Implementation Todo

## Phase 1: Setup & Types

- [ ] Create `apps/dayscape` workspace (copy from simplest existing app like `apps/chrono`)
- [ ] Update `package.json` name to `@free-react-templates/dayscape`
- [ ] Update `vite.config.ts` with `injectUiSource()` and correct `homepage` / `public/CNAME`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Define TypeScript types: `SelectedDate`, `CalendarMonth`, `Week[]`, `DayCell`

## Phase 2: Core Logic (TDD - tests first)

- [ ] `utils/date-utils.ts` — month grid calculation, formatting, navigation
  - [ ] `getMonthGrid(date: Date): Week[]` — returns 6 weeks of 7 days
  - [ ] `formatDateInput(date: Date): string` — "MM/DD/YYYY hh:mm:ss"
  - [ ] `addMonths(date: Date, n: number): Date`
  - [ ] `isSameDay(a: Date, b: Date): boolean`
  - [ ] `isCurrentMonth(day: Date, baseMonth: Date): boolean`
- [ ] Tests for all utility functions (100% coverage)

## Phase 3: Components (TDD - tests first)

- [ ] `components/Datepicker.tsx` — main component
  - [ ] State: `selectedDate`, `currentMonth`, `isOpen` (though design shows inline)
  - [ ] Renders input + calendar grid
  - [ ] Handles date click, month nav, footer icons
- [ ] `components/MonthHeader.tsx` — month label + prev/next arrows
- [ ] `components/DayHeaders.tsx` — Su Mo Tu We Th Fr Sa row
- [ ] `components/DateGrid.tsx` — 6×7 grid of DayCell
- [ ] `components/DayCell.tsx` — individual date button
- [ ] `components/FooterIcons.tsx` — chevron-up, clock, trash, X
- [ ] `components/DateInput.tsx` — styled input field

## Phase 4: App Composition

- [ ] `src/App.tsx` — page layout with header, datepicker card, footer
- [ ] `src/index.css` — Tailwind entry + `@theme` tokens (blue-500, rose-600)
- [ ] `src/main.tsx` — entry point

## Phase 5: Polish & Verification

- [ ] Dark mode support (`dark:` variants)
- [ ] Responsive: mobile < 640px adjustments
- [ ] Touch targets ≥ 44px
- [ ] Focus-visible rings on all interactive elements
- [ ] Footer: "Made with Component Dock" → https://www.componentdock.com/
- [ ] Run `scripts/verify-app.sh dayscape` until green
- [ ] Update TEMPLATES.md with `[x]` + surge URL + homepage
- [ ] Run `npm run readme:status`

## Definition of Done

- [ ] All tests pass with 100% coverage
- [ ] TypeScript strict: no errors
- [ ] Lint: no errors
- [ ] Build: succeeds
- [ ] Visual match to screenshot (within design token fidelity)
- [ ] No ColorLib references in app code
- [ ] Component Dock footer link present
