# Btnflare — Implementation Tasks & Design Notes

## Overview

Recreate ColorLib **Bootstrap Buttons 07** as **Btnflare** (`apps/btnflare`, package `@free-react-templates/btnflare`).

**Source**: https://colorlib.com/wp/template/bootstrap-buttons-07/
**Preview**: https://preview.colorlib.com/theme/bootstrap-buttons-07/ (404 — fallback to screenshot)
**Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-07.jpg

---

## Section Structure (in order)

1. **Header** — Large bold title: "#07 - Bootstrap 4 Buttons"
2. **Size Scale Section** — Three Primary buttons (Large, Medium, Small) with labels
3. **Color Palette Section** — "Button Colors" heading + 18 buttons in 3 rows
4. **Full Width Section** — "Full width button" heading + 100%-width Primary button
5. **Footer** — "Made with Component Dock" link to https://www.componentdock.com/

---

## Tasks / Todo Outline

- [ ] **Scaffold app** — copy `apps/btnvibe` (simplest button template), rename to `btnflare`, update package.json
- [ ] **Update package.json** — name: `@free-react-templates/btnflare`, homepage: `https://btnflare.free.componentdock.com`, CNAME: `btnflare.free.componentdock.com`
- [ ] **Configure vite.config.ts** — add `injectUiSource()` helper (copy pattern from btnvibe)
- [ ] **index.html** — Google Fonts: Inter, title: "Btnflare — Bootstrap Button Showcase"
- [ ] **src/index.css** — Define @theme with Btnflare design tokens (see spec.md)
- [ ] **src/main.tsx** — Standard entry (excluded from coverage)
- [ ] **src/App.tsx** — Compose sections in order: Header → SizeScale → ColorPalette → FullWidth → Footer
- [ ] **src/components/Header.tsx** — Title "#07 - Bootstrap 4 Buttons"
- [ ] **src/components/SizeScale.tsx** — Large/Medium/Small Primary buttons with size labels
- [ ] **src/components/ColorPalette.tsx** — 3 rows of semantic color buttons with labels
- [ ] **src/components/FullWidth.tsx** — Full-width Primary button with heading
- [ ] **src/components/Footer.tsx** — Component Dock link
- [ ] **Write tests** — Vitest + Testing Library, 100% coverage for all components
- [ ] **Verify** — `npm run verify:app btnflare` (typecheck + lint + knip + fallow + test:coverage + build)
- [ ] **Deploy check** — ensure `public/CNAME` and `homepage` are correct

---

## Design Notes & Fidelity Details

### Button Shape

- **ALL buttons use pill shape**: `rounded-full` (not `rounded-lg` or `rounded-md`)
- This is a key differentiator from other button templates

### Color Accuracy (Bootstrap 4 Semantics)

Use EXACT Bootstrap 4 color values — these are the canonical brand colors:

| Variant     | Hex       | Tailwind Class (bg) | Text Color       |
| ----------- | --------- | ------------------- | ---------------- |
| Primary     | `#0d6efd` | `bg-blue-600`       | `text-white`     |
| Secondary   | `#6c757d` | `bg-slate-500`      | `text-white`     |
| Success     | `#198754` | `bg-green-600`      | `text-white`     |
| Info        | `#0dcaf0` | `bg-cyan-400`       | `text-slate-900` |
| Warning     | `#ffc107` | `bg-amber-400`      | `text-slate-900` |
| Danger      | `#dc3545` | `bg-red-600`        | `text-white`     |
| Light       | `#f8f9fa` | `bg-slate-100`      | `text-slate-900` |
| Orange      | `#fd7e14` | `bg-orange-500`     | `text-white`     |
| Indigo      | `#6610f2` | `bg-indigo-700`     | `text-white`     |
| Pink        | `#d63384` | `bg-pink-600`       | `text-white`     |
| Deep Orange | `#f4623a` | `bg-orange-600`     | `text-white`     |
| Aqua        | `#0891b2` | `bg-teal-600`       | `text-white`     |
| Dark        | `#212529` | `bg-slate-900`      | `text-white`     |
| Black       | `#000000` | `bg-black`          | `text-white`     |
| Purple      | `#6f42c1` | `bg-purple-600`     | `text-white`     |
| Blue        | `#0d6efd` | `bg-blue-600`       | `text-white`     |
| Brown       | `#8b5e3c` | `bg-amber-800`      | `text-white`     |
| Blue Gray   | `#6b7280` | `bg-slate-500`      | `text-white`     |

**Note**: Info, Warning, Light need dark text for contrast (WCAG AA). All others use white text.

### Sizing Scale (Bootstrap 4 equivalents)

- **Large** (`.btn-lg`): `px-8 py-4 text-lg` — generous padding
- **Medium** (`.btn-md`): `px-5 py-2.5 text-base` — default
- **Small** (`.btn-sm`): `px-3 py-1.5 text-sm` — compact

All sizes use `rounded-full` and `font-medium`.

### Hover Effects

- Subtle darken: `hover:bg-[color]-700` for most, `hover:bg-[color]-600` for already dark
- Smooth transition: `transition-colors duration-150 ease-in-out`
- Optional: slight elevation `hover:shadow-md` on color palette buttons

### Layout & Spacing

- Container: `max-w-4xl mx-auto px-4 py-16` (or similar generous vertical rhythm)
- Section gaps: `space-y-12` or `space-y-16`
- Button rows: `flex flex-wrap gap-3` (wraps on mobile)
- Size scale: `flex items-center gap-4` with labels above buttons
- Headings: `text-2xl font-bold mb-6` for section titles

### Dark Mode

- Background: `dark:bg-slate-900` on container
- Text headings: `dark:text-white`
- Button colors remain the SAME (semantic colors don't change in dark mode)
- Light variant button: `dark:bg-slate-200 dark:text-slate-900` (invert for contrast)
- Warning/Info: ensure text contrast in dark mode

### Font

- Inter via Google Fonts in index.html:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
  ```
- Tailwind: `font-sans` maps to Inter via @theme

### Component Dock Footer

- Fixed text: "Made with Component Dock"
- Link: `https://www.componentdock.com/`
- Style: `text-center py-8 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200`

---

## References

- **ColorLib Source**: https://colorlib.com/wp/template/bootstrap-buttons-07/
- **Bootstrap 4 Button Docs**: https://getbootstrap.com/docs/4.0/components/buttons/
- **Similar templates in repo**: btnvibe, btnstack, btnpulse, btnquint, btnspark, btncraft
- **Spec**: openspec/specs/template-btnflare/spec.md
