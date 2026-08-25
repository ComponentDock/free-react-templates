# Expandia (Accordion 02 Recreation) — Tasks & Design Notes

## Overview

- **Source Template**: ColorLib Accordion 02 (`https://colorlib.com/wp/template/accordion-02/`)
- **Live Preview Reference**: `https://preview.colorlib.com/theme/bac/accordion-02/`
- **New App Name**: `expandia` (`apps/expandia`)

## Section Structure & Order

1. **Header / Banner**: Centered section title "Accordion #02" (or "Expandia Menu") with purple background banner (`#866ec7`) and "Our Specialties" subtitle block.
2. **Accordion Container**: Centered card (`max-w-2xl` / `w-full` / `col-md-8 col-lg-6`) with rounded corners (`5px`), soft shadow (`0px 10px 29px -16px rgba(0,0,0,0.12)`), and white background.
3. **Accordion Items**:
   - **Breakfast** (Expanded by default)
   - **Lunch**
   - **Dinner**
   - **Drink**
   - **Wine**
     Each category header features a custom flaticon/lucide icon with a yellow circular background highlight (`#feba2c`) and expand/collapse caret icon (`Ionicons` style).
4. **Menu Items List (Inside Expanded Accordion)**:
   - Circular dish thumbnail (`rounded-full`, `w-25 h-25`)
   - Dish title and price (`$29`, underlined with `#feba2c`)
   - Ingredient tags (`Meat`, `Potatoes`, `Rice`, `Tomato`)
5. **Footer**: Clean attribution linking to `https://www.componentdock.com/` ("Component Dock").

## Fidelity Notes

- **Colors**: Use `#866ec7` for header banner, `#feba2c` for accent circles and price underlines, and `#fafafa` for page background.
- **Interactivity**: Fully accessible accordion component where clicking headers toggles expanded state (with smooth transition effects).
- **Assets**: Use deterministic Unsplash/Picsum seed images (`https://picsum.photos/seed/expandia-<category>-<n>/100/100`) for menu item thumbnails.
