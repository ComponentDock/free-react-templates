# Dropmark — Implementation TODO

## Pre-implementation
- [x] Spec written: openspec/specs/template-dropmark/spec.md
- [x] Design notes: docs/templates/dropmark/design-notes.md
- [x] Preview DOM analyzed: https://preview.colorlib.com/theme/bootstrap/dropdown-13/
- [x] CSS tokens extracted from css/style.css

## Implementation Tasks
- [ ] Create apps/dropmark/ from template starter
- [ ] Set up vite.config.ts with injectUiSource()
- [ ] Create src/index.css with @theme tokens
- [ ] Build DropdownButton component (file-text icon + label, color toggle)
- [ ] Build DropdownMenu component (4 items with icons)
- [ ] Build MenuItem sub-component (icon + label + hover blue left-bar)
- [ ] Implement toggle logic (useState, aria-expanded)
- [ ] Implement outside-click-to-close
- [ ] Add transition CSS (opacity + margin-top for menu, bg + text for button)
- [ ] Implement ::before pseudo-element for blue left-bar hover
- [ ] Create App.tsx composing heading + dropdown
- [ ] Create public/CNAME: dropmark.free.componentdock.com
- [ ] Update package.json homepage
- [ ] Footer with Component Dock link

## Testing
- [ ] Test dropdown renders with correct label
- [ ] Test menu hidden by default
- [ ] Test click toggles menu open/close
- [ ] Test button color changes when open
- [ ] Test menu items: Markup HTML, Photoshop PDF, Illustrator AI, Sketch
- [ ] Test item icons present
- [ ] Test hover: text color change, padding increase, blue left-bar
- [ ] Test outside click closes and resets button
- [ ] Test aria-expanded toggles
- [ ] 100% coverage verified

## Verification
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Tests pass at 100% coverage
- [ ] Build succeeds
- [ ] No ColorLib references in app code
- [ ] npm install run at root (lockfile updated)
