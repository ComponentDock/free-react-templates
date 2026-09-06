# Oppicker — Implementation Design Notes

## Source mapping

- ColorLib: "Multiselect 01" — https://colorlib.com/wp/template/multiselect-01/
- Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-01/
- Original stack: Bootstrap 4.3.1 + jQuery + bootstrap-multiselect.js + Lato font
- React recreation stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Component structure (section order, top-to-bottom)

1. **Full-page section wrapper** — padding 7em 0, centered content, bg #f8f9fd
2. **Page heading** — "Multiselect #01", 28px, black, Lato 400, centered
3. **Multiselect row** — flex container with:
   - Label: "Select Language:" (150px wide, gray, left-aligned)
   - Custom multiselect dropdown trigger button
4. **Dropdown panel** — appears below trigger on click, contains:
   - "Select All" row (bold, gray text)
   - Option rows: PHP, JavaScript, Java, SQL, jQuery, .Net
   - Each row: custom checkbox (20x20, 4px radius) + label text (16px, weight 500)

## Design tokens (from live CSS extraction)

```
font-family: "Lato", Arial, sans-serif  (weights 300, 400, 700)
page-bg: #f8f9fd
text-color: gray
heading-color: #000
brand-green: #52de97
link-color: #52de97
heading-font-size: 28px
section-padding: 7em 0
checkbox-size: 20px
checkbox-border: 2px solid rgba(0,0,0,0.2)
checkbox-border-radius: 4px
checkbox-active-bg: #52de97
button-height: 52px
button-bg: #fff
button-border-radius: 4px
shadow: 0px 10px 23px -16px rgba(0,0,0,0.14)
```

## Implementation approach

### MultiselectDropdown component

The original uses jQuery bootstrap-multiselect plugin. React version:

1. Custom hook `useMultiselect` manages:
   - `selected: Set<string>` — currently selected values
   - `isOpen: boolean` — dropdown panel visibility
   - `toggle(value)` — add/remove from selected set
   - `selectAll()` / `deselectAll()` — bulk operations
2. Trigger button: shows "N selected" or "None selected"
3. Dropdown panel: absolutely positioned below trigger, with shadow
4. Checkbox styling: pure CSS/Tailwind (no library needed)
   - Inactive: 20x20 square, 2px border rgba(0,0,0,0.2), 4px radius, transparent bg
   - Active: bg #52de97, white checkmark (Unicode ✓ or lucide-react Check icon)
5. Click outside handler to close dropdown
6. Escape key handler to close dropdown
7. Keyboard navigation: Tab to trigger, Enter/Space to open, Arrow keys between items, Space to toggle

### App.tsx

Simple composition:
```tsx
<section className="py-28 bg-[#f8f9fd]">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-black font-normal text-[28px] mb-8">Multiselect #01</h2>
    <div className="flex justify-center">
      <div className="w-full max-w-md flex items-center gap-4">
        <label className="w-[150px] text-gray font-medium">Select Language:</label>
        <MultiselectDropdown options={options} />
      </div>
    </div>
  </div>
</section>
```

### index.css

```css
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
```

Theme tokens in `@theme` block for brand color.

## Fidelity notes

- The original uses Bootstrap 4 grid (container, row, col-md-8 col-lg-5). React version uses Tailwind flex/center.
- The original checkbox uses Font Awesome `\f00c` icon via `::before` pseudo-element. React version should use a Check icon or Unicode.
- The dropdown shadow is identical on trigger and panel.
- The "Select All" text is bold and gray, matching `.multiselect-all label` style.
- No footer in the original template — but per repo rules, add a Component Dock footer link.
- The original has no navbar — keep it that way (single-section page).

## Gotchas

1. The `<select multiple>` native element is hidden and replaced by the custom UI. In React, manage state purely via the hook — no hidden select needed.
2. The original `width: calc(100% - 150px)` on `.btn-group` is the dropdown's width. Use `flex-1` or `flex-grow` in Tailwind instead.
3. Font Lato must be loaded via `<link>` in index.html, not just CSS @import (faster FOUT).
4. Per repo convention: no `colorlib.com` or `preview.colorlib.com` strings in app code.
