# Bootstrap Buttons Two — Implementation Tasks & Design Notes

## Overview

Recreation of ColorLib Bootstrap Buttons 02 (https://colorlib.com/wp/template/bootstrap-buttons-02/).
New template name: `bootstrap-buttons-two` (workspace package `@free-react-templates/bootstrap-buttons-two`).

## Section Order & Architecture

1. **Navbar (`Navbar.tsx`)**: Clean sticky header with brand title ("ButtonCraft" / "BtnTwo"), category quick links, and theme toggle.
2. **Hero (`Hero.tsx`)**: High-impact introduction highlighting creative Bootstrap & Tailwind button styles, glowing gradients, and animated effects.
3. **Gradient Glow Buttons (`GradientButtons.tsx`)**: Rich multi-stop gradient buttons with shadow glows (`shadow-indigo-500/50`).
4. **Animated Hover Buttons (`AnimatedButtons.tsx`)**: Scale-up, slide, and border-reveal hover micro-interactions.
5. **Pill & Rounded Buttons (`PillButtons.tsx`)**: Full capsule (`rounded-full`) buttons with icons and badge counters.
6. **Outline & Border Effects (`OutlineButtons.tsx`)**: Sleek border-only buttons with background fill on hover.
7. **Social & Brand Buttons (`SocialButtons.tsx`)**: Styled brand buttons (GitHub, Twitter, Discord, Google) with official accent colors.
8. **Interactive Playground (`Playground.tsx`)**: Live playground where developers can tweak size, variant, state, and copy code.
9. **Footer (`Footer.tsx`)**: Mandatory Component Dock attribution (`https://www.componentdock.com/`).

## Design Notes & Tokens

- **Palette**: Indigo (`#4f46e5`), Cyan (`#06b6d4`), Slate (`#0f172a`).
- **Typography**: Inter sans-serif font stack.
- **Icons**: `lucide-react` for arrow, copy, check, and brand icons.
