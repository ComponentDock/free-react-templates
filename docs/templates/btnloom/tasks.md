# BtnLoom — Implementation Outline & Design Notes
<!-- prep-status: shipped-as=btnvortex -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-14` design this prep describes already
> ships as `apps/btnvortex` (<https://btnvortex.free.componentdock.com>).
> Do not scaffold `apps/btnloom`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-btnvortex/spec.md`.

## Structure & Section Order

1. **Header / Navbar**: Minimal brand title ("BtnLoom") with navigation links to button categories.
2. **Hero / Heading Section**: Title (`Button #14` recreation), subtitle introducing the comprehensive button style kit.
3. **Primary & Colored Buttons**: Solid primary, secondary, tertiary buttons with hover states.
4. **Outline Buttons**: Bordered variants matching brand colors.
5. **Pill / Rounded Buttons**: Fully rounded button variants (`rounded-full`).
6. **Social Media Buttons**: Facebook, Twitter, LinkedIn, Pinterest, Dribbble styled buttons.
7. **Dropdown Buttons**: Interactive dropdown menus with toggle states.
8. **Button Groups & Toolbars**: Block-level button groups and segmented controls.
9. **Footer**: Required attribution link to `https://www.componentdock.com/` ("Component Dock").

## Fidelity Notes

- Recreated from ColorLib `bootstrap-buttons-14` preview stylesheet tokens.
- Uses Tailwind CSS 4 theme tokens for brand purples (`#5735ea`), cyans (`#32c5f6`), and greens (`#48da79`).
- Fully responsive grid layout across mobile, tablet, and desktop screens.
