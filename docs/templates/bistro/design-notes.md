# Bistro Template Tasks & Design Notes

## Recreated Source

- **ColorLib Source**: Bootstrap Accordion V02 (`https://colorlib.com/wp/template/accordion-02/`)
- **Live Preview**: `https://preview.colorlib.com/theme/accordion-02/`
- **New App Name**: `bistro` (`apps/bistro`)

## Section Structure & Order

1. **Header / Hero**: Simple clean header with title "Our Specialties" and subtitle.
2. **Accordion Menu Container**:
   - Breakfast (default open) with items (e.g., Grilled Beef with potatoes, $29)
   - Lunch with items and prices
   - Dinner with items and prices
   - Drink with beverages and prices
   - Wine with wine selections and prices
3. **Footer**: Clean attribution linking `https://www.componentdock.com/` ("Component Dock").

## Design Notes

- Color palette: Warm cream and deep brown/amber tones fitting a classic restaurant menu.
- Interactive state: Accordion state management in React using stateful toggles.
