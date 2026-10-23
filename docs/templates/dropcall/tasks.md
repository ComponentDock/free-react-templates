# Dropcall — Implementation TODO

## Pre-implementation
- [x] Spec written: openspec/specs/template-dropcall/spec.md
- [x] Design notes: docs/templates/dropcall/design-notes.md
- [x] Preview DOM analyzed: https://preview.colorlib.com/theme/bootstrap/dropdown-12/
- [x] CSS tokens extracted from css/style.css

## Implementation Tasks
- [ ] Create apps/dropcall/ from template starter
- [ ] Set up vite.config.ts with injectUiSource()
- [ ] Create src/index.css with @theme tokens
- [ ] Build DropdownButton component (cog icon + label)
- [ ] Build DropdownMenu component (two-column layout, 4 items with icons)
- [ ] Build MenuItem sub-component (icon + title + description)
- [ ] Implement toggle logic (useState, aria-expanded)
- [ ] Implement outside-click-to-close
- [ ] Add transition CSS (opacity + margin-top)
- [ ] Create App.tsx composing heading + dropdown
- [ ] Create public/CNAME: dropcall.free.componentdock.com
- [ ] Update package.json homepage
- [ ] Footer with Component Dock link

## Testing
- [ ] Test dropdown renders with correct label
- [ ] Test menu hidden by default
- [ ] Test click toggles menu open/close
- [ ] Test menu has two columns
- [ ] Test menu items: Settings, Account, Settings, Notification
- [ ] Test item icons are present
- [ ] Test item titles and descriptions render
- [ ] Test outside click closes
- [ ] Test aria-expanded toggles
- [ ] 100% coverage verified

## Verification
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Tests pass at 100% coverage
- [ ] Build succeeds
- [ ] No ColorLib references in app code
- [ ] npm install run at root (lockfile updated)
