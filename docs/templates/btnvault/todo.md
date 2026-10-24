# BtnVault — Implementation Outline
<!-- prep-status: shipped-as=btnflare -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-07` design this prep describes already
> ships as `apps/btnflare` (<https://btnflare.free.componentdock.com>).
> Do not scaffold `apps/btnvault`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-btnflare/spec.md`.

## Metadata

- **Source**: ColorLib Bootstrap Buttons 07 (`https://colorlib.com/wp/template/bootstrap-buttons-07/`)
  — corrected 2026-10-24: this file (and the `-02` screenshot) named the wrong
  sibling. The header, `README.md`, `tasks.md` and the shipped spec
  (`openspec/specs/template-btnflare/spec.md`) all read `bootstrap-buttons-07`,
  and `-02` is the design `btnsmith` / `pushpad` recreate. Both URLs were
  probed on 2026-10-24: `/wp/template/bootstrap-buttons-07/` 200 (114,428 B),
  the nested `/wp/template/bb/…` form 301, screenshot 59,675 B.
- **Preview URL**: `https://colorlib.com/wp/template/bootstrap-buttons-07/`
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-07.jpg`
- **New App Name**: `btnvault` (`@free-react-templates/btnvault`)
- **Deploy Target**: `https://btnvault.free.componentdock.com`

## Sections Structure

1. `Navbar.tsx` — Sticky header with brand and section links + theme toggle
2. `Hero.tsx` — Headline, subtitle, CTA buttons
3. `GradientButtons.tsx` — Modern gradient button suite
4. `ShadowButtons.tsx` — Elevated shadow & depth buttons
5. `AnimatedButtons.tsx` — Micro-interactions, pulse, and spinners
6. `Playground.tsx` — Interactive customizer with copyable JSX
7. `Footer.tsx` — Footer with mandatory Component Dock link

## Fidelity Notes

- Follows the clean, professional button library showcase pattern established by `btncraft`.
- Uses Tailwind CSS 4 token configuration.
- 100% test coverage target on all components.
