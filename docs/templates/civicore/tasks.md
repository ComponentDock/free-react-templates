# Civicore — Implementation Tasks

Recreation of ColorLib "Comport" (https://colorlib.com/wp/template/comport/)

## Design Notes

- **Color palette:** Brand orange #ff9902, dark navy #04091e, body #777, headings #222, bg #f9f9f9
- **Typography:** Poppins (headings), Open Sans (body) via Google Fonts
- **Buttons:** 3px radius, uppercase, 14px/600 weight, 15px 30px padding
- **Layout:** Bootstrap-style container/row/col pattern recreated with Tailwind grid
- **Images:** All placeholder via picsum.photos with deterministic seeds

## Sections (priority order)

1. [ ] Scaffold (package.json, vite.config, vitest.config, index.html, index.css, main.tsx, App.tsx)
2. [ ] Navbar — responsive with mobile hamburger
3. [ ] Hero — split layout, brand-highlighted text
4. [ ] SearchBar — orange bar with dropdowns + input
5. [ ] Features — 3 feature cards
6. [ ] Categories — 8 category cards with icons
7. [ ] Jobs — tabbed job listings
8. [ ] Newsletter — overlay email subscribe
9. [ ] Testimonials — 2-slide testimonials
10. [ ] News — 3 blog cards
11. [ ] Download — app download section
12. [ ] Footer — dark footer with ComponentDock link
13. [ ] Tests — 100% coverage
14. [ ] Verification — verify-app.sh passes
