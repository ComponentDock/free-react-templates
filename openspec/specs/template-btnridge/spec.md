# Spec: template-btnridge (Bootstrap Buttons 12)

## Overview

Recreation of ColorLib "Bootstrap Buttons V12" (`https://colorlib.com/wp/template/bootstrap-buttons-12/`) under the original name `btnridge`.

- Aesthetic: Dark theme showcase of sleek, modern Bootstrap-inspired buttons, featuring dark/black gradients, multiple sizes, rounded/pill/outline styles, and social buttons.
- Design tokens: Dark background (`#111827`, `#1f2937`), sleek border effects, vibrant accent glow (`#3b82f6` blue / `#6366f1` indigo).
- Footer: Component Dock brand link (`https://www.componentdock.com/`).

## Requirements

- Gherkin feature scenarios covering Header, SizeScale, ColorPalette, SocialButtons, and Footer sections.
- 100% test coverage.
- Fully accessible with proper ARIA labels and semantic markup.
- `injectUiSource()` in `vite.config.ts`.
- `public/CNAME` with `btnridge.free.componentdock.com`.
