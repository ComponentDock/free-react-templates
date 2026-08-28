# Nocturnal — Task Outline & Design Notes

## Source & Mapping

- **ColorLib Source**: Bootstrap Buttons V12 (`https://colorlib.com/wp/template/bootstrap-buttons-12/`)
- **New App Name**: `nocturnal`
- **Package Name**: `@free-react-templates/nocturnal`
- **Surge Domain**: `nocturnal.free.componentdock.com`

## Design & Aesthetic Notes

- **Theme**: Dark UI component showcase featuring neon glow effects, high-contrast badges, and sleek dark surfaces (`bg-slate-950`).
- **Color Palette**: Cyan (`#06b6d4`), Emerald (`#10b981`), Amber (`#f59e0b`), Rose (`#f43f5e`), Slate (`#020617` to `#1e293b`).
- **Sections**:
  1. Header / Navigation (sticky dark navbar with logo and links)
  2. Hero (title, subtitle, quick stats/badges)
  3. Solid Buttons (primary, success, warning, danger in dark container cards)
  4. Outline & Glow Buttons (border-based with shadow glow on hover)
  5. Gradient & Shadow Buttons (smooth gradient fills)
  6. Icon & Grouped Buttons (Lucide icons + button groups)
  7. Footer (copyright & Component Dock attribution link `https://www.componentdock.com/`)

## Implementation Tasks (For Implementer Stream)

1. Scaffold `apps/nocturnal` (copy from existing bootstrap buttons app or simple app structure).
2. Configure `vite.config.ts` with `injectUiSource()`.
3. Set `public/CNAME` to `nocturnal.free.componentdock.com`.
4. Implement components: `Navbar.tsx`, `Hero.tsx`, `SolidButtons.tsx`, `GlowButtons.tsx`, `GradientButtons.tsx`, `IconButtons.tsx`, `Footer.tsx`.
5. Write colocated tests (`*.test.tsx`) for 100% test coverage.
6. Run `npm install` at root to register workspace in `package-lock.json`.
7. Run per-app gate (`scripts/verify-app.sh nocturnal`).
