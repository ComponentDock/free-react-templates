# Fallshift — Implementation TODO

## Pre-implementation
- [x] Spec written: openspec/specs/template-fallshift/spec.md
- [x] Design notes: docs/templates/fallshift/design-notes.md
- [x] Preview DOM analyzed: https://preview.colorlib.com/theme/bootstrap/dropdown-11/
- [x] CSS tokens extracted from css/style.css
- [ ] Screenshot visual noted (from TEMPLATES.md)

## Implementation Tasks
- [ ] Create apps/fallshift/ from template starter
- [ ] Set up vite.config.ts with injectUiSource()
- [ ] Create src/index.css with @theme tokens
- [ ] Build DropdownButton component (cog icon + label)
- [ ] Build DropdownMenu component (4 items, animation)
- [ ] Implement toggle logic (useState, aria-expanded)
- [ ] Implement outside-click-to-close
- [ ] Add transition CSS (opacity + margin-top)
- [ ] Create App.tsx composing heading + dropdown
- [ ] Create public/CNAME: fallshift.free.componentdock.com
- [ ] Update package.json homepage
- [ ] Footer with Component Dock link

## Testing
- [ ] Test dropdown renders with correct label
- [ ] Test menu hidden by default
- [ ] Test click toggles menu open/close
- [ ] Test menu items present
- [ ] Test outside click closes
- [ ] Test aria-expanded toggles
- [ ] Test hover styles on menu items
- [ ] 100% coverage verified

## Verification
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Tests pass at 100% coverage
- [ ] Build succeeds
- [ ] No ColorLib references in app code
- [ ] npm install run at root (lockfile updated)
