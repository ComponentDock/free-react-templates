# QueryHub — Implementation TODO
<!-- prep-status: shipped-as=searchpad -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-search-21` design this prep describes shipped
> as `apps/searchpad` (<https://searchpad.free.componentdock.com>).
> The unchecked items below are prep history, not outstanding work.

## Pre-implementation
- [ ] Verify spec validates: `npm run spec:validate`
- [x] Copy simplest existing app as scaffold (e.g. `apps/abjure` → `apps/queryhub`) — superseded: shipped as `apps/searchpad`
- [ ] Rename package to `@free-react-templates/queryhub`
- [ ] Update `public/CNAME` to `queryhub.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://queryhub.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

## Implementation
- [ ] Create `src/components/RoundSearchToggle.tsx` — circular white button with magnifying glass icon, expands to input on click
- [ ] Create `src/components/SquareSearchToggle.tsx` — square white button with magnifying glass icon, expands to input on click
- [ ] Create `src/components/SearchInput.tsx` — expandable search input with auto-focus
- [ ] Create `src/App.tsx` — compose background + both toggles + footer
- [ ] Configure `src/index.css` with Tailwind + theme tokens (background #daedf7)
- [ ] Add `injectUiSource()` to `vite.config.ts`
- [ ] Add lucide-react `Search` icon import

## Tests
- [ ] Page renders light ice-blue background
- [ ] Round toggle renders as circular white button with search icon
- [ ] Square toggle renders as square white button with search icon
- [ ] Clicking round toggle expands to search input
- [ ] Clicking square toggle expands to search input
- [ ] Search input auto-focuses on expand
- [ ] Escape key collapses the search input
- [ ] Search input accepts text entry
- [ ] Both toggles are centered on the page
- [ ] Responsive layout on mobile
- [ ] Footer renders with ComponentDock link
- [ ] 100% coverage achieved

## Verification
- [ ] `scripts/verify-app.sh queryhub` passes (typecheck + lint + test:coverage + build)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] README updated with template status
