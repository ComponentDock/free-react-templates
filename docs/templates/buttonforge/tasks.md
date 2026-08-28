# Task & Todo Outline: Buttonforge (`apps/buttonforge`)

## Overview

Recreation of ColorLib Bootstrap Buttons 16 as an interactive metric card & button component library dashboard.

## Tasks

1. **Scaffold App Workspace**
   - Create `apps/buttonforge/` workspace with Vite + React + Tailwind v4 + TypeScript.
   - Configure `public/CNAME` with `buttonforge.free.componentdock.com`.
   - Register workspace in root `package.json` / workspaces.
2. **Design Token & Style Setup**
   - Set up `src/index.css` with Poppins font import, Tailwind CSS v4 directives, and brand tokens (`#1fbbd3`, `#fb582f`, `#159688`, `#e92465`).
   - Add `injectUiSource()` in `vite.config.ts`.
3. **Component Implementation (TDD)**
   - Write tests for Header / Navbar, MetricButtonGrid, StatButtonCard, and Footer.
   - Implement components corresponding 1:1 to the ColorLib Bootstrap Buttons 16 reference layout (icon-left, icon-right, numerical badges, metrics).
   - Ensure footer links `https://www.componentdock.com/`.
4. **Verification & Quality Gates**
   - Run `npm install` to update lockfile.
   - Run local per-app gate (`scripts/verify-app.sh buttonforge`) ensuring 100% coverage and passing tests/lint/typecheck.
