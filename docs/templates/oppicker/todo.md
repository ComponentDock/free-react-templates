# Oppicker — Implementation TODO

## Setup
- [ ] Copy simplest existing app as starter (e.g. apps/bolt or similar minimal)
- [ ] Rename package to @free-react-templates/oppicker
- [ ] Update public/CNAME to oppicker.free.componentdock.com
- [ ] Update homepage in package.json to https://oppicker.free.componentdock.com
- [ ] Run npm install at repo root to register workspace in package-lock.json

## Implementation
- [ ] Add Lato font link to index.html
- [ ] Set up theme tokens in index.css (@theme block with brand color #52de97)
- [ ] Build MultiselectDropdown component with:
  - [ ] Trigger button (52px height, white bg, 4px radius, shadow, "N selected" text)
  - [ ] Dropdown panel (absolute position, shadow, options list)
  - [ ] Custom checkbox styling (20x20, 4px radius, green active state)
  - [ ] Select All option at top
  - [ ] Click outside to close
  - [ ] Escape key to close
  - [ ] Keyboard navigation (Tab, Enter/Space, Arrow keys)
- [ ] Build App.tsx: section wrapper + heading + flex row with label + dropdown
- [ ] Verify Lato font loads
- [ ] Verify colors match tokens (#f8f9fd bg, #000 headings, gray text, #52de97 green)

## Testing
- [ ] Write tests for MultiselectDropdown (selection, deselection, select all, open/close, keyboard)
- [ ] Write tests for App (renders heading, renders label)
- [ ] Verify 100% coverage (lines, functions, branches, statements)

## Verification
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Build succeeds
- [ ] Visual fidelity matches reference design
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
