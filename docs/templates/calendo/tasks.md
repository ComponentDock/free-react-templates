# Tasks & Design Notes: Calendo (Calendar 05 Recreation)

## Overview

- **Source**: Colorlib Calendar V05 (`https://colorlib.com/wp/template/calendar-05/`)
- **New App Name**: `calendo`
- **Package**: `@free-react-templates/calendo`
- **Deploy Target**: `calendo.free.componentdock.com`

## Implementation Checklist

- [ ] Scaffold `apps/calendo` (copy minimal structure, rename package, configure `vite.config.ts` with `injectUiSource()`, setup `public/CNAME`).
- [ ] Register workspace in root `package.json` / run `npm install`.
- [ ] Build shared UI components & design tokens in `src/index.css` (Poppin font, Indigo primary `#4f46e5`, Tailwind v4 theme).
- [ ] Build section components:
  - [ ] `Navbar.tsx` (brand, date switcher, view toggles, actions)
  - [ ] `DateRibbon.tsx` (yesterday / today / tomorrow quick bar)
  - [ ] `CalendarGrid.tsx` (monthly interactive grid with event badges)
  - [ ] `EventSidebar.tsx` (agenda list, upcoming meetings)
  - [ ] `Footer.tsx` (copyright + Component Dock link)
- [ ] Assemble in `src/App.tsx`.
- [ ] Write Vitest test suite (`App.test.tsx`, component tests) achieving **100% test coverage**.
- [ ] Verify build, lint, typecheck, and coverage (`scripts/verify-app.sh calendo`).
- [ ] Deploy / bookkeep in `TEMPLATES.md`.
