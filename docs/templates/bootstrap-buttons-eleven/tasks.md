# Tasks & Design Notes: Bootstrap Buttons Eleven

## Source & Mapping

- **ColorLib Template**: Bootstrap Buttons 11 (`https://colorlib.com/wp/template/bootstrap-buttons-11/`)
- **Assigned App Name**: `bootstrap-buttons-eleven`
- **Package Name**: `@free-react-templates/bootstrap-buttons-eleven`
- **Surge Domain**: `bootstrap-buttons-eleven.free.componentdock.com`

---

## Section Outline & Structure (1:1 Fidelity Plan)

1. **Navbar (`Navbar.tsx`)**: Logo/brand, category jump links, GitHub/Docs links.
2. **Hero (`Hero.tsx`)**: Title, subtitle, quick filters for button categories.
3. **SolidButtons (`SolidButtons.tsx`)**: Primary, secondary, success, danger, warning, info, dark solid variants with hover states and disabled states.
4. **OutlineButtons (`OutlineButtons.tsx`)**: Bordered outline buttons and ghost buttons.
5. **GradientShadowButtons (`GradientShadowButtons.tsx`)**: Gradient backgrounds (indigo/purple, emerald/teal) and elevated shadows.
6. **IconButtons (`IconButtons.tsx`)**: Left/right icons, circular icon buttons, floating action buttons (FABs).
7. **ButtonGroups (`ButtonGroups.tsx`)**: Segmented controls, toolbar button groupings.
8. **Footer (`Footer.tsx`)**: Copyright, navigation links, mandatory Component Dock attribution (`https://www.componentdock.com/`).

---

## Design Notes & Token Mapping

- Tailwind v4 theme configuration via `src/index.css` using CSS custom properties.
- Colors: Slate (neutrals), Indigo (primary), Emerald (success), Amber (warning), Rose (danger).
- Fully responsive grid layouts (1 col mobile, 2 col tablet, 3-4 col desktop showcase grids).
