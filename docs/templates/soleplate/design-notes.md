# Soleplate — Design Notes & Implementation Tasks

**Source:** ColorLib Bootstrap Footer V09
**Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-09/
**Preview DOM analyzed:** Yes (HTML + CSS extracted)
**Screenshot analyzed:** Yes (design tokens confirmed via CSS)

---

## Structure (top to bottom)

1. **Footer section** — full-width, white background, centered content (max-width ~col-md-9)
   - Site logo (centered, large, blue-purple)
   - Horizontal navigation links (inline, centered)
   - "Stay in touch" social section (centered)
   - Copyright line (centered, gray)

## Section-by-section fidelity notes

### Footer container
- Background: white (no image, no overlay)
- Padding: `7rem 0` (≈ `py-28` in Tailwind)
- Content centered with max-width constraint

### Site logo
- Text: "Colorlib" → replace with "Component Dock" or project name
- Color: `#4200ff` (vibrant blue-purple)
- Size: 2rem, font-weight 900 (black)
- Centered, `mb-4` spacing below

### Navigation links
- Display: inline (horizontal row)
- Links: About, Services, Press, Careers, FAQ, Legal, Contact
- Color: `#000` (black) default, `#4200ff` on hover
- Each link: `padding: 10px`
- `mb-5` spacing below

### Social section
- "Stay in touch" heading: bold, 18px, black, `mb-4` spacing
- Social icons: inline-block, `padding: 10px` each
- Brand colors per platform:
  - Instagram: `#df588a` (pink)
  - Twitter: `#15b8ff` (sky blue)
  - Facebook: `#3742d0` (deep blue)
  - Dribbble: `#fa38c1` (magenta)
  - Pinterest: `#dd4d5a` (red)
- Use `lucide-react` icons: `Instagram`, `Twitter`, `Facebook`, `Pin`, `Dribbble`

### Copyright
- Color: `#999999` (gray)
- Centered text: "© 2019—2020 All Rights Reserved." (use current year)

## Design tokens for Tailwind @theme

```css
@theme {
  --color-soleplate-logo: #4200ff;
  --color-soleplate-logo-hover: #3300cc;
  --color-soleplate-text: #000000;
  --color-soleplate-link-hover: #4200ff;
  --color-soleplate-heading: #000000;
  --color-soleplate-copyright: #999999;
  --color-soleplate-instagram: #df588a;
  --color-soleplate-twitter: #15b8ff;
  --color-soleplate-facebook: #3742d0;
  --color-soleplate-dribbble: #fa38c1;
  --color-soleplate-pinterest: #dd4d5a;
  --font-family-footer: "Poppins", sans-serif;
  --font-family-body: "Roboto", sans-serif;
}
```

## Implementation tasks

1. [ ] Create `apps/soleplate/` folder (copy simplest existing footer app)
2. [ ] Rename package to `@free-react-templates/soleplate`
3. [ ] Set up `vite.config.ts` with `injectUiSource()`
4. [ ] Create `src/components/Footer.tsx` — the main footer component
5. [ ] Create `src/App.tsx` — compose footer only (no content demo area)
6. [ ] Add `public/CNAME` with `soleplate.free.componentdock.com`
7. [ ] Set `homepage` in `package.json` to `https://soleplate.free.componentdock.com`
8. [ ] Add footer link to `https://www.componentdock.com/` (branded as "Component Dock")
9. [ ] Add Poppins + Roboto fonts via `<link>` in `index.html`
10. [ ] Write Vitest tests for Footer (100% coverage)
11. [ ] Run `scripts/verify-app.sh soleplate` (typecheck + lint + tests + build)
12. [ ] Commit as `feat: add soleplate template (ColorLib bootstrap-footer-09)`
