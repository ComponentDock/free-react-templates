# Template: Knurl (Bootstrap Buttons 16) — Tasks & Design Notes
<!-- prep-status: shipped-as=buttonforge -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-16` design this prep describes already
> ships as `apps/buttonforge` (<https://buttonforge.free.componentdock.com>).
> Do not scaffold `apps/knurl`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-buttonforge/spec.md`.

- **Source:** ColorLib "Bootstrap Buttons 16" (`https://colorlib.com/wp/template/bootstrap-buttons-16/`)
- **New Name:** Knurl (`apps/knurl`)
- **Category:** UI Components & Buttons
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Implementation Plan

1. Scaffold `apps/knurl` from an existing button template (e.g. `apps/bevel`).
2. Update app name in `package.json` to `@free-react-templates/knurl`.
3. Set `public/CNAME` to `knurl.free.componentdock.com`.
4. Update heading to `#16 — Bootstrap 4 Buttons`.
5. Ensure 100% test coverage and verify with `scripts/verify-app.sh knurl`.
