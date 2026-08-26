# Tasks for Stackly (ColorLib Accordion 08)

## 1. Setup & Scaffolding

- [ ] Initialize `apps/stackly` workspace (copy structure from simplest template, e.g. `lamina`)
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Configure `public/CNAME` (`stackly.free.componentdock.com`)
- [ ] Register workspace in root `package.json` / run `npm install`

## 2. Specification & Tests (TDD)

- [ ] Verify spec at `openspec/specs/template-stackly/spec.md`
- [ ] Write Vitest tests (`App.test.tsx`, `Accordion.test.tsx`) covering initial state, toggling, and footer attribution
- [ ] Achieve 100% test coverage across lines, functions, branches, statements

## 3. Implementation

- [ ] Implement Navbar / Header ("Accordion #08")
- [ ] Implement Accordion component with state management (expand/collapse)
- [ ] Implement Footer with Component Dock link (`https://www.componentdock.com/`)
- [ ] Apply Tailwind v4 design tokens and styles matching the visual design

## 4. Verification & Polish

- [ ] Run `npm run verify:app stackly` (typecheck, lint, coverage 100%, build)
- [ ] Update root `README.md` and check off item in `TEMPLATES.md`
