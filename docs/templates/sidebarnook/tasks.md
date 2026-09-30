# SidebarNook — Task Outline

## Prep Status: COMPLETE

## Implementation Tasks (for implementer)

### 1. Scaffold App
- [ ] Copy simplest existing app as base (e.g. apps/cove)
- [ ] Rename package to `@free-react-templates/sidebarnook`
- [ ] Update public/CNAME to `sidebarnook.free.componentdock.com`
- [ ] Update homepage in package.json
- [ ] Run `npm install` at repo root

### 2. Core Components
- [ ] Build Sidebar.tsx (fixed left, 300px, slide animation)
- [ ] Build BurgerToggle.tsx (3-line hamburger → X animation)
- [ ] Build Profile.tsx (avatar, name, role)
- [ ] Build NavMenu.tsx (list of nav items)
- [ ] Build AccordionItem.tsx (collapsible submenu)
- [ ] Build MainContent.tsx (full-width content area)
- [ ] Build PostGrid.tsx (2-column responsive grid)
- [ ] Build PostEntry.tsx (thumbnail + title + meta)

### 3. State & Interactions
- [ ] Sidebar open/close state in App.tsx
- [ ] Body class toggling (.show-sidebar) via useEffect
- [ ] Accordion expand/collapse state
- [ ] Burger icon animation class toggle

### 4. Styling
- [ ] Tailwind theme tokens (colors, fonts from design tokens)
- [ ] Sidebar slide transition (1s cubic-bezier)
- [ ] Overlay (body::before, rgba(0,0,0,0.05))
- [ ] Nav hover states (bg #fcfcfc, text #000, orange left border)
- [ ] Profile avatar (80px round)
- [ ] Post grid responsive (2-col → 1-col)
- [ ] Burger animation (3 bars → X)

### 5. Data & Content
- [ ] Hardcoded post data (8 entries with picsum.photos thumbnails)
- [ ] Nav menu items with icons (lucide-react)

### 6. Footer
- [ ] Add Component Dock link in footer

### 7. Tests
- [ ] Sidebar render + open/close
- [ ] Burger toggle interaction
- [ ] Profile display
- [ ] Accordion expand/collapse
- [ ] Post grid rendering
- [ ] Responsive behavior
- [ ] 100% coverage

### 8. Verification
- [ ] `scripts/verify-app.sh sidebarnook` passes
- [ ] No ColorLib references in app code
