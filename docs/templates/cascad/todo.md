# Cascad — Implementation TODO

> Recreation of ColorLib Dropdown 05 (Bootstrap Dropdowns category)
> Source: https://colorlib.com/wp/template/dropdown-05/

## Tasks

- [ ] Scaffold app `apps/cascad` from simplest existing app
- [ ] Set up index.css with Tailwind @theme tokens (brand-primary #fa697c, brand-dark #f83851)
- [ ] Implement CartDropdown component (trigger bar + split button + dropdown menu)
- [ ] Implement ProductItem sub-component (thumbnail + name + price + quantity)
- [ ] Implement ViewAllLink component
- [ ] Wire up open/close state (click outside to close, Escape to close)
- [ ] Add keyboard accessibility (Enter/Space toggle, Escape close, focus ring)
- [ ] Add Roboto font via Google Fonts in index.html
- [ ] Write Vitest tests (100% coverage)
- [ ] Verify with `npm run verify:app cascad`

## Section order (fidelity to original)

1. Section heading (centered, "Cart Dropdown")
2. Trigger bar (pink pill with "Cart [N]" text + cart icon button)
3. Dropdown menu (white card, soft shadow, CSS triangle arrow)
4. Product items (3 rows: image + text + price/quantity)
5. View All link (centered, with arrow icon)

## Fidelity notes

- **Layout:** Single centered section, centered trigger bar, dropdown centered below
- **Colors:** Pink/salmon primary (#fa697c), darker red for split button (#f83851), white dropdown, light gray page
- **Typography:** Roboto, 400 weight headings, 500 weight product names, 16px items
- **Spacing:** 7em section padding, 20px trigger bar left padding, 20px dropdown item padding
- **Shadows:** `0 10px 34px -20px rgba(0,0,0,0.41)` on dropdown menu
- **Border radius:** 4px on trigger bar and split button
- **Icons:** Lucide React `ShoppingCart` for cart, `ArrowRight` for View All
- **Images:** picsum.photos placeholder thumbnails (60×60 crops)
