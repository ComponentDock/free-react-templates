# FlexQuery — Design Notes & Implementation Outline

## Source

- ColorLib template: Accordion 18
- URL: https://colorlib.com/wp/template/accordion-18/
- Preview: https://preview.colorlib.com/theme/bac/accordion-18/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-18.jpg

## Structure Order (top to bottom)

1. **Navbar** — None (original has no navbar; skip or add minimal brand)
2. **Heading Section** — Centered "Bootstrap Accordion #8" (rephrase to "Frequently Asked Questions" or similar)
3. **Accordion Container** — Three collapsible items in a `custom-accordion` container
4. **Footer** — Component Dock branding

## Section-by-Section Fidelity Notes

### Heading

- Centered, Roboto 20px, default weight
- Original uses `<h2>` with `my-5 text-center`
- Fidelity: match centering, size, and font family

### Accordion Items (x3)

- Each item: `#f9f9f9` background, 10px bottom margin, no border-radius
- Header: full-width button, `#ffffff` background, text color `#999`
- Header text left-aligned, padding 15px
- Icon badge: positioned absolute right, vertically centered
  - Collapsed: `#efefef` background, downward chevron, `border-radius: 4px`
  - Expanded: `#72c02c` background, upward chevron, white icon
- Expanded header text turns `#72c02c` green
- Body: 20px padding all sides, text color `#888`

### Accordion Behavior

- Only one item expanded at a time (data-parent / data-toggle pattern)
- Use React useState to track which item index is open
- First item open by default

### Icon Implementation

- Original uses icomoon font with pseudo-element (`::before` on `.btn-link`)
- React: use Lucide React `ChevronDown`/`ChevronUp` or render an icon div
- Position: absolute right, vertically centered with `top: 50%; transform: translateY(-50%)`
- Badge: small square with `border-radius: 4px`, background color toggles

### Footer

- Must link https://www.componentdock.com/
- Minimal: "Made with Component Dock" or similar

## CSS Token Extraction (from css/style.css)

```css
body {
  font-family: 'Roboto';
  background-color: #fff;
}
p {
  color: #b3b3b3;
  font-weight: 300;
}
h2 {
  font-size: 20px;
}
.content {
  padding: 7rem 0;
}
.custom-accordion .accordion-item {
  background-color: #f9f9f9;
  margin-bottom: 10px;
  border-radius: 0;
}
.custom-accordion .accordion-item .btn-link {
  background: #fff;
  color: #999;
  padding: 15px;
}
.custom-accordion .accordion-item .btn-link:before {
  background: #efefef;
  border-radius: 4px;
}
.custom-accordion .accordion-item .btn-link[aria-expanded='true']:before {
  background: #72c02c;
  color: #fff;
}
.custom-accordion .accordion-item.active .btn-link {
  color: #72c02c;
}
.custom-accordion .accordion-item .accordion-body {
  padding: 20px;
  color: #888;
}
```

## Tailwind Translation Notes

- `#72c02c` → define as `--color-brand: #72c02c` in `@theme`
- `#f9f9f9` → `bg-[#f9f9f9]`
- `#999` → `text-[#999]`
- `#888` → `text-[#888]`
- `#efefef` → `bg-[#efefef]`
- Font: `font-roboto` via Google Fonts link in index.html
- Zero border-radius: `rounded-none`
- Icon badge: absolute positioning, flex centering
