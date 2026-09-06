# Selectify — Implementation Tasks

## Source
- ColorLib: "Multiselect 04"
- URL: https://colorlib.com/wp/template/multiselect-04/
- Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-04/

## Tasks

### 1. Scaffold app folder
- [ ] Copy simplest existing app (e.g. `apps/pickbox` or `apps/langpick` as reference)
- [ ] Rename package to `@free-react-templates/selectify`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `selectify.free.componentdock.com`
- [ ] Set `"homepage"` in `package.json` to `https://selectify.free.componentdock.com`
- [ ] Run `npm install` at repo root

### 2. Build components
- [ ] `src/App.tsx` — compose page layout (centered container)
- [ ] `src/components/Heading.tsx` — "Selectify" heading, 28px, Lato, black, centered
- [ ] `src/components/CitySelect.tsx` — multiselect dropdown with cities (Toronto, Bucharest, Paris)
- [ ] Implement custom multiselect with checkboxes (no jQuery/Bootstrap dependency)
- [ ] Style with Tailwind, brand color `#f30e5c` for checkmarks/accent

### 3. Design token setup
- [ ] Import Lato font (weights 300, 400, 700) via Google Fonts link in `index.html`
- [ ] Set `--brand: #f30e5c` in `@theme` block
- [ ] Body: white background, gray text, Lato font, 16px, line-height 1.8
- [ ] Section: 7em vertical padding

### 4. Tests (TDD)
- [ ] `Heading.test.tsx` — renders heading text, correct styling
- [ ] `CitySelect.test.tsx` — opens/closes, selects/deselects, multiple selection, keyboard nav
- [ ] `App.test.tsx` — composes all sections, responsive layout

### 5. Footer
- [ ] Add footer with "Made with Component Dock" linking to `https://www.componentdock.com/`

### 6. Verification
- [ ] `npm run verify:app selectify` passes (typecheck + lint + test:coverage + build)
- [ ] 100% coverage on all statements/branches/functions/lines

## Design notes

### Structure order (1:1 with original)
1. Full-page centered section (`ftco-section` equivalent)
2. Heading row (col-md-6 centered)
3. Dropdown row (col-md-6 col-lg-4 centered)

### Fidelity notes
- Original uses Bootstrap-select jQuery plugin — React version should use a custom multiselect component (no jQuery)
- Original has 3 options: Toronto, Bucharest, Paris — keep same options
- Original checkmark color: `#f30e5c` — use as brand/accent
- Original heading: "Multiselect #04" — renamed to "Selectify"
- Original uses Font Awesome 4.7 for icons — use lucide-react for chevron icon
- No navigation, no images, no footer in original — add minimal footer per repo rules
