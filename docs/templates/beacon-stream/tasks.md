# Beacon Stream — Research & Tasks Outline

## Source & Metadata

- **ColorLib Source**: Carousel 03 (`https://colorlib.com/wp/template/carousel-03/`)
- **Preview URL**: `https://preview.colorlib.com/theme/carousel-03/`
- **Assigned App Name**: `beacon-stream`
- **Package Name**: `@free-react-templates/beacon-stream`

## Visual Design & Fidelity Notes

- **Layout**: Centered hero section followed by an immersive multi-item card carousel with pagination dots and side arrow navigation.
- **Color Palette**: Clean slate neutral background (`#f8fafc`) with crisp white cards (`#ffffff`), vibrant blue/indigo action highlights (`#3b82f6`), and dark slate typography (`#0f172a`).
- **Typography**: Modern sans-serif font stack with bold headings and clean descriptive blurbs.

## Implementation Tasks (for Implementer)

1. **Scaffold App**: Create `apps/beacon-stream` mirroring existing templates (e.g., `apps/carousel-hub` or similar minimal template), update `package.json` name to `@free-react-templates/beacon-stream`.
2. **Register Workspace & CNAME**: Ensure `package-lock.json` includes the new workspace (`npm install`), and configure `public/CNAME` with `beacon-stream.free.componentdock.com`.
3. **Configure Tailwind & Vite**: Add `injectUiSource()` in `vite.config.ts`, define brand theme tokens in `src/index.css`.
4. **Develop Components**:
   - `Navbar.tsx`: Minimal header with branding and navigation.
   - `Hero.tsx`: Title and introduction to the carousel showcase.
   - `CarouselSection.tsx`: Core interactive carousel component with prev/next controls, slide pagination, touch/click handling, and rich slide cards.
   - `Footer.tsx`: Standard footer with copyright and mandatory link to `https://www.componentdock.com/`.
5. **Write Tests**: Implement comprehensive Vitest specs covering navigation, slide transitions, click handlers, and footer attribution. Ensure 100% test coverage.
6. **Verify**: Run `scripts/verify-app.sh beacon-stream` and check build success.
