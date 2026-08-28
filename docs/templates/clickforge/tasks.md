# ClickForge — Implementation Plan & Tasks

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

- [ ] Initialize app `apps/clickforge` with Vite + React + Tailwind v4 + TypeScript
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Set up `public/CNAME` (`clickforge.free.componentdock.com`)
- [ ] Build components with 100% test coverage (Vitest + RTL)
- [ ] Run verification gate (`scripts/verify-app.sh clickforge`)
- [ ] Register workspace in root `package.json` / lockfile (`npm install`)
- [ ] Commit and open PR
