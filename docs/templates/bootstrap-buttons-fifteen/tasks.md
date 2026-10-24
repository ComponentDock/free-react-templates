# Bootstrap Buttons Fifteen — Tasks & Design Notes
<!-- prep-status: shipped-as=btnriff -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-15` design this prep describes already
> ships as `apps/btnriff` (<https://btnriff.free.componentdock.com>).
> Do not scaffold `apps/bootstrap-buttons-fifteen`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-btnriff/spec.md`.

## Tasks / TODO Outline

1. Scaffold `apps/bootstrap-buttons-fifteen` using base template structure.
2. Implement components:
   - `Navbar.tsx` (brand title + navigation)
   - `Hero.tsx` (showcase title + quick stats)
   - `SolidButtons.tsx` (primary, success, warning, danger solid variants)
   - `OutlineButtons.tsx` (clean bordered outline variants with hover fills)
   - `GradientGlowButtons.tsx` (modern gradient backgrounds with soft glow effects)
   - `IconGroupButtons.tsx` (Lucide icon buttons and segmented button groups)
   - `Footer.tsx` (copyright + mandatory Component Dock attribution link)
3. Compose in `App.tsx`.
4. Write Vitest tests achieving 100% test coverage.
5. Verify build, typecheck, lint, and test suite.

## Design Notes

- **Aesthetic**: Modern sleek component showcase styled with Tailwind CSS 4.
- **Colors**: Indigo/Purple gradients, emerald success, amber warning, rose danger, and clean slate surfaces.
- **Interactions**: Smooth CSS transitions on hover/focus/active states for all button variations.
