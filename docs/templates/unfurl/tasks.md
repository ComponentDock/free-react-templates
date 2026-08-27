# Unfurl — Implementation Tasks & Design Notes

## Task Outline

### 1. Spec validation & scaffolding

- [ ] `npm run spec:validate` passes for template-unfurl
- [ ] Create app folder `apps/unfurl` (copy from simplest existing app, e.g. `apps/aurora`)
- [ ] Rename package to `@free-react-templates/unfurl` in package.json
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Set `public/CNAME` → `unfurl.free.componentdock.com`
- [ ] Set `homepage` in package.json → `https://unfurl.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### 2. Components (TDD: tests first → implementation)

- [ ] `src/components/PageTitle.test.tsx` → `PageTitle.tsx`
- [ ] `src/components/Accordion.test.tsx` → `Accordion.tsx` (with AccordionItem sub-component)
- [ ] `src/components/AccordionItem.test.tsx` → `AccordionItem.tsx`
- [ ] `src/components/Footer.test.tsx` → `Footer.tsx`
- [ ] `src/App.test.tsx` → `App.tsx` (composes sections)
- [ ] `src/index.css` — Tailwind theme tokens (brand green #28a745, grey #6c757d)
- [ ] `src/main.tsx` — entry (excluded from coverage)

### 3. Verification

- [ ] `npm run verify:app unfurl` passes (typecheck + lint + test:coverage + build + knip + fallow)
- [ ] 100% coverage achieved
- [ ] Manual visual check in browser matches screenshot
- [ ] Deploy to `unfurl.free.componentdock.com`

---

## Design Notes (from screenshot — preview unreachable)

### Structure order (1:1)

1. **Page Title** — centered, `text-3xl font-bold text-gray-900 mb-8`
2. **Accordion List** — `space-y-4` vertical stack
3. **Footer** — `mt-16 text-center text-sm text-gray-500` with Component Dock link

### Accordion Item Structure

```
<AccordionItem>
  <AccordionHeader>
    <span class="header-text">Question text</span>
    <AccordionIcon />  ← square button with arrow (up/down)
  </AccordionHeader>
  <AccordionContent>
    <div class="content-inner">Lorem ipsum...</div>
  </AccordionContent>
</AccordionItem>
```

### Visual fidelity checklist (screenshot reference)

| Element                   | Screenshot detail                                      | Tailwind implementation                           |
| ------------------------- | ------------------------------------------------------ | ------------------------------------------------- |
| **Expanded header**       | Green text `#28a745`, font-weight 600                  | `text-green-600 font-semibold`                    |
| **Collapsed header**      | Grey text `#6c757d`, font-weight 600                   | `text-gray-600 font-semibold`                     |
| **Expanded icon**         | White up-arrow on green square 20×20px, radius 4px     | `bg-green-600 text-white w-5 h-5 rounded`         |
| **Collapsed icon**        | White down-arrow on grey square 20×20px, radius 4px    | `bg-gray-600 text-white w-5 h-5 rounded`          |
| **Content panel**         | White bg, thin left border (3px) matching header color | `border-l-4 border-green-600` / `border-gray-600` |
| **Content text**          | 14px, line-height ~1.5, grey `#6c757d`                 | `text-sm text-gray-600 leading-relaxed`           |
| **Spacing between items** | ~16px (1rem)                                           | `space-y-4` on parent                             |
| **Content padding**       | ~16px left, ~12px top/bottom                           | `pl-4 py-3`                                       |

### Interaction behavior

- **Single-open accordion**: clicking one collapses others
- **Toggle on click**: header acts as button
- **Keyboard**: Tab to focus, Enter/Space to toggle, ArrowUp/Down to move
- **ARIA**: `role="button"` on header, `aria-expanded`, `aria-controls` linking to content region, `role="region"` on content with `aria-labelledby`

### Font loading

- Use system UI font stack (Bootstrap default) — no Google Fonts needed
- `font-sans` in Tailwind v4 maps to system UI

### Color palette (Tailwind config)

```js
// In src/index.css @theme
--color-green-600: #28a745;
--color-gray-600: #6c757d;
--color-gray-900: #212529;
--color-gray-500: #6b7280; // for footer text
--color-gray-200: #dee2e6; // for borders
```

### Placeholder content (from screenshot)

- Item 1: "How to download and register?" + long lorem ipsum
- Item 2: "How to create your paypal account?"
- Item 3: "How to link your paypal and bank account?"

### Footer text

"Made with Component Dock" → link to `https://www.componentdock.com/`

---

## Open questions / decisions

- Since preview is 404, we rely 100% on screenshot. If preview becomes available later, we can refine.
- The screenshot shows "Bootstrap Accordion #8" as title — we keep this as page title (it's the demo page title).
- This is a single-page demo, not a full website template. Keep it minimal.
