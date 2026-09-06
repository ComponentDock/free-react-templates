# Optbox — Implementation Tasks

## Source
- ColorLib: "Multiselect 05"
- URL: https://colorlib.com/wp/template/multiselect-05/
- Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-05/
- Description: Fully mobile-ready free simple multiselect dropdown with 13 options

## Tasks

### 1. Scaffold app folder
- [ ] Copy simplest existing app (e.g. `apps/pickbox` or `apps/combobox` as reference)
- [ ] Rename package to `@free-react-templates/optbox`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `optbox.free.componentdock.com`
- [ ] Set `"homepage"` in `package.json` to `https://optbox.free.componentdock.com`
- [ ] Run `npm install` at repo root

### 2. Build components
- [ ] `src/App.tsx` — compose page layout (centered container)
- [ ] `src/components/Heading.tsx` — "Optbox" heading, 28px, Lato, black, centered
- [ ] `src/components/OptionSelect.tsx` — multiselect dropdown with 13 options (Option1–Option13)
- [ ] Implement custom multiselect with checkboxes (no jQuery/Select2 dependency)
- [ ] Style with Tailwind, brand color `#fd5f00` for checkmarks/accent/focus

### 3. Design token setup
- [ ] Import Lato font (weights 300, 400, 700) via Google Fonts link in `index.html`
- [ ] Set `--brand: #fd5f00` in `@theme` block
- [ ] Body: white background, gray text, Lato font, 16px, line-height 1.8
- [ ] Section: 7em vertical padding

### 4. Component details
- [ ] Checkbox: 20x20px, 4px border-radius, transparent bg when unchecked, `#fd5f00` bg with white check when checked
- [ ] Dropdown: 4px border-radius, box-shadow `0px 3px 22px -15px rgba(0,0,0,0.63)`
- [ ] Focus border: 2px solid `#fd5f00`
- [ ] Selected pills: `rgba(0,0,0,0.1)` background, 15px font, × remove button
- [ ] Option highlight: white background, black text
- [ ] Clear button color: `#fd5f00`

### 5. Tests (TDD)
- [ ] `Heading.test.tsx` — renders heading text, correct styling
- [ ] `OptionSelect.test.tsx` — opens/closes, selects/deselects, multiple selection, keyboard nav, pill tags, remove buttons
- [ ] `App.test.tsx` — composes all sections, responsive layout

### 6. Footer
- [ ] Add footer with "Made with Component Dock" linking to `https://www.componentdock.com/`

### 7. Verification
- [ ] `npm run verify:app optbox` passes (typecheck + lint + test:coverage + build)
- [ ] 100% coverage on all statements/branches/functions/lines

## Design notes

### Structure order (1:1 with original)
1. Full-page centered section (`ftco-section` equivalent)
2. Heading row (col-md-7 centered)
3. Dropdown row (col-lg-4 centered)

### Fidelity notes
- Original uses Select2 jQuery plugin — React version should use a custom multiselect component (no jQuery)
- Original has 13 options: Option1 through Option13 — keep same options
- Original checkmark color: `#fd5f00` (orange) — use as brand/accent
- Original heading: "Multiselect #05" — renamed to "Optbox"
- Original uses Font Awesome 4.7 for checkmark icon — use lucide-react for check/chevron icons
- Original checkbox: 20x20px, 4px border-radius — match exactly
- Original dropdown shadow: `0px 3px 22px -15px rgba(0,0,0,0.63)` — match in Tailwind
- Original selected pills: `rgba(0,0,0,0.1)` background, 15px font — match
- Original min-width: 600px on desktop, 100% on mobile (breakpoint 992px)
- Original section padding: 7em 0 — match
- No navigation, no images, no footer in original — add minimal footer per repo rules
- Heading: font-size 28px, color #000, font-weight 400, font-family Lato
