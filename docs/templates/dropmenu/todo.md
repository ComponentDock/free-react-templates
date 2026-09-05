# DropMenu — Implementation TODO

## Pre-implementation
- [x] Spec written (`openspec/specs/template-dropmenu/spec.md`)
- [x] Design notes documented (`docs/templates/dropmenu/design-notes.md`)
- [x] Replication research: preview HTML captured, CSS unreachable (404), screenshot not viewed (browser unavailable)

## Component breakdown
- [ ] Scaffold `apps/dropmenu/` from simplest existing app
- [ ] Create `DropMenu.tsx` — main dropdown component
  - Trigger button with Settings icon + "Privacy Settings" text
  - Dropdown menu with two-column flex layout
  - Four menu items: icon + title + description
  - Open/close state managed with useState
  - Click-outside handler to close
  - Escape key handler to close
  - aria-expanded, aria-haspopup on trigger
  - Responsive: single column on mobile
- [ ] Create `MenuItem.tsx` — individual menu item (icon + title + desc)
- [ ] Create `App.tsx` — page wrapper with centered heading + DropMenu
- [ ] Add Google Fonts link (Roboto, Poppins) to `index.html`
- [ ] Configure Tailwind theme tokens (brand colors, font families)
- [ ] Add Component Dock footer link

## Testing
- [ ] Write tests for DropMenu component
  - Renders trigger button with correct text and icon
  - Opens dropdown on trigger click
  - Closes dropdown on outside click
  - Closes dropdown on Escape key
  - Renders all four menu items with correct titles
  - Two-column layout on desktop
  - Single-column layout on mobile (responsive)
  - Keyboard navigation (Tab, Enter, Escape)
  - aria-expanded toggles correctly
- [ ] Write tests for MenuItem component
  - Renders icon, title, description
  - Link is clickable
- [ ] Achieve 100% coverage

## Final verification
- [ ] `scripts/verify-app.sh dropmenu` passes (typecheck + lint + tests + build)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME file: `dropmenu.free.componentdock.com`
- [ ] Homepage in package.json: `https://dropmenu.free.componentdock.com`
