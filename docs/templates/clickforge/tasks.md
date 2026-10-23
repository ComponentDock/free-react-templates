# ClickForge — Implementation Plan & Tasks
<!-- prep-status: shipped-as=btnridge -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-12` design this prep describes shipped
> as `apps/btnridge` (<https://btnridge.free.componentdock.com>).
> The unchecked items below are prep history, not outstanding work.

## Design Notes

- **Source**: ColorLib Bootstrap Buttons 12 (archived preview)
- **Aesthetic**: Clean, modern developer toolkit UI with dark header/sidebar and rich interactive button playground.
- **Components to build**:
  - `Navbar.tsx`: Brand logo, navigation tabs, GitHub link.
  - `Hero.tsx`: Title, search/filter bar, stats banner.
  - `ButtonPlayground.tsx`: Interactive grid showcasing Solid, Outline, Gradient, Rounded, Icon, and Loading buttons with live click feedback.
  - `CodeSnippetModal.tsx`: Modal / collapsible panel to view Tailwind code for any button style.
  - `Footer.tsx`: Copyright, navigation links, and mandatory Component Dock link (`https://www.componentdock.com/`).

## Task Checklist

- [x] Initialize app `apps/clickforge` with Vite + React + Tailwind v4 + TypeScript — superseded: shipped as `apps/btnridge`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Set up `public/CNAME` (`clickforge.free.componentdock.com`)
- [ ] Build components with 100% test coverage (Vitest + RTL)
- [ ] Run verification gate (`scripts/verify-app.sh clickforge`)
- [ ] Register workspace in root `package.json` / lockfile (`npm install`)
- [ ] Commit and open PR
