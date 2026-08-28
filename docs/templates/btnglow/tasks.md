# BtnGlow — Prep Tasks & Design Notes

## Source

- ColorLib: https://colorlib.com/wp/template/bootstrap-buttons-07/
- Preview: https://preview.colorlib.com/theme/bootstrap-buttons-07/ (404 — fallback to screenshot)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-07.jpg

## Design Notes (from screenshot analysis)

### Visual Design

- Clean, minimal white-page layout on light background
- Centered content container with generous padding
- Plain system font stack (no custom Google Font needed)
- Muted grey section labels ("Button Sizes", "Button Colors", "Full width button")
- All buttons are **pill-shaped** (fully rounded / `rounded-full`)
- Consistent spacing between button rows and sections

### Color Palette (from screenshot + Bootstrap 4/5 defaults)

The screenshot shows exactly Bootstrap's standard color palette:

**Semantic Colors (row 1):**

| Name      | Hex     | Text  |
| --------- | ------- | ----- |
| Primary   | #0d6efd | white |
| Secondary | #6c757d | white |
| Success   | #198754 | white |
| Info      | #0dcaf0 | white |
| Warning   | #ffc107 | dark  |
| Danger    | #dc3545 | white |
| Light     | #f8f9fa | dark  |
| Dark      | #212529 | white |

**Extended Colors (row 2):**

| Name        | Hex     | Text  |
| ----------- | ------- | ----- |
| Orange      | #fd7e14 | white |
| Indigo      | #6610f2 | white |
| Pink        | #d63384 | white |
| Deep Orange | #e83e2c | white |
| Aqua        | #0dcaf0 | white |
| Dark        | #212529 | white |
| Black       | #000000 | white |
| Purple      | #6f42c1 | white |

**Extended Colors (row 3):**

| Name      | Hex     | Text  |
| --------- | ------- | ----- |
| Blue      | #0d6efd | white |
| Brown     | #795548 | white |
| Blue Gray | #607d8b | white |

### Button Sizes

- **Large**: generous padding, larger text
- **Medium**: standard Bootstrap default
- **Small**: compact padding, smaller text

All sizes use the same pill radius and primary color.

### Section Structure (in order)

1. Navbar (sticky, brand + dark toggle)
2. Hero/Title: "#07 - Bootstrap 4 Buttons"
3. Button Sizes demo (3 labeled buttons)
4. Button Colors — semantic palette (8 buttons)
5. Button Colors — extended palette row 2 (8 buttons)
6. Button Colors — extended palette row 3 (3 buttons)
7. Full Width Button (1 full-width button)
8. Footer (Component Dock link)

### Dark Mode

- Background: slate-900
- Text: slate-100 / white
- Buttons keep their semantic colors (don't invert)
- Section labels: slate-400

## Implementation Tasks

### 1. Scaffold & Config

- [ ] Create `apps/btnglow/` from simplest existing app template
- [ ] Rename package to `@free-react-templates/btnglow`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Set `public/CNAME` → `btnglow.free.componentdock.com`
- [ ] Set `package.json` homepage → `https://btnglow.free.componentdock.com`
- [ ] Run `npm install` at root to update lockfile

### 2. Design Tokens (`src/index.css`)

- [ ] Define CSS custom properties / @theme for all button colors
- [ ] Define size variants (lg, md, sm)
- [ ] Define pill radius utility
- [ ] Configure dark mode colors (bg-slate-900)

### 3. Components

- [ ] `Navbar.tsx` — brand "BtnGlow", dark mode toggle
- [ ] `Hero.tsx` — centered title
- [ ] `ButtonSizes.tsx` — Large/Medium/Small demo
- [ ] `ButtonColors.tsx` — semantic + extended palette grid
- [ ] `FullWidthButton.tsx` — block-level button
- [ ] `Footer.tsx` — Component Dock link

### 4. App Composition (`src/App.tsx`)

- [ ] Compose sections in correct order
- [ ] Wire dark mode context

### 5. Tests (TDD - write first)

- [ ] Navbar tests (render, toggle)
- [ ] Hero tests
- [ ] ButtonSizes tests (3 sizes render correctly)
- [ ] ButtonColors tests (all 19 colors present, correct labels)
- [ ] FullWidthButton tests
- [ ] Footer tests (Component Dock link)
- [ ] Dark mode integration test

### 6. Verification

- [ ] `npm run verify:app btnglow` passes
- [ ] 100% coverage
- [ ] Build succeeds
- [ ] Deploy preview works
