# Marginote — Implementation Tasks & Design Notes

## Source

- ColorLib Sidebar V10: https://colorlib.com/wp/template/colorlib-sidebar-v10/
- Preview: https://preview.colorlib.com/theme/colorlib-sidebar-v10/ (unreachable; design from screenshot)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-sidebar-v10.jpg

## Task outline

1. Scaffold app from simplest existing template (copy `apps/<source>`, rename package to `@free-react-templates/marginote`)
2. Set up `public/CNAME` → `marginote.free.componentdock.com`
3. Create `src/components/Sidebar.tsx` — fixed left panel (320px, full height, cyan overlay bg, brand heading, tagline, nav links, social icons)
4. Create `src/components/BlogGrid.tsx` — 2-column card grid with avatar + title + date
5. Create `src/components/SidebarToggle.tsx` — hamburger/X toggle button
6. Compose in `src/App.tsx` — two-panel layout with state for sidebar open/close
7. Add `src/index.css` — Tailwind theme tokens (brand cyan `#00d4ff`, font family)
8. Write tests for each component (sidebar rendering, toggle behavior, grid layout)
9. Footer with Component Dock link
10. Run `npm run verify:app marginote`

## Section-by-section fidelity notes

### Sidebar (left panel)
- Fixed position, left side, full viewport height
- Width: ~320px (Tailwind `w-80`)
- Background: person photo with bright cyan (#00d4ff) gradient overlay
  - Use `picsum.photos/seed/marginote-hero/640/960` for placeholder
  - Overlay: `bg-gradient-to-b from-cyan-400/90 to-cyan-500/90` or similar
- Brand heading "Journal": white, bold, large (`text-3xl font-bold text-white`)
- Tagline: white, smaller (`text-sm text-white/90`)
- Nav links: white text, stacked vertically, no underline
- Social icons: circular buttons, semi-transparent white background, white icon
  - Use `lucide-react` icons (Facebook, Twitter, Instagram, Globe, Linkedin)
  - Circular: `rounded-full bg-white/25 p-2`

### Sidebar toggle
- Positioned at top-left of main content area
- Overlapping the sidebar edge slightly
- Icon-only button: hamburger (menu) when closed, X (x) when open
- Use `lucide-react` `Menu` and `X` icons
- Background: white with shadow, rounded

### Blog post grid
- White background, fills remaining width
- 2-column grid (`grid grid-cols-2 gap-6`)
- Each card: horizontal layout — avatar (left, ~60px round) + text (right)
- Avatar: `rounded-full` with `picsum.photos` placeholder
- Title: dark gray, medium weight
- Date: light gray, small text, prefixed with "Posted:"

### Responsive
- Mobile (<768px): sidebar hidden by default, toggle visible, single-column grid
- Use Tailwind `md:` breakpoint for grid columns
- Sidebar overlay on mobile (absolute/fixed with z-index)

### Footer
- Simple footer with Component Dock link
- `https://www.componentdock.com/` branded as "Component Dock"

## Notes
- Preview was unreachable (404); all design decisions derived from screenshot
- The sidebar is the defining feature — must feel polished with the cyan overlay
- Social icons use a specific circular semi-transparent style unique to this template
- The toggle button is a key interaction — smooth slide animation
