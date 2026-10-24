# Task Outline: Sentinel (ColorLib Victor)
<!-- prep-status: shipped-as=crest -->
> **SHIPPED-UNDER** — the ColorLib `victor` design this prep describes already
> ships as `apps/crest` (<https://crest.free.componentdock.com>).
> Do not scaffold `apps/sentinel`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-crest/spec.md`.

## Overview

Recreate the Victor business template as **Sentinel**.

## Section Breakdown & Implementation Order

1. **Navbar (`src/components/Navbar.tsx`)**: Transparent sticky header, logo, nav items, phone button, CTA.
2. **Hero (`src/components/Hero.tsx`)**: Headline, subtitle, CTA button, shape graphic.
3. **Clients (`src/components/Clients.tsx`)**: 3 cards for Happier customers, Faster growth, Connected workflow.
4. **ProjectUs (`src/components/ProjectUs.tsx`)**: Section title, description, image, interactive accordion items.
5. **Footer (`src/components/Footer.tsx`)**: Dark gradient background, newsletter/links, Component Dock attribution.

## Design Notes

- Tailwind theme configured with DM Sans and `#FF6D21`.
- Fully responsive layout for mobile, tablet, and desktop.
