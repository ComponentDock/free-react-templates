# Pulldown Template — Implementation Tasks

## Task List

### Phase 1: Spec Review & Setup

- [ ] Read and understand the spec at `openspec/specs/template-pulldown/spec.md`
- [ ] Create app folder: `apps/pulldown`
- [ ] Copy minimal Vite+React+TS template from simplest existing app (e.g., `apps/abjure`)
- [ ] Rename package to `@free-react-templates/pulldown`
- [ ] Run `npm install` at repo root to register workspace
- [ ] Verify `package-lock.json` includes new workspace

### Phase 2: Design Tokens & Theme

- [ ] Add Tailwind theme tokens to `src/index.css`:
  - Primary: `#0075f6` (blue-600-ish custom)
  - Primary-hover: `#005dc3`
  - Dropdown-shadow: `0px 10px 34px -20px rgba(0, 0, 0, 0.41)`
  - Button-shadow: `0px 10px 20px -6px rgba(0, 0, 0, 0.12)`
- [ ] Add Poppins font via Google Fonts in `index.html`
- [ ] Define button base styles using `@utility` or component classes

### Phase 3: Component Development (TDD)

#### 3.1 Button Components

- [ ] `Button.test.tsx` — test variants, sizes, states
- [ ] `Button.tsx` — base button with `cn()` utility
- [ ] `DropdownToggle.test.tsx` — test aria attributes, icon positioning
- [ ] `DropdownToggle.tsx` — toggle button with chevron (down/up/left/right)

#### 3.2 Dropdown Menu

- [ ] `DropdownMenu.test.tsx` — test positioning, items, dividers, active state
- [ ] `DropdownMenu.tsx` — accessible menu with keyboard nav
- [ ] `DropdownItem.test.tsx` — test hover, active, divider
- [ ] `DropdownItem.tsx` — menu item component

#### 3.3 Dropdown Variations

- [ ] `DropdownVariation.test.tsx` — test all 4 directions
- [ ] `DropdownVariation.tsx` — composes trigger + menu with direction prop
- [ ] `SplitDropdownVariation.test.tsx` — test split button group
- [ ] `SplitDropdownVariation.tsx` — primary button + separate toggle

#### 3.4 Section Components

- [ ] `VariationColumn.test.tsx` — test header + two button groups
- [ ] `VariationColumn.tsx` — single column for one variation
- [ ] `PulldownSection.test.tsx` — test 4-column grid, responsive
- [ ] `PulldownSection.tsx` — main section composing 4 columns

#### 3.5 Layout & Page

- [ ] `Navbar.tsx` — minimal (or skip if not in design)
- [ ] `Footer.test.tsx` — test Component Dock link
- [ ] `Footer.tsx` — footer with Component Dock link
- [ ] `App.test.tsx` — integration test for full page
- [ ] `App.tsx` — compose section + footer

### Phase 4: Verification

- [ ] Run `npm run verify:app -- pulldown` (typecheck + lint + test:coverage + build + knip + fallow)
- [ ] Fix any failures
- [ ] Verify 100% coverage
- [ ] Manual visual check in browser

### Phase 5: Deploy Prep

- [ ] Add `public/CNAME` with `pulldown.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://pulldown.free.componentdock.com`
- [ ] Verify no ColorLib references in app code
- [ ] Verify Component Dock link in footer

## File Structure Target

```
apps/pulldown/
├── public/
│   ├── CNAME
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   ├── DropdownToggle.tsx
│   │   ├── DropdownToggle.test.tsx
│   │   ├── DropdownMenu.tsx
│   │   ├── DropdownMenu.test.tsx
│   │   ├── DropdownItem.tsx
│   │   ├── DropdownItem.test.tsx
│   │   ├── DropdownVariation.tsx
│   │   ├── DropdownVariation.test.tsx
│   │   ├── SplitDropdownVariation.tsx
│   │   ├── SplitDropdownVariation.test.tsx
│   │   ├── VariationColumn.tsx
│   │   ├── VariationColumn.test.tsx
│   │   ├── PulldownSection.tsx
│   │   ├── PulldownSection.test.tsx
│   │   ├── Footer.tsx
│   │   └── Footer.test.tsx
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── main.tsx
│   ├── index.css
│   └── test/
│       └── setup.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── vitest.config.ts
```
