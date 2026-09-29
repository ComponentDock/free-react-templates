# Sidecraft — Template Replication Notes

**Source:** ColorLib Bootstrap Sidebar 02  
**Preview:** https://preview.colorlib.com/theme/bootstrap-sidebar-02/ (unreachable — 404)  
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170618.jpg  
**Spec:** openspec/specs/template-sidecraft/spec.md

## Implementation Todo

### Phase 1: Scaffold
- [ ] Copy simplest existing app (e.g. `apps/aurora`) as base
- [ ] Rename package to `@free-react-templates/sidecraft`
- [ ] Update `public/CNAME` to `sidecraft.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://sidecraft.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Design Tokens (index.css)
- [ ] Set `@theme` block with brand colors:
  - `--color-brand`: `#6C4AB6` (sidebar purple)
  - `--color-content-bg`: `#f5f5f5` (main content background)
  - `--color-heading`: `#333333` (content headings)
  - `--color-body`: `#555555` (body text)
  - `--color-sidebar-text`: `#ffffff` (sidebar text)
- [ ] Add Google Fonts link for Poppins (weights 300, 400, 500, 600, 700) in `index.html`

### Phase 3: Components (section by section)

#### Sidebar.tsx
- Fixed left sidebar, full viewport height, purple (#6C4AB6) background
- Logo: "Splash" text, white, bold, ~28px font
- Navigation links stacked vertically:
  - Home (with dropdown arrow ▼), About, Pages (with dropdown arrow ▼), Portfolio, Contact
  - White text, ~16px, padding ~12px vertical
  - Dropdown arrows on Home and Pages indicate submenus
- Dropdown submenus: state-controlled show/hide on click
- Newsletter section below nav:
  - "Subscribe for newsletter" heading (white, bold)
  - Email input: white background, rounded corners, placeholder "Enter Email Address"
- Copyright at bottom: "Copyright ©2019 All rights reserved | This template is made with by" (white, ~12px)
- Use `lucide-react` for dropdown chevrons and hamburger icon

#### HamburgerToggle.tsx
- Purple circular button (#6C4AB6) with white hamburger icon (3 lines)
- Positioned at top-right of sidebar/content boundary
- On mobile: toggles sidebar visibility (slide in/out)
- Uses `aria-label` for accessibility

#### MainContent.tsx
- Light gray (#f5f5f5) background, fills remaining viewport width
- Heading: "Sidebar #02" — large (~36px), bold, dark (#333)
- Body text: two paragraphs of lorem ipsum, relaxed line-height (~1.8)
- Standard content padding

### Phase 4: App.tsx Composition
- [ ] Assemble: Sidebar (fixed left) + HamburgerToggle + MainContent (right)
- [ ] Sidebar takes full viewport height (100vh)
- [ ] MainContent fills remaining width (calc(100% - sidebar-width))
- [ ] Verify all imports resolve

### Phase 5: Tests + Coverage
- [ ] Write tests for each component (TDD per AGENTS.md)
- [ ] Ensure 100% lines/functions/branches/statements coverage
- [ ] Run `npm run verify:app sidecraft` to pass local gate

### Phase 6: Deploy
- [ ] Commit as `docs: prep Sidecraft (ColorLib Bootstrap Sidebar 02) spec + research`
- [ ] Push to main
- [ ] (Implementer will handle: feat branch, PR, merge, Surge deploy)

## Fidelity Notes

### Layout fidelity
- Two-column layout: fixed sidebar (left) + scrollable content (right)
- Sidebar is fixed to the left edge, full viewport height (100vh)
- Content area fills remaining width after sidebar
- On mobile: sidebar collapses (off-screen), hamburger toggle brings it back as overlay
- The layout is simple and clean — no complex grids, just sidebar + content

### Design fidelity
- Brand purple (#6C4AB6) is the dominant color — used for sidebar bg and hamburger button
- White text on purple sidebar for all navigation and labels
- Light gray (#f5f5f5) content background provides contrast
- Navigation items are simple text links with dropdown arrows (not buttons)
- Newsletter input is white with rounded corners on the purple sidebar
- Copyright text is small and subtle at the bottom of the sidebar
- The overall feel is minimal and clean — sidebar-centric navigation

### Images
- No images needed — this is a text-based sidebar layout
- Logo is text-based ("Splash"), not an image file
- Placeholder images not required for this template

### Accessibility
- Semantic HTML: `<nav>` for sidebar navigation, `<main>` for content area
- `<label htmlFor>` on newsletter email input
- `aria-label` on hamburger toggle button
- `aria-expanded` on dropdown triggers
- `aria-hidden` on sidebar when collapsed on mobile
- Focus-visible rings on interactive elements
- Skip-to-content link for keyboard users
