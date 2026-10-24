# BtnCast — Design Notes & Task Breakdown
<!-- prep-status: shipped-as=btnvortex -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-14` design this prep describes already
> ships as `apps/btnvortex` (<https://btnvortex.free.componentdock.com>).
> Do not scaffold `apps/btncast`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-btnvortex/spec.md`.

Recreation of ColorLib Bootstrap Buttons 14 (`https://preview.colorlib.com/theme/bb/bootstrap-buttons-14/`).

## Structure & Section Order

1. **Header / Hero Section**: Section title "Button #04" / "BtnCast".
2. **Pick Your Style**: Solid, outline, icon-enabled (`<Heart>`, `<Play>`, `<ArrowLeft>`, `<ArrowRight>`), rounded pills.
3. **Pick Your Size**: Small, regular (gradient), large in both solid and outline styles.
4. **Pick Your Color**: Primary (`#5735ea`), Secondary (`#32c5f6`), Tertiary (`#48da79`), Gradient (`#5635ea` to `#a15bf0`).
5. **Brand Grid**: Twitter, Facebook, Dribbble grid variations.
6. **Social Buttons**: Facebook, Twitter, LinkedIn, Pinterest with icon and share count badges (e.g. "Share - 8.2k").
7. **Footer**: Component Dock attribution link (`https://www.componentdock.com/`).

## Design Tokens & Fidelity

- **Colors**:
  - Primary: `#5735ea` (hover `#3a16d6`)
  - Secondary: `#32c5f6` (hover `#0ab3eb`)
  - Tertiary: `#48da79` (hover `#28c75d`)
  - Gradient: linear-gradient(45deg, `#5635ea`, `#a15bf0`)
  - Social: FB `#4f69a2`, Twitter `#69b6f0`, LinkedIn `#2884ba`, Pinterest `#d03940`, Dribbble `#ea6294`.
- **Typography**: Poppins font family via Google Fonts.
- **Shadows**: Soft box shadow (`box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12)`).
