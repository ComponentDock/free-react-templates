# NavPanel — Implementation Tasks

## Phase 1: Scaffold
- [ ] Create `apps/navpanel/` from simplest existing app
- [ ] Rename package to `@free-react-templates/navpanel`
- [ ] Set up `public/CNAME` → `navpanel.free.componentdock.com`
- [ ] Set `"homepage": "https://navpanel.free.componentdock.com"` in package.json
- [ ] Add `injectUiSource()` to vite.config.ts

## Phase 2: Components
- [ ] `src/components/Sidebar.tsx` — fixed sidebar with logo + nav list
- [ ] `src/components/NavItem.tsx` — individual nav item with icon + label
- [ ] `src/components/ContentArea.tsx` — main content with heading + paragraphs
- [ ] `src/components/ToggleButton.tsx` — hamburger toggle
- [ ] `src/App.tsx` — flex layout composing Sidebar + ContentArea

## Phase 3: Styling
- [ ] Add Poppins font via `<link>` in `index.html`
- [ ] Set up `@theme` tokens in `src/index.css`
- [ ] Sidebar: dark bg, 250px, fixed position, transition
- [ ] Nav items: hover/active states, border-bottom
- [ ] Content area: padding, min-height, white bg
- [ ] Responsive: <992px sidebar hidden, toggle visible

## Phase 4: State & Interaction
- [ ] useState for sidebar open/closed
- [ ] Toggle handler (adds/removes active class logic)
- [ ] Responsive hook or media query for default state

## Phase 5: Tests
- [ ] Sidebar renders logo + 6 nav items
- [ ] NavItem renders icon + label
- [ ] Toggle button shows/hides sidebar
- [ ] Responsive behavior at different viewports
- [ ] ContentArea renders heading + paragraphs
- [ ] 100% coverage verification

## Phase 6: Polish
- [ ] Footer with Component Dock link
- [ ] Accessibility: aria-labels, keyboard nav
- [ ] Final typecheck + lint + test + build
