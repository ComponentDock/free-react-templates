# OptPick — Implementation Todo & Design Notes

## Source mapping

- **ColorLib source:** Multiselect 01
- **Preview URL:** https://preview.colorlib.com/theme/multiselect-01/ (unreachable — fell back to screenshot analysis)
- **New name:** optpick
- **Category:** Bootstrap Multiselect Dropdown

## Section structure (from screenshot analysis)

1. **Page layout** — full-height container with light blue-white background (#f8f9fd)
2. **Card container** — white card with subtle grey border and shadow
3. **Dropdown trigger** — button/input showing current selection state
4. **Dropdown list** — expandable list of options with checkboxes
5. **Option rows** — individual selectable items with checkbox + label

## Design notes

### Layout
- The page is a full-height container with a very light blue-white background (#f8f9fd)
- A white card is centered on the page with subtle grey borders (#e5e5e5)
- The card contains the dropdown component
- The layout is clean and minimal with generous whitespace

### Visual fidelity notes
- **Card shape:** 8px border-radius with subtle shadow (`0 1px 3px rgba(0,0,0,0.1)`)
- **Dropdown list:** White background with grey borders between options
- **Checkboxes:** Green checkmarks (#62c65b) for selected items
- **Selected state:** Light green background (#f0fff0) for checked options
- **Typography:** Clean sans-serif fonts, subtle grey text (#666-#999)
- **Hover state:** Light grey background (#f5f5f5) on option hover
- **Spacing:** 12px vertical padding, 16px horizontal padding per option

### What differs from ColorLib original
- Original uses Bootstrap 4 jQuery multiselect plugin → we use React state + Tailwind
- Original loads jQuery + Bootstrap JS → we use pure React
- Original may use custom checkbox styling → we use Tailwind + custom CSS
- "No references to ColorLib" in app code — provenance only in spec

## Implementation tasks

- [ ] Create `apps/optpick/` workspace (copy simplest app, rename package)
- [ ] Build `src/App.tsx` — page layout with card container
- [ ] Build `src/components/MultiselectDropdown.tsx` — the main dropdown component
- [ ] Build `src/components/OptionItem.tsx` — individual option with checkbox
- [ ] Implement dropdown open/close state (useState + click handler)
- [ ] Implement checkbox toggle logic (multiple selection)
- [ ] Implement Select All / Clear All functionality
- [ ] Implement keyboard navigation (ArrowUp/Down, Space, Escape)
- [ ] Implement click-outside-to-close behavior (useEffect + ref)
- [ ] Style with Tailwind tokens: card-radius-8, border-grey, checkmark-green
- [ ] Add aria attributes: aria-expanded, aria-multiselectable, role="listbox"
- [ ] Footer with https://www.componentdock.com/ link
- [ ] Write Vitest tests: render, open, close, select, deselect, keyboard nav
- [ ] Verify 100% coverage
- [ ] Run `scripts/verify-app.sh optpick`
- [ ] Commit + push to feat branch, open PR, merge

## CSS tokens to replicate in Tailwind @theme

```
@theme {
  --color-optpick-bg: #f8f9fd;
  --color-optpick-card: #fff;
  --color-optpick-border: #e5e5e5;
  --color-optpick-text: #666;
  --color-optpick-text-muted: #999;
  --color-optpick-checkmark: #62c65b;
  --color-optpick-checkmark-bg: #f0fff0;
  --color-optpick-hover: #f5f5f5;
  --color-optpick-card-radius: 8px;
  --color-optpick-dropdown-radius: 4px;
}
```

## Component structure

```
apps/optpick/
  src/
    main.tsx              — entry (excluded from coverage)
    App.tsx               — page layout: card container + MultiselectDropdown
    index.css             — Tailwind entry + theme tokens
    test/setup.ts         — jest-dom import
    components/
      MultiselectDropdown.tsx  — dropdown trigger + option list
      OptionItem.tsx           — individual option with checkbox
      MultiselectDropdown.test.tsx
      OptionItem.test.tsx
  vite.config.ts
  vitest.config.ts
  package.json
  public/CNAME            — optpick.free.componentdock.com
```
