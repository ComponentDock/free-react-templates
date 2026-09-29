# SearchGate — Design Notes

## Source
- ColorLib: Search Form Bar 06
- Slug: search-form-bar-06
- Preview: https://preview.colorlib.com/theme/search-form-bar-06/ (404)
- Bootstrap variant: https://preview.colorlib.com/theme/bootstrap/search-form-bar-06/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-06.jpg

## Design Tokens (from preview CSS)
- Brand: #76a21e (olive green)
- Font: Poppins (Google Fonts), 16px body, 28px heading
- Button: 60px circle, #76a21e bg, white icon, shadow
- Input: 150px→300px on hover/focus, pill shape (border-radius 40px), white bg
- Background: #fafafa
- Transition: 0.3s ease on width change

## Section Order (minimal single-component template)
1. Page title (centered, Poppins 28px)
2. Search form container (centered)
   - Circular olive-green search button (60×60px, z-index 2)
   - Search input (absolute positioned, z-index 1, pill shape)
3. Animation: hover/focus on container expands input from 150px to 300px

## Fidelity Notes
- Match the exact olive-green (#76a21e) — not teal, not bright green
- Circular button must be exactly 60×60px with border-radius 50%
- Input pill shape: border-radius 40px, not 8px or 20px
- Input expansion animation: 0.3s ease, width 150→300px
- Input left-padding adjusts from 70px to 75px on expansion
- Shadow: `0px 5px 20px -12px rgba(0,0,0,0.36)` on button, `0.34` on input
- No category dropdown in this variant (unlike Search Form Bar 05)
- Poppins font from Google Fonts — load via <link> in index.html
- Reduced motion: disable transition when prefers-reduced-motion is set

## Implementation Outline
1. Create `apps/searchgate/` — copy simplest existing app, rename package
2. `src/App.tsx` — compose page title + SearchForm component
3. `src/components/SearchForm.tsx` — the animated search bar
4. `src/components/SearchForm.test.tsx` — TDD: test width states, animation, submit
5. `src/index.css` — Tailwind entry, @import Poppins from Google Fonts
6. `public/CNAME` — searchgate.free.componentdock.com
7. `package.json` — @free-react-templates/searchgate, homepage
8. Footer: "More templates at Component Dock" linking componentdock.com

## Key Test Cases
- Renders heading, circular button, pill input with placeholder
- Input width ~150px at rest, ~300px on hover/focus
- Button is 60×60px circle with #76a21e background
- Form submits on Enter with query value
- Form does not submit on empty input
- prefers-reduced-motion disables width transition
- No ColorLib references in app source
