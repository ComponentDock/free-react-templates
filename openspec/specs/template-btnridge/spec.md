# Spec: template-btnridge (Bootstrap Buttons 12)

## Purpose

Btnridge is a bootstrap button component page. It recreates the ColorLib **Bootstrap Buttons 12** design (https://colorlib.com/wp/template/bootstrap-buttons-12/, preview: https://preview.colorlib.com/theme/bb/bootstrap-buttons-12/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

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
