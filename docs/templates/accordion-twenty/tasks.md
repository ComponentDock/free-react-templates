# Tasks & Design Notes: Accordion Twenty (ColorLib Accordion 20)
<!-- prep-status: shipped-as=jade -->
> **SHIPPED-UNDER** — the ColorLib `accordion-20` design this prep describes already
> ships as `apps/jade` (<https://jade.free.componentdock.com>).
> Do not scaffold `apps/accordion-twenty`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-jade/spec.md`.

## Overview

Recreation of ColorLib Accordion 20 featuring an emerald and teal brand palette, rich interactive accordions, search & category filtering, statistics banner, newsletter CTA, and footer linking Component Dock.

## Section Structure (Top to Bottom)

1. **Navbar**: Brand logo, nav links, CTA button.
2. **Hero**: Headline, subtitle, search input, category filter pills.
3. **Accordion Groups**: Expandable FAQ/component sections with smooth transitions and chevron rotation.
4. **Feature Highlights**: Metrics and benefits strip.
5. **Newsletter CTA**: Subscription input and button.
6. **Footer**: Links and mandatory Component Dock attribution (`https://www.componentdock.com/`).

## Design Tokens & Styling

- Primary: Emerald-600 (`#059669`)
- Secondary: Teal-500 (`#14b8a6`)
- Background: `bg-gray-50` / `bg-white`
- Fonts: Inter / system-ui
- Radii: `rounded-xl` for cards, `rounded-lg` for buttons
