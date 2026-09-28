# Searchly — Implementation TODO

## Pre-implementation
- [ ] Verify spec validates: `npm run spec:validate`
- [ ] Copy simplest existing app as scaffold (e.g. `apps/abjure` → `apps/searchly`)
- [ ] Rename package to `@free-react-templates/searchly`
- [ ] Update `public/CNAME` to `searchly.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://searchly.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

## Implementation
- [ ] Create `src/components/Hero.tsx` — full-viewport hero with background image + overlay
- [ ] Create `src/components/SearchBar.tsx` — three-field horizontal form (WHAT, WHERE, SEARCH)
- [ ] Create `src/App.tsx` — compose Hero + SearchBar
- [ ] Add Google Fonts link to `index.html` (Poppins or similar geometric sans)
- [ ] Configure `src/index.css` with Tailwind + theme tokens (brand color #ff4b5a)
- [ ] Add `injectUiSource()` to `vite.config.ts`

## Tests
- [ ] Hero renders background image and heading
- [ ] SearchBar renders WHAT input with placeholder
- [ ] SearchBar renders WHERE dropdown with default "1 adult"
- [ ] SearchBar renders SEARCH button with coral-red background
- [ ] WHAT input accepts text entry
- [ ] WHERE dropdown changes selection
- [ ] SEARCH button triggers search action
- [ ] Responsive layout stacks on mobile
- [ ] 100% coverage achieved

## Verification
- [ ] `scripts/verify-app.sh searchly` passes (typecheck + lint + test:coverage + build)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] README updated with template status
