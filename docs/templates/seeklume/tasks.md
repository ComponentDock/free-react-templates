# SeekLume — Implementation Tasks & Design Notes

## Template Identity

- **New name:** SeekLume
- **ColorLib source:** Search Form/Bar V16
- **Source slug:** search-form-bar-16
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/search-form-bar-16/
- **Source URL:** https://colorlib.com/wp/template/search-form-bar-16/
- **Category:** Search Form & Bar (full-screen overlay snippet)

## Section Order (from source)

1. **Navbar** — sticky top bar with Brand heading, nav links, search icon toggle
2. **Content Area** — centered instructional paragraph (demo state)
3. **Search Overlay** — full-viewport white overlay with ESC note, close button, search input

## Structure Notes

The original is a single HTML page with three main areas:
- `<nav class="custom-navbar">` — the sticky navbar
- `<div class="content">` — the demo instruction text
- `<div class="search-wrap">` — the full-screen overlay (hidden by default)

The overlay is toggled via a CSS class `.search-active` on the body, which
sets `opacity: 1; visibility: visible` on `.search-wrap`.

## Implementation Tasks

### Phase 1: Setup
- [ ] Create `apps/seeklume/` by copying the simplest existing app
- [ ] Rename package to `@free-react-templates/seeklume`
- [ ] Update `public/CNAME` to `seeklume.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://seeklume.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace

### Phase 2: Components
- [ ] `src/components/Navbar.tsx` — sticky navbar with Brand, links, search icon
- [ ] `src/components/SearchOverlay.tsx` — full-viewport overlay with ESC note, close button, search input
- [ ] `src/components/ContentArea.tsx` — centered instruction paragraph
- [ ] `src/App.tsx` — compose Navbar + ContentArea + SearchOverlay
- [ ] `src/index.css` — Tailwind entry + theme tokens (colors, Roboto font)

### Phase 3: Behavior
- [ ] Search icon click toggles overlay visibility (CSS class or React state)
- [ ] ESC key listener closes overlay
- [ ] Close (X) button closes overlay
- [ ] Auto-focus search input when overlay opens
- [ ] Smooth 0.3s ease transition on overlay open/close

### Phase 4: Styling Fidelity
- [ ] Overlay: `position: fixed; inset: 0; background: #fff; z-index: 9999`
- [ ] ESC note: uppercase, 11px, letter-spacing 0.1rem, color #b3b3b3, centered at 10% from top
- [ ] Close button: top-right (20px, 20px), 20px font-size, color #000
- [ ] Search input: no border except 1px bottom (#ccc → #000 on focus), no radius, 57px height
- [ ] Placeholder: "Type here to search", color #6c757d
- [ ] Navbar: white bg, bottom border #dae0e5, shadow `0 1px 5px rgba(0,0,0,.1)`
- [ ] Nav links: padding 25px 0, margin-left 20px, 0.3s transition
- [ ] Font: Roboto (300/400), system sans-serif fallback

### Phase 5: Tests + Verification
- [ ] Test Navbar renders Brand, links, search icon
- [ ] Test SearchOverlay opens/closes via icon, ESC, close button
- [ ] Test overlay styling (full viewport, z-index, transitions)
- [ ] Test input focus behavior (auto-focus, border color change)
- [ ] Test responsive behavior (mobile viewport)
- [ ] Run `npm run test:coverage` — 100% coverage
- [ ] Run `scripts/verify-app.sh seeklume` — typecheck + lint + build pass

### Phase 6: Finalize
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Commit as `feat: add SeekLume (ColorLib search-form-bar-16)`
- [ ] Open PR, merge immediately
