# LookupBar — Design Notes & Task Outline

## Source
- **ColorLib:** Search Form Bar 13
- **URL:** https://colorlib.com/wp/template/search-form-bar-13/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/search-form-bar-13/
- **New name:** lookupbar

## Structure Order (single section)
This is a snippet/component, not a full page. Only one section:
1. **Navbar** — horizontal nav bar with brand, search form, and links

## Section-by-Section Fidelity Notes

### Navbar
- **Layout:** Flexbox row, container max-width 1140px, centered
- **Left side (75%):** Brand text (h3, blue #007bff) + search form
- **Right side (25%):** Three nav links (Home, About, Contact)
- **Search form:** Full-width pill-shaped input (border-radius 30px)
  - Magnifying glass SVG icon positioned absolutely at left: 15px
  - Input has left padding 35px to accommodate icon
  - Border: 1px solid #efefef
  - Focus: border becomes #000, no shadow
  - Placeholder color: #cccccc
- **Nav links:** Inline-flex list, each link has 25px vertical padding, 20px left margin
  - Color: #007bff, hover: #0056b3
  - Transition: 0.3s all ease
- **Navbar chrome:** Bottom border 1px solid #dae0e5, box-shadow 0 1px 5px rgba(0,0,0,0.1)
- **Responsive:** On mobile (<768px), brand centered, search full-width, links centered below

## Implementation Tasks
1. Create `apps/lookupbar/` workspace (copy simplest existing app, rename package)
2. Add Roboto font via Google Fonts link in `index.html`
3. Create `src/components/Navbar.tsx` — the single component
4. Style with Tailwind classes matching the design tokens
5. Add SVG search icon (inline or lucide-react `Search` icon)
6. Write tests for Navbar (renders brand, search input, nav links, hover states, responsive)
7. Ensure 100% coverage
8. Add footer with Component Dock link
9. Update `public/CNAME` and `package.json` homepage

## Notes
- The original uses a custom Bootstrap-like grid (`cl-col-md-9`, `cl-col-md-3`) — use Tailwind flex/grid instead
- The CSS uses `all: revert` reset at the top — in React/Tailwind this is handled by the base styles
- The search form's `action="#"` — in React this will be a controlled form with onSubmit handler
- No dark mode in the original — keep it light-only to match fidelity
