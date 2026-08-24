# Tasks & Design Notes: Reverb (ColorLib Repeat)

## Overview

Recreation of ColorLib "Repeat" template as `reverb` (`reverb.free.componentdock.com`).

## Design Notes

- **Palette**: Coral Orange (`#ff8e71`) accent, Deep Blue (`#003a70`) headings, Dark Charcoal (`#212529`) text, Light gray backgrounds.
- **Typography**: Comfortaa & Roboto sans-serif.
- **Layout**: Navbar with mobile menu, Hero with background image and typed words, About section with image wrap and vertical accent line, Services section with offering cards, Stats counter section with 4 stats, Media showcase section with dual images, Footer with 3 columns and Component Dock attribution.

## Implementation Tasks (for Implementer stream)

1. Initialize `apps/reverb` workspace with Vite + React 19 + Tailwind CSS 4 + TypeScript.
2. Add `@free-react-templates/reverb` to root `package.json` workspaces and run `npm install`.
3. Create `public/CNAME` with `reverb.free.componentdock.com`.
4. Build components (`Navbar`, `Hero`, `About`, `Services`, `Stats`, `Media`, `Footer`).
5. Write unit tests with Testing Library for 100% test coverage.
6. Verify via `scripts/verify-app.sh reverb`.
