# Daylark — Implementation Outline & Design Notes
<!-- prep-status: shipped-as=calgrid -->
> **SHIPPED-UNDER** — the ColorLib `calendar-12` design this prep describes already
> ships as `apps/calgrid` (<https://calgrid.free.componentdock.com>).
> Do not scaffold `apps/daylark`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-calgrid/spec.md`.

## Tasks / Todo Outline

1. **Scaffold App**: Create `apps/daylark` with Vite + React + Tailwind v4 + TypeScript. Configure `vite.config.ts` with `injectUiSource()`.
2. **Setup State & Mock Data**: Define types for events, categories, and calendar navigation (current year/month/day).
3. **Components**:
   - `Navbar.tsx`: Top navigation, search, view mode toggles, user profile.
   - `Sidebar.tsx`: Mini calendar picker, category filters, quick upcoming summary.
   - `CalendarGrid.tsx`: Main monthly/weekly calendar view with day cells and event badges.
   - `EventModal.tsx`: Create / edit event dialog.
   - `Footer.tsx`: Branding and Component Dock footer link.
4. **Tests & Coverage**: Write comprehensive Vitest unit/component tests ensuring 100% coverage.
5. **Surge & CNAME**: Configure `public/CNAME` with `daylark.free.componentdock.com`.

## Design Notes

- **Aesthetic**: Clean, modern productivity calendar inspired by Calendar 12.
- **Colors**: Indigo & slate palette with high contrast and accessibility compliance.
