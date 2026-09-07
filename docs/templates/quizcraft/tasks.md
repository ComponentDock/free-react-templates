# QuizCraft — Implementation Tasks & Design Notes

## Template Overview

- **New name:** QuizCraft
- **Source:** ColorLib "Multiselect V07"
- **Source slug:** `multiselect-07`
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-07/
- **Category:** Creative Multiselect Box (form component demo)
- **Complexity:** Low — single section, single component, no multi-page layout

## Structure Order (section-by-section)

The original has ONE section. The React recreation follows this order:

1. **App shell** (`App.tsx`) — wraps the single section
2. **Section component** (`MultiselectSection.tsx` or similar) — the full page content:
   - Centered heading row (col-md-6)
   - Centered dropdown row (col-lg-4 col-md-6)
3. **MultiselectDropdown component** (`MultiselectDropdown.tsx`) — the interactive dropdown:
   - Custom select field with chip labels
   - Dropdown menu with options
   - Add/remove selection logic
4. **Footer** — minimal Component Dock attribution (required by conventions)

## Design Fidelity Notes

### Colors
- Primary brand: `#e8647c` (pink/coral) — use as Tailwind theme `brand` or `primary`
- Menu separator: `#ef90a2` — lighter pink for item borders
- Text: `gray` for body, `#000` for headings
- Background: `#fff` white throughout
- Default border: `#e6e6e6`
- Active border: `#e8647c`

### Typography
- Font: Lato (300, 400, 700) via Google Fonts `<link>` in index.html
- Body: 16px, line-height 1.8, normal weight, gray color
- Heading (.heading-section): 28px, Lato 400, #000

### Layout
- Single `<section>` with `py-28` (7em) vertical padding
- Bootstrap-like grid: centered rows, col-md-6 for heading, col-lg-4 col-md-6 for dropdown
- Use Tailwind flex/center utilities instead of Bootstrap grid classes
- Responsive: full-width dropdown on mobile

### Dropdown Behavior
- Custom multiselect component (NOT a native `<select multiple>`)
- Field shows selected items as inline chip/tag labels
- Chips: #e8647c bg, white text, × remove icon
- Menu: opens below field, solid #e8647c bg, white text
- Menu items: 1px #ef90a2 top border, FontAwesome circle icon left
- Hover: white bg, #e8647c text
- Border: default #e6e6e6, active/hover #e8647c, 4px radius
- Shadow on open: subtle box-shadow
- Transition: 0.3s ease on border color

### Interaction
- Click field → toggle menu open/close
- Click option → add chip to field, close menu (or keep open for multi)
- Click × on chip → remove selection
- Keyboard: Enter/Space toggle, arrows navigate, Escape closes
- Hover states on menu items and field

### Accessibility
- `<label>` for the dropdown ("Select Topics")
- `role="listbox"` on menu, `role="option"` on items
- `aria-selected` on selected options
- `aria-expanded` on the field trigger
- Keyboard navigation with roving tabindex

## Implementation Notes

- This is one of the simplest templates — single section, no complex layout
- The multiselect is the core challenge: build a custom accessible component
- Use `useState` for selected items array, `useRef` for focus management
- Use `cn()` from `packages/ui` for class composition
- Use `lucide-react` for the × (X) icon on chips instead of FontAwesome
- Placeholder images: none needed (no images in this template)
- The Semantic UI styling is purely visual — replicate with Tailwind, no Semantic UI dependency

## Files to Create

```
apps/quizcraft/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css          # Tailwind + theme tokens
│   └── components/
│       ├── MultiselectSection.tsx
│       ├── MultiselectDropdown.tsx
│       └── Footer.tsx
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Estimated Effort

- **Spec:** Done (this file)
- **Tests:** ~30 min (multiselect interaction tests are the bulk)
- **Implementation:** ~45 min (simple layout, moderate component logic)
- **Verification:** ~15 min (typecheck + lint + coverage + build)
