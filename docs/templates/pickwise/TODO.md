# Pickwise — Implementation Notes

## Source

- **ColorLib slug:** multiselect-09
- **Preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-09/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-09.jpg

## Structure

Single section — no header, no footer navigation, no multiple sections.

```
<section> (full-width, dark background, centered)
  └── <h2> "Multiselect #09"
  └── <div> (Select2 multiselect widget)
        └── Input field (dark bg, placeholder)
        └── Dropdown panel (black bg, options list)
        └── Selected chips (golden-yellow badges)
```

## Section-by-section fidelity notes

### 1. Page background

- Full-page dark background `#343434`
- Font: Lato (Google Fonts), weight 400, line-height 1.8

### 2. Heading

- "Multiselect #09" centered, white text, font-size 28px
- No decorative elements

### 3. Multiselect widget

- **Input field:** Dark background (`rgba(0, 0, 0, 0.8)`), 2px border (transparent, becomes `rgba(255,255,255,0.18)` on focus), 5px 10px padding, box-shadow
- **Dropdown panel:** Black background, 4px border-radius, box-shadow, 10px padding
- **Option rows:**
  - Custom checkbox: 20x20px, 2px solid rgba(255,255,255,0.18), 4px border-radius
  - Selected checkbox: `#f6c523` background, checkmark icon (FontAwesome \f00c)
  - Selected row: black background, `#f6c523` text
  - Hovered row: `rgba(255,255,255,0.1)` background
- **Selected chips:** `#f6c523` background, black text, 15px font-size, 2px 10px padding, remove button

### Implementation approach

1. Use a controlled React multiselect component (no jQuery/Select2 dependency)
2. Tailwind theme: define `brand` (#f6c523), `surface` (#343434), `surface-alt` (#000)
3. Custom checkbox indicators via styled divs (not native checkboxes)
4. Chips rendered as inline badges with remove buttons
5. Dropdown panel positioned absolutely below input
6. Focus/hover states via Tailwind groups

## Tokens for Tailwind `@theme`

```css
@theme {
  --color-brand: #f6c523;
  --color-surface: #343434;
  --color-surface-alt: #000000;
  --color-border-subtle: rgba(255, 255, 255, 0.18);
  --font-family-display: "Lato", Arial, sans-serif;
}
```
