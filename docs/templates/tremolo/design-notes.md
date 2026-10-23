# Research & Task Notes: Tremolo (ColorLib accordion-02)

## Source Mapping

- **ColorLib Source**: `accordion-02` (Free Food Menu Accordion)
- **Preview URL**: `https://colorlib.com/wp/template/accordion-02/`
- **Assigned Name**: `tremolo` (`apps/tremolo`)

## Design & Architecture Notes

1. **Layout Structure**:
   - Navbar with branding and quick links.
   - Hero banner with appetizing background and title.
   - Accordion Menu Section: Grouped by culinary categories (Starters, Entrees, Wood-fired Pizzas, Desserts, Beverages). Each group is an accordion component with collapsible item lists.
   - Item Card layout: Thumbnail image (Picsum seed `tremolo-item-<n>`), Title, Price tag, Description, and dietary indicator pills.
   - Footer: Branding, social links, and mandatory Component Dock attribution linking `https://www.componentdock.com/`.

2. **Design Tokens**:
   - Primary: Amber/Orange (`#f59e0b` / `amber-500`)
   - Surface: Clean white cards with `border border-slate-100 shadow-sm rounded-xl`
   - Background: `bg-slate-50` or warm neutral

3. **Implementation Plan for Implementer Stream**:
   - Create `apps/tremolo` workspace following existing patterns (e.g. `apps/pleat`).
   - Configure `vite.config.ts` with `injectUiSource()`.
   - Set `public/CNAME` to `tremolo.free.componentdock.com`.
   - Write tests for accordion expansion, category filtering, and item display.
   - Ensure 100% test coverage and verify successfully via `scripts/verify-app.sh tremolo`.
