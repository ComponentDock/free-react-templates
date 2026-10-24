# MonthGrid — Research & Task Outline
<!-- prep-status: shipped-as=calday -->
> **SHIPPED-UNDER** — the ColorLib `calendar-03` design this prep describes already
> ships as `apps/calday` (<https://calday.free.componentdock.com>).
> Do not scaffold `apps/monthgrid`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-calday/spec.md`.

## Source Reference

- **ColorLib Template**: Calendar 03 (`https://colorlib.com/wp/template/calendar-03/`)
- **Live Preview**: `https://preview.colorlib.com/theme/calendar-03/`
- **Assigned App Name**: `monthgrid`

## Structure & Section Order

1. **Header / Navbar**: App title, view switcher (Month / Year / List), theme toggle, and quick add event button.
2. **Main Two-Month View**: Side-by-side calendar grids for two active consecutive months with navigation arrows (`<` / `>`).
3. **Day Detail / Event Sidebar**: Collapsible sidebar showing scheduled events for the selected day.
4. **Footer**: Component Dock branding link (`https://www.componentdock.com/`).

## Fidelity Notes

- Replicate the dual-month grid layout.
- Use Tailwind CSS 4 with indigo primary accents and slate neutrals.
- Ensure fully accessible keyboard navigation and 100% test coverage during implementation.
